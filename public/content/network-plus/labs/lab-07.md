# Lab 7: IPv6 Network Design Challenge

**Lab Time:** 30-40 minutes  
**Difficulty:** Intermediate  
**Skills:** IPv6 addressing, SLAAC configuration, dual-stack design

---

## Lab Objective

Design a complete dual-stack (IPv4 + IPv6) network for CloudTech Solutions, a mid-sized software company moving to a new office. You'll allocate IPv6 subnets, configure SLAAC, plan DHCPv6, and document transition mechanisms.

---

## Scenario

**Company:** CloudTech Solutions - Cloud Services & Software Development  
**Location:** New 4-floor office building  
**IPv4 Network:** 10.100.0.0/22 (already designed in previous lessons)  
**IPv6 Allocation:** 2001:db8:cafe::/48 (from your ISP)

**Your boss wants:**
- Parallel IPv6 addressing that mirrors IPv4 structure
- SLAAC configuration with DHCPv6 for DNS
- Link-local addresses documented for all routers
- Transition plan for legacy IPv4-only devices
- Professional documentation for the network team

---

## Network Requirements

### Floor 1 - Customer Operations
- **Sales Department:** 100 workstations
  - IPv4: 10.100.0.0/25 (already allocated)
  - IPv6: Need /64 subnet
- **Support Center:** 50 workstations + VoIP phones
  - IPv4: 10.100.0.128/26
  - IPv6: Need /64 subnet
- **Conference Rooms:** 20 devices
  - IPv4: 10.100.0.192/27
  - IPv6: Need /64 subnet

### Floor 2 - Development
- **Backend Team:** 60 developers
  - IPv4: 10.100.1.0/26
  - IPv6: Need /64 subnet
- **Frontend Team:** 40 developers
  - IPv4: 10.100.1.64/26
  - IPv6: Need /64 subnet
- **DevOps Lab:** 30 build servers
  - IPv4: 10.100.1.128/27
  - IPv6: Need /64 subnet

### Floor 3 - Management & IT
- **Executive Offices:** 15 users
  - IPv4: 10.100.2.0/28
  - IPv6: Need /64 subnet
- **IT Operations:** 10 admin stations
  - IPv4: 10.100.2.16/28
  - IPv6: Need /64 subnet
- **Guest Wi-Fi:** 100 visitors
  - IPv4: 10.100.2.32/25
  - IPv6: Need /64 subnet

### Infrastructure
- **Data Center:** 50 servers
  - IPv4: 10.100.2.160/26
  - IPv6: Need /64 subnet
- **Network Management:** 20 switches/APs
  - IPv4: 10.100.2.224/27
  - IPv6: Need /64 subnet
- **Security Devices:** 10 firewalls/IPS
  - IPv4: 10.100.3.0/28
  - IPv6: Need /64 subnet

### WAN Links
- **Link to ISP:** Point-to-point
  - IPv4: 10.100.3.16/30
  - IPv6: Need /127 subnet (point-to-point)
- **Link to Backup Datacenter:** Point-to-point
  - IPv4: 10.100.3.20/30
  - IPv6: Need /127 subnet
- **Link to Branch Office:** Point-to-point
  - IPv4: 10.100.3.24/30
  - IPv6: Need /127 subnet

---

## Your Tasks

### Part 1: IPv6 Subnet Allocation (10-15 min)

Design an IPv6 addressing scheme that **mirrors your IPv4 structure** for easy troubleshooting.

**Strategy:**  
Use the subnet ID portion (16 bits between /48 and /64) to match your IPv4 third octet:

```
IPv4: 10.100.X.Y/mask  →  IPv6: 2001:db8:cafe:X::/64

Examples:
10.100.0.0/25     →  2001:db8:cafe:0::/64    (Sales)
10.100.1.0/26     →  2001:db8:cafe:100::/64  (Backend - use hex)
10.100.2.32/25    →  2001:db8:cafe:220::/64  (Guest - use hex)
```

**Create a table:**

| Department | IPv4 Subnet | IPv6 Subnet | Notes |
|------------|-------------|-------------|-------|
| Sales | 10.100.0.0/25 | 2001:db8:cafe:___::/64 | Floor 1 |
| Support | 10.100.0.128/26 | 2001:db8:cafe:___::/64 | Floor 1, VoIP |
| ... | ... | ... | ... |

