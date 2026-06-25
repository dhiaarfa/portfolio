"use client"

import * as icons from "simple-icons"

export type BrandIconProps = {
  /** Brand slug, e.g. "figma", "nextdotjs", "openai" */
  slug: string
  size?: number
  className?: string
  /** Force single color (e.g. white on colored button) */
  mono?: boolean
  color?: string
}

/** Brands removed from simple-icons — served locally (devicon / custom SVG). */
const LOCAL_ICON_PATHS: Record<string, string> = {
  adobeillustrator: "/images/icons/adobe-illustrator.svg",
  adobephotoshop: "/images/icons/adobe-photoshop.svg",
  adobeindesign: "/images/icons/indesign.svg",
  adobeaftereffects: "/images/icons/adobe-after-effects.svg",
  adobelightroomclassic: "/images/icons/adobe-lightroom.svg",
  canva: "/images/icons/canva.svg",
  openai: "/images/icons/openai.svg",
  midjourney: "/images/icons/midjourney.svg",
  slack: "/images/icons/slack.svg",
}

function slugToSiKey(slug: string): string {
  const normalized = slug.toLowerCase().replace(/\./g, "dot").replace(/-/g, "")
  const parts = normalized.match(/[a-z0-9]+/g) ?? []
  return "si" + parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("")
}

export function getSimpleIcon(slug: string) {
  const key = slugToSiKey(slug)
  const direct = (icons as Record<string, { path: string; hex: string; title: string; slug?: string }>)[key]
  if (direct) return direct

  const all = Object.values(icons as Record<string, { path: string; hex: string; title: string; slug?: string }>)
  return all.find((icon) => icon.slug === slug) ?? null
}

export default function BrandIcon({ slug, size = 28, className = "", mono, color }: BrandIconProps) {
  const localPath = LOCAL_ICON_PATHS[slug.toLowerCase()]
  if (localPath) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={localPath}
        alt=""
        width={size}
        height={size}
        className={`object-contain ${className}`}
        loading="lazy"
        draggable={false}
      />
    )
  }

  const icon = getSimpleIcon(slug)

  if (icon?.path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color ?? (mono ? "currentColor" : `#${icon.hex}`)}
        className={className}
        aria-label={icon.title}
      >
        <path d={icon.path} />
      </svg>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={size}
      height={size}
      className={`object-contain ${className}`}
      loading="lazy"
      onError={(e) => {
        e.currentTarget.style.display = "none"
      }}
    />
  )
}

export function WhatsAppIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  const icon = getSimpleIcon("whatsapp")
  if (!icon) return null
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className} aria-label="WhatsApp">
      <path d={icon.path} />
    </svg>
  )
}

export function BehanceIcon({
  size = 20,
  className = "",
  color = "#ffffff",
}: {
  size?: number
  className?: string
  color?: string
}) {
  const icon = getSimpleIcon("behance")
  if (!icon) return null
  return (
    <svg role="img" viewBox="0 0 24 24" width={size} height={size} fill={color} className={className} aria-label="Behance">
      <path d={icon.path} />
    </svg>
  )
}
