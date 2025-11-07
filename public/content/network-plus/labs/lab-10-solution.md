# Lesson 10 Lab - Answer Key

**Ethernet Standards and Cabling**

---

## Section 1: Concept Check

1. **b) 100 meters**
   - Standard for all copper twisted-pair Ethernet
   - 328 feet in imperial units
   - Beyond 100m: signal degrades too much

2. **a) Both ends use T568A OR both ends use T568B**
   - Straight-through: Both ends same standard
   - Crossover: One end T568A, other end T568B
   - Most common: Both ends T568B

3. **b) Single-mode fiber**
   - Long distance: 10+ km (up to 40+ km)
   - Multi-mode: Short distance (550m max typically)
   - Single-mode has smaller core, single light path

4. **c) 1 Gbps (1000 Mbps)**
   - 1000 = speed in Mbps
   - BASE = baseband signaling
   - T = twisted pair
   - Most common today

5. **a) Unshielded Twisted Pair**
   - Most common cable type
   - STP = Shielded Twisted Pair (more expensive)
   - Shielding protects from EMI

---

## Section 2: Hands-On Activity

### Activity A: Cable Identification

**Most common findings:**

**Home networks:**
- Cat 5e UTP (most common)
- Cat 6 UTP (newer homes/upgrades)

**Example cable markings:**
```
CAT5E UTP 24AWG 4PR UL CMR
```

**What this means:**
- **CAT5E:** Category 5e cable
- **UTP:** Unshielded Twisted Pair
- **24AWG:** Wire thickness (American Wire Gauge)
- **4PR:** 4 pairs of wires (8 wires total)
- **CMR:** Riser-rated (can go between floors)

**Other ratings you might see:**
- **CM:** General purpose
- **CMR:** Riser-rated
- **CMP:** Plenum-rated (air spaces)
- **CMX:** Residential only

---

**Cable length:**
- Home: Usually 3-25 feet
- Office: Up to 100 meters (328 feet)
- If over 100m: Won't meet specs (but might still work at reduced speed)

---

### Activity B: Network Speed Check

**Expected results:**

**Desktop with Ethernet:**
```
Link speed: 1000 Mbps (1 Gbps)
```
Most modern computers and routers support Gigabit

**Laptop with WiFi:**
```
Link speed: 866 Mbps (802.11ac)
OR
Link speed: 1200 Mbps (802.11ac Wave 2)
OR
Link speed: 2400 Mbps (WiFi 6 / 802.11ax)
```

**Older equipment:**
```
Link speed: 100 Mbps (Fast Ethernet)
```
10+ year old equipment

---

**Common bottlenecks:**

**Showing 100 Mbps instead of 1000 Mbps?**
- Old router/switch (only supports Fast Ethernet)
- Bad cable (Cat 3 or damaged Cat 5e)
- NIC driver issue
- NIC setting forced to 100 Mbps

**How to check/fix (Windows):**
1. Device Manager → Network adapters
2. Right-click adapter → Properties
3. Advanced tab → Speed & Duplex
4. Should be "Auto Negotiation" or "1.0 Gbps Full Duplex"

---

### Activity C: Actual Speed Test

**Typical results:**

**Link speed vs Actual speed:**
- Link: 1000 Mbps (1 Gbps)
- Actual: 100-500 Mbps (depending on ISP plan)

**Why the difference?**
- **Link speed:** LAN speed (you to router)
- **Actual speed:** WAN speed (you to internet via ISP)
- **Bottleneck:** Your ISP plan, NOT your cable!

**Example breakdown:**
```
Computer → Cat 6 cable → Router: 1000 Mbps ✅
Router → ISP → Internet: 200 Mbps (your plan) ⚠️
Effective speed: 200 Mbps (bottleneck)
```

**Common ISP speeds:**
- Budget: 50-100 Mbps
- Standard: 200-400 Mbps
- Premium: 500-1000 Mbps (Gigabit)
- Ultra: 2000+ Mbps (multi-gig, rare)

**Upload vs Download:**
- Download usually much faster
- Upload: Typically 10-40 Mbps
- Exception: Fiber (symmetric, equal up/down)

---

### Activity D: Straight-Through vs Crossover

**T568B color order (most common):**
```
Pin 1: Orange/White stripe
Pin 2: Orange solid
Pin 3: Green/White stripe
Pin 4: Blue solid
Pin 5: Blue/White stripe
Pin 6: Green solid
Pin 7: Brown/White stripe
Pin 8: Brown solid
```

**T568A color order (less common):**
```
Pin 1: Green/White stripe
Pin 2: Green solid
Pin 3: Orange/White stripe
Pin 4: Blue solid
Pin 5: Blue/White stripe
Pin 6: Orange solid
Pin 7: Brown/White stripe
Pin 8: Brown solid
```

