# Lesson 3: IP Addressing Fundamentals

**Estimated Time:** 25-30 minutes  
**Domain:** Networking Concepts  
**Exam Objectives Covered:** 1.4 - Given a scenario, configure a subnet and use appropriate IP addressing schemes (Part 1)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain the structure of IPv4 addresses and their 32-bit format
- Convert decimal numbers to binary and binary to decimal
- Identify the five IP address classes and their ranges
- Distinguish between public and private IP addresses
- Recognize special IP addresses (loopback, APIPA, default route)
- Understand the difference between network and host portions of an IP address
- Apply binary fundamentals to solve networking problems

---

## Video Resources

🔹 **Watch:** [IP Addresses Explained - Next Gen](https://www.youtube.com/watch?v=ddM9AcreVqY)  
🔹 **Visual Guide:** [IP Address Classes - Sunny Classroom](https://www.youtube.com/watch?v=vcArZIAmnYQ)  
🔹 **Binary Basics:** [Binary Numbers for Networking - NetworkChuck](https://www.youtube.com/watch?v=5WfiTHiU4x8)  

---

## Introduction

Imagine you're throwing a massive party and you need to send invitations to hundreds of people across the entire city. How do you make sure each invitation reaches the right person? You need a systematic addressing system. Without addresses, the postal service would have no idea where to deliver your invitations!

**The internet faces the same challenge**, except it's delivering billions of "invitations" (data packets) every second to billions of devices worldwide. The solution? **IP addresses** - the addressing system that makes the internet work.

An IP address is like a home address for every device on a network. Just as your home address has a street number, street name, city, and zip code that uniquely identify where you live, an IP address uniquely identifies a device on a network so that data can find its way to the right destination.

**Why does this matter for the Network+ exam?** IP addressing is absolutely foundational. You cannot configure networks, troubleshoot connectivity issues, or design network architectures without mastering IP addressing. In fact, the exam dedicates an entire objective (1.4) to IP addressing and subnetting, and questions about IP addresses appear throughout all five domains.

Here's the truth: **Many students fail the Network+ exam because of weak IP addressing skills**. They can explain the OSI model, identify cable types, and describe security concepts, but when faced with IP addressing and subnetting questions, they freeze. Don't let that be you!

This lesson is the first of four dedicated to IP addressing mastery. Today, we're building the foundation by understanding how IP addresses work, how binary relates to networking, and the different types of IP addresses you'll encounter. In Lessons 4-6, we'll build on this foundation with subnet masks, CIDR notation, and actual subnetting.

**The good news?** IP addressing follows logical rules and patterns. Once you understand the fundamentals, everything else clicks into place. Let's get started!

---

## What is an IP Address?

An **IP address** (Internet Protocol address) is a unique numerical label assigned to every device on a network. Think of it as the "mailing address" for network communication.

**There are two versions of IP addresses:**
- **IPv4** (IP version 4) - The original addressing system, still dominant today (this lesson)
- **IPv6** (IP version 6) - The newer system designed to solve IPv4 address exhaustion (Lesson 7)

We'll focus entirely on **IPv4** for now, because:
1. It's still the most common addressing system in use
2. The Network+ exam heavily emphasizes IPv4
3. You must master IPv4 before tackling IPv6
4. Most networks use both IPv4 and IPv6 (dual-stack), so you need to know IPv4 anyway

---

## IPv4 Address Structure

### The Basics: Dotted Decimal Notation

An IPv4 address looks like this: **192.168.1.100**

At first glance, it appears to be four numbers separated by periods (dots). This format is called **dotted decimal notation** - the way humans read IP addresses.

**Key characteristics:**
- Four numbers separated by dots
- Each number is called an **octet**
- Each octet ranges from **0 to 255**
- The complete address is **32 bits** long

**Example addresses:**
- `192.168.1.1` - Common home router address
- `8.8.8.8` - Google's public DNS server
- `172.16.50.25` - Private network address
- `10.0.0.1` - Another common router address

💡 **Pro Tip:** You'll see the term "octet" throughout networking. An octet is simply a group of 8 bits. Since IPv4 addresses have four octets, that's 4 × 8 = 32 bits total.

---

## Binary: The Language of Computers

Here's a fundamental truth about networking: **Computers don't think in decimal**. While we humans see `192.168.1.1`, computers see `11000000.10101000.00000001.00000001`.

**Why binary matters:**
1. Computers operate in binary (1s and 0s represent electrical signals: on/off)
2. Subnet masks use binary logic (we'll cover this in Lesson 4)
3. Understanding binary is REQUIRED for subnetting
4. The Network+ exam expects you to work with binary

**Don't panic!** You don't need to be a binary expert, but you do need to understand the basics and be able to convert between decimal and binary.

---

## Understanding Binary Numbers

**Binary is a base-2 number system** (only uses 0 and 1), while decimal is base-10 (uses 0-9).

### The Binary Place Value System

Just like decimal numbers have place values (ones, tens, hundreds, thousands), binary has place values based on powers of 2:

```
Binary place values (right to left):
128  64  32  16  8  4  2  1
 |   |   |   |  | | | |
 2⁷  2⁶  2⁵  2⁴ 2³ 2² 2¹ 2⁰
```

**This is THE most important thing to memorize for IP addressing!**

**Exam Tip:** Memorize this sequence forwards and backwards: **128, 64, 32, 16, 8, 4, 2, 1**. Write it down at the start of the exam. You'll use it constantly for subnetting questions.

### How Binary Works

Each position in a binary number represents a power of 2. If the bit is **1**, you count that value. If it's **0**, you don't count it.

**Example: Converting binary to decimal**

Binary: `11000000`

Let's break it down:
```
Position:  128   64   32   16   8   4   2   1
Binary:     1    1    0    0   0   0   0   0
Values:   128 + 64 + 0  + 0 + 0 + 0 + 0 + 0 = 192
```

**Answer: 192**

The binary number `11000000` equals 192 in decimal because we have a 1 in the 128 position and a 1 in the 64 position. All other positions are 0, so they don't contribute to the total.

**Let's try another example:**

Binary: `10101000`

```
Position:  128   64   32   16   8   4   2   1
Binary:     1    0    1    0   1   0   0   0
Values:   128 + 0 + 32 + 0 + 8 + 0 + 0 + 0 = 168
```

**Answer: 168**

**One more:**

Binary: `00000001`

```
Position:  128   64   32   16   8   4   2   1
Binary:     0    0    0    0   0   0   0   1
Values:     0 + 0 + 0  + 0 + 0 + 0 + 0 + 1 = 1
```

**Answer: 1**

---

## Converting Decimal to Binary

Now let's go the other direction - converting a decimal number to binary.

**Method: Subtraction from largest to smallest**

**Example: Convert 192 to binary**

1. Start with the largest power of 2 that fits into 192
2. Does 128 fit into 192? YES → write 1, subtract 128 from 192 = 64 remaining
3. Does 64 fit into 64? YES → write 1, subtract 64 from 64 = 0 remaining
4. Does 32 fit into 0? NO → write 0
5. Does 16 fit into 0? NO → write 0
6. Does 8 fit into 0? NO → write 0
7. Does 4 fit into 0? NO → write 0
8. Does 2 fit into 0? NO → write 0
9. Does 1 fit into 0? NO → write 0

**Result: 11000000**

Let's verify: 128 + 64 = 192 ✅

**Example: Convert 172 to binary**

```
128 fits into 172? YES → 1 (172 - 128 = 44 remaining)
64 fits into 44? NO → 0
32 fits into 44? YES → 1 (44 - 32 = 12 remaining)
16 fits into 12? NO → 0
8 fits into 12? YES → 1 (12 - 8 = 4 remaining)
4 fits into 4? YES → 1 (4 - 4 = 0 remaining)
2 fits into 0? NO → 0
1 fits into 0? NO → 0

Result: 10101100
```

Verify: 128 + 32 + 8 + 4 = 172 ✅

**Example: Convert 255 to binary**

```
128 fits into 255? YES → 1 (255 - 128 = 127 remaining)
64 fits into 127? YES → 1 (127 - 64 = 63 remaining)
32 fits into 63? YES → 1 (63 - 32 = 31 remaining)
16 fits into 31? YES → 1 (31 - 16 = 15 remaining)
8 fits into 15? YES → 1 (15 - 8 = 7 remaining)
4 fits into 7? YES → 1 (7 - 4 = 3 remaining)
2 fits into 3? YES → 1 (3 - 2 = 1 remaining)
1 fits into 1? YES → 1 (1 - 1 = 0 remaining)

Result: 11111111
```

Verify: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255 ✅

**Key Concept:** The maximum value for an 8-bit octet is **255**, which is when all bits are set to 1 (11111111). The minimum is **0**, which is when all bits are 0 (00000000). This is why each octet in an IP address ranges from 0 to 255!

---

## IPv4 Addresses in Binary

Now let's see a complete IPv4 address in both formats:

**Dotted Decimal:** `192.168.1.1`

**Binary:**
```
192     .  168     .  1       .  1
11000000.10101000.00000001.00000001
```

Let's break down each octet:
- **192** = 11000000 (128 + 64)
- **168** = 10101000 (128 + 32 + 8)
- **1** = 00000001 (just 1)
- **1** = 00000001 (just 1)

**Another example:** `10.0.0.1`

```
10      .  0       .  0       .  1
00001010.00000000.00000000.00000001
```

- **10** = 00001010 (8 + 2)
- **0** = 00000000 (nothing)
- **0** = 00000000 (nothing)
- **1** = 00000001 (just 1)

**One more:** `172.16.254.1`

```
172     .  16      .  254     .  1
10101100.00010000.11111110.00000001
```

- **172** = 10101100 (128 + 32 + 8 + 4)
- **16** = 00010000 (just 16)
- **254** = 11111110 (all bits except the last one: 128+64+32+16+8+4+2)
- **1** = 00000001 (just 1)

---

## Binary Conversion Quick Reference

**Common decimal values you should recognize instantly:**

| Decimal | Binary   | How to Calculate |
|---------|----------|------------------|
| 0       | 00000000 | All zeros |
| 1       | 00000001 | Just the 1 bit |
| 128     | 10000000 | Just the 128 bit |
| 192     | 11000000 | 128 + 64 |
| 224     | 11100000 | 128 + 64 + 32 |
| 240     | 11110000 | 128 + 64 + 32 + 16 |
| 248     | 11111000 | 128 + 64 + 32 + 16 + 8 |
| 252     | 11111100 | 128 + 64 + 32 + 16 + 8 + 4 |
| 254     | 11111110 | All except the 1 bit |
| 255     | 11111111 | All bits on |

**Exam Tip:** These specific values (192, 224, 240, 248, 252, 254, 255) are subnet mask octets you'll see constantly! Start recognizing them on sight.

---

## IP Address Classes (Legacy but Exam-Relevant)

When IP addressing was first designed, addresses were divided into **classes** based on the size of networks they supported. While **classful networking is obsolete** today (replaced by CIDR, which we'll cover in Lesson 4), you still need to understand classes for the Network+ exam.

**Why classes matter:**
1. The exam still tests class concepts
2. Classes help you understand IP address ranges
3. Some older equipment still uses classful routing
4. Classes are the foundation for understanding subnetting

---

## The Five IP Address Classes

IPv4 addresses are divided into five classes: **A, B, C, D, and E**.

**Classes A, B, and C** are for standard host addressing.  
**Class D** is for multicast.  
**Class E** is experimental/reserved.

### How to Identify the Class

Look at the **first octet** of the IP address:

| Class | First Octet Range | First Octet Binary Starts With | Default Mask | Purpose |
|-------|-------------------|-------------------------------|--------------|---------|
| A     | 1 - 126           | 0xxxxxxx                      | /8 (255.0.0.0) | Large networks |
| B     | 128 - 191         | 10xxxxxx                      | /16 (255.255.0.0) | Medium networks |
| C     | 192 - 223         | 110xxxxx                      | /24 (255.255.255.0) | Small networks |
| D     | 224 - 239         | 1110xxxx                      | N/A | Multicast |
| E     | 240 - 255         | 1111xxxx                      | N/A | Experimental |

✅ **Key Concept:** The first few bits of an IP address determine its class. This is why understanding binary is essential!

---

## Class A Addresses (1.0.0.0 to 126.255.255.255)

**Characteristics:**
- First octet: **1 to 126**
- First bit is always **0**
- Default subnet mask: **255.0.0.0** (/8)
- Network bits: **8** (first octet)
- Host bits: **24** (last three octets)

**Network/Host Division:**
```
    Network  |      Host      
   N.H.H.H
   10.50.100.25
   
   10 = Network (which Class A network)
   50.100.25 = Host (which device on that network)
```

**Number of Networks:** 126 total Class A networks (1-126)  
**Hosts per Network:** 16,777,214 hosts per network (2²⁴ - 2)

**Why so few networks but so many hosts?**  
Class A dedicates only 8 bits to the network portion, giving just 126 possible networks (actually 128 minus network 0 and 127). But it gives 24 bits to hosts, allowing over 16 million devices per network!

**Who gets Class A addresses?**  
Originally given to large organizations, governments, and universities. Examples:
- **8.0.0.0** - Level 3 Communications
- **15.0.0.0** - Hewlett-Packard
- **16.0.0.0** - Hewlett-Packard (they got two!)
- **20.0.0.0** - Computer Sciences Corporation

**Real-World Example:**

IP Address: **10.5.100.200**
- First octet: 10 → **Class A**
- Network portion: 10
- Host portion: 5.100.200
- This device is host 5.100.200 on the 10.0.0.0 network

---

## Class B Addresses (128.0.0.0 to 191.255.255.255)

**Characteristics:**
- First octet: **128 to 191**
- First two bits are always **10**
- Default subnet mask: **255.255.0.0** (/16)
- Network bits: **16** (first two octets)
- Host bits: **16** (last two octets)

**Network/Host Division:**
```
    Network   |   Host    
   N.N.H.H
   172.16.50.100
   
   172.16 = Network (which Class B network)
   50.100 = Host (which device on that network)
```

**Number of Networks:** 16,384 total Class B networks  
**Hosts per Network:** 65,534 hosts per network (2¹⁶ - 2)

**The "Goldilocks" class:**  
Class B is the middle ground - not too big, not too small. Perfect for medium-sized organizations like universities, hospitals, and mid-sized companies.

**Common Class B networks:**
- **172.16.0.0** - Commonly used private network (we'll discuss this soon!)
- **128.2.0.0** - Carnegie Mellon University
- **130.207.0.0** - Georgia Institute of Technology

**Real-World Example:**

IP Address: **172.16.10.50**
- First octet: 172 → **Class B**
- Network portion: 172.16
- Host portion: 10.50
- This device is host 10.50 on the 172.16.0.0 network

---

## Class C Addresses (192.0.0.0 to 223.255.255.255)

**Characteristics:**
- First octet: **192 to 223**
- First three bits are always **110**
- Default subnet mask: **255.255.255.0** (/24)
- Network bits: **24** (first three octets)
- Host bits: **8** (last octet)

**Network/Host Division:**
```
       Network      | Host
   N.N.N.H
   192.168.1.100
   
   192.168.1 = Network (which Class C network)
   100 = Host (which device on that network)
```

**Number of Networks:** 2,097,152 total Class C networks  
**Hosts per Network:** 254 hosts per network (2⁸ - 2)

**The "small network" class:**  
Class C is designed for small networks - your home network, small offices, individual departments. With only 254 hosts available, you can't have huge networks, but there are millions of possible Class C networks.

**Why so popular?**  
Class C is what most home routers use (192.168.1.x, 192.168.0.x) because:
- Small homes/offices don't need more than 254 devices
- Easy to manage
- Simple to understand

**Real-World Example:**

IP Address: **192.168.1.50**
- First octet: 192 → **Class C**
- Network portion: 192.168.1
- Host portion: 50
- This device is host #50 on the 192.168.1.0 network

---

## Class D Addresses (224.0.0.0 to 239.255.255.255)

**Characteristics:**
- First octet: **224 to 239**
- First four bits are always **1110**
- Purpose: **Multicast**
- No subnet mask (not used for regular host addressing)

**What is multicast?**  
Multicast allows one sender to transmit data to multiple receivers simultaneously. Think of it like a radio broadcast - one transmitter, many receivers.

**Use cases:**
- Video conferencing (one stream, multiple participants)
- IPTV (television over IP)
- Stock market tickers
- Routing protocol updates (OSPF, EIGRP use multicast)

**Common multicast addresses:**
- **224.0.0.5** - All OSPF routers
- **224.0.0.6** - All OSPF Designated Routers
- **224.0.0.9** - All RIPv2 routers
- **239.255.255.250** - UPnP (Universal Plug and Play)

**Exam Tip:** Know that Class D = Multicast. You won't subnet Class D, but you should recognize these addresses on the exam.

---

## Class E Addresses (240.0.0.0 to 255.255.255.255)

**Characteristics:**
- First octet: **240 to 255**
- First four bits are always **1111**
- Purpose: **Experimental / Reserved**
- Not used on the public internet

**Why does Class E exist?**  
Reserved for research and future use. In practice, these addresses are never used in production networks.

**Exam Tip:** Just know that Class E is experimental/reserved. If you see an IP starting with 240+, it's Class E and shouldn't be used.

---

## Quick Class Identification Chart

**Just look at the first octet:**

| First Octet | Class | Typical Use |
|-------------|-------|-------------|
| 1 - 126     | A     | Huge networks (millions of hosts) |
| 128 - 191   | B     | Medium networks (thousands of hosts) |
| 192 - 223   | C     | Small networks (hundreds of hosts) |
| 224 - 239   | D     | Multicast |
| 240 - 255   | E     | Experimental |

---

## Special IP Addresses

Certain IP addresses have special meanings and cannot be assigned to regular hosts.

### 127.0.0.1 - The Loopback Address

**What it is:** The loopback address, also called **localhost**

**What it does:** Always points back to the local machine (your own computer)

**Use cases:**
- Testing network software without a network
- Testing if the TCP/IP stack is installed correctly
- Troubleshooting local services
- Software development (test web servers locally)

**Example:**
```bash
ping 127.0.0.1
```
This pings your own computer. If this fails, your computer's networking stack has serious problems!

**Fun fact:** The entire 127.0.0.0/8 range (127.0.0.1 to 127.255.255.255) is reserved for loopback, but 127.0.0.1 is the standard.

✅ **Key Concept:** Loopback = "ping yourself" = testing your own computer's network functionality

---

### 169.254.0.0/16 - APIPA (Automatic Private IP Addressing)

**What it is:** Link-local addressing, also called **APIPA** (Windows terminology)

**What it does:** Automatically assigned when a device can't get an IP address from DHCP

**Range:** 169.254.0.1 to 169.254.255.254

**When you see this, it means:**
❌ DHCP server is down or unreachable  
❌ No DHCP server is configured  
❌ DHCP server is out of addresses  
❌ Network cable is unplugged  
❌ There's a network connectivity problem

**Real-World Example:**

Your laptop shows IP address **169.254.47.200**. This is a red flag! Your computer tried to get a DHCP address, failed, and gave itself an APIPA address. Devices with APIPA addresses can talk to each other on the same local network, but they **cannot reach the internet**.

**Troubleshooting steps when you see 169.254.x.x:**
1. Check if the cable is plugged in
2. Verify the network adapter is enabled
3. Check if DHCP server is running
4. Try `ipconfig /release` then `ipconfig /renew` (Windows)
5. Restart the DHCP server if you have access
6. Manually configure a static IP if DHCP isn't available

**Exam Tip:** If you see **169.254.x.x** on the exam, it means **DHCP failed**. This is a common troubleshooting scenario!

---

### 0.0.0.0 - Default Route / "Any" Address

**What it is:** Represents "all addresses" or "any address"

**Use cases:**

**1. Default Route in Routing Tables**
```
Destination: 0.0.0.0
Gateway: 192.168.1.1
```
This means: "For any destination I don't have a specific route for, send traffic to 192.168.1.1 (the router)."

**2. DHCP Client**  
Before a device receives an IP address via DHCP, it temporarily uses 0.0.0.0 as its source address.

**3. Server Binding**  
When a server binds to 0.0.0.0, it means "listen on all network interfaces."

**Exam Tip:** 0.0.0.0 = "default route" or "any address" - context matters!

---

## Public vs Private IP Addresses (RFC 1918)

This is **critically important** for real-world networking!

**The IPv4 address exhaustion problem:**  
IPv4 has only 4.3 billion possible addresses (2³²). With billions of devices worldwide, we ran out of unique public IP addresses long ago.

**The solution:** **Private IP addresses** defined in RFC 1918

---

## Private IP Address Ranges (RFC 1918)

These ranges are reserved for **private networks** and are **never routed on the public internet**:

| Class | Private Range | CIDR Notation | Addresses Available |
|-------|---------------|---------------|---------------------|
| A     | 10.0.0.0 - 10.255.255.255 | 10.0.0.0/8 | 16,777,216 |
| B     | 172.16.0.0 - 172.31.255.255 | 172.16.0.0/12 | 1,048,576 |
| C     | 192.168.0.0 - 192.168.255.255 | 192.168.0.0/16 | 65,536 |

**Exam Tip:** **MEMORIZE THESE RANGES!** The exam will test whether you can identify private vs public IPs.

**Memory trick:**  
- **10.x.x.x** - "Ten is for everyone" (most common in large organizations)
- **172.16-31.x.x** - "172 is in between" (medium-sized private networks)
- **192.168.x.x** - "192 is for home" (home routers love this range!)

---

## How Private IP Addresses Work

**Your home network example:**

**Devices on your home network:**
- Router: 192.168.1.1 (private)
- Laptop: 192.168.1.100 (private)
- Phone: 192.168.1.101 (private)
- Smart TV: 192.168.1.102 (private)

**Router's public IP (assigned by ISP):**
- Public IP: 73.225.45.178

**What happens when you browse the internet:**
1. Your laptop (192.168.1.100) sends a request to Google
2. The router uses **NAT (Network Address Translation)** to replace your private IP with its public IP
3. Google sees the request coming from 73.225.45.178 (not 192.168.1.100)
4. Google responds to 73.225.45.178
5. The router receives the response and forwards it back to 192.168.1.100

**Result:** Hundreds of millions of homes can all use 192.168.1.x addresses without conflict because they're isolated in private networks!

**Key Concept:** Private IPs are for internal networks only. NAT (Network Address Translation) allows private IPs to access the internet through a public IP. We'll cover NAT in detail in a later lesson.

---

## Public IP Addresses

**Public IP addresses** are globally unique and routable on the internet.

**Characteristics:**
- Assigned by ISPs (Internet Service Providers)
- Must be unique worldwide
- Can be reached from anywhere on the internet
- Cost money (generally included in ISP service)

**All IP addresses that are NOT private or special are public:**
- ✅ 8.8.8.8 (Google DNS) - PUBLIC
- ✅ 1.1.1.1 (Cloudflare DNS) - PUBLIC
- ✅ 151.101.129.69 (Reddit) - PUBLIC
- ❌ 192.168.1.1 - PRIVATE
- ❌ 10.50.100.25 - PRIVATE
- ❌ 172.16.0.1 - PRIVATE

**Exam Tip:** On the exam, you may need to identify whether an IP is public or private. Check if it falls within the RFC 1918 ranges. If it doesn't, it's public!

---

## Network vs Host Portions

Every IP address has two parts:

1. **Network portion** - Identifies which network the device is on
2. **Host portion** - Identifies the specific device on that network

**Analogy:** Think of a street address like "123 Main Street, Springfield"
- "Main Street, Springfield" = Network portion (which neighborhood)
- "123" = Host portion (which house on that street)

**How do you know where the network portion ends and the host portion begins?**

That's where **subnet masks** come in! We'll cover subnet masks in depth in Lesson 4, but here's a preview:

**Default subnet masks by class:**

**Class A:** 255.0.0.0 (/8)
- Network: First octet
- Host: Last three octets
- Example: **10**.50.100.25 → Network = 10, Host = 50.100.25

**Class B:** 255.255.0.0 (/16)
- Network: First two octets
- Host: Last two octets
- Example: **172.16**.50.100 → Network = 172.16, Host = 50.100

**Class C:** 255.255.255.0 (/24)
- Network: First three octets
- Host: Last octet
- Example: **192.168.1**.100 → Network = 192.168.1, Host = 100

**Visual representation:**

```
Class A: N.H.H.H
Class B: N.N.H.H
Class C: N.N.N.H

Where N = Network, H = Host
```

✅ **Key Concept:** The subnet mask (Lesson 4) determines exactly where the network/host boundary is. For now, just understand that every IP address has both a network and a host portion.

---

## Putting It All Together: IP Address Analysis

Let's analyze some IP addresses using what we've learned:

### Example 1: 10.50.100.200

**Step 1: Identify the class**
- First octet: 10
- Range 1-126 = Class A ✅

**Step 2: Public or private?**
- 10.x.x.x is in the RFC 1918 range (10.0.0.0/8)
- **Private** ✅

**Step 3: Network and host portions (using default Class A mask)**
- Network: 10
- Host: 50.100.200

**Summary:** This is a Class A private IP address on the 10.0.0.0 network, host 50.100.200.

---

### Example 2: 172.16.5.10

**Step 1: Identify the class**
- First octet: 172
- Range 128-191 = Class B ✅

**Step 2: Public or private?**
- 172.16.x.x falls in the RFC 1918 range (172.16.0.0 - 172.31.255.255)
- **Private** ✅

**Step 3: Network and host portions (using default Class B mask)**
- Network: 172.16
- Host: 5.10

**Summary:** This is a Class B private IP address on the 172.16.0.0 network, host 5.10.

---

### Example 3: 8.8.8.8

**Step 1: Identify the class**
- First octet: 8
- Range 1-126 = Class A ✅

**Step 2: Public or private?**
- 8.x.x.x is NOT in any RFC 1918 range
- **Public** ✅

**Step 3: Network and host portions (using default Class A mask)**
- Network: 8
- Host: 8.8.8

**Summary:** This is a Class A public IP address on the 8.0.0.0 network, host 8.8.8. (This is Google's public DNS server!)

---

### Example 4: 192.168.1.1

**Step 1: Identify the class**
- First octet: 192
- Range 192-223 = Class C ✅

**Step 2: Public or private?**
- 192.168.x.x is in the RFC 1918 range (192.168.0.0/16)
- **Private** ✅

**Step 3: Network and host portions (using default Class C mask)**
- Network: 192.168.1
- Host: 1

**Summary:** This is a Class C private IP address on the 192.168.1.0 network, host 1. (Common default gateway for home routers!)

---

### Example 5: 224.5.10.50

**Step 1: Identify the class**
- First octet: 224
- Range 224-239 = Class D ✅

**Step 2: Purpose**
- Class D = **Multicast** ✅
- Not assigned to individual hosts
- Used for one-to-many communication

**Summary:** This is a Class D multicast address. No subnet mask applies.

---

## Key Exam Tips

**Memorize these cold:**
- **Powers of 2:** 128, 64, 32, 16, 8, 4, 2, 1
- **Class A:** 1-126, /8, 255.0.0.0, N.H.H.H
- **Class B:** 128-191, /16, 255.255.0.0, N.N.H.H
- **Class C:** 192-223, /24, 255.255.255.0, N.N.N.H
- **Class D:** 224-239, multicast
- **Private ranges:** 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
- **Special addresses:** 127.0.0.1 (loopback), 169.254.x.x (APIPA), 0.0.0.0 (default route)

**Binary conversion:**
- Practice converting common subnet values (192, 224, 240, 248, 252, 254, 255)
- Know the place values: 128-64-32-16-8-4-2-1
- On the exam, write down the place values immediately!

**Quick identification:**
- Look at first octet to determine class
- Check if it's in RFC 1918 ranges to determine public vs private
- Remember: 169.254.x.x = DHCP failure (APIPA)

**Common mistakes to avoid:**
- Confusing 172.16.0.0/12 with 172.16.0.0/16 (the private range is /12, not /16!)
- Forgetting that 127.x.x.x is ALL loopback (not just 127.0.0.1)
- Thinking 172.15.x.x is private (it's not! Only 172.16-31.x.x is private)
- Assuming all 10.x.x.x addresses are Class A (they are, but in context of subnetting, they can be subnetted into any size)

---

## Key Takeaways

✅ IPv4 addresses are **32-bit** numbers written in **dotted decimal notation** (four octets)

✅ Each octet ranges from **0 to 255** (because 8 bits = 256 values)

✅ **Binary fundamentals** are essential for understanding IP addressing and subnetting

✅ The **powers of 2** (128, 64, 32, 16, 8, 4, 2, 1) are the foundation of binary conversion

✅ IP addresses are divided into **classes A, B, C, D, E** based on the first octet

✅ **Class A:** 1-126, /8 default mask, huge networks (millions of hosts)

✅ **Class B:** 128-191, /16 default mask, medium networks (thousands of hosts)

✅ **Class C:** 192-223, /24 default mask, small networks (hundreds of hosts)

✅ **Class D:** 224-239, multicast (one-to-many communication)

✅ **Class E:** 240-255, experimental/reserved (not used)

✅ **Private IP ranges** (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16

✅ **Private IPs** cannot be routed on the internet; **NAT** translates them to public IPs

✅ **Public IPs** are globally unique and routable on the internet

✅ **Special addresses:** 127.0.0.1 (loopback), 169.254.x.x (APIPA/link-local), 0.0.0.0 (default route)

✅ Every IP address has a **network portion** and a **host portion** (defined by subnet mask)

✅ **APIPA (169.254.x.x)** indicates DHCP failure - major troubleshooting clue!

---

## Check Your Understanding

**1. Convert the binary number 11000000 to decimal.**

<details>
<summary>Show Answer</summary>
<strong>192.</strong> Breaking it down using place values: 128 (1) + 64 (1) + 32 (0) + 16 (0) + 8 (0) + 4 (0) + 2 (0) + 1 (0) = 128 + 64 = 192. The two leftmost bits are set to 1, giving us 192.
</details>

**2. What class is the IP address 172.16.50.100?**

<details>
<summary>Show Answer</summary>
<strong>Class B.</strong> The first octet is 172, which falls in the range 128-191. Class B addresses use a default /16 subnet mask (255.255.0.0), meaning the first two octets (172.16) represent the network portion and the last two octets (50.100) represent the host portion.
</details>

**3. Is 192.168.5.10 a public or private IP address?**

<details>
<summary>Show Answer</summary>
<strong>Private.</strong> This address falls within the RFC 1918 private range of 192.168.0.0 - 192.168.255.255 (192.168.0.0/16). Private IP addresses are not routable on the public internet and are used for internal networks. Your home router almost certainly uses the 192.168.x.x range!
</details>

**4. Your computer shows an IP address of 169.254.45.200. What does this indicate?**

<details>
<summary>Show Answer</summary>
<strong>DHCP failure.</strong> The address 169.254.45.200 is an APIPA (Automatic Private IP Addressing) or link-local address. Windows automatically assigns itself an address in this range when it cannot obtain an IP address from a DHCP server. This indicates a problem: either the DHCP server is down, unreachable, out of addresses, or the network cable is unplugged. Troubleshooting should start with checking physical connectivity and then verifying the DHCP server is functioning.
</details>

**5. How many usable host addresses are available in a default Class C network?**

<details>
<summary>Show Answer</summary>
<strong>254 usable host addresses.</strong> A Class C network has 8 host bits (the last octet), which gives 2⁸ = 256 total addresses. However, we subtract 2 because the first address (all host bits = 0) is the network address and the last address (all host bits = 1) is the broadcast address. Neither can be assigned to hosts. So 256 - 2 = 254 usable addresses.
</details>

**6. What is the purpose of the loopback address 127.0.0.1?**

<details>
<summary>Show Answer</summary>
<strong>Testing the local TCP/IP stack.</strong> The loopback address (127.0.0.1, also called "localhost") always refers to the local computer itself. When you ping 127.0.0.1, you're testing whether your computer's networking software is installed and functioning correctly. If you can't ping 127.0.0.1, there's a serious problem with your computer's TCP/IP installation. It's also used by developers to test network applications locally without needing an actual network.
</details>

**7. Which private IP range provides the most addresses?**

<details>
<summary>Show Answer</summary>
<strong>10.0.0.0/8.</strong> This Class A private range provides 16,777,216 addresses (all of 10.x.x.x). The other private ranges are: 172.16.0.0/12 with 1,048,576 addresses (172.16.0.0 - 172.31.255.255) and 192.168.0.0/16 with 65,536 addresses (192.168.0.0 - 192.168.255.255). Large organizations typically use the 10.0.0.0/8 range for their internal networks because it offers the most flexibility.
</details>

**8. Convert the decimal number 240 to binary.**

<details>
<summary>Show Answer</summary>
<strong>11110000.</strong> Using the subtraction method: 240 - 128 = 112 (bit 128 = 1), 112 - 64 = 48 (bit 64 = 1), 48 - 32 = 16 (bit 32 = 1), 16 - 16 = 0 (bit 16 = 1), all remaining bits = 0. So we get: 11110000. Verify: 128 + 64 + 32 + 16 = 240 ✓. Note: 240 is a common subnet mask octet you'll see frequently!
</details>

---

## Before Moving to Lesson 4

Make sure you can confidently:

- [ ] **Convert between binary and decimal** for any number 0-255
- [ ] **Recite the powers of 2** (128, 64, 32, 16, 8, 4, 2, 1) instantly
- [ ] **Identify IP address classes** by looking at the first octet
- [ ] **List all three private IP ranges** from memory
- [ ] **Recognize special addresses** (127.0.0.1, 169.254.x.x, 0.0.0.0)
- [ ] **Distinguish public from private** IP addresses
- [ ] **Explain the network and host portions** for each class
- [ ] **Understand why binary matters** for networking

**Study Strategy:**

**Today:**
- Practice binary conversion with random numbers
- Create flashcards for IP address classes
- Write out the private IP ranges 10 times from memory
- Quiz yourself on identifying public vs private IPs

**Tomorrow (Day 4):**
- Review binary conversion (5-10 minutes)
- Practice more conversions (especially 192, 224, 240, 248, 252, 254, 255)
- Prepare for subnet masks and CIDR notation (Lesson 4)
- Test yourself on all special addresses

**Day 5:**
- Continue Lesson 4 (Subnet Masks and CIDR)
- Keep practicing binary - it gets easier!
- Begin connecting binary to subnet masks

💡 **Pro Tip:** Binary conversion feels hard at first, but after 20-30 practice problems, it becomes second nature. Don't skip the practice! Subnetting (Lessons 5-6) is impossible without solid binary skills.

---

## Coming Up in Lesson 4: Subnet Masks and CIDR Notation

You've learned **WHAT** IP addresses are and how they're structured.

**Next, you'll learn HOW we divide IP addresses** into networks using:

- Subnet masks (dotted decimal format like 255.255.255.0)
- CIDR notation (slash notation like /24)
- The relationship between subnet masks and binary
- How to calculate the number of usable hosts
- Network addresses vs broadcast addresses
- Converting between CIDR and dotted decimal formats

**The connection:**

IP addresses are meaningless without subnet masks! The subnet mask is what tells computers where the network portion ends and the host portion begins. In Lesson 3, we used the default classful masks. In Lesson 4, you'll learn that subnet masks can be ANY length, giving us tremendous flexibility in network design.

**See you in Lesson 4!** 🎉

---

*"Binary is the foundation. Master it, and everything else becomes clear."*

---

# ✅ LESSON 3 COMPLETE!

**What You Just Learned:**
- ✅ IPv4 address structure (32-bit, four octets, dotted decimal)
- ✅ Binary fundamentals and conversion methods
- ✅ Powers of 2 (128, 64, 32, 16, 8, 4, 2, 1)
- ✅ Five IP address classes (A, B, C, D, E)
- ✅ How to identify class by first octet
- ✅ Private IP ranges (RFC 1918): 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
- ✅ Public vs private IP addressing
- ✅ Special addresses (loopback, APIPA, default route)
- ✅ Network and host portions concept

**You're now 10% of the way to Network+ certification!** (3 of 30 lessons complete)

**Keep building your foundation - subnetting starts next!** 🚀