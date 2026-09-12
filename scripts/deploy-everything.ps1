# deploy-everything.ps1
#
# Does every remaining step in one run: removes the orphan routes/components,
# flips the strict build flags, adds the CI workflow file, installs deps,
# builds (and stops here if the build fails - never deploys a broken build),
# commits + pushes to GitHub, then deploys to Vercel.
#
# Usage: open PowerShell, cd into your repo root (the folder with package.json
# in it), then run:
#   powershell -ExecutionPolicy Bypass -File scripts\deploy-everything.ps1
#
# Safe to re-run: every step checks before acting, so running this twice just
# reports "already done" for anything already handled.

$ErrorActionPreference = "Stop"
$repoRoot = (Get-Location).Path

if (-not (Test-Path (Join-Path $repoRoot "package.json"))) {
    Write-Host "ERROR: run this from your repo root (the folder with package.json in it)." -ForegroundColor Red
    exit 1
}

function Write-Step($msg) {
    Write-Host ""
    Write-Host "==> $msg" -ForegroundColor Cyan
}

# ---------------------------------------------------------------------------
Write-Step "1/6  Removing orphan routes and components"
# ---------------------------------------------------------------------------

$orphanRoutes = @(
    "app/3d-viewer",
    "app/products",
    "app/case-studies",
    "app/premium-redesign"
)

$orphanComponents = @(
    "components/logo-3d.tsx",
    "components/3d-showcase.tsx",
    "components/portfolio-3d-viewer.tsx",
    "components/product-showcase.tsx",
    "components/product-viewer.tsx",
    "components/premium-hero-section.tsx",
    "components/premium-glass-card.tsx",
    "components/premium-skills-card.tsx",
    "components/premium-experience-timeline.tsx",
    "components/bdaf-project-modal.tsx",
    "components/crit-project-modal.tsx",
    "components/about-agency.tsx",
    "components/about-section.tsx",
    "components/civic-work.tsx",
    "components/cta-section.tsx",
    "components/cursor-follower.tsx",
    "components/education.tsx",
    "components/engagement.tsx",
    "components/experience.tsx",
    "components/formations.tsx",
    "components/graphic-design-marketing.tsx",
    "components/graphic-portfolio.tsx",
    "components/hero-section.tsx",
    "components/organizations-section.tsx",
    "components/professional-profile.tsx",
    "components/services-section.tsx",
    "components/skills.tsx",
    "components/social-embeds-section.tsx",
    "components/sticky-cta-bar.tsx",
    "components/team-section.tsx",
    "components/testimonials-ticker.tsx",
    "components/trainer-capabilities.tsx",
    "components/trainer-testimonials-section.tsx",
    "components/training-impact-chart.tsx",
    "components/features.tsx",
    "components/portfolio.tsx",
    "components/services.tsx",
    "components/ui/aspect-ratio.tsx",
    "components/ui/context-menu.tsx"
)

$removedCount = 0
foreach ($route in $orphanRoutes) {
    $full = Join-Path $repoRoot $route
    if (Test-Path $full) { Remove-Item -Recurse -Force $full; $removedCount++ }
}
foreach ($comp in $orphanComponents) {
    $full = Join-Path $repoRoot $comp
    if (Test-Path $full) { Remove-Item -Force $full; $removedCount++ }
}
Write-Host "  removed $removedCount item(s) (0 means they were already gone - fine)" -ForegroundColor Green

# ---------------------------------------------------------------------------
Write-Step "2/6  Flipping next.config.js build flags to false"
# ---------------------------------------------------------------------------

$configPath = Join-Path $repoRoot "next.config.js"
$content = Get-Content -Raw $configPath
$newContent = $content -replace "ignoreDuringBuilds:\s*true", "ignoreDuringBuilds: false"
$newContent = $newContent -replace "ignoreBuildErrors:\s*true", "ignoreBuildErrors: false"
if ($newContent -ne $content) {
    Set-Content -Path $configPath -Value $newContent -NoNewline
    Write-Host "  next.config.js updated: both flags now false" -ForegroundColor Green
} else {
    Write-Host "  flags were already false - nothing to change" -ForegroundColor DarkGray
}

