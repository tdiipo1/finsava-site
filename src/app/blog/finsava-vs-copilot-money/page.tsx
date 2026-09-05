import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "Finsava vs Copilot Money (2026) — Honest Feature Comparison",
  description:
    "A detailed, factual comparison of Finsava and Copilot Money. Pricing, features, bank sync, AI categorization, FIRE planning, and more.",
  keywords: [
    "copilot money alternative",
    "copilot money review",
    "finsava vs copilot money",
    "personal finance app comparison",
    "budgeting app 2026",
  ],
};

export default function FinsavaVsCopilotMoney() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-7 w-7" />
            <span className="text-xl font-bold">Finsava</span>
          </Link>
          <div className="hidden items-center gap-8 sm:flex">
            <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/pricing" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Pricing
            </Link>
            <Link
              href="/#waitlist"
              className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 pt-28 pb-24">
        <header className="mb-12">
          <BlogHeader category="Comparison" />
          <p className="text-sm text-[var(--muted)] mb-2">March 25, 2026</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Finsava vs Copilot Money: An Honest Comparison
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Both apps aim to help you understand your money. Here&apos;s where they overlap and where they differ.
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-8 text-[var(--muted)] leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">The Quick Version</h2>
            <p>
              Copilot Money ($9.99/mo) and Finsava Pro ($9.99/mo) are both cloud-first
              personal finance apps with bank sync and investment tracking. The core
              difference: Finsava includes FIRE planning, debt payoff strategy, cross-user
              ML categorization, and multi-provider bank sync (Plaid + SimpleFin) at the
              same price. Copilot is Apple-ecosystem-focused (iOS/Mac first) with a polished
              native UI. Finsava is web-based and works on any device.
            </p>
            <p>
              Finsava also has a genuinely free tier with budgeting, CSV import, SimpleFin
              bank sync, and local AI categorization — Copilot has no free tier at all.
              Finsava is in an invite-only pilot, and every invite starts with a 14-day Pro trial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Feature Comparison</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-[var(--card-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--card)] border-b border-[var(--card-border)]">
                    <th className="text-left py-3 px-4 font-medium">Feature</th>
                    <th className="py-3 px-4 font-semibold text-center text-[var(--foreground)]">Finsava Pro<br /><span className="text-xs font-normal text-[var(--income)]">$9.99/mo</span></th>
                    <th className="py-3 px-4 font-medium text-center">Copilot Money<br /><span className="text-xs">$9.99/mo</span></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Bank Sync (Plaid)", true, true],
                    ["Multi-Provider Bank Sync", true, false],
                    ["AI-Powered Categorization", true, true],
                    ["Learns Your Spending Patterns", true, false],
                    ["Shared Intelligence Across Users", true, false],
                    ["Investment Tracking", true, true],
                    ["Rollover-Aware Contribution Tracking", true, false],
                    ["Net Worth Tracking", true, true],
                    ["Budget Suggestions", true, false],
                    ["FIRE Calculator", true, false],
                    ["Debt Payoff Planning", true, false],
                    ["Multi-Currency (18 currencies)", true, false],
                    ["Transfer Auto-Detection", true, true],
                    ["Anomaly Detection", true, false],
                    ["Financial Health Score", true, false],
                    ["Configurable Transaction Lookback", true, false],
                    ["Web App (any device)", true, false],
                    ["Native iOS/Mac App", false, true],
                    ["Free Tier ($0)", true, false],
                    ["14-Day Free Trial", true, false],
                  ].map(([feature, finsava, copilot]) => (
                    <tr key={feature as string} className="border-b border-[var(--card-border)]/30">
                      <td className="py-2.5 px-4 text-[var(--foreground)]">{feature as string}</td>
                      <td className="py-2.5 px-4 text-center">
                        {finsava ? <span className="text-[var(--income)]">&#10003;</span> : <span className="text-[var(--muted)] opacity-40">—</span>}
                      </td>
                      <td className="py-2.5 px-4 text-center">
                        {copilot ? <span className="text-[var(--income)]">&#10003;</span> : <span className="text-[var(--muted)] opacity-40">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Where Finsava Stands Out</h2>

            <h3 className="text-xl font-medium text-[var(--foreground)] mt-6">Multi-Provider Bank Sync</h3>
            <p>
              Finsava is the only personal finance app that lets you choose between
              Plaid (12,000+ institutions, instant setup) and SimpleFin (direct bank
              feeds). You can run both simultaneously or switch anytime. If one
              provider has better coverage for your credit union, use that one.
              Cross-provider deduplication ensures no duplicate transactions.
            </p>

            <h3 className="text-xl font-medium text-[var(--foreground)] mt-6">ML That Gets Smarter With You</h3>
            <p>
              Every time you categorize a transaction, Finsava&apos;s per-user ML
              classifier learns your preferences. A separate global model (trained on
              anonymized, aggregated data from all users) helps new accounts get
              accurate categorization from day one — no training period needed. Your
              data stays private: the global model uses only merchant names and
              category labels, never amounts or account details.
            </p>

            <h3 className="text-xl font-medium text-[var(--foreground)] mt-6">FIRE and Debt Planning</h3>
            <p>
              Finsava includes a FIRE calculator with inflation adjustment and
              essential/discretionary expense filtering (Lean FIRE), plus a debt
              payoff strategy engine that compares avalanche vs. snowball methods
              with interest savings projections. Copilot doesn&apos;t offer either.
            </p>

            <h3 className="text-xl font-medium text-[var(--foreground)] mt-6">Free Tier</h3>
            <p>
              If you don&apos;t need FIRE planning, investments, or the Claude AI
              assistant, Finsava&apos;s free tier gives you budgeting, CSV import,
              SimpleFin bank sync, and local AI categorization at no cost. Copilot
              has a single $9.99 tier with no free option.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Where Copilot Stands Out</h2>

            <h3 className="text-xl font-medium text-[var(--foreground)] mt-6">Native Apple Experience</h3>
            <p>
              Copilot is built for iOS and Mac with a polished native interface,
              widgets, and Apple Watch support. If you live in the Apple ecosystem
              and value a native app experience over web accessibility, Copilot has
              the edge. Finsava is web-based — it works on any device with a browser,
              but it&apos;s not a native app.
            </p>

            <h3 className="text-xl font-medium text-[var(--foreground)] mt-6">Maturity</h3>
            <p>
              Copilot has been in the market since 2019. It has a larger user base,
              more App Store reviews, and a longer track record. Finsava is newer and
              still building its community. If market tenure and community size matter
              to you, Copilot has the advantage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">Pricing</h2>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border border-[var(--card-border)] rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[var(--card)] border-b border-[var(--card-border)]">
                    <th className="text-left py-3 px-4 font-medium">Plan</th>
                    <th className="py-3 px-4 text-center font-semibold text-[var(--foreground)]">Finsava</th>
                    <th className="py-3 px-4 text-center font-medium">Copilot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[var(--card-border)]/30">
                    <td className="py-2.5 px-4 text-[var(--foreground)]">Free Trial</td>
                    <td className="py-2.5 px-4 text-center text-[var(--income)]">14 days (Pro)</td>
                    <td className="py-2.5 px-4 text-center text-[var(--muted)]">7 days</td>
                  </tr>
                  <tr className="border-b border-[var(--card-border)]/30">
                    <td className="py-2.5 px-4 text-[var(--foreground)]">Free Tier</td>
                    <td className="py-2.5 px-4 text-center text-[var(--income)]">$0</td>
                    <td className="py-2.5 px-4 text-center text-[var(--muted)]">—</td>
                  </tr>
                  <tr className="border-b border-[var(--card-border)]/30">
                    <td className="py-2.5 px-4 text-[var(--foreground)]">Full / Pro Tier</td>
                    <td className="py-2.5 px-4 text-center">$9.99/mo</td>
                    <td className="py-2.5 px-4 text-center">$9.99/mo</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-[var(--foreground)]">Annual Option</td>
                    <td className="py-2.5 px-4 text-center text-[var(--muted)]">Coming soon</td>
                    <td className="py-2.5 px-4 text-center">$79.99/yr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[var(--foreground)]">The Bottom Line</h2>
            <p>
              If you want a native Apple app with a polished interface and you only
              need budgeting + investment tracking, Copilot is a solid choice.
            </p>
            <p>
              If you want FIRE planning, debt strategy, multi-provider bank sync,
              ML-powered categorization that improves over time, multi-currency
              support, and a real free tier — Finsava gives you more at the same
              price point ($9.99), or lets you start at $0.
            </p>
            <p>
              Both are good apps. We built Finsava because we wanted features that
              didn&apos;t exist anywhere else — and we wanted to let you choose how
              your bank data flows.
            </p>
          </section>

          <section className="border-t border-[var(--card-border)] pt-8 mt-12">
            <p className="text-sm text-[var(--muted)]">
              <strong className="text-[var(--foreground)]">Disclosure:</strong> This
              comparison was written by the Finsava team. We&apos;ve done our best to
              be factually accurate about Copilot Money&apos;s features based on their
              public documentation as of March 2026. If you spot an error, email us at{" "}
              <a href="mailto:support@finsava.com" className="text-[var(--primary)] hover:underline">
                support@finsava.com
              </a>{" "}
              and we&apos;ll correct it.
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/#waitlist"
            className="inline-flex items-center rounded-lg bg-[var(--primary)] px-8 py-3 text-lg font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Join the Waitlist
          </Link>
          <p className="mt-3 text-sm text-[var(--muted)]">The pilot is live and invite-only — join the waitlist for your invite. Every invited account starts with a 14-day Pro trial.</p>
        </div>
        <ShareButtons
          slug="finsava-vs-copilot-money"
          title="Finsava vs Copilot Money: An Honest Comparison"
        />
      </article>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 text-center text-sm text-[var(--muted)]">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Finsava. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
