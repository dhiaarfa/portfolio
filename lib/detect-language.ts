import type { Language } from "./translations"

// First-visit language detection (Master to-do / user request): pick a
// sensible default site language from the visitor's browser locale instead
// of always starting everyone in English.
//
// Arabic is the default for the Gulf, the Levant, and Libya. French is the
// default for Tunisia, Algeria, and Morocco (Dhia's own client base there is
// French-speaking, even though Arabic is also official in all three).
// Everything else -- including a plain "ar" or "fr" tag with no region, or
// any language the site doesn't have -- falls back the way it always did.
const FRENCH_REGIONS = new Set(["TN", "DZ", "MA"])

/** Picks a first-visit site language from the visitor's browser locale(s)
 *  (e.g. ["ar-SA", "en-US"] from navigator.languages). Falls back to
 *  English whenever nothing in the list clearly maps to Arabic or French. */
export function detectLanguage(locales: readonly string[]): Language {
  for (const raw of locales) {
    if (!raw) continue
    const [langPart, regionPart] = raw.split("-")
    const lang = langPart?.toLowerCase()
    const region = regionPart?.toUpperCase()

    if (lang === "fr") return "fr"
    if (lang === "ar") {
      // Arabic browser locale from Tunisia/Algeria/Morocco still gets the
      // French site, matching the French-speaking client base there.
      return region && FRENCH_REGIONS.has(region) ? "fr" : "ar"
    }
  }
  return "en"
}
