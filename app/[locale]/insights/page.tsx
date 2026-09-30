import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import InsightsPageClient from "../../insights/InsightsPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string; breadcrumb: string }> = {
  fr: {
    // Sep 30 fix: matches app/insights/page.tsx's English title -- was
    // missing "Arfa"/"عرفة", inconsistent with every other page's full name.
    title: "Insights, Design, Formation & Développement | Mohamed Dhia Arfa",
    description:
      "Conseils sur le design graphique, l'animation de formations pour jeunes et le développement web, par Mohamed Dhia Arfa, basé en Tunisie.",
    breadcrumb: "Insights",
  },
  ar: {
    title: "رؤى في التصميم والتدريب والتطوير | محمد ضياء عرفة",
    description: "نصائح حول التصميم الجرافيكي، وتيسير التدريبات الشبابية، وتطوير الويب من محمد ضياء عرفة، المقيم في تونس.",
    breadcrumb: "رؤى",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}/insights`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/insights",
  })
}

export default async function LocaleInsightsPage({ params }: Props) {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) notFound()

  const jsonLd = breadcrumbJsonLd(m.breadcrumb, `/${locale}/insights`)

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <InsightsPageClient />
      <Footer />
    </div>
  )
}
