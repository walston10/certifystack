# Lesson 17: Power Supplies and Cooling

**Estimated Time:** 25-30 minutes  
**Domain:** 3.0 Hardware (25% of exam)  
**Exam Objectives Covered:** 3.4 - Given a scenario, install and configure motherboards, CPUs, and add-on cards

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Calculate power supply wattage requirements for a system
- Explain efficiency ratings (80 PLUS certifications)
- Identify power supply voltage rails and their purposes
- Recognize different power connectors and their uses
- Distinguish between modular, semi-modular, and non-modular PSUs
- Understand air cooling vs liquid cooling solutions
- Apply thermal paste correctly for optimal heat transfer
- Explain fan configurations and airflow management

---

## Video Resources

- [Professor Messer - Power Supplies](https://www.youtube.com/watch?v=bUh2EZzJZRU) (12 min)
- [Linus Tech Tips - PSU Basics](https://www.youtube.com/watch?v=lXku-gxNXyQ) (10 min)
- [JayzTwoCents - How to Choose a Power Supply](https://www.youtube.com/watch?v=lqThn3C-zg4) (15 min)
- [Gamers Nexus - CPU Cooler Basics](https://www.youtube.com/watch?v=hr0qLLv3dKc) (14 min)

---

## Introduction

It's 2 AM. You're finishing a high-end gaming PC build—RTX 4090, Intel i9 processor, RGB everything. You press the power button. The fans spin for half a second, the lights flash, and everything dies. You try again. Same result. Panic sets in.

You check every connection. Reseat the RAM. Verify the CPU is installed correctly. Try a different outlet. Nothing works. Finally, you check the power supply label: 450 watts.

**There's your problem.** The RTX 4090 alone draws 450 watts under load. Add the CPU (125W), motherboard, drives, fans, RGB—you're trying to pull 700+ watts through a 450W power supply. It's like trying to power a mansion with a single extension cord. The PSU's protection circuitry kicks in immediately, shutting down to prevent damage.

You swap in an 850W power supply. Press the button. Everything roars to life perfectly.

**This is why understanding power supplies matters.** The PSU is your system's heart—it converts AC power from the wall into DC power that components use. Choose too small a PSU, and the system won't boot. Choose inefficient power supplies, and you waste electricity as heat. Use the wrong connectors, and components won't get power.

And power supplies aren't alone—cooling is equally critical. Modern CPUs and GPUs generate intense heat. Without proper cooling, components throttle performance or shut down to prevent damage. Understanding thermal management keeps systems running reliably.

In this lesson, we're covering power supplies and cooling solutions. You'll learn wattage calculations, efficiency ratings, power connectors, modular vs non-modular designs, air cooling, liquid cooling, and thermal paste application. By the end, you'll be able to select appropriate power supplies and cooling solutions for any build.

---

## Power Supply Basics

The **power supply unit (PSU)** converts AC (alternating current) from your wall outlet into DC (direct current) that computer components use. It provides multiple voltage rails—primarily +3.3V, +5V, and +12V—each powering different components.

### Voltage Rails

**+3.3V rail:** Powers older components, some motherboard circuits, and RAM (historically).

**+5V rail:** Powers hard drives (SATA), USB devices, and some motherboard components.

**+12V rail:** Powers the CPU, graphics cards, and case fans. This is the most important rail in modern systems—high-performance components run on 12V.

Think of voltage rails like plumbing in a house. You have different pipe sizes for different purposes—main water line, bathroom fixtures, outdoor hose. Each rail delivers power at the voltage components expect.

### Wattage Requirements

**Wattage** is the total power capacity of the PSU. A 650W PSU can deliver up to 650 watts of power across all rails.

**How to calculate wattage needs:**

1. **CPU:** Check TDP (Thermal Design Power). Intel i5 = ~65W, i9 = ~125W, AMD Ryzen 5 = ~65W, Ryzen 9 = ~105W.
2. **GPU:** The biggest power consumer. RTX 4060 = ~115W, RTX 4070 = ~200W, RTX 4090 = ~450W.
3. **Motherboard:** ~50-80W
4. **RAM:** ~3-5W per stick
5. **Storage:** SSD = ~2-5W, HDD = ~6-10W
6. **Fans and peripherals:** ~10-20W total

**Example build:**
- CPU (Intel i7): 125W
- GPU (RTX 4070): 200W
- Motherboard: 60W
- RAM (2 sticks): 10W
- SSD: 5W
- Fans: 15W
- **Total:** 415W

**Recommended PSU:** 550-650W. Always add 20-30% headroom for power spikes, future upgrades, and aging components. A 550W PSU handles this build comfortably.

**Common mistake:** "I calculated 415W, so I'll buy a 450W PSU to save money." Bad idea. PSUs operate most efficiently at 50-80% load. Running at 90%+ capacity stresses components, reduces lifespan, and leaves no room for power spikes.

🎯 **Exam Tip:** Know that wattage should exceed total system draw by 20-30%. The exam may present scenarios requiring PSU selection based on component power requirements.

---

## Efficiency Ratings: 80 PLUS

Not all power supplies are created equal. A 600W PSU doesn't deliver exactly 600W of DC power—some energy is lost as heat during AC-to-DC conversion. **Efficiency** measures how much input power becomes usable output power.

### 80 PLUS Certification Tiers

**80 PLUS** certification indicates efficiency levels at different loads (20%, 50%, 100% capacity).

| Certification | 20% Load | 50% Load | 100% Load |
|---------------|----------|----------|-----------|
| **80 PLUS** | 80% | 80% | 80% |
| **80 PLUS Bronze** | 82% | 85% | 82% |
| **80 PLUS Silver** | 85% | 88% | 85% |
| **80 PLUS Gold** | 87% | 90% | 87% |
| **80 PLUS Platinum** | 90% | 92% | 89% |
| **80 PLUS Titanium** | 92% | 94% | 90% |

**What this means:**

An **80 PLUS Gold** PSU operating at 50% load (300W output from a 600W PSU) converts 90% of input power to output power. The remaining 10% becomes heat.

- **Input:** 333W from wall
- **Output:** 300W to components
- **Lost as heat:** 33W

A basic **80 PLUS** PSU at the same load is 80% efficient:
- **Input:** 375W from wall
- **Output:** 300W to components
- **Lost as heat:** 75W

**Why efficiency matters:**

1. **Lower electricity bills:** Higher efficiency means less wasted power.
2. **Less heat generation:** More efficient PSUs run cooler and quieter.
3. **Longer component life:** Less heat stress prolongs PSU lifespan.
4. **Better for the environment:** Reduced energy waste.

**Cost vs benefit:** 80 PLUS Gold is the sweet spot—good efficiency at reasonable cost. Platinum and Titanium offer diminishing returns unless you're running systems 24/7 (servers, mining rigs).

---

## Modular vs Non-Modular Power Supplies

Power supplies come in three designs based on cable management.

### Non-Modular

**Non-modular PSUs** have all cables permanently attached.

**Pros:**
- Cheapest option
- All cables present (no risk of losing cables)

**Cons:**
- Cable clutter (unused cables must be tucked away)
- Reduced airflow from cable bulk
- Harder to manage in compact cases

**When to use:** Budget builds where price matters more than aesthetics or cable management.

### Semi-Modular

**Semi-modular PSUs** have essential cables (motherboard power, CPU power) permanently attached. Optional cables (PCIe, SATA, Molex) are detachable.

**Pros:**
- Better cable management than non-modular
- Essential cables can't be lost
- More affordable than fully modular

**Cons:**
- Still some permanent cables to manage

**When to use:** Most builds. This is the best balance of price, convenience, and cable management.

### Fully Modular

**Fully modular PSUs** have all cables detachable—including motherboard and CPU power.

**Pros:**
- Ultimate cable management flexibility
- Use only the cables you need
- Cleanest interior appearance
- Easiest for compact builds

**Cons:**
- Most expensive option
- Risk of misplacing cables

**When to use:** High-end builds, small form factor systems, or when aesthetics matter (show builds with tempered glass).

---

## Power Supply Connectors

Different components require different power connectors. Matching the right connector to the right component is critical.

### Main Motherboard Power (24-pin or 20+4 pin)

The **24-pin ATX connector** (or 20+4 pin split connector) provides main power to the motherboard.

**20+4 pin design:** The connector splits into 20-pin and 4-pin sections. This allows compatibility with older 20-pin motherboards and modern 24-pin motherboards.

**Voltage:** Delivers +3.3V, +5V, and +12V to motherboard circuits.

**What it powers:** Motherboard chipset, RAM, PCIe slots (low power), USB ports, integrated peripherals.

**Can the system boot without it?** No. This is the primary power connection.

### CPU Power (4-pin, 8-pin, or 4+4 pin)

Modern CPUs draw significant power and require a dedicated power connector near the CPU socket.

**4-pin (older systems):** Provides 12V to low-power CPUs.

**8-pin (modern standard):** Provides 12V to mainstream CPUs. The connector is labeled "EPS12V" or "CPU."

**4+4 pin:** Two 4-pin connectors that clip together, allowing compatibility with both 4-pin and 8-pin motherboard headers.

**High-end systems:** Some motherboards have dual 8-pin CPU power for extreme overclocking or high-TDP processors (Threadripper, i9-14900K).

**What happens if it's not connected?** The system won't boot. Some motherboards display a warning LED or beep code indicating missing CPU power.

### PCIe Power (6-pin and 8-pin)

**PCIe power connectors** provide additional power to graphics cards and other high-power expansion cards.

**6-pin PCIe:** Delivers 75W to the GPU.

**8-pin (6+2 pin) PCIe:** Delivers 150W to the GPU.

Modern high-end graphics cards use multiple connectors:
- **RTX 4060:** 1x 8-pin
- **RTX 4070:** 1x 12-pin (new connector) or 2x 8-pin
- **RTX 4090:** 1x 16-pin (12VHPWR) or 4x 8-pin on older models

The PCIe slot itself provides 75W. Additional connectors supplement this. An RTX 4090 with a 16-pin connector can draw up to 450W total (75W from slot + 375W from connector).

**Important:** Don't confuse PCIe power with CPU power. They look similar but have different pinouts. Using the wrong connector can damage components.

### SATA Power

**SATA power connectors** power SATA drives (SSDs and HDDs) and some other peripherals.

**Shape:** Flat, L-shaped connector with 15 pins.

**Voltage:** Provides +3.3V, +5V, and +12V.

**Daisy-chaining:** Most cables have 3-4 SATA power connectors, allowing multiple drives per cable.

**What it powers:** SSDs, HDDs, optical drives, some RGB controllers, fan hubs.

### Molex (4-pin Peripheral)

**Molex connectors** are legacy 4-pin connectors.

**Voltage:** Provides +5V and +12V.

**What it powers:** Older HDDs, case fans, some RGB lighting, fan adapters.

Modern builds rarely need Molex connectors—SATA power has largely replaced them. However, some peripherals (fan splitters, LED strips) still use Molex.

### Adapters and Splitters

**SATA to Molex adapters** exist but are notorious for causing fires due to poor quality manufacturing. Avoid cheap adapters—use quality PSUs with sufficient native connectors instead.

**PCIe splitters** (1x 8-pin to 2x 8-pin) also exist but should be avoided for high-power GPUs. They can overload cables, causing melting or fire hazards.

🎯 **Exam Tip:** Know connector types and their purposes. The exam may show images of connectors and ask you to identify them.

---

## Air Cooling: Keeping It Simple

**Air cooling** uses heatsinks and fans to dissipate heat. It's reliable, affordable, and effective for most systems.

### How Air Cooling Works

1. **Heatsink:** Metal (usually aluminum or copper) sits on the CPU/GPU. Heat transfers from the chip to the heatsink via **thermal paste**.
2. **Heat pipes:** Hollow tubes filled with liquid that evaporates and condenses, moving heat from the base to the fins.
3. **Fans:** Blow air across heatsink fins, carrying heat away.

Think of it like a car radiator. Hot coolant flows through fins, and air blown by a fan carries the heat away. Same principle, different medium.

### Stock vs Aftermarket Coolers

**Stock coolers** come bundled with CPUs (Intel and AMD often include them).

**Pros:**
- Free
- Adequate for stock speeds (no overclocking)
- Easy installation

**Cons:**
- Louder under load
- Lower cooling capacity
- Limited overclocking headroom

**Aftermarket coolers** are purchased separately.

**Pros:**
- Better cooling performance
- Quieter operation
- Support for overclocking
- Aesthetics (RGB, custom designs)

**Cons:**
- Cost ($30-$100+)
- Larger size (check case clearance)
- More complex installation

**When to upgrade:** If you're overclocking, running high-TDP CPUs (i9, Ryzen 9), or bothered by fan noise, aftermarket coolers are worth it.

### Tower Coolers vs Top-Down Coolers

**Tower coolers** mount vertically with fans blowing toward the rear exhaust.

**Pros:**
- Excellent cooling performance
- Fits standard airflow patterns (front-to-back)

**Cons:**
- Can be tall (check case clearance—165mm is common)
- May block RAM slots

**Top-down coolers** mount horizontally, blowing air down onto the motherboard.

**Pros:**
- Cools VRM (voltage regulator modules) near the CPU
- Shorter height (fits compact cases)

**Cons:**
- Less efficient cooling for the CPU itself
- Disrupts case airflow

**Most common choice:** Tower coolers for mainstream builds. Top-down for compact systems or specific motherboard layouts.

---

## Liquid Cooling: Advanced Thermal Management

**Liquid cooling** uses liquid coolant to absorb and transfer heat away from components.

### All-in-One (AIO) Liquid Coolers

**AIO coolers** are pre-filled, sealed units requiring no maintenance.

**Components:**
- **Water block:** Mounts on CPU, absorbs heat
- **Pump:** Circulates coolant
- **Radiator:** Dissipates heat (like a car radiator)
- **Fans:** Blow air through radiator

**Sizes:** Measured by radiator length (fans are 120mm or 140mm).
- **120mm:** 1 fan (entry-level)
- **240mm:** 2 fans (most popular)
- **280mm:** 2x 140mm fans
- **360mm:** 3 fans (high-performance)

**Pros:**
- Better cooling than most air coolers
- Quieter under load
- Doesn't block RAM or tower over motherboard

**Cons:**
- More expensive ($80-$250)
- Small risk of pump failure or leaks
- Takes up case radiator mounting space

**When to use:** High-end CPUs (i9, Ryzen 9), overclocking, compact cases where tower coolers don't fit.

### Custom Water Cooling Loops

**Custom loops** use separate components—reservoirs, pumps, radiators, tubing—assembled manually.

**Pros:**
- Best possible cooling performance
- Can cool CPU and GPU simultaneously
- Aesthetic customization (colored coolant, RGB)

**Cons:**
- Expensive ($300-$1000+)
- Complex installation
- Requires maintenance (coolant replacement, leak checks)
- Risk of catastrophic leaks

**When to use:** Extreme overclocking, show builds, enthusiasts who enjoy tinkering.

**For most people:** AIOs or high-end air coolers provide 95% of custom loop performance at 25% of the cost and complexity.

---

## Thermal Paste: The Critical Interface

**Thermal paste** (also called thermal compound or TIM—Thermal Interface Material) fills microscopic gaps between the CPU/GPU and heatsink, improving heat transfer.

### Why Thermal Paste Matters

CPU and heatsink surfaces look smooth but have microscopic imperfections. Air trapped in these gaps acts as insulation. Thermal paste fills gaps, creating better thermal conductivity.

**Without thermal paste:** Temperatures can be 10-20°C higher—enough to cause throttling or damage.

### Types of Thermal Paste

**Ceramic-based:** Standard, non-conductive, affordable. Good for most builds.

**Metal-based:** Better thermal conductivity but electrically conductive (can short circuits if spilled). Requires careful application.

**Liquid metal:** Highest performance but risky. Conductive, corrosive to aluminum, permanent bonding with some surfaces. Used by enthusiasts and some laptops.

**Pre-applied paste:** Many coolers come with paste pre-applied to the base. Convenient but sometimes lower quality than aftermarket paste.

### How to Apply Thermal Paste

**The correct method:**

1. **Clean surfaces:** Use isopropyl alcohol (90%+) and a lint-free cloth to remove old paste and oils.
2. **Apply a small amount:** A rice grain or small pea-sized dot in the center of the CPU.
3. **Install cooler:** When you mount the cooler, pressure spreads the paste evenly.
4. **Don't over-apply:** Excess paste doesn't improve cooling and can spill onto the motherboard.

**Common mistakes:**
- **Too much paste:** Spills over sides, makes a mess, doesn't improve cooling.
- **Spreading manually:** Introduces air bubbles. Let mounting pressure spread it naturally.
- **Using old, dried-out paste:** Thermal paste degrades over years. Replace every 2-3 years or when remounting coolers.

🎯 **Exam Tip:** Know that thermal paste is essential for proper heat transfer between CPU and cooler. Too little or too much reduces cooling effectiveness.

---

## Fan Configuration and Management

Fans are the workhorses of cooling systems. Proper configuration makes the difference between a cool, quiet system and a hot, loud one.

### Fan Connectors

**3-pin fans:** Voltage-controlled. Speed adjusted by changing voltage (lower voltage = slower speed).

**4-pin PWM fans:** Pulse Width Modulation. Speed controlled via signal, not voltage. More precise, quieter, better for automatic speed curves.

**Motherboard headers:** Typically 4-pin, backward compatible with 3-pin fans.

**PWM advantages:**
- Dynamic speed adjustment based on temperature
- Lower minimum speeds (quieter at idle)
- Better control granularity

### Fan Curves

Modern motherboards allow setting **fan curves**—graphs defining fan speed based on temperature.

**Example curve:**
- **20°C-40°C:** 30% speed (quiet idle)
- **40°C-60°C:** Gradually ramp to 60% speed
- **60°C-80°C:** Ramp to 100% speed

Customize curves in BIOS or software like MSI Dragon Center, ASUS AI Suite, or Fan Control (third-party).

**Aggressive curve:** Fans ramp quickly, prioritizing cooling over noise.

**Quiet curve:** Fans stay low until temperatures are high, prioritizing silence.

### Case Fan Placement

**Standard configuration:**
- **Front:** 2-3 intake fans (120mm or 140mm)
- **Rear:** 1 exhaust fan
- **Top (optional):** 1-2 exhaust fans

**High-performance configuration:**
- **Front:** 3 intake fans
- **Rear:** 1 exhaust fan
- **Top:** 2-3 exhaust fans (especially if using tower CPU cooler or AIO radiator)

**Bottom (rare):** Some cases support bottom intake fans to feed air directly to the GPU.

🎯 **Exam Tip:** Understand basic airflow principles (front/bottom intake, rear/top exhaust) and the purpose of positive vs negative pressure (covered in Lesson 16).

---

## Real-World Scenario: Overheating and Throttling

A customer complains their new gaming PC stutters during gameplay. Performance is great for 5 minutes, then tanks. You investigate.

**Step 1: Check temperatures.** Install HWMonitor. CPU temperature climbs to 95°C within minutes, then performance drops (thermal throttling).

**Step 2: Check cooler installation.** You open the case. The CPU cooler is installed, but when you touch the heatsink, it's barely warm. Heat isn't transferring.

**Step 3: Remove cooler.** You find the protective plastic film still on the cooler's base—the customer forgot to remove it. Thermal paste couldn't contact the CPU.

**Step 4: Remove film, clean surfaces, reapply paste, reinstall cooler.** Temperatures drop to 65°C under load. Performance is stable.

**Lesson learned:** Always remove protective films and verify proper thermal paste application. Overheating is often installation error, not component failure.

---

## Key Exam Tips

🎯 **Wattage calculation:** Add component power draws and add 20-30% headroom. Don't cut it close.

🎯 **80 PLUS ratings:** Higher efficiency = less heat and lower electricity bills. Gold is the sweet spot.

🎯 **Voltage rails:** +3.3V, +5V, and +12V. Modern components primarily use +12V.

🎯 **24-pin motherboard power is mandatory.** CPU power (8-pin) is also required on modern systems.

🎯 **PCIe power connectors:** 6-pin = 75W, 8-pin = 150W. High-end GPUs need multiple connectors.

🎯 **Thermal paste:** Essential for heat transfer. Pea-sized amount, don't over-apply.

🎯 **Modular PSUs:** Fully modular = all cables detachable. Semi-modular = essential cables attached.

🎯 **Air vs liquid cooling:** Air is reliable and affordable; liquid offers better performance but higher cost and complexity.

---

## Key Takeaways

- [ ] PSUs convert AC to DC and provide +3.3V, +5V, and +12V rails
- [ ] Calculate wattage by adding component power draws and adding 20-30% headroom
- [ ] 80 PLUS certification indicates efficiency; Gold is recommended for most builds
- [ ] Higher efficiency means less heat generation and lower electricity costs
- [ ] 24-pin connector provides main motherboard power
- [ ] 8-pin (4+4) connector provides dedicated CPU power
- [ ] PCIe power connectors (6-pin, 8-pin) provide additional power to graphics cards
- [ ] SATA power connectors power drives and peripherals
- [ ] Modular PSUs allow cable customization; non-modular have all cables attached
- [ ] Air cooling uses heatsinks and fans; sufficient for most systems
- [ ] Liquid cooling (AIOs) offers better performance but higher cost
- [ ] Thermal paste fills microscopic gaps between CPU and heatsink for optimal heat transfer
- [ ] Apply pea-sized amount of thermal paste; mounting pressure spreads it
- [ ] 4-pin PWM fans offer better speed control than 3-pin voltage-controlled fans

---

## Check Your Understanding

**1. A system has an Intel i7 CPU (125W), RTX 4070 GPU (200W), motherboard (60W), 16GB RAM (10W), SSD (5W), and fans (15W). What is the minimum recommended PSU wattage?**

<details>
<summary>Show Answer</summary>
<strong>550-650W. Total power draw is 415W; adding 20-30% headroom gives 500-540W minimum, so a 550-650W PSU is appropriate.</strong> Always calculate total component power and add headroom for power spikes, aging components, and future upgrades. Running a PSU near maximum capacity reduces efficiency, increases heat, and shortens lifespan. The sweet spot for PSU efficiency is 50-80% load. For this system, a 600W PSU would run at ~70% load under maximum stress, providing optimal efficiency and longevity while leaving room for minor upgrades like additional drives or RGB components.
</details>

**2. What does 80 PLUS Gold certification mean for a power supply?**

<details>
<summary>Show Answer</summary>
<strong>The PSU is 87-90% efficient at typical loads, converting more input power to usable output power and generating less heat.</strong> At 50% load (the most common operating point), an 80 PLUS Gold PSU is 90% efficient. If components draw 300W, the PSU pulls 333W from the wall, with only 33W lost as heat. A basic 80 PLUS PSU would pull 375W from the wall, wasting 75W as heat. Higher efficiency means lower electricity bills, less heat generation (cooler/quieter operation), and longer PSU lifespan. Gold certification is the sweet spot—significantly better than Bronze but not as expensive as Platinum or Titanium.
</details>

**3. A technician needs to install a high-end graphics card requiring two 8-pin PCIe power connectors. The PSU only has one 8-pin PCIe cable. What should they do?**

<details>
<summary>Show Answer</summary>
<strong>Check if the PSU has additional PCIe power cables (for modular PSUs) or upgrade to a PSU with sufficient PCIe connectors.</strong> High-end GPUs need dedicated power cables—each 8-pin connector delivers 150W. Never use cheap splitters or adapters to convert one cable into two for high-power cards; this can overload the cable, causing overheating, melting, or fire hazards. If the PSU is modular, check if additional PCIe cables are included but not connected. If the PSU is non-modular or truly lacks sufficient connectors, it's undersized for this GPU and should be replaced. Quality PSUs designed for high-end systems include multiple PCIe cables for exactly this reason.
</details>

**4. Which power connector provides main power to the motherboard?**
A) 8-pin EPS  
B) 24-pin ATX  
C) 6-pin PCIe  
D) 15-pin SATA

