# Lesson 12 Lab - Answer Key

**Routing Fundamentals and Protocols**

---

## Section 1: Concept Check

1. **c) IP addresses**
   - Routers = Layer 3 devices
   - Forward based on destination IP
   - Switches use MAC (Layer 2)

2. **c) RIP**
   - RIP = Routing Information Protocol
   - Metric: Hop count
   - Simple but limited

3. **b) 15**
   - 16 = infinity (unreachable)
   - Prevents count-to-infinity
   - Major limitation of RIP

4. **d) BGP**
   - Border Gateway Protocol
   - Routes between ISPs/ASes
   - Makes the internet work

5. **b) To choose between routes learned from different protocols**
   - Lower AD = more trusted
   - Tiebreaker when multiple protocols
   - Static (1) beats OSPF (110)

---

## Section 2: Hands-On Activity

### Activity A: Routing Table

**Expected output (Windows):**
```
IPv4 Route Table
===========================================================================
Network Destination    Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0      192.168.1.1   192.168.1.105     25
        127.0.0.0        255.0.0.0         On-link       127.0.0.1    331
        127.0.0.1  255.255.255.255         On-link       127.0.0.1    331
  127.255.255.255  255.255.255.255         On-link       127.0.0.1    331
      192.168.1.0    255.255.255.0         On-link   192.168.1.105    281
    192.168.1.105  255.255.255.255         On-link   192.168.1.105    281
    192.168.1.255  255.255.255.255         On-link   192.168.1.105    281
        224.0.0.0        240.0.0.0         On-link       127.0.0.1    331
  255.255.255.255  255.255.255.255         On-link       127.0.0.1    331
```

**Key entries explained:**

**1. Default route (0.0.0.0/0):**
```
Network Destination: 0.0.0.0
Netmask: 0.0.0.0
Gateway: 192.168.1.1 ← Your router!
Interface: 192.168.1.105 ← Your IP
Metric: 25
```

**Meaning:** "For ANY destination not in this table, send to 192.168.1.1"

---

**2. Loopback (127.0.0.0/8):**
```
Network Destination: 127.0.0.0
Netmask: 255.0.0.0
Gateway: On-link (local, no gateway needed)
```

**Meaning:** "Traffic to 127.x.x.x stays on this computer"

---

**3. Local network (192.168.1.0/24):**
```
Network Destination: 192.168.1.0
Netmask: 255.255.255.0
Gateway: On-link (same subnet, direct delivery)
Interface: 192.168.1.105
```

**Meaning:** "Traffic to 192.168.1.x is on my local network, deliver directly"

---

**4. Host route (192.168.1.105/32):**
```
Network Destination: 192.168.1.105
Netmask: 255.255.255.255
Gateway: On-link
```

**Meaning:** "Traffic to my own IP is for me"

---

**5. Broadcast (192.168.1.255):**
```
Network Destination: 192.168.1.255
Netmask: 255.255.255.255
Gateway: On-link
```

**Meaning:** "Local subnet broadcast"

---

**6. Multicast (224.0.0.0/4):**
```
Network Destination: 224.0.0.0
Netmask: 240.0.0.0
Gateway: On-link
```

**Meaning:** "Multicast traffic"

---

### Activity B: Default Route Testing

**Test 1: Ping local device (192.168.1.1)**
```
C:\>ping 192.168.1.1

Pinging 192.168.1.1 with 32 bytes of data:
Reply from 192.168.1.1: bytes=32 time=1ms TTL=64
```

**Result:** Works ✅

**Route used:** Local network route (192.168.1.0/24)
- Destination matches local subnet
- Sends directly (no gateway)
- ARP to find MAC address
- Frame delivered on local LAN

---

**Test 2: Ping internet (8.8.8.8)**
```
C:\>ping 8.8.8.8

Pinging 8.8.8.8 with 32 bytes of data:
Reply from 8.8.8.8: bytes=32 time=15ms TTL=118
```

**Result:** Works ✅

**Route used:** Default route (0.0.0.0/0)
- Destination (8.8.8.8) doesn't match any specific route
- Uses default route → gateway 192.168.1.1
- Router forwards to ISP
- ISP forwards to Google
- Reply comes back same path

