"use client"

import * as icons from "simple-icons"

export type BrandIconProps = {
  /** simple-icons slug, e.g. "figma", "nextdotjs", "openai" */
  slug: string
  size?: number
  className?: string
  /** Force single color (e.g. white on colored button) */
  mono?: boolean
  color?: string
}

function slugToSiKey(slug: string): string {
  const normalized = slug
    .toLowerCase()
    .replace(/\./g, "dot")
    .replace(/-/g, "")
  const parts = normalized.match(/[a-z0-9]+/g) ?? []
  return "si" + parts.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("")
}

export function getSimpleIcon(slug: string) {
  const key = slugToSiKey(slug)
  const icon = (icons as Record<string, { path: string; hex: string; title: string }>)[key]
  return icon ?? null
}

export default function BrandIcon({ slug, size = 28, className = "", mono, color }: BrandIconProps) {
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
      className={className}
      loading="lazy"
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

export function BehanceIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return <BrandIcon slug="behance" size={size} className={className} color="#1769FF" />
}
