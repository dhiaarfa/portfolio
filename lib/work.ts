export type WorkCategory = "Brand Identity" | "Social Media" | "Logo Design" | "Packaging" | "UI/UX" | "Web Dev"

export type WorkKind = "design" | "dev"

export type WorkProject = {
  slug: string
  title: string
  titleFr?: string
  titleAr?: string
  clientLine: string
  excerpt: string
  heroImage: string
  cardImage: string
  role: string
  timeline: string
  outcome: string
  category: WorkCategory
  kind: WorkKind
  featured: boolean
  concept?: boolean
  tools: string[]
  behanceUrl?: string
  liveUrl?: string
  repoUrl?: string
  metrics?: string
  nextSlug?: string
  published: boolean
  /** Localized variants of the fields above (French/Arabic). English lives
   *  in the base fields. Falls back to English when a locale isn't set. */
  clientLineFr?: string
  clientLineAr?: string
  excerptFr?: string
  excerptAr?: string
  roleFr?: string
  roleAr?: string
  timelineFr?: string
  timelineAr?: string
  outcomeFr?: string
  outcomeAr?: string
  metricsFr?: string
  metricsAr?: string
}

export const workProjects: WorkProject[] = [
  {
    slug: "speranza-cafe",
    title: "Speranza Café",
    clientLine: "A Tunisian café brand needing a warm, premium identity across packaging and social.",
    excerpt: "Logo, packaging system, and social templates for a local café with a gold-and-cream visual language.",
    heroImage: "/images/445771850-916829483581375-1053755579034856379-n.png",
    cardImage: "/images/445771850-916829483581375-1053755579034856379-n.png",
    role: "Logo · Brand identity · Packaging · Social",
    timeline: "4 weeks",
    outcome: "Identity adopted across in-store packaging, Instagram, and seasonal promos.",
    clientLineFr: "Une marque de café tunisienne ayant besoin d'une identité chaleureuse et premium pour son emballage et ses réseaux sociaux.",
    clientLineAr: "علامة مقهى تونسية بحاجة إلى هوية دافئة وراقية عبر التغليف ووسائل التواصل الاجتماعي.",
    excerptFr: "Logo, système d'emballage et templates réseaux sociaux pour un café local au langage visuel or et crème.",
    excerptAr: "شعار، نظام تغليف، وقوالب لوسائل التواصل الاجتماعي لمقهى محلي بلغة بصرية ذهبية وكريمية.",
    roleFr: "Logo · Identité de marque · Emballage · Réseaux sociaux",
    roleAr: "شعار · هوية بصرية · تغليف · وسائل التواصل الاجتماعي",
    timelineFr: "4 semaines",
    timelineAr: "4 أسابيع",
    outcomeFr: "Identité adoptée sur l'emballage en boutique, Instagram et les promotions saisonnières.",
    outcomeAr: "تم اعتماد الهوية في التغليف داخل المقهى، وعلى إنستغرام، وفي العروض الموسمية.",
    category: "Brand Identity",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Photoshop", "InDesign"],
    nextSlug: "one-space",
    published: true,
  },
  {
    slug: "one-space",
    title: "ONE SPACE",
    clientLine: "A creative studio wanting a luxurious gold identity with stationery and print applications.",
    excerpt: "Full visual identity: logotype, gold foil system, business cards, and brand collateral.",
    heroImage: "/images/one-space-gold.png",
    cardImage: "/images/one-space-gold.png",
    role: "Brand identity · Logo · Stationery · Print",
    timeline: "3 weeks",
    outcome: "Cohesive gold system used across cards, letterhead, and client-facing materials.",
    clientLineFr: "Un studio créatif souhaitant une identité dorée et luxueuse pour sa papeterie et ses supports imprimés.",
    clientLineAr: "استوديو إبداعي يريد هوية ذهبية فاخرة لقرطاسيته ومطبوعاته.",
    excerptFr: "Identité visuelle complète : logotype, système doré, cartes de visite et supports de marque.",
    excerptAr: "هوية بصرية كاملة: شعار، نظام ذهبي، بطاقات عمل، ومواد العلامة التجارية.",
    roleFr: "Identité de marque · Logo · Papeterie · Impression",
    roleAr: "هوية بصرية · شعار · قرطاسية · طباعة",
    timelineFr: "3 semaines",
    timelineAr: "3 أسابيع",
    outcomeFr: "Système doré cohérent utilisé sur les cartes, l'en-tête de lettre et les supports clients.",
    outcomeAr: "نظام ذهبي متماسك يُستخدم على البطاقات والترويسة والمواد الموجهة للعملاء.",
    category: "Brand Identity",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Photoshop", "InDesign"],
    nextSlug: "tafani-travel",
    published: true,
  },
  {
    slug: "tafani-travel",
    title: "Tafani Travel",
    clientLine: "A travel agency needing a trustworthy, modern mark for digital and print touchpoints.",
    excerpt: "Logo and brand system built for clarity across web, social, and travel collateral.",
    heroImage: "/images/tafani-white-png.png",
    cardImage: "/images/tafani-white-png.png",
    role: "Logo · Brand identity · Social templates",
    timeline: "2 weeks",
    outcome: "Cleaner brand recognition on social and client proposals within the first month.",
    clientLineFr: "Une agence de voyage ayant besoin d'une marque moderne et digne de confiance pour ses supports numériques et imprimés.",
    clientLineAr: "وكالة سفر بحاجة إلى شعار عصري وموثوق لمنصاتها الرقمية والمطبوعة.",
    excerptFr: "Logo et système de marque conçus pour la clarté sur le web, les réseaux sociaux et les supports de voyage.",
    excerptAr: "شعار ونظام هوية مصمّمان لتحقيق الوضوح عبر الويب ووسائل التواصل الاجتماعي ومواد السفر.",
    roleFr: "Logo · Identité de marque · Templates réseaux sociaux",
    roleAr: "شعار · هوية بصرية · قوالب لوسائل التواصل",
    timelineFr: "2 semaines",
    timelineAr: "أسبوعان",
    outcomeFr: "Meilleure reconnaissance de marque sur les réseaux sociaux et les propositions clients dès le premier mois.",
    outcomeAr: "تحسّن التعرف على العلامة التجارية على وسائل التواصل وفي عروض العملاء خلال الشهر الأول.",
    category: "Brand Identity",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Figma", "Photoshop"],
    nextSlug: "meetup-pro",
    published: true,
  },
  {
    slug: "meetup-pro",
    title: "MeetUp Pro 1.0",
    clientLine: "A youth networking event needing bold social visuals and on-site branding.",
    excerpt: "Event identity, social campaign assets, and promotional design for a sold-out meetup.",
    heroImage: "/images/meetuppro-thumbnail.png",
    cardImage: "/images/meetuppro-thumbnail.png",
    role: "Event branding · Social media · Campaign design",
    timeline: "6 weeks",
    outcome: "Strong social traction and sold-out attendance; visuals reused across follow-up events.",
    clientLineFr: "Un événement de networking pour jeunes ayant besoin de visuels audacieux et d'une image de marque sur place.",
    clientLineAr: "فعالية تواصل للشباب بحاجة إلى تصاميم جريئة لوسائل التواصل وهوية بصرية في الموقع.",
    excerptFr: "Identité événementielle, contenus de campagne pour les réseaux sociaux et design promotionnel pour un meetup complet.",
    excerptAr: "هوية الفعالية، عناصر حملة لوسائل التواصل الاجتماعي، وتصميم ترويجي لتجمّع نفدت تذاكره بالكامل.",
    roleFr: "Image de marque événementielle · Réseaux sociaux · Design de campagne",
    roleAr: "هوية الفعاليات · وسائل التواصل الاجتماعي · تصميم الحملات",
    timelineFr: "6 semaines",
    timelineAr: "6 أسابيع",
    outcomeFr: "Forte traction sur les réseaux sociaux et événement complet ; visuels réutilisés pour les éditions suivantes.",
    outcomeAr: "تفاعل قوي على وسائل التواصل ونفاد كامل التذاكر؛ أُعيد استخدام التصاميم في فعاليات لاحقة.",
    category: "Social Media",
    kind: "design",
    featured: true,
    tools: ["Illustrator", "Photoshop", "Canva"],
    nextSlug: "traveltodo-campaign",
    published: true,
  },
  {
    slug: "traveltodo-campaign",
    title: "TravelTodo Campaign",
    titleFr: "Campagne TravelTodo",
    titleAr: "حملة TravelTodo",
    clientLine: "Travel brand social and outdoor campaign visuals for seasonal promotion.",
    excerpt: "Billboard, poster, and feed assets with a consistent campaign look across formats.",
    heroImage: "/images/billboard-48x14-ft-mockup-3.jpeg",
    cardImage: "/images/billboard-48x14-ft-mockup-3.jpeg",
    role: "Campaign design · Social · OOH mockups",
    timeline: "2 weeks",
    outcome: "Unified campaign look across billboard, poster, and Instagram formats.",
    clientLineFr: "Visuels de campagne réseaux sociaux et affichage extérieur pour une promotion saisonnière d'une marque de voyage.",
    clientLineAr: "تصاميم حملة لوسائل التواصل الاجتماعي والإعلانات الخارجية لعلامة سفر بمناسبة عرض موسمي.",
    excerptFr: "Panneau d'affichage, affiche et contenus pour le feed avec une identité de campagne cohérente sur tous les formats.",
    excerptAr: "لوحة إعلانية، ملصق، وعناصر لموجز وسائل التواصل بمظهر حملة موحّد عبر جميع الصيغ.",
    roleFr: "Design de campagne · Réseaux sociaux · Maquettes d'affichage extérieur",
    roleAr: "تصميم الحملات · وسائل التواصل الاجتماعي · نماذج الإعلانات الخارجية",
    timelineFr: "2 semaines",
    timelineAr: "أسبوعان",
    outcomeFr: "Identité de campagne unifiée sur le panneau d'affichage, l'affiche et Instagram.",
    outcomeAr: "مظهر حملة موحّد عبر اللوحة الإعلانية والملصق وإنستغرام.",
    category: "Social Media",
    kind: "design",
    featured: true,
    tools: ["Photoshop", "Illustrator"],
    nextSlug: "digimytch",
    published: true,
  },
  {
    slug: "digimytch",
    title: "DigiMyTech Talent Hub",
    clientLine: "PFE capstone: an AI-powered talent hub for CV prep, skill matching, and application tracking.",
    excerpt: "Next.js app with Supabase auth/DB and OpenRouter LLM workflows baked into the product, not a floating chat widget.",
    heroImage: "/images/projects/digimytch/landing.png",
    cardImage: "/images/projects/digimytch/landing.png",
    role: "Full-stack · AI integration · Product design",
    timeline: "PFE · 2025",
    outcome: "1200+ CVs processed in beta · 98% user satisfaction reported in testing",
    clientLineFr: "Projet de fin d'études : une plateforme de carrière propulsée par l'IA pour la préparation de CV, le matching de compétences et le suivi de candidatures.",
    clientLineAr: "مشروع تخرج (PFE): منصة توظيف مدعومة بالذكاء الاصطناعي لإعداد السير الذاتية، ومطابقة المهارات، وتتبّع الطلبات.",
    excerptFr: "Application Next.js avec authentification/BDD Supabase et workflows LLM OpenRouter intégrés au produit, pas un simple widget de chat flottant.",
    excerptAr: "تطبيق Next.js مع مصادقة وقاعدة بيانات Supabase وسير عمل نماذج لغوية عبر OpenRouter مدمجة في صميم المنتج، وليست مجرد أداة دردشة عائمة.",
    roleFr: "Full-stack · Intégration IA · Design produit",
    roleAr: "تطوير شامل (Full-stack) · دمج الذكاء الاصطناعي · تصميم المنتج",
    timelineFr: "PFE · 2025",
    timelineAr: "مشروع تخرج · 2025",
    outcomeFr: "Plus de 1200 CV traités en bêta · 98 % de satisfaction utilisateur rapportée lors des tests",
    outcomeAr: "أكثر من 1200 سيرة ذاتية تمت معالجتها في النسخة التجريبية · نسبة رضا 98% من المستخدمين خلال الاختبار",
    category: "Web Dev",
    kind: "dev",
    featured: true,
    tools: ["Next.js", "Supabase", "OpenRouter", "Tailwind", "Vercel"],
    liveUrl: "https://digimytch-talent-hub.vercel.app/",
    repoUrl: "https://github.com/dhiaarfa",
    metrics: "1200+ CVs · 98% satisfaction",
    metricsFr: "1200+ CV · 98 % de satisfaction",
    metricsAr: "أكثر من 1200 سيرة ذاتية · رضا 98%",
    nextSlug: "crit-tunisie",
    published: true,
  },
  {
    slug: "crit-tunisie",
    title: "CRIT Tunisie",
    clientLine: "Corporate recruitment platform for a major staffing firm in Tunisia.",
    excerpt: "Production Next.js site clarifying services, job offers, and contact paths for talents and companies.",
    heroImage: "/images/projects/crit/home.png",
    cardImage: "/images/crit-screenshots/homepage.png",
    role: "Web developer · UI implementation",
    timeline: "Sep – Dec 2025",
    outcome: "Shipped responsive corporate site to production during CRIT developer role.",
    clientLineFr: "Plateforme de recrutement d'entreprise pour un grand cabinet de recrutement en Tunisie.",
    clientLineAr: "منصة توظيف لشركة رئيسية للاستقدام والتوظيف في تونس.",
    excerptFr: "Site Next.js en production clarifiant les services, les offres d'emploi et les parcours de contact pour les talents et les entreprises.",
    excerptAr: "موقع Next.js في الإنتاج يوضّح الخدمات وعروض العمل ومسارات التواصل للكفاءات والشركات.",
    roleFr: "Développeur web · Implémentation UI",
    roleAr: "مطوّر ويب · تنفيذ واجهة المستخدم",
    timelineFr: "Sept. – déc. 2025",
    timelineAr: "سبتمبر – ديسمبر 2025",
    outcomeFr: "Site corporate responsive mis en production durant le poste de développeur chez CRIT.",
    outcomeAr: "إطلاق موقع مؤسسي متجاوب إلى بيئة الإنتاج خلال منصب المطوّر لدى CRIT.",
    category: "Web Dev",
    kind: "dev",
    featured: true,
    tools: ["Next.js", "React", "Tailwind"],
    liveUrl: "https://crit-tunisie.net/",
    repoUrl: "https://github.com/dhiaarfa",
    nextSlug: "best-dates-fruits",
    published: true,
  },
  {
    slug: "best-dates-fruits",
    title: "Best Dates and Fruits",
    clientLine: "Premium Tunisian dates brand needing a credible web presence and product storytelling.",
    excerpt: "Marketing site with product sections, seasonal storytelling, and clear contact conversion paths.",
    heroImage: "/images/bdaf-thumbnail.png",
    cardImage: "/images/bdaf-thumbnail.png",
    role: "Web development · Marketing site",
    timeline: "Client project",
    outcome: "Live brand site with product-focused layout and contact funnel.",
    clientLineFr: "Marque tunisienne de dattes premium ayant besoin d'une présence web crédible et d'une narration produit.",
    clientLineAr: "علامة تونسية فاخرة للتمور بحاجة إلى حضور رقمي موثوق وسرد مقنع للمنتج.",
    excerptFr: "Site marketing avec sections produits, narration saisonnière et parcours de contact clairs.",
    excerptAr: "موقع تسويقي بأقسام للمنتجات، وسرد موسمي، ومسارات تواصل واضحة لتحويل الزوار.",
    roleFr: "Développement web · Site marketing",
    roleAr: "تطوير الويب · موقع تسويقي",
    timelineFr: "Projet client",
    timelineAr: "مشروع لعميل",
    outcomeFr: "Site de marque en ligne avec une mise en page centrée produit et un tunnel de contact.",
    outcomeAr: "موقع علامة تجارية مباشر بتصميم يركّز على المنتج وقمع تواصل واضح.",
    category: "Web Dev",
    kind: "dev",
    featured: true,
    tools: ["Next.js", "Tailwind"],
    liveUrl: "https://bestdatesandfruits.com/",
    repoUrl: "https://github.com/dhiaarfa",
    nextSlug: "digimytch",
    published: true,
  },
]