---

**Test 3: Traceroute**
```
C:\>tracert 8.8.8.8

Tracing route to dns.google [8.8.8.8]
over a maximum of 30 hops:

  1    <1 ms    <1 ms    <1 ms  192.168.1.1 ← Your router
  2    10 ms    11 ms     9 ms  10.45.32.1  ← ISP router
  3    12 ms    11 ms    12 ms  72.14.215.85 ← ISP backbone
  4    15 ms    14 ms    15 ms  108.170.252.1
  5    14 ms    15 ms    14 ms  142.251.51.187
  6    15 ms    15 ms    14 ms  8.8.8.8 ← Google DNS

Trace complete.
```

**What this shows:**
- **Hop 1:** Your router (192.168.1.1)
- **Hop 2:** ISP's router
- **Hops 3-5:** Internet backbone routers
- **Hop 6:** Destination (Google)

**Each hop = routing decision!**

---

### Activity C: Static Route Configuration

**Scenario solution:**
```
ip route 10.0.1.0 255.255.255.0 [Branch Router IP]
```

**Breakdown:**
- **10.0.1.0:** Destination network
- **255.255.255.0:** Subnet mask (/24)
- **[Branch Router IP]:** Next-hop router (where to send packets)

**Complete example:**
```
Office Router (10.0.0.1):
  ip route 10.0.1.0 255.255.255.0 10.0.0.254

Branch Router (10.0.1.1):
  ip route 10.0.0.0 255.255.255.0 10.0.0.254
```

**Result:** Both networks can communicate!

**Static route pros:**
- Simple, predictable
- No routing protocol overhead
- Full control
- Works on any device

**Static route cons:**
- Doesn't adapt to failures
- Manual configuration (scales poorly)
- No automatic failover
- High administrative overhead

**When to use static routes:**
- Small networks (< 10 routers)
- Stub networks (only one path out)
- Default routes
- Policy routing

---

### Activity D: Routing Protocol Comparison

| Protocol | Type | Metric | Max Distance | Speed | Use Case |
|----------|------|--------|--------------|-------|----------|
| RIP | Distance Vector | **Hop count** | 15 hops | Slow | **Small/legacy** |
| OSPF | **Link State** | Cost (bandwidth) | Unlimited | **Fast** | Enterprise |
| EIGRP | **Hybrid** | Composite | **Unlimited** | Fast | **Cisco networks** |
| BGP | Path Vector | **AS Path** | Unlimited | Varies | **Internet/ISP** |

**Detailed comparison:**

**RIP (Routing Information Protocol):**
- Oldest (1988)
- Very simple
- Updates every 30 seconds
- Convergence: Slow (minutes)
- Use: Only small/legacy networks

**OSPF (Open Shortest Path First):**
- Open standard (1989)
- Complex but powerful
- Event-driven updates
- Convergence: Fast (seconds)
- Use: Enterprise standard

**EIGRP (Enhanced Interior Gateway Routing Protocol):**
- Cisco proprietary (now open)
- Best of both worlds (hybrid)
- Fast convergence
- Low overhead
- Use: Cisco-heavy environments

**BGP (Border Gateway Protocol):**
- Internet backbone protocol
- Policy-based routing
- Slow convergence (minutes)
- Massive scale (800,000+ routes)
- Use: ISPs, large enterprises

---

### Activity E: Routing Metric Scenarios

**Scenario 1: Simple small network**
- **Best metric:** Hop count
- **Best protocol:** RIP
- **Why:** All links same speed, simplicity matters more than optimization

---

**Scenario 2: Complex enterprise**
- **Best metric:** Cost (bandwidth-based)
- **Best protocol:** OSPF
- **Why:** 
  - Considers link speeds
  - Fast convergence critical
  - Scales to 50+ routers
  - Open standard

---

**Scenario 3: Multi-ISP connection**
- **Best metric:** AS Path length and policy
- **Best protocol:** BGP
- **Why:**
  - Need path control
  - Policy-based decisions
  - Redundancy between ISPs
  - Only protocol that works between organizations

