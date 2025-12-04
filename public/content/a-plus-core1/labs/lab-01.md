# Lab 1: Laptop Hardware Exploration

**Tier:** 1 (Universal) + 2 (Bonus)
**Time:** 25-30 minutes
**Exam Objectives:** 1.1 - Install and configure laptop hardware and components

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand laptop hardware basics:

1. **What is the main advantage of Li-poly batteries over Li-ion?**
   - a) Higher capacity
   - b) Can be shaped to fit thin designs
   - c) Cheaper to manufacture
   - d) Faster charging

2. **Which laptop form factor has a screen that can fold completely behind the keyboard?**
   - a) Clamshell
   - b) 2-in-1 convertible
   - c) Desktop replacement
   - d) Ultrabook

3. **What is the difference between a docking station and a port replicator?**
   - a) They are the same thing
   - b) Docking stations add functionality; port replicators only duplicate existing ports
   - c) Port replicators are wireless
   - d) Docking stations only work with specific brands

4. **What does the Fn key do on a laptop?**
   - a) Opens the file manager
   - b) Activates secondary functions on other keys
   - c) Locks the function row
   - d) Enables airplane mode

5. **Which component in a laptop converts AC power from the wall to DC power?**
   - a) The battery
   - b) The motherboard
   - c) The power adapter (AC adapter)
   - d) The charging port

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Safe for your daily laptop** - These activities use built-in Windows tools and visual inspection only. No disassembly required.

---

#### Activity A: Identify Your Laptop's Form Factor

**Goal:** Determine what type of laptop you have.

**Instructions:**

Examine your laptop and answer:

1. **What is the form factor?**
   - [ ] Clamshell (traditional - screen folds down onto keyboard)
   - [ ] 2-in-1 Convertible (screen rotates 360° to become tablet)
   - [ ] 2-in-1 Detachable (screen removes from keyboard)
   - [ ] Desktop Replacement (large, heavy, high-performance)
   - [ ] Ultrabook (thin and light)

2. **Does your screen support touch input?**
   - [ ] Yes
   - [ ] No

3. **What is the approximate screen size?** _____ inches

4. **Does your laptop have a dedicated GPU or integrated graphics?**
   - [ ] Dedicated (separate graphics card)
   - [ ] Integrated (built into CPU)
   - [ ] Don't know yet (you'll find out in Activity B)

---

#### Activity B: Document System Specifications

**Goal:** Use Windows tools to identify internal components.

**Method 1: System Information**

1. Press `Windows + R`
2. Type `msinfo32` and press Enter
3. Document the following from **System Summary**:

| Field | Your Laptop |
|-------|-------------|
| System Manufacturer | |
| System Model | |
| Processor | |
| Installed Physical Memory (RAM) | |
| BIOS Version/Date | |
| BaseBoard Manufacturer | |
| BaseBoard Product | |

4. Expand **Components → Display** and document:

| Field | Your Laptop |
|-------|-------------|
| Adapter Description | |
| Adapter RAM | |
| Resolution | |

---

**Method 2: Device Manager**

1. Right-click the Start button → **Device Manager**
2. Expand each category and document:

| Category | What You Found |
|----------|----------------|
| Batteries (list all) | |
| Display adapters | |
| Network adapters (list wireless) | |
| Storage controllers | |
| Disk drives | |

---

**Method 3: Battery Report (Command Line)**

1. Open Command Prompt as Administrator
2. Type: `powercfg /batteryreport`
3. Press Enter
4. Open the generated HTML file (usually in C:\Users\YourName\battery-report.html)

Document from the report:

| Field | Your Laptop |
|-------|-------------|
| Battery Chemistry (Li-ion or Li-poly?) | |
| Design Capacity | |
| Full Charge Capacity | |
| Cycle Count (if shown) | |
| Battery Health % (Full Charge ÷ Design × 100) | |

**Calculate battery health:**
```
(Full Charge Capacity ÷ Design Capacity) × 100 = _____%
```

---

#### Activity C: External Port Inventory

**Goal:** Identify and document all external ports and features.

**Instructions:** Physically examine all sides of your laptop and check off what you find:

