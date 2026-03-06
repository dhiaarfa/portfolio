import type { Metadata } from "next"
import DeveloperPageClient from "./DeveloperPageClient"

export const metadata: Metadata = {
  title: "Web Developer Tunisia | React & Next.js · Mohamed Dhia Arfa",
  description:
    "Front-end web developer based in Tunisia building modern, performant web applications with React and Next.js. Experience with CRIT Tunisie, Best Dates & Fruits, and other production projects.",
  keywords: ["web developer", "React", "Next.js", "frontend developer", "Tunisia", "UI/UX", "performance", "portfolio"],
  openGraph: {
    title: "React & Next.js Web Developer · Mohamed Dhia Arfa",
    description:
      "Design-first web development portfolio showing production work built with React and Next.js for clients in Tunisia and beyond.",
    type: "website",
    url: "https://dhia-portfolio.me/developer",
  },
}

export default function DeveloperPage() {
  return <DeveloperPageClient />
}
