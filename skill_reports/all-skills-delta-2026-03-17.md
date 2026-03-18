# Finsava Advisory Skills -- Delta Report
**Date:** 2026-03-17
**Type:** DELTA (vs. baseline 2026-03-06 + progress update 2026-03-11)
**Codebases:** Fin_App_V2 (~35 services, 16 API routers, 20 frontend pages) + finsava-site (Next.js landing page on Vercel)

---

## Table of Contents
1. [Business Developer](#1-business-developer)
2. [Marketing Expert](#2-marketing-expert)
3. [Product Manager](#3-product-manager)
4. [UX Designer](#4-ux-designer)
5. [Statistician](#5-statistician)
6. [ML Engineer](#6-ml-engineer)
7. [Security Expert](#7-security-expert)
8. [Systems Architect](#8-systems-architect)
9. [Cross-Skill Scorecard](#cross-skill-scorecard)
10. [Universal Top 10 -- Updated](#universal-top-10--updated)

---

## 1. Business Developer

### What's New Since Last Report
- **Brand identity established.** Deep branding research completed (60 candidates, 5 naming categories). Product renamed from "FinApp V2" to **Finsava**. Domain research done for .com and .ai TLDs.
- **Landing page live.** finsava-site deployed on Vercel (Next.js 16 + Tailwind CSS). Contains hero, features (9 cards), how-it-works (3 steps), tech stack, open-source section, and footer. Links to GitHub repo `tdiipo1/Finsava`.
- **AGPL-3.0 license formalized.** NOTICE file, SPDX headers on all source files, and commercial licensing mention in README. Dual-license model is ready.
- **Pricing model refined.** Branding report defines three tiers: Community (free self-host), Cloud SaaS ($7.99-$16.99/mo), Private/Premium ($49-$99/mo per instance, $5K-$50K/yr dual-license).

### What Improved
- **Market positioning is now concrete.** Previously had no public presence; now has a live site with clear positioning: "Your money. Your machine. Your rules."
- **Competitive moat deepened.** Five new differentiators since baseline: Financial Health Score, Anomaly Detection, 5-level Classification Pipeline, Savings Goals, and Notification System.

### Previously Flagged Items -- Status
| Item | Status |
|------|--------|
| Build a landing page | **DONE** -- finsava-site on Vercel |
| Define free vs. paid boundary | **DONE** -- three-tier model in branding report |
| Legal/compliance review | **PARTIALLY DONE** -- AGPL-3.0 + NOTICE + commercial contact. Privacy policy and ToS still missing. |
| Package for easy installation | **DONE** -- Docker Compose with 3 services |
| Identify 10 beta testers | **NOT DONE** |

### Updated Top 5 Business Actions
1. **Register the Finsava domain** (.com and/or .ai) and point the landing site to it
2. **Add a waitlist/email capture** to finsava-site -- currently has zero lead generation
3. **Write Privacy Policy and Terms of Service** -- required before any public beta
4. **Recruit 10 beta testers** from r/selfhosted, r/personalfinance, r/YNAB
5. **Validate the pricing model** with beta users -- test willingness to pay at $7.99/mo

---

## 2. Marketing Expert

### What's New Since Last Report
- **Brand name "Finsava" chosen.** Tagline in production: "Your money. Your machine. Your rules."
- **Landing page deployed** at finsava-site on Vercel. Dark-themed, modern design. Open Graph metadata configured for social sharing.
- **GitHub repo public** under `tdiipo1/Finsava`. README is comprehensive with Docker quick-start, feature list, and architecture table.
- **Branding report generated** with 60 candidate names, .com/.ai availability research, and positioning strategy.

### What Improved
- **Web presence: 0 -> 1.** The product now has a public face. SEO metadata (title, description, OG tags) is in place.
- **README acts as a sales page.** Describes 15+ features with clear value propositions.
- **Tech credibility.** Landing page shows the full stack (Next.js 15, React 19, FastAPI, Ollama, scikit-learn, Docker).

### New Recommendations
- **Landing page is missing email capture.** The CTA buttons all point to GitHub. There is no waitlist, no email form, no way to capture leads. This is the single highest-ROI fix.
- **No demo video exists.** The landing page describes features but shows nothing. A 90-second screen recording would significantly boost conversion.
- **No social handles claimed.** X/Twitter, Mastodon, Discord, YouTube are not referenced on the site.
- **SEO is thin.** Single page, no blog, no `/pricing`, no `/docs`. Google has almost nothing to index.

### Previously Flagged Items -- Status
| Item | Status |
|------|--------|
| Create a landing page with email capture | **PARTIALLY DONE** -- page exists, no email capture |
| Record a 2-minute demo video | **NOT DONE** |
| Write the "Why I Built This" story | **NOT DONE** |
| Claim social handles | **NOT DONE** |
| Engage in subreddits | **NOT DONE** |

### Updated Top 5 Marketing Actions
1. **Add email capture / waitlist** to finsava-site hero section (Resend is already integrated in the app)
2. **Record a 90-second demo video** -- show Docker start, bank sync, AI advisor, anomaly alerts
3. **Claim @finsava** on X, Mastodon, Discord. Set up a Discord community server
4. **Add /pricing and /docs pages** to finsava-site for SEO depth
5. **Write the "Why I Built This" narrative** -- publish on finsava-site blog and cross-post to HN/Reddit

---

## 3. Product Manager

### What's New Since Last Report
- **6 major features shipped** that were not in the original Top 10:
  - Savings Goals (full CRUD, progress tracking, deadline monitoring)
  - Financial Health Score (5-component composite, letter grades A-F, monthly history)
  - Notification System (budget alerts, goal milestones, in-app notification center)
  - Anomaly Detection (Modified Z-score on trailing 12-month category spending)
  - Onboarding Wizard (module selection, CSV import, 3-step guided flow)
  - Advanced Analytics Suite (spending velocity, YoY comparison, income stability, cashflow forecast, entity deep-dive)

- **Feature count increased from 14 to 20+.** New pages: goals, notifications, analytics (deep-dive), onboarding, admin/troubleshooting.
- **20 frontend pages** now exist (vs. 12+ in the March 11 update).
- **16 API routers** registered (auth, users, transactions, categories, budget, dashboard, mappings, sync, goals, notifications, advisor, settings, imports, recurring, health, analytics).

### Previously Flagged Items -- Status
| Item | Status |
|------|--------|
| Add transaction search | **DONE** (baseline) |
| Create Docker Compose | **DONE** |
| Build an onboarding wizard | **DONE** -- 3-step flow (module selection, import, finish) with redirect logic |
| Implement recurring transaction detection | **DONE** (baseline) |
| Decompose transactions_mapping.py | **PARTIALLY DONE** -- services layer is modular, but the page component is still large |

### Updated Top 5 Product Actions
1. **Add a demo / sandbox mode** accessible from the landing page without account creation
2. **Build data export / portability** -- users need full CSV/JSON export of all data, not just transactions
3. **Add multi-currency support** -- increasingly requested as user base globalizes
4. **Create a plugin/extension system** -- allow community contributions without core changes
5. **Investment account tracking** -- 401k, brokerage, crypto balances with portfolio view

---

## 4. UX Designer

### What's New Since Last Report
- **Onboarding wizard exists.** New users are redirected to `/onboarding` on first login. 3-step flow: select modules, import data, done. Uses the `useModules` hook and `MODULE_REGISTRY` for feature selection.
- **shadcn/ui component library adopted.** 17 UI primitives (button, card, dialog, input, label, scroll-area, select, separator, skeleton, table, tabs, tooltip, avatar, badge). Consistent design language.
- **Sidebar navigation replaces 14+ nav items.** Dynamic sidebar driven by `getVisibleModules()` -- only shows pages for enabled modules. Account switching, notification badge, theme toggle integrated.
- **Notification center page added.** Dedicated `/notifications` page with read/unread state, mark-all-read, and delete.
- **Goals page added.** Cards with progress bars, deadline indicators, and CRUD operations.
- **Landing page (finsava-site) is responsive.** Uses Tailwind breakpoints (`sm:`, `lg:`). Mobile hamburger menu not implemented but content stacks properly.

### What Improved
- **Navigation complexity reduced.** Module-based visibility means new users see only their chosen features. Sidebar is collapsible with account switcher.
- **Empty state handling improved.** Onboarding flow prevents the "wall of empty pages" problem.
- **Component consistency.** shadcn/ui primitives enforce uniform padding, borders, and typography.

### Still Missing
- **App (Fin_App_V2) is NOT mobile-responsive.** Only 22 responsive breakpoint usages across 10 page files. The dashboard, transactions, analytics, and mapping pages are desktop-only layouts. The `flex h-screen overflow-hidden` root layout with sidebar does not adapt to narrow viewports.
- **Landing page (finsava-site) has no mobile nav.** The `hidden sm:flex` hides the nav links on mobile but provides no hamburger menu alternative.

### Updated Top 5 UX Actions
1. **Add a mobile hamburger menu** to the finsava-site nav bar -- currently nav links disappear on mobile
2. **Make the app sidebar collapsible/responsive** -- on mobile, it should be a drawer or bottom nav
3. **Add responsive grid breakpoints** to dashboard, transactions, analytics pages
4. **Add empty state illustrations** on all pages -- skeleton loader component exists but is underused
5. **Add a "What's New" changelog modal** -- surface new features to returning users

---

## 5. Statistician

### What's New Since Last Report
- **Confidence intervals DONE.** `get_historical_forecast` now returns `lower_80`, `upper_80`, `lower_95`, `upper_95` per section and in total. Uses recency-weighted variance with `w_i = 1/sqrt(years_ago)`. Quadrature (root-sum-of-squares) aggregation prevents CI over-estimation. Single-year fallback uses +/-15% heuristic.
- **Monthly forecast curve has CI bands.** `get_monthly_forecast_curve` returns `forecast_lower_80` and `forecast_upper_80` arrays with outlier capping at 3x average.
- **Anomaly detection DONE.** `services/anomaly.py` implements Modified Z-score with MAD. Trailing 12-month window. Severity levels: `|z| > 3.5` = strong, `|z| > 2.5` = anomaly. Robust to skewed distributions.
- **Financial Health Score DONE.** `services/health_score.py` with 5 weighted components: Savings Rate (30%), Budget Adherence (25%), Spending Trend (20%), Emergency Fund (15%), Category Diversity (10%). Score 0-100 with letter grades A-F. Monthly history stored in `health_scores` table.
- **Spending Velocity DONE.** API endpoint `/api/analytics/velocity` shows spending rate vs. budget pace.
- **Category Trends DONE.** `/api/analytics/trends` returns per-category EMA slope and direction.
- **Income Stability DONE.** `/api/analytics/income-stability` computes coefficient of variation, classifies income (stable/variable/irregular), flags outlier months.
- **Cashflow Forecast DONE.** `/api/analytics/cashflow-forecast` projects 30-60 days ahead by combining recurring charges with historical daily spending patterns.
- **YoY Comparison DONE.** `/api/analytics/yoy` compares current year vs. prior year monthly spending by section.

### Previously Flagged Items -- Status
| Item | Status |
|------|--------|
| Add confidence intervals to forecasts | **DONE** -- 80% and 95% bands with quadrature aggregation |
| Implement anomaly detection | **DONE** -- Modified Z-score with MAD |
| Build Financial Health Score | **DONE** -- 5 components, letter grades, monthly history |
| Replace linear budget scaling | **PARTIALLY DONE** -- forecast uses recency-weighted YoY ratios; budget comparison still uses linear scaling |
| Add subscription/recurring detection | **DONE** (baseline) |

### New Recommendations
- **Budget scaling still uses linear method.** `get_budget_comparison` in analytics.py still does `annual / period_days * range_days`. Should use the same monthly seasonal profile that the forecast engine computes.
- **Health Score weights are hardcoded.** Let users customize component weights in settings.
- **No A/B testing of forecast accuracy.** Track forecast-vs-actual retrospectively to validate model quality.

### Updated Top 5 Statistical Actions
1. **Replace linear budget scaling** with seasonal profile -- the seasonal data already exists in the forecast engine
2. **Add forecast accuracy tracking** -- compare last year's forecast to actuals to show prediction quality
3. **Add spending percentile benchmarks** -- "You spend more on dining than 70% of users" (requires aggregate data, cloud-only)
4. **Allow custom Health Score weights** -- user preferences in settings
5. **Add savings rate trend line** with EMA -- show if the user's savings rate is improving or declining

---

## 6. ML Engineer

### What's New Since Last Report
- **Per-user sklearn classifier DONE.** `services/ml_classifier.py` implements the full training pipeline: TF-IDF vectorizer + LogisticRegression, per-user joblib models, in-memory cache with mtime-based reload. Min 30 training samples. Auto-retrain when 50+ new approvals accumulated. Deduplication caps at 5 identical (text, label) pairs.
- **5-level classification pipeline DONE.** `services/classification_pipeline.py` implements the exact architecture proposed in baseline:
  - Level 1: Exact match (MerchantMap + CategoryMap) -- <1ms, ~40% coverage
  - Level 2: TF-IDF fuzzy match (character n-gram cosine) -- ~10ms, ~15% coverage
  - Level 3: sklearn classifier (per-user trained model) -- ~5ms, ~25% coverage
  - Level 4: LLM fallback (Ollama local, NOT Gemini) -- ~2-5s, ~10% coverage
  - Level 5: Manual -- surface to user
- **Prediction logging DONE.** `PredictionLog` model tracks every prediction with method, confidence, whether user accepted it. Enables feedback loop analysis.
- **Merchant model service added.** `services/merchant_model.py` for entity resolution.
- **Merchant knowledge base.** `services/merchant_knowledge.py` (31KB) -- comprehensive merchant normalization rules.
- **BGE model pre-warming on startup.** Backend pre-loads the sentence-transformer model in a background thread to eliminate 30-120s cold-start on first smart-mapping request.
- **Ollama model pre-warming on startup.** Sends keep_alive request to load the preferred model into VRAM.
- **AI Advisor streaming DONE.** SSE endpoint `/api/advisor/stream` with `stream_advisor_response`. Frontend has full streaming UX with thinking indicator and progressive markdown rendering.

### Previously Flagged Items -- Status
| Item | Status |
|------|--------|
| Train per-user sklearn classifier | **DONE** |
| Add TF-IDF fuzzy matching as Level 2 | **DONE** |
| Implement feedback loop | **DONE** -- PredictionLog tracks accept/reject |
| Build merchant entity resolution model | **DONE** -- merchant_model.py + merchant_knowledge.py |
| Add streaming for AI advisor | **DONE** -- SSE streaming with fallback |

### Updated Top 5 ML Actions
1. **Add model accuracy dashboard** -- surface PredictionLog acceptance rates per level in admin
2. **Implement active learning** -- prioritize user review of borderline predictions (0.4-0.6 confidence)
3. **Add embedding-based anomaly detection** for merchants -- flag suspicious new merchants by embedding distance
4. **Explore fine-tuning a small local model** (e.g., Phi-4) on financial transaction data
5. **Add category suggestion explanations** -- show users WHY the model chose a category (top TF-IDF features)

---

## 7. Security Expert

### What's New Since Last Report
- **SimpleFin access URL encryption DONE.** `services/crypto.py` implements Fernet (AES-128-CBC + HMAC-SHA256) with key derived from STORAGE_SECRET via SHA-256. `sync.py` router encrypts on store, decrypts on read, with plaintext fallback for legacy values. Heuristic detection via `gAAAAA` prefix.
- **Login rate limiting DONE.** Dual implementation: (1) `services/rate_limiter.py` per-email limiter with 5 attempts / 5-minute window + lockout, and (2) per-IP rate limiter in `backend/app/routers/auth.py` with configurable `LOGIN_RATE_LIMIT` and `LOGIN_RATE_WINDOW` env vars. Returns HTTP 429.
- **Dependency versions PINNED.** `requirements.txt` now specifies exact versions for all 15 dependencies (generated 2026-03-16). Includes fastapi==0.131.0, SQLAlchemy==2.0.45, bcrypt==5.0.0, cryptography==46.0.5, etc.
- **JWT httpOnly cookie auth.** Backend uses httpOnly cookie-based JWT sessions (not localStorage).
- **SPDX license headers on all files.** Every .py and .tsx file has `SPDX-License-Identifier: AGPL-3.0-only`.
- **Health check endpoint.** `/api/health` returns status, version, uptime. Build manifest shown only to admin users.
- **SQLite backup uses Online Backup API.** `backup.py` uses `sqlite3.connect().backup()` with WAL checkpoint -- replaces the unsafe `shutil.copy2` from the baseline.
- **Encrypted backup support.** `crypto.py` has `encrypt_file` and `decrypt_file` with atomic writes (temp file + rename).
- **.dockerignore excludes sensitive files.** DB files, .env, backups, test files all excluded from Docker builds.

### Previously Flagged Items -- Status
| Item | Status |
|------|--------|
| Encrypt SimpleFin access URL at rest | **DONE** -- Fernet encryption |
| Pin dependency versions | **DONE** -- exact versions in requirements.txt |
| Add login rate limiting | **DONE** -- per-email AND per-IP |
| Move CSRF state to database | **NOT DONE** -- still in-memory `_pending_states` dict in oauth.py |
| Add HTTPS via reverse proxy | **NOT DONE** -- Docker Compose has no Caddy/nginx; runs plain HTTP |

### Remaining Vulnerabilities
1. **CSRF state still in-memory.** `oauth.py` line 30: `_pending_states: dict[str, float] = {}`. Lost on restart, broken across workers. Severity: HIGH when OAuth is used.
2. **No HTTPS in Docker Compose.** The docker-compose.yml exposes ports 8000 and 8081 on plain HTTP. No reverse proxy service. Severity: HIGH for non-localhost.
3. **STORAGE_SECRET default is weak.** `crypto.py` line 24: falls back to `"finapp-v2-secret-change-me"` if neither STORAGE_SECRET nor SECRET_KEY is set. Logs a warning but continues. Severity: MEDIUM.
4. **Account enumeration partially addressed.** Login returns generic error but Google OAuth flow may still reveal whether an email exists. Severity: LOW.
5. **Frontend Next.js CVE patched.** Upgraded to Next.js 16 to resolve CVE-2025-66478 (in finsava-site). The Fin_App_V2 frontend should also verify its Next.js version.

### Updated Top 5 Security Actions
1. **Move CSRF state to database or signed cookies** -- the last remaining HIGH severity item
2. **Add Caddy reverse proxy** to docker-compose.yml for automatic HTTPS
3. **Enforce STORAGE_SECRET at startup** -- refuse to start if using the default key in production mode
4. **Add Content-Security-Policy headers** to the FastAPI backend
5. **Audit Fin_App_V2 frontend Next.js version** for the same CVE patched in finsava-site

---

## 8. Systems Architect

### What's New Since Last Report
- **Docker Compose DONE.** Three-service stack: `backend` (Python 3.11-slim, FastAPI), `frontend` (Node 20 Alpine, multi-stage build with standalone output), `ollama` (ollama/ollama:latest). Named volumes for data persistence (`finapp-data`, `ollama-models`).
- **Dockerfiles created.** `Dockerfile.backend` installs ML deps, copies backend/database/services, creates /data directories. `Dockerfile.frontend` uses multi-stage build (builder + runner) with `NEXT_TELEMETRY_DISABLED=1`.
- **Health check endpoint DONE.** `/api/health` returns status, version, uptime, and build manifest (admin only).
- **.dockerignore comprehensive.** Excludes .git, __pycache__, .venv, node_modules, .next, DB files, backups, .env, skill_reports, markdown docs.
- **Model pre-warming on startup.** Both BGE sentence-transformer and Ollama models are pre-warmed in background threads during lifespan startup.
- **Build fingerprint service.** `services/build_fingerprint.py` generates and loads build manifests for deployment tracking.

### Previously Flagged Items -- Status
| Item | Status |
|------|--------|
| Create a Dockerfile | **DONE** -- two Dockerfiles (backend + frontend) |
| Create Docker Compose | **DONE** -- 3 services + 2 volumes |
| Add a health check endpoint | **DONE** -- /api/health with uptime and version |
| Replace raw migration SQL with Alembic | **NOT DONE** -- still uses init_db() with inline migrations |
| Standardize HTTP client | **NOT DONE** -- simplefin.py still has its own HTTP patterns |

### Architecture Gaps
1. **No reverse proxy in Docker Compose.** The baseline audit proposed Caddy as a fourth service. It is absent. No SSL termination, no HTTP-to-HTTPS redirect.
2. **No Docker healthcheck directives.** The Dockerfiles and compose file lack `HEALTHCHECK` instructions even though `/api/health` exists.
3. **SQLite in Docker volume.** Works for single-node, but no migration path to PostgreSQL is automated. The DATABASE_URL env var makes it configurable, but no Alembic migrations exist.
4. **Frontend env vars at build time.** `NEXT_PUBLIC_API_URL` is set at runtime in compose, but Next.js inlines `NEXT_PUBLIC_*` at build time. The standalone output may not respect runtime env var changes.
5. **No CI/CD pipeline.** No GitHub Actions workflow for building/testing/pushing Docker images.

### Updated Top 5 Architecture Actions
1. **Add Caddy to docker-compose.yml** as a fourth service with automatic Let's Encrypt HTTPS
2. **Add HEALTHCHECK directives** to both Dockerfiles and compose service definitions
3. **Fix frontend env var handling** -- use a runtime config endpoint or build-time arg instead of NEXT_PUBLIC_ at runtime
4. **Create a GitHub Actions CI pipeline** -- lint, test, build Docker images, push to GHCR
5. **Add Alembic** for database migrations -- replace the inline init_db() ALTER TABLE statements

---

## Cross-Skill Scorecard

### Original Top 10 -- Final Status

| # | Action | Baseline Status | Current Status | Resolved? |
|:---:|--------|:---:|:---:|:---:|
| 1 | Docker Compose packaging | NOT DONE | **DONE** | YES |
| 2 | Encrypt SimpleFin credentials at rest | PARTIAL | **DONE** | YES |
| 3 | Pin dependency versions | NOT DONE | **DONE** | YES |
| 4 | Landing page with email capture | NOT DONE | **PARTIAL** (page live, no email capture) | NO |
| 5 | Add transaction search | DONE | **DONE** | YES |
| 6 | New user onboarding wizard | NOT DONE | **DONE** | YES |
| 7 | Confidence intervals on forecasts | NOT DONE | **DONE** | YES |
| 8 | Per-user sklearn classifier | NOT DONE | **DONE** | YES |
| 9 | Login rate limiting | NOT DONE | **DONE** | YES |
| 10 | Mobile-responsive layout pass | NOT DONE | **NOT DONE** | NO |

**Score: 8 of 10 fully resolved, 1 partially resolved, 1 not started.**

### New Features Delivered (Not in Original Top 10)

| Feature | Skills Impacted | Notes |
|---------|----------------|-------|
| Financial Health Score | Statistician, Product, UX | 5-component composite with monthly history |
| Anomaly Detection | Statistician, Product | Modified Z-score with MAD |
| 5-Level Classification Pipeline | ML Engineer, Product | Exact -> Fuzzy -> sklearn -> LLM -> Manual |
| Savings Goals | Product, UX | Full CRUD with progress and deadline tracking |
| Notification System | Product, UX, Security | Budget alerts, goal milestones, in-app center |
| Onboarding Wizard | UX, Product | Module selection + import + guided flow |
| AI Advisor Streaming | ML Engineer, UX | SSE with markdown rendering |
| Spending Velocity | Statistician | Rate vs. budget pace |
| YoY Comparison | Statistician | Current vs. prior year by section |
| Income Stability | Statistician | CV-based classification |
| Cashflow Forecast | Statistician | 30-60 day projection |
| Entity Deep-Dive | Statistician, Product | Drill into any merchant/category/section |
| Brand Identity | Business, Marketing | "Finsava" name with positioning strategy |
| Landing Page | Marketing, Business | Live on Vercel |
| Prediction Logging | ML Engineer | Feedback loop tracking |
| Model Pre-Warming | Systems Architect, ML | BGE + Ollama on startup |
| Build Fingerprinting | Systems Architect | Deployment tracking |

---

## Universal Top 10 -- Updated

| Priority | Action | Primary Skill | Effort | Status |
|:---:|--------|---------------|:---:|:---:|
| 1 | Add email capture / waitlist to landing page | Marketing | 2 hours | NEW |
| 2 | Add Caddy reverse proxy to Docker Compose | Security + Architect | 1 hour | CARRIED |
| 3 | Move OAuth CSRF state to database | Security | 3 hours | CARRIED |
| 4 | Mobile-responsive layout pass | UX Designer | 2 weeks | CARRIED |
| 5 | Register Finsava domain and point site | Business | 1 hour | NEW |
| 6 | Record 90-second demo video | Marketing | 3 hours | CARRIED |
| 7 | Add GitHub Actions CI/CD pipeline | Systems Architect | 1 day | NEW |
| 8 | Replace linear budget scaling with seasonal | Statistician | 2 days | CARRIED |
| 9 | Add model accuracy dashboard | ML Engineer | 3 days | NEW |
| 10 | Write Privacy Policy and Terms of Service | Business + Security | 1 day | NEW |

### Rationale for Re-Ranking

Items 1-3 are tactical blockers that can each be resolved in under a day:
- **Email capture** is the highest-ROI marketing activity. The landing page gets traffic but converts zero leads.
- **Caddy** is a single compose service addition that enables HTTPS -- mandatory before any public deployment.
- **CSRF state** is the last HIGH-severity security finding.

Items 4-6 are strategic investments:
- **Mobile responsive** is the largest remaining UX debt.
- **Domain registration** formalizes the brand.
- **Demo video** is the most effective marketing asset for a visual product.

Items 7-10 are operational maturity:
- **CI/CD** enables reliable releases.
- **Budget scaling** closes the last statistical rigor gap.
- **ML dashboard** validates the classification pipeline.
- **Privacy Policy / ToS** are legal requirements before public beta.
