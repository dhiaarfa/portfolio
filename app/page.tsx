import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"
import { pageMetadata } from "@/lib/page-metadata"
import { formatStat } from "@/lib/profile"

export const dynamic = "force-static"

export const metadata: Metadata = pageMetadata({
  path: "/",
  // <=60 chars so Google shows it whole (was 70).
  title: "Mohamed Dhia Arfa | Designer, Trainer & Web Developer",
  description:
    // Master roadmap 4.1: result language, no framework names.
    `Designer, certified trainer and web developer in Tunisia: brand identity with Zia Studio, youth trainings (${formatStat("participantsTrained")} trained), design-led sites. Book a free call.`,
  keywords: [
    "Mohamed Dhia Arfa",
    "graphic designer",
    "certified trainer",
    "web developer",
    "brand identity",
    "youth training",
    "Zia Studio",
    "Tunisia",
  ],
  openGraph: {
    title: "Mohamed Dhia Arfa, Designer, Trainer & Developer",
    description: "Graphic designer, certified trainer, and web developer based in Tunisia.",
  },
})

export default function HomePage() {
  return <HomePageClient />
}