**For WAN links:** Use /127 instead of /64 (RFC 6164 - point-to-point links)
- Example: 2001:db8:cafe:fff0::/127

---

### Part 2: SLAAC Configuration Plan (10 min)

For each subnet, document how SLAAC will work:

**Router Advertisement Settings:**

| Subnet | Prefix | M Flag | O Flag | Configuration Method |
|--------|--------|--------|--------|---------------------|
| Sales | 2001:db8:cafe:0::/64 | 0 | 1 | SLAAC + Stateless DHCPv6 |
| ... | ... | ... | ... | ... |

**M Flag = 0, O Flag = 1:** Most common (SLAAC for address, DHCPv6 for DNS)  
**M Flag = 1:** Only for subnets requiring centralized control (maybe servers)

**For each subnet, document:**
1. **Router's Link-Local Address:** fe80::1 (standardize on ::1 for consistency)
2. **Global Unicast Address:** 2001:db8:cafe:X::1/64 (router interface)
3. **RA Prefix:** 2001:db8:cafe:X::/64
4. **Default Gateway:** fe80::1 (link-local address)
5. **DNS via DHCPv6:** 2001:db8:cafe:200::53, 2001:db8:cafe:200::54

---

### Part 3: EUI-64 Examples (5 min)

Calculate EUI-64 addresses for key devices:

**Example Device:** Sales Department PC
- MAC Address: 00:50:56:ab:cd:ef
- IPv6 Prefix: 2001:db8:cafe:0::/64
- **Calculate EUI-64 address:**
  1. Split MAC: 00:50:56 | ab:cd:ef
  2. Insert ff:fe: 00:50:56:ff:fe:ab:cd:ef
  3. Flip 7th bit: 02:50:56:ff:fe:ab:cd:ef
  4. Format: 0250:56ff:feab:cdef
  5. **Full Address:** 2001:db8:cafe:0:250:56ff:feab:cdef/64

**Practice with these MACs:**
- Router interface: 00:0c:29:1a:2b:3c → Calculate IPv6
- Server NIC: 00:1a:4d:5e:6f:7a → Calculate IPv6
- Switch management: 00:23:45:67:89:ab → Calculate IPv6

---

### Part 4: Dual-Stack Configuration (10 min)

**Document how devices will run both protocols:**

**Example: Sales Department Workstation**

```
Interface: eth0

IPv4 Configuration:
  Address: 10.100.0.50/25 (via DHCP)
  Gateway: 10.100.0.1
  DNS: 10.100.2.161, 10.100.2.162

IPv6 Configuration:
  Link-Local: fe80::250:56ff:feab:cdef/64 (auto-generated)
  Global Unicast: 2001:db8:cafe:0:250:56ff:feab:cdef/64 (via SLAAC)
  Gateway: fe80::1
  DNS: 2001:db8:cafe:200::53 (via stateless DHCPv6)

Method: Dual-Stack
  - OS prefers IPv6 when available (Happy Eyeballs)
  - Falls back to IPv4 if IPv6 unreachable
```

**Create dual-stack docs for:**
- Typical workstation
- Data center server
- Router interface
- WAN link endpoint

---

### Part 5: Transition Planning (5-10 min)

**Scenario:** You have 5 legacy printers that only support IPv4.

**Options:**

**1. Dual-Stack (Recommended)**
- Keep IPv4 for printers
- Add IPv6 for everything else
- Printers work via IPv4, modern devices use IPv6
- **Pro:** Simple, no translation needed
- **Con:** Must maintain both protocols

**2. NAT64 / DNS64**
- IPv6-only workstations
- NAT64 gateway translates to IPv4 printers
- DNS64 synthesizes IPv6 addresses for printers
- **Pro:** Can go IPv6-only on client side
- **Con:** Requires NAT64/DNS64 infrastructure

**3. Application Layer Gateway (ALG)**
- Print server with both IPv4 and IPv6
- IPv6 clients connect to print server
- Print server proxies to IPv4 printers
- **Pro:** Centralized solution
- **Con:** Single point of failure

**Your Decision:** [Choose and justify]

---

### Part 6: Documentation Creation (10 min)

Create professional IPv6 addressing documentation:

