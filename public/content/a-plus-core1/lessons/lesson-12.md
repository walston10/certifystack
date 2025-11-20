# Lesson 12: TCP/IP Addressing and Subnetting

**Estimated Time:** 30-35 minutes  
**Domain:** 2.0 Networking (20% of exam)  
**Exam Objectives Covered:** 2.6 - Compare and contrast common network configuration concepts

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain IPv4 address structure and identify valid IP addresses
- Distinguish between public and private IP address ranges
- Recognize special-purpose IP addresses (loopback, APIPA, link-local)
- Interpret subnet masks and CIDR notation
- Understand the relationship between IP addresses and default gateways
- Differentiate between static IP configuration and DHCP
- Describe IPv6 address format and basic address types

---

## Video Resources

- [Professor Messer - IP Addressing](https://www.youtube.com/watch?v=tcae4TSSMo8) (10 min)
- [PowerCert - IP Addresses Explained](https://www.youtube.com/watch?v=5WfiTHiU4x8) (9 min)
- [NetworkChuck - Subnetting Made Easy](https://www.youtube.com/watch?v=ecCuyq-Wprc) (17 min)
- [Sunny Classroom - IPv4 vs IPv6](https://www.youtube.com/watch?v=ThdO9beHhpA) (8 min)

---

## Introduction

You've just moved into a massive apartment building with 1,000 units. It's your first day, and you're expecting furniture delivery. The moving truck pulls up, and the driver looks at his clipboard: "Delivery for Taylor Martinez."

That's you! But here's the problem—the driver needs to know exactly which apartment is yours. The building manager didn't assign apartment numbers. Everyone just has doors. The driver stands there, staring at 1,000 identical doors spread across 20 floors.

This is chaos.

Now imagine a different scenario. You live at Apartment 3B on the third floor. The driver arrives, checks the directory, takes the elevator to floor 3, walks down the hallway, and delivers straight to 3B. Clean. Efficient. No confusion.

**This is what IP addresses do for computer networks.** Without them, data would have no idea where to go. Your computer, printer, phone, smart TV—every device on a network needs a unique identifier. That identifier is its IP address, and understanding how they work is fundamental to everything in IT.

In this lesson, we're diving into TCP/IP addressing—the addressing system that runs the internet and every network you'll ever touch. We'll cover IPv4 addresses (the ones you see most often), subnet masks (which determine what's "local" versus "remote"), special addresses you need to recognize, and a brief intro to IPv6 (the future of networking). By the end, you'll understand how devices find each other in the digital world.

---

## The Anatomy of an IPv4 Address

Let's start with the basics. An **IPv4 address** is a 32-bit number that identifies a device on a network. It's written in **dotted decimal notation**, which looks like this:

```
192.168.1.100
```

That single address is actually four numbers (called **octets**) separated by dots. Each octet represents 8 bits and can range from 0 to 255. Why 255? Because with 8 bits, you have 2^8 = 256 possible values (0 through 255).

Think of an IP address like a mailing address. Your street number identifies your specific house. Your street name identifies your block. Your city identifies your region. Together, they form a complete address that uniquely identifies your location. IP addresses work the same way—they have a **network portion** (which street/neighborhood) and a **host portion** (which specific house).

Here's a visual breakdown:

```
192.168.1.100
 │   │  │  │
 └───┴──┴──┴──── Four octets, each between 0-255
```

When your router looks at this address, it splits it into two parts:
- **Network portion**: 192.168.1 (identifies which network)
- **Host portion**: 100 (identifies which specific device)

The router uses this information to decide whether data should stay local or be sent elsewhere. But how does the router know where to split the address? That's where **subnet masks** come in, which we'll cover shortly.

---

## IP Address Classes (Legacy but Still on the Exam)

Back in the early days of the internet, IP addresses were divided into classes based on their first octet. While this system is outdated (we now use CIDR, which we'll discuss), CompTIA still tests on it because you'll see references to "Class A," "Class B," and "Class C" networks in older documentation.

Here's how it worked:

| Class | First Octet Range | Default Subnet Mask | Network/Host Split | Example |
|-------|-------------------|---------------------|-------------------|---------|
| A | 1-126 | 255.0.0.0 (/8) | N.H.H.H | 10.200.50.1 |
| B | 128-191 | 255.255.0.0 (/16) | N.N.H.H | 172.16.100.50 |
| C | 192-223 | 255.255.255.0 (/24) | N.N.N.H | 192.168.1.100 |
| D | 224-239 | (Multicast) | (Special use) | 224.0.0.1 |
| E | 240-255 | (Experimental) | (Reserved) | 255.255.255.255 |

**Class A** networks (1-126) were designed for huge organizations. The first octet is the network, and the remaining three octets are for hosts—giving each Class A network 16 million+ possible devices.

**Class B** networks (128-191) were for medium-sized organizations. The first two octets are the network, leaving two octets for hosts—about 65,000 devices per network.

**Class C** networks (192-223) were for small networks. The first three octets are the network, leaving one octet for hosts—254 usable devices (we'll explain why it's 254, not 256, in a moment).

**Class D** (224-239) is reserved for **multicast** traffic—one-to-many communication like streaming video to multiple devices.

**Class E** (240-255) is experimental and not used in production networks.

🎯 **Exam Tip:** Know the class ranges. If you see 172.16.x.x, recognize it as Class B. If you see 192.168.x.x, it's Class C. This helps you quickly identify network types during troubleshooting scenarios.

---

## Public vs Private IP Addresses

Not all IP addresses are created equal. Some are **public** (routable on the internet), and others are **private** (only usable within local networks).

**Public IP addresses** are globally unique. Think of them like phone numbers—no two devices on the internet can have the same public IP. Your home router has a public IP assigned by your ISP, and that's how the outside world reaches you.

**Private IP addresses**, on the other hand, are reserved for internal networks. They're defined in **RFC 1918** and include three ranges:

| Range | Class | Usable Addresses |
|-------|-------|-----------------|
| 10.0.0.0 to 10.255.255.255 | Class A | 16,777,216 |
| 172.16.0.0 to 172.31.255.255 | Class B | 1,048,576 |
| 192.168.0.0 to 192.168.255.255 | Class C | 65,536 |

These addresses can't be routed on the internet. Your home network might use 192.168.1.x, and so might your neighbor's—because they're private, it doesn't matter. Your router uses **NAT (Network Address Translation)** to translate your private IP (192.168.1.100) to your public IP (like 73.50.200.10) when you access the internet.

Think of it like calling a large company. From the outside, everyone dials the same main number (the public IP). Inside the building, employees have extension numbers (private IPs). The receptionist (the router) forwards calls to the right extension. No one outside the building needs to know extension numbers—just the main line.

🎯 **Exam Tip:** Memorize the three private IP ranges. If you see 10.0.0.1 or 192.168.1.1 on the exam, immediately recognize it as private. If you see 8.8.8.8 or 73.50.200.10, it's public.

---

## Special-Purpose IP Addresses

Certain IP addresses have special meanings and aren't used for regular host addressing. Let's cover the ones you need to know for the A+ exam.

### Loopback (127.0.0.1)

The **loopback address** (127.0.0.1) is a special address that always refers to "this device." When you ping 127.0.0.1, you're testing whether your computer's network stack is functioning—without sending any data over the network.

Think of it like talking to yourself to make sure your voice works. You're not calling anyone else; you're just verifying your internal systems are operational.

```
C:\> ping 127.0.0.1

Pinging 127.0.0.1 with 32 bytes of data:
Reply from 127.0.0.1: bytes=32 time<1ms TTL=128
```

If this fails, you have a serious problem with your network adapter or drivers—because this test never leaves your computer.

### APIPA (169.254.0.0/16)

**APIPA** stands for **Automatic Private IP Addressing**. If your computer is configured for DHCP but can't reach a DHCP server, Windows automatically assigns itself an IP in the range **169.254.0.1 to 169.254.255.254**.

This is a fallback mechanism. It means, "I can't get an IP from DHCP, but I'll give myself something so I can at least talk to other devices on this local segment who are also using APIPA."

Here's the catch: **APIPA addresses can't access the internet.** They're link-local only. If you open Command Prompt and see your IP is 169.254.x.x, you know immediately that DHCP failed.

**Common causes:**
- DHCP server is down
- DHCP scope is exhausted (no more IPs available)
- Network cable is unplugged
- Wi-Fi isn't connected

🎯 **Exam Tip:** If a user complains they can't access the internet and you see 169.254.x.x, you know the problem is DHCP-related. Check the network connection first, then investigate the DHCP server.

### Default Route (0.0.0.0)

The address **0.0.0.0** represents "all addresses" or "any address." In routing tables, it's used as the **default route**—the catch-all destination for traffic that doesn't match any other route.

When you configure a default gateway (like 192.168.1.1), you're essentially saying, "If I don't know where this traffic goes, send it here."

### Broadcast (255.255.255.255)

The address **255.255.255.255** is the **limited broadcast address**. Traffic sent to this address goes to all devices on the local network segment—but doesn't cross routers.

Think of it like shouting in a crowded room. Everyone in the room hears you, but people in other rooms don't. DHCP uses broadcast messages during the discovery phase because a client doesn't yet have an IP address to use for directed communication.

---

## Subnet Masks: Defining the Neighborhood

A **subnet mask** is what tells a device which part of an IP address is the network portion and which part is the host portion. Without a subnet mask, your computer wouldn't know whether 192.168.1.50 is on the same local network or if it needs to send traffic to the router.

Let's use an analogy. Imagine you live in a neighborhood with 200 houses, and you're sending a letter to house #50. You need to know:
- Is house #50 in my neighborhood? (I'll walk it over.)
- Is house #50 in a different neighborhood? (I'll mail it via the post office.)

The subnet mask answers this question.

### How Subnet Masks Work

A subnet mask is also a 32-bit number written in dotted decimal notation:

```
255.255.255.0
```

The 255s represent the **network portion**. The 0s represent the **host portion**. Here's how devices use it:

1. Your computer has IP **192.168.1.100** and subnet mask **255.255.255.0**.
2. You want to send data to **192.168.1.50**.
3. Your computer performs a **bitwise AND operation** between the IP and subnet mask to determine the network address.
4. It does the same for the destination IP.
5. If the network addresses match, the destination is local—send it directly via the switch.
6. If they don't match, the destination is remote—send it to the default gateway (router).

Let's see this in action:

**Your IP:** 192.168.1.100  
**Subnet Mask:** 255.255.255.0  
**Network Address:** 192.168.1.0 (everything matches in the first three octets)

**Destination IP:** 192.168.1.50  
**Subnet Mask:** 255.255.255.0  
**Network Address:** 192.168.1.0 (same network!)

Since both have the network address 192.168.1.0, your computer says, "This is local. I'll send it directly to the switch." But if you were sending to 192.168.**2**.50, the network addresses wouldn't match, so your computer would forward it to the router.

### Common Subnet Masks

Here are the most common subnet masks you'll see:

| Subnet Mask | CIDR Notation | Network Bits | Host Bits | Usable Hosts |
|-------------|---------------|--------------|-----------|--------------|
| 255.0.0.0 | /8 | 8 | 24 | 16,777,214 |
| 255.255.0.0 | /16 | 16 | 16 | 65,534 |
| 255.255.255.0 | /24 | 24 | 8 | 254 |
| 255.255.255.128 | /25 | 25 | 7 | 126 |
| 255.255.255.192 | /26 | 26 | 6 | 62 |
| 255.255.255.224 | /27 | 27 | 5 | 30 |
| 255.255.255.240 | /28 | 28 | 4 | 14 |
| 255.255.255.248 | /29 | 29 | 3 | 6 |
| 255.255.255.252 | /30 | 30 | 2 | 2 |

### CIDR Notation

**CIDR (Classless Inter-Domain Routing)** notation is a shorthand way to write subnet masks. Instead of writing 255.255.255.0, you write **/24**.

The number after the slash tells you how many bits are used for the network portion:
- **/24** = 24 network bits, 8 host bits = 255.255.255.0
- **/16** = 16 network bits, 16 host bits = 255.255.0.0
- **/8** = 8 network bits, 24 host bits = 255.0.0.0

So when you see **192.168.1.0/24**, you know:
- Network address: 192.168.1.0
- Subnet mask: 255.255.255.0
- Usable IPs: 192.168.1.1 to 192.168.1.254

🎯 **Exam Tip:** Know how to convert between dotted decimal and CIDR notation. /24 = 255.255.255.0, /16 = 255.255.0.0, /8 = 255.0.0.0. These three are the most common and must be memorized.

---

## Default Gateway: Your Network's Exit Door

The **default gateway** is the IP address of the router that connects your local network to other networks (including the internet). When your computer needs to send data outside your local subnet, it forwards that traffic to the default gateway.

Think of the default gateway as the front door of your apartment building. If you want to visit someone in your building, you walk down the hallway. But if you want to visit someone across town, you have to leave through the front door and get on a bus (the router).

**Example:**

Your computer: 192.168.1.100  
Default gateway: 192.168.1.1

When you visit google.com (IP: 8.8.8.8), your computer recognizes that 8.8.8.8 isn't on the 192.168.1.x network, so it sends the packet to 192.168.1.1 (the router). The router then forwards it out to the internet.

Without a default gateway configured, your computer can only communicate with devices on the same local subnet. You'd be stuck in the apartment building with no way out.

---

## DHCP vs Static IP Configuration

There are two ways to assign IP addresses to devices: **DHCP** (automatic) and **static** (manual).

### DHCP (Dynamic Host Configuration Protocol)

With **DHCP**, a server automatically assigns IP addresses to devices when they connect to the network. This is what most home networks and corporate networks use. When your laptop connects to Wi-Fi, it sends a DHCP request, and the router (or DHCP server) responds:

- "Here's your IP: 192.168.1.105"
- "Here's your subnet mask: 255.255.255.0"
- "Here's your default gateway: 192.168.1.1"
- "Here's your DNS server: 8.8.8.8"

The device uses these settings for a **lease period** (commonly 24 hours). When the lease expires, the device requests a renewal.

**Advantages of DHCP:**
- No manual configuration needed
- Reduces IP address conflicts
- Centralized management
- Easy to reconfigure the entire network

### Static IP Configuration

With **static IP**, you manually assign the IP address, subnet mask, default gateway, and DNS servers. This is used for devices that need consistent addresses—like servers, printers, and network equipment.

If your file server changes IPs every day, users wouldn't be able to find it. So you give it a static IP like 192.168.1.10, and everyone knows where to reach it.

**When to use static IPs:**
- Servers (file, print, web, DNS, DHCP)
- Network devices (routers, switches, access points)
- Printers
- Security cameras and IoT devices

🎯 **Exam Tip:** If a question describes a device that needs a permanent, unchanging IP, the answer is static configuration. If it mentions automatic assignment for many devices, the answer is DHCP.

---

## IPv6: A Brief Introduction

**IPv6** was created because we're running out of IPv4 addresses. IPv4 gives us about 4.3 billion possible addresses, which sounds like a lot—until you realize there are more internet-connected devices than that (phones, tablets, IoT devices, smart refrigerators, etc.).

IPv6 uses **128-bit addresses** instead of 32-bit, which provides an absurdly large address space—340 undecillion addresses. That's 340 trillion trillion trillion. We won't run out.

### IPv6 Address Format

IPv6 addresses are written in **hexadecimal**, separated by colons:

```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

Each section is a **hextet** (16 bits). To simplify, you can:
1. Remove leading zeros: `2001:db8:85a3:0:0:8a2e:370:7334`
2. Compress consecutive zeros with `::`: `2001:db8:85a3::8a2e:370:7334`

### IPv6 Address Types

- **Unicast**: One device to one device (like IPv4)
- **Multicast**: One device to many devices
- **Anycast**: One device to the nearest of several devices
- **Link-local**: Addresses starting with `fe80::` (similar to APIPA in IPv4, used for local communication)

### IPv6 Prefix Notation

Instead of subnet masks, IPv6 uses **prefix length notation**:

```
2001:db8:85a3::/64
```

The `/64` means the first 64 bits are the network portion, and the remaining 64 bits are for hosts.

🎯 **Exam Tip:** For the A+ exam, you don't need deep IPv6 knowledge. Just recognize what an IPv6 address looks like (colons, hexadecimal), know that `fe80::` is link-local, and understand that `/64` is a common prefix length.

---

## Putting It All Together: A Troubleshooting Scenario

Let's walk through a real-world scenario where understanding IP addressing saves the day.

**The Problem:**  
A user calls the help desk. "I can't access the internet, but I can print to the local printer."

**Your Investigation:**

1. You open Command Prompt and run `ipconfig`:

```
Ethernet adapter Local Area Connection:
   IPv4 Address: 169.254.10.50
   Subnet Mask: 255.255.0.0
   Default Gateway:
```

**What you see:**
- The IP is 169.254.x.x (APIPA—DHCP failed)
- No default gateway is configured

**What this tells you:**  
The computer couldn't reach the DHCP server, so Windows assigned itself an APIPA address. The user can print locally because the printer is probably also using APIPA and is on the same link-local segment. But without a default gateway, there's no way to reach the internet.

**Possible causes:**
- Network cable unplugged or faulty
- DHCP server is down
- DHCP scope is exhausted
- Switch port is disabled

**Next steps:**  
Check the physical connection. If the cable is plugged in and link lights are on, check the DHCP server status. If the DHCP server is functioning, check for available addresses in the scope.

Understanding IP addressing let you diagnose the problem in seconds. Without it, you'd be guessing.

---

## Key Exam Tips

🎯 **Memorize private IP ranges:**  
- 10.0.0.0 to 10.255.255.255 (/8)
- 172.16.0.0 to 172.31.255.255 (/12)
- 192.168.0.0 to 192.168.255.255 (/16)

🎯 **Recognize APIPA immediately:** If you see 169.254.x.x, you know DHCP failed.

🎯 **Know common subnet masks:**  
- /24 = 255.255.255.0
- /16 = 255.255.0.0
- /8 = 255.0.0.0

🎯 **Understand the default gateway's purpose:** It's the exit point to other networks. No gateway = no internet.

🎯 **DHCP vs Static:** DHCP = automatic, used for most devices. Static = manual, used for servers and network equipment.

🎯 **IPv6 recognition:** Colons, hexadecimal, and `fe80::` (link-local).

---

## Key Takeaways

- [ ] IPv4 addresses are 32-bit numbers written in dotted decimal notation (e.g., 192.168.1.100)
- [ ] Each octet can range from 0 to 255, representing 8 bits
- [ ] Private IP ranges (10.x.x.x, 172.16-31.x.x, 192.168.x.x) are not routable on the internet
- [ ] Public IP addresses are globally unique and assigned by ISPs
- [ ] Loopback (127.0.0.1) is used to test local network functionality
- [ ] APIPA (169.254.x.x) indicates DHCP failure—device can't access the internet
- [ ] Subnet masks determine which part of an IP is network and which is host
- [ ] CIDR notation (/24, /16, /8) is shorthand for subnet masks
- [ ] Default gateway is the router that forwards traffic to other networks
- [ ] DHCP automatically assigns IP addresses; static IPs are manually configured
- [ ] DHCP is used for most devices; static is used for servers and network equipment
- [ ] IPv6 uses 128-bit addresses written in hexadecimal with colons
- [ ] Link-local IPv6 addresses start with fe80::
- [ ] Understanding IP addressing is essential for network troubleshooting

---

## Check Your Understanding

**1. A user's computer has the IP address 169.254.100.50. What does this indicate?**

<details>
<summary>Show Answer</summary>
<strong>The computer couldn't obtain an IP from DHCP and assigned itself an APIPA address.</strong> Addresses in the 169.254.0.0/16 range are automatically assigned by the operating system when DHCP fails. This is a fallback mechanism that allows limited local communication but doesn't provide internet access. Common causes include DHCP server being down, network cable unplugged, or DHCP scope exhausted. To fix this, check the network connection first, then verify the DHCP server is functioning and has available addresses.
</details>

**2. Which of the following IP addresses is a private address that cannot be routed on the internet?**
A) 8.8.8.8  
B) 172.16.50.100  
C) 73.50.200.10  
D) 224.0.0.1

<details>
<summary>Show Answer</summary>
<strong>B) 172.16.50.100</strong> falls within the private IP range 172.16.0.0 to 172.31.255.255 defined in RFC 1918. Private addresses are used for internal networks and are translated to public IPs by routers using NAT. Option A (8.8.8.8) is Google's public DNS server. Option C is a public IP. Option D is a Class D multicast address, not a private address. The three private ranges you must memorize are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16.
</details>

**3. A computer with IP 192.168.1.50 and subnet mask 255.255.255.0 needs to communicate with 192.168.1.75. Will it send the traffic directly to the destination or through the default gateway?**

<details>
<summary>Show Answer</summary>
<strong>It will send traffic directly to the destination.</strong> Both IPs are on the same subnet (192.168.1.0/24). The computer performs a logical AND operation with the subnet mask and determines that both addresses share the same network portion (192.168.1). Traffic destined for devices on the same local network is sent directly via the switch, not through the router. Only traffic destined for different networks (like 192.168.2.x or the internet) is forwarded to the default gateway.
</details>

**4. What is the purpose of a default gateway?**

<details>
<summary>Show Answer</summary>
<strong>The default gateway is the router's IP address that forwards traffic to other networks.</strong> When a device needs to communicate with a destination outside its local subnet, it sends the traffic to the default gateway, which then routes it appropriately. Without a configured default gateway, a device can only communicate with other devices on the same local network—it has no way to reach the internet or other subnets. Think of it as the "exit door" from your local network.
</details>

**5. What does the /24 in 192.168.1.0/24 represent?**

<details>
<summary>Show Answer</summary>
<strong>The /24 indicates that the first 24 bits are used for the network portion.</strong> This is CIDR notation, which is shorthand for the subnet mask. /24 equals 255.255.255.0—meaning three full octets (24 bits) define the network, leaving 8 bits for host addresses. This provides 254 usable host IPs (192.168.1.1 to 192.168.1.254). CIDR notation is more efficient than writing out full subnet masks and is the standard in modern networking documentation.
</details>

**6. Which of the following is a valid IPv6 address?**
A) 192.168.1.1  
B) 255.255.255.0  
C) fe80::1  
D) 169.254.0.1

<details>
<summary>Show Answer</summary>
<strong>C) fe80::1</strong> is a valid IPv6 address. IPv6 addresses use hexadecimal notation separated by colons, and fe80:: indicates a link-local address (similar to APIPA in IPv4). The :: notation compresses consecutive zeros. Option A is an IPv4 address, Option B is an IPv4 subnet mask, and Option D is an APIPA address (IPv4). IPv6 addresses are 128-bit compared to IPv4's 32-bit, providing vastly more address space.
</details>

**7. A server needs to always be reachable at the same IP address. Should it use DHCP or static IP configuration?**

<details>
<summary>Show Answer</summary>
<strong>It should use static IP configuration.</strong> Servers, printers, and network devices need consistent IP addresses so users and other systems can reliably reach them. If a server's IP changed daily (as with DHCP), users wouldn't be able to connect. Static configuration means manually assigning the IP address, subnet mask, default gateway, and DNS servers. DHCP is appropriate for end-user devices like laptops and phones that don't require permanent addresses, but servers need stability.
</details>

**8. What is the loopback address used for?**

<details>
<summary>Show Answer</summary>
<strong>127.0.0.1 is used to test whether the local network stack is functioning properly.</strong> When you ping the loopback address, traffic never leaves your computer—it's a self-test of your network adapter and TCP/IP stack. If pinging 127.0.0.1 fails, you have a serious problem with your network driver or configuration. It's the first step in network troubleshooting: verify your own system works before testing external connectivity. Think of it as talking to yourself to make sure your voice works.
</details>

**9. A user can access other devices on the local network but can't reach the internet. Their IP configuration shows: IP: 192.168.1.100, Subnet: 255.255.255.0, Gateway: (blank). What's the problem?**

<details>
<summary>Show Answer</summary>
<strong>The default gateway is not configured.</strong> Without a default gateway, the computer has no way to send traffic outside the local subnet. Local communication works because devices on the 192.168.1.x network can reach each other directly through the switch, but internet-bound traffic has no exit point. The default gateway should be configured to the router's IP (typically 192.168.1.1). This could be caused by incorrect static IP configuration or a DHCP server that's not providing gateway information.
</details>

**10. Why do we subtract 2 when calculating usable host addresses in a subnet?**

<details>
<summary>Show Answer</summary>
<strong>We subtract 2 because the network address and broadcast address cannot be assigned to hosts.</strong> For example, in the 192.168.1.0/24 network, 192.168.1.0 is the network address (identifies the network itself) and 192.168.1.255 is the broadcast address (used to send traffic to all devices on the network). Neither can be assigned to individual devices. That leaves 192.168.1.1 through 192.168.1.254 as usable host addresses—254 total. This rule applies to all subnets.
</details>

---

## Before Moving to Lesson 13

Make sure you can:

- [ ] Identify private IP addresses by range
- [ ] Recognize APIPA (169.254.x.x) and understand what it means
- [ ] Convert between CIDR notation and dotted decimal subnet masks (/24, /16, /8)
- [ ] Explain the purpose of the default gateway
- [ ] Differentiate between DHCP and static IP configuration
- [ ] Identify IPv6 addresses by their hexadecimal format

**Study strategy:** Practice identifying IP addresses. Open Command Prompt and run `ipconfig` on your computer. Look at your IP, subnet mask, and default gateway. Try pinging your default gateway and the loopback address (127.0.0.1). Understanding IP addressing is foundational—every network troubleshooting scenario starts here.

---

## Coming Up in Lesson 13

Next, we're diving into **Common Network Protocols and Ports**. You've learned how IP addresses identify devices—now you'll learn how **ports** identify specific services running on those devices. Want to connect to a web server? Port 80. SSH into a router? Port 22. Send an email? Port 25.

You'll need to memorize key port numbers (don't worry, we'll make it easier), understand TCP vs UDP, and learn the difference between secure and insecure protocols. This is critical exam material—and practical knowledge you'll use daily in IT.

See you in Lesson 13!

---

*"The internet is not a big truck. It's a series of tubes."* — Senator Ted Stevens (in a famously confused explanation of the internet—thankfully, you now understand it better!)

---

# ✅ LESSON 12 COMPLETE!

**Progress:** 12 of 60 lessons complete (20.0%) 🎯

You've mastered the fundamentals of IP addressing—the foundation of all networking. You can now identify valid IPs, recognize private vs public addresses, spot DHCP failures, and understand how subnet masks and default gateways work. This knowledge is critical for everything that follows. Nice work!
