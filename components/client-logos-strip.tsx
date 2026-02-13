"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"

const logos = [
  // International / NGOs & youth orgs
  { name: "USAID / Ma3an", src: "/img/organizations/usaid-ma3an.png", width: 160, height: 60 },
  { name: "TIMUN", src: "/img/organizations/timun.png", width: 140, height: 60 },
  { name: "Interact", src: "/img/organizations/interact.png", width: 150, height: 60 },
  { name: "Rotaract Tunis Golfe", src: "/img/organizations/rotaract-tunis-golfe.png", width: 150, height: 60 },
  { name: "AssociaMed Tunisia", src: "/img/organizations/associamed.png", width: 160, height: 60 },
  { name: "AMEL Project", src: "/img/organizations/amel.png", width: 150, height: 60 },
  { name: "Junior Enterprises Tunisia", src: "/img/organizations/junior-enterprises-tunisia.png", width: 160, height: 60 },
  { name: "Partner Origami", src: "/img/organizations/partner-origami.png", width: 140, height: 60 },
  { name: "LPM8 Press Club", src: "/img/organizations/lpm8-press.png", width: 160, height: 60 },
  { name: "Partner Cube", src: "/img/organizations/partner-cube.png", width: 140, height: 60 },

  // Training centers & institutions
  { name: "Gate Training", src: "/img/organizations/gate-training.png", width: 150, height: 60 },
  { name: "Epsylone Formation", src: "/img/organizations/epsylone.png", width: 150, height: 60 },
  { name: "Spectrum Training Center", src: "/img/organizations/spectrum-training.png", width: 150, height: 60 },
  { name: "BePro Training Center", src: "/img/organizations/bepro-training.png", width: 150, height: 60 },
  { name: "Groupe Etoile Formation", src: "/img/organizations/etoile-formation.png", width: 160, height: 60 },
  { name: "Ministry of Youth & Sports Tunisia", src: "/img/organizations/ministry-youth-sport-tunisia.png", width: 150, height: 60 },

  // Existing Tunisian partners & networks
  { name: "CRIT Tunisie", src: "/img/organizations/crit.png", width: 140, height: 60 },
  { name: "Association Youth Clubs", src: "/img/organizations/youth-clubs.png", width: 120, height: 60 },
  { name: "CNFCPP", src: "/img/organizations/cnfcpp.png", width: 120, height: 60 },
  { name: "IFMSA", src: "/img/organizations/ifmsa.png", width: 120, height: 60 },
  { name: "IOM - UN Migration", src: "/img/organizations/iom-logo.jpg", width: 140, height: 60 },
  { name: "AIESEC", src: "/img/organizations/aiesec.png", width: 120, height: 60 },
  { name: "JCI", src: "/img/organizations/jci.png", width: 120, height: 60 },
  { name: "1000 Challenges", src: "/img/organizations/1000-challenges.png", width: 140, height: 60 },
]

function LogoImage({ logo, index }: { logo: (typeof logos)[0]; index: number }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-center justify-center transition-opacity hover:opacity-90 h-14 md:h-16"
    >
      <Image
        src={logo.src}
        alt={logo.name}
        width={logo.width}
        height={logo.height}
        sizes="(max-width: 768px) 120px, 160px"
        className="object-contain max-h-14 md:max-h-16 w-auto h-auto"
        onError={() => setFailed(true)}
        loading="lazy"
        unoptimized
      />
    </motion.div>
  )
}

export default function ClientLogosStrip() {
  const { t } = useLanguage()
  return (
    <section className="py-10 md:py-12 border-y border-border bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground mb-6"
        >
          {t("trustedAndCollaboratedWith")}
        </motion.p>
        <div className="overflow-hidden pb-2">
          <motion.div
            className="flex items-center gap-10 md:gap-16 min-w-max"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <LogoImage key={`${logo.name}-${i}`} logo={logo} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
