"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Download, Lock, CheckCircle, X, Mail } from "lucide-react"
import Link from "next/link"
import { PageTestimonials } from "@/components/page-testimonials"
import { publishedFreebies, type Freebie } from "@/lib/freebies"
import { useLanguage } from "@/components/language-provider"

type Category = "all" | "design" | "training"

interface FormData {
  name: string
  email: string
  website: string
}

function parseCategory(value: string | null): Category {
  if (value === "design" || value === "training") return value
  return "all"
}

function FreebiesClientInner() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const freebies = publishedFreebies()
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [selectedFreebie, setSelectedFreebie] = useState<Freebie | null>(null)
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", website: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [downloadKind, setDownloadKind] = useState<"pdf" | "canva" | null>(null)
  const [unlockedIds, setUnlockedIds] = useState<string[]>([])

  useEffect(() => {
    setActiveCategory(parseCategory(searchParams.get("category")))
  }, [searchParams])

  const filtered = freebies.filter((f) => (activeCategory === "all" ? true : f.category === activeCategory))

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
  } as const

  const categoryLabel = (cat: Category) => {
    if (cat === "design") return t("freebiesCategoryDesign")
    if (cat === "training") return t("freebiesCategoryTraining")
    return t("freebiesCategoryAll")
  }

  return (
    <>
      <section className="pt-[5.5rem] pb-12 px-6 text-center">
        <p className="label mb-3">{t("freebies.title")}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-foreground mb-4 leading-tight">
          {t("freebies.heroTitle")}{" "}
          <span className="text-accent">{t("freebies.heroHighlight")}</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto text-base lg:text-lg leading-relaxed">
          {t("freebies.subtitle")}
        </p>
        <p className="mt-4 text-sm font-medium text-accent">{t("freebies.socialProof")}</p>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {(["all", "design", "training"] as Category[]).map((cat) => (
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

      <section className="pb-8 px-6">
        <div className="max-w-5xl mx-auto">
          <PageTestimonials />
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center text-muted-foreground py-12">{t("freebies.empty")}</p>
          ) : (
            filtered.map((freebie) => {
              const colors = colorMap[freebie.color]
              const isUnlocked = unlockedIds.includes(freebie.id)

              return (
                <div
                  key={freebie.id}
                  className={`relative overflow-hidden rounded-2xl border flex flex-col transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer bg-card ${colors.border}`}
                  onClick={() => !isUnlocked && setSelectedFreebie(freebie)}
                >
                  {freebie.bgImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={freebie.bgImage}
                      alt=""
                      className="h-36 w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  ) : (
                    <div className={`h-36 w-full ${colors.bg} flex items-center justify-center text-4xl`}>
                      {freebie.emoji}
                    </div>
                  )}
                  <div className="relative z-10 flex flex-col gap-4 p-6 flex-1">
                  <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                    {freebie.category === "design" ? t("freebiesCategoryDesign") : t("freebiesCategoryTraining")}
                  </span>

                  <div>
                    <h3 className="font-bold text-foreground text-base lg:text-lg leading-snug">{freebie.title}</h3>
                    <p className="text-sm lg:text-base text-muted-foreground mt-2 leading-relaxed">{freebie.description}</p>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/60">
                    <span className="text-xs lg:text-sm text-muted-foreground">{freebie.format}</span>
                    <span className={`text-xs lg:text-sm font-medium ${colors.icon}`}>{freebie.benefit}</span>
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
                </div>
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 bg-accent hover:opacity-90 text-white text-sm font-semibold rounded-xl transition-colors"
              >
                {t("freebies.notifyBtn")}
              </Link>
            </div>
          )}
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
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={selectedFreebie.bgImage}
                    alt=""
                    className="w-full h-32 object-cover rounded-xl mb-4"
                  />
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
