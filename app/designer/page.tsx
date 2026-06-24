import type { Metadata } from "next"
import DesignerPageClient from "./DesignerPageClient"
import { pageMetadata } from "@/lib/page-metadata"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/designer",
  title: "Creative & Marketing | Brand Identity, Social Media & Training — Zia Studio · Mohamed Dhia Arfa",
  description:
    "Creative & Marketing work by Mohamed Dhia Arfa — brand identity, social media content, training & education. Zia Studio, Tunisia.",
  keywords: ["creative marketing", "brand identity", "social media", "visual design", "training", "Tunisia", "Zia Studio"],
  openGraph: {
    title: "Zia Studio · Creative & Marketing",
    description:
      "Graphic design and branding work by Mohamed Dhia Arfa — visual identities, campaigns, and UI/UX projects from Zia Studio.",
  },
})

export default function DesignerPage() {
  return <DesignerPageClient />
}
