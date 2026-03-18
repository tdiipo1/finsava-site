import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_PATH = path.join(process.cwd(), "waitlist.json");
const FINSAVA_API_URL = process.env.FINSAVA_API_URL; // e.g. "https://api.finsava.com"

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
