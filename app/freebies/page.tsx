import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import FreebiesClient from "./FreebiesClient"

export const metadata: Metadata = {
  title: "Free Design & Training Resources | Mohamed Dhia Arfa",
  description:
    "Free templates, guides, and tools from Mohamed Dhia — graphic designer and youth trainer based in Tunisia. Download instantly.",
}

export default function FreebiesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main>
        <FreebiesClient />
      </main>
      <Footer />
    </div>
  )
}

