export const lesson17Flashcards = [
  {
    id: 1,
    front: "What are the standard voltage rails in a PC power supply?",
    back: "+3.3V: Low-power components, RAM, some chipsets. +5V: SATA drives, USB, older components. +12V: CPU, GPU, fans, modern high-power components (most important). -12V and +5VSB (standby): Legacy/specialty uses. Most power on +12V rail."
  },
  {
    id: 2,
    front: "How do you calculate power supply wattage requirements?",
    back: "Add up component wattage: CPU (65-250W), GPU (150-450W), drives (5-10W each), fans, RAM, motherboard. Add 20-30% headroom. Online calculators available. Example: 200W CPU + 300W GPU + 100W other = 600W minimum, buy 750W for headroom."
  },
  {
    id: 3,
    front: "What is 80 PLUS certification?",
    back: "Efficiency rating at 20%, 50%, 100% load. 80 PLUS: 80% efficient. Bronze: 82/85/82%. Silver: 85/88/85%. Gold: 87/90/87%. Platinum: 90/92/89%. Titanium: 92/94/90% (best). Higher efficiency = less heat, lower power bill."
  },
  {
    id: 4,
    front: "What is the difference between modular, semi-modular, and non-modular PSUs?",
    back: "Non-modular: All cables permanently attached, cheaper, cable clutter. Semi-modular: Main cables (24-pin, CPU) attached, others detachable. Fully modular: All cables detachable, best cable management, most expensive. Modular better for clean builds."
  },
  {
    id: 5,
    front: "What is the main motherboard power connector?",
    back: "20+4 pin ATX connector (24-pin total). 20-pin original, +4 for more power on modern boards. Can separate into 20+4 for compatibility. Main power to motherboard. Large rectangular connector. Always required."
  },
  {
    id: 6,
    front: "What is the CPU power connector?",
    back: "4-pin or 8-pin (4+4) 12V EPS connector. Provides dedicated power to CPU. Located near CPU socket on motherboard. 4-pin for basic CPUs, 8-pin for modern/high-performance. Some boards have 8+4 or 8+8 for extreme overclocking."
  },
  {
    id: 7,
    front: "What are PCIe power connectors used for?",
    back: "Power graphics cards and high-power PCIe devices. 6-pin: 75W. 8-pin (6+2): 150W. Multiple connectors for high-end GPUs (300-450W cards need 2-3 connectors). Don't use adapters if possible - indicates insufficient PSU."
  },
  {
    id: 8,
    front: "What is SATA power connector used for?",
    back: "15-pin flat connector. Powers SATA drives (HDDs, SSDs), optical drives. Provides +3.3V, +5V, +12V. Multiple connectors per cable (daisy-chained). Replaced Molex for most drives. Most common drive power connector."
  },
  {
    id: 9,
    front: "What is Molex connector used for?",
    back: "4-pin peripheral power connector. Legacy connector. Provides +5V and +12V. Used for: older IDE drives, case fans, LED strips, some adapters. Being phased out. Less common in modern builds. Larger than SATA."
  },
  {
    id: 10,
    front: "What is the purpose of the PSU fan?",
    back: "Cools power supply components. Typically 120mm or 140mm. Location: bottom or rear of PSU. Draws air through PSU. Can be: always-on, temperature-controlled, or semi-passive (stops at low load). Intake or exhaust depending on orientation."
  },
  {
    id: 11,
    front: "How should PSU be oriented in the case?",
    back: "Fan down: Draws cool air from outside case through bottom vent (requires dust filter and clearance). Fan up: Draws warm air from inside case. Modern cases designed for fan down. Improves PSU cooling and doesn't compete with case airflow."
  },
  {
    id: 12,
    front: "What is a CPU cooler and what are the two main types?",
    back: "Removes heat from CPU. Air cooler: Heatsink + fan(s), passive/active, affordable, reliable. Liquid cooler: Pump + radiator + fans, AIO or custom, better cooling, more expensive. Both need thermal paste between CPU and cooler."
  },
  {
    id: 13,
    front: "What is an AIO liquid cooler?",
    back: "All-In-One closed-loop liquid cooler. Pre-filled, sealed, no maintenance. Components: pump (on CPU block), radiator, fans, tubes. Sizes: 120mm, 240mm, 280mm, 360mm (radiator). Better than air for high-end CPUs. More expensive."
  },
  {
    id: 14,
    front: "What is a custom water cooling loop?",
    back: "User-assembled liquid cooling system. Components: pump, reservoir, CPU block, GPU block (optional), radiator(s), tubing, coolant. Requires maintenance (refill coolant). Best cooling performance. Expensive. Enthusiast/extreme overclocking. Risk of leaks."
  },
  {
    id: 15,
    front: "What is thermal paste and why is it needed?",
    back: "Heat-conductive compound applied between CPU/GPU and cooler. Fills microscopic gaps in metal surfaces. Improves heat transfer. Without it: CPU overheats and throttles/shuts down. Apply rice grain sized amount in center. Don't over-apply."
  },
  {
    id: 16,
    front: "How often should thermal paste be replaced?",
    back: "When removing cooler (always replace). Every 2-4 years for maintenance (paste dries out). If temperatures increase over time. When upgrading CPU or cooler. Clean old paste completely with isopropyl alcohol before reapplying."
  },
  {
    id: 17,
    front: "What is the difference between 3-pin and 4-pin fan connectors?",
    back: "3-pin: Voltage control, speed adjusted by varying voltage, older standard. 4-pin PWM: Pulse Width Modulation, speed controlled digitally at constant voltage, more precise, quieter, modern standard. Both work on either header but PWM only works with 4-pin."
  },
  {
    id: 18,
    front: "What does PWM stand for and how does it work?",
    back: "Pulse Width Modulation. Controls fan speed by rapidly turning power on/off. Frequency constant, duty cycle varies (10-100%). More efficient than voltage control. Allows lower minimum speeds. Quieter operation. Requires 4-pin fan and header."
  },
  {
    id: 19,
    front: "Where do case fans connect on the motherboard?",
    back: "CPU_FAN: CPU cooler (required, system won't boot without). SYS_FAN or CHA_FAN: Case fans (multiple headers). AIO_PUMP: AIO pump (sometimes). PWM_FAN: PWM fans. Each header usually supports 1A (multiple fans with splitter or hub)."
  },
  {
    id: 20,
    front: "What is the proper thermal paste application method?",
    back: "Clean old paste with isopropyl alcohol (90%+) and lint-free cloth. Apply rice grain or small pea sized amount to center of CPU. Don't spread - heatsink pressure spreads it. Too much: squeezes out sides (messy, not harmful). Too little: poor coverage, overheating."
  },
  {
    id: 21,
    front: "What are signs of insufficient cooling?",
    back: "High temperatures (CPU >80-90°C under load). Thermal throttling (performance drops). System shutdowns. Loud fan noise (fans at 100%). System instability/crashes. Blue screens. Check: fan operation, dust buildup, thermal paste, case airflow."
  },
  {
    id: 22,
    front: "What is passive cooling?",
    back: "Heatsink without fan. Relies on natural convection and case airflow. Silent operation. Limited cooling capacity. Used for: low-power CPUs, chipsets, RAM, SSDs. Not sufficient for modern high-performance CPUs. Requires good case airflow."
  },
  {
    id: 23,
    front: "What is a heatsink made of and why?",
    back: "Aluminum or copper. Copper: Better thermal conductivity, heavier, more expensive. Aluminum: Lighter, cheaper, good enough for most uses. Heat pipes: Transfer heat efficiently from base to fins. Fins increase surface area for heat dissipation."
  },
  {
    id: 24,
    front: "What are heat pipes and how do they work?",
    back: "Sealed copper tubes with liquid inside. Liquid evaporates at hot end (CPU), vapor travels to cool end (fins), condenses, liquid returns via capillary action. Very efficient heat transfer. Found in quality air coolers and AIO cold plates."
  },
  {
    id: 25,
    front: "What is the difference between positive and negative air pressure for cooling?",
    back: "Positive: More intake than exhaust, prevents dust, cleaner, slight better component cooling. Negative: More exhaust than intake, better hot spot removal, more dust. Balanced: Equal intake/exhaust, compromise. Positive preferred for most builds."
  },
  {
    id: 26,
    front: "What is the minimum PSU wattage for common builds?",
    back: "Basic office: 300-400W. Gaming (mid-range): 550-650W. Gaming (high-end): 750-850W. Enthusiast/multiple GPUs: 1000W+. Always check GPU requirements - highest power component. Buy quality over quantity - 650W quality > 850W cheap."
  },
  {
    id: 27,
    front: "What are symptoms of PSU failure?",
    back: "System won't turn on. Random shutdowns/reboots. Blue screens. Burning smell. Loud fan noise. Coil whine. Component failures (GPU, drives). Unstable voltages. PSU fan not spinning. Test with known good PSU or PSU tester."
  },
  {
    id: 28,
    front: "What is coil whine in a PSU?",
    back: "High-pitched noise from electrical components (inductors/coils) vibrating at high frequencies. Not harmful but annoying. Common under high load. Can occur in PSU or GPU. Varies by unit. Quality PSUs less prone. Sometimes goes away over time."
  },
  {
    id: 29,
    front: "What safety features should quality PSUs have?",
    back: "OVP (Over Voltage Protection). UVP (Under Voltage Protection). OCP (Over Current Protection). OTP (Over Temperature Protection). SCP (Short Circuit Protection). OPP (Over Power Protection). Prevents damage to components during PSU failure."
  },
  {
    id: 30,
    front: "What is fan curve and how is it configured?",
    back: "Graph showing fan speed vs temperature. Configured in BIOS or software. Examples: Silent (low speeds, gradual ramp). Balanced (moderate). Performance (aggressive, high speeds). Custom (user defined). Affects cooling performance and noise. PWM allows precise curves."
  }
];