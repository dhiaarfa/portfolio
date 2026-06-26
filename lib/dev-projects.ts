import { siteConfig } from "@/lib/site-config"

export type DevProject = {
  slug: string
  title: string
  excerpt: string
  outcome: string
  image: string
  liveUrl: string
  repoUrl: string
  tech: string[]
  metrics?: string
  featured: boolean
  badge?: string
  caseStudySlug: string
  published: boolean
}

export const devProjects: DevProject[] = [
  {
    slug: "digimytch",
    title: "DigiMyTech Talent Hub",
    excerpt:
      "AI-powered talent hub (PFE capstone): CV prep, skill matching, LinkedIn optimization, and application tracking.",
    outcome: "1200+ CVs processed · 98% user satisfaction in beta testing",
    image: "/images/projects/digimytch/landing.png",
    liveUrl: "https://digimytch-talent-hub.vercel.app/",
    repoUrl: siteConfig.github,
    tech: ["Next.js", "Supabase", "OpenRouter", "Tailwind", "Vercel"],
    metrics: "1200+ CVs · 98% satisfaction",
    featured: true,
    badge: "Featured · PFE",
    caseStudySlug: "digimytch",
    published: true,
  },
  {
    slug: "crit-tunisie",
    title: "CRIT Tunisie",
    excerpt: "Corporate recruitment platform clarifying services, job offers, and contact paths for talents and companies.",
    outcome: "Production corporate site shipped during CRIT web developer role",
    image: "/images/projects/crit/home.png",
    liveUrl: "https://crit-tunisie.net/",
    repoUrl: siteConfig.github,
    tech: ["Next.js", "React", "Tailwind"],
    featured: true,
    caseStudySlug: "crit-tunisie",
    published: true,
  },
  {
    slug: "best-dates-fruits",
    title: "Best Dates and Fruits",
    excerpt: "Premium Tunisian dates brand site with product storytelling, clean sections, and clear contact paths.",
    outcome: "Live marketing site with product-focused layout and contact conversion",
    image: "/images/bdaf-thumbnail.png",
    liveUrl: "https://bestdatesandfruits.com/",
    repoUrl: siteConfig.github,
    tech: ["Next.js", "Marketing site"],
    featured: true,
    caseStudySlug: "best-dates-fruits",
    published: true,
  },
]

export const otherDevProjects = [
  {
    title: "dhia-portfolio.me",
    excerpt: "This portfolio: Next.js 15, i18n, AI chat, freebies funnel, Lighthouse-focused.",
    liveUrl: "https://dhia-portfolio.me",
    repoUrl: "https://github.com/dhiaarfa/portfolio",
    tech: ["Next.js", "TypeScript", "Vercel"],
  },
]

export function featuredDevProjects() {
  return devProjects.filter((p) => p.published && p.featured)
}

export function devProjectBySlug(slug: string) {
  return devProjects.find((p) => p.slug === slug && p.published)
}
