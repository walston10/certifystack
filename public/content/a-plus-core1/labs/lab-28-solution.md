# Lab 28: Cable Types and Connectors - Solution Guide

> ⚠️ **Note:** Review this after attempting the lab yourself. The learning happens in the struggle!

---

## Section 1: Concept Check - Answers

### Question 1: Cat 5e vs Cat 6 vs Cat 6a
**What's the difference between Cat 5e, Cat 6, and Cat 6a cables? When would you choose each?**

| Category | Max Speed | Bandwidth | Distance at 10Gbps | Best Use |
|----------|-----------|-----------|-------------------|----------|
| Cat 5e | 1 Gbps | 100 MHz | N/A (1Gbps only) | Budget, existing installs |
| Cat 6 | 10 Gbps | 250 MHz | 55 meters | Short runs, future-proofing |
| Cat 6a | 10 Gbps | 500 MHz | 100 meters | Full 10Gbps deployments |

**When to choose each:**

- **Cat 5e:** Budget-conscious, 1 Gbps is sufficient, existing infrastructure
- **Cat 6:** New installs where 10 Gbps might be needed but runs are short (<55m)
- **Cat 6a:** Data centers, new construction, need guaranteed 10 Gbps at full distance

**Key difference:** Cat 6a maintains 10 Gbps for full 100-meter runs. Cat 6 drops to 1 Gbps beyond 55 meters at 10 Gbps speeds.

---

### Question 2: T568A vs T568B
**Explain the difference between T568A and T568B wiring standards. When would you create a crossover cable vs a straight-through cable?**

**T568A vs T568B:**
Both are valid wiring standards. The difference is which pairs go to which pins:
- **T568A:** Green pair on pins 1-2, Orange pair on pins 3-6
- **T568B:** Orange pair on pins 1-2, Green pair on pins 3-6

**T568B is more common** in the US. T568A matches older telephone wiring (USOC).

**Cable types:**
- **Straight-through:** Same standard on both ends (A-A or B-B)
  - Used for: PC to switch, switch to router
- **Crossover:** Different standard on each end (A-B)
  - Used for: PC to PC, switch to switch (historically)

**Modern reality:** Auto-MDI/MDI-X on modern devices automatically detects and adjusts, making crossover cables rarely necessary. Most connections use straight-through cables regardless of device types.

---

### Question 3: 4K @ 60Hz Cable Selection
**A user needs to connect their laptop to an external 4K monitor at 60Hz. They have HDMI 1.4, HDMI 2.0, and DisplayPort 1.2 cables available. Which should they use and why?**

**Answer: Either HDMI 2.0 or DisplayPort 1.2**

**Bandwidth requirements for 4K @ 60Hz:** ~12.5 Gbps

| Cable | Bandwidth | 4K @ 60Hz? |
|-------|-----------|------------|
| HDMI 1.4 | 10.2 Gbps | ❌ No (only 4K @ 30Hz) |
| HDMI 2.0 | 18 Gbps | ✅ Yes |
| DisplayPort 1.2 | 17.28 Gbps | ✅ Yes |

**HDMI 1.4 limitation:** Can only do 4K @ 30Hz due to bandwidth constraints.

**Best choice:** DisplayPort 1.2 if the monitor supports it (better for computer monitors, supports Adaptive Sync). HDMI 2.0 if it's a TV or monitor with only HDMI.

---

### Question 4: Single-Mode vs Multimode Fiber
**What's the difference between single-mode and multimode fiber optic cables? Where would each be used?**

| Feature | Single-Mode (SMF) | Multimode (MMF) |
|---------|-------------------|-----------------|
| Core diameter | 9 µm | 50 or 62.5 µm |
| Light source | Laser | LED (or VCSEL) |
| Distance | Up to 100+ km | Up to 550m (OM4) |
| Cost | Higher (equipment) | Lower |
| Bandwidth | Higher | Lower |
| Jacket color | Yellow | Orange or Aqua |

**Where each is used:**

- **Single-mode:** 
  - Long-distance WAN links
  - Between buildings
  - Campus backbones
  - Telecommunications carriers
  - Anywhere distance exceeds 550m

- **Multimode:**
  - Data center connections
  - Within buildings
  - Short-distance high-speed links
  - LAN backbones
  - Where cost is a factor and distance is short

---

### Question 5: USB-C Confusion
**Why is USB-C confusing for consumers, and what should you check before assuming a USB-C cable can do everything?**

