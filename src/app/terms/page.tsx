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
            <img src="/logo.png" alt="Finsava" className="h-7 w-7" />
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
              Finsava is a cloud-based personal finance platform that provides
              budgeting, transaction tracking, AI-powered financial analysis, bank
              sync, anomaly detection, and related features. A self-managed
              deployment option is also available for advanced users.
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
              You are responsible for:
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
              For self-managed deployments, we do not have access to your data
              and cannot recover it if lost.
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
                <strong className="text-[var(--foreground)]">Basic ($4.99/mo):</strong>{" "}
                Core budgeting, bank sync, ML-powered categorization, spending
                reports, and email support.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Pro ($9.99/mo):</strong>{" "}
                Everything in Basic plus AI assistant (Claude), financial planning
                (FIRE, savings, debt), investment tracking, net worth tracking,
                forecasting, multi-currency, and priority support.
              </li>
            </ul>
            <p className="mt-3">
              <strong className="text-[var(--foreground)]">Free Trial:</strong>{" "}
              New accounts receive a 14-day free trial of the Pro plan. During
              the trial, all Pro features are unlocked at no charge. After the
              trial ends, your account reverts to the Basic plan unless you
              subscribe. No credit card is required to start the trial.
            </p>
            <p className="mt-3">
              <strong className="text-[var(--foreground)]">Auto-Renewal:</strong>{" "}
              Paid subscriptions automatically renew at the end of each billing
              period (monthly) at the then-current price. You will be charged
              on the same date each month using the payment method on file.
              You may cancel your subscription at any time through your account
              settings or by contacting support; cancellation takes effect at
              the end of the current billing period and you will not be charged
              again. We do not offer refunds for partial billing periods. We
              reserve the right to change pricing with 30 days&apos; notice to
              existing subscribers. If payment fails, your account may be
              downgraded after a 7-day grace period. Payments are processed by
              Stripe, Inc. Your payment information is handled directly by Stripe
              and is never stored on Finsava&apos;s servers.
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              California residents: Under California Business and Professions
              Code Section 17602, you have the right to cancel your subscription
              at any time. You will receive a confirmation of your cancellation.
              For questions, contact support@finsava.com.
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
                Submit false information through registration or contact forms.
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
              via bank sync (SimpleFin or Plaid) is provided by third-party financial
              institutions and may contain errors or omissions. Transaction data
              is periodically synced and may not reflect real-time bank account
              activity; there may be a delay between bank-side changes (such as
              pending-to-posted adjustments or transaction removals) and their
              reflection in Finsava.
            </p>
            <p className="mt-3">
              When multi-currency display is enabled, transaction amounts and account
              balances may be converted to your preferred display currency using
              European Central Bank daily reference rates. These converted amounts
              are <strong className="text-[var(--foreground)]">indicative only</strong> and
              should not be relied upon for actual currency transactions, tax reporting,
              or financial decisions. The conversion rate applied by your bank for real
              transactions may differ materially from the ECB reference rate displayed.
            </p>
            <p className="mt-3">
              For self-managed deployments: you are solely responsible for
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

          {/* Service Improvement and Aggregated Data */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-[var(--foreground)]">
              Service Improvement and Aggregated Data
            </h2>
            <p>
              To improve categorization accuracy for all users, Finsava may use{" "}
              <strong className="text-[var(--foreground)]">anonymized, aggregated</strong>{" "}
              transaction description data to train machine learning models. This
              data contains only merchant/payee names and spending category labels.
              It does not contain your name, email, account numbers, transaction
              amounts, account balances, or any other personally identifiable
              information. A minimum of two distinct users must independently
              categorize the same merchant before any data point enters the
              aggregated training set. You may opt out of contributing to the
              aggregated model by contacting support@finsava.com.
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Legal basis under GDPR: legitimate interest (Art. 6(1)(f)) in
              improving service quality for all users. The processing involves
              only anonymized, aggregated data that cannot reasonably be used to
              identify any individual user.
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
                — Bank account connection and transaction data retrieval. Your bank
                login credentials are entered directly into Plaid&apos;s secure interface
                and never touch Finsava&apos;s servers. Finsava receives only transaction
                data (dates, amounts, descriptions, merchant names), account metadata
                (account name, type, balance), and institution information. Transaction
                data is periodically synced, not real-time; there may be a delay between
                bank-side changes and their reflection in Finsava. See{" "}
                <a
                  href="https://plaid.com/legal/end-user-privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Plaid&apos;s End User Privacy Policy
                </a>.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Claude AI (Anthropic)</strong>{" "}
                — Cloud AI assistant for financial analysis. Financial
                context is sent to Anthropic&apos;s servers for processing.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Ollama</strong>{" "}
                — Local AI inference. Runs entirely on your hardware.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">Resend</strong>{" "}
                — Password reset and notification emails.
              </li>
              <li>
                <strong className="text-[var(--foreground)]">European Central Bank / frankfurter.app</strong>{" "}
                — Exchange rate data for multi-currency display. Daily reference rates
                are used for indicative currency conversion of transaction amounts and
                account balances. ECB rates are reference rates published for informational
                purposes and are not suitable for actual currency transactions. Real-time
                market rates may differ materially. Rates may be delayed 1-2 business days
                due to weekends and market holidays.
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
              These Terms remain in effect as long as you use Finsava. You may
              cancel your subscription and stop using the software at any time.
            </p>
            <p className="mt-3">
              We reserve the right to suspend or terminate your account for
              violation of these Terms, with reasonable notice where possible.
              Upon termination, you may export your data using the built-in
              data export feature.
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
