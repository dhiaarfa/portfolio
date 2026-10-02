"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { siteConfig } from "@/lib/site-config"

// Oct 2026 full-bleed rework: the photo used to sit in a small framed
// panel inside a HUD stage (anchor dots / connector lines / callout
// cards -- all unused by the time of this rework, the identity HUD card
// they pointed at was already removed and `callouts` was an empty array).
// It's now the hero's own full-bleed background layer instead, masked so
// it dissolves into the page on every edge except where the subject is.
// See the .hero-photo-mask / .hero-photo-dots rules in globals.css for the
// actual gradient stops (kept there, not inline, so the -webkit- prefixed
// fallback and the per-breakpoint media queries stay in one place).
export const HERO_PORTRAIT_SRC = "/images/photos/dhia-hero-green.png"

type Props = {
  className?: string
  imageSrc?: string
  showCta?: boolean
  children?: React.ReactNode
}

export default function HeroAnnotatedPortrait({
  className = "",
  imageSrc = HERO_PORTRAIT_SRC,
  showCta = false,
  children,
}: Props) {
  const { t } = useLanguage()

  return (
    <section
      className={`relative isolate overflow-hidden bg-white text-slate-900 dark:bg-[#0A0A0A] dark:text-white px-4 sm:px-6 pt-24 pb-16 lg:pb-20 ${className}`}
    >
      {/* z-10: full-bleed photo, anchored toward the subject on the right.
          object-position shifts per breakpoint: mobile keeps the face
          centered in a tall crop, desktop pins the subject to the right
          where the fading mask (globals.css) leaves it fully opaque. The
          backgroundColor match avoids a flash of blank/white while the
          file loads -- sampled from the photo's own corner, not a generic
          placeholder. */}
      {/* Mobile gets its own fixed height (52vh) instead of spanning the
          full (pt-[44vh]-inflated) section: object-cover on a 1.9:1-wide
          source inside a container as tall as the WHOLE stacked section
          was cropping to a sliver of the image (cover scales to match
          whichever dimension needs it most -- against a very tall, narrow
          box that's almost entirely the image's own height, leaving only
          a ~20% sliver of its width visible), which is what was blowing
          the face up into an unrecognizable, off-center zoom. Capping the
          box to a realistic viewport fraction restores a sane crop ratio.
          sm+ reverts to the original full-bleed inset-0 (photo sits beside
          the text column there, not above a stack, so it should span the
          section's whole height). */}
      <div className="absolute inset-x-0 top-0 h-[52vh] sm:inset-0 sm:h-auto z-10 hero-photo-mask">
        <Image
          src={imageSrc}
          alt="Mohamed Dhia Arfa"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={85}
          className="object-cover object-[86%_20%] sm:object-[88%_26%] lg:object-[right_center]"
          style={{ backgroundColor: "#0A1F0A" }}
        />

        {/* z-11 (nested so its percentages track the photo's OWN box, not
            the full stacked section): the old HUD stage's static
            accent-glow circle, retargeted to sit over the photo's own lime
            glow disc instead of floating on its own -- extends that light
            a little past the photo's masked edge so the dissolve into the
            dot-grid reads as one continuous source, not a second visible
            circle. No mouse-tracking ever existed on this (it was a fixed
            blur circle before too); the breathing opacity animation is the
            only motion, and it's gated behind prefers-reduced-motion in
            globals.css. */}
        <div
          className="hero-glow-pulse pointer-events-none absolute z-[1] rounded-full blur-3xl"
          style={{
            right: "4%",
            top: "6%",
            width: "46%",
            height: "48%",
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--site-accent) 55%, transparent) 0%, transparent 70%)",
          }}
          aria-hidden
        />
      </div>

      {/* z-20: dot-grid, masked to the inverse of the photo fade so dots
          only show where the photo has dissolved away (never on the
          face/body) and fade out as the photo becomes opaque. */}
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-dot-grid opacity-[0.45] hero-photo-dots"
        aria-hidden
      />

      {/* z-20: soft scrim behind the text zone for contrast -- a gradient,
          never a hard box, per Dhia's spec. Direction flips with the mask:
          left-to-right fade on tablet/desktop (text sits left), top-to-
          bottom on mobile (text sits below the photo). */}
      <div
        className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-[#0A0A0A] dark:via-[#0A0A0A]/70 dark:to-transparent sm:bg-gradient-to-r sm:from-white sm:via-white/60 sm:to-transparent sm:dark:from-[#0A0A0A] sm:dark:via-[#0A0A0A]/60 sm:dark:to-transparent"
        aria-hidden
      />

      {/* z-30: hero content. Reserves top space on mobile/tablet so the
          photo genuinely reads as "on top" before the text begins (the
          stacked mobile layout from Dhia's spec), collapses to the normal
          pt-24 on desktop where the photo sits beside the text instead. */}
      <div className="relative z-30 mx-auto w-full max-w-6xl">
        <div className="min-w-0 pt-[44vh] sm:pt-[30vh] lg:pt-0">{children}</div>

        {showCta && (
          <div className="mt-6 lg:mt-8">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold shadow-[0_4px_24px_color-mix(in_oklab,var(--site-accent)_35%,transparent)]"
            >
              <Calendar className="w-4 h-4" />
              {t("bookFreeConsultation")}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
