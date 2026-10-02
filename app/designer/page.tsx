import type { Metadata } from "next"
import DesignerPageClient from "./DesignerPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/designer",
  // Master roadmap 4.1: brand identity / graphic design Tunisia / visual
  // systems. The old title also said "Training", which is /trainer's job.
  title: "Brand Identity & Graphic Design in Tunisia | Zia Studio · Mohamed Dhia Arfa",
  description:
    "Brand identities, visual systems, campaigns and packaging by Mohamed Dhia Arfa and Zia Studio, Tunisia. Clear, consistent branding. Start a project.",
  keywords: ["brand identity", "graphic designer Tunisia", "visual identity", "logo design", "packaging design", "Zia Studio"],
  openGraph: {
    title: "Zia Studio · Creative & Marketing",
    description:
      "Graphic design and branding work by Mohamed Dhia Arfa, visual identities, campaigns, and UI/UX projects from Zia Studio.",
  },
})

const jsonLd = breadcrumbJsonLd("Designer", "/designer")

export default function DesignerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DesignerPageClient />
    </>
  )
}
