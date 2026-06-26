import type { Metadata } from "next"
import DeveloperPageClient from "./DeveloperPageClient"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/developer",
  title: "Web Developer Tunisia | React & Next.js · Mohamed Dhia Arfa",
  description:
    "Design-trained developer shipping Next.js apps with live demos and GitHub. Featured: DigiMyTech AI talent hub (PFE), CRIT Tunisie, Best Dates & Fruits.",
  keywords: ["web developer", "React", "Next.js", "frontend developer", "Tunisia", "UI/UX", "AI", "Supabase", "portfolio"],
  openGraph: {
    title: "React & Next.js Web Developer · Mohamed Dhia Arfa",
    description: "Live demos, GitHub, and case studies. AI-integrated products and production client sites.",
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
      url: "https://digimytch.webflow.io/",
      author: { "@type": "Person", name: "Mohamed Dhia Arfa" },
    },
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
