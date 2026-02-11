"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function CertificationsSection() {
  const { t, language } = useLanguage()

  const certifications = [
    {
      title: t("certTyT"),
      organization: t("certOrgYouthClubs"),
      year: "2022",
      logo: "/images/logo-tyt-full-color.png",
    },
    {
      title: t("certIFMSARecognized"),
      organization: t("certOrgIFMSA"),
      year: "2023",
      logo: "/images/logo-ifmsa.png",
    },
    {
      title: t("certCNFCPP"),
      organization: t("certOrgCNFCPP"),
      year: "2021",
      logo: "/images/logo-cnfcpp.png",
    },
  ]

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

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                className="p-6 border border-border rounded-2xl hover:border-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start gap-4">
                  {cert.logo && (
                    <div className="relative w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-foreground/5">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.organization}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                  )}
                  {!cert.logo && <Award className="h-5 w-5 mt-1 text-muted-foreground flex-shrink-0" />}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground">{cert.organization}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                  </div>
                </div>
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
