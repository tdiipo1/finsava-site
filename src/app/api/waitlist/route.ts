import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

// ── Rate limiting (in-memory, resets on cold start — acceptable for landing page) ──
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

interface RateLimitEntry { count: number; resetAt: number; }
const rateLimitMap = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now();
  let entry = rateLimitMap.get(ip);
  if (!entry || now >= entry.resetAt) {
    entry = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, entry);
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1, resetAt: entry.resetAt };
  }
  entry.count += 1;
  if (entry.count > RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, resetAt: entry.resetAt };
  }
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count, resetAt: entry.resetAt };
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = getClientIp(request);
    const rateCheck = checkRateLimit(clientIp);

    if (!rateCheck.allowed) {
      const retryAfterSec = Math.ceil((rateCheck.resetAt - Date.now()) / 1000);
      return NextResponse.json(
        { error: "Too many requests. Please wait a while before trying again." },
        { status: 429, headers: { "Retry-After": String(retryAfterSec) } },
      );
    }

    const body = await request.json();
    const email: string | undefined = body?.email;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    // Check for duplicate
    const exists = await kv.sismember("waitlist:emails", trimmed);
    if (exists) {
      return NextResponse.json({ message: "You're already on the waitlist!" }, { status: 200 });
    }

    // Add to KV set (deduped) + store with timestamp in a hash
    await kv.sadd("waitlist:emails", trimmed);
    await kv.hset(`waitlist:entry:${trimmed}`, {
      email: trimmed,
      source: body.source || "landing_page",
      signed_up_at: new Date().toISOString(),
    });

    // Increment signup counter
    await kv.incr("waitlist:count");

    return NextResponse.json(
      { message: "You're on the list! We'll notify you when Finsava is available." },
      { status: 201 },
    );
  } catch (error) {
    console.error("[waitlist] Error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
