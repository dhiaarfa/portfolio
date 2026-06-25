import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightsPageClient from "./InsightsPageClient"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = pageMetadata({
  path: "/insights",
  title: "Insights — Design, Training & Development | Mohamed Dhia",
  description:
    "Tips on graphic design, youth training facilitation, and web development from Mohamed Dhia Arfa, based in Tunisia.",
})

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <InsightsPageClient />
      <Footer />
    </div>
  )
}
