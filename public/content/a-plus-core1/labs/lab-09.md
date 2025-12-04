# Lab 9: Wireless Networking Standards

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 2.3 - Compare and contrast protocols for wireless networking

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the non-overlapping channels in the 2.4 GHz band, and why does channel selection matter?**

2. **Explain the difference between 2.4 GHz and 5 GHz frequencies in terms of range, speed, and interference.**

3. **What does "Wi-Fi 6" mean, and what 802.11 standard does it correspond to?**

4. **What is the purpose of MIMO technology in wireless networking?**

5. **Why might a dual-band router broadcast two separate SSIDs instead of one combined network?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses your devices and free tools** - Explore wireless networks around you.

---

#### Activity A: Your Wi-Fi Network Analysis

**Goal:** Document your current wireless network configuration.

**Access your router's wireless settings:**

Router admin URL: _______________________

**2.4 GHz Network:**

| Setting | Current Value |
|---------|---------------|
| SSID (network name) | |
| Security mode | |
| Channel | |
| Channel width | |
| Wireless mode/standard | |
| Transmit power | |
| SSID broadcast enabled? | |

**5 GHz Network:**

| Setting | Current Value |
|---------|---------------|
| SSID (network name) | |
| Security mode | |
| Channel | |
| Channel width | |
| Wireless mode/standard | |
| Transmit power | |
| SSID broadcast enabled? | |

**6 GHz Network (if Wi-Fi 6E router):**

| Setting | Current Value |
|---------|---------------|
| SSID (network name) | |
| Security mode | |
| Channel | |
| Channel width | |

**Combined or separate SSIDs?**

- [ ] Same SSID for 2.4 and 5 GHz (band steering)
- [ ] Separate SSIDs for each band
- [ ] Only one band enabled

**Why did you (or the default) choose this approach?**

_________________________________________________________________

---

#### Activity B: Wi-Fi Scanner Exercise

**Goal:** Analyze nearby wireless networks to understand channel usage.

**Use a Wi-Fi analyzer tool:**

- **Windows:** WiFi Analyzer (Microsoft Store - free) or NetSpot
- **Mac:** Wireless Diagnostics (built-in) or WiFi Explorer
- **Android:** WiFi Analyzer (Google Play - free)
- **iOS:** Limited - Airport Utility with Wi-Fi scanning enabled

**Document nearby 2.4 GHz networks:**

| SSID | Channel | Signal (dBm) | Security | Overlap with yours? |
|------|---------|--------------|----------|---------------------|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |
| 4. | | | | |
| 5. | | | | |

**Document nearby 5 GHz networks:**

| SSID | Channel | Signal (dBm) | Security | Band Width |
|------|---------|--------------|----------|------------|
| 1. | | | | |
| 2. | | | | |
| 3. | | | | |
| 4. | | | | |
| 5. | | | | |

**Channel congestion analysis:**

**2.4 GHz band:**

How many networks are on each non-overlapping channel?

| Channel 1 | Channel 6 | Channel 11 |
|-----------|-----------|------------|
| | | |

Which channel has the least congestion? _______

Is your network on a good channel? [ ] Yes [ ] No

**5 GHz band:**

Are most networks clustered on certain channels? _______________________

Which 5 GHz channel appears least congested? _______

---

#### Activity C: 802.11 Standards Research

**Goal:** Memorize the key differences between wireless standards.

**Complete this table from research:**

| Standard | Marketing Name | Frequency | Max Speed | Year Released |
|----------|----------------|-----------|-----------|---------------|
| 802.11a | | | | |
| 802.11b | | | | |
| 802.11g | | | | |
| 802.11n | | | | |
| 802.11ac | | | | |
| 802.11ax | | | | |

**Key improvements by generation:**

**802.11n (Wi-Fi 4) introduced:**

1. _______________________
2. _______________________
3. _______________________

**802.11ac (Wi-Fi 5) introduced:**

1. _______________________
2. _______________________
3. _______________________

**802.11ax (Wi-Fi 6) introduced:**

1. _______________________
2. _______________________
3. _______________________

**What does Wi-Fi 6E add beyond Wi-Fi 6?**

_________________________________________________________________

---

#### Activity D: Device Wireless Capability Inventory

**Goal:** Identify what wireless standards your devices support.

**Check your devices:**

