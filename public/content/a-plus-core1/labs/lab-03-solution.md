# Lab 3: Laptop Disassembly and Component Replacement - Solution Guide

**Note to Students:** Only review this AFTER completing your own work! You'll learn more by figuring it out yourself first.

---

## Section 1: Concept Check - Answers

**1. What should you ALWAYS do before opening a laptop?**

**Answer: b) Disconnect power and remove/disconnect the battery**

This is non-negotiable safety. Even when "powered off," a connected battery can still supply power to components. Working inside a powered laptop risks:
- Electrical shock
- Short circuits that damage components
- Data loss
- Fire hazard (especially with lithium batteries)

The correct order is: Shut down → Unplug AC adapter → Remove/disconnect battery → Wait 30 seconds (capacitors discharge) → Begin work.

---

**2. What type of RAM do laptops use?**

**Answer: b) SO-DIMM**

SO-DIMM (Small Outline Dual In-line Memory Module) is the compact RAM form factor designed for laptops, small form factor PCs, and some all-in-ones.

| Form Factor | Size | Used In |
|-------------|------|---------|
| DIMM | ~133mm | Desktops |
| SO-DIMM | ~67mm | Laptops, SFF PCs |
| MicroDIMM | ~54mm | Ultra-portables (rare) |

SO-DIMM modules are about half the length of desktop DIMMs but use the same DDR technology (DDR4 SO-DIMM, DDR5 SO-DIMM, etc.).

---

**3. Why is it important to document screw locations during disassembly?**

**Answer: b) Laptops use different screw sizes in different locations**

Unlike desktop PCs which typically use just 2-3 screw types, laptops may use 5-10 different screw sizes in a single machine. Using the wrong screw can:
- Strip threads (screw too big)
- Leave components loose (screw too small)
- Puncture the battery or motherboard (screw too long)
- Crack plastic (overtightened wrong size)

Professional technicians use magnetic mats, labeled containers, or diagram sheets to track exactly which screw came from which location.

---

**4. What is the purpose of thermal paste?**

**Answer: b) To fill air gaps and transfer heat from CPU to heatsink**

Even "smooth" metal surfaces have microscopic imperfections that create air gaps. Air is a poor thermal conductor. Thermal paste fills these gaps, creating better contact between the CPU and heatsink.

Important notes:
- Thermal paste is NOT glue (heatsinks are held by screws/clips)
- Too much paste actually insulates (worse than too little)
- Paste degrades over time and should be replaced every few years
- Old paste should be completely removed before applying new paste

---

**5. Which component is most commonly upgraded in laptops?**

**Answer: c) RAM and storage**

Most laptop components are soldered or non-upgradeable, but RAM and storage remain upgradeable in many models:

| Component | Upgradeable? | Notes |
|-----------|--------------|-------|
| RAM | Often yes | Check max supported, slot count |
| Storage | Usually yes | 2.5" SATA or M.2 |
| CPU | Rarely | Usually soldered |
| GPU | Almost never | Soldered or MXM (very rare) |
| Display | Sometimes | Must match connector type |
| Wi-Fi card | Usually yes | M.2 or mini PCIe |
| Battery | Often yes | Match voltage and connector |

Note: Ultrabooks increasingly solder RAM to save space. Always check before purchasing upgrade parts.

---

## Section 2: Activity Solutions

### Activity A: Service Manual - Reference Guide

**Where to find service manuals by manufacturer:**

| Manufacturer | URL | Search Method |
|--------------|-----|---------------|
| Dell | support.dell.com | Enter Service Tag → Manuals |
| HP | support.hp.com | Enter serial or product number → User Guides |
| Lenovo | support.lenovo.com | Enter serial or model → Documentation |
| ASUS | asus.com/support | Enter model → Driver & Utility → Manual |
| Acer | acer.com/support | Enter serial or model → Documents |
| Microsoft Surface | support.microsoft.com | Search "Surface [model] repair" |
| Apple | Not officially available | Use iFixit.com instead |

