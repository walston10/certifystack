# Lesson 13 Lab - Answer Key

**Wireless Networking (Wi-Fi 6/6E, 802.11)**

---

## Section 1: Concept Check

1. **b) 1, 6, 11**
   - Only 3 non-overlapping channels in 2.4 GHz
   - Each channel is 20 MHz wide
   - Channels are 5 MHz apart
   - Must be 5 channels apart to not overlap

2. **c) 802.11ax (Wi-Fi 6/6E)**
   - Wi-Fi 6: 2.4 and 5 GHz
   - Wi-Fi 6E: adds 6 GHz band
   - Latest ratified standard (2019)
   - Wi-Fi 7 (802.11be) is coming but not finalized

3. **b) 5 GHz**
   - 802.11a: First 5 GHz standard (1999)
   - 54 Mbps max
   - Never popular (expensive, short range)
   - Largely skipped in favor of 802.11g

4. **b) Service Set Identifier**
   - Network name you see when scanning
   - Can be up to 32 characters
   - Case-sensitive
   - Can be hidden but still broadcast

5. **c) More channels, less interference**
   - 24+ non-overlapping channels in 5 GHz
   - Less congested
   - No microwave interference
   - Trade-off: shorter range

---

## Section 2: Hands-On Activity

### Activity A: WiFi Adapter Identification

**Expected output (Windows):**
```
C:\>netsh wlan show drivers

Interface name: Wi-Fi
Driver: Intel(R) Wi-Fi 6 AX201 160MHz
Radio types supported: 802.11ax 802.11ac 802.11n 802.11g 802.11b
Channel: 36
```

**Common results:**

**Older laptop (2015-2018):**
- Standard: 802.11ac (Wi-Fi 5)
- Bands: 2.4 and 5 GHz
- Speed: Up to 867 Mbps (2×2 MIMO)

**Modern laptop (2020+):**
- Standard: 802.11ax (Wi-Fi 6)
- Bands: 2.4 and 5 GHz (maybe 6 GHz)
- Speed: Up to 2400 Mbps (2×2 MIMO)

**Budget devices:**
- Standard: 802.11n (Wi-Fi 4)
- Band: Usually only 2.4 GHz
- Speed: Up to 300 Mbps

---

**What standard tells you:**

**802.11n (Wi-Fi 4):**
- Released 2009
- 600 Mbps max (theoretical)
- Usually 150-300 Mbps (real world)
- Dual-band capable

**802.11ac (Wi-Fi 5):**
- Released 2013
- Multi-gigabit speeds
- 5 GHz only
- MU-MIMO support

**802.11ax (Wi-Fi 6):**
- Released 2019
- Up to 9.6 Gbps (theoretical)
- Both 2.4 and 5 GHz
- Improved efficiency (OFDMA)
- Better in crowded areas

---

### Activity B: Network Scan Results

**Typical results (apartment/urban):**

**Your network:**
- SSID: "MyNetwork"
- Signal: 80% (-50 dBm)
- Channel: 6 (2.4 GHz) or 36 (5 GHz)
- Frequency: 5 GHz (if modern)

**Neighbor networks:**

| SSID | Channel | Signal | Frequency |
|------|---------|--------|-----------|
| NETGEAR45 | 6 | 60% | 2.4 GHz |
| TP-LINK_Home | 11 | 40% | 2.4 GHz |
| Linksys01234 | 1 | 55% | 2.4 GHz |
| CenturyLink4567 | 6 | 35% | 2.4 GHz |

**Common observations:**
- 10-30 networks visible (urban)
- Most on 2.4 GHz (better range)
- Channels 1, 6, 11 most common
- Many overlapping (interference!)

---

**Channel distribution:**
- Channel 1: 30%
- Channel 6: 50% ⚠️ (most congested!)
- Channel 11: 20%
- Channels 2-5, 7-10: 0% (bad choice - overlap!)

**Problem:** Everyone on channel 6 = massive interference!

---

### Activity C: Channel Overlap Analysis

