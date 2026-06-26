export type TrainingOffer = {
  id: string
  nameEn: string
  nameFr: string
  nameAr: string
  forEn: string
  forFr: string
  forAr: string
  formatEn: string
  formatFr: string
  formatAr: string
  includesEn: string[]
  includesFr: string[]
  includesAr: string[]
  outcomeEn: string
  outcomeFr: string
  outcomeAr: string
  pricingEn: string
  pricingFr: string
  pricingAr: string
  published: boolean
}

export type TrainingCaseStudy = {
  id: string
  titleKey: string
  clientEn: string
  clientFr: string
  clientAr: string
  briefEn: string
  briefFr: string
  briefAr: string
  deliveredEn: string
  deliveredFr: string
  deliveredAr: string
  outcomeEn: string
  outcomeFr: string
  outcomeAr: string
  image: string
  orgLogo?: string
  quoteEn?: string
  quoteFr?: string
  quoteAr?: string
  quoteAuthorEn?: string
  quoteAuthorFr?: string
  quoteAuthorAr?: string
  published: boolean
}

export type TrainingTestimonial = {
  name: string
  roleEn: string
  roleFr: string
  roleAr: string
  quoteEn: string
  quoteFr: string
  quoteAr: string
  category: "training" | "design" | "general"
}

export const trainingOffers: TrainingOffer[] = [
  {
    id: "half-day",
    nameEn: "Half-Day Youth Workshop",
    nameFr: "Atelier jeunesse d'une demi-journée",
    nameAr: "ورشة شبابية نصف يوم",
    forEn: "NGOs, schools, and youth clubs running a single high-impact session",
    forFr: "ONG, écoles et clubs jeunesse pour une session à fort impact",
    forAr: "منظمات المجتمع المدني والمدارس وأندية الشباب لجلسة واحدة مؤثرة",
    formatEn: "3–4 hrs · 10–100 participants · AR / FR / EN · in-person or online",
    formatFr: "3–4 h · 10–100 participants · AR / FR / EN · présentiel ou en ligne",
    formatAr: "3–4 ساعات · 10–100 مشارك · عربي / فرنسي / إنجليزي · حضوري أو عن بعد",
    includesEn: ["Training needs analysis (TNA)", "Custom session design", "Facilitation & materials", "Post-session summary"],
    includesFr: ["Analyse des besoins (TNA)", "Conception sur mesure", "Animation et supports", "Compte-rendu post-session"],
    includesAr: ["تحليل احتياجات التدريب", "تصميم مخصص", "تيسير ومواد", "ملخص ما بعد الجلسة"],
    outcomeEn: "An engaged group with concrete takeaways they can apply the next day",
    outcomeFr: "Un groupe engagé avec des acquis concrets applicables dès le lendemain",
    outcomeAr: "مجموعة متفاعلة مع مخرجات عملية يمكن تطبيقها فوراً",
    pricingEn: "Request a quote",
    pricingFr: "Sur devis",
    pricingAr: "حسب الطلب",
    published: true,
  },
  {
    id: "multi-session",
    nameEn: "Multi-Session Program",
    nameFr: "Programme multi-sessions",
    nameAr: "برنامج متعدد الجلسات",
    forEn: "Organizations building leadership or civic skills over several weeks",
    forFr: "Organisations développant leadership ou engagement civique sur plusieurs semaines",
    forAr: "منظمات تبني مهارات القيادة أو المواطنة على عدة أسابيع",
    formatEn: "4–12 sessions · cohort-based · blended delivery",
    formatFr: "4–12 sessions · cohorte · présentiel et distanciel",
    formatAr: "4–12 جلسة · مجموعة · حضوري ومختلط",
    includesEn: ["Program architecture", "Session manuals & tools", "Progress tracking", "Final evaluation report"],
    includesFr: ["Architecture du programme", "Manuels et outils", "Suivi des progrès", "Rapport d'évaluation final"],
    includesAr: ["هيكلة البرنامج", "أدلة وأدوات", "متابعة التقدم", "تقرير تقييم نهائي"],
    outcomeEn: "Measurable behavior change and skills progression across the cohort",
    outcomeFr: "Changement de comportement mesurable et progression des compétences",
    outcomeAr: "تغيير سلوكي ملموس وتطور مهارات المجموعة",
    pricingEn: "From custom scope",
    pricingFr: "Selon périmètre",
    pricingAr: "حسب النطاق",
    published: true,
  },
  {
    id: "tot",
    nameEn: "Train-the-Trainer (TOT)",
    nameFr: "Formation de formateurs (TOT)",
    nameAr: "تدريب المدربين (TOT)",
    forEn: "Networks that need certified peer trainers and cascade impact",
    forFr: "Réseaux qui ont besoin de formateurs pairs certifiés et d'effet multiplicateur",
    forAr: "شبكات تحتاج مدربين أقران معتمدين وتأثيراً متعدياً",
    formatEn: "2–5 days · micro-training practice · peer feedback loops",
    formatFr: "2–5 jours · micro-formations · feedback entre pairs",
    formatAr: "2–5 أيام · تدريبات مصغرة · تقييم بين الأقران",
    includesEn: ["TOT curriculum design", "Facilitation of practice labs", "Trainer assessment rubric", "Certification support"],
    includesFr: ["Conception curriculum TOT", "Labs de pratique", "Grille d'évaluation", "Appui certification"],
    includesAr: ["تصميم منهج TOT", "مختبرات تطبيق", "معايير تقييم", "دعم الاعتماد"],
    outcomeEn: "A pool of confident trainers ready to run their own sessions",
    outcomeFr: "Des formateurs confiants prêts à animer leurs propres sessions",
    outcomeAr: "مجموعة مدربين واثقين جاهزين لإدارة جلساتهم",
    pricingEn: "Request a quote",
    pricingFr: "Sur devis",
    pricingAr: "حسب الطلب",
    published: true,
  },
  {
    id: "keynote",
    nameEn: "Keynote & Facilitation",
    nameFr: "Conférence et facilitation",
    nameAr: "كلمة رئيسية وتيسير",
    forEn: "Conferences, hackathons, and panels needing an energizing host or moderator",
    forFr: "Conférences, hackathons et panels nécessitant un animateur ou modérateur",
    forAr: "مؤتمرات وهاكathons وpanels تحتاج ميسراً أو متحدثاً",
    formatEn: "45–90 min keynote · half-day facilitation · panel moderation",
    formatFr: "Keynote 45–90 min · facilitation demi-journée · modération panel",
    formatAr: "كلمة 45–90 د · تيسير نصف يوم · إدارة نقاش",
    includesEn: ["Brief alignment", "Custom talk or run-of-show", "Audience engagement design", "Debrief if needed"],
    includesFr: ["Alignement brief", "Intervention ou scénario sur mesure", "Engagement public", "Débriefing si besoin"],
    includesAr: ["مواءمة الموجز", "محتوى أو سيناريو مخصص", "تصميم تفاعل الجمهور", "تقييم لاحق"],
    outcomeEn: "A room that stays engaged, connected, and clear on next steps",
    outcomeFr: "Une salle engagée, connectée et claire sur la suite",
    outcomeAr: "قاعة متفاعلة وواضحة على الخطوات التالية",
    pricingEn: "Project-based",
    pricingFr: "Au projet",
    pricingAr: "حسب المشروع",
    published: true,
  },
]

