export const lesson20Quiz = [
  {
    id: 1,
    question: "A computer has four RAM slots and currently has two 8GB DDR4-3200 modules installed. The user wants to upgrade to 32GB total. What is the best approach?",
    options: [
      "Add any two RAM modules to fill the empty slots",
      "Replace the existing modules with a matched set of four 8GB modules, or add two identical 8GB modules matching the existing speed and specifications",
      "Mix DDR3 and DDR4 modules",
      "RAM cannot be upgraded"
    ],
    correct: 1,
    explanation: "For best performance and compatibility, use matched RAM modules (same capacity, speed, timings, preferably same brand). Two upgrade options: (1) Add two more 8GB DDR4-3200 modules to empty slots (16GB + 16GB = 32GB), or (2) Replace all modules with 4x8GB matched kit. Mixing different RAM can work but may cause: instability, reduced speeds (runs at slowest module's speed), or incompatibility. Best practice: purchase RAM kits sold together (tested for compatibility). Verify: (1) Motherboard supports 32GB total, (2) DDR4 compatibility (DDR3/DDR4/DDR5 are incompatible), (3) Dual-channel population (slots A2+B2 or manual specification). Always match DDR generation and ideally match speed/timings."
  },
  {
    id: 2,
    question: "What is the difference between DDR4 and DDR5 RAM?",
    options: [
      "They are identical and interchangeable",
      "DDR5 is newer with higher speeds (4800+ MT/s vs DDR4's 2133-3200 MT/s), lower voltage (1.1V vs 1.2V), and physically different - not compatible with DDR4 slots",
      "DDR5 is slower than DDR4",
      "DDR4 only works in laptops"
    ],
    correct: 1,
    explanation: "DDR4 vs DDR5 differences: (1) Speed - DDR4: 2133-5000 MT/s typical, DDR5: 4800-8000+ MT/s, (2) Voltage - DDR4: 1.2V, DDR5: 1.1V (more efficient), (3) Physical - different notch positions prevent cross-installation, (4) Architecture - DDR5 has on-die ECC, improved bank groups, (5) Capacity - DDR5 supports higher density modules. DDR5 advantages: higher bandwidth, better performance in memory-intensive tasks, future-proofing. DDR5 disadvantages: higher cost, higher latency initially. Compatibility: motherboard/CPU must support DDR5 - cannot use DDR5 in DDR4 system or vice versa. When building new: DDR5 if budget allows (especially for high-end builds). DDR4 remains viable for budget/mainstream builds."
  },
  {
    id: 3,
    question: "A technician installs RAM but the computer beeps continuously and won't boot. What should they check first?",
    options: [
      "Replace the motherboard immediately",
      "Verify the RAM is fully seated in the slot - reseat by pressing firmly until clips snap into place on both ends",
      "The RAM is defective and needs replacement",
      "Update the BIOS"
    ],
    correct: 1,
    explanation: "Continuous beeping typically indicates RAM not detected. Troubleshooting steps: (1) Reseat RAM - remove and reinstall, press firmly until both side clips snap into locked position (requires significant force), (2) Test each module individually in different slots, (3) Clean RAM contacts and slots with compressed air, (4) Verify correct DDR type for motherboard (DDR4 in DDR4 slot, etc.), (5) Check motherboard's RAM compatibility list (QVL), (6) Test with known-good RAM, (7) Clear CMOS/reset BIOS. RAM installation requires more force than seems comfortable - both clips must lock. Partially seated RAM is the most common issue. Beep patterns indicate specific errors - consult motherboard manual. If reseating doesn't work, test individual modules to isolate faulty stick."
  },
  {
    id: 4,
    question: "What does 'dual-channel memory' mean, and how is it configured?",
    options: [
      "Two separate computers sharing RAM",
      "Installing RAM in matching pairs (same capacity/speed) in specific slots increases memory bandwidth by allowing simultaneous access to two modules",
      "RAM running at double speed",
      "Using two different RAM types"
    ],
    correct: 1,
    explanation: "Dual-channel architecture doubles memory bandwidth by accessing two RAM modules simultaneously. Configuration: (1) Install matching modules in correct slots (typically A2+B2 or A1+B1 - check manual), (2) Modules should be identical capacity and speed, (3) Most motherboards color-code channel slots. Example: 4 slots (A1, A2, B1, B2) - install two modules in A2 and B2 for dual-channel. Benefits: ~20-30% higher memory bandwidth, better performance in memory-intensive tasks, gaming frame rates. Single-channel: one module or modules in same channel. Quad-channel: high-end platforms (HEDT/servers) use four modules across four channels. Verify dual-channel activation in BIOS or Windows Task Manager (Performance tab → Memory → Channels). Improper installation runs single-channel despite having two modules."
  },
  {
    id: 5,
    question: "A computer has 16GB RAM but Windows shows only 8GB available. What could cause this?",
    options: [
      "Windows always shows less RAM",
      "One RAM module failed or isn't detected; integrated graphics reserving RAM; or 32-bit Windows limiting addressable memory",
      "The RAM is working perfectly",
      "Monitor brightness is too low"
    ],
    correct: 1,
    explanation: "Possible causes for missing RAM: (1) Failed/undetected module - check BIOS/UEFI and Task Manager to see detected RAM; test each module individually, (2) Integrated graphics reservation - iGPU shares system RAM (typical: 128MB-2GB depending on settings), (3) 32-bit Windows limitation - maximum 4GB addressable (upgrade to 64-bit for >4GB), (4) Partially seated module, (5) BIOS memory remapping disabled (for >4GB systems), (6) Motherboard memory limit reached. Diagnostics: (1) BIOS shows all RAM = OS issue; BIOS shows less = hardware issue, (2) Windows Task Manager → Performance → Memory shows total installed, (3) Run Windows Memory Diagnostic, (4) Check Event Viewer for memory errors. Common fix: reseat all modules, clear CMOS, ensure 64-bit OS."
  },
  {
    id: 6,
    question: "What is the purpose of ECC (Error-Correcting Code) RAM, and where is it typically used?",
    options: [
      "To make RAM faster for gaming",
      "To detect and correct memory errors automatically - used in servers, workstations, and mission-critical applications where data integrity is essential",
      "To reduce RAM cost",
      "ECC is only marketing terminology"
    ],
    correct: 1,
    explanation: "ECC RAM detects and corrects single-bit memory errors, prevents data corruption. How it works: adds extra bits (parity) to detect errors and correct single-bit errors (detects but can't correct multi-bit errors). Requirements: (1) ECC RAM modules, (2) CPU supporting ECC (Intel Xeon, AMD Ryzen PRO, EPYC), (3) Motherboard with ECC support. Use cases: (1) Servers - uptime critical, data integrity mandatory, (2) Workstations - scientific computing, financial applications, (3) Medical/industrial systems. ECC vs non-ECC: (1) ECC costs 10-20% more, (2) Slightly slower (error-checking overhead), (3) Not beneficial for consumer use (gaming, home PCs). Non-ECC for: gaming, general consumer use. Consumer CPUs/motherboards typically don't support ECC. Memory errors are rare but critical in professional environments."
  },
  {
    id: 7,
    question: "What is RAM speed measured in, and how does it affect performance?",
    options: [
      "Gigabytes (GB)",
      "MT/s (megatransfers per second) or MHz - higher speeds provide better performance, especially in CPU-intensive tasks and gaming",
      "Watts",
      "Celsius"
    ],
    correct: 1,
    explanation: "RAM speed measured in MT/s (megatransfers per second) or MHz (megahertz). DDR4 examples: 2400, 2666, 3200, 3600 MT/s. DDR5 examples: 4800, 5600, 6000, 6400+ MT/s. Higher speeds = faster data transfer between RAM and CPU. Performance impact: (1) CPU-bound tasks benefit most (rendering, compression), (2) Gaming sees moderate gains (5-15% typically), (3) Office work minimal difference. Important factors: (1) Motherboard/CPU support - may not support advertised speeds, (2) XMP/DOCP profiles - enable rated speeds in BIOS (default runs at base JEDEC speed), (3) Diminishing returns - 3200→3600 noticeable, 3600→4000 minimal. Speed vs capacity: for gaming/productivity, 16GB at 3200 MHz better than 8GB at 4000 MHz. Match RAM speed to motherboard specifications."
  },
  {
    id: 8,
    question: "A user wants to enable their DDR4-3600 RAM to run at advertised speeds, but it's running at 2133 MHz. What should they do?",
    options: [
      "Buy new RAM - it's defective",
      "Enable XMP (Intel) or DOCP/EXPO (AMD) profile in BIOS/UEFI to activate the advertised speed",
      "RAM cannot run faster than 2133 MHz",
      "Reinstall Windows"
    ],
    correct: 1,
    explanation: "RAM defaults to JEDEC baseline speeds (DDR4: 2133 MHz, DDR5: 4800 MHz) for compatibility. Rated speeds (3600 MHz) require enabling XMP/DOCP profiles. Procedure: (1) Enter BIOS/UEFI (Delete/F2 during boot), (2) Find memory settings (often under 'Ai Tweaker', 'Extreme Tweaker', or 'Overclocking'), (3) Enable: XMP (Intel), DOCP/EXPO (AMD), or D.O.C.P., (4) Select profile (usually Profile 1), (5) Save and exit. Profiles contain pre-configured timings and voltages for rated speeds. Considerations: (1) Motherboard must support desired speed, (2) CPU memory controller must handle speed, (3) Enabling XMP may void warranty (technically overclocking), (4) Unstable if system can't handle speed - may need lower profile or manual tuning. Verify speed in Windows Task Manager or CPU-Z after enabling."
  },
  {
    id: 9,
    question: "What is CAS latency (CL) in RAM specifications, and how does it affect performance?",
    options: [
      "The physical size of RAM modules",
      "The delay (in clock cycles) between when RAM receives a command and when it responds - lower CAS latency means faster response times",
      "The RAM's temperature",
      "The number of RAM slots"
    ],
    correct: 1,
    explanation: "CAS latency (Column Access Strobe) measures delay in clock cycles between memory controller requesting data and RAM responding. Example: CL16 = 16 clock cycles delay. RAM timings format: CL-tRCD-tRP-tRAS (e.g., 16-18-18-38). Lower CL = faster response (better performance). However, latency must be evaluated with speed: (1) DDR4-3200 CL16 vs DDR4-3600 CL18 - actual latency (nanoseconds) similar due to faster clock, (2) True latency = (CL / Speed) × 2000. Performance impact: (1) Real-world difference often minimal (1-3%), (2) Noticeable in benchmarks, (3) Enthusiasts pursue 'B-die' or low-latency kits. Practical advice: prioritize capacity → speed → latency. Don't overpay significantly for marginally lower latency. Default timing are safe; manual tuning requires stability testing."
  },
  {
    id: 10,
    question: "A laptop's RAM needs upgrading. What form factor should be purchased?",
    options: [
      "Full-size DIMM modules",
      "SO-DIMM (Small Outline DIMM) modules - physically smaller for laptops",
      "Desktop and laptop RAM are identical",
      "Laptops don't use RAM"
    ],
    correct: 1,
    explanation: "Laptop RAM uses SO-DIMM (Small Outline Dual In-line Memory Module) - approximately half the length of desktop DIMM modules. SO-DIMM specifications: (1) Physically smaller (about 2.66 inches vs 5.25 inches), (2) Same DDR generation (DDR4, DDR5) as desktop but different form factor, (3) Lower capacity limits per module historically (now up to 32GB/64GB per SO-DIMM). Compatibility: (1) Verify DDR generation (DDR4 SO-DIMM for DDR4 laptop), (2) Check laptop's maximum RAM capacity and speed support, (3) Some laptops have soldered RAM (non-upgradeable), (4) Some have one SO-DIMM slot + one soldered. Access: typically requires removing bottom panel. Small form factor PCs (Mini-ITX) may also use SO-DIMM. Always verify exact specifications before purchase - SO-DIMM DDR4 won't fit DIMM slot and vice versa."
  },
  {
    id: 11,
    question: "What is the purpose of the notch on a RAM module?",
    options: [
      "Manufacturing defect",
      "Keying mechanism - prevents installing wrong DDR generation in incompatible slots; each DDR type has notch in different position",
      "Decorative design",
      "Cooling vent"
    ],
    correct: 1,
    explanation: "The notch (key) on RAM prevents installation in incompatible slots. Each DDR generation has the notch in a different position: DDR3, DDR4, and DDR5 notches are offset differently. This physical key ensures: (1) Cannot install DDR4 in DDR3 slot (different voltages would damage module), (2) Cannot install DDR3 in DDR4 slot, (3) Correct orientation (prevents backwards installation). Attempting to force wrong generation damages module and/or slot. Visual identification: look at notch position to determine DDR type. SO-DIMM also has notches in different positions per generation. The keying system is a safety feature preventing costly mistakes. Never force RAM - if it doesn't easily slide in, verify: (1) Correct DDR type, (2) Correct orientation (notch aligned), (3) Fully opened slot clips."
  },
  {
    id: 12,
    question: "A computer with 32GB RAM experiences frequent crashes and blue screens. What diagnostic tool should be run to test for faulty RAM?",
    options: [
      "Disk Defragmenter",
      "Windows Memory Diagnostic or MemTest86 - comprehensive RAM testing tools",
      "Antivirus scan only",
      "BIOS update only"
    ],
    correct: 1,
    explanation: "RAM testing tools: (1) Windows Memory Diagnostic (built-in) - restart and automatic test, basic but convenient, (2) MemTest86 (free, bootable) - more thorough, industry standard, tests extensively. Symptoms of bad RAM: (1) Random crashes/freezes, (2) Blue screens (MEMORY_MANAGEMENT, BAD_POOL_HEADER errors), (3) Corrupted files, (4) Application crashes, (5) Boot failures. Testing procedure: (1) Run MemTest86 for multiple passes (minimum 4 hours, overnight preferred), (2) If errors found - test each module individually to identify faulty stick, (3) Try different slots to rule out motherboard issue. Prevention: (1) Use matched modules, (2) Verify compatibility, (3) Don't mix voltages/speeds when possible, (4) Ensure adequate cooling. One error = likely bad RAM (test further to confirm). Replace faulty modules - cannot be repaired."
  },
  {
    id: 13,
    question: "What is the maximum amount of RAM that can be installed in a system?",
    options: [
      "All systems support unlimited RAM",
      "Limited by motherboard (number of slots × maximum per-slot capacity), CPU memory controller, and OS (32-bit vs 64-bit)",
      "All systems max at 16GB",
      "Only BIOS determines RAM capacity"
    ],
    correct: 1,
    explanation: "RAM capacity limits: (1) Motherboard physical - number of slots × max capacity per slot (example: 4 slots × 32GB = 128GB maximum), (2) Motherboard chipset - may limit total despite available slots, (3) CPU memory controller - supports specific maximum, (4) Operating system - 32-bit Windows: 4GB max (3.5GB usable), 64-bit Windows Home: 128GB, 64-bit Windows Pro: 2TB. Real-world: (1) Consumer motherboards: typically 32-128GB, (2) Workstation/server: 256GB-2TB+, (3) Check motherboard specifications for exact limits. Installation: (1) Populate all slots for maximum capacity, (2) Use highest capacity modules supported, (3) Verify BIOS recognizes all RAM. Most users: 16-32GB sufficient; power users/professionals: 64GB+; servers/workstations: 128GB+."
  },
  {
    id: 14,
    question: "A user upgrades from 8GB to 16GB RAM but notices no performance improvement in gaming. Why might this be?",
    options: [
      "The new RAM is defective",
      "8GB was already sufficient for their games - RAM upgrades only help if original amount was insufficient causing paging to disk",
      "16GB is slower than 8GB",
      "RAM never affects gaming"
    ],
    correct: 1,
    explanation: "RAM capacity vs performance: (1) Insufficient RAM = paging to disk (slow) = major performance hit, (2) Adequate RAM = no paging = smooth performance, (3) Excess RAM beyond needs = minimal additional benefit. Gaming RAM requirements (2024-2025): (1) 8GB - minimum for 1080p gaming, sufficient for many games, (2) 16GB - recommended for modern gaming, multitasking, (3) 32GB - enthusiast, future-proofing, heavy multitasking, (4) 64GB+ - professional workloads, not gaming benefit. If 8GB was sufficient (no paging/stuttering), 16GB won't improve FPS. Better performance from: (1) Faster RAM speed (minor 3-8% gain), (2) Better GPU, (3) Faster CPU, (4) SSD vs HDD. Check Task Manager memory usage during gaming - if <90%, more RAM won't help. Focus upgrades on bottlenecks, not excess capacity."
  },
  {
    id: 15,
    question: "What is the difference between registered (buffered) and unregistered (unbuffered) RAM?",
    options: [
      "Registered RAM is faster for gaming",
      "Registered RAM includes register chip for stability in high-capacity systems - used in servers; unregistered RAM is standard for consumer PCs",
      "They are identical",
      "Unregistered RAM is more expensive"
    ],
    correct: 1,
    explanation: "Registered (buffered) RAM: (1) Contains register (buffer chip) between memory controller and RAM chips, (2) Reduces electrical load on memory controller, (3) Enables higher capacity configurations (more modules per channel), (4) Slightly higher latency (one extra clock cycle), (5) Used in: servers, workstations with high RAM capacity (128GB+). Unregistered (unbuffered) RAM: (1) Direct connection to memory controller, (2) Lower latency, (3) Limited capacity per channel, (4) Used in: consumer PCs, gaming systems, laptops. Compatibility: (1) Cannot mix registered and unregistered, (2) Motherboard must support registered RAM specifically, (3) Most consumer motherboards only support unregistered. Visual difference: registered has extra chip visible on module. For home/gaming: use unregistered. For servers requiring massive RAM: use registered ECC."
  }
];