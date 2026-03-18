import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Finsava",
  description:
    "How Finsava handles your data. TL;DR: your financial data stays on your machine.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💸</span>
            <span className="text-xl font-bold">Finsava</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Last updated: March 18, 2026
        </p>

        <div className="mt-12 space-y-10 text-[var(--muted)] leading-relaxed">
          {/* Intro */}
          <p>
            Finsava is a self-hosted, open-source personal finance tool. Privacy
            is at the core of the project. This policy explains what data is
            collected by the <strong className="text-[var(--foreground)]">finsava.com landing page</strong> and
            how the <strong className="text-[var(--foreground)]">self-hosted Finsava application</strong> handles
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
              The self-hosted Finsava application does not send any data to us.
              All financial data — transactions, budgets, savings goals, AI
              conversations, and ML models — stays entirely on your machine.
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

          {/* Self-Hosted App Privacy */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Self-Hosted App Privacy
            </h2>
            <p>
              When you run Finsava on your own hardware, all financial data is
              stored in a local SQLite database on your machine. Specifically:
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

          {/* Source Code */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Source Code Availability
            </h2>
            <p>
              Finsava is licensed under the{" "}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                GNU Affero General Public License v3.0 (AGPL-3.0)
              </a>
              . The full source code is available on{" "}
              <a
                href="https://github.com/tdiipo1/Finsava"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                GitHub
              </a>
              , so you can audit exactly what the software does.
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
                href="mailto:owotumi.oladipupo@gmail.com"
                className="text-[var(--primary)] hover:underline"
              >
                owotumi.oladipupo@gmail.com
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
            <span className="text-lg">💸</span>
            <span className="font-semibold">Finsava</span>
          </Link>
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Finsava. Open source under
            AGPL-3.0.
          </p>
        </div>
      </footer>
    </div>
  );
}
