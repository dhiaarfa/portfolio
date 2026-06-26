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
  const png = LOCAL_ICON_IMAGES[key]
  if (png) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={png}
        alt=""
        width={size}
        height={size}
        className={`object-contain rounded-[5px] ${className}`}
        loading="lazy"
      />
    )
  }

  const localSvg = LOCAL_ICON_SVGS[key]
  if (localSvg) {
    return <InlineSvgMarkup svg={localSvg} size={size} className={className} />
  }

  const icon = SI_BY_SLUG[key]
  if (icon) {
    return <SiSvg icon={icon} size={size} className={className} mono={mono} color={color} />
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
    />
  )
}

export function WhatsAppIcon({ size = 28, className = "" }: { size?: number; className?: string }) {
  return <SiSvg icon={siWhatsapp} size={size} className={className} mono color="currentColor" />
}

/** Compact Behance “Bē” mark for nav buttons */
export function BehanceIcon({
  size = 20,
  className = "",
  color = "#ffffff",
}: {
  size?: number
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
      role="img"
      aria-label="Behance"
    >
      <path d="M6.938 5.918H12.1c2.15 0 3.548 1.14 3.548 3.035 0 1.3-.637 2.2-1.672 2.613 1.472.413 2.404 1.472 2.404 3.142 0 2.25-1.695 3.692-4.316 3.692H6.938V5.918zm2.905 5.34h1.695c.945 0 1.53-.472 1.53-1.342 0-.855-.585-1.342-1.53-1.342h-1.695v2.684zm0 5.58h1.83c1.155 0 1.875-.585 1.875-1.605 0-1.035-.72-1.62-1.875-1.62h-1.83v3.225zM15.878 7.05h5.565v1.35h-5.565V7.05zm.285 3.75h5.25v1.305h-5.25V10.8z" />
    </svg>
  )
}
