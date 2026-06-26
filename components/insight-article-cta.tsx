"use client"

import Link from "next/link"
import type { InsightArticleMeta } from "@/lib/insights"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"

const ctaKeys: Record<
  InsightArticleMeta["category"],
  { text: string; href: string }
> = {
  Design: { text: "insightsCtaDesign", href: "/designer" },
  Training: { text: "insightsCtaTraining", href: "/trainer" },
  Development: { text: "insightsCtaDev", href: "/developer" },
}

export function InsightArticleCta({ article }: { article: InsightArticleMeta }) {
  const { t } = useLanguage()
  const cta = ctaKeys[article.category]

  return (
    <div className="mt-12 rounded-2xl border border-border bg-muted/40 p-6 sm:p-8">
      <p className="text-lg font-semibold text-foreground">{t(cta.text)}</p>
      <p className="mt-2 text-sm text-muted-foreground">{t("insightsCtaSub")}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={cta.href}
          className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {t("insightsCtaBtn")}
        </Link>
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-muted"
        >
          {t("bookFreeConsultation")}
        </a>
      </div>
    </div>
  )
}

export function InsightCover({
  category,
  title,
  className = "",
}: {
  category: InsightArticleMeta["category"]
  title: string
  className?: string
}) {
  const gradients: Record<InsightArticleMeta["category"], string> = {
    Design: "from-pink-500/30 via-fuchsia-600/20 to-purple-900/40",
    Training: "from-emerald-500/30 via-teal-600/20 to-slate-900/40",
    Development: "from-sky-500/30 via-blue-600/20 to-indigo-900/40",
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${gradients[category]} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_50%)]" />
      <div className="relative flex h-full min-h-[120px] flex-col justify-end p-4">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
          {category}
        </span>
        <p className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-white">{title}</p>
      </div>
    </div>
  )
}
