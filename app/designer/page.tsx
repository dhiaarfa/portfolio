import type { Metadata } from "next"
import DesignerPageClient from "./DesignerPageClient"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Graphic Designer Tunisia | Brand Identity & UI/UX — Zia Studio · Mohamed Dhia Arfa",
  description:
    "Zia Studio — creative design studio by Mohamed Dhia Arfa. Brand identity, logo design, visual systems, and UI/UX for startups, NGOs, and organizations in Tunisia and beyond.",
  keywords: ["graphic designer", "brand identity", "visual design", "UI/UX", "Tunisia", "Zia Studio", "logo design"],
  openGraph: {
    title: "Zia Studio · Graphic Design & Brand Identity",
    description:
      "Graphic design and branding work by Mohamed Dhia Arfa — visual identities, campaigns, and UI/UX projects from Zia Studio.",
    type: "website",
    url: "https://dhia-portfolio.me/designer",
  },
}

export default function DesignerPage() {
  return <DesignerPageClient />
}
