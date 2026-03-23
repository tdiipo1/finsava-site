import SocialProof from "@/components/SocialProof";
import WaitlistSection from "@/components/WaitlistSection";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-7 w-7" />
            <span className="text-xl font-bold">Finsava</span>
          </div>
          <div className="hidden items-center gap-8 sm:flex">
            <a href="#features" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#security" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Security
            </a>
            <a href="/pricing" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Pricing
            </a>
            <a href="/changelog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Changelog
            </a>
            <a href="/blog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Blog
            </a>
            <a
              href="#waitlist"
              className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--muted)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--income)]" />
            20+ features &middot; AI-powered &middot; Privacy-first
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your money.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Your intelligence.
            </span>
            <br />
            Your rules.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted)] leading-relaxed">
            AI-powered personal finance with smart budgeting, bank sync from 200+ institutions,
            FIRE planning, multi-currency support, investment tracking, and anomaly detection.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] px-8 py-3.5 text-base font-medium text-[var(--foreground)] hover:border-[var(--muted)] transition-colors"
            >
              See Features
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">
            Basic starts at $4.99/mo. No long-term commitment.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProof />

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Everything you need, nothing you don&apos;t</h2>
            <p className="mt-4 text-[var(--muted)] text-lg">20+ modular features. Enable what you want, disable what you don&apos;t.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🤖"
              title="AI Assistant"
              description="Chat with an AI that analyzes your actual spending, suggests budget adjustments, and applies changes in one click. Powered by Google Gemini."
              disclaimer="AI features are for informational and educational purposes only."
            />
            <FeatureCard
              icon="🏦"
              title="Bank Sync"
              description="Auto-import from 200+ banks via SimpleFin. Staged review — nothing enters your ledger without your approval."
            />
            <FeatureCard
              icon="🧠"
              title="Smart Categorization"
              description="5-level ML cascade: exact match, fuzzy matching, per-user sklearn model, LLM resolve, and manual. Gets smarter as you use it."
            />
            <FeatureCard
              icon="📊"
              title="Anomaly Detection"
              description="Modified Z-score on trailing 12-month category spending catches overspending before it becomes a problem."
            />
            <FeatureCard
              icon="💯"
              title="Financial Health Score"
              description="Composite 0-100 index from savings rate, budget adherence, spending trend, emergency fund, and savings goals. Letter grades A-F."
            />
            <FeatureCard
              icon="🔥"
              title="Financial Planning"
              description="FIRE calculator with inflation adjustment and milestone tracking. Savings projection with impact analysis. Debt payoff strategy comparison (avalanche vs. snowball)."
            />
            <FeatureCard
              icon="💹"
              title="Investment Tracking"
              description="Track 401(k), IRA, brokerage, and ESPP accounts. Contribution limit progress bars and growth metrics. Auto-populate your FIRE number."
            />
            <FeatureCard
              icon="🌍"
              title="Multi-Currency"
              description="18 currencies with daily exchange rates from the European Central Bank. Amounts auto-convert to your preferred currency."
            />
            <FeatureCard
              icon="🔄"
              title="Subscriptions & Recurring"
              description="Automatically detect subscriptions and recurring charges. Catch price hikes and see your true annual cost."
            />
            <FeatureCard
              icon="🎯"
              title="Savings Goals"
              description="Set targets with deadlines and track progress. Visual indicators show if you&apos;re on pace."
            />
            <FeatureCard
              icon="📈"
              title="Spending Reports"
              description="Pie charts by category, section, or merchant with drill-down analytics. See where every dollar goes."
            />
            <FeatureCard
              icon="🔀"
              title="Transfer Detection"
              description="Automatically detect internal transfers between your accounts with confidence scoring. One click to exclude them from spending reports."
            />
            <FeatureCard
              icon="🏷️"
              title="Categorization Hub"
              description="Unified workspace for AI categorization, merchant rules, taxonomy management, and duplicate cleanup — all in one tabbed page."
            />
            <FeatureCard
              icon="📉"
              title="Forecasting & Analytics"
              description="30-60 day cashflow projections with 80% confidence intervals. Category trends, year-over-year comparison, and income stability analysis."
            />
            <FeatureCard
              icon="🏠"
              title="Net Worth Tracking"
              description="Track assets, liabilities, and total net worth. Joint account detection prevents double-counting. Essential vs. discretionary expense classification."
            />
            <FeatureCard
              icon="🔔"
              title="Smart Notifications"
              description="Budget overages, subscription price hikes, savings goal milestones, anomaly alerts, and bank sync updates — all actionable."
            />
            <FeatureCard
              icon="👥"
              title="Account Sharing"
              description="Share read or read-write access with a partner. Each person sees the same data with granular permissions."
            />
            <FeatureCard
              icon="🔒"
              title="Privacy-First"
              description="No telemetry, no tracking cookies, no selling your data. Bank credentials are encrypted at rest with AES-128. Your data is yours alone."
            />
          </div>
        </div>
      </section>

      {/* Why Finsava */}
      <section className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Finsava?</h2>
            <p className="mt-4 text-[var(--muted)] text-lg">Features you won&apos;t find anywhere else.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="text-left py-3 px-4 font-medium text-[var(--muted)]">Capability</th>
                  <th className="py-3 px-4 font-semibold text-[var(--foreground)]">Finsava<br /><span className="text-xs font-normal text-[var(--income)]">From $4.99/mo</span></th>
                  <th className="py-3 px-4 font-medium text-[var(--muted)]">YNAB<br /><span className="text-xs">$14.99/mo</span></th>
                  <th className="py-3 px-4 font-medium text-[var(--muted)]">Monarch<br /><span className="text-xs">$9.99/mo</span></th>
                  <th className="py-3 px-4 font-medium text-[var(--muted)]">Copilot<br /><span className="text-xs">$9.99/mo</span></th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  ["AI Assistant", true, false, false, false],
                  ["Anomaly Detection", true, false, false, false],
                  ["Financial Health Score", true, false, false, false],
                  ["Modular Features (20+)", true, false, false, false],
                  ["Per-User ML Categorization", true, false, false, false],
                  ["Smart Budget Suggestions", true, false, false, false],
                  ["FIRE + Debt Payoff Planning", true, false, false, false],
                  ["Multi-Currency (18 currencies)", true, false, false, false],
                  ["Investment Tracking w/ Limits", true, false, false, false],
                  ["Transfer Detection", true, false, false, false],
                  ["Bank Sync", true, true, true, true],
                  ["Net Worth Tracking", true, false, true, true],
                ].map(([feature, ...supported]) => (
                  <tr key={feature as string} className="border-b border-[var(--card-border)]/50">
                    <td className="text-left py-3 px-4 text-[var(--foreground)]">{feature as string}</td>
                    {(supported as boolean[]).map((s, i) => (
                      <td key={i} className="py-3 px-4">
                        {s
                          ? <span className="text-[var(--income)] text-lg">&#10003;</span>
                          : <span className="text-[var(--muted)] opacity-40">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Up and running in minutes</h2>
            <p className="mt-4 text-[var(--muted)] text-lg">Create your account and start tracking today.</p>
          </div>
          <div className="space-y-12">
            <Step
              number="1"
              title="Create Your Account"
              description="Sign up in seconds. Pick the features you want from 20+ modular options, or start with everything."
            />
            <Step
              number="2"
              title="Connect Your Bank"
              description="Link your accounts via SimpleFin for automatic sync. Or upload a CSV, or try with sample data to explore."
            />
            <Step
              number="3"
              title="Get Insights"
              description="AI-powered categorization, anomaly detection, health scoring, smart budget suggestions, multi-currency support, and FIRE planning — all working from day one."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Built with modern tools</h2>
          <p className="mt-4 text-[var(--muted)] text-lg mb-12">Production-grade stack you can trust.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js 15",
              "React 19",
              "TypeScript",
              "FastAPI (async)",
              "SQLAlchemy 2.0",
              "PostgreSQL",
              "Google Gemini",
              "Tailwind CSS",
              "Docker",
              "scikit-learn",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Transparency */}
      <section id="security" className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Security & Transparency</h2>
          <p className="mt-4 text-[var(--muted)] text-lg leading-relaxed">
            Your financial data deserves the highest level of protection. Finsava is built
            with privacy as an architectural principle, not an afterthought.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-semibold text-lg">Encrypted at Rest</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Bank credentials encrypted with Fernet (AES-128-CBC). Passwords hashed with bcrypt.
                All database queries scoped by user ID.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">📡</div>
              <h3 className="font-semibold text-lg">Zero Telemetry</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                No analytics trackers, no tracking cookies, no third-party data collection.
                We don&apos;t sell or share your personal information.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="font-semibold text-lg">Rapid CVE Response</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Security vulnerabilities are patched within 24 hours. Automated dependency auditing
                via pip-audit and Dependabot in CI.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-semibold text-lg">AI You Control</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Powered by Google Gemini. AI-generated suggestions require your explicit
                approval before any changes are made to your budgets.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">♿</div>
              <h3 className="font-semibold text-lg">Accessible</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Built with WCAG 2.1 AA in mind. Keyboard navigation, skip-to-content,
                ARIA labels, and screen reader support throughout.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">📋</div>
              <h3 className="font-semibold text-lg">561 Automated Tests</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Comprehensive test suite covering auth, budgets, analytics, health score,
                sync, imports, transfer detection, tier enforcement, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <WaitlistSection />

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-5 w-5" />
            <span className="font-semibold">Finsava</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy#ccpa"
              className="text-sm text-[var(--muted)] hover:text-white transition-colors"
            >
              Do Not Sell My Info
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* X/Twitter */}
            <a href="https://x.com/finsava" target="_blank" rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-white transition-colors" aria-label="X / Twitter">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* YouTube */}
            <a href="https://www.youtube.com/@finsava" target="_blank" rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-white transition-colors" aria-label="YouTube">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/112999140" target="_blank" rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Substack */}
            <a href="https://substack.com/@finsava" target="_blank" rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-white transition-colors" aria-label="Substack">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Finsava. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  disclaimer,
}: {
  icon: string;
  title: string;
  description: string;
  disclaimer?: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--muted)]">
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{description}</p>
      {disclaimer && (
        <p className="mt-2 text-xs text-[var(--muted)] italic opacity-75">{disclaimer}</p>
      )}
    </div>
  );
}

function Step({
  number,
  title,
  description,
  code,
}: {
  number: string;
  title: string;
  description: string;
  code?: string;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-1 text-[var(--muted)]">{description}</p>
        {code && (
          <pre className="mt-3 rounded-lg bg-[var(--card)] border border-[var(--card-border)] px-4 py-3 text-sm text-blue-400 overflow-x-auto">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
