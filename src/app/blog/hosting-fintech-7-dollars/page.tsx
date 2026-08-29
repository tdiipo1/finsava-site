import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title: "How We Run a Full-Stack Fintech App on a $7/Month VPS",
  description:
    "AI categorization, Plaid bank sync (12,000+ institutions), Monte Carlo simulations, and a full Next.js + FastAPI stack — all running on a $7/month VPS. Here's how.",
  keywords: [
    "cheap hosting fintech",
    "hetzner coolify",
    "self hosted saas",
    "bootstrap fintech",
    "low cost hosting",
    "docker compose production",
    "indie hacker hosting",
  ],
};

export default function HostingFintechPost() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-[var(--muted)] hover:text-white transition-colors"
      >
        &larr; Back to Blog
      </Link>

      <article className="mt-8 prose prose-invert max-w-none">
        <BlogHeader category="Infrastructure" />
        <h1 className="text-4xl font-bold leading-tight">
          How We Run a Full-Stack Fintech App on a $7/Month VPS
        </h1>

        <p className="text-[var(--muted)] text-sm mt-2">
          Published March 2026 &middot; 5 min read
        </p>

        <p className="text-lg leading-relaxed mt-8">
          Finsava is a personal finance app with AI-powered categorization, bank sync from
          12,000+ institutions via Plaid (plus SimpleFin), Monte Carlo retirement simulations, interactive budget charts,
          and a health score engine. The core of it runs on a single $7/month VPS — plus a few dollars a month for encrypted storage and offsite backups.
        </p>

        <p>Here&apos;s how we do it.</p>

        <h2>The Stack</h2>

        <ul>
          <li><strong>Backend:</strong> FastAPI (Python 3.11) with async SQLAlchemy</li>
          <li><strong>Frontend:</strong> Next.js 15 with React 19</li>
          <li><strong>Database:</strong> PostgreSQL 16</li>
          <li><strong>Reverse Proxy:</strong> Caddy (auto-HTTPS, security headers)</li>
          <li><strong>AI:</strong> Claude API (Anthropic) for categorization + Ollama for local inference</li>
          <li><strong>Bank Sync:</strong> Plaid + SimpleFin</li>
          <li><strong>Deployment:</strong> Docker Compose</li>
        </ul>

        <p>
          Everything runs in a single <code>docker-compose.yml</code>. No Kubernetes, no
          managed services, no multi-region complexity.
        </p>

        <h2>The Host: Hetzner CX33 ($7/month)</h2>

        <p>
          We chose Hetzner Cloud after evaluating 9 hosting options. For $7/month (EUR 6.49),
          we get:
        </p>

        <ul>
          <li>4 vCPUs</li>
          <li>8 GB RAM</li>
          <li>80 GB NVMe SSD</li>
          <li>20 TB transfer</li>
        </ul>

        <p>
          That&apos;s enough to run the entire stack with headroom. PostgreSQL, FastAPI, Next.js,
          and Caddy all run comfortably within 8 GB.
        </p>

        <h2>Why Not Railway / Render / Fly.io?</h2>

        <p>
          We evaluated managed platforms extensively. The problem: they don&apos;t support Docker
          Compose natively. Each service gets deployed separately, which means vendor-specific
          configuration and reduced portability. Our Docker Compose file works on any VPS,
          anywhere. Zero lock-in.
        </p>

        <table>
          <thead>
            <tr><th>Platform</th><th>Monthly Cost</th><th>Docker Compose</th><th>Portability</th></tr>
          </thead>
          <tbody>
            <tr><td>Hetzner + Coolify</td><td>$7</td><td>Native</td><td>10/10</td></tr>
            <tr><td>DigitalOcean</td><td>$12-24</td><td>Native (VPS)</td><td>9/10</td></tr>
            <tr><td>Railway</td><td>$5-12</td><td>Partial</td><td>6/10</td></tr>
            <tr><td>Render</td><td>$20+</td><td>No</td><td>5/10</td></tr>
            <tr><td>Fly.io</td><td>$10-12</td><td>No</td><td>5/10</td></tr>
          </tbody>
        </table>

        <h2>The Deployment Layer: Coolify</h2>

        <p>
          Coolify is a free, open-source PaaS you install on any VPS. It gives us a web
          dashboard for deployments, auto-SSL, git-push deploys, and monitoring &mdash; essentially
          a self-hosted Railway. The software is free; we only pay for the VPS.
        </p>

        <h2>AI Without Breaking the Bank</h2>

        <p>
          Claude AI (Anthropic) handles transaction categorization. We keep costs near-zero
          with a merchant-to-category cache: once a merchant has been categorized the same way
          3 times, the result is cached and reused without an API call. For recurring merchants
          (70-80% of transactions), the cache eliminates redundant API calls entirely.
        </p>

        <h2>The Portability Guarantee</h2>

        <p>
          Docker Compose is our insurance policy. If Hetzner raises prices, if we outgrow 8 GB,
          or if we need US-based hosting &mdash; we move the same <code>docker-compose.yml</code> to
          any other provider. No rewrite, no migration, no vendor lock-in.
        </p>

        <h2>What This Means for Users</h2>

        <p>
          Our core VPS costs $7/month. Finsava Pro is $9.99/month, and the free tier is genuinely free. The math is
          simple: we can offer a genuinely full-featured finance app at a fraction of the
          price of YNAB ($14.99) or Monarch ($14.99) because our cost structure allows it.
        </p>

        <p>
          We&apos;re not a venture-funded company burning through runway. We&apos;re building
          a sustainable tool for people who care about where their money goes &mdash; and we
          practice what we preach.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="/#waitlist"
            className="rounded-xl bg-[var(--primary)] px-8 py-3 font-semibold text-white hover:bg-blue-600 transition-colors"
          >
            Join the Waitlist
          </a>
          <Link
            href="/pricing"
            className="rounded-xl border border-[var(--card-border)] px-8 py-3 font-medium hover:border-[var(--muted)] transition-colors"
          >
            See Pricing
          </Link>
        </div>
        <ShareButtons
          slug="hosting-fintech-7-dollars"
          title="How We Run a Full-Stack Fintech App for $7/Month"
        />
      </article>
    </main>
  );
}
