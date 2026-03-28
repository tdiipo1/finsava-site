import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const ADMIN_SECRET = process.env.WAITLIST_ADMIN_SECRET || "finsava-admin-2026";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get all emails from the set
  const emails = await kv.smembers("waitlist:emails") as string[];

  // Get details for each email
  const entries = await Promise.all(
    emails.map(async (email) => {
      const details = await kv.hgetall(`waitlist:entry:${email}`) as Record<string, string> | null;
      return {
        email,
        source: details?.source || "unknown",
        signed_up_at: details?.signed_up_at || "unknown",
      };
    })
  );

  // Sort by signup date (newest first)
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

  return NextResponse.json({
    total: entries.length,
    entries,
  });
}
