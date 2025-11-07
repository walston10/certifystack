# Lesson 13 Lab: Wireless Networking (Wi-Fi 6/6E, 802.11)

**Estimated Time:** 30-35 minutes  
**Topics:** WiFi standards, Channels, Signal strength, SSID, Interference

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand wireless networking:

1. **Which 2.4 GHz channels are non-overlapping?**
   - a) 1, 2, 3
   - b) 1, 6, 11
   - c) 1, 5, 9
   - d) 2, 7, 12

2. **What is the latest WiFi standard?**
   - a) 802.11n (Wi-Fi 4)
   - b) 802.11ac (Wi-Fi 5)
   - c) 802.11ax (Wi-Fi 6/6E)
   - d) 802.11be (Wi-Fi 7)

3. **What frequency band does 802.11a use?**
   - a) 2.4 GHz
   - b) 5 GHz
   - c) 6 GHz
   - d) 2.4 and 5 GHz

4. **What does SSID stand for?**
   - a) Secure Service Identifier
   - b) Service Set Identifier
   - c) Signal Strength ID
   - d) System Security ID

5. **What is the main advantage of 5 GHz over 2.4 GHz?**
   - a) Better wall penetration
   - b) Longer range
   - c) More channels, less interference
   - d) Works with older devices

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Identify Your WiFi Adapter and Standard

**Let's find out what WiFi your computer supports!**

**Windows:**
```
netsh wlan show drivers
```

Look for:
- Radio types supported
- Channel support

**Mac:**
- Hold Option key
- Click WiFi icon
- See PHY Mode

---

**Write down:**
- Your WiFi standard: _________________________________ (802.11ac? 802.11ax?)
- Supported bands: _________________________________ (2.4 GHz? 5 GHz? Both?)
- Current channel: _________________________________ (1-11 for 2.4 GHz, 36-165 for 5 GHz)
- Current frequency: _________________________________ (2.4 or 5 GHz)

**What standard is your device?**
- 802.11n = Wi-Fi 4 (old)
- 802.11ac = Wi-Fi 5 (common)
- 802.11ax = Wi-Fi 6 (modern)

---

### Activity B: Scan for Nearby WiFi Networks

**Let's see what WiFi networks are around you!**

**Windows:**
```
netsh wlan show networks mode=bssid
```

**Mac:**
- Hold Option key
- Click WiFi icon
- See all networks with details

**Or use WiFi Analyzer app (free):**
- Windows: Microsoft Store → "WiFi Analyzer"
- Mac: App Store → "WiFi Explorer Lite"
- Phone: Android/iOS → "WiFi Analyzer"

---

**Write down what you found:**

**Your network:**
- SSID: _________________________________
- Signal strength: _________________________________ (%)
- Channel: _________________________________ (1-11, or 36+)
- Frequency: _________________________________ (2.4 or 5 GHz)

**Neighbor networks (if any):**

| SSID | Channel | Signal | Frequency |
|------|---------|--------|-----------|
| _____________ | _____ | ___% | _____ GHz |
| _____________ | _____ | ___% | _____ GHz |
| _____________ | _____ | ___% | _____ GHz |

**How many networks did you find?** _________________________________

**Are any on the same channel as yours?** _________________________________ (Interference!)

---

### Activity C: Channel Overlap Problem (2.4 GHz)

**2.4 GHz has 11 channels (US), but they overlap!**

**Channel diagram:**
```
Channel 1:   [====]
Channel 2:    [====]
Channel 3:     [====]
Channel 4:      [====]
Channel 5:       [====]
Channel 6:        [====]
Channel 7:         [====]
Channel 8:          [====]
Channel 9:           [====]
Channel 10:           [====]
Channel 11:            [====]
```

**Only 3 channels DON'T overlap: 1, 6, 11**

---

**Your situation:**

**Your network is on channel:** _________________________________

**Your neighbors are on:**
- Channel _____
- Channel _____
- Channel _____

**Are you overlapping with neighbors?**
- Yes / No
- If yes, you have interference! ⚠️

**Best channels (if you can change):**
- If neighbors on 1 and 6 → Use channel 11
- If neighbors on 6 and 11 → Use channel 1
- If neighbors on 1 and 11 → Use channel 6

**5 GHz solution:** Many more non-overlapping channels (no overlap problem!)

---

### Activity D: Signal Strength Testing

**Let's measure your WiFi signal in different locations!**

**Use your phone or laptop with WiFi analyzer app.**

**Test signal strength (in dBm or %) at different locations:**

