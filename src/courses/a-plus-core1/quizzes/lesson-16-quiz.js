export const lesson16Quiz = [
  {
    id: 1,
    question: "A technician is replacing a laptop's motherboard and needs to apply new thermal paste to the CPU. What is the purpose of thermal paste?",
    options: [
      "To glue the heatsink permanently to the CPU",
      "To fill microscopic gaps between the CPU and heatsink, improving heat transfer from the CPU to the heatsink",
      "To make the CPU run faster",
      "To waterproof the CPU"
    ],
    correct: 1,
    explanation: "Thermal paste (thermal compound, thermal grease) fills microscopic imperfections between the CPU surface and heatsink base, eliminating air gaps that insulate heat. Air is a poor thermal conductor; thermal paste conducts heat much better. Application: clean old paste with isopropyl alcohol, apply small amount (pea-sized or thin spread method) to CPU center, attach heatsink with even pressure. Too much paste insulates rather than conducts. Too little leaves air gaps. Quality paste improves cooling efficiency by several degrees. Replace thermal paste when: replacing heatsink, CPU overheating, or paste is dried/cracked (usually every 3-5 years)."
  },
  {
    id: 2,
    question: "A desktop computer's power supply has a 24-pin ATX connector. What component does this connector power?",
    options: [
      "The hard drive",
      "The motherboard - provides main system power",
      "The monitor",
      "The keyboard"
    ],
    correct: 1,
    explanation: "The 24-pin (or 20+4 pin) ATX connector is the main motherboard power connector. It provides multiple voltages (+3.3V, +5V, +12V, ground) to the motherboard, which distributes power to: RAM, expansion slots, chipset, onboard devices, and USB ports. Older systems used 20-pin; modern systems use 24-pin. The power supply also has: 4-pin or 8-pin CPU power (separate connector near CPU socket), PCIe 6/8-pin for graphics cards, SATA power for drives, and Molex for legacy devices. The 24-pin connector is the largest and most important - computer won't boot without it properly connected."
  },
  {
    id: 3,
    question: "A custom-built gaming PC experiences random shutdowns during intensive gaming. The power supply is rated at 450W, and the system has a high-end graphics card requiring 350W. What is the likely problem?",
    options: [
      "The case is too small",
      "The power supply is underpowered - insufficient wattage to handle peak system demands",
      "Too much RAM installed",
      "The monitor is too large"
    ],
    correct: 1,
    explanation: "The graphics card alone requires 350W, plus CPU (65-125W typical), motherboard, drives, fans, and other components. Total system power likely exceeds 450W during gaming. When power demand exceeds supply capacity, the PSU shuts down for protection or the system becomes unstable. Calculate total system power: add all component requirements + 20% headroom. For this system: 600-750W PSU recommended. Always check: (1) GPU power requirements, (2) CPU TDP, (3) Number of drives and peripherals, (4) Overclocking (increases power draw). Quality matters too - a cheap 600W PSU may deliver less than a quality 500W PSU. Use PSU calculators online for accurate sizing."
  },
  {
    id: 4,
    question: "A technician notices a PC case has three fans: one at the rear (blowing out), one at the front (pulling in), and one at the top (blowing out). What is this airflow configuration called?",
    options: [
      "Random airflow",
      "Positive or neutral pressure airflow - intake balances exhaust for optimal cooling and dust management",
      "Negative pressure - more exhaust than intake",
      "No airflow configuration exists"
    ],
    correct: 1,
    explanation: "Proper case airflow: front fans intake cool air, rear/top fans exhaust hot air, creating directional airflow across components. Three configurations: (1) Positive pressure - more intake than exhaust, reduces dust (filtered intake), pushes air through gaps, (2) Neutral/balanced - equal intake/exhaust, efficient cooling, (3) Negative pressure - more exhaust than intake, pulls unfiltered air through gaps, more dust accumulation. Best practice: slightly positive pressure with filtered intakes. Airflow path: cool air in front → across drives → through GPU/CPU area → out rear/top. Poor airflow causes: overheating, thermal throttling, shortened component life, increased fan noise. Monitor temps with software; adjust fan configuration if needed."
  },
  {
    id: 5,
    question: "A motherboard has both 3-pin and 4-pin fan headers. What is the difference between them?",
    options: [
      "3-pin fans only work on Tuesdays",
      "4-pin headers support PWM (Pulse Width Modulation) for more precise fan speed control; 3-pin fans use voltage control",
      "3-pin fans are faster",
      "No difference exists"
    ],
    correct: 1,
    explanation: "3-pin fans: power, ground, tachometer (speed sensing). Speed controlled by varying voltage (quieter at low speed but less efficient). 4-pin fans add PWM (Pulse Width Modulation) signal: maintains 12V but varies duty cycle for more precise, efficient speed control across wider RPM range. 4-pin fans work in 3-pin headers (no PWM control). 3-pin fans work in 4-pin headers (voltage control). PWM advantages: finer speed adjustment, better low-speed operation, less electrical noise. Fan headers are labeled: CPU_FAN (critical, usually 4-pin), SYS_FAN/CHA_FAN (system/chassis fans), PWR_FAN (power supply fan control, rare). BIOS/UEFI controls fan curves: temperature thresholds determine fan speeds."
  },
  {
    id: 6,
    question: "What is the 80 PLUS certification rating on a power supply?",
    options: [
      "It weighs 80 pounds",
      "It indicates the PSU's efficiency rating - percentage of AC power converted to DC power with minimal waste as heat",
      "It lasts 80 days",
      "It has 80 cables"
    ],
    correct: 1,
    explanation: "80 PLUS certifies power supply efficiency at different load levels (20%, 50%, 100%). Tiers: 80 PLUS (80% efficient), Bronze (82-85%), Silver (85-88%), Gold (87-90%), Platinum (89-92%), Titanium (90-94%). Higher efficiency means: less wasted energy as heat, lower electricity bills, less cooling needed, potentially quieter operation. Example: 80% efficient PSU drawing 500W from wall delivers 400W to PC (100W lost as heat). A 90% efficient PSU delivers 450W (50W lost). For high-power systems or 24/7 operation, higher efficiency pays for itself. Efficiency varies with load - PSUs are most efficient at 50-80% load. Choose PSU wattage accordingly."
  },
  {
    id: 7,
    question: "A PC randomly shuts down after 30 minutes of use. The case feels very hot. What component should be checked first?",
    options: [
      "The keyboard",
      "The cooling system - CPU/GPU heatsinks may be clogged with dust, thermal paste dried out, or fans not working",
      "The monitor brightness",
      "The operating system version"
    ],
    correct: 1,
    explanation: "Random shutdowns during use + hot case = thermal shutdown (protection mechanism when CPU/GPU overheat). Check: (1) CPU/GPU fans spinning?, (2) Heatsinks clogged with dust?, (3) Thermal paste dried/cracked?, (4) Case fans working?, (5) Adequate case airflow?, (6) Room temperature excessive? Troubleshooting: (1) Open case, clean all fans and heatsinks with compressed air, (2) Verify all fans spin (BIOS/visual check), (3) Monitor temps with software (HWMonitor, Core Temp) - CPU should be <80°C under load, (4) Reapply thermal paste if needed, (5) Improve case airflow. Thermal issues can damage components if ignored. Modern CPUs/GPUs throttle first, then shut down if temps remain critical."
  },
  {
    id: 8,
    question: "A technician is building a PC and notices the power supply has multiple cables with the same connector type. What is this type of power supply called?",
    options: [
      "Fixed cable power supply",
      "Modular or semi-modular power supply - allows connecting only needed cables for better cable management",
      "Broken power supply",
      "Wireless power supply"
    ],
    correct: 1,
    explanation: "Power supply types: (1) Non-modular - all cables permanently attached, cheaper but creates cable clutter, (2) Semi-modular - main cables (24-pin, CPU power) attached, others detachable, good compromise, (3) Fully modular - all cables detachable, cleanest builds, easier maintenance, most expensive. Modular advantages: better airflow (less cable obstruction), cleaner appearance, easier upgrades (connect only what's needed). Use included cables only - mixing cables from different PSUs can damage components (pinouts may differ even if connectors fit). Cable management improves cooling and aesthetics. For cases with limited space or showcase builds, modularity helps significantly."
  },
  {
    id: 9,
    question: "What is the purpose of a UPS (Uninterruptible Power Supply) connected to a desktop computer?",
    options: [
      "To make the computer faster",
      "To provide battery backup power during outages and protect against power surges, brownouts, and electrical noise",
      "To cool the computer",
      "To provide Wi-Fi"
    ],
    correct: 1,
    explanation: "UPS provides: (1) Battery backup - continues powering PC during outages (5-30+ minutes depending on capacity and load), allowing graceful shutdown or continued operation, (2) Surge protection, (3) Line conditioning - filters electrical noise, (4) Brownout protection - boosts voltage during sags. Types: (1) Standby/Offline - switches to battery when power fails (cheapest, brief switchover), (2) Line-interactive - regulates voltage without battery, smooth transition (best for most PCs), (3) Online/Double-conversion - always on battery, perfect power (expensive, for servers/critical systems). Size UPS for: total wattage + runtime needed. Connect: computer, monitor, external drives. Don't connect: laser printers, space heaters (too much power draw)."
  },
  {
    id: 10,
    question: "A gaming PC has a high-end graphics card with two 8-pin PCIe power connectors. What happens if only one is connected?",
    options: [
      "The card works at full performance",
      "The graphics card may not boot, display errors, or run with reduced performance/instability due to insufficient power",
      "Nothing - the second connector is decorative",
      "The computer explodes"
    ],
    correct: 1,
    explanation: "High-power graphics cards require 150W+ beyond what the PCIe slot provides (75W max). Each 6-pin PCIe connector provides 75W, each 8-pin provides 150W. If a card has two 8-pin connectors, it requires both for full power (75W slot + 150W + 150W = 375W total). Connecting only one: (1) System may not POST (Power-On Self-Test), (2) Card displays error message, (3) Card runs but crashes under load, (4) Severely reduced performance. Never use adapters to convert peripheral power to PCIe - fire risk. If PSU lacks required connectors, upgrade PSU. Always connect all required power connectors. Some cards have 6+8-pin or 8+8-pin configurations - both must be connected."
  },
  {
    id: 11,
    question: "What is the difference between a surge protector and a power strip?",
    options: [
      "They are identical",
      "Surge protectors include components (MOVs - Metal Oxide Varistors) that absorb voltage spikes; basic power strips only add outlets without protection",
      "Power strips are always better",
      "Surge protectors don't have power switches"
    ],
    correct: 1,
    explanation: "Basic power strips only multiply outlets - no protection. Surge protectors include MOVs (Metal Oxide Varistors) that divert voltage spikes to ground, protecting equipment from lightning, power surges, and electrical noise. Key specs: (1) Joule rating (energy absorption capacity - 1000+ joules for computers), (2) Clamping voltage (400V or lower preferred), (3) Response time (<1 nanosecond), (4) Protected outlets (all vs some), (5) Indicator light (shows protection active). Surge protectors wear out - replace after major surge or every 3-5 years. Better protection: UPS with surge protection. Don't daisy-chain surge protectors. Not all outlets may be protected - check documentation."
  },
  {
    id: 12,
    question: "A technician is replacing a failed power supply. They notice the replacement has a switch labeled 115V/230V. What is this switch for?",
    options: [
      "To control fan speed",
      "To select input voltage based on country's electrical system (115V for US, 230V for Europe/Asia) - CRITICAL to set correctly",
      "To turn the computer on and off",
      "To adjust monitor brightness"
    ],
    correct: 1,
    explanation: "The voltage selector switch matches the PSU to local electrical standards: 115V (US, Canada, Japan), 230V (Europe, Asia, Australia, most of world). CRITICAL WARNING: setting voltage incorrectly can destroy the PSU and components. If set to 115V in 230V country - PSU may blow immediately. If set to 230V in 115V country - insufficient power, won't work properly. Modern PSUs are often auto-switching (100-240V universal input) with no switch - automatically detects voltage. Always verify: (1) Check PSU label, (2) If switch exists, set to local voltage, (3) If auto-switching, no action needed. When traveling internationally with desktop, check voltage compatibility."
  },
  {
    id: 13,
    question: "A PC power supply has failed and needs replacement. What specifications must match the original?",
    options: [
      "Only the color",
      "Form factor (ATX, SFX, etc.), sufficient wattage, correct connectors for motherboard/CPU/GPU, and physical dimensions to fit the case",
      "Only the brand name",
      "Only the price"
    ],
    correct: 1,
    explanation: "PSU replacement requirements: (1) Form factor - ATX (standard desktop), SFX (small form factor), TFX (slim cases), etc., (2) Wattage - equal or greater than original (calculate based on components, not just replace same), (3) Connectors - 24-pin motherboard, 4/8-pin CPU, PCIe 6/8-pin for GPU, SATA for drives, Molex if needed, (4) Physical size - must fit case (length especially important in compact cases), (5) Efficiency rating (80 PLUS Bronze/Gold/Platinum - higher is better but costs more). Additional considerations: modular vs non-modular, cable length, fan noise, warranty. Verify GPU power requirements - many failures occur when upgrading GPU without upgrading PSU."
  },
  {
    id: 14,
    question: "What does TDP (Thermal Design Power) rating indicate for a CPU?",
    options: [
      "The CPU's clock speed",
      "The maximum amount of heat (in watts) the CPU generates under typical load, determining cooling requirements",
      "The number of cores",
      "The cache size"
    ],
    correct: 1,
    explanation: "TDP (Thermal Design Power) specifies maximum heat output (in watts) under sustained workload, not peak power consumption. It determines minimum cooling requirements. Example: 95W TDP CPU needs heatsink rated for 95W+ cooling capacity. Higher TDP = more heat = larger heatsink/better cooling needed. Common TDP ranges: Laptop CPUs 15-45W, Desktop CPUs 35-125W, High-end desktop/workstation 125-280W. TDP ≠ actual power consumption (usually similar but can vary). Stock coolers (included with CPU) are rated for CPU's TDP. Overclocking increases heat beyond TDP - requires better cooling. When choosing CPU cooler, ensure it's rated above CPU TDP. Liquid cooling handles high TDP better than air cooling in many cases."
  },
  {
    id: 15,
    question: "A liquid cooling system for a CPU is being installed. What component circulates the coolant through the system?",
    options: [
      "The power supply",
      "The pump - moves liquid from reservoir through CPU block to radiator and back",
      "Gravity alone",
      "The motherboard"
    ],
    correct: 1,
    explanation: "Liquid cooling components: (1) Pump - circulates coolant (critical - system fails if pump fails), (2) CPU block (cold plate) - transfers heat from CPU to liquid, (3) Radiator - dissipates heat to air via fans, (4) Reservoir - holds extra coolant, (5) Tubing - connects components, (6) Coolant/fluid. Two types: (1) AIO (All-In-One) - sealed system, pre-filled, easy installation, pump usually in CPU block, (2) Custom loop - user builds/fills, more expensive, better performance, requires maintenance. Pump connects to motherboard pump header or SATA power. Monitor pump speed/function. Liquid cooling advantages: better heat dissipation for high-TDP CPUs, quieter operation, aesthetics. Disadvantages: cost, complexity, potential leak risk (rare in AIOs), pump failure point."
  }
];