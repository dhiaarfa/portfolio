"use client"

import { motion } from "framer-motion"
import { PenTool, GraduationCap, Code2, ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"

const services = [
  {
    icon: PenTool,
    bg: "bg-pink-50 dark:bg-pink-950/40",
    ic: "text-pink-600 dark:text-pink-400",
    title: "Graphic Design & Branding",
    desc: "Logo · Visual identity · Social assets · Brand guidelines",
    href: "/designer",
    cta: "View design work",
  },
  {
    icon: GraduationCap,
    bg: "bg-amber-50 dark:bg-amber-950/40",
    ic: "text-amber-600 dark:text-amber-400",
    title: "Training & Workshops",
    desc: "Custom workshops · Leadership · Youth programs · TOT",
    href: "/trainer",
    cta: "Explore training",
  },
  {
    icon: Code2,
    bg: "bg-blue-50 dark:bg-blue-950/40",
    ic: "text-blue-600 dark:text-blue-400",
    title: "Web Development",
    desc: "Next.js · React · Responsive design · Performance-first",
    href: "/developer",
    cta: "See dev projects",
  },
]

export default function ServicePackages() {
  const { t } = useLanguage()
  return (
    <section id="services" className="bg-section-tint dark:bg-[#052e16] py-20 px-5">
      <div className="max-w-4xl mx-auto">
        <FadeUp>
          <p className="label text-center">{t("myServices")}</p>
          <h2 className="font-serif text-[clamp(26px,3.5vw,40px)] text-center text-slate-900 dark:text-white leading-snug mb-3">
            {t("howICanHelpYou")}
          </h2>
          <p className="text-center text-slate-400 dark:text-slate-500 text-sm mb-12 max-w-md mx-auto">
            {t("servicesTagline")}
          </p>
        </FadeUp>
        <div className="flex flex-col gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-base card-brand flex items-center gap-5 p-5 sm:p-6 cursor-default"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${s.bg} flex items-center justify-center flex-shrink-0`}>
                <s.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${s.ic}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-semibold text-slate-900 dark:text-white text-[15px] sm:text-base mb-0.5">{s.title}</h3>
                <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm leading-relaxed">{s.desc}</p>
              </div>
              <Link
                href={s.href}
                className="flex-shrink-0 hidden sm:flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-400 group/row"
              >
                {s.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/row:translate-x-1 rtl:rotate-180" />
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green"
          >
            <Calendar className="w-4 h-4" /> {t("bookFreeConsultation")}
          </a>
        </div>
      </div>
    </section>
  )
}
