import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Changelog — Finsava",
  description: "Latest updates, releases, and improvements to Finsava.",
};

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: { name: string; date: string };
  };
  html_url: string;
}

interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
}

async function getChangelog(): Promise<
  { type: "release" | "commit"; date: string; title: string; body: string; url: string }[]
> {
  const entries: { type: "release" | "commit"; date: string; title: string; body: string; url: string }[] = [];

  // Try releases first
  try {
    const res = await fetch("https://api.github.com/repos/tdiipo1/Finsava/releases?per_page=20", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github.v3+json" },
    });
    if (res.ok) {
      const releases: GitHubRelease[] = await res.json();
      for (const r of releases) {
        entries.push({
          type: "release",
          date: r.published_at,
          title: r.name || r.tag_name,
          body: r.body || "",
          url: r.html_url,
        });
      }
    }
  } catch {}

  // Fallback to commits if no releases
  if (entries.length === 0) {
    try {
      const res = await fetch("https://api.github.com/repos/tdiipo1/Finsava/commits?per_page=30", {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      if (res.ok) {
        const commits: GitHubCommit[] = await res.json();
        for (const c of commits) {
          const lines = c.commit.message.split("\n");
          entries.push({
            type: "commit",
            date: c.commit.author.date,
            title: lines[0],
            body: lines.slice(2).join("\n").trim(),
            url: c.html_url,
          });
        }
      }
    } catch {}
  }

  return entries;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ChangelogPage() {
  const entries = await getChangelog();

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💸</span>
            <span className="text-xl font-bold">Finsava</span>
          </Link>
          <div className="hidden items-center gap-8 sm:flex">
            <a href="/#features" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Features</a>
            <a href="/#how-it-works" className="text-sm text-[var(--muted)] hover:text-white transition-colors">How It Works</a>
            <a href="/pricing" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Pricing</a>
            <span className="text-sm text-white font-medium">Changelog</span>
            <a href="https://github.com/tdiipo1/Finsava" target="_blank" rel="noopener noreferrer"
              className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 px-6 text-center">
        <h1 className="text-4xl font-bold">Changelog</h1>
        <p className="mt-3 text-[var(--muted)] text-lg">Latest updates and improvements to Finsava</p>
      </section>

      {/* Entries */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          {entries.length === 0 ? (
            <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-8 text-center">
              <p className="text-[var(--muted)]">No changelog entries yet. Check back soon!</p>
            </div>
          ) : (
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-[var(--card-border)]" />

              <div className="space-y-8">
                {entries.map((entry, i) => (
                  <div key={i} className="relative pl-12">
                    {/* Timeline dot */}
                    <div className={`absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--background)] ${
                      entry.type === "release" ? "bg-[var(--primary)]" : "bg-[var(--muted)]"
                    }`} />

                    <div className="rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-5 hover:border-[var(--muted)] transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <time className="text-xs text-[var(--muted)]">{formatDate(entry.date)}</time>
                        {entry.type === "release" && (
                          <span className="rounded-full bg-[var(--primary)]/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                            Release
                          </span>
                        )}
                      </div>
                      <a href={entry.url} target="_blank" rel="noopener noreferrer"
                        className="text-lg font-semibold hover:text-[var(--primary)] transition-colors">
                        {entry.title}
                      </a>
                      {entry.body && (
                        <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed whitespace-pre-line line-clamp-4">
                          {entry.body}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--card-border)] py-8 px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg">💸</span>
            <span className="font-semibold">Finsava</span>
          </Link>
          <p className="text-sm text-[var(--muted)]">&copy; {new Date().getFullYear()} Finsava</p>
        </div>
      </footer>
    </div>
  );
}
