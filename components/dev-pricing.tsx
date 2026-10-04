"use client"

import { useLanguage } from "@/components/language-provider"
import { fromPrice, type PriceId } from "@/lib/pricing"

/**
 * Starting prices on /developer (Oct 2026). /designer shows them on its
 * package cards and /trainer on its offer cards; this page had no package
 * list, so the same "from" prices sit in one row above the FAQ. Amounts come
 * from lib/pricing.ts.
 */
type Lang = "en" | "fr" | "ar"

const ITEMS: { id: PriceId; name: Record<Lang, string>; desc: Record<Lang, string> }[] = [
  {
    id: "landingPage",
    name: { en: "Landing page", fr: "Page d'atterrissage", ar: "صفحة هبوط" },
    desc: { en: "1 to 3 sections for a launch, an event or a campaign.", fr: "1 à 3 sections pour un lancement, un événement ou une campagne.", ar: "من قسم إلى 3 أقسام لإطلاق أو فعالية أو حملة." },
  },
  {
    id: "showcaseSite",
    name: { en: "Showcase website", fr: "Site vitrine", ar: "موقع تعريفي" },
    desc: { en: "5 to 8 pages in one language, mobile-first, with a contact form.", fr: "5 à 8 pages dans une langue, pensé mobile, avec formulaire de contact.", ar: "من 5 إلى 8 صفحات بلغة واحدة، مصمم للهاتف أولاً، مع نموذج تواصل." },
  },
  {
    id: "multilingualSite",
    name: { en: "Arabic / French / English site", fr: "Site arabe / français / anglais", ar: "موقع بالعربية والفرنسية والإنجليزية" },
    desc: { en: "The showcase site in three languages, with a proper right-to-left Arabic layout.", fr: "Le site vitrine en trois langues, avec une vraie mise en page de droite à gauche pour l'arabe.", ar: "الموقع التعريفي بثلاث لغات، مع تخطيط صحيح من اليمين إلى اليسار للعربية." },
  },
  {
    id: "maintenance",
    name: { en: "Maintenance", fr: "Maintenance", ar: "الصيانة" },
    desc: { en: "Updates, content changes and monitoring after launch.", fr: "Mises à jour, modifications de contenu et suivi après la mise en ligne.", ar: "تحديثات وتعديلات على المحتوى ومتابعة بعد الإطلاق." },
  },
]

const HEADING: Record<Lang, { label: string; title: string; note: string }> = {
  en: { label: "Pricing", title: "Starting prices", note: "TND for clients in Tunisia, EUR for clients abroad. You get a written quote after a free 30-minute call." },
  fr: { label: "Tarifs", title: "Prix de départ", note: "En dinars pour les clients en Tunisie, en euros pour l'étranger. Devis écrit après un appel gratuit de 30 minutes." },
  ar: { label: "الأسعار", title: "الأسعار الابتدائية", note: "بالدينار للعملاء في تونس وباليورو للعملاء في الخارج. تستلم عرض سعر مكتوباً بعد مكالمة مجانية مدتها 30 دقيقة." },
}

export default function DevPricing() {
  const { language } = useLanguage()
  const lang: Lang = language === "fr" ? "fr" : language === "ar" ? "ar" : "en"
  return (
    <section id="pricing" aria-labelledby="dev-pricing-heading" className="section-compact w-full px-4 md:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="label mb-2">{HEADING[lang].label}</p>
        <h2 id="dev-pricing-heading" className="mb-3 text-2xl font-bold md:text-3xl">{HEADING[lang].title}</h2>
        <p className="mb-8 text-sm text-muted-foreground">{HEADING[lang].note}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-2 font-bold">{item.name[lang]}</h3>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">{item.desc[lang]}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">{fromPrice(item.id, lang)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
