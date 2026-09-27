/** Shared pillar type for the homepage "which door do you need?" selector
 *  (checklist item 6.13) -- null means "show everything", matching the
 *  page's default, unfiltered state for anyone who never touches it. */
export type Pillar = "designer" | "trainer" | "developer" | null

/** Maps a pillar to ResourcesInsightsStrip's existing `focus` prop values. */
export function pillarToInsightsFocus(pillar: Pillar): "design" | "training" | "development" | "all" {
  if (pillar === "designer") return "design"
  if (pillar === "trainer") return "training"
  if (pillar === "developer") return "development"
  return "all"
}

/** Maps a pillar to TestimonialsShowcase's `tag` prop. Returns undefined for
 *  "developer" on purpose -- no client testimonial in lib/testimonials.ts is
 *  actually about a web-dev engagement, so filtering to a "developer" tag
 *  that doesn't exist would either show nothing with no explanation or, if
 *  faked, misrepresent who said what. The caller shows an honest fallback
 *  message instead (see HomePageClient.tsx). */
export function pillarToTestimonialTag(pillar: Pillar): "design" | "training" | undefined {
  if (pillar === "designer") return "design"
  if (pillar === "trainer") return "training"
  return undefined
}
