"use client"

import { Link } from "next-view-transitions"
import { useLanguage } from "@/components/language-provider"
import InsightArticleBody from "@/components/insight-article-body"
import { InsightArticleCta } from "@/components/insight-article-cta"
import type { InsightArticleMeta } from "@/lib/insights"
import type { InsightContentLocale } from "@/lib/insights-content"

// Charte-graphique pass (Oct 2026): retired the per-discipline
// pink/amber/blue chip in favor of the site's single green accent.
const categoryColors: Record<string, string> = {
  Design: "text-accent bg-accent-subtle",
  Training: "text-accent bg-accent-subtle",
  Development: "text-accent bg-accent-subtle",
}

type Props = {
  article: InsightArticleMeta
  content: Record<InsightContentLocale, string>
  related: InsightArticleMeta[]
}

export default function InsightArticleClient({ article, content, related }: Props) {
  const { t, language } = useLanguage()
  const title = t(article.titleKey)
  const bodyContent = content[language] ?? content.en

  return (
    <article className="max-w-3xl mx-auto">
      <Link href="/insights" className="text-sm text-accent hover:underline mb-6 inline-block">
        {t("insightsBackToList")}
      </Link>
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}>
          {t(article.categoryKey)}
        </span>
        <span className="text-xs text-muted-foreground">
          · {t("insightsMinRead", { min: article.readMin })}
        </span>
      </div>
      <h1 className="h1-article text-foreground mb-8">{title}</h1>
      <InsightArticleBody content={bodyContent} />
      <InsightArticleCta article={article} />
      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-border">
          <h2 className="text-lg font-bold text-foreground mb-4">{t("insightsRelatedHeading")}</h2>
          <ul className="space-y-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/insights/${r.slug}`} className="text-accent hover:underline font-medium">
                  {t(r.titleKey)}
                </Link>
                <span className="text-muted-foreground text-sm ml-2">
                  · {t("insightsMinRead", { min: r.readMin })}
                </span>
              </li>
            ))}
          </ul>
          <Link href={article.servicePath} className="mt-4 inline-block text-sm text-muted-foreground hover:text-accent">
            {t("insightsViewCategoryServices", { category: t(article.categoryKey) })}
          </Link>
        </div>
      )}
    </article>
  )
}
