# Lab 7: Network Cable Types

**Tier:** 1 (Universal) + 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 2.1 - Compare and contrast TCP/UDP ports, protocols, and their purposes; 2.1 - Compare and contrast common networking hardware

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between T568A and T568B wiring standards, and when would you use each?**

2. **Why is Cat 6a cable preferred over Cat 5e for a 10 Gbps network installation?**

3. **Explain the difference between single-mode and multi-mode fiber optic cable.**

4. **What is the purpose of twisting the wire pairs inside a twisted pair cable?**

5. **When would you use a crossover cable instead of a straight-through cable?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses observation and research** - These activities help you identify cables without requiring termination tools.

---

#### Activity A: Cable Inventory

**Goal:** Identify and categorize network cables you have access to.

**Find all network-related cables in your home/workspace:**

| Cable # | Type | Length (est.) | Connector Type | Color | Condition |
|---------|------|---------------|----------------|-------|-----------|
| 1 | | | | | |
| 2 | | | | | |
| 3 | | | | | |
| 4 | | | | | |
| 5 | | | | | |

**Type options:** Cat 5, Cat 5e, Cat 6, Cat 6a, Cat 7, Cat 8, Coaxial, Fiber, Unknown

**How to identify cable type:**

Look at the cable jacket - most cables have printing that indicates:
- Category rating (Cat 5e, Cat 6, etc.)
- Shielding type (UTP, STP, etc.)
- Manufacturer
- Certifications

**Document what's printed on one of your cables:**

```
Cable text: _________________________________________________
```

**Connector examination:**

Examine an RJ-45 connector closely:

| Feature | Your Observation |
|---------|------------------|
| Number of pins | |
| Pin color order (if visible) | |
| Clip intact? | [ ] Yes [ ] No |
| Boot present? | [ ] Yes [ ] No |
| Clear or colored housing? | |

---

#### Activity B: Cable Category Comparison Research

**Goal:** Understand the specifications that differentiate cable categories.

**Complete this comparison chart through research:**

| Specification | Cat 5e | Cat 6 | Cat 6a | Cat 7 | Cat 8 |
|---------------|--------|-------|--------|-------|-------|
| Max speed | | | | | |
| Max bandwidth | | | | | |
| Max distance (at max speed) | | | | | |
| Shielding | | | | | |
| Connector type | | | | | |
| Common use case | | | | | |

**Speed vs Distance tradeoff:**

Cat 6 can achieve 10 Gbps, but only at reduced distances. Document:

| Speed | Cat 6 Max Distance | Cat 6a Max Distance |
|-------|-------------------|---------------------|
| 1 Gbps | | |
| 10 Gbps | | |

**Why does distance affect maximum speed?**

_________________________________________________________________

---

#### Activity C: T568A vs T568B Wire Mapping

**Goal:** Memorize the wire color order for both standards.

**T568B (most common in commercial installations):**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |
| 8 | | |

**T568A (government and some residential):**

| Pin | Color | Pair |
|-----|-------|------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |
| 8 | | |

**Key difference between A and B:**

Which two pairs are swapped? _____________ and _____________

**Memory exercise:**

Write out the T568B color order three times from memory:

1. __ __ __ __ __ __ __ __
2. __ __ __ __ __ __ __ __
3. __ __ __ __ __ __ __ __

**Straight-through vs Crossover:**

| Cable Type | End 1 | End 2 | Use Case |
|------------|-------|-------|----------|
| Straight-through | | | |
| Crossover | | | |

---

#### Activity D: Fiber Optic Cable Research

**Goal:** Understand fiber optic cable types and connectors.

**Single-mode vs Multi-mode comparison:**

| Characteristic | Single-mode (SMF) | Multi-mode (MMF) |
|----------------|-------------------|------------------|
| Core diameter | | |
| Light source | | |
| Distance capability | | |
| Cost | | |
| Jacket color (typical) | | |
| Common use | | |

**Fiber connector identification:**

Research and describe each connector:

| Connector | Shape/Description | Where Used |
|-----------|-------------------|------------|
| LC | | |
| SC | | |
| ST | | |
| MTRJ | | |
| FC | | |

**Fiber wavelengths:**

| Wavelength | Fiber Type | Distance |
|------------|------------|----------|
| 850 nm | | |
| 1310 nm | | |
| 1550 nm | | |

---

#### Activity E: Cable Testing Concepts

**Goal:** Understand what cable testers check for.

**Types of cable faults:**

