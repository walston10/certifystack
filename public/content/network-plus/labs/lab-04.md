# Lab 4: Subnet Mask Mastery Challenge

**Duration:** 30-40 minutes  
**Difficulty:** Beginner to Intermediate  
**Prerequisites:** Complete Lesson 4: Subnet Masks and CIDR Notation

---

## 🎯 Lab Objectives

By completing this lab, you will:
- Master converting between CIDR notation and dotted decimal format
- Calculate usable hosts for any given subnet mask
- Identify network addresses, broadcast addresses, and usable ranges
- Apply subnet mask concepts to real-world network design
- Troubleshoot subnet mask configuration issues

---

## 🛠️ Tools Required

**Option 1 (Recommended):** Spreadsheet software
- Google Sheets (free, online)
- Microsoft Excel
- LibreOffice Calc

**Option 2:** Subnet calculator (for verification only!)
- Online subnet calculator (to check your answers)
- **Important:** Try to solve problems manually first!

**Option 3:** Paper and calculator
- Good old-fashioned method that builds mental math skills

---

## 📋 Lab Scenario

You've just been promoted to Junior Network Engineer at GlobalTech Solutions. Your first assignment is to help the senior engineer audit and redesign the company's subnet structure across multiple office locations. The existing setup is inconsistent, and management wants a standardized, efficient IP addressing scheme.

**Your Tasks:**
1. Analyze existing subnet configurations
2. Calculate capacity and efficiency
3. Identify misconfigurations
4. Design optimal subnet allocations
5. Document your recommendations

---

## 🏋️ Part 1: CIDR ↔ Dotted Decimal Conversion Drills

Practice makes perfect! Convert each of these subnet masks.

### Section A: CIDR to Dotted Decimal

For each CIDR notation, write the equivalent dotted decimal subnet mask:

| CIDR | Dotted Decimal | Network Bits | Host Bits | Usable Hosts |
|------|----------------|--------------|-----------|--------------|
| /24  |                |              |           |              |
| /25  |                |              |           |              |
| /26  |                |              |           |              |
| /27  |                |              |           |              |
| /28  |                |              |           |              |
| /29  |                |              |           |              |
| /30  |                |              |           |              |
| /20  |                |              |           |              |
| /22  |                |              |           |              |
| /16  |                |              |           |              |

**Challenge Questions:**
1. Which mask provides exactly 2 usable hosts?
2. Which mask would you use for a network requiring 100 hosts?
3. Which mask wastes the most IPs for a 50-host network?

---

### Section B: Dotted Decimal to CIDR

Convert these subnet masks to CIDR notation:

| Dotted Decimal | CIDR | Method (show your work) |
|----------------|------|-------------------------|
| 255.255.255.0   |      |                         |
| 255.255.255.128 |      |                         |
| 255.255.255.192 |      |                         |
| 255.255.255.224 |      |                         |
| 255.255.255.240 |      |                         |
| 255.255.255.248 |      |                         |
| 255.255.255.252 |      |                         |
| 255.255.0.0     |      |                         |
| 255.255.252.0   |      |                         |
| 255.240.0.0     |      |                         |

**Tip:** Convert the "interesting" octet to binary and count the 1s!

---

## 🔢 Part 2: Usable Hosts Calculation Marathon

Calculate the usable hosts for each network. Show your formula work!

### Quick Reference Formula:
**Usable Hosts = 2^(host bits) - 2**

| Network CIDR | Host Bits (32 - network bits) | Calculation | Usable Hosts |
|--------------|-------------------------------|-------------|--------------|
| /24          |                               |             |              |
| /25          |                               |             |              |
| /26          |                               |             |              |
| /27          |                               |             |              |
| /28          |                               |             |              |
| /29          |                               |             |              |
| /30          |                               |             |              |
| /23          |                               |             |              |
| /21          |                               |             |              |
| /19          |                               |             |              |

**Challenge Scenarios:**
1. You need exactly 500 hosts. What's the most efficient subnet mask?
2. You have 14 hosts. What mask should you use?
3. You're connecting two routers. What mask is optimal?

---

## 🎯 Part 3: Network Analysis - Complete Subnet Breakdown

