export const lesson20Flashcards = [
  {
    id: 1,
    front: "What is DDR RAM and what are the current generations?",
    back: "Double Data Rate - transfers data on rising and falling clock edges. DDR3: Legacy, 240-pin DIMM. DDR4: Current mainstream, 288-pin DIMM. DDR5: Latest, 288-pin DIMM (different notch position than DDR4). Not backward compatible between generations."
  },
  {
    id: 2,
    front: "What are the pin counts for different DDR generations?",
    back: "DDR3 DIMM: 240-pin. DDR4 DIMM: 288-pin. DDR5 DIMM: 288-pin (notch in different position). DDR3 SO-DIMM: 204-pin. DDR4 SO-DIMM: 260-pin. DDR5 SO-DIMM: 262-pin. Notch position prevents wrong type installation."
  },
  {
    id: 3,
    front: "What is the difference between DIMM and SO-DIMM?",
    back: "DIMM: Desktop RAM, larger (133mm long). SO-DIMM: Small Outline DIMM, laptop RAM, about half size (67mm). Same technology, different physical size. Some Mini-ITX boards use SO-DIMM. Cannot interchange - different sockets."
  },
  {
    id: 4,
    front: "What are typical DDR4 RAM speeds?",
    back: "Measured in MHz or MT/s (megatransfers per second). Common speeds: 2133, 2400, 2666, 3000, 3200, 3600, 4000+ MHz. Higher = faster but diminishing returns. CPU/motherboard must support speed. Will run at slowest module speed if mixed."
  },
  {
    id: 5,
    front: "What are typical DDR5 RAM speeds?",
    back: "Faster than DDR4. Starting speeds: 4800, 5200, 5600 MHz. High-end: 6000, 6400, 7200+ MHz. Better performance than DDR4 especially high-end. Lower voltage (1.1V vs 1.2V DDR4). More expensive. Requires DDR5-compatible CPU/motherboard."
  },
  {
    id: 6,
    front: "What is CAS latency (CL)?",
    back: "Column Access Strobe latency. Number of clock cycles for RAM to access data. Lower = faster response. Examples: CL16, CL18, CL36 (DDR5). Notation: DDR4-3200 CL16. Lower CL better but often minimal real-world difference. Matters more for high-speed RAM."
  },
  {
    id: 7,
    front: "What is the relationship between RAM speed and latency?",
    back: "True latency = (CL / Speed) × 2000 = nanoseconds. Higher speed with higher CL can equal same latency. Example: DDR4-3200 CL16 vs DDR4-3600 CL18 similar real latency. Marketing focuses on speed, latency also matters."
  },
  {
    id: 8,
    front: "What is ECC RAM?",
    back: "Error-Correcting Code memory. Detects and corrects single-bit errors. Used in servers, workstations, critical systems. Requires ECC-compatible CPU/motherboard. Slightly slower than non-ECC. More expensive. Consumer CPUs typically don't support ECC."
  },
  {
    id: 9,
    front: "What is registered (buffered) RAM?",
    back: "Has register between RAM and memory controller. Reduces electrical load on controller. Allows more RAM capacity. Used in servers. Slower than unbuffered. Not compatible with desktop boards. Labeled RDIMM. Consumer systems use unbuffered (UDIMM)."
  },
  {
    id: 10,
    front: "What is dual-channel memory?",
    back: "Two memory channels working simultaneously, doubling bandwidth. Requires: 2 or 4 matched DIMMs, installation in correct slots (matching colors). Most common consumer configuration. Significant performance boost over single-channel. Same capacity/speed DIMMs recommended."
  },
  {
    id: 11,
    front: "What is quad-channel memory?",
    back: "Four memory channels, quadruple bandwidth. Requires: 4 or 8 matched DIMMs in specific slots. HEDT platforms only (Intel X299, AMD Threadripper). Significant bandwidth for professional workloads. Overkill for gaming. Need all four channels populated."
  },
  {
    id: 12,
    front: "How should you populate RAM slots for dual-channel?",
    back: "Install in matching colored slots (same channel). 4-slot board: typically A2+B2 first, then A1+B1. Check motherboard manual - varies by manufacturer. Use matched pairs (same capacity, speed, timings). Single stick = single-channel (half bandwidth)."
  },
  {
    id: 13,
    front: "What happens if you mix different RAM speeds?",
    back: "System runs all RAM at slowest module's speed. Example: 3200 MHz + 2666 MHz = all run at 2666 MHz. Not recommended but usually works. Can cause instability. Best practice: use identical modules (same brand, speed, capacity, timings)."
  },
  {
    id: 14,
    front: "What is the proper RAM installation procedure?",
    back: "Align notch with slot key (only fits one way). Push down firmly on both ends until clips snap into place. Should be flush and even. Clips should lock automatically. RAM should sit fully in slot. Don't force - realign if resistance. Test boot after installation."
  },
  {
    id: 15,
    front: "What are common RAM capacities for different uses?",
    back: "Basic use: 8 GB. Gaming/productivity: 16 GB (sweet spot). Content creation: 32 GB. Professional workstation: 64-128 GB. Server: 128 GB+. More RAM doesn't always = better performance. 16 GB sufficient for most users currently."
  },
  {
    id: 16,
    front: "What is RAM voltage and why does it matter?",
    back: "DDR3: 1.5V (standard), 1.35V (low voltage). DDR4: 1.2V (standard), 1.35V (overclocked). DDR5: 1.1V (standard). Higher voltage for overclocked RAM. Set in BIOS (often auto). Too low = instability. Too high = damage. XMP profiles set voltage automatically."
  },
  {
    id: 17,
    front: "What is XMP (Intel) / DOCP (AMD)?",
    back: "Extreme Memory Profile / Direct Overclock Profile. Pre-configured overclocking profiles stored in RAM. Enables advertised speeds (default often slower). Enable in BIOS. One-click overclock. Sometimes unstable - may need to disable. Not all RAM has XMP."
  },
  {
    id: 18,
    front: "What is virtual memory / page file?",
    back: "Uses hard drive space as extended RAM. When RAM full, least-used data moved to disk. Much slower than physical RAM. Windows manages automatically. Can cause slowdowns if constantly paging. Solution: add more physical RAM. Located on C: drive typically."
  },
  {
    id: 19,
    front: "What is the recommended page file size?",
    back: "Windows default: 1.5x physical RAM. Can be system-managed (automatic). Manual: minimum = physical RAM, maximum = 2-3x RAM. SSD better than HDD for page file. More physical RAM = less page file needed. 16+ GB RAM = page file rarely used."
  },
  {
    id: 20,
    front: "What are symptoms of failing RAM?",
    back: "Random blue screens (BSOD). Frequent crashes/freezes. Corrupted files. System won't boot. Memtest86 errors. Programs crashing randomly. Beep codes on boot. Run memory diagnostic to confirm. Can fail partially - intermittent issues common."
  },
  {
    id: 21,
    front: "How do you test RAM for errors?",
    back: "Windows Memory Diagnostic: Built-in, restart required. Memtest86: Bootable, most thorough, run 4+ passes. Memtest86+: Open-source alternative. Prime95: Stress test. Test overnight for thorough check. Any errors = bad RAM. Remove sticks one by one to identify bad one."
  },
  {
    id: 22,
    front: "What is RAM rank (single vs dual rank)?",
    back: "Organization of memory chips. Single-rank: One set of chips accessed at once. Dual-rank: Two sets, slight performance benefit. Most consumer RAM single-rank. Higher capacity often dual-rank. Matters less than capacity/speed. Technical detail for optimization."
  },
  {
    id: 23,
    front: "What is RAM timing notation?",
    back: "Example: 16-18-18-36. Four numbers: CL (CAS Latency)-tRCD-tRP-tRAS. First number (CL) most important. Lower = faster but diminishing returns. Matters more at very high speeds. XMP profiles set timings automatically. Manual tuning for enthusiasts only."
  },
  {
    id: 24,
    front: "What is the difference between non-ECC and ECC RAM visually?",
    back: "Non-ECC: 8 memory chips (or 16 on dual-rank). ECC: 9 memory chips (or 18) - extra chip for error correction. ECC chip obvious when counting. Sometimes labeled on module. Cannot use ECC in non-ECC board. Check motherboard/CPU specs."
  },
  {
    id: 25,
    front: "What is RAM heat spreader and is it necessary?",
    back: "Metal cover on RAM modules for cooling and aesthetics. Helps with overclocked/high-speed RAM. Not essential for standard speeds. Some spreaders tall - check cooler clearance. RGB RAM has tall spreaders. Low-profile RAM for tight clearances."
  },
  {
    id: 26,
    front: "What happens if you install RAM in wrong slots?",
    back: "May run in single-channel (half bandwidth). May not boot at all (some boards). May run but not optimally. Check motherboard manual for correct slot population. A2+B2 most common dual-channel (second and fourth slots). Color matching usually correct."
  },
  {
    id: 27,
    front: "Can you mix RAM brands?",
    back: "Technically yes, often works. Not recommended - can cause instability. Different chips/timings even at same speed. Best practice: identical modules (same brand, model, speed). If mixing: match capacity and speed minimum. Test thoroughly after installation."
  },
  {
    id: 28,
    front: "What is the maximum RAM capacity for different systems?",
    back: "Depends on: CPU memory controller, motherboard slots/channels, OS (32-bit limited to 4 GB). Modern systems: Consumer (128 GB typical max), HEDT (256 GB+), Server (1-2 TB+). Check CPU and motherboard specs. 64-bit OS required for >4 GB."
  },
  {
    id: 29,
    front: "What is memory training during POST?",
    back: "BIOS tests and configures RAM timings on boot. Longer first boot with new RAM. Finding optimal settings for stability. Can take 1-5 minutes. Normal behavior. May boot multiple times. Don't interrupt. Subsequent boots faster."
  },
  {
    id: 30,
    front: "What should you check if RAM isn't detected?",
    back: "Reseat RAM (remove and reinstall firmly). Try one stick at a time. Try different slots. Clean contacts with isopropyl alcohol. Check motherboard manual for correct slots. Test with known good RAM. Check BIOS for RAM settings. Update BIOS. Possible bad RAM or board."
  }
];