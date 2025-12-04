# Lab 20: RAM (Memory)

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 30-35 minutes
**Exam Objectives:** 3.2 - Given a scenario, install the appropriate RAM

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between DDR4 and DDR5, and are they interchangeable?**

2. **Explain what dual-channel memory means and why it improves performance.**

3. **A customer's system shows 16GB installed but only 8GB usable in Windows. What are the possible causes?**

4. **What is XMP/DOCP, and why might RAM run slower than its advertised speed without it?**

5. **Why does ECC memory exist, and in what environments is it typically used?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses research and system tools** - Master RAM concepts without physical installation.

---

#### Activity A: RAM Fundamentals

**Goal:** Understand core memory concepts.

**RAM vs Storage:**

| Characteristic | RAM | Storage (SSD/HDD) |
|----------------|-----|-------------------|
| Volatility | | |
| Speed | | |
| Purpose | | |
| Capacity (typical) | | |
| Cost per GB | | |

**RAM terminology:**

| Term | Definition |
|------|------------|
| DRAM | |
| SDRAM | |
| DDR | |
| DIMM | |
| SO-DIMM | |
| Channel | |
| Rank | |
| Module | |

**Why is RAM called "volatile" memory?**

_________________________________________________________________

---

#### Activity B: DDR Generations

**Goal:** Understand DDR evolution and differences.

**DDR generation comparison:**

| Specification | DDR3 | DDR4 | DDR5 |
|---------------|------|------|------|
| Pins (DIMM) | | | |
| Voltage | | | |
| Speed range (MT/s) | | | |
| Max capacity/stick | | | |
| Notch position | | | |
| On-die ECC | | | |

**Physical differences:**

Why can't you install DDR4 in a DDR5 slot (or vice versa)?

_________________________________________________________________

**Draw or describe the notch positions:**

```
DDR3: [_______________|____________________]
                      ^notch position

DDR4: [________________|___________________]
                       ^notch position

DDR5: [_________________|__________________]
                        ^notch position
```

Are DDR4 and DDR5 notches in the same position? _______________

---

#### Activity C: RAM Specifications Deep Dive

**Goal:** Decode RAM specifications.

**Example RAM specification:**

**Corsair Vengeance DDR5-6000 CL30 32GB (2x16GB)**

| Part | Meaning |
|------|---------|
| Corsair Vengeance | |
| DDR5 | |
| 6000 | |
| CL30 | |
| 32GB | |
| 2x16GB | |

**Speed ratings explained:**

| Rating Type | Example | What It Means |
|-------------|---------|---------------|
| MT/s (Megatransfers) | DDR5-6000 | |
| MHz (clock speed) | 3000 MHz | |
| PC rating | PC5-48000 | |

**Convert between formats:**

DDR5-6000 = _______ MHz actual clock × 2 (DDR = Double Data Rate)

PC5-48000 = DDR5-_______ × 8 (bytes per transfer)

---

#### Activity D: CAS Latency and Timings

**Goal:** Understand memory timings.

**Primary timings (example: 16-18-18-36):**

| Timing | Abbreviation | What It Measures |
|--------|--------------|------------------|
| First number (16) | CL (CAS Latency) | |
| Second number (18) | tRCD | |
| Third number (18) | tRP | |
| Fourth number (36) | tRAS | |

**CAS Latency impact:**

| Scenario | CL | Speed | Better For |
|----------|----|----|------------|
| DDR4-3200 CL16 | 16 | 3200 | |
| DDR4-3600 CL18 | 18 | 3600 | |

**Calculate true latency:**

Formula: True Latency (ns) = (CL ÷ Transfer Rate) × 2000

DDR4-3200 CL16: (16 ÷ 3200) × 2000 = _______ ns

DDR4-3600 CL18: (18 ÷ 3600) × 2000 = _______ ns

Which has lower (better) true latency? _______________

---

#### Activity E: Form Factors

**Goal:** Identify RAM form factors.

**DIMM vs SO-DIMM:**

| Specification | DIMM | SO-DIMM |
|---------------|------|---------|
| Full name | | |
| Pin count (DDR4) | | |
| Pin count (DDR5) | | |
| Physical length | | |
| Used in | | |

