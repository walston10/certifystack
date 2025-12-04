# Lab 18: Motherboards - Components and Features

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 35-40 minutes
**Exam Objectives:** 3.4 - Given a scenario, install and configure motherboards, CPUs, and add-on cards

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the purpose of the chipset on a motherboard, and how does it relate to CPU compatibility?**

2. **Explain the difference between PCIe x1, x4, x8, and x16 slots, and what typically goes in each.**

3. **Why do motherboards have both UEFI and legacy BIOS support, and which should you use for a new Windows 11 installation?**

4. **What is the CMOS battery, and what symptoms indicate it needs replacement?**

5. **A motherboard has four RAM slots colored in pairs (two black, two gray). What does this indicate, and how should RAM be installed?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses research and observation** - Master motherboard concepts without hands-on access.

---

#### Activity A: Motherboard Anatomy Overview

**Goal:** Identify all major motherboard components.

**Label this motherboard diagram (describe location of each):**

```
+----------------------------------------------------------+
|  [A]        [B]    [C]                           [D]     |
|  ○ ○ ○ ○    ████   ████                          █████   |
|             ████   ████                          █████   |
|  [E]        ████   ████     [F]                  █████   |
|  ████████                   ████████             █████   |
|  ████████                   ████████                     |
|                                                          |
|  [G]              [H]                                    |
|  ▓▓▓▓▓▓▓▓        ═══════════════════                    |
|  ▓▓▓▓▓▓▓▓        ═══════════════════         [I]        |
|  ▓▓▓▓▓▓▓▓        ═══════════════════         ▪▪▪▪       |
|  ▓▓▓▓▓▓▓▓        ═══════════════════         ▪▪▪▪       |
|                  ═══════════════════                     |
|  [J]             ═══════════════════                     |
|  ▄▄▄▄                                        [K]        |
|  ▄▄▄▄       [L]        [M]        [N]        ████       |
|             ────       ══════     ○           ████       |
+----------------------------------------------------------+
     [O]                                    [P]
     ███████████████████████████████        ▬▬▬▬
```

**Identify each component:**

| Letter | Component Name | Purpose |
|--------|----------------|---------|
| A | | |
| B | | |
| C | | |
| D | | |
| E | | |
| F | | |
| G | | |
| H | | |
| I | | |
| J | | |
| K | | |
| L | | |
| M | | |
| N | | |
| O | | |
| P | | |

---

#### Activity B: CPU Socket Types

**Goal:** Understand CPU socket compatibility.

**Intel socket types:**

| Socket | CPUs Supported | Pins | Release Era |
|--------|----------------|------|-------------|
| LGA 1700 | | | |
| LGA 1200 | | | |
| LGA 1151 | | | |
| LGA 2066 | | | |

**AMD socket types:**

| Socket | CPUs Supported | Pins | Release Era |
|--------|----------------|------|-------------|
| AM5 | | | |
| AM4 | | | |
| TR4/TRX40 | | | |

**Socket identification questions:**

1. What does "LGA" stand for? _______________

2. What does "PGA" stand for? _______________

3. Which manufacturer uses LGA sockets? _______________

4. Which manufacturer traditionally used PGA sockets (until AM5)? _______________

5. Where are the pins located in LGA vs PGA?

   LGA: _______________
   
   PGA: _______________

**Why socket compatibility matters:**

_________________________________________________________________

---

#### Activity C: Chipset Analysis

**Goal:** Understand chipset hierarchy and features.

**Intel chipset tiers (12th/13th/14th Gen example):**

| Chipset | Target User | PCIe Lanes | USB Ports | Overclocking | Price Tier |
|---------|-------------|------------|-----------|--------------|------------|
| Z790 | | | | | |
| B760 | | | | | |
| H770 | | | | | |
| H610 | | | | | |

**AMD chipset tiers (AM5 example):**

| Chipset | Target User | PCIe Lanes | USB Ports | Overclocking | Price Tier |
|---------|-------------|------------|-----------|--------------|------------|
| X670E | | | | | |
| X670 | | | | | |
| B650E | | | | | |
| B650 | | | | | |
| A620 | | | | | |

**Chipset selection questions:**

1. Which Intel chipset is required for CPU overclocking? _______________

2. Which AMD chipsets support overclocking? _______________

3. What does the "E" suffix mean in AMD chipsets? _______________

4. For a budget gaming build (no overclocking), which chipset tier makes sense?

   Intel: _______________ AMD: _______________

---

#### Activity D: RAM Slot Configuration

**Goal:** Understand memory channel architecture.

**Dual-channel configuration:**

```
Slot Layout (typical):
+------+------+------+------+
|  A1  |  A2  |  B1  |  B2  |
| Gray | Black| Gray | Black|
+------+------+------+------+
  CH A   CH A   CH B   CH B
```

