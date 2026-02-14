# Website Audit & Improvements Report

**Date:** February 2025  
**Scope:** Full audit of dhia-portfolio-website — performance, SEO, security, UX, content, and marketing.

---

## 1. Performance & Speed

### What Was Done
- **Navigation speed:** Route-level `loading.tsx` added for `/designer`, `/trainer`, `/developer`, `/about` so prefetched routes show an instant loading state instead of a blank screen. `NavbarPrefetch` already prefetches these routes on mount.
- **Link prefetch:** Footer internal links now use `prefetch`; navbar uses `prefetch` (replaced deprecated `prefetch={true}`). Next.js prefetches when links enter the viewport and on hover.
- **CRIT & BD&F modals:** Screenshots use near full viewport width and **72–78vh** min-height so content is readable without zoom. Modal insets reduced (`inset-0` / `inset-2` / `xl:inset-[0.5rem]`) so the modal uses almost the full window. Image `sizes` updated for high-DPI (up to 1800px) for sharper screenshots. Frames use `rounded-xl`, border, and ring so the browser frame clearly fits the image.

### Current Strengths
- **Fonts:** Only 2 font families (Poppins, Sora) with `display: swap` and preload — limits layout shift and request size.
- **Images:** Next.js Image with AVIF/WebP, `optimizePackageImports` for lucide-react and Radix.
- **Global components:** CursorFollower, ScrollNavigation, StickyCtaBar, WhatsAppButton, NavbarPrefetch loaded dynamically (SSR: false) to keep initial bundle smaller.
- **Security headers:** HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy in `next.config.js`.

### Remaining Bottlenecks & Recommendations
| Area | Issue | Recommendation |
|------|--------|----------------|
| **Framer Motion** | Used in many components; adds JS cost on first load. | Keep using it for key moments; for route loading prefer CSS (e.g. `animate-spin`) so segment loadings stay light (already done). |
| **Heavy above-the-fold** | Home hero with multiple motion divs and images. | Ensure LCP image (e.g. photo-dhia.png) has `priority` and reasonable `sizes`; already present. |
| **Third-party** | Calendly, LinkedIn, etc. | Keep external links as `rel="noopener noreferrer"`; consider loading Calendly embed only when in viewport or on click. |
| **Build** | `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors: true`. | Re-enable for CI and fix errors so regressions don’t ship. |

---

## 2. SEO

### Current Strengths
- **Metadata:** `metadataBase`, title template, description, keywords, authors, Open Graph, Twitter cards, theme-color, geo, language.
- **Structured data:** Person and Organization JSON-LD in `layout.tsx`.
- **Sitemap & robots:** `app/sitemap.ts` and `app/robots.ts` with correct `baseUrl`, allow/disallow, sitemap URL.

### Recommendations
- **Per-page metadata:** Ensure each major route (`/about`, `/designer`, `/trainer`, `/developer`) exports `metadata` or `generateMetadata` with unique title and description.
- **FAQ schema:** Add FAQPage JSON-LD for the FAQ section to enable rich results.
- **Image alt & titles:** Consistently use descriptive `alt` and optional `title` on portfolio and project images.
- **Canonical:** Root layout has `alternates.canonical`; add page-specific canonicals if you add more URLs (e.g. case studies).

---

## 3. Security

### Current Strengths
- Security headers in `next.config.js` (HSTS, X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy).
- `poweredByHeader: false`.
- API route uses env vars for credentials (no secrets in client).

### Recommendations
- **Contact API:** Validate and sanitize/escape all user input (name, email, message, etc.) before inserting into HTML emails to prevent HTML injection. Consider a small sanitizer or `textContent`-only usage.
- **Rate limiting:** Add rate limiting to `/api/contact` (e.g. by IP or token) to reduce abuse and spam.
- **CSP (Content-Security-Policy):** Consider adding a strict CSP in report-only first, then enforce. Next.js and inline styles may require `style-src 'self' 'unsafe-inline'` initially; tighten over time.
- **Dependencies:** Run `npm audit` regularly and fix high/critical issues.

---

## 4. UX, Interactivity & CTAs