| Location | Distance from Router | Signal (dBm or %) | Speed Test |
|----------|---------------------|-------------------|------------|
| Next to router | 5 feet | _______ | _______ Mbps |
| Same room | 15 feet | _______ | _______ Mbps |
| One room away | 30 feet | _______ | _______ Mbps |
| Far room | 50+ feet | _______ | _______ Mbps |
| Through walls | varies | _______ | _______ Mbps |

**Signal strength guide:**
- -30 dBm (or 100%): Excellent
- -50 dBm (or 80%): Very good
- -60 dBm (or 60%): Good
- -70 dBm (or 40%): Fair
- -80 dBm (or 20%): Poor
- -90 dBm (or <10%): Barely usable

---

**What did you learn?**
- Signal degrades with distance: _________________________________
- Walls make it worse: _________________________________
- 5 GHz has shorter range than 2.4 GHz: _________________________________

---

### Activity E: 2.4 GHz vs 5 GHz Comparison

**Test both bands if your router supports dual-band.**

**2.4 GHz test:**
- Connect to 2.4 GHz network
- Speed test: _______________________ Mbps
- Signal in far room: _______________________ dBm/%

**5 GHz test:**
- Connect to 5 GHz network  
- Speed test: _______________________ Mbps
- Signal in far room: _______________________ dBm/%

---

**Comparison:**

| Feature | 2.4 GHz | 5 GHz |
|---------|---------|-------|
| Speed | _______ | _______ |
| Range | _______ | _______ |
| Wall penetration | Better | Worse |
| Interference | More | Less |
| Channels | 11 (3 usable) | 24+ |

**When to use 2.4 GHz:**
- Far from router
- Need wall penetration
- Older devices
- IoT devices (smart home)

**When to use 5 GHz:**
- Close to router
- Need speed
- Crowded area (apartments)
- Modern devices

---

### Activity F: Identify WiFi Standards from Speed

**Match the speed to the WiFi standard:**

| Speed | Frequency | Standard | Marketing Name |
|-------|-----------|----------|----------------|
| 11 Mbps | 2.4 GHz | ________ | Legacy |
| 54 Mbps | 2.4 GHz | ________ | Legacy |
| 54 Mbps | 5 GHz | ________ | Legacy |
| 600 Mbps | Both | ________ | Wi-Fi 4 |
| 1300+ Mbps | 5 GHz | ________ | Wi-Fi 5 |
| 2400+ Mbps | 2.4/5/6 GHz | ________ | Wi-Fi 6/6E |

**Answers:**
- 11 Mbps → 802.11b
- 54 Mbps (2.4 GHz) → 802.11g
- 54 Mbps (5 GHz) → 802.11a
- 600 Mbps → 802.11n (Wi-Fi 4)
- 1300+ Mbps → 802.11ac (Wi-Fi 5)
- 2400+ Mbps → 802.11ax (Wi-Fi 6/6E)

---

### Activity G: SSID Broadcasting Test

**Your router can hide or broadcast its SSID.**

**Check your current SSID broadcast status:**

1. **Open WiFi settings on your device**
2. **Can you see your network in the list?**
   - Yes → SSID is broadcasting ✅ (normal)
   - No → SSID is hidden

**Hidden SSID:**
- Must manually enter network name
- Security through obscurity (weak!)
- Makes connections harder
- Doesn't actually improve security

**Broadcasting SSID:**
- Easy to connect
- User-friendly
- Standard practice
- Use strong encryption instead!

**Best practice:** Broadcast SSID, use WPA3 encryption

---

### Activity H: Wireless Interference Sources

**Walk around your home/office and identify interference sources:**

**Common 2.4 GHz interferers:**
- [ ] Microwave oven (when running)
- [ ] Bluetooth devices
- [ ] Cordless phones (2.4 GHz)
- [ ] Baby monitors
- [ ] Neighbor WiFi networks
- [ ] USB 3.0 devices (can interfere!)
- [ ] Fluorescent lights

**Test:** Run speed test, then turn on microwave. Speed drops?

**5 GHz advantages:**
- Less crowded frequency
- Fewer interference sources
- Microwaves don't affect it

---

### Activity I: Channel Width and Bonding

**WiFi can use 20 MHz, 40 MHz, 80 MHz, or 160 MHz channel widths.**

**Check your router's channel width:**

**Windows:**
```
netsh wlan show interfaces
```

Look for "Channel" - might show "36+40" (bonded)

---

**Channel bonding concept:**

**20 MHz (narrow):**
- Slower speeds
- Less interference
- More channels available
- Better for crowded areas

