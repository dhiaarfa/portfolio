export const dynamic = "error"

export default function ThreeDViewerPage() {
  // Temporarily disable the experimental 3D viewer on Netlify to avoid
  // runtime issues with the React/three.js stack in the server function.
  // This keeps the rest of the site (including contact emails) stable.
  return null
}