export const trainingCaseStudies: TrainingCaseStudy[] = [
  {
    id: "scorp-camp-25",
    titleKey: "ifmsaEventScorpCamp",
    clientEn: "IFMSA · SCORP Camp 25 · Marrakech, 2025",
    clientFr: "IFMSA · SCORP Camp 25 · Marrakech, 2025",
    clientAr: "IFMSA · مخيم SCORP 25 · مراكش، 2025",
    briefEn: "Train a new cohort of peer trainers in non-formal education methods for human-rights advocacy camps.",
    briefFr: "Former une nouvelle cohorte de formateurs pairs en éducation non formelle pour camps de défense des droits.",
    briefAr: "تدريب مجموعة جديدة من مدربين الأقران في التعليم غير الرسمي لمعسكرات حقوق الإنسان.",
    deliveredEn: "Co-designed TOT sessions, facilitated experiential learning labs, and mentored micro-training practice with structured peer feedback.",
    deliveredFr: "Co-conception de sessions TOT, animation de labs d'apprentissage expérientiel et mentorat de micro-formations avec feedback structuré.",
    deliveredAr: "تصميم مشترك لجلسات TOT، تيسير مختبرات تعلم تجريبي، وإرشاد تدريبات مصغرة مع تقييم منظّم.",
    outcomeEn: "New trainers certified to deliver NFE sessions in their local SCORP committees across the region.",
    outcomeFr: "Nouveaux formateurs certifiés pour animer des sessions NFE dans leurs comités SCORP locaux.",
    outcomeAr: "مدربون جدد معتمدون لتقديم جلسات NFE في لجان SCORP المحلية.",
    image: "/images/trainer/scorp-camp-25.png",
    orgLogo: "/img/organizations/ifmsa.png",
    quoteEn: "Dhia brings structure and energy to TOT sessions. Participants leave ready to train others.",
    quoteFr: "Dhia apporte structure et énergie aux sessions TOT. Les participants repartent prêts à former.",
    quoteAr: "يمنح Dhia هيكلاً وطاقة لجلسات TOT. المشاركون يغادرون جاهزين للتدريب.",
    quoteAuthorEn: "IFMSA training organizer",
    quoteAuthorFr: "Organisateur formation IFMSA",
    quoteAuthorAr: "منسق تدريب IFMSA",
    published: true,
  },
  {
    id: "tnhrt-carthaginian",
    titleKey: "ifmsaEventTNHRT",
    clientEn: "IFMSA · TNHRT Carthaginian Camp · Hammamet, 2024",
    clientFr: "IFMSA · TNHRT Carthaginian Camp · Hammamet, 2024",
    clientAr: "IFMSA · مخيم TNHRT القرطاجي · حمامات، 2024",
    briefEn: "Deliver Training New Human Rights Trainers (TNHRT) workshops for international medical student delegates.",
    briefFr: "Animer les ateliers TNHRT (Training New Human Rights Trainers) pour délégués étudiants en médecine.",
    briefAr: "تقديم ورش TNHRT (تدريب مدربين جدد في حقوق الإنسان) لوفود طلاب الطب.",
    deliveredEn: "Facilitated human-rights training design sessions, group dynamics exercises, and train-the-trainer cascades using Kolb and 4MAT frameworks.",
    deliveredFr: "Animation de sessions de conception formation droits humains, exercices de dynamique de groupe et cascades TOT (Kolb, 4MAT).",
    deliveredAr: "تيسير جلسات تصميم تدريب حقوق الإنسان، تمارين ديناميكية جماعية، وتدريب متعدٍ بأطر Kolb و4MAT.",
    outcomeEn: "Delegates returned to their NMOs equipped to run human-rights trainings with documented session plans.",
    outcomeFr: "Les délégués sont retournés dans leurs NMO équipés pour animer des formations avec plans documentés.",
    outcomeAr: "عاد المندوبون إلى منظماتهم مجهزين لإدارة تدريبات حقوق الإنسان بخطط موثقة.",
    image: "/images/trainer/tnhrt-carthaginian-camp.png",
    orgLogo: "/img/organizations/ifmsa.png",
    published: true,
  },
  {
    id: "iom-doha",
    titleKey: "dohaEventTitle",
    clientEn: "IOM · Youth Hackathon · Doha, 2024",
    clientFr: "OIM · Hackathon jeunesse · Doha, 2024",
    clientAr: "المنظمة الدولية للهجرة · هاكathon شباب · الدوحة، 2024",
    briefEn: "Support facilitation and creative engagement for an international youth hackathon on migration themes.",
    briefFr: "Appui à la facilitation et l'engagement créatif pour un hackathon jeunesse international sur la migration.",
    briefAr: "دعم التيسير والتفاعل الإبداعي لهاكathon شبابي دولي حول الهجرة.",
    deliveredEn: "Facilitated collaborative sessions, visual storytelling workshops, and team energizers across multilingual groups.",
    deliveredFr: "Animation de sessions collaboratives, ateliers storytelling visuel et energizers pour groupes multilingues.",
    deliveredAr: "تيسير جلسات تعاونية، ورش سرد بصري، ومنشطات جماعية لمجموعات متعددة اللغات.",
    outcomeEn: "Teams produced actionable prototypes with stronger cross-cultural collaboration and presentation skills.",
    outcomeFr: "Les équipes ont produit des prototypes actionnables avec une meilleure collaboration interculturelle.",
    outcomeAr: "أنتجت الفرق نماذج أولية قابلة للتطبيق مع تعاون interculturel أقوى.",
    image: "/images/trainer/iom-hackathon-doha-2024.png",
    orgLogo: "/img/organizations/iom-logo.jpg",
    published: true,
  },
]

