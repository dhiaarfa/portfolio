"use client"

import { useState } from "react"
import { Mail, Copy, Check } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "./language-provider"

/** Navbar pill that expands on hover (or tap, for touch/keyboard users) to
 *  reveal the email address and a one-click copy button, instead of making
 *  visitors open their mail app just to grab the address. */
export function CopyEmailButton() {
  const [expanded, setExpanded] = useState(false)
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // Clipboard API can fail (permissions, insecure context) — the email is
      // still visible in the expanded pill for the visitor to select by hand.
    }
  }

  return (
    // `relative` + a fixed-height ghost element below is what makes this
    // safe to expand: the ghost reserves the collapsed pill's exact width
    // in the navbar's normal flex flow (so Resume/Theme/Language/Book-a-call
    // never shift when this expands), while the actual visible pill is
    // rendered `absolute` on top of that same spot and grows to the left
    // without pushing anything. It used to expand inline, which both
    // shoved every control after it sideways AND — since it had no
    // position/z-index of its own — could end up visually painted *under*
    // later, unrelated controls once the row got tight. `z-30` plus
    // `position: absolute` guarantees it always paints above them instead.
    <div
      className="relative hidden md:block h-9"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false)
        setCopied(false)
      }}
    >
      <div
        aria-hidden
        className="invisible inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-xs font-medium whitespace-nowrap"
      >
        <Mail className="w-3.5 h-3.5" />
        {t("copyEmailLabel")}
      </div>

      <div className="absolute top-0 right-0 z-30">
        {!expanded ? (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            aria-expanded={false}
            className="inline-flex items-center gap-1.5 h-9 px-3.5 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200/60 dark:border-slate-700/60 hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap"
          >
            <Mail className="w-3.5 h-3.5" />
            {t("copyEmailLabel")}
          </button>
        ) : (
          <div
            aria-expanded={true}
            className="inline-flex items-center gap-2 h-9 pl-3.5 pr-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-lg whitespace-nowrap"
          >
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{siteConfig.email}</span>
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1 px-2.5 h-6 rounded-full text-xs font-semibold transition-colors ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
              }`}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? t("copiedLabel") : t("copyLabel")}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

/** Simplified tap-to-copy row for the mobile slide-out menu, where hover
 *  doesn't apply. */
export function CopyEmailMobileRow() {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // Same fallback as the desktop version — nothing more to do here.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-900/60 w-full text-left"
    >
      <span className="flex items-center gap-2 min-w-0">
        <Mail className="w-4 h-4 shrink-0 text-slate-400" />
        <span className="truncate">{siteConfig.email}</span>
      </span>
      <span
        className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
          copied ? "bg-green-600 text-white" : "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
        }`}
      >
        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
        {copied ? t("copiedLabel") : t("copyLabel")}
      </span>
    </button>
  )
}
