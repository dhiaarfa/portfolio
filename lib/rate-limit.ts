type Bucket = { count: number; resetAt: number }

const buckets = new Map<string, Bucket>()

/** Simple in-memory rate limiter for serverless (resets on cold start). */
export function checkRateLimit(key: string, max = 12, windowMs = 60 * 60 * 1000): boolean {
  if (process.env.NODE_ENV === "development") return true
  const now = Date.now()
  const bucket = buckets.get(key)

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (bucket.count >= max) return false
  bucket.count += 1
  return true
}