---

### Activity F: Hop Count vs Bandwidth

**RIP's choice:** Path 2 (A → C directly)

**Why?** Fewer hops (1 hop vs 2 hops)

**Is this optimal?** NO ❌

**Problem:**
- Path 2: 1 hop, 10 Mbps (slow!)
- Path 1: 2 hops, 1 Gbps each (100× faster!)
- RIP ignores speed, only counts hops

**Real-world impact:**
- Large file transfer takes 10× longer
- User frustration
- Inefficient network utilization

**Solution: Use OSPF**
- OSPF calculates cost based on bandwidth
- Cost = 100 Mbps / interface bandwidth
- Path 1: Cost = 100/1000 + 100/1000 = 0.2
- Path 2: Cost = 100/10 = 10
- OSPF chooses Path 1 (lower cost) ✅

---

### Activity G: Administrative Distance

**Administrative Distance table:**

| Route Source | Administrative Distance | Trust Level |
|--------------|------------------------|-------------|
| Directly connected | **0** | Most trusted |
| Static route | **1** | Very trusted |
| EIGRP | **90** | Trusted |
| OSPF | **110** | Trusted |
| RIP | **120** | Least trusted |

**Additional ADs:**
- External BGP (eBGP): 20
- Internal BGP (iBGP): 200
- Unknown: 255 (never use)

---

**Scenario answer:**

**Routes learned:**
- Static route (AD 1)
- OSPF (AD 110)
- RIP (AD 120)

**Which route is used?** Static route

**Why?** Lowest AD (1) wins

**Routing table entry:**
```
10.0.0.0/24 via [static next-hop] (AD 1)
```

**The other routes (OSPF, RIP) are:**
- Learned and stored
- Not installed in routing table
- Used as backup if static route fails

**When AD matters:**
- Multiple routing protocols running
- Redistribution between protocols
- Overriding dynamic routes with static
- Policy routing

---

### Activity H: OSPF Areas

**Completed diagram:**

```
           [Internet]
                |
           [Router R1] (ABR - Area Border Router)
                |
         (Area 0 - Backbone)
                |
           /    |    \
          /     |     \
    [R2]     [R3]     [R4]  (All ABRs)
     |        |        |
  Area 1   Area 2   Area 3
  (Sales)  (Eng)    (HR)
```

**OSPF area rules:**

1. **Area 0 (backbone):**
   - Must exist
   - All areas connect to Area 0
   - Transit area for inter-area traffic

2. **Regular areas (1, 2, 3):**
   - Connected to Area 0 via ABR
   - Can't connect directly to each other
   - Must go through Area 0

3. **ABR (Area Border Router):**
   - Connects two or more areas
   - Maintains separate topology database per area
   - Summarizes routes between areas

---

**Why areas?**

**Without areas (flat OSPF):**
- All routers know about all links
- Large topology databases
- Every change floods entire network
- Doesn't scale past ~100 routers

**With areas:**
- Each area is isolated
- Changes only flood within area
- Summary routes between areas
- Scales to 1000+ routers

**Example (Sales sends to HR):**
```
Sales (Area 1) → R2 (ABR) → Area 0 → R4 (ABR) → HR (Area 3)
```

All inter-area traffic crosses Area 0!

---

### Activity I: Routing Loop Prevention

**Loop prevention mechanisms:**

**1. Split Horizon:**
- Don't advertise routes back to source
- If Router B learned 10.0.0.0/24 from Router A
- Router B doesn't advertise 10.0.0.0/24 back to A

**2. Poison Reverse:**
- When route fails, advertise with infinite metric
- Router A: "10.0.0.0/24 is unreachable (metric 16)"
- Other routers immediately know it's down

**3. Hold-down Timer:**
- After route fails, ignore new routes for X seconds
- Prevents premature acceptance of bad routes
- Gives network time to stabilize

**4. Maximum Metric:**
- RIP: 16 = infinity (unreachable)
- Prevents count-to-infinity
- Limits network diameter

---

**Why loops are catastrophic:**

