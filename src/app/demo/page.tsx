import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import StrategyLabDemo from "@/components/StrategyLabDemo";

export const metadata: Metadata = {
  title: "Live Demo — Finsava",
  description:
    "Try the interactive Strategy Lab in your browser — drag sliders, switch withdrawal strategies, watch your FIRE odds move — plus a sample-data preview of the dashboard. No signup required.",
  alternates: { canonical: "/demo" },
};

// Mirrors the public GET /api/demo/preview snapshot. Entirely synthetic sample
// data — no real accounts — so the marketing demo has zero runtime dependency.
const snapshot = {
  netWorth: { total: 142_500, assets: 168_900, liabilities: 26_400 },
  monthly: { income: 7_850, expenses: 5_320, net: 2_530, savingsRatePct: 32.2 },
  spending: [
    { category: "Housing", amount: 2_150 },
    { category: "Groceries", amount: 720 },
    { category: "Dining", amount: 480 },
    { category: "Transport", amount: 410 },
    { category: "Utilities", amount: 320 },
    { category: "Entertainment", amount: 260 },
    { category: "Health", amount: 230 },
    { category: "Other", amount: 750 },
  ],
  transactions: [
    { date: "May 31", merchant: "Whole Foods Market", category: "Groceries", amount: -86.42 },
    { date: "May 30", merchant: "Shell", category: "Transport", amount: -52.1 },
    { date: "May 29", merchant: "Netflix", category: "Entertainment", amount: -15.49 },
    { date: "May 28", merchant: "Acme Payroll", category: "Income", amount: 3_925.0 },
    { date: "May 27", merchant: "Pacific Gas & Electric", category: "Utilities", amount: -142.88 },
    { date: "May 26", merchant: "Blue Bottle Coffee", category: "Dining", amount: -6.75 },
  ],
  fire: { probabilityPct: 78, yearsP50: 14, yearsP10: 11, yearsP90: 19, fireNumber: 1_250_000 },
  healthScore: { score: 82, grade: "B+" },
  // Same numbers the API preview returns, so the two demos cannot disagree.
  // Tiles sum to marketValue; marketValue - costBasis is the stated gain.
  investments: {
    marketValue: 96_400,
    costBasis: 71_250,
    unrealizedGain: 25_150,
    gainPct: 35.3,
    coveragePct: 100,
    incomeTtm: 1_284,
    contributionsYtd: 14_600,
    positions: [
      { ticker: "VTI", name: "Vanguard Total Stock Market ETF", value: 31_200, gainPct: 42.1, isCash: false },
      { ticker: "VXUS", name: "Vanguard Total International Stock ETF", value: 14_800, gainPct: 11.4, isCash: false },
      { ticker: "VOO", name: "Vanguard S&P 500 ETF", value: 12_400, gainPct: 38.7, isCash: false },
      { ticker: "BND", name: "Vanguard Total Bond Market ETF", value: 9_600, gainPct: -3.2, isCash: false },
      { ticker: "QQQM", name: "Invesco NASDAQ 100 ETF", value: 8_900, gainPct: 61.5, isCash: false },
      { ticker: "SCHD", name: "Schwab US Dividend Equity ETF", value: 7_300, gainPct: 9.8, isCash: false },
      { ticker: "AAPL", name: "Apple Inc.", value: 6_100, gainPct: 128.4, isCash: false },
      { ticker: "CASH", name: "Settlement cash", value: 6_100, gainPct: null, isCash: true },
    ] as Array<{ ticker: string; name: string; value: number; gainPct: number | null; isCash: boolean }>,
  },
};

/** Same ramp the app ships: near-grey at 0, log magnitude, white stays legible. */
function heat(gainPct: number | null, isCash: boolean): string {
  if (isCash) return "#0f766e";
  if (gainPct === null) return "hsl(215, 10%, 45%)";
  const mag = Math.min(1, Math.log10(1 + Math.abs(gainPct) / 8) / Math.log10(1 + 100 / 8));
  return `hsl(${gainPct >= 0 ? 142 : 0}, ${8 + Math.round(62 * mag)}%, ${35 - Math.round(7 * mag)}%)`;
}

const usd = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const usdCents = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });

function Kpi({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-5">
      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">{label}</p>
      <p className="mt-2 text-2xl font-bold tracking-tight">{value}</p>
      {hint && <p className="mt-1 text-xs text-[var(--muted)]">{hint}</p>}
    </div>
  );
}

