import { NextRequest, NextResponse } from "next/server";
import { createClient } from "redis";

const ADMIN_SECRET = process.env.WAITLIST_ADMIN_SECRET || "finsava-admin-2026";

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

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== ADMIN_SECRET) {
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

    // Sort newest first
    entries.sort((a, b) => b.signed_up_at.localeCompare(a.signed_up_at));

    const format = request.nextUrl.searchParams.get("format");
    if (format === "csv") {
      const csv = "email,source,signed_up_at\n" +
        entries.map(e => `${e.email},${e.source},${e.signed_up_at}`).join("\n");
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="finsava-waitlist-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    return NextResponse.json({ total: entries.length, entries });
  } catch (error) {
    console.error("[waitlist-list] Error:", error);
    return NextResponse.json({ error: "Failed to fetch waitlist." }, { status: 500 });
  }
}
