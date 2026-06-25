"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { trainerCredentials } from "@/lib/profile"

export default function CertificationsSection() {
  const { t } = useLanguage()

  const certifications = trainerCredentials.map((cert) => ({
    title: t(cert.titleKey),
    organization: t(cert.orgKey),
    year: cert.year,
    logo: cert.logo,
  }))

  const internationalEventsList = [
    {
      titleKey: "ifmsaEventScorpCamp",
      locationKey: "ifmsaEventMarrakech",
      image: "/images/trainer/scorp-camp-25.png",
      themeKey: "ifmsaEventScorpTheme",
      orgLogo: null,
    },
    {
      titleKey: "ifmsaEventTNHRT",
      locationKey: "ifmsaEventHammamet",
      image: "/images/trainer/tnhrt-carthaginian-camp.png",
      themeKey: "ifmsaEventTNHRTTheme",
      orgLogo: null,
    },
    {
      titleKey: "dohaEventTitle",
      locationKey: "dohaEventLocation",
      image: "/images/trainer/iom-hackathon-doha-2024.png",
      themeKey: "dohaEventSubtitle",
      descKey: "dohaEventDesc",
      orgLogo: "/img/organizations/iom-logo.jpg",
    },
  ]

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
            <h2 className="text-3xl md:text-5xl font-bold">
              {t("credentialsAchievements")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="p-5 border border-border rounded-2xl hover:border-accent/40 transition-colors flex items-center gap-4"
                whileHover={{ y: -2 }}
              >
                {cert.logo ? (
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-border flex items-center justify-center p-2">
                    <Image src={cert.logo} alt={cert.organization} width={56} height={56} className="object-contain w-full h-full" />
                  </div>
                ) : (
                  <Award className="h-8 w-8 text-muted-foreground flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-base leading-snug">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">{cert.organization}</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent-subtle text-accent flex-shrink-0">
                  {cert.year} ✓
                </span>
              </motion.div>
            ))}
          </div>

          {/* International events */}
          <div className="space-y-6 pt-8 border-t border-border">
            <h3 className="text-xl font-bold">{t("internationalEvents")}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {internationalEventsList.map((event, i) => (
                <motion.div
                  key={event.titleKey}
                  className="rounded-2xl overflow-hidden border border-border bg-background"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-video relative bg-black">
                    <Image
                      src={event.image}
                      alt={t(event.titleKey)}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    {event.orgLogo && (
                      <div className="relative w-10 h-10 mb-2 rounded overflow-hidden bg-muted">
                        <Image src={event.orgLogo} alt="" fill className="object-contain p-0.5" />
                      </div>
                    )}
                    <h4 className="font-bold text-lg">{t(event.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground">{t(event.locationKey)}</p>
                    <p className="text-xs text-muted-foreground mt-1">{t(event.themeKey)}</p>
                    {"descKey" in event && event.descKey && (
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{t(event.descKey)}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
