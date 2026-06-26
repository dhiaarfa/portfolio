import fs from "fs"
import path from "path"

const dir = "public/images/icons"
const map = {
  adobeillustrator: "adobe-illustrator.svg",
  adobephotoshop: "adobe-photoshop.svg",
  adobeindesign: "indesign.svg",
  adobeaftereffects: "adobe-after-effects.svg",
  adobelightroomclassic: "adobe-lightroom.svg",
  canva: "canva.svg",
  openai: "openai.svg",
  midjourney: "midjourney.svg",
  slack: "slack.svg",
}

const entries = Object.entries(map).map(([slug, file]) => {
  const svg = fs.readFileSync(path.join(dir, file), "utf8").trim()
  return `  ${JSON.stringify(slug)}: ${JSON.stringify(svg)},`
})

const out = `/** Auto-generated inline SVGs (avoids ad-blockers on /images/icons/* URLs) */\nexport const LOCAL_ICON_SVGS: Record<string, string> = {\n${entries.join("\n")}\n}\n`
fs.writeFileSync("lib/local-icon-svgs.ts", out)
console.log("Wrote lib/local-icon-svgs.ts")
