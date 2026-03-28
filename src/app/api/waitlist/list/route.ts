import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_PATH = path.join(process.cwd(), "waitlist.json");
const ADMIN_SECRET = process.env.WAITLIST_ADMIN_SECRET || "finsava-admin-2026";

function readWaitlist(): string[] {
  try {
    const data = fs.readFileSync(WAITLIST_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== ADMIN_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const emails = readWaitlist();

  // If ?format=csv, return downloadable CSV
  const format = request.nextUrl.searchParams.get("format");
  if (format === "csv") {
    const csv = "email\n" + emails.join("\n");
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="finsava-waitlist-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  return NextResponse.json({
    total: emails.length,
    emails,
  });
}
