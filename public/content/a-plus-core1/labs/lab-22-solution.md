# Lab 22: Optical Drives and Removable Storage - Solution Guide

**Note to Students:** Review this AFTER completing your own research and activities!

---

## Section 1: Concept Check - Answers

**1. What are the capacity differences between CD, DVD, and Blu-ray discs?**

**Answer:**

| Format | Single-Layer | Dual-Layer | Notes |
|--------|--------------|------------|-------|
| CD | 700 MB | N/A | ~80 minutes audio |
| DVD | 4.7 GB | 8.5 GB | Enough for 2-hour movie (SD) |
| Blu-ray | 25 GB | 50 GB | HD/4K movies |
| BDXL | 100 GB | 128 GB | Triple/quad layer |

**Why the differences:**
- CD uses 780nm infrared laser (larger spots)
- DVD uses 650nm red laser (smaller spots, more data)
- Blu-ray uses 405nm blue laser (smallest spots, most data)

Smaller wavelength = smaller data pits = more data per disc.

---

**2. Explain the difference between a disc labeled "R" versus "RW" (e.g., DVD-R vs DVD-RW).**

**Answer:**

| Type | Meaning | Write Behavior | Best For |
|------|---------|----------------|----------|
| R (Recordable) | Write once | Data is permanent after burning | Archives, distribution |
| RW (Rewritable) | Write many times | Can erase and rewrite (~1000 times) | Temporary storage, testing |

**Technical difference:**
- **R discs:** Use organic dye that permanently changes when burned
- **RW discs:** Use phase-change alloy that can be reset by heating

**Compatibility note:** R discs have better compatibility with older drives and players than RW discs.

---

**3. A customer needs to archive 50GB of video files to optical media. What type of disc would you recommend?**

**Answer:**

**Recommendation: Blu-ray BD-R (single-layer 25GB × 2, or dual-layer 50GB × 1)**

| Option | Pros | Cons |
|--------|------|------|
| BD-R 25GB × 2 | Lower cost per disc | Need 2 discs |
| BD-R DL 50GB × 1 | Single disc convenience | More expensive |
| DVD-R × 11 | Cheapest media | Too many discs, tedious |

**For long-term archival:** Consider M-DISC BD-R, which claims 1000+ year lifespan due to inorganic data layer that doesn't degrade.

**Important:** Customer needs a Blu-ray writer drive to burn these discs.

---

**4. What is the difference between SD, SDHC, and SDXC cards?**

**Answer:**

| Type | Capacity | File System | Released |
|------|----------|-------------|----------|
| SD | Up to 2 GB | FAT12/16 | 1999 |
| SDHC | 4-32 GB | FAT32 | 2006 |
| SDXC | 64 GB - 2 TB | exFAT | 2009 |
| SDUC | 2 TB - 128 TB | exFAT | 2018 |

**Compatibility:**
- SDHC devices read SD and SDHC cards
- SDXC devices read SD, SDHC, and SDXC cards
- Old SD-only devices cannot read SDHC/SDXC

**Physical size is identical**—the difference is capacity specification and file system.

---

**5. Why might USB flash drives be unreliable for long-term archival storage?**

**Answer:**

| Issue | Explanation |
|-------|-------------|
| Data decay | Flash cells lose charge over time without power |
| Retention period | Typically 5-10 years without use |
| Cheap NAND | Budget drives use low-quality flash |
| Controller failure | Single point of failure |
| No error correction | Most lack ECC like SSDs have |
| Easy to lose | Small, portable = easily misplaced |
| Easy to damage | Fragile connectors, heat, static |

**For archival, prefer:**
1. M-DISC optical media (best for decades)
2. Enterprise-grade HDDs (cold storage)
3. Cloud backup with redundancy
4. Multiple copies in different locations

**Flash drives are best for:** Temporary file transfer, bootable media, non-critical backup.

---

## Section 2: Activity Solutions

### Activity A: Optical Media Fundamentals Reference

**How optical discs work:**

| Concept | Description |
|---------|-------------|
| Lands | Flat (reflective) areas on disc surface |
| Pits | Indentations (less reflective) that encode data |
| Laser | Reads reflected light pattern |
| Reflectivity | Difference between lands/pits creates binary data |

**Structure:** Polycarbonate base → data layer → reflective layer → protective lacquer → label

**Reading:** Laser shines on disc, sensor detects reflectivity changes, controller interprets as 1s and 0s.

**Writing (burning):** Laser at higher power changes dye/alloy state, creating permanent marks.

---

### Activity B: CD Specifications Reference