### Current Strengths
- Clear primary CTA: “Book Free Consultation” (Calendly) in hero, footer, and sticky CTA.
- Secondary CTAs: “Explore My Work”, “Learn More” (About), role-specific links.
- Sticky CTA bar and WhatsApp button for persistent contact options.
- Multilingual (language toggle) and theme (light/dark).
- Touch targets: `min-h-[44px]`, `touch-manipulation` on buttons/links.

### CTA & Marketing Best Practices (from research)
- Use strong verbs: “Book”, “Schedule”, “Get”, “Start” — already in place.
- Place CTAs above the fold, after key content, and in footer — done.
- Add **contextual CTAs** on portfolio/case study pages: e.g. “Want something similar? Let’s talk” on Designer/Developer project modals (CRIT/BD&F already have “Visit Live Site”; consider adding “Discuss a similar project”).
- Sticky or floating CTA — already present (StickyCtaBar).
- One clear primary CTA per section to avoid choice overload.

### Interactivity
- Framer Motion used for modals, cards, and scroll animations.
- CRIT/BD&F modals: improved readability (larger screenshots, full-width frame) so users can evaluate work without zooming.

---

## 5. Content & Features to Consider

- **Case studies:** Dedicated pages for CRIT and BD&F (and future projects) with problem/solution/results and more screenshots.
- **Blog or “Insights”:** Short posts on design, training, or dev to support SEO and authority.
- **Testimonials:** Expand with photos, names, roles, and optional schema (e.g. Review/Recommendation) for rich snippets.
- **Clear “Services” page or section:** Summarize design, training, and dev offerings and link to Calendly.
- **Trust:** Certifications (e.g. CNFCPP), client logos, and numbers (trained participants, hours) are present; keep them up to date.

---

## 6. CRIT & BD&F Project Modals — Changes Made

- **Modal size:** `inset-0` on mobile; `md:inset-3`, `lg:inset-2`, `xl:inset-[0.5rem]` on larger screens so the modal is nearly full-window and screenshots use most of the internal width.
- **Content width:** Replaced `max-w-5xl` with `max-w-[1920px]` so content can use more horizontal space on big screens.
- **Screenshot container:** Each screenshot is in a full-width frame with `min-h-[72vh]` (sm: 75vh, md: 78vh) so the image is large and readable without zoom.
- **Image quality:** `sizes="(min-width: 1920px) 1800px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, 100vw"` so Next.js serves appropriately large images.
- **Frame:** Single `rounded-xl` container with border and ring so the “browser frame” clearly fits the screenshot.

---

## 7. Summary of Code Changes This Session

1. **`components/crit-project-modal.tsx`**  
   Modal insets, content width, screenshot min-height (72–78vh), image `sizes`, and frame styling.

2. **`components/bdaf-project-modal.tsx`**  
   Same modal and screenshot improvements as CRIT.

3. **`app/designer/loading.tsx`**, **`app/trainer/loading.tsx`**, **`app/developer/loading.tsx`**, **`app/about/loading.tsx`**  
   Route-level loading UI (spinner) for instant feedback when navigating to these prefetched routes.

4. **`components/footer.tsx`**  
   Added `prefetch` to internal navigation Links (/, /about, /designer, /trainer, /developer).

5. **`components/navbar-new.tsx`**  
   Replaced `prefetch={true}` with `prefetch` to avoid deprecated prop.

---

## 8. Quick Wins Checklist

- [ ] Re-enable ESLint and TypeScript checks in build (or run in CI only).
- [ ] Add rate limiting and input sanitization to `/api/contact`.
- [ ] Add FAQ schema (FAQPage) for the FAQ section.
- [ ] Add “Discuss a similar project” CTA in CRIT/BD&F modals linking to Calendly or contact.
- [ ] Ensure every main route has unique `metadata` (title + description).
- [ ] Run Lighthouse (Performance, Accessibility, SEO) and fix critical issues.
- [ ] Consider CSP in report-only mode, then refine and enforce.

This audit and the applied changes improve speed (navigation + project modals), align with SEO and security best practices, and set a clear path for further content and CTA improvements.