**Installation scenarios:**

| RAM Sticks | Optimal Slot Configuration | Why |
|------------|---------------------------|-----|
| 1 stick | | |
| 2 sticks | | |
| 4 sticks | | |

**Channel configurations:**

| Configuration | Slots Used | Bandwidth | Performance |
|---------------|------------|-----------|-------------|
| Single-channel | | | |
| Dual-channel | | | |
| Quad-channel | | | |

**Questions:**

1. Why is dual-channel faster than single-channel?

_________________________________________________________________

2. If you have 2 sticks of RAM, which slots should you use first?

_________________________________________________________________

3. What happens if you put RAM in slots A1 and A2 only?

_________________________________________________________________

---

#### Activity E: Expansion Slot Deep Dive

**Goal:** Master PCIe slot types and bandwidth.

**PCIe slot comparison:**

| Slot Type | Lanes | Bandwidth (PCIe 4.0) | Bandwidth (PCIe 5.0) | Common Uses |
|-----------|-------|---------------------|---------------------|-------------|
| PCIe x1 | | | | |
| PCIe x4 | | | | |
| PCIe x8 | | | | |
| PCIe x16 | | | | |

**PCIe generations:**

| Generation | Per-Lane Bandwidth | x16 Total | Release Year |
|------------|-------------------|-----------|--------------|
| PCIe 3.0 | | | |
| PCIe 4.0 | | | |
| PCIe 5.0 | | | |

**Physical vs Electrical lanes:**

A slot can be physically x16 size but electrically wired for fewer lanes.

Example: A motherboard might have:
- Slot 1: x16 physical, x16 electrical
- Slot 2: x16 physical, x4 electrical

Why does this matter?

_________________________________________________________________

**Lane allocation question:**

A CPU provides 20 PCIe lanes. How might these be allocated?

| Device | Lanes Used |
|--------|------------|
| Primary GPU (x16 slot) | |
| NVMe SSD #1 | |
| Remaining for chipset | |

---

#### Activity F: Storage Interfaces

**Goal:** Understand motherboard storage connections.

**SATA ports:**

| Specification | Speed | Common Use |
|---------------|-------|------------|
| SATA I | | |
| SATA II | | |
| SATA III | | |

**M.2 slots:**

| Key Type | Supported Protocols | Physical Size |
|----------|---------------------|---------------|
| B key | | |
| M key | | |
| B+M key | | |

**M.2 form factors:**

| Form Factor | Dimensions | Common Use |
|-------------|------------|------------|
| 2230 | | |
| 2242 | | |
| 2260 | | |
| 2280 | | |

**NVMe vs SATA M.2:**

| Feature | SATA M.2 | NVMe M.2 |
|---------|----------|----------|
| Interface | | |
| Max speed | | |
| PCIe lanes | | |
| Price | | |

**How to tell if an M.2 slot supports NVMe:**

_________________________________________________________________

---

#### Activity G: Rear I/O Panel Identification

**Goal:** Identify all rear panel connectors.

**Common rear I/O ports:**

| Port | Connector Type | Purpose | Color Code |
|------|----------------|---------|------------|
| USB 2.0 | Type-A | | Black |
| USB 3.0 | Type-A | | Blue |
| USB 3.1/3.2 | Type-A | | Teal/Red |
| USB-C | Type-C | | N/A |
| PS/2 | 6-pin mini-DIN | | Purple/Green |
| Ethernet | RJ-45 | | N/A |
| Audio | 3.5mm | | Color-coded |
| DisplayPort | DP | | N/A |
| HDMI | HDMI | | N/A |
| Wi-Fi antenna | SMA | | N/A |

**Audio port color codes:**

| Color | Purpose |
|-------|---------|
| Pink | |
| Light Blue | |
| Lime Green | |
| Orange | |
| Black | |
| Gray | |

**Video output on motherboard:**

When do the motherboard video outputs work?

_________________________________________________________________

When would they NOT work?

_________________________________________________________________

---

#### Activity H: Internal Headers and Connectors

**Goal:** Identify internal motherboard headers.

**Front panel header (F_PANEL):**

| Pin | Purpose | Polarity? |
|-----|---------|-----------|
| Power SW | | |
| Reset SW | | |
| Power LED | | |
| HDD LED | | |

**USB headers:**

| Header Type | Pins | USB Version | Devices Supported |
|-------------|------|-------------|-------------------|
| USB 2.0 | | | |
| USB 3.0 (19-pin) | | | |
| USB-C (20-pin) | | | |

**Other internal headers:**

