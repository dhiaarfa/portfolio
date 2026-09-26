"use client"

import { FileText, Download } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLanguage } from "./language-provider"
import { resumeOptions } from "@/lib/resumes"

/** Navbar "Resume" button, lets a visitor pick which role-specific resume to
 *  open (General / Designer / Trainer / Developer / Social Engagement)
 *  instead of guessing which one applies to them. */
export function ResumeDropdown() {
  const { t } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          // rounded-full to match CopyEmailButton, both are h-9 labeled
          // pills in the same cluster and previously used two different
          // corner radii (rounded-xl here vs rounded-full there).
          className="hidden md:inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-muted/70 border border-slate-200/60 dark:border-border/60 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap"
        >
          <FileText className="w-3.5 h-3.5" />
          {t("nav.resumes")}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel>{t("resumesMenuTitle")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {resumeOptions.map((resume) => (
          <DropdownMenuItem key={resume.id} asChild>
            <a href={resume.fileUrl} target="_blank" rel="noopener noreferrer" download className="cursor-pointer">
              <Download className="w-4 h-4" />
              {t(resume.labelKey)}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/** Same 5 options as a flat list, for the mobile slide-out menu (no dropdown
 *  affordance there, a full-height menu already has room to list them). */
export function ResumeMobileList() {
  const { t } = useLanguage()

  return (
    <div className="px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-1.5">
        <FileText className="w-3.5 h-3.5" />
        {t("resumesMenuTitle")}
      </p>
      <div className="flex flex-col gap-1">
        {resumeOptions.map((resume) => (
          <a
            key={resume.id}
            href={resume.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-card/60"
          >
            {t(resume.labelKey)}
            <Download className="w-4 h-4 text-slate-400" />
          </a>
        ))}
      </div>
    </div>
  )
}
