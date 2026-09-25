"use client"

import { Link } from "next-view-transitions"
import { ArrowRight, ArrowUpRight, Download } from "lucide-react"
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
            <h2 className="text-foreground">{t("resourcesStripTitle")}</h2>
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
          <div className="group/card relative overflow-hidden rounded-[1.75rem] ring-1 ring-pink-100 dark:ring-pink-500/20 bg-gradient-to-br from-pink-50 via-white to-white dark:from-pink-500/10 dark:via-slate-900 dark:to-slate-900 p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <span className="pointer-events-none absolute -right-3 -top-3 text-6xl opacity-[0.08] group-hover/card:scale-110 group-hover/card:opacity-[0.12] transition-all duration-500 select-none" aria-hidden>
              📚
            </span>
            <p className="relative inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-pink-700 dark:text-pink-300 mb-4">
              <span className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-500/15 flex items-center justify-center text-sm" aria-hidden>📚</span>
              {t("insights.title")}
            </p>
            <ul className="relative space-y-3.5">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/insights/${a.slug}`} className="group flex items-start justify-between gap-2">
                    <span>
                      <p className="text-sm font-semibold text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors leading-snug">
                        {t(a.titleKey)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{t(a.excerptKey)}</p>
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 mt-0.5 text-pink-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="group/card relative overflow-hidden rounded-[1.75rem] ring-1 ring-sky-100 dark:ring-sky-500/20 bg-gradient-to-br from-sky-50 via-white to-white dark:from-sky-500/10 dark:via-slate-900 dark:to-slate-900 p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <span className="pointer-events-none absolute -right-3 -top-3 text-6xl opacity-[0.08] group-hover/card:scale-110 group-hover/card:opacity-[0.12] transition-all duration-500 select-none" aria-hidden>
              🎁
            </span>
            <p className="relative inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300 mb-4">
              <span className="w-6 h-6 rounded-full bg-sky-100 dark:bg-sky-500/15 flex items-center justify-center text-sm" aria-hidden>🎁</span>
              {t("freebies.title")}
            </p>
            <ul className="relative space-y-3.5">
              {freebies.map((f) => (
                <li key={f.id}>
                  <Link href={`/freebies?category=${f.category}`} className="group flex items-start justify-between gap-2">
                    <span>
                      <p className="text-sm font-semibold text-foreground group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {freebieText(f, "title", t)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {freebieText(f, "format", t)} · {freebieText(f, "benefit", t)}
                      </p>
                    </span>
                    <Download className="w-4 h-4 shrink-0 mt-0.5 text-sky-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
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
