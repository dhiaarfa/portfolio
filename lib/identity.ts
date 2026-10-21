import { SITE_URL, formatStat, certifications, education, aboutExperience, civicExperience } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

/**
 * Who Mohamed Dhia Arfa is, in one place (Oct 2026, name SEO / GEO pass).
 *
 * Google and AI assistants (ChatGPT, Gemini, Perplexity, Claude) build their
 * answer about a person from what is consistent across sources. This file is
 * the single source for: the /about page, the site-wide Person schema, the
 * About block in /llms.txt and the facts the site chat answers from. Every
 * fact comes from lib/profile.ts; nothing here is invented. Update the
 * profile data and all four stay in sync.
 *
 * Facebook is deliberately NOT in `sameAs`: Dhia keeps it personal and does
 * not want it tied to his professional identity.
 */

export const PERSON_NAME = "Mohamed Dhia Arfa"
export const PERSON_ID = `${SITE_URL}/#person`
export const ABOUT_PATH = "/about"

/** Spellings people actually type, including the Arabic and French forms. */
export const PERSON_ALT_NAMES = [
  "Dhia Arfa",
  "Mohamed Dhia",
  "Med Dhia Arfa",
  "Mohammed Dhia Arfa",
  "Arfa Mohamed Dhia",
  "محمد ضياء عرفة",
  "ضياء عرفة",
]

/** Public professional profiles only (see the Facebook note above). */
export const PERSON_SAME_AS = [siteConfig.linkedin, siteConfig.behance, siteConfig.github, siteConfig.instagram]

type L = "en" | "fr" | "ar"

const current = aboutExperience.filter((e) => /present/i.test(e.period))
// "Marketing Director, Web Developer and Visa & Travel Agent at YOUGO TRAVEL"
const currentRoles = [...new Set(current.map((e) => e.company))].map((company) => {
  const roles = current.filter((e) => e.company === company).map((e) => e.role)
  const list = roles.length > 1 ? `${roles.slice(0, -1).join(", ")} and ${roles[roles.length - 1]}` : roles[0]
  return `${list} at ${company}`
})
const degree = education[0]

export const PERSON_SHORT_BIO: Record<L, string> = {
  en: `${PERSON_NAME} is a Tunisian graphic designer, CNFCPP-certified trainer and web developer. He runs the design brand Zia Studio, has trained ${formatStat("participantsTrained")} participants in Tunisia, Morocco and Qatar, and builds fast websites in Arabic, French and English.`,
  fr: `${PERSON_NAME} est un designer graphique, formateur certifié CNFCPP et développeur web tunisien. Il dirige la marque de design Zia Studio, a formé ${formatStat("participantsTrained")} participants en Tunisie, au Maroc et au Qatar, et crée des sites web rapides en arabe, français et anglais.`,
  ar: `محمد ضياء عرفة مصمم جرافيك تونسي ومدرّب معتمد من المركز الوطني لتكوين المكوّنين (CNFCPP) ومطوّر ويب. يدير علامة التصميم Zia Studio، ودرّب أكثر من ${profileNumber("participantsTrained")} مشارك في تونس والمغرب وقطر، ويطوّر مواقع ويب سريعة بالعربية والفرنسية والإنجليزية.`,
}

function profileNumber(key: "participantsTrained" | "trainingHours" | "trainingCycles" | "yearsExperience" | "designProjects" | "brands") {
  return formatStat(key).replace("+", "")
}

export const PERSON_LONG_BIO: Record<L, string[]> = {
  en: [
    PERSON_SHORT_BIO.en,
    `As a designer he creates brand identities, social media systems, packaging and motion design for cafés, travel agencies, NGOs and product brands (${formatStat("designProjects")} design projects for ${formatStat("brands")} brands).`,
    `As a trainer he designs and runs workshops, multi-session programmes and train-the-trainer courses for NGOs, schools and youth programmes: ${formatStat("trainingHours")} training hours across ${formatStat("trainingCycles")} training events. He is a National Certified Trainer (CNFCPP, ${certifications.find((c) => c.id === "cnfcpp")?.year ?? "2024"}).`,
    `As a web developer he builds React and Next.js websites and web apps, multilingual with right-to-left Arabic. He holds a ${degree.degree} from ${degree.school}, ${degree.location} (${degree.year}).`,
    currentRoles.length ? `He currently works as ${currentRoles.join(" and ")}.` : "",
  ].filter(Boolean),
  fr: [
    PERSON_SHORT_BIO.fr,
    `Comme designer, il crée des identités de marque, des systèmes pour les réseaux sociaux, du packaging et du motion design pour des cafés, des agences de voyage, des ONG et des marques de produits (${formatStat("designProjects")} projets de design pour ${formatStat("brands")} marques).`,
    `Comme formateur, il conçoit et anime des ateliers, des programmes en plusieurs sessions et des formations de formateurs pour des ONG, des écoles et des programmes jeunesse : ${formatStat("trainingHours")} heures de formation sur ${formatStat("trainingCycles")} événements. Il est formateur certifié national (CNFCPP).`,
    `Comme développeur web, il crée des sites et applications web en React et Next.js, multilingues avec l'arabe de droite à gauche. Il est titulaire d'une ${degree.degreeFr} (${degree.school}, ${degree.locationFr}, ${degree.year}).`,
  ],
  ar: [
    PERSON_SHORT_BIO.ar,
    `كمصمم، يصنع الهويات البصرية وأنظمة التصميم لوسائل التواصل الاجتماعي والتغليف والموشن ديزاين للمقاهي ووكالات السفر والجمعيات وعلامات المنتجات (أكثر من ${profileNumber("designProjects")} مشروع تصميم لأكثر من ${profileNumber("brands")} علامة).`,
    `كمدرّب، يصمّم ويقدّم ورشات وبرامج متعددة الجلسات ودورات تكوين المكوّنين للجمعيات والمدارس وبرامج الشباب: أكثر من ${profileNumber("trainingHours")} ساعة تدريب في ${profileNumber("trainingCycles")} حدثًا تدريبيًا. وهو مدرّب وطني معتمد (CNFCPP).`,
    `كمطوّر ويب، يبني مواقع وتطبيقات ويب بتقنيتي React وNext.js متعددة اللغات مع دعم العربية من اليمين إلى اليسار. حاصل على ${degree.degreeAr} من ${degree.school}، ${degree.locationAr} (${degree.year}).`,
  ],
}

