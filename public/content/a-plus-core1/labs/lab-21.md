# Lab 21: Storage Devices - HDDs and SSDs

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 35-40 minutes
**Exam Objectives:** 3.3 - Given a scenario, select and install storage devices

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the key differences between an HDD and an SSD in terms of how they store data?**

2. **Explain the difference between a SATA SSD and an NVMe SSD, including their speed differences.**

3. **A customer asks whether they should buy a 2TB HDD or a 500GB SSD for the same price. What questions would you ask to help them decide?**

4. **What is TRIM, and why is it important for SSD performance and longevity?**

5. **What do the M.2 key types (B key, M key, B+M key) indicate about drive compatibility?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses research and system tools** - Master storage concepts without physical installation.

---

#### Activity A: Storage Technology Fundamentals

**Goal:** Understand how HDDs and SSDs work.

**Hard Disk Drive (HDD) components:**

| Component | Purpose |
|-----------|---------|
| Platters | |
| Read/write heads | |
| Spindle motor | |
| Actuator arm | |
| Controller board | |
| Cache | |

**How HDDs store data:**

Describe the process of reading data from an HDD:

_________________________________________________________________

_________________________________________________________________

**Solid State Drive (SSD) components:**

| Component | Purpose |
|-----------|---------|
| NAND flash chips | |
| Controller | |
| DRAM cache | |
| Firmware | |

**How SSDs store data:**

Describe the difference from HDDs:

_________________________________________________________________

_________________________________________________________________

**Why are SSDs faster than HDDs?**

| Factor | HDD | SSD |
|--------|-----|-----|
| Moving parts | | |
| Seek time | | |
| Random access | | |
| Sequential access | | |

---

#### Activity B: HDD Specifications

**Goal:** Understand HDD specifications and selection.

**HDD RPM (Rotations Per Minute):**

| RPM | Use Case | Relative Speed | Noise/Heat |
|-----|----------|----------------|------------|
| 5400 | | | |
| 7200 | | | |
| 10000 | | | |
| 15000 | | | |

**HDD form factors:**

| Form Factor | Dimensions | Typical Use | Max Capacity |
|-------------|------------|-------------|--------------|
| 3.5" | | | |
| 2.5" | | | |

**HDD interfaces:**

| Interface | Speed | Connector | Use Case |
|-----------|-------|-----------|----------|
| SATA III | | | |
| SAS | | | |

**HDD cache sizes:**

What is the cache on an HDD, and why does size matter?

_________________________________________________________________

Common cache sizes: _______, _______, _______ MB

**HDD reliability metrics:**

| Metric | What It Means |
|--------|---------------|
| MTBF | |
| AFR | |
| Load/unload cycles | |
| Warranty period | |

---

#### Activity C: SSD Specifications

**Goal:** Understand SSD specifications and selection.

**NAND flash types:**

| Type | Bits per Cell | Endurance | Speed | Cost | Use Case |
|------|---------------|-----------|-------|------|----------|
| SLC | | | | | |
| MLC | | | | | |
| TLC | | | | | |
| QLC | | | | | |

**SSD form factors:**

| Form Factor | Dimensions | Interface Options | Common Use |
|-------------|------------|-------------------|------------|
| 2.5" | | | |
| M.2 2280 | | | |
| M.2 2242 | | | |
| M.2 2230 | | | |
| mSATA | | | |
| U.2 | | | |

**SSD interfaces:**

| Interface | Protocol | Max Speed | PCIe Lanes |
|-----------|----------|-----------|------------|
| SATA | | | |
| NVMe (PCIe 3.0) | | | |
| NVMe (PCIe 4.0) | | | |
| NVMe (PCIe 5.0) | | | |

**SSD endurance ratings:**

| Rating | What It Means |
|--------|---------------|
| TBW | |
| DWPD | |

**Example:** A 1TB SSD rated for 600 TBW can write _______ TB before expected wear-out.

At 50GB written per day, how many years would this last? _______

---

#### Activity D: M.2 Deep Dive

**Goal:** Master M.2 form factor details.

**M.2 key types:**

```
B Key:          M Key:          B+M Key:
[||||| |     ]  [     | |||||]  [||||| | |||||]
     ^notch          ^notch         ^    ^
```

