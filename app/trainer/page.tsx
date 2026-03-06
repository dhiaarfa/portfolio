import type { Metadata } from "next"
import TrainerClientPage from "./TrainerClientPage"

export const metadata: Metadata = {
  title: "Certified Trainer & Youth Development Coach Tunisia | Mohamed Dhia Arfa",
  description:
    "National Certified Trainer (CNFCPP) with 1000+ participants trained, 450+ training hours, and 30+ facilitation hours. Specialized in youth development, leadership, and civic engagement.",
  keywords: ["trainer", "CNFCPP certified", "youth development", "leadership training", "Tunisia", "facilitation", "non-formal education"],
  openGraph: {
    title: "Youth Trainer & Facilitator · Mohamed Dhia Arfa",
    description:
      "Professional trainer and facilitator delivering workshops and programs in youth development, leadership, and civic engagement.",
    type: "website",
    url: "https://dhia-portfolio.me/trainer",
  },
}

export default function TrainerPage() {
  return <TrainerClientPage />
}
