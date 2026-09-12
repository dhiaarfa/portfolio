# dhia-portfolio.com — Master Action Checklist (Sep 2026)

Derived from 100% of `dhia-portfolio-audit-v3-sep2026.md`, plus a factual cross-check against your 6 uploaded CVs and a tools/stack review. Status reflects what's actually been committed to your PC as of this update — nothing here is "written down but not done" unless marked ⏳ or 🧑‍💻.

**Legend:** ✅ Done & committed to your repo · ⏳ Queued, not started · 🧑‍💻 Needs you (dashboard/account access, or a real `npm run build`) · 🔍 Needs live-site verification after your next deploy

---

## 1. Urgent: the dead-domain bug (§1 / §4 CHANGE)

| # | Item | Status |
|---|---|---|
| 1.1 | `app/layout.tsx` — metadataBase, OpenGraph url, Twitter, Person JSON-LD url+image, Organization JSON-LD url → `.com` | ✅ |
| 1.2 | `app/sitemap.ts` baseUrl → `.com` | ✅ |
| 1.3 | `app/robots.ts` baseUrl → `.com` | ✅ |
| 1.4 | `app/api/contact/route.ts` — all 5 occurrences (email footer, newsletter subject, auto-reply signature, freebie-delivery footer, contact subject line) → `.com` | ✅ (this file was fully fixed — but see 1.8, other files weren't) |
| 1.5 | `.env.example`, `README.md` → `.com` | ✅ |
| 1.6 | Vercel env vars (`NEXT_PUBLIC_SITE_URL`, `CONTACT_RECEIVER`) match `.com` | 🧑‍💻 you — check Vercel dashboard |
| 1.7 | Register `dhia-portfolio.com` as a verified sending domain in Resend, move off `onboarding@resend.dev` | 🧑‍💻 you — Resend dashboard (also §4 IMPROVE/REPLACE below) |
| 1.8 | **Correction to 1.4 above — the domain fix was not actually complete.** A fresh full-codebase grep for `dhia-portfolio.me` this pass found 7 more live occurrences the original pass missed: `lib/freebies.ts` (fallback download-URL base — if `NEXT_PUBLIC_SITE_URL` isn't set right in Vercel, freebie download links would 404 to the dead domain), `lib/chat-config.ts` (the on-site AI chat assistant's system prompt literally told visitors the site's domain was `.me`), `lib/dev-projects.ts` (this site listed as one of your own dev projects, with a dead link), `app/developer/DeveloperPageClient.tsx` (visible on-page text: "dhia-portfolio.me (this site)"), `app/api/chat/route.ts` (an API header, low visible impact but still wrong), and — the one that actually matters most — **`scripts/generate-freebie-pdfs.mjs`, which prints the domain into the footer of every freebie PDF.** Checked the actual PDF file on your PC: it really did say "dhia-portfolio.me" in its text content. Every visitor downloading a freebie today gets a PDF branded with your dead domain | ✅ all 7 fixed, and all 5 freebie PDFs (`brand-brief-template.pdf`, `color-psychology-guide.pdf`, `workshop-plan-template.pdf`, `icebreakers-guide.pdf`, `trainer-checklist.pdf`) regenerated with the corrected script and verified — each one's text content now reads `dhia-portfolio.com`. Re-verified with a fresh full-tree grep: zero remaining `.me` references anywhere in source or in a built `next build` output |

## 1a. Urgent: critical Next.js security vulnerabilities — new this pass, not in the original audit

Ran `npm audit` against your actual dependency tree (not a guess) as part of this pass's sweep. Your site was pinned to `next@15.1.11`, which `npm audit` flags as **critical severity** — it's affected by, among others, two *unauthenticated remote code execution* advisories (one in the Image Optimization API when AVIF files are used — and your `next.config.js` explicitly serves AVIF — and one Windows-server RCE) and a critical authorization-bypass-in-Middleware advisory, plus a long tail of high/moderate DoS and cache-poisoning issues, all patched in later 15.x releases.

| # | Item | Status |
|---|---|---|
| 1a.1 | `next` pinned to `15.1.11` — critical per `npm audit`, including an unauthenticated RCE in the Image Optimization API (your config serves AVIF, so this isn't theoretical) and a critical Middleware auth-bypass | ✅ upgraded to `15.5.25` — the latest security-backport release still on the Next 15 line, so no React 19 / Next 16 migration risk. `npm audit` now shows `next` at **moderate**, not critical (the one remaining moderate issue needs the Next 16 major bump — see 1a.3) |
| 1a.2 | `resend`/`svix`/`uuid`, `lodash` (via `recharts`), and several ESLint-toolchain-only transitive deps also had known advisories | ✅ ran `npm audit fix` (non-force, no breaking changes) — all resolved |
| 1a.3 | Remaining: one moderate `postcss`/`next` finding that's bundled inside `next`'s own dependency tree, only fully resolved by the Next **16** major version (would also mean evaluating a React 19 upgrade) | ⏳ your call — a bigger migration, not something to do unattended given the breaking-change risk, flagged the same way as the color-contrast finding (6.15) |
| 1a.4 | Verification: full `tsc --noEmit` (0 errors), `next lint` (clean), fresh `npm run build`, booted server, 17/17 route tests + 9/9 API tests, a Lighthouse pass (scores unchanged from before the upgrade), and a direct check that the Image Optimization route (`/_next/image`) still serves correctly | ✅ no regressions found |

**What you need to do:** `package.json` and `package-lock.json` are updated and confirmed on your PC — since your project deploys via `vercel --prod` from your local files (confirmed: your PC has a `.vercel/` project link already), **you don't need to `git push` first to get this live** — just run `vercel --prod` from your repo root and it deploys your current local state, security patch included. `git push` is still worth doing separately for backup/history (see 7.9), just not a prerequisite for the deploy. Also worth running `npm install` locally so your own dev environment matches.

## 2. Social-share thumbnails (your specific ask)

| # | Item | Status |
|---|---|---|
| 2.1 | Root cause found: `dhia-main.png` is 1024×1024 (square) but was *declared* as 1200×630 in metadata — this is why link previews looked broken/cropped | ✅ diagnosed |
| 2.2 | Generated a real 1200×630 branded OG image (`dhia-og-image.png`) — dark brand background, name, "Designer · Trainer · Developer," domain, your photo | ✅ |
| 2.3 | Wired the new image into `layout.tsx` (default OG/Twitter) and `lib/page-metadata.ts` (default + `/freebies` + `/insights` route images) | ✅ |
| 2.4 | Per-route OG images for `/designer`, `/trainer`, `/developer` — visually verified this pass, and **all three had the exact same bug as the homepage's original OG image**: declared as 1200×630 but actually raw screenshots at completely different ratios (`/designer` pointed at a 1080×1080 square, `/trainer` at a 1024×682 photo, `/developer` at a 757×1024 portrait screenshot). Every one of these would have previewed cropped or letterboxed on WhatsApp/LinkedIn/X | ✅ fixed — see 2.6, same fix as the case studies |
| 2.5 | Test the real preview: paste `dhia-portfolio.com` into a WhatsApp/iMessage/LinkedIn/X share or use a Facebook Sharing Debugger–style checker after your next deploy | 🔍 you, post-deploy |
| 2.6 | Per-route OG images (originally scoped as an `@vercel/og` STRETCH item) | ✅ **done — and expanded once real dimension bugs turned up.** Checking 2.4 above surfaced the same "declared 1200×630, actually something else" bug on all 3 pillar pages *and* all 8 case studies (`/work/[slug]`) — every `heroImage`/screenshot used directly as an OG image was some other aspect ratio (square, portrait, 4:3...). Rather than patch metadata numbers, built a real fix: `scripts/gen-og-images.py` (Pillow, fonts bundled in `scripts/fonts/` so it runs standalone on your machine) generates 11 real, correctly-cropped 1200×630 branded cards — one per pillar page and one per case study — in your site's existing dark/lime brand style (colors sampled directly from your own `dhia-og-image.png`). Wired into `lib/page-metadata.ts` (pillars) and `lib/work.ts`'s new `workOgImage()` helper (case studies). Verified end-to-end: real build, booted server, confirmed the correct `og:image` tag renders on all 11 routes, confirmed every output file is exactly 1200×630 |

## 3. Fact-check against your CVs (new this pass — not in the original audit doc)

Cross-referenced `lib/profile.ts` and all narrative page copy against `CV_General_Detailed`, `CV_General_Concise`, `CV_WebDeveloper`, `CV_GraphicDesigner`, `CV_Trainer`, and `CV_CivicEngagement`. Found and fixed real errors, not just stale copy:

| # | Item | Was | Now | Status |
|---|---|---|---|---|
| 3.1 | CRIT Tunisie dates | Sep–Dec **2023** | Sep–Dec **2025** (all CVs agree) | ✅ |
| 3.2 | "Jasmin Crafts & Plants" role, +40% engagement | Company doesn't exist on any CV | Corrected to **Speranza Cafe & Resto**, Jan–Jun 2025 (where the +40% engagement claim actually belongs) | ✅ |
| 3.3 | Icom/Phenyx/Jasmin Marketing internship window | "2021 – 2023" | "2023 – 2025" (matches actual per-role dates) | ✅ |
| 3.4 | Participants trained stat | 1,000+ | **1,120+** (per CV) | ✅ |
| 3.5 | Training hours stat | 450+ | **477+** (per CV) | ✅ |
| 3.6 | "Training Cycles" stat/label | 10+ / "Training Cycles" | **51+** / relabeled "Training Events" (matches CV's "51 events") | ✅ |
| 3.7 | GoMyCode certification title | "Graphic Design Certification" | "Graphic Design with Adobe Illustrator" (GoMyCode Summer Academy) — matches CV exactly | ✅ |
| 3.8 | CNFCPP year (was ambiguous across pages: 2021/2022/2024) | Unresolved TODO | Confirmed **Dec 2024** against CV, TODO removed | ✅ |
| 3.9 | Digimytch (your most recent, flagship project — AI job platform, Feb–Jun 2026) | Missing entirely from `aboutExperience` and `developerExperience` | Added to both | ✅ |
| 3.10 | YOUGO TRAVEL (Jun 2026–present, part-time) | Missing | Added to `aboutExperience` | ✅ |
| 3.11 | Rayen Academy + Centre Three Alfa Formation (current trainer engagements) and Groupe Etoile Formation + STC (2024–2025, ended) | Missing | Added as a new 2026 `trainingMilestones` entry — correctly distinguishes the 2 still-active partners from the 2 that already ended | ✅ |
| 3.12 | AIESEC in Lebanon — National Manager of Business Development (Dec 2023–Jun 2024) | Missing, and per your note this belongs with NGO/civic work, not paid professional experience | Added a new `civicExperience` data array + a new "Civic & Social Impact" section on the About page, kept visually separate from Professional Experience. Also folded in the correct AIESEC Tunisia MEA Summit 2023 role (Congress Committee Member — Marketing and Showcasing) per your standing correction | ✅ |
| 3.13 | **"Zia Studio" presented as a founded company** — `layout.tsx` had a schema.org `Organization` block with a `founder` relationship, which overclaims a legal entity that doesn't exist | Per your call: keep "Zia" as your brand name in copy, just fix the structured-data overclaim | Changed the JSON-LD from `Organization`+`founder` to `Brand` (no founder/incorporation claim) — brand name itself is untouched everywhere else on the site | ✅ |
| 3.14 | Education (BSc Web Development & Multimedia, ISET Sousse, **with Honors**, 2023–2026, + High School Diploma, Farhat Hached Rades, 2018–2022) | Checked against all 6 CVs and the site's About-page timeline + `layout.tsx`'s `alumniOf` JSON-LD | **Confirmed correct on all fronts** — degree name, "with Honors," dates, school name, and location all match exactly. No change needed | ✅ verified, no fix needed |
| 3.15 | Language claims — CV states Arabic (Native), French (Professional), English (Professional, EF SET C1), Italian (Basic, in progress) | Checked the radar chart caption ("Arabic, French, English") and the Trainer page's `knowsLanguage` JSON-LD | Site doesn't claim proficiency levels for any language, so nothing is overstated; Italian is correctly omitted since it's still "Basic, in progress" and not something to showcase yet | ✅ verified, no fix needed |
| 3.16 | Full re-check of Designer/Trainer/Developer page *narrative copy* (not just data files) against the CVs for anything else stale | Checked for stale companies, dates, and hardcoded numbers (Scrum sprints, LLM names, hackathon placements, etc.) across all three client components | Came back clean — no additional stale facts found. The remaining hardcoded numbers on-page ("15+ Partner Organizations" on Trainer) aren't sourced from a CV either way, so left as-is since nothing contradicts them | ✅ verified, no fix needed |
| 3.17 | **Bugs my own edits introduced, caught and fixed before shipping:** adding new experience-array entries broke two icon-lookup maps keyed by entry ID (`AboutPageClient.tsx`'s `experienceVisuals`, which would have crashed the About page) and silently excluded the new Digimytch entry from `DeveloperPageClient.tsx`'s hardcoded experience filter. Both fixed in the same pass. | — | ✅ (this is exactly what the verification pass in §9 exists to catch — flagging it here since I caught it myself first) |

## 4. Tools & stack (your specific ask — "I use way more than what's shown")

Your 6 CVs list a materially bigger stack than the site showed. Added with verified `simple-icons` slugs:

| # | Tool added | Category | Status |
|---|---|---|---|
| 4.1 | NestJS | Backend | ✅ |
| 4.2 | PHP | Backend | ✅ |
| 4.3 | Symfony | Backend | ✅ |
| 4.4 | PostgreSQL | Backend | ✅ |
| 4.5 | Angular | Frontend | ✅ |
| 4.6 | Jira | Productivity | ✅ |
| 4.7 | Premiere Pro | Design | ✅ (slug follows the same convention as your existing Illustrator/Photoshop icons — worth a quick visual check post-deploy) |
| 4.8 | **Bug found, not caused by this pass:** while verifying icon slugs, confirmed `canva`, `openai`, and `midjourney` slugs aren't in your pinned `simple-icons@16.24.0` package — they render via the `cdn.simpleicons.org` fallback in your `BrandIcon` component, which should work but is worth a visual spot-check | 🔍 |
| 4.9 | You mentioned using "way more" tools than even the CVs show — tell me the rest (or point me at a fuller list) and I'll add them in the same pass. Also worth a deeper look at whether Figma plugins, specific AI coding tools (Cursor, v0, etc.), or Notion/Miro templates are worth surfacing given how central they seem to your actual workflow | ⏳ needs your input or deeper research |

## 5. Structural/content findings from the audit (§3, new since June)

| # | Item | Status |
|---|---|---|
| 5.1 | Testimonials duplicate as marquee + card grid on Home/About/Trainer, **and also on Developer** (the audit missed this fourth instance — found while fixing the other three) | ✅ fixed at the source: `TestimonialsShowcase`'s `showTicker` now defaults to `false`, plus explicit `showTicker={false}` on each call site, so a future page importing it can't reintroduce the bug |
| 5.2 | Radar chart used an invented "Dhia vs. Partner baseline" comparison with no disclosed methodology | ✅ removed the fake "Partner baseline" series entirely; chart now shows only your self-assessed scores, relabeled and captioned "Self-assessed, not benchmarked against a third party" |
| 5.3 | Google Sheets "training portfolio" link still in `lib/site-config.ts` | ✅ removed — confirmed via a full-codebase grep that `trainingPortfolioUrl` had zero live consumers, so this was dead code, not a link anyone could reach |
| 5.4 | `typescript.ignoreBuildErrors` / `eslint.ignoreDuringBuilds` still both `true` | ⏳ **now diagnosed with a real build — see §7, this is no longer a guess.** Flags themselves not yet flipped on your repo; that's the one remaining step, gated on you deleting the orphan files listed in §7.1 |
| 5.11 | **New this pass — a real `npm run build` + `tsc` + `lint` run surfaced actual bugs, now fixed and committed:** unused imports (`framer-motion` in `HomePageClient.tsx`, `next/image` in the MeetUp Pro case study, `lucide-react`'s `Globe` in the language toggle), a dead `serviceLabels` object in the contact form, an unused `profileStats` import in `stats-section.tsx`, a genuine TypeScript type-narrowing bug in `lib/page-metadata.ts` (an `as const`-narrowed OG-image type rejected valid per-page overrides — now a proper `OgImage` type), an invalid `className` prop passed directly to `<ReactMarkdown>` (moved to a wrapping `<div>`), and 8 unescaped apostrophes in JSX text (`didn't`, `Let's`, `aren't`, `They're`, `I'll`) that were failing React's `no-unescaped-entities` rule | ✅ |
| 5.12 | Error boundaries (`app/error.tsx`, `app/global-error.tsx`) had `error` caught but never logged, and no working "back to home" link | ✅ added `console.error(error)` logging on both, and a working `<Link>`/`<a>` back to home (global-error deliberately keeps a plain `<a>`, not `<Link>`, since it replaces the entire root layout and router context may not be mounted there) |
| 5.13 | **Discovered:** your repo has never had an ESLint config file — `next lint` was silently prompting an interactive setup wizard instead of running, which is what `eslint.ignoreDuringBuilds: true` was actually masking (not real lint warnings, but the total absence of linting) | ✅ created `eslint.config.mjs` using Next's own standard "Strict (recommended)" flat-config setup (`next/core-web-vitals` + `next/typescript`) |
| 5.5 | Dead/unpinned dependencies: `nodemailer`, `@types/nodemailer`, `zod: latest`, `@emotion/is-prop-valid: latest` | ✅ removed/re-pinned |
| 5.6 | Nav says "Branding & Design" / footer said "Work" for the same `/designer` link | ✅ unified to "Branding & Design" |
| 5.7 | GitHub missing from `Person` JSON-LD `sameAs` | ✅ added |
| 5.8 | `WebSite` JSON-LD missing sitewide | ✅ added |
| 5.9 | `BreadcrumbList` JSON-LD missing | ✅ added a `breadcrumbJsonLd()` helper in `lib/page-metadata.ts` and wired a real Home → [page] trail into all 6 top-level pages (`/about`, `/designer`, `/trainer`, `/developer`, `/freebies`, `/insights`) — real per-route data, not one faked global block |
| 5.10 | `hreflang` alternates missing | ⏳ **decision: holding off, not doing a hollow version.** Your site's FR/AR toggle is client-side only (no real `/fr/...` or `/ar/...` URLs), so `hreflang` tags would point search engines at alternate-language pages that don't actually exist at those URLs — that's arguably worse for SEO than no tag at all. This only becomes worth doing once `next-intl` (or similar) gives you real per-locale routes — see 6.12, which is already tracked as a stretch item gating this |

## 6. Recommendations from research — tagged by inspiration source (§2, your ask)

| # | Recommendation | Inspired by / source | Status |
|---|---|---|---|
| 6.1 | Keep home page's 3 expertise cards as the primary above-fold decision | **Donna Dyer** (splits by client need, not by skill) — you already match this | ✅ already correct, no action |
| 6.2 | Reorder each pillar page so pillar-specific proof (GitHub/demos for dev, methodology/packages for trainer, case studies for design) comes before shared blocks (testimonials, radar, newsletter) | **Gloria Lo** (primary identity leads, rest is opt-in) + **Olivier Ifrah** (Work/Play toggle) | ✅ Designer and Developer were already in the right order (case studies / projects come right after the hero, testimonials near the very end). **Trainer was the one page with this backwards** — testimonials sat right after the hero, before your impact stats and journey — moved testimonials to after the Journey/Credentials section, matching the other two pillars |
| 6.3 | Add named trade-off + "what I'd do differently" reflection to every case study | **UDIT's 2026 "defensible case study" framework** + **Sarah Doody** | ✅ added to Speranza, Lone Space, Tafani, MeetUp Pro, and TravelTodo (Digimytch already had a "What I'd do next" section from before this pass; CRIT/Best Dates weren't in the audit's named 6, left as-is) |
| 6.4 | Collapse duplicate testimonial formats | **Sarah Doody**'s UX-portfolio-mistakes critique (repetition without new information reads as filler) | ✅ |
| 6.5 | Cut or relabel the radar chart's undisclosed "baseline" | **UDIT** credibility framework (unsubstantiated metrics = trust-killer) | ✅ |
| 6.6 | Add a real, dated, verified Lighthouse/PageSpeed number | **Colorlib's dev-portfolio roundup** (the site demonstrating its own claims) | ⏳ **still needs your live deployed URL for the number you'd actually publish** — a score from `dhia-portfolio.com` on real Vercel infrastructure is not the same claim as a local one, so I haven't fabricated a number to put on the site. But I did run a real Lighthouse pass against your own built app locally as a pre-deploy sanity check (not a claim, just QA) — see 6.14, which found and fixed 3 real accessibility bugs |
| 6.14 | **New this pass — pre-deploy Lighthouse audit (local build, not the live site — see 6.6 for why that distinction matters):** ran a full Lighthouse pass against your actual production build. Scores: Performance 94–97, Accessibility 91→96 after fixes, Best Practices 96, SEO 100 (all four categories, run-to-run performance varies a couple points in any headless environment, which is normal). It surfaced 3 real, previously-unknown accessibility bugs, all now fixed and committed: (1) your homepage was the only page in the whole site missing a `<main>` landmark — every other page has one; (2) the logo link's `aria-label="Home"` was silently overriding its visible "Mohamed Dhia" text for screen readers — removed, the visible text is already a fine accessible name on its own; (3) the language-toggle button's `aria-label="Toggle language"` didn't include what's visibly shown ("EN"/"FR"/"AR") — now includes it; (4) the testimonial carousel's dot-navigation buttons had only a 10×10px tap target (accessibility minimum is 24×24px) — enlarged the tap area without changing how the dots look, and widened their spacing slightly so the larger tap areas don't overlap each other | ✅ |
| 6.15 | **Same audit also surfaced a real but *design*, not bug, finding: 31 instances of text/buttons below the recommended contrast ratio** — mostly your accent-green kicker labels and small slate-gray secondary text on white backgrounds, plus the `.btn-green` button style. This is a genuine, sitewide, systemic pattern (not isolated typos), but fixing it means darkening brand colors you chose deliberately, which is a visual/taste call, not something I'll change without you seeing it first. Flagging it here rather than silently leaving it out: if you want it addressed, the fix is cheap (a few CSS variable tweaks) but you should see a before/after before I touch your brand palette | 🔍 your call — flagged, not changed |
| 6.7 | Add a 30–60s facilitation video | Every coach/trainer exemplar researched (**Tony Robbins / Mel Robbins / Scott Laidler** reference class) | ⏳ needs a real video file from you — not something I can create |
| 6.8 | Move freebie/lead-magnet CTA to the top of `/designer` and `/developer` (already done on `/trainer`) | Same coach/trainer research — lead magnet as top-of-page hook, not nav item | ✅ **Designer** — added a "Get free templates" button to the hero, matching Trainer's pattern. ✅ **Developer — the blocker is now resolved, not just documented.** Built the missing content: a real "Next.js + Supabase Starter Checklist" freebie (project setup, env vars, RLS policies, deployment order — genuinely useful generic technical content, not a claim about your history) with its own PDF, added a proper `"development"` category end-to-end (`lib/freebies.ts` type, the `/freebies` page's category tabs and card badges, full EN/FR/AR translations matching how every other freebie is already localized), and added the "Get free checklist" hero CTA on `/developer` linking to `/freebies?category=development` — verified working with a real headless-browser check, not just a code review |
| 6.16 | **Found while building 6.8 — a real, previously-unknown bug affecting every downloadable freebie PDF:** the PDF-generation script writes raw UTF-8 bytes for the em dash ("—") and middle dot ("·") characters into the PDF's text stream, but the PDF has no `/Encoding` declared on its (non-embedded) Helvetica font — so those bytes don't round-trip through PDF's default text encoding. Rendered a PDF to an image to check: the em dash in every single freebie's title silently disappears, leaving an odd double-space gap ("Brand Brief Template␣␣Mohamed Dhia Arfa") instead of the intended "Brand Brief Template — Mohamed Dhia Arfa" | ✅ replaced with plain hyphens/ASCII in the title and the two content lines that used a middle dot, regenerated and visually re-verified all 6 PDFs render cleanly, and added a guard in the script itself that now throws a clear error if a future freebie's text contains a non-ASCII character — so this exact bug class can't silently ship again |
| 6.9 | Keep the curated homepage, dark mode, large hero type — already matches 2026 trend research | **Colorlib's 19-trend list** + **Envato 2026** | ✅ already correct |
| 6.10 | Explicitly skip WebGL/3D/gamified nav/generative visuals | Same trend research — actively works against a 3-pillar credibility site aimed at recruiters/NGOs/clients | ✅ decision made, no action needed |
| 6.11 | Keep current light hybrid-portfolio approach (Behance/Instagram embeds, GitHub links) — no further investment needed | Same trend research | ✅ already correct |
| 6.12 (stretch) | `next-intl` for real locale routing if FR/AR visitors are a real segment | Confirmed via live test: `/designer` hero copy stays English after toggling FR | ⏳ your call — real engineering investment, and now also the prerequisite for 5.10 (`hreflang`) above |
| 6.13 (stretch) | A "which door do you need?" router above the hero (3 buttons that filter the whole page, not just scroll) | Extension of the Donna Dyer pattern — audit notes no exemplar site fully does this yet | ⏳ biggest lift in the report, optional |
| 6.18 | **New this pass — found a genuine dead link:** the "notify me" button in the `/freebies` page's "more coming" panel linked to `/contact`, a page that doesn't exist on this site (confirmed: no `app/contact` route anywhere) — a real 404 for anyone who clicked it. Every other contact CTA site-wide correctly uses a `#contact` anchor into the footer's contact section (which the footer, `id="contact"`, provides on every page including this one) | ✅ changed to `href="#contact"`, matching the site's existing pattern exactly — confirmed via a headless-browser check that the link now resolves on the page instead of 404ing, full `tsc`/`lint`/build/route-test/API-test pass stayed clean |
| 6.17 | **New this pass — extended the Lighthouse audit past the homepage to `/about`, `/freebies`, `/insights`, every `/work/[slug]` and `/case-study/meetup-pro`, and found 2 more real bugs, both systemic (every case study + every insight article, not a one-off):** (1) a genuine React **hydration mismatch** on every case-study page that has an inline image — the markdown renderer wraps an image in a `<div>` (needed for `next/image`'s `fill` layout), but markdown always wraps a standalone image in a `<p>` first, and a `<div>` inside a `<p>` is invalid HTML, so React silently re-rendered that whole section on the client after first paint on every visit. (2) **heading levels skip from `<h1>` straight to `<h3>`** on every case-study and insight-article page (no `<h2>` in between) — a WCAG 1.3.1 / Lighthouse `heading-order` violation, invisible visually but read as a broken structure by screen readers and search engines | ✅ (1) fixed by having the paragraph wrapper render as a `<div>` instead of a `<p>` specifically when its only child is an image, so the nesting stays valid — confirmed via a headless-browser console check that the exact hydration error is gone. (2) fixed by promoting every case-study/article subsection heading from h3 to h2 (component + the underlying markdown source, both `lib/work-content.ts` and `lib/insights-content.ts`), giving a correct h1→h2 sequence — re-ran Lighthouse on `/work/meetup-pro` and an insights article and confirmed `heading-order` no longer flags. Full re-verification: `tsc --noEmit` 0 errors, `next lint` clean, fresh `npm run build`, 17/17 route tests + 9/9 API tests still passing |

## 7. Real build verification — done this pass, with concrete results (supersedes the old "flagged, not attempted blind" version of this section)

Your device shell is still down this session too (retested — same Sep 8 Windows update issue, confirmed still broken), so I still can't run anything directly on your PC. But rather than leave this as a guess, I staged your full `app/`, `components/`, `lib/`, `hooks/`, and config files into my own cloud workspace and ran a **real, from-scratch `npm install` + `npm run build` + `npx tsc --noEmit` + `npx next lint`** there — first time this has actually been verified rather than assumed, for either of us.

**What that real build found:**

| # | Item | Status |
|---|---|---|
| 7.1 | `ignoreBuildErrors: true` was silently hiding **157 real TypeScript errors**. Traced every single one — 144 of them (92%) live entirely inside 4 orphan routes and their exclusively-used components, all of which reference npm packages that were **never installed at all** (`@react-three/fiber`, `@react-three/drei`, `three`, `@radix-ui/react-aspect-ratio`, `@radix-ui/react-context-menu` — confirmed absent from both `package.json` and `node_modules`) | ✅ diagnosed, root cause confirmed |
| 7.2 | The remaining 13 real errors were in genuinely live code — fixed and committed to your PC this pass, see 5.11 above | ✅ |
| 7.3 | Confirmed via grep that **zero internal links** point to any of the 4 orphan routes below, and via three passes of an import-precision script that the component list below has **zero live imports** anywhere in `app/`, `components/`, `lib/`, or `hooks/` | ✅ verified |
| 7.4 | After deleting the orphan set below (in my cloud copy only — see note below) and flipping both strict flags to `false`: `npx tsc --noEmit` → **0 errors**. `npx next lint` → **"✔ No ESLint warnings or errors."** `npm run build` → succeeds with real type-checking and linting now actually active | ✅ confirmed clean |
| 7.5 | Booted the built app and ran your own test scripts against it: `test-routes.mjs` → 16/17 passed (the one "failure," `/freebies/*.pdf` 404, is an artifact of me not staging binary PDFs into the throwaway cloud copy — confirmed via a direct directory listing that all 5 PDFs genuinely exist on your PC at their expected size); `test-api.mjs` → **9/9 passed** | ✅ |
| 7.6 | Wire `test:api`/`test:freebies`/`test:routes` into a GitHub Actions CI step | ✅ **written, but not auto-committed** — I built a full `.github/workflows/ci.yml` (installs deps, runs `test:freebies` statically, runs a non-blocking lint, builds, boots the built app, then runs `test:routes` and `test:api` against it). The device bridge treats `.github/workflows/` as a protected path it refuses to write to (a safety guard on its end, not something I can override), so I sent it to you directly as `portfolio-ci.yml` — save it into your repo as `.github/workflows/ci.yml` and commit it. Once your build is confirmed clean locally, tighten the `build`/`lint` steps to fail hard (see 5.4) |
| 7.7 | `npm install` needed on your machine to sync `node_modules`/lockfile after the `package.json` dependency changes from §5 above | 🧑‍💻 run locally |

**Why the orphan deletion itself is still 🧑‍💻, not ✅:** deleting files needs a working shell on your PC, and yours is still down (confirmed broken again just now). `device_commit_files` (what moved every other fix in this document onto your PC) can only create or overwrite files — it has no ability to delete or move anything. So the exact orphan list below is verified-safe-to-delete by a real build, but the deletion itself has to be either you doing it manually, or a future session once your shell is working again. **Until that deletion happens, do not flip `ignoreBuildErrors`/`ignoreDuringBuilds` to `false` on your real repo** — 144 of those 157 suppressed errors live in files that are still physically present on your PC, so flipping now would break your actual `next build` / Vercel deploy.

| 7.8 | **New this pass — turned the manual "delete these 43 things one by one" list into one script.** Confirmed every single path in the list below still exists on your PC exactly as named (checked directly, not assumed), then wrote `scripts/cleanup-orphans.ps1` — a PowerShell script that deletes all 4 orphan routes and 39 orphan components and flips both `next.config.js` flags to `false` in one run. Tested the exact deletion + regex-flip logic against a reconstructed copy of the real paths (not just eyeballed) — confirmed every path resolves and nothing is left over | ✅ script written, tested, and committed to your PC at `scripts/cleanup-orphans.ps1`. **To run it:** open PowerShell in your repo root and run `powershell -ExecutionPolicy Bypass -File scripts\cleanup-orphans.ps1`, then `npm run build` to confirm, then commit |
| 7.9 | **New this pass — checked your actual GitHub repo directly (I have read access to `dhiaarfa/portfolio`, confirmed no write access, so I can look but not push).** Your `main` branch's last commit is dated **July 26, 2026** — meaning everything committed to your PC across every session since then (this round's fixes and a lot more before it) is still sitting locally, uncommitted. Not a bug, just worth knowing before you push: your next `git push` will be a large catch-up commit, not a small incremental one, so budget a few minutes to review the diff rather than being surprised by its size | ℹ️ informational — no action needed beyond knowing this going in |

**Exact list confirmed safe to delete (paths relative to your repo root):**

Routes (delete the whole folder):
```
app/3d-viewer/
app/products/
app/case-studies/
app/premium-redesign/
```

Components (delete each file):
```
components/logo-3d.tsx
components/3d-showcase.tsx
components/portfolio-3d-viewer.tsx
components/product-showcase.tsx
components/product-viewer.tsx
components/premium-hero-section.tsx
components/premium-glass-card.tsx
components/premium-skills-card.tsx
components/premium-experience-timeline.tsx
components/bdaf-project-modal.tsx
components/crit-project-modal.tsx
components/about-agency.tsx
components/about-section.tsx
components/civic-work.tsx
components/cta-section.tsx
components/cursor-follower.tsx
components/education.tsx
components/engagement.tsx
components/experience.tsx
components/formations.tsx
components/graphic-design-marketing.tsx
components/graphic-portfolio.tsx
components/hero-section.tsx
components/organizations-section.tsx
components/professional-profile.tsx
components/services-section.tsx
components/skills.tsx
components/social-embeds-section.tsx
components/sticky-cta-bar.tsx
components/team-section.tsx
components/testimonials-ticker.tsx
components/trainer-capabilities.tsx
components/trainer-testimonials-section.tsx
components/training-impact-chart.tsx
components/features.tsx
components/portfolio.tsx
components/services.tsx
components/ui/aspect-ratio.tsx
components/ui/context-menu.tsx
```

That's 4 routes + 37 components. `ui/aspect-ratio.tsx` and `ui/context-menu.tsx` are the only shadcn primitives on the list — I deliberately left the rest of `components/ui/` alone even where individual primitives look unused, since that's expected/normal for a shadcn component library and not worth the churn; those two are the exception because they're *both* unused *and* reference the uninstalled Radix packages above, so they're doubly dead. Note `components/services.tsx` and `components/services-section.tsx` are *both* on the dead list — the live equivalent is `components/services.tsx`'s content having been superseded elsewhere in the actual `Services`/pillar pages, not by either of these two files. I still fixed a real apostrophe bug in `services.tsx` in 5.11 above since it costs nothing and it stays on your PC either way until you delete it.

**After you delete all of the above, and only then:** flip both flags in `next.config.js` to `false` — `typescript: { ignoreBuildErrors: false }` and `eslint: { ignoreDuringBuilds: false }` — then run `npm run build` once locally to confirm it's still clean on your machine (it will be, since your setup matches what I verified, minus the missing PDFs which are only missing from my throwaway copy).

## 8. Exhaustive "hard tour" QA/UX pass (your newest ask — not started yet)

Scope for this phase, once started: click and exercise every button, link, form, toggle, and interaction across every page — structured tests (every nav item, every form's valid/invalid states, every language × theme × viewport combination) *and* deliberately adversarial/exploratory ones (rapid double-clicks, empty submits, back/forward navigation, extreme window widths, keyboard-only navigation, slow-network simulation). Every finding will be filed as one of exactly two categories, kept separate from everything above:

- **Remaining Issue** — something broken (a bug)
- **Possible Improvement** — something that works but could be better (a suggestion)

**Status: content/data fixes are now done, but this is still held — for a new reason than before.** It was originally paused so the tour would test the updated site rather than pages about to change; that condition is now met in the code, but none of this round's commits are live yet (they're on your PC, not deployed to Vercel). Running the full tour against the current live `dhia-portfolio.com` right now would mostly test copy and data that's already fixed locally, and I'd have to re-check the Trainer section-reorder and the new Designer freebie button again after you deploy anyway. **Once you run `vercel --prod` and it finishes, say the word and I'll run this pass against the real live site** — that's the one moment it only needs doing once. It'll be its own follow-up with its own results table appended to this document.

## 9. Verification pass (your ask: "double checking on everything in the list")

Once your next deploy goes out, the plan is to re-visit the live site and confirm — not just trust the diff — that each ✅ above actually renders correctly: the OG image previews properly, the footer/nav labels match, the corrected stats and experience entries show up on `/about`, the new tool icons render (not broken images), the breadcrumb JSON-LD validates, the Trainer page's new section order reads well, the Designer hero's new 3rd button doesn't crowd on mobile, and the domain fix is fully gone (no lingering `.me` anywhere, including view-source and email test-sends). This will be reported honestly item-by-item, folded into the same post-deploy pass as §8 above.

---

## Doing everything possible without your PC's shell

You asked me to do everything I can myself. I checked whether I actually have any path around the two remaining hard blockers (your PC's broken device shell, and pushing to GitHub) — here's exactly what that turned up:

- **I do NOT have push access to your GitHub repo, or deploy access to your Vercel account.** Tried both directly rather than assuming: `git push --dry-run` was explicitly denied by the proxy ("dhiaarfa/portfolio is not in this session's authorized repository set"), and `vercel whoami` confirmed this session is logged out with no Vercel credentials available. I can't deploy for you either way, however much I automate everything else — and correctly so, that's your account either way.
- **Your actual deploy path turned out to be simpler than I'd assumed.** Your PC already has a `.vercel/` project link, meaning you deploy via `vercel --prod` directly from your local files — not via a GitHub-triggered deploy. That means `git push` is NOT a prerequisite for getting this round's fixes live; it's a separate, good-practice step for backup/history. The one command that actually matters is `vercel --prod` from your repo root.
- **I DO have read access to your real GitHub repo**, which let me confirm something worth knowing: your `main` branch hasn't been pushed to since July 26, 2026 — see 7.9.
- **Your PC's shell is still down** (retested, same Sep 8 Windows update issue), so I still can't delete files or run `npm install`/`git` commands remotely on your machine.
- **What I could still do:** turn the one manual, error-prone step you had left — deleting 43 specific files by hand — into a single script, and prove it works by testing its exact logic against the real file list from your PC rather than just writing it and hoping. See 7.8.

So the only things left that generally require you personally are: running that one script, running `npm run build` to confirm, saving the CI file (blocked by a deliberate safety restriction on the file bridge, not something to route around), and deploying — which, since your project deploys via the Vercel CLI directly (not a GitHub-triggered deploy), is just `vercel --prod` from your repo root. I tried that path too, for the same reason as GitHub: `vercel whoami` confirms this session is logged out, no Vercel credentials available — correctly so, that's your account.

## Double-check pass — found and fixed a silent delivery failure

You asked me to recheck and double-check rather than assume the last round's work actually landed — good call, because it caught something real. I re-pulled every file this pass claimed to have committed straight from your PC and byte-compared it against what I intended to send. Two files had silently **not** landed despite the commit tool reporting success both times: **`package.json`/`package-lock.json` (the critical Next.js security upgrade, 1a) and `app/freebies/FreebiesClient.tsx` (the dead `/contact` link fix, 6.18)** were still showing their old, unpatched content on your actual PC. Everything else this pass — all 20+ other files, including the 11 OG images (verified pixel-identical, not just byte-identical, since those differed by a constant metadata-only offset that turned out to be harmless) — checked out correctly.

Re-sent both files and immediately re-verified by pulling them back a second time: `package.json` now genuinely shows `next@15.5.25` and `FreebiesClient.tsx` now genuinely shows `href="#contact"` on your PC, not just in my last message to you. **This means the critical security fix had not actually reached your machine until just now** — if you'd deployed right after my last message, the vulnerable Next.js version would still have gone live. It's correct now, confirmed by re-reading the file back, not by trusting the write confirmation. Worth keeping in mind for future rounds: I'll build in this re-read-after-write check as standard practice given this device bridge's behavior.

## Decisions made this round (so nothing gets re-litigated later)

- **Orphan routes + components**: no longer a guess — verified via a real `npm install`/`build`/`tsc`/`lint` run in a throwaway cloud copy of your codebase. Exact list of 4 routes + 37 components confirmed safe to delete is in §7. Deletion itself is still 🧑‍💻 (your device shell is still down, and file-writing tools can create/overwrite but not delete) — see §7 for the full list and the exact order of operations.
- **`ignoreBuildErrors`/`ignoreDuringBuilds` flags**: explicitly NOT flipped on your real repo yet, on purpose — 144 of the 157 suppressed errors live in the still-present orphan files above; flipping now would break your real build. Flip only after you delete the §7 list.
- **13 real bugs found by the real build, already fixed and committed to your PC** — see 5.11–5.13. These are independent of the orphan cleanup and needed no deletion to fix safely.
- **Per-route OG images (2.4/2.6)**: turned into a bigger, more valuable fix than originally scoped. Verifying "were these images even correctly sized" (2.4) found the exact same declared-vs-actual dimension bug on all 3 pillar pages AND all 8 case studies — 11 routes total, all now fixed with real generated 1200×630 cards instead of raw screenshots. Nothing here needed deletion or your device shell, so it's fully done and committed, not just diagnosed.
- **QA click-tour + verification pass**: now blocked on your next deploy going live, not on more content work — see §8.
- **Zia Studio**: settled — see 3.13 above.
- **hreflang**: deliberately not implemented yet — see 5.10. A hollow `hreflang` block pointing at non-existent locale URLs would be worse than none; it's gated behind real `next-intl` routing (6.12).
- **Developer freebie CTA**: no longer blocked — see 6.8. Built the missing freebie (a real Next.js + Supabase starter checklist) end-to-end rather than leaving the CTA out, since the content it needed didn't require anything from you to create honestly.
- **Freebie PDF em-dash bug**: found and fixed across all 6 PDFs, plus a guard added so it can't recur silently — see 6.16.
- **CI workflow**: written and delivered as a standalone file, not auto-committed — see 7.6. The device bridge blocks writes to `.github/workflows/` as a safety measure; this is the one file in this whole round you need to save yourself.
- **Domain fix, corrected**: 1.4 originally claimed "all occurrences" but a fresh grep found 7 more — including your freebie PDFs literally printing `dhia-portfolio.me` in their footer. All 7 fixed and all 5 PDFs regenerated — see 1.8.
- **Pre-deploy accessibility audit**: ran a real Lighthouse pass against your actual build (not the live site — see 6.6/6.14 for why that distinction matters for the *published* number). Found and fixed 3 real bugs (missing `<main>` landmark, two `aria-label`/visible-text mismatches, a too-small touch target). Left the color-contrast finding (31 instances, systemic) for your call rather than changing your brand colors unilaterally — see 6.15.
- **Critical Next.js security upgrade**: ran a real `npm audit`, found the site's pinned `next@15.1.11` carries a critical unauthenticated-RCE advisory (Image Optimization API + AVIF, which this site's config actually serves) plus a critical Middleware auth-bypass. Upgraded to `15.5.25` — the latest patch within the same major version, deliberately not jumping to Next 16 (would force a React 19 evaluation, out of scope for an unattended fix) — see 1a. Also ran the safe, non-breaking half of `npm audit fix` for the rest of the dependency tree.
- **Extended the audit past the homepage**: ran Lighthouse + a headless-browser console check against `/about`, `/freebies`, `/insights`, every `/work/[slug]`, `/case-study/meetup-pro`, `/designer`, `/trainer`, and `/developer`. Found and fixed 3 more real bugs: a React hydration mismatch on every case-study image, a heading level skipped (h1→h3) on every case study and insight article — see 6.17 — and a dead `/contact` link on `/freebies` — see 6.18. Also checked the `/case-study/meetup-pro` + `/work/meetup-pro` two-URL setup and the `manifest.json`/Vercel-analytics console noise flagged by the same audit: both are intentional/expected (the case-study page is a deliberate deep-dive linked from the work page's body copy, not a duplicate; the manifest/analytics 404s are artifacts of testing outside real Vercel infrastructure, confirmed by checking your actual PC still has `manifest.json`) — not bugs, so left alone.

## Priority order (unchanged from the audit's own §5, still holds)

0. **New, and now the most urgent item on this whole list:** ~~critical Next.js security vulnerabilities~~ — ✅ fixed this pass (1a), but only live on your PC — needs you to run `vercel --prod` to actually protect the live site (no git push needed first, see 1a)
1. ~~Domain fix~~ — ✅ done this pass
2. ~~Case-study trade-off/reflection paragraphs~~ — ✅ done this pass
3. Strict TS/ESLint on build — ✅ **verified via real build this pass, exact orphan-deletion list ready** (§7), flag flip still needs you to delete those files first + ~~CI wiring~~ — ✅ written, needs you to save the file (7.6) + ~~dead deps~~ — ✅ done this pass
4. ~~Testimonial dedup, radar chart fix~~ — ✅ done this pass · ~~Google Sheets replacement~~ — ✅ done this pass
5. ~~Pillar-first reordering~~ — ✅ done this pass · ~~per-route OG images~~ — ✅ done this pass (found and fixed on all 11 routes, not just built) · ~~pre-deploy accessibility pass~~ — ✅ done this pass (3 real bugs fixed, 1 design finding flagged for you) · video testimonial, the *published* Lighthouse number still open (need your assets / a live deploy)
6. Stretch: homepage "which door" router, `next-intl`

## What's left, in order

1. **You, urgently:** run `vercel --prod` from your repo root so the live site actually gets the Next.js security patch (1a) — no git push needed first, your project deploys straight from local files. Everything else on this list can wait a day, this one shouldn't
2. **You:** save the delivered `portfolio-ci.yml` as `.github/workflows/ci.yml` in your repo (7.6)
3. **You:** run `scripts/cleanup-orphans.ps1` (one command, does the deletion + flag flip for you — see 7.8), then confirm `npm run build` is still clean locally
4. **You, separately:** `git add -A && git commit && git push` at some point — not required for the deploy, but your GitHub `main` is 7+ weeks behind your local state (7.9) and worth catching up
5. **Me, once deployed:** the QA click-tour + verification/double-check pass (§8, §9) — say the word after your deploy
6. **You, whenever convenient:** the fuller tools list (4.9), `npm install` locally (7.7)
7. **Gated on new assets from you:** a facilitation video (6.7) — a real Lighthouse score (6.6) just needs the deploy from step 1
8. **Your call, whenever you're ready:** the two stretch items (`next-intl` + hreflang, and the homepage "which door" router)
