# Lab 47: Mobile Device Security

**Tier:** 1  
**Time:** 25-35 minutes  
**Exam Objectives:** 2.7 - Given a scenario, implement methods for securing mobile and embedded devices

---

## Section 1: Concept Check (5 min)

1. What is the difference between MDM (Mobile Device Management) and MAM (Mobile Application Management)?

2. What is remote wipe, and in what scenarios would you use it?

3. What are the risks of "jailbreaking" an iOS device or "rooting" an Android device?

4. What is the difference between full device encryption and app-level encryption?

5. Why should corporate and personal data be separated on BYOD (Bring Your Own Device) phones?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Conceptual learning** - Mobile security analysis and comparison exercises.

#### Activity A: Mobile Lock Screen Methods

**Goal:** Compare mobile authentication methods.

**Complete the comparison:**

| Method | Security Level | Convenience | Bypass Risk |
|--------|----------------|-------------|-------------|
| Swipe (none) | | | |
| 4-digit PIN | | | |
| 6-digit PIN | | | |
| Pattern | | | |
| Password | | | |
| Fingerprint | | | |
| Face ID | | | |
| Iris scan | | | |

**Best practice recommendation:** _______________

---

#### Activity B: Mobile Security Settings Checklist

**Goal:** Identify key mobile security settings.

**For a corporate-managed phone, what should be configured:**

| Setting | iOS Location | Android Location | Recommended |
|---------|--------------|------------------|-------------|
| Screen lock timeout | | | |
| Device encryption | | | |
| Remote wipe enabled | | | |
| Find My Device | | | |
| App installation sources | | | |
| OS auto-update | | | |
| Biometric authentication | | | |
| VPN configuration | | | |

---

#### Activity C: BYOD Policy Considerations

**Goal:** Understand BYOD security requirements.

**BYOD security requirements checklist:**

| Requirement | Why Important | How Enforced |
|-------------|---------------|--------------|
| Minimum OS version | | |
| Screen lock required | | |
| Device encryption | | |
| No jailbreak/root | | |
| Approved apps only | | |
| Remote wipe consent | | |
| Container/separation | | |
| VPN for corporate access | | |

**Employee concerns with BYOD:**

| Concern | How to Address |
|---------|----------------|
| Privacy (personal photos, messages) | |
| Remote wipe of personal data | |
| IT monitoring | |
| Device performance | |

---

#### Activity D: Mobile Threat Identification

**Goal:** Recognize mobile security threats.

**Match the threat to its description:**

| Threat | Description |
|--------|-------------|
| Sideloading | |
| Jailbreaking | |
| Rooting | |
| Smishing | |
| Evil twin | |
| Juice jacking | |
| Stalkerware | |
| Bloatware | |

**Descriptions to match:**
- A. Installing apps from outside official app store
- B. SMS-based phishing attack
- C. Fake Wi-Fi access point
- D. Removing iOS restrictions to install unauthorized apps
- E. Gaining admin access on Android device
- F. Pre-installed unwanted manufacturer apps
- G. Malicious charging station stealing data
- H. Hidden app monitoring device activity

---

#### Activity E: MDM Capabilities

**Goal:** Understand Mobile Device Management features.

**MDM can enforce:**

| Policy | Description | Benefit |
|--------|-------------|---------|
| Password complexity | | |
| Encryption requirement | | |
| App whitelist/blacklist | | |
| Remote lock | | |
| Remote wipe | | |
| Location tracking | | |
| Camera disable | | |
| VPN configuration | | |
| Email configuration | | |
| Certificate deployment | | |

**MDM vs MAM:**

| Feature | MDM | MAM |
|---------|-----|-----|
| Controls entire device | | |
| Controls only apps | | |
| Can wipe device | | |
| Can wipe only corporate data | | |
| Best for corporate-owned | | |
| Best for BYOD | | |

---

#### Activity F: Mobile App Security

**Goal:** Evaluate mobile app security practices.

**App permission analysis:**

| Permission | When Legitimate | When Suspicious |
|------------|-----------------|-----------------|
| Camera | | |
| Microphone | | |
| Location | | |
| Contacts | | |
| Storage | | |
| SMS | | |
| Phone | | |

**App source comparison:**

| Source | Security Level | Risks |
|--------|----------------|-------|
| Apple App Store | | |
| Google Play Store | | |
| Amazon App Store | | |
| Direct APK download | | |
| Third-party stores | | |

---

#### Activity G: Lost/Stolen Device Response

**Goal:** Create a lost device response plan.

**Immediate actions (in order):**

| Step | Action | Purpose |
|------|--------|---------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

**Information needed for response:**

| Item | Where to Find |
|------|---------------|
| Device IMEI | |
| Apple ID / Google account | |
| MDM enrollment status | |
| Carrier information | |
| Insurance policy | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** An employee loses their personal phone that has corporate email configured. The phone uses a simple 4-digit PIN and isn't encrypted. What are the risks, and what should happen next?

**Scenario 2:** A user wants to install an app that isn't in the official app store. They found an APK file online. What risks should they be aware of, and what would you advise?

**Scenario 3:** A company implements MDM on all employee phones, including personal devices. Employees complain about privacy. How would you balance security and privacy?

**Scenario 4:** An employee's phone starts behaving strangely - battery draining fast, data usage spiking, and occasional pop-ups. What might be wrong, and what steps would you take?

---

## What You Learned Today

- ✅ Mobile authentication methods (PIN, biometric, pattern)
- ✅ Mobile security settings and best practices
- ✅ BYOD policy considerations
- ✅ Mobile threats (sideloading, jailbreaking, juice jacking)
- ✅ MDM and MAM capabilities
- ✅ Mobile app security and permissions
- ✅ Lost/stolen device response

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
║  MDM (Mobile Device Management)                                           ║
║    → Controls entire device                                               ║
║    → Full wipe capability                                                 ║
║    → Best for corporate-owned devices                                     ║
║  MAM (Mobile Application Management)                                      ║
║    → Controls only corporate apps                                         ║
║    → Selective wipe (corporate data only)                                 ║
║    → Best for BYOD                                                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  MOBILE THREATS                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Sideloading  → Installing apps outside official store                    ║
║  Jailbreak    → Removing iOS restrictions                                 ║
║  Rooting      → Gaining admin access on Android                           ║
║  Smishing     → SMS phishing                                              ║
║  Juice jacking → Malicious USB charging stations                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  LOST DEVICE RESPONSE                                                      ║
║  ─────────────────────────────────────────────────────────────────────────║
║  1. Remote lock immediately                                               ║
║  2. Attempt to locate (Find My Device)                                    ║
║  3. Remote wipe if not recoverable                                        ║
║  4. Change passwords (email, cloud accounts)                              ║
║  5. Report to IT/carrier                                                  ║
║  6. Report to police if stolen                                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BEST PRACTICES                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ✓ Enable device encryption         ✓ Use official app stores            ║
║  ✓ Enable Find My Device           ✓ Review app permissions              ║
║  ✓ Use strong screen lock          ✓ Keep OS updated                     ║
║  ✓ Don't jailbreak/root            ✓ Avoid public charging stations      ║
╚═══════════════════════════════════════════════════════════════════════════╝
```