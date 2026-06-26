"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useMemo, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { InsightCover } from "@/components/insight-article-cta"
import { publishedInsightArticles, type InsightCategory } from "@/lib/insights"

type Filter = "all" | InsightCategory

const categoryColors: Record<string, string> = {
  insightsCatDesign: "text-pink-700 bg-pink-100 dark:bg-pink-950/50 dark:text-pink-300",
  insightsCatTraining: "text-amber-700 bg-amber-100 dark:bg-amber-950/50 dark:text-amber-300",
  insightsCatDev: "text-blue-700 bg-blue-100 dark:bg-blue-950/50 dark:text-blue-300",
}

const serviceLabels: Record<InsightCategory, string> = {
  Design: "insightsCatDesign",
  Training: "insightsCatTraining",
  Development: "insightsCatDev",
}

export default function InsightsPageClient() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")
  const articles = publishedInsightArticles()

  const featured = articles.find((a) => a.featured) ?? articles[0]

  const filtered = useMemo(() => {
    const list = filter === "all" ? articles : articles.filter((a) => a.category === filter)
    return list.filter((a) => a.slug !== featured?.slug)
  }, [articles, filter, featured?.slug])

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t("insights.filterAll") },
    { id: "Design", label: t("insightsCatDesign") },
    { id: "Training", label: t("insightsCatTraining") },
    { id: "Development", label: t("insightsCatDev") },
  ]

  return (
    <main className="pt-[5.5rem] pb-14 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="label mb-3">{t("insights.title")}</p>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-3 leading-[1.05]">
          {t("insights.heroTitle")}
        </h1>
        <p className="text-muted-foreground text-base lg:text-lg mb-4 max-w-[68ch]">{t("insights.subtitle")}</p>
        <p className="text-sm lg:text-base text-muted-foreground mb-8 max-w-[68ch]">{t("insights.note")}</p>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f.id
                  ? "bg-accent text-white shadow-md shadow-green-500/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {featured && (filter === "all" || featured.category === filter) && (
          <article className="mb-12 rounded-2xl border border-border overflow-hidden bg-card shadow-card">
            <Link href={`/insights/${featured.slug}`} className="block group">
              <div className="grid md:grid-cols-2 gap-0">
                <InsightCover
                  category={featured.category}
                  title={t(featured.titleKey)}
                  className="min-h-[180px] md:min-h-full md:rounded-none rounded-t-2xl"
                />
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                    {t("insights.featured")}
                  </span>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[featured.categoryKey]}`}>
                      {t(featured.categoryKey)}
                    </span>
                    <span className="text-xs text-muted-foreground">· {featured.readMin} min</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {t(featured.titleKey)}
                  </h2>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">{t(featured.excerptKey)}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    {t("insights.readArticle")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </article>
        )}

        <div className="flex flex-col gap-8">
          {filtered.map((article) => (
            <article key={article.slug} className="border-b border-border pb-8 last:border-0">
              <div className="grid sm:grid-cols-[180px_1fr] gap-5">
                <Link href={`/insights/${article.slug}`} className="block shrink-0">
                  <InsightCover category={article.category} title={t(article.titleKey)} className="h-full min-h-[120px]" />
                </Link>
                <div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.categoryKey]}`}>
                      {t(article.categoryKey)}
                    </span>
                    <span className="text-xs text-muted-foreground">· {article.readMin} min</span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    <Link href={`/insights/${article.slug}`} className="hover:text-accent transition-colors">
                      {t(article.titleKey)}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-[68ch]">
                    {t(article.excerptKey)}
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-4">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2 transition-all"
                    >
                      {t("insights.readArticle")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href={article.servicePath}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {t("insights.viewServices")} → {t(serviceLabels[article.category])}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