**Other form factors:**

| Form Factor | Use Case |
|-------------|----------|
| UDIMM | |
| RDIMM | |
| LRDIMM | |
| NVDIMM | |

**Identification exercise:**

You're upgrading a laptop. Which form factor do you need? _______________

You're upgrading a desktop. Which form factor do you need? _______________

---

#### Activity F: Channel Configurations

**Goal:** Master memory channel concepts.

**Channel configurations:**

| Configuration | Bandwidth | Slots Used (typical) |
|---------------|-----------|---------------------|
| Single-channel | | |
| Dual-channel | | |
| Triple-channel | | |
| Quad-channel | | |

**Dual-channel installation rules:**

```
4-Slot Motherboard Layout:
+------+------+------+------+
|  A1  |  A2  |  B1  |  B2  |
| Gray | Black| Gray | Black|
+------+------+------+------+
  CH A   CH A   CH B   CH B
```

**Fill in the recommended slots:**

| RAM Sticks | Install In | Configuration |
|------------|------------|---------------|
| 1 stick | | Single-channel |
| 2 sticks | | Dual-channel |
| 3 sticks | | |
| 4 sticks | | Dual-channel |

**Why dual-channel matters:**

A system with dual-channel DDR4-3200:
- Single-channel bandwidth: ~25.6 GB/s
- Dual-channel bandwidth: ~51.2 GB/s

Performance improvement in real-world use: _______ % (approximate)

---

#### Activity G: XMP and DOCP Profiles

**Goal:** Understand memory overclocking profiles.

**What is XMP/DOCP?**

| Term | Full Name | Manufacturer |
|------|-----------|--------------|
| XMP | | |
| DOCP | | |
| EXPO | | |

**Why XMP matters:**

| Setting | Speed | Timings |
|---------|-------|---------|
| JEDEC default (no XMP) | | |
| XMP Profile 1 | | |
| XMP Profile 2 (if available) | | |

**Example scenario:**

You buy DDR5-6000 RAM and install it. Without enabling XMP, what speed will it run at?

_________________________________________________________________

How do you enable XMP?

_________________________________________________________________

---

#### Activity H: ECC Memory

**Goal:** Understand error-correcting memory.

**ECC vs Non-ECC:**

| Feature | Non-ECC | ECC |
|---------|---------|-----|
| Error detection | | |
| Error correction | | |
| Cost | | |
| Capacity per module | | |
| Performance | | |
| Use case | | |

**How ECC works:**

| Error Type | Detection | Correction |
|------------|-----------|------------|
| Single-bit error | | |
| Multi-bit error | | |

**Where ECC is used:**

List 5 environments where ECC memory is critical:

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

**Consumer platforms and ECC:**

Do Intel consumer CPUs support ECC? _______________

Do AMD Ryzen CPUs support ECC? _______________

---

#### Activity I: RAM Capacity Planning

**Goal:** Determine appropriate RAM amounts.

**RAM requirements by use case:**

| Use Case | Minimum | Recommended | Ideal |
|----------|---------|-------------|-------|
| Basic web/email | | | |
| Office productivity | | | |
| Gaming | | | |
| Content creation | | | |
| Video editing (4K) | | | |
| Virtualization | | | |
| Software development | | | |

**32-bit vs 64-bit limitations:**

| OS Type | Maximum RAM |
|---------|-------------|
| 32-bit Windows | |
| 64-bit Windows Home | |
| 64-bit Windows Pro | |

**Scenario planning:**

A customer wants to run:
- Windows 11 (~4GB)
- Chrome with 20 tabs (~4GB)
- Photoshop (~4GB)
- Spotify (~0.5GB)

**Minimum RAM needed:** _______ GB

**Recommended RAM:** _______ GB (with headroom)

---

#### Activity J: RAM Compatibility

**Goal:** Understand compatibility factors.

**Compatibility checklist:**

| Factor | What to Check |
|--------|---------------|
| DDR generation | |
| Form factor | |
| Speed support | |
| Capacity per slot | |
| Total capacity | |
| ECC support | |
| Rank compatibility | |
| Height (with cooler) | |

