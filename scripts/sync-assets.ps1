$ErrorActionPreference = "Continue"
$base = Join-Path $PSScriptRoot "..\public" | Resolve-Path
$paths = @(
  "logos/The-Source-TS-Monogram-Gold.png",
  "logos/The-Source-TS-Monogram-Ink-Black.png",
  "logos/The-Source-TS-Monogram-White.png",
  "brand/logo-mark.png",
  "brand/hero.jpg",
  "brand/hero.mp4",
  "brand/kit-open.jpg",
  "brand/og.jpg",
  "products-ts/glp3-r-30mg.png",
  "products-ts/bpc-157-20mg.png",
  "products-ts/tb500-20mg.png",
  "products-ts/nad-1000mg.png",
  "products-ts/glow-70mg.png",
  "products-ts/klow-80mg.png",
  "products-ts/mots-c-40mg.png",
  "products-ts/tesamorelin-20mg.png",
  "brand/hero-editorial.jpg",
  "atelier/tee-1.png",
  "atelier/tee-2.png",
  "atelier/tee-3.png",
  "atelier/tee-4.png",
  "atelier/tee-6.png",
  "atelier/hoodie-1.png",
  "atelier/hoodie-2.png",
  "atelier/hoodie-3.png",
  "atelier/beanie.png",
  "atelier/obj-duffel.png",
  "atelier/obj-tumbler.png",
  "atelier/obj-shaker.png",
  "atelier/obj-mug.png",
  "atelier/obj-towel.png",
  "atelier/obj-umbrella.png",
  "atelier/obj-coin.png"
)

$ok = 0
$fail = 0

foreach ($p in $paths) {
  $out = Join-Path $base $p
  $dir = Split-Path $out -Parent
  if (-not (Test-Path $dir)) {
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
  }

  $url = "https://thesource.gold/$p"
  try {
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 60
    $type = $response.Headers["Content-Type"]
    if ($type -notmatch "image|video") {
      Write-Warning "SKIP $p (content-type: $type)"
      $fail++
      continue
    }
    [IO.File]::WriteAllBytes($out, $response.Content)
    Write-Host "OK   $p"
    $ok++
  } catch {
    Write-Warning "FAIL $p"
    $fail++
  }
}

Write-Host ""
Write-Host "Synced $ok assets ($fail skipped) to $base"

$logoMark = Join-Path $base "brand\logo-mark.png"
if (Test-Path $logoMark) {
  $aliases = @(
    "logos\The-Source-TS-Monogram-Gold.png",
    "logos\The-Source-TS-Monogram-Ink-Black.png",
    "logos\The-Source-TS-Monogram-White.png"
  )
  foreach ($alias in $aliases) {
    $target = Join-Path $base $alias
    if (-not (Test-Path $target)) {
      $dir = Split-Path $target -Parent
      if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
      Copy-Item $logoMark $target -Force
      Write-Host "LINK $alias <- brand/logo-mark.png"
    }
  }
}

# Compress product vials to WebP for the Collection
$node = "D:\nodejs\node.exe"
if (Test-Path $node) {
  & $node (Join-Path $PSScriptRoot "optimize-assets.js")
}

if ($ok -eq 0) { exit 1 }
