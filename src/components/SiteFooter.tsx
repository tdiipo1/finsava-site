import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--card-border)] py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Finsava" className="h-5 w-5" />
          <span className="font-semibold">Finsava</span>
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Link href="/privacy" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/blog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/changelog" className="text-sm text-[var(--muted)] hover:text-white transition-colors">
            Changelog
          </Link>
        </div>
        <p className="text-sm text-[var(--muted)]">
          &copy; {new Date().getFullYear()} Finsava. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
