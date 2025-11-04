# Lesson 5: Subnetting Fundamentals

**Estimated Time:** 30-35 minutes  
**Domain:** Networking Concepts  
**Exam Objectives Covered:** 1.4 - Given a scenario, configure a subnet and use appropriate IP addressing schemes (Part 3)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Explain why organizations subnet their networks
- Apply the "Magic Number" method to subnet networks efficiently
- Calculate subnet boundaries (network, first host, last host, broadcast)
- Subnet a /24 network into equal-sized subnets
- Determine valid host ranges for each subnet
- Identify which subnet an IP address belongs to
- Apply subnetting concepts to real-world network design scenarios

---

## Video Resources

**Watch:** [Subnetting Mastery - Professor Messer](https://www.youtube.com/watch?v=BWZ-MHIhqjM)  
**Visual Guide:** [Subnetting Step by Step - PowerCert](https://www.youtube.com/watch?v=EkNq4TrHP_U)  
**Practice:** [7 Second Subnetting - NetworkChuck](https://www.youtube.com/watch?v=ZxAwQB8TZsM)  
**Deep Dive:** [Complete Subnetting Tutorial - Sunny Classroom](https://www.youtube.com/watch?v=BWZ-MHIhqjM)

---

## Before We Start: One Last Pep Talk

You made it through Lesson 4. You understand what subnet masks are, you can convert between CIDR and dotted decimal, and you know the formula for calculating usable hosts. That's the hard conceptual part.

Now we're going to *do* subnetting. We're going to take networks and chop them into pieces. And here's the thing - this is where most students either have their "aha!" moment or decide to just memorize some shortcuts and move on. Both are valid strategies.

The method I'm going to teach you (the "Magic Number" method) is the most practical approach for both the exam and real-world networking. Some instructors teach binary shortcuts. Some teach charts. I'm teaching you a method that works quickly, makes sense, and doesn't require perfect binary manipulation.

If this lesson feels difficult, remember: you don't need to be a subnetting savant to pass Network+ or to be a good network administrator. You need to understand the *why*, recognize patterns, and know how to solve common scenarios. That's what we're focusing on.

Ready? Let's subnet some networks.

---

## Introduction

You're the new network administrator for a mid-sized company. Your boss walks into your office and says:

"We just got assigned the 172.16.50.0/24 network. I need you to set up four separate subnets - one for Sales, one for Engineering, one for HR, and one for the Guest Wi-Fi. Make sure they're isolated from each other. Can you have that done by tomorrow?"

Your stomach drops. How do you take one network and turn it into four? Where do the boundaries go? What IP addresses can you assign? Is there even enough space?

This is subnetting in the real world. And after this lesson, you'll know exactly how to handle it.

**Why do we subnet networks?** Four main reasons:

**1. Security and Isolation**

Imagine putting your guest Wi-Fi devices on the same network as your company's financial servers. Bad idea. By creating separate subnets, you create separate broadcast domains and can apply different security policies. Guests on the 172.16.50.0/26 subnet can't see or reach servers on the 172.16.50.64/26 subnet without going through a router - which means you can control that access with firewall rules.

**2. Performance**

Broadcasts are the "reply-all emails" of networking. When one device sends a broadcast, every device on the same network has to process it. A network with 500 devices generates a lot of broadcast noise. Split that into five subnets of 100 devices each, and broadcasts only affect 100 devices at a time. Network performance improves.

**3. Organization**

Different departments, different floors, different buildings - they should probably be on different subnets. It makes troubleshooting easier ("is this a Sales network problem or an Engineering network problem?"), makes IP address management clearer, and gives you logical structure.

**4. Efficient IP Address Usage**

Point-to-point links between routers only need 2 IP addresses. Why waste a /24 network (254 addresses) when you can use a /30 (2 addresses)? Subnetting lets you right-size your networks to avoid waste.

Now let's learn how to actually do it.

---

## The Magic Number Method

There are a dozen ways to subnet. Some involve complex binary manipulation. Some require memorizing charts. I'm going to teach you the Magic Number method because it's fast, practical, and works on the exam.

**The Magic Number is:** 256 - (subnet mask octet) = increment between subnets

That's it. That's the magic.

Let me show you how powerful this is.

---

## Example 1: Subnetting 192.168.1.0/24 into 2 Subnets

**Scenario:** You have the network 192.168.1.0/24. You need to split it into 2 equal subnets.

**Step 1: Determine the new subnet mask**

Original: /24 (255.255.255.0)  
We need 2 subnets, so we need to borrow 1 bit from the host portion.

Why 1 bit? Because 2^1 = 2 subnets.

New subnet mask: /25 (255.255.255.128)

**Step 2: Calculate the Magic Number**

Look at the subnet mask octet where subnetting is happening (the last octet in this case):

```
256 - 128 = 128
```

The Magic Number is **128**. This tells us our subnets increment by 128.

**Step 3: List the subnets**

Start at 0 and add the Magic Number each time:

```
Subnet 1: 192.168.1.0
Subnet 2: 192.168.1.128
```

That's it. Those are your two subnets.

**Step 4: Determine the ranges**

For each subnet, the network address is the starting point, and the broadcast is (next subnet - 1).

**Subnet 1: 192.168.1.0/25**
- Network Address: 192.168.1.0
- First Usable Host: 192.168.1.1
- Last Usable Host: 192.168.1.126
- Broadcast Address: 192.168.1.127
- Usable Hosts: 126

**Subnet 2: 192.168.1.128/25**
- Network Address: 192.168.1.128
- First Usable Host: 192.168.1.129
- Last Usable Host: 192.168.1.254
- Broadcast Address: 192.168.1.255
- Usable Hosts: 126

**Visual representation:**

```
Original /24 network:
[0 -------------------------------- 255]

After /25 subnetting:
[0 -------- 127][128 -------- 255]
   Subnet 1        Subnet 2
```

You just took one network and cleanly split it in half. Sales can use the first subnet, Engineering can use the second.

---

## Example 2: Subnetting 192.168.1.0/24 into 4 Subnets

**Scenario:** Same network, but now you need 4 subnets (Sales, Engineering, HR, Guest Wi-Fi).

**Step 1: Determine the new subnet mask**

We need 4 subnets. What power of 2 gives us 4? 

2^2 = 4

So we need to borrow 2 bits.

Original: /24  
New: /24 + 2 = /26

New subnet mask: /26 (255.255.255.192)

**Step 2: Calculate the Magic Number**

```
256 - 192 = 64
```

Magic Number is **64**.

**Step 3: List the subnets**

Start at 0, add 64 each time:

```
Subnet 1: 192.168.1.0
Subnet 2: 192.168.1.64
Subnet 3: 192.168.1.128
Subnet 4: 192.168.1.192
```

**Step 4: Determine the ranges**

**Subnet 1: 192.168.1.0/26**
- Network: 192.168.1.0
- First Host: 192.168.1.1
- Last Host: 192.168.1.62
- Broadcast: 192.168.1.63
- Usable Hosts: 62

**Subnet 2: 192.168.1.64/26**
- Network: 192.168.1.64
- First Host: 192.168.1.65
- Last Host: 192.168.1.126
- Broadcast: 192.168.1.127
- Usable Hosts: 62

**Subnet 3: 192.168.1.128/26**
- Network: 192.168.1.128
- First Host: 192.168.1.129
- Last Host: 192.168.1.190
- Broadcast: 192.168.1.191
- Usable Hosts: 62

**Subnet 4: 192.168.1.192/26**
- Network: 192.168.1.192
- First Host: 192.168.1.193
- Last Host: 192.168.1.254
- Broadcast: 192.168.1.255
- Usable Hosts: 62

**Visual representation:**

```
Original /24:
[0 -------------------------------- 255]

After /26 subnetting:
[0 -- 63][64 -- 127][128 -- 191][192 -- 255]
 Sales   Engineering    HR      Guest Wi-Fi
```

Perfect. You now have four isolated networks, each with 62 usable IP addresses.

---

## Example 3: Subnetting 192.168.1.0/24 into 8 Subnets

**Scenario:** Your company is growing. Now you need 8 departments on separate subnets.

**Step 1: Determine the new subnet mask**

How many bits for 8 subnets? 2^3 = 8

Borrow 3 bits: /24 + 3 = /27

New subnet mask: /27 (255.255.255.224)

**Step 2: Calculate the Magic Number**

```
256 - 224 = 32
```

Magic Number is **32**.

**Step 3: List the subnets**

```
Subnet 1: 192.168.1.0
Subnet 2: 192.168.1.32
Subnet 3: 192.168.1.64
Subnet 4: 192.168.1.96
Subnet 5: 192.168.1.128
Subnet 6: 192.168.1.160
Subnet 7: 192.168.1.192
Subnet 8: 192.168.1.224
```

**Step 4: Determine the ranges (I'll show you a few)**

**Subnet 1: 192.168.1.0/27**
- Range: 192.168.1.0 - 192.168.1.31
- Usable: 192.168.1.1 - 192.168.1.30
- Broadcast: 192.168.1.31
- Hosts: 30

**Subnet 4: 192.168.1.96/27**
- Range: 192.168.1.96 - 192.168.1.127
- Usable: 192.168.1.97 - 192.168.1.126
- Broadcast: 192.168.1.127
- Hosts: 30

**Subnet 8: 192.168.1.224/27**
- Range: 192.168.1.224 - 192.168.1.255
- Usable: 192.168.1.225 - 192.168.1.254
- Broadcast: 192.168.1.255
- Hosts: 30

See the pattern? Each subnet gets 32 addresses (the Magic Number), but only 30 are usable (because of network and broadcast addresses).

---

## The Magic Number Quick Reference

Here's a chart worth memorizing:

| Subnet Mask (last octet) | Magic Number | CIDR | Subnets Created | Hosts per Subnet |
|-------------------------|--------------|------|-----------------|------------------|
| 128 | 128 | /25 | 2 | 126 |
| 192 | 64 | /26 | 4 | 62 |
| 224 | 32 | /27 | 8 | 30 |
| 240 | 16 | /28 | 16 | 14 |
| 248 | 8 | /29 | 32 | 6 |
| 252 | 4 | /30 | 64 | 2 |

Notice the inverse relationship? As the Magic Number gets smaller, you get more subnets but fewer hosts per subnet. It's always a trade-off.

---

## Practice Problem 1: Which Subnet Does This IP Belong To?

**Question:** You have the network 172.16.20.0/26. A device has the IP address 172.16.20.115. Which subnet is it on?

**Solution:**

Step 1: Calculate the Magic Number
- /26 = 255.255.255.192
- 256 - 192 = 64

Step 2: List subnets in increments of 64
```
172.16.20.0
172.16.20.64
172.16.20.128
172.16.20.192
```

Step 3: Find where 115 falls
- Is 115 in 0-63? No
- Is 115 in 64-127? Yes!

**Answer:** The device is on subnet 172.16.20.64/26

Its valid range is 172.16.20.64 - 172.16.20.127, with usable hosts from .65 to .126.

---

## Practice Problem 2: Design a Subnet Scheme

**Scenario:** You've been assigned 10.50.0.0/24. You need to create subnets for:
- Main office: 50 users
- Branch office: 25 users
- Server room: 10 servers
- Point-to-point WAN link: 2 routers

**Solution:**

Let's think about requirements:
- Main office needs at least 50 IPs → need a subnet with 62 usable (/26)
- Branch office needs 25 IPs → could use /27 (30 hosts) or /26 (62 hosts)
- Server room needs 10 IPs → /28 (14 hosts) would work
- WAN link needs 2 IPs → /30 (2 hosts) is perfect

**Assignment:**

**Main Office: 10.50.0.0/26**
- Network: 10.50.0.0
- Usable: 10.50.0.1 - 10.50.0.62
- Broadcast: 10.50.0.63
- Total: 62 usable hosts

**Branch Office: 10.50.0.64/26**
- Network: 10.50.0.64
- Usable: 10.50.0.65 - 10.50.0.126
- Broadcast: 10.50.0.127
- Total: 62 usable hosts

**Server Room: 10.50.0.128/28**
- Network: 10.50.0.128
- Usable: 10.50.0.129 - 10.50.0.142
- Broadcast: 10.50.0.143
- Total: 14 usable hosts

**WAN Link: 10.50.0.144/30**
- Network: 10.50.0.144
- Usable: 10.50.0.145 - 10.50.0.146
- Broadcast: 10.50.0.147
- Total: 2 usable hosts

Notice we only used addresses through 10.50.0.147. We have 10.50.0.148 - 10.50.0.255 still available for future growth. That's efficient IP management.

---

## Common Subnetting Scenarios

### Scenario 1: Home Network (Most Common)

**Given:** 192.168.1.0/24

**Typical setup:**
- Default gateway/router: 192.168.1.1
- DHCP pool: 192.168.1.100 - 192.168.1.200 (for laptops, phones, IoT)
- Static IPs: 192.168.1.10 - 192.168.1.50 (for printers, servers, smart home hubs)
- Reserved: 192.168.1.201 - 192.168.1.254 (for future devices)

No subnetting needed - it's a single flat network. Perfect for homes.

### Scenario 2: Small Office with Guest Network

**Given:** 192.168.1.0/24

**Need:** Separate corporate and guest networks

**Solution:** Split into two /25 networks
- Corporate: 192.168.1.0/25 (126 hosts)
- Guest: 192.168.1.128/25 (126 hosts)

Configure your firewall to block guest network access to corporate resources. Now guests can use your Wi-Fi without accessing your internal servers.

### Scenario 3: Multi-Floor Office Building

**Given:** 10.20.0.0/16 (huge network, 65,534 hosts)

**Need:** Separate subnet for each floor (3 floors)

**Solution:** Subnet into /24 networks (254 hosts each)
- Floor 1: 10.20.1.0/24
- Floor 2: 10.20.2.0/24
- Floor 3: 10.20.3.0/24

You still have 10.20.4.0 through 10.20.255.0 available for future expansion. Plenty of room to grow.

### Scenario 4: Point-to-Point WAN Links

**Given:** Multiple router-to-router connections

**Best practice:** Use /30 subnets (2 usable hosts each)

**Example:**
```
HQ to Branch 1: 10.0.0.0/30
  - Router A: 10.0.0.1
  - Router B: 10.0.0.2

HQ to Branch 2: 10.0.0.4/30
  - Router A: 10.0.0.5
  - Router B: 10.0.0.6

HQ to Branch 3: 10.0.0.8/30
  - Router A: 10.0.0.9
  - Router B: 10.0.0.10
```

Notice how we increment by 4 (the Magic Number for /30). No wasted addresses.

---

## How to Determine Subnet Information from Any IP

Let's say you encounter an IP address in the wild: **172.16.50.137/26**

How do you determine everything about this subnet?

**Step 1: Identify the subnet mask**
- /26 = 255.255.255.192

**Step 2: Calculate the Magic Number**
- 256 - 192 = 64

**Step 3: Determine which subnet this IP belongs to**

List subnets in increments of 64:
```
172.16.50.0
172.16.50.64
172.16.50.128  ← 137 is between 128 and 191
172.16.50.192
```

**Step 4: Determine the range**

This IP is in the 172.16.50.128 subnet.

The next subnet starts at 192, so this subnet ends at 191.

**Complete information:**
- Network Address: 172.16.50.128
- First Usable Host: 172.16.50.129
- Last Usable Host: 172.16.50.190
- Broadcast Address: 172.16.50.191
- IP 172.16.50.137 is a valid host on this subnet

**Verification:** Is 137 between 129 and 190? Yes. We're good.

---

## Subnet Boundaries Quick Calculation

Here's a mental shortcut for finding subnet boundaries:

**Question:** What subnet does 192.168.5.83/27 belong to?

**Quick method:**

1. /27 → Magic Number is 32 (256 - 224 = 32)
2. Divide the host octet by the Magic Number: 83 ÷ 32 = 2 remainder 19
3. Multiply the quotient by the Magic Number: 2 × 32 = 64
4. That's your network address: 192.168.5.64

**Range:** 64 to 95 (64 + 32 - 1)

**Check:** Is 83 between 64 and 95? Yes!

This trick works because you're essentially asking "how many complete 32-address blocks fit into 83?" Answer: 2 blocks (0-31, 32-63), with 19 addresses into the third block (64-95).

---

## Common Subnetting Mistakes (And How to Avoid Them)

**Mistake 1: Assigning the network address to a device**

Wrong: "Let's give the server 192.168.1.0"

Right: Network address is 192.168.1.0, but the server gets 192.168.1.1 or higher.

**Mistake 2: Assigning the broadcast address to a device**

Wrong: "The last IP is 192.168.1.255, let's use that for the router"

Right: That's the broadcast. Use 192.168.1.254 or lower.

**Mistake 3: Overlapping subnets**

Wrong:
- Subnet 1: 192.168.1.0/26
- Subnet 2: 192.168.1.32/26

Right:
- Subnet 1: 192.168.1.0/26 (0-63)
- Subnet 2: 192.168.1.64/26 (64-127)

Subnets must be aligned on their boundaries. Use the Magic Number to find boundaries.

**Mistake 4: Forgetting that subnetting changes the broadcast domain**

Before: 192.168.1.0/24 - one broadcast domain, 254 devices see each other's broadcasts

After splitting to /25:
- 192.168.1.0/25 - devices 1-126
- 192.168.1.128/25 - devices 129-254

These are now separate broadcast domains. A broadcast in the first subnet doesn't reach the second subnet.

**Mistake 5: Not planning for growth**

If you need exactly 30 hosts, don't use a /27 (30 hosts). Use a /26 (62 hosts) or /25 (126 hosts) to allow for expansion. Running out of IP addresses in a subnet is painful to fix.

---

## Real-World Subnetting: A Complete Example

**Scenario:** You're hired as the network admin for a company that just moved into a new building. They've been assigned the 172.16.100.0/24 network. Here are the requirements:

- Marketing: 50 employees
- Engineering: 30 employees
- HR: 15 employees
- Executives: 5 employees
- Guest Wi-Fi: 30 concurrent devices max
- Server Room: 20 servers
- 2 WAN connections to branch offices

**Your Task:** Design the subnet scheme.

**Solution:**

First, let's list requirements in order from largest to smallest:

1. Marketing: 50 hosts → need at least /26 (62 hosts)
2. Guest Wi-Fi: 30 hosts → /26 (62 hosts) or /27 (30 hosts)
3. Engineering: 30 hosts → /27 (30 hosts)
4. Server Room: 20 hosts → /27 (30 hosts)
5. HR: 15 hosts → /28 (14 hosts) is too small, need /27 (30 hosts)
6. Executives: 5 hosts → /28 (14 hosts)
7. WAN Link 1: 2 hosts → /30 (2 hosts)
8. WAN Link 2: 2 hosts → /30 (2 hosts)

**Subnet Assignment:**

```
172.16.100.0/26     Marketing (62 hosts)
  Range: .0 - .63

172.16.100.64/26    Guest Wi-Fi (62 hosts)
  Range: .64 - .127

172.16.100.128/27   Engineering (30 hosts)
  Range: .128 - .159

172.16.100.160/27   Server Room (30 hosts)
  Range: .160 - .191

172.16.100.192/28   HR (14 hosts) - tight but manageable
  Range: .192 - .207

172.16.100.208/28   Executives (14 hosts)
  Range: .208 - .223

172.16.100.224/30   WAN Link 1 (2 hosts)
  Range: .224 - .227

172.16.100.228/30   WAN Link 2 (2 hosts)
  Range: .228 - .231

RESERVED: 172.16.100.232 - 172.16.100.255 (24 addresses for future use)
```

**Why this works:**
- Everyone has enough addresses with room to grow
- Departments are isolated (security)
- Different broadcast domains (performance)
- WAN links don't waste addresses
- Still have 24 addresses reserved for future needs

**Network diagram:**

```
            [Core Router]
                 |
    +------------+------------+
    |            |            |
[Marketing]  [Engineering] [Guest]
   /26          /27          /26
   62 hosts     30 hosts     62 hosts

    |            |            |
    +------------+------------+
    |            |            |
 [Servers]      [HR]     [Executives]
   /27          /28          /28
   30 hosts     14 hosts     14 hosts

              [WAN Links]
           /30 (Branch 1)
           /30 (Branch 2)
```

This is real network design. This is what you'll do in the field.

---

## Troubleshooting with Subnetting Knowledge

**Problem 1:** A user reports they can ping 192.168.1.50 but cannot ping 192.168.1.150.

**Your analysis:**

"What's your IP address and subnet mask?"

User: "192.168.1.75, subnet mask 255.255.255.128"

Ah! /25 network.

Magic Number: 256 - 128 = 128

Subnets:
- 192.168.1.0/25 (0-127)
- 192.168.1.128/25 (128-255)

The user is on the first subnet (.75). The IP .50 is also on the first subnet. But .150 is on the second subnet!

**Solution:** These devices are on different subnets and need a router to communicate. Check if the router is configured correctly or if there's a routing issue.

**Problem 2:** You add a new device with IP 10.20.30.200/26 and it can't communicate with anything.

**Your analysis:**

/26 network, Magic Number is 64.

List subnets:
- 10.20.30.0 (0-63)
- 10.20.30.64 (64-127)
- 10.20.30.128 (128-191)
- 10.20.30.192 (192-255)

The IP .200 is in the fourth subnet (192-255).

Check other devices: Are they also in the 192-255 range? Or are they in a different subnet?

If other devices are in 10.20.30.0/26 (the first subnet), this new device is isolated on a different subnet.

**Solution:** Either change the new device's IP to be in the same subnet as other devices, or configure routing between subnets.

---

## Subnetting for the Network+ Exam

Here's what you actually need to know for exam day:

**You WILL be asked to:**
- Identify which subnet an IP address belongs to
- Calculate the number of usable hosts in a subnet
- Determine if two IPs are on the same subnet
- Choose the appropriate subnet mask for a given scenario
- Identify the network and broadcast addresses

**You probably WON'T be asked to:**
- Design complex VLSM schemes from scratch (that's CCNA level)
- Perform subnetting in binary without a calculator
- Memorize every possible subnet mask combination

**Exam strategy:**

1. **Memorize the common subnet masks:** /24, /25, /26, /27, /28, /30
2. **Know the Magic Number method** for quick calculations
3. **Understand the trade-off:** more subnets = fewer hosts per subnet
4. **Recognize patterns:** If you see .128, think "halfway point of a /24 split into /25"
5. **Eliminate obviously wrong answers** - the exam is multiple choice!

**Time-saving tip:** On exam day, immediately write down:
```
128  64  32  16  8  4  2  1  (powers of 2)
/24=.0   /25=.128   /26=.192   /27=.224
/28=.240   /29=.248   /30=.252
```

Having this reference on your scratch paper will save you precious time.

---

## Practice Makes Perfect

Subnetting is like learning to ride a bike. Reading about it helps, but you only really learn by doing it. Here are resources for practice:

**Websites for practice:**
- subnetting.org (random practice problems)
- subnetipv4.com (subnet calculator to check your work)
- subnettingquestions.com (exam-style questions)

**Practice routine:**
- Day 1: Practice finding Magic Numbers for different masks
- Day 2: Practice listing subnets from a network
- Day 3: Practice determining ranges (network, usable, broadcast)
- Day 4: Practice "which subnet does this IP belong to?" questions
- Day 5: Practice real-world scenario design
- Day 6+: Mix of all types, increasing speed

Start slow and accurate. Speed comes with repetition.

---

## Key Takeaways

**The Magic Number method:** 256 - (subnet mask octet) = increment between subnets

**Subnetting is borrowing bits** from the host portion to create more networks

**More network bits = more subnets** but fewer hosts per subnet (always a trade-off)

**Every subnet has four key addresses:** Network, First Usable Host, Last Usable Host, Broadcast

**Network address:** All host bits = 0, cannot be assigned to devices

**Broadcast address:** All host bits = 1, cannot be assigned to devices

**To find which subnet an IP belongs to:** Calculate Magic Number, list subnets in increments, find where the IP falls

**/30 networks are perfect for point-to-point links** (2 usable hosts)

**Common masks to memorize:** /24 (254 hosts), /26 (62 hosts), /27 (30 hosts), /28 (14 hosts), /30 (2 hosts)

**Subnetting improves:** Security (isolation), Performance (smaller broadcast domains), Organization (logical structure), Efficiency (right-sized networks)

**Planning tip:** Always subnet slightly larger than needed to allow for growth

**Troubleshooting tip:** If devices can't communicate, check if they're on the same subnet first

---

## Check Your Understanding

**1. You have 192.168.5.0/24 and need 4 equal subnets. What subnet mask do you use?**

<details>
<summary>Show Answer</summary>
<strong>/26 (255.255.255.192)</strong>. To create 4 subnets, you need 2 bits (2^2 = 4). Original mask is /24, so borrowing 2 bits gives you /26. Each subnet will have 62 usable hosts.
</details>

**2. What is the Magic Number for a /27 network?**

<details>
<summary>Show Answer</summary>
<strong>32</strong>. A /27 subnet mask is 255.255.255.224. The Magic Number is 256 - 224 = 32. This means subnets increment by 32 (0, 32, 64, 96, 128, 160, 192, 224).
</details>

**3. Which subnet does 10.50.100.85/26 belong to?**

<details>
<summary>Show Answer</summary>
<strong>10.50.100.64/26</strong>. Magic Number for /26 is 64. Subnets are: 0-63, 64-127, 128-191, 192-255. The IP .85 falls in the 64-127 range, so it belongs to the 10.50.100.64 subnet.
</details>

**4. In the subnet 172.16.20.128/25, what is the broadcast address?**

<details>
<summary>Show Answer</summary>
<strong>172.16.20.255</strong>. A /25 has a Magic Number of 128. The subnets are 0-127 and 128-255. For the 128 subnet, the broadcast is 255 (the last address in the range).
</details>

**5. You need 50 usable IP addresses. What's the smallest subnet mask you can use?**

<details>
<summary>Show Answer</summary>
<strong>/26 (255.255.255.192)</strong>. A /26 provides 62 usable hosts (2^6 - 2 = 62). A /27 only provides 30 hosts, which isn't enough. Always round up to the next subnet size that meets or exceeds your requirements.
</details>

**6. You split 192.168.1.0/24 into four /26 subnets. What is the range of the third subnet?**

<details>
<summary>Show Answer</summary>
<strong>192.168.1.128 - 192.168.1.191</strong>. Magic Number is 64. Subnets are: 0-63 (1st), 64-127 (2nd), 128-191 (3rd), 192-255 (4th). The third subnet starts at 128 and ends at 191.
</details>

**7. Are 10.20.30.50/26 and 10.20.30.100/26 on the same subnet?**

<details>
<summary>Show Answer</summary>
<strong>No</strong>. Magic Number for /26 is 64. Subnets are: 0-63, 64-127, 128-191, 192-255. IP .50 is in the first subnet (0-63), while .100 is in the second subnet (64-127). They would need a router to communicate.
</details>

**8. What is the usable host range for 172.16.50.32/27?**

<details>
<summary>Show Answer</summary>
<strong>172.16.50.33 - 172.16.50.62</strong>. Magic Number is 32 for /27. This subnet runs from 32-63. Network address is .32 (first, unusable). Broadcast is .63 (last, unusable). Usable range is .33 to .62 (30 hosts).
</details>

---

## Before Moving to Lesson 6

Make sure you can confidently:

- [ ] Calculate the Magic Number for any subnet mask
- [ ] List all subnets when dividing a network
- [ ] Determine network, usable range, and broadcast for each subnet
- [ ] Identify which subnet an IP address belongs to
- [ ] Choose appropriate subnet masks for different scenarios
- [ ] Explain why organizations subnet their networks
- [ ] Troubleshoot connectivity issues using subnet knowledge

**Study Strategy:**

**Today:**
- Practice 10 subnetting problems using the Magic Number method
- Create flashcards for common subnet masks and their Magic Numbers
- Work through the real-world examples again without looking at answers
- Time yourself - can you find subnet boundaries in under 30 seconds?

**Tomorrow (Day 6):**
- Review Magic Number calculations (5 minutes)
- Practice 5 more random subnetting problems
- Try designing your own network scenario and subnetting it
- Prepare for VLSM concepts in Lesson 6

**Day 7:**
- Continue Lesson 6 (Advanced Subnetting & VLSM)
- The skills from this lesson will be essential
- VLSM is just "smart subnetting" - you're ready for it

**Remember:** Speed comes from practice. Aim for accuracy first, then work on getting faster. If you can correctly subnet a /24 into any number of equal subnets using the Magic Number method, you're 90% ready for the exam.

---

## Coming Up in Lesson 6: Advanced Subnetting & VLSM

You've learned **how to subnet networks into equal-sized pieces**.

**Next, you'll learn how to subnet efficiently** with different-sized subnets:

- Variable Length Subnet Masking (VLSM)
- Creating custom-sized subnets for specific needs
- Designing efficient IP schemes with minimal waste
- Supernetting and route summarization
- Real-world complex network design
- Advanced troubleshooting scenarios

**The connection:**

Lesson 5 taught you the mechanics of subnetting. Lesson 6 teaches you the art of subnetting - how to design elegant, efficient networks that perfectly fit real-world requirements without wasting addresses.

**See you in Lesson 6!**

---

*"Subnetting is like cutting a pizza. The Magic Number tells you where to make each slice."*

---

# LESSON 5 COMPLETE!

**What You Just Learned:**
- Why organizations subnet (security, performance, organization, efficiency)
- The Magic Number method (256 - subnet octet)
- How to divide networks into equal subnets
- How to calculate subnet boundaries (network, hosts, broadcast)
- How to identify which subnet an IP belongs to
- Common subnetting scenarios and solutions
- Real-world network design with subnetting
- Troubleshooting connectivity using subnet knowledge


**The hardest conceptual material is behind you. From here, it's practice and application!**