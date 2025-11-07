# Lesson 6 Lab: Advanced Subnetting & VLSM

**Estimated Time:** 30-35 minutes  
**Topics:** VLSM, Efficient IP schemes, Route summarization, Troubleshooting subnets

---

## Section 1: Concept Check (5 min)

Answer these questions to verify you understand VLSM:

1. **What does VLSM stand for?**
   - a) Very Large Subnet Masking
   - b) Variable Length Subnet Masking
   - c) Virtual LAN Subnet Masking
   - d) Variable Link Subnet Method

2. **When designing with VLSM, which subnet should you allocate FIRST?**
   - a) The smallest subnet
   - b) The largest subnet
   - c) It doesn't matter
   - d) Start with /30 subnets

3. **Which routing protocol does NOT support VLSM?**
   - a) RIPv2
   - b) OSPF
   - c) RIPv1
   - d) EIGRP

4. **What is supernetting used for?**
   - a) Making subnets larger
   - b) Combining multiple networks into one route (route summarization)
   - c) Dividing networks into smaller subnets
   - d) Increasing network speed

5. **You have 192.168.1.0/24. You need subnets for: 100 hosts, 50 hosts, 20 hosts, 2 hosts. Which should you allocate first?**
   - a) 2 hosts (/30)
   - b) 20 hosts (/27)
   - c) 50 hosts (/26)
   - d) 100 hosts (/25)

---

## Section 2: Hands-On Activity (25-30 min)

### Activity A: Why VLSM Matters

**Scenario: Without VLSM (Equal subnets only)**

You have 192.168.1.0/24 and need:
- Department A: 100 hosts
- Department B: 50 hosts
- Department C: 20 hosts
- WAN link: 2 hosts

**Using equal subnetting (no VLSM):**
- Must use /25 for all subnets (126 hosts each) - only fits your largest need
- You can create 2 subnets from /24
- But you need 4 subnets total!
- **Problem:** Can't fit all requirements ❌

**Calculate the waste:**
- Dept A: Uses 100 of 126 = **26 wasted**
- Dept B: Uses 50 of 126 = **76 wasted**
- Dept C: Uses 20 of 126 = **106 wasted**
- WAN: Uses 2 of 126 = **124 wasted**
- **Total waste: 332 IP addresses!**

---

**Now with VLSM (Variable subnets):**
- Dept A: /25 (126 hosts) - perfect fit
- Dept B: /26 (62 hosts) - good fit
- Dept C: /27 (30 hosts) - good fit
- WAN: /30 (2 hosts) - perfect fit

**Calculate the waste:**
- Dept A: 126-100 = 26 wasted
- Dept B: 62-50 = 12 wasted
- Dept C: 30-20 = 10 wasted
- WAN: 2-2 = 0 wasted
- **Total waste: 48 IP addresses**

**VLSM saves 284 addresses! (332 - 48)**

---

### Activity B: VLSM Step-by-Step Process

**Network:** 172.16.10.0/24

**Requirements:**
- Subnet A: 60 hosts
- Subnet B: 30 hosts
- Subnet C: 12 hosts
- Subnet D: 10 hosts
- WAN Link 1: 2 hosts
- WAN Link 2: 2 hosts

---

#### Step 1: Organize by size (largest first)

| Subnet | Hosts Needed | CIDR Needed | Usable Hosts |
|--------|--------------|-------------|--------------|
| A | 60 | /26 | 62 |
| B | 30 | /27 | 30 |
| C | 12 | /28 | 14 |
| D | 10 | /28 | 14 |
| WAN 1 | 2 | /30 | 2 |
| WAN 2 | 2 | /30 | 2 |

**How to choose CIDR:**
- Find smallest subnet where: 2^(host bits) - 2 ≥ hosts needed
- 60 hosts: /26 (62 hosts) ✅
- 30 hosts: /27 (30 hosts) ✅
- 12 hosts: /28 (14 hosts) ✅
- 2 hosts: /30 (2 hosts) ✅

---

#### Step 2: Allocate addresses (starting from .0)

**Complete this allocation:**

