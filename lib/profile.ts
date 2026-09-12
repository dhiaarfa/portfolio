/**
 * Single source of truth for profile stats, credentials, and experience.
 * All pages should import from here — do not hard-code conflicting values in JSX.
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

export type Certification = {
  id: string
  title: string
  issuer: string
  year: string
}

// CNFCPP year confirmed as Dec 2024 against CV_General_Detailed_MohamedDhiaArfa.pdf.
export const certifications: Certification[] = [
  {
    id: "cnfcpp",
    title: "National Certified Trainer (CNFCPP)",
    issuer: "Tunisia · National Certification",
    year: "2024",
  },
  {
    id: "youth-clubs",
    title: "Certified Trainer",
    issuer: "Association YOUTH CLUBs",
    year: "2025",
  },
  {
    id: "hubspot",
    title: "Social Media Marketing",
    issuer: "HubSpot Academy",
    year: "2024",
  },
  {
    id: "inco",
    title: "Green Digital Skills",
    issuer: "INCO Academy",
    year: "2024",
  },
  // Confirmed against CV_GraphicDesigner_MohamedDhiaArfa.pdf: GoMyCode Summer Academy, 2023.
  {
    id: "graphic-design",
    title: "Graphic Design with Adobe Illustrator",
    issuer: "GoMyCode Summer Academy",
    year: "2023",
  },
  {
    id: "entrepreneur-leader",
    title: "Certified Trainer Entrepreneur Leader",
    issuer: "International Certification",
    year: "2025",
  },
]

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
  company: string
  description: string
  tags?: string[]
  isCurrent?: boolean
}

// Cross-checked against CV_General_Detailed_MohamedDhiaArfa.pdf (Aug 2026):
// - CRIT Tunisie was Sep–Dec 2025, not 2023 (date was off by two years).
// - The "Jasmin Crafts & Plants" marketing-manager role with "+40% engagement" doesn't
//   appear on any CV — that achievement belongs to Speranza Cafe & Resto (Jan–Jun 2025).
//   Corrected below to avoid crediting the wrong company.
// - Icom / Phenyx / Jasmin Marketing internships ran 2023–2025, not "2021–2023".
export const aboutExperience: ExperienceEntry[] = [
  {
    id: "yougo-travel",
    period: "Jun 2026 – Present",
    role: "Travel and Visa Agent",
    company: "YOUGO TRAVEL",
    description: "Part-time visa and travel consulting, run alongside design, training, and development work.",
    tags: ["Part-time"],
  },
  {
    id: "digimytch-about",
    period: "Feb 2026 – Jun 2026",
    role: "Web Developer (End of Studies Internship)",
    company: "Digimytch",
    description:
      "Solo-built Digimytch Talent Hub, an AI-powered job platform, across 5 Scrum sprints — AI CV editor, job-matching engine, training catalog, and a voice AI interview simulator.",
    tags: ["Next.js 15", "Supabase", "AI/LLM", "109 tests"],
  },
  {
    id: "crit-about",
    period: "Sep 2025 – Dec 2025",
    role: "Web Developer & Marketing Manager",
    company: "CRIT Tunisie",
    description:
      "Developed responsive web interfaces using React/Next.js, optimized UI/UX, and improved digital strategy.",
    tags: ["React", "Next.js", "UI/UX", "Strategy"],
  },
  {
    id: "speranza-about",
    period: "Jan 2025 – Jun 2025",
    role: "Marketing Manager",
    company: "Speranza Cafe & Resto",
    description:
      "Managed marketing campaigns, increased engagement by 40%, designed menus, promotional materials, and maintained social consistency.",
    tags: ["Marketing", "Social Media", "Design", "+40% Engagement"],
  },
  {
    id: "internships",
    period: "2023 – 2025",
    role: "Graphic Designer (Internships)",
    company: "Icom Agency, Phenyx Company, Jasmin Marketing & Others",
    description:
      "Produced campaign visuals, brand assets, marketing materials, and collaborated on client-facing design solutions.",
    tags: ["Brand Identity", "Campaigns", "Visual Design"],
  },
]

/** NGO / civic & social-impact roles — kept separate from paid professional experience. */
export const civicExperience: ExperienceEntry[] = [
  {
    id: "aiesec-lebanon",
    period: "Dec 2023 – Jun 2024",
    role: "National Manager of Business Development",
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
    role: "Web Developer — End of Studies Internship",
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
    role: "Zia Studio — Design Studio Operations",
    company: "Solo-led Creative Practice",
    description: "Full-service creative design studio — branding, UI/UX, visual identity systems.",
  },
  {
    id: "icom",
    period: "Jan – Feb 2025",
    role: "Graphic Designer",
    company: "Icom Agency",
    description: "Led design projects, brand identity systems, campaign visuals.",
  },
  {
    id: "phenyx",
    period: "Oct – Nov 2024",
    role: "Graphic Designer",
    company: "Phenyx Company",
    description: "Marketing materials, brand assets, visual communications.",
  },
  {
    id: "jasmin-marketing",
    period: "Dec 2023 – Jan 2024",
    role: "Graphic Designer",
    company: "Jasmin Marketing",
    description: "Campaign visuals, promotional materials, brand assets.",
  },
  {
    id: "funcoach",
    period: "Jun – Jul 2021",
    role: "Design & Creative Training",
    company: "FunCoach Space, Sousse",
    description: "Design training, mentoring emerging designers.",
  },
]

export type TrainingMilestone = {
  year: string
  title: string
  description: string
  stats: string
}

/** Chronological training journey (2019 → 2025) */
export const trainingMilestones: TrainingMilestone[] = [
  {
    year: "2019",
    title: "Youth Development Leader & Activist",
    description: "Started youth development and civic engagement initiatives, driving social impact",
    stats: "Advocacy Start",
  },
  {
    year: "2022",
    title: "Training Pioneer",
    description: "Began delivering comprehensive training through ONGs, social programs, and youth events",
    stats: "Training Launch",
  },
  {
    year: "2024",
    title: "National Certified Trainer (CNFCPP)",
    description:
      "Achieved official certification from National Center for Continuing Training and Professional Promotion",
    stats: "Professional Credentials",
  },
  {
    year: "2025",
    title: "Certified Trainer & Impact Leader",
    description: `Delivered ${formatStat("trainingHours")} training hours and ${formatStat("facilitationHours")} facilitation hours for ${formatStat("participantsTrained")} participants across multiple organizations`,
    stats: `${formatStat("participantsTrained")} Participants`,
  },
  {
    year: "2026",
    title: "Multi-Organization Trainer",
    description:
      "Currently training at Rayen Academy (since Oct 2025) and Centre Three Alfa Formation (since Apr 2026), following earlier 2024–2025 engagements at Groupe Etoile Formation and Supplier Training & Consulting (STC) — graphic design and digital marketing curricula for youth participants",
    stats: "2 Active Partners",
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
export const homepageStatsRow = [
  { statKey: "participantsTrained" as const, label: "Participants Trained", icon: "Users" as const },
  { statKey: "trainingHours" as const, label: "Training Hours", icon: "Clock" as const },
  { statKey: "designProjects" as const, label: "Design Projects", icon: "BookOpen" as const },
  { statKey: "yearsExperience" as const, label: "Years Experience", icon: "Presentation" as const },
  { statKey: "trainingCycles" as const, label: "Training Events", icon: "RefreshCw" as const },
]
