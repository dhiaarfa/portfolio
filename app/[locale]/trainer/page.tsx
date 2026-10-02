import type { Metadata } from "next"
import { notFound } from "next/navigation"
import TrainerClientPage from "../../trainer/TrainerClientPage"
import { pageMetadata, breadcrumbJsonLd } from "@/lib/page-metadata"
import { SITE_URL, formatStat, profileStats } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"
import type { Language } from "@/lib/translations"

export const dynamic = "force-static"

type Props = { params: Promise<{ locale: string }> }

/** Bare figure ("plus de 1120" / "أكثر من 1120"), from lib/profile.ts. */
const PARTICIPANTS = profileStats.participantsTrained.value

const META: Record<"fr" | "ar", { title: string; description: string; ogTitle: string; ogDescription: string; breadcrumb: string }> = {
  fr: {
    title: "Formateur Certifié & Coach en Développement des Jeunes Tunisie | Mohamed Dhia Arfa",
    description:
      `Formateur certifié CNFCPP aidant ONG, écoles et organisations de jeunesse à mener des ateliers qui changent les comportements. Plus de ${PARTICIPANTS} participants formés en arabe, français et anglais.`,
    ogTitle: "Formateur & Facilitateur Jeunesse · Mohamed Dhia Arfa",
    ogDescription:
      "Réservez des ateliers, programmes multi-séances et formations de formateurs pour ONG et organisations de jeunesse en Tunisie.",
    breadcrumb: "Formateur",
  },
  ar: {
    title: "مدرّب معتمد ومدرّب في تنمية الشباب بتونس | محمد ضياء عرفة",
    description:
      `مدرّب معتمد من CNFCPP يساعد الجمعيات والمدارس ومنظمات الشباب على تنظيم ورشات تُحدث تغييرًا حقيقيًا في السلوك. أكثر من ${PARTICIPANTS} مشاركًا تم تدريبهم بالعربية والفرنسية والإنجليزية.`,
    ogTitle: "مدرّب وميسّر شبابي · محمد ضياء عرفة",
    ogDescription: "احجز ورشات عمل وبرامج متعددة الجلسات وتكوين مدرّبين للجمعيات ومنظمات الشباب في تونس.",
    breadcrumb: "المدرّب",
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) return {}
  return pageMetadata({
    path: `/${locale}/trainer`,
    title: m.title,
    description: m.description,
    locale: locale as Language,
    hreflangPath: "/trainer",
    openGraph: { title: m.ogTitle, description: m.ogDescription },
  })
}

export default async function LocaleTrainerPage({ params }: Props) {
  const { locale } = await params
  const m = META[locale as "fr" | "ar"]
  if (!m) notFound()

  const url = `${SITE_URL}/${locale}/trainer`
  // JSON-LD entity data stays in English, matching the convention already
  // established on /work/[slug] (structured data isn't localized elsewhere
  // on this site) -- only the url fields point at this locale's page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Mohamed Dhia Arfa",
        jobTitle: "Certified Trainer & Facilitator",
        url,
        image: `${SITE_URL}/images/photos/dhia-trainer-hero.png`,
        knowsLanguage: ["Arabic", "French", "English"],
        sameAs: [siteConfig.linkedin, siteConfig.behance],
      },
      {
        "@type": "Service",
        name: "Youth Development Training & Facilitation",
        provider: { "@type": "Person", name: "Mohamed Dhia Arfa" },
        areaServed: { "@type": "Country", name: "Tunisia" },
        description: `Workshops and train-the-trainer programs for NGOs and youth organizations. ${formatStat("participantsTrained")} participants trained.`,
        url,
      },
      {
        "@type": "Course",
        name: "Half-Day Youth Workshop",
        description: "Custom non-formal education workshop for NGOs, schools, and youth clubs.",
        provider: { "@type": "Person", name: "Mohamed Dhia Arfa" },
        inLanguage: ["ar", "fr", "en"],
        url: `${url}#training-offers`,
      },
      breadcrumbJsonLd(m.breadcrumb, `/${locale}/trainer`),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TrainerClientPage />
    </>
  )
}
