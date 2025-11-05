// Flashcards for Lesson 29: Cable Testing and Physical Layer Issues

export const lesson29Flashcards = [
  {
    id: 1,
    front: "What are common Physical Layer (Layer 1) problems?",
    back: "Cable issues: unplugged, damaged, wrong type (crossover vs straight-through), exceeds distance limit (100m Ethernet). Power: device off, power supply failed, no PoE. Hardware: bad NIC, failed port, bad transceiver (SFP). Connectors: damaged RJ45, dirty fiber, bent pins. Environmental: interference (EMI/RFI), temperature, water damage. Indicators: no link lights, amber lights, physical damage. Check Physical layer FIRST - most common problems. Simple fixes: reseat cables, try different port/cable."
  },
  {
    id: 2,
    front: "What is a cable tester and what does it verify?",
    back: "Cable tester verifies: continuity (all wires connected end-to-end), wire mapping (correct pin-to-pin connections), opens (broken wires), shorts (wires touching), crossed pairs, split pairs, reversed pairs. Tests: Ethernet (RJ45), phone (RJ11), coax. Basic tool, inexpensive. Displays: pass/fail, which wires have issues. Does NOT: measure speed/performance, certify cable, test signal quality. Use for: new cable installs, suspected cable damage, installation verification. Essential troubleshooting tool."
  },
  {
    id: 3,
    front: "What cable wiring problems does a cable tester detect?",
    back: "Open: wire broken/not connected (no continuity). Short: two or more wires touching (unintended connection). Reversed: wires swapped (e.g., pin 1 to pin 3 instead of pin 1). Crossed pair: two pairs swapped (1-2 with 3-6). Split pair: wires from different pairs incorrectly paired (works but causes crosstalk). Miswire: any incorrect pin mapping. Most common: opens (bad crimp, broken wire). Use tester: identify which pins have problems, verify new terminations."
  },
  {
    id: 4,
    front: "What is a tone generator and probe (toner)?",
    back: "Tone generator + probe traces cables (identifies which cable is which). Generator: connected to one end, sends tone signal. Probe: detects tone at other end (audible tone when near correct cable). Use when: cable not labeled, tracing cable through walls/ceiling, identifying cable in bundle, finding both ends. Process: attach generator to cable, wave probe over cables until tone heard. Inductive: probe doesn't need to touch conductors. Essential for: cable identification, hidden cable runs. Also called: fox and hound."
  },
  {
    id: 5,
    front: "What is a loopback adapter and how is it used?",
    back: "Loopback adapter redirects transmitted signal back to receiver (tests transmit and receive on same device). Physical loopback: plug that connects TX to RX pins. Virtual loopback: software-based. Tests: network interface card (NIC), port functionality, cable (if external loopback). Types: Ethernet, fiber, serial. Usage: plug into port, run diagnostic software. Pass: NIC can send and receive. Fail: NIC hardware problem. Isolates: NIC from network (removes network variables). Essential for: hardware troubleshooting."
  },
  {
    id: 6,
    front: "What is a TDR (Time Domain Reflectometer)?",
    back: "TDR measures cable length and locates breaks/faults in COPPER cables. Sends signal, measures reflection time. Shows: distance to fault (in feet/meters), type of fault (open, short, impedance mismatch). Accuracy: within few feet. Expensive but essential for: long cable runs, buried cables, hidden faults. Use when: intermittent connectivity (cable damage?), need exact fault location. More advanced than basic cable tester. Electricians/cable installers use daily. Pinpoints: where to dig/access cable."
  },
  {
    id: 7,
    front: "What is an OTDR (Optical Time Domain Reflectometer)?",
    back: "OTDR tests FIBER OPTIC cables (TDR for fiber). Measures: cable length, signal loss (attenuation), locates breaks/bends, connector quality, splice loss. Sends light pulse, analyzes reflections. Shows: graphical trace of entire fiber. Expensive ($5,000+), specialized tool. Use for: fiber troubleshooting, installation verification, fault location. Essential for: fiber optic networks, data centers, long-haul fiber. Requires training to interpret results. Identifies: where fiber degradation occurs along entire length."
  },
  {
    id: 8,
    front: "What is a light meter (optical power meter)?",
    back: "Light meter measures optical power/signal strength in fiber cables. Displays: dBm (decibel-milliwatts) or mW. Tests: fiber signal level, acceptable power at receiver, too much loss (attenuation). Used with: light source at far end (sends known power, meter measures received). Verifies: fiber connection good, no excessive loss, meets specifications. Much cheaper than OTDR ($200-500). Use for: quick fiber testing, verifying patch cables, troubleshooting 'no light'. Essential fiber tool, simpler than OTDR."
  },
  {
    id: 9,
    front: "What is a multimeter and what does it measure?",
    back: "Multimeter measures electrical properties: voltage (AC/DC), current (amperage), resistance (ohms), continuity (beep when connected). Use for: verify power presence, test cables (resistance/continuity), check power supplies, test PoE voltage, verify grounding. Not network-specific but essential. Tests: is there power? Is circuit complete? Cable damaged? Examples: verify 48V PoE, check power at outlet, test cable continuity. Basic troubleshooting tool for electricians and network techs. Cheap (~$20-200)."
  },
  {
    id: 10,
    front: "What is a cable certifier?",
    back: "Cable certifier tests cable performance against standards (Cat5e, Cat6, Cat6a). Verifies: meets specification at rated speed, proper crosstalk levels, return loss, attenuation. Generates: certification report (pass/fail documentation). Expensive ($2,000-10,000+). Required for: warranty compliance, professional installations, customer acceptance. Goes beyond basic tester: measures performance, not just connectivity. Use when: certifying new installation, troubleshooting performance issues, proving cable quality. Gold standard for cable testing."
  },
  {
    id: 11,
    front: "What is the difference between a cable tester and cable certifier?",
    back: "Cable tester: verifies connectivity, wire mapping, opens/shorts. Basic pass/fail. Inexpensive ($50-300). Good for: troubleshooting, basic verification. Cable certifier: tests performance against standards (frequency, crosstalk, attenuation), generates certification reports, expensive ($2,000+), required for professional installations. Tester = 'does it work?'. Certifier = 'does it meet spec?'. Both useful: tester for daily troubleshooting, certifier for installation certification. Certifier includes tester functions + performance validation."
  },
  {
    id: 12,
    front: "What is a spectrum analyzer and when is it used?",
    back: "Spectrum analyzer displays radio frequency (RF) signals across frequency range. Shows: frequency usage, signal strength, interference sources, channel utilization. Wireless use: identify interference (microwave, Bluetooth, other WiFi), find cleanest channels, locate rogue devices. Expensive ($500-5,000+), specialized tool. Use for: wireless site surveys, troubleshooting RF interference, optimizing channel selection. Displays: visual spectrum (waterfall or real-time). Essential for: dense wireless environments, interference problems. Identifies: non-WiFi interference cable testers can't."
  },
  {
    id: 13,
    front: "What is a WiFi analyzer and how is it used?",
    back: "WiFi analyzer scans and displays wireless networks. Shows: SSIDs, channels used, signal strength, encryption type, MAC addresses (BSSIDs). Uses: site surveys, channel selection, identify rogues, verify coverage, troubleshoot interference. Apps: Ekahau, NetSpot, WiFi Analyzer (Android). Cheaper than spectrum analyzer (free-$1000). Use for: channel overlap detection, finding best channel, AP placement, identifying rogue APs. Essential for: wireless deployments, troubleshooting. Real-time view of wireless environment. See what devices see."
  },
  {
    id: 14,
    front: "What are link lights and what do they indicate?",
    back: "Link lights (LEDs) on network devices show status. Solid green: good connection, correct speed. Blinking green: normal activity (data transmission). Amber/orange: connection but issue (wrong speed, duplex mismatch, errors). No light: no connection (cable unplugged, port disabled, device off, cable bad). Speed indicators: color may indicate speed (green=1Gbps, amber=100Mbps). Check first: Physical layer troubleshooting. Both ends should show link light. One side only: cable or far device problem."
  },
  {
    id: 15,
    front: "What is attenuation in cabling?",
    back: "Attenuation is signal loss over distance (signal weakens as it travels). Measured in: decibels (dB). Causes: cable length, poor connectors, cable quality, bends/kinks, interference. Limits: Ethernet 100m (328 ft), fiber varies (single-mode = kilometers, multi-mode = hundreds of meters). Too much attenuation: packets lost, errors, no connectivity. Test with: cable certifier (copper), OTDR/light meter (fiber). Fix: shorter cable, better quality cable, remove damage, use repeater/switch."
  },
  {
    id: 16,
    front: "What is crosstalk in cabling?",
    back: "Crosstalk: signal from one wire pair interferes with another pair in same cable. Types: NEXT (Near-End Crosstalk - measured at same end as source), FEXT (Far-End Crosstalk - opposite end). Causes: untwisted pairs, damaged cable, improper termination, split pairs. Result: data errors, slow speeds, packet loss. Measured: during cable certification. Prevention: proper termination (maintain twists), quality cable, avoid sharp bends. Shielded cable (STP) reduces crosstalk. Twisted pairs exist specifically to minimize crosstalk."
  },
  {
    id: 17,
    front: "What is EMI/RFI interference?",
    back: "EMI (Electromagnetic Interference): interference from electrical sources (motors, transformers, power lines). RFI (Radio Frequency Interference): interference from radio sources (radios, cell towers, wireless devices). Affects: copper cables (not fiber). Symptoms: intermittent errors, packet loss, poor performance, connection drops. Sources: fluorescent lights, motors, microwaves, generators, elevators. Fix: shielded cable (STP), proper grounding, reroute cables away from sources, use fiber (immune to EMI/RFI). Test: spectrum analyzer, RF detector."
  },
  {
    id: 18,
    front: "What is the difference between UTP and STP cable regarding interference?",
    back: "UTP (Unshielded Twisted Pair): no shielding, relies on twisting for interference protection. Cheaper, easier to install, most common (Cat5e, Cat6). Susceptible to: EMI/RFI in high-interference environments. STP (Shielded Twisted Pair): metal shielding around pairs or cable. Better interference protection, more expensive, harder to install (requires grounding), stiffer. Use STP when: industrial environments, high EMI/RFI, near power lines, data centers. Most offices: UTP sufficient. STP not always better: improper grounding makes worse."
  },
  {
    id: 19,
    front: "What causes dirty or scratched fiber optic connectors and how to clean?",
    back: "Dirt/scratches block light transmission (fiber is glass/plastic - microscopic core). Causes: dust, oils from fingers, improper handling, no dust caps. Symptoms: high loss, intermittent connectivity, errors. Clean with: fiber cleaning kit (solvent + wipes), one-click cleaners, compressed air (canned air, not mouth). Never: touch fiber end, blow on fiber, use regular cloth. Prevention: dust caps when disconnected, handle by connector housing. Dirty fiber: most common fiber problem. Clean before troubleshooting."
  },
  {
    id: 20,
    front: "What is the maximum cable length for Ethernet standards?",
    back: "Twisted pair (10/100/1000BASE-T): 100 meters (328 feet) maximum. Includes patch cables both ends. Exceeding: signal degradation, packet loss, no connectivity. Fiber: varies - Multi-mode (MMF): 300-550m depending on speed/type. Single-mode (SMF): 10-40+ km (extremely long). Exceeding distance: use switch/repeater (regenerate signal), use fiber (longer distance), network design consideration. TDR/OTDR: measure actual length. 100m rule: most important Ethernet limitation. Plan network design around this."
  },
  {
    id: 21,
    front: "What is a cable distance limitation issue and how to identify it?",
    back: "Symptoms: intermittent connectivity, slow speeds, packet loss, CRC errors. Over 100m: signal too weak at destination. Identify: 1) Measure cable with TDR/certifier, 2) Calculate: add all segments (wall to patch panel, panel to switch, patch cable), 3) Check during troubleshooting (users work near server but not far away). Fix: add switch midway (regenerates signal), use fiber (longer distance), redesign cable run. Prevention: plan before installation. Include: patch cables in total distance."
  },
  {
    id: 22,
    front: "What are plenum vs non-plenum (PVC) cables?",
    back: "Plenum cable: fire-resistant, low smoke when burning, rated for air-handling spaces (above ceiling, under floors). Required by: building codes in plenum spaces. Expensive. Non-plenum (PVC): standard cable, produces toxic smoke when burning, cheaper, for enclosed spaces only. Use plenum where: HVAC ducts, air circulation spaces, building codes require. Fire safety: plenum prevents toxic smoke spread through building. Marking: CMP (plenum), CM or CMR (non-plenum). Installation: verify code requirements."
  },
  {
    id: 23,
    front: "What are common causes of intermittent cable connectivity?",
    back: "Causes: damaged cable (kinks, bends, crushing), loose connection (bad termination, unplugged slightly), bad port on switch/NIC, EMI/RFI interference, cable distance too long, poor quality cable, environmental (temperature, vibration). Hardest to troubleshoot: works sometimes, not others. Identify: swap cable (does problem follow?), check connections (reseat), move cable away from interference, monitor for patterns (time of day?). Solution often: replace cable (even if tests pass sometimes). Intermittent = physical problem most likely."
  },
  {
    id: 24,
    front: "What do CRC errors indicate?",
    back: "CRC (Cyclic Redundancy Check) errors: frame corruption (data damaged in transmission). Causes: bad cable, EMI/RFI interference, duplex mismatch, bad NIC/port, cable too long, poor terminations. Viewed with: show interface (network devices), netstat -s (computers). Even small number: indicates problems. High CRC errors: serious issue. Fix: replace cable, check duplex settings, move away from interference, check NIC. CRC errors = Layer 1/2 problem. Should be near zero in healthy network."
  },
  {
    id: 25,
    front: "Quick scenario: Device shows no link light. What do you check?",
    back: "Check: 1) Cable plugged in both ends (really!), 2) Check far end device (is it on? Link light on that side?), 3) Try different cable (rule out cable), 4) Try different port (rule out switch port), 5) Check if port disabled in config, 6) Verify port speed/duplex settings, 7) Test with loopback adapter (NIC working?), 8) Check power (PoE device getting power?). Methodical: isolate cable vs port vs device. No link light = Physical layer issue."
  },
  {
    id: 26,
    front: "What is a duplex mismatch and how does it occur?",
    back: "Duplex mismatch: one end full-duplex, other half-duplex. Causes: one side manually set, other auto-negotiates (falls back to half), both manually set wrong, auto-negotiation failure. Symptoms: works but slow, collisions, late collisions, CRC errors, intermittent drops. Modern networks: full-duplex standard (switches). Half-duplex: legacy (hubs). Fix: set both to auto or both manually to full-duplex. Check with: show interface. Mismatch = performance killer. Always match both ends."
  },
  {
    id: 27,
    front: "What are giants and runts in network errors?",
    back: "Giants: frames larger than maximum size (>1518 bytes for Ethernet). Runts: frames smaller than minimum size (<64 bytes). Both invalid frames, discarded. Causes: hardware problems (NIC, cable, switch), driver issues, collisions (runts), malformed packets. Indicate: Physical or Data Link layer problem. Viewed: interface statistics. Should be zero. Even small numbers: investigate. Usually: hardware replacement needed (NIC or cable). Giants/runts = frame size errors."
  },
  {
    id: 28,
    front: "How do you test if a switch port is working?",
    back: "Tests: 1) Check port LED (link light?), 2) Plug in known-good device (laptop), 3) Check show interface status (enabled? Up?), 4) Try different cable, 5) Check VLAN assignment (correct VLAN?), 6) Verify port not shut down, 7) Check port security (MAC limit?), 8) Try loopback adapter, 9) Check errors (show interface - CRC errors?). Process: eliminate cable first (easiest), then port settings, finally port hardware. Bad port: try different port. Document port as bad."
  },
  {
    id: 29,
    front: "What tools are essential for a network technician's toolkit?",
    back: "Must have: Cable tester (wire mapping, continuity), tone generator and probe (cable tracing), loopback adapter (test ports), WiFi analyzer app (wireless), laptop with tools (ping, tracert, etc.), patch cables (various lengths), console cable (device access), crimper and connectors (emergency repairs), cable stripper, screwdrivers. Nice to have: Multimeter, certifier (if doing installations), TDR/OTDR (if managing long runs/fiber), spectrum analyzer (wireless focus). Start basic, add as budget allows."
  },
  {
    id: 30,
    front: "Speed drill: Match tool to purpose - Cable tester, TDR, OTDR, Tone generator, Light meter, Certifier",
    back: "Cable tester: wire mapping/continuity. TDR: locate copper cable faults/distance. OTDR: test fiber, locate fiber faults. Tone generator: trace/identify cables. Light meter: measure fiber optical power. Certifier: verify cable meets performance standards. Know which tool for which job!"
  }
];