# Handoff between Claude sessions

Short shared state for whichever Claude session (cloud or PC) works on this
repo next. Update it at the end of every session.

## How to sync

- Cloud sessions push to the branch `main-mae60q`. The live site deploys from `main`.
- To bring cloud work into `main` (PC session):
  `git fetch origin && git checkout main && git merge origin/main-mae60q`,
  then run the checks below and `git push origin main`.
- Checks before every push: `npx tsc --noEmit`, `npx eslint .`, `npx next build`,
  `node scripts/test-routes.mjs`.

## Done in the cloud session (Oct 2026)

- /designer: fourth service card, "Arabic + Latin Identities" (EN/FR/AR).
- /trainer: "Trainer profile" box under the partner logos (languages, topics,
  formats, countries, references), built only from facts already on the site.
- French pages: "Demander un devis" link to the contact form in the /designer
  hero and in the /developer hero (replaces "Discutons" in French only).

Second batch (all 11 items from the "what else" list):

- Contact form: inline errors per field, focus on the first wrong field,
  service preselected per page (training on /trainer, development on /developer).
- /freebies: real first-page previews of each PDF (`scripts/build-freebie-previews.sh`).
- Navbar button follows the page: "Get the templates" on /freebies,
  "Get new posts by email" on /insights (newsletter added at the bottom there).
- Hydration error fixed for visitors with "reduce motion" on (`hooks/use-reduced-motion-safe.ts`).
- Tool icons (Cursor, Angular, NestJS, PHP, Symfony, Jira, PostgreSQL) bundled, no CDN.
- One icon chip style on /trainer and /freebies.
- Tinted sections fade in with a thin green hairline (globals.css, "Section seams").
- Strength chips in `components/value-radar-chart.tsx` show a proof on click.
  The component is still NOT on any page (Dhia removed it from Home on purpose).
- Homepage hero: dot grid lights up around the mouse (mouse only, off with reduce motion).
- Footer: "Latest article" and "New freebie" row, updates itself from the content files.
- Desktop navbar: Freebies and Articles grouped under "Resources" (mobile drawer unchanged).
- Site-wide check: 88 pages, phone and desktop, no errors left.
- Method name "Listen. Shape. Deliver." (FR/AR translated) labels the process
  sections on /designer and /trainer (`methodName` in translations.ts).
- Arabic font: Cairo replaced by IBM Plex Sans Arabic (open license; Thmanyah
  still needs permission). Arabic share cards (public/og/ar) rebuilt with it.
- Accessibility audit (axe-core, 24 pages, EN/FR/AR, light and dark): 0 violations
  left. Fixes: solid green fills use #15803d behind white text (globals.css,
  "html .bg-accent"), readable step numbers and filter counts, valid <dl> in the
  trainer profile, named navbar landmarks, /insights cover links out of the tab
  order, freebie card titles as h2, search dialog title inside the dialog.
  Two French meta descriptions shortened under 160 characters.
- Second audit (performance, security, i18n, SEO, keyboard, no-JS):
  - Removed app/loading.tsx and the 3 route loading.tsx files: on these static
    pages React showed a full-screen "Loading..." overlay first and only swapped
    the content in at the end of the HTML (no content at all without JS).
  - /freebies no longer uses useSearchParams (it forced client-only rendering);
    ?category= is read with useSyncExternalStore after hydration.
  - noscript style in app/layout.tsx shows fade-in sections without JS.
  - LCP cards (first freebie, featured article) skip the fade-in and use
    priority images; /developer hero photo is priority. Throttled-phone LCP:
    /freebies and /insights 5.4s -> 1.8s, /developer 3.4s -> 2.1s.
  - Arabic font self-hosted in public/fonts (@font-face in globals.css),
    preloaded on /ar pages only from app/[locale]/layout.tsx; /ar CLS 0.28 -> 0.10.
  - API: invalid JSON returns 400 (was 500) on /api/contact and /api/chat; contact
    checks the real body size (chunked requests skipped the header check) and
    no longer shows raw zod messages; chat ignores null entries.
  - FR/AR copy for the 6 homepage project cards (data/projects.ts, localizeProject)
    and the 3 /developer side projects (lib/dev-projects.ts); role stat strings.
  - Checked and fine: npm audit (0), security headers, sitemap/hreflang/canonical,
    JSON-LD, keyboard focus and Escape handling, no broken internal links.
  - Not done (recommendation): lib/translations.ts ships all 3 languages to
    every visitor (~220 KB raw); splitting per language would cut JS.

## Waiting on Dhia

1. Testimonial photos (Yassine, Oumaima, Youssef, Rayen, Amir, Ikram, Skander).
   The cloud session cannot reach Dhia's browser, so the PC session (Claude in
   Chrome/Edge, logged into LinkedIn) does this: open each profile linked in
   `lib/testimonials.ts`, save the profile photo into one folder named after the
   person (e.g. `Yassine Bahri.jpg`), then run
   `node scripts/add-testimonial-photos.mjs <that folder>`. It crops to 256x256,
   writes `public/images/testimonials/<id>.jpg` and sets `photo` on each entry.
   Then run the checks and push.
2. Graduation and elevator photos: add to the repo and say where they go
   (suggested: graduation near the journey/education section, elevator near contact).
3. Thmanyah font: not on the site. IBM Plex Sans Arabic is used meanwhile;
   swap in Thmanyah only with written permission from ask@thmanyah.com.
4. Whether to write longer articles (900+ words).
5. Confirm profile facts in `lib/profile.ts`: AIESEC in Lebanon (Dec 2023 to
   Jun 2024), YOUGO TRAVEL as the current role, and "with Honors" on the bachelor's.
   (Entrepreneur Leader issuer confirmed: Pole Etudiant Entrepreneur, University of Sousse.)

## Notes

- `scripts/build-og-ar.mjs` and `scripts/build-freebie-pdfs.mjs` need Chrome
  (`CHROME_PATH`; in the cloud, `/opt/pw-browsers` has Chromium).
- Style: no emojis or em-dashes in site copy; commit messages end with the
  Co-Authored-By line.
