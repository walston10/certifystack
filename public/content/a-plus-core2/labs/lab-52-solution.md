# Lab 52: Troubleshooting Mobile OS Issues - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Full Signal, No Calls

**Three possible causes:**
1. **Account issue** - Service suspended, bill unpaid
2. **Network outage** - Carrier having problems
3. **Do Not Disturb enabled** - Blocking incoming calls
4. **Call forwarding active** - Calls going elsewhere
5. **SIM card issue** - Damaged or not properly seated

---

### Question 2: Soft Reset vs Hard Reset

| Feature | Soft Reset (Restart) | Hard Reset (Factory Reset) |
|---------|---------------------|---------------------------|
| What happens | Device restarts | Erases everything |
| Data preserved | Yes | No |
| Settings preserved | Yes | No |
| Apps preserved | Yes | No |
| Time to complete | 1-2 minutes | 15-30 minutes |
| When to use | Minor issues | Severe issues, selling device |

---

### Question 3: Battery Dies by Noon

**Investigate:**
1. **Battery health** - Degraded battery (Settings → Battery → Battery Health)
2. **Screen brightness** - Auto-brightness off, set too high
3. **Background apps** - Check battery usage by app
4. **Location services** - GPS constantly active
5. **Weak cellular signal** - Phone works harder to maintain connection
6. **Recently installed apps** - Check usage after new installs
7. **Push email** - Constant syncing
8. **OS update** - Sometimes increases battery drain temporarily

---

### Question 4: iPhone App Crashes

**Troubleshooting order:**
1. **Force close** - Swipe up from app switcher
2. **Restart phone** - Soft reset
3. **Check for app update** - App Store → Updates
4. **Check for iOS update** - Settings → General → Software Update
5. **Offload and reinstall** - Settings → General → iPhone Storage → App → Offload
6. **Delete and reinstall** - Remove completely, download fresh
7. **Check Apple System Status** - Server-side issue?

---

### Question 5: Touchscreen Wrong Location

**Possible causes:**
- **Screen protector issue** - Thick or improperly applied
- **Digitizer calibration** - Software issue
- **Digitizer damage** - Internal damage (even without visible crack)
- **Moisture/debris** - Under screen or protector
- **Software glitch** - OS needs update or reset
- **Case interference** - Pressing on edges

---

## Section 2: Activities - Answers

### Activity A: Mobile Symptom Diagnosis

| Symptom | Possible Causes | First Steps |
|---------|-----------------|-------------|
| No cellular signal | Airplane mode, SIM, carrier issue, antenna damage | Check airplane mode, reseat SIM, try different location |
| Can't connect to Wi-Fi | Wrong password, router issue, phone problem | Forget network, re-enter password, restart router |
| GPS not working | Location off, permissions, obstructed view | Enable location, check app permissions, go outside |
| Bluetooth won't pair | Bluetooth off, out of range, already paired elsewhere | Toggle BT, move closer, unpair from other devices |
| No sound/speaker | Volume muted, Do Not Disturb, hardware damage | Check volume, check DND, test with headphones |
| Camera not working | App permission, app glitch, hardware | Check permissions, force close, restart |
| Screen rotation locked | Rotation lock enabled, app doesn't support | Check rotation lock in Control Center/Quick Settings |
| Can't receive texts | Do Not Disturb, blocked, carrier issue | Check DND, check blocked contacts, contact carrier |
| Slow performance | Low storage, too many apps, needs restart | Free storage, close apps, restart |
| Apps crashing | Needs update, corrupted, not compatible | Update app, reinstall, check compatibility |

---

### Activity B: Battery Troubleshooting

| Item to Check | How to Check | Impact |
|---------------|--------------|--------|
| Screen brightness | Settings → Display | High |
| Background app refresh | Settings → General (iOS) / Apps (Android) | Medium-High |
| Location services | Settings → Privacy → Location | Medium-High |
| Bluetooth | Quick Settings / Control Center | Low-Medium |
| Wi-Fi scanning | Always-on in some phones | Low |
| Push email | Mail settings | Medium |
| Weak signal | Signal bars (more bars = less power) | High |
| Battery health | Settings → Battery | High |
| Recent apps | Battery usage by app | Variable |
| Updates pending | Can cause background activity | Medium |