export default function DemoPage() {
  const maxSpend = Math.max(...snapshot.spending.map((s) => s.amount));

  return (
    <div className="min-h-screen">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-28">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1 text-xs text-[var(--muted)]">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--income)]" />
              Interactive demo &middot; sample data
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">See Finsava in action</h1>
            <p className="mt-2 max-w-xl text-[var(--muted)]">
              The Strategy Lab below runs live in your browser &mdash; no signup, no real accounts.
              Everything else is a sample-data snapshot of what your dashboard looks like once a
              bank is connected.
            </p>
          </div>
          <a
            href="/#waitlist"
            className="shrink-0 rounded-xl bg-[var(--primary)] px-6 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
          >
            Join the Waitlist
          </a>
        </div>

        {/* Interactive Strategy Lab — the homepage promises this; keep it first. */}
        <StrategyLabDemo />

        {/* KPIs */}
        <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <Kpi label="Net Worth" value={usd(snapshot.netWorth.total)} hint={`${usd(snapshot.netWorth.assets)} assets`} />
          <Kpi label="Monthly Net" value={usd(snapshot.monthly.net)} hint={`${usd(snapshot.monthly.income)} in`} />
          <Kpi label="Savings Rate" value={`${snapshot.monthly.savingsRatePct}%`} hint="of take-home" />
          <Kpi label="Health Score" value={`${snapshot.healthScore.score}`} hint={`Grade ${snapshot.healthScore.grade}`} />
        </section>

        {/* Holdings — real positions are the thing this product owns, and the
            demo showed none of them. Tile size is market value, colour is gain
            against cost. */}
        <section className="mt-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold">Holdings</h2>
          <p className="text-xs text-[var(--muted)]">
            {usd(snapshot.investments.marketValue)} &middot;{" "}
            <span className="text-[var(--income)]">
              +{usd(snapshot.investments.unrealizedGain)} ({snapshot.investments.gainPct}%)
            </span>{" "}
            vs cost &middot; covers {snapshot.investments.coveragePct}% of portfolio value
          </p>
          <div className="mt-4 flex flex-wrap gap-1">
            {snapshot.investments.positions.map((h) => (
              <div
                key={h.ticker}
                title={`${h.name} — ${h.isCash ? "cash position" : `${h.gainPct! >= 0 ? "up" : "down"} ${Math.abs(h.gainPct!).toFixed(1)}% vs cost`}`}
                style={{
                  background: heat(h.gainPct, h.isCash),
                  flexGrow: h.value,
                  flexBasis: 0,
                  minWidth: "78px",
                }}
                className="rounded p-2 text-white"
              >
                <p className="text-xs font-semibold">{h.ticker}</p>
                <p className="text-[10px] opacity-90">
                  {((h.value / snapshot.investments.marketValue) * 100).toFixed(1)}%
                  {h.gainPct !== null && (
                    <> &middot; {h.gainPct >= 0 ? "+" : ""}{h.gainPct}%</>
                  )}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-[var(--muted)]">
            {usd(snapshot.investments.incomeTtm)} of dividends and interest over the
            last year &middot; {usd(snapshot.investments.contributionsYtd)} contributed
            year to date, with rollovers between your own accounts excluded &mdash; a
            $250k custodian change is not $250k of new savings.
          </p>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          {/* Spending breakdown */}
          <section className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 lg:col-span-3">
            <h2 className="text-lg font-semibold">Spending by category</h2>
            <p className="text-xs text-[var(--muted)]">This month &middot; {usd(snapshot.monthly.expenses)} total</p>
            <div className="mt-5 space-y-3">
              {snapshot.spending.map((s) => (
                <div key={s.category} className="flex items-center gap-3">
                  <span className="w-28 shrink-0 text-sm text-[var(--muted)]">{s.category}</span>
                  <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[var(--background)]">
                    <div
                      className="h-full rounded-full bg-[var(--primary)]"
                      style={{ width: `${(s.amount / maxSpend) * 100}%` }}
                    />
                  </div>
                  <span className="w-16 shrink-0 text-right text-sm font-medium">{usd(s.amount)}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FIRE projection */}
          <section className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6 lg:col-span-2">
            <h2 className="text-lg font-semibold">FIRE projection</h2>
            <p className="text-xs text-[var(--muted)]">Monte Carlo &middot; target {usd(snapshot.fire.fireNumber)}</p>
            <div className="mt-5 flex items-baseline gap-2">
              <span className="text-4xl font-bold text-[var(--income)]">{snapshot.fire.probabilityPct}%</span>
              <span className="text-sm text-[var(--muted)]">success probability</span>
            </div>
            <dl className="mt-5 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-[var(--muted)]">Years to FIRE (median)</dt>
                <dd className="font-medium">{snapshot.fire.yearsP50} yrs</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--muted)]">Optimistic (10th pct)</dt>
                <dd className="font-medium">{snapshot.fire.yearsP10} yrs</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--muted)]">Conservative (90th pct)</dt>
                <dd className="font-medium">{snapshot.fire.yearsP90} yrs</dd>
              </div>
            </dl>
          </section>
        </div>

        {/* Recent transactions */}
        <section className="mt-6 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-6">
          <h2 className="text-lg font-semibold">Recent transactions</h2>
          <p className="text-xs text-[var(--muted)]">Auto-categorized on import</p>
          <div className="mt-4 divide-y divide-[var(--card-border)]">
            {snapshot.transactions.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-3">
                <div className="min-w-0">
                  <p className="truncate font-medium">{t.merchant}</p>
                  <p className="text-xs text-[var(--muted)]">
                    {t.date} &middot; {t.category}
                  </p>
                </div>
                <span
                  className={`shrink-0 text-sm font-medium ${
                    t.amount >= 0 ? "text-[var(--income)]" : "text-[var(--foreground)]"
                  }`}
                >
                  {t.amount >= 0 ? "+" : "−"}
                  {usdCents(Math.abs(t.amount))}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-10 rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center">
          <h2 className="text-xl font-semibold">Ready for the real thing?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-[var(--muted)]">
            Connect your bank and your finances organize themselves. Free to start, Pro $9.99/mo with
            a 14-day free trial.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#waitlist"
              className="rounded-xl bg-[var(--primary)] px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join the Waitlist
            </a>
            <Link
              href="/pricing"
              className="rounded-xl border border-[var(--card-border)] bg-[var(--background)] px-7 py-3 text-sm font-medium hover:border-[var(--muted)] transition-colors"
            >
              View pricing
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
