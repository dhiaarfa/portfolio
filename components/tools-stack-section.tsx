"use client"

import BrandIcon from "@/lib/brand-icon"
import { toolsStackGroups } from "@/lib/tools-stack"
import { Tile } from "@/components/ui/tile"

// One accent per group instead of a flat grey list — matches the color
// coding used everywhere else on the site (pink for design work, amber for
// training, blue for dev). Card border/badge only; icons keep their own
// brand colors so this doesn't fight with them.
const GROUP_ACCENT: Record<string, string> = {
  design: "border-t-pink-400 dark:border-t-pink-500",
  ai: "border-t-purple-400 dark:border-t-purple-500",
  frontend: "border-t-sky-400 dark:border-t-sky-500",
  backend: "border-t-emerald-400 dark:border-t-emerald-500",
  productivity: "border-t-amber-400 dark:border-t-amber-500",
}

const GROUP_BADGE: Record<string, string> = {
  design: "bg-pink-50 text-pink-600 dark:bg-pink-950/40 dark:text-pink-400",
  ai: "bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400",
  frontend: "bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400",
  backend: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400",
  productivity: "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400",
}

export default function ToolsStackSection({
  compact = false,
  groups,
}: {
  compact?: boolean
  /** Filter to specific group ids, e.g. ["frontend", "backend", "ai"] */
  groups?: string[]
}) {
  const visibleGroups = groups?.length
    ? toolsStackGroups.filter((g) => groups.includes(g.id))
    : toolsStackGroups

  return (
    <section className={compact ? "py-10 px-6" : "py-16 px-6 bg-slate-50 dark:bg-card"}>
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 text-center">Tools & Stack</p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
          {compact ? "Dev stack I ship with" : "Software I work with daily"}
        </h3>

        {/* One card per category instead of stacked full-width rows — each
            card gets its own colored top edge and badge so the section
            reads as a small showcase grid rather than a plain list. */}
        <div className="grid sm:grid-cols-2 gap-5">
          {visibleGroups.map((group) => (
            <Tile
              key={group.id}
              className={`border-t-4 ${GROUP_ACCENT[group.id] ?? "border-t-accent"}`}
            >
              <span
                className={`inline-block text-[12px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-5 ${GROUP_BADGE[group.id] ?? "bg-accent-subtle text-accent"}`}
              >
                {group.label}
              </span>

              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {group.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center gap-2 rounded-2xl p-2.5 hover:bg-slate-50 dark:hover:bg-card/50 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-card border border-slate-200/70 dark:border-border/60 flex items-center justify-center shadow-sm">
                      <BrandIcon slug={tool.slug} size={24} />
                    </div>
                    <p className="text-xs font-medium text-slate-600 dark:text-slate-300 text-center leading-tight">
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
