"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { organizationLogos } from "@/lib/organization-logos"

function LogoImage({ logo }: { logo: (typeof organizationLogos)[0] }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <div className="flex items-center justify-center h-14 md:h-16 px-2 flex-shrink-0">
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        sizes="(max-width: 768px) 120px, 160px"
        className="object-contain max-h-12 md:max-h-14 w-auto h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  )
}

export default function ClientLogosStrip() {
  const { t } = useLanguage()
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="py-10 md:py-12 border-y border-border bg-muted/30 dark:bg-slate-900/40">
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
      </div>
    </section>
  )
}
