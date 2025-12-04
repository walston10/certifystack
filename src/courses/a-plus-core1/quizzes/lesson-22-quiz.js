export const lesson22Quiz = [
  {
    id: 1,
    question: "A user wants to store family photos and videos on removable media to share with relatives. The files include some 4K videos over 5GB each. What optical media format should they use?",
    options: [
      "CD-R (700MB capacity)",
      "DVD-R (4.7GB single-layer) - insufficient for files over 4GB",
      "Blu-ray disc (25GB single-layer, 50GB dual-layer) - supports large files",
      "Floppy disk"
    ],
    correct: 2,
    explanation: "Optical media capacities: (1) CD - 700MB, adequate for music, small files, (2) DVD single-layer - 4.7GB, dual-layer - 8.5GB, good for standard video/photos but individual files limited by file system, (3) Blu-ray single-layer - 25GB, dual-layer - 50GB, triple-layer - 100GB, required for HD video, large files >4GB. File system matters: (1) ISO 9660/UDF on optical discs may have file size limits, (2) For files >4GB, Blu-ray with UDF 2.5+ is best. Recommendation: Blu-ray for 4K video content. Alternative: USB flash drive (no size restrictions, reusable, faster) or cloud storage (Google Photos, Dropbox). Optical media declining in use but still relevant for: long-term archival, physical media distribution, compatibility with players."
  },
  {
    id: 2,
    question: "What is the difference between CD-R and CD-RW?",
    options: [
      "They are identical",
      "CD-R can be written once only (write-once); CD-RW can be erased and rewritten multiple times (rewritable)",
      "CD-RW is faster in all cases",
      "CD-R holds more data"
    ],
    correct: 1,
    explanation: "Optical media types: (1) ROM (Read-Only Memory) - factory-pressed, cannot write (CD-ROM, DVD-ROM, BD-ROM), commercial software/movies, (2) R (Recordable) - write-once, permanent (CD-R, DVD±R, BD-R), cannot erase, good for archival/backups, (3) RW (ReWritable) - can erase and rewrite 1000+ times (CD-RW, DVD±RW, BD-RE), good for temporary storage, data transfer. Same capacity: CD-R and CD-RW both 700MB; DVD-R and DVD-RW both 4.7GB. Writing: (1) Requires compatible drive (most drives support R and RW), (2) Burning software (Windows built-in, ImgBurn, Nero), (3) Choose finalization for maximum compatibility. Use cases: R for permanent archives/distribution, RW for temporary/frequently changing data. RW media slightly more expensive."
  },
  {
    id: 3,
    question: "A computer has an internal optical drive connected via SATA. The drive is not recognized in Windows but appears in BIOS. What should be checked first?",
    options: [
      "The drive is completely broken",
      "Check Device Manager for driver issues (yellow exclamation mark), update/reinstall drivers, or check if drive letter is assigned in Disk Management",
      "Replace the motherboard",
      "Optical drives cannot connect via SATA"
    ],
    correct: 1,
    explanation: "Optical drive troubleshooting (visible in BIOS but not Windows): (1) Check Device Manager - look for yellow exclamation mark on DVD/CD-ROM drives indicating driver issue, (2) Update drivers - right-click device → Update driver, or uninstall and reboot (Windows reinstalls), (3) Check Disk Management - drive may need drive letter assignment, (4) Verify SATA cable connections - both data and power, (5) Try different SATA port on motherboard. If BIOS sees drive: hardware connections are OK, issue is Windows/driver-related. If BIOS doesn't see drive: check cables, try different SATA port, test with known-good drive. Modern optical drives use SATA (older used IDE/PATA). External USB optical drives also common (plug and play). Registry corruption can cause optical drive issues - Microsoft Fix It or manual registry edits may help."
  },
  {
    id: 4,
    question: "What type of SD card should be purchased for recording 4K video on a camera that requires minimum 30 MB/s write speed?",
    options: [
      "Any SD card works the same",
      "SD card with UHS Speed Class 3 (U3) rating or Video Speed Class V30+ - guarantees minimum 30 MB/s write speed",
      "Standard Class 2 SD card",
      "CompactFlash only"
    ],
    correct: 1,
    explanation: "SD card speed classes (minimum sustained write speeds): (1) Speed Class - Class 2 (2 MB/s), Class 4 (4 MB/s), Class 6 (6 MB/s), Class 10 (10 MB/s), (2) UHS Speed Class - U1 (10 MB/s), U3 (30 MB/s), (3) Video Speed Class - V6, V10, V30 (30 MB/s), V60 (60 MB/s), V90 (90 MB/s). For 4K video: minimum U3 or V30 required (30 MB/s write). For 8K video: V60 or V90. SD card types by capacity: (1) SD - up to 2GB, (2) SDHC - 4GB to 32GB, (3) SDXC - 64GB to 2TB. Physical sizes: (1) SD - full size, (2) microSD - mobile devices, adapters available. Look for: capacity needed + speed class for use case. Counterfeit cards common - buy from reputable sellers. Test new cards with benchmark tools (CrystalDiskMark)."
  },
  {
    id: 5,
    question: "A user has important data on a DVD-R that is scratched and unreadable. What might help recover the data?",
    options: [
      "Put it in the microwave",
      "Clean the disc with soft cloth (radial motion from center out), try different optical drive, or use specialized data recovery software",
      "The data is permanently lost - nothing can be done",
      "Freeze the disc"
    ],
    correct: 1,
    explanation: "Optical disc recovery attempts: (1) Clean disc - use soft microfiber cloth, wipe from center to edge (radial), NOT circular motions (can worsen scratches), (2) Mild soap and water - remove fingerprints, dirt, (3) Try different optical drive - some drives read damaged discs better, (4) Professional repair - disc resurfacing/polishing services (rental stores sometimes offer), (5) Data recovery software - IsoBuster, CDRoller (attempt multiple read passes), (6) Freezer method (uncommon) - freeze disc 5 minutes, read immediately (temporary expansion may help). Prevention: (1) Handle by edges only, (2) Store in cases, (3) Avoid direct sunlight/heat, (4) Keep away from moisture, (5) Important data: create multiple copies, use cloud backup. Optical media degrades over time (disc rot) even without scratches - 5-10 year lifespan typical, archival quality claims 100+ years. Never rely solely on optical media for long-term backup."
  },
  {
    id: 6,
    question: "What is the purpose of 'finalizing' or 'closing' a disc after burning data to CD-R or DVD-R?",
    options: [
      "Finalization is not necessary",
      "Finalizing writes the table of contents and closes the session, making the disc readable in standard players and preventing further writes",
      "Finalization erases the disc",
      "Finalization only applies to Blu-ray"
    ],
    correct: 1,
    explanation: "Disc finalization: (1) Writes TOC (Table of Contents) - index of disc contents, (2) Closes session - prevents further writing, (3) Makes disc compatible with standard players (DVD players, car stereos, etc.). Without finalization: (1) Disc only readable in drive that burned it, (2) Some devices won't recognize disc, (3) Can add more data in future sessions (multisession). When to finalize: (1) Always for discs intended for playback in other devices, (2) When disc is full or backup is complete, (3) For maximum compatibility. When to leave open: (1) Incremental backups (add data later), (2) Only using disc on same computer. Most burning software prompts to finalize. Some software auto-finalizes. Can finalize later using burning software (if session wasn't closed). Modern computers often read non-finalized discs, but standalone players require finalization."
  },
  {
    id: 7,
    question: "A user wants to create a bootable USB flash drive with a Windows installation. What file system should the USB drive be formatted with for UEFI compatibility?",
    options: [
      "NTFS only",
      "FAT32 or FAT32 for UEFI boot (though Windows installation files may require NTFS for >4GB files)",
      "exFAT always fails",
      "ext4"
    ],
    correct: 1,
    explanation: "Bootable USB requirements: (1) UEFI boot - requires FAT32 file system (UEFI specification), (2) Legacy BIOS boot - supports FAT32 or NTFS. Challenge: Windows install.wim file often >4GB (FAT32 has 4GB file limit). Solutions: (1) Use tools that split install.wim (Rufus does this automatically), (2) Use FAT32 for small installs or split files, (3) Some modern UEFI supports NTFS (not universal). Creating bootable USB: (1) Tool method - use Rufus, Windows Media Creation Tool, or manufacturer tools, (2) Manual - format FAT32, copy files, may need bootsect command for boot sector. Partition scheme: (1) GPT for UEFI, (2) MBR for Legacy BIOS. Best practice: Use creation tools (Rufus, Media Creation Tool) which handle file system and compatibility automatically. File systems: FAT32 (max compatibility), NTFS (large files, requires NTFS UEFI support), exFAT (some UEFI support)."
  },
  {
    id: 8,
    question: "What is the maximum file size that can be stored on a FAT32 formatted USB flash drive?",
    options: [
      "Unlimited",
      "4GB maximum - larger files require NTFS or exFAT formatting",
      "2TB maximum",
      "700MB maximum"
    ],
    correct: 1,
    explanation: "File system limitations: (1) FAT32 - 4GB max file size, 2TB max partition size (Windows limits format to 32GB but can use larger), good compatibility (all OS, devices), (2) NTFS - 16TB max file size (theoretical 16EB), 256TB max partition (theoretical 16EB), Windows native, file permissions/encryption, limited Mac compatibility (read-only without drivers), (3) exFAT - 16EB max file size, 128PB max partition, designed for flash drives, cross-platform (Windows/Mac/Linux), good for large files. Use cases: (1) FAT32 - maximum compatibility, files <4GB, older devices, (2) NTFS - Windows systems, large files, security needed, (3) exFAT - external drives, large files (video), cross-platform. Cannot store 4K video files (often 5-50GB each) on FAT32. Formatting: Windows Disk Management, third-party tools for FAT32 >32GB. Choose based on device compatibility needs and file sizes."
  },
  {
    id: 9,
    question: "A user has a 128GB microSD card they want to use in their Android phone, camera, and Nintendo Switch. What file system provides the best compatibility?",
    options: [
      "NTFS",
      "exFAT - widely supported across modern devices and handles large files",
      "ext4 (Linux only)",
      "HFS+ (Mac only)"
    ],
    correct: 1,
    explanation: "Cross-platform flash media: (1) exFAT - modern standard for SD/microSD >32GB, supported by: Windows, Mac, Linux (with package), Android, cameras, game consoles, handles files >4GB, (2) FAT32 - older devices, files <4GB, limited to 32GB by Windows formatting (can format larger with third-party tools), universal compatibility. Device compatibility: (1) Android - supports FAT32, exFAT (Android 6.0+), NTFS (limited), (2) Cameras - typically FAT32 (≤32GB), exFAT (>32GB), check manual, (3) Nintendo Switch - FAT32 or exFAT (update required for exFAT), (4) Windows - all formats, (5) Mac - reads NTFS, writes exFAT/FAT32. Recommendation: exFAT for cards >32GB and devices supporting it. Some older devices may need FAT32. Check device manuals for supported file systems before formatting. Formatting erases all data - backup first."
  },
  {
    id: 10,
    question: "An optical drive's tray is stuck and won't eject using the eject button. What is the emergency eject method?",
    options: [
      "Disassemble the entire computer",
      "Use the manual eject pinhole with a straightened paperclip to mechanically release the tray",
      "The drive must be replaced immediately",
      "Pour water on it"
    ],
    correct: 1,
    explanation: "Emergency optical drive eject: (1) Locate pinhole - small hole near tray (front of drive), (2) Straighten paperclip or use eject tool (some drives include), (3) Power off computer (safety), (4) Insert paperclip firmly into pinhole (may need 1-2 cm depth), (5) Apply gentle pressure - tray releases mechanically, (6) Carefully pull tray open. Causes of stuck tray: (1) Software issue - drive not responding to eject command, (2) Disc jammed/stuck inside, (3) Mechanical failure - gears/belt issues, (4) Power issue - insufficient power to motor. After emergency eject: (1) Remove disc if present, (2) Power on, test normal eject, (3) Check Device Manager for errors, (4) Update firmware/drivers. If repeatedly sticks: drive may be failing. Alternative ejection methods: (1) Right-click drive in File Explorer → Eject, (2) Command prompt: 'eject D:' (replace D: with drive letter). Manual eject is safe, designed feature - use when software eject fails."
  },
  {
    id: 11,
    question: "What is the primary advantage of external USB optical drives compared to internal SATA drives?",
    options: [
      "USB drives are always faster",
      "Portability and ease of use - plug and play, no installation required, can be used with multiple computers including laptops without optical drives",
      "USB drives hold more data",
      "Internal drives are obsolete"
    ],
    correct: 1,
    explanation: "External USB optical drives: Advantages: (1) Portability - move between computers easily, (2) Plug and play - no internal installation, driver installation automatic, (3) Laptop compatibility - modern thin laptops lack internal optical drives, (4) No case opening - avoid warranty issues, (5) Shared resource - one drive for multiple systems. Disadvantages: (1) Slower (USB 2.0 bottleneck on older drives), (2) Requires USB port, (3) External power sometimes needed (rare), (4) More expensive than internal. Internal SATA optical drives: Advantages: (1) Integrated - always available, (2) No USB port consumed, (3) Slightly faster (SATA vs USB 2.0), (4) Lower cost. Disadvantages: (1) Installation required, (2) Case opening, (3) Dedicated to one computer, (4) Takes 5.25\" bay, (5) Rare in modern cases. Modern trend: optical drives declining, most users choose external USB when needed. Cloud/download replacing physical media."
  },
  {
    id: 12,
    question: "A user wants maximum storage capacity in the smallest physical size for a portable backup drive. What should they choose?",
    options: [
      "CD-RW discs in a binder",
      "2.5-inch external USB hard drive (2TB-5TB) or external SSD - compact with high capacity",
      "Floppy disks",
      "3.5-inch desktop hard drive (requires separate power)"
    ],
    correct: 1,
    explanation: "Portable storage options: (1) 2.5\" external HDD - 1TB-5TB typical, bus-powered (no external power), affordable ($50-100), moderate speed (80-120 MB/s), portable, (2) External SSD - 250GB-4TB, bus-powered, expensive (2-4× HDD), fast (400-1000+ MB/s), very portable, durable, (3) USB flash drive - 16GB-1TB, ultra-portable, moderate speed, convenient for smaller data, (4) 3.5\" external HDD - 4TB-20TB, requires external power, less portable, high capacity, low $/GB. For maximum capacity + portability: 2.5\" external HDD (5TB models available, truly portable). For speed + portability: external SSD. For capacity without portability concern: 3.5\" HDD. Modern backups: (1) Local - external drive, (2) Cloud - online backup service, (3) 3-2-1 rule - 3 copies, 2 different media, 1 offsite. Portable drive selection: balance capacity, speed, size, cost based on needs."
  },
  {
    id: 13,
    question: "What does the 'UHS-I' or 'UHS-II' marking on an SD card indicate?",
    options: [
      "The card's color",
      "Ultra High Speed bus interface - UHS-II is faster with additional pins (up to 312 MB/s) vs UHS-I (up to 104 MB/s)",
      "The manufacturing date",
      "The warranty period"
    ],
    correct: 1,
    explanation: "SD card bus interfaces (physical connector/speed): (1) Standard/Default Speed - up to 12.5 MB/s, (2) High Speed - up to 25 MB/s, (3) UHS-I (Ultra High Speed I) - up to 104 MB/s, single row of pins, (4) UHS-II - up to 312 MB/s, second row of pins (backward compatible with UHS-I devices but at UHS-I speeds), (5) UHS-III - up to 624 MB/s, (6) SD Express - up to 985 MB/s. Speed classes vs bus interface: (1) Speed class (U1, U3, V30, etc.) = minimum sustained write speed guarantee, (2) Bus interface (UHS-I, UHS-II) = maximum possible speed. Both matter: (1) Camera must support UHS-II to benefit from UHS-II card, (2) UHS-II card in UHS-I device runs at UHS-I speeds. For maximum performance: match card and device capabilities. UHS-II cards have notched second row of pins visible. More expensive but faster for professional photography/video."
  },
  {
    id: 14,
    question: "A DVD drive can read commercial DVD movies but cannot read burned DVD-R discs. What might be the issue?",
    options: [
      "The drive is completely broken",
      "Drive compatibility issue - older DVD drives may not support DVD±R formats, or disc wasn't finalized properly",
      "All DVD drives read all formats equally",
      "DVD-R is not a real format"
    ],
    correct: 1,
    explanation: "DVD drive compatibility: (1) Commercial DVDs - DVD-ROM, factory-pressed, maximum compatibility, (2) Burned DVDs - DVD-R, DVD+R, DVD-RW, DVD+RW, may not be supported by older drives. Common issues: (1) Drive age - DVD readers from late 1990s/early 2000s may not support recordable formats, (2) Disc finalization - disc not finalized/closed won't play in other devices, (3) Media quality - cheap blank discs may be unreadable, (4) Burn speed - too fast may reduce compatibility (burn at 4-8× for best compatibility), (5) Multi-format - DVD-R more compatible than DVD+R historically (modern drives support both). Solutions: (1) Verify disc finalized, (2) Try different brand blank discs, (3) Burn at slower speed, (4) Update drive firmware, (5) Replace with modern drive (supports all formats). DVD formats: -R/-RW (older standard), +R/+RW (newer, technically better), DL (dual-layer 8.5GB). Modern drives support all variants."
  },
  {
    id: 15,
    question: "A user wants to securely erase a USB flash drive before disposal or resale. What is the most effective method?",
    options: [
      "Simply delete files in File Explorer - completely secure",
      "Use secure erase software (DBAN, manufacturer tools) that overwrites data multiple times, or encrypt then format",
      "Breaking the USB in half is unnecessary",
      "Format once is completely secure"
    ],
    correct: 1,
    explanation: "Secure data deletion methods: (1) Quick format - only deletes file table, data remains recoverable with software, INSECURE, (2) Full format - writes zeros to drive (NTFS), better but single pass, (3) Secure erase tools - multiple overwrite passes (Eraser, DBAN, manufacturer tools), (4) Encryption then format - encrypt drive with strong password, then format (data unrecoverable without key), (5) Physical destruction - shred, incinerate (absolute security). For USB flash drives/SSDs: (1) Standard overwriting less effective (wear leveling), (2) Encryption + format recommended, (3) Manufacturer secure erase tools if available, (4) Physical destruction for sensitive data. For HDDs: (1) Multiple overwrite passes (DoD 3-pass, 7-pass), (2) Degaussing (magnetic erasure), (3) Physical destruction (drilling, shredding). Deleted files aren't truly deleted until overwritten. Important data: use secure erase before disposal/resale. Physical destruction most secure but destroys drive."
  }
];