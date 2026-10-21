import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import AboutContent from "@/components/about-content"
import { pageMetadata } from "@/lib/page-metadata"
import { ABOUT_META, aboutJsonLd } from "@/lib/about-seo"
import type { Language } from "@/lib/translations"

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (locale !== "fr" && locale !== "ar") return {}
  return pageMetadata({
    path: `/${locale}/about`,
    title: ABOUT_META[locale].title,
    description: ABOUT_META[locale].description,
    locale: locale as Language,
    hreflangPath: "/about",
  })
}

export default async function LocaleAboutPage({ params }: Props) {
  const { locale } = await params
  if (locale !== "fr" && locale !== "ar") notFound()
  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd(locale)) }} />
      <Navbar />
      <main id="main-content">
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}