**Why it's confusing:**

USB-C is just a **connector shape**, not a capability guarantee. A USB-C cable/port can have wildly different capabilities:

| Capability | Varies? | Range |
|------------|---------|-------|
| Data speed | Yes | USB 2.0 (480 Mbps) to USB4 (40 Gbps) |
| Power delivery | Yes | 7.5W to 240W |
| Video output | Yes | None to 8K |
| Thunderbolt | Yes | None to TB4 |

**What to check before assuming:**

1. **Cable markings** - Look for speed ratings (5/10/20/40 Gbps)
2. **USB version** - USB 2.0, 3.0, 3.2, USB4?
3. **Power Delivery rating** - If charging matters
4. **Video support** - Does it support DP Alt Mode?
5. **Thunderbolt logo** - Lightning bolt = Thunderbolt certified
6. **Active vs passive** - Long cables may need active electronics
7. **E-marker chip** - Required for higher power and speeds

**Bottom line:** A cheap USB-C cable might only support USB 2.0 speeds and basic charging, while looking identical to a Thunderbolt 4 cable that costs 10x more.

---

## Section 2: Activity Solutions

### Activity A: Copper Network Cables

**Twisted pair cable categories:**

| Category | Max Speed | Max Bandwidth | Max Distance | Shielding | Use Case |
|----------|-----------|---------------|--------------|-----------|----------|
| Cat 5 | 100 Mbps | 100 MHz | 100m | UTP | Legacy (obsolete) |
| Cat 5e | 1 Gbps | 100 MHz | 100m | UTP | Budget Gigabit |
| Cat 6 | 10 Gbps* | 250 MHz | 100m (55m@10G) | UTP/STP | Standard choice |
| Cat 6a | 10 Gbps | 500 MHz | 100m | STP usually | 10G networks |
| Cat 7 | 10 Gbps | 600 MHz | 100m | S/FTP | Shielded environments |
| Cat 8 | 25-40 Gbps | 2000 MHz | 30m | S/FTP | Data centers |

*Cat 6 at 10 Gbps limited to 55 meters

**Why "twisted" pair?**

Twisting the wire pairs together reduces electromagnetic interference (EMI) and crosstalk between pairs. Each twist cancels out interference picked up by the cable. More twists per inch = better noise rejection.

**Shielding types:**

| Abbreviation | Full Name | Description |
|--------------|-----------|-------------|
| UTP | Unshielded Twisted Pair | No shielding, most common |
| STP | Shielded Twisted Pair | Overall shield around all pairs |
| FTP | Foiled Twisted Pair | Foil shield around all pairs |
| S/FTP | Shielded Foiled Twisted Pair | Overall braid + foil per pair |
| S/UTP | Shielded Unshielded Twisted Pair | Overall shield, unshielded pairs |

**When to use shielded cables:**

| Scenario | Shielding Needed? | Why |
|----------|-------------------|-----|
| Office to wall jack | No | Low interference environment |
| Near electrical motors | Yes | High EMI from motors |
| Data center | Depends | Often yes for density |
| Home network | No | Typically unnecessary |
| Industrial environment | Yes | Heavy machinery interference |

**RJ-45 connector:**

RJ stands for "Registered Jack" - a standard telephone/data connector interface.

---

### Activity B: T568A and T568B Wiring Standards

**T568A pinout:**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | White/Green | 3 |
| 2 | Green | 3 |
| 3 | White/Orange | 2 |
| 4 | Blue | 1 |
| 5 | White/Blue | 1 |
| 6 | Orange | 2 |
| 7 | White/Brown | 4 |
| 8 | Brown | 4 |

**T568B pinout:**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | White/Orange | 2 |
| 2 | Orange | 2 |
| 3 | White/Green | 3 |
| 4 | Blue | 1 |
| 5 | White/Blue | 1 |
| 6 | Green | 3 |
| 7 | White/Brown | 4 |
| 8 | Brown | 4 |

**Cable types:**

| Cable Type | End 1 | End 2 | Use Case |
|------------|-------|-------|----------|
| Straight-through | T568B | T568B | PC to switch, most connections |
| Crossover | T568A | T568B | PC to PC (legacy) |
| Rollover/Console | Pin 1→8 | Pin 8→1 | Router/switch console config |

**When to use crossover cables (historically):**