export type FaqItem = { q: string; a: string }

export const PERSON_FAQ: Record<L, FaqItem[]> = {
  en: [
    { q: `Who is ${PERSON_NAME}?`, a: PERSON_SHORT_BIO.en },
    { q: `What does ${PERSON_NAME} do?`, a: "Three things: brand identity and graphic design (including social media design and motion design), training and facilitation for NGOs, schools and youth programmes, and web development (React and Next.js websites in Arabic, French and English)." },
    { q: `Where is ${PERSON_NAME} based?`, a: "In Tunisia. He works with clients in Tunisia and abroad, in person and remotely, in Arabic, French and English." },
    { q: `Is ${PERSON_NAME} a certified trainer?`, a: `Yes. He is a National Certified Trainer (CNFCPP) and has delivered ${formatStat("trainingHours")} training hours to ${formatStat("participantsTrained")} participants in Tunisia, Morocco and Qatar.` },
    { q: "What is Zia Studio?", a: `Zia Studio is ${PERSON_NAME}'s personal design brand for brand identities, social media design and packaging.` },
    { q: `How can I work with ${PERSON_NAME}?`, a: `Book a free 30-minute call at ${siteConfig.calendlyUrl} or email ${siteConfig.email}. Every project gets a written quote after the call.` },
  ],
  fr: [
    { q: `Qui est ${PERSON_NAME} ?`, a: PERSON_SHORT_BIO.fr },
    { q: `Que fait ${PERSON_NAME} ?`, a: "Trois métiers : identité de marque et design graphique (dont design pour les réseaux sociaux et motion design), formation et facilitation pour les ONG, écoles et programmes jeunesse, et développement web (sites React et Next.js en arabe, français et anglais)." },
    { q: `Où est basé ${PERSON_NAME} ?`, a: "En Tunisie. Il travaille avec des clients en Tunisie et à l'étranger, en présentiel et à distance, en arabe, français et anglais." },
    { q: `${PERSON_NAME} est-il formateur certifié ?`, a: `Oui. Il est formateur certifié national (CNFCPP) et a animé ${formatStat("trainingHours")} heures de formation pour ${formatStat("participantsTrained")} participants en Tunisie, au Maroc et au Qatar.` },
    { q: "Qu'est-ce que Zia Studio ?", a: `Zia Studio est la marque de design personnelle de ${PERSON_NAME} : identités de marque, design pour les réseaux sociaux et packaging.` },
    { q: `Comment travailler avec ${PERSON_NAME} ?`, a: `Réservez un appel gratuit de 30 minutes sur ${siteConfig.calendlyUrl} ou écrivez à ${siteConfig.email}. Chaque projet reçoit un devis écrit après l'appel.` },
  ],
  ar: [
    { q: "من هو محمد ضياء عرفة؟", a: PERSON_SHORT_BIO.ar },
    { q: "ماذا يعمل محمد ضياء عرفة؟", a: "ثلاثة مجالات: الهوية البصرية والتصميم الجرافيكي (بما في ذلك تصميم وسائل التواصل الاجتماعي والموشن ديزاين)، والتدريب والتيسير للجمعيات والمدارس وبرامج الشباب، وتطوير الويب (مواقع React وNext.js بالعربية والفرنسية والإنجليزية)." },
    { q: "أين يقيم محمد ضياء عرفة؟", a: "في تونس. يعمل مع عملاء في تونس وخارجها، حضوريًا وعن بُعد، بالعربية والفرنسية والإنجليزية." },
    { q: "هل محمد ضياء عرفة مدرّب معتمد؟", a: `نعم. هو مدرّب وطني معتمد (CNFCPP)، وقدّم أكثر من ${profileNumber("trainingHours")} ساعة تدريب لأكثر من ${profileNumber("participantsTrained")} مشارك في تونس والمغرب وقطر.` },
    { q: "ما هي Zia Studio؟", a: "Zia Studio هي علامة التصميم الشخصية لمحمد ضياء عرفة: هويات بصرية وتصميم لوسائل التواصل الاجتماعي وتغليف." },
    { q: "كيف أتعامل مع محمد ضياء عرفة؟", a: `احجز مكالمة مجانية لمدة 30 دقيقة على ${siteConfig.calendlyUrl} أو راسله على ${siteConfig.email}. يحصل كل مشروع على عرض سعر مكتوب بعد المكالمة.` },
  ],
}

