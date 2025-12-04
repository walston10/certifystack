# Lab 48: Data Destruction and Disposal

**Tier:** 1  
**Time:** 25-35 minutes  
**Exam Objectives:** 2.8 - Given a scenario, use appropriate data destruction and disposal methods

---

## Section 1: Concept Check (5 min)

1. Why is a simple "quick format" not sufficient for secure data destruction?

2. What is degaussing, and what types of media can it be used on?

3. Why do SSDs require different destruction methods than traditional HDDs?

4. What is a certificate of destruction, and when would you need one?

5. What is the difference between data sanitization and physical destruction?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Conceptual learning** - Data destruction planning exercises.

#### Activity A: Data Destruction Methods

**Goal:** Understand different destruction methods.

**Complete the method comparison:**

| Method | How It Works | Media Types | Recoverable? |
|--------|--------------|-------------|--------------|
| Quick format | | | |
| Standard format | | | |
| Overwrite (single pass) | | | |
| Overwrite (multiple pass) | | | |
| Degaussing | | | |
| Shredding | | | |
| Incineration | | | |
| Drilling | | | |
| Crushing | | | |
| Crypto-erase | | | |

---

#### Activity B: Media Type Matching

**Goal:** Match destruction methods to media types.

**Recommended methods by media:**

| Media Type | Best Destruction Method | Alternative |
|------------|------------------------|-------------|
| HDD (magnetic) | | |
| SSD | | |
| USB flash drive | | |
| Optical disc (CD/DVD) | | |
| Magnetic tape | | |
| Paper documents | | |
| Floppy disk | | |
| Memory cards | | |
| Mobile phones | | |

---

#### Activity C: Overwrite Standards

**Goal:** Understand data overwrite specifications.

**Common overwrite standards:**

| Standard | Passes | Pattern | Used For |
|----------|--------|---------|----------|
| DoD 5220.22-M (short) | | | |
| DoD 5220.22-M (ECE) | | | |
| Gutmann method | | | |
| NIST 800-88 Clear | | | |
| NIST 800-88 Purge | | | |
| Single pass zero-fill | | | |

**When to use each level:**

| Sensitivity Level | Recommended Method |
|-------------------|-------------------|
| Low (public data) | |
| Medium (internal) | |
| High (confidential) | |
| Maximum (classified) | |

---

#### Activity D: SSD-Specific Challenges

**Goal:** Understand why SSDs are different.

**Why standard overwrite doesn't work on SSDs:**

| SSD Feature | Impact on Destruction |
|-------------|----------------------|
| Wear leveling | |
| Over-provisioning | |
| TRIM command | |
| Controller encryption | |
| Bad block mapping | |

**SSD destruction methods:**

| Method | Effectiveness | Considerations |
|--------|---------------|----------------|
| ATA Secure Erase | | |
| Manufacturer secure erase | | |
| Crypto-erase (encrypted) | | |
| Physical destruction | | |

---

#### Activity E: Physical Destruction Options

**Goal:** Compare physical destruction methods.

**Physical destruction comparison:**

| Method | Equipment Needed | Cost | Verification |
|--------|------------------|------|--------------|
| Shredding | | | |
| Disintegration | | | |
| Pulverizing | | | |
| Incineration | | | |
| Drilling | | | |
| Crushing | | | |

**DIY vs Professional services:**

| Factor | DIY | Professional Service |
|--------|-----|---------------------|
| Cost | | |
| Verification | | |
| Certificate | | |
| Compliance | | |
| Volume handling | | |

---

#### Activity F: Data Destruction Scenario Planning

**Goal:** Create destruction plans for scenarios.

**Scenario 1: Office upgrade - 50 desktops being replaced**

| Item | Quantity | Destruction Method | Verification |
|------|----------|-------------------|--------------|
| Hard drives | | | |
| Memory/RAM | | | |
| Laptops | | | |
| USB drives | | | |
| Backup tapes | | | |

**Scenario 2: Data center decommission**

| Item | Method | Compliance Requirement |
|------|--------|----------------------|
| Server HDDs | | |
| SAN storage | | |
| Backup tapes | | |
| Network equipment | | |

---

#### Activity G: Documentation Requirements

**Goal:** Understand destruction documentation.

**Certificate of destruction should include:**

| Element | Purpose |
|---------|---------|
| Date of destruction | |
| Method used | |
| Serial numbers | |
| Asset tags | |
| Witness signature | |
| Service provider info | |
| Chain of custody | |

**Chain of custody tracking:**

| Stage | Documentation |
|-------|---------------|
| Asset identified for destruction | |
| Removed from service | |
| Transported to destruction | |
| Destruction performed | |
| Verification completed | |
| Certificate issued | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A company donates old computers to a school. They performed a quick format on all drives before donation. Six months later, student finds recoverable customer data. What went wrong, and what should have been done?

**Scenario 2:** Your organization is subject to HIPAA regulations. A box of old hard drives was found in a storage closet - no one knows what data was on them. What are the compliance implications, and how should you proceed?

**Scenario 3:** An employee wants to dispose of their old work laptop. IT says to "just delete your files." Is this adequate? What should the policy be?

**Scenario 4:** A vendor offers hard drive destruction services for $5 per drive with certificates. Another vendor offers $15 per drive but provides video documentation and on-site destruction. For a healthcare organization, which would you recommend and why?

---

## What You Learned Today

- ✅ Data destruction methods (overwrite, degauss, physical)
- ✅ Media-specific destruction requirements
- ✅ Overwrite standards (DoD, NIST)
- ✅ SSD destruction challenges
- ✅ Physical destruction options
- ✅ Documentation and certificates
- ✅ Compliance considerations

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 DATA DESTRUCTION QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DESTRUCTION METHODS                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  LOGICAL (Data Only)                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Overwrite    → Write patterns over data (1+ passes)                      ║
║  Crypto-erase → Destroy encryption key (instant)                          ║
║  Secure Erase → ATA command (SSD-specific)                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  PHYSICAL (Media Destroyed)                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Degaussing   → Magnetic field destroys data (HDD, tape)                  ║
║  Shredding    → Cut into small pieces                                     ║
║  Drilling     → Holes through platters                                    ║
║  Crushing     → Physically deform media                                   ║
║  Incineration → Complete destruction by fire                              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BY MEDIA TYPE                                                             ║
║  ─────────────────────────────────────────────────────────────────────────║
║  HDD          → Degauss + shred, or multi-pass overwrite                  ║
║  SSD          → Crypto-erase, Secure Erase, or physical destruction       ║
║  USB/Flash    → Physical destruction (overwrite unreliable)               ║
║  Optical      → Shred or scratch surface                                  ║
║  Tape         → Degauss + shred                                           ║
║  Paper        → Cross-cut shred                                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  STANDARDS                                                                 ║
║  ─────────────────────────────────────────────────────────────────────────║
║  DoD 5220.22-M → 3 or 7 passes (legacy government standard)               ║
║  NIST 800-88   → Clear (basic), Purge (thorough), Destroy (physical)     ║
║  Gutmann       → 35 passes (overkill for modern drives)                   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WHY SSDs ARE DIFFERENT                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Wear leveling     → Writes go to different cells                         ║
║  Over-provisioning → Hidden spare capacity                                ║
║  Bad blocks        → Inaccessible but may contain data                    ║
║  Solution          → Use Secure Erase or physical destruction             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DOCUMENTATION REQUIRED                                                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Certificate of destruction with: Date, method, serial numbers,           ║
║  witness signature, service provider, chain of custody                    ║
╚═══════════════════════════════════════════════════════════════════════════╝
```