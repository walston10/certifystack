# Lab 23: Expansion Cards

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 30-35 minutes
**Exam Objectives:** 3.4 - Given a scenario, install and configure motherboards, CPUs, and add-on cards

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between PCIe x1, x4, x8, and x16 slots, and which expansion cards typically use each?**

2. **Why would someone install a dedicated sound card when most motherboards have built-in audio?**

3. **A customer's new graphics card requires two 8-pin power connectors, but their PSU only has one. What are their options?**

4. **What is the purpose of a riser card, and in what situations are they commonly used?**

5. **Explain why a PCIe 3.0 graphics card will work in a PCIe 5.0 slot, but may not reach the motherboard's maximum bandwidth.**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses research and observation** - Master expansion card concepts without installation.

---

#### Activity A: PCIe Slot Fundamentals

**Goal:** Understand PCIe slot types and bandwidth.

**PCIe slot physical sizes:**

```
PCIe x1:  [====]           (~25mm)
PCIe x4:  [========]       (~39mm)
PCIe x8:  [=============]  (~56mm)
PCIe x16: [=====================] (~89mm)
```

**PCIe bandwidth by generation:**

| Generation | Per-Lane Bandwidth | x1 | x4 | x8 | x16 |
|------------|-------------------|----|----|----|----|
| PCIe 3.0 | | | | | |
| PCIe 4.0 | | | | | |
| PCIe 5.0 | | | | | |

**PCIe backward/forward compatibility:**

| Scenario | Works? | Speed |
|----------|--------|-------|
| PCIe 3.0 card in PCIe 4.0 slot | | |
| PCIe 4.0 card in PCIe 3.0 slot | | |
| x4 card in x16 slot | | |
| x16 card in x4 slot | | |

**Physical vs Electrical lanes:**

What does it mean when a slot is "x16 physical, x4 electrical"?

_________________________________________________________________

---

#### Activity B: Graphics Cards (GPUs)

**Goal:** Understand discrete graphics cards.

**GPU components:**

| Component | Purpose |
|-----------|---------|
| GPU chip | |
| VRAM | |
| Cooling solution | |
| Display outputs | |
| Power connectors | |
| PCIe interface | |

**GPU specifications to consider:**

| Specification | What It Affects |
|---------------|-----------------|
| CUDA cores / Stream processors | |
| VRAM amount | |
| VRAM type (GDDR6, GDDR6X) | |
| Memory bus width | |
| TDP / Power consumption | |
| Clock speed (base/boost) | |

**Display output types:**

| Output | Max Resolution | Notes |
|--------|----------------|-------|
| HDMI 2.1 | | |
| DisplayPort 1.4 | | |
| DisplayPort 2.0 | | |
| DVI-D | | |
| VGA | | |

**GPU power connectors:**

| Connector | Power Delivered | Used By |
|-----------|-----------------|---------|
| PCIe slot only | | |
| 6-pin | | |
| 8-pin | | |
| 12-pin (12VHPWR) | | |

**GPU installation considerations:**

| Factor | What to Check |
|--------|---------------|
| Physical length | |
| Slot clearance | |
| Power requirements | |
| Cooling space | |
| Weight support | |

---

#### Activity C: Sound Cards

**Goal:** Understand dedicated audio hardware.

**Why use a dedicated sound card?**

| Benefit | Explanation |
|---------|-------------|
| Better audio quality | |
| Lower noise/interference | |
| More inputs/outputs | |
| Hardware processing | |
| Specialized features | |

**Sound card types:**

| Type | Form Factor | Best For |
|------|-------------|----------|
| Internal PCIe | | |
| External USB | | |
| External Thunderbolt | | |

**Audio specifications:**

| Specification | What It Means | Typical Values |
|---------------|---------------|----------------|
| Sample rate | | |
| Bit depth | | |
| SNR (Signal-to-Noise Ratio) | | |
| THD (Total Harmonic Distortion) | | |
| Channels | | |

**Common audio connectors:**

