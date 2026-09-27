import type { Metadata } from "next"
import { notFound } from "next/navigation"
import HomePageClient from "../HomePageClient"
import { pageMetadata } from "@/lib/page-metadata"
import type { Language } from "@/lib/translations"

export const dynamic = "force-static"

type Props = { params: Promise<{ locale: string }> }

const META: Record<"fr" | "ar", { title: string; description: string; ogTitle: string; ogDescription: string }> = {
  fr: {
    title: "Mohamed Dhia Arfa, Designer Graphique, Formateur & Développeur Web · Tunisie",
    description:
      "Créatif multidisciplinaire basé en Tunisie. Design de marque avec Zia Studio, formation en développement des jeunes (1120+ participants) et développement web Next.js. Réservez une consultation gratuite.",
    ogTitle: "Mohamed Dhia Arfa, Designer, Formateur & Développeur",
    ogDescription: "Designer graphique, formateur certifié et développeur web basé en Tunisie.",
  },
  ar: {
    title: "محمد ضياء عرفة، مصمم جرافيك ومدرّب ومطوّر ويب · تونس",
    description:
      "مبدع متعدد التخصصات مقيم في تونس. تصميم العلامات التجارية عبر Zia Studio، وتدريب في تنمية الشباب (أكثر من 1120 مشاركًا)، وتطوير الويب باستخدام Next.js. احجز استشارة مجانية.",
    ogTitle: "محمد ضياء عرفة، مصمم ومدرّب ومطوّر",
    ogDescription: "مصمم جرافيك ومدرّب معتمد ومطوّر ويب مقيم في تونس.",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/",
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  })
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params
  if (locale !== "fr" && locale !== "ar") notFound()
  return <HomePageClient />
}
