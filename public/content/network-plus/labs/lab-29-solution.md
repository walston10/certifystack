# Lab 29 Answer Key: Cable Testing and Physical Layer Issues
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain Coverage:** Network Troubleshooting (5.0)

---

## Section 1: Concept Check Answers

### Question 1: T568A vs T568B Standards
**Answer:**
The main difference is the position of orange and green pairs. 
**Pairs swapped:** Pairs 2 (orange) and 3 (green) are swapped between the standards.

### Question 2: TDR (Time Domain Reflectometer)
**Answer:**
A TDR measures cable length and locates breaks/faults in copper cables.
**How it works:** Sends a signal pulse down the cable and measures the time for reflections to return, calculating distance to faults.

### Question 3: EMI/RFI Interference Symptoms
**Answer:**
- Intermittent connectivity/dropouts
- Slow network speeds/high retransmission
- CRC errors/frame errors
- Link flapping (up/down/up/down)

### Question 4: Maximum Cable Length
**Answer:**
**100 meters (328 feet)** for Cat5e/Cat6 at 1Gbps
(Cat6 at 10Gbps is limited to 55 meters)

### Question 5: Link Light Colors
**Answer:**
- **Green solid:** Good connection at highest speed
- **Amber/Orange:** Connection but reduced speed or duplex mismatch  
- **Blinking:** Data activity/traffic flowing

---

## Section 2: Hands-On Activities - Answers

### Activity A: Cable Pinout Identification ✅

**T568A:**
| Pin | Color |
|-----|--------|
| 1 | Green-white |
| 2 | Green |
| 3 | Orange-white |
| 4 | Blue |
| 5 | Blue-white |
| 6 | Orange |
| 7 | Brown-white |
| 8 | Brown |

**T568B:** (Most Common!)
| Pin | Color |
|-----|--------|
| 1 | Orange-white |
| 2 | Orange |
| 3 | Green-white |
| 4 | Blue |
| 5 | Blue-white |
| 6 | Green |
| 7 | Brown-white |
| 8 | Brown |

**Cable types:**
- Both ends T568B: **Straight-through cable**
- Both ends T568A: **Straight-through cable**
- One T568A, one T568B: **Crossover cable**

### Activity B: Cable Testing Tool Selection ✅

| Scenario | Best Tool | Purpose | Expected Result |
|----------|-----------|---------|-----------------|
| Find cable in bundle | Tone generator | Trace specific cable | Probe beeps at cable |
| Test fiber signal | Light meter | Measure power | dBm reading |
| Locate break in wall | TDR | Find distance to break | Distance in meters |
| Verify Cat6 performance | Cable certifier | Certify to standard | Pass/Fail report |
| Test switch port | Loopback adapter | Verify port works | Link light appears |
| Check PoE voltage | Multimeter | Measure voltage | 48V DC typical |
| Find wireless interference | Spectrum analyzer | Identify RF sources | Frequency peaks |
| Map wire pairs | Cable tester | Check pinout | 1-1, 2-2, etc. |

### Activity C: Cable Distance Troubleshooting ✅

| Cable Type | Maximum Distance | Signal at 110m | Issue |
|------------|-----------------|----------------|-------|
| Cat5e | 100m | Degraded | Attenuation, errors |
| Cat6 (1Gbps) | 100m | Degraded | Packet loss |
| Cat6 (10Gbps) | 55m | Failed | No 10Gbps link |
| Cat6a | 100m | Degraded | Retransmissions |
| Single-mode fiber | 10-40km | Good | None |
| Multi-mode fiber | 550m-2km | Good | None |

**Symptoms of exceeding distance:**
1. No link or intermittent link
2. Reduced speed auto-negotiation
3. High error rates/CRC errors

All solution checkboxes are valid options.

### Activity D: Link Light Interpretation ✅

| LED Status | Port State | Likely Cause | Action |
|------------|------------|--------------|---------|
| No light | No link | Bad cable/port | Test cable |
| Solid green | Connected 1Gbps | Normal | None |
| Blinking green | Active traffic | Normal | None |
| Solid amber | 100Mbps link | Speed mismatch | Check config |
| Blinking amber | Collisions | Duplex mismatch | Fix duplex |
| Red | Error/disabled | Port security | Check logs |

**Speed indication (common):**
- Green: **1Gbps or highest speed**
- Amber: **100Mbps or reduced speed**
- Off: **No link/10Mbps on some devices**

### Activity E: Wire Mapping Test Results ✅

**Test Result 1:** Opens on pairs 3 and 6
- Problem: **Broken wires on pairs 3 and 6**
- Impact: **No connectivity (all 4 pairs needed for Gigabit)**
- Fix: **Replace cable or re-terminate**