**What to look for in a service manual:**

1. **Removal procedures** - Step-by-step instructions with photos
2. **Screw charts** - Size, quantity, and location for each component
3. **Prerequisites** - What must be removed before each component
4. **Reassembly notes** - Any special instructions for putting it back together
5. **Part numbers** - For ordering replacements
6. **Torque specifications** - How tight screws should be (pro level)

**Common disassembly order (varies by model):**

1. Battery (external) or bottom cover
2. Bottom cover (if battery was external)
3. Battery (internal, disconnect first)
4. Storage drive(s)
5. RAM
6. Wi-Fi card
7. Fan/cooling system
8. Motherboard (if needed)
9. Display assembly (if needed)

---

### Activity B: Teardown Video Study - Key Observations

**What to watch for in professional teardowns:**

| Observation | Why It Matters |
|-------------|----------------|
| Tool selection | Right tool prevents damage |
| Screw organization | Prevents mixing sizes |
| Cable handling | Ribbons tear easily |
| Prying technique | Wrong angle breaks clips |
| ESD precautions | Protects components |
| Warnings/cautions | Avoid their mistakes |

**Common warnings in teardown videos:**

1. "Be careful with this ribbon cable - it tears easily"
2. "This screw is hidden under a sticker"
3. "Don't pry here - there's a clip on the other side"
4. "These screws are different lengths - don't mix them"
5. "The battery is glued in - use isopropyl alcohol to loosen"
6. "Wait for the fan cable before lifting the motherboard"

**Best teardown resources:**

| Resource | Strength |
|----------|----------|
| iFixit.com | Step-by-step photos, repairability scores |
| YouTube teardowns | Video shows technique and real-time problems |
| Manufacturer service manuals | Official, complete, accurate |
| Reddit r/techsupport | Real-world problem solutions |

---

### Activity C: Component Identification - Answer Key

**Typical laptop internal layout:**

```
+------------------------------------------------------------------+
|  [A]        [B]              [C]                    [D]          |
|   O          □                ▭                      ═══         |
| CMOS      Wi-Fi           M.2 SSD              RAM slots         |
|                                                                  |
|         [E]                              [F]                     |
|         ████                             ████                    |
|         ████                             ████                    |
|        Speaker                          Speaker                  |
|                                                                  |
|    [G]                    [H]                     [I]            |
|    ~~~                    ████████                ▭▭▭            |
|   Fan                    CPU/Heatsink         Battery connector  |
|                                                                  |
|              [J]                           [K]                   |
|              ○○○○                          ████                  |
|        Keyboard connector               2.5" Drive Bay          |
+------------------------------------------------------------------+
```

**Answer key:**

| Letter | Component | Identification Tips |
|--------|-----------|---------------------|
| A | CMOS battery | Small coin cell (CR2032) |
| B | Wi-Fi card | Small module with antenna wires |
| C | M.2 SSD | Flat stick secured by one screw |
| D | RAM slots | Long connectors with clips at ends |
| E | Speaker (left) | Oval with grille pattern |
| F | Speaker (right) | Matches left speaker |
| G | Cooling fan | Round with visible blades |
| H | CPU/Heatsink | Copper pipes leading to fan |
| I | Battery connector | Wide flat cable connector |
| J | Keyboard connector | Ribbon cable connector, ZIF type |
| K | 2.5" drive bay | Rectangular space with SATA connector |

---

### Activity D: Upgrade Planning - Compatibility Guide

**RAM Upgrade Compatibility Checklist:**

| Factor | How to Check | Common Mistake |
|--------|--------------|----------------|
| DDR generation | Must match exactly (DDR4 vs DDR5) | Buying wrong generation |
| Speed (MHz) | Can use slower, but matches is best | Mismatched speeds = runs at slower |
| Voltage | Usually standardized per DDR gen | Mixing SO-DIMM types |
| Max capacity | Check manufacturer specs | Buying more than supported |
| Slot count | Physical limitation | Buying 2 sticks for 1 slot |
| Form factor | Must be SO-DIMM for laptops | Buying desktop RAM (DIMM) |

