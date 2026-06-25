"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { publishedInsightArticles } from "@/lib/insights"

const categoryColors: Record<string, string> = {
  insightsCatDesign: "text-pink-700 bg-pink-100 dark:bg-pink-950/50 dark:text-pink-300",
  insightsCatTraining: "text-amber-700 bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300",
  insightsCatDev: "text-blue-700 bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300",
}

export default function InsightsPageClient() {
  const { t } = useLanguage()
  const articles = publishedInsightArticles()

  return (
    <main className="pt-[5.5rem] pb-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="label mb-3">{t("insights.title")}</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-3 leading-[1.05]">
          {t("insights.heroTitle")}
        </h1>
        <p className="text-muted-foreground text-base lg:text-lg mb-4 max-w-[68ch]">{t("insights.subtitle")}</p>
        <p className="text-sm lg:text-base text-muted-foreground mb-12 max-w-[68ch]">{t("insights.note")}</p>

        <div className="flex flex-col gap-8">
          {articles.map((article) => (
            <article key={article.slug} className="border-b border-border pb-8 last:border-0">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.categoryKey]}`}>
                  {t(article.categoryKey)}
                </span>
                <span className="text-xs text-muted-foreground">· {article.readMin} min</span>
              </div>
              <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">{t(article.titleKey)}</h2>
              <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-[68ch]">
                {t(article.excerptKey)}
              </p>
              <Link
                href={`/insights/${article.slug}`}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2 transition-all"
              >
                {t("insights.readArticle")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
