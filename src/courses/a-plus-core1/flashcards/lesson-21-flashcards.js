export const lesson21Flashcards = [
  {
    id: 1,
    front: "How do HDDs (Hard Disk Drives) work?",
    back: "Spinning magnetic platters with read/write heads on actuator arm. Data stored magnetically on platter surfaces. Heads float nanometers above platters. Mechanical device with moving parts. Slower than SSDs but cheaper per GB. Multiple platters for capacity."
  },
  {
    id: 2,
    front: "What are common HDD RPM speeds and their uses?",
    back: "5400 RPM: Slowest, laptop drives, power efficient, quiet. 7200 RPM: Standard desktop, balance of speed/cost. 10,000 RPM: Fast, WD VelociRaptor (discontinued). 15,000 RPM: Fastest, enterprise SAS drives. Higher RPM = faster access but more heat/noise/power."
  },
  {
    id: 3,
    front: "What are the HDD form factors?",
    back: "3.5-inch: Desktop drives, standard size, 1-20+ TB capacity. 2.5-inch: Laptop drives, also used in desktops with adapter, 500 GB-5 TB. 2.5-inch thinner (7mm) for ultrabooks. 1.8-inch: Rare, specialty devices. Height varies: 7mm, 9.5mm, 15mm."
  },
  {
    id: 4,
    front: "What interfaces do HDDs use?",
    back: "SATA: Most common, 6 Gbps (SATA 3.0), consumer drives. SAS: Serial Attached SCSI, enterprise drives, 12 Gbps, hot-swap, dual-port, more reliable. Legacy: IDE/PATA (obsolete). M.2 SATA: Rare for HDDs. USB: External drives."
  },
  {
    id: 5,
    front: "What is NAND flash memory in SSDs?",
    back: "Non-volatile memory storing data in cells. Types: SLC (1 bit/cell, fastest, most durable, expensive), MLC (2 bits/cell), TLC (3 bits/cell, common consumer), QLC (4 bits/cell, cheapest, slowest). More bits = cheaper but slower/less durable."
  },
  {
    id: 6,
    front: "What are the advantages of SSDs over HDDs?",
    back: "Much faster (100x faster access time). No moving parts (more reliable). Silent operation. Lower power consumption. Better for laptops (battery life). Resistant to shock/vibration. Lighter weight. Cooler operation. Faster boot and load times."
  },
  {
    id: 7,
    front: "What are the disadvantages of SSDs compared to HDDs?",
    back: "More expensive per GB. Limited write endurance (TBW rating). Data recovery harder if failed. Performance degrades when full. Still more expensive for very large capacities (multi-TB). Price gap closing over time."
  },
  {
    id: 8,
    front: "What is a 2.5-inch SATA SSD?",
    back: "SSD in traditional 2.5-inch HDD form factor. SATA 3.0 interface (6 Gbps, ~550 MB/s max). Connects like HDD (SATA data + power). Drop-in replacement for HDD. Most common SSD type. Works in any system with SATA. Height usually 7mm."
  },
  {
    id: 9,
    front: "What is M.2 SATA and how fast is it?",
    back: "M.2 form factor using SATA protocol. Same ~550 MB/s speed as 2.5-inch SATA. More compact. No cables needed. B+M key (two notches). Common lengths: 2280, 2260, 2242. Cheaper than NVMe but slower. Adequate for most users."
  },
  {
    id: 10,
    front: "What is M.2 NVMe and how fast is it?",
    back: "M.2 form factor using NVMe protocol over PCIe. Much faster than SATA. PCIe Gen 3: 2000-3500 MB/s. PCIe Gen 4: 5000-7400 MB/s. PCIe Gen 5: 10000+ MB/s. M key (one notch). For OS and games. More expensive than SATA."
  },
  {
    id: 11,
    front: "What is NVMe and why is it faster than SATA?",
    back: "Non-Volatile Memory Express. Protocol designed for SSDs (not adapted from HDDs like SATA). Uses PCIe lanes directly. Lower latency. Parallel queues (65K vs SATA's 32). SATA bottlenecked at 600 MB/s. NVMe can utilize full PCIe bandwidth."
  },
  {
    id: 12,
    front: "What are M.2 key types and what do they mean?",
    back: "B key: One notch left, SATA or PCIe x2. M key: One notch right, PCIe x4 (NVMe). B+M key: Two notches, SATA, fits both B and M slots. A/E key: Wi-Fi/Bluetooth cards. Physical keying prevents wrong installation."
  },
  {
    id: 13,
    front: "What are common M.2 drive lengths?",
    back: "2280: 80mm long, most common. 2260: 60mm. 2242: 42mm. 2230: 30mm (Steam Deck, laptops). First two digits = width (always 22mm). Last two = length. Check motherboard for supported lengths. Standoff adjusts for different lengths."
  },
  {
    id: 14,
    front: "What is mSATA?",
    back: "Mini-SATA. Older compact SSD form factor. SATA speeds (~550 MB/s). Looks like Mini PCIe. Common in older laptops/ultrabooks. Largely replaced by M.2. Different connector than M.2. Not compatible with M.2 slots."
  },
  {
    id: 15,
    front: "What is wear leveling in SSDs?",
    back: "Distributes writes evenly across all memory cells. Prevents specific cells from wearing out prematurely. Managed by SSD controller automatically. Extends SSD lifespan. Why SSDs can last years despite limited write cycles per cell. Critical for TLC/QLC NAND."
  },
  {
    id: 16,
    front: "What is TRIM and why is it important?",
    back: "Command telling SSD which blocks are no longer in use. Allows SSD to erase blocks in background. Maintains performance over time. Prevents write amplification. Enabled by default in modern OS. Without TRIM: SSD slows down as it fills. Windows: 'Optimize Drives' runs TRIM."
  },
  {
    id: 17,
    front: "What is TBW (Total Bytes Written)?",
    back: "Endurance rating for SSDs. Total data that can be written before drive wears out. Examples: 150 TBW, 600 TBW. Higher = longer lifespan. TLC consumer: 150-600 TBW typical. QLC: Lower TBW. Most users never reach TBW limit. Warranty based on TBW or years."
  },
  {
    id: 18,
    front: "What is an SSHD (Hybrid Drive)?",
    back: "Solid State Hybrid Drive. HDD with small SSD cache (8-32 GB). Automatically caches frequently accessed data on SSD portion. Most data on HDD platters. Faster than pure HDD, cheaper than pure SSD. Compromise solution. Less common now as SSD prices dropped."
  },
  {
    id: 19,
    front: "What is the difference between SATA SSD and NVMe performance?",
    back: "SATA SSD: Sequential read/write ~550 MB/s. Random IOPS ~100K. Latency ~50-100μs. NVMe Gen 3: Sequential 2000-3500 MB/s. Random IOPS 500K+. Latency ~10-20μs. NVMe Gen 4: Up to 7400 MB/s. Much faster for large files and OS responsiveness."
  },
  {
    id: 20,
    front: "Do M.2 NVMe drives need heatsinks?",
    back: "High-performance drives benefit from heatsinks. Prevents thermal throttling under sustained load. Some motherboards include M.2 heatsinks. Gen 4 drives run hotter than Gen 3. Gaming/content creation: recommended. Basic use: not critical. Check motherboard clearance."
  },
  {
    id: 21,
    front: "What is over-provisioning in SSDs?",
    back: "Reserved space not visible to OS. Used for: wear leveling, garbage collection, replacing failed cells. Typically 7-10% of capacity. Why 512 GB SSD shows as 476 GB. Improves performance and longevity. Can manually increase OP for better endurance."
  },
  {
    id: 22,
    front: "What is write amplification?",
    back: "Actual data written to NAND exceeds data written by host. Caused by: partial page writes, garbage collection, RAID. Reduces SSD lifespan. TRIM and good controller reduce write amplification. Ratio: 1.0x ideal, 3-4x typical without TRIM. Lower = better longevity."
  },
  {
    id: 23,
    front: "What are common SSD capacities and recommendations?",
    back: "240-256 GB: OS only, minimum. 480-512 GB: OS + some programs. 1 TB: Sweet spot, OS + games + files. 2 TB+: Professional work, large game libraries. Don't fill beyond 75-80% for optimal performance. Larger SSDs often faster."
  },
  {
    id: 24,
    front: "What is DRAM cache on SSDs?",
    back: "Volatile memory for mapping table (where data is stored). Improves performance especially for random writes. DRAM-less SSDs: Slower, cheaper, use HMB (Host Memory Buffer) or system RAM. Budget SSDs often DRAM-less. High-end SSDs have 1-4 GB DRAM."
  },
  {
    id: 25,
    front: "What external storage connection types exist?",
    back: "USB 3.0: 5 Gbps (625 MB/s). USB 3.1 Gen 2: 10 Gbps. USB 3.2 Gen 2x2: 20 Gbps. USB-C: Any speed depending on version. Thunderbolt 3/4: 40 Gbps. eSATA: 6 Gbps (rare now). Actual speed limited by drive inside enclosure."
  },
  {
    id: 26,
    front: "What is the difference between USB flash drives and external SSDs?",
    back: "USB flash drives: Small, portable, slower (50-150 MB/s typical), cheaper, smaller capacities (up to 1 TB). External SSDs: Larger, much faster (500+ MB/s), more expensive, higher capacities, better for frequent use and large files."
  },
  {
    id: 27,
    front: "What is U.2 (SFF-8639)?",
    back: "2.5-inch NVMe SSD connector. Uses PCIe like M.2 NVMe but traditional 2.5\" drive form factor. 4-lane PCIe. Enterprise/workstation use. Hot-swappable. Rare on consumer motherboards. Better cooling than M.2. Capacity and performance similar to M.2 NVMe."
  },
  {
    id: 28,
    front: "What causes SSD performance degradation?",
    back: "Drive nearly full (80%+ reduces performance). No TRIM support. Too many writes (wearing out). Lack of over-provisioning. Thermal throttling. Old firmware. SATA bottleneck. Solutions: keep 20% free, enable TRIM, update firmware, adequate cooling."
  },
  {
    id: 29,
    front: "How do you migrate from HDD to SSD?",
    back: "Methods: Clone entire drive (Cloning software), Fresh Windows install (clean, recommended), Backup and restore. Tools: Macrium Reflect, Clonezilla, manufacturer tools (Samsung Data Migration). Connect both drives (SATA-to-USB adapter if needed). Verify clone before wiping old drive."
  },
  {
    id: 30,
    front: "What are signs of drive failure (HDD vs SSD)?",
    back: "HDD: Clicking/grinding noises, slow performance, bad sectors, SMART errors, won't spin up. SSD: Sudden read-only mode, can't write new data, frequent crashes, files corrupting, SMART errors. Both: Disappearing files, blue screens, system freezes. Backup immediately if suspected."
  }
];