| Key Type | Notch Position | Protocols Supported | Common Use |
|----------|----------------|---------------------|------------|
| B key | | | |
| M key | | | |
| B+M key | | | |

**M.2 sizes (length in mm):**

| Size | Dimensions | Common Use |
|------|------------|------------|
| 2230 | 22mm × 30mm | |
| 2242 | 22mm × 42mm | |
| 2260 | 22mm × 60mm | |
| 2280 | 22mm × 80mm | |
| 22110 | 22mm × 110mm | |

**M.2 slot identification:**

How can you tell if an M.2 slot supports NVMe or only SATA?

_________________________________________________________________

**SATA M.2 vs NVMe M.2:**

| Feature | SATA M.2 | NVMe M.2 |
|---------|----------|----------|
| Interface | | |
| Max speed | | |
| PCIe lanes | | |
| Key type | | |
| Price | | |
| Backwards compatible | | |

**Scenario:** A motherboard has one M.2 slot labeled "M.2_1 (PCIe 4.0 x4)". 

Can you install a SATA M.2 drive? _______

Can you install an NVMe drive? _______

---

#### Activity E: Speed Comparison

**Goal:** Understand real-world speed differences.

**Sequential read/write speeds:**

| Storage Type | Read Speed | Write Speed |
|--------------|------------|-------------|
| HDD (5400 RPM) | | |
| HDD (7200 RPM) | | |
| SATA SSD | | |
| NVMe PCIe 3.0 | | |
| NVMe PCIe 4.0 | | |
| NVMe PCIe 5.0 | | |

**Random 4K read/write (IOPS):**

| Storage Type | Random Read | Random Write |
|--------------|-------------|--------------|
| HDD | | |
| SATA SSD | | |
| NVMe SSD | | |

**Why random I/O matters more than sequential for most users:**

_________________________________________________________________

**Real-world impact scenarios:**

| Task | HDD | SATA SSD | NVMe SSD |
|------|-----|----------|----------|
| Windows boot time | | | |
| Game loading | | | |
| Large file copy | | | |
| Opening applications | | | |
| Video editing timeline | | | |

---

#### Activity F: SSD Technologies

**Goal:** Understand SSD maintenance and longevity features.

**TRIM command:**

What is TRIM?

_________________________________________________________________

Why is TRIM necessary for SSDs?

_________________________________________________________________

What happens without TRIM?

_________________________________________________________________

**How to verify TRIM is enabled (Windows):**

Command: _______________________

**Wear leveling:**

What is wear leveling?

_________________________________________________________________

Why do SSDs need it?

_________________________________________________________________

**Over-provisioning:**

What is over-provisioning?

_________________________________________________________________

How much space is typically reserved? _______

**SSD lifespan factors:**

| Factor | Impact on Lifespan |
|--------|-------------------|
| NAND type (TLC vs QLC) | |
| Write amplification | |
| Operating temperature | |
| Drive capacity vs usage | |
| TRIM enabled | |

---

#### Activity G: Interface Connections

**Goal:** Identify storage connectors.

**SATA connections:**

| Connector | Purpose | Pins |
|-----------|---------|------|
| SATA data | | |
| SATA power | | |

**Describe the L-shape of SATA connectors:**

_________________________________________________________________

**M.2 installation:**

Steps to install an M.2 drive:

1. _______________________
2. _______________________
3. _______________________
4. _______________________

**What secures an M.2 drive in place?**

_________________________________________________________________

**Drive cabling requirements:**

| Drive Type | Data Cable | Power Cable |
|------------|------------|-------------|
| 3.5" HDD | | |
| 2.5" SSD | | |
| M.2 NVMe | | |
| M.2 SATA | | |

---

#### Activity H: RAID Overview

**Goal:** Understand basic RAID concepts (detailed in Core 2).

**RAID levels for A+ Core 1:**

| RAID Level | Minimum Drives | Fault Tolerance | Speed Benefit | Capacity |
|------------|----------------|-----------------|---------------|----------|
| RAID 0 | | | | |
| RAID 1 | | | | |
| RAID 5 | | | | |
| RAID 10 | | | | |

**Quick descriptions:**

| Level | One-Sentence Description |
|-------|-------------------------|
| RAID 0 | |
| RAID 1 | |
| RAID 5 | |
| RAID 10 | |

**When to use each:**

