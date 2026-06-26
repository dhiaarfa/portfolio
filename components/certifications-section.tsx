"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { trainerCredentials } from "@/lib/profile"
import TrainerCaseStudiesSection from "@/components/trainer-case-studies-section"

export default function CertificationsSection() {
  const { t } = useLanguage()

  const certifications = trainerCredentials.map((cert) => ({
    title: t(cert.titleKey),
    organization: t(cert.orgKey),
    year: cert.year,
    logo: cert.logo,
  }))

  return (
    <section className="w-full py-12 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              {t("certificationsHeading")}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold">{t("credentialsAchievements")}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="p-6 border border-border rounded-2xl hover:border-accent/40 transition-colors flex flex-col items-center text-center gap-4 bg-background"
                whileHover={{ y: -2 }}
              >
                {cert.logo ? (
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden bg-white ring-2 ring-border shadow-sm flex items-center justify-center p-2.5">
                    <Image src={cert.logo} alt={cert.organization} width={72} height={72} className="object-contain w-full h-full" />
                  </div>
                ) : (
                  <Award className="h-10 w-10 text-muted-foreground flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base leading-snug">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{cert.organization}</p>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-accent-subtle text-accent">
                  {cert.year} ✓
                </span>
              </motion.div>
            ))}
          </div>

          <TrainerCaseStudiesSection />
        </motion.div>
      </div>
    </section>
  )
}
