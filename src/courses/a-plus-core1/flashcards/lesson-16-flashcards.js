export const lesson16Flashcards = [
  {
    id: 1,
    front: "What is ATX and what are its dimensions?",
    back: "Advanced Technology eXtended. Most common motherboard form factor. Standard ATX: 12 x 9.6 inches (305 x 244 mm). Introduced by Intel in 1995. Features: rear I/O panel, multiple expansion slots, standardized power connector."
  },
  {
    id: 2,
    front: "What are the three ATX case sizes?",
    back: "Full tower: Largest, 7+ expansion slots, multiple drive bays, enthusiast builds. Mid tower: Most common, 4-7 expansion slots, balance of size/features. Mini tower: Smallest ATX, 2-4 expansion slots, compact but still ATX motherboard."
  },
  {
    id: 3,
    front: "What is Micro-ATX (mATX) and what are its dimensions?",
    back: "Smaller than ATX: 9.6 x 9.6 inches (244 x 244 mm). Square shape. Fewer expansion slots (typically 4) than ATX. Compatible with ATX cases. Good for budget builds and compact systems. Less expensive."
  },
  {
    id: 4,
    front: "What is Mini-ITX and what are its dimensions?",
    back: "Small form factor: 6.7 x 6.7 inches (170 x 170 mm). One PCIe slot typically. Very compact builds. Low power consumption. Good for HTPCs, compact desktops. Requires Mini-ITX case. More expensive than larger formats."
  },
  {
    id: 5,
    front: "What is Nano-ITX?",
    back: "Ultra-small form factor: 4.7 x 4.7 inches (120 x 120 mm). Even smaller than Mini-ITX. Very limited expansion (often no PCIe). Used in embedded systems, thin clients, specialty applications. Low power. Rare in consumer builds."
  },
  {
    id: 6,
    front: "What are 5.25-inch drive bays used for?",
    back: "Originally for optical drives (CD/DVD/Blu-ray). Also: front panel fan controllers, hot-swap drive bays, card readers, RGB controllers. Being phased out in modern cases. External 5.25\" bays accessible from front."
  },
  {
    id: 7,
    front: "What are 3.5-inch drive bays used for?",
    back: "Traditional hard drives (HDDs). Internal bays with mounting brackets or trays. Can also mount 2.5\" drives with adapter. Typically 4-8 bays in mid tower. Tool-less mounting increasingly common. Bottom or side mounting."
  },
  {
    id: 8,
    front: "What are 2.5-inch drive bays used for?",
    back: "SSDs and laptop HDDs. Smaller, lighter than 3.5\". Mounting: dedicated 2.5\" bays, adapter brackets in 3.5\" bays, or behind motherboard tray. Modern cases have dedicated SSD mounting. Some SSDs use M.2 instead."
  },
  {
    id: 9,
    front: "What are expansion slots in a case?",
    back: "Openings in rear of case aligned with motherboard PCIe slots. Allow installation of expansion cards (GPU, sound card, NIC). Have removable slot covers. Number varies by case size (2-7+). Full height or low-profile."
  },
  {
    id: 10,
    front: "What are front panel connectors?",
    back: "Cables from case to motherboard for: power button, reset button, power LED, HDD activity LED, USB ports, audio (mic/headphone). Small connectors, specific orientation. Refer to motherboard manual for correct pins. Easy to mix up."
  },
  {
    id: 11,
    front: "What is the typical power button connector configuration?",
    back: "Two-pin connector labeled PWR_SW or POWER_SW. Momentary switch - completes circuit when pressed. Polarity doesn't matter for power button. Connects to motherboard front panel header. Pressing it signals motherboard to start/shutdown."
  },
  {
    id: 12,
    front: "What is the reset button connector?",
    back: "Two-pin connector labeled RESET or RST_SW. Momentary switch like power button. Forces hard reset/reboot. Polarity doesn't matter. Less commonly used now - software restarts preferred. Some modern cases omit reset button."
  },
  {
    id: 13,
    front: "What are LED connectors?",
    back: "Two-pin connectors for indicator lights. Power LED (PWR_LED): Shows system on/off. HDD LED: Flashes with disk activity. Polarity DOES matter for LEDs - positive and negative must be correct. Won't damage if reversed, just won't light."
  },
  {
    id: 14,
    front: "What front panel USB connections exist?",
    back: "USB 2.0: 9-pin header, multiple ports per header. USB 3.0/3.1: 19-pin header (blue), faster speeds. USB 3.1 Gen 2: Sometimes separate header. USB-C: Separate header on modern motherboards. Cable runs from front panel to motherboard header."
  },
  {
    id: 15,
    front: "What are front panel audio connectors?",
    back: "HD Audio (Intel standard): 9-pin connector for headphone and microphone jacks. AC'97 (legacy): Older audio standard. Most cases use HD Audio. Connects case front audio jacks to motherboard. Allows convenient front access to audio."
  },
  {
    id: 16,
    front: "What is positive airflow and why is it important?",
    back: "More air intake than exhaust. Creates positive pressure inside case. Benefits: reduces dust (air forced out through cracks instead of sucked in), better cooling, cleaner interior. Achieved with more/larger intake fans."
  },
  {
    id: 17,
    front: "What is negative airflow?",
    back: "More exhaust than intake. Creates negative pressure (vacuum). Pulls air through all gaps and openings. Increases dust intake. Can cool specific components better but dirtier overall. Less common in modern builds."
  },
  {
    id: 18,
    front: "What is the typical airflow pattern in a PC case?",
    back: "Front/bottom intake - Rear/top exhaust. Cool air enters front, flows over components, hot air exits rear/top. Follows natural heat rise. Prevents hot air recirculation. Graphics card and CPU cooler aligned with airflow path."
  },
  {
    id: 19,
    front: "Where should intake and exhaust fans be positioned?",
    back: "Intake: Front (most important), bottom (under PSU/GPU). Exhaust: Rear (most important), top (hot air rises). Minimum: one front intake, one rear exhaust. Optimal: 2-3 front intake, 1 rear + 1 top exhaust."
  },
  {
    id: 20,
    front: "What is cable management and why is it important?",
    back: "Organizing cables neatly inside case. Benefits: improved airflow, easier maintenance, better aesthetics, prevents fan obstruction, reduces dust accumulation. Methods: cable ties, Velcro straps, routing behind motherboard tray, cable combs."
  },
  {
    id: 21,
    front: "What cable management features do modern cases include?",
    back: "Cable routing channels behind motherboard tray - Rubber grommets for cable pass-through - Velcro straps or tie-down points - PSU shroud (hides cables) - Cable management bar - Covers for cable area. Makes neat builds easier."
  },
  {
    id: 22,
    front: "What is a PSU shroud?",
    back: "Cover that hides power supply and cables at bottom of case. Benefits: cleaner appearance, hides cable clutter, provides 2.5\" SSD mounting, improves airflow separation. Standard in modern mid/full tower cases. Usually removable."
  },
  {
    id: 23,
    front: "What is tempered glass on PC cases?",
    back: "Side panel made of tempered glass instead of metal/acrylic. Shows internal components. Heavier than plastic. Shatters completely if dropped (but safer fragments). Common in modern cases. Allows RGB lighting display. Premium feature."
  },
  {
    id: 24,
    front: "What are dust filters and where are they located?",
    back: "Removable mesh screens that catch dust before entering case. Locations: front intake, bottom intake, top (if intake). Require regular cleaning (monthly). Improve component longevity. Slightly reduce airflow. Magnetic mounting common. Essential for positive pressure."
  },
  {
    id: 25,
    front: "What is tool-less design in PC cases?",
    back: "Features allowing component installation without screwdrivers. Examples: thumb screws, drive trays/caddies, expansion card latches, captive screws. Faster installation/removal. Common in modern cases. Convenient for maintenance and upgrades."
  },
  {
    id: 26,
    front: "What is a motherboard standoff?",
    back: "Brass or metal spacer that elevates motherboard above case. Prevents motherboard from touching metal case (short circuit prevention). Screws into case, motherboard screws into standoff. Essential - missing standoffs can damage motherboard. Pre-installed or separate."
  },
  {
    id: 27,
    front: "How many motherboard standoffs are typically used?",
    back: "ATX: 9 standoffs. Micro-ATX: 6 standoffs. Mini-ITX: 4 standoffs. Must match motherboard hole pattern. Using wrong number/position can crack motherboard or cause shorts. Refer to case manual for standoff positions."
  },
  {
    id: 28,
    front: "What is the I/O shield?",
    back: "Metal plate that fits in case rear opening around motherboard ports. Comes with motherboard (not case). Must be installed BEFORE motherboard. Grounds ports and blocks dust/RF interference. Easily forgotten - check before screwing in motherboard."
  },
  {
    id: 29,
    front: "What case features should you consider for builds?",
    back: "Form factor support - Number of drive bays needed - Expansion slot count - Front panel ports (USB, audio) - Airflow/cooling support - Cable management - Build quality - Aesthetics (tempered glass, RGB) - Price - Size constraints."
  },
  {
    id: 30,
    front: "What is the difference between a case fan's CFM and static pressure?",
    back: "CFM (Cubic Feet per Minute): Airflow volume, better for unrestricted areas (case intake/exhaust). Static pressure: Force to push air through resistance, better for radiators and dense fins. High CFM fans for case, high static pressure for heatsinks/radiators."
  }
];