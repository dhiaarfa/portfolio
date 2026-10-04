"use client"

import { motion } from "framer-motion"
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { organizationLogos } from "@/lib/organization-logos"

function LogoImage({ logo }: { logo: (typeof organizationLogos)[0] }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    // A light backdrop chip behind every mark in dark mode: several of these
    // logos are dark-colored artwork (near-black wordmarks, dark navy
    // shields) that simply disappear against the site's dark background
    // otherwise. Transparent in light mode where that's never an issue.
    <div className="flex items-center justify-center h-16 md:h-20 px-2 flex-shrink-0">
      {/* Logos with their own full-bleed background (IFMSA's blue square)
          fill the chip edge to edge instead of floating in white padding. */}
      <div className={`flex items-center justify-center rounded-xl transition-colors ${logo.bleed ? "overflow-hidden" : "dark:bg-white/95 px-3 py-2"}`}>
        <Image
          src={logo.src}
          alt={logo.name}
          width={logo.width}
          height={logo.height}
          className={`object-contain w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 ${logo.bleed ? "h-16 md:h-20" : "max-h-14 md:max-h-16 h-auto"}`}
          onError={() => setFailed(true)}
          loading="eager"
          // No `sizes` (Oct 2026): the logos render at their width prop, so
          // the default 1x/2x srcset is enough. The responsive one listed 14
          // widths per logo, about 55 KB of HTML for the 42 tags.
        />
      </div>
    </div>
  )
}

export default function ClientLogosStrip() {
  const { t } = useLanguage()
  const prefersReducedMotion = useReducedMotionSafe()

  return (
    <section className="py-10 md:py-12 border-y border-border bg-muted/30 dark:bg-card/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">{t("trustedAndCollaboratedWith")}</p>
        <div
          className="overflow-hidden pb-2"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          {prefersReducedMotion ? (
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {organizationLogos.map((logo) => (
                <LogoImage key={logo.name} logo={logo} />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex items-center gap-10 md:gap-16 min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 55, ease: "linear", repeat: Infinity }}
            >
              {[...organizationLogos, ...organizationLogos].map((logo, i) => (
                <LogoImage key={`${logo.name}-${i}`} logo={logo} />
              ))}
            </motion.div>
          )}
        </div>
        {/* Sep 30 SEO addition: the logos above only carry these org names as
          * <img alt>, a weak signal search engines barely weigh. This renders
          * the same real names (lib/organization-logos.ts) as actual visible,
          * crawlable text, so the page has genuine on-page relevance for
          * someone searching any of these organizations by name, not just
          * "Mohamed Dhia Arfa". Nothing here is invented -- same list, same
          * names, already used for the logos rendered above. */}
        <p className="mt-6 text-center text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
          {/* Isolated LTR run (RTL bidi fix, Oct 2026): this paragraph's
              base direction flips to RTL on the Arabic locale, and the
              organization names are a long list of Latin-script proper
              nouns. Without isolating that list, the bidi algorithm let
              its direction bleed into the rest of the line across wraps --
              the Arabic prefix was landing mid-list instead of leading it,
              and the line never "returned" to RTL after the first English
              run (Dhia: "they go to the left and never come back").
              dir="ltr" + unicode-bidi:isolate keeps this run self-contained
              regardless of the paragraph's own direction. */}
          <span>{t("collaboratedWithListPrefix")}</span>{" "}
          <span dir="ltr" className="[unicode-bidi:isolate] inline">
            {organizationLogos.map((logo) => logo.name).join(" · ")}
          </span>
        </p>
      </div>
    </section>
  )
}
