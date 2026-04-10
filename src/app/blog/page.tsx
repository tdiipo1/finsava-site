import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { getSortedPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Finsava",
  description:
    "Articles about personal finance, AI-powered budgeting, and building Finsava in public.",
};

const posts = getSortedPosts();

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <SiteNav current="Blog" />

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-4xl font-bold sm:text-5xl">Blog</h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              Building Finsava in public — personal finance, AI-powered budgeting,
              and the journey from side project to product.
            </p>
          </div>
          <a
            href="/blog/rss.xml"
            className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[var(--card-border)] bg-[var(--card)] px-3 py-1.5 text-xs text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors"
            aria-label="Subscribe via RSS"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248S0 22.546 0 20.752s1.456-3.248 3.252-3.248 3.251 1.454 3.251 3.248zM1.677 6.462v4.423c7.13 0 12.93 5.808 12.93 12.93h4.43c0-9.572-7.792-17.353-17.36-17.353zm0-8.462v4.423c12.74 0 23.105 10.351 23.105 23.105H29.21C29.21 9.18 16.866-3.165 1.677-3.165z" transform="scale(0.83)" />
            </svg>
            RSS
          </a>
        </div>

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
