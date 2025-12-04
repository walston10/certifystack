# Lab 17: Power Supplies and Cooling - Solution Guide

**Note to Students:** Review this AFTER completing your own research and calculations!

---

## Section 1: Concept Check - Answers

**1. What do the +12V, +5V, and +3.3V rails on a PSU power, and which is most important for modern systems?**

**Answer:**

| Rail | Voltage | Powers | Importance |
|------|---------|--------|------------|
| **+12V** | 12 volts | CPU, GPU, fans, motors (HDD/optical) | **MOST IMPORTANT** |
| +5V | 5 volts | USB ports, SATA drives, some logic circuits | Moderate |
| +3.3V | 3.3 volts | RAM, chipset, some motherboard components | Moderate |
| -12V | -12 volts | Legacy serial ports, some audio | Minimal (nearly unused) |
| +5VSB | 5V standby | Wake-on-LAN, USB charging when off | Always on |

**Why +12V is most important:**

Modern CPUs and GPUs are power-hungry components that run on 12V. A high-end system might draw:
- CPU: 125-253W from +12V
- GPU: 200-450W from +12V
- Everything else: 50-100W combined

**When evaluating a PSU, check the +12V rail capacity (amps), not just total wattage.**

Example: A "600W" PSU with only 30A on +12V = 360W available for CPU/GPU, despite the 600W rating.

---

**2. Explain the difference between a modular, semi-modular, and non-modular PSU, and when you'd choose each.**

**Answer:**

| Type | Description | Pros | Cons | Best For |
|------|-------------|------|------|----------|
| **Non-modular** | All cables permanently attached | Cheapest, reliable connections | Excess cables clutter case | Budget builds, hidden cases |
| **Semi-modular** | Essential cables attached, others removable | Good balance, cleaner than non-modular | Still some permanent cables | Most builds |
| **Fully modular** | All cables removable | Cleanest builds, use only what you need | Most expensive, potential for loose cables | Enthusiast, SFF builds |

**When to choose each:**

| Scenario | Recommended | Why |
|----------|-------------|-----|
| Budget PC | Non-modular | Cheapest option |
| Typical gaming PC | Semi-modular | Balance of cost and cable management |
| SFF/Mini-ITX build | Fully modular | Need custom length cables, minimal clutter |
| Show build (windowed case) | Fully modular | Best aesthetics |
| Server/workstation | Semi or non-modular | Reliability over aesthetics |

---

**3. A system randomly shuts down under heavy load but runs fine at idle. What PSU-related issue might cause this?**

**Answer:**

**Most likely causes:**

| Cause | Why It Causes Load Shutdowns |
|-------|------------------------------|
| **Insufficient wattage** | PSU can't deliver power demand under load |
| **Weak +12V rail** | CPU/GPU starved despite total wattage being "enough" |
| **Overheating PSU** | PSU thermal protection triggers under sustained load |
| **Failing capacitors** | Can't maintain voltage under load |
| **OCP triggering** | Over-current protection on a rail |

**Diagnostic steps:**

1. Calculate actual power requirements vs PSU capacity
2. Check +12V rail rating specifically
3. Monitor PSU temperatures (feel for excessive heat)
4. Check for dust blocking PSU fan
5. Listen for PSU fan spinning up/struggling
6. Test with a higher-wattage PSU

**Why it works at idle:**
- Idle: CPU uses 20-50W, GPU uses 10-30W
- Load: CPU uses 100-250W, GPU uses 200-450W
- PSU may provide enough for idle but fail under load

---

**4. What does the 80 PLUS certification mean, and why does efficiency matter?**

**Answer:**

**80 PLUS certification** means the PSU converts at least 80% of AC wall power to DC power for your components. The rest is lost as heat.

| Rating | 20% Load | 50% Load | 100% Load |
|--------|----------|----------|-----------|
| 80 PLUS (White) | 80% | 80% | 80% |
| Bronze | 82% | 85% | 82% |
| Silver | 85% | 88% | 85% |
| Gold | 87% | 90% | 87% |
| Platinum | 90% | 92% | 89% |
| Titanium | 92% | 94% | 90% |

