# Lab 43: Wireless Security

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 2.3 - Compare and contrast wireless security protocols and authentication methods

---

## Section 1: Concept Check (5 min)

1. Why is WEP considered completely broken, and why should it never be used?

2. What is the difference between WPA2-Personal and WPA2-Enterprise? Which is more secure?

3. What improvement does WPA3 provide over WPA2, specifically regarding offline dictionary attacks?

4. What is an "evil twin" attack in wireless security, and how can users protect themselves?

5. A guest wireless network is often isolated from the main corporate network. Why is this important?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 with Wi-Fi.

#### Activity A: Current Wireless Connection Analysis

**Goal:** Examine your current wireless security settings.

**Step 1:** View connected network details

Open Command Prompt:
```cmd
netsh wlan show interfaces
```

| Property | Your Value |
|----------|------------|
| Name | |
| SSID | |
| Network type | |
| Radio type | |
| Authentication | |
| Cipher | |
| Channel | |
| Signal | |

**Step 2:** View saved network profiles

```cmd
netsh wlan show profiles
```

List your saved wireless networks:

| Profile Name | Security Type (if visible) |
|--------------|---------------------------|
| | |
| | |
| | |
| | |

**Step 3:** Detailed profile info

```cmd
netsh wlan show profile name="YourNetworkName" key=clear
```

(Replace with your actual network name)

| Setting | Value |
|---------|-------|
| Authentication | |
| Cipher | |
| Security Key (if shown) | Present / Not Shown |

---

#### Activity B: Wireless Security Protocols Timeline

**Goal:** Understand the evolution of wireless security.

**Complete the protocol comparison:**

| Protocol | Year | Encryption | Key Size | Status |
|----------|------|------------|----------|--------|
| WEP | | | | |
| WPA | | | | |
| WPA2 | | | | |
| WPA3 | | | | |

**Security vulnerabilities:**

| Protocol | Main Weakness |
|----------|---------------|
| WEP | |
| WPA (TKIP) | |
| WPA2 (AES) | |
| WPA3 | |

---

#### Activity C: WPA2 Personal vs Enterprise

**Goal:** Understand the two WPA2 modes.

**Complete the comparison:**

| Feature | WPA2-Personal (PSK) | WPA2-Enterprise |
|---------|---------------------|-----------------|
| Authentication method | | |
| Who knows the password | | |
| User tracking | | |
| Scalability | | |
| Server required | | |
| Typical use | | |
| Security level | | |

**Enterprise components (802.1X):**

| Component | Role |
|-----------|------|
| Supplicant | |
| Authenticator | |
| Authentication Server | |

---

#### Activity D: Wireless Security Settings Audit

**Goal:** Audit wireless security best practices.

**For your home/available network, check these settings:**