export type GalleryItem = {
  title: string
  /** Only where the title is descriptive rather than a brand name. */
  titleFr?: string
  titleAr?: string
  image: string
  category: WorkCategory | "All"
  workSlug?: string
  externalUrl?: string
  concept?: boolean
}

/** Curated gallery: best 10 pieces (case-study links where available). */
export const curatedGallery: GalleryItem[] = [
  { title: "Speranza Café", titleFr: "Speranza Café", titleAr: "مقهى Speranza", image: "/images/445771850-916829483581375-1053755579034856379-n.png", category: "Brand Identity", workSlug: "speranza-cafe" },
  { title: "ONE SPACE Gold Branding", titleFr: "Identité dorée ONE SPACE", titleAr: "هوية ONE SPACE الذهبية", image: "/images/one-space-gold.png", category: "Brand Identity", workSlug: "one-space" },
  { title: "Tafani Travel", titleFr: "Tafani Travel", titleAr: "Tafani Travel", image: "/images/tafani-white-png.png", category: "Brand Identity", workSlug: "tafani-travel" },
  { title: "MeetUp Pro Event", titleFr: "Événement MeetUp Pro", titleAr: "فعالية MeetUp Pro", image: "/images/meetuppro-thumbnail.png", category: "Social Media", workSlug: "meetup-pro" },
  { title: "ONE SPACE Stationery", titleFr: "Papeterie ONE SPACE", titleAr: "مطبوعات ONE SPACE", image: "/images/one-space-mockup.jpg", category: "Packaging", workSlug: "one-space" },
  { title: "TravelTodo Billboard", titleFr: "Panneau publicitaire TravelTodo", titleAr: "لوحة إعلانية لـ TravelTodo", image: "/images/billboard-48x14-ft-mockup-3.jpeg", category: "Social Media", workSlug: "traveltodo-campaign" },
  { title: "ONE SPACE Business Cards", titleFr: "Cartes de visite ONE SPACE", titleAr: "بطاقات أعمال ONE SPACE", image: "/images/one-space-cards.jpg", category: "Logo Design", workSlug: "one-space" },
  { title: "Archaeological Museum Sousse", titleFr: "Musée archéologique de Sousse", titleAr: "متحف سوسة الأثري", image: "/images/archaeological-museum-sousse.jpg", category: "Brand Identity", concept: true, externalUrl: "https://www.behance.net/dhiaa" },
  { title: "Walmart Branding + System", titleFr: "Identité et système Walmart", titleAr: "هوية ونظام بصري لـ Walmart", image: "/images/walmart-branding.png", category: "Brand Identity", concept: true, externalUrl: "https://www.behance.net/dhiaa" },
  { title: "Football Campaign", titleFr: "Campagne football", titleAr: "حملة كرة القدم", image: "/images/argentina-messi-copa-america-outdoor.jpeg", category: "Social Media", externalUrl: "https://www.behance.net/dhiaa" },
]