**Why efficiency matters:**

| Factor | Impact |
|--------|--------|
| **Electricity cost** | Higher efficiency = lower electric bill |
| **Heat generation** | Less waste heat = cooler operation |
| **Fan noise** | Less heat = fan runs slower/quieter |
| **Component stress** | Cooler PSU = longer lifespan |
| **Environment** | Less wasted energy |

**Example calculation:**

System draws 400W:
- 80% efficient PSU: 400W ÷ 0.80 = 500W from wall (100W wasted as heat)
- 90% efficient PSU: 400W ÷ 0.90 = 444W from wall (44W wasted as heat)

Over a year of 8hrs/day use: ~$20-40 savings with Gold vs White rating.

---

**5. Describe the purpose of thermal paste and what happens if it's applied incorrectly (too much or too little).**

**Answer:**

**Purpose:**

Thermal paste (thermal interface material/TIM) fills microscopic gaps between the CPU and cooler surfaces. Even "flat" metal surfaces have tiny imperfections that trap air, and air is a poor thermal conductor.

| Without Paste | With Paste |
|---------------|------------|
| Air gaps trap heat | Gaps filled with conductive material |
| Poor heat transfer | Efficient heat transfer |
| CPU overheats | CPU stays cool |

**Application errors:**

| Error | Consequence |
|-------|-------------|
| **Too much** | Paste squeezes out sides, can drip onto motherboard, actually insulates (paste conducts worse than metal-to-metal contact) |
| **Too little** | Gaps remain unfilled, hot spots develop, poor cooling |
| **Air bubbles** | Act as insulators, cause uneven cooling and hot spots |
| **Not cleaning old paste** | Old dried paste prevents good contact |
| **Using wrong type** | Some pastes are electrically conductive - dangerous if it spreads |

**Correct amount:** About the size of a pea (3-4mm) in the center. Mounting pressure spreads it evenly.

**Signs of paste problems:**
- High idle temperatures (>50°C)
- Rapid temperature spikes
- Thermal throttling
- Uneven core temperatures (some cores much hotter)

---

## Section 2: Activity Solutions

### Activity A: PSU Specifications Reference

**Voltage rails:**

| Rail | Voltage | Primary Use | Modern Importance |
|------|---------|-------------|-------------------|
| +12V | 12V | CPU, GPU, fans, drive motors | Critical (90%+ of power) |
| +5V | 5V | USB, SATA logic, some circuits | Moderate |
| +3.3V | 3.3V | RAM, chipset, low-voltage logic | Moderate |
| -12V | -12V | Legacy serial ports | Minimal |
| +5VSB | 5V standby | Wake features, USB charging | Always present |

**Single vs Multi-rail:**

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| Single rail | All +12V power on one circuit | Full power available anywhere, simpler | Less protection per circuit |
| Multi-rail | +12V split into separate circuits | Better protection (OCP per rail) | Power limits per rail |

**Modern consumer PSUs:** Mostly single-rail (simpler for users)

---

### Activity B: 80 PLUS Efficiency - Complete

| Certification | 20% Load | 50% Load | 100% Load | Typical Use |
|---------------|----------|----------|-----------|-------------|
| 80 PLUS (White) | 80% | 80% | 80% | Budget builds |
| Bronze | 82% | 85% | 82% | Mainstream |
| Silver | 85% | 88% | 85% | Mid-range |
| Gold | 87% | 90% | 87% | Recommended standard |
| Platinum | 90% | 92% | 89% | Enthusiast |
| Titanium | 92% | 94% | 90% | Extreme efficiency |

**Cost calculation example:**

650W system, 8 hours/day, $0.12/kWh:

| Efficiency | Power Draw | Daily kWh | Monthly Cost |
|------------|------------|-----------|--------------|
| 80% | 650W ÷ 0.80 = 812.5W | 6.5 kWh | $23.40 |
| 87% | 650W ÷ 0.87 = 747W | 5.98 kWh | $21.53 |
| 90% | 650W ÷ 0.90 = 722W | 5.78 kWh | $20.81 |

