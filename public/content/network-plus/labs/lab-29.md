# Lab 29: Cable Testing and Physical Layer Issues
**Time:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain:** Network Troubleshooting (5.0)

## Lab Objectives
- Identify physical layer problems
- Use cable testing tools correctly
- Diagnose common cable issues
- Interpret link lights and LEDs
- Test and certify network cables
- Troubleshoot Layer 1 problems

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What's the difference between T568A and T568B standards?**
   _________________________________________________
   Which pairs are swapped? _____________________________

2. **What does a TDR measure?**
   _________________________________________________
   How does it work? ___________________________________

3. **Name three symptoms of EMI/RFI interference:**
   • _________________________________________________
   • _________________________________________________
   • _________________________________________________

4. **What's the maximum cable length for Cat5e/Cat6?**
   _________________________________________________

5. **What do these link light colors typically mean?**
   Green solid: ________________________________________
   Amber/Orange: _______________________________________
   Blinking: ___________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Cable Pinout Identification 🔌
**Time:** 3 minutes

Identify the wire colors for each standard:

**T568A:**
| Pin | Color |
|-----|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |
| 6 | |
| 7 | |
| 8 | |

**T568B:**
| Pin | Color |
|-----|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |
| 6 | |
| 7 | |
| 8 | |

**Cable type determination:**
- Both ends T568B: __________________________________
- Both ends T568A: __________________________________
- One T568A, one T568B: _____________________________

---

### Activity B: Cable Testing Tool Selection 🔧
**Time:** 3 minutes

Match the tool to the testing scenario:

| Scenario | Best Tool | Purpose | Expected Result |
|----------|-----------|---------|-----------------|
| Find cable in bundle | | | |
| Test fiber signal | | | |
| Locate break in wall | | | |
| Verify Cat6 performance | | | |
| Test switch port | | | |
| Check PoE voltage | | | |
| Find wireless interference | | | |
| Map wire pairs | | | |

Tools: Cable tester, Tone generator, TDR, OTDR, Light meter, Multimeter, Cable certifier, Spectrum analyzer, Loopback adapter

---

### Activity C: Cable Distance Troubleshooting 📏
**Time:** 3 minutes

Calculate maximum distances and issues:

| Cable Type | Maximum Distance | Signal at 110m | Issue |
|------------|-----------------|----------------|-------|
| Cat5e | | | |
| Cat6 (1Gbps) | | | |
| Cat6 (10Gbps) | | | |
| Cat6a | | | |
| Single-mode fiber | | | |
| Multi-mode fiber | | | |

**Symptoms of exceeding distance:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

**Solutions:**
□ Add repeater/switch
□ Use fiber instead
□ Install signal booster
□ Upgrade cable category

---

### Activity D: Link Light Interpretation 💡
**Time:** 3 minutes

Diagnose based on LED status:

| LED Status | Port State | Likely Cause | Action |
|------------|------------|--------------|---------|
| No light | | | |
| Solid green | | | |
| Blinking green | | | |
| Solid amber | | | |
| Blinking amber | | | |
| Red | | | |

**Speed indication by color (varies by vendor):**
- Green: ____________________________________________
- Amber: ____________________________________________
- Off: ______________________________________________

---

### Activity E: Wire Mapping Test Results 🗺️
**Time:** 3 minutes

Interpret cable tester results:

**Test Result 1:**
```
1-1 ✓  2-2 ✓  3-3 ✗  4-4 ✓
5-5 ✓  6-6 ✗  7-7 ✓  8-8 ✓
```
Problem: ____________________________________________
Impact: _____________________________________________
Fix: ________________________________________________

**Test Result 2:**
```
1-3 ✓  2-6 ✓  3-1 ✓  4-4 ✓
5-5 ✓  6-2 ✓  7-7 ✓  8-8 ✓
```
Problem: ____________________________________________
Cable type: _________________________________________

**Test Result 3:**
```
1-1 ∞  2-2 ∞  3-3 ✓  4-4 ✓
5-5 ✓  6-6 ✓  7-7 ✓  8-8 ✓
```
Problem: ____________________________________________
Symbol ∞ means: _____________________________________

---

### Activity F: Interference Detection 📡
**Time:** 3 minutes

Identify and mitigate interference sources:

| Source | Type | Safe Distance | Mitigation |
|--------|------|---------------|------------|
| Fluorescent lights | | | |
| Power cables | | | |
| Microwave oven | | | |
| Electric motor | | | |
| Radio transmitter | | | |
| MRI machine | | | |

**Cable types by interference resistance:**
Rank 1-4 (1=best):
___ STP (Shielded Twisted Pair)
___ UTP (Unshielded Twisted Pair)
___ Fiber optic
___ Coaxial

---

### Activity G: Attenuation and Signal Loss 📉
**Time:** 3 minutes

Calculate signal loss:

**Copper cable attenuation:**
| Frequency | Cat5e (dB/100m) | Cat6 (dB/100m) | Acceptable? |
|-----------|-----------------|----------------|-------------|
| 100 MHz | 22 | 19.8 | |
| 250 MHz | N/A | 32.1 | |

