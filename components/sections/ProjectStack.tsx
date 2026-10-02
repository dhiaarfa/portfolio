"use client"

import { useEffect, useRef, type CSSProperties } from "react"
import Image from "next/image"
import styles from "./project-stack.module.css"

/**
 * Ported from Dhia's HTML replica of GetLayers.ai's "Cards Almanac" effect
 * (the source prompt/code is behind their paywall -- this is a faithful
 * reconstruction from the replica he built and handed off, not their
 * literal proprietary asset).
 *
 * ANIMATION IS LOCKED per Dhia's spec: card 940x400/22px radius/18px pad,
 * cover 40.5% width/13px radius, gap 28px, --stick 20vh/--step 30px/
 * --gap 70vh, perspective 1400px, transform-origin 50% 0%, and the exact
 * scroll-engine math below (progress/depth/lean/scale/veil/fade formulas).
 * Do not "improve" these -- see project-stack.module.css for the paired
 * CSS values (sizing/spacing/media queries) that must stay in lockstep
 * with this file.
 *
 * One mixed instance runs on Home now (was two: Web + Design). Each scopes
 * its DOM queries to its own `stackRef` rather than `document`, so the two
 * scroll engines never see or affect each other's cards.
 */
export type Project = {
  name: string
  meta: string
  description: string
  /** Rendered as up to 3 pills, bottom-left of the card footer. */
  tags: string[]
  image: string
  /** When set, the whole card (and the footer "+" button) opens this,
   *  always in a new tab -- every href in this dataset is an external URL. */
  href?: string
  /** Master roadmap 8 (Oct 2026): real paid client work gets a small
   *  "Client" badge. Only set where the data already says so; personal,
   *  academic and unconfirmed projects stay unbadged. */
  client?: boolean
}

type ProjectStackProps = {
  eyebrow: string
  title: string
  subtitle: string
  projects: Project[]
}

export default function ProjectStack({ eyebrow, title, subtitle, projects }: ProjectStackProps) {
  const stackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = stackRef.current
    if (!root) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return // CSS's own reduced-motion block takes over entirely

    // Scoped to this instance's own root -- never document-wide -- so a
    // second <ProjectStack> elsewhere on the page runs a fully independent
    // engine over its own cards only.
    const slots = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.slot}`))
    const els = slots.map((slot) => ({
      slot,
      card: slot.querySelector<HTMLElement>(`.${styles.card}`)!,
      cover: slot.querySelector<HTMLElement>(`.${styles.coverInner}`)!,
      body: slot.querySelector<HTMLElement>(`.${styles.body}`)!,
    }))

    const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v))
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    function frame() {
      const vh = window.innerHeight
      // Enter progress of every card: 0 = just entering viewport bottom, 1 = pinned.
      const prog = els.map(({ slot }) => {
        const stickTop = parseFloat(getComputedStyle(slot).top)
        const top = slot.getBoundingClientRect().top
        return clamp((vh - top) / (vh - stickTop))
      })
      prog[0] = 1 // first card is already "landed" under the header

      els.forEach((e, i) => {
        const p = easeOut(prog[i])
        // depth = how many later cards have landed on this one (fractional)
        let depth = 0
        for (let j = i + 1; j < els.length; j++) depth += easeOut(prog[j])
        const lean = (1 - p) * 16 // 3D lean while sliding in
        const grow = (1 - p) * 0.045 // incoming card slightly larger
        const sink = depth * 0.036 // covered cards shrink
        const scale = 1 + grow - sink
        const lift = -Math.min(depth, 5) * 4
        e.card.style.transform = `translateY(${lift}px) rotateX(${lean}deg) scale(${scale})`
        e.card.style.setProperty("--veil", String(clamp(depth * 0.16, 0, 0.4)))
        e.card.style.opacity = depth > 4.5 ? String(clamp(5.5 - depth)) : "1"
        e.cover.style.transform = `scale(${1.22 - 0.22 * p})` // cover zooms to life
        e.body.style.opacity = String(clamp((prog[i] - 0.45) / 0.55)) // text fades in as it lands
      })
    }

    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          frame()
          ticking = false
        })
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", frame)
    frame()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", frame)
    }
  }, [])

  return (
    <section className={styles.wrapper}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.sub}>{subtitle}</p>
      </header>

      <div className={styles.stack} ref={stackRef}>
        {projects.map((project, i) => {
          const Card = project.href ? "a" : "div"
          const linkProps = project.href
            ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
            : {}
          return (
            <div
              key={project.name + i}
              className={styles.slot}
              style={{ "--i": i } as CSSProperties}
            >
              <Card {...linkProps} className={styles.card}>
                <div className={styles.cover}>
                  <div className={styles.coverInner}>
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      quality={92}
                      className={styles.coverImg}
                    />
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.metaRow}>
                    {project.client && <span className={styles.badge}>Client</span>}
                    <span className={styles.meta}>{project.meta}</span>
                  </div>
                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.desc}>{project.description}</p>
                  <div className={styles.foot}>
                    <div className={styles.tags}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className={styles.chip}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.href && (
                      <span className={styles.plus} aria-hidden="true">
                        <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
                          <path d="M7 1v12M1 7h12" />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          )
        })}
      </div>
    </section>
  )
}
