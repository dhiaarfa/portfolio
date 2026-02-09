import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Inter, Poppins, Playfair_Display, Sora, IBM_Plex_Mono } from "next/font/google"
import { cn } from "@/lib/utils"
import CursorFollower from "@/components/cursor-follower"
import ScrollNavigation from "@/components/scroll-navigation"

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
  title: "Mohamed Dhia Arfa - Trainer & Youth Development Expert",
  description:
    "Professional trainer specializing in youth development, leadership training, and social justice advocacy. 934+ trainees, 381+ training hours, 61 events.",
  keywords: "trainer, youth development, leadership, social justice, Tunisia, training programs",
  authors: [{ name: "Mohamed Dhia Arfa" }],
  creator: "Mohamed Dhia Arfa",
  publisher: "Mohamed Dhia Arfa",
  icons: {
    icon: [
      { url: "/favicon-green-portrait.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-green-portrait.png", sizes: "any" },
    ],
    apple: [{ url: "/favicon-green-portrait.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mohamed Dhia Arfa - Trainer & Youth Development Expert",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    url: "https://dhia-portfolio.me",
    siteName: "Mohamed Dhia Arfa Portfolio",
    images: [
      {
        url: "/icon-512.png",
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
    title: "Mohamed Dhia Arfa - Trainer & Youth Development Expert",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: ["/icon-512.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth shadow-lg">
      <head>
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
      <body className={cn("bg-background text-foreground font-sans antialiased transition-colors duration-300")}>
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
            <CursorFollower />
            <ScrollNavigation />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
