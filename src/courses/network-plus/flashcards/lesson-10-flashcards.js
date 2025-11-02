// Flashcards for Lesson 10: Ethernet Standards and Cabling

export const lesson10Flashcards = [
  {
    id: 1,
    front: "What is the maximum speed and distance for Cat 5e cable?",
    back: "Cat 5e supports up to 1 Gbps (Gigabit Ethernet) at a maximum distance of 100 meters (328 feet). It's the most common cable type for home and small office networks."
  },
  {
    id: 2,
    front: "What makes Cat 6a cable different from regular Cat 6?",
    back: "Cat 6a ('augmented') can run 10 Gbps for the full 100 meters, while regular Cat 6 can only do 10 Gbps up to 55 meters. Cat 6a is the standard for data centers requiring 10 Gigabit speeds."
  },
  {
    id: 3,
    front: "What are the characteristics of Cat 8 cable?",
    back: "Cat 8 is the newest, fastest Ethernet cable supporting 40 Gbps speeds. However, it has the shortest distance limitation of only 30 meters, making it suitable only for short data center connections between racks."
  },
  {
    id: 4,
    front: "What is the T568B wiring standard pin order?",
    back: "T568B order is: 1-Orange/White, 2-Orange, 3-Green/White, 4-Blue, 5-Blue/White, 6-Green, 7-Brown/White, 8-Brown. Remember the mnemonic: 'Orange Orange Green Blue-Blue Green Brown Brown'."
  },
  {
    id: 5,
    front: "What is the difference between UTP and STP cable?",
    back: "UTP (Unshielded Twisted Pair) has no additional shielding and is used in most offices. STP (Shielded Twisted Pair) has foil or braided shielding for better EMI/RFI protection and is used in high-interference environments like factories."
  },
  {
    id: 6,
    front: "When would you use a straight-through cable vs a crossover cable?",
    back: "Straight-through cables (same wiring standard on both ends) connect different device types like PC to switch. Crossover cables (T568A one end, T568B other) connect same device types like switch to switch. Modern devices with Auto-MDIX make crossover cables mostly obsolete."
  },
  {
    id: 7,
    front: "What is the maximum distance for copper Ethernet cables?",
    back: "The maximum distance for all copper Ethernet cables (Cat 5e, Cat 6, Cat 6a) is 100 meters (328 feet) for standard speeds. Cat 8 is the exception with only 30 meters. Beyond 100m, you need fiber optic cable or a repeater."
  },
  {
    id: 8,
    front: "What is single-mode fiber and when is it used?",
    back: "Single-mode fiber (SMF) has a very thin core (9 microns) and uses laser light. It can transmit data for very long distances (up to 100+ kilometers) and is used for ISP backbones and building-to-building connections. The jacket is usually yellow."
  },
  {
    id: 9,
    front: "What is multi-mode fiber and when is it used?",
    back: "Multi-mode fiber (MMF) has a thicker core (50 or 62.5 microns) and uses LED light. It can transmit up to 2 kilometers and is used for shorter distances like data centers and campus networks. The jacket is usually orange or aqua."
  },
  {
    id: 10,
    front: "What is the most common fiber connector used today?",
    back: "LC (Lucent Connector or Little Connector) is the most common modern fiber connector. It's small form-factor, uses push-pull latching, and is found on most switches, routers, and SFP transceivers."
  },
  {
    id: 11,
    front: "Describe the SC fiber connector.",
    back: "SC (Subscriber Connector or Square Connector) is a push-pull connector with a square shape. It's larger than LC and is commonly used in older equipment and telecommunications applications. It's easy to connect and disconnect."
  },
  {
    id: 12,
    front: "Describe the ST fiber connector.",
    back: "ST (Straight Tip) is a round fiber connector that uses a bayonet twist-lock mechanism (like a BNC connector). It's an older standard still found in legacy systems and some industrial applications. You twist to lock and unlock it."
  },
  {
    id: 13,
    front: "What does 1000BASE-T stand for?",
    back: "1000BASE-T is Gigabit Ethernet over twisted pair copper cable. The '1000' means 1000 Mbps (1 Gbps), 'BASE' means baseband signaling, and 'T' means twisted pair. It requires Cat 5e or better cable and runs up to 100 meters."
  },
  {
    id: 14,
    front: "What is 10GBASE-T?",
    back: "10GBASE-T is 10 Gigabit Ethernet over twisted pair copper cable. It requires Cat 6a cable to run the full 100 meters. Cat 6 can run 10GBASE-T but only up to 55 meters."
  },
  {
    id: 15,
    front: "What does 1000BASE-SX mean?",
    back: "1000BASE-SX is Gigabit Ethernet over multi-mode fiber using short wavelength (850nm) light. The 'SX' means Short wavelength. It can run 220-550 meters depending on the fiber type. It uses LED light sources."
  },
  {
    id: 16,
    front: "What does 1000BASE-LX mean?",
    back: "1000BASE-LX is Gigabit Ethernet over single-mode fiber using long wavelength (1310nm) light. The 'LX' means Long wavelength. It can run 5-10 kilometers and uses laser light sources for long-distance transmission."
  },
  {
    id: 17,
    front: "What is an SFP module?",
    back: "SFP (Small Form-Factor Pluggable) is a hot-swappable transceiver module that plugs into switches/routers. It converts electrical signals to optical signals for fiber connections. SFP supports up to 1 Gbps speeds."
  },
  {
    id: 18,
    front: "What is the difference between SFP and SFP+?",
    back: "SFP supports up to 1 Gbps while SFP+ (Enhanced SFP) supports up to 10 Gbps. Both are the same physical size. SFP+ modules can work in SFP slots but will only operate at 1 Gbps speeds."
  },
  {
    id: 19,
    front: "What is a media converter used for?",
    back: "A media converter changes one type of network media to another, most commonly fiber to copper or vice versa. For example, converting an ISP's fiber connection to copper Ethernet so standard switches can connect to it."
  },
  {
    id: 20,
    front: "What is RG-6 coaxial cable used for?",
    back: "RG-6 is a thick coaxial cable primarily used for cable modems and cable/satellite TV signals. It has better shielding and lower signal loss than RG-59, making it the modern standard for broadband internet connections."
  },
  {
    id: 21,
    front: "What is plenum-rated cable and when is it required?",
    back: "Plenum-rated cable (CMP) has a fire-resistant jacket that produces minimal toxic smoke when burned. It's required by fire code for cables running through air circulation spaces (plenum spaces) like above drop ceilings or below raised floors."
  },
  {
    id: 22,
    front: "Why can't you use standard PVC cable in plenum spaces?",
    back: "Standard PVC cable releases toxic smoke when burned. In plenum spaces (air circulation areas), this smoke would spread throughout the building's ventilation system during a fire. Plenum-rated cable prevents this hazard and is required by fire code."
  },
  {
    id: 23,
    front: "What does Auto-MDIX do?",
    back: "Auto-MDIX (Automatic Medium-Dependent Interface Crossover) allows network devices to automatically detect and adjust to the cable type (straight-through or crossover). This eliminates the need for crossover cables in modern networks."
  },
  {
    id: 24,
    front: "What are the 8 wires in a twisted pair cable organized as?",
    back: "The 8 wires are organized as 4 twisted pairs: Orange pair (solid + white stripe), Green pair, Blue pair, and Brown pair. Each pair is twisted together to reduce electromagnetic interference and crosstalk between wires."
  },
  {
    id: 25,
    front: "What is the purpose of twisting wire pairs in Ethernet cables?",
    back: "Twisting wire pairs reduces electromagnetic interference (EMI) from external sources and reduces crosstalk (interference between the wire pairs inside the cable). The more twists per inch, the better the performance and the higher the cable category."
  },
  {
    id: 26,
    front: "What wavelengths are commonly used in fiber optic communications?",
    back: "Common wavelengths are 850nm (multi-mode, short distance), 1310nm (single-mode, medium distance), and 1550nm (single-mode, long distance). These are all in the infrared spectrum and are invisible to the human eye."
  },
  {
    id: 27,
    front: "What is QSFP and what is it used for?",
    back: "QSFP (Quad Small Form-Factor Pluggable) is a transceiver module with four channels. It supports 40 Gbps (4x10G) or 100 Gbps speeds and is used for high-speed data center interconnects between core switches and servers."
  },
  {
    id: 28,
    front: "Why is fiber optic cable immune to EMI?",
    back: "Fiber optic cable uses light signals instead of electrical signals. Since light is not affected by electromagnetic fields, fiber is completely immune to electromagnetic interference (EMI) and radio frequency interference (RFI)."
  },
  {
    id: 29,
    front: "What is the MTRJ fiber connector?",
    back: "MTRJ (Mechanical Transfer Registered Jack) is a small form-factor fiber connector that combines two fibers in one connector (duplex). It looks similar to an RJ45 connector and uses push-pull latching. It's less common than LC connectors."
  },
  {
    id: 30,
    front: "What should you check first when troubleshooting 'no connectivity' on a network cable?",
    back: "Check the physical layer first: verify the cable is properly seated in both ends, check for damaged cables or connectors, look at link lights (LED indicators), and verify you're using the correct cable type for the connection. Physical issues cause 50%+ of network problems."
  }
];

// Export for use in flashcard component
export default lesson10Flashcards;