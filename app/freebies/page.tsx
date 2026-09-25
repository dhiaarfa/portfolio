import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import FreebiesClient from "./FreebiesClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"

export const metadata: Metadata = pageMetadata({
  path: "/freebies",
  title: "Free Design & Training Resources | Mohamed Dhia Arfa",
  description:
    "Free templates, guides, and tools from Mohamed Dhia — graphic designer and youth trainer based in Tunisia. Download instantly.",
})

const jsonLd = breadcrumbJsonLd("Freebies", "/freebies")

export default function FreebiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main-content">
        <FreebiesClient />
      </main>
      <Footer />
    </div>
  )
}
