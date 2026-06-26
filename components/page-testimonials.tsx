"use client"

import { pageTestimonials } from "@/lib/page-testimonials"
import { useLanguage } from "@/components/language-provider"

export function PageTestimonials({ className = "" }: { className?: string }) {
  const { t } = useLanguage()

  return (
    <section className={className}>
      <div className="mb-8 text-center">
        <p className="label">{t("testimonials")}</p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
          {t("testimonialsDesc")}
        </h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {pageTestimonials.map((item) => (
          <blockquote
            key={item.name}
            className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card"
          >
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">&ldquo;{item.quote}&rdquo;</p>
            <footer className="mt-4 border-t border-slate-100 dark:border-slate-800 pt-4">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
