# Lesson 2 Lab - Answer Key

**Network Topologies & Types**

---

## Section 1: Concept Check

1. **a) Star**
   - Star topology has the central device (switch/router) as a single point of failure
   - If the center fails, the entire network goes down

2. **b) 10**
   - Formula: n(n-1)/2 = 5(4)/2 = 20/2 = **10 connections**
   - This is why full mesh is expensive - connections grow rapidly!

3. **d) Full Mesh**
   - Every device has redundant paths to every other device
   - Can survive multiple device failures
   - Most expensive and complex topology

4. **c) Star**
   - All devices connect to the central router
   - Classic star topology

5. **a) MAN**
   - Metropolitan Area Network covers a city or campus
   - Larger than LAN, smaller than WAN

---

## Section 2: Hands-On Activity

### Activity A: Expected Results

**Typical home network device count:**
- Router/Modem: 1
- Computers/Laptops: 2-4
- Phones: 2-6
- Tablets: 1-3
- Smart TV: 1-2
- Gaming consoles: 1-2
- Smart home devices: 5-20+
- **Total: 15-40+ devices is common in modern homes!**

**Your diagram should look like:**
```
    [Phone 1]        [Phone 2]
         |                |
    [Laptop]---[Router/Modem]---[Smart TV]
         |                |
    [Desktop]        [Alexa]
         |
    [Printer]
```

**Topology identification:**
- **Physical topology:** Star (everything radiates from the router)
- **If router fails:** Entire network goes down (single point of failure)
- **Device communication:** Goes through the router (even if two phones want to talk, data goes Phone → Router → Phone)

**Answer:** My home network uses a **STAR** topology.

**Why star topology for homes?**
- ✅ Simple to set up and manage
- ✅ Cost-effective (only need one central device)
- ✅ Easy to add/remove devices
- ✅ Easy to troubleshoot (check the router first)
- ❌ Single point of failure (but home routers are reliable enough)

---

### Activity B: Mesh Calculations

**Example calculations for common device counts:**

**5 devices:**
- 5(5-1)/2 = 5(4)/2 = 20/2 = **10 connections**

**10 devices:**
- 10(10-1)/2 = 10(9)/2 = 90/2 = **45 connections**

**20 devices:**
- 20(20-1)/2 = 20(19)/2 = 380/2 = **190 connections**

**30 devices (typical home):**
- 30(30-1)/2 = 30(29)/2 = 870/2 = **435 connections!**

**Why full mesh isn't practical for homes:**
- ❌ Would need hundreds of cables/connections
- ❌ Extremely expensive
- ❌ Massive complexity
- ❌ No real benefit - home network failures are rare
- ✅ Better for: Data centers, critical infrastructure, backbone networks

**Where you DO see mesh:**
- Internet backbone (tier 1 providers use partial mesh)
- Data center networks (servers with multiple NICs)
- Wireless mesh networks (different from full mesh - uses fewer connections)

---

### Activity C: Expected Results

#### Test 1: Speed Test Results

**Typical home speeds:**
- **Slow:** 10-25 Mbps (older DSL, rural)
- **Medium:** 50-200 Mbps (cable, fiber)
- **Fast:** 300-1000+ Mbps (gigabit fiber)

**What affects your speed:**
- **LAN speed:** Usually 1 Gbps (1000 Mbps) on modern WiFi/Ethernet
- **WAN speed:** Limited by your ISP plan (this is the bottleneck)
- **WiFi vs Ethernet:** Ethernet is faster and more stable

**Network type analysis:**
- Your computer → Router = **LAN** (Local Area Network)
- Router → ISP → Internet = **WAN** (Wide Area Network)
- The WAN connection is almost always slower than your LAN

---

#### Test 2: IP Address Results

**Example results:**

**Private IP (from ipconfig):**
```
IPv4 Address: 192.168.1.105
```

**Public IP (from WhatIsMyIP.com):**
```
Your IP: 73.162.45.123
```

**What this demonstrates:**

**Private IP ranges (RFC 1918):**
- 10.0.0.0 - 10.255.255.255 (Class A)
- 172.16.0.0 - 172.31.255.255 (Class B)
- 192.168.0.0 - 192.168.255.255 (Class C) ← Most common for homes

**Why they're different:**
- Your **LAN** uses private IPs (192.168.x.x)
- These IPs can't be used on the internet
- Your router does **NAT** (Network Address Translation)
- All your devices share ONE public IP when accessing the internet
- This solves IPv4 address exhaustion!

**Analogy:**
- **Private IP** = Your apartment number (only makes sense inside your building)
- **Public IP** = Your building's street address (how the world finds you)
- **Router/NAT** = Your building's mailroom (translates between the two)

