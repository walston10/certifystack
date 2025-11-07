# Lesson 4 Lab - Answer Key

**Subnet Masks and CIDR Notation**

---

## Section 1: Concept Check

1. **b) Separates the network portion from the host portion of an IP**
   - Subnet masks determine which part identifies the network vs individual hosts
   - Uses binary AND operation

2. **b) 24 network bits**
   - /24 means 24 bits are used for the network portion
   - Remaining 8 bits (32-24) are for hosts

3. **c) 255.255.255.0**
   - /24 = 24 bits on = 11111111.11111111.11111111.00000000
   - In decimal: 255.255.255.0

4. **c) 2**
   - /30 has 2 host bits (32-30=2)
   - 2^2 - 2 = 4 - 2 = 2 usable hosts
   - Perfect for point-to-point WAN links

5. **a) 192.168.1.0**
   - /24 means first 3 octets are network, last octet is host
   - Network address has all host bits = 0
   - 192.168.1.0

---

## Section 2: Hands-On Activity

### Activity A: Expected Results

**Most home networks use /24:**

Example output:
```
IP Address: 192.168.1.105
Subnet Mask: 255.255.255.0
```

**Subnet mask in CIDR:** /24
**Complete IP in CIDR notation:** 192.168.1.105/24

---

**Some networks use /16 or /8:**

Example output:
```
IP Address: 10.0.0.55
Subnet Mask: 255.0.0.0
```

**Subnet mask in CIDR:** /8
**Complete IP in CIDR notation:** 10.0.0.55/8

---

**Why different subnet masks?**
- **/24 (255.255.255.0):** Most common for home routers
  - Gives 254 usable hosts - perfect for most homes
- **/8 (255.0.0.0):** Some routers (especially Apple)
  - Gives 16+ million hosts - way overkill, but works
- **/16 (255.255.0.0):** Corporate networks
  - Gives 65,534 hosts - good for large companies

---

### Activity B: Usable Hosts Calculations

**2. /26 network**
- Host bits: 32 - 26 = **6 bits**
- Calculation: 2^6 - 2 = 64 - 2 = **62 usable hosts**

**3. /28 network**
- Host bits: 32 - 28 = **4 bits**
- Calculation: 2^4 - 2 = 16 - 2 = **14 usable hosts**

**4. /30 network**
- Host bits: 32 - 30 = **2 bits**
- Calculation: 2^2 - 2 = 4 - 2 = **2 usable hosts**
- Perfect for WAN links (router to router)

**5. /29 network**
- Host bits: 32 - 29 = **3 bits**
- Calculation: 2^3 - 2 = 8 - 2 = **6 usable hosts**

---

**Quick Reference Chart (MEMORIZE FOR EXAM):**

| CIDR | Subnet Mask | Host Bits | Total IPs | Usable Hosts | Common Use |
|------|-------------|-----------|-----------|--------------|------------|
| /30 | 255.255.255.252 | 2 | 4 | 2 | WAN links |
| /29 | 255.255.255.248 | 3 | 8 | 6 | Small office |
| /28 | 255.255.255.240 | 4 | 16 | 14 | Small subnet |
| /27 | 255.255.255.224 | 5 | 32 | 30 | Department |
| /26 | 255.255.255.192 | 6 | 64 | 62 | Medium subnet |
| /25 | 255.255.255.128 | 7 | 128 | 126 | Large subnet |
| /24 | 255.255.255.0 | 8 | 256 | 254 | Home network |

---

### Activity C: Network Ranges

#### Problem 1: 10.0.0.0/8

**Analysis:**
- /8 = 8 network bits, 24 host bits
- Network portion: 10
- Host portion: 0.0.0 through 255.255.255

**Answers:**
- **Network Address:** 10.0.0.0
- **First Usable Host:** 10.0.0.1
- **Last Usable Host:** 10.255.255.254
- **Broadcast Address:** 10.255.255.255
- **Usable Hosts:** 2^24 - 2 = 16,777,214 hosts

---

#### Problem 2: 172.16.0.0/16

**Analysis:**
- /16 = 16 network bits, 16 host bits
- Network portion: 172.16
- Host portion: 0.0 through 255.255

**Answers:**
- **Network Address:** 172.16.0.0
- **First Usable Host:** 172.16.0.1
- **Last Usable Host:** 172.16.255.254
- **Broadcast Address:** 172.16.255.255
- **Usable Hosts:** 2^16 - 2 = 65,534 hosts

