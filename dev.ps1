$env:PATH = "D:\nodejs;" + $env:PATH
Set-Location $PSScriptRoot\..

if ($args.Count -gt 0 -and $args[0] -eq "build") {
  node .\node_modules\next\dist\bin\next build
  exit $LASTEXITCODE
}

if ($args.Count -gt 0 -and $args[0] -eq "sync") {
  powershell -ExecutionPolicy Bypass -File .\scripts\sync-assets.ps1
  exit $LASTEXITCODE
}

node .\node_modules\next\dist\bin\next dev -p 3000
