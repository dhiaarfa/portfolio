import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DesignerPageClient from "../../designer/DesignerPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

export const dynamic = "force-static"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string; ogTitle: string; ogDescription: string; breadcrumb: string }> = {
  fr: {
    title: "Créatif & Marketing | Identité de Marque, Réseaux Sociaux & Formation, Zia Studio · Mohamed Dhia Arfa",
    description:
      "Travaux créatifs et marketing de Mohamed Dhia Arfa : identité de marque, contenu réseaux sociaux, formation. Zia Studio, Tunisie.",
    ogTitle: "Zia Studio · Créatif & Marketing",
    ogDescription:
      "Design graphique et branding par Mohamed Dhia Arfa, identités visuelles, campagnes et projets UI/UX de Zia Studio.",
    breadcrumb: "Designer",
  },
  ar: {
    title: "إبداع وتسويق | هوية العلامة التجارية، وسائل التواصل والتدريب، Zia Studio · محمد ضياء عرفة",
    description:
      "أعمال إبداعية وتسويقية لمحمد ضياء عرفة: هوية العلامة التجارية، محتوى وسائل التواصل الاجتماعي، والتدريب. Zia Studio، تونس.",
    ogTitle: "Zia Studio · إبداع وتسويق",
    ogDescription: "تصميم جرافيكي وهوية بصرية من محمد ضياء عرفة، حملات ومشاريع UI/UX من Zia Studio.",
    breadcrumb: "المصمم",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}/designer`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/designer",
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  })
}

export default async function LocaleDesignerPage({ params }: Props) {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) notFound()

  const jsonLd = breadcrumbJsonLd(m.breadcrumb, `/${locale}/designer`)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DesignerPageClient />
    </>
  )
}
