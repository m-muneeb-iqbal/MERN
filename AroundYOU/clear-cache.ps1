# Clear Node.js and frontend/backend build caches

Write-Host "Cleaning frontend (React/Vite/Next.js)..."
if (Test-Path .\client\node_modules) {
    Remove-Item -Path .\client\node_modules -Recurse -Force
}
if (Test-Path .\client\build) {
    Remove-Item -Path .\client\build -Recurse -Force
}
if (Test-Path .\client\.next) {
    Remove-Item -Path .\client\.next -Recurse -Force
}
if (Test-Path .\client\dist) {
    Remove-Item -Path .\client\dist -Recurse -Force
}
if (Test-Path .\client\.vite) {
    Remove-Item -Path .\client\.vite -Recurse -Force
}
if (Test-Path .\client\node_modules\.cache) {
    Remove-Item -Path .\client\node_modules\.cache -Recurse -Force
}

Write-Host "Cleaning backend (Express/Node.js)..."
if (Test-Path .\server\node_modules) {
    Remove-Item -Path .\server\node_modules -Recurse -Force
}
if (Test-Path .\server\build) {
    Remove-Item -Path .\server\build -Recurse -Force
}
if (Test-Path .\server\dist) {
    Remove-Item -Path .\server\dist -Recurse -Force
}

Write-Host "✅ Cache cleanup complete!"
