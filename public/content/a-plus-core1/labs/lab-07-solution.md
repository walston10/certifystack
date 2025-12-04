# Lab 7: Network Cable Types - Solution Guide

**Note to Students:** Only review this AFTER completing your own work! You'll learn more by figuring it out yourself first.

---

## Section 1: Concept Check - Answers

**1. What is the difference between T568A and T568B wiring standards, and when would you use each?**

**Answer:** T568A and T568B define the order of wire colors at the RJ-45 connector. The only difference is that the orange and green pairs are swapped:

- **T568B:** White/Orange, Orange, White/Green, Blue, White/Blue, Green, White/Brown, Brown
- **T568A:** White/Green, Green, White/Orange, Blue, White/Blue, Orange, White/Brown, Brown

**When to use each:**
- **T568B** is the commercial standard, used in most business installations
- **T568A** is required by federal government contracts and some residential installations
- The most important thing is **consistency** - use the same standard throughout an installation

Both standards work identically; they just define different color positions. Using T568B on both ends creates a straight-through cable. Using T568A on one end and T568B on the other creates a crossover cable.

---

**2. Why is Cat 6a cable preferred over Cat 5e for a 10 Gbps network installation?**

**Answer:** Cat 6a is designed to support 10 Gbps at the full 100-meter distance, while Cat 5e maxes out at 1 Gbps.

Key differences:
- **Cat 5e:** 1 Gbps max, 100 MHz bandwidth
- **Cat 6a:** 10 Gbps at 100 meters, 500 MHz bandwidth

Cat 6 (non-a) can technically do 10 Gbps but only up to 55 meters. Cat 6a has improved shielding and tighter specifications that reduce crosstalk at higher frequencies, making it reliable for 10 Gbps across the full 100-meter standard distance.

For future-proofing, Cat 6a is the minimum recommended for new installations.

---

**3. Explain the difference between single-mode and multi-mode fiber optic cable.**

**Answer:**

| Feature | Single-mode (SMF) | Multi-mode (MMF) |
|---------|-------------------|------------------|
| Core diameter | 8-10 microns | 50-62.5 microns |
| Light source | Laser | LED |
| Distance | Up to 100+ km | Up to 2 km (OM4) |
| Cost | Higher (equipment) | Lower |
| Use case | Long-distance, telecom | Data centers, LANs |
| Jacket color | Yellow (typically) | Orange or aqua |

Single-mode uses a tiny core that allows only one light path (mode), enabling longer distances with less signal degradation. Multi-mode's larger core allows multiple light paths, causing modal dispersion that limits distance but uses cheaper LED transmitters.

---

**4. What is the purpose of twisting the wire pairs inside a twisted pair cable?**

**Answer:** Twisting reduces electromagnetic interference (EMI) in two ways:

1. **Cancellation:** Each wire in the pair carries the signal in opposite polarity. External interference affects both wires equally, and the receiving equipment subtracts the two signals, canceling out the noise.

2. **Reduced crosstalk:** The twist rate varies between pairs, which prevents adjacent pairs from creating sustained interference patterns (crosstalk).

The more twists per inch, the better the noise rejection. This is why higher-category cables (Cat 6, Cat 6a) have tighter twist rates than Cat 5e. Untwisting too much during termination degrades performance.

---

**5. When would you use a crossover cable instead of a straight-through cable?**

**Answer:** Crossover cables connect **like devices** directly:
- Computer to computer
- Switch to switch
- Router to router

The crossover swaps transmit and receive pairs so both devices can communicate.

**Modern reality:** Most current equipment has **Auto-MDI-X**, which automatically detects and adjusts for cable type. This means crossover cables are rarely needed today - a straight-through cable works for almost everything.

However, crossover knowledge is still tested on the A+ exam and useful for:
- Older equipment without Auto-MDI-X
- Troubleshooting when Auto-MDI-X fails
- Understanding networking fundamentals

---

## Section 2: Activity Solutions

### Activity A: Cable Identification Reference

**Reading cable jacket printing:**

Common markings include:
- **Category:** "CAT5E", "CAT6", "CAT6A"
- **Shielding:** "UTP" (unshielded), "STP" (shielded), "F/UTP" (foil shielded)
- **Rating:** "CMR" (riser), "CMP" (plenum), "CM" (general)
- **AWG:** Wire gauge (usually 23-24 AWG)
- **Verification marks:** "ETL VERIFIED", "UL LISTED"

**RJ-45 connector details:**
- 8 pins (8P8C - 8 Position 8 Contact)
- Clear plastic for visual wire verification
- Locking clip for secure connection
- Strain relief boot protects cable entry

---

### Activity B: Cable Category Comparison - Complete

