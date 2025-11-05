// Quiz for Lesson 29: Cable Testing and Physical Layer Issues

export const lesson29Quiz = [
  {
    id: 1,
    question: "A network technician tests a newly installed Cat6 cable run using a cable tester. The tester shows that pins 1, 2, 3, and 6 have continuity, but pins 4, 5, 7, and 8 show 'open.' What does this indicate?",
    options: [
      "The cable is perfect and ready for use",
      "Four of the eight wires are not making contact—likely due to improper termination or broken wires in the cable",
      "This is normal for Cat6 cables",
      "The cable tester is malfunctioning"
    ],
    correct: 1,
    explanation: "Cable tester basics: tests each wire for continuity (complete circuit), detects opens (broken wire, not connected), shorts (wires touching), miswires (wrong pin mapping), split pairs (wires from different pairs used). Open circuit: wire not connected at one or both ends, common causes: improper crimp/punch-down, broken wire inside cable, connector not fully seated, physical damage. Pin functions: 1,2 = TX+/TX- (transmit pair orange), 3,6 = RX+/RX- (receive pair green), 4,5 = blue pair, 7,8 = brown pair. Ethernet usage: 10/100BASE-T uses pins 1,2,3,6 only (2 pairs), 1000BASE-T uses all 8 pins (4 pairs—Gigabit). Impact: cable might work at 10/100 Mbps (uses only 1,2,3,6), will NOT work at Gigabit (requires all 8 pins). Solution: re-terminate connectors, verify proper crimping/punch-down, check for cable damage, replace if necessary."
  },
  {
    id: 2,
    question: "A technician uses a tone generator and probe (toner) to identify a specific cable in a bundle of 50 cables. They connect the tone generator to one end of the cable and use the probe on the other end. What is the primary purpose of this tool?",
    options: [
      "To measure cable length and locate breaks",
      "To trace and identify specific cables by generating a tone on one end and detecting it with a probe on the other end",
      "To certify cable performance at rated speeds",
      "To test for electromagnetic interference"
    ],
    correct: 1,
    explanation: "Tone generator and probe (fox and hound): traces cables through walls, ceilings, bundles, identifies which cable is which, doesn't test performance (just identification). Usage: 1) Connect tone generator to cable at one end (RJ45, alligator clips, bare wire), 2) Generator creates audio tone on wires, 3) Probe detects tone at other end (audible beep/tone increases near correct cable), 4) Touch probe to each cable until loudest tone found. Use cases: 1) Label cables during installation, 2) Identify unmarked cables, 3) Trace cables through walls/ceilings, 4) Find cable endpoints, 5) Verify patch panel connections. Limitations: doesn't test cable quality, can't detect performance issues, proximity detection (probe picks up nearby cables—be precise). Alternative names: toner/probe, fox and hound, cable tracer. Essential tool for: cable management, moves/adds/changes, troubleshooting physical connections, retrofits in existing buildings."
  },
  {
    id: 3,
    question: "A fiber optic cable installation between two buildings shows high signal loss. A technician uses an OTDR (Optical Time Domain Reflectometer) and discovers a significant reflection spike at 450 meters. What does this indicate?",
    options: [
      "The fiber is working perfectly",
      "There is a fault in the fiber at 450 meters—likely a break, sharp bend, dirty connector, or bad splice",
      "The fiber needs to be replaced entirely",
      "OTDR readings are always inaccurate"
    ],
    correct: 1,
    explanation: "OTDR (Optical Time Domain Reflectometer): tests fiber optic cables, sends light pulses down fiber, measures reflected light, locates faults/breaks by time (distance = time × speed of light in fiber). OTDR displays: distance (horizontal axis), power loss (vertical axis—dB), events (connectors, splices, breaks, bends). Interpreting OTDR traces: Gradual slope (normal attenuation over distance—acceptable), Sharp spike up (reflection—connector, mechanical splice, break), Sharp drop (loss—bad splice, macro-bend), End reflection (far end connector or break). Reflection at specific distance (450m): fault at that location, investigate: physical inspection at 450m point, check for sharp bends (>bend radius), connector cleaning, splice inspection, possible cable break. OTDR advantages: pinpoints fault location (not just 'cable broken'), measures total loss, documents fiber quality. Fiber testing tools: OTDR (location and characterization), Light meter/source (basic loss measurement), Visual fault locator (red laser shows breaks/bends). Critical for: long fiber runs (can't easily trace by hand), troubleshooting intermittent issues, post-installation verification."
  },
  {
    id: 4,
    question: "A network port shows link lights blinking amber/orange instead of solid green. Users report slow speeds and intermittent connectivity. What is the most likely cause indicated by the amber light?",
    options: [
      "The port is operating normally at Gigabit speed",
      "There is a speed/duplex mismatch, cable issue, or the link is operating at a lower speed than designed (often 100 Mbps instead of 1 Gbps)",
      "The port is disabled",
      "Excessive bandwidth usage"
    ],
    correct: 1,
    explanation: "Network port LED indicators (common interpretation—varies by vendor): Solid green: good link, correct speed (typically Gigabit), Blinking green: activity (data transmission—normal), Amber/orange: issue (speed mismatch, half-duplex, 100 Mbps instead of 1 Gbps, errors), No light: no link (cable disconnected, port disabled, device powered off). Amber light troubleshooting: 1) Check speed/duplex settings (should be auto-negotiate or both ends matching), 2) Test cable (replace with known-good cable), 3) Check cable category (Cat5e minimum for Gigabit), 4) Verify port configuration (not hard-coded to 100 Mbps), 5) Check for physical damage (bent pins, dirty connectors). Speed/duplex mismatch: one side auto-negotiate, other side hard-coded (common mistake), both sides hard-coded but different settings, results in errors, collisions, slow performance. Resolution: set both sides to auto-negotiate (best practice), or match settings manually (100 full/full or 1000 full/full). LED diagnostics: first visual indicator of problems, quick health check, guides deeper troubleshooting."
  },
  {
    id: 5,
    question: "A cable certification tester reports that a newly installed Cat6 cable fails certification at Gigabit speeds, showing high NEXT (Near-End Crosstalk). What is the most likely installation issue?",
    options: [
      "The cable is too short",
      "The cable pairs are untwisted too much during termination or there is a split pair wiring error",
      "The cable is the wrong color",
      "The cable needs more bandwidth"
    ],
    correct: 1,
    explanation: "Cable certification testing: verifies cable meets performance standards (TIA/EIA specifications), tests: attenuation (signal loss), NEXT (Near-End Crosstalk), return loss, propagation delay, length. NEXT (Near-End Crosstalk): interference between wire pairs measured at transmitting end, caused by: pairs untwisted too much (>0.5 inch for Cat6), split pairs (wires from different pairs used for pins 1-2 or 3-6), poor quality connectors/jacks, damaged cable. Why twists matter: twisted pairs cancel electromagnetic interference (balanced transmission), untwisting exposes wires to crosstalk, tighter twists = better performance (Cat6 tighter than Cat5e). Split pairs: incorrect wiring using wires from different pairs, physically connected but electrically wrong, passes continuity test but fails performance test. Example: correct: 1=O/W, 2=O (orange pair), incorrect split: 1=O/W, 2=G (orange-green—different pairs). Detection: cable tester shows continuity but certifier fails NEXT, TDR shows issue at connector/termination point. Fix: re-terminate keeping pairs intact, minimize untwisting, follow T568A or T568B standard precisely, use quality connectors."
  },
  {
    id: 6,
    question: "A technician uses a TDR (Time Domain Reflectometer) on a suspected damaged cable. The TDR shows a fault at 75 feet. What information does the TDR provide that a basic cable tester cannot?",
    options: [
      "TDR only tests fiber, not copper cables",
      "TDR measures cable length and precisely locates faults (breaks, shorts, impedance changes) by distance from the tester",
      "TDR certifies cable performance",
      "TDR tests wireless signals"
    ],
    correct: 1,
    explanation: "TDR (Time Domain Reflectometer): sends electrical pulse down cable, measures reflections from impedance changes, calculates distance to fault (time × velocity of propagation). TDR capabilities: measure cable length (accurate to inches), locate opens (broken wires) at specific distance, locate shorts (wires touching) at specific distance, identify impedance mismatches, detect crimps/damage. How it works: pulse travels at known speed (~2/3 speed of light in copper), reflection returns when hitting impedance change, TDR calculates: distance = (time × velocity) / 2. TDR display: horizontal axis = distance, vertical axis = impedance/reflection, spikes indicate events (connectors, faults). Use cases: 1) Long cable runs (can't visually trace), 2) In-wall cables (locate break for repair), 3) Troubleshooting intermittent issues (find damaged sections), 4) Verifying claimed cable lengths. TDR vs cable tester: cable tester: pass/fail continuity, which wires are open/short, TDR: exactly where the problem is (feet/meters from tester). Fiber equivalent: OTDR (Optical TDR) uses light pulses, same principle. Essential for: outside plant (OSP) installations, industrial environments, troubleshooting after physical damage."
  },
  {
    id: 7,
    question: "A warehouse experiences intermittent network connectivity issues near heavy machinery and variable frequency drives (VFDs). A technician suspects electromagnetic interference. What cable solution would best mitigate this issue?",
    options: [
      "Use longer cables to avoid the machinery",
      "Use shielded twisted pair (STP) cable or fiber optic cable which is immune to EMI",
      "Use standard UTP and hope for the best",
      "Lower the network speed to reduce interference"
    ],
    correct: 1,
    explanation: "EMI/RFI (Electromagnetic Interference / Radio Frequency Interference): external electrical noise disrupting network signals, sources: motors, generators, welders, variable frequency drives, fluorescent lights, microwaves, radio transmitters. Effects on copper cables: signal degradation, increased error rates, intermittent connectivity, reduced speeds, packet loss. Mitigation strategies: 1) Shielded twisted pair (STP/FTP): metal shielding around pairs or overall cable, grounds interference, requires proper grounding at both ends, more expensive than UTP. 2) Fiber optic cable (best solution): uses light not electricity, completely immune to EMI/RFI, no ground loops, ideal for high-EMI environments, more expensive installation. 3) Physical separation: maintain distance from EMI sources, route cables away from electrical conduit/machinery, cross power lines at 90° (minimize parallel runs). 4) Conduit: metal conduit provides shielding, proper grounding required. When to use each: UTP: normal office environments, no significant EMI, cost-effective. STP: moderate EMI environments, industrial areas, near power lines. Fiber: high EMI environments (factories, welding shops), long distances, complete isolation needed. Installation notes: STP requires proper grounding (or makes interference worse), UTP easier to install and terminate, fiber requires specialized tools/skills."
  },
  {
    id: 8,
    question: "A technician checks network port statistics on a switch and notices high CRC (Cyclic Redundancy Check) errors on one port. What is the most likely physical layer cause?",
    options: [
      "Software configuration issues",
      "Bad cable, damaged connectors, EMI, or duplex mismatch causing corrupted frames",
      "DNS server problems",
      "Insufficient bandwidth"
    ],
    correct: 1,
    explanation: "CRC errors: frames failed error detection check, data corrupted in transmission, receiving device discards frame, requires retransmission (performance impact). Common causes: 1) Bad cables (damaged, wrong category, excessive length), 2) Faulty connectors (bent pins, dirty contacts, improper termination), 3) EMI/RFI (external interference), 4) Duplex mismatch (one side full, other half—causes collisions), 5) Failing NIC or switch port. Switch interface statistics: show interface status, CRC errors, input errors, output errors, collisions, runts/giants. Troubleshooting approach: 1) Identify affected port(s) (single port vs multiple), 2) Swap cable (test with known-good cable), 3) Check connectors (reseat, clean, inspect), 4) Verify duplex settings (both auto or both matching), 5) Test different switch port (isolates port vs cable), 6) Check EMI sources (nearby electrical equipment), 7) Replace NIC if cable/port good. Acceptable error rates: near zero in healthy network, occasional errors acceptable (cosmic rays, etc.), sustained errors indicate problem, >1% error rate significant issue. Prevention: quality cables, proper installation, avoid EMI sources, cable management (prevent stress/damage), regular monitoring (catch degrading cables early)."
  },
  {
    id: 9,
    question: "A fiber optic link between buildings shows acceptable signal levels but intermittent connectivity during certain times of day. Investigation reveals that sunlight shining on the fiber cable during afternoon causes expansion/contraction. What fiber optic phenomenon is causing the issue?",
    options: [
      "Fiber optic cables don't react to temperature changes",
      "Macro-bending or micro-bending due to temperature-induced physical stress on the fiber causing signal loss",
      "The fiber optic cable is too short",
      "DNS resolution issues"
    ],
    correct: 1,
    explanation: "Fiber optic bending issues: Macro-bending: visible bends exceeding minimum bend radius, causes light to escape fiber core, significant signal loss, permanent damage possible. Micro-bending: microscopic bends/deformations in fiber, caused by pressure points, temperature changes (expansion/contraction), improper installation, cumulative signal loss. Minimum bend radius: typically 10× cable diameter for installation, 20× for long-term installation, tighter bends = more loss. Temperature effects: fiber cable expands/contracts with temperature, creates stress points, slack management important, aerial cables especially vulnerable. Troubleshooting fiber bending: 1) OTDR testing (shows loss at specific points), 2) Visual inspection (look for tight bends, stress points), 3) Temperature correlation (problem during specific conditions?), 4) Slack management (provide service loops, strain relief). Solutions: 1) Reroute cable (avoid tight bends), 2) Proper slack management (service loops, expansion joints), 3) Protection from environmental factors (conduit, temperature-controlled environments), 4) Use proper mounting hardware (avoid pinch points). Fiber advantages: immune to EMI, long distances, high bandwidth. Fiber disadvantages: sensitive to bending, more expensive, requires specialized tools/skills, susceptible to physical damage."
  },
  {
    id: 10,
    question: "A technician uses a multimeter to test a suspected cable issue. The multimeter shows continuity on all wires, but the cable still doesn't work. What limitation of multimeter testing explains this?",
    options: [
      "Multimeters are completely useless for cable testing",
      "Multimeters only test for electrical continuity, not cable performance, impedance, or high-frequency characteristics needed for data transmission",
      "The multimeter is broken",
      "Continuity always guarantees the cable will work"
    ],
    correct: 1,
    explanation: "Multimeter limitations for network cables: tests DC continuity only (is there a complete circuit?), doesn't test: AC characteristics (signal integrity at MHz frequencies), impedance matching (critical for data transmission), crosstalk between pairs, attenuation at operating frequencies, proper pair twisting. Multimeter useful for: detecting opens (broken wires), detecting shorts (wires touching), identifying which wire is which (toning with tone generator), testing power circuits (PoE voltage). Why continuity ≠ working cable: data transmission requires: proper impedance (100 ohms for twisted pair), maintained twists (crosstalk prevention), appropriate attenuation, split pairs fail data but pass continuity, frequency-dependent characteristics (MHz range). Proper cable testing hierarchy: 1) Visual inspection (obvious damage, proper termination), 2) Cable tester (continuity, wire mapping, opens/shorts), 3) Qualification tester (can it support specific speed?), 4) Certification tester (does it meet category specifications?). When to use each: multimeter: power testing, basic troubleshooting, cable tester: installation verification, basic pass/fail, certifier: new installations, warranty requirements, guarantees performance. Professional installations: require certification (documentation, warranty, proof of compliance), basic testers insufficient."
  },
  {
    id: 11,
    question: "A network installation uses 500-foot cable runs from the IDF to distant workstations. Users at the far end experience no connectivity. Cable tests show continuity. What is the most likely issue?",
    options: [
      "DNS server misconfiguration",
      "Cable exceeds the maximum 100-meter (328-foot) Ethernet distance limitation for copper twisted pair",
      "Wrong subnet mask configuration",
      "Firewall blocking traffic"
    ],
    correct: 1,
    explanation: "Ethernet copper cable distance limits: 10/100/1000BASE-T: 100 meters (328 feet) maximum channel, includes 90m permanent link + 10m patch cords, based on signal attenuation and timing, exceeding causes: no link (complete failure), intermittent connectivity, slow speeds, high error rates. Why 100m limit: signal attenuation (weakens over distance), propagation delay (timing critical for collision detection—10BASE-T/100BASE-TX), reflections and crosstalk increase. Measuring channel vs permanent link: channel: patch panel to jack including patch cords (100m max), permanent link: cable in walls (90m max, allows 10m for patches). Solutions for long distances: 1) Switch/repeater (regenerates signal, adds another 100m segment), 2) Fiber optic (single-mode: 10+ km, multi-mode: 300-2000m depending on type), 3) Ethernet extender (proprietary, varies by product), 4) Wireless bridge. Planning considerations: measure cable routes (straight-line ≠ cable path—account for routing), include vertical runs (risers in buildings), plan for patch cord lengths, add switches at midpoints if needed. 500-foot run: requires switch/repeater at ~200-250 feet, or fiber optic cable instead of copper. Other distance-related issues: PoE (power over Ethernet) maximum distance also 100m, voice/data both affected, certifiers detect over-length cables."
  },
  {
    id: 12,
    question: "A technician cleans fiber optic connectors before making connections. What is the primary reason fiber connectors must be kept clean?",
    options: [
      "Cleaning is just for appearance",
      "Dirt, dust, and oil on fiber connectors cause signal loss, reflections, and can permanently damage fiber end-faces",
      "Fiber connectors never need cleaning",
      "Cleaning only matters for multi-mode fiber"
    ],
    correct: 1,
    explanation: "Fiber optic connector cleanliness critical: microscopic contamination (dust, oil, dirt) significantly affects performance. Effects of contamination: signal loss (light blocked/scattered), back-reflection (light bounced back causes errors), permanent damage (debris scratches fiber end-face), intermittent issues (inconsistent contact). Fiber core size: single-mode: 9 microns (μm) diameter, multi-mode: 50 or 62.5 μm, human hair: ~75 μm, dust particle: 5-10 μm. One dust particle can block significant light. Cleaning procedures: 1) Inspect (fiber microscope or video scope—magnify 200-400×), 2) Clean dry (lint-free wipes, compressed air—canned only), 3) Clean wet if needed (isopropyl alcohol 99%, fiber cleaning solution), 4) Inspect again (verify clean), 5) Install dust caps immediately. Common mistakes: touching fiber end-face (skin oils contaminate), using compressed shop air (contains moisture/oil), skipping inspection (assume clean), reusing dirty connectors. Cleaning tools: lint-free wipes (Kim-wipes), fiber cleaning solution/alcohol, fiber cleaning cassettes (click-style cleaners), fiber microscope/scope (inspection). When to clean: before every connection (even new patch cords can have contamination), after disconnection (dust settles immediately), during troubleshooting (eliminate as variable). Professional fiber techs: inspect every connector, 'clean then connect' motto, document with scope images."
  },
  {
    id: 13,
    question: "A switch port shows thousands of collisions in its statistics. The network uses modern switches (not hubs) in a star topology. What is the most likely cause of these collisions?",
    options: [
      "Collisions are normal on switched networks",
      "Duplex mismatch—one side configured for half-duplex while the other expects full-duplex",
      "Too much bandwidth usage",
      "DNS problems"
    ],
    correct: 1,
    explanation: "Collisions on switched networks: should be ZERO (switches eliminate collision domains), presence indicates: duplex mismatch (most common), or hub still in use (replace with switch). Duplex mismatch scenario: Switch port: auto-negotiate or hard-coded full-duplex, Client NIC: hard-coded half-duplex (or vice versa). Result: switch expects full-duplex (no collision detection), client uses half-duplex (expects collisions), client detects collisions when switch transmits during client transmission, massive performance degradation (50-90% throughput loss). Symptoms: high collision count, CRC errors, late collisions, slow performance, intermittent connectivity. Auto-negotiation failures: one side auto, other hard-coded (auto-negotiate defaults to half-duplex), both sides should be auto-negotiate (best practice), or both sides manually matched. Troubleshooting: 1) Check duplex settings (show interface on switches, device manager/driver settings on clients), 2) Set both to auto-negotiate, 3) If manual required, match exactly (1000/full with 1000/full), 4) Verify with switch statistics (collisions should drop to zero). Speed/duplex best practices: always use auto-negotiate unless specific reason not to, document any manual settings, verify settings after changes, monitor collision counters. Historical note: collisions normal on hubs (shared medium, CSMA/CD), switches use dedicated segments (no shared medium, full-duplex capable), modern networks should have zero collisions."
  },
  {
    id: 14,
    question: "A network technician encounters a cable labeled 'Cat5e' that consistently fails Gigabit speed certification testing. Physical inspection reveals it's actually a Cat3 cable mislabeled. What characteristic of Cat3 prevents Gigabit speeds?",
    options: [
      "Cat3 has the same specifications as Cat6",
      "Cat3 is rated for only 10 Mbps (voice-grade), lacks the twisting and specifications required for 1000BASE-T (Gigabit)",
      "Cat3 works fine for Gigabit Ethernet",
      "Only the color prevents Gigabit speeds"
    ],
    correct: 1,
    explanation: "Cable category specifications: Cat3: 10 Mbps, 16 MHz bandwidth, voice/10BASE-T, loose twists. Cat5: 100 Mbps, 100 MHz, Fast Ethernet, obsolete. Cat5e: 1000 Mbps (Gigabit), 100 MHz, better twist specifications, current standard. Cat6: 1000 Mbps (10G to 55m), 250 MHz, tighter twists, thicker. Cat6a: 10 Gbps full 100m, 500 MHz, shielded recommended. Cat7/Cat8: specialized high-speed (40G+), require special connectors. What makes higher categories work: tighter twisting (reduces crosstalk), better insulation, higher frequency support, tighter manufacturing tolerances, better connectors. Physical differences: Cat5e vs Cat3: visible twist tightness, printing on jacket (category marking), thickness (higher = often thicker), crosstalk performance. Identifying cable category: printed on jacket (look closely), color not reliable (Cat5e can be any color), certification tester (definitive), if uncertain, test before deployment. Common mistakes: assuming all twisted pair is Cat5e+, using old cables (Cat3/5 from 1990s) for modern networks, not verifying cable before installation. Impact of wrong cable: may work at lower speeds (10/100 Mbps), fails at designed speed (Gigabit), high error rates, intermittent issues, certification failures. Best practice: verify cable category before installation, properly label cables, maintain standards (don't mix categories), replace old infrastructure."
  },
  {
    id: 15,
    question: "A technician uses a loopback adapter (loopback plug) to test a network interface card (NIC). The loopback test fails. What does this diagnostic result indicate?",
    options: [
      "The network cable is faulty",
      "The NIC itself is likely faulty since the loopback test eliminates cable and external network as variables",
      "The switch port is misconfigured",
      "The DHCP server is down"
    ],
    correct: 1,
    explanation: "Loopback testing: isolates problem to specific component, eliminates external variables (cables, switches, servers). Loopback adapter: physical plug, connects transmit to receive (TX to RX), allows NIC to test itself, data sent is immediately received. Types: Physical loopback: plug that crosses transmit/receive pins (pins 1-3, 2-6 for Ethernet), Virtual loopback: software test (tests NIC driver, not physical hardware). Loopback test procedure: 1) Remove network cable, 2) Insert loopback adapter/plug, 3) Run diagnostic software (ping 127.0.0.1 for software loopback, vendor tools for physical), 4) Interpret results: pass = NIC hardware functional, fail = NIC hardware faulty. What loopback tests: NIC transmit circuitry, NIC receive circuitry, MAC layer functionality, physical layer electronics. What loopback doesn't test: external cable plant, switch ports, network configuration (IP, DNS, etc.), driver configuration issues (can show link but config wrong). Troubleshooting strategy: Start broad (can device communicate?), narrow down (physical layer, data link, network layer), isolate component (loopback removes external factors), replace/repair faulty component. Use cases: 1) New NIC installation verification, 2) Intermittent NIC issues, 3) Isolating NIC vs network problems, 4) Warranty claims (prove NIC fault vs network issue), 5) Pre-deployment testing. Diagnostic value: failed loopback = replace NIC (clearly faulty), passed loopback = problem elsewhere (cable, switch, configuration)."
  }
];

// Export for use in quiz component
export default lesson29Quiz;