**2.4 GHz channel layout:**
```
Frequency: 2.412 GHz - 2.484 GHz (72 MHz total)

Channel 1:  [====2.412 GHz====]
Channel 2:   [====2.417 GHz====]
Channel 3:    [====2.422 GHz====]
Channel 4:     [====2.427 GHz====]
Channel 5:      [====2.432 GHz====]
Channel 6:       [====2.437 GHz====]
Channel 7:        [====2.442 GHz====]
Channel 8:         [====2.447 GHz====]
Channel 9:          [====2.452 GHz====]
Channel 10:          [====2.457 GHz====]
Channel 11:           [====2.462 GHz====]

Non-overlapping:
Channel 1:  [====]
Channel 6:                [====]
Channel 11:                        [====]
```

**Each channel = 20 MHz wide**
**Channels are only 5 MHz apart**
**Overlap = interference!**

---

**Scenario analysis:**

**Bad setup:**
- Your network: Channel 6
- Neighbor 1: Channel 5
- Neighbor 2: Channel 7
- **Result:** All three overlap! Everyone interferes with everyone.

**Good setup:**
- Your network: Channel 1
- Neighbor 1: Channel 6
- Neighbor 2: Channel 11
- **Result:** No overlap, no interference!

**Best solution:** Use 5 GHz (24+ non-overlapping channels!)

---

### Activity D: Signal Strength Results

**Typical measurements:**

| Location | Distance | Signal (dBm) | Signal (%) | Speed |
|----------|----------|--------------|------------|-------|
| Next to router | 5 ft | -30 dBm | 100% | 500 Mbps |
| Same room | 15 ft | -45 dBm | 85% | 450 Mbps |
| One room away | 30 ft | -60 dBm | 65% | 300 Mbps |
| Far room | 50 ft | -75 dBm | 35% | 100 Mbps |
| Through 3 walls | varies | -80 dBm | 15% | 50 Mbps |

**Signal degradation factors:**

**Distance:**
- Follows inverse-square law
- Double distance = 1/4 power
- 10 ft: -40 dBm → 20 ft: -46 dBm → 40 ft: -52 dBm

**Walls:**
- Drywall: -3 to -5 dB
- Wood: -5 to -10 dB
- Brick: -10 to -15 dB
- Concrete: -15 to -20 dB
- Metal: -20+ dB (blocks almost everything)

**Floor/Ceiling:**
- Worse than walls (often concrete)
- -15 to -25 dB loss

**Other obstacles:**
- Water (aquarium, human bodies): High attenuation
- Metal (appliances, filing cabinets): Very high
- Mirrors: Reflect signal

---

**Real-world lesson:**
- WiFi works great close to router
- Every obstacle degrades signal
- Multiple walls = exponential decay
- Solution: Multiple APs or mesh network

---

### Activity E: 2.4 GHz vs 5 GHz

**Typical comparison:**

**2.4 GHz test:**
- Speed (close): 100-200 Mbps
- Speed (far): 50-100 Mbps
- Signal (far room): -70 dBm (decent)
- Range: Good

**5 GHz test:**
- Speed (close): 400-866 Mbps
- Speed (far): 100-200 Mbps
- Signal (far room): -80 dBm (weak)
- Range: Fair

---

**Detailed comparison:**

| Feature | 2.4 GHz | 5 GHz |
|---------|---------|-------|
| **Speed** | Up to 600 Mbps | Up to 6.9 Gbps |
| **Range** | ~150 ft indoors | ~50 ft indoors |
| **Wall penetration** | Better | Worse |
| **Interference** | High (crowded) | Low (less used) |
| **Channels** | 3 usable (1, 6, 11) | 24+ non-overlapping |
| **Microwave interference** | Yes | No |
| **Device support** | Universal | Modern devices |
| **Congestion** | Very high (urban) | Low to moderate |

---

**Real-world guidance:**

**Use 2.4 GHz when:**
- Device is far from router (50+ feet)
- Multiple walls between device and router
- Device doesn't support 5 GHz (IoT, old devices)
- Need reliable connection over speed

**Use 5 GHz when:**
- Device is close to router (< 50 feet)
- Need maximum speed (streaming, gaming)
- In crowded area (apartments, offices)
- Modern device with good 5 GHz support

**Best practice:** Enable both, let devices choose!

---

### Activity F: WiFi Standards

**Complete table:**

