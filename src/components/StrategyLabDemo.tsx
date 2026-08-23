"use client";

import { useMemo, useState } from "react";

/**
 * Strategy Lab — interactive marketing demo.
 *
 * A deliberately simplified, fully client-side Monte Carlo so visitors can
 * FEEL the product: drag the sliders, watch the fan chart and success odds
 * respond. The real in-app Lab runs the full engine (1,000-path Monte Carlo,
 * every market cohort since 1871, five withdrawal strategies, spending smile,
 * Social Security modeling) — this demo makes no attempt to replicate it.
 *
 * Deterministic per input set (seeded PRNG) so the chart is stable across
 * re-renders instead of shimmering.
 */

type Strategy = "four" | "guardrails" | "vpw";

const STRATEGIES: Array<{ key: Strategy; label: string; blurb: string }> = [
  { key: "four", label: "4% rule", blurb: "Withdraw a fixed, inflation-adjusted 4% of your starting pot." },
  { key: "guardrails", label: "Guardrails", blurb: "Start at 5%, cut spending 10% in bad markets, raise it in good ones." },
  { key: "vpw", label: "VPW", blurb: "Recalculate the withdrawal each year from the balance and years remaining." },
];

const PATHS = 500;
const END_AGE = 90;
const REAL_RETURN = 0.05;
const VOLATILITY = 0.12;

/* Small fast seeded PRNG (mulberry32) + Box-Muller normal. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface SimResult {
  successPct: number;
  medianFireAge: number | null;
  fireNumber: number;
  /* per-year percentiles of balance, index 0 = current age */
  p10: number[]; p25: number[]; p50: number[]; p75: number[]; p90: number[];
}

function simulate(age: number, savings: number, monthly: number,
                  retireSpendMonthly: number, strategy: Strategy): SimResult {
  const years = END_AGE - age;
  const annualContrib = monthly * 12;
  const targetSpend = retireSpendMonthly * 12;
  const fireNumber = targetSpend * 25;
  const seed = Math.round(age * 7 + savings * 0.001 + monthly * 13 + retireSpendMonthly * 17) +
    (strategy === "four" ? 1 : strategy === "guardrails" ? 2 : 3);
  const rand = mulberry32(seed);
  const normal = () => {
    const u = Math.max(rand(), 1e-9);
    const v = rand();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  };

  const balances: number[][] = Array.from({ length: years + 1 }, () => []);
  const fireAges: number[] = [];
  let successes = 0;

  for (let p = 0; p < PATHS; p++) {
    let bal = savings;
    let retired = false;
    let spend = targetSpend;
    let spendShortfall = 0;
    let fireAge: number | null = null;
    balances[0].push(bal);

    for (let y = 1; y <= years; y++) {
      const r = REAL_RETURN + VOLATILITY * normal();
      bal *= 1 + r;
      if (!retired) {
        bal += annualContrib;
        if (bal >= fireNumber) {
          retired = true;
          fireAge = age + y;
          spend = targetSpend;
        }
      } else {
        const yearsLeft = Math.max(END_AGE - (age + y), 1);
        if (strategy === "guardrails") {
          const rate = bal > 0 ? spend / bal : 1;
          if (rate > 0.06) spend *= 0.9;       // bad market: tighten
          else if (rate < 0.04) spend *= 1.1;  // good market: loosen
          spend = Math.min(spend, targetSpend * 1.5);
        } else if (strategy === "vpw") {
          const rr = 0.05;
          spend = (bal * rr) / (1 - Math.pow(1 + rr, -yearsLeft));
        }
        const drawn = Math.min(Math.max(bal, 0), spend);
        if (drawn < targetSpend * 0.85) spendShortfall++;
        bal -= drawn;
        if (bal < 0) bal = 0;
      }
      balances[y].push(bal);
    }

    if (fireAge !== null) fireAges.push(fireAge);
    // Success: reached FIRE, money lasted to 90, and (for flexible
    // strategies) spending rarely fell far below the target lifestyle.
    const lasted = retired && bal > 0;
    const livedWell = spendShortfall <= Math.max(2, (END_AGE - (fireAge ?? END_AGE)) * 0.2);
    if (lasted && livedWell) successes++;
  }

  const pct = (arr: number[], q: number) => {
    const s = [...arr].sort((a, b) => a - b);
    return s[Math.min(s.length - 1, Math.floor(q * s.length))] ?? 0;
  };
  fireAges.sort((a, b) => a - b);

  return {
    successPct: Math.round((successes / PATHS) * 100),
    medianFireAge: fireAges.length ? fireAges[Math.floor(fireAges.length / 2)] : null,
    fireNumber,
    p10: balances.map((b) => pct(b, 0.10)),
    p25: balances.map((b) => pct(b, 0.25)),
    p50: balances.map((b) => pct(b, 0.50)),
    p75: balances.map((b) => pct(b, 0.75)),
    p90: balances.map((b) => pct(b, 0.90)),
  };
}

