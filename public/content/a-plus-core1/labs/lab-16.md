# Lab 16: PC Form Factors and Cases

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 30-35 minutes
**Exam Objectives:** 3.4 - Given a scenario, install and configure motherboards, central processing units (CPUs), and add-on cards

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the three main desktop motherboard form factors, and how do they differ in size?**

2. **Explain why airflow direction matters in a PC case, and describe the typical airflow pattern.**

3. **What is the purpose of front panel connectors, and why are they often the trickiest part of a build?**

4. **A customer needs a powerful gaming PC but has limited desk space. Which form factor would you recommend and why?**

5. **What are the differences between a 5.25", 3.5", and 2.5" drive bay, and what goes in each?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses observation and research** - Learn form factors without opening a computer.

---

#### Activity A: Identify Your Computer's Form Factor

**Goal:** Determine what type of case and motherboard you have.

**If you have a desktop PC, observe externally:**

| Observation | Your PC |
|-------------|---------|
| Case height (approximate) | |
| Case width (approximate) | |
| Case depth (approximate) | |
| Number of external drive bays | |
| Number of expansion slot covers (back) | |
| Front USB ports | |
| Front audio jacks | |
| Power button location | |
| Case style | [ ] Tower [ ] Desktop [ ] SFF [ ] All-in-One |

**Based on size, estimate the form factor:**

| Form Factor | Typical Tower Height | Expansion Slots |
|-------------|---------------------|-----------------|
| Full ATX | 20-24 inches | 7 |
| Micro-ATX | 14-18 inches | 4 |
| Mini-ITX | 8-14 inches | 1 |

**Your estimated form factor:** _______________

**If you have a laptop or all-in-one:**

Document what you can observe:

| Feature | Your Device |
|---------|-------------|
| Screen size | |
| Approximate thickness | |
| External ports visible | |
| Ventilation locations | |
| Upgradeable? | [ ] Yes [ ] No [ ] Unknown |

---

#### Activity B: Motherboard Form Factor Comparison

**Goal:** Understand the specifications of each form factor.

**Complete this comparison table:**

| Specification | ATX | Micro-ATX | Mini-ITX |
|---------------|-----|-----------|----------|
| Dimensions (inches) | | | |
| Dimensions (mm) | | | |
| Max RAM slots | | | |
| Max PCIe x16 slots | | | |
| Typical expansion slots | | | |
| Use case | | | |

**Mounting holes:**

| Form Factor | Number of Mounting Holes | Pattern |
|-------------|-------------------------|---------|
| ATX | | |
| Micro-ATX | | |
| Mini-ITX | | |

**Compatibility question:**

Can a Micro-ATX motherboard fit in a full ATX case? _______

Can an ATX motherboard fit in a Micro-ATX case? _______

Why?

_________________________________________________________________

---

#### Activity C: Case Components Identification

**Goal:** Learn all the parts of a PC case.

**External components:**

| Component | Purpose | Location on Typical Case |
|-----------|---------|-------------------------|
| Power button | | |
| Reset button | | |
| Power LED | | |
| HDD activity LED | | |
| USB ports (front) | | |
| Audio jacks (front) | | |
| 5.25" bay covers | | |
| Expansion slot covers | | |
| Ventilation grills | | |
| Thumbscrews | | |

**Internal components (research or observe):**

| Component | Purpose |
|-----------|---------|
| Motherboard tray | |
| Standoffs | |
| Drive cages/bays | |
| Cable management holes | |
| PSU mount | |
| Fan mounts | |
| I/O shield cutout | |
| Front panel header cables | |

**Draw or describe a typical case layout:**

```
+---------------------------+
|   [TOP]                   |
|   Fans/Radiator mount     |
+---------------------------+
|   [FRONT]    |  [SIDE]    |
|   Fans       |  Window/   |
|   Drive bays |  Panel     |
|              |            |
+---------------------------+
|   [BOTTOM]                |
|   PSU mount, feet         |
+---------------------------+
```

Your case layout notes:

_________________________________________________________________

---

#### Activity D: Drive Bay Types

**Goal:** Understand different drive bay sizes and uses.

**Drive bay specifications:**

| Bay Size | Dimensions | Typical Use | Still Common? |
|----------|------------|-------------|---------------|
| 5.25" | | | |
| 3.5" external | | | |
| 3.5" internal | | | |
| 2.5" | | | |

**Modern case trends:**

Why are 5.25" bays disappearing from cases?

_________________________________________________________________

What's replacing traditional drive bays in modern cases?

_________________________________________________________________

**Drive mounting options:**

| Mounting Method | Description | Pros/Cons |
|-----------------|-------------|-----------|
| Tool-less trays | | |
| Screw mount | | |
| Drive caddies | | |
| SSD brackets | | |
| M.2 slots | | |

---

#### Activity E: Airflow Principles

**Goal:** Understand proper case airflow.

**Basic airflow rule:**

Cool air IN from: _______________

Hot air OUT from: _______________

**Typical airflow pattern:**

