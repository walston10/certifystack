# Lab 9: Wireless Networking Standards - Solution Guide

**Note to Students:** Only review this AFTER completing your own work! You'll learn more by experimenting yourself first.

---

## Section 1: Concept Check - Answers

**1. What are the non-overlapping channels in the 2.4 GHz band, and why does channel selection matter?**

**Answer:**

The non-overlapping channels in the 2.4 GHz band are **1, 6, and 11** (in the US/Americas).

**Why it matters:**

The 2.4 GHz band has 11 channels (14 in some regions), but each channel is 22 MHz wide and they're only spaced 5 MHz apart. This means adjacent channels overlap and interfere with each other.

```
Channel 1:  [=======]
Channel 2:    [=======]     ← Overlaps with 1 and 3
Channel 3:      [=======]
...
Channel 6:              [=======]
...
Channel 11:                         [=======]
```

Using channels 1, 6, or 11 prevents co-channel interference. If your neighbor is on channel 3, and you're on channel 1, you'll both experience interference. Better if one moves to channel 6.

**Exam tip:** Memorize 1, 6, 11 - this is frequently tested.

---

**2. Explain the difference between 2.4 GHz and 5 GHz frequencies in terms of range, speed, and interference.**

**Answer:**

| Factor | 2.4 GHz | 5 GHz |
|--------|---------|-------|
| Range | Longer (better wall penetration) | Shorter (absorbed by obstacles) |
| Speed | Slower (fewer/narrower channels) | Faster (more/wider channels) |
| Interference | More (crowded, microwaves, Bluetooth) | Less (more channels, less congestion) |
| Channels | 3 non-overlapping | 25+ non-overlapping |
| Penetration | Better through walls/floors | Worse through obstacles |

**Physics explanation:**

Lower frequencies (2.4 GHz) have longer wavelengths that bend around and penetrate obstacles better. Higher frequencies (5 GHz) travel in straighter lines and are absorbed more by walls, but can carry more data because of wider available bandwidth.

**When to use each:**
- **2.4 GHz:** IoT devices, far from router, through walls
- **5 GHz:** Streaming, gaming, near router, need speed

---

**3. What does "Wi-Fi 6" mean, and what 802.11 standard does it correspond to?**

**Answer:**

**Wi-Fi 6 = 802.11ax**

The Wi-Fi Alliance introduced simplified naming in 2018 to help consumers understand generations:

| Marketing Name | IEEE Standard | Year |
|----------------|---------------|------|
| Wi-Fi 4 | 802.11n | 2009 |
| Wi-Fi 5 | 802.11ac | 2013 |
| Wi-Fi 6 | 802.11ax | 2019 |
| Wi-Fi 6E | 802.11ax (6 GHz) | 2020 |
| Wi-Fi 7 | 802.11be | 2024 |

**Wi-Fi 6 key improvements:**
- OFDMA (Orthogonal Frequency-Division Multiple Access) - serves multiple devices simultaneously
- MU-MIMO improved (8 streams, uplink support)
- 1024-QAM modulation (more data per transmission)
- Target Wake Time (TWT) - better battery life for IoT
- BSS Coloring - reduces interference from neighboring networks

---

**4. What is the purpose of MIMO technology in wireless networking?**

**Answer:**

**MIMO (Multiple Input Multiple Output)** uses multiple antennas on both the router and client to send and receive multiple data streams simultaneously.

**How it works:**

Instead of one antenna sending one stream:
```
[Router] ----stream 1----> [Client]
```

MIMO uses multiple antennas to send parallel streams:
```
[Router Ant 1] ----stream 1----> [Client Ant 1]
[Router Ant 2] ----stream 2----> [Client Ant 2]
[Router Ant 3] ----stream 3----> [Client Ant 3]
```

**MIMO evolution:**

| Technology | Description | Introduced |
|------------|-------------|------------|
| MIMO | Multiple streams to one device | 802.11n |
| MU-MIMO | Multiple streams to multiple devices simultaneously | 802.11ac Wave 2 |
| 8x8 MU-MIMO | Up to 8 spatial streams | 802.11ax |