const usd0 = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const compact = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : n >= 1_000 ? `$${Math.round(n / 1_000)}k` : usd0(n);

/* Build an SVG area path between two percentile series. */
function bandPath(xs: number[], top: number[], bottom: number[], yOf: (v: number) => number): string {
  const up = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${yOf(top[i]).toFixed(1)}`).join(" ");
  const down = [...xs].reverse().map((x, j) => {
    const i = xs.length - 1 - j;
    return `L${x.toFixed(1)},${yOf(bottom[i]).toFixed(1)}`;
  }).join(" ");
  return `${up} ${down} Z`;
}

function linePath(xs: number[], series: number[], yOf: (v: number) => number): string {
  return xs.map((x, i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${yOf(series[i]).toFixed(1)}`).join(" ");
}

function Slider({ label, value, display, min, max, step, onChange }: {
  label: string; value: number; display: string;
  min: number; max: number; step: number; onChange: (v: number) => void;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-sm">
        <span className="text-[var(--muted)]">{label}</span>
        <span className="font-semibold tabular-nums">{display}</span>
      </span>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 w-full accent-[var(--primary)]"
      />
    </label>
  );
}

export default function StrategyLabDemo() {
  const [age, setAge] = useState(30);
  const [savings, setSavings] = useState(100_000);
  const [monthly, setMonthly] = useState(2_000);
  const [retireSpend, setRetireSpend] = useState(4_500);
  const [strategy, setStrategy] = useState<Strategy>("four");

  const sim = useMemo(
    () => simulate(age, savings, monthly, retireSpend, strategy),
    [age, savings, monthly, retireSpend, strategy],
  );

  /* Chart geometry */
  const W = 640, H = 240, PAD_L = 44, PAD_R = 12, PAD_T = 12, PAD_B = 24;
  const years = sim.p50.length;
  const maxY = Math.max(...sim.p90, sim.fireNumber) * 1.08;
  const xs = Array.from({ length: years }, (_, i) =>
    PAD_L + (i / Math.max(years - 1, 1)) * (W - PAD_L - PAD_R));
  const yOf = (v: number) => PAD_T + (1 - Math.min(v, maxY) / maxY) * (H - PAD_T - PAD_B);
  const gridVals = [0.25, 0.5, 0.75, 1].map((f) => maxY * f);
  const ageTicks = [age, Math.round((age + END_AGE) / 2), END_AGE];

  return (
    <section id="strategy-lab" className="scroll-mt-24 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Strategy Lab</h2>
          <p className="text-xs text-[var(--muted)]">
            Live in your browser &mdash; drag the sliders, switch strategies, watch your odds move.
          </p>
        </div>
        <div className="flex rounded-lg border border-[var(--card-border)] bg-[var(--background)] p-0.5 text-xs">
          {STRATEGIES.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setStrategy(s.key)}
              className={`rounded-md px-3 py-1.5 transition-colors ${
                strategy === s.key
                  ? "bg-[var(--primary)] font-semibold text-white"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-2 text-xs text-[var(--muted)]">{STRATEGIES.find((s) => s.key === strategy)!.blurb}</p>

      <div className="mt-5 grid gap-6 lg:grid-cols-5">
        {/* Controls + headline */}
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-bold ${sim.successPct >= 70 ? "text-[var(--income)]" : sim.successPct >= 45 ? "text-amber-400" : "text-red-400"}`}>
              {sim.successPct}%
            </span>
            <span className="text-sm text-[var(--muted)]">chance your plan holds to {END_AGE}</span>
          </div>
          <p className="text-sm text-[var(--muted)]">
            {sim.medianFireAge !== null
              ? <>Median FIRE age <span className="font-semibold text-[var(--foreground)]">{sim.medianFireAge}</span> &middot; target pot {compact(sim.fireNumber)}</>
              : <>Most paths never reach the {compact(sim.fireNumber)} target &mdash; try saving more or spending less.</>}
          </p>
          <Slider label="Current age" value={age} display={`${age}`} min={20} max={60} step={1} onChange={setAge} />
          <Slider label="Invested savings" value={savings} display={compact(savings)} min={0} max={1_000_000} step={10_000} onChange={setSavings} />
          <Slider label="Monthly contribution" value={monthly} display={usd0(monthly)} min={0} max={10_000} step={100} onChange={setMonthly} />
          <Slider label="Retirement spending / mo" value={retireSpend} display={usd0(retireSpend)} min={1_500} max={12_000} step={250} onChange={setRetireSpend} />
        </div>

        {/* Fan chart */}
        <div className="lg:col-span-3">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img"
               aria-label={`Projected portfolio balance fan chart from age ${age} to ${END_AGE}`}>
            {gridVals.map((v) => (
              <g key={v}>
                <line x1={PAD_L} x2={W - PAD_R} y1={yOf(v)} y2={yOf(v)} stroke="var(--card-border)" strokeWidth="1" />
                <text x={PAD_L - 6} y={yOf(v) + 3} textAnchor="end" fontSize="9" fill="var(--muted)">{compact(v)}</text>
              </g>
            ))}
            {/* P10–P90 and P25–P75 bands, then the median line */}
            <path d={bandPath(xs, sim.p90, sim.p10, yOf)} fill="var(--primary)" opacity="0.12" />
            <path d={bandPath(xs, sim.p75, sim.p25, yOf)} fill="var(--primary)" opacity="0.22" />
            <path d={linePath(xs, sim.p50, yOf)} fill="none" stroke="var(--primary)" strokeWidth="2.25" />
            {/* FIRE target line */}
            <line x1={PAD_L} x2={W - PAD_R} y1={yOf(sim.fireNumber)} y2={yOf(sim.fireNumber)}
                  stroke="var(--income)" strokeWidth="1.25" strokeDasharray="5 4" />
            <text x={W - PAD_R} y={yOf(sim.fireNumber) - 5} textAnchor="end" fontSize="9" fill="var(--income)">
              FIRE {compact(sim.fireNumber)}
            </text>
            {ageTicks.map((a, i) => {
              const x = PAD_L + ((a - age) / Math.max(END_AGE - age, 1)) * (W - PAD_L - PAD_R);
              return (
                <text key={i} x={x} y={H - 8} textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"}
                      fontSize="9" fill="var(--muted)">age {a}</text>
              );
            })}
          </svg>
          <p className="mt-2 text-[11px] leading-relaxed text-[var(--muted)]">
            Simplified illustration: {PATHS} random paths at a flat 5% real return, 12% volatility.
            The in-app Lab runs the full engine &mdash; 1,000-path Monte Carlo, every real market cohort
            since 1871, five withdrawal strategies, spending smile, and Social Security modeling.
          </p>
        </div>
      </div>
    </section>
  );
}
