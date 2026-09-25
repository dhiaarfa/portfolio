import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"

const W = 1200
const H = 630
const LEFT_W = 660
const BG = "#020617"
const ACCENT = "#99FF00"
const GRAY = "#94a3b8"

let fontsCache: { bold: Buffer; instrumentBold: Buffer; instrumentReg: Buffer } | null = null

async function loadFonts() {
  if (fontsCache) return fontsCache
  const dir = join(process.cwd(), "scripts", "fonts")
  const [bold, instrumentBold, instrumentReg] = await Promise.all([
    readFile(join(dir, "BricolageGrotesque-Bold.ttf")),
    readFile(join(dir, "InstrumentSans-Bold.ttf")),
    readFile(join(dir, "InstrumentSans-Regular.ttf")),
  ])
  fontsCache = { bold, instrumentBold, instrumentReg }
  return fontsCache
}

/**
 * Dynamic replacement for scripts/gen-og-images.py's static PNGs (Master
 * to-do list, Tier 6 — @vercel/og). Same dark/lime brand layout: a left
 * text panel (kicker, title, subhead, footer) and a right panel with the
 * project/hero image, vignetted into the dark background at the seam.
 * Query params mirror the old script's per-image dict: kicker, title,
 * subhead, image (a /public-relative path), small ("1" for the one case
 * study that used the smaller title size), top ("1" for portrait
 * screenshots that should crop from the top instead of the center).
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const kicker = searchParams.get("kicker") ?? ""
  const title = searchParams.get("title") ?? "Mohamed Dhia Arfa"
  const subhead = searchParams.get("subhead") ?? ""
  const image = searchParams.get("image") ?? "/images/photos/dhia-og-image.png"
  const small = searchParams.get("small") === "1"
  const top = searchParams.get("top") === "1"

  const { bold, instrumentBold, instrumentReg } = await loadFonts()
  // Resolve against the incoming request's own origin (not a hardcoded
  // SITE_URL) so this works from any host that actually serves the
  // request — the production domain, a Vercel preview/*.vercel.app
  // deployment, or localhost — without depending on DNS/domain config
  // elsewhere ever matching lib/profile.ts's SITE_URL constant.
  const origin = new URL(req.url).origin
  const imageUrl = image.startsWith("http") ? image : `${origin}${image}`

  return new ImageResponse(
    (
      <div style={{ width: W, height: H, display: "flex", background: BG }}>
        <div
          style={{
            width: LEFT_W,
            height: H,
            display: "flex",
            flexDirection: "column",
            padding: "64px",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", top: 118, left: 64, width: 56, height: 6, background: ACCENT, display: "flex" }} />
          <div
            style={{
              marginTop: 100,
              fontSize: 24,
              fontFamily: "InstrumentSans-Bold",
              color: ACCENT,
              textTransform: "uppercase",
              letterSpacing: 1,
              display: "flex",
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: small ? 46 : 54,
              fontFamily: "BricolageGrotesque-Bold",
              color: "#ffffff",
              lineHeight: 1.15,
              display: "flex",
              maxWidth: LEFT_W - 128,
            }}
          >
            {title}
          </div>
          {subhead ? (
            <div
              style={{
                marginTop: 18,
                fontSize: 25,
                fontFamily: "InstrumentSans-Regular",
                color: GRAY,
                lineHeight: 1.45,
                display: "flex",
                maxWidth: LEFT_W - 128,
              }}
            >
              {subhead}
            </div>
          ) : null}
          <div
            style={{
              position: "absolute",
              bottom: 96,
              left: 64,
              width: LEFT_W - 128,
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid #1e293b",
              paddingTop: 20,
            }}
          >
            <div style={{ fontSize: 25, fontFamily: "InstrumentSans-Bold", color: "#ffffff", display: "flex" }}>
              Mohamed Dhia Arfa
            </div>
            <div style={{ fontSize: 22, fontFamily: "InstrumentSans-Regular", color: GRAY, marginTop: 4, display: "flex" }}>
              dhia-portfolio.com
            </div>
          </div>
        </div>
        <div style={{ width: W - LEFT_W, height: H, display: "flex", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl}
            alt=""
            width={W - LEFT_W}
            height={H}
            style={{ objectFit: "cover", objectPosition: top ? "top" : "center" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              background: `linear-gradient(to right, ${BG} 0px, rgba(2,6,23,0) 220px)`,
            }}
          />
          <div style={{ position: "absolute", inset: 0, display: "flex", background: "rgba(2,6,23,0.16)" }} />
        </div>
      </div>
    ),
    {
      width: W,
      height: H,
      fonts: [
        { name: "BricolageGrotesque-Bold", data: bold, style: "normal", weight: 700 },
        { name: "InstrumentSans-Bold", data: instrumentBold, style: "normal", weight: 700 },
        { name: "InstrumentSans-Regular", data: instrumentReg, style: "normal", weight: 400 },
      ],
    }
  )
}
