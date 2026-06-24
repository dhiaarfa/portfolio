import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"
import { pageMetadata } from "@/lib/page-metadata"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Mohamed Dhia Arfa — Designer, Trainer & Developer · Tunisia",
  description:
    "Learn about Mohamed Dhia Arfa’s journey as a graphic designer, certified trainer, and web developer based in Tunisia. 7+ years of experience and 1000+ participants trained.",
  keywords: ["about", "Mohamed Dhia Arfa", "designer", "trainer", "developer", "Tunisia", "CNFCPP", "professional journey"],
  openGraph: {
    title: "About Mohamed Dhia Arfa",
    description:
      "Background, experience, and story of Mohamed Dhia Arfa — combining design, training, and web development in Tunisia.",
    type: "profile",
  },
})

export default function AboutPage() {
  return <AboutPageClient />
}
