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
  // Added Sep 30 per Dhia's explicit instruction, despite no clear
  // single-row evidence for an in-person event in these 5 governorates in
  // either source sheet (flagged plainly before adding, per his call to
  // include them anyway). Coordinates are each governorate's real capital
  // city -- tier "sm" (smallest) and a generic, non-specific example label
  // (no invented organization names or dates), so nothing here overstates
  // a specific unverified claim beyond "worked in this region."
  { id: "siliana", lat: 36.0838, lon: 9.3766, tier: "sm", nameKey: "mapLocSiliana", exampleKey: "mapExSiliana" },
  { id: "tozeur", lat: 33.9197, lon: 8.1335, tier: "sm", nameKey: "mapLocTozeur", exampleKey: "mapExTozeur" },
  { id: "jendouba", lat: 36.5011, lon: 8.7757, tier: "sm", nameKey: "mapLocJendouba", exampleKey: "mapExJendouba" },
  { id: "gabes", lat: 33.8815, lon: 10.0982, tier: "sm", nameKey: "mapLocGabes", exampleKey: "mapExGabes" },
  { id: "djerba", lat: 33.8076, lon: 10.8451, tier: "sm", nameKey: "mapLocDjerba", exampleKey: "mapExDjerba" },
]

export type InternationalLocation = {
  id: string
  /** Real flag artwork, not an emoji -- regional-indicator flag emoji
   *  (🇲🇦/🇶🇦) render as plain two-letter codes ("MA"/"QA") on Windows,
   *  which has no flag glyphs in its default emoji font (Dhia flagged this
   *  live, Oct 2026). Same fix already applied to Tunisia's flag
   *  (see components/based-in-tunisia.tsx): a real image asset instead. */
  flagSrc: string
  flagWidth: number
  flagHeight: number
  nameKey: string
  exampleKey: string
}

export const internationalLocations: InternationalLocation[] = [
  { id: "morocco", flagSrc: "/images/flags/morocco.png", flagWidth: 27, flagHeight: 18, nameKey: "mapLocMorocco", exampleKey: "mapExMorocco" },
  { id: "qatar", flagSrc: "/images/flags/qatar.png", flagWidth: 27, flagHeight: 11, nameKey: "mapLocQatar", exampleKey: "mapExQatar" },
]

