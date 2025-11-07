# Lesson 5 Lab - Answer Key

**Subnetting Fundamentals**

---

## Section 1: Concept Check

1. **b) To divide networks for security, performance, and organization**
   - Security: Isolate departments/segments
   - Performance: Reduce broadcast domains
   - Organization: Logical grouping (floors, buildings, departments)
   - IP efficiency: Right-size subnets

2. **b) /26**
   - Need 4 subnets: 2^2 = 4
   - Borrow 2 bits
   - /24 + 2 = /26

3. **b) 64**
   - /26 = 255.255.255.192
   - Magic number: 256 - 192 = 64
   - Subnets at: 0, 64, 128, 192

4. **c) 8**
   - 2^3 = 8 subnets

5. **c) 192.168.1.128**
   - /26 subnets: 0, 64, 128, 192
   - Third subnet starts at 128

---

## Section 2: Hands-On Activity

### Activity A: Magic Number Practice

| CIDR | Subnet Mask | Last Octet | Magic Number | Subnets Start At |
|------|-------------|------------|--------------|------------------|
| /25 | 255.255.255.128 | 128 | **128** | 0, 128 |
| /26 | 255.255.255.192 | 192 | **64** | 0, 64, 128, 192 |
| /27 | 255.255.255.224 | 224 | **32** | 0, 32, 64, 96, 128, 160, 192, 224 |
| /28 | 255.255.255.240 | 240 | **16** | 0, 16, 32, 48, 64, 80, 96, 112, 128, 144, 160, 176, 192, 208, 224, 240 |
| /29 | 255.255.255.248 | 248 | **8** | 0, 8, 16, 24, 32, 40, 48, 56, 64... (32 total) |
| /30 | 255.255.255.252 | 252 | **4** | 0, 4, 8, 12, 16, 20, 24, 28, 32... (64 total) |

**Pattern to memorize:**
- /25 = 128 (increment by 128) → 2 subnets
- /26 = 64 (increment by 64) → 4 subnets
- /27 = 32 (increment by 32) → 8 subnets
- /28 = 16 (increment by 16) → 16 subnets
- /29 = 8 (increment by 8) → 32 subnets
- /30 = 4 (increment by 4) → 64 subnets

---

### Activity B: Subnet 192.168.10.0/24 into 4 Subnets

**Solution:**

| Subnet # | Network Address | First Usable | Last Usable | Broadcast | Usable Hosts |
|----------|-----------------|--------------|-------------|-----------|--------------|
| 1 | 192.168.10.0 | 192.168.10.1 | 192.168.10.62 | 192.168.10.63 | 62 |
| 2 | 192.168.10.64 | 192.168.10.65 | 192.168.10.126 | 192.168.10.127 | 62 |
| 3 | 192.168.10.128 | 192.168.10.129 | 192.168.10.190 | 192.168.10.191 | 62 |
| 4 | 192.168.10.192 | 192.168.10.193 | 192.168.10.254 | 192.168.10.255 | 62 |

**Step-by-step for Subnet 2 (as example):**
- Network: 192.168.10.64 (start of range)
- First usable: 192.168.10.64 + 1 = .65
- Broadcast: 192.168.10.64 + 63 = .127 (end of range)
- Last usable: 192.168.10.127 - 1 = .126
- Hosts: 2^6 - 2 = 64 - 2 = 62

**Quick method for broadcast:**
- Network + Magic Number - 1 = Broadcast
- Example: 64 + 64 - 1 = 127 ✅

---

### Activity C: Divide 192.168.1.0/24 into 8 Subnets

#### Step 1: Calculate new subnet mask
- Need 8 subnets
- 2^? = 8
- 2^**3** = 8
- Borrow **3** bits
- New subnet mask: /24 + 3 = **/27**

#### Step 2: Find the magic number
- /27 = 255.255.255.224
- Magic number: 256 - 224 = **32**

#### Step 3: All 8 subnets

