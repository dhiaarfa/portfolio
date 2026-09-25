"use client"

import BrandIcon from "@/lib/brand-icon"
import { useLanguage } from "@/components/language-provider"

// A condensed, one-row cross-discipline sample of the full tools/stack
// (see ToolsStackSection on /designer and /developer for the complete,
// grouped breakdown) — surfaced on Home so visitors get a sense of the
// toolkit without having to find the buried full table on a sub-page
// (Master to-do list, Tier 6 — "move toolkit summary onto Home").
const HIGHLIGHT_TOOLS = [
  { name: "Figma", slug: "figma" },
  { name: "Illustrator", slug: "adobeillustrator" },
  { name: "Photoshop", slug: "adobephotoshop" },
  { name: "ChatGPT", slug: "openai" },
  { name: "Claude", slug: "claude" },
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Supabase", slug: "supabase" },
  { name: "Vercel", slug: "vercel" },
]

export default function ToolkitStrip() {
  const { t } = useLanguage()

  return (
    <section className="py-10 md:py-12 px-4 border-y border-border bg-muted/20 dark:bg-card/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          {t("toolkitStripLabel")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-5">
          {HIGHLIGHT_TOOLS.map((tool) => (
            <div key={tool.slug} className="flex flex-col items-center gap-1.5 w-16">
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-card border border-slate-200/70 dark:border-border/60 flex items-center justify-center shadow-sm">
                <BrandIcon slug={tool.slug} size={20} />
              </div>
              <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 text-center leading-tight">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
