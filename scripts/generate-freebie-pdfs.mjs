import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, "..", "public", "freebies")

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
}

function buildPdf(title, lines) {
  const contentLines = [
    "BT",
    "/F1 16 Tf",
    "72 740 Td",
    `(${escapePdfText(title)}) Tj`,
    "0 -28 Td",
    "/F1 11 Tf",
  ]

  for (const line of lines) {
    contentLines.push(`(${escapePdfText(line)}) Tj`)
    contentLines.push("0 -16 Td")
  }
  contentLines.push("ET")

  const stream = contentLines.join("\n")
  const streamLen = Buffer.byteLength(stream, "utf8")

  const objects = []
  objects.push("1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj")
  objects.push("2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj")
  objects.push(
    "3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources<< /Font<< /F1 5 0 R >> >> >>endobj",
  )
  objects.push(`4 0 obj<< /Length ${streamLen} >>stream\n${stream}\nendstream endobj`)
  objects.push("5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj")

  let pdf = "%PDF-1.4\n"
  const offsets = [0]

  for (const obj of objects) {
    offsets.push(Buffer.byteLength(pdf, "utf8"))
    pdf += obj + "\n"
  }

  const xrefPos = Buffer.byteLength(pdf, "utf8")
  pdf += "xref\n"
  pdf += `0 ${objects.length + 1}\n`
  pdf += "0000000000 65535 f \n"
  for (let i = 1; i <= objects.length; i++) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`
  }
  pdf += "trailer<< /Size " + (objects.length + 1) + " /Root 1 0 R >>\n"
  pdf += "startxref\n" + xrefPos + "\n%%EOF"
  return pdf
}

const files = [
  {
    name: "brand-brief-template.pdf",
    title: "Brand Brief Template — Mohamed Dhia Arfa",
    lines: [
      "Project overview",
      "Background & context",
      "Business goal",
      "Target audience",
      "Brand personality & tone",
      "Competitors & references",
      "Deliverables & scope",
      "Timeline & success criteria",
      "dhia-portfolio.me",
    ],
  },
  {
    name: "color-psychology-guide.pdf",
    title: "Color Psychology Guide — Mohamed Dhia Arfa",
    lines: [
      "How color shapes brand perception",
      "Trust · growth · energy · calm · luxury",
      "12 ready palettes with HEX codes",
      "Check contrast before you ship",
      "Use roles: primary, secondary, accent, neutral",
      "dhia-portfolio.me",
    ],
  },
  {
    name: "workshop-plan-template.pdf",
    title: "Workshop Planning Template — Mohamed Dhia Arfa",
    lines: [
      "Session objectives & TNA notes",
      "Audience & group size",
      "Agenda with timings (Kolb cycle)",
      "Activities & materials",
      "Facilitator notes",
      "Evaluation & follow-up",
      "dhia-portfolio.me",
    ],
  },
  {
    name: "icebreakers-guide.pdf",
    title: "20 Youth Icebreaker Activities — Mohamed Dhia Arfa",
    lines: [
      "Name · group size · time · materials",
      "Step-by-step facilitation notes",
      "Debrief prompts included",
      "Tested with youth groups in Tunisia",
      "Arabic, French & English friendly",
      "dhia-portfolio.me",
    ],
  },
  {
    name: "trainer-checklist.pdf",
    title: "Pre-Training Checklist — Mohamed Dhia Arfa",
    lines: [
      "Room, tech & materials ready",
      "Participant comms sent",
      "Timing & contingencies planned",
      "Facilitation notes reviewed",
      "Follow-up scheduled",
      "30 checks before every session",
      "dhia-portfolio.me",
    ],
  },
]

fs.mkdirSync(outDir, { recursive: true })

for (const file of files) {
  const pdf = buildPdf(file.title, file.lines)
  fs.writeFileSync(path.join(outDir, file.name), pdf)
  console.log("Wrote", file.name)
}
