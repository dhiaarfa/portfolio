import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

/**
 * Shared rounded-card primitive — the "border + shadow-card + rounded-[28px]"
 * treatment that kept getting hand-rolled per-section (ToolsStackSection,
 * service cards, case-study cards, ...). Not a full site-wide migration in
 * one pass (each existing usage has its own photo/tag/stat composition that
 * would need individual review to avoid a visual regression with no way to
 * preview it here) — adopted first in ToolsStackSection as the reference
 * usage (Master to-do list, Tier 4 — Card/Tile primitive).
 */
export function Tile({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-slate-200/80 dark:border-border/70 bg-white dark:bg-muted/60 shadow-card px-5 py-6",
        className
      )}
    >
      {children}
    </div>
  )
}