export function publishedWorkProjects() {
  return workProjects.filter((p) => p.published)
}

export function featuredWorkProjects() {
  return workProjects.filter((p) => p.published && p.featured)
}

export function devWorkProjects() {
  return workProjects.filter((p) => p.published && p.kind === "dev")
}

export function workBySlug(slug: string) {
  return workProjects.find((p) => p.slug === slug && p.published)
}

/** Translation key (from lib/translations.ts) for a WorkCategory's display
 *  label, used anywhere `project.category` is rendered as visible text. */
export function categoryKey(category: WorkCategory): string {
  const map: Record<WorkCategory, string> = {
    "Brand Identity": "categoryBrandIdentity",
    "Social Media": "categorySocialMedia",
    "Logo Design": "categoryLogoDesign",
    Packaging: "categoryPackaging",
    "UI/UX": "categoryUiUx",
    "Web Dev": "categoryWebDev",
  }
  return map[category]
}

export type WorkLocale = "en" | "fr" | "ar"

/** Resolve a project's localized shell fields (clientLine/excerpt/role/
 *  timeline/outcome/metrics), falling back to English when a locale-specific
 *  field isn't set on the project. Does not touch `title` (kept as the
 *  project's real name in every language) or `tools` (proper nouns). */
export function localizedWork(project: WorkProject, locale: WorkLocale) {
  if (locale === "fr") {
    return {
      title: project.titleFr ?? project.title,
      clientLine: project.clientLineFr ?? project.clientLine,
      excerpt: project.excerptFr ?? project.excerpt,
      role: project.roleFr ?? project.role,
      timeline: project.timelineFr ?? project.timeline,
      outcome: project.outcomeFr ?? project.outcome,
      metrics: project.metricsFr ?? project.metrics,
    }
  }
  if (locale === "ar") {
    return {
      title: project.titleAr ?? project.title,
      clientLine: project.clientLineAr ?? project.clientLine,
      excerpt: project.excerptAr ?? project.excerpt,
      role: project.roleAr ?? project.role,
      timeline: project.timelineAr ?? project.timeline,
      outcome: project.outcomeAr ?? project.outcome,
      metrics: project.metricsAr ?? project.metrics,
    }
  }
  return {
    title: project.title,
    clientLine: project.clientLine,
    excerpt: project.excerpt,
    role: project.role,
    timeline: project.timeline,
    outcome: project.outcome,
    metrics: project.metrics,
  }
}