| Scenario | Recommended RAID |
|----------|------------------|
| Maximum speed, no redundancy needed | |
| Data protection, two drives | |
| Balance of speed, capacity, protection | |
| High performance + redundancy | |

---

#### Activity I: External Storage

**Goal:** Understand external storage options.

**External drive interfaces:**

| Interface | Speed | Common Use |
|-----------|-------|------------|
| USB 2.0 | | |
| USB 3.0 (3.2 Gen 1) | | |
| USB 3.1 (3.2 Gen 2) | | |
| USB 3.2 Gen 2x2 | | |
| USB4 | | |
| Thunderbolt 3/4 | | |
| eSATA | | |

**External enclosure considerations:**

| Factor | What to Check |
|--------|---------------|
| Interface speed | |
| Drive compatibility | |
| Power delivery | |
| Cooling | |
| Portability | |

**External SSD vs External HDD:**

| Use Case | Recommendation | Why |
|----------|----------------|-----|
| Backup storage | | |
| Portable work drive | | |
| Media library | | |
| Video editing scratch | | |

---

#### Activity J: Storage Selection Scenarios

**Goal:** Practice recommending appropriate storage.

**Scenario 1: Budget Gaming PC**

| Requirement | Specification |
|-------------|---------------|
| Budget | $100 for storage |
| Primary use | Gaming, Windows |
| Games library | 500GB needed |
| Speed priority | Boot and load times |

Your recommendation:
- Primary drive: _______________
- Secondary drive (if any): _______________
- Reasoning: _______________

**Scenario 2: Content Creator Workstation**

| Requirement | Specification |
|-------------|---------------|
| Budget | $300 for storage |
| Primary use | 4K video editing |
| Project storage | 2TB needed |
| Archive storage | 4TB needed |

Your recommendation:
- Boot/OS drive: _______________
- Project drive: _______________
- Archive drive: _______________
- Reasoning: _______________

**Scenario 3: Office Computer**

| Requirement | Specification |
|-------------|---------------|
| Budget | $60 for storage |
| Primary use | Office apps, email, web |
| Storage needed | 256GB sufficient |
| Priority | Reliability, speed |

Your recommendation:
- Drive: _______________
- Reasoning: _______________

**Scenario 4: NAS/Home Server**

| Requirement | Specification |
|-------------|---------------|
| Budget | $400 for storage |
| Primary use | File server, Plex |
| Storage needed | 8TB+ |
| Priority | Capacity, reliability |

Your recommendation:
- Drive configuration: _______________
- RAID level: _______________
- Reasoning: _______________

---

#### Activity K: Troubleshooting Storage Issues

**Goal:** Diagnose storage-related problems.

**Symptom analysis:**

| Symptom | Possible HDD Cause | Possible SSD Cause |
|---------|-------------------|-------------------|
| Drive not detected | | |
| Slow performance | | |
| Clicking sounds | | |
| System freezes | | |
| Files corrupted | | |
| SMART warnings | | |

**SMART monitoring:**

What is SMART?

_________________________________________________________________

**Key SMART attributes to watch:**

| Attribute | What It Indicates |
|-----------|-------------------|
| Reallocated Sector Count | |
| Current Pending Sector Count | |
| Power-On Hours | |
| Temperature | |
| Wear Leveling Count (SSD) | |

**Diagnostic tools:**

| Tool | Purpose | Platform |
|------|---------|----------|
| CrystalDiskInfo | | |
| CrystalDiskMark | | |
| HD Tune | | |
| Manufacturer tools | | |
| chkdsk | | |

**Drive failure warning signs:**

List 5 signs a drive may be failing:

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to a PC** - Uses system tools, no disassembly needed.

---

#### Activity L: Document Your Storage

**Goal:** Identify your system's storage configuration.

**Windows method:**

1. Open Disk Management (diskmgmt.msc)
2. Or: Settings → System → Storage

**Document your drives:**

| Drive | Type | Capacity | Interface | Partitions |
|-------|------|----------|-----------|------------|
| Drive 1 | | | | |
| Drive 2 | | | | |
| Drive 3 | | | | |

**Using Command Prompt:**

```cmd
wmic diskdrive get model,size,interfacetype
```

Results:

_________________________________________________________________

**Device Manager check:**

1. Open Device Manager
2. Expand "Disk drives"

Drives listed:

