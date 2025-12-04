# Lab 28: Cable Types and Connectors

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 30-35 minutes
**Exam Objectives:** 3.1 - Explain basic cable types and their connectors, features, and their purposes

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What's the difference between Cat 5e, Cat 6, and Cat 6a cables? When would you choose each?**

2. **Explain the difference between T568A and T568B wiring standards. When would you create a crossover cable vs a straight-through cable?**

3. **A user needs to connect their laptop to an external 4K monitor at 60Hz. They have HDMI 1.4, HDMI 2.0, and DisplayPort 1.2 cables available. Which should they use and why?**

4. **What's the difference between single-mode and multimode fiber optic cables? Where would each be used?**

5. **Why is USB-C confusing for consumers, and what should you check before assuming a USB-C cable can do everything?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses visual identification and research** - Master cable types without physical equipment.

---

#### Activity A: Copper Network Cables (Twisted Pair)

**Goal:** Master Ethernet cable categories and specifications.

**Twisted pair cable categories:**

| Category | Max Speed | Max Bandwidth | Max Distance | Shielding | Use Case |
|----------|-----------|---------------|--------------|-----------|----------|
| Cat 5 | | | | | |
| Cat 5e | | | | | |
| Cat 6 | | | | | |
| Cat 6a | | | | | |
| Cat 7 | | | | | |
| Cat 8 | | | | | |

**Why "twisted" pair?**

_________________________________________________________________

**Shielding types:**

| Abbreviation | Full Name | Description |
|--------------|-----------|-------------|
| UTP | | |
| STP | | |
| FTP | | |
| S/FTP | | |
| S/UTP | | |

**When to use shielded cables:**

| Scenario | Shielding Needed? | Why |
|----------|-------------------|-----|
| Office to wall jack | | |
| Near electrical motors | | |
| Data center | | |
| Home network | | |
| Industrial environment | | |

**RJ-45 connector:**

Draw or describe the RJ-45 connector:

```
Front view (clip facing away):
Pin 1 [_][_][_][_][_][_][_][_] Pin 8
```

What does RJ stand for? _______________________

---

#### Activity B: T568A and T568B Wiring Standards

**Goal:** Understand Ethernet wiring standards.

**T568A pinout:**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |
| 8 | | |

**T568B pinout:**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |
| 8 | | |

**Cable types:**

| Cable Type | End 1 | End 2 | Use Case |
|------------|-------|-------|----------|
| Straight-through | | | |
| Crossover | | | |
| Rollover/Console | | | |

**When to use crossover cables (historically):**

| Connection | Cable Type |
|------------|------------|
| PC to PC | |
| PC to Switch | |
| Switch to Switch | |
| Router to Router | |
| Switch to Router | |

**Why crossover cables are rarely needed today:**

_________________________________________________________________

---

#### Activity C: Coaxial Cables

**Goal:** Understand coaxial cable types and uses.

**Coaxial cable structure:**

```
Cross-section view:
[    Outer Jacket    ]
[   Braided Shield   ]
[   Dielectric       ]
[   Center Conductor ]
```

**Coaxial cable types:**

| Type | Impedance | Use Case | Connector |
|------|-----------|----------|-----------|
| RG-6 | | | |
| RG-59 | | | |
| RG-58 | | | |

**Coaxial connectors:**

| Connector | Description | Use |
|-----------|-------------|-----|
| F-type | | |
| BNC | | |

**Coaxial cable in modern networks:**

| Application | Still Used? | Why |
|-------------|-------------|-----|
| Cable internet | | |
| Satellite TV | | |
| Security cameras | | |
| Ethernet (10BASE2) | | |

---

#### Activity D: Fiber Optic Cables

**Goal:** Understand fiber optic technology.

**Fiber optic basics:**

| Component | Description |
|-----------|-------------|
| Core | |
| Cladding | |
| Buffer | |
| Jacket | |

**Single-mode vs Multimode:**

| Characteristic | Single-Mode (SMF) | Multimode (MMF) |
|----------------|-------------------|-----------------|
| Core diameter | | |
| Light source | | |
| Distance | | |
| Cost | | |
| Color (jacket) | | |
| Use case | | |

**Fiber connector types:**

| Connector | Shape | Features | Common Use |
|-----------|-------|----------|------------|
| SC | | | |
| LC | | | |
| ST | | | |
| MTRJ | | | |
| FC | | | |
| MPO/MTP | | | |

