export const lesson18Flashcards = [
  {
    id: 1,
    front: "What is a motherboard chipset and what does it do?",
    back: "Main circuit controlling communication between CPU, RAM, storage, and peripherals. Modern chipsets single chip. Determines: supported CPUs, RAM type/speed, storage interfaces, USB/PCIe lanes, overclocking capability. Intel (Z790, B760), AMD (X670, B650)."
  },
  {
    id: 2,
    front: "What were Northbridge and Southbridge?",
    back: "Legacy two-chip design. Northbridge: Fast components (CPU, RAM, GPU) via front-side bus. Southbridge: Slower peripherals (SATA, USB, audio, PCIe). Modern CPUs integrate Northbridge functions - only single chipset chip remains. AMD eliminated terms first."
  },
  {
    id: 3,
    front: "What is an LGA socket?",
    back: "Land Grid Array. Pins on motherboard, flat contacts on CPU. Intel standard (LGA1700, LGA1200, LGA1151). Opposite of PGA. Less chance of bent CPU pins (but can bend socket pins). Requires mounting bracket."
  },
  {
    id: 4,
    front: "What are current Intel CPU socket types?",
    back: "LGA1700: 12th/13th/14th gen (current mainstream). LGA1200: 10th/11th gen. LGA1151: 6th-9th gen (older). LGA2066: X-series HEDT (discontinued). Must match motherboard socket. Not backward compatible between generations."
  },
  {
    id: 5,
    front: "What is a PGA socket?",
    back: "Pin Grid Array. Pins on CPU, holes in motherboard socket. AMD standard (AM4, older Intel). Easier CPU installation but pins easily bent. AM4 used PGA, AM5 switched to LGA."
  },
  {
    id: 6,
    front: "What are current AMD CPU socket types?",
    back: "AM5: Ryzen 7000/8000/9000 series (current, LGA). AM4: Ryzen 1000-5000 series (previous, PGA, long-lived). TR4/sTRX4/sWRX8: Threadripper HEDT (workstation). Must match socket. AM4 had great longevity (2016-2022)."
  },
  {
    id: 7,
    front: "What is DIMM and what is it used for?",
    back: "Dual In-line Memory Module. Desktop RAM. 288-pin for DDR4/DDR5. 240-pin for DDR3. 184-pin for DDR2. Larger than SO-DIMM. Typically 4 slots on ATX boards (2 channels, 2 DIMMs per channel)."
  },
  {
    id: 8,
    front: "What is SO-DIMM?",
    back: "Small Outline DIMM. Laptop RAM, about half size of DIMM. 260-pin for DDR4. 262-pin for DDR5. Some Mini-ITX boards use SO-DIMM for space savings. Same technology as DIMM, just smaller form factor."
  },
  {
    id: 9,
    front: "What is single-channel vs dual-channel vs quad-channel RAM?",
    back: "Single: One memory channel, half bandwidth. Dual: Two channels, double bandwidth (most common), requires 2 or 4 matched DIMMs. Quad: Four channels, quadruple bandwidth (HEDT platforms). More channels = better performance. Install in matching pairs."
  },
  {
    id: 10,
    front: "What color coding on RAM slots indicates?",
    back: "Matching colors = same channel. Install RAM in matching colored slots for dual-channel. Example: 4 slots (2 black, 2 gray) - install in both black or both gray first. Consult manual - color schemes vary by manufacturer."
  },
  {
    id: 11,
    front: "What is PCIe and what are the slot sizes?",
    back: "Peripheral Component Interconnect Express. High-speed expansion bus. Physical sizes: x1 (shortest), x4, x8, x16 (longest - GPUs). Electrical lanes don't always match physical size. Backward compatible (x16 card works in x16 slot only)."
  },
  {
    id: 12,
    front: "What PCIe generations exist and their speeds?",
    back: "PCIe 3.0: 985 MB/s per lane (7.88 GB/s x16). PCIe 4.0: 1.97 GB/s per lane (15.75 GB/s x16). PCIe 5.0: 3.94 GB/s per lane (31.5 GB/s x16). Each generation doubles bandwidth. Backward compatible. GPUs/SSDs benefit from newer generations."
  },
  {
    id: 13,
    front: "What is SATA and what is its speed?",
    back: "Serial ATA. Storage interface for HDDs and SSDs. SATA 3.0 (current): 6 Gbps (600 MB/s theoretical, ~550 MB/s real). 7-pin data connector, 15-pin power. Hot-swappable. L-shaped connectors. Multiple ports on motherboard (4-8 typical)."
  },
  {
    id: 14,
    front: "What is M.2 and what types exist?",
    back: "Compact expansion card slot. M.2 SATA: Uses SATA interface (600 MB/s). M.2 NVMe: Uses PCIe interface (up to 7000+ MB/s with Gen 4). Keying: B, M, or B+M determines compatibility. Lengths: 2280, 2260, 2242 (mm)."
  },
  {
    id: 15,
    front: "How do you identify M.2 SATA vs M.2 NVMe?",
    back: "Key notches: M.2 SATA (B+M key - 2 notches), M.2 NVMe (M key - 1 notch). Performance: SATA max 600 MB/s, NVMe 2000-7000+ MB/s. Check motherboard manual - some slots SATA-only, some NVMe-only, some support both."
  },
  {
    id: 16,
    front: "What is U.2?",
    back: "2.5-inch NVMe SSD connector. Uses PCIe interface like M.2 NVMe but larger form factor. 4-lane PCIe connection. Common in enterprise/data centers. Rare on consumer motherboards. Hot-swappable. SFF-8639 connector."
  },
  {
    id: 17,
    front: "What USB ports are commonly on motherboards?",
    back: "USB 2.0: 480 Mbps, black ports, legacy. USB 3.0/3.1 Gen 1: 5 Gbps, blue ports. USB 3.1 Gen 2: 10 Gbps, teal/red. USB 3.2 Gen 2x2: 20 Gbps. USB Type-C: Reversible, can be any speed. Back I/O panel has mix of types."
  },
  {
    id: 18,
    front: "What audio connectors are on motherboards?",
    back: "3.5mm jacks color-coded. Green: Line out (speakers/headphones). Pink: Microphone. Blue: Line in. Orange: Subwoofer/center. Black: Rear speakers. Gray: Side speakers. Optical S/PDIF: Digital audio (some boards). 5.1/7.1 surround support."
  },
  {
    id: 19,
    front: "What is the Ethernet port on a motherboard?",
    back: "RJ-45 port. Gigabit Ethernet (1000 Mbps) standard. Some boards: 2.5 GbE or 10 GbE. Activity LEDs: green (link), orange/amber (activity). Built into motherboard via network chip. Alternative: add PCIe NIC for faster/additional ports."
  },
  {
    id: 20,
    front: "What video outputs can motherboards have?",
    back: "HDMI: Most common, audio+video. DisplayPort: High bandwidth. DVI: Digital, older. VGA: Analog, legacy (blue). Only work with integrated graphics (Intel iGPU, AMD APU). Disabled when discrete GPU installed. Not all motherboards have video outputs."
  },
  {
    id: 21,
    front: "What is the front panel header on a motherboard?",
    back: "9-pin header for case connections. Pins for: power button, reset button, power LED (+/-), HDD LED (+/-). Tiny connectors, specific orientation. Refer to manual for pin-out. Easy to mix up. Some boards have unified connector."
  },
  {
    id: 22,
    front: "What are fan headers on a motherboard?",
    back: "CPU_FAN: CPU cooler (required, won't boot without). SYS_FAN/CHA_FAN: Case fans (multiple). AIO_PUMP: AIO cooler pump. 3-pin or 4-pin (PWM). Usually 1A per header. BIOS/software controls fan curves. Strategic placement around board."
  },
  {
    id: 23,
    front: "What are RGB headers on motherboards?",
    back: "12V RGB: 4-pin, non-addressable, all LEDs same color. 5V ARGB/Digital RGB: 3-pin, addressable, individual LED control, effects. Incompatible types - check before connecting. Software control (Aura Sync, Mystic Light, RGB Fusion). Powers LED strips/fans."
  },
  {
    id: 24,
    front: "What is BIOS and what does it do?",
    back: "Basic Input/Output System. Firmware on chip that initializes hardware on boot. Modern systems use UEFI (Unified Extensible Firmware Interface). Functions: POST, boot device selection, hardware configuration, overclocking. Access by pressing Del/F2/F12 during boot."
  },
  {
    id: 25,
    front: "What is the CMOS battery?",
    back: "CR2032 coin cell battery (3V). Powers real-time clock and stores BIOS settings when PC off. Lasts 3-5+ years. Dying battery symptoms: wrong time/date, BIOS settings reset, boot errors. Easy to replace - just pop out and insert new one."
  },
  {
    id: 26,
    front: "What happens when CMOS battery dies?",
    back: "System time resets on every boot. BIOS settings reset to defaults. Boot order resets. May get error messages ('CMOS checksum error'). Computer still works but annoying. Replace battery (CR2032). Reconfigure BIOS settings after replacement."
  },
  {
    id: 27,
    front: "What is a BIOS flash and when should you do it?",
    back: "Updating motherboard firmware. Reasons: support new CPUs, fix bugs, improve stability, new features, security patches. Risks: don't interrupt (brick motherboard). Methods: BIOS utility, USB flash, Windows utility. Check manufacturer website for updates."
  },
  {
    id: 28,
    front: "What is POST and what are POST codes?",
    back: "Power-On Self-Test. BIOS checks hardware on startup. POST codes: beep patterns or LED codes indicating errors. Example: 1 beep (normal), continuous beeps (RAM issue), no beep (CPU/motherboard issue). Consult manual for code meanings. Debug LEDs on modern boards."
  },
  {
    id: 29,
    front: "What voltage regulation components are on motherboards?",
    back: "VRM (Voltage Regulator Module). Converts 12V from PSU to CPU voltage (1-1.5V). Components: MOSFETs, capacitors, chokes. Quality matters for stability and overclocking. Heat sinks on VRMs. Phase count: more phases = cleaner power, better for high-end CPUs."
  },
  {
    id: 30,
    front: "What should you check for motherboard compatibility?",
    back: "CPU socket match. Chipset supports CPU. RAM type (DDR4/DDR5) and speed. Form factor fits case. Sufficient PCIe slots. M.2 slots (SATA vs NVMe support). SATA port count. USB header types. BIOS version for new CPUs. Power delivery for CPU TDP."
  }
];