/** Escape user input before interpolating into HTML email templates. */
export function escHtml(value = ""): string {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  )
}
