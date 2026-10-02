/**
 * Testimonials = Dhia's LinkedIn recommendations
 * (linkedin.com/in/dhia-/details/recommendations), re-checked Oct 2026.
 *
 * Rules (Oct 2026 audit): quotes used to be paraphrased and shortened yet
 * shown inside quotation marks under each person's name -- words they
 * never wrote. Now:
 *  - the quote in `originalLang` is VERBATIM (only trimmed, with "…");
 *  - the other two languages are faithful translations, and the UI says
 *    "Translated from ..." when showing one;
 *  - `headline` is the person's own LinkedIn headline, and `relation*` is
 *    LinkedIn's own description of how they worked with Dhia;
 *  - no star ratings (LinkedIn recommendations have none).
 * `photo` is a self-hosted path (LinkedIn image URLs are signed and
 * expire), only once the person's photo has been added with consent.
 */
export type TestimonialItem = {
  id: string
  name: string
  linkedin: string
  /** "YYYY-MM" of the LinkedIn recommendation. */
  date: string
  originalLang: "en" | "fr" | "ar"
  quoteEn: string
  quoteFr: string
  quoteAr: string
  /** The person's own LinkedIn headline (kept in its original wording). */
  headline: string
  relationEn: string
  relationFr: string
  relationAr: string
  photo?: string
  /** Excluded from tag/auto selections (e.g. hidden on Dhia's LinkedIn). */
  hidden?: boolean
  accent: "accent" | "amber" | "blue" | "pink"
  tags: ("design" | "training" | "leadership")[]
}

