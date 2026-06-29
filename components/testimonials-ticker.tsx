"use client"

import { useLanguage } from "@/components/language-provider"

const testimonialsEn = [
  {
    name: "Yassine Bahri",
    relation: "Digital Strategy Creator · ISG Tunis workshop co-facilitator",
    quote:
      "Co-facilitated a graphic design workshop at ISG Tunis — captured, involved, and trained students who left with solid visual identities.",
  },
  {
    name: "Rayen Bejaoui",
    relation: "Junior Project Manager · 1000 Challenges & AIESEC",
    quote:
      "Inspiring journey! Remarkable leadership during the 2nd cohort of 1000 Challenges School. Adaptability, dedication, and ability to bring people together.",
  },
  {
    name: "Oumaima Arfaoui",
    relation: "Geosciences Engineer · IOM Hackathon Doha",
    quote:
      "Outstanding collaborative skills, innovative ideas, and unique design perspective during the IOM-UN Migration Hackathon in Doha.",
  },
  {
    name: "Ikram Allah Nemri",
    relation: "Social Entrepreneur · AIESEC Sousse",
    quote:
      "Highly-qualified designer, motivated digital marketer, and inspiring youth worker. Highly recommend for any opportunity.",
  },
  {
    name: "Youssef Touati",
    relation: "CEO, Jasmin Marketing · Direct manager",
    quote:
      "Creativity and dedication on every project. Attention to detail and eagerness to learn evident throughout his internship.",
  },
  {
    name: "Skander Chebbi",
    relation: "Graphic Designer · Collaborator",
    quote:
      "Symbol of dynamism and accuracy. Added value in design, strategic planning, logistics, and external representation.",
  },
  {
    name: "Amir Boujelben",
    relation: "MeetUp Pro 1.0 Event Manager",
    quote:
      "Exceptional strategic marketing and creativity. Crucial role promoting the event through engaging content and campaigns.",
  },
]

const testimonialsFr = [
  {
    name: "Yassine Bahri",
    relation: "Stratégies digitales · Co-animation ISG Tunis",
    quote:
      "A co-animé un workshop design graphique à l'ISG — capter, impliquer, former. Les étudiants sont repartis avec des identités visuelles solides.",
  },
  {
    name: "Rayen Bejaoui",
    relation: "Chef de projet junior · 1000 Challenges & AIESEC",
    quote:
      "Parcours inspirant ! Leadership remarquable lors de la 2e cohorte 1000 Challenges. Adaptabilité, dévouement et esprit d'équipe.",
  },
  {
    name: "Oumaima Arfaoui",
    relation: "Ingénieur géosciences · Hackathon OIM Doha",
    quote:
      "Compétences collaboratives exceptionnelles, idées innovantes et perspective design unique au Hackathon OIM à Doha.",
  },
  {
    name: "Ikram Allah Nemri",
    relation: "Entrepreneur social · AIESEC Sousse",
    quote:
      "Designer qualifié, marketeur digital motivé et travailleur jeunesse inspirant. Je le recommande vivement.",
  },
  {
    name: "Youssef Touati",
    relation: "CEO, Jasmin Marketing · Manager direct",
    quote:
      "Créativité et dévouement sur chaque projet. Souci du détail et soif d'apprendre pendant son stage.",
  },
  {
    name: "Skander Chebbi",
    relation: "Designer graphique · Collaborateur",
    quote:
      "Symbole de dynamisme et précision. Valeur ajoutée en design, planification stratégique et représentation externe.",
  },
  {
    name: "Amir Boujelben",
    relation: "Event Manager MeetUp Pro 1.0",
    quote:
      "Marketing stratégique exceptionnel et créativité. Rôle crucial dans la promotion et le succès de l'événement.",
  },
]

const testimonialsAr = [
  {
    name: "ياسين بحري",
    relation: "استراتيجيات رقمية · ورشة ISG تونس",
    quote:
      "شارك في تيسير ورشة تصميم جرافيك — يلفت الانتباه ويشرك الطلاب الذين غادروا بهويات بصرية قوية.",
  },
  {
    name: "رايان بوجاوي",
    relation: "مدير مشاريع · 1000 تحدي وأييسيك",
    quote:
      "رحلة ملهمة! قيادة رائعة في الدفعة الثانية من مدرسة 1000 تحدي. مرونة وتفانٍ وقدرة على جمع الناس.",
  },
  {
    name: "أميمة العرفاوي",
    relation: "مهندسة جيولوجيا · هاكاثون المنظمة الدولية للهجرة",
    quote:
      "مهارات تعاون استثنائية وأفكار مبتكرة ورؤية تصميم فريدة في هاكاثون المنظمة الدولية للهجرة بالدوحة.",
  },
  {
    name: "إكرام الله النمري",
    relation: "مقاول اجتماعي · أييسيك سوسة",
    quote:
      "مصمم مؤهل، مسوق رقمي متحمس، وعامل شباب ملهم. أوصي به بشدة.",
  },
  {
    name: "يوسف التواتي",
    relation: "الرئيس التنفيذي، جاسمين ماركتينغ · المدير المباشر",
    quote:
      "إبداع وتفانٍ في كل مشروع. انتباه للتفاصيل وحرص على التعلم خلال فترة التدريب.",
  },
  {
    name: "سكندر الشابي",
    relation: "مصمم جرافيك · متعاون",
    quote:
      "رمز الحيوية والدقة. قيمة مضافة في التصميم والتخطيط الاستراتيجي والتمثيل الخارجي.",
  },
  {
    name: "أمير بوجلبن",
    relation: "مدير حدث MeetUp Pro 1.0",
    quote:
      "تسويق استراتيجي استثنائي وإبداع. دور حاسم في الترويج للحدث ونجاحه.",
  },
]

export default function TestimonialsTicker() {
  const { language } = useLanguage()
  const testimonials = language === "fr" ? testimonialsFr : language === "ar" ? testimonialsAr : testimonialsEn
  const duplicated = [...testimonials, ...testimonials]

  return (
    <section className="w-full py-8 border-y border-border bg-muted/30 overflow-hidden">
      <div className="flex animate-ticker gap-16 whitespace-nowrap">
        {duplicated.map((t, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-4 shrink-0 min-w-[260px] pr-8 md:pr-12"
          >
            <div className="w-8 h-8 rounded-full bg-slate-900/5 dark:bg-slate-100/10 flex items-center justify-center text-[11px] font-semibold text-slate-700 dark:text-slate-100">
              {t.name
                .split(" ")
                .map((n: string) => n[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="flex flex-col">
              <p className="text-xs md:text-sm text-muted-foreground italic max-w-xs md:max-w-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[11px] font-semibold text-foreground">{t.name}</span>
                <span className="text-[10px] text-muted-foreground hidden sm:inline">· {t.relation}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
