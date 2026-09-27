/**
 * Real geographic footprint of Dhia's training & facilitation work.
 *
 * Sourced directly from the two source-of-truth spreadsheets Dhia uploaded
 * (`Delivered Trainings` and `Delivered Facilitations`, Sep 2026 -- ~50
 * combined logged events across 2019-2026), extracted with `pdftotext
 * -layout` rather than read as scanned images, plus the Doha/Qatar
 * hackathon that's already cited on this site (see `trainerJourneyIntro`
 * and the international-events strip in lib/translations.ts).
 *
 * Both source tables have real formatting damage (merged/misaligned cells
 * from multi-line rows), so this file deliberately does NOT claim precise
 * per-governorate event counts -- `tier` is a coarse, conservative bucket
 * ("sm"/"md"/"lg") based on how many *unambiguous* rows named that place,
 * and `exampleKey` always points to real organization names pulled
 * straight from the sheets, never invented ones.
 */

export type MapTier = "sm" | "md" | "lg"

export type ImpactLocation = {
  id: string
  /** Governorate/city, real coordinates for the map projection. */
  lat: number
  lon: number
  tier: MapTier
  nameKey: string
  exampleKey: string
}

// Tunisia governorates with at least one clearly-attributed in-person event.
export const tunisiaLocations: ImpactLocation[] = [
  { id: "tunis", lat: 36.8065, lon: 10.1815, tier: "lg", nameKey: "mapLocTunis", exampleKey: "mapExTunis" },
  { id: "ariana", lat: 36.8625, lon: 10.1956, tier: "md", nameKey: "mapLocAriana", exampleKey: "mapExAriana" },
  { id: "benArous", lat: 36.753, lon: 10.2311, tier: "md", nameKey: "mapLocBenArous", exampleKey: "mapExBenArous" },
  { id: "sousse", lat: 35.8256, lon: 10.6369, tier: "lg", nameKey: "mapLocSousse", exampleKey: "mapExSousse" },
  { id: "sfax", lat: 34.7406, lon: 10.7603, tier: "md", nameKey: "mapLocSfax", exampleKey: "mapExSfax" },
  { id: "nabeul", lat: 36.4561, lon: 10.7376, tier: "md", nameKey: "mapLocNabeul", exampleKey: "mapExNabeul" },
  { id: "monastir", lat: 35.7643, lon: 10.8113, tier: "sm", nameKey: "mapLocMonastir", exampleKey: "mapExMonastir" },
]

export type InternationalLocation = {
  id: string
  flagEmoji: string
  nameKey: string
  exampleKey: string
}

export const internationalLocations: InternationalLocation[] = [
  { id: "morocco", flagEmoji: "\u{1F1F2}\u{1F1E6}", nameKey: "mapLocMorocco", exampleKey: "mapExMorocco" },
  { id: "qatar", flagEmoji: "\u{1F1F6}\u{1F1E6}", nameKey: "mapLocQatar", exampleKey: "mapExQatar" },
]

// Hand-approximated Tunisia coastline/border, as [lon, lat] pairs, clockwise
// from the NW. This is a simplified silhouette for a decorative map, not
// survey-grade cartography -- accuracy of the DOTS (real city coordinates
// above) matters far more here than the exact coastline curve.
export const TUNISIA_OUTLINE: [number, number][] = [
  [8.4, 36.9],
  [8.6, 37.25],
  [9.6, 37.3],
  [10.3, 37.15],
  [11.1, 37.0],
  [10.9, 36.6],
  [10.65, 36.3],
  [10.65, 35.9],
  [10.9, 35.5],
  [10.75, 35.0],
  [10.9, 34.75],
  [10.6, 34.3],
  [10.3, 33.9],
  [10.6, 33.5],
  [11.5, 33.15],
  [10.3, 32.1],
  [9.0, 32.0],
  [7.9, 32.5],
  [8.0, 33.5],
  [7.6, 34.5],
  [8.2, 35.3],
  [8.4, 36.0],
  [8.2, 36.5],
]

export const MAP_VIEWBOX = { width: 360, height: 580 }
const LON_RANGE = { min: 7.5, max: 11.6 }
const LAT_RANGE = { min: 32.0, max: 37.5 }
const MEAN_LAT_COS = Math.cos((35 * Math.PI) / 180)

/** Equirectangular projection (with a cos-latitude correction on X so the
 * shape isn't stretched east-west) shared by the outline and every dot, so
 * they're guaranteed to stay aligned. */
export function projectLonLat(lon: number, lat: number): { x: number; y: number } {
  const lonSpanCorrected = (LON_RANGE.max - LON_RANGE.min) * MEAN_LAT_COS
  const x = ((lon - LON_RANGE.min) * MEAN_LAT_COS) * (MAP_VIEWBOX.width / lonSpanCorrected)
  const y = (LAT_RANGE.max - lat) * (MAP_VIEWBOX.height / (LAT_RANGE.max - LAT_RANGE.min))
  return { x, y }
}

export function tierRadius(tier: MapTier): number {
  return tier === "lg" ? 9 : tier === "md" ? 7 : 5.5
}
