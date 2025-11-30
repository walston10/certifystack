export const lesson23Flashcards = [
  {
    id: 1,
    front: "What is a discrete GPU and how does it differ from integrated graphics?",
    back: "Discrete: Separate graphics card in PCIe slot, dedicated VRAM, much more powerful, requires power connectors, generates heat. Integrated: Built into CPU, shares system RAM, adequate for basic tasks, no extra power needed. Discrete for gaming/content creation, integrated for office work."
  },
  {
    id: 2,
    front: "What is VRAM and how much do GPUs typically have?",
    back: "Video RAM - dedicated memory for GPU. Stores textures, frame buffers, rendering data. Types: GDDR6, GDDR6X. Entry-level: 4-6 GB. Mid-range: 8-12 GB. High-end: 16-24 GB. More VRAM needed for: higher resolutions, high textures, multiple monitors, video editing."
  },
  {
    id: 3,
    front: "What display outputs do modern graphics cards have?",
    back: "HDMI: Most common, audio+video, 4K@60Hz (2.0) or 4K@120Hz/8K@60Hz (2.1). DisplayPort: Best for high refresh gaming, 1.4 or 2.0. DVI: Digital, legacy (being phased out). VGA: Analog, obsolete (removed from modern cards). USB-C/Thunderbolt: Some cards."
  },
  {
    id: 4,
    front: "What power connectors do graphics cards use?",
    back: "6-pin PCIe: 75W. 8-pin (6+2) PCIe: 150W. PCIe slot provides: 75W. Mid-range cards: One 8-pin. High-end cards: Two or three 8-pin. RTX 4090: 12VHPWR (16-pin, 600W). Must have PSU with sufficient connectors and wattage."
  },
  {
    id: 5,
    front: "What is SLI/CrossFire and is it still relevant?",
    back: "SLI (NVIDIA) / CrossFire (AMD). Multiple GPUs working together. Requires: compatible motherboard, identical GPUs, SLI/CrossFire bridge (older). Mostly obsolete - poor scaling, driver issues, not worth cost. Single powerful GPU better. NVIDIA ended SLI support (except RTX 3090)."
  },
  {
    id: 6,
    front: "What PCIe slot does a graphics card use?",
    back: "PCIe x16 slot (longest slot). Works in any PCIe x16 slot (even x8 electrically). Top slot usually PCIe 4.0/5.0 x16 (full bandwidth). Lower slots may be x8 or shared lanes. Install in top slot for best performance. Some boards have multiple full x16 slots."
  },
  {
    id: 7,
    front: "What is GPU sag and how do you prevent it?",
    back: "Heavy graphics card bending/sagging over time. Caused by weight of large coolers. Can damage PCIe slot. Prevention: GPU support bracket/brace, vertical GPU mount, anti-sag bracket. Common on high-end cards (3+ slot designs). Cosmetic and structural concern."
  },
  {
    id: 8,
    front: "What is a sound card and is it still necessary?",
    back: "Dedicated audio processing card (PCIe or USB). Modern motherboards have good integrated audio (Realtek ALC). Sound card benefits: better DAC, lower noise floor, surround processing, more connections. Needed for: audiophiles, music production, old systems. Most users: integrated audio sufficient."
  },
  {
    id: 9,
    front: "What is a network interface card (NIC)?",
    back: "Adds or upgrades network connectivity. Ethernet NIC: Gigabit (1 Gbps) or 2.5/10 GbE. Wi-Fi card: Adds wireless (often includes Bluetooth). Most motherboards have integrated Gigabit. Add-in for: faster speeds, additional ports, better Wi-Fi, server use. PCIe interface."
  },
  {
    id: 10,
    front: "When would you need to add a NIC?",
    back: "Onboard NIC failed. Need faster speeds (2.5/10 GbE). Multiple network connections (server, virtualization). Better Wi-Fi (Wi-Fi 6/6E upgrade). Add Wi-Fi to desktop. Link aggregation/teaming. Specialty network (fiber). Most consumer systems: integrated NIC adequate."
  },
  {
    id: 11,
    front: "What is a storage controller card?",
    back: "Adds additional storage ports or features. SATA controller: More SATA ports beyond motherboard. SAS controller: Enterprise drives (RAID). NVMe controller: More M.2 slots. RAID controller: Hardware RAID functionality. Useful when: motherboard ports exhausted, need RAID, legacy IDE support."
  },
  {
    id: 12,
    front: "What is a hardware RAID controller?",
    back: "Dedicated processor for RAID operations. Offloads RAID from CPU. Battery-backed cache (BBU) for data protection. Faster than software RAID. Expensive. Used in servers. Consumer: Software RAID sufficient. Supports: RAID 0, 1, 5, 6, 10. Cache improves write performance."
  },
  {
    id: 13,
    front: "What is a capture card and what is it used for?",
    back: "Records video/audio from external sources. Internal (PCIe) or external (USB/Thunderbolt). Uses: game streaming, recording console gameplay, video production, legacy video capture. HDMI passthrough for gaming. Examples: Elgato, AVerMedia. Software encoding vs hardware encoding."
  },
  {
    id: 14,
    front: "What is a TV tuner card?",
    back: "Receives over-the-air TV broadcasts. Internal (PCIe) or external (USB). Analog (NTSC/PAL - obsolete) or digital (ATSC/DVB). Requires antenna. Can record TV shows. Mostly obsolete due to streaming. Some PCs used as DVRs. Rare in modern builds."
  },
  {
    id: 15,
    front: "What is a USB expansion card?",
    back: "Adds more USB ports. PCIe card with 4-7 USB ports (rear and/or internal headers). Upgrade to faster USB (3.1/3.2). Add USB-C ports. Useful when: all ports used, need faster USB, USB-C unavailable on motherboard. Powered by PCIe slot or SATA power."
  },
  {
    id: 16,
    front: "What is a Thunderbolt expansion card?",
    back: "Adds Thunderbolt 3/4 connectivity (USB-C connector). 40 Gbps bandwidth. Requires motherboard header (Thunderbolt header). Expensive. Used for: high-speed external storage, eGPU enclosures, professional I/O. Not all motherboards support add-in Thunderbolt. Intel standard."
  },
  {
    id: 17,
    front: "What is a riser card and when is it used?",
    back: "Allows expansion cards to mount parallel to motherboard instead of perpendicular. Types: PCIe riser (x16), low-profile riser. Used in: small form factor cases, vertical GPU mounting, horizontal rackmount servers. Can introduce latency if poor quality. PCIe 3.0 vs 4.0 risers matter."
  },
  {
    id: 18,
    front: "What is the difference between full-height and low-profile expansion cards?",
    back: "Full-height: Standard size, 120mm tall, fits ATX cases. Low-profile: Half-height, 79mm tall, fits slim/SFF cases. Many cards include both brackets. Swap bracket if needed. Performance identical, just physical size difference. Check case compatibility before buying."
  },
  {
    id: 19,
    front: "What is the general procedure for installing an expansion card?",
    back: "Power off and unplug PC. Ground yourself. Remove slot cover (save screw). Align card with slot. Press firmly until seated. Secure with screw. Connect power if needed. Connect cables/antennas. Boot and install drivers. Verify in Device Manager."
  },
  {
    id: 20,
    front: "Why must you install drivers for expansion cards?",
    back: "Drivers allow OS to communicate with hardware. Windows may install basic driver (generic). Manufacturer driver: full features, better performance, bug fixes. Get from: manufacturer website, included CD (outdated, don't use). Graphics drivers especially important. Update regularly for security and features."
  },
  {
    id: 21,
    front: "What is an eGPU (external GPU)?",
    back: "External graphics card enclosure connected via Thunderbolt 3/4. Adds GPU to laptop. Requires Thunderbolt 3/4 port (40 Gbps). Benefits: upgradeable graphics, use on desk only. Drawbacks: expensive, bandwidth limited vs internal, not all laptops supported. Popular for ultrabooks/MacBooks."
  },
  {
    id: 22,
    front: "What is GPU boost clock and how does it work?",
    back: "Automatic overclocking when thermal/power headroom exists. Base clock: Minimum guaranteed. Boost clock: Advertised maximum. Actual boost varies by cooling/power. Modern GPUs: dynamic boosting. Better cooling = higher sustained boost. NVIDIA GPU Boost, AMD Precision Boost Overdrive."
  },
  {
    id: 23,
    front: "What is ray tracing and which cards support it?",
    back: "Realistic lighting technique simulating light physics. Performance intensive. Hardware support: NVIDIA RTX (RT cores), AMD RDNA 2+ (ray accelerators), Intel Arc. Requires: compatible game, significant GPU power. Reduces FPS without DLSS/FSR. Future of graphics rendering."
  },
  {
    id: 24,
    front: "What is DLSS/FSR?",
    back: "AI upscaling technologies. DLSS (Deep Learning Super Sampling): NVIDIA RTX only, AI upscaling, best quality. FSR (FidelityFX Super Resolution): AMD, works on any GPU, less sophisticated. XeSS: Intel. Renders at lower resolution, upscales via AI. Improves FPS while maintaining quality."
  },
  {
    id: 25,
    front: "How much PSU wattage do different GPUs need?",
    back: "Entry-level (GTX 1650): 75W, no power connector, 350W PSU. Mid-range (RTX 4060): 115W, one 8-pin, 550W PSU. High-end (RTX 4070 Ti): 285W, one 12VHPWR, 700W PSU. Enthusiast (RTX 4090): 450W, one 12VHPWR, 850W+ PSU. Check manufacturer specs, add headroom."
  },
  {
    id: 26,
    front: "What are GPU form factors (slot width)?",
    back: "Single-slot: Very rare, thin cards. Dual-slot: Standard, most common. 2.5-slot: Thick coolers. Triple-slot (3-slot): Large high-end cards. 3.5-4 slot: Extreme cooling. Check case clearance. Blocks adjacent PCIe slots. Affects case airflow and other cards."
  },
  {
    id: 27,
    front: "What is a Wi-Fi/Bluetooth combo card?",
    back: "PCIe card adding both Wi-Fi and Bluetooth. M.2 E-key slot (2230 size) common. Includes antennas (external, screw into rear bracket). Wi-Fi 6/6E support. Upgrade from: no wireless, old Wi-Fi standard. Alternative: USB adapters (easier but potentially slower)."
  },
  {
    id: 28,
    front: "What is GPU memory bandwidth and why does it matter?",
    back: "Speed data moves between GPU and VRAM. Measured in GB/s. Higher = better performance, especially at high resolution. Affected by: memory type (GDDR6 vs GDDR6X), bus width (128-bit to 384-bit). Example: RTX 4090 = 1008 GB/s. More important than clock speed alone."
  },
  {
    id: 29,
    front: "What expansion card issues might you troubleshoot?",
    back: "Card not detected: Reseat, check power, try different slot, update BIOS. Driver issues: Install/update drivers, uninstall old drivers (DDU for GPU). Artifacts/crashes: Overheating, failing card, driver issue, insufficient power. No display: Cable connection, monitor input, onboard graphics priority."
  },
  {
    id: 30,
    front: "What is GPU memory error correction (ECC)?",
    back: "Error correction in GPU memory. Consumer GPUs: No ECC. Professional GPUs: ECC VRAM (Quadro, Radeon Pro). Detects and corrects memory errors. Important for: scientific computing, professional applications, reliability. Slight performance penalty. Consumer gaming doesn't need ECC."
  }
];