import type { Metadata } from "next"
import DeveloperPageClient from "./DeveloperPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/developer",
  // Master roadmap 4.1: result language, framework names out of the title.
  title: "Freelance Web Developer in Tunisia | Design-Led Websites · Mohamed Dhia Arfa",
  description:
    "Fast, mobile-first websites in Arabic, French and English for businesses that outgrew a Facebook page. Live: CRIT Tunisie, Best Dates & Fruits, DigiMyTech.",
  keywords: ["web developer", "React", "Next.js", "frontend developer", "Tunisia", "UI/UX", "AI", "Supabase", "portfolio"],
  openGraph: {
    title: "Design-Led Web Developer · Mohamed Dhia Arfa",
    description: "Websites and web apps that are clear, fast and design-led. Live client sites, demos and case studies.",
  },
})

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Mohamed Dhia Arfa",
      jobTitle: "Web Developer",
      url: `${SITE_URL}/developer`,
      sameAs: [siteConfig.github, siteConfig.linkedin],
    },
    {
      "@type": "SoftwareApplication",
      name: "DigiMyTech Talent Hub",
      applicationCategory: "WebApplication",
      description: "AI-powered talent hub for CV prep, skill matching, and application tracking.",
      url: "https://digimytch-talent-hub.vercel.app/",
      author: { "@type": "Person", name: "Mohamed Dhia Arfa" },
    },
    breadcrumbJsonLd("Developer", "/developer"),
  ],
}

export default function DeveloperPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DeveloperPageClient />
    </>
  )
}
