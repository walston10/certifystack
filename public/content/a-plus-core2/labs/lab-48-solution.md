# Lab 48: Data Destruction and Disposal - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Why Quick Format is Insufficient

**Quick format only:**
- Removes file system index (file table)
- Does NOT overwrite actual data
- Data remains on disk, fully recoverable
- Takes seconds because nothing is actually erased

**Recovery tools** (Recuva, PhotoRec) can easily retrieve "deleted" data until it's overwritten by new data.

---

### Question 2: Degaussing

**What it is:** Using a powerful magnetic field to erase data on magnetic media by randomizing the magnetic domains.

**Media types:**
- ✅ Hard disk drives (HDD)
- ✅ Magnetic tapes (backup tapes)
- ✅ Floppy disks
- ❌ SSDs (no magnetic storage)
- ❌ USB flash drives (no magnetic storage)
- ❌ Optical discs (not magnetic)

**Note:** Degaussing destroys the drive - it cannot be reused.

---

### Question 3: SSDs Require Different Methods

**Why standard overwrite doesn't work:**

| SSD Feature | Problem |
|-------------|---------|
| Wear leveling | Controller distributes writes; can't guarantee all cells overwritten |
| Over-provisioning | 7-10% hidden capacity that overwrite can't reach |
| Bad blocks | Retired cells may contain data, inaccessible to software |
| TRIM | May already mark cells as free but data still present |

**Proper SSD destruction:**
- ATA Secure Erase command
- Manufacturer-specific secure erase tools
- Crypto-erase (if encrypted)
- Physical destruction (most reliable)

---

### Question 4: Certificate of Destruction

**What it is:** Official document proving data was properly destroyed.

**When needed:**
- Compliance requirements (HIPAA, PCI-DSS, SOX)
- Legal hold releases
- Audit documentation
- Asset disposal tracking
- Insurance purposes
- Customer data handling requirements

**Should include:**
- Date and time of destruction
- Method used
- Device serial numbers
- Service provider information
- Witness signatures
- Chain of custody documentation

---

### Question 5: Sanitization vs Physical Destruction

| Aspect | Data Sanitization | Physical Destruction |
|--------|-------------------|---------------------|
| What happens | Data removed, media intact | Media destroyed |
| Reusable | Yes | No |
| Methods | Overwrite, crypto-erase | Shred, degauss, incinerate |
| Verification | Software verification | Visual inspection |
| Cost | Lower | Higher |
| Best for | Redeployment, resale | End of life, high sensitivity |

---

## Section 2: Activities - Answers

### Activity A: Data Destruction Methods

| Method | How It Works | Media | Recoverable? |
|--------|--------------|-------|--------------|
| Quick format | Clears file table only | HDD, SSD | Yes - easily |
| Standard format | Writes zeros to sectors | HDD | Partially possible |
| Single pass overwrite | Writes pattern once | HDD | Unlikely |
| Multi-pass overwrite | Multiple patterns | HDD | No (with verification) |
| Degaussing | Magnetic field | HDD, tape | No |
| Shredding | Physical cutting | All | No |
| Incineration | Burn to ash | All | No |
| Drilling | Holes in platters | HDD | Partial on undamaged areas |
| Crushing | Deform platters | HDD, SSD | No |
| Crypto-erase | Destroy encryption key | Encrypted SSD | No |

---

### Activity B: Media Type Matching

| Media Type | Best Method | Alternative |
|------------|-------------|-------------|
| HDD | Degauss + shred | Multi-pass overwrite |
| SSD | Crypto-erase or shred | Secure Erase command |
| USB flash | Physical destruction | Crypto-erase if encrypted |
| Optical disc | Industrial shredder | Scratch surface, break |
| Magnetic tape | Degauss + shred | Incineration |
| Paper | Cross-cut shredder | Incineration |
| Floppy disk | Degauss or shred | Physical destruction |
| Memory cards | Physical destruction | Cut into pieces |
| Mobile phones | Factory reset + physical | Crypto-erase (if supported) |

---

### Activity C: Overwrite Standards

| Standard | Passes | Pattern | Used For |
|----------|--------|---------|----------|
| DoD 5220.22-M (short) | 3 | Zero, one, random | Basic government |
| DoD 5220.22-M (ECE) | 7 | Alternating patterns | Higher security |
| Gutmann | 35 | Complex patterns | Legacy (overkill now) |
| NIST Clear | 1 | Single overwrite | Low sensitivity |
| NIST Purge | Multiple | Vendor-specific | Medium-high sensitivity |
| Single zero-fill | 1 | All zeros | Basic clearing |

**Sensitivity levels:**

| Level | Recommended |
|-------|-------------|
| Low | Single pass overwrite or standard format |
| Medium | 3-pass overwrite with verification |
| High | Degauss + physical destruction |
| Maximum | Physical destruction with certification |

---

### Activity D: SSD Challenges

**Why overwrite doesn't work:**

| Feature | Impact |
|---------|--------|
| Wear leveling | Writes distributed; old data in unused cells |
| Over-provisioning | 7-10% hidden, inaccessible capacity |
| TRIM | Marks cells free but doesn't erase |
| Controller encryption | Data may persist if key intact |
| Bad blocks | Retired cells still hold data |

**SSD destruction methods:**

| Method | Effectiveness | Notes |
|--------|---------------|-------|
| ATA Secure Erase | High | Must be supported by drive |
| Manufacturer tool | High | Samsung, Intel, etc. have tools |
| Crypto-erase | High | Only if always-encrypted |
| Physical destruction | Maximum | Most reliable |

---

### Activity E: Physical Destruction

