# Blog Pipeline — 2026-08-29

> **Decisions log (2026-08-29):** F-a → option 1 DECIDED & APPLIED (invite-honest waitlist copy across all posts). F-b → RESOLVED (attribution to Plaid fixed in 3 sites). F-c → RESOLVED (UI verified: all 5 variants surfaced; claim stands). F-d → DECIDED: hosting-fintech-7-dollars REMOVED (registry + page deleted, 301 → /blog). F-e → recommendation delivered: park the post-mortem until the blog is larger; fold its lessons into a future data-protection engineering post. Post #8 stays parked.

Authored per `docs/blog-persona.md` ("Evidence-First Builder"). Every suggestion below inherits the persona's claim hygiene: tier truth, invite-only pilot framing, no hype vocabulary, verify numbers in the app before publishing. Product context: invite-only pilot live at app.finsava.com.

## 1. Pipeline: suggested posts

Ranked. Keywords marked *(off-list)* are outside the six-target SEO table — used where honest fit beats forced fit.

| # | Working title | Priority | Primary keyword | Segment |
|---|---|---|---|---|
| 1 | Finsava Is Live, Invite-Only: What Shipped and What Didn't | P1 | personal finance python (900/mo) | indie/build-in-public + all |
| 2 | Budget Targets From Your Own Percentiles, Not Somebody Else's Averages | P1 | ynab alternative (6.6k/mo) | Mint/YNAB refugees |
| 3 | Local AI for Money: Why the Free Tier Runs Gemma on Our Own Hardware | P1 | local ai finance (200/mo) + privacy budget app (400/mo) | privacy/self-hosted crowd |
| 4 | Why Emergency Runway Ignores Your Brokerage (On Purpose) | P2 | emergency fund calculator *(off-list)* | r/personalfinance generalists |
| 5 | Analytics That Answer the Follow-Up Question | P2 | spending trends analysis *(off-list)*; secondary: mint alternative | Mint refugees |
| 6 | A Portfolio Page You Can Interrogate | P2 | investment tracking app *(off-list)* | FIRE + generalists |
| 7 | Savings Rate Is the Whole Ballgame — Now You Can Watch It Move | P3 | savings rate FIRE *(off-list)* | FIRE community |
| 8 | The Bug That Re-Categorized Your Entire History (restore) | P3 | — (trust/brand, r/selfhosted-shareable) | privacy + indie |

### Details

**1. Finsava Is Live, Invite-Only: What Shipped and What Didn't** — P1
- **Angle:** The never-written "I Built This" launch post, finally — an engineer's launch note, not a launch hype piece. Lead with what's in the pilot, be explicit about what's gated (invite-only, and Plaid real holdings awaiting approval) — the candor *is* the differentiator.
- **Why now:** The pilot is live and the launch story is the only major brand moment with zero posts. Every later post internal-links to it.
- **Outline:** (1) what Finsava is and the Python/FastAPI + Next.js build story; (2) what's live in the pilot — free vs Pro, honestly; (3) what's deliberately not live yet and why invite-only.
- **Guard:** none — but no user counts, no revenue (persona §4.4).

**2. Budget Targets From Your Own Percentiles, Not Somebody Else's Averages** — P1
- **Angle:** Smart Budget Suggestions computes 4 tiers (P75/P50/P25/P10) of the user's *own* monthly spending — a mechanism post, not a feature tour. Contrast with rule-of-thumb budgets (50/30/20) and show the evidence-citing rationales.
- **Why now:** Just shipped; strongest budgeting differentiator vs YNAB/Monarch since launch.
- **Outline:** (1) why percentile-of-self beats population averages (mechanism + a worked example); (2) rationales that cite their evidence + subscription cancel-candidates; (3) bulk apply, and refund netting keeping "spent" honest against targets.
- **Guard:** verify tier placement of Smart Suggestions in-app before stating free vs Pro.

**3. Local AI for Money: Why the Free Tier Runs Gemma on Our Own Hardware** — P1
- **Angle:** Free-tier AI insights run on Gemma on Finsava's own infrastructure — transactions never leave the stack for a third-party model API. Name the mechanism precisely: "local" = our box, not the user's device — the persona demands we not blur that.
- **Why now:** Untouched keyword pair we can plausibly own; r/LocalLLaMA + r/privacy shareable; no existing post covers it.
- **Outline:** (1) the honest definition of "local" here; (2) what Gemma does on free (insights/categorization) vs what Claude does on Pro — tier truth; (3) cost/latency trade-offs of small local models, with numbers.
- **Guard:** verify current Gemma-vs-Ollama model naming and exactly which free features it powers.

