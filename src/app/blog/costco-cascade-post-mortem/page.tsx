import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import BlogHeader from "@/components/BlogHeader";

export const metadata: Metadata = {
  title:
    "The Bug That Re-Categorized Your Entire History (And What We Shipped to Prevent It)",
  description:
    "A PATCH endpoint silently cascaded category changes across every transaction matching the same merchant. One click, years of prior data rewritten. Here's the fix, the recovery tool, and the audit trail we built so it can't happen invisibly again.",
  keywords: [
    "post-mortem",
    "incident response",
    "personal finance bug",
    "audit trail",
    "transparency",
  ],
};

export default function CostcoCascadePostMortemPost() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-[var(--muted)] hover:text-white transition-colors"
      >
        &larr; Back to Blog
      </Link>

      <article className="mt-8 prose prose-invert max-w-none">
        <BlogHeader category="Engineering" />
        <h1 className="text-4xl font-bold leading-tight">
          The Bug That Re-Categorized Your Entire History
          <br />
          <span className="text-[var(--muted)] text-2xl font-normal">
            And What We Shipped to Prevent It
          </span>
        </h1>

        <p className="text-[var(--muted)] text-sm mt-2">
          Published April 2026 &middot; 5 min read
        </p>

        <p className="text-lg leading-relaxed mt-8">
          This is a post-mortem. Finsava isn&apos;t live yet — we&apos;re pre-launch
          and this bug only affected internal test data. But it would have been
          catastrophic in production, and we&apos;re writing it up publicly for
          two reasons: so future users know what to look for, and so whoever
          ships the next personal finance app doesn&apos;t repeat it.
        </p>

        <h2>What happened</h2>

        <p>
          Every time a user changed the category of a single transaction —
          say, re-tagging one Costco receipt from <em>Groceries</em> to{" "}
          <em>Household</em> — the backend issued a bulk SQL{" "}
          <code>UPDATE</code> against <strong>every other transaction</strong>{" "}
          in that user&apos;s history matching the same merchant and the same
          old category. Years of prior activity got silently rewritten on a
          single click.
        </p>

        <p>
          The cascade was invisible in the UI. The transaction table only
          re-rendered the rows currently on screen. The only way to notice
          was to check spending-by-category numbers for prior months and
          realize they&apos;d shifted.
        </p>

        <h2>Why it existed</h2>

        <p>
          The original intent was a &quot;merchant re-map&quot; shortcut —
          &quot;if this Costco is actually Household, probably all my Costcos
          are Household.&quot; Reasonable-sounding feature. The implementation
          was a one-line SQL update tacked onto the category-change endpoint,
          without a UI toggle, without a confirmation, without a preview of
          what was about to change.
        </p>

        <p>
          The failure mode is a classic one: a helpful default that assumes
          intent the user never expressed. &quot;I&apos;m fixing one row&quot;
          and &quot;I want to re-map every Costco I&apos;ve ever bought from
          across the last three years&quot; are not the same intent, and our
          API conflated them.
        </p>

        <h2>What we shipped</h2>

        <h3>1. The cascade is no longer the default</h3>
        <p>
          <code>PATCH /api/transactions/{"{id}"}</code> now touches exactly the
          row addressed. Apply-to-merchant is an explicit, opt-in parameter
          that the UI surfaces with a clear confirmation showing how many rows
          will change and what they&apos;ll change to. No confirmation, no
          bulk update.
        </p>

        <h3>2. An audit trail that can&apos;t be bypassed</h3>
        <p>
          The root cause of &quot;nobody noticed for days&quot; was that the
          cascade left no forensic trail. Log-line audit was opt-in — routers
          had to call <code>log_mutation(...)</code>, and the bulk update
          didn&apos;t. We shipped a SQLAlchemy{" "}
          <code>after_flush</code> listener that writes an{" "}
          <code>audit_events</code> row automatically for every insert,
          update, or delete on eight tracked tables (transactions, categories,
          merchant maps, budgets, assets, liabilities, bank accounts, users).
          Every column-level diff, every actor, every timestamp — all in the
          same database transaction as the mutation itself, so either both
          commit or neither does.
        </p>
        <p>
          What this means for you: if something unexpected ever changes in
          your data, there is a query that finds exactly when and how. No
          &quot;oh, we log that but rotation cleared it.&quot;
        </p>

        <h3>3. A recovery tool, archived away from everyday paths</h3>
        <p>
          We built a one-time script that identifies cascade victims
          (transactions silently flipped at the same moment as a user-intended
          change) and reverts them. The script has been moved from{" "}
          <code>scripts/</code> — where it&apos;d autocomplete alongside
          everyday tooling — to{" "}
          <code>docs/incidents/2026-04-costco-cascade/</code>, behind a two-step
          confirmation (type the word &quot;revert&quot; and then the target
          user&apos;s email) and a dry-run default. Running it is now a
          deliberate, typable action, not a paste-and-pray.
        </p>

        <h2>What we learned</h2>

        <ul>
          <li>
            <strong>
              A feature with no UI affordance should not exist as a side
              effect of another endpoint.
            </strong>{" "}
            If apply-to-merchant is a feature, it deserves a button with a
            confirmation. If it&apos;s not, it shouldn&apos;t happen
            implicitly.
          </li>
          <li>
            <strong>Opt-in audit logging is not audit logging.</strong> The
            moment a mutation path can be added without calling the audit
            helper, the forensic trail has a hole. Structural enforcement
            (event listeners on the ORM) is the only kind that survives new
            code.
          </li>
          <li>
            <strong>
              Recovery tools are weapons. Treat them like weapons.
            </strong>{" "}
            Dry-run by default, two-step confirmation, archived in a place
            that takes intention to reach.
          </li>
        </ul>

        <h2>What you can do now</h2>

        <p>
          If you&apos;re using an early build of Finsava and suspect your
          categories shifted unexpectedly: the recovery script can find and
          revert the cascaded changes for your account specifically. Open a
          support request and we&apos;ll run it. Post-launch, the audit trail
          means this kind of incident won&apos;t need a one-off script — we
          can query <code>audit_events</code> directly.
        </p>

        <p className="mt-10 text-sm text-[var(--muted)]">
          The full incident archive (script, README, reproduction notes) lives
          in{" "}
          <code>docs/incidents/2026-04-costco-cascade/</code> in the open
          repo. Engineering transparency is part of why we&apos;re building
          this.
        </p>

        <div className="mt-12 border-t border-[var(--card-border)] pt-8">
          <ShareButtons
            slug="costco-cascade-post-mortem"
            title="The Bug That Re-Categorized Your Entire History"
          />
        </div>
      </article>
    </main>
  );
}
