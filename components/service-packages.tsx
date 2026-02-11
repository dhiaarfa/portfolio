"use client"

import { motion } from "framer-motion"
import { Palette, BookOpen, Code2, Check } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"

const packages = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Brand identity, visual systems, creative direction",
    features: ["Logo & visual identity", "Marketing materials", "Social media assets", "Brand guidelines"],
    cta: "View design work",
    href: "/designer",
  },
  {
    icon: BookOpen,
    title: "Training & Workshops",
    description: "Youth development, leadership, civic engagement",
    features: ["Custom workshops", "Training of trainers", "Youth programs", "Capacity building"],
    cta: "Explore training",
    href: "/trainer",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Portfolios, digital experiences, modern web apps",
    features: ["Portfolio websites", "Responsive design", "Next.js & React", "Performance optimized"],
    cta: "See dev projects",
    href: "/developer",
  },
]

export default function ServicePackages() {
  const { t } = useLanguage()
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-sm font-medium text-[hsl(var(--zia-green))] mb-2">{t("myServices")}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight px-2">
            {t("howICanHelpYou")}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            {t("servicesTagline")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-[hsl(var(--zia-green))]/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[hsl(var(--zia-green))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--zia-green))]/20 transition-colors">
                  <pkg.icon className="w-6 h-6 text-[hsl(var(--zia-green))]" />
                </div>
                <h3 className="text-xl font-bold">{pkg.title}</h3>
              </div>
              <p className="text-muted-foreground mb-6">{pkg.description}</p>
              <ul className="space-y-2 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-[hsl(var(--zia-green))] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={pkg.href}
                className="inline-flex items-center gap-2 text-[hsl(var(--zia-green))] font-semibold hover:gap-3 transition-all"
              >
                {pkg.cta}
                <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[hsl(var(--zia-green))] text-white font-semibold hover:opacity-90 transition-all"
          >
            {t("bookFreeConsultationCta")}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
