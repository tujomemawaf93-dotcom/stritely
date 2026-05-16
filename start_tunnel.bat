@echo off
echo Downloading cloudflared.exe directly from GitHub...
powershell -Command "[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12; Invoke-WebRequest -Uri 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe' -OutFile 'cloudflared.exe'"
if exist cloudflared.exe (
    echo Download successful! Starting tunnel...
    .\cloudflared.exe tunnel --url http://localhost:3000
) else (
    echo Download failed. Please check your internet connection.
)
pause