---

#### Problem 3: 192.168.10.0/28

**Analysis:**
- /28 = 28 network bits, 4 host bits
- 4 host bits = 16 total addresses (0-15)
- Network starts at 192.168.10.0

**Step-by-step:**
- Host bits can be: 0000 through 1111 (0-15 in decimal)
- Last octet range: .0 through .15

**Answers:**
- **Network Address:** 192.168.10.0
- **First Usable Host:** 192.168.10.1
- **Last Usable Host:** 192.168.10.14
- **Broadcast Address:** 192.168.10.15
- **Usable Hosts:** 2^4 - 2 = 14 hosts

---

#### Problem 4: 192.168.1.64/26

**Analysis:**
- /26 = 26 network bits, 6 host bits
- 6 host bits = 64 total addresses
- Network starts at 192.168.1.64

**Step-by-step:**
- Host bits can be: 000000 through 111111 (0-63 in decimal)
- Last octet range: .64 through .127

**Answers:**
- **Network Address:** 192.168.1.64
- **First Usable Host:** 192.168.1.65
- **Last Usable Host:** 192.168.1.126
- **Broadcast Address:** 192.168.1.127
- **Usable Hosts:** 2^6 - 2 = 62 hosts

**How to find the range:**
- Subnet has 64 addresses (2^6)
- Starts at 64, ends at 64+64-1 = 127
- Or: 256-192=64 (this is the "magic number" method you'll learn in Lesson 5)

---

### Activity D: CIDR Conversion

#### Part 1: Dotted Decimal → CIDR

| Subnet Mask | CIDR Notation | Binary |
|-------------|---------------|--------|
| 255.255.255.0 | /24 | 24 ones, 8 zeros |
| 255.255.0.0 | /16 | 16 ones, 16 zeros |
| 255.255.255.128 | /25 | 25 ones, 7 zeros |
| 255.255.255.252 | /30 | 30 ones, 2 zeros |
| 255.255.255.240 | /28 | 28 ones, 4 zeros |

**How to convert:**
- Count the number of binary 1s in the mask
- 255 = 11111111 (8 ones)
- 128 = 10000000 (1 one)
- 192 = 11000000 (2 ones)
- 224 = 11100000 (3 ones)
- 240 = 11110000 (4 ones)
- 248 = 11111000 (5 ones)
- 252 = 11111100 (6 ones)
- 254 = 11111110 (7 ones)

---

#### Part 2: CIDR → Dotted Decimal

| CIDR Notation | Subnet Mask | Explanation |
|---------------|-------------|-------------|
| /8 | 255.0.0.0 | 8 bits on in first octet |
| /16 | 255.255.0.0 | 16 bits on in first two octets |
| /27 | 255.255.255.224 | 27 bits on: 24 + 3 more |
| /29 | 255.255.255.248 | 29 bits on: 24 + 5 more |
| /30 | 255.255.255.252 | 30 bits on: 24 + 6 more |

**Quick conversion for last octet:**
- /25 = 128 (10000000)
- /26 = 192 (11000000)
- /27 = 224 (11100000)
- /28 = 240 (11110000)
- /29 = 248 (11111000)
- /30 = 252 (11111100)

---

### Activity E: Binary ANDing

**Problem: 10.50.100.75/16**

**1. Convert IP to binary:**
```
10      = 00001010
50      = 00110010
100     = 01100100
75      = 01001011

Full: 00001010.00110010.01100100.01001011
```

**2. Subnet mask /16 in binary:**
```
/16 = 255.255.0.0
= 11111111.11111111.00000000.00000000
```

**3. AND operation:**
```
IP:    00001010.00110010.01100100.01001011
Mask:  11111111.11111111.00000000.00000000
       ────────────────────────────────────
AND:   00001010.00110010.00000000.00000000
```

**4. Convert result to decimal:**
```
00001010 = 10
00110010 = 50
00000000 = 0
00000000 = 0
```

**Network address: 10.50.0.0**

**What this shows:**
- The /16 mask "zeroed out" the last two octets
- Only the first 16 bits (first 2 octets) define the network
- Any IP from 10.50.0.1 to 10.50.255.254 is on this network
- All share the network address 10.50.0.0

---

### Activity F: Online Calculator Verification

**For 192.168.1.64/26, the calculator should show:**

```
IP Address:           192.168.1.64
Subnet Mask:          255.255.255.192
CIDR Notation:        /26

Network Address:      192.168.1.64
First Usable Host:    192.168.1.65
Last Usable Host:     192.168.1.126
Broadcast Address:    192.168.1.127

Total Hosts:          64
Usable Hosts:         62
```

**Other useful calculators:**
- www.subnet-calculator.com
- www.calculator.net/ip-subnet-calculator.html
- jodies.de/ipcalc

**Important reminder:**
- These tools are great for learning and verification
- **You CANNOT use them on the exam**
- You must be able to subnet by hand
- Practice until it's second nature!

---

## Section 3: Reflection

**Choosing Subnet Sizes:**

**Main office: 100 employees**
- Need: At least 100 usable hosts
- /25 = 126 hosts ✅ (perfect!)
- /26 = 62 hosts ❌ (too small)
- Choice: **/25 (255.255.255.128)**

**Branch office: 25 employees**
- Need: At least 25 usable hosts
- /27 = 30 hosts ✅ (perfect!)
- /28 = 14 hosts ❌ (too small)
- Choice: **/27 (255.255.255.224)**

**WAN link between offices**
- Need: Only 2 usable hosts (router to router)
- /30 = 2 hosts ✅ (perfect!)
- Choice: **/30 (255.255.255.252)**

---

**Reasoning:**
- Always choose the SMALLEST subnet that meets your needs
- Conserves IP addresses
- Reduces broadcast traffic
- Better security (smaller broadcast domains)
- But leave room for growth!

**Example IP scheme:**
```
Main office:    192.168.1.0/25    (192.168.1.1 - 192.168.1.126)
Branch office:  192.168.1.128/27  (192.168.1.129 - 192.168.1.158)
WAN link:       192.168.1.160/30  (192.168.1.161 - 192.168.1.162)
```

**Why this works:**
- Efficient use of 192.168.1.0/24 space
- No overlap between subnets
- Room left over for future growth

---

## Key Formulas to Memorize

**Usable Hosts:**
```
2^(host bits) - 2
```

**Number of Subnets:**
```
2^(borrowed bits)
```

**Magic Number (for finding subnet ranges):**
```
256 - (subnet mask octet) = increment
```

**Finding Network Address:**
```
IP AND Subnet Mask (binary)
```

---

## Common Mistakes to Avoid

**Mistake 1: Forgetting to subtract 2**
- WRONG: /24 = 2^8 = 256 hosts
- RIGHT: /24 = 2^8 - 2 = 254 usable hosts
- Remember: Network address + Broadcast address can't be used

**Mistake 2: Confusing network bits with host bits**
- /24 means 24 NETWORK bits (not host bits)
- Host bits = 32 - 24 = 8

**Mistake 3: Wrong CIDR conversion**
- 255.255.255.0 = /24 (NOT /8)
- Count ALL the bits: 8 + 8 + 8 = 24

**Mistake 4: Using network or broadcast address for hosts**
- 192.168.1.0 = Network (can't assign to device)
- 192.168.1.255 = Broadcast (can't assign to device)
- First usable: 192.168.1.1

---

## Exam Tips

**You WILL see questions like:**
- "How many usable hosts in a /27?" (Answer: 30)
- "What's the broadcast address for 10.1.1.0/24?" (Answer: 10.1.1.255)
- "Convert 255.255.248.0 to CIDR" (Answer: /21)
- "What network is 172.16.50.75/22 on?" (Answer: 172.16.48.0)

**Memorize these common subnet masks:**
- /24 = 255.255.255.0 (254 hosts)
- /25 = 255.255.255.128 (126 hosts)
- /26 = 255.255.255.192 (62 hosts)
- /27 = 255.255.255.224 (30 hosts)
- /28 = 255.255.255.240 (14 hosts)
- /29 = 255.255.255.248 (6 hosts)
- /30 = 255.255.255.252 (2 hosts)

---

## Did It Work?

If you were able to:
- ✅ Identify your network's subnet mask and convert to CIDR
- ✅ Calculate usable hosts using 2^(host bits) - 2
- ✅ Find network address, broadcast address, and usable range
- ✅ Convert between CIDR and dotted decimal notation
- ✅ Understand binary ANDing
- ✅ Choose appropriate subnet sizes for scenarios

**You're ready for Lesson 5: Subnetting Fundamentals!**

Now comes the real fun - actually dividing networks into multiple subnets using the "magic number" method!