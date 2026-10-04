"use client"

import { ChevronDown } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

/**
 * Per-track FAQ (Oct 2026), shown above the contact form on /designer,
 * /trainer and /developer. Buyers decide on price, timing, deliverables and
 * format before writing; these answer that without a call. The homepage
 * FAQ stays removed (Dhia's call); the chat assistant still uses lib/faqs.ts.
 *
 * Every answer restates facts already on the site (package contents,
 * offer formats in lib/trainer.ts, timelines in lib/faqs.ts). Native
 * <details> so answers are in the HTML and work without JavaScript; the
 * FAQPage JSON-LD mirrors the visible text, as Google requires.
 */

type Lang = "en" | "fr" | "ar"
type QA = { q: string; a: string }
export type FaqTrack = "design" | "training" | "development"

const PRICE: Record<Lang, QA> = {
  en: { q: "How much does it cost?", a: "It depends on scope, so I quote after a free 30-minute call where we define what you need. You get a written quote before any work starts." },
  fr: { q: "Combien ça coûte ?", a: "Cela dépend du périmètre : j'établis un devis après un appel gratuit de 30 minutes où nous définissons votre besoin. Vous recevez un devis écrit avant tout démarrage." },
  ar: { q: "كم التكلفة؟", a: "تعتمد على نطاق العمل، لذا أقدّم عرض سعر بعد مكالمة مجانية مدتها 30 دقيقة نحدد فيها ما تحتاجه. تستلم عرض سعر مكتوباً قبل بدء أي عمل." },
}

