# Lab 21: Storage Devices - HDDs and SSDs - Solution Guide

**Note to Students:** Review this AFTER completing your own research and activities!

---

## Section 1: Concept Check - Answers

**1. What are the key differences between an HDD and an SSD in terms of how they store data?**

**Answer:**

| Aspect | HDD | SSD |
|--------|-----|-----|
| Storage medium | Magnetic platters | NAND flash memory chips |
| Moving parts | Yes (spinning disks, moving heads) | None (solid state) |
| Data access | Mechanical (head seeks to location) | Electronic (instant access) |
| Fragmentation impact | Significant (head travel time) | Minimal (equal access time) |
| Noise | Audible (spinning, clicking) | Silent |
| Shock sensitivity | High (moving parts can crash) | Low (no moving parts) |
| Power consumption | Higher | Lower |

**HDD:** Data is stored as magnetic charges on spinning platters. A read/write head physically moves to locate and access data.

**SSD:** Data is stored as electrical charges in memory cells. Data is accessed electronically with no physical movement required.

---

**2. Explain the difference between a SATA SSD and an NVMe SSD, including their speed differences.**

**Answer:**

| Feature | SATA SSD | NVMe SSD |
|---------|----------|----------|
| Interface | SATA III | PCIe (3.0, 4.0, 5.0) |
| Protocol | AHCI | NVMe |
| Max bandwidth | ~600 MB/s (interface limit) | 3,500-10,000+ MB/s |
| Real-world speed | ~550 MB/s | 3,000-7,000+ MB/s |
| Latency | Higher | Lower |
| Queue depth | 32 commands | 65,535 commands |
| Form factors | 2.5", M.2 | M.2, U.2, PCIe card |
| Price per GB | Lower | Higher |

**Speed difference:** NVMe SSDs are approximately **5-15× faster** than SATA SSDs for sequential operations.

**Why the difference:** SATA was designed for HDDs and is bottlenecked at ~600 MB/s. NVMe connects directly via PCIe, bypassing this limitation.

---

**3. A customer asks whether they should buy a 2TB HDD or a 500GB SSD for the same price. What questions would you ask?**

**Answer:**

**Questions to ask:**

| Question | Why It Matters |
|----------|----------------|
| What will you use the drive for? | OS/apps need speed; media storage doesn't |
| Is this your only drive? | Boot drive should be SSD |
| How much storage do you actually need? | 500GB may be plenty |
| Do you have backup for important files? | HDD failure more sudden |
| Is noise a concern? | HDDs are audible |
| Is this for a laptop? | SSDs better for portability |

**General guidance:**

| Use Case | Recommendation |
|----------|----------------|
| Boot drive / OS | 500GB SSD |
| Game storage (secondary) | Either (SSD for faster loads) |
| Media library | 2TB HDD |
| Work files | 500GB SSD |
| Backup storage | 2TB HDD |

**Best answer:** "For most users, a 500GB SSD for Windows and applications provides a much better experience than a larger HDD. Add an HDD later if you need bulk storage."

---

**4. What is TRIM, and why is it important for SSD performance and longevity?**

**Answer:**

**TRIM** is a command that tells the SSD which data blocks are no longer in use and can be wiped internally.

**Why TRIM is important:**

| Without TRIM | With TRIM |
|--------------|-----------|
| SSD doesn't know deleted data is garbage | SSD knows which blocks are free |
| Must read-erase-write to overwrite | Can write directly to clean blocks |
| Performance degrades over time | Consistent performance |
| More write amplification | Less write amplification |
| Faster wear | Extended lifespan |

**How it works:**

1. You delete a file in Windows
2. Windows marks the space as "available"
3. TRIM tells the SSD "these blocks are garbage"
4. SSD erases blocks during idle time (garbage collection)
5. Blocks are ready for fast writes

**Without TRIM:** The SSD must read the entire block, erase it, then write new data—even for small writes. This is slow and causes extra wear.

**Verify TRIM (Windows):** `fsutil behavior query DisableDeleteNotify` — 0 means enabled.

