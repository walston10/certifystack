# Lesson 10 Lab: Ethernet Standards and Cabling

**Estimated Time:** 30-35 minutes  
**Topics:** Cable types, Ethernet standards, Testing cables, T568A vs T568B

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand cabling:

1. **What is the maximum distance for Cat 6 cable at 1 Gbps?**
   - a) 55 meters
   - b) 100 meters
   - c) 500 meters
   - d) 2 kilometers

2. **Which cable standard is used for straight-through cables?**
   - a) Both ends use T568A OR both ends use T568B
   - b) One end T568A, other end T568B
   - c) Only T568B is allowed
   - d) Any combination works

3. **What type of fiber is used for long-distance (10+ km) connections?**
   - a) Multi-mode fiber
   - b) Single-mode fiber
   - c) Cat 6a
   - d) Coaxial cable

4. **What speed is 1000BASE-T?**
   - a) 10 Mbps
   - b) 100 Mbps
   - c) 1 Gbps (1000 Mbps)
   - d) 10 Gbps

5. **UTP stands for:**
   - a) Unshielded Twisted Pair
   - b) Universal Twisted Pair
   - c) Ultra Twisted Pair
   - d) Unified Transport Protocol

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Identify Your Network Cable

**Let's find out what type of cable connects your computer!**

1. **Find the network cable connected to your computer:**
   - If using Ethernet: Follow the cable from your computer
   - If using WiFi: Find any Ethernet cable in your home (router to modem, etc.)

2. **Look closely at the cable. You should see text printed on it:**

**Write down what you see:**
- Cable category: Cat ___ (5e, 6, 6a, etc.)
- Cable type: UTP or STP (shielded)
- Any other markings: _________________________________

**Most likely result:** Cat 5e or Cat 6 UTP

**What the category means:**
- Cat 5e: Up to 1 Gbps (1000 Mbps), 100m distance
- Cat 6: Up to 10 Gbps (at 55m), or 1 Gbps at 100m
- Cat 6a: Up to 10 Gbps at full 100m

3. **Measure (estimate) the cable length:** _______ feet/meters

**Is it under 100 meters (328 feet)?** If yes, you're within spec! ✅

---

### Activity B: Check Your Network Speed

**Let's see what speed your network is actually running at:**

1. **Open Command Prompt (Windows) or Terminal (Mac)**

**Windows:**
```
netsh interface show interface
```

Look for your adapter and its speed.

**OR use GUI:**
- Right-click network icon in taskbar
- Open Network & Internet settings
- Click "Properties" for your connection
- Look for "Link speed"

**Mac:**
- Hold Option key
- Click WiFi icon
- See "Tx Rate" (transmit rate)

**OR:**
- System Preferences → Network
- Select connection → Advanced → Hardware
- See "Speed"

---

**Write down your speeds:**
- **Link speed:** _______ Mbps
- **Connection type:** Ethernet or WiFi

**Common speeds:**
- 10 Mbps: Very old (10BASE-T)
- 100 Mbps: Fast Ethernet (100BASE-TX)
- 1000 Mbps (1 Gbps): Gigabit Ethernet (1000BASE-T) ← Most common today
- WiFi: 72, 144, 300, 600, 866, 1200+ Mbps (varies)

**Does your speed match your cable capability?**
- Cat 5e can do 1000 Mbps
- If you're getting 100 Mbps with Cat 5e: Something's limiting it (old router, bad cable, wrong NIC settings)

---

### Activity C: Test Your Actual Network Speed

**Your link speed is the MAXIMUM. Let's test ACTUAL speed:**

1. **Close all programs using internet**

2. **Go to:** https://fast.com (Netflix speed test)

3. **Wait for test to complete**

**Your download speed:** _______ Mbps

4. **Try another test:** https://speedtest.net

**Your results:**
- Download: _______ Mbps
- Upload: _______ Mbps
- Ping: _______ ms

---

**Compare your speeds:**
- Link speed: _______ Mbps (what your NIC CAN do)
- Actual speed: _______ Mbps (what your ISP PROVIDES)

**Why the difference?**
- Your link to router: May be 1000 Mbps (1 Gbps)
- Your internet plan: Probably 100-500 Mbps
- **The bottleneck is your ISP, not your cable!**

---

### Activity D: Straight-Through vs Crossover Cable

**Most cables are straight-through (both ends wired the same).**

**If you have an Ethernet cable, let's identify which type:**

1. **Hold both ends of the cable side-by-side**

2. **Look at the colored wires through the clear connector:**

**Do the colors match on both ends?**
- Yes → Straight-through cable ✅ (most common)
- No → Crossover cable (rare nowadays)

**Color order for T568B (most common):**
1. Orange/White
2. Orange
3. Green/White
4. Blue
5. Blue/White
6. Green
7. Brown/White
8. Brown

**If both ends match this order:** T568B straight-through cable

---

**When to use each type:**

**Straight-through (99% of the time):**
- Computer to switch
- Computer to router
- Switch to router
- Basically everything!

**Crossover (rarely needed):**
- Old computer-to-computer direct connection
- Old switch-to-switch connection
- Modern devices have Auto-MDIX (automatically detect and adjust)

**Reality check:** You probably haven't seen a crossover cable in years!

---

### Activity E: Cable Distance Limitations Game

**Fill in the maximum distances:**

| Cable Type | Speed | Max Distance |
|------------|-------|--------------|
| Cat 5e | 1 Gbps | _______ meters |
| Cat 6 | 1 Gbps | _______ meters |
| Cat 6 | 10 Gbps | _______ meters |
| Cat 6a | 10 Gbps | _______ meters |
| Single-mode fiber | 10 Gbps | _______ km |
| Multi-mode fiber | 10 Gbps | _______ meters |