| Specification | Cat 5e | Cat 6 | Cat 6a | Cat 7 | Cat 8 |
|---------------|--------|-------|--------|-------|-------|
| Max speed | 1 Gbps | 10 Gbps | 10 Gbps | 10 Gbps | 25/40 Gbps |
| Max bandwidth | 100 MHz | 250 MHz | 500 MHz | 600 MHz | 2000 MHz |
| Max distance | 100m | 55m (10G) / 100m (1G) | 100m | 100m | 30m |
| Shielding | UTP | UTP or STP | Usually shielded | Always shielded (S/FTP) | Always shielded |
| Connector | RJ-45 | RJ-45 | RJ-45 | GG45 or TERA | RJ-45 |
| Common use | Legacy networks | Standard office | High-speed office | Data centers | Data centers |

**Distance vs Speed:**

| Speed | Cat 6 | Cat 6a |
|-------|-------|--------|
| 1 Gbps | 100m | 100m |
| 10 Gbps | 55m | 100m |

**Why distance affects speed:**

At higher frequencies, signals attenuate (weaken) faster and are more susceptible to crosstalk. The tighter specifications of Cat 6a reduce these issues, maintaining signal integrity over the full 100m.

---

### Activity C: T568 Wiring Standards - Complete

**T568B (Commercial Standard):**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | White/Orange | 2 |
| 2 | Orange | 2 |
| 3 | White/Green | 3 |
| 4 | Blue | 1 |
| 5 | White/Blue | 1 |
| 6 | Green | 3 |
| 7 | White/Brown | 4 |
| 8 | Brown | 4 |

**T568A (Government Standard):**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | White/Green | 3 |
| 2 | Green | 3 |
| 3 | White/Orange | 2 |
| 4 | Blue | 1 |
| 5 | White/Blue | 1 |
| 6 | Orange | 2 |
| 7 | White/Brown | 4 |
| 8 | Brown | 4 |

**Key difference:** Orange pair (pins 1,2) and Green pair (pins 3,6) are swapped.

**Memory trick for T568B:** "Orange Goes Before Green" - OBG

**Straight-through vs Crossover:**

| Cable Type | End 1 | End 2 | Use Case |
|------------|-------|-------|----------|
| Straight-through | T568B | T568B | Device to switch, device to router |
| Crossover | T568B | T568A | Device to device, switch to switch |

---

### Activity D: Fiber Optic Reference - Complete

**Single-mode vs Multi-mode:**

| Characteristic | Single-mode (SMF) | Multi-mode (MMF) |
|----------------|-------------------|------------------|
| Core diameter | 8-10 microns | 50 or 62.5 microns |
| Light source | Laser | LED (or VCSEL) |
| Distance capability | Up to 100+ km | 300m - 2 km |
| Cost | Lower cable, higher equipment | Higher cable, lower equipment |
| Jacket color | Yellow | Orange (OM1/OM2), Aqua (OM3/OM4), Lime (OM5) |
| Common use | WAN, telecom, long runs | LAN, data centers, short runs |

**Fiber connectors:**

| Connector | Shape/Description | Where Used |
|-----------|-------------------|------------|
| LC | Small form factor, latch clip, most common today | High-density applications, SFP modules |
| SC | Square, push-pull, "Subscriber Connector" | Data centers, older installations |
| ST | Round, bayonet twist lock, "Straight Tip" | Legacy installations, multimode |
| MTRJ | Small, RJ-style clip, two fibers | Horizontal cabling |
| FC | Round, screw-on, "Ferrule Connector" | High-vibration environments |

**Fiber wavelengths:**

| Wavelength | Fiber Type | Typical Distance |
|------------|------------|------------------|
| 850 nm | Multi-mode | Short (300m - 550m) |
| 1310 nm | Single-mode or Multi-mode | Medium (up to 10 km) |
| 1550 nm | Single-mode | Long (up to 100+ km) |

---

### Activity E: Cable Faults Reference

**Fault definitions:**

| Fault | Description | Cause |
|-------|-------------|-------|
| Open | Wire not making contact | Broken wire, incomplete termination |
| Short | Two wires touching | Damaged insulation, over-crimping |
| Miswire | Wrong pin position | Incorrect termination order |
| Reversed pair | Both wires of pair swapped | Pair in wrong position |
| Split pair | One wire from two different pairs | Wires not kept as pairs |
| Crossed pair | Transmit and receive swapped | Made crossover instead of straight |

**Testing tools:**

| Tool | What It Tests | Approximate Cost |
|------|---------------|------------------|
| Basic cable tester | Continuity, wire mapping | $20-50 |
| Tone generator/probe | Cable tracing, identification | $30-80 |
| TDR | Distance to fault, cable length | $100-500 |
| Cable certifier | Full specification compliance | $2,000-15,000 |
| Loopback plug | Port/NIC functionality | $5-20 |

