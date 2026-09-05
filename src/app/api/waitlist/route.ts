import { NextRequest, NextResponse } from "next/server";
import { createClient } from "redis";

// ── Redis connection (lazy, reused across requests) ──
let redisClient: ReturnType<typeof createClient> | null = null;

/** How long to wait for the store before giving up on a signup. */
const REDIS_CONNECT_TIMEOUT_MS = 5_000;

async function getRedis() {
  if (redisClient?.isReady) return redisClient;

  const url = process.env.REDIS_URL;
  if (!url) throw new Error("REDIS_URL not set");

  // Fail fast, and never cache a client that did not connect.
  //
  // Two bugs lived here. node-redis retries forever by default, so when the
  // Redis host became unreachable `connect()` never settled and the request
  // hung until the platform killed it — the visitor saw a spinner that never
  // resolved, which is what "the button is broken" looked like. And the
  // client was assigned to the module-level variable BEFORE connecting, so
  // one failure poisoned the instance: every later request took the cached,
  // never-connected client and hung on the first command.
  const client = createClient({
    url,
    socket: {
      connectTimeout: REDIS_CONNECT_TIMEOUT_MS,
      reconnectStrategy: false,
    },
  });
  client.on("error", (err) => console.error("[Redis]", err));
  try {
    await client.connect();
  } catch (err) {
    try { await client.destroy(); } catch { /* already dead */ }
    redisClient = null;
    throw err;
  }
  redisClient = client;
  return redisClient;
}

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

    const redis = await getRedis();

    // Check for duplicate
    const exists = await redis.sIsMember("waitlist:emails", trimmed);
    if (exists) {
      return NextResponse.json({ message: "You're already on the waitlist!" }, { status: 200 });
    }

    // Add to set (deduped) + store details as hash
    await redis.sAdd("waitlist:emails", trimmed);
    await redis.hSet(`waitlist:entry:${trimmed}`, {
      email: trimmed,
      source: body.source || "landing_page",
      signed_up_at: new Date().toISOString(),
    });
    await redis.incr("waitlist:count");

    return NextResponse.json(
      { message: "You're on the list! We'll notify you when Finsava is available." },
      { status: 201 },
    );
  } catch (error) {
    // Log the address on its own line before anything else. If the store is
    // unreachable this log is the only remaining record that someone tried to
    // sign up, and a lost signup is a lost person — recoverable from the
    // platform logs with: vercel logs --since 30d | grep WAITLIST_MISSED
    let missed = "unknown";
    try {
      const b = await request.clone().json();
      if (typeof b?.email === "string") missed = b.email.trim().toLowerCase();
    } catch { /* body already consumed or unparseable */ }
    console.error(`[waitlist] WAITLIST_MISSED email=${missed} at=${new Date().toISOString()}`);
    console.error("[waitlist] Error:", error);

    // Do not claim they are on the list when they are not. Give them a route
    // that does not depend on the thing that just failed.
    return NextResponse.json(
      { error: "We couldn't save your address just now. Please email hello@finsava.com and we'll add you." },
      { status: 503 },
    );
  }
}


/**
 * Store reachability, for diagnosing "is the button working?" without
 * submitting a real signup.
 *
 * Deliberately returns no addresses and no personal data. The waitlist itself
 * is exported locally with `npm run waitlist:export`; a public endpoint that
 * could hand out the list is exactly what was removed for leaking it.
 */
export async function GET() {
  if (!process.env.REDIS_URL) {
    return NextResponse.json(
      { ok: false, store: "unconfigured", detail: "REDIS_URL is not set" },
      { status: 503 },
    );
  }
  try {
    const redis = await getRedis();
    const count = await redis.sCard("waitlist:emails");
    return NextResponse.json({ ok: true, store: "reachable", signups: count });
  } catch (err) {
    return NextResponse.json(
      { ok: false, store: "unreachable", detail: String((err as Error)?.message ?? err) },
      { status: 503 },
    );
  }
}
