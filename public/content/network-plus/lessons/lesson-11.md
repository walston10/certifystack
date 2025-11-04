# Lesson 11: Switches, VLANs, and Trunking

**Estimated Time:** 30-35 minutes  
**Domain:** Network Infrastructure  
**Exam Objectives Covered:** 2.1, 2.3 - Network Devices and VLANs

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain how switches learn MAC addresses and build forwarding tables
- Differentiate between collision domains and broadcast domains
- Describe the five actions switches perform (learning, flooding, forwarding, filtering, aging)
- Understand VLANs and why they're used for segmentation
- Configure trunk links using 802.1Q tagging
- Distinguish between access ports and trunk ports
- Explain inter-VLAN routing methods (router-on-a-stick vs Layer 3 switch)
- Describe how Spanning Tree Protocol prevents loops
- Identify STP port states and their purposes
- Configure basic port security and understand port mirroring

---

## Video Resources

🔹 **Switch Fundamentals:** [How Switches Work - PowerCert](https://www.youtube.com/watch?v=9eH16Fxeb9o)  
🔹 **VLANs Explained:** [VLANs - NetworkChuck](https://www.youtube.com/watch?v=jC6MJTh9fRE)  
🔹 **802.1Q Trunking:** [VLAN Trunking - Professor Messer](https://www.youtube.com/watch?v=MmwF1oHOvmg)  
🔹 **Spanning Tree Protocol:** [STP Explained - Sunny Classroom](https://www.youtube.com/watch?v=japdEY1UKe4)  
🔹 **Inter-VLAN Routing:** [Router on a Stick - NetworkChuck](https://www.youtube.com/watch?v=0Hhd64JkH9Q)

---

## Introduction

Picture a busy office building with 300 employees on one floor. Everyone's computer is shouting messages into the same crowded hallway, collisions happen constantly, and it's chaos. Now imagine you could magically divide that floor into separate departments - accounting only talks to accounting, sales only talks to sales - but they can still collaborate when needed.

**That's exactly what switches and VLANs do for your network.**

Without switches, networks would be like old-school hubs - every message goes to every device, causing collisions and congestion. Without VLANs, your entire network would be one giant broadcast domain where every device hears every broadcast message.

**Switches solve the collision problem. VLANs solve the broadcast problem.**

These technologies are fundamental to modern networks:

- **Switches** intelligently forward traffic based on MAC addresses, creating separate collision domains for each port
- **VLANs** divide a switch into multiple logical networks, improving security and reducing broadcast traffic
- **Trunking** allows VLANs to travel between switches, maintaining segmentation across your infrastructure
- **Spanning Tree Protocol** prevents catastrophic network loops that would bring everything down

**Why does this matter for Network+?**

The exam loves switch and VLAN questions. You'll see scenarios about configuring VLANs, troubleshooting trunk links, understanding STP behavior, and designing segmented networks. This lesson covers concepts that appear in multiple exam domains.

**Today's mission:** Master how switches work at Layer 2, understand VLAN segmentation, learn trunking protocols, and grasp how STP keeps your network stable.

Let's turn that chaotic office into an organized, efficient operation.

---

## Switch Fundamentals: How Layer 2 Switching Works

### The Problem with Hubs

Before switches, networks used **hubs** - simple devices that just repeated every signal to every port. If Device A sent a frame to Device B, the hub forwarded it to Devices C, D, E, and everyone else too.

**Problems with hubs:**
- Every device receives every frame (wasted bandwidth)
- Only one device can transmit at a time (half-duplex)
- Collisions are common and slow everything down
- One collision domain for the entire hub
- Performance degrades as you add devices

**Switches changed everything.**

---

### How Switches Are Smarter

A **switch** is a Layer 2 device that makes intelligent forwarding decisions based on MAC addresses. Unlike a hub that floods everything everywhere, a switch learns which devices are connected to which ports and forwards frames only to the intended destination.

**Think of it like this:**

**Hub = Shouting in a crowded room**
- Everyone hears everything
- Only one person can talk at a time
- Lots of confusion

**Switch = Postal service with street addresses**
- Mail goes only to the intended recipient
- Multiple deliveries can happen simultaneously
- Much more efficient

---

### The MAC Address Table: A Switch's Brain

Every switch maintains a **MAC address table** (also called a CAM table - Content Addressable Memory). This table maps MAC addresses to specific switch ports.

```
MAC Address         Port    VLAN
----------------------------------
00:1A:2B:3C:4D:5E   Gi0/1   10
00:5E:4D:3C:2B:1A   Gi0/3   10
AA:BB:CC:DD:EE:FF   Gi0/5   20
11:22:33:44:55:66   Gi0/8   30
```

**How the switch builds this table:**

When a frame enters a port, the switch examines the **source MAC address** and records: "Device with MAC 00:1A:2B:3C:4D:5E is on port Gi0/1."

Over time, the switch learns where every device is located.

---

### The Five Switch Operations

Switches perform five key operations with every frame:

#### **1. Learning**

When a frame arrives, the switch reads the **source MAC address** and associates it with the incoming port.

**Example:**
- Frame arrives on Port 5 with source MAC `AA:BB:CC:DD:EE:FF`
- Switch adds: `AA:BB:CC:DD:EE:FF → Port 5` to its MAC table

This happens constantly and automatically.

#### **2. Flooding**

If the switch doesn't know where the **destination MAC address** is (not in the table), it **floods** the frame out all ports except the one it came in on.

**Example:**
- Frame arrives on Port 2 destined for MAC `11:22:33:44:55:66`
- Switch checks table - unknown destination
- Switch sends frame out Ports 1, 3, 4, 5, 6, etc. (but not Port 2)

**When flooding happens:**
- Unknown destination (not in MAC table)
- Broadcast frame (FF:FF:FF:FF:FF:FF)
- Multicast frame

#### **3. Forwarding**

If the switch **knows** where the destination MAC is, it forwards the frame out only the appropriate port.

**Example:**
- Frame arrives destined for MAC `AA:BB:CC:DD:EE:FF`
- Switch checks table: "That's on Port 5"
- Frame goes out Port 5 only

**This is the magic of switching** - precise delivery instead of flooding.

#### **4. Filtering**

If the destination MAC is on the **same port** as the source MAC, the switch drops the frame. No need to forward it anywhere since the devices are on the same segment.

**Example:**
- Frame arrives on Port 3 with source MAC `XX:XX:XX:XX:XX:XX`
- Destination MAC is `YY:YY:YY:YY:YY:YY` which is also on Port 3
- Switch discards frame (devices are on same collision domain)

#### **5. Aging**

MAC addresses don't stay in the table forever. Entries have a **timeout** (typically 300 seconds / 5 minutes). If a MAC address hasn't sent any frames in that time, the switch removes it from the table.

**Why aging?**
- Devices move to different ports (laptops roaming)
- Devices get disconnected
- Prevents stale entries from filling the table

If a device sends another frame, the switch relearns its location.

---

### Collision Domains vs Broadcast Domains

Understanding these concepts is critical for Network+.

#### **Collision Domain**

A **collision domain** is a network segment where two devices can transmit simultaneously and cause a collision.

**Hub:** One collision domain (everyone collides with everyone)  
**Switch:** Each port is its own collision domain

**Why switches are better:**
- Port 1 and Port 2 can transmit simultaneously without interfering
- Full-duplex communication (send and receive at the same time)
- No collisions = better performance

#### **Broadcast Domain**

A **broadcast domain** is a network segment where a broadcast frame reaches all devices.

**Switch:** All ports are in the same broadcast domain (by default)  
**Router:** Separates broadcast domains  
**VLAN:** Creates multiple broadcast domains on one switch

**Example:**

Without VLANs, if Device A on Port 1 sends a broadcast (like an ARP request), every port on the switch receives it - even if they're on different floors, different departments, etc.

**This is a problem:**
- Wastes bandwidth (unnecessary traffic)
- Security risk (everyone sees everyone's broadcasts)
- Poor organization

**VLANs solve this problem.**

---

## VLANs: Virtual LANs for Segmentation

### What Is a VLAN?

A **VLAN (Virtual Local Area Network)** is a logical grouping of devices that creates separate broadcast domains on the same physical switch.

**Think of it like apartments in a building:**
- One building (switch) has multiple apartments (VLANs)
- Each apartment is isolated - residents can't just walk into another apartment
- Shared infrastructure (elevators, walls) but separate living spaces

**Without VLANs:**
```
[Switch]
├── Accounting PCs
├── Sales PCs
├── Guest WiFi
└── Servers

All in one broadcast domain (everyone sees everything)
```

**With VLANs:**
```
[Switch]
├── VLAN 10: Accounting (isolated)
├── VLAN 20: Sales (isolated)
├── VLAN 30: Guests (isolated)
└── VLAN 40: Servers (isolated)

Each VLAN is its own broadcast domain
```

---

### Why Use VLANs?

#### **1. Security**

Different departments shouldn't be on the same network segment. Accounting shouldn't see sales broadcasts. Guests shouldn't see internal servers.

**VLANs create security boundaries** without needing separate switches.

#### **2. Performance**

Broadcast traffic only reaches devices in the same VLAN. Instead of 300 devices receiving every broadcast, maybe only 30 devices in one VLAN receive it.

**Smaller broadcast domains = better performance.**

#### **3. Organization**

Group devices logically instead of physically. All accounting PCs can be in VLAN 10 even if they're on different floors or different switches.

#### **4. Cost Savings**

Use one physical switch to create multiple logical networks instead of buying separate switches for each department.

---

### VLAN IDs and Ranges

VLANs are identified by **VLAN IDs** - numbers from 1 to 4094.

**VLAN ranges:**

| Range | Description |
|-------|-------------|
| **VLAN 1** | Default VLAN (all ports start here) |
| **2-1001** | Normal range VLANs |
| **1002-1005** | Reserved for Token Ring/FDDI (legacy) |
| **1006-4094** | Extended range VLANs |

**VLAN 1 is special:**
- Every port is in VLAN 1 by default
- Native VLAN by default (more on this later)
- Cannot be deleted
- Best practice: Don't use VLAN 1 for production traffic (security)

---

### Types of VLANs

#### **Data VLAN**

Normal user traffic (PCs, laptops, workstations). Most VLANs are data VLANs.

**Example:**
- VLAN 10: Accounting department
- VLAN 20: Sales department
- VLAN 30: Engineering

#### **Voice VLAN**

Special VLAN for VoIP phones. Keeps voice traffic separate from data for quality of service (QoS).

**Why separate VLANs for voice?**
- Voice needs low latency and jitter
- Prioritize voice traffic over data
- Security (voice traffic isolated)

Cisco phones support **dual VLANs** - data VLAN for the PC plugged into the phone, voice VLAN for the phone itself.

#### **Native VLAN**

The VLAN used for **untagged traffic** on trunk links (we'll cover trunking next). VLAN 1 by default, but you can change it.

#### **Management VLAN**

A VLAN dedicated for switch management traffic (SSH, Telnet, SNMP). Keeps management separate from user traffic for security.

**Best practice:**
- Create a dedicated management VLAN (e.g., VLAN 99)
- Don't use VLAN 1
- Restrict access with ACLs

---

### Access Ports vs Trunk Ports

Switches have two types of port modes:

#### **Access Port**

An **access port** belongs to **one VLAN only** and connects to end devices (PCs, printers, phones).

**Characteristics:**
- Carries traffic for a single VLAN
- Frames are **untagged** (no VLAN tag added)
- End devices don't know VLANs exist

**Configuration (Cisco example):**
```
interface GigabitEthernet0/1
 switchport mode access
 switchport access vlan 10
```

This puts Port 1 in VLAN 10. Any device plugged in is part of VLAN 10.

#### **Trunk Port**

A **trunk port** carries traffic for **multiple VLANs** simultaneously and connects switches to switches (or switches to routers).

**Characteristics:**
- Carries traffic for multiple VLANs
- Uses **VLAN tagging** (802.1Q) to identify which VLAN each frame belongs to
- Allows VLANs to span multiple switches

**Configuration (Cisco example):**
```
interface GigabitEthernet0/24
 switchport mode trunk
 switchport trunk allowed vlan 10,20,30,40
```

This makes Port 24 a trunk carrying VLANs 10, 20, 30, and 40.

---

## 802.1Q Trunking: Tagging VLANs

### The Problem Without Tagging

If a trunk link carries multiple VLANs, how does the receiving switch know which VLAN each frame belongs to?

**Solution: VLAN Tagging.**

### What Is 802.1Q?

**802.1Q** is the industry-standard protocol for VLAN tagging. It inserts a 4-byte **VLAN tag** into Ethernet frames to identify the VLAN.

**Frame structure with 802.1Q:**

```
Original Frame:
[Dest MAC] [Source MAC] [Type] [Data] [FCS]

802.1Q Tagged Frame:
[Dest MAC] [Source MAC] [802.1Q TAG] [Type] [Data] [FCS]
                          ^
                          |
                    4-byte VLAN tag
```

**VLAN tag contains:**
- **TPID (Tag Protocol Identifier):** Always 0x8100 (identifies this as 802.1Q)
- **PCP (Priority Code Point):** 3 bits for QoS priority (0-7)
- **DEI (Drop Eligible Indicator):** 1 bit for congestion management
- **VLAN ID (VID):** 12 bits for VLAN number (1-4094)

**The process:**

1. Frame arrives on Access Port 5 (VLAN 10)
2. Switch adds 802.1Q tag with VLAN ID 10
3. Frame travels across trunk link
4. Receiving switch reads tag: "This is VLAN 10"
5. Switch forwards to ports in VLAN 10
6. If exiting on access port, switch removes tag before sending

---

### Native VLAN on Trunks

The **native VLAN** is the VLAN that travels **untagged** across a trunk link.

**Why does this exist?**

Legacy compatibility. Older devices that don't understand 802.1Q tags need a way to communicate across trunk links.

**How it works:**
- All VLANs except the native VLAN are tagged
- Native VLAN traffic crosses the trunk without tags
- VLAN 1 is the default native VLAN (but you can change it)

**Example:**

Trunk with native VLAN 99:
- VLAN 10 traffic → Tagged with VLAN 10
- VLAN 20 traffic → Tagged with VLAN 20
- VLAN 99 traffic → **Untagged**

**Critical exam concept:**

**Both sides of a trunk must agree on the native VLAN.** If Switch A uses native VLAN 1 and Switch B uses native VLAN 99, frames will end up in the wrong VLAN, causing connectivity issues.

**Best practice:**
- Use a dedicated unused VLAN as native (like VLAN 999)
- Don't use VLAN 1 (security vulnerability)
- Match native VLANs on both ends

---

### Allowed VLANs on Trunks

By default, a trunk allows **all VLANs (1-4094)** to cross. You can restrict this for security and efficiency.

**Example:**

Your switch has VLANs 10, 20, 30, but a trunk only needs to carry VLANs 10 and 20:

```
interface GigabitEthernet0/24
 switchport trunk allowed vlan 10,20
```

**Why restrict allowed VLANs?**
- Security: Don't allow unnecessary VLANs
- Efficiency: Reduce broadcast traffic on trunk
- Best practice: Only trunk VLANs that are needed

---

## Inter-VLAN Routing

**Problem:** VLANs isolate traffic. How do devices in VLAN 10 talk to devices in VLAN 20?

**Answer:** You need a **Layer 3 device** (router or Layer 3 switch) to route between VLANs.

VLANs operate at Layer 2. Routing between them requires Layer 3.

---

### Method 1: Router on a Stick (ROAS)

**Router on a stick** uses a single router interface with **subinterfaces** - one for each VLAN.

**How it works:**

```
[Switch]
  |
  | Trunk (VLANs 10, 20, 30)
  |
[Router]
  └── Gi0/0.10 (VLAN 10 gateway: 192.168.10.1)
  └── Gi0/0.20 (VLAN 20 gateway: 192.168.20.1)
  └── Gi0/0.30 (VLAN 30 gateway: 192.168.30.1)
```

**Configuration example:**

```
interface GigabitEthernet0/0
 no shutdown

interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0

interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
```

**How traffic flows:**

1. PC in VLAN 10 wants to reach PC in VLAN 20
2. PC sends traffic to default gateway (192.168.10.1 - the router)
3. Router receives frame on subinterface Gi0/0.10
4. Router routes to VLAN 20 network
5. Router sends frame out subinterface Gi0/0.20
6. Traffic reaches destination

**Pros:**
- Uses only one physical router port
- Cost-effective for small networks

**Cons:**
- All inter-VLAN traffic goes through one link (bottleneck)
- Slower than Layer 3 switch
- Not scalable for large networks

---

### Method 2: Layer 3 Switch (SVI)

A **Layer 3 switch** can route between VLANs internally using **SVIs (Switched Virtual Interfaces)**.

**SVI** = a virtual interface for each VLAN that acts as the default gateway.

**Configuration example:**

```
ip routing  (enable routing on the switch)

interface Vlan10
 ip address 192.168.10.1 255.255.255.0

interface Vlan20
 ip address 192.168.20.1 255.255.255.0

interface Vlan30
 ip address 192.168.30.1 255.255.255.0
```

**How it works:**

1. PC in VLAN 10 sends traffic to gateway 192.168.10.1
2. Layer 3 switch receives on VLAN 10 SVI
3. Switch routes internally to VLAN 20
4. Switch forwards out VLAN 20 ports

**Pros:**
- Much faster than router on a stick (wire-speed routing)
- No external router needed
- Scalable for large networks
- No single-link bottleneck

**Cons:**
- More expensive than Layer 2 switches
- More complex configuration

**Best practice:** Use Layer 3 switches for inter-VLAN routing in production networks. Router on a stick is fine for small networks or labs.

---

## Spanning Tree Protocol: Preventing Loops

### The Network Loop Problem

Switches forward broadcasts out all ports (except the source). If you create a **loop** in your switch topology, broadcasts will circulate forever, creating a **broadcast storm** that brings the entire network down in seconds.

**Example scenario:**

```
    [Switch A]
     /      \
    /        \
[Switch B]--[Switch C]

Triangle topology = loop
```

**What happens without loop prevention:**

1. PC sends broadcast frame
2. Switch A forwards to Switch B and Switch C
3. Switch B forwards to Switch C
4. Switch C forwards back to Switch A and Switch B
5. Frames loop infinitely, multiplying exponentially
6. Network saturated, everything crashes

**Broadcast storms are catastrophic.** They can take down a network in under 30 seconds.

---

### How Spanning Tree Protocol (STP) Works

**STP (IEEE 802.1D)** prevents loops by **logically blocking redundant paths** while keeping them available as backups.

**STP creates a loop-free logical topology** by:
1. Electing a root bridge (central reference point)
2. Calculating best paths to root bridge
3. Blocking redundant ports
4. If primary path fails, unblocking backup ports

**Think of it like city traffic planning:**
- Primary roads are open (forwarding)
- Alternate routes are blocked (backup)
- If primary road closes, alternate opens automatically

---

### Root Bridge Election

**Root bridge** = the switch that serves as the logical center of the spanning tree. All other switches calculate their paths relative to the root.

**Election process:**

Switches exchange **BPDUs (Bridge Protocol Data Units)** containing:
- **Bridge ID** = Priority (default 32768) + MAC address

**Lowest Bridge ID wins:**
1. Lowest priority (default 32768)
2. If tied, lowest MAC address

**Example:**

| Switch | Priority | MAC Address | Bridge ID |
|--------|----------|-------------|-----------|
| Switch A | 32768 | 00:1A:2B:3C:4D:5E | 32768.001A2B3C4D5E |
| Switch B | 32768 | 00:5E:4D:3C:2B:1A | 32768.005E4D3C2B1A |
| Switch C | 24576 | AA:BB:CC:DD:EE:FF | 24576.AABBCCDDEEFF |

**Switch C wins** (lowest priority).

**Manually configuring the root bridge:**

```
spanning-tree vlan 10 priority 24576
```

Lower the priority to make a specific switch the root.

---

### STP Port States

STP transitions ports through several states:

#### **1. Blocking**

- Port receives BPDUs but doesn't forward frames
- Lasts 20 seconds (max age)
- Redundant port waiting as backup

#### **2. Listening**

- Port prepares to forward
- Listens for BPDUs and builds topology
- Lasts 15 seconds (forward delay)

#### **3. Learning**

- Port learns MAC addresses but doesn't forward frames
- Builds MAC address table
- Lasts 15 seconds (forward delay)

#### **4. Forwarding**

- Port forwards frames normally
- This is the desired state for active ports

#### **5. Disabled**

- Port administratively shut down
- Doesn't participate in STP

**Total convergence time:** 30-50 seconds (blocking → listening → learning → forwarding)

**This is why the network "pauses" when you plug in a cable.**

---

### RSTP: Rapid Spanning Tree Protocol

**RSTP (IEEE 802.1w)** is the modern, faster version of STP.

**Key improvements:**
- Convergence in **seconds** instead of 30-50 seconds
- Port states simplified to three: Discarding, Learning, Forwarding
- Alternative ports pre-calculated for instant failover

**RSTP port roles:**

| Role | Description |
|------|-------------|
| **Root Port** | Best path to root bridge |
| **Designated Port** | Forwarding port on each segment |
| **Alternate Port** | Backup path to root bridge |
| **Backup Port** | Backup for designated port |

**Compatibility:** RSTP is backward-compatible with STP. Modern networks use RSTP by default.

---

## Additional Switch Features

### Port Security

**Port security** restricts which devices can connect to a switch port based on MAC addresses.

**Use cases:**
- Prevent unauthorized devices
- Limit number of devices per port
- Detect MAC spoofing

**Configuration options:**

```
interface GigabitEthernet0/5
 switchport port-security
 switchport port-security maximum 2
 switchport port-security mac-address sticky
 switchport port-security violation restrict
```

**Violation actions:**
- **Shutdown:** Disables port (default)
- **Restrict:** Drops violating frames, sends alert
- **Protect:** Drops violating frames silently

---

### Port Mirroring (SPAN)

**SPAN (Switched Port Analyzer)** copies traffic from one or more ports to a monitoring port for analysis.

**Use cases:**
- Intrusion detection systems (IDS)
- Network monitoring
- Packet capture (Wireshark)
- Troubleshooting

**Configuration:**

```
monitor session 1 source interface Gi0/5
monitor session 1 destination interface Gi0/24
```

This copies all traffic from Port 5 to Port 24 where you can capture packets.

---

## Key Exam Tips

**For the Network+ exam, memorize these critical points:**

**Switches:**
- Each port = separate collision domain
- All ports = same broadcast domain (without VLANs)
- Five operations: learning, flooding, forwarding, filtering, aging
- MAC table timeout = 300 seconds (5 minutes)

**VLANs:**
- VLAN range: 1-4094
- VLAN 1 is default (don't use for production)
- Access ports = one VLAN, trunk ports = multiple VLANs
- Native VLAN = untagged on trunk (must match both sides)
- 802.1Q = VLAN tagging standard

**Trunking:**
- 802.1Q adds 4-byte VLAN tag
- Native VLAN mismatch = connectivity issues
- Restrict allowed VLANs for security

**Inter-VLAN Routing:**
- Router on a stick = subinterfaces, one physical port
- Layer 3 switch = SVIs, wire-speed routing

**STP:**
- Prevents loops by blocking redundant paths
- Root bridge = lowest bridge ID (priority + MAC)
- Convergence time: 30-50 seconds (STP), <5 seconds (RSTP)
- Port states: Blocking → Listening → Learning → Forwarding

**Common mistakes:**
- Forgetting to match native VLANs on trunk links
- Not understanding access vs trunk ports
- Confusing collision domains with broadcast domains
- Not knowing STP prevents loops, not load balancing

---

## Key Takeaways

- [ ] **Switches use MAC address tables** to forward frames intelligently
- [ ] **Five switch operations:** learning, flooding, forwarding, filtering, aging
- [ ] **Each switch port is a separate collision domain**
- [ ] **VLANs create separate broadcast domains** on one switch
- [ ] **Access ports carry one VLAN**, trunk ports carry multiple VLANs
- [ ] **802.1Q tagging** identifies VLAN membership on trunk links
- [ ] **Native VLAN must match on both ends** of a trunk
- [ ] **Inter-VLAN routing requires Layer 3** (router or Layer 3 switch)
- [ ] **Router on a stick uses subinterfaces**, Layer 3 switch uses SVIs
- [ ] **STP prevents loops** by blocking redundant paths
- [ ] **Root bridge has lowest bridge ID** (priority + MAC address)
- [ ] **RSTP converges much faster than STP** (seconds vs. 30-50 seconds)

---

## Check Your Understanding

**1. What are the five operations a switch performs with frames?**

<details>
<summary>Show Answer</summary>
<strong>Learning, flooding, forwarding, filtering, and aging.</strong> Learning: switch records source MAC addresses. Flooding: sends frames out all ports when destination unknown. Forwarding: sends frame out specific port when destination known. Filtering: drops frame when source and destination are on same port. Aging: removes MAC table entries after timeout (typically 300 seconds) to keep table current.
</details>

**2. What is the difference between a collision domain and a broadcast domain?**

<details>
<summary>Show Answer</summary>
<strong>Collision domain = network segment where collisions can occur. Broadcast domain = network segment where broadcasts reach all devices.</strong> Each switch port is its own collision domain (no collisions between ports). Without VLANs, all switch ports are in the same broadcast domain (broadcasts reach everyone). Routers and VLANs segment broadcast domains. Layer 2 switches segment collision domains but not broadcast domains.
</details>

**3. Why would you use VLANs in your network?**

<details>
<summary>Show Answer</summary>
<strong>Security, performance, and organization.</strong> VLANs isolate traffic between departments (security), reduce broadcast traffic (performance), and allow logical grouping regardless of physical location (organization). For example, accounting VLAN 10 and sales VLAN 20 can't see each other's broadcasts even on the same switch. One switch can serve multiple departments without buying separate switches.
</details>

**4. What is the difference between an access port and a trunk port?**

<details>
<summary>Show Answer</summary>
<strong>Access port carries one VLAN (for end devices). Trunk port carries multiple VLANs (between switches).</strong> Access ports connect to PCs, printers, phones - devices that don't understand VLANs. Frames are untagged. Trunk ports connect switches together and use 802.1Q tagging to identify which VLAN each frame belongs to. All allowed VLANs traverse the trunk simultaneously.
</details>

**5. Your network has two switches with a trunk link. Switch A uses native VLAN 1, Switch B uses native VLAN 99. What problem will this cause?**

<details>
<summary>Show Answer</summary>
<strong>Native VLAN mismatch causes connectivity issues and frames ending up in wrong VLANs.</strong> Native VLAN traffic is untagged. Switch A sends VLAN 1 traffic untagged. Switch B receives untagged traffic and assumes it's VLAN 99. This causes VLAN 1 traffic to incorrectly appear in VLAN 99. Both sides must agree on the native VLAN. Best practice: use a dedicated unused VLAN (like 999) as native on both sides.
</details>

**6. Explain the difference between router-on-a-stick and using a Layer 3 switch for inter-VLAN routing.**

<details>
<summary>Show Answer</summary>
<strong>Router-on-a-stick uses subinterfaces on one router port. Layer 3 switch uses SVIs (Switched Virtual Interfaces).</strong> Router-on-a-stick: single physical router port with subinterfaces (Gi0/0.10, Gi0/0.20) connected to trunk port. All inter-VLAN traffic crosses this one link (bottleneck). Layer 3 switch: virtual interfaces for each VLAN, routing happens internally at wire-speed. Layer 3 switch is faster and more scalable but more expensive. Router-on-a-stick is fine for small networks.
</details>

**7. What problem does Spanning Tree Protocol solve?**

<details>
<summary>Show Answer</summary>
<strong>STP prevents network loops that would cause broadcast storms.</strong> Without STP, redundant switch connections create loops where broadcast frames circulate infinitely, multiplying exponentially and saturating the network in seconds. STP detects loops and logically blocks redundant ports while keeping them as backups. If the primary path fails, STP automatically activates backup paths. STP creates a loop-free logical topology while maintaining physical redundancy.
</details>

**8. How does a switch elect a root bridge in STP?**

<details>
<summary>Show Answer</summary>
<strong>Lowest Bridge ID wins (Priority + MAC address).</strong> All switches exchange BPDUs containing their Bridge ID. Default priority is 32768. Switch with lowest priority becomes root. If priorities match (common), switch with lowest MAC address wins. You can manually configure a switch as root by lowering its priority (e.g., set to 24576 or 4096). The root bridge is the central reference point for calculating spanning tree paths.
</details>

**9. What is the purpose of 802.1Q tagging?**

<details>
<summary>Show Answer</summary>
<strong>802.1Q adds a 4-byte VLAN tag to identify which VLAN a frame belongs to on trunk links.</strong> When frames traverse a trunk carrying multiple VLANs, the receiving switch needs to know which VLAN each frame belongs to. 802.1Q inserts a tag containing the VLAN ID (12 bits = 4096 VLANs). The receiving switch reads the tag and forwards the frame to appropriate VLAN ports. Tags are added when entering trunk, removed when exiting on access ports.
</details>

**10. A user plugs in a network cable and the link doesn't work for 30 seconds. Why?**

<details>
<summary>Show Answer</summary>
<strong>STP convergence time (transition through port states).</strong> When you connect a cable, the port goes through STP states: Blocking (20 sec) → Listening (15 sec) → Learning (15 sec) → Forwarding. Total = 30-50 seconds before forwarding traffic. This prevents loops but causes initial delay. RSTP (Rapid Spanning Tree) reduces this to ~5 seconds. Modern networks use RSTP by default or configure edge ports (PortFast) for immediate forwarding on end-device ports.
</details>

**11. What is port security and when would you use it?**

<details>
<summary>Show Answer</summary>
<strong>Port security restricts which MAC addresses can connect to a switch port.</strong> You can limit number of devices per port, specify allowed MAC addresses, or use sticky learning (first MAC that connects is locked). Violation actions include shutdown (disables port), restrict (drops violating frames and alerts), or protect (drops silently). Use cases: prevent unauthorized devices, detect MAC spoofing, limit devices per port (e.g., one device per port in conference rooms, prevent switch-to-port connections).
</details>

**12. What is SPAN (port mirroring) used for?**

<details>
<summary>Show Answer</summary>
<strong>SPAN copies traffic from monitored ports to a destination port for analysis.</strong> Use cases: connecting IDS/IPS for intrusion detection, running Wireshark for packet capture, network monitoring tools, troubleshooting connectivity issues. Configure source port(s) to copy from and destination port where monitoring device connects. All traffic from source(s) is duplicated to destination. Critical for security monitoring because you can't see switch port traffic otherwise (unlike hubs that sent everything everywhere).
</details>

---

## Before Moving to Lesson 12

Make sure you can confidently:

- [ ] **Explain how switches build MAC address tables** through learning
- [ ] **Describe the five switch operations:** learning, flooding, forwarding, filtering, aging
- [ ] **Differentiate collision domains from broadcast domains**
- [ ] **Understand VLAN benefits** (security, performance, organization)
- [ ] **Configure access ports and trunk ports** conceptually
- [ ] **Explain 802.1Q VLAN tagging** and why it's needed
- [ ] **Identify native VLAN issues** when misconfigured
- [ ] **Describe inter-VLAN routing methods:** router-on-a-stick vs Layer 3 switch
- [ ] **Explain how STP prevents loops** and elects root bridge
- [ ] **Recognize STP port states** and RSTP improvements

**Study Strategy:**

**Today:**
- Draw your own switch topology with VLANs
- Practice identifying access vs trunk ports
- Walk through the VLAN tagging process step-by-step
- Trace how STP would block ports in a redundant topology

**Tomorrow (Day 12):**
- Review VLAN concepts with flashcards
- Watch one of the video resources again (it'll make more sense)
- Practice explaining collision vs broadcast domains to someone else
- Sketch out router-on-a-stick vs Layer 3 switch diagrams

**Day 13:**
- Continue to Lesson 12 (Routing Fundamentals)
- The concepts build logically - you'll see how VLANs connect to routing
- Keep reviewing switch/VLAN flashcards in rotation

Switch and VLAN concepts appear repeatedly throughout the exam - master them now and you'll breeze through later questions!

---

## Coming Up in Lesson 12: Routing Fundamentals and Protocols

You've learned about Layer 2 switching and VLANs - how to segment networks and forward traffic within broadcast domains.

**Next, you'll move to Layer 3 routing:**

- How routers forward traffic between networks
- Static vs dynamic routing
- Routing protocols (RIP, OSPF, EIGRP, BGP)
- Routing tables and metrics
- Administrative distance
- Route summarization

**The connection:**

Lesson 11 covered how switches forward within networks (Layer 2). Lesson 12 covers how routers forward between networks (Layer 3). You'll see how inter-VLAN routing (router-on-a-stick and Layer 3 switches) connects to broader routing concepts. VLANs create separate networks - routing connects them.

**See you in Lesson 12!**

---

*"Switches are smart enough to know where to send frames. VLANs are smart enough to keep traffic separated. STP is smart enough to prevent catastrophic loops. Master these, and you understand modern network infrastructure."*

---

# ✅ LESSON 11 COMPLETE!

**What You Just Learned:**
- ✅ How switches build MAC address tables (learning, flooding, forwarding, filtering, aging)
- ✅ Collision domains vs broadcast domains
- ✅ Why VLANs improve security, performance, and organization
- ✅ VLAN types (data, voice, native, management)
- ✅ Access ports vs trunk ports
- ✅ 802.1Q VLAN tagging for trunk links
- ✅ Native VLAN and why it must match on both ends
- ✅ Inter-VLAN routing with router-on-a-stick and Layer 3 switches
- ✅ Spanning Tree Protocol (STP) prevents loops
- ✅ STP root bridge election and port states
- ✅ RSTP improvements over STP
- ✅ Port security and SPAN (port mirroring)


**Next up: Routing fundamentals and dynamic routing protocols!**