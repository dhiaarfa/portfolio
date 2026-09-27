"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Radio } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import {
  MAP_VIEWBOX,
  TUNISIA_OUTLINE,
  internationalLocations,
  projectLonLat,
  tierRadius,
  tunisiaLocations,
} from "@/lib/impact-map-data"

// Catmull-Rom -> cubic Bezier, closed loop -- turns the hand-picked outline
// vertices into a smooth coastline instead of a jagged polygon. Small,
// self-contained, no extra dependency for one decorative path.
function smoothClosedPath(points: { x: number; y: number }[]): string {
  const n = points.length
  if (n < 3) return ""
  const d: string[] = [`M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`]
  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n]
    const p1 = points[i]
    const p2 = points[(i + 1) % n]
    const p3 = points[(i + 2) % n]
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d.push(`C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`)
  }
  d.push("Z")
  return d.join(" ")
}

/**
 * Real training/facilitation footprint: Tunisia's governorates (dots sized
 * by how many confirmed events happened there), plus Morocco and Qatar as
 * "beyond Tunisia" cards, plus online/remote sessions -- which get no pin at
 * all (there's no single point for a video call) and instead a pulsing
 * "broadcast" treatment centered on the home base, per Dhia's ask for "a
 * smart trick" to represent the online ones.
 */
export default function TrainerImpactMap() {
  const { t } = useLanguage()
  const [activeId, setActiveId] = useState<string | null>(null)

  const outlinePath = useMemo(
    () => smoothClosedPath(TUNISIA_OUTLINE.map(([lon, lat]) => projectLonLat(lon, lat))),
    []
  )

  const dots = useMemo(
    () =>
      tunisiaLocations.map((loc) => {
        const { x, y } = projectLonLat(loc.lon, loc.lat)
        return {
          ...loc,
          x,
          y,
          xPct: (x / MAP_VIEWBOX.width) * 100,
          yPct: (y / MAP_VIEWBOX.height) * 100,
          r: tierRadius(loc.tier),
        }
      }),
    []
  )

  const tunisDot = dots.find((d) => d.id === "tunis")!
  const activeDot = dots.find((d) => d.id === activeId) ?? null

  return (
    <section className="w-full section-compact px-4 md:px-8" aria-labelledby="impact-map-heading">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="space-y-10 md:space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-3 md:space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {t("trainerImpactMapEyebrow")}
            </p>
            <h2 id="impact-map-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2">
              {t("trainerImpactMapTitle")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
              {t("trainerImpactMapDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-[1fr_320px] gap-8 md:gap-12 items-start">
            {/* Tunisia map -- SVG is purely decorative (aria-hidden); real
                interaction happens via the overlaid HTML buttons below it,
                so this stays keyboard- and screen-reader-accessible instead
                of relying on SVG click targets. */}
            <div className="mx-auto w-full max-w-sm md:max-w-md" dir="ltr">
              <div className="relative">
                <svg
                  viewBox={`0 0 ${MAP_VIEWBOX.width} ${MAP_VIEWBOX.height}`}
                  className="w-full h-auto"
                  aria-hidden="true"
                >
                  <path
                    d={outlinePath}
                    className="fill-[var(--site-accent)]/[7%] stroke-[var(--site-accent)]"
                    strokeOpacity={0.4}
                    strokeWidth={1.5}
                  />
                  {/* Broadcast pulse over the home base -- the "smart
                      trick" for online/remote sessions: no pin fits a
                      video call, so instead of faking a location, the
                      signal radiates outward from Tunisia itself. */}
                  <g transform={`translate(${tunisDot.x} ${tunisDot.y - 46})`}>
                    <circle r={3.5} className="fill-[var(--site-accent)]" />
                    <circle r={3.5} className="fill-none stroke-[var(--site-accent)] animate-ping" strokeWidth={1.5} />
                    <circle r={9} className="fill-none stroke-[var(--site-accent)]" strokeOpacity={0.35} strokeWidth={1} />
                    <circle r={15} className="fill-none stroke-[var(--site-accent)]" strokeOpacity={0.2} strokeWidth={1} />
                  </g>
                  {dots.map((d) => (
                    <g key={d.id} transform={`translate(${d.x} ${d.y})`}>
                      <circle
                        r={d.r + 5}
                        className="fill-[var(--site-accent)]"
                        opacity={activeId === d.id ? 0.22 : 0}
                        style={{ transition: "opacity 150ms ease" }}
                      />
                      <circle r={d.r} className="fill-[var(--site-accent)] stroke-background" strokeWidth={2} />
                    </g>
                  ))}
                </svg>

                {dots.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onMouseEnter={() => setActiveId(d.id)}
                    onMouseLeave={() => setActiveId((cur) => (cur === d.id ? null : cur))}
                    onFocus={() => setActiveId(d.id)}
                    onBlur={() => setActiveId((cur) => (cur === d.id ? null : cur))}
                    onClick={() => setActiveId((cur) => (cur === d.id ? null : d.id))}
                    aria-expanded={activeId === d.id}
                    aria-label={`${t(d.nameKey)} — ${t(d.exampleKey)}`}
                    className="absolute rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--site-accent)]"
                    style={{
                      left: `${d.xPct}%`,
                      top: `${d.yPct}%`,
                      width: `${(d.r + 10) * 2}px`,
                      height: `${(d.r + 10) * 2}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}

                {activeDot && (
                  <div
                    role="tooltip"
                    className="pointer-events-none absolute z-10 w-max max-w-[200px] rounded-xl border border-border bg-background px-3 py-2 shadow-lg"
                    style={{
                      left: `${Math.min(78, Math.max(22, activeDot.xPct))}%`,
                      top: `${activeDot.yPct}%`,
                      transform: "translate(-50%, calc(-100% - 14px))",
                    }}
                  >
                    <p className="text-sm font-semibold">{t(activeDot.nameKey)}</p>
                    <p className="text-xs text-muted-foreground leading-snug mt-0.5">{t(activeDot.exampleKey)}</p>
                  </div>
                )}
              </div>
              <p className="text-center text-xs text-muted-foreground mt-3">{t("mapTapHint")}</p>
            </div>

            {/* Beyond Tunisia + online, stacked beside the map on desktop,
                below it on mobile via the grid's implicit row order. */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-border p-5">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
                  {t("mapBeyondTunisia")}
                </p>
                <div className="space-y-4">
                  {internationalLocations.map((loc) => (
                    <div key={loc.id} className="flex gap-3 items-start">
                      <span className="text-2xl leading-none" aria-hidden="true">
                        {loc.flagEmoji}
                      </span>
                      <div>
                        <p className="font-semibold text-sm">{t(loc.nameKey)}</p>
                        <p className="text-muted-foreground text-xs leading-relaxed mt-0.5">{t(loc.exampleKey)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border p-5 bg-gradient-to-br from-[var(--site-accent)]/[6%] to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <Radio className="h-4 w-4 text-[var(--site-accent)]" aria-hidden="true" />
                  <p className="font-semibold text-sm">{t("mapOnlineTitle")}</p>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{t("mapOnlineDesc")}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
