# Lab 17: Power Supplies and Cooling

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 35-40 minutes
**Exam Objectives:** 3.4 - Given a scenario, install and configure motherboards, CPUs, and add-on cards

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What do the +12V, +5V, and +3.3V rails on a PSU power, and which is most important for modern systems?**

2. **Explain the difference between a modular, semi-modular, and non-modular PSU, and when you'd choose each.**

3. **A system randomly shuts down under heavy load but runs fine at idle. What PSU-related issue might cause this?**

4. **What does the 80 PLUS certification mean, and why does efficiency matter?**

5. **Describe the purpose of thermal paste and what happens if it's applied incorrectly (too much or too little).**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses research and calculation** - Master PSU concepts without opening a computer.

---

#### Activity A: PSU Specifications Deep Dive

**Goal:** Understand power supply unit specifications.

**Key PSU specifications:**

| Specification | What It Means | Why It Matters |
|---------------|---------------|----------------|
| Wattage (W) | | |
| +12V rail amps | | |
| 80 PLUS rating | | |
| Modular type | | |
| Form factor | | |
| Fan size | | |
| Warranty | | |

**Voltage rails explained:**

| Rail | Voltage | Primary Use | Modern Importance |
|------|---------|-------------|-------------------|
| +12V | | | |
| +5V | | | |
| +3.3V | | | |
| -12V | | | |
| +5VSB | | | |

**Single rail vs Multi-rail:**

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| Single rail | | | |
| Multi-rail | | | |

Which is more common in consumer PSUs today? _______________

---

#### Activity B: 80 PLUS Efficiency Ratings

**Goal:** Understand efficiency certifications.

**Complete the 80 PLUS table:**

| Certification | 20% Load | 50% Load | 100% Load | Typical Price |
|---------------|----------|----------|-----------|---------------|
| 80 PLUS (White) | | | | |
| 80 PLUS Bronze | | | | |
| 80 PLUS Silver | | | | |
| 80 PLUS Gold | | | | |
| 80 PLUS Platinum | | | | |
| 80 PLUS Titanium | | | | |

**Why efficiency matters:**

| Factor | Impact of Higher Efficiency |
|--------|----------------------------|
| Electricity cost | |
| Heat output | |
| Fan noise | |
| Component longevity | |
| Environmental | |

**Calculate the difference:**

A 650W system at full load for 8 hours/day:

| PSU Efficiency | Actual Power Draw | Daily kWh | Monthly Cost (at $0.12/kWh) |
|----------------|-------------------|-----------|----------------------------|
| 80% (White) | | | |
| 87% (Bronze) | | | |
| 90% (Gold) | | | |

Show your work:

_________________________________________________________________

---

#### Activity C: PSU Connectors Identification

**Goal:** Learn all PSU connector types.

**Main power connectors:**

| Connector | Pins | Purpose | Voltage(s) |
|-----------|------|---------|------------|
| ATX Main | | | |
| EPS/CPU | | | |
| PCIe 6-pin | | | |
| PCIe 8-pin (6+2) | | | |
| PCIe 12-pin (12VHPWR) | | | |

**Peripheral connectors:**

| Connector | Pins | Purpose | Still Common? |
|-----------|------|---------|---------------|
| SATA power | | | |
| Molex (4-pin) | | | |
| Berg (floppy) | | | |

**Sketch or describe each connector:**

**24-pin ATX:**
```
[Draw or describe the connector shape and pin layout]
```

**8-pin EPS (CPU):**
```
[Draw or describe]
```

**PCIe 8-pin (6+2):**
```
[Draw or describe]
```

**SATA power:**
```
[Draw or describe]
```

---

#### Activity D: Wattage Calculation

**Goal:** Calculate PSU requirements for a system.

**Component power consumption reference:**

| Component | Typical TDP Range |
|-----------|-------------------|
| Intel Core i5 (12th-14th gen) | 65-125W |
| Intel Core i7 (12th-14th gen) | 125-253W |
| Intel Core i9 (12th-14th gen) | 125-253W |
| AMD Ryzen 5 (5000/7000) | 65-105W |
| AMD Ryzen 7 (5000/7000) | 105-170W |
| AMD Ryzen 9 (5000/7000) | 120-170W |
| NVIDIA RTX 4060 | 115W |
| NVIDIA RTX 4070 | 200W |
| NVIDIA RTX 4080 | 320W |
| NVIDIA RTX 4090 | 450W |
| AMD RX 7600 | 165W |
| AMD RX 7800 XT | 263W |
| AMD RX 7900 XTX | 355W |
| DDR5 RAM (per stick) | 5-10W |
| SATA SSD | 2-5W |
| NVMe SSD | 5-10W |
| HDD | 5-10W |
| Case fans (each) | 2-5W |

