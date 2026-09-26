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

export type OtherDevProject = {
  title: string
  excerpt: string
  tech: string[]
  /** Omit while the project has no public URL yet (e.g. still in progress), the
   *  page only renders the "Live" link when this is set, so it never points at
   *  a placeholder or fabricated domain. */
  liveUrl?: string
  repoUrl?: string
  /** Shown as a small badge when the project isn't shipped yet, e.g. "In progress". */
  status?: string
}

export const otherDevProjects: OtherDevProject[] = [
  {
    title: "dhia-portfolio.com",
    excerpt:
      "The site you're looking at right now: built with Next.js 15, available in English, French, and Arabic, with a built-in AI chat guide, a free-resource download system, and tuned for fast load times and accessibility.",
    liveUrl: "https://dhia-portfolio.com",
    repoUrl: "https://github.com/dhiaarfa/portfolio",
    tech: ["Next.js", "TypeScript", "Vercel"],
  },
  {
    title: "Association Youth Clubs, Official Website",
    excerpt:
      "Official site for Association Youth Clubs (YCs), the NGO Dhia founded to coordinate school clubs across Tunisia, advocacy toward education stakeholders plus member training, built around the NAOMIE planning framework.",
    tech: ["Next.js", "Tailwind"],
    status: "In progress",
  },
  {
    title: "Amal Bennasr, Space Designer",
    excerpt:
      "Portfolio site for an interior/space designer based in Sfax, Tunisia, a calm, editorial project gallery built around light, material, and comfort.",
    liveUrl: "https://amalbennasr.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
  },
]

export function featuredDevProjects() {
  return devProjects.filter((p) => p.published && p.featured)
}

export function devProjectBySlug(slug: string) {
  return devProjects.find((p) => p.slug === slug && p.published)
}
