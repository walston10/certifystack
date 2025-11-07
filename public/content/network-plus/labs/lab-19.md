# Lab 19: High Availability and Redundancy
**Time:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain:** Network Operations (3.0)

## Lab Objectives
- Calculate availability percentages and downtime
- Identify single points of failure (SPOFs)
- Configure First Hop Redundancy Protocols
- Design load balancing strategies
- Implement link aggregation
- Plan redundant network architectures

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **Convert these "nines" to annual downtime:**
   99.9% = _____________ downtime/year
   99.99% = ____________ downtime/year
   99.999% = ___________ downtime/year

2. **What's the difference between HSRP, VRRP, and GLBP?**
   HSRP: ______________________________________________
   VRRP: ______________________________________________
   GLBP: ______________________________________________

3. **Active-Active vs Active-Passive load balancing:**
   Active-Active: _____________________________________
   Active-Passive: ____________________________________

4. **What does LACP stand for and what's its purpose?**
   _________________________________________________
   _________________________________________________

5. **Name three types of redundancy in a network:**
   • ________________________________________________
   • ________________________________________________
   • ________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Availability Calculations 📊
**Time:** 3 minutes

Calculate downtime for these availability levels:

| Availability % | Downtime/Year | Downtime/Month | Downtime/Week |
|---------------|---------------|----------------|---------------|
| 99% | | | |
| 99.5% | | | |
| 99.9% | | | |
| 99.95% | | | |
| 99.99% | | | |
| 99.999% | | | |

*Base: 365 days × 24 hours × 60 minutes = 525,600 minutes/year*

---

### Activity B: SPOF Identification 🔍
**Time:** 3 minutes

Identify SPOFs in this network design and propose solutions:

```
Internet → Router → Switch → Server
           ↓         ↓         ↓
          Power    Power     Power
```

| Component | Is it SPOF? | Redundancy Solution |
|-----------|------------|---------------------|
| Internet link | | |
| Router | | |
| Switch | | |
| Server | | |
| Power source | | |
| Cables | | |

---

### Activity C: HSRP Configuration Design 🔧
**Time:** 3 minutes

Design an HSRP configuration:

**Scenario:** Two routers providing gateway redundancy
- VLAN 10: 192.168.10.0/24
- Physical Router 1: 192.168.10.2
- Physical Router 2: 192.168.10.3

**Virtual IP:** _____________________________________
**HSRP Group:** ____________________________________
**Priority Router 1:** _____________________________
**Priority Router 2:** _____________________________
**Preempt enabled on:** ____________________________

Write the basic HSRP commands for Router 1:
```
________________________________
________________________________
________________________________
________________________________
```

---

### Activity D: Load Balancer Method Selection ⚖️
**Time:** 3 minutes

Choose the best load balancing method for each scenario:

| Scenario | Method | Reasoning |
|----------|--------|-----------|
| Web servers with equal capacity | | |
| Database connections | | |
| Streaming media servers | | |
| Email servers (different specs) | | |
| API gateway | | |

Methods: Round-robin, Least connections, Weighted round-robin, IP hash, Response time

---

### Activity E: Link Aggregation Planning 🔗
**Time:** 3 minutes

Design link aggregation for these requirements:

**Scenario 1:** Need 4Gbps between switches
- Number of 1Gbps links: _______
- Protocol: ___________________
- Load balancing method: _______

**Scenario 2:** Server with redundant network paths
- NIC teaming mode: ___________
- Failover time requirement: ___
- Switch configuration: ________

Calculate aggregate bandwidth:
- 4 × 1Gbps links = ___________
- 2 × 10Gbps links = __________
- 8 × 100Mbps links = _________

---

### Activity F: VRRP vs HSRP Comparison 📋
**Time:** 3 minutes

Complete the comparison:

| Feature | HSRP | VRRP |
|---------|------|------|
| Vendor | | |
| Protocol number | | |
| Virtual MAC format | | |
| Default priority | | |
| Preemption | | |
| Load balancing | | |
| Timer (hello) | | |
| Groups supported | | |

---

### Activity G: Power Redundancy Design ⚡
**Time:** 3 minutes

Design power redundancy for a server room:

**Equipment:**
- 10 servers (dual PSU, 500W each)
- 2 core switches (300W each)
- 4 access switches (100W each)
- Cooling system (2000W)

**Calculate:**
Total load: _________________ W
UPS sizing (with 25% headroom): _________ W
Runtime needed: _____________ minutes
Generator trigger time: ______ minutes

