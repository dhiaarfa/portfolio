"use client"

import { pageTestimonials } from "@/lib/page-testimonials"
import { useLanguage } from "@/components/language-provider"
import { Quote } from "lucide-react"

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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pageTestimonials.map((item) => (
          <blockquote
            key={item.name}
            className="relative rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-card"
          >
            <Quote className="absolute right-4 top-4 h-5 w-5 text-accent/25" aria-hidden />
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 pr-6">&ldquo;{item.quote}&rdquo;</p>
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
