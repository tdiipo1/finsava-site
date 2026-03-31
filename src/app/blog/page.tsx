import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog — Finsava",
  description:
    "Articles about personal finance, AI-powered budgeting, and building Finsava in public.",
};

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const posts: BlogPost[] = [
  // Posts are defined here. Add new posts at the top.
  // When you write a post, create a file at /blog/[slug]/page.tsx and add the entry here.
  {
    slug: "fire-calculator-monte-carlo",
    title: "Why Your FIRE Calculator Is Wrong (And How 1,000 Monte Carlo Simulations Fix It)",
    description:
      "Most FIRE calculators use a single growth rate. Real markets don't work that way. See how Monte Carlo simulation gives you a realistic range of retirement outcomes.",
    date: "2026-03-29",
    tags: ["FIRE", "monte carlo", "retirement planning"],
  },
  {
    slug: "hosting-fintech-7-dollars",
    title: "How We Run a Full-Stack Fintech App for $7/Month",
    description:
      "AI categorization, bank sync, Monte Carlo simulations, and a full Next.js + FastAPI stack — all on a $7/month VPS. Here's the architecture.",
    date: "2026-03-29",
    tags: ["engineering", "hosting", "indie hacker"],
  },
  {
    slug: "budget-visualization-vs-ynab",
    title: "Budget Visualization That Makes YNAB Look Like a Spreadsheet",
    description:
      "Interactive bar charts, donut views, YTD sparklines, and 4 AI budget profiles. A side-by-side look at how Finsava reimagines budget visualization.",
    date: "2026-03-29",
    tags: ["comparison", "YNAB", "budgeting"],
  },
  {
    slug: "finsava-vs-copilot-money",
    title: "Finsava vs Copilot Money: An Honest Comparison",
    description:
      "A detailed, factual comparison of pricing, features, bank sync, AI categorization, FIRE planning, and more. Same price, different strengths.",
    date: "2026-03-25",
    tags: ["comparison", "copilot money", "personal finance"],
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <SiteNav current="Blog" />

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold sm:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Building Finsava in public — personal finance, AI-powered budgeting,
          and the journey from side project to product.
        </p>

        <div className="mt-12 space-y-8">
          {posts.length === 0 ? (
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-12 text-center">
              <p className="text-5xl mb-4">✍️</p>
              <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
              <p className="text-[var(--muted)] max-w-md mx-auto">
                We&apos;re working on our first articles. Follow us on{" "}
                <a
                  href="https://substack.com/@finsava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  Substack
                </a>{" "}
                or{" "}
                <a
                  href="https://x.com/finsava"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:underline"
                >
                  X/Twitter
                </a>{" "}
                to get notified when we publish.
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-6 transition-colors hover:border-[var(--muted)]"
              >
                <time className="text-sm text-[var(--muted)]">{post.date}</time>
                <h2 className="mt-1 text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {post.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--card-border)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
