# Lab 16: PC Form Factors and Cases - Solution Guide

**Note to Students:** Review this AFTER completing your own observations and research!

---

## Section 1: Concept Check - Answers

**1. What are the three main desktop motherboard form factors, and how do they differ in size?**

**Answer:**

| Form Factor | Dimensions | Expansion Slots | Best For |
|-------------|------------|-----------------|----------|
| **ATX** | 12" × 9.6" (305 × 244 mm) | 7 slots | Full-size desktops, gaming, workstations |
| **Micro-ATX** | 9.6" × 9.6" (244 × 244 mm) | 4 slots | Budget builds, smaller desktops |
| **Mini-ITX** | 6.7" × 6.7" (170 × 170 mm) | 1 slot | Small form factor, HTPCs |

**Key differences:**

| Feature | ATX | Micro-ATX | Mini-ITX |
|---------|-----|-----------|----------|
| RAM slots | 4-8 | 2-4 | 2 |
| PCIe x16 slots | 2-3 | 1-2 | 1 |
| M.2 slots | 2-4 | 1-2 | 1-2 |
| Power phases | More | Moderate | Fewer |
| Price range | $$ - $$$$ | $ - $$$ | $$ - $$$ |

---

**2. Explain why airflow direction matters in a PC case, and describe the typical airflow pattern.**

**Answer:**

**Why direction matters:**

1. **Heat rises** - Hot air naturally moves upward
2. **Component layout** - CPU and GPU generate most heat in specific locations
3. **Dust management** - Controlled airflow allows effective filtering
4. **Efficiency** - Working with physics, not against it

**Typical airflow pattern:**

```
         ↑ [TOP EXHAUST - Optional]
         ↑
    +----↑----+
    |  [CPU]  | → [REAR EXHAUST]
    |    ↑    |
    |  [GPU]  |
    |    ↑    |
    +----↑----+
         ↑
    [FRONT INTAKE]
```

**Standard configuration:**
- **Intake:** Front and bottom (cool air enters)
- **Exhaust:** Rear and top (hot air exits)
- **Flow:** Front-to-back, bottom-to-top

**Why this works:**
- Fresh cool air hits components first
- Heat naturally rises toward top/rear exhausts
- Creates consistent airflow across all components
- Dust filters at intake points catch particles

---

**3. What is the purpose of front panel connectors, and why are they often the trickiest part of a build?**

**Answer:**

**Purpose:**

Front panel connectors link the case's buttons, LEDs, and ports to the motherboard:

| Connector | Function |
|-----------|----------|
| Power SW | Power button signal |
| Reset SW | Reset button signal |
| Power LED | System on indicator |
| HDD LED | Storage activity indicator |
| Speaker | POST beep codes |
| USB headers | Front USB ports |
| HD Audio | Front headphone/mic jacks |

**Why they're tricky:**

1. **Tiny connectors** - Small 1-2 pin connectors are hard to handle
2. **No standardized layout** - Each motherboard arranges pins differently
3. **Polarity matters (LEDs)** - Positive/negative must be correct for LEDs
4. **Poor labeling** - Case cables often have tiny, hard-to-read labels
5. **Cramped space** - Header is often in a corner, hard to reach
6. **Multiple connectors** - 6-8 separate tiny cables to connect
7. **Manual required** - Must reference motherboard manual for pinout

**Tips:**
- Use motherboard manual diagram
- Connect before installing motherboard (easier access)
- Use a flashlight
- LEDs won't damage if reversed, just won't light
- Switches work regardless of polarity

---

**4. A customer needs a powerful gaming PC but has limited desk space. Which form factor would you recommend and why?**

**Answer:**

**Recommendation: Micro-ATX**

| Why Micro-ATX | Explanation |
|---------------|-------------|
| Size | Significantly smaller than ATX, saves desk space |
| GPU support | Still fits full-size graphics cards |
| Cooling | Room for adequate cooling (better than Mini-ITX) |
| Expandability | 4 slots allows GPU + extras |
| Cost | Cases and motherboards are often cheaper than ATX |
| Compatibility | Supports same CPUs and RAM as ATX |