**Key difference:** Pins 1-2 and 3-6 swapped

---

**Straight-through cable:**
- Both ends: T568B (or both T568A)
- Use: 99% of connections
- Computer → Switch
- Switch → Router
- Any different device types

**Crossover cable:**
- One end T568A, other end T568B
- Use: Rare (old equipment only)
- Computer → Computer (direct)
- Switch → Switch (old switches)
- Modern equipment has Auto-MDIX (auto-detects and compensates)

**Reality:** You almost never need crossover cables anymore!

---

### Activity E: Cable Distance Limitations

| Cable Type | Speed | Max Distance | Notes |
|------------|-------|--------------|-------|
| Cat 5e | 1 Gbps | **100 meters** | Standard limit |
| Cat 6 | 1 Gbps | **100 meters** | Same as Cat 5e at 1G |
| Cat 6 | 10 Gbps | **55 meters** | Reduced distance for 10G |
| Cat 6a | 10 Gbps | **100 meters** | Full distance at 10G |
| Single-mode fiber | 10 Gbps | **10-40+ km** | Long distance |
| Multi-mode fiber | 10 Gbps | **300-550 meters** | Short distance |

**Why 100 meters?**
- Signal attenuation (loss) over distance
- Timing requirements for Ethernet
- Beyond 100m: packet loss, errors, or no connection

**Real-world considerations:**
- Patch cable (wall to computer): 1-5m
- Horizontal run (closet to wall): Up to 90m
- Patch cables: 10m total allowed
- Total: 90m + 10m = 100m maximum

---

### Activity F: Ethernet Standards

| Speed | Distance | Standard Name | Common Name |
|-------|----------|---------------|-------------|
| 10 Mbps | 100m | **10BASE-T** | Ethernet |
| 100 Mbps | 100m | **100BASE-TX** | Fast Ethernet |
| 1000 Mbps (1 Gbps) | 100m | **1000BASE-T** | Gigabit Ethernet |
| 10 Gbps | 100m | **10GBASE-T** | 10 Gigabit Ethernet |

**The naming system:**
- **10, 100, 1000, 10000:** Speed in Mbps
- **BASE:** Baseband (digital signaling)
- **T/TX:** Twisted pair copper

**Fiber standards:**
- **1000BASE-SX:** 1 Gbps, Multi-mode, Short (550m)
- **1000BASE-LX:** 1 Gbps, Single-mode, Long (10km)
- **10GBASE-SR:** 10 Gbps, Multi-mode, Short (300m)
- **10GBASE-LR:** 10 Gbps, Single-mode, Long (10km)

---

### Activity G: Fiber Connectors

**LC (Lucent Connector):**
- **Appearance:** Small, rectangular, push-pull clip
- **Size:** About size of RJ-45
- **Use:** Modern standard, data centers
- **Benefit:** Small, high density

**SC (Subscriber Connector):**
- **Appearance:** Square, push-pull
- **Size:** Larger than LC
- **Use:** Older installations, ISP connections
- **Benefit:** Robust, reliable