**Why does distance matter?**
- Signal degrades over distance (attenuation)
- Too far = packet loss, slow speeds, or no connection
- 100 meters (328 feet) is the magic number for copper

---

### Activity F: Identify Ethernet Standard from Speed

**Match the speed to the Ethernet standard:**

| Speed | Distance | Standard Name |
|-------|----------|---------------|
| 10 Mbps | 100m | ________-T |
| 100 Mbps | 100m | ________-TX |
| 1000 Mbps (1 Gbps) | 100m | ________-T |
| 10 Gbps | 100m | ________-T |

**The naming pattern:**
- **Number** = Speed in Mbps (10, 100, 1000, 10000)
- **BASE** = Baseband (digital signaling)
- **T** = Twisted pair
- **TX** = Twisted pair (Fast Ethernet specific)

**Examples:**
- 1000BASE-T = 1000 Mbps (1 Gbps) over twisted pair
- 10GBASE-T = 10,000 Mbps (10 Gbps) over twisted pair

---

### Activity G: Fiber Optic Connector Identification

**If you have access to fiber equipment (unlikely at home), examine connectors.**

**If not, look up images online and identify:**

**Common fiber connectors:**

1. **LC (Lucent Connector)**
   - What does it look like? _________________________________
   - Use: Modern, small, data centers

2. **SC (Subscriber Connector)**
   - What does it look like? _________________________________
   - Use: Older, square, larger

3. **ST (Straight Tip)**
   - What does it look like? _________________________________
   - Use: Legacy, bayonet twist-lock

4. **MTRJ (Mechanical Transfer Registered Jack)**
   - What does it look like? _________________________________
   - Use: Compact, combines two fibers

**Most common today:** LC connectors (small, clips in like USB)

---

### Activity H: Calculate If Your Setup Meets Requirements

**Scenario planning:**

**Scenario 1: Home office to router**
- Your computer to router: 15 feet
- Cable: Cat 5e
- Desired speed: 1 Gbps

**Will it work?** Yes / No
**Why?** _________________________________

---

**Scenario 2: Security camera run**
- Camera to NVR: 350 feet (107 meters)
- Cable: Cat 6
- Desired speed: 100 Mbps

**Will it work?** Yes / No
**Why?** _________________________________

---

**Scenario 3: Building-to-building link**
- Building A to Building B: 500 meters
- Cable: Cat 6a
- Desired speed: 1 Gbps

**Will it work?** Yes / No
**Why?** _________________________________
**What should you use instead?** _________________________________

---

### Activity I: Identify Cable Problems

**Look at your Ethernet cable (if available). Check for:**

**Physical damage:**
- [ ] Bent/kinked cable
- [ ] Crushed cable (furniture on it)
- [ ] Exposed wires
- [ ] Damaged connector (broken clip)
- [ ] Cable run through doorway (getting pinched)

**Are any present?** _________________________________

**Each of these can cause:**
- Slow speeds
- Intermittent connection
- Complete failure
- Packet loss

**The fix:** Replace the cable! They're cheap ($5-20).

---

### Activity J: Plenum vs Non-Plenum (Knowledge Check)

**You won't see this at home, but it's on the exam!**

**Plenum-rated cable:**
- Used in: Air ducts, drop ceilings, air return spaces
- Why: Fire-resistant, low-smoke jacket
- Cost: More expensive
- Required by: Building codes

**Non-plenum (PVC) cable:**
- Used in: Regular walls, conduit, home use
- Why: Cheaper, adequate for most uses
- Cost: Less expensive
- Problem: Toxic smoke if burned

**Check your cable:** Does it say "plenum" or "CMP"?
- Probably not (unless commercial building)
- Home cables are almost always non-plenum

---

### Activity K: Real-World Cable Selection

**You're setting up networks. Choose the right cable:**

**Scenario 1: Home computer to router (30 feet)**
- Best cable: _________________________________
- Why: _________________________________

**Scenario 2: Office with 100 computers, 10 Gbps switch**
- Best cable: _________________________________
- Why: _________________________________

**Scenario 3: Data center connecting buildings (5 km apart)**
- Best cable: _________________________________
- Why: _________________________________

**Scenario 4: Installing cables in ceiling air space (commercial building)**
- Best cable: _________________________________
- Why: _________________________________

**Scenario 5: Noisy industrial environment (near motors)**
- Best cable: _________________________________
- Why: _________________________________

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Your office wants to upgrade to 10 Gbps networking:**
   - Current cable: Cat 5e
   - Distance: 80 meters
   - Do you need to replace all cables?
   - What's the cost/benefit?

2. **WiFi vs Ethernet - which is better?**
   - Speed comparison
   - Reliability
   - When to use each

3. **You're running cable between two buildings 300 meters apart:**
   - Copper won't work (100m limit)
   - Fiber is expensive
   - What are your options?
   - Wireless? Fiber? Something else?

4. **Cable management matters:**
   - Why not run cables along power lines?
   - Why not bend cables sharply?
   - Why not crush cables under furniture?
   - What happens if you do?

---

## What You Learned Today

- ✅ You identified your network cable type (Cat 5e/6)
- ✅ You checked your link speed and actual internet speed
- ✅ You understand straight-through vs crossover cables
- ✅ You know T568A and T568B wiring standards
- ✅ You learned cable distance limitations (100m for copper)
- ✅ You can match Ethernet standards to speeds
- ✅ You identified fiber connector types
- ✅ You can choose the right cable for different scenarios
- ✅ You understand plenum vs non-plenum requirements
- ✅ You know when to use copper vs fiber

**Next Lesson:** Switches, VLANs, and Trunking - Moving up from cables to switches!