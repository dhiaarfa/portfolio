import type { Language } from "@/lib/translations"

/**
 * The route tree also published under /fr/* and /ar/* (see app/[locale]/*).
 * Individual /insights/[slug] articles now have real fr/ar bodies too (see
 * lib/insights-content.ts), so they get a locale twin like /work/[slug].
 * Everything else (e.g. /case-study/*) has no translated twin, so the
 * language toggle changes only the in-page text there instead of navigating.
 */
const WORK_SLUG_RE = /^\/work\/[^/]+$/
const INSIGHT_SLUG_RE = /^\/insights\/[^/]+$/

function isLocalizedBase(base: string): boolean {
  if (base === "/" || base === "/designer" || base === "/trainer" || base === "/developer" || base === "/freebies" || base === "/insights") {
    return true
  }
  return WORK_SLUG_RE.test(base) || INSIGHT_SLUG_RE.test(base)
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
