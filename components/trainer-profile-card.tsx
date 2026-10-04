"use client"

import { Languages, BookOpen, LayoutGrid, MapPin, Award, Download } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { formatStat } from "@/lib/profile"

/**
 * Trainer profile at a glance (inspiration brief, optional addition): the
 * facts an organiser checks before booking, in one box. Every line comes
 * from data already on this site: languages and countries from the hero
 * copy, formats from lib/trainer.ts offers, topics and references from the
 * case studies (IFMSA, IOM) and the CNFCPP certification in lib/profile.ts.
 */
const ROWS = [
  {
    Icon: Languages,
    label: { en: "Languages", fr: "Langues", ar: "اللغات" },
    value: {
      en: "Arabic, French, English",
      fr: "Arabe, français, anglais",
      ar: "العربية، الفرنسية، الإنجليزية",
    },
  },
  {
    Icon: BookOpen,
    label: { en: "Topics", fr: "Thèmes", ar: "المواضيع" },
    value: {
      en: "Non-formal education, human rights, leadership, youth development, train-the-trainer",
      fr: "Éducation non formelle, droits humains, leadership, développement des jeunes, formation de formateurs",
      ar: "التعليم غير النظامي، حقوق الإنسان، القيادة، تنمية الشباب، تدريب المدربين",
    },
  },
  {
    Icon: LayoutGrid,
    label: { en: "Formats", fr: "Formats", ar: "الصيغ" },
    value: {
      en: "Half-day workshops, multi-session programmes, TOT (2–5 days), keynotes and facilitation, in person or online",
      fr: "Ateliers d'une demi-journée, programmes multi-sessions, TOT (2 à 5 jours), conférences et facilitation, en présentiel ou en ligne",
      ar: "ورشات نصف يوم، برامج متعددة الجلسات، تدريب المدربين (2 إلى 5 أيام)، كلمات رئيسية وتيسير، حضورياً أو عن بعد",
    },
  },
  {
    Icon: MapPin,
    label: { en: "Delivered in", fr: "Interventions", ar: "أماكن التنفيذ" },
    value: {
      en: "Tunisia, Morocco, Qatar, online",
      fr: "Tunisie, Maroc, Qatar, en ligne",
      ar: "تونس، المغرب، قطر، عن بعد",
    },
  },
  {
    Icon: Award,
    label: { en: "References", fr: "Références", ar: "المرجعيات" },
    value: {
      en: `CNFCPP-certified trainer · IFMSA, IOM and ${formatStat("trainingPartners")} partner organisations`,
      fr: `Formateur certifié CNFCPP · IFMSA, OIM et ${formatStat("trainingPartners")} organisations partenaires`,
      ar: `مدرب معتمد من CNFCPP · IFMSA، المنظمة الدولية للهجرة و${formatStat("trainingPartners")} منظمة شريكة`,
    },
  },
] as const

export default function TrainerProfileCard() {
  const { language } = useLanguage()
  const lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  const heading = { en: "Trainer profile", fr: "Profil du formateur", ar: "ملف المدرب" }[lang]
  // One-page PDF for organisers to forward internally (built from
  // scripts/freebies/trainer-one-sheet*.html).
  const download = { en: "Download the one-page profile (PDF)", fr: "Télécharger la fiche d'une page (PDF)", ar: "تحميل الملف التعريفي في صفحة واحدة (PDF)" }[lang]

  return (
    <section aria-labelledby="trainer-profile-heading" className="w-full px-4 pt-10 md:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-6 md:p-8">
        <h2 id="trainer-profile-heading" className="label mb-5">
          {heading}
        </h2>
        <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {ROWS.map(({ Icon, label, value }) => (
            <div key={label.en}>
              <dt className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-subtle text-accent" aria-hidden>
                  <Icon className="h-4 w-4" />
                </span>
                {label[lang]}
              </dt>
              <dd className="ms-11 text-sm leading-relaxed text-foreground">{value[lang]}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-5 text-sm">
          <span className="inline-flex items-center gap-2 font-semibold text-foreground">
            <Download className="h-4 w-4 text-accent" aria-hidden />
            {download}
          </span>
          <a href="/freebies/trainer-one-sheet.pdf" download className="font-semibold text-accent hover:underline" hrefLang="en">
            English
          </a>
          <a href="/freebies/trainer-one-sheet-fr.pdf" download className="font-semibold text-accent hover:underline" hrefLang="fr">
            Français
          </a>
        </p>
      </div>
    </section>
  )
}
