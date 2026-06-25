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
  },
]

export function publishedInsightArticles() {
  return insightArticles.filter((a) => a.published)
}

export function insightBySlug(slug: string) {
  return insightArticles.find((a) => a.slug === slug && a.published)
}
