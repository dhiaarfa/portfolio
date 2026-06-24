# Complete Technical Audit — dhia-portfolio.me

**Repository:** `C:\Users\aser\dhia-portfolio-website`  
**GitHub:** https://github.com/dhiaarfa/portfolio  
**Production:** https://dhia-portfolio.me (Vercel)  
**Latest commit:** `de3ee1d` — P0 audit trust fixes  
**Audit date:** June 2026  
**Purpose:** Full technical reference for another AI agent (Claude) or engineer onboarding

---

## 1. Executive summary

This is a **Next.js 15 App Router** personal portfolio for a multi-disciplinary creative (design, training, web development). It is **above average** for a solo portfolio in ambition, conversion design (freebies, newsletter, Calendly, testimonials), and visual polish. Architecturally it is a **client-heavy React SPA layered on static generation**, with one API route for email.

**Maturity score (honest):** 6.5/10 for production readiness, 8/10 for visual/product ambition, 4/10 for engineering rigor (no tests, build errors ignored, large dead-code surface).

### Strengths

- Modern stack (Next 15, Tailwind 4, TypeScript strict mode declared)
- Clear three-pillar IA (Designer / Trainer / Developer)
- Resend-backed contact pipeline with auto-reply
- Recent introduction of `lib/profile.ts` as a data source of truth
- Security headers in `next.config.js`
- Vercel Analytics + Speed Insights integrated

### Critical weaknesses

- **Zero automated tests**
- **`typescript.ignoreBuildErrors: true`** and **`eslint.ignoreDuringBuilds: true`** — type/lint failures never block deploy
- **~30+ legacy components** not wired to any route
- **Heavy dependency footprint** (full Radix/shadcn suite, Recharts, nodemailer unused, zod unused in API)
- **Partial i18n** — 1000+ strings in `translations.ts` but many pages hard-code English
- **Sitemap incomplete** — missing `/freebies`, `/insights`, case study routes
- **No rate limiting / CAPTCHA** on public POST `/api/contact`
- **Insights page** is placeholder content (credibility risk)

---

## 2. Project identity & deployment

| Field | Value |
|-------|-------|
| Package name | `mohamed-dhia-portfolio` |
| Version | `0.1.0` |
| Node framework | Next.js **15.1.11** |
| React | **18.3.1** |
| Hosting (actual) | **Vercel** (Analytics, Speed Insights) |
| Hosting (README) | Still says **Netlify** — stale |
| Domain | `dhia-portfolio.me` |
| Git remotes | `origin` + `portfolio` → `github.com/dhiaarfa/portfolio` |
| Branch | `main` |
| Static generation | Most routes use `export const dynamic = "force-static"` |

**Deployment flow:** Push to `main` → Vercel auto-build → static pages + one serverless API route.

**Environment variables (`.env.example`):**

```bash
RESEND_API_KEY=
CONTACT_RECEIVER=
NEXT_PUBLIC_SITE_URL=https://dhia-portfolio.me
```

`.env.local` exists locally (not committed). Resend is required at runtime for forms; build succeeds without it because the API initializes Resend lazily.

---

## 3. Technology stack (detailed)

### 3.1 Core framework

**Next.js 15 App Router** with:

- File-based routing under `app/`
- Server Components for page shells + metadata
- Client Components (`"use client"`) for all interactive pages
- Route handlers in `app/api/contact/route.ts`
- Built-in `sitemap.ts`, `robots.ts`
- `next/image` for optimized images
- `next/font/google` for Cairo (Arabic support, `preload: false`)

### 3.2 UI & styling

| Layer | Technology | Version |
|-------|-----------|---------|
| CSS framework | Tailwind CSS | **4.1.18** |
| PostCSS | `@tailwindcss/postcss` | 4.1.9 |
| Animation CSS | `tw-animate-css`, `tailwindcss-animate` | — |
| Component primitives | Radix UI (20+ packages) | ^1.x / ^2.x |
| shadcn/ui pattern | `components/ui/*` | 56 files |
| Icons | `lucide-react` | ^0.460.0 |
| Motion | `framer-motion` | ^11.11.17 |
| Charts | `recharts` | ^2.15.4 |
| Toasts | `sonner` | ^1.7.1 |
| Themes | `next-themes` | ^0.4.4 |
| Class utilities | `clsx`, `tailwind-merge`, `class-variance-authority` | — |

