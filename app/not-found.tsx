"use client"

import { Link } from "next-view-transitions"
import { Compass, Palette, Code2 } from "lucide-react"
import Navbar from "@/components/navbar-new"
import Footer from "@/components/footer"
import { useLanguage } from "@/components/language-provider"

export default function NotFound() {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main id="main-content" className="relative flex-1 flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        {/* Dot-network motif, echoing the homepage hero, a 404 is still a
            moment where a visitor is evaluating the site, so it gets the
            same visual language instead of a generic bare card. */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.16] bg-dot-grid"
          style={{
            maskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)",
            WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 40%, black, transparent)",
          }}
          aria-hidden
        />

        <div
          className="pointer-events-none absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-pink-400/50 animate-float"
          style={{ animationDelay: "0.3s" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[16%] top-[30%] h-2.5 w-2.5 rounded-full bg-amber-400/50 animate-float"
          style={{ animationDelay: "1.4s" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-[22%] bottom-[26%] h-3 w-3 rounded-full bg-blue-400/50 animate-float"
          style={{ animationDelay: "2.2s" }}
          aria-hidden
        />

        <div className="relative text-center max-w-lg">
          <div className="mb-5 flex justify-center">
            <span className="relative grid h-20 w-20 place-items-center rounded-full bg-accent-subtle animate-float">
              <Compass className="h-9 w-9 text-accent" />
            </span>
          </div>
          <p className="text-7xl sm:text-8xl font-display font-black text-accent mb-2 leading-none">404</p>
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            {t("notFoundHeading")}
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg mb-8 leading-relaxed">
            {t("notFoundDesc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            <Link
              href="/designer"
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-pink-300/60 hover:shadow-md"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400">
                <Palette className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{t("notFoundDesignLabel")}</span>
            </Link>
            <Link
              href="/trainer"
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-md"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400">
                <Compass className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{t("notFoundTrainingLabel")}</span>
            </Link>
            <Link
              href="/developer"
              className="group flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-md"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <Code2 className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">{t("notFoundWebDevLabel")}</span>
            </Link>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/" className="btn-green">
              {t("notFoundGoHome")}
            </Link>
            <Link href="/freebies" className="btn-outline">
              {t("notFoundFreeResources")}
            </Link>
            <Link href="/#contact" className="btn-outline">
              {t("contact")}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
