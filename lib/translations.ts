// All three dictionaries, for server code (metadata, feeds) that may need
// any language. Client code goes through components/language-provider.tsx,
// which loads only the language in use (lib/i18n/*).
import { en, type TranslationKey } from "@/lib/i18n/en"
import { fr } from "@/lib/i18n/fr"
import { ar } from "@/lib/i18n/ar"
import { interpolate, type Language } from "@/lib/i18n/core"

export type { Language, TranslationKey }

export const translations: Record<Language, Partial<Record<TranslationKey, string>>> = { en, fr, ar }

export function getTranslation(
  language: Language,
  key: TranslationKey,
  params?: Record<string, string | number>
): string {
  return interpolate(language, translations[language][key] || en[key], params)
}
