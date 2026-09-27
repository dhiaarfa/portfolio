/**
 * Single source of truth for profile stats, credentials, and experience.
 * All pages should import from here, do not hard-code conflicting values in JSX.
 *
 * TODO(owner): Confirm items marked below if your records differ.
 */

export const SITE_URL = "https://dhia-portfolio.com"

// Stats verified against CV_General_Detailed_MohamedDhiaArfa.pdf (Aug 2026): 477+ training
// hours across 51 events to 1,120+ participants. Previous figures (1000+/450+) were stale.
export const profileStats = {
  participantsTrained: { value: 1120, suffix: "+", label: "Participants trained" },
  trainingHours: { value: 477, suffix: "+", label: "Training hours" },
  facilitationHours: { value: 30, suffix: "+", label: "Facilitation hours" },
  trainingCycles: { value: 51, suffix: "+", label: "Training events" },
  yearsExperience: { value: 7, suffix: "+", label: "Years experience" },
  designProjects: { value: 50, suffix: "+", label: "Design projects" },
  brands: { value: 20, suffix: "+", label: "Brands" },
  trainingsReceivedHoursNfe: { value: 2000, suffix: "+", label: "NFE hours received" },
} as const

/** Format a stat for display, e.g. "1000+" */
export function formatStat(key: keyof typeof profileStats): string {
  const s = profileStats[key]
  return `${s.value.toLocaleString()}${s.suffix}`
}

export type ProfileLocale = "en" | "fr" | "ar"

export type Certification = {
  id: string
  title: string
  titleFr?: string
  titleAr?: string
  issuer: string
  issuerFr?: string
  issuerAr?: string
  year: string
}

// CNFCPP year confirmed as Dec 2024 against CV_General_Detailed_MohamedDhiaArfa.pdf.
export const certifications: Certification[] = [
  {
    id: "cnfcpp",
    title: "National Certified Trainer (CNFCPP)",
    titleFr: "Formateur Certifié National (CNFCPP)",
    titleAr: "مدرّب معتمد وطنياً (CNFCPP)",
    issuer: "Tunisia · National Certification",
    issuerFr: "Tunisie · Certification Nationale",
    issuerAr: "تونس · شهادة وطنية",
    year: "2024",
  },
  {
    id: "youth-clubs",
    title: "Certified Trainer",
    titleFr: "Formateur Certifié",
    titleAr: "مدرّب معتمد",
    issuer: "Association YOUTH CLUBs",
    year: "2025",
  },
  {
    id: "hubspot",
    title: "Social Media Marketing",
    titleFr: "Marketing des Réseaux Sociaux",
    titleAr: "التسويق عبر وسائل التواصل الاجتماعي",
    issuer: "HubSpot Academy",
    year: "2024",
  },
  {
    id: "inco",
    title: "Green Digital Skills",
    titleFr: "Compétences Numériques Vertes",
    titleAr: "المهارات الرقمية الخضراء",
    issuer: "INCO Academy",
    year: "2024",
  },
  // Confirmed against CV_GraphicDesigner_MohamedDhiaArfa.pdf: GoMyCode Summer Academy, 2023.
  {
    id: "graphic-design",
    title: "Graphic Design with Adobe Illustrator",
    titleFr: "Design Graphique avec Adobe Illustrator",
    titleAr: "التصميم الجرافيكي باستخدام Adobe Illustrator",
    issuer: "GoMyCode Summer Academy",
    year: "2023",
  },
  {
    id: "entrepreneur-leader",
    title: "Certified Trainer Entrepreneur Leader",
    titleFr: "Formateur Certifié Leader Entrepreneur",
    titleAr: "مدرّب معتمد قائد رياديّ",
    issuer: "International Certification",
    issuerFr: "Certification Internationale",
    issuerAr: "شهادة دولية",
    year: "2025",
  },
]

export type EducationEntry = {
  id: string
  year: string
  degree: string
  degreeFr?: string
  degreeAr?: string
  school: string
  location: string
  locationFr?: string
  locationAr?: string
}

