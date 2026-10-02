import type { Metadata } from "next"
import { notFound } from "next/navigation"
import DeveloperPageClient from "../../developer/DeveloperPageClient"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import { SITE_URL } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"
import type { Language } from "@/lib/translations"

export const dynamic = "force-static"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string; ogTitle: string; ogDescription: string; breadcrumb: string }> = {
  fr: {
    title: "Développeur web freelance en Tunisie | Sites pensés design · Mohamed Dhia Arfa",
    description:
      "Sites et applications web clairs, rapides et pensés design, livrés de A à Z. En ligne : CRIT Tunisie, Best Dates & Fruits, et le hub IA DigiMyTech.",
    ogTitle: "Développeur web pensé design · Mohamed Dhia Arfa",
    ogDescription: "Démos live, GitHub et études de cas. Produits intégrant l'IA et sites clients en production.",
    breadcrumb: "Développeur",
  },
  ar: {
    title: "مطوّر ويب مستقل في تونس | مواقع بتصميم مدروس · محمد ضياء عرفة",
    description:
      "مواقع وتطبيقات ويب واضحة وسريعة بتصميم مدروس، من الفكرة إلى الإطلاق. مواقع حية لـ CRIT Tunisie وBest Dates & Fruits، ومنصة DigiMyTech.",
    ogTitle: "مطوّر ويب بتصميم مدروس · محمد ضياء عرفة",
    ogDescription: "عروض حية وكود مفتوح على GitHub ودراسات حالة. منتجات مدمجة بالذكاء الاصطناعي ومواقع عملاء فعلية.",
    breadcrumb: "المطوّر",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}/developer`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/developer",
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  })
}

export default async function LocaleDeveloperPage({ params }: Props) {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) notFound()

  const url = `${SITE_URL}/${locale}/developer`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Mohamed Dhia Arfa",
        jobTitle: "Web Developer",
        url,
        sameAs: [siteConfig.github, siteConfig.linkedin],
      },
      {
        "@type": "SoftwareApplication",
        name: "DigiMyTech Talent Hub",
        applicationCategory: "WebApplication",
        description: "AI-powered talent hub for CV prep, skill matching, and application tracking.",
        url: "https://digimytch-talent-hub.vercel.app/",
        author: { "@type": "Person", name: "Mohamed Dhia Arfa" },
      },
      breadcrumbJsonLd(m.breadcrumb, `/${locale}/developer`),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DeveloperPageClient />
    </>
  )
}
