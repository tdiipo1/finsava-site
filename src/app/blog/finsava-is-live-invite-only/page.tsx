import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "Finsava Is Live, Invite-Only: What Shipped and What Didn't",
  description:
    "Finsava is live as a closed pilot. What you get free, what Pro adds, and the things we have deliberately not switched on yet.",
  keywords: [
    "personal finance python",
    "FastAPI Next.js app",
    "FIRE app launch",
    "invite only pilot",
    "self hosted finance app",
    "indie fintech",
  ],
};

export default function FinsavaIsLivePost() {
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
          <BlogHeader category="Money Guides" />
          <h1 className="text-4xl font-bold leading-tight mt-6">
            Finsava Is Live, Invite-Only: What Shipped and What Didn&apos;t
          </h1>

          <div className="mt-4 flex items-center gap-3 text-sm text-[var(--muted)]">
            <time>August 29, 2026</time>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-[var(--muted)]">
            Finsava is live at app.finsava.com, as a closed pilot rather than a
            launch party. Here is what it does for your money today, what the free
            plan covers, what Pro adds &mdash; and, just as usefully, the things we
            have deliberately not switched on yet and why.
          </p>

          <h2 className="mt-12 text-2xl font-bold">What Finsava is</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            A personal finance app built for people chasing financial
            independence: budgeting that learns from your actual spending, bank
            sync, and a FIRE Dashboard that runs a{" "}
            <Link href="/blog/fire-dashboard-deep-dive" className="text-[var(--primary)] hover:underline">
              1,000-simulation Monte Carlo
            </Link>{" "}
            over your real numbers instead of multiplying your expenses by 25 and
            calling it a plan.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            We run Finsava for about $7 a month, plus a few dollars for encrypted
            storage and offsite backups. Two people, no outside money, nothing
            clever. That matters to you rather than to us: every dollar we don&apos;t
            spend running the thing is a dollar we don&apos;t have to charge you for
            it, and there is no investor expecting us to find another way to make
            money from your data later.
          </p>

          <h2 className="mt-12 text-2xl font-bold">What&apos;s live in the pilot</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The <strong className="text-[var(--foreground)]">free tier</strong> is
            the core toolkit: budgeting, dashboard, transactions, CSV import,
            SimpleFin bank sync, and AI insights that run on Gemma —{" "}
            <em>on our own hardware</em>, not shipped to a third-party model API.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">Pro ($9.99/month)</strong>{" "}
            adds Plaid bank sync, the Claude assistant, the FIRE Planning Lab
            (five FIRE variants, guardrails withdrawals, historical stress
            tests), analytics and forecasting, goals, net worth, investment
            tracking, and multi-currency. Every invited account starts with a
            14-day Pro trial.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            The newest pieces, shipped in the last few weeks:
          </p>

          <ul className="mt-4 space-y-2 text-[var(--muted)]">
            <li>
              <strong className="text-[var(--foreground)]">Budget targets from your own percentiles.</strong>{" "}
              Four suggestion tiers computed from the distribution of <em>your</em>{" "}
              last twelve months — your comfortable months, your median, your lean
              months, your leanest — each with a rationale that cites the
              evidence, and a flag on subscriptions worth cancelling.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Spending that nets refunds.</strong>{" "}
              A $2,180 couch followed by a $2,300 refund now reads as what it
              was — not as $2,180 of spending. Budgets, analytics, and the health
              score all agree with the transaction list.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">A Tools page with opinions.</strong>{" "}
              Emergency Runway deliberately counts only liquid deposits (selling
              equities in a drawdown is not a plan), a What-If Lab that shows its
              inputs, Coast FIRE, and a &ldquo;Can I Afford It?&rdquo; check.
            </li>
            <li>
              <strong className="text-[var(--foreground)]">Charts you can interrogate.</strong>{" "}
              Click a bar, get the transactions behind it — in place, on the
              budget, analytics, and investments pages alike.
            </li>
          </ul>

          <h2 className="mt-12 text-2xl font-bold">What&apos;s deliberately not live</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">Open registration.</strong>{" "}
            Sign-ups are invite-only, by email allowlist. A finance app holds the
            most sensitive data most people have; we&apos;d rather onboard slowly,
            watch every rough edge with a small group, and earn the right to open
            the doors than launch wide and firefight.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">Real brokerage holdings.</strong>{" "}
            The pipeline for live positions — tickers, quantities, market values,
            unrealized gains — is built and tested, but it depends on a Plaid
            data product that&apos;s still in their approval queue for our
            account. Until users can actually see it, we&apos;re not blogging it
            as a feature. It ships when it&apos;s visible, not when it compiles.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            <strong className="text-[var(--foreground)]">A pretty roadmap.</strong>{" "}
            We keep one, but publishing dates we might miss helps nobody. What we
            will publish is what just shipped, every time it ships — this blog is
            a plain account of what changed and why it matters to you.
          </p>

          <h2 className="mt-12 text-2xl font-bold">Why this post exists</h2>

          <p className="mt-4 leading-relaxed text-[var(--muted)]">
            Because &ldquo;free isn&apos;t really free&rdquo; is the thesis of{" "}
            <Link href="/blog/finsava-vs-empower" className="text-[var(--primary)] hover:underline">
              our most-read comparison
            </Link>
            , and the same honesty has to apply to us. Finsava costs money to run
            and $9.99/month to use fully, the pilot is gated, and one flagship
            feature is waiting on a third party. That&apos;s the true state of
            the product. If that kind of candor is what you want from the app
            holding your money data, we built this for you.
          </p>

          <div className="mt-12 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center">
            <h3 className="text-2xl font-bold">Want an invite?</h3>
            <p className="mt-3 text-[var(--muted)]">
              The pilot is invite-only. Join the waitlist and we&apos;ll send
              yours as we widen the door — every invited account starts with a
              14-day Pro trial, no credit card required.
            </p>
            <Link
              href="/#waitlist"
              className="mt-6 inline-block rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join the Waitlist
            </Link>
          </div>

          <ShareButtons
            slug="finsava-is-live-invite-only"
            title="Finsava Is Live, Invite-Only: What Shipped and What Didn't"
          />
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
