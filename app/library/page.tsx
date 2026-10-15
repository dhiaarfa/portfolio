import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import LibraryContent from "@/components/library-content"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = pageMetadata({
  path: "/library",
  title: "Movies, series & documentaries library | Mohamed Dhia Arfa",
  description: "The movies, series and documentaries Mohamed Dhia Arfa has watched and recommends, kept as a live list.",
})

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <LibraryContent />
      </main>
      <Footer />
    </div>
  )
}