**Notation:** "4x4 MIMO" means 4 transmit antennas and 4 receive antennas.

**Benefit:** Dramatically increases throughput without using more spectrum.

---

**5. Why might a dual-band router broadcast two separate SSIDs instead of one combined network?**

**Answer:**

**Reasons for separate SSIDs:**

1. **Device control** - Force specific devices to specific bands
2. **Troubleshooting** - Easier to identify which band has issues
3. **Legacy devices** - Some old devices get confused by band steering
4. **IoT isolation** - Keep smart home devices on 2.4 GHz, computers on 5 GHz
5. **User preference** - Let users manually choose based on location

**Reasons for combined SSID (band steering):**

1. **Simplicity** - One password to remember
2. **Automatic optimization** - Router decides best band
3. **Seamless roaming** - Devices switch bands automatically
4. **Less confusion** - Users don't have to understand bands

**Best practice:**

Modern routers with good band steering algorithms work well with combined SSIDs. Separate SSIDs are useful when you need explicit control or have problematic devices.

---

## Section 2: Activity Solutions

### Activity A-B: Wi-Fi Analysis Reference

**Recommended channel settings:**

| Band | Recommended | Avoid |
|------|-------------|-------|
| 2.4 GHz | 1, 6, or 11 (whichever least congested) | 2-5, 7-10 (overlap) |
| 5 GHz | Any channel, prefer DFS channels if supported | Crowded low channels |

**DFS (Dynamic Frequency Selection) channels:**

Channels 52-144 on 5 GHz require DFS because they're shared with radar. Benefits:
- Usually less congested
- Routers must detect radar and switch if needed
- Not all devices support all DFS channels

**Reading Wi-Fi analyzer results:**

- **Signal strength (dBm):** Higher number (closer to 0) is stronger
- **Channel overlap:** Count networks within ±4 channels on 2.4 GHz
- **Security:** Look for WPA2/WPA3; WEP or Open are security risks

---

### Activity C: 802.11 Standards - Complete

| Standard | Marketing Name | Frequency | Max Speed | Year |
|----------|----------------|-----------|-----------|------|
| 802.11a | (none) | 5 GHz | 54 Mbps | 1999 |
| 802.11b | (none) | 2.4 GHz | 11 Mbps | 1999 |
| 802.11g | (none) | 2.4 GHz | 54 Mbps | 2003 |
| 802.11n | Wi-Fi 4 | 2.4/5 GHz | 600 Mbps | 2009 |
| 802.11ac | Wi-Fi 5 | 5 GHz only | 6.9 Gbps | 2013 |
| 802.11ax | Wi-Fi 6/6E | 2.4/5/6 GHz | 9.6 Gbps | 2019 |

**Key improvements by generation:**

**802.11n (Wi-Fi 4):**
1. MIMO (multiple spatial streams)
2. Dual-band support (2.4 and 5 GHz)
3. Channel bonding (40 MHz channels)
4. Frame aggregation
5. Backward compatible with a/b/g

**802.11ac (Wi-Fi 5):**
1. Wider channels (80 MHz, 160 MHz)
2. More spatial streams (up to 8)
3. MU-MIMO (multi-user, downlink only)
4. 256-QAM modulation
5. Beamforming standardized

**802.11ax (Wi-Fi 6):**
1. OFDMA (serve multiple clients per transmission)
2. MU-MIMO uplink and downlink
3. 1024-QAM modulation
4. Target Wake Time (battery savings)
5. BSS Coloring (interference reduction)
6. Works on 2.4 GHz AND 5 GHz

**Wi-Fi 6E:**

Same as Wi-Fi 6 but adds the 6 GHz band:
- 1200 MHz of new spectrum
- Up to 59 new 20 MHz channels (or 7 x 160 MHz channels)
- Less congestion (only Wi-Fi 6E devices)
- Requires WPA3

---

### Activity D: Device Capability Reference

**How to check wireless capabilities:**

**Windows command:**
```
netsh wlan show drivers
```

Look for "Radio types supported" line:
- 802.11b, 802.11g = Very old
- 802.11n = Wi-Fi 4
- 802.11ac = Wi-Fi 5
- 802.11ax = Wi-Fi 6

