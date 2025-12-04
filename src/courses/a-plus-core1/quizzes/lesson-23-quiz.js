export const lesson23Quiz = [
  {
    id: 1,
    question: "A user wants to add a dedicated graphics card to their computer for gaming. Their motherboard has one PCIe x16 slot and several PCIe x1 slots. Which slot should the graphics card be installed in?",
    options: [
      "Any PCIe x1 slot works fine",
      "The PCIe x16 slot - graphics cards require the full x16 bandwidth for optimal performance",
      "Graphics cards don't use PCIe slots",
      "Only the bottom slot works"
    ],
    correct: 1,
    explanation: "Graphics cards require PCIe x16 slots for maximum bandwidth. PCIe slot types: (1) x16 - 16 lanes, highest bandwidth, for graphics cards, (2) x8 - 8 lanes, for high-speed devices, (3) x4 - 4 lanes, for NVMe adapters, RAID cards, (4) x1 - 1 lane, for sound cards, network cards, USB expansion. Physical compatibility: smaller cards fit in larger slots (x1 card in x16 slot OK), but larger cards don't fit smaller slots (x16 card won't fit x1 slot). Multi-GPU systems: first slot typically runs at x16, second may run at x8 (lane sharing). Installation: (1) Use topmost x16 slot (usually connected directly to CPU), (2) Verify card fits case (length clearance), (3) Ensure PSU has required PCIe power connectors (6-pin, 8-pin, or both). Modern GPUs need full x16 bandwidth for 4K gaming and demanding applications."
  },
  {
    id: 2,
    question: "A high-end graphics card requires two 8-pin PCIe power connectors. The power supply only has one 8-pin PCIe cable. What should be done?",
    options: [
      "Use adapters to convert SATA power to PCIe (dangerous - fire risk)",
      "Upgrade to a power supply with sufficient PCIe power connectors, or verify if PSU has additional PCIe cables if modular",
      "Leave one connector unplugged - it will work fine",
      "Use the CPU power connector instead"
    ],
    correct: 1,
    explanation: "GPU power requirements: (1) Slot provides 75W max via PCIe x16, (2) 6-pin PCIe provides 75W, (3) 8-pin PCIe provides 150W. Example: GPU requiring 2×8-pin needs 75W (slot) + 150W + 150W = 375W total. Solutions if insufficient connectors: (1) Check if PSU is modular - additional PCIe cables may be available, (2) Upgrade PSU to higher wattage with adequate PCIe connectors (recommended), (3) Verify using correct cables (PCIe cables, not CPU/EPS cables - different pinouts). NEVER: (1) Use SATA/Molex to PCIe adapters (fire hazard, insufficient current capacity), (2) Leave connectors unplugged (system won't POST or will crash under load), (3) Use CPU power cables (damage components). High-end GPUs (RTX 4080/4090, RX 7900 XTX) require 850W+ PSU with multiple dedicated PCIe cables. Always meet power requirements - underpowering causes instability and potential damage."
  },
  {
    id: 3,
    question: "A computer has integrated graphics (Intel UHD) and a user installs a dedicated GPU. Which graphics output should be connected to the monitor?",
    options: [
      "Either works equally - they run simultaneously",
      "Connect to the dedicated GPU ports on the expansion card - integrated graphics typically disables automatically or should be disabled in BIOS",
      "Always use motherboard video ports",
      "Graphics cards don't have video outputs"
    ],
    correct: 1,
    explanation: "Integrated vs dedicated graphics: (1) Integrated (iGPU) - built into CPU, outputs on motherboard rear I/O, lower performance, (2) Dedicated (dGPU) - expansion card, own outputs on card bracket, high performance. When both present: (1) Connect monitor to GPU card (HDMI, DisplayPort, DVI), (2) BIOS typically auto-disables iGPU when dGPU detected, (3) Some systems require manual BIOS setting: 'Primary Display' or 'Graphics Device' → PCIe/PEG, (4) Connecting to motherboard ports may show no signal or run on slow integrated graphics. BIOS options: (1) Auto/PCIe - preferred (uses dGPU), (2) iGPU/IGD - forces integrated (for troubleshooting), (3) iGPU Multi-Monitor - enables both (advanced use). Troubleshooting: No display after GPU install → try motherboard port temporarily, enter BIOS, switch primary display to PCIe. Some productivity setups intentionally use both (extra displays)."
  },
  {
    id: 4,
    question: "A sound card is being installed in a PCIe x1 slot. After installation, the system boots but there's no sound from the sound card. What should be checked first?",
    options: [
      "The motherboard is defective",
      "Check Device Manager for driver installation/errors, install manufacturer drivers, and set the new sound card as default audio device in Windows Sound settings",
      "Sound cards never work in Windows",
      "The card is installed backwards"
    ],
    correct: 1,
    explanation: "Sound card installation: (1) Physical install - insert in PCIe x1 or PCIe x16 slot, secure bracket screw, (2) Power on - Windows may install basic drivers automatically, (3) Install manufacturer drivers - download from vendor website (better quality, features), (4) Set as default device - Windows Sound settings → Playback → right-click new device → Set as Default. Troubleshooting no sound: (1) Device Manager - verify card detected, no yellow exclamation (driver issue), (2) Update drivers - manufacturer drivers over Windows generic, (3) Check default device - may still be set to onboard audio or HDMI, (4) Test speakers/headphones - verify connected to correct ports, (5) Volume levels - Windows mixer, application volume. Modern motherboards have good integrated audio (Realtek ALC series) - dedicated sound cards beneficial for: audiophiles, studio recording, surround sound processing, low-latency gaming. Most users don't need separate sound cards."
  },
  {
    id: 5,
    question: "What is the difference between a wired network card (NIC) and a wireless network card?",
    options: [
      "They are identical and interchangeable",
      "Wired NIC uses Ethernet (RJ-45) for cabled connections; wireless NIC uses Wi-Fi antennas for wireless connections - serve different connectivity needs",
      "Wireless is always faster",
      "Wired NICs only work on Tuesdays"
    ],
    correct: 1,
    explanation: "Network expansion cards: Wired NIC (Network Interface Card): (1) RJ-45 Ethernet port, (2) Speeds: 1 Gbps (Gigabit), 2.5 Gbps, 5 Gbps, 10 Gbps, (3) Stable, low latency, maximum speed, (4) Use: desktops without integrated Ethernet, upgrading to faster speeds (10 GbE), link aggregation. Wireless NIC: (1) Wi-Fi antennas (usually external), (2) Standards: Wi-Fi 5 (802.11ac), Wi-Fi 6 (802.11ax), Wi-Fi 6E (6 GHz), (3) Flexibility, no cables, (4) Use: desktops without Wi-Fi, upgrading old Wi-Fi, (5) Bluetooth often included. Installation: (1) PCIe x1 slot typical, (2) Install drivers, (3) Attach antennas (wireless). Modern motherboards: most include Gigabit Ethernet, higher-end include Wi-Fi. Add-in cards useful for: older systems, speed upgrades (2.5G/10G wired, Wi-Fi 6E wireless), systems needing both wired and wireless simultaneously."
  },
  {
    id: 6,
    question: "A video capture card is installed to record gameplay. The card appears in Device Manager but capture software shows 'No signal detected'. What should be verified?",
    options: [
      "The capture card is defective immediately",
      "Verify HDMI/video source is connected to the capture card's INPUT, output is connected to monitor, and source device is powered on and outputting signal",
      "Capture cards don't need any connections",
      "Reinstall Windows"
    ],
    correct: 1,
    explanation: "Capture card setup: (1) Physical connections - source device (console, camera, PC) → HDMI IN on capture card → HDMI OUT to monitor (passthrough), (2) USB/PCIe - card connects to PC (some external USB, some internal PCIe), (3) Software - install capture software (OBS Studio, manufacturer software), select card as video source. Common issues: (1) Wrong port - input vs output reversed (HDMI IN for source, OUT for monitor), (2) No signal from source - source device off, wrong output resolution, HDCP protection (capture cards can't record HDCP-protected content), (3) Driver not installed, (4) Software not detecting card. HDCP (High-bandwidth Digital Content Protection): commercial content (Netflix, Blu-ray) cannot be captured due to copy protection. Capture cards for: game streaming, video production, multi-PC streaming setups. Internal PCIe capture cards offer lower latency than USB. Modern GPUs include encoding (NVENC, AME) reducing capture card need for single-PC streaming."
  },
  {
    id: 7,
    question: "A motherboard has six SATA ports but a user needs to connect eight hard drives. What expansion card can add more SATA ports?",
    options: [
      "Graphics card",
      "SATA controller card or SAS HBA (Host Bus Adapter) - adds additional SATA/SAS ports via PCIe slot",
      "Sound card",
      "More SATA ports cannot be added"
    ],
    correct: 1,
    explanation: "Storage controller expansion cards: (1) SATA controller (HBA - Host Bus Adapter) - adds 4-8+ SATA ports via PCIe (x1, x4, x8), individual port mode (JBOD), (2) RAID controller - adds SATA/SAS ports with hardware RAID support, battery-backed cache, (3) SAS HBA - enterprise grade, backward compatible with SATA, supports both SAS and SATA drives. Use cases: (1) NAS/storage servers (many drives), (2) Video editing workstations (multiple storage drives), (3) Exceeding motherboard SATA ports. Installation: (1) Insert card in PCIe slot (x4 or x8 recommended for multi-drive), (2) Connect drives with SATA cables, (3) Install drivers, (4) Configure in BIOS/UEFI, (5) Initialize drives in OS. Considerations: (1) PCIe bandwidth - x4 provides ~4 GB/s, sufficient for multiple SATA drives, (2) Power - ensure PSU has enough SATA power connectors, (3) Cable management - many cables needed. Alternative: USB enclosures for external drives, NAS for network storage."
  },
  {
    id: 8,
    question: "What is VRAM on a graphics card, and why does it matter?",
    options: [
      "VRAM is the card's warranty period",
      "Video RAM (VRAM) is dedicated memory on the GPU for storing textures, frame buffers, and graphics data - more VRAM allows higher resolutions and textures",
      "VRAM is the cooling system",
      "VRAM determines monitor size"
    ],
    correct: 1,
    explanation: "VRAM (Video RAM) is dedicated memory on graphics cards: (1) Purpose - stores textures, geometry, frame buffers, shaders, (2) Types - GDDR6, GDDR6X (modern), HBM2 (high-end), (3) Separate from system RAM - doesn't share with CPU. VRAM requirements: (1) 1080p gaming - 4-6 GB minimum, 8 GB recommended, (2) 1440p gaming - 8-10 GB, (3) 4K gaming - 10-12 GB+, (4) Professional work (3D rendering, video editing) - 16-24 GB+. Insufficient VRAM symptoms: (1) Stuttering in games, (2) Texture pop-in, (3) Reduced quality settings forced, (4) FPS drops, (5) Error messages. VRAM vs system RAM: VRAM is much faster (bandwidth 300-1000 GB/s vs system RAM 50-100 GB/s) and purpose-built for graphics. Cannot add VRAM - fixed at purchase. Modern games with high-res textures need substantial VRAM. Future-proofing: buy more VRAM than minimum required."
  },
  {
    id: 9,
    question: "A motherboard has three PCIe x16 slots. The manual states the first slot runs at x16, but when two GPUs are installed, both run at x8. Why?",
    options: [
      "The motherboard is defective",
      "Limited PCIe lanes from CPU - the 16 lanes are split between two slots when both are populated (8+8 configuration)",
      "All PCIe slots always run at maximum speed",
      "Only the first slot ever works"
    ],
    correct: 1,
    explanation: "PCIe lane allocation: (1) Consumer CPUs provide limited PCIe lanes (16-20 direct lanes typically), (2) Single GPU - slot 1 gets all 16 lanes (x16), (3) Dual GPU - lanes split: 8+8 or 8+4+4 depending on configuration, (4) Motherboard chipset provides additional lanes for other devices (x1 slots, M.2, SATA). Example configurations: (1) One x16 GPU - slot 1: x16, (2) Two GPUs - slot 1: x8, slot 2: x8, (3) GPU + M.2 NVMe - x16 GPU may drop to x8, M.2 gets x4. Performance impact: (1) x16 vs x8 - minimal impact (<5%) for most GPUs with PCIe 3.0+, (2) x8 PCIe 4.0 = x16 PCIe 3.0 bandwidth, (3) High-end GPUs may benefit from x16. Physical vs electrical: (1) Slot physically x16 (size), (2) Electrically x8/x4 (active lanes). Check motherboard manual for lane configuration. HEDT platforms (Threadripper, Core X) provide more lanes for multi-GPU without compromise."
  },
  {
    id: 10,
    question: "A TV tuner card is installed but shows no channels when scanning. What should be checked?",
    options: [
      "The card is always defective if no channels appear",
      "Verify coaxial antenna/cable is connected to the tuner card's input, signal source is active, and correct region/broadcast standard is selected in software",
      "TV tuner cards don't need any antenna",
      "The monitor resolution is wrong"
    ],
    correct: 1,
    explanation: "TV tuner card setup: (1) Physical - install card (PCIe or USB), connect coaxial cable from antenna/cable service to card's F-connector input, (2) Drivers - install manufacturer software and drivers, (3) Configuration - set region (US, EU, etc.), broadcast standard (ATSC, DVB-T, DVB-C, etc.), scan for channels. Troubleshooting no channels: (1) Verify signal source - antenna receiving signal, cable service active, (2) Check connections - coaxial cable properly threaded, (3) Correct broadcast standard - ATSC (North America), DVB-T (Europe terrestrial), DVB-S (satellite), (4) Antenna quality/placement - weak signal, needs amplifier or repositioning, (5) Scan settings - correct region, auto vs manual scan. TV tuner card types: (1) Over-the-air (OTA) ATSC/DVB-T, (2) Cable (Clear QAM, DVB-C), (3) Satellite (DVB-S). Modern decline: streaming services replaced most TV tuner use. Applications: DVR, live TV on PC, cord-cutting with antenna."
  },
  {
    id: 11,
    question: "What is the purpose of a riser card in a PC?",
    options: [
      "To increase CPU speed",
      "To allow expansion cards to be mounted parallel to the motherboard instead of perpendicular, saving space in compact cases",
      "To cool the system better",
      "Riser cards serve no purpose"
    ],
    correct: 1,
    explanation: "Riser cards change expansion card orientation: (1) Standard - expansion cards insert perpendicular to motherboard (vertical in tower cases), (2) With riser - cards mount parallel to motherboard (horizontal), saves height in slim/small form factor cases. Types: (1) PCIe riser - single card (GPU in SFF case), (2) Multi-slot riser - multiple expansion slots, (3) Vertical GPU mount - popular in enthusiast builds (shows GPU through tempered glass). Applications: (1) Small form factor PCs - limited height for standard vertical cards, (2) Rack-mount servers - 1U/2U height restrictions, (3) Aesthetic vertical GPU mounting, (4) Industrial/embedded PCs. Considerations: (1) Riser quality matters - poor quality causes instability, (2) PCIe version - ensure riser supports PCIe 3.0/4.0 if needed, (3) Cable length - longer cables can reduce signal quality (shielded cables better), (4) Additional cost. Most consumer desktops don't need risers - primarily for specialized form factors."
  },
  {
    id: 12,
    question: "A PCIe sound card is installed but Windows is still using onboard audio. How can the sound card be set as the default audio device?",
    options: [
      "Windows cannot change audio devices",
      "Right-click speaker icon in taskbar → Sounds → Playback tab → select sound card → Set Default (or use Windows Settings → Sound)",
      "Reinstall motherboard",
      "Sound cards never work with Windows"
    ],
    correct: 1,
    explanation: "Setting default audio device: Method 1 (Classic): (1) Right-click speaker icon (taskbar), (2) Select 'Sounds' or 'Open Sound settings', (3) Playback tab, (4) Right-click desired device (sound card), (5) 'Set as Default Device'. Method 2 (Settings app): (1) Windows Settings → System → Sound, (2) Choose output device dropdown → select sound card. Multiple audio devices: (1) Default device - system sounds, most applications, (2) Default communication device - voice chat, VoIP (can be different device), (3) Per-application - advanced audio settings allow app-specific routing. Disabling onboard audio: (1) BIOS/UEFI - disable integrated audio (forces all output to sound card), (2) Device Manager - disable onboard audio device. Applications: (1) Sound card for speakers/headphones (quality), (2) Onboard/HDMI for monitor speakers. Audio not working: verify drivers installed, device enabled, volume not muted, correct jack (color-coded: green-output, pink-mic, blue-line in)."
  },
  {
    id: 13,
    question: "A graphics card has one HDMI port, three DisplayPort outputs, and one DVI port. The user has two HDMI monitors. What is the best solution?",
    options: [
      "Buy two new monitors with DisplayPort",
      "Use the HDMI port for one monitor and a DisplayPort-to-HDMI adapter/cable for the second monitor",
      "Monitors cannot be connected to graphics cards",
      "DVI is the only option that works"
    ],
    correct: 1,
    explanation: "GPU output ports and adapters: Modern GPUs typically have: (1) HDMI 2.1 - 1-2 ports, most common, audio support, 4K 120Hz+, (2) DisplayPort 1.4/2.0 - 2-3 ports, highest bandwidth, 8K support, daisy-chaining, (3) DVI - legacy, digital/analog, being phased out, no audio, (4) USB-C (some cards) - DisplayPort Alt Mode, power delivery. Adapter solutions: (1) DisplayPort to HDMI - passive adapter works (DP can output HDMI signal), cheap ($10-20), (2) HDMI to DisplayPort - requires active adapter (expensive, signal conversion), (3) DVI to HDMI - passive adapter (digital signals compatible), no audio. Best practices: (1) Use native ports when possible (no adapter), (2) DisplayPort preferred for high refresh rate gaming monitors, (3) HDMI for TVs, general use. Multi-monitor: Modern GPUs support 3-4 displays simultaneously. Priority: DisplayPort for gaming monitors (higher refresh rates, adaptive sync), HDMI for secondary displays."
  },
  {
    id: 14,
    question: "What is the purpose of SLI (NVIDIA) or CrossFire (AMD) with multiple graphics cards?",
    options: [
      "To run monitors on separate cards only",
      "To link multiple GPUs together for increased graphics performance in games and applications (though largely deprecated in favor of single powerful GPUs)",
      "SLI and CrossFire cool the system",
      "They provide backup in case one card fails"
    ],
    correct: 1,
    explanation: "Multi-GPU technologies: SLI (Scalable Link Interface - NVIDIA): (1) Links 2-4 identical GPUs, (2) SLI bridge connects cards, (3) Distributes rendering workload. CrossFire (AMD): (1) Links 2-4 AMD GPUs, (2) No bridge needed (modern), uses PCIe lanes. Performance: (1) Not 2× performance with 2 GPUs (scaling 50-90% typical), (2) Game support required (not all games benefit), (3) Driver profiles needed, (4) Micro-stuttering issues possible. Current status (2024-2025): (1) Largely deprecated - NVIDIA stopped SLI support for gaming (RTX 30/40 series), (2) Single powerful GPU preferred (RTX 4090, RX 7900 XTX), (3) Better value, fewer issues. Still relevant: (1) Professional workloads (rendering, simulations), (2) Machine learning (NVIDIA NVLink on professional cards), (3) Legacy systems. Modern gaming: invest in single best GPU rather than multiple mid-range cards. Diminishing returns and compatibility issues make multi-GPU unappealing for most users."
  },
  {
    id: 15,
    question: "A USB 3.0 expansion card is installed in a PCIe x1 slot. The front panel USB 3.0 ports need to be connected. What cable/connector is required?",
    options: [
      "Standard USB Type-A cable",
      "Internal USB 3.0 header cable (19-pin connector) from case to the expansion card's internal USB 3.0 header",
      "SATA cable",
      "No cable needed - it's wireless"
    ],
    correct: 1,
    explanation: "USB expansion card connections: External (rear bracket): (1) USB Type-A ports - directly on card bracket, (2) USB Type-C - some cards include, (3) Plug devices directly here. Internal (for case front panel): (1) USB 3.0 header - 19/20-pin connector (blue), connects case front USB 3.0 cable, (2) USB 2.0 header - 9-pin connector, connects case front USB 2.0 cable, (3) Internal USB-C header - newer cases/cards. Setup: (1) Install expansion card in PCIe slot, (2) Locate internal header on card, (3) Connect case's front panel USB cable to header, (4) Install drivers, (5) Test front and rear ports. USB 3.0 speeds: 5 Gbps (USB 3.0/3.1 Gen 1), 10 Gbps (USB 3.1 Gen 2), 20 Gbps (USB 3.2). Why add USB card: (1) Motherboard lacks USB 3.0 headers, (2) Need more USB ports, (3) Add USB-C, (4) Add faster USB standards. Ensure: (1) Card has headers matching case cables, (2) Sufficient PCIe slots available, (3) Drivers compatible with OS."
  }
];