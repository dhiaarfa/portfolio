/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
  
  // Redirects
  async redirects() {
    return [
      { source: "/favicon.ico", destination: "/favicon-green-portrait.png", permanent: true },
      // About page was folded into Home (certs/education/experience now
      // live there as a compact "My Journey" card) — keep old links/
      // bookmarks/search results working instead of 404ing.
      { source: "/about", destination: "/", permanent: true },
    ]
  },
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/freebies/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ]
  },
  
  // Build optimizations
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog"],
  },

  // app/api/og/route.tsx reads project photos straight off disk (avoids a
  // self-fetch that Vercel's deployment protection was intercepting) using
  // a runtime query-param path Next's tracer can't statically discover, so
  // the whole images folder is force-included in that function's bundle.
  outputFileTracingIncludes: {
    "/api/og": ["./public/images/**/*"],
  },
}

module.exports = nextConfig
