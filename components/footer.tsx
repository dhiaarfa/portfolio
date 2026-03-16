"use client"

import Link from "next/link"
import { Mail, Linkedin, Instagram, Calendar, MapPin, Heart } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="w-full bg-slate-950 text-white">
      <div className="border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="label text-accent mb-1">{t("footerLetsWork")}</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug">
              {t("footerReadyProject")}
            </h3>
            <p className="text-slate-500 text-sm mt-1">{t("footerCallShort")}</p>
          </div>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-green flex-shrink-0 py-4 px-7 !rounded-2xl"
          >
            <Calendar className="w-5 h-5" /> {t("bookFreeConsultation")}
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 bg-accent rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-sm font-display">D</span>
            </div>
            <span className="font-display font-bold text-white text-sm">Mohamed Dhia</span>
          </div>
          <p className="text-slate-500 text-xs leading-relaxed mb-5">
            {t("footerDesc")}
          </p>
          <div className="flex gap-2.5">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-9 h-9 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-accent hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4">{t("navigationTitle")}</p>
          <ul className="space-y-2.5">
            <li><Link href="/" className="text-slate-400 hover:text-accent text-sm transition-colors">{t("home")}</Link></li>
            <li><Link href="/about" className="text-slate-400 hover:text-accent text-sm transition-colors">{t("about")}</Link></li>
            <li><Link href="/designer" className="text-slate-400 hover:text-accent text-sm transition-colors">{t("work")}</Link></li>
            <li><Link href="/trainer" className="text-slate-400 hover:text-accent text-sm transition-colors">{t("training")}</Link></li>
            <li><Link href="/developer" className="text-slate-400 hover:text-accent text-sm transition-colors">{t("webDevelopment")}</Link></li>
            <li><Link href="/freebies" className="text-slate-400 hover:text-accent text-sm transition-colors">{t("nav.freebies")}</Link></li>
            <li><Link href="/insights" className="text-slate-400 hover:text-accent text-sm transition-colors">{t("nav.insights")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4">{t("services")}</p>
          <ul className="space-y-2.5">
            {[t("footerService1"), t("footerService2"), t("footerService3"), t("footerService4"), t("footerService5"), t("bookConsultation")].map((s) => (
              <li key={s}><span className="text-slate-400 text-sm">{s}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-600 mb-4">{t("contact")}</p>
          <div className="space-y-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 text-slate-400 hover:text-accent text-sm transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0" /> {siteConfig.email}
            </a>
            <div className="flex items-center gap-2.5 text-slate-400 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0" /> {t("basedInTunisia")}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-green-400 text-xs font-medium">{t("availableForProjects")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-600 text-xs">
          <span>© 2026 Mohamed Dhia Arfa · {t("allRightsReserved")}</span>
          <span className="flex items-center gap-1">Built with <Heart className="w-3 h-3 text-green-600 mx-0.5 fill-[var(--site-accent)]" /> using Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
