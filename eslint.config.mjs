import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"

// Oct 2026: eslint-config-next 16 ships native flat configs. The previous
// setup wrapped them in @eslint/eslintrc's FlatCompat (the pre-16 pattern),
// which made `eslint .` crash on startup with "Converting circular structure
// to JSON" before linting a single file. Importing the flat configs directly
// is the Next 16 way and fixes that.
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // React Compiler rules bundled into eslint-plugin-react-hooks' recommended
  // set. This project doesn't enable the React Compiler (no reactCompiler in
  // next.config.js), and these flag the site's deliberate "read window /
  // localStorage once on mount" effects (theme, language, cursor, assistant
  // panel) -- refactoring ~12 of those blind risks hydration regressions.
  // Kept visible as warnings instead of failing CI; fix case by case.
  {
    rules: {
      "react-hooks/set-state-in-effect": "warn",
      "react-hooks/refs": "warn",
      "react-hooks/immutability": "warn",
      "react-hooks/purity": "warn",
    },
  },
  // Next 16 removed next lint's built-in ignore defaults (.next/, node_modules/,
  // build artifacts, etc.) along with the CLI wrapper itself, now that lint is a
  // plain `eslint .` call instead of a Next-aware command. Restoring them
  // explicitly here so a bare `eslint .` only checks real project source again.
  globalIgnores([
    ".next/**",
    "node_modules/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "**/*.log",
    "public/**",
    // Local, untracked media/video tooling -- not site source.
    "videos/**",
    "Claude outputs/**",
  ]),
])

export default eslintConfig
