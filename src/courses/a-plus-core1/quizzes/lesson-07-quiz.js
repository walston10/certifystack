export const lesson7Quiz = [
  {
    id: 1,
    question: "A technician needs to create network cables for a new office installation. They want to create a standard straight-through cable that will work with modern auto-MDI/MDIX switches. Which wiring standard should they use on both ends of the cable?",
    options: [
      "T568A on one end, T568B on the other end",
      "Either T568A or T568B on both ends (matching)",
      "Only T568B is valid - T568A is obsolete",
      "Random wire order as long as both ends match"
    ],
    correct: 1,
    explanation: "Straight-through cables require the same wiring standard on both ends - either T568A on both ends or T568B on both ends. T568B is more common in the US, but T568A is the international standard. Both are equally valid. The key is consistency on both ends. Modern equipment with auto-MDI/MDIX can work with either standard. A crossover cable (rarely needed now) would use T568A on one end and T568B on the other."
  },
  {
    id: 2,
    question: "A home user has 1 Gbps internet service but is only getting 100 Mbps speeds on their desktop computer. The desktop is connected to the router with a Cat 5e cable that's 50 feet long. What is the most likely cause?",
    options: [
      "Cat 5e cannot support 1 Gbps speeds",
      "The network adapter or router port is negotiating at 100 Mbps instead of 1000 Mbps (Gigabit)",
      "The cable is too long - Cat 5e only works up to 25 feet",
      "The internet service provider is throttling the connection"
    ],
    correct: 1,
    explanation: "Cat 5e supports 1 Gbps (1000BASE-T) up to 100 meters (328 feet), so the cable isn't the issue. The problem is likely speed/duplex negotiation between the network adapter and router/switch. One or both devices may be falling back to 100 Mbps. Check the link speed in network adapter properties (Windows: Network Connections → Adapter properties → Status). Ensure both devices support Gigabit and auto-negotiation is working. Sometimes forcing both to 1 Gbps/full duplex solves the issue."
  },
  {
    id: 3,
    question: "A network installer is running cable through the air return plenum space above a drop ceiling in an office building. What type of cable is required by fire code for this installation?",
    options: [
      "Any Cat 5e cable will work",
      "Plenum-rated cable with fire-resistant jacket (CMP rated)",
      "Outdoor-rated cable",
      "Shielded twisted pair (STP)"
    ],
    correct: 1,
    explanation: "Plenum spaces (air return paths in HVAC systems) require special CMP (Communications Multipurpose Plenum) rated cable. Plenum-rated cable has a fire-resistant jacket (typically FEP or low-smoke PVC) that produces less toxic smoke when burning and is less likely to spread flames. Regular PVC-jacketed cable (CMR or CM rated) releases toxic fumes when burning and is a fire code violation in plenum spaces. Always check local building codes. Plenum cable costs more but is mandatory for safety."
  },
  {
    id: 4,
    question: "A technician is troubleshooting a network connection and uses a cable tester. The tester shows that wires 1, 2, 3, and 6 have continuity but wires 4, 5, 7, and 8 show 'open'. What does this indicate?",
    options: [
      "The cable is perfect for Gigabit networking",
      "The cable will work for 10/100 Mbps but not Gigabit (1000 Mbps), which requires all 8 wires",
      "The cable is completely unusable",
      "This is normal for all Ethernet cables"
    ],
    correct: 1,
    explanation: "10BASE-T and 100BASE-TX (Fast Ethernet) only use 4 wires (pairs 1-2 and 3-6 for transmit/receive). However, 1000BASE-T (Gigabit Ethernet) requires all 8 wires (all 4 pairs) for simultaneous bidirectional communication. A cable with only 4 working wires will negotiate at 100 Mbps maximum. This commonly happens with damaged cables or incorrect terminations. For Gigabit speeds, all 8 wires must have continuity and be properly terminated."
  },
  {
    id: 5,
    question: "A business wants to run Ethernet cable from their main building to a detached warehouse 400 feet away. Cat 6 cable is available. Will this work, and if not, what should they use?",
    options: [
      "Cat 6 will work fine - it supports unlimited distances",
      "Cat 6 has a maximum distance of 100 meters (328 feet) for Ethernet, so they need fiber optic cable or a network extender/switch in between",
      "They just need to use Cat 8 instead",
      "Wireless is the only option for this distance"
    ],
    correct: 1,
    explanation: "All copper Ethernet standards (Cat 5e, Cat 6, Cat 6a, Cat 8) have a maximum distance of 100 meters (328 feet) due to signal attenuation and timing constraints. At 400 feet, they exceed this limit. Solutions include: (1) fiber optic cable (single-mode can go kilometers), (2) install a switch or network extender at the 300-foot mark to regenerate the signal, or (3) use wireless bridge devices. Fiber is the most reliable solution for this distance, though more expensive than copper."
  },
  {
    id: 6,
    question: "A technician needs to connect a cable modem to a wall outlet. The cable coming from the ISP uses what type of connector?",
    options: [
      "RJ-45",
      "F-connector (coaxial)",
      "RJ-11",
      "BNC"
    ],
    correct: 1,
    explanation: "Cable internet (DOCSIS) uses coaxial cable with F-connectors - the same type used for cable TV. The coaxial cable screws onto the cable modem's coax input port. RJ-45 is used for Ethernet (twisted pair). RJ-11 is used for telephone lines (DSL uses this). BNC connectors are older coaxial connectors used in legacy networking (10BASE2) but not for modern cable internet. The cable modem converts the coax signal to Ethernet (RJ-45) for distribution to computers and routers."
  },
  {
    id: 7,
    question: "A network administrator needs to run 10 Gbps Ethernet connections between two switches that are 150 feet apart. What is the minimum cable category required?",
    options: [
      "Cat 5e",
      "Cat 6",
      "Cat 6a (supports 10GBASE-T up to 100 meters)",
      "Cat 3"
    ],
    correct: 2,
    explanation: "10GBASE-T (10 Gigabit Ethernet over twisted pair) requires Cat 6a cabling for the full 100-meter distance. Cat 6 can support 10 Gbps but only up to 55 meters (180 feet), which would work in this case, but Cat 6a is the recommended standard for reliable 10 Gbps deployment. Cat 5e maxes out at 1 Gbps. Cat 8 also supports 10 Gbps but is more expensive and typically used for short data center connections (max 30 meters). For new 10 Gbps installations, Cat 6a is the industry standard."
  },
  {
    id: 8,
    question: "A user plugged an Ethernet cable into their laptop and the link light is orange/amber instead of green. What does this typically indicate?",
    options: [
      "The connection is operating at a lower speed than maximum (likely 100 Mbps instead of 1 Gbps)",
      "The cable is perfect and operating at maximum speed",
      "The laptop is broken",
      "The network is being hacked"
    ],
    correct: 0,
    explanation: "Network adapter LEDs use different colors to indicate status. Green typically indicates Gigabit (1000 Mbps) connection, while amber/orange indicates Fast Ethernet (100 Mbps). No light means no connection. Blinking indicates network activity. This color-coding varies by manufacturer but amber/orange usually signals reduced speed. Check for Cat 5e or better cable, verify both devices support Gigabit, and ensure auto-negotiation is working properly. The connection works but isn't at optimal speed."
  },
  {
    id: 9,
    question: "A technician is terminating a Cat 6 cable with an RJ-45 connector. After crimping, they test the cable and it doesn't work. What is the most common mistake?",
    options: [
      "The cable is too long",
      "The wires weren't fully inserted into the connector before crimping, or the wire order is incorrect",
      "Cat 6 cable cannot use RJ-45 connectors",
      "The crimp tool is backwards"
    ],
    correct: 1,
    explanation: "The most common termination errors are: (1) wires not fully inserted to the front of the connector so the pins don't make contact, (2) incorrect wire order (not following T568A or T568B), (3) too much jacket stripped allowing crosstalk, or (4) wires not arranged flat/aligned before insertion. Always verify wires reach the end of the connector and are in correct order before crimping. Once crimped incorrectly, you must cut off the connector and start over. Visual inspection before crimping saves time and materials."
  },
  {
    id: 10,
    question: "A network uses Cat 6 cabling throughout an office. Users near the elevator and electrical room experience intermittent connectivity issues. What is the likely cause?",
    options: [
      "Cat 6 cable is incompatible with elevators",
      "Electromagnetic interference (EMI) from elevator motors and electrical equipment",
      "The cables are installed backwards",
      "Too many users on the network"
    ],
    correct: 1,
    explanation: "Unshielded twisted pair (UTP) cable like standard Cat 6 is susceptible to electromagnetic interference (EMI) from motors, fluorescent lights, electrical equipment, and power lines. Elevators have large motors that create significant EMI. Solutions include: (1) use STP (shielded twisted pair) cable in high-EMI areas, (2) maintain proper distance from EMI sources (usually 6+ inches from power lines), (3) use fiber optic cable (immune to EMI), or (4) route cables through conduit for shielding. Always separate data and power cables."
  },
  {
    id: 11,
    question: "A technician needs to identify which cable in a bundle of 20 Ethernet cables connects to a specific wall jack. What tool should they use?",
    options: [
      "Multimeter",
      "Cable tester",
      "Tone generator and probe (toner)",
      "Crimping tool"
    ],
    correct: 2,
    explanation: "A tone generator (toner) and probe is designed exactly for this purpose. Connect the tone generator to one end of the cable, then use the probe to detect which cable in the bundle carries the tone signal. The probe makes an audible sound when near the correct cable. This is essential for cable tracing in walls, ceilings, and patch panels. Cable testers verify connectivity but don't identify specific cables. Multimeters test voltage but aren't designed for cable tracing."
  },
  {
    id: 12,
    question: "A small business has a single Cat 6 cable connecting two buildings and wants to run both network connectivity and Power over Ethernet (PoE) to a wireless access point in the second building. Will this work?",
    options: [
      "No - you need separate cables for data and power",
      "Yes - Cat 6 cable supports both data and PoE simultaneously on the same cable",
      "Only if they use Cat 8 cable",
      "PoE only works over fiber optic cable"
    ],
    correct: 1,
    explanation: "PoE (Power over Ethernet) delivers both data and electrical power over the same Cat 5e, Cat 6, or better Ethernet cable. PoE uses the unused wire pairs (or phantom power on data pairs in newer standards) to deliver up to 15.4W (PoE), 30W (PoE+), or 60-90W (PoE++/802.3bt). This is ideal for powering wireless access points, IP cameras, VoIP phones, and other devices without needing separate power outlets. The switch or injector provides the power, and the powered device (PD) receives it."
  },
  {
    id: 13,
    question: "A user's Ethernet connection works but is extremely slow and they see many 'CRC errors' in the network adapter statistics. What is the most likely cause?",
    options: [
      "The internet service is slow",
      "A damaged cable with broken wires, bad terminations, or excessive EMI causing data corruption",
      "Too much RAM in the computer",
      "The computer needs antivirus software"
    ],
    correct: 1,
    explanation: "CRC (Cyclic Redundancy Check) errors indicate corrupted data frames. Causes include: damaged cables with broken or crossed wires, poor terminations, excessive cable length, EMI interference, or duplex mismatch. The receiving device detects corrupted data and requests retransmission, causing slow speeds. Test with a cable tester, try a known-good cable, check for EMI sources, and verify duplex settings match on both ends. Many CRC errors always indicate a physical layer problem - usually the cable."
  },
  {
    id: 14,
    question: "What is the primary difference between Cat 6 and Cat 6a cable?",
    options: [
      "Cat 6a is slightly thicker cable than Cat 6",
      "Cat 6a supports 10 Gbps up to 100 meters, while Cat 6 only supports 10 Gbps up to 55 meters",
      "Cat 6a only works with fiber optic equipment",
      "There is no difference - they're identical"
    ],
    correct: 1,
    explanation: "Cat 6a (augmented) was designed specifically to support 10GBASE-T (10 Gigabit Ethernet) over the full 100-meter distance. Standard Cat 6 can handle 10 Gbps but only to 55 meters due to alien crosstalk (interference between cables). Cat 6a has improved shielding and tighter specifications to eliminate alien crosstalk. Cat 6a cable is typically thicker and less flexible than Cat 6, and costs more. For future-proofing and 10 Gbps deployments, Cat 6a is recommended."
  },
  {
    id: 15,
    question: "A technician needs to run network cable outdoors between two buildings. What type of cable should they use for this installation?",
    options: [
      "Regular indoor Cat 6 cable",
      "Outdoor-rated/direct burial cable with UV-resistant and waterproof jacket, or run indoor cable through conduit",
      "Speaker wire",
      "Coaxial cable only"
    ],
    correct: 1,
    explanation: "Outdoor installations require special considerations: UV resistance (sunlight degrades regular cable jackets), waterproofing, temperature extremes, and physical protection. Use outdoor-rated Ethernet cable with UV-resistant jacket, or run standard indoor cable through weatherproof conduit (PVC or metal). Direct burial cable has additional protection for underground installation. Regular indoor cable will degrade quickly outdoors. For longer runs or areas prone to lightning, fiber optic cable is safer as it's non-conductive and immune to electrical interference."
  }
];