**Left Side:**
- [ ] USB Type-A port(s) - How many? ___
- [ ] USB Type-C port(s) - How many? ___
- [ ] HDMI port
- [ ] Mini DisplayPort
- [ ] Thunderbolt port (lightning bolt icon)
- [ ] SD card slot
- [ ] Ethernet (RJ-45) port
- [ ] 3.5mm audio jack
- [ ] Kensington lock slot
- [ ] Power/charging port
- [ ] Other: _____________

**Right Side:**
- [ ] USB Type-A port(s) - How many? ___
- [ ] USB Type-C port(s) - How many? ___
- [ ] HDMI port
- [ ] Ethernet (RJ-45) port
- [ ] Optical drive (DVD/Blu-ray)
- [ ] 3.5mm audio jack
- [ ] Power/charging port
- [ ] Other: _____________

**Front Edge:**
- [ ] Status LEDs (power, battery, storage activity, wireless)
- [ ] SD card slot
- [ ] Other: _____________

**Back Edge:**
- [ ] Ports (list any): _____________
- [ ] Vents
- [ ] Other: _____________

**Top (Display):**
- [ ] Webcam
- [ ] Webcam privacy shutter
- [ ] Microphone(s)
- [ ] Ambient light sensor

**Bottom:**
- [ ] Vents
- [ ] Speakers
- [ ] Service panel/door
- [ ] RAM access panel
- [ ] Battery release latch (older laptops)
- [ ] Docking connector

---

#### Activity D: Function Key Exploration

**Goal:** Discover what your laptop's Fn key combinations do.

**Instructions:** Hold the **Fn** key and press each function key (F1-F12). Document what happens:

| Key Combo | Icon on Key (if any) | What It Does |
|-----------|---------------------|--------------|
| Fn + F1 | | |
| Fn + F2 | | |
| Fn + F3 | | |
| Fn + F4 | | |
| Fn + F5 | | |
| Fn + F6 | | |
| Fn + F7 | | |
| Fn + F8 | | |
| Fn + F9 | | |
| Fn + F10 | | |
| Fn + F11 | | |
| Fn + F12 | | |

**Common functions to look for:**
- Brightness up/down
- Volume up/down/mute
- Airplane mode toggle
- Display switch (external monitor)
- Keyboard backlight
- Touchpad enable/disable
- Sleep/hibernate
- Wi-Fi toggle

**Bonus:** Check if your laptop has an "Fn Lock" feature (often Fn + Esc) that reverses the behavior so you don't need to hold Fn.

---

#### Activity E: Research Your Model

**Goal:** Find official documentation for your specific laptop.

**Instructions:**

1. Find your exact model number (from Activity B or the sticker on your laptop)
   - Model: _______________________

2. Search "[Manufacturer] [Model] specifications" (e.g., "Dell Latitude 5520 specifications")

3. Find and bookmark:
   - [ ] Official product page with full specs
   - [ ] Service manual or maintenance guide (PDF)
   - [ ] User manual

4. From the official specs, answer:
   - Maximum RAM supported: _____ GB
   - Number of RAM slots: _____
   - Storage type (SATA, NVMe, both?): _____________
   - Upgradeable components: _____________

5. **Where did you find the service manual?**
   - URL: _______________________

**Pro tip:** Dell, HP, and Lenovo all publish detailed service manuals showing how to disassemble their laptops. These are goldmines for A+ study!

---

### Tier 2 Bonus Activities

> ⚠️ **Requires a dedicated lab laptop.** See "Setting Up Your Hardware Lab" lesson. Never perform these activities on your primary computer or any laptop with important data.

---

#### Activity F: External Physical Inspection

**Goal:** Thoroughly examine your lab laptop before opening it.

**Before powering on:**

1. **Document the laptop's condition:**
   - Manufacturer: _____________
   - Model: _____________
   - Visible damage: _____________
   - Missing parts: _____________

2. **Photograph:**
   - [ ] Top (lid closed)
   - [ ] Bottom (all labels, screws, panels)
   - [ ] All sides showing ports
   - [ ] Any damage or wear

3. **Check all ports - do they look functional?**
   - Bent pins?
   - Debris inside?
   - Physical damage?

