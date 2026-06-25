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
]

export function publishedInsightArticles() {
  return insightArticles.filter((a) => a.published)
}

export function insightBySlug(slug: string) {
  return insightArticles.find((a) => a.slug === slug && a.published)
}
