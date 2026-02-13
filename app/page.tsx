import HomePageClient from "./HomePageClient"

export const metadata = {
  title: "Mohamed Dhia Arfa - Multi-Disciplinary Professional",
  description: "Designer • Trainer • Developer based in Tunisia. 990+ participants trained, 450+ hours delivered. Explore specialized portfolios in training, graphic design, and web development.",
  keywords: ["Mohamed Dhia Arfa", "trainer", "graphic designer", "web developer", "Tunisia", "CNFCPP certified", "youth development"],
  openGraph: {
    title: "Mohamed Dhia Arfa - Designer, Trainer & Developer",
    description: "Multi-disciplinary professional specializing in training, graphic design, and web development.",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
