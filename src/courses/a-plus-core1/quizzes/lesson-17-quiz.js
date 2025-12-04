export const lesson17Quiz = [
  {
    id: 1,
    question: "A technician is installing a new CPU and notices it has a small golden triangle in one corner. What is the purpose of this triangle?",
    options: [
      "Decoration only",
      "Alignment marker - must match with the corresponding triangle on the CPU socket for correct orientation",
      "Indicates the CPU is defective",
      "Shows which side faces up"
    ],
    correct: 1,
    explanation: "The golden/etched triangle (or arrow) is the CPU alignment marker indicating Pin 1 location. The CPU socket has a matching triangle/arrow. Alignment: (1) Match CPU triangle to socket triangle, (2) Gently place CPU - should drop in with no force (ZIF - Zero Insertion Force), (3) Never force - incorrect orientation damages pins/pads. Intel LGA CPUs have pins in socket (easier installation), AMD AM4 has pins on CPU (more delicate). Incorrect installation destroys the CPU and/or socket (hundreds of dollars damage). Always verify alignment before lowering retention mechanism. The triangle ensures correct electrical contact for all pins/pads. Some sockets have additional notches/keys to prevent backwards installation."
  },
  {
    id: 2,
    question: "A power supply has multiple PCIe power connectors. What are these connectors used for?",
    options: [
      "Powering the motherboard",
      "Providing additional power to graphics cards - 6-pin (75W) and 8-pin (150W) connectors supplement the 75W from the PCIe slot",
      "Connecting monitors",
      "PCIe connectors are not used"
    ],
    correct: 1,
    explanation: "PCIe power connectors provide additional power to graphics cards beyond the 75W available from the PCIe x16 slot. Connector types: (1) 6-pin PCIe - provides 75W, (2) 8-pin PCIe - provides 150W, (3) 6+2 pin - modular (can be 6-pin or 8-pin). Power calculation example: GPU with two 8-pin connectors needs 75W (slot) + 150W + 150W = 375W total. High-end GPUs (RTX 4090, RX 7900 XTX) may require multiple 8-pin connectors. DO NOT confuse with CPU/EPS power cables - physically similar but different pinouts. Using wrong cable damages components. Never use SATA/Molex to PCIe adapters (fire hazard). PSU must have sufficient wattage AND correct number of PCIe connectors. Some newer GPUs use 12VHPWR connector (16-pin, 600W)."
  },
  {
    id: 3,
    question: "A new power supply has cables labeled 'modular'. What does this mean?",
    options: [
      "The power supply is broken",
      "Cables are detachable - connect only the cables needed for cleaner cable management and better airflow",
      "Modular PSUs don't work",
      "All cables must be connected"
    ],
    correct: 1,
    explanation: "Power supply types: (1) Non-modular - all cables permanently attached, cheaper but creates cable clutter, (2) Semi-modular - main cables (24-pin, CPU power) attached, others detachable, good compromise, (3) Fully modular - all cables detachable, cleanest builds, easier maintenance, most expensive. Modular advantages: better airflow (less cable obstruction), cleaner appearance, easier upgrades (connect only what's needed). CRITICAL: Use only cables included with your specific PSU model. Never mix cables from different PSUs - even if connectors fit, pinouts may differ and will destroy components. Cable management improves cooling and aesthetics. For cases with limited space or showcase builds, modularity helps significantly."
  },
  {
    id: 4,
    question: "A gaming PC crashes when running demanding games. The power supply is rated at 450W, and the system has a GPU requiring 350W plus a 95W CPU. What is the likely problem?",
    options: [
      "The monitor is too large",
      "Insufficient power supply wattage - total system power exceeds PSU capacity causing instability or shutdowns",
      "Too much RAM is installed",
      "The case is too small"
    ],
    correct: 1,
    explanation: "Power supply sizing is critical. GPU alone requires 350W, plus CPU 95W, plus motherboard, drives, fans, and other components. Total system power likely exceeds 450W during gaming loads. When power demand exceeds PSU capacity, symptoms include: random shutdowns, system instability, crashes under load, failure to boot. Calculate total system power: (1) Add all component TDP/power requirements, (2) Add 20-30% headroom for peaks and efficiency, (3) Example: 350W GPU + 95W CPU + 50W other = 495W minimum, recommend 600-750W PSU. Use online PSU calculators (be accurate with components). Quality also matters - cheap 600W PSU may deliver less than quality 500W. 80 PLUS certification indicates efficiency. Always size PSU for current AND future upgrades."
  },
  {
    id: 5,
    question: "What does the '80 PLUS' certification on a power supply indicate?",
    options: [
      "It weighs 80 pounds",
      "Efficiency rating - PSU converts at least 80% of AC power to DC power, with higher tiers (Bronze, Silver, Gold, Platinum, Titanium) indicating better efficiency",
      "It costs $80",
      "It has 80 cables"
    ],
    correct: 1,
    explanation: "80 PLUS certifies power supply efficiency at different load levels (20%, 50%, 100%). Efficiency tiers: (1) 80 PLUS - 80% minimum efficiency, (2) 80 PLUS Bronze - 82-85%, (3) 80 PLUS Silver - 85-88%, (4) 80 PLUS Gold - 87-90%, (5) 80 PLUS Platinum - 89-92%, (6) 80 PLUS Titanium - 90-94%. Higher efficiency means: (1) Less wasted energy as heat, (2) Lower electricity bills over time, (3) Less cooling needed (less heat generated), (4) Potentially quieter operation (less heat = less fan noise). Example: 80% efficient PSU drawing 500W from wall delivers 400W to PC (100W lost as heat). 90% efficient PSU delivers 450W (only 50W lost). For high-power systems or 24/7 operation, higher efficiency pays for itself through reduced electricity costs. Most efficient at 50-80% load, so size PSU accordingly."
  },
  {
    id: 6,
    question: "A desktop computer won't power on. The technician notices the power supply has a voltage switch on the back. What does this switch control?",
    options: [
      "Fan speed only",
      "Input voltage selection (115V for US/Canada, 230V for Europe/Asia) - CRITICAL to set correctly or damage will occur",
      "Monitor brightness",
      "RGB lighting"
    ],
    correct: 1,
    explanation: "Voltage selector switch matches PSU input to local electrical standards: 115V (US, Canada, Japan) vs 230V (Europe, Asia, Australia, most of world). CRITICAL WARNING: Setting incorrectly can destroy PSU and components. (1) If set to 115V in 230V country - PSU may blow/catch fire immediately, (2) If set to 230V in 115V country - insufficient power, won't work properly or at all. Modern PSUs often auto-switching (100-240V universal input) with no switch - automatically detects voltage. Before powering on: (1) Check PSU label for voltage requirements, (2) If switch exists, verify set to correct local voltage (115V for US), (3) If auto-switching, no action needed. Never assume - always verify. When traveling internationally with desktop PC, check voltage compatibility. Some countries use 100V (Japan), 115V (US), 220-240V (most others)."
  },
  {
    id: 7,
    question: "What is the difference between the 4-pin and 8-pin CPU power connectors?",
    options: [
      "They are for different components",
      "Both provide CPU power - 4-pin for lower-power CPUs (older/budget), 8-pin (or 4+4 split) for modern/high-power CPUs, some motherboards have 8+4 or 8+8 for extreme power",
      "4-pin is for case fans",
      "No difference exists"
    ],
    correct: 1,
    explanation: "CPU power connector evolution: (1) 4-pin (older standard) - adequate for CPUs ~65W TDP or less, (2) 8-pin or 4+4 (modern standard) - required for most current CPUs (65-125W typical), (3) 8+4 or 8+8 (high-end/enthusiast) - extreme power delivery for 150-280W CPUs or heavy overclocking. The 4+4 design allows compatibility - use as 4-pin (older boards) or combine for 8-pin (modern boards). Location: typically top-left of motherboard near CPU socket, labeled CPU_PWR, EATX12V, or similar. System will NOT boot without CPU power connected - mandatory. Don't confuse with PCIe power cables - different pinouts despite similar appearance. High-power CPUs (Intel Core i9-13900K, AMD Ryzen 9 7950X) may require both 8-pin connectors populated. Check motherboard manual for requirements. Insufficient CPU power = no POST or instability under load."
  },
  {
    id: 8,
    question: "A PC case has three fans: one front intake, one rear exhaust, and one top exhaust. What type of airflow configuration is this?",
    options: [
      "Negative pressure - more exhaust than intake, pulls air through gaps",
      "Positive pressure - more intake than exhaust",
      "Balanced/neutral pressure - equal intake and exhaust",
      "No airflow occurs"
    ],
    correct: 0,
    explanation: "This configuration (1 intake, 2 exhaust) creates negative pressure. Airflow configurations: (1) Positive pressure - more intake than exhaust, pushes air out through gaps, reduces dust (if intakes filtered), slight overpressure inside case, (2) Neutral/balanced - equal intake and exhaust, efficient cooling, moderate dust, (3) Negative pressure - more exhaust than intake, pulls air through unfiltered gaps, MORE dust accumulation, slight vacuum inside case. Negative pressure concerns: (1) Unfiltered air pulled through every gap, (2) More dust buildup (exhausts don't filter), (3) Can be effective for cooling if dust managed. Best practice: slightly positive pressure with filtered intakes (reduces dust while maintaining good airflow). Airflow path should be: cool air in front → across drives → through GPU/CPU area → out rear/top. Monitor temperatures - adjust fan configuration if components overheat. Fan placement matters more than count - direct airflow across heat-generating components (CPU, GPU, drives)."
  },
  {
    id: 9,
    question: "What does TDP (Thermal Design Power) rating represent for a CPU?",
    options: [
      "The CPU's clock speed",
      "Maximum heat output in watts under typical load - determines minimum cooling requirements",
      "The number of cores",
      "The warranty period"
    ],
    correct: 1,
    explanation: "TDP (Thermal Design Power) specifies maximum heat output (watts) under sustained workload, determining cooling requirements. Example: 125W TDP CPU needs cooler rated for 125W+ cooling capacity. TDP ranges: (1) Laptop CPUs - 15-45W (efficiency focused), (2) Desktop CPUs - 35-125W (mainstream), (3) High-end desktop/workstation - 125-280W (performance focused). TDP ≠ exact power consumption (related but can vary). Intel/AMD measure TDP differently - not directly comparable between brands. Cooling selection: (1) Stock coolers (included with CPU) rated for CPU's TDP, (2) Aftermarket coolers specify TDP rating (must equal or exceed CPU TDP), (3) Overclocking increases heat beyond TDP - requires better cooling. Insufficient cooling = thermal throttling (CPU reduces speed to prevent damage), eventual shutdowns. Higher TDP = (1) More heat generated, (2) Larger heatsink needed, (3) More/faster fans required, (4) Potentially louder system. Liquid cooling handles high TDP better than air cooling in many cases. Check CPU TDP before selecting cooler."
  },
  {
    id: 10,
    question: "A technician is connecting case fans to the motherboard. What is the difference between 3-pin and 4-pin fan headers?",
    options: [
      "No difference exists",
      "4-pin headers support PWM (Pulse Width Modulation) for precise speed control via duty cycle; 3-pin fans use voltage control",
      "3-pin fans are always faster",
      "4-pin is only for RGB lighting"
    ],
    correct: 1,
    explanation: "Fan header types: 3-pin fans: (1) Power, ground, tachometer (speed sensing), (2) Speed controlled by varying voltage (7V-12V), (3) Less precise control, (4) Quieter at low speeds but less efficient. 4-pin fans (PWM): (1) Power, ground, tachometer, PWM signal, (2) Maintains constant 12V but varies duty cycle for speed (0-100%), (3) More precise speed control across wider RPM range, (4) Better low-speed operation, (5) More efficient, less electrical noise. Compatibility: (1) 4-pin fan works in 3-pin header (loses PWM, uses voltage control), (2) 3-pin fan works in 4-pin header (voltage control applied). Fan header labels: (1) CPU_FAN - critical, usually 4-pin, dedicated to CPU cooler, (2) SYS_FAN/CHA_FAN - system/chassis fans, (3) PWR_FAN - rare, power supply fan control. BIOS/UEFI controls fan curves: set temperature thresholds and corresponding fan speeds. PWM advantages: finer speed adjustment, better performance, modern standard. Most modern fans are 4-pin PWM."
  },
  {
    id: 11,
    question: "A system powers on but immediately shuts off after 2-3 seconds. What is the most likely cause?",
    options: [
      "Normal operation",
      "CPU overheating protection triggering (no/poor cooler contact), or RAM not seated properly - system safety shutdown",
      "The monitor is off",
      "Windows needs updates"
    ],
    correct: 1,
    explanation: "Immediate shutdown (2-3 seconds) indicates hardware protection triggering. Common causes: (1) CPU cooler not properly mounted - no thermal paste, heatsink not seated, cooler plastic film not removed, CPU overheats instantly → thermal shutdown, (2) RAM not fully seated - system detects no memory → shutdown, (3) CPU power connector not connected or loose, (4) Short circuit (standoff in wrong location touching motherboard), (5) Incompatible or failed component. Troubleshooting steps: (1) Verify CPU cooler mounted correctly - thermal paste applied, heatsink firmly attached, fan connected and spinning, (2) Reseat RAM - remove and reinstall until both clips lock, (3) Check CPU 4/8-pin power connector fully inserted, (4) Verify all motherboard standoffs align with mounting holes (no extras causing shorts), (5) Test with minimal components (CPU, one RAM stick, cooler). CPU thermal protection: modern CPUs shut down within seconds if cooler missing/ineffective (prevents permanent damage). Don't repeatedly power on without fixing - may damage CPU. Most common: forgot to remove plastic film from cooler base or didn't apply thermal paste."
  },
  {
    id: 12,
    question: "What is the purpose of cable management in a PC build?",
    options: [
      "Pure aesthetics with no functional benefit",
      "Improves airflow by reducing obstruction, easier maintenance/upgrades, prevents cables from contacting fans, and better appearance",
      "Makes the PC heavier",
      "Only for professional builds"
    ],
    correct: 1,
    explanation: "Cable management benefits: Airflow improvement: (1) Cables don't obstruct fans or air paths, (2) Better cooling efficiency (lower temps), (3) Prevents hot spots. Safety: (1) Cables can't contact moving fans (damage/noise), (2) Reduces fire risk (cables not near hot components), (3) Prevents accidental disconnection. Maintenance: (1) Easier to access components for upgrades, (2) Cleaner workspace when adding/removing parts, (3) Troubleshooting faster (can see connections clearly). Aesthetics: (1) Professional appearance (especially windowed cases), (2) Shows pride in build quality. Modern case features: (1) Routing holes with rubber grommets (pass cables behind motherboard tray), (2) Velcro straps/tie-down points, (3) Cable channels/covers, (4) PSU shroud (hides PSU and cables), (5) 15-25mm space behind motherboard tray. Techniques: (1) Route cables behind motherboard tray, (2) Bundle cables with zip ties or velcro straps, (3) Use shortest cable runs possible, (4) Group cables by destination. Modular PSU helps - eliminates unused cables. Poor cable management: blocks airflow (higher temps), looks messy, harder to work in case. Time invested in cable management pays off long-term."
  },
  {
    id: 13,
    question: "A UPS (Uninterruptible Power Supply) is being installed for a desktop computer. What is its primary purpose?",
    options: [
      "To make the computer faster",
      "Provides battery backup power during outages and protects against surges, brownouts, and electrical noise - allows graceful shutdown or continued operation",
      "Only for cooling the system",
      "UPS provides Wi-Fi"
    ],
    correct: 1,
    explanation: "UPS (Uninterruptible Power Supply) functions: Battery backup: (1) Continues powering PC during outages (5-30+ minutes depending on capacity and load), (2) Allows graceful shutdown (save work, close applications properly), (3) Sustained operation for short outages. Power protection: (1) Surge protection (voltage spikes), (2) Brownout protection (voltage sags - boosts to normal), (3) Line conditioning (filters electrical noise), (4) Prevents data corruption from sudden power loss. UPS types: (1) Standby/Offline - switches to battery when power fails, brief switchover (~5ms), cheapest, good for PCs, (2) Line-interactive - regulates voltage without battery, smooth transition, best for most desktop use, (3) Online/Double-conversion - always on battery, perfect power, expensive, for servers/critical systems. Sizing: (1) Calculate total wattage of devices, (2) Select UPS with capacity exceeding total load, (3) Runtime = battery capacity / load (more capacity = longer runtime). Connect: (1) Computer, monitor, external drives to battery outlets, (2) Don't connect laser printers, space heaters (too much power). Software: UPS management software enables automatic shutdown when battery low. Benefits: prevents data loss, protects hardware from power surges, enables work during brief outages."
  },
  {
    id: 14,
    question: "What is the difference between a surge protector and a power strip?",
    options: [
      "They are identical",
      "Surge protector includes MOVs to absorb voltage spikes; basic power strip only adds outlets without protection",
      "Power strips are always better",
      "Color is the only difference"
    ],
    correct: 1,
    explanation: "Surge protection vs power strips: Basic power strip: (1) Multiplies AC outlets (no protection), (2) May have on/off switch, (3) Simple extension cord with multiple sockets, (4) No electrical protection. Surge protector: (1) MOVs (Metal Oxide Varistors) divert voltage spikes to ground, (2) Protects against lightning, power surges, electrical noise, (3) Key specs: joule rating (energy absorption - 1000+ joules for computers), clamping voltage (400V or lower preferred), response time (<1 nanosecond), indicator light (shows protection active). Joule rating: (1) Total energy surge protector can absorb before failure, (2) Higher = better (more protection, longer life), (3) 1000-2000 joules for computers, (4) 2000-3000+ joules for expensive equipment. Surge protectors degrade: (1) Each surge reduces protection capacity, (2) Replace after major surge (lightning) or every 3-5 years, (3) Indicator light shows if protection still active. Better protection hierarchy: basic power strip < surge protector < UPS with surge protection. Best practice: (1) Surge protector minimum for computers, (2) Check joule rating and clamping voltage, (3) Replace periodically, (4) Don't daisy-chain surge protectors. Not all outlets may be protected - verify which outlets have surge protection."
  },
  {
    id: 15,
    question: "A power supply fan is making loud rattling noises. What should be done?",
    options: [
      "Ignore it - it's normal",
      "Replace the power supply - PSU fan failure can lead to overheating and PSU failure; PSU fan not user-serviceable due to safety risks",
      "Oil the fan bearings",
      "Turn up the volume to drown it out"
    ],
    correct: 1,
    explanation: "Power supply fan issues and safety: Symptoms of failing PSU fan: (1) Loud rattling, grinding, clicking noises, (2) Fan slowing or stopping, (3) Overheating (PSU hot to touch), (4) System shutdowns under load. Why not to open PSU: (1) HIGH VOLTAGE CAPACITORS - can hold lethal charge even when unplugged (days/weeks), (2) Risk of electrocution (potentially fatal), (3) Warranty void if opened, (4) Specialized knowledge required for safe repair. Recommended action: (1) Replace entire PSU - safest option, (2) Contact manufacturer if under warranty, (3) Professional repair shop (if economical - usually isn't). Prevention: (1) Keep PSU fan intake clear (dust filters clean), (2) Adequate case ventilation (PSU doesn't overheat), (3) Quality PSU with long warranty (5-10 years). PSU fan failure consequences: (1) PSU overheats, (2) Automatic shutdown protection (if working), (3) Component damage if protection fails, (4) Potential fire risk. Never: (1) Attempt DIY PSU repair without training, (2) Spray contact cleaner into PSU, (3) Continue using failing PSU (risk of cascading failures damaging other components). Quality PSUs have better fans (longer life, quieter). Invest in reputable brands (EVGA, Corsair, Seasonic) for reliability."
  }
];