**Build 1: Budget Office PC**

| Component | Selection | TDP |
|-----------|-----------|-----|
| CPU | Intel Core i5-12400 | W |
| GPU | Integrated | W |
| RAM | 2x8GB DDR4 | W |
| Storage | 1x NVMe SSD | W |
| Fans | 2 case fans | W |
| **Subtotal** | | W |
| **+20% headroom** | | W |
| **Recommended PSU** | | W |

**Build 2: Mid-Range Gaming PC**

| Component | Selection | TDP |
|-----------|-----------|-----|
| CPU | AMD Ryzen 5 7600 | W |
| GPU | NVIDIA RTX 4070 | W |
| RAM | 2x16GB DDR5 | W |
| Storage | 1x NVMe + 1x HDD | W |
| Fans | 4 case fans | W |
| **Subtotal** | | W |
| **+20% headroom** | | W |
| **Recommended PSU** | | W |

**Build 3: High-End Workstation**

| Component | Selection | TDP |
|-----------|-----------|-----|
| CPU | Intel Core i9-14900K | W |
| GPU | NVIDIA RTX 4090 | W |
| RAM | 4x16GB DDR5 | W |
| Storage | 2x NVMe + 2x HDD | W |
| Fans | 6 case fans + AIO pump | W |
| **Subtotal** | | W |
| **+20% headroom** | | W |
| **Recommended PSU** | | W |

---

#### Activity E: PSU Form Factors

**Goal:** Understand different PSU sizes.

**PSU form factors:**

| Form Factor | Dimensions | Use Case |
|-------------|------------|----------|
| ATX | | |
| SFX | | |
| SFX-L | | |
| TFX | | |
| Flex ATX | | |

**Compatibility considerations:**

| Case Type | Compatible PSU Form Factors |
|-----------|----------------------------|
| Full Tower | |
| Mid Tower | |
| Mini Tower | |
| SFF (Mini-ITX) | |
| HTPC | |
| Slim Desktop | |

**What happens if you put an SFX PSU in an ATX case?**

_________________________________________________________________

**Can you put an ATX PSU in an SFF case?**

_________________________________________________________________

---

#### Activity F: Cooling Methods Overview

**Goal:** Understand different cooling solutions.

**Cooling types comparison:**

| Cooling Type | How It Works | Pros | Cons | Best For |
|--------------|--------------|------|------|----------|
| Stock cooler | | | | |
| Tower air cooler | | | | |
| AIO liquid cooler | | | | |
| Custom loop | | | | |

**Air cooling components:**

| Component | Purpose |
|-----------|---------|
| Heatsink | |
| Heat pipes | |
| Fins | |
| Base plate | |
| Fan | |

**Liquid cooling components:**

| Component | Purpose |
|-----------|---------|
| Water block | |
| Radiator | |
| Pump | |
| Reservoir | |
| Tubing | |
| Coolant | |

---

#### Activity G: Thermal Paste Application

**Goal:** Understand thermal interface materials.

**Thermal paste purpose:**

What does thermal paste do?

_________________________________________________________________

What happens without thermal paste?

_________________________________________________________________

**Application methods:**

| Method | Description | Best For |
|--------|-------------|----------|
| Pea/dot | | |
| X pattern | | |
| Line | | |
| Spread | | |

**Which method is generally recommended for beginners?** _______________

**Common thermal paste mistakes:**

| Mistake | Consequence |
|---------|-------------|
| Too much paste | |
| Too little paste | |
| Air bubbles | |
| Old/dried paste | |
| Not cleaning old paste | |
| Paste on socket pins | |

**How often should thermal paste be replaced?**

_________________________________________________________________

---

#### Activity H: Fan Specifications

**Goal:** Understand case and CPU fan specifications.

**Common fan sizes:**

| Size | Common Use | Typical RPM | Typical CFM |
|------|------------|-------------|-------------|
| 80mm | | | |
| 92mm | | | |
| 120mm | | | |
| 140mm | | | |
| 200mm | | | |

**Fan specifications explained:**

| Spec | What It Means | Higher = |
|------|---------------|----------|
| CFM (Cubic Feet per Minute) | | |
| RPM (Revolutions per Minute) | | |
| dBA (Decibels) | | |
| Static Pressure (mmH2O) | | |
| Airflow vs Pressure optimized | | |

