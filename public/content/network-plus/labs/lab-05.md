# Lab 5: Subnetting Practice Workshop

**Duration:** 40-50 minutes  
**Difficulty:** Intermediate  
**Prerequisites:** Complete Lessons 3, 4, and 5

---

## 🎯 Lab Objectives

By completing this lab, you will:
- Apply the Magic Number method to real subnetting problems
- Divide networks into equal-sized subnets confidently
- Calculate all subnet boundaries (network, broadcast, usable range)
- Design multi-subnet network architectures
- Identify and fix common subnetting errors
- Build speed and accuracy for the Network+ exam

---

## 🛠️ Tools Required

**Option 1:** Spreadsheet software (recommended)
- Google Sheets, Excel, or LibreOffice Calc
- Use for creating organized subnet tables

**Option 2:** Subnet calculator (for VERIFICATION ONLY)
- ipcalc, subnet-calculator.com
- **Rule:** Solve manually first, then verify

**Option 3:** Paper and pencil
- Best for exam practice and speed building

---

## 📋 Lab Scenario

Welcome back to GlobalTech Solutions! After your excellent work on the IP addressing audit (Lab 3) and subnet mask analysis (Lab 4), you've been promoted to **Network Design Specialist**.

The company is expanding rapidly and needs you to design subnet schemes for:
- New headquarters building (4 floors)
- Three branch offices
- Data center segmentation
- Guest and IoT networks

Your designs must be efficient, organized, and scalable. Let's get to work!

---

## 🏋️ Part 1: Magic Number Speed Drills

Before diving into complex problems, warm up with magic number calculations.

### Calculate the Magic Number:

| Subnet Mask      | Interesting Octet | Magic Number | Verification (256 - X) |
|------------------|-------------------|--------------|------------------------|
| 255.255.255.128  |                   |              |                        |
| 255.255.255.192  |                   |              |                        |
| 255.255.255.224  |                   |              |                        |
| 255.255.255.240  |                   |              |                        |
| 255.255.255.248  |                   |              |                        |
| 255.255.255.252  |                   |              |                        |
| 255.255.240.0    |                   |              |                        |
| 255.255.192.0    |                   |              |                        |

**Goal:** Complete this table in under 2 minutes. This speed is critical for the exam!

---

## 📐 Part 2: Classic Subnetting Problems

Apply the full subnetting methodology to these scenarios.

### Problem 1: Divide into 2 Subnets

**Given Network:** 10.10.20.0/24  
**Requirement:** Create 2 equal subnets

**Your Solution:**

```
Step 1: Bits to borrow: _____ bits (2^? = 2)
Step 2: New CIDR: /24 + _____ = /_____
Step 3: New subnet mask: _____._____._____._____
Step 4: Magic number: 256 - _____ = _____
```

**Complete Subnet Table:**

| Subnet | Network Address | First Usable | Last Usable | Broadcast | Usable Hosts |
|--------|----------------|--------------|-------------|-----------|--------------|
| 1      |                |              |             |           |              |
| 2      |                |              |             |           |              |

---

### Problem 2: Divide into 4 Subnets

**Given Network:** 192.168.50.0/24  
**Requirement:** Create 4 equal subnets

**Your Solution:**

```
Step 1: Bits to borrow: _____ bits (2^? = 4)
Step 2: New CIDR: /24 + _____ = /_____
Step 3: New subnet mask: _____._____._____._____
Step 4: Magic number: 256 - _____ = _____
```

**Complete Subnet Table:**

| Subnet | Network Address | First Usable | Last Usable | Broadcast | Usable Hosts |
|--------|----------------|--------------|-------------|-----------|--------------|
| 1      |                |              |             |           |              |
| 2      |                |              |             |           |              |
| 3      |                |              |             |           |              |
| 4      |                |              |             |           |              |

---

### Problem 3: Divide into 8 Subnets

**Given Network:** 172.16.100.0/24  
**Requirement:** Create 8 equal subnets

**Your Solution:**

