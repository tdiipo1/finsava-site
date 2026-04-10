import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "Finsava vs YNAB (2026) — Honest Feature Comparison",
  description:
    "YNAB is the gold standard for envelope budgeting. Finsava is built for people who want AI-driven insights, FIRE planning, and privacy. Here's a factual head-to-head.",
  keywords: [
    "YNAB alternative",
    "You Need A Budget alternative",
    "YNAB vs Finsava",
    "best budgeting app 2026",
    "envelope budgeting alternative",
    "zero-based budgeting",
  ],
};

export default function FinsavaVsYnab() {
  return (
    <div className="min-h-screen">
      <SiteNav current="Blog" />

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <Link
          href="/blog"
          className="text-sm text-[var(--muted)] hover:text-white transition-colors"
        >
          &larr; Back to Blog
        </Link>

        <article className="mt-8 prose prose-invert max-w-none">
          <BlogHeader category="Comparison" />
          <h1 className="text-4xl font-bold leading-tight mt-6">
            Finsava vs YNAB: An Honest Comparison
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-[var(--muted)]">
            <time>April 9, 2026</time>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">
            YNAB (You Need A Budget) has been the gold standard for zero-based,
            envelope budgeting for over a decade. Its loyal community will tell you
            it changed their lives, and they&apos;re not wrong. But YNAB and Finsava
            are built for different people solving different problems. Here&apos;s
            an honest side-by-side.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Pricing</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-5">
              <p className="font-semibold text-[var(--foreground)]">Finsava</p>
              <p className="mt-2 text-3xl font-bold text-[var(--income)]">$4.99/mo</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Basic &middot; $9.99/mo Pro &middot; 14-day trial</p>
            </div>
            <div className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-5">
              <p className="font-semibold text-[var(--foreground)]">YNAB</p>
              <p className="mt-2 text-3xl font-bold">$14.99/mo</p>
              <p className="mt-1 text-xs text-[var(--muted)]">Or $109/year &middot; 34-day trial</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">
            At $14.99/month, YNAB is 3x the price of Finsava Basic and 50% more than
            Finsava Pro. That gap is a direct reflection of cost structure: YNAB is
            venture-backed with a large team. Finsava runs on a $7/month VPS with no
            outside investors, so we can price honestly.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Philosophy: envelopes vs. AI</h2>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            YNAB&apos;s core idea is <em>give every dollar a job</em>. You manually
            assign each dollar of income to a spending category before the month
            begins, and when a category runs dry, you stop spending there. It&apos;s
            a discipline system. It&apos;s incredibly effective for people who want
            that level of control and are willing to put in the work.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Finsava&apos;s core idea is <em>your data has patterns; let AI find
            them</em>. Instead of assigning every dollar manually, you connect your
            accounts and Finsava&apos;s ML pipeline categorizes every transaction,
            flags anomalies, detects subscriptions, and suggests budgets based on
            four different AI-generated profiles. It&apos;s an insight system more
            than a discipline system.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Neither is better. They&apos;re different tools for different minds.
            YNAB users who love the envelope system will probably never be happy
            with anything else. People who bounced off YNAB because the manual work
            felt overwhelming might find Finsava&apos;s approach easier.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Where Finsava pulls ahead</h2>

          <h3 className="mt-6 text-xl font-semibold">1. FIRE Planning</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            YNAB has no FIRE calculator. Finsava has a full FIRE Dashboard with
            1,000-simulation Monte Carlo, guardrails withdrawal strategy, 40-year
            retirement survival modeling, 4 historical stress tests, 5 FIRE variants
            (Standard, Lean, Barista, Coast, Fat), and a kids impact scenario. If
            you&apos;re in the FIRE community, the gap here is enormous.
          </p>

          <h3 className="mt-6 text-xl font-semibold">2. AI-Powered Categorization</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            YNAB has some auto-categorization via rules and machine learning, but
            it leans heavily on manual adjustment. Finsava uses a 5-layer ML pipeline
            with Claude AI for ambiguous cases, confidence calibration, and automatic
            retraining when drift is detected. It learns from your corrections and
            gets smarter over time without you doing anything.
          </p>

          <h3 className="mt-6 text-xl font-semibold">3. Anomaly Detection</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            Finsava uses statistical anomaly detection (MAD-based z-scores) to flag
            unusual transactions and spending shifts. YNAB has no equivalent — you
            notice anomalies by manually reviewing categories.
          </p>

          <h3 className="mt-6 text-xl font-semibold">4. Local AI Insights</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            Finsava runs Gemma 4 locally via Ollama to generate plain-language
            insights about your spending, health score, and FIRE trajectory. Nothing
            is sent to OpenAI or a third-party LLM. YNAB has no local AI option.
          </p>

          <h3 className="mt-6 text-xl font-semibold">5. Financial Health Score</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            Finsava computes a 5-component health score (savings rate, budget
            adherence, emergency fund, spending trend, goal progress) with an
            expandable breakdown and 12-month history. YNAB doesn&apos;t have a
            unified health metric.
          </p>

          <h3 className="mt-6 text-xl font-semibold">6. Self-hostable</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            Finsava is distributed as a Docker Compose stack that runs entirely on
            your own hardware if you want. YNAB is SaaS-only.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Where YNAB pulls ahead</h2>

          <h3 className="mt-6 text-xl font-semibold">1. The envelope method itself</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            If you want zero-based envelope budgeting with the full YNAB
            methodology — Four Rules, Age of Money, Roll with the Punches — YNAB
            has over a decade of refinement. Finsava has smart budget suggestions
            but it&apos;s not an envelope system.
          </p>

          <h3 className="mt-6 text-xl font-semibold">2. Community and education</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            YNAB has a massive, active community, free educational workshops, and
            years of content. Finsava is newer and still building that ecosystem.
          </p>

          <h3 className="mt-6 text-xl font-semibold">3. Mobile-first workflow</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            YNAB&apos;s mobile apps are polished and designed for in-the-moment
            transaction assignment at the point of purchase. Finsava is web-first
            and mobile-responsive, but not yet a native app.
          </p>

          <h3 className="mt-6 text-xl font-semibold">4. Goal tracking tied to categories</h3>
          <p className="mt-3 leading-relaxed text-[var(--muted)]">
            YNAB&apos;s &ldquo;targets&rdquo; tie goals directly to category funding
            in a way that feels native to envelope budgeting. Finsava has savings
            goals but they&apos;re a separate feature.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Head-to-head feature matrix</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="text-left py-3 pr-4 font-medium text-[var(--muted)]">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-[var(--foreground)]">Finsava</th>
                  <th className="text-center py-3 px-4 font-medium text-[var(--muted)]">YNAB</th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  ["Price/month", "$4.99", "$14.99"],
                  ["Bank sync (Plaid + SimpleFin)", "yes", "yes"],
                  ["Envelope / zero-based budgeting", "partial", "yes"],
                  ["AI categorization with calibration", "yes", "no"],
                  ["Monte Carlo FIRE calculator", "yes", "no"],
                  ["Guardrails withdrawal strategy", "yes", "no"],
                  ["5 FIRE variants (Lean/Coast/Barista/Fat)", "yes", "no"],
                  ["Statistical anomaly detection", "yes", "no"],
                  ["Financial health score", "yes", "no"],
                  ["Local AI (Gemma 4)", "yes", "no"],
                  ["Multi-currency (18 currencies)", "yes", "yes"],
                  ["Self-hostable (Docker)", "yes", "no"],
                  ["Investment tracking", "yes", "no"],
                  ["Subscription audit", "yes", "partial"],
                ].map(([feature, a, b]) => (
                  <tr key={feature} className="border-b border-[var(--card-border)]/50">
                    <td className="text-left py-2.5 pr-4 text-[var(--foreground)]">{feature}</td>
                    <td className="py-2.5 px-4">
                      {a === "yes" ? <span className="text-[var(--income)]">&#10003;</span>
                        : a === "partial" ? <span className="text-yellow-500 text-xs">Limited</span>
                          : a === "no" ? <span className="text-[var(--muted)] opacity-40">&mdash;</span>
                            : <span>{a}</span>}
                    </td>
                    <td className="py-2.5 px-4">
                      {b === "yes" ? <span className="text-[var(--income)]">&#10003;</span>
                        : b === "partial" ? <span className="text-yellow-500 text-xs">Limited</span>
                          : b === "no" ? <span className="text-[var(--muted)] opacity-40">&mdash;</span>
                            : <span>{b}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-2xl font-bold">Who should pick YNAB</h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>&bull; You want strict envelope budgeting discipline</li>
            <li>&bull; You love YNAB&apos;s Four Rules methodology</li>
            <li>&bull; You want to manage budgets from a polished native mobile app</li>
            <li>&bull; You don&apos;t care about FIRE planning, ML categorization, or self-hosting</li>
            <li>&bull; The price isn&apos;t a concern</li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold">Who should pick Finsava</h2>
          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>&bull; You&apos;re working toward FIRE and want real Monte Carlo modeling</li>
            <li>&bull; You want AI to do the categorization work for you</li>
            <li>&bull; You value privacy and local AI over cloud-based analysis</li>
            <li>&bull; You bounced off YNAB because envelope budgeting felt like too much work</li>
            <li>&bull; You want to pay a third as much</li>
            <li>&bull; You might eventually want to self-host</li>
          </ul>

          <div className="mt-12 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center">
            <h3 className="text-2xl font-bold">Try Finsava free for 14 days</h3>
            <p className="mt-3 text-[var(--muted)]">
              No credit card required. Full Pro access during the trial.
            </p>
            <Link
              href="/#waitlist"
              className="mt-6 inline-block rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>

          <p className="mt-8 text-xs text-[var(--muted)] border-t border-[var(--card-border)] pt-6">
            <em>
              Competitor pricing and features as of April 2026 and may have changed.
              This comparison reflects the author&apos;s understanding of each
              product&apos;s publicly documented capabilities.
            </em>
          </p>

          <ShareButtons
            slug="finsava-vs-ynab"
            title="Finsava vs YNAB: An Honest Comparison"
          />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