**4. Why Emergency Runway Ignores Your Brokerage (On Purpose)** — P2
- **Angle:** An opinionated-design post: Emergency Runway counts only liquid savings, deliberately, because "runway" that requires selling equities in a drawdown isn't runway. Tour the rest of the Tools page from that same design stance.
- **Why now:** Tools page is newly live; a stance post earns links better than a feature list.
- **Outline:** (1) liquid-only rationale + the savings-composition toggle; (2) What-If Lab and Can-I-Afford-It as "answer before you commit" tools; (3) Coast FIRE tool + link to the FIRE deep-dive.
- **Guard:** confirm which Tools are free vs Pro before writing tier claims.

**5. Analytics That Answer the Follow-Up Question** — P2
- **Angle:** Every chart's real test is the second question ("ok, but *which* transactions?") — in-place drill-downs answer it without leaving the page. Window-aligned trend + YoY is the quiet star: comparisons that don't lie about partial months.
- **Why now:** Fresh release; pairs naturally with post #2's refund netting via bulk refund approval (side-by-side legs).
- **Outline:** (1) click a bar, see the transactions — in-place drill; (2) window alignment: why naive YoY comparisons mislead and how we align them; (3) bulk refund approval with side-by-side legs.
- **Guard:** Analytics is Pro — say so.

**6. A Portfolio Page You Can Interrogate** — P2
- **Angle:** The investments overhaul (tabbed portfolio, click-to-drill charts, deep links) framed as "a page built for questions, not admiration." Deep links make any view shareable/bookmarkable — small feature, real workflow win.
- **Why now:** Newly shipped; investment content otherwise absent from the blog.
- **Outline:** (1) tabbed structure and what each tab answers; (2) click-to-drill from chart to holdings; (3) deep links as saved questions.
- **Guard:** **Hard guard:** describe manual/synced-balance tracking only. Plaid real holdings (tickers/market values) is built but invisible to users pending Plaid Investments approval — do not show or imply it (persona §4.2). Pro-tier feature — say so.

**7. Savings Rate Is the Whole Ballgame — Now You Can Watch It Move** — P3
- **Angle:** Classic FIRE educational post (savings rate → years-to-FI math) with the new dashboard savings-rate trend tab as the payoff. Evergreen keyword surface; the feature alone is too small to carry a post.
- **Why now:** Trend tab shipped; low urgency — could merge into #5 if pipeline is tight.
- **Outline:** (1) the savings-rate → time-to-FI table; (2) why the *trend* matters more than the month; (3) the dashboard tab + free-tier availability check.
- **Guard:** verify which tier sees the trend tab.

**8. Restore: The Bug That Re-Categorized Your Entire History** — P3 (gated on decision F-e)
- **Angle:** The reverted costco-cascade post-mortem — persona doc calls this register "at its best." Incident candor posts build more trust with the privacy/selfhosted crowd than any comparison.
- **Why now:** Fully recoverable (`540d927` added it, `3700413` reverted it); pilot-era launch makes "here's how we handle mistakes" newly relevant.
- **Outline:** existing structure holds (what happened / why it existed / what we shipped / what we learned / what you can do now).
- **Guard:** intro says "Finsava isn't live yet — we're pre-launch" — must be rewritten for the pilot era; re-verify the audit-trail + recovery-tool claims against current code before republishing. Publish only after decision F-e.

### Parked — do not schedule
- **Plaid real holdings (tickers/market values):** built, awaiting Plaid Investments-product approval; users cannot see it. **Blocked until Plaid approval + user visibility.** When unblocked it upgrades post #6 or becomes its own post.

## 2. Audit: existing posts

Judged as if the 1,000-simulation and "$7 VPS (not entire infra)" fixes land today (committed separately — excluded from diffs below). F-x = founder decision in §3.

| Post | Verdict | Rationale / diffs |
|---|---|---|
| fire-dashboard-deep-dive | **KEEP** | Strongest FIRE asset; mechanism-rich, on-persona. True post-sim-fix. Later: internal-link to Tools/Coast FIRE post when live. |
| guardrails-vs-4-percent-rule | **KEEP** | Evergreen mechanism explainer (Trinity, Guyton-Klinger); almost no product claims to rot. Best-in-class persona voice. |
| finsava-vs-ynab | **UPDATE** | Diffs: remove/soften "Self-hostable (Docker)" matrix row + "might eventually want to self-host" bullet (off-strategy: hosted invite-only pilot, self-hosting not an offered path today); refresh YNAB pricing as-of date; add Smart Budget Suggestions to "pulls ahead". "5 FIRE variants" pending F-c. |
| finsava-vs-monarch | **UPDATE** | Diffs: same self-host removals (§5 h3, matrix row, "who should pick" bullet); refresh Monarch pricing as-of date. Otherwise on-strategy — holds the mint-alternative keyword. |
| finsava-vs-empower | **UPDATE** | Diffs: remove "Self-host it" line, "Self-hostable and Privacy-first" h3, matrix row, closing bullet; refresh fee/pricing as-of date. Keep the 0.89%-fee math — persona voice at its best. "12,000+" pending F-b. |
| fire-calculator-monte-carlo | **KEEP** | Already consistent at 1,000 sims; evergreen; good internal-link hub. CTA copy ("free 14-day trial… connect your bank") pending F-a like all posts. |
| hosting-fintech-7-dollars | **KEEP** (pending F-b, F-d) | Body already hedges "$7 VPS + a few dollars storage/backups"; metadata fix lands separately. Content true; "12,000+" ×2 pending F-b; self-host-adjacent framing ("Portability Guarantee", "self-hosted Railway") is F-d's call, not a unilateral edit. |
| budget-visualization-vs-ynab | **UPDATE** | Diffs: verify "4 AI budget profiles" against what shipped — percentile Smart Suggestions is 4 tiers of the user's own spending, a different mechanism; don't conflate, update or cut; note refund-netted "spent" in budget-vs-actual; reconsider title — "Makes YNAB Look Like a Spreadsheet" is scorn-forward vs persona §7. |
| finsava-vs-copilot-money | **UPDATE** | Diffs: migrate hand-rolled inline nav to standard `SiteNav`/`SiteFooter` skeleton (format drift — oldest post, predates the template); refresh Copilot pricing as-of date; "12,000+" pending F-b. Content otherwise sound. |