export const trainingTestimonials: TrainingTestimonial[] = [
  {
    name: "Rayen Bejaoui",
    roleEn: "Junior Project Manager · 1000 Challenges & AIESEC",
    roleFr: "Chef de projet junior · 1000 Challenges et AIESEC",
    roleAr: "مدير مشاريع · 1000 تحدي وأييسيك",
    quoteEn: "True leader with remarkable facilitation skills. A joy to collaborate with on youth programs.",
    quoteFr: "Vrai leader avec des compétences de facilitation remarquables. Un plaisir de collaborer sur les programmes jeunesse.",
    quoteAr: "قائد حقيقي بمهارات تيسير رائعة. متعة التعاون في برامج الشباب.",
    category: "training",
  },
  {
    name: "Ikram Allah Nemri",
    roleEn: "Social Entrepreneur · AIESEC Sousse",
    roleFr: "Entrepreneur social · AIESEC Sousse",
    roleAr: "مقاول اجتماعي · أييسيك سوسة",
    quoteEn: "Highly qualified trainer and inspiring youth worker. Sessions are always interactive and outcome-driven.",
    quoteFr: "Formatrice hautement qualifiée et travailleuse jeunesse inspirante. Sessions toujours interactives et orientées résultats.",
    quoteAr: "مدربة مؤهلة وعاملة شباب ملهمة. الجلسات دائماً تفاعلية وموجهة نحو النتائج.",
    category: "training",
  },
  {
    name: "Omayma Arfaoui",
    roleEn: "Geosciences Engineer · IOM Hackathon Doha",
    roleFr: "Ingénieur géosciences · Hackathon OIM Doha",
    roleAr: "مهندسة جيولوجيا · هاكathon المنظمة الدولية للهجرة",
    quoteEn: "Inspiring facilitator with outstanding collaborative skills in international settings.",
    quoteFr: "Facilitatrice inspirante avec d'excellentes compétences collaboratives en contexte international.",
    quoteAr: "ميسرة ملهمة بمهارات تعاون استثنائية في السياقات الدولية.",
    category: "training",
  },
  {
    name: "Youssef Touati",
    roleEn: "CEO, Jasmin Marketing · Program partner",
    roleFr: "CEO, Jasmin Marketing · Partenaire programme",
    roleAr: "الرئيس التنفيذي، جاسمين ماركتينغ · شريك برنامج",
    quoteEn: "Brings creativity and dedication to every workshop. Participants stay engaged from start to finish.",
    quoteFr: "Apporte créativité et dévouement à chaque atelier. Les participants restent engagés du début à la fin.",
    quoteAr: "يجلب الإبداع والتفاني لكل ورشة. المشاركون يبقون متفاعلين من البداية للنهاية.",
    category: "training",
  },
]

