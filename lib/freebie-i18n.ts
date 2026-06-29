import type { Freebie } from "@/lib/freebies"

type FreebieField = "title" | "description" | "format" | "benefit"

const fallbacks: Record<FreebieField, keyof Freebie> = {
  title: "title",
  description: "description",
  format: "format",
  benefit: "benefit",
}

export function freebieText(f: Freebie, field: FreebieField, t: (key: string) => string): string {
  const key = `freebie.${f.id}.${field}`
  const translated = t(key)
  if (translated !== key) return translated
  return String(f[fallbacks[field]])
}
