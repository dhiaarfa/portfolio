"use client"

import { useState, useEffect, Suspense } from "react"
import { useAutoAnimate } from "@formkit/auto-animate/react"
import { useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import Image from "next/image"
import { Download, Lock, CheckCircle, X, Mail, Youtube, BookOpen, ExternalLink, GraduationCap, Wrench } from "lucide-react"
import { publishedFreebies, type Freebie } from "@/lib/freebies"
import { learningResources, type LearningResource } from "@/lib/learning-resources"
import { useLanguage } from "@/components/language-provider"
import { freebieText } from "@/lib/freebie-i18n"

type Category = "all" | "design" | "training" | "development"
type ResourceFilter = "all" | LearningResource["category"]

const resourceIcon = (type: LearningResource["type"]) => {
  if (type === "youtube") return Youtube
  if (type === "course") return GraduationCap
  if (type === "tool") return Wrench
  return BookOpen
}

function resourceCategoryLabel(cat: LearningResource["category"], t: (k: string) => string) {
  const map: Record<LearningResource["category"], string> = {
    design: t("resourceFilter.design"),
    training: t("resourceFilter.training"),
    development: t("resourceFilter.development"),
    marketing: t("resourceFilter.marketing"),
  }
  return map[cat]
}

interface FormData {
  name: string
  email: string
  website: string
}

function parseCategory(value: string | null): Category {
  if (value === "design" || value === "training" || value === "development") return value
  return "all"
}

function FreebiesClientInner() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const freebies = publishedFreebies()
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [resourceFilter, setResourceFilter] = useState<ResourceFilter>("all")
  const [selectedFreebie, setSelectedFreebie] = useState<Freebie | null>(null)
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", website: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [downloadKind, setDownloadKind] = useState<"pdf" | "canva" | null>(null)
  const [unlockedIds, setUnlockedIds] = useState<string[]>([])
  // Smooths the grid reflow when a category filter narrows/widens the
  // result set — items already in view slide to their new slot instead of
  // the whole grid silently jumping (Master to-do list, Tier 6).
  const [freebiesGridRef] = useAutoAnimate<HTMLDivElement>()
  const [resourcesGridRef] = useAutoAnimate<HTMLDivElement>()

  useEffect(() => {
    setActiveCategory(parseCategory(searchParams.get("category")))
  }, [searchParams])

  const filtered = freebies.filter((f) => (activeCategory === "all" ? true : f.category === activeCategory))
  const filteredResources = learningResources.filter((r) =>
    resourceFilter === "all" ? true : r.category === resourceFilter
  )

  const triggerDownload = (url: string, kind: "pdf" | "canva") => {
    if (kind === "canva") {
      window.open(url, "_blank", "noopener,noreferrer")
      return
    }
    const a = document.createElement("a")
    a.href = url
    a.setAttribute("download", "")
    a.rel = "noopener"
    a.target = "_blank"
    document.body.appendChild(a)
    a.click()
    a.remove()
  }

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFreebie) return
    setStatus("loading")
    setDownloadUrl(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "freebie",
          name: formData.name.trim(),
          email: formData.email.trim(),
          freebieId: selectedFreebie.id,
          website: formData.website,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.downloadUrl) {
        setStatus("error")
        return
      }

      const localUrl =
        data.kind === "pdf" && selectedFreebie.delivery.kind === "pdf"
          ? `${window.location.origin}${selectedFreebie.delivery.path}`
          : data.downloadUrl

      setDownloadUrl(localUrl)
      setDownloadKind(data.kind)
      setUnlockedIds((prev) => [...prev, selectedFreebie.id])
      setStatus("success")

      try {
        triggerDownload(localUrl, data.kind)
      } catch {
        /* download hint still shown in success UI */
      }
    } catch {
      setStatus("error")
    }
  }

  const colorMap = {
    pink: {
      bg: "bg-pink-50 dark:bg-pink-950/40",
      border: "border-pink-200/80 dark:border-pink-800/60",
      icon: "text-pink-700 dark:text-pink-300",
      badge: "bg-pink-100 dark:bg-pink-900/70 text-pink-800 dark:text-pink-200",
    },
    amber: {
      bg: "bg-amber-50 dark:bg-amber-950/40",
      border: "border-amber-200/80 dark:border-amber-800/60",
      icon: "text-amber-700 dark:text-amber-300",
      badge: "bg-amber-100 dark:bg-amber-900/70 text-amber-800 dark:text-amber-200",
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-950/40",
      border: "border-blue-200/80 dark:border-blue-800/60",
      icon: "text-blue-700 dark:text-blue-300",
      badge: "bg-blue-100 dark:bg-blue-900/70 text-blue-800 dark:text-blue-200",
    },
  } as const

  const categoryLabel = (cat: Category) => {
    if (cat === "design") return t("freebiesCategoryDesign")
    if (cat === "training") return t("freebiesCategoryTraining")
    if (cat === "development") return t("freebiesCategoryDevelopment")
    return t("freebiesCategoryAll")
  }

  const freebieCategoryLabel = (cat: Freebie["category"]) => {
    if (cat === "design") return t("freebiesCategoryDesign")
    if (cat === "training") return t("freebiesCategoryTraining")
    return t("freebiesCategoryDevelopment")
  }

  return (
    <>
      <section className="pt-[5.5rem] pb-12 px-6 text-center">
        <p className="label mb-3">{t("freebies.title")}</p>
        <h1 className="h1-article text-foreground mb-4">
          {t("freebies.heroTitle")}{" "}
          <span className="text-accent">{t("freebies.heroHighlight")}</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
          {t("freebies.subtitle")}
        </p>
        <p className="mt-4 text-sm font-medium text-accent">{t("freebies.socialProof")}</p>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {(["all", "design", "training", "development"] as Category[]).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm lg:text-base font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-white shadow-md shadow-green-500/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {categoryLabel(cat)}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-20 px-6">
        <div ref={freebiesGridRef} className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center text-muted-foreground py-12">{t("freebies.empty")}</p>
          ) : (
            filtered.map((freebie, i) => {
              const colors = colorMap[freebie.color]
              const isUnlocked = unlockedIds.includes(freebie.id)

              return (
                <motion.div
                  key={freebie.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative overflow-hidden rounded-2xl border flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-card ${colors.border}`}
                  onClick={() => !isUnlocked && setSelectedFreebie(freebie)}
                >
                  {freebie.bgImage ? (
                    <div className="relative h-36 w-full">
                      <Image
                        src={freebie.bgImage}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    // A stylized generic preview — not a fake screenshot of the
                    // real file, just a "this is a downloadable document/template"
                    // visual cue, since "trust me, it's useful" reads weaker than
                    // showing something resembling what you're about to get.
                    <div className={`relative h-36 w-full ${colors.bg} flex items-center justify-center overflow-hidden`}>
                      <div
                        className="pointer-events-none absolute inset-0 opacity-[0.35]"
                        style={{
                          backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
                          backgroundSize: "16px 16px",
                          color: "var(--site-accent)",
                        }}
                        aria-hidden
                      />
                      {freebie.delivery.kind === "canva" ? (
                        <div className="relative grid grid-cols-2 gap-1.5 rotate-[-4deg]">
                          <div className={`h-8 w-14 rounded-md ${colors.badge}`} />
                          <div className="h-8 w-14 rounded-md bg-white/70 dark:bg-white/10" />
                          <div className="h-8 w-14 rounded-md bg-white/70 dark:bg-white/10" />
                          <div className={`h-8 w-14 rounded-md ${colors.badge}`} />
                        </div>
                      ) : (
                        <div className="relative flex h-20 w-16 flex-col gap-1.5 rounded-md bg-white/90 dark:bg-white/10 p-2.5 shadow-sm rotate-[-3deg]">
                          <div className={`h-1.5 w-8 rounded-full ${colors.badge}`} />
                          <div className="h-1 w-full rounded-full bg-black/10 dark:bg-white/20" />
                          <div className="h-1 w-full rounded-full bg-black/10 dark:bg-white/20" />
                          <div className="h-1 w-3/4 rounded-full bg-black/10 dark:bg-white/20" />
                          <div className="mt-auto h-1 w-1/2 rounded-full bg-black/10 dark:bg-white/20" />
                        </div>
                      )}
                      <span className="absolute bottom-2 right-3 text-2xl">{freebie.emoji}</span>
                    </div>
                  )}
                  <div className="relative z-10 flex flex-col gap-4 p-6 flex-1">
                  <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                    {freebieCategoryLabel(freebie.category)}
                  </span>

                  <div>
                    <h3 className="font-bold text-foreground text-base lg:text-lg leading-snug">{freebieText(freebie, "title", t)}</h3>
                    <p className="text-sm lg:text-base text-muted-foreground mt-2 leading-relaxed">{freebieText(freebie, "description", t)}</p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/60">
                    <span className="text-xs lg:text-sm text-muted-foreground">{freebieText(freebie, "format", t)}</span>
                    <span className={`text-xs lg:text-sm font-medium ${colors.icon}`}>{freebieText(freebie, "benefit", t)}</span>
                  </div>

                  {isUnlocked ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation()
                        const url =
                          freebie.delivery.kind === "canva"
                            ? freebie.delivery.url
                            : `${window.location.origin}${freebie.delivery.path}`
                        triggerDownload(url, freebie.delivery.kind)
                      }}
                      className="flex items-center justify-center gap-2 w-full py-3 bg-accent hover:opacity-90 text-white text-sm lg:text-base font-semibold rounded-xl transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      {t("freebies.downloadAgain")}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-foreground hover:opacity-90 text-background text-sm lg:text-base font-semibold rounded-xl transition-colors"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      {t("freebies.unlockBtn")}
                    </button>
                  )}
                  </div>
                </motion.div>
              )
            })
          )}

          {activeCategory === "all" && (
            <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6 flex flex-col justify-center text-center gap-4 min-h-[280px]">
              <div className="w-12 h-12 rounded-full bg-accent-subtle flex items-center justify-center mx-auto">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{t("freebies.moreComingTitle")}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t("freebies.moreComingDesc")}</p>
              </div>
              {/* "/contact" is not a real route on this site (every other CTA uses
                  the "#contact" anchor into the footer's contact section, which
                  is also rendered on this page) — this one was a genuine 404. */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-accent hover:opacity-90 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                {t("freebies.notifyBtn")}
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Curated learning resources */}
      <section className="pb-16 px-6 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="label mb-2">{t("freebies.learnMore")}</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              {t("freebies.learnSectionTitle")}
            </h2>
            <p className="text-muted-foreground text-sm max-w-xl mx-auto">
              {t("freebies.learnSectionDesc")}
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {(["all", "design", "training", "development", "marketing"] as ResourceFilter[]).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setResourceFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  resourceFilter === cat
                    ? "bg-accent text-white shadow-md shadow-green-500/20"
                    : "bg-background border border-border text-muted-foreground hover:border-accent/30"
                }`}
              >
                {t(`resourceFilter.${cat}`)}
              </button>
            ))}
          </div>

          <div ref={resourcesGridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((resource, i) => {
              const Icon = resourceIcon(resource.type)
              return (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all hover:border-accent/30 hover:shadow-md hover:-translate-y-1"
                >
                  {resource.youtubeId && (
                    <div className="relative aspect-video bg-muted">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${resource.youtubeId}?rel=0&modestbranding=1`}
                        title={t(resource.titleKey)}
                        className="absolute inset-0 h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-5 gap-3">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-subtle text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                          {resourceCategoryLabel(resource.category, t)} · {resource.type}
                        </span>
                        <h3 className="font-semibold text-foreground leading-snug mt-0.5">{t(resource.titleKey)}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t(resource.descriptionKey)}</p>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
                    >
                      {resource.type === "youtube" ? t("freebies.watchYoutube") : t("freebies.openResource")}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {selectedFreebie && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedFreebie(null)
            setStatus("idle")
            setDownloadUrl(null)
          }}
        >
          <div
            className="bg-card text-card-foreground rounded-2xl p-8 max-w-md w-full shadow-2xl relative border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => {
                setSelectedFreebie(null)
                setStatus("idle")
                setDownloadUrl(null)
              }}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {status === "success" && downloadUrl ? (
              <div className="text-center py-2">
                <div className="w-14 h-14 bg-accent-subtle rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2">{t("freebies.successTitle")}</h3>
                <p className="text-muted-foreground text-sm lg:text-base mb-5">{t("freebies.successMsg")}</p>
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => downloadKind && triggerDownload(downloadUrl, downloadKind)}
                  className="btn-green mt-1 inline-flex"
                >
                  {downloadKind === "canva" ? t("freebies.openTemplate") : t("freebies.downloadNow")}
                </a>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t("freebies.emailCopy")} <b>{formData.email}</b>
                </p>
              </div>
            ) : (
              <>
                {selectedFreebie.bgImage ? (
                  <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={selectedFreebie.bgImage}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="text-2xl mb-2">{selectedFreebie.emoji}</div>
                )}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">{selectedFreebie.title}</h3>
                <p className="text-sm lg:text-base text-muted-foreground mb-4">{selectedFreebie.description}</p>
                <p className="text-xs text-muted-foreground mb-6">{t("freebies.afterSignup")}</p>

                <form onSubmit={handleUnlock} className="flex flex-col gap-3">
                  <input type="text" name="website" value={formData.website} readOnly tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
                  <input
                    type="text"
                    required
                    placeholder={t("freebies.namePlaceholder")}
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                  />
                  <input
                    type="email"
                    required
                    placeholder={t("freebies.emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="px-4 py-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
                  />
                  <p className="text-xs text-muted-foreground -mt-1">{t("freebies.privacyNote")}</p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 py-3.5 bg-accent hover:opacity-90 disabled:opacity-60 text-white font-semibold rounded-xl text-base transition-colors"
                  >
                    {status === "loading" ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        {t("freebies.getDownload")}
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-sm text-red-500 dark:text-red-400 text-center">{t("freebies.errorMsg")}</p>
                  )}
                  <p className="text-sm text-muted-foreground text-center">{t("freebies.privacy")}</p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default function FreebiesClient() {
  return (
    <Suspense fallback={<div className="py-32 text-center text-muted-foreground">Loading…</div>}>
      <FreebiesClientInner />
    </Suspense>
  )
}