**Fiber attenuation:**
| Wavelength | Single-mode | Multi-mode | Application |
|------------|-------------|------------|-------------|
| 850nm | | 3.5 dB/km | |
| 1310nm | 0.4 dB/km | | |
| 1550nm | 0.2 dB/km | | |

**Power budget calculation:**
Transmitter: +3 dBm
Receiver sensitivity: -20 dBm
Cable loss: 10 dB
Connector loss: 2 dB
Result: _____________________________________________

---

### Activity H: Crosstalk Testing 🔀
**Time:** 2 minutes

Identify crosstalk issues:

**NEXT (Near-End Crosstalk):**
- Measured at: _______________________________________
- Acceptable level: __________________________________
- Caused by: _________________________________________

**FEXT (Far-End Crosstalk):**
- Measured at: _______________________________________
- Impact on: _________________________________________

**Alien Crosstalk:**
- Occurs between: ____________________________________
- Solution: __________________________________________

**Mitigation techniques:**
□ Use higher category cable
□ Maintain twist rates
□ Avoid untwisting at termination
□ Use STP instead of UTP
□ Separate cable bundles

---

### Activity I: Fiber Optic Testing 🔦
**Time:** 3 minutes

Fiber testing procedures:

| Test | Tool Used | Measures | Pass Criteria |
|------|-----------|----------|---------------|
| Visual inspection | | | |
| Power measurement | | | |
| Loss testing | | | |
| OTDR trace | | | |

**Common fiber issues:**
| Problem | Symptom | Tool to Diagnose | Fix |
|---------|---------|------------------|-----|
| Dirty connector | | | |
| Excessive bend | | | |
| Broken fiber | | | |
| Wrong fiber type | | | |

**Cleaning procedure:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

### Activity J: Loopback Testing 🔄
**Time:** 3 minutes

Use loopback adapters:

**Physical loopback test:**
Equipment needed: ____________________________________
Tests what: _________________________________________
Expected result: ____________________________________

**Create Ethernet loopback:**
- Connect pins: _____________________________________
- Or pins: __________________________________________

**Software loopback:**
Command: ____________________________________________
Tests: ______________________________________________

**When to use each:**
| Scenario | Physical | Software | Why |
|----------|----------|----------|-----|
| NIC test | | | |
| Switch port test | | | |
| Router interface | | | |
| TCP/IP stack | | | |

---

### Activity K: Cable Certification 📜
**Time:** 2 minutes

Certification requirements:

| Cable Category | Frequency | Parameters Tested | Use Case |
|----------------|-----------|-------------------|----------|
| Cat5e | 100 MHz | | |
| Cat6 | 250 MHz | | |
| Cat6a | 500 MHz | | |
| Cat7 | 600 MHz | | |
| Cat8 | 2000 MHz | | |

**Certification report includes:**
□ Wire map
□ Length
□ Attenuation
□ NEXT
□ Return loss
□ ACR (Attenuation-to-Crosstalk Ratio)
□ Propagation delay
□ Delay skew

**Pass/Fail determination:** _________________________

---

### Activity L: Troubleshooting Flowchart 🔍
**Time:** 3 minutes

Complete the Layer 1 troubleshooting flow:

```
No link light?
    ├─ Yes → Check cable with tester
    │         ├─ Cable bad → [________]
    │         └─ Cable good → [________]
    └─ No → Link light color?
            ├─ Green → [________]
            ├─ Amber → [________]
            └─ Blinking → [________]
```

**Common solutions:**
1. Replace cable
2. Check switch port configuration
3. Verify speed/duplex settings
4. Clean fiber connectors
5. Check for interference

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Users report intermittent network disconnections:

1. **Physical checks first:**
   • _________________________________________________
   • _________________________________________________

2. **Testing approach:**
   • Tool to use: _____________________________________
   • What to measure: __________________________________

3. **Most likely causes:**
   • _________________________________________________
   • _________________________________________________

### Best Practices Checklist
Check off cable testing practices you'll implement:

□ Always test cables before installation
□ Document cable runs and test results
□ Keep testing tools calibrated
□ Maintain cable management standards
□ Label everything clearly
□ Use appropriate cable categories
□ Follow bend radius specifications
□ Implement cable certification
□ Regular inspection schedule
□ Keep spare cables and tools

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Identify T568A vs T568B pinouts
□ Select appropriate testing tools
□ Interpret cable test results
□ Diagnose link light indicators
□ Calculate maximum cable distances
□ Identify interference sources
□ Test fiber optic cables
□ Use loopback adapters
□ Understand cable certification
□ Troubleshoot Layer 1 issues

### Exam Preparation
⚠️ **Know for the exam:**
- **Maximum distances:** Cat5e/6 = 100m, Cat6 10Gbps = 55m
- **T568B:** Orange-white, Orange, Green-white, Blue...
- **TDR:** Time Domain Reflectometer - finds breaks
- **OTDR:** Optical TDR - for fiber
- **Link lights:** Green = good, Amber = problem
- **NEXT:** Near-end crosstalk
- **Tone generator:** Traces cables
- **Loopback:** Tests ports/NICs

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐☆☆

**Ready for:** Lesson 30 - Common Network Issues and Solutions

### Remember
"90% of network problems are at Layer 1. Check the cable, check the cable, then check the cable again!"

---