// Tunisia mainland coastline/border, as [lon, lat] pairs. Rebuilt Sep 30
// from real Natural Earth boundary data (world-atlas's countries-10m.json,
// via topojson-client), not hand-traced -- extracted the real Tunisia
// MultiPolygon and simplified with Douglas-Peucker to ~170 points.
//
// This replaces an earlier version of this file that deliberately clipped
// the mainland ring to lat >= 32N, cutting off the real southern third of
// the country (Tataouine, Kebili, Medenine's desert interior, all the way
// down to the actual Algeria/Libya tripoint at ~30.23N) on the reasoning
// that it was "empty desert." Dhia asked for the complete map, so this
// version runs all the way to the true southernmost point instead --
// nothing about Tunisia's real shape is cropped out anymore. LAT_RANGE/
// MAP_VIEWBOX below were resized to match.
export const TUNISIA_OUTLINE: [number, number][] = [
  [11.504, 33.181], [11.457, 32.902], [11.45, 32.637], [11.562, 32.507],
  [11.547, 32.435], [11.443, 32.369], [10.874, 32.136], [10.773, 32.004],
  [10.705, 31.962], [10.629, 31.974], [10.608, 31.954], [10.586, 31.84],
  [10.5, 31.744], [10.428, 31.715], [10.316, 31.715], [10.266, 31.68],
  [10.132, 31.518], [10.107, 31.428], [10.244, 31.079], [10.269, 30.915],
  [10.255, 30.842], [10.194, 30.731], [9.873, 30.354], [9.743, 30.331],
  [9.52, 30.229], [9.045, 32.072], [8.332, 32.526], [8.296, 32.805],
  [8.087, 33.095], [8.001, 33.108], [7.871, 33.184], [7.724, 33.232],
  [7.709, 33.414], [7.555, 33.659], [7.479, 33.894], [7.519, 34.095],
  [7.63, 34.199], [7.767, 34.245], [7.832, 34.414], [8.095, 34.53],
  [8.235, 34.648], [8.21, 34.681], [8.271, 34.763], [8.249, 34.902],
  [8.3, 35.067], [8.433, 35.241], [8.318, 35.29], [8.293, 35.326],
  [8.289, 35.403], [8.336, 35.508], [8.329, 35.621], [8.257, 35.751],
  [8.242, 35.827], [8.357, 36.43], [8.296, 36.469], [8.167, 36.491],
  [8.17, 36.526], [8.429, 36.663], [8.462, 36.732], [8.411, 36.785],
  [8.642, 36.837], [8.602, 36.94], [8.825, 36.979], [8.905, 37.021],
  [9.038, 37.153], [9.16, 37.193], [9.211, 37.234], [9.344, 37.235],
  [9.419, 37.276], [9.455, 37.267], [9.553, 37.31], [9.743, 37.345],
  [9.859, 37.328], [9.862, 37.271], [9.772, 37.213], [9.808, 37.154],
  [9.88, 37.149], [9.927, 37.197], [9.862, 37.234], [9.819, 37.227],
  [9.884, 37.264], [9.981, 37.246], [10.06, 37.264], [10.273, 37.178],
  [10.129, 37.159], [10.219, 37.129], [10.226, 37.095], [10.219, 37.11],
  [10.176, 37.077], [10.183, 37.028], [10.348, 36.881], [10.298, 36.822],
  [10.255, 36.847], [10.19, 36.798], [10.248, 36.786], [10.273, 36.817],
  [10.356, 36.73], [10.518, 36.756], [10.586, 36.876], [10.734, 36.896],
  [10.888, 37.006], [10.903, 37.05], [11.05, 37.08], [11.047, 37.021],
  [11.13, 36.854], [11.022, 36.788], [10.798, 36.452], [10.55, 36.378],
  [10.478, 36.217], [10.474, 36.112], [10.518, 35.981], [10.582, 35.922],
  [10.622, 35.842], [10.744, 35.77], [10.824, 35.78], [10.842, 35.699],
  [11.04, 35.638], [11.054, 35.614], [11.018, 35.603], [11.014, 35.555],
  [11.04, 35.518], [11.086, 35.506], [11.05, 35.459], [11.043, 35.334],
  [11.101, 35.266], [11.162, 35.238], [11.158, 35.219], [11.112, 35.206],
  [11.014, 35.093], [11.018, 35.033], [10.917, 34.957], [10.917, 34.873],
  [10.86, 34.838], [10.87, 34.797], [10.813, 34.768], [10.701, 34.655],
  [10.626, 34.633], [10.582, 34.532], [10.431, 34.497], [10.377, 34.424],
  [10.287, 34.414], [10.248, 34.372], [10.125, 34.326], [10.006, 34.171],
  [10.071, 33.946], [10.172, 33.828], [10.33, 33.703], [10.489, 33.647],
  [10.716, 33.706], [10.741, 33.671], [10.737, 33.603], [10.672, 33.546],
  [10.737, 33.478], [10.91, 33.539], [10.932, 33.575], [10.906, 33.617],
  [10.935, 33.637], [10.986, 33.644], [11.043, 33.618], [11.112, 33.541],
  [11.115, 33.49], [11.09, 33.455], [11.101, 33.363], [11.13, 33.372],
  [11.169, 33.331], [11.295, 33.287], [11.133, 33.311], [11.122, 33.281],
  [11.169, 33.222], [11.418, 33.184], [11.428, 33.206], [11.353, 33.259],
  [11.504, 33.181],
]

// Djerba island, as [lon, lat] pairs, rendered as its own separate closed
// path in the map component (it's a real island, not attached to the
// mainland) -- same Natural Earth extraction and simplification as the
// mainland outline above.
export const DJERBA_OUTLINE: [number, number][] = [
  [10.993, 33.841], [11.061, 33.801], [10.971, 33.738], [10.957, 33.698],
  [10.957, 33.733], [10.942, 33.728], [10.888, 33.64], [10.87, 33.654],
  [10.878, 33.688], [10.86, 33.711], [10.809, 33.735], [10.78, 33.703],
  [10.762, 33.699], [10.734, 33.73], [10.73, 33.784], [10.748, 33.813],
  [10.737, 33.885], [10.773, 33.897], [10.899, 33.88], [10.932, 33.897],
  [10.993, 33.841],
]

// Resized Sep 30 alongside the outline fix above: LAT_RANGE.min moved from
// 32.0 down to 30.1 (a small margin below the real southernmost point,
// 30.229N) so the south is no longer cropped out of the projection itself
// -- extending the outline data alone wouldn't have been enough, since
// anything south of the old 32.0 floor would still have projected to a
// negative y and rendered off-canvas. MAP_VIEWBOX.height grew from 580 to
// 764 to match (same px-per-degree density as before, just taller), and
// MEAN_LAT_COS now uses the new range's midpoint (33.8N instead of 35N).
export const MAP_VIEWBOX = { width: 360, height: 764 }
const LON_RANGE = { min: 7.4, max: 11.6 }
const LAT_RANGE = { min: 30.1, max: 37.5 }
const MEAN_LAT_COS = Math.cos((33.8 * Math.PI) / 180)

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
