import type { Metadata } from "next"
import HomePageClient from "./HomePageClient"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "Mohamed Dhia Arfa — Graphic Designer, Trainer & Web Developer · Tunisia",
  description:
    "Multi-disciplinary creative based in Tunisia. Brand design via Zia Studio, youth development training (1000+ participants), and Next.js web development. Book a free consultation.",
  keywords: [
    "Mohamed Dhia Arfa",
    "graphic designer",
    "trainer",
    "web developer",
    "Zia Studio",
    "Tunisia",
    "Next.js",
    "React",
  ],
  openGraph: {
    title: "Mohamed Dhia Arfa — Designer, Trainer & Developer",
    description: "Graphic designer, certified trainer, and web developer based in Tunisia.",
    url: "https://dhia-portfolio.me",
    type: "website",
    images: [
      {
        url: "/images/photos/dhia-main.png",
        width: 512,
        height: 512,
        alt: "Mohamed Dhia Arfa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Dhia Arfa — Designer, Trainer & Developer",
    description: "Graphic designer, certified trainer, and web developer based in Tunisia.",
    images: ["/images/photos/dhia-main.png"],
  },
}

export default function HomePage() {
  return <HomePageClient />
}
