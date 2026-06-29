export type TestimonialItem = {
  id: string
  name: string
  quoteEn: string
  quoteFr: string
  quoteAr: string
  roleEn: string
  roleFr: string
  roleAr: string
  accent: "accent" | "amber" | "blue" | "pink"
  tags: ("design" | "training" | "leadership")[]
}

export const allTestimonials: TestimonialItem[] = [
  {
    id: "yassine",
    name: "Yassine Bahri",
    quoteEn:
      "Co-facilitated a graphic design workshop at ISG Tunis — captured, involved, and trained students who left with solid visual identities.",
    quoteFr:
      "A co-animé un workshop design graphique à l'ISG — capter, impliquer, former. Les étudiants sont repartis avec des identités visuelles solides.",
    quoteAr:
      "شارك في تيسير ورشة تصميم جرافيك — يلفت الانتباه ويشرك الطلاب الذين غادروا بهويات بصرية قوية.",
    roleEn: "Digital Strategy Creator · ISG Tunis workshop co-facilitator",
    roleFr: "Stratégies digitales · Co-animation ISG Tunis",
    roleAr: "استراتيجيات رقمية · ورشة ISG تونس",
    accent: "pink",
    tags: ["design", "training"],
  },
  {
    id: "rayen",
    name: "Rayen Bejaoui",
    quoteEn:
      "Inspiring journey! Remarkable leadership during the 2nd cohort of 1000 Challenges School. Adaptability, dedication, and ability to bring people together.",
    quoteFr:
      "Parcours inspirant ! Leadership remarquable lors de la 2e cohorte 1000 Challenges. Adaptabilité, dévouement et esprit d'équipe.",
    quoteAr:
      "رحلة ملهمة! قيادة رائعة في الدفعة الثانية من مدرسة 1000 تحدي. مرونة وتفانٍ وقدرة على جمع الناس.",
    roleEn: "Junior Project Manager · 1000 Challenges & AIESEC",
    roleFr: "Chef de projet junior · 1000 Challenges & AIESEC",
    roleAr: "مدير مشاريع · 1000 تحدي وأييسيك",
    accent: "accent",
    tags: ["training", "leadership"],
  },
  {
    id: "oumaima",
    name: "Oumaima Arfaoui",
    quoteEn:
      "Outstanding collaborative skills, innovative ideas, and unique design perspective during the IOM-UN Migration Hackathon in Doha.",
    quoteFr:
      "Compétences collaboratives exceptionnelles, idées innovantes et perspective design unique au Hackathon OIM à Doha.",
    quoteAr:
      "مهارات تعاون استثنائية وأفكار مبتكرة ورؤية تصميم فريدة في هاكathon المنظمة الدولية للهجرة بالدوحة.",
    roleEn: "Geosciences Engineer · IOM-UN Migration Hackathon Doha",
    roleFr: "Ingénieur géosciences · Hackathon OIM Doha",
    roleAr: "مهندسة جيولوجيا · هاكathon المنظمة الدولية للهجرة",
    accent: "blue",
    tags: ["design", "leadership"],
  },
  {
    id: "ikram",
    name: "Ikram Allah Nemri",
    quoteEn:
      "Highly-qualified designer, motivated digital marketer, and inspiring youth worker. Highly recommend for any opportunity.",
    quoteFr:
      "Designer qualifié, marketeur digital motivé et travailleur jeunesse inspirant. Je le recommande vivement.",
    quoteAr:
      "مصمم مؤهل، مسوق رقمي متحمس، وعامل شباب ملهم. أوصي به بشدة.",
    roleEn: "Social Entrepreneur · AIESEC Sousse",
    roleFr: "Entrepreneur social · AIESEC Sousse",
    roleAr: "مقاول اجتماعي · أييسيك سوسة",
    accent: "amber",
    tags: ["design", "training"],
  },
  {
    id: "youssef",
    name: "Youssef Touati",
    quoteEn:
      "Creativity and dedication on every project. Attention to detail and eagerness to learn evident throughout his internship.",
    quoteFr:
      "Créativité et dévouement sur chaque projet. Souci du détail et soif d'apprendre pendant son stage.",
    quoteAr:
      "إبداع وتفانٍ في كل مشروع. انتباه للتفاصيل وحرص على التعلم خلال فترة التدريب.",
    roleEn: "CEO, Jasmin Marketing · Direct manager",
    roleFr: "CEO, Jasmin Marketing · Manager direct",
    roleAr: "الرئيس التنفيذي، جاسمين ماركتينغ · المدير المباشر",
    accent: "pink",
    tags: ["design"],
  },
  {
    id: "skander",
    name: "Skander Chebbi",
    quoteEn:
      "Symbol of dynamism and accuracy. Added value in design, strategic planning, logistics, and external representation.",
    quoteFr:
      "Symbole de dynamisme et précision. Valeur ajoutée en design, planification stratégique et représentation externe.",
    quoteAr:
      "رمز الحيوية والدقة. قيمة مضافة في التصميم والتخطيط الاستراتيجي والتمثيل الخارجي.",
    roleEn: "Graphic Designer · Collaborator",
    roleFr: "Designer graphique · Collaborateur",
    roleAr: "مصمم جرافيك · متعاون",
    accent: "accent",
    tags: ["design"],
  },
  {
    id: "amir",
    name: "Amir Boujelben",
    quoteEn:
      "Exceptional strategic marketing and creativity. Crucial role promoting MeetUp Pro through engaging content and campaigns.",
    quoteFr:
      "Marketing stratégique exceptionnel et créativité. Rôle crucial dans la promotion et le succès de l'événement.",
    quoteAr:
      "تسويق استراتيجي استثنائي وإبداع. دور حاسم في الترويج للحدث ونجاحه.",
    roleEn: "MeetUp Pro Event Manager",
    roleFr: "Event Manager MeetUp Pro 1.0",
    roleAr: "مدير حدث MeetUp Pro 1.0",
    accent: "blue",
    tags: ["design", "leadership"],
  },
]

export function pickTestimonials(opts?: {
  tag?: TestimonialItem["tags"][number]
  ids?: string[]
  limit?: number
}): TestimonialItem[] {
  let list = [...allTestimonials]
  if (opts?.ids?.length) {
    list = opts.ids.map((id) => allTestimonials.find((t) => t.id === id)).filter(Boolean) as TestimonialItem[]
  } else if (opts?.tag) {
    list = list.filter((t) => t.tags.includes(opts.tag!))
  }
  if (opts?.limit) list = list.slice(0, opts.limit)
  return list
}

export function testimonialText(
  item: TestimonialItem,
  lang: "en" | "fr" | "ar"
): { quote: string; role: string } {
  if (lang === "fr") return { quote: item.quoteFr, role: item.roleFr }
  if (lang === "ar") return { quote: item.quoteAr, role: item.roleAr }
  return { quote: item.quoteEn, role: item.roleEn }
}
