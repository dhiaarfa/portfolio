import { profileStats } from "@/lib/profile"

// Shared by lib/translations.ts (server, all languages) and the client
// LanguageProvider (one dictionary at a time). No dictionaries in here.
export const LANGUAGES = ["en", "fr", "ar"] as const
export type Language = (typeof LANGUAGES)[number]

/** Stat placeholders available in EVERY string (Oct 2026). Copy used to
 *  hardcode "1,120+", "477+", "7+ years" etc. in ~57 places across the three
 *  languages; they now read from lib/profile.ts, so updating a figure there
 *  updates every sentence. `{{x}}` = formatted with suffix ("1,120+"),
 *  `{{xN}}` = bare number for phrasings like "over 7 years". */
function statParams(language: Language): Record<string, string> {
  // fr-FR groups thousands with a narrow no-break space ("1 120"), matching
  // the old French copy; en and ar both used Latin "1,120".
  const locale = language === "fr" ? "fr-FR" : "en-US"
  const fmt = (s: { value: number; suffix: string }) => `${s.value.toLocaleString(locale)}${s.suffix}`
  return {
    participants: fmt(profileStats.participantsTrained),
    participantsN: profileStats.participantsTrained.value.toLocaleString(locale),
    trainingHours: fmt(profileStats.trainingHours),
    facilitationHours: fmt(profileStats.facilitationHours),
    trainingEvents: fmt(profileStats.trainingCycles),
    designProjects: fmt(profileStats.designProjects),
    years: fmt(profileStats.yearsExperience),
    yearsN: String(profileStats.yearsExperience.value),
  }
}

/** Fills {{stat}} placeholders and caller params into a raw string. */
export function interpolate(language: Language, raw: string, params?: Record<string, string | number>): string {
  if (!raw.includes("{{")) return raw
  return Object.entries({ ...statParams(language), ...params }).reduce(
    (acc, [k, v]) => acc.split(`{{${k}}}`).join(String(v)),
    raw
  )
}
