"use client"

import { ArrowRight, Instagram } from "lucide-react"

export default function SocialEmbedsSection({
  instagramProfileUrl,
  behanceProfileUrl,
}: {
  instagramProfileUrl: string
  behanceProfileUrl: string
}) {
  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href={instagramProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-pink-100 hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-400 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900 text-base mb-0.5">@zia.studioo</p>
              <p className="text-slate-400 text-sm">Follow the studio&apos;s creative work on Instagram</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-pink-500 group-hover:translate-x-1 transition-all duration-200" />
          </a>

          <a
            href={behanceProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 p-6 rounded-3xl border border-slate-100 shadow-card hover:shadow-card-hover hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 bg-white"
          >
            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">Bē</span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-slate-900 text-base mb-0.5">Behance Portfolio</p>
              <p className="text-slate-400 text-sm">Browse full case studies and brand projects</p>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-200" />
          </a>
        </div>
      </div>
    </section>
  )
}
