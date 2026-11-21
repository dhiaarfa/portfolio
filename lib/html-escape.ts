/** Escape user input before interpolating into HTML email templates. */
export function escHtml(value = ""): string {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  )
}

/** JSON for an inline <script type="application/ld+json">. Escapes "<" so
 *  no string inside the data can ever close the script tag. */
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c")
}