**When to use each fan type:**

| Application | Airflow or Pressure? | Why? |
|-------------|---------------------|------|
| Case intake (no filter) | | |
| Case intake (filtered) | | |
| Radiator | | |
| CPU heatsink | | |
| Open case exhaust | | |

**PWM vs DC fans:**

| Feature | PWM (4-pin) | DC (3-pin) |
|---------|-------------|------------|
| Speed control method | | |
| Control precision | | |
| Minimum speed | | |
| Motherboard header | | |

---

#### Activity I: CPU Cooler Selection

**Goal:** Match coolers to CPU requirements.

**Cooler specifications:**

| Spec | What to Check |
|------|---------------|
| TDP rating | |
| Socket compatibility | |
| Cooler height | |
| RAM clearance | |
| Mounting system | |

**Match the cooler to the build:**

| Build | CPU TDP | Case Clearance | Budget | Recommended Cooler Type |
|-------|---------|----------------|--------|------------------------|
| Office PC | 65W | 160mm | Low | |
| Gaming PC | 125W | 170mm | Medium | |
| Workstation | 253W | 180mm | High | |
| SFF Gaming | 105W | 70mm | Medium | |

**Popular cooler examples by tier:**

| Tier | Air Cooler Example | AIO Example | Price Range |
|------|-------------------|-------------|-------------|
| Budget | | | $20-40 |
| Mid-range | | | $40-80 |
| High-end | | | $80-150 |
| Enthusiast | | | $150+ |

---

#### Activity J: Troubleshooting Power Issues

**Goal:** Diagnose common PSU and cooling problems.

**Symptom analysis:**

| Symptom | Possible PSU Cause | Possible Cooling Cause |
|---------|-------------------|----------------------|
| System won't turn on at all | | |
| Turns on briefly, then off | | |
| Random shutdowns under load | | |
| Random shutdowns at idle | | |
| System unstable/crashes | | |
| Burning smell | | |
| Loud buzzing/clicking | | |
| High-pitched whine (coil whine) | | |

**PSU testing methods:**

| Method | How To | What It Tests |
|--------|--------|---------------|
| Paperclip test | | |
| Multimeter test | | |
| PSU tester device | | |
| Swap with known good PSU | | |

**Cooling diagnostic steps:**

| Check | How to Verify | Normal vs Problem |
|-------|---------------|-------------------|
| Fan spinning | | |
| CPU temperature | | |
| Thermal paste condition | | |
| Heatsink mounting | | |
| Dust buildup | | |
| Airflow direction | | |

---

#### Activity K: Power and Cooling Best Practices

**Goal:** Compile installation best practices.

**PSU installation checklist:**

| Step | Details | Why Important |
|------|---------|---------------|
| 1. Verify wattage | | |
| 2. Check form factor | | |
| 3. Orient fan correctly | | |
| 4. Connect 24-pin ATX | | |
| 5. Connect CPU power | | |
| 6. Connect GPU power | | |
| 7. Connect SATA/peripherals | | |
| 8. Cable management | | |
| 9. Test before closing | | |

**Cooler installation checklist:**

| Step | Details | Why Important |
|------|---------|---------------|
| 1. Check socket compatibility | | |
| 2. Install backplate (if needed) | | |
| 3. Clean CPU surface | | |
| 4. Apply thermal paste | | |
| 5. Mount cooler | | |
| 6. Connect fan header | | |
| 7. Check RAM clearance | | |
| 8. Verify mounting pressure | | |

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to a PC you can open** - Get permission first!

---

#### Activity L: Identify Your PSU

**Goal:** Document your system's power supply.

**⚠️ SAFETY: Never open a PSU! Capacitors hold lethal charge even when unplugged.**

**External PSU inspection (without opening case):**

Look at the label (visible from outside or inside case):

| Specification | Your PSU |
|---------------|----------|
| Manufacturer | |
| Model number | |
| Total wattage | |
| +12V rail(s) amps | |
| +5V rail amps | |
| +3.3V rail amps | |
| 80 PLUS rating | |
| Form factor | |
| Fan size | |
| Modular type | |

**Connector inventory:**

With case open, count available connectors:

| Connector Type | Quantity | In Use |
|----------------|----------|--------|
| 24-pin ATX | | |
| 8-pin EPS (CPU) | | |
| PCIe 8-pin (6+2) | | |
| PCIe 6-pin | | |
| SATA | | |
| Molex | | |