---

**5. What do the M.2 key types (B key, M key, B+M key) indicate about drive compatibility?**

**Answer:**

| Key Type | Notch Position | Supported Protocols | Lanes |
|----------|----------------|---------------------|-------|
| B key | Left side | SATA, PCIe x2 | Up to 2 |
| M key | Right side | NVMe (PCIe x4), SATA | Up to 4 |
| B+M key | Both sides | SATA, some PCIe | Varies |

**Physical compatibility:**

| Drive Key | B-keyed Slot | M-keyed Slot |
|-----------|--------------|--------------|
| B key drive | ✓ Fits | ✗ Won't fit |
| M key drive | ✗ Won't fit | ✓ Fits |
| B+M key drive | ✓ Fits | ✓ Fits |

**In practice:**

- **M key slots** are most common on modern motherboards (support NVMe)
- **B+M key drives** are usually SATA M.2 drives (maximum compatibility)
- **Pure M key drives** are typically NVMe (high performance)

**Important:** Even if a drive physically fits, the slot must support the protocol (SATA vs NVMe). Check motherboard manual!

---

## Section 2: Activity Solutions

### Activity A: Storage Technology Reference

**HDD components:**

| Component | Purpose |
|-----------|---------|
| Platters | Spinning disks coated with magnetic material; store data |
| Read/write heads | Float above platters; read/write magnetic data |
| Spindle motor | Spins platters at constant RPM |
| Actuator arm | Moves heads across platter surface |
| Controller board | Manages drive operations, cache, interface |
| Cache | Buffer for frequently accessed data (64-256MB) |

**SSD components:**

| Component | Purpose |
|-----------|---------|
| NAND flash chips | Store data in memory cells |
| Controller | Manages read/write, wear leveling, error correction |
| DRAM cache | Speeds up operations, stores mapping table |
| Firmware | Controls SSD behavior and optimization |

**Why SSDs are faster:**

| Factor | HDD | SSD |
|--------|-----|-----|
| Moving parts | Yes (seek time) | No (instant access) |
| Seek time | 5-15 ms | 0.1 ms |
| Random access | Slow (head movement) | Fast (electronic) |
| Sequential access | Moderate | Very fast |

---

### Activity B: HDD Specifications Reference

**HDD RPM:**

| RPM | Use Case | Speed | Noise/Heat |
|-----|----------|-------|------------|
| 5400 | Laptops, NAS, backup | Slowest | Lowest |
| 7200 | Desktop, general use | Standard | Moderate |
| 10000 | Workstations (legacy) | Fast | Higher |
| 15000 | Enterprise/servers | Fastest | Highest |

**Form factors:**

| Form Factor | Dimensions | Use | Max Capacity |
|-------------|------------|-----|--------------|
| 3.5" | 4" × 5.75" × 1" | Desktop | 20TB+ |
| 2.5" | 2.75" × 4" × 7-15mm | Laptop | 5TB |

**Interfaces:**

| Interface | Speed | Connector | Use |
|-----------|-------|-----------|-----|
| SATA III | 6 Gb/s (600 MB/s) | SATA data + power | Consumer |
| SAS | 12 Gb/s | SAS connector | Enterprise |

**Cache:** Temporary buffer for frequently accessed data. Common sizes: 64MB, 128MB, 256MB. Larger cache = better performance for repeated operations.

---

### Activity C: SSD Specifications Reference

**NAND flash types:**

| Type | Bits/Cell | Endurance | Speed | Cost | Use |
|------|-----------|-----------|-------|------|-----|
| SLC | 1 | Highest | Fastest | $$$$$ | Enterprise |
| MLC | 2 | High | Fast | $$$ | Enterprise/Prosumer |
| TLC | 3 | Moderate | Good | $$ | Consumer |
| QLC | 4 | Lower | Moderate | $ | Budget/Read-heavy |

**Form factors:**

