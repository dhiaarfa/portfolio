import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Syne, DM_Serif_Display, DM_Sans, Cairo } from "next/font/google"
import { cn } from "@/lib/utils"
import MotionProvider from "@/components/motion-provider"
import GlobalComponents from "@/components/global-components"
import { SpeedInsights } from "@vercel/speed-insights/next"

// Typography system:
// - Syne: display / hero headlines
// - DM Serif Display: section headings
// - DM Sans: body & UI text
// - Cairo: Arabic / RTL content
const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "optional",
  preload: true,
})

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  style: ["normal"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
  preload: false,
})

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: false,
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
  preload: false,
})

export const metadata = {
  metadataBase: new URL("https://dhia-portfolio.me"),
  title: {
    default: "Mohamed Dhia Arfa — Designer, Trainer & Developer | Tunisia",
    template: "%s | Mohamed Dhia Arfa",
  },
  description:
    "Designer • Trainer • Developer based in Tunisia. 1000+ participants trained, 450+ hours delivered, 30+ hours of facilitation, 10+ training cycles supervised.",
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
    url: "https://dhia-portfolio.me",
    siteName: "Mohamed Dhia Arfa Portfolio",
    title: "Mohamed Dhia Arfa | Designer • Trainer • Developer",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: [
      {
        url: "/images/photos/dhia-main.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Dhia Arfa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Dhia Arfa | Designer • Trainer • Developer",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: ["/images/photos/dhia-main.png"],
  },
  alternates: {
    canonical: "https://dhia-portfolio.me",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`scroll-smooth ${syne.variable} ${dmSerifDisplay.variable} ${dmSans.variable} ${cairo.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon-green-portrait.png" sizes="any" />
        <style>{`
          :root {
            ${syne.variable};
            ${dmSerifDisplay.variable};
            ${dmSans.variable};
            ${cairo.variable};
            --background: 0 0% 100%;
            --foreground: 0 0% 5%;
            --zia-green: 142 70% 45%;
          }
          .dark {
            --background: 0 0% 7%;
            --foreground: 0 0% 96%;
          }
          body {
            background-color: hsl(var(--background));
            color: hsl(var(--foreground));
            font-family: var(--font-syne), var(--font-dm-sans), system-ui, sans-serif;
          }
        `}</style>
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
        {/* Advanced SEO Meta Tags */}
        <meta name="theme-color" content="#29A368" />
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
              url: "https://dhia-portfolio.me",
              image: "https://dhia-portfolio.me/images/photos/dhia-main.png",
              email: "mohameddhiaarfa@gmail.com",
              telephone: "+216-53-580-272",
              sameAs: [
                "https://www.linkedin.com/in/dhia-/",
                "https://behance.net/dhiaa",
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
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zia Studio",
              url: "https://dhia-portfolio.me/designer",
              founder: {
                "@type": "Person",
                name: "Mohamed Dhia Arfa",
              },
              sameAs: [
                "https://www.linkedin.com/in/dhia-/",
                "https://behance.net/dhiaa",
              ],
            }),
          }}
        />
      </head>
      <body className={cn("font-sans antialiased bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 overflow-x-hidden min-w-0")} style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem={false}
          storageKey="theme-preference"
          enableColorScheme={true}
          themes={["light", "dark"]}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <MotionProvider>
              {children}
              <GlobalComponents />
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
