import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DesignerPageClient from "../../designer/DesignerPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

export const dynamic = "force-static"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string; ogTitle: string; ogDescription: string; breadcrumb: string }> = {
  fr: {
    title: "Designer d'identité de marque en Tunisie | Dhia Arfa",
    description:
      "Identités de marque, systèmes visuels, campagnes et packaging par Mohamed Dhia Arfa et Zia Studio, Tunisie. Une marque claire et cohérente.",
    ogTitle: "Une identité de marque cohérente partout · Zia Studio",
    ogDescription:
      "Logo, templates réseaux sociaux, emballages et campagnes pour cafés, agences de voyage et marques de produits, en Tunisie et à l'étranger.",
    breadcrumb: "Designer",
  },
  ar: {
    title: "مصمم هوية العلامات التجارية في تونس | محمد ضياء عرفة",
    description:
      "هويات بصرية وأنظمة تصميم وحملات وتغليف من محمد ضياء عرفة وZia Studio، تونس. علامة تجارية واضحة ومتناسقة.",
    ogTitle: "هوية بصرية متناسقة في كل مكان · Zia Studio",
    ogDescription: "شعار وقوالب تواصل اجتماعي وتغليف وحملات للمقاهي ووكالات الأسفار وعلامات المنتجات، في تونس وخارجها.",
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
