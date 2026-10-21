import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"
import { pageMetadata } from "@/lib/page-metadata"
import { ABOUT_META, aboutJsonLd } from "@/lib/about-seo"

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: ABOUT_META.en.title,
  description: ABOUT_META.en.description,
})

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd("en")) }} />
      <Navbar />
      <main id="main-content">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
