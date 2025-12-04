export const lesson19Quiz = [
  {
    id: 1,
    question: "A customer is building a gaming PC and wants to know the difference between Intel and AMD processors. What is an accurate statement about current generation CPUs?",
    options: [
      "Intel and AMD CPUs use the same sockets and are interchangeable",
      "Intel and AMD use different socket types and are not interchangeable - each requires a compatible motherboard with the matching socket and chipset",
      "AMD CPUs only work in laptops",
      "Intel CPUs cannot run Windows"
    ],
    correct: 1,
    explanation: "Intel and AMD CPUs are completely incompatible - different sockets, chipsets, and architectures. Intel uses LGA sockets (1700, 1200, 1151) where pins are in the socket. AMD uses AM sockets (AM5, AM4) where pins are on the CPU (PGA) or socket (LGA for AM5). You cannot install an Intel CPU in an AMD motherboard or vice versa. Performance comparison varies by generation and use case - both offer competitive options. When building/upgrading: choose CPU first, then select compatible motherboard with matching socket. The ecosystem (motherboard, chipset, BIOS) is brand-specific."
  },
  {
    id: 2,
    question: "A CPU is advertised as '8 cores, 16 threads'. What does this mean?",
    options: [
      "The CPU has 8 physical processing units and uses hyperthreading/SMT to handle 16 simultaneous tasks",
      "The CPU has 16 physical cores",
      "Threads and cores are unrelated to performance",
      "It means the CPU is broken"
    ],
    correct: 0,
    explanation: "Cores are physical processing units within the CPU - each can execute instructions independently. Threads represent the number of simultaneous tasks the CPU can handle. Technologies like Intel's Hyperthreading or AMD's SMT (Simultaneous Multithreading) allow each core to handle two threads. So 8 cores with hyperthreading = 16 threads. More cores/threads = better multitasking and performance in multi-threaded applications (video editing, 3D rendering, streaming). Gaming benefits vary - some games use 4-8 cores effectively. Single-threaded performance (clock speed) still matters for many tasks. Modern CPUs: mainstream 6-8 cores, enthusiast 12-16 cores, workstation 24-64+ cores."
  },
  {
    id: 3,
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
    id: 4,
    question: "What does CPU clock speed (measured in GHz) represent?",
    options: [
      "The physical size of the CPU",
      "How many billions of cycles per second the CPU can execute - higher GHz generally means faster single-threaded performance",
      "The number of cores",
      "The amount of RAM supported"
    ],
    correct: 1,
    explanation: "Clock speed (frequency) measured in GHz (gigahertz) indicates how many billion cycles per second the CPU executes. Example: 3.5 GHz = 3.5 billion cycles/second. Higher clock speed = faster single-threaded performance (tasks using one core). Modern CPUs have base clock and boost clock - boost temporarily increases speed for demanding tasks. Performance factors beyond clock speed: (1) Number of cores/threads, (2) Architecture efficiency (newer architectures do more per clock), (3) Cache size, (4) IPC (Instructions Per Cycle). A 3.0 GHz modern CPU may outperform a 4.0 GHz older CPU due to architecture improvements. Clock speed is one metric - compare CPUs within same generation primarily, use benchmarks for cross-generation comparison."
  },
  {
    id: 5,
    question: "A CPU installation requires applying thermal paste before attaching the heatsink. What is the recommended amount of thermal paste to apply?",
    options: [
      "Fill the entire CPU surface completely",
      "A small pea-sized amount (or rice grain) in the center of the CPU - pressure from heatsink spreads it evenly",
      "No thermal paste is needed",
      "Cover the heatsink base, not the CPU"
    ],
    correct: 1,
    explanation: "Thermal paste application methods: (1) Pea/dot method - small pea-sized amount in CPU center, heatsink pressure spreads it (most common, works well), (2) Line method - thin line across CPU, (3) Spread method - manually spread thin layer with card/tool (risky - air bubbles). Amount matters: too little = air gaps = poor cooling; too much = excess squishes out, may insulate rather than conduct. Goal: fill microscopic imperfections between CPU and heatsink. Application steps: (1) Clean old paste with isopropyl alcohol 90%+, (2) Apply pea-sized amount, (3) Install heatsink with even pressure, (4) Tighten in X-pattern (diagonal corners). Non-conductive paste is safer (won't short if excess squishes out). Reapply when: replacing cooler, CPU overheating, or paste dried/cracked (3-5 years)."
  },
  {
    id: 6,
    question: "What is CPU cache, and why is it important for performance?",
    options: [
      "A type of RAM installed separately",
      "Ultra-fast memory built into the CPU that stores frequently accessed data, reducing latency - more cache generally improves performance",
      "A cooling system",
      "A storage drive"
    ],
    correct: 1,
    explanation: "CPU cache is extremely fast memory integrated into the CPU die, storing frequently accessed data/instructions. Cache levels: (1) L1 - smallest (32-128 KB per core), fastest, split into instruction and data cache, (2) L2 - larger (256 KB - 1 MB per core), slightly slower, (3) L3 - largest (8-96+ MB shared among cores), slower than L1/L2 but much faster than RAM. Cache hierarchy: CPU checks L1 → L2 → L3 → RAM → Storage (each step slower). Cache hit = data in cache (fast); cache miss = fetch from RAM (slower). More cache = better performance in many workloads (gaming, productivity). Cache size varies by CPU tier - higher-end CPUs have more cache. You cannot upgrade cache - it's fixed in CPU design."
  },
  {
    id: 7,
    question: "A CPU is advertised with 'unlocked multiplier' or 'K suffix' (Intel) or 'X suffix' (AMD). What does this indicate?",
    options: [
      "The CPU is defective",
      "The CPU supports overclocking - increasing clock speeds beyond stock specifications for better performance",
      "The CPU is slower than standard models",
      "The CPU has no warranty"
    ],
    correct: 1,
    explanation: "Unlocked CPUs allow overclocking - manually increasing clock speeds, voltage, and other parameters beyond factory settings. Intel: 'K' suffix (Core i9-13900K), 'KF' (no integrated graphics). AMD: 'X' suffix (Ryzen 9 7950X), though most Ryzen CPUs overclock. Requirements: (1) Unlocked CPU, (2) Compatible motherboard chipset (Intel Z-series, AMD X/B-series), (3) Adequate cooling (overclocking increases heat), (4) Quality power supply. Benefits: increased performance (5-15%+ typical). Risks: higher temperatures, more power consumption, reduced lifespan if voltages too high, stability issues, voided warranty (depends). Overclocking requires: BIOS tweaking, stress testing, temperature monitoring. Not for beginners. Stock speeds are guaranteed stable; overclocks are not."
  },
  {
    id: 8,
    question: "What is TDP (Thermal Design Power) and why is it important when selecting a CPU cooler?",
    options: [
      "The CPU's price",
      "The maximum heat output (in watts) the CPU generates under load - cooler must be rated equal to or higher than CPU's TDP",
      "The CPU's speed",
      "The number of pins"
    ],
    correct: 1,
    explanation: "TDP (Thermal Design Power) specifies the CPU's heat output in watts under typical sustained workload. Example: 125W TDP CPU needs cooler rated for 125W+ cooling capacity. TDP determines: (1) Minimum cooling requirement, (2) Power consumption estimate, (3) System power needs. Common ranges: Low power (15-45W) - laptops, efficiency; Mainstream (65-95W) - desktop standard; High performance (125-170W) - enthusiast/workstation; Extreme (200-280W+) - overclocked/high-end. TDP ≠ maximum power consumption (can exceed TDP in boost states). Cooler selection: stock coolers match CPU TDP; aftermarket coolers specify TDP rating. Insufficient cooling = thermal throttling (CPU reduces speed to prevent damage), shutdowns. Adequate cooling maintains performance and longevity."
  },
  {
    id: 9,
    question: "A technician installed a new CPU but the system won't POST (Power-On Self-Test). The CPU is confirmed compatible with the motherboard socket. What should they check first?",
    options: [
      "Replace the monitor",
      "Verify the CPU power connector (4-pin or 8-pin) near the CPU socket is properly connected",
      "Reinstall Windows",
      "Replace all RAM"
    ],
    correct: 1,
    explanation: "No POST with new CPU troubleshooting: (1) Verify CPU power connected (4-pin or 8-pin near socket) - most common issue, system won't boot without it, (2) Reseat CPU - may not be fully seated in socket, (3) Clear CMOS - reset BIOS to defaults (some boards auto-detect new CPU after CMOS clear), (4) Check BIOS version - may need update to support newer CPU (catch-22 if can't boot), (5) Verify CPU seated correctly - check alignment triangle, (6) Check for bent pins (AMD AM4) or damaged pads (Intel/AMD AM5), (7) Test with known-good CPU if available. Beep codes or diagnostic LEDs provide clues. CPU incompatibility despite correct socket = check chipset compatibility and BIOS version requirements on manufacturer website."
  },
  {
    id: 10,
    question: "What is the difference between integrated graphics and a discrete graphics card?",
    options: [
      "They are identical",
      "Integrated graphics are built into the CPU/motherboard with shared system RAM; discrete graphics cards are separate PCIe cards with dedicated VRAM and higher performance",
      "Integrated graphics are always faster",
      "Discrete cards cannot play games"
    ],
    correct: 1,
    explanation: "Integrated graphics (iGPU): (1) Built into CPU die (Intel UHD, AMD Radeon Graphics), (2) Shares system RAM (no dedicated VRAM), (3) Lower performance, (4) No additional cost/power, (5) Sufficient for: office work, video playback, light gaming. Discrete graphics (dedicated GPU): (1) Separate PCIe card, (2) Dedicated VRAM (GDDR6/GDDR6X), (3) Much higher performance, (4) Additional cost ($200-$2000+), (5) Requires PSU with PCIe power connectors, (6) Essential for: gaming, 3D rendering, video editing, CAD, machine learning. Some CPUs lack integrated graphics (Intel 'F' suffix, AMD Ryzen without 'G'). Systems without iGPU require discrete GPU for display. Budget builds may use integrated graphics initially, upgrade to discrete later."
  },
  {
    id: 11,
    question: "A CPU is described as having 'virtualization support (VT-x/AMD-V)'. What is this feature used for?",
    options: [
      "Playing video games only",
      "Running virtual machines (VMs) efficiently - allows one computer to run multiple operating systems simultaneously",
      "Overclocking the CPU",
      "Cooling the CPU"
    ],
    correct: 1,
    explanation: "Hardware virtualization (Intel VT-x, AMD AMD-V) enables efficient virtual machines. VMs allow running multiple operating systems simultaneously on one physical computer. Example: Run Windows, Linux, and macOS VMs on one PC. Uses: (1) Software development/testing, (2) Running legacy applications, (3) Server consolidation, (4) Security (sandboxing), (5) Testing software safely. Virtualization features: (1) VT-x/AMD-V - basic virtualization, (2) VT-d/AMD-Vi - direct hardware access for VMs, (3) EPT/RVI - memory management optimization. Modern CPUs include virtualization (usually enabled by default, some require BIOS enabling). Hypervisors (VMware, VirtualBox, Hyper-V, KVM) use these features. Without hardware virtualization, VMs run slowly (software emulation). Essential for IT professionals, developers, and power users."
  },
  {
    id: 12,
    question: "What happens if a CPU is installed without a heatsink and the computer is powered on?",
    options: [
      "The computer works normally",
      "The CPU overheats within seconds and shuts down for protection, potentially causing permanent damage if thermal protection fails",
      "The CPU runs faster without cooling",
      "Nothing - heatsinks are optional"
    ],
    correct: 1,
    explanation: "CPUs generate significant heat (50-200W+) and require active cooling. Without heatsink: (1) Temperature spikes to 100°C+ within seconds, (2) Thermal protection triggers immediate shutdown (prevents destruction), (3) Repeated thermal stress degrades/damages CPU, (4) If protection fails: CPU dies permanently. Modern CPUs have thermal throttling (reduce speed when hot) and thermal shutdown (emergency power-off). Never run CPU without cooling - even briefly. Always verify: (1) Heatsink properly mounted with thermal paste, (2) Cooler fan spinning, (3) Power connected to CPU fan header, (4) Plastic protective film removed from heatsink base. Monitor temps with software (50-80°C under load is normal). High temps reduce performance and lifespan. Proper cooling is mandatory, not optional."
  },
  {
    id: 13,
    question: "A customer wants the highest performance CPU regardless of cost. What Intel or AMD processor line would you recommend?",
    options: [
      "Intel Celeron or AMD Athlon",
      "Intel Core i9 / AMD Ryzen 9 (or Threadripper for extreme workstation tasks)",
      "Intel Pentium only",
      "Any CPU is the same performance"
    ],
    correct: 1,
    explanation: "CPU product tiers (mainstream consumer): Budget - Intel Celeron/Pentium, AMD Athlon; Mainstream - Intel Core i3/i5, AMD Ryzen 3/5; High performance - Intel Core i7, AMD Ryzen 7; Enthusiast - Intel Core i9, AMD Ryzen 9. Workstation/HEDT: Intel Core X-series, AMD Ryzen Threadripper. Current gen (2024-2025): Intel Core i9-14900K (24 cores), AMD Ryzen 9 7950X (16 cores). Threadripper: 24-64 cores for professional workloads. Performance factors: cores/threads, clock speed, cache, architecture. Higher tiers cost significantly more ($500-$2000+). For gaming: i7/Ryzen 7 often sufficient. For productivity/content creation: i9/Ryzen 9 or Threadripper. Always match CPU to use case and budget - no point overspending for tasks that don't benefit."
  },
  {
    id: 14,
    question: "What is the CPU socket retention mechanism, and what precaution should be taken when installing a CPU cooler?",
    options: [
      "It's decorative only",
      "The lever/bracket that secures the CPU in the socket - apply even pressure when mounting cooler and tighten screws in X-pattern to avoid damaging CPU",
      "It powers the CPU",
      "It connects to the hard drive"
    ],
    correct: 1,
    explanation: "CPU retention mechanism holds CPU in socket and secures cooler. Intel LGA: Load plate and lever. AMD AM4/AM5: Retention bracket/frame. Installation: (1) CPU installation - align triangle, gently place (no force), lower retention lever (feels stiff - normal), (2) Cooler installation - apply thermal paste, align mounting brackets/clips, apply even pressure, tighten screws in diagonal/X-pattern (prevents uneven pressure/damage). Precautions: (1) Never overtighten - can crack CPU die or PCB, (2) Tighten gradually in X-pattern (corner to diagonal corner), (3) Ensure proper contact (slight resistance normal), (4) Verify cooler doesn't wobble after installation. Uneven mounting: poor contact = hotspots; over-tightening = physical damage. Some coolers (Intel stock) use push-pins; others use brackets with screws. Follow cooler instructions carefully."
  },
  {
    id: 15,
    question: "A user's CPU is consistently running at 95-100°C under load and the system is slow. What is likely happening?",
    options: [
      "The CPU is running at optimal temperature",
      "The CPU is thermal throttling - automatically reducing clock speed to prevent overheating due to inadequate cooling",
      "The CPU is performing at maximum speed",
      "Temperature doesn't affect CPU performance"
    ],
    correct: 1,
    explanation: "Thermal throttling: CPUs reduce clock speed when temperature exceeds safe thresholds (typically 90-100°C) to prevent damage. This protects the CPU but reduces performance significantly. Causes: (1) Inadequate cooling (too small heatsink, fan failure), (2) Dried/missing thermal paste, (3) Dust-clogged heatsink, (4) Poor case airflow, (5) Ambient temperature too high, (6) Aggressive overclocking. Solutions: (1) Check cooler fan spinning, (2) Clean heatsink/fans of dust, (3) Reapply thermal paste, (4) Improve case airflow, (5) Upgrade cooler if undersized for CPU TDP, (6) Reduce overclock. Monitor temps: HWMonitor, Core Temp, or BIOS. Ideal temps: idle 30-50°C, load 50-80°C. Sustained 90°C+ indicates problem. If throttling persists: permanent performance loss. Address cooling issues immediately."
  }
];