```
        [EXHAUST - REAR FAN]
              ↑
    +---------+----------+
    |         ↑          |
    |    [CPU COOLER]    |
    |         ↑          |
    |    [GPU]           | ← [EXHAUST - TOP FANS]
    |         ↑          |
    |         ↑          |
    +---------+----------+
              ↑
        [INTAKE - FRONT FANS]
```

**Positive vs Negative pressure:**

| Pressure Type | More Intake or Exhaust? | Dust Behavior | Best For |
|---------------|------------------------|---------------|----------|
| Positive | | | |
| Negative | | | |
| Balanced | | | |

**Which is generally recommended for most builds?** _______________

Why?

_________________________________________________________________

**Fan placement exercise:**

If a case has 3 fan slots (2 front, 1 rear), how would you configure them?

| Location | Intake or Exhaust? | Why? |
|----------|-------------------|------|
| Front bottom | | |
| Front top | | |
| Rear | | |

---

#### Activity F: Front Panel Connectors

**Goal:** Understand the trickiest part of PC building.

**Front panel connector types:**

| Connector | Pins | Purpose | Polarity Matters? |
|-----------|------|---------|-------------------|
| Power SW | | | |
| Reset SW | | | |
| Power LED | | | |
| HDD LED | | | |
| Speaker | | | |

**Why front panel connectors are challenging:**

1. _______________________
2. _______________________
3. _______________________

**Typical motherboard header layout:**

```
Front Panel Header (9-pin typical):
+---+---+---+---+---+
|   | + | - |   |   |  ← Power LED, HDD LED
+---+---+---+---+---+
|   |PWR|RST|   |   |  ← Power Switch, Reset Switch
+---+---+---+---+---+
```

**Tips for connecting front panel:**

1. _______________________
2. _______________________
3. _______________________

---

#### Activity G: PSU Placement and Considerations

**Goal:** Understand power supply mounting options.

**PSU mounting positions:**

| Position | Airflow Direction | Pros | Cons |
|----------|-------------------|------|------|
| Bottom (fan down) | | | |
| Bottom (fan up) | | | |
| Top (traditional) | | | |

**Modern cases typically mount PSU:** _______________

**PSU clearance considerations:**

| Factor | Why It Matters |
|--------|----------------|
| Cable length | |
| Modular vs non-modular | |
| PSU depth | |
| Bottom clearance for intake | |

**Cable management with PSU:**

Where do cables typically route in a modern case?

_________________________________________________________________

---

#### Activity H: Expansion Slot Analysis

**Goal:** Understand expansion capabilities by form factor.

**Expansion slots by form factor:**

| Form Factor | Full-length PCIe x16 | Other PCIe | Total Slots |
|-------------|---------------------|------------|-------------|
| ATX | | | |
| Micro-ATX | | | |
| Mini-ITX | | | |

**What typically goes in expansion slots?**

| Slot Type | Common Cards |
|-----------|--------------|
| PCIe x16 | |
| PCIe x4 | |
| PCIe x1 | |

**Multi-GPU considerations:**

Why does ATX support multi-GPU better than smaller form factors?

_________________________________________________________________

---

#### Activity I: Case Selection Scenarios

**Goal:** Practice recommending appropriate cases.

**Scenario 1: Home Office PC**

Requirements:
- Basic productivity
- Quiet operation
- Small footprint
- Budget: $50-80 case

| Recommendation | Why |
|----------------|-----|
| Form factor: | |
| Case style: | |
| Key features needed: | |

**Scenario 2: Gaming PC**

Requirements:
- High-end GPU (3-slot)
- Good airflow
- RGB lighting
- Room for future upgrades

| Recommendation | Why |
|----------------|-----|
| Form factor: | |
| Case style: | |
| Key features needed: | |

**Scenario 3: Living Room HTPC**

Requirements:
- Small and quiet
- Fits in entertainment center
- Horizontal orientation OK
- Minimal components

| Recommendation | Why |
|----------------|-----|
| Form factor: | |
| Case style: | |
| Key features needed: | |

**Scenario 4: Workstation**

Requirements:
- Multiple drives (NAS use)
- Good cooling for sustained loads
- Multiple expansion cards
- Maximum expandability

| Recommendation | Why |
|----------------|-----|
| Form factor: | |
| Case style: | |
| Key features needed: | |

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to a desktop PC you can open** - Get permission first!

---

#### Activity J: Internal Case Inspection

**Goal:** Document the inside of a real PC case.

**⚠️ Safety first:**
- Power off and unplug the computer
- Touch the case to discharge static
- Work on a non-carpeted surface
- Don't force anything

**Open the case and document:**

| Component | Present? | Notes |
|-----------|----------|-------|
| Motherboard | [ ] Yes [ ] No | Size: |
| CPU cooler | [ ] Yes [ ] No | Type: |
| RAM sticks | [ ] Yes [ ] No | Count: |
| Graphics card | [ ] Yes [ ] No | Size: |
| Storage drives | [ ] Yes [ ] No | Types: |
| PSU | [ ] Yes [ ] No | Position: |
| Case fans | [ ] Yes [ ] No | Count: |
| Front panel cables | [ ] Yes [ ] No | |