<details>
<summary>Show Answer</summary>
<strong>B) 24-pin ATX</strong> is the main motherboard power connector. It provides +3.3V, +5V, and +12V to the motherboard, powering the chipset, RAM, PCIe slots (low power), and integrated peripherals. Without this connector, the system won't boot. The 8-pin EPS (Option A) is the CPU power connector, necessary for modern systems but separate from main board power. 6-pin PCIe (Option C) powers graphics cards, and 15-pin SATA (Option D) powers storage drives. Some older motherboards used 20-pin connectors; modern PSUs often include 20+4 pin connectors for backward compatibility.
</details>

**5. What is the purpose of thermal paste when installing a CPU cooler?**

<details>
<summary>Show Answer</summary>
<strong>Thermal paste fills microscopic gaps between the CPU and heatsink, improving heat transfer by eliminating air pockets.</strong> CPU and heatsink surfaces appear smooth but have microscopic imperfections. Air trapped in these gaps acts as insulation, preventing efficient heat transfer. Thermal paste (thermal compound or TIM) has high thermal conductivity and fills these gaps, creating better contact. Without thermal paste, CPU temperatures can be 10-20°C higher, causing thermal throttling or damage. Apply a pea-sized amount in the center of the CPU—mounting pressure spreads it evenly. Too much paste doesn't improve cooling and can spill over edges. Replace thermal paste every 2-3 years or when remounting coolers, as it degrades over time.
</details>

