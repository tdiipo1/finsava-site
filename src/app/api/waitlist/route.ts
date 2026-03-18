import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_PATH = path.join(process.cwd(), "waitlist.json");
const FINSAVA_API_URL = process.env.FINSAVA_API_URL; // e.g. "https://api.finsava.com"

// ── In-memory rate limiting ───────────────────────────────────────────
const RATE_LIMIT_MAX = 5; // max submissions per window
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const CLEANUP_INTERVAL_MS = 10 * 60 * 1000; // purge expired entries every 10 min

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Periodically clean up expired entries so the map doesn't grow unbounded
if (typeof globalThis !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, entry] of rateLimitMap) {
      if (now >= entry.resetAt) {
        rateLimitMap.delete(ip);
      }
    }
  }, CLEANUP_INTERVAL_MS);
}

/**
 * Resolve the client IP from common proxy headers, falling back to "unknown".
 */
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // x-forwarded-for may be a comma-separated list; take the first entry
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

/**
 * Check (and increment) the rate limit for a given IP.
 * Returns the entry after incrementing, or null if the request is allowed
 * and this is within limits.
 */
function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  resetAt: number;
} {
  const now = Date.now();
  let entry = rateLimitMap.get(ip);

  // If no entry or the window has expired, start a fresh window
  if (!entry || now >= entry.resetAt) {
    entry = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, entry);
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetAt: entry.resetAt };
  }

  // Window is still active — increment
  entry.count += 1;

  if (entry.count > RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }

  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count, resetAt: entry.resetAt };
}

function readWaitlist(): string[] {
  try {
    const data = fs.readFileSync(WAITLIST_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeWaitlist(emails: string[]): void {
  try {
    fs.writeFileSync(WAITLIST_PATH, JSON.stringify(emails, null, 2), "utf-8");
  } catch {
    // Filesystem may be read-only (e.g. Vercel); ignore silently
  }
}

/**
 * Forward the signup to the main Finsava backend for persistent storage.
 * Fire-and-forget: if the backend is unreachable, we still return success
 * to the user (the local file fallback may have captured it, and we don't
 * want a backend outage to block signups on the landing page).
 */
async function forwardToBackend(email: string): Promise<boolean> {
  if (!FINSAVA_API_URL) return false;

  try {
    const res = await fetch(`${FINSAVA_API_URL}/api/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "landing_page" }),
      signal: AbortSignal.timeout(5000), // 5s timeout
    });
    return res.ok;
  } catch {
    // Network error or timeout — don't block the user
    console.error("[waitlist] Failed to forward signup to backend");
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    // ── Rate limiting ───────────────────────────────────────────────
    const clientIp = getClientIp(request);
    const rateCheck = checkRateLimit(clientIp);

    if (!rateCheck.allowed) {
      const retryAfterSec = Math.ceil(
        (rateCheck.resetAt - Date.now()) / 1000,
      );
      return NextResponse.json(
        {
          error:
            "Too many requests. Please wait a while before trying again.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfterSec) },
        },
      );
    }

    const body = await request.json();
    const email: string | undefined = body?.email;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 },
      );
    }

    const trimmed = email.trim().toLowerCase();

    // Basic server-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    // ── Local file storage (works locally, ephemeral on Vercel) ────
    const emails = readWaitlist();
    const alreadyLocal = emails.includes(trimmed);

    if (!alreadyLocal) {
      emails.push(trimmed);
      writeWaitlist(emails);
    }

    // ── Forward to Finsava backend for persistent storage ──────────
    const forwarded = await forwardToBackend(trimmed);

    // If backend confirmed duplicate, treat as already registered
    if (alreadyLocal) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        message:
          "You're on the list! We'll notify you when Finsava Cloud is available.",
        persisted: forwarded,
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
