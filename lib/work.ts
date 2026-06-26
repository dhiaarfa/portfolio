export type WorkCategory = "Brand Identity" | "Social Media" | "Logo Design" | "Packaging" | "UI/UX" | "Web Dev"

export type WorkKind = "design" | "dev"

export type WorkProject = {
  slug: string
  title: string
  clientLine: string
  excerpt: string
  heroImage: string
  cardImage: string
  role: string
  timeline: string
  outcome: string
  category: WorkCategory
  kind: WorkKind
  featured: boolean
  concept?: boolean
  tools: string[]
  behanceUrl?: string
  liveUrl?: string
  repoUrl?: string
  metrics?: string
  nextSlug?: string
  published: boolean
}

export const workProjects: WorkProject[] = [
  {
    slug: "speranza-cafe",
    title: "Speranza Café",
    clientLine: "A Tunisian café brand needing a warm, premium identity across packaging and social.",
    excerpt: "Logo, packaging system, and social templates for a local café with a gold-and-cream visual language.",
    heroImage: "/images/445771850-916829483581375-1053755579034856379-n.png",
    cardImage: "/images/445771850-916829483581375-1053755579034856379-n.png",
    role: "Logo · Brand identity · Packaging · Social",
    timeline: "4 weeks",
    outcome: "Identity adopted across in-store packaging, Instagram, and seasonal promos.",
    category: "Brand Identity",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Photoshop", "InDesign"],
    nextSlug: "lone-space",
    published: true,
  },
  {
    slug: "lone-space",
    title: "Lone Space",
    clientLine: "A creative studio wanting a luxurious gold identity with stationery and print applications.",
    excerpt: "Full visual identity: logotype, gold foil system, business cards, and brand collateral.",
    heroImage: "/images/lone-space-gold.png",
    cardImage: "/images/lone-space-gold.png",
    role: "Brand identity · Logo · Stationery · Print",
    timeline: "3 weeks",
    outcome: "Cohesive gold system used across cards, letterhead, and client-facing materials.",
    category: "Brand Identity",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Photoshop", "InDesign"],
    nextSlug: "tafani-travel",
    published: true,
  },
  {
    slug: "tafani-travel",
    title: "Tafani Travel",
    clientLine: "A travel agency needing a trustworthy, modern mark for digital and print touchpoints.",
    excerpt: "Logo and brand system built for clarity across web, social, and travel collateral.",
    heroImage: "/images/tafani-white-png.png",
    cardImage: "/images/tafani-white-png.png",
    role: "Logo · Brand identity · Social templates",
    timeline: "2 weeks",
    outcome: "Cleaner brand recognition on social and client proposals within the first month.",
    category: "Brand Identity",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Figma", "Photoshop"],
    nextSlug: "meetup-pro",
    published: true,
  },
  {
    slug: "meetup-pro",
    title: "MeetUp Pro 1.0",
    clientLine: "A youth networking event needing bold social visuals and on-site branding.",
    excerpt: "Event identity, social campaign assets, and promotional design for a sold-out meetup.",
    heroImage: "/images/meetuppro-thumbnail.png",
    cardImage: "/images/meetuppro-thumbnail.png",
    role: "Event branding · Social media · Campaign design",
    timeline: "6 weeks",
    outcome: "Strong social traction and sold-out attendance; visuals reused across follow-up events.",
    category: "Social Media",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Photoshop", "Canva"],
    nextSlug: "traveltodo-campaign",
    published: true,
  },
  {
    slug: "traveltodo-campaign",
    title: "TravelTodo Campaign",
    clientLine: "Travel brand social and outdoor campaign visuals for seasonal promotion.",
    excerpt: "Billboard, poster, and feed assets with a consistent campaign look across formats.",
    heroImage: "/images/billboard-48x14-ft-mockup-3.jpeg",
    cardImage: "/images/billboard-48x14-ft-mockup-3.jpeg",
    role: "Campaign design · Social · OOH mockups",
    timeline: "2 weeks",
    outcome: "Unified campaign look across billboard, poster, and Instagram formats.",
    category: "Social Media",
    kind: "design",
    featured: true,
    tools: ["Photoshop", "Illustrator"],
    nextSlug: "digimytch",
    published: true,
  },
  {
    slug: "digimytch",
    title: "DigiMyTech Talent Hub",
    clientLine: "PFE capstone: an AI-powered talent hub for CV prep, skill matching, and application tracking.",
    excerpt: "Next.js app with Supabase auth/DB and OpenRouter LLM workflows baked into the product, not a floating chat widget.",
    heroImage: "/images/projects/digimytch/landing.png",
    cardImage: "/images/projects/digimytch/landing.png",
    role: "Full-stack · AI integration · Product design",
    timeline: "PFE · 2025",
    outcome: "1200+ CVs processed in beta · 98% user satisfaction reported in testing",
    category: "Web Dev",
    kind: "dev",
    featured: true,
    tools: ["Next.js", "Supabase", "OpenRouter", "Tailwind", "Vercel"],
    liveUrl: "https://digimytch-talent-hub.vercel.app/",
    repoUrl: "https://github.com/dhiaarfa",
    metrics: "1200+ CVs · 98% satisfaction",
    nextSlug: "crit-tunisie",
    published: true,
  },
  {
    slug: "crit-tunisie",
    title: "CRIT Tunisie",
    clientLine: "Corporate recruitment platform for a major staffing firm in Tunisia.",
    excerpt: "Production Next.js site clarifying services, job offers, and contact paths for talents and companies.",
    heroImage: "/images/projects/crit/home.png",
    cardImage: "/images/projects/crit/home.png",
    role: "Web developer · UI implementation",
    timeline: "Sep – Dec 2023",
    outcome: "Shipped responsive corporate site to production during CRIT developer role.",
    category: "Web Dev",
    kind: "dev",
    featured: true,
    tools: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://crit-tunisie.net/",
    repoUrl: "https://github.com/dhiaarfa",
    nextSlug: "best-dates-fruits",
    published: true,
  },
  {
    slug: "best-dates-fruits",
    title: "Best Dates and Fruits",
    clientLine: "Premium Tunisian dates brand needing a credible web presence and product storytelling.",
    excerpt: "Marketing site with product sections, seasonal storytelling, and clear contact conversion paths.",
    heroImage: "/images/bdaf-thumbnail.png",
    cardImage: "/images/bdaf-thumbnail.png",
    role: "Web development · Marketing site",
    timeline: "Client project",
    outcome: "Live brand site with product-focused layout and contact funnel.",
    category: "Web Dev",
    kind: "dev",
    featured: true,
    tools: ["Next.js", "Tailwind"],
    liveUrl: "https://bestdatesandfruits.com/",
    repoUrl: "https://github.com/dhiaarfa",
    nextSlug: "digimytch",
    published: true,
  },
]

