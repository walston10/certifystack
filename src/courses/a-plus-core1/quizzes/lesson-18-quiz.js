export const lesson18Quiz = [
  {
    id: 1,
    question: "A technician is upgrading a desktop computer's motherboard. The existing motherboard is ATX form factor. What must the replacement motherboard have to be compatible with the case?",
    options: [
      "Same brand as the old motherboard",
      "ATX form factor with matching mounting hole pattern, or a smaller form factor (micro-ATX, Mini-ITX) that fits ATX cases",
      "Identical color scheme",
      "Same age as the case"
    ],
    correct: 1,
    explanation: "Motherboard form factors define physical dimensions and mounting hole locations. ATX cases support ATX (12\" x 9.6\"), micro-ATX (9.6\" x 9.6\"), and Mini-ITX (6.7\" x 6.7\") motherboards through multiple mounting hole patterns. The I/O shield (rear panel plate) must match the new motherboard - included with motherboard, not case. Also verify: (1) PSU has correct connectors (24-pin ATX, 4/8-pin CPU power), (2) Sufficient clearance for CPU cooler height, (3) GPU clearance if upgrading. You cannot install larger boards in smaller cases (E-ATX won't fit micro-ATX case). Form factor compatibility is essential for physical fit."
  },
  {
    id: 2,
    question: "A motherboard has both LGA1700 and AM5 labeled near the CPU socket area. Is this possible?",
    options: [
      "Yes - motherboards support multiple CPU types",
      "No - each motherboard has ONE specific CPU socket type (Intel LGA or AMD AM) and only supports CPUs for that socket",
      "Only on server motherboards",
      "All motherboards are universal"
    ],
    correct: 1,
    explanation: "Motherboards are designed for either Intel OR AMD, never both. CPU sockets are incompatible: Intel uses LGA (Land Grid Array - pins in socket) like LGA1700, LGA1200. AMD uses PGA/LGA (pins on CPU or socket) like AM5, AM4. The chipset, BIOS, power delivery, and socket are CPU-brand specific. When upgrading CPU: (1) Verify socket compatibility (LGA1700 CPU needs LGA1700 motherboard), (2) Check chipset compatibility (may need BIOS update for newer CPUs in same socket), (3) Verify BIOS supports specific CPU model. Socket determines physical fit; chipset/BIOS determines functionality. Never force incompatible CPUs - will damage pins/pads."
  },
  {
    id: 3,
    question: "What is the function of the chipset on a motherboard?",
    options: [
      "To make the motherboard look decorative",
      "To manage communication between the CPU, RAM, storage, and peripheral devices - acts as the motherboard's traffic controller",
      "To provide power to components",
      "To display video output"
    ],
    correct: 1,
    explanation: "The chipset (one or more chips) controls data flow between: CPU, RAM, storage devices, PCIe slots, USB ports, SATA ports, network controllers, and audio. Modern Intel/AMD use single-chip designs (Platform Controller Hub). Chipset determines: (1) Supported CPU models, (2) RAM type/speed/capacity, (3) Number of SATA/NVMe/USB ports, (4) PCIe lane distribution, (5) Overclocking capability. Examples: Intel Z790 (enthusiast/overclocking), B760 (mainstream), H610 (budget). AMD X670E (enthusiast), B650 (mainstream). Higher-end chipsets offer more features, more I/O, better overclocking. Chipset compatibility is critical when selecting motherboard - determines feature set and upgrade path."
  },
  {
    id: 4,
    question: "A motherboard has four RAM slots labeled A1, A2, B1, B2. For optimal dual-channel performance with two RAM modules, which slots should be populated?",
    options: [
      "A1 and A2 (slots next to each other)",
      "A2 and B2 (typically second and fourth slots - alternate slots for dual-channel)",
      "B1 and B2 only",
      "It doesn't matter - any two slots work the same"
    ],
    correct: 1,
    explanation: "For dual-channel mode (doubles memory bandwidth), install RAM in matching color slots or follow motherboard manual. Common configurations: populate A2 and B2 (slots 2 and 4) or A1 and B1 (slots 1 and 3). Installing in adjacent slots (A1-A2) may run single-channel with half bandwidth. Dual-channel requires: (1) Matching slots (same channel), (2) Ideally identical modules (capacity, speed, timings), (3) Both modules properly seated. Visual indicators: slots are often color-coded by channel. Check motherboard manual for specific population order. Four modules (A1, A2, B1, B2 all filled) also runs dual-channel. Improper installation reduces performance significantly - dual-channel can double memory throughput."
  },
  {
    id: 5,
    question: "A motherboard has the following expansion slots: one PCIe x16, two PCIe x1, and one legacy PCI slot. What is the PCIe x16 slot typically used for?",
    options: [
      "Sound cards only",
      "Graphics cards - the x16 slot provides maximum bandwidth for GPUs",
      "Network cards only",
      "RAM installation"
    ],
    correct: 1,
    explanation: "PCIe x16 slots provide highest bandwidth (16 lanes) for graphics cards requiring maximum data throughput. The 'x16' indicates 16 PCIe lanes. Slot sizes: x16 (longest, 89mm), x8, x4, x1 (shortest, 25mm). Common uses: x16 - dedicated GPUs; x1 - sound cards, network cards, USB expansion, capture cards. Physical x16 slots may electrically run at x8 or x4 (especially second x16 slot) - check specifications. PCIe versions matter: PCIe 3.0 x16 = ~16 GB/s, PCIe 4.0 x16 = ~32 GB/s, PCIe 5.0 x16 = ~64 GB/s. You can install smaller cards (x1) in larger slots (x16) but not vice versa. First PCIe x16 slot typically connects directly to CPU for best GPU performance."
  },
  {
    id: 6,
    question: "A motherboard has six SATA ports and two M.2 slots. What is the primary difference between these storage interfaces?",
    options: [
      "SATA and M.2 are identical",
      "SATA connects 2.5\"/3.5\" drives with cables; M.2 is a slot for small NVMe/SATA SSDs that mount directly on the motherboard with higher potential speeds",
      "M.2 is only for graphics cards",
      "SATA is wireless"
    ],
    correct: 1,
    explanation: "SATA (Serial ATA): (1) Cable-based connection for 2.5\" SSDs and 3.5\" HDDs, (2) SATA III maxes at 6 Gbps (~550 MB/s), (3) Uses L-shaped connectors (data + power). M.2: (1) Slot-based, drives mount directly to motherboard, (2) Supports SATA or NVMe protocols, (3) NVMe M.2 uses PCIe lanes (~3,500-7,000+ MB/s for PCIe 4.0/5.0), (4) Different key types (B, M, B+M) and lengths (2242, 2260, 2280, 22110). Important: Some M.2 slots share lanes with SATA ports - using M.2 may disable certain SATA ports (check manual). For OS/primary drive: NVMe M.2 offers best performance. For bulk storage: SATA drives are cost-effective."
  },
  {
    id: 7,
    question: "What is the CMOS battery on a motherboard, and what happens when it fails?",
    options: [
      "Powers the entire computer",
      "A coin-cell battery (typically CR2032) that maintains BIOS settings and system clock when PC is unplugged; failure causes BIOS reset and clock issues",
      "Powers the CPU",
      "Batteries aren't used in computers"
    ],
    correct: 1,
    explanation: "CMOS battery (usually CR2032 lithium coin cell) provides power to: (1) Real-time clock (RTC) - maintains date/time when unplugged, (2) BIOS/UEFI settings storage - boot order, hardware configuration, overclocking settings. Failure symptoms: (1) Date/time reset to default (often year 2000-2010), (2) BIOS settings reset to defaults each boot, (3) 'CMOS checksum error' or 'CMOS battery low' messages, (4) Boot failures or incorrect boot device. Battery life: 3-5 years typical. Replacement: power off, unplug, remove old battery, install new CR2032 (correct polarity +/-), reconfigure BIOS settings. Settings are lost when battery dies, so document important settings. Some motherboards have clear CMOS jumper/button for intentional reset."
  },
  {
    id: 8,
    question: "A motherboard has headers labeled USB 3.0, USB 2.0, and USB-C. What are these headers for?",
    options: [
      "Decorative purposes only",
      "Internal connectors for case front panel USB ports - cables from case USB ports connect to these motherboard headers",
      "Wireless antennas",
      "Power supply connections"
    ],
    correct: 1,
    explanation: "Internal USB headers connect case front panel USB ports to the motherboard. Types: (1) USB 2.0 header - 9-pin connector, usually multiple headers, (2) USB 3.0/3.1 header - 19/20-pin connector (blue), higher bandwidth, (3) USB-C header - newer, for front USB-C ports. The case must have front USB ports with matching cables. Installing front USB: (1) Identify header type on cable and motherboard, (2) Match pin 1 indicators (often triangle or missing pin), (3) Insert carefully - connectors are keyed but can be forced wrong. No connection: front ports won't work (rear motherboard ports still work). Modern cases increasingly include USB-C ports requiring compatible motherboard header. Check motherboard specifications for header types/quantity before buying case."
  },
  {
    id: 9,
    question: "A motherboard advertises 'support for DDR5-6000 RAM'. What does the '6000' represent?",
    options: [
      "The RAM capacity in GB",
      "The RAM speed in MT/s (megatransfers per second) - effectively the data rate",
      "The number of pins",
      "The warranty period"
    ],
    correct: 1,
    explanation: "DDR5-6000 indicates RAM speed: 6000 MT/s (megatransfers per second), the effective data rate. Higher numbers = faster RAM (better performance, especially in CPU-intensive tasks, gaming). RAM specifications: (1) Type - DDR4, DDR5 (DDR5 is newer, faster, but incompatible with DDR4 slots), (2) Speed - DDR4-3200, DDR5-6000, etc., (3) Capacity - 8GB, 16GB, 32GB per module. Motherboard/CPU determine maximum supported speed. Installing faster RAM than supported: runs at motherboard's max speed (downclocking). XMP/DOCP profiles enable advertised speeds (manual BIOS setting). For DDR5: speeds typically 4800-8000+ MT/s. For DDR4: speeds typically 2133-5000 MT/s. Match RAM speed to motherboard capabilities for best value."
  },
  {
    id: 10,
    question: "What is the purpose of the 4-pin or 8-pin power connector near the CPU socket?",
    options: [
      "To power case fans",
      "To provide dedicated power to the CPU - essential for system operation",
      "To power the hard drive",
      "Optional decoration"
    ],
    correct: 1,
    explanation: "The CPU power connector (labeled CPU_PWR, EATX12V, or similar) delivers dedicated power to the CPU's voltage regulators. Configurations: (1) 4-pin (older/low-power CPUs), (2) 8-pin (4+4 split, most common), (3) 8+4 or 8+8-pin (high-end CPUs, extreme overclocking). The system will NOT boot without CPU power connected - mandatory connection. PSU must have matching connectors (most modern PSUs include 4+4 pin CPU cable). Don't confuse with PCIe power cables (for GPU) - physically similar but electrically different. Location: typically top-left of motherboard near CPU socket. High-power CPUs (12th gen Intel, Ryzen 7000+) may require 8-pin or dual 4+4 configurations. Always connect all required CPU power cables."
  },
  {
    id: 11,
    question: "A motherboard has RGB headers labeled 12V RGB and 5V ARGB. What is the difference?",
    options: [
      "They're identical",
      "12V RGB controls all LEDs simultaneously (same color); 5V ARGB (addressable RGB) allows individual LED control for effects",
      "12V is faster",
      "5V is older technology"
    ],
    correct: 1,
    explanation: "RGB lighting types: (1) 12V RGB (4-pin header) - all LEDs display same color simultaneously, can change colors but no per-LED control, simpler effects, (2) 5V ARGB/Addressable RGB (3-pin header) - each LED individually controllable, complex effects (rainbow wave, chase, etc.), requires compatible controller/software. Headers are NOT interchangeable - wrong voltage damages LEDs. RGB components (fans, strips, coolers) must match header type. Control methods: (1) Motherboard software (Asus Aura Sync, MSI Mystic Light, etc.), (2) Standalone controllers, (3) Physical remotes. ARGB offers more flexibility and effects. Many modern motherboards include both header types. Verify header type before purchasing RGB components - compatibility is critical."
  },
  {
    id: 12,
    question: "What is the I/O shield, and why is it important during motherboard installation?",
    options: [
      "A protective cover for the CPU",
      "A metal plate that fits in the case rear opening, providing cutouts for motherboard rear ports and grounding - must be installed before the motherboard",
      "A type of RAM",
      "Optional cosmetic piece"
    ],
    correct: 1,
    explanation: "The I/O shield (I/O panel, rear panel plate) is a thin metal plate with cutouts matching the motherboard's rear ports (USB, audio, video, network, etc.). Installation: (1) Snap I/O shield into case rear opening from INSIDE the case BEFORE installing motherboard, (2) Ensure correct orientation - tabs/openings match motherboard ports, (3) Press firmly into place (usually clicks). Purposes: (1) Covers gap between motherboard and case, (2) Provides grounding for EMI shielding, (3) Improves aesthetics. Common mistakes: forgetting to install before motherboard (requires removing motherboard to fix), installing backwards/upside-down. The I/O shield comes with the motherboard, not the case. Missing I/O shield: case has large opening, poor EMI shielding, unprofessional appearance."
  },
  {
    id: 13,
    question: "A user wants to upgrade their CPU but keep the same motherboard. What must be verified before purchasing a new CPU?",
    options: [
      "Only the CPU brand",
      "Socket compatibility, chipset/BIOS support for the specific CPU model, and power delivery capability (VRM)",
      "Only the price",
      "CPUs are universal and work in any motherboard"
    ],
    correct: 1,
    explanation: "CPU upgrade checklist: (1) Socket compatibility - CPU must physically fit socket (LGA1700, AM5, etc.), (2) Chipset support - motherboard chipset must support the CPU model, (3) BIOS version - may need BIOS update BEFORE installing new CPU (check manufacturer website), (4) VRM capacity - power delivery must handle new CPU's TDP/power requirements, (5) Cooling compatibility - verify cooler handles new CPU's TDP. Example: LGA1700 socket supports 12th, 13th, and 14th gen Intel, BUT older motherboards need BIOS updates for newer generations. Some CPUs within same socket aren't supported (intentional chipset limitations). Always check motherboard's CPU compatibility list on manufacturer website. BIOS update procedure varies - some allow updates without CPU (USB BIOS Flashback), others need working CPU installed."
  },
  {
    id: 14,
    question: "What is UEFI, and how does it differ from legacy BIOS?",
    options: [
      "UEFI is the old system, BIOS is new",
      "UEFI (Unified Extensible Firmware Interface) is the modern replacement for BIOS, offering faster boot, graphical interface, larger drive support (GPT), and enhanced security",
      "They are identical",
      "UEFI is only for laptops"
    ],
    correct: 1,
    explanation: "UEFI vs Legacy BIOS: (1) Interface - UEFI has graphical mouse-driven interface; BIOS has text-based keyboard-only, (2) Boot speed - UEFI boots faster, (3) Drive support - UEFI uses GPT (supports 2TB+ drives, 128+ partitions); BIOS uses MBR (2TB limit, 4 primary partitions), (4) Security - UEFI supports Secure Boot (prevents unauthorized bootloaders/rootkits), (5) Features - UEFI offers networking, remote diagnostics, easier updates. Modern motherboards use UEFI (2010+) but often include 'CSM' (Compatibility Support Module) for legacy BIOS mode. Windows 11 requires UEFI. Access: press Del/F2/F12 during boot (varies by manufacturer). Common UEFI settings: boot order, XMP profiles, fan curves, security settings, overclocking."
  },
  {
    id: 15,
    question: "A motherboard has two M.2 slots. The manual states 'M.2_1 shares bandwidth with SATA ports 5 and 6'. What does this mean?",
    options: [
      "All ports work simultaneously without issues",
      "When an M.2 drive is installed in M.2_1 slot, SATA ports 5 and 6 are disabled due to shared PCIe/SATA lanes",
      "M.2 slots don't affect SATA ports",
      "SATA ports control M.2 slots"
    ],
    correct: 1,
    explanation: "PCIe lane sharing is common on motherboards. Limited PCIe lanes from CPU/chipset must be distributed among devices. When M.2_1 is populated, it uses PCIe/SATA lanes that would otherwise go to SATA ports 5-6, disabling those ports. Implications: (1) Plan storage configuration carefully, (2) Populate M.2 slots that don't disable needed SATA ports, (3) Check manual for lane allocation diagrams. Other shared bandwidth scenarios: (1) Second PCIe x16 slot runs at x8 when populated (shares lanes with first slot), (2) Some USB ports disable when certain M.2 slots are used. This is normal - motherboards multiplex limited lanes. High-end motherboards have more total lanes, reducing sharing. Always consult manual's lane sharing chart when planning builds with multiple storage devices or expansion cards."
  }
];