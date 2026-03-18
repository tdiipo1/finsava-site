export default function Home() {
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
            <a href="#open-source" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Open Source
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
            Open source &middot; AGPL-3.0
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
            Self-hosted personal finance with a local AI advisor, bank sync, anomaly detection, and ML-powered categorization. Everything runs on your hardware.
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
              title="Local AI Advisor"
              description="Chat with Phi-4, Mistral, Llama, DeepSeek, or Qwen running on your hardware via Ollama. Get spending analysis and budget advice."
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

      {/* Open Source */}
      <section id="open-source" className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Free & Open Source</h2>
          <p className="mt-4 text-[var(--muted)] text-lg leading-relaxed">
            Finsava is licensed under AGPL-3.0. Self-host on your own hardware at no cost.
            The source code is fully auditable — no hidden data collection, no vendor lock-in.
          </p>
          <div className="mt-10">
            <a
              href="https://github.com/tdiipo1/Finsava"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--card)] border border-[var(--card-border)] px-8 py-3.5 text-base font-medium hover:border-[var(--muted)] transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg">💸</span>
            <span className="font-semibold">Finsava</span>
          </div>
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Finsava. Open source under AGPL-3.0.
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
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--muted)]">
      <span className="text-3xl">{icon}</span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{description}</p>
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