| Connection | Cable Type |
|------------|------------|
| PC to PC | Crossover |
| PC to Switch | Straight-through |
| Switch to Switch | Crossover |
| Router to Router | Crossover |
| Switch to Router | Straight-through |

**Why crossover cables are rarely needed today:**

Auto-MDI/MDI-X (automatic medium-dependent interface crossover) is built into virtually all modern network devices. The device automatically detects connection type and adjusts internally, making manual crossover cables unnecessary.

---

### Activity C: Coaxial Cables

**Coaxial cable types:**

| Type | Impedance | Use Case | Connector |
|------|-----------|----------|-----------|
| RG-6 | 75Ω | Cable TV, satellite, cable internet | F-type |
| RG-59 | 75Ω | CCTV, short video runs (legacy) | F-type, BNC |
| RG-58 | 50Ω | Thinnet Ethernet (obsolete) | BNC |

**Coaxial connectors:**

| Connector | Description | Use |
|-----------|-------------|-----|
| F-type | Threaded, cable TV style | Cable/satellite TV, cable internet |
| BNC | Bayonet twist-lock | CCTV, test equipment, legacy network |

**Coaxial cable in modern networks:**

| Application | Still Used? | Why |
|-------------|-------------|-----|
| Cable internet | Yes | DOCSIS delivers Gbps over coax |
| Satellite TV | Yes | Signal from dish to receiver |
| Security cameras | Yes (declining) | Analog CCTV, being replaced by IP |
| Ethernet (10BASE2) | No | Obsolete, replaced by twisted pair |

---

### Activity D: Fiber Optic Cables

**Fiber optic basics:**

| Component | Description |
|-----------|-------------|
| Core | Glass center that carries light (9-62.5 µm) |
| Cladding | Glass layer that reflects light back to core |
| Buffer | Plastic protective coating |
| Jacket | Outer protective layer (colored) |

**Single-mode vs Multimode:**

| Characteristic | Single-Mode (SMF) | Multimode (MMF) |
|----------------|-------------------|-----------------|
| Core diameter | 9 µm | 50 or 62.5 µm |
| Light source | Laser | LED or VCSEL |
| Distance | 10-100+ km | 300-550m (OM3/OM4) |
| Cost | Lower cable, higher equipment | Higher cable, lower equipment |
| Color (jacket) | Yellow | Orange (OM1/OM2) or Aqua (OM3/OM4) |
| Use case | Long-haul, WAN, campus | Data center, LAN backbone |

**Fiber connector types:**

| Connector | Shape | Features | Common Use |
|-----------|-------|----------|------------|
| SC | Square | Push-pull, snap-in | Networks, telecom |
| LC | Small, rectangular | Compact, high-density | Data centers, SFP modules |
| ST | Round | Bayonet twist-lock | Legacy networks, multimode |
| MTRJ | Small, rectangular | Duplex in single connector | High-density |
| FC | Round, threaded | Screw-on, very secure | Test equipment, single-mode |
| MPO/MTP | Multi-fiber | 12-24 fibers in one | High-speed, 40/100G |

**Fiber polish types:**

| Polish | Description | Return Loss |
|--------|-------------|-------------|
| PC | Physical Contact - slight curve | -30 to -35 dB |
| UPC | Ultra Physical Contact - better curve | -50 to -55 dB |
| APC | Angled Physical Contact - 8° angle | -60 dB or better |

**Why APC is angled:** The 8° angle causes reflected light to exit the fiber core rather than bounce back. This is critical for applications sensitive to back-reflections (CATV, long-distance telecom, FTTx).

---

### Activity E: Video Cables

**Video cable comparison:**

| Cable | Max Resolution | Max Refresh | Audio | Digital/Analog |
|-------|----------------|-------------|-------|----------------|
| VGA | 2048×1536 | 85Hz | No | Analog |
| DVI-D (single) | 1920×1200 | 60Hz | No | Digital |
| DVI-D (dual) | 2560×1600 | 60Hz | No | Digital |
| HDMI 1.4 | 4K | 30Hz | Yes | Digital |
| HDMI 2.0 | 4K | 60Hz | Yes | Digital |
| HDMI 2.1 | 10K | 120Hz (4K) | Yes | Digital |
| DisplayPort 1.2 | 4K | 60Hz | Yes | Digital |
| DisplayPort 1.4 | 8K | 60Hz (4K@120) | Yes | Digital |
| DisplayPort 2.0 | 16K | 60Hz | Yes | Digital |

