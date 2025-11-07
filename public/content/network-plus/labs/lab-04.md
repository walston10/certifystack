# Lesson 4 Lab: Subnet Masks and CIDR Notation

**Estimated Time:** 25-30 minutes  
**Topics:** Subnet masks, CIDR notation, Network vs Host bits, Usable hosts calculation

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand subnet masks:

1. **What does a subnet mask do?**
   - a) Assigns IP addresses to devices
   - b) Separates the network portion from the host portion of an IP
   - c) Encrypts network traffic
   - d) Converts domain names to IPs

2. **What does /24 CIDR notation mean?**
   - a) 24 host bits
   - b) 24 network bits
   - c) 24 usable hosts
   - d) 24 total devices

3. **What is the dotted decimal equivalent of /24?**
   - a) 255.0.0.0
   - b) 255.255.0.0
   - c) 255.255.255.0
   - d) 255.255.255.255

4. **How many usable hosts are in a /30 network?**
   - a) 30
   - b) 4
   - c) 2
   - d) 1

5. **In the IP 192.168.1.45/24, what is the network address?**
   - a) 192.168.1.0
   - b) 192.168.1.45
   - c) 192.168.1.255
   - d) 192.168.0.0

---

## Section 2: Hands-On Activity (20-25 min)

### Activity A: Analyze Your Network's Subnet Mask

**Let's look at YOUR actual network configuration:**

1. **Open Command Prompt (Windows) or Terminal (Mac)**

2. **Type:** `ipconfig` (Windows) or `ifconfig` (Mac)

3. **Write down:**
   - Your IP Address: _____._____._____._____ 
   - Your Subnet Mask: _____._____._____._____ 

4. **Convert your subnet mask to CIDR notation:**

**Reference table:**
| Subnet Mask | CIDR | Network Bits | Host Bits |
|-------------|------|--------------|-----------|
| 255.0.0.0 | /8 | 8 | 24 |
| 255.255.0.0 | /16 | 16 | 16 |
| 255.255.255.0 | /24 | 24 | 8 |
| 255.255.255.128 | /25 | 25 | 7 |
| 255.255.255.192 | /26 | 26 | 6 |
| 255.255.255.224 | /27 | 27 | 5 |
| 255.255.255.240 | /28 | 28 | 4 |
| 255.255.255.248 | /29 | 29 | 3 |
| 255.255.255.252 | /30 | 30 | 2 |

**Your subnet mask in CIDR:** /_____

**Your complete IP in CIDR notation:** _____._____._____._____ /_____

---

### Activity B: Calculate Usable Hosts

**Formula: 2^(host bits) - 2**

We subtract 2 because:
- 1 address = Network address (all host bits = 0)
- 1 address = Broadcast address (all host bits = 1)

**Practice problems:**

1. **/24 network**
   - Host bits: 32 - 24 = **8 bits**
   - Calculation: 2^8 - 2 = 256 - 2 = **254 usable hosts**

**Your turn:**

2. **/26 network**
   - Host bits: 32 - 26 = _____ bits
   - Calculation: 2^___ - 2 = _____ - 2 = **_____ usable hosts**

3. **/28 network**
   - Host bits: 32 - 28 = _____ bits
   - Calculation: 2^___ - 2 = _____ - 2 = **_____ usable hosts**

4. **/30 network** (point-to-point links)
   - Host bits: 32 - 30 = _____ bits
   - Calculation: 2^___ - 2 = _____ - 2 = **_____ usable hosts**

5. **/29 network**
   - Host bits: 32 - 29 = _____ bits
   - Calculation: 2^___ - 2 = _____ - 2 = **_____ usable hosts**

**Memorize these common ones for the exam:**
- /30 = 2 hosts (WAN links)
- /29 = 6 hosts
- /28 = 14 hosts
- /27 = 30 hosts
- /26 = 62 hosts
- /25 = 126 hosts
- /24 = 254 hosts

---

### Activity C: Identify Network, Broadcast, and Usable Range

**For the network: 192.168.1.0/24**

1. **Network Address:** 192.168.1.0 (first address, all host bits = 0)
2. **First Usable Host:** 192.168.1.1
3. **Last Usable Host:** 192.168.1.254
4. **Broadcast Address:** 192.168.1.255 (last address, all host bits = 1)
5. **Total usable hosts:** 254

---

**Your turn - Complete these:**