| Speed | Frequency | Standard | Marketing Name | Year |
|-------|-----------|----------|----------------|------|
| 11 Mbps | 2.4 GHz | **802.11b** | Legacy | 1999 |
| 54 Mbps | 2.4 GHz | **802.11g** | Legacy | 2003 |
| 54 Mbps | 5 GHz | **802.11a** | Legacy | 1999 |
| 600 Mbps | Both | **802.11n** | Wi-Fi 4 | 2009 |
| 1300+ Mbps | 5 GHz | **802.11ac** | Wi-Fi 5 | 2013 |
| 2400+ Mbps | 2.4/5/6 GHz | **802.11ax** | Wi-Fi 6/6E | 2019 |

**Additional details:**

**802.11b (1999):**
- First widespread WiFi
- Slow by today's standards
- Long range
- Interferes with 802.11g/n on 2.4 GHz

**802.11a (1999):**
- Same time as 802.11b
- Faster but shorter range
- Expensive, never popular
- Largely skipped

**802.11g (2003):**
- Backward compatible with 802.11b
- Same range as 802.11b
- Popular in mid-2000s

**802.11n (2009) - Wi-Fi 4:**
- First dual-band (2.4 and 5 GHz)
- MIMO support
- Channel bonding (40 MHz)
- Still common today

**802.11ac (2013) - Wi-Fi 5:**
- 5 GHz only
- MU-MIMO
- 80/160 MHz channels
- Gigabit+ speeds
- Current mainstream standard

**802.11ax (2019) - Wi-Fi 6:**
- Both bands (Wi-Fi 6) or all three bands (Wi-Fi 6E with 6 GHz)
- OFDMA (better efficiency)
- Target Wake Time (battery saving)
- Better in crowded environments
- Still rolling out

---

### Activity G: SSID Broadcasting

**Broadcasting (default):**
- SSID visible in WiFi list
- Easy to connect
- User-friendly
- **Recommended** ✅