**6. What is the difference between a 3-pin and 4-pin fan connector?**

<details>
<summary>Show Answer</summary>
<strong>3-pin fans use voltage control (speed adjusted by changing voltage); 4-pin PWM fans use signal-based control for more precise speed adjustment.</strong> PWM (Pulse Width Modulation) fans can operate at lower minimum speeds, provide smoother speed transitions, and respond more accurately to temperature changes. Motherboards send a signal varying the on/off duty cycle, controlling speed without changing voltage. 3-pin fans require voltage reduction to slow down, which is less precise and limits minimum speed. Most modern motherboards have 4-pin headers that are backward compatible with 3-pin fans, but 3-pin fans won't benefit from PWM control. For quiet builds with dynamic fan curves, 4-pin PWM fans are strongly recommended.
</details>

**7. A system is overheating despite a properly installed cooler. What should be checked first?**

<details>
<summary>Show Answer</summary>
<strong>Verify thermal paste was applied correctly and protective films were removed from the cooler base.</strong> The most common cause of overheating despite proper cooler installation is forgetting to remove the protective plastic film on the heatsink base—thermal paste can't make contact through plastic. Also check that thermal paste was actually applied (easy to forget) and not dried out from an old tube. Verify the cooler's fan is spinning and plugged into a motherboard header. Check case airflow—intake and exhaust fans should be working. Monitor temperatures with software like HWMonitor or Core Temp. If the CPU hits 90-100°C under load and throttles, it's definitely a cooling problem. Remove the cooler, clean with isopropyl alcohol, reapply fresh thermal paste, and reinstall.
</details>