| Form Factor | Size | Interface | Use |
|-------------|------|-----------|-----|
| 2.5" | 7mm thick | SATA | Laptop/desktop upgrade |
| M.2 2280 | 22×80mm | SATA or NVMe | Modern desktops/laptops |
| M.2 2242 | 22×42mm | SATA or NVMe | Compact laptops |
| M.2 2230 | 22×30mm | NVMe | Steam Deck, ultrabooks |
| mSATA | 30×50mm | SATA | Older laptops |
| U.2 | 2.5" | NVMe | Enterprise |

**Interfaces:**

| Interface | Protocol | Max Speed | PCIe Lanes |
|-----------|----------|-----------|------------|
| SATA | AHCI | 550 MB/s | N/A |
| NVMe PCIe 3.0 | NVMe | 3,500 MB/s | 4 |
| NVMe PCIe 4.0 | NVMe | 7,000 MB/s | 4 |
| NVMe PCIe 5.0 | NVMe | 10,000+ MB/s | 4 |

**Endurance example:**

600 TBW at 50GB/day = 600,000 GB ÷ 50 GB = 12,000 days = **~32 years**

In reality, you'll upgrade before wearing it out!

---

### Activity D: M.2 Reference

**Key types:**

| Key | Position | Protocols | Use |
|-----|----------|-----------|-----|
| B key | Left notch | SATA, PCIe x2 | Older SATA M.2 |
| M key | Right notch | NVMe (PCIe x4) | Modern NVMe |
| B+M | Both notches | SATA (mainly) | Compatible SATA M.2 |

**Sizes:**

| Size | Dimensions | Use |
|------|------------|-----|
| 2230 | 22×30mm | Compact devices, Steam Deck |
| 2242 | 22×42mm | Thin laptops |
| 2260 | 22×60mm | Less common |
| 2280 | 22×80mm | Standard desktop/laptop |
| 22110 | 22×110mm | Enterprise |

**How to tell if slot supports NVMe:**

1. Check motherboard manual
2. Look at slot label (PCIe vs SATA)
3. Check key type (M key = likely NVMe support)
4. BIOS settings show detected drive type

**M.2 PCIe 4.0 x4 slot:**

- SATA M.2: Usually NO (PCIe-only slot)
- NVMe: YES

Check motherboard manual—some slots support both, some are PCIe-only.

---

### Activity E: Speed Comparison Reference

**Sequential speeds:**

| Type | Read | Write |
|------|------|-------|
| HDD 5400 RPM | ~100 MB/s | ~100 MB/s |
| HDD 7200 RPM | ~150 MB/s | ~150 MB/s |
| SATA SSD | ~550 MB/s | ~520 MB/s |
| NVMe PCIe 3.0 | ~3,500 MB/s | ~3,000 MB/s |
| NVMe PCIe 4.0 | ~7,000 MB/s | ~5,500 MB/s |
| NVMe PCIe 5.0 | ~10,000 MB/s | ~9,500 MB/s |

**Random 4K IOPS:**

| Type | Read IOPS | Write IOPS |
|------|-----------|------------|
| HDD | ~100 | ~100 |
| SATA SSD | ~90,000 | ~80,000 |
| NVMe SSD | ~500,000+ | ~500,000+ |

**Why random I/O matters:** Operating systems and applications perform thousands of small random reads/writes. The difference between 100 IOPS (HDD) and 500,000 IOPS (NVMe) is massive for responsiveness.

**Real-world impact:**

| Task | HDD | SATA SSD | NVMe |
|------|-----|----------|------|
| Windows boot | 45-90 sec | 15-25 sec | 10-15 sec |
| Game loading | 60+ sec | 15-30 sec | 5-15 sec |
| Large file copy | 100 MB/s | 450 MB/s | 2000+ MB/s |
| App launch | 5-15 sec | 1-3 sec | <1-2 sec |

---

### Activity F: SSD Technologies Reference

**TRIM:** Command from OS to SSD indicating which blocks contain deleted data and can be erased. Without TRIM, SSD must read-modify-write entire blocks, slowing performance.

**Wear leveling:** Controller distributes writes evenly across all NAND cells to prevent wearing out any single area. Extends SSD lifespan significantly.

