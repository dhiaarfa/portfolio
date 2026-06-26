/** Smoke-test main routes return 200 (dev or prod server must be running) */
const BASE = process.argv[2] || "http://localhost:3000"

const routes = [
  "/",
  "/about",
  "/designer",
  "/work/speranza-cafe",
  "/work/lone-space",
  "/trainer",
  "/developer",
  "/freebies",
  "/freebies?category=design",
  "/freebies?category=training",
  "/insights",
  "/insights/brand-colors-and-trust",
  "/insights/facilitation-mistakes-youth-workshops",
  "/insights/why-i-rebuilt-my-portfolio-in-nextjs",
  "/case-study/meetup-pro",
  "/freebies/brand-brief-template.pdf",
  "/this-route-should-404",
]

let ok = 0
let fail = 0

for (const route of routes) {
  try {
    const res = await fetch(`${BASE}${route}`, { redirect: "follow" })
    const expect404 = route.includes("should-404")
    const pass = expect404 ? res.status === 404 : res.status === 200
    if (pass) {
      console.log(`✓ ${route} → ${res.status}`)
      ok++
    } else {
      console.log(`✗ ${route} → ${res.status} (expected ${expect404 ? 404 : 200})`)
      fail++
    }
  } catch (e) {
    console.log(`✗ ${route} — ${e.message}`)
    fail++
  }
}

console.log(`\n${ok} passed, ${fail} failed`)
process.exit(fail > 0 ? 1 : 0)
