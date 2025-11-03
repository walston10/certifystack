# Lesson 12: Routing Fundamentals and Protocols

**Estimated Time:** 30-35 minutes  
**Domain:** Network Infrastructure  
**Exam Objectives Covered:** 2.1, 2.2 - Routing Concepts and Protocols

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain how routers forward packets between different networks
- Interpret routing tables and understand how route selection works
- Differentiate between static routes and dynamic routing protocols
- Understand administrative distance and routing metrics
- Compare distance vector, link state, and hybrid routing protocols
- Describe RIP characteristics and limitations
- Explain OSPF operation including areas and designated routers
- Understand EIGRP's composite metric and fast convergence
- Recognize BGP's role in internet routing between autonomous systems
- Identify how route summarization improves routing efficiency
- Explain routing loops and prevention mechanisms

---

## Video Resources

🔹 **Routing Basics:** [How Routers Work - PowerCert](https://www.youtube.com/watch?v=AhOU2eOpmX0)  
🔹 **Dynamic Routing:** [Routing Protocols Explained - NetworkChuck](https://www.youtube.com/watch?v=YRzr56cwgCg)  
🔹 **OSPF Deep Dive:** [OSPF Explained - Professor Messer](https://www.youtube.com/watch?v=kfvJ8QVJscc)  
🔹 **RIP vs OSPF:** [Routing Protocols Comparison - Sunny Classroom](https://www.youtube.com/watch?v=YCj6wVJOZjg)  
🔹 **BGP Fundamentals:** [BGP Border Gateway Protocol - NetworkChuck](https://www.youtube.com/watch?v=_Z29ZzKeZHc)

---

## Introduction

Imagine you're driving cross-country from New York to Los Angeles. You don't know every single street in every city along the way - that would be impossible. Instead, you know major highways, you follow signs, and you trust that the road system will guide you.

**Routers work the same way.**

A router doesn't know the exact path to every single device on the internet - there are billions. Instead, routers maintain routing tables with the best paths to different networks, exchange information with neighboring routers, and forward packets hop-by-hop toward their destination.

**Switches forward within networks (Layer 2). Routers forward between networks (Layer 3).**

Think of it this way:
- **Switches** are like hallways in a building - they connect rooms on the same floor
- **Routers** are like elevators - they connect different floors (different networks)

**Why does routing matter for Network+?**

Routing is fundamental to how the internet works. You'll see exam questions about routing tables, protocol characteristics, metrics, and troubleshooting routing issues. Understanding routing protocols is essential for designing scalable networks.

**Today's mission:** Master how routers make forwarding decisions, understand the major routing protocols (RIP, OSPF, EIGRP, BGP), and learn how networks share routing information dynamically.

Let's explore the intelligence that makes global connectivity possible.

---

## Routing Fundamentals: The Basics

### What Is Routing?

**Routing** is the process of forwarding packets between different networks based on IP addresses.

**Key concept:** Routers operate at **Layer 3** (Network Layer) and make forwarding decisions based on **destination IP addresses** in packet headers.

**Switches vs Routers:**

| Feature | Switch (Layer 2) | Router (Layer 3) |
|---------|------------------|------------------|
| **Decision based on** | MAC addresses | IP addresses |
| **Forwards within** | Same network (LAN) | Between networks |
| **Broadcast domain** | Same broadcast domain | Separates broadcast domains |
| **Table type** | MAC address table | Routing table |

**Analogy:**

Your home network is 192.168.1.0/24. Your friend's home network is 192.168.2.0/24. To communicate, packets must go through routers that connect these networks - just like mail goes through postal hubs to reach different cities.

---

### The Routing Table: A Router's Map

Every router maintains a **routing table** - a database of known networks and how to reach them.

**Sample routing table:**

```
Network Destination    Netmask          Gateway         Interface    Metric
192.168.1.0           255.255.255.0    0.0.0.0         eth0         0
192.168.2.0           255.255.255.0    10.0.0.2        eth1         1
10.0.0.0              255.255.255.0    0.0.0.0         eth1         0
0.0.0.0               0.0.0.0          10.0.0.1        eth1         1
```

**What each column means:**

- **Network Destination:** The target network (e.g., 192.168.1.0/24)
- **Netmask:** Subnet mask identifying the network portion
- **Gateway:** Next-hop router IP (0.0.0.0 means directly connected)
- **Interface:** Which router port to send the packet out
- **Metric:** Cost/distance to reach that network (lower = better)

**How routers use the table:**

1. Packet arrives destined for 192.168.2.50
2. Router checks routing table: "Which route matches 192.168.2.0/24?"
3. Router finds match: "Send to gateway 10.0.0.2 via interface eth1"
4. Router forwards packet to next-hop router
5. Process repeats at each router until packet reaches destination

**This is hop-by-hop forwarding.** Each router makes one forwarding decision, then the next router decides, and so on.

---

### Default Gateway: The Exit Route

The **default gateway** (also called **default route**) is the route used when no specific route matches the destination.

**Represented as:** 0.0.0.0/0 or 0.0.0.0 with netmask 0.0.0.0

**Think of it as:** "If I don't know where this packet goes, send it here."

**Example:**

Your PC wants to reach 8.8.8.8 (Google DNS). Your PC doesn't have a route for 8.8.0.0/16, so it uses the default gateway - typically your home router. The home router forwards to your ISP, and so on.

**Default gateway is critical:**
- Without it, devices can only communicate on their local subnet
- Most common connectivity issue: incorrect or missing default gateway
- End devices (PCs, phones) typically only have a default route

**On your PC (Windows):**
```
ipconfig
Default Gateway: 192.168.1.1
```

That's your router - the exit point to the rest of the internet.

---

### Static Routes vs Dynamic Routes

Routers learn about networks in three ways:

#### **1. Directly Connected Networks**

Networks directly attached to the router's interfaces are automatically added to the routing table.

**Example:**

Router has:
- eth0: 192.168.1.1/24
- eth1: 10.0.0.1/24

Routing table automatically includes:
- 192.168.1.0/24 via eth0 (directly connected)
- 10.0.0.0/24 via eth1 (directly connected)

#### **2. Static Routes**

**Static routes** are manually configured by the network administrator.

**Pros:**
- Predictable (you control exactly which path traffic takes)
- Secure (no routing protocol overhead or vulnerabilities)
- Low resource usage (no CPU cycles for protocol calculations)

**Cons:**
- Doesn't adapt to failures (if path goes down, route still points there)
- Doesn't scale (imagine manually configuring routes for 10,000 networks)
- Labor-intensive (every change requires manual update)

**When to use static routes:**
- Small networks with few routes
- Stub networks (networks with only one exit point)
- Backup routes
- Default routes to ISP

**Configuration example (Cisco):**
```
ip route 192.168.5.0 255.255.255.0 10.0.0.2
```
*"To reach 192.168.5.0/24, forward packets to next-hop 10.0.0.2"*

#### **3. Dynamic Routing Protocols**

**Dynamic routing protocols** allow routers to automatically share routing information, discover networks, and adapt to topology changes.

**Pros:**
- Automatically discovers new networks
- Adapts to failures (finds alternate paths)
- Scales to large networks
- Reduces administrative overhead

**Cons:**
- Uses bandwidth for routing updates
- Requires CPU and memory for calculations
- More complex to configure and troubleshoot
- Potential security risks if not secured

**When to use dynamic routing:**
- Medium to large networks
- Networks with redundant paths
- Networks that change frequently
- When automatic failover is needed

---

### Administrative Distance: Which Route to Trust?

What if a router learns about the same network from multiple sources - one from OSPF, one from RIP, one from a static route?

**Administrative Distance (AD)** determines which routing source is most trustworthy.

**Lower AD = more trusted.**

**Common AD values (memorize these):**

| Route Source | Administrative Distance |
|--------------|-------------------------|
| Directly Connected | 0 |
| Static Route | 1 |
| EIGRP Summary Route | 5 |
| External BGP (eBGP) | 20 |
| Internal EIGRP | 90 |
| OSPF | 110 |
| RIP | 120 |
| External EIGRP | 170 |
| Internal BGP (iBGP) | 200 |
| Unknown/Unreachable | 255 |

**Example scenario:**

Router learns about 192.168.5.0/24 from:
- Static route (AD = 1)
- OSPF (AD = 110)
- RIP (AD = 120)

**Router chooses static route** because AD 1 beats AD 110 and AD 120.

**Key exam concept:** AD is Cisco-specific but the concept applies broadly. Different vendors use different values but the principle is the same - trustworthiness ranking.

**AD vs Metric:**
- **AD:** Used when comparing routes from different protocols
- **Metric:** Used when comparing routes from the same protocol

If OSPF learns two paths to 192.168.5.0/24, it uses metric (cost) to choose. If OSPF and RIP both advertise it, AD decides first.

---

### Routing Metrics: Choosing the Best Path

When a routing protocol learns multiple paths to the same network, it uses a **metric** to determine the best path.

**Lower metric = better path.**

**Common metrics:**

| Metric | Description | Used By |
|--------|-------------|---------|
| **Hop Count** | Number of routers to destination | RIP |
| **Cost** | Based on bandwidth (100Mbps / link speed) | OSPF |
| **Composite** | Bandwidth, delay, load, reliability | EIGRP |
| **Bandwidth** | Link speed | EIGRP (primary) |
| **Delay** | Time to traverse link | EIGRP |

**Example with hop count (RIP):**

Path A: Router1 → Router2 → Router3 → Destination (3 hops)
Path B: Router1 → Router5 → Destination (2 hops)

**RIP chooses Path B** (fewer hops), even if Path A has 10Gbps links and Path B has 1Mbps links. This is RIP's limitation.

**Example with cost (OSPF):**

Path A: 100Mbps link, Cost = 100,000,000 / 100,000,000 = 1
Path B: 10Mbps link, Cost = 100,000,000 / 10,000,000 = 10

**OSPF chooses Path A** (lower cost = faster link).

---

## Routing Protocol Types

### Distance Vector vs Link State vs Hybrid

Routing protocols are categorized by how they learn about networks:

#### **Distance Vector**

**How it works:** Routers share their entire routing table with directly connected neighbors. "I know how to reach these networks at these distances."

**Analogy:** Like asking directions - "To reach downtown, go 3 blocks that way." You don't know the full map, just the direction and distance.

**Characteristics:**
- Learns routes from neighbors' perspective
- Periodic updates (every 30 seconds for RIP)
- Slow convergence (time to adapt to changes)
- Susceptible to routing loops

**Protocols:** RIP, older routing protocols

**Pros:**
- Simple configuration
- Low resource usage

**Cons:**
- Slow convergence
- Routing loops possible
- Limited scalability

#### **Link State**

**How it works:** Routers build a complete topology map of the network. Each router knows every link, every router, and calculates best paths independently using Dijkstra's algorithm.

**Analogy:** Like having Google Maps - you see the entire road network and calculate the best route yourself.

**Characteristics:**
- Routers flood Link State Advertisements (LSAs) about directly connected links
- Each router builds identical topology database
- Runs SPF (Shortest Path First) algorithm to calculate best paths
- Fast convergence (adapts quickly to changes)
- Event-driven updates (only sends updates when something changes)

**Protocols:** OSPF, IS-IS

**Pros:**
- Fast convergence
- Scales to large networks
- No routing loops
- Efficient bandwidth usage

**Cons:**
- More complex configuration
- Higher CPU and memory requirements
- Initial convergence takes time (building topology database)

#### **Hybrid (Advanced Distance Vector)**

**How it works:** Combines best features of distance vector and link state.

**Protocols:** EIGRP (Cisco proprietary)

**Characteristics:**
- Uses distance vector approach (shares routes with neighbors)
- Maintains topology table like link state
- Fast convergence
- Efficient updates (only changes, only to affected routers)

---

### Interior Gateway Protocols (IGP) vs Exterior Gateway Protocols (EGP)

**Interior Gateway Protocols (IGP):**
- Used **within** an autonomous system (single organization's network)
- Examples: RIP, OSPF, EIGRP

**Exterior Gateway Protocols (EGP):**
- Used **between** autonomous systems (between different organizations/ISPs)
- Example: BGP

**Autonomous System (AS):** A collection of networks under a single administrative control with a unique AS number.

**Example:**
- Your company network = one AS (uses OSPF internally)
- Comcast = another AS (uses OSPF internally)
- BGP connects these ASes

---

## RIP: Routing Information Protocol

### RIP Overview

**RIP** is the oldest, simplest routing protocol - and also the most limited.

**Key characteristics:**
- Distance vector protocol
- Metric: Hop count (number of routers to destination)
- Maximum: 15 hops (16 = unreachable)
- Updates: Every 30 seconds
- Convergence: Slow (minutes)

**Why 15 hop limit?**

To prevent routing loops from circulating forever. If a route reaches 16 hops, RIP declares it unreachable and removes it.

**This makes RIP unsuitable for large networks.** A network requiring more than 15 routers between endpoints can't use RIP.

---

### RIPv1 vs RIPv2

**RIPv1 (obsolete):**
- Classful routing (no subnet masks sent)
- Broadcast updates (255.255.255.255)
- No authentication
- Wastes bandwidth

**RIPv2 (improved but still limited):**
- Classless routing (includes subnet masks)
- Multicast updates (224.0.0.9)
- Supports authentication
- Supports VLSM (Variable Length Subnet Masking)

**Exam tip:** You should know RIP exists and its limitations (15 hop max, slow convergence, hop count metric), but modern networks don't use RIP. It's been replaced by OSPF and EIGRP.

---

### RIP Example

```
Network topology:
[Router A] ---1 hop--- [Router B] ---1 hop--- [Router C] ---1 hop--- [Router D]
  (10.1.0.0)              (10.2.0.0)              (10.3.0.0)              (10.4.0.0)
```

**Router A's perspective to reach 10.4.0.0:**
- Via Router B: 3 hops (A→B→C→D)
- RIP chooses this path (only path available)

**If alternate path existed:**
```
[Router A] ---1 hop--- [Router B] ---1 hop--- [Router D]
     |                                             |
     +------------5 hops via slow links-------------+
```

Even if the 5-hop path has 10Gbps links and the 2-hop path has 1Mbps links, **RIP chooses the 2-hop path** because it only counts hops.

**This is why RIP is obsolete.**

---

## OSPF: Open Shortest Path First

### OSPF Overview

**OSPF** is a link state protocol and the most popular IGP for enterprise networks.

**Key characteristics:**
- Link state protocol
- Metric: Cost (based on bandwidth)
- Open standard (works with all vendors)
- Fast convergence (seconds)
- Scales to very large networks
- Supports areas for hierarchical design

**OSPF is the gold standard for enterprise routing.**

---

### How OSPF Works

**Step 1: Neighbor Discovery**

OSPF routers discover neighbors on shared links by sending **Hello packets** every 10 seconds (broadcast/point-to-point networks) or 30 seconds (non-broadcast networks).

**Hello packet contains:**
- Router ID
- Area ID
- Authentication (if configured)
- Network mask

**Routers become neighbors if they agree on:** Area ID, subnet, authentication, hello/dead intervals.

**Step 2: LSA Flooding**

Each router floods **Link State Advertisements (LSAs)** describing its directly connected links.

**LSA contains:**
- Link information (network, mask, neighbors)
- Link cost (based on bandwidth)

Every router receives every LSA, building identical topology databases.

**Step 3: SPF Calculation**

Each router independently runs the **SPF (Shortest Path First)** algorithm - also called Dijkstra's algorithm - to calculate best paths to all networks.

The router places itself at the root of a tree and calculates shortest paths to every destination.

**Step 4: Build Routing Table**

Best paths from SPF calculation are added to the routing table.

---

### OSPF Cost Metric

OSPF calculates cost based on bandwidth:

**Cost = Reference Bandwidth / Interface Bandwidth**

**Default reference bandwidth:** 100 Mbps (100,000,000 bps)

| Interface Speed | Cost Calculation | Cost |
|-----------------|------------------|------|
| 10 Mbps (Ethernet) | 100,000,000 / 10,000,000 | 10 |
| 100 Mbps (Fast Ethernet) | 100,000,000 / 100,000,000 | 1 |
| 1 Gbps (Gigabit) | 100,000,000 / 1,000,000,000 | 1* |
| 10 Gbps | 100,000,000 / 10,000,000,000 | 1* |

*Minimum cost is 1, so Gigabit and 10 Gigabit both default to 1.

**Problem:** Modern networks have speeds faster than the default reference bandwidth.

**Solution:** Change reference bandwidth:
```
auto-cost reference-bandwidth 10000  (sets to 10 Gbps)
```

Now:
- 1 Gbps = cost 10
- 10 Gbps = cost 1

**Path selection example:**

Path A: 100 Mbps → 100 Mbps → 100 Mbps = Cost 1 + 1 + 1 = 3
Path B: 10 Mbps → 10 Gbps = Cost 10 + 1 = 11

**OSPF chooses Path A** (lower total cost).

---

### OSPF Areas and Area 0

Large OSPF networks are divided into **areas** for scalability.

**Why use areas?**
- Reduces LSA flooding (LSAs mostly stay within areas)
- Reduces SPF calculations (only recalculate for changes in your area)
- Improves convergence time
- Organizes network hierarchically

**Area types:**

**Backbone Area (Area 0):**
- The core area that all other areas must connect to
- All inter-area traffic passes through Area 0
- Required in multi-area designs

**Regular Areas:**
- Numbered areas (Area 1, Area 2, etc.)
- Must have at least one router connected to Area 0

**Topology example:**

```
        [Area 1]
            |
            | (ABR)
            |
        [Area 0] ---------- (ABR) ----------- [Area 2]
      (Backbone)
            |
            | (ABR)
            |
        [Area 3]
```

**ABR (Area Border Router):** Router with interfaces in multiple areas. Connects regular areas to Area 0.

**Key rule:** All areas must connect to Area 0. You can't connect Area 1 directly to Area 2 - traffic must traverse Area 0.

---

### Designated Router (DR) and Backup Designated Router (BDR)

On **multi-access networks** (like Ethernet LANs where multiple routers are connected), OSPF elects a **DR and BDR** to reduce LSA flooding.

**Without DR/BDR:**

5 routers on a LAN would form 10 neighbor relationships (n*(n-1)/2). Each router floods LSAs to every neighbor - massive overhead.

**With DR/BDR:**

- All routers send LSAs to the DR
- DR redistributes LSAs to all routers
- BDR is hot standby in case DR fails
- Reduces from 10 relationships to 5 (everyone peers with DR)

**Election process:**

**Highest priority wins** (default = 1, range 0-255).
If tied, **highest Router ID** wins.

**Router ID:** Highest IP on a loopback interface, or highest IP on active interface.

**Priority 0 = never become DR/BDR** (useful for low-power routers).

---

### OSPF Convergence

**OSPF converges in seconds**, not minutes like RIP.

**When a link fails:**
1. Router detects failure (missed Hello packets or interface down)
2. Router floods LSA about the change
3. All routers receive LSA and update topology database
4. All routers re-run SPF algorithm
5. New best paths installed in routing tables

**Total time:** Typically under 10 seconds.

**This is why OSPF dominates enterprise networks** - fast failover and convergence.

---

## EIGRP: Enhanced Interior Gateway Routing Protocol

### EIGRP Overview

**EIGRP** is Cisco's proprietary hybrid protocol - combining distance vector simplicity with link state speed.

**Key characteristics:**
- Hybrid (advanced distance vector)
- Cisco proprietary (though draft standard exists)
- Metric: Composite (bandwidth, delay, load, reliability)
- Very fast convergence (sub-second with Feasible Successors)
- Efficient updates (only changes sent, only to affected neighbors)
- Automatic summarization

**EIGRP is popular in Cisco-only environments** for its speed and ease of configuration.

---

### EIGRP Composite Metric

EIGRP uses a **composite metric** considering multiple factors:

**Default calculation (K values):**
- K1 = Bandwidth (enabled)
- K2 = Load (disabled by default)
- K3 = Delay (enabled)
- K4 = Reliability (disabled by default)
- K5 = MTU (disabled by default)

**By default, EIGRP uses bandwidth and delay:**

**Metric = (K1 * Bandwidth + K3 * Delay) * 256**

Where:
- Bandwidth = (10^7 / slowest link speed in kbps)
- Delay = sum of all delays / 10

**This means EIGRP considers:**
- Slowest link speed in path
- Cumulative delay across all links

**More intelligent than RIP's hop count**, but more complex than OSPF's pure cost.

---

### EIGRP Fast Convergence

EIGRP maintains three tables:

**1. Neighbor Table:** Adjacent EIGRP routers
**2. Topology Table:** All learned routes (multiple paths)
**3. Routing Table:** Best paths only

**Key feature: Feasible Successor**

EIGRP pre-calculates **backup routes** (Feasible Successors). If the primary path fails, EIGRP instantly switches to the backup without re-running the routing algorithm.

**This enables sub-second convergence.**

**Example:**

Router has two paths to 10.1.0.0/24:
- Primary (Successor): Metric 1000 via Router A
- Backup (Feasible Successor): Metric 1500 via Router B

If link to Router A fails, Router instantly uses path via Router B. No waiting for convergence.

---

### EIGRP Features

**Reliable Transport Protocol (RTP):**
- Guarantees delivery of routing updates
- Uses acknowledgments

**Partial Updates:**
- Only sends updates when topology changes (not periodic like RIP)
- Only sends to affected routers

**Automatic Summarization:**
- EIGRP automatically summarizes routes at classful boundaries
- Can be disabled for more granular control

**Load Balancing:**
- Supports unequal-cost load balancing
- Can use multiple paths with different metrics simultaneously

**Exam tip:** Know that EIGRP is Cisco proprietary, uses composite metric, converges very fast, and maintains backup routes (Feasible Successors).

---

## BGP: Border Gateway Protocol

### BGP Overview

**BGP** is the protocol that runs the internet. It connects autonomous systems (ISPs, large enterprises, cloud providers).

**Key characteristics:**
- Exterior Gateway Protocol (EGP)
- Path vector protocol
- Uses AS path as metric
- Policy-based routing (administrators control paths)
- Scales to millions of routes
- Slow to converge (stability over speed)

**BGP is used between organizations, not within them.**

---

### Autonomous Systems (AS)

An **Autonomous System (AS)** is a collection of networks under single administrative control.

**AS Numbers:** 16-bit (1-65535) or 32-bit (newer)
- Public AS: 1-64495 (assigned by IANA)
- Private AS: 64512-65535 (like RFC 1918 for routing)

**Examples:**
- AT&T: AS 7018
- Comcast: AS 7922
- Google: AS 15169
- Amazon: AS 16509

**Every ISP and major organization has an AS number.**

---

### How BGP Works

**BGP uses TCP port 179** (reliable connection between routers).

**Two types of BGP:**

**eBGP (External BGP):**
- Between different autonomous systems
- AD = 20
- Passes full AS path

**iBGP (Internal BGP):**
- Within same autonomous system
- AD = 200
- Does not modify AS path

**Path Vector Routing:**

BGP advertises not just "I can reach 8.8.8.0/24," but "I can reach 8.8.8.0/24 via AS 15169, AS 7018, AS 3356."

**The AS path prevents loops.** If a router sees its own AS number in the path, it rejects the route.

---

### BGP Path Selection

BGP doesn't just pick the shortest AS path. Administrators use **policies** to control routing based on:

- Local preference (higher = preferred)
- AS path length (shorter = preferred)
- Origin type
- MED (Multi-Exit Discriminator)
- IGP metric to next hop

**This gives ISPs control over traffic flow**, allowing them to:
- Prefer certain peers over others
- Implement traffic engineering
- Honor business agreements
- Balance load across links

**BGP is policy-driven, not purely metric-driven.**

---

### BGP Convergence

**BGP converges slowly** (minutes, sometimes tens of minutes).

**Why?**
- Internet stability is more important than speed
- Damping prevents route flapping (routes going up/down repeatedly)
- Extensive policy evaluation takes time
- Thousands of routes across thousands of ASes

**This is intentional.** A rapid change in BGP could destabilize the entire internet.

**Exam tip:** Know that BGP runs the internet, uses AS path as primary metric, is policy-based, and converges slowly compared to IGPs.

---

## Route Summarization (Aggregation)

**Route summarization** combines multiple specific routes into one summary route, reducing routing table size.

**Example:**

Instead of advertising:
- 192.168.0.0/24
- 192.168.1.0/24
- 192.168.2.0/24
- 192.168.3.0/24

Advertise one summary:
- 192.168.0.0/22 (covers all four /24 networks)

**Benefits:**
- Smaller routing tables (less memory)
- Faster SPF calculations (fewer routes to process)
- Reduced LSA/update traffic
- More stable (changes in specific subnets don't trigger updates)

**OSPF summarization** happens at ABRs (Area Border Routers) when routes leave an area.

**EIGRP summarization** can happen at any router.

**BGP summarization** is critical for internet routing (ISPs advertise aggregated blocks, not individual customer subnets).

**Exam tip:** Summarization is also called aggregation or supernetting. It's the opposite of subnetting.

---

## Routing Loops and Prevention

### What Is a Routing Loop?

A **routing loop** occurs when packets circulate between routers indefinitely, never reaching the destination.

**Example:**

```
Router A thinks: "To reach 10.5.0.0, send to Router B"
Router B thinks: "To reach 10.5.0.0, send to Router A"
```

Packet bounces between A and B until TTL expires.

---

### Loop Prevention Mechanisms

#### **Split Horizon**

**Rule:** Never advertise a route back out the interface you learned it from.

If Router A learns about 10.5.0.0 from Router B, Router A won't advertise 10.5.0.0 back to Router B.

**Prevents:** Simple two-router loops

#### **Route Poisoning**

When a route fails, advertise it with a metric of **infinity** (16 for RIP).

This tells neighbors: "Don't use me to reach this network - it's unreachable."

#### **Hold-Down Timers**

After learning a route failed, wait a period before accepting new information about that route.

**Prevents:** Accepting stale information that could create loops

#### **TTL (Time to Live)**

Every IP packet has a TTL field that decrements at each hop. When TTL reaches 0, the packet is discarded.

**Prevents:** Packets looping forever (even if routing loop exists, packets eventually die)

**Default TTL:** Usually 64 or 128

**Exam tip:** Modern link state protocols (OSPF) don't suffer from routing loops like distance vector protocols (RIP) did, but these prevention mechanisms still exist for compatibility and edge cases.

---

## Key Exam Tips

**Memorize these for Network+:**

**Administrative Distance (lower = better):**
- Directly Connected: 0
- Static: 1
- EIGRP: 90
- OSPF: 110
- RIP: 120

**Routing Protocols Quick Reference:**

| Protocol | Type | Metric | Max | Convergence | Standard |
|----------|------|--------|-----|-------------|----------|
| **RIP** | Distance Vector | Hop Count | 15 | Slow (minutes) | Open |
| **OSPF** | Link State | Cost (bandwidth) | None | Fast (seconds) | Open |
| **EIGRP** | Hybrid | Composite | None | Very Fast | Cisco |
| **BGP** | Path Vector | AS Path | None | Slow (minutes) | Open |

**IGP vs EGP:**
- IGP = Interior (within AS): RIP, OSPF, EIGRP
- EGP = Exterior (between AS): BGP

**OSPF Specifics:**
- Area 0 = backbone (required in multi-area)
- DR/BDR elected on multi-access networks
- Cost based on bandwidth
- Fast convergence via LSAs and SPF

**BGP Specifics:**
- TCP port 179
- Uses AS numbers
- Path vector (prevents loops via AS path)
- Policy-based routing

**Common mistakes to avoid:**
- Confusing AD with metric (AD = between protocols, metric = within protocol)
- Thinking BGP is used inside enterprise networks (it's for internet routing)
- Not knowing RIP's 15-hop limitation
- Forgetting Area 0 requirement in OSPF

---

## Key Takeaways

- [ ] **Routing forwards packets between networks** using Layer 3 IP addresses
- [ ] **Routing tables map destination networks to next-hop gateways**
- [ ] **Default gateway (0.0.0.0/0) is the route of last resort**
- [ ] **Static routes are manual**, dynamic routes are learned from protocols
- [ ] **Administrative Distance determines trust** when multiple sources advertise same route
- [ ] **Metrics determine best path** within same routing protocol
- [ ] **Distance vector shares routing tables** with neighbors (RIP)
- [ ] **Link state builds complete topology map** and calculates paths (OSPF)
- [ ] **RIP uses hop count** with 15-hop maximum (obsolete)
- [ ] **OSPF uses cost based on bandwidth**, converges fast, scales well
- [ ] **OSPF Area 0 is backbone** - all areas must connect to it
- [ ] **EIGRP is Cisco proprietary** with composite metric and sub-second convergence
- [ ] **BGP runs the internet**, connecting autonomous systems
- [ ] **Route summarization reduces routing table size** and improves stability

---

## Check Your Understanding

**1. What is the difference between a routing table and a MAC address table?**

<details>
<summary>Show Answer</summary>
<strong>Routing table (Layer 3): maps destination networks to next-hop routers. MAC address table (Layer 2): maps MAC addresses to switch ports.</strong> Routers use routing tables to forward packets between networks based on IP addresses. Switches use MAC tables to forward frames within networks based on MAC addresses. Routing table shows networks (e.g., 192.168.5.0/24 via 10.0.0.1). MAC table shows individual devices (e.g., AA:BB:CC:DD:EE:FF on port 5).
</details>

**2. A router learns about network 10.5.0.0/24 from both OSPF (AD 110) and RIP (AD 120). Which route does the router install in its routing table?**

<details>
<summary>Show Answer</summary>
<strong>OSPF route (AD 110).</strong> Administrative Distance determines which routing source to trust when multiple sources advertise the same network. Lower AD = more trusted. OSPF's AD of 110 beats RIP's AD of 120, so the router installs the OSPF route and ignores the RIP route. If OSPF goes down, the router would then use the RIP route.
</details>

**3. What metric does RIP use and what is its maximum hop count?**

<details>
<summary>Show Answer</summary>
<strong>RIP uses hop count as metric with maximum of 15 hops.</strong> Hop count = number of routers packets must traverse. RIP considers 16 hops to be unreachable (infinity metric). This prevents routing loops but severely limits RIP's scalability - networks requiring more than 15 routers between endpoints cannot use RIP. This is why RIP is obsolete in modern networks.
</details>

**4. How does OSPF calculate the cost of a route?**

<details>
<summary>Show Answer</summary>
<strong>OSPF cost = Reference Bandwidth / Interface Bandwidth.</strong> Default reference bandwidth is 100 Mbps. A 100 Mbps link has cost 1 (100M/100M). A 10 Mbps link has cost 10 (100M/10M). OSPF adds up costs for all links in a path and chooses the path with lowest total cost. This means OSPF prefers faster links. For modern networks with 1Gbps+ speeds, you should increase reference bandwidth to differentiate between Gigabit and 10 Gigabit links.
</details>

**5. What is the purpose of OSPF Area 0 and why is it required?**

<details>
<summary>Show Answer</summary>
<strong>Area 0 (backbone area) is the central area that all other areas must connect to.</strong> In multi-area OSPF designs, inter-area traffic must pass through Area 0. You cannot connect Area 1 directly to Area 2 - traffic goes Area 1 → Area 0 → Area 2. This hierarchical design reduces LSA flooding and SPF calculations. Routers connecting regular areas to Area 0 are called Area Border Routers (ABRs). Single-area networks only use Area 0.
</details>

**6. What is a Designated Router (DR) in OSPF and why is it needed?**

<details>
<summary>Show Answer</summary>
<strong>DR reduces LSA flooding on multi-access networks (like Ethernet LANs).</strong> Without DR, N routers would form N*(N-1)/2 neighbor relationships and flood LSAs to all neighbors (massive overhead). With DR, all routers send LSAs to the DR, which redistributes them. BDR (Backup DR) is hot standby. Election based on highest priority (default 1), then highest Router ID. DR/BDR reduces flooding and improves efficiency on shared networks.
</details>

**7. How does EIGRP achieve faster convergence than OSPF?**

<details>
<summary>Show Answer</summary>
<strong>EIGRP maintains pre-calculated backup routes called Feasible Successors.</strong> While OSPF must re-run SPF algorithm when primary path fails, EIGRP maintains backup paths in its topology table. If primary route fails, EIGRP instantly switches to Feasible Successor without recalculation - sub-second convergence. EIGRP also uses efficient partial updates (only changes sent to affected routers) rather than flooding LSAs.
</details>

**8. What is BGP and why is it used instead of OSPF or EIGRP on the internet?**

<details>
<summary>Show Answer</summary>
<strong>BGP is the Exterior Gateway Protocol that connects autonomous systems (ISPs, organizations).</strong> OSPF and EIGRP are Interior Gateway Protocols designed for single organizations. BGP scales to millions of routes across thousands of autonomous systems. BGP uses AS path to prevent loops between organizations and supports policy-based routing for traffic engineering. It's designed for stability over speed. Every ISP uses BGP to exchange routing information with other ISPs.
</details>

**9. What is route summarization and what are its benefits?**

<details>
<summary>Show Answer</summary>
<strong>Route summarization (aggregation) combines multiple specific routes into one summary route.</strong> Example: combine 192.168.0.0/24 through 192.168.3.0/24 into 192.168.0.0/22. Benefits: smaller routing tables (less memory), faster SPF calculations, reduced routing update traffic, more stability (changes in specific subnets don't trigger updates). OSPF summarizes at ABRs, EIGRP at any router, BGP heavily summarizes for internet routing.
</details>

**10. What is split horizon and how does it prevent routing loops?**

<details>
<summary>Show Answer</summary>
<strong>Split horizon prevents advertising routes back out the interface they were learned from.</strong> If Router A learns about 10.5.0.0 from Router B, Router A will not advertise that route back to Router B. This prevents simple two-router loops where both routers think the other has the best path. Used by distance vector protocols (RIP) to prevent loops. Link state protocols (OSPF) use topology database and SPF algorithm instead, making them naturally loop-free.
</details>

**11. A network has two paths to destination 10.8.0.0/24: Path A through three 1Gbps links, Path B through one 10Mbps link. Which path does RIP choose? Which does OSPF choose?**

<details>
<summary>Show Answer</summary>
<strong>RIP chooses Path B (fewer hops). OSPF chooses Path A (lower cost/higher bandwidth).</strong> RIP only counts hops: Path A = 3 hops, Path B = 1 hop. RIP picks Path B even though it's much slower. This is why RIP is obsolete. OSPF calculates cost based on bandwidth: Path A has three 1Gbps links (cost 1 each = total 3), Path B has one 10Mbps link (cost 10). OSPF picks Path A (lower total cost = faster).
</details>

**12. What is the difference between eBGP and iBGP?**

<details>
<summary>Show Answer</summary>
<strong>eBGP (External BGP) runs between different autonomous systems. iBGP (Internal BGP) runs within the same AS.</strong> eBGP connects ISPs and organizations (AD = 20), passes full AS path. iBGP distributes BGP routes within an organization (AD = 200), doesn't modify AS path. Example: ISP uses eBGP to peer with other ISPs, uses iBGP between its own routers to propagate those external routes. Most enterprises use IGPs (OSPF/EIGRP) internally and only use eBGP at internet edge.
</details>

---

## Before Moving to Lesson 13

Make sure you can confidently:

- [ ] **Explain how routers forward packets** between networks using routing tables
- [ ] **Differentiate static and dynamic routing** and when to use each
- [ ] **Understand Administrative Distance** and which sources are most trusted
- [ ] **Describe routing metrics** (hop count, cost, composite)
- [ ] **Compare distance vector, link state, and hybrid** protocols
- [ ] **Identify RIP characteristics** (hop count, 15 max, slow convergence)
- [ ] **Understand OSPF fundamentals** (cost metric, areas, DR/BDR, fast convergence)
- [ ] **Recognize EIGRP features** (Cisco proprietary, composite metric, Feasible Successors)
- [ ] **Explain BGP's role** in internet routing between autonomous systems
- [ ] **Understand route summarization** and its benefits

**Study Strategy:**

**Today:**
- Draw network topologies with multiple paths
- Practice calculating OSPF cost for different link speeds
- Trace how routing table lookups work
- Create flashcards for AD values (directly connected=0, static=1, OSPF=110, RIP=120)

**Tomorrow (Day 13):**
- Review routing protocol comparison table
- Watch one of the OSPF videos again (concepts will solidify)
- Practice explaining distance vector vs link state to someone
- Compare RIP, OSPF, EIGRP side-by-side

**Day 14:**
- Continue to Lesson 13 (Wireless Networking)
- Keep routing concepts in your study rotation
- Routing fundamentals apply throughout the rest of the course

Routing is foundational - you'll see these concepts in network design, troubleshooting, and security lessons ahead!

---

## Coming Up in Lesson 13: Wireless Networking (Wi-Fi 6/6E, 802.11)

You've mastered wired routing - how packets travel through routers between networks.

**Next, you'll explore wireless networking:**

- 802.11 standards (Wi-Fi 4, 5, 6, 6E)
- Wireless frequencies (2.4 GHz, 5 GHz, 6 GHz)
- Channels and interference
- MIMO and beamforming
- SSIDs and wireless modes
- Wireless site surveys
- Roaming and mesh networks

**The connection:**

Lesson 12 covered how routing connects networks together at Layer 3. Lesson 13 covers wireless access at Layer 2 and below - how devices connect to networks without cables. You'll see how wireless APs connect to wired infrastructure (switches and routers) to extend network access. Wireless is just another way to access the routing infrastructure you just learned.

**See you in Lesson 13!**

---

*"Routing is the intelligence that makes the internet work. Routers don't know every destination - they just know the next best hop. Master routing, and you understand how global connectivity happens hop-by-hop."*

---

# ✅ LESSON 12 COMPLETE!

**What You Just Learned:**
- ✅ How routers forward packets between networks using routing tables
- ✅ Default gateway as the route of last resort (0.0.0.0/0)
- ✅ Static routes vs dynamic routing protocols
- ✅ Administrative Distance determines trust between routing sources
- ✅ Routing metrics determine best path within a protocol
- ✅ Distance vector (RIP) vs link state (OSPF) vs hybrid (EIGRP)
- ✅ RIP uses hop count with 15-hop maximum (obsolete)
- ✅ OSPF uses cost based on bandwidth, requires Area 0, converges fast
- ✅ OSPF Designated Router (DR/BDR) reduces flooding on LANs
- ✅ EIGRP uses composite metric with pre-calculated backup routes
- ✅ BGP connects autonomous systems on the internet
- ✅ Route summarization reduces routing table size
- ✅ Loop prevention mechanisms (split horizon, route poisoning, TTL)

**You're now 40% of the way to Network+ certification!** (12 of 30 lessons complete)

**Next up: Wireless networking and 802.11 standards!**