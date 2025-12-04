# Lab 19: CPUs and Processors - Solution Guide

**Note to Students:** Review this AFTER completing your own research and activities!

---

## Section 1: Concept Check - Answers

**1. What is the difference between cores and threads, and how does hyperthreading/SMT work?**

**Answer:**

| Concept | Definition |
|---------|------------|
| **Core** | A physical processing unit that can execute instructions. Each core is actual silicon on the CPU die. |
| **Thread** | A virtual processing unit. A sequence of instructions that can be managed independently by the OS scheduler. |

**Hyperthreading (Intel) / SMT (AMD):**

These technologies allow each physical core to handle **two threads** simultaneously.

**How it works:**
- Each core has execution resources (ALUs, cache access, etc.)
- These resources aren't always 100% utilized
- HT/SMT allows a second thread to use idle resources
- One core appears as two logical processors to the OS

**Performance impact:**
- Does NOT double performance
- Typically adds 15-30% performance in multi-threaded workloads
- Some workloads see no benefit

**Example:**
- 8-core CPU without HT = 8 threads
- 8-core CPU with HT = 16 threads

---

**2. Explain what TDP means and why it matters when selecting a CPU cooler.**

**Answer:**

**TDP = Thermal Design Power**

| Aspect | Explanation |
|--------|-------------|
| Definition | The amount of heat (in watts) a cooling system must dissipate under typical load |
| Unit | Watts (W) |
| Purpose | Helps select appropriate cooling |

**Why TDP matters for cooler selection:**

| CPU TDP | Cooler Requirement |
|---------|-------------------|
| 65W | Stock cooler or basic tower |
| 105W | Mid-range tower cooler |
| 125W | High-end air or 240mm AIO |
| 150W+ | Premium air or 280mm+ AIO |
| 200W+ | High-end AIO or custom loop |

**Important caveat:**

TDP is often **not** maximum power consumption!

| Term | Meaning |
|------|---------|
| TDP/PBP | Base power (sustained) |
| MTP/PL2 | Maximum turbo power (peak) |

Example: Intel i9-14900K
- TDP: 125W
- Maximum Turbo Power: **253W**

You need cooling for the **maximum** power, not just the TDP!

---

**3. A customer asks whether they should buy an Intel Core i7 or i9 for gaming. What factors should guide your recommendation?**

**Answer:**

**For most gamers: i7 is sufficient**

| Factor | i7 | i9 |
|--------|----|----|
| Gaming performance | Excellent | Marginally better |
| Price | $350-400 | $550-600 |
| Cores/Threads | Plenty for gaming | More than gaming needs |
| Power/Heat | Moderate | High (needs better cooling) |

**When to recommend i9:**

| Use Case | Recommendation |
|----------|----------------|
| Pure gaming | i7 (save money for better GPU) |
| Gaming + streaming | i7 usually sufficient |
| Gaming + heavy productivity | Consider i9 |
| Video editing + gaming | i9 makes sense |

**Key insight:** Games are more GPU-limited than CPU-limited. The money saved on CPU can buy a better graphics card, which has more gaming impact.

---

**4. What is thermal throttling, and what causes it to occur?**

**Answer:**

**Thermal throttling:** The CPU automatically reduces its clock speed and voltage to prevent overheating damage.

| Temperature | CPU Behavior |
|-------------|--------------|
| Normal (<85°C) | Full boost clocks |
| Warm (85-95°C) | May reduce boost |
| Hot (95-100°C) | Actively throttles |
| Critical (100°C+) | Severe throttling or shutdown |

**Common causes:**
- Inadequate cooler for CPU TDP
- Dried/missing thermal paste
- Dust buildup in heatsink
- Poor case airflow
- Failed cooler fan

---

**5. Why would someone need a CPU with integrated graphics, and when is it unnecessary?**

**Answer:**

**When iGPU IS needed:**
- Budget builds without dedicated GPU
- Office/productivity PCs
- Home theater PCs
- Troubleshooting (test without GPU)
- Backup if discrete GPU fails

**When iGPU is NOT needed:**
- Gaming PC with dedicated GPU
- Workstation with professional GPU
- Rendering rigs
- Any system with discrete graphics

**Cost note:** F-suffix Intel and non-G AMD CPUs save ~$20-30.

---

## Section 2: Activity Solutions

### Activity A: CPU Architecture Reference

| Component | Purpose | Performance Impact |
|-----------|---------|-------------------|
| Cores | Execute instructions | More = better multitasking |
| Threads | Virtual execution paths | More = better parallel work |
| Clock speed | Cycles per second | Higher = faster single-thread |
| Cache | Fast on-chip memory | More = fewer RAM accesses |
| Integrated GPU | Built-in graphics | Display without discrete GPU |
| Memory controller | Manages RAM | Affects memory bandwidth |

**6-core CPU with SMT:** 12 threads

---

### Activity B: CPU Cache Reference

| Cache | Size | Speed | Purpose |
|-------|------|-------|---------|
| L1 | 32-64 KB/core | ~1 ns | Most frequent data |
| L2 | 256 KB-1 MB/core | ~3-10 ns | Recent data |
| L3 | 16-96 MB shared | ~10-20 ns | Shared working set |

**L1 vs RAM:** L1 is approximately **100× faster** than RAM.

