import type { Metadata } from "next"
import TrainerClientPage from "./TrainerClientPage"
import { pageMetadata } from "@/lib/page-metadata"
import { SITE_URL, formatStat } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/trainer",
  title: "Certified Trainer & Youth Development Coach Tunisia | Mohamed Dhia Arfa",
  description:
    "CNFCPP-certified trainer helping NGOs, schools, and youth organizations run workshops that change behavior. 1000+ participants trained in Arabic, French, and English.",
  keywords: ["trainer", "CNFCPP certified", "youth development", "leadership training", "Tunisia", "facilitation", "non-formal education", "train the trainer"],
  openGraph: {
    title: "Youth Trainer & Facilitator · Mohamed Dhia Arfa",
    description:
      "Book workshops, multi-session programs, and train-the-trainer for NGOs and youth organizations across Tunisia.",
  },
})

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Mohamed Dhia Arfa",
      jobTitle: "Certified Trainer & Facilitator",
      url: `${SITE_URL}/trainer`,
      image: `${SITE_URL}/images/photos/dhia-trainer-hero.png`,
      knowsLanguage: ["Arabic", "French", "English"],
      sameAs: [siteConfig.linkedin, siteConfig.behance],
    },
    {
      "@type": "Service",
      name: "Youth Development Training & Facilitation",
      provider: { "@type": "Person", name: "Mohamed Dhia Arfa" },
      areaServed: { "@type": "Country", name: "Tunisia" },
      description: `Workshops and train-the-trainer programs for NGOs and youth organizations. ${formatStat("participantsTrained")} participants trained.`,
      url: `${SITE_URL}/trainer`,
    },
    {
      "@type": "Course",
      name: "Half-Day Youth Workshop",
      description: "Custom non-formal education workshop for NGOs, schools, and youth clubs.",
      provider: { "@type": "Person", name: "Mohamed Dhia Arfa" },
      inLanguage: ["ar", "fr", "en"],
      url: `${SITE_URL}/trainer#training-offers`,
    },
  ],
}

export default function TrainerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TrainerClientPage />
    </>
  )
}
