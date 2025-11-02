// Quiz for Lesson 10: Ethernet Standards and Cabling

export const lesson10Quiz = [
  {
    id: 1,
    question: "You’re cabling a top-of-rack switch to an aggregation switch 85 meters away and must sustain 10 Gbps with standard Ethernet channel limits. Which cable type fits the requirement without adding repeaters?",
    options: [
      "Cat 5e - supports 1 Gbps at 100m",
      "Cat 6 - supports 10 Gbps but only up to 55m",
      "Cat 6a - supports 10 Gbps at full 100m distance",
      "Cat 8 - supports 40 Gbps but only up to 30m"
    ],
    correct: 2,
    explanation: "Cat 6a supports 10GBASE-T to the full 100 m channel (typically 90 m horizontal + 10 m patch). Cat 6 is only rated for 10 Gb up to ~55 m in worst-case environments. Cat 5e tops out at 1 Gb, and Cat 8 is limited to 30 m."
  },
  {
    id: 2,
    question: "You’re ordering optics for new 10G SFP+ uplinks. The switch vendor recommends the connector most common on modern SFP/SFP+ transceivers. Which should you expect to provision?",
    options: [
      "ST (Straight Tip) - bayonet twist-lock connector",
      "SC (Square Connector) - push-pull square connector",
      "LC (Lucent Connector) - small form-factor push-pull",
      "MTRJ - small duplex connector"
    ],
    correct: 2,
    explanation: "LC is the de facto small form-factor connector used on most SFP/SFP+ modules. ST and SC appear on older gear; MTRJ is uncommon compared to LC."
  },
  {
    id: 3,
    question: "While re-terminating a patch lead to T568B, your tester flags a miswire on pin 3. To fix it, which conductor must land on pin 3?",
    options: [
      "Orange (solid)",
      "Orange/White (striped)",
      "Green/White (striped)",
      "Green (solid)"
    ],
    correct: 2,
    explanation: "T568B pinout is 1-O/W, 2-O, 3-G/W, 4-B, 5-B/W, 6-G, 7-Br/W, 8-Br. Pin 3 is Green/White."
  },
  {
    id: 4,
    question: "A project plan calls for copper runs between IDF and work areas without intermediate electronics. What maximum channel distance must you design around for rated Ethernet speeds?",
    options: [
      "55 meters (180 feet)",
      "100 meters (328 feet)",
      "150 meters (492 feet)",
      "185 meters (607 feet)"
    ],
    correct: 1,
    explanation: "Copper Ethernet channels are specified to 100 m (90 m permanent link + 10 m patch cords) for rated speeds, except Cat 8 which is 30 m."
  },
  {
    id: 5,
    question: "Two buildings on the same campus must be linked over ~5 km with room to upgrade from 1G to 10G later. What medium/standard pairing is most appropriate?",
    options: [
      "Cat 6a copper cable with repeaters every 100m",
      "Multi-mode fiber (supports up to 2km maximum)",
      "Single-mode fiber using 1000BASE-LX or 10GBASE-LR",
      "Cat 8 cable (highest speed available)"
    ],
    correct: 2,
    explanation: "Use single-mode fiber. 1000BASE-LX and 10GBASE-LR commonly support ~10 km; MMF isn’t suitable for 5 km and copper can’t exceed 100 m per segment."
  },
  {
    id: 6,
    question: "An inspection finds PVC-jacketed UTP strung through the return-air plenum above a drop ceiling. To bring the install up to code, which cable jacket rating is required in that space?",
    options: [
      "Any UTP cable is acceptable above ceilings",
      "Shielded twisted pair (STP) for interference protection",
      "Plenum-rated (CMP) cable with fire-resistant jacket",
      "Outdoor-rated cable with UV protection"
    ],
    correct: 2,
    explanation: "Plenum-rated CMP cable is required in air-handling spaces due to its low-smoke, fire-resistant jacket. STP addresses EMI, not code compliance."
  },
  {
    id: 7,
    question: "You’re selecting fiber for a long campus run and want to avoid future distance limitations. What key functional difference should drive your choice between SMF and MMF?",
    options: [
      "SMF uses LED light while MMF uses laser light",
      "SMF has a larger core diameter than MMF",
      "SMF can transmit much longer distances than MMF",
      "SMF is always more expensive than MMF in all scenarios"
    ],
    correct: 2,
    explanation: "Single-mode (≈9 μm core) supports much longer distances than multimode (50/62.5 μm). SMF typically uses lasers; MMF often uses LEDs/VCSELs."
  },
  {
    id: 8,
    question: "A legacy switch without Auto-MDIX intermittently links when patched to a workstation. You discover one end is T568A and the other T568B. What cable type did the tech unintentionally create?",
    options: [
      "A defective cable that won't work at all",
      "A crossover cable (used for connecting similar devices)",
      "A rollover cable (used for console connections)",
      "A straight-through cable with incorrect pinout"
    ],
    correct: 1,
    explanation: "A vs. B on opposite ends yields a crossover. That’s useful for like-to-like (e.g., switch-to-switch) when Auto-MDIX isn’t present."
  },
  {
    id: 9,
    question: "Your design calls for 10 Gb uplinks over MMF at 850 nm within the data hall. Which Ethernet PHY matches this requirement?",
    options: [
      "10GBASE-T (copper twisted pair)",
      "10GBASE-SR (Short Range fiber)",
      "10GBASE-LR (Long Range fiber)",
      "10GBASE-LX (Long wavelength fiber)"
    ],
    correct: 1,
    explanation: "10GBASE-SR operates over MMF at 850 nm and typically supports ~300–400 m depending on fiber grade (OM3/OM4)."
  },
  {
    id: 10,
    question: "Servers in the same rack need 40 Gbps connectivity across a 5 m path with minimal cost/complexity. Which option best fits the short-reach requirement?",
    options: [
      "Cat 6a - the data center standard cable",
      "Cat 8 - supports 40 Gbps up to 30m",
      "Multi-mode fiber with QSFP transceivers",
      "Single-mode fiber for maximum performance"
    ],
    correct: 1,
    explanation: "40GBASE-T over Cat 8 supports up to 30 m and is aimed at short-reach data-center links. Fiber or DACs are alternatives, but Cat 8 meets the 5 m need simply."
  },
  {
    id: 11,
    question: "You replace a crossover jump with a straight-through patch on modern switches and the link still comes up. Which feature enabled the devices to adapt automatically?",
    options: [
      "Automatically adjusts network speed to match connected devices",
      "Detects cable type and adapts (eliminating need for crossover cables)",
      "Automatically configures IP addresses using DHCP",
      "Enables automatic VPN connections between sites"
    ],
    correct: 1,
    explanation: "Auto-MDIX detects MDI/MDI-X and adjusts the transceiver, removing the need for dedicated crossover cables on modern gear."
  },
  {
    id: 12,
    question: "Your ISP handoff is single-mode fiber, but your edge switch only has copper RJ-45 ports. What device bridges the media types so you can uplink to the switch?",
    options: [
      "A fiber repeater to extend the signal",
      "A media converter (fiber to copper)",
      "An SFP module for the fiber switch",
      "A crossover cable adapter"
    ],
    correct: 1,
    explanation: "A standalone media converter accepts fiber on one side and outputs copper Ethernet on the other for connection to non-SFP switches."
  },
  {
    id: 13,
    question: "You must run network links adjacent to variable-speed motors and welders. To minimize impact from electromagnetic noise, what should you spec?",
    options: [
      "Cat 5e UTP (Unshielded Twisted Pair)",
      "Cat 6 UTP (higher category unshielded)",
      "Cat 6a STP (Shielded Twisted Pair)",
      "Any fiber optic cable"
    ],
    correct: 3,
    explanation: "Fiber is immune to EMI/RFI because it carries light, not electrical signals. Shielded copper helps but cannot match fiber’s immunity."
  },
  {
    id: 14,
    question: "You’re upgrading links from 1G to 10G using the same form factor. What is the principal capability difference between SFP and SFP+ modules?",
    options: [
      "SFP is for copper while SFP+ is for fiber only",
      "SFP supports 1 Gbps, SFP+ supports up to 10 Gbps",
      "SFP+ is physically larger than SFP modules",
      "SFP is hot-swappable while SFP+ requires shutdown"
    ],
    correct: 1,
    explanation: "SFP supports up to 1 Gb; SFP+ (same size, also hot-swappable) supports up to 10 Gb. Both have copper or fiber variants by module type."
  },
  {
    id: 15,
    question: "A patch fails on a certification tester: pins 3 and 6 show open, while the others pass. What’s the most probable fault to correct at the jack or plug?",
    options: [
      "The cable is too long (over 100 meters)",
      "The green pair wires didn't reach the connector pins or weren't crimped properly",
      "The wrong wiring standard was used (T568A instead of T568B)",
      "There is electromagnetic interference on the cable"
    ],
    correct: 1,
    explanation: "Pins 3 and 6 correspond to the green pair (3 = G/W, 6 = G) in both T568A and T568B. Opens on those pins indicate a termination/crimp issue on that pair."
  }
];

// Export for use in quiz component
export default lesson10Quiz;