For each network below, identify ALL four key addresses:

### Network 1: 192.168.10.0/24

```
Subnet Mask (dotted decimal):  ___________________
Network Bits:                  ___________________
Host Bits:                     ___________________
Total IP Addresses:            ___________________

Network Address:               ___________________
First Usable Host:             ___________________
Last Usable Host:              ___________________
Broadcast Address:             ___________________
Usable Hosts:                  ___________________
```

---

### Network 2: 172.16.50.0/26

```
Subnet Mask (dotted decimal):  ___________________
Network Bits:                  ___________________
Host Bits:                     ___________________
Total IP Addresses:            ___________________

Network Address:               ___________________
First Usable Host:             ___________________
Last Usable Host:              ___________________
Broadcast Address:             ___________________
Usable Hosts:                  ___________________
```

---

### Network 3: 10.20.30.0/28

```
Subnet Mask (dotted decimal):  ___________________
Network Bits:                  ___________________
Host Bits:                     ___________________
Total IP Addresses:            ___________________

Network Address:               ___________________
First Usable Host:             ___________________
Last Usable Host:              ___________________
Broadcast Address:             ___________________
Usable Hosts:                  ___________________
```

---

### Network 4: 192.168.100.64/27

```
Subnet Mask (dotted decimal):  ___________________
Network Bits:                  ___________________
Host Bits:                     ___________________
Total IP Addresses:            ___________________

Network Address:               ___________________
First Usable Host:             ___________________
Last Usable Host:              ___________________
Broadcast Address:             ___________________
Usable Hosts:                  ___________________
```

**Critical Thinking:** Why is Network 4's network address 192.168.100.64 instead of .0?

---

## 🚨 Part 4: Troubleshooting Subnet Misconfigurations

GlobalTech's network has several configuration issues. Analyze each scenario and identify the problem.

### Scenario 1: Communication Failure

**Device A:**
- IP Address: 192.168.1.50
- Subnet Mask: 255.255.255.0

**Device B:**
- IP Address: 192.168.1.200
- Subnet Mask: 255.255.255.128

**Problem:** Device A can't communicate with Device B.

**Your Analysis:**
1. What is Device A's network address?
2. What is Device B's network address?
3. Are they on the same network?
4. What's causing the problem?
5. How would you fix it?

---

### Scenario 2: IP Address Conflict

**Network:** 10.0.5.0/27

**Assigned IPs:**
- Server: 10.0.5.0
- Workstation 1: 10.0.5.1
- Workstation 2: 10.0.5.31
- Printer: 10.0.5.15

**Problems reported:**
- The server isn't accessible
- Workstation 2 intermittently loses connectivity

**Your Analysis:**
1. What is the network address for this subnet?
2. What is the broadcast address?
3. Which IPs are incorrectly assigned?
4. Why are they incorrect?
5. What IPs should be used instead?

---

### Scenario 3: Insufficient Capacity

**Network:** 192.168.50.0/28  
**Requirements:** 20 devices (computers, printers, phones)

**Your Analysis:**
1. How many usable hosts does /28 provide?
2. Is this subnet mask sufficient?
3. If not, what's the minimum CIDR that would work?
4. How many IPs would be wasted with your recommendation?
5. What's the trade-off between efficiency and growth?

---

### Scenario 4: Wasteful Allocation

**Network:** 172.16.10.0/24  
**Actual Usage:** Only 10 devices connected

**Your Analysis:**
1. How many usable hosts does this network provide?
2. How many hosts are being wasted?
3. What's a more efficient subnet mask?
4. What are the pros and cons of right-sizing vs over-provisioning?

---

## 🎨 Part 5: Design Challenge - Multi-Department Network

GlobalTech is opening a new office with four departments. Design an efficient IP addressing scheme.

**Given:**
- Base Network: 192.168.100.0/24
- You must divide this into 4 department subnets

**Department Requirements:**
1. **Sales:** 50 devices
2. **Engineering:** 25 devices
3. **HR:** 10 devices
4. **Management:** 5 devices

**Your Task:**
Design a subnet allocation that:
- Meets each department's needs
- Allows for 30% growth
- Minimizes IP waste
- Doesn't overlap