export type GalleryItem = {
  title: string
  image: string
  category: WorkCategory | "All"
  workSlug?: string
  externalUrl?: string
  concept?: boolean
}

/** Curated gallery: best 10 pieces (case-study links where available). */
export const curatedGallery: GalleryItem[] = [
  { title: "Speranza Café", image: "/images/445771850-916829483581375-1053755579034856379-n.png", category: "Brand Identity", workSlug: "speranza-cafe" },
  { title: "Lone Space Gold Branding", image: "/images/lone-space-gold.png", category: "Brand Identity", workSlug: "lone-space" },
  { title: "Tafani Travel", image: "/images/tafani-white-png.png", category: "Brand Identity", workSlug: "tafani-travel" },
  { title: "MeetUp Pro Event", image: "/images/meetuppro-thumbnail.png", category: "Social Media", workSlug: "meetup-pro" },
  { title: "Lone Space Stationery", image: "/images/lone-space-mockup.jpg", category: "Packaging", workSlug: "lone-space" },
  { title: "TravelTodo Billboard", image: "/images/billboard-48x14-ft-mockup-3.jpeg", category: "Social Media", workSlug: "traveltodo-campaign" },
  { title: "Lone Space Business Cards", image: "/images/lone-space-cards.jpg", category: "Logo Design", workSlug: "lone-space" },
  { title: "Archaeological Museum Sousse", image: "/images/archaeological-museum-sousse.png", category: "Brand Identity", concept: true, externalUrl: "https://www.behance.net/dhiaarfa" },
  { title: "Walmart Branding + System", image: "/images/walmart-branding.png", category: "Brand Identity", concept: true, externalUrl: "https://www.behance.net/dhiaarfa" },
  { title: "Football Campaign", image: "/images/argentina-messi-copa-america-outdoor.jpeg", category: "Social Media", externalUrl: "https://www.behance.net/dhiaarfa" },
]

export function publishedWorkProjects() {
  return workProjects.filter((p) => p.published)
}

export function featuredWorkProjects() {
  return workProjects.filter((p) => p.published && p.featured)
}

export function devWorkProjects() {
  return workProjects.filter((p) => p.published && p.kind === "dev")
}

export function workBySlug(slug: string) {
  return workProjects.find((p) => p.slug === slug && p.published)
}
