import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Pricing — Finsava",
  description:
    "Simple, transparent pricing. Start free or unlock the full suite with Pro.",
};

const basicFeatures = [
  "Budget planning",
  "Bank sync via SimpleFin (200+ banks)",
  "Auto-categorize (ML-powered)",
  "AI insights (Gemma, local)",
  "Spending reports",
  "Subscriptions & recurring detection",
  "Smart notifications",
  "CSV import",
  "Email support",
];

const proFeatures = [
  "Everything in Free, plus:",
  "Plaid bank sync (12,000+ institutions)",
  "AI Assistant (Claude, cloud)",
  "FIRE Planning Lab (5 withdrawal strategies, goal recommender)",
  "Retirement spending smile & Social Security modeling",
  "Historical backtest (S&P 500 from 1871)",
  "Savings goals & debt payoff strategy",
  "Net worth tracking",
  "Forecasting & analytics",
  "Investment tracking",
  "Multi-currency (18 currencies)",
  "Merchant cleanup & filter rules",
  "Priority support",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <SiteNav current="Pricing" />

      {/* Header */}
      <section className="relative flex flex-col items-center justify-center px-6 pt-36 pb-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-[var(--muted)] leading-relaxed">
            Start free with core budgeting or unlock the full FIRE planning suite with Pro.
            No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Basic Tier */}
          <div className="flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Free</h2>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-[var(--muted)]">/forever</span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                Core budgeting, bank sync, and smart categorization. No credit card required.
              </p>
            </div>

            <FeatureList features={basicFeatures} color="var(--income)" />

            <a
              href="/#waitlist"
              className="mt-auto block w-full rounded-xl border border-[var(--card-border)] bg-[var(--background)] py-3.5 text-center text-base font-semibold hover:border-[var(--muted)] transition-colors"
            >
              Join Waitlist
            </a>
          </div>

          {/* Pro Tier */}
          <div className="relative flex flex-col rounded-2xl border-2 border-[var(--primary)] bg-[var(--card)] p-8">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-[var(--primary)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Most Popular
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold">Pro</h2>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">$9.99</span>
                <span className="text-[var(--muted)]">/mo</span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                Full suite with AI assistant, financial planning, and investment tracking.
              </p>
            </div>

            <FeatureList features={proFeatures} color="var(--primary)" />

            <a
              href="/#waitlist"
              className="mt-auto block w-full rounded-xl bg-[var(--primary)] py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* FAQ / Comparison */}
      <section className="border-t border-[var(--card-border)] py-24 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-8 text-left">
            <FaqItem
              question="What does Pro add over Free?"
              answer="Pro unlocks the full suite: Plaid bank sync (12,000+ institutions), Claude AI assistant, financial planning tools (FIRE Planning Lab, savings goals, debt payoff), investment tracking, net worth tracking, forecasting and analytics, multi-currency support (18 currencies), and merchant cleanup. Free covers core budgeting with SimpleFin bank sync and local Gemma AI insights; Pro is the complete financial toolkit."
            />
            <FaqItem
              question="Can I switch between tiers?"
              answer="Yes. Your data format is the same across all tiers. Upgrading instantly unlocks the additional features, and you can downgrade at any time."
            />
            <FaqItem
              question="When will Free and Pro launch?"
              answer="Both tiers will be available at launch. Join the waitlist for early access — no credit card required. Free is $0 forever; Pro is $9.99/mo with a 14-day free trial."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

function FeatureList({ features, color }: { features: string[]; color: string }) {
  return (
    <ul className="mb-10 flex-1 space-y-3">
      {features.map((feature, idx) => (
        <li
          key={feature}
          className={`flex items-start gap-3 text-sm leading-relaxed ${
            idx === 0 && feature.startsWith("Everything") ? "text-[var(--muted)]" : ""
          }`}
        >
          <svg
            className="mt-0.5 h-4 w-4 shrink-0"
            style={{ color: idx === 0 && feature.startsWith("Everything") ? "var(--muted)" : color }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={idx === 0 && feature.startsWith("Everything") ? "M5 13l4 4L19 7" : "M5 13l4 4L19 7"}
            />
          </svg>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6">
      <h3 className="text-lg font-semibold">{question}</h3>
      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
        {answer}
      </p>
    </div>
  );
}
