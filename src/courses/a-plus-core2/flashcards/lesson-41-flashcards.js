export const lesson41Flashcards = [
  {
    id: 1,
    front: "What physical security devices should you know for A+?",
    back: "Badge readers, biometrics (fingerprint, retina, facial recognition), key fobs, smart cards, security guards, door locks (traditional, electronic, combination), mantraps, bollards, fencing, gates, video surveillance (CCTV)."
  },
  {
    id: 2,
    front: "What is a badge reader and how does it work?",
    back: "Electronic access control using RFID or magnetic stripe cards. Swipe/tap card to unlock door. Tracks who enters/exits and when. Can restrict access by time, area, user permissions. Common in offices, data centers."
  },
  {
    id: 3,
    front: "What biometric authentication methods exist?",
    back: "Fingerprint scanner (most common), retinal scan (eye blood vessels), iris scan (eye patterns), facial recognition (3D mapping), voice recognition, palm vein scanner. More secure than passwords - can't be shared/forgotten."
  },
  {
    id: 4,
    front: "What are key fobs used for?",
    back: "Small hardware token generating authentication codes or sending wireless signal to unlock doors. RFID/NFC proximity cards. Carried on keychain. Used for building access, multi-factor authentication, vehicle keyless entry."
  },
  {
    id: 5,
    front: "What is a smart card?",
    back: "Credit card-sized card with embedded microchip storing certificates, credentials. Inserted into reader or contactless (NFC). Common Access Card (CAC), Personal Identity Verification (PIV). More secure than magnetic stripe - encrypted data."
  },
  {
    id: 6,
    front: "What is a mantrap and why use it?",
    back: "Access control vestibule with two doors - only one opens at a time. Person enters first door, it closes, authenticates, second door opens. Prevents tailgating/piggybacking. Used in high-security areas like data centers, banks."
  },
  {
    id: 7,
    front: "What are bollards used for?",
    back: "Short vertical posts preventing vehicle access to buildings/areas. Protects against vehicle ramming attacks. Metal or concrete, often retractable for authorized vehicles. Common outside government buildings, sensitive facilities."
  },
  {
    id: 8,
    front: "What is video surveillance (CCTV)?",
    back: "Closed-Circuit Television monitoring premises. Records activity, deters crime, provides evidence. IP cameras (network-based) or analog. Features: motion detection, night vision, remote viewing. Store footage for investigation."
  },
  {
    id: 9,
    front: "What types of door locks should you know?",
    back: "Traditional key locks (physical key), electronic keypad (PIN code), smart locks (phone app, Bluetooth), biometric locks (fingerprint), RFID/proximity (card/fob), combination locks (dial). Electronic locks log access attempts."
  },
  {
    id: 10,
    front: "What is asset tracking and why is it important?",
    back: "Monitoring location and status of equipment. RFID tags, barcodes, GPS trackers. Inventory management, theft prevention, maintenance scheduling. Know what equipment you have, where it is, who has it."
  },
  {
    id: 11,
    front: "What are RFID tags used for in physical security?",
    back: "Radio Frequency Identification tags on equipment for tracking. Active (battery, longer range) or passive (no battery, reader powered). Track inventory, prevent theft, automate checkout, monitor movement through secured areas."
  },
  {
    id: 12,
    front: "What is tamper detection?",
    back: "Sensors/seals detecting unauthorized physical access to equipment. Tamper-evident seals show if opened, alarm triggers if case opened. Protects servers, network equipment, safes. Alerts security if tampering attempted."
  },
  {
    id: 13,
    front: "What environmental controls are needed in data centers?",
    back: "HVAC (heating, ventilation, air conditioning) for temperature control (68-72°F), humidity control (40-60%), fire suppression systems (clean agent, not water), temperature/humidity monitoring, proper airflow (hot/cold aisles)."
  },
  {
    id: 14,
    front: "Why is temperature control critical for equipment?",
    back: "Heat damages electronics, reduces lifespan, causes failures. Servers generate significant heat. Maintain 68-72°F (20-22°C). Too cold causes condensation. HVAC failure can quickly overheat data center."
  },
  {
    id: 15,
    front: "Why is humidity control important?",
    back: "Too low (below 40%) causes static electricity damage. Too high (above 60%) causes condensation, corrosion. Maintain 40-60% relative humidity. Monitoring systems alert if out of range. Critical for equipment reliability."
  },
  {
    id: 16,
    front: "What fire suppression systems are used in data centers?",
    back: "Clean agent systems (FM-200, Inergen) - gas-based, safe for electronics, don't leave residue. NOT water sprinklers - destroy equipment. Pre-action systems require two triggers. VESDA (Very Early Smoke Detection) for early warning."
  },
  {
    id: 17,
    front: "What is hot aisle/cold aisle design?",
    back: "Data center layout optimizing cooling. Cold aisles: server fronts face each other, cool air intake. Hot aisles: server backs face each other, hot air exhaust. Prevents mixing hot/cold air, improves efficiency, reduces cooling costs."
  },
  {
    id: 18,
    front: "What is rack security in data centers?",
    back: "Locking server rack doors/panels, rack-mounted security, individual server locks, cable locks preventing removal. Prevents unauthorized physical access to servers, theft of equipment/drives. Even within secured room, protect individual racks."
  },
  {
    id: 19,
    front: "Why is cable management important for security?",
    back: "Organized cables prevent tripping hazards, improve airflow, easier troubleshooting. Security aspect: prevents accidental disconnections, makes tampering obvious, reduces fire hazards. Use cable ties, labels, cable management arms."
  },
  {
    id: 20,
    front: "What is a Kensington lock?",
    back: "Cable lock securing laptops/monitors to desk. Small slot on device, cable loops through furniture, combination/key lock. Prevents theft in office/public spaces. Common on business laptops, portable equipment."
  },
  {
    id: 21,
    front: "What are USB locks/port blockers?",
    back: "Physical devices blocking USB ports preventing unauthorized data transfer or malware installation via USB. Key-based removal. Prevents data exfiltration, malicious USB devices. Alternative: disable ports in BIOS or Group Policy."
  },
  {
    id: 22,
    front: "What are privacy screens/filters?",
    back: "Screen overlay limiting viewing angle - only person directly in front can see display. Prevents shoulder surfing, protects confidential information in public spaces. Common for laptops used in airports, coffee shops, trains."
  },
  {
    id: 23,
    front: "What secure disposal methods should you know?",
    back: "Shredding (paper documents, 7+ crosscut), degaussing (magnetic media), physical destruction (drilling, crushing), incineration (complete destruction), secure erase/wiping (software-based), certificate of destruction (proof)."
  },
  {
    id: 24,
    front: "What is degaussing?",
    back: "Using powerful magnetic field to erase data on magnetic storage (hard drives, tapes). Destroys data permanently - drive unusable after. Not effective on SSDs (not magnetic). Alternative to physical destruction."
  },
  {
    id: 25,
    front: "What is the difference between standard formatting and secure wiping?",
    back: "Standard format: marks space available, data recoverable with tools. Secure wipe: overwrites entire drive multiple times (DoD 5220.22-M standard - 7 passes), data unrecoverable. Use before disposal/resale."
  },
  {
    id: 26,
    front: "What is tailgating/piggybacking?",
    back: "Unauthorized person following authorized person through secured door. Tailgating: without knowledge. Piggybacking: with permission (still breach). Prevention: mantraps, security awareness, security guards, one-person-one-scan policy."
  },
  {
    id: 27,
    front: "What is shoulder surfing?",
    back: "Observing someone's screen, keyboard, PIN entry to steal information. Attacker looks over shoulder in public places. Prevention: privacy screens, awareness of surroundings, shield PIN entry, position screen away from view."
  },
  {
    id: 28,
    front: "What is dumpster diving?",
    back: "Searching through trash for sensitive information - documents, printouts, sticky notes with passwords, old drives. Prevention: shred all documents, secure disposal of media, locked dumpsters, clean desk policy."
  },
  {
    id: 29,
    front: "What is a clean desk policy?",
    back: "Security policy requiring employees to clear desks of sensitive materials when leaving. Lock documents, log off computers, no passwords on sticky notes. Prevents unauthorized access, shoulder surfing, dumpster diving."
  },
  {
    id: 30,
    front: "What is defense in depth for physical security?",
    back: "Layered security approach - multiple controls working together. Example: perimeter fence, guards, badge readers, mantraps, cameras, locked racks, drive encryption. If one layer fails, others remain. No single point of failure."
  }
];