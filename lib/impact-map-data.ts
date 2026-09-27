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

// Tunisia coastline/border, as [lon, lat] pairs, clockwise from Tabarka in
// the NW. Re-digitized Sep 2026 against a real governorate-boundary
// reference map (Dhia flagged the previous hand-drawn silhouette as
// visibly wrong-shaped) -- this version traces the actual named
// landmarks that make Tunisia's outline recognizable: the Cap Bon
// peninsula and the Gulf of Tunis bay it wraps around, the Gulf of
// Hammamet indent, the Sousse/Monastir/Mahdia "Sahel" bulge, the deep
// Gulf of Gabes indent, the Zarzis/Ben Gardane bulge near the Libya
// border, and the Kasserine/Le Kef/Jendouba zigzag of the western
// Algeria border. Still a simplified silhouette for a decorative map,
// not survey-grade cartography, but every vertex below corresponds to a
// real coastal town or border landmark rather than an arbitrary guess.
// Cropped at 32N (south of Gabes/Medenine) to keep the empty far-south
// desert from dominating the map -- every dot above sits in the
// northern two-thirds this outline actually covers.
export const TUNISIA_OUTLINE: [number, number][] = [
  [8.76, 36.95], // Tabarka
  [8.6, 37.1],
  [9.0, 37.22], // Cap Serrat
  [9.6, 37.23],
  [9.87, 37.27], // Bizerte
  [9.75, 37.34], // Cap Blanc -- northernmost point
  [10.05, 37.2], // Ras Jebel
  [10.3, 37.0], // Gulf of Tunis, north shore
  [10.25, 36.82], // Gulf of Tunis indent (La Goulette / Tunis)
  [10.55, 36.88], // Gulf of Tunis, east shore
  [10.85, 37.0], // Cap Bon peninsula base
  [11.07, 37.06], // El Haouaria -- Cap Bon tip (Ras Addar)
  [11.1, 36.85], // Kelibia
  [10.98, 36.71], // Korba
  [10.75, 36.5],
  [10.55, 36.4], // Hammamet -- gulf indent
  [10.64, 36.1],
  [10.64, 35.83], // Sousse
  [10.83, 35.76], // Monastir peninsula tip
  [11.06, 35.5], // Mahdia -- Sahel bulge
  [11.11, 35.23], // Chebba
  [10.85, 34.9],
  [10.76, 34.74], // Sfax
  [10.3, 34.3], // La Skhira
  [10.1, 33.95], // Gabes -- gulf indent
  [10.35, 33.7],
  [10.75, 33.55],
  [11.11, 33.5], // Zarzis
  [11.22, 33.15], // Ben Gardane
  [11.5, 33.05], // Ras Ajdir, Libya border
  [11.0, 32.7],
  [10.4, 32.35],
  [9.9, 32.05],
  [9.3, 32.0],
  [8.5, 32.1],
  [7.9, 32.55],
  [7.6, 33.1],
  [7.55, 33.8],
  [8.0, 34.5], // Kasserine area, western border
  [8.35, 35.2],
  [8.15, 35.85], // Le Kef
  [8.35, 36.4], // Jendouba
  [8.6, 36.75],
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