export const trainingHowWeWork = [
  {
    step: "01",
    titleEn: "Needs analysis (TNA)",
    titleFr: "Analyse des besoins (TNA)",
    titleAr: "تحليل الاحتياجات",
    descEn: "Map gaps, audience, and success criteria before any content is written.",
    descFr: "Cartographier les écarts, le public et les critères de succès avant d'écrire le contenu.",
    descAr: "رسم الفجوات والجمهور ومعايير النجاح قبل كتابة أي محتوى.",
  },
  {
    step: "02",
    titleEn: "Custom design",
    titleFr: "Conception sur mesure",
    titleAr: "تصميم مخصص",
    descEn: "Session architecture using Kolb, 4MAT, and NFE principles tailored to your context.",
    descFr: "Architecture de session avec Kolb, 4MAT et principes NFE adaptés à votre contexte.",
    descAr: "هيكلة الجلسة باستخدام Kolb و4MAT ومبادئ التعليم غير الرسمي.",
  },
  {
    step: "03",
    titleEn: "Delivery & facilitation",
    titleFr: "Animation et delivery",
    titleAr: "التقديم والتيسير",
    descEn: "Experiential, psychologically safe sessions in Arabic, French, or English.",
    descFr: "Sessions expérientielles et sécurisées en arabe, français ou anglais.",
    descAr: "جلسات تجريبية آمنة نفسياً بالعربية أو الفرنسية أو الإنجليزية.",
  },
  {
    step: "04",
    titleEn: "Report & follow-up",
    titleFr: "Rapport et suivi",
    titleAr: "تقرير ومتابعة",
    descEn: "Summary, recommendations, and optional follow-up coaching for sustained impact.",
    descFr: "Synthèse, recommandations et coaching de suivi optionnel pour un impact durable.",
    descAr: "ملخص وتوصيات وتدريب متابعة اختياري لتأثير مستدام.",
  },
] as const

export function publishedTrainingOffers() {
  return trainingOffers.filter((o) => o.published)
}

export function publishedTrainingCaseStudies() {
  return trainingCaseStudies.filter((c) => c.published)
}

export function trainingTestimonialsList() {
  return trainingTestimonials.filter((t) => t.category === "training")
}
