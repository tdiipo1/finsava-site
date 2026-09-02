/**
 * Property tests for the Strategy Lab demo math.
 *
 * The bug this guards against: spending MORE used to IMPROVE the odds, because
 * the score mixed "can I reach my number" with "does it last", and the target
 * ignored how long retirement actually was. Monotonicity is the property that
 * would have caught it, so it is what we assert.
 *
 * Run: node scripts/verify-strategy-lab.mjs   (after: npx tsc -p tsconfig.verify.json)
 */
import { simulate, STRATEGIES } from "../.verify/lib/strategy-lab.js";

let failures = 0;
const check = (name, ok, detail = "") => {
  console.log(`${ok ? "  PASS" : "  FAIL"}  ${name}${detail ? "  " + detail : ""}`);
  if (!ok) failures++;
};
const money = (n) => "$" + Math.round(n).toLocaleString();

for (const { key, label } of STRATEGIES) {
  console.log(`\n=== ${label} ===`);

  // 1. Spending more must never improve the outcome.
  let prev = 101, worstRise = 0, riseAt = "";
  for (let spendMo = 1500; spendMo <= 12000; spendMo += 250) {
    const r = simulate(30, 100_000, 2_000, spendMo, key);
    if (r.successPct > prev) {
      const rise = r.successPct - prev;
      if (rise > worstRise) { worstRise = rise; riseAt = `$${spendMo}/mo (+${rise}pp)`; }
    }
    prev = r.successPct;
  }
  check("higher spending never scores better", worstRise === 0, riseAt);

  // 2. Saving more must never worsen the outcome.
  prev = -1; let worstDrop = 0, dropAt = "";
  for (let mo = 0; mo <= 10_000; mo += 100) {
    const r = simulate(30, 100_000, mo, 4_500, key);
    if (r.successPct < prev) {
      const drop = prev - r.successPct;
      if (drop > worstDrop) { worstDrop = drop; dropAt = `$${mo}/mo (-${drop}pp)`; }
    }
    prev = r.successPct;
  }
  check("higher contributions never score worse", worstDrop === 0, dropAt);

  // 3. Starting with more must never worsen the outcome.
  prev = -1; let sDrop = 0, sAt = "";
  for (let sav = 0; sav <= 1_000_000; sav += 10_000) {
    const r = simulate(30, sav, 2_000, 4_500, key);
    if (r.successPct < prev) {
      const drop = prev - r.successPct;
      if (drop > sDrop) { sDrop = drop; sAt = `${money(sav)} (-${drop}pp)`; }
    }
    prev = r.successPct;
  }
  check("higher starting savings never scores worse", sDrop === 0, sAt);

  // 4. Adjacent slider positions must not jump (the re-rolled-seed symptom).
  let biggestJump = 0, jumpAt = "";
  for (let spendMo = 1500; spendMo < 12000; spendMo += 250) {
    const a = simulate(30, 100_000, 2_000, spendMo, key).successPct;
    const b = simulate(30, 100_000, 2_000, spendMo + 250, key).successPct;
    if (Math.abs(a - b) > biggestJump) { biggestJump = Math.abs(a - b); jumpAt = `$${spendMo}->$${spendMo + 250}`; }
  }
  check("no wild jumps between adjacent steps (<=8pp)", biggestJump <= 8, `max ${biggestJump}pp at ${jumpAt}`);

  // 5. Determinism.
  const x = simulate(41, 250_000, 3_100, 5_250, key);
  const y = simulate(41, 250_000, 3_100, 5_250, key);
  check("same inputs give same answer", x.successPct === y.successPct && x.atRetirement.p50 === y.atRetirement.p50);
}

// 6. The founder-s scenario must read as sane arithmetic.
console.log("\n=== founder scenario: age 32, $1M, $3,000/mo ===");
const f = simulate(32, 1_000_000, 3_000, 4_500, "four");
console.log(`  portfolio at 65 (median):  ${money(f.atRetirement.p50)}`);
console.log(`  range p25-p75:             ${money(f.atRetirement.p25)} - ${money(f.atRetirement.p75)}`);
console.log(`  supports about:            ${money(f.supportedIncome)}/yr`);
console.log(`  target spending:           ${money(4_500 * 12)}/yr`);
console.log(`  money lasts to 90:         ${f.successPct}%`);
// Deterministic closed form at 5% real for a sanity floor.
const cf = 1_000_000 * Math.pow(1.05, 33) + 36_000 * ((Math.pow(1.05, 33) - 1) / 0.05);
console.log(`  (no-volatility check:      ${money(cf)})`);
check("median lands within 35% of the no-volatility figure",
      Math.abs(f.atRetirement.p50 - cf) / cf < 0.35);
check("comfortably funds a $54k target", f.successPct >= 95, `${f.successPct}%`);

console.log(failures === 0 ? "\nALL PROPERTIES HOLD" : `\n${failures} PROPERTY FAILURE(S)`);
process.exit(failures === 0 ? 0 : 1);
