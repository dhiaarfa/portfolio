import { SITE_URL, formatStat } from "@/lib/profile"
import { PERSON_ID, PERSON_NAME, PERSON_FAQ, ABOUT_PATH } from "@/lib/identity"

type L = "en" | "fr" | "ar"

// Titles <=60 and descriptions 70-160 characters (OpenSEO audit, Oct 2026).
export const ABOUT_META: Record<L, { title: string; description: string }> = {
  en: {
    title: `${PERSON_NAME} | Designer, Trainer & Web Developer`,
    description:
      `Mohamed Dhia Arfa: Tunisian graphic designer (Zia Studio), CNFCPP-certified trainer of ${formatStat("participantsTrained")} participants, and web developer in Arabic, French, English.`,
  },
  fr: {
    title: `${PERSON_NAME} | Designer, formateur, dév web`,
    description:
      "Mohamed Dhia Arfa : designer graphique tunisien (Zia Studio), formateur certifié CNFCPP de 1 120+ participants et développeur web en arabe, français, anglais.",
  },
  ar: {
    title: "محمد ضياء عرفة | مصمم جرافيك ومدرّب ومطوّر ويب",
    description:
      "محمد ضياء عرفة: مصمم جرافيك تونسي (Zia Studio)، مدرّب معتمد CNFCPP درّب أكثر من 1120 مشاركًا، ومطوّر ويب بالعربية والفرنسية والإنجليزية.",
  },
}

/** ProfilePage (its main entity is the site-wide Person) + FAQPage. */
export function aboutJsonLd(locale: L) {
  const url = `${SITE_URL}${locale === "en" ? "" : `/${locale}`}${ABOUT_PATH}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": url,
        url,
        name: ABOUT_META[locale].title,
        inLanguage: locale,
        mainEntity: { "@id": PERSON_ID },
        about: { "@id": PERSON_ID },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        inLanguage: locale,
        mainEntity: PERSON_FAQ[locale].map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  }
}
