"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  simulate, STRATEGIES, PATHS, RETIRE_AGE, END_AGE,
  REAL_RETURN, VOLATILITY, BENCHMARK_WITHDRAWAL, type Strategy,
} from "@/lib/strategy-lab";

/**
 * Strategy Lab -- interactive marketing demo.
 *
 * The arithmetic lives in @/lib/strategy-lab so it can be exercised directly by
 * scripts/verify-strategy-lab.mjs. That script asserts the property this page
 * used to violate: spending more must never improve the outcome.
 *
 * The headline is a portfolio value and the income it supports, because those
 * are figures a visitor can sanity-check against their own arithmetic. A bare
 * percentage is not checkable, so when it looks wrong -- and it did -- there is
 * nothing a reader can do but distrust the whole page.
 */

const usd0 = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const compact = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(1)}M` : n >= 1_000 ? `$${Math.round(n / 1_000)}k` : usd0(n);

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
  const [showAssumptions, setShowAssumptions] = useState(false);

  const sim = useMemo(
    () => simulate(age, savings, monthly, retireSpend, strategy),
    [age, savings, monthly, retireSpend, strategy],
  );

  const targetAnnual = retireSpend * 12;
  const coversTarget = sim.supportedIncome >= targetAnnual;

  /* Chart geometry */
  const W = 640, H = 240, PAD_L = 44, PAD_R = 12, PAD_T = 12, PAD_B = 24;
  const years = sim.p50.length;
  const maxY = Math.max(...sim.p90, 1) * 1.08;
  const xs = Array.from({ length: years }, (_, i) =>
    PAD_L + (i / Math.max(years - 1, 1)) * (W - PAD_L - PAD_R));
  const yOf = (v: number) => PAD_T + (1 - Math.min(v, maxY) / maxY) * (H - PAD_T - PAD_B);
  const gridVals = [0.25, 0.5, 0.75, 1].map((f) => maxY * f);
  const ageTicks = [age, Math.round((age + END_AGE) / 2), END_AGE];
  const retireX = PAD_L + (Math.max(RETIRE_AGE - age, 0) / Math.max(END_AGE - age, 1)) * (W - PAD_L - PAD_R);

  return (
    <section id="strategy-lab" className="scroll-mt-24 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Strategy Lab</h2>
          <p className="text-xs text-[var(--muted)]">
            Live in your browser &mdash; drag the sliders and watch your retirement change.
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
          {age >= RETIRE_AGE ? (
            <p className="text-sm text-[var(--muted)]">
              This illustration projects savings up to age {RETIRE_AGE}. Slide your age below {RETIRE_AGE} to
              see it.
            </p>
          ) : (
            <div>
              <p className="text-xs uppercase tracking-wide text-[var(--muted)]">
                Projected at age {RETIRE_AGE}
              </p>
              <p className="text-4xl font-bold tabular-nums">{compact(sim.atRetirement.p50)}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">
                Typically between {compact(sim.atRetirement.p25)} and {compact(sim.atRetirement.p75)}, in
                today&rsquo;s money.
              </p>
              <p className="mt-3 text-sm">
                That supports about{" "}
                <span className="font-semibold text-[var(--foreground)]">{usd0(sim.supportedIncome)}</span>{" "}
                a year &mdash;{" "}
                <span className={coversTarget ? "text-[var(--income)]" : "text-amber-400"}>
                  {coversTarget ? "more than" : "short of"} the {usd0(targetAnnual)} you want to spend
                </span>
                .
              </p>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Chance the money lasts to {END_AGE}:{" "}
                <span
                  className={`font-semibold ${
                    sim.successPct >= 85
                      ? "text-[var(--income)]"
                      : sim.successPct >= 60
                        ? "text-amber-400"
                        : "text-red-400"
                  }`}
                >
                  {sim.successPct}%
                </span>
              </p>
            </div>
          )}

          <Slider label="Current age" value={age} display={`${age}`} min={20} max={60} step={1} onChange={setAge} />
          <Slider label="Invested savings" value={savings} display={compact(savings)} min={0} max={2_000_000} step={10_000} onChange={setSavings} />
          <Slider label="Monthly contribution" value={monthly} display={usd0(monthly)} min={0} max={10_000} step={100} onChange={setMonthly} />
          <Slider label="Retirement spending / mo" value={retireSpend} display={usd0(retireSpend)} min={1_500} max={12_000} step={250} onChange={setRetireSpend} />
        </div>

        {/* Fan chart */}
        <div className="lg:col-span-3">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="w-full"
            role="img"
            aria-label={`Projected portfolio balance from age ${age} to ${END_AGE}, median ${compact(sim.atRetirement.p50)} at age ${RETIRE_AGE}`}
          >
            {gridVals.map((v) => (
              <g key={v}>
                <line x1={PAD_L} x2={W - PAD_R} y1={yOf(v)} y2={yOf(v)} stroke="var(--card-border)" strokeWidth="1" />
                <text x={PAD_L - 6} y={yOf(v) + 3} textAnchor="end" fontSize="9" fill="var(--muted)">{compact(v)}</text>
              </g>
            ))}
            <path d={bandPath(xs, sim.p90, sim.p10, yOf)} fill="var(--primary)" opacity="0.12" />
            <path d={bandPath(xs, sim.p75, sim.p25, yOf)} fill="var(--primary)" opacity="0.22" />
            <path d={linePath(xs, sim.p50, yOf)} fill="none" stroke="var(--primary)" strokeWidth="2.25" />
            {age < RETIRE_AGE && (
              <>
                <line x1={retireX} x2={retireX} y1={PAD_T} y2={H - PAD_B}
                      stroke="var(--income)" strokeWidth="1.25" strokeDasharray="5 4" />
                <text x={retireX + 4} y={PAD_T + 10} fontSize="9" fill="var(--income)">age {RETIRE_AGE}</text>
              </>
            )}
            {ageTicks.map((a, i) => {
              const x = PAD_L + ((a - age) / Math.max(END_AGE - age, 1)) * (W - PAD_L - PAD_R);
              return (
                <text key={i} x={x} y={H - 8} textAnchor={i === 0 ? "start" : i === 2 ? "end" : "middle"}
                      fontSize="9" fill="var(--muted)">age {a}</text>
              );
            })}
          </svg>

          <button
            type="button"
            onClick={() => setShowAssumptions((v) => !v)}
            className="mt-2 text-[11px] underline underline-offset-2 text-[var(--muted)] hover:text-[var(--foreground)]"
            aria-expanded={showAssumptions}
          >
            {showAssumptions ? "Hide the assumptions" : "What this assumes"}
          </button>

          {showAssumptions && (
            <div className="mt-2 space-y-2 rounded-lg border border-[var(--card-border)] bg-[var(--background)] p-3 text-[11px] leading-relaxed text-[var(--muted)]">
              <p>
                <span className="font-semibold text-[var(--foreground)]">Every figure is in today&rsquo;s money.</span>{" "}
                Returns are {(REAL_RETURN * 100).toFixed(0)}% a year after inflation, with{" "}
                {(VOLATILITY * 100).toFixed(0)}% volatility &mdash; so {compact(sim.atRetirement.p50)} at{" "}
                {RETIRE_AGE} means it buys what that buys now, not an inflated future number.
              </p>
              <p>
                We run {PATHS} possible market histories, contribute until age {RETIRE_AGE}, then spend to{" "}
                {END_AGE}. The income figure applies a {(BENCHMARK_WITHDRAWAL * 100).toFixed(0)}% withdrawal
                rate to the middle outcome. Half the time you do better than the headline; a quarter of the
                time you land below the lower number shown.
              </p>
              <p>
                <span className="font-semibold text-[var(--foreground)]">Not included:</span> taxes, Social
                Security, investment fees, healthcare before Medicare, or any change in how much you save
                over time. A real plan has all of these, which is why this is an illustration and not a
                forecast.
              </p>
              <p>
                The in-app Lab runs the full engine &mdash; 1,000-path Monte Carlo, real market cohorts since
                1871, five withdrawal strategies, spending smile and Social Security modelling.
              </p>
            </div>
          )}

          <p className="mt-2 text-[11px] leading-relaxed text-[var(--muted)]">
            Educational illustration, not financial advice. See our{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-[var(--foreground)]">
              terms
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
