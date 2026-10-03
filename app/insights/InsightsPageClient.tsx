"use client"

import { Link } from "next-view-transitions"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useMemo, useState } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useLanguage } from "@/components/language-provider"
import { InsightCover } from "@/components/insight-article-cta"
import NewsletterSection from "@/components/newsletter-section"
import { publishedInsightArticles, type InsightCategory } from "@/lib/insights"

type Filter = "all" | InsightCategory

// Charte-graphique pass (Oct 2026): category chips used to cycle
// pink/amber/blue per discipline -- retired in favor of the single
// green accent used everywhere else on the site.
const categoryColors: Record<string, string> = {
  insightsCatDesign: "text-accent bg-accent-subtle",
  insightsCatTraining: "text-accent bg-accent-subtle",
  insightsCatDev: "text-accent bg-accent-subtle",
}

const serviceLabels: Record<InsightCategory, string> = {
  Design: "insightsCatDesign",
  Training: "insightsCatTraining",
  Development: "insightsCatDev",
}

export default function InsightsPageClient() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<Filter>("all")
  // Smooths the list reflow when a category filter narrows/widens the
  // result set (Master to-do list, Tier 6).
  const [articlesListRef] = useAutoAnimate<HTMLDivElement>()
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
    <main id="main-content" className="pt-[5.5rem] pb-14 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Dot-grid wash, the same signature texture used on Home/Designer/
            404/footer -- Freebies and Insights were the two pages where the
            hero "spirit" was completely absent (flat bare header), per the
            site-wide consistency audit. Scoped to the header block only (not
            the whole page) so it never risks clipping the article grid's
            hover/motion effects below. */}
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.16] bg-dot-grid"
            style={{
              maskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 30% 20%, black, transparent)",
            }}
            aria-hidden
          />
          <div className="relative">
            <p className="label mb-3">{t("insights.title")}</p>
            <h1 className="h1-article text-foreground mb-3">
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
                  aria-pressed={filter === f.id}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    filter === f.id
                      ? "bg-accent text-white shadow-md shadow-green-500/20"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {f.label}
                  <span className="ms-1.5 tabular-nums opacity-60">
                    {f.id === "all" ? articles.length : articles.filter((a) => a.category === f.id).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {featured && (filter === "all" || featured.category === filter) && (
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 rounded-2xl border border-border overflow-hidden bg-card shadow-card transition-shadow hover:shadow-lg"
          >
            <Link href={`/insights/${featured.slug}`} className="block group">
              <div className="grid md:grid-cols-2 gap-0">
                <InsightCover
                  category={featured.category}
                  title={t(featured.titleKey)}
                  slug={featured.slug}
                  image={featured.thumbnail}
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
          </motion.article>
        )}

        <div ref={articlesListRef} className="grid sm:grid-cols-2 gap-6">
          {filtered.map((article, i) => {
            // Positional "wide" tile every 3rd card gives the grid a bento
            // rhythm instead of a flat uniform tile wall (Master to-do,
            // Tier 6), same pattern used on /freebies.
            const isWide = i % 3 === 0 && filtered.length > 2

            return (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`group rounded-2xl border border-border bg-card overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 ${isWide ? "sm:col-span-2" : ""}`}
              >
                <div className={isWide ? "grid sm:grid-cols-[1fr_1.1fr] gap-0" : "contents"}>
                  <Link href={`/insights/${article.slug}`} className="block">
                    <InsightCover
                      category={article.category}
                      title={t(article.titleKey)}
                      slug={article.slug}
                      image={article.thumbnail}
                      className={isWide ? "h-44 sm:h-full min-h-[160px]" : "h-40 w-full"}
                    />
                  </Link>
                  <div className="p-5 sm:p-6 flex flex-col">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.categoryKey]}`}>
                        {t(article.categoryKey)}
                      </span>
                      <span className="text-xs text-muted-foreground">· {article.readMin} min</span>
                    </div>
                    <h2 className="text-lg lg:text-xl font-bold text-foreground mb-2">
                      <Link href={`/insights/${article.slug}`} className="group-hover:text-accent transition-colors">
                        {t(article.titleKey)}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
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
              </motion.article>
            )
          })}
        </div>
      </div>
      {/* Navbar CTA on /insights is "Get new posts by email" and points here. */}
      <div className="-mx-6 mt-14 -mb-14">
        <NewsletterSection />
      </div>
    </main>
  )
}
