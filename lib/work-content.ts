/** Full case study bodies (English). Metadata in lib/work.ts */
export const workContent: Record<string, string> = {
  "speranza-cafe": `Speranza is a Tunisian café that wanted to feel warm, premium, and recognizable on Instagram before anyone walked through the door. The brief was not "make a pretty logo." It was build a system that works on cups, bags, posts, and promos without looking like five different brands.

### The brief

The client needed an identity that reads **local and inviting** but not cheap: gold accents, cream backgrounds, and typography that feels crafted. Social content was being posted daily, so the system had to be easy to reuse, not a one-off export.

### The approach

I started with a **wordmark-first direction**: a serif-leaning logotype that feels hand-crafted, paired with a simple monogram for small sizes (cup sleeves, profile avatars). Gold became the accent, not the background, so photography and food still lead the feed.

Color roles were locked early: cream for backgrounds, deep brown for text, gold for highlights and CTAs. Every social template uses the same grid, type sizes, and margin rules so the feed reads as one brand when you scroll.

### The system in use

![](/images/speranza-benna.jpg)

Packaging and promo posts share the same type hierarchy. Seasonal campaigns (Ramadan, summer drinks) swap photography but keep the frame, logo placement, and accent color.

![](/images/speranza-pasta.jpg)

### Outcome

The identity was adopted across **in-store packaging, Instagram, and seasonal promos**. The client could hand templates to staff without re-explaining fonts or colors each time. That consistency is what made the brand feel established faster than the business age suggested.

**Tools:** Adobe Illustrator, Photoshop, InDesign · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "lone-space": `Lone Space is a creative studio that wanted a **luxurious gold identity** without looking generic. The mark needed to work on dark backgrounds, foil stationery, and digital proposals.

### The brief

Create a full identity: logotype, monogram, business cards, letterhead, and social headers. The client wanted something that feels **premium and minimal**, not loud.

### The logo-mark

I designed a **combination mark**: a geometric monogram paired with a refined wordmark. Gold is used as a spot color for print and as a flat metallic tone for digital. Light and dark versions were built from day one so the logo never gets forced onto the wrong background.

![](/images/lone-space-gold.png)

### Stationery & print

Business cards and letterhead use the same spacing system: generous margins, one accent line, monogram as a subtle watermark on letterhead. Print specs were documented so reprints stay consistent.

![](/images/lone-space-cards.jpg)

![](/images/lone-space-mockup.jpg)

### Outcome

The gold system is used across **cards, letterhead, and client-facing PDFs**. The studio reports that proposals feel more aligned and clients mention the branding before discussing scope.

**Tools:** Illustrator, Photoshop, InDesign · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "tafani-travel": `Tafani Travel needed a mark that reads **trustworthy and modern** on a phone screen and on printed offers. Travel buyers decide quickly; the logo has to feel stable, not trendy for six months.

### The brief

Logo, color system, and social templates for a travel agency operating in Tunisia. The identity must work in Arabic and French contexts without separate redesigns.

### The approach

I pushed for **clarity over decoration**: a clean symbol suggesting movement and connection, paired with a strong sans wordmark. Blue and white anchor trust; a single warm accent prevents the palette from feeling cold.

Templates were built for **Instagram posts and story covers** with fixed logo placement and photo overlay rules so non-designers can publish on busy days.

![](/images/tafani-white-png.png)

### Outcome

Clearer brand recognition on **social and client proposals within the first month** of rollout. Sales material looked aligned instead of a collection of one-off posts.

**Tools:** Illustrator, Figma, Photoshop · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "meetup-pro": `MeetUp Pro 1.0 was a **youth networking event** that needed to sell tickets through social before anyone saw the venue. Visuals had to feel energetic, credible, and shareable.

### The brief

Event branding, social campaign assets, and on-site promotional design. Timeline was tight; templates had to scale across speakers, schedules, and countdown posts.

### The approach

I built a **campaign identity** around bold type, high contrast, and repeatable layouts: speaker cards, countdown stories, and registration CTAs all share one grid. Photography slots were standardized so the team could swap faces without breaking alignment.

![](/images/meetuppro-thumbnail.png)

### Outcome

Strong social traction and **sold-out attendance**. Visuals were reused for follow-up editions because the system was template-based, not one-off exports. For the full event breakdown, see the [detailed MeetUp Pro case study](/case-study/meetup-pro).

**Tools:** Illustrator, Photoshop, Canva · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  "traveltodo-campaign": `TravelTodo needed **one campaign look** across billboard, poster, and Instagram. Without a system, outdoor and social would read as separate brands.

### The brief

Seasonal travel promotion: large-format outdoor mockup, print poster, and feed assets. Emphasis on destination photography with a consistent type and color frame.

### The approach

One **master layout grid**: headline zone, image window, logo lockup, CTA bar. The same grid scales from billboard proportion to square social. Mockups were used to sell the concept before print spend.

![](/images/billboard-48x14-ft-mockup-3.jpeg)

![](/images/affiche-traveltodo.jpg)

### Outcome

**Unified campaign look** across OOH, poster, and Instagram. Client could approve one system instead of three separate designs.

**Tools:** Photoshop, Illustrator · **Full set:** [Behance](https://www.behance.net/dhiaarfa)`,

  digimytch: `DigiMyTech Talent Hub is my **PFE capstone** (Licence MDW, ISET Sousse): a full-stack, AI-powered talent platform built solo in **97 days** at Digimytch SUARL, Ariana. It accompanies Tunisian job seekers from CV creation through interview simulation — with AI embedded at every step, not bolted on as a chat widget. **Graduated with highest honors (Mention Très Bien).**

### Context & problem

At Q1 2026, graduate unemployment in Tunisia reached **24.2%** (INS). Candidates often have strong skills but weak presentation: generic CVs, no objective way to gauge fit before applying, Excel-based tracking, and zero French-language interview prep tools adapted to the local market. International tools like Jobscan and Rezi.ai cover only fragments of this journey.

I conducted field analysis at Digimytch with the CTO, CEO (Product Owner), and mapped four broken steps: CV writing without feedback, subjective job browsing, unstructured application tracking, and no guided interview practice.

### Five integrated modules

1. **Smart CV editor** — Structured editor with streaming AI assistant, PDF/Word/OCR import, high-fidelity PDF export via @react-pdf/renderer, and AI quality scoring by category.
2. **Job matching engine** — Deterministic 0–100 compatibility score (not LLM-generated) with NFD tokenization for accent-insensitive skill matching, plus AI-generated explanation in 3–5 sentences.
3. **Training catalog** — 21 formations ranked by detected skill gaps from matching results — "Recommended for you" instead of a generic list.
4. **Application Kanban** — Four columns (To do, Applied, Interview, Offer) with timestamped status history and soft-delete archiving.
5. **Interview simulator** — 8 dynamically generated questions, voice mode (Web Speech API on Chrome/Edge) or full text fallback, personalized debrief per answer.

![](/images/projects/digimytch/landing.png)

![](/images/projects/digimytch/dashboard.png)

![](/images/projects/digimytch/analyze-offer.png)

![](/images/projects/digimytch/linkedin.png)

![](/images/projects/digimytch/kanban.png)

![](/images/projects/digimytch/formations.png)

### Architecture & stack

Three-tier architecture: **Next.js 15 + React 19 + Tailwind** (presentation), **Server Actions + Zod DTOs** (business logic with Repository pattern), **Supabase PostgreSQL + Storage + JWT Auth** (data with Row Level Security on every user table).

AI layer: **Vercel AI SDK v4** streaming to **OpenRouter Free** models — Kimi K2.6 for CV, Gemma 4 26B for cover letters, Llama 3.3 70B for interviews. Each Server Action validates JWT before calling OpenRouter; responses stream directly to React without a REST middle layer.

### Scrum delivery (5 sprints)

| Sprint | Focus | Key deliverable |
|--------|-------|-----------------|
| Initiation | Backlog, UML, architecture | Product backlog + tech stack locked |
| Sprint 1 | Auth & profile | Magic link auth, RLS profiles, dashboard KPIs |
| Sprint 2 | CV editor | Auto-save editor, PDF export, AI quality score |
| Sprint 3 | AI & matching | Deterministic matching engine, formations catalog |
| Sprint 4 | Kanban & admin | Application tracker, formation import via AI |
| Sprint 5 | Interview AI | Voice simulator, debrief, 109 tests green |

**21 user stories delivered** out of 21 planned. Solo developer on every sprint — conception, code, tests, documentation.

### The interesting technical challenge

The most significant design decision was building the matching score as a **deterministic algorithm** (\`src/lib/matching.ts\`) rather than an LLM call. Same profile + same offer = same score every time — tested explicitly in the test suite. Users can trust and audit the number; the AI only generates the natural-language explanation on top.

Other hard problems: token budget management on free OpenRouter models, Supabase SSR session sync (\`syncProfileToAuthSession\`), and a React state bug causing duplicate formation recommendations (fixed by resetting state between matching calls).

### Quality & security

- **109 automated tests** across 24 files (Node.js native test runner) — all passing at defense
- Rate limiting (60s / 10 requests), CSP, HSTS, prompt injection sanitization via Zod
- RLS on all 10 PostgreSQL tables; admin access via JWT \`app_metadata.is_admin\`

### Measured performance

- Matching score calculation: **< 50 ms** for a 10-skill CV
- AI assistant first token: **< 800 ms**
- CV quality score (generateObject + Zod): **2–4 s**
- Vercel deploy from GitHub push: **< 90 s**

### What I'd do next

Vector search via pgvector to match "JavaScript engineer" with "React/Node developer" beyond lexical matching. Playwright E2E for critical flows. Auto-fill profile on signup from CV parser. Arabic-language models with RTL support.

**Stack:** Next.js 15 · React 19 · TypeScript · Supabase · OpenRouter · Vercel AI SDK · Tailwind · Framer Motion · Vercel  
**Live:** [digimytch-talent-hub.vercel.app](https://digimytch-talent-hub.vercel.app/) · **Code:** [GitHub](https://github.com/dhiaarfa)`,

  "crit-tunisie": `CRIT Tunisie is a **corporate recruitment platform** I helped build during my web developer role (Sep–Dec 2023). The site had to clarify services for both job seekers and client companies without feeling like a generic template.

### The problem

CRIT needed a modern web presence: clear service pages, job offer discovery, and trustworthy contact paths. The legacy experience was hard to navigate on mobile.

### What I built

- Responsive **Next.js** pages with React components
- UI implementation from design direction: service sections, job listings layout, contact flows
- Performance-conscious markup and component structure for maintainability

![](/images/projects/crit/home.png)

![](/images/projects/crit/jobs.png)

![](/images/projects/crit/services.png)

### Outcome

Shipped to **production** at [crit-tunisie.net](https://crit-tunisie.net/). This was my first sustained corporate dev role: real deadlines, stakeholder feedback, and code that other people depend on.

**Stack:** Next.js · React · Tailwind`,

  "best-dates-fruits": `Best Dates and Fruits is a **premium Tunisian dates brand** that needed a credible marketing site: product storytelling, seasonal sections, and clear contact paths for B2B and retail buyers.

### The problem

The brand had strong product photography but no web presence that matched the quality of the product. The site had to feel premium without slow load times or cluttered layout.

### What I built

- **Next.js marketing site** with product-focused sections
- Clean typography and spacing aligned with the brand's warm palette
- Contact and inquiry paths for wholesale and retail

![](/images/bdaf-thumbnail.png)

### Outcome

Live at [bestdatesandfruits.com](https://bestdatesandfruits.com/). A reference for **design-to-code** work: translating visual direction into a shippable site without a heavy CMS.

**Stack:** Next.js · Tailwind`,
}

export function getWorkContent(slug: string): string | undefined {
  return workContent[slug]
}
