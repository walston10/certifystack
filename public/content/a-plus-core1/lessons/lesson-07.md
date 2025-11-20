# Lesson 7: Network Cable Types

**Estimated Time:** 25-30 minutes  
**Domain:** Networking (Domain 2.0)  
**Exam Objectives Covered:** 2.1 - Compare and contrast Transmission Control Protocol (TCP) and User Datagram Protocol (UDP) ports, protocols, and their purposes (cable infrastructure portion)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Identify** copper cable categories (Cat 5e, Cat 6, Cat 6a, Cat 8) and their speed/distance specifications
- **Compare** twisted pair cable types (UTP vs STP) and their interference characteristics
- **Differentiate** between T568A and T568B wiring standards and cable types (straight-through vs crossover)
- **Explain** coaxial cable types (RG-6 vs RG-59) and their applications
- **Distinguish** fiber optic cable types (single-mode vs multimode) and appropriate use cases
- **Recognize** common cable tools and their purposes (crimpers, testers, punch-down tools, tone generators)

---

## Video Resources

- [Professor Messer - Network Cables](https://www.youtube.com/watch?v=_NX99ad2FUA) (11:42)
- [PowerCert - Ethernet Cables Explained](https://www.youtube.com/watch?v=_NX99ad2FUA) (8:27)
- [NetworkChuck - How to Make Ethernet Cables](https://www.youtube.com/watch?v=lullzS740wI) (14:55)
- [PowerCert - Fiber Optic Cables](https://www.youtube.com/watch?v=0MwMkBET_5I) (7:33)

---

## Introduction

Ever walked into a server room and seen dozens of cables running everywhere—blue cables, yellow cables, thick cables, thin cables—and wondered what makes them different? Or tried connecting two computers directly with a cable only to discover they won't communicate? Welcome to the world of network cabling, where using the wrong cable type or standard can mean the difference between gigabit speeds and complete failure.

Think of network cables like highways connecting cities. You wouldn't use a two-lane country road for heavy freight traffic between major cities—you'd use a multi-lane interstate highway. Similarly, Cat 5e cable works for basic internet browsing, but if you're transferring massive 4K video files or running a data center, you need Cat 6a or fiber optic. Understanding cable types, their capabilities, and their limitations is fundamental to IT infrastructure.

The A+ exam loves testing cable specifications—you need to know maximum speeds, maximum distances, and when to use each cable type. You'll also face scenario questions like "A company needs to connect two buildings 300 meters apart with 10 Gbps connectivity—what cable should they use?" (Answer: single-mode fiber, because copper maxes out at 100 meters.) Let's master these concepts.

---

## Copper Cabling: Twisted Pair

### Cable Categories (Cat Ratings)

**Twisted pair** cable consists of four pairs of copper wires twisted together. The twisting reduces electromagnetic interference (EMI) and crosstalk. Different "categories" (Cat ratings) indicate performance levels.

| Cable Type | Max Speed | Max Distance | Frequency | Common Use |
|-----------|-----------|--------------|-----------|------------|
| **Cat 5e** | 1 Gbps | 100 meters | 100 MHz | Home/small business networks |
| **Cat 6** | 1 Gbps (10 Gbps at 55m) | 100m (55m for 10G) | 250 MHz | Business networks, PoE |
| **Cat 6a** | 10 Gbps | 100 meters | 500 MHz | Data centers, 10G networks |
| **Cat 7** | 10 Gbps | 100 meters | 600 MHz | Shielded, industrial environments |
| **Cat 8** | 40 Gbps | 30 meters | 2000 MHz | Data centers, server-to-switch |

**Detailed breakdown:**

**Cat 5e (Enhanced):**
- "e" stands for "enhanced" (improvement over original Cat 5)
- **1 Gbps (1000BASE-T)** up to **100 meters**
- Most common in residential and small business installations
- Supports PoE (Power over Ethernet) - 15.4W
- Backward compatible with older standards
- Cost-effective for most home/office needs

**Cat 6:**
- **1 Gbps at full 100 meters** or **10 Gbps at 55 meters**
- Thicker cable with tighter twists (less crosstalk)
- Better for PoE+ applications (up to 30W)
- Internal plastic spline separator (in some cables) reduces crosstalk
- Slightly more expensive than Cat 5e
- Good middle-ground choice

**Cat 6a (Augmented):**
- **10 Gbps at full 100 meters** (full distance 10G support)
- 500 MHz frequency (double Cat 6)
- Thicker and less flexible than Cat 6
- Better shielding (often includes internal foil)
- Supports PoE++ (up to 100W)
- Standard for modern data centers and enterprise networks

**Cat 7:**
- Fully **shielded** cable (S/FTP - Shielded/Foiled Twisted Pair)
- Each pair has individual shielding plus overall shield
- Requires special connectors (GG45 or TERA), not standard RJ-45
- Rarely used in practice (Cat 6a more common)
- Better for industrial environments with high EMI

**Cat 8:**
- Newest standard for **short-range, very high-speed** connections
- **40 Gbps** but only up to **30 meters**
- **2000 MHz** frequency
- Used for data center top-of-rack switches to servers
- Expensive and specialized
- Not for horizontal runs (building wiring)

🎯 **Exam Tip:** For the A+ exam, focus on **Cat 5e, Cat 6, and Cat 6a**. Know these speed/distance combinations:
- **Cat 5e:** 1 Gbps / 100m
- **Cat 6:** 1 Gbps / 100m (or 10 Gbps / 55m)
- **Cat 6a:** 10 Gbps / 100m

💡 **Memory Trick - Cable Speeds (GIGANTEN):**
- **G**igabit (1 Gbps) → Cat 5e, Cat 6
- **I**ndustrial grade → Cat 7
- **G**igabit up to 100m → Cat 5e standard
- **A**ugmented → Cat 6a (10 Gbps full distance)
- **N**ewer cables handle more megahertz
- **T**en gigabit → Cat 6a, Cat 7, Cat 8
- **E**nhanced → Cat 5e
- **N**ever forget the 100m limit (except Cat 8 = 30m)

### UTP vs STP (Shielded vs Unshielded)

**UTP (Unshielded Twisted Pair):**
- No additional shielding around cable pairs
- Relies only on wire twisting for interference reduction
- Lighter and more flexible
- Less expensive
- Sufficient for most environments (homes, offices)
- Standard for Cat 5e and Cat 6

**STP (Shielded Twisted Pair):**
- Metal foil or braided shield around cable pairs
- Better protection against EMI (electromagnetic interference)
- Better protection against RFI (radio frequency interference)
- More expensive and less flexible
- Required in high-EMI environments:
  - Near electrical equipment (motors, generators)
  - Industrial facilities
  - Data centers with many cables in close proximity
- Requires proper grounding (shield must be grounded at both ends)

**When to use STP:**
- Running cable near fluorescent lights
- Industrial environments with heavy machinery
- Parallel runs with power cables
- External outdoor installations
- High-security environments (shielding reduces signal leakage)

⚠️ **Important:** Shielded cable is only effective if properly grounded. Improper grounding can actually make interference WORSE by creating a ground loop.

### T568A vs T568B Wiring Standards

Network cables have 8 wires arranged in 4 pairs. The wiring standard determines which wires go to which pins in the RJ-45 connector.

**T568A standard (pin order):**
1. White/Green
2. Green
3. White/Orange
4. Blue
5. White/Blue
6. Orange
7. White/Brown
8. Brown

**T568B standard (pin order):**
1. White/Orange
2. Orange
3. White/Green
4. Blue
5. White/Blue
6. Green
7. White/Brown
8. Brown

**Key difference:** T568A and T568B **swap the green and orange pairs**. That's it. Everything else is identical.

**Which should you use?**
- **T568B** is more common in the United States
- **T568A** is preferred in government installations and some international standards
- **Either works fine** as long as you're consistent throughout your network
- **Never mix standards in a single cable** (one end T568A, other end T568B = crossover cable)

🎯 **Exam Tip:** You don't need to memorize the exact pin order, but know that **T568A and T568B swap green and orange pairs**. Mixing them creates a crossover cable.

### Straight-Through vs Crossover Cables

**Straight-through cable:**
- **Same standard on both ends** (T568A—T568A or T568B—T568B)
- Used for **unlike devices:** computer to switch, switch to router, computer to router
- This is the standard cable type—99% of cables are straight-through
- Transmit pins on one end connect to receive pins on the other device

**Crossover cable:**
- **Different standards on each end** (T568A on one end, T568B on the other)
- Used for **like devices:** computer to computer, switch to switch, router to router
- Manually swaps transmit and receive pairs
- Less common today due to Auto-MDIX

**Visual identification:**
Place both ends of the cable side-by-side and look at the wires through the clear RJ-45 connector:
- **Straight-through:** Wire colors match on both ends
- **Crossover:** Orange and green pairs are swapped

**Auto-MDIX (Modern Solution):**
Modern network equipment has **Auto-MDIX (Automatic Medium-Dependent Interface Crossover)** which automatically detects and adjusts for cable type. You can use straight-through cables for everything and the equipment will sort it out. However, older equipment still requires the correct cable type.

💡 **Memory Trick - Cable Types (UNUSUAL):**
- **U**nlike devices → Straight-through
- **N**ormal cable for most situations
- **U**sually what you grab first
- **S**ame devices → Crossover
- **U**se crossover when connecting like to like
- **A**uto-MDIX makes crossover cables mostly obsolete
- **L**ike to like needs crossover (without Auto-MDIX)

### Coaxial Cable

**Coaxial cable** has a single copper conductor core surrounded by insulation, metal shielding, and outer jacket. It's the cable used for cable TV and cable internet.

**RG-6:**
- Thicker cable (18 AWG center conductor)
- Better for **long runs** (lower signal loss)
- Used for:
  - Cable TV (CATV)
  - Satellite TV
  - Cable internet modems
  - Video surveillance cameras (analog)
- **Frequency:** up to 1 GHz
- **Standard for modern installations**

**RG-59:**
- Thinner cable (20 AWG center conductor)
- Better for **short runs** (under 50 feet)
- Used for:
  - Short analog video runs
  - Older CCTV installations
  - Audio/video equipment connections
- **Legacy standard** - RG-6 has replaced it in most cases

**Connectors:**
- **F-connector:** Threaded connector for TV and cable modems
- **BNC (Bayonet Neill-Concelman):** Twist-lock connector for professional video

🎯 **Exam Tip:** **RG-6 = modern, long runs, cable TV/internet. RG-59 = legacy, short runs.** If asked which to use for new cable TV installation, always choose RG-6.

**Why coaxial is less common for networking:**
- Ethernet over twisted pair (Cat 5e/6/6a) is cheaper and easier
- Coaxial is still used for cable internet (from ISP to modem) but internal networking uses Ethernet
- Legacy 10BASE2 and 10BASE5 Ethernet used coaxial but are completely obsolete

---

## Fiber Optic Cabling

**Fiber optic cable** uses pulses of light through glass or plastic strands instead of electrical signals through copper. This enables much longer distances and higher speeds without electromagnetic interference.

### Single-Mode Fiber (SMF)

**Single-mode fiber** uses a very small core (8-10 microns - smaller than human hair) that allows only one light path (mode) through the fiber.

**Characteristics:**
- **Core size:** 8-10 microns
- **Light source:** Laser (focused, single wavelength)
- **Distance:** Up to **40 kilometers** or more (without amplification)
- **Speed:** 10 Gbps, 40 Gbps, 100 Gbps, and beyond
- **Cost:** More expensive (cable and equipment)
- **Color:** Usually **yellow** jacket
- **Use cases:**
  - Long-distance telecommunications
  - Connecting buildings (campus networks)
  - Internet backbone connections
  - Metropolitan area networks (MANs)
  - Anything over 550 meters

**Why "single-mode"?**
The extremely narrow core allows only a single light path straight down the fiber. This prevents modal dispersion (different light paths arriving at different times), enabling extremely long distances.

### Multi-Mode Fiber (MMF)

**Multi-mode fiber** uses a larger core (50 or 62.5 microns) that allows multiple light paths (modes) through the fiber simultaneously.

**Characteristics:**
- **Core size:** 50 or 62.5 microns
- **Light source:** LED (less focused, multiple wavelengths)
- **Distance:** Up to **550 meters** (for 10 Gbps)
- **Speed:** 1 Gbps, 10 Gbps, 40 Gbps (shorter distances)
- **Cost:** Less expensive than single-mode
- **Color:** Usually **orange** (OM1/OM2) or **aqua** (OM3/OM4) jacket
- **Use cases:**
  - Within data centers
  - Building-to-building on campus (short distances)
  - LAN backbone connections
  - Anything under 550 meters

**OM ratings (Optical Mode):**
- **OM1:** 62.5 micron core, 1 Gbps up to 300m
- **OM2:** 50 micron core, 1 Gbps up to 600m
- **OM3:** 50 micron core, 10 Gbps up to 300m (aqua)
- **OM4:** 50 micron core, 10 Gbps up to 550m (aqua)
- **OM5:** 50 micron core, supports wavelength division multiplexing

**Why "multi-mode"?**
The larger core allows multiple light rays (modes) to travel through the fiber at different angles. However, these modes travel slightly different distances, arriving at different times (modal dispersion), which limits maximum distance.

### Single-Mode vs Multi-Mode Comparison

| Feature | Single-Mode (SMF) | Multi-Mode (MMF) |
|---------|------------------|------------------|
| Core Size | 8-10 microns | 50-62.5 microns |
| Light Source | Laser | LED |
| Distance | 40+ km | Up to 550m |
| Cost | Higher | Lower |
| Typical Color | Yellow | Orange or Aqua |
| Bandwidth | Higher | Lower |
| Use Case | Long distance, campus backbone | Data center, building backbone |

**Analogy:** Think of single-mode fiber like a laser pointer shooting straight down a narrow tube—the light goes far with minimal spreading. Multi-mode fiber is like a flashlight in a wider tube—the light bounces around and spreads out, limiting how far it can effectively travel.

🎯 **Exam Tip:** 
- **Single-mode = long distance (kilometers)** = yellow cable
- **Multi-mode = short distance (hundreds of meters)** = orange/aqua cable
- Scenario: "Connect two buildings 2 km apart" → **Single-mode fiber**
- Scenario: "Connect server racks within data center" → **Multi-mode fiber**

### Fiber Optic Connectors

**LC (Lucent Connector):**
- Small form factor connector
- Push-pull latching mechanism
- Most common in modern installations
- Used for both single-mode and multi-mode
- Often comes in duplex (two fibers side-by-side)

**SC (Subscriber Connector):**
- Larger square connector
- Push-pull design
- Common in older installations and telecommunications
- Used for both single-mode and multi-mode
- Simplex (single fiber) or duplex

**ST (Straight Tip):**
- Round connector with bayonet twist-lock
- Legacy connector (still seen in older installations)
- Primarily used for multi-mode
- Being replaced by LC connectors

**MTRJ (Mechanical Transfer Registered Jack):**
- Small form factor, looks like RJ-45
- Duplex (two fibers in one connector)
- Less common than LC
- Used in some patch panels

💡 **Memory Trick - Fiber Connectors (LCST):**
- **L**C - **L**ittle connector, modern standard
- **C**ommon everywhere now
- **S**C - **S**quare connector, push-pull
- **T**wist-lock - **ST** (bayonet style)

### Wavelengths

Fiber optic uses different wavelengths (colors) of light:

- **850 nm** - Multi-mode fiber (shorter distance, LED source)
- **1310 nm** - Single-mode fiber (medium distance, laser)
- **1550 nm** - Single-mode fiber (longest distance, laser)

Higher wavelengths (1550 nm) travel farther because there's less attenuation (signal loss) in the fiber at those wavelengths.

---

## Ethernet Standards

Ethernet standards specify both the cable type and maximum speed/distance.

**Naming convention: `[Speed]BASE-[Media Type]`**
- **Speed:** 10 = 10 Mbps, 100 = 100 Mbps, 1000 = 1 Gbps, 10G = 10 Gbps
- **BASE:** Baseband (entire bandwidth used for single signal)
- **Media Type:** T = Twisted Pair, S/L = Short/Long fiber

### Copper Ethernet Standards

| Standard | Speed | Cable Type | Max Distance | Common Name |
|----------|-------|-----------|--------------|-------------|
| **10BASE-T** | 10 Mbps | Cat 3 | 100 meters | Legacy Ethernet |
| **100BASE-TX** | 100 Mbps | Cat 5/5e | 100 meters | Fast Ethernet |
| **1000BASE-T** | 1 Gbps | Cat 5e/6 | 100 meters | Gigabit Ethernet |
| **10GBASE-T** | 10 Gbps | Cat 6a | 100 meters | 10-Gigabit Ethernet |

🎯 **Exam Tip:** **All copper Ethernet standards max out at 100 meters.** This is the single most important distance limitation to remember. If you need to go farther than 100m, you must use fiber optic or add a switch/repeater.

### Fiber Ethernet Standards

| Standard | Speed | Fiber Type | Max Distance | Wavelength |
|----------|-------|-----------|--------------|------------|
| **1000BASE-SX** | 1 Gbps | Multi-mode | 550 meters | 850 nm |
| **1000BASE-LX** | 1 Gbps | Single-mode | 10 km | 1310 nm |
| **10GBASE-SR** | 10 Gbps | Multi-mode | 400 meters | 850 nm |
| **10GBASE-LR** | 10 Gbps | Single-mode | 10 km | 1310 nm |

**Letter meanings:**
- **S** = Short wavelength (850 nm) = Multi-mode
- **L** = Long wavelength (1310 nm) = Single-mode
- **R** = Range (distance variant)

💡 **Memory Trick - Fiber Standards:**
- **S** = Short distance = Multi-mode
- **L** = Long distance = Single-mode
- If it says "SR" or "SX" → Multi-mode (hundreds of meters)
- If it says "LR" or "LX" → Single-mode (kilometers)

---

## Cable Tools

### Crimper

**Cable crimper** attaches RJ-45 connectors to twisted pair cables.

**Process:**
1. Strip outer jacket (~1 inch)
2. Untwist pairs
3. Arrange wires in correct order (T568A or T568B)
4. Trim wires to equal length
5. Insert into RJ-45 connector
6. Insert connector into crimper
7. Squeeze handle firmly
8. Test cable with cable tester

**Important:** The crimper has multiple slots—make sure to use the correct size for RJ-45 (8P8C) connectors.

### Cable Tester

**Cable tester** verifies proper wiring and connectivity.

**Tests:**
- **Continuity:** All wires properly connected
- **Wire mapping:** Correct pins connected (detects swapped wires)
- **Opens:** Broken wires inside cable
- **Shorts:** Wires touching that shouldn't be
- **Split pairs:** Wires from different pairs mistakenly paired
- **Reversed pairs:** Transmit and receive swapped

**Types:**
- **Basic tester:** LED lights indicate pass/fail per wire
- **Advanced tester:** Tests for length, signal quality, certifies cable meets category standards

### Punch-Down Tool

**Punch-down tool** terminates twisted pair cable into punch-down blocks (like 110 blocks or patch panels).

**How it works:**
1. Strip outer jacket (don't strip individual wires)
2. Place wire in correct slot on punch-down block
3. Press punch-down tool firmly
4. Tool cuts wire to length and makes connection simultaneously

**Types of punch-down blocks:**
- **66 block:** Legacy telephone systems (still used)
- **110 block:** Modern standard for data networking and telephony
- **Krone block:** European standard
- **Patch panel:** Front-facing jack, back punch-down connections

### Tone Generator and Probe (Toner)

**Tone generator** (toner) sends a signal through a cable. The **probe** (inductive amplifier) detects the signal and makes an audible tone.

**Use case:** Identifying which physical cable is which in a bundle.

**Process:**
1. Attach tone generator to one end of cable
2. Wave probe near cables on other end
3. Probe emits loud tone when near the cable carrying the signal
4. Label the identified cable

**Why it's needed:** In a network closet with hundreds of cables, you need to trace specific cables from patch panel to wall jack or from switch to workstation.

### Other Cable Tools

**Wire stripper:**
- Removes outer jacket without damaging internal wires
- Adjustable blade for different cable sizes

**Cable tester (certifier):**
- Professional-grade tester
- Certifies cable meets category standards (Cat 5e, Cat 6, etc.)
- Tests for attenuation, crosstalk, return loss
- Generates certification reports

**Fiber inspection microscope:**
- Examines fiber end-faces for dirt, scratches
- Dirty fiber connector = poor performance
- Critical for fiber installations

**Fusion splicer:**
- Permanently joins two fiber optic cables
- Uses electric arc to melt and fuse fiber cores together
- Used for long-distance installations

💡 **Memory Trick - Cable Tools (COTTON):**
- **C**rimper - attaches RJ-45 connectors
- **O**pen/short tester - **C**able tester
- **T**one generator and probe
- **T**erminating tool - punch-down
- **O**ther tools (strippers, certifiers)
- **N**eed all of these for cable work

---

## Plenum vs Non-Plenum Cable

**Plenum spaces** are air circulation spaces in buildings (above drop ceilings, below raised floors) used for HVAC airflow.

**Plenum-rated cable (CMP):**
- Fire-resistant jacket (usually FEP or LSZH)
- Low-smoke when burning
- Meets fire safety codes for plenum spaces
- More expensive
- Required by building code in plenum spaces

**Non-plenum cable (CMR - Riser, CM - General):**
- Standard PVC jacket
- Produces toxic smoke when burning
- Cannot be installed in plenum spaces
- Less expensive
- Fine for walls, conduit, non-plenum areas

**Why it matters:**
If cable in plenum space catches fire, smoke travels through HVAC system to entire building. Plenum-rated cable minimizes this danger.

🎯 **Exam Tip:** **Plenum-rated cable is required in air circulation spaces** (above drop ceilings, under raised floors). Non-plenum cable cannot be used in these spaces due to fire code.

---

## Key Exam Tips

🎯 **All twisted pair Ethernet is limited to 100 meters** (except Cat 8 = 30 meters).

🎯 **Cat 5e = 1 Gbps, Cat 6 = 1-10 Gbps, Cat 6a = 10 Gbps** at full 100m.

🎯 **T568A and T568B swap orange and green pairs.** Same standard on both ends = straight-through. Different standards = crossover.

🎯 **Straight-through cable connects unlike devices** (PC to switch). Crossover connects like devices (PC to PC), but Auto-MDIX makes this mostly obsolete.

🎯 **RG-6 is modern coaxial** for cable TV/internet. **RG-59 is legacy** for short runs.

🎯 **Single-mode fiber = long distance** (yellow cable, laser, 40+ km). **Multi-mode fiber = short distance** (orange/aqua, LED, up to 550m).

🎯 **Fiber standards:** "S" variants (SX, SR) = short/multi-mode. "L" variants (LX, LR) = long/single-mode.

🎯 **LC connector** is the modern fiber standard. **ST** is legacy (twist-lock). **SC** is square push-pull.

🎯 **Plenum-rated cable required in air circulation spaces** above drop ceilings and under raised floors.

💡 **Copper = 100 meters. Fiber = Much farther (multi-mode 550m, single-mode 40+ km).**

---

## Key Takeaways

- [ ] **Cat 5e supports 1 Gbps** up to 100 meters and is the minimum for modern networks
- [ ] **Cat 6 supports 10 Gbps** but only at distances up to 55 meters (1 Gbps at 100m)
- [ ] **Cat 6a supports 10 Gbps** at the full 100-meter distance and is the data center standard
- [ ] **UTP (unshielded) is standard** for most environments; **STP (shielded)** is for high-EMI areas
- [ ] **T568A and T568B are wiring standards** that swap orange and green pairs
- [ ] **Straight-through cables** (same standard both ends) connect unlike devices; **crossover cables** (different standards) connect like devices
- [ ] **Auto-MDIX automatically detects** cable type, making crossover cables largely obsolete
- [ ] **RG-6 coaxial is the modern standard** for cable TV and internet; RG-59 is legacy for short runs
- [ ] **Single-mode fiber uses laser** and small core (8-10 microns) for long distances up to 40+ km
- [ ] **Multi-mode fiber uses LED** and larger core (50-62.5 microns) for shorter distances up to 550m
- [ ] **All copper Ethernet is limited to 100 meters**; fiber extends far beyond this
- [ ] **LC connector is the modern fiber standard**; ST is legacy twist-lock; SC is square push-pull
- [ ] **Plenum-rated cable is required** in air circulation spaces due to fire safety codes

---

## Check Your Understanding

**1. A company needs to run network cable 150 meters between two buildings. They want 1 Gbps connectivity. What cable type should they use?**

<details>
<summary>Show Answer</summary>
<strong>Single-mode or multi-mode fiber optic cable—twisted pair copper cannot exceed 100 meters.</strong> At 150 meters, copper Ethernet (Cat 5e, 6, 6a) won't work because all twisted pair standards max out at 100 meters. For 1 Gbps at 150 meters, both single-mode fiber (1000BASE-LX, up to 10 km) and multi-mode fiber (1000BASE-SX, up to 550m) would work. Multi-mode would be more cost-effective for this short inter-building connection. The only alternatives would be: (1) add a switch or repeater at the 100m mark (extending to 200m total), or (2) use wireless bridge between buildings.
</details>

**2. What's the difference between T568A and T568B wiring standards?**

<details>
<summary>Show Answer</summary>
<strong>T568A and T568B swap the position of the orange and green wire pairs—all other wires remain in the same positions.</strong> Specifically, pins 1-2 and pins 3-6 are swapped between the two standards. Both standards work equally well for Ethernet; the important thing is consistency. Using the same standard on both ends of a cable creates a straight-through cable (for connecting unlike devices). Using T568A on one end and T568B on the other creates a crossover cable (for connecting like devices). Most networks in the United States use T568B exclusively.
</details>

**3. Why would you choose Cat 6a over Cat 6 for a new data center installation?**

<details>
<summary>Show Answer</summary>
<strong>Cat 6a supports 10 Gbps at the full 100-meter distance, while Cat 6 only supports 10 Gbps up to 55 meters (drops to 1 Gbps beyond that).</strong> In data centers, you need flexibility to place equipment anywhere within the space, which could easily exceed 55 meters when accounting for cable routing through raised floors and around obstacles. Cat 6a guarantees 10 Gbps performance at any location within the 100-meter limit. Additionally, Cat 6a has better alien crosstalk protection (AXT) which matters in data centers where hundreds of cables run in parallel. The extra cost of Cat 6a is justified by eliminating distance restrictions for 10G equipment.
</details>

**4. A cable has T568B wiring on one end and T568A on the other end. What type of cable is this, and when would you use it?**

<details>
<summary>Show Answer</summary>
<strong>This is a crossover cable, used to connect like devices (computer to computer, switch to switch, router to router).</strong> The different wiring standards on each end swap the transmit and receive pairs so that transmit pins on one device connect to receive pins on the other device, and vice versa. This is necessary when connecting two devices that both transmit on the same pins (like two computers). However, modern network equipment has Auto-MDIX which automatically detects and adjusts for cable type, making crossover cables largely unnecessary in modern networks. You can now use straight-through cables for everything.
</details>

**5. What's the maximum distance for Cat 5e cable running 1 Gbps Ethernet?**

<details>
<summary>Show Answer</summary>
<strong>100 meters (328 feet)—this is the maximum distance for ALL twisted pair Ethernet standards.</strong> This is one of the most fundamental limitations in networking. Beyond 100 meters, signal degradation becomes too severe and the connection will fail or experience high error rates. The only exception is Cat 8, which maxes out at 30 meters due to its extremely high frequency (2000 MHz). If you need to exceed 100 meters, your options are: (1) use fiber optic cable (multi-mode up to 550m, single-mode up to 40+ km), (2) add a switch or repeater at the 100-meter mark to regenerate the signal, or (3) use a wireless bridge.
</details>

**6. When would you choose single-mode fiber over multi-mode fiber?**

<details>
<summary>Show Answer</summary>
<strong>Single-mode fiber should be chosen for distances over 550 meters (like connecting buildings across a campus) or when you need maximum future bandwidth capacity.</strong> Multi-mode fiber is limited to 550 meters for 10 Gbps connections (less for higher speeds), while single-mode can reach 40+ kilometers. Single-mode also supports higher bandwidths (40G, 100G, 400G) at longer distances than multi-mode. However, single-mode requires more expensive laser-based transceivers instead of LED-based transceivers. For distances under 550 meters (like within a data center or single building), multi-mode is more cost-effective. Remember: multi-mode = short/cheap, single-mode = long/expensive.
</details>

**7. What color jacket typically indicates single-mode fiber, and what color indicates multi-mode fiber?**

<details>
<summary>Show Answer</summary>
<strong>Single-mode fiber typically has a yellow jacket. Multi-mode fiber typically has an orange jacket (OM1/OM2) or aqua/turquoise jacket (OM3/OM4/OM5).</strong> These color codes are industry standards that help technicians quickly identify fiber types. It's critical not to mix connector types or use the wrong equipment—single-mode equipment won't work properly with multi-mode fiber and vice versa. The color coding prevents mistakes during installation. However, these are conventions, not absolute rules—always verify cable specifications rather than relying solely on color, especially with older installations or international cables.
</details>

**8. What tool would you use to identify a specific cable among a bundle of 50 cables in a network closet?**

<details>
<summary>Show Answer</summary>
<strong>Tone generator and probe (toner) - attach the tone generator to one end and use the probe to locate the cable on the other end.</strong> The tone generator sends an audio frequency signal through the cable, and the probe (inductive amplifier) detects this signal and makes an audible tone when waved near the cable. This lets you trace cables without disconnecting everything or following the cable's physical path through walls and ceilings. The probe doesn't need direct electrical contact—it detects the electromagnetic field around the cable. This is essential for cable tracing, identifying unlabeled cables, or finding the other end of a cable in a different room or floor.
</details>

**9. Why must plenum-rated cable be used in ceiling spaces above drop tiles?**

<details>
<summary>Show Answer</summary>
<strong>Plenum spaces are used for HVAC air circulation—if regular cable catches fire there, toxic smoke would spread through the entire building via the air system.</strong> Plenum-rated cable (CMP - Communications Plenum) has fire-resistant jackets made from FEP (fluorinated ethylene polymer) or LSZH (low-smoke zero-halogen) materials that produce minimal smoke and no toxic fumes when burning. Regular cable with PVC jackets produces thick black smoke and releases harmful chemicals like hydrochloric acid when burning. Building fire codes require plenum-rated cable in any air-handling space (above drop ceilings, under raised floors, in HVAC ducts). Non-plenum cable is fine in walls, conduit, or non-air-circulation areas and costs significantly less.
</details>

**10. What does the "BASE" in "1000BASE-T" mean?**

<details>
<summary>Show Answer</summary>
<strong>BASE stands for baseband, meaning the entire bandwidth of the cable is used for a single digital signal (no frequency division).</strong> This contrasts with broadband (like cable TV) where the cable's bandwidth is divided into multiple channels carrying different signals simultaneously. In baseband Ethernet, when a device transmits, it uses the full bandwidth of the cable for that transmission. The naming convention is [Speed]BASE-[Media]: "1000" = 1000 Mbps (1 Gbps), "BASE" = baseband signaling, "T" = twisted pair copper. Other examples: 100BASE-TX (100 Mbps baseband over twisted pair), 10GBASE-SR (10 Gbps baseband over short-range/multi-mode fiber).
</details>

---

## Before Moving to Lesson 8: Network Devices and Infrastructure

Make sure you can:

- [ ] Identify cable categories (Cat 5e, Cat 6, Cat 6a) and their specifications
- [ ] Explain the difference between UTP and STP cabling
- [ ] Describe T568A and T568B wiring standards
- [ ] Differentiate between straight-through and crossover cables
- [ ] Compare single-mode and multi-mode fiber (distance, cost, use cases)
- [ ] Recognize fiber connectors (LC, SC, ST)
- [ ] Explain the 100-meter copper distance limitation
- [ ] Describe common cable tools and their purposes

**Study strategy:** Create a comparison chart for cable types with their speeds, distances, and use cases. Practice identifying cables by their connectors and jacket colors. If possible, watch crimping demonstrations on YouTube and understand the wire color order for T568A and T568B (though you don't need to memorize exact pin positions for the exam).

---

## Coming Up in Lesson 8: Network Devices and Infrastructure

Now that you understand the cables connecting network devices, it's time to learn about the devices themselves. In Lesson 8, we'll explore routers (Layer 3), switches (Layer 2), hubs (legacy Layer 1), modems, access points, patch panels, firewalls, and PoE (Power over Ethernet). You'll learn how each device functions, where they fit in network topology, and when to use managed vs unmanaged switches. We're building from physical cables up to the networking equipment that makes communication possible!

---

*"The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life." — Bill Gates*

---

# ✅ LESSON 7 COMPLETE!

**Progress:** 7 of 60 lessons complete (11.7%) 🎯

Excellent work! You've mastered network cable types, wiring standards, and cabling tools. The 100-meter copper limit and fiber optic capabilities are crucial exam topics—keep these numbers fresh in your mind. Next up: the network devices these cables connect to!