**Fiber polish types:**

| Polish | Description | Return Loss |
|--------|-------------|-------------|
| PC | | |
| UPC | | |
| APC | | |

Why is APC connector angled (typically 8°)?

_________________________________________________________________

---

#### Activity E: Video Cables

**Goal:** Master video cable types and capabilities.

**Video cable comparison:**

| Cable | Max Resolution | Max Refresh | Audio | Digital/Analog |
|-------|----------------|-------------|-------|----------------|
| VGA | | | | |
| DVI-D (single) | | | | |
| DVI-D (dual) | | | | |
| HDMI 1.4 | | | | |
| HDMI 2.0 | | | | |
| HDMI 2.1 | | | | |
| DisplayPort 1.2 | | | | |
| DisplayPort 1.4 | | | | |
| DisplayPort 2.0 | | | | |

**HDMI connector types:**

| Type | Size | Use |
|------|------|-----|
| Type A (Standard) | | |
| Type C (Mini) | | |
| Type D (Micro) | | |

**DisplayPort features:**

| Feature | Description |
|---------|-------------|
| Daisy-chaining | |
| Adaptive Sync | |
| DSC | |

**DVI connector types:**

| Type | Pins | Signal | Max Resolution |
|------|------|--------|----------------|
| DVI-A | | | |
| DVI-D Single | | | |
| DVI-D Dual | | | |
| DVI-I Single | | | |
| DVI-I Dual | | | |

**Video cable selection guide:**

| Scenario | Best Cable | Why |
|----------|------------|-----|
| 1080p @ 60Hz | | |
| 4K @ 60Hz | | |
| 4K @ 120Hz | | |
| Gaming monitor | | |
| Multiple monitors | | |

---

#### Activity F: USB Cables

**Goal:** Master USB cable types and generations.

**USB versions and speeds:**

| USB Version | Marketing Name | Speed | Power |
|-------------|----------------|-------|-------|
| USB 1.1 | | | |
| USB 2.0 | | | |
| USB 3.0 / 3.1 Gen 1 / 3.2 Gen 1 | | | |
| USB 3.1 Gen 2 / 3.2 Gen 2 | | | |
| USB 3.2 Gen 2x2 | | | |
| USB4 | | | |

**USB connector types:**

| Connector | Description | Common Use |
|-----------|-------------|------------|
| Type-A | | |
| Type-B | | |
| Mini-B | | |
| Micro-B | | |
| Micro-B SuperSpeed | | |
| Type-C | | |

**USB Type-C cable considerations:**

| Factor | Varies? | What to Check |
|--------|---------|---------------|
| Data speed | | |
| Power delivery | | |
| Video support | | |
| Cable quality | | |
| Cable length | | |

**USB cable identification:**

| Color (internal) | USB Version |
|------------------|-------------|
| White/Black | |
| Blue | |
| Teal | |
| Red | |

---

#### Activity G: Thunderbolt Cables

**Goal:** Understand Thunderbolt technology.

**Thunderbolt versions:**

| Version | Speed | Connector | Protocol |
|---------|-------|-----------|----------|
| Thunderbolt 1 | | | |
| Thunderbolt 2 | | | |
| Thunderbolt 3 | | | |
| Thunderbolt 4 | | | |

**Thunderbolt vs USB-C:**

| Feature | USB-C | Thunderbolt 3/4 |
|---------|-------|-----------------|
| Connector shape | | |
| Minimum speed | | |
| PCIe tunneling | | |
| Daisy-chaining | | |
| External GPU | | |
| Certification | | |

**How to identify Thunderbolt:**

| Indicator | Description |
|-----------|-------------|
| Lightning bolt symbol | |
| Cable markings | |
| Port markings | |
| Device specs | |

---

#### Activity H: Audio Cables

**Goal:** Understand audio cable types.

**Analog audio connectors:**