export const allTestimonials: TestimonialItem[] = [
  {
    id: "yassine",
    name: "Yassine Bahri",
    linkedin: "https://www.linkedin.com/in/yassinebahri-/",
    date: "2026-04",
    originalLang: "fr",
    quoteFr:
      "Mohamed Dhia a co-animé avec moi un workshop sur le design graphique à l'ISG de Tunis, et il a fait exactement ce qu'on attend d'un bon intervenant : capter, impliquer, et former. Les étudiants sont repartis avec des identités visuelles solides et l'envie d'aller plus loin.",
    quoteEn:
      "Mohamed Dhia co-facilitated a graphic design workshop with me at ISG Tunis, and he did exactly what you expect from a good speaker: capture, involve, and train. The students left with solid visual identities and the desire to go further.",
    quoteAr:
      "شارك محمد ضياء معي في تنشيط ورشة حول التصميم الجرافيكي في المعهد العالي للتصرف بتونس، وقام بالضبط بما يُنتظر من متدخّل جيّد: شدّ الانتباه، والإشراك، والتكوين. غادر الطلبة بهويات بصرية متينة ورغبة في الذهاب أبعد.",
    headline: "Créateur de stratégies digitales innovantes pour PME & Startups | Formateur | Enseignant | Freelance",
    relationEn: "Was Dhia's teacher · co-facilitated a design workshop at ISG Tunis",
    relationFr: "Était l'enseignant de Dhia · co-animation d'un workshop design à l'ISG Tunis",
    relationAr: "كان أستاذ ضياء · شاركه تنشيط ورشة تصميم في ISG تونس",
    accent: "pink",
    tags: ["design", "training"],
  },
  {
    id: "rayen",
    name: "Rayen Bejaoui",
    linkedin: "https://www.linkedin.com/in/rayen-bejaoui-694673210/",
    date: "2025-01",
    originalLang: "en",
    quoteEn:
      "His leadership during the 2nd cohort of the 1000 Challenges School was remarkable, driving success with passion and teamwork. In AIESEC, Dhia stood out for his adaptability, dedication, and ability to bring people together.",
    quoteFr:
      "Son leadership lors de la 2e cohorte de la 1000 Challenges School a été remarquable, menant au succès avec passion et esprit d'équipe. À l'AIESEC, Dhia s'est distingué par son adaptabilité, son dévouement et sa capacité à rassembler.",
    quoteAr:
      "كانت قيادته خلال الدفعة الثانية من مدرسة 1000 Challenges لافتة، إذ قاد النجاح بشغف وروح فريق. وفي AIESEC تميّز ضياء بمرونته وتفانيه وقدرته على جمع الناس.",
    headline: "Account Manager | Project Management, Client Relations",
    // Hidden on Dhia's LinkedIn profile, but he confirmed (Oct 2026) that
    // it should be shown on the site.
    relationEn: "Worked with Dhia on the same team · 1000 Challenges School & AIESEC",
    relationFr: "A travaillé avec Dhia dans la même équipe · 1000 Challenges School & AIESEC",
    relationAr: "عمل مع ضياء في الفريق نفسه · 1000 Challenges وAIESEC",
    accent: "accent",
    tags: ["training", "leadership"],
  },
  {
    id: "oumaima",
    name: "Oumaima Arfaoui",
    linkedin: "https://www.linkedin.com/in/oumaima-arfaoui/",
    date: "2025-01",
    originalLang: "en",
    quoteEn:
      "During our participation as part of the top 5% selected to represent Tunisia at the IOM - UN Migration Hackathon in Doha, I had the privilege of working closely with Mohammed Dhia. I discovered him to be an inspiring individual with outstanding collaborative skills, consistently contributing innovative ideas and a unique design perspective.",
    quoteFr:
      "Lors de notre participation parmi les 5 % sélectionnés pour représenter la Tunisie au hackathon de l'OIM (ONU Migration) à Doha, j'ai eu le privilège de travailler étroitement avec Mohammed Dhia. J'ai découvert une personne inspirante, aux compétences collaboratives remarquables, apportant constamment des idées innovantes et un regard design unique.",
    quoteAr:
      "خلال مشاركتنا ضمن أفضل 5% الذين اختيروا لتمثيل تونس في هاكاثون المنظمة الدولية للهجرة في الدوحة، تشرّفت بالعمل عن قرب مع محمد ضياء. وجدته شخصًا ملهمًا يتمتع بمهارات تعاون استثنائية، يقدّم باستمرار أفكارًا مبتكرة ورؤية تصميم فريدة.",
    headline: "Geosciences Engineer | Petroleum Engineer | Geothermal Energy | Inspired Graphic Designer | Digital Marketer",
    relationEn: "Worked with Dhia on different teams · IOM Hackathon, Doha",
    relationFr: "A travaillé avec Dhia dans des équipes différentes · Hackathon OIM, Doha",
    relationAr: "عملت مع ضياء في فرق مختلفة · هاكاثون المنظمة الدولية للهجرة، الدوحة",
    accent: "blue",
    tags: ["design", "leadership"],
  },
  {
    id: "ikram",
    name: "Ikram Allah Nemri",
    linkedin: "https://www.linkedin.com/in/ikram-allah-nemri-765815211/",
    date: "2024-05",
    originalLang: "en",
    quoteEn:
      "I worked closely with Mohamed Dhia Arfa when I was a member in AIESEC Sousse and I noticed that he is a highly-qualified and innovative designer, motivated digital marketer and an inspiring youth worker.",
    quoteFr:
      "J'ai travaillé étroitement avec Mohamed Dhia Arfa lorsque j'étais membre d'AIESEC Sousse, et j'ai constaté qu'il est un designer très qualifié et innovant, un marketeur digital motivé et un animateur jeunesse inspirant.",
    quoteAr:
      "عملت عن قرب مع محمد ضياء عرفة عندما كنت عضوة في AIESEC سوسة، ولاحظت أنه مصمم مؤهّل ومبتكر، ومسوّق رقمي متحمّس، وعامل شباب ملهم.",
    headline: "MSc in International Economy & Business | Social Entrepreneur | MBA Candidate",
    relationEn: "Worked with Dhia on different teams · AIESEC Sousse",
    relationFr: "A travaillé avec Dhia dans des équipes différentes · AIESEC Sousse",
    relationAr: "عملت مع ضياء في فرق مختلفة · AIESEC سوسة",
    accent: "amber",
    tags: ["design", "training"],
  },
  {
    id: "youssef",
    name: "Youssef Touati",
    linkedin: "https://www.linkedin.com/in/yousseft/",
    date: "2024-03",
    originalLang: "en",
    quoteEn:
      "During his internship at Jasmin Marketing, Mohamed Dhia Arfa consistently demonstrated creativity and dedication as a graphic designer. His attention to detail and eagerness to learn were evident in every project.",
    quoteFr:
      "Pendant son stage chez Jasmin Marketing, Mohamed Dhia Arfa a constamment fait preuve de créativité et de dévouement en tant que designer graphique. Son souci du détail et sa soif d'apprendre étaient visibles dans chaque projet.",
    quoteAr:
      "خلال تربّصه في Jasmin Marketing، أظهر محمد ضياء عرفة باستمرار الإبداع والتفاني كمصمم جرافيك. وكان انتباهه للتفاصيل وحرصه على التعلّم واضحين في كل مشروع.",
    headline: "CEO & Co-Founder at Jasmin Marketing",
    relationEn: "Managed Dhia directly · graphic design internship, Jasmin Marketing",
    relationFr: "A encadré Dhia directement · stage en design graphique, Jasmin Marketing",
    relationAr: "أشرف على ضياء مباشرة · تربّص في التصميم الجرافيكي، Jasmin Marketing",
    accent: "pink",
    tags: ["design"],
  },
  {
    id: "skander",
    name: "Skander Chebbi",
    linkedin: "https://www.linkedin.com/in/skander-chebbi/",
    date: "2023-12",
    originalLang: "en",
    quoteEn:
      "I would highly recommend working with Dhia since he is the symbol of dynamism and accuracy in his work environment. In my experience, he brought so much added value in terms of graphic design, strategic planning, logistics and external representation.",
    quoteFr:
      "Je recommande vivement de travailler avec Dhia : il est le symbole du dynamisme et de la précision dans son environnement de travail. D'après mon expérience, il a apporté une grande valeur ajoutée en design graphique, planification stratégique, logistique et représentation externe.",
    quoteAr:
      "أوصي بشدة بالعمل مع ضياء، فهو رمز للحيوية والدقة في بيئة عمله. ومن تجربتي، أضاف قيمة كبيرة في التصميم الجرافيكي والتخطيط الاستراتيجي واللوجستيك والتمثيل الخارجي.",
    headline: "Graphic Designer",
    relationEn: "Worked with Dhia on different teams",
    relationFr: "A travaillé avec Dhia dans des équipes différentes",
    relationAr: "عمل مع ضياء في فرق مختلفة",
    accent: "accent",
    tags: ["design"],
  },
  {
    id: "amir",
    name: "Amir Boujelben",
    linkedin: "https://www.linkedin.com/in/amir-boujelben-205181210/",
    date: "2023-06",
    originalLang: "en",
    quoteEn:
      "I had the pleasure of working closely with Dhia during MeetUp Pro 1.0, where he served as the OCVP Marketing and I as the Event Manager. Dhia demonstrated exceptional skills in strategic marketing, creativity, and attention to detail.",
    quoteFr:
      "J'ai eu le plaisir de travailler étroitement avec Dhia lors de MeetUp Pro 1.0, où il était OCVP Marketing et moi Event Manager. Dhia a fait preuve de compétences exceptionnelles en marketing stratégique, en créativité et en souci du détail.",
    quoteAr:
      "سعدت بالعمل عن قرب مع ضياء خلال MeetUp Pro 1.0، حيث كان مسؤول التسويق (OCVP Marketing) وكنت مدير الحدث. أظهر ضياء مهارات استثنائية في التسويق الاستراتيجي والإبداع والانتباه للتفاصيل.",
    headline: "Software Engineer @ Eyeo GmbH",
    relationEn: "Senior to Dhia on the team · Event Manager, MeetUp Pro 1.0",
    relationFr: "Senior dans l'équipe de Dhia · Event Manager, MeetUp Pro 1.0",
    relationAr: "كان أقدم من ضياء في الفريق · مدير حدث MeetUp Pro 1.0",
    accent: "blue",
    tags: ["design", "leadership"],
  },
]

export function pickTestimonials(opts?: {
  tag?: TestimonialItem["tags"][number]
  ids?: string[]
  limit?: number
}): TestimonialItem[] {
  let list = allTestimonials.filter((t) => !t.hidden)
  if (opts?.ids?.length) {
    list = opts.ids.map((id) => list.find((t) => t.id === id)).filter(Boolean) as TestimonialItem[]
  } else if (opts?.tag) {
    list = list.filter((t) => t.tags.includes(opts.tag!))
  }
  if (opts?.limit) list = list.slice(0, opts.limit)
  return list
}

export function testimonialText(
  item: TestimonialItem,
  lang: "en" | "fr" | "ar"
): { quote: string; role: string; relation: string; translated: boolean } {
  const quote = lang === "fr" ? item.quoteFr : lang === "ar" ? item.quoteAr : item.quoteEn
  const relation = lang === "fr" ? item.relationFr : lang === "ar" ? item.relationAr : item.relationEn
  return { quote, role: item.headline, relation, translated: lang !== item.originalLang }
}