**40 MHz (bonded):**
- 2× speed of 20 MHz
- Uses two 20 MHz channels
- Fewer channels available

**80 MHz (bonded):**
- 4× speed of 20 MHz
- Only on 5 GHz
- Very fast

**160 MHz (bonded):**
- 8× speed of 20 MHz
- Wi-Fi 6 only
- Maximum speed but uses lots of spectrum

**Your channel width:** _________________________________ MHz

**Recommendation:**
- 2.4 GHz: Use 20 MHz (less interference)
- 5 GHz: Use 40 MHz or 80 MHz (more speed)

---

### Activity J: MIMO and Antenna Configuration

**MIMO = Multiple Input, Multiple Output (multiple antennas)**

**Check your router:**
- How many antennas? _________________________________ (physical antennas)
- Router spec: _________________________________ (e.g., "3×3 MIMO" or "4×4 MIMO")

**What the numbers mean:**
- 2×2 MIMO: 2 transmit, 2 receive antennas
- 3×3 MIMO: 3 transmit, 3 receive antennas
- 4×4 MIMO: 4 transmit, 4 receive antennas

**More antennas = higher speeds (up to a limit)**

**Example speeds:**
- 1×1 802.11ac: ~433 Mbps
- 2×2 802.11ac: ~867 Mbps
- 3×3 802.11ac: ~1300 Mbps
- 4×4 802.11ac: ~1733 Mbps

---

**MU-MIMO (Multi-User MIMO):**
- Serves multiple devices simultaneously
- Wi-Fi 5 and Wi-Fi 6 feature
- Reduces wait time
- Better performance when many devices connected

**Your router supports MU-MIMO?** Check router specs or box

---

### Activity K: Roaming Test (If You Have Multiple APs)

**If you have WiFi extender or mesh system:**

**Walk around and check which AP you're connected to:**

**Windows:**
```
netsh wlan show interfaces
```

Look for "BSSID" (MAC address of AP)

**As you move:**
- Near Router: BSSID = _________________________________ (router's MAC)
- Near Extender: BSSID = _________________________________ (extender's MAC)

**Roaming = automatically switching between APs with same SSID**

**Good roaming:**
- Seamless switch
- No dropped connection
- Happens at ~-70 dBm

**Bad roaming:**
- Sticky clients (don't switch)
- Brief disconnect
- Manual reconnect needed

---

### Activity L: WiFi Design Exercise

**You're designing WiFi for a small office:**

**Office layout:**
- Main area: 30 employees
- Conference room: 12 people max
- Guest lobby: 10 guests max
- Office size: 5,000 sq ft

**Design decisions:**

1. **How many access points?**
   - Rule: ~2,000 sq ft per AP
   - Your answer: _________________________________ APs

2. **What channels? (if using 2.4 GHz)**
   - AP 1: Channel _____
   - AP 2: Channel _____
   - AP 3: Channel _____
   - (Use 1, 6, or 11 only!)

3. **Separate SSIDs or same?**
   - Employees: _________________________________
   - Guests: _________________________________
   - (Best: Same SSID for employees, different for guests)

4. **5 GHz or 2.4 GHz?**
   - Primary: _________________________________ (5 GHz for speed)
   - Backup: _________________________________ (2.4 GHz for range)

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Your apartment has 20 visible WiFi networks, all on 2.4 GHz:**
   - Why is your WiFi so slow?
   - What channels are they using?
   - What's your best solution?

2. **WiFi 6 vs WiFi 5 - is the upgrade worth it?**
   - Speed difference?
   - Do your devices support it?
   - Cost vs benefit?

3. **Should you hide your SSID for security?**
   - Does it actually improve security?
   - What are the downsides?
   - What's better?

4. **Your boss wants WiFi coverage in warehouse:**
   - Metal building
   - 200 feet long
   - Few walls but metal structure
   - What challenges?
   - What solutions?

---

## What You Learned Today

- ✅ You identified your WiFi adapter and standard
- ✅ You scanned for nearby networks
- ✅ You understand channel overlap (1, 6, 11)
- ✅ You tested signal strength at different distances
- ✅ You compared 2.4 GHz vs 5 GHz
- ✅ You matched WiFi standards to speeds
- ✅ You understand SSID broadcasting
- ✅ You identified interference sources
- ✅ You learned about channel bonding
- ✅ You understand MIMO configurations
- ✅ You tested roaming (if applicable)
- ✅ You designed a WiFi network

**Next Lesson:** Network Devices (Routers, Firewalls, Load Balancers)