Annual savings (Gold vs White): ~$31

---

### Activity C: PSU Connectors Reference

**Main power connectors:**

| Connector | Pins | Purpose | Voltage(s) |
|-----------|------|---------|------------|
| ATX Main | 24-pin (20+4) | Main motherboard power | +3.3V, +5V, +12V |
| EPS/CPU | 8-pin (4+4) | CPU power | +12V |
| PCIe 6-pin | 6-pin | GPU power (75W) | +12V |
| PCIe 8-pin | 8-pin (6+2) | GPU power (150W) | +12V |
| 12VHPWR | 12+4 pin | RTX 40 series GPUs (600W) | +12V |

**Peripheral connectors:**

| Connector | Purpose | Still Common? |
|-----------|---------|---------------|
| SATA (15-pin) | Storage drives | Yes |
| Molex (4-pin) | Legacy devices, fans, accessories | Declining |
| Berg (4-pin) | Floppy drives | Obsolete |

---

### Activity D: Wattage Calculations - Complete

**Build 1: Budget Office PC**

| Component | Selection | TDP |
|-----------|-----------|-----|
| CPU | Intel Core i5-12400 | 65W |
| GPU | Integrated | 0W |
| RAM | 2x8GB DDR4 | 10W |
| Storage | 1x NVMe SSD | 7W |
| Fans | 2 case fans | 6W |
| **Subtotal** | | 88W |
| **+20% headroom** | | 106W |
| **Recommended PSU** | | 300-400W |

**Build 2: Mid-Range Gaming PC**

| Component | Selection | TDP |
|-----------|-----------|-----|
| CPU | AMD Ryzen 5 7600 | 65W |
| GPU | NVIDIA RTX 4070 | 200W |
| RAM | 2x16GB DDR5 | 15W |
| Storage | 1x NVMe + 1x HDD | 17W |
| Fans | 4 case fans | 12W |
| **Subtotal** | | 309W |
| **+20% headroom** | | 371W |
| **Recommended PSU** | | 550-650W |

**Build 3: High-End Workstation**

| Component | Selection | TDP |
|-----------|-----------|-----|
| CPU | Intel Core i9-14900K | 253W |
| GPU | NVIDIA RTX 4090 | 450W |
| RAM | 4x16GB DDR5 | 30W |
| Storage | 2x NVMe + 2x HDD | 34W |
| Fans | 6 case fans + AIO pump | 30W |
| **Subtotal** | | 797W |
| **+20% headroom** | | 956W |
| **Recommended PSU** | | 1000W+ |

---

### Activity E: PSU Form Factors Reference

| Form Factor | Dimensions (mm) | Use Case |
|-------------|-----------------|----------|
| ATX | 150 × 86 × 140-180 | Standard desktops |
| SFX | 125 × 63.5 × 100 | Small form factor builds |
| SFX-L | 125 × 63.5 × 130 | SFF with more power |
| TFX | 85 × 64 × 175 | Slim desktops |
| Flex ATX | 81.5 × 40.5 × 150 | Very slim cases, 1U servers |

**Compatibility:**

| Case Type | Compatible PSU |
|-----------|----------------|
| Full/Mid Tower | ATX |
| Mini Tower | ATX, SFX with bracket |
| SFF (Mini-ITX) | SFX, SFX-L |
| HTPC | TFX, SFX |
| Slim Desktop | TFX, Flex ATX |

**SFX in ATX case:** Works with a bracket adapter (creates gap around PSU)

**ATX in SFF case:** Does not fit - too large

---

### Activity F: Cooling Methods Reference

| Type | How It Works | Pros | Cons | Best For |
|------|--------------|------|------|----------|
| Stock cooler | Included with CPU, basic heatsink+fan | Free, sufficient for stock clocks | Loud, limited cooling | Non-overclocked budget builds |
| Tower air cooler | Large heatsink with heat pipes | Reliable, quiet, no leak risk | Heavy, RAM clearance issues | Most builds |
| AIO liquid | Closed-loop with pump, radiator | Great cooling, looks clean | More expensive, potential leaks | Gaming, enthusiast |
| Custom loop | User-built with separate components | Best cooling, fully customizable | Expensive, complex, maintenance | Extreme enthusiast |

