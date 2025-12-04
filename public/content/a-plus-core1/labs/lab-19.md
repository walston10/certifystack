# Lab 19: CPUs and Processors

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 35-40 minutes
**Exam Objectives:** 3.4 - Given a scenario, install and configure motherboards, CPUs, and add-on cards

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between cores and threads, and how does hyperthreading/SMT work?**

2. **Explain what TDP means and why it matters when selecting a CPU cooler.**

3. **A customer asks whether they should buy an Intel Core i7 or i9 for gaming. What factors should guide your recommendation?**

4. **What is thermal throttling, and what causes it to occur?**

5. **Why would someone need a CPU with integrated graphics, and when is it unnecessary?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses research and system tools** - Master CPU concepts without physical hardware.

---

#### Activity A: CPU Architecture Fundamentals

**Goal:** Understand core CPU concepts.

**Basic CPU components:**

| Component | Purpose | Impact on Performance |
|-----------|---------|----------------------|
| Cores | | |
| Threads | | |
| Clock speed (GHz) | | |
| Cache (L1, L2, L3) | | |
| Integrated GPU | | |
| Memory controller | | |

**CPU execution concepts:**

| Term | Definition | Example |
|------|------------|---------|
| IPC (Instructions Per Clock) | | |
| Clock cycle | | |
| Boost clock | | |
| Base clock | | |
| Turbo/Precision Boost | | |

**Multi-threading technologies:**

| Technology | Manufacturer | What It Does |
|------------|--------------|--------------|
| Hyper-Threading (HT) | | |
| Simultaneous Multi-Threading (SMT) | | |

**How many threads does a 6-core CPU with SMT have?** _______________

---

#### Activity B: CPU Cache Deep Dive

**Goal:** Understand cache hierarchy and importance.

**Cache levels:**

| Cache | Size (typical) | Speed | What It Stores |
|-------|----------------|-------|----------------|
| L1 | | | |
| L2 | | | |
| L3 | | | |

**Cache characteristics:**

| Level | Per-Core or Shared? | Latency | Typical Size per Core |
|-------|--------------------|---------|-----------------------|
| L1 | | | |
| L2 | | | |
| L3 | | | |

**Why cache matters:**

1. RAM access time: ~100 nanoseconds
2. L3 cache access: ~10-20 nanoseconds
3. L1 cache access: ~1 nanosecond

How many times faster is L1 cache than RAM? _______________

**Cache and gaming:**

Why do some games benefit from larger L3 cache?

_________________________________________________________________

---

#### Activity C: Intel CPU Lineup

**Goal:** Understand Intel's product segmentation.

**Intel Core naming scheme:**

Example: **Intel Core i7-14700K**

| Part | Meaning |
|------|---------|
| Intel Core | |
| i7 | |
| 14 | |
| 700 | |
| K | |

**Intel suffix meanings:**

| Suffix | Meaning | Example |
|--------|---------|---------|
| K | | i9-14900K |
| F | | i5-14400F |
| KF | | i9-14900KF |
| T | | i5-14500T |
| S | | i9-14900KS |
| (none) | | i5-14400 |

**Intel Core tiers:**

| Tier | Target User | Cores (typical) | Use Case |
|------|-------------|-----------------|----------|
| Core i3 | | | |
| Core i5 | | | |
| Core i7 | | | |
| Core i9 | | | |

**Intel hybrid architecture (12th Gen+):**

| Core Type | Also Called | Purpose | Performance |
|-----------|-------------|---------|-------------|
| P-cores | | | |
| E-cores | | | |

**Example: i7-14700K has 8 P-cores + 12 E-cores = 20 total cores**