### Your Design:

**Sales Department:**
```
Subnet:              ___________________
Subnet Mask:         ___________________
CIDR:                ___________________
Network Address:     ___________________
Usable Range:        ___________________ to ___________________
Broadcast:           ___________________
Usable Hosts:        ___________________
Growth Capacity:     ___________________ (current + 30%)
```

**Engineering Department:**
```
Subnet:              ___________________
Subnet Mask:         ___________________
CIDR:                ___________________
Network Address:     ___________________
Usable Range:        ___________________ to ___________________
Broadcast:           ___________________
Usable Hosts:        ___________________
Growth Capacity:     ___________________ (current + 30%)
```

**HR Department:**
```
Subnet:              ___________________
Subnet Mask:         ___________________
CIDR:                ___________________
Network Address:     ___________________
Usable Range:        ___________________ to ___________________
Broadcast:           ___________________
Usable Hosts:        ___________________
Growth Capacity:     ___________________ (current + 30%)
```

**Management Department:**
```
Subnet:              ___________________
Subnet Mask:         ___________________
CIDR:                ___________________
Network Address:     ___________________
Usable Range:        ___________________ to ___________________
Broadcast:           ___________________
Usable Hosts:        ___________________
Growth Capacity:     ___________________ (current + 30%)
```

**Design Questions:**
1. Did you assign larger subnets first or last? Why?
2. How did you handle the 30% growth requirement?
3. What would you do differently if Sales needed 200 devices?
4. Explain your rationale for each subnet size choice.

---

## 🧪 Part 6: Subnet Mask Identification Game

Look at these IP configurations and identify issues:

### Configuration 1:
```
IP: 10.50.100.75
Mask: 255.255.255.192
Gateway: 10.50.100.1
```
**Questions:**
- What network is this IP on?
- Is the gateway on the same network?
- Will this work? Why or why not?

---

### Configuration 2:
```
IP: 172.20.50.130
Mask: 255.255.255.128
Gateway: 172.20.50.129
```
**Questions:**
- What's the network address?
- What's the broadcast address?
- Is this configuration valid?

---

### Configuration 3:
```
IP: 192.168.1.254
Mask: 255.255.255.252
Gateway: 192.168.1.253
```
**Questions:**
- How many usable hosts in this network?
- Is 192.168.1.254 a valid host IP?
- What's wrong (if anything)?

---

### Configuration 4:
```
Device A: 10.0.0.50 / 255.255.255.240
Device B: 10.0.0.65 / 255.255.255.240
```
**Questions:**
- Can these devices communicate directly?
- What are their respective network addresses?
- If they can't communicate, why not?

---

## ✅ Answer Key & Grading Rubric

<details>
<summary>Part 1A: CIDR to Dotted Decimal - Expand for Answers</summary>

| CIDR | Dotted Decimal | Network Bits | Host Bits | Usable Hosts |
|------|----------------|--------------|-----------|--------------|
| /24  | 255.255.255.0   | 24           | 8         | 254          |
| /25  | 255.255.255.128 | 25           | 7         | 126          |
| /26  | 255.255.255.192 | 26           | 6         | 62           |
| /27  | 255.255.255.224 | 27           | 5         | 30           |
| /28  | 255.255.255.240 | 28           | 4         | 14           |
| /29  | 255.255.255.248 | 29           | 3         | 6            |
| /30  | 255.255.255.252 | 30           | 2         | 2            |
| /20  | 255.255.240.0   | 20           | 12        | 4094         |
| /22  | 255.255.252.0   | 22           | 10        | 1022         |
| /16  | 255.255.0.0     | 16           | 16        | 65534        |

**Challenge Answers:**
1. /30 provides exactly 2 usable hosts
2. /25 (126 hosts) - just enough with minimal waste
3. /24 (254 hosts) wastes 204 IPs for 50 hosts
</details>

<details>
<summary>Part 1B: Dotted Decimal to CIDR - Expand for Answers</summary>