#### Problem 1: 10.0.0.0/8
- Network Address: _____________
- First Usable Host: _____________
- Last Usable Host: _____________
- Broadcast Address: _____________
- Usable Hosts: _____________

#### Problem 2: 172.16.0.0/16
- Network Address: _____________
- First Usable Host: _____________
- Last Usable Host: _____________
- Broadcast Address: _____________
- Usable Hosts: _____________

#### Problem 3: 192.168.10.0/28
- Network Address: _____________
- First Usable Host: _____________
- Last Usable Host: _____________
- Broadcast Address: _____________
- Usable Hosts: _____________

#### Problem 4: 192.168.1.64/26
- Network Address: _____________
- First Usable Host: _____________
- Last Usable Host: _____________
- Broadcast Address: _____________
- Usable Hosts: _____________

---

### Activity D: CIDR Conversion Practice

**Convert between dotted decimal and CIDR notation:**

#### Part 1: Dotted Decimal → CIDR

| Subnet Mask | CIDR Notation |
|-------------|---------------|
| 255.255.255.0 | /_____ |
| 255.255.0.0 | /_____ |
| 255.255.255.128 | /_____ |
| 255.255.255.252 | /_____ |
| 255.255.255.240 | /_____ |

#### Part 2: CIDR → Dotted Decimal

| CIDR Notation | Subnet Mask |
|---------------|-------------|
| /8 | _____._____._____._____ |
| /16 | _____._____._____._____ |
| /27 | _____._____._____._____ |
| /29 | _____._____._____._____ |
| /30 | _____._____._____._____ |

---

### Activity E: Binary ANDing (Understanding How Subnet Masks Work)

**To find the network address, we perform a binary AND operation between the IP and subnet mask.**

**Example: What network is 192.168.1.130/25 on?**

1. **Convert IP to binary:**
   - 192.168.1.130 = 11000000.10101000.00000001.10000010

2. **Convert subnet mask to binary:**
   - /25 = 255.255.255.128 = 11111111.11111111.11111111.10000000

3. **Perform AND operation** (1 AND 1 = 1, everything else = 0):
   ```
   IP:    11000000.10101000.00000001.10000010
   Mask:  11111111.11111111.11111111.10000000
   AND:   11000000.10101000.00000001.10000000
   ```

4. **Convert result back to decimal:**
   - 11000000.10101000.00000001.10000000 = **192.168.1.128**

**So 192.168.1.130/25 is on the 192.168.1.128/25 network!**

---

**Your turn - Find the network address:**

**Problem: 10.50.100.75/16**

1. Convert IP to binary (just the parts that matter):
   - 10.50.100.75 = ________.________.________.________

2. Subnet mask /16 in binary:
   - /16 = ________.________.________.________

3. AND operation result:
   - ________.________.________.________

4. Network address: _____._____._____._____ 

---

### Activity F: Real-World Application

**Open a web browser and use an online subnet calculator to verify your work:**

1. **Go to:** www.subnet-calculator.com (or similar free tool)

2. **Enter:** 192.168.1.64/26

3. **Compare the results with your answer from Activity C, Problem 4:**
   - Did you get the same network address?
   - Same broadcast address?
   - Same number of usable hosts?

**This is a great tool for checking your subnetting work, but you MUST know how to do it by hand for the exam!**

---

## Section 3: Reflection (5 min)

**Scenario: Choosing the Right Subnet Mask**

You're setting up networks for a small business with these requirements:

1. **Main office:** 100 employees
2. **Branch office:** 25 employees  
3. **Point-to-point WAN link** between offices

**Your task:** Choose the appropriate CIDR notation for each:

- Main office network: /_____  (Need at least 100 usable hosts)
- Branch office network: /_____  (Need at least 25 usable hosts)
- WAN link: /_____  (Only need 2 usable hosts)

**Explain your reasoning:** Why did you choose each subnet size?

---

## What You Learned Today

- ✅ You understand what subnet masks do (separate network from host bits)
- ✅ You can convert between CIDR notation and dotted decimal
- ✅ You can calculate usable hosts using 2^(host bits) - 2
- ✅ You can identify network address, broadcast address, and usable range
- ✅ You understand binary ANDing (how subnet masks actually work)
- ✅ You can choose appropriate subnet sizes for different scenarios

**Next Lesson:** Subnetting Fundamentals - Actually dividing networks into subnets!