| Connector | Color Code | Purpose |
|-----------|------------|---------|
| Line out | | |
| Line in | | |
| Microphone | | |
| Center/Subwoofer | | |
| Rear speakers | | |
| Side speakers | | |
| S/PDIF (optical) | | |
| S/PDIF (coaxial) | | |

**Who needs a sound card today?**

| User Type | Dedicated Sound Card? | Why/Why Not |
|-----------|----------------------|-------------|
| Average user | | |
| Gamer | | |
| Music producer | | |
| Audiophile | | |
| Content creator | | |

---

#### Activity D: Network Interface Cards (NICs)

**Goal:** Understand network expansion cards.

**Why add a NIC when motherboards have built-in networking?**

| Reason | Explanation |
|--------|-------------|
| Faster speeds | |
| Additional ports | |
| Specialized features | |
| Replacement for failed port | |
| Server requirements | |

**Wired NIC types:**

| Speed | Standard | Connector | Typical Use |
|-------|----------|-----------|-------------|
| 1 Gbps | | | |
| 2.5 Gbps | | | |
| 5 Gbps | | | |
| 10 Gbps | | | |
| 25 Gbps | | | |

**Wireless NIC types:**

| Standard | Wi-Fi Generation | Max Speed | Frequencies |
|----------|------------------|-----------|-------------|
| 802.11ac | | | |
| 802.11ax | | | |
| 802.11ax | | | |

**NIC form factors:**

| Form Factor | Description | Use Case |
|-------------|-------------|----------|
| PCIe x1 | | |
| PCIe x4 | | |
| M.2 (Key E) | | |
| USB adapter | | |

**NIC features to consider:**

| Feature | Benefit |
|---------|---------|
| Wake-on-LAN (WoL) | |
| VLAN support | |
| Teaming/bonding | |
| Hardware offloading | |
| Low latency | |

---

#### Activity E: Capture Cards

**Goal:** Understand video capture hardware.

**What is a capture card?**

_________________________________________________________________

**Capture card uses:**

| Use Case | Description |
|----------|-------------|
| Game streaming | |
| Video production | |
| Recording consoles | |
| Video conferencing | |

**Capture card types:**

| Type | Connection | Latency | Best For |
|------|------------|---------|----------|
| Internal PCIe | | | |
| External USB | | | |
| External Thunderbolt | | | |

**Input/output specifications:**

| Specification | What to Check |
|---------------|---------------|
| Input resolution | |
| Input frame rate | |
| Passthrough support | |
| Encoding (hardware/software) | |
| HDR support | |

---

#### Activity F: Other Expansion Cards

**Goal:** Identify various specialty expansion cards.

**Storage controller cards:**

| Type | Purpose | PCIe Lanes |
|------|---------|------------|
| SATA controller | | |
| SAS controller | | |
| NVMe adapter (RAID) | | |
| HBA (Host Bus Adapter) | | |

**USB expansion cards:**

| Type | Purpose |
|------|---------|
| USB 3.0 ports | |
| USB-C/Thunderbolt | |
| USB 2.0 headers | |

**Other specialty cards:**

| Card Type | Purpose | Who Needs It |
|-----------|---------|--------------|
| TV tuner | | |
| Serial/parallel port | | |
| Firewire (IEEE 1394) | | |
| Modem (dial-up) | | |
| RAID controller | | |
| GPU compute card | | |

---

#### Activity G: Multi-GPU Configurations

**Goal:** Understand multi-GPU setups.

**Multi-GPU technologies:**

| Technology | Manufacturer | Status |
|------------|--------------|--------|
| SLI | | |
| CrossFire | | |
| NVLink | | |

**Multi-GPU requirements:**

| Requirement | Description |
|-------------|-------------|
| Motherboard | |
| Identical GPUs | |
| Bridge connector | |
| Power supply | |
| Game/application support | |

**Is multi-GPU worth it today?**

| Pros | Cons |
|------|------|
| | |
| | |
| | |

**Current recommendation for gaming:**

_________________________________________________________________