**8. What is the advantage of a fully modular power supply over a non-modular PSU?**

<details>
<summary>Show Answer</summary>
<strong>All cables are detachable, allowing you to connect only the cables needed, improving cable management and airflow.</strong> With non-modular PSUs, all cables are permanently attached—even unused cables must be tucked away, creating clutter that blocks airflow and makes builds messy. Fully modular PSUs let you attach only necessary cables: motherboard power, CPU power, GPU power, and however many SATA/Molex connectors you need. This results in cleaner interiors, better airflow, and easier installation in compact cases. Semi-modular PSUs are a compromise—essential cables (motherboard and CPU) are attached permanently, while optional cables are detachable. Fully modular costs more but is worth it for high-end builds, show systems with tempered glass, or small form factor builds.
</details>

**9. When should liquid cooling be chosen over air cooling?**

<details>
<summary>Show Answer</summary>
<strong>When running high-TDP CPUs (i9, Ryzen 9), overclocking, or when air cooler height restrictions exist in compact cases.</strong> Liquid cooling (AIOs) offers better cooling performance than most air coolers, allowing higher sustained loads and overclocking headroom. It's also advantageous in small form factor builds where tower air coolers don't fit due to height restrictions—a 240mm or 280mm AIO radiator can often mount to the case top or front where a 165mm tower cooler wouldn't fit. Liquid cooling is quieter under load since radiator fans can spin slower than air cooler fans while maintaining temperatures. However, for mainstream CPUs (i5, Ryzen 5) at stock speeds, quality air coolers provide excellent, reliable cooling at lower cost with zero risk of leaks or pump failure.
</details>

