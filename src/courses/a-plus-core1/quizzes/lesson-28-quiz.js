export const lesson28Quiz = [
  {
    id: 1,
    question: "A technician needs to connect a laptop's HDMI output to a projector that only has VGA input. What type of adapter is required?",
    options: [
      "Simple passive HDMI to VGA cable will work",
      "Active HDMI to VGA adapter with built-in converter chip - converts digital HDMI signal to analog VGA",
      "VGA to HDMI passive adapter",
      "No adapter can convert between these standards"
    ],
    correct: 1,
    explanation: "HDMI to VGA conversion: Signal types: (1) HDMI - digital video + audio, (2) VGA - analog video only (no audio). Active adapter required: (1) Contains digital-to-analog converter (DAC) chip, (2) Powered by HDMI port or USB, (3) Costs $15-30, (4) One-way conversion (HDMI source to VGA display). Passive vs active: (1) Passive - simple pin remapping, no conversion (HDMI to DVI, DisplayPort to HDMI), cheap, (2) Active - signal conversion required (HDMI to VGA, USB-C to HDMI), electronics inside, more expensive. Audio consideration: (1) VGA carries no audio, (2) Need separate audio cable (3.5mm) from laptop headphone jack to projector/speakers. Alternative solutions: (1) DisplayPort to VGA (if laptop has DP), (2) USB-C to VGA (if laptop has USB-C with video), (3) Wireless presentation (Miracast, AirPlay) if projector supports. Quality: (1) VGA max resolution typically 1920×1200, (2) Image quality lower than digital connections, (3) Susceptible to interference. Testing: connect adapter, press Windows + P to detect projector. Legacy technology: VGA being phased out, but many older projectors still VGA-only."
  },
  {
    id: 2,
    question: "What is the difference between USB 2.0, USB 3.0, and USB 3.1 Gen 2 in terms of speed?",
    options: [
      "All USB versions have identical speeds",
      "USB 2.0: 480 Mbps, USB 3.0/3.1 Gen 1: 5 Gbps, USB 3.1 Gen 2: 10 Gbps - each generation significantly faster",
      "USB 2.0 is the fastest",
      "Speed differences are negligible"
    ],
    correct: 1,
    explanation: "USB speed evolution: USB 2.0 (2000): (1) Maximum 480 Mbps (~60 MB/s real-world), (2) Black plastic connector inside, (3) Sufficient for keyboards, mice, printers, (4) Too slow for modern external drives. USB 3.0/3.1 Gen 1 (2008): (1) 5 Gbps (~500 MB/s theoretical, 300-400 MB/s real), (2) Blue plastic connector (SuperSpeed), (3) Good for external SSDs, (4) Additional pins (9 vs 4). USB 3.1 Gen 2 (2013): (1) 10 Gbps (~1000 MB/s), (2) Often USB-C connector, (3) Excellent for fast external storage, (4) Video output capable. USB 3.2 (2017): (1) Gen 1 = 5 Gbps, Gen 2 = 10 Gbps, Gen 2×2 = 20 Gbps, (2) Requires USB-C, (3) Confusing naming. USB4 (2019): (1) 40 Gbps, (2) USB-C only, (3) Thunderbolt 3 compatible. Backward compatibility: (1) USB 3.x devices work in USB 2.0 ports (slower speed), (2) USB 2.0 devices work in USB 3.x ports (original speed). Real-world impact: (1) External HDD: USB 2.0 = slow (minutes), USB 3.0 = fast (seconds), (2) Large file transfers benefit greatly from USB 3.x. Identification: (1) USB 2.0 - black/white connector, (2) USB 3.0 - blue connector, (3) USB 3.1 Gen 2 - often teal or red. Always use USB 3.0+ for storage devices."
  },
  {
    id: 3,
    question: "A USB device is connected but not recognized by the computer. What troubleshooting steps should be taken?",
    options: [
      "USB devices always work without issues",
      "Try different USB port, check Device Manager for errors, test device on another computer, update/reinstall USB drivers, check if device requires external power",
      "Replace motherboard immediately",
      "USB problems cannot be fixed"
    ],
    correct: 1,
    explanation: "USB device troubleshooting: Basic steps: (1) Try different USB port (port may be dead), (2) Try different cable (cables fail frequently), (3) Restart computer (resets USB controllers), (4) Check if device lights up/powers on. Device Manager check: (1) Open Device Manager (devmgmt.msc), (2) Look for yellow exclamation mark (driver issue), (3) Under 'Universal Serial Bus controllers' or device category, (4) Right-click device → Update driver or Uninstall device (then rescan). Power requirements: (1) High-power devices (external drives) may need powered USB hub, (2) USB 2.0 provides 500mA, USB 3.0 provides 900mA, (3) Insufficient power = device not working, (4) Try port on back of PC (more power than front ports sometimes). USB selective suspend: (1) Power saving feature may disable USB ports, (2) Control Panel → Power Options → Change plan settings → Advanced → USB settings → Disable selective suspend. Driver issues: (1) Install manufacturer driver if available, (2) Windows generic driver usually works but may lack features, (3) Update chipset drivers (Intel/AMD). Testing: (1) Try device on different computer (isolates device vs computer issue), (2) Different device in same port (isolates port vs device). Severe issues: (1) USB controller disabled in BIOS, (2) Physical port damage, (3) Motherboard USB header disconnected (front ports). USB hub: may cause issues if underpowered or defective."
  },
  {
    id: 4,
    question: "What is Thunderbolt, and how does it differ from standard USB-C?",
    options: [
      "Thunderbolt and USB-C are identical",
      "Thunderbolt is a high-speed protocol (up to 40 Gbps) that uses USB-C connector, supports PCIe devices, daisy-chaining, and video output - superset of USB-C capabilities",
      "Thunderbolt is slower than USB-C",
      "Thunderbolt only works on Apple devices"
    ],
    correct: 1,
    explanation: "Thunderbolt technology: Speeds: (1) Thunderbolt 3 - 40 Gbps (USB-C connector), (2) Thunderbolt 4 - 40 Gbps (USB-C, improved specs), (3) Thunderbolt 5 - 80-120 Gbps (upcoming). Capabilities: (1) PCIe protocol support (external GPUs, fast storage), (2) DisplayPort protocol (two 4K displays or one 5K), (3) USB protocol (backward compatible), (4) Power Delivery (charging up to 100W), (5) Daisy-chaining (up to 6 devices). USB-C vs Thunderbolt: (1) USB-C - physical connector type (oval, reversible), (2) Thunderbolt - protocol/technology that can use USB-C connector, (3) All Thunderbolt 3/4 uses USB-C, (4) Not all USB-C supports Thunderbolt. Identification: (1) Lightning bolt icon = Thunderbolt, (2) USB icon only = standard USB-C, (3) Check device specifications. Use cases: (1) External GPU enclosures (eGPU), (2) High-speed storage (NVMe drives), (3) Professional video editing (fast data transfer), (4) Docking stations (single cable for everything), (5) Multiple display outputs. Platform support: (1) Intel CPUs (built-in or chipset), (2) Apple M1/M2/M3 Macs, (3) AMD Ryzen (some models with Thunderbolt 4), (4) Certification required (not all USB-C ports support Thunderbolt). Price: Thunderbolt devices more expensive due to licensing and technology."
  },
  {
    id: 5,
    question: "A video cable needs to be run 50 feet from a computer to a display. Which cable type is best for this distance?",
    options: [
      "Standard HDMI cable works perfectly",
      "Fiber optic HDMI cable, active HDMI cable, or DisplayPort cable - signal degradation concerns over long distances with standard copper",
      "VGA is best for long distances",
      "All cables work identically regardless of length"
    ],
    correct: 1,
    explanation: "Cable distance limitations: HDMI copper: (1) Standard - 25 feet max reliably, (2) High Speed - 50 feet max (signal degradation), (3) Quality matters (thicker gauge better), (4) Over 50 feet - signal loss, snow, dropouts. DisplayPort copper: (1) Similar to HDMI (~50 feet max), (2) Active cables extend range, (3) Better than HDMI for long distances generally. VGA analog: (1) Up to 100 feet possible (analog degrades gradually), (2) Image quality suffers (ghosting, color shift), (3) Interference susceptible. Solutions for long distances: Active HDMI/DP cables: (1) Built-in amplifier/equalizer, (2) One-directional (mark source end), (3) Extends to 100+ feet, (4) Cost $30-100. Fiber optic cables: (1) HDMI/DisplayPort over fiber, (2) 300+ feet possible, (3) Immune to electrical interference, (4) More expensive ($100-300). HDMI/DisplayPort extenders: (1) Transmitter + receiver units, (2) Use Cat5e/Cat6 cable between units, (3) 300+ feet achievable, (4) Power required at both ends. Wireless: (1) HDMI wireless transmitter/receiver, (2) 100-150 feet range, (3) Latency concerns (not for gaming), (4) Compression may reduce quality. Recommendations: (1) 50 feet - high-quality active cable or extender, (2) Avoid cheap thin cables (high resistance). Installation: test before permanent installation (pulling cables through walls)."
  },
  {
    id: 6,
    question: "What is the purpose of SATA power and data connectors on drives?",
    options: [
      "Only one connector is needed for drives",
      "SATA data cable transfers information between drive and motherboard; SATA power cable provides electrical power from PSU to drive - both required",
      "SATA connectors are optional",
      "Data and power are in single cable"
    ],
    correct: 1,
    explanation: "SATA connections: SATA data cable: (1) Thin L-shaped cable, (2) 7-pin connector, (3) Connects drive to motherboard SATA port, (4) Maximum 1 meter length (practical ~18 inches), (5) Carries read/write data commands, (6) One cable per drive (not daisy-chained), (7) SATA I/II/III physically identical (speed difference in controller). SATA power cable: (1) Wider L-shaped connector (15 pins), (2) From power supply, (3) Provides +3.3V, +5V, and +12V, (4) Multiple power connectors on single cable (daisy-chain), (5) Powers drive motor and electronics. Both required: (1) Data without power - drive not detected, (2) Power without data - drive spins but inaccessible, (3) Must connect both for operation. Installation: (1) Align L-shape (keyed connector), (2) Insert firmly until clicks, (3) Don't force (damage pins), (4) Cable management (route cleanly). Older drives (IDE/PATA): (1) Wide ribbon cable (data) + Molex power (4-pin), (2) SATA replaced IDE for better airflow and speed. M.2 drives: (1) No cables (plug directly into motherboard), (2) Powered through M.2 slot, (3) Data through PCIe or SATA protocol in slot. eSATA: (1) External SATA (data only), (2) Requires separate power (eSATA+USB hybrid or external PSU). Common issues: (1) Loose connections (reseat), (2) Bent pins (careful straightening), (3) Wrong orientation (check L-shape alignment)."
  },
  {
    id: 7,
    question: "A laptop has only USB-C ports. The user needs to connect HDMI display, USB-A flash drive, and ethernet. What solution is needed?",
    options: [
      "Cannot connect these devices to USB-C laptops",
      "USB-C multiport adapter/hub with HDMI, USB-A, and ethernet ports - provides multiple connection types from single USB-C port",
      "Buy new laptop with all these ports",
      "Each device needs separate laptop"
    ],
    correct: 1,
    explanation: "USB-C adapters and hubs: Multiport hub/dock: (1) Single USB-C connection to laptop, (2) Provides multiple port types (HDMI, DisplayPort, USB-A, ethernet, SD card, audio), (3) Powered by laptop or external power adapter, (4) Costs $30-200+ depending on features. Common configurations: (1) Basic hub - USB-A ×3, HDMI, USB-C power pass-through ($30-50), (2) Premium dock - USB-A ×3-4, HDMI, DisplayPort, ethernet, SD/microSD, audio, 85W+ charging ($100-300), (3) Thunderbolt dock - all above plus higher bandwidth, eGPU support ($200-400). Requirements: (1) USB-C port must support video (DisplayPort Alt Mode or Thunderbolt), (2) Check laptop specs - not all USB-C ports support video, (3) Power Delivery for charging (laptop dependent). Individual adapters: (1) USB-C to HDMI - $10-20, (2) USB-C to USB-A adapter - $5-10, (3) USB-C to ethernet - $15-25, (4) Mix and match as needed but cluttered. Benefits of hub: (1) Single connection (clean desk), (2) Docking station functionality (unplug one cable to take laptop), (3) Charges laptop while providing ports. Limitations: (1) Bandwidth shared across devices, (2) Cheap hubs may have connectivity issues, (3) Some devices may not work (compatibility). Modern laptops: trend toward fewer ports, reliance on adapters (thin design). Quality matters: reputable brands (Anker, CalDigit, OWC) more reliable than generic."
  },
  {
    id: 8,
    question: "What is the maximum length for a standard USB 2.0 cable before signal degradation occurs?",
    options: [
      "USB has no length limits",
      "16 feet (5 meters) maximum for USB 2.0 passive cable - longer distances require active cables, repeaters, or hubs",
      "100 feet is standard",
      "Only 1 foot works"
    ],
    correct: 1,
    explanation: "USB cable length limitations: USB 2.0: (1) Maximum 5 meters (16.4 feet) per specification, (2) Single passive cable limit, (3) Signal attenuation beyond this distance, (4) Data errors or device not detected. USB 3.x: (1) Similar ~3 meter (10 feet) recommendation for reliable high-speed, (2) Lower quality cables shorter before issues, (3) Higher speeds more susceptible to interference. Extending USB: Active USB cables: (1) Built-in signal repeater, (2) Extends to 15-30 feet, (3) One-directional (labeled), (4) Powered from USB or external. USB repeater/booster: (1) External device midway in cable run, (2) Regenerates signal, (3) Can chain multiple (up to 5 repeaters = ~80 feet total), (4) Each segment limited to 5m. Powered USB hub: (1) Acts as repeater, (2) Provides multiple ports, (3) External power required, (4) Resets distance limit from hub. USB over Cat5/Cat6 extenders: (1) Transmitter + receiver units, (2) Network cable between (100+ meters possible), (3) More expensive solution, (4) Commercial/industrial use. Fiber optic USB: (1) 300+ feet possible, (2) Expensive specialty cables, (3) Rare use case. Why length matters: (1) Resistance increases with length, (2) Voltage drop affects power, (3) Signal timing issues at long distances. Practical advice: (1) Keep USB cables as short as practical, (2) High-quality cables perform better, (3) For permanent long runs, use extenders not daisy-chained cables."
  },
  {
    id: 9,
    question: "A cable is labeled 'Cat 6a'. What does this designation indicate?",
    options: [
      "Category refers to color only",
      "Category 6a ethernet cable rated for 10 Gbps speeds up to 100 meters - 'a' indicates augmented specification with better shielding",
      "Cat numbers are random",
      "All ethernet cables are identical"
    ],
    correct: 1,
    explanation: "Ethernet cable categories: Cat 5e (Enhanced): (1) 1 Gbps up to 100 meters, (2) 100 MHz bandwidth, (3) Sufficient for most home networks, (4) Minimum recommended today. Cat 6: (1) 1 Gbps up to 100 meters, (2) 10 Gbps up to 55 meters, (3) 250 MHz bandwidth, (4) Better crosstalk resistance than Cat 5e. Cat 6a (Augmented): (1) 10 Gbps up to 100 meters (full distance), (2) 500 MHz bandwidth, (3) Shielded (STP) or unshielded (UTP) versions, (4) Thicker, less flexible than Cat 6, (5) Future-proof for high-speed networks. Cat 7: (1) 10 Gbps up to 100 meters, (2) 600 MHz bandwidth, (3) Always shielded (S/FTP), (4) Requires special connectors (not standard RJ45), (5) Rare in practice. Cat 8: (1) 25-40 Gbps up to 30 meters, (2) 2000 MHz bandwidth, (3) Data center use (short runs), (4) Very expensive. Practical selection: (1) Home network - Cat 5e or Cat 6 sufficient, (2) New construction - Cat 6a (future-proof), (3) 10 Gigabit needs - Cat 6a minimum, (4) Gaming - Cat 5e adequate (latency not affected). Shielded (STP) vs Unshielded (UTP): (1) Shielded - better EMI resistance, more expensive, stiffer, (2) Unshielded - easier installation, cheaper, sufficient for most uses. Cable quality matters: (1) CCA (Copper Clad Aluminum) - cheap, higher resistance, not to spec, (2) Pure copper - specification compliant, better performance. Certification testing: professional installers test cables meet category specifications."
  },
  {
    id: 10,
    question: "What is the purpose of the PS/2 connector on older computers?",
    options: [
      "PS/2 is for power supply only",
      "Legacy connector for keyboard (purple) and mouse (green) - 6-pin mini-DIN connector, largely replaced by USB",
      "PS/2 connects monitors",
      "PlayStation 2 console connector"
    ],
    correct: 1,
    explanation: "PS/2 connector history: Purpose: (1) Keyboard and mouse connection standard (1980s-2000s), (2) Mini-DIN 6-pin connector, (3) Color coded - purple for keyboard, green for mouse, (4) Separate ports (not interchangeable initially). Advantages (historical): (1) No USB bandwidth used (important when USB scarce), (2) Full n-key rollover (all keys detectable simultaneously), (3) Early boot support (pre-USB BIOS days), (4) Some gaming keyboards preferred PS/2 for no polling delay. Disadvantages: (1) Not hot-swappable (plug while powered off), (2) Easy to bend pins (fragile), (3) Must align connector correctly (keyed but easy to force wrong), (4) Separate ports for keyboard and mouse (not interchangeable). Modern status: (1) Largely obsolete (USB replaced), (2) Still on some motherboards (enthusiast, server), (3) PS/2 to USB adapters available ($5-10), (4) Gaming keyboards sometimes include PS/2 adapter. Troubleshooting PS/2: (1) Must restart after connecting/disconnecting, (2) Bent pins - carefully straighten with needle, (3) Driver issues rare (built into BIOS/OS), (4) If not working, check BIOS for USB vs PS/2 settings. USB advantages: (1) Hot-swappable, (2) Single port type for all devices, (3) Higher speeds, (4) Standard across devices. Legacy support: some industries still use PS/2 (medical, industrial) for reliability and electromagnetic interference resistance."
  },
  {
    id: 11,
    question: "A DisplayPort cable has a locking mechanism. What is its purpose and how should it be disconnected?",
    options: [
      "DisplayPort cables cannot be removed once connected",
      "Locking tab prevents accidental disconnection - press release button on connector before pulling to safely remove",
      "Pull cable hard to disconnect",
      "Cut the cable to remove"
    ],
    correct: 1,
    explanation: "DisplayPort connector features: Locking mechanism: (1) Small release button on top of connector, (2) Internal latch engages with port, (3) Prevents accidental disconnection (cable snags, movement), (4) Common on professional displays and GPUs. Proper removal: (1) Press and hold release button on connector, (2) While holding button, gently pull connector straight out, (3) Don't yank without releasing (damages port or cable), (4) Connector slides out easily when latch released. Damage from improper removal: (1) Broken latch on cable (no longer locks), (2) Damaged port latch (port won't hold cables), (3) Bent pins inside port, (4) Expensive repair or port replacement. DisplayPort advantages: (1) Locking mechanism (more secure than HDMI), (2) Higher bandwidth than HDMI (versions dependent), (3) Daisy-chaining support (MST), (4) Longer cable runs than HDMI, (5) Royalty-free (no licensing fees). Cable inspection: (1) Check latch not broken before use, (2) Align connector before inserting (keyed shape), (3) Push until clicks/locks, (4) Tug gently to verify locked. Variants: (1) Full-size DisplayPort, (2) Mini DisplayPort (older MacBooks, Surface), (3) USB-C with DisplayPort Alt Mode (modern standard). Some cables: latch is optional feature (budget cables may not have locking mechanism). Professional environments prefer locking connectors (presentation reliability)."
  },
  {
    id: 12,
    question: "What is the difference between a straight-through ethernet cable and a crossover cable?",
    options: [
      "They are identical cables",
      "Straight-through has same pinout both ends (568B or 568A) for device-to-switch; crossover swaps transmit/receive wires (568A one end, 568B other) for device-to-device",
      "Crossover cables are longer",
      "Color coding is the only difference"
    ],
    correct: 1,
    explanation: "Ethernet cable wiring: Straight-through cable: (1) Same pinout both ends (T568A or T568B standard), (2) Use: computer to switch, switch to router, computer to router, (3) Most common cable type (90%+ of installations), (4) Transmit pins on one end connect to receive pins on device. Crossover cable: (1) T568A on one end, T568B on other end, (2) Swaps transmit and receive pairs, (3) Use: computer to computer (direct), switch to switch, router to router, (4) No longer required with modern devices (Auto-MDIX). Pin swapping (crossover): (1) Pins 1-2 (TX) swap with pins 3-6 (RX), (2) Allows direct device-to-device communication, (3) Both devices can transmit and receive on correct wires. Auto-MDIX technology: (1) Automatic Medium-Dependent Interface Crossover, (2) Modern devices (2000s+) auto-detect and adapt, (3) Straight-through works for everything, (4) Crossover cables becoming obsolete. Identification: (1) Hold both ends side-by-side, compare wire order, (2) Straight-through - identical order, (3) Crossover - different order (1-2 and 3-6 swapped), (4) Color pattern differs. When needed today: (1) Old equipment without Auto-MDIX, (2) Specific industrial/embedded systems, (3) Most modern equipment handles automatically. T568A vs T568B: (1) Two different wiring standards (pin assignments), (2) Both work, just be consistent, (3) T568B more common in US, (4) T568A common in residential/government. Making cables: punch-down tool, RJ45 connectors, cable tester to verify wiring."
  },
  {
    id: 13,
    question: "A Lightning cable is used to charge an iPhone. What is unique about Lightning connectors?",
    options: [
      "Lightning is the same as USB-C",
      "Lightning is Apple proprietary, reversible (no wrong orientation), 8-pin connector used on iPhones/iPads until iPhone 15 switched to USB-C",
      "Lightning only transfers data, not power",
      "All phones use Lightning"
    ],
    correct: 1,
    explanation: "Lightning connector (Apple proprietary): Features: (1) Reversible - works either orientation (user-friendly), (2) 8-pin connector (simpler than 30-pin dock connector it replaced), (3) Small form factor (fits thin devices), (4) All-digital signal (adaptive), (5) MFi (Made for iPhone) certification required for third-party accessories. Capabilities: (1) Power delivery (charging), (2) Data transfer (USB speeds - 480 Mbps USB 2.0 typically), (3) Audio output (Lightning headphones), (4) Video output (Lightning to HDMI adapter), (5) Accessory communication. Timeline: (1) Introduced 2012 (iPhone 5), (2) Replaced 30-pin dock connector, (3) Used through iPhone 14 (2023), (4) iPhone 15 (2023) switched to USB-C (EU regulation compliance). Advantages: (1) Reversible (better UX than micro-USB of era), (2) Durable (reinforced connector), (3) Compact size. Disadvantages: (1) Proprietary (expensive, limited compatibility), (2) Slower than USB-C (USB 2.0 speeds vs USB 3.x), (3) Lower power delivery than USB-C, (4) Ecosystem lock-in. MFi certification: (1) Authentication chip in cable/accessory, (2) Ensures compatibility and safety, (3) Unlicensed cables may not work or damage device, (4) More expensive than generic cables. USB-C transition: (1) iPhone 15+ uses USB-C, (2) EU mandate for common charging, (3) Better speeds and interoperability, (4) Older Lightning devices still require Lightning cables."
  },
  {
    id: 14,
    question: "What does 'plenum-rated' mean for network cables, and when is it required?",
    options: [
      "Plenum rating only affects color",
      "Plenum-rated cables have fire-resistant jacket that doesn't produce toxic fumes - required by code for cables in air handling spaces (above drop ceilings, HVAC ducts)",
      "All cables are plenum-rated",
      "Plenum refers to cable speed"
    ],
    correct: 1,
    explanation: "Cable ratings and fire safety: Plenum spaces: (1) Areas used for air circulation (HVAC), (2) Above drop ceilings, below raised floors, (3) Air returns, ductwork, (4) Fire spreads quickly through these spaces, (5) Airflow spreads smoke/fumes throughout building. Plenum-rated cable (CMP): (1) FEP or low-smoke PVC jacket, (2) Self-extinguishing (doesn't sustain flame), (3) Minimal smoke when burning, (4) Low toxic fume emission, (5) Required by building/fire codes for plenum spaces, (6) More expensive ($0.30-0.50+ per foot vs $0.10-0.20). Riser-rated cable (CMR): (1) Between floors in vertical shafts, (2) Fire-resistant but not as strict as plenum, (3) Prevents fire spreading floor-to-floor, (4) Less expensive than plenum. General purpose (CM/CMX): (1) Standard cable for non-plenum areas, (2) Inside walls, conduit, (3) Least expensive. Code compliance: (1) Building codes mandate plenum cable in plenum spaces (NEC Article 800), (2) Inspection failure if wrong cable type, (3) Insurance issues if fire occurs, (4) Can use plenum everywhere (overspending but code compliant). Identification: (1) Cable jacket printed with rating (CMP, CMR, CM), (2) Plenum typically stiffer jacket. Installation considerations: (1) Verify code requirements before purchasing, (2) Fire marshal may inspect, (3) Plenum cable in plenum spaces, riser in risers, general elsewhere. Outdoor: direct burial rated (CMX) for underground runs."
  },
  {
    id: 15,
    question: "A fiber optic cable has LC connectors. What is unique about fiber optic cables compared to copper cables?",
    options: [
      "Fiber is identical to copper, just more expensive",
      "Fiber optic uses light through glass/plastic instead of electrical signals through copper - immune to EMI, longer distances, higher bandwidth, but more fragile",
      "Fiber is slower than copper",
      "Fiber only works for short distances"
    ],
    correct: 1,
    explanation: "Fiber optic technology: How it works: (1) Light pulses through glass or plastic fiber core, (2) Total internal reflection keeps light in core, (3) Transmitter converts electrical to light (LED or laser), (4) Receiver converts light back to electrical. Types: Single-mode (SMF): (1) Small core (8-10 microns), (2) Laser light source, (3) Long distances (40+ km), (4) Higher bandwidth, (5) More expensive, (6) Telecom, campus backbones. Multi-mode (MMF): (1) Larger core (50-62.5 microns), (2) LED light source, (3) Shorter distances (300m-2km), (4) Lower cost, (5) Building networks, data centers. Advantages: (1) EMI immunity (no electrical signal), (2) Longer distances (km vs 100m copper), (3) Higher bandwidth (10/40/100 Gbps common), (4) Security (hard to tap), (5) Lighter weight. Disadvantages: (1) More fragile (glass breaks if bent too far), (2) Expensive (cable, connectors, equipment), (3) Requires special tools (fusion splicer), (4) Connectors more complex than copper. Connectors: (1) LC - small, duplex, most common, (2) SC - larger, push-pull, (3) ST - bayonet twist, older, (4) MT-RJ - very small, duplex. Installation: (1) Minimum bend radius (typically 10× cable diameter), (2) Don't kink or crush, (3) Clean connectors (dust blocks light), (4) Special testers (OTDR - Optical Time-Domain Reflectometer). Use cases: (1) Long distance campus networks, (2) High-bandwidth backbones, (3) Environments with high EMI, (4) Connecting buildings. Consumer: rare (copper sufficient for home/office)."
  }
];