```
═══════════════════════════════════════════════════════════════════
                    CLOUDTECH SOLUTIONS
            DUAL-STACK NETWORK DESIGN (IPv4 + IPv6)
═══════════════════════════════════════════════════════════════════

IPv4 Allocation: 10.100.0.0/22 (1024 addresses)
IPv6 Allocation: 2001:db8:cafe::/48 (65,536 /64 subnets)
Design Date: [Today]
Designer: [Your Name]

═══════════════════════════════════════════════════════════════════
                    FLOOR 1 - CUSTOMER OPERATIONS
═══════════════════════════════════════════════════════════════════

Department    | IPv4 Subnet     | IPv6 Subnet            | VLAN | Gateway (IPv6)
------------- | --------------- | ---------------------- | ---- | --------------
Sales         | 10.100.0.0/25   | 2001:db8:cafe:0::/64   | 10   | fe80::1
Support       | 10.100.0.128/26 | 2001:db8:cafe:80::/64  | 11   | fe80::1
Conf Rooms    | 10.100.0.192/27 | 2001:db8:cafe:c0::/64  | 12   | fe80::1

═══════════════════════════════════════════════════════════════════
                    SLAAC CONFIGURATION
═══════════════════════════════════════════════════════════════════

All subnets configured with:
  - M flag: 0 (use SLAAC for address)
  - O flag: 1 (use DHCPv6 for DNS/options)
  - Router advertisements every 200 seconds
  - Prefix lifetime: 86400 seconds (1 day)
  - Default route: fe80::1

═══════════════════════════════════════════════════════════════════
                    DHCPV6 SERVERS (STATELESS)
═══════════════════════════════════════════════════════════════════

Primary DHCPv6:   2001:db8:cafe:200::53
Secondary DHCPv6: 2001:db8:cafe:200::54

Options Provided:
  - DNS Servers: 2001:db8:cafe:200::53, 2001:db8:cafe:200::54
  - Domain: cloudtech.local
  - NTP Servers: 2001:db8:cafe:200::123

═══════════════════════════════════════════════════════════════════
                    ROUTER INTERFACES
═══════════════════════════════════════════════════════════════════

Interface | VLAN | IPv4 Address    | IPv6 Address           | Link-Local
--------- | ---- | --------------- | ---------------------- | -----------
GigE 0/0  | 10   | 10.100.0.1/25   | 2001:db8:cafe:0::1/64  | fe80::1
GigE 0/1  | 11   | 10.100.0.129/26 | 2001:db8:cafe:80::1/64 | fe80::1
... (continue)

═══════════════════════════════════════════════════════════════════
                    WAN LINKS (POINT-TO-POINT)
═══════════════════════════════════════════════════════════════════

Link      | IPv4             | IPv6                          | Notes
--------- | ---------------- | ----------------------------- | -----
To ISP    | 10.100.3.17/30   | 2001:db8:cafe:fff0::1/127     | /127
Backup DC | 10.100.3.21/30   | 2001:db8:cafe:fff1::1/127     | /127
Branch    | 10.100.3.25/30   | 2001:db8:cafe:fff2::1/127     | /127

Note: Using /127 for IPv6 point-to-point links (RFC 6164)

═══════════════════════════════════════════════════════════════════
                    TRANSITION STRATEGY
═══════════════════════════════════════════════════════════════════

Primary Method: DUAL-STACK
  - All devices run both IPv4 and IPv6
  - Modern devices prefer IPv6 (Happy Eyeballs)
  - Legacy devices continue using IPv4
  - No translation or tunneling required

Legacy Device Handling:
  - 5 IPv4-only printers: Connected via IPv4
  - Plan: Replace with IPv6-capable models in Q2 2026
  - Interim: Maintain IPv4 until replacement

═══════════════════════════════════════════════════════════════════
                    ADDRESS SPACE UTILIZATION
═══════════════════════════════════════════════════════════════════

IPv6 Subnets Allocated: 15 of 65,536 available
Utilization: 0.02%
Future Capacity: 65,521 /64 subnets remaining

Reserved Subnets:
  - 2001:db8:cafe:1000::/52 - Future expansion (East wing)
  - 2001:db8:cafe:2000::/52 - Future expansion (North building)
  - 2001:db8:cafe:fff0::/60 - WAN links

═══════════════════════════════════════════════════════════════════
```

---

## Deliverables

Submit the following:

1. **IPv6 Allocation Table** - All subnets with /64 prefixes
2. **SLAAC Configuration Plan** - M/O flags for each subnet
3. **EUI-64 Calculations** - At least 3 examples
4. **Dual-Stack Configuration Examples** - 3 device types
5. **Transition Strategy** - How you'll handle legacy devices
6. **Complete IPAM Documentation** - Professional format

