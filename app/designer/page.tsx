import type { Metadata } from "next"
import DesignerPageClient from "./DesignerPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import { offerCatalogJsonLd, DESIGN_PRICES } from "@/lib/pricing"
import { SITE_URL } from "@/lib/profile"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/designer",
  // Master roadmap 4.1: brand identity / graphic design Tunisia / visual
  // systems. The old title also said "Training", which is /trainer's job.
  // <=60 chars (was 75); Zia Studio stays in the description and schema.
  title: "Brand Identity Designer in Tunisia | Mohamed Dhia Arfa",
  description:
    "Brand identities, visual systems, campaigns and packaging by Mohamed Dhia Arfa and Zia Studio, Tunisia. Clear, consistent branding. Start a project.",
  keywords: ["brand identity", "graphic designer Tunisia", "visual identity", "logo design", "packaging design", "Zia Studio"],
  openGraph: {
    title: "Brand identity that stays consistent everywhere · Zia Studio",
    description:
      "Logo, social templates, packaging and campaigns for cafés, travel agencies and product brands, in Tunisia and abroad.",
  },
})

// Oct 2026: /trainer and /developer already described their offer in
// structured data; /designer only had a breadcrumb.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    breadcrumbJsonLd("Designer", "/designer"),
    {
      "@type": "Service",
      name: "Brand identity & graphic design",
      serviceType: "Brand identity design",
      description:
        "Logo, visual identity systems, social media templates, packaging, print and campaigns that keep a brand consistent across every channel.",
      provider: {
        "@type": "Person",
        name: "Mohamed Dhia Arfa",
        url: SITE_URL,
        brand: { "@type": "Brand", name: "Zia Studio" },
      },
      areaServed: [{ "@type": "Country", name: "Tunisia" }, "Worldwide"],
      availableLanguage: ["ar", "fr", "en"],
      url: `${SITE_URL}/designer`,
      hasOfferCatalog: offerCatalogJsonLd("Design packages", DESIGN_PRICES),
    },
  ],
}

export default function DesignerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DesignerPageClient />
    </>
  )
}
