import { publishedInsightArticles } from "@/lib/insights"
import { getTranslation } from "@/lib/translations"
import { SITE_URL } from "@/lib/profile"
import { escHtml } from "@/lib/html-escape"

// RSS 2.0 feed for the insights articles -- lets readers and feed readers
// subscribe instead of having to check /insights manually. English-only
// (the site's default locale), matching how the sitemap treats "/insights"
// as the canonical, un-prefixed article path.
export const dynamic = "force-static"
export const revalidate = 3600

function escXml(value: string): string {
  return escHtml(value)
}

function toRfc822(dateStr: string): string {
  // Article dates are stored as "YYYY-MM-DD" with no time; noon UTC avoids
  // any timezone rollover shifting the displayed day.
  return new Date(`${dateStr}T12:00:00Z`).toUTCString()
}

export async function GET() {
  const articles = [...publishedInsightArticles()].sort((a, b) => (a.date < b.date ? 1 : -1))

  const items = articles
    .map((article) => {
      const title = getTranslation("en", article.titleKey)
      const excerpt = getTranslation("en", article.excerptKey)
      const url = `${SITE_URL}/insights/${article.slug}`
      return `    <item>
      <title>${escXml(title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${toRfc822(article.date)}</pubDate>
      <category>${escXml(article.category)}</category>
      <description>${escXml(excerpt)}</description>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mohamed Dhia Arfa — Insights</title>
    <link>${SITE_URL}/insights</link>
    <atom:link href="${SITE_URL}/insights/feed.xml" rel="self" type="application/rss+xml" />
    <description>Notes on design, training/facilitation, and web development from Mohamed Dhia Arfa's portfolio.</description>
    <language>en</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
