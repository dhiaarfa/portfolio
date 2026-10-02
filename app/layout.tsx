import type React from "react"
import type { Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Cairo, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import MotionProvider from "@/components/motion-provider"
import GlobalComponents from "@/components/global-components"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransitions } from "next-view-transitions"

// Typography (Sep 30): Inter is now the site's single principal typeface
// (replacing General Sans/Fontshare, which is no longer loaded anywhere --
// see globals.css for the --font-sans token this feeds). Cairo stays for
// Arabic, since Inter has no Arabic glyphs; Quicksand/Fraunces stay as
// deliberate decorative accents on specific hero elements, untouched.
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
})

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
  description:
    "Designer • Trainer • Developer based in Tunisia. 1,120+ participants trained, 477+ training hours across 51 events, 30+ hours of facilitation.",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dhia-portfolio.com",
    siteName: "Mohamed Dhia Arfa Portfolio",
    title: "Mohamed Dhia Arfa | Designer • Trainer • Developer",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: [
      {
        url: "/images/photos/dhia-og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Dhia Arfa, Designer, Trainer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Dhia Arfa | Designer • Trainer • Developer",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: ["/images/photos/dhia-og-image.png"],
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
      className={`scroll-smooth theme-transition ${inter.variable} ${cairo.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon-192.png" sizes="any" />
        {/* General Sans/Fontshare removed Sep 30 -- Inter (loaded via
            next/font/google above, self-hosted, no runtime request to
            Fontshare) is now the site's default typeface. See globals.css
            for the --font-sans token.
            Fraunces: italic serif accent used only for the rotating-role
            word in the homepage hero (per Dhia's reference screenshot, the
            "end to end." style italic flourish under a headline) -- kept as
            a deliberate exception. Quicksand was imported here but never
            actually applied anywhere in the codebase (no .font-* class or
            inline style referenced it), so it's dropped as dead weight
            rather than carried forward unused. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@1,500;1,600&display=swap"
        />
        <style>{`
          :root {
            ${cairo.variable};
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
              image: "https://www.dhia-portfolio.com/images/photos/dhia-og-image.png",
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
              // full Arabic locale (/ar routes, RTL layout, Cairo font) -- a
              // real contradiction between the schema and the actual site.
              inLanguage: ["en", "fr", "ar"],
              author: {
                "@type": "Person",
                name: "Mohamed Dhia Arfa",
              },
            }),
          }}
        />
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
