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
            <span className="text-2xl">💸</span>
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

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--muted)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--income)]" />
            Self-hosted &middot; Privacy-first
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your money.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Your machine.
            </span>
            <br />
            Your rules.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted)] leading-relaxed">
            Self-hosted personal finance with a local AI assistant, bank sync, anomaly detection, and ML-powered categorization. Everything runs on your hardware.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/tdiipo1/Finsava"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Get Started — It&apos;s Free
            </a>
            <a
              href="#features"
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] px-8 py-3.5 text-base font-medium text-[var(--foreground)] hover:border-[var(--muted)] transition-colors"
            >
              See Features
            </a>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">
            No account needed. No cloud. Just <code className="rounded bg-[var(--card)] px-1.5 py-0.5 text-blue-400">docker compose up</code>
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
            <p className="mt-4 text-[var(--muted)] text-lg">17 modular features. Enable what you want, disable what you don&apos;t.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🤖"
              title="Local AI Assistant"
              description="Chat with Phi-4, Mistral, Llama, DeepSeek, or Qwen running on your hardware via Ollama. Get spending analysis and budget insights."
              disclaimer="AI features are for informational and educational purposes only."
            />
            <FeatureCard
              icon="🏦"
              title="Bank Sync"
              description="Auto-import from 200+ banks via SimpleFin. Staged review — nothing enters your ledger without your approval."
            />
            <FeatureCard
              icon="📊"
              title="Anomaly Detection"
              description="Modified Z-score on trailing 12-month category spending catches overspending before it becomes a problem."
            />
            <FeatureCard
              icon="🧠"
              title="ML Categorization"
              description="Per-user TF-IDF + LogisticRegression that retrains as you approve suggestions. Gets smarter the more you use it."
            />
            <FeatureCard
              icon="💯"
              title="Financial Health Score"
              description="Composite 0-100 index from savings rate, budget adherence, spending trend, emergency fund, and diversity. Letter grades A–F."
            />
            <FeatureCard
              icon="🔄"
              title="Recurring Detection"
              description="Automatically detect subscriptions and recurring charges. Catch price hikes and see your true annual cost."
            />
            <FeatureCard
              icon="🎯"
              title="Savings Goals"
              description="Set targets with deadlines and track progress. Visual indicators show if you're on pace."
            />
            <FeatureCard
              icon="📈"
              title="Spending Reports"
              description="Pie charts by category, section, or merchant with drill-down analytics. See where every dollar goes."
            />
            <FeatureCard
              icon="🔒"
              title="Privacy-First"
              description="SQLite on your machine. No cloud, no telemetry, no tracking. Your financial data never leaves your hardware."
            />
            <FeatureCard
              icon="📱"
              title="Installable PWA"
              description="Install Finsava on your phone or desktop as a Progressive Web App. Full offline-capable experience."
            />
            <FeatureCard
              icon="🔔"
              title="Smart Notifications"
              description="Get alerted when you overspend a budget, a subscription raises its price, or you hit a savings goal milestone."
            />
            <FeatureCard
              icon="👥"
              title="Account Sharing"
              description="Share read or read-write access with a partner. Each person sees the same data with granular permissions."
            />
            <FeatureCard
              icon="📉"
              title="Forecasting"
              description="30-60 day cashflow projections with 80% confidence intervals. Year-over-year comparison and income stability analysis."
            />
          </div>
        </div>
      </section>

      {/* Why Finsava */}
      <section className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Finsava?</h2>
            <p className="mt-4 text-[var(--muted)] text-lg">Features you won&apos;t find anywhere else — especially not for free.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--card-border)]">
                  <th className="text-left py-3 px-4 font-medium text-[var(--muted)]">Capability</th>
                  <th className="py-3 px-4 font-semibold text-[var(--foreground)]">Finsava<br /><span className="text-xs font-normal text-[var(--income)]">Free</span></th>
                  <th className="py-3 px-4 font-medium text-[var(--muted)]">YNAB<br /><span className="text-xs">$15/mo</span></th>
                  <th className="py-3 px-4 font-medium text-[var(--muted)]">Monarch<br /><span className="text-xs">$10/mo</span></th>
                  <th className="py-3 px-4 font-medium text-[var(--muted)]">Actual Budget<br /><span className="text-xs">Free</span></th>
                </tr>
              </thead>
              <tbody className="text-center">
                {[
                  ["Local AI Assistant", true, false, false, false],
                  ["Anomaly Detection", true, false, false, false],
                  ["Financial Health Score", true, false, false, false],
                  ["Modular Features (17)", true, false, false, false],
                  ["Per-User ML Categorization", true, false, false, false],
                  ["Self-Hosted", true, false, false, true],
                  ["Bank Sync", true, true, true, true],
                  ["Docker Deployment", true, false, false, true],
                  ["Self-Hosted Option", true, false, false, true],
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
            <p className="mt-4 text-[var(--muted)] text-lg">No sign-ups, no credit cards, no cloud accounts.</p>
          </div>
          <div className="space-y-12">
            <Step
              number="1"
              title="Clone & Start"
              description="One command gets you the full stack — backend, frontend, and local AI."
              code="docker compose up -d"
            />
            <Step
              number="2"
              title="Create Your Account"
              description="Register locally. Your credentials are hashed with bcrypt and stored in your SQLite database."
            />
            <Step
              number="3"
              title="Import or Sync"
              description="Upload a CSV from your bank or connect via SimpleFin for automatic sync. Pick your features and start tracking."
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
              "FastAPI",
              "SQLAlchemy",
              "SQLite",
              "Ollama",
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
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-semibold text-lg">Local-Only Data</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Self-hosted deployments keep your database on your own hardware.
                No cloud sync unless you choose Finsava Cloud.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">📡</div>
              <h3 className="font-semibold text-lg">Zero Telemetry</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                No analytics, no tracking cookies, no data collection.
                The self-hosted version makes zero network calls home.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-semibold text-lg">Local AI</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                AI assistant runs on your hardware via Ollama. Your financial
                conversations never leave your machine.
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
            <span className="text-lg">💸</span>
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
              className="text-[var(--muted)] hover:text-white transition-colors" aria-label="X">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
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
