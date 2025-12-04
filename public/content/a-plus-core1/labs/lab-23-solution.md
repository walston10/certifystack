# Lab 23: Expansion Cards - Solution Guide

> ⚠️ **Note:** Review this after attempting the lab yourself. The learning happens in the struggle!

---

## Section 1: Concept Check - Answers

### Question 1: PCIe Slot Differences
**What is the difference between PCIe x1, x4, x8, and x16 slots, and which expansion cards typically use each?**

The number indicates how many data lanes the slot provides. More lanes = more bandwidth:

| Slot | Lanes | Bandwidth (PCIe 4.0) | Typical Cards |
|------|-------|---------------------|---------------|
| x1 | 1 | ~2 GB/s | Sound cards, basic NICs, USB expansion |
| x4 | 4 | ~8 GB/s | NVMe adapters, 10GbE NICs, some capture cards |
| x8 | 8 | ~16 GB/s | RAID controllers, high-end NICs, workstation cards |
| x16 | 16 | ~32 GB/s | Graphics cards, high-performance compute cards |

Physically larger slots can accept smaller cards (x1 card works in x16 slot), but not vice versa unless the slot is open-ended.

---

### Question 2: Dedicated Sound Cards
**Why would someone install a dedicated sound card when most motherboards have built-in audio?**

Dedicated sound cards offer:
- **Higher audio quality** - Better DAC (Digital-to-Analog Converter) with lower noise floor
- **Electrical isolation** - Separated from motherboard interference/electrical noise
- **More I/O options** - Multiple inputs/outputs for professional audio work
- **Lower latency** - Critical for real-time music production (ASIO drivers)
- **Hardware processing** - Offloads audio processing from CPU
- **Specialized features** - Optical output, headphone amps, EQ processing

Most users don't need one, but audio professionals, musicians, and audiophiles benefit significantly.

---

### Question 3: GPU Power Requirements
**A customer's new graphics card requires two 8-pin power connectors, but their PSU only has one. What are their options?**

Options in order of recommendation:
1. **Replace the PSU** - Best solution. Get a PSU with adequate connectors and wattage
2. **Use a splitter/adapter** - 2x 6-pin to 1x 8-pin adapters exist, but risky if PSU can't provide enough power on that rail
3. **SATA/Molex to PCIe adapters** - NOT recommended, fire hazard, can't deliver adequate power safely

**Important:** Two 8-pin connectors = 300W + 75W from slot = 375W potential draw. The PSU must have sufficient 12V rail capacity, not just total wattage. A quality 650W+ PSU with proper connectors is the right answer.

---

### Question 4: Riser Cards
**What is the purpose of a riser card, and in what situations are they commonly used?**

A riser card redirects or extends PCIe slots, allowing cards to be mounted in different orientations or locations.

**Common uses:**
- **Small form factor (SFF) cases** - Mount GPU vertically or in tight spaces
- **Servers** - Allow horizontal card installation in 1U/2U rackmount chassis
- **Custom builds** - Display GPU through case window vertically
- **Thermal management** - Position card away from heat sources
- **Mining rigs** - Connect multiple GPUs to single motherboard (using powered risers)

Quality matters significantly - cheap risers can cause signal degradation, instability, or even damage.

---

### Question 5: PCIe Backward Compatibility
**Explain why a PCIe 3.0 graphics card will work in a PCIe 5.0 slot, but may not reach the motherboard's maximum bandwidth.**

PCIe is backward and forward compatible - all generations use the same physical connector and negotiate the highest mutually supported speed.

