# Lesson 12 Lab: Routing Fundamentals and Protocols

**Estimated Time:** 30-35 minutes  
**Topics:** Routing tables, Static routes, Routing protocols, Metrics, Administrative distance

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand routing:

1. **What does a router use to make forwarding decisions?**
   - a) MAC addresses
   - b) Port numbers
   - c) IP addresses
   - d) VLAN tags

2. **Which routing protocol uses hop count as its metric?**
   - a) OSPF
   - b) EIGRP
   - c) RIP
   - d) BGP

3. **What is the maximum hop count for RIP?**
   - a) 10
   - b) 15
   - c) 255
   - d) Unlimited

4. **Which routing protocol is used between different ISPs on the internet?**
   - a) RIP
   - b) OSPF
   - c) EIGRP
   - d) BGP

5. **What is administrative distance used for?**
   - a) To determine hop count
   - b) To choose between routes learned from different protocols
   - c) To calculate bandwidth
   - d) To set VLAN IDs

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: View Your Computer's Routing Table

**Every device has a routing table that tells it where to send packets.**

**Windows:**
```
route print
```

**Mac/Linux:**
```
netstat -rn
```

OR

```
ip route
```

**Example output (Windows):**
```
IPv4 Route Table
===========================================================================
Network Destination    Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0      192.168.1.1   192.168.1.105     25
        127.0.0.0        255.0.0.0         On-link       127.0.0.1    331
      192.168.1.0    255.255.255.0         On-link   192.168.1.105    281
```

**Write down your routing table entries:**

1. **Default route (0.0.0.0):**
   - Gateway: _________________________________
   - This is your router!

2. **Local network route (192.168.x.0 or 10.x.x.0):**
   - Network: _________________________________
   - Interface: _________________________________

3. **Loopback route (127.0.0.0):**
   - Gateway: On-link (local to this computer)

---

### Activity B: Understanding the Default Route

**The default route (0.0.0.0/0) is the "route of last resort."**

**What it means:**
- If destination doesn't match any other route
- Send to default gateway
- Usually your home router

**Test it:**

1. **Ping a local device (same network):**
```
ping 192.168.1.1
```

**Does it work?** _________________________________

