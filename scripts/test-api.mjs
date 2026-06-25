/**
 * Adversarial + happy-path tests for POST /api/contact
 * Run: node scripts/test-api.mjs [baseUrl]
 */
const BASE = process.argv[2] || "http://localhost:3000"

const tests = [
  {
    name: "honeypot filled → silent success (no email)",
    body: { type: "freebie", name: "Bot", email: "bot@evil.com", freebieId: "brand-brief-template", website: "http://spam.com" },
    expectStatus: 200,
    expect: (d) => d.success === true || d.ok === true,
  },
  {
    name: "missing email → 400",
    body: { type: "freebie", freebieId: "brand-brief-template" },
    expectStatus: 400,
  },
  {
    name: "invalid email → 400",
    body: { type: "freebie", email: "not-an-email", freebieId: "brand-brief-template" },
    expectStatus: 400,
  },
  {
    name: "unknown freebie id → 404",
    body: { type: "freebie", email: "a@b.com", freebieId: "fake-id" },
    expectStatus: 404,
  },
  {
    name: "unpublished freebie (canva) → 404",
    body: { type: "freebie", email: "a@b.com", freebieId: "social-media-kit" },
    expectStatus: 404,
  },
  {
    name: "valid freebie → downloadUrl",
    body: { type: "freebie", name: "Test", email: "test@example.com", freebieId: "icebreakers-guide", website: "" },
    expectStatus: 200,
    expect: (d) => d.ok && d.downloadUrl && d.kind === "pdf",
  },
  {
    name: "XSS in name escaped in response (no crash)",
    body: { type: "freebie", name: '<script>alert(1)</script>', email: "x@y.com", freebieId: "trainer-checklist", website: "" },
    expectStatus: 200,
    expect: (d) => d.ok && d.downloadUrl,
  },
  {
    name: "empty JSON body → 400",
    body: {},
    expectStatus: 400,
  },
  {
    name: "contact without RESEND may 500 (expected if no key)",
    body: { type: "contact", name: "A", email: "a@b.com", subject: "Hi", message: "Hello" },
    expectStatus: [200, 500],
  },
]

let passed = 0
let failed = 0

for (const t of tests) {
  try {
    const res = await fetch(`${BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(t.body),
    })
    const data = await res.json().catch(() => ({}))
    const statuses = Array.isArray(t.expectStatus) ? t.expectStatus : [t.expectStatus]
    const statusOk = statuses.includes(res.status)
    const expectOk = t.expect ? t.expect(data) : true
    if (statusOk && expectOk) {
      console.log(`✓ ${t.name}`)
      passed++
    } else {
      console.log(`✗ ${t.name} — status ${res.status} (want ${statuses.join("|")})`, data)
      failed++
    }
  } catch (err) {
    console.log(`✗ ${t.name} — ${err.message}`)
    failed++
  }
}

console.log(`\n${passed} passed, ${failed} failed`)
process.exit(failed > 0 ? 1 : 0)
