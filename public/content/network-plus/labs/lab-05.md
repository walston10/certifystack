# Lesson 5 Lab: Subnetting Fundamentals

**Estimated Time:** 30-35 minutes  
**Topics:** Magic Number method, Dividing networks into subnets, Subnet ranges and boundaries

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand subnetting basics:

1. **Why do we subnet networks?**
   - a) To make networks faster
   - b) To divide networks for security, performance, and organization
   - c) To increase the number of IP addresses
   - d) To reduce the cost of routers

2. **If you subnet a /24 network into 4 equal subnets, what is the new subnet mask?**
   - a) /25
   - b) /26
   - c) /27
   - d) /28

3. **What is the "magic number" for a /26 subnet mask?**
   - a) 32
   - b) 64
   - c) 128
   - d) 256

4. **How many subnets can you create by borrowing 3 bits?**
   - a) 3
   - b) 6
   - c) 8
   - d) 16

5. **If you divide 192.168.1.0/24 into /26 subnets, what is the third subnet's network address?**
   - a) 192.168.1.64
   - b) 192.168.1.96
   - c) 192.168.1.128
   - d) 192.168.1.192

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: The Magic Number Method

**The Magic Number Formula:**
```
256 - (last octet of subnet mask) = Magic Number
```

The magic number tells you the INCREMENT between subnets.

**Example: /26 subnet**
- Subnet mask: 255.255.255.192
- Magic number: 256 - 192 = **64**
- Subnets start at: 0, 64, 128, 192

---

**Practice: Find the magic number for each:**

| CIDR | Subnet Mask | Last Octet | Magic Number | Subnets Start At |
|------|-------------|------------|--------------|------------------|
| /25 | 255.255.255.128 | 128 | 256-128 = ____ | 0, ___, ___ |
| /26 | 255.255.255.192 | 192 | 256-192 = ____ | 0, ___, ___, ___ |
| /27 | 255.255.255.224 | 224 | 256-224 = ____ | 0, ___, ___, ___, ___, ___, ___, ___ |
| /28 | 255.255.255.240 | 240 | 256-240 = ____ | 0, ___, ___, ___ (continue pattern) |
| /29 | 255.255.255.248 | 248 | 256-248 = ____ | 0, ___, ___, ___ (continue pattern) |
| /30 | 255.255.255.252 | 252 | 256-252 = ____ | 0, ___, ___, ___ (continue pattern) |

---

### Activity B: Subnet a /24 Network

**Scenario:** You have 192.168.10.0/24 and need to create 4 equal subnets.

#### Step 1: Determine the new subnet mask

**Formula:** 2^n = number of subnets
- Need 4 subnets
- 2^2 = 4
- Borrow 2 bits
- Original: /24
- New: /24 + 2 = **/26**

#### Step 2: Find the magic number
- /26 = 255.255.255.192
- Magic number: 256 - 192 = **64**

#### Step 3: List all subnets (increment by magic number)

**Complete this table:**

| Subnet # | Network Address | First Usable | Last Usable | Broadcast | Usable Hosts |
|----------|-----------------|--------------|-------------|-----------|--------------|
| 1 | 192.168.10.0 | 192.168.10.1 | 192.168.10.62 | 192.168.10.63 | 62 |
| 2 | 192.168.10.64 | _____________ | _____________ | _____________ | ____ |
| 3 | 192.168.10.128 | _____________ | _____________ | _____________ | ____ |
| 4 | 192.168.10.192 | _____________ | _____________ | _____________ | ____ |

**Rules to remember:**
- Network address: First address in range (all host bits = 0)
- First usable: Network address + 1
- Last usable: Broadcast address - 1
- Broadcast: Last address in range (all host bits = 1)
- Usable hosts: 2^(host bits) - 2

---

### Activity C: Divide 192.168.1.0/24 into 8 Subnets

**Your turn from scratch!**

