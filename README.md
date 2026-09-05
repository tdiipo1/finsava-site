# finsava-site

Marketing site for Finsava. Next.js on Vercel, deployed from `main`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm run verify:demo  # type-checks and sanity-checks the Strategy Lab demo
```

## The waitlist

### Getting the list

There is **no admin page and no API endpoint** that returns the list — one
existed, it could be downloaded by anyone, and it was removed rather than
given a password. The export is a local script, and your Vercel login is the
authentication:

```bash
npx vercel login                 # once
npx vercel link                  # once — pick the finsava-site project
npx vercel env pull .env.local   # pulls REDIS_URL; only works if you have access
npm run waitlist:export          # writes waitlist-YYYY-MM-DD.csv in the repo root
```

The CSV is gitignored. Email addresses are escaped so one beginning `=`, `+`,
`-` or `@` cannot execute as a formula when opened in Excel.

### Checking whether signups are working

```bash
curl https://finsava.com/api/waitlist
```

Returns `{"ok":true,"store":"reachable","signups":N}` when the store is
healthy, or `{"ok":false,"store":"unreachable"|"unconfigured"}` when it is
not. It deliberately returns **no addresses** — just whether the thing works
and how many rows exist, so you can diagnose the button without submitting a
real signup or exposing anyone's email.

### If signups are failing

The store is a Redis instance reached through `REDIS_URL`, set in the Vercel
project's environment variables. If the probe above says `unreachable`, that
instance is down, expired, or the URL is stale — check the Redis provider
first, then `npx vercel env ls` to confirm the variable is present for the
Production environment.

Signups attempted while the store is down are **not silently dropped**: the
route logs each one on its own line before returning an error, so they can be
recovered from the platform logs:

```bash
npx vercel logs --since 30d | grep WAITLIST_MISSED
```

Visitors are never told they joined when nothing was stored — a failed
submission shows an error with a mailto fallback instead.
