export const lesson1Quiz = [
  {
    id: 1,
    question: "A customer brings in their laptop complaining that it won't turn on. You notice the battery indicator light flashes briefly when plugged in but won't stay on. The laptop is 4 years old and has been used daily. What is the most likely cause?",
    options: [
      "The DC jack is damaged and needs replacement",
      "The lithium-ion battery has reached end of life and needs replacement",
      "The power adapter is not providing enough wattage",
      "The motherboard has failed"
    ],
    correct: 1,
    explanation: "Lithium-ion batteries typically last 2-4 years with regular use. The brief flash indicates power is reaching the system, but the battery can't hold a charge. A 4-year-old battery showing these symptoms has likely degraded to the point where it can't maintain voltage. The DC jack being damaged would prevent any power indication, and motherboard failure wouldn't cause the brief flash behavior."
  },
  {
    id: 2,
    question: "A user needs a laptop that can function both as a traditional laptop and a tablet for drawing applications. They want to use a stylus directly on the screen. Which form factor should you recommend?",
    options: [
      "Traditional clamshell laptop with external drawing tablet",
      "2-in-1 convertible laptop with touchscreen digitizer",
      "Standard laptop with high-resolution display",
      "Detachable keyboard laptop without touchscreen"
    ],
    correct: 1,
    explanation: "A 2-in-1 convertible laptop with a touchscreen digitizer is ideal for this use case. The convertible design allows it to flip or fold into tablet mode, while the digitizer enables precise stylus input for drawing. The 2-in-1 form factor provides the flexibility to work in laptop mode for typing and tablet mode for drawing, all in one device."
  },
  {
    id: 3,
    question: "You're setting up a workstation for an employee who frequently works at the office with dual monitors, ethernet, and multiple USB devices, but also travels with the laptop. What peripheral device would be most efficient for their workflow?",
    options: [
      "USB hub that they plug in each device individually",
      "Port replicator with all connections permanently attached",
      "Docking station with single connection to laptop",
      "Wireless adapters for all peripherals"
    ],
    correct: 2,
    explanation: "A docking station with a single connection (usually USB-C or proprietary connector) is most efficient. The user can connect/disconnect all peripherals (monitors, ethernet, USB devices, power) with one cable. This provides the convenience of a desktop setup at the office while maintaining portability. Port replicators offer similar functionality but typically don't include power delivery or as many ports."
  },
  {
    id: 4,
    question: "A laptop user reports that their laptop screen brightness can't be adjusted using the normal brightness keys. What should you check first?",
    options: [
      "Whether the display cable is properly connected",
      "If the Fn (Function) key is being pressed with the brightness keys",
      "Whether the laptop needs a BIOS update",
      "If the backlight inverter has failed"
    ],
    correct: 1,
    explanation: "Most laptops require the Fn (Function) key to be pressed simultaneously with the brightness adjustment keys (usually F-keys). This is the most common user error and simplest solution. If Fn + brightness keys don't work, then you'd investigate drivers, BIOS settings, or hardware issues. The backlight inverter is only relevant for older CCFL-backlit displays, not modern LED displays."
  },
  {
    id: 5,
    question: "A client is purchasing replacement batteries for their fleet of company laptops. They're choosing between Li-ion and Li-poly batteries. Which statement about these battery types is most accurate?",
    options: [
      "Li-ion batteries are newer technology and always preferred over Li-poly",
      "Li-poly batteries are lighter and can be shaped to fit tight spaces, but are more expensive",
      "Li-ion batteries provide twice the runtime of Li-poly batteries",
      "Li-poly batteries cannot be used in laptops, only in smartphones"
    ],
    correct: 1,
    explanation: "Lithium-polymer (Li-poly) batteries offer more flexibility in shape and form factor, making them ideal for thin laptops and tight spaces. They're also lighter than Li-ion batteries. However, they typically cost more to manufacture. Both technologies offer similar runtime characteristics, and both are commonly used in laptops. Li-ion batteries are more rigid in shape but often less expensive."
  },
  {
    id: 6,
    question: "You're troubleshooting a laptop where the touchpad has stopped working, but an external USB mouse works fine. The user mentions they were eating lunch while working. What should you try first?",
    options: [
      "Replace the touchpad module immediately",
      "Check if the touchpad was accidentally disabled via Fn key combination",
      "Reinstall the operating system",
      "Replace the entire system board"
    ],
    correct: 1,
    explanation: "Most laptops have an Fn key combination (like Fn + F5 or Fn + F9) that enables/disables the touchpad. Users often accidentally press this while typing or eating. This is a common issue and the simplest solution to check first. Many laptops also have this option in device settings. Always check software and settings before assuming hardware failure."
  },
  {
    id: 7,
    question: "A customer wants to upgrade their laptop's storage from a traditional hard drive. They want the fastest possible performance for video editing. The laptop has an available M.2 slot. What should you recommend?",
    options: [
      "2.5-inch SATA SSD - it's the most compatible option",
      "M.2 SATA SSD - it uses the M.2 slot",
      "M.2 NVMe SSD - it provides the fastest performance",
      "Another 2.5-inch hard drive in RAID 0"
    ],
    correct: 2,
    explanation: "M.2 NVMe SSDs provide the fastest storage performance available for laptops, with read/write speeds significantly faster than SATA-based drives. For video editing where large files need to be accessed quickly, NVMe is ideal. While M.2 SATA SSDs exist and would fit the slot, they're limited by SATA's 6Gbps speed. NVMe uses PCIe lanes for much higher bandwidth (up to 32Gbps or more)."
  },
  {
    id: 8,
    question: "During a RAM upgrade on a laptop, you notice the memory modules are significantly smaller than desktop RAM. What type of RAM does the laptop use?",
    options: [
      "DIMM (Dual Inline Memory Module)",
      "SO-DIMM (Small Outline DIMM)",
      "RIMM (Rambus Inline Memory Module)",
      "SIMM (Single Inline Memory Module)"
    ],
    correct: 1,
    explanation: "SO-DIMM (Small Outline DIMM) is the laptop-sized version of RAM, approximately half the length of standard desktop DIMMs. Laptops use SO-DIMM due to space constraints. Desktop computers use full-size DIMMs. RIMM and SIMM are obsolete memory technologies. When upgrading laptop RAM, you must ensure you purchase SO-DIMM modules, not desktop DIMM modules."
  },
  {
    id: 9,
    question: "A user's laptop battery drains quickly even though they purchased it only 6 months ago. They frequently leave the laptop plugged in at 100% charge all day, every day. What is the most likely cause of the battery degradation?",
    options: [
      "Manufacturing defect in the battery",
      "The power adapter is providing too much voltage",
      "Keeping the battery at 100% charge constantly can degrade lithium batteries faster",
      "The laptop's cooling system is failing"
    ],
    correct: 2,
    explanation: "Modern lithium-ion and lithium-polymer batteries can degrade faster when kept at 100% charge constantly. Many manufacturers recommend keeping laptops between 20-80% charge for optimal battery longevity. Some laptops have a 'battery care' mode that limits charge to 80% when plugged in long-term. While manufacturing defects are possible, the usage pattern described is a known cause of accelerated battery wear."
  },
  {
    id: 10,
    question: "You're preparing to replace a laptop keyboard. What should be your first step before beginning the disassembly?",
    options: [
      "Remove the battery and disconnect the power adapter",
      "Start removing screws from the bottom panel",
      "Pry open the keyboard with a plastic tool",
      "Update the laptop's BIOS firmware"
    ],
    correct: 0,
    explanation: "Before any laptop disassembly, you must disconnect all power sources - both the power adapter and the internal battery (if removable). This prevents electrical shock, short circuits, and component damage during the repair. Only after power is disconnected should you proceed with documenting the process, removing screws, and disassembling components. This is a fundamental safety practice for all electronics repair."
  },
  {
    id: 11,
    question: "A laptop user wants to connect their device to a conference room projector, but the laptop doesn't have a VGA port. The projector only has VGA input. What solution would work?",
    options: [
      "It's impossible without buying a new projector",
      "Use an HDMI to VGA adapter if the laptop has HDMI output",
      "Connect wirelessly - all projectors support this",
      "Use a USB to VGA adapter, which provides better quality than HDMI"
    ],
    correct: 1,
    explanation: "An HDMI to VGA adapter (or USB-C to VGA if the laptop has USB-C) allows you to connect modern laptops to older VGA-only displays and projectors. The adapter converts the digital HDMI signal to analog VGA. While wireless solutions exist, not all projectors support them. USB to VGA adapters exist but typically provide lower quality than HDMI-based solutions."
  },
  {
    id: 12,
    question: "You're troubleshooting a laptop that overheats and shuts down during intensive tasks. Upon inspection, the air vents are clogged with dust. What components should you clean to resolve this issue?",
    options: [
      "Only the external air vents visible from outside",
      "The cooling fans, heat sinks, and air vents throughout the system",
      "Just replace the thermal paste on the CPU",
      "The power supply and battery contacts"
    ],
    correct: 1,
    explanation: "Laptop cooling systems include intake and exhaust vents, cooling fans, and heat sinks. All these components need to be cleaned to restore proper airflow. Dust accumulation restricts airflow, causing components to overheat. While replacing thermal paste can help with heat transfer, it won't solve an airflow problem caused by dust. A comprehensive cleaning of all cooling components is necessary."
  },
  {
    id: 13,
    question: "A laptop has both a pointing stick (TrackPoint) in the center of the keyboard and a touchpad below the keyboard. The user prefers the pointing stick but accidentally triggers the touchpad while typing. What's the best solution?",
    options: [
      "Physically remove the touchpad hardware",
      "Disable the touchpad in Device Manager or touchpad settings while keeping the pointing stick enabled",
      "Install third-party software to block all mouse input",
      "Replace the keyboard with one that doesn't have a pointing stick"
    ],
    correct: 1,
    explanation: "Most laptops allow you to disable the touchpad independently through Device Manager, BIOS settings, or manufacturer-provided touchpad software, while keeping other pointing devices (like the pointing stick) functional. This is the cleanest solution that doesn't require hardware modification. Many laptops also have an Fn key combination to toggle the touchpad on/off."
  },
  {
    id: 14,
    question: "When selecting a replacement power adapter for a laptop, which specifications are MOST critical to match?",
    options: [
      "Brand name and color of the adapter",
      "Voltage (V) and polarity, wattage (W) equal to or greater than original",
      "Only the connector tip size matters",
      "The length of the power cable"
    ],
    correct: 1,
    explanation: "Voltage must match exactly - too high can damage components, too low won't power the laptop. Polarity (positive/negative orientation) must also match. Wattage should be equal to or greater than the original - higher wattage is safe (laptop draws only what it needs), but lower wattage may not provide enough power. The connector must also physically fit and match, but voltage and wattage are the critical electrical specifications."
  },
  {
    id: 15,
    question: "A traveling executive needs to work on confidential documents in public spaces like airports and coffee shops. Which laptop privacy feature would best prevent visual eavesdropping?",
    options: [
      "Installing a privacy screen filter that narrows the viewing angle",
      "Increasing the screen brightness to maximum",
      "Using a laptop with a matte finish display",
      "Sitting with their back against a wall only"
    ],
    correct: 0,
    explanation: "A privacy screen filter (also called a privacy filter or screen guard) is a physical overlay that uses micro-louvers to narrow the viewing angle of the display. The screen remains clearly visible to the user directly in front, but becomes dark and unreadable to anyone viewing from the side. This is the most effective technical solution for preventing shoulder surfing and visual eavesdropping in public spaces."
  }
];