4. **Power it on (if possible) and document:**
   - Does it POST?
   - Does it reach an OS?
   - Any beeps or error messages?
   - Display working?
   - Keyboard working?
   - Touchpad working?

---

#### Activity G: Bottom Panel Removal

**Goal:** Safely access internal components.

**Safety first:**
- [ ] Laptop unplugged from power
- [ ] Battery removed (if external) or laptop fully powered off
- [ ] Anti-static wrist strap connected
- [ ] Working on non-static surface

**Before removing screws:**

1. **Photograph the bottom panel** - capture all screw locations

2. **Count and document screws:**

| Location | Screw Size | Quantity | Notes |
|----------|-----------|----------|-------|
| | | | |
| | | | |
| | | | |
| | | | |

3. **Are there hidden screws?** (under rubber feet, stickers, or panels)
   - [ ] Checked under rubber feet
   - [ ] Checked under any stickers
   - [ ] Checked service panel doors

**Remove the bottom panel:**

4. Remove screws in a pattern (corners first, then middle)
5. Place screws in labeled container or magnetic tray
6. Use plastic spudger to gently pry panel - **never force it**
7. Photograph the interior before touching anything

---

#### Activity H: Internal Component Identification

**Goal:** Identify and document every visible internal component.

**With the bottom panel removed, locate and photograph:**

| Component | Present? | Location | Notes |
|-----------|----------|----------|-------|
| Battery (internal) | [ ] Yes [ ] No | | Connector type? |
| RAM module(s) | [ ] Yes [ ] No | | How many slots? SO-DIMM? |
| Storage drive | [ ] Yes [ ] No | | 2.5" HDD/SSD? M.2? |
| Wi-Fi card | [ ] Yes [ ] No | | Mini PCIe? M.2? |
| Cooling fan(s) | [ ] Yes [ ] No | | How many? |
| Heat sink/pipe | [ ] Yes [ ] No | | Copper? Aluminum? |
| CMOS battery | [ ] Yes [ ] No | | Coin cell visible? |
| Speakers | [ ] Yes [ ] No | | How many? |

**Sketch or describe the layout:**
```
+------------------------------------------+
|                                          |
|                                          |
|                                          |
|                                          |
|                                          |
|                                          |
+------------------------------------------+
```

**Document any labels or part numbers visible on:**
- RAM: _____________
- Storage: _____________
- Wi-Fi card: _____________
- Battery: _____________

---

#### Activity I: Reassembly

**Goal:** Safely reassemble the laptop.

**Reassembly checklist:**

1. [ ] All internal cables still connected (verify against your photos)
2. [ ] No tools or screws left inside
3. [ ] No cables pinched by panel edges
4. [ ] Bottom panel aligned properly
5. [ ] All screws reinstalled in correct locations
6. [ ] Rubber feet replaced (if removed)

**Post-reassembly test:**

1. [ ] Laptop powers on
2. [ ] No unusual sounds (clicking, grinding)
3. [ ] Display works
4. [ ] Keyboard works
5. [ ] Touchpad works
6. [ ] Wi-Fi connects
7. [ ] Runs on battery power (if applicable)

**If something doesn't work:**
- Re-open and check cable connections
- Verify nothing is loose
- Check your photos for anything you might have missed

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **A customer brings in a laptop that won't charge.**
   - What components could be at fault?
   - What would you check first?
   - What questions would you ask the customer?

2. **A user complains their laptop is "slow."**
   - Based on what you learned about specs, what could be upgraded?
   - What limitations might prevent upgrades?

3. **Your company is purchasing 50 laptops for field technicians.**
   - What form factor would you recommend?
   - What ports are essential?
   - What battery considerations matter?

---

## What You Learned Today

- ✅ Identified your laptop's form factor and key features
- ✅ Used Windows tools to document hardware specifications
- ✅ Generated and interpreted a battery health report
- ✅ Inventoried all external ports and their purposes
- ✅ Explored Fn key combinations for your specific model
- ✅ Located official service documentation for your laptop
- ✅ (Tier 2) Safely opened and identified internal components
- ✅ (Tier 2) Practiced proper disassembly/reassembly procedures

**Next Lab:** Laptop Displays and Video - exploring display technologies and external monitor connections.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 1: Laptop Hardware Exploration*