**Windows:** 
- Open Command Prompt
- Run: `netsh wlan show drivers`
- Look for "Radio types supported"

**Mac:**
- Hold Option key and click Wi-Fi icon
- Or: System Information → Network → Wi-Fi

**Mobile:**
- Check device specifications online

**Document your devices:**

| Device | Wireless Standards | Max Band | Wi-Fi Generation |
|--------|-------------------|----------|------------------|
| Main computer | | | |
| Laptop | | | |
| Phone | | | |
| Tablet | | | |
| Smart TV | | | |
| Game console | | | |
| Other: | | | |

**Questions to consider:**

1. What's your oldest wireless device? _______________________

2. What standard does it support? _______________________

3. If that device only supports 802.11n on 2.4 GHz, does it slow down your entire 5 GHz network?

_________________________________________________________________

4. Do you have any devices that support Wi-Fi 6 (802.11ax)?

_________________________________________________________________

---

#### Activity E: Signal Strength Testing

**Goal:** Understand how signal strength varies with distance and obstacles.

**Test signal strength in different locations:**

Use your phone's Wi-Fi settings or a Wi-Fi analyzer app to measure signal strength (in dBm or bars).

| Location | Distance from Router | Obstacles | 2.4 GHz Signal | 5 GHz Signal |
|----------|---------------------|-----------|----------------|--------------|
| Next to router | 0-3 ft | None | | |
| Same room | 10-15 ft | None | | |
| Adjacent room | 15-25 ft | 1 wall | | |
| Far room | 30+ ft | 2+ walls | | |
| Different floor | Varies | Floor/ceiling | | |
| Outside | Varies | Exterior wall | | |

**Signal strength interpretation:**

| dBm Range | Quality | Typical Experience |
|-----------|---------|-------------------|
| -30 to -50 | Excellent | Max speeds possible |
| -50 to -60 | Good | Very reliable |
| -60 to -70 | Fair | Adequate for most uses |
| -70 to -80 | Weak | Slower speeds, possible drops |
| -80 to -90 | Very weak | Unreliable connection |
| Below -90 | Unusable | Frequent disconnections |

**Your findings:**

At what distance/obstacles did 5 GHz become weaker than 2.4 GHz?

_________________________________________________________________

Where in your space do you have "dead zones"?

_________________________________________________________________

---

#### Activity F: Channel Width Exploration

**Goal:** Understand how channel width affects speed and reliability.

**Research channel widths:**

| Channel Width | Channels Used | Theoretical Benefit | Downside |
|---------------|---------------|---------------------|----------|
| 20 MHz | | | |
| 40 MHz | | | |
| 80 MHz | | | |
| 160 MHz | | | |

**Your router's settings:**

| Band | Current Channel Width | Other Options Available |
|------|-----------------------|-------------------------|
| 2.4 GHz | | |
| 5 GHz | | |

**Best practices:**

Why is 20 MHz recommended for 2.4 GHz in congested environments?

_________________________________________________________________

When might 160 MHz width cause problems on 5 GHz?

_________________________________________________________________

---

#### Activity G: Wireless Modes and Compatibility

**Goal:** Understand backward compatibility in wireless networks.

**Check your router's wireless mode setting:**

**2.4 GHz options available:**

- [ ] b only
- [ ] g only
- [ ] n only
- [ ] b/g
- [ ] b/g/n
- [ ] g/n
- [ ] ax only
- [ ] b/g/n/ax
- [ ] Other: _______

**Current setting:** _______________________

**5 GHz options available:**

- [ ] a only
- [ ] n only
- [ ] ac only
- [ ] a/n
- [ ] a/n/ac
- [ ] n/ac
- [ ] ax only
- [ ] a/n/ac/ax
- [ ] Other: _______

**Current setting:** _______________________

**Compatibility questions:**

1. If your router is set to "n only" on 2.4 GHz, what happens to a device that only supports 802.11g?

_________________________________________________________________

2. Why might someone intentionally disable older standards?

_________________________________________________________________

3. What's the performance impact of allowing 802.11b devices on a modern network?

_________________________________________________________________

---

#### Activity H: Bluetooth and Other Wireless Technologies

**Goal:** Understand non-Wi-Fi wireless technologies.

**Bluetooth devices inventory:**

| Device | Bluetooth Version | Use Case |
|--------|-------------------|----------|
| 1. | | |
| 2. | | |
| 3. | | |
| 4. | | |
| 5. | | |