**Over-provisioning:** Reserved space (typically 7-28%) for:
- Wear leveling
- Garbage collection
- Bad block replacement
- Performance buffer

**SSD lifespan factors:**

| Factor | Impact |
|--------|--------|
| NAND type | TLC/QLC have lower endurance than SLC/MLC |
| Write amplification | More internal writes = more wear |
| Temperature | High temps accelerate wear |
| Fill level | Near-full drives wear faster |
| TRIM | Enabled = better performance and longevity |

---

### Activity H: RAID Reference

| Level | Drives | Fault Tolerance | Speed | Capacity |
|-------|--------|-----------------|-------|----------|
| RAID 0 | 2+ | None | Fastest | 100% |
| RAID 1 | 2 | 1 drive can fail | Read boost | 50% |
| RAID 5 | 3+ | 1 drive can fail | Good | (n-1) drives |
| RAID 10 | 4+ | 1 per mirror pair | Fast | 50% |

**Descriptions:**

| Level | Description |
|-------|-------------|
| RAID 0 | Striping - splits data across drives for speed, no redundancy |
| RAID 1 | Mirroring - exact copy on two drives |
| RAID 5 | Striping with distributed parity - balance of everything |
| RAID 10 | Mirrors that are striped - speed + redundancy |

---

### Activity I: External Storage Reference

| Interface | Speed | Use |
|-----------|-------|-----|
| USB 2.0 | 480 Mb/s (60 MB/s) | Legacy, keyboards |
| USB 3.0 | 5 Gb/s (625 MB/s) | External drives |
| USB 3.1 Gen 2 | 10 Gb/s (1.25 GB/s) | Fast external SSD |
| USB 3.2 Gen 2x2 | 20 Gb/s (2.5 GB/s) | High-speed portable |
| USB4 | 40 Gb/s (5 GB/s) | Fastest USB |
| Thunderbolt 3/4 | 40 Gb/s | Pro external storage |

**Recommendations:**

| Use | Best Choice | Why |
|-----|-------------|-----|
| Backup storage | External HDD | Capacity per dollar |
| Portable work | External SSD | Speed, durability |
| Media library | External HDD | Capacity |
| Video editing scratch | External NVMe (TB3) | Speed critical |

---

### Activity J: Storage Selection Reference

**Scenario 1: Budget Gaming**
- Primary: 500GB NVMe SSD (~$50) - OS and favorite games
- Secondary: 1TB HDD (~$40) - Game library overflow
- Reasoning: Fast boot/loads for main games, bulk storage for library

**Scenario 2: Content Creator**
- Boot: 500GB NVMe SSD (~$50) - OS and apps
- Project: 2TB NVMe SSD (~$150) - Active projects (speed critical)
- Archive: 4TB HDD (~$80) - Completed projects
- Reasoning: Fast project drive essential for video timeline scrubbing

**Scenario 3: Office Computer**
- Drive: 256GB SATA SSD (~$25) or 500GB (~$40)
- Reasoning: Any SSD transforms office PC experience; capacity needs are minimal

**Scenario 4: NAS/Home Server**
- 2× 4TB NAS-rated HDD (WD Red, Seagate IronWolf) (~$200 each)
- RAID 1 for redundancy
- Reasoning: NAS drives rated for 24/7, RAID 1 protects against drive failure

---

### Activity K: Troubleshooting Reference

**Symptoms:**