| Fault | Description | Cause |
|-------|-------------|-------|
| Open | | |
| Short | | |
| Miswire | | |
| Reversed pair | | |
| Split pair | | |
| Crossed pair | | |

**Cable testing tools:**

| Tool | What It Tests | Approximate Cost |
|------|---------------|------------------|
| Cable tester (basic) | | |
| Tone generator and probe | | |
| TDR (Time Domain Reflectometer) | | |
| Cable certifier | | |
| Loopback plug | | |

**What does each LED indicate on a basic cable tester?**

Typical 8-LED tester display:

| LED Pattern | Meaning |
|-------------|---------|
| All 8 LEDs sequential (1-2-3-4-5-6-7-8) | |
| LEDs light but wrong order | |
| Some LEDs don't light | |
| LEDs on both ends light in pairs | |

---

#### Activity F: Coaxial Cable Identification

**Goal:** Identify coaxial cable types and their uses.

**If you have coaxial cables in your home:**

| Location | Cable Type (RG-6/RG-59) | Connector | Use |
|----------|-------------------------|-----------|-----|
| | | | |
| | | | |
| | | | |

**Coaxial cable comparison:**

| Specification | RG-59 | RG-6 |
|---------------|-------|------|
| Core diameter | | |
| Typical use | | |
| Max frequency | | |
| Suitable for HD cable/satellite? | | |

**Coaxial connector types:**

| Connector | Description | Where Used |
|-----------|-------------|------------|
| F-type | | |
| BNC | | |

**Twinaxial (Twinax) cable:**

What is twinax, and where is it commonly used?

_________________________________________________________________

---

#### Activity G: Plenum vs Non-Plenum Rating

**Goal:** Understand cable jacket ratings for building codes.

**Research and answer:**

1. **What is a plenum space?**

_________________________________________________________________

2. **Why do plenum spaces require special cable?**

_________________________________________________________________

3. **What's the difference between PVC and plenum-rated jacket?**

| Characteristic | PVC (non-plenum) | Plenum-rated |
|----------------|------------------|--------------|
| Fire behavior | | |
| Smoke/toxicity | | |
| Cost | | |
| Code requirement | | |

4. **What does "riser-rated" mean?**

_________________________________________________________________

5. **If you're running cable above a drop ceiling that's used for HVAC return air, what rating do you need?**

_________________________________________________________________

---

#### Activity H: Network Jack Investigation

**Goal:** Examine installed network infrastructure.

**Find network wall jacks in your home/office:**

| Location | Jack Type | Category Rating (if visible) | Number of Ports | Working? |
|----------|-----------|------------------------------|-----------------|----------|
| | | | | |
| | | | | |
| | | | | |

**Examine a keystone jack (if accessible):**

- Wiring standard used: [ ] T568A [ ] T568B [ ] Unknown
- How are wires attached? [ ] Punch-down [ ] Tool-less [ ] Unknown
- Color code printed on jack? [ ] Yes [ ] No

**Trace a cable path (if possible):**

Pick one network jack and try to determine:
- Where does the cable go? _______________________
- Does it go to a patch panel? [ ] Yes [ ] No [ ] Unknown
- Approximate cable length: _____ feet/meters

---

### Tier 2 Bonus Activities

> ⚠️ **Requires tools and materials.** See supply list below. Practice on scrap cable before making production cables.

