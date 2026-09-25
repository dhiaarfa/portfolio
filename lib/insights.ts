export type InsightCategory = "Design" | "Training" | "Development"

export type InsightArticleMeta = {
  slug: string
  category: InsightCategory
  categoryKey: "insightsCatDesign" | "insightsCatTraining" | "insightsCatDev"
  readMin: number
  titleKey: string
  excerptKey: string
  date: string
  published: boolean
  featured?: boolean
  servicePath: "/designer" | "/trainer" | "/developer"
}

export const insightArticles: InsightArticleMeta[] = [
  {
    slug: "brand-colors-and-trust",
    category: "Design",
    categoryKey: "insightsCatDesign",
    readMin: 4,
    titleKey: "insightsArticle1Title",
    excerptKey: "insightsArticle1Excerpt",
    date: "2026-06-01",
    published: true,
    servicePath: "/designer",
  },
  {
    slug: "facilitation-mistakes-youth-workshops",
    category: "Training",
    categoryKey: "insightsCatTraining",
    readMin: 6,
    titleKey: "insightsArticle2Title",
    excerptKey: "insightsArticle2Excerpt",
    date: "2026-06-01",
    published: true,
    featured: true,
    servicePath: "/trainer",
  },
  {
    slug: "why-i-rebuilt-my-portfolio-in-nextjs",
    category: "Development",
    categoryKey: "insightsCatDev",
    readMin: 5,
    titleKey: "insightsArticle3Title",
    excerptKey: "insightsArticle3Excerpt",
    date: "2026-06-01",
    published: true,
    servicePath: "/developer",
  },
  {
    slug: "social-media-visual-consistency",
    category: "Design",
    categoryKey: "insightsCatDesign",
    readMin: 5,
    titleKey: "insightsArticle4Title",
    excerptKey: "insightsArticle4Excerpt",
    date: "2026-06-15",
    published: true,
    servicePath: "/designer",
  },
  {
    slug: "training-needs-assessment-basics",
    category: "Training",
    categoryKey: "insightsCatTraining",
    readMin: 5,
    titleKey: "insightsArticle5Title",
    excerptKey: "insightsArticle5Excerpt",
    date: "2026-06-15",
    published: true,
    servicePath: "/trainer",
  },
  {
    slug: "supabase-nextjs-for-freelancers",
    category: "Development",
    categoryKey: "insightsCatDev",
    readMin: 6,
    titleKey: "insightsArticle6Title",
    excerptKey: "insightsArticle6Excerpt",
    date: "2026-06-20",
    published: true,
    servicePath: "/developer",
  },
  {
    slug: "brand-guidelines-that-get-used",
    category: "Design",
    categoryKey: "insightsCatDesign",
    readMin: 5,
    titleKey: "insightsArticle7Title",
    excerptKey: "insightsArticle7Excerpt",
    date: "2026-06-22",
    published: true,
    servicePath: "/designer",
  },
  {
    slug: "icebreakers-vs-energizers",
    category: "Training",
    categoryKey: "insightsCatTraining",
    readMin: 4,
    titleKey: "insightsArticle8Title",
    excerptKey: "insightsArticle8Excerpt",
    date: "2026-06-22",
    published: true,
    servicePath: "/trainer",
  },
  {
    slug: "client-chatbot-with-openrouter",
    category: "Development",
    categoryKey: "insightsCatDev",
    readMin: 5,
    titleKey: "insightsArticle9Title",
    excerptKey: "insightsArticle9Excerpt",
    date: "2026-06-24",
    published: true,
    servicePath: "/developer",
  },
  {
    slug: "bilingual-branding-tunisia",
    category: "Design",
    categoryKey: "insightsCatDesign",
    readMin: 5,
    titleKey: "insightsArticle10Title",
    excerptKey: "insightsArticle10Excerpt",
    date: "2026-07-02",
    published: true,
    servicePath: "/designer",
  },
  {
    slug: "corporate-training-tunisian-smes",
    category: "Training",
    categoryKey: "insightsCatTraining",
    readMin: 5,
    titleKey: "insightsArticle11Title",
    excerptKey: "insightsArticle11Excerpt",
    date: "2026-07-04",
    published: true,
    servicePath: "/trainer",
  },
  {
    slug: "freelance-developer-tunisia-payments",
    category: "Development",
    categoryKey: "insightsCatDev",
    readMin: 5,
    titleKey: "insightsArticle12Title",
    excerptKey: "insightsArticle12Excerpt",
    date: "2026-07-07",
    published: true,
    servicePath: "/developer",
  },
  {
    slug: "packaging-design-tunisian-exports",
    category: "Design",
    categoryKey: "insightsCatDesign",
    readMin: 5,
    titleKey: "insightsArticle13Title",
    excerptKey: "insightsArticle13Excerpt",
    date: "2026-07-09",
    published: true,
    servicePath: "/designer",
  },
  {
    slug: "green-digital-skills-youth-tunisia",
    category: "Training",
    categoryKey: "insightsCatTraining",
    readMin: 6,
    titleKey: "insightsArticle14Title",
    excerptKey: "insightsArticle14Excerpt",
    date: "2026-07-11",
    published: true,
    servicePath: "/trainer",
  },
  {
    slug: "web-performance-tunisia-hosting",
    category: "Development",
    categoryKey: "insightsCatDev",
    readMin: 5,
    titleKey: "insightsArticle15Title",
    excerptKey: "insightsArticle15Excerpt",
    date: "2026-07-13",
    published: true,
    servicePath: "/developer",
  },
]

export function publishedInsightArticles() {
  return insightArticles.filter((a) => a.published)
}

export function insightBySlug(slug: string) {
  return insightArticles.find((a) => a.slug === slug && a.published)
}

export function relatedInsights(article: InsightArticleMeta, limit = 2) {
  return publishedInsightArticles()
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, limit)
}