**Loop packet journey:**
```
TTL=64: A → B → C → A → B → C → A...
TTL=63: A → B → C → A → B → C → A...
TTL=62: A → B → C → A → B → C → A...
...
TTL=1: A → B (dropped)
```

**Impact:**
- Packet loops until TTL expires
- Wastes bandwidth on every link
- All looped packets waste resources
- Network becomes unusable

**With loop prevention:** Network converges correctly, no loops!

---

### Activity J: BGP and Autonomous Systems

**AS (Autonomous System) = Organization's network**

**Major AS numbers:**
- AS 7018: AT&T
- AS 15169: Google
- AS 32934: Facebook (Meta)
- AS 13335: Cloudflare
- AS 16509: Amazon
- AS 8075: Microsoft

**AS number ranges:**
- 1-64511: Public (IANA assigned)
- 64512-65534: Private (like RFC 1918 for AS)
- 65535: Reserved

---

**BGP path selection:**

**Not just shortest path!** BGP considers:
1. Weight (local preference)
2. Local preference
3. Locally originated routes
4. AS path length (shorter better)
5. Origin type
6. MED (Multi-Exit Discriminator)
7. eBGP over iBGP
8. IGP metric
9. Router ID

**Policy-based routing example:**
- ISP A: Cheaper but slower
- ISP B: Expensive but faster
- Use BGP to send:
  - Bulk traffic → ISP A
  - Critical traffic → ISP B

**Why BGP is essential:**
- 800,000+ routes on internet
- Connects 70,000+ autonomous systems
- Makes internet routing decisions
- Without BGP, internet doesn't work

---

### Activity K: Convergence Time

**Ranking (fastest to slowest):**

1. **EIGRP (1-3 seconds)**
   - Feasible successors pre-calculated
   - Instant failover if backup exists
   - Fast query process if no backup

2. **OSPF (3-5 seconds)**
   - Event-driven updates
   - SPF calculation on change
   - Fast but must recalculate

3. **RIP (30+ seconds to minutes)**
   - Updates every 30 seconds
   - Hold-down timers
   - Count-to-infinity problem

---

**Why convergence matters:**

**Fast convergence (seconds):**
- ✅ VoIP calls continue
- ✅ Video streams uninterrupted
- ✅ Users don't notice
- ✅ High availability

**Slow convergence (minutes):**
- ❌ Dropped calls
- ❌ Video buffering
- ❌ Timeouts
- ❌ User complaints

**Real-world example:**
- Link fails at 10:00:00
- EIGRP converges by 10:00:02 → users experience 2-second blip
- RIP converges by 10:01:30 → 90 seconds of downtime!

---

### Activity L: Route Summarization

**Given networks:**
- 192.168.0.0/24
- 192.168.1.0/24
- 192.168.2.0/24
- 192.168.3.0/24

**Summary route: 192.168.0.0/22**

**Binary breakdown:**
```
192.168.0.0 = 11000000.10101000.00000000.00000000
192.168.1.0 = 11000000.10101000.00000001.00000000
192.168.2.0 = 11000000.10101000.00000010.00000000
192.168.3.0 = 11000000.10101000.00000011.00000000
              └────────────────────────┘└──────┘
                   22 bits match        2 bits vary
```

**Summary covers:**
- 192.168.0.0/24 → 192.168.0.0 - 192.168.0.255
- 192.168.1.0/24 → 192.168.1.0 - 192.168.1.255
- 192.168.2.0/24 → 192.168.2.0 - 192.168.2.255
- 192.168.3.0/24 → 192.168.3.0 - 192.168.3.255

**192.168.0.0/22 → 192.168.0.0 - 192.168.3.255** (all four!)

---

**Benefits of summarization:**

**Routing table size:**
- Without: 4 entries
- With: 1 entry
- Larger networks: 100 routes → 1 route!

**Update traffic:**
- Fewer routes = smaller updates
- Less bandwidth used
- Faster convergence

**Stability:**
- Flapping route in Area 1
- Summary prevents flaps from affecting Area 2
- More stable network

**Example: ISP advertising to BGP:**
- Customer has 256 /24 networks
- Without summary: 256 BGP routes
- With summary: 1 /16 route
- Internet routing table stays manageable

---