**HDMI connector types:**

| Type | Size | Use |
|------|------|-----|
| Type A (Standard) | Full-size | TVs, monitors, PCs |
| Type C (Mini) | Smaller | Tablets, cameras |
| Type D (Micro) | Smallest | Phones, small devices |

**DisplayPort features:**

| Feature | Description |
|---------|-------------|
| Daisy-chaining | Connect multiple monitors in series (MST) |
| Adaptive Sync | Variable refresh rate (FreeSync/G-Sync compatible) |
| DSC | Display Stream Compression for higher res/refresh |

**DVI connector types:**

| Type | Pins | Signal | Max Resolution |
|------|------|--------|----------------|
| DVI-A | 17 | Analog only | 1920×1200 |
| DVI-D Single | 19 | Digital only | 1920×1200 |
| DVI-D Dual | 25 | Digital (dual-link) | 2560×1600 |
| DVI-I Single | 23 | Analog + Digital | 1920×1200 |
| DVI-I Dual | 29 | Analog + Digital (dual-link) | 2560×1600 |

**Video cable selection guide:**

| Scenario | Best Cable | Why |
|----------|------------|-----|
| 1080p @ 60Hz | Any (HDMI, DP, DVI) | All support easily |
| 4K @ 60Hz | HDMI 2.0+ or DP 1.2+ | Bandwidth requirement |
| 4K @ 120Hz | HDMI 2.1 or DP 1.4+ | High bandwidth needed |
| Gaming monitor | DisplayPort | Adaptive sync support |
| Multiple monitors | DisplayPort | Daisy-chain capability |

---

### Activity F: USB Cables

**USB versions and speeds:**

| USB Version | Marketing Name | Speed | Power |
|-------------|----------------|-------|-------|
| USB 1.1 | Full Speed | 12 Mbps | 500mA (2.5W) |
| USB 2.0 | Hi-Speed | 480 Mbps | 500mA (2.5W) |
| USB 3.0/3.1 Gen 1/3.2 Gen 1 | SuperSpeed | 5 Gbps | 900mA (4.5W) |
| USB 3.1 Gen 2/3.2 Gen 2 | SuperSpeed+ | 10 Gbps | Up to 3A (15W) |
| USB 3.2 Gen 2x2 | SuperSpeed+ | 20 Gbps | Up to 3A (15W) |
| USB4 | USB4 | 40 Gbps | Up to 100W (240W v2) |

**USB connector types:**

| Connector | Description | Common Use |
|-----------|-------------|------------|
| Type-A | Flat rectangle | PCs, chargers, most devices |
| Type-B | Square with beveled top | Printers, older devices |
| Mini-B | Smaller Type-B | Old cameras, controllers |
| Micro-B | Flat, small | Android phones (older), accessories |
| Micro-B SuperSpeed | Wider Micro-B | External hard drives |
| Type-C | Oval, reversible | Modern phones, laptops, everything |

**USB Type-C cable considerations:**

| Factor | Varies? | What to Check |
|--------|---------|---------------|
| Data speed | Yes | USB 2.0 to USB4 - check markings |
| Power delivery | Yes | PD wattage rating |
| Video support | Yes | DP Alt Mode support |
| Cable quality | Yes | E-marker for high power/speed |
| Cable length | Yes | Longer may limit speed |

**USB cable identification (internal color):**

| Color (internal) | USB Version |
|------------------|-------------|
| White/Black | USB 2.0 |
| Blue | USB 3.0/3.1/3.2 Gen 1 |
| Teal | USB 3.1/3.2 Gen 2 |
| Red/Yellow | Always-on charging |

---

### Activity G: Thunderbolt Cables

**Thunderbolt versions:**

| Version | Speed | Connector | Protocol |
|---------|-------|-----------|----------|
| Thunderbolt 1 | 10 Gbps | Mini DisplayPort | PCIe + DP |
| Thunderbolt 2 | 20 Gbps | Mini DisplayPort | PCIe + DP |
| Thunderbolt 3 | 40 Gbps | USB-C | PCIe + DP + USB |
| Thunderbolt 4 | 40 Gbps | USB-C | PCIe + DP + USB (stricter requirements) |

**Thunderbolt vs USB-C:**

