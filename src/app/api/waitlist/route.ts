import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const WAITLIST_PATH = path.join(process.cwd(), "waitlist.json");

function readWaitlist(): string[] {
  try {
    const data = fs.readFileSync(WAITLIST_PATH, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

function writeWaitlist(emails: string[]): void {
  fs.writeFileSync(WAITLIST_PATH, JSON.stringify(emails, null, 2), "utf-8");
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

    const emails = readWaitlist();

    if (emails.includes(trimmed)) {
      return NextResponse.json(
        { message: "You're already on the waitlist!" },
        { status: 200 },
      );
    }

    emails.push(trimmed);
    writeWaitlist(emails);

    return NextResponse.json(
      { message: "You're on the list! We'll notify you when Finsava Cloud is available." },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
