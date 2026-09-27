import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import FreebiesClient from "../../freebies/FreebiesClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string; breadcrumb: string }> = {
  fr: {
    title: "Ressources Gratuites de Design & Formation | Mohamed Dhia Arfa",
    description:
      "Modèles, guides et outils gratuits de Mohamed Dhia, designer graphique et formateur de jeunes basé en Tunisie. Téléchargement immédiat.",
    breadcrumb: "Ressources gratuites",
  },
  ar: {
    title: "موارد تصميم وتدريب مجانية | محمد ضياء عرفة",
    description: "قوالب وأدلة وأدوات مجانية من محمد ضياء، مصمم جرافيك ومدرّب شباب مقيم في تونس. تحميل فوري.",
    breadcrumb: "موارد مجانية",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}/freebies`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/freebies",
  })
}

export default async function LocaleFreebiesPage({ params }: Props) {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) notFound()

  const jsonLd = breadcrumbJsonLd(m.breadcrumb, `/${locale}/freebies`)

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
