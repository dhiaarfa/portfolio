import { siteConfig } from "@/lib/site-config"

export type DevProject = {
  slug: string
  title: string
  excerpt: string
  outcome: string
  image: string
  liveUrl: string
  repoUrl: string
  tech: string[]
  metrics?: string
  featured: boolean
  badge?: string
  caseStudySlug: string
  published: boolean
}

export const devProjects: DevProject[] = [
  {
    slug: "digimytch",
    title: "DigiMyTech Talent Hub",
    excerpt:
      "AI-powered talent hub (PFE capstone): CV prep, skill matching, LinkedIn optimization, and application tracking.",
    outcome: "1200+ CVs processed · 98% user satisfaction in beta testing",
    image: "/images/projects/digimytch/landing.png",
    liveUrl: "https://digimytch-talent-hub.vercel.app/",
    repoUrl: siteConfig.github,
    tech: ["Next.js", "Supabase", "OpenRouter", "Tailwind", "Vercel"],
    metrics: "1200+ CVs · 98% satisfaction",
    featured: true,
    badge: "Featured · PFE",
    caseStudySlug: "digimytch",
    published: true,
  },
  {
    slug: "crit-tunisie",
    title: "CRIT Tunisie",
    excerpt: "Corporate recruitment platform clarifying services, job offers, and contact paths for talents and companies.",
    outcome: "Production corporate site shipped during CRIT web developer role",
    image: "/images/projects/crit/home.png",
    liveUrl: "https://crit-tunisie.net/",
    repoUrl: siteConfig.github,
    tech: ["Next.js", "React", "Tailwind"],
    featured: true,
    caseStudySlug: "crit-tunisie",
    published: true,
  },
  {
    slug: "best-dates-fruits",
    title: "Best Dates and Fruits",
    excerpt: "Premium Tunisian dates brand site with product storytelling, clean sections, and clear contact paths.",
    outcome: "Live marketing site with product-focused layout and contact conversion",
    image: "/images/bdaf-thumbnail.png",
    liveUrl: "https://bestdatesandfruits.com/",
    repoUrl: siteConfig.github,
    tech: ["Next.js", "Marketing site"],
    featured: true,
    caseStudySlug: "best-dates-fruits",
    published: true,
  },
]

export type OtherDevProject = {
  title: string
  excerpt: string
  tech: string[]
  /** Omit while the project has no public URL yet (e.g. still in progress), the
   *  page only renders the "Live" link when this is set, so it never points at
   *  a placeholder or fabricated domain. */
  liveUrl?: string
  repoUrl?: string
  /** Shown as a small badge when the project isn't shipped yet, e.g. "In progress". */
  status?: string
  /** French/Arabic copy; English is used when missing (localizedOtherDevProject). */
  titleFr?: string
  titleAr?: string
  excerptFr?: string
  excerptAr?: string
  statusFr?: string
  statusAr?: string
}

export const otherDevProjects: OtherDevProject[] = [
  {
    title: "dhia-portfolio.com",
    excerpt:
      "The site you're looking at right now: built with Next.js 15, available in English, French, and Arabic, with a built-in AI chat guide, a free-resource download system, and tuned for fast load times and accessibility.",
    liveUrl: "https://www.dhia-portfolio.com",
    repoUrl: "https://github.com/dhiaarfa/portfolio",
    tech: ["Next.js", "TypeScript", "Vercel"],
    excerptFr:
      "Le site que vous êtes en train de consulter : construit avec Next.js 15, disponible en anglais, français et arabe, avec un assistant IA intégré, un système de téléchargement de ressources gratuites, et optimisé pour la vitesse et l'accessibilité.",
    excerptAr:
      "الموقع الذي تتصفحه الآن: مبني بـ Next.js 15، متوفر بالإنجليزية والفرنسية والعربية، مع مساعد ذكاء اصطناعي مدمج، ونظام لتحميل الموارد المجانية، ومُحسَّن لسرعة التحميل وسهولة الوصول.",
  },
  {
    title: "Association Youth Clubs, Official Website",
    excerpt:
      "Official site for Association Youth Clubs (YCs), the NGO Dhia founded to coordinate school clubs across Tunisia, advocacy toward education stakeholders plus member training, built around the NAOMIE planning framework.",
    tech: ["Next.js", "Tailwind"],
    status: "In progress",
    titleFr: "Association Youth Clubs, site officiel",
    titleAr: "جمعية Youth Clubs، الموقع الرسمي",
    excerptFr:
      "Site officiel de l'Association Youth Clubs (YCs), l'ONG fondée par Dhia pour coordonner les clubs scolaires en Tunisie : plaidoyer auprès des acteurs de l'éducation et formation des membres, autour du cadre de planification NAOMIE.",
    excerptAr:
      "الموقع الرسمي لجمعية Youth Clubs، المنظمة التي أسسها ضياء لتنسيق النوادي المدرسية في تونس: مناصرة لدى الفاعلين في التعليم وتدريب للأعضاء، حول إطار التخطيط NAOMIE.",
    statusFr: "En cours",
    statusAr: "قيد الإنجاز",
  },
  {
    title: "Amal Bennasr, Space Designer",
    excerpt:
      "Portfolio site for an interior/space designer based in Sfax, Tunisia, a calm, editorial project gallery built around light, material, and comfort.",
    liveUrl: "https://amalbennasr.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    titleFr: "Amal Bennasr, designer d'espace",
    titleAr: "أمل بن نصر، مصممة فضاءات",
    excerptFr:
      "Site portfolio d'une designer d'intérieur et d'espace basée à Sfax : une galerie de projets calme et éditoriale, construite autour de la lumière, de la matière et du confort.",
    excerptAr:
      "موقع أعمال لمصممة ديكور وفضاءات مقيمة في صفاقس: معرض مشاريع هادئ بطابع تحريري، مبني حول الضوء والمواد والراحة.",
  },
]

/** Picks the French/Arabic copy for an "other project" card, English when missing. */
export function localizedOtherDevProject(p: OtherDevProject, language: string): OtherDevProject {
  if (language === "fr") return { ...p, title: p.titleFr ?? p.title, excerpt: p.excerptFr ?? p.excerpt, status: p.statusFr ?? p.status }
  if (language === "ar") return { ...p, title: p.titleAr ?? p.title, excerpt: p.excerptAr ?? p.excerpt, status: p.statusAr ?? p.status }
  return p
}

export function featuredDevProjects() {
  return devProjects.filter((p) => p.published && p.featured)
}

export function devProjectBySlug(slug: string) {
  return devProjects.find((p) => p.slug === slug && p.published)
}
