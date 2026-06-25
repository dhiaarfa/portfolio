"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"

const logos = [
  { name: "USAID / Ma3an", src: "/img/organizations/usaid-ma3an.png", width: 160, height: 60 },
  { name: "TIMUN", src: "/img/organizations/timun.png", width: 140, height: 60 },
  { name: "Interact", src: "/img/organizations/interact.png", width: 150, height: 60 },
  { name: "Rotaract Tunis Golfe", src: "/img/organizations/rotaract-tunis-golfe.png", width: 150, height: 60 },
  { name: "AssociaMed Tunisia", src: "/img/organizations/associamed.png", width: 160, height: 60 },
  { name: "AMEL Project", src: "/img/organizations/amel.png", width: 150, height: 60 },
  { name: "Junior Enterprises Tunisia", src: "/img/organizations/junior-enterprises-tunisia.png", width: 160, height: 60 },
  { name: "Gate Training", src: "/img/organizations/gate-training.png", width: 150, height: 60 },
  { name: "CRIT Tunisie", src: "/img/organizations/crit.png", width: 140, height: 60 },
  { name: "Association Youth Clubs", src: "/img/organizations/youth-clubs.png", width: 120, height: 60 },
  { name: "CNFCPP", src: "/img/organizations/cnfcpp.png", width: 120, height: 60 },
  { name: "IFMSA", src: "/img/organizations/ifmsa.png", width: 120, height: 60 },
  { name: "IOM - UN Migration", src: "/img/organizations/iom-logo.jpg", width: 140, height: 60 },
  { name: "AIESEC", src: "/img/organizations/aiesec.png", width: 120, height: 60 },
  { name: "JCI", src: "/img/organizations/jci.png", width: 120, height: 60 },
  { name: "1000 Challenges", src: "/img/organizations/1000-challenges.png", width: 140, height: 60 },
]

function LogoImage({ logo }: { logo: (typeof logos)[0] }) {
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
        className="object-contain max-h-12 md:max-h-14 w-auto h-auto grayscale opacity-75 hover:grayscale-0 hover:opacity-100 dark:opacity-90 dark:brightness-110 transition-all duration-300"
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
              {logos.map((logo) => (
                <LogoImage key={logo.name} logo={logo} />
              ))}
            </div>
          ) : (
            <motion.div
              className="flex items-center gap-10 md:gap-16 min-w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 45, ease: "linear", repeat: Infinity }}
            >
              {[...logos, ...logos].map((logo, i) => (
                <LogoImage key={`${logo.name}-${i}`} logo={logo} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
