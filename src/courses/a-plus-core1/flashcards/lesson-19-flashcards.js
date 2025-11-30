export const lesson19Flashcards = [
  {
    id: 1,
    front: "What is CPU clock speed and how is it measured?",
    back: "Speed at which CPU executes instructions. Measured in GHz (gigahertz = billions of cycles per second). Examples: 3.5 GHz, 4.8 GHz. Higher = faster but not only factor. Modern CPUs have base and boost clocks. Boost clock higher for short bursts."
  },
  {
    id: 2,
    front: "What is the difference between base clock and boost clock?",
    back: "Base clock: Guaranteed sustained speed under normal conditions. Boost clock: Maximum speed for short periods under load (single/multi-core). Boost requires: good cooling, power headroom, thermal limits not reached. Example: 3.6 GHz base, 5.0 GHz boost."
  },
  {
    id: 3,
    front: "What are CPU cores and what do they do?",
    back: "Independent processing units within CPU. Each core can execute instructions simultaneously. More cores = better multitasking and multi-threaded performance. Modern CPUs: 4-16 cores (mainstream), 24-64+ (HEDT/server). Single-threaded tasks don't benefit from more cores."
  },
  {
    id: 4,
    front: "What is hyper-threading/SMT?",
    back: "Hyper-Threading (Intel) / SMT (Simultaneous Multi-Threading, AMD). One physical core appears as two logical cores to OS. Improves efficiency by 20-30%. Examples: 8-core/16-thread, 6-core/12-thread. Not as good as true cores but better than nothing."
  },
  {
    id: 5,
    front: "What are CPU cache levels (L1, L2, L3)?",
    back: "L1: Smallest (32-64 KB per core), fastest, instructions and data. L2: Larger (256-512 KB per core), very fast. L3: Largest (8-64+ MB shared), slower than L1/L2 but much faster than RAM. More cache = better performance. Reduces RAM access."
  },
  {
    id: 6,
    front: "What is TDP (Thermal Design Power)?",
    back: "Maximum heat CPU generates under load (watts). Indicates cooling requirement. Examples: 65W (efficient), 125W (mainstream), 250W+ (high-end). Higher TDP = more performance but more heat. Choose cooler rated for CPU TDP or higher. Not exact power consumption."
  },
  {
    id: 7,
    front: "What is the difference between Intel and AMD naming schemes?",
    back: "Intel: Core i3/i5/i7/i9 + generation + model (e.g., i7-13700K). AMD Ryzen: 3/5/7/9 + generation + model (e.g., Ryzen 7 7700X). Higher number = better performance. Suffixes: K (unlocked), X (high performance), F (no iGPU), T (low power)."
  },
  {
    id: 8,
    front: "What do Intel CPU suffixes mean?",
    back: "K: Unlocked for overclocking. F: No integrated graphics. T: Low power. X/XE: Extreme performance. S: Special edition. H: High performance mobile. U: Ultra-low power mobile. Example: i9-13900K = 13th gen, unlocked, integrated graphics."
  },
  {
    id: 9,
    front: "What do AMD CPU suffixes mean?",
    back: "X: High performance. XT: Enhanced X. G: Integrated graphics (APU). 3D: 3D V-Cache. E: Low power. No suffix: Standard. Example: Ryzen 9 7950X = Zen 4, high performance. Ryzen 5 5600G = integrated graphics."
  },
  {
    id: 10,
    front: "What is integrated graphics (iGPU)?",
    back: "Graphics processor built into CPU. Intel: UHD Graphics, Iris Xe. AMD: Radeon Graphics (APUs). Benefits: no discrete GPU needed, lower power, sufficient for basic tasks. Not for gaming. Intel CPUs with F suffix lack iGPU."
  },
  {
    id: 11,
    front: "What is an APU?",
    back: "Accelerated Processing Unit - AMD term for CPU with integrated graphics. Examples: Ryzen 5 5600G, Ryzen 7 5700G. Stronger iGPU than Intel equivalents. Good for: budget builds, HTPCs, office PCs. Suffix G indicates APU. Still need discrete GPU for serious gaming."
  },
  {
    id: 12,
    front: "What is CPU virtualization support?",
    back: "Intel VT-x / AMD-V. Hardware support for running virtual machines. Required for: Hyper-V, VMware, VirtualBox. Enables better VM performance. Usually enabled in BIOS. Essential for IT pros running VMs. Windows 11 requires it for installation."
  },
  {
    id: 13,
    front: "What is the CPU installation process for Intel LGA?",
    back: "Lift retention arm. Remove socket cover (save it). Align CPU triangle/notch with socket. Place CPU (no force needed). Lower retention arm (requires force). Apply thermal paste. Mount cooler. Connect CPU power and fan. Boot and check temps."
  },
  {
    id: 14,
    front: "What is the CPU installation process for AMD AM4 (PGA)?",
    back: "Lift retention arm. Align CPU triangle with socket. Place CPU gently (no force). Pins slip into holes. Lower retention arm (slight force). Apply thermal paste. Mount cooler. Connect CPU power and fan. Be careful - bent pins common error."
  },
  {
    id: 15,
    front: "What precautions should you take when installing a CPU?",
    back: "Ground yourself (anti-static). Don't touch pins (LGA socket) or contacts. Align carefully - don't force. Intel: triangle to triangle. AMD AM4: triangle to triangle. Handle by edges. Check for bent pins before installation. One chance - get it right."
  },
  {
    id: 16,
    front: "What are common CPU cooler mounting methods?",
    back: "Push-pins (Intel stock): Press into motherboard holes. Backplate + screws: More secure, AMD/aftermarket. Clip retention: AM4 stock cooler. Threaded standoffs: High-end coolers. Varies by socket and cooler. Always check compatibility before buying."
  },
  {
    id: 17,
    front: "What is overclocking and what is required?",
    back: "Running CPU faster than stock speeds. Requirements: Unlocked CPU (Intel K, AMD X), compatible motherboard (Z/X series), good cooling, quality PSU. Increases performance but: more heat, more power, reduced stability, shorter lifespan potentially. Voids warranty."
  },
  {
    id: 18,
    front: "What Intel chipsets support overclocking?",
    back: "Z-series chipsets only (Z790, Z690, Z590, etc.). B-series and H-series locked. Need unlocked K-series CPU also. B/H chipsets: cheaper, no overclocking, sufficient for most users. Overclocking premium feature - pay more for board and CPU."
  },
  {
    id: 19,
    front: "What AMD chipsets support overclocking?",
    back: "X-series (X670, X570) and B-series (B650, B550) both support overclocking. More flexibility than Intel. A-series chipsets (A620) don't support overclocking. All Ryzen CPUs unlocked (except some APUs). Better value for overclockers."
  },
  {
    id: 20,
    front: "What is CPU throttling and when does it occur?",
    back: "CPU reduces clock speed to prevent overheating. Occurs when: reaching thermal limits (95-100°C), insufficient cooling, poor thermal paste application, dusty cooler. Symptoms: performance drops under load. Solution: improve cooling, clean dust, reapply thermal paste."
  },
  {
    id: 21,
    front: "What is the difference between P-cores and E-cores (Intel 12th gen+)?",
    back: "P-cores (Performance): High performance, high power, for demanding tasks. E-cores (Efficiency): Lower performance, lower power, for background tasks. Hybrid architecture (big.LITTLE). Example: 8P+8E = 16 cores total. Windows scheduler manages which core for which task."
  },
  {
    id: 22,
    front: "What is 3D V-Cache (AMD)?",
    back: "Additional L3 cache stacked on top of CPU die. AMD Ryzen X3D CPUs (5800X3D, 7800X3D). Massive cache increase (96-128 MB total L3). Excellent for gaming - reduces memory latency. Lower clock speeds than non-X3D. Premium feature."
  },
  {
    id: 23,
    front: "What CPU compatibility checks are essential?",
    back: "Socket match (LGA1700, AM5, etc.). Motherboard chipset supports CPU. BIOS version updated for new CPUs. RAM compatibility (DDR4 vs DDR5). Cooler compatible with socket. PSU sufficient wattage. Case clearance for cooler height. TDP within cooling capacity."
  },
  {
    id: 24,
    front: "What is the CPU socket retention mechanism?",
    back: "Intel LGA: Metal retention bracket and arm. AMD AM4: Plastic retention clips. AM5: Metal retention bracket (like Intel). Threadripper: Torque screwdriver required. Holds CPU securely in place. Must be properly engaged or CPU won't make contact."
  },
  {
    id: 25,
    front: "What are signs of CPU failure?",
    back: "System won't POST. Frequent blue screens. Random crashes/freezes. Overheating despite good cooling. Calculation errors. System instability. No display output. Very rare - CPUs usually outlive motherboard. Test with known good CPU if suspected."
  },
  {
    id: 26,
    front: "What is CPU microcode and how is it updated?",
    back: "Low-level CPU instructions and bug fixes. Updated via BIOS/UEFI update. Fixes: security vulnerabilities (Spectre, Meltdown), bugs, compatibility issues. Applied on boot. Can't be updated directly - must update motherboard BIOS. Important for security and stability."
  },
  {
    id: 27,
    front: "What is turbo boost (Intel) / precision boost (AMD)?",
    back: "Automatic overclocking when thermal and power headroom available. Increases clock speed beyond base on demanding tasks. Intel: Turbo Boost 2.0/3.0. AMD: Precision Boost 2/3. Temporary - returns to base when workload reduces. Requires good cooling for sustained boost."
  },
  {
    id: 28,
    front: "What is the difference between 32-bit and 64-bit CPUs?",
    back: "32-bit: 4 GB RAM maximum, older. 64-bit: 128 GB+ RAM support, current standard. Modern CPUs all 64-bit capable. OS must also be 64-bit to use advantages. x86 = 32-bit architecture. x64/x86-64 = 64-bit. All modern CPUs backward compatible with 32-bit."
  },
  {
    id: 29,
    front: "What is IPC (Instructions Per Clock)?",
    back: "Work done per clock cycle. Architectural efficiency. Higher IPC = better performance at same clock speed. Varies by architecture generation. AMD Zen 4 vs Intel Raptor Lake have different IPC. Why newer slower-clocked CPUs can beat older faster-clocked ones."
  },
  {
    id: 30,
    front: "What should you never do with a CPU?",
    back: "Touch pins/contacts. Force it into socket. Install without thermal paste. Over-tighten cooler. Use non-CPU thermal paste. Bend pins (AMD PGA). Run without cooler even briefly. Use wrong socket. Apply too much force on retention arm. Skip grounding yourself."
  }
];