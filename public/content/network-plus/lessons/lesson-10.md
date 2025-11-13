# Lesson 10: Ethernet Standards and Cabling

**Time:** 25-30 minutes  
**Domain:** 2.0 Network Infrastructure (20% of exam)  
**Exam Objectives:** 2.1, 2.2 - Compare physical interface and cabling types

---

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:

- Identify different twisted pair cable categories and their speeds/distances
- Distinguish between UTP and STP cabling
- Explain T568A and T568B wiring standards
- Identify when to use straight-through vs crossover cables
- Compare single-mode and multi-mode fiber optic cables
- Recognize common fiber connectors (LC, SC, ST, MTRJ)
- Understand Ethernet standards from 10BASE-T to 10GBASE-T
- Explain plenum vs non-plenum rated cable

---

## 📹 Video Resources

**Watch these videos to reinforce the concepts:**

1. **Powercert - Network Cables** 
   https://www.youtube.com/watch?v=_NX99ad2FUA

2. **Messer - Copper Cables**
   https://www.youtube.com/watch?v=_NX99ad2FUA

3. **Messer - Fiber Optic Cables**  
   https://www.youtube.com/watch?v=lullzS740wI

4. **Network Chuck - Kids Make Ethernet Cables**  
   https://www.youtube.com/watch?v=y8h5qY3zwic

---

## 💡 Introduction: Why Cabling Matters

Think of network cables as the **roads** in a city. You can have the fastest cars (computers), the smartest traffic lights (switches), and the best GPS (routing), but if your roads are full of potholes, too narrow, or go to the wrong places—nothing works.

In networking, **physical layer issues account for 50% or more of all network problems**. A $2 bad cable can bring down a $50,000 network. That's why understanding cabling is critical.

**Real-World Scenario:**  
Imagine troubleshooting a user who complains about "slow internet." You check everything—their computer, the switch, the router—all perfect. Finally, you test the cable: it's a Cat5 cable trying to run 10 Gbps. The cable was the bottleneck all along.

**Exam Relevance:**  
The Network+ exam **loves** cabling questions. Expect multiple questions on:
- Cable types and their max speeds/distances
- T568A vs T568B wiring
- Fiber connector types
- Choosing appropriate cables for scenarios

Let's dive in! 🚀

---

## 🔌 Copper Cabling: Twisted Pair

### What is Twisted Pair Cable?

**Twisted pair cabling** is the most common type of network cable. It consists of **8 wires (4 pairs)** that are twisted together inside an outer jacket.