(Access your router's admin interface if possible, or document what you would check)

| Setting | Recommended | Your Setting | Compliant? |
|---------|-------------|--------------|------------|
| Security protocol | WPA2/WPA3 | | |
| WPS enabled | No (disabled) | | |
| Default admin password changed | Yes | | |
| SSID changed from default | Yes | | |
| SSID broadcast | Preference | | |
| Guest network available | Optional | | |
| Firmware up to date | Yes | | |
| MAC filtering | Optional | | |

---

#### Activity E: SSID and Network Discovery

**Goal:** Understand SSID visibility and security implications.

**Step 1:** Scan for nearby networks

Open Command Prompt:
```cmd
netsh wlan show networks mode=bssid
```

| SSID | Security | Signal | Channel |
|------|----------|--------|---------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

**Step 2:** Hidden networks

Do you see any networks with blank SSIDs? _______________

**Hidden SSID security analysis:**

| Aspect | Hidden SSID | Visible SSID |
|--------|-------------|--------------|
| Visible in basic scan | | |
| Detectable with tools | | |
| Prevents determined attacker | | |
| Client probe behavior | | |
| Security benefit | | |

---

#### Activity F: Wi-Fi Protected Setup (WPS)

**Goal:** Understand WPS and its security implications.

**WPS methods:**

| Method | How It Works | Security Risk |
|--------|--------------|---------------|
| Push Button | | |
| PIN Entry | | |
| NFC | | |

**Why WPS should be disabled:**

1. _______________
2. _______________
3. _______________

---

#### Activity G: Wireless Attack Identification

**Goal:** Recognize common wireless attacks.

**Match the attack to its description:**

| Attack | Description |
|--------|-------------|
| Evil Twin | |
| Rogue Access Point | |
| Deauthentication | |
| Wardriving | |
| Packet Sniffing | |
| WPS Brute Force | |
| KRACK | |

**Attack descriptions to match:**
- A. Capturing wireless traffic to analyze data
- B. Forcing clients to disconnect from legitimate AP
- C. Fake AP mimicking legitimate network
- D. Unauthorized AP connected to corporate network
- E. Driving around to find wireless networks
- F. Attempting all WPS PINs (11,000 combinations)
- G. Key Reinstallation Attack against WPA2

---

## Section 3: Reflection (5 min)

**Scenario 1:** A user at a coffee shop connects to "CoffeeShop_WiFi_Free" and enters their banking credentials. Later, they discover fraudulent charges. What likely happened, and how could they have protected themselves?

**Scenario 2:** A company uses WPA2-Personal with a complex password. However, 200 employees know this password. An employee leaves the company. What's the security risk, and what's the proper solution?

**Scenario 3:** A security scan reveals an access point in the building that IT didn't install. It's broadcasting the corporate SSID. What is this, why is it dangerous, and what immediate steps should be taken?

**Scenario 4:** A home user has WPA2 enabled but WPS is also on with the default PIN. A neighbor "borrows" their internet. How did this happen, and what should the user do?

---

## What You Learned Today

- ✅ Wireless security protocols (WEP, WPA, WPA2, WPA3)
- ✅ WPA2-Personal vs WPA2-Enterprise
- ✅ SSID visibility and hidden networks
- ✅ WPS vulnerabilities
- ✅ Common wireless attacks (evil twin, rogue AP, deauth)
- ✅ Wireless security best practices
- ✅ 802.1X/Enterprise authentication components

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    WIRELESS SECURITY QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SECURITY PROTOCOLS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  WEP      → Broken, never use (RC4 encryption, weak IVs)                  ║
║  WPA      → Deprecated (TKIP - temporary fix for WEP)                     ║
║  WPA2     → Current standard (AES-CCMP encryption)                        ║
║  WPA3     → Latest (SAE handshake, forward secrecy)                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WPA2 MODES                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Personal (PSK)  → Shared password, home/small office                     ║
║  Enterprise      → Individual credentials, RADIUS server, 802.1X          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  802.1X COMPONENTS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Supplicant     → Client device requesting access                         ║
║  Authenticator  → Access point / switch                                   ║
║  Auth Server    → RADIUS server verifying credentials                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMMON ATTACKS                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Evil Twin      → Fake AP mimicking legitimate network                    ║
║  Rogue AP       → Unauthorized AP on corporate network                    ║
║  Deauth         → Force disconnect clients                                ║
║  KRACK          → Key reinstallation attack on WPA2                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BEST PRACTICES                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ✓ Use WPA2/WPA3 with AES          ✗ Don't use WEP or WPA-TKIP           ║
║  ✓ Disable WPS                      ✗ Don't trust open networks           ║
║  ✓ Change default passwords         ✗ Don't use default SSIDs             ║
║  ✓ Use VPN on public Wi-Fi         ✓ Isolate guest networks              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  netsh wlan show interfaces     → Current connection details              ║
║  netsh wlan show profiles       → Saved networks                          ║
║  netsh wlan show networks       → Available networks                      ║
╚═══════════════════════════════════════════════════════════════════════════╝
```