**Typography:**

- Body: **Satoshi** + **Cairo** (Arabic) via Fontshare CDN in `layout.tsx`
- Display: **Clash Display** via Fontshare CDN
- Third-party font request on every page load (performance consideration)

### 3.3 Forms & validation

| Library | Status |
|---------|--------|
| `react-hook-form` | Used only in `components/ui/form.tsx` (shadcn primitive); **ContactForm uses raw useState** |
| `zod` | Listed as `"latest"` in package.json; **not used in API route validation** |
| Manual regex | Email validation duplicated in `contact-form.tsx` and `route.ts` |

### 3.4 Email

| Library | Status |
|---------|--------|
| `resend` ^6.9.3 | **Active** — sole email provider |
| `nodemailer` ^6.9.16 | **Dead dependency** — replaced in commit `836355e` but never removed from package.json |

### 3.5 Analytics

- `@vercel/analytics/next` — page views
- `@vercel/speed-insights/next` — Core Web Vitals

No Google Analytics, Plausible, or custom event tracking.

### 3.6 TypeScript configuration

```json
// tsconfig.json highlights
"strict": true
"target": "ES6"
"moduleResolution": "bundler"
"paths": { "@/*": ["./*"] }
```

Strict mode is enabled in config but **neutralized at build** by `ignoreBuildErrors: true`.

---

## 4. Repository structure

```
dhia-portfolio-website/
├── app/                    # Next.js App Router (34 TSX/TS files)
│   ├── layout.tsx          # Root layout, global metadata, providers
│   ├── page.tsx            # Home
│   ├── globals.css         # Tailwind 4 + design tokens (~680 lines)
│   ├── sitemap.ts          # Partial sitemap
│   ├── robots.ts
│   ├── api/contact/route.ts
│   ├── about/
│   ├── designer/
│   ├── developer/
│   ├── trainer/
│   ├── freebies/
│   ├── insights/
│   ├── case-studies/       # Legacy route, not in nav
│   ├── case-study/meetup-pro/
│   ├── premium-redesign/   # Experimental, not in nav
│   ├── products/[id]/      # 3D product demo, not in nav
│   └── 3d-viewer/          # Experimental
├── components/             # 113 files total
│   ├── ui/                 # 56 shadcn primitives
│   └── *.tsx               # Page sections + legacy
├── hooks/                  # 2 files (use-mobile, use-toast)
├── lib/                    # Core logic (6 files after audit)
│   ├── profile.ts          # ★ Source of truth (stats, certs, experience)
│   ├── site-config.ts      # URLs, social, freebies, stats re-export
│   ├── page-metadata.ts    # Canonical URL helper
│   ├── translations.ts     # ~1000 lines, en/fr/ar
│   ├── motion.ts
│   └── utils.ts
├── public/                 # ~150 static assets (images, PDFs, icons)
├── styles/                 # Additional styles (minimal use)
├── package.json
├── next.config.js
├── tsconfig.json
├── postcss.config.mjs
└── components.json         # shadcn config
```

**Scale:** 113 component files, 150 public assets, 0 test files.

---

## 5. Architecture & rendering model

### 5.1 Pattern

```
┌─────────────────────────────────────────────────────────┐
│  app/layout.tsx (Server)                                │
│  ├── ThemeProvider                                      │
│  ├── LanguageProvider                                   │
│  ├── MotionProvider                                     │
│  ├── {children} ← page.tsx (Server) → *Client.tsx       │
│  ├── GlobalComponents (dynamic, ssr:false)              │
│  ├── Analytics + SpeedInsights                          │
│  └── Toaster                                            │
└─────────────────────────────────────────────────────────┘
```

Almost every user-facing page follows:

1. `app/<route>/page.tsx` — exports `metadata`, renders `*Client.tsx`
2. `*Client.tsx` — full page UI, `"use client"`, imports Navbar + Footer
3. Data: mix of `lib/profile.ts`, `lib/site-config.ts`, inline arrays, `translations.ts`

**There is no global state manager** (no Redux, Zustand, Jotai). State is local `useState` per component.

### 5.2 Data layer (post-audit)