| Type | Full Name | Capacity | Writable | Rewritable |
|------|-----------|----------|----------|------------|
| CD-ROM | Compact Disc Read-Only Memory | 700 MB | No | No |
| CD-R | Compact Disc Recordable | 700 MB | Yes | No |
| CD-RW | Compact Disc Rewritable | 700 MB | Yes | Yes |

**CD capacity:** 700 MB data / 80 minutes audio

**CD speeds:**
- 1X = 150 KB/s
- 52X = 7.8 MB/s

**Modern relevance:**
- Music: Declining (streaming dominant)
- Software: Rare (downloads, USB)
- Backup: Obsolete (too small)
- Car audio: Still used in older vehicles

---

### Activity C: DVD Specifications Reference

| Type | Full Name | Writable | Rewritable |
|------|-----------|----------|------------|
| DVD-ROM | DVD Read-Only Memory | No | No |
| DVD-R | DVD Recordable (minus) | Yes | No |
| DVD+R | DVD Recordable (plus) | Yes | No |
| DVD-RW | DVD Rewritable (minus) | Yes | Yes |
| DVD+RW | DVD Rewritable (plus) | Yes | Yes |
| DVD-RAM | DVD Random Access Memory | Yes | Yes |

**DVD-R vs DVD+R:**

| Feature | DVD-R | DVD+R |
|---------|-------|-------|
| Developer | DVD Forum | DVD+RW Alliance |
| Compatibility | Slightly wider (older players) | Better error handling |
| Recommendation | Either works; + is slightly better |

**DVD capacity:**

| Format | Layers | Sides | Capacity |
|--------|--------|-------|----------|
| DVD-5 | 1 | 1 | 4.7 GB |
| DVD-9 | 2 | 1 | 8.5 GB |
| DVD-10 | 1 | 2 | 9.4 GB |
| DVD-18 | 2 | 2 | 17.1 GB |

**DVD speeds:**
- 1X = 1.385 MB/s
- 16X = 22.2 MB/s

---

### Activity D: Blu-ray Specifications Reference

**"Blu-ray":** Named for the blue-violet laser used (405nm wavelength).

| Type | Writable | Rewritable | Use |
|------|----------|------------|-----|
| BD-ROM | No | No | Commercial movies |
| BD-R | Yes | No | Archival, home recording |
| BD-RE | Yes | Yes | Temporary storage |

**Capacity:**

| Format | Layers | Capacity | Use |
|--------|--------|----------|-----|
| Single-layer | 1 | 25 GB | Standard |
| Dual-layer | 2 | 50 GB | Long movies, backups |
| BDXL (triple) | 3 | 100 GB | Large archives |
| BDXL (quad) | 4 | 128 GB | Maximum capacity |

**Blu-ray vs DVD:**

| Feature | DVD | Blu-ray |
|---------|-----|---------|
| Laser wavelength | 650 nm (red) | 405 nm (blue) |
| Track pitch | 740 nm | 320 nm |
| Max capacity | 17.1 GB | 128 GB |
| Video quality | SD (480p) | HD/4K/HDR |

**Blu-ray speeds:**
- 1X = 4.5 MB/s
- 16X = 72 MB/s

---

### Activity E: Optical Drive Types Reference

| Drive Type | Reads | Writes |
|------------|-------|--------|
| CD-ROM | CD | None |
| DVD-ROM | CD, DVD | None |
| DVD±RW | CD, DVD | CD-R/RW, DVD±R/RW |
| BD-ROM | CD, DVD, BD | None |
| BD-RE | CD, DVD, BD | CD-R/RW, DVD±R/RW, BD-R/RE |

**Combo drive:** A drive that combines CD-RW and DVD-ROM capabilities (reads DVDs, writes CDs).

**Connections:**
- SATA: Standard internal connection
- USB: External drives (most common today)
- IDE/PATA: Legacy (obsolete)

---

### Activity F: Flash Memory Cards Reference

**SD card family:**

| Type | Capacity | File System |
|------|----------|-------------|
| SD | Up to 2 GB | FAT12/16 |
| SDHC | 4-32 GB | FAT32 |
| SDXC | 64 GB - 2 TB | exFAT |
| SDUC | 2 TB - 128 TB | exFAT |

**SD sizes:**

| Size | Dimensions | Use |
|------|------------|-----|
| Full-size SD | 32×24×2.1mm | Cameras, laptops |
| miniSD | 21.5×20×1.4mm | Obsolete |
| microSD | 15×11×1mm | Phones, action cams |

