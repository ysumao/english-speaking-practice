@echo off
setlocal
cd /d "%~dp0"

set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.19.10-hotspot"
set "ANDROID_SDK_ROOT=D:\AndroidTools\sdk"
set "GRADLE_USER_HOME=D:\AndroidTools\gradle-cache-release"

copy /Y "..\script.js" "app\src\main\assets\www\script.js" >nul
if errorlevel 1 exit /b %errorlevel%
copy /Y "..\style.css" "app\src\main\assets\www\style.css" >nul
if errorlevel 1 exit /b %errorlevel%

call gradlew.bat --no-daemon assembleRelease
if errorlevel 1 exit /b %errorlevel%

if not exist "dist" mkdir "dist"
for /f "usebackq delims=" %%V in (`powershell -NoProfile -ExecutionPolicy Bypass -Command "Get-Date -Format 'yyyy.MM.dd-HHmmss'"`) do set "APK_VERSION=%%V"

copy /Y "app\build\outputs\apk\release\app-release.apk" "dist\Daily-English-Practice-latest.apk" >nul
if errorlevel 1 exit /b %errorlevel%
copy /Y "app\build\outputs\apk\release\app-release.apk" "dist\Daily-English-Practice-%APK_VERSION%.apk" >nul
if errorlevel 1 exit /b %errorlevel%

echo APK ready: dist\Daily-English-Practice-latest.apk
echo Versioned APK ready: dist\Daily-English-Practice-%APK_VERSION%.apk
endlocal
