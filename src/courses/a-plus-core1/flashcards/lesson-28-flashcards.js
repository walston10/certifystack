export const lesson28Flashcards = [
  {
    id: 1,
    front: "What are the differences between HDMI versions?",
    back: "HDMI 1.4: 4K@30fps, audio return channel. HDMI 2.0: 4K@60fps, HDR support. HDMI 2.1: 8K@60fps, 4K@120fps, enhanced audio return (eARC), variable refresh rate."
  },
  {
    id: 2,
    front: "What is DisplayPort and its key features?",
    back: "Digital display interface supporting multiple monitors via daisy-chaining. DP 1.2: 4K@60fps. DP 1.4: 8K@60fps, HDR. DP 2.0: 16K support. Common on PC monitors."
  },
  {
    id: 3,
    front: "What are the types of DVI connectors?",
    back: "DVI-D (digital only), DVI-A (analog only - rare), DVI-I (integrated - both digital and analog). Single-link supports 1920×1200, dual-link supports 2560×1600."
  },
  {
    id: 4,
    front: "What is VGA and why is it being phased out?",
    back: "Analog video standard using 15-pin connector (DB-15). Maximum 2048×1536 resolution. Being replaced because it's analog (lower quality), doesn't carry audio, and limited to lower resolutions."
  },
  {
    id: 5,
    front: "What are USB Type-A, Type-B, and Type-C connectors?",
    back: "Type-A: rectangular, most common (computers, chargers). Type-B: square, mainly printers. Type-C: reversible oval, newest standard - supports data, video, power delivery up to 100W."
  },
  {
    id: 6,
    front: "What are the speed differences between USB versions?",
    back: "USB 2.0: 480 Mbps. USB 3.0/3.1 Gen 1: 5 Gbps (blue port). USB 3.1 Gen 2: 10 Gbps. USB 3.2: 20 Gbps. USB 4: 40 Gbps (uses Type-C only)."
  },
  {
    id: 7,
    front: "How do you identify USB 3.0 ports visually?",
    back: "Blue plastic insert inside the port (most common), or 'SS' marking for SuperSpeed. Type-A has extra pins compared to USB 2.0. May also see USB trident logo with 'SS'."
  },
  {
    id: 8,
    front: "What is USB Power Delivery (USB-PD)?",
    back: "Standard for USB-C that allows up to 100W power transfer. Enables charging laptops, fast-charging phones, and powering displays. Negotiates power requirements between devices."
  },
  {
    id: 9,
    front: "What is a SATA data cable and its purpose?",
    back: "Thin 7-pin cable connecting storage drives (HDD/SSD) to motherboard. SATA 3.0 supports 6 Gbps transfer speed. Uses L-shaped connector to prevent incorrect insertion."
  },
  {
    id: 10,
    front: "What is a SATA power connector?",
    back: "Flat 15-pin connector from power supply providing power to drives. Supplies 3.3V, 5V, and 12V. Wider than data connector, cannot be confused with SATA data cable."
  },
  {
    id: 11,
    front: "What is eSATA and its use case?",
    back: "External SATA for connecting external drives. Faster than USB 2.0 (up to 6 Gbps) but doesn't provide power. Largely replaced by USB 3.0+ which offers similar speeds with power delivery."
  },
  {
    id: 12,
    front: "What is Thunderbolt and what makes it special?",
    back: "High-speed interface combining PCIe and DisplayPort on single cable. Supports data, video, power, and daisy-chaining. Uses USB-C connector on newer versions (TB3/4)."
  },
  {
    id: 13,
    front: "What are the differences between Thunderbolt versions?",
    back: "TB1/2: 10-20 Gbps, Mini DisplayPort connector. TB3: 40 Gbps, USB-C connector, 100W power. TB4: 40 Gbps minimum (guaranteed), USB-C, enhanced security, better specs consistency."
  },
  {
    id: 14,
    front: "What is Apple Lightning connector?",
    back: "Proprietary 8-pin reversible connector for iPhones, iPads, older AirPods. Supports charging and data transfer. Being phased out in favor of USB-C on newer devices."
  },
  {
    id: 15,
    front: "What is a serial (DB-9) connector and its legacy use?",
    back: "9-pin D-subminiature connector. Legacy use: modems, mice, networking equipment, industrial controls. Largely obsolete on modern PCs but still used in specialized/industrial equipment."
  },
  {
    id: 16,
    front: "What is a parallel (DB-25) connector and its legacy use?",
    back: "25-pin connector used for older printers and scanners. Transmitted multiple bits simultaneously (parallel). Replaced by USB - faster, smaller, easier to use."
  },
  {
    id: 17,
    front: "What are PS/2 connectors and their color coding?",
    back: "Round 6-pin Mini-DIN connectors for legacy keyboards and mice. Purple = keyboard, Green = mouse. Not hot-swappable. Largely replaced by USB."
  },
  {
    id: 18,
    front: "What is a USB-C to HDMI adapter used for?",
    back: "Connects USB-C equipped laptop/tablet to HDMI display. Converts DisplayPort alt-mode signal from USB-C to HDMI output. Common for presentations and external monitors."
  },
  {
    id: 19,
    front: "What is a DVI to VGA adapter and when is it needed?",
    back: "Converts digital DVI signal to analog VGA. Only works with DVI-I or DVI-A (analog capable). Needed when connecting newer GPU with DVI to older VGA monitor."
  },
  {
    id: 20,
    front: "What is DisplayPort to HDMI adapter used for?",
    back: "Connects DisplayPort source (computer) to HDMI display (monitor/TV). Common for multi-monitor setups when HDMI ports run out. Passive adapters work for most resolutions."
  },
  {
    id: 21,
    front: "What is the maximum cable length for HDMI?",
    back: "Typically 15-25 feet (5-8 meters) for reliable 4K signal without amplification. Longer distances require active cables, repeaters, or fiber optic HDMI cables."
  },
  {
    id: 22,
    front: "What is the maximum cable length for USB 2.0 and 3.0?",
    back: "USB 2.0: 16 feet (5 meters). USB 3.0: 10 feet (3 meters) due to higher speeds. Use powered hubs or active extension cables for longer distances."
  },
  {
    id: 23,
    front: "How do you identify a Thunderbolt 3/4 port?",
    back: "USB-C shaped port with lightning bolt symbol next to it. May show number '3' or '4' or just bolt. Physically identical to USB-C but supports higher speeds and more features."
  },
  {
    id: 24,
    front: "What video cables carry audio signals?",
    back: "HDMI (always), DisplayPort (yes), Thunderbolt (yes), DVI (no - video only), VGA (no - video only). USB-C with DisplayPort alt-mode can carry audio."
  },
  {
    id: 25,
    front: "What is a molex connector?",
    back: "4-pin power connector from power supply. Legacy connector for old hard drives, optical drives, case fans. Provides 5V and 12V. Mostly replaced by SATA power connectors."
  },
  {
    id: 26,
    front: "What is DisplayPort alt-mode on USB-C?",
    back: "USB-C feature allowing DisplayPort video signal transmission over USB-C cable. Enables single cable for power, data, and video to monitors. Not all USB-C ports support it."
  },
  {
    id: 27,
    front: "What's the difference between active and passive adapters?",
    back: "Passive: simple wiring conversion, no power needed, limited resolution/distance. Active: contains electronics, requires power, supports higher resolutions and longer cables. Example: active DisplayPort to HDMI."
  },
  {
    id: 28,
    front: "How do you tell if a USB cable is charge-only vs data cable?",
    back: "No reliable visual indicator. Test by connecting to computer - data cables show device connection, charge-only doesn't. Charge-only cables only have power wires (2 of 4 wires)."
  },
  {
    id: 29,
    front: "What is an M.2 connector and what does it connect?",
    back: "Small expansion slot on motherboard for SSDs and Wi-Fi cards. Keyed (M-key or B-key) to prevent wrong insertion. Supports SATA or NVMe protocols depending on drive type."
  },
  {
    id: 30,
    front: "What causes a 'no signal' error when connecting displays?",
    back: "Cable not fully seated, wrong input selected on monitor, bad cable, incompatible resolution, adapter needed, port disabled in BIOS. Check physical connection first, try different cable/port."
  }
];