```
Step 1: Bits to borrow: _____ bits (2^? = 8)
Step 2: New CIDR: /24 + _____ = /_____
Step 3: New subnet mask: _____._____._____._____
Step 4: Magic number: 256 - _____ = _____
```

**Complete Subnet Table:**

| Subnet | Network Address | First Usable | Last Usable | Broadcast | Usable Hosts |
|--------|----------------|--------------|-------------|-----------|--------------|
| 1      |                |              |             |           |              |
| 2      |                |              |             |           |              |
| 3      |                |              |             |           |              |
| 4      |                |              |             |           |              |
| 5      |                |              |             |           |              |
| 6      |                |              |             |           |              |
| 7      |                |              |             |           |              |
| 8      |                |              |             |           |              |

---

### Problem 4: Challenge - Divide into 16 Subnets

**Given Network:** 10.200.50.0/24  
**Requirement:** Create 16 equal subnets

**Your Solution:**

```
Step 1: Bits to borrow: _____ bits (2^? = 16)
Step 2: New CIDR: /24 + _____ = /_____
Step 3: New subnet mask: _____._____._____._____
Step 4: Magic number: 256 - _____ = _____
```

**List first 4 and last 4 network addresses only:**

First 4:
1. __________________
2. __________________
3. __________________
4. __________________

Last 4:
13. __________________
14. __________________
15. __________________
16. __________________

**Usable hosts per subnet:** _______

---

## 🎯 Part 3: IP Address to Subnet Mapping

Identify which subnet each IP address belongs to.

### Scenario A: Network 192.168.1.0/24 divided into 4 subnets (/26)

**Magic number:** 64  
**Subnets:** .0, .64, .128, .192

Which subnet does each IP belong to?

| IP Address | Belongs to Subnet | Range | Reasoning |
|------------|-------------------|-------|-----------|
| 192.168.1.10  |                |       |           |
| 192.168.1.75  |                |       |           |
| 192.168.1.100 |                |       |           |
| 192.168.1.150 |                |       |           |
| 192.168.1.200 |                |       |           |
| 192.168.1.250 |                |       |           |

---

### Scenario B: Network 10.50.100.0/24 divided into 8 subnets (/27)

**Magic number:** 32  
**Subnets:** .0, .32, .64, .96, .128, .160, .192, .224

Which subnet does each IP belong to?

| IP Address | Belongs to Subnet | Range | Reasoning |
|------------|-------------------|-------|-----------|
| 10.50.100.5   |                |       |           |
| 10.50.100.50  |                |       |           |
| 10.50.100.100 |                |       |           |
| 10.50.100.150 |                |       |           |
| 10.50.100.200 |                |       |           |
| 10.50.100.240 |                |       |           |

---

## 🏢 Part 4: Headquarters Floor Design

**Scenario:** GlobalTech's new 4-story headquarters needs one subnet per floor.

**Given Network:** 192.168.10.0/24  
**Requirements:**
- **Floor 1 (Executive):** 50 devices
- **Floor 2 (Engineering):** 50 devices
- **Floor 3 (Sales & Marketing):** 40 devices
- **Floor 4 (Operations & IT):** 45 devices

**Design Decision:**
You'll create **4 equal subnets** (even though needs vary slightly). This provides:
- Consistent addressing scheme
- Room for growth on all floors
- Simplified management

### Your Design:

**Subnet Mask:** ________________ (show /CIDR and dotted decimal)  
**Magic Number:** ________________  
**Usable Hosts per Floor:** ________________

**Floor Assignments:**

```
Floor 1 (Executive):
   Subnet:           ____________________
   Gateway (.1):     ____________________
   DHCP Range:       ____________________ to ____________________
   Static Range:     ____________________ to ____________________
   Broadcast:        ____________________

Floor 2 (Engineering):
   Subnet:           ____________________
   Gateway:          ____________________
   DHCP Range:       ____________________ to ____________________
   Static Range:     ____________________ to ____________________
   Broadcast:        ____________________

Floor 3 (Sales & Marketing):
   Subnet:           ____________________
   Gateway:          ____________________
   DHCP Range:       ____________________ to ____________________
   Static Range:     ____________________ to ____________________
   Broadcast:        ____________________

Floor 4 (Operations & IT):
   Subnet:           ____________________
   Gateway:          ____________________
   DHCP Range:       ____________________ to ____________________
   Static Range:     ____________________ to ____________________
   Broadcast:        ____________________
```