---

## Bonus Challenges

### Challenge 1: Privacy Extensions
Research RFC 4941 (Privacy Extensions for SLAAC). Why would you enable this? How does it differ from EUI-64? Recommend subnets where privacy extensions should be enabled.

### Challenge 2: Route Summarization
If you need to advertise your entire network to the ISP, what single route would you use? If you later get 2001:db8:caff::/48, can you summarize both allocations into one route?

### Challenge 3: DHCPv6 Prefix Delegation
Research DHCPv6-PD (Prefix Delegation). How would you use it if CloudTech gets a /48 and needs to delegate /56s to each floor? Design the delegation scheme.

---

## Grading Rubric

| Category | Points | Criteria |
|----------|--------|----------|
| IPv6 Allocation | 25 | Logical subnetting, proper /64 use, mirrors IPv4 |
| SLAAC Config | 20 | Correct M/O flags, RA settings documented |
| EUI-64 Calculations | 15 | Accurate MAC to IPv6 conversion |
| Dual-Stack Design | 20 | Both protocols configured, clear documentation |
| Transition Strategy | 10 | Practical approach to legacy devices |
| Documentation | 10 | Professional, complete, well-organized |
| **Total** | **100** | |

---

## Common Mistakes to Avoid

❌ Using subnet sizes other than /64 for normal subnets (breaks SLAAC)  
❌ Forgetting link-local addresses (they're critical for routing!)  
❌ Using M=1 everywhere (stateful when you don't need it)  
❌ Not documenting both protocols in dual-stack  
❌ Forgetting that WAN links can use /127 (not /64)  
❌ Not aligning IPv6 subnets with IPv4 for easier management  

---

## Tools You Can Use

**IPv6 Calculators:**
- ipv6calc.net
- SolarWinds IPv6 Subnet Calculator
- UltraTools IPv6 Compression Tool

**Network Diagram:**
- draw.io
- Lucidchart
- Microsoft Visio
- Or pencil and paper!

**EUI-64 Calculator:**
- Check your work at ipv6-literal.com

---

## Real-World Context

This lab represents actual IPv6 deployment planning:

**What companies do:**
1. Get /48 or /56 from ISP
2. Divide into /64 subnets (one per VLAN)
3. Configure SLAAC with stateless DHCPv6 for DNS
4. Run dual-stack during transition (years)
5. Document everything for operations team

**Common deployment mistakes:**
- Using DHCPv6 stateful when SLAAC would work
- Not standardizing link-local addresses (makes troubleshooting hard)
- Poor documentation (nightmare for future engineers)
- Enabling IPv6 without proper firewall rules (security risk)

**Your design could be used in a real company!**

---

## Testing Your Design

**Validation Questions:**

1. ✅ Does every subnet use /64 (except WAN links)?
2. ✅ Are all link-local addresses consistent (fe80::1)?
3. ✅ Do M/O flags match your configuration method?
4. ✅ Can you expand/shorten all IPv6 addresses correctly?
5. ✅ Is your dual-stack configuration complete for both protocols?
6. ✅ Does your transition plan address legacy devices?
7. ✅ Is documentation clear enough for another engineer?

---

## After Completion

**Reflect:**
1. How does IPv6 subnetting differ from IPv4 VLSM?
2. Why is SLAAC better/worse than DHCPv4?
3. What challenges would you face deploying this in production?
4. How would you test IPv6 before going live?

**Next Steps:**
- Practice IPv6 address compression daily
- Set up IPv6 on your home network (most routers support it)
- Use ping6 and traceroute6 to explore IPv6 connectivity
- Capture IPv6 traffic in Wireshark
- Move on to Lesson 8: Network Protocols

---

## Lab Complete! 🎉

Great work designing a dual-stack network! This is a real-world skill that's increasingly important as IPv6 deployment grows.

**Skills Practiced:**
✅ IPv6 subnet allocation  
✅ SLAAC configuration planning  
✅ EUI-64 address generation  
✅ Dual-stack network design  
✅ Transition strategy development  
✅ Professional IPv6 documentation  

Keep this in your certification portfolio - it demonstrates you can design modern networks!

---

*Ready for the next challenge? Head back to the lesson dashboard!*