const FAQS: Record<FaqTrack, Record<Lang, QA[]>> = {
  design: {
    en: [
      { q: "How long does a brand identity take?", a: "Usually 2 to 4 weeks. We agree on a clear timeline in the first call." },
      PRICE.en,
      { q: "What do I receive at the end?", a: "The files and rules your team needs to keep the brand consistent: logo suite, colour and type system, social templates and a brand usage guide, exported and ready to use in Canva or Figma." },
      { q: "Can you design in both Arabic and Latin scripts?", a: "Yes. I design paired Arabic and Latin wordmarks, matched type and right-to-left layouts, for brands that speak to both audiences." },
      { q: "Do you work with clients outside Tunisia?", a: "Yes, remotely, in English, French or Arabic, through video calls and shared files." },
    ],
    fr: [
      { q: "Combien de temps prend une identité de marque ?", a: "En général 2 à 4 semaines. Nous fixons un calendrier clair lors du premier appel." },
      PRICE.fr,
      { q: "Que vais-je recevoir à la fin ?", a: "Les fichiers et les règles dont votre équipe a besoin pour garder une marque cohérente : déclinaisons du logo, système de couleurs et de typographie, modèles pour les réseaux sociaux et guide d'utilisation, exportés et prêts à l'emploi dans Canva ou Figma." },
      { q: "Pouvez-vous créer en arabe et en caractères latins ?", a: "Oui : logotypes arabe et latin assortis, typographies accordées et mises en page de droite à gauche, pour les marques qui parlent aux deux publics." },
      { q: "Travaillez-vous avec des clients hors de Tunisie ?", a: "Oui, à distance, en français, en anglais ou en arabe, par visioconférence et fichiers partagés." },
    ],
    ar: [
      { q: "كم يستغرق تصميم هوية العلامة؟", a: "عادة من أسبوعين إلى 4 أسابيع. نتفق على جدول زمني واضح في المكالمة الأولى." },
      PRICE.ar,
      { q: "ماذا أستلم في النهاية؟", a: "الملفات والقواعد التي يحتاجها فريقك للحفاظ على تناسق العلامة: نسخ الشعار، نظام الألوان والخطوط، قوالب لوسائل التواصل، ودليل استخدام الهوية، جاهزة للاستعمال في Canva أو Figma." },
      { q: "هل تصمم بالعربية وبالحروف اللاتينية؟", a: "نعم: شعارات نصية عربية ولاتينية متناسقة، وخطوط متوافقة، وتخطيطات من اليمين إلى اليسار، للعلامات التي تخاطب الجمهورين." },
      { q: "هل تعمل مع عملاء خارج تونس؟", a: "نعم، عن بعد، بالعربية أو الفرنسية أو الإنجليزية، عبر مكالمات الفيديو والملفات المشتركة." },
    ],
  },
  training: {
    en: [
      { q: "In which languages do you train?", a: "Arabic, French and English, and mixed-language groups." },
      { q: "In person or online?", a: "Both. I train in person across Tunisia, travel for events (sessions so far in Morocco and Qatar) and run sessions online." },
      { q: "How many participants can a session have?", a: "A half-day workshop works for 10 to 100 participants. Multi-session programmes and train-the-trainer courses are built around a cohort." },
      { q: "How do you adapt the session to our group?", a: "Every offer starts with a needs analysis with you, so the plan fits the group's level, language and goals before anything is designed." },
      { q: "What do we get after the training?", a: "A post-session summary for workshops, and a final evaluation report for programmes, so you can show results to your team or funders." },
      PRICE.en,
    ],
    fr: [
      { q: "Dans quelles langues formez-vous ?", a: "En arabe, en français et en anglais, y compris pour des groupes multilingues." },
      { q: "En présentiel ou en ligne ?", a: "Les deux. Je forme en présentiel partout en Tunisie, je me déplace pour des événements (déjà au Maroc et au Qatar) et j'anime aussi en ligne." },
      { q: "Combien de participants par session ?", a: "Un atelier d'une demi-journée convient de 10 à 100 participants. Les programmes multi-sessions et les formations de formateurs se construisent autour d'une cohorte." },
      { q: "Comment adaptez-vous la session à notre groupe ?", a: "Chaque offre commence par une analyse des besoins avec vous, pour que le déroulé corresponde au niveau, à la langue et aux objectifs du groupe avant toute conception." },
      { q: "Que recevons-nous après la formation ?", a: "Un compte-rendu post-session pour les ateliers, et un rapport d'évaluation final pour les programmes, pour présenter les résultats à votre équipe ou à vos bailleurs." },
      PRICE.fr,
    ],
    ar: [
      { q: "بأي لغات تدرّب؟", a: "بالعربية والفرنسية والإنجليزية، وكذلك للمجموعات متعددة اللغات." },
      { q: "حضورياً أم عن بعد؟", a: "الاثنان. أدرّب حضورياً في كامل تونس، وأتنقل للفعاليات (سبق ذلك في المغرب وقطر)، وأقدّم جلسات عن بعد." },
      { q: "كم عدد المشاركين في الجلسة؟", a: "تناسب ورشة نصف اليوم من 10 إلى 100 مشارك. أما البرامج متعددة الجلسات وتدريب المدربين فتُبنى حول مجموعة ثابتة." },
      { q: "كيف تكيّف الجلسة مع مجموعتنا؟", a: "يبدأ كل عرض بتحليل للاحتياجات معك، حتى يناسب البرنامج مستوى المجموعة ولغتها وأهدافها قبل أي تصميم." },
      { q: "ماذا نستلم بعد التدريب؟", a: "ملخص بعد الجلسة للورشات، وتقرير تقييم نهائي للبرامج، لتعرض النتائج على فريقك أو الجهات المموّلة." },
      PRICE.ar,
    ],
  },
  development: {
    en: [
      { q: "How long does a website take?", a: "2 to 8 weeks depending on scope. We agree on a clear timeline in the first call." },
      { q: "Can the site be in Arabic, French and English?", a: "Yes. I build multilingual sites, including proper right-to-left Arabic layouts, like this one." },
      { q: "What do you build with?", a: "React and Next.js, hosted on Vercel: fast, mobile-first sites that you can keep growing." },
      { q: "Can you also handle the branding?", a: "Yes. The same person designs the brand and builds the site, so you don't coordinate two freelancers." },
      PRICE.en,
    ],
    fr: [
      { q: "Combien de temps prend un site web ?", a: "De 2 à 8 semaines selon le périmètre. Nous fixons un calendrier clair lors du premier appel." },
      { q: "Le site peut-il être en arabe, français et anglais ?", a: "Oui. Je réalise des sites multilingues, avec une vraie mise en page de droite à gauche pour l'arabe, comme celui-ci." },
      { q: "Avec quelles technologies ?", a: "React et Next.js, hébergé sur Vercel : des sites rapides, pensés mobile d'abord, que vous pouvez faire évoluer." },
      { q: "Pouvez-vous aussi vous occuper de l'identité visuelle ?", a: "Oui. La même personne conçoit la marque et développe le site, vous n'avez pas à coordonner deux prestataires." },
      PRICE.fr,
    ],
    ar: [
      { q: "كم يستغرق إنجاز موقع ويب؟", a: "من أسبوعين إلى 8 أسابيع حسب نطاق العمل. نتفق على جدول زمني واضح في المكالمة الأولى." },
      { q: "هل يمكن أن يكون الموقع بالعربية والفرنسية والإنجليزية؟", a: "نعم. أبني مواقع متعددة اللغات مع تخطيط صحيح من اليمين إلى اليسار للعربية، مثل هذا الموقع." },
      { q: "ما التقنيات التي تستعملها؟", a: "React وNext.js مع استضافة على Vercel: مواقع سريعة مصممة للهاتف أولاً ويمكن تطويرها لاحقاً." },
      { q: "هل يمكنك تولّي الهوية البصرية أيضاً؟", a: "نعم. نفس الشخص يصمم العلامة ويبني الموقع، فلا تحتاج إلى التنسيق بين مستقلّين." },
      PRICE.ar,
    ],
  },
}

const HEADING: Record<Lang, { label: string; title: string }> = {
  en: { label: "FAQ", title: "Questions before you write" },
  fr: { label: "FAQ", title: "Les questions avant de m'écrire" },
  ar: { label: "أسئلة شائعة", title: "أسئلة قبل أن تراسلني" },
}

export default function TrackFaq({ track }: { track: FaqTrack }) {
  const { language } = useLanguage()
  const lang: Lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const items = FAQS[track][lang]
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }

  return (
    <section id="faq" aria-labelledby="faq-heading" className="section-compact w-full px-4 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl">
        <p className="label mb-2">{HEADING[lang].label}</p>
        <h2 id="faq-heading" className="mb-6 text-2xl font-bold md:text-3xl">{HEADING[lang].title}</h2>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map(({ q, a }) => (
            <details key={q} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