---

#### Activity H: Expansion Card Installation

**Goal:** Understand proper installation procedures.

**Pre-installation checklist:**

| Check | Why Important |
|-------|---------------|
| Correct slot type | |
| Physical clearance | |
| Power requirements met | |
| Driver availability | |
| BIOS settings | |

**Installation steps:**

| Step | Action | Notes |
|------|--------|-------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |

**Post-installation steps:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

**Common installation mistakes:**

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Card not fully seated | | |
| Forgot power connector | | |
| Wrong slot used | | |
| Static damage | | |
| Forgot to remove slot cover | | |

---

#### Activity I: Riser Cards and Adapters

**Goal:** Understand riser cards and their uses.

**What is a riser card?**

_________________________________________________________________

**Riser card types:**

| Type | Purpose | Common Use |
|------|---------|------------|
| Vertical GPU riser | | |
| PCIe extension | | |
| Server riser | | |
| Mining riser | | |

**Riser cable considerations:**

| Factor | Why It Matters |
|--------|----------------|
| PCIe generation support | |
| Cable length | |
| Shielding | |
| Quality | |

**When to use risers:**

| Scenario | Riser Type |
|----------|------------|
| SFF case with GPU | |
| Server blade | |
| Display GPU vertically | |
| Custom case layout | |

---

#### Activity J: Troubleshooting Expansion Cards

**Goal:** Diagnose common expansion card issues.

**Symptom analysis:**

| Symptom | Possible Cause | Solution |
|---------|----------------|----------|
| Card not detected | | |
| No display (GPU) | | |
| Poor performance | | |
| System crashes | | |
| Overheating | | |
| No audio (sound card) | | |
| No network (NIC) | | |

**Diagnostic steps:**

| Step | What to Check |
|------|---------------|
| 1 | Physical seating |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**Device Manager indicators:**

| Symbol | Meaning | Solution |
|--------|---------|----------|
| Yellow exclamation | | |
| Red X | | |
| Down arrow | | |
| Question mark | | |

**GPU-specific troubleshooting:**

| Issue | Possible Causes |
|-------|-----------------|
| No display output | |
| Artifacts/visual glitches | |
| Driver crashes | |
| Low FPS | |
| Fan not spinning | |

---

#### Activity K: Expansion Card Selection Scenarios

**Goal:** Practice recommending appropriate cards.

**Scenario 1: Gamer Upgrade**

| Current Setup | i5-12400, integrated graphics, 550W PSU |
|---------------|----------------------------------------|
| Budget | $300 for GPU |
| Goal | 1080p 60+ FPS gaming |

Recommendation: _______________

Power sufficient? _______________

Reasoning: _______________

**Scenario 2: Audio Production**

| Current Setup | i7-13700K, onboard Realtek audio |
|---------------|----------------------------------|
| Budget | $200 for audio solution |
| Goal | Low latency recording, multiple inputs |

Recommendation: _______________

Internal or external? _______________

Reasoning: _______________

**Scenario 3: Home Server**

| Current Setup | Old desktop, 1Gbps onboard NIC |
|---------------|--------------------------------|
| Budget | $100 for networking |
| Goal | 10Gbps for NAS transfers |

Recommendation: _______________

Considerations: _______________

**Scenario 4: Content Creator**

| Current Setup | Ryzen 7, RTX 3060, no capture card |
|---------------|-----------------------------------|
| Budget | $150 for capture |
| Goal | Stream console gameplay at 1080p60 |

Recommendation: _______________

Internal or external? _______________

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to a PC** - Uses system tools, observation of physical hardware.

---

#### Activity L: Document Your Expansion Cards

**Goal:** Identify expansion cards in your system.

**Using Device Manager:**

1. Open Device Manager
2. Expand each category
3. Document expansion cards (not onboard)

| Category | Card Found | Model |
|----------|------------|-------|
| Display adapters | | |
| Sound, video and game controllers | | |
| Network adapters | | |
| Storage controllers | | |
| Other | | |