**Recommendations:**

| Setting | Recommendation |
|---------|----------------|
| Auto-brightness | Enable (adjusts to conditions) |
| Screen timeout | 30 seconds to 1 minute |
| Background refresh | Disable for non-essential apps |
| Location services | "While using" instead of "Always" |
| Low power mode | Enable when below 20% |

---

### Activity C: Connectivity Flowcharts

**Wi-Fi flowchart:**

| Step | Check | If Yes | If No |
|------|-------|--------|-------|
| 1 | Wi-Fi enabled? | Go to 2 | Enable Wi-Fi |
| 2 | Can see network? | Go to 3 | Restart router, move closer |
| 3 | Password correct? | Go to 4 | Re-enter password |
| 4 | Other devices connect? | Go to 5 | Router problem |
| 5 | Forget and reconnect | Fixed? | Go to 6 |
| 6 | Reset network settings | Fixed? | Hardware issue |

**Cellular flow:**

| Step | Check | Action |
|------|-------|--------|
| 1 | Airplane mode off? | Toggle off |
| 2 | SIM card seated? | Remove and reseat |
| 3 | Account active? | Contact carrier |
| 4 | Network settings reset? | Settings → Reset Network |
| 5 | Carrier settings update? | Check for carrier update |

---

### Activity D: App Troubleshooting

**App troubleshooting steps:**

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Force close app | Clear stuck state |
| 2 | Restart phone | Clear memory, refresh OS |
| 3 | Check for app update | Bug fixes available |
| 4 | Check for OS update | Compatibility fixes |
| 5 | Clear app cache | Remove corrupted temp files |
| 6 | Clear app data | Reset app to fresh state |
| 7 | Uninstall/reinstall | Fresh installation |
| 8 | Check storage space | Apps need room to function |

**App-specific issues:**

| Issue | Likely Cause | Solution |
|-------|--------------|----------|
| Unusual permissions | Malware or over-reaching app | Deny permissions, uninstall if suspicious |
| Excessive data | Background sync, video, malware | Check data usage, restrict background data |
| Battery drain | Poor coding, constant activity | Check battery usage, limit background |
| Won't update | Insufficient storage, OS too old | Free space, update OS |
| Unexpected ads | Adware, free app monetization | Uninstall if excessive, check for malware |

---

### Activity E: iOS vs Android

**Restart methods:**