How many threads? (P-cores have HT, E-cores don't)

_________________________________________________________________

---

#### Activity D: AMD CPU Lineup

**Goal:** Understand AMD's product segmentation.

**AMD Ryzen naming scheme:**

Example: **AMD Ryzen 7 7800X3D**

| Part | Meaning |
|------|---------|
| AMD Ryzen | |
| 7 | |
| 7 | |
| 800 | |
| X | |
| 3D | |

**AMD suffix meanings:**

| Suffix | Meaning | Example |
|--------|---------|---------|
| X | | Ryzen 7 7700X |
| G | | Ryzen 5 5600G |
| (none) | | Ryzen 5 7600 |
| X3D | | Ryzen 7 7800X3D |

**AMD Ryzen tiers:**

| Tier | Target User | Cores (typical) | Use Case |
|------|-------------|-----------------|----------|
| Ryzen 3 | | | |
| Ryzen 5 | | | |
| Ryzen 7 | | | |
| Ryzen 9 | | | |

**AMD 3D V-Cache:**

What is 3D V-Cache, and why is it beneficial for gaming?

_________________________________________________________________

---

#### Activity E: CPU Specifications Comparison

**Goal:** Compare real CPU specifications.

**Research and complete this table:**

| Specification | Intel i5-14600K | AMD Ryzen 5 7600X |
|---------------|-----------------|-------------------|
| Cores | | |
| Threads | | |
| Base clock | | |
| Boost clock | | |
| L3 Cache | | |
| TDP | | |
| Socket | | |
| Integrated graphics | | |
| MSRP | | |

**Research and complete this table:**

| Specification | Intel i9-14900K | AMD Ryzen 9 7950X |
|---------------|-----------------|-------------------|
| Cores | | |
| Threads | | |
| Base clock | | |
| Boost clock | | |
| L3 Cache | | |
| TDP | | |
| Socket | | |
| Integrated graphics | | |
| MSRP | | |

**Analysis questions:**

1. Which CPU has more cores? _______________

2. Which has higher boost clock? _______________

3. Which has larger L3 cache? _______________

4. Which has higher TDP (needs more cooling)? _______________

---

#### Activity F: TDP and Power Consumption

**Goal:** Understand thermal design power.

**TDP explained:**

| Term | Definition |
|------|------------|
| TDP (Thermal Design Power) | |
| PBP (Processor Base Power) | |
| MTP (Maximum Turbo Power) | |

**TDP vs actual power consumption:**

| Scenario | Power Draw | Notes |
|----------|------------|-------|
| Idle | | |
| Light workload | | |
| Full load (sustained) | | |
| Boost/Turbo (brief) | | |

**Cooler TDP ratings:**

| CPU TDP | Minimum Cooler Rating | Recommended Cooler Type |
|---------|----------------------|------------------------|
| 65W | | |
| 105W | | |
| 125W | | |
| 125W+ (with boost to 253W) | | |

**Why Intel 14900K needs serious cooling:**

| Specification | Value |
|---------------|-------|
| Listed TDP (PBP) | 125W |
| Maximum Turbo Power | 253W |

The listed TDP is often **not** the maximum power draw. Always check MTP/PL2 specifications.

---

#### Activity G: CPU Installation Concepts

**Goal:** Understand CPU installation procedures.

**Intel LGA installation steps:**

| Step | Action | Critical Point |
|------|--------|----------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

**AMD AM4 (PGA) installation steps:**

| Step | Action | Critical Point |
|------|--------|----------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

**AMD AM5 (LGA) installation steps:**

Similar to Intel LGA - pins are on motherboard.

**Common installation mistakes:**

| Mistake | Consequence | Prevention |
|---------|-------------|------------|
| Wrong orientation | | |
| Bent pins | | |
| Too much thermal paste | | |
| Forgot thermal paste | | |
| Cooler not secured | | |
| Didn't remove plastic cover | | |

---

#### Activity H: Integrated Graphics Analysis

**Goal:** Understand integrated vs discrete graphics.

**CPUs with integrated graphics:**

| Manufacturer | Models With iGPU | Models Without iGPU |
|--------------|------------------|---------------------|
| Intel | | |
| AMD | | |

**Integrated graphics capabilities:**

| Use Case | Capable? | Notes |
|----------|----------|-------|
| Web browsing | | |
| Office work | | |
| Video playback (4K) | | |
| Light gaming (1080p low) | | |
| AAA gaming (1080p high) | | |
| Video editing | | |
| 3D rendering | | |

**When integrated graphics is sufficient:**

List 5 scenarios:

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

**When discrete GPU is necessary:**

List 5 scenarios:

1. _______________________
2. _______________________
3. _______________________
4. _______________________
5. _______________________

---

#### Activity I: Virtualization Support

**Goal:** Understand CPU virtualization features.

**Virtualization technologies:**

| Feature | Intel Name | AMD Name | Purpose |
|---------|------------|----------|---------|
| Hardware virtualization | | | |
| Nested virtualization | | | |
| I/O virtualization | | | |

**Why virtualization matters:**

| Use Case | Requires Virtualization? |
|----------|-------------------------|
| Running VirtualBox/VMware | |
| Windows Subsystem for Linux (WSL2) | |
| Android emulators | |
| Docker containers | |
| Hyper-V | |
| Normal desktop use | |

**Enabling virtualization:**

Where is this setting found? _______________

What is it typically called in BIOS?

Intel: _______________

AMD: _______________

Is it enabled by default on most systems? _______________

---

#### Activity J: CPU Bottlenecking Concepts

**Goal:** Understand system balance.

**What is a CPU bottleneck?**

_________________________________________________________________

**What is a GPU bottleneck?**

_________________________________________________________________

**Which is preferable for gaming and why?**

_________________________________________________________________

**Bottleneck scenarios:**

| System | Likely Bottleneck | Why |
|--------|-------------------|-----|
| i3-12100 + RTX 4090 | | |
| i9-14900K + GTX 1050 | | |
| i5-14600K + RTX 4070 | | |
| Ryzen 5 5600X + RTX 4060 | | |

**Resolution impact on bottlenecks:**

| Resolution | More CPU or GPU limited? | Why |
|------------|-------------------------|-----|
| 1080p | | |
| 1440p | | |
| 4K | | |

---

#### Activity K: CPU Selection Scenarios

**Goal:** Practice choosing appropriate CPUs.

**Scenario 1: Budget Gaming PC ($150 CPU budget)**

| Requirement | Selection |
|-------------|-----------|
| Primary use | Gaming at 1080p |
| Budget | ~$150 |
| Intel option | |
| AMD option | |
| Your recommendation | |
| Reasoning | |

**Scenario 2: Content Creator Workstation ($400 CPU budget)**

| Requirement | Selection |
|-------------|-----------|
| Primary use | Video editing, 3D rendering |
| Budget | ~$400 |
| Intel option | |
| AMD option | |
| Your recommendation | |
| Reasoning | |

**Scenario 3: Office/Home Use ($100 CPU budget)**

| Requirement | Selection |
|-------------|-----------|
| Primary use | Web, Office, email |
| Budget | ~$100 |
| Intel option | |
| AMD option | |
| Your recommendation | |
| Reasoning | |

**Scenario 4: High-End Gaming ($300 CPU budget)**

| Requirement | Selection |
|-------------|-----------|
| Primary use | Gaming at 1440p/4K |
| Budget | ~$300 |
| Intel option | |
| AMD option | |
| Your recommendation | |
| Reasoning | |

---

#### Activity L: Troubleshooting CPU Issues

**Goal:** Diagnose CPU-related problems.

**Symptom analysis:**

| Symptom | Possible CPU Cause | Other Possible Causes |
|---------|-------------------|----------------------|
| System won't POST | | |
| Immediate shutdown | | |
| Thermal throttling | | |
| Random crashes under load | | |
| Blue screens (BSOD) | | |
| System slower than expected | | |

**Temperature troubleshooting:**

| Temperature Range | Status | Action |
|-------------------|--------|--------|
| 30-50°C (idle) | | |
| 50-70°C (load) | | |
| 70-85°C (load) | | |
| 85-95°C (load) | | |
| 95-100°C+ | | |

**CPU stress testing:**

| Tool | Purpose | What to Monitor |
|------|---------|-----------------|
| CPU-Z | | |
| HWiNFO64 | | |
| Core Temp | | |
| Cinebench | | |
| Prime95 | | |

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to a PC** - No disassembly needed for most activities.

---

#### Activity M: Identify Your CPU

**Goal:** Document your system's processor.

**Using system tools:**

**Windows:**
1. Right-click Start → System, or
2. Open Task Manager → Performance → CPU, or
3. Run `msinfo32` or `dxdiag`

**Mac:**
1. Apple menu → About This Mac

**Linux:**
```bash
lscpu
cat /proc/cpuinfo
```

**Document your CPU:**

| Specification | Your CPU |
|---------------|----------|
| Manufacturer | |
| Model | |
| Generation | |
| Cores | |
| Threads | |
| Base clock | |
| Boost clock | |
| L1 Cache | |
| L2 Cache | |
| L3 Cache | |
| TDP | |
| Socket | |
| Integrated graphics | |
| Architecture | |
| Lithography (nm) | |

---

#### Activity N: Monitor CPU Performance

**Goal:** Observe real-time CPU behavior.

**Install monitoring software** (HWiNFO64, Core Temp, or similar)

**Idle monitoring (5 minutes):**

| Metric | Value |
|--------|-------|
| Average temperature | °C |
| Clock speed | GHz |
| CPU usage | % |
| Power consumption (if shown) | W |

**Load monitoring (run a demanding task):**

Task performed: _______________

| Metric | Value |
|--------|-------|
| Maximum temperature | °C |
| Maximum clock speed | GHz |
| Maximum CPU usage | % |
| Power consumption (if shown) | W |
| Any thermal throttling? | [ ] Yes [ ] No |

**Observations:**

Did boost clocks activate? _______________

Did all cores reach the same speed? _______________

Temperature difference between idle and load: _______________ °C

---

#### Activity O: Check Virtualization Status

**Goal:** Verify virtualization support and status.

**Windows method:**

1. Open Task Manager
2. Go to Performance → CPU
3. Look for "Virtualization: Enabled/Disabled"

Your status: _______________

**Alternative: System Information**

1. Run `msinfo32`
2. Look for:
   - Hyper-V - VM Monitor Mode Extensions
   - Hyper-V - Second Level Address Translation Extensions
   - Hyper-V - Virtualization Enabled in Firmware

**If disabled and you need it:**

1. Restart computer
2. Enter BIOS/UEFI (DEL, F2, etc.)
3. Find CPU configuration or Advanced settings
4. Enable Intel VT-x or AMD-V (SVM Mode)
5. Save and exit

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer wants to upgrade their CPU from a 10th Gen i5 to a 14th Gen i7 for better gaming. What do you need to tell them about this upgrade?**

2. **A video editor complains their renders are slow. They have an Intel i5-12400 and an RTX 4080. Which component is likely the bottleneck for rendering, and why?**

3. **A user's system shows 100°C CPU temperature and performance is poor. The system is 2 years old and was working fine before. What are the most likely causes?**

4. **A customer asks if they should buy the i7-14700K or the Ryzen 7 7800X3D for competitive gaming at 1080p. What would you recommend and why?**

---

## What You Learned Today

- ✅ Understood CPU architecture (cores, threads, cache)
- ✅ Learned Intel and AMD naming conventions
- ✅ Compared CPU specifications and tiers
- ✅ Mastered TDP and power concepts
- ✅ Understood CPU installation procedures
- ✅ Explored integrated vs discrete graphics
- ✅ Learned about virtualization support
- ✅ Understood bottlenecking concepts
- ✅ Practiced CPU selection for different scenarios
- ✅ Studied CPU troubleshooting techniques
- ✅ (Tier 2) Documented real CPU specifications
- ✅ (Tier 2) Monitored CPU performance

**Next Lab:** RAM (Memory) - understanding memory specifications, installation, and troubleshooting.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║                   CPU QUICK REFERENCE                          ║
╠═══════════════════════════════════════════════════════════════╣
║  INTEL SUFFIXES:                                               ║
║  K = Unlocked (overclockable)                                  ║
║  F = No integrated graphics                                    ║
║  T = Low power                                                 ║
║  KF = Unlocked + No iGPU                                       ║
╠═══════════════════════════════════════════════════════════════╣
║  AMD SUFFIXES:                                                 ║
║  X = Higher performance                                        ║
║  G = Integrated graphics                                       ║
║  X3D = 3D V-Cache (gaming optimized)                          ║
╠═══════════════════════════════════════════════════════════════╣
║  CURRENT SOCKETS:                                              ║
║  Intel: LGA 1700 (12th-14th Gen)                              ║
║  AMD: AM5 (Ryzen 7000+), AM4 (Ryzen 1000-5000)                ║
╠═══════════════════════════════════════════════════════════════╣
║  THREADS = CORES × 2 (with HT/SMT enabled)                    ║
╠═══════════════════════════════════════════════════════════════╣
║  SAFE TEMPS: <85°C under load (throttling starts ~100°C)      ║
╠═══════════════════════════════════════════════════════════════╣
║  VIRTUALIZATION: Intel VT-x / AMD-V (SVM) - Enable in BIOS    ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 19: CPUs and Processors*