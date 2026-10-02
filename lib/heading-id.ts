import type { ReactNode } from "react"
import { Children, isValidElement } from "react"

/** URL-fragment id for a heading. Keeps letters/digits in any script
 *  (Arabic and accented French headings get real anchors too). */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKC")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80)
}

/** Plain text of rendered markdown children (headings can contain **bold**). */
export function nodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node)
  if (Array.isArray(node)) return node.map(nodeText).join("")
  if (isValidElement<{ children?: ReactNode }>(node)) return nodeText(node.props.children)
  return Children.toArray(node).map(nodeText).join("")
}

/** "## Heading" lines of a markdown body, for the table of contents. */
export function markdownH2s(md: string): { text: string; id: string }[] {
  return [...md.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const text = m[1].replace(/\*\*|__|`/g, "").trim()
    return { text, id: headingId(text) }
  })
}
