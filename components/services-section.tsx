"use client"

import { motion } from "framer-motion"
import { BookOpen, Palette, Code2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Palette,
      iconBg: "bg-pink-50 dark:bg-pink-950",
      iconColor: "text-pink-600",
      title: t("graphicDesign") || "Graphic Design & Branding",
      description:
        t("graphicDesignDesc") ||
        "Logo, brand identity, UI/UX design, visual guidelines, and social content systems.",
      href: "/designer",
      linkText: "View design work →",
    },
    {
      icon: BookOpen,
      iconBg: "bg-amber-50 dark:bg-amber-950",
      iconColor: "text-amber-600",
      title: t("trainingCoaching") || "Training & Workshops",
      description:
        t("trainingCoachingDesc") ||
        "Custom workshops, leadership programmes, youth development, and facilitation for NGOs and institutions.",
      href: "/trainer",
      linkText: "Explore training →",
    },
    {
      icon: Code2,
      iconBg: "bg-blue-50 dark:bg-blue-950",
      iconColor: "text-blue-600",
      title: t("webDevelopment") || "Web Development",
      description:
        "React & Next.js websites with clean code, strong UX, and measurable performance (90+ Lighthouse).",
      href: "/developer",
      linkText: "See my projects →",
    },
  ]

  return (
    <section id="services" className="w-full py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3 text-center">
            <p className="text-xs font-medium tracking-[0.24em] text-green-600 uppercase">Services</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">How I can help you</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              From visual design to training and development, I support people and organizations across the full
              lifecycle of communication and learning.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.a
                  key={service.title}
                  href={service.href}
                  className="group flex flex-col h-full rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950/60 p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${service.iconBg}`}>
                      <Icon className={`w-5 h-5 ${service.iconColor}`} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      {i === 0 ? "Design" : i === 1 ? "Training" : "Development"}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green-700 dark:text-green-400 group-hover:gap-2 transition-all">
                    {service.linkText}
                    <span aria-hidden="true">→</span>
                  </span>
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