**Common device capabilities by era:**

| Device Age | Typical Support | Notes |
|------------|-----------------|-------|
| Pre-2009 | 802.11b/g | 2.4 GHz only |
| 2009-2013 | 802.11n | Possibly dual-band |
| 2013-2019 | 802.11ac | 5 GHz capable |
| 2019+ | 802.11ax | Wi-Fi 6 |
| 2021+ | 802.11ax 6E | Wi-Fi 6E (6 GHz) |

**Network speed limited by slowest client?**

Not exactly. 802.11b devices on a modern network can slow down the entire network due to:
- Protection mechanisms (CTS/RTS)
- Longer transmission times blocking airtime

However, 5 GHz networks are unaffected by 2.4 GHz-only devices.

---

### Activity E: Signal Strength Reference

**Signal strength guidelines:**

| dBm | Quality | Suitable For |
|-----|---------|--------------|
| -30 to -50 | Excellent | Any application |
| -50 to -60 | Very Good | HD streaming, video calls |
| -60 to -67 | Good | Web, email, light streaming |
| -67 to -70 | Fair | Basic connectivity |
| -70 to -80 | Weak | May work, expect issues |
| -80+ | Very Weak | Unreliable, frequent drops |

**2.4 GHz vs 5 GHz penetration:**

5 GHz typically loses 6-10 dB more per wall than 2.4 GHz. In practical terms:
- 5 GHz: Excellent in same room, degrades quickly through walls
- 2.4 GHz: Good throughout home, but slower and more interference

**Common dead zone causes:**
- Distance from router
- Multiple walls/floors
- Metal objects (filing cabinets, appliances)
- Concrete/brick walls
- Mirror/glass (can reflect signals)
- Competing Wi-Fi networks

---

### Activity F: Channel Width Reference

| Width | Channels Used | Speed Gain | Downside |
|-------|---------------|------------|----------|
| 20 MHz | 1 channel | Baseline | None |
| 40 MHz | 2 channels | ~2x | More interference susceptibility |
| 80 MHz | 4 channels | ~4x | Fewer available channels |
| 160 MHz | 8 channels | ~8x | Very limited availability |

**Best practices:**

| Band | Recommended Width | Why |
|------|-------------------|-----|
| 2.4 GHz | 20 MHz | Only 3 non-overlapping channels; 40 MHz causes overlap |
| 5 GHz | 80 MHz typical | Good balance of speed and channel availability |
| 5 GHz (uncongested) | 160 MHz | If you have the spectrum available |
| 6 GHz | 160 MHz | Plenty of spectrum, maximize speed |

**Why 20 MHz for 2.4 GHz:**

With only channels 1, 6, and 11 available:
- 20 MHz = 3 networks can coexist
- 40 MHz = Only 1 network without overlap

In apartments or dense areas, 40 MHz on 2.4 GHz guarantees interference.

---

### Activity G: Wireless Modes Reference

**Mode compatibility:**

| If Router Is Set To | These Devices Can Connect |
|---------------------|---------------------------|
| b only | b only |
| g only | g only |
| b/g | b and g |
| b/g/n | b, g, and n |
| n only | n only |
| ax only | ax only |
| Mixed (recommended) | All supported standards |

**Performance impact of legacy modes:**

When an 802.11b device transmits:
1. It uses longer transmission times (slower modulation)
2. All other devices must wait
3. Network must use protection mechanisms

**Example:** One 802.11b device can reduce overall network throughput by 50-80%.

**When to disable legacy:**
- If no b/g devices need connection
- Performance is critical
- Security (older standards have vulnerabilities)

---

### Activity H: Wireless Technologies Reference

**Bluetooth versions:**

| Version | Speed | Range | Key Feature |
|---------|-------|-------|-------------|
| 4.0 | 1 Mbps | 50m | BLE (Low Energy) introduced |
| 4.2 | 1 Mbps | 50m | IoT improvements, better privacy |
| 5.0 | 2 Mbps | 200m | 4x range, 2x speed |
| 5.2 | 2 Mbps | 200m | LE Audio, broadcast audio |
| 5.3 | 2 Mbps | 200m | Improved efficiency |

