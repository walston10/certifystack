export const lesson21Quiz = [
  {
    id: 1,
    question: "A customer wants to upgrade their computer's storage from a traditional hard drive to an SSD for better performance. What is the primary advantage of SSDs over HDDs?",
    options: [
      "SSDs are physically larger",
      "SSDs have no moving parts, resulting in much faster data access speeds, silent operation, and better durability",
      "SSDs are always cheaper than HDDs",
      "SSDs have unlimited storage capacity"
    ],
    correct: 1,
    explanation: "SSDs (Solid State Drives) use flash memory with no moving parts, providing: (1) Much faster speeds - read/write 500-7000+ MB/s vs HDD's 80-160 MB/s, (2) Near-instant access times (0.1ms vs HDD's 10-15ms), (3) Silent operation (no spinning platters/heads), (4) Better durability (resistant to drops/shocks), (5) Lower power consumption, (6) Cooler operation. Disadvantages: (1) Higher cost per GB, (2) Limited write endurance (though high enough for typical use). HDDs remain viable for: mass storage, backups, archival data. Best practice: SSD for OS/applications (speed), HDD for bulk storage (cost-effective). The performance difference is dramatic - SSDs are the single most impactful upgrade for older systems."
  },
  {
    id: 2,
    question: "A technician is installing a 2.5-inch SATA SSD in a desktop computer. What two connections are required?",
    options: [
      "Only power - data is wireless",
      "SATA data cable (to motherboard) and SATA power cable (from PSU)",
      "Only USB cable",
      "PCIe slot only"
    ],
    correct: 1,
    explanation: "SATA drives require two connections: (1) SATA data cable - thin L-shaped cable connecting drive to motherboard SATA port (one cable per drive), provides data transfer, (2) SATA power cable - wider L-shaped connector from power supply, provides +5V and +12V power. Installation steps: (1) Mount drive in 2.5\" or 3.5\" bay (adapter if needed), (2) Connect SATA data cable to drive and motherboard, (3) Connect SATA power from PSU, (4) Secure cables to prevent disconnection. SATA ports on motherboard are numbered (SATA0, SATA1, etc.) - any port works but document which for troubleshooting. Common mistake: forgetting power connection (drive not detected). Both connectors are keyed L-shape - can only insert one way."
  },
  {
    id: 3,
    question: "What is the difference between an M.2 SATA SSD and an M.2 NVMe SSD?",
    options: [
      "They are identical",
      "M.2 SATA uses SATA protocol (~550 MB/s max); M.2 NVMe uses PCIe lanes for much faster speeds (3,500-7,000+ MB/s)",
      "M.2 SATA is always faster",
      "M.2 NVMe only works in laptops"
    ],
    correct: 1,
    explanation: "M.2 is a form factor (physical interface); the protocol determines speed. M.2 SATA: (1) Uses SATA III protocol over M.2 connector, (2) Limited to ~550 MB/s (same as 2.5\" SATA SSD), (3) Usually has B+M key notches, (4) Cheaper, (5) Sufficient for basic use. M.2 NVMe: (1) Uses PCIe lanes (NVMe protocol), (2) PCIe 3.0: 3,500 MB/s, PCIe 4.0: 7,000 MB/s, PCIe 5.0: 14,000+ MB/s, (3) Usually has M key notch only, (4) More expensive, (5) Best for OS, gaming, professional work. Compatibility: (1) M.2 slot must support NVMe for NVMe drives, (2) Some M.2 slots only support SATA, (3) Check motherboard specifications. Performance difference is dramatic for large file transfers, OS boot, game loading."
  },
  {
    id: 4,
    question: "A traditional hard drive is making clicking noises and the computer is running very slowly. What is likely happening?",
    options: [
      "The drive is operating normally",
      "The drive is failing - clicking indicates read/write head issues (\"click of death\"); back up data immediately and replace drive",
      "The clicking improves performance",
      "Just restart the computer and it will fix itself"
    ],
    correct: 1,
    explanation: "HDD failure symptoms: (1) Clicking/ticking sounds (\"click of death\") - read/write heads failing to read platters, repeatedly attempting to reposition, (2) Grinding/scraping - platter surface damage, (3) Slow performance - drive struggling to read data, (4) Disappearing from BIOS, (5) Error messages, corrupted files, (6) S.M.A.R.T. warnings. Action: (1) IMMEDIATELY back up critical data if possible, (2) Stop using drive (further use causes more damage), (3) Replace drive, (4) Restore from backup, (5) Consider professional data recovery if backup unavailable (expensive $500-$3000+). Prevention: (1) Regular backups (3-2-1 rule), (2) Monitor S.M.A.R.T. status, (3) Replace drives every 3-5 years preventatively. Clicking HDD = imminent failure - data recovery becomes harder as damage increases."
  },
  {
    id: 5,
    question: "A motherboard has M.2 slots labeled with different key types: B key, M key, and B+M key. What do these key types indicate?",
    options: [
      "The color of the drive required",
      "The notch position on the M.2 connector - determines interface support (SATA vs PCIe/NVMe) and physical compatibility",
      "The manufacturer brand",
      "The warranty length"
    ],
    correct: 1,
    explanation: "M.2 key types (notch positions): (1) B key - notch on left (pins 12-19), typically SATA or PCIe x2, (2) M key - notch on right (pins 59-66), typically PCIe x4 NVMe (fastest), (3) B+M key - two notches (both positions), compatible with B or M slots, usually SATA. Common combinations: (1) M key slot + M key drive = NVMe SSD (best performance), (2) M key slot + B+M key SATA drive = works but limited to SATA speeds, (3) B key slot = typically older, SATA only. M.2 lengths: 2230, 2242, 2260, 2280, 22110 (width × length in mm). Most common: 2280 (22mm × 80mm). Verify: (1) Slot supports drive key type, (2) Slot supports drive protocol (SATA vs NVMe), (3) Physical length fits (standoff position). Forcing wrong key damages drive and slot."
  },
  {
    id: 6,
    question: "What is the purpose of TRIM on SSDs, and why is it important?",
    options: [
      "TRIM makes the drive physically smaller",
      "TRIM tells the SSD which data blocks are no longer in use, allowing the drive to maintain performance and extend lifespan through efficient garbage collection",
      "TRIM is a brand name",
      "TRIM only works on HDDs"
    ],
    correct: 1,
    explanation: "TRIM is a command that informs SSDs which data blocks are deleted/unused, enabling efficient garbage collection. How it works: (1) When file deleted, OS marks space as free, (2) TRIM command notifies SSD, (3) SSD can erase blocks during idle time (preparation for future writes), (4) Prevents performance degradation over time. Without TRIM: (1) SSD doesn't know which blocks are free, (2) Must read-modify-write during new writes (slower), (3) Performance degrades as drive fills. Requirements: (1) SSD support (all modern SSDs), (2) OS support (Windows 7+, macOS, Linux), (3) AHCI mode enabled (not IDE mode in BIOS). Verify TRIM: Windows - 'fsutil behavior query DisableDeleteNotify' (0 = enabled). TRIM is automatic on modern systems. HDDs don't use/need TRIM (different technology). Critical for maintaining SSD performance long-term."
  },
  {
    id: 7,
    question: "A desktop has one M.2 NVMe SSD (500GB) as the boot drive and needs more storage. What is the most cost-effective option for adding 2TB of additional storage?",
    options: [
      "Add another M.2 NVMe SSD (most expensive option)",
      "Add a 2TB 3.5-inch SATA HDD - provides high capacity at low cost for bulk storage",
      "Replace the M.2 with a smaller capacity drive",
      "Storage cannot be expanded"
    ],
    correct: 1,
    explanation: "Storage hierarchy for cost-effectiveness: (1) M.2 NVMe SSD - fastest, most expensive ($/GB), OS/applications/games, (2) 2.5\" SATA SSD - moderate speed, moderate cost, alternative for applications, (3) 3.5\" HDD - slowest but cheapest ($/GB), bulk storage/media/backups. For 2TB additional storage: 3.5\" SATA HDD is most cost-effective (~$50-70 vs $150+ for equivalent SSD). Use case: (1) Fast M.2 NVMe for OS and frequently-used programs, (2) Large HDD for media libraries, documents, backups, games played less frequently. Installation: (1) Mount HDD in 3.5\" bay, (2) Connect SATA data and power, (3) Initialize in Disk Management, (4) Format as NTFS, (5) Assign drive letter. Hybrid approach optimizes cost and performance. SSDs for speed-critical tasks, HDDs for capacity."
  },
  {
    id: 8,
    question: "What is the difference between a 2.5-inch drive and a 3.5-inch drive?",
    options: [
      "2.5-inch drives are only for laptops; 3.5-inch drives are only for desktops - they are completely incompatible",
      "2.5-inch drives are physically smaller, used in laptops and SSDs; 3.5-inch drives are larger, traditional desktop HDDs - both can be used in desktops with appropriate mounting",
      "3.5-inch drives are always faster",
      "The numbers indicate storage capacity"
    ],
    correct: 1,
    explanation: "Drive form factors: 2.5-inch: (1) Physical size ~100mm × 70mm × 7-9.5mm, (2) Used in laptops (both HDD and SSD), (3) Lower capacity HDDs (typically 500GB-5TB), (4) All consumer SSDs are 2.5\" form factor, (5) Can be installed in desktops with adapter bracket or 2.5\" bay. 3.5-inch: (1) Physical size ~146mm × 102mm × 26mm, (2) Desktop HDDs exclusively, (3) Higher capacities available (1TB-20TB+), (4) More platters = higher capacity, (5) Require 3.5\" drive bay. Desktop installation: (1) 3.5\" drives mount directly in 3.5\" bays, (2) 2.5\" drives need adapter bracket or 2.5\" bay. Power: both use SATA power connector (same cable). Data: both use SATA data (same cable). Performance: form factor doesn't determine speed - technology does (SSD vs HDD, RPM, etc.)."
  },
  {
    id: 9,
    question: "A technician installed a new HDD but it doesn't appear in File Explorer. The drive is visible in BIOS. What steps are needed?",
    options: [
      "The drive is defective",
      "The drive must be initialized, partitioned, and formatted using Disk Management before it appears in File Explorer",
      "Reinstall Windows",
      "Buy a new computer"
    ],
    correct: 1,
    explanation: "New drive setup procedure in Windows: (1) Open Disk Management (diskmgmt.msc or right-click Start → Disk Management), (2) If prompted, initialize disk (choose GPT for drives >2TB, MBR for compatibility with older systems), (3) Right-click unallocated space → New Simple Volume, (4) Follow wizard: assign drive letter (D:, E:, etc.), format as NTFS (for Windows), (5) Complete wizard. The drive now appears in File Explorer. GPT vs MBR: (1) GPT - modern standard, supports >2TB, unlimited partitions (Windows limit: 128), required for UEFI boot drives, (2) MBR - legacy, 2TB max, 4 primary partitions, BIOS compatibility. File systems: (1) NTFS - Windows standard, file permissions, >4GB files, (2) exFAT - cross-platform (Windows/Mac), >4GB files, external drives, (3) FAT32 - legacy, 4GB file limit, maximum compatibility. This process doesn't delete existing data on used drives but wipes new drives during format."
  },
  {
    id: 10,
    question: "What does HDD RPM (Revolutions Per Minute) indicate, and how does it affect performance?",
    options: [
      "The drive's storage capacity",
      "The rotational speed of the drive's platters - higher RPM (7200) means faster data access than lower RPM (5400)",
      "The number of years the drive will last",
      "The drive's physical size"
    ],
    correct: 1,
    explanation: "HDD RPM measures platter rotation speed - how fast magnetic platters spin. Common speeds: (1) 5400 RPM - slower, quieter, lower power, cooler operation, laptop drives and NAS, ~80-100 MB/s, (2) 7200 RPM - faster, louder, more power, desktop drives, ~120-160 MB/s, (3) 10,000 RPM - high-performance (rare, expensive), enterprise, ~140-180 MB/s, (4) 15,000 RPM - enterprise servers (legacy, replaced by SSDs). Higher RPM = (1) Faster seek times (head positioning), (2) Higher transfer rates, (3) More heat generation, (4) More noise, (5) Higher power consumption. Performance impact is significant for HDDs but all HDDs are dramatically slower than SSDs. Choose: 5400 RPM for quiet/efficient bulk storage, 7200 RPM for better HDD performance, SSD for actual performance needs. RPM matters less now with SSD prevalence."
  },
  {
    id: 11,
    question: "A user wants to clone their existing 500GB HDD (with 300GB used) to a new 1TB SSD. What is the correct procedure?",
    options: [
      "Simply copy and paste all files",
      "Use disk cloning software (Macrium Reflect, Clonezilla, manufacturer tools) to create an exact copy including boot sectors and hidden partitions",
      "Reinstall Windows from scratch",
      "Cloning is impossible"
    ],
    correct: 1,
    explanation: "Drive cloning creates exact replica including OS, applications, settings, boot sectors. Procedure: (1) Connect both drives (original HDD + new SSD simultaneously), (2) Use cloning software - Macrium Reflect Free, Samsung Data Migration (Samsung SSDs), Crucial/WD equivalents, Clonezilla (advanced), (3) Select source (old drive) and destination (new SSD), (4) Start clone process (15 min - 2 hours depending on data), (5) Verify clone successful, (6) Shut down, disconnect old drive, boot from SSD, (7) If successful, format old drive for additional storage or keep as backup. Requirements: (1) Destination equal or larger capacity than used space, (2) Both drives connected simultaneously (USB-to-SATA adapter if needed), (3) Sufficient time for clone. Benefits: (1) Everything transfers (no reinstalls), (2) Faster than fresh install + manual transfer, (3) System boots immediately from new drive. Clean install alternative: fresh Windows installation often better performance (removes accumulated bloat)."
  },
  {
    id: 12,
    question: "What is S.M.A.R.T. monitoring for drives, and why is it important?",
    options: [
      "A brand name for SSDs",
      "Self-Monitoring, Analysis, and Reporting Technology - predicts drive failure by monitoring health metrics like reallocated sectors, temperature, and error rates",
      "A type of drive connector",
      "Only works on HDDs manufactured on Tuesdays"
    ],
    correct: 1,
    explanation: "S.M.A.R.T. (Self-Monitoring, Analysis, and Reporting Technology) monitors drive health through various metrics. Key attributes: (1) Reallocated sectors count - bad sectors remapped (increasing = failing), (2) Current pending sectors - sectors waiting for reallocation, (3) Uncorrectable errors - data cannot be recovered, (4) Temperature - excessive heat reduces lifespan, (5) Power-on hours - age indicator, (6) Spin retry count (HDD) - difficulty spinning up, (7) Wear leveling count (SSD) - write endurance consumed. Monitoring: (1) Check in BIOS (basic status), (2) Use software: CrystalDiskInfo, HDD Sentinel, manufacturer tools, (3) Windows Storage Spaces shows basic health. Status: (1) Good/Healthy - no issues, (2) Warning - degrading, backup data, (3) Bad/Critical - imminent failure, replace immediately. S.M.A.R.T. isn't perfect - drives can fail without warning, but it catches many failures. Check periodically; act on warnings."
  },
  {
    id: 13,
    question: "A motherboard's M.2 slot supports both SATA and NVMe drives. The user installs an M.2 SATA SSD, and SATA ports 5-6 stop working. Why?",
    options: [
      "The motherboard is defective",
      "The M.2 slot shares bandwidth/lanes with SATA ports 5-6 - using M.2 SATA disables those ports (documented in motherboard manual)",
      "SATA ports always fail when using M.2",
      "The SSD is installed incorrectly"
    ],
    correct: 1,
    explanation: "Motherboards have limited SATA and PCIe lanes from chipset. M.2 slots often share lanes with SATA ports to maximize flexibility. Common scenarios: (1) M.2_1 shares with SATA 5-6 (using M.2_1 disables those SATA ports), (2) M.2_2 shares with PCIe slot 2 (using M.2_2 may limit PCIe slot to x8 or disable it), (3) Some M.2 slots share with different resources depending on protocol (SATA vs NVMe). This is normal, documented behavior. Planning: (1) Check motherboard manual's lane sharing diagram, (2) Populate M.2 slots that don't conflict with needed SATA ports, (3) Use PCIe-based M.2 (NVMe) which may use different lanes than SATA-based M.2. Example: If need 6 SATA devices + M.2, ensure M.2 slot doesn't disable needed SATA ports. High-end motherboards have more lanes, less sharing. Lane sharing maximizes options within hardware constraints."
  },
  {
    id: 14,
    question: "What is the maximum capacity of a drive that can be used with MBR partitioning?",
    options: [
      "Unlimited capacity",
      "2TB maximum - larger drives require GPT (GUID Partition Table) partitioning",
      "500GB maximum",
      "MBR supports any size"
    ],
    correct: 1,
    explanation: "MBR (Master Boot Record) limitations: (1) Maximum 2TB partition/drive size (2^32 sectors × 512 bytes), (2) Maximum 4 primary partitions (extended partitions allow more logical drives), (3) Legacy BIOS compatibility, (4) No partition redundancy (single point of failure). GPT (GUID Partition Table): (1) Supports drives >2TB (up to 9.4 ZB theoretical), (2) Virtually unlimited partitions (Windows limits to 128), (3) Partition redundancy (backup partition table), (4) Required for UEFI boot drives, (5) CRC error detection. Recommendations: (1) Use GPT for drives >2TB (required), (2) Use GPT for new systems (even <2TB) for future-proofing, (3) Use MBR only for legacy BIOS compatibility or older systems. Conversion: Can convert MBR→GPT without data loss (Windows Disk Management or third-party tools), but backup first. Windows 11 requires GPT for boot drive."
  },
  {
    id: 15,
    question: "A user's SSD is nearly full (95% capacity). What impact does this have on performance?",
    options: [
      "No impact - SSDs perform the same regardless of capacity used",
      "Performance degrades significantly - SSDs need free space for wear leveling and garbage collection; recommend keeping 10-20% free",
      "The SSD will immediately fail",
      "Performance improves when full"
    ],
    correct: 1,
    explanation: "SSD performance vs capacity: (1) SSD controller needs free blocks for: wear leveling (distributing writes evenly), garbage collection (consolidating data, erasing blocks), over-provisioning (spare area for management), (2) When >90% full: fewer free blocks available, more read-modify-write operations (slower), garbage collection struggles, write performance degrades significantly (can drop 50%+), (3) Read performance less affected but still impacted. Recommendations: (1) Keep SSDs <80% full for best performance, (2) Leave 10-20% free space (ideally 25%+ for heavy use), (3) Larger SSDs perform better when full (more spare area), (4) Over-provisioned models have reserved space (perform better when full). Solutions: (1) Delete unnecessary files, (2) Move large media to secondary HDD, (3) Use disk cleanup tools, (4) Upgrade to larger SSD. Unlike HDDs where fragmentation causes slowdown, SSDs slow from lack of free blocks. Regular maintenance keeps performance optimal."
  }
];