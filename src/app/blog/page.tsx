import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog — Finsava",
  description:
    "Articles about personal finance, self-hosting, local AI, and building Finsava in public.",
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
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-7 w-7" />
            <span className="text-xl font-bold">Finsava</span>
          </Link>
          <div className="hidden items-center gap-8 sm:flex">
            <Link href="/#features" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/pricing" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/changelog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
              Changelog
            </Link>
            <Link href="/blog" className="text-sm text-white font-medium transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold sm:text-5xl">Blog</h1>
        <p className="mt-4 text-lg text-[var(--muted)]">
          Building Finsava in public — personal finance, self-hosting, local AI,
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

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Finsava" className="h-5 w-5" />
            <span className="font-semibold">Finsava</span>
          </Link>
          <p className="text-sm text-[var(--muted)]">
            &copy; {new Date().getFullYear()} Finsava. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
