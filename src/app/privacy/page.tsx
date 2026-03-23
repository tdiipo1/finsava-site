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
              voluntarily through the waitlist form.
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
              Email addresses collected through the waitlist are used solely to
              send notifications about Finsava updates, releases, and launch
              announcements. We do not sell, share, or rent your email to any
              third party.
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
                <strong className="text-[var(--foreground)]">Plaid</strong> — Alternative bank
                sync provider. If you connect via Plaid, your bank credentials
                are handled by Plaid and transaction data is routed through
                their servers. See{" "}
                <a
                  href="https://plaid.com/legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Plaid&apos;s Privacy Policy
                </a>
                .
              </li>
            </ul>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Data Retention
            </h2>
            <p>
              Waitlist email addresses are retained until you unsubscribe. To
              remove your email, contact us at the address below and we will
              delete it promptly.
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
                If you opt into cloud AI (Google Gemini), your financial context
                will be sent to Google&apos;s servers for processing. This requires
                your explicit consent and can be revoked at any time in Settings.
                Local AI via Ollama is not available in the Cloud version.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Sub-processors:</strong>{" "}
                Finsava Cloud uses the following sub-processors: cloud hosting
                provider (for database and application hosting), Google Gemini
                (optional cloud AI), SimpleFin (bank sync), Resend (transactional
                emails), and Vercel (landing page hosting).
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

          {/* Google Gemini AI Disclosure */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Google Gemini AI Disclosure
            </h2>
            <p>
              Finsava offers an optional integration with Google Gemini for
              cloud-based AI financial analysis. When enabled:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Your financial context (spending summaries, budget data, and
                category breakdowns) is sent to Google&apos;s Gemini API for
                processing.
              </li>
              <li>
                This feature requires your <strong className="text-[var(--foreground)]">explicit opt-in consent</strong>,
                which can be granted or revoked at any time in the Settings page.
              </li>
              <li>
                Google&apos;s data processing terms apply to data sent to Gemini.
                See{" "}
                <a
                  href="https://ai.google.dev/gemini-api/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Google Gemini API Terms
                </a>.
              </li>
              <li>
                When Gemini is not enabled, all AI processing happens locally
                via Ollama and no financial data leaves your machine.
              </li>
            </ul>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Cookies
            </h2>
            <p>
              The Finsava application uses a single httpOnly authentication cookie
              to maintain your login session. We do not use tracking cookies,
              analytics cookies, advertising cookies, or third-party cookies.
              The finsava.com landing page uses only essential cookies set by
              our hosting provider (Vercel).
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
              at rest. AI processing uses Google Gemini with your explicit
              consent; self-managed deployments can use local AI via Ollama.
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