**10. A power supply has a 20+4 pin connector. What does this design allow?**

<details>
<summary>Show Answer</summary>
<strong>Compatibility with both 20-pin (older) and 24-pin (modern) motherboards by splitting the connector into two pieces.</strong> The 20+4 pin design separates the 24-pin connector into a 20-pin main section and a 4-pin supplemental section that clips alongside it. For modern 24-pin motherboards, connect both pieces together as one unit. For older 20-pin motherboards, use only the 20-pin section. This backward compatibility is useful when working with legacy systems or upgrading old builds. Similarly, 4+4 pin CPU power connectors split into two 4-pin sections, allowing compatibility with both 4-pin (older) and 8-pin (modern) CPU power headers on motherboards. These split designs are standard on quality PSUs to maximize compatibility.
</details>

---

## Before Moving to Lesson 18

Make sure you can:

- [ ] Calculate appropriate PSU wattage for a given component list
- [ ] Explain 80 PLUS efficiency ratings and their benefits
- [ ] Identify power connectors (24-pin ATX, 8-pin CPU, PCIe, SATA)
- [ ] Distinguish between modular, semi-modular, and non-modular PSUs
- [ ] Understand when air cooling is sufficient vs when liquid cooling is advantageous
- [ ] Apply thermal paste correctly (pea-sized amount, let mounting pressure spread it)
- [ ] Recognize 3-pin vs 4-pin fan connectors and their differences