**Speed classes:**

| Class | Symbol | Min Write | Use |
|-------|--------|-----------|-----|
| Class 2 | C2 | 2 MB/s | SD video |
| Class 4 | C4 | 4 MB/s | HD video |
| Class 6 | C6 | 6 MB/s | HD video |
| Class 10 | C10 | 10 MB/s | Full HD |
| U1 | U1 | 10 MB/s | Full HD |
| U3 | U3 | 30 MB/s | 4K video |
| V30 | V30 | 30 MB/s | 4K video |
| V60 | V60 | 60 MB/s | 8K video |
| V90 | V90 | 90 MB/s | 8K/RAW |

**Label example:** "SanDisk Extreme 128GB SDXC UHS-I U3 V30"
- SanDisk Extreme: Brand/model
- 128GB: Capacity
- SDXC: Card type (64GB-2TB)
- UHS-I: Bus speed (up to 104 MB/s)
- U3/V30: 30 MB/s minimum write

---

### Activity G: Other Flash Media Reference

**Still common:**
1. SD/microSD (dominant)
2. CompactFlash (professional cameras)
3. CFexpress (high-end cameras)

**Largely obsolete:**
1. Memory Stick (Sony proprietary)
2. xD-Picture Card (Olympus/Fuji)
3. miniSD
4. SmartMedia

---

### Activity H: USB Flash Drives Reference

**USB speeds:**

| Version | Marketing | Speed |
|---------|-----------|-------|
| USB 2.0 | Hi-Speed | 480 Mb/s (60 MB/s) |
| USB 3.0 | SuperSpeed | 5 Gb/s (625 MB/s) |
| USB 3.1 Gen 2 | SuperSpeed+ | 10 Gb/s (1.25 GB/s) |
| USB 3.2 Gen 2x2 | SuperSpeed 20 | 20 Gb/s (2.5 GB/s) |

**Advertised vs actual capacity:**
- 16GB advertised ≈ 14.9 GB usable
- Manufacturers use 1 GB = 1,000,000,000 bytes
- OS uses 1 GB = 1,073,741,824 bytes (1024³)

**Not ideal for long-term storage because:**
- Flash cells lose charge without power (5-10 year retention)
- Cheap NAND degrades faster
- Single point of failure
- Easy to lose or damage

**Good uses:** File transfer, bootable media, temporary backup.

---

### Activity J: Storage Selection Reference

**Scenario 1: Photography**
- Recommendation: SDXC UHS-II U3/V30 (64-256GB)
- Why: Fast sustained write for RAW files, professional grade

**Scenario 2: Bootable Windows**
- Recommendation: USB 3.0 flash drive (16GB+)
- Why: Cheap, fast enough, widely bootable

**Scenario 3: Movie Archive**
- Recommendation: M-DISC BD-R or external HDD
- Why: Flash drives degrade; optical/HDD better for decades

**Scenario 4: File Sharing**
- Recommendation: USB 3.0 flash drive (8-16GB)
- Why: Universal compatibility, fast, can leave with client

---

### Activity K: Disc Care Reference

**Do:**
- Handle by edges and center hole
- Store vertically in cases
- Keep in cool, dark place
- Clean from center outward (not circular)

**Don't:**
- Touch data surface
- Stack discs without protection
- Expose to sunlight or heat
- Use paper towels (can scratch)

**Labeling:**
- Permanent marker on label side: Safe (use disc-safe markers)
- Permanent marker on data side: NEVER
- Adhesive labels: Bad (can unbalance disc)
- LightScribe: Safe (built into some drives/media)

**Disc lifespan:**

| Type | Estimated Life |
|------|----------------|
| Pressed CD/DVD | 50-100+ years |
| CD-R | 5-10 years (varies widely) |
| DVD±R | 5-15 years |
| BD-R | 10-20 years |
| M-DISC | 1000+ years (claimed) |

**M-DISC:** Uses rock-like inorganic data layer instead of organic dye. Resistant to light, humidity, temperature. Best choice for true archival.

---

### Activity L: Troubleshooting Reference

**Optical drive issues:**

| Symptom | Cause | Solution |
|---------|-------|----------|
| Disc not recognized | Dirty disc, dirty lens | Clean disc/lens |
| Won't eject | Mechanism stuck | Use emergency eject hole |
| Read errors | Scratched disc | Try disc repair or copy |
| Burning fails | Bad media, slow speed | Use quality media, reduce speed |
| Drive not detected | Cable, driver, failure | Check connections, update drivers |

**Flash drive issues:**