| Subnet # | Network Address | First Usable | Last Usable | Broadcast | Hosts |
|----------|-----------------|--------------|-------------|-----------|-------|
| 1 | 192.168.1.0 | 192.168.1.1 | 192.168.1.30 | 192.168.1.31 | 30 |
| 2 | 192.168.1.32 | 192.168.1.33 | 192.168.1.62 | 192.168.1.63 | 30 |
| 3 | 192.168.1.64 | 192.168.1.65 | 192.168.1.94 | 192.168.1.95 | 30 |
| 4 | 192.168.1.96 | 192.168.1.97 | 192.168.1.126 | 192.168.1.127 | 30 |
| 5 | 192.168.1.128 | 192.168.1.129 | 192.168.1.158 | 192.168.1.159 | 30 |
| 6 | 192.168.1.160 | 192.168.1.161 | 192.168.1.190 | 192.168.1.191 | 30 |
| 7 | 192.168.1.192 | 192.168.1.193 | 192.168.1.222 | 192.168.1.223 | 30 |
| 8 | 192.168.1.224 | 192.168.1.225 | 192.168.1.254 | 192.168.1.255 | 30 |

**Verification:**
- Each subnet = 32 addresses (30 usable)
- 8 subnets × 32 = 256 total ✅ (entire /24)
- No overlap, no gaps ✅

---

### Activity D: Real-World Scenario

#### Step 1: Determine requirements

**Sales (60 employees):**
- Need at least 60 usable hosts
- **/26 = 62 hosts** ✅

**Engineering (25 employees):**
- Need at least 25 usable hosts
- /27 = 30 hosts ✅
- **/27** is perfect

**Management (10 employees):**
- Need at least 10 usable hosts
- /28 = 14 hosts ✅
- **/28** is perfect

**Guest WiFi (50 devices):**
- Need at least 50 usable hosts
- /26 = 62 hosts ✅
- **/26** is perfect

---

#### Step 2: Complete allocation

| Department | CIDR | Network Address | First Usable | Last Usable | Broadcast |
|------------|------|-----------------|--------------|-------------|-----------|
| Sales | /26 | 192.168.50.0 | 192.168.50.1 | 192.168.50.62 | 192.168.50.63 |
| Guest WiFi | /26 | 192.168.50.64 | 192.168.50.65 | 192.168.50.126 | 192.168.50.127 |
| Engineering | /27 | 192.168.50.128 | 192.168.50.129 | 192.168.50.158 | 192.168.50.159 |
| Management | /28 | 192.168.50.160 | 192.168.50.161 | 192.168.50.174 | 192.168.50.175 |

**Address utilization:**
- Sales: 0-63 (64 addresses)
- Guest: 64-127 (64 addresses)
- Engineering: 128-159 (32 addresses)
- Management: 160-175 (16 addresses)
- **Unused:** 176-255 (80 addresses for future growth) ✅

**Why this order?**
- Always allocate largest subnets first
- Prevents overlap
- Makes tracking easier
- Leaves contiguous space for future needs

---

### Activity E: Common Mistakes

**Problem 1: Wrong subnet boundaries**
```
10.0.0.0/26
10.0.0.50/26  ❌ WRONG
10.0.0.100/26 ❌ WRONG
10.0.0.150/26 ❌ WRONG
```

**What's wrong:**
- /26 subnets must start at multiples of 64 (magic number)
- Correct subnets: 0, 64, 128, 192

**Why it matters:**
- 10.0.0.50 is not a valid network address
- It's actually a host in the 10.0.0.0/26 subnet
- Routers won't route to invalid network addresses

---

**Problem 2: Using network/broadcast as hosts**
```
First: 192.168.1.0  ❌ WRONG (this is network address)
Last: 192.168.1.63  ❌ WRONG (this is broadcast address)
```

**What's wrong:**
- Network address (all host bits = 0) cannot be assigned
- Broadcast address (all host bits = 1) cannot be assigned

**Correct:**
- First usable: 192.168.1.1
- Last usable: 192.168.1.62
- Never use .0 or the broadcast address for hosts

---

**Problem 3: Octets can't exceed 255**
```
172.16.0.256/26  ❌ WRONG
```

**What's wrong:**
- Octets range from 0-255 only
- .256 is impossible
- After 192.168.0.255, next network would be 192.168.1.0 (next octet)

