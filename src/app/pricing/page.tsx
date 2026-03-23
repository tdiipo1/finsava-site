import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Finsava",
  description:
    "Simple, transparent pricing. Start with Basic or unlock the full suite with Pro.",
};

const basicFeatures = [
  "Budget planning",
  "Bank sync (200+ institutions)",
  "Auto-categorize (ML-powered)",
  "Spending reports",
  "Subscriptions & recurring detection",
  "Smart notifications",
  "Categorization hub",
  "CSV import",
  "Email support",
];

const proFeatures = [
  "Everything in Basic, plus:",
  "AI Assistant (Gemini)",
  "Financial planning (FIRE, savings, debt)",
  "Investment tracking",
  "Savings goals",
  "Net worth tracking",
  "Forecasting & analytics",
  "Transfer detection",
  "Multi-currency (18 currencies)",
  "Filter rules",
  "Merchant cleanup",
  "Priority support",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-7 w-7" />
            <span className="text-xl font-bold">Finsava</span>
          </a>
          <div className="hidden items-center gap-8 sm:flex">
            <a
              href="/#features"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              How It Works
            </a>
            <a
              href="/#security"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Security
            </a>
            <a
              href="/pricing"
              className="text-sm text-white font-medium transition-colors"
            >
              Pricing
            </a>
            <a
              href="https://github.com/tdiipo1/Finsava"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

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
            Start with Basic for core budgeting or unlock the full suite with Pro.
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
              <h2 className="text-2xl font-bold">Basic</h2>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">$4.99</span>
                <span className="text-[var(--muted)]">/mo</span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                Core budgeting, bank sync, and smart categorization.
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
              question="What does Pro add over Basic?"
              answer="Pro unlocks the full suite: AI assistant powered by Gemini, financial planning tools (FIRE calculator, savings goals, debt payoff), investment tracking, net worth tracking, forecasting and analytics, transfer detection, multi-currency support (18 currencies), filter rules, and merchant cleanup. Basic covers core budgeting; Pro is the complete financial toolkit."
            />
            <FaqItem
              question="Can I switch between tiers?"
              answer="Yes. Your data format is the same across all tiers. Upgrading instantly unlocks the additional features, and you can downgrade at any time."
            />
            <FaqItem
              question="When will Basic and Pro launch?"
              answer="We're building billing infrastructure now. Join the waitlist and you'll be the first to know when both tiers are available."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-5 w-5" />
            <span className="font-semibold">Finsava</span>
          </a>
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Finsava. All rights reserved.
          </p>
        </div>
      </footer>
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
