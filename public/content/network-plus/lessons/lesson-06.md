# Lesson 6: Advanced Subnetting & VLSM

**Estimated Time:** 30-35 minutes  
**Domain:** Networking Concepts  
**Exam Objectives Covered:** 1.4 - Given a scenario, configure a subnet and use appropriate IP addressing schemes (Part 4)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain Variable Length Subnet Masking (VLSM) and why it's essential
- Design efficient IP addressing schemes with different-sized subnets
- Apply VLSM to real-world network scenarios
- Understand supernetting and route summarization
- Calculate summarized routes for routing efficiency
- Design scalable IP addressing schemes
- Troubleshoot complex subnetting issues
- Apply IP addressing best practices

---

## Video Resources

**Watch:** [VLSM Explained - Professor Messer](https://www.youtube.com/watch?v=VVeyEimRn68)  
**Visual Guide:** [Variable Length Subnet Masking - PowerCert](https://www.youtube.com/watch?v=qH87AYAmtdE)  
**Practice:** [VLSM Design Tutorial - NetworkChuck](https://www.youtube.com/watch?v=EkNq4TrHP_U)  
**Deep Dive:** [Advanced Subnetting - Sunny Classroom](https://www.youtube.com/watch?v=BWZ-MHIhqjM)

---

## Introduction: The Problem with Equal-Sized Subnets

In Lesson 5, you learned how to take a network and divide it into equal-sized subnets. Need four subnets from a /24? Make four /26 subnets, each with 62 hosts. Clean, simple, efficient.

But real-world networks aren't that neat.

Imagine you're designing a network with these requirements:
- Marketing department: 100 employees
- Engineering: 50 employees  
- HR: 10 employees
- Server room: 20 servers
- Point-to-point link between buildings: 2 routers

If you use equal-sized subnets, you'd need to make them all big enough for Marketing's 100 employees. That means /25 subnets with 126 hosts each. 

Now look at what happens:
- Marketing: Uses 100 of 126 addresses (good, only 26 wasted)
- Engineering: Uses 50 of 126 addresses (76 wasted)
- HR: Uses 10 of 126 addresses (116 wasted!)
- Server room: Uses 20 of 126 addresses (106 wasted!)
- Point-to-point link: Uses 2 of 126 addresses (124 wasted!!!)

You're wasting hundreds of IP addresses because you're forced to use one-size-fits-all subnetting.

This is where **VLSM** comes in.

**Variable Length Subnet Masking** means exactly what it sounds like: using subnet masks of different lengths within the same network. You can give Marketing a /25 (126 hosts), Engineering a /26 (62 hosts), HR a /28 (14 hosts), and the point-to-point link a /30 (2 hosts).

Every subnet is sized exactly for its purpose. No waste. Maximum efficiency.

This is how real networks are designed. And this is what the Network+ exam expects you to understand.

---

## What is VLSM?

**Variable Length Subnet Masking (VLSM)** is a method of subnetting where you create subnets of different sizes from the same major network.

**Without VLSM (Classful):**
- All subnets must be the same size
- Wastes addresses on small networks
- Limited flexibility

**With VLSM (Classless):**
- Subnets can be different sizes
- Efficient address usage
- Flexible network design
- Industry standard since the mid-1990s

**Why VLSM matters:**

**IPv4 address exhaustion** is real. There are only 4.3 billion IPv4 addresses total, and we ran out of new allocations years ago. Every wasted IP address is a problem. VLSM lets you squeeze maximum efficiency out of your address space.

**Routing protocols** need to support VLSM. Modern routing protocols (RIPv2, OSPF, EIGRP, BGP) all support VLSM. Old protocols (RIPv1, IGRP) don't. If you see questions about which routing protocols support VLSM on the exam, now you know.

**The Network+ exam** loves VLSM scenarios. You'll see questions like "Given network 192.168.1.0/24, design subnets for departments of varying sizes." This is pure VLSM.

---

## The VLSM Process

Here's the systematic approach to VLSM:

**Step 1: List requirements in order from largest to smallest**

Always start with the largest subnet and work down to the smallest. This prevents you from accidentally fragmenting your address space.

**Step 2: Assign subnets starting at the network address**

Work sequentially through the address space. Don't jump around.

**Step 3: Use exactly the right size for each requirement**

Don't over-provision. If you need 50 hosts, use a /26 (62 hosts), not a /24 (254 hosts).

**Step 4: Track your address space**

Keep a running tally of what's been allocated and what's still available.

**Step 5: Reserve space for future growth**

Don't allocate every single address. Leave room for expansion.

Let's see this in action.

---

## VLSM Example 1: Office Network Design

**Scenario:** You've been assigned the network 192.168.10.0/24. Design subnets for:

- Sales: 60 hosts
- Engineering: 28 hosts  
- Management: 12 hosts
- Guest Wi-Fi: 30 hosts
- Server farm: 8 servers
- Point-to-point link to branch office: 2 routers

**Step 1: List requirements largest to smallest**

1. Sales: 60 hosts → need /26 (62 usable)
2. Guest Wi-Fi: 30 hosts → need /27 (30 usable)
3. Engineering: 28 hosts → need /27 (30 usable)
4. Management: 12 hosts → need /28 (14 usable)
5. Server farm: 8 hosts → need /28 (14 usable)
6. Point-to-point: 2 hosts → need /30 (2 usable)

**Step 2: Assign subnets sequentially**

**Sales: 192.168.10.0/26**
- Network: 192.168.10.0
- Range: 192.168.10.0 - 192.168.10.63
- Usable: 192.168.10.1 - 192.168.10.62
- Broadcast: 192.168.10.63
- Magic Number: 64
- Next available: 192.168.10.64

**Guest Wi-Fi: 192.168.10.64/27**
- Network: 192.168.10.64
- Range: 192.168.10.64 - 192.168.10.95
- Usable: 192.168.10.65 - 192.168.10.94
- Broadcast: 192.168.10.95
- Magic Number: 32
- Next available: 192.168.10.96

**Engineering: 192.168.10.96/27**
- Network: 192.168.10.96
- Range: 192.168.10.96 - 192.168.10.127
- Usable: 192.168.10.97 - 192.168.10.126
- Broadcast: 192.168.10.127
- Magic Number: 32
- Next available: 192.168.10.128

**Management: 192.168.10.128/28**
- Network: 192.168.10.128
- Range: 192.168.10.128 - 192.168.10.143
- Usable: 192.168.10.129 - 192.168.10.142
- Broadcast: 192.168.10.143
- Magic Number: 16
- Next available: 192.168.10.144

**Server farm: 192.168.10.144/28**
- Network: 192.168.10.144
- Range: 192.168.10.144 - 192.168.10.159
- Usable: 192.168.10.145 - 192.168.10.158
- Broadcast: 192.168.10.159
- Magic Number: 16
- Next available: 192.168.10.160

**Point-to-point: 192.168.10.160/30**
- Network: 192.168.10.160
- Range: 192.168.10.160 - 192.168.10.163
- Usable: 192.168.10.161 - 192.168.10.162
- Broadcast: 192.168.10.163
- Magic Number: 4
- Next available: 192.168.10.164

**Summary:**

```
Allocated: 192.168.10.0 - 192.168.10.163 (164 addresses)
Reserved for future: 192.168.10.164 - 192.168.10.255 (92 addresses)
```

**Total efficiency:**
- Used: 164 addresses out of 256 (64%)
- Wasted within subnets: minimal (2 hosts here, 6 hosts there)
- Available for growth: 92 addresses (36%)

Compare this to equal-sized subnetting. If we'd used all /26 subnets for six networks, we'd need 6 × 64 = 384 addresses. But we only have 256 in a /24! VLSM made this possible.

---

## VLSM Example 2: Multi-Site WAN Design

**Scenario:** Your company has a headquarters and three branch offices. You've been assigned 10.50.0.0/22 (1,024 addresses). Requirements:

- HQ Network: 400 hosts
- Branch Office 1: 200 hosts
- Branch Office 2: 100 hosts  
- Branch Office 3: 50 hosts
- HQ to Branch 1 link: 2 addresses
- HQ to Branch 2 link: 2 addresses
- HQ to Branch 3 link: 2 addresses

**Step 1: List largest to smallest**

1. HQ: 400 hosts → need /23 (510 usable)
2. Branch 1: 200 hosts → need /24 (254 usable)
3. Branch 2: 100 hosts → need /25 (126 usable)
4. Branch 3: 50 hosts → need /26 (62 usable)
5. WAN link 1: 2 hosts → need /30 (2 usable)
6. WAN link 2: 2 hosts → need /30 (2 usable)
7. WAN link 3: 2 hosts → need /30 (2 usable)

**Step 2: Assign subnets**

**HQ: 10.50.0.0/23**
- Range: 10.50.0.0 - 10.50.1.255
- Usable: 10.50.0.1 - 10.50.1.254
- Broadcast: 10.50.1.255
- Next available: 10.50.2.0

**Branch 1: 10.50.2.0/24**
- Range: 10.50.2.0 - 10.50.2.255
- Usable: 10.50.2.1 - 10.50.2.254
- Broadcast: 10.50.2.255
- Next available: 10.50.3.0

**Branch 2: 10.50.3.0/25**
- Range: 10.50.3.0 - 10.50.3.127
- Usable: 10.50.3.1 - 10.50.3.126
- Broadcast: 10.50.3.127
- Next available: 10.50.3.128

**Branch 3: 10.50.3.128/26**
- Range: 10.50.3.128 - 10.50.3.191
- Usable: 10.50.3.129 - 10.50.3.190
- Broadcast: 10.50.3.191
- Next available: 10.50.3.192

**WAN Link 1: 10.50.3.192/30**
- Range: 10.50.3.192 - 10.50.3.195
- Usable: 10.50.3.193 - 10.50.3.194
- Next available: 10.50.3.196

**WAN Link 2: 10.50.3.196/30**
- Range: 10.50.3.196 - 10.50.3.199
- Usable: 10.50.3.197 - 10.50.3.198
- Next available: 10.50.3.200

**WAN Link 3: 10.50.3.200/30**
- Range: 10.50.3.200 - 10.50.3.203
- Usable: 10.50.3.201 - 10.50.3.202
- Next available: 10.50.3.204

**Address space usage:**

```
Original allocation: 10.50.0.0/22 (10.50.0.0 - 10.50.3.255 = 1,024 addresses)
Used: 10.50.0.0 - 10.50.3.203 (972 addresses)
Reserved: 10.50.3.204 - 10.50.3.255 (52 addresses for future growth)
```

Notice how we fit everything into a /22 by using VLSM. Without VLSM, we'd need separate /23, /24, /25, and /26 networks, which would require much more address space.

---

## Common VLSM Mistakes (And How to Avoid Them)

**Mistake 1: Starting with small subnets first**

Wrong approach:
```
Assign /30 for WAN links first
Then try to fit /24 networks in remaining space
Result: Fragmented address space, overlapping subnets
```

Correct approach:
```
Always start with the largest requirement
Work down to smallest
This ensures clean, non-overlapping allocation
```

**Mistake 2: Not tracking address space**

You assign subnets without keeping track of what's allocated. You end up with:
- Subnet 1: 192.168.1.0/26 (uses 0-63)
- Subnet 2: 192.168.1.32/27 (tries to use 32-63 - OVERLAP!)

**Solution:** Always note the "next available address" after each allocation.

**Mistake 3: Over-provisioning subnets**

Someone needs 30 hosts, you give them a /24 (254 hosts). Now you've wasted 224 addresses that could have been used elsewhere.

**Solution:** Use the smallest subnet that meets requirements with modest room for growth. Need 30? Use /27 (30 usable) or /26 (62 usable) if you anticipate growth.

**Mistake 4: Forgetting to leave room for growth**

You allocate every single address. Six months later, they need to add a new department. There's nowhere to put it.

**Solution:** Reserve 10-20% of your address space unallocated for future needs.

**Mistake 5: Random allocation instead of sequential**

You jump around the address space:
```
First subnet: 192.168.1.0/26
Second subnet: 192.168.1.128/27
Third subnet: 192.168.1.64/27
```

This works, but it's messy and hard to manage.

**Solution:** Allocate sequentially from the network address. It's cleaner and prevents mistakes.

---

## Supernetting (Route Summarization)

Now let's flip things around. Instead of dividing networks into smaller subnets, what if you combine multiple networks into one larger summary?

**Supernetting** (also called **route summarization** or **route aggregation**) combines multiple contiguous networks into a single routing entry.

**Why would you do this?**

**Routing table efficiency.** Instead of having 16 separate routes in a routing table, you can have 1 summarized route. This:
- Reduces router memory usage
- Speeds up routing lookups
- Reduces routing protocol overhead
- Makes networks more scalable

**Example:**

Your company has these four networks:
```
192.168.4.0/24
192.168.5.0/24
192.168.6.0/24
192.168.7.0/24
```

Instead of advertising four separate routes, you can summarize them into one:
```
192.168.4.0/22
```

This single /22 route covers all four /24 networks.

---

## How to Calculate Route Summarization

Here's the process:

**Step 1: Write the networks in binary**

Let's use the example above:
```
192.168.4.0 = 192.168.00000100.0
192.168.5.0 = 192.168.00000101.0
192.168.6.0 = 192.168.00000110.0
192.168.7.0 = 192.168.00000111.0
```

**Step 2: Find the common bits**

Look for the bits that are the same across all networks:
```
192.168.00000100.0
192.168.00000101.0
192.168.00000110.0
192.168.00000111.0
        ^^^^^^-- These first 6 bits are the same
              ^^-- These last 2 bits differ
```

**Step 3: Count the common bits**

- First two octets: 16 bits (192.168)
- Third octet: 6 common bits
- Total: 16 + 6 = 22 bits

**Step 4: Write the summary route**

The summary is the network address with a /22 mask:
```
192.168.4.0/22
```

This covers 192.168.4.0 - 192.168.7.255 (all four /24 networks).

---

## Route Summarization Example 2

**Scenario:** You need to summarize these networks:
```
10.1.0.0/24
10.1.1.0/24
10.1.2.0/24
10.1.3.0/24
10.1.4.0/24
10.1.5.0/24
10.1.6.0/24
10.1.7.0/24
```

**Step 1: Binary analysis**

```
10.1.00000000.0
10.1.00000001.0
10.1.00000010.0
10.1.00000011.0
10.1.00000100.0
10.1.00000101.0
10.1.00000110.0
10.1.00000111.0
     ^^^^^-- First 5 bits are the same
          ^^^-- Last 3 bits differ
```

**Step 2: Count common bits**

- 16 bits (10.1) + 5 bits = 21 bits

**Step 3: Summary route**

```
10.1.0.0/21
```

This single route covers all eight /24 networks (10.1.0.0 through 10.1.7.255).

---

## Quick Summarization Rules

**Rule 1: The summary mask is always shorter (fewer bits) than the individual network masks**

If you're summarizing /24 networks, your summary will be /23, /22, /21, etc.

**Rule 2: The summary must start on a proper boundary**

You can't just arbitrarily summarize any networks. They must be contiguous and start on a binary boundary.

**Valid:**
```
192.168.0.0/24
192.168.1.0/24
192.168.2.0/24
192.168.3.0/24
Can be summarized as: 192.168.0.0/22
```

**Invalid:**
```
192.168.1.0/24
192.168.2.0/24
192.168.5.0/24
Cannot be cleanly summarized (not contiguous)
```

**Rule 3: Summary routes may include addresses you're not using**

When you summarize 192.168.4.0/24 through 192.168.7.0/24 as 192.168.4.0/22, you're also including any addresses in 192.168.4.0 - 192.168.7.255. Make sure those addresses aren't used elsewhere in your network!

---

## Real-World VLSM Scenario: ISP Network

**Scenario:** You're a network engineer at a small ISP. You've been assigned 203.0.113.0/24 by your regional registry. You need to allocate addresses to customers:

- Customer A (business): needs 100 usable IPs
- Customer B (business): needs 50 usable IPs
- Customer C (business): needs 25 usable IPs
- Customer D (small office): needs 10 usable IPs
- Customer E (small office): needs 10 usable IPs
- Customer F (home office): needs 5 usable IPs
- Point-to-point link to upstream provider: 2 IPs
- Your internal management network: 20 IPs

**Your task:** Design a VLSM addressing scheme.

**Solution:**

**Step 1: Requirements in order**

1. Customer A: 100 → /25 (126 usable)
2. Customer B: 50 → /26 (62 usable)
3. Customer C: 25 → /27 (30 usable)
4. Management: 20 → /27 (30 usable)
5. Customer D: 10 → /28 (14 usable)
6. Customer E: 10 → /28 (14 usable)
7. Customer F: 5 → /29 (6 usable)
8. Upstream link: 2 → /30 (2 usable)

**Step 2: Sequential allocation**

```
Customer A: 203.0.113.0/25 (0-127)
Customer B: 203.0.113.128/26 (128-191)
Customer C: 203.0.113.192/27 (192-223)
Management: 203.0.113.224/28 (224-239) -- Wait, /27 needed!
```

Oops! Let me recalculate with /28 for management (we can make it work with 14 IPs):

```
Customer A: 203.0.113.0/25 (0-127)
Customer B: 203.0.113.128/26 (128-191)
Customer C: 203.0.113.192/27 (192-223)
Management: 203.0.113.224/28 (224-239)
Customer D: 203.0.113.240/28 (240-255)

Hmm, we've used 0-255. Need to reconsider...
```

Actually, let's be smarter. Customer C only needs 25, so /27 (30) is fine. Management needs 20, so /27 (30) is fine. Let me restart:

```
Customer A: 203.0.113.0/25 (0-127)
Customer B: 203.0.113.128/26 (128-191)
Customer C: 203.0.113.192/27 (192-223)
Customer D: 203.0.113.224/28 (224-239)
Customer E: 203.0.113.240/28 (240-255)

Now we're out of space in the third octet. We need to fit Management, Customer F, and upstream link.
```

This reveals an important lesson: **VLSM requires careful planning.** Let me try a better allocation:

```
Customer A: 203.0.113.0/25 (126 usable) → 0-127
Customer B: 203.0.113.128/26 (62 usable) → 128-191
Customer C: 203.0.113.192/27 (30 usable) → 192-223
Management: 203.0.113.224/27 (30 usable) → 224-255

Total used: 256 addresses (the entire /24!)
```

We're out of space! We can't fit Customer D, E, F, and the upstream link.

**Solution:** Use smaller subnets where possible, or request more address space.

Actually, let's reconsider. Do Customer C and Management really need /27? Let's optimize:

```
Customer A: 203.0.113.0/25 (126) → needs 100 ✓
Customer B: 203.0.113.128/26 (62) → needs 50 ✓
Customer C: 203.0.113.192/27 (30) → needs 25 ✓
Management: 203.0.113.224/28 (14) → needs 20 ✗ Too small!
```

Ah, we need to give Management a /27 (30 usable) because /28 only has 14.

**Final optimized allocation:**

```
Customer A: 203.0.113.0/25 (0-127, 126 usable)
Customer B: 203.0.113.128/26 (128-191, 62 usable)
Customer C: 203.0.113.192/27 (192-223, 30 usable)

Remaining: 203.0.113.224-255 (32 addresses)

Management: 203.0.113.224/27 (224-255, 30 usable) for 20 hosts ✓

But now we have no space left for D, E, F, and upstream!
```

This is a real-world problem. **The solution:** Request a /23 instead of a /24, giving you 512 addresses instead of 256. Or tell Customer A they're getting a /26 (62 usable) instead of /25, and make it work.

This messy example shows why network planning is hard. VLSM helps, but sometimes there's just not enough address space.

---

## IP Addressing Best Practices

After six lessons of IP addressing, let's talk about real-world best practices:

**1. Plan before you implement**

Draw out your network on paper first. Calculate requirements. Allocate addresses logically. Don't wing it.

**2. Use private IP addresses (RFC 1918) for internal networks**

- 10.0.0.0/8 for large organizations
- 172.16.0.0/12 for medium organizations  
- 192.168.0.0/16 for small organizations and homes

Never use public IPs internally unless you own them.

**3. Document everything**

Keep a spreadsheet of your IP allocations:
```
Subnet          Mask    Purpose      VLAN   Gateway      Notes
10.1.10.0       /24     Marketing    10     10.1.10.1    3rd floor
10.1.20.0       /24     Engineering  20     10.1.20.1    2nd floor
10.1.30.0       /28     Servers      30     10.1.30.1    Data center
```

**4. Use consistent schemes**

Example structure:
```
10.SITE.VLAN.HOST

10.1.10.0/24 = Site 1, VLAN 10
10.1.20.0/24 = Site 1, VLAN 20
10.2.10.0/24 = Site 2, VLAN 10
10.2.20.0/24 = Site 2, VLAN 20
```

Patterns make troubleshooting easier.

**5. Reserve address ranges for specific purposes**

```
.1 - .10: Network equipment (routers, switches)
.11 - .50: Servers
.51 - .100: Printers and shared resources
.101 - .254: DHCP pool for workstations
```

**6. Leave room for growth**

Don't allocate 100% of your address space. Leave 20-30% unallocated.

**7. Use /30 for point-to-point links**

Never waste a /24 on a link between two routers. Use /30 (or /31 if your equipment supports it).

**8. Separate management traffic**

Use a dedicated subnet for device management:
```
Data VLAN: 10.1.10.0/24
Management VLAN: 10.1.200.0/24
```

This improves security and makes troubleshooting easier.

**9. Use DHCP for workstations, static for servers**

Workstations get dynamic IPs from DHCP. Servers, printers, and network equipment get static IPs. This makes management predictable.

**10. Test your design before implementation**

Use a subnet calculator or spreadsheet to verify your addressing doesn't overlap and meets all requirements.

---

## Troubleshooting Complex Subnetting Issues

**Problem 1: Device can't reach other devices on "the same network"**

A user at 10.20.30.75/26 says they can't reach 10.20.30.150/26, but they're "on the same network."

**Analysis:**

Magic Number for /26 = 64

Subnets:
- 0-63
- 64-127
- 128-191
- 192-255

IP .75 is in the 64-127 subnet.  
IP .150 is in the 128-191 subnet.

**Diagnosis:** They're on different subnets despite having the same first three octets. They need a router to communicate.

**Solution:** Either put both devices on the same subnet, or ensure there's a router with routes between the subnets.

---

**Problem 2: New subnet overlaps with existing subnet**

You try to add subnet 192.168.10.32/27 but devices can't communicate properly. Existing subnet is 192.168.10.0/26.

**Analysis:**

Existing: 192.168.10.0/26 (covers 0-63)  
New: 192.168.10.32/27 (covers 32-63)

The new subnet is **inside** the existing subnet. That's an overlap.

**Diagnosis:** You can't have overlapping subnets. The addresses 32-63 are already allocated to the /26 network.

**Solution:** Use 192.168.10.64/27 (covers 64-95) for the new subnet instead.

---

**Problem 3: Routing table has too many entries**

A router has 500 individual /24 routes, and routing updates are consuming bandwidth.

**Analysis:** The routing table is unnecessarily large because routes aren't summarized.

**Solution:** Implement route summarization. If those 500 routes are contiguous (e.g., 10.0.0.0/24 through 10.1.243.0/24), summarize them into a few larger routes.

Example: Instead of advertising 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24, 10.1.3.0/24, advertise 10.1.0.0/22.

---

**Problem 4: Running out of IP addresses**

Your /24 network is full, and you need to add 50 more devices.

**Analysis:** You've exhausted your address space due to poor initial planning.

**Solutions:**
1. **Renumber into a larger network** (painful, requires downtime)
2. **Add another /24 network** (creates routing complexity)
3. **Implement NAT** (if devices don't need unique public IPs)
4. **Clean up unused addresses** (audit DHCP leases, find unused statics)

**Prevention:** Always plan for 2-3x growth when initially designing networks.

---

## VLSM on the Network+ Exam

Here's what the exam actually tests:

**You WILL be asked:**
- "Given this network and these requirements, assign appropriate subnet masks"
- "Which subnet mask would you use for X number of hosts?"
- "Identify if these subnets overlap"
- "Which address range is available for assignment?"

**You probably WON'T be asked:**
- "Calculate the optimal VLSM design for this 12-site enterprise" (too complex)
- "Perform binary route summarization calculations" (too detailed)

**Exam tips:**

**Tip 1:** Start with what you know. If they need 50 hosts, you know they need at least a /26 (62 usable). Eliminate any answer choices that are too small.

**Tip 2:** Check for overlaps. If two subnet options overlap, both can't be correct. One must be wrong.

**Tip 3:** Sequential allocation prevents mistakes. If unsure, allocate subnets in order starting from the network address.

**Tip 4:** Use the Magic Number. Even on complex VLSM questions, the Magic Number method still works.

**Tip 5:** Don't overthink it. The exam tests understanding, not perfection. If you grasp the concepts, you can work through the problems.

---

## Key Takeaways

**VLSM allows different-sized subnets within the same network** for maximum efficiency

**Always allocate largest subnets first**, then work down to smallest to avoid fragmentation

**Track your address space** carefully to prevent overlapping subnets

**Leave room for growth** - don't allocate 100% of your address space

**Route summarization combines multiple networks** into one routing entry for efficiency

**Summarization reduces routing table size**, speeds up routing, and improves scalability

**To summarize routes:** find common bits in binary, count them, that's your summary mask

**IP addressing best practices:** plan ahead, document everything, use consistent schemes, reserve management space

**/30 networks are perfect for point-to-point links** between routers (2 usable IPs)

**Private IP ranges** (10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) should be used for internal networks

**Overlapping subnets cause routing problems** - always verify your allocations don't overlap

**DHCP for workstations, static for servers** is standard practice

**The Network+ exam tests VLSM understanding**, not complex manual calculations

---

## Check Your Understanding

**1. You need subnets for 100 hosts, 50 hosts, and 25 hosts from 192.168.5.0/24. In what order should you allocate them?**

<details>
<summary>Show Answer</summary>
<strong>100, then 50, then 25 (largest to smallest).</strong> Always allocate largest subnets first to prevent address space fragmentation. Start with the 100-host subnet (/25), then 50-host (/26), then 25-host (/27). This ensures clean, sequential allocation without gaps or overlaps.
</details>

**2. You summarize these networks: 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24, 172.16.3.0/24. What's the summary route?**

<details>
<summary>Show Answer</summary>
<strong>172.16.0.0/22</strong>. These four consecutive /24 networks can be summarized into one /22. In binary, the third octet shows: 00000000, 00000001, 00000010, 00000011. The first 6 bits are common (000000), giving us 16+6=22 bits total, or /22. This covers 172.16.0.0 through 172.16.3.255.
</details>

**3. Your boss wants subnets for 28 hosts and 10 hosts from 10.1.5.0/24. What masks do you use?**

<details>
<summary>Show Answer</summary>
<strong>/27 for 28 hosts (30 usable) and /28 for 10 hosts (14 usable).</strong> The 28-host subnet needs at least 28 usable, so /27 (30 usable) works. The 10-host subnet needs at least 10 usable, so /28 (14 usable) works. Allocate sequentially: 10.1.5.0/27 for the larger subnet, then 10.1.5.32/28 for the smaller.
</details>

**4. Can 192.168.1.0/25 and 192.168.1.64/26 coexist in the same network?**

<details>
<summary>Show Answer</summary>
<strong>No, they overlap.</strong> The /25 subnet covers 192.168.1.0-127 (128 addresses). The /26 subnet tries to use 192.168.1.64-127 (64 addresses). The addresses 64-127 are already part of the /25 subnet, creating an overlap. You can't have overlapping subnets. Use 192.168.1.128/26 instead for the second subnet.
</details>

**5. What's the benefit of route summarization?**

<details>
<summary>Show Answer</summary>
<strong>Reduces routing table size and improves routing efficiency.</strong> Instead of having hundreds of individual routes, summarization combines them into fewer, larger routes. This reduces router memory usage, speeds up routing lookups, decreases routing protocol overhead, and makes networks more scalable. Example: 16 /24 routes can become 1 /20 route.
</details>

**6. You have 172.16.50.0/24. After allocating 172.16.50.0/26, what's the next available subnet for a /27?**

<details>
<summary>Show Answer</summary>
<strong>172.16.50.64/27</strong>. The /26 subnet uses addresses 0-63 (Magic Number = 64). The next available address is .64. A /27 subnet starting at .64 would use 64-95 (Magic Number = 32). This doesn't overlap with the /26 and is a valid allocation.
</details>

**7. Why use /30 subnets for WAN links instead of /24?**

<details>
<summary>Show Answer</summary>
<strong>Efficiency - WAN links only need 2 usable IPs.</strong> A point-to-point link between two routers only needs 2 addresses (one for each router interface). A /30 provides exactly 2 usable IPs. Using a /24 (254 usable) would waste 252 addresses. In large networks with many WAN links, using /30 saves thousands of addresses.
</details>

**8. What happens if you allocate subnets smallest-to-largest instead of largest-to-smallest?**

<details>
<summary>Show Answer</summary>
<strong>Address space fragmentation.</strong> If you allocate small subnets first, you create gaps in your address space that might not be large enough for the bigger subnets you need later. Example: allocate a /30 at the start, now you can't fit a clean /25 without jumping around, creating fragmentation. Always allocate largest first, then fill in with smaller subnets.
</details>

---

## Congratulations - You've Completed IP Addressing!

You just finished four complete lessons on IP addressing - from basic IPv4 structure to advanced VLSM design. This is the material that stops most students, and you pushed through it.

**What you now understand:**
- Binary conversion and subnet mask fundamentals
- CIDR notation and how it works
- The mechanics of subnetting with the Magic Number method
- Variable-length subnet masking for efficient network design
- Route summarization for routing efficiency
- Real-world network design principles

**This puts you ahead of 80% of Network+ test-takers.** Most students memorize some shortcuts and hope for partial credit. You actually understand how subnetting works.

**Moving forward:** The rest of the course builds on this foundation. When we cover routing, VLANs, and troubleshooting in later lessons, you'll see how everything connects. The subnetting knowledge you have now will make those topics make sense.

**If you're feeling overwhelmed:** That's normal. Take a break. Come back tomorrow and review the key concepts. Subnetting doesn't click instantly for most people - it takes practice and repetition. But you have the foundation now.

---

## Before Moving to Lesson 7

Make sure you can confidently:

- [ ] Design a VLSM scheme given requirements of different sizes
- [ ] Allocate subnets sequentially from largest to smallest  
- [ ] Identify overlapping subnets
- [ ] Calculate route summaries for contiguous networks
- [ ] Apply IP addressing best practices
- [ ] Choose appropriate subnet sizes for different scenarios
- [ ] Troubleshoot complex subnetting issues

**Study Strategy:**

**Today:**
- Create a VLSM design for a fictional company (make up requirements)
- Practice route summarization with different network ranges
- Review all four IP addressing lessons briefly
- Test yourself: can you explain VLSM to someone who doesn't know networking?

**Tomorrow (Day 7):**
- Take a day off from new material
- Practice subnetting problems from online resources
- Review flashcards for subnet masks, CIDR notation, Magic Numbers
- Rest - you earned it

**Day 8:**
- Start Lesson 7 (IPv6 Addressing)
- You'll appreciate IPv6 more now that you understand IPv4 thoroughly
- IPv6 is conceptually easier once you understand IPv4 subnetting

---

## Coming Up in Lesson 7: IPv6 Addressing and Configuration

You've mastered **IPv4 addressing** - the addressing system that built the internet.

**Next, you'll learn about IPv6** - the addressing system that will sustain the internet:

- Why IPv6 was created (IPv4 exhaustion)
- IPv6 address format and structure (128 bits!)
- Hexadecimal notation and address shortening rules
- IPv6 address types (unicast, multicast, anycast)
- How IPv6 solves IPv4's problems
- SLAAC and DHCPv6
- Dual-stack networks
- IPv6 subnetting (easier than IPv4!)

**The connection:**

Everything you learned about IPv4 makes IPv6 easier to understand. IPv6 is conceptually simpler in many ways - no broadcast addresses, no complex NAT, cleaner subnetting. The hard part (understanding network/host division, CIDR, subnetting logic) you already know.

**See you in Lesson 7!**

---

*"VLSM is about efficiency. Take only what you need, waste nothing, and leave room for growth."*

---

# LESSON 6 COMPLETE!

**What You Just Learned:**
- Variable Length Subnet Masking (VLSM) concepts and methodology
- How to design networks with different-sized subnets
- Sequential allocation from largest to smallest
- Route summarization and aggregation
- IP addressing best practices for real networks
- Troubleshooting complex subnetting scenarios
- How to avoid common VLSM mistakes

**You're now 20% of the way to Network+ certification!** (6 of 30 lessons complete)

**The hardest technical material in the entire course is now behind you. Everything from here builds on what you know.**