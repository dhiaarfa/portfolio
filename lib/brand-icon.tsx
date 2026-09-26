import {
  siBehance,
  siFigma,
  siBlender,
  siClaude,
  siOpenrouter,
  siReact,
  siNextdotjs,
  siTypescript,
  siTailwindcss,
  siFramer,
  siNodedotjs,
  siSupabase,
  siVercel,
  siGit,
  siGithub,
  siNotion,
  siTrello,
  siMiro,
  siLoom,
  siKahoot,
  siGoogleslides,
  siWhatsapp,
} from "simple-icons"
import { LOCAL_ICON_SVGS } from "@/lib/local-icon-svgs"

/** Brand marks whose official logo is pure black (or near-black) with a
 *  transparent background -- fine on the white/light chips these render in
 *  during light mode, but invisible on the dark:bg-card chips used in dark
 *  mode (reported: Next.js/Vercel/GitHub/Angular icons disappearing in
 *  "Tools I work with daily"). Rather than hand-pick a replacement color
 *  per icon, invert them in dark mode -- pure black on a transparent
 *  background inverts to pure white with alpha untouched, which reads
 *  correctly against every dark chip on the site without affecting any
 *  icon that already has real brand color. */
const DARK_MODE_INVERT_SLUGS = new Set([
  "nextdotjs",
  "vercel",
  "github",
  "notion",
  "openai",
  "angular",
  "symfony",
  "midjourney",
  "apple",
])

/** High-fidelity PNGs for Adobe apps where inline SVG colors were wrong */
const LOCAL_ICON_IMAGES: Record<string, string> = {
  adobeindesign: "/images/icons/indesign.png",
  adobeaftereffects: "/images/icons/adobe-after-effects.png",
  adobelightroomclassic: "/images/icons/lightroom.png",
  behance: "/images/icons/behance-circle.png",
}

export type BrandIconProps = {
  slug: string
  size?: number
  className?: string
  mono?: boolean
  color?: string
}

type SiIcon = { path: string; hex: string; title: string; slug?: string }

const SI_BY_SLUG: Record<string, SiIcon> = {
  figma: siFigma,
  blender: siBlender,
  claude: siClaude,
  openrouter: siOpenrouter,
  react: siReact,
  nextdotjs: siNextdotjs,
  typescript: siTypescript,
  tailwindcss: siTailwindcss,
  framer: siFramer,
  nodedotjs: siNodedotjs,
  supabase: siSupabase,
  vercel: siVercel,
  git: siGit,
  github: siGithub,
  notion: siNotion,
  trello: siTrello,
  miro: siMiro,
  loom: siLoom,
  behance: siBehance,
  kahoot: siKahoot,
  googleslides: siGoogleslides,
  whatsapp: siWhatsapp,
}

function InlineSvgMarkup({ svg, size, className }: { svg: string; size: number; className?: string }) {
  const sized = svg.replace(/<svg\b/, `<svg width="${size}" height="${size}"`)
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center [&>svg]:block ${className ?? ""}`}
      style={{ width: size, height: size }}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: sized }}
    />
  )
}

function SiSvg({
  icon,
  size,
  className,
  mono,
  color,
}: {
  icon: SiIcon
  size: number
  className?: string
  mono?: boolean
  color?: string
}) {
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

export default function BrandIcon({ slug, size = 28, className = "", mono, color }: BrandIconProps) {
  const key = slug.toLowerCase()
  const invertClass = !mono && !color && DARK_MODE_INVERT_SLUGS.has(key) ? "dark:invert" : ""
  const mergedClassName = invertClass ? `${className} ${invertClass}`.trim() : className

  const png = LOCAL_ICON_IMAGES[key]
  if (png) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={png}
        alt=""
        width={size}
        height={size}
        className={`object-contain rounded-[5px] ${mergedClassName}`}
        loading="lazy"
      />
    )
  }

  const localSvg = LOCAL_ICON_SVGS[key]
  if (localSvg) {
    return <InlineSvgMarkup svg={localSvg} size={size} className={mergedClassName} />
  }

  const icon = SI_BY_SLUG[key]
  if (icon) {
    return <SiSvg icon={icon} size={size} className={mergedClassName} mono={mono} color={color} />
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      width={size}
      height={size}
      className={`object-contain ${mergedClassName}`}
      loading="lazy"
    />
  )
}

export function WhatsAppIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return <SiSvg icon={siWhatsapp} size={size} className={className} mono color="currentColor" />
}

/** Monochrome Behance glyph (currentColor) for nav buttons that should match
 * a neutral control theme instead of the branded circular blue PNG logo. */
export function BehanceMonoIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return <SiSvg icon={siBehance} size={size} className={className} mono color="currentColor" />
}

/** Compact Behance “Bē” mark for nav buttons, uses official circular logo PNG */
export function BehanceIcon({
  size = 20,
  className = "",
}: {
  size?: number
  className?: string
  /** @deprecated color prop ignored, logo PNG includes brand colors */
  color?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/icons/behance-circle.png"
      alt="Behance"
      width={size}
      height={size}
      className={`block rounded-full object-cover ${className}`}
    />
  )
}