**Why not Mini-ITX:**
- Only 1 expansion slot limits future upgrades
- Cramped building experience
- Cooling can be challenging with high-end components
- Often more expensive (premium small components)

**Why not ATX:**
- Larger footprint defeats the purpose
- Overkill if not using multiple expansion cards

**Micro-ATX sweet spot:**
- 90% of ATX capability
- ~70% of the size
- Full-size GPU compatibility
- Room for a CPU tower cooler
- Adequate airflow

---

**5. What are the differences between a 5.25", 3.5", and 2.5" drive bay, and what goes in each?**

**Answer:**

| Bay Size | Dimensions | Primary Use | Status |
|----------|------------|-------------|--------|
| **5.25"** | 5.75" × 1.63" × 8" | Optical drives (DVD/Blu-ray) | Disappearing |
| **3.5" external** | 4" × 1" × 5.75" | Card readers, fan controllers | Rare |
| **3.5" internal** | 4" × 1" × 5.75" | Hard disk drives (HDDs) | Still common |
| **2.5"** | 2.75" × 0.37" × 4" | SSDs, laptop HDDs | Very common |

**What goes where:**

| Device | Bay Size | Notes |
|--------|----------|-------|
| DVD/Blu-ray drive | 5.25" | Becoming rare |
| Desktop HDD | 3.5" | Standard mechanical drives |
| 2.5" SSD | 2.5" (or adapter to 3.5") | SATA SSDs |
| Laptop HDD | 2.5" | Sometimes used in desktops |
| M.2 SSD | N/A - mounts to motherboard | No bay needed |
| NVMe drive | N/A - mounts to motherboard | No bay needed |

**Modern trends:**
- Cases dropping 5.25" bays entirely
- Fewer 3.5" bays (2-4 instead of 6-8)
- More 2.5" mounts
- SSD mounts behind motherboard tray
- M.2 slots on motherboard replacing SATA SSDs

---

## Section 2: Activity Solutions

### Activity B: Form Factor Comparison - Complete

| Specification | ATX | Micro-ATX | Mini-ITX |
|---------------|-----|-----------|----------|
| Dimensions (inches) | 12 × 9.6 | 9.6 × 9.6 | 6.7 × 6.7 |
| Dimensions (mm) | 305 × 244 | 244 × 244 | 170 × 170 |
| Max RAM slots | 4-8 | 2-4 | 2 |
| Max PCIe x16 slots | 2-3 | 1-2 | 1 |
| Typical expansion slots | 7 | 4 | 1 |
| Use case | Gaming, workstation, server | Budget, general use | HTPC, SFF builds |

**Mounting holes:**

| Form Factor | Mounting Holes | Notes |
|-------------|----------------|-------|
| ATX | 9 | Standard pattern |
| Micro-ATX | 6-8 | Subset of ATX pattern |
| Mini-ITX | 4 | Different pattern |

**Compatibility:**

- **Micro-ATX in ATX case:** YES - Uses subset of same mounting holes
- **ATX in Micro-ATX case:** NO - Too large, won't fit
- **Mini-ITX in ATX case:** YES - With proper standoff placement

**Rule:** Smaller boards fit in larger cases, not vice versa.

---

### Activity C: Case Components Reference

**External components:**

| Component | Purpose |
|-----------|---------|
| Power button | Send power-on signal to motherboard |
| Reset button | Hard restart without power cycle |
| Power LED | Indicates system is on |
| HDD LED | Shows storage activity |
| USB ports | Front device connectivity |
| Audio jacks | Headphones/microphone |
| 5.25" bay covers | Cover unused optical bays |
| Expansion slot covers | Cover unused PCIe slots |
| Ventilation grills | Airflow for fans |
| Thumbscrews | Tool-less panel removal |

**Internal components:**

| Component | Purpose |
|-----------|---------|
| Motherboard tray | Flat mounting surface for motherboard |
| Standoffs | Elevate motherboard, prevent shorts |
| Drive cages | Mount and organize storage drives |
| Cable management holes | Route cables behind motherboard tray |
| PSU mount | Secure power supply (usually bottom-rear) |
| Fan mounts | Attach case fans at various positions |
| I/O shield cutout | Opening for motherboard's rear ports |
| Front panel cables | Connect case buttons/ports to motherboard |

---

### Activity D: Drive Bays Reference

| Bay Size | Dimensions | Use | Common Today? |
|----------|------------|-----|---------------|
| 5.25" | 5.75" × 1.63" | Optical drives, reservoirs | Declining |
| 3.5" external | 4" × 1" | Card readers, fan controllers | Rare |
| 3.5" internal | 4" × 1" | Desktop HDDs | Yes |
| 2.5" | 2.75" × 0.37" | SSDs, laptop drives | Yes |

**Why 5.25" bays are disappearing:**
- Digital downloads replaced physical media
- Streaming replaced DVDs/Blu-rays
- USB drives replaced burning discs
- Cases prioritize airflow over optical drives

**Replacing traditional bays:**
- M.2 slots on motherboard (NVMe SSDs)
- SSD mounts behind motherboard tray
- Tool-less drive sleds
- Removable drive cages

---

### Activity E: Airflow Reference

**Pressure types:**

| Type | Configuration | Dust | Temps | Best For |
|------|---------------|------|-------|----------|
| Positive | More intake than exhaust | Less (filtered air in) | Slightly higher | Most builds |
| Negative | More exhaust than intake | More (unfiltered air pulled in through gaps) | Slightly lower | Not recommended |
| Balanced | Equal intake/exhaust | Moderate | Moderate | Neutral option |

**Recommended: Positive pressure**

Why:
- Air enters through filtered intakes
- Slight outward pressure prevents dust entering through gaps
- Small temperature increase is acceptable trade-off
- Easier to maintain (clean filters periodically)

**3-fan configuration example:**

| Location | Direction | Why |
|----------|-----------|-----|
| Front bottom | Intake | Fresh cool air enters low |
| Front top | Intake | Maximizes intake volume |
| Rear | Exhaust | Removes hot air from CPU area |

Result: 2 intake, 1 exhaust = Positive pressure ✓

---

### Activity F: Front Panel Connectors Reference

| Connector | Pins | Function | Polarity |
|-----------|------|----------|----------|
| Power SW | 2 | Momentary switch, turns on/off PC | No |
| Reset SW | 2 | Momentary switch, restarts PC | No |
| Power LED | 2 (+ and -) | Lights when system is on | Yes |
| HDD LED | 2 (+ and -) | Blinks during storage access | Yes |
| Speaker | 4 | POST beep codes | Yes |

**Why challenging:**

1. Small individual connectors (1-2 pins each)
2. Each motherboard has different pinout
3. Labels on cables are tiny and hard to read
4. Polarity must be correct for LEDs
5. Header is usually in awkward corner location
6. Must reference manual every time

**Connection tips:**

1. Check motherboard manual for exact pinout diagram
2. Connect before installing motherboard in case (easier access)
3. Switches work either direction; only LEDs need correct polarity
4. If LED doesn't work, flip it 180° and try again
5. Use tweezers or needle-nose pliers for small connectors
6. Many motherboards include a front panel adapter block

---

### Activity G: PSU Placement Reference

| Position | Fan Direction | Pros | Cons |
|----------|---------------|------|------|
| Bottom (fan down) | Draws from under case | Independent cooling, doesn't add heat to case | Needs clearance, dust from floor |
| Bottom (fan up) | Draws from inside case | Works on carpet | Adds case heat, competes with GPU |
| Top (old style) | Draws from inside case | Traditional, easy cable reach | Hot air rises into PSU, poor for thermals |

**Modern standard:** Bottom mount, fan facing down

Requirements:
- Case must have bottom ventilation
- Clearance from floor/surface
- Dust filter underneath (recommended)

**Cable management:**
- Modular PSUs: Only connect needed cables
- Route cables behind motherboard tray
- Use cable management holes
- Velcro straps or zip ties to organize

---

### Activity H: Expansion Slots Reference

| Form Factor | PCIe x16 | PCIe x4/x1 | Total | Notes |
|-------------|----------|------------|-------|-------|
| ATX | 2-3 | 3-4 | 7 | Best expandability |
| Micro-ATX | 1-2 | 2-3 | 4 | Good balance |
| Mini-ITX | 1 | 0 | 1 | GPU only typically |

**Common expansion cards:**

| Card Type | Slot Used |
|-----------|-----------|
| Graphics card (GPU) | PCIe x16 |
| Sound card | PCIe x1 |
| Network card (10GbE) | PCIe x4 |
| Wi-Fi card | PCIe x1 |
| Capture card | PCIe x4 |
| USB expansion | PCIe x1 |
| SATA controller | PCIe x4 |
| NVMe adapter | PCIe x4 |

**Multi-GPU (SLI/CrossFire):**
- Requires 2+ PCIe x16 slots
- ATX supports this well
- Micro-ATX: Limited (usually x16 + x4)
- Mini-ITX: Not possible

---

### Activity I: Case Selection Scenarios - Complete

**Scenario 1: Home Office PC**

| Aspect | Recommendation | Reasoning |
|--------|----------------|-----------|
| Form factor | Micro-ATX | Smaller footprint, sufficient features |
| Case style | Mini tower | Compact but adequate cooling |
| Key features | Dust filters, quiet fans, USB-C front | Reliability, low noise |
| Budget option | Thermaltake Versa H18, Cooler Master Q300L | Quality budget mATX cases |

**Scenario 2: Gaming PC**

| Aspect | Recommendation | Reasoning |
|--------|----------------|-----------|
| Form factor | ATX | Room for large GPU, good airflow |
| Case style | Mid tower | Balance of space and desk footprint |
| Key features | Tempered glass, RGB, 3+ fan mounts, GPU clearance 320mm+ | Aesthetics, cooling, fit high-end GPU |
| Examples | Corsair 4000D, Lian Li Lancool II, NZXT H510 | Popular gaming cases |

**Scenario 3: Living Room HTPC**

| Aspect | Recommendation | Reasoning |
|--------|----------------|-----------|
| Form factor | Mini-ITX | Smallest size |
| Case style | HTPC case (horizontal) | Fits in entertainment center |
| Key features | Low profile, quiet cooling, HDMI output, IR receiver support | Living room appropriate |
| Examples | Silverstone ML08, Node 202, InWin Chopin | HTPC-focused cases |

**Scenario 4: Workstation/NAS**

| Aspect | Recommendation | Reasoning |
|--------|----------------|-----------|
| Form factor | ATX or E-ATX | Maximum expandability |
| Case style | Full tower | Room for many drives, cards |
| Key features | 6+ drive bays, good airflow, expansion slots, quality build | Storage capacity, reliability |
| Examples | Fractal Design Define 7, Corsair 750D, Be Quiet Dark Base | Workstation-class cases |

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Micro-ATX Customer Wants SLI/CrossFire

**What to tell them:**

"Micro-ATX systems typically don't support multi-GPU configurations. Here's why:

1. **Physical limitation:** Most mATX boards have only one x16 slot, or one x16 and one x4
2. **SLI/CrossFire requires:** Two x16 slots (or x16 + x8 minimum)
3. **Bandwidth:** Second slot often runs at reduced speed

**Options:**
- Upgrade to ATX motherboard and case (significant rebuild)
- Sell current GPU, buy single more powerful GPU
- Accept that multi-GPU isn't possible with current setup

**Reality check:** Multi-GPU is declining anyway. Modern single GPUs are powerful enough for most uses, and game support for SLI/CrossFire is poor. A single RTX 4070 beats two older cards in most games."

---

### Scenario 2: PC Powers On But No Display, Power LED Off

**Analysis:**

The power LED not lighting is a **symptom**, not the cause of no display.

| Observation | What It Tells Us |
|-------------|------------------|
| Fans spin | Motherboard getting power |
| No display | Could be GPU, RAM, CPU, or connection issue |
| Power LED off | Front panel connector issue (cosmetic) |

**The power LED issue:**
- Does NOT affect system operation
- Only affects the indicator light
- Either wrong polarity or disconnected

**The actual display problem:**
- Check monitor connection and power
- Check GPU is fully seated
- Check RAM is fully seated
- Listen for POST beeps
- Check CPU power connector (4/8-pin)

**Fixing the LED:**
- Check Power LED connector on motherboard header
- Flip connector 180° if polarity is wrong
- Reference motherboard manual for correct pins

---

### Scenario 3: Only Rear Exhaust Fan, Customer Asks About Front Intake

**Recommendation: Yes, buy the front fans.**

| Reason | Explanation |
|--------|-------------|
| Airflow | One exhaust creates negative pressure, pulling unfiltered air through gaps |
| Cooling | No direct cool air flow over components |
| Dust | Negative pressure = more dust accumulation |
| Component temps | CPU and GPU will run hotter |
| Noise | Existing fan may ramp up higher to compensate |

**Cost-benefit:**
- Two decent fans: ~$20-40
- Improved temperatures: 5-15°C reduction
- Less dust buildup
- Longer component lifespan
- Quieter operation (fans don't need to work as hard)

**Recommended configuration:**
- 2 front intake fans
- 1 rear exhaust fan
- Result: Positive pressure, good airflow

---

### Scenario 4: All Fans Set as Exhaust

**Problem:** Severe negative pressure

**Effects:**
- No cool air intake
- Air pulled through every gap and crack (unfiltered)
- Massive dust accumulation
- Very poor cooling (hot air recycling)
- Components overheating

**Fix:**

1. Identify front/bottom fans
2. Reverse them to intake (flip fan or remount)
3. Keep rear/top as exhaust
4. Verify airflow direction (paper test or feel with hand)

**Verification:**
- Hold tissue near front = should be pulled in
- Hold tissue near rear = should be pushed out
- Check temps after fix (should drop significantly)

**Proper configuration:**
```
BEFORE (Wrong):          AFTER (Correct):
← ← [PC] ← ←            → → [PC] ← ←
All exhaust              Intake → Exhaust
```

---

## Key Takeaways

**For the A+ Exam:**

1. **Form factors (memorize sizes):**
   - ATX: 12" × 9.6"
   - Micro-ATX: 9.6" × 9.6"
   - Mini-ITX: 6.7" × 6.7"

2. **Compatibility:** Smaller boards fit larger cases, not vice versa

3. **Airflow:**
   - Intake: Front, bottom
   - Exhaust: Rear, top
   - Positive pressure = less dust

4. **Drive bays:**
   - 5.25" = optical drives
   - 3.5" = HDDs
   - 2.5" = SSDs

5. **Front panel:**
   - LEDs have polarity
   - Switches don't have polarity
   - Always check motherboard manual

**For Real-World Skills:**

- Plan builds around form factor constraints
- Consider airflow in every build
- Cable management improves thermals and aesthetics
- Front panel connectors require patience and good lighting
- Match case features to use case (not just aesthetics)

---

**Congratulations on completing Lab 16!**

Understanding form factors and case design is fundamental to building and upgrading PCs. This knowledge applies to every system you'll work with.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 16: PC Form Factors and Cases - Solution Guide*