**Cable tester LED interpretation:**

| LED Pattern | Meaning |
|-------------|---------|
| All 8 LEDs light sequentially (1-8) | Good straight-through cable |
| LEDs light but pairs crossed (1↔3, 2↔6) | Crossover cable |
| Some LEDs don't light | Open wire on those pins |
| Two LEDs light together | Short between those pins |

---

### Activity F: Coaxial Reference

**Coaxial comparison:**

| Specification | RG-59 | RG-6 |
|---------------|-------|------|
| Core diameter | 20-23 AWG | 18 AWG |
| Typical use | CCTV, short runs | Cable TV, satellite, broadband |
| Max frequency | ~1 GHz | ~3 GHz |
| Suitable for HD? | Marginal | Yes |

RG-6 has a larger core and better shielding, making it the standard for modern cable/satellite TV and broadband internet.

**Coaxial connectors:**

| Connector | Description | Where Used |
|-----------|-------------|------------|
| F-type | Screw-on, center conductor exposed | Cable TV, satellite, modems |
| BNC | Bayonet twist-lock | CCTV, professional video, legacy networks |

**Twinaxial (Twinax):**

Twinax has two inner conductors (like coax but with two cores). It's used primarily in data centers for short-distance, high-speed connections between servers and switches (10-40 Gbps). SFP+ and QSFP+ direct-attach cables often use twinax.

---

### Activity G: Plenum/Riser Ratings - Complete

**1. What is a plenum space?**

A plenum is an enclosed space used for air circulation in HVAC systems. Common examples include the space above drop ceilings or below raised floors when used for air return.

**2. Why do plenum spaces require special cable?**

If a fire occurs, the HVAC system can spread toxic smoke and flames throughout the building via the plenum space. Plenum-rated cables have fire-resistant jackets that don't produce toxic smoke when burned.

**3. PVC vs Plenum-rated:**

| Characteristic | PVC (CM/CMR) | Plenum-rated (CMP) |
|----------------|--------------|---------------------|
| Fire behavior | Burns, may drip | Self-extinguishing |
| Smoke/toxicity | Toxic smoke | Low smoke, low toxicity |
| Cost | Lower | Higher (often 2-3x) |
| Code requirement | Regular spaces | Above drop ceiling, HVAC paths |

**4. What does "riser-rated" mean?**

Riser-rated (CMR) cable is designed for vertical runs between floors. It's more fire-resistant than general-purpose (CM) but less than plenum (CMP). It prevents fire from traveling up through cable pathways between floors.

**5. Cable rating for plenum/HVAC space:**

**CMP (plenum-rated)** - Required whenever cable passes through any space used for air handling.

**Rating hierarchy:** CMP > CMR > CM > CMX (outdoor)

You can always use a higher-rated cable in place of a lower one (plenum cable can go anywhere), but not vice versa.

---

## Tier 2 Solutions

### Activity I: Termination Tips

**Common termination mistakes:**

| Mistake | Result | Prevention |
|---------|--------|------------|
| Untwisting too much | Signal degradation | Keep twist within 1/2" of connector |
| Wires not fully inserted | Open connections | Push until wires touch front of connector |
| Wrong wire order | Miswire | Double-check before crimping |
| Jacket too short | Weak strain relief | Jacket should enter connector body |
| Jacket too long | Can't see wires | About 1/2" stripped length |
| Uneven wire trim | Some wires not reaching pins | Cut all wires evenly before inserting |

**Good crimp checklist:**
- [ ] Jacket seated inside connector (visible through back)
- [ ] All 8 wires visible at connector front
- [ ] Wires in correct order (T568B usually)
- [ ] Locking tab properly engaged
- [ ] Crimp firm (contacts pressed into wires)

---

### Activity J: Crossover Cable Reference

**Crossover wiring table:**

| End 1 (T568B) | Pin | End 2 (T568A) |
|---------------|-----|---------------|
| White/Orange | 1 | White/Green |
| Orange | 2 | Green |
| White/Green | 3 | White/Orange |
| Blue | 4 | Blue |
| White/Blue | 5 | White/Blue |
| Green | 6 | Orange |
| White/Brown | 7 | White/Brown |
| Brown | 8 | Brown |

**What's actually crossed:**
- Pins 1-2 ↔ Pins 3-6 (Transmit ↔ Receive)
- This allows two devices to talk directly without a switch

---

### Activity K: Punch-Down Tips

**Key principles:**

1. **Maintain the twist** - Untwist as little as possible, ideally less than 1/2"
2. **Blade orientation** - Cutting blade faces away from jack
3. **Firm pressure** - Push wire fully into slot before punching
4. **One motion** - Punch down cleanly in one movement

**Punch-down tool orientation:**
- Most tools have a blade on one side
- Blade should face the wire end being cut off
- Wrong orientation = cut wire won't make contact

