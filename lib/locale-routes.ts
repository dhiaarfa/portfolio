import type { Language } from "@/lib/translations"

/**
 * The route tree also published under /fr/* and /ar/* (see app/[locale]/*).
 * Every other route (individual /insights/[slug] articles, /case-study/*,
 * etc.) has no translated twin yet, so the language toggle changes only the
 * in-page text there instead of navigating -- see checklist for why insight
 * article bodies are still English-only.
 */
const WORK_SLUG_RE = /^\/work\/[^/]+$/

function isLocalizedBase(base: string): boolean {
  if (base === "/" || base === "/designer" || base === "/trainer" || base === "/developer" || base === "/freebies" || base === "/insights") {
    return true
  }
  return WORK_SLUG_RE.test(base)
}

/** Strips a leading /fr or /ar prefix from `pathname`, returning the
 *  unprefixed "base" path (e.g. "/fr/designer" -> "/designer"). */
export function toBasePath(pathname: string): string {
  const match = pathname.match(/^\/(fr|ar)(\/.*)?$/)
  if (!match) return pathname
  return match[2] ?? "/"
}

/** Given the current pathname and a target language, returns the URL to
 *  navigate to if this route has a real translated twin in that language,
 *  or null if it doesn't (the caller should fall back to an in-place
 *  language switch with no navigation). */
export function getLocalizedPath(pathname: string, target: Language): string | null {
  const base = toBasePath(pathname)
  if (!isLocalizedBase(base)) return null

  if (target === "en") return base
  const suffix = base === "/" ? "" : base
  return `/${target}${suffix}`
}
