"use client"

import BrandIcon from "@/lib/brand-icon"
import { toolsStackGroups, TOOL_GROUP_LABEL_KEYS } from "@/lib/tools-stack"
import { Tile } from "@/components/ui/tile"
import { useLanguage } from "@/components/language-provider"

// Charte-graphique pass (Oct 2026): this used to cycle a different hue per
// group (pink/purple/sky/emerald/amber) to echo the old per-discipline
// color coding -- retired site-wide in favor of one green accent language.
// Card border/badge only; icons keep their own brand colors so this
// doesn't fight with them.
const GROUP_ACCENT: Record<string, string> = {
  design: "border-t-accent",
  ai: "border-t-accent",
  frontend: "border-t-accent",
  backend: "border-t-accent",
  productivity: "border-t-accent",
}

const GROUP_BADGE: Record<string, string> = {
  design: "bg-accent-subtle text-accent",
  ai: "bg-accent-subtle text-accent",
  frontend: "bg-accent-subtle text-accent",
  backend: "bg-accent-subtle text-accent",
  productivity: "bg-accent-subtle text-accent",
}

export default function ToolsStackSection({
  compact = false,
  groups,
}: {
  compact?: boolean
  /** Filter to specific group ids, e.g. ["frontend", "backend", "ai"] */
  groups?: string[]
}) {
  const { t } = useLanguage()
  const visibleGroups = groups?.length
    ? toolsStackGroups.filter((g) => groups.includes(g.id))
    : toolsStackGroups

  return (
    <section className={compact ? "py-10 px-6" : "py-16 px-6 bg-card"}>
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 text-center">{t("toolsStackKicker")}</p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
          {compact ? t("toolsStackHeadingCompact") : t("toolsStackHeading")}
        </h3>

        {/* One horizontal row per category, stacked under each other, instead
            of a 2-column grid of tall cards each padded around a small icon
            grid -- that layout burned a lot of vertical space per tool.
            A row keeps every icon at reading height and lets the row simply
            wrap onto more lines on narrow screens. */}
        <div className="flex flex-col gap-4">
          {visibleGroups.map((group) => (
            <Tile
              key={group.id}
              className={`!py-4 !px-5 border-t-4 ${GROUP_ACCENT[group.id] ?? "border-t-accent"} flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5`}
            >
              <span
                className={`shrink-0 inline-block w-fit text-[12px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${GROUP_BADGE[group.id] ?? "bg-accent-subtle text-accent"}`}
              >
                {t(TOOL_GROUP_LABEL_KEYS[group.id] ?? group.label) || group.label}
              </span>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:pl-4 sm:border-l sm:border-slate-200/70 dark:sm:border-border/60">
                {group.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2">
                    <div className="w-8 h-8 shrink-0 rounded-lg bg-slate-50 dark:bg-card border border-slate-200/70 dark:border-border/60 flex items-center justify-center shadow-sm">
                      <BrandIcon slug={tool.slug} size={18} />
                    </div>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap">
                      {tool.name}
                    </p>
                  </div>
                ))}
              </div>
            </Tile>
          ))}
        </div>
      </div>
    </section>
  )
}