# ---------------------------------------------------------------------------
Write-Step "3/6  Adding the CI workflow file"
# ---------------------------------------------------------------------------

$workflowDir = Join-Path $repoRoot ".github/workflows"
$workflowPath = Join-Path $workflowDir "ci.yml"
if (Test-Path $workflowPath) {
    Write-Host "  .github/workflows/ci.yml already exists - leaving it alone" -ForegroundColor DarkGray
} else {
    New-Item -ItemType Directory -Force -Path $workflowDir | Out-Null
    $ciYaml = @'
name: CI

# Wires the existing scripts/test-*.mjs scripts into a real CI gate (checklist section 7.3).
# Runs on every push/PR to main: install -> static freebie/translation check -> build ->
# boot the built app -> smoke-test routes and the /api/contact endpoint against it.

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    env:
      NEXT_PUBLIC_SITE_URL: https://dhia-portfolio.com
      RESEND_API_KEY: ${{ secrets.RESEND_API_KEY }}
      CONTACT_RECEIVER: ${{ secrets.CONTACT_RECEIVER || 'test@example.com' }}
      DELIVERY_FROM: ${{ secrets.DELIVERY_FROM || 'Mohamed Dhia <hello@dhia-portfolio.com>' }}
      OPENROUTER_API_KEY: ${{ secrets.OPENROUTER_API_KEY }}
      OPENROUTER_MODEL: openai/gpt-4o-mini
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Validate freebies (static -- no server needed)
        run: npm run test:freebies

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Start built app in background
        run: npm run start -- -p 3000 &

      - name: Wait for server to come up
        run: |
          for i in $(seq 1 30); do
            if curl -sf http://localhost:3000/ > /dev/null; then
              echo "Server is up"
              exit 0
            fi
            sleep 1
          done
          echo "Server did not respond within 30s"
          exit 1

      - name: Smoke-test routes
        run: npm run test:routes -- http://localhost:3000

      - name: Test /api/contact
        run: npm run test:api -- http://localhost:3000
'@
    Set-Content -Path $workflowPath -Value $ciYaml -NoNewline
    Write-Host "  created .github/workflows/ci.yml" -ForegroundColor Green
}

# ---------------------------------------------------------------------------
Write-Step "4/6  Installing dependencies (npm install)"
# ---------------------------------------------------------------------------

npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "npm install failed - stopping here. Fix the error above before continuing." -ForegroundColor Red
    exit 1
}

# ---------------------------------------------------------------------------
Write-Step "5/6  Building (npm run build) - will stop here if this fails"
# ---------------------------------------------------------------------------

npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "BUILD FAILED. Not committing or deploying a broken build." -ForegroundColor Red
    Write-Host "Fix the error above, then re-run this script (it's safe to re-run)." -ForegroundColor Red
    exit 1
}
Write-Host "  build succeeded" -ForegroundColor Green

# ---------------------------------------------------------------------------
Write-Step "6/6  Committing, pushing, and deploying"
# ---------------------------------------------------------------------------

git add -A
$hasChanges = git status --porcelain
if ($hasChanges) {
    git commit -m "Security upgrade, accessibility/SEO fixes, orphan cleanup, and CI workflow"
    Write-Host "  committed" -ForegroundColor Green
    git push
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  git push failed - check your git remote/auth. Continuing to deploy anyway." -ForegroundColor Yellow
    } else {
        Write-Host "  pushed to GitHub" -ForegroundColor Green
    }
} else {
    Write-Host "  nothing to commit" -ForegroundColor DarkGray
}

Write-Host ""
Write-Host "Deploying to Vercel (production)..." -ForegroundColor Cyan
vercel --prod

Write-Host ""
Write-Host "All done. Once Vercel finishes, tell Claude the deploy is live and it'll run the full QA pass against the real site." -ForegroundColor Cyan
