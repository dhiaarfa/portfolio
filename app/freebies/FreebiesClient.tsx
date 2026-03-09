"use client"

import { useState } from "react"
import { Download, Lock, CheckCircle, Palette, BookOpen, X } from "lucide-react"
import { freebies } from "@/lib/site-config"

type Category = "all" | "design" | "training"

interface FormData {
  name: string
  email: string
}

export default function FreebiesClient() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [selectedFreebie, setSelectedFreebie] = useState<(typeof freebies)[number] | null>(null)
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [unlockedIds, setUnlockedIds] = useState<string[]>([])

  const filtered = freebies.filter((f) => (activeCategory === "all" ? true : f.category === activeCategory))

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFreebie) return
    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: `Freebie download: ${selectedFreebie.title}`,
          message: `${formData.name} downloaded "${selectedFreebie.title}" from the freebies page.`,
          type: "freebie",
        }),
      })

      if (!res.ok) throw new Error("Failed")

      setUnlockedIds((prev) => [...prev, selectedFreebie.id])
      setStatus("success")

      setTimeout(() => {
        const link = document.createElement("a")
        link.href = selectedFreebie.file
        link.download = selectedFreebie.title
        link.click()
      }, 800)
    } catch {
      setStatus("error")
    }
  }

  const colorMap = {
    pink: {
      bg: "bg-pink-50 dark:bg-pink-950",
      border: "border-pink-100 dark:border-pink-900",
      icon: "text-pink-600 dark:text-pink-400",
      badge: "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300",
    },
    amber: {
      bg: "bg-amber-50 dark:bg-amber-950",
      border: "border-amber-100 dark:border-amber-900",
      icon: "text-amber-600 dark:text-amber-400",
      badge: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
    },
  } as const

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-12 px-6 text-center">
        <p className="text-sm font-semibold text-green-600 uppercase tracking-widest mb-3">Free Resources</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight">
          Free tools &amp; <span className="text-green-600">templates</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-base leading-relaxed">
          Real resources I use in my design and training work — yours free. Enter your name and email to download
          instantly.
        </p>

        <div className="flex justify-center gap-2 mt-8">
          {(["all", "design", "training"] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all capitalize ${
                activeCategory === cat
                  ? "bg-green-600 text-white shadow-md shadow-green-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat === "design" ? "Design" : cat === "training" ? "Training" : "All"}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((freebie) => {
            const colors = colorMap[freebie.color as keyof typeof colorMap]
            const isUnlocked = unlockedIds.includes(freebie.id)

            return (
              <div
                key={freebie.id}
                className={`relative rounded-2xl border p-6 flex flex-col gap-4 transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer ${colors.bg} ${colors.border}`}
                onClick={() => !isUnlocked && setSelectedFreebie(freebie)}
              >
                <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
                  {freebie.category === "design" ? "Design" : "Training"}
                </span>

                <div>
                  <div className="text-3xl mb-2">{freebie.emoji}</div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{freebie.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                    {freebie.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                  <span className="text-xs text-slate-400">{freebie.format}</span>
                  <span className={`text-xs font-medium ${colors.icon}`}>{freebie.value}</span>
                </div>

                {isUnlocked ? (
                  <a
                    href={freebie.file}
                    download
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download again
                  </a>
                ) : (
                  <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-slate-900 dark:bg-white hover:bg-slate-700 dark:hover:bg-slate-100 text-white dark:text-slate-900 text-sm font-semibold rounded-xl transition-colors">
                    <Lock className="w-3.5 h-3.5" />
                    Unlock free download
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Modal */}
      {selectedFreebie && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedFreebie(null)
            setStatus("idle")
          }}
        >
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setSelectedFreebie(null)
                setStatus("idle")
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-green-100 dark:bg-green-950 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">You're all set!</h3>
                <p className="text-slate-500 text-sm">Your download is starting now. Check your downloads folder.</p>
              </div>
            ) : (
              <>
                <div className="text-2xl mb-2">{selectedFreebie.emoji}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{selectedFreebie.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{selectedFreebie.description}</p>

                <form onSubmit={handleUnlock} className="flex flex-col gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-green-500"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:border-green-500"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-500 disabled:opacity-60 text-white font-semibold rounded-xl text-sm transition-colors"
                  >
                    {status === "loading" ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Get free download
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-xs text-red-500 text-center">
                      Something went wrong. Try again or contact me directly.
                    </p>
                  )}
                  <p className="text-xs text-slate-400 text-center">
                    No spam, ever. Just the resource you asked for.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