**Network Diagram:** Draw or describe how floors connect to core switches.

---

## 🌐 Part 5: Multi-Site Branch Office Design

**Scenario:** GlobalTech has 3 branch offices that need connectivity.

**Given Network:** 172.16.50.0/24  
**Requirements:**
- **Branch A (Denver):** 60 devices
- **Branch B (Austin):** 60 devices
- **Branch C (Seattle):** 60 devices
- **WAN Links:** 3 point-to-point connections between offices

### Design Challenge:

You need to create:
- 3 branch office subnets (60 devices each)
- 3 point-to-point WAN subnets (2 hosts each)

**Can you fit this all in a single /24?**

### Your Analysis:

**Branch Subnets:**
- How many hosts needed per branch? ________
- What CIDR provides this? ________
- How many of these subnets fit in a /24? ________

**WAN Subnets:**
- How many hosts per WAN link? ________
- What CIDR provides this? ________
- How many /30 subnets fit in remaining space? ________

### Your Proposed Solution:

**Option 1: Try to fit everything**
- Branches use ________ subnets
- WAN links use ________ subnets
- Does it fit? ________ (show math)

**Option 2: Use separate /24 networks (if Option 1 doesn't fit)**
- Branches: 172.16.50.0/24
- WAN links: 172.16.51.0/24

Which option did you choose and why?

---

## 🚨 Part 6: Find and Fix Subnetting Errors

GlobalTech hired a junior admin who made several subnetting mistakes. Find and fix them!

### Error Scenario 1: Overlapping Subnets

**Claim:** "I divided 192.168.5.0/24 into 4 subnets"

**Their Subnet Table:**
| Subnet | Network | Broadcast |
|--------|---------|-----------|
| 1      | .0      | .64       |
| 2      | .64     | .128      |
| 3      | .128    | .192      |
| 4      | .192    | .256      |

**Your Analysis:**
- What's wrong with this table?
- What should the broadcast addresses actually be?
- What mistake did they make?

---

### Error Scenario 2: Wrong Subnet Mask

**Claim:** "I created 8 subnets from 10.10.10.0/24 using /26"

**Your Analysis:**
- How many subnets does /26 actually create?
- What CIDR should they use for 8 subnets?
- What's the correct subnet mask?

---

### Error Scenario 3: Invalid Host Assignment

**Network:** 172.16.20.0/27

**Assigned IPs:**
- Server A: 172.16.20.0
- Server B: 172.16.20.31
- Workstation: 172.16.20.15

**Your Analysis:**
- Which IPs are invalid for hosts?
- Why are they invalid?
- What should they be changed to?

---

### Error Scenario 4: Insufficient Hosts

**Requirement:** "We need 40 devices per subnet"  
**Implementation:** "I used /27 which provides 30 hosts"

**Your Analysis:**
- Is /27 sufficient?
- What's the minimum CIDR needed for 40 devices?
- Calculate usable hosts for your recommendation.

---

## 🎨 Part 7: Creative Design Challenge

**Scenario:** Design a complete network for a small business from scratch.

**Company:** TechStart Inc. (startup with 80 employees)  
**Base Network:** 192.168.0.0/23 (yes, a /23! That's 512 addresses)

**Department Breakdown:**
- Engineering: 30 devices
- Sales: 20 devices
- Marketing: 15 devices
- Operations: 10 devices
- Guest WiFi: 50 devices (high turnover)
- Servers/Infrastructure: 10 devices
- IoT (cameras, printers, phones): 20 devices

**Requirements:**
1. Segment by department for security
2. Isolate guest traffic
3. Separate IoT devices
4. Allow for 50% growth
5. Use efficient subnet sizes (not all the same!)

### Your Complete Design:

For each segment, document:
- Network address
- Subnet mask (/CIDR)
- Usable hosts provided
- Justification for size choice

**Engineering:**
- Network: ________________
- Mask: ________________
- Hosts: ________________
- Rationale: ________________

**Sales:**
- Network: ________________
- Mask: ________________
- Hosts: ________________
- Rationale: ________________

**Marketing:**
- Network: ________________
- Mask: ________________
- Hosts: ________________
- Rationale: ________________

**Operations:**
- Network: ________________
- Mask: ________________
- Hosts: ________________
- Rationale: ________________

**Guest WiFi:**
- Network: ________________
- Mask: ________________
- Hosts: ________________
- Rationale: ________________

**Servers/Infrastructure:**
- Network: ________________
- Mask: ________________
- Hosts: ________________
- Rationale: ________________

**IoT Devices:**
- Network: ________________
- Mask: ________________
- Hosts: ________________
- Rationale: ________________

**Summary:**
- Total addresses used: ________________
- Total addresses available (from /23): 510
- Efficiency: ________________%

---

## ✅ Answer Key & Solutions

<details>
<summary>Part 1: Magic Number Drills - Expand for Answers</summary>

| Subnet Mask      | Interesting Octet | Magic Number |
|------------------|-------------------|--------------|
| 255.255.255.128  | 128               | 128          |
| 255.255.255.192  | 192               | 64           |
| 255.255.255.224  | 224               | 32           |
| 255.255.255.240  | 240               | 16           |
| 255.255.255.248  | 248               | 8            |
| 255.255.255.252  | 252               | 4            |
| 255.255.240.0    | 240 (3rd octet)   | 16           |
| 255.255.192.0    | 192 (3rd octet)   | 64           |

</details>

<details>
<summary>Part 2: Problem 1 (2 Subnets) - Expand for Answer</summary>

**Solution:**
- Borrow: 1 bit
- New CIDR: /25
- Mask: 255.255.255.128
- Magic: 128

| Subnet | Network | First | Last | Broadcast | Hosts |
|--------|---------|-------|------|-----------|-------|
| 1      | .0      | .1    | .126 | .127      | 126   |
| 2      | .128    | .129  | .254 | .255      | 126   |

</details>

<details>
<summary>Part 2: Problem 2 (4 Subnets) - Expand for Answer</summary>

**Solution:**
- Borrow: 2 bits
- New CIDR: /26
- Mask: 255.255.255.192
- Magic: 64

| Subnet | Network | First | Last | Broadcast | Hosts |
|--------|---------|-------|------|-----------|-------|
| 1      | .0      | .1    | .62  | .63       | 62    |
| 2      | .64     | .65   | .126 | .127      | 62    |
| 3      | .128    | .129  | .190 | .191      | 62    |
| 4      | .192    | .193  | .254 | .255      | 62    |

</details>

<details>
<summary>Part 2: Problem 3 (8 Subnets) - Expand for Answer</summary>

**Solution:**
- Borrow: 3 bits
- New CIDR: /27
- Mask: 255.255.255.224
- Magic: 32

| Subnet | Network | First | Last | Broadcast | Hosts |
|--------|---------|-------|------|-----------|-------|
| 1      | .0      | .1    | .30  | .31       | 30    |
| 2      | .32     | .33   | .62  | .63       | 30    |
| 3      | .64     | .65   | .94  | .95       | 30    |
| 4      | .96     | .97   | .126 | .127      | 30    |
| 5      | .128    | .129  | .158 | .159      | 30    |
| 6      | .160    | .161  | .190 | .191      | 30    |
| 7      | .192    | .193  | .222 | .223      | 30    |
| 8      | .224    | .225  | .254 | .255      | 30    |

</details>

<details>
<summary>Part 2: Problem 4 (16 Subnets) - Expand for Answer</summary>

**Solution:**
- Borrow: 4 bits
- New CIDR: /28
- Mask: 255.255.255.240
- Magic: 16
- Hosts per subnet: 14

**Networks:** .0, .16, .32, .48, .64, .80, .96, .112, .128, .144, .160, .176, .192, .208, .224, .240

</details>

<details>
<summary>Part 3: IP Mapping Scenario A - Expand for Answers</summary>

Magic number: 64, Subnets: .0, .64, .128, .192

| IP | Subnet | Range |
|----|--------|-------|
| .10  | .0/26  | .1-.62 |
| .75  | .64/26 | .65-.126 |
| .100 | .64/26 | .65-.126 |
| .150 | .128/26| .129-.190 |
| .200 | .192/26| .193-.254 |
| .250 | .192/26| .193-.254 |

</details>

<details>
<summary>Part 4: Headquarters Design - Sample Solution</summary>

**Decision:** /26 (4 subnets, 62 hosts each)
- Mask: 255.255.255.192
- Magic: 64

**Floor 1:** 192.168.10.0/26 (.1-.62, broadcast .63)
**Floor 2:** 192.168.10.64/26 (.65-.126, broadcast .127)
**Floor 3:** 192.168.10.128/26 (.129-.190, broadcast .191)
**Floor 4:** 192.168.10.192/26 (.193-.254, broadcast .255)

</details>

<details>
<summary>Part 6: Error Corrections - Expand for Answers</summary>

**Error 1:** Broadcasts should be .63, .127, .191, .255 (not .64, .128, .192, .256)

**Error 2:** /26 creates 4 subnets, not 8. Need /27 for 8 subnets.

**Error 3:** .0 is network (use .1+), .31 is broadcast (use .30 or less)

**Error 4:** /27 = 30 hosts (insufficient). Need /26 (62 hosts) for 40 devices.

</details>

---

## 📚 Submission Checklist

Before completing this lab, ensure you've:

- [ ] Completed all magic number drills in Part 1
- [ ] Solved all four subnetting problems in Part 2
- [ ] Mapped IP addresses to subnets in Part 3
- [ ] Designed the headquarters network in Part 4
- [ ] Analyzed the branch office scenario in Part 5
- [ ] Found and fixed all errors in Part 6
- [ ] Created the complete design in Part 7 (optional)
- [ ] Checked answers against the answer key
- [ ] Understood WHY each answer is correct

---

## 🎓 Lab Reflection

**Self-Assessment:**

1. **Time taken to complete basic problems (Part 2):** ________ minutes

2. **Accuracy rate before checking answers:** ________%

3. **Which part was most challenging?**

4. **What subnetting concept finally "clicked" for you?**

5. **Rate your confidence (1-10):** ________
   - Calculating magic numbers: ____/10
   - Borrowing correct number of bits: ____/10
   - Finding network addresses: ____/10
   - Finding broadcast addresses: ____/10
   - Identifying usable ranges: ____/10

---

## 🚀 Speed Goals

**Target times for exam readiness:**

| Task | Beginner | Intermediate | Expert |
|------|----------|--------------|--------|
| Magic number calculation | 10 sec | 5 sec | 2 sec |
| Divide /24 into 4 subnets | 5 min | 3 min | 90 sec |
| Divide /24 into 8 subnets | 8 min | 5 min | 2 min |
| IP to subnet mapping | 30 sec | 15 sec | 5 sec |

**Practice Strategy:**
- Do 5 problems per day
- Time yourself
- Track improvement
- Aim for "Intermediate" before exam day

---

## 🎯 What You've Accomplished

By completing this lab, you've:

✅ Mastered the Magic Number method  
✅ Practiced dividing networks into 2, 4, 8, and 16 subnets  
✅ Learned to map IP addresses to their subnets  
✅ Designed real multi-floor and multi-site networks  
✅ Identified and corrected common subnetting mistakes  
✅ Built speed and confidence for the exam

**You're now ready for Lesson 6: Advanced Subnetting & VLSM!**

This lab solidified your equal-sized subnetting skills. In the next lesson, we'll learn Variable Length Subnet Masking (VLSM)—the technique that lets you create subnets of different sizes for maximum efficiency.

**Outstanding work! 🎉**
