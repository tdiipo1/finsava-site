import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Finsava",
  description:
    "How Finsava handles your data. TL;DR: your financial data is protected with encryption at rest and strict access controls.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-7 w-7" />
            <span className="text-xl font-bold">Finsava</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Last updated: March 19, 2026
        </p>

        <div className="mt-12 space-y-10 text-[var(--muted)] leading-relaxed">
          {/* Intro */}
          <p>
            Finsava is a privacy-first personal finance platform. Privacy
            is at the core of the project. This policy explains what data is
            collected by the <strong className="text-[var(--foreground)]">finsava.com landing page</strong> and
            how the <strong className="text-[var(--foreground)]">Finsava application</strong> handles
            your information.
          </p>

          {/* What Data We Collect */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              What Data We Collect
            </h2>
            <p>
              The finsava.com landing page collects only one piece of personal
              information: <strong className="text-[var(--foreground)]">your email address</strong>, submitted
              voluntarily through the registration form.
            </p>
            <p className="mt-3">
              The Finsava application protects your financial data with
              encryption at rest and strict access controls. All financial data
              — transactions, budgets, savings goals, AI conversations, and ML
              models — is secured within your account.
            </p>
          </section>

          {/* How We Use It */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              How We Use Your Data
            </h2>
            <p>
              Email addresses collected through registration are used solely to
              operate your account and send notifications about Finsava updates.
              We do not sell, share, or rent your email to any third party.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Third-Party Services
            </h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">Vercel</strong> — The finsava.com landing
                page is hosted on Vercel. Vercel may collect standard web
                analytics (IP addresses, browser metadata) as part of its
                hosting infrastructure. See{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Vercel&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong className="text-[var(--foreground)]">SimpleFin</strong> — If you enable bank
                sync in the self-hosted app, transaction data is routed through
                SimpleFin&apos;s API. This connection is initiated and controlled
                entirely by you on your own server. See{" "}
                <a
                  href="https://www.simplefin.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  SimpleFin&apos;s website
                </a>
                .
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Plaid</strong> (sub-processor
                under GDPR Art. 28) — Bank account connection and transaction data
                retrieval (12,000+ institutions). Plaid acts as a data sub-processor
                on Finsava&apos;s behalf under a Data Processing Agreement.{" "}
                <strong className="text-[var(--foreground)]">Credential isolation:</strong>{" "}
                Your bank login credentials are entered directly into Plaid&apos;s
                secure hosted interface (Plaid Link) and never touch Finsava&apos;s
                servers. Finsava receives only a short-lived authorization token.{" "}
                <strong className="text-[var(--foreground)]">Data Finsava receives from Plaid:</strong>{" "}
                transaction data (dates, amounts, descriptions, merchant names,
                currency codes), account metadata (account name, type, balance),
                and institution information. Finsava does{" "}
                <strong className="text-[var(--foreground)]">not</strong> receive your
                bank login credentials, account numbers, or routing numbers.
                Transaction data is periodically synced, not real-time. See{" "}
                <a
                  href="https://plaid.com/legal/end-user-privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Plaid&apos;s End User Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* Aggregated Data and Model Training */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Aggregated Data and Model Training
            </h2>
            <p>
              To improve transaction categorization accuracy for all users,
              Finsava may train machine learning models on anonymized, aggregated
              data. This aggregated data contains{" "}
              <strong className="text-[var(--foreground)]">only</strong>{" "}
              merchant/payee description text and spending category labels. It
              does not contain your name, email, account numbers, transaction
              amounts, account balances, dates, or any other personally
              identifiable information.
            </p>
            <p className="mt-3">
              A minimum of two distinct users must independently categorize
              the same merchant description before any data point enters the
              aggregated training set. Contested categorizations (where users
              disagree) are excluded entirely. No individual user&apos;s data
              can be reconstructed from the aggregated model.
            </p>
            <p className="mt-3">
              <strong className="text-[var(--foreground)]">Legal basis (GDPR):</strong>{" "}
              Legitimate interest (Article 6(1)(f)) in improving service
              quality. The processing involves only anonymized, aggregated
              data that cannot reasonably identify any individual.
            </p>
            <p className="mt-3">
              <strong className="text-[var(--foreground)]">Opt out:</strong>{" "}
              You may request that your categorizations be excluded from
              future model training by contacting support@finsava.com.
            </p>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Data Retention
            </h2>
            <p>
              Account data is retained while your account is active. You can
              delete your account and all associated data at any time from the
              Settings page, or contact us at the address below.
            </p>
          </section>

          {/* Self-Managed Deployment */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Self-Managed Deployment
            </h2>
            <p>
              As an alternative option, you can run Finsava on your own
              hardware. In this configuration, all financial data is stored in a
              local SQLite database on your machine. Specifically:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>No telemetry or usage tracking is collected.</li>
              <li>No data is sent to Finsava or any third party by default.</li>
              <li>
                AI processing happens locally via Ollama — your prompts and
                financial context never leave your device.
              </li>
              <li>
                There is no cloud sync unless you explicitly configure it
                yourself.
              </li>
              <li>
                You have full control to inspect, export, or delete your data at
                any time.
              </li>
            </ul>
          </section>

          {/* Finsava Cloud */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Finsava Cloud Service
            </h2>
            <p>
              Finsava operates as a hosted service where Finsava acts as a data
              processor for your financial information. The following disclosures
              apply:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">Data storage:</strong>{" "}
                Your financial data will be stored on hosted PostgreSQL servers.
                All data is encrypted in transit (TLS) and at rest.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">AI processing:</strong>{" "}
                Cloud AI processing uses Claude (Anthropic). Your financial context
                is sent to Anthropic&apos;s servers for processing. AI features can
                be disabled at any time in Settings.
                Self-managed deployments can use local AI via Ollama instead.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Sub-processors:</strong>{" "}
                Finsava Cloud uses the following sub-processors: cloud hosting
                provider (for database and application hosting), Anthropic Claude
                (cloud AI), Stripe (subscription billing &mdash; receives email,
                name, payment method), Plaid (bank sync), SimpleFin (bank sync),
                Resend (transactional emails), and Vercel (landing page hosting).
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Data location:</strong>{" "}
                Cloud data may be stored and processed in the United States. For
                EU users, data transfers are governed by the EU-US Data Privacy
                Framework or Standard Contractual Clauses as applicable.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Data portability:</strong>{" "}
                You can export all of your data at any time using the built-in
                data export feature (Settings &rarr; Export My Data).
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Account deletion:</strong>{" "}
                You can permanently delete your account and all associated data
                at any time from the Settings page.
              </li>
            </ul>
          </section>

          {/* Claude AI Disclosure */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Claude AI Disclosure
            </h2>
            <p>
              Finsava uses Claude (by Anthropic) for cloud-based AI financial
              analysis. When AI features are active:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Your financial context (spending summaries, budget data, and
                category breakdowns) is sent to Anthropic&apos;s API for
                processing.
              </li>
              <li>
                AI features can be disabled at any time in the Settings page.
              </li>
              <li>
                Anthropic&apos;s data processing terms apply to data sent to Claude.
                See{" "}
                <a
                  href="https://www.anthropic.com/policies/terms-of-service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Anthropic Terms of Service
                </a>.
              </li>
              <li>
                For self-managed deployments, local AI via Ollama is available
                as an alternative where no financial data leaves your machine.
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Cookies
            </h2>
            <p>
              The Finsava application uses the following cookies:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">finapp_token</strong> —
                httpOnly authentication cookie for your login session. Cannot be
                read by JavaScript.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">finapp_viewing_as</strong> —
                httpOnly cookie used when viewing a shared account. Set only when
                the account sharing feature is active. Contains only the numeric
                user ID of the account being viewed.
              </li>
            </ul>
            <p className="mt-3">
              We do not use tracking cookies, analytics cookies, advertising
              cookies, or third-party cookies. The finsava.com landing page uses
              only essential cookies set by our hosting provider (Vercel).
            </p>
          </section>

          {/* Do Not Sell */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              We Do Not Sell Your Data
            </h2>
            <p className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 font-semibold text-[var(--foreground)]">
              Finsava does not sell, rent, lease, or share your personal information
              or financial data with any third party for monetary or other valuable
              consideration. This applies to all users across all tiers and
              deployment methods.
            </p>
          </section>

          {/* CCPA/CPRA Rights */}
          <section id="ccpa">
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              California Privacy Rights (CCPA/CPRA)
            </h2>
            <p>
              If you are a California resident, the California Consumer Privacy
              Act (CCPA) and California Privacy Rights Act (CPRA) provide you
              with specific rights regarding your personal information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">Right to know:</strong>{" "}
                You have the right to request information about the categories
                and specific pieces of personal information we collect, use, and
                disclose.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Right to delete:</strong>{" "}
                You have the right to request deletion of your personal
                information. For the landing page, email us to request removal.
                For Finsava Cloud, use the account deletion feature in Settings.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Right to opt-out:</strong>{" "}
                Finsava does not sell or share your personal information for
                cross-context behavioral advertising.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Non-discrimination:</strong>{" "}
                We will not discriminate against you for exercising any of your
                CCPA/CPRA rights.
              </li>
            </ul>
            <p className="mt-3">
              Finsava does not sell your personal information. We do not share
              your personal information for cross-context behavioral advertising
              purposes.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Your Rights (GDPR)
            </h2>
            <p>
              If you are located in the European Economic Area or the United
              Kingdom, you have the following rights under the General Data
              Protection Regulation:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Right of access to your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&quot;right to be forgotten&quot;)</li>
              <li>Right to restriction of processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at{" "}
              <a
                href="mailto:privacy@finsava.com"
                className="text-[var(--primary)] hover:underline"
              >
                privacy@finsava.com
              </a>. We will respond within 30 days.
            </p>
          </section>

          {/* Security Transparency */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Security Transparency
            </h2>
            <p>
              Finsava is built with a privacy-first architecture. All data is
              encrypted in transit and at rest. Bank credentials are encrypted
              at rest. AI processing uses Claude (Anthropic); self-managed
              deployments can use local AI via Ollama.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Contact
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:privacy@finsava.com"
                className="text-[var(--primary)] hover:underline"
              >
                privacy@finsava.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-5 w-5" />
            <span className="font-semibold">Finsava</span>
          </Link>
          <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Finsava. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
