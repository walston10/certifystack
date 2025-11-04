# Lesson 4: Subnet Masks and CIDR Notation

**Estimated Time:** 25-30 minutes  
**Domain:** Networking Concepts  
**Exam Objectives Covered:** 1.7: Using appropriate IPv4 network addressing

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain what a subnet mask is and why it's essential
- Understand how subnet masks work using binary AND operations
- Convert between dotted decimal and CIDR notation
- Calculate the number of usable hosts from a subnet mask
- Identify network addresses and broadcast addresses
- Recognize common subnet masks and their CIDR equivalents
- Understand the relationship between network bits and host bits
- Apply subnet masks to determine network membership

---

## Video Resources

🔹 **Watch:** [Subnet Masks Explained - Professor Messer](https://www.youtube.com/watch?v=s_Ntt6eTn94)  
🔹 **Visual Guide:** [Subnet Masks and CIDR - PowerCert](https://www.youtube.com/watch?v=XQ3T14SIlV4)  
🔹 **Binary ANDing:** [How Subnet Masks Work - NetworkChuck](https://www.youtube.com/watch?v=EkNq4TrHP_U)  
🔹 **CIDR Notation:** [Subnetting Made Simple - Sunny Classroom](https://www.youtube.com/watch?v=BWZ-MHIhqjM)

---

## Important: A Note About Subnetting Difficulty

**Let's be honest:** Subnetting is widely considered **the hardest concept in all of Network+**. It's the topic that causes the most stress, confusion, and exam failures. And that's completely normal.

**Here's what you need to know:**

✅ **It's okay if you don't understand everything perfectly on the first pass.** Seriously. Most networking professionals will tell you that subnetting took multiple attempts to "click."

✅ **Understanding the concepts is more important than memorizing formulas.** You need to grasp *why* subnet masks exist and *what* they do. The mechanical calculations can come later.

✅ **You'll learn more as you continue through the course.** As you study routing, VLANs, network design, and troubleshooting in later lessons, subnetting will start making more sense. The holistic understanding of how networks operate will illuminate why subnetting matters.

✅ **CIDR notation is your friend.** Understanding /24, /26, /30 notation will get you 80% of the way there. You don't need to be a subnetting wizard to pass the exam - you need to recognize patterns and understand concepts.

✅ **The exam tests recognition more than calculation.** Most Network+ questions are multiple choice. You need to recognize correct answers and eliminate wrong ones. You're not doing complex subnet calculations from scratch in most cases.

**Our approach for Lessons 4-6:**

- **Lesson 4 (today):** Understand subnet masks and CIDR notation conceptually
- **Lesson 5:** Learn basic subnetting methodology (how to divide networks)
- **Lesson 6:** Practice with VLSM and real-world scenarios

**Don't panic if it feels overwhelming.** Keep moving forward. Read through the material, absorb what you can, and know that it will make more sense as you progress. You can always come back to review after completing more lessons.

**The goal for today:** Understand *what* subnet masks are and *why* they exist. If you grasp the concept that subnet masks divide IP addresses into network and host portions, you're 80% of the way there.

**Ready? Let's dive in!** 

---

## Introduction

In Lesson 3, you learned all about IP addresses - what they are, how they're structured, and the difference between public and private addresses. But there was one critical piece of the puzzle we only touched on: **subnet masks**.

Imagine you're at a massive convention center with 10,000 people. Someone tells you, "Go find Alex." That's impossible, right? You need more information. "Go find Alex in the technology section, booth 245." Now you can find them!

**IP addresses work the same way.** An IP address alone (like 192.168.1.100) doesn't tell a computer enough information. The computer needs to know:
- Which part of the address identifies the *network* (the "convention section")?
- Which part identifies the specific *host* (the "booth number")?

**That's exactly what subnet masks do.** They're a critical companion to every IP address, telling devices how to interpret the address and determine network membership.

**Why does this matter?**
- Routers use subnet masks to decide where to send traffic
- Computers use subnet masks to determine if another device is on their local network
- Network administrators use subnet masks to divide large networks into smaller, manageable segments
- The Network+ exam tests subnet mask knowledge extensively

**The relationship:**
- **IP address** = The complete address (network + host)
- **Subnet mask** = The "decoder" that reveals which part is network and which part is host

Think of it like this:
- IP address: "2451 Main Street, Springfield"
- Subnet mask: "The first two items (2451 Main Street) are the street address, and the last item (Springfield) is the city"

Without the subnet mask, computers wouldn't know where one network ends and another begins.

Let's unlock this puzzle! 🔓

---

## What is a Subnet Mask?

A **subnet mask** is a 32-bit number (just like an IP address) that defines which portion of an IP address represents the network and which portion represents the host.

**Key characteristics:**
- Written in dotted decimal notation (just like IP addresses)
- Always consists of consecutive 1s followed by consecutive 0s in binary
- The 1s indicate the network portion
- The 0s indicate the host portion

**Example:**

IP Address: `192.168.1.100`  
Subnet Mask: `255.255.255.0`

**In binary:**
```
IP Address:    11000000.10101000.00000001.01100100
Subnet Mask:   11111111.11111111.11111111.00000000
               \_________Network_________/\_Host__/
```

**Translation:**
- The first three octets (192.168.1) = **Network portion**
- The last octet (100) = **Host portion**
- This device is host #100 on the 192.168.1.0 network

✅ **Key Concept:** The subnet mask acts like a highlighter, marking which bits of the IP address represent the network. Everything else is the host.

---

## Common Subnet Masks in Dotted Decimal

Before we dive deep into binary, let's familiarize ourselves with the most common subnet masks you'll encounter:

| Dotted Decimal | Binary | Network Bits | Host Bits | CIDR |
|----------------|--------|--------------|-----------|------|
| 255.0.0.0      | 11111111.00000000.00000000.00000000 | 8 | 24 | /8 |
| 255.255.0.0    | 11111111.11111111.00000000.00000000 | 16 | 16 | /16 |
| 255.255.255.0  | 11111111.11111111.11111111.00000000 | 24 | 8 | /24 |
| 255.255.255.128 | 11111111.11111111.11111111.10000000 | 25 | 7 | /25 |
| 255.255.255.192 | 11111111.11111111.11111111.11000000 | 26 | 6 | /26 |
| 255.255.255.224 | 11111111.11111111.11111111.11100000 | 27 | 5 | /27 |
| 255.255.255.240 | 11111111.11111111.11111111.11110000 | 28 | 4 | /28 |
| 255.255.255.248 | 11111111.11111111.11111111.11111000 | 29 | 3 | /29 |
| 255.255.255.252 | 11111111.11111111.11111111.11111100 | 30 | 2 | /30 |

**Exam Tip:** You should recognize these masks on sight. They appear constantly on the Network+ exam!

**Notice the pattern?** The subnet mask values you see (255, 128, 192, 224, 240, 248, 252) are all related to the powers of 2 we learned in Lesson 3!

---

## How Subnet Masks Work: Binary AND Operation

Here's the technical truth: Computers use a **binary AND operation** between the IP address and the subnet mask to determine the network address.

**Don't let this intimidate you!** The concept is simple even if the terminology sounds complex.

### Binary AND Rules

In binary AND operations:
- **1 AND 1 = 1**
- **1 AND 0 = 0**
- **0 AND 1 = 0**
- **0 AND 0 = 0**

**Translation:** Only when both bits are 1 does the result equal 1. Otherwise, the result is 0.

### Example: Finding the Network Address

**IP Address:** 192.168.1.100  
**Subnet Mask:** 255.255.255.0

**Step 1: Convert to binary**
```
IP Address:    11000000.10101000.00000001.01100100
Subnet Mask:   11111111.11111111.11111111.00000000
```

**Step 2: Perform AND operation**
```
IP Address:    11000000.10101000.00000001.01100100
Subnet Mask:   11111111.11111111.11111111.00000000
               ----------------------------------------- AND
Network:       11000000.10101000.00000001.00000000
```

**Step 3: Convert result back to decimal**
```
Network Address: 192.168.1.0
```

**What this tells us:**
- The device at 192.168.1.100 is on the **192.168.1.0** network
- Any device with an IP address 192.168.1.x (where x = 1-254) is on the same network
- The router needs to know this to make routing decisions

💡 **Pro Tip:** You don't need to manually perform AND operations on the exam! Understanding the *concept* that subnet masks isolate the network portion is what matters.

---

## CIDR Notation (Slash Notation)

**CIDR** stands for **Classless Inter-Domain Routing**, but everyone just calls it **"slash notation"** because it uses a forward slash (/).

**Format:** `IP_Address/Number_of_Network_Bits`

**Examples:**
- `192.168.1.0/24` means 24 network bits (subnet mask 255.255.255.0)
- `10.0.0.0/8` means 8 network bits (subnet mask 255.0.0.0)
- `172.16.0.0/16` means 16 network bits (subnet mask 255.255.0.0)

**Why CIDR is better than dotted decimal:**
- Shorter and easier to write: `/24` vs `255.255.255.0`
- More flexible (we'll see why in Lessons 5-6)
- Universal standard in modern networking
- Easier to calculate subnet information

✅ **Key Concept:** The number after the slash (/) tells you how many consecutive 1s are in the subnet mask when written in binary.

---

## Converting Between CIDR and Dotted Decimal

**The relationship:**

The CIDR number tells you how many 1s are in the subnet mask (starting from the left).

**Example: /24**

24 ones in binary:
```
11111111.11111111.11111111.00000000
```

Convert each octet to decimal:
- 11111111 = 255
- 11111111 = 255
- 11111111 = 255
- 00000000 = 0

**Result: /24 = 255.255.255.0**

**Example: /16**

16 ones in binary:
```
11111111.11111111.00000000.00000000
```

**Result: /16 = 255.255.0.0**

**Example: /8**

8 ones in binary:
```
11111111.00000000.00000000.00000000
```

**Result: /8 = 255.0.0.0**

---

## Common CIDR Notations You Must Know

| CIDR | Dotted Decimal | Binary (last octet) | Usable Hosts |
|------|----------------|---------------------|--------------|
| /24  | 255.255.255.0  | 00000000 | 254 |
| /25  | 255.255.255.128 | 10000000 | 126 |
| /26  | 255.255.255.192 | 11000000 | 62 |
| /27  | 255.255.255.224 | 11100000 | 30 |
| /28  | 255.255.255.240 | 11110000 | 14 |
| /29  | 255.255.255.248 | 11111000 | 6 |
| /30  | 255.255.255.252 | 11111100 | 2 |

**Exam Tip:** Memorize /24, /26, /28, and /30 at minimum. These are the most common on the exam!

**Special mention: /30 networks**
- Used for point-to-point links (connecting two routers)
- Only 2 usable host addresses (perfect for router-to-router connections)
- Very common in WAN environments

---

## Network Bits vs Host Bits

Every subnet mask divides the 32 bits of an IP address into two portions:

**Network Bits** (represented by 1s in the mask):
- Identify which network the device belongs to
- All devices on the same network have identical network bits
- The more network bits, the more networks you can create
- Fewer network bits = larger networks

**Host Bits** (represented by 0s in the mask):
- Identify the specific device on that network
- Each device has a unique combination of host bits
- The more host bits, the more devices per network
- Fewer host bits = smaller networks

**Relationship:**
```
Network Bits + Host Bits = 32 (always)
```

**Examples:**

**/24 network:**
- 24 network bits + 8 host bits = 32 total
- Subnet mask: 255.255.255.0
- 2⁸ = 256 total addresses (254 usable hosts)

**/16 network:**
- 16 network bits + 16 host bits = 32 total
- Subnet mask: 255.255.0.0
- 2¹⁶ = 65,536 total addresses (65,534 usable hosts)

**/30 network:**
- 30 network bits + 2 host bits = 32 total
- Subnet mask: 255.255.255.252
- 2² = 4 total addresses (2 usable hosts)

✅ **Key Concept:** More network bits = more networks but fewer hosts per network. Fewer network bits = fewer networks but more hosts per network. It's always a trade-off!

---

## Calculating Usable Hosts

Here's a formula you **must memorize** for the exam:

**Formula:** `Usable Hosts = 2^(host bits) - 2`

**Why subtract 2?**
- One address is the **network address** (all host bits = 0)
- One address is the **broadcast address** (all host bits = 1)
- Neither can be assigned to actual devices

### Examples

**Example 1: /24 network**

Host bits: 32 - 24 = **8 host bits**

Calculation:
```
2^8 - 2 = 256 - 2 = 254 usable hosts
```

**Example 2: /26 network**

Host bits: 32 - 26 = **6 host bits**

Calculation:
```
2^6 - 2 = 64 - 2 = 62 usable hosts
```

**Example 3: /30 network**

Host bits: 32 - 30 = **2 host bits**

Calculation:
```
2^2 - 2 = 4 - 2 = 2 usable hosts
```

**Example 4: /28 network**

Host bits: 32 - 28 = **4 host bits**

Calculation:
```
2^4 - 2 = 16 - 2 = 14 usable hosts
```

**Quick reference table:**

| Host Bits | Total Addresses | Usable Hosts | Common CIDR |
|-----------|----------------|--------------|-------------|
| 2         | 4              | 2            | /30 |
| 3         | 8              | 6            | /29 |
| 4         | 16             | 14           | /28 |
| 5         | 32             | 30           | /27 |
| 6         | 64             | 62           | /26 |
| 7         | 128            | 126          | /25 |
| 8         | 256            | 254          | /24 |

**Exam Tip:** You can calculate these on the fly during the exam using the formula, but memorizing the common ones (/24, /26, /28, /30) saves valuable time!

---

## Network Address, Broadcast Address, and Usable Range

Every subnet has three important addresses to understand:

### 1. Network Address

**What it is:** The first address in the subnet (all host bits = 0)

**Purpose:** Identifies the network itself

**Can it be assigned to a device?** NO

**Example:** In the 192.168.1.0/24 network, the network address is `192.168.1.0`

### 2. Broadcast Address

**What it is:** The last address in the subnet (all host bits = 1)

**Purpose:** Sends data to all devices on the network simultaneously

**Can it be assigned to a device?** NO

**Example:** In the 192.168.1.0/24 network, the broadcast address is `192.168.1.255`

### 3. Usable Host Range

**What it is:** All addresses between the network and broadcast addresses

**Purpose:** These are the addresses you can assign to actual devices

**Example:** In the 192.168.1.0/24 network:
- First usable host: `192.168.1.1`
- Last usable host: `192.168.1.254`
- Total usable: 254 addresses

---

## Complete Subnet Example: 192.168.1.0/24

Let's analyze a complete subnet:

**Network:** 192.168.1.0/24

**Subnet Mask:**
- CIDR: /24
- Dotted Decimal: 255.255.255.0
- Binary: 11111111.11111111.11111111.00000000

**Network Bits:** 24  
**Host Bits:** 8

**Addresses:**
- Network Address: `192.168.1.0` (first address, all host bits = 0)
- First Usable Host: `192.168.1.1`
- Last Usable Host: `192.168.1.254`
- Broadcast Address: `192.168.1.255` (last address, all host bits = 1)

**Usable Hosts:** 2⁸ - 2 = 254

**Binary breakdown of key addresses:**
```
Network:     192.168.1.  0   → .00000000
First Host:  192.168.1.  1   → .00000001
Last Host:   192.168.1.254   → .11111110
Broadcast:   192.168.1.255   → .11111111
```

**Real-world usage:** This is the most common home/small office network. Your router is typically 192.168.1.1, and devices get addresses from 192.168.1.2 to 192.168.1.254.

---

## Another Example: 10.50.100.0/26

Let's try a less common subnet:

**Network:** 10.50.100.0/26

**Subnet Mask:**
- CIDR: /26
- Dotted Decimal: 255.255.255.192
- Binary (last octet): 11000000

**Network Bits:** 26  
**Host Bits:** 6

**Calculating the broadcast address:**

With 6 host bits, the range is 2⁶ = 64 addresses (0-63)

```
Network:     10.50.100.0   → last octet: 00000000 (0)
Broadcast:   10.50.100.63  → last octet: 00111111 (63)
```

**Addresses:**
- Network Address: `10.50.100.0`
- First Usable Host: `10.50.100.1`
- Last Usable Host: `10.50.100.62`
- Broadcast Address: `10.50.100.63`

**Usable Hosts:** 2⁶ - 2 = 62

---

## Subnet Mask Patterns in the Last Octet

Understanding the binary patterns helps you quickly identify subnet masks:

| CIDR | Subnet Mask Octet | Binary | Pattern |
|------|------------------|--------|---------|
| /24  | 0   | 00000000 | 0 network bits in last octet |
| /25  | 128 | 10000000 | 1 network bit in last octet |
| /26  | 192 | 11000000 | 2 network bits in last octet |
| /27  | 224 | 11100000 | 3 network bits in last octet |
| /28  | 240 | 11110000 | 4 network bits in last octet |
| /29  | 248 | 11111000 | 5 network bits in last octet |
| /30  | 252 | 11111100 | 6 network bits in last octet |
| /31  | 254 | 11111110 | 7 network bits (special case) |
| /32  | 255 | 11111111 | 8 network bits (single host) |

**Notice:** Each time you add a network bit, you're cutting the number of hosts in half!

- /24 = 254 hosts
- /25 = 126 hosts (cut in half)
- /26 = 62 hosts (cut in half again)
- /27 = 30 hosts (cut in half again)
- And so on...

✅ **Key Concept:** Subnetting is all about borrowing bits from the host portion to create more networks. Each bit you borrow doubles the number of networks but halves the number of hosts.

---

## Determining if Two Devices Are on the Same Network

One of the most practical uses of subnet masks is determining whether two devices can communicate directly or need a router.

**Rule:** Two devices are on the same network if they have the same network portion of their IP addresses.

### Example 1: Same Network

**Device A:** 192.168.1.50/24  
**Device B:** 192.168.1.100/24

**Subnet Mask:** 255.255.255.0 (/24)

**Network portion:** First 24 bits (192.168.1)

**Analysis:**
- Device A network: 192.168.1
- Device B network: 192.168.1
- Same network! ✅

**Result:** These devices can communicate directly without a router.

### Example 2: Different Networks

**Device A:** 192.168.1.50/24  
**Device B:** 192.168.2.50/24

**Subnet Mask:** 255.255.255.0 (/24)

**Network portion:** First 24 bits

**Analysis:**
- Device A network: 192.168.1
- Device B network: 192.168.2
- Different networks! ❌

**Result:** These devices need a router to communicate with each other.

### Example 3: Tricky - Same Third Octet but Different Networks

**Device A:** 192.168.1.50/25  
**Device B:** 192.168.1.200/25

**Subnet Mask:** 255.255.255.128 (/25)

This is trickier because both have "192.168.1" but they're actually on different subnets!

**Binary analysis:**
```
Device A:   192.168.1.50
Binary:     192.168.1.00110010
Mask:       255.255.255.10000000 (/25)
Network:    192.168.1.0 (first half: 0-127)

Device B:   192.168.1.200
Binary:     192.168.1.11001000
Mask:       255.255.255.10000000 (/25)
Network:    192.168.1.128 (second half: 128-255)
```

**Result:** Different networks! They need a router to communicate.

💡 **Pro Tip:** When subnetting, just because two IPs have the same first three octets doesn't mean they're on the same network! The subnet mask is the determining factor.

---

## Special Case: /32 (Single Host)

**CIDR:** /32  
**Subnet Mask:** 255.255.255.255

**Meaning:** This represents a **single specific host**.

**Use cases:**
- Host routes in routing tables
- Firewall rules for specific devices
- VPN endpoint addresses
- Loopback interfaces on routers

**Example:** `10.0.0.5/32` refers to exactly one device - host 10.0.0.5

**Usable hosts:** None - this isn't a network, it's a single host!

---

## Special Case: /31 (Point-to-Point Links)

**CIDR:** /31  
**Subnet Mask:** 255.255.255.254

**Traditional calculation:** 2² - 2 = 2 usable hosts... but wait, 2² = 4 total, minus network and broadcast = 2 usable

**Modern use (RFC 3021):** On point-to-point links, there's no need for a broadcast address! Both addresses can be used.

**Use case:** Connecting two routers

**Example:**
```
Router A: 10.0.0.0/31
Router B: 10.0.0.1/31
```

No wasted addresses for network or broadcast!

**Exam Tip:** /31 is relatively new and specifically for point-to-point links. Most of the time, you'll see /30 used for point-to-point connections (which has 2 usable hosts).

---

## Converting Subnet Masks: Practice Examples

### Example 1: /27 to Dotted Decimal

**Step 1:** 27 network bits means 27 consecutive 1s

**Step 2:** Write out the binary:
```
11111111.11111111.11111111.11100000
```

**Step 3:** Convert each octet:
- 11111111 = 255
- 11111111 = 255
- 11111111 = 255
- 11100000 = 224 (128 + 64 + 32)

**Answer:** 255.255.255.224

### Example 2: 255.255.255.240 to CIDR

**Step 1:** Convert to binary:
```
11111111.11111111.11111111.11110000
```

**Step 2:** Count the 1s:
- First octet: 8 ones
- Second octet: 8 ones
- Third octet: 8 ones
- Fourth octet: 4 ones
- Total: 8 + 8 + 8 + 4 = 28

**Answer:** /28

### Example 3: /29 - How Many Usable Hosts?

**Step 1:** Calculate host bits:
```
32 total bits - 29 network bits = 3 host bits
```

**Step 2:** Apply formula:
```
2³ - 2 = 8 - 2 = 6 usable hosts
```

**Answer:** 6 usable hosts

---

## Quick Reference: Common Subnets

This table is worth memorizing for the exam:

| CIDR | Subnet Mask | Network Bits | Host Bits | Usable Hosts | Common Use |
|------|-------------|--------------|-----------|--------------|------------|
| /8   | 255.0.0.0   | 8  | 24 | 16,777,214 | Class A default |
| /16  | 255.255.0.0 | 16 | 16 | 65,534 | Class B default |
| /24  | 255.255.255.0 | 24 | 8 | 254 | Class C default, home networks |
| /25  | 255.255.255.128 | 25 | 7 | 126 | Half of /24 |
| /26  | 255.255.255.192 | 26 | 6 | 62 | Quarter of /24 |
| /27  | 255.255.255.224 | 27 | 5 | 30 | Small departments |
| /28  | 255.255.255.240 | 28 | 4 | 14 | Very small segments |
| /29  | 255.255.255.248 | 29 | 3 | 6 | Tiny segments |
| /30  | 255.255.255.252 | 30 | 2 | 2 | Point-to-point links |

---

## Real-World Application

**Scenario:** You're setting up a small business network with the following requirements:

- Main office: 100 employees (need 100 IP addresses)
- Guest network: 30 guests maximum
- Server room: 10 servers
- Point-to-point link between two offices

**Your available network:** 192.168.10.0/24

**How would you subnet this?**

**Solution (we'll learn the detailed process in Lessons 5-6):**

1. **Main office:** 192.168.10.0/25
   - Subnet mask: 255.255.255.128
   - Usable hosts: 126 (plenty for 100 employees)
   - Range: 192.168.10.1 - 192.168.10.126

2. **Guest network:** 192.168.10.128/27
   - Subnet mask: 255.255.255.224
   - Usable hosts: 30 (perfect!)
   - Range: 192.168.10.129 - 192.168.10.158

3. **Server room:** 192.168.10.160/28
   - Subnet mask: 255.255.255.240
   - Usable hosts: 14 (enough for 10 servers with room to grow)
   - Range: 192.168.10.161 - 192.168.10.174

4. **Point-to-point link:** 192.168.10.176/30
   - Subnet mask: 255.255.255.252
   - Usable hosts: 2 (one for each router)
   - Range: 192.168.10.177 - 192.168.10.178

**Benefits:**
- Separate broadcast domains (better performance)
- Better security (separate networks)
- Efficient IP address usage
- Room for future growth

---

## Why Subnet Masks Matter (The Big Picture)

**1. Routing Decisions**

Routers use subnet masks to determine where to forward packets:
- If destination is on the local network → send directly
- If destination is on a different network → send to router

**2. Broadcast Domains**

Subnet masks define broadcast boundaries:
- Broadcasts only reach devices on the same subnet
- Smaller subnets = less broadcast traffic = better performance

**3. Network Security**

Separate subnets provide security segmentation:
- Guest Wi-Fi on separate subnet from corporate network
- Servers on separate subnet from workstations
- Easier to apply firewall rules between subnets

**4. Address Conservation**

Variable-length subnet masks allow efficient address usage:
- Use /30 for point-to-point links (only need 2 addresses)
- Use /24 for larger departments
- Don't waste addresses!

**5. Network Organization**

Subnetting helps organize networks logically:
- Different floors/buildings on different subnets
- Different departments on different subnets
- Easier management and troubleshooting

---

## Key Exam Tips

**Memorize these subnet masks immediately:**
- **/24** = 255.255.255.0 (254 hosts)
- **/26** = 255.255.255.192 (62 hosts)
- **/28** = 255.255.255.240 (14 hosts)
- **/30** = 255.255.255.252 (2 hosts) - point-to-point links

**Remember the formula:** Usable hosts = 2^(host bits) - 2

**Know the "why subtract 2":** Network address and broadcast address can't be assigned to devices

**CIDR is just counting 1s:** /24 means 24 ones in the subnet mask

**Pattern recognition:** Each bit borrowed cuts hosts in half and doubles networks

**Common exam question types:**
- "How many usable hosts in a /27 network?" (Answer: 30)
- "What's the broadcast address for 192.168.1.0/26?" (Answer: 192.168.1.63)
- "Are these two devices on the same network?"
- "Convert /28 to dotted decimal" (Answer: 255.255.255.240)

**Don't panic about binary:** You can often eliminate wrong answers without perfect binary calculations

**Powers of 2 are your friend:** 2, 4, 8, 16, 32, 64, 128, 256 - know these cold!

---

## Common Mistakes to Avoid

❌ **Forgetting to subtract 2 from total hosts**
- 2⁸ = 256, but usable hosts = 254 (not 256!)

❌ **Confusing /24 with 24 hosts**
- /24 means 24 network bits, which gives you 254 hosts (not 24!)

❌ **Thinking 255.255.255.255 is a normal subnet mask**
- /32 represents a single host, not a network

❌ **Not considering the subnet mask when determining network membership**
- 192.168.1.50 and 192.168.1.200 might be on different networks if the mask is /25!

❌ **Mixing up network address and first usable host**
- Network address = all host bits 0 (can't assign to device)
- First usable host = network address + 1

❌ **Assigning the broadcast address to a device**
- Broadcast = all host bits 1 (can't assign to device)
- Last usable host = broadcast address - 1

---

## Remember: It's Okay to Not Fully Understand Yet!

If your head is spinning right now, **that's completely normal**. Subnet masks and CIDR notation take time to internalize.

**What you should understand after this lesson:**
- ✅ Subnet masks divide IP addresses into network and host portions
- ✅ CIDR notation (/24, /26, etc.) is shorthand for subnet masks
- ✅ More network bits = more networks, fewer hosts per network
- ✅ Usable hosts = 2^(host bits) - 2
- ✅ Common masks like /24, /26, /28, /30

**What you DON'T need to master yet:**
- ⏸️ Perfect binary AND operations in your head
- ⏸️ Complex subnetting calculations (that's Lessons 5-6)
- ⏸️ VLSM design (that's Lesson 6)
- ⏸️ Every possible subnet mask combination

**Trust the process:**
- Lessons 5-6 will build on this foundation with practice
- As you learn routing, VLANs, and troubleshooting, subnetting will make more sense
- You can always review this lesson after progressing further
- Understanding concepts > memorizing formulas

**The Network+ exam reality:**
- Many questions test recognition, not calculation
- You can often eliminate wrong answers
- Some questions give you the subnet information
- Focus on understanding patterns and relationships

**Keep moving forward!**

---

## Key Takeaways

✅ **Subnet masks** define which part of an IP address is the network and which part is the host

✅ **CIDR notation** (like /24) is shorthand - the number represents network bits

✅ **Common subnet masks** to memorize: /24 (255.255.255.0), /26 (255.255.255.192), /28 (255.255.255.240), /30 (255.255.255.252)

✅ **Usable hosts formula:** 2^(host bits) - 2

✅ **Why subtract 2:** One address is the network address, one is the broadcast address

✅ **Network bits + Host bits = 32** (always)

✅ **More network bits = more networks but fewer hosts per network** (trade-off)

✅ **Two devices are on the same network** if they have the same network portion

✅ **Network address:** First address (all host bits = 0), can't be assigned

✅ **Broadcast address:** Last address (all host bits = 1), can't be assigned

✅ **/30 networks** are common for point-to-point links (2 usable hosts)

✅ **/32** represents a single host, not a network

✅ **Binary AND** is how computers calculate network addresses (but you don't need to master this for the exam)

---

## Check Your Understanding

**1. What does the /24 in 192.168.1.0/24 represent?**

<details>
<summary>Show Answer</summary>
<strong>The number of network bits (24).</strong> In CIDR notation, the number after the slash represents how many consecutive 1s are in the subnet mask. /24 means 24 network bits and 8 host bits (32 - 24 = 8). This translates to a subnet mask of 255.255.255.0 in dotted decimal notation.
</details>

**2. How many usable host addresses are in a /26 network?**

<details>
<summary>Show Answer</summary>
<strong>62 usable hosts.</strong> A /26 network has 26 network bits, leaving 6 host bits (32 - 26 = 6). Using the formula: 2^6 - 2 = 64 - 2 = 62 usable hosts. We subtract 2 because the first address is the network address and the last is the broadcast address, neither of which can be assigned to devices.
</details>

**3. Convert /28 to dotted decimal notation.**

<details>
<summary>Show Answer</summary>
<strong>255.255.255.240.</strong> /28 means 28 consecutive 1s in binary: 11111111.11111111.11111111.11110000. Converting each octet: 255.255.255.240. The last octet (11110000) equals 240 because 128 + 64 + 32 + 16 = 240.
</details>

**4. What is the broadcast address for the network 192.168.1.0/24?**

<details>
<summary>Show Answer</summary>
<strong>192.168.1.255.</strong> In a /24 network, the last octet contains all the host bits. The broadcast address has all host bits set to 1. Since the last octet can range from 0-255, and 255 in binary is 11111111 (all 1s), the broadcast address is 192.168.1.255.
</details>

**5. Are 192.168.1.50/24 and 192.168.1.200/24 on the same network?**

<details>
<summary>Show Answer</summary>
<strong>Yes, they are on the same network.</strong> With a /24 subnet mask (255.255.255.0), the first 24 bits (first three octets) represent the network. Both addresses have the network portion 192.168.1, so they're on the same network (192.168.1.0/24). They can communicate directly without needing a router.
</details>

**6. Why do we subtract 2 when calculating usable hosts?**

<details>
<summary>Show Answer</summary>
<strong>Because the network address and broadcast address cannot be assigned to devices.</strong> Every subnet has a network address (all host bits = 0) that identifies the network itself, and a broadcast address (all host bits = 1) used to send data to all devices on the network. Neither of these can be assigned to actual host devices, so we subtract 2 from the total number of addresses.
</details>

**7. What is the subnet mask for a /30 network in dotted decimal?**

<details>
<summary>Show Answer</summary>
<strong>255.255.255.252.</strong> /30 means 30 network bits: 11111111.11111111.11111111.11111100. The last octet (11111100) equals 252 (128 + 64 + 32 + 16 + 8 + 4 = 252). This subnet is commonly used for point-to-point links between routers because it provides exactly 2 usable host addresses.
</details>

**8. If you have a /27 network, how many host bits do you have?**

<details>
<summary>Show Answer</summary>
<strong>5 host bits.</strong> Since network bits + host bits = 32, and a /27 network has 27 network bits, that leaves 32 - 27 = 5 host bits. This means 2^5 - 2 = 30 usable hosts for this network.
</details>

---

## Before Moving to Lesson 5

Make sure you can confidently:

- [ ] **Explain what a subnet mask does** (divides IP into network and host portions)
- [ ] **Convert between CIDR and dotted decimal** for common masks (/24, /26, /28, /30)
- [ ] **Calculate usable hosts** using the formula 2^(host bits) - 2
- [ ] **Identify network and broadcast addresses** for a given subnet
- [ ] **Recognize common subnet masks on sight** (255.255.255.0, .192, .240, .252)
- [ ] **Understand the trade-off** between network bits and host bits
- [ ] **Determine if two devices are on the same network** using subnet masks

**Study Strategy:**

**Today:**
- Create flashcards for common CIDR notations and their dotted decimal equivalents
- Practice the usable hosts formula with different subnet masks
- Write out /24, /26, /28, /30 in both CIDR and dotted decimal until you can do it from memory
- Don't stress if everything doesn't click perfectly yet!

**Tomorrow (Day 5):**
- Review subnet mask conversions (5-10 minutes)
- Practice identifying network and broadcast addresses
- Read through this lesson again - you'll understand more the second time!
- Prepare mentally for subnetting methodology in Lesson 5

**Day 6:**
- Continue Lesson 5 (Subnetting Fundamentals)
- The hands-on practice will make concepts from this lesson clearer
- Remember: understanding comes gradually with practice

💡 **Pro Tip:** Don't spend hours trying to perfect subnet masks before moving on. The real understanding comes from seeing subnetting in action (Lesson 5) and in real-world contexts (later lessons). Keep moving forward, and circle back to review as needed!

**It's okay if you're not 100% there yet.** Most networking students need multiple passes through subnetting material before it fully clicks. You're building a foundation - the house comes later!

---

## Coming Up in Lesson 5: Subnetting Fundamentals

You've learned **WHAT** subnet masks are and **HOW** CIDR notation works.

**Next, you'll learn the actual process of subnetting** - dividing a network into smaller subnets:

- Why we subnet networks (security, performance, organization)
- The "Magic Number" method for subnetting
- How to subnet a /24 network into equal-sized subnets
- Step-by-step calculations for network boundaries
- Identifying network, first host, last host, and broadcast for each subnet
- Real-world subnetting scenarios
- Hands-on practice problems

**The connection:**

Lesson 4 taught you the language of subnetting (subnet masks and CIDR). Lesson 5 will teach you how to actually DO subnetting - take a network and divide it up efficiently. You'll practice the mechanical process of creating subnets, which will solidify everything you learned today.

**And remember:** If Lesson 5 feels challenging, that's normal! Subnetting takes practice. The goal is progressive improvement, not instant mastery.

**See you in Lesson 5!** 🎉

---

*"Understanding subnet masks is like learning the alphabet before reading. It's the foundation for everything else."*

---

# ✅ LESSON 4 COMPLETE!

**What You Just Learned:**
- ✅ What subnet masks are and why they're essential
- ✅ How subnet masks divide IPs into network and host portions
- ✅ CIDR notation (slash notation like /24, /26, /28)
- ✅ Converting between CIDR and dotted decimal
- ✅ Calculating usable hosts (2^host bits - 2)
- ✅ Network addresses and broadcast addresses
- ✅ Common subnet masks (/24, /26, /28, /30)
- ✅ How to determine if devices are on the same network
- ✅ The relationship between network bits and host bits


**And remember: It's okay if this felt hard. Subnetting is THE hardest part of Network+, and you're doing great by working through it!** 

**Next up: Putting these concepts into practice with actual subnetting!**