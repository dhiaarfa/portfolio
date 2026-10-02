import { formatStat } from "@/lib/profile"

export type FreebieDelivery =
  | { kind: "pdf"; path: string }
  | { kind: "canva"; url: string }

export type Freebie = {
  id: string
  title: string
  category: "design" | "training" | "development"
  emoji: string
  description: string
  format: string
  benefit: string
  color: "pink" | "amber" | "blue"
  bgImage?: string
  delivery: FreebieDelivery
  published: boolean
}

export const freebieCatalog: Freebie[] = [
  {
    id: "brand-brief-template",
    category: "design",
    emoji: "🎨",
    title: "Brand Brief Template",
    description:
      "The exact template I use with every new client to capture their brand vision, audience, and goals before starting any design work.",
    format: "PDF · 3 pages",
    benefit: "Saves 2 hours per project",
    color: "pink",
    bgImage: "/images/freebies/brand-brief.jpg",
    delivery: { kind: "pdf", path: "/freebies/brand-brief-template.pdf" },
    published: true,
  },
  {
    id: "color-palette-guide",
    category: "design",
    emoji: "🎨",
    title: "Color Psychology Guide",
    description:
      "How to choose brand colors that set the right expectation, plus 12 ready-to-use palettes with HEX codes.",
    format: "PDF · 5 pages",
    benefit: "12 palettes with HEX codes",
    color: "pink",
    bgImage: "/images/freebies/color-psychology.jpg",
    delivery: { kind: "pdf", path: "/freebies/color-psychology-guide.pdf" },
    published: true,
  },
  {
    id: "social-media-kit",
    category: "design",
    emoji: "📱",
    title: "Social Media Post Templates",
    description:
      "10 Canva templates for consistent, professional social media content. Arabic and French versions included.",
    format: "Canva template",
    benefit: "Save 3h per week",
    color: "pink",
    delivery: {
      kind: "canva",
      url: "https://www.canva.com/social-media/templates/",
    },
    published: false,
  },
  {
    id: "workshop-plan-template",
    category: "training",
    emoji: "📚",
    title: "Workshop Planning Template",
    description:
      "The session plan structure I use for all my youth development workshops. Includes timing, activities, and facilitation notes.",
    format: "PDF · 4 pages",
    // Was a stale "450+"; the verified figure lives in lib/profile.ts.
    benefit: `Based on ${formatStat("trainingHours")} hours`,
    color: "amber",
    bgImage: "/images/freebies/workshop-planning.jpg",
    delivery: { kind: "pdf", path: "/freebies/workshop-plan-template.pdf" },
    published: true,
  },
  {
    id: "icebreakers-guide",
    category: "training",
    emoji: "🤝",
    title: "20 Youth Icebreaker Activities",
    description:
      "20 icebreakers, energizers and team challenges for groups of 10–100, with steps and debrief tips. Names in Arabic, French and English.",
    format: "PDF · 4 pages",
    benefit: `Tested with ${formatStat("participantsTrained")} youth`,
    color: "amber",
    bgImage: "/images/freebies/icebreakers.jpg",
    delivery: { kind: "pdf", path: "/freebies/icebreakers-guide.pdf" },
    published: true,
  },
  {
    id: "nextjs-supabase-checklist",
    category: "development",
    emoji: "💻",
    title: "Next.js + Supabase Starter Checklist",
    description:
      "The exact checklist I run through when bootstrapping a new Next.js + Supabase project, auth setup, environment variables, database policies, and deployment, in the right order.",
    format: "PDF · 2 pages",
    benefit: "Skip the setup guesswork",
    color: "blue",
    bgImage: "/images/freebies/nextjs-supabase-checklist.jpg",
    delivery: { kind: "pdf", path: "/freebies/nextjs-supabase-checklist.pdf" },
    published: true,
  },
  {
    id: "trainer-checklist",
    category: "training",
    emoji: "✅",
    title: "Pre-Training Checklist",
    description:
      "The 30-point checklist I go through before every training session to guarantee smooth delivery.",
    format: "PDF · 2 pages",
    benefit: "Never forget anything",
    color: "amber",
    bgImage: "/images/freebies/checklist.jpg",
    delivery: { kind: "pdf", path: "/freebies/trainer-checklist.pdf" },
    published: true,
  },
  // Oct 2026: four new freebies built from the positioning research
  // (scripts/freebies/*.html -> scripts/build-freebie-pdfs.mjs).
  {
    id: "brand-consistency-scorecard",
    category: "design",
    emoji: "🎯",
    title: "Brand Consistency Scorecard",
    description:
      "Score your brand on 20 checks in 10 minutes and see exactly where it stops looking like one brand, from Instagram to packaging.",
    format: "PDF · 2 pages",
    benefit: "Self-audit in 10 minutes",
    color: "pink",
    bgImage: "/images/insights/brand-guidelines-that-get-used.jpg",
    delivery: { kind: "pdf", path: "/freebies/brand-consistency-scorecard.pdf" },
    published: true,
  },
  {
    id: "tunisian-marketing-calendar-2027",
    category: "design",
    emoji: "📅",
    title: "Tunisian Marketing Calendar 2027",
    description:
      "Every date and season that moves attention in Tunisia, month by month, with a content idea for each: Ramadan, Eid, summer, harvests, rentrée.",
    format: "PDF · 3 pages",
    benefit: "Plan the year in one sitting",
    color: "pink",
    bgImage: "/images/insights/social-media-visual-consistency.jpg",
    delivery: { kind: "pdf", path: "/freebies/tunisian-marketing-calendar-2027.pdf" },
    published: true,
  },
  {
    id: "training-evaluation-report-pack",
    category: "training",
    emoji: "📊",
    title: "Training Evaluation & Report Pack",
    description:
      "Pre/post self-assessment, participant feedback form and a donor-ready training report template: turn a workshop into results you can report.",
    format: "PDF · 4 pages",
    benefit: "Results funders can read",
    color: "amber",
    bgImage: "/images/trainer/moment-workshop.jpg",
    delivery: { kind: "pdf", path: "/freebies/training-evaluation-report-pack.pdf" },
    published: true,
  },
  {
    id: "website-content-checklist",
    category: "development",
    emoji: "🧭",
    title: "Website Content Checklist",
    description:
      "Outgrown your Facebook page? Everything to prepare before hiring anyone to build your site, including Arabic, French and English pages.",
    format: "PDF · 2 pages",
    benefit: "Weeks, not months",
    color: "blue",
    bgImage: "/images/insights/web-performance-tunisia-hosting.jpg",
    delivery: { kind: "pdf", path: "/freebies/website-content-checklist.pdf" },
    published: true,
  },
]

export function freebieById(id: string): Freebie | null {
  return freebieCatalog.find((f) => f.id === id && f.published) ?? null
}

export function publishedFreebies(): Freebie[] {
  return freebieCatalog.filter((f) => f.published)
}

export function freebieDownloadUrl(f: Freebie): string {
  if (f.delivery.kind === "canva") return f.delivery.url
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dhia-portfolio.com").replace(/\/$/, "")
  return `${base}${f.delivery.path}`
}
