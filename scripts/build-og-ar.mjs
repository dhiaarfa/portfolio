// Builds the Arabic link-preview cards (Oct 2026) into public/og/ar/*.jpg.
//
// The live /api/og cards are drawn by Satori, which measures Arabic words
// before joining their letters: words come out unevenly spaced and lines
// drift off the right edge. These cards are instead laid out as HTML and
// captured with a local Chromium browser (real Arabic shaping), set in
// IBM Plex Sans Arabic (OFL, scripts/fonts), the site's Arabic font. Copy and images live in data/og-ar.json,
// which lib/page-metadata.ts also reads. Local tool, run on demand after
// changing that file:
//   node scripts/build-og-ar.mjs
import { execFileSync } from "node:child_process"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import sharp from "sharp"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const cards = JSON.parse(fs.readFileSync(path.join(root, "data", "og-ar.json"), "utf8"))
const outDir = path.join(root, "public", "og", "ar")
fs.mkdirSync(outDir, { recursive: true })

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

const fontUrl = (f) => pathToFileURL(path.join(root, "scripts", "fonts", f)).href
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

// Same layout and palette as app/api/og/route.tsx, mirrored for RTL:
// text panel on the right, photo on the left fading into the background.
const html = (c) => `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><style>
@font-face { font-family: Plex Arabic; font-weight: 400; src: url("${fontUrl("ibm-plex-sans-arabic-arabic-400-normal.woff2")}"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF; }
@font-face { font-family: Plex Arabic; font-weight: 700; src: url("${fontUrl("ibm-plex-sans-arabic-arabic-700-normal.woff2")}"); unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF; }
@font-face { font-family: Plex Arabic; font-weight: 400; src: url("${fontUrl("ibm-plex-sans-arabic-latin-400-normal.woff2")}"); unicode-range: U+0000-00FF, U+2000-206F; }
@font-face { font-family: Plex Arabic; font-weight: 700; src: url("${fontUrl("ibm-plex-sans-arabic-latin-700-normal.woff2")}"); unicode-range: U+0000-00FF, U+2000-206F; }
@font-face { font-family: Instrument; font-weight: 400; src: url("${fontUrl("InstrumentSans-Regular.ttf")}"); }
* { margin: 0; box-sizing: border-box; }
html, body { width: 1200px; height: 630px; overflow: hidden; background: #0A0A0A; }
body { display: flex; font-family: "Plex Arabic", sans-serif; }
.text { width: 660px; height: 630px; padding: 56px 64px; display: flex; flex-direction: column; }
.bar { width: 56px; height: 6px; background: #22c55e; }
.kicker { margin-top: 36px; font-size: 26px; font-weight: 700; color: #22c55e; }
.title { margin-top: 14px; font-size: ${c.title.length > 26 ? 50 : 58}px; font-weight: 700; color: #fff; line-height: 1.3; }
.sub { margin-top: 16px; font-size: 26px; color: #a3a3a3; line-height: 1.6; max-height: calc(26px * 1.6 * 3); overflow: hidden; }
.foot { margin-top: auto; border-top: 1px solid #262626; padding-top: 18px; }
.name { font-size: 26px; font-weight: 700; color: #fff; }
.site { font-family: Instrument, sans-serif; font-size: 22px; color: #a3a3a3; direction: ltr; text-align: right; }
.photo { position: relative; width: 540px; height: 630px; }
.photo img { width: 100%; height: 100%; object-fit: cover; object-position: ${c.top ? "top" : c.pos ?? "center"}; }
.photo::after { content: ""; position: absolute; inset: 0; background: linear-gradient(to left, #0A0A0A 0, rgba(10,10,10,0) 220px), rgba(10,10,10,0.12); }
</style></head><body>
<div class="text">
  <div class="bar"></div>
  <div class="kicker">${esc(c.kicker)}</div>
  <div class="title">${esc(c.title)}</div>
  <div class="sub">${esc(c.subhead)}</div>
  <div class="foot"><div class="name">محمد ضياء عرفة</div><div class="site">dhia-portfolio.com</div></div>
</div>
<div class="photo"><img src="${pathToFileURL(path.join(root, "public", c.image)).href}" alt=""></div>
</body></html>`

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "og-ar-"))
for (const c of Object.values(cards)) {
  const htmlPath = path.join(tmp, `${c.slug}.html`)
  const pngPath = path.join(tmp, `${c.slug}.png`)
  fs.writeFileSync(htmlPath, html(c))
  execFileSync(browser, [
    "--headless=new",
    // Chromium refuses to start as root (cloud containers) without this.
    ...(process.getuid?.() === 0 ? ["--no-sandbox"] : []),
    "--disable-gpu",
    "--hide-scrollbars",
    "--allow-file-access-from-files",
    `--user-data-dir=${path.join(tmp, "profile")}`,
    // Taller than the 630px card: headless Chromium on Linux takes the
    // window's own chrome out of this height, which cut the card's bottom
    // off. The card is cropped back to 1200x630 below.
    "--window-size=1200,800",
    "--virtual-time-budget=3000",
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).href,
  ])
  const out = path.join(outDir, `${c.slug}.jpg`)
  await sharp(pngPath).extract({ left: 0, top: 0, width: 1200, height: 630 }).jpeg({ quality: 84, mozjpeg: true }).toFile(out)
  console.log(`✓ ${path.relative(root, out)} (${Math.round(fs.statSync(out).size / 1024)} KB)`)
}
fs.rmSync(tmp, { recursive: true, force: true })
