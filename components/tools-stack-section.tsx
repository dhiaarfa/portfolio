"use client"

import BrandIcon from "@/lib/brand-icon"
import { toolsStackGroups } from "@/lib/tools-stack"

export default function ToolsStackSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-10 px-6" : "py-16 px-6 bg-slate-50 dark:bg-slate-900"}>
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-accent uppercase tracking-widest mb-2 text-center">Tools & Stack</p>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-10">
          Software I work with daily
        </h3>

        <div className="space-y-6">
          {toolsStackGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-2xl border border-slate-200/80 dark:border-slate-700/70 bg-white/70 dark:bg-slate-800/50 px-4 py-5 md:px-6"
            >
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-4 text-center">
                {group.label}
              </p>
              <div className="flex flex-wrap justify-center gap-x-2 gap-y-4">
                {group.tools.map((tool) => (
                  <div key={tool.name} className="flex flex-col items-center w-[4.75rem] gap-1.5 group">
                    <div className="w-[3.75rem] h-[3.75rem] rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:-translate-y-0.5 transition-all p-2">
                      <BrandIcon slug={tool.slug} size={32} className="max-w-full max-h-full" />
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 text-center leading-tight px-0.5">
                      {tool.name}
                    </p>
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