| Source | Responsibility |
|--------|----------------|
| `lib/profile.ts` | Stats, certifications, experience timelines, concept project titles, training milestones |
| `lib/site-config.ts` | Calendly, WhatsApp, email, social URLs, Behance embeds, freebies catalog, stats numeric re-export |
| `lib/translations.ts` | UI copy in EN/FR/AR (~1000 lines) |
| Inline JSX arrays | Designer gallery (~30 items), legacy pages |

**Gap:** `translations.ts` still embeds hardcoded stats strings (`1000+`, `450+`) that can drift from `profile.ts`. Not all pages consume `profile.ts` yet.

### 5.3 API surface

Single endpoint: **`POST /api/contact`**

Handles 3 `type` values:

| type | Behavior |
|------|----------|
| `contact` | Notify owner via Resend + auto-reply to sender |
| `newsletter` | Notify owner only |
| `freebie` | Notify owner of download; client triggers file download locally |

No GET routes. No database. No CMS. No auth.

---

## 6. Routing inventory

### 6.1 Production routes (in navigation)

| Route | Server file | Client file | Static | In sitemap |
|-------|-------------|-------------|--------|------------|
| `/` | `app/page.tsx` | `HomePageClient.tsx` | ✓ | ✓ |
| `/about` | `app/about/page.tsx` | `AboutPageClient.tsx` | ✓ | ✓ |
| `/designer` | `app/designer/page.tsx` | `DesignerPageClient.tsx` | ✓ | ✓ |
| `/trainer` | `app/trainer/page.tsx` | `TrainerClientPage.tsx` | ✓ | ✓ |
| `/developer` | `app/developer/page.tsx` | `DeveloperPageClient.tsx` | ✓ | ✓ |
| `/freebies` | `app/freebies/page.tsx` | `FreebiesClient.tsx` | ✓ | **✗** |
| `/insights` | `app/insights/page.tsx` | (inline) | ✓ | **✗** |

### 6.2 Orphan / legacy routes (not in nav)

| Route | Purpose | Risk |
|-------|---------|------|
| `/case-studies` | Old portfolio grid with stale stats (`934+`, `#coming-soon` links) | SEO duplicate, outdated data |
| `/case-study/meetup-pro` | One real case study | Good content, not linked from main IA |
| `/premium-redesign` | Design experiment with duplicate hardcoded experience | Dead end |
| `/products/[id]` | 3D product viewer demo (3 SKUs) | Unrelated to portfolio |
| `/3d-viewer` | 3D viewer experiment | Dead weight |

These routes **still build and are indexable** unless blocked in robots (they are not).

### 6.3 Special files

- `app/loading.tsx`, `app/error.tsx`, `app/global-error.tsx` — exist
- **No custom `not-found.tsx`** verified at root (audit flagged this)

---

## 7. Page-by-page technical breakdown

### 7.1 Home (`/`)

**Components wired:**  
`Navbar`, `StatsSection`, `ClientLogosStrip`, expertise bento cards, `ServicePackages`, `ValueRadarChart`, `TestimonialsTicker`, `FAQSection`, `NewsletterSection`, `Footer`

**Data sources:**

- Hero micro-stats → `formatStat()` from `profile.ts` (post-audit)
- Expertise cards → `translations.ts` role stats
- Floating card → `siteConfig.stats.participants`
- Stats section → `profile.ts` via `homepageStatsRow`

**Known issues:**

- Testimonials appear twice (marquee + card section) — IA duplication
- `ValueRadarChart` uses decorative numeric scores (95, 92, 98…) — no data backing, a11y concern
- FAQ accordions — verify answers render (audit flagged headings-only in static fetch)

**Bundle weight:** Largest page (~301 kB First Load JS per build output)

### 7.2 About (`/about`)

**Sections:** Hero, core values, education timeline, certifications, skills grid, impact stats bar, experience timeline, contact form

**Data:** Fully wired to `profile.ts` for certs, experience, stats (post-audit)

**Client-only:** Full page is `"use client"` despite mostly static content — missed SSG optimization opportunity for body content

### 7.3 Designer (`/designer`)

**Largest page file:** `DesignerPageClient.tsx` (~864 lines)

**Contains inline:**

- `galleryProjects` array (~30 items) — all link to Behance profile URL, not individual projects
- `projects` featured carousel
- `workExperience`, `certifications` — now partially from `profile.ts`
- `designPhilosophy`, tool skill percentages