**Gaming and L3 cache:** Larger L3 keeps more game data close to CPU, reducing slow RAM accesses. AMD's 3D V-Cache (96MB L3) shows 10-25% gaming improvement.

---

### Activity C: Intel CPU Reference

**Naming (i7-14700K):**

| Part | Meaning |
|------|---------|
| i7 | Performance tier |
| 14 | 14th generation |
| 700 | SKU number |
| K | Unlocked (overclockable) |

**Suffixes:**

| Suffix | Meaning |
|--------|---------|
| K | Unlocked multiplier |
| F | No integrated graphics |
| KF | Unlocked + no iGPU |
| T | Low power (35W) |

**Tiers:**

| Tier | Cores | Use Case |
|------|-------|----------|
| i3 | 4 | Budget, basic tasks |
| i5 | 6-14 | Mainstream gaming |
| i7 | 8-20 | Performance |
| i9 | 8-24 | Enthusiast/workstation |

**i7-14700K threads:** 8 P-cores (16 threads) + 12 E-cores (12 threads) = **28 threads**

---

### Activity D: AMD CPU Reference

**Naming (Ryzen 7 7800X3D):**

| Part | Meaning |
|------|---------|
| 7 | Performance tier |
| 7 | 7000 series (generation) |
| 800 | SKU number |
| X | Higher performance |
| 3D | 3D V-Cache |

**Suffixes:**

| Suffix | Meaning |
|--------|---------|
| X | Higher clocks |
| G | Integrated graphics |
| X3D | Extra L3 cache stacked |

**3D V-Cache:** Extra L3 cache stacked vertically (96MB vs 32MB standard). Provides 10-25% better gaming performance.

---

### Activity F: TDP Reference

**Cooler recommendations:**

| CPU TDP | Recommended Cooler |
|---------|-------------------|
| 65W | Stock or basic tower |
| 105W | Mid-range tower or 240mm AIO |
| 125W | Good tower or 240-280mm AIO |
| 125W (253W boost) | 280-360mm AIO |

**Key point:** Check Maximum Turbo Power (MTP), not just TDP!

---

### Activity G: Installation Reference

**Common mistakes:**

| Mistake | Consequence |
|---------|-------------|
| Wrong orientation | Bent pins, damage |
| Forcing CPU | Bent pins |
| No thermal paste | Overheating |
| Too much paste | Mess, poor transfer |
| Plastic cover left on | No heat transfer |
| Loose cooler mount | Poor contact |

**Orientation:** Match triangle on CPU corner to triangle on socket.

---

### Activity I: Virtualization Reference

| Feature | Intel | AMD |
|---------|-------|-----|
| Hardware virtualization | VT-x | AMD-V (SVM) |
| I/O virtualization | VT-d | AMD-Vi |

**Enable in BIOS** under CPU Configuration or Advanced Settings.

**Required for:** VirtualBox, VMware, Hyper-V, WSL2, Docker, Android emulators.

---

### Activity J: Bottlenecking Reference

| Resolution | Typically Limited By |
|------------|---------------------|
| 1080p | More CPU-limited |
| 1440p | Balanced |
| 4K | More GPU-limited |

**For gaming:** GPU bottleneck is preferred (maximizes graphics performance).

---

### Activity L: Troubleshooting Reference

**Temperature guidelines:**

| Range | Status | Action |
|-------|--------|--------|
| 30-50°C idle | Normal | None |
| 50-70°C load | Good | None |
| 70-85°C load | Acceptable | Monitor |
| 85-95°C load | Warm | Improve cooling |
| 95-100°C+ | Throttling | Fix immediately |

---

## Section 3: Reflection - Discussion Points

### Scenario 1: 10th Gen to 14th Gen Upgrade

**Not a simple swap.** Different sockets:
- 10th Gen: LGA 1200
- 14th Gen: LGA 1700

**Required:** New motherboard, possibly new RAM (DDR5), new cooler bracket. Budget $300-500+ beyond CPU cost.

---

### Scenario 2: Video Editor with i5-12400 + RTX 4080

**Bottleneck:** CPU

Video rendering is CPU-bound. The i5-12400 (6 cores) limits the system. Recommend upgrading to i7-14700K or Ryzen 9 for faster renders.

---

### Scenario 3: 100°C on 2-Year-Old System

**Likely causes:**
1. Dust clogging heatsink
2. Dried thermal paste
3. Failed fan
4. Loose cooler mount

**Fix:** Clean dust, replace thermal paste, verify fan operation, reseat cooler.

---

### Scenario 4: i7-14700K vs 7800X3D for 1080p Gaming

**Recommendation: Ryzen 7 7800X3D**

The 3D V-Cache provides 5-15% better gaming performance at 1080p. It also runs cooler (120W vs 253W). For pure competitive gaming, the 7800X3D is the better choice.

---

## Key Takeaways

**For the A+ Exam:**

1. **Threads = Cores × 2** (with HT/SMT)
2. **Intel K = unlocked, F = no iGPU**
3. **AMD X = performance, G = has iGPU, X3D = extra cache**
4. **Current sockets:** Intel LGA 1700, AMD AM5/AM4
5. **TDP:** Check MTP for actual max power
6. **Safe temps:** Under 85°C at load
7. **Virtualization:** VT-x/AMD-V, enable in BIOS

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 19: CPUs and Processors - Solution Guide*