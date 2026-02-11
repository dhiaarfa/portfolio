import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Inter, Poppins, Playfair_Display, Sora, IBM_Plex_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import CursorFollower from "@/components/cursor-follower"
import ScrollNavigation from "@/components/scroll-navigation"
import StickyCtaBar from "@/components/sticky-cta-bar"
import WhatsAppButton from "@/components/whatsapp-button"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const ibmMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
})

export const metadata = {
  metadataBase: new URL("https://v0-dev-team.vercel.app"),
  title: "Mohamed Dhia Arfa — Designer, Trainer & Developer | Tunisia",
  description:
    "Designer • Trainer • Developer based in Tunisia. 990+ participants trained, 450+ hours delivered, 30+ hours of facilitation, 10+ training cycles supervised.",
  keywords: "trainer, youth development, leadership, social justice, Tunisia, training programs",
  authors: [{ name: "Mohamed Dhia Arfa" }],
  creator: "Mohamed Dhia Arfa",
  publisher: "Mohamed Dhia Arfa",
  icons: {
    icon: [
      { url: "/favicon-green-portrait.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-green-portrait.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon-green-portrait.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mohamed Dhia Arfa | Designer • Trainer • Developer",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    url: "https://v0-dev-team.vercel.app",
    siteName: "Mohamed Dhia Arfa Portfolio",
    images: [
      {
        url: "/favicon-green-portrait.png",
        width: 512,
        height: 512,
        alt: "Mohamed Dhia Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Dhia Arfa | Designer • Trainer • Developer",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: ["/favicon-green-portrait.png"],
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
            ${inter.variable};
            ${poppins.variable};
            ${playfair.variable};
            ${sora.variable};
            ${ibmMono.variable};
          }
        `}</style>
      </head>
      <body className={cn("bg-background text-foreground font-sans antialiased transition-colors duration-300 overflow-x-hidden min-w-0")}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
          storageKey="theme-preference"
          forcedTheme={undefined}
          enableColorScheme={true}
          themes={["light", "dark"]}
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <CursorFollower />
            <ScrollNavigation />
            <StickyCtaBar />
            <WhatsAppButton />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