**Motherboard QVL:**

What is a QVL? _______________

Where do you find it? _______________

Is RAM not on the QVL guaranteed to fail? _______________

**Speed compatibility:**

If motherboard supports DDR4-3200 max, and you install DDR4-3600:

What speed will the RAM run at? _______________

Will it work? _______________

---

#### Activity K: RAM Installation Concepts

**Goal:** Understand proper installation procedures.

**Installation steps:**

| Step | Action | Why Important |
|------|--------|---------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

**Orientation:**

How do you ensure RAM is oriented correctly?

_________________________________________________________________

What happens if you try to install it backwards?

_________________________________________________________________

**Common installation mistakes:**

| Mistake | Symptom | Prevention |
|---------|---------|------------|
| Not fully seated | | |
| Wrong slots (single-channel) | | |
| Incompatible RAM | | |
| Mixed speeds | | |
| ECC in non-ECC board | | |

---

#### Activity L: Troubleshooting RAM Issues

**Goal:** Diagnose memory-related problems.

**Symptom analysis:**

| Symptom | Possible RAM Cause | Other Causes |
|---------|-------------------|--------------|
| System won't POST | | |
| Beep codes (continuous) | | |
| Blue screens (random) | | |
| System freezes | | |
| Applications crash | | |
| Less RAM than installed | | |

**Diagnostic tools:**

| Tool | Purpose | How to Access |
|------|---------|---------------|
| Windows Memory Diagnostic | | |
| MemTest86 | | |
| Task Manager | | |
| CPU-Z | | |

**Troubleshooting steps:**

1. System doesn't boot after RAM install:
   - Step 1: _______________________
   - Step 2: _______________________
   - Step 3: _______________________

2. Only half the RAM is recognized:
   - Check 1: _______________________
   - Check 2: _______________________
   - Check 3: _______________________

3. Random crashes and BSODs:
   - Test 1: _______________________
   - Test 2: _______________________
   - Test 3: _______________________

---

#### Activity M: RAM Purchase Scenarios

**Goal:** Practice recommending appropriate RAM.

**Scenario 1: Budget Gaming PC**

| Requirement | Specification |
|-------------|---------------|
| Platform | Intel 12th Gen, DDR4 |
| Budget | ~$60 |
| Current RAM | None |
| Use | Gaming, Discord, Chrome |

Your recommendation:
- Capacity: _______________
- Speed: _______________
- Configuration: _______________
- Reasoning: _______________

**Scenario 2: Workstation Upgrade**

| Requirement | Specification |
|-------------|---------------|
| Platform | AMD AM5, DDR5 |
| Budget | ~$150 |
| Current RAM | 16GB (1x16GB) |
| Use | Video editing, After Effects |

Your recommendation:
- Capacity: _______________
- Speed: _______________
- Configuration: _______________
- Reasoning: _______________

**Scenario 3: Laptop Upgrade**

| Requirement | Specification |
|-------------|---------------|
| Platform | Intel 11th Gen laptop, DDR4 |
| Budget | ~$40 |
| Current RAM | 8GB (1x8GB soldered + 1 empty slot) |
| Use | Office work, web browsing |

Your recommendation:
- Capacity: _______________
- Speed: _______________
- Form factor: _______________
- Reasoning: _______________

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to a PC** - System tools only, no disassembly needed for most.

---

#### Activity N: Document Your RAM

**Goal:** Identify your system's memory configuration.

**Using system tools:**

**Windows - Task Manager:**
1. Ctrl+Shift+Esc → Performance → Memory

Document:

| Specification | Your System |
|---------------|-------------|
| Total RAM | |
| RAM in use | |
| Available | |
| Speed | |
| Slots used | |
| Form factor | |

**Windows - Command Prompt:**
```cmd
wmic memorychip get capacity, speed, manufacturer, partnumber
```

| Stick | Capacity | Speed | Manufacturer |
|-------|----------|-------|--------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

**Using CPU-Z (Memory tab):**

