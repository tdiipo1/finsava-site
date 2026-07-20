"use client";

import { useState } from "react";

const TOP_FEATURES = [
  ["Local AI Insights (Gemma 4, self-hosted)", true, false, false, false],
  ["Monte Carlo FIRE Simulation (2,000 runs)", true, false, false, false],
  ["AI Budget Suggestions (4 profiles)", true, false, false, false],
  ["Dynamic Financial Health Score (5 components)", true, false, "partial", false],
  ["Statistical Anomaly Detection", true, false, false, false],
  ["ML Categorization with Calibration", true, false, false, false],
];

const MORE_FEATURES = [
  ["Bank Sync (Plaid + SimpleFin)", true, true, true, true],
  ["AI-Powered Categorization", true, false, true, true],
  ["Interactive Budget Charts (bar + donut + YTD)", true, false, true, true],
  ["Bulk Transaction Editing", true, true, true, false],
  ["Multi-Currency (18 currencies, ECB rates)", true, true, false, false],
  ["Investment Tracking", true, false, true, true],
  ["Transfer Auto-Detection", true, false, false, true],
  ["Monte Carlo FIRE Planning", true, false, false, false],
  ["Debt Payoff Planning", true, true, false, false],
  ["Net Worth Tracking", true, true, true, true],
];

export function ComparisonTable() {
  const [expanded, setExpanded] = useState(false);

  const renderRow = ([feature, ...supported]: (string | boolean)[]) => (
    <tr key={feature as string} className="border-b border-[var(--card-border)]/50">
      <td className="text-left py-3 px-4 text-[var(--foreground)]">{feature as string}</td>
      {(supported as (boolean | string)[]).map((s, i) => (
        <td key={i} className="py-3 px-4">
          {s === "partial"
            ? <span className="text-yellow-500 text-xs font-medium">Limited</span>
            : s
              ? <span className="text-[var(--income)] text-lg">&#10003;</span>
              : <span className="text-[var(--muted)] opacity-40">&mdash;</span>
          }
        </td>
      ))}
    </tr>
  );

  const competitors = ["YNAB", "Monarch", "Copilot"];
  const renderCard = ([feature, finsava, ...rest]: (string | boolean)[]) => (
    <div key={feature as string} className="rounded-lg border border-[var(--card-border)] bg-[var(--card)] p-4">
      <p className="text-sm font-medium text-[var(--foreground)] mb-2">{feature as string}</p>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-[var(--foreground)]">Finsava</span>
          {finsava === "partial"
            ? <span className="text-yellow-500">Limited</span>
            : finsava
              ? <span className="text-[var(--income)]">&#10003;</span>
              : <span className="text-[var(--muted)] opacity-40">&mdash;</span>}
        </div>
        {(rest as (boolean | string)[]).map((val, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <span className="text-[var(--muted)]">{competitors[i]}</span>
            {val === "partial"
              ? <span className="text-yellow-500">Limited</span>
              : val
                ? <span className="text-[var(--income)]">&#10003;</span>
                : <span className="text-[var(--muted)] opacity-40">&mdash;</span>}
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
              <th className="py-3 px-4 font-semibold text-[var(--foreground)]">Finsava<br /><span className="text-xs font-normal text-[var(--income)]">Free or $9.99/mo</span></th>
              <th className="py-3 px-4 font-medium text-[var(--muted)]">YNAB<br /><span className="text-xs">$14.99/mo</span></th>
              <th className="py-3 px-4 font-medium text-[var(--muted)]">Monarch<br /><span className="text-xs">$14.99/mo</span></th>
              <th className="py-3 px-4 font-medium text-[var(--muted)]">Copilot<br /><span className="text-xs">$9.99/mo</span></th>
            </tr>
          </thead>
          <tbody className="text-center">
            {TOP_FEATURES.map(renderRow)}
            {expanded && MORE_FEATURES.map(renderRow)}
          </tbody>
        </table>
      </div>

      {/* Mobile card layout */}
      <div className="md:hidden space-y-3">
        <div className="text-center mb-2">
          <p className="text-xs text-[var(--muted)]">
            <span className="font-semibold text-[var(--income)]">Finsava Free or $9.99/mo</span> &middot; competitors $14.99/mo
          </p>
        </div>
        {TOP_FEATURES.map(renderCard)}
        {expanded && MORE_FEATURES.map(renderCard)}
      </div>

      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="mt-3 w-full text-center text-sm text-[var(--primary)] hover:underline"
        >
          Show all {TOP_FEATURES.length + MORE_FEATURES.length} features &darr;
        </button>
      )}
      {expanded && (
        <button
          onClick={() => setExpanded(false)}
          className="mt-3 w-full text-center text-sm text-[var(--muted)] hover:underline"
        >
          Show fewer &uarr;
        </button>
      )}

      <p className="mt-3 text-xs text-[var(--muted)] text-center">
        Competitor pricing as of April 2026. Prices may have changed.
      </p>
    </div>
  );
}