## Section 3: Reflection

**1. Company with 10 branch offices:**

**Static vs dynamic?** Dynamic routing (OSPF or EIGRP)

**Why?**
- 10 offices = too many static routes
- Link failures need automatic rerouting
- Redundant paths for high availability
- Scalability for future growth

**If link goes down:**
- Static: Manual intervention required ❌
- Dynamic: Automatic failover ✅

**Protocol choice:** OSPF
- Open standard (works with any vendor)
- Scales well
- Fast convergence
- Industry standard

---

**2. RIP's 15-hop limitation:**

**Why 15 hops?**
- Prevents count-to-infinity
- 16 = infinity (unreachable)
- Design choice from 1988 (simpler times!)

**What if network needs more?**
- Use OSPF or EIGRP (no hop limit)
- Redesign network (probably too large/inefficient)
- Modern networks shouldn't be that deep

**When is RIP still appropriate?**
- Very small networks (2-3 routers)
- Home lab learning
- Legacy equipment that only supports RIP
- **Reality: Almost never use RIP in production!**

---

**3. OSPF vs EIGRP:**

**OSPF advantages:**
- Open standard (RFC 2328)
- Works with any vendor
- Industry wide support
- More documented/training available

**EIGRP advantages:**
- Faster convergence
- Lower overhead
- Easier configuration (in Cisco world)
- Composite metric (more flexible)

**Vendor lock-in concerns:**
- EIGRP now open standard (2013)
- Still: Cisco implements it best
- Mixed vendors → use OSPF
- All-Cisco → EIGRP is fine

**Modern answer:** Use OSPF unless all-Cisco and need absolute best performance

---

**4. Static route vs OSPF:**

**Which is used?** Static route (AD 1 < AD 110)

**Is this desirable?** Usually YES ✅

**Why?**
- Static routes are intentional/configured
- Should take priority over dynamic
- Allows policy routing
- Override automatic behavior

**When would you change this?**
- Floating static route (backup)
- Set higher AD on static (e.g., 200)
- Used when primary dynamic route fails

**Example floating static:**
```
ip route 10.0.0.0 255.255.255.0 192.168.1.1 200
```
- AD 200 > OSPF's 110
- Only used if OSPF route disappears
- Provides backup path

---

## Key Concepts Summary

**Routing table:**
- Default route (0.0.0.0/0)
- Specific routes
- Most specific wins (longest prefix match)

**Static vs Dynamic:**
- Static: Manual, predictable
- Dynamic: Automatic, scalable

**Routing protocols:**
- RIP: Simple, limited (15 hops)
- OSPF: Enterprise standard
- EIGRP: Cisco, fast
- BGP: Internet backbone

**Metrics:**
- RIP: Hop count
- OSPF: Cost (bandwidth)
- EIGRP: Composite
- BGP: AS path + policy

**Administrative distance:**
- Lower = more trusted
- Tiebreaker between protocols

---

## Exam Tips

**Memorize:**
- RIP: 15 max hops, hop count metric
- OSPF: Link state, cost metric, Area 0 required
- EIGRP: Hybrid, Cisco (now open)
- BGP: Internet, AS path
- Administrative distance: Static (1), EIGRP (90), OSPF (110), RIP (120)

**Common questions:**
- "Which protocol uses hop count?" → RIP
- "Max hops for RIP?" → 15
- "What is administrative distance?" → Route source trustworthiness
- "Internet routing protocol?" → BGP
- "OSPF backbone area?" → Area 0

---

## Did It Work?

If you were able to:
- ✅ View and understand your routing table
- ✅ Understand default route function
- ✅ Trace packet paths with tracert
- ✅ Understand static route configuration
- ✅ Compare routing protocols
- ✅ Understand routing metrics
- ✅ Know administrative distance
- ✅ Understand OSPF areas
- ✅ Know routing loop prevention
- ✅ Understand BGP and AS numbers
- ✅ Compare convergence times
- ✅ Understand route summarization

**You understand routing!**

Routing is what makes networks networks. Without routing, you just have isolated LANs!

**Next:** Wireless networking (WiFi 6, 802.11ax, standards)