"use client"

import { useState } from "react"
import { Link } from "next-view-transitions"
import Image from "next/image"
import { Mail, Linkedin, Instagram, Calendar, Heart, Github, Check } from "lucide-react"
import { BasedInTunisia } from "@/components/based-in-tunisia"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()
  // "mailto:" links silently do nothing when the visitor's browser/OS has no
  // default mail client configured -- common on a lot of setups -- so this
  // link also copies the address to the clipboard, giving visible feedback
  // (a checkmark + "Copied") even when no mail app actually opens.
  const [emailCopied, setEmailCopied] = useState(false)
  async function handleAltEmailClick() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 1800)
    } catch {
      // Clipboard can fail (permissions, insecure context); the mailto: href
      // still fires as a normal link click either way.
    }
  }

  return (
    <footer id="contact" className="relative w-full bg-card text-foreground">
      {/* Seam fade: softens the hard edge between whatever section precedes
          the footer and its background (Master to-do, Tier 2). */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-28 -translate-y-full bg-gradient-to-b from-transparent to-background"
        aria-hidden
      />
      <div className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] bg-cover bg-center grayscale"
          style={{ backgroundImage: "url(/images/bg/bg-work-session.jpg)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: "radial-gradient(var(--site-accent) 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse 60% 100% at 100% 50%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 100% at 100% 50%, black, transparent)",
          }}
          aria-hidden
        />
        <div className="relative max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="label text-accent mb-1">{t("footerLetsWork")}</p>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-foreground leading-snug">
              {t("footerReadyProject")}
            </h3>
            <p className="text-muted-foreground text-sm mt-1">{t("footerCallShort")}</p>
          </div>
          <div className="flex-shrink-0 flex flex-col items-start sm:items-end gap-2.5">
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-green py-4 px-7 !rounded-2xl"
            >
              <Calendar className="w-5 h-5" /> {t("bookFreeConsultation")}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              onClick={handleAltEmailClick}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
            >
              {emailCopied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-green-600 dark:text-green-400" />
                  <span className="text-green-600 dark:text-green-400">{t("copiedLabel")} · {siteConfig.email}</span>
                </>
              ) : (
                <>
                  <Mail className="w-3.5 h-3.5" /> {t("footerAltCta")}
                </>
              )}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="relative w-8 h-8 rounded-xl overflow-hidden shrink-0 ring-1 ring-border">
              <Image src="/images/photos/nav-avatar.png" alt="" fill className="object-cover" aria-hidden />
            </div>
            <span className="font-display font-bold text-foreground text-sm">Mohamed Dhia</span>
          </div>
          <p className="text-muted-foreground text-xs leading-relaxed mb-5">
            {t("footerDesc")}
          </p>
          <div className="flex gap-2.5">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="w-9 h-9 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-white transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">{t("navigationTitle")}</p>
          <ul className="space-y-2.5">
            <li><Link href="/" className="text-muted-foreground hover:text-accent text-sm transition-colors">{t("home")}</Link></li>
            <li><Link href="/designer" className="text-muted-foreground hover:text-accent text-sm transition-colors">{t("branding")}</Link></li>
            <li><Link href="/trainer" className="text-muted-foreground hover:text-accent text-sm transition-colors">{t("training")}</Link></li>
            <li><Link href="/developer" className="text-muted-foreground hover:text-accent text-sm transition-colors">{t("nav.webDev")}</Link></li>
            <li><Link href="/freebies" className="text-muted-foreground hover:text-accent text-sm transition-colors">{t("nav.freebies")}</Link></li>
            <li><Link href="/insights" className="text-muted-foreground hover:text-accent text-sm transition-colors">{t("nav.insights")}</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">{t("services")}</p>
          <ul className="space-y-2.5">
            {[
              { label: t("footerService1"), href: "/designer#case-studies" },
              { label: t("footerService2"), href: "/designer#case-studies" },
              { label: t("footerService3"), href: "/trainer#training-offers" },
              { label: t("footerService4"), href: "/trainer#training-offers" },
              { label: t("footerService5"), href: "/developer#projects" },
              { label: t("bookConsultation"), href: siteConfig.calendlyUrl, external: true },
            ].map(({ label, href, external }) => (
              <li key={label}>
                {external ? (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                    {label}
                  </a>
                ) : (
                  <Link href={href} className="text-muted-foreground hover:text-accent text-sm transition-colors">
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold uppercase tracking-widest text-muted-foreground/70 mb-4">{t("contact")}</p>
          <div className="space-y-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2.5 text-muted-foreground hover:text-accent text-sm transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0" /> {siteConfig.email}
            </a>
            <div className="flex items-center gap-2.5 text-muted-foreground text-sm">
              <BasedInTunisia />
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                <span className="relative h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="text-green-600 dark:text-green-400 text-xs font-medium">{t("availableForProjects")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-muted-foreground text-xs">
          <span>© 2026 Mohamed Dhia Arfa · {t("allRightsReserved")}</span>
          <span className="flex items-center gap-1">Built with <Heart className="w-3 h-3 text-green-600 mx-0.5 fill-[var(--site-accent)]" /> using Next.js & Tailwind</span>
        </div>
      </div>
    </footer>
  )
}
