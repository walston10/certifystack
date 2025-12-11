# Lesson 1: Laptop Hardware Overview

**Estimated Time:** 25-30 minutes  
**Domain:** Mobile Devices (Domain 1.0)  
**Exam Objectives Covered:** 1.1 - Install and configure laptop hardware and components

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Identify** key differences between laptop and desktop computer architecture
- **Explain** various laptop form factors including clamshell, 2-in-1, and convertible designs
- **Describe** internal laptop components and their functions
- **Compare** battery types (Li-ion vs Li-poly) and understand proper battery care
- **Configure** docking stations and port replicators for productivity
- **Utilize** function (Fn) keys and special laptop buttons effectively
- **Distinguish** between touchpad and pointing stick input devices

---

## Video Resources

**Watch these videos for visual demonstrations of laptop hardware:**

📹 **Watch:** [Professor Messer: Laptop Hardware](https://www.youtube.com/watch?v=y7oHZ1mi7e4)
   
📹 **Watch:** [Branch Education:Hardware](https://www.youtube.com/watch?v=d86ws7mQYIg&t=19s)

---

## Introduction

Open up a desktop computer, and you'll find spacious room to work, standardized parts you can swap easily, and plenty of airflow keeping everything cool. It's like working on a car engine with the hood up—everything's accessible.

**Now try that with a laptop.**

Laptops are engineering marvels of miniaturization. They cram desktop-level performance into a package thin enough to slip into a backpack, light enough to carry all day, and efficient enough to run for hours on battery power. But this compact design comes with tradeoffs: proprietary parts, difficult repairs, and thermal challenges.

**As an A+ technician, you need to understand these tradeoffs.** You'll troubleshoot laptops that won't charge, replace failed keyboards, upgrade RAM in systems with memory soldered to the motherboard (spoiler: you can't), and explain to frustrated users why their laptop can't be upgraded like their old desktop.

This lesson covers laptop architecture, form factors, components, batteries, docking solutions, and those mysterious function keys that do... something. Let's dive into the portable computing world.

---

## Laptop vs Desktop Architecture - Why Everything is Different

**Think of desktops and laptops like pickup trucks vs sports cars.**

Pickup trucks (desktops) prioritize utility: big cargo bed, powerful engine, easy to load and unload, room to work underneath. Sports cars (laptops) prioritize performance in a compact package: sleek design, aerodynamic, lightweight, everything optimized for efficiency.

### Key Architectural Differences

**1. Component Integration**

**Desktops:** Separate, modular components connected by cables
- Easy to replace individual parts
- Standardized connections (SATA, PCIe, etc.)
- Mix and match components from different manufacturers

**Laptops:** Highly integrated, often proprietary
- Components soldered directly to motherboard
- Proprietary connectors and form factors
- Limited upgrade options

**Example:** In a desktop, you can swap out any graphics card. In many laptops, the GPU is soldered to the motherboard—if it fails, you're replacing the entire motherboard (expensive) or buying a new laptop.

**2. Cooling and Thermal Management**

**Desktops:** Large cases with multiple fans, plenty of airflow
- Components run cooler
- Less thermal throttling
- Quieter operation possible

**Laptops:** Cramped spaces with limited airflow
- Single fan (or sometimes none in ultra-thin models)
- Heat pipes channel heat to exhaust vents
- Components must throttle performance to avoid overheating
- Dust accumulation is a bigger problem

**This is why your laptop fan sounds like a jet engine** when running intensive tasks—it's desperately trying to cool components crammed into a tight space.

**3. Power Delivery**

**Desktops:** Plugged into wall power (110V/220V AC)
- Power supply converts AC to DC
- Consistent power delivery
- No battery concerns

**Laptops:** Battery-powered with AC adapter charging
- Must balance performance vs battery life
- Power management is critical
- Components designed for efficiency

**4. Physical Durability Requirements**

**Desktops:** Sit on desks, rarely moved
- Cases don't need to be particularly sturdy
- Components aren't subjected to physical stress

**Laptops:** Carried everywhere, subject to bumps and drops
- Chassis must be rigid (aluminum, magnesium alloy, reinforced plastic)
- Hinges must survive thousands of open/close cycles
- Screens must resist pressure from backpack contents

---

## Laptop Form Factors - Beyond the Traditional Clamshell

### Clamshell (Traditional Laptop)

**What it is:** Classic laptop design—keyboard on bottom, screen on top, connected by hinges

**Think of it like a book:** Opens and closes, stays in that configuration

**Characteristics:**
- Screen typically opens 90-180 degrees
- Keyboard and touchpad always accessible
- Most common and affordable form factor
- Durable hinge mechanism

**Best for:** General computing, business use, students, anyone who primarily types

**Examples:** Most ThinkPads, Dell Latitudes, MacBook Air/Pro

---

### 2-in-1 (Convertible)

**What it is:** Laptop that converts into a tablet by folding screen back 360 degrees or detaching keyboard

**Two types exist:**

**Type 1: 360-degree hinge (yoga-style)**
- Screen rotates all the way around to back of keyboard
- Keyboard becomes inactive when folded into tablet mode
- Keyboard always attached (can't lose it)

**Type 2: Detachable keyboard**
- Screen completely separates from keyboard base
- True tablet when detached
- Keyboard base often contains extra battery

**Think of it like a transformer:** One device, multiple configurations

**Configurations:**
1. **Laptop mode** - Traditional typing position
2. **Tablet mode** - Screen folded back or detached, touch-only input
3. **Tent mode** - Folded into upside-down V shape (good for presentations)
4. **Stand mode** - Keyboard facing down, screen upright (good for watching videos)

**Best for:** Users who want flexibility—note-taking with stylus, presentations, media consumption, occasional typing

**Examples:** Microsoft Surface Pro, Lenovo Yoga series, HP Spectre x360

---

### Convertible (Hybrid)

**Note:** Some people use "convertible" interchangeably with "2-in-1," but technically convertibles have the 360-degree hinge while 2-in-1s can also include detachables.

**For the A+ exam:** Know that both terms exist and understand the difference between 360-degree hinge models and detachable keyboard models.

---

### Form Factor Comparison Table

| Feature | Clamshell | 2-in-1 (360°) | 2-in-1 (Detachable) |
|---------|-----------|---------------|---------------------|
| **Versatility** | Low | High | Highest |
| **Durability** | High | Medium (complex hinge) | Medium (connection wear) |
| **Weight** | Medium | Medium-Heavy | Light (tablet alone) |
| **Battery Life** | Good | Good | Excellent (dual batteries) |
| **Price** | $ | $$ | $$$ |
| **Keyboard Quality** | Best | Good | Fair (thinner keys) |
| **Touch/Stylus** | Optional | Standard | Standard |

---

## Internal Components Overview - What's Inside

**Opening a laptop reveals a dense circuit board with everything packed tight.** Here's what you'll find:

### System Board (Motherboard)

The main circuit board—but unlike desktop motherboards, laptop system boards have:
- CPU often soldered directly (not socketed)
- RAM sometimes soldered (not upgradeable)
- GPU integrated or soldered
- Proprietary connectors for keyboard, touchpad, display
- Smaller form factor (varies by laptop model)

**Key point:** Laptop motherboards are model-specific. You can't just buy any motherboard—it must be the exact model for that laptop.

### Memory (RAM)

**SO-DIMM (Small Outline Dual In-line Memory Module)** - laptop memory
- Physically smaller than desktop DIMM
- Lower voltage (typically 1.35V vs 1.5V)
- Same technology (DDR3, DDR4, DDR5)
- Usually 1-2 slots accessible

**Critical exam point:** Many modern ultra-thin laptops have RAM **soldered to motherboard**—not upgradeable. Check specifications before purchasing.

### Storage

**Options:**
- **2.5" HDD/SSD** - Traditional laptop storage, SATA connection
- **M.2 SSD** - Modern standard, smaller, faster (SATA or NVMe protocol)
- **eMMC** - Embedded flash storage (budget laptops, not upgradeable)

**M.2 is the future** - tiny form factor, blazing speeds with NVMe, no cables needed

### Wireless Card

**Mini PCIe or M.2 form factor**
- Handles Wi-Fi and Bluetooth
- Two antenna wires run up to screen bezel
- Usually replaceable (if you need newer Wi-Fi standard)

**Fun fact:** Those thin strips running up the sides of your laptop screen? Those are the Wi-Fi antennas. Damage them, and your Wi-Fi becomes terrible.

### Cooling System

**Heat pipes and fans**
- Copper heat pipes draw heat away from CPU/GPU
- Single fan exhausts hot air (usually out the side or back)
- Thermal paste connects chips to heat pipes

**Why laptops get hot:** Powerful components generate heat faster than the small cooling system can dissipate it, especially in thin designs.

---

## Battery Types and Care - Power on the Go

### Lithium-Ion (Li-ion) Batteries

**The workhorse of laptop batteries**

**How they work:** Lithium ions move between positive and negative electrodes through an electrolyte

**Characteristics:**
- High energy density (lots of power in small package)
- No "memory effect" (can charge anytime without hurting capacity)
- Degrades over time (typically 300-500 charge cycles)
- Sensitive to heat

**Typical lifespan:** 2-4 years before noticeable capacity loss

---

### Lithium-Polymer (Li-poly) Batteries

**The premium option**

**How they differ:** Uses polymer electrolyte instead of liquid

**Advantages:**
- Can be shaped into thin, custom forms (perfect for ultra-thin laptops)
- Slightly safer (less risk of leakage)
- Lighter weight
- Similar energy density to Li-ion

**Disadvantages:**
- More expensive
- Still degrades over time

**Think of Li-poly as the evolution of Li-ion**—better for modern thin-and-light designs

---

### Battery Care Best Practices

**Maximizing battery lifespan:**

1. **Avoid extreme temperatures**
   - Don't leave laptop in hot car
   - Don't use on soft surfaces that block vents (overheating)
   - Optimal range: 50-95°F (10-35°C)

2. **Partial discharges are better than full discharges**
   - Keeping battery between 20-80% is ideal
   - Full discharge (0%) stresses the battery
   - Modern batteries don't need "calibration" by full discharge

3. **Store at ~50% charge if not using for extended period**
   - Not 100% (stresses cells)
   - Not 0% (can damage cells)

4. **Update BIOS/firmware**
   - Manufacturers sometimes release battery management improvements

5. **Remove battery if always plugged in?**
   - **Old advice:** Yes, remove to avoid constant charge stress
   - **Modern laptops:** Battery management circuits prevent overcharging—safe to leave in

**Exam tip:** Know that Li-ion and Li-poly are the two battery types. Understand heat is the enemy of battery life.

---

## Power Adapters and Charging

### AC Adapter (Power Brick)

**What it does:** Converts wall AC power (110V/220V) to DC power laptop needs (typically 19V, but varies)

**Key specifications:**
- **Voltage (V)** - Must match laptop requirement exactly
- **Amperage (A)** - Adapter should meet or exceed laptop requirement
- **Wattage (W)** - Voltage × Amperage = total power delivery

**Example:** 19V × 3.42A = 65W adapter

**Critical rule:** Voltage must match exactly. Using wrong voltage can damage laptop. Higher amperage/wattage is fine (laptop draws what it needs).

### Charging Tips

- **Proprietary connectors:** Each manufacturer uses different barrel connectors (Dell, HP, Lenovo all different)
- **USB-C Power Delivery:** Modern standard—same cable for charging and data (finally!)
- **Fast charging:** Some laptops support rapid charge (80% in ~1 hour)

**Common issue:** Frayed adapter cables near connector—inspect regularly for damage

---

## Docking Stations and Port Replicators

**Scenario:** You have a laptop with 2 USB ports, 1 HDMI port. You need to connect two monitors, keyboard, mouse, printer, Ethernet cable, and external hard drive.

**Solution:** Docking station or port replicator

### Port Replicator

**Simple expansion**
- Adds more ports (USB, video, Ethernet)
- Usually connects via USB-C or proprietary connector
- Plug in one cable to laptop, get access to all peripherals
- No additional power to devices

**Think of it like a power strip for data ports**

### Docking Station

**Full desktop replacement**
- Everything a port replicator does, plus:
- Charges laptop
- Powers multiple monitors
- Provides power to connected devices
- Often proprietary connection (specific to laptop line)
- Some have PCIe slots for expansion cards

**Think of it like a home base**—laptop slides in, becomes a full desktop workstation

### Universal Docking Stations

**Modern solution**
- Connects via USB-C/Thunderbolt
- Works with multiple laptop brands
- DisplayLink or Thunderbolt technology
- Less expensive than proprietary docks

**Exam tip:** Understand the difference—port replicators add ports, docking stations provide power and charging too.

---

## Function (Fn) Keys and Special Buttons

**Ever wonder what those tiny icons on F1-F12 keys mean?**

The **Function (Fn) key** is like a shift key for special laptop functions. Press Fn + F-key to activate.

### Common Fn Key Functions

**Memory trick - Common Fn Keys (VAMBLSS):**
- **V**olume (up/down/mute)
- **A**irplane mode (wireless on/off)
- **M**onitor (switch displays, extend, mirror)
- **B**rightness (screen brightness up/down)
- **L**ock screen
- **S**leep/hibernate
- **S**ettings/tools

### Specific Examples

| Key Combo | Function | Icon Usually Shows |
|-----------|----------|-------------------|
| **Fn + F1** | Mute audio | Speaker with X |
| **Fn + F2** | Volume down | Speaker with - |
| **Fn + F3** | Volume up | Speaker with + |
| **Fn + F4** | Microphone mute | Microphone with X |
| **Fn + F5** | Brightness down | Sun with - |
| **Fn + F6** | Brightness up | Sun with + |
| **Fn + F7** | External display toggle | Two monitors |
| **Fn + F8** | Wireless on/off | Antenna/signal icon |
| **Fn + F9** | Touchpad enable/disable | Touchpad icon |
| **Fn + F10** | Keyboard backlight | Keyboard icon |
| **Fn + F11** | Sleep mode | Moon icon |
| **Fn + F12** | Airplane mode | Airplane icon |

**Note:** Exact functions vary by manufacturer (Dell, HP, Lenovo all different). Icons are your guide.

### Special Buttons

- **Power button** - Turn on/off (hold 5+ seconds for force shutdown)
- **Volume rocker** - Physical volume buttons (some models)
- **Mute button** - Quick audio mute (some models)
- **Wi-Fi toggle** - Physical wireless on/off switch (older laptops)

**Troubleshooting tip:** User says "my wireless won't turn on"—check for physical wireless switch or Fn + wireless key combination.

---

## Touchpad vs Pointing Stick

### Touchpad (Trackpad)

**The standard laptop pointing device**

**How it works:** Capacitive touch surface detects finger movement

**Features:**
- Multi-touch gestures (two-finger scroll, pinch to zoom)
- Integrated buttons or tap-to-click
- Palm rejection (ignores accidental touches while typing)

**Advantages:**
- Intuitive for most users
- Supports gestures
- No moving parts

**Disadvantages:**
- Accidental touches while typing
- Not as precise as mouse
- Can be finicky with sweaty/dry fingers

**Settings:**
- Enable/disable tapping
- Adjust sensitivity
- Configure gestures
- Disable while typing

---

### Pointing Stick (TrackPoint, Nub)

**The little red dot between G, H, and B keys** (mostly on ThinkPads)

**How it works:** Pressure-sensitive isometric joystick—push it, cursor moves

**Features:**
- No hand movement required (hands stay on home row)
- Requires dedicated buttons below spacebar
- Pressure-sensitive (push harder = faster movement)

**Advantages:**
- Hands never leave keyboard
- Very precise once you learn it
- No accidental activation

**Disadvantages:**
- Steep learning curve
- Less common (mainly ThinkPads)
- Not intuitive for casual users

**Think of it like a tiny joystick built into your keyboard**

**Exam tip:** Know both exist. Touchpad is standard; pointing stick is niche (business laptops).

---

## Key Exam Tips

🎯 **Form factors you must know:**
- Clamshell (traditional)
- 2-in-1 convertible (360-degree hinge)
- 2-in-1 detachable (keyboard separates)

💡 **Battery essentials:**
- Li-ion vs Li-poly (both lithium-based, Li-poly is thinner/lighter)
- Heat degrades batteries
- Modern batteries don't have "memory effect"

⚠️ **Common mistakes to avoid:**
- Confusing SO-DIMM (laptop RAM) with DIMM (desktop RAM)
- Thinking all laptop components are upgradeable (many are soldered)
- Using wrong voltage power adapter (voltage must match exactly!)

🔧 **Practical tips:**
- Docking station charges laptop; port replicator just adds ports
- Fn key unlocks special functions (brightness, volume, display switching)
- Wi-Fi antennas run through screen bezel—damage = poor signal

---

## Key Takeaways

- [ ] Laptops prioritize portability and power efficiency over upgradeability
- [ ] Clamshell is traditional; 2-in-1 offers tablet functionality
- [ ] Components are often proprietary and soldered (limited upgrade options)
- [ ] SO-DIMM is laptop RAM (smaller than desktop DIMM)
- [ ] M.2 SSDs are the modern storage standard (faster, smaller than 2.5")
- [ ] Li-ion and Li-poly batteries both use lithium, hate heat
- [ ] Power adapter voltage must match exactly; amperage can be higher
- [ ] Docking stations charge and add ports; port replicators just add ports
- [ ] Fn key activates special functions (volume, brightness, wireless, display)
- [ ] Touchpad is standard; pointing stick is specialty (ThinkPads)
- [ ] Wi-Fi antennas run through screen bezel
- [ ] Laptop cooling is critical—dust accumulation causes overheating

---

## Check Your Understanding

**1. What is the main difference between a 2-in-1 laptop with a 360-degree hinge versus a detachable keyboard?**

<details>
<summary>Show Answer</summary>
<strong>360-degree hinge models keep the keyboard attached (folding all the way back), while detachable models let you completely separate the screen from the keyboard base.</strong> With 360-degree (yoga-style), the keyboard stays connected but becomes inactive in tablet mode. With detachables, the screen is a standalone tablet when removed. Detachables often have additional battery in the keyboard base. Both are "2-in-1" devices, just different approaches to achieving tablet functionality. The exam may ask you to identify which type based on a description.
</details>

**2. A customer wants to upgrade their laptop's RAM from 8GB to 16GB. What should you check first before ordering memory?**

<details>
<summary>Show Answer</summary>
<strong>Check if the RAM is soldered to the motherboard or if it uses SO-DIMM slots.</strong> Many modern ultra-thin laptops have RAM soldered directly to the system board, making upgrades impossible. If it has SO-DIMM slots, verify: (1) How many slots (usually 1-2), (2) What's currently installed, (3) Maximum capacity supported, (4) RAM type needed (DDR3/DDR4/DDR5). Also check if any slots are occupied or if all slots are accessible without major disassembly. Some laptops require removing the entire bottom panel to access RAM.
</details>

**3. Why do laptop batteries degrade faster when exposed to high temperatures?**

<details>
<summary>Show Answer</summary>
<strong>Heat accelerates chemical reactions inside the battery, causing faster degradation of the lithium cells.</strong> Lithium-ion and lithium-polymer batteries are sensitive to temperature. High heat (above 95°F/35°C) increases the rate of chemical breakdown inside the cells, reducing capacity and lifespan. This is why you should never leave laptops in hot cars, always ensure proper ventilation during use, and avoid blocking cooling vents. The same reason laptops throttle performance when hot—protecting components (including battery) from heat damage. Optimal storage temperature is around 50-77°F (10-25°C).
</details>

**4. A user's laptop came with a 65W power adapter, but it was lost. They found a 90W adapter with the same voltage and connector. Is it safe to use?**

<details>
<summary>Show Answer</summary>
<strong>Yes, it's safe—as long as the voltage matches exactly and the connector fits properly.</strong> The wattage (65W vs 90W) indicates maximum power delivery capacity. The laptop will only draw the power it needs (65W in this case). Think of it like a water faucet—a bigger faucet (90W) can deliver more water, but you only take what you need. The critical factors are: (1) Voltage must match exactly (e.g., 19V = 19V), (2) Amperage/wattage can be equal or higher (never lower), (3) Connector must fit properly. Using wrong voltage can damage the laptop. Using lower wattage may cause slow charging or the laptop to not charge while in use.
</details>

**5. What is the purpose of the Fn (Function) key on a laptop keyboard?**

<details>
<summary>Show Answer</summary>
<strong>The Fn key activates secondary functions on the F1-F12 keys, such as adjusting brightness, volume, wireless, and display settings.</strong> Because laptops have limited space, manufacturers use the Fn key to provide access to additional functions without adding more keys. Press Fn + an F-key (with an icon) to activate that function. Common uses include: screen brightness, audio volume, wireless on/off, external display switching, keyboard backlight, sleep mode, and touchpad enable/disable. Each manufacturer has slightly different assignments, so look at the icons on the keys. Some laptops let you reverse this (Fn-lock) so function keys work without pressing Fn.
</details>

**6. What type of RAM do laptops use, and how is it different from desktop RAM?**

<details>
<summary>Show Answer</summary>
<strong>Laptops use SO-DIMM (Small Outline DIMM), which is physically smaller than desktop DIMM.</strong> SO-DIMM modules are about half the length of standard desktop DIMMs to fit in compact laptop chassis. They use the same memory technology (DDR3, DDR4, DDR5) but in a smaller form factor. SO-DIMM typically runs at lower voltage (1.35V vs 1.5V) for better power efficiency. You cannot use desktop DIMM in a laptop or vice versa—the physical size and pin configuration are different. Also note: many modern laptops have RAM soldered directly to the motherboard with no SO-DIMM slots at all.
</details>

**7. A customer complains their laptop wireless connection is weak even when sitting next to the router. What physical component should you suspect?**

<details>
<summary>Show Answer</summary>
<strong>Damaged Wi-Fi antenna wires in the screen bezel.</strong> Laptop Wi-Fi antennas are thin wires that run from the wireless card up through the hinges to the screen bezel (usually along both sides of the display). These wires are fragile and can break if the screen is damaged, hinges are over-stressed, or if someone dropped the laptop. Symptoms of damaged antennas include weak signal strength even near the access point, frequent disconnections, and inability to detect networks others can see. To test, use an external USB Wi-Fi adapter—if that works fine, the internal antennas are likely damaged. This is a common issue the A+ exam loves to test.
</details>

**8. What's the difference between a docking station and a port replicator?**

<details>
<summary>Show Answer</summary>
<strong>A docking station provides power/charging to the laptop plus port expansion; a port replicator only adds additional ports.</strong> Port replicators are simpler—they just give you more USB ports, video outputs, Ethernet, etc. Docking stations do everything port replicators do, PLUS they charge your laptop and can provide power to connected devices. Docking stations are typically more expensive and may use proprietary connections specific to a laptop line, while port replicators often use standard USB-C connections. Both solve the "one cable" problem—connect your laptop to all your desktop peripherals with a single connection. Know this distinction for the exam.
</details>

**9. A laptop's battery only lasts 1 hour on a full charge, but it used to last 4 hours. What's the most likely cause?**

<details>
<summary>Show Answer</summary>
<strong>Normal battery degradation due to age and charge cycles.</strong> Lithium-ion and lithium-polymer batteries degrade over time, typically losing noticeable capacity after 300-500 charge cycles (roughly 2-4 years of normal use). This is expected behavior, not a defect. Other contributing factors: heat exposure accelerates degradation, keeping battery at 100% or 0% for extended periods causes stress, and physical damage. Solutions: replace the battery with a new one, use power-saving settings to extend remaining capacity, or keep laptop plugged in when at desk (if feasible). Some laptops allow BIOS settings to limit charge to 80% to extend battery lifespan when mostly used plugged in.
</details>

**10. Why can't you use the same motherboard from one laptop model in another laptop model, even from the same manufacturer?**

<details>
<summary>Show Answer</summary>
<strong>Laptop motherboards are custom-designed for each specific model with unique form factors, mounting points, and connector locations.</strong> Unlike desktop motherboards (which follow ATX, mATX, ITX standards), laptop system boards are completely proprietary. Each model has different: chassis shape, screw hole locations, keyboard connector positions, display cable routing, cooling system mounting, port locations, and physical dimensions. Even within the same manufacturer, a motherboard from Model A won't fit in Model B's chassis or connect to Model B's keyboard, display, or other components. This is why laptop motherboard replacements must be exact model matches and are expensive—no standardization or interchangeability exists.
</details>

---

## Before Moving to Lesson 2

Make sure you can:

- ✅ Explain laptop vs desktop architectural differences (integration, cooling, power)
- ✅ Identify clamshell, 2-in-1 (360°), and 2-in-1 (detachable) form factors
- ✅ List internal components (system board, SO-DIMM, M.2 SSD, wireless card)
- ✅ Compare Li-ion vs Li-poly batteries and describe proper care
- ✅ Understand power adapter specifications (voltage must match, amperage can exceed)
- ✅ Distinguish docking stations from port replicators
- ✅ Use Fn keys for laptop functions (brightness, volume, wireless, display)

**Study strategy:** Laptops are 15% of A+ Core 1 exam. Focus on the differences from desktops, especially component integration and upgradeability limitations. Practice identifying form factors from descriptions. Memorize SO-DIMM for laptop RAM.

---

## Coming Up in Lesson 2

Next, we'll dive deep into **Laptop Displays and Video**—LCD vs LED vs OLED technology, touchscreens, digitizers, webcams, display cables, and troubleshooting common display issues. You'll learn why some laptop screens cost $50 and others cost $500, and how to diagnose whether a black screen is a backlight failure or something else.

---

## "The best laptop is the one that does exactly what you need—not the one with the most impressive specs sheet."

---

# ✅ LESSON 1 COMPLETE!

**🎉 You've started your A+ journey! (1 of 60 lessons complete - 1.7%)**

**Next up: Understanding the screen you're staring at right now.** 📱