**Storage Upgrade Considerations:**

| Current | Upgrade Path | Notes |
|---------|--------------|-------|
| 2.5" HDD | 2.5" SATA SSD | Direct swap, major speed boost |
| 2.5" SATA SSD | Larger 2.5" SATA SSD | Same speed, more space |
| M.2 SATA | M.2 SATA or NVMe | Check if slot supports NVMe |
| M.2 NVMe | M.2 NVMe | Direct upgrade |
| eMMC (soldered) | Not upgradeable | External drive or cloud only |

**Checking NVMe compatibility:**

1. Look at the M.2 slot key:
   - B key = SATA only
   - M key = NVMe capable (usually)
   - B+M key = Either works
2. Check manufacturer specs
3. Check BIOS settings for NVMe support

---

### Activity E: Screw Organization - Methods Comparison

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Magnetic mat** | Visual layout, screws stick | Expensive, takes space | Professionals, frequent work |
| **Labeled containers** | Cheap, stackable | Requires labels, less visual | Occasional repairs |
| **Photo method** | Free, very accurate | Requires phone, takes time | One-off repairs |
| **Sticky note grid** | Cheap, disposable | Screws can roll off | Budget option |
| **Egg carton** | Free, many compartments | Screws roll between cells | Beginners |
| **Ice cube tray** | Cheap, compartmentalized | Limited compartments | Simple jobs |

**Recommended for beginners:**

Combine methods: Take photos at each step AND use labeled containers. The photos serve as backup if you forget which container holds which screws.

**Screw documentation template:**

```
LAPTOP: _________________ DATE: _________

BOTTOM COVER:
- Corners (4x): M2.5 x 4mm, silver
- Edges (6x): M2.5 x 6mm, black
- Under rubber feet (2x): M2.5 x 8mm, silver

STORAGE CADDY:
- Sides (4x): M2 x 3mm, black

M.2 SSD:
- (1x): M2 x 3mm, silver

(Continue for each component...)
```

---

### Activity F: ESD Prevention - Complete Guide

**Why ESD matters:**

| Voltage | Human sensation | Effect on electronics |
|---------|-----------------|----------------------|
| 3,500V | Minimum we can feel | Already destructive |
| 10,000V | Mild shock | Catastrophic damage |
| 25,000V | Painful spark | Component destruction |
| 35,000V | Static shock from carpet | Instant component death |

Electronics can be damaged by as little as **25 volts** - far below what humans can feel. You may damage components without ever knowing you discharged static.

**Component ESD sensitivity:**

| Component | Sensitivity | Reason |
|-----------|-------------|--------|
| RAM | HIGH | Dense circuits, exposed contacts |
| CPU | HIGH | Extremely fine transistors |
| Motherboard | HIGH | Multiple sensitive components |
| SSD | HIGH | Flash memory circuits |
| HDD | MEDIUM | Sealed, but controller is exposed |
| Wi-Fi card | HIGH | Small, exposed circuits |
| Battery | LOW | No sensitive electronics inside |
| Case/plastics | IMMUNE | Non-electronic |

**ESD prevention measures:**

| Method | Effectiveness | Cost |
|--------|---------------|------|
| Anti-static wrist strap | Excellent | $5-10 |
| Anti-static mat | Excellent | $15-30 |
| Touching grounded metal | Good | Free |
| Humidity control (>50%) | Moderate | Varies |
| Avoiding carpet/synthetic fabrics | Moderate | Free |
| Anti-static bags for components | Excellent | $5-10 |

**Proper wrist strap use:**

1. Clip strap to bare metal on PC case (not painted surface)
2. Strap should be snug against bare skin
3. Keep cable taut (not tangled)
4. Verify connection periodically
5. Cord should be <6 feet for best grounding

---

## Tier 2 Solutions

### Activity G: Complete Teardown - Reference