**Why this happens:**
- Student kept incrementing by 64: 0, 64, 128, 192, 256
- But 256 = next octet! Should be: 0, 64, 128, 192, then we're out of /24 space

---

### Activity F: Test Your Skills

**Problem 1: Divide 10.10.0.0/24 into 2 equal subnets**
- Need 2 subnets: 2^1 = 2
- Borrow 1 bit
- New subnet mask: **/25**
- Magic number: 256 - 128 = **128**

| Subnet | Network | First Usable | Last Usable | Broadcast |
|--------|---------|--------------|-------------|-----------|
| 1 | 10.10.0.0 | 10.10.0.1 | 10.10.0.126 | 10.10.0.127 |
| 2 | 10.10.0.128 | 10.10.0.129 | 10.10.0.254 | 10.10.0.255 |

**Each subnet has:**
- 2^7 - 2 = 128 - 2 = 126 usable hosts

---

**Problem 2: Divide 172.16.20.0/24 into 16 equal subnets**
- Need 16 subnets: 2^4 = 16
- Borrow 4 bits
- New subnet mask: **/28**
- Magic number: 256 - 240 = **16**

| Subnet | Network Address |
|--------|-----------------|
| 1 | 172.16.20.0 |
| 2 | 172.16.20.16 |
| 3 | 172.16.20.32 |
| 4 | 172.16.20.48 |
| 5 | 172.16.20.64 |
| 6 | 172.16.20.80 |
| 7 | 172.16.20.96 |
| 8 | 172.16.20.112 |
| 9 | 172.16.20.128 |
| 10 | 172.16.20.144 |
| 11 | 172.16.20.160 |
| 12 | 172.16.20.176 |
| 13 | 172.16.20.192 |
| 14 | 172.16.20.208 |
| 15 | 172.16.20.224 |
| 16 | 172.16.20.240 |

**Each subnet has:**
- 2^4 - 2 = 16 - 2 = 14 usable hosts

---

**Problem 3: What subnet is 192.168.5.87/27 on?**

**Steps:**
1. /27 magic number: 256 - 224 = **32**
2. Subnets: 0, 32, 64, 96, 128, 160, 192, 224
3. 87 falls between **64** and **96**
4. Network address: **192.168.5.64**

**Complete subnet info:**
- Network: 192.168.5.64
- First usable: 192.168.5.65
- Host 192.168.5.87 is valid (65-94 range)
- Last usable: 192.168.5.94
- Broadcast: 192.168.5.95

**Quick method to find which subnet:**
- Divide the host octet by the magic number
- 87 ÷ 32 = 2.7
- Drop the decimal: 2
- Multiply back: 2 × 32 = 64
- So 87 is in the 64 subnet ✅

---

### Activity G: Online Verification

**For 192.168.10.64/26, calculator should show:**
```
Network:          192.168.10.64
First Host:       192.168.10.65
Last Host:        192.168.10.126
Broadcast:        192.168.10.127
Subnet Mask:      255.255.255.192
Usable Hosts:     62
```

**For 192.168.5.87/27, calculator should show:**
```
Network:          192.168.5.64
First Host:       192.168.5.65
Last Host:        192.168.5.94
Broadcast:        192.168.5.95
Subnet Mask:      255.255.255.224
Usable Hosts:     30
```

✅ Your hand calculations should match perfectly!

---

## Section 3: Reflection

**School Network Design:**

Given 172.16.0.0/16 (65,534 hosts total):
- Main building: 500 computers
- Dorms: 200 devices
- Library: 100 devices
- Admin: 50 devices
- Guest WiFi: 300 devices

---

**1. Would you give each location a /24 subnet?**

**Answer: Yes and No (it depends)**

**Pros of using /24 for everything:**
- ✅ Simple and consistent
- ✅ 254 hosts each - covers all needs
- ✅ Easy to remember and manage

**Cons of using /24 for everything:**
- ❌ Wastes IPs (Admin only needs 50, not 254)
- ❌ Larger broadcast domains than necessary
- ❌ Not scalable (what if dorms grow to 300?)

**Better approach:** Variable subnet sizes (VLSM - next lesson!)

---

**2. What subnet sizes would you choose?**

**Recommended scheme:**