Net: 3 KEEP (one conditionally), 6 UPDATE, 0 DEPRECATE. Cross-cutting (not per-post diffs): CTA target/copy = F-a; "12,000+" = F-b; "5 FIRE variants" = F-c.

## 3. Founder decisions needed

**F-a. CTA target for all 9 posts.** Currently every post: `/#waitlist` · "Join the Waitlist", with "free 14-day trial, no credit card" copy — while registration is an invite-only closed pilot and the site has a live `/demo` and `/pricing` funnel. The trial copy implies open signup; persona §4.3 forbids that. Options:

| Option | Trade-off |
|---|---|
| 1. Keep `/#waitlist`, fix copy: "Invite-only pilot — join the waitlist for your invite" + trial framed as "every invited account starts with a 14-day Pro trial" | Lowest effort, keeps email capture, honest. Weakest immediate reader payoff. |
| 2. Primary CTA → `/demo` ("Poke the live demo"), secondary waitlist link | Reader gets value now; demo shows the new features. Splits clicks; no email capture unless demo funnels back to waitlist. |
| 3. Primary CTA → `/pricing` | Sets tier expectations early; funnel page exists. Pricing page presumes ability to sign up — needs the same invite-only copy fix anyway. |

Whatever the pick: the trial/no-credit-card copy must be conditioned on invite in all 9 posts (incl. fire-calculator's "Try It Yourself" section). Persona §5 says CTA framing follows this decision — one pattern, applied everywhere.

**F-b. "12,000+ institutions".** Appears in 4 blog locations (empower, copilot ×1, hosting ×2) **and 5 more site files** — landing `page.tsx` (×2), `opengraph-image.tsx`, `privacy/page.tsx`, `pricing/page.tsx`. Needs verification against Plaid's current published institution count and SimpleFin's actual coverage (much smaller — attributing 12k to "Plaid and SimpleFin" jointly is sloppy). Decide one canonical phrasing + number, then sweep all 9 locations site-wide, not just blog.

**F-c. "5 FIRE variants/scenarios".** Claimed in ynab/monarch/empower matrices + deep-dive §5 (Standard, Lean, Barista, Coast, Fat). App evidence: `frontend/src/components/fire/use-fire-data.ts` exposes `coast_fire_number`, `lean_fire_number`, `barista_fire_number`, `fat_fire_number` + standard = 5. Preliminary support, but verify the FIRE Planning Lab UI actually surfaces all 5 to users, and decide whether the new Tools-page Coast FIRE calculator changes how we phrase it.

**F-d. hosting-fintech-7-dollars future.** The post's keywords ("self hosted saas") and sections ("Portability Guarantee", Coolify-as-"self-hosted Railway") pitch a self-host identity, while the product is a hosted invite-only pilot. Options: keep as-is (it's build-in-public infra content, technically about *us* self-hosting); reframe portability as a user promise (data export, no lock-in) rather than implied user self-hosting; or supersede with a pilot-era "how Finsava runs" post. Related: the site's Docker/self-host matrix claims are the F-a/F-b-style sweep in §2's comparison diffs — same strategic question, one answer needed.

**F-e. Restore the costco-cascade post-mortem?** Persona doc endorses the register; recoverable from git (`540d927`). Requires: rewrite the "we're pre-launch" intro for the pilot era, and re-verify the audit-trail/recovery-tool claims against current code. Risk: an incident post as one of only ~10 posts is prominent; counter: it is the strongest trust artifact we have for the privacy audience. Flagged, not decided — pipeline item #8 executes only on a yes.

## 4. Note

`docs/blog-persona.md` partially satisfies the long-open "Write brand voice guide" audit item; restoring the missing `skill-branding-expert.prompt.md` in the Finsava app repo is a separate follow-up.
