import type { TranslationKey } from "./translations"
import { formatStat } from "./profile"

export type InsightCategory = "Design" | "Training" | "Development"

export type InsightArticleMeta = {
  slug: string
  /** <=60 chars, used for the <title>/OG title (the visible H1 keeps titleKey). */
  seoTitle: string
  /** ~140-155 chars, the meta/OG description (EN; FR/AR use their excerpt). */
  seoDescription: string
  category: InsightCategory
  categoryKey: "insightsCatDesign" | "insightsCatTraining" | "insightsCatDev"
  readMin: number
  titleKey: TranslationKey
  excerptKey: TranslationKey
  date: string
  /** ISO date of the last substantive edit; dateModified falls back to `date`. */
  updated?: string
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
    seoTitle: "Brand Colors and Trust: How to Choose Your Palette",
    seoDescription: "Color psychology isn't magic, but it shapes first impressions. The 5 palette mistakes I see most, and a simple framework to choose and document yours.",
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
    seoTitle: "5 Facilitation Mistakes That Kill Youth Workshop Energy",
    seoDescription: `Patterns from ${formatStat("trainingCycles")} youth training events in Tunisia: the facilitation mistakes that drain engagement in workshops, and how trainers can fix them.`,
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
    seoTitle: "Why I Rebuilt My Portfolio in Next.js (and What I'd Change)",
    seoDescription: "A freelancer's honest take on rebuilding a portfolio in Next.js: static vs dynamic, three languages (i18n), and shipping fast without cutting corners.",
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
    seoTitle: "Social Media Visual Consistency: Make Your Feed a Brand",
    seoDescription: "Recognition beats virality. The 4-part system I use to make an Instagram or Facebook feed look like one brand, not twenty different designers.",
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
    seoTitle: "Training Needs Assessment (TNA): A Simple 4-Question Guide",
    seoDescription: "Before you build slides, answer four questions. A lightweight training needs assessment (TNA) process I run before every workshop or programme.",
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
    seoTitle: "Supabase + Next.js for Freelance Client Projects",
    seoDescription: "The honest middle ground between form SaaS and a full custom backend: when Supabase with Next.js fits a client project, and what to watch out for.",
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
    seoTitle: "Brand Guidelines Clients Actually Use (Not 40-Page PDFs)",
    seoDescription: "One-page brand cheat sheets beat 40-page decks. What to include in brand guidelines so a visual identity system survives past launch week.",
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
    seoTitle: "Icebreakers vs Energizers: When to Use Each in Training",
    seoDescription: "Icebreakers and energizers solve different problems at different moments. The simple rule I use when designing youth training session flows.",
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
    seoTitle: "Add an AI Chatbot to a Client Site with OpenRouter",
    seoDescription: "A Next.js API route, a scoped system prompt, and the mistakes that make AI chat widgets feel sketchy or leak API keys. How I add one safely.",
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
    seoTitle: "Bilingual Arabic-French Brand Identity Design in Tunisia",
    seoDescription: "Arabic and French aren't two translations of one layout. How I design brand identity systems for Tunisian businesses that work natively in both.",
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
    seoTitle: "Corporate Training in Tunisian SMEs: What Actually Works",
    seoDescription: "Textbook L&D assumes a training budget and an HR team. Most Tunisian SMEs have neither. Training design that survives a 15-person company.",
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
    seoTitle: "Getting Paid as a Freelance Developer in Tunisia",
    seoDescription: "International clients, a Tunisian bank account, and a currency that isn't fully convertible: the setup I use to get paid reliably as a freelancer.",
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
    seoTitle: "Packaging Design for Tunisian Export Brands in the EU",
    seoDescription: "Olive oil, dates and harissa compete on European shelves. The packaging design decisions that get a Tunisian export product picked up, not passed over.",
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
    seoTitle: "Green & Digital Skills Training for Youth in Tunisia",
    seoDescription: "Tunisia's youth employability gap is a skills-to-market mismatch. Lessons from facilitating green and digital skills programmes designed to close it.",
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
    seoTitle: "Web Performance for Tunisian Mobile Users: What Changes",
    seoDescription: "A 3-second load means something different on fiber than on a Tunisian mobile data plan. The web performance choices I make differently because of it.",
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
  {
    slug: "website-cost-tunisia-2026",
    seoTitle: "How Much Does a Website Cost in Tunisia in 2026?",
    seoDescription: "Showcase sites, e-commerce, Arabic/French/English: what Tunisian agencies charge in 2026, where the money goes, and how to read a web quote.",
    thumbnail: "/images/insights/website-cost-tunisia-2026.jpg",
    category: "Development",
    categoryKey: "insightsCatDev",
    readMin: 6,
    titleKey: "insightsArticle16Title",
    excerptKey: "insightsArticle16Excerpt",
    date: "2026-10-04",
    published: true,
    servicePath: "/developer",
  },
  {
    slug: "trainer-fees-tunisia",
    seoTitle: "Trainer Day Rates in Tunisia: What to Budget in 2026",
    seoDescription: "How trainers price workshops and training days in Tunisia and donor programmes, what a fair day rate includes, and the CNFCPP reimbursement rule.",
    thumbnail: "/images/insights/trainer-fees-tunisia.jpg",
    category: "Training",
    categoryKey: "insightsCatTraining",
    readMin: 6,
    titleKey: "insightsArticle17Title",
    excerptKey: "insightsArticle17Excerpt",
    date: "2026-10-04",
    published: true,
    servicePath: "/trainer",
  },
  {
    slug: "brand-identity-cost-tunisia",
    seoTitle: "Logo and Brand Identity Prices in Tunisia (2026)",
    seoDescription: "From a 190 TND logo to full agency branding: what logos and brand identities cost in Tunisia in 2026, and what you should get at each level.",
    thumbnail: "/images/insights/brand-identity-cost-tunisia.jpg",
    category: "Design",
    categoryKey: "insightsCatDesign",
    readMin: 5,
    titleKey: "insightsArticle18Title",
    excerptKey: "insightsArticle18Excerpt",
    date: "2026-10-04",
    published: true,
    servicePath: "/designer",
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
