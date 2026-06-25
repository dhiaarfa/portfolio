"use client"

import BrandIcon from "@/lib/brand-icon"
import { toolsStackGroups } from "@/lib/tools-stack"

export default function ToolsStackSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-10 px-6" : "py-16 px-6 bg-slate-50 dark:bg-slate-900"}>
      <div className="max-w-5xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 text-center">Tools & Stack</p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
          Software I work with daily
        </h3>

        <div className="space-y-10">
          {toolsStackGroups.map((group) => (
            <div key={group.id}>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{group.label}</p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {group.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center gap-2 group">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all p-3">
                      <BrandIcon slug={tool.slug} size={26} className="max-w-full max-h-full" />
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center leading-tight">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