| Dotted Decimal | CIDR | Binary (last octet) |
|----------------|------|---------------------|
| 255.255.255.0   | /24  | 00000000           |
| 255.255.255.128 | /25  | 10000000           |
| 255.255.255.192 | /26  | 11000000           |
| 255.255.255.224 | /27  | 11100000           |
| 255.255.255.240 | /28  | 11110000           |
| 255.255.255.248 | /29  | 11111000           |
| 255.255.255.252 | /30  | 11111100           |
| 255.255.0.0     | /16  | N/A (third octet)  |
| 255.255.252.0   | /22  | 11111100 (third)   |
| 255.240.0.0     | /12  | 11110000 (second)  |
</details>

<details>
<summary>Part 2: Usable Hosts - Expand for Answers</summary>

| Network | Host Bits | Calculation | Usable Hosts |
|---------|-----------|-------------|--------------|
| /24     | 8         | 2^8 - 2     | 254          |
| /25     | 7         | 2^7 - 2     | 126          |
| /26     | 6         | 2^6 - 2     | 62           |
| /27     | 5         | 2^5 - 2     | 30           |
| /28     | 4         | 2^4 - 2     | 14           |
| /29     | 3         | 2^3 - 2     | 6            |
| /30     | 2         | 2^2 - 2     | 2            |
| /23     | 9         | 2^9 - 2     | 510          |
| /21     | 11        | 2^11 - 2    | 2046         |
| /19     | 13        | 2^13 - 2    | 8190         |

**Challenge Answers:**
1. 500 hosts needs /23 (510 hosts) - most efficient
2. 14 hosts needs /28 (14 hosts) - perfect fit!
3. Two routers need /30 (2 hosts) - optimal
</details>

<details>
<summary>Part 3: Network Analysis - Expand for Answers</summary>

**Network 1: 192.168.10.0/24**
- Mask: 255.255.255.0
- Network: 192.168.10.0
- First Usable: 192.168.10.1
- Last Usable: 192.168.10.254
- Broadcast: 192.168.10.255
- Usable: 254

**Network 2: 172.16.50.0/26**
- Mask: 255.255.255.192
- Network: 172.16.50.0
- First Usable: 172.16.50.1
- Last Usable: 172.16.50.62
- Broadcast: 172.16.50.63
- Usable: 62

**Network 3: 10.20.30.0/28**
- Mask: 255.255.255.240
- Network: 10.20.30.0
- First Usable: 10.20.30.1
- Last Usable: 10.20.30.14
- Broadcast: 10.20.30.15
- Usable: 14

**Network 4: 192.168.100.64/27**
- Mask: 255.255.255.224
- Network: 192.168.100.64
- First Usable: 192.168.100.65
- Last Usable: 192.168.100.94
- Broadcast: 192.168.100.95
- Usable: 30
- *Network starts at .64 because this is the third /27 subnet*
</details>

<details>
<summary>Part 4: Troubleshooting - Expand for Answers</summary>

**Scenario 1:**
- Device A network: 192.168.1.0/24
- Device B network: 192.168.1.128/25 (different!)
- They're on different networks due to mismatched masks
- Fix: Set both to 255.255.255.0 (/24)

**Scenario 2:**
- Network: 10.0.5.0
- Broadcast: 10.0.5.31
- Issues: Server has network address (.0), Workstation 2 has broadcast (.31)
- Fix: Server → 10.0.5.1, Workstation 2 → any IP from .2-.30

**Scenario 3:**
- /28 provides only 14 hosts (insufficient for 20)
- Need minimum /27 (30 hosts)
- Wastes 10 IPs
- Trade-off: Efficiency vs growth room

**Scenario 4:**
- /24 provides 254 hosts (244 wasted!)
- More efficient: /28 (14 hosts) or /27 (30 hosts)
- Consider: Right-sizing saves IPs but limits growth
</details>

<details>
<summary>Part 5: Design Sample Solution - Expand to View</summary>

**Recommended Approach:** Allocate largest first

**Sales (needs 50, allow 65):**
- Subnet: 192.168.100.0/26
- Usable: 62 hosts
- Range: .1 to .62
- Broadcast: .63

