// Builds the freebie PDFs from scripts/freebies/<id>.html (Oct 2026).
//
// Replaces scripts/generate-freebie-pdfs.mjs, whose ASCII-only Helvetica
// output produced one-page stubs (~900 bytes each) that only LISTED what a
// guide would contain -- e.g. "20 Youth Icebreaker Activities" with no
// activities. These are real, branded, multi-page documents with full
// Unicode (French accents, Arabic).
//
// Prints each HTML file with a local Chromium-based browser (Edge or
// Chrome) in headless mode. Local tool, run on demand:
//   node scripts/build-freebie-pdfs.mjs            # all
//   node scripts/build-freebie-pdfs.mjs icebreakers-guide
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"

const root = path.dirname(fileURLToPath(import.meta.url))
const srcDir = path.join(root, "freebies")
const outDir = path.join(root, "..", "public", "freebies")

const candidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
].filter(Boolean)
const browser = candidates.find((p) => fs.existsSync(p))
if (!browser) throw new Error("No Edge/Chrome found; set CHROME_PATH.")

const only = process.argv[2]
const files = fs.readdirSync(srcDir).filter((f) => f.endsWith(".html") && (!only || f === `${only}.html`))
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "freebie-pdf-"))

for (const file of files) {
  const id = file.replace(/\.html$/, "")
  const out = path.join(outDir, `${id}.pdf`)
  execFileSync(browser, [
    "--headless=new",
    // Chromium refuses to start as root (cloud containers) without this.
    ...(process.getuid?.() === 0 ? ["--no-sandbox"] : []),
    "--disable-gpu",
    "--no-first-run",
    `--user-data-dir=${profile}`,
    "--no-pdf-header-footer",
    "--virtual-time-budget=8000",
    `--print-to-pdf=${out}`,
    pathToFileURL(path.join(srcDir, file)).href,
  ], { stdio: "ignore" })
  const bytes = fs.readFileSync(out)
  const pages = (bytes.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length
  console.log(`${id}.pdf  ${pages} page(s)  ${Math.round(bytes.length / 1024)} KB`)
}
fs.rmSync(profile, { recursive: true, force: true })