**Physical inspection (if possible):**

| Slot | Card Installed | Type |
|------|----------------|------|
| PCIe x16 #1 | | |
| PCIe x16 #2 | | |
| PCIe x1 #1 | | |
| PCIe x1 #2 | | |

---

#### Activity M: GPU Information Gathering

**Goal:** Document your graphics configuration.

**Using GPU-Z or Task Manager:**

| Specification | Your GPU |
|---------------|----------|
| Name | |
| GPU chip | |
| VRAM | |
| VRAM type | |
| Bus interface | |
| Driver version | |
| PCIe lane width | |
| Temperature (idle) | |

**Display outputs on your GPU:**

| Output Type | Quantity | In Use? |
|-------------|----------|---------|
| HDMI | | |
| DisplayPort | | |
| DVI | | |
| VGA | | |
| USB-C | | |

---

#### Activity N: Check PCIe Configuration

**Goal:** Verify PCIe slot usage and speeds.

**Using GPU-Z (for graphics card):**

| Setting | Value |
|---------|-------|
| Bus Interface | |
| Current Link Speed | |
| Maximum Link Speed | |
| Current Link Width | |
| Maximum Link Width | |

**Is your GPU running at full speed?**

[ ] Yes, full x16
[ ] No, running at reduced lanes
[ ] Running at older PCIe generation

**If not at full speed, possible reasons:**

_________________________________________________________________

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer installed a new graphics card but gets no display. The fans spin but nothing appears on screen. What troubleshooting steps would you take?**

2. **A music producer's recordings have audible electrical noise/hum. They're using onboard audio. What would you recommend and why?**

3. **A customer wants to upgrade from a GTX 1060 to an RTX 4070. Their PSU is 450W with only one 6-pin PCIe connector. What needs to change?**

4. **A server needs four 10Gbps network connections but the motherboard only has one PCIe x16 slot (occupied by RAID card) and two PCIe x1 slots. How can this be accomplished?**

---

## What You Learned Today

- ✅ Understood PCIe slot types and bandwidth
- ✅ Learned graphics card components and specifications
- ✅ Explored sound card features and use cases
- ✅ Mastered network interface card options
- ✅ Understood capture card functionality
- ✅ Identified various specialty expansion cards
- ✅ Learned about multi-GPU configurations
- ✅ Studied proper expansion card installation
- ✅ Explored riser cards and adapters
- ✅ Practiced troubleshooting expansion card issues
- ✅ (Tier 2) Documented installed expansion cards
- ✅ (Tier 2) Gathered GPU and PCIe information

**Next Lab:** Display Technologies - understanding monitors, projectors, and display specifications.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              EXPANSION CARDS QUICK REFERENCE                   ║
╠═══════════════════════════════════════════════════════════════╣
║  PCIe BANDWIDTH (per lane):                                    ║
║  PCIe 3.0: ~1 GB/s  |  PCIe 4.0: ~2 GB/s  |  PCIe 5.0: ~4 GB/s║
╠═══════════════════════════════════════════════════════════════╣
║  COMMON SLOT USAGE:                                            ║
║  x16: Graphics cards, high-speed NVMe RAID                    ║
║  x4:  NVMe adapters, 10GbE NICs, capture cards                ║
║  x1:  Sound cards, USB expansion, 1GbE NICs                   ║
╠═══════════════════════════════════════════════════════════════╣
║  GPU POWER CONNECTORS:                                         ║
║  Slot only: 75W  |  6-pin: +75W  |  8-pin: +150W              ║
║  12VHPWR (12-pin): Up to 600W                                 ║
╠═══════════════════════════════════════════════════════════════╣
║  COMPATIBILITY: Cards work in larger slots (x1 in x16 = OK)   ║
║  GENERATIONS: Backward compatible (3.0 card in 4.0 slot = OK) ║
╠═══════════════════════════════════════════════════════════════╣
║  AUDIO PORTS: Green=Out, Blue=In, Pink=Mic, Orange=Center     ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 23: Expansion Cards*