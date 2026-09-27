import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

// This project never had an ESLint config at all — `next lint` was prompting to set one
// up interactively, which is why `eslint.ignoreDuringBuilds: true` in next.config.js was
// silently hiding "there is no lint config" rather than any real lint errors. This is the
// standard config `next lint`'s own "Strict (recommended)" setup wizard generates.
const eslintConfig = [
  // Next 16 removed next lint's built-in ignore defaults (.next/, node_modules/,
  // build artifacts, etc.) along with the CLI wrapper itself, now that lint is a
  // plain `eslint .` call instead of a Next-aware command. Restoring them
  // explicitly here so a bare `eslint .` only checks real project source again.
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "**/*.log",
      "public/**",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
]

export default eslintConfig