| Header | Purpose | Pin Count |
|--------|---------|-----------|
| HD_AUDIO | | |
| SPEAKER | | |
| TPM | | |
| COM/Serial | | |
| RGB/ARGB | | |
| Fan headers | | |
| CPU_FAN | | |
| SYS_FAN | | |
| AIO_PUMP | | |

---

#### Activity I: BIOS/UEFI Concepts

**Goal:** Understand firmware configuration.

**BIOS vs UEFI:**

| Feature | Legacy BIOS | UEFI |
|---------|-------------|------|
| Interface | | |
| Boot drive limit | | |
| Partition scheme | | |
| Secure Boot | | |
| Fast Boot | | |
| Mouse support | | |
| Boot speed | | |

**Common UEFI/BIOS settings:**

| Setting | Purpose | When to Change |
|---------|---------|----------------|
| Boot order | | |
| Secure Boot | | |
| XMP/DOCP | | |
| Virtualization (VT-x/AMD-V) | | |
| Fast Boot | | |
| CSM (Compatibility Support Module) | | |
| Fan curves | | |
| SATA mode (AHCI/RAID) | | |

**Accessing BIOS/UEFI:**

| Manufacturer | Common Key(s) |
|--------------|---------------|
| ASUS | |
| MSI | |
| Gigabyte | |
| ASRock | |
| Dell | |
| HP | |
| Lenovo | |

---

#### Activity J: CMOS and System Settings

**Goal:** Understand CMOS battery and settings.

**CMOS battery specifications:**

| Specification | Value |
|---------------|-------|
| Battery type | |
| Voltage | |
| Typical lifespan | |
| Location on motherboard | |

**Symptoms of dead CMOS battery:**

List 5 symptoms:

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

**CMOS reset methods:**

| Method | Steps | When to Use |
|--------|-------|-------------|
| Remove battery | | |
| Clear CMOS jumper | | |
| BIOS button (if available) | | |

**What settings are lost when CMOS is cleared?**

_________________________________________________________________

**What settings are NOT lost?**

_________________________________________________________________

---

#### Activity K: Motherboard Selection Scenarios

**Goal:** Practice choosing appropriate motherboards.

**Scenario 1: Budget Office Build**

Requirements:
- Intel Core i3-12100
- 16GB RAM (2 sticks)
- 1 NVMe SSD
- Integrated graphics
- Budget priority

| Specification | Your Selection |
|---------------|----------------|
| Chipset | |
| Form factor | |
| RAM slots needed | |
| M.2 slots needed | |
| Key features | |
| Price range | |

**Scenario 2: Gaming Build**

Requirements:
- AMD Ryzen 7 7700X
- 32GB RAM (2x16GB)
- RTX 4070
- 2 NVMe SSDs
- Wi-Fi needed
- Future overclocking possible

| Specification | Your Selection |
|---------------|----------------|
| Chipset | |
| Form factor | |
| RAM slots needed | |
| PCIe slots needed | |
| M.2 slots needed | |
| Key features | |
| Price range | |

**Scenario 3: Content Creator Workstation**

Requirements:
- Intel Core i9-14900K
- 64GB RAM (4 sticks for quad-channel capacity)
- RTX 4080
- 3 NVMe SSDs
- 10Gb Ethernet preferred
- Thunderbolt nice to have

| Specification | Your Selection |
|---------------|----------------|
| Chipset | |
| Form factor | |
| RAM slots needed | |
| PCIe configuration | |
| M.2 slots needed | |
| Key features | |
| Price range | |

---

#### Activity L: Troubleshooting Motherboard Issues

**Goal:** Diagnose common motherboard problems.

**POST (Power-On Self-Test) indicators:**

| Indicator | Meaning |
|-----------|---------|
| No beeps, no display | |
| 1 short beep | |
| Continuous beeps | |
| Long beep, 2 short | |
| Debug LED codes | |

**Common motherboard issues:**

| Symptom | Possible Causes | Diagnostic Steps |
|---------|-----------------|------------------|
| No power at all | | |
| Powers on, no display | | |
| USB ports not working | | |
| Audio not working | | |
| Network not detected | | |
| RAM not recognized | | |
| Boot loop (restarts repeatedly) | | |
| BIOS settings reset every boot | | |

**Motherboard inspection checklist:**

| Check | What to Look For |
|-------|------------------|
| Capacitors | |
| Burn marks | |
| Bent pins (socket) | |
| Physical damage | |
| Dust/debris | |
| Standoff alignment | |

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to a PC or spare motherboard** - Get permission first!

---

#### Activity M: Document Your Motherboard

**Goal:** Identify components on a real motherboard.

**⚠️ Power off and unplug before opening case!**

**Identify your motherboard:**

