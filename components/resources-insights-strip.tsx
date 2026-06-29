"use client"

import Link from "next/link"
import { ArrowRight, Download, BookOpen } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { publishedInsightArticles, type InsightCategory } from "@/lib/insights"
import { publishedFreebies } from "@/lib/freebies"
import { freebieText } from "@/lib/freebie-i18n"

type Focus = "design" | "training" | "development" | "all"

const categoryMap: Record<Exclude<Focus, "all">, InsightCategory> = {
  design: "Design",
  training: "Training",
  development: "Development",
}

const freebieCategoryMap: Record<Exclude<Focus, "all">, "design" | "training"> = {
  design: "design",
  training: "training",
  development: "design",
}

type Props = {
  focus?: Focus
  className?: string
}

export default function ResourcesInsightsStrip({ focus = "all", className = "" }: Props) {
  const { t } = useLanguage()

  const articles = publishedInsightArticles()
    .filter((a) => (focus === "all" ? true : a.category === categoryMap[focus]))
    .slice(0, 3)

  const freebies = publishedFreebies()
    .filter((f) => {
      if (focus === "all") return true
      if (focus === "development") return f.category === "design"
      return f.category === freebieCategoryMap[focus]
    })
    .slice(0, 2)

  if (articles.length === 0 && freebies.length === 0) return null

  return (
    <section className={`py-10 px-4 md:px-8 ${className}`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
          <div>
            <p className="label mb-1">{t("resourcesStripEyebrow")}</p>
            <h2 className="text-2xl font-bold text-foreground">{t("resourcesStripTitle")}</h2>
          </div>
          <div className="flex gap-3 text-sm">
            <Link href="/insights" className="font-semibold text-accent hover:underline inline-flex items-center gap-1">
              {t("resourcesStripAllArticles")} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link href="/freebies" className="font-semibold text-accent hover:underline inline-flex items-center gap-1">
              {t("resourcesStripAllFreebies")} <Download className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 inline-flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> {t("insights.title")}
            </p>
            <ul className="space-y-3">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/insights/${a.slug}`} className="group block">
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors leading-snug">
                      {t(a.titleKey)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{t(a.excerptKey)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-3 inline-flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" /> {t("freebies.title")}
            </p>
            <ul className="space-y-3">
              {freebies.map((f) => (
                <li key={f.id}>
                  <Link href={`/freebies?category=${f.category}`} className="group block">
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {freebieText(f, "title", t)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{freebieText(f, "format", t)} · {freebieText(f, "benefit", t)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
