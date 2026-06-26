"use client"

import { useLanguage } from "@/components/language-provider"

export function TunisiaFlag({
  className = "inline-block h-[0.85em] w-[1.25em] rounded-[2px] shadow-sm align-[-0.15em]",
}: {
  className?: string
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 600"
      role="img"
      aria-label="Tunisia"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="900" height="600" fill="#E70013" />
      <circle cx="450" cy="300" r="180" fill="#fff" />
      <circle cx="495" cy="300" r="150" fill="#E70013" />
      <path fill="#fff" d="M545 300l55 18-34-48 34-48-55 18-21-52v104z" />
    </svg>
  )
}

export function BasedInTunisia({ className = "" }: { className?: string }) {
  const { t } = useLanguage()
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <span>{t("basedInLabel")}</span>
      <TunisiaFlag />
    </span>
  )
}
