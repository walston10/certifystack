# Lesson 2 Lab: Network Topologies & Types

**Estimated Time:** 20-25 minutes  
**Topics:** Star, Mesh, Bus, Ring topologies, Physical vs Logical topologies, LAN/WAN/MAN

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand network topologies:

1. **Which topology has a central point of failure?**
   - a) Star
   - b) Mesh
   - c) Ring
   - d) Bus

2. **In a full mesh topology with 5 devices, how many connections are needed?**
   - a) 5
   - b) 10
   - c) 15
   - d) 20

3. **Which topology is most fault-tolerant (survives multiple device failures)?**
   - a) Bus
   - b) Ring
   - c) Star
   - d) Full Mesh

4. **Your home WiFi router creates which type of topology?**
   - a) Bus
   - b) Ring
   - c) Star
   - d) Mesh

5. **A network that covers a city would be classified as:**
   - a) MAN
   - b) LAN
   - c) WAN
   - d) PAN

---

## Section 2: Hands-On Activity (15-20 min)

### Activity A: Map Your Home Network Topology

**What you'll do:** Draw your home network and identify its topology type.

**Tools needed:** Paper and pencil OR Draw.io (free at draw.io)

#### Step 1: Identify Your Devices

Walk around your home and list all network-connected devices:
- Your router/modem
- Your computer(s)
- Phones
- Tablets
- Smart TV
- Gaming consoles
- Smart home devices (Alexa, Google Home, smart lights, etc.)
- Printers

**Write down:** How many devices total? _______

#### Step 2: Draw Your Network

Draw a diagram showing:
1. Your **router** in the center
2. All devices connected to it
3. Use lines to show connections

**Example:**
```
        [Phone]
           |
    [PC]---[Router]---[Smart TV]
           |
        [Tablet]
```

#### Step 3: Identify the Topology

Looking at your diagram:
- **What physical topology is this?** (Hint: Everything connects to the router)
- **What happens if the router fails?** (Does the whole network go down?)
- **Can devices talk directly to each other, or do they go through the router?**

**Write your answer:** My home network uses a _________ topology.

---

### Activity B: Calculate Mesh Connections

**Understanding the mesh formula:** n(n-1)/2

Let's say you wanted to create a FULL MESH network (every device connects to every other device).

**Your turn:**
1. Take the number of devices you counted in Step 1
2. Use the formula: n(n-1)/2
3. Calculate how many cables/connections you'd need

**Example:** 5 devices
- Formula: 5(5-1)/2 = 5(4)/2 = 20/2 = **10 connections**

**Your calculation:**
- Devices: ___
- Calculation: ___(___-1)/2 = ___
- **Connections needed:** ___

**Think about it:** Would this be practical in your home? Why or why not?

---

### Activity C: Compare Network Types in the Real World

**Using a web browser, let's see real network types:**

#### Test 1: Check Your Connection Type

1. Go to **Fast.com** (Netflix's speed test)
2. Let it run for 30 seconds
3. Write down your speed: _______ Mbps

**What type of network are you on?**
- If you're at home: This is your **LAN** speed (to your router) + **WAN** speed (to internet)
- The bottleneck is usually the WAN (your ISP connection)

#### Test 2: Find Your Public IP vs Private IP

1. Open Command Prompt/Terminal
2. Type `ipconfig` (Windows) or `ifconfig` (Mac)
3. Write down your **Private IP**: _______ (probably 192.168.x.x)

4. Open a web browser and go to **WhatIsMyIP.com**
5. Write down your **Public IP**: _______ (completely different number)

**What this shows:**
- **Private IP** = Your address inside your LAN (home network)
- **Public IP** = Your address on the WAN (internet)
- Your router does NAT (Network Address Translation) between them

---

### Activity D: Identify Topologies in Different Scenarios

For each scenario, identify the best topology and WHY:

**Scenario 1: A small office with 8 computers**
- Best topology: _________
- Why? _________

**Scenario 2: A critical data center where uptime is essential and cost is no object**
- Best topology: _________
- Why? _________

**Scenario 3: Connecting 3 branch offices across different cities**
- Network type: _________
- Topology: _________

**Scenario 4: Your school's computer lab with 30 computers**
- Best topology: _________
- Why? _________

---

## Section 3: Reflection (5 min)

**Real-World Analysis:**

Think about the last time your home internet went down. 

**Questions to consider:**
1. Was it a topology problem? (Single point of failure = the router?)
2. What topology change could make your home network more fault-tolerant?
3. Would it be worth the cost and complexity?

**Advanced thought:** Some newer routers support "mesh WiFi" systems. How is this different from traditional star topology? (Hint: Multiple routers work together)

---

## What You Learned Today

- ✅ You identified your home network topology (probably star!)
- ✅ You calculated mesh connections using the formula n(n-1)/2
- ✅ You understand the difference between LAN (home) and WAN (internet)
- ✅ You know the tradeoffs: Star is simple but has single point of failure
- ✅ You can choose the right topology for different scenarios
- ✅ You understand why most networks use star topology (cost vs reliability)

**Next Lesson:** IP Addressing Fundamentals - Binary, classes, public vs private IPs