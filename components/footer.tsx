"use client"

import Link from "next/link"
import { Mail, Linkedin, Instagram, Calendar } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer id="contact" className="w-full border-t border-border bg-card">
      {/* Calendly CTA Banner */}
      <div className="bg-[hsl(var(--zia-green))]/10 border-b border-[hsl(var(--zia-green))]/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-bold text-lg text-foreground">{siteConfig.ctaText}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {t("scheduleCallDescription")}
              </p>
            </div>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-[hsl(var(--zia-green))] text-background rounded-full font-semibold hover:opacity-90 transition-opacity shrink-0 touch-manipulation w-full sm:w-auto"
            >
              <Calendar className="h-4 w-4 shrink-0" />
              {t("bookFreeConsultation")}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 items-start">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Mohamed Dhia Arfa</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footerDesc")}
            </p>
            <a
              href={siteConfig.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-sm font-medium text-[hsl(var(--zia-green))] hover:underline"
            >
              {t("bookFreeConsultation")}
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">{t("navigationTitle")}</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="block py-2 hover:text-foreground transition-colors touch-manipulation">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="block py-2 hover:text-foreground transition-colors touch-manipulation">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/designer" className="block py-2 hover:text-foreground transition-colors touch-manipulation">
                  {t("design")}
                </Link>
              </li>
              <li>
                <Link href="/trainer" className="block py-2 hover:text-foreground transition-colors touch-manipulation">
                  {t("training")}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.trainingPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 hover:text-foreground transition-colors touch-manipulation"
                >
                  {t("trainingPortfolio")}
                </a>
              </li>
              <li>
                <Link href="/developer" className="block py-2 hover:text-foreground transition-colors touch-manipulation">
                  {t("webDevelopment")}
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 hover:text-foreground transition-colors touch-manipulation"
                >
                  {t("bookConsultation")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact - Update with correct contact information*/}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">{t("contact")}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <p className="text-sm">{t("basedInTunisia")}</p>
              </li>
            </ul>
          </div>

          {/* Social – Personal + Zia Studio */}
          <div className="space-y-4">
            <h4 className="font-semibold text-sm uppercase tracking-wide">{t("followTitle")}</h4>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs text-muted-foreground">{t("me")}</span>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-xs text-muted-foreground">Zia Studio</span>
                <a href={siteConfig.ziaStudioLinkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--zia-green))] hover:underline" aria-label="Zia Studio LinkedIn">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a href={siteConfig.ziaStudioInstagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-[hsl(var(--zia-green))] hover:underline" aria-label="Zia Studio Instagram">
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
              <Link href={`mailto:${siteConfig.email}`} className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Mohamed Dhia Arfa. {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