export const education: EducationEntry[] = [
  {
    id: "iset-sousse",
    year: "2023 – 2026",
    degree: "Bachelor of Science in Web Development & Multimedia, with Honors",
    degreeFr: "Licence en Développement Web et Multimédia, avec Mention",
    degreeAr: "إجازة في تطوير الويب والوسائط المتعددة، بامتياز",
    school: "Higher Institute of Technological Studies (ISET)",
    location: "Sousse, Tunisia",
    locationFr: "Sousse, Tunisie",
    locationAr: "سوسة، تونس",
  },
  {
    id: "high-school",
    year: "2018 – 2022",
    degree: "High School Diploma in Computer Science",
    degreeFr: "Baccalauréat en Informatique",
    degreeAr: "شهادة البكالوريا في الإعلامية",
    school: "Farhat Hached Rades High School",
    location: "Tunisia",
    locationFr: "Tunisie",
    locationAr: "تونس",
  },
]

/** Resolve a Certification's title/issuer for the active language, falling
 * back to the English value when no fr/ar override is set (most issuers are
 * organization proper nouns and are never overridden). */
export function localizedCertification(cert: Certification, locale: ProfileLocale) {
  return {
    title: locale === "fr" ? cert.titleFr ?? cert.title : locale === "ar" ? cert.titleAr ?? cert.title : cert.title,
    issuer: locale === "fr" ? cert.issuerFr ?? cert.issuer : locale === "ar" ? cert.issuerAr ?? cert.issuer : cert.issuer,
    year: cert.year,
  }
}

/** Resolve an EducationEntry's degree/location for the active language.
 * `school` is left untranslated -- it's an institution's proper name. */
export function localizedEducation(entry: EducationEntry, locale: ProfileLocale) {
  return {
    degree: locale === "fr" ? entry.degreeFr ?? entry.degree : locale === "ar" ? entry.degreeAr ?? entry.degree : entry.degree,
    school: entry.school,
    location: locale === "fr" ? entry.locationFr ?? entry.location : locale === "ar" ? entry.locationAr ?? entry.location : entry.location,
    year: entry.year,
  }
}

/** Trainer page credentials block (subset with logos) */
export const trainerCredentials = [
  { id: "tyt", titleKey: "certTyT" as const, orgKey: "certOrgYouthClubs" as const, year: "2022", logo: "/images/logo-tyt-full-color.png" },
  { id: "ifmsa", titleKey: "certIFMSARecognized" as const, orgKey: "certOrgIFMSA" as const, year: "2023", logo: "/images/logo-ifmsa.png" },
  { id: "cnfcpp", titleKey: "certCNFCPP" as const, orgKey: "certOrgCNFCPP" as const, year: "2024", logo: "/images/logo-cnfcpp.png" },
]

export type ExperienceEntry = {
  id: string
  period: string
  role: string
  roleFr?: string
  roleAr?: string
  company: string
  description: string
  tags?: string[]
  isCurrent?: boolean
}

/** Resolve an ExperienceEntry's role for the active language. `company` and
 * `period` are left as-is -- proper nouns and dates aren't translated. */
export function localizedExperience(entry: ExperienceEntry, locale: ProfileLocale) {
  return {
    role: locale === "fr" ? entry.roleFr ?? entry.role : locale === "ar" ? entry.roleAr ?? entry.role : entry.role,
    company: entry.company,
    period: entry.period,
    description: entry.description,
  }
}