---

### Activity G: Thermal Paste Reference

**Application methods:**

| Method | Description | Best For |
|--------|-------------|----------|
| Pea/dot | Small dot in center | Most CPUs (recommended) |
| X pattern | X across IHS | Large IHS (Threadripper) |
| Line | Vertical line | Rectangular IHS |
| Spread | Pre-spread thin layer | When you need precise coverage |

**Recommended for beginners:** Pea/dot method - hard to mess up, mounting pressure spreads it.

**Replacement interval:** Every 3-5 years, or when reseating cooler, or if temperatures increase unexpectedly.

---

### Activity H: Fan Specifications Reference

| Size | Common Use | Typical RPM | Typical CFM |
|------|------------|-------------|-------------|
| 80mm | SFF cases, PSUs | 1500-3000 | 20-35 |
| 92mm | Compact cases, some coolers | 1200-2500 | 30-50 |
| 120mm | Most common, universal | 800-2000 | 40-80 |
| 140mm | Cases, radiators | 600-1500 | 50-100 |
| 200mm | Large cases | 400-1000 | 80-150 |

**Airflow vs Pressure:**

| Application | Type | Why |
|-------------|------|-----|
| Open case intake | Airflow | No restriction, move max air |
| Filtered intake | Pressure | Push through filter resistance |
| Radiator | Pressure | Push through fin resistance |
| Heatsink | Pressure | Push through fin stack |
| Open exhaust | Airflow | No restriction |

**PWM vs DC:**

| Feature | PWM (4-pin) | DC (3-pin) |
|---------|-------------|------------|
| Speed control | Pulse width modulation | Voltage reduction |
| Precision | Very precise | Less precise |
| Minimum speed | Can go very low | Limited by starting voltage |
| Best for | Most applications | Budget builds |

---

### Activity I: CPU Cooler Selection Reference

| Build | CPU TDP | Recommendation | Why |
|-------|---------|----------------|-----|
| Office PC, 65W | 65W | Stock cooler or budget tower | Low heat, doesn't need much |
| Gaming PC, 125W | 125W | Mid-range tower (Thermalright, DeepCool) | Good balance |
| Workstation, 253W | 253W | High-end air or 360mm AIO | Serious cooling needed |
| SFF Gaming, 105W | 105W | Low-profile cooler (Noctua NH-L9a) | Height restriction |

---

### Activity J: Troubleshooting Reference

**Symptom analysis:**

| Symptom | PSU Cause | Cooling Cause |
|---------|-----------|---------------|
| Won't turn on | Dead PSU, failed switch, no power | N/A |
| Turns on then off | Short circuit, OCP triggering | CPU protection (no cooler mounted) |
| Shutdown under load | Insufficient wattage, overheating | CPU/GPU thermal throttling |
| Shutdown at idle | Failing PSU, bad capacitors | Unlikely unless fan failed |
| Crashes/instability | Voltage fluctuation, failing PSU | Thermal throttling |
| Burning smell | Failing capacitors, overload | Fan motor burning out |
| Buzzing/clicking | Fan bearing, coil whine | Fan bearing failure |

**PSU paperclip test:**

1. Unplug PSU from everything
2. Find green wire (PS_ON) and any black wire (ground) on 24-pin
3. Bridge them with a paperclip
4. Plug PSU into wall
5. If fan spins, PSU can turn on (doesn't prove it's fully functional)

---

## Section 3: Reflection - Discussion Points

### Scenario 1: RTX 4080 + 550W PSU Shutdowns

**Problem:** PSU is severely underpowered.

| Component | Power Draw |
|-----------|------------|
| RTX 4080 | 320W |
| Rest of system | ~150W |
| **Total** | ~470W |
| 550W PSU at load | Likely only ~450W usable on +12V |

