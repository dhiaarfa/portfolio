"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { FadeUp } from "@/components/ui/motion"
import { profileStats } from "@/lib/profile"

type StatKey = keyof typeof profileStats

type Tile = {
  stat: StatKey
  labelKey: string
  detailKey: string
  /** Real photo from the work that produced the number; omit for a text tile. */
  photo?: { src: string; alt: string; position?: string }
  /** Existing translated place label, shown as a chip on photo tiles. */
  placeKey?: string
  /** Grid placement at lg (4 columns). */
  span: string
}

/**
 * Trainer impact wall (Oct 2026, Dhia's ask: the six grey progress rings
 * read as a generic dashboard and ignored the site's look). Each figure is
 * pinned to a real photo from the training work behind it -- Voices 4 Peace,
 * TNHRT Hammamet, the IOM hackathon in Doha, a facilitation keynote -- in
 * an editorial bento: one large feature, mixed photo and text tiles.
 * Charte: near-black base, single green accent (number underline, place
 * chips, text-tile numbers), rounded-[2rem] cards and dot-grid texture as
 * on Home's expertise cards. Numbers count up once on scroll (static under
 * reduced motion, via AnimatedNumber). Every figure reads lib/profile.ts.
 */
const TILES: Tile[] = [
  {
    stat: "participantsTrained",
    labelKey: "impactStatParticipantsLabel",
    detailKey: "impactStatParticipantsDetail",
    photo: { src: "/images/trainer/moment-group.jpg", alt: "Group photo of youth participants at the end of a training programme", position: "center 62%" },
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    stat: "trainingCycles",
    labelKey: "impactStatEventsLabel",
    detailKey: "impactStatEventsDetail",
    photo: { src: "/images/trainer/tnhrt-carthaginian-camp.png", alt: "Participants of the Training New Human Rights Trainers camp in Hammamet", position: "center 60%" },
    placeKey: "ifmsaEventHammamet",
    span: "lg:col-span-2",
  },
  {
    stat: "trainingHours",
    labelKey: "impactStatHoursLabel",
    detailKey: "impactStatHoursDetail",
    span: "",
  },
  {
    stat: "yearsExperience",
    labelKey: "impactStatYearsLabel",
    detailKey: "impactStatYearsDetail",
    span: "",
  },
  {
    stat: "trainingPartners",
    labelKey: "impactStatPartnersLabel",
    detailKey: "impactStatPartnersDetail",
    photo: { src: "/images/trainer/iom-hackathon-doha-2024.png", alt: "Dhia with the Tunisian flag at the IOM Youth and Innovation Hackathon in Doha", position: "center 45%" },
    placeKey: "dohaEventLocation",
    span: "lg:col-span-2",
  },
  {
    stat: "facilitationHours",
    labelKey: "impactStatFacilitationLabel",
    detailKey: "impactStatFacilitationDetail",
    photo: { src: "/images/dhia/speaking-mic-crop.png", alt: "Dhia speaking with a microphone during a facilitated session", position: "center 30%" },
    span: "lg:col-span-2",
  },
]

function Figure({ stat, onPhoto, large }: { stat: StatKey; onPhoto: boolean; large?: boolean }) {
  const s = profileStats[stat]
  return (
    <div className="flex flex-col items-start">
      <AnimatedNumber
        value={s.value}
        suffix={s.suffix}
        className={`font-display font-black leading-none tabular-nums tracking-tight ${
          onPhoto ? "text-white" : "text-accent"
        } ${large ? "text-[clamp(48px,6vw,80px)]" : "text-[clamp(36px,4vw,52px)]"}`}
      />
      <span className="mt-3 h-1 w-10 rounded-full bg-accent" aria-hidden />
    </div>
  )
}

export default function TrainerImpactWall() {
  const { t } = useLanguage()

  return (
    <section id="trainer-impact" className="w-full section-compact px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <FadeUp>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-2">{t("impactMetrics")}</p>
          <h2 className="font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight text-foreground mb-10 max-w-2xl">
            {t("measurableResults")}
          </h2>
        </FadeUp>

        <div className="grid grid-cols-2 lg:grid-cols-4 lg:auto-rows-[290px] gap-4">
          {TILES.map((tile) => {
            const isFeature = tile.span.includes("row-span-2")
            if (!tile.photo) {
              return (
                <div
                  key={tile.stat}
                  className={`relative overflow-hidden rounded-[2rem] border border-border bg-background p-6 flex flex-col justify-between min-h-[200px] ${tile.span}`}
                >
                  <div className="absolute inset-0 bg-dot-grid opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden />
                  <div className="relative">
                    <Figure stat={tile.stat} onPhoto={false} />
                  </div>
                  <div className="relative mt-6">
                    <p className="font-semibold text-foreground">{t(tile.labelKey)}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-snug">{t(tile.detailKey)}</p>
                  </div>
                </div>
              )
            }
            return (
              <figure
                key={tile.stat}
                className={`group relative overflow-hidden rounded-[2rem] border border-border col-span-2 ${
                  isFeature ? "min-h-[440px]" : "min-h-[290px]"
                } ${tile.span}`}
              >
                <Image
                  src={tile.photo.src}
                  alt={tile.photo.alt}
                  fill
                  sizes={isFeature ? "(min-width: 1024px) 560px, 100vw" : "(min-width: 1024px) 560px, 100vw"}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  style={{ objectPosition: tile.photo.position ?? "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" aria-hidden />
                {tile.placeKey && (
                  <span className="absolute top-4 start-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">
                    <MapPin className="h-3 w-3 text-accent" aria-hidden />
                    {t(tile.placeKey)}
                  </span>
                )}
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <Figure stat={tile.stat} onPhoto large={isFeature} />
                  <p className={`mt-4 font-semibold text-white ${isFeature ? "text-xl" : "text-base"}`}>{t(tile.labelKey)}</p>
                  <p className="mt-1 text-sm text-white/75 leading-snug max-w-sm">{t(tile.detailKey)}</p>
                </figcaption>
              </figure>
            )
          })}
        </div>
      </div>
    </section>
  )
}
