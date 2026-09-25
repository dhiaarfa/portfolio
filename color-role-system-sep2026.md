# Color-Role System — dhia-portfolio.com

One-page reference so a new page/component can't introduce an off-key accent color by accident. Audited against the current live codebase (not aspirational) — this documents what's already the de facto pattern and locks it in.

## The rule

| Color | Means | Where it's used today |
|---|---|---|
| **Green / lime (`--site-accent`, `.btn-green`, `text-accent`)** | Primary brand + every call-to-action | Nav "Book a call" CTA, all "Book/Enquire" buttons, active nav-item underline, footer availability dot, links, focus rings |
| **Pink** | Design discipline tag | "Graphic Designer" role badge, Home's "Design" tile accent, Designer-category insight covers/badges |
| **Amber / orange** | Training discipline tag | "Youth Trainer"/"Certified Trainer" role badge, Trainer nav highlight, Training-category insight covers/badges |
| **Blue** | Development discipline tag | "Web Developer" role badge, Dev-category insight covers/badges, Home's dark "React & Next.js" tile |
| **Slate / neutral** | Structure, text, borders — never a discipline signal | Body copy, card borders, muted labels |

## The one rule that keeps this from drifting

**Green is the only color allowed to mean "click me."** Pink/amber/blue are reserved for discipline identification (which of the three pillars a piece of content belongs to) and must never double as a CTA color — if a future page needs a colored button, it's green, not a pink/amber/blue one borrowed from a discipline tag.

A fourth discipline should not be introduced without extending this table first — that's the actual failure mode this doc exists to prevent.

## Verified consistent as of this pass

- Insights category badges (pink/amber/blue) match the discipline table exactly (`app/insights/InsightsPageClient.tsx`, `categoryColors`).
- Insight cover gradients (`components/insight-article-cta.tsx`) use the same three hues.
- Home's three role tiles (Design/Training/Dev) use pink/amber/blue icon backgrounds matching the table.
- Freebies category badges/filters use the same pink/amber/blue trio (`app/freebies/FreebiesClient.tsx`, `colorMap`).

No off-key 4th accent color found anywhere in the current codebase — this doc is a lock-in, not a fix.
