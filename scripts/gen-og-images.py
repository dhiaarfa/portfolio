#!/usr/bin/env python3
"""
Generates real, correctly-sized (1200x630) branded OG/social-share images for:
  - the three pillar pages (/designer, /trainer, /developer)
  - all 8 published case studies under /work/[slug]

Root cause this fixes: PAGE_OG_IMAGES and WorkProject.heroImage were being
declared as 1200x630 in metadata while the actual files were arbitrary
screenshot/mockup aspect ratios (square, portrait, 4:3, etc.) — see checklist
§2.4/§2.6. This generates real 1200x630 files so the declared and actual
dimensions finally match, using the same dark/lime brand language as the
existing dhia-og-image.png (colors sampled directly from that file).

Run: python3 scripts/gen-og-images.py
Output: public/images/og/*.png
"""
import os
import textwrap
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, "public")
OUT_DIR = os.path.join(PUBLIC, "images", "og")
# Fonts ship in scripts/fonts/ (Bricolage Grotesque + Instrument Sans, both
# OFL-licensed — see the .txt files alongside them) so this script runs
# standalone on any machine, not just the environment it was written in.
FONT_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "fonts")

W, H = 1200, 630
LEFT_W = 660
BG = (2, 6, 23)  # slate-950 / #020617 — sampled from dhia-og-image.png
ACCENT = (153, 255, 0)  # #99FF00 — sampled from dhia-og-image.png
WHITE = (255, 255, 255)
GRAY = (148, 163, 184)  # slate-400

TITLE_FONT = ImageFont.truetype(os.path.join(FONT_DIR, "BricolageGrotesque-Bold.ttf"), 54)
TITLE_FONT_SM = ImageFont.truetype(os.path.join(FONT_DIR, "BricolageGrotesque-Bold.ttf"), 46)
KICKER_FONT = ImageFont.truetype(os.path.join(FONT_DIR, "InstrumentSans-Bold.ttf"), 24)
BODY_FONT = ImageFont.truetype(os.path.join(FONT_DIR, "InstrumentSans-Regular.ttf"), 25)
FOOTER_BOLD = ImageFont.truetype(os.path.join(FONT_DIR, "InstrumentSans-Bold.ttf"), 25)
FOOTER_REG = ImageFont.truetype(os.path.join(FONT_DIR, "InstrumentSans-Regular.ttf"), 22)


def wrap_by_width(draw, text, font, max_width):
    words = text.split()
    lines, cur = [], ""
    for w in words:
        trial = (cur + " " + w).strip()
        if draw.textlength(trial, font=font) <= max_width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def cover_crop(img, target_w, target_h):
    img = img.convert("RGB")
    src_ratio = img.width / img.height
    dst_ratio = target_w / target_h
    if src_ratio > dst_ratio:
        new_h = target_h
        new_w = int(new_h * src_ratio)
    else:
        new_w = target_w
        new_h = int(new_w / src_ratio)
    img = img.resize((new_w, new_h), Image.LANCZOS)
    left = (new_w - target_w) // 2
    top = (new_h - target_h) // 2
    return img.crop((left, top, left + target_w, top + target_h))


def make_card(out_name, kicker, title, subhead, image_path, title_font=TITLE_FONT, focus_top=False):
    canvas = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(canvas)

    # --- right panel: cover-cropped project/hero image ---
    right_w = W - LEFT_W
    thumb = Image.open(image_path)
    cropped = cover_crop(thumb, right_w, H)
    if focus_top:
        # re-crop biased to the top (useful for tall screenshots / portraits)
        thumb2 = thumb.convert("RGB")
        src_ratio = thumb2.width / thumb2.height
        dst_ratio = right_w / H
        if src_ratio > dst_ratio:
            new_h = H
            new_w = int(new_h * src_ratio)
        else:
            new_w = right_w
            new_h = int(new_w / src_ratio)
        thumb2 = thumb2.resize((new_w, new_h), Image.LANCZOS)
        left = (new_w - right_w) // 2
        cropped = thumb2.crop((left, 0, left + right_w, H))
    canvas.paste(cropped, (LEFT_W, 0))

    # soft dark vignette on the seam so the screenshot blends into the panel
    fade_w = 220
    gradient = Image.new("L", (fade_w, H), 0)
    gdraw = ImageDraw.Draw(gradient)
    for x in range(fade_w):
        alpha = int(255 * (1 - x / fade_w) ** 1.6)
        gdraw.line([(x, 0), (x, H)], fill=alpha)
    dark = Image.new("RGB", (fade_w, H), BG)
    canvas.paste(dark, (LEFT_W, 0), gradient)

    # subtle overall darken on the image panel for text-legibility/consistency
    overlay = Image.new("RGBA", (right_w, H), (2, 6, 23, 40))
    panel = canvas.crop((LEFT_W, 0, W, H)).convert("RGBA")
    panel = Image.alpha_composite(panel, overlay)
    canvas.paste(panel.convert("RGB"), (LEFT_W, 0))

    draw = ImageDraw.Draw(canvas)

    # --- left panel content ---
    pad = 64
    y = 118
    draw.rectangle([pad, y, pad + 56, y + 6], fill=ACCENT)
    y += 46

    draw.text((pad, y), kicker.upper(), font=KICKER_FONT, fill=ACCENT)
    y += 46

    title_lines = wrap_by_width(draw, title, title_font, LEFT_W - pad * 2)
    for line in title_lines[:3]:
        draw.text((pad, y), line, font=title_font, fill=WHITE)
        y += int(title_font.size * 1.12)
    y += 14

    if subhead:
        sub_lines = wrap_by_width(draw, subhead, BODY_FONT, LEFT_W - pad * 2)
        for line in sub_lines[:3]:
            draw.text((pad, y), line, font=BODY_FONT, fill=GRAY)
            y += int(BODY_FONT.size * 1.45)

    # footer
    footer_y = H - 96
    draw.line([(pad, footer_y - 24), (pad + LEFT_W - pad * 2, footer_y - 24)], fill=(30, 41, 59), width=1)
    draw.text((pad, footer_y), "Mohamed Dhia Arfa", font=FOOTER_BOLD, fill=WHITE)
    draw.text((pad, footer_y + 34), "dhia-portfolio.com", font=FOOTER_REG, fill=GRAY)

    os.makedirs(OUT_DIR, exist_ok=True)
    out_path = os.path.join(OUT_DIR, out_name)
    canvas.save(out_path, "PNG", optimize=True)
    print(f"wrote {out_path}  ({canvas.width}x{canvas.height})")