/** Real 1200x630 branded OG card for a case study, generated by
 *  scripts/gen-og-images.py. Replaces using `heroImage` directly in social
 *  metadata: those are raw project screenshots/mockups at arbitrary aspect
 *  ratios (square, portrait, 4:3...) that were being declared as 1200x630,
 *  which is why case-study links were previewing cropped/broken. See
 *  checklist §2.4/§2.6. */
const CASE_STUDY_OG: Record<
  string,
  { kicker: string; title: string; subhead: string; image: string; small?: boolean; top?: boolean }
> = {
  "speranza-cafe": {
    kicker: "Case Study \u00b7 Brand Identity",
    title: "Speranza Caf\u00e9",
    subhead:
      "Logo, packaging system, and social templates for a local caf\u00e9 with a gold-and-cream visual language.",
    image: "/images/445771850-916829483581375-1053755579034856379-n.png",
  },
  "one-space": {
    kicker: "Case Study \u00b7 Brand Identity",
    title: "ONE SPACE",
    subhead: "Full visual identity: logotype, gold foil system, business cards, and brand collateral.",
    image: "/images/one-space-gold.png",
  },
  "tafani-travel": {
    kicker: "Case Study \u00b7 Brand Identity",
    title: "Tafani Travel",
    subhead: "Logo and brand system built for clarity across web, social, and travel collateral.",
    image: "/images/tafani-white-png.png",
  },
  "meetup-pro": {
    kicker: "Case Study \u00b7 Social Media",
    title: "MeetUp Pro 1.0",
    subhead: "Event identity, social campaign assets, and promotional design for a sold-out meetup.",
    image: "/images/meetuppro-thumbnail.png",
  },
  "traveltodo-campaign": {
    kicker: "Case Study \u00b7 Social Media",
    title: "TravelTodo Campaign",
    subhead: "Billboard, poster, and feed assets with a consistent campaign look across formats.",
    image: "/images/billboard-48x14-ft-mockup-3.jpeg",
  },
  digimytch: {
    kicker: "Case Study \u00b7 Web Dev",
    title: "DigiMyTech Talent Hub",
    subhead: "Next.js app with Supabase auth/DB and OpenRouter LLM workflows baked into the product.",
    image: "/images/projects/digimytch/landing.png",
    top: true,
    small: true,
  },
  "crit-tunisie": {
    kicker: "Case Study \u00b7 Web Dev",
    title: "CRIT Tunisie",
    subhead: "Production Next.js site clarifying services, job offers, and contact paths for talents and companies.",
    image: "/images/projects/crit/home.png",
    top: true,
  },
  "best-dates-fruits": {
    kicker: "Case Study \u00b7 Web Dev",
    title: "Best Dates and Fruits",
    subhead: "Marketing site with product sections, seasonal storytelling, and clear contact conversion paths.",
    image: "/images/bdaf-thumbnail.png",
  },
}

