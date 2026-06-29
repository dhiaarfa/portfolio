"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { navNeighbors } from "@/lib/site-nav-flow"
import { useLanguage } from "@/components/language-provider"

export default function PageFlowNav() {
  const pathname = usePathname()
  const { language } = useLanguage()
  const { prev, next } = navNeighbors(pathname ?? "/")

  if (!prev && !next) return null

  const label = (item: NonNullable<typeof prev>) =>
    language === "fr" ? item.labelFr : language === "ar" ? item.labelAr : item.label

  return (
    <>
      {prev && (
        <Link
          href={prev.path}
          className="fixed left-3 md:left-5 top-1/2 z-40 -translate-y-1/2 group flex items-center gap-1 rounded-full border border-border bg-background/90 px-2.5 py-2.5 md:px-3 md:py-3 shadow-lg backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-xl"
          aria-label={`Previous: ${label(prev)}`}
          title={label(prev)}
        >
          <ChevronLeft className="h-5 w-5 text-foreground group-hover:text-accent transition-colors rtl:rotate-180" />
          <span className="hidden lg:inline text-xs font-semibold text-muted-foreground group-hover:text-foreground max-w-[88px] truncate">
            {label(prev)}
          </span>
        </Link>
      )}
      {next && (
        <Link
          href={next.path}
          className="fixed right-3 md:right-5 top-1/2 z-40 -translate-y-1/2 group flex items-center gap-1 rounded-full border border-border bg-background/90 px-2.5 py-2.5 md:px-3 md:py-3 shadow-lg backdrop-blur-sm transition-all hover:border-accent/40 hover:shadow-xl"
          aria-label={`Next: ${label(next)}`}
          title={label(next)}
        >
          <span className="hidden lg:inline text-xs font-semibold text-muted-foreground group-hover:text-foreground max-w-[88px] truncate">
            {label(next)}
          </span>
          <ChevronRight className="h-5 w-5 text-foreground group-hover:text-accent transition-colors rtl:rotate-180" />
        </Link>
      )}
    </>
  )
}