| Subnet | CIDR | Network | First Usable | Last Usable | Broadcast | Size |
|--------|------|---------|--------------|-------------|-----------|------|
| A | /26 | 172.16.10.0 | __________ | __________ | __________ | 64 |
| B | /27 | 172.16.10.64 | __________ | __________ | __________ | 32 |
| C | /28 | 172.16.10.96 | __________ | __________ | __________ | 16 |
| D | /28 | 172.16.10.112 | __________ | __________ | __________ | 16 |
| WAN 1 | /30 | 172.16.10.128 | __________ | __________ | __________ | 4 |
| WAN 2 | /30 | 172.16.10.132 | __________ | __________ | __________ | 4 |

**Tips:**
- Subnet A starts at .0, size 64 (magic number for /26)
- Subnet B starts at .0 + 64 = .64, size 32
- Subnet C starts at .64 + 32 = .96, size 16
- And so on...

**Address utilization:** 
- Used: 0 through ___
- Remaining: ___ through 255 (for future growth!)

---

### Activity C: Real-World VLSM Design

**You're a network admin. You have 10.50.0.0/16 to work with.**

**Requirements:**
- **Building A:** 500 computers
- **Building B:** 200 computers
- **Building C:** 100 computers
- **Server Farm:** 50 servers
- **Management:** 20 devices
- **Guest WiFi:** 150 devices
- **5 WAN links** between buildings (2 hosts each)

---

#### Your Task: Design the VLSM scheme

**Step 1: Determine subnet sizes**

Fill in the CIDR for each:

| Location | Hosts | CIDR | Usable Hosts |
|----------|-------|------|--------------|
| Building A | 500 | /___ | ____ |
| Building B | 200 | /___ | ____ |
| Guest WiFi | 150 | /___ | ____ |
| Building C | 100 | /___ | ____ |
| Server Farm | 50 | /___ | ____ |
| Management | 20 | /___ | ____ |
| WAN Link 1 | 2 | /___ | ____ |
| WAN Link 2 | 2 | /___ | ____ |
| WAN Link 3 | 2 | /___ | ____ |
| WAN Link 4 | 2 | /___ | ____ |
| WAN Link 5 | 2 | /___ | ____ |

---

**Step 2: Allocate addresses (largest first!)**

| Location | Network Address | First Usable | Last Usable | Broadcast |
|----------|-----------------|--------------|-------------|-----------|
| Building A | 10.50.0.0/___ | __________ | __________ | __________ |
| Building B | 10.50.___.___ /___ | __________ | __________ | __________ |
| Guest WiFi | 10.50.___.___ /___ | __________ | __________ | __________ |
| Building C | 10.50.___.___ /___ | __________ | __________ | __________ |
| Server Farm | 10.50.___.___ /___ | __________ | __________ | __________ |
| Management | 10.50.___.___ /___ | __________ | __________ | __________ |
| WAN Link 1 | 10.50.___.___ /___ | __________ | __________ | __________ |
| WAN Link 2 | 10.50.___.___ /___ | __________ | __________ | __________ |
| WAN Link 3 | 10.50.___.___ /___ | __________ | __________ | __________ |
| WAN Link 4 | 10.50.___.___ /___ | __________ | __________ | __________ |
| WAN Link 5 | 10.50.___.___ /___ | __________ | __________ | __________ |

---

### Activity D: Route Summarization (Supernetting)

**Scenario:** Your company has these networks:
- 192.168.0.0/24
- 192.168.1.0/24
- 192.168.2.0/24
- 192.168.3.0/24

Instead of advertising 4 separate routes, you can summarize into ONE route.

---

#### Step 1: Convert to binary (network portions only)

```
192.168.0.0 = 11000000.10101000.00000000.00000000
192.168.1.0 = 11000000.10101000.00000001.00000000
192.168.2.0 = 11000000.10101000.00000010.00000000
192.168.3.0 = 11000000.10101000.00000011.00000000
```

#### Step 2: Find common bits (where all bits are the same)

```
Common bits: 11000000.10101000.000000xx.00000000
                                      ↑↑ These differ
```

**Count common bits:** 8 + 8 + 6 = **22 bits**