**Bluetooth vs Wi-Fi:**

| Feature | Bluetooth | Wi-Fi |
|---------|-----------|-------|
| Primary use | Peripherals, audio | Network connectivity |
| Range | 10-100m | 30-100m indoors |
| Speed | 1-3 Mbps | 100-1000+ Mbps |
| Power | Very low | Higher |
| Frequency | 2.4 GHz | 2.4/5/6 GHz |
| Connections | Point-to-point, piconet | Network (many devices) |

**Other wireless technologies:**

| Technology | Use Case | Range |
|------------|----------|-------|
| NFC | Payments, pairing | 4 cm |
| RFID | Inventory, access cards | Varies (cm to meters) |
| Zigbee | Smart home (lights, sensors) | 10-100m |
| Z-Wave | Smart home (locks, thermostats) | 30-100m |
| IR | Remote controls | Line of sight, 10m |

**NFC vs RFID:**

- NFC is a subset of RFID
- NFC: 13.56 MHz, very short range, two-way
- RFID: Various frequencies, longer range, typically one-way

---

### Activity I: Security Reference

**Wireless security comparison:**

| Mode | Security | Use It? |
|------|----------|---------|
| Open | None | Never (except intentional guest) |
| WEP | Broken (crackable in minutes) | Never |
| WPA | Weak (TKIP deprecated) | Avoid |
| WPA2-Personal (PSK) | Good | Yes, minimum standard |
| WPA2-Enterprise | Better (individual credentials) | Business recommended |
| WPA3-Personal | Best (SAE, forward secrecy) | Yes, if supported |
| WPA3-Enterprise | Best | Enterprise recommended |

