import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DesignerPageClient from "../../designer/DesignerPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

export const dynamic = "force-static"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string; ogTitle: string; ogDescription: string; breadcrumb: string }> = {
  fr: {
    title: "Identité de marque & design graphique en Tunisie | Zia Studio · Mohamed Dhia Arfa",
    description:
      "Identités de marque, systèmes visuels, campagnes et packaging par Mohamed Dhia Arfa et Zia Studio, Tunisie. Une marque claire et cohérente.",
    ogTitle: "Zia Studio · Créatif & Marketing",
    ogDescription:
      "Design graphique et branding par Mohamed Dhia Arfa, identités visuelles, campagnes et projets UI/UX de Zia Studio.",
    breadcrumb: "Designer",
  },
  ar: {
    title: "هوية العلامة التجارية والتصميم الجرافيكي في تونس | Zia Studio · محمد ضياء عرفة",
    description:
      "هويات بصرية وأنظمة تصميم وحملات وتغليف من محمد ضياء عرفة وZia Studio، تونس. علامة تجارية واضحة ومتناسقة.",
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
