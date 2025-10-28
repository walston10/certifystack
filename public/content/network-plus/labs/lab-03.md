# Lab 3: IP Address Classification Challenge

**Duration:** 30-40 minutes  
**Difficulty:** Beginner  
**Prerequisites:** Complete Lesson 3: IP Addressing Fundamentals

---

## 🎯 Lab Objectives

By completing this lab, you will:
- Practice identifying IP address classes by first octet
- Distinguish between public and private IP addresses
- Recognize special-purpose addresses (loopback, APIPA)
- Convert between decimal and binary notation
- Apply IP addressing concepts to real-world scenarios

---

## 🛠️ Tools Required

**Option 1 (Recommended):** Spreadsheet software
- Google Sheets (free, online)
- Microsoft Excel
- LibreOffice Calc

**Option 2:** Paper and pencil (old school but effective!)

**Option 3:** Command-line tools (advanced)
- Windows Command Prompt (ipconfig, ping)
- Linux/Mac Terminal (ifconfig, ip addr, ping)

---

## 📋 Lab Scenario

You're a junior network administrator at TechCorp, a mid-sized company with multiple offices. Your manager has asked you to audit the company's IP addressing scheme and identify any issues. You've been given a list of IP addresses currently in use across various departments and need to classify them, identify potential problems, and make recommendations.

**Your mission:**
1. Classify each IP address (Class A/B/C, public/private)
2. Identify special addresses (loopback, APIPA, etc.)
3. Flag any addressing issues
4. Make recommendations for improvement

---

## 🏋️ Part 1: IP Address Classification Matrix

Create a spreadsheet (or table) with the following columns:

| IP Address | Class | Public/Private | Valid? | Notes |
|------------|-------|----------------|--------|-------|
| | | | | |

Now classify each of the following IP addresses from TechCorp's network:

### Device List

1. **Executive Floor Router:** 172.16.5.1
2. **Marketing Department Laptop:** 192.168.10.55
3. **Server Room Mail Server:** 10.20.30.40
4. **CEO's Desktop:** 11.50.100.200
5. **Conference Room Printer:** 169.254.45.100
6. **Research Lab Workstation:** 172.32.10.5
7. **Guest WiFi Gateway:** 192.168.200.1
8. **IT Department Test Server:** 127.0.0.1
9. **HR Database Server:** 172.20.15.50
10. **Sales Department Laptop:** 10.150.75.200
11. **DNS Test Server:** 8.8.8.8
12. **Finance Department Desktop:** 192.168.1.150
13. **Engineering Workstation:** 172.31.255.254
14. **Warehouse Scanner:** 169.254.1.1
15. **Public Web Server:** 203.0.113.50

### Instructions for Part 1:

For each IP address, determine:
1. **Class:** A, B, C, D, or E (or N/A for special addresses)
2. **Public or Private:** Use RFC 1918 ranges
3. **Valid for host use?** Some addresses have special purposes
4. **Notes:** Add observations (e.g., "APIPA address - DHCP issue")

**Hint:** Remember the ranges:
- Class A: 1-126 (Private: 10.0.0.0/8)
- Class B: 128-191 (Private: 172.16.0.0/12)
- Class C: 192-223 (Private: 192.168.0.0/16)
- Special: 127.x.x.x (loopback), 169.254.x.x (APIPA)

---

## 🧮 Part 2: Binary Conversion Practice

Your manager wants to ensure you understand binary addressing for upcoming subnetting tasks. Convert these IP addresses to binary notation.

### Convert to Binary:

1. **192.168.1.1**
   - Octet 1 (192): ____________
   - Octet 2 (168): ____________
   - Octet 3 (1): ____________
   - Octet 4 (1): ____________

2. **10.0.0.1**
   - Octet 1 (10): ____________
   - Octet 2 (0): ____________
   - Octet 3 (0): ____________
   - Octet 4 (1): ____________

3. **172.16.254.1**
   - Octet 1 (172): ____________
   - Octet 2 (16): ____________
   - Octet 3 (254): ____________
   - Octet 4 (1): ____________

**Powers of 2 Reference:**
```
128  64  32  16  8  4  2  1
```

### Convert to Decimal:

4. **11000000.10101000.00000001.00000001**
   - Decimal: __________.__________.__________.__________

