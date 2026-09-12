# dhia-portfolio.com — Deep Audit v3 & Action Plan (September 2026)

**Live site:** dhia-portfolio.com (migrated from dhia-portfolio.me — see [C-1] below, this matters)
**Compared against:** v1 (trust audit), `TECHNICAL-AUDIT.md` (June 2026), `dhia-portfolio-deep-report-v2.md`, plus fresh research done for this report (dated Sep 2026 — sources listed at the end)
**Method:** I walked every page of the live site page-by-page (desktop), read the current source for the files most likely to have drifted (`next.config.js`, `app/api/contact/route.ts`, `app/sitemap.ts`, `app/robots.ts`, `app/layout.tsx`, `lib/site-config.ts`), diffed that against what v1/v2 recommended, and researched current (2026) award-winning portfolios, dev-portfolio standards, coach/trainer conversion patterns, and UX case-study credibility standards to benchmark against.

---

## 0. Headline: you already did the hard part

Before anything else — the gap between the June audit and today is large, and in the right direction. Don't let the rest of this document read as "nothing happened." Here's what got fixed since v2 flagged it:

| v2 recommendation | Status today |
|---|---|
| Build real case studies instead of gallery tiles linking to Behance | ✅ Done — `/work/*` routes exist with brief → approach → outcome for Speranza, Lone Space, Tafani, MeetUp Pro, TravelTodo, DigiMyTech |
| Add a "Work With Me / Training Packages" block | ✅ Done — 4 named packages (Half-Day Workshop, Multi-Session Program, TOT, Keynote) with audience, format, deliverables, CTA |
| Kill developer skill-percentage bars | ✅ Done — replaced with grouped tool/logo tags (AI Tools / Frontend / Backend & Infra) |
| GitHub in footer + nav + dev hero | ✅ Done — footer icon, "View GitHub" button, per-project GitHub links |
| Publish or remove Insights placeholders | ✅ Done — 9 real published articles, categorized, with read time |
| Ship real freebie files or hide the cards | ✅ Done — gated download flow wired to `lib/freebies.ts`, PDF vs Canva delivery modes, matches the exact spec v2 proposed |
| HTML-escape user input in contact emails | ✅ Done — `escHtml()` used throughout `route.ts` |
| Rate-limit + honeypot on `/api/contact` | ✅ Done — `checkRateLimit()` + a `website` honeypot field |
| Reduce `deviceSizes` (drop 3840) | ✅ Done — now caps at 1920 |
| Complete the sitemap | ✅ Done — dynamic, includes freebies/insights/case studies |

That's roughly two-thirds of the June P0/P1 backlog. Genuinely good execution. The rest of this report is about what's left, what's new (the domain move surfaced one real bug), and what the outside world's best portfolios do that yours still doesn't.

---

## 1. The one urgent thing: the domain move is half-finished

You asked me to "locate it on PC, Vercel etc." because of the new domain — so before design critique, the most important finding is this:

**`dhia-portfolio.me` is dead** (I hit it twice just now — Chrome shows a DNS error, it does not resolve). But the live code on `dhia-portfolio.com` still hardcodes the old domain in every canonical/metadata surface and every outbound email:

| File | What's hardcoded | Impact |
|---|---|---|
| `app/layout.tsx` (4 places) | `metadataBase`, OpenGraph `url`, `Person`/`Organization`/`ProfessionalService` JSON-LD `url` + `image` | Every social share preview, every rich-result search snippet, and your structured data all self-declare a domain that no longer exists |
| `app/sitemap.ts` | `baseUrl = "https://dhia-portfolio.me"` | The sitemap you're serving *from dhia-portfolio.com* lists every page as living on the dead domain — Google Search Console for the new domain will not trust or properly index this |
| `app/robots.ts` | `baseUrl = "https://dhia-portfolio.me"` | `Sitemap:` directive in robots.txt points crawlers at the dead domain |
| `app/api/contact/route.ts` (5 places) | Email footer text, auto-reply signature link, freebie-delivery footer, newsletter subject line | Every person who fills your contact form, downloads a freebie, or signs up for your newsletter right now gets an email linking back to a dead page |
| `.env.example`, `README.md` | `NEXT_PUBLIC_SITE_URL=https://dhia-portfolio.me` | Onboarding docs point the next person (or you, on a fresh clone) at the wrong domain |