| Connector | Size | Contacts | Use |
|-----------|------|----------|-----|
| TRS 3.5mm | | | |
| TRS 6.35mm (1/4") | | | |
| RCA | | | |
| XLR | | | |

**TRS vs TS vs TRRS:**

| Type | Contacts | Signals |
|------|----------|---------|
| TS | | |
| TRS | | |
| TRRS | | |

**Digital audio connectors:**

| Connector | Signal Type | Use |
|-----------|-------------|-----|
| TOSLINK (Optical) | | |
| S/PDIF (Coaxial) | | |
| AES/EBU | | |

**When to use each audio cable:**

| Scenario | Best Cable | Why |
|----------|------------|-----|
| Headphones | | |
| Pro microphone | | |
| Home theater | | |
| Guitar to amp | | |
| Stereo speakers | | |

---

#### Activity I: Power Cables

**Goal:** Identify power cable types.

**Internal power connectors:**

| Connector | Pins | Voltage | Use |
|-----------|------|---------|-----|
| ATX 24-pin | | | |
| EPS 8-pin (4+4) | | | |
| PCIe 6-pin | | | |
| PCIe 8-pin (6+2) | | | |
| 12VHPWR | | | |
| SATA power | | | |
| Molex | | | |

**External power cables:**

| Connector | Shape | Use |
|-----------|-------|-----|
| NEMA 5-15P | | |
| C13/C14 | | |
| C19/C20 | | |
| C5/C6 (Mickey Mouse) | | |
| C7/C8 (Figure 8) | | |

**Matching cables to devices:**

| Device | Power Connector |
|--------|-----------------|
| Desktop PC (PSU) | |
| Monitor | |
| Laptop power brick | |
| Network switch | |
| Server PDU | |

---

#### Activity J: Legacy and Specialty Cables

**Goal:** Identify legacy and specialty connectors.

**Legacy data cables:**

| Connector | Pins | Speed | Use (Historical) |
|-----------|------|-------|------------------|
| Serial (DB-9) | | | |
| Parallel (DB-25) | | | |
| SCSI | | | |
| PS/2 | | | |

**PS/2 color coding:**

| Color | Device |
|-------|--------|
| Purple | |
| Green | |

**Serial cables today:**

| Still Used For | Why |
|----------------|-----|
| | |
| | |
| | |

**Specialty cables:**

| Cable | Description | Use |
|-------|-------------|-----|
| eSATA | | |
| Lightning | | |
| Proprietary laptop chargers | | |
| SATA data | | |

---

#### Activity K: Cable Tools and Testing

**Goal:** Understand cable installation and testing tools.

**Cable installation tools:**

| Tool | Purpose | When Used |
|------|---------|-----------|
| Crimper | | |
| Punch-down tool | | |
| Cable stripper | | |
| Fish tape | | |
| Cable tester | | |
| Tone generator/probe | | |

**Cable testing concepts:**

| Test | What It Checks |
|------|----------------|
| Continuity | |
| Wire map | |
| Length | |
| Attenuation | |
| Crosstalk | |
| Return loss | |

**Common cable problems:**

| Problem | Cause | Symptom |
|---------|-------|---------|
| Open | | |
| Short | | |
| Miswire | | |
| Split pair | | |

**TDR (Time Domain Reflectometer):**

What does TDR measure and how?

_________________________________________________________________

---

#### Activity L: Cable Selection Scenarios

**Goal:** Practice selecting appropriate cables.

**Scenario 1: New Office Network**

| Requirements | |
|--------------|---|
| Devices | 50 workstations |
| Speed needed | 1 Gbps now, 10 Gbps future |
| Distance | Up to 80 meters |
| Environment | Standard office |

Cable choice: _______________________
Reason: _______________________

**Scenario 2: Home Theater**

| Requirements | |
|--------------|---|
| Source | 4K Blu-ray player |
| Display | 4K TV with HDMI 2.0 |
| Distance | 6 feet |
| Audio | ARC to soundbar |

Cable choice: _______________________
Reason: _______________________

**Scenario 3: Data Center Backbone**

| Requirements | |
|--------------|---|
| Speed | 100 Gbps |
| Distance | 500 meters between buildings |
| Reliability | Mission critical |

Cable choice: _______________________
Reason: _______________________

**Scenario 4: Gaming Setup**

| Requirements | |
|--------------|---|
| Monitor | 1440p @ 165Hz with G-Sync |
| GPU | NVIDIA RTX 4070 |
| Features | Adaptive sync required |

Cable choice: _______________________
Reason: _______________________

**Scenario 5: Laptop Docking**

| Requirements | |
|--------------|---|
| Laptop | USB-C with Thunderbolt 4 |
| Needs | 2x 4K monitors, Gigabit Ethernet, USB peripherals, charging |
| Single cable preferred | Yes |

Cable/dock choice: _______________________
Reason: _______________________

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to cables** - Examine real cables if available.

---

#### Activity M: Cable Identification Exercise

**Goal:** Identify cables you have access to.

**Document cables in your environment:**

| Cable Found | Type | Connector A | Connector B | Use |
|-------------|------|-------------|-------------|-----|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

**Examine an Ethernet cable (if available):**

| Observation | Your Cable |
|-------------|------------|
| Category printed on jacket | |
| Color | |
| Shielding visible? | |
| Connector type | |
| Wiring visible (T568A or B)? | |

---

#### Activity N: Port Identification

**Goal:** Identify ports on your devices.

**Your computer's ports:**

| Port Type | Quantity | Color | Location |
|-----------|----------|-------|----------|
| USB-A | | | |
| USB-C | | | |
| HDMI | | | |
| DisplayPort | | | |
| Ethernet | | | |
| Audio (3.5mm) | | | |
| Thunderbolt | | | |
| Other | | | |

**How to verify USB port version:**

1. Device Manager → Universal Serial Bus controllers
2. Look for "USB 3.0" or "USB 3.1" in controller names

Your USB controller version: _______________________

---

#### Activity O: Cable Speed Verification

**Goal:** Verify cable capabilities.

**USB cable test (if you have a USB drive):**

1. Copy a large file to USB drive
2. Note the speed

| Drive | Port Used | Transfer Speed |
|-------|-----------|----------------|
| | | |

**Is the speed limited by drive, port, or cable?**

_________________________________________________________________

**Network cable test (if accessible):**

Check your network adapter speed:
1. Settings → Network & Internet → Status → Properties

| Property | Value |
|----------|-------|
| Link speed | |
| Cable category needed | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A user bought a "USB-C cable" online to connect their laptop to a 4K monitor. The cable works for charging but not for video. What did they likely buy and what do they actually need?**

2. **An office is experiencing intermittent network issues. Some workstations disconnect randomly. The cabling was installed 20 years ago. What should you check and what might need replacement?**

3. **A customer complains their Cat 6 network is only running at 100 Mbps instead of Gigabit. The cable tester shows all 8 wires are connected. What could be wrong?**

4. **A conference room TV shows a 4K image but audio isn't working through the HDMI connection. What's the first thing to check?**

---

## What You Learned Today

- ✅ Mastered Ethernet cable categories (Cat 5e through Cat 8)
- ✅ Understood T568A/B wiring and cable types
- ✅ Learned coaxial cable types and uses
- ✅ Studied fiber optic technology (SMF vs MMF)
- ✅ Compared video cables (HDMI, DisplayPort, DVI, VGA)
- ✅ Mastered USB versions and connector types
- ✅ Understood Thunderbolt technology
- ✅ Identified audio cable types
- ✅ Learned power cable connectors
- ✅ Reviewed legacy connectors (serial, parallel, PS/2)
- ✅ Studied cable testing tools and concepts
- ✅ (Tier 2) Identified real cables and ports

**Hardware Module Complete!** 🎉

**Next Module:** Virtualization and Cloud Computing (Lessons 29-30)

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              CABLE TYPES QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════╣
║  ETHERNET CABLES:                                              ║
║  Cat 5e: 1 Gbps / 100m | Cat 6: 10 Gbps / 55m                ║
║  Cat 6a: 10 Gbps / 100m | Cat 8: 40 Gbps / 30m               ║
╠═══════════════════════════════════════════════════════════════╣
║  WIRING: T568B most common (Orange-White first)               ║
║  Straight-through: Same on both ends (PC to switch)           ║
║  Crossover: A on one end, B on other (PC to PC, old)         ║
╠═══════════════════════════════════════════════════════════════╣
║  VIDEO CABLES (4K@60Hz minimum):                              ║
║  HDMI 2.0+ | DisplayPort 1.2+ | Not: HDMI 1.4, DVI, VGA      ║
╠═══════════════════════════════════════════════════════════════╣
║  USB SPEEDS:                                                   ║
║  USB 2.0: 480 Mbps | USB 3.0: 5 Gbps | USB 3.2 Gen 2: 10 Gbps║
╠═══════════════════════════════════════════════════════════════╣
║  FIBER:                                                        ║
║  Single-mode (yellow): Long distance, laser, 9µm core        ║
║  Multimode (orange/aqua): Short distance, LED, 50/62.5µm     ║
╠═══════════════════════════════════════════════════════════════╣
║  CONNECTORS: LC (small) | SC (square) | ST (bayonet twist)   ║
║  USB-C: Check data speed, PD, video - not all cables equal   ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 28: Cable Types and Connectors*