5. **00001010.00000000.00000000.00000001**
   - Decimal: __________.__________.__________.__________

**Hint:** Add up the values where you see a 1!

---

## 🚨 Part 3: Troubleshooting Scenario

You receive trouble tickets from users reporting network connectivity issues. Use your IP addressing knowledge to diagnose the problems.

### Ticket #1: Marketing Manager's Laptop
**Complaint:** "I can't access the internet, but I could yesterday!"  
**IP Address observed:** 169.254.50.100  
**Subnet Mask:** 255.255.0.0

**Questions:**
1. What type of address is this?
2. What does this indicate about the network?
3. What should you check first?
4. Is the user's computer able to communicate with other devices on the same subnet?

---

### Ticket #2: New Server Configuration
**Scenario:** IT team configured a new web server with IP address 172.32.15.10  
**Problem:** The server can't communicate with the internal private network (172.16.0.0/12)

**Questions:**
1. Is 172.32.15.10 in the private Class B range?
2. Why can't this server communicate with 172.16.x.x devices?
3. What IP range should the server use instead?

---

### Ticket #3: Guest WiFi Network
**Scenario:** You're setting up a guest WiFi network that should be completely isolated from the corporate network.  
**Corporate Network:** Uses 10.0.0.0/8  
**Proposed Guest Network:** 10.50.0.0/24

**Questions:**
1. Is this a good choice for guest WiFi? Why or why not?
2. What alternative private range would provide better isolation?
3. Suggest two IP ranges that would work well for guest networks.

---

### Ticket #4: Workstation Can't Access Local Resources
**Complaint:** "I can ping 127.0.0.1, but I can't access any network resources!"  
**IP Address:** 192.168.1.50  
**Default Gateway:** 192.168.1.1  
**DNS Server:** 192.168.1.1

**Questions:**
1. What does successfully pinging 127.0.0.1 tell you?
2. What does it mean if the user can't reach the gateway (192.168.1.1)?
3. What should you test next? (Provide three troubleshooting steps)

---

## 🎨 Part 4: Design Challenge - Multi-Office IP Scheme

TechCorp is expanding and needs an IP addressing plan for three new offices:

**Requirements:**
- **Headquarters:** Needs 500 device addresses (servers, desktops, printers, phones)
- **Branch Office 1:** Needs 100 device addresses
- **Branch Office 2:** Needs 50 device addresses
- All three offices should use private addressing
- Each office should have a separate IP range (not overlapping)

**Your Task:**
Design an IP addressing scheme for all three offices using private IP addresses.

**Deliverable:** Create a table like this:

| Office | IP Network Range | Private Range Used | Rationale |
|--------|------------------|-------------------|-----------|
| HQ | | (Class A/B/C?) | |
| Branch 1 | | (Class A/B/C?) | |
| Branch 2 | | (Class A/B/C?) | |

**Considerations:**
- Should you use the same private range class for all offices, or mix them?
- How do you ensure no overlap?
- What about future growth?
- Which private range (10.x.x.x, 172.16.x.x, or 192.168.x.x) is best for each?

**Bonus Challenge:** Explain how these three offices could communicate with each other if they're connected via VPN tunnels.

---

## 🧪 Part 5: Hands-On Command Line Practice

**Note:** This section requires access to a computer with network connectivity.

### Windows Users:

Open Command Prompt and run these commands:

1. **Display your current IP configuration:**
```bash
ipconfig
```
**Record your findings:**
- Your IP address: ____________
- Class: ____________
- Public or Private? ____________

2. **Display detailed IP information:**
```bash
ipconfig /all
```
**Find and record:**
- Default Gateway: ____________
- DNS Servers: ____________
- DHCP Server: ____________

3. **Test loopback:**
```bash
ping 127.0.0.1
```
**Result:** Did it work? ____________

4. **Test your default gateway:**
```bash
ping [your gateway IP]
```
**Result:** ____________

### Mac/Linux Users:

Open Terminal and run these commands:

1. **Display your IP configuration:**
```bash
ifconfig
# or on newer systems:
ip addr show
```

2. **Test loopback:**
```bash
ping -c 4 127.0.0.1
```

3. **View routing table:**
```bash
netstat -rn
# or:
ip route show
```

