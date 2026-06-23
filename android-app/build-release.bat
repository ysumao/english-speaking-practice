@echo off
setlocal

set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.19.10-hotspot"
set "ANDROID_SDK_ROOT=D:\AndroidTools\sdk"
set "GRADLE_USER_HOME=D:\AndroidTools\gradle-cache-release"

copy /Y "..\script.js" "app\src\main\assets\www\script.js" >nul
copy /Y "..\style.css" "app\src\main\assets\www\style.css" >nul

call gradlew.bat --no-daemon assembleRelease
if errorlevel 1 exit /b %errorlevel%

if not exist "dist" mkdir "dist"
copy /Y "app\build\outputs\apk\release\app-release.apk" "dist\Daily-English-Practice-v1.0.1.apk" >nul

echo APK ready: dist\Daily-English-Practice-v1.0.1.apk
endlocal