// Cross-checked against CV_General_Detailed_MohamedDhiaArfa.pdf (Aug 2026):
// - CRIT Tunisie was Sep–Dec 2025, not 2023 (date was off by two years).
// - The "Jasmin Crafts & Plants" marketing-manager role with "+40% engagement" doesn't
//   appear on any CV, that achievement belongs to Speranza Cafe & Resto (Jan–Jun 2025).
//   Corrected below to avoid crediting the wrong company.
// - Icom / Phenyx / Jasmin Marketing internships ran 2023–2025, not "2021–2023".
export const aboutExperience: ExperienceEntry[] = [
  {
    id: "yougo-travel",
    period: "Jun 2026 – Present",
    role: "Travel and Visa Agent",
    roleFr: "Agent de Voyage et Visa",
    roleAr: "وكيل سفر وتأشيرات",
    company: "YOUGO TRAVEL",
    description: "Part-time visa and travel consulting, run alongside design, training, and development work.",
    tags: ["Part-time"],
  },
  {
    id: "digimytch-about",
    period: "Feb 2026 – Jun 2026",
    role: "Web Developer (End of Studies Internship)",
    roleFr: "Développeur Web (Stage de Fin d'Études)",
    roleAr: "مطوّر ويب (تدريب ختم الدروس)",
    company: "Digimytch",
    description:
      "Solo-built Digimytch Talent Hub, an AI-powered job platform, across 5 Scrum sprints, AI CV editor, job-matching engine, training catalog, and a voice AI interview simulator.",
    tags: ["Next.js 15", "Supabase", "AI/LLM", "109 tests"],
  },
  {
    id: "crit-about",
    period: "Sep 2025 – Dec 2025",
    role: "Web Developer & Marketing Manager",
    roleFr: "Développeur Web et Responsable Marketing",
    roleAr: "مطوّر ويب ومدير تسويق",
    company: "CRIT Tunisie",
    description:
      "Developed responsive web interfaces using React/Next.js, optimized UI/UX, and improved digital strategy.",
    tags: ["React", "Next.js", "UI/UX", "Strategy"],
  },
  {
    id: "speranza-about",
    period: "Jan 2025 – Jun 2025",
    role: "Marketing Manager",
    roleFr: "Responsable Marketing",
    roleAr: "مدير تسويق",
    company: "Speranza Cafe & Resto",
    description:
      "Managed marketing campaigns, increased engagement by 40%, designed menus, promotional materials, and maintained social consistency.",
    tags: ["Marketing", "Social Media", "Design", "+40% Engagement"],
  },
  {
    id: "internships",
    period: "2023 – 2025",
    role: "Graphic Designer (Internships)",
    roleFr: "Designer Graphique (Stages)",
    roleAr: "مصمم جرافيك (تدريبات)",
    company: "Icom Agency, Phenyx Company, Jasmin Marketing & Others",
    description:
      "Produced campaign visuals, brand assets, marketing materials, and collaborated on client-facing design solutions.",
    tags: ["Brand Identity", "Campaigns", "Visual Design"],
  },
]

/** NGO / civic & social-impact roles, kept separate from paid professional experience. */
export const civicExperience: ExperienceEntry[] = [
  {
    id: "aiesec-lebanon",
    period: "Dec 2023 – Jun 2024",
    role: "National Manager of Business Development",
    roleFr: "Responsable National du Développement Commercial",
    roleAr: "مدير وطني لتطوير الأعمال",
    company: "AIESEC in Lebanon",
    description:
      "International business-development mandate for AIESEC's Lebanon entity, alongside a Congress Committee Member role at AIESEC Tunisia's Middle East & Africa Summit 2023 (Marketing and Showcasing).",
    tags: ["Business Development", "International", "Leadership"],
  },
]

export const developerExperience: ExperienceEntry[] = [
  {
    id: "digimytch-dev",
    period: "Feb 2026 – Jun 2026",
    role: "Web Developer, End of Studies Internship",
    company: "Digimytch",
    description:
      "Solo-built Digimytch Talent Hub, an AI-powered job platform: AI CV editor, job-matching engine, training catalog, Kanban tracker, and a voice AI interview simulator. Integrated 4 LLMs via OpenRouter with real-time streaming. Built on Next.js 15, React 19, TypeScript, Supabase, and Vercel AI SDK v4. 109 automated tests across 24 files.",
    tags: ["Next.js 15", "React 19", "Supabase", "Vercel AI SDK", "109 tests"],
    isCurrent: false,
  },
  {
    id: "crit-dev",
    period: "Sep 2025 – Dec 2025",
    role: "Web Developer",
    company: "CRIT Tunisie",
    description: "Developing responsive web interfaces, optimizing user experience, shipping features to production",
    tags: ["React / Next.js"],
    isCurrent: false,
  },
  {
    id: "speranza",
    period: "Jan 2025 – Jun 2025",
    role: "Marketing & Web Strategy",
    company: "Speranza Cafe & Resto",
    description: "Managed web presence, digital marketing campaigns, and data-driven strategy execution",
    tags: ["Web & Digital Marketing"],
    isCurrent: false,
  },
  {
    id: "self-directed",
    period: "2023 – Present",
    role: "Full-Stack Development",
    company: "Self-Directed & Open Source",
    description:
      "Building personal projects, contributing to real applications, mastering frontend and backend fundamentals",
    tags: ["React, Next.js, Node.js, SQL"],
    isCurrent: false,
  },
]

