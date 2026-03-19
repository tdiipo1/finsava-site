"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const isValidEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const trimmed = email.trim();
    if (!trimmed) return;

    if (!isValidEmail(trimmed)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    if (!consent) {
      setStatus("error");
      setMessage("Please agree to receive email updates before joining.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      } else {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <section id="waitlist" className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Get Early Access</h2>
        <p className="mt-4 text-[var(--muted)] text-lg leading-relaxed">
          Join the waitlist to be notified when Finsava Cloud is available.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-0"
        >
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle" && status !== "loading") {
                setStatus("idle");
                setMessage("");
              }
            }}
            className="flex-1 rounded-xl sm:rounded-r-none border border-[var(--card-border)] bg-[var(--card)] px-5 py-3.5 text-base text-[var(--foreground)] placeholder-[var(--muted)] outline-none focus:border-[var(--primary)] transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading" || !consent}
            className="rounded-xl sm:rounded-l-none bg-[var(--primary)] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        <label className="mt-4 flex items-start gap-2 text-left max-w-md mx-auto cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-[var(--card-border)] accent-[var(--primary)]"
          />
          <span className="text-xs text-[var(--muted)]">
            I agree to receive email updates about Finsava. You can unsubscribe at any time.
            See our{" "}
            <Link href="/privacy" className="text-[var(--primary)] hover:underline">
              Privacy Policy
            </Link>.
          </span>
        </label>

        {message && (
          <p
            className={`mt-4 text-sm ${
              status === "error" ? "text-[var(--expense)]" : "text-[var(--income)]"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
