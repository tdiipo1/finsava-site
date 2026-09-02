"use client";

import { useState } from "react";

/**
 * Competitor comparison.
 *
 * Two rules this table has to follow to stay honest:
 *
 * 1. Every Finsava tick says which plan it is on. The header reads "Free or
 *    $9.99/mo" and the competitors are single-tier, so an unqualified tick
 *    implies the free plan does everything -- about half these rows are Pro.
 * 2. A row only claims a competitor LACKS something when that is checkable.
 *    Rows asserting gaps we could not verify were removed rather than left in
 *    as a dash, because a wrong dash about a named competitor is the kind of
 *    error that is both embarrassing and actionable.
 *
 * Tiers are taken from PRO_MODULES in the app (frontend/src/lib/modules.ts).
 */

type Support = boolean | "partial";
type Tier = "free" | "pro" | "mixed";

interface Row {
  feature: string;
  tier: Tier;
  finsava: Support;
  ynab: Support;
  monarch: Support;
  copilot: Support;
}

/** Shown by default. Deliberately opens with a row every tool ties on: a
 *  default view where we win six-nil reads as marketing, not information. */
const TOP_FEATURES: Row[] = [
  { feature: "Connects to your banks automatically", tier: "mixed", finsava: true, ynab: true, monarch: true, copilot: true },
  { feature: "Projects your retirement across 1,000 possible markets", tier: "pro", finsava: true, ynab: false, monarch: false, copilot: false },
  { feature: "Compares five ways of drawing down your savings", tier: "pro", finsava: true, ynab: false, monarch: false, copilot: false },
  { feature: "Flags spending that is unusual for you, not against a fixed limit", tier: "free", finsava: true, ynab: false, monarch: "partial", copilot: false },
  { feature: "AI insights that run on our own hardware, not a third party", tier: "free", finsava: true, ynab: false, monarch: false, copilot: false },
  { feature: "A free plan that includes bank sync", tier: "free", finsava: true, ynab: false, monarch: false, copilot: false },
];

const MORE_FEATURES: Row[] = [
  { feature: "Categorizes transactions and learns your corrections", tier: "free", finsava: true, ynab: false, monarch: true, copilot: true },
  { feature: "Interactive budget charts", tier: "free", finsava: true, ynab: false, monarch: true, copilot: true },
  { feature: "Net worth tracking", tier: "pro", finsava: true, ynab: true, monarch: true, copilot: true },
  { feature: "Investment tracking", tier: "pro", finsava: true, ynab: false, monarch: true, copilot: true },
  { feature: "Suggests budget targets from your own spending history", tier: "free", finsava: true, ynab: false, monarch: false, copilot: false },
  { feature: "A financial health score you can track over time", tier: "free", finsava: true, ynab: false, monarch: "partial", copilot: false },
];

const TIER_LABEL: Record<Tier, string> = {
  free: "Free",
  pro: "Pro",
  mixed: "Free / Pro",
};

const TIER_TITLE: Record<Tier, string> = {
  free: "Included in the free plan",
  pro: "Included in Pro ($9.99/mo)",
  mixed: "SimpleFin bank sync is free; Plaid is Pro",
};

function Mark({ value }: { value: Support }) {
  if (value === "partial") return <span className="text-yellow-500 text-xs font-medium">Limited</span>;
  return value
    ? <span className="text-[var(--income)] text-lg">&#10003;</span>
    : <span className="text-[var(--muted)] opacity-40">&mdash;</span>;
}

function TierBadge({ tier }: { tier: Tier }) {
  return (
    <span
      title={TIER_TITLE[tier]}
      className={`ml-1.5 rounded px-1.5 py-0.5 text-[10px] font-medium align-middle ${
        tier === "free"
          ? "bg-[var(--income)]/15 text-[var(--income)]"
          : "bg-[var(--primary)]/15 text-[var(--primary)]"
      }`}
    >
      {TIER_LABEL[tier]}
    </span>
  );
}

export function ComparisonTable() {
  const [expanded, setExpanded] = useState(false);
  const competitors = ["YNAB", "Monarch", "Copilot"] as const;
  const rows = expanded ? [...TOP_FEATURES, ...MORE_FEATURES] : TOP_FEATURES;

  const renderRow = (r: Row) => (
    <tr key={r.feature} className="border-b border-[var(--card-border)]/50">
      <td className="text-left py-3 px-4 text-[var(--foreground)]">{r.feature}</td>
      <td className="py-3 px-4 whitespace-nowrap">
        <Mark value={r.finsava} />
        {r.finsava && <TierBadge tier={r.tier} />}
      </td>
      <td className="py-3 px-4"><Mark value={r.ynab} /></td>
      <td className="py-3 px-4"><Mark value={r.monarch} /></td>
      <td className="py-3 px-4"><Mark value={r.copilot} /></td>
    </tr>
  );

  const renderCard = (r: Row) => (
    <div key={r.feature} className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-4">
      <p className="text-sm font-medium text-[var(--foreground)] mb-2">{r.feature}</p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[var(--foreground)]">Finsava</span>
          <Mark value={r.finsava} />
          {r.finsava && <TierBadge tier={r.tier} />}
        </div>
        {([r.ynab, r.monarch, r.copilot] as Support[]).map((val, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-[var(--muted)]">{competitors[i]}</span>
            <Mark value={val} />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      {/* Desktop / tablet table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--card-border)]">
              <th className="text-left py-3 px-4 font-medium text-[var(--muted)]">Capability</th>
              <th className="py-3 px-4 font-semibold text-[var(--foreground)]">
                Finsava<br />
                <span className="text-xs font-normal text-[var(--income)]">Free or $9.99/mo</span>
              </th>
              <th className="py-3 px-4 font-medium text-[var(--muted)]">YNAB<br /><span className="text-xs">$14.99/mo</span></th>
              <th className="py-3 px-4 font-medium text-[var(--muted)]">Monarch<br /><span className="text-xs">$14.99/mo</span></th>
              <th className="py-3 px-4 font-medium text-[var(--muted)]">Copilot<br /><span className="text-xs">$9.99/mo</span></th>
            </tr>
          </thead>
          <tbody className="text-center">{rows.map(renderRow)}</tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="md:hidden space-y-3">
        <div className="text-center mb-2">
          <p className="text-xs text-[var(--muted)]">
            <span className="font-semibold text-[var(--income)]">Finsava Free or $9.99/mo</span> &middot; competitors $14.99/mo
          </p>
        </div>
        {rows.map(renderCard)}
      </div>

      <button
        onClick={() => setExpanded((v) => !v)}
        className={`mt-3 w-full text-center text-sm hover:underline ${
          expanded ? "text-[var(--muted)]" : "text-[var(--primary)]"
        }`}
      >
        {expanded
          ? "Show fewer ↑"
          : `Show all ${TOP_FEATURES.length + MORE_FEATURES.length} capabilities ↓`}
      </button>

      <p className="mt-3 text-xs text-[var(--muted)] text-center">
        <span className="text-[var(--income)]">Free</span> and{" "}
        <span className="text-[var(--primary)]">Pro</span> mark which Finsava plan includes each
        capability. Competitor pricing and features checked April 2026 and may have changed &mdash;
        check their sites before deciding.
      </p>
    </div>
  );
}
