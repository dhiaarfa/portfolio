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
    // bg-accent-subtle is a load-state placeholder: this Image has no
    // `placeholder="blur"` fallback, so before the file arrives it paints
    // nothing at all and the badge looked like an empty box on some loads
    // (e.g. the About page hero). A colored base keeps it looking
    // intentional the moment the layout reserves its space.
    <span className={`${className} bg-accent-subtle`}>
      <Image
        src={TUNISIA_FLAG_SRC}
        alt=""
        width={27}
        height={18}
        unoptimized
        className="block h-full w-full object-cover"
        aria-hidden
      />
    </span>
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
