"use client"

import { useMemo } from "react"
import { Calendar } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { BasedInTunisia } from "@/components/based-in-tunisia"
import { useLanguage } from "@/components/language-provider"
import { formatStat } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

/** Transparent PNG cutout — swap path only; do not re-export the file. */
export const HERO_PORTRAIT_SRC = "/images/photos/dhia-hero-cutout.png"

export type HeroPortraitTheme = "light" | "dark"

type Point = { x: number; y: number }

export type HeroCalloutConfig = {
  id: string
  label: string
  value: React.ReactNode
  subvalue?: React.ReactNode
  /** Anchor on photo edge, % of stage box (0–100) */
  anchor: Point
  /** Card center, % of stage box (0–100) */
  card: Point
  cardMaxWidth?: number
  bracket?: boolean
  delay: number
}

type Props = {
  theme?: HeroPortraitTheme
  compact?: boolean
  className?: string
  imageSrc?: string
  showCta?: boolean
  children?: React.ReactNode
}

/** Photo bounds inside the HUD stage (% of stage width/height) */
const PHOTO_BOUNDS = { x: 34, y: 4, w: 44, h: 92 }

function HudBracket({ show }: { show: boolean }) {
  if (!show) return null
  return (
    <>
      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-l border-t border-accent/50" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-r border-b border-accent/50" />
    </>
  )
}

function AnchorDot({
  x,
  y,
  reducedMotion,
  delay,
}: {
  x: number
  y: number
  reducedMotion: boolean
  delay: number
}) {
  return (
    <motion.div
      className="absolute z-20 pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
      initial={reducedMotion ? false : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.35, delay: 0.2 + delay }}
    >
      <span
        className="block h-2 w-2 rounded-full bg-accent"
        style={{ boxShadow: "0 0 10px color-mix(in oklab, var(--site-accent) 70%, transparent)" }}
      />
      {!reducedMotion && (
        <span
          className="absolute inset-0 rounded-full bg-accent animate-ping opacity-40"
          style={{ animationDuration: "2.5s" }}
        />
      )}
    </motion.div>
  )
}

function CalloutCard({
  callout,
  theme,
  reducedMotion,
  isMobile,
}: {
  callout: HeroCalloutConfig
  theme: HeroPortraitTheme
  reducedMotion: boolean
  isMobile?: boolean
}) {
  const isDark = theme === "dark"
  const cardClass = isDark
    ? "bg-black/40 backdrop-blur-md border-accent/20 text-white"
    : "bg-white/80 backdrop-blur-md border-accent/25 text-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"

  const motionProps = reducedMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          scale: 0.96,
          x: isMobile ? 0 : callout.card.x < callout.anchor.x ? -10 : 10,
          y: isMobile ? 8 : callout.card.y < callout.anchor.y ? -10 : 10,
        },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
        transition: { duration: 0.55, delay: 0.35 + callout.delay, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <motion.div
      {...motionProps}
      className={`relative rounded-xl border px-3.5 py-3 ${cardClass} ${
        isMobile ? "min-w-[220px] max-w-[260px] shrink-0 snap-start" : "absolute z-30"
      }`}
      style={
        isMobile
          ? undefined
          : {
              left: `${callout.card.x}%`,
              top: `${callout.card.y}%`,
              transform: "translate(-50%, -50%)",
              maxWidth: callout.cardMaxWidth ?? 210,
            }
      }
    >
      <HudBracket show={!!callout.bracket} />
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">{callout.label}</p>
      <div className={`mt-1 text-sm font-semibold leading-snug ${isDark ? "text-white" : "text-slate-900"}`}>
        {callout.value}
      </div>
      {callout.subvalue ? (
        <div className={`mt-0.5 text-xs ${isDark ? "text-white/65" : "text-slate-500"}`}>{callout.subvalue}</div>
      ) : null}
    </motion.div>
  )
}

function ConnectorLines({
  callouts,
  reducedMotion,
}: {
  callouts: HeroCalloutConfig[]
  reducedMotion: boolean
}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {callouts.map((c) => {
        const x1 = c.anchor.x
        const y1 = c.anchor.y
        const x2 = c.card.x
        const y2 = c.card.y
        const len = Math.hypot(x2 - x1, y2 - y1)
        return (
          <g key={c.id}>
            <motion.line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--site-accent)"
              strokeOpacity={0.38}
              strokeWidth={0.22}
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeDasharray={`${len} ${len}`}
              initial={reducedMotion ? false : { strokeDashoffset: len, opacity: 0 }}
              animate={{ strokeDashoffset: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 + c.delay, ease: "easeOut" }}
            />
          </g>
        )
      })}
    </svg>
  )
}

function PortraitImage({ src, priority = true }: { src: string; priority?: boolean }) {
  return (
    // Native img preserves PNG alpha — no optimizer, no fill container bleed
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="Mohamed Dhia Arfa — designer, trainer, and web developer"
      className="h-full w-full object-contain object-center select-none bg-transparent"
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  )
}

