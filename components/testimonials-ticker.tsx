"use client"

import { useLanguage } from "@/components/language-provider"

const testimonialsEn = [
  { name: "Rayen Bejaoui", relation: "Junior Project Manager · Same team (1000 Challenges, AIESEC)", quote: "True leader, remarkable leadership. Joy to collaborate with." },
  { name: "Omayma Arfaoui", relation: "Geosciences Engineer · Harvard Fellow · IOM Hackathon Doha", quote: "Inspiring, outstanding collaborative skills, unique design perspective." },
  { name: "Ikram Allah Nemri", relation: "Social Entrepreneur · MBA Candidate · AIESEC Sousse", quote: "Highly-qualified designer, motivated digital marketer, inspiring youth worker." },
  { name: "Youssef Touati", relation: "CEO & Co-Founder, Jasmin Marketing · Direct manager", quote: "Creativity and dedication. Attention to detail, eagerness to learn." },
  { name: "Skander Chebbi", relation: "Graphic Designer · Worked on different teams", quote: "Symbol of dynamism and accuracy. Great skillset, adds value in design and strategy." },
  { name: "Amir Boujelben", relation: "Software Engineer · MeetUp Pro 1.0 Event Manager", quote: "Exceptional strategic marketing, creativity. Crucial role in event success." },
]

const testimonialsFr = [
  { name: "Rayen Bejaoui", relation: "Chef de projet junior · Même équipe (1000 Challenges, AIESEC)", quote: "Vrai leader, remarquable. Un plaisir de collaborer." },
  { name: "Omayma Arfaoui", relation: "Ingénieur géosciences · Harvard Fellow · Hackathon OIM Doha", quote: "Inspirant, excellent en collaboration, perspective design unique." },
  { name: "Ikram Allah Nemri", relation: "Entrepreneur social · MBA · AIESEC Sousse", quote: "Designer qualifié, marketeur digital motivé, travailleur jeunesse inspirant." },
  { name: "Youssef Touati", relation: "CEO & Co-fondateur, Jasmin Marketing · Manager direct", quote: "Créativité et dévouement. Souci du détail, soif d'apprendre." },
  { name: "Skander Chebbi", relation: "Designer graphique · Équipes différentes", quote: "Symbole de dynamisme et précision. Grande expertise, valeur ajoutée." },
  { name: "Amir Boujelben", relation: "Ingénieur logiciel · Event Manager MeetUp Pro 1.0", quote: "Marketing stratégique exceptionnel, créativité. Rôle crucial dans le succès." },
]

const testimonialsAr = [
  { name: "رايان بوجاوي", relation: "مدير مشاريع صغير · نفس الفريق (1000 تحدي، أييسيك)", quote: "قائد حقيقي، قيادة رائعة. متعة التعاون معه." },
  { name: "أميمة العرفاوي", relation: "مهندسة جيولوجيا · زميلة هارفارد · هاكاثون المنظمة الدولية للهجرة الدوحة", quote: "ملهم، مهارات تعاون استثنائية، رؤية تصميم فريدة." },
  { name: "إكرام الله النمري", relation: "مقاول اجتماعي · ماجستير إدارة أعمال · أييسيك سوسة", quote: "مصمم مؤهل، مسوق رقمي متحمس، عامل شباب ملهم." },
  { name: "يوسف التواتي", relation: "الرئيس التنفيذي والشريك، جاسمين ماركتينغ · المدير المباشر", quote: "إبداع وتفانٍ. انتباه للتفاصيل، حرص على التعلم." },
  { name: "سكندر الشابي", relation: "مصمم جرافيك · فرق مختلفة", quote: "رمز الحيوية والدقة. مهارات عالية، قيمة مضافة في التصميم." },
  { name: "أمير بوجلبن", relation: "مهندس برمجيات · مدير حدث MeetUp Pro 1.0", quote: "تسويق استراتيجي استثنائي، إبداع. دور حاسم في النجاح." },
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