/** Real 1200x630 branded OG card for a case study, rendered on-demand by
 *  app/api/og/route.tsx (Satori/@vercel/og). Replaces using `heroImage`
 *  directly in social metadata: those are raw project screenshots/mockups
 *  at arbitrary aspect ratios (square, portrait, 4:3...) that were being
 *  declared as 1200x630, which is why case-study links were
 *  previewing cropped/broken. See checklist §2.4/§2.6/§6.2. */
export function workOgImage(slug: string): string {
  const entry = CASE_STUDY_OG[slug]
  if (!entry) return `/api/og?${new URLSearchParams({ title: "Mohamed Dhia Arfa" })}`
  const params = new URLSearchParams({
    kicker: entry.kicker,
    title: entry.title,
    subhead: entry.subhead,
    image: entry.image,
  })
  if (entry.small) params.set("small", "1")
  if (entry.top) params.set("top", "1")
  return `/api/og?${params}`
}

/** Pixel aspect ratio (width / height) of each dev project's `cardImage`
 *  above, so the browser-chrome thumbnail frame on /developer never has to
 *  crop it again, see components/project-browser-frame.tsx. Each source
 *  screenshot was cropped by hand to end at a clean content boundary
 *  (before the next section's own nav/chrome bleeds into frame) rather
 *  than at an arbitrary fixed aspect ratio, so these three ratios differ
 *  on purpose. */