**Why it shuts down:**
- Under gaming load, GPU draws full 320W
- PSU can't deliver enough power
- OCP (over-current protection) triggers, or voltage drops causing instability

**Recommendation:**
- Minimum: 750W 80+ Gold PSU
- Recommended: 850W (for headroom and efficiency)
- NVIDIA recommends 700W minimum for RTX 4080

---

### Scenario 2: Stock Cooler at 100°C

**Diagnostic steps:**

1. **Check mounting** - Is the cooler properly attached? Loose mounting = poor contact
2. **Check thermal paste** - Was it applied? Was the plastic cover removed?
3. **Check fan spinning** - Is the fan connected and running?
4. **Check case airflow** - Is there adequate case ventilation?
5. **Check BIOS settings** - Is the CPU overclocked or voltage too high?

**Most common cause with stock cooler:** Forgot to remove plastic cover from cooler base, or didn't apply thermal paste.

**Fix:** Reseat cooler with fresh thermal paste, verify mounting pressure.

**If still hot with good mount:** Stock Intel coolers struggle with sustained loads. Upgrade to basic tower cooler (~$30).

---

### Scenario 3: GTX 1060 → RTX 4070 on 500W PSU

**Analysis:**

| Config | Power Draw | 500W PSU |
|--------|------------|----------|
| Old (GTX 1060) | ~120W GPU + ~150W system = ~270W | Fine |
| New (RTX 4070) | ~200W GPU + ~150W system = ~350W | Marginal |

**Verdict:** The 500W *might* work, but it's not recommended.

**Factors to consider:**
- Is it a quality 500W or cheap 500W?
- What's the +12V rail rating?
- 80+ Bronze is decent efficiency
- Transient power spikes on RTX 4070 can exceed 200W briefly

**Recommendation:** Upgrade to 650W for safety and longevity. The cost of a new PSU (~$70) is worth avoiding potential system damage or instability.

---

### Scenario 4: Silent Home Studio PC

**Cooling choices for silence:**

| Component | Silent Choice | Why |
|-----------|---------------|-----|
| CPU cooler | Large tower (Noctua NH-D15) | Huge heatsink = slow fans |
| Case fans | 140mm PWM, low RPM | Larger = more air at lower speed |
| GPU | Quieter model (check reviews) | Some GPUs are designed for silence |
| PSU | Fanless or semi-passive | No fan noise at low loads |
| Case | Sound-dampened panels | Absorbs remaining noise |

**Silent build strategy:**
1. Oversize cooling (more cooling capacity = lower fan speeds)
2. Larger fans (move more air at lower RPM)
3. PWM control (adjust speed based on temps)
4. Quality components (cheap fans are loud)
5. Sound dampening (case panels, mats)
6. Avoid unnecessary RGB (some RGB has fan noise)

**Trade-off:** Larger coolers, potentially lower max performance to maintain silence.

---

## Key Takeaways

**For the A+ Exam:**

1. **Voltage rails:**
   - +12V = CPU, GPU, fans (most important)
   - +5V = USB, SATA
   - +3.3V = RAM, chipset

2. **Connectors:**
   - 24-pin = motherboard
   - 8-pin EPS = CPU
   - 6/8-pin PCIe = GPU
   - SATA = drives

3. **80 PLUS:** Minimum efficiency certification (80% = baseline)

4. **PSU sizing:** Component TDP + 20% headroom

5. **Thermal paste:** Fills microscopic gaps, pea-size amount

6. **Safe temps:** CPU/GPU under 85°C at load

7. **Modular types:** Non (all attached), Semi (some detachable), Full (all detachable)

**For Real-World Skills:**

- Always check +12V rail amps, not just total wattage
- Calculate actual power needs before recommending PSU
- Gold efficiency is the sweet spot for most builds
- Never open a PSU - capacitors hold lethal charge
- Quality PSU protects entire system investment
- Reseat cooler with fresh paste if temps are bad

---

**Congratulations on completing Lab 17!**

Power supply and cooling knowledge is essential for building reliable systems and troubleshooting thermal/stability issues.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 17: Power Supplies and Cooling - Solution Guide*