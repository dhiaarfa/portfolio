#!/usr/bin/env node
/**
 * Adds testimonial profile photos in one step.
 *
 *   node scripts/add-testimonial-photos.mjs <folder>
 *
 * Put the downloaded photos in <folder> (any of .jpg/.jpeg/.png/.webp), each
 * file named after the person: the testimonial id ("yassine.jpg") or any part
 * of their name ("Yassine Bahri.png", "oumaima-arfaoui.webp"). For every match
 * the script writes a 256x256 square JPEG to public/images/testimonials/<id>.jpg
 * and sets `photo` on that entry in lib/testimonials.ts. Files it cannot match
 * are listed so nothing is skipped silently. Safe to rerun.
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const dataFile = path.join(root, "lib/testimonials.ts")
const outDir = path.join(root, "public/images/testimonials")

const folder = process.argv[2]
if (!folder || !fs.existsSync(folder)) {
  console.error("Usage: node scripts/add-testimonial-photos.mjs <folder with the photos>")
  process.exit(1)
}

let source = fs.readFileSync(dataFile, "utf8")
const people = [...source.matchAll(/id: "([^"]+)",\s*\n\s*name: "([^"]+)"/g)].map(([, id, name]) => ({ id, name }))

const normalize = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim()
const findPerson = (file) => {
  const base = normalize(path.parse(file).name)
  return (
    people.find((p) => base === p.id || base.split(" ").includes(p.id)) ??
    people.find((p) => normalize(p.name).split(" ").some((part) => part.length > 2 && base.includes(part)))
  )
}

fs.mkdirSync(outDir, { recursive: true })
const unmatched = []
for (const file of fs.readdirSync(folder)) {
  if (!/\.(jpe?g|png|webp)$/i.test(file)) continue
  const person = findPerson(file)
  if (!person) {
    unmatched.push(file)
    continue
  }
  const target = path.join(outDir, `${person.id}.jpg`)
  await sharp(path.join(folder, file))
    .resize(256, 256, { fit: "cover", position: "attention" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(target)

  const photoPath = `/images/testimonials/${person.id}.jpg`
  const entry = new RegExp(`(id: "${person.id}",[\\s\\S]*?linkedin: "[^"]*",\\n)(\\s*)(?!photo:)`)
  if (!source.includes(`photo: "${photoPath}"`)) {
    source = source.replace(entry, (_, head, indent) => `${head}${indent}photo: "${photoPath}",\n${indent}`)
  }
  console.log(`${file} -> ${person.name} (${photoPath})`)
}

fs.writeFileSync(dataFile, source)
if (unmatched.length) console.log(`\nNot matched to anyone (rename to the person's name and rerun):\n  ${unmatched.join("\n  ")}`)
const missing = people.filter((p) => !source.includes(`photo: "/images/testimonials/${p.id}.jpg"`)).map((p) => p.name)
console.log(missing.length ? `\nStill without a photo: ${missing.join(", ")}` : "\nEvery testimonial has a photo.")
