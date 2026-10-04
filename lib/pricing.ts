/**
 * Starting prices (Oct 2026), the one source for every "from" price on the
 * site: designer packages, trainer offers, developer pricing, the per-track
 * FAQ, the chat assistant and llms.txt. Set from the market research in
 * docs/pricing-research-2026.md (64 sources: Tunisian agencies, CNFCPP
 * reimbursement caps, CONECT and Council of Europe trainer fees, Malt /
 * Codeur / AIGA / Upwork rates). TND is the Tunisian price, EUR the price for
 * clients abroad (not a currency conversion).
 *
 * Training: the company day rate stays under the CNFCPP reimbursement cap
 * (20% of the 48-hour SMIG per hour, about 666 TND per 6-hour day in 2026).
 */

export type PriceId =
  | "logo"
  | "brandIdentity"
  | "bilingualIdentity"
  | "socialTemplates"
  | "landingPage"
  | "showcaseSite"
  | "multilingualSite"
  | "maintenance"
  | "halfDayWorkshop"
  | "trainingDay"
  | "totDay"
  | "keynote"

type Unit = "day" | "month"

export const PRICES: Record<PriceId, { tnd: number; eur: number; unit?: Unit }> = {
  logo: { tnd: 450, eur: 250 },
  brandIdentity: { tnd: 1500, eur: 600 },
  bilingualIdentity: { tnd: 1800, eur: 750 },
  socialTemplates: { tnd: 300, eur: 150 },
  landingPage: { tnd: 900, eur: 600 },
  showcaseSite: { tnd: 1800, eur: 1200 },
  multilingualSite: { tnd: 2400, eur: 1600 },
  maintenance: { tnd: 150, eur: 50, unit: "month" },
  halfDayWorkshop: { tnd: 350, eur: 150 },
  trainingDay: { tnd: 500, eur: 200, unit: "day" },
  totDay: { tnd: 600, eur: 250, unit: "day" },
  keynote: { tnd: 400, eur: 300 },
}

type Lang = "en" | "fr" | "ar"

const FROM: Record<Lang, string> = { en: "From", fr: "À partir de", ar: "ابتداءً من" }
const PER: Record<Lang, Record<Unit, string>> = {
  en: { day: "/ day", month: "/ month" },
  fr: { day: "/ jour", month: "/ mois" },
  ar: { day: "/ اليوم", month: "/ الشهر" },
}

// Fixed grouping (no Intl) so server and client render the same string.
const group = (n: number, sep: string) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep)

/** "1,500 TND · €600" (en), "1 500 DT · 600 €" (fr), "1,500 د.ت · 600 €" (ar). */
export function priceAmount(id: PriceId, lang: Lang): string {
  const { tnd, eur, unit } = PRICES[id]
  const per = unit ? ` ${PER[lang][unit]}` : ""
  if (lang === "fr") return `${group(tnd, " ")} DT · ${group(eur, " ")} €${per}`
  if (lang === "ar") return `${group(tnd, ",")} د.ت · ${group(eur, ",")} €${per}`
  return `${group(tnd, ",")} TND · €${group(eur, ",")}${per}`
}

/** "From 1,500 TND · €600" in the given language; `inline` lowercases
 *  "From" for use mid-sentence. */
export function fromPrice(id: PriceId, lang: Lang, inline = false): string {
  const from = inline && lang !== "ar" ? FROM[lang].toLowerCase() : FROM[lang]
  return `${from} ${priceAmount(id, lang)}`
}

const LABELS: Record<PriceId, Record<Lang, string>> = {
  logo: { en: "Logo", fr: "Logo", ar: "شعار" },
  brandIdentity: { en: "Brand identity", fr: "Identité de marque", ar: "هوية بصرية" },
  bilingualIdentity: { en: "Arabic + Latin identity", fr: "Identité arabe + latin", ar: "هوية عربية + لاتينية" },
  socialTemplates: { en: "Social media templates", fr: "Modèles pour les réseaux sociaux", ar: "قوالب التواصل الاجتماعي" },
  landingPage: { en: "Landing page", fr: "Page d'atterrissage", ar: "صفحة هبوط" },
  showcaseSite: { en: "Showcase website", fr: "Site vitrine", ar: "موقع تعريفي" },
  multilingualSite: { en: "Arabic / French / English website", fr: "Site arabe / français / anglais", ar: "موقع بالعربية والفرنسية والإنجليزية" },
  maintenance: { en: "Website maintenance", fr: "Maintenance du site", ar: "صيانة الموقع" },
  halfDayWorkshop: { en: "Half-day workshop", fr: "Atelier d'une demi-journée", ar: "ورشة نصف يوم" },
  trainingDay: { en: "Training day", fr: "Journée de formation", ar: "يوم تدريبي" },
  totDay: { en: "Train-the-trainer", fr: "Formation de formateurs", ar: "تدريب المدربين" },
  keynote: { en: "Keynote", fr: "Conférence", ar: "كلمة رئيسية" },
}

export function priceLabel(id: PriceId, lang: Lang): string {
  return LABELS[id][lang]
}

/** Which contact-form service a priced offer belongs to. */
export function priceService(id: PriceId): "design" | "development" | "training" {
  if (["logo", "brandIdentity", "bilingualIdentity", "socialTemplates"].includes(id)) return "design"
  if (["landingPage", "showcaseSite", "multilingualSite", "maintenance"].includes(id)) return "development"
  return "training"
}

/** Plain-English list for the chat assistant and llms.txt. */
export function startingPricesText(): string {
  return (Object.keys(PRICES) as PriceId[]).map((id) => `- ${LABELS[id].en}: from ${priceAmount(id, "en")}`).join("\n")
}

export const DESIGN_PRICES: PriceId[] = ["logo", "brandIdentity", "bilingualIdentity", "socialTemplates"]
export const WEB_PRICES: PriceId[] = ["landingPage", "showcaseSite", "multilingualSite", "maintenance"]
export const TRAINING_PRICES: PriceId[] = ["halfDayWorkshop", "trainingDay", "totDay", "keynote"]

/** schema.org OfferCatalog for a Service node: each offer's starting price
 *  in TND (Tunisia) and EUR (abroad), as minPrice. */
export function offerCatalogJsonLd(name: string, ids: PriceId[]) {
  return {
    "@type": "OfferCatalog",
    name,
    itemListElement: ids.map((id) => {
      const { tnd, eur, unit } = PRICES[id]
      const spec = (price: number, currency: string) => ({
        "@type": unit ? "UnitPriceSpecification" : "PriceSpecification",
        minPrice: price,
        priceCurrency: currency,
        ...(unit ? { unitCode: unit === "day" ? "DAY" : "MON" } : {}),
      })
      return {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: LABELS[id].en },
        priceSpecification: [spec(tnd, "TND"), spec(eur, "EUR")],
      }
    }),
  }
}