This is a find-and-replace, not a redesign — but it's live and bleeding trust every day it's unfixed (an auto-reply with a dead link the same day someone contacts you is a bad first impression). **Do this before anything else in this report.** While you're in there, also point `CONTACT_RECEIVER`/`NEXT_PUBLIC_SITE_URL` on Vercel's env vars to match, and register the sending domain in Resend against `dhia-portfolio.com` so you can move off the `onboarding@resend.dev` sandbox sender (flagged in v1/v2, still true — see §4).

---

## 2. What the best portfolios out there actually do (2026 research)

I didn't want to just re-cite the same six names from the June report, so I pulled fresh 2026 roundups (Awwwards, Muzli's top 100, Colorlib's 21 dev portfolios and 19 trend list, Envato's 2026 trend piece, SiteBuilderReport's personal-sites list) and two credibility-focused UX sources (Sarah Doody's portfolio-mistakes piece, UDIT's 2026 "defensible case study" framework). Here's what's actually relevant to *your* situation — a designer/trainer/developer in one person, not a generic "make it flashy" list.

### 2.1 The multi-hyphenate problem — how others solve it

Your core structural challenge (three-plus identities, one site) has known solutions, and yours already uses the right family of pattern:

- **Gloria Lo** (UX designer + singer + painter + writer) puts her primary professional identity at the top of the visual hierarchy and tucks the rest behind a clearly-labeled secondary nav item ("Play"). The point: *one* identity leads, others are opt-in, not equal-weighted.
- **Olivier Ifrah** (product designer with passion projects) literally toggles "Work" vs "Play" from the nav.
- **Donna Dyer** (energy coach + leadership coach) splits by *client need*, not by *your skill* — visitors self-select by what they want, not by what you can do.
- **Mindy Nguyen** and **Lauren Hom** hold multiple disciplines together through one consistent visual voice rather than one consistent IA — the personality (not the page structure) is what unifies them.

**Where you already match this:** your homepage's three expertise cards (Graphic Designer / Trainer / Web Developer) are exactly the Donna-Dyer "pick your path" pattern, and you built it — that's correct, keep it as the primary above-the-fold decision.

**Where you don't yet match it:** none of these exemplars make the visitor look at all three identities equally on every single page. Your testimonials, radar chart, and stats blocks repeat identically across Home/About/Trainer/Freebies regardless of which "pillar" the visitor is in — so a recruiter evaluating you as a *developer* still has to scroll past trainer testimonials and a "cultural fit" radar chart before reaching dev-specific proof. The exemplars above filter what a visitor sees by which door they walked through; yours currently doesn't.

### 2.2 Dev portfolios — what's table stakes now

From Colorlib's 21 examples (Brittany Chiang, Cassie Evans, Diogo Correia, Tamal Sen, Gift Egwuenu, etc.) and the broader 2026 roundups, the pattern hasn't really changed from June, but it's worth being precise about what's *actually* proven now: a one-line identity statement, 3–6 projects with live link + repo + real numbers, and — repeatedly, across every single roundup — **the site itself demonstrating the claims it makes** (fast, accessible, no dead links). Your dev page already does the identity statement, GitHub-everywhere, and live+repo+case-study links well. The gap is the claim-verification point in §4.3.

### 2.3 What makes a case study "defensible" (not just present)

This is genuinely new since June — a 2026 UX-portfolio framework (UDIT) and a widely-cited critique (Sarah Doody) both converge on the same idea: *having* a case study isn't the bar anymore, having a **defensible** one is. A defensible case study:

1. States the problem with real scope ("60% cart abandonment," not "the client needed a redesign")
2. Names **trade-offs** explicitly — "by prioritizing X we got Y, but accepted sacrificing Z"
3. Shows *proportionate* evidence (a 3–5 person interview round is fine — inflated or invented metrics are the credibility killer)
4. Includes a **reflection** — what you'd do differently
5. Shows intermediate process, not just the final polished shot

**Your Speranza/Lone Space/Tafani case studies have 1, 3 (implicitly), and 5. They're missing 2 and 4** — there's no explicit trade-off framing and no "what I'd change" close. This is a genuinely cheap, high-leverage fix (a 2–3 sentence addition per case study) that would move your best new content from "good" to "defensible," which is the exact bar recruiters and clients are now calibrated to.

### 2.4 Trainer/coach sites — productized offers + proof, not just methodology

