import type { Metadata } from "next";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "What's New — Finsava",
  description:
    "Recent improvements to Finsava, described in terms of what they change about managing your money.",
  alternates: { canonical: "https://finsava.com/changelog" },
};

/**
 * What-s New.
 *
 * This page used to fetch GitHub releases and, finding none, silently fall back
 * to rendering raw commit subject lines -- linked from the footer of every
 * page. Customers of a money app were shown things like
 * "Merge pull request #86 from MyLifePlatform/feat/investment-sync-quota" and
 * "fix: restore the user_id filter on the subscriptions read path". The second
 * kind is worse than meaningless: it announces a bug in engineering shorthand,
 * with no context, to people deciding whether to trust us with their savings.
 *
 * Entries are written by hand now. The rule for adding one: say what changed
 * about managing your money. If an entry cannot be written without naming a
 * table, a service, a framework or a pull request, it does not belong here.
 */

interface Entry {
  date: string;       // ISO, the date it reached users
  title: string;
  body: string;
}

const ENTRIES: Entry[] = [
  {
    date: "2026-09-01",
    title: "Your actual investments, holding by holding",
    body:
      "If your brokerage supports it, Finsava now shows the individual positions inside your investment accounts — the tickers, how many shares, what they cost you and what they are worth now — instead of just an account balance. Your allocation chart is built from real holdings rather than guessed from purchases.",
  },
  {
    date: "2026-08-31",
    title: "Subscriptions you can believe",
    body:
      "Recurring charges are now separated into subscriptions and household bills, and shown as two figures rather than one large and unhelpful total. Anything that looks like it stopped charging is surfaced for you to confirm rather than quietly counted forever, and price rises are flagged when they happen.",
  },
  {
    date: "2026-08-31",
    title: "The dashboard stays where you left it",
    body:
      "Changing the date range no longer throws you back to the first chart. Whichever view you were reading stays put, and it is remembered next time you visit. You can also narrow a chart to a single category or merchant to see just that slice of your spending.",
  },
  {
    date: "2026-08-30",
    title: "Refunds no longer count as spending",
    body:
      "A returned purchase used to leave the original charge sitting in your budget as if you had spent the money. Refunds are now matched to what they reverse, so a category shows what it actually cost you.",
  },
  {
    date: "2026-08-30",
    title: "Transfers between your own accounts stop inflating your spending",
    body:
      "Moving money to savings, or paying off a credit card, is not spending — but it was being counted as such. Finsava now recognises these pairs and leaves them out of your totals, and shows you which ones it excluded so you can undo any it got wrong.",
  },
];

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold">What&apos;s new</h1>
        <p className="mt-3 text-[var(--muted)] text-lg">
          Recent changes, and what they mean for your money.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--card-border)]" />

            <div className="space-y-8">
              {ENTRIES.map((entry) => (
                <div key={entry.title} className="relative pl-12">
                  <div className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--background)] bg-[var(--primary)]" />

                  <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5">
                    <time className="text-xs text-[var(--muted)]">{formatDate(entry.date)}</time>
                    <h2 className="mt-1 text-lg font-semibold">{entry.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{entry.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-[var(--muted)]">
            Finsava is in a closed pilot, so this list covers what invited accounts see today.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
