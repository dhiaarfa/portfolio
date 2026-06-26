"use client"

import { useMemo } from "react"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { BasedInTunisia } from "@/components/based-in-tunisia"
import { useLanguage } from "@/components/language-provider"
import { formatStat } from "@/lib/profile"
import { siteConfig } from "@/lib/site-config"

/** Swap this path when you have a plain-shirt cutout (no third-party logo on chest). */
export const HERO_PORTRAIT_SRC = "/images/photos/dhia-hero-cutout.png"

export type HeroPortraitTheme = "light" | "dark"

type AnchorPoint = { x: number; y: number }

export type HeroCalloutConfig = {
  id: string
  label: string
  value: React.ReactNode
  subvalue?: React.ReactNode
  anchor: AnchorPoint
  card: AnchorPoint
  cardMaxWidth?: number
  bracket?: boolean
  pulse?: boolean
  delay: number
}

type Props = {
  theme?: HeroPortraitTheme
  /** Shorter section for About page */
  compact?: boolean
  className?: string
  imageSrc?: string
  /** Crop focus — default hides chest logo on current cutout */
  imageObjectPosition?: string
  showCta?: boolean
  children?: React.ReactNode
}

function HudBracket({ accent }: { accent: boolean }) {
  if (!accent) return null
  return (
    <>
      <span className="pointer-events-none absolute -top-px -left-px h-3 w-3 border-l border-t border-accent/50" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-r border-b border-accent/50" />
    </>
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
    : "bg-white/75 backdrop-blur-md border-accent/20 text-slate-900 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"

  const labelClass = "text-[10px] font-semibold uppercase tracking-[0.18em] text-accent"
  const valueClass = isDark ? "text-sm font-semibold text-white" : "text-sm font-semibold text-slate-900"
  const subClass = isDark ? "text-xs text-white/65 mt-0.5" : "text-xs text-slate-500 mt-0.5"

  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.96, x: isMobile ? 0 : (callout.card.x < callout.anchor.x ? -8 : 8), y: isMobile ? 8 : (callout.card.y < callout.anchor.y ? -8 : 8) },
        animate: { opacity: 1, scale: 1, x: 0, y: 0 },
        transition: { duration: 0.5, delay: 0.35 + callout.delay, ease: [0.22, 1, 0.36, 1] as const },
      }

  return (
    <motion.div
      {...motionProps}
      className={`relative rounded-xl border px-3.5 py-3 ${cardClass} ${isMobile ? "min-w-[220px] max-w-[260px] shrink-0 snap-start" : "absolute -translate-x-1/2 -translate-y-1/2 z-20"}`}
      style={
        isMobile
          ? undefined
          : {
              left: `${callout.card.x}%`,
              top: `${callout.card.y}%`,
              maxWidth: callout.cardMaxWidth ?? 220,
            }
      }
    >
      <HudBracket accent={!!callout.bracket} />
      <p className={labelClass}>{callout.label}</p>
      <div className={`${valueClass} mt-1 leading-snug`}>{callout.value}</div>
      {callout.subvalue ? <div className={subClass}>{callout.subvalue}</div> : null}
      {callout.pulse ? (
        <span className="sr-only">Status: </span>
      ) : null}
    </motion.div>
  )
}

function ConnectorLines({
  callouts,
  photoBox,
  reducedMotion,
}: {
  callouts: HeroCalloutConfig[]
  photoBox: { left: number; top: number; width: number; height: number }
  reducedMotion: boolean
}) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 hidden lg:block h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {callouts.map((c, i) => {
        const x1 = photoBox.left + (photoBox.width * c.anchor.x) / 100
        const y1 = photoBox.top + (photoBox.height * c.anchor.y) / 100
        const x2 = c.card.x
        const y2 = c.card.y
        return (
          <g key={c.id}>
            <motion.line
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--site-accent)"
              strokeOpacity={0.35}
              strokeWidth={0.15}
              vectorEffect="non-scaling-stroke"
              initial={reducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.55, delay: 0.25 + c.delay, ease: "easeOut" }}
            />
            <motion.circle
              cx={x1}
              cy={y1}
              r={0.35}
              fill="var(--site-accent)"
              initial={reducedMotion ? false : { scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.2 + c.delay }}
            />
            {!reducedMotion && (
              <motion.circle
                cx={x1}
                cy={y1}
                r={0.55}
                fill="var(--site-accent)"
                fillOpacity={0.25}
                animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.15, 0.35] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2 }}
              />
            )}
          </g>
        )
      })}
    </svg>
  )
}