**Hidden:**
- SSID not in WiFi list
- Must manually enter name
- Harder to connect
- Breaks some features (fast roaming)
- **Security through obscurity** (doesn't work!)

---

**Why hiding SSID is ineffective:**

1. **SSID still broadcast:** Even "hidden" SSIDs are sent in beacon frames
2. **Easily detected:** WiFi analyzers see hidden networks
3. **Device probe requests:** Your device broadcasts SSID when searching
4. **Breaks features:** Roaming, fast reconnect affected
5. **False security:** Users think they're secure when they're not

**Real security:**
- WPA3 encryption (or WPA2 minimum)
- Strong password (20+ characters)
- MAC filtering (limited benefit)
- Guest network for visitors

**Best practice:** 
- Broadcast SSID
- Use descriptive name
- Enable WPA3
- Strong password

---

### Activity H: Interference Sources

**Common 2.4 GHz interferers:**

**Microwave ovens:**
- Massive interference when running
- Same 2.4 GHz frequency
- Can completely block WiFi for 20-30 feet
- Test: Run microwave, watch speed drop to 0

**Bluetooth:**
- Uses 2.4 GHz (2.400-2.4835 GHz)
- Frequency hopping reduces interference
- Usually not major issue
- Can affect throughput slightly

**Cordless phones (2.4 GHz):**
- Older DECT phones
- Continuous interference when in use
- Solution: Use 5.8 GHz phones or wired

**Baby monitors:**
- Often 2.4 GHz
- Constant transmission
- Can cause major issues
- Solution: Move away or use different frequency

**USB 3.0 devices:**
- Surprising source of interference!
- USB 3.0 = 2.4 GHz frequency range
- Poor shielding causes leakage
- Solution: Use USB 2.0 or shielded cables

**Neighbor WiFi:**
- Most common interference
- Overlapping channels = major issue
- Solution: Use 5 GHz or channel 1/6/11

**Fluorescent lights:**
- Ballasts can cause interference
- Particularly older lights
- Usually minor

---

**5 GHz benefits:**
- No microwave interference
- Less Bluetooth interference
- Fewer devices use it
- Cleaner spectrum

---

### Activity I: Channel Bonding

**Channel width options:**

**20 MHz (standard):**
- Single channel
- Basic speed
- Most compatible
- Best for crowded 2.4 GHz

**40 MHz (2× bonded):**
- Two 20 MHz channels combined
- 2× speed increase
- 802.11n and later
- Doubles spectrum usage
- OK for 5 GHz, risky for 2.4 GHz

**80 MHz (4× bonded):**
- Four 20 MHz channels combined
- 4× speed increase
- 802.11ac and later
- 5 GHz only
- Common today

**160 MHz (8× bonded):**
- Eight 20 MHz channels combined
- 8× speed increase
- 802.11ac Wave 2 and 802.11ax
- 5 GHz only
- Maximum speed but rare

---

**Speed comparison (2×2 MIMO):**

| Width | 802.11ac Speed | 802.11ax Speed |
|-------|----------------|----------------|
| 20 MHz | 173 Mbps | 229 Mbps |
| 40 MHz | 400 Mbps | 458 Mbps |
| 80 MHz | 867 Mbps | 1201 Mbps |
| 160 MHz | 1733 Mbps | 2402 Mbps |

---

**Best practices:**

**2.4 GHz:**
- Use 20 MHz ONLY
- 40 MHz causes too much interference
- Not worth the speed increase

**5 GHz:**
- 40 MHz: Safe, good balance
- 80 MHz: Great for speed (recommended)
- 160 MHz: Maximum speed but limited channels

**Your environment matters:**
- Crowded (apartments): 20-40 MHz
- Less crowded (house): 80 MHz
- Very open (rural): 80-160 MHz

---

### Activity J: MIMO Configuration

**MIMO explained:**

**1×1 MIMO (1 antenna):**
- Budget devices
- Phones, tablets, IoT
- 802.11ac: 433 Mbps max

**2×2 MIMO (2 antennas):**
- Most common
- Laptops, phones
- 802.11ac: 867 Mbps max
- 802.11ax: 1200 Mbps max

**3×3 MIMO (3 antennas):**
- Higher-end laptops
- Some routers
- 802.11ac: 1300 Mbps max

**4×4 MIMO (4 antennas):**
- High-end routers
- Some desktop adapters
- 802.11ac: 1733 Mbps max

---

**MU-MIMO (Multi-User MIMO):**

**Without MU-MIMO (traditional):**
```
Router → Device 1 (100ms)
Router → Device 2 (100ms)
Router → Device 3 (100ms)
Total time: 300ms
```

**With MU-MIMO:**
```
Router → Device 1, 2, 3 simultaneously (100ms)
Total time: 100ms
```

**Benefits:**
- 3-4× more efficient
- Less latency
- Better when many devices connected
- Requires MU-MIMO on both router AND devices

**Wi-Fi 5 (802.11ac):** MU-MIMO downlink only
**Wi-Fi 6 (802.11ax):** MU-MIMO both up and down

---

### Activity K: Roaming

**How roaming works:**

**Scenario:** Walking from living room to bedroom

```
Living room: AP1 (BSSID: AA:BB:CC:DD:EE:01)
Hallway: Signal drops
Bedroom: AP2 (BSSID: AA:BB:CC:DD:EE:02)
```

**Good roaming:**
1. Device monitors signal strength
2. At ~-70 dBm, starts looking for better AP
3. Finds AP2 with -50 dBm
4. Authenticates with AP2
5. Switches seamlessly (< 50ms)
6. No dropped connection

**Bad roaming (sticky client):**
1. Device holds onto AP1 even at -80 dBm
2. Connection becomes slow/unstable
3. User must manually disconnect/reconnect
4. OR wait for complete disconnect

---

**Roaming standards:**

**802.11r (Fast Roaming):**
- Pre-authentication
- < 50ms handoff
- Critical for VoIP/video

**802.11k (Neighbor Reports):**
- AP tells device about nearby APs
- Faster discovery

**802.11v (BSS Transition Management):**
- AP suggests device roam
- Prevents sticky clients

**802.11w (Protected Management Frames):**
- Secures roaming process
- Prevents deauth attacks

---

**Mesh vs Repeater roaming:**

**Mesh (better):**
- Single SSID
- Coordinated roaming
- Seamless handoff
- Example: Eero, Google WiFi, Orbi

**Repeater (worse):**
- Different SSIDs often
- Manual switching
- Potential dead zones

---

### Activity L: WiFi Design

**Office WiFi design (5,000 sq ft):**

**1. Number of APs:**
- Rule: 2,000-2,500 sq ft per AP (802.11ac/ax)
- 5,000 sq ft ÷ 2,000 = 2.5
- **Answer: 3 APs** (for good coverage)

**Placement:**
- AP1: Main office area (north)
- AP2: Conference room (center)
- AP3: Lobby (south)
- Avoid corners (wasted coverage)

---

**2. Channel assignment (2.4 GHz):**
- AP1: Channel 1
- AP2: Channel 6
- AP3: Channel 11
- **Maximum separation = minimum interference**

**5 GHz channels (better):**
- AP1: Channel 36
- AP2: Channel 48
- AP3: Channel 60
- 24+ channels available, easy!

---

**3. SSID design:**

**Employees:**
- SSID: "CompanyName-WiFi"
- Same SSID on all APs
- WPA3-Enterprise (802.1X)
- Roaming enabled

**Guests:**
- SSID: "CompanyName-Guest"
- Separate VLAN (no internal access)
- Captive portal
- Bandwidth limits
- Short lease times

**Do NOT:**
- Different SSIDs per AP (breaks roaming)
- Hidden SSIDs (causes issues)
- WEP or WPA (insecure)

---

**4. Frequency selection:**

**Primary: 5 GHz**
- Higher speeds
- Less interference
- Most office devices support it
- Better for dense environments

**Secondary: 2.4 GHz**
- Longer range (conference room to corners)
- Legacy device support
- IoT devices (printers, sensors)
- Backup when 5 GHz congested

**Best: Dual-band**
- Enable both on all APs
- Devices choose automatically
- Band steering (push devices to 5 GHz)

---

**Additional considerations:**

**Power levels:**
- Don't max out power!
- Overlapping coverage causes sticky clients
- -65 to -70 dBm target at boundaries

**Controller vs standalone:**
- 3 APs: Controller recommended
- Centralized management
- Easier roaming
- Unified policies

**Capacity planning:**
- 30 employees + 12 conference + 10 guests = 52 devices
- Average: 20 devices per AP
- 3 APs handle this easily

---

## Section 3: Reflection

**1. 20 visible networks, all 2.4 GHz:**

**Why so slow?**
- Channel congestion
- Co-channel interference
- Overlapping channels
- Everyone competes for same spectrum

**What channels are they using?**
- Mostly channels 1, 6, 11 (good)
- But also 2, 3, 4, 5, 7, 8, 9, 10 (bad - overlap!)
- Some people don't know to use 1, 6, 11

**Best solutions:**
1. **Switch to 5 GHz** (best option) ✅
   - Less crowded
   - 24+ channels
   - Higher speeds
2. **Find least-used channel** (1, 6, or 11)
   - Use WiFi analyzer
   - Pick channel with weakest neighbors
3. **Upgrade to WiFi 6** (helps with congestion)
   - OFDMA improves efficiency
   - Better in crowded environments

**Last resort:** Complain to neighbors to use proper channels!

---

**2. WiFi 6 vs WiFi 5 upgrade:**

**Speed difference:**
- Similar max speeds (2.4 Gbps vs 2.6 Gbps for 2×2)
- Real benefit: Efficiency, not raw speed

**WiFi 6 advantages:**
- **OFDMA:** Better in crowded areas
- **TWT:** Better battery life for IoT
- **BSS Coloring:** Less interference
- **Better multi-device performance**

**Device support:**
- iPhone 11+ supports WiFi 6
- Android flagships (2020+)
- Laptops (2020+)
- Need both router AND device

**Cost vs benefit:**
- New router: $100-300
- WiFi 5: $50-150
- Difference: $50-150

**Worth it if:**
- Many devices (10+)
- High-density environment
- IoT devices (battery life)
- Future-proofing

**Not worth it if:**
- Few devices (< 5)
- WiFi 5 works fine
- Devices don't support WiFi 6

---

**3. Hiding SSID for security:**

**Does it improve security?** NO ❌

**Why not:**
- SSID still transmitted (in probe requests)
- WiFi analyzers see hidden networks
- Packets contain SSID
- Easily discovered by anyone who wants to

**Downsides:**
- Harder to connect (must type name)
- Breaks fast roaming
- Breaks some IoT devices
- Inconvenience with no benefit

**What's better:**
- Strong WPA3 encryption
- Long random password (20+ characters)
- Unique SSID (not default)
- Guest network for visitors
- Regular firmware updates

**Conclusion:** Hiding SSID is **security theater** - looks secure but isn't!

---

**4. Warehouse WiFi:**

**Challenges:**
- **Metal structure:** Reflects and blocks signals
- **Large open space:** Long distances
- **High ceilings:** APs far from devices
- **Industrial interference:** Motors, equipment
- **Concrete floor:** Poor floor penetration

**Solutions:**

**1. More APs (best):**
- Every 100-150 ft (not 200+ like offices)
- Industrial-rated APs
- Directional antennas
- Mount high (avoid forklift damage)

**2. Mesh network:**
- Wired backhaul where possible
- Wireless mesh where not
- Self-healing topology

**3. 5 GHz preference:**
- Less interference from industrial equipment
- Better performance
- Shorter range compensated by more APs

**4. Predictive site survey:**
- Use heat map software
- Model metal structure
- Identify dead zones
- Plan AP placement before installation

**5. Industrial-grade equipment:**
- IP67/IP68 rated (dust/water)
- Extended temperature range
- Shock/vibration resistant
- PoE+ or PoE++ for power

**Reality:** Warehouse WiFi is HARD. Budget 2-3× normal AP count!

---

## Key Concepts Summary

**WiFi standards:**
- 802.11n (Wi-Fi 4): 600 Mbps, dual-band
- 802.11ac (Wi-Fi 5): 1.3+ Gbps, 5 GHz
- 802.11ax (Wi-Fi 6): 2.4+ Gbps, tri-band (6E)

**Frequencies:**
- 2.4 GHz: Longer range, more interference, 3 usable channels
- 5 GHz: Higher speed, less interference, 24+ channels
- 6 GHz: WiFi 6E only, lots of clean spectrum

**Channels:**
- 2.4 GHz: Use only 1, 6, or 11
- 5 GHz: Many options, less overlap

**Signal:**
- Degrades with distance
- Walls attenuate signal
- 5 GHz has shorter range than 2.4 GHz

**Technologies:**
- MIMO: Multiple antennas
- MU-MIMO: Simultaneous multi-device
- Beamforming: Directional signal

---

## Exam Tips

**Memorize:**
- Non-overlapping 2.4 GHz channels: 1, 6, 11
- 802.11a: 5 GHz, 54 Mbps
- 802.11b: 2.4 GHz, 11 Mbps
- 802.11g: 2.4 GHz, 54 Mbps
- 802.11n: Dual-band, 600 Mbps (Wi-Fi 4)
- 802.11ac: 5 GHz, gigabit+ (Wi-Fi 5)
- 802.11ax: Tri-band, 2.4+ Gbps (Wi-Fi 6/6E)

**Common questions:**
- "Non-overlapping 2.4 GHz channels?" → 1, 6, 11
- "Which is faster, 2.4 or 5 GHz?" → 5 GHz
- "Which has better range?" → 2.4 GHz
- "What is SSID?" → Service Set Identifier (network name)
- "Latest WiFi standard?" → 802.11ax (Wi-Fi 6)

---

## Did It Work?

If you were able to:
- ✅ Identify your WiFi adapter standard
- ✅ Scan and map nearby networks
- ✅ Understand channel overlap (1, 6, 11)
- ✅ Test signal at different distances
- ✅ Compare 2.4 vs 5 GHz performance
- ✅ Match standards to speeds
- ✅ Understand SSID broadcasting
- ✅ Identify interference sources
- ✅ Understand channel bonding
- ✅ Know MIMO configurations
- ✅ Design a WiFi network

**You understand wireless networking!**

WiFi is everywhere - homes, offices, airports, coffee shops. Understanding it is essential for modern networking!

**Next:** Network devices (routers, firewalls, load balancers, VPN concentrators)