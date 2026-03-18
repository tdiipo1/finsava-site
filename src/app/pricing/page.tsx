import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Finsava",
  description:
    "Finsava is free and open source. Self-host with all features included, or join the waitlist for Finsava Cloud.",
};

const freeTierFeatures = [
  "All core features included",
  "Bank sync (SimpleFin)",
  "CSV import",
  "Budget planning",
  "Dashboard & charts",
  "Transaction mapping",
  "AI Advisor (local Ollama)",
  "Community support",
];

const cloudFeatures = [
  "Everything in Free, plus:",
  "Cloud AI Advisor (Gemini)",
  "Advanced analytics & forecasting",
  "Multi-account bank sync",
  "Automatic daily backups",
  "Priority support",
  "No Docker required",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl">💸</span>
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
              href="/#open-source"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Open Source
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
            Self-host for free with every feature included. Or let us handle the
            infrastructure with Finsava Cloud.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {/* Free Tier */}
          <div className="flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Free</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">Self-Hosted</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">$0</span>
                <span className="text-[var(--muted)]">/forever</span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                Full platform on your own hardware. No limits, no catches.
              </p>
            </div>

            <ul className="mb-10 flex-1 space-y-3">
              {freeTierFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-relaxed"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-[var(--income)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://github.com/tdiipo1/Finsava"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-xl border border-[var(--card-border)] bg-[var(--background)] py-3.5 text-center text-base font-semibold hover:border-[var(--muted)] transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Cloud Tier */}
          <div className="relative flex flex-col rounded-2xl border-2 border-[var(--primary)] bg-[var(--card)] p-8">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <span className="rounded-full bg-[var(--primary)] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                Coming Soon
              </span>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold">Finsava Cloud</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">Managed</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight">$9.99</span>
                <span className="text-[var(--muted)]">/mo</span>
              </div>
              <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed">
                Everything managed for you. No Docker, no servers, no setup.
              </p>
            </div>

            <ul className="mb-10 flex-1 space-y-3">
              {cloudFeatures.map((feature, idx) => (
                <li
                  key={feature}
                  className={`flex items-start gap-3 text-sm leading-relaxed ${
                    idx === 0 ? "text-[var(--muted)]" : ""
                  }`}
                >
                  <svg
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      idx === 0
                        ? "text-[var(--muted)]"
                        : "text-[var(--primary)]"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={
                        idx === 0
                          ? "M5 13l4 4L19 7"
                          : "M12 4v16m8-8H4"
                      }
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="/#waitlist"
              className="block w-full rounded-xl bg-[var(--primary)] py-3.5 text-center text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
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
              question="Is the free version actually free?"
              answer="Yes. Finsava is open source under AGPL-3.0. Self-host it on your own hardware with all features enabled, no trial period, no feature gates."
            />
            <FaqItem
              question="What does Finsava Cloud add?"
              answer="Cloud hosting so you don't need Docker, Gemini-powered AI instead of local Ollama, automatic backups, and priority support. The same app, just managed for you."
            />
            <FaqItem
              question="Can I switch between free and cloud?"
              answer="Yes. Your data format is the same either way. Export from one, import into the other."
            />
            <FaqItem
              question="When will Finsava Cloud launch?"
              answer="We're building it now. Join the waitlist and you'll be the first to know when it's ready."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a href="/" className="flex items-center gap-2">
            <span className="text-lg">💸</span>
            <span className="font-semibold">Finsava</span>
          </a>
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Finsava. Open source under
            AGPL-3.0.
          </p>
        </div>
      </footer>
    </div>
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
