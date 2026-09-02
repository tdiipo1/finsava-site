/**
 * Export the waitlist to a local CSV.
 *
 * There is deliberately NO password here and no public endpoint to guard.
 * Authentication is your Vercel login: `vercel env pull` will only hand you
 * REDIS_URL if you are signed in to an account with access to this project.
 * That is the same credential that already protects deploys and the database
 * itself, so this adds no new secret to remember and no new thing to leak.
 *
 * Usage, from the repo root:
 *
 *   npx vercel login          # once
 *   npx vercel link           # once, pick the finsava-site project
 *   npx vercel env pull .env.local
 *   npm run waitlist:export
 *
 * Writes waitlist-YYYY-MM-DD.csv in the repo root (gitignored).
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { createClient } from "redis";

const ENV_FILE = ".env.local";

function loadEnvFile(path) {
  if (!existsSync(path)) return {};
  const out = {};
  for (const rawLine of readFileSync(path, "utf8").split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    let value = line.slice(eq + 1).trim();
    if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
    out[key] = value;
  }
  return out;
}

/** Neutralise spreadsheet formula injection and quote separators. */
function csvCell(value) {
  const v = String(value ?? "");
  const guarded = /^[=+\-@\t\r]/.test(v) ? `'${v}` : v;
  return `"${guarded.replace(/"/g, '""')}"`;
}

const fileEnv = loadEnvFile(ENV_FILE);
const url = process.env.REDIS_URL || fileEnv.REDIS_URL;

if (!url) {
  console.error(
    `No REDIS_URL found.\n\n` +
      `Run these from the repo root:\n` +
      `  npx vercel link\n` +
      `  npx vercel env pull ${ENV_FILE}\n`
  );
  process.exit(1);
}

const client = createClient({ url });
client.on("error", (err) => console.error("[Redis]", err.message));

// Fail fast rather than hanging: an unreachable store is the single most likely
// problem here, and a silent 60-second stall tells you nothing.
const timeout = setTimeout(() => {
  console.error(
    "\nTimed out connecting to Redis after 15s.\n" +
      "The store is unreachable. Signups write to this same store, so they are " +
      "very likely failing too. Check the storage integration in the Vercel dashboard."
  );
  process.exit(2);
}, 15_000);

await client.connect();
clearTimeout(timeout);

const emails = await client.sMembers("waitlist:emails");
const entries = await Promise.all(
  emails.map(async (email) => {
    const details = await client.hGetAll(`waitlist:entry:${email}`);
    return {
      email,
      source: details?.source || "unknown",
      signed_up_at: details?.signed_up_at || "unknown",
    };
  })
);
entries.sort((a, b) => b.signed_up_at.localeCompare(a.signed_up_at));

const csv =
  "email,source,signed_up_at\n" +
  entries.map((e) => [e.email, e.source, e.signed_up_at].map(csvCell).join(",")).join("\n");

const outFile = `waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
writeFileSync(outFile, csv);

// Count and a small sample only. The full list goes to the file, not to a
// terminal buffer or a screen share.
console.log(`${entries.length} signup(s) written to ${outFile}`);
for (const e of entries.slice(0, 3)) {
  const [name, domain] = e.email.split("@");
  console.log(`  ${name.slice(0, 2)}***@${domain ?? "?"}  ${e.signed_up_at}`);
}
if (entries.length > 3) console.log(`  ... and ${entries.length - 3} more in the file`);

await client.quit();
