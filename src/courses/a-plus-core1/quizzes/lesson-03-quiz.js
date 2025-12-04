export const lesson3Quiz = [
  {
    id: 1,
    question: "A technician is upgrading a laptop and opens the bottom panel to find two memory slots. One slot has an 8GB module installed. What type of RAM module should they purchase to upgrade the laptop?",
    options: [
      "DIMM DDR4 module",
      "SO-DIMM module matching the existing type (DDR3, DDR4, or DDR5)",
      "Any desktop RAM will work if it's the same capacity",
      "RIMM module for laptops"
    ],
    correct: 1,
    explanation: "Laptops use SO-DIMM (Small Outline Dual Inline Memory Module) rather than full-size DIMMs used in desktops. You must match the DDR generation (DDR3, DDR4, or DDR5) of the existing module, as different generations are not compatible. SO-DIMMs are approximately half the length of desktop DIMMs. RIMM is an obsolete technology. Always verify the laptop's specifications for maximum supported capacity and speed."
  },
  {
    id: 2,
    question: "A customer brings in a laptop that won't boot. You notice there's a strong burning smell coming from the left side near the power jack. What component has most likely failed?",
    options: [
      "The RAM modules",
      "The hard drive",
      "The DC jack or power circuitry",
      "The keyboard"
    ],
    correct: 2,
    explanation: "A burning smell near the power jack indicates the DC jack itself or the power circuitry on the motherboard has failed or shorted. This is a common failure point due to physical stress from repeatedly plugging/unplugging the power adapter, or from voltage spikes. The DC jack may need replacement, or if the motherboard's power circuitry is damaged, it may require motherboard replacement. This is a serious issue that requires immediate attention to prevent further damage."
  },
  {
    id: 3,
    question: "You're replacing a laptop keyboard. After removing all visible screws from the bottom, the keyboard still won't lift out. What should you check next?",
    options: [
      "Force the keyboard out with a metal pry tool",
      "Check for plastic clips or tabs holding the keyboard in place that need to be released",
      "The keyboard is permanently attached and cannot be replaced",
      "Remove the LCD screen first"
    ],
    correct: 1,
    explanation: "Many laptop keyboards are held in place by a combination of screws and plastic clips/tabs along the edges. After removing screws, you must carefully release these clips using a plastic spudger or pry tool. Forcing it with metal tools can break the clips or damage the keyboard. Some keyboards require releasing a bezel or sliding them in a specific direction. Always consult the service manual for the specific model and use proper plastic tools to avoid damage."
  },
  {
    id: 4,
    question: "A laptop has an M.2 slot labeled 'M.2 2280'. The customer wants to install a storage drive. What does '2280' indicate?",
    options: [
      "The maximum speed in MB/s",
      "The physical dimensions: 22mm wide and 80mm long",
      "The model year (2280 = year 2280)",
      "The number of read/write cycles"
    ],
    correct: 1,
    explanation: "M.2 drive form factors are designated by a 4-digit number where the first two digits represent width in millimeters and the last two represent length. '2280' means 22mm wide and 80mm long, which is the most common M.2 size for laptops. Other sizes include 2242, 2260, and 22110. You must ensure the M.2 drive you purchase matches the supported size(s) in the laptop, as the mounting screw position varies by length."
  },
  {
    id: 5,
    question: "During a RAM upgrade, you notice the new SO-DIMM module won't fully insert into the slot. What is the most likely cause?",
    options: [
      "The slot is defective and needs to be repaired",
      "You're trying to install the wrong generation (DDR3 in a DDR4 slot, etc.)",
      "All laptop RAM requires force to install properly",
      "The laptop doesn't support RAM upgrades"
    ],
    correct: 1,
    explanation: "Different DDR generations (DDR3, DDR4, DDR5) have notches in different positions to prevent installing the wrong type. If a module won't insert easily, you're likely trying to install an incompatible generation. Never force RAM modules - they should seat with gentle, even pressure when correctly aligned. The notch position is a physical key that ensures compatibility. Always verify the DDR generation before purchasing replacement RAM."
  },
  {
    id: 6,
    question: "A laptop repair requires replacing the system board (motherboard). After installation, the laptop boots but won't connect to Wi-Fi. What did the technician most likely forget?",
    options: [
      "To install drivers - the system board is defective",
      "To reconnect the Wi-Fi antenna cables to the wireless card",
      "To activate Windows",
      "To replace the LCD screen"
    ],
    correct: 1,
    explanation: "Wi-Fi antenna cables (usually two, marked Main and Aux) must be disconnected when removing the system board and reconnected when installing the replacement. These tiny cables snap onto the Wi-Fi card. If forgotten, the Wi-Fi card has no antenna connection and can't receive signals. This is one of the most commonly forgotten steps during motherboard replacement. The cables typically route through the display hinge to antennas in the screen bezel."
  },
  {
    id: 7,
    question: "You're upgrading a laptop's 2.5-inch SATA hard drive to an SSD. After installation, the laptop doesn't recognize the new drive. What should you verify first?",
    options: [
      "The SSD is defective and needs replacement",
      "Both the SATA data cable and power connector are properly seated",
      "The laptop doesn't support SSDs",
      "The BIOS needs to be downgraded"
    ],
    correct: 1,
    explanation: "2.5-inch drives use both a data connection and power, typically combined in a single connector in laptops. If either isn't properly seated, the drive won't be recognized. Always verify physical connections before assuming hardware failure. Additionally, some laptops use proprietary connectors or caddy systems. Once connections are confirmed, check BIOS/UEFI to ensure the drive is detected. The drive may also need to be initialized and formatted in Disk Management if it's brand new."
  },
  {
    id: 8,
    question: "A laptop's cooling fan has become extremely loud and runs constantly even during light tasks. What is the most likely cause?",
    options: [
      "The fan is running normally - all laptops are loud",
      "Dust accumulation in the heatsink and fan causing reduced airflow and overheating",
      "The RAM needs to be upgraded",
      "The battery needs replacement"
    ],
    correct: 1,
    explanation: "Dust accumulation in the cooling system is the most common cause of excessive fan noise and constant running. Dust blocks airflow through the heatsink, causing the CPU/GPU to run hotter, which triggers the fan to run at higher speeds constantly. Regular cleaning of the cooling system (fans, heatsinks, air vents) is essential maintenance. While thermal paste degradation can also cause this, dust is more common and should be addressed first."
  },
  {
    id: 9,
    question: "You're documenting a laptop disassembly for a complex repair. What is the BEST practice for keeping track of screws and small parts?",
    options: [
      "Put all screws in one container - they're all the same size",
      "Use a magnetic parts tray or organize screws by location/step with labels or diagrams",
      "Screws aren't important - you can buy replacements later",
      "Memory alone is sufficient for reassembly"
    ],
    correct: 1,
    explanation: "Laptop screws vary in length and thread pitch. Using the wrong screw can damage components or prevent proper reassembly. Best practice is to use a magnetic parts tray with compartments, take photos during disassembly, or organize screws on a labeled diagram. Some technicians use egg cartons or pill organizers. Never mix screws from different steps. Using a too-long screw can pierce through and damage components underneath."
  },
  {
    id: 10,
    question: "After replacing a laptop's thermal paste on the CPU, the laptop immediately shuts down when booted. What is the most likely cause?",
    options: [
      "Too much thermal paste was applied causing electrical shorts",
      "The heatsink wasn't properly reattached, causing immediate overheating",
      "The thermal paste is defective",
      "The CPU was damaged during the process"
    ],
    correct: 1,
    explanation: "If the heatsink isn't properly seated against the CPU or the mounting screws aren't tightened correctly, the CPU will immediately overheat and trigger thermal protection shutdown. CPUs can reach critical temperatures in seconds without proper cooling. Always verify the heatsink is securely attached with even pressure. While too much thermal paste isn't ideal, it won't cause shorts (it's non-conductive). A pea-sized amount or thin spread is recommended."
  },
  {
    id: 11,
    question: "A laptop battery isn't charging even though the power adapter is connected and working. The laptop works fine on AC power. What component should you check after verifying the power adapter?",
    options: [
      "The LCD screen",
      "The battery itself or the battery charging circuitry on the motherboard",
      "The keyboard",
      "The RAM modules"
    ],
    correct: 1,
    explanation: "If the power adapter works (laptop runs on AC power) but the battery won't charge, the issue is either the battery itself (end of life, defective) or the charging circuitry on the motherboard. Many laptops have diagnostic tools in BIOS or OS that can test battery health. Try removing and reinserting the battery (if removable). If a known-good replacement battery also won't charge, the motherboard's charging circuit has failed. Battery issues are common after 2-4 years of use."
  },
  {
    id: 12,
    question: "You need to replace a laptop speaker. Where are laptop speakers typically located?",
    options: [
      "Always in the display assembly only",
      "Usually in the bottom case near the front edge, left and right sides",
      "Attached to the keyboard",
      "Inside the power adapter"
    ],
    correct: 1,
    explanation: "Laptop speakers are typically located in the bottom case (palmrest area) near the front left and right sides, positioned below grilles or holes for sound output. Some laptops have additional speakers in the display assembly or above the keyboard. Speakers connect to the motherboard via small cables. When replacing speakers, ensure you get the correct model-specific parts, as speaker size, impedance, and connector types vary by laptop model."
  },
  {
    id: 13,
    question: "A laptop's touchpad cable is a ribbon cable with a ZIF (Zero Insertion Force) connector. What's the correct procedure to disconnect it?",
    options: [
      "Pull firmly on the cable until it releases",
      "Lift the locking tab or flip the connector latch, then gently slide out the cable",
      "Cut the cable and solder a new one",
      "Use pliers to grip and remove the cable"
    ],
    correct: 1,
    explanation: "ZIF connectors have a locking mechanism - either a flip-up tab or a slide-out tray. You must unlock this mechanism before the cable can be removed. Never pull on the cable itself, as this can damage both the cable and connector. To reconnect, insert the cable and close/lock the mechanism. ZIF connectors are used throughout laptops for keyboards, touchpads, displays, and other components. Using proper technique prevents expensive damage."
  },
  {
    id: 14,
    question: "During reassembly after replacing a laptop's wireless card, you have several screws left over. What should you do?",
    options: [
      "Throw them away - they weren't important",
      "Disassemble again and determine where they belong - all screws serve a purpose",
      "Use them for a different laptop",
      "Mail them to the manufacturer"
    ],
    correct: 1,
    explanation: "Every screw in a laptop serves a specific purpose - securing components, maintaining structural integrity, or ensuring proper grounding. Leftover screws indicate incomplete reassembly, which can lead to loose components, rattling, overheating (if heatsink screws are missing), or other issues. Carefully disassemble to the point where you have leftover screws and determine where they belong. This is why documentation during disassembly (photos, diagrams) is crucial."
  },
  {
    id: 15,
    question: "A laptop has both an HDD and an M.2 SSD slot. The customer wants the best performance. How should the drives be configured?",
    options: [
      "Install Windows on the HDD because it has more space",
      "Install Windows and applications on the M.2 SSD, use the HDD for file storage",
      "Only use the HDD - SSDs aren't reliable",
      "Install everything on the M.2 SSD and remove the HDD"
    ],
    correct: 1,
    explanation: "For optimal performance, install the operating system and frequently-used applications on the faster M.2 SSD. This ensures fast boot times and application loading. Use the larger, slower HDD for bulk file storage (documents, media, backups). This configuration balances performance and storage capacity cost-effectively. M.2 NVMe SSDs can be 5-10x faster than HDDs. Modern laptops often come configured this way from the factory."
  }
];