**Route used:** Local network route (doesn't need gateway)

---

2. **Ping an internet site:**
```
ping 8.8.8.8
```

**Does it work?** _________________________________

**Route used:** Default route (sends to gateway, which forwards to internet)

---

3. **Traceroute to see the path:**
```
tracert 8.8.8.8
```

**First hop:** _________________________________ (your router)
**How many hops total:** _________________________________ (probably 8-15)

**What this shows:** Every hop is a router making forwarding decisions!

---

### Activity C: Static Route Simulation

**Static routes are manually configured (not learned automatically).**

**Scenario:** You have two networks and want them to communicate

```
Network A: 192.168.1.0/24
    |
[Router A] ---- [Router B]
    |
Network B: 192.168.2.0/24
```

**On Router A, you'd configure:**
```
ip route 192.168.2.0 255.255.255.0 [Router B's IP]
```

**Translation:** "To reach 192.168.2.0/24, send packets to Router B"

---

**Your turn - Fill in the static route:**

**Scenario:** Your office network

```
Office LAN: 10.0.0.0/24 (Your computer here)
     |
[Office Router 10.0.0.1] ---- [Branch Office Router 10.0.1.1]
     |
Branch LAN: 10.0.1.0/24 (Remote workers)
```

**To reach branch office from your computer:**

**Static route on Office Router:**
```
ip route ________________ ________________ ________________
          (network)       (mask)          (next-hop)
```

**Answer:** ip route 10.0.1.0 255.255.255.0 [Branch Router IP]

---

### Activity D: Routing Protocol Comparison

**Fill in the comparison table:**

| Protocol | Type | Metric | Max Distance | Speed | Use Case |
|----------|------|--------|--------------|-------|----------|
| RIP | Distance Vector | ________ | 15 hops | Slow | ________ |
| OSPF | ________ | Cost (bandwidth) | Unlimited | ________ | Enterprise |
| EIGRP | ________ | Composite | ________ | Fast | ________ |
| BGP | Path Vector | ________ | Unlimited | Varies | ________ |

---

### Activity E: Routing Metric Scenarios

**For each scenario, which metric is most appropriate?**

**Scenario 1: Simple small network**
- 5 routers
- All links same speed (1 Gbps)
- Need simple routing

**Best metric:** _________________________________ (hop count)
**Best protocol:** _________________________________ (RIP)
**Why:** _________________________________

---

**Scenario 2: Complex enterprise network**
- 50 routers
- Mix of speeds (100 Mbps to 10 Gbps)
- Need fast convergence

**Best metric:** _________________________________ (cost/bandwidth)
**Best protocol:** _________________________________ (OSPF)
**Why:** _________________________________

---

**Scenario 3: Multi-ISP internet connection**
- Connecting to multiple ISPs
- Need to control inbound/outbound paths
- Global internet routing

**Best metric:** _________________________________ (AS path)
**Best protocol:** _________________________________ (BGP)
**Why:** _________________________________

---

### Activity F: Hop Count vs Bandwidth

**RIP problem:** Only counts hops, ignores speed!

**Network diagram:**
```
[A] ----1 Gbps---- [B] ----1 Gbps---- [C]
 |                                      |
 +----------10 Mbps-------------------+
```

**Two paths from A to C:**
- Path 1: A → B → C (2 hops, 1 Gbps each)
- Path 2: A → C (1 hop, 10 Mbps)

**Which path does RIP choose?** _________________________________

**Why?** _________________________________

**Is this optimal?** _________________________________

**Better solution:** Use OSPF (considers bandwidth)

---

### Activity G: Administrative Distance

**When multiple routing protocols suggest different routes, which wins?**

**Answer:** Lower administrative distance (AD) wins!

**Fill in the administrative distances:**

| Route Source | Administrative Distance |
|--------------|------------------------|
| Directly connected | ____ |
| Static route | ____ |
| EIGRP | ____ |
| OSPF | ____ |
| RIP | ____ |

**Hint:**
- Directly connected: 0 (most trusted)
- Static route: 1
- EIGRP: 90
- OSPF: 110
- RIP: 120 (least trusted)

---

**Scenario:** Router learns about 10.0.0.0/24 from three sources:
- Static route (AD 1)
- OSPF (AD 110)
- RIP (AD 120)

**Which route is installed in routing table?** _________________________________

**Why?** _________________________________

---

### Activity H: OSPF Areas Concept

**OSPF divides networks into areas to reduce routing overhead.**

**Draw and label the areas:**

```
           [Internet]
                |
           [Router R1]
                |
         (Area 0 - Backbone)
           /    |    \
          /     |     \
    [R2]     [R3]     [R4]
     |        |        |
  Area 1   Area 2   Area 3
  (Sales)  (Eng)    (HR)
```

**Key concepts:**
- **Area 0:** Backbone (all areas connect to it)
- **Area 1, 2, 3:** Regular areas
- **All inter-area traffic** goes through Area 0

**Why areas?**
- Reduces routing table size
- Limits flooding of updates
- Improves convergence time
- Better scalability

---

### Activity I: Routing Loop Problem

**Without loop prevention, routing loops crash networks!**

**Scenario:**
```
[Router A] ---- [Router B]
     |              |
     +----[Router C]----+
```

**Network 10.0.0.0/24 is behind Router A**

**Normal operation:**
- A: "10.0.0.0/24 is directly connected"
- B: "10.0.0.0/24 is via A (1 hop)"
- C: "10.0.0.0/24 is via A (1 hop)"

---

**10.0.0.0/24 network goes DOWN:**

**Without loop prevention:**

1. **A:** "10.0.0.0/24 is down, removing from table"
2. **B hears from C:** "I can reach 10.0.0.0/24 in 1 hop"
3. **B thinks:** "Great! Route via C (2 hops)"
4. **A hears from B:** "I can reach 10.0.0.0/24 in 2 hops"
5. **A thinks:** "Great! Route via B (3 hops)"
6. **C hears from A:** "I can reach 10.0.0.0/24 in 3 hops"
7. **Loop continues forever!** (Count to infinity)

**Packet journey:**
- Packet enters A → forwards to B
- B forwards to C
- C forwards to A
- A forwards to B
- **LOOP!** Packet circles forever until TTL expires

---

**Loop prevention mechanisms:**

**Split Horizon:** Don't advertise routes back to the interface you learned them from

**Poison Reverse:** Advertise unreachable networks with infinite metric (16 for RIP)

**Hold-down timers:** Wait before accepting new routes for recently failed networks

**Maximum hop count:** RIP uses 15 max (16 = unreachable/infinity)

---

### Activity J: BGP Autonomous Systems

**BGP is used between different organizations (ISPs, large companies).**

**Autonomous System (AS) = A network under single administrative control**

**Examples:**
- AS 7018: AT&T
- AS 15169: Google
- AS 32934: Facebook
- Your ISP: Has an AS number

**Scenario:** Your website is hosted at a data center

```
[Your Computer]
      |
   (Your ISP)
    AS 1234
      |
  (Internet)
      |
   (Data Center ISP)
    AS 5678
      |
[Your Website]
```

**BGP path:** AS 1234 → AS 5678

**Why BGP?**
- Routes between different organizations
- Policy-based routing (not just shortest path)
- Can control inbound/outbound traffic
- Essential for internet infrastructure

---

### Activity K: Convergence Time

**Convergence = time for all routers to learn about a topology change**

**Scenario:** A link goes down. How long until all routers know?

**Rank protocols by convergence speed (fastest to slowest):**

1. _________________________ (seconds)
2. _________________________ (seconds)
3. _________________________ (minutes)

**Answer:**
1. EIGRP (1-3 seconds)
2. OSPF (3-5 seconds)
3. RIP (30+ seconds to minutes)

**Why it matters:**
- Faster convergence = less downtime
- Critical for high-availability networks
- VoIP and video can't tolerate long outages

---

### Activity L: Route Summarization

**Summarization reduces routing table size by combining multiple networks.**

**Scenario:** You have 4 networks to advertise:
- 192.168.0.0/24
- 192.168.1.0/24
- 192.168.2.0/24
- 192.168.3.0/24

**Instead of 4 separate routes, advertise ONE summary route:**

**Summary route:** 192.168.0.0/22

**Benefits:**
- 1 route instead of 4
- Smaller routing tables
- Faster lookups
- Less memory usage
- Reduced update traffic

**Calculation:**
```
192.168.0.0 = 11000000.10101000.00000000.00000000
192.168.1.0 = 11000000.10101000.00000001.00000000
192.168.2.0 = 11000000.10101000.00000010.00000000
192.168.3.0 = 11000000.10101000.00000011.00000000
              └────────────────────────┘└──────┘
                   Common bits (22)     Different (2)
```

**Summary: 192.168.0.0/22** covers all four /24 networks

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Your company has 10 branch offices:**
   - Should you use static routes or dynamic routing?
   - What if a link goes down?
   - Which protocol would you choose?

2. **RIP has a max of 15 hops:**
   - Why this limitation?
   - What if your network needs more?
   - When is RIP still appropriate?

3. **OSPF vs EIGRP - which is better?**
   - OSPF is open standard
   - EIGRP is Cisco proprietary (used to be)
   - Does vendor lock-in matter?

4. **Your router learns the same route from OSPF and a static route:**
   - Which one is used?
   - Is this always desirable?
   - When would you want to change this?

---

## What You Learned Today

- ✅ You viewed your computer's routing table
- ✅ You understand the default route (0.0.0.0/0)
- ✅ You traced packets to see router hops
- ✅ You understand static routes
- ✅ You compared routing protocols (RIP, OSPF, EIGRP, BGP)
- ✅ You learned routing metrics (hop count, cost, composite)
- ✅ You understand administrative distance
- ✅ You learned about OSPF areas
- ✅ You understand routing loops and prevention
- ✅ You learned about BGP and AS numbers
- ✅ You understand convergence time importance
- ✅ You learned route summarization benefits

**Next Lesson:** Wireless Networking (Wi-Fi 6/6E, 802.11 standards)