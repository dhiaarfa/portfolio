import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Poppins, Playfair_Display } from "next/font/google"
import { cn } from "@/lib/utils"

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

export const metadata = {
  title: "Mohamed Dhia Arfa - Your Artist and Consultant",
  description:
    "Portfolio of Mohamed Dhia Arfa, graphic designer and trainer with 7+ years of experience. Specialized in visual creation, training, and digital marketing.",
  keywords: "Mohamed Dhia Arfa, graphic designer, trainer, portfolio, design, training, Tunisia",
  authors: [{ name: "Mohamed Dhia Arfa" }],
  creator: "Mohamed Dhia Arfa",
  publisher: "Mohamed Dhia Arfa",
  icons: {
    icon: [
      { url: "/md-favicon.ico", sizes: "any" },
      { url: "/md-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/md-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/md-apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Mohamed Dhia Arfa - Your Artist and Consultant",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    url: "https://v0-dev-team.vercel.app",
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
    title: "Mohamed Dhia Arfa - Your Artist and Consultant",
    description: "Professional portfolio of Mohamed Dhia Arfa - Expert graphic designer and trainer",
    images: ["/icon-512.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(inter.variable, poppins.variable, playfair.variable)}>
      <head>
        <link rel="icon" href="/md-favicon.ico" sizes="any" />
        <link rel="icon" href="/md-icon-192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/md-icon-512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/md-apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
      </head>
      <body className="font-inter">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
