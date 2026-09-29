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
// the NW. Re-digitized again Sep 2026 -- the previous hand-traced version
// (itself a fix for an even earlier wrong silhouette) was still off, so
// this one is generated directly from the accurate governorate-boundary
// reference image Dhia supplied: the shape's exterior contour was
// extracted from that image with OpenCV (threshold -> largest external
// contour -> Douglas-Peucker simplification to ~70 points), then each
// pixel was converted to real lon/lat via an affine fit against Tunisia's
// published bounding coordinates (~7.52-11.50E, ~30.23-37.35N). This is
// the actual traced shape, not a manual approximation of named landmarks.
// Still cropped at 32N (south of Gabes/Medenine) to keep the empty
// far-south desert from dominating the map, same reasoning as before --
// every dot above sits in the northern two-thirds this outline covers;
// the crop point is a clean interpolated cut at exactly lat 32, not a
// hand-picked approximation.
export const TUNISIA_OUTLINE: [number, number][] = [
  [8.797, 36.946], // Tabarka
  [9.162, 37.23],
  [9.717, 37.35], // Cap Blanc -- northernmost point
  [9.817, 37.322],
  [9.833, 37.251],
  [10.008, 37.251], // Bizerte area
  [10.223, 37.152],
  [10.148, 36.982],
  [10.306, 36.84],
  [10.256, 36.776],
  [10.298, 36.684],
  [10.447, 36.705],
  [10.513, 36.833],
  [10.654, 36.854],
  [10.928, 37.067], // El Haouaria -- Cap Bon tip (Ras Addar)
  [11.069, 36.819], // Kelibia
  [10.944, 36.712],
  [10.77, 36.394],
  [10.513, 36.294], // Hammamet -- gulf indent
  [10.447, 36.039],
  [10.588, 35.763], // Sousse
  [10.762, 35.713],
  [10.812, 35.614],
  [11.011, 35.536], // Mahdia -- Sahel bulge
  [11.002, 35.232],
  [11.102, 35.133],
  [10.87, 34.863],
  [10.828, 34.707], // Sfax
  [10.58, 34.53],
  [10.538, 34.431],
  [10.09, 34.212],
  [10.008, 33.999], // Gabes -- gulf indent
  [10.14, 33.772],
  [10.389, 33.588],
  [10.629, 33.638],
  [10.679, 33.829],
  [10.87, 33.822],
  [11.002, 33.73],
  [10.878, 33.581],
  [11.061, 33.482], // Zarzis
  [11.052, 33.326],
  [11.235, 33.227],
  [11.243, 33.149],
  [11.45, 33.106], // Ben Gardane
  [11.392, 32.582],
  [11.5, 32.412], // Ras Ajdir, Libya border
  [10.837, 32.086],
  [10.775, 32], // cut at 32N (east) -- see file header
  [9.033, 32], // cut at 32N (west) -- see file header
  [9.021, 32.044],
  [8.366, 32.476],
  [8.333, 32.759],
  [8.142, 33.014],
  [7.794, 33.135],
  [7.769, 33.347],
  [7.595, 33.581],
  [7.52, 33.857],
  [7.57, 34.013],
  [7.802, 34.162],
  [7.893, 34.353], // Kasserine area, western border
  [8.216, 34.509],
  [8.324, 34.991],
  [8.415, 35.097],
  [8.316, 35.239],
  [8.357, 35.487],
  [8.258, 35.721],
  [8.366, 36.351], // Le Kef
  [8.2, 36.394],
  [8.192, 36.472],
  [8.44, 36.606], // Jendouba
  [8.415, 36.727],
  [8.598, 36.783],
  [8.614, 36.925],
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
