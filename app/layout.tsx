import type React from "react"
import type { Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Fraunces, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { formatStat } from "@/lib/profile"
import { DEFAULT_OG_IMAGE } from "@/lib/page-metadata"
import MotionProvider from "@/components/motion-provider"
import GlobalComponents from "@/components/global-components"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransitions } from "next-view-transitions"

// Typography (Sep 30): Inter is now the site's single principal typeface
// (replacing General Sans/Fontshare, which is no longer loaded anywhere --
// see globals.css for the --font-sans token this feeds). An Arabic face stays for
// Arabic, since Inter has no Arabic glyphs; Quicksand/Fraunces stay as
// deliberate decorative accents on specific hero elements, untouched.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

// Arabic (IBM Plex Sans Arabic, chosen Oct 2026 as the closest
// open-licensed match to Thmanyah) is self-hosted via @font-face in
// globals.css, not next/font, so it can be preloaded on /ar pages only.

// Oct 2026: moved from a render-blocking Google Fonts <link> in <head> to
// next/font (self-hosted, no runtime request, no layout shift), matching
// Inter and the Arabic font above. Used only by .font-accent-italic in globals.css.
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["500", "600"],
  variable: "--font-fraunces",
  display: "swap",
  preload: false,
})

// Result-first fallback description (was a stats-only line). Pages with
// their own metadata override it.
const SITE_DESCRIPTION = `Graphic designer, CNFCPP-certified trainer and web developer in Tunisia: brand identity, trainings for ${formatStat("participantsTrained")} participants, and fast trilingual websites.`

