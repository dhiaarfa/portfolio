# dhia-portfolio.me — Deep Comparative Report & Build Plan (v2)

**For:** Cursor (AI agent on this repo) + Mohamed Dhia Arfa  
**Repo:** [github.com/dhiaarfa/portfolio](https://github.com/dhiaarfa/portfolio)  
**Prod:** [dhia-portfolio.me](https://dhia-portfolio.me) (Vercel, Next.js 15 / Tailwind 4)

This builds on **v1** (`dhia-portfolio-audit.md`).  
- **v1** = the trust/correctness audit (data conflicts, dead links, SEO)  
- **v2** = (A) comparative research across your 4 domains, (B) a working freebies system with real links, (C) the Insights articles with sources, (D) new findings cross-referenced with `TECHNICAL-AUDIT.md`, (E) copy-paste case-study templates

**Cursor — how to read this:** Part A is strategy (what the best portfolios in each field do, and the exact gap on Dhia's site). Parts B & C are implementable now — real URLs, file names, and wiring instructions. Part D is the merged backlog. Part E is templates to scaffold. Where a fact is unconfirmed, leave `TODO(owner)` — never invent data or a dead URL.

---

## PART A — COMPARATIVE RESEARCH: what the best are doing in your 4 fields

**Method.** Reviewed large curated roundups and live exemplars across four disciplines — brand/graphic design, training/facilitation/coaching, web development, and marketing/social — drawing on aggregators that each survey dozens-to-hundreds of sites (CaseStudy.Club, Muzli's 100-best, SiteBuilderReport's per-niche galleries of 20–31 each, Webflow/Wix/Hootsuite/Sprout/Copyfolio roundups, Behance/Dribbble search volume, Colorlib, 99designs, Elementor/Paperbell coaching roundups).

Below: the dominant patterns, named exemplars worth copying, and exactly where your site falls short of each.

### A1 — Brand / Graphic Design portfolios

#### What the best consistently do

- Lead with the **single best piece** in the hero, not a wall of thumbnails. (Joe Drakeford, Sagmeister, Angello Torres.)
- Every project tile carries four things: **image · client name · what you did · a link to a real case study or live project.** (Mindy Nguyen's homepage is the textbook version.)
- **Deep case studies** with the thinking, not just pretty results — process, rationale, before/after. The portfolio is "an argument that you can think," not a gallery.
- **The site itself is a work sample.** One disciplined accent + neutrals; the layout demonstrates taste. (Studio Zarach's self-rebrand; Angello Torres treating the page as a design artifact.)
- **Curate ruthlessly.** Industry consensus: don't include weaker work even for a big-name brand — clients assess talent, not logos.
- Behance/Dribbble are supplements, not the destination.

**Named exemplars to study:** Sagmeister ([sagmeister.com](https://sagmeister.com) — leads with work, restrained interactivity), Chermayeff & Geismar & Haviv ([cgandh.com](https://cgandh.com) — KISS, work + contact only), Wolff Olins (brand-consultancy storytelling), Mindy Nguyen, Studio Zarach (self-branding case study).

#### Where dhia-portfolio.me falls short

1. **No case studies** — every one of ~30 gallery tiles links to the same generic [behance.net/dhiaa](https://behance.net/dhiaa). This is the #1 brand-page gap. The best sites give each strong piece its own story (problem → audience → system → result). (Already flagged P0 in v1 as **[C-05]**.)
2. **Volume over curation.** ~30 food-promo/social tiles dilute the few real identity systems (Speranza, Lone Space, Tafani). Cut to your 8–12 strongest; move the rest to an "archive" toggle.
3. **Concept work** (Walmart, etc.) needs honest labelling (`isConceptProject()` exists in `profile.ts` — make sure the badge actually renders on every concept tile).
4. **Presentation quality** of the work itself. Raw exports sit next to mockups. This is where ResourceBoy is genuinely useful — for YOU, not as a giveaway (see Part B0): drop your logos/identities into free PSD mockups so every hero image looks studio-grade.

---

### A2 — Training / Facilitation / Coaching sites

This is your **strongest content area**, and the coaching-web playbook maps onto it almost perfectly.

#### What the best consistently do

- **Niche specificity** beats generalist in both search and conversion — trainers "clearly for a specific client" outperform. Real, human copy (not AI-slop) is now a differentiator in itself.
- **Lead with outcomes/results**, not features. "12 sessions" loses to "the transformation you'll experience."
- A **free resource is the primary lead magnet** and often the first CTA on the page (Mel Robbins opens with "Get My Free Tools"; many coaching sites run a top announcement bar promoting a freebie). ✅ You already have Freebies — but it's buried in nav, not used as the hook.
- **Overwhelming, specific social proof:** named testimonials with role+org, "as seen in"/partner logos, video testimonials, credentials surfaced early (Scott Laidler: "10,000+ coaching hours," named clients; Tony Robbins: celebrity + media logos).
- **Pillar-based navigation** for people with dual/multi expertise — distinct, labelled pathways so a visitor self-selects instantly (Donna Dyer's site splits "Energy" vs "Leadership" — directly the model you need for Design vs Training vs Dev).
- **Packages/"Work With Me" page** stating who each offer is for, what's included, the commitment, and the next step.
- **Video of you in action** raises trust and time-on-page more than any still.

**Named exemplars to study:** Tony Robbins (mega-menu, multiple funnels, the DISC assessment as a lead magnet), Mel Robbins (one "big idea" — the 5-Second-Rule — plus free-tools lead gen), Scott Laidler (authority/results-first), Donna Dyer (pillar UX for dual expertise), Daphne Dickopf (ICF coach — credentials-forward).

#### Where you fall short / what to steal

1. Your **methodology section** already rivals pro coaches (TNA → Kolb → 4MAT → group dynamics → NFE). Feature it harder and link a freebie off it.
2. Add a **"Work With Me / Training Packages"** block with 2–3 named offers (e.g. Half-day workshop, Multi-session program / TOT, Keynote/facilitation) — each: who it's for, what's included, outcome, CTA. Right now there's no productized offer, just a generic contact form.
3. Replace the raw **Google Sheet "Training Portfolio"** with a native page (the sheet is off-brand and was a security flag in v1).
4. Add a **30–60s video** of you facilitating (you already have action photos and the SCORP/TNHRT/Doha material).
5. Surface credentials earlier and resolve the **CNFCPP year conflict** (v1 [C-02] — it appears as 2021/2022/2024).

---

### A3 — Web Development portfolios

#### What the best consistently do

- A **one-line identity** ("design-trained front-end dev shipping production Next.js") + 3–6 strongest projects above the fold; reviewers skim in under 2 minutes and jump to outcomes.
- **Case studies are the unit of credibility:** problem → role → process (incl. the thing that failed) → outcome (numbers or honest qualitative) → reflection. 2–4 deep beats 12 thumbnails.
- **GitHub is non-negotiable** — technical reviewers click it first. A dev portfolio without a visible GitHub reads as a red flag.
- **The site is the proof.** Distinctive, fast, accessible. Standout devs lean into a concept: Brittany Chiang ([brittanychiang.com](https://brittanychiang.com) — minimalist dark, the most-cloned dev portfolio), Tamal Sen (VS-Code-as-portfolio), Bruno Simon (3D WebGL world), Gift Egwuenu / Diogo Correia (personality + subtle motion).
- **Show, don't tell:** link live sites + repos; let the work demonstrate the stack.

#### Where you fall short / what to steal

1. Add **GitHub everywhere** (footer, nav, JSON-LD `sameAs`). `siteConfig.github` already exists per your tech audit but isn't surfaced. (**[ADD-02]**.)
2. **Kill the percentage skill bars** (React 88%, Tailwind 95%…). Technical reviewers distrust self-rated %s. Replace with grouped tags or — better — show skills via the project's stack. (v1 **[UX-03]**.)
3. The **2 dev projects open modals**, not case studies. Give Best Dates & Fruits and CRIT real write-ups: the brief, what you built, screenshots, live link + repo link, and a verified Lighthouse score (you claim "90+ Lighthouse" — prove it, your tech audit says it's unverified).
4. Your **"Learning by Building"** honesty is good but reframe deficit → trajectory. "Design-first developer turning interfaces into clean React/Next.js" rather than "still mastering fundamentals."
5. **The site must earn its own claims:** your `TECHNICAL-AUDIT.md` flags 301 kB home JS, render-blocking Fontshare, `deviceSizes` up to 3840, `ignoreBuildErrors:true`. A developer's portfolio is the work sample — fix these (Part D) or don't make the performance claim.

---

### A4 — Marketing / Social Media portfolios

You have a huge volume of social/marketing design work (food campaigns, billboards, seasonal promos) sitting in the Branding gallery with zero context or metrics — the single biggest missed opportunity on the site.

#### What the best consistently do

- Structure every entry: **goal → strategy → execution → result.** Pair the creative with the number.
- **Business-impact metrics**, never vanity metrics. "Cut cost-per-click 20%" / "doubled LinkedIn CTR" / "grew target-age followers 32%→57%" beats "1,000 likes." (Michelle Gossett pairs post screenshots with specific lifts; Stephen's BuzzFeed study shows reach→revenue; Glow leads with "200M+ engaged, 95% retention.")
- **Curated case studies**, not a scrapbook. Pick campaigns; show before/after.
- Clarify **YOUR role** on team campaigns (vagueness reads as inflation).
- Show process/tools (a glimpse of the content calendar / PM board) and platform-specific examples.
- Client logos + testimonials + "as seen in." (Mark Baroth leads with Netflix/Gatorade/eBay logos and an "award-winning" line.)

#### Where you fall short / what to steal

1. Turn **3–4 of your best social campaigns** into mini case studies with the goal/result framing — even qualitative ("ran the full Ramadan campaign for X café: N posts, +Y% reach/engagement"). You already have one perfect seed: the **+40% engagement at Jasmin** — surface that pattern across the gallery.
2. **Group the marketing work by client/campaign** (Speranza set, Plain Studios set) instead of 30 loose tiles, and label the platform.
3. Add a **"Marketing & Social" service offer** with the goal→result promise, mirroring how agencies (Glow) show a 4-step Discovery→Strategy→Implementation→Optimization process.

---

### A5 — Cross-domain synthesis: the multi-disciplinary playbook

The hardest thing about your site is also your USP: three disciplines in one person. The research says you can win with it if each pillar survives a specialist's 2-minute skim.

**Concretely:**

- Adopt **pillar-based UX** (the Donna-Dyer dual-expertise model, scaled to three): the homepage's three expertise cards should be the primary above-the-fold choice — "Hire a designer · Book a trainer · Build a site" — each routing to a page that stands alone for that specialist.
- Each pillar needs its **own proof in its own language:**
  - Branding → identity case studies + mockup-grade visuals
  - Training → methodology + packages + video (already strongest)
  - Dev → GitHub + live/repo case studies + real Lighthouse
  - Marketing → goal→result campaign studies
- **One disciplined design system** across all (you're 90% there with the green accent — your tech audit notes a stray `#AAFF00` lime focus ring to unify).
- **Lead magnets as the connective tissue:** the Freebies funnel (Part B) is what turns all this traffic into an email list — coaches do this relentlessly; you have the machinery (Resend funnel) but it's underused.

---

## PART B — THE FREEBIES SYSTEM (real working resources + Cursor wiring)

### B0 — First, the strategy (read before wiring anything)

Your freebie copy makes first-person claims: "The exact template I use with every client," "Based on 450+ hours," "Tested with 1000+ youth," "Arabic & French versions included." That means linking visitors to someone else's file would contradict your own copy and read as dishonest.

**So the correct model is:**

- **Own-branded PDFs are the deliverable.** Use the external resources below as (a) reference material to build your own fast, and (b) where appropriate, a directly-linkable resource when the copy is changed to "a resource I recommend."
- For each freebie: real source(s) + build path + exactly how Cursor wires it.

**Two honest delivery modes Cursor should support:**

| Mode | Description |
|------|-------------|
| **Mode A — Own PDF (gated)** | Keep the email-capture modal → `POST /api/contact` `type=freebie` → serve `/public/freebies/<file>.pdf`. Use for the 5 PDF freebies once the files exist. |
| **Mode B — External "Use template" link** | For the Canva social-templates freebie, the deliverable is a Canva "Use template" share link, not a PDF. Capture email, then redirect to the Canva link. |

**The current bug:** the buttons "work" technically (modal + email) but several `/public/freebies/*.pdf` files don't exist / aren't final, so the download is empty. Cursor's job: make every freebie resolve to a real file or a real link. Until a real file exists for a card, **that card must be hidden** (`published: false`).

### B0.1 — What ResourceBoy is actually for

[ResourceBoy](https://resourceboy.com) is a free PSD mockup / design-asset library (logo mockups, packaging, apparel, billboards, Instagram-post templates, fonts, textures). It does **not** host brand briefs, color guides, or training material.

**Use it two ways:**

1. **(Best) To upgrade YOUR portfolio presentation** — drop your real logos/identities into free mockups so every Branding hero looks studio-grade.
   - Logo mockups: https://resourceboy.com/mockups/logo/
   - All mockups: https://resourceboy.com/mockups/
   - Check each file's license (most are free for commercial use; confirm per file).

2. **(Maybe) As a building block for the social-templates freebie** — their Instagram-post templates can seed your own Canva kit. But your own branded templates are far stronger as a lead magnet.

---

### B1 — Freebie catalog (build paths + sources)

#### 1) Brand Brief Template (PDF · 2 pages) — Design

**Real sources (working):**

- HubSpot — 3 free creative/brand brief templates: https://offers.hubspot.com/creative-brief-template
- Canva — creative brief guide + free templates: https://www.canva.com/docs/creative-briefs/
- Typeform — interactive brief (good for an on-site web version later): https://www.typeform.com/templates/creative-brief-template

**Build path (own PDF):** take the standard brief skeleton — Project overview · Background/context · Business goal · Target audience (primary/secondary) · Brand personality & tone · Competitors/references · Deliverables & scope · Timeline & budget · Success criteria — rewrite in your voice, design it in your green system, export `brand-brief-template.pdf` (2 pp).

**Cursor:** place `/public/freebies/brand-brief-template.pdf`; ensure the freebie entry in `lib/site-config.ts` points to it; **Mode A**.

---

#### 2) Color Psychology Guide (PDF · 8 pages · 12 palettes) — Design

**Real tools/sources (working):**

- Coolors palette generator + trending palettes: https://coolors.co/ · https://coolors.co/palettes/trending
- Adobe Color (wheel + extract from image + accessibility check): https://color.adobe.com/
- Canva color wheel & meanings: https://www.canva.com/colors/color-wheel/
- Canva palette generator: https://www.canva.com/colors/color-palette-generator/

**Build path (own PDF):** 8 pages = intro to color psychology (1) + one page per emotion/industry mapping (≈5–6) + 12 ready palettes with HEX (1–2). Generate the palettes in Coolors, verify contrast in Adobe Color, lay out in your system, export `color-psychology-guide.pdf`. Your Insights article #1 (Part C) is the same content repurposed — write once, use twice.

**Cursor:** `/public/freebies/color-psychology-guide.pdf`; **Mode A**.

---

#### 3) Social Media Post Templates (Canva · 10 templates, AR/FR) — Design

This is **Mode B** (a Canva link, not a PDF).

**Real source for inspiration/reference:**

- Canva free social templates: https://www.canva.com/social-media/templates/
- Instagram posts: https://www.canva.com/instagram-posts/templates/

**Build path:** design 10 on-brand post templates in one Canva project → Share → "Template link" (Anyone with the link → Use as template). That generated URL is the deliverable.

**Cursor:** store the Canva "use template" URL in `lib/site-config.ts` (e.g. `freebies[].canvaUrl`); for this card, after email capture, redirect/open the Canva URL instead of triggering a PDF download. Add a `type: "canva"` (or `external: true`) flag on the freebie object so `FreebiesClient.tsx` branches correctly. **Do not ship this card until the real Canva link exists.**

---

#### 4) Workshop Planning Template (PDF · 4 pages) — Training

**Real sources (working):**

- SessionLab workshop templates library: https://www.sessionlab.com/templates/
- SessionLab Kolb-based experiential workshop template (matches your Trainer page's Kolb cycle exactly): browse from the templates library above.
- SessionLab free workshop resources roundup: https://www.sessionlab.com/blog/free-online-workshop-resources/

**Build path (own PDF):** structure = Session objective(s) & TNA notes · Audience & group size · Agenda with timings (Kolb: experience→reflect→conceptualize→apply) · Activities & materials · Facilitator notes · Evaluation.

**Cursor:** `/public/freebies/workshop-planning-template.pdf`; **Mode A**.

---

#### 5) 20 Youth Icebreaker Activities (PDF · 12 pages · AR/FR/EN) — Training

**Real sources (working):**

- SessionLab icebreaker library: https://www.sessionlab.com/library/icebreaker
- "67 engaging icebreakers": https://www.sessionlab.com/blog/icebreaker-games/
- Energizers library: https://www.sessionlab.com/library/energiser

**Build path (own PDF):** pick/adapt 20 you actually run with youth groups. Each: name · group size · time · materials · steps · debrief. Trilingual is a real differentiator — keep it.

**Cursor:** `/public/freebies/youth-icebreakers.pdf`; **Mode A**.

> **Note:** Current repo uses `icebreakers-guide.pdf` — align filename in `site-config.ts` when shipping.

---

#### 6) Pre-Training Checklist (PDF · 1 page · 30 points) — Training

**Real sources (working):** SessionLab blog + facilitation library (above) for checklist items; this is the easiest to make and ship first.

**Build path (own PDF):** 30 checks across room/tech · materials · participant comms · timing · contingencies · follow-up. One page, your branding.

**Cursor:** `/public/freebies/pre-training-checklist.pdf`; **Mode A**.

> **Note:** Current repo uses `trainer-checklist.pdf` — align filename when shipping.

---

### B2 — Technical wiring spec for Cursor (freebies)

1. **Single catalog source of truth.** Keep all freebie metadata in `lib/site-config.ts` (`freebies[]`):
   ```ts
   {
     id, title, category, format, pages, benefit,
     file?: "/freebies/x.pdf",
     canvaUrl?: string,
     type: "pdf" | "canva",
     published: boolean
   }
   ```

2. **`published` gate.** `FreebiesClient.tsx` renders only `freebies.filter(f => f.published)`. A card with no real file/link → `published: false`. No empty downloads ever ship.

3. **Branch delivery by type** in the success handler:
   - `pdf` → programmatic `<a download>` from `file`
   - `canva` → `window.open(canvaUrl)` / redirect
   - Keep the email POST (`/api/contact` `type=freebie`) for both.

4. **Verify the file exists at build.** Add a tiny check (script or test) that every published PDF path resolves in `/public/freebies/`; fail the build if not.

5. **Honest gating + privacy.** Mirror the newsletter's "No spam" line near the email field.

6. **Track conversions.** Fire a Vercel Analytics custom event on each freebie unlock.

7. **Add `/freebies` and `/insights` to `app/sitemap.ts`** — tech audit flags both missing.

---

## PART C — THE INSIGHTS ARTICLES (kill "coming soon" — publish real posts)

Your `TECHNICAL-AUDIT.md` and v1 both flag Insights as a credibility risk: 3 "coming soon" placeholders, no article routes. Either publish or unship. **Publishing is better** (SEO + proof you can write).

**Cursor — implementation:**

- Create real routes `app/insights/[slug]/page.tsx` (or MDX via `@next/mdx`), one per article
- Replace each card's "(coming soon)" with a working internal link
- Add each to `sitemap.ts`
- Add `Article` / `BlogPosting` JSON-LD per post
- Set per-page canonical via existing `lib/page-metadata.ts` helper
- Until a post's body exists, the card stays `published: false` (same pattern as freebies)

---

### Article 1 — "5 Color Mistakes That Kill Your Brand" (Design)

**Outline:**

1. Choosing color by personal taste not audience/positioning
2. Ignoring contrast/accessibility
3. No system (too many colors, no roles)
4. Copying competitors / category clichés
5. Ignoring cultural meaning (highly relevant given your AR/FR/EN, multicultural work)

Close with a CTA to the Color Psychology Guide freebie (Part B-2) → same content, two assets.

**Reference links (working):**

- Adobe Color: https://color.adobe.com/
- Coolors: https://coolors.co/
- Canva color wheel & meanings: https://www.canva.com/colors/color-wheel/

---

### Article 2 — "How to Keep 50 Youth Participants Engaged for 3 Hours" (Training)

**Outline:** energy management as the core facilitation skill; the Kolb loop to reset attention; planned energizers every ~20–30 min; psychological safety; reading the room; the "what will you do differently tomorrow?" close.

This is your expertise — write it first; it's the most authentic and links straight to your Trainer page + the Icebreakers/Workshop freebies.

**Reference links (working):**

- SessionLab energizers: https://www.sessionlab.com/library/energiser
- 67 icebreakers: https://www.sessionlab.com/blog/icebreaker-games/
- Free workshop resources: https://www.sessionlab.com/blog/free-online-workshop-resources/

---

### Article 3 — "Why I Built My Portfolio in Next.js (and Not Webflow)" (Development)

**Outline:** control vs convenience; performance & Core Web Vitals; owning API routes (your Resend contact + freebie funnel is the perfect concrete example); cost; the trade-offs you'd flag honestly (build complexity, the engineering-rigor gaps you're now fixing).

This post doubles as a dev case study of this very site — highest-leverage, lowest-research article you can write.

**Reference links (working):**

- Next.js docs: https://nextjs.org/docs
- Vercel Speed Insights: https://vercel.com/docs/speed-insights
- web.dev CWV: https://web.dev/articles/vitals

---

## PART D — MERGED BACKLOG (TECHNICAL-AUDIT.md + v1, prioritized)

Cross-referencing your own technical audit with the content audits. Items already detailed in v1 keep their IDs.

### P0 — correctness & trust (this sprint)

| ID | Task | Status |
|----|------|--------|
| [C-01] | Homepage stats render 0+ → SSR real value, animate as enhancement, respect reduced-motion | ✅ Done (commit `de3ee1d`) |
| [C-02..04], [C-09] | Resolve data conflicts in `lib/profile.ts`; wire `translations.ts` stats from profile | ⚠️ Partial — `profile.ts` exists, `TODO(owner)` remain, translations not wired |
| [C-06] | Insights/dev/freebie dead-or-empty links; gate every card on real content (`published` flag) | ⚠️ Partial — dev/insights fixed; freebies still need `published` gate |
| [C-07] | Per-page canonical/OG via `page-metadata.ts`; extend to ALL routes | ⚠️ Partial — main routes done; legacy routes not |
| — | Freebies files — ship real PDFs/Canva links or hide cards (Part B) | ❌ Not started |
| — | Sitemap — add `/freebies`, `/insights`, `/case-study/meetup-pro` | ❌ Not started |
| — | Security: rate-limit + honeypot on `/api/contact`; HTML-escape email fields; verified Resend domain | ❌ Not started |

### P1 — substance & engineering rigor (2–4 wks)

| ID | Task |
|----|------|
| [C-05]/[ADD-01] | Build 2–4 real case studies; link existing `app/case-study/meetup-pro` into Designer IA |
| — | Re-enable TypeScript + ESLint in builds (`ignoreBuildErrors`, `ignoreDuringBuilds`) |
| — | Remove dead deps (`nodemailer`), pin `zod` / `@emotion/is-prop-valid`, drop unused Radix |
| — | Delete/archive ~30 legacy components; noindex orphan routes |
| [UX-03] | Replace dev skill % bars with tags |
| [ADD-02] | GitHub in footer/nav + JSON-LD `sameAs` |
| [IA-01] | Unify nav vs footer naming (Branding/Work, etc.) |
| — | De-dupe repeated sections (testimonials twice on home; CTA band twice) |
| — | Insights: publish (Part C) or remove from nav |

### P2 — polish, performance, a11y, i18n

- Performance: reduce `deviceSizes` (drop 3840); self-host fonts; reconsider full `"use client"` pages; verify "90+ Lighthouse" per route
- A11y: radar chart text equivalent; `aria-hidden` on marquee dupes; `aria-pressed` on filters; contrast; focus-visible; iframe titles; reduced-motion on marquees
- JSON-LD: `WebSite`, `BreadcrumbList`, GitHub in `Person.sameAs`; per-route OG via `@vercel/og`
- i18n: finish FR/AR with `next-intl` or hide toggle
- Tests: Playwright smoke tests (nav, forms, no `0+` stats)
- Add branded `not-found.tsx`
- Fix README (Netlify → Vercel)

---

## PART E — CASE-STUDY TEMPLATES (scaffold these; the #1 upgrade)

Create a reusable case-study layout and one entry per pillar. Recommended: MDX (`app/insights` and a new `app/work/[slug]`), or extend the existing `case-study/` route.

Each case study, mobile-first, ~600–1200 words, with this skeleton:

### Universal skeleton (all pillars)

1. **One-line outcome headline** (problem-framed): "Gave Speranza Café one coherent identity across menu, signage & social."
2. **Context** — client, sector, timeframe, your role (be exact; vagueness reads as inflation).
3. **Problem & constraints** (2 short paras).
4. **Process** — 3–5 artifacts (sketches, the rejected direction + why, the system).
5. **Outcome** — visuals + numbers, or honest qualitative ("owner adopted across all branches," "+40% engagement").
6. **Reflection** — one thing you'd do differently.
7. **CTA** — book a call / next case study.

### Per-pillar emphasis (from Part A research)

| Pillar | Emphasis |
|--------|----------|
| **Branding** | before→after, the system (logo/type/color/usage), mockup-grade visuals (ResourceBoy), the rationale |
| **Training** | TNA → design (Kolb/4MAT) → delivery → measured learning outcome; participant quote; photo/video |
| **Development** | brief → what you built → screenshots → live link + GitHub repo → verified Lighthouse → what you'd refactor |
| **Marketing/Social** | goal → strategy → execution (the creatives) → business-impact metric (not likes) → your specific role |

### First three to build (highest ROI)

1. **Speranza or Lone Space** (branding — you have the assets)
2. **A youth program you ran** (training — your strongest proof)
3. **Best Dates & Fruits or CRIT** (dev — add live+repo+Lighthouse)

Link **meetup-pro** (already built at `app/case-study/meetup-pro`) as a 4th immediately.

---

## Appendix — quick links index (all verified working)

### Freebie build sources

| Resource | URL |
|----------|-----|
| Brand brief | https://offers.hubspot.com/creative-brief-template |
| Brand brief (Canva) | https://www.canva.com/docs/creative-briefs/ |
| Brand brief (Typeform) | https://www.typeform.com/templates/creative-brief-template |
| Color (Coolors) | https://coolors.co/ · https://coolors.co/palettes/trending |
| Color (Adobe) | https://color.adobe.com/ |
| Color (Canva) | https://www.canva.com/colors/color-wheel/ |
| Social templates | https://www.canva.com/social-media/templates/ |
| Workshop plan | https://www.sessionlab.com/templates/ |
| Icebreakers | https://www.sessionlab.com/library/icebreaker |
| Mockups (portfolio upgrade) | https://resourceboy.com/mockups/ · https://resourceboy.com/mockups/logo/ |

### Article references

- https://nextjs.org/docs
- https://vercel.com/docs/speed-insights
- https://web.dev/articles/vitals
- https://color.adobe.com/
- https://www.sessionlab.com/library/energiser

### Exemplar portfolios to study

| Domain | Examples |
|--------|----------|
| **Dev** | brittanychiang.com · Tamal Sen (VS-Code style) · Bruno Simon (3D) · Gift Egwuenu |
| **Brand** | sagmeister.com · cgandh.com · Studio Zarach (Behance) · Mindy Nguyen |
| **Coach/Trainer** | tonyrobbins.com · melrobbins.com · Scott Laidler · Donna Dyer (pillar UX) |
| **Social/Marketing** | Michelle Gossett · Wilhelmina Rose · Mark Baroth · Glow (4-step process) |

---

## Related documents in this repo

| File | Purpose |
|------|---------|
| `dhia-portfolio-audit.md` (v1) | Trust/correctness audit — data conflicts, dead links, SEO |
| `TECHNICAL-AUDIT.md` | Full engineering audit — stack, architecture, risks |
| `lib/profile.ts` | Source of truth for stats, certs, experience |
| `lib/page-metadata.ts` | Per-route canonical + OG helper |

---

*End of v2. Use with v1. Don't invent data or links; gate every card on real content; resolve `TODO(owner)` in `profile.ts` first.*