/** Plain-text fact sheet: used by /llms.txt and the site chat's system prompt. */
export function personFactSheet(): string {
  const roles = aboutExperience.map((e) => `- ${e.period}: ${e.role}, ${e.company}`).join("\n")
  const civic = civicExperience.map((e) => `- ${e.period}: ${e.role}, ${e.company}`).join("\n")
  const certs = certifications.map((c) => `- ${c.title} (${c.issuer}, ${c.year})`).join("\n")
  const edu = education.map((e) => `- ${e.year}: ${e.degree}, ${e.school}, ${e.location}`).join("\n")
  return `Name: ${PERSON_NAME} (also written: ${PERSON_ALT_NAMES.join(", ")})
Based in: Tunisia. Works in Arabic, French and English, in person and remotely.
Professions: graphic designer (brand identity, social media design, packaging, motion design), CNFCPP-certified trainer and facilitator, web developer (React, Next.js). Also offers prompt engineering and voice-over.
Design brand: Zia Studio (his own brand, not a separate company).
Key numbers: ${formatStat("participantsTrained")} participants trained, ${formatStat("trainingHours")} training hours, ${formatStat("trainingCycles")} training events, ${formatStat("designProjects")} design projects, ${formatStat("brands")} brands, ${formatStat("yearsExperience")} years of experience.
Work outside Tunisia: Morocco (IFMSA SCORP camp in Marrakech, training new trainers, Aug 2025), Qatar (international hackathon in Doha, Dec 2024), AIESEC in Lebanon (national business-development role, 2023-2024).

Experience:
${roles}

Civic and NGO roles:
${civic}

Education:
${edu}

Certifications:
${certs}

Official links: website ${SITE_URL} (about page ${SITE_URL}${ABOUT_PATH}), LinkedIn ${siteConfig.linkedin}, Behance ${siteConfig.behance}, GitHub ${siteConfig.github}, Zia Studio Instagram ${siteConfig.instagram}.
Contact: ${siteConfig.email}, free 30-minute call ${siteConfig.calendlyUrl}.`
}

/** The site-wide schema.org Person. Other pages reference it by PERSON_ID. */
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON_NAME,
    givenName: "Mohamed Dhia",
    familyName: "Arfa",
    alternateName: PERSON_ALT_NAMES,
    description: PERSON_SHORT_BIO.en,
    jobTitle: ["Graphic Designer", "Certified Trainer", "Web Developer"],
    url: SITE_URL,
    mainEntityOfPage: `${SITE_URL}${ABOUT_PATH}`,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/photos/dhia-hero-green.jpg`,
      caption: `${PERSON_NAME}, graphic designer, trainer and web developer`,
    },
    email: siteConfig.email,
    telephone: "+216-53-580-272",
    sameAs: PERSON_SAME_AS,
    nationality: { "@type": "Country", name: "Tunisia" },
    address: { "@type": "PostalAddress", addressCountry: "TN" },
    knowsLanguage: ["ar", "fr", "en"],
    brand: { "@type": "Brand", name: "Zia Studio", url: `${SITE_URL}/designer` },
    worksFor: [...new Set(current.map((e) => e.company))].map((name) => ({ "@type": "Organization", name })),
    hasOccupation: [
      { "@type": "Occupation", name: "Graphic Designer", occupationLocation: { "@type": "Country", name: "Tunisia" } },
      { "@type": "Occupation", name: "Trainer", occupationLocation: { "@type": "Country", name: "Tunisia" } },
      { "@type": "Occupation", name: "Web Developer", occupationLocation: { "@type": "Country", name: "Tunisia" } },
    ],
    knowsAbout: [
      "Graphic Design",
      "Brand Identity",
      "Logo Design",
      "Social Media Design",
      "Motion Design",
      "Packaging Design",
      "UI/UX Design",
      "Training & Education",
      "Training of Trainers",
      "Facilitation",
      "Non-Formal Education",
      "Youth Development",
      "Leadership",
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Search Engine Optimization",
      "Prompt Engineering",
      "Voice-over",
      "Digital Marketing",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe After Effects",
      "Figma",
    ],
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.school,
      address: { "@type": "PostalAddress", addressLocality: e.location.split(",")[0], addressCountry: "TN" },
    })),
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      credentialCategory: "certificate",
      recognizedBy: { "@type": "Organization", name: c.issuer },
    })),
    memberOf: [{ "@type": "Organization", name: "AIESEC" }],
  }
}