export const devCardAspectRatio: Record<string, number> = {
  digimytch: 757 / 520,
  // Updated to match the real photos pulled from each site's own live
  // homepage (Master to-do / user request: the old screenshots were too
  // low-res and didn't represent the sites well).
  "crit-tunisie": 1024 / 1024,
  "best-dates-fruits": 800 / 453, // updated: real homepage screenshot replaced the old stock dates photo
}

/** Visual theme for each dev project's card on /developer, a colour-blocked
 *  header with a real screenshot "sheet" peeking out of the top, a category
 *  tag, and a short pipe-separated meta line, inspired by the layered
 *  bento-card project galleries common in modern product-design portfolios
 *  (colour-per-project blocks + fanned screenshot previews + a tag +
 *  compact meta line, rather than a flat browser-window screenshot). Colours
 *  are original choices in this site's own dark palette (not copied from
 *  any reference), just varied per project so the grid doesn't read as one
 *  flat repeated card. */
export const devCardTheme: Record<
  string,
  {
    gradient: string
    tag: string
    tagFr: string
    tagAr: string
    meta: string
    metaFr: string
    metaAr: string
    secondaryImage?: string
    tertiaryImage?: string
    /** Full screenshot set for this project, shown in the click-to-open
     *  gallery on /developer, real captures, not just the one card image. */
    screenshots: string[]
  }