| Action | iOS | Android |
|--------|-----|---------|
| Soft restart | Hold side button → Slide to power off | Hold power → Restart |
| Force restart | Vol Up, Vol Down, hold Side (Face ID) | Hold Power + Vol Down (varies) |
| Safe Mode | N/A (iOS doesn't have) | Hold power off option |
| Recovery Mode | Connect to computer, specific button combo | Power + Vol Down (varies) |
| Factory Reset | Settings → General → Transfer/Reset | Settings → System → Reset |

**Common locations:**

| Setting | iOS | Android |
|---------|-----|---------|
| Battery usage | Settings → Battery | Settings → Battery |
| Storage | Settings → General → iPhone Storage | Settings → Storage |
| App permissions | Settings → Privacy | Settings → Apps → Permissions |
| Reset network | Settings → General → Transfer/Reset | Settings → System → Reset → Network |
| Clear cache | N/A (per-app: Offload app) | Settings → Apps → [App] → Storage → Clear Cache |
| Software update | Settings → General → Software Update | Settings → System → Software Update |

---

### Activity F: Security Issues

**Signs of compromise:**

| Symptom | Possible Issue |
|---------|---------------|
| Unknown apps | Malware installed |
| Excessive data | Spyware sending data |
| Fast battery drain | Malware running constantly |
| Hot when idle | Background malicious activity |
| Pop-up ads | Adware infection |
| Texts you didn't send | Compromised, spam bot |
| Unfamiliar charges | Premium SMS malware |
| Changed settings | Remote access, stalkerware |

**Response steps:**

| Step | Action |
|------|--------|
| 1 | Disconnect from network (airplane mode) |
| 2 | Check for unknown apps, uninstall suspicious |
| 3 | Change important passwords (from different device) |
| 4 | Run security scan |
| 5 | Factory reset if suspicious activity continues |

---

### Activity G: Error Messages

| Error | Meaning | Fix |
|-------|---------|-----|
| "No SIM card installed" | SIM not detected | Reseat SIM, try different SIM, clean contacts |
| "Storage almost full" | Running out of space | Delete apps, photos, clear cache |
| "Cellular data unavailable" | Can't connect to mobile data | Toggle cellular, reset network settings |
| "Cannot verify server identity" | SSL certificate issue | Check date/time, update iOS, accept cert |
| "Accessory may not be supported" | Unauthorized/damaged cable | Use certified cable, clean port |
| "Activation required" | iCloud/carrier lock, or setup needed | Sign in to Apple ID, contact carrier |
| "[App] has stopped" | App crashed | Force close, clear cache, reinstall |
| "No Internet connection" | Wi-Fi connected but no internet | Check router, DNS, restart |

---

## Section 3: Reflection - Answers

### Scenario 1: iMessage Not Working

**Check:**
1. **Internet connection** - iMessage requires data/Wi-Fi
2. **iMessage enabled** - Settings → Messages → iMessage (toggle off/on)
3. **Apple ID signed in** - Settings → Messages → Send & Receive
4. **Phone number enabled** - Same screen, verify number is checked
5. **Date and time** - Must be correct for Apple services
6. **Apple server status** - Check Apple System Status page
7. **Network settings reset** - Last resort

---

### Scenario 2: Random Restarts

**Diagnosis approach:**

1. **Check for patterns** - During specific apps? During charging?
2. **Check storage** - Low storage can cause instability
3. **Check for OS update** - Known bug might be fixed
4. **Boot to Safe Mode** - If stable, third-party app causing issue
5. **Check battery health** - Degraded battery can cause shutdowns
6. **Check for overheating** - Even if not obviously hot
7. **Review recently installed apps** - Correlate with when restarts started
8. **Factory reset** - If nothing else works
9. **Hardware issue** - If persists after reset, possible hardware fault

---

### Scenario 3: Apps Don't Work After OS Update

**What's happening:**
- Apps not updated for new OS version
- New OS has breaking changes for older apps
- App developers haven't released compatibility update yet

**Options:**
1. **Check for app updates** - Developer may have released fix
2. **Contact app developer** - Ask about compatibility
3. **Wait** - Updates often come within days/weeks of OS release
4. **Find alternatives** - Different app with same function
5. **Downgrade OS** - Possible on Android, very difficult on iOS
6. **For banking app** - Use web browser version temporarily

---

### Scenario 4: Touchscreen Issues (No Crack)

**Possible causes:**
1. **Screen protector** - Remove and test
2. **Moisture** - Let phone dry completely
3. **Software glitch** - Restart, update OS
4. **Digitizer damage** - Internal damage not visible
5. **Debris** - Something under screen edge
6. **Electrical interference** - Near certain equipment
7. **Grounding issue** - While charging with bad cable

**Troubleshooting:**
1. Remove case and screen protector
2. Clean screen thoroughly
3. Restart device
4. Update iOS/Android
5. Reset all settings (not factory reset)
6. If persists, hardware repair needed

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 MOBILE TROUBLESHOOTING QUICK REFERENCE                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FIRST: Restart → Update → Storage check → Toggle feature                 ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  NO CONNECTIVITY                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Wi-Fi    → Toggle, forget network, reset network settings                ║
║  Cellular → Airplane toggle, reseat SIM, carrier settings update          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  APP CRASHES: Force close → Restart → Update → Clear cache → Reinstall    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BATTERY DRAIN: Check brightness, location, background apps, health       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FORCE RESTART                                                             ║
║  iPhone (Face ID): Vol Up, Vol Down, hold Side                            ║
║  Android: Hold Power + Vol Down (10+ seconds)                             ║
╚═══════════════════════════════════════════════════════════════════════════╝
```