### Analysis Questions:

1. Is your computer using a private or public IP address?
2. If private, which RFC 1918 range is it using?
3. Can you identify your network's default gateway?
4. Based on your IP and gateway, are you on a Class A, B, or C network?

---

## 📊 Part 6: IP Address Pattern Recognition

Identify the patterns in these IP address groups and determine what they have in common:

### Group 1:
- 10.5.100.20
- 10.50.200.30
- 10.200.50.100

**Pattern:** ____________  
**Common characteristic:** ____________

---

### Group 2:
- 169.254.1.1
- 169.254.50.100
- 169.254.200.250

**Pattern:** ____________  
**Common characteristic:** ____________  
**What network issue do these indicate?** ____________

---

### Group 3:
- 172.16.0.1
- 172.20.5.10
- 172.31.255.254

**Pattern:** ____________  
**Common characteristic:** ____________  
**Are all of these private addresses?** ____________

---

### Group 4:
- 8.8.8.8
- 1.1.1.1
- 44.200.50.20

**Pattern:** ____________  
**Common characteristic:** ____________  
**Would you expect to see these inside a corporate network?** ____________

---

## ✅ Answer Key & Grading Rubric

<details>
<summary>Part 1: Classification Matrix - Expand to Check Answers</summary>

| IP Address | Class | Public/Private | Valid? | Notes |
|------------|-------|----------------|--------|-------|
| 172.16.5.1 | B | Private | Yes | Private Class B (RFC 1918) |
| 192.168.10.55 | C | Private | Yes | Private Class C (RFC 1918) |
| 10.20.30.40 | A | Private | Yes | Private Class A (RFC 1918) |
| 11.50.100.200 | A | Public | Yes | Public Class A |
| 169.254.45.100 | N/A | Special | No | APIPA - DHCP failed |
| 172.32.10.5 | B | Public | Yes | Public Class B (172.32 > 172.31) |
| 192.168.200.1 | C | Private | Yes | Private Class C |
| 127.0.0.1 | N/A | Special | No | Loopback address |
| 172.20.15.50 | B | Private | Yes | Private Class B |
| 10.150.75.200 | A | Private | Yes | Private Class A |
| 8.8.8.8 | A | Public | Yes | Google DNS (public) |
| 192.168.1.150 | C | Private | Yes | Private Class C |
| 172.31.255.254 | B | Private | Yes | Private Class B (172.16-31) |
| 169.254.1.1 | N/A | Special | No | APIPA - DHCP failed |
| 203.0.113.50 | C | Public | Yes | Public Class C |

**Issues Found:**
- Printer and scanner have APIPA addresses (169.254.x.x) - DHCP problem
- Test server using loopback (127.0.0.1) - not suitable for network access
- Research lab has public IP (172.32.10.5) when it should be private

</details>

<details>
<summary>Part 2: Binary Conversions - Expand to Check Answers</summary>

### Decimal to Binary:

1. **192.168.1.1**
   - 192 = 11000000
   - 168 = 10101000
   - 1 = 00000001
   - 1 = 00000001

2. **10.0.0.1**
   - 10 = 00001010
   - 0 = 00000000
   - 0 = 00000000
   - 1 = 00000001

3. **172.16.254.1**
   - 172 = 10101100
   - 16 = 00010000
   - 254 = 11111110
   - 1 = 00000001

### Binary to Decimal:

4. **11000000.10101000.00000001.00000001**
   - 192.168.1.1

5. **00001010.00000000.00000000.00000001**
   - 10.0.0.1

</details>

<details>
<summary>Part 3: Troubleshooting Answers - Expand to Check</summary>

**Ticket #1:**
1. APIPA (Automatic Private IP Addressing) - 169.254.x.x range
2. The computer cannot reach the DHCP server
3. Check: Is DHCP server running? Is network cable connected? Is there connectivity to DHCP server?
4. Yes, the user can communicate with other devices that also have APIPA addresses on the same physical segment

**Ticket #2:**
1. No! Private Class B is only 172.16.0.0 through 172.31.255.255
2. 172.32.x.x is a public address, not in the private range
3. Use an IP in the 172.16.0.0 to 172.31.255.255 range (e.g., 172.16.15.10)

