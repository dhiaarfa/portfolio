/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 only honours quality values listed here; anything else is
    // silently clamped. The hero (85) and project-stack covers (92) were
    // being served at the default 75.
    qualities: [75, 85, 92],
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
      { source: "/favicon.ico", destination: "/favicon-32.png", permanent: true },
      // About page was folded into Home (certs/education/experience now
      // live there as a compact "My Journey" card) — keep old links/
      // bookmarks/search results working instead of 404ing.
      { source: "/about", destination: "/", permanent: true },
      // Sep 30 SEO fix: /case-study/meetup-pro was a legacy standalone route
      // duplicating /work/meetup-pro (same project, different title/body,
      // both indexable -- a real duplicate-content problem an earlier audit
      // had already flagged and that was never actually fixed). The page
      // and its dedicated body component are deleted; this redirect covers
      // any bookmark, backlink, or search-indexed URL still pointing at it.
      { source: "/case-study/meetup-pro", destination: "/work/meetup-pro", permanent: true },
      // Sep 30 CRITICAL fix/revert: this host-based redirect (added earlier
      // the same day to force www -> apex) turned out to directly conflict
      // with Vercel's actual project domain configuration, which redirects
      // the OPPOSITE direction (apex -> www is the real primary domain,
      // confirmed live via curl). Together the two rules bounced every
      // single URL back and forth forever (apex -> www via Vercel -> apex
      // via this rule -> www via Vercel -> ...), a full site outage caught
      // right after deploying. Removed entirely; canonical URLs across the
      // codebase (lib/profile.ts SITE_URL, metadataBase, sitemap, robots)
      // were switched to www to match what Vercel actually serves instead.
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
  // Next 16 removed the `eslint` next.config.js key entirely — next build
  // (Turbopack) no longer runs ESLint at all, lint is a fully separate
  // `next lint` step (already wired into .github/workflows/ci.yml).
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