#### Step 3: Summary route

**192.168.0.0/22** summarizes all 4 networks!

---

**Your turn - Summarize these networks:**

**Problem 1:**
- 10.1.0.0/24
- 10.1.1.0/24
- 10.1.2.0/24
- 10.1.3.0/24
- 10.1.4.0/24
- 10.1.5.0/24
- 10.1.6.0/24
- 10.1.7.0/24

**Summary route:** 10.1.0.0 / ___

**Hint:** Convert third octet to binary:
- 0 = 00000000
- 7 = 00000111
- How many bits are common?

---

**Problem 2:**
- 172.16.8.0/24
- 172.16.9.0/24
- 172.16.10.0/24
- 172.16.11.0/24
- 172.16.12.0/24
- 172.16.13.0/24
- 172.16.14.0/24
- 172.16.15.0/24

**Summary route:** 172.16.8.0 / ___

---

### Activity E: Troubleshooting Subnet Issues

**For each scenario, identify the problem and solution:**

---

**Scenario 1:**
```
Network: 192.168.5.0/26
Gateway: 192.168.5.64
Host IP: 192.168.5.50
Subnet Mask: 255.255.255.192

Problem: Host can't reach the internet
```

**What's the issue?** _____________________________

**Why?** _____________________________

**Solution:** _____________________________

---

**Scenario 2:**
```
Network: 10.0.0.0/24
Host A: 10.0.0.50/24
Host B: 10.0.0.100/25

Problem: Host A can ping Host B, but Host B can't ping Host A
```

**What's the issue?** _____________________________

**Solution:** _____________________________

---

**Scenario 3:**
```
Your VLSM allocation:
- Subnet A: 192.168.1.0/25
- Subnet B: 192.168.1.64/26
- Subnet C: 192.168.1.128/26
- Subnet D: 192.168.1.192/27

Problem: Subnet B devices can't communicate with each other
```

**What's the issue?** _____________________________

**Hint:** Check for overlaps!

---

**Scenario 4:**
```
Network: 172.16.0.0/16
DHCP server configured with:
- Scope: 172.16.1.0 - 172.16.1.254
- Subnet Mask: 255.255.0.0

Problem: Computers getting APIPA addresses (169.254.x.x)
```

**What's the issue?** _____________________________

**Solution:** _____________________________

---

### Activity F: VLSM Planning Challenge

**You're hired to design a network for a multi-building campus.**

**Given:** 172.20.0.0/16 (65,534 hosts available)

**Requirements:**
- Main Office: 2000 employees
- Warehouse: 500 devices
- R&D Building: 250 devices
- Retail Store 1: 120 devices
- Retail Store 2: 120 devices
- Retail Store 3: 120 devices
- Data Center: 80 servers
- Guest WiFi (main): 200 devices
- Guest WiFi (stores): 50 devices each (×3)
- Management VLAN: 30 devices
- Security cameras: 15 devices
- 10 WAN links: 2 hosts each

**Your task:**
1. Choose appropriate CIDR for each
2. Allocate addresses (show first 5 allocations)
3. Calculate total address utilization
4. Justify your choices

---

## Section 3: Reflection (5 min)

**Think about these questions:**

1. **Why is VLSM considered "classless"?**
   - How is it different from traditional Class A/B/C networking?

2. **Real-world scenario:**
   - You design a VLSM scheme with perfect fit (no wasted IPs)
   - 6 months later, departments grow
   - What problems might you face?
   - How could you plan better from the start?

3. **Route summarization benefits:**
   - Why would a router with 1000 routes be slower than one with 100?
   - How does summarization help scalability?

---

## What You Learned Today

- ✅ You understand why VLSM is necessary (efficient IP usage)
- ✅ You can design VLSM schemes (largest first methodology)
- ✅ You can allocate different-sized subnets without overlap
- ✅ You understand route summarization/supernetting
- ✅ You can troubleshoot common subnet misconfigurations
- ✅ You can plan scalable IP addressing schemes
- ✅ You know the difference between classful and classless addressing

**Next Lesson:** IPv6 Addressing and Configuration - The future of IP addressing!