A PCIe 3.0 card in a PCIe 5.0 slot:
- **Works perfectly** - The slot detects the card's capability and runs at PCIe 3.0 speeds
- **Limited to PCIe 3.0 bandwidth** - ~1 GB/s per lane instead of PCIe 5.0's ~4 GB/s
- **x16 PCIe 3.0** = ~16 GB/s (the card's maximum, regardless of slot capability)
- **x16 PCIe 5.0** = ~64 GB/s (slot's capability, unused by older card)

The card is always the limiting factor when it's the older component. The slot's extra capability simply goes unused.

---

## Section 2: Activity Solutions

### Activity A: PCIe Slot Fundamentals

**PCIe bandwidth by generation:**

| Generation | Per-Lane Bandwidth | x1 | x4 | x8 | x16 |
|------------|-------------------|----|----|----|----|
| PCIe 3.0 | ~1 GB/s | 1 GB/s | 4 GB/s | 8 GB/s | 16 GB/s |
| PCIe 4.0 | ~2 GB/s | 2 GB/s | 8 GB/s | 16 GB/s | 32 GB/s |
| PCIe 5.0 | ~4 GB/s | 4 GB/s | 16 GB/s | 32 GB/s | 64 GB/s |

**PCIe backward/forward compatibility:**

| Scenario | Works? | Speed |
|----------|--------|-------|
| PCIe 3.0 card in PCIe 4.0 slot | Yes | PCIe 3.0 speeds |
| PCIe 4.0 card in PCIe 3.0 slot | Yes | PCIe 3.0 speeds |
| x4 card in x16 slot | Yes | x4 speeds (uses 4 lanes) |
| x16 card in x4 slot | Maybe* | x4 speeds if slot is open-ended |

*Most x4 slots are "closed" and won't physically accept x16 cards. Some motherboards have open-ended slots.

**Physical vs Electrical lanes:**

"x16 physical, x4 electrical" means the slot is physically large enough for x16 cards but only wired with 4 data lanes. Common on consumer motherboards for the second x16 slot - lets you install large cards but with reduced bandwidth. Always check motherboard specs!

---

### Activity B: Graphics Cards (GPUs)

**GPU components:**

| Component | Purpose |
|-----------|---------|
| GPU chip | Processes graphics calculations (thousands of cores) |
| VRAM | Dedicated video memory for textures, frame buffers |
| Cooling solution | Dissipates heat (fans, heatsinks, vapor chambers) |
| Display outputs | Connect to monitors (HDMI, DP, DVI) |
| Power connectors | Supply additional power beyond PCIe slot's 75W |
| PCIe interface | Communicates with CPU/system via PCIe lanes |

**GPU specifications:**

| Specification | What It Affects |
|---------------|-----------------|
| CUDA cores / Stream processors | Raw processing power, parallel computation |
| VRAM amount | Texture quality, resolution capability, multi-monitor |
| VRAM type (GDDR6, GDDR6X) | Memory bandwidth, affects high-res performance |
| Memory bus width | Bandwidth to VRAM (256-bit > 128-bit) |
| TDP / Power consumption | PSU requirements, heat output, noise |
| Clock speed (base/boost) | Per-core performance, actual speeds vary |

**Display output types:**

| Output | Max Resolution | Notes |
|--------|----------------|-------|
| HDMI 2.1 | 4K@120Hz, 8K@60Hz | Most common, supports audio, ARC |
| DisplayPort 1.4 | 4K@120Hz, 8K@60Hz | Preferred for gaming, daisy-chain |
| DisplayPort 2.0 | 8K@60Hz+, 4K@240Hz | Newest, limited adoption |
| DVI-D | 2560x1600@60Hz | Legacy digital, being phased out |
| VGA | 2048x1536@85Hz | Analog, obsolete, avoid |

**GPU power connectors:**

| Connector | Power Delivered | Used By |
|-----------|-----------------|---------|
| PCIe slot only | 75W | Entry-level cards (GT 1030, RX 6400) |
| 6-pin | +75W (150W total) | Mid-range cards |
| 8-pin | +150W (225W total) | High-performance cards |
| 12-pin (12VHPWR) | Up to 600W | RTX 40-series, high-end |

**GPU installation considerations:**

| Factor | What to Check |
|--------|---------------|
| Physical length | Measure case clearance, check GPU length specs |
| Slot clearance | Ensure nothing blocks the slot (cables, drives) |
| Power requirements | PSU wattage and correct connectors available |
| Cooling space | 2-3 slot cards need adequate airflow |
| Weight support | Heavy cards may need GPU support bracket |

---

### Activity C: Sound Cards

**Why use a dedicated sound card?**

| Benefit | Explanation |
|---------|-------------|
| Better audio quality | Higher-quality DAC, wider frequency response |
| Lower noise/interference | Isolated from motherboard EMI, higher SNR |
| More inputs/outputs | XLR, 1/4" TRS, multiple channels |
| Hardware processing | DSP for effects, reduces CPU load |
| Specialized features | ASIO support, headphone amps, optical I/O |

**Sound card types:**

| Type | Form Factor | Best For |
|------|-------------|----------|
| Internal PCIe | PCIe x1 slot | Gaming, home audio, permanent setup |
| External USB | USB 2.0/3.0 | Portability, laptops, basic recording |
| External Thunderbolt | Thunderbolt 3/4 | Professional audio, lowest latency |

**Audio specifications:**

| Specification | What It Means | Typical Values |
|---------------|---------------|----------------|
| Sample rate | Samples per second | 44.1kHz (CD), 48kHz (video), 96/192kHz (pro) |
| Bit depth | Dynamic range resolution | 16-bit (CD), 24-bit (pro), 32-bit (mastering) |
| SNR (Signal-to-Noise Ratio) | Clean signal vs noise floor | 90dB (okay), 110dB+ (excellent) |
| THD (Total Harmonic Distortion) | Signal accuracy | <0.01% (good), <0.001% (excellent) |
| Channels | Independent audio streams | 2 (stereo), 5.1, 7.1, 8+ (pro) |

**Common audio connectors:**

| Connector | Color Code | Purpose |
|-----------|------------|---------|
| Line out | Green | Main speakers/headphones |
| Line in | Blue | External audio input |
| Microphone | Pink | Mic input (often with boost) |
| Center/Subwoofer | Orange | Center channel + sub (5.1/7.1) |
| Rear speakers | Black | Rear surround (5.1/7.1) |
| Side speakers | Gray | Side surround (7.1) |
| S/PDIF (optical) | N/A (black port) | Digital audio, TOSLINK connector |
| S/PDIF (coaxial) | Orange (RCA) | Digital audio, coax connector |

**Who needs a sound card today?**

| User Type | Dedicated Sound Card? | Why/Why Not |
|-----------|----------------------|-------------|
| Average user | No | Onboard audio is good enough for YouTube, games |
| Gamer | Maybe | Onboard is fine; external DAC/amp for headphones |
| Music producer | Yes | Low latency, multiple inputs, pro features |
| Audiophile | Maybe | External DAC often preferred over internal card |
| Content creator | Yes | Clean audio recording, monitoring capabilities |

---

### Activity D: Network Interface Cards (NICs)

**Why add a NIC?**

| Reason | Explanation |
|--------|-------------|
| Faster speeds | 2.5/5/10 GbE when onboard is only 1GbE |
| Additional ports | Multiple connections, network segmentation |
| Specialized features | Hardware timestamping, SR-IOV, RDMA |
| Replacement for failed port | Onboard NIC died, cheaper than new motherboard |
| Server requirements | Multiple redundant connections, bonding |

**Wired NIC types:**

| Speed | Standard | Connector | Typical Use |
|-------|----------|-----------|-------------|
| 1 Gbps | 1000BASE-T | RJ-45 | Standard desktop, most common |
| 2.5 Gbps | 2.5GBASE-T | RJ-45 | Gaming, newer desktops |
| 5 Gbps | 5GBASE-T | RJ-45 | Prosumer, small business |
| 10 Gbps | 10GBASE-T | RJ-45 | Servers, workstations, NAS |
| 25 Gbps | 25GBASE-SR | SFP28 | Data center, high-performance |

**Wireless NIC types:**

| Standard | Wi-Fi Generation | Max Speed | Frequencies |
|----------|------------------|-----------|-------------|
| 802.11ac | Wi-Fi 5 | 3.5 Gbps | 5 GHz only |
| 802.11ax | Wi-Fi 6 | 9.6 Gbps | 2.4 GHz + 5 GHz |
| 802.11ax | Wi-Fi 6E | 9.6 Gbps | 2.4 GHz + 5 GHz + 6 GHz |

**NIC form factors:**

| Form Factor | Description | Use Case |
|-------------|-------------|----------|
| PCIe x1 | Single-lane card | 1-2.5 GbE, basic Wi-Fi |
| PCIe x4 | Four-lane card | 10 GbE, high-performance |
| M.2 (Key E) | Small module | Laptop Wi-Fi, compact builds |
| USB adapter | External dongle | Portable, temporary, laptops |

**NIC features:**

| Feature | Benefit |
|---------|---------|
| Wake-on-LAN (WoL) | Power on PC remotely via network packet |
| VLAN support | Hardware VLAN tagging for network segmentation |
| Teaming/bonding | Combine multiple NICs for bandwidth/redundancy |
| Hardware offloading | TCP/IP processing on NIC, reduces CPU load |
| Low latency | Gaming NICs prioritize responsiveness |

---

### Activity E: Capture Cards

**What is a capture card?**

A capture card is a device that records or streams video/audio from an external source (game console, camera, another PC) by converting the signal to a format the computer can process and record.

**Capture card uses:**

| Use Case | Description |
|----------|-------------|
| Game streaming | Capture console/PC gameplay for Twitch, YouTube |
| Video production | Record footage from cameras, decks |
| Recording consoles | PlayStation, Xbox, Switch don't have native recording |
| Video conferencing | Use professional cameras as webcams |

**Capture card types:**

| Type | Connection | Latency | Best For |
|------|------------|---------|----------|
| Internal PCIe | PCIe x1/x4 | Lowest | Dedicated streaming PC, pro setups |
| External USB | USB 3.0 | Low-Medium | Portability, laptops, simplicity |
| External Thunderbolt | TB3/TB4 | Low | Mac users, pro portable setups |

**Input/output specifications:**

| Specification | What to Check |
|---------------|---------------|
| Input resolution | 1080p, 1440p, 4K - match your source |
| Input frame rate | 60fps minimum for gaming, 120fps for high-end |
| Passthrough support | Zero-latency output to monitor while capturing |
| Encoding (hardware/software) | Hardware = less CPU, software = more flexible |
| HDR support | Required for HDR content capture |

---

### Activity F: Other Expansion Cards

**Storage controller cards:**

| Type | Purpose | PCIe Lanes |
|------|---------|------------|
| SATA controller | Add more SATA ports (HDDs, SSDs) | x1-x2 |
| SAS controller | Enterprise drives, higher reliability | x4-x8 |
| NVMe adapter (RAID) | Multiple NVMe drives with RAID | x8-x16 |
| HBA (Host Bus Adapter) | Pass drives directly to OS (ZFS, etc.) | x4-x8 |

**USB expansion cards:**

| Type | Purpose |
|------|---------|
| USB 3.0 ports | Add more high-speed USB ports |
| USB-C/Thunderbolt | Add modern USB-C connectivity |
| USB 2.0 headers | Internal headers for front panel |

**Other specialty cards:**

| Card Type | Purpose | Who Needs It |
|-----------|---------|--------------|
| TV tuner | Watch/record broadcast TV | Cord-cutters, HTPC builders |
| Serial/parallel port | Legacy device connectivity | Industrial, old equipment |
| Firewire (IEEE 1394) | Legacy audio/video equipment | Music studios with old gear |
| Modem (dial-up) | Dial-up internet, fax | Rural areas, legacy fax systems |
| RAID controller | Hardware RAID with cache | Servers, enterprise storage |
| GPU compute card | AI/ML, rendering without display | Data science, 3D rendering farms |

---

### Activity G: Multi-GPU Configurations

**Multi-GPU technologies:**

| Technology | Manufacturer | Status |
|------------|--------------|--------|
| SLI | NVIDIA | Discontinued (ended with RTX 20-series) |
| CrossFire | AMD | Discontinued (ended with RX 500-series) |
| NVLink | NVIDIA | Professional/workstation only (Quadro, A-series) |

**Multi-GPU requirements:**

| Requirement | Description |
|-------------|-------------|
| Motherboard | Must support multi-GPU (SLI/CF certification) |
| Identical GPUs | Same model, ideally same manufacturer |
| Bridge connector | Physical connector between cards (SLI bridge) |
| Power supply | Significantly higher wattage (2x GPU power) |
| Game/application support | Must be specifically supported, many aren't |

**Is multi-GPU worth it today?**

| Pros | Cons |
|------|------|
| More VRAM (some workloads) | Poor/no game support |
| Parallel compute tasks | High power consumption |
| Professional rendering | Heat and noise |
| | Micro-stuttering issues |
| | Expensive (just buy faster single GPU) |

**Current recommendation for gaming:**

Buy the fastest single GPU you can afford. Multi-GPU for gaming is effectively dead. Modern games rarely support it, and a single high-end GPU outperforms dual mid-range cards in almost all scenarios. Multi-GPU only makes sense for professional workloads (rendering, AI training) with specific software support.

---

### Activity H: Expansion Card Installation

**Pre-installation checklist:**

| Check | Why Important |
|-------|---------------|
| Correct slot type | Card must physically fit and have adequate bandwidth |
| Physical clearance | Card length, width (2-3 slot), height |
| Power requirements met | PSU wattage and correct connectors |
| Driver availability | Download drivers before installation |
| BIOS settings | Some cards need BIOS configuration |

**Installation steps:**

| Step | Action | Notes |
|------|--------|-------|
| 1 | Power off and unplug PC | Safety first |
| 2 | Ground yourself (ESD strap) | Prevent static damage |
| 3 | Remove slot cover | Keep screw for securing card |
| 4 | Align card with slot | Match notch, don't force |
| 5 | Press firmly until click | Card should be level, fully seated |
| 6 | Secure with screw | Prevents card from shifting |
| 7 | Connect power cables | GPU power connectors if needed |

**Post-installation steps:**

| Step | Action |
|------|--------|
| 1 | Power on, verify detection in BIOS |
| 2 | Boot to OS, check Device Manager |
| 3 | Install/update drivers |
| 4 | Test functionality (benchmark, application) |

**Common installation mistakes:**

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Card not fully seated | No detection, instability | Press firmly, verify click |
| Forgot power connector | No display, fans may spin | Double-check before closing |
| Wrong slot used | Reduced bandwidth, no detection | Check motherboard manual |
| Static damage | Dead card, intermittent issues | Use ESD protection |
| Forgot to remove slot cover | Can't install card | Remove cover first |

---

### Activity I: Riser Cards and Adapters

**What is a riser card?**

A riser card is a circuit board that extends or redirects PCIe slots, allowing expansion cards to be mounted in different orientations or positions than the standard perpendicular-to-motherboard configuration.

**Riser card types:**

| Type | Purpose | Common Use |
|------|---------|------------|
| Vertical GPU riser | Mount GPU parallel to motherboard | SFF cases, aesthetic builds |
| PCIe extension | Extend slot location | Custom cases, tight spaces |
| Server riser | Horizontal card mounting | 1U/2U rackmount servers |
| Mining riser | Powered extension for multiple GPUs | Cryptocurrency mining rigs |

**Riser cable considerations:**

| Factor | Why It Matters |
|--------|----------------|
| PCIe generation support | Must support your card's generation (3.0/4.0/5.0) |
| Cable length | Longer = more signal degradation risk |
| Shielding | Prevents interference, especially at high speeds |
| Quality | Cheap risers cause instability, even damage |

**When to use risers:**

| Scenario | Riser Type |
|----------|------------|
| SFF case with GPU | Vertical riser with short cable |
| Server blade | 90-degree or horizontal riser |
| Display GPU vertically | Vertical mount kit with riser |
| Custom case layout | Extension cable to reposition slot |

---

### Activity J: Troubleshooting Expansion Cards

**Symptom analysis:**

| Symptom | Possible Cause | Solution |
|---------|----------------|----------|
| Card not detected | Not seated, wrong slot, dead card | Reseat, try different slot, test in another PC |
| No display (GPU) | Power not connected, cable issue, driver | Check power, try different cable/output, safe mode |
| Poor performance | Thermal throttling, wrong slot, driver | Check temps, verify x16 slot, update driver |
| System crashes | Driver conflict, power issue, defective | Clean driver install, check PSU, test card |
| Overheating | Poor airflow, dust, failed fan | Clean, improve airflow, replace thermal paste |
| No audio (sound card) | Driver, default device, connection | Install driver, set as default, check cables |
| No network (NIC) | Driver, cable, disabled | Install driver, check cable, enable in BIOS |

**Diagnostic steps:**

| Step | What to Check |
|------|---------------|
| 1 | Physical seating - reseat the card |
| 2 | Power connections - all cables connected? |
| 3 | Device Manager - detected? errors? |
| 4 | Drivers - installed, up to date? |
| 5 | BIOS settings - slot enabled? PCIe mode correct? |

**Device Manager indicators:**

| Symbol | Meaning | Solution |
|--------|---------|----------|
| Yellow exclamation | Driver problem or conflict | Update/reinstall driver |
| Red X | Device disabled | Right-click, Enable |
| Down arrow | Device disabled by user | Right-click, Enable |
| Question mark | Unknown device, no driver | Find and install driver |

**GPU-specific troubleshooting:**

| Issue | Possible Causes |
|-------|-----------------|
| No display output | Wrong output, cable issue, GPU not powered, driver |
| Artifacts/visual glitches | Overheating, dying GPU, VRAM failure, driver |
| Driver crashes | Unstable overclock, overheating, driver bug |
| Low FPS | Thermal throttling, CPU bottleneck, wrong settings |
| Fan not spinning | Fan curve (0% at idle), failed fan, power issue |

---

### Activity K: Expansion Card Selection Scenarios

**Scenario 1: Gamer Upgrade**

| Current Setup | i5-12400, integrated graphics, 550W PSU |
|---------------|----------------------------------------|
| Budget | $300 for GPU |
| Goal | 1080p 60+ FPS gaming |

**Recommendation:** RTX 4060 or RX 7600

**Power sufficient?** Yes, both cards use ~120-150W, 550W PSU is adequate

**Reasoning:** These cards deliver excellent 1080p performance, are power-efficient, and leave headroom on a 550W PSU. The i5-12400 won't bottleneck either card at 1080p.

---

**Scenario 2: Audio Production**

| Current Setup | i7-13700K, onboard Realtek audio |
|---------------|----------------------------------|
| Budget | $200 for audio solution |
| Goal | Low latency recording, multiple inputs |

**Recommendation:** Focusrite Scarlett 2i2 or similar USB audio interface

**Internal or external?** External USB audio interface

**Reasoning:** For recording, an external audio interface is preferred over an internal sound card. It provides: XLR/TRS inputs with preamps, dedicated headphone output, ASIO drivers for low latency, portability, and isolation from PC electrical noise. Internal PCIe sound cards are better for playback/gaming than recording.

---

**Scenario 3: Home Server**

| Current Setup | Old desktop, 1Gbps onboard NIC |
|---------------|--------------------------------|
| Budget | $100 for networking |
| Goal | 10Gbps for NAS transfers |

**Recommendation:** Intel X540-T1 or similar 10GbE NIC (used/refurbished)

**Considerations:** 
- Need 10GbE switch or direct connection to client
- Cat6a cabling recommended for 10GbE
- Check PCIe slot availability (x4 or x8 needed)
- Used enterprise NICs (Intel, Mellanox) offer great value
- Ensure adequate cooling (10GbE NICs can run warm)

---

**Scenario 4: Content Creator**

| Current Setup | Ryzen 7, RTX 3060, no capture card |
|---------------|-----------------------------------|
| Budget | $150 for capture |
| Goal | Stream console gameplay at 1080p60 |

**Recommendation:** Elgato HD60 S+ or AVerMedia Live Gamer Mini

**Internal or external?** External USB - easier setup, portable, can use with laptop too

**Reasoning:** For 1080p60 console capture, a USB capture card is perfect. The HD60 S+ offers passthrough (no latency on TV), hardware encoding (reduces CPU load), and simple USB 3.0 connection. Internal cards are overkill for this use case and less portable.

---

## Section 3: Reflection Scenarios

### Scenario 1: GPU No Display
**A customer installed a new graphics card but gets no display. The fans spin but nothing appears on screen. What troubleshooting steps would you take?**

1. **Check monitor cable** - Connected to GPU, not motherboard? Try different port/cable
2. **Verify power** - All PCIe power connectors attached? PSU adequate wattage?
3. **Reseat the card** - Remove and reinstall, ensure full click
4. **Check slot** - Try different PCIe slot if available
5. **Clear CMOS** - Reset BIOS to defaults
6. **Test with known-good GPU** - Rule out slot/motherboard issue
7. **Listen for beep codes** - May indicate specific failure
8. **Check for display in BIOS** - Does BIOS screen appear? If yes, driver issue
9. **Boot to safe mode** - If BIOS works, try safe mode for driver reinstall

"Fans spin but no display" often indicates the GPU is getting some power but not fully initializing - check the PCIe power connectors first.

---

### Scenario 2: Audio Recording Noise
**A music producer's recordings have audible electrical noise/hum. They're using onboard audio. What would you recommend and why?**

The noise is likely EMI (electromagnetic interference) from the motherboard affecting the onboard audio's analog circuitry.

**Recommendation:** External USB audio interface (Focusrite Scarlett, PreSonus AudioBox, etc.)

**Why external over internal PCIe sound card:**
- **Physical isolation** - Completely separated from PC's electrical noise
- **Dedicated shielding** - Pro interfaces have proper analog isolation
- **Better preamps** - Clean gain for microphones
- **Portability** - Can use with laptop for mobile recording
- **ASIO drivers** - Low-latency performance for real-time monitoring

An internal sound card would be better than onboard but still subject to some PC interference. For serious recording, external is the standard.

---

### Scenario 3: GPU Upgrade Power Requirements
**A customer wants to upgrade from a GTX 1060 to an RTX 4070. Their PSU is 450W with only one 6-pin PCIe connector. What needs to change?**

**RTX 4070 requirements:**
- TDP: ~200W
- Power connector: 1x 8-pin (or 12VHPWR adapter)
- Recommended PSU: 650W

**What needs to change:**

1. **New PSU required** - 450W is insufficient for RTX 4070 + system
   - Recommend 650W minimum, 750W for headroom
   - Must have at least one 8-pin PCIe connector (preferably two 8-pin or native 12VHPWR)

2. **Don't use adapters on undersized PSU** - A 6-pin to 8-pin adapter won't solve the underlying power capacity issue

**Budget-conscious alternative:** If PSU upgrade isn't possible, consider RTX 4060 (115W TDP, 8-pin but more efficient) which might work with 450W, though still recommend PSU upgrade.

---

### Scenario 4: Server Multi-NIC Challenge
**A server needs four 10Gbps network connections but the motherboard only has one PCIe x16 slot (occupied by RAID card) and two PCIe x1 slots. How can this be accomplished?**

**Options:**

1. **Quad-port 10GbE NIC** - Single card with 4x 10GbE ports
   - Requires x8 or x16 slot (problem: slot occupied)
   - Won't fit in x1 slots

2. **Replace RAID card with HBA + software RAID**
   - Free up x16 slot for quad-port NIC
   - Use ZFS or mdadm for software RAID
   - May impact RAID performance

3. **Motherboard/server upgrade**
   - Get board with more PCIe slots
   - Server boards often have multiple x8 slots

4. **PCIe bifurcation (if supported)**
   - Split x16 into 2x x8 slots using riser
   - Install RAID in x8, dual-port 10GbE in other x8
   - Use x1 slots for 2x single-port 10GbE (won't work - 10GbE needs x4)

5. **External solution**
   - Thunderbolt to 10GbE adapter (if available)
   - Network switch with link aggregation on fewer ports

**Best solution:** Replace RAID controller with HBA, use software RAID (ZFS), install quad-port 10GbE NIC in the x16 slot. Modern software RAID performs excellently and frees the slot.

---

## Tier 2 Activity Solutions

### Activity L: Document Your Expansion Cards

**Example documentation:**

| Category | Card Found | Model |
|----------|------------|-------|
| Display adapters | Yes | NVIDIA GeForce RTX 3070 |
| Sound, video and game controllers | No (onboard) | Realtek High Definition Audio |
| Network adapters | Yes | Intel Wi-Fi 6 AX200 |
| Storage controllers | No (onboard) | Intel SATA Controller |
| Other | No | - |

Most consumer PCs only have a dedicated GPU; other functions use onboard controllers.

---

### Activity M: GPU Information Gathering

**Example GPU-Z reading:**

| Specification | Example Value |
|---------------|---------------|
| Name | NVIDIA GeForce RTX 3070 |
| GPU chip | GA104 |
| VRAM | 8192 MB |
| VRAM type | GDDR6 |
| Bus interface | PCIe x16 4.0 |
| Driver version | 546.33 |
| PCIe lane width | x16 |
| Temperature (idle) | 35°C |

---

### Activity N: Check PCIe Configuration

**Understanding GPU-Z Bus Interface readings:**

| Setting | What It Means |
|---------|---------------|
| Bus Interface: PCIe x16 4.0 | Maximum capability |
| Current Link Speed: PCIe 4.0 | Currently running at Gen 4 |
| Maximum Link Speed: PCIe 4.0 | Slot supports Gen 4 |
| Current Link Width: x16 | Using all 16 lanes |
| Maximum Link Width: x16 | Slot has 16 lanes available |

**Common issues if not running at full speed:**
- **x8 instead of x16:** Second GPU installed, or using secondary slot that's x8 electrical
- **PCIe 3.0 instead of 4.0:** Older motherboard, or BIOS set to Gen 3
- **Fluctuating speed:** GPU drops to lower speed at idle (power saving, normal)

---

## Key Exam Topics Summary

### Must Know for A+ Exam:

**PCIe Slots:**
- x1, x4, x8, x16 physical sizes and bandwidth
- Backward/forward compatibility
- Physical vs electrical lanes

**Graphics Cards:**
- Power connectors (6-pin = 75W, 8-pin = 150W)
- Display outputs (HDMI, DisplayPort, DVI)
- Installation requirements

**Sound Cards:**
- Audio port color codes (green out, blue in, pink mic)
- When dedicated cards are beneficial

**Network Cards:**
- Wired speeds (1/2.5/10 GbE)
- Wireless standards (Wi-Fi 5/6/6E)

**Installation:**
- Proper procedure and ESD precautions
- Troubleshooting no detection issues
- Device Manager error symbols

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
╠═══════════════════════════════════════════════════════════════╣
║  DEVICE MANAGER: Yellow !=Driver | Red X=Disabled | ?=Unknown ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 23 Solution Guide: Expansion Cards*