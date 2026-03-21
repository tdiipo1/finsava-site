import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Finsava",
  description:
    "Terms governing your use of Finsava, a personal finance application.",
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
          Last updated: March 19, 2026
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
              financial analysis, bank sync, anomaly detection, and related
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
              Finsava is proprietary software. All rights reserved. You may use
              the Software in accordance with the terms of the LICENSE file
              provided with the software. You may not copy, modify, distribute,
              sublicense, or create derivative works without prior written
              consent from the owner.
            </p>
            <p className="mt-3">
              A limited community edition may be released in the future under a
              separate license. For licensing inquiries, contact{" "}
              <a
                href="mailto:legal@finsava.com"
                className="text-[var(--primary)] hover:underline"
              >
                legal@finsava.com
              </a>
              .
            </p>
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
                such as SimpleFin and Plaid.
              </li>
            </ul>
            <p className="mt-3">
              We do not have access to your self-hosted data and cannot recover
              it if lost.
            </p>
          </section>

          {/* Subscription and Billing */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Subscription and Billing
            </h2>
            <p>
              Finsava offers the following tiers:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">Free (Self-Hosted):</strong>{" "}
                Core features at no cost. You host on your own hardware.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Pro (Self-Hosted):</strong>{" "}
                Advanced features including analytics, auto-categorization, savings
                goals, and priority support. Billed monthly or annually.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Cloud (Managed):</strong>{" "}
                Everything in Pro plus managed hosting, cloud AI, automatic backups,
                and team collaboration. Billed monthly or annually.
              </li>
            </ul>
            <p className="mt-3">
              For paid tiers: billing is recurring at the interval selected at checkout.
              You may cancel at any time; cancellation takes effect at the end of the
              current billing period. We do not offer refunds for partial billing periods.
              We reserve the right to change pricing with 30 days&apos; notice to existing
              subscribers. If payment fails, your account may be downgraded to the Free
              tier after a 7-day grace period.
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
                the applicable license terms.
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
              Our total liability for any claims arising under these Terms shall
              not exceed the greater of (a) the amount you paid us in the 12
              months preceding the claim, or (b) one hundred US dollars ($100).
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to
              loss of profits, loss of data, business interruption, or other
              economic harm.
            </p>
          </section>

          {/* Financial Disclaimer */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Financial Disclaimer
            </h2>
            <p className="font-semibold text-[var(--foreground)] uppercase text-sm tracking-wide">
              FINSAVA IS NOT A FINANCIAL ADVISORY SERVICE, INVESTMENT SERVICE, TAX
              SERVICE, OR LEGAL SERVICE. FINSAVA DOES NOT PROVIDE PROFESSIONAL FINANCIAL,
              INVESTMENT, TAX, OR LEGAL GUIDANCE.
            </p>
            <p className="mt-3">
              Any AI-generated suggestions, financial health scores, anomaly
              alerts, budget recommendations, spending analyses, or other
              outputs provided by the Finsava software are for{" "}
              <strong className="text-[var(--foreground)]">informational and educational purposes only</strong>{" "}
              and should not be treated as professional financial guidance. You
              should always consult a qualified financial professional before
              making significant financial decisions.
            </p>
            <p className="mt-3">
              Finsava is not liable for any financial loss, investment loss,
              missed opportunity, or other economic harm resulting from reliance
              on AI-generated recommendations, health scores, anomaly alerts,
              budget suggestions, or any other output of the software.
            </p>
          </section>

          {/* Data Accuracy and Loss */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Data Accuracy and Loss
            </h2>
            <p>
              We do not guarantee the accuracy, completeness, or reliability of
              any data, calculations, AI recommendations, forecasts, or
              financial analyses provided by Finsava. Transaction data imported
              via bank sync (SimpleFin) is provided by third-party financial
              institutions and may contain errors or omissions.
            </p>
            <p className="mt-3">
              For the self-hosted version: you are solely responsible for
              maintaining backups of your database and configuration. We do not
              have access to your data and cannot recover it if lost.
            </p>
            <p className="mt-3">
              For Finsava Cloud (when available): while we implement reasonable
              backup and recovery procedures, we do not guarantee against data
              loss. You are encouraged to regularly export your data using the
              built-in export feature.
            </p>
          </section>

          {/* Age Restriction */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Age Restriction
            </h2>
            <p>
              Finsava is intended for users aged 18 and older. You must be at
              least 18 years old to use this service. If you are under 18, you
              may not use Finsava or submit any personal information through our
              website. We do not knowingly collect information from children
              under 13 in compliance with the Children&apos;s Online Privacy
              Protection Act (COPPA).
            </p>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Indemnification
            </h2>
            <p>
              You agree to indemnify, defend, and hold harmless Finsava, its
              author, contributors, and affiliates from and against any claims,
              liabilities, damages, losses, and expenses (including reasonable
              legal fees) arising out of or in any way connected with: (a) your
              use of the software; (b) your violation of these Terms; (c) your
              reliance on AI-generated financial suggestions; or (d) your
              violation of any applicable law or regulation.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Intellectual Property
            </h2>
            <p>
              Finsava is proprietary software. All rights reserved. The
              &quot;Finsava&quot; name, logo, and branding are trademarks of
              Oladipupo Owotumi. You may not use the Finsava trademarks in a
              way that suggests endorsement or affiliation without prior
              written permission.
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Third-Party Services
            </h2>
            <p>
              Finsava integrates with third-party services that are governed by
              their own terms and privacy policies. We are not responsible for
              the availability, accuracy, or practices of these services:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong className="text-[var(--foreground)]">SimpleFin</strong>{" "}
                — Bank account synchronization. Your bank data passes through
                SimpleFin&apos;s servers.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Plaid</strong>{" "}
                — Bank account synchronization (alternative provider). Your bank
                data passes through Plaid&apos;s servers. See{" "}
                <a
                  href="https://plaid.com/legal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Plaid&apos;s Privacy Policy
                </a>.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Google Gemini</strong>{" "}
                — Optional cloud AI assistant (requires explicit opt-in). Financial
                context is sent to Google&apos;s servers when enabled.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Ollama</strong>{" "}
                — Local AI inference. Runs entirely on your hardware.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Resend</strong>{" "}
                — Password reset and notification emails.
              </li>
            </ul>
            <p className="mt-3">
              AI models (Phi-4, Mistral, Llama, DeepSeek, Qwen) are subject to
              their own licenses. Users are responsible for reviewing and
              complying with the license terms of any models they download and
              use via Ollama.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Governing Law and Jurisdiction
            </h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of Texas, United States, without regard to
              its conflict of law provisions. Any disputes arising under or in
              connection with these Terms shall be subject to the exclusive
              jurisdiction of the courts located in the State of Texas.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Dispute Resolution
            </h2>
            <p>
              Any dispute, controversy, or claim arising out of or relating to
              these Terms or your use of Finsava shall first be addressed
              through good-faith negotiation. If the parties cannot resolve the
              dispute within 30 days, either party may pursue binding
              arbitration administered by the American Arbitration Association
              (AAA) under its Commercial Arbitration Rules. Arbitration shall
              take place in the State of Texas.
            </p>
            <p className="mt-3 font-semibold text-[var(--foreground)] uppercase text-sm tracking-wide">
              YOU AGREE TO RESOLVE DISPUTES ON AN INDIVIDUAL BASIS. YOU WAIVE
              YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION, CLASS-WIDE
              ARBITRATION, OR ANY REPRESENTATIVE PROCEEDING.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Termination
            </h2>
            <p>
              For the self-hosted version, these Terms remain in effect as long
              as you use Finsava. You may stop using the software at any time by
              uninstalling it.
            </p>
            <p className="mt-3">
              For Finsava Cloud (when available), we reserve the right to
              suspend or terminate your account for violation of these Terms,
              with reasonable notice where possible. Upon termination, you may
              export your data using the built-in data export feature.
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
                href="mailto:legal@finsava.com"
                className="text-[var(--primary)] hover:underline"
              >
                legal@finsava.com
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
