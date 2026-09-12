# cleanup-orphans.ps1
#
# Deletes the 4 orphan routes + 39 orphan components confirmed safe to remove
# by a real npm install / next build / tsc / eslint run against a full copy
# of this repo (see the "Master Action Checklist", section 7). Every file
# listed here has zero live imports anywhere in app/, components/, lib/, or
# hooks/, and depends on npm packages that were never installed in the first
# place (@react-three/fiber, @react-three/drei, three, @radix-ui/react-aspect-ratio,
# @radix-ui/react-context-menu).
#
# After deleting, this script also flips next.config.js's ignoreDuringBuilds
# and ignoreBuildErrors flags from true to false, so ESLint/TypeScript errors
# are no longer silently swallowed on future builds. Do NOT run this script
# unless the deletions below have already happened (running it twice is
# harmless - it just reports nothing left to remove) and don't run it before
# reviewing the list once.
#
# Usage: open PowerShell in your repo root (the folder containing package.json)
# and run:
#   powershell -ExecutionPolicy Bypass -File scripts\cleanup-orphans.ps1
#
# Then verify with: npm run build
# Then commit: git add -A; git commit -m "Remove orphan 3D/premium-redesign routes and components"; git push

$ErrorActionPreference = "Stop"

$repoRoot = (Get-Location).Path
if (-not (Test-Path (Join-Path $repoRoot "package.json"))) {
    Write-Host "ERROR: run this from your repo root (the folder with package.json in it)." -ForegroundColor Red
    exit 1
}

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
$missingCount = 0

Write-Host "Removing orphan routes..." -ForegroundColor Cyan
foreach ($route in $orphanRoutes) {
    $full = Join-Path $repoRoot $route
    if (Test-Path $full) {
        Remove-Item -Recurse -Force $full
        Write-Host "  removed: $route" -ForegroundColor Green
        $removedCount++
    } else {
        Write-Host "  already gone: $route" -ForegroundColor DarkGray
        $missingCount++
    }
}

Write-Host ""
Write-Host "Removing orphan components..." -ForegroundColor Cyan
foreach ($comp in $orphanComponents) {
    $full = Join-Path $repoRoot $comp
    if (Test-Path $full) {
        Remove-Item -Force $full
        Write-Host "  removed: $comp" -ForegroundColor Green
        $removedCount++
    } else {
        Write-Host "  already gone: $comp" -ForegroundColor DarkGray
        $missingCount++
    }
}

Write-Host ""
Write-Host "Flipping next.config.js build flags to false..." -ForegroundColor Cyan
$configPath = Join-Path $repoRoot "next.config.js"
if (Test-Path $configPath) {
    $content = Get-Content -Raw $configPath
    $newContent = $content -replace "ignoreDuringBuilds:\s*true", "ignoreDuringBuilds: false"
    $newContent = $newContent -replace "ignoreBuildErrors:\s*true", "ignoreBuildErrors: false"
    if ($newContent -ne $content) {
        Set-Content -Path $configPath -Value $newContent -NoNewline
        Write-Host "  next.config.js updated: both flags now false" -ForegroundColor Green
        Select-String -Path $configPath -Pattern "ignoreDuringBuilds|ignoreBuildErrors" | ForEach-Object {
            Write-Host "    $($_.Line.Trim())" -ForegroundColor DarkGray
        }
    } else {
        Write-Host "  next.config.js: flags were already false (or not found in expected form) - check manually" -ForegroundColor Yellow
    }
} else {
    Write-Host "  ERROR: next.config.js not found at repo root" -ForegroundColor Red
}

Write-Host ""
Write-Host "Done. Removed $removedCount item(s), $missingCount already absent." -ForegroundColor Cyan
Write-Host "Next: run 'npm run build' to confirm everything is still clean, then commit and push." -ForegroundColor Cyan