---

### Activity D: Topology Selection

**Scenario 1: Small office with 8 computers**
- **Best topology:** Star
- **Why:** 
  - Cost-effective (one switch in the middle)
  - Easy to manage and troubleshoot
  - Sufficient reliability for small office
  - Easy to add more computers later

---

**Scenario 2: Critical data center where uptime is essential**
- **Best topology:** Full Mesh or Partial Mesh
- **Why:**
  - Maximum redundancy
  - Multiple paths between devices
  - Can survive multiple failures
  - Worth the extra cost for critical operations
  - Often combined with star (hybrid topology)

---

**Scenario 3: Three branch offices across different cities**
- **Network type:** WAN (Wide Area Network)
- **Topology:** Partial Mesh or Hub-and-Spoke
- **Why:**
  - Partial mesh: Each office connects to at least 2 others (redundancy)
  - Hub-and-spoke: One main office (hub) connects to branch offices (spokes)
  - Choice depends on cost vs redundancy needs
  - Leased lines or VPN over internet for connections

**Example:**
```
Hub-and-Spoke:
   [Office B]
        |
   [Office A (HQ)]
        |
   [Office C]

Partial Mesh:
   [Office B]-----[Office A]
        |              |
        |------------[Office C]
```

---

**Scenario 4: School computer lab with 30 computers**
- **Best topology:** Star (Extended Star)
- **Why:**
  - Hierarchical star (computers → switches → core switch)
  - Manageable and cost-effective
  - Easy for IT to control and monitor
  - Can isolate issues to specific switches
  - Standard for educational environments

**Diagram:**
```
                [Core Switch]
                      |
        ______________|______________
        |             |             |
    [Switch 1]   [Switch 2]    [Switch 3]
        |             |             |
   [10 PCs]      [10 PCs]      [10 PCs]
```

---

## Section 3: Reflection

**Analyzing home internet outages:**

**Common topology-related failures:**

1. **Router failure** (Star topology single point of failure)
   - Solution: Keep a backup router
   - Or: Mesh WiFi system with multiple nodes

2. **ISP connection down** (WAN failure, not topology issue)
   - Can't fix with topology
   - Could have backup ISP (expensive)

3. **WiFi dead zones** (Coverage issue)
   - Solution: Mesh WiFi system
   - Multiple access points create redundant coverage

**Mesh WiFi systems (Google WiFi, Eero, etc.):**
- NOT the same as full mesh topology
- Uses multiple access points that create redundant coverage
- Still connects devices in star topology to each AP
- APs connect to each other (forming their own mesh)
- Provides redundancy: If one AP fails, devices connect to another

**Is it worth the upgrade?**
- **Pros:** Better coverage, some redundancy, easier roaming
- **Cons:** More expensive, more complex, usually overkill for small homes
- **Good for:** Large homes, multi-story, lots of walls

---

## Topology Comparison Chart

| Topology | Advantages | Disadvantages | Best Use |
|----------|-----------|---------------|----------|
| **Star** | Simple, cheap, easy to troubleshoot | Single point of failure | Homes, small offices |
| **Mesh (Full)** | Maximum redundancy, no single point of failure | Expensive, complex | Data centers, critical systems |
| **Mesh (Partial)** | Good redundancy, more affordable | Still complex | Enterprise WANs, ISP networks |
| **Bus** | Very simple, cheap | One cable failure kills whole network | Legacy/obsolete |
| **Ring** | Data flows in one direction, predictable | Break in ring = network down | Legacy (Token Ring, FDDI) |
| **Hybrid** | Combines benefits of multiple topologies | More complex | Large enterprises |

---

## Real-World Examples

**Star:**
- Your home WiFi
- Office networks
- School computer labs

**Partial Mesh:**
- Internet backbone (tier 1 providers)
- Enterprise WAN (connecting multiple offices)
- AWS/Azure cloud regions

**Full Mesh:**
- High-frequency trading networks
- Military command and control
- Space station networks (redundancy critical)

**Ring:**
- SONET/SDH networks (telecom)
- Legacy Token Ring networks (obsolete)
- Some industrial control systems

---

## Did It Work?

If you were able to:
- ✅ Identify your home network topology (star)
- ✅ Count your network devices
- ✅ Calculate mesh connections with the formula
- ✅ Understand LAN vs WAN
- ✅ See the difference between private and public IPs
- ✅ Choose appropriate topologies for different scenarios

**You're ready for Lesson 3!**

You now understand:
- Why most networks use star topology (simplicity)
- When to use mesh (critical redundancy needs)
- The tradeoffs between cost, complexity, and reliability
- How network types (LAN/WAN) relate to topologies