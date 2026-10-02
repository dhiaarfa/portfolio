import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightsPageClient from "./InsightsPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import { publishedInsightArticles } from "@/lib/insights"
import { SITE_URL } from "@/lib/profile"

const baseInsightsMetadata = pageMetadata({
  path: "/insights",
  // Sep 30 fix: was missing "Arfa" -- every other page's title ends in the
  // full "Mohamed Dhia Arfa", this was the one inconsistent one.
  title: "Insights, Design, Training & Development | Mohamed Dhia Arfa",
  description:
    "Tips on graphic design, youth training facilitation, and web development from Mohamed Dhia Arfa, based in Tunisia.",
  keywords: ["graphic design tips", "youth training facilitation", "web development", "Next.js", "brand identity", "workshop facilitation", "Tunisia"],
  // /fr/insights and /ar/insights exist; declare them (was missing here).
  hreflangPath: "/insights",
})

export const metadata: Metadata = {
  ...baseInsightsMetadata,
  // RSS autodiscovery -- lets feed readers and browsers find /insights/feed.xml
  // on their own, merged in alongside the canonical/hreflang alternates
  // pageMetadata() already sets (not replacing them).
  alternates: {
    ...baseInsightsMetadata.alternates,
    types: { "application/rss+xml": "/insights/feed.xml" },
  },
}

// Breadcrumb + a Blog entity listing every published article (Oct 2026),
// so search engines can tie the posts to this hub and to their author.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd("Insights", "/insights"),
    {
      "@type": "Blog",
      name: "Insights · Mohamed Dhia Arfa",
      url: `${SITE_URL}/insights`,
      inLanguage: ["en", "fr", "ar"],
      author: { "@type": "Person", name: "Mohamed Dhia Arfa", url: SITE_URL },
      blogPost: publishedInsightArticles().map((a) => ({
        "@type": "BlogPosting",
        headline: a.seoTitle,
        url: `${SITE_URL}/insights/${a.slug}`,
        datePublished: a.date,
        image: `${SITE_URL}${a.thumbnail}`,
      })),
    },
  ],
}

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <InsightsPageClient />
      <Footer />
    </div>
  )
}