**Post-audit:** Concept badge on gallery items via `isConceptProject()`

**Embeds:** `SocialEmbedsSection` — Instagram profile iframe + Behance project embeds from `siteConfig.socialEmbeds`

**Performance risk:** Gallery loads many full-resolution images; `next.config.js` allows `w=3840`

### 7.4 Trainer (`/trainer`)

**Best content page.** Components:

- `TrainerClientPage` hero with photo overlay
- Impact metrics grid
- Journey timeline → `trainingMilestones` from `profile.ts`
- `TrainingMethodologySection` — pedagogical frameworks (Kolb, 4MAT, NFE)
- `CertificationsSection` — credentials + international events photos
- `TrainerCapabilities`
- Contact form

**External link:** Google Sheets training portfolio (view-only URL post-audit)

### 7.5 Developer (`/developer`)

**Nested layout:** `app/developer/layout.tsx` adds **duplicate metadata** (title/description) that merges with page metadata — potential SEO title conflict

**Features:**

- Terminal-aesthetic hero
- Experience cards from `developerExperience` in `profile.ts`
- Project cards: Best Dates & Fruits, CRIT Tunisie — open modals (`CritProjectModal`, `BdafProjectModal`) instead of external links
- Skill percentage bars (88%, 95%, etc.) — audit recommends removing
- `#projects` anchor added post-audit

**Missing:** GitHub link in footer/nav despite `siteConfig.github` existing

### 7.6 Freebies (`/freebies`)

**Lead magnet funnel:**

1. User clicks freebie card
2. Modal collects name + email
3. POST `/api/contact` type=`freebie`
4. On success, programmatic `<a download>` triggers PDF from `/public/freebies/`

**Gap:** No server-side email validation beyond regex; no double opt-in; download happens client-side only (email capture is notification-only, not gating server-side)

### 7.7 Insights (`/insights`)

**Status:** Placeholder. Three articles with "Coming soon" text, no routes for individual articles, stale dates removed post-audit. **Actively hurts credibility** if left public in nav.

---

## 8. Component architecture

### 8.1 Active components (imported by live routes)

| Component | Used on |
|-----------|---------|
| `navbar-new.tsx` | All main pages |
| `footer.tsx` | All main pages |
| `contact-form.tsx` | About, Designer, Trainer, Developer, MeetUp case study |
| `stats-section.tsx` | Home |
| `certifications-section.tsx` | Trainer |
| `training-methodology-section.tsx` | Trainer |
| `trainer-capabilities.tsx` | Trainer |
| `client-logos-strip.tsx` | Home |
| `service-packages.tsx` | Home |
| `value-radar-chart.tsx` | Home |
| `faq-section.tsx` | Home |
| `newsletter-section.tsx` | Home |
| `testimonials-ticker.tsx` | Home |
| `social-embeds-section.tsx` | Designer |
| `training-impact-chart.tsx` | Designer |
| `crit-project-modal.tsx` | Developer |
| `bdaf-project-modal.tsx` | Developer |
| `global-components.tsx` | Root layout |
| `cursor-follower.tsx` | Global (dynamic) |
| `scroll-navigation.tsx` | Global (dynamic) |
| `whatsapp-button.tsx` | Global (dynamic) |
| `navbar-prefetch.tsx` | Global (dynamic) |
| `theme-toggle.tsx` | Navbar |
| `language-toggle.tsx` | Navbar |

### 8.2 Legacy / orphaned components (not imported by main routes)

These exist on disk and increase repo noise; grep shows **no imports** from main app routes:

- `hero-section.tsx`, `experience.tsx`, `education.tsx`, `engagement.tsx`
- `civic-work.tsx`, `portfolio.tsx`, `graphic-portfolio.tsx`, `graphic-design-marketing.tsx`
- `professional-profile.tsx`, `about-section.tsx`, `about-agency.tsx`
- `formations.tsx`, `skills.tsx`, `services.tsx`, `features.tsx`
- `marketing-section.tsx`, `team-section.tsx`, `organizations-section.tsx`
- `3d-showcase.tsx`, `portfolio-3d-viewer.tsx`, `product-showcase.tsx`
- `cta-section.tsx`, `sticky-cta-bar.tsx` (may be unused)
- Premium variants used only by `/premium-redesign`

**Recommendation:** Delete or move to `_archive/` to reduce confusion.

