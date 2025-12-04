export const lesson52Quiz = [
  {
    id: 1,
    question: "A user's smartphone cannot receive incoming calls, but outgoing calls work fine. Text messages and data work normally. What should be checked FIRST?",
    options: [
      "Check if call forwarding is accidentally enabled, redirecting incoming calls elsewhere",
      "Replace the phone immediately",
      "Factory reset the device",
      "Replace the SIM card"
    ],
    correct: 0,
    explanation: "When outgoing calls work but incoming calls fail, call forwarding may be redirecting calls to another number (voicemail, old number). Check: Phone settings > Call settings > Call forwarding, verify forwarding is disabled or set correctly. Also check: Do Not Disturb mode (blocks calls), blocked numbers list, airplane mode (though this would affect outgoing too). Phone replacement is premature. Factory reset is drastic. SIM card failure would affect all cellular functions. Always check software settings before assuming hardware failure."
  },
  {
    id: 2,
    question: "A user cannot send or receive emails on their smartphone. They use the company Exchange server for email. Other apps (browser, messaging) access the internet fine. What is the MOST likely cause?",
    options: [
      "The internet connection is completely down",
      "Email account settings are incorrect (server, username, password, ports)",
      "The phone's screen is broken",
      "Bluetooth is disabled"
    ],
    correct: 1,
    explanation: "Email issues isolated to email app (while other internet access works) indicate email configuration problems: wrong server address, incorrect username/password, wrong ports (IMAP 143/993, POP3 110/995, SMTP 25/587), SSL/TLS settings incorrect. Solutions: verify account settings with IT, delete and re-add account, check for corporate password changes, verify Exchange server is accessible. Internet works (other apps function). Screen damage doesn't selectively affect email. Bluetooth is unrelated to email. Test with webmail to isolate app vs server issues."
  },
  {
    id: 3,
    question: "A smartphone's speaker produces no sound during calls, media playback, or notifications. Headphones work fine when connected. What is the MOST likely problem?",
    options: [
      "The speaker is damaged or connections are loose (hardware issue)",
      "The phone needs a software update",
      "The SIM card is bad",
      "The battery is low"
    ],
    correct: 0,
    explanation: "No sound from speaker (but headphones work) indicates hardware issue: damaged speaker, loose internal connections, debris in speaker grille, water damage affecting speaker. Software issues typically affect all audio output. First check: volume settings (ensure not muted/zero), sound profile (not silent mode), Bluetooth not connected to car/headphones. If settings are correct and headphones work, likely hardware failure. Software updates won't fix broken speakers. SIM cards don't control audio. Battery level doesn't affect speaker function. This requires professional repair or replacement."
  },
  {
    id: 4,
    question: "A user's smartphone screen brightness is extremely low and barely visible even in dark rooms. Auto-brightness is off and manual brightness is set to maximum. What should be checked?",
    options: [
      "This is normal behavior",
      "Check if battery saver mode or power saving mode is enabled (reduces brightness)",
      "The phone needs more storage space",
      "Install more apps"
    ],
    correct: 1,
    explanation: "Battery saver/power saving modes automatically reduce screen brightness to conserve battery, overriding manual brightness settings. Check: Settings > Battery > Battery saver (disable if enabled), verify auto-brightness is truly disabled, restart phone (software glitch). If still dim after disabling power saving, could be: backlight failure (hardware), damaged display, accessibility settings (color filters). This isn't normal. Storage space doesn't affect brightness. More apps won't help. Battery saving features commonly override display settings - check these first."
  },
  {
    id: 5,
    question: "A user reports their smartphone WiFi connection is intermittent - constantly disconnecting and reconnecting. Other devices on the same WiFi network work fine. What should be tried FIRST?",
    options: [
      "Replace the wireless router",
      "Forget the WiFi network on the phone and reconnect, or restart the phone",
      "Buy a new phone",
      "Disable cellular data"
    ],
    correct: 1,
    explanation: "Intermittent WiFi on one device (while others work) suggests device-specific issue. Solutions: forget network and reconnect (clears corrupted settings), restart phone (clears software glitches), toggle WiFi off/on, check WiFi sleep policy (Settings > WiFi > Advanced), update phone software, reset network settings. If problems persist: weak signal, interference, router compatibility. Router replacement is premature (other devices work). Phone replacement is extreme. Disabling cellular doesn't fix WiFi. Always start with simple software resets before hardware changes."
  },
  {
    id: 6,
    question: "A smartphone shows 'No SIM card' error even though the SIM card is properly inserted. Calls, texts, and cellular data don't work. What troubleshooting steps should be taken?",
    options: [
      "Nothing can be done - buy a new phone",
      "Remove and reinsert SIM card, clean contacts, try SIM in another phone, check for carrier issues",
      "Uninstall all apps",
      "Change the wallpaper"
    ],
    correct: 1,
    explanation: "No SIM detection troubleshooting: remove and firmly reinsert SIM (ensure proper orientation), clean SIM contacts with soft cloth, try SIM in another phone (if works = phone SIM reader issue; if doesn't = SIM card issue), contact carrier (verify account active, SIM not deactivated), check for carrier outages, verify SIM not damaged/cut wrong size. Restart phone, check airplane mode disabled. Phone replacement is premature. App uninstallation won't help. Wallpaper is irrelevant. Isolation testing (SIM in different phone) determines if SIM or phone is faulty."
  },
  {
    id: 7,
    question: "A user cannot broadcast their screen to an external TV or monitor using wireless display (Miracast, Chromecast, AirPlay). WiFi and Bluetooth work normally. What is a likely cause?",
    options: [
      "The external display doesn't support wireless display, app doesn't allow casting, or devices aren't on same network",
      "The phone's battery is dead",
      "The phone has too many contacts",
      "This feature doesn't exist on smartphones"
    ],
    correct: 0,
    explanation: "Screen mirroring failures occur when: TV/monitor lacks wireless capability or compatible dongle, apps block casting (DRM-protected content like Netflix may restrict), devices on different WiFi networks, feature disabled in phone settings, outdated software. Verify: both devices on same WiFi, TV supports Miracast/Chromecast/AirPlay, enable screen mirroring in phone settings, restart both devices. Battery level doesn't prevent casting (until dead). Contact quantity is irrelevant. Wireless display is standard on modern smartphones. Check compatibility and network connectivity first."
  },
  {
    id: 8,
    question: "A user's touchscreen is completely unresponsive - no taps, swipes, or gestures register. The phone powers on and displays normally. What should be tried FIRST?",
    options: [
      "Perform a hard reset (force restart) by holding power button combinations",
      "Throw the phone away",
      "Only use voice commands forever",
      "Never charge the phone again"
    ],
    correct: 0,
    explanation: "Unresponsive touchscreen troubleshooting: hard reset/force restart (varies by device: iPhone = volume up, down, hold power; Android varies), remove screen protector (may interfere), clean screen, check for physical damage, boot Safe Mode (if works = app conflict). If completely unresponsive, likely: digitizer failure (hardware), severe software crash, water damage. Hard reset doesn't erase data - just forces reboot. If hard reset fails, professional repair needed. Don't discard without troubleshooting. Voice commands can't navigate all functions. Charging is necessary regardless."
  },
  {
    id: 9,
    question: "Apps on a smartphone won't install or update. The error message says 'Insufficient storage available' but the phone shows 5GB free. What is the problem?",
    options: [
      "The phone is lying about available space",
      "System cache or app data is consuming space, or storage is fragmented - clear cache/data",
      "5GB is actually zero bytes",
      "Apps don't need storage to install"
    ],
    correct: 1,
    explanation: "Insufficient storage errors despite free space indicate: app cache consuming space (Settings > Storage > Cached data > Clear), old app data, system partition full (separate from user storage), download folder full, temporary files. Solutions: clear app cache individually or all, uninstall unused apps, move media to cloud/SD card, clear Downloads folder. Android often reserves space. 5GB should be sufficient but fragmentation or reserved space may cause issues. Clear cache first - recovers space without data loss. Apps absolutely need storage."
  },
  {
    id: 10,
    question: "A smartphone is extremely slow - apps take forever to open, switching between apps is sluggish, and typing has significant lag. What should be tried to improve performance?",
    options: [
      "Immediately buy the latest flagship phone",
      "Close unused apps, restart phone, clear cache, check for updates, or factory reset as last resort",
      "Throw the phone in water to cool it down",
      "Install more apps to make it faster"
    ],
    correct: 1,
    explanation: "Slow performance troubleshooting: close background apps (many apps running), restart phone (clears RAM), clear app cache (Settings > Storage), uninstall unused apps, update OS and apps (bug fixes, optimizations), disable animations (developer options), check storage space. Last resort: factory reset (backup first). Causes: insufficient RAM, old hardware, malware, too many background processes. New phone is expensive fix. Water damages phones. More apps worsen performance. Try software optimization before hardware replacement - significant improvements possible without cost."
  },
  {
    id: 11,
    question: "A smartphone's battery drains extremely quickly - fully charged to dead in 3 hours with minimal use. What are likely causes and solutions?",
    options: [
      "This is normal for all smartphones",
      "Background apps, screen brightness, location services, old battery, or rogue apps consuming power",
      "The phone needs to be frozen",
      "Install battery-draining apps to fix it"
    ],
    correct: 1,
    explanation: "Rapid battery drain causes: background app refresh, high screen brightness, location services always on, push email, aged battery (charge cycles degrade capacity), rogue apps (check Battery usage in settings), poor cellular signal (phone boosts power searching for signal), malware. Solutions: check Settings > Battery for usage breakdown, disable location for apps that don't need it, reduce screen brightness, close unused apps, enable battery saver, replace aged battery. This isn't normal. Freezing damages electronics. More apps worsen battery life. Modern phones should last full day with normal use."
  },
  {
    id: 12,
    question: "A user reports their smartphone is overheating to the point of being uncomfortable to hold. What could cause this and what should be done?",
    options: [
      "Nothing - phones are supposed to be hot",
      "Resource-intensive apps, charging while using, poor ventilation, malware, or failing battery",
      "Keep using it - heat improves performance",
      "Put it in the refrigerator"
    ],
    correct: 1,
    explanation: "Overheating causes: intensive apps/games, charging while using (especially fast charging), direct sunlight, poor ventilation (case blocking vents), malware (cryptomining), software bugs, failing battery (dangerous - stop using). Solutions: close apps, remove case, stop charging, update software, check battery health, factory reset if software issue. Excessive heat damages components and is safety risk. Moderate warmth during charging/use is normal but uncomfortable heat isn't. Heat degrades performance (thermal throttling). Never refrigerate (condensation damages electronics). If battery swells, stop using immediately."
  },
  {
    id: 13,
    question: "A smartphone completely freezes - screen doesn't respond, buttons don't work, and it won't power off normally. What should be done?",
    options: [
      "Wait indefinitely for it to unfreeze",
      "Perform a hard reset/force restart using device-specific button combination",
      "Microwave it to reset the circuits",
      "Mail it to the manufacturer"
    ],
    correct: 1,
    explanation: "Frozen phone requires hard reset/force restart (doesn't erase data): iPhone (8+): volume up, volume down, hold power until Apple logo; Android varies (often hold power 10-30 seconds or power + volume down). This forces reboot when normal shutdown fails. After reboot: check for software updates, uninstall recently installed apps, clear cache, factory reset if recurring. Don't wait - phone may stay frozen. Never microwave electronics. Mailing is premature. Learn your device's force restart method - essential troubleshooting skill for complete freezes."
  },
  {
    id: 14,
    question: "A user's mobile data works but they cannot connect to any WiFi network. WiFi is enabled and networks are visible, but connection attempts fail with 'Cannot connect' errors. What should be checked?",
    options: [
      "The cellular provider is blocking WiFi",
      "Incorrect WiFi password, airplane mode, network settings need reset, or MAC filtering on router",
      "WiFi doesn't work with mobile data enabled",
      "The phone is too old to use WiFi"
    ],
    correct: 1,
    explanation: "Cannot connect to WiFi troubleshooting: verify correct WiFi password, disable airplane mode (sometimes partially enabled), forget and reconnect to network, restart phone and router, reset network settings (Settings > General > Reset > Reset Network Settings - removes all saved WiFi), check router MAC filtering (may block device), update phone software, toggle WiFi off/on. Cellular providers don't block WiFi. WiFi and mobile data can coexist (WiFi takes priority when connected). Even old phones support WiFi. Incorrect password is most common; network reset solves many issues."
  },
  {
    id: 15,
    question: "A smartphone automatically downloaded and installed an app the user didn't request. The app displays ads and requests excessive permissions. What should be done?",
    options: [
      "Keep the app - free apps are always safe",
      "Immediately uninstall the app, scan for malware, review app permissions, and check for other suspicious apps",
      "Grant all permissions the app requests",
      "Install more suspicious apps to keep it company"
    ],
    correct: 1,
    explanation: "Automatically installed apps indicate malware, adware, or compromised account. Actions: uninstall suspicious app immediately, run mobile security scan (Malwarebytes, built-in security), review all installed apps (uninstall unknown), check app permissions (revoke excessive permissions), change account passwords, review recent account activity, factory reset if heavily infected. Never keep suspicious apps. Don't grant excessive permissions (flashlight doesn't need contacts). Free apps aren't automatically safe. This is serious security issue - malware can steal data, track activity, or install additional malware. Address immediately."
  }
];