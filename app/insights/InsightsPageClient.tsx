"use client"

import { useLanguage } from "@/components/language-provider"

const articles = [
  {
    slug: "brand-colors-psychology",
    categoryKey: "insightsCatDesign" as const,
    categoryColor: "text-pink-700 bg-pink-100 dark:bg-pink-950/50 dark:text-pink-300",
    titleKey: "insightsArticle1Title" as const,
    excerptKey: "insightsArticle1Excerpt" as const,
    readTime: "4 min",
  },
  {
    slug: "youth-workshop-facilitation",
    categoryKey: "insightsCatTraining" as const,
    categoryColor: "text-amber-700 bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300",
    titleKey: "insightsArticle2Title" as const,
    excerptKey: "insightsArticle2Excerpt" as const,
    readTime: "6 min",
  },
  {
    slug: "nextjs-freelance-portfolio",
    categoryKey: "insightsCatDev" as const,
    categoryColor: "text-blue-700 bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300",
    titleKey: "insightsArticle3Title" as const,
    excerptKey: "insightsArticle3Excerpt" as const,
    readTime: "5 min",
  },
] as const

export default function InsightsPageClient() {
  const { t } = useLanguage()

  return (
    <main className="pt-[5.5rem] pb-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="label mb-3">{t("insights.title")}</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-3 leading-tight">
          {t("insights.heroTitle")}
        </h1>
        <p className="text-muted-foreground text-base lg:text-lg mb-4">{t("insights.subtitle")}</p>
        <p className="text-sm lg:text-base text-muted-foreground mb-12">{t("insights.note")}</p>

        <div className="flex flex-col gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="border-b border-border pb-8 last:border-0">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${article.categoryColor}`}>
                  {t(article.categoryKey)}
                </span>
                <span className="text-xs text-muted-foreground">· {article.readTime}</span>
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">{t(article.titleKey)}</h2>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{t(article.excerptKey)}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t("insights.comingSoon")}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