**Tool-less keystone jacks:**
- Cap pushes wires into IDC contacts
- Still maintain minimal untwisting
- Easier but sometimes less reliable

---

### Activity L: Fault Diagnosis Reference

**Tester patterns by fault:**

| Fault | What Tester Shows |
|-------|-------------------|
| Open pin 3 | LEDs 1,2,4,5,6,7,8 light - 3 missing |
| Short 1-2 | LEDs 1 and 2 light simultaneously |
| Reversed pair (orange) | LEDs 1,2 light as 3,6 |
| Split pair | May pass basic test but fail certification |
| Miswire | LEDs light in wrong sequence |

**Split pair detection:**

Basic testers often can't detect split pairs because each wire still has continuity. A cable certifier or NEXT (Near-End Crosstalk) test is needed to identify this fault.

---

## Section 3: Reflection - Discussion Points

### Scenario 1: Plenum Space Issue

**What to tell the customer:**

"The cable you purchased is PVC-rated and cannot legally be installed in a plenum space. Building codes require CMP (plenum-rated) cable anywhere the cable path is used for HVAC air handling. We have two options:

1. Return the PVC cable and purchase plenum-rated cable (expect 2-3x the cost)
2. Install conduit to create a separate pathway from the plenum space (labor-intensive)

Option 1 is usually more cost-effective. I can't install PVC cable in the ceiling - it's a code violation and safety hazard."

---

### Scenario 2: 100 Mbps Instead of 1 Gbps

**Possible causes:**

| Cause | How to Verify |
|-------|---------------|
| Only 2 pairs wired (100Mbps uses pairs 2,3 only) | Cable test - pins 4,5,7,8 may be open |
| Damaged pair | Cable test - intermittent on some pins |
| Cable too long | Test cable length |
| Cat 3 cable (old) | Check cable jacket markings |
| NIC driver issue | Check device manager, update driver |
| Switch port setting | Check switch port configuration |
| Bad crimp | Re-terminate and test |

**Gigabit Ethernet requires all 4 pairs.** If any pair is damaged or not connected, the connection falls back to 100 Mbps (which only uses 2 pairs).

---

### Scenario 3: 150-Meter Cable Run

**Options for exceeding 100-meter limit:**

| Solution | How It Works |
|----------|--------------|
| Fiber optic | Runs 300m+ without issue |
| Ethernet switch in middle | Break into two <100m segments |
| Media converter with fiber | Copper → fiber → copper |
| Ethernet extender | Extends copper range (reduced speed) |
| Wireless bridge | Point-to-point wireless link |

**Best option:** Fiber optic cable with media converters on each end, or a fiber-capable switch on each end. Multi-mode fiber is cost-effective for this distance.

**Avoid:** Daisy-chaining repeaters or using non-standard "long-range" solutions.

---

### Scenario 4: T568A vs T568B Choice

**Which to use:**

Choose **T568B** for most commercial installations - it's the industry standard in the US for business networks.

**Why consistency matters:**

1. **Troubleshooting** - Technicians expect a standard; mixed standards cause confusion
2. **Documentation** - Easier to maintain records with one standard
3. **Replacement** - Any patch cable will work without checking
4. **Accidental crossovers** - Mixing creates crossover cables unintentionally

**Exception:** If extending or patching into existing T568A infrastructure (some government, educational, or residential), match the existing standard.

**Key point:** The two standards are functionally identical. Consistency is more important than which you choose.

---

## Key Takeaways

**For the A+ Exam:**

1. **Know cable categories:** Cat 5e (1G), Cat 6 (1G/10G@55m), Cat 6a (10G@100m)

2. **Memorize T568B:** Orange-White, Orange, Green-White, Blue, Blue-White, Green, Brown-White, Brown

3. **Crossover = T568B to T568A** - Connects like devices (rarely needed now)

4. **Fiber:** Single-mode (yellow, long distance), Multi-mode (orange/aqua, short distance)

5. **Plenum cable required** for HVAC/air handling spaces

6. **Gigabit needs all 4 pairs** - 100Mbps only needs 2 pairs

7. **Common connectors:** RJ-45 (copper), LC/SC (fiber), F-type/BNC (coax)

8. **100-meter max** for copper Ethernet - use fiber for longer runs

**For Real-World Skills:**

- Always check cable jacket for category rating
- Keep twist as close to termination as possible
- Test every cable you make
- Document your wiring standard
- Plenum cable is expensive but required by code
- Auto-MDI-X makes crossover cables mostly obsolete

---

**Congratulations on completing Lab 7!**

You now understand network cabling fundamentals, from twisted pair to fiber optic. This knowledge is essential for any network installation, troubleshooting, or infrastructure work.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 7: Network Cable Types - Solution Guide*