function HudStage({
  callouts,
  theme,
  compact,
  imageSrc,
  showCta,
  reducedMotion,
  t,
}: {
  callouts: HeroCalloutConfig[]
  theme: HeroPortraitTheme
  compact: boolean
  imageSrc: string
  showCta: boolean
  reducedMotion: boolean
  t: (key: string) => string
}) {
  const stageHeight = compact ? "min-h-[440px] h-[440px]" : "min-h-[500px] h-[500px]"

  return (
    <div className={`relative mx-auto w-full max-w-[600px] px-3 sm:px-5 ${stageHeight}`}>
      {/* Accent glow — sibling behind photo, never on image */}
      <div
        className="pointer-events-none absolute z-0 rounded-full blur-3xl"
        style={{
          left: `${PHOTO_BOUNDS.x + PHOTO_BOUNDS.w / 2}%`,
          top: `${PHOTO_BOUNDS.y + PHOTO_BOUNDS.h / 2}%`,
          width: "42%",
          height: "55%",
          transform: "translate(-50%, -50%)",
          background: "color-mix(in oklab, var(--site-accent) 16%, transparent)",
        }}
      />

      {/* Scan line — subtle, within stage only */}
      {!reducedMotion && (
        <motion.div
          className="pointer-events-none absolute left-[8%] right-[8%] z-[5] h-px bg-accent/10 blur-[1px] hidden lg:block"
          animate={{ top: ["8%", "88%", "8%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      )}

      <ConnectorLines callouts={callouts} reducedMotion={reducedMotion} />

      {callouts.map((c) => (
        <AnchorDot key={`dot-${c.id}`} x={c.anchor.x} y={c.anchor.y} reducedMotion={reducedMotion} delay={c.delay} />
      ))}

      {/* Photo — transparent background, object-contain, no masks */}
      <motion.div
        className="absolute z-10 bg-transparent"
        style={{
          left: `${PHOTO_BOUNDS.x}%`,
          top: `${PHOTO_BOUNDS.y}%`,
          width: `${PHOTO_BOUNDS.w}%`,
          height: `${PHOTO_BOUNDS.h}%`,
        }}
        initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <div className="relative h-full w-full bg-transparent">
          <PortraitImage src={imageSrc} />
        </div>
      </motion.div>

      {callouts.map((c) => (
        <CalloutCard key={c.id} callout={c} theme={theme} reducedMotion={reducedMotion} />
      ))}

      {showCta && (
        <motion.div
          className="absolute left-1/2 z-30 -translate-x-1/2"
          style={{ bottom: "0" }}
          initial={reducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.7 }}
        >
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold shadow-[0_4px_24px_color-mix(in_oklab,var(--site-accent)_35%,transparent)]"
          >
            <Calendar className="w-4 h-4" />
            {t("bookFreeConsultation")}
          </a>
        </motion.div>
      )}
    </div>
  )
}

export default function HeroAnnotatedPortrait({
  theme = "light",
  compact = false,
  className = "",
  imageSrc = HERO_PORTRAIT_SRC,
  showCta = true,
  children,
}: Props) {
  const { t } = useLanguage()
  const reducedMotion = useReducedMotion() ?? false
  const isDark = theme === "dark"

  const callouts: HeroCalloutConfig[] = useMemo(
    () => [
      {
        id: "identity",
        label: t("hudLabelSubject"),
        value: "Mohamed Dhia Arfa",
        subvalue: `${t("graphicDesigner")} · ${t("aboutCertifiedTrainer")} · ${t("aboutWebDeveloper")}`,
        anchor: { x: 62, y: 12 },
        card: { x: 88, y: 10 },
        cardMaxWidth: 220,
        bracket: true,
        delay: 0,
      },
      {
        id: "status",
        label: t("hudLabelStatus"),
        value: (
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden>
              {!reducedMotion && <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />}
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            {t("availableForProjects")}
          </span>
        ),
        anchor: { x: 38, y: 36 },
        card: { x: 10, y: 32 },
        cardMaxWidth: 200,
        delay: 0.1,
      },
      {
        id: "stat",
        label: t("hudLabelImpact"),
        value: formatStat("participantsTrained"),
        subvalue: t("homePeopleTrained"),
        anchor: { x: 72, y: 40 },
        card: { x: 92, y: 48 },
        cardMaxWidth: 175,
        delay: 0.2,
      },
      {
        id: "location",
        label: t("hudLabelLocation"),
        value: <BasedInTunisia className="text-sm font-semibold" />,
        anchor: { x: 44, y: 78 },
        card: { x: 12, y: 72 },
        cardMaxWidth: 190,
        delay: 0.3,
      },
    ],
    [t, reducedMotion]
  )

  const sectionBg = isDark
    ? "bg-slate-950 text-white"
    : "bg-white dark:bg-slate-950 text-slate-900 dark:text-white"

  return (
    <section className={`relative isolate ${sectionBg} px-4 sm:px-6 pt-24 pb-12 ${className}`}>
      {/* Section-level dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(var(--site-accent) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div
          className={
            children
              ? "grid grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:gap-10"
              : ""
          }
        >
          {children ? <div className="min-w-0">{children}</div> : null}

          {/* Desktop HUD — contained stage, never overlaps siblings */}
          <div className={`hidden lg:block w-full ${children ? "" : "max-w-[560px] mx-auto"}`}>
            <HudStage
              callouts={callouts}
              theme={theme}
              compact={compact}
              imageSrc={imageSrc}
              showCta={showCta}
              reducedMotion={reducedMotion}
              t={t}
            />
          </div>
        </div>

        {/* Mobile / tablet — stacked below intro text, no connector lines */}
        <div className="lg:hidden mt-8 flex flex-col items-center gap-6">
          <div className="relative w-[min(72vw,280px)] aspect-[3/4] max-h-[360px] bg-transparent">
            <PortraitImage src={imageSrc} />
          </div>
          <div className="flex w-full max-w-lg gap-3 overflow-x-auto pb-2 snap-x snap-mandatory px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {callouts.map((c) => (
              <CalloutCard key={`m-${c.id}`} callout={c} theme={theme} reducedMotion={reducedMotion} isMobile />
            ))}
          </div>
          {showCta && (
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold"
            >
              <Calendar className="w-4 h-4" />
              {t("bookFreeConsultation")}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