_________________________________________________________________

---

#### Activity M: Check Drive Health

**Goal:** Monitor drive health using SMART data.

**Install CrystalDiskInfo** (free) or use manufacturer's tool.

**Document SMART status:**

| Attribute | Drive 1 | Status |
|-----------|---------|--------|
| Health Status | | |
| Temperature | | |
| Power-On Hours | | |
| Power-On Count | | |
| Reallocated Sectors | | |
| Host Writes (SSD) | | |

**Is TRIM enabled? (SSD only)**

Run in Command Prompt (Admin):
```cmd
fsutil behavior query DisableDeleteNotify
```

Result: _______ (0 = TRIM enabled, 1 = TRIM disabled)

---

#### Activity N: Benchmark Your Storage

**Goal:** Measure actual drive performance.

**Install CrystalDiskMark** (free).

**Run benchmark and record results:**

| Test | Read | Write |
|------|------|-------|
| SEQ1M Q8T1 | MB/s | MB/s |
| SEQ1M Q1T1 | MB/s | MB/s |
| RND4K Q32T1 | MB/s | MB/s |
| RND4K Q1T1 | MB/s | MB/s |

**Analysis:**

Based on your results, what type of drive do you have?

[ ] HDD (sequential ~100-200 MB/s)
[ ] SATA SSD (sequential ~500-550 MB/s)
[ ] NVMe SSD (sequential 1000+ MB/s)

How do your random 4K speeds compare to sequential?

_________________________________________________________________

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer's laptop HDD is making clicking noises and Windows is running very slowly. What should you do immediately, and what's likely happening?**

2. **A user upgraded from an HDD to a SATA SSD and is disappointed the boot time is only "a little faster." They expected instant boot. What might you explain to them?**

3. **A customer bought an NVMe SSD but it's only showing ~500 MB/s speeds instead of the advertised 3500 MB/s. What are possible causes?**

4. **A video editor asks whether they should get one 4TB NVMe SSD or two 2TB NVMe SSDs. What factors should influence this decision?**

---

## What You Learned Today

- ✅ Understood HDD vs SSD technology differences
- ✅ Learned HDD specifications (RPM, form factors, interfaces)
- ✅ Mastered SSD specifications (NAND types, interfaces, endurance)
- ✅ Explored M.2 form factor details (keys, sizes, protocols)
- ✅ Compared storage speed benchmarks
- ✅ Understood TRIM, wear leveling, and SSD longevity
- ✅ Identified storage connectors and cabling
- ✅ Learned basic RAID concepts
- ✅ Explored external storage options
- ✅ Practiced storage selection for different scenarios
- ✅ Studied storage troubleshooting
- ✅ (Tier 2) Documented real drive specifications
- ✅ (Tier 2) Checked drive health and benchmarked performance

**Next Lab:** Optical Drives and Removable Storage - understanding optical media and flash storage.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║                 STORAGE QUICK REFERENCE                        ║
╠═══════════════════════════════════════════════════════════════╣
║  HDD SPEEDS:                                                   ║
║  5400 RPM: ~100 MB/s  |  7200 RPM: ~150 MB/s                  ║
╠═══════════════════════════════════════════════════════════════╣
║  SSD SPEEDS:                                                   ║
║  SATA: ~550 MB/s (limited by interface)                       ║
║  NVMe PCIe 3.0: ~3500 MB/s                                    ║
║  NVMe PCIe 4.0: ~7000 MB/s                                    ║
║  NVMe PCIe 5.0: ~10000+ MB/s                                  ║
╠═══════════════════════════════════════════════════════════════╣
║  M.2 KEYS:                                                     ║
║  B key: SATA (mostly)  |  M key: NVMe  |  B+M: Both           ║
╠═══════════════════════════════════════════════════════════════╣
║  M.2 SIZES: 2230, 2242, 2260, 2280 (most common), 22110       ║
╠═══════════════════════════════════════════════════════════════╣
║  NAND TYPES (endurance): SLC > MLC > TLC > QLC                ║
╠═══════════════════════════════════════════════════════════════╣
║  RAID BASICS:                                                  ║
║  0 = Striping (speed)  |  1 = Mirroring (redundancy)          ║
║  5 = Striping + parity |  10 = Mirrored stripes               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 21: Storage Devices - HDDs and SSDs*