# Lab 6: VLSM Network Design Challenge

**Lab Time:** 30-40 minutes  
**Difficulty:** Intermediate  
**Skills:** VLSM design, IP addressing, documentation

---

## Lab Objective

Design a complete VLSM IP addressing scheme for TechStart Inc., a growing technology company that just leased a new 3-floor office building. You'll need to allocate subnets efficiently, document your design, and verify there are no overlaps.

---

## Scenario

**Company:** TechStart Inc. - Software Development & IT Services  
**Location:** New 3-floor office building + remote sites  
**Network Assignment:** 172.20.0.0/22 (your ISP gave you this private range)  
**Router:** Cisco router with Internet connection

Your boss wants an efficient IP addressing scheme that:
- Matches each department's needs (no massive waste)
- Leaves room for 30% growth per department
- Follows industry best practices
- Is well-documented for future techs

---

## Network Requirements

### Building - Floor 1
- **Sales Department:** 120 employees (desktops + laptops)
- **Customer Support:** 40 employees (desktops + VoIP phones)
- **Conference Rooms:** 20 devices (laptops + displays)

### Building - Floor 2
- **Engineering Department:** 80 employees (workstations + build servers)
- **QA/Testing Lab:** 30 devices (test servers + VMs)
- **Marketing Department:** 25 employees (desktops + design workstations)

### Building - Floor 3
- **Executive Offices:** 15 employees (desktops + tablets)
- **HR Department:** 10 employees (desktops)
- **Finance Department:** 8 employees (desktops + laptops)

### Infrastructure
- **Data Center:** 50 devices (servers, storage, switches)
- **Network Equipment VLAN:** 20 devices (switches, APs, controllers)
- **Guest Wi-Fi:** 100 devices (visitor laptops + phones)
- **Security Cameras:** 30 devices (IP cameras)
- **Printers VLAN:** 15 network printers

### WAN Links
- **Link to Cloud Provider:** Point-to-point
- **Link to Backup Site:** Point-to-point
- **Link to Branch Office:** Point-to-point

---

## Your Task

### Part 1: Calculate Subnet Requirements (10 min)

For each department/area above:

1. Calculate the number of hosts needed
2. Add 30% for growth (round up)
3. Add 2 for network + broadcast addresses
4. Find the next power of 2
5. Determine the subnet mask

**Example:**
```
Sales: 120 employees
Growth: 120 × 1.30 = 156 hosts needed
Plus 2: 156 + 2 = 158 total addresses
Next power of 2: 256 (2^8)
Subnet mask: 32 - 8 = /24 (255.255.255.0)
```

Create a table like this:

| Department | Current | +30% Growth | +2 | Power of 2 | Subnet Mask |
|------------|---------|-------------|-----|------------|-------------|
| Sales | 120 | 156 | 158 | 256 | /24 |
| ... | ... | ... | ... | ... | ... |

---

### Part 2: Sort and Design VLSM Scheme (15 min)

1. **Sort your requirements from LARGEST to SMALLEST**
   - This is critical! Don't skip this step.

2. **Start allocating from 172.20.0.0/22**
   - Remember: /22 gives you 172.20.0.0 through 172.20.3.255 (1024 addresses)

3. **Allocate each subnet sequentially:**
   ```
   Largest: 172.20.0.0/24
   Next: 172.20.1.0/25
   Next: 172.20.1.128/26
   ... and so on
   ```

4. **For each subnet, document:**
   - Network address
   - Subnet mask (CIDR and dotted decimal)
   - First usable host
   - Last usable host
   - Broadcast address
   - Number of usable hosts
   - Purpose/Department

**Pro Tip:** Use the "magic number" method to find the next subnet:
- /24 = increment by 1 in the third octet
- /25 = increment by 128 in the fourth octet
- /26 = increment by 64
- /27 = increment by 32
- /28 = increment by 16
- /29 = increment by 8
- /30 = increment by 4

---

### Part 3: Create Network Documentation (10 min)

Create a clean, professional IPAM (IP Address Management) document:

**Use this template:**

```
TECHSTART INC. - IP ADDRESSING SCHEME
Allocated Range: 172.20.0.0/22
Design Date: [Today's Date]
Designer: [Your Name]

=======================================================
SUBNET ALLOCATION TABLE
=======================================================

Dept/Purpose          | Network Address  | Mask | Usable Range          | Gateway      | VLAN
--------------------- | ---------------- | ---- | --------------------- | ------------ | ----
Sales                 | 172.20.0.0/24    | /24  | .1 - .254 (254 hosts) | 172.20.0.1   | 10
Customer Support      | 172.20.1.0/26    | /26  | .1 - .62 (62 hosts)   | 172.20.1.1   | 20
... (continue for all)

=======================================================
WAN LINKS
=======================================================

Link Purpose          | Network Address  | Router A IP   | Router B IP   | Subnet Mask
--------------------- | ---------------- | ------------- | ------------- | ------------
To Cloud Provider     | 172.20.x.x/30    | 172.20.x.x    | 172.20.x.x    | /30
... (continue)

=======================================================
SPECIAL ADDRESSES
=======================================================

DNS Servers: [To be configured]
NTP Servers: [To be configured]
DHCP Servers: [To be configured]
Default Gateways: [.1 of each subnet]

=======================================================
ADDRESS SPACE USAGE
=======================================================

Total Available: 1024 addresses (172.20.0.0/22)
Total Allocated: [Calculate this]
Remaining Available: [Calculate this]
Utilization: [Calculate percentage]

=======================================================
VLSM DESIGN NOTES
=======================================================

- All departments sized for 30% growth
- WAN links use /30 (most efficient)
- Guest Wi-Fi isolated on separate VLAN
- Security cameras on separate VLAN for security
- Room for future expansion: [X addresses remaining]
```

