import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Finsava",
  description:
    "Terms governing your use of Finsava, a self-hosted personal finance tool licensed under AGPL-3.0.",
};

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-[var(--muted)]">
          Last updated: March 18, 2026
        </p>

        <div className="mt-12 space-y-10 text-[var(--muted)] leading-relaxed">
          {/* Intro */}
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the
            Finsava software and the finsava.com website. By using Finsava, you
            agree to these Terms.
          </p>

          {/* Service Description */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Service Description
            </h2>
            <p>
              Finsava is a self-hosted personal finance tool that runs on your
              own hardware. It provides budgeting, transaction tracking, AI-powered
              financial advice, bank sync, anomaly detection, and related
              features. You are responsible for deploying, configuring, and
              maintaining your own instance.
            </p>
          </section>

          {/* License */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              License
            </h2>
            <p>
              Finsava is free and open-source software licensed under the{" "}
              <a
                href="https://www.gnu.org/licenses/agpl-3.0.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                GNU Affero General Public License v3.0 (AGPL-3.0)
              </a>
              . You may use, modify, and distribute the software in accordance
              with the terms of this license. Key obligations include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Any modified versions must also be licensed under AGPL-3.0.
              </li>
              <li>
                If you run a modified version as a network service, you must
                make the source code available to its users.
              </li>
              <li>
                The full license text is included in the{" "}
                <a
                  href="https://github.com/tdiipo1/Finsava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  source repository
                </a>
                .
              </li>
            </ul>
          </section>

          {/* No Warranty */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              No Warranty
            </h2>
            <p>
              Finsava is provided{" "}
              <strong className="text-[var(--foreground)]">&quot;as is&quot;</strong> without warranty of
              any kind, express or implied, including but not limited to the
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement. The entire risk as to the quality and
              performance of the software is with you.
            </p>
          </section>

          {/* User Responsibility */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              User Responsibility for Data
            </h2>
            <p>
              Because Finsava is self-hosted, you are solely responsible for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Backing up your database and configuration files.
              </li>
              <li>
                Securing access to your Finsava instance (firewalls, passwords,
                network configuration).
              </li>
              <li>
                Ensuring compliance with any applicable laws or regulations
                related to your financial data.
              </li>
              <li>
                Managing API keys and credentials for third-party integrations
                such as SimpleFin.
              </li>
            </ul>
            <p className="mt-3">
              We do not have access to your self-hosted data and cannot recover
              it if lost.
            </p>
          </section>

          {/* Acceptable Use */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Acceptable Use
            </h2>
            <p>When using the finsava.com website or interacting with our services, you agree not to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Submit false information through the waitlist or contact forms.
              </li>
              <li>
                Attempt to disrupt or interfere with the finsava.com website.
              </li>
              <li>
                Use the Finsava name or branding in a way that implies official
                endorsement without permission.
              </li>
              <li>
                Redistribute modified versions of Finsava without complying with
                the AGPL-3.0 license.
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Limitation of Liability
            </h2>
            <p>
              In no event shall the authors, contributors, or copyright holders
              of Finsava be liable for any claim, damages, or other liability,
              whether in an action of contract, tort, or otherwise, arising
              from, out of, or in connection with the software or the use or
              other dealings in the software.
            </p>
            <p className="mt-3">
              Finsava is not a financial advisor. Any AI-generated suggestions,
              health scores, or anomaly alerts are informational only and should
              not be treated as professional financial advice.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Changes will be
              reflected on this page with an updated &quot;Last updated&quot;
              date. Continued use of Finsava after changes constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Contact
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at{" "}
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
