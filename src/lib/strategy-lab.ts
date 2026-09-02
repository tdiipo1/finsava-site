/**
 * Strategy Lab demo math.
 *
 * Deliberately simple and standalone: this is an illustration on a marketing
 * page, not the product engine. It is kept here rather than in the component
 * so the arithmetic can be exercised directly by scripts/verify-strategy-lab.ts.
 *
 * EVERYTHING IS IN TODAY-S DOLLARS. Returns are real (already net of
 * inflation) and the target spending is held flat in real terms, so the two
 * are in the same frame. Mixing frames -- growing a portfolio at a nominal
 * rate while comparing it to spending that is not inflated -- is the classic
 * way these calculators end up wildly wrong in one direction or the other.
 */

export type Strategy = "four" | "guardrails" | "vpw";

export const STRATEGIES: Array<{ key: Strategy; label: string; blurb: string }> = [
  { key: "four", label: "4% rule", blurb: "Withdraw a fixed, inflation-adjusted 4% of your starting pot." },
  { key: "guardrails", label: "Guardrails", blurb: "Cut spending 10% when withdrawals run hot, raise 10% when markets are kind." },
  { key: "vpw", label: "VPW", blurb: "Recalculate the withdrawal each year from the balance and years remaining." },
];

export const PATHS = 500;
export const RETIRE_AGE = 65;
export const END_AGE = 90;
export const REAL_RETURN = 0.05;
export const VOLATILITY = 0.12;

/** A shortfall year is one where you could not fund at least this much of the
 *  life you asked for. Above this, mild flexing is what Guardrails and VPW are
 *  FOR and should not read as failure. */
export const SHORTFALL_FLOOR = 0.8;

/** The rate used to translate a pot into an income figure. 4% is the number
 *  the reader has heard of, and 65-to-90 is a 25-year horizon, which is what
 *  the 4% rule was actually derived for. */
export const BENCHMARK_WITHDRAWAL = 0.04;

/**
 * FIXED seed, deliberately.
 *
 * This used to be derived from the inputs, so one nudge of a slider re-rolled
 * all 500 paths and the headline could swing about 7 points for no reason the
 * visitor could see -- sometimes making a WORSE plan score BETTER. A constant
 * seed gives common random numbers across every input combination: the same
 * market draws are reused, so a change on screen is always caused by the change
 * the visitor just made, never by the dice.
 */
export const SEED = 0x5eed1234;

/** Guardrails never cuts below this share of the target lifestyle. Without a
 *  floor the 10% cut compounds year after year and spirals toward zero. */
const GUARDRAIL_FLOOR = 0.75;
// Capped at the target, not above it. Real guardrails also raises spending in
// good markets, but this demo asks one question -- does the life you asked for
// last? -- and a strategy that quietly spends 150% of that target while being
// scored on survival is both harder to read and non-monotonic: more savings
// meant more spending meant slightly MORE chance of running dry.
const GUARDRAIL_CEILING = 1.0;

/* mulberry32 + Box-Muller. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Level payment that exhausts a balance over n years at rate r. */
export function annuityPayment(balance: number, r: number, years: number): number {
  const n = Math.max(years, 1);
  if (r === 0) return balance / n;
  return (balance * r) / (1 - Math.pow(1 + r, -n));
}

export interface SimResult {
  /** Percentiles of the balance at RETIRE_AGE, in today-s dollars. */
  atRetirement: { p25: number; p50: number; p75: number };
  /** Annual income the median pot supports at a 4% withdrawal rate, in
   *  today-s dollars. Independent of the target the visitor typed, so it
   *  answers "what does this actually buy me?" rather than echoing the
   *  question back. */
  supportedIncome: number;
  /** Share of paths that funded the target to END_AGE without running dry. */
  successPct: number;
  /** Years of contributions remaining before RETIRE_AGE. */
  yearsToRetire: number;
  p10: number[]; p25: number[]; p50: number[]; p75: number[]; p90: number[];
}

const percentile = (sorted: number[], q: number) =>
  sorted[Math.min(sorted.length - 1, Math.max(0, Math.ceil(q * sorted.length) - 1))] ?? 0;

export function simulate(
  age: number,
  savings: number,
  monthly: number,
  retireSpendMonthly: number,
  strategy: Strategy
): SimResult {
  const years = END_AGE - age;
  const annualContrib = monthly * 12;
  const targetSpend = retireSpendMonthly * 12;
  const yearsToRetire = Math.max(RETIRE_AGE - age, 0);

  const rand = mulberry32(SEED);
  const normal = () => {
    const u = Math.max(rand(), 1e-9);
    const v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  const balances: number[][] = Array.from({ length: years + 1 }, () => []);
  const retirementBalances: number[] = [];
  let successes = 0;

  for (let p = 0; p < PATHS; p++) {
    let bal = savings;
    let spend = targetSpend;
    let shortfallYears = 0;
    let ranDry = false;
    balances[0].push(bal);

    for (let y = 1; y <= years; y++) {
      const currentAge = age + y;
      bal *= 1 + (REAL_RETURN + VOLATILITY * normal());

      if (currentAge <= RETIRE_AGE) {
        bal += annualContrib;
        if (currentAge === RETIRE_AGE) retirementBalances.push(bal);
      } else {
        const yearsLeft = Math.max(END_AGE - currentAge + 1, 1);

        if (strategy === "guardrails") {
          // Static-ratio bands re-evaluated from the CURRENT ratio each year,
          // clamped both ways. Applying the cut to last year-s already-cut
          // figure is what let this spiral 90% -> 81% -> 73% and made a
          // flexible strategy look worse than a rigid one.
          const rate = bal > 0 ? spend / bal : 1;
          if (rate > 0.048) spend *= 0.9;
          else if (rate < 0.032) spend *= 1.1;
          spend = Math.min(Math.max(spend, targetSpend * GUARDRAIL_FLOOR),
                           targetSpend * GUARDRAIL_CEILING);
        } else if (strategy === "vpw") {
          spend = annuityPayment(bal, 0.05, yearsLeft);
        }

        const drawn = Math.min(Math.max(bal, 0), spend);
        if (drawn < targetSpend * SHORTFALL_FLOOR) shortfallYears++;
        bal -= drawn;
        if (bal <= 0) { bal = 0; ranDry = true; }
      }
      balances[y].push(bal);
    }

    // Success is now a single, monotonic idea: the pot funded the life you
    // asked for, all the way to 90. Both conditions get HARDER as spending
    // rises and EASIER as savings or contributions rise, which is the property
    // the old scoring lacked.
    if (!ranDry && shortfallYears === 0) successes++;
  }

  const sortedAtRetirement = [...retirementBalances].sort((a, b) => a - b);
  const byYear = (q: number) => balances.map((b) => percentile([...b].sort((x, y) => x - y), q));

  return {
    atRetirement: {
      p25: percentile(sortedAtRetirement, 0.25),
      p50: percentile(sortedAtRetirement, 0.5),
      p75: percentile(sortedAtRetirement, 0.75),
    },
    supportedIncome: percentile(sortedAtRetirement, 0.5) * BENCHMARK_WITHDRAWAL,
    successPct: Math.round((successes / PATHS) * 100),
    yearsToRetire,
    p10: byYear(0.1), p25: byYear(0.25), p50: byYear(0.5),
    p75: byYear(0.75), p90: byYear(0.9),
  };
}
