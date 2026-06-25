export type FreebieDelivery =
  | { kind: "pdf"; path: string }
  | { kind: "canva"; url: string }

export type Freebie = {
  id: string
  title: string
  category: "design" | "training"
  emoji: string
  description: string
  format: string
  benefit: string
  color: "pink" | "amber"
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
    format: "PDF · 2 pages",
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
      "How to choose brand colors that actually communicate the right emotion. Includes 12 ready-made palettes used in real projects.",
    format: "PDF · 8 pages",
    benefit: "Used in 50+ projects",
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
    benefit: "Based on 450+ hours",
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
      "Tested icebreakers and energizers for groups of 10–100 participants. Arabic, French, and English versions.",
    format: "PDF · 12 pages",
    benefit: "Tested with 1000+ youth",
    color: "amber",
    bgImage: "/images/freebies/icebreakers.jpg",
    delivery: { kind: "pdf", path: "/freebies/icebreakers-guide.pdf" },
    published: true,
  },
  {
    id: "trainer-checklist",
    category: "training",
    emoji: "✅",
    title: "Pre-Training Checklist",
    description:
      "The 30-point checklist I go through before every training session to guarantee smooth delivery.",
    format: "PDF · 1 page",
    benefit: "Never forget anything",
    color: "amber",
    bgImage: "/images/freebies/checklist.jpg",
    delivery: { kind: "pdf", path: "/freebies/trainer-checklist.pdf" },
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
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://dhia-portfolio.me").replace(/\/$/, "")
  return `${base}${f.delivery.path}`
}