| Symptom | HDD Cause | SSD Cause |
|---------|-----------|-----------|
| Not detected | Dead drive, cable, BIOS | Dead drive, cable, BIOS |
| Slow performance | Failing, fragmented | Near full, TRIM issue |
| Clicking | Head crash (failing!) | N/A (SSDs don't click) |
| Freezes | Bad sectors | Controller issue |
| Corrupted files | Bad sectors, cable | NAND wear, controller |
| SMART warnings | Impending failure | NAND wear |

**Key SMART attributes:**

| Attribute | Meaning |
|-----------|---------|
| Reallocated Sector Count | Bad sectors replaced (increasing = failing) |
| Current Pending Sector Count | Sectors waiting to be reallocated |
| Power-On Hours | Total usage time |
| Temperature | Operating temp |
| Wear Leveling Count | SSD cell wear status |

**Warning signs:**

1. Clicking or grinding noises (HDD)
2. Increasing SMART errors
3. Files becoming corrupted
4. Longer access times
5. Frequent freezes during disk access

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Clicking HDD, Slow Performance

**Immediate action:** Back up all data NOW (if possible).

**What's happening:** Clicking indicates the read/write heads are failing to find data or the actuator is malfunctioning. This is a sign of imminent drive failure.

**Steps:**
1. Don't power off/on repeatedly (can worsen damage)
2. Clone drive immediately to another drive if readable
3. Use data recovery software if needed
4. Replace drive - do not trust it with important data

---

### Scenario 2: SATA SSD "Only a Little Faster"

**Explanation:** The dramatic speed improvement from SSD is in **random access** (applications, OS), not necessarily perceived boot time.

**What to check:**
- Is Windows installed on the SSD (not still on HDD)?
- Is AHCI enabled in BIOS (not IDE mode)?
- Are startup programs loading slowly from HDD?
- Is TRIM enabled?

**Reality:** Boot time improvement is noticeable (45sec → 15sec) but not "instant." The real improvement is in daily responsiveness—app launches, file access, multitasking.

---

### Scenario 3: NVMe SSD Only Showing 500 MB/s

**Possible causes:**

| Cause | Solution |
|-------|----------|
| Installed in SATA-only M.2 slot | Move to NVMe-capable slot |
| PCIe set to x1 or x2 mode | Check BIOS settings |
| Using SATA M.2 drive by mistake | Verify drive model |
| Old AHCI driver instead of NVMe | Install NVMe driver |
| PCIe generation limited | Check motherboard PCIe version |
| Thermal throttling | Improve cooling |

Most common: Drive is in a SATA M.2 slot or the slot is limited to PCIe x2.

---

### Scenario 4: One 4TB NVMe vs Two 2TB NVMe

**Factors to consider:**

| Factor | Single 4TB | Two 2TB |
|--------|------------|---------|
| Speed | Standard | RAID 0 doubles speed |
| Redundancy | None | None (or RAID 1 = 2TB) |
| Cost | Usually cheaper | Slightly more |
| Failure impact | Lose everything | Lose everything (RAID 0) |
| Flexibility | Simple | Can dedicate drives |
| M.2 slots used | 1 | 2 |

**For video editing:**
- Single 4TB: Simpler, plenty fast
- Two 2TB in RAID 0: Maximum speed, good for scratch disk
- Two 2TB separate: OS on one, projects on other

**Recommendation:** Two separate drives (not RAID) - one for OS/apps, one dedicated for projects. This isolates work and provides better organization.

---

## Key Takeaways

**For the A+ Exam:**

1. **HDD:** Mechanical, platters spin, heads move, 5400/7200 RPM common

2. **SSD:** Solid state, NAND flash, no moving parts

3. **SATA:** ~550 MB/s max (applies to both HDD and SSD)

4. **NVMe:** 3,500-10,000+ MB/s via PCIe

5. **M.2 keys:** B = SATA, M = NVMe, B+M = SATA (compatible)

6. **M.2 sizes:** 2280 most common (22mm × 80mm)

7. **NAND types:** SLC > MLC > TLC > QLC (endurance)

8. **TRIM:** Essential for SSD performance and longevity

9. **RAID 0:** Speed, no redundancy
   **RAID 1:** Mirror, 1 drive failure tolerance
   **RAID 5:** Striping + parity

**For Real-World Skills:**

- Always recommend SSD for boot drive
- Check M.2 slot compatibility (NVMe vs SATA)
- Use CrystalDiskInfo to monitor drive health
- Back up clicking HDDs immediately
- Enable TRIM for SSDs (usually automatic in Windows)

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 21: Storage Devices - HDDs and SSDs - Solution Guide*