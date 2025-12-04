# Lab 47: Mobile Device Security - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: MDM vs MAM

| Feature | MDM | MAM |
|---------|-----|-----|
| Full name | Mobile Device Management | Mobile Application Management |
| Controls | Entire device | Only managed apps |
| Wipe capability | Full device wipe | Selective wipe (corporate data) |
| Best for | Corporate-owned devices | BYOD (personal devices) |
| Privacy impact | High (full control) | Lower (apps only) |
| Examples | Intune, VMware Workspace ONE | Microsoft MAM, MobileIron |

---

### Question 2: Remote Wipe

**What it is:** Ability to erase all data on a device remotely over the network.

**Scenarios to use:**
- Device confirmed stolen
- Device lost with sensitive data
- Employee terminated with company device
- Device compromised by malware
- Device cannot be recovered within acceptable time

**Types:**
- **Full wipe:** Erases everything, returns to factory state
- **Selective wipe:** Erases only corporate data, leaves personal

---

### Question 3: Jailbreaking/Rooting Risks

| Risk | Explanation |
|------|-------------|
| Security bypassed | Built-in protections disabled |
| Malware exposure | Can install apps from any source |
| Void warranty | Manufacturer won't support |
| No OS updates | May not receive security patches |
| Banking apps block | Many apps detect and refuse to run |
| MDM detection | Corporate policies may block device |
| Instability | System may become unstable |
| Data exposure | Sandboxing protections removed |

---

### Question 4: Full Device vs App Encryption

| Feature | Full Device Encryption | App-Level Encryption |
|---------|------------------------|---------------------|
| What's encrypted | Entire storage | Specific app's data |
| When active | Device locked/off | App-specific |
| Performance | Minimal impact (hardware) | Varies by app |
| Key management | OS-managed | App-managed |
| Protection level | All data protected | Only app data |
| Examples | iOS default, Android FDE | Signal messages, banking apps |

---

### Question 5: BYOD Data Separation

**Why separate:**
- **Legal discovery:** Personal photos shouldn't be in legal holds
- **Remote wipe:** Don't delete personal when employee leaves
- **Privacy:** IT shouldn't see personal data
- **Compliance:** Corporate data has different requirements
- **App conflicts:** Personal and work apps may differ

**How to separate:**
- Containers (Samsung Knox, Android Work Profile)
- MAM policies (selective wipe)
- Separate apps for work (Outlook vs personal email)
- VDI/virtual desktops for work

---

## Section 2: Activities - Answers

### Activity A: Mobile Lock Screen Methods

| Method | Security | Convenience | Bypass Risk |
|--------|----------|-------------|-------------|
| Swipe | None | Excellent | N/A - no security |
| 4-digit PIN | Low | Good | 10,000 combos, shoulder surfing |
| 6-digit PIN | Medium | Good | 1 million combos |
| Pattern | Low-Medium | Good | Smudge attacks visible |
| Password | High | Poor | Hard to type on phone |
| Fingerprint | High | Excellent | Spoofing possible but rare |
| Face ID | High | Excellent | Some fooled by photos (cheap), twins |
| Iris scan | Very High | Good | Very difficult to spoof |

**Best practice:** Biometric (fingerprint/face) + 6-digit PIN backup

---

### Activity B: Mobile Security Settings

| Setting | iOS | Android | Recommended |
|---------|-----|---------|-------------|
| Screen lock timeout | Settings → Display | Settings → Security | 30 sec - 1 min |
| Device encryption | Default ON | Settings → Security | Required |
| Remote wipe | iCloud → Find My | Google → Find Device | Enabled |
| Find My Device | Settings → [Name] | Settings → Google | Enabled |
| App sources | Default blocked | Settings → Security | Official stores only |
| Auto-update | Settings → App Store | Play Store → Settings | Enabled |
| Biometric | Settings → Face ID/Touch ID | Settings → Security | Enabled |
| VPN | Settings → VPN | Settings → Network | As needed |

---

### Activity C: BYOD Requirements

| Requirement | Why Important | How Enforced |
|-------------|---------------|--------------|
| Minimum OS version | Security patches | MDM compliance check |
| Screen lock required | Basic protection | MDM policy |
| Device encryption | Data protection | MDM requirement |
| No jailbreak/root | Security integrity | MDM detection |
| Approved apps only | Malware prevention | App catalog/MAM |
| Remote wipe consent | Data recovery | BYOD agreement signed |
| Container/separation | Privacy/legal | Work profile |
| VPN for corporate | Secure access | Auto-connect policy |

**Addressing employee concerns:**

| Concern | How to Address |
|---------|----------------|
| Privacy | Use MAM not MDM, containers, clear policy |
| Remote wipe | Selective wipe only (corporate data) |
| IT monitoring | Define what IS and ISN'T monitored in writing |
| Performance | Lightweight agents, test before rollout |

---

### Activity D: Mobile Threat Identification

| Threat | Description |
|--------|-------------|
| Sideloading | A - Installing apps from outside official store |
| Jailbreaking | D - Removing iOS restrictions |
| Rooting | E - Gaining admin access on Android |
| Smishing | B - SMS-based phishing |
| Evil twin | C - Fake Wi-Fi access point |
| Juice jacking | G - Malicious charging station |
| Stalkerware | H - Hidden monitoring app |
| Bloatware | F - Pre-installed manufacturer apps |

---

### Activity E: MDM Capabilities