> = {
  digimytch: {
    gradient: "from-emerald-950 via-emerald-900 to-slate-950",
    tag: "Web Dev · AI SaaS",
    tagFr: "Dév web · SaaS IA",
    tagAr: "تطوير ويب · SaaS بالذكاء الاصطناعي",
    meta: "Full-stack · AI integration | 1200+ CVs · 98% satisfaction | PFE Capstone",
    metaFr: "Full-stack · Intégration IA | 1200+ CV · 98 % de satisfaction | Projet de fin d'études",
    metaAr: "Full-stack · دمج الذكاء الاصطناعي | +1200 سيرة ذاتية · رضا 98% | مشروع ختم الدروس",
    secondaryImage: "/images/projects/digimytch/kanban.png",
    tertiaryImage: "/images/projects/digimytch/dashboard.png",
    screenshots: [
      "/images/projects/digimytch/landing.png",
      "/images/projects/digimytch/dashboard.png",
      "/images/projects/digimytch/kanban.png",
      "/images/projects/digimytch/analyze-offer.png",
      "/images/projects/digimytch/offers-scored.png",
      "/images/projects/digimytch/formations.png",
      "/images/projects/digimytch/linkedin.png",
    ],
  },
  "crit-tunisie": {
    gradient: "from-green-950 via-emerald-900 to-slate-950",
    tag: "Web Dev · Corporate",
    tagFr: "Dév web · Entreprise",
    tagAr: "تطوير ويب · مؤسسات",
    meta: "Web developer · UI implementation | Production site | Sep–Dec 2025",
    metaFr: "Développeur web · Intégration UI | Site en production | sept.–déc. 2025",
    metaAr: "مطوّر ويب · تنفيذ الواجهات | موقع في الإنتاج | سبتمبر–ديسمبر 2025",
    secondaryImage: "/images/crit-screenshots/candidates.png",
    tertiaryImage: "/images/crit-screenshots/solutions.png",
    screenshots: [
      "/images/crit-screenshots/homepage.png",
      "/images/crit-screenshots/solutions.png",
      "/images/crit-screenshots/candidates.png",
      "/images/crit-screenshots/companies.png",
      "/images/crit-screenshots/contact.png",
    ],
  },
  "best-dates-fruits": {
    gradient: "from-emerald-900 via-green-950 to-stone-950",
    tag: "Web Dev · Marketing",
    tagFr: "Dév web · Marketing",
    tagAr: "تطوير ويب · تسويق",
    meta: "Web development · Marketing site | Live brand site | Client project",
    metaFr: "Développement web · Site marketing | Site de marque en ligne | Projet client",
    metaAr: "تطوير ويب · موقع تسويقي | موقع علامة منشور | مشروع لعميل",
    secondaryImage: "/images/bdaf-screenshots/products.png",
    tertiaryImage: "/images/bdaf-screenshots/fruits.png",
    screenshots: [
      "/images/bdaf-screenshots/homepage.png",
      "/images/bdaf-screenshots/products.png",
      "/images/bdaf-screenshots/fruits.png",
      "/images/bdaf-screenshots/pastries.png",
      "/images/bdaf-screenshots/ingredients.png",
    ],
  },
}