**Ticket #3:**
1. No - guests would be on the same network as corporate users
2. Use a different private range: 192.168.x.x or 172.16.x.x
3. Examples: 192.168.200.0/24, 192.168.guest.0/24, or 172.16.100.0/24

**Ticket #4:**
1. TCP/IP stack is working (software is fine)
2. Physical network connectivity issue or gateway is down
3. Next steps: Ping default gateway (192.168.1.1), check cable connection, verify network adapter has link light, try pinging another local device

</details>

<details>
<summary>Part 4: Design Challenge - Sample Solution</summary>

**Recommended Solution:**

| Office | IP Network Range | Private Range | Rationale |
|--------|------------------|---------------|-----------|
| HQ | 10.0.0.0 - 10.0.1.255 | Class A Private | Needs 500 addresses; using 10.0.0.0/23 gives 510 usable hosts with room for growth |
| Branch 1 | 192.168.1.0 - 192.168.1.255 | Class C Private | Needs 100 addresses; 192.168.1.0/24 gives 254 hosts |
| Branch 2 | 192.168.2.0 - 192.168.2.255 | Class C Private | Needs 50 addresses; 192.168.2.0/24 gives 254 hosts with room for growth |

**Why this design:**
- No overlap between offices
- Each range has room for growth
- Uses different private ranges for easier management
- HQ uses Class A for scalability
- Branches use Class C for simplicity

**VPN Communication:** All three offices can communicate via site-to-site VPN tunnels. The router at each location connects to the other offices' routers, creating a private "intranet."

</details>

<details>
<summary>Part 6: Pattern Recognition - Answers</summary>

**Group 1:**
- Pattern: All start with 10
- Common: All private Class A addresses
- All RFC 1918 compliant

**Group 2:**
- Pattern: All start with 169.254
- Common: All APIPA addresses
- Indicates: DHCP failure - computers couldn't reach DHCP server

**Group 3:**
- Pattern: All start with 172, second octet between 16-31
- Common: All private Class B addresses (172.16.0.0/12 range)
- Yes, all private!

**Group 4:**
- Pattern: Various first octets (8, 1, 44)
- Common: All public IP addresses (commonly seen DNS servers)
- Typically used for internet services, not internal networks

</details>

---

## 📚 Submission Checklist

Before completing this lab, ensure you've:

- [ ] Classified all 15 IP addresses in Part 1
- [ ] Completed all binary conversions in Part 2
- [ ] Answered all troubleshooting scenarios in Part 3
- [ ] Designed the multi-office IP scheme in Part 4
- [ ] Performed hands-on command-line tests in Part 5
- [ ] Identified patterns in Part 6
- [ ] Checked your answers against the answer key

---

## 🎓 Lab Reflection

Answer these questions to consolidate your learning:

1. **What was the most challenging part of this lab?**

2. **Which IP addressing concept do you feel most confident about now?**

3. **What would you like more practice with?**

4. **How would you explain the difference between public and private IP addresses to a non-technical person?**

---

## 🚀 Extra Credit Challenges

If you want to go deeper:

1. **Research Assignment:** Look up your ISP's public IP range using WHOIS lookup tools. Is it Class A, B, or C?

2. **Network Discovery:** Use `arp -a` (Windows) or `ip neigh` (Linux) to see what other devices are on your local network. Classify their IPs.

3. **Subnetting Preview:** If HQ has the range 10.0.0.0/23 (510 hosts), how would you divide this into four equal departments? (This previews Lesson 5!)

4. **Historical Research:** Why did engineers choose 10.x.x.x, 172.16.x.x, and 192.168.x.x as the private ranges? What made these ranges special?


## 🎯 What You've Accomplished

By completing this lab, you've:

✅ Applied IP classification skills to real-world scenarios  
✅ Practiced binary conversions for networking  
✅ Diagnosed common IP addressing issues  
✅ Designed a multi-site IP addressing scheme  
✅ Used command-line tools for network discovery  
✅ Developed pattern recognition for IP troubleshooting

**You're now ready for Lesson 4: Subnet Masks and CIDR Notation!**

This lab gave you hands-on experience with the foundation of IP addressing. In the next lesson, we'll learn how to divide these networks into smaller, more manageable pieces using subnetting.

**Great work! 🎉**