Tony Robbins/Mel Robbins/Scott Laidler-style sites (still the reference class here) lean on named packages + overwhelming specific social proof + a visible lead magnet as the *first* CTA on the page. You built the packages (§0). What's still not matched: a **video** of you facilitating (you have the raw material — SCORP/TNHRT/Doha photos — but stills, not motion), and the freebies/lead-magnet funnel is still buried in the nav rather than being the first thing a training-page visitor sees, which is backwards from how every coaching site in this research treats its lead magnet.

### 2.5 2026 visual/interaction trends — what to take and what to skip

Colorlib's 19-trend list and Envato's 2026 piece both lean toward: curated (not exhaustive) homepages, large type, dark mode, texture/tactility, WebGL/3D accents, and — new this year — "hybrid portfolios" (blending the personal site with Behance/social feeds) and AI-assisted builds. Being honest about fit:

- **Worth adopting:** curated homepage (you're 80% there — see §5 REMOVE), dark mode (you already ship it), large type in hero sections (already present on Home/Trainer/Developer).
- **Not worth chasing:** WebGL/3D, gamified navigation, generative visuals. These read well on *single-discipline* creative-agency sites competing for Awwwards. On a three-pillar credibility site aimed at NGOs, recruiters, *and* design clients, that trend actively works against you — a recruiter skimming for Next.js competence and an NGO director skimming for training credentials both want speed and clarity, not a WebGL loading screen. Skip it.
- **Worth partial adoption:** the "hybrid portfolio" idea, but you already do this correctly and lightly (Behance/Instagram embeds on Designer, GitHub links on Developer) — no further action needed, just don't over-invest here.

---

## 3. Fresh site-specific findings (beyond the June list)

These weren't in v1/v2 because either the pages didn't exist yet or I read code v2's authors didn't:

1. **Testimonials render in two formats back-to-back on the same page (marquee ticker + card carousel of the same quotes), and this now spans multiple pages, not just Home.** I confirmed the marquee+card duplication on Home, About, and Trainer; Freebies repeats the same quotes again in card form (without the marquee). June flagged this for Home only — it's now a multi-page pattern, and it's the single biggest "why am I scrolling past the same thing again" moment on the site.
2. **The homepage radar chart still isn't backed by real data — it's just been relabeled.** June flagged decorative numeric scores (95/92/98). Today it's "Mohamed Dhia" vs. a "Client partner baseline" across Communication/Creativity/Reliability/Methodology/Multilingual/Cultural Fit — same problem, new axis labels. There's no disclosed methodology for either your score or the "baseline," which is exactly the "unsubstantiated metric" pattern the 2026 UX-credibility research calls out as a trust-killer.
3. **The Google Sheets "training portfolio" link is still in the codebase** (`lib/site-config.ts: trainingPortfolioUrl`) — v2 flagged this as off-brand and a minor security smell in June; it hasn't been replaced with a native page yet.
4. **`typescript.ignoreBuildErrors` and `eslint.ignoreDuringBuilds` are still both `true`** in `next.config.js` — confirmed unchanged from June. Everything else engineering-side got real attention (rate limiting, escaping, tests scripts now exist — `test:api`, `test:freebies`, `test:routes` in `package.json`!) — this one flag is the one thing that undoes a lot of that rigor, because it means none of it is enforced at build time.
5. **Dead dependencies are still in `package.json`**: `nodemailer` (replaced by Resend months ago), `zod: "latest"` and `@emotion/is-prop-valid: "latest"` (both unpinned — a `latest` pin can break your build on any fresh install with zero warning). None of the three appear to have been touched since June.
6. **Nav says "Branding & Design," footer says "Work."** Same link, two names, still inconsistent (flagged in June, still true).

---

## 4. Recommendations

Organized exactly the way you asked. Each item says *why* (tying back to §2/§3) and roughly *how much effort* it is, so you can triage.

### ADD

- **A 2–3 sentence "trade-off" + "what I'd do differently" close on every case study** (Speranza, Lone Space, Tafani, MeetUp Pro, TravelTodo, DigiMyTech). This is the single highest-leverage content change in this whole report — cheap, and it's the exact gap between "has case studies" (rare, you now clear this bar) and "has *defensible* case studies" (rarer). *Effort: ~30 min per case study, writing only.*
- **A real, verified Lighthouse/PageSpeed number**, published where the dev page implies performance matters. Don't guess — run `pagespeed.web.dev` against `dhia-portfolio.com` yourself and post the actual number with a date, or don't mention it at all. Unverifiable performance claims are exactly the credibility pattern this year's research flags hardest. *Effort: 10 minutes.*
- **A 30–60s video of you facilitating.** You have the raw footage sources (SCORP Morocco, TNHRT, Doha). This is the single most-cited trust-builder in every coach/trainer exemplar researched and you're the only pillar currently missing it. *Effort: medium (editing), high payoff.*
- **`hreflang` alternates + `WebSite`/`BreadcrumbList` JSON-LD** — still missing per June audit, still true today, still cheap.
- **A CI check that fails the build if TypeScript or ESLint fail** (i.e., flip the two flags in §3.4) — pair this with fixing whatever errors surface, which is real work, but it's the one flag undermining every other engineering fix you've shipped.

### REMOVE

- **One of the two testimonial formats**, everywhere both appear back-to-back (Home, About, Trainer). Pick the card carousel (it's readable and scannable) or the marquee (better for passive scroll-through) — not both stacked on the same page. Separately, consider whether the *same* quotes need to repeat on Freebies too, or whether that page would do better with freebie-specific proof (download counts, a "used by 200+ designers and trainers" line — which you already have above the fold there).
- **The radar chart**, or at minimum the "Client partner baseline" comparison line — a self-drawn shape next to an undisclosed "baseline" reads as invented data to exactly the audience (recruiters, NGO partners) sophisticated enough to ask "baseline from what?"
- **Dead dependencies**: `nodemailer`, and re-pin `zod` and `@emotion/is-prop-valid` off `"latest"` to an actual version range.
- **Orphan routes** still sitting on the live domain and indexable: `/case-studies` (legacy, stale stats, superseded by `/work/*`), `/premium-redesign`, `/3d-viewer`, `/products/[id]`. Either delete them or add `noindex`.
- **~30 orphaned components** on disk with no live import (per June audit's list) — pure repo hygiene, zero user-facing effect, but it's the kind of thing that makes the next engineering pass slower.

### ADAPT

- **Case-study depth**, per §2.3 — don't restructure them, just add the two missing UDIT-framework elements (trade-offs, reflection) to the ones that already exist.
- **The "pillar-first" pattern**, per §2.1 — Home is already correctly pillar-first (three expertise cards). Extend the same discipline to what follows: a developer-track visitor shouldn't need to scroll past trainer testimonials to get back to dev proof. This doesn't mean rebuilding IA — it can be as light as re-ordering each pillar page's own sections so the pillar-specific proof (GitHub/live demos for dev, methodology/packages for trainer, case studies for design) comes before the shared site-wide blocks (testimonials, radar, newsletter).
- **The Google Sheets training-portfolio link** → a native `/trainer` section or sub-page, matching the quality bar the rest of that page now has (methodology, packages). It's the one visibly off-brand link left on your strongest page.

### IMPROVE

- **Re-enable `ignoreBuildErrors`/`ignoreDuringBuilds: false`** and fix what surfaces. This is the biggest remaining engineering-rigor gap and it's entirely within your control (no new dependencies, no new infra).
- **Wire the `test:api` / `test:freebies` / `test:routes` scripts into a CI step** (GitHub Actions on push to `main`) — they already exist in `package.json`, they're just not automatically run, which means they can silently rot.
- **Verify the Resend sending domain** — move off `onboarding@resend.dev` to a verified `@dhia-portfolio.com` sender now that the domain is live; sandbox-domain senders have materially worse inbox deliverability, which matters a lot for a contact-form-driven business.

### CHANGE

- **Every hardcoded `dhia-portfolio.me` reference → `dhia-portfolio.com`** — see §1, this is the most urgent item in the entire report. `app/layout.tsx` (metadataBase, OG, 3× JSON-LD), `app/sitemap.ts`, `app/robots.ts`, `app/api/contact/route.ts` (5 occurrences), `.env.example`, `README.md`, and the actual `NEXT_PUBLIC_SITE_URL` / `CONTACT_RECEIVER` values in Vercel's environment variables.
- **Footer nav label "Work" → "Branding & Design"** (or change the top nav instead) — pick one name for one link, per §3.6.

### REPLACE

- **The Google Sheets training-portfolio embed** with a native page/section (see ADAPT above — listing it twice deliberately, because it's both a content-quality issue and a "replace the tool, not just the content" issue: a Sheet is inherently editable/movable by anyone with the link and was already flagged as a minor security smell in v1).
- **`onboarding@resend.dev` as the sender address** with a verified `dhia-portfolio.com` sender (see IMPROVE) — same underlying fix, different lens: this isn't just a deliverability issue, it's a brand-consistency one. Every email from "your business" should come from your domain, not Resend's testing sandbox.

### MOVE

- **The freebies/lead-magnet CTA** — currently a nav item like any other. Every trainer/coach exemplar in this research treats the lead magnet as a top-of-page hook, not a nav destination. Consider surfacing one relevant freebie inline near the top of `/trainer` (you already have "Get free training resources" as a hero button there — good — but the equivalent doesn't exist on `/designer` or `/developer`, where a Brand Brief Template or dev-specific resource could do the same job).
- **Pillar-specific proof before shared/global sections** on each of the three pillar pages (see ADAPT above — same fix, this is the "move" framing of it: nothing needs to be deleted, just reordered).

### STRETCH

- **`next-intl` for real locale routing** (`/fr/about`, proper SSR translation, `hreflang`) if French/Arabic visitors are a real segment worth the engineering investment. I tested this live: toggling to FR on `/designer` correctly translates the nav ("Accueil," "Qui je suis," "Réserver un appel gratuit") and the "trusted by" strip — but the hero headline and subhead ("Design that sells — brand identity, campaigns...", "I conceive digital marketing strategies...") stay in English. So June's "Designer page is hard-coded English" finding is confirmed still true today, specifically for the hero copy — the toggle isn't decorative, it's just incomplete on that page.
- **Per-route OG images via `@vercel/og`** — cheap once you're already fixing the domain-wide OG/metadata issue in §1, and it means your `/work/speranza-cafe` link preview looks like that specific case study, not the generic homepage image.
- **A short, honest "site-as-proof" callout on `/developer`** once the Lighthouse number is real (§4 ADD) — "this site scores X, verified [date]" is exactly the kind of self-referential proof dev-portfolio research (§2.2) rewards, and you're one of the only pillars-in-one-person sites positioned to make that claim credibly.
- **A single "which door do you need?" router at the very top of the homepage**, above even the hero — the Donna Dyer pattern taken one step further: three buttons ("Hire a designer" / "Book training" / "Build a site") that don't just scroll to a card but actually reduce what the visitor sees on the rest of the page to that pillar's proof. This is a bigger lift (real personalization logic) but it's the most complete solution to the multi-hyphenate problem this research turned up, and no exemplar site fully does it yet either — it'd be a genuinely distinctive thing to build, not just catching up to a trend.

---

## 5. Priority order (if you only do a subset)

1. **This week:** fix every `dhia-portfolio.me` reference (§1/§4 CHANGE) — it's mechanical, urgent, and everything else in this report matters less if emails and search results point at a dead domain.
2. **This week:** add the trade-off/reflection paragraph to each existing case study (§4 ADD) — highest content ROI for the lowest effort in the whole report.
3. **This month:** re-enable strict TS/ESLint on build and fix what breaks; wire the existing test scripts into CI; remove the dead deps; verify Resend domain.
4. **This month:** collapse the duplicate testimonial format; cut or fix the radar chart; replace the Google Sheet link.
5. **Later:** pillar-first content reordering, video testimonial, per-route OG images, real Lighthouse number published.
6. **Stretch, when you have real bandwidth:** the homepage "which door" router; `next-intl`.

---

## Sources

- [Discover the Best Web Portfolios – Awwwards](https://www.awwwards.com/websites/winner_category_portfolio/)
- [100 Best Designer Portfolio Websites of 2026 – Muzli](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)
- [21 Best Developer Portfolio Websites (2026) – Colorlib](https://colorlib.com/wp/developer-portfolios/)
- [19 Best Portfolio Design Trends (2026) – Colorlib](https://colorlib.com/wp/portfolio-design-trends/)
- [Portfolio design trends for 2026 – Envato Elements](https://elements.envato.com/learn/portfolio-trends)
- [Personal Websites: 35 Inspiring Examples (2026) – SiteBuilderReport](https://www.sitebuilderreport.com/inspiration/personal-websites)
- [8 UX Mistakes to Avoid on Your UX Portfolio Website – Sarah Doody](https://sarahdoody.medium.com/8-ux-mistakes-to-avoid-on-your-ux-portfolio-website-4d6dd437cf21)
- [Portfolio UX 2026: structure, cases and checklist – UDIT](https://www.udit.es/en/portfolio-ux-2026-estructura-componentes-y-casos-de-estudio-defendibles/)
- Prior work in this repo: `TECHNICAL-AUDIT.md` (June 2026), `dhia-portfolio-deep-report-v2.md` — both still the best record of what changed and why; this document extends rather than replaces them.