**Phase 1: Bottom Cover - Common patterns**

| Manufacturer | Typical Pattern |
|--------------|-----------------|
| Dell | Screws under rubber feet + captive screws |
| HP | Often screws + pry clips, some adhesive |
| Lenovo | Usually labeled screws, good service access |
| ASUS | Varies widely, check manual |
| Apple | Pentalobe screws, adhesive battery |

**Phase 2: Battery Disconnection**

**Why disconnect first:**
- Prevents short circuits while working
- Eliminates shock risk
- Protects components from accidental power
- Required by most manufacturer procedures

**Battery connector types:**

| Type | Description | Disconnection |
|------|-------------|---------------|
| JST connector | Small white plastic plug | Pull straight up |
| Pressure connector | Flat flex cable | Flip latch, slide out |
| Screw terminal | Wires with screw mounts | Unscrew (rare) |

**Phase 3: RAM Removal**

**SO-DIMM slot operation:**

1. **Clips at sides** push outward
2. **Module pops up** at 30° angle
3. **Pull out** at same angle
4. **Reverse for installation**

**Common RAM issues:**

| Problem | Cause | Solution |
|---------|-------|----------|
| RAM not detected | Not fully seated | Reseat, ensure clicks |
| Wrong amount detected | Wrong slot used | Check slot priority in manual |
| System won't POST | Incompatible RAM | Verify DDR type and speed |
| Beep codes | RAM failure | Try known-good module |

**Phase 4: Storage Removal**

**2.5" Drive removal:**
1. Usually in caddy or bracket
2. Remove 2-4 caddy screws (save these!)
3. Disconnect SATA connector
4. Some slide into connector (no cable)

**M.2 Drive removal:**
1. Remove single securing screw
2. Drive pops up at 30° angle
3. Pull out gently
4. Note the key type (B, M, or B+M)

**M.2 Key types:**

| Key | Notch Position | Supports |
|-----|----------------|----------|
| B key | Left side | SATA, PCIe x2 |
| M key | Right side | NVMe, PCIe x4 |
| B+M key | Both sides | SATA (most common on drives) |

**Phase 5: Wi-Fi Card**

**Antenna wire convention:**

| Wire Color | Typical Connection | Notes |
|------------|-------------------|-------|
| Black | Main antenna | Primary signal |
| White/Gray | Aux antenna | Secondary/diversity |
| Third wire (if present) | Bluetooth or GPS | Less common |

**Disconnecting antenna wires:**
- Pull straight up with fingernail or plastic tool
- Never pull by the wire itself
- Note positions before disconnecting
- Take a photo for reference

**Reconnecting antenna wires:**
- Position connector over post
- Press straight down until click
- Gentle pressure - don't force
- Verify wire routing won't be pinched

**Phase 6: Cooling System**

**Thermal paste condition guide:**

| Condition | Appearance | Action |
|-----------|------------|--------|
| Good | Smooth, gray, even | No action needed |
| Dried out | Crumbly, cracked | Replace paste |
| Hardened | Glass-like, shiny | Replace paste |
| Pumped out | Paste pushed to edges | Replace paste |
| Missing areas | Bare metal showing | Replace paste |

**Heatsink screw removal order:**

Most heatsinks have numbered screws. Always:
1. **Loosen in order** (1, 2, 3, 4)
2. **Loosen gradually** (half turn each, repeat)
3. **Remove in order** once all loose

**Why order matters:** Uneven pressure can crack the CPU die or bend the heatsink. Gradual, even loosening prevents damage.

---

### Activity H: Thermal Paste Application - Complete Guide

**Thermal paste types:**

| Type | Thermal Conductivity | Ease of Use | Price |
|------|---------------------|-------------|-------|
| Ceramic/silicone | Low-Medium | Easy | $ |
| Metal oxide | Medium | Easy | $ |
| Carbon-based | Medium-High | Easy | $$ |
| Liquid metal | Highest | Difficult | $$$ |