**Bluetooth versions research:**

| Version | Max Speed | Range | Key Feature |
|---------|-----------|-------|-------------|
| 4.0 | | | |
| 4.2 | | | |
| 5.0 | | | |
| 5.2 | | | |
| 5.3 | | | |

**Bluetooth vs Wi-Fi:**

| Feature | Bluetooth | Wi-Fi |
|---------|-----------|-------|
| Primary use | | |
| Range | | |
| Speed | | |
| Power consumption | | |
| Frequency | | |

**Other wireless technologies:**

| Technology | What It Does | Common Uses | Range |
|------------|--------------|-------------|-------|
| NFC | | | |
| RFID | | | |
| Zigbee | | | |
| Z-Wave | | | |
| Infrared (IR) | | | |

---

#### Activity I: Wireless Security Quick Check

**Goal:** Verify your wireless network is using current security standards.

**Your network security:**

| Setting | 2.4 GHz Network | 5 GHz Network |
|---------|-----------------|---------------|
| Security mode | | |
| Encryption type | | |
| WPS enabled? | | |
| Password length | | |
| Last password change | | |

**Security mode comparison:**

| Mode | Security Level | Should You Use? |
|------|----------------|-----------------|
| Open (none) | | |
| WEP | | |
| WPA | | |
| WPA2-Personal | | |
| WPA2-Enterprise | | |
| WPA3-Personal | | |
| WPA3-Enterprise | | |

**Security checklist:**

- [ ] Using WPA2 or WPA3 (not WEP or WPA)
- [ ] WPS is disabled
- [ ] Password is 12+ characters
- [ ] Password contains mixed characters
- [ ] Default router admin password changed
- [ ] Guest network isolated (if enabled)
- [ ] Router firmware is current

**What security improvements could you make?**

_________________________________________________________________

---

#### Activity J: Practical Speed Test Comparison

**Goal:** Compare actual speeds across different wireless configurations.

**Test methodology:**

1. Use the same speed test (speedtest.net or fast.com)
2. Test at the same location
3. Run each test 3 times and average
4. Test during low-usage time

**Test results:**

| Configuration | Download (Mbps) | Upload (Mbps) | Ping (ms) |
|---------------|-----------------|---------------|-----------|
| 2.4 GHz - near router | | | |
| 5 GHz - near router | | | |
| 2.4 GHz - far from router | | | |
| 5 GHz - far from router | | | |
| Wired Ethernet (baseline) | | | |

**Analysis:**

1. How much faster is 5 GHz than 2.4 GHz near the router?

_________________________________________________________________

2. At what point (if any) did 2.4 GHz outperform 5 GHz?

_________________________________________________________________

3. How do your wireless speeds compare to your wired connection?

_________________________________________________________________

4. Are you getting close to the speeds your ISP plan provides?

_________________________________________________________________

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A user complains about slow Wi-Fi in their home office, which is two rooms away from the router. Their laptop supports Wi-Fi 5 and connects to the 5 GHz network. What troubleshooting steps would you take?**

2. **A small business has 15 employees and one access point. Users report intermittent disconnections and slow speeds, especially during video calls. The Wi-Fi analyzer shows 12 neighboring networks on channels 1 and 6. What would you recommend?**

3. **A customer bought a new Wi-Fi 6 router but isn't seeing any speed improvement. Their laptop is from 2015 and their internet plan is 100 Mbps. Explain why and what might actually help.**

4. **You're setting up Wi-Fi for a warehouse with lots of metal shelving and forklifts moving around. Would you prioritize 2.4 GHz or 5 GHz coverage, and why?**

---

## What You Learned Today

- ✅ Analyzed your Wi-Fi network configuration
- ✅ Used Wi-Fi analyzer tools to check channel congestion
- ✅ Memorized 802.11 standards (a/b/g/n/ac/ax)
- ✅ Inventoried wireless capabilities of your devices
- ✅ Tested signal strength at various locations
- ✅ Understood channel width tradeoffs
- ✅ Explored wireless mode compatibility settings
- ✅ Learned about Bluetooth and other wireless technologies
- ✅ Verified wireless security configuration
- ✅ Compared practical speeds across configurations

**Next Lab:** Network Services and Configuration - exploring DHCP, DNS, and other essential network services.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 9: Wireless Networking Standards*