**Design:**
□ Dual power feeds (A/B)
□ Automatic transfer switch
□ N+1 UPS configuration
□ Generator backup
□ PDU redundancy

---

### Activity H: Geographic Redundancy Planning 🌍
**Time:** 2 minutes

Design multi-site redundancy:

**Primary Site:** New York
**Secondary Site:** _________________
**Distance requirement:** > _______ miles

**Replication strategy:**
- Database sync method: _______________
- RPO target: _______________________
- Bandwidth required: ________________

**Failover plan:**
- Detection method: __________________
- Failover time: ____________________
- DNS update method: _________________

---

### Activity I: Clustering Configuration 🖥️
**Time:** 3 minutes

Design a cluster for these applications:

| Application | Cluster Type | Node Count | Shared Storage? |
|------------|--------------|------------|-----------------|
| Web servers | | | |
| Database (critical) | | | |
| File server | | | |
| Email system | | | |
| Virtualization host | | | |

Types: Active-Active, Active-Passive, N+1, Load-balanced

---

### Activity J: NIC Teaming Configuration 💻
**Time:** 3 minutes

Configure NIC teaming for Windows Server:

**Available modes:**
1. Switch Independent / Address Hash
2. Switch Independent / Hyper-V Port
3. Switch Dependent / Static
4. Switch Dependent / LACP

Match mode to requirement:
- Maximum throughput: _________________
- VM hosting: ________________________
- No switch config: __________________
- Standards-based: ___________________

**PowerShell command to create team:**
```powershell
________________________________
```

---

### Activity K: Redundancy Cost Analysis 💰
**Time:** 2 minutes

Calculate redundancy costs vs downtime:

**Scenario:** E-commerce site
- Revenue: $100,000/day
- Current uptime: 99%
- Target uptime: 99.9%

**Cost of downtime:**
- Current (99%): _______ hours/year = $________
- Target (99.9%): ______ hours/year = $________
- Savings: $___________

**Redundancy investment budget:** $_____________
**ROI period:** ____________ months

---

### Activity L: Failover Testing Plan ✅
**Time:** 3 minutes

Create a failover test schedule:

**Monthly tests:**
□ HSRP/VRRP failover
□ Link aggregation member failure
□ Power transfer switch test

**Quarterly tests:**
□ Full site failover
□ Load balancer failure
□ Cluster node failure
□ Storage path failure

**Annual tests:**
□ Complete DR scenario
□ Extended power outage
□ Geographic site failover

Document test procedure for HSRP:
1. ___________________________________________
2. ___________________________________________
3. ___________________________________________
4. Verify: ____________________________________

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your main data center just lost power. Design the recovery:

1. **Immediate failover:** (0-60 seconds)
   • _____________________________________________
   • _____________________________________________

2. **Short-term operation:** (1-60 minutes)
   • _____________________________________________
   • _____________________________________________

3. **Long-term solution:** (>60 minutes)
   • _____________________________________________
   • _____________________________________________

### Best Practices Checklist
Check off HA practices you'll implement:

□ Eliminate all SPOFs
□ Implement N+1 redundancy minimum
□ Use automatic failover where possible
□ Document failover procedures
□ Test failover regularly
□ Monitor redundant paths
□ Configure preemption appropriately
□ Balance cost vs availability needs
□ Implement geographic diversity
□ Maintain spare equipment

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Calculate availability percentages and downtime
□ Identify and eliminate SPOFs
□ Configure HSRP/VRRP for gateway redundancy
□ Select appropriate load balancing methods
□ Design link aggregation solutions
□ Implement power redundancy
□ Plan geographic redundancy
□ Configure NIC teaming
□ Design clustering solutions
□ Create failover test plans

### Exam Preparation
⚠️ **Know for the exam:**
- **Five 9s:** 99.999% = 5.26 minutes downtime/year
- **HSRP:** Cisco proprietary, uses 0000.0c07.acXX MAC
- **VRRP:** Industry standard, protocol 112
- **GLBP:** Cisco, provides load balancing
- **LACP:** IEEE 802.3ad standard
- **Active-Active:** All nodes active
- **Active-Passive:** Standby nodes waiting

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐⭐☆

**Ready for:** Lesson 20 - Physical and Environmental Security

### Remember
"Redundancy is expensive until you have an outage - then it's priceless!" Design redundancy based on business requirements, not technical possibilities.

---