### 8.3 shadcn/ui (`components/ui/`)

56 primitives installed. **Most are unused** in production pages. Only actively used subset includes:  
`button`, `card`, `sonner`, `motion`, `form`, `chart` (possibly), dialog variants

This is typical shadcn bloat — ~200KB+ potential dead code in bundle tree (mitigated partially by `optimizePackageImports`).

---

## 9. State management & providers

### 9.1 ThemeProvider (`next-themes`)

```tsx
// app/layout.tsx
defaultTheme="light"
enableSystem={false}
storageKey="theme-preference"
themes={["light", "dark"]}
```

Manual light/dark only. Class-based (`attribute="class"`). Global CSS transitions on `body *` for theme switch.

### 9.2 LanguageProvider

- Languages: `en`, `fr`, `ar`
- Storage: `localStorage.language`
- RTL: Sets `document.documentElement.dir` for Arabic
- **`t()` function:** Looks up keys in `translations.ts`; unknown keys return the key string
- **Coverage gap:** Designer, Developer, Insights, Freebies pages are mostly hard-coded English
- Toggle exists in navbar but many sections won't translate

### 9.3 MotionProvider

Wraps Framer Motion context (likely reduced-motion or page transition config — check `components/motion-provider.tsx`).

### 9.4 GlobalComponents (client-only, lazy)

Dynamic imports with `ssr: false`:

- Cursor follower (desktop enhancement)
- Scroll-to-top / section nav
- WhatsApp floating button
- Route prefetch helper

**Trade-off:** Saves ~50KB initial SSR payload but loads after hydration.

---

## 10. Styling & design system

### 10.1 Tailwind CSS v4

Uses new `@import "tailwindcss"` syntax in `globals.css`, not legacy `tailwind.config.js` (file may not exist or be minimal).

**Custom variants:**

```css
@custom-variant dark (&:is(.dark *));
```

### 10.2 Design tokens

| Token | Light | Dark |
|-------|-------|------|
| `--site-accent` | `#16a34a` | `#22c55e` |
| `--zia-lime` / `--zia-green` | HSL vars in layout | — |
| shadcn HSL vars | `--background`, `--foreground`, etc. | overridden in `.dark` |

**Utility classes defined in CSS:**  
`.label`, `.card-base`, `.btn-green`, `.btn-outline`, `.chip-*`, `.bg-section-tint`, `.bg-section-subtle`

### 10.3 Visual effects

- Noise texture overlay on `body::before` (fixed, z-index 9999, pointer-events none)
- Framer Motion: page entrances, hover lifts, nav pill `layoutId`, stat counters
- Marquees: client logos, testimonials

### 10.4 Inconsistencies

- Nav says "Branding" / footer says "Work" for `/designer`
- Accent color unified to green (recent commit `4cb03f6`) but contact form focus ring still uses `#AAFF00` (lime)
- README says pink/amber/blue role colors; site now mostly green-accent unified

---

## 11. Internationalization (i18n)

**Implementation type:** Custom context + JSON-like object (`lib/translations.ts`), **not** `next-intl` or `next-i18next`.

**Structure:**

```ts
translations = { en: {...}, fr: {...}, ar: {...} }
```

**~330+ keys per language**, including navigation, hero, about, trainer-specific, footer, FAQ, certifications, events

**Problems:**

1. **No route-based locale** (`/fr/about`) — client-side only
2. **No SSR translation** — initial HTML is English; flash on language switch possible
3. **Hardcoded English** across Designer (~864 lines), Developer, Insights, Freebies hero copy
4. **Stats duplicated** in translation strings vs `profile.ts`
5. **SEO:** No `hreflang` alternates in metadata

**Language toggle:** Functional for keys that call `t()`. Decorative for pages that don't.

---

## 12. Forms, email & integrations

### 12.1 Contact form (`components/contact-form.tsx`)

- Client validation: name, email regex, message required
- POST body: `{ name, email, subject: service, message, type: "contact" }`
- Service dropdown: design / development / training / other
- UX: Sonner toasts + inline success/error states
- Labels: proper `<label htmlFor>` — good a11y

### 12.2 API route (`app/api/contact/route.ts`)

**Flow:**

