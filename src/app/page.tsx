import SocialProof from "@/components/SocialProof";
import WaitlistSection from "@/components/WaitlistSection";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { ComparisonTable } from "@/components/ComparisonTable";
import { getLatestPosts } from "@/lib/blog-posts";

export default async function Home() {
  const latestPosts = getLatestPosts(2);
  return (
    <div className="min-h-screen">
      <SiteNav />

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-4 py-1.5 text-sm text-[var(--muted)]">
            <span className="inline-block h-2 w-2 rounded-full bg-[var(--income)]" />
            5 withdrawal strategies &middot; Market data back to 1871 &middot; Privacy-first
          </div>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            See whether your savings will actually
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              last as long as you do.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted)] leading-relaxed">
            Finsava projects your retirement against every market since 1871 &mdash;
            including the crashes &mdash; so you find out how much you can safely
            spend, and for how long. It reads your real accounts, so the answer
            reflects your actual life. Free to start, Pro from $9.99/mo.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join the Waitlist
            </a>
            <Link
              href="/demo#strategy-lab"
              className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] px-8 py-3.5 text-base font-medium text-[var(--foreground)] hover:border-[var(--muted)] transition-colors"
            >
              Try the Strategy Lab in the live demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">
            Finsava is in a closed pilot &mdash; join the waitlist and we&apos;ll send invites in
            waves. Every invite starts with a 14-day free trial of Pro.
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
            <p className="mt-4 text-[var(--muted)] text-lg">Turn on what you need, hide the rest.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon="🤖"
              title="AI Assistant"
              description="Chat with an AI that analyzes your actual spending, suggests budget adjustments, and applies changes in one click. Powered by Claude AI."
              disclaimer="AI features are for informational and educational purposes only."
            />
            <FeatureCard
              icon="🔥"
              title="FIRE Planning Lab"
              description="5 withdrawal strategies compared head-to-head, goal-based recommender, retirement spending smile, Social Security modeling, and historical backtesting from 1871. Connected to your real bank data."
            />
            <FeatureCard
              icon="🧠"
              title="Smart Categorization"
              description="5-level smart cascade: exact match, fuzzy matching, personalized learning, AI resolve, and manual review. Gets smarter as you use it."
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
              title="FIRE Planning + Monte Carlo"
              description="Run 1,000 retirement simulations with a stochastic fan chart. Withdrawal rate sensitivity table. Coast FIRE, Lean FIRE, inflation adjustment. Debt payoff comparison (avalanche vs. snowball)."
            />
            <FeatureCard
              icon="💹"
              title="Investment Tracking"
              description="Real positions from your brokerages — holdings, allocation, dividends and realized gains, with about two years of history on first connect. Every figure says what it covers. Auto-populates your FIRE number."
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
              description="No telemetry, no tracking cookies, no selling your data. Bank credentials encrypted at rest with industry-standard encryption. Your data is yours alone."
            />
          </div>
        </div>
      </section>

      {/* Why Finsava */}
      <section className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl">Why Finsava?</h2>
            <p className="mt-4 text-[var(--muted)] text-lg">The features that matter, at a fraction of the price.</p>
          </div>
          <ComparisonTable />
          <div className="mt-8 text-center">
            <a
              href="#waitlist"
              className="inline-block rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Request an Invite
            </a>
            <p className="mt-3 text-sm text-[var(--muted)]">Closed pilot &middot; invites include a 14-day Pro trial. No credit card required.</p>
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
              title="Sign Up (30 seconds)"
              description="Start a 14-day free trial of Pro — no credit card required. Turn on the parts you want, or start with everything."
            />
            <Step
              number="2"
              title="Connect All Your Banks (1 minute)"
              description="Connect via SimpleFin on the free plan, or Plaid (12,000+ banks) on Pro. Either way, every transaction is categorized for you."
            />
            <Step
              number="3"
              title="Explore Your Finances (5 minutes)"
              description="Interactive budget charts show where your money goes. Compare 5 retirement withdrawal strategies side-by-side. Get a personalized strategy recommendation. Check your health score across 5 dimensions."
            />
            <Step
              number="4"
              title="Watch It Get Smarter (Day 7)"
              description="Finsava learns from your corrections. Health score trends show your first week of progress. Dashboard tells you exactly what changed in your spending."
            />
          </div>
        </div>
      </section>

      {/* Tech Stack */}

      {/* Bootstrapped */}
      <section className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">Built lean, priced fair</h2>
            <p className="mt-4 text-[var(--muted)] text-lg leading-relaxed">
              100% bootstrapped. No venture funding, no pressure to monetize your data.
              We keep costs low so you can too.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-center">
              <p className="text-3xl font-bold text-[var(--income)]">Free</p>
              <p className="text-sm text-[var(--muted)] mt-1">To get started</p>
              <p className="text-xs text-[var(--muted)] mt-3 leading-relaxed">
                Dashboard, transactions, budget planning, bank sync via SimpleFin,
                AI insights and CSV import &mdash; no credit card required.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-center">
              <p className="text-3xl font-bold text-[var(--primary)]">$9.99</p>
              <p className="text-sm text-[var(--muted)] mt-1">Pro plan</p>
              <p className="text-xs text-[var(--muted)] mt-3 leading-relaxed">
                FIRE Planning Lab, Plaid (12,000+ banks), Claude AI Assistant,
                analytics, and the full financial toolkit. Compare:
                YNAB $14.99, Monarch $14.99, Copilot $9.99.
                <span className="block mt-1 opacity-70">Competitor pricing as of April 2026.</span>
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-center">
              <p className="text-3xl font-bold text-[var(--foreground)]">$0</p>
              <p className="text-sm text-[var(--muted)] mt-1">Venture capital raised</p>
              <p className="text-xs text-[var(--muted)] mt-3 leading-relaxed">
                100% bootstrapped. No investors to satisfy, no growth-at-all-costs
                pressure, no reason to sell your data.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-[var(--muted)]">
            Read the full breakdown:{" "}
            <a href="/blog/hosting-fintech-7-dollars" className="text-[var(--primary)] hover:underline">
              How We Built a Full-Stack Fintech App on a Budget
            </a>
          </p>
          <div className="mt-6 text-center">
            <a
              href="#waitlist"
              className="inline-block rounded-xl bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-24 px-6 border-t border-[var(--card-border)]">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl">From the blog</h2>
            <p className="mt-4 text-[var(--muted)] text-lg">Deep dives on how Finsava works.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 hover:border-[var(--muted)] transition-colors"
              >
                <p className="text-sm text-[var(--primary)] mb-2">{post.category}</p>
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{post.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/blog" className="text-sm text-[var(--primary)] hover:underline">
              View all posts &rarr;
            </Link>
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
                Bank credentials encrypted at rest with industry-standard encryption. Passwords securely hashed.
                All database queries scoped by user ID.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">📡</div>
              <h3 className="font-semibold text-lg">No Data Selling</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                No tracking cookies, no third-party ad trackers. We use anonymous page-view
                analytics only. We never sell or share your personal or financial information.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">🛡️</div>
              <h3 className="font-semibold text-lg">Security Patched Quickly</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                We monitor our dependencies for known vulnerabilities automatically and aim to
                patch anything serious within a day.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 text-left">
              <div className="text-2xl mb-3">🤖</div>
              <h3 className="font-semibold text-lg">AI You Control</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Powered by Claude AI. AI-generated suggestions require your explicit
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
              <h3 className="font-semibold text-lg">Tested Before It Ships</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                Comprehensive test suite covering auth, budgets, analytics, health score,
                sync, imports, transfer detection, tier enforcement, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <WaitlistSection />

      <SiteFooter />
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
