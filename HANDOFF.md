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

## Waiting on Dhia

1. Testimonial photos (Yassine, Oumaima, Youssef, Rayen, Amir, Ikram, Skander):
   add to `public/images/testimonials/<id>.jpg`, then set `photo` in `lib/testimonials.ts`.
2. Graduation and elevator photos: add to the repo and say where they go
   (suggested: graduation near the journey/education section, elevator near contact).
3. Thmanyah font: not on the site. Needs written permission from ask@thmanyah.com,
   or pick an open-licensed alternative.
4. A three-word name for the method, and whether to write longer articles (900+ words).
5. Confirm profile facts in `lib/profile.ts`: "Certified Trainer Entrepreneur Leader"
   (issuer only says "International Certification"), AIESEC in Lebanon (Dec 2023 to
   Jun 2024), YOUGO TRAVEL as the current role, and "with Honors" on the bachelor's.

## Notes

- `scripts/build-og-ar.mjs` and `scripts/build-freebie-pdfs.mjs` need Chrome
  (`CHROME_PATH`; in the cloud, `/opt/pw-browsers` has Chromium).
- Style: no emojis or em-dashes in site copy; commit messages end with the
  Co-Authored-By line.
