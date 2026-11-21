type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()
const MAX_BUCKETS = 5000

/** Simple in-memory rate limiter for serverless (resets on cold start, and
 *  each warm instance counts separately). It stops casual abuse from one
 *  browser or script; for a hard guarantee add a Vercel Firewall rate-limit
 *  rule on /api/* in the dashboard. */
export function checkRateLimit(key: string, max = 12, windowMs = 60 * 60 * 1000): boolean {
  if (process.env.NODE_ENV === "development") return true
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now > bucket.resetAt) {
    // Keep the map bounded: an attacker rotating keys must not grow memory.
    if (buckets.size >= MAX_BUCKETS) {
      for (const [k, b] of buckets) if (now > b.resetAt) buckets.delete(k)
      if (buckets.size >= MAX_BUCKETS) buckets.clear()
    }
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (bucket.count >= max) return false
  bucket.count += 1
  return true
}

type HeaderReader = { headers: { get(name: string): string | null } }

/** Caller IP. x-vercel-forwarded-for and x-real-ip are set by the platform
 *  and cannot be forged by the client; x-forwarded-for is the fallback. */
export function clientIp(req: HeaderReader): string {
  return (
    req.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip")?.trim() ||
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    "unknown"
  )
}

const ALLOWED_HOSTS = new Set(["dhia-portfolio.com", "www.dhia-portfolio.com", "localhost", "127.0.0.1"])

/** Browsers always send Origin on a cross-site POST. Reject those that come
 *  from another site, so a third-party page cannot make visitors' browsers
 *  spend the chat budget or send mail through the forms. Requests without
 *  an Origin header (server-side scripts, the CI smoke test) pass here and
 *  are held by the rate limits instead. */
export function isAllowedOrigin(req: HeaderReader): boolean {
  const origin = req.headers.get("origin")
  if (!origin) return true
  try {
    const host = new URL(origin).hostname
    if (ALLOWED_HOSTS.has(host)) return true
    // Vercel preview deployments of this project.
    return host.endsWith(".vercel.app") && host === req.headers.get("host")?.split(":")[0]
  } catch {
    return false
  }
}