| Method | Equipment | Cost | Verification |
|--------|-----------|------|--------------|
| Shredding | Industrial shredder | High (service) | Visual - pieces |
| Disintegration | Disintegrator machine | Very High | Particle size |
| Pulverizing | Pulverizer | High | Powder form |
| Incineration | Industrial furnace | Medium | Ash/slag |
| Drilling | Drill press | Low | Holes visible |
| Crushing | Hydraulic crusher | Medium | Deformation |

**DIY vs Professional:**

| Factor | DIY | Professional |
|--------|-----|--------------|
| Cost | Lower | Higher |
| Verification | Self-documented | Certified |
| Certificate | Not official | Legally valid |
| Compliance | May not satisfy | Meets standards |
| Volume | Limited | Scalable |
| Liability | On you | Transferred |

---

### Activity F: Scenario Planning

**Scenario 1: 50 desktops**

| Item | Qty | Method | Verification |
|------|-----|--------|--------------|
| Hard drives | 50 | Degauss + shred | Certificate from vendor |
| RAM | 50 | Physical destruction | Not typically required |
| Laptops | 0 | N/A | N/A |
| USB drives | Unknown | Collect, shred | Count and verify |
| Backup tapes | Check | Degauss + shred | Certificate |

**Scenario 2: Data center**

| Item | Method | Compliance |
|------|--------|-----------|
| Server HDDs | Degauss + shred | SOC 2, PCI |
| SAN storage | Crypto-erase + physical | PCI-DSS |
| Backup tapes | Degauss + shred | Retention policy |
| Network equipment | Factory reset, remove memory | Check for stored configs |

---

### Activity G: Documentation

**Certificate elements:**

| Element | Purpose |
|---------|---------|
| Date | When destruction occurred |
| Method | How data was destroyed |
| Serial numbers | Prove specific assets destroyed |
| Asset tags | Link to inventory system |
| Witness signature | Third-party verification |
| Provider info | Accountability |
| Chain of custody | Prove proper handling |

**Chain of custody:**

| Stage | Documentation |
|-------|---------------|
| Identified | Ticket/work order created |
| Removed | Sign-out from asset system |
| Transport | Logged, secure transfer |
| Destruction | Witnessed, documented |
| Verification | Tested or inspected |
| Certificate | Issued and filed |

---

## Section 3: Reflection - Answers

### Scenario 1: Donated Computers with Recoverable Data

**What went wrong:**
- Quick format only deletes file index
- Actual data remained on drives
- No verification of data removal
- No documentation of destruction process

**Should have done:**
1. Full multi-pass overwrite (DBAN or similar)
2. Verification scan after wiping
3. Documentation of process
4. Or: Remove drives, donate computers without storage

**Liability:** Potential data breach, customer lawsuit, regulatory fines

---

### Scenario 2: HIPAA - Unknown Hard Drives

**Compliance implications:**
- HIPAA requires documented disposal of PHI
- Unknown drives = unknown exposure risk
- Must assume they contain PHI
- Violation risk if not properly handled

**How to proceed:**
1. Document discovery (photos, inventory)
2. Do NOT attempt to read drives (could create liability)
3. Treat as high-sensitivity data
4. Professional destruction with certification
5. Update asset tracking to prevent recurrence
6. Consider voluntary breach notification
7. Review and improve disposal procedures

---

### Scenario 3: Employee Self-Deletion

**Is "just delete files" adequate?** NO

**Problems:**
- Deletion doesn't remove data
- No verification
- No documentation
- No compliance
- Data breach risk if laptop sold/donated

**Proper policy:**
1. Return device to IT
2. IT performs proper sanitization or destruction
3. Document the process
4. Certificate of destruction if required
5. Never allow self-disposal of corporate devices

---

### Scenario 4: Healthcare - Choosing Vendor

**Recommended:** $15 vendor with video and on-site service

**Reasons:**

| Factor | $5 Vendor | $15 Vendor |
|--------|-----------|------------|
| Cost | Lower | Higher |
| Verification | Certificate only | Video + certificate |
| On-site | Off-site | On-site (chain of custody) |
| HIPAA compliance | May satisfy | Stronger evidence |
| Audit response | "We have certificate" | "Here's video proof" |
| Risk reduction | Basic | Maximum |

**For healthcare (HIPAA):**
- Chain of custody critical
- On-site prevents transport risks
- Video provides irrefutable proof
- Stronger defense in case of audit
- Cost difference minimal vs. breach cost

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 DATA DESTRUCTION QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  LOGICAL METHODS                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Overwrite    → Write patterns (1-7+ passes)                              ║
║  Crypto-erase → Destroy encryption key                                    ║
║  Secure Erase → SSD-specific command                                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PHYSICAL METHODS                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Degaussing   → Magnetic field (HDD, tape only)                           ║
║  Shredding    → Industrial cutting                                        ║
║  Drilling     → Holes through platters                                    ║
║  Crushing     → Physical deformation                                      ║
║  Incineration → Complete destruction                                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BY MEDIA TYPE                                                             ║
║  ─────────────────────────────────────────────────────────────────────────║
║  HDD   → Degauss + shred (or multi-pass overwrite)                        ║
║  SSD   → Crypto-erase, Secure Erase, or shred                             ║
║  USB   → Physical destruction preferred                                   ║
║  Tape  → Degauss + shred                                                  ║
║  Paper → Cross-cut shred                                                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SSD CHALLENGE: Wear leveling + over-provisioning = overwrite unreliable  ║
║  ALWAYS GET: Certificate of destruction for compliance                    ║
╚═══════════════════════════════════════════════════════════════════════════╝
```