#### Step 1: Calculate new subnet mask
- Need 8 subnets
- 2^? = 8
- 2^___ = 8 (What power?)
- Borrow ___ bits
- New subnet mask: /24 + ___ = /**___**

#### Step 2: Find the magic number
- /___ = 255.255.255.___
- Magic number: 256 - ___ = **___**

#### Step 3: List all 8 subnets

| Subnet # | Network Address | First Usable | Last Usable | Broadcast | Hosts |
|----------|-----------------|--------------|-------------|-----------|-------|
| 1 | 192.168.1.0 | _____________ | _____________ | _____________ | ____ |
| 2 | 192.168.1.___ | _____________ | _____________ | _____________ | ____ |
| 3 | 192.168.1.___ | _____________ | _____________ | _____________ | ____ |
| 4 | 192.168.1.___ | _____________ | _____________ | _____________ | ____ |
| 5 | 192.168.1.___ | _____________ | _____________ | _____________ | ____ |
| 6 | 192.168.1.___ | _____________ | _____________ | _____________ | ____ |
| 7 | 192.168.1.___ | _____________ | _____________ | _____________ | ____ |
| 8 | 192.168.1.___ | _____________ | _____________ | _____________ | ____ |

---

### Activity D: Real-World Scenario

**Scenario:** Your company has 192.168.50.0/24 and needs these subnets:
- **Sales department:** 60 employees
- **Engineering department:** 25 employees
- **Management:** 10 employees
- **Guest WiFi:** 50 devices

#### Step 1: Determine requirements

For each department, what's the minimum subnet size needed?

**Sales (60 employees):**
- Need at least 60 usable hosts
- /26 = 62 hosts ✅
- /27 = 30 hosts ❌

**Your turn - fill in the rest:**

**Engineering (25 employees):**
- Need at least 25 usable hosts
- /___ = ___ hosts

**Management (10 employees):**
- Need at least 10 usable hosts
- /___ = ___ hosts

**Guest WiFi (50 devices):**
- Need at least 50 usable hosts
- /___ = ___ hosts

#### Step 2: Use the Magic Number method

**Design your subnetting scheme:**
1. Start with largest subnet first (Sales: /26)
2. Then next largest (Guest: /26)
3. Continue with smaller subnets

**Complete this allocation:**

| Department | CIDR | Network Address | First Usable | Last Usable | Broadcast |
|------------|------|-----------------|--------------|-------------|-----------|
| Sales | /26 | 192.168.50.0 | _____________ | _____________ | _____________ |
| Guest WiFi | /26 | 192.168.50.64 | _____________ | _____________ | _____________ |
| Engineering | /___ | 192.168.50.___ | _____________ | _____________ | _____________ |
| Management | /___ | 192.168.50.___ | _____________ | _____________ | _____________ |

---

### Activity E: Common Mistakes Practice

**Identify what's wrong with each scenario:**

**Problem 1:**
A student subnets 10.0.0.0/24 into /26 and lists these as the 4 subnets:
- 10.0.0.0/26
- 10.0.0.50/26
- 10.0.0.100/26
- 10.0.0.150/26

**What's wrong?** ____________________________

---

**Problem 2:**
A student says 192.168.1.0/26 has these usable hosts:
- First: 192.168.1.0
- Last: 192.168.1.63

**What's wrong?** ____________________________

---

**Problem 3:**
A student divides 172.16.0.0/24 into /26 subnets and assigns:
- Subnet 1: 172.16.0.0/26
- Subnet 2: 172.16.0.64/26
- Subnet 3: 172.16.0.128/26
- Subnet 4: 172.16.0.192/26
- Subnet 5: 172.16.0.256/26

**What's wrong?** ____________________________

---

### Activity F: Test Your Subnetting Skills

**Without looking at notes, complete these:**

**Problem 1: Divide 10.10.0.0/24 into 2 equal subnets**
- New subnet mask: /**___**
- Magic number: **___**

| Subnet | Network | First Usable | Last Usable | Broadcast |
|--------|---------|--------------|-------------|-----------|
| 1 | ________ | ________ | ________ | ________ |
| 2 | ________ | ________ | ________ | ________ |

---

**Problem 2: Divide 172.16.20.0/24 into 16 equal subnets**
- New subnet mask: /**___**
- Magic number: **___**

| Subnet | Network Address |
|--------|-----------------|
| 1 | 172.16.20.0 |
| 2 | 172.16.20.___ |
| 3 | 172.16.20.___ |
| 4 | 172.16.20.___ |
| ... | ... |
| 16 | 172.16.20.___ |

---

**Problem 3: What subnet is 192.168.5.87/27 on?**

Steps:
1. /27 magic number: 256 - 224 = ___
2. Subnets: 0, ___, ___, ___, ___, ___, ___, ___
3. 87 falls between ___ and ___
4. Network address: 192.168.5.___

---

### Activity G: Use an Online Tool to Verify

**Go to a subnet calculator:**
- www.subnet-calculator.com
- OR www.calculator.net/ip-subnet-calculator.html

**Test one of your answers from Activity B:**
- Enter: 192.168.10.64/26
- Verify your answers match

**Then test a tricky one:**
- Enter: 192.168.5.87/27
- Does it match what you calculated in Activity F, Problem 3?

**Remember:** You can't use calculators on the exam, but they're great for practice!

---

## Section 3: Reflection (5 min)

**Real-World Application:**

You're a network admin at a school. You have 172.16.0.0/16 (65,534 hosts total).

The school wants:
- **Main building:** 500 computers
- **Dorms:** 200 devices
- **Library:** 100 devices
- **Admin offices:** 50 devices
- **Guest WiFi:** 300 devices

**Questions to think about:**

1. **Would you give each location a /24 subnet?**
   - Why or why not?
   - What problems might this cause?

2. **What subnet sizes would you choose for each?**
   - Remember: Use the smallest subnet that meets needs + growth

3. **Why not just use /16 for everything?**
   - What are the downsides of subnets that are too large?

**Hint:** Think about:
- Security (isolation between departments)
- Broadcast traffic (smaller subnets = less broadcast noise)
- IP address conservation
- Future growth

---

## What You Learned Today

- ✅ You mastered the Magic Number method (256 - last octet)
- ✅ You can divide a /24 network into equal subnets
- ✅ You can calculate: Network address, First/Last usable, Broadcast
- ✅ You understand how to borrow bits (2^n = number of subnets)
- ✅ You can identify which subnet an IP belongs to
- ✅ You can design real-world subnetting schemes
- ✅ You know common mistakes to avoid

**Next Lesson:** Advanced Subnetting & VLSM - Unequal subnet sizes for maximum efficiency!