**Study strategy:** When you next upgrade or build a PC, pay special attention to power and cooling. Look at the PSU label—what's the wattage? Efficiency rating? Count the connectors. When installing a CPU cooler, practice thermal paste application (use an old CPU or flat surface to practice if you're nervous). Watch cooler installation videos to see proper technique. Understanding power and cooling prevents most hardware problems before they start.

---

## Coming Up in Lesson 18

Next, we're diving deep into **Motherboards: Components and Features**. You'll learn about motherboard form factors (reinforcing Lesson 16), chipsets, CPU sockets, RAM slots, expansion slots (PCIe generations), storage interfaces (SATA, M.2, NVMe), external connectors, internal headers, BIOS/UEFI, and CMOS batteries.

The motherboard is the central nervous system of your computer—every component connects to it. Understanding motherboard architecture is fundamental to building, upgrading, and troubleshooting systems.

See you in Lesson 18!

---

*"There are two ways to write error-free programs; only the third one works."* — Alan Perlis

---

# ✅ LESSON 17 COMPLETE!

**Progress:** 17 of 60 lessons complete (28.3%) 🎯

You've mastered power supplies and cooling—the life support systems of any computer. You can now calculate power requirements, select appropriate PSUs, identify connectors, understand efficiency ratings, and choose cooling solutions. These skills prevent the most common hardware failures and ensure systems run reliably. Excellent work!