**WPA3 improvements:**
- SAE (Simultaneous Authentication of Equals) replaces PSK
- Forward secrecy (past traffic can't be decrypted)
- Protection against offline dictionary attacks
- 192-bit security mode for enterprise

**WPS (Wi-Fi Protected Setup):**

Disable it. WPS has known vulnerabilities that allow brute-force attacks in hours. The convenience isn't worth the security risk.

**Password best practices:**
- Minimum 12 characters (longer is better)
- Mix of letters, numbers, symbols
- Not based on dictionary words
- Unique (not reused elsewhere)

---

### Activity J: Speed Test Reference

**Expected speed relationships:**

| Connection | Typical % of ISP Speed |
|------------|------------------------|
| Wired Ethernet | 95-100% |
| 5 GHz (near router) | 80-95% |
| 5 GHz (far/through walls) | 40-70% |
| 2.4 GHz (near) | 50-80% |
| 2.4 GHz (far) | 30-60% |

**Why wireless is slower than wired:**

1. Shared medium (all devices share airtime)
2. Interference from other networks
3. Protocol overhead
4. Half-duplex (can't send and receive simultaneously)
5. Signal attenuation through walls
6. Client device limitations

**Speed limiting factors:**

Your Wi-Fi speed is limited by the slowest link:
- ISP plan speed
- Router's WAN port speed
- Router's wireless capability
- Client device's wireless capability
- Signal strength
- Interference
- Number of connected devices

**Example:** A Wi-Fi 6 router won't help if your laptop only supports Wi-Fi 5, or if your ISP plan is 100 Mbps.

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Slow Wi-Fi Two Rooms Away

**Troubleshooting steps:**

1. **Check signal strength** - Use Wi-Fi analyzer; if below -70 dBm on 5 GHz, that's the issue

2. **Compare bands** - Test 2.4 GHz in same location; may be stronger through walls

3. **Check channel congestion** - Neighboring networks may be causing interference

4. **Test with different device** - Rule out laptop-specific issues

5. **Consider solutions:**
   - Switch to 2.4 GHz for that location
   - Add access point or mesh node
   - Use Ethernet if possible
   - Powerline adapter + AP

**Root cause likely:** 5 GHz doesn't penetrate walls well. Two walls significantly degrades signal.

---

### Scenario 2: Small Business with Congestion

**Analysis:**

- 15 users on one AP = borderline overloaded
- Channels 1 and 6 crowded = interference guaranteed
- Video calls need consistent bandwidth

**Recommendations:**

1. **Switch to channel 11** (or least congested 5 GHz channel)

2. **Add second access point** - 15 users can overwhelm a single AP during video calls

3. **Configure QoS** - Prioritize video/voice traffic

4. **Separate bands** - Put video conferencing on 5 GHz, IoT on 2.4 GHz

5. **Enable band steering** - Push capable devices to 5 GHz

6. **Consider Wi-Fi 6** - OFDMA handles multiple simultaneous users better

7. **Wired connections** - For stationary desks, Ethernet is always more reliable

---

### Scenario 3: Wi-Fi 6 Router, No Speed Improvement

**Explanation:**

| Bottleneck | Why No Improvement |
|------------|-------------------|
| Old laptop | Doesn't support Wi-Fi 6, connects as Wi-Fi 4/5 |
| 100 Mbps ISP | Internet speed limits max throughput |
| Distance | Router upgrade doesn't improve coverage |

**What would actually help:**

1. **Faster ISP plan** - If budget allows
2. **Better router placement** - Improve signal where needed
3. **Mesh system** - If coverage is the issue
4. **New laptop** - If internal network speed matters
5. **Wired connection** - Guaranteed 100 Mbps vs wireless variability

**Key point:** Wi-Fi 6 benefits come from:
- Multiple Wi-Fi 6 devices
- High-speed internet plans
- Dense environments (many devices)
- Battery life for IoT

A single 2015 laptop on 100 Mbps internet won't notice the difference.

---

### Scenario 4: Warehouse with Metal Shelving

**Recommendation: Prioritize 2.4 GHz**

**Reasons:**

1. **Better penetration** - 2.4 GHz bends around metal obstacles better

2. **Longer range** - Fewer APs needed for coverage

3. **Forklift movement** - Devices moving through the space benefit from 2.4 GHz's forgiveness

4. **Industrial devices** - Many warehouse scanners/devices only support 2.4 GHz

**Implementation:**

- Deploy multiple APs for coverage (metal blocks signals)
- Use directional antennas if appropriate
- Consider industrial-grade APs rated for harsh environments
- Test thoroughly with actual equipment moving
- Have some 5 GHz coverage for offices/break rooms

**5 GHz would be appropriate for:** Office areas within the warehouse, stationary workstations, high-bandwidth applications in clear line-of-sight areas.

---

## Key Takeaways

**For the A+ Exam:**

1. **2.4 GHz channels:** 1, 6, 11 (non-overlapping)

2. **Standards to know:**
   - 802.11a: 5 GHz, 54 Mbps
   - 802.11b: 2.4 GHz, 11 Mbps
   - 802.11g: 2.4 GHz, 54 Mbps
   - 802.11n: Dual-band, 600 Mbps (Wi-Fi 4)
   - 802.11ac: 5 GHz, multi-gigabit (Wi-Fi 5)
   - 802.11ax: Dual-band + 6 GHz, 9.6 Gbps (Wi-Fi 6)

3. **2.4 GHz:** Longer range, more interference, slower
   **5 GHz:** Shorter range, less interference, faster

4. **MIMO:** Multiple antennas for multiple simultaneous streams

5. **Security order:** WPA3 > WPA2 > WPA > WEP (never) > Open (never)

6. **Wi-Fi 6 features:** OFDMA, MU-MIMO (up/down), 1024-QAM, TWT

**For Real-World Skills:**

- Always check channel congestion before blaming speed issues
- 5 GHz is fast but doesn't go through walls well
- Disable WPS on all routers
- Signal strength in dBm: closer to 0 is better
- Wi-Fi upgrades only help if all devices support the new standard
- When in doubt, Ethernet is always more reliable

---

**Congratulations on completing Lab 9!**

You now understand wireless networking standards, frequencies, and practical configuration. This knowledge is essential for troubleshooting the Wi-Fi issues you'll encounter constantly in IT support.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 9: Wireless Networking Standards - Solution Guide*