PILLARS = [
    dict(
        out_name="pillar-designer.png",
        kicker="Designer · Brand & Marketing",
        title="Mohamed Dhia Arfa",
        subhead="Design that sells — brand identity, campaigns, and marketing strategy for Tunisian brands.",
        image_path=os.path.join(PUBLIC, "images", "lone-space-gold.png"),
    ),
    dict(
        out_name="pillar-trainer.png",
        kicker="Trainer & Educator",
        title="Mohamed Dhia Arfa",
        subhead="I help NGOs, schools, and youth organizations run trainings that actually change behavior.",
        image_path=os.path.join(PUBLIC, "images", "photos", "dhia-trainer-hero.png"),
        focus_top=True,
    ),
    dict(
        out_name="pillar-developer.png",
        kicker="Developer · Full-Stack",
        title="Mohamed Dhia Arfa",
        subhead="Design-trained developer who ships. React, Next.js, Supabase.",
        image_path=os.path.join(PUBLIC, "images", "projects", "digimytch", "landing.png"),
        focus_top=True,
    ),
]

CASE_STUDIES = [
    dict(
        out_name="work-speranza-cafe.png",
        kicker="Case Study · Brand Identity",
        title="Speranza Café",
        subhead="Logo, packaging system, and social templates for a local café with a gold-and-cream visual language.",
        image_path=os.path.join(PUBLIC, "images", "445771850-916829483581375-1053755579034856379-n.png"),
    ),
    dict(
        out_name="work-lone-space.png",
        kicker="Case Study · Brand Identity",
        title="Lone Space",
        subhead="Full visual identity: logotype, gold foil system, business cards, and brand collateral.",
        image_path=os.path.join(PUBLIC, "images", "lone-space-gold.png"),
    ),
    dict(
        out_name="work-tafani-travel.png",
        kicker="Case Study · Brand Identity",
        title="Tafani Travel",
        subhead="Logo and brand system built for clarity across web, social, and travel collateral.",
        image_path=os.path.join(PUBLIC, "images", "tafani-white-png.png"),
    ),
    dict(
        out_name="work-meetup-pro.png",
        kicker="Case Study · Social Media",
        title="MeetUp Pro 1.0",
        subhead="Event identity, social campaign assets, and promotional design for a sold-out meetup.",
        image_path=os.path.join(PUBLIC, "images", "meetuppro-thumbnail.png"),
    ),
    dict(
        out_name="work-traveltodo-campaign.png",
        kicker="Case Study · Social Media",
        title="TravelTodo Campaign",
        subhead="Billboard, poster, and feed assets with a consistent campaign look across formats.",
        image_path=os.path.join(PUBLIC, "images", "billboard-48x14-ft-mockup-3.jpeg"),
    ),
    dict(
        out_name="work-digimytch.png",
        kicker="Case Study · Web Dev",
        title="DigiMyTech Talent Hub",
        subhead="Next.js app with Supabase auth/DB and OpenRouter LLM workflows baked into the product.",
        image_path=os.path.join(PUBLIC, "images", "projects", "digimytch", "landing.png"),
        focus_top=True,
        title_font=TITLE_FONT_SM,
    ),
    dict(
        out_name="work-crit-tunisie.png",
        kicker="Case Study · Web Dev",
        title="CRIT Tunisie",
        subhead="Production Next.js site clarifying services, job offers, and contact paths for talents and companies.",
        image_path=os.path.join(PUBLIC, "images", "projects", "crit", "home.png"),
        focus_top=True,
    ),
    dict(
        out_name="work-best-dates-fruits.png",
        kicker="Case Study · Web Dev",
        title="Best Dates and Fruits",
        subhead="Marketing site with product sections, seasonal storytelling, and clear contact conversion paths.",
        image_path=os.path.join(PUBLIC, "images", "bdaf-thumbnail.png"),
    ),
]

if __name__ == "__main__":
    for spec in PILLARS + CASE_STUDIES:
        make_card(**spec)
    print(f"\nDone — {len(PILLARS) + len(CASE_STUDIES)} images written to {OUT_DIR}")
