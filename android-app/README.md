# Daily English Practice Android App

Offline Android wrapper for the English speaking review dashboard.

## Build

1. Set `JAVA_HOME` to JDK 17.
2. Set `ANDROID_SDK_ROOT` to an Android SDK containing platform 35.
3. Create `local.properties` with the SDK path.
4. Run `gradlew.bat assembleDebug`.

On the configured development machine, run `build-release.bat` to sync the latest lessons and create the signed self-use APK. The build generates a timestamp-based Android version code, so the phone always recognizes later builds as updates.

The debug APK is generated at:

```text
app/build/outputs/apk/debug/app-debug.apk
```

For stable self-use updates, keep the ignored `keystore/` directory and `keystore.properties` file. Release APKs signed with the same key can be installed over older versions without clearing local study data.

## Install

Transfer `dist/Daily-English-Practice-latest.apk` to the Android phone, allow installation from the selected file manager when prompted, and open **Daily English Practice** from the launcher.

The app is fully offline and requests no network permission.

## Updating Lessons

Copy the root `script.js` into:

```text
app/src/main/assets/www/script.js
```

Then rebuild the APK. Installing the new APK over the previous version keeps WebView local storage, provided the application ID and signing key remain unchanged.