| Location | Need | Subnet | Usable Hosts | Allows Growth? |
|----------|------|--------|--------------|----------------|
| Main building | 500 | /23 | 510 | ✅ Slight growth |
| Guest WiFi | 300 | /23 | 510 | ✅ Room to grow |
| Dorms | 200 | /24 | 254 | ✅ Some growth |
| Library | 100 | /25 | 126 | ✅ 26% growth |
| Admin | 50 | /26 | 62 | ✅ 24% growth |

**Example allocation:**
```
172.16.0.0/23   - Main building (510 hosts)
172.16.2.0/23   - Guest WiFi (510 hosts)
172.16.4.0/24   - Dorms (254 hosts)
172.16.5.0/25   - Library (126 hosts)
172.16.5.128/26 - Admin (62 hosts)
```

**Key principles:**
- Right-size each subnet
- Allow 20-30% growth
- Don't over-provision
- Keep similar departments together (easier to manage)

---

**3. Why not just use /16 for everything?**

**Problems with subnets that are too large:**

**Security issues:**
- ❌ No isolation between departments
- ❌ Dorm students could scan/access admin systems
- ❌ Guest WiFi mixed with internal systems

**Performance problems:**
- ❌ Broadcast storms affect 65,000+ devices
- ❌ ARP tables become huge
- ❌ Network discovery becomes slow

**Management headaches:**
- ❌ Can't apply different security policies
- ❌ Can't implement different QoS rules
- ❌ Troubleshooting becomes a nightmare

**IP waste:**
- ❌ Using 65,534 addresses when you need 1,150
- ❌ Can't use remaining space efficiently

**The sweet spot:**
- Right-size subnets to needs + growth
- Balance security, performance, and simplicity
- This is why VLSM exists!

---

## Subnetting Quick Reference

**Common subnet sizes to memorize:**

| CIDR | Mask | Magic # | Subnets (from /24) | Hosts per Subnet |
|------|------|---------|-------------------|------------------|
| /25 | 255.255.255.128 | 128 | 2 | 126 |
| /26 | 255.255.255.192 | 64 | 4 | 62 |
| /27 | 255.255.255.224 | 32 | 8 | 30 |
| /28 | 255.255.255.240 | 16 | 16 | 14 |
| /29 | 255.255.255.248 | 8 | 32 | 6 |
| /30 | 255.255.255.252 | 4 | 64 | 2 |

---

## Subnetting Process (Memorize This!)

**1. Determine requirements**
- How many subnets needed?
- How many hosts per subnet?

**2. Calculate bits to borrow**
- 2^n ≥ number of subnets needed
- Borrow n bits from host portion

**3. Find new subnet mask**
- Original CIDR + borrowed bits = new CIDR

**4. Calculate magic number**
- 256 - (last octet of subnet mask) = increment

**5. List all subnets**
- Start at 0, increment by magic number

**6. For each subnet, identify:**
- Network address (first in range)
- First usable (network + 1)
- Last usable (broadcast - 1)
- Broadcast (last in range)

---

## Exam Tips

**You WILL be asked to:**
- Divide a /24 into X subnets
- Identify which subnet an IP belongs to
- Calculate usable hosts per subnet
- Identify network and broadcast addresses

**Time-saving tricks:**
- Memorize magic numbers for /25 through /30
- Practice until you can do /24 → /26 in under 30 seconds
- Use "divide by magic number" trick to find which subnet

**Common exam traps:**
- Using network address as a host (it's .0, not .1!)
- Using broadcast as a host (it's the last, not second-to-last!)
- Forgetting to subtract 2 for usable hosts
- Subnets must start at multiples of magic number

---

## Did It Work?

If you were able to:
- ✅ Use the magic number method to find subnet ranges
- ✅ Divide a /24 into 2, 4, 8, or 16 equal subnets
- ✅ Identify network, first/last usable, and broadcast for any subnet
- ✅ Determine which subnet an IP belongs to
- ✅ Design a real-world subnetting scheme
- ✅ Avoid common subnetting mistakes

**You're ready for Lesson 6: Advanced Subnetting & VLSM!**

Now you'll learn VLSM (Variable Length Subnet Masking) - using different-sized subnets in the same network for maximum efficiency!