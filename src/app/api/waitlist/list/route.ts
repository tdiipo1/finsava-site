import { NextRequest, NextResponse } from "next/server";
import { timingSafeEqual } from "crypto";
import { createClient } from "redis";

// No fallback on purpose. This endpoint returns every pilot waitlist email, so
// a default secret committed to the repo means anyone who reads the repo can
// download the list. If the env var is missing the endpoint refuses to serve.
const ADMIN_SECRET = process.env.WAITLIST_ADMIN_SECRET;

let redisClient: ReturnType<typeof createClient> | null = null;

async function getRedis() {
  if (!redisClient) {
    const url = process.env.REDIS_URL;
    if (!url) throw new Error("REDIS_URL not set");
    redisClient = createClient({ url });
    redisClient.on("error", (err) => console.error("[Redis]", err));
    await redisClient.connect();
  }
  return redisClient;
}

/** Constant-time compare so the secret cannot be recovered by timing. */
function secretMatches(provided: string | null): boolean {
  if (!ADMIN_SECRET || !provided) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(ADMIN_SECRET);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

/** Neutralise spreadsheet formula injection and quote separators.
 *  A signup address beginning with = + - or @ is executed as a formula when
 *  the exported CSV is opened in Excel or Sheets. */
function csvCell(value: string): string {
  const v = String(value ?? "");
  const guarded = /^[=+\-@\t\r]/.test(v) ? `'${v}` : v;
  return `"${guarded.replace(/"/g, '""')}"`;
}

export async function GET(request: NextRequest) {
  // Header only. The secret used to travel in the query string, where it is
  // recorded in proxy logs, browser history and Referer headers.
  const provided = request.headers.get("x-admin-secret");

  if (!ADMIN_SECRET) {
    console.error("[waitlist-list] WAITLIST_ADMIN_SECRET is not configured");
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }
  if (!secretMatches(provided)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const redis = await getRedis();
    const emails = await redis.sMembers("waitlist:emails");

    const entries = await Promise.all(
      emails.map(async (email) => {
        const details = await redis.hGetAll(`waitlist:entry:${email}`);
        return {
          email,
          source: details?.source || "unknown",
          signed_up_at: details?.signed_up_at || "unknown",
        };
      })
    );

    entries.sort((a, b) => b.signed_up_at.localeCompare(a.signed_up_at));

    const format = request.nextUrl.searchParams.get("format");
    if (format === "csv") {
      const csv =
        "email,source,signed_up_at\n" +
        entries
          .map((e) => [e.email, e.source, e.signed_up_at].map(csvCell).join(","))
          .join("\n");
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Cache-Control": "no-store",
          "Content-Disposition": `attachment; filename="finsava-waitlist-${new Date()
            .toISOString()
            .slice(0, 10)}.csv"`,
        },
      });
    }

    return NextResponse.json(
      { total: entries.length, entries },
      { headers: { "Cache-Control": "no-store" } }
    );
  } catch (error) {
    console.error("[waitlist-list] Error:", error);
    return NextResponse.json({ error: "Failed to fetch waitlist." }, { status: 500 });
  }
}