1. Parse JSON body
2. Validate email presence + regex
3. Check `RESEND_API_KEY`
4. Branch on `type`
5. Send HTML email to `CONTACT_RECEIVER` (default: mohameddhiaarfa@gmail.com)
6. For contact: fire-and-forget auto-reply to sender

**From address:** `onboarding@resend.dev` (Resend free tier sandbox domain)

**Security gaps:**

| Issue | Severity |
|-------|----------|
| No rate limiting | High — spam/abuse vector |
| No CAPTCHA / honeypot | High |
| No CSRF token | Medium (same-site fetch) |
| No Zod schema validation | Low |
| No request size limit | Medium |
| HTML injection in email templates | Low — user input interpolated into HTML without escaping |
| Emoji in email subjects | Cosmetic |

**XSS in email HTML:** `name`, `message`, `subject` inserted raw into HTML strings (lines 47–70). A malicious sender could inject HTML into the owner's inbox email. Should use HTML escaping.

### 12.3 Newsletter (`components/newsletter-section.tsx`)

Posts `{ email, type: "newsletter" }` — no double opt-in, no mailing list provider (Mailchimp etc.). Owner gets email notification only.

### 12.4 Freebies (`FreebiesClient.tsx`)

Posts freebie download notification; file served from `/public/freebies/*.pdf`. Unlock state stored in component state only (lost on refresh — user can re-download by re-entering email).

### 12.5 External integrations

| Service | Config location | Status |
|---------|----------------|--------|
| Calendly | `siteConfig.calendlyUrl` | Linked from CTAs |
| WhatsApp | `siteConfig.whatsappNumber` | Floating button |
| Resend | `RESEND_API_KEY` env | Required for forms |
| Behance embeds | `siteConfig.socialEmbeds` | iframe embeds |
| Instagram embed | Profile iframe | May break if IG blocks |
| Google Sheets | Training portfolio view URL | External |

---

## 13. SEO & discoverability

### 13.1 Metadata architecture

**Root layout (`app/layout.tsx`):**

- `metadataBase: https://dhia-portfolio.me`
- Global title template: `%s | Mohamed Dhia Arfa`
- OpenGraph defaults
- **Canonical removed from root** (post-audit) — correct

**Per-page:** `pageMetadata()` helper sets `alternates.canonical` + `openGraph.url`

**Gap:** Root layout still sets `openGraph.url: https://dhia-portfolio.me` globally — child pages override via their own metadata export, but verify merge behavior doesn't leak homepage OG URL on subpages.

### 13.2 Structured data

Two JSON-LD blocks in `layout.tsx` `<head>`:

1. `Person` schema — name, jobTitle, sameAs (LinkedIn, Behance only — **GitHub missing**)
2. `Organization` schema — Zia Studio

**Missing schemas (audit flagged):**

- `WebSite` with `SearchAction`
- `BreadcrumbList` per page
- `ProfessionalService` or separate profiles per discipline

### 13.3 Sitemap (`app/sitemap.ts`)

Only 5 URLs. **Missing:** `/freebies`, `/insights`, `/case-study/meetup-pro`

All `lastModified: new Date()` — regenerates on every build (fine).

### 13.4 Robots (`app/robots.ts`)