**Test Result 2:** Crossover detected
- Problem: **Pairs 2 and 3 are crossed**
- Cable type: **Crossover cable**

**Test Result 3:** Short circuit
- Problem: **Short circuit on pairs 1 and 2**
- Symbol ∞ means: **Infinite resistance (open) or short**

### Activity F: Interference Detection ✅

| Source | Type | Safe Distance | Mitigation |
|--------|------|---------------|------------|
| Fluorescent lights | EMI | 3-6 feet | Use STP/conduit |
| Power cables | EMI | 12+ inches | Perpendicular crossing |
| Microwave oven | RFI | 10+ feet | Relocate/shield |
| Electric motor | EMI | 6+ feet | Shielded cable |
| Radio transmitter | RFI | Varies | Different frequency |
| MRI machine | EMI | 20+ feet | Fiber optic only |

**Interference resistance ranking:**
1. Fiber optic (immune)
2. STP (Shielded Twisted Pair)
3. Coaxial
4. UTP (Unshielded Twisted Pair)

### Activity G: Attenuation and Signal Loss ✅

**Copper attenuation:**
| Frequency | Cat5e | Cat6 | Acceptable? |
|-----------|-------|------|-------------|
| 100 MHz | 22 dB/100m | 19.8 dB/100m | Yes |
| 250 MHz | N/A | 32.1 dB/100m | Yes |

**Fiber attenuation:**
| Wavelength | Single-mode | Multi-mode | Application |
|------------|-------------|------------|-------------|
| 850nm | N/A | 3.5 dB/km | Short range MM |
| 1310nm | 0.4 dB/km | 0.5 dB/km | Medium range |
| 1550nm | 0.2 dB/km | N/A | Long range SM |

**Power budget:**
- Link margin: +3 - (-20) = 23 dB budget
- Total loss: 10 + 2 = 12 dB
- **Result: 11 dB margin - Link works!**

### Activity H: Crosstalk Testing ✅

**NEXT:**
- Measured at: **Same end as transmitter**
- Acceptable: **>35 dB for Cat5e, >39 dB for Cat6**
- Caused by: **Signal coupling between pairs**

**FEXT:**
- Measured at: **Far end from transmitter**
- Impact on: **Full duplex Gigabit Ethernet**

**Alien Crosstalk:**
- Occurs between: **Adjacent cables in bundle**
- Solution: **Use Cat6a or separate cables**

All mitigation techniques should be checked.

### Activity I: Fiber Optic Testing ✅

| Test | Tool Used | Measures | Pass Criteria |
|------|-----------|----------|---------------|
| Visual inspection | Microscope | Cleanliness | No dirt/scratches |
| Power measurement | Light meter | Signal strength | Within spec |
| Loss testing | OTDR | Total loss | <Budget |
| OTDR trace | OTDR | Reflections | No breaks |

**Common fiber issues:**
| Problem | Symptom | Tool to Diagnose | Fix |
|---------|---------|------------------|-----|
| Dirty connector | High loss | Microscope | Clean with alcohol |
| Excessive bend | Signal loss | OTDR | Straighten cable |
| Broken fiber | No signal | OTDR | Replace/splice |
| Wrong fiber type | No link | Light meter | Use correct type |

**Cleaning procedure:**
1. Inspect with microscope
2. Clean with lint-free wipe and isopropyl alcohol
3. Re-inspect to verify cleanliness

### Activity J: Loopback Testing ✅

**Physical loopback:**
- Equipment: **Loopback plug/adapter**
- Tests: **Port functionality and NIC**
- Expected: **Link light and self-connectivity**

**Ethernet loopback connections:**
- Connect: **Pin 1 to 3, Pin 2 to 6** (TX to RX)
- Or: **Pin 4 to 7, Pin 5 to 8** (for Gigabit)

**Software loopback:**
- Command: `ping 127.0.0.1` or interface loopback
- Tests: **TCP/IP stack functionality**

| Scenario | Physical | Software | Why |
|----------|----------|----------|-----|
| NIC test | ✓ | | Tests hardware |
| Switch port test | ✓ | | Physical verification |
| Router interface | | ✓ | Config testing |
| TCP/IP stack | | ✓ | Software only |

### Activity K: Cable Certification ✅

| Cable Category | Frequency | Parameters Tested | Use Case |
|----------------|-----------|-------------------|----------|
| Cat5e | 100 MHz | Wire map, NEXT, attenuation | 1 Gbps |
| Cat6 | 250 MHz | All Cat5e + ACR | 10 Gbps (55m) |
| Cat6a | 500 MHz | All Cat6 + alien crosstalk | 10 Gbps (100m) |
| Cat7 | 600 MHz | All parameters | 10 Gbps+ |
| Cat8 | 2000 MHz | All parameters | 25/40 Gbps |