| Symptom | Cause | Solution |
|---------|-------|----------|
| Not recognized | Driver, USB port, failure | Try another port, update drivers |
| "Insert disk" error | Controller failure | Usually unfixable |
| Read-only | Write protection, failure | Check switch, may be failing |
| Wrong capacity | Fake/corrupted drive | Test with H2testw, return if fake |
| Slow transfers | USB 2.0 port, bad drive | Use USB 3.0 port |

**SD card issues:**

| Symptom | Cause | Solution |
|---------|-------|----------|
| Not detected | Dirty contacts, reader issue | Clean contacts, try different reader |
| Write protected | Physical lock switch | Slide switch to unlock |
| Corrupted files | Unsafe removal, failure | Run CHKDSK, data recovery software |
| "Needs formatting" | File system corruption | Try data recovery first |

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Can't Save to DVD Like USB Drive

**Likely issue:** They inserted a DVD-R (write-once) and expected drag-and-drop saving.

**Solutions:**

| Option | How It Works |
|--------|--------------|
| Use DVD-RW with Live File System | Format for packet writing, works like USB (slower) |
| Burn as traditional disc | Use Windows burn feature or burning software |
| Use USB drive instead | Recommended—much easier |
| Use DVD-RAM | Best for disc-based random write access |

**Explanation:** Unlike USB drives, optical media requires either special formatting (UDF/Live File System) or traditional "burning" which writes all at once.

---

### Scenario 2: SD Card Error at Wedding

**Steps to attempt recovery:**

1. **Don't write anything new** to the card
2. Try a different card reader
3. Try different USB port
4. Use data recovery software:
   - Recuva (free)
   - PhotoRec (free)
   - R-Studio (paid, more powerful)
5. Check if card appears in Disk Management
6. If desperate: Professional data recovery service (~$300-1500)

**Prevention for future:**
- Use quality cards (SanDisk, Lexar, Samsung)
- Format in camera before shoots
- Always eject safely
- Have backup cards
- Consider dual card slot camera

---

### Scenario 3: 10-Year Financial Archive on Flash Drives

**Recommendation: NO. Use optical media or enterprise storage.**

| Storage Method | 10-Year Suitability |
|----------------|---------------------|
| USB flash drives | Poor (data decay, unreliable) |
| Consumer HDDs | Fair (stored properly, unpowered) |
| M-DISC BD-R | Excellent (designed for archival) |
| Cloud + local backup | Good (redundancy critical) |
| Enterprise tape | Excellent (for large archives) |

**Best approach for business:**
1. Primary: M-DISC BD-R stored in cool, dark location
2. Secondary: Cloud backup with version history
3. Tertiary: External HDD stored off-site

**Note:** Any single storage method is a risk. Use 3-2-1 rule: 3 copies, 2 media types, 1 off-site.

---

### Scenario 4: USB Drive Shows 0 Bytes

**What happened:** Controller or NAND failure. The drive's controller can't read the flash memory.

| Possible Cause | Fixable? |
|----------------|----------|
| Controller failure | No (data may be recoverable by professional) |
| NAND chip failure | Usually no |
| Corrupted partition table | Sometimes (use DiskPart, TestDisk) |
| Fake drive | No (drive was never real capacity) |

**Attempt to fix:**
1. Try Disk Management—see if drive appears with unallocated space
2. Try DiskPart: `list disk` → `select disk X` → `clean` → `create partition primary`
3. Try TestDisk (free) for partition recovery
4. If critical data: Professional recovery (~$300+)

**Usually:** 0 bytes = failed drive. Recover data if possible, then replace.

---

## Key Takeaways

**For the A+ Exam:**

1. **CD:** 700 MB, oldest optical format
2. **DVD:** 4.7 GB single-layer, 8.5 GB dual-layer
3. **Blu-ray:** 25 GB (SL), 50 GB (DL), up to 128 GB (BDXL)
4. **R = Write once, RW/RE = Rewritable**
5. **SD < SDHC < SDXC** (capacity/file system)
6. **Speed classes:** Class 10, U1, U3, V30, V60, V90
7. **USB 2.0:** 480 Mb/s | **USB 3.0:** 5 Gb/s
8. **Flash drives not for long-term storage**

**For Real-World Skills:**

- Recommend SSDs/HDDs over optical for most backup needs
- Use M-DISC for true archival
- Match SD card speed class to camera/video requirements
- Always safely eject removable storage
- Test flash drive capacity if suspiciously cheap (fake drives common)

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 22: Optical Drives and Removable Storage - Solution Guide*