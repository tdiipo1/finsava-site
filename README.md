# finsava-site

Marketing site for Finsava. Next.js on Vercel, deployed from `main`.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build
npm run verify:demo  # type-checks and sanity-checks the Strategy Lab demo
```

## The waitlist

**This site has no database.** A signup is forwarded to the Finsava app,
which stores it in the same Postgres as everything else and backs it up with
everything else.

That is deliberate. The site used to keep its own Redis store, which meant a
service nobody was watching: it lapsed, its hostname stopped resolving, and
every signup hung until the platform killed the request — which is what "the
button is broken" looked like. The app already had a `waitlist_signups` table
documented as "forwarded from finsava-site", so this is the arrangement the
product was designed for.

### Getting the list

Sign in to Finsava as an admin, then:

```
https://app.finsava.com/api/waitlist              # JSON
https://app.finsava.com/api/waitlist?format=csv   # CSV download
```

Admin auth is the only credential — no separate secret to store or lose.
Email addresses in the CSV are escaped so one beginning `=`, `+`, `-` or `@`
cannot execute as a formula in a spreadsheet.

There is deliberately **no endpoint on this site that can return the list**.
One existed, anyone could download it, and it was removed rather than given
a password.

### Checking whether signups are working

```bash
curl https://finsava.com/api/waitlist
```

`{"ok":true,...}` means the site can reach the app and signups will land.
`{"ok":false,...}` means they will not. It submits nothing and returns no
personal data, so it is safe to call any time.

### If signups are failing

The site forwards to `APP_URL` (defaults to `https://app.finsava.com`), so
"failing" almost always means the app is down or unreachable — check the app
first, not this site.

Nothing is silently dropped in the meantime. Each failed attempt is logged on
its own line before the error is returned:

```bash
npx vercel logs --since 30d | grep WAITLIST_MISSED
```

Visitors are never told they joined when nothing was stored — a failed
submission shows an error with a mailto fallback.