export default function HeroAnnotatedPortrait({
  theme = "light",
  compact = false,
  className = "",
  imageSrc = HERO_PORTRAIT_SRC,
  imageObjectPosition = "center 10%",
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
        anchor: { x: 68, y: 14 },
        card: { x: 82, y: 16 },
        cardMaxWidth: 240,
        bracket: true,
        delay: 0,
      },
      {
        id: "status",
        label: t("hudLabelStatus"),
        value: (
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden>
              {!reducedMotion && (
                <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              )}
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            {t("availableForProjects")}
          </span>
        ),
        anchor: { x: 28, y: 38 },
        card: { x: 12, y: 34 },
        cardMaxWidth: 210,
        pulse: true,
        delay: 0.1,
      },
      {
        id: "stat",
        label: t("hudLabelImpact"),
        value: formatStat("participantsTrained"),
        subvalue: t("homePeopleTrained"),
        anchor: { x: 72, y: 42 },
        card: { x: 88, y: 42 },
        delay: 0.2,
      },
      {
        id: "location",
        label: t("hudLabelLocation"),
        value: <BasedInTunisia className="text-sm font-semibold" />,
        anchor: { x: 38, y: 72 },
        card: { x: 14, y: 68 },
        cardMaxWidth: 200,
        delay: 0.3,
      },
    ],
    [t, reducedMotion]
  )

  /** Photo occupies ~38% width, centered-right in the HUD stage */
  const photoBox = { left: 52, top: 18, width: 32, height: 64 }

  const sectionBg = isDark
    ? "bg-slate-950 text-white"
    : "bg-white dark:bg-slate-950 text-slate-900 dark:text-white"

  return (
    <section
      className={`relative overflow-hidden ${sectionBg} ${compact ? "min-h-[620px]" : "min-h-[min(100vh,820px)]"} flex flex-col justify-center px-4 sm:px-6 pt-24 pb-10 ${className}`}
    >
      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(var(--site-accent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Radial glow behind photo */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-[10%] -translate-y-1/2 w-[min(90vw,520px)] h-[min(70vh,560px)] rounded-full blur-[100px]"
        style={{ background: "color-mix(in oklab, var(--site-accent) 18%, transparent)" }}
      />

      {/* Scan line */}
      {!reducedMotion && (
        <motion.div
          className="pointer-events-none absolute left-[38%] right-[8%] h-px bg-accent/10 blur-[1px] z-[5] hidden lg:block"
          initial={{ top: "18%" }}
          animate={{ top: ["18%", "78%", "18%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      )}

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {children}

        {/* Desktop HUD stage */}
        <div className={`relative mx-auto hidden lg:block ${compact ? "h-[520px]" : "h-[620px]"}`}>
          <ConnectorLines callouts={callouts} photoBox={photoBox} reducedMotion={reducedMotion} />

          {/* Portrait */}
          <motion.div
            className="absolute z-[15]"
            style={{
              left: `${photoBox.left}%`,
              top: `${photoBox.top}%`,
              width: `${photoBox.width}%`,
              height: `${photoBox.height}%`,
            }}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt="Mohamed Dhia Arfa — designer, trainer, and web developer"
                fill
                priority
                sizes="(min-width: 1024px) 380px, 0px"
                className="object-cover object-top select-none scale-[1.18]"
                style={{ objectPosition: imageObjectPosition }}
              />
            </div>
          </motion.div>

          {callouts.map((c) => (
            <CalloutCard key={c.id} callout={c} theme={theme} reducedMotion={reducedMotion} />
          ))}

          {showCta && (
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 z-20"
              style={{ bottom: compact ? "4%" : "6%" }}
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.65 }}
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

        {/* Mobile / tablet */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          <motion.div
            className="relative w-[min(78vw,320px)] aspect-[3/4] max-h-[420px]"
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={imageSrc}
                alt="Mohamed Dhia Arfa — designer, trainer, and web developer"
                fill
                priority
                sizes="(max-width: 1023px) 320px, 0px"
                className="object-cover object-top"
                style={{ objectPosition: imageObjectPosition }}
              />
            </div>
          </motion.div>

          <div className="flex gap-3 overflow-x-auto pb-2 w-full max-w-lg snap-x snap-mandatory px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {callouts.map((c) => (
              <CalloutCard key={c.id} callout={c} theme={theme} reducedMotion={reducedMotion} isMobile />
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
