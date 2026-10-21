import { SITE_URL } from "@/lib/profile"
import { PERSON_ID, PERSON_NAME, PERSON_SHORT_BIO, PERSON_FAQ, ABOUT_PATH } from "@/lib/identity"

type L = "en" | "fr" | "ar"

export const ABOUT_META: Record<L, { title: string; description: string }> = {
  en: {
    title: `${PERSON_NAME}: Designer, Certified Trainer & Web Developer`,
    description: PERSON_SHORT_BIO.en,
  },
  fr: {
    title: `${PERSON_NAME} : designer, formateur certifié et développeur web`,
    description: PERSON_SHORT_BIO.fr,
  },
  ar: {
    title: "محمد ضياء عرفة: مصمم جرافيك ومدرّب معتمد ومطوّر ويب",
    description: PERSON_SHORT_BIO.ar,
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
