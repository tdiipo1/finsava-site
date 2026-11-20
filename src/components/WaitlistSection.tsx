"use client";

import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    // A request that never answers must still answer the visitor. When the
    // store became unreachable the route hung until the platform killed it,
    // so this promise never settled and the button span forever.
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
        signal: controller.signal,
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 429) {
        setStatus("error");
        setErrorMsg("Too many requests. Please try again later.");
      } else if (res.status === 400) {
        setStatus("error");
        setErrorMsg(data.error || "Please enter a valid email.");
      } else if (!res.ok) {
        // Anything else that failed is NOT a signup. This branch used to fall
        // through to success, so a 500 would have told someone they were on
        // the list when nothing had been stored.
        setStatus("error");
        setErrorMsg(data.error || "We couldn't save your address. Please email hello@finsava.com and we'll add you.");
      } else if (data.message?.includes("already")) {
        setStatus("duplicate");
      } else {
        setStatus("success");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg((err as Error)?.name === "AbortError"
        ? "That took too long. Please email hello@finsava.com and we'll add you."
        : "Something went wrong. Please try again.");
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 border-t border-[var(--card-border)]">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Join the Waitlist</h2>
        <p className="mt-4 text-[var(--muted)] text-lg leading-relaxed">
          Finsava is in a closed pilot. Join the waitlist and we&apos;ll send invites in waves &mdash;
          every invite starts with a 14-day free trial of Pro.
        </p>

        {status === "success" ? (
          <div className="mt-10 rounded-xl bg-green-500/10 border border-green-500/30 px-6 py-4">
            <p className="text-green-400 font-semibold">You&apos;re on the list!</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              We&apos;ll email your invite when your wave opens up.
            </p>
          </div>
        ) : status === "duplicate" ? (
          <div className="mt-10 rounded-xl bg-blue-500/10 border border-blue-500/30 px-6 py-4">
            <p className="text-blue-400 font-semibold">You&apos;re already on the waitlist!</p>
            <p className="text-sm text-[var(--muted)] mt-1">
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 max-w-md mx-auto space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[var(--card-border)] bg-[var(--card)] px-4 py-3 text-white placeholder:text-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading" || !consent}
                className="whitespace-nowrap rounded-xl bg-[var(--primary)] px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 transition-colors disabled:opacity-60"
              >
                {status === "loading" ? "Joining..." : "Join Waitlist"}
              </button>
            </div>
            <label className="flex items-start gap-2 text-left cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 rounded border-[var(--card-border)] accent-[var(--primary)]"
              />
              <span className="text-xs text-[var(--muted)]">
                I agree to receive product updates from Finsava. View our{" "}
                <a href="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</a>.
              </span>
            </label>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">{errorMsg}</p>
        )}

        <p className="mt-4 text-sm text-[var(--muted)]">
          No spam. Unsubscribe anytime. Free &middot; Pro $9.99/mo.
        </p>
      </div>
    </section>
  );
}