**Recommended for beginners:** Ceramic or carbon-based (Arctic MX-4, Noctua NT-H1)

**Application methods:**

| Method | Description | Best For |
|--------|-------------|----------|
| Pea/dot | Small dot in center | Most CPUs, beginners |
| X pattern | Thin X across surface | Large CPUs |
| Line | Thin line across center | Rectangular dies |
| Spread | Pre-spread thin layer | When you can see die shape |

**For laptop CPUs:** Pea method is almost always correct. Laptop CPU dies are small.

**How much is enough?**

- **Too little:** ~size of a grain of rice = incomplete coverage
- **Just right:** ~size of a pea (3-4mm diameter) = perfect
- **Too much:** ~size of a bean = overflow, messy, insulates

**Cleaning old paste:**

1. Use 90%+ isopropyl alcohol
2. Apply to lint-free cloth (coffee filter works)
3. Wipe in one direction (don't scrub in circles)
4. Repeat with clean section until no residue
5. Allow to dry completely (1-2 minutes)
6. Surface should be mirror-shiny

---

### Activity I: Reassembly Verification - Troubleshooting Matrix

**Post-reassembly problems and solutions:**

| Symptom | Most Likely Cause | Check/Fix |
|---------|-------------------|-----------|
| No power at all | Battery disconnected | Reconnect battery |
| Powers on, no display | RAM not seated | Reseat RAM |
| Powers on, shuts off immediately | Heatsink not mounted | Remount with thermal paste |
| Fan not spinning | Fan cable disconnected | Reconnect fan |
| Wi-Fi missing | Antennas disconnected | Reconnect antenna wires |
| Overheating | No thermal paste / air gap | Reapply paste, reseat heatsink |
| Keyboard not working | Ribbon cable loose | Reseat ZIF connector |
| Trackpad not working | Ribbon cable loose | Reseat connector |
| HDD not detected | SATA cable loose | Reconnect or reseat drive |
| Wrong RAM amount | Module not clicked | Reseat RAM firmly |
| Rattling noise | Loose screw inside | Open and remove |
| Bottom cover won't close | Cable in the way | Reroute cables |

**BIOS checks after reassembly:**

| Item | Expected | If Wrong |
|------|----------|----------|
| RAM amount | Matches installed | Reseat RAM |
| Storage detected | All drives visible | Check connections |
| CPU temp at idle | 30-50°C | Check heatsink/paste |
| Fan operation | Spins up during POST | Check fan cable |
| Battery status | Detected, charging | Check battery connector |

**CPU temperature guidelines:**

| State | Normal Range | Concerning |
|-------|--------------|------------|
| Idle | 30-50°C | >60°C |
| Light use | 45-65°C | >75°C |
| Heavy load | 70-85°C | >90°C |
| Throttling | N/A | >95°C (auto shutdown) |

---

## Section 3: Reflection - Discussion Points

### Scenario 1: RAM Upgrade (8GB to 16GB)

**Questions to ask/research:**

1. How many RAM slots does the laptop have?
2. How many are currently occupied?
3. What's the maximum supported RAM?
4. What DDR generation is required?
5. What speed is currently installed?
6. Is RAM soldered or socketed?

**Compatibility problems:**

| Mistake | Result |
|---------|--------|
| Wrong DDR generation | Won't fit (different notch position) |
| Exceeding max capacity | Only detects up to max (wastes money) |
| Speed mismatch | Runs at slower speed (may be fine) |
| Buying DIMM instead of SO-DIMM | Won't fit |
| Buying 2 modules for 1 slot | Can only use one |

**Verifying success:**

1. Check BIOS - shows correct RAM amount
2. Check Windows - Task Manager → Performance → Memory
3. Run memory test (Windows Memory Diagnostic)
4. Check speeds match expected in CPU-Z

---

### Scenario 2: Lost Screw Inside Case

**Why it's a problem:**

- Can short circuit components if conductive
- Can rattle and cause noise
- Can damage components if laptop is moved
- Can work loose and cause intermittent issues
- Can jam fans or moving parts

**Finding it:**

1. Tilt laptop slowly, listen for it moving
2. Use flashlight to look in all crevices
3. Turn laptop upside down and shake gently
4. Use magnetic screwdriver to "sweep" inside
5. Remove components to access hidden areas

**If you can't find it:**

- Never close the laptop with a screw loose inside
- Keep searching until found
- As last resort, use compressed air to blow it out an opening
- Document what happened if this is a customer laptop

---

### Scenario 3: Powers On, Immediately Shuts Off

**Most likely cause:** CPU overheating due to heatsink issue

**Why this happens:**
- Heatsink not mounted = CPU overheats in 2-3 seconds
- No thermal paste = same result
- Heatsink not tight = partial contact, overheats
- Thermal shutdown = CPU protects itself

**What to check:**

1. Is heatsink mounted? (sometimes forgotten)
2. Did you apply thermal paste? (required if heatsink was removed)
3. Are heatsink screws tight? (must be even pressure)
4. Is fan connected? (for extended operation)
5. Is fan spinning? (listen during brief power-on)

**Prevention:**

- Have thermal paste ready before removing heatsink
- Follow numbered screw sequence
- Verify heatsink is flush before closing laptop
- Do a quick power-on test before final assembly

---

### Scenario 4: CCFL to LED Display Upgrade

**Is it possible?** Generally NO, not a simple swap.

**Why not:**

| Factor | CCFL | LED |
|--------|------|-----|
| Power connector | Inverter connector | Direct DC |
| Backlight voltage | High voltage AC | Low voltage DC |
| Cable compatibility | Different pinout | Different pinout |
| Motherboard support | Must support LED | May not |

**What would be required:**

- New display panel (with LED backlight)
- Compatible cable (if different connector)
- Inverter bypass or removal (if LED works without)
- May require different lid/bezel (sizing)
- Cost often exceeds laptop value

**Better recommendations:**

1. Replace with same panel type (CCFL) - exact match
2. If laptop is old enough to have CCFL, consider replacing entire laptop
3. External monitor for better display
4. Accept current display limitations

---

## Self-Assessment Questions

1. **Can I find and interpret a service manual for any laptop?**

2. **Do I understand the correct order for disassembling a laptop?**

3. **Can I identify all major internal components by sight?**

4. **Do I know how to check RAM and storage upgrade compatibility?**

5. **Can I explain proper ESD prevention procedures?**

6. **Do I understand why screw organization is critical?**

7. **(Tier 2) Can I safely perform a complete laptop teardown?**

8. **(Tier 2) Do I know how to remove/install RAM, storage, and Wi-Fi cards?**

9. **(Tier 2) Can I properly apply thermal paste?**

10. **(Tier 2) Can I troubleshoot common post-reassembly issues?**

---

## Key Takeaways

**For the A+ Exam:**

1. **Always disconnect battery first** - Before any internal work

2. **Laptops use SO-DIMM RAM** - Smaller than desktop DIMM

3. **Document everything** - Photos and screw organization prevent mistakes

4. **Thermal paste fills air gaps** - Not glue, enables heat transfer

5. **ESD can damage components silently** - Use wrist strap, proper grounding

6. **RAM and storage are commonly upgradeable** - CPU/GPU usually are not

7. **M.2 drives can be SATA or NVMe** - Check key type and slot support

8. **Service manuals show exact procedures** - Always consult them

**For Real-World Skills:**

- Take your time - rushing causes mistakes
- When in doubt, don't force it
- If something doesn't work after reassembly, it's usually a cable
- Keep spare screws organized - they're hard to replace
- Thermal paste is cheap - replace it if in doubt
- Document your work for the customer and yourself

---

**Congratulations on completing Lab 3!**

You now understand laptop disassembly procedures and (if Tier 2) have hands-on experience performing a complete teardown. This is a foundational skill for any hardware technician.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 3: Laptop Disassembly and Component Replacement - Solution Guide*