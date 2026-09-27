import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightsPageClient from "./InsightsPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"

const baseInsightsMetadata = pageMetadata({
  path: "/insights",
  title: "Insights, Design, Training & Development | Mohamed Dhia",
  description:
    "Tips on graphic design, youth training facilitation, and web development from Mohamed Dhia Arfa, based in Tunisia.",
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

const jsonLd = breadcrumbJsonLd("Insights", "/insights")

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