---

### Part 4: Verification Checklist (5 min)

Before submitting your design, verify:

- [ ] All requirements are met (every department has a subnet)
- [ ] Subnets are sorted largest to smallest
- [ ] No subnet overlaps (check boundaries carefully!)
- [ ] All subnets fit within 172.20.0.0/22
- [ ] WAN links use /30
- [ ] Each subnet has room for 30% growth
- [ ] Gateways are .1 of each subnet
- [ ] VLAN IDs assigned logically
- [ ] Documentation is complete and professional
- [ ] You have unused address space for future growth

**Overlap Check Tool:**  
For each subnet, verify the NEXT subnet starts AFTER the previous one ends.

Example:
```
✓ Correct:
  172.20.0.0/24 (ends at .255)
  172.20.1.0/25 (starts at 1.0) ← OK!

❌ Wrong:
  172.20.0.0/24 (ends at .255)
  172.20.0.128/25 (starts at 0.128) ← OVERLAP!
```

---

## Deliverables

Submit the following:

1. **Calculation table** showing your power-of-2 calculations
2. **Complete IPAM document** with all subnets allocated
3. **Network diagram** (draw in draw.io or on paper):
   - Show 3 floors
   - Show router connecting to Internet
   - Label each subnet with its network address
   - Show WAN links

---

## Bonus Challenges (Optional)

Want to level up? Try these:

### Challenge 1: Route Summarization
If you were to advertise your entire TechStart network to another site, what single summary route would you use? Show your binary math.

### Challenge 2: Redundancy Design
Design a second VLSM scheme using 172.20.4.0/22 for a backup/disaster recovery site that mirrors your main site.

### Challenge 3: IPv6 Planning
TechStart just got assigned 2001:db8:cafe::/48. Design a parallel IPv6 scheme where each IPv4 subnet has a corresponding /64 IPv6 subnet. (We'll learn more about IPv6 in Lesson 7!)

---

## Common Mistakes to Avoid

❌ **Not sorting largest to smallest** → You'll run out of space  
❌ **Forgetting to add 30% growth** → Future pain when company expands  
❌ **Not checking for overlaps** → Routing chaos in production  
❌ **Using /24 for everything** → Massive waste of addresses  
❌ **Forgetting network + broadcast** → Subnet too small by 2 hosts  
❌ **Not leaving room for future growth** → Have to re-IP later  

---

## Tools You Can Use

**Online VLSM Calculators (for verification only!):**
- SolarWinds Subnet Calculator
- subnet-calculator.com
- ipcalc.org

**Drawing Tools:**
- draw.io (free, web-based)
- Microsoft Visio
- Lucidchart
- Even pencil and paper!

**Spreadsheet:**
- Excel, Google Sheets, or LibreOffice Calc
- Great for organizing your calculations

---

## Real-World Context

This lab mirrors what network engineers do when designing enterprise networks:

1. **Requirements gathering** - Understanding what each department needs
2. **Capacity planning** - Adding growth room (usually 30-50%)
3. **VLSM design** - Efficiently allocating address space
4. **Documentation** - Creating IPAM records for operations
5. **Verification** - Checking for errors before deployment

In a real company, a mistake here means:
- Re-IPing hundreds of devices (massive downtime)
- Routing problems causing intermittent failures
- Security issues from improper segmentation
- Angry users and costly troubleshooting

Take your time, double-check your work, and make it right!

---
- Keep it in your certification portfolio
- Review it before your Network+ exam
- Show it in job interviews as proof of skills!

---

## After Completion

**Reflect on these questions:**

1. How much address space did you have left over? Is that enough for future growth?
2. Which departments were easiest to size? Which were hardest?
3. If Sales doubled in size, would your design accommodate them?
4. What would you do differently if you had to design it again?
5. How would this design change if you were using 10.0.0.0/16 instead?

**Next Steps:**
- Review your work with the answer key (see solutions PDF)
- Try redesigning with different requirements
- Practice VLSM on other networks (192.168.0.0/16, 10.0.0.0/8)
- Move on to Lesson 7: IPv6 Addressing

---

## Lab Complete! 🎉

Great job designing a professional VLSM scheme! This is a real-world skill that employers value. Keep your documentation in your portfolio - it's proof you can design networks, not just talk about them.

**Skills You Practiced:**
✅ Requirements analysis  
✅ VLSM subnet calculations  
✅ Sequential subnet allocation  
✅ Network documentation  
✅ Best practices application  
✅ Verification and troubleshooting

**Ready for the next lab?** Head back to the lesson dashboard!

---

*Note: A sample solution will be provided after you complete your design. Don't peek early - you'll learn more by trying it yourself first!*
