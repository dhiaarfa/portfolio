import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import FreebiesClient from "./FreebiesClient"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = pageMetadata({
  path: "/freebies",
  title: "Free Design & Training Resources | Mohamed Dhia Arfa",
  description:
    "Free templates, guides, and tools from Mohamed Dhia — graphic designer and youth trainer based in Tunisia. Download instantly.",
})

export default function FreebiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <FreebiesClient />
      </main>
      <Footer />
    </div>
  )
}