**Measure or estimate:**

| Measurement | Value |
|-------------|-------|
| Motherboard approximate size | |
| CPU cooler height | |
| GPU length | |
| Available drive bays | |
| Fan sizes installed | |

**Cable management assessment:**

| Rating | Description |
|--------|-------------|
| [ ] Excellent | Cables hidden, routed behind motherboard tray |
| [ ] Good | Most cables organized, some visible |
| [ ] Fair | Cables bundled but visible |
| [ ] Poor | Cables everywhere, blocking airflow |

How could cable management be improved?

_________________________________________________________________

---

#### Activity K: Airflow Analysis

**Goal:** Evaluate actual airflow in a system.

**With the case open, identify:**

| Fan Location | Size | Direction | RPM (if visible) |
|--------------|------|-----------|------------------|
| Front 1 | | [ ] In [ ] Out | |
| Front 2 | | [ ] In [ ] Out | |
| Rear | | [ ] In [ ] Out | |
| Top 1 | | [ ] In [ ] Out | |
| Top 2 | | [ ] In [ ] Out | |
| Bottom | | [ ] In [ ] Out | |
| CPU cooler | | N/A | |
| GPU | | N/A | |

**How to tell fan direction:**

- Look for arrow on fan frame
- Fan blades "scoop" air toward the direction of flow
- Sticker side typically faces direction air exits

**Airflow assessment:**

| Question | Answer |
|----------|--------|
| Total intake fans | |
| Total exhaust fans | |
| Pressure type | [ ] Positive [ ] Negative [ ] Balanced |
| Any dead spots? | |
| Dust filter locations | |

**Recommendations for improvement:**

_________________________________________________________________

---

#### Activity L: Front Panel Connector Tracing

**Goal:** Understand how front panel connects to motherboard.

**⚠️ Do not disconnect anything unless you're confident you can reconnect it.**

**Trace and document the front panel connections:**

| Cable | Color(s) | Connected To | Pin Location |
|-------|----------|--------------|--------------|
| Power SW | | | |
| Reset SW | | | |
| Power LED | | | |
| HDD LED | | | |
| USB 2.0 | | | |
| USB 3.0 | | | |
| HD Audio | | | |
| Speaker | | | |

**Motherboard manual reference:**

Find your motherboard's front panel pinout (search online if needed):

Motherboard model: _______________

Front panel header location: _______________

Sketch or describe the pinout:

_________________________________________________________________

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer brings in a Micro-ATX system and wants to add a second graphics card for SLI/CrossFire. What do you tell them?**

2. **A new PC build powers on but nothing displays. The power LED doesn't light up, but the fans spin. What front panel connection might be the issue, and does it affect the actual problem?**

3. **You're building a PC and the case only has one rear exhaust fan, but has mounts for two front fans. The customer asks if they really need to buy the front fans. What's your recommendation?**

4. **A customer's PC is overheating. You open the case and find all fans are set as exhaust. What's wrong and how do you fix it?**

---

## What You Learned Today

- ✅ Identified motherboard form factors (ATX, Micro-ATX, Mini-ITX)
- ✅ Understood case components and their purposes
- ✅ Learned drive bay types and modern trends
- ✅ Mastered airflow principles and pressure
- ✅ Understood front panel connector challenges
- ✅ Explored PSU mounting options
- ✅ Analyzed expansion slot differences
- ✅ Practiced case selection for different scenarios
- ✅ (Tier 2) Inspected real PC internals
- ✅ (Tier 2) Analyzed actual airflow configuration

**Next Lab:** Power Supplies and Cooling - understanding PSU specifications and thermal management.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║              MOTHERBOARD FORM FACTORS                          ║
╠═══════════════════════════════════════════════════════════════╣
║  ATX         12" x 9.6"    (305 x 244 mm)    7 slots          ║
║  Micro-ATX   9.6" x 9.6"   (244 x 244 mm)    4 slots          ║
║  Mini-ITX    6.7" x 6.7"   (170 x 170 mm)    1 slot           ║
╠═══════════════════════════════════════════════════════════════╣
║  COMPATIBILITY: Smaller boards fit larger cases                ║
║  ATX case → ATX, mATX, or Mini-ITX                            ║
║  mATX case → mATX or Mini-ITX only                            ║
║  Mini-ITX case → Mini-ITX only                                ║
╠═══════════════════════════════════════════════════════════════╣
║              AIRFLOW BASICS                                    ║
╠═══════════════════════════════════════════════════════════════╣
║  INTAKE: Front, Bottom (cool air in)                          ║
║  EXHAUST: Rear, Top (hot air out)                             ║
║  POSITIVE PRESSURE: More intake = less dust                    ║
╠═══════════════════════════════════════════════════════════════╣
║              DRIVE BAYS                                        ║
╠═══════════════════════════════════════════════════════════════╣
║  5.25" - Optical drives (becoming rare)                       ║
║  3.5"  - HDDs, card readers                                   ║
║  2.5"  - SSDs, laptop HDDs                                    ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 16: PC Form Factors and Cases*