export const metadata = {
  // Sep 30 CRITICAL fix: see lib/profile.ts's SITE_URL comment -- Vercel
  // actually serves www as the primary domain and redirects apex into it,
  // the opposite of what this (and every other canonical URL here) assumed,
  // which produced a live infinite redirect loop on every page.
  metadataBase: new URL("https://www.dhia-portfolio.com"),
  title: {
    default: "Mohamed Dhia Arfa, Designer, Trainer & Developer | Tunisia",
    template: "%s | Mohamed Dhia Arfa",
  },
  description: SITE_DESCRIPTION,
  // Sep 30 SEO expansion: added real technology, field, and organization
  // terms actually used/mentioned across the site (lib/work.ts tools,
  // lib/profile.ts certifications/experience, lib/organization-logos.ts)
  // so the site has a chance to rank for those searches too, not just
  // "Mohamed Dhia Arfa" -- per Dhia's explicit ask.
  keywords: [
    "trainer",
    "youth development",
    "leadership",
    "graphic designer",
    "web developer",
    "Tunisia",
    "training programs",
    "CNFCPP certified",
    "facilitation",
    "non-formal education",
    "brand identity",
    "UI/UX design",
    "Next.js developer",
    "React developer",
    "TypeScript",
    "Supabase",
    "Adobe Illustrator",
    "Zia Studio",
    "AIESEC",
    "IFMSA",
    "Association Youth Clubs",
  ],
  authors: [{ name: "Mohamed Dhia Arfa" }],
  creator: "Mohamed Dhia Arfa",
  publisher: "Mohamed Dhia Arfa",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    // Properly-sized variants (2.5KB/49KB/44KB) instead of serving the
    // full 1024x1024 source (1.17MB) for every icon slot regardless of
    // the size actually requested -- found during a performance sweep.
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  // Site-wide fallback preview (pages without their own metadata, e.g.
  // 404s). Oct 2026: was the old static navy/lime PNG and generic copy;
  // now the same live home card and positioning as the homepage.
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dhia-portfolio.com",
    siteName: "Mohamed Dhia Arfa Portfolio",
    title: "Mohamed Dhia Arfa | Designer · Trainer · Web Developer",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Dhia Arfa | Designer · Trainer · Web Developer",
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ViewTransitions>
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`scroll-smooth theme-transition ${inter.variable} ${fraunces.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon-192.png" sizes="any" />
        {/* General Sans/Fontshare removed Sep 30 -- Inter (loaded via
            next/font/google above, self-hosted, no runtime request to
            Fontshare) is now the site's default typeface. See globals.css
            for the --font-sans token.
            Fraunces (the italic serif on the hero role line) now loads via
            next/font above instead of a Google Fonts <link> here.
            Quicksand was imported here but never actually applied anywhere
            in the codebase, so it was dropped as dead weight. */}
        {/* The :root block used to start with `${arabic.variable};` -- that
            interpolates a CLASS NAME, not a declaration, so browsers just
            discarded it. Removed; the variable is applied via className. */}
        <style>{`
          :root {
            --background: 0 0% 100%;
            --foreground: 0 0% 5%;
            --zia-lime: 84 100% 50%;
            --zia-green: 142 70% 45%;
          }
          .dark {
            --background: 0 0% 4%;
            --foreground: 0 0% 96%;
          }
          body {
            background-color: hsl(var(--background));
            color: hsl(var(--foreground));
          }
        `}</style>
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
        {/* Advanced SEO Meta Tags */}
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="geo.region" content="TN" />
        <meta name="geo.placename" content="Tunisia" />
        <meta name="language" content="en,fr,ar" />
        <meta name="author" content="Mohamed Dhia Arfa" />
        <meta name="copyright" content="Mohamed Dhia Arfa" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        
        {/* Enhanced Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Mohamed Dhia Arfa",
              alternateName: "Dhia Arfa",
              jobTitle: ["Graphic Designer", "Certified Trainer", "Web Developer"],
              url: "https://www.dhia-portfolio.com",
              image: "https://www.dhia-portfolio.com/images/photos/dhia-hero-green.jpg",
              email: "mohameddhiaarfa@gmail.com",
              telephone: "+216-53-580-272",
              // Master roadmap 4.3 (Oct 2026): all four confirmed by Dhia as
              // his real public profiles (Instagram is the Zia Studio account,
              // linked here at his request).
              sameAs: [
                "https://www.linkedin.com/in/dhia-/",
                "https://www.behance.net/dhiaa",
                "https://github.com/dhiaarfa",
                "https://www.instagram.com/zia.studioo/",
              ],
              // addressLocality used to be "Tunisia" -- a country, not a
              // locality. Country alone is accurate.
              address: {
                "@type": "PostalAddress",
                addressCountry: "TN",
              },
              // Zia Studio is his own design brand, not a separate employer,
              // so `brand` (a valid Person property) rather than `worksFor`.
              brand: { "@type": "Brand", name: "Zia Studio", url: "https://www.dhia-portfolio.com/designer" },
              // Expanded Sep 30 with real technologies/fields already used
              // elsewhere on the site (lib/work.ts tools, /developer,
              // /designer) -- entity/topic breadth for search, not just
              // Dhia's name.
              knowsAbout: [
                "Graphic Design",
                "Training & Education",
                "Web Development",
                "Youth Development",
                "Leadership",
                "Brand Identity",
                "UI/UX Design",
                "React",
                "Next.js",
                "TypeScript",
                "Supabase",
                "Non-Formal Education",
                "Facilitation",
                "Adobe Illustrator",
                "Adobe Photoshop",
                "Figma",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Higher Institute of Technological Studies (ISET)",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Sousse",
                  addressCountry: "TN",
                },
              },
              // Expanded Sep 30 from a single CNFCPP entry to every real,
              // verified certification in lib/profile.ts's `certifications`
              // array -- same source of truth already used on /trainer and
              // the about page, not new/invented data.
              hasCredential: [
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "National Certified Trainer",
                  recognizedBy: { "@type": "Organization", name: "CNFCPP" },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Certified Trainer",
                  recognizedBy: { "@type": "Organization", name: "Association YOUTH CLUBs" },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Social Media Marketing",
                  recognizedBy: { "@type": "Organization", name: "HubSpot Academy" },
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  credentialCategory: "Green Digital Skills",
                  recognizedBy: { "@type": "Organization", name: "INCO Academy" },
                },
              ],
              // New Sep 30: real civic/NGO affiliation from lib/profile.ts's
              // `civicExperience` (AIESEC in Lebanon, Dec 2023-Jun 2024) --
              // gives search engines a genuine entity link to AIESEC.
              memberOf: [{ "@type": "Organization", name: "AIESEC" }],
            }),
          }}
        />
        
        {/* Brand Schema, "Zia" is Mohamed Dhia Arfa's personal design/creative brand name,
            not a separately founded company, so this uses schema.org Brand (not Organization
            with a "founder" relationship) to avoid implying a legal entity that doesn't exist. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Brand",
              // The site calls it "Zia Studio" everywhere visible; "Zia" kept
              // as the alternate name.
              name: "Zia Studio",
              alternateName: "Zia",
              slogan: "Design practice of Mohamed Dhia Arfa",
              url: "https://www.dhia-portfolio.com/designer",
              sameAs: [
                "https://www.instagram.com/zia.studioo/",
                "https://www.linkedin.com/company/104318935",
                "https://www.behance.net/dhiaa",
              ],
            }),
          }}
        />

        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Mohamed Dhia Arfa Portfolio",
              url: "https://www.dhia-portfolio.com",
              // Fixed Sep 30: this was missing "ar" even though the site has a
              // full Arabic locale (/ar routes, RTL layout, Arabic font) -- a
              // real contradiction between the schema and the actual site.
              inLanguage: ["en", "fr", "ar"],
              author: {
                "@type": "Person",
                name: "Mohamed Dhia Arfa",
              },
            }),
          }}
        />
        {/* Without JavaScript the scroll-in animations never run, so sections
            server-rendered at opacity 0 (framer-motion's initial state) would
            stay invisible. Show them as-is instead. */}
        <noscript>
          <style>{`[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className={cn("antialiased overflow-x-hidden min-w-0 font-body")} style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          // Bumped Oct 1 per Dhia's "make dark mode default, it's better"
          // ask: defaultTheme flipped back to dark (it was briefly light,
          // see the v2 note below, from an earlier "restore light as
          // default" request). Bumping the storage key again invalidates
          // every visitor's previously-stored "light" value -- including
          // anyone who got the light default under v2 and never
          // explicitly chose a theme -- so everyone falls back to the new
          // real default (dark) once; the toggle itself still works and
          // persists normally from here on under the new key.
          storageKey="theme-preference-v3"
          enableColorScheme={true}
          themes={["light", "dark"]}
          disableTransitionOnChange={false}
        >
          <Toaster richColors position="bottom-center" />
          <LanguageProvider>
            <MotionProvider>
              {children}
              <GlobalComponents />
              <Analytics />
              <SpeedInsights />
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
    </ViewTransitions>
  )
}
