"use client"

import { Link } from "next-view-transitions"
import Image from "next/image"
import { markdownH2s } from "@/lib/heading-id"
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
  const toc = markdownH2s(bodyContent)

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
      <h1 className="h1-article text-foreground mb-5">{title}</h1>

      {/* Byline + publish date (Oct 2026): a visible author and a
          machine-readable <time> are E-E-A-T and freshness signals; the
          page had neither. Name is not translated; the date formats per
          language (UTC so it never shifts a day). */}
      <div className="flex items-center gap-3 mb-8 text-sm text-muted-foreground">
        <Image
          src="/images/photos/dhia-main.png"
          alt=""
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover ring-2 ring-accent/30"
        />
        <span className="font-medium text-foreground">Mohamed Dhia Arfa</span>
        <span aria-hidden>·</span>
        <time dateTime={article.updated ?? article.date}>
          {new Intl.DateTimeFormat(language === "ar" ? "ar-TN" : language === "fr" ? "fr-FR" : "en-GB", {
            dateStyle: "long",
            timeZone: "UTC",
          }).format(new Date(article.updated ?? article.date))}
        </time>
      </div>

      {/* Hero image: each article already had a real photo, but it only
          appeared on the listing cards, never on the article itself. */}
      <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
        <Image src={article.thumbnail} alt={title} fill priority sizes="(min-width: 768px) 768px, 100vw" className="object-cover" />
      </div>

      {/* Table of contents from the body's ## headings: jump links for
          readers, and a structure search engines can show as sitelinks. */}
      {toc.length >= 3 && (
        <nav aria-label={t("insightsToc")} className="mb-10 rounded-2xl border border-border bg-muted/40 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">{t("insightsToc")}</p>
          <ol className="space-y-1.5 text-sm">
            {toc.map((h) => (
              <li key={h.id}>
                <a href={`#${h.id}`} className="text-foreground/80 hover:text-accent transition-colors">
                  {h.text}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

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
