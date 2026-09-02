. D:\dev\dev-env.ps1
$env:PATH = "D:\nodejs;" + $env:PATH
Set-Location $PSScriptRoot

if ($args.Count -gt 0 -and $args[0] -eq "build") {
  node .\node_modules\next\dist\bin\next build
  exit $LASTEXITCODE
}

if ($args.Count -gt 0 -and $args[0] -eq "clean") {
  Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue |
    ForEach-Object { Stop-Process -Id $_.OwningProcess -Force -ErrorAction SilentlyContinue }
  Start-Sleep -Seconds 1
  if (Test-Path ".next") { Remove-Item -Recurse -Force ".next" }
  Write-Host "Cleared .next cache and stopped port 3000"
  exit 0
}

if ($args.Count -gt 0 -and $args[0] -eq "sync") {
  powershell -ExecutionPolicy Bypass -File .\scripts\sync-assets.ps1
  exit $LASTEXITCODE
}

node .\node_modules\next\dist\bin\next dev -p 3000