All certification parameters should be checked.
**Pass/Fail:** Must pass ALL parameters for category

### Activity L: Troubleshooting Flowchart ✅

```
No link light?
    ├─ Yes → Check cable with tester
    │         ├─ Cable bad → [Replace cable]
    │         └─ Cable good → [Check port/NIC]
    └─ No → Link light color?
            ├─ Green → [Check higher layers]
            ├─ Amber → [Check speed/duplex]
            └─ Blinking → [Normal - traffic flowing]
```

---

## Real-World Context & Best Practices

### Why This Matters
- **Layer 1 = 90% of problems:** Physical issues most common
- **Certification:** Proves cable meets specifications
- **Documentation:** Helps future troubleshooting
- **Standards compliance:** Ensures interoperability

### Common Mistakes to Avoid
❌ Not testing cables before installation
❌ Exceeding distance limitations
❌ Running UTP near power lines
❌ Using wrong cable category
❌ Not cleaning fiber connectors

### Industry Best Practices
✅ **Test every cable** before and after installation
✅ **Document all runs** with test results
✅ **Use cable management** to prevent damage
✅ **Follow bend radius** specifications
✅ **Keep tools calibrated** annually

---

## Exam Tips 📝

### Must Memorize:
1. **Maximum distances:**
   - Cat5e/6: 100m (328 ft)
   - Cat6 10Gbps: 55m
   - Cat6a 10Gbps: 100m
2. **T568B order:** Orange-white, Orange, Green-white, Blue, Blue-white, Green, Brown-white, Brown
3. **Testing tools:**
   - TDR: Finds breaks in copper
   - OTDR: Finds breaks in fiber
   - Tone generator: Traces cables
4. **Link lights:**
   - Green: Good/fast
   - Amber: Slow/problem
   - None: No connection
5. **Interference:**
   - EMI: Electromagnetic
   - RFI: Radio frequency
   - Solution: STP or fiber

### Common Exam Questions:
- "Find cable in bundle?" → **Tone generator**
- "Test fiber cable?" → **OTDR or light meter**
- "Maximum Cat6 distance?" → **100m (55m for 10Gbps)**
- "T568B wire order?" → **Orange first**
- "Near-end crosstalk?" → **NEXT**

### Exam Strategy:
- Physical layer first for troubleshooting
- Know cable categories and distances
- Understand each tool's purpose
- Link lights tell the story
- T568B is most common standard

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Identified T568A/B pinouts correctly
□ Selected appropriate testing tools
□ Understood distance limitations
□ Interpreted link lights
□ Identified cable test problems
□ Recognized interference sources
□ Understood fiber testing
□ Used loopback concepts
□ Knew certification requirements
□ Built troubleshooting flow

### Troubleshooting Common Issues

**Problem:** Gigabit won't work but 100Mbps does
**Solution:** Check all 8 wires, Gigabit needs all 4 pairs

**Problem:** Intermittent connectivity
**Solution:** Check for loose connections, interference, cable damage

**Problem:** Link light but no connectivity
**Solution:** Check higher layers (IP config, VLAN, etc.)

**Problem:** Cable tests good but still no link
**Solution:** Check port configuration, NIC drivers, auto-negotiation

---

## Real-World Scenarios

### Scenario 1: New Cable Run Fails
**Testing sequence:**
1. Cable tester: Wire map shows opens on pairs
2. TDR: Break at 47 meters
3. Visual inspection: Kink in cable at that distance
4. **Solution:** Replace cable, avoid tight bends

### Scenario 2: Slow Network After Office Move
**Testing sequence:**
1. Check link lights: Amber (100Mbps)
2. Cable tester: Pairs 7-8 broken
3. **Solution:** Re-terminate or replace cable (Gigabit needs all pairs)

### Scenario 3: Random Disconnects
**Testing sequence:**
1. Monitor link light: Flapping
2. Check cable path: Runs parallel to power
3. Replace with STP: Problem solved
4. **Solution:** EMI from power cables

---

## Lab Summary

### Key Concepts Mastered:
✅ Physical layer is most common problem source
✅ Proper testing prevents future issues
✅ Distance limitations are absolute
✅ Interference can be mitigated
✅ Link lights provide quick diagnosis
✅ Certification proves cable quality
✅ Different tools for different problems

### Time-Saving Tips:
- Always check physical first
- Keep cable tester handy
- Document everything
- Use quality cables
- Maintain proper cable management

### Going Further:
- Practice making cables
- Learn fiber termination
- Use advanced certifiers
- Study TDR interpretation
- Master OTDR traces

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for cable testing and physical layer exam questions!

**Next Lab:** Lesson 30 - Common Network Issues and Solutions (Final Lab!)

### Final Tip:
"When in doubt, swap the cable out! More network problems are solved with a new patch cable than any fancy tool."

---