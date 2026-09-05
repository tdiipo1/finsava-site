import { NextRequest, NextResponse } from "next/server";

/**
 * Waitlist signups.
 *
 * Signups are forwarded to the Finsava app, which stores them in the same
 * Postgres as everything else and is backed up with it. There is no separate
 * database for this site.
 *
 * That is a deliberate reversal. The site used to keep its own Redis store,
 * which meant a service nobody was watching: it lapsed, its hostname stopped
 * resolving, and every signup hung until the platform killed the request. A
 * marketing site holding the only copy of the leads, in a store that expires
 * quietly, is a bad trade for a table the product already has —
 * `waitlist_signups` even documents itself as "forwarded from finsava-site".
 *
 * Reading the list is NOT possible from here, on purpose. An endpoint that
 * could was removed for being downloadable by anyone. The list is exported
 * from the app under admin auth: GET /api/waitlist?format=csv
 */

const APP_URL = process.env.APP_URL ?? "https://app.finsava.com";
const FORWARD_TIMEOUT_MS = 8_000;

// ── Rate limiting ──
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

interface RateLimitEntry { count: number; resetAt: number; }
const rateLimitMap = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; resetAt: number } {
  const now = Date.now();
  let entry = rateLimitMap.get(ip);
  if (!entry || now >= entry.resetAt) {
    entry = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, entry);
    return { allowed: true, resetAt: entry.resetAt };
  }
  entry.count += 1;
  return { allowed: entry.count <= RATE_LIMIT_MAX, resetAt: entry.resetAt };
}

export async function POST(request: NextRequest) {
  let email = "unknown";
  try {
    const rateCheck = checkRateLimit(getClientIp(request));
    if (!rateCheck.allowed) {
      const retryAfterSec = Math.ceil((rateCheck.resetAt - Date.now()) / 1000);
      return NextResponse.json(
        { error: "Too many requests. Please wait a while before trying again." },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } },
      );
    }

    const body = await request.json();
    const raw: string | undefined = body?.email;
    if (!raw || typeof raw !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    email = raw.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Server-to-server, so no browser Origin header and no CORS involved.
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FORWARD_TIMEOUT_MS);
    let res: Response;
    try {
      res = await fetch(`${APP_URL}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: body.source || "landing_page" }),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }

    if (!res.ok) throw new Error(`app responded ${res.status}`);

    const data = await res.json().catch(() => ({}));
    const already = typeof data?.message === "string"
      && data.message.toLowerCase().includes("already");

    return NextResponse.json(
      {
        message: already
          ? "You're already on the waitlist!"
          : "You're on the list! We'll notify you when Finsava is available.",
      },
      { status: already ? 200 : 201 },
    );
  } catch (error) {
    // Log the address on its own line first. If the forward failed, this is
    // the only remaining record that someone tried to sign up, and a lost
    // signup is a lost person:
    //   npx vercel logs --since 30d | grep WAITLIST_MISSED
    console.error(`[waitlist] WAITLIST_MISSED email=${email} at=${new Date().toISOString()}`);
    console.error("[waitlist] Error:", error);

    // Never claim someone joined when nothing was stored.
    return NextResponse.json(
      { error: "We couldn't save your address just now. Please email hello@finsava.com and we'll add you." },
      { status: 503 },
    );
  }
}

/**
 * Is the signup path working? Returns no addresses and no counts of who —
 * just whether the app accepted a health probe, so the button can be
 * diagnosed without submitting a real signup.
 */
export async function GET() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FORWARD_TIMEOUT_MS);
  try {
    // An intentionally invalid body: the app validates before writing, so a
    // 422 proves it is up and reachable without creating a row.
    const res = await fetch(`${APP_URL}/api/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "healthcheck" }),
      signal: controller.signal,
    });
    const reachable = res.status === 422 || res.status === 400 || res.ok;
    return NextResponse.json(
      { ok: reachable, target: APP_URL, appStatus: res.status },
      { status: reachable ? 200 : 503 },
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, target: APP_URL, detail: String((err as Error)?.message ?? err) },
      { status: 503 },
    );
  } finally {
    clearTimeout(timer);
  }
}
