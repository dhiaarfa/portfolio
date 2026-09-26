"use client"

import BrandIcon from "@/lib/brand-icon"
import { useLanguage } from "@/components/language-provider"

// A condensed, one-row cross-discipline sample of the full tools/stack
// (see ToolsStackSection on /designer and /developer for the complete,
// grouped breakdown), surfaced on Home so visitors get a sense of the
// toolkit without having to find the buried full table on a sub-page
// (Master to-do list, Tier 6, "move toolkit summary onto Home").
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
    <section className="py-12 md:py-16 px-4 border-y border-border bg-muted/20 dark:bg-card/30">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          {t("toolkitStripLabel")}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {HIGHLIGHT_TOOLS.map((tool) => (
            <div key={tool.slug} className="group flex flex-col items-center gap-2.5 w-24">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-card border border-slate-200/70 dark:border-border/60 flex items-center justify-center shadow-sm transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:border-accent/40">
                <BrandIcon slug={tool.slug} size={32} />
              </div>
              <p className="text-sm font-semibold text-foreground/80 text-center leading-tight">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