**Is your PSU adequate for the system?**

Calculate your system's approximate draw:

| Component | Estimated TDP |
|-----------|---------------|
| CPU | W |
| GPU | W |
| Other | W |
| **Total** | W |

PSU wattage: _______ W

Is there adequate headroom (20%+)? [ ] Yes [ ] No

---

#### Activity M: Cooling System Documentation

**Goal:** Document your system's cooling configuration.

**CPU cooling:**

| Aspect | Your System |
|--------|-------------|
| Cooler type | [ ] Stock [ ] Tower [ ] AIO [ ] Custom |
| Cooler brand/model | |
| Fan size | |
| Fan count | |
| Radiator size (if AIO) | |
| Radiator location (if AIO) | |

**Case cooling:**

| Location | Fan Size | Intake/Exhaust | Speed Control |
|----------|----------|----------------|---------------|
| Front 1 | | | |
| Front 2 | | | |
| Front 3 | | | |
| Rear | | | |
| Top 1 | | | |
| Top 2 | | | |
| Bottom | | | |

**Cooling assessment:**

| Check | Status |
|-------|--------|
| Total intake fans | |
| Total exhaust fans | |
| Pressure type | [ ] Positive [ ] Negative [ ] Balanced |
| Dust filters present | [ ] Yes [ ] No |
| Dust buildup visible | [ ] Clean [ ] Moderate [ ] Heavy |
| Cable management affecting airflow | [ ] Good [ ] Blocking airflow |

**Temperature check:**

Use HWiNFO, Core Temp, or similar:

| Reading | Idle | Under Load |
|---------|------|------------|
| CPU temp | °C | °C |
| GPU temp | °C | °C |

Are temperatures acceptable? (CPU <85°C, GPU <85°C under load)

[ ] Yes [ ] No - needs improvement

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer's new RTX 4080 causes random shutdowns during gaming. Their PSU is a 550W unit that came with a prebuilt PC. What's likely wrong and what do you recommend?**

2. **A user reports their CPU is thermal throttling, hitting 100°C under load. The cooler is a stock Intel cooler. What steps would you take to diagnose and fix this?**

3. **A customer wants to upgrade from a GTX 1060 to an RTX 4070. Their current PSU is a 500W 80+ Bronze. Should they also upgrade the PSU? Explain your reasoning.**

4. **You're building a quiet PC for a home studio. The customer prioritizes silence over maximum performance. What cooling choices would you make?**

---

## What You Learned Today

- ✅ Understood PSU specifications and voltage rails
- ✅ Learned 80 PLUS efficiency ratings
- ✅ Identified all PSU connector types
- ✅ Calculated power requirements for builds
- ✅ Explored PSU form factors
- ✅ Compared cooling methods (air, AIO, custom)
- ✅ Understood thermal paste application
- ✅ Learned fan specifications and selection
- ✅ Matched coolers to CPU requirements
- ✅ Practiced troubleshooting power and cooling issues
- ✅ (Tier 2) Documented real PSU and cooling systems

**Next Lab:** Motherboards - Components and Features - exploring motherboard architecture and connections.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║                    PSU QUICK REFERENCE                         ║
╠═══════════════════════════════════════════════════════════════╣
║  VOLTAGE RAILS:                                                ║
║  +12V  - CPU, GPU, fans (MOST IMPORTANT)                      ║
║  +5V   - USB, SATA drives, some logic                         ║
║  +3.3V - RAM, chipset, some components                        ║
╠═══════════════════════════════════════════════════════════════╣
║  CONNECTORS:                                                   ║
║  24-pin ATX    - Main motherboard power                       ║
║  8-pin EPS     - CPU power (4+4 or 8-pin)                     ║
║  PCIe 8-pin    - GPU power (6+2 or 8-pin)                     ║
║  SATA          - Storage drives                                ║
║  Molex         - Legacy devices, fans                          ║
╠═══════════════════════════════════════════════════════════════╣
║  80 PLUS RATINGS (at 50% load):                               ║
║  White: 80%  |  Bronze: 85%  |  Silver: 88%                   ║
║  Gold: 90%   |  Platinum: 92%  |  Titanium: 94%               ║
╠═══════════════════════════════════════════════════════════════╣
║  PSU SIZING: Total component TDP + 20% headroom               ║
╠═══════════════════════════════════════════════════════════════╣
║  SAFE CPU TEMPS: <85°C under load (throttling ~100°C)         ║
║  SAFE GPU TEMPS: <85°C under load                             ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 17: Power Supplies and Cooling*