// Flashcards for Lesson 29: Cable Testing and Physical Layer Issues (SHORTENED)

export const lesson29Flashcards = [
  {
    id: 1,
    front: "What are common Physical Layer (Layer 1) problems?",
    back: "Bad/unplugged cables, wrong cable type, exceeds 100m distance, power issues, failed NIC/port, damaged connectors, EMI/RFI interference. Check physical first - most common issues."
  },
  {
    id: 2,
    front: "What does a cable tester verify?",
    back: "Continuity, wire mapping, opens, shorts, crossed/split pairs. Basic pass/fail for connectivity. Does NOT test speed or performance."
  },
  {
    id: 3,
    front: "What cable wiring problems does a cable tester detect?",
    back: "Open (broken wire), short (wires touching), reversed pairs, crossed pairs, split pairs. Most common: opens from bad crimps."
  },
  {
    id: 4,
    front: "What is a tone generator and probe (toner) used for?",
    back: "Traces cables - identifies which cable is which. Generator sends tone, probe detects it. Essential for unlabeled cables in walls/ceilings."
  },
  {
    id: 5,
    front: "What does a loopback adapter test?",
    back: "Tests NIC by redirecting TX to RX. Plug into port, run diagnostics. Pass = NIC works. Isolates NIC from network variables."
  },
  {
    id: 6,
    front: "What is a TDR (Time Domain Reflectometer)?",
    back: "Measures copper cable length and locates breaks/faults. Shows distance to fault in feet/meters. Essential for long/buried cable runs."
  },
  {
    id: 7,
    front: "What is an OTDR (Optical Time Domain Reflectometer)?",
    back: "TDR for fiber optic cables. Measures length, attenuation, locates breaks/bends. Expensive ($5,000+) but essential for fiber troubleshooting."
  },
  {
    id: 8,
    front: "What does a light meter measure?",
    back: "Measures optical power/signal strength in fiber (dBm). Tests if fiber has acceptable signal level. Much cheaper than OTDR."
  },
  {
    id: 9,
    front: "What does a multimeter measure?",
    back: "Voltage, current, resistance, continuity. Use for power verification, cable testing, PoE voltage checks. Basic electrical troubleshooting."
  },
  {
    id: 10,
    front: "What is a cable certifier?",
    back: "Tests cable performance against standards (Cat5e/6/6a). Verifies speed rating, generates certification reports. Expensive ($2,000+), required for professional installs."
  },
  {
    id: 11,
    front: "Cable tester vs cable certifier?",
    back: "Tester: connectivity/wire mapping, cheap ($50-300). Certifier: performance testing, generates reports, expensive ($2,000+). Tester = 'does it work?', Certifier = 'does it meet spec?'"
  },
  {
    id: 12,
    front: "What is a spectrum analyzer used for?",
    back: "Displays RF signals across frequencies. Identifies wireless interference (microwave, Bluetooth), finds cleanest channels. Expensive ($500-5,000+)."
  },
  {
    id: 13,
    front: "What does a WiFi analyzer show?",
    back: "Scans wireless networks - shows SSIDs, channels, signal strength, encryption. Use for site surveys, channel selection, finding rogues. Apps cheaper than spectrum analyzer."
  },
  {
    id: 14,
    front: "What do link lights indicate?",
    back: "Solid green = good connection. Blinking = activity. Amber/orange = issue (speed/duplex mismatch). No light = no connection. Check first for physical troubleshooting."
  },
  {
    id: 15,
    front: "What is attenuation in cabling?",
    back: "Signal loss over distance. Measured in dB. Ethernet limited to 100m, fiber varies by type. Too much attenuation = packet loss/errors."
  },
  {
    id: 16,
    front: "What is crosstalk in cabling?",
    back: "Signal from one wire pair interferes with another. NEXT = near-end, FEXT = far-end. Causes: improper termination, split pairs. Prevention: maintain twists, quality cable."
  },
  {
    id: 17,
    front: "What is EMI/RFI interference?",
    back: "EMI = electromagnetic (motors, power lines). RFI = radio frequency (wireless devices). Affects copper only. Fix: shielded cable, reroute away from sources, or use fiber."
  },
  {
    id: 18,
    front: "UTP vs STP cable?",
    back: "UTP = unshielded, cheaper, common. STP = shielded, better interference protection, requires grounding. Use STP in high-interference environments (industrial, near power)."
  },
  {
    id: 19,
    front: "How to clean dirty fiber optic connectors?",
    back: "Use fiber cleaning kit (solvent + wipes) or one-click cleaners. Never touch fiber end or blow on it. Dirty fiber = most common fiber problem."
  },
  {
    id: 20,
    front: "Maximum Ethernet cable length?",
    back: "Twisted pair: 100 meters (328 ft) for 10/100/1000BASE-T. Fiber varies - multimode 300-550m, single-mode 10-40+ km. Exceeding = signal loss."
  },
  {
    id: 21,
    front: "How to identify cable distance limitation issues?",
    back: "Symptoms: intermittent connectivity, packet loss, CRC errors over 100m. Measure with TDR/certifier. Fix: add switch midway or use fiber."
  },
  {
    id: 22,
    front: "Plenum vs non-plenum (PVC) cable?",
    back: "Plenum: fire-resistant, low smoke, for air-handling spaces (ceiling), expensive. PVC: standard, toxic smoke when burning, cheaper. Building codes determine which required."
  },
  {
    id: 23,
    front: "Common causes of intermittent cable connectivity?",
    back: "Damaged cable, loose connection, bad port, EMI/RFI, cable too long, temperature. Hardest to troubleshoot. Usually: replace cable even if sometimes passes tests."
  },
  {
    id: 24,
    front: "What do CRC errors indicate?",
    back: "Frame corruption from bad cable, interference, duplex mismatch, or bad NIC/port. Should be near zero. Layer 1/2 problem."
  },
  {
    id: 25,
    front: "Device shows no link light. What to check?",
    back: "Cable plugged in both ends, far device powered on, try different cable, try different port, check if port disabled, test with loopback adapter."
  },
  {
    id: 26,
    front: "What is a duplex mismatch?",
    back: "One side full-duplex, other half-duplex. Causes slow performance, collisions, CRC errors. Fix: set both to auto or both manually to full-duplex."
  },
  {
    id: 27,
    front: "What are giants and runts?",
    back: "Giants = frames >1518 bytes. Runts = frames <64 bytes. Both invalid, indicate hardware problems. Should be zero."
  },
  {
    id: 28,
    front: "How to test if a switch port is working?",
    back: "Check link LED, plug in known-good device, check interface status, try different cable, verify VLAN assignment, check for shutdown/errors."
  },
  {
    id: 29,
    front: "Essential tools for network technician toolkit?",
    back: "Cable tester, tone generator/probe, loopback adapter, WiFi analyzer, laptop with CLI tools, patch cables, console cable, crimper."
  },
  {
    id: 30,
    front: "Match: Cable tester / TDR / OTDR / Tone generator / Light meter / Certifier",
    back: "Cable tester = wire mapping. TDR = copper fault location. OTDR = fiber testing. Tone = cable tracing. Light meter = fiber signal. Certifier = performance standards."
  }
];