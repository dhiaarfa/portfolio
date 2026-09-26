"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mail, Copy, Check } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "./language-provider"

/** Navbar control that expands on hover (or tap, for touch/keyboard users) to
 *  reveal the email address and a one-click copy button, instead of making
 *  visitors open their mail app just to grab the address.
 *
 *  Sizing: the collapsed state is a plain 36px icon circle (same footprint as
 *  the Behance/WhatsApp icon buttons next to it), not a labelled pill.
 *
 *  Hover zone: the outer wrapper is exactly 36x36px, matching the visible
 *  icon -- NOT the expanded panel's width. An earlier version reserved the
 *  full expanded pill's width in the navbar's normal flow at all times (so
 *  the button "hides part of the navbar" bug this replaces) and used that
 *  same oversized box as the hover hit-area (so it "popped out" even when
 *  the cursor was nowhere near the visible icon). Fixing both by dropping
 *  the reserved-space approach entirely: the expanded panel is a small
 *  dropdown that appears BELOW the icon (absolute, top-full), which never
 *  touches the navbar's flex layout and never overlaps neighboring buttons.
 */
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
      // Clipboard API can fail (permissions, insecure context) -- the email is
      // still visible in the expanded pill for the visitor to select by hand.
    }
  }

  return (
    <div
      className="relative hidden md:block w-9 h-9 shrink-0"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => {
        setExpanded(false)
        setCopied(false)
      }}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
        aria-label={t("copyEmailLabel")}
        title={t("copyEmailLabel")}
        className="w-9 h-9 inline-flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 bg-slate-100/90 dark:bg-muted/70 border border-slate-200/60 dark:border-border/60 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-muted transition-colors"
      >
        <Mail className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, scale: 0.96, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -4 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-2 z-50 inline-flex items-center gap-2 h-9 pl-3.5 pr-1.5 rounded-full bg-white dark:bg-muted border border-slate-200 dark:border-border shadow-lg whitespace-nowrap"
          >
            <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{siteConfig.email}</span>
            <button
              type="button"
              onClick={handleCopy}
              className={`inline-flex items-center gap-1 px-2.5 h-6 rounded-full text-xs font-semibold overflow-hidden transition-colors duration-200 active:scale-95 ${
                copied
                  ? "bg-green-600 text-white"
                  : "bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1"
                  >
                    <Check className="w-3 h-3" />
                    {t("copiedLabel")}
                  </motion.span>
                ) : (
                  <motion.span
                    key="copy"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1"
                  >
                    <Copy className="w-3 h-3" />
                    {t("copyLabel")}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function CopyEmailMobileRow() {
  const [copied, setCopied] = useState(false)
  const { t } = useLanguage()

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      // Same fallback as the desktop version -- nothing more to do here.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-card/60 w-full text-left"
    >
      <span className="flex items-center gap-2 min-w-0">
        <Mail className="w-4 h-4 shrink-0 text-slate-400" />
        <span className="truncate">{siteConfig.email}</span>
      </span>
      <span
        className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-200 ${
          copied ? "bg-green-600 text-white" : "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-1"
            >
              <Check className="w-3 h-3" />
              {t("copiedLabel")}
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-1"
            >
              <Copy className="w-3 h-3" />
              {t("copyLabel")}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  )
}