Allows `/`, disallows `/api/`, `/_next/`, `/admin/` (admin doesn't exist).

### 13.5 OG images

Default: `/images/photos/dhia-main.png` declared as 1200×630 in layout but file may be different aspect ratio. No dynamic `opengraph-image.tsx` per route.

---

## 14. Performance

### 14.1 Build output (from last successful build)

| Route | First Load JS |
|-------|---------------|
| `/` | 301 kB |
| `/designer` | 295 kB |
| `/developer` | 197 kB |
| `/trainer` | 200 kB |
| `/about` | 195 kB |
| Shared | 106 kB |

Home and Designer are **heavy** for a portfolio.

### 14.2 Optimizations present

- `next/image` with AVIF/WebP formats
- `compress: true`
- `optimizePackageImports` for lucide + radix
- Dynamic import for global client widgets (`ssr: false`)
- `minimumCacheTTL: 30 days` for images
- Static generation on main routes

### 14.3 Anti-patterns

| Issue | Impact |
|-------|--------|
| Fontshare CSS render-blocking | FOUT, extra RTT |
| `deviceSizes` includes **3840** | Oversized gallery downloads |
| Full `"use client"` pages | Larger JS bundles, less static HTML |
| Framer Motion everywhere | Animation JS cost |
| Recharts on home (radar) + designer (impact chart) | Chart library weight |
| Cursor follower | Continuous RAF on desktop |
| Global CSS transition on `body *` | Layout thrashing on theme toggle |
| `@emotion/is-prop-valid` at `"latest"` | Unpinned dependency, potential breakage |

### 14.4 Claims vs reality

Developer page claims "90+ Lighthouse" — **not verified in CI**. With 301 kB home bundle and third-party fonts, verify manually per route.

---

## 15. Security

### 15.1 Headers (`next.config.js`)

Good baseline:

- HSTS with preload
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy (camera/mic/geo denied)

**Missing:**

- Content-Security-Policy (CSP)
- Cross-Origin policies

### 15.2 Secrets exposure

- `.env.local` gitignored ✓
- `siteConfig` exposes public URLs only ✓
- Phone/email in footer and schema — intentional public contact info
- Google Sheets ID in URL — public view-only post-audit ✓

### 15.3 Dependencies

- `@emotion/is-prop-valid: "latest"` — **dangerous pin**
- `zod: "latest"` — **dangerous pin**
- No `npm audit` evidence in repo

### 15.4 API abuse surface

`POST /api/contact` is the only attack surface. Recommend:

- Vercel rate limiting or Upstash Redis counter
- Honeypot field
- Resend domain verification (move off `onboarding@resend.dev`)

---

## 16. Accessibility

### 16.1 Good practices observed

- Semantic headings on most pages (one h1 per page generally)
- Form labels with `htmlFor`
- `aria-label` on social icon links in footer
- Counter `aria-label` with final value (post-audit)
- Touch targets `min-h-[44px]` on form inputs
- RTL support for Arabic

### 16.2 Gaps (audit + code review)

| Issue | Location |
|-------|----------|
| Radar chart no text equivalent | `value-radar-chart.tsx` |
| Marquee duplicate content for screen readers | `client-logos-strip`, `testimonials-ticker` |
| Reduced motion partially handled | Stats counter yes; marquees unclear |
| Color contrast on slate-500 body text | Multiple pages |
| Focus visible on custom pill buttons | Navbar, gallery filters |
| Gallery filter buttons | No `aria-pressed` state |
| Language toggle | May not announce locale change |
| Instagram/Behance iframes | Title attributes missing |

---

## 17. Dependencies audit (bloat analysis)

### 17.1 Likely unused in production

| Package | Evidence |
|---------|----------|
| `nodemailer` + `@types/nodemailer` | Replaced by Resend |
| `zod` | Not imported in API |
| `react-hook-form` | Only in unused shadcn form wrapper |
| `input-otp` | No OTP UI |
| `react-day-picker` | No date picker pages |
| `embla-carousel-react` | Check usage — likely minimal |
| `vaul` | Drawer component — check usage |
| `cmdk` | Command palette — likely unused |
| Many `@radix-ui/*` | Only subset used |

### 17.2 Pinning concerns

```json
"@emotion/is-prop-valid": "latest"
"zod": "latest"
```

These should be pinned to semver ranges for reproducible builds.

---

## 18. Testing & quality gates

| Area | Status |
|------|--------|
| Unit tests | **None** |
| E2E tests | **None** |
| Visual regression | **None** |
| Typecheck in CI | **Disabled** (`ignoreBuildErrors: true`) |
| ESLint in CI | **Disabled** (`ignoreDuringBuilds: true`) |
| Pre-commit hooks | **None detected** |
| Storybook | **None** |

**`npm run lint`** exists but doesn't block production builds.

This is the single biggest engineering risk: regressions ship silently.

---

## 19. Configuration deep dive

### 19.1 `next.config.js` (critical flags)

```js
eslint: { ignoreDuringBuilds: true }      // ⚠️
typescript: { ignoreBuildErrors: true }    // ⚠️
experimental: {
  optimizePackageImports: ["lucide-react", ...]
}
images: {
  deviceSizes: [..., 3840],  // ⚠️ very large
  remotePatterns: [vercel-storage blob]
}
```

### 19.2 `lib/profile.ts` — source of truth

Centralizes:

- 8 stat objects with value/suffix/label
- 6 certifications
- 3 experience arrays (about, developer, design)
- 4 training milestones (chronological)
- 7 concept project titles

**Owner TODOs still in code** — ambiguous facts not fully resolved.

### 19.3 `lib/page-metadata.ts`

Clean helper — 37 lines, sets canonical + OG URL per route. Should be extended to all routes including legacy ones if they remain public.

---

## 20. Git history & evolution

Recent commits tell the story:

| Commit | Meaning |
|--------|---------|
| `de3ee1d` | P0 audit: profile.ts, canonical, counters, concept labels |
| `4cb03f6` | Vercel Analytics + unified green accent |
| `836355e` | Gmail/Nodemailer → Resend |
| `d3f7fe0` | Font loading perf |
| `1bde389` | Force static generation |
| `9b19a0b` | i18n, forms, SEO batch |

Project evolved fast with feature additions; cleanup lagged (legacy components, unused deps, README drift).

---

## 21. Risk register

| ID | Risk | Likelihood | Impact | Mitigation |
|----|------|------------|--------|------------|
| R1 | API spam/abuse | High | Medium | Rate limit + honeypot |
| R2 | Type errors in prod | Medium | Medium | Enable strict build |
| R3 | Stats drift (translations vs profile) | Medium | High | Wire translations to profile.ts |
| R4 | Stale legacy routes indexed | Medium | Medium | Remove or noindex |
| R5 | Insights placeholder hurts trust | High | Medium | Unship or publish |
| R6 | Email HTML injection | Low | Medium | Escape user input |
| R7 | Resend sandbox domain deliverability | Medium | High | Verify custom domain |
| R8 | Gallery performance on mobile | Medium | Medium | Image sizes prop, reduce 3840 |
| R9 | i18n half-implemented erodes trust | Medium | Low | Hide toggle or finish FR/AR |
| R10 | No tests — regressions on deploy | High | High | Add smoke E2E |

---

## 22. Recommendations roadmap

### Immediate (1 week)

1. **Enable TypeScript + ESLint in builds** — remove ignore flags, fix errors
2. **Remove `nodemailer`, pin `zod` and `@emotion/is-prop-valid`**
3. **HTML-escape** user input in `route.ts` email templates
4. **Add rate limiting** to `/api/contact`
5. **Update README** — Vercel not Netlify; document `lib/profile.ts`
6. **Complete sitemap** — add freebies, insights, meetup-pro
7. **Resolve `TODO(owner)`** items in `profile.ts`

### Short-term (2–4 weeks) — P1 from content audit

1. Build 2–4 real case study routes (MDX or dedicated pages)
2. Delete or archive ~30 legacy components
3. Unify nav/footer naming (Branding vs Work)
4. Replace developer skill % bars with tags
5. Publish or remove Insights from nav
6. Add GitHub to footer + JSON-LD `sameAs`
7. Wire `translations.ts` stats from `profile.ts`

### Medium-term (1–3 months)

1. **`next-intl`** for proper locale routing if FR/AR matter
2. **CSP headers**
3. **Playwright smoke tests** — forms, nav, counter values
4. **Per-route OG images** via `@vercel/og`
5. **Bundle analysis** — drop unused Radix packages
6. **Custom 404 page** with navigation
7. **Move gallery data** to `profile.ts` or CMS

---

## 23. Quick reference for Claude

When working on this repo, treat these as canonical:

| Concern | File |
|---------|------|
| Stats, dates, experience | `lib/profile.ts` |
| URLs, social, freebies | `lib/site-config.ts` |
| SEO canonical helper | `lib/page-metadata.ts` |
| UI strings (EN/FR/AR) | `lib/translations.ts` |
| Email API | `app/api/contact/route.ts` |
| Global providers | `app/layout.tsx` |
| Design tokens | `app/globals.css` |
| Nav links | `components/navbar-new.tsx` lines 11–18 |

**Do not** hard-code stats in JSX. **Do not** add canonical to root layout. **Do not** assume i18n covers all pages. **Do not** trust build success as type safety.

**Active page clients:** `HomePageClient`, `AboutPageClient`, `DesignerPageClient`, `TrainerClientPage`, `DeveloperPageClient`, `FreebiesClient`.

**Production domain:** `https://dhia-portfolio.me`  
**GitHub:** `https://github.com/dhiaarfa/portfolio`

---

*End of technical audit. This document reflects codebase state at commit `de3ee1d` (June 2026).*
