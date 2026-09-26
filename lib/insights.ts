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
  // Real photo per article (was a flat category-color gradient block for
  // every card -- read as generic placeholders, not tied to what each
  // article is actually about).
  thumbnail: string
}

export const insightArticles: InsightArticleMeta[] = [
  {
    slug: "brand-colors-and-trust",
    thumbnail: "/images/insights/brand-colors-and-trust.jpg",
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
    thumbnail: "/images/insights/facilitation-mistakes-youth-workshops.jpg",
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
    thumbnail: "/images/insights/why-i-rebuilt-my-portfolio-in-nextjs.jpg",
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
    thumbnail: "/images/insights/social-media-visual-consistency.jpg",
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
    thumbnail: "/images/insights/training-needs-assessment-basics.jpg",
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
    thumbnail: "/images/insights/supabase-nextjs-for-freelancers.jpg",
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
    thumbnail: "/images/insights/brand-guidelines-that-get-used.jpg",
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
    thumbnail: "/images/insights/icebreakers-vs-energizers.jpg",
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
    thumbnail: "/images/insights/client-chatbot-with-openrouter.jpg",
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
    thumbnail: "/images/insights/bilingual-branding-tunisia.jpg",
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
    thumbnail: "/images/insights/corporate-training-tunisian-smes.jpg",
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
    thumbnail: "/images/insights/freelance-developer-tunisia-payments.jpg",
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
    thumbnail: "/images/insights/packaging-design-tunisian-exports.jpg",
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
    thumbnail: "/images/insights/green-digital-skills-youth-tunisia.jpg",
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
    thumbnail: "/images/insights/web-performance-tunisia-hosting.jpg",
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