| Feature | USB-C | Thunderbolt 3/4 |
|---------|-------|-----------------|
| Connector shape | USB-C | USB-C (same) |
| Minimum speed | 480 Mbps (USB 2.0) | 40 Gbps |
| PCIe tunneling | No | Yes |
| Daisy-chaining | Limited | Yes (up to 6 devices) |
| External GPU | No | Yes |
| Certification | None required | Intel certification |

**How to identify Thunderbolt:**

| Indicator | Description |
|-----------|-------------|
| Lightning bolt symbol | ⚡ next to port or on cable |
| Cable markings | "Thunderbolt" text, speed rating |
| Port markings | Symbol on laptop/device |
| Device specs | Check documentation |

---

### Activity H: Audio Cables

**Analog audio connectors:**

| Connector | Size | Contacts | Use |
|-----------|------|----------|-----|
| TRS 3.5mm | 3.5mm | 3 (Tip-Ring-Sleeve) | Headphones, aux audio |
| TRS 6.35mm (1/4") | 6.35mm | 3 | Pro audio, instruments |
| RCA | N/A | 2 (center + shield) | Home audio, video |
| XLR | 3-pin | 3 | Pro microphones, balanced audio |

**TRS vs TS vs TRRS:**

| Type | Contacts | Signals |
|------|----------|---------|
| TS | 2 (Tip-Sleeve) | Mono audio (instruments) |
| TRS | 3 (Tip-Ring-Sleeve) | Stereo or balanced mono |
| TRRS | 4 (Tip-Ring-Ring-Sleeve) | Stereo + microphone (headsets) |

**Digital audio connectors:**

| Connector | Signal Type | Use |
|-----------|-------------|-----|
| TOSLINK (Optical) | Optical digital (S/PDIF) | Home theater, TVs |
| S/PDIF (Coaxial) | Electrical digital | Audio equipment |
| AES/EBU | Professional digital | Pro audio, studios |

**When to use each audio cable:**

| Scenario | Best Cable | Why |
|----------|------------|-----|
| Headphones | 3.5mm TRS or TRRS | Standard, universal |
| Pro microphone | XLR | Balanced, noise rejection |
| Home theater | TOSLINK or HDMI ARC | Digital, multi-channel |
| Guitar to amp | 1/4" TS | Instrument level, mono |
| Stereo speakers | RCA or speaker wire | Analog, simple |

---

### Activity I: Power Cables

**Internal power connectors:**

| Connector | Pins | Voltage | Use |
|-----------|------|---------|-----|
| ATX 24-pin | 24 | +3.3V, +5V, +12V, -12V | Motherboard main power |
| EPS 8-pin (4+4) | 8 | +12V | CPU power |
| PCIe 6-pin | 6 | +12V (75W) | Mid-range GPUs |
| PCIe 8-pin (6+2) | 8 | +12V (150W) | High-end GPUs |
| 12VHPWR | 16 | +12V (up to 600W) | RTX 4000 series GPUs |
| SATA power | 15 | +3.3V, +5V, +12V | Drives |
| Molex | 4 | +5V, +12V | Legacy, fans, accessories |

**External power cables:**

| Connector | Shape | Use |
|-----------|-------|-----|
| NEMA 5-15P | 3-prong US plug | Wall outlet (US) |
| C13/C14 | Rectangular with notch | PC PSUs, monitors |
| C19/C20 | Larger rectangular | Servers, high-power |
| C5/C6 (Mickey Mouse) | 3 round circles | Laptop power bricks |
| C7/C8 (Figure 8) | Figure 8 shape | Small electronics |

**Matching cables to devices:**

| Device | Power Connector |
|--------|-----------------|
| Desktop PC (PSU) | C13/C14 |
| Monitor | C13/C14 or C5/C6 |
| Laptop power brick | C5/C6 or C7/C8 |
| Network switch | C13/C14 |
| Server PDU | C19/C20 |

---

### Activity J: Legacy and Specialty Cables

**Legacy data cables:**

| Connector | Pins | Speed | Use (Historical) |
|-----------|------|-------|------------------|
| Serial (DB-9) | 9 | 115 Kbps | Modems, terminals |
| Parallel (DB-25) | 25 | 2 MBps | Printers |
| SCSI | 50/68 | Up to 320 MBps | Hard drives, scanners |
| PS/2 | 6 (Mini-DIN) | N/A | Keyboards, mice |

**PS/2 color coding:**

| Color | Device |
|-------|--------|
| Purple | Keyboard |
| Green | Mouse |

**Serial cables today:**

| Still Used For | Why |
|----------------|-----|
| Network equipment (console) | Direct router/switch management |
| Industrial equipment | Legacy compatibility |
| Embedded systems | Simple, reliable |

**Specialty cables:**

| Cable | Description | Use |
|-------|-------------|-----|
| eSATA | External SATA | External drives (declining) |
| Lightning | Apple proprietary | iPhones, iPads |
| Proprietary laptop chargers | Manufacturer-specific | Older laptops |
| SATA data | 7-pin flat | Internal drives |

---

### Activity K: Cable Tools and Testing

**Cable installation tools:**

| Tool | Purpose | When Used |
|------|---------|-----------|
| Crimper | Attach RJ-45 connectors | Making patch cables |
| Punch-down tool | Insert wire into keystone/patch panel | Structured cabling |
| Cable stripper | Remove jacket without damaging wires | Cable termination |
| Fish tape | Pull cable through walls/conduit | Installation |
| Cable tester | Verify wire continuity/mapping | After termination |
| Tone generator/probe | Locate cables in walls/bundles | Troubleshooting |

**Cable testing concepts:**

| Test | What It Checks |
|------|----------------|
| Continuity | Wire is connected end-to-end |
| Wire map | Correct pin-to-pin connections |
| Length | Cable within spec (100m for Cat5e/6) |
| Attenuation | Signal loss over distance |
| Crosstalk | Interference between wire pairs |
| Return loss | Signal reflection back to source |

**Common cable problems:**

| Problem | Cause | Symptom |
|---------|-------|---------|
| Open | Broken wire, bad crimp | No connectivity |
| Short | Wires touching | No connectivity or errors |
| Miswire | Wrong pins connected | May work at low speed or not at all |
| Split pair | Pair split across two pairs | Works at 100M, fails at 1G |

**TDR (Time Domain Reflectometer):**

TDR sends an electrical pulse down the cable and measures reflections. By timing how long it takes for reflections to return, it calculates:
- Total cable length
- Distance to faults (opens, shorts)
- Impedance mismatches

Used to locate exactly where a cable fault exists without visual inspection.

---

### Activity L: Cable Selection Scenarios

**Scenario 1: New Office Network**
- **Cable choice:** Cat 6a
- **Reason:** Supports current 1 Gbps with full 10 Gbps capability at 100m for future upgrades. Standard office doesn't need shielding.

**Scenario 2: Home Theater**
- **Cable choice:** HDMI 2.0 Premium High Speed
- **Reason:** Supports 4K@60Hz with HDR, includes ARC for soundbar audio. 6 feet is well within HDMI limits.

**Scenario 3: Data Center Backbone**
- **Cable choice:** Single-mode fiber with LC connectors
- **Reason:** 100 Gbps over 500m requires fiber. Single-mode handles distance easily. LC connectors for density.

**Scenario 4: Gaming Setup**
- **Cable choice:** DisplayPort 1.4
- **Reason:** Supports 1440p@165Hz easily, includes Adaptive Sync for G-Sync compatibility. DisplayPort is preferred for gaming monitors.

**Scenario 5: Laptop Docking**
- **Cable/dock choice:** Thunderbolt 4 dock with TB4 cable
- **Reason:** Single TB4 cable can carry dual 4K video, data, and 100W charging. Provides USB, Ethernet, and all needed connectivity through one connection.

---

## Section 3: Reflection Scenarios

### Scenario 1: USB-C Video Not Working
**A user bought a "USB-C cable" online to connect their laptop to a 4K monitor. The cable works for charging but not for video. What did they likely buy and what do they actually need?**

**What they likely bought:** A USB-C charging-only or USB 2.0 cable

Many cheap USB-C cables only support:
- USB 2.0 data speeds (480 Mbps)
- Basic charging (no PD)
- No video capability (no DP Alt Mode wires)

**What they actually need:**
- USB-C cable with DisplayPort Alt Mode support
- Or Thunderbolt 3/4 cable
- Look for "DP Alt Mode" or video support in specs
- May need active cable for longer lengths

**How to verify:** Check if cable has all pins wired (full-featured), or look for USB-IF certification marks.

---

### Scenario 2: 20-Year-Old Cabling Issues
**An office is experiencing intermittent network issues. Some workstations disconnect randomly. The cabling was installed 20 years ago. What should you check and what might need replacement?**

**What to check:**

1. **Cable category** - Likely Cat 5 or Cat 5e (may not support Gigabit well)
2. **Physical condition** - Damaged jackets, crimped cables, rodent damage
3. **Connection points** - Corroded RJ-45 connectors, loose keystones
4. **Patch panel** - Oxidation, poor punch-downs
5. **Cable runs** - Near new interference sources (LED lighting, motors)
6. **Length** - Original runs may have been extended improperly

**What likely needs replacement:**
- Any Cat 5 (not 5e) cable - doesn't reliably support Gigabit
- Damaged cables
- Old patch cables (these fail first)
- Keystones with corroded contacts
- Any runs over 100 meters

**Recommendation:** Test all runs with a cable certifier. Replace patch cables first (cheapest fix). Consider full re-cable to Cat 6a if budget allows.

---

### Scenario 3: Gigabit Running at 100 Mbps
**A customer complains their Cat 6 network is only running at 100 Mbps instead of Gigabit. The cable tester shows all 8 wires are connected. What could be wrong?**

**All 8 wires connected but only 100 Mbps = Split pair or severe crosstalk**

**Possible causes:**

1. **Split pair** - Wires from different pairs used together. Basic tester shows continuity, but pairs aren't properly twisted together, causing crosstalk. Works at 100 Mbps (uses 4 wires) but fails at Gigabit (uses all 8).

2. **Wrong device settings** - NIC or switch port set to 100 Mbps manually

3. **Bad patch cable** - One of the patch cables has split pair or quality issue

4. **Damaged cable** - Crosstalk from damaged section

5. **One end miswired** - Tester shows connectivity but pair relationships are wrong

**How to diagnose:**
- Use a **cable certifier** (not just a tester) - certifiers test crosstalk
- Swap patch cables one at a time
- Check NIC and switch port settings
- Check both ends of structured cable for correct T568B wiring

---

### Scenario 4: HDMI Video But No Audio
**A conference room TV shows a 4K image but audio isn't working through the HDMI connection. What's the first thing to check?**

**First thing to check:** TV audio input source setting

**Common causes (in order of likelihood):**

1. **TV input setting** - TV set to wrong audio source (internal speakers, optical, other HDMI)

2. **Computer audio output** - Windows not sending audio to HDMI
   - Right-click speaker icon → Sound settings
   - Select HDMI output as default

3. **TV speakers disabled** - TV speakers turned off for previous soundbar setup

4. **Cable issue** - Some cheap/old HDMI cables may not carry audio properly (rare)

5. **Source device** - Computer HDMI might not support audio (very old GPUs or certain adapters)

**Quick fix process:**
1. Check TV audio settings first
2. Check Windows sound output device
3. Try different HDMI input on TV
4. Test with different source device (laptop, phone with adapter)

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
║  T568B (most common): O/w-O-G/w-Bl-Bl/w-G-Br/w-Br            ║
║  Straight-through: Same on both ends (PC to switch)           ║
║  Crossover: A on one end, B on other (rarely needed now)     ║
╠═══════════════════════════════════════════════════════════════╣
║  VIDEO CABLES (4K@60Hz minimum):                              ║
║  HDMI 2.0+ | DisplayPort 1.2+ | Not: HDMI 1.4, DVI, VGA      ║
║  4K@120Hz: HDMI 2.1 or DisplayPort 1.4+                      ║
╠═══════════════════════════════════════════════════════════════╣
║  USB SPEEDS:                                                   ║
║  USB 2.0: 480 Mbps | USB 3.0: 5 Gbps | USB 3.2 Gen 2: 10 Gbps║
║  USB4/TB4: 40 Gbps | USB-C ≠ speed guarantee!                ║
╠═══════════════════════════════════════════════════════════════╣
║  FIBER:                                                        ║
║  Single-mode (yellow): Long distance, laser, 9µm core        ║
║  Multimode (orange/aqua): Short distance, LED, 50/62.5µm     ║
║  Connectors: LC (small, SFP) | SC (square) | ST (twist)      ║
╠═══════════════════════════════════════════════════════════════╣
║  POWER CONNECTORS:                                             ║
║  PCIe 6-pin: 75W | PCIe 8-pin: 150W | 12VHPWR: up to 600W   ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 28 Solution Guide: Cable Types and Connectors*