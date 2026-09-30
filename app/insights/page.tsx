import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightsPageClient from "./InsightsPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"

const baseInsightsMetadata = pageMetadata({
  path: "/insights",
  // Sep 30 fix: was missing "Arfa" -- every other page's title ends in the
  // full "Mohamed Dhia Arfa", this was the one inconsistent one.
  title: "Insights, Design, Training & Development | Mohamed Dhia Arfa",
  description:
    "Tips on graphic design, youth training facilitation, and web development from Mohamed Dhia Arfa, based in Tunisia.",
  keywords: ["graphic design tips", "youth training facilitation", "web development", "Next.js", "brand identity", "workshop facilitation", "Tunisia"],
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
