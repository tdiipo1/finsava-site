"use client";

import { useState } from "react";
import Link from "next/link";

export default function SiteNav({ current }: { current?: string }) {
  const [open, setOpen] = useState(false);

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

        {/* Desktop nav */}
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

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center gap-1.5 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition-transform duration-200 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-[var(--foreground)] transition-transform duration-200 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-[var(--card-border)] bg-[var(--background)] px-6 pb-6 pt-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block text-base py-2 transition-colors ${
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
            onClick={() => setOpen(false)}
            className="block w-full text-center rounded-lg bg-[var(--primary)] px-4 py-3 text-base font-medium text-white hover:bg-blue-600 transition-colors"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
