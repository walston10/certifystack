export const lesson7Flashcards = [
  {
    id: 1,
    front: "What are the common categories of twisted pair Ethernet cable?",
    back: "Cat 5e: 1 Gbps, 100m max - Cat 6: 1 Gbps (10 Gbps up to 55m), 100m - Cat 6a: 10 Gbps, 100m - Cat 7: 10 Gbps, shielded - Cat 8: 40 Gbps, 30m (data centers)."
  },
  {
    id: 2,
    front: "What is the maximum distance for twisted pair Ethernet cable?",
    back: "100 meters (328 feet) for Cat 5e, Cat 6, and Cat 6a at their rated speeds. Cat 8 limited to 30 meters. Beyond this distance, signal degrades and requires repeater or switch."
  },
  {
    id: 3,
    front: "What is the difference between UTP and STP cable?",
    back: "UTP (Unshielded Twisted Pair): No shielding, cheaper, most common, adequate for most environments. STP (Shielded Twisted Pair): Foil/braided shielding, reduces EMI/crosstalk, more expensive, needed in high-interference areas."
  },
  {
    id: 4,
    front: "What are the T568A and T568B wiring standards?",
    back: "Pin-out standards for terminating twisted pair cables. T568B most common in US: Orange/White-Orange, Green/White-Blue, Blue/White-Green, Brown/White-Brown. T568A swaps orange and green pairs. Both work, must be consistent."
  },
  {
    id: 5,
    front: "What is a straight-through cable and when is it used?",
    back: "Both ends use same standard (T568A-to-T568A or T568B-to-T568B). Used to connect: computer to switch, switch to router, computer to hub. Most common cable type - connects unlike devices."
  },
  {
    id: 6,
    front: "What is a crossover cable and when is it used?",
    back: "One end T568A, other end T568B. Connects like devices directly: computer to computer, switch to switch, router to router. Largely obsolete due to Auto-MDIX in modern equipment."
  },
  {
    id: 7,
    front: "What is Auto-MDIX?",
    back: "Automatic Medium-Dependent Interface Crossover. Modern network devices automatically detect and adjust for cable type. Makes crossover cables unnecessary - any cable works. Standard on devices made after ~2005."
  },
  {
    id: 8,
    front: "What is coaxial cable and where is it used?",
    back: "Cable with center conductor, insulation, braided shield, outer jacket. Types: RG-6 (cable internet, TV), RG-59 (older CCTV, shorter runs). Center pin carries signal, shield blocks interference."
  },
  {
    id: 9,
    front: "What is the difference between RG-6 and RG-59 coaxial cable?",
    back: "RG-6: Thicker, lower signal loss, longer distances, cable internet/satellite TV, 75 ohm. RG-59: Thinner, higher signal loss, shorter runs, older CCTV systems, being phased out. RG-6 is superior."
  },
  {
    id: 10,
    front: "What are F-connectors used for?",
    back: "Screw-on connectors for coaxial cable (RG-6, RG-59). Used for: cable modems, TV connections, satellite dishes. Either threaded (screw-on) or push-on type. Thread-on provides better connection."
  },
  {
    id: 11,
    front: "What is the difference between single-mode and multimode fiber?",
    back: "Single-mode: Narrow core (8-10 microns), laser light, long distances (40+ km), expensive, yellow jacket. Multimode: Wider core (50-62.5 microns), LED light, short distances (<2 km), cheaper, orange/aqua jacket."
  },
  {
    id: 12,
    front: "What wavelengths do fiber optic cables use?",
    back: "850 nm: Multimode, short range. 1310 nm: Single-mode or multimode, medium range. 1550 nm: Single-mode, long range (least attenuation). Different wavelengths travel different distances efficiently."
  },
  {
    id: 13,
    front: "What are the common fiber optic connector types?",
    back: "LC (Lucent Connector): Small, push-pull, common in modern networks. SC (Subscriber Connector): Square, push-pull, older but reliable. ST (Straight Tip): Round, bayonet twist, legacy. MTRJ: Small, two fibers in one."
  },
  {
    id: 14,
    front: "What is 10BASE-T?",
    back: "Original Ethernet over twisted pair. 10 Mbps, Cat 3 or better cable, 100m max distance, RJ-45 connector. Uses 2 pairs (4 wires). Obsolete but established the standard."
  },
  {
    id: 15,
    front: "What is 100BASE-TX (Fast Ethernet)?",
    back: "100 Mbps Ethernet over twisted pair. Requires Cat 5 or better, 100m max, RJ-45 connector. Uses 2 pairs (4 wires). Common in older networks, being replaced by Gigabit."
  },
  {
    id: 16,
    front: "What is 1000BASE-T (Gigabit Ethernet)?",
    back: "1 Gbps (1000 Mbps) over twisted pair. Requires Cat 5e or better, 100m max, RJ-45 connector. Uses all 4 pairs (8 wires). Current standard for wired networks."
  },
  {
    id: 17,
    front: "What is 10GBASE-T?",
    back: "10 Gbps Ethernet over twisted pair. Requires Cat 6a or better for 100m. Cat 6 works up to 55m. RJ-45 connector, uses all 4 pairs. Used in data centers and high-performance networks."
  },
  {
    id: 18,
    front: "What Ethernet standards use fiber optic cable?",
    back: "1000BASE-SX: Multimode, 850nm, up to 550m. 1000BASE-LX: Single-mode, 1310nm, up to 10km. 10GBASE-SR: Multimode, short range. 10GBASE-LR: Single-mode, long range up to 10km. Many others for different needs."
  },
  {
    id: 19,
    front: "What tool is used to terminate twisted pair cable with RJ-45 connectors?",
    back: "Crimping tool (crimper). Presses connector pins into cable wires to make electrical connection. Different crimpers for different connector types (RJ-45, RJ-11, coax)."
  },
  {
    id: 20,
    front: "What does a cable tester check?",
    back: "Wire mapping (correct pin-outs) - Continuity (all wires connected) - Opens (broken wires) - Shorts (wires touching) - Crossed wires - Split pairs. Essential for verifying cable installation."
  },
  {
    id: 21,
    front: "What is a punch-down tool used for?",
    back: "Inserts wires into IDC (Insulation Displacement Connector) blocks like patch panels, keystones, 110 blocks. Cuts excess wire and seats wire in one motion. Different blades for 110 vs 66 blocks."
  },
  {
    id: 22,
    front: "What is a tone generator and probe (toner) used for?",
    back: "Traces and identifies cables. Tone generator attached to one end sends signal. Probe (toner) detects signal at other end or along cable run. Essential for identifying specific cables in bundles."
  },
  {
    id: 23,
    front: "What is a cable stripper used for?",
    back: "Removes outer jacket of cable without damaging inner wires. Adjustable depth guards prevent cutting too deep. Essential for preparing cable for termination. Different types for twisted pair vs coax."
  },
  {
    id: 24,
    front: "What is a loopback plug/adapter?",
    back: "Connects transmit pins to receive pins to test network port. Computer sends data that loops back to itself. Tests: NIC functionality, cable ports, troubleshooting. Available for RJ-45, fiber, serial ports."
  },
  {
    id: 25,
    front: "What is plenum-rated cable?",
    back: "Cable with fire-resistant jacket that produces less smoke and toxic fumes. Required for installation in plenum spaces (air handling spaces above drop ceilings, below floors). More expensive than non-plenum (PVC jacket)."
  },
  {
    id: 26,
    front: "What causes crosstalk in twisted pair cables?",
    back: "Signal from one wire pair interferes with another. Caused by: untwisting wires too much during termination, damaged cable, poor quality cable, EMI. Twisting pairs together reduces crosstalk by canceling interference."
  },
  {
    id: 27,
    front: "What is attenuation in network cables?",
    back: "Signal loss over distance. Longer cable = weaker signal. Each cable type has maximum distance before signal too weak. Solution: shorter cable runs, higher quality cable, repeaters, or switches to regenerate signal."
  },
  {
    id: 28,
    front: "What is EMI/RFI and how does it affect cables?",
    back: "Electromagnetic Interference/Radio Frequency Interference. Disrupts cable signals from: power lines, motors, fluorescent lights, radio transmitters. Solutions: shielded cable (STP), proper cable routing away from sources, fiber optic (immune to EMI)."
  },
  {
    id: 29,
    front: "What is PoE (Power over Ethernet)?",
    back: "Delivers electrical power and data over same Ethernet cable. Standards: PoE (802.3af, 15.4W), PoE+ (802.3at, 30W), PoE++ (802.3bt, 60-100W). Powers: IP phones, wireless APs, cameras. Requires PoE switch or injector."
  },
  {
    id: 30,
    front: "What is the difference between patch cable and solid core cable?",
    back: "Patch cable: Stranded copper wires, flexible, used for patch cords (short runs, movable connections). Solid core: Single solid wire per conductor, stiffer, used for permanent installation in walls. Each requires different termination."
  }
];