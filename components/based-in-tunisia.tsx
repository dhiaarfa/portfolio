"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

const TUNISIA_FLAG_SRC = "/images/flags/tunisia.png"

export function TunisiaFlag({
  className = "inline-block h-[0.9em] w-[1.35em] rounded-[2px] shadow-sm align-[-0.12em] object-cover",
}: {
  className?: string
}) {
  return (
    <Image
      src={TUNISIA_FLAG_SRC}
      alt=""
      width={27}
      height={18}
      unoptimized
      className={className}
      aria-hidden
    />
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