export const designExperience: ExperienceEntry[] = [
  {
    id: "zia",
    period: "2020 – Present",
    role: "Zia Studio, Design Studio Operations",
    roleFr: "Zia Studio, Direction du Studio de Design",
    roleAr: "استوديو Zia، إدارة استوديو التصميم",
    company: "Solo-led Creative Practice",
    description: "Full-service creative design studio, branding, UI/UX, visual identity systems.",
  },
  {
    id: "icom",
    period: "Jan – Feb 2025",
    role: "Graphic Designer",
    roleFr: "Designer Graphique",
    roleAr: "مصمم جرافيك",
    company: "Icom Agency",
    description: "Led design projects, brand identity systems, campaign visuals.",
  },
  {
    id: "phenyx",
    period: "Oct – Nov 2024",
    role: "Graphic Designer",
    roleFr: "Designer Graphique",
    roleAr: "مصمم جرافيك",
    company: "Phenyx Company",
    description: "Marketing materials, brand assets, visual communications.",
  },
  {
    id: "jasmin-marketing",
    period: "Dec 2023 – Jan 2024",
    role: "Graphic Designer",
    roleFr: "Designer Graphique",
    roleAr: "مصمم جرافيك",
    company: "Jasmin Marketing",
    description: "Campaign visuals, promotional materials, brand assets.",
  },
  {
    id: "funcoach",
    period: "Jun – Jul 2021",
    role: "Design & Creative Training",
    roleFr: "Formation en Design et Créativité",
    roleAr: "تدريب في التصميم والإبداع",
    company: "FunCoach Space, Sousse",
    description: "Design training, mentoring emerging designers.",
  },
]

export type TrainingMilestone = {
  year: string
  titleKey: string
  descKey: string
  statsKey: string
  /** Optional params to interpolate into descKey/statsKey via t(key, params) -- only the
   * 2025 entry needs this, for the dynamic hour/participant counts. */
  params?: Record<string, string>
}

// titleKey/descKey/statsKey point into lib/translations.ts -- this used to be hardcoded
// English (never translated), so the training timeline stayed in English even in
// French/Arabic mode. Rendered via t() in app/trainer/TrainerClientPage.tsx.
/** Chronological training journey (2019 → 2025) */
export const trainingMilestones: TrainingMilestone[] = [
  {
    year: "2019",
    titleKey: "milestone2019Title",
    descKey: "milestone2019Desc",
    statsKey: "milestone2019Stats",
  },
  {
    year: "2022",
    titleKey: "milestone2022Title",
    descKey: "milestone2022Desc",
    statsKey: "milestone2022Stats",
  },
  {
    year: "2024",
    titleKey: "milestone2024Title",
    descKey: "milestone2024Desc",
    statsKey: "milestone2024Stats",
  },
  {
    year: "2025",
    titleKey: "milestone2025Title",
    descKey: "milestone2025Desc",
    statsKey: "milestone2025Stats",
    params: {
      hours: formatStat("trainingHours"),
      facHours: formatStat("facilitationHours"),
      participants: formatStat("participantsTrained"),
    },
  },
  {
    year: "2026",
    titleKey: "milestone2026Title",
    descKey: "milestone2026Desc",
    statsKey: "milestone2026Stats",
  },
]

/** Gallery / featured titles that are concept, spec, or personal practice work */
export const conceptProjectTitles = new Set([
  "Walmart Branding + System",
  "Walmart Packaging",
  "Archaeological Museum Sousse",
  "Euro 2024 Final",
  "Football Campaign",
  "Argentina Copa America",
  "Our Cause Campaign",
])

export function isConceptProject(title: string): boolean {
  return conceptProjectTitles.has(title)
}

/** Homepage stats section row definitions */
// labelKey points into translations.ts -- labels used to be hardcoded
// English here (never translated), so this row stayed in English even in
// French/Arabic mode.
export const homepageStatsRow = [
  { statKey: "participantsTrained" as const, labelKey: "statParticipantsTrained" as const, icon: "Users" as const },
  { statKey: "trainingHours" as const, labelKey: "statTrainingHoursLabel" as const, icon: "Clock" as const },
  { statKey: "designProjects" as const, labelKey: "statDesignProjectsLabel" as const, icon: "BookOpen" as const },
  { statKey: "yearsExperience" as const, labelKey: "statYearsExperienceLabel" as const, icon: "Presentation" as const },
  { statKey: "trainingCycles" as const, labelKey: "statTrainingEventsLabel" as const, icon: "RefreshCw" as const },
]
