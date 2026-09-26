import type React from "react"
import type { Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Cairo } from "next/font/google"
import { cn } from "@/lib/utils"
import MotionProvider from "@/components/motion-provider"
import GlobalComponents from "@/components/global-components"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ViewTransitions } from "next-view-transitions"

// Typography: General Sans via Fontshare is now the site's single principal
// typeface (replacing the earlier Clash Display + Satoshi pairing, per
// Dhia's reference screenshot of another portfolio's hero); Cairo for Arabic
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
})

export const metadata = {
  metadataBase: new URL("https://dhia-portfolio.com"),
  title: {
    default: "Mohamed Dhia Arfa, Designer, Trainer & Developer | Tunisia",
    template: "%s | Mohamed Dhia Arfa",
  },
  description:
    "Designer • Trainer • Developer based in Tunisia. 1,120+ participants trained, 477+ training hours across 51 events, 30+ hours of facilitation.",
  keywords: ["trainer", "youth development", "leadership", "graphic designer", "web developer", "Tunisia", "training programs", "CNFCPP certified"],
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
    icon: [
      { url: "/favicon-green-portrait.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-green-portrait.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon-green-portrait.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhia-portfolio.com",
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
      className={`scroll-smooth theme-transition ${cairo.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon-green-portrait.png" sizes="any" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&amp;display=swap"
        />
        {/* Quicksand: rounded, friendly display font used specifically for the
            homepage hero bio line (per Dhia's reference screenshot), kept
            separate from the site's General Sans typeface so it doesn't
            affect any other text on the site.
            Fraunces: italic serif accent used only for the rotating-role
            word in the homepage hero (per Dhia's second reference screenshot
           , the "end to end." style italic flourish under a headline). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Fraunces:ital,wght@1,500;1,600&display=swap"
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
            font-family: 'General Sans', var(--font-cairo), system-ui, sans-serif;
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
              jobTitle: "Designer, Trainer & Developer",
              url: "https://dhia-portfolio.com",
              image: "https://dhia-portfolio.com/images/photos/dhia-og-image.png",
              email: "mohameddhiaarfa@gmail.com",
              telephone: "+216-53-580-272",
              sameAs: [
                "https://www.linkedin.com/in/dhia-/",
                "https://behance.net/dhiaa",
                "https://github.com/dhiaarfa",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "TN",
                addressLocality: "Tunisia",
              },
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
              hasCredential: {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "CNFCPP Certified Trainer",
                recognizedBy: {
                  "@type": "Organization",
                  name: "CNFCPP",
                },
              },
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
              name: "Zia",
              slogan: "Design practice of Mohamed Dhia Arfa",
              url: "https://dhia-portfolio.com/designer",
              sameAs: [
                "https://www.linkedin.com/in/dhia-/",
                "https://behance.net/dhiaa",
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
              url: "https://dhia-portfolio.com",
              inLanguage: ["en", "fr"],
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
          storageKey="theme-preference"
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
