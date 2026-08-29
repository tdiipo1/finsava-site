// Centralized blog post list — used by /blog index, landing page, and RSS feed.
// When adding a new post: create the page at /blog/[slug]/page.tsx and add an entry here.

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;       // ISO YYYY-MM-DD
  tags: string[];
  category: string;   // primary category for landing-page badge
}

export const posts: BlogPost[] = [
  {
    slug: "finsava-is-live-invite-only",
    title: "Finsava Is Live, Invite-Only: What Shipped and What Didn't",
    description:
      "Finsava's closed pilot is live. An engineer's launch note: the Python + Next.js build story, what's in Free vs Pro, and what we deliberately haven't turned on.",
    date: "2026-08-29",
    tags: ["engineering", "indie hacker"],
    category: "Infrastructure",
  },
  {
    slug: "fire-dashboard-deep-dive",
    title: "The FIRE Dashboard That Models Your Actual Life (Not Just 4% of Your Expenses)",
    description:
      "A deep dive into Finsava's FIRE Dashboard: 1,000-simulation Monte Carlo, guardrails withdrawals, 40-year retirement survival, 4 historical stress tests, and a kids impact scenario.",
    date: "2026-04-09",
    tags: ["FIRE", "monte carlo", "guardrails", "retirement planning"],
    category: "FIRE Planning",
  },
  {
    slug: "guardrails-vs-4-percent-rule",
    title: "Guardrails vs the 4% Rule: The Withdrawal Strategy That Raises Success Rates",
    description:
      "The 4% rule has an 86% survival rate over 40 years. A guardrails strategy on the same portfolio can hit 95%+ by adjusting spending to market conditions. Here's the math.",
    date: "2026-04-09",
    tags: ["FIRE", "withdrawal strategy", "Guyton-Klinger", "retirement"],
    category: "FIRE Planning",
  },
  {
    slug: "finsava-vs-ynab",
    title: "Finsava vs YNAB: An Honest Comparison",
    description:
      "YNAB is the gold standard for envelope budgeting. Finsava is built for people who want AI-driven insights, FIRE planning, and privacy. Here's a factual head-to-head.",
    date: "2026-04-09",
    tags: ["comparison", "YNAB", "budgeting"],
    category: "Comparison",
  },
  {
    slug: "finsava-vs-monarch",
    title: "Finsava vs Monarch Money: The FIRE-Focused Alternative",
    description:
      "Monarch Money is the popular Mint replacement. Finsava is the FIRE-focused alternative with Monte Carlo simulations and local AI. A factual side-by-side.",
    date: "2026-04-09",
    tags: ["comparison", "Monarch Money", "Mint alternative"],
    category: "Comparison",
  },
  {
    slug: "finsava-vs-empower",
    title: "Finsava vs Empower: Free Isn't Really Free",
    description:
      "Empower (formerly Personal Capital) is a popular free retirement tracker — because it's a lead generator for their wealth management business. Here's what that costs you.",
    date: "2026-04-09",
    tags: ["comparison", "Empower", "Personal Capital"],
    category: "Comparison",
  },
  {
    slug: "fire-calculator-monte-carlo",
    title: "Why Your FIRE Calculator Is Wrong (And How 1,000 Monte Carlo Simulations Fix It)",
    description:
      "Most FIRE calculators use a single growth rate. Real markets don't work that way. See how Monte Carlo simulation gives you a realistic range of retirement outcomes.",
    date: "2026-03-29",
    tags: ["FIRE", "monte carlo", "retirement planning"],
    category: "FIRE Planning",
  },
  {
    slug: "hosting-fintech-7-dollars",
    title: "How We Run a Full-Stack Fintech App on a $7/Month VPS",
    description:
      "AI categorization, bank sync, Monte Carlo simulations, and a full Next.js + FastAPI stack — all on a $7/month VPS. Here's the architecture.",
    date: "2026-03-29",
    tags: ["engineering", "hosting", "indie hacker"],
    category: "Infrastructure",
  },
  {
    slug: "budget-visualization-vs-ynab",
    title: "Budget Visualization That Makes YNAB Look Like a Spreadsheet",
    description:
      "Interactive bar charts, donut views, YTD sparklines, and 4 AI budget profiles. A side-by-side look at how Finsava reimagines budget visualization.",
    date: "2026-03-29",
    tags: ["comparison", "YNAB", "budgeting"],
    category: "Comparison",
  },
  {
    slug: "finsava-vs-copilot-money",
    title: "Finsava vs Copilot Money: An Honest Comparison",
    description:
      "A detailed, factual comparison of pricing, features, bank sync, AI categorization, FIRE planning, and more. Same price, different strengths.",
    date: "2026-03-25",
    tags: ["comparison", "copilot money", "personal finance"],
    category: "Comparison",
  },
];

/** Returns posts sorted by date descending (newest first). */
export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

/** Returns the N most recent posts. */
export function getLatestPosts(n: number): BlogPost[] {
  return getSortedPosts().slice(0, n);
}