| Specification | Value |
|---------------|-------|
| Type | |
| Channel mode | |
| Size | |
| DRAM Frequency | |
| CAS Latency | |
| tRCD | |
| tRP | |
| tRAS | |

---

#### Activity O: Check XMP Status

**Goal:** Verify if XMP/DOCP is enabled.

**Method 1: CPU-Z**

1. Open CPU-Z
2. Go to Memory tab
3. Compare DRAM Frequency to RAM's rated speed

Your RAM rated speed: _______ MT/s

Current running speed (CPU-Z shows half, multiply by 2): _______ MT/s

Is XMP likely enabled? [ ] Yes [ ] No

**Method 2: BIOS check**

1. Restart and enter BIOS
2. Find memory settings
3. Look for XMP/DOCP/EXPO setting

Current status: [ ] Enabled [ ] Disabled [ ] Not available

---

#### Activity P: Run Memory Diagnostic

**Goal:** Test RAM for errors.

**Windows Memory Diagnostic:**

1. Press Win + R
2. Type `mdsched.exe`
3. Choose "Restart now and check for problems"
4. Wait for test to complete (5-15 minutes)

Test result: _______________

Any errors found? [ ] Yes [ ] No

**Note:** For more thorough testing, use MemTest86 (bootable USB required).

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer installed 2x16GB DDR4-3600 in a new build, but CPU-Z shows it running at 2133 MHz. What's the most likely cause and solution?**

2. **A user's PC has 4 RAM slots. Currently has 1x8GB in slot A1. They want to add another 8GB stick. Which slot should they use and why?**

3. **A laptop user wants to upgrade from 8GB to 32GB. The laptop has 8GB soldered and one SO-DIMM slot. Can they achieve 32GB? What would you recommend?**

4. **A system experiences random crashes and blue screens with memory-related errors. The RAM passes Windows Memory Diagnostic. What else should you try?**

---

## What You Learned Today

- ✅ Understood RAM fundamentals and terminology
- ✅ Compared DDR generations (DDR3, DDR4, DDR5)
- ✅ Decoded RAM specifications and timings
- ✅ Learned CAS latency and true latency calculations
- ✅ Identified form factors (DIMM, SO-DIMM)
- ✅ Mastered channel configurations
- ✅ Understood XMP/DOCP profiles
- ✅ Explored ECC memory concepts
- ✅ Practiced capacity planning
- ✅ Learned compatibility considerations
- ✅ Studied RAM troubleshooting
- ✅ (Tier 2) Documented real RAM specifications
- ✅ (Tier 2) Checked XMP status and ran diagnostics

**Next Lab:** Storage Devices - HDDs and SSDs - understanding storage technologies and selection.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║                    RAM QUICK REFERENCE                         ║
╠═══════════════════════════════════════════════════════════════╣
║  DDR GENERATIONS:                                              ║
║  DDR3: 240-pin, 1.5V, 800-2133 MT/s                           ║
║  DDR4: 288-pin, 1.2V, 2133-3200+ MT/s                         ║
║  DDR5: 288-pin, 1.1V, 4800-8000+ MT/s                         ║
║  NOT INTERCHANGEABLE - Different notch positions!             ║
╠═══════════════════════════════════════════════════════════════╣
║  DUAL-CHANNEL (2 sticks):                                      ║
║  Use slots A2 + B2 (typically slots 2 and 4)                  ║
║  Match colors for same channel                                 ║
╠═══════════════════════════════════════════════════════════════╣
║  FORM FACTORS:                                                 ║
║  DIMM: Desktop (288-pin DDR4/DDR5)                            ║
║  SO-DIMM: Laptop (260-pin DDR4, 262-pin DDR5)                 ║
╠═══════════════════════════════════════════════════════════════╣
║  XMP/DOCP: Enable in BIOS for advertised speeds!              ║
║  Without XMP: RAM runs at JEDEC default (slower)              ║
╠═══════════════════════════════════════════════════════════════╣
║  CAPACITY GUIDE:                                               ║
║  8GB: Minimum | 16GB: Sweet spot | 32GB+: Content creation    ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 20: RAM (Memory)*