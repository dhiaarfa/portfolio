import type { Metadata } from "next"
import type { InsightArticleMeta } from "@/lib/insights"
import { getInsightContent } from "@/lib/insights-content"
import { getTranslation, type Language } from "@/lib/translations"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"

/**
 * Shared SEO for /insights/[slug] and /[locale]/insights/[slug] (Oct 2026).
 * Before this, each route built its own thin metadata: a long visible
 * title plus " | Insights · Mohamed Dhia" (8 of 15 English titles were
 * already over Google's ~60-char display limit before the suffix), raw
 * excerpts up to 187 chars as descriptions, the generic site OG image, and
 * a BlogPosting with only headline/date/author.
 */

const BRAND = "Dhia Arfa"
const TITLE_MAX = 60
const DESC_MAX = 158

/** <title>: the article's search title, plus the brand only if it fits. */
export function insightSeoTitle(article: InsightArticleMeta, locale: Language): string {
  const base = locale === "en" ? article.seoTitle : getTranslation(locale, article.titleKey)
  const branded = `${base} | ${BRAND}`
  return branded.length <= TITLE_MAX ? branded : base
}

/** Meta description: hand-written for EN; FR/AR excerpts clamped on a word boundary. */
export function insightSeoDescription(article: InsightArticleMeta, locale: Language): string {
  if (locale === "en") return article.seoDescription
  const text = getTranslation(locale, article.excerptKey)
  if (text.length <= DESC_MAX) return text
  const cut = text.slice(0, DESC_MAX - 1)
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`
}

function articlePath(slug: string, locale: Language) {
  return locale === "en" ? `/insights/${slug}` : `/${locale}/insights/${slug}`
}

/** 1200x630 social card via /api/og, using the article's own photo. */
function articleOgImage(article: InsightArticleMeta, locale: Language) {
  return {
    url: `/api/og?${new URLSearchParams({
      kicker: `Insights · ${article.category}`,
      title: locale === "en" ? article.seoTitle : getTranslation(locale, article.titleKey),
      subhead: "Mohamed Dhia Arfa",
      image: article.thumbnail,
    })}`,
    width: 1200,
    height: 630,
    alt: locale === "en" ? article.seoTitle : getTranslation(locale, article.titleKey),
  }
}

export function insightMetadata(article: InsightArticleMeta, locale: Language): Metadata {
  return pageMetadata({
    path: articlePath(article.slug, locale),
    title: insightSeoTitle(article, locale),
    description: insightSeoDescription(article, locale),
    locale,
    // Every article has real EN/FR/AR bodies (lib/insights-content.ts), so
    // all three versions declare each other -- the English route used to
    // omit this, leaving its FR/AR twins unlinked from it.
    hreflangPath: `/insights/${article.slug}`,
    ogImage: articleOgImage(article, locale),
    openGraph: {
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.updated ?? article.date,
      authors: [SITE_URL],
      section: article.category,
    },
  })
}

function wordCount(text: string) {
  return text.replace(/[#>*_`[\]()]/g, " ").split(/\s+/).filter(Boolean).length
}

/** BlogPosting + BreadcrumbList for one article in one locale. */
export function insightJsonLd(article: InsightArticleMeta, locale: Language) {
  const url = `${SITE_URL}${articlePath(article.slug, locale)}`
  const listUrl = `${SITE_URL}${locale === "en" ? "" : `/${locale}`}/insights`
  const headline = locale === "en" ? article.seoTitle : getTranslation(locale, article.titleKey)
  const body = getInsightContent(article.slug)?.[locale]
  const person = { "@type": "Person", name: "Mohamed Dhia Arfa", url: SITE_URL }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline,
        description: insightSeoDescription(article, locale),
        image: [`${SITE_URL}${article.thumbnail}`],
        datePublished: article.date,
        dateModified: article.updated ?? article.date,
        author: person,
        publisher: person,
        inLanguage: locale,
        articleSection: article.category,
        ...(body ? { wordCount: wordCount(body) } : {}),
        isPartOf: { "@type": "Blog", name: "Insights · Mohamed Dhia Arfa", url: listUrl },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: listUrl },
          { "@type": "ListItem", position: 3, name: headline, item: url },
        ],
      },
    ],
  }
}
