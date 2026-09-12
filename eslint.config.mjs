import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

// This project never had an ESLint config at all — `next lint` was prompting to set one
// up interactively, which is why `eslint.ignoreDuringBuilds: true` in next.config.js was
// silently hiding "there is no lint config" rather than any real lint errors. This is the
// standard config `next lint`'s own "Strict (recommended)" setup wizard generates.
const eslintConfig = [...compat.extends("next/core-web-vitals", "next/typescript")]

export default eslintConfig
