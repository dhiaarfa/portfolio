import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import LibraryContent from "@/components/library-content"
import { pageMetadata } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string }> = {
  fr: {
    title: "Bibliothèque de films, séries et documentaires | Dhia Arfa",
    description: "Les films, séries et documentaires que Mohamed Dhia Arfa a vus et recommande, dans une liste tenue à jour.",
  },
  ar: {
    title: "مكتبة الأفلام والمسلسلات والوثائقيات | محمد ضياء عرفة",
    description: "الأفلام والمسلسلات والوثائقيات التي شاهدها محمد ضياء عرفة ويوصي بها، في قائمة محدّثة باستمرار.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}/library`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/library",
  })
}

export default async function LocaleLibraryPage({ params }: Props) {
  const { locale } = await params
  if (!META[locale as "fr" | "ar"]) notFound()
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