| Specification | Your Motherboard |
|---------------|------------------|
| Manufacturer | |
| Model | |
| Chipset | |
| Socket type | |
| Form factor | |
| BIOS version | |

**Component count:**

| Component | Quantity | Notes |
|-----------|----------|-------|
| RAM slots | | Colors: |
| PCIe x16 slots | | |
| PCIe x1 slots | | |
| M.2 slots | | |
| SATA ports | | |
| Fan headers | | |
| USB 2.0 headers | | |
| USB 3.0 headers | | |
| RGB headers | | |

**Rear I/O inventory:**

| Port Type | Quantity |
|-----------|----------|
| USB-A 2.0 | |
| USB-A 3.0+ | |
| USB-C | |
| Ethernet | |
| Audio jacks | |
| Video outputs | |
| PS/2 | |
| Other: | |

---

#### Activity N: BIOS/UEFI Exploration

**Goal:** Navigate your system's firmware settings.

**⚠️ Don't change settings unless you know what they do!**

**Access BIOS/UEFI and document:**

| Setting Category | Key Settings Found |
|------------------|-------------------|
| Boot | |
| CPU | |
| Memory | |
| Storage | |
| Integrated Peripherals | |
| Power Management | |
| Security | |

**Current configuration:**

| Setting | Current Value |
|---------|---------------|
| Boot mode | [ ] UEFI [ ] Legacy [ ] CSM |
| Secure Boot | [ ] Enabled [ ] Disabled |
| XMP/DOCP | [ ] Enabled [ ] Disabled |
| Virtualization | [ ] Enabled [ ] Disabled |
| SATA Mode | [ ] AHCI [ ] RAID [ ] IDE |
| Fast Boot | [ ] Enabled [ ] Disabled |

**Find and document:**

| Information | Value |
|-------------|-------|
| BIOS version | |
| BIOS date | |
| CPU detected | |
| RAM detected | |
| Storage devices | |
| Boot order | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer's new RAM isn't recognized. The motherboard supports DDR4-3200, and they bought DDR4-3600. The RAM works in another system. What might be wrong, and how would you troubleshoot?**

2. **A system repeatedly loses BIOS settings including date/time, but works fine once configured. The system is 5 years old. What's the likely cause and fix?**

3. **A user wants to upgrade from an Intel 10th Gen to 12th Gen CPU. Their current motherboard is a Z490. Can they just swap the CPU? Explain why or why not.**

4. **A new PC build shows debug code "A2" (IDE Detect) and won't boot. The system has only NVMe storage. What setting might need to be changed?**

---

## What You Learned Today

- ✅ Identified all major motherboard components
- ✅ Understood CPU socket types (Intel LGA, AMD AM4/AM5)
- ✅ Learned chipset hierarchy and features
- ✅ Mastered RAM channel configuration
- ✅ Explored PCIe slots and lane allocation
- ✅ Understood storage interfaces (SATA, M.2, NVMe)
- ✅ Identified rear I/O and internal headers
- ✅ Compared BIOS vs UEFI
- ✅ Learned CMOS battery function and reset procedures
- ✅ Practiced motherboard selection for different builds
- ✅ Studied motherboard troubleshooting
- ✅ (Tier 2) Documented real motherboard specifications

**Next Lab:** CPUs and Processors - understanding processor architecture, specifications, and installation.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              MOTHERBOARD QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════╣
║  CPU SOCKETS:                                                  ║
║  Intel: LGA 1700 (12th-14th Gen), LGA 1200 (10th-11th Gen)   ║
║  AMD: AM5 (Ryzen 7000), AM4 (Ryzen 1000-5000)                 ║
╠═══════════════════════════════════════════════════════════════╣
║  RAM INSTALLATION (Dual Channel):                              ║
║  2 sticks → Use slots 2 & 4 (A2 & B2) typically               ║
║  4 sticks → Fill all slots                                    ║
║  Match colors for same channel                                 ║
╠═══════════════════════════════════════════════════════════════╣
║  PCIe BANDWIDTH (per lane):                                    ║
║  PCIe 3.0: ~1 GB/s  |  PCIe 4.0: ~2 GB/s  |  PCIe 5.0: ~4 GB/s║
║  x16 slot: 16× per-lane speed                                 ║
╠═══════════════════════════════════════════════════════════════╣
║  M.2 KEYS:                                                     ║
║  B key: SATA only  |  M key: NVMe (and SATA)  |  B+M: Both    ║
╠═══════════════════════════════════════════════════════════════╣
║  CMOS BATTERY: CR2032, 3V, replace every 5-7 years            ║
╠═══════════════════════════════════════════════════════════════╣
║  BIOS ACCESS KEYS: DEL (most), F2 (Dell, ASUS), F10 (HP)      ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 18: Motherboards - Components and Features*