**Engineering (needs 25, allow 33):**
- Subnet: 192.168.100.64/26
- Usable: 62 hosts
- Range: .65 to .126
- Broadcast: .127

**HR (needs 10, allow 13):**
- Subnet: 192.168.100.128/28
- Usable: 14 hosts
- Range: .129 to .142
- Broadcast: .143

**Management (needs 5, allow 7):**
- Subnet: 192.168.100.144/29
- Usable: 6 hosts
- Range: .145 to .150
- Broadcast: .151

*Alternative valid solutions exist!*
</details>

<details>
<summary>Part 6: Identification Game - Expand for Answers</summary>

**Configuration 1:**
- Network: 10.50.100.0/26 (.0 to .63)
- Gateway .1 is on same network ✅
- Valid configuration

**Configuration 2:**
- Network: 172.20.50.128/25 (.128 to .255)
- Broadcast: 172.20.50.255
- Gateway .129 is on same network ✅
- Valid configuration

**Configuration 3:**
- /30 has 2 usable hosts (.1 and .2)
- Network: 192.168.1.252
- .253 = first usable, .254 = second usable
- **Problem:** This is actually the BROADCAST address of a /30!
- Should be network .252, usable .253-.254, broadcast .255

**Configuration 4:**
- Device A: 10.0.0.48/28 (network .48, range .49-.62, broadcast .63)
- Device B: 10.0.0.64/28 (network .64, range .65-.78, broadcast .79)
- **No!** Different networks, cannot communicate directly
</details>

---

## 📚 Submission Checklist

Before completing this lab, ensure you've:

- [ ] Completed all CIDR ↔ decimal conversions in Part 1
- [ ] Calculated usable hosts for all networks in Part 2
- [ ] Analyzed all four networks in Part 3
- [ ] Troubleshooted all scenarios in Part 4
- [ ] Designed the multi-department network in Part 5
- [ ] Identified issues in all configurations in Part 6
- [ ] Checked your answers against the answer key
- [ ] Understood WHY answers are correct, not just that they are

---

## 🎓 Lab Reflection

Answer these questions to consolidate your learning:

1. **Which part was most challenging? Why?**

2. **What's your process for converting CIDR to dotted decimal now?**

3. **Can you calculate usable hosts in your head for /24-/30?**

4. **What real-world scenario made subnet masks "click" for you?**

5. **What would you teach differently if explaining this to someone else?**

---

## 🚀 Extra Credit Challenges

Want to push yourself further?

1. **Calculator Ban:** Redo Part 2 without a calculator. Time yourself!

2. **Speed Challenge:** Convert /24 through /30 to dotted decimal in under 60 seconds.

3. **Reverse Engineering:** Given 192.168.50.75/27, determine which subnet this IP belongs to (network address).

4. **Real-World Application:** Examine your home network. Document your IP, mask, gateway, and draw a subnet diagram.

5. **Efficiency Analysis:** For the Part 5 design, calculate total IP waste percentage across all four departments.

---

## 📊 Grading Rubric

**Total Points: 100**

- Part 1 (Conversions): 20 points
- Part 2 (Usable Hosts): 15 points
- Part 3 (Network Analysis): 20 points
- Part 4 (Troubleshooting): 20 points
- Part 5 (Design Challenge): 15 points
- Part 6 (Identification): 10 points

**Grading Scale:**
- 90-100: Expert - Ready for Lesson 5
- 80-89: Proficient - Review weak areas, then proceed
- 70-79: Developing - Re-study Lesson 4 before moving on
- Below 70: Needs improvement - Schedule review session

---

## 🎯 What You've Accomplished

By completing this lab, you've:

✅ Mastered CIDR notation and dotted decimal conversions  
✅ Calculated usable hosts like a pro  
✅ Identified network boundaries and key addresses  
✅ Troubleshot real-world subnet issues  
✅ Designed efficient multi-subnet networks  
✅ Developed critical thinking for subnet analysis

**You're now ready for Lesson 5: Subnetting Fundamentals!**

This lab gave you hands-on experience with the tools every network engineer uses daily. In the next lesson, we'll take these skills and learn to actively **divide** networks into smaller subnets—the real art of network design.

**Outstanding work! 🎉**