| Policy | Description | Benefit |
|--------|-------------|---------|
| Password complexity | Require strong passcode | Prevent unauthorized access |
| Encryption | Require device encryption | Protect data at rest |
| App whitelist/blacklist | Control installable apps | Prevent malware, shadow IT |
| Remote lock | Lock device remotely | Immediate protection if lost |
| Remote wipe | Erase device remotely | Data protection if stolen |
| Location tracking | Find device location | Recovery, compliance |
| Camera disable | Block camera use | Prevent photos in secure areas |
| VPN config | Auto-configure VPN | Secure connectivity |
| Email config | Auto-configure email | Easy setup, secure settings |
| Certificate deployment | Push security certificates | Secure authentication |

**MDM vs MAM comparison:**

| Feature | MDM | MAM |
|---------|-----|-----|
| Controls entire device | Yes | No |
| Controls only apps | No | Yes |
| Can wipe device | Yes | No |
| Can wipe corporate data only | Yes | Yes |
| Best for corporate-owned | Yes | No |
| Best for BYOD | No | Yes |

---

### Activity F: Mobile App Security

**Permission analysis:**

| Permission | Legitimate | Suspicious |
|------------|------------|------------|
| Camera | Photo app, QR scanner | Calculator, flashlight |
| Microphone | Voice recorder, video call | Notes app, game |
| Location | Maps, weather | Flashlight, calculator |
| Contacts | Email, messaging | Game, utility |
| Storage | File manager, photos | Simple game |
| SMS | Messaging app | Flashlight, cleaner |
| Phone | Dialer, contacts | Game, utility |

**App source comparison:**

| Source | Security | Risks |
|--------|----------|-------|
| Apple App Store | High | Rare malware (reviewed) |
| Google Play | Medium-High | Some malware slips through |
| Amazon App Store | Medium | Less rigorous review |
| Direct APK | Low | No review, high risk |
| Third-party stores | Very Low | Common malware source |

---

### Activity G: Lost Device Response

**Immediate actions:**

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Remote lock immediately | Prevent access |
| 2 | Locate device (Find My) | Attempt recovery |
| 3 | Change critical passwords | Protect accounts |
| 4 | Remote wipe if unrecoverable | Protect data |
| 5 | Report to IT/security | Incident tracking |
| 6 | Report to police (if stolen) | Legal record |
| 7 | Notify carrier (suspend line) | Prevent usage |

**Information needed:**

| Item | Where to Find |
|------|---------------|
| IMEI | Settings → About, or *#06# |
| Apple ID / Google account | Original setup info |
| MDM enrollment | IT department |
| Carrier info | Account records |
| Insurance | HR or purchase records |

---

## Section 3: Reflection - Answers

### Scenario 1: Lost Personal Phone with Corporate Email

**Risks:**
- Simple PIN cracked quickly (10,000 combinations)
- No encryption = direct data access
- Corporate email exposed
- Contacts, attachments accessible
- Possible compliance violation

**Actions:**
1. Remote lock via MDM if possible
2. Change user's email password immediately
3. Remote wipe corporate data (selective wipe)
4. Review email for sensitive attachments
5. Report incident per policy
6. User should change personal passwords too

**Prevention:** Require 6-digit PIN minimum, encryption, and shorter timeout via MDM

---

### Scenario 2: Sideloading APK Request

**Risks:**
- No Google Play review = unknown code
- Could contain malware, spyware
- May request excessive permissions
- No automatic security updates
- Source website could be compromised

**Advice:**
1. Don't install from unknown sources
2. Search for official version in Play Store
3. If truly needed, research the developer
4. Check reviews on independent sites
5. Scan with mobile security app
6. Monitor permissions carefully
7. Better: find alternative official app

---

### Scenario 3: MDM Privacy Concerns

**Balance approach:**

| Use | Instead Of |
|-----|------------|
| MAM (apps only) | Full MDM |
| Work Profile container | Full device control |
| Selective wipe | Full wipe capability |
| Clear, written policy | Ambiguous monitoring |
| Minimal data collection | Full device inventory |

**Policy should state:**
- Exactly what IS monitored (app inventory, device compliance)
- What is NOT monitored (personal apps, photos, messages)
- When device can be wiped
- What happens when employee leaves
- Employee rights and opt-out options

---

### Scenario 4: Strange Phone Behavior

**Symptoms indicate possible:**
- Malware infection
- Stalkerware/spyware
- Cryptominer
- Compromised app

**Steps:**

1. **Check running apps:** Close all, see if issue persists
2. **Review recently installed apps:** Uninstall suspicious ones
3. **Check app permissions:** Look for unusual access
4. **Check data usage:** Identify high-usage apps
5. **Run security scan:** Use reputable mobile AV
6. **Review installed apps:** Look for unknown apps
7. **Check for jailbreak/root:** If unexpected, major red flag
8. **Factory reset:** If all else fails (backup first)
9. **Report to IT:** If corporate device/data involved

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                   MOBILE SECURITY QUICK REFERENCE                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  AUTHENTICATION METHODS                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Swipe only    → No security (avoid)                                      ║
║  4-digit PIN   → 10,000 combinations (weak)                               ║
║  6-digit PIN   → 1 million combinations (better)                          ║
║  Pattern       → Visual smudges can reveal (medium)                       ║
║  Password      → Strongest if complex                                     ║
║  Biometric     → Convenient, add as second factor                         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  MDM vs MAM                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  MDM → Controls entire device, full wipe, corporate-owned                 ║
║  MAM → Controls apps only, selective wipe, BYOD-friendly                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  MOBILE THREATS                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Sideloading  → Installing from unofficial sources                        ║
║  Jailbreak    → Removing iOS security                                     ║
║  Rooting      → Admin access on Android                                   ║
║  Smishing     → SMS phishing                                              ║
║  Juice jacking → Malicious USB charging                                   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  LOST DEVICE: Lock → Locate → Wipe → Change passwords → Report            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```