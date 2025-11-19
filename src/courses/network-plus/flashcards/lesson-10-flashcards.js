// Flashcards for Lesson 10: Ethernet Standards and Cabling

export const lesson10Flashcards = [
  {
    id: 1,
    front: "Cat 5e speed and distance?",
    back: "Up to 1 Gbps, 100 meters max. Most common for home/small office."
  },
  {
    id: 2,
    front: "Cat 6a vs Cat 6?",
    back: "Cat 6a: 10 Gbps for full 100m. Cat 6: 10 Gbps only to 55m. 6a is data center standard."
  },
  {
    id: 3,
    front: "Cat 8 characteristics?",
    back: "40 Gbps speed, shortest distance (30m only). For short data center connections between racks."
  },
  {
    id: 4,
    front: "T568B wiring order?",
    back: "1-OW, 2-O, 3-GW, 4-B, 5-BW, 6-G, 7-BrW, 8-Br. Mnemonic: Orange Orange Green Blue-Blue Green Brown Brown."
  },
  {
    id: 5,
    front: "UTP vs STP cable?",
    back: "UTP: no shielding, most offices. STP: foil/braided shielding, better EMI/RFI protection, high-interference environments."
  },
  {
    id: 6,
    front: "Straight-through vs crossover cable?",
    back: "Straight-through: different devices (PC to switch). Crossover: same devices (switch to switch). Auto-MDIX makes crossover mostly obsolete."
  },
  {
    id: 7,
    front: "Max copper Ethernet distance?",
    back: "100 meters (328 ft) for Cat 5e/6/6a. Cat 8 only 30m. Beyond 100m need fiber or repeater."
  },
  {
    id: 8,
    front: "Single-mode fiber (SMF)?",
    back: "Thin core (9 microns), laser light, 100+ km distance. ISP backbones, building-to-building. Usually yellow jacket."
  },
  {
    id: 9,
    front: "Multi-mode fiber (MMF)?",
    back: "Thicker core (50/62.5 microns), LED light, up to 2 km. Data centers, campus networks. Orange/aqua jacket."
  },
  {
    id: 10,
    front: "Most common fiber connector?",
    back: "LC (Lucent/Little Connector). Small form-factor, push-pull latching. Found on most switches, routers, SFPs."
  },
  {
    id: 11,
    front: "SC fiber connector?",
    back: "Subscriber/Square Connector. Push-pull, square shape. Larger than LC, common in older equipment and telecom."
  },
  {
    id: 12,
    front: "ST fiber connector?",
    back: "Straight Tip. Round, bayonet twist-lock (like BNC). Older standard, legacy systems, industrial."
  },
  {
    id: 13,
    front: "What is 1000BASE-T?",
    back: "Gigabit Ethernet over copper twisted pair. 1000 Mbps, Cat 5e or better, 100m max."
  },
  {
    id: 14,
    front: "What is 10GBASE-T?",
    back: "10 Gigabit Ethernet over copper. Requires Cat 6a for 100m. Cat 6 only to 55m."
  },
  {
    id: 15,
    front: "What is 1000BASE-SX?",
    back: "Gigabit over multi-mode fiber, short wavelength (850nm), LED light. 220-550m range."
  },
  {
    id: 16,
    front: "What is 1000BASE-LX?",
    back: "Gigabit over single-mode fiber, long wavelength (1310nm), laser light. 5-10 km range."
  },
  {
    id: 17,
    front: "What is an SFP module?",
    back: "Small Form-Factor Pluggable transceiver. Hot-swappable, converts electrical to optical. Up to 1 Gbps."
  },
  {
    id: 18,
    front: "SFP vs SFP+?",
    back: "SFP: up to 1 Gbps. SFP+: up to 10 Gbps. Same physical size. SFP+ in SFP slot runs at 1 Gbps only."
  },
  {
    id: 19,
    front: "What is a media converter?",
    back: "Converts one media type to another, usually fiber to copper or vice versa."
  },
  {
    id: 20,
    front: "What is RG-6 coax used for?",
    back: "Cable modems, cable/satellite TV. Better shielding than RG-59, modern broadband standard."
  },
  {
    id: 21,
    front: "What is plenum-rated cable?",
    back: "Fire-resistant jacket, minimal toxic smoke. Required by code for air circulation spaces (above ceilings, below floors)."
  },
  {
    id: 22,
    front: "Why not standard PVC in plenum?",
    back: "PVC releases toxic smoke when burned. In air circulation spaces, smoke spreads through building ventilation. Fire code violation."
  },
  {
    id: 23,
    front: "What does Auto-MDIX do?",
    back: "Automatically detects and adjusts to cable type (straight-through or crossover). Eliminates need for crossover cables."
  },
  {
    id: 24,
    front: "8 wires in twisted pair organized how?",
    back: "4 twisted pairs: Orange, Green, Blue, Brown. Each pair twisted together to reduce EMI and crosstalk."
  },
  {
    id: 25,
    front: "Why twist wire pairs?",
    back: "Reduces EMI from external sources and crosstalk between pairs. More twists/inch = better performance/higher category."
  },
  {
    id: 26,
    front: "Common fiber wavelengths?",
    back: "850nm (multi-mode, short), 1310nm (single-mode, medium), 1550nm (single-mode, long). All infrared, invisible."
  },
  {
    id: 27,
    front: "What is QSFP?",
    back: "Quad SFP with 4 channels. 40 Gbps (4x10G) or 100 Gbps. High-speed data center interconnects."
  },
  {
    id: 28,
    front: "Why is fiber immune to EMI?",
    back: "Uses light signals not electrical. Light unaffected by electromagnetic fields, so completely immune to EMI/RFI."
  },
  {
    id: 29,
    front: "What is MTRJ connector?",
    back: "Mechanical Transfer Registered Jack. Small form-factor duplex (two fibers), push-pull. Less common than LC."
  },
  {
    id: 30,
    front: "First check for 'no connectivity'?",
    back: "Physical layer: cable seated properly? Damaged cable/connectors? Link lights on? Correct cable type? Physical = 50%+ of problems."
  }
];

export default lesson10Flashcards;