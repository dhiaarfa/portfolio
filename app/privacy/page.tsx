import type { Metadata } from "next"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import PrivacyContent from "@/components/privacy-content"
import { pageMetadata } from "@/lib/page-metadata"

export const metadata: Metadata = pageMetadata({
  path: "/privacy",
  title: "Legal notice & privacy | Mohamed Dhia Arfa",
  description:
    "Who runs dhia-portfolio.com, where it is hosted, what data the contact form, newsletter and chat collect, and how to access or delete it.",
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  )
}
