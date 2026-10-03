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

## Waiting on Dhia

1. Testimonial photos (Yassine, Oumaima, Youssef, Rayen, Amir, Ikram, Skander):
   add to `public/images/testimonials/<id>.jpg`, then set `photo` in `lib/testimonials.ts`.
2. Graduation and elevator photos: add to the repo and say where they go
   (suggested: graduation near the journey/education section, elevator near contact).
3. Thmanyah font: not on the site. Needs written permission from ask@thmanyah.com,
   or pick an open-licensed alternative.
4. A three-word name for the method, and whether to write longer articles (900+ words).

## Notes

- `scripts/build-og-ar.mjs` and `scripts/build-freebie-pdfs.mjs` need Chrome
  (`CHROME_PATH`; in the cloud, `/opt/pw-browsers` has Chromium).
- Style: no emojis or em-dashes in site copy; commit messages end with the
  Co-Authored-By line.
