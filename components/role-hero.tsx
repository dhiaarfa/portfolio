import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

type RoleHeroProps = {
  /** "background": full-bleed photo behind bottom-aligned text (Trainer).
   *  "split-edge": edge-to-edge two-panel, dark text panel + borderless
   *  media panel that fills the section height (Designer).
   *  "split-contained": one padded container, decorative background layer
   *  spanning the whole section, text + a contained media card side by
   *  side (Developer). Three distinct, hand-tuned looks kept as named
   *  variants of one shared component rather than flattened into a single
   *  layout, the differences (full-bleed photo vs. image collage vs.
   *  terminal mockup) are a deliberate differentiator between the three
   *  disciplines. See Master to-do list Tier 4. */
  variant: "background" | "split-edge" | "split-contained"
  className?: string
  /** Absolutely-positioned decorative layer (dot-grid, glow blob, etc.) —
   *  page-specific, so it's a slot rather than a hardcoded pattern. */
  decoration?: ReactNode
  media: ReactNode
  mediaClassName?: string
  children: ReactNode
  /** split-edge only: a bottom-pinned row (stats) below the main content
   *  block, outside its vertical centering. */
  footer?: ReactNode
}

/** Shared structural shell for the three discipline-page heroes (Trainer,
 *  Designer, Developer): same dark canvas, same min-h-[68vh] sizing, same
 *  h1-hero content rhythm, with a swappable media slot per page instead of
 *  three independently hand-rolled `<section>` blocks. */
export default function RoleHero({
  variant,
  className,
  decoration,
  media,
  mediaClassName,
  children,
  footer,
}: RoleHeroProps) {
  if (variant === "background") {
    return (
      <section className={cn("relative min-h-[68vh] flex items-end overflow-hidden bg-[#0A0A0A]", className)}>
        <div className="absolute inset-0 min-h-[400px]">{media}</div>
        {decoration}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-32 w-full">{children}</div>
      </section>
    )
  }

  if (variant === "split-edge") {
    return (
      <section className={cn("min-h-[68vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden", className)}>
        <div className="relative order-2 flex flex-col justify-between bg-[#0A0A0A] p-8 lg:order-1 lg:p-14">
          {decoration}
          <div className="relative z-10 my-auto py-6">{children}</div>
          {footer && <div className="relative z-10">{footer}</div>}
        </div>
        <div className={cn("relative order-1 min-h-[45vh] lg:order-2 lg:min-h-full", mediaClassName)}>{media}</div>
      </section>
    )
  }

  return (
    <section
      className={cn(
        // Was hardcoded bg-[#0A0A0A] text-white regardless of site theme --
        // rendered as a permanently-dark hero even in light mode (the
        // "developer page looks dark in light mode" bug). Now theme-aware
        // like the rest of the site; the terminal-style media mockup this
        // variant is paired with stays intentionally dark on its own (a
        // code-editor look is expected to stay dark, like a syntax-
        // highlighted code block), so only this outer shell changes.
        "bg-background text-foreground min-h-[68vh] flex items-center px-6 py-16 relative overflow-hidden",
        className
      )}
    >
      {decoration}
      <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-14 items-center">
        <div>{children}</div>
        <div className={cn("hidden lg:block", mediaClassName)}>{media}</div>
      </div>
    </section>
  )
}
