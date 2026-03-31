import Link from "next/link";

export default function SiteNav({ current }: { current?: string }) {
  const links = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--card-border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Finsava" className="h-7 w-7" />
          <span className="text-xl font-bold">Finsava</span>
        </Link>
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors ${
                current === link.label
                  ? "text-white font-medium"
                  : "text-[var(--muted)] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#waitlist"
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
