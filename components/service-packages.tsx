"use client"

import { motion } from "framer-motion"
import { PenTool, GraduationCap, Code2, ArrowRight, Calendar } from "lucide-react"
import { Link } from "next-view-transitions"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"
import { FadeUp } from "@/components/ui/motion"

// title/desc/cta were hardcoded English strings here and never went
// through t(), so these three cards stayed in English even in French/
// Arabic mode -- now keyed into translations.ts instead.
// Charte-graphique pass (Oct 2026): dropped the per-service pink/amber/blue
// icon tile for the one green gradient (see .bg-accent-gradient) used
// everywhere else on the site.
const services = [
  {
    icon: PenTool,
    titleKey: "servicePackageDesignTitle",
    descKey: "servicePackageDesignDesc",
    href: "/designer",
    ctaKey: "servicePackageDesignCta",
  },
  {
    icon: GraduationCap,
    titleKey: "servicePackageTrainingTitle",
    descKey: "servicePackageTrainingDesc",
    href: "/trainer",
    ctaKey: "servicePackageTrainingCta",
  },
  {
    icon: Code2,
    titleKey: "servicePackageDevTitle",
    descKey: "servicePackageDevDesc",
    href: "/developer",
    ctaKey: "servicePackageDevCta",
  },
] as const

type Props = {
  /** Checklist item 6.13's "which door" filter -- when set, shows only the
   *  matching card instead of all 3. Undefined/null (the default) is the
   *  original, unfiltered behavior. */
  pillar?: "designer" | "trainer" | "developer" | null
}

export default function ServicePackages({ pillar }: Props = {}) {
  const { t } = useLanguage()
  const visibleServices = pillar ? services.filter((s) => s.href === `/${pillar}`) : services
  return (
    <section id="services" data-seamless className="relative overflow-hidden bg-section-tint dark:bg-[#052e16] pt-14 pb-20 px-5">
      {/* Charte-graphique pass (Oct 2026): swapped the faint background
          photo for the site's dot-grid texture. */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.14] bg-dot-grid"
        style={{
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black, transparent)",
        }}
        aria-hidden
      />
      <div className="relative max-w-4xl mx-auto">
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
          {visibleServices.map((s, i) => (
            <motion.div
              key={s.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-base card-brand flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 p-5 sm:p-6 cursor-default"
            >
              {/* Icon + copy stay their own row on every size; the CTA used
                  to sit in this same row, which is fine at sm:+ width but on
                  a narrow phone squeezed the title/description into a
                  slim, ragged column just to make room for it (see the
                  Sep 2026 mobile-parity pass -- the CTA itself was
                  `hidden sm:flex` before, dropping this "Learn more" link
                  entirely below 640px with no way to reach a service's
                  dedicated page from here on mobile at all). Splitting the
                  icon+copy block from the CTA lets the CTA drop to its own
                  full-width row below on mobile instead of fighting the
                  copy for horizontal space, while sm:+ recombines them into
                  the original single row via sm:contents. */}
              <div className="flex items-center gap-5 sm:contents">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-accent-gradient flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-slate-900 dark:text-white text-[15px] sm:text-base mb-0.5">{t(s.titleKey)}</h3>
                  <p className="text-slate-400 dark:text-slate-500 text-xs sm:text-sm leading-relaxed">{t(s.descKey)}</p>
                </div>
              </div>
              <Link
                href={s.href}
                className="self-start pl-[68px] sm:pl-0 sm:self-auto flex-shrink-0 flex items-center gap-1.5 text-sm font-medium text-accent group/row"
              >
                {t(s.ctaKey)}
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