**ST (Straight Tip):**
- **Appearance:** Round, bayonet twist-lock
- **Size:** Similar to BNC coax
- **Use:** Legacy installations
- **Benefit:** Very secure (can't pull out accidentally)

**MTRJ (Mechanical Transfer Registered Jack):**
- **Appearance:** Looks like small RJ-45
- **Size:** Compact
- **Use:** Combines duplex (two fibers) in one connector
- **Benefit:** Space-saving

**Modern trend:** LC dominates (90% of new installations)

---

### Activity H: Scenario Analysis

**Scenario 1: Home office - 15 feet**
- Cable: Cat 5e
- Speed: 1 Gbps
- **Will it work? YES ✅**
- **Why:** 15 feet << 100m limit, Cat 5e supports 1 Gbps

---

**Scenario 2: Security camera - 350 feet (107m)**
- Cable: Cat 6
- Speed: 100 Mbps
- **Will it work? NO ❌**
- **Why:** 107m > 100m limit
- **Solution:** 
  - Move NVR closer (under 100m)
  - Use fiber for long runs
  - Use PoE extender at 100m mark

---

**Scenario 3: Building-to-building - 500 meters**
- Cable: Cat 6a
- Speed: 1 Gbps
- **Will it work? NO ❌**
- **Why:** 500m WAY over 100m copper limit
- **What to use instead:**
  - **Single-mode fiber:** Best choice (can do 10+ km)
  - **Wireless bridge:** If fiber too expensive
  - **Managed switches with fiber uplinks:** Hybrid approach

---

### Activity I: Cable Problems

**Common cable damage:**

**Bent/kinked cable:**
- **Problem:** Breaks internal wires
- **Symptom:** Intermittent connection, slow speeds
- **Fix:** Replace cable

**Crushed cable (furniture):**
- **Problem:** Deforms wire pairs
- **Symptom:** Crosstalk, errors, reduced speed
- **Fix:** Reroute or protect cable

**Exposed wires:**
- **Problem:** Short circuits, EMI susceptibility
- **Symptom:** Connection failures
- **Fix:** Replace immediately (safety hazard!)

**Broken clip:**
- **Problem:** Won't stay connected
- **Symptom:** Cable falls out, intermittent
- **Fix:** Replace or use cable tie to secure

**Cable through doorway:**
- **Problem:** Gets pinched repeatedly
- **Symptom:** Eventual wire breakage
- **Fix:** Route under door, through wall, or use door gap

---

**Cable best practices:**
- ❌ Don't run parallel to power lines (EMI)
- ❌ Don't staple through cable (damages wires)
- ❌ Don't bend sharper than 4× cable diameter
- ❌ Don't exceed 25 lbs pulling force during install
- ✅ Use proper cable management (velcro, trays)
- ✅ Leave service loops (extra slack)
- ✅ Test after installation

---

### Activity J: Plenum vs Non-Plenum

**Plenum-rated (CMP - Communications Plenum):**
- **Jacket:** FEP (fluorinated ethylene polymer) or low-smoke PVC
- **Use:** Air ducts, drop ceilings, HVAC spaces
- **Why:** Fire codes (air circulates to multiple rooms)
- **Burn test:** Low smoke, minimal toxic fumes
- **Cost:** 2-3× more expensive
- **Color:** Often white or light color

**Non-plenum / Riser (CMR - Communications Riser):**
- **Jacket:** PVC (polyvinyl chloride)
- **Use:** Walls, risers between floors
- **Why:** Adequate for most uses
- **Burn test:** More smoke, toxic when burning
- **Cost:** Standard pricing
- **Color:** Usually blue, gray

**General purpose (CM):**
- **Use:** Patch cables, short runs
- **Not allowed:** Long permanent runs

**Outdoor (CMX):**
- **Jacket:** UV-resistant, waterproof
- **Use:** Burial, aerial runs

---

**Why it matters:**
- Building codes require plenum in air spaces
- Fire safety: Prevents toxic smoke spread
- Inspection: Can fail building inspection if wrong type
- Penalty: Rip out and replace ($$$)

**Home use:** Almost always CM or CMR (not plenum)

---

### Activity K: Cable Selection

**Scenario 1: Home computer - 30 feet**
- **Best cable:** Cat 5e or Cat 6 UTP
- **Why:** Cheap, more than adequate for home gigabit
- **Overkill:** Cat 6a or Cat 7 (waste of money at home)

---

**Scenario 2: Office, 10 Gbps switch**
- **Best cable:** Cat 6a UTP
- **Why:** 
  - Supports 10 Gbps full distance (100m)
  - Cheaper than fiber
  - Future-proof
- **Alternative:** Cat 6 (if all runs under 55m)

---

**Scenario 3: Building-to-building - 5 km**
- **Best cable:** Single-mode fiber (SMF)
- **Why:**
  - Only option for 5 km at high speed
  - Can do 10-40+ km easily
  - No electrical issues (lightning, ground loops)
- **Type:** OS2 single-mode
- **Connectors:** LC most common

---

**Scenario 4: Ceiling air space**
- **Best cable:** Cat 6 CMP (plenum-rated)
- **Why:** 
  - Building code requirement
  - Fire safety
  - Won't fail inspection
- **Don't use:** CM or CMR (not legal in plenum spaces)

---

**Scenario 5: Industrial near motors**
- **Best cable:** Cat 6 STP (shielded)
- **Why:**
  - Shielding protects from EMI (electromagnetic interference)
  - Motors create electrical noise
  - UTP would have errors/packet loss
- **Alternative:** Fiber (immune to EMI)

---

## Section 3: Reflection

**1. Office upgrade to 10 Gbps:**

**Current:** Cat 5e, 80m distance

**Do you need to replace?**
- Cat 5e: Only rated for 1 Gbps
- For 10 Gbps: Need Cat 6a minimum
- **Answer: YES, replace all cables**

**Cost/benefit:**
- Cat 5e to Cat 6a: $0.50-1.00/foot difference
- 80m = 262 feet × $1 = ~$262 per run
- Times 100 computers = $26,000+ for cable
- Plus labor (much more expensive)
- Plus new 10G switches ($$$)

**Better approach:**
- Upgrade backbone (switches) to 10G fiber
- Keep Cat 5e to desktops (1G sufficient for most users)
- Only run Cat 6a to high-demand users (video editors, servers)

---

**2. WiFi vs Ethernet:**

**Speed:**
- Ethernet: 1000 Mbps guaranteed
- WiFi: 866-2400 Mbps theoretical, 300-600 Mbps real
- **Winner: Ethernet** (consistent)

**Reliability:**
- Ethernet: No interference, consistent
- WiFi: Walls, distance, interference affect it
- **Winner: Ethernet** (way more reliable)

**Latency:**
- Ethernet: 1-2ms
- WiFi: 5-20ms (variable)
- **Winner: Ethernet** (gaming, VoIP)

**When to use WiFi:**
- Mobile devices (phones, tablets)
- Laptops that move around
- Devices far from router
- Guest networks

**When to use Ethernet:**
- Desktop computers
- Gaming PCs
- Smart TVs (streaming)
- Work from home (reliability)
- Servers
- Network equipment

**Best practice:** Wire what's stationary, WiFi for mobile

---

**3. 300 meters between buildings:**

**Options:**

**Option 1: Fiber (best)**
- Single-mode fiber
- Cost: $1-3/foot + $500-2000 installation
- Benefit: Fast, reliable, long-lasting
- Speed: Up to 10 Gbps+

**Option 2: Wireless bridge**
- Point-to-point radio link
- Cost: $200-1000 for equipment
- Benefit: No digging/trenching
- Speed: 100-1000 Mbps
- Drawback: Weather affects it, line-of-sight needed

**Option 3: Multiple copper segments**
- Cat 6 to 90m → switch → Cat 6 another 90m → switch → etc.
- Cost: Moderate (switches add up)
- Problem: Latency, complexity, power needed
- **Not recommended**

**Option 4: ISP connection (VPN)**
- Each building gets its own internet
- Connect via VPN over internet
- Cost: 2× internet bills
- Benefit: No infrastructure between buildings
- Drawback: Slower, less secure

**Best choice: Fiber** (long-term reliability worth the cost)

---

**4. Cable management:**

**Don't run along power lines:**
- EMI (electromagnetic interference)
- Causes crosstalk, packet loss
- Keep 6+ inches away from AC power

**Don't bend sharply:**
- Breaks internal wires
- Increases attenuation
- Min bend radius: 4× cable diameter

**Don't crush cables:**
- Deforms wire pairs
- Increases crosstalk
- Changes impedance
- Solution: Use cable raceways

**What happens if you do:**
- Intermittent connections
- Slow speeds (falls back to 100M or 10M)
- Complete failure
- Difficult to troubleshoot (physical damage not obvious)

---

## Cable Standards Summary

**Copper twisted pair:**
| Standard | Speed | Distance | Use Case |
|----------|-------|----------|----------|
| Cat 5e | 1 Gbps | 100m | Home, small office (most common) |
| Cat 6 | 1-10 Gbps | 100m/55m | Office standard |
| Cat 6a | 10 Gbps | 100m | Enterprise, data center |
| Cat 7 | 10 Gbps | 100m | Shielded, special use (rare) |
| Cat 8 | 40 Gbps | 30m | Data center only |

**Fiber:**
| Type | Distance | Use Case |
|------|----------|----------|
| Multi-mode (MMF) | 300-550m | Building backbone |
| Single-mode (SMF) | 10-40+ km | Building-to-building, ISP |

---

## Exam Tips

**Memorize:**
- 100 meters = copper limit
- Cat 5e = 1 Gbps
- Cat 6a = 10 Gbps @ 100m
- Single-mode = long distance
- Multi-mode = short distance
- T568B = most common wiring
- Straight-through = both ends same
- Crossover = ends different (rarely needed)

**Common questions:**
- "Max distance for Cat 6?" → 100m
- "Which cable for 5 km?" → Single-mode fiber
- "10GBASE-T speed?" → 10 Gbps
- "Plenum cable used where?" → Air spaces/ceilings

---

## Did It Work?

If you were able to:
- ✅ Identify your cable type (Cat 5e/6)
- ✅ Check link speed vs actual speed
- ✅ Understand straight-through vs crossover
- ✅ Know cable distance limits (100m)
- ✅ Match Ethernet standards to speeds
- ✅ Identify fiber connector types
- ✅ Choose correct cable for scenarios
- ✅ Understand plenum requirements

**You understand physical networking!**

Cabling is the foundation of everything. Get this wrong and nothing else works!

**Next:** Switches and VLANs - Using those cables effectively!