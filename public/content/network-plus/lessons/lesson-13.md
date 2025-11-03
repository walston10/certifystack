# Lesson 13: Wireless Networking (Wi-Fi 6/6E, 802.11)

**Estimated Time:** 30-35 minutes  
**Domain:** Network Infrastructure  
**Exam Objectives Covered:** 2.4 - Wireless Standards and Technologies

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Identify 802.11 wireless standards and their speeds (a, b, g, n, ac, ax)
- Differentiate between 2.4 GHz, 5 GHz, and 6 GHz frequency bands
- Explain why channels 1, 6, and 11 are non-overlapping in 2.4 GHz
- Understand channel bonding and how it increases bandwidth
- Describe MIMO and MU-MIMO technologies
- Explain how beamforming improves wireless performance
- Configure SSIDs and understand broadcasting vs hidden networks
- Distinguish between infrastructure mode and ad-hoc mode
- Conduct wireless site surveys and interpret heat maps
- Understand wireless roaming and handoff
- Explain wireless controllers and their role in enterprise networks
- Describe wireless mesh network architecture

---

## Video Resources

🔹 **Wi-Fi Standards Overview:** [802.11 Explained - Professor Messer](https://www.youtube.com/watch?v=vA3c5hMLczA)  
🔹 **Wi-Fi 6 Features:** [Wi-Fi 6 and 6E - NetworkChuck](https://www.youtube.com/watch?v=YRzr56cwgCg)  
🔹 **Wireless Frequencies:** [2.4 GHz vs 5 GHz - PowerCert](https://www.youtube.com/watch?v=hBh5k9QgLzE)  
🔹 **MIMO and Beamforming:** [Wireless Technologies - Sunny Classroom](https://www.youtube.com/watch?v=XQaEZJsKDlI)  
🔹 **Site Surveys:** [Wireless Site Survey Basics - Professor Messer](https://www.youtube.com/watch?v=J9QF3V4LZ6Q)

---

## Introduction

Remember when the internet meant sitting at a desk with an Ethernet cable plugged into your computer? Now you walk into a coffee shop, pull out your phone, and instantly connect to Wi-Fi without thinking twice.

**Wireless networking is everywhere** - homes, offices, airports, stadiums, cities.

But behind that simple "Connected to Wi-Fi" message lies complex technology: radio frequencies, channel management, signal interference, roaming protocols, and security considerations.

**Wi-Fi isn't magic - it's carefully engineered radio communication.**

Think of it like broadcast radio stations. Each station operates on a specific frequency (95.5 FM, 101.1 FM). If two stations tried using the same frequency in the same area, you'd hear both mixed together - interference. Wireless networks work the same way, but with data instead of music.

**Why does wireless matter for Network+?**

The exam tests your understanding of 802.11 standards, frequency bands, channels, MIMO technology, SSIDs, and wireless design. You need to know not just "Wi-Fi works," but how it works, what each standard offers, and how to design wireless networks that perform well.

**Today's mission:** Master wireless standards from 802.11a through Wi-Fi 6E, understand frequency bands and channels, learn about MIMO and beamforming, and explore wireless network design.

Let's cut the cord and dive into wireless.

---

## 802.11 Wireless Standards: The Evolution of Wi-Fi

The **802.11** family of standards defines how wireless networks operate. Each iteration brought improvements in speed, range, or efficiency.

**Think of 802.11 standards like smartphone generations** - each new version is faster and more capable than the last.

---

### 802.11a (1999)

**Key specifications:**
- **Frequency:** 5 GHz
- **Max Speed:** 54 Mbps
- **Range:** ~35 meters indoors
- **Channels:** 23 non-overlapping channels

**Advantages:**
- Less interference (5 GHz was less crowded)
- More channels available
- Faster than 802.11b

**Disadvantages:**
- Higher frequency = shorter range
- Doesn't penetrate walls as well as 2.4 GHz
- More expensive hardware
- Incompatible with 802.11b devices

**Status:** Obsolete

---

### 802.11b (1999)

**Key specifications:**
- **Frequency:** 2.4 GHz
- **Max Speed:** 11 Mbps
- **Range:** ~38 meters indoors
- **Channels:** 3 non-overlapping (1, 6, 11)

**Advantages:**
- Longer range than 802.11a
- Better wall penetration
- Less expensive
- More widely adopted

**Disadvantages:**
- Slower than 802.11a
- More interference (2.4 GHz crowded with Bluetooth, microwaves, cordless phones)
- Only 3 non-overlapping channels

**Status:** Obsolete

**Historical note:** 802.11b vs 802.11a was the "VHS vs Betamax" of early Wi-Fi. 802.11b won due to better range and lower cost, despite being slower.

---

### 802.11g (2003)

**Key specifications:**
- **Frequency:** 2.4 GHz
- **Max Speed:** 54 Mbps
- **Range:** ~38 meters indoors
- **Channels:** 3 non-overlapping (1, 6, 11)

**Advantages:**
- Speed of 802.11a (54 Mbps)
- Range of 802.11b
- Backward compatible with 802.11b
- Best of both worlds

**Disadvantages:**
- Still stuck with 2.4 GHz interference
- Only 3 non-overlapping channels
- When 802.11b devices connect, entire network slows to 11 Mbps

**Status:** Obsolete (though still found in legacy devices)

---

### 802.11n (Wi-Fi 4) (2009)

**This was the game-changer.** 802.11n introduced technologies still used today.

**Key specifications:**
- **Frequency:** 2.4 GHz and/or 5 GHz (dual-band)
- **Max Speed:** 600 Mbps (theoretical, 4 spatial streams)
- **Range:** ~70 meters indoors
- **Channels:** Multiple, depending on frequency band

**Key technologies introduced:**

**MIMO (Multiple Input Multiple Output):**
- Uses multiple antennas for simultaneous data streams
- 4x4 MIMO = 4 transmit antennas, 4 receive antennas
- Dramatically increases throughput

**Channel Bonding:**
- Combines two 20 MHz channels into 40 MHz channel
- Doubles bandwidth (like adding lanes to a highway)

**Dual-band:**
- Can operate on 2.4 GHz or 5 GHz
- Reduced interference by moving devices to 5 GHz

**Advantages:**
- Much faster than previous standards
- Longer range
- Flexibility with dual-band
- MIMO improves reliability

**Disadvantages:**
- 40 MHz channels in 2.4 GHz cause more interference
- More complex configuration

**Status:** Still widely deployed, but being replaced

---

### 802.11ac (Wi-Fi 5) (2013)

**5 GHz only - focused on speed over compatibility.**

**Key specifications:**
- **Frequency:** 5 GHz only (no 2.4 GHz)
- **Max Speed:** 3.5 Gbps (theoretical, 8 spatial streams)
- **Typical Speed:** 1-2 Gbps in practice
- **Range:** ~50 meters indoors
- **Channels:** Many non-overlapping in 5 GHz

**Key improvements:**

**Wider Channels:**
- 80 MHz channels standard
- 160 MHz channels optional
- More bandwidth = more speed

**More MIMO:**
- Up to 8x8 MIMO (8 spatial streams)
- MU-MIMO (Multi-User MIMO) in Wave 2

**Beamforming:**
- Focuses signal toward specific clients
- Improves range and speed

**Better Modulation:**
- 256-QAM (denser data encoding)
- More bits per symbol

**Advantages:**
- Gigabit speeds over wireless
- Less interference (5 GHz only)
- MU-MIMO serves multiple devices simultaneously

**Disadvantages:**
- 5 GHz only (no 2.4 GHz for legacy devices)
- Shorter range than 2.4 GHz
- Doesn't penetrate walls as well

**Status:** Current standard in most modern devices

---

### 802.11ax (Wi-Fi 6 and Wi-Fi 6E) (2019)

**The latest standard - focused on efficiency in dense environments.**

**Key specifications:**
- **Frequency:** 2.4 GHz, 5 GHz, and 6 GHz (Wi-Fi 6E only)
- **Max Speed:** 9.6 Gbps (theoretical)
- **Typical Speed:** 1-3 Gbps in practice
- **Range:** Similar to 802.11ac

**Key improvements:**

**OFDMA (Orthogonal Frequency Division Multiple Access):**
- Divides channels into smaller sub-channels
- Multiple devices can transmit simultaneously in same channel
- Like a highway with multiple lanes instead of one wide lane

**Target Wake Time (TWT):**
- Devices schedule when to wake up and communicate
- Saves battery life on IoT devices and phones

**BSS Coloring:**
- Distinguishes between overlapping networks
- Reduces interference in dense areas

**Improved MU-MIMO:**
- Up to 8 devices simultaneously (uplink and downlink)
- Better performance in crowded environments

**1024-QAM:**
- Even denser data encoding than 256-QAM
- 25% faster than 802.11ac

**Wi-Fi 6E Addition (2020):**
- Adds entire 6 GHz band (1200 MHz of spectrum)
- 6 GHz has no legacy devices (clean spectrum)
- Up to 7 additional 160 MHz channels

**Advantages:**
- Better performance in crowded areas (apartments, stadiums)
- Lower latency
- Better battery life for devices
- Wi-Fi 6E has massive amounts of clean spectrum

**Disadvantages:**
- Requires new hardware
- 6 GHz range is shorter than 5 GHz
- Wi-Fi 6E not yet universal

**Status:** Current cutting-edge, becoming standard in new devices

---

## 802.11 Standards Comparison Table

| Standard | Year | Frequency | Max Speed | Range | Key Feature |
|----------|------|-----------|-----------|-------|-------------|
| **802.11a** | 1999 | 5 GHz | 54 Mbps | Short | 23 channels, less interference |
| **802.11b** | 1999 | 2.4 GHz | 11 Mbps | Long | Better range, widely adopted |
| **802.11g** | 2003 | 2.4 GHz | 54 Mbps | Long | Backward compatible with b |
| **802.11n** (Wi-Fi 4) | 2009 | 2.4/5 GHz | 600 Mbps | Long | MIMO, channel bonding |
| **802.11ac** (Wi-Fi 5) | 2013 | 5 GHz | 3.5 Gbps | Medium | MU-MIMO, beamforming |
| **802.11ax** (Wi-Fi 6) | 2019 | 2.4/5/6 GHz* | 9.6 Gbps | Medium | OFDMA, efficiency |

*6 GHz only on Wi-Fi 6E

**Exam tip:** Know the frequencies, approximate speeds, and key differentiators. You won't need to memorize exact technical specifications, but understand "802.11ac is 5 GHz only and introduced MU-MIMO" level detail.

---

## Wireless Frequencies: 2.4 GHz vs 5 GHz vs 6 GHz

Wireless networks use **unlicensed radio frequency bands** - anyone can use them without a license.

---

### 2.4 GHz Band

**Frequency range:** 2.400 - 2.4835 GHz

**Advantages:**
- Longer range (lower frequency = longer wavelength)
- Better penetration through walls, floors, furniture
- Universal support (every device supports 2.4 GHz)

**Disadvantages:**
- Extremely crowded (Wi-Fi, Bluetooth, microwaves, cordless phones, baby monitors)
- Only 3 non-overlapping channels (1, 6, 11)
- More interference
- Slower speeds

**When to use:**
- Devices far from AP
- Need wall penetration
- Legacy devices (802.11b/g)
- IoT devices (smart home devices, sensors)

**Analogy:** 2.4 GHz is like AM radio - travels far, goes through obstacles, but crowded and prone to interference.

---

### 5 GHz Band

**Frequency range:** 5.150 - 5.825 GHz (varies by country)

**Advantages:**
- Much less crowded than 2.4 GHz
- Many non-overlapping channels (up to 25 in US)
- Faster speeds
- Less interference

**Disadvantages:**
- Shorter range (higher frequency = shorter wavelength)
- Worse penetration through walls
- Not all legacy devices support it

**When to use:**
- High-bandwidth applications (video streaming, gaming)
- Devices close to AP
- Environments with many APs (offices, apartments)
- When speed matters more than range

**Analogy:** 5 GHz is like FM radio - better quality, but shorter range and doesn't penetrate as well.

---

### 6 GHz Band (Wi-Fi 6E)

**Frequency range:** 5.925 - 7.125 GHz

**The newest band, added with Wi-Fi 6E in 2020.**

**Advantages:**
- Massive amount of spectrum (1200 MHz)
- Completely clean (no legacy devices, no interference)
- Up to 7 additional 160 MHz channels
- Up to 14 additional 80 MHz channels
- Lower latency

**Disadvantages:**
- Even shorter range than 5 GHz
- Requires Wi-Fi 6E hardware (both AP and client)
- Not yet universal adoption
- Power restrictions in some channels

**When to use:**
- Bleeding-edge applications (VR, AR, high-density)
- When you need guaranteed clean spectrum
- Short-range, high-speed connections

**Think of 6 GHz as a brand new highway** - no old cars, no congestion, smooth traffic. But it doesn't extend as far as older roads.

---

## Channels and Channel Overlap

### 2.4 GHz Channels

The 2.4 GHz band is divided into **14 channels** (11 in US, 13 in Europe, 14 in Japan).

**The problem:** Each channel is 20 MHz wide, but channels are only 5 MHz apart. This means channels overlap.

```
Channel Layout (2.4 GHz):

  1   2   3   4   5   6   7   8   9   10  11  12  13
  |---|---|---|---|---|---|---|---|---|---|---|---|
  [----20 MHz-----]
      [----20 MHz-----]
          [----20 MHz-----]
```

**Overlapping channels cause interference** - like two people trying to talk at the same time.

**Non-overlapping channels in 2.4 GHz: 1, 6, 11**

```
   Channel 1        Channel 6        Channel 11
  [--------]       [--------]       [--------]
  |-20MHz-|        |-20MHz-|        |-20MHz-|
  
  No overlap between these three!
```

**Best practice for 2.4 GHz:**
- Use only channels 1, 6, or 11
- Never use channels 2, 3, 4, 5, 7, 8, 9, 10 (they overlap)
- If you have 3 APs, assign them channels 1, 6, and 11

**Exam tip:** Memorize 1, 6, 11 as non-overlapping in 2.4 GHz. This is a common exam question.

---

### 5 GHz Channels

**5 GHz has many more channels** - up to 25 non-overlapping 20 MHz channels in the US.

**Channel widths:**
- 20 MHz (standard)
- 40 MHz (channel bonding)
- 80 MHz (802.11ac)
- 160 MHz (802.11ac/ax)

**Because there are so many channels, interference is much less common.**

**5 GHz channels are divided into bands:**
- **UNII-1:** 36, 40, 44, 48 (indoor only)
- **UNII-2:** 52, 56, 60, 64 (DFS required)
- **UNII-2 Extended:** 100-144 (DFS required)
- **UNII-3:** 149, 153, 157, 161, 165 (higher power allowed)

**DFS (Dynamic Frequency Selection):** Required on some channels to avoid interfering with radar. If radar detected, AP must switch channels.

---

### Channel Bonding

**Channel bonding** combines adjacent channels to create wider channels with more bandwidth.

**Think of it like highway lanes:**
- 20 MHz = 1 lane (standard)
- 40 MHz = 2 lanes (double the bandwidth)
- 80 MHz = 4 lanes (quadruple the bandwidth)
- 160 MHz = 8 lanes (8x the bandwidth)

**Example:**

Instead of using channel 36 (20 MHz), bond channels 36 + 40 to create a 40 MHz channel.

**Advantages:**
- Higher throughput
- Faster speeds

**Disadvantages:**
- Uses more spectrum
- More interference in 2.4 GHz (don't use 40 MHz in 2.4 GHz!)
- Fewer non-overlapping channels available

**Best practice:**
- 2.4 GHz: Use 20 MHz only (40 MHz causes too much interference)
- 5 GHz: 40 or 80 MHz is fine
- 6 GHz: 80 or 160 MHz channels work great

---

## MIMO: Multiple Input Multiple Output

**MIMO** uses multiple antennas to transmit multiple data streams simultaneously.

**Without MIMO (SISO - Single Input Single Output):**
```
AP [1 antenna] ----one stream----> [1 antenna] Client

One conversation at a time
```

**With MIMO:**
```
AP [4 antennas] ----stream 1----> [4 antennas] Client
               ----stream 2---->
               ----stream 3---->
               ----stream 4---->

Four simultaneous conversations
```

**MIMO notation:** 4x4 means 4 transmit antennas and 4 receive antennas.

**Benefits:**
- Higher throughput (more streams = more data)
- Better reliability (signal diversity)
- Improved range (combined signal stronger)

**Spatial streams:** Independent data streams transmitted simultaneously.

**802.11n:** Up to 4 spatial streams (600 Mbps)
**802.11ac:** Up to 8 spatial streams (3.5 Gbps)
**802.11ax:** Up to 8 spatial streams (9.6 Gbps theoretical)

**Analogy:** MIMO is like having 4 phone lines instead of 1 - you can have 4 conversations simultaneously instead of one after another.

---

## MU-MIMO: Multi-User MIMO

**Problem with MIMO:** Original MIMO served only one client at a time, just with multiple streams.

**MU-MIMO (802.11ac Wave 2 and 802.11ax)** allows the AP to communicate with multiple clients simultaneously.

**Without MU-MIMO:**
```
AP talks to Client A (4 streams)
Then AP talks to Client B (2 streams)
Then AP talks to Client C (1 stream)

Devices take turns
```

**With MU-MIMO:**
```
AP talks to Client A (2 streams) +
         Client B (2 streams) +
         Client C (1 stream)
         
All at the same time!
```

**Benefits:**
- Better performance in dense environments
- Reduced latency
- More efficient use of airtime

**802.11ac MU-MIMO:** Downlink only (AP to clients)
**802.11ax MU-MIMO:** Uplink and downlink (both directions)

**Exam tip:** MU-MIMO = multiple users served simultaneously. Regular MIMO = multiple streams to one user.

---

## Beamforming: Focused Signals

Traditional wireless APs broadcast signals **omnidirectionally** - in all directions equally, like a lightbulb.

**Beamforming** focuses the signal toward specific clients, like a flashlight beam instead of a lightbulb.

```
Traditional (omnidirectional):

        ↑  ↑  ↑
      ↑    AP    ↑
        ↓  ↓  ↓

Signal goes everywhere (wasted energy)
```

```
Beamforming:

           ╱╲
          ╱  ╲
         ╱ AP ╲
              ╲
               → → → Client

Signal focused toward client
```

**How it works:**

1. AP determines client location based on signal feedback
2. AP adjusts antenna phase and amplitude
3. Signals combine constructively toward client
4. Signals cancel out in other directions

**Benefits:**
- Increased range (concentrated signal stronger)
- Better speeds (stronger signal = higher modulation)
- Reduced interference to other devices
- Better battery life (clients receive stronger signal)

**Introduced in:** 802.11ac (standardized), improved in 802.11ax

**Analogy:** Instead of shouting in all directions and hoping your friend hears you, beamforming is like speaking directly toward your friend - they hear you better, and you don't bother everyone else.

---

## SSID: Service Set Identifier

The **SSID** is the network name you see when scanning for Wi-Fi networks.

**Examples:** "Starbucks WiFi", "Home Network", "FBI Surveillance Van"

**SSID is 0-32 characters** (case-sensitive).

---

### Broadcasting vs Hidden SSIDs

**Broadcast SSID (default):**
- AP includes SSID in beacon frames (sent every 100ms)
- Devices see network in available networks list
- Easy for users to connect

**Hidden SSID:**
- AP doesn't include SSID in beacons
- Users must manually enter network name to connect
- Slightly more secure (security through obscurity)

**Should you hide SSID?**

**No, for most networks.**

**Why not:**
- Provides minimal security (SSID still visible in probe requests)
- Breaks some device compatibility
- Adds user frustration
- False sense of security

**Better approach:** Use strong encryption (WPA3) and strong passwords. SSID hiding doesn't add meaningful security.

**Exam tip:** Know that hidden SSID prevents the network from appearing in the available networks list, but doesn't provide strong security.

---

## Wireless Modes

### Infrastructure Mode

**Infrastructure mode** uses an Access Point (AP) as a central hub. All communication goes through the AP.

```
    [Client A]
         |
         ↓
      [  AP  ]
         ↑
         |
    [Client B]
```

**Characteristics:**
- Most common mode (home/business Wi-Fi)
- AP connects to wired network
- AP manages authentication, encryption
- Devices communicate via AP (even if in same room)

**BSS (Basic Service Set):** One AP and its clients

**ESS (Extended Service Set):** Multiple APs with same SSID, allowing roaming

---

### Ad-Hoc Mode (IBSS)

**Ad-hoc mode** creates a peer-to-peer network without an AP. Devices communicate directly with each other.

```
[Client A] <----direct----> [Client B]

No access point needed
```

**Characteristics:**
- No AP required
- Limited range (device-to-device only)
- No internet connection (unless one device shares)
- Difficult to secure

**When to use:**
- Temporary connections (file transfer between laptops)
- Emergency networks
- Gaming (local multiplayer)

**Also called:** IBSS (Independent Basic Service Set), peer-to-peer mode

**Status:** Rarely used in modern networks. Infrastructure mode dominates.

---

## Wireless Site Surveys

A **wireless site survey** is a detailed analysis of an environment to design optimal wireless coverage.

**Goals:**
- Ensure complete coverage
- Minimize dead zones
- Identify interference sources
- Optimize AP placement
- Determine channel assignments

---

### Types of Site Surveys

**1. Passive Survey:**
- Walk around with survey tool
- Tool measures signal strength from existing APs
- Identifies coverage gaps
- Finds sources of interference

**2. Active Survey:**
- Connect to network while walking
- Measures actual throughput and performance
- Tests real-world connectivity

**3. Predictive Survey:**
- Virtual survey using floor plans
- Software predicts coverage based on building materials
- Used for initial planning (before installing APs)

---

### Heat Maps

A **heat map** visualizes wireless signal strength across an area using colors.

```
Floor Plan Heat Map:

┌─────────────────────┐
│  🟢🟢🟢🟢🟢🟢       │  🟢 = Strong signal
│  🟢🟢🟢🟢🟢🟢       │  🟡 = Medium signal
│  🟢🟢[AP]🟢🟢🟢       │  🔴 = Weak signal
│  🟢🟢🟢🟢🟢🟢       │  ⚫ = No signal
│  🟡🟡🟡🟡🟡🟡       │
│  🔴🔴🔴⚫⚫⚫       │
└─────────────────────┘
```

**Heat maps show:**
- Signal strength (RSSI - Received Signal Strength Indicator)
- Signal-to-noise ratio (SNR)
- Coverage areas
- Dead zones (no coverage)
- Overlap areas (potential interference)

**Common tools:**
- Ekahau Site Survey
- AirMagnet Survey PRO
- NetSpot
- TamoGraph

**Best practices:**
- Aim for -67 dBm or better for coverage
- Provide 20-25% cell overlap for roaming
- Identify sources of interference (microwaves, cordless phones)
- Plan for future capacity growth

---

## Roaming and Handoff

**Roaming** is the process of a client moving between APs without losing connectivity.

**How it works:**

1. Client connected to AP1
2. Client moves toward AP2
3. Client's signal from AP1 weakens
4. Client scans for better APs
5. Client discovers AP2 has stronger signal
6. Client authenticates to AP2
7. Client switches association to AP2

**Seamless roaming requirements:**
- Same SSID across all APs
- Same security settings (WPA2/WPA3, same password)
- Overlapping coverage (20-25% overlap)
- Fast roaming protocols (802.11r)

**802.11r (Fast Roaming):**
- Pre-authenticates client with nearby APs
- Reduces handoff time from 100ms to 10-20ms
- Critical for voice/video (can't tolerate 100ms interruption)

**Analogy:** Roaming is like cell phone handoff between cell towers - you don't notice the transition as you drive.

---

## Wireless Controllers

A **wireless controller** centrally manages multiple APs in enterprise networks.

**Without controller (autonomous APs):**
- Configure each AP individually
- Inconsistent settings
- Difficult to troubleshoot
- No centralized visibility

**With controller:**
- Configure once, deploy to all APs
- Consistent policies
- Centralized monitoring
- Easier troubleshooting
- Better roaming

---

### Controller Architecture Types

**1. On-Premises Controller:**
- Physical appliance in your datacenter
- Manages APs on your network
- Most control, most expensive

**2. Cloud-Based Controller:**
- Controller hosted in cloud (vendor's datacenter)
- APs connect to cloud over internet
- Easier to manage, less control

**3. Controller-less (Distributed):**
- Control functions distributed among APs
- One AP acts as leader
- Lower cost, less scalability

---

### Controller Functions

**Configuration Management:**
- Push configs to all APs
- Firmware updates
- SSID management

**RF Management:**
- Automatic channel selection
- Automatic power adjustment
- Load balancing between APs

**Client Management:**
- Track client locations
- Client health monitoring
- Roaming optimization

**Security:**
- Centralized authentication
- Rogue AP detection
- Intrusion prevention

**Popular controllers:**
- Cisco Wireless LAN Controller
- Aruba Mobility Controller
- Meraki Cloud Controller
- Ubiquiti UniFi Controller

---

## Wireless Mesh Networks

A **wireless mesh network** uses APs that wirelessly connect to each other, extending coverage without running cables to every AP.

**Traditional network:**
```
[Switch]
   |
   |── Ethernet ──[AP1]
   |── Ethernet ──[AP2]
   |── Ethernet ──[AP3]

Every AP needs wired connection
```

**Mesh network:**
```
[Switch]
   |
   |── Ethernet ──[AP1] ~~~wireless~~~ [AP2] ~~~wireless~~~ [AP3]
                (Root)      (Mesh)           (Mesh)

Only root AP needs wired connection
```

**Mesh terminology:**

**Root AP (MAP - Mesh Access Point with wired backhaul):**
- Connected to wired network
- Gateway for mesh network

**Mesh AP:**
- Wirelessly connected to root or other mesh APs
- Extends coverage
- No wired connection needed

**Mesh Link (Backhaul):**
- Wireless connection between APs
- Carries client traffic back to root

---

### Mesh Advantages

- **Easy deployment:** No need to run cables everywhere
- **Flexible:** Add APs as needed
- **Self-healing:** If one AP fails, traffic routes around it
- **Cost-effective:** Reduces cabling costs

### Mesh Disadvantages

- **Reduced throughput:** Each hop cuts bandwidth roughly in half
- **Increased latency:** More hops = more delay
- **More complex:** Requires careful planning
- **Interference:** Mesh links use same spectrum as clients

**Best practices:**
- Limit hops to 3 or fewer
- Use dedicated radio for backhaul (separate from client radio)
- Plan mesh carefully to avoid too many hops

**Use cases:**
- Outdoor coverage (parks, campuses)
- Large warehouses
- Temporary installations
- Historic buildings (can't run cables)

---

## Key Exam Tips

**Memorize these for Network+:**

**802.11 Standards Quick Reference:**

| Standard | Frequency | Max Speed | Key Feature |
|----------|-----------|-----------|-------------|
| **802.11a** | 5 GHz | 54 Mbps | 23 channels |
| **802.11b** | 2.4 GHz | 11 Mbps | Long range |
| **802.11g** | 2.4 GHz | 54 Mbps | Backward compatible |
| **802.11n** | 2.4/5 GHz | 600 Mbps | MIMO |
| **802.11ac** | 5 GHz | 3.5 Gbps | MU-MIMO, beamforming |
| **802.11ax** | 2.4/5/6 GHz | 9.6 Gbps | OFDMA, Wi-Fi 6E |

**Frequency Bands:**
- **2.4 GHz:** Longer range, more interference, channels 1/6/11 non-overlapping
- **5 GHz:** Shorter range, less interference, many channels
- **6 GHz:** Wi-Fi 6E only, clean spectrum, shortest range

**Non-overlapping channels in 2.4 GHz:** 1, 6, 11 (critical exam knowledge!)

**Technologies:**
- **MIMO:** Multiple antennas, multiple streams to one device
- **MU-MIMO:** Multiple streams to multiple devices simultaneously
- **Beamforming:** Focuses signal toward specific clients
- **Channel bonding:** Combines channels for more bandwidth (40/80/160 MHz)

**Modes:**
- **Infrastructure:** Uses AP (common)
- **Ad-hoc:** Peer-to-peer, no AP (rare)

**Common mistakes:**
- Confusing MIMO with MU-MIMO
- Thinking all 802.11 standards use 2.4 GHz (802.11a and ac are 5 GHz only)
- Using 40 MHz channels in 2.4 GHz (causes interference)
- Not knowing 1, 6, 11 are the non-overlapping channels

---

## Key Takeaways

- [ ] **802.11a: 5 GHz, 54 Mbps** (first 5 GHz standard)
- [ ] **802.11b: 2.4 GHz, 11 Mbps** (long range, obsolete)
- [ ] **802.11g: 2.4 GHz, 54 Mbps** (backward compatible with b)
- [ ] **802.11n (Wi-Fi 4): dual-band, 600 Mbps** with MIMO
- [ ] **802.11ac (Wi-Fi 5): 5 GHz only, 3.5 Gbps** with MU-MIMO
- [ ] **802.11ax (Wi-Fi 6/6E): 2.4/5/6 GHz, 9.6 Gbps** with OFDMA
- [ ] **2.4 GHz has longer range but more interference**
- [ ] **5 GHz has shorter range but more channels and speed**
- [ ] **6 GHz (Wi-Fi 6E) has clean spectrum but shortest range**
- [ ] **Channels 1, 6, 11 are non-overlapping in 2.4 GHz**
- [ ] **Channel bonding increases bandwidth** (20/40/80/160 MHz)
- [ ] **MIMO uses multiple antennas for multiple streams**
- [ ] **MU-MIMO serves multiple clients simultaneously**
- [ ] **Beamforming focuses signal toward specific devices**
- [ ] **Infrastructure mode uses AP**, ad-hoc is peer-to-peer
- [ ] **Site surveys with heat maps optimize AP placement**
- [ ] **Roaming allows movement between APs seamlessly**
- [ ] **Wireless controllers centrally manage enterprise APs**
- [ ] **Mesh networks extend coverage without cabling every AP**

---

## Check Your Understanding

**1. What are the three non-overlapping channels in 2.4 GHz?**

<details>
<summary>Show Answer</summary>
<strong>Channels 1, 6, and 11.</strong> The 2.4 GHz band has 11 channels (US) but each channel is 20 MHz wide and they're only 5 MHz apart, causing overlap. Only channels 1, 6, and 11 are spaced far enough apart (25 MHz) to not overlap. Using any other channels (2, 3, 4, 5, 7, 8, 9, 10) causes interference. This is critical exam knowledge and best practice for 2.4 GHz networks.
</details>

**2. What is the main difference between 802.11n and 802.11ac?**

<details>
<summary>Show Answer</summary>
<strong>802.11n is dual-band (2.4/5 GHz, up to 600 Mbps). 802.11ac is 5 GHz only (up to 3.5 Gbps).</strong> 802.11ac is much faster due to wider channels (80/160 MHz), more spatial streams (up to 8), MU-MIMO, and better modulation (256-QAM). 802.11n introduced MIMO and channel bonding. 802.11ac sacrificed 2.4 GHz support for raw speed on 5 GHz only.
</details>

**3. What is MIMO and how does it improve wireless performance?**

<details>
<summary>Show Answer</summary>
<strong>MIMO (Multiple Input Multiple Output) uses multiple antennas to transmit multiple data streams simultaneously.</strong> Instead of one antenna sending one stream, 4x4 MIMO uses 4 transmit and 4 receive antennas to send 4 streams at once. This dramatically increases throughput and improves reliability through signal diversity. Think of it like having 4 conversations simultaneously instead of one. Introduced in 802.11n, improved in 802.11ac.
</details>

**4. What is the difference between MIMO and MU-MIMO?**

<details>
<summary>Show Answer</summary>
<strong>MIMO serves one device with multiple streams. MU-MIMO serves multiple devices simultaneously.</strong> Traditional MIMO sends 4 streams to one client, then switches to serve next client. MU-MIMO (Multi-User MIMO) divides spatial streams among multiple clients at the same time - 2 streams to Client A, 2 streams to Client B, all simultaneously. This improves efficiency in dense environments. Introduced in 802.11ac Wave 2, improved in 802.11ax.
</details>

**5. Why does 2.4 GHz have better range than 5 GHz?**

<details>
<summary>Show Answer</summary>
<strong>Lower frequencies have longer wavelengths and penetrate obstacles better.</strong> 2.4 GHz waves are longer and can travel farther and pass through walls, floors, and furniture more effectively. 5 GHz waves are shorter and higher energy, which means they're absorbed more by obstacles and don't travel as far. This is physics - lower frequency = longer range but slower speeds, higher frequency = shorter range but faster speeds. 6 GHz has even shorter range than 5 GHz.
</details>

**6. What is beamforming and how does it help?**

<details>
<summary>Show Answer</summary>
<strong>Beamforming focuses wireless signal toward specific clients rather than broadcasting omnidirectionally.</strong> Traditional APs broadcast in all directions like a lightbulb. Beamforming adjusts antenna phases to concentrate signal toward the client like a flashlight beam. Benefits: increased range (focused signal stronger), better speeds (stronger signal enables higher modulation), reduced interference to other devices. Standardized in 802.11ac, improved in 802.11ax.
</details>

**7. What is channel bonding and what is the trade-off?**

<details>
<summary>Show Answer</summary>
<strong>Channel bonding combines adjacent channels to create wider channels with more bandwidth.</strong> Example: bond channels 36 and 40 to create a 40 MHz channel (double the bandwidth). 802.11ac supports 80 and 160 MHz bonding. Trade-off: higher throughput but uses more spectrum and reduces number of non-overlapping channels available. In 2.4 GHz, 40 MHz bonding causes too much interference (don't use it). In 5 GHz and 6 GHz, bonding works well due to more available spectrum.
</details>

**8. Should you hide your SSID for security?**

<details>
<summary>Show Answer</summary>
<strong>No, hiding SSID provides minimal security and adds user frustration.</strong> Hidden SSIDs don't appear in available networks list, but the SSID is still visible in probe requests and association frames (captured with packet sniffer). It's security through obscurity, not real security. Hiding SSID breaks some device compatibility and makes connecting more difficult. Better approach: use strong encryption (WPA3), strong password, and proper authentication. Hidden SSID is false sense of security.
</details>

**9. What is the difference between infrastructure mode and ad-hoc mode?**

<details>
<summary>Show Answer</summary>
<strong>Infrastructure mode uses an Access Point as central hub. Ad-hoc mode creates direct peer-to-peer connections without AP.</strong> Infrastructure mode is standard for home/business Wi-Fi - AP manages authentication, connects to wired network, all traffic goes through AP. Ad-hoc (IBSS) allows devices to connect directly without AP - useful for temporary file transfers or emergency networks. Infrastructure mode dominates because it's easier to manage, more secure, and provides internet access.
</details>

**10. What is the purpose of a wireless site survey?**

<details>
<summary>Show Answer</summary>
<strong>Site survey analyzes environment to design optimal wireless coverage.</strong> Goals: ensure complete coverage, identify dead zones, find interference sources, optimize AP placement, determine channel assignments. Types: passive (measure existing signals), active (test actual throughput), predictive (virtual survey using floor plans). Results displayed as heat maps showing signal strength across area. Critical for enterprise deployments to ensure proper coverage and performance before installing equipment.
</details>

**11. What is Wi-Fi 6E and how is it different from Wi-Fi 6?**

<details>
<summary>Show Answer</summary>
<strong>Wi-Fi 6E (802.11ax) adds the entire 6 GHz band to Wi-Fi 6.</strong> Wi-Fi 6 operates on 2.4 GHz and 5 GHz. Wi-Fi 6E adds 6 GHz (5.925-7.125 GHz) - 1200 MHz of clean spectrum with no legacy devices. This enables up to 7 additional 160 MHz channels or 14 additional 80 MHz channels. Benefits: less interference, lower latency, more capacity. Trade-off: shorter range than 5 GHz, requires Wi-Fi 6E hardware on both AP and client.
</details>

**12. What is the role of a wireless controller in enterprise networks?**

<details>
<summary>Show Answer</summary>
<strong>Wireless controller centrally manages multiple APs for consistent configuration and easier management.</strong> Without controller, each AP configured individually (inconsistent, difficult). With controller: configure once and push to all APs, centralized monitoring, automatic channel/power adjustment, load balancing, client tracking, firmware updates. Types: on-premises (physical appliance), cloud-based (hosted controller), controller-less (distributed among APs). Essential for large deployments with dozens or hundreds of APs.
</details>

---

## Before Moving to Lesson 14

Make sure you can confidently:

- [ ] **Identify 802.11 standards** and their speeds (a/b/g/n/ac/ax)
- [ ] **Explain frequency differences** between 2.4 GHz, 5 GHz, and 6 GHz
- [ ] **Know channels 1, 6, 11** are non-overlapping in 2.4 GHz
- [ ] **Understand MIMO and MU-MIMO** and the difference between them
- [ ] **Describe beamforming** and its benefits
- [ ] **Differentiate infrastructure and ad-hoc modes**
- [ ] **Explain wireless site surveys** and heat maps
- [ ] **Understand roaming** between APs
- [ ] **Describe wireless controllers** and their functions
- [ ] **Explain mesh networks** and when to use them

**Study Strategy:**

**Today:**
- Create flashcards for 802.11 standards (frequency, speed, key feature)
- Draw frequency band diagrams (2.4/5/6 GHz comparisons)
- Practice explaining MIMO vs MU-MIMO to someone
- Memorize 1, 6, 11 for 2.4 GHz channels

**Tomorrow (Day 14):**
- Review 802.11 standards comparison table
- Watch one of the wireless videos again
- Practice calculating which standard to use for different scenarios
- Review channel bonding concepts

**Day 15:**
- Continue to Lesson 14 (Network Devices)
- Wireless concepts connect to switches, routers, and infrastructure
- Keep wireless flashcards active in study rotation

Wireless networking is everywhere - master these concepts and you'll troubleshoot Wi-Fi like a pro!

---

## Coming Up in Lesson 14: Network Devices (Routers, Firewalls, Load Balancers)

You've learned about wireless access points and how they extend networks.

**Next, you'll explore the full range of network devices:**

- Layer 1, 2, and 3 devices
- Routers and Layer 3 switches
- Firewalls (stateful, stateless, next-gen)
- IDS/IPS (intrusion detection/prevention)
- Load balancers and proxy servers
- VPN concentrators
- Network optimization devices

**The connection:**

Lesson 13 covered wireless access points (Layer 2 devices that extend network access). Lesson 14 examines all network devices - from simple repeaters to complex next-gen firewalls. You'll see how APs fit into the broader infrastructure alongside routers, switches, firewalls, and more.

**See you in Lesson 14!**

---

*"Wireless networking isn't magic - it's carefully engineered radio communication using frequency bands, channels, MIMO, and beamforming. Master the standards and technologies, and you'll design Wi-Fi networks that actually work."*

---

# ✅ LESSON 13 COMPLETE!

**What You Just Learned:**
- ✅ 802.11 standards from a/b/g through Wi-Fi 6E (speeds, frequencies, features)
- ✅ 2.4 GHz, 5 GHz, and 6 GHz band characteristics
- ✅ Channels 1, 6, 11 are non-overlapping in 2.4 GHz
- ✅ Channel bonding increases bandwidth (20/40/80/160 MHz)
- ✅ MIMO uses multiple antennas for multiple streams
- ✅ MU-MIMO serves multiple devices simultaneously
- ✅ Beamforming focuses signal toward specific clients
- ✅ SSID broadcasting vs hidden networks
- ✅ Infrastructure mode (AP-based) vs ad-hoc (peer-to-peer)
- ✅ Wireless site surveys and heat maps
- ✅ Roaming and handoff between APs
- ✅ Wireless controllers for centralized management
- ✅ Wireless mesh networks extend coverage without cables

**You're now 43.3% of the way to Network+ certification!** (13 of 30 lessons complete)

**Next up: Network devices from Layer 1 through Layer 7!**