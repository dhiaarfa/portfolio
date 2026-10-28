/**
 * Validates published freebies have files, translation keys exist in all langs
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, "..")

// Dynamic import of TS catalog via reading the file isn't ideal - check PDFs manually
const catalogPath = path.join(root, "lib", "freebies.ts")
const catalogSrc = fs.readFileSync(catalogPath, "utf8")

const pdfPaths = [...catalogSrc.matchAll(/path:\s*"(\/freebies\/[^"]+\.pdf)"/g)].map((m) => m[1])
const publishedBlocks = catalogSrc.split("published: true").length - 1

console.log(`Published freebies (approx): ${publishedBlocks}`)
let missing = 0
for (const p of pdfPaths) {
  const file = path.join(root, "public", p.replace(/^\//, ""))
  if (!fs.existsSync(file)) {
    console.log(`✗ Missing PDF: ${p}`)
    missing++
  } else {
    const stat = fs.statSync(file)
    if (stat.size < 100) {
      console.log(`✗ PDF too small (empty?): ${p} (${stat.size} bytes)`)
      missing++
    } else {
      console.log(`✓ ${p} (${stat.size} bytes)`)
    }
  }
}

// Translation keys used in FreebiesClient
const freebiesClient = fs.readFileSync(path.join(root, "app", "freebies", "FreebiesClient.tsx"), "utf8")
const keys = [...freebiesClient.matchAll(/\bt\("([^"]+)"\)/g)].map((m) => m[1])
// The dictionaries live in lib/i18n/{en,fr,ar}.ts (lib/translations.ts is
// now only a re-export, so checking it flagged real keys as missing).
// Each key must exist in every language.
const dictionaries = Object.fromEntries(
  ["en", "fr", "ar"].map((l) => [l, fs.readFileSync(path.join(root, "lib", "i18n", `${l}.ts`), "utf8")]),
)

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
for (const key of [...new Set(keys)]) {
  // Keys appear both quoted ("freebie.x.title":) and bare (bookFreeConsultation:).
  const re = new RegExp(`(^|\\s)"?${escapeRe(key)}"?\\s*:`, "m")
  for (const [lang, src] of Object.entries(dictionaries)) {
    if (!re.test(src)) {
      console.log(`✗ Missing translation key in ${lang}: ${key}`)
      missing++
    }
  }
}
console.log(`✓ Checked ${keys.length} freebies translation keys`)

process.exit(missing > 0 ? 1 : 0)
