import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Poppins, Sora } from "next/font/google"
import { cn } from "@/lib/utils"
import MotionProvider from "@/components/motion-provider"
import GlobalComponents from "@/components/global-components"

// Optimized font loading: Reduced from 5 fonts to 2 (Sora + Poppins)
// This reduces font download from ~200KB+ to ~60KB and eliminates layout shift
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap", // Prevents FOIT (Flash of Invisible Text)
  preload: true,
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  preload: true,
})

export const metadata = {
  metadataBase: new URL("https://dhia-portfolio.me"),
  title: {
    default: "Mohamed Dhia Arfa — Designer, Trainer & Developer | Tunisia",
    template: "%s | Mohamed Dhia Arfa",
  },
  description:
    "Designer • Trainer • Developer based in Tunisia. 990+ participants trained, 450+ hours delivered, 30+ hours of facilitation, 10+ training cycles supervised.",
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
        url: "/favicon-green-portrait.png",
        width: 512,
        height: 512,
        alt: "Mohamed Dhia Arfa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Dhia Arfa | Designer • Trainer • Developer",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: ["/favicon-green-portrait.png"],
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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon-green-portrait.png" sizes="any" />
        <style>{`
          :root {
            ${poppins.variable};
            ${sora.variable};
          }
        `}</style>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
              image: "https://dhia-portfolio.me/images/photo-dhia.png",
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
      <body className={cn("bg-background text-foreground font-sans antialiased transition-colors duration-300 overflow-x-hidden min-w-0")}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light" 
          enableSystem
          storageKey="theme-preference"
          forcedTheme={undefined}
          enableColorScheme={true}
          themes={["light", "dark"]}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <MotionProvider>
              <GlobalComponents />
              {children}
            </MotionProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
