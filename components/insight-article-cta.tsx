"use client"

import { Link } from "next-view-transitions"
import Image from "next/image"
import {
  Palette,
  Users,
  Code2,
  Droplet,
  Flame,
  Rocket,
  LayoutGrid,
  ClipboardList,
  Database,
  BookOpen,
  Zap,
  Bot,
  Languages,
  Building2,
  Banknote,
  Package,
  Leaf,
  Gauge,
} from "lucide-react"
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

// Per-article icons so each cover reads as chosen for that specific piece,
// not just a repeat of one of three category defaults across nine+ cards.
const slugIcons: Record<string, React.ReactNode> = {
  "brand-colors-and-trust": <Droplet className="h-7 w-7 text-white/35" />,
  "facilitation-mistakes-youth-workshops": <Flame className="h-7 w-7 text-white/35" />,
  "why-i-rebuilt-my-portfolio-in-nextjs": <Rocket className="h-7 w-7 text-white/35" />,
  "social-media-visual-consistency": <LayoutGrid className="h-7 w-7 text-white/35" />,
  "training-needs-assessment-basics": <ClipboardList className="h-7 w-7 text-white/35" />,
  "supabase-nextjs-for-freelancers": <Database className="h-7 w-7 text-white/35" />,
  "brand-guidelines-that-get-used": <BookOpen className="h-7 w-7 text-white/35" />,
  "icebreakers-vs-energizers": <Zap className="h-7 w-7 text-white/35" />,
  "client-chatbot-with-openrouter": <Bot className="h-7 w-7 text-white/35" />,
  "bilingual-branding-tunisia": <Languages className="h-7 w-7 text-white/35" />,
  "corporate-training-tunisian-smes": <Building2 className="h-7 w-7 text-white/35" />,
  "freelance-developer-tunisia-payments": <Banknote className="h-7 w-7 text-white/35" />,
  "packaging-design-tunisian-exports": <Package className="h-7 w-7 text-white/35" />,
  "green-digital-skills-youth-tunisia": <Leaf className="h-7 w-7 text-white/35" />,
  "web-performance-tunisia-hosting": <Gauge className="h-7 w-7 text-white/35" />,
}

export function InsightCover({
  category,
  title,
  slug,
  image,
  className = "",
}: {
  category: InsightArticleMeta["category"]
  title: string
  slug?: string
  image?: string
  className?: string
}) {
  // These were previously very low-opacity gradients (/30, /20, /40) sitting
  // over a near-white card background, which washed out to a pale tint with
  // white text on top of it, on a real screenshot audit the text was
  // essentially unreadable and the whole cover looked like an empty
  // placeholder block. Full-strength gradients plus a dedicated dark scrim
  // for the text zone fix the contrast regardless of category color.
  const gradients: Record<InsightArticleMeta["category"], string> = {
    Design: "from-pink-500 via-fuchsia-600 to-purple-900",
    Training: "from-emerald-500 via-teal-600 to-slate-900",
    Development: "from-sky-500 via-blue-600 to-indigo-900",
  }
  const icons: Record<InsightArticleMeta["category"], React.ReactNode> = {
    Design: <Palette className="h-7 w-7 text-white/35" />,
    Training: <Users className="h-7 w-7 text-white/35" />,
    Development: <Code2 className="h-7 w-7 text-white/35" />,
  }
  const icon = (slug && slugIcons[slug]) || icons[category]

  // A real photo per article, when given, replaces the flat color-gradient
  // placeholder block entirely -- the gradient stays only as a fallback for
  // any article that somehow has none.
  return (
    <div
      className={`relative overflow-hidden rounded-xl ${image ? "bg-slate-900" : `bg-gradient-to-br ${gradients[category]}`} ${className}`}
    >
      {image ? (
        <Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.16),transparent_50%)]" />
      )}
      <div className={`absolute inset-0 bg-gradient-to-t ${image ? "from-black/75 via-black/20 to-black/5" : "from-black/55 via-black/5 to-transparent"}`} />
      <div className="absolute right-3 top-3">{icon}</div>
      <div className="relative flex h-full min-h-[120px] flex-col justify-end p-4">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/85">
          {category}
        </span>
        <p className="mt-1 line-clamp-3 text-sm font-bold leading-snug text-white">{title}</p>
      </div>
    </div>
  )
}