**Supplies needed:**
- Cat 5e or Cat 6 bulk cable (small spool or scrap pieces)
- RJ-45 connectors (get extras - you'll make mistakes)
- RJ-45 crimp tool
- Cable stripper or knife
- Cable tester
- Optional: Keystone jacks and punch-down tool

---

#### Activity I: Straight-Through Cable Termination

**Goal:** Create a working straight-through Ethernet cable.

**Before you start:**

1. Cut a piece of cable approximately 3-6 feet long
2. Verify you have the T568B color order memorized
3. Have at least 4 RJ-45 connectors ready (allow for mistakes)

**Termination steps:**

Document your process:

| Step | Action | Notes/Challenges |
|------|--------|------------------|
| 1 | Strip outer jacket (~1 inch) | |
| 2 | Untwist pairs | |
| 3 | Arrange wires in T568B order | |
| 4 | Trim wires even | |
| 5 | Insert into RJ-45 connector | |
| 6 | Verify order before crimping | |
| 7 | Crimp connector | |
| 8 | Repeat for other end | |
| 9 | Test with cable tester | |

**Test results:**

| LED | Expected | Actual |
|-----|----------|--------|
| 1 | On | [ ] On [ ] Off |
| 2 | On | [ ] On [ ] Off |
| 3 | On | [ ] On [ ] Off |
| 4 | On | [ ] On [ ] Off |
| 5 | On | [ ] On [ ] Off |
| 6 | On | [ ] On [ ] Off |
| 7 | On | [ ] On [ ] Off |
| 8 | On | [ ] On [ ] Off |

**Result:** [ ] Pass - all 8 sequential [ ] Fail - see notes

**If it failed, what went wrong?**

_________________________________________________________________

**Attempts needed to make a working cable:** _____

---

#### Activity J: Crossover Cable Termination

**Goal:** Create a working crossover cable.

**Crossover wiring:**

| End 1 (T568B) | Pin | End 2 (T568A) |
|---------------|-----|---------------|
| White/Orange | 1 | |
| Orange | 2 | |
| White/Green | 3 | |
| Blue | 4 | |
| White/Blue | 5 | |
| Green | 6 | |
| White/Brown | 7 | |
| Brown | 8 | |

**Termination:**

1. First end - wire as T568B
2. Second end - wire as T568A

**Test results:**

For a crossover cable, the tester should show:

| End 1 LED | Should Light End 2 LED |
|-----------|------------------------|
| 1 | 3 |
| 2 | 6 |
| 3 | 1 |
| 4 | 4 |
| 5 | 5 |
| 6 | 2 |
| 7 | 7 |
| 8 | 8 |

**Does your cable test correctly for crossover?** [ ] Yes [ ] No

---

#### Activity K: Punch-Down Keystone Jack

**Goal:** Terminate cable to a keystone jack using punch-down method.

**Materials:**
- Keystone jack (Cat 5e or Cat 6)
- Punch-down tool (or tool-less jack)
- Bulk cable

**Process documentation:**

| Step | Action | Notes |
|------|--------|-------|
| 1 | Strip jacket (2-3 inches) | |
| 2 | Identify wiring standard on jack | |
| 3 | Separate pairs, do not untwist more than needed | |
| 4 | Seat wires in correct slots | |
| 5 | Punch down each wire | |
| 6 | Trim excess wire | |
| 7 | Attach cover if applicable | |

**Common mistakes to avoid:**

- [ ] Untwisting too much (maintain twist as close to termination as possible)
- [ ] Wrong color positions
- [ ] Wire not fully seated before punching
- [ ] Cutting wire instead of punching (wrong tool orientation)

**Test result:** [ ] Pass [ ] Fail

---

#### Activity L: Cable Troubleshooting Practice

**Goal:** Intentionally create and diagnose cable faults.

**Create a "bad" cable with one of these faults:**

| Fault to Create | How to Create It | Tester Result |
|-----------------|------------------|---------------|
| Open on pin 3 | Don't insert wire 3 fully | |
| Short between 1-2 | Nick the wires together | |
| Reversed pair | Swap orange and green pair positions | |
| Split pair | Put wire from wrong pair in position | |

**Diagnosis exercise:**

1. Create the fault (or have someone else create it)
2. Test the cable
3. Interpret the results
4. Identify the fault type

**Document your findings:**

| Symptom Observed | Diagnosed Fault | Correct? |
|------------------|-----------------|----------|
| | | [ ] Yes [ ] No |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **You're running cable through an office ceiling and discover it's a plenum space used for HVAC air return. The customer already bought 1000 feet of standard PVC cable. What do you tell them?**

2. **A network drop is testing fine but the computer connected to it only negotiates at 100 Mbps instead of 1 Gbps. What might be wrong?**

3. **A customer needs to run Ethernet 150 meters across their warehouse. What are their options since standard copper is limited to 100 meters?**

4. **You're making patch cables for a new installation. Should you use T568A or T568B, and why does consistency matter?**

---

## What You Learned Today

- ✅ Identified and categorized different network cable types
- ✅ Compared cable categories (Cat 5e through Cat 8)
- ✅ Memorized T568A and T568B wiring standards
- ✅ Understood straight-through vs crossover cable purposes
- ✅ Researched fiber optic cable types and connectors
- ✅ Learned cable fault types and testing methods
- ✅ Understood plenum vs non-plenum ratings
- ✅ (Tier 2) Terminated RJ-45 connectors
- ✅ (Tier 2) Created straight-through and crossover cables
- ✅ (Tier 2) Practiced punch-down keystone termination
- ✅ (Tier 2) Diagnosed cable faults with testing

**Next Lab:** Network Devices and Infrastructure - exploring switches, routers, access points, and more.

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 7: Network Cable Types*