$projectRoot = Split-Path -Parent $PSScriptRoot
$webRoot = Join-Path $PSScriptRoot "app\src\main\assets\www"

Copy-Item -LiteralPath (Join-Path $projectRoot "script.js") -Destination (Join-Path $webRoot "script.js") -Force
Copy-Item -LiteralPath (Join-Path $projectRoot "style.css") -Destination (Join-Path $webRoot "style.css") -Force

Write-Host "Synced script.js and style.css into the Android app."
