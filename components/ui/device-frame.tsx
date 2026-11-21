import Image from "next/image"

// Nov 2026: project frames in the "objects on a desk" spirit. Web work sits
// in a hand-drawn laptop or phone (ink outline, hard shadow, tiny sticker);
// design work is taped up like a print, a polaroid or a die-cut sticker.
// Purely presentational: the parent link wraps it.
export type FrameVariant = "laptop" | "phone" | "window" | "polaroid" | "poster" | "sticker"
type Props = { variant: FrameVariant; src: string; alt: string; label?: string; sizes?: string; className?: string }

const INK = "var(--tactile-ink)"
const SH = "var(--tactile-shadow)"

function Tape({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`absolute z-10 h-6 w-16 bg-[var(--block-lime)]/90 border border-[var(--tactile-ink)]/40 ${className}`} />
}

export default function DeviceFrame({ variant, src, alt, label, sizes = "(max-width: 768px) 100vw, 600px", className = "" }: Props) {
  const shot = (cls = "") => <Image src={src} alt={alt} fill sizes={sizes} className={`object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] ${cls}`} />

  if (variant === "laptop")
    return (
      <div className={`relative mx-auto w-full max-w-[620px] ${className}`}>
        <div className="rounded-t-[14px] border-2 bg-[#efe9d2] p-2 pb-0" style={{ borderColor: INK, boxShadow: `6px 6px 0 ${SH}` }}>
          <div className="flex items-center gap-1.5 px-1 pb-1.5">
            {["#ff7a6b", "#ffd24a", "#7bd88f"].map((c) => <i key={c} className="h-2 w-2 rounded-full border border-[#14140f]/60" style={{ background: c }} />)}
            <span className="ms-2 h-3 flex-1 rounded-full bg-white/70 border border-[#14140f]/30" />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-md border-2 border-b-0 bg-muted" style={{ borderColor: INK }}>{shot()}</div>
        </div>
        <div className="relative h-3 rounded-b-xl border-2 border-t-0 bg-[#d9d2b3]" style={{ borderColor: INK, boxShadow: `6px 6px 0 ${SH}` }}>
          <span className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-md bg-[#b9b18f]" />
        </div>
        {label && <span className="sticker absolute -bottom-3 end-4 rotate-3 text-xs">{label}</span>}
      </div>
    )

  if (variant === "phone")
    return (
      <div className={`relative mx-auto w-[min(62%,250px)] ${className}`}>
        <div className="rounded-[34px] border-2 bg-[#14140f] p-2" style={{ borderColor: INK, boxShadow: `6px 6px 0 ${SH}` }}>
          <div className="relative aspect-[9/17] overflow-hidden rounded-[26px] bg-muted">
            {shot()}
            <span className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-[#14140f]" />
          </div>
        </div>
        {label && <span className="sticker absolute -top-3 -end-3 rotate-6 text-xs">{label}</span>}
      </div>
    )

  if (variant === "window")
    return (
      <div className={`relative w-full ${className}`}>
        <div className="overflow-hidden rounded-xl border-2 bg-card" style={{ borderColor: INK, boxShadow: `6px 6px 0 ${SH}` }}>
          <div className="flex items-center gap-1.5 border-b-2 bg-[var(--block-sky)] px-3 py-1.5" style={{ borderColor: INK }}>
            {[0, 1, 2].map((i) => <i key={i} className="h-2.5 w-2.5 rounded-full border-2 border-[#14140f] bg-white/80" />)}
          </div>
          <div className="relative aspect-[16/10]">{shot()}</div>
        </div>
        {label && <span className="sticker absolute -bottom-3 start-4 -rotate-3 text-xs">{label}</span>}
      </div>
    )

  if (variant === "polaroid")
    return (
      <div className={`relative mx-auto w-full max-w-[460px] -rotate-2 bg-white p-3 pb-12 ${className}`} style={{ border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${SH}` }}>
        <Tape className="-top-3 left-8 -rotate-6" />
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">{shot()}</div>
        {label && <span className="absolute inset-x-0 bottom-3 text-center font-display text-lg text-[#14140f]">{label}</span>}
      </div>
    )

  if (variant === "poster")
    return (
      <div className={`relative mx-auto w-full max-w-[520px] rotate-1 ${className}`}>
        <Tape className="-top-3 -left-3 -rotate-45" />
        <Tape className="-top-3 -right-3 rotate-45" />
        <div className="relative aspect-[4/3] overflow-hidden bg-white" style={{ border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${SH}` }}>{shot()}</div>
        {label && <span className="sticker absolute -bottom-3 start-6 text-xs">{label}</span>}
      </div>
    )

  return (
    <div className={`relative mx-auto w-full max-w-[460px] ${className}`}>
      <div className="relative aspect-square overflow-hidden rounded-[28px] border-[6px] border-white bg-white" style={{ boxShadow: `0 0 0 2px ${INK}, 6px 6px 0 2px ${SH}` }}>{shot("object-center")}</div>
      {label && <span className="sticker absolute -bottom-3 end-4 rotate-3 text-xs">{label}</span>}
    </div>
  )
}