**Why twisted?**  
The twisting **reduces electromagnetic interference (EMI)** and **crosstalk** (when one wire's signal interferes with another). The more twists per inch, the better the performance.

### UTP vs STP

**UTP (Unshielded Twisted Pair)**
- Most common type
- No additional shielding
- Cheaper and easier to work with
- Good for most office environments
- Susceptible to EMI in high-interference areas

**STP (Shielded Twisted Pair)**
- Has foil or braided shielding around wire pairs
- Better protection against EMI/RFI
- More expensive
- Harder to terminate
- Used in industrial environments, near heavy machinery

🎯 **Exam Tip:** Unless the scenario mentions heavy interference, assume UTP.

---

## 📊 Twisted Pair Cable Categories

### The Cable Category Hierarchy

```
Category    Max Speed       Max Distance    Common Use
--------    ---------       ------------    ----------
Cat 5e      1 Gbps          100m            Home/small office (most common)
Cat 6       1 Gbps          100m            Office networks
            10 Gbps         55m             Short data center runs
Cat 6a      10 Gbps         100m            Data centers (standard)
Cat 7       10 Gbps         100m            High-end installations (shielded)
Cat 8       40 Gbps         30m             Bleeding edge data centers
```

### Category Details

**Cat 5e (Category 5 Enhanced)**
- Speed: Up to **1 Gbps** (Gigabit Ethernet)
- Distance: **100 meters** (328 feet)
- Frequency: 100 MHz
- **Most popular cable** for home and small business
- "e" = enhanced (better crosstalk performance than original Cat 5)
- **If you see "Cat 5e" without context, this is the standard office cable**

**Cat 6 (Category 6)**
- Speed: **1 Gbps** at 100m OR **10 Gbps** at 55m
- Distance: Up to 100m (for 1 Gbps)
- Frequency: 250 MHz
- Thicker than Cat 5e (tighter twists, plastic divider)
- Good for future-proofing installations
- More expensive than Cat 5e

**Cat 6a (Category 6 Augmented)**
- Speed: **10 Gbps**
- Distance: **100 meters** (full distance!)
- Frequency: 500 MHz
- **Standard for data centers**
- Thicker and less flexible than Cat 6
- Shielded to reduce interference

**Cat 7**
- Speed: **10 Gbps**
- Distance: 100m
- Frequency: 600 MHz
- **Always shielded (S/FTP)**
- Rare in practice (Cat 6a is more common)
- Uses GG45 or TERA connectors (not RJ45)

**Cat 8**
- Speed: **40 Gbps**
- Distance: **30 meters only!**
- Frequency: 2000 MHz
- **Newest, fastest, shortest**
- Used for top-of-rack switches in data centers
- Very expensive, limited deployment

### 💡 Real-World Example

**Scenario:** You're wiring a new office building.
- **Office PCs:** Cat 5e (1 Gbps is plenty)
- **Server room uplinks:** Cat 6a (10 Gbps for high traffic)
- **Between server racks (5m apart):** Cat 8 (40 Gbps ultra-high speed)

✅ **Key Concept:** Choose the cable based on **speed requirements** and **distance**. Don't over-specify (Cat 8 everywhere) or under-specify (Cat 5e in data center).

---

## 🎨 Wiring Standards: T568A and T568B

### What Are Wiring Standards?

Wiring standards define **which colored wires go in which positions** in the RJ45 connector. Think of it like a recipe—you need the ingredients in the right order.

### T568B Standard (Most Common)

**T568B Pin Order:**
```
Pin  Wire Color
---  ----------
1    Orange/White (Orange with white stripe)
2    Orange (Solid orange)
3    Green/White
4    Blue (Solid blue)
5    Blue/White
6    Green (Solid green)
7    Brown/White
8    Brown (Solid brown)
```

**Mnemonic:** "**O**range **O**ut **G**reen **B**lue-**B**lue **G**reen **B**rown **B**rown"

**Visual Representation:**
```
    RJ45 Connector (Front View)
    ┌─────────────────────────┐
    │  1   2   3   4   5   6   7   8  │
    │ O/W  O  G/W  B  B/W  G  Br/W Br │
    └─────────────────────────┘
```

### T568A Standard (Less Common)

**T568A Pin Order:**
```
Pin  Wire Color
---  ----------
1    Green/White
2    Green
3    Orange/White
4    Blue
5    Blue/White
6    Orange
7    Brown/White
8    Brown
```

**Key Difference:**  
T568A swaps the green and orange pairs (pins 1-2 swap with pins 3-6).

🎯 **Exam Tip:** **T568B is the industry standard** in the US. Unless specified otherwise, use T568B. Government installations sometimes use T568A.

### Straight-Through vs Crossover Cables

**Straight-Through Cable**
- **Both ends use the same standard** (T568B on both ends)
- Used for: **PC → Switch, Switch → Router**
- **Most common cable type** (90% of cables)
- Connects different device types

**Crossover Cable**
- **One end T568A, one end T568B**
- Used for: **Switch → Switch, PC → PC, Router → Router**
- Connects same device types
- **Rarely needed anymore** (modern devices use Auto-MDIX)

⚠️ **Common Mistake:** Students memorize crossover cables but forget that **modern devices auto-detect** and adjust automatically (called Auto-MDIX). You only need crossover cables for **old equipment without Auto-MDIX**.

### 💡 Real-World Example

**Scenario:** Your friend gives you an unlabeled Ethernet cable. How do you know if it's straight-through or crossover?

**Answer:**  
1. Hold both RJ45 ends side-by-side
2. Look at the wire colors through the clear plastic
3. If colors match → Straight-through
4. If orange and green are swapped → Crossover

---

## 🌐 Ethernet Standards Naming

### Understanding the Naming Convention

Ethernet standards follow this format: **[Speed]BASE-[Media]**

- **Speed:** 10, 100, 1000, 10G (in Mbps or Gbps)
- **BASE:** Baseband signaling (only Ethernet, no other signals)
- **Media:** T (twisted pair), S/L (fiber short/long), etc.

### Common Ethernet Standards

```
Standard       Speed        Cable Type       Max Distance
--------       -----        ----------       ------------
10BASE-T       10 Mbps      Cat 3/5          100m
100BASE-TX     100 Mbps     Cat 5/5e         100m (Fast Ethernet)
1000BASE-T     1 Gbps       Cat 5e/6         100m (Gigabit)
10GBASE-T      10 Gbps      Cat 6a           100m (10 Gigabit)
```

**Legacy (Rare Today):**
- **10BASE2:** Thin coaxial (BNC connectors) - obsolete
- **10BASE5:** Thick coaxial (vampire taps) - obsolete

🎯 **Exam Tip:** Know that **1000BASE-T requires Cat 5e minimum** and **10GBASE-T requires Cat 6a minimum**.

---

## 🔆 Fiber Optic Cabling

### Why Fiber?

**Fiber optic cables use light instead of electricity** to transmit data. Benefits:
- **Immune to EMI/RFI** (no electrical interference)
- **Much longer distances** (kilometers vs 100m for copper)
- **Higher bandwidth** (up to 100 Gbps+)
- **More secure** (can't be tapped easily)
- **Lighter and thinner** than copper

**Drawbacks:**
- More expensive
- Harder to terminate (requires fusion splicing or special connectors)
- More fragile (can break if bent too sharply)

### Single-Mode vs Multi-Mode Fiber

**Single-Mode Fiber (SMF)**
- **Core diameter:** 9 microns (very thin)
- **Light source:** Laser (expensive)
- **Distance:** Up to **100 kilometers+**
- **Wavelengths:** 1310nm or 1550nm (infrared)
- **Color:** Usually **yellow jacket**
- **Cost:** More expensive
- **Use case:** Long-haul, ISP backbone, building-to-building

**Multi-Mode Fiber (MMF)**
- **Core diameter:** 50 or 62.5 microns (thicker)
- **Light source:** LED (cheaper)
- **Distance:** Up to **2 kilometers** max
- **Wavelengths:** 850nm (near infrared)
- **Color:** Usually **orange or aqua jacket**
- **Cost:** Less expensive
- **Use case:** Data centers, campus networks, building-internal

✅ **Key Concept:**  
- **Single-mode = Single light path = Longer distance = Yellow**
- **Multi-mode = Multiple light paths = Shorter distance = Orange**

### 💡 Memory Trick

**"S"ingle-mode = "S"mall core = "S"uper long distance**  
**"M"ulti-mode = "M"edium core = "M"oderate distance**

---

## 🔌 Fiber Optic Connectors

Fiber cables require precise connectors to ensure light transmission. Here are the most common:

### Common Fiber Connectors

**LC (Lucent Connector / Little Connector)**
- **Most common modern connector**
- Small form factor (SFF)
- Push-pull latching
- Used in: Switches, routers, transceivers
- Looks like: Tiny RJ45
- **Memorize:** "LC = Little Connector"

**SC (Subscriber Connector / Square Connector)**
- Push-pull connector
- Square shape
- Larger than LC
- Used in: Older equipment, telecom
- Easy to connect/disconnect
- **Memorize:** "SC = Square Connector"

**ST (Straight Tip)**
- Bayonet twist-lock connector
- Round connector
- Older standard (still in use)
- Twist to lock, twist to unlock
- Used in: Legacy systems, some industrial
- **Memorize:** "ST = Straight Tip, twist like a BNC"

**MTRJ (Mechanical Transfer Registered Jack)**
- Small form factor
- **Combines two fibers in one connector**
- Looks like small RJ45
- Less common than LC
- Used in: Compact installations

🎯 **Exam Tip:** **LC is the most common modern connector.** If no specific connector is mentioned, assume LC for data center equipment.

### Connector Comparison Table

```
Connector    Shape       Locking      Use Case
---------    -----       -------      --------
LC           Small       Push-Pull    Modern switches/routers (most common)
SC           Square      Push-Pull    Telecom, older networks
ST           Round       Twist-Lock   Legacy systems
MTRJ         Small       Push-Pull    Compact dual-fiber connections
```

---

## 📡 Fiber Ethernet Standards

### Fiber Naming Convention

Fiber standards use: **[Speed]BASE-[S or L][X or R]**

- **S:** Short wavelength (850nm, multi-mode)
- **L:** Long wavelength (1310nm, single-mode)
- **X:** Original standard
- **R:** Revised standard

### Common Fiber Standards

```
Standard       Speed    Fiber Type    Max Distance
--------       -----    ----------    ------------
1000BASE-SX    1 Gbps   Multi-mode    220-550m (850nm)
1000BASE-LX    1 Gbps   Single-mode   5-10 km (1310nm)
10GBASE-SR     10 Gbps  Multi-mode    300-400m (850nm)
10GBASE-LR     10 Gbps  Single-mode   10 km (1310nm)
```

**Breakdown:**
- **1000BASE-SX:** Gigabit, Short wavelength, Multi-mode
- **1000BASE-LX:** Gigabit, Long wavelength, Single-mode
- **10GBASE-SR:** 10 Gigabit, Short range, Multi-mode
- **10GBASE-LR:** 10 Gigabit, Long range, Single-mode

🎯 **Exam Tip:** Remember "**S = Short distance (multi-mode), L = Long distance (single-mode)**"

---

## 🔄 Transceivers and Media Converters

### SFP Modules

**SFP (Small Form-Factor Pluggable)**
- Hot-swappable transceiver module
- Plugs into switch/router
- Converts electrical signal → optical signal
- Speeds: Up to 1 Gbps
- Common in: Gigabit networks

**SFP+ (Enhanced SFP)**
- Same size as SFP
- Speeds: Up to 10 Gbps
- Used in: 10 Gigabit networks
- Backward compatible with SFP slots (at lower speed)

**QSFP (Quad SFP)**
- Four channels in one module
- Speeds: Up to 40 Gbps (4x10G) or 100 Gbps
- Used in: High-speed data center interconnects

### Media Converters

A **media converter** changes one type of media to another:
- **Fiber → Copper** (most common)
- Copper → Fiber
- Single-mode → Multi-mode

**Use case:** Connecting a fiber backbone to copper Ethernet devices.

**Example:**  
ISP provides fiber to your building → Media converter changes fiber to copper → Your copper switches connect to the media converter.

---

## 🏢 Coaxial Cable (Brief Overview)

While **coaxial cable is largely obsolete for networking**, it's still used for cable modems and TV signals.

### Types of Coaxial Cable

**RG-6 (Radio Guide 6)**
- **Most common for cable modems**
- Thicker, better shielding
- Lower signal loss
- Used for: Cable internet, satellite TV

**RG-59**
- Thinner, cheaper
- Higher signal loss
- Used for: Short runs, CCTV cameras
- **Not recommended for internet**

🎯 **Exam Tip:** If you see coaxial, **RG-6 is the modern standard** for cable internet. RG-59 is legacy.

---

## 🔥 Plenum vs Non-Plenum Cable

### What is Plenum?

**Plenum spaces** are areas used for air circulation in HVAC systems (above drop ceilings, below raised floors). These areas have **high airflow**.

### Cable Fire Ratings

**Plenum-Rated Cable (CMP)**
- Fire-resistant outer jacket
- Low-smoke when burned
- **Required by fire code** for plenum spaces
- More expensive
- Jacket material: FEP (fluorinated ethylene polymer)

**Non-Plenum Cable (PVC)**
- Standard PVC jacket
- **Cannot be used in plenum spaces**
- Cheaper
- Releases toxic smoke when burned
- Used in: Non-plenum areas, conduit, walls

✅ **Key Concept:** If cables run through air circulation areas (above ceiling tiles), you **must use plenum-rated cable** by fire code. This prevents toxic smoke from spreading through the building's air system in a fire.

⚠️ **Common Mistake:** Using cheaper PVC cable in plenum spaces is a **fire code violation** and can result in fines during building inspections.

---

## 🛠️ Troubleshooting Cable Issues

### Common Cable Problems

**Physical Damage**
- Bent cables (kinks)
- Crushed cables (heavy objects)
- Cut/nicked cables
- Solution: Replace cable

**Wrong Cable Type**
- Cat 5 used for 10 Gbps (max 1 Gbps)
- Fiber type mismatch (SMF ↔ MMF)
- Solution: Use correct cable category

**Wrong Wiring Standard**
- T568A on one end, T568B on other (unintentionally)
- Split pairs (wrong wire order)
- Solution: Re-terminate cable correctly

**Distance Too Long**
- Copper > 100m
- Fiber exceeds spec
- Solution: Add repeater or use different cable type

**Interference (EMI/RFI)**
- Cables near power lines, motors, fluorescent lights
- Solution: Use STP or reroute cable

---

## 🎯 Key Exam Tips

**Memorize These:**

1. **Cat 5e:** 1 Gbps at 100m (most common)
2. **Cat 6:** 1 Gbps at 100m OR 10 Gbps at 55m
3. **Cat 6a:** 10 Gbps at 100m (data center standard)
4. **Cat 8:** 40 Gbps at 30m (newest, shortest)
5. **Copper max distance:** 100 meters (328 feet)
6. **T568B is standard** in US (orange pair first)
7. **Straight-through:** Different devices (PC→Switch)
8. **Crossover:** Same devices (Switch→Switch) - rare with Auto-MDIX
9. **Single-mode:** Yellow, laser, long distance (km)
10. **Multi-mode:** Orange, LED, short distance (up to 2km)
11. **LC connector:** Most common modern fiber connector
12. **Plenum cable required** in air circulation spaces

**Test-Taking Strategy:**
- If the question mentions **distance over 100m**, think **fiber**
- If it mentions **high interference**, think **STP or fiber**
- If it mentions **10 Gbps for full 100m**, think **Cat 6a**
- If it mentions **speed without distance**, assume **100m for copper**

---

## 🎯 Key Takeaways

- [ ] **Twisted pair cables** have 8 wires in 4 twisted pairs to reduce interference
- [ ] **Cat 5e is the standard** for most offices (1 Gbps, 100m)
- [ ] **Cat 6a is the data center standard** (10 Gbps, 100m)
- [ ] **T568B is the most common wiring standard** (orange pair first)
- [ ] **Straight-through cables** connect different device types
- [ ] **Single-mode fiber uses lasers** and works for very long distances
- [ ] **Multi-mode fiber uses LEDs** and works for shorter distances
- [ ] **LC is the most common fiber connector** today
- [ ] **RG-6 coaxial** is used for cable modems
- [ ] **Plenum-rated cable is required** in air circulation spaces
- [ ] **Copper max distance is 100 meters**, fiber can go kilometers
- [ ] **Auto-MDIX eliminates the need** for crossover cables on modern equipment

---

## ✅ Check Your Understanding

Test yourself before moving on. Expand each question to see the answer.

<details>
<summary>1. What is the maximum distance for Cat 6a cable running 10 Gbps?</summary>
<strong>Answer: 100 meters (328 feet)</strong>

Cat 6a is specifically designed to support 10 Gbps for the full 100-meter Ethernet standard distance. Regular Cat 6 can only do 10 Gbps up to 55 meters.
</details>

<details>
<summary>2. You need to connect two switches together with copper cable. What type of cable do you need?</summary>
<strong>Answer: Straight-through cable (if modern switches), or crossover (if old switches without Auto-MDIX)</strong>

Modern switches have Auto-MDIX which automatically adjusts, so straight-through works. Older switches required crossover cables for switch-to-switch connections. Exam tip: Assume modern equipment unless stated otherwise.
</details>

<details>
<summary>3. What color jacket is typically used for single-mode fiber?</summary>
<strong>Answer: Yellow</strong>

Single-mode fiber is usually jacketed in yellow, while multi-mode is orange or aqua. This color coding helps technicians quickly identify cable types.
</details>

<details>
<summary>4. Which wiring standard has the orange pair on pins 1 and 2?</summary>
<strong>Answer: T568B</strong>

T568B starts with orange/white (pin 1) and orange (pin 2). T568A starts with green/white and green. T568B is the most common standard in the US.
</details>

<details>
<summary>5. What is the most common fiber connector used in modern data centers?</summary>
<strong>Answer: LC (Lucent Connector)</strong>

LC connectors are small form-factor, easy to use with push-pull latching, and the current industry standard for switches, routers, and transceivers.
</details>

<details>
<summary>6. Your office has cables running above the drop ceiling through the air circulation system. What type of cable is required by fire code?</summary>
<strong>Answer: Plenum-rated cable (CMP)</strong>

Plenum spaces (air circulation areas) require plenum-rated cable that is fire-resistant and produces minimal toxic smoke when burned. Using standard PVC cable is a fire code violation.
</details>

<details>
<summary>7. What Ethernet standard would you use for a 5-kilometer connection between two buildings?</summary>
<strong>Answer: 1000BASE-LX or 10GBASE-LR (single-mode fiber)</strong>

This distance requires single-mode fiber. 1000BASE-LX supports 1 Gbps up to 10km, while 10GBASE-LR supports 10 Gbps up to 10km. Copper and multi-mode fiber cannot reach 5km.
</details>

<details>
<summary>8. What is the difference between SFP and SFP+?</summary>
<strong>Answer: Speed - SFP supports up to 1 Gbps, SFP+ supports up to 10 Gbps</strong>

Both are small form-factor pluggable transceivers with the same physical size, but SFP+ is enhanced to handle 10 Gigabit Ethernet speeds. SFP+ modules will work in SFP slots at reduced 1 Gbps speeds.
</details>

---

## 🎓 Before Moving to the Next Lesson

Make sure you can:

- [ ] Explain the difference between UTP and STP cables
- [ ] List the speeds and distances for Cat 5e, Cat 6, Cat 6a, and Cat 8
- [ ] Describe the T568B wiring standard (pin order)
- [ ] Know when to use straight-through vs crossover cables
- [ ] Explain the difference between single-mode and multi-mode fiber
- [ ] Identify the four common fiber connectors (LC, SC, ST, MTRJ)
- [ ] Recognize Ethernet standards (1000BASE-T, 10GBASE-SR, etc.)
- [ ] Understand when plenum-rated cable is required

**Study Tip:** Create flashcards for all the cable categories and their speeds. This is guaranteed exam content.

**Hands-On Recommendation:** If possible, get a crimping kit (~$30) and practice making your own Cat 5e cables. Muscle memory helps on the exam!

---

## 📚 Coming Up Next

**Lesson 11: Switches, VLANs, and Trunking**

Now that you understand the **physical layer** (cables), we'll move up to the **data link layer** and explore how switches use MAC addresses to forward traffic, how VLANs segment networks logically, and how trunking carries multiple VLANs on one cable.

Get ready to learn about:
- MAC address tables and switch learning
- VLANs (Virtual LANs) for network segmentation
- 802.1Q tagging and trunk ports
- Spanning Tree Protocol (loop prevention)
- Inter-VLAN routing

---

## 🎉 Lesson 10 Complete!

**Congratulations!** You've completed Lesson 10 of 30.

You now understand:
✅ Copper cabling types and categories  
✅ Wiring standards and termination  
✅ Fiber optic cables and connectors  
✅ Ethernet standards and naming conventions  
✅ Cable selection for different scenarios  

**Progress:** 10/30 lessons complete (33% of Network+ material)

**Next Steps:**
1. Complete the **CableMatchingActivity** to reinforce cable specs
2. Review **Lesson 10 flashcards** for memorization
3. Take the **Lesson 10 quiz** to test your knowledge
4. (Optional) Try the **hands-on cable crimping lab**

Keep up the great work! 🚀

---

*Remember: The best way to learn cabling is to actually handle the cables. Visit your local networking supply store or ask your IT department if you can see real cables, connectors, and tools!*