# Lab 19 Answer Key: High Availability and Redundancy
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain Coverage:** Network Operations (3.0)

---

## Section 1: Concept Check Answers

### Question 1: Availability "Nines"
**Answer:**
- 99.9% = **8.76 hours** downtime/year (3 nines)
- 99.99% = **52.56 minutes** downtime/year (4 nines)
- 99.999% = **5.26 minutes** downtime/year (5 nines)

💡 **Memory Trick:** Each "9" roughly divides downtime by 10

### Question 2: HSRP vs VRRP vs GLBP
**Answer:**
- **HSRP:** Cisco proprietary, active/standby, one router forwards
- **VRRP:** Industry standard (RFC 5798), similar to HSRP, open protocol
- **GLBP:** Cisco proprietary, load balances across multiple routers

### Question 3: Active-Active vs Active-Passive
**Answer:**
- **Active-Active:** All nodes handle traffic simultaneously, load balanced
- **Active-Passive:** One node active, others standby waiting for failure

### Question 4: LACP Definition
**Answer:**
**Link Aggregation Control Protocol** - IEEE 802.3ad standard for bundling multiple physical links into one logical link for increased bandwidth and redundancy

### Question 5: Types of Redundancy
**Answer:** (Any three)
- Device redundancy (dual routers/switches)
- Link redundancy (multiple paths)
- Power redundancy (dual PSUs, UPS)
- Site redundancy (geographic diversity)
- Data redundancy (RAID, backups)

---

## Section 2: Hands-On Activities - Answers

### Activity A: Availability Calculations ✅

| Availability % | Downtime/Year | Downtime/Month | Downtime/Week |
|---------------|---------------|----------------|---------------|
| 99% | 87.6 hours | 7.3 hours | 1.68 hours |
| 99.5% | 43.8 hours | 3.65 hours | 50.4 minutes |
| 99.9% | 8.76 hours | 43.8 minutes | 10.1 minutes |
| 99.95% | 4.38 hours | 21.9 minutes | 5.04 minutes |
| 99.99% | 52.56 minutes | 4.38 minutes | 1.01 minutes |
| 99.999% | 5.26 minutes | 26.3 seconds | 6.05 seconds |

**Formula:** Downtime = (1 - Availability) × Time Period

### Activity B: SPOF Identification ✅

| Component | Is it SPOF? | Redundancy Solution |
|-----------|------------|---------------------|
| Internet link | Yes | Dual ISPs, BGP failover |
| Router | Yes | Dual routers with HSRP/VRRP |
| Switch | Yes | Dual switches, stacking |
| Server | Yes | Clustering, load balancing |
| Power source | Yes | Dual power, UPS, generator |
| Cables | Yes | Redundant paths, link aggregation |

### Activity C: HSRP Configuration ✅

**Design:**
- Virtual IP: **192.168.10.1**
- HSRP Group: **10** (typically matches VLAN)
- Priority Router 1: **110** (higher = primary)
- Priority Router 2: **100** (default)
- Preempt enabled on: **Router 1**

**HSRP Commands for Router 1:**
```
interface vlan 10
standby 10 ip 192.168.10.1
standby 10 priority 110
standby 10 preempt
```

### Activity D: Load Balancer Method Selection ✅

| Scenario | Method | Reasoning |
|----------|--------|-----------|
| Web servers (equal) | Round-robin | Simple, equal distribution |
| Database connections | Least connections | Prevents overload |
| Streaming media | IP hash | Session persistence |
| Email (different specs) | Weighted round-robin | Accounts for capacity |
| API gateway | Response time | Optimizes performance |

### Activity E: Link Aggregation Planning ✅

**Scenario 1:**
- Number of 1Gbps links: **4 minimum** (or 5 for redundancy)
- Protocol: **LACP (802.3ad)**
- Load balancing: **Source-dest IP hash**

**Scenario 2:**
- NIC teaming mode: **Active-Active (LACP)**
- Failover time: **< 1 second**
- Switch configuration: **Port-channel/LAG**

**Bandwidth calculations:**
- 4 × 1Gbps = **4 Gbps**
- 2 × 10Gbps = **20 Gbps**
- 8 × 100Mbps = **800 Mbps**

### Activity F: VRRP vs HSRP Comparison ✅

| Feature | HSRP | VRRP |
|---------|------|------|
| Vendor | Cisco proprietary | IETF standard |
| Protocol number | UDP 1985 | IP protocol 112 |
| Virtual MAC | 0000.0c07.acXX | 0000.5e00.01XX |
| Default priority | 100 | 100 |
| Preemption | Disabled by default | Enabled by default |
| Load balancing | No (use GLBP) | No |
| Timer (hello) | 3 seconds | 1 second |
| Groups supported | 256 (v1), 4096 (v2) | 255 |

### Activity G: Power Redundancy Design ✅

**Calculations:**
- 10 servers: 10 × 500W = 5,000W
- 2 core switches: 2 × 300W = 600W
- 4 access switches: 4 × 100W = 400W
- Cooling: 2,000W
- **Total load: 8,000W**
- **UPS sizing (25% headroom): 10,000W (10kVA)**
- Runtime needed: **30 minutes minimum**
- Generator trigger: **5 minutes**

All design items should be checked (dual feeds, ATS, N+1, generator, PDU).

### Activity H: Geographic Redundancy ✅

**Secondary Site:** Chicago/Dallas (example)
**Distance requirement:** > **100 miles** (beyond regional disasters)

**Replication strategy:**
- Database sync: **Asynchronous replication**
- RPO target: **15 minutes**
- Bandwidth: **100 Mbps minimum**

**Failover plan:**
- Detection: **Heartbeat monitoring**
- Failover time: **< 5 minutes**
- DNS update: **Automatic with low TTL**

### Activity I: Clustering Configuration ✅

| Application | Cluster Type | Node Count | Shared Storage? |
|------------|--------------|------------|-----------------|
| Web servers | Active-Active | 3-5 | No |
| Database (critical) | Active-Passive | 2 | Yes |
| File server | Active-Active | 2-3 | Yes |
| Email system | Active-Active | 2-4 | Yes |
| Virtualization host | N+1 | 3-4 | Yes (SAN) |

### Activity J: NIC Teaming Configuration ✅

**Mode matching:**
- Maximum throughput: **Switch Dependent/LACP**
- VM hosting: **Switch Independent/Hyper-V Port**
- No switch config: **Switch Independent/Address Hash**
- Standards-based: **Switch Dependent/LACP**

**PowerShell command:**
```powershell
New-NetLbfoTeam -Name "Team1" -TeamMembers "NIC1","NIC2" -TeamingMode LACP
```

### Activity K: Redundancy Cost Analysis ✅

**Calculations:**
- Revenue per hour: $100,000 ÷ 24 = $4,167/hour
- Current (99%): 87.6 hours × $4,167 = **$365,029/year**
- Target (99.9%): 8.76 hours × $4,167 = **$36,503/year**
- **Savings: $328,526/year**
- **Redundancy budget: Up to $328,526**
- **ROI period: 12 months or less**

### Activity L: Failover Testing Plan ✅

All checkboxes should be marked. 

**HSRP Test Procedure:**
1. Document current active router (`show standby brief`)
2. Shutdown primary router interface
3. Verify failover occurs (< 3 seconds)
4. Verify: Traffic flows through backup router

---

## Real-World Context & Best Practices

### Why This Matters
- **Business continuity:** Downtime = lost revenue
- **SLA compliance:** Meeting uptime commitments
- **User experience:** Seamless service delivery
- **Competitive advantage:** Better reliability than competitors

### Common Mistakes to Avoid
❌ Single power source for redundant devices
❌ Redundant devices on same software version (bugs)
❌ Not testing failover regularly
❌ Overcomplicated designs
❌ Ignoring human error as failure cause

### Industry Best Practices
✅ **N+1 minimum:** One spare for everything critical
✅ **Different failure domains:** Spread redundancy
✅ **Automatic failover:** Minimize human intervention
✅ **Regular testing:** Monthly failover tests
✅ **Document everything:** Clear procedures

---

## Exam Tips 📝

### Must Memorize:
1. **Availability percentages:**
   - 99.9% = 8.76 hours/year
   - 99.99% = 52.56 minutes/year
   - 99.999% = 5.26 minutes/year
2. **HSRP details:**
   - Cisco proprietary
   - Virtual MAC: 0000.0c07.acXX
   - UDP port 1985
3. **VRRP details:**
   - Industry standard
   - Protocol 112
   - Virtual MAC: 0000.5e00.01XX
4. **LACP:** IEEE 802.3ad
5. **Load balancing:** Round-robin, least connections, weighted

### Common Exam Questions:
- "Which provides load balancing for gateways?" → **GLBP**
- "What's the VRRP protocol number?" → **112**
- "Five nines equals?" → **5.26 minutes downtime/year**
- "Which FHRP is vendor-neutral?" → **VRRP**

### Exam Strategy:
- HSRP/VRRP don't load balance (GLBP does)
- Higher priority number = primary router
- Preemption allows automatic failback
- Active-Active = all nodes work simultaneously

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Calculated availability percentages correctly
□ Identified all SPOFs in network design
□ Configured HSRP with proper priorities
□ Selected appropriate load balancing methods
□ Designed link aggregation with LACP
□ Compared HSRP and VRRP accurately
□ Calculated power requirements
□ Planned geographic redundancy
□ Configured clustering appropriately
□ Calculated ROI for redundancy

### Troubleshooting Common Issues

**Problem:** HSRP not failing over
**Solution:** Check priorities, preemption, track statements, timers

**Problem:** Link aggregation not balancing
**Solution:** Verify hash algorithm, check flow distribution

**Problem:** Power redundancy not working
**Solution:** Test ATS, verify dual feed wiring, check UPS batteries

**Problem:** Geographic failover too slow
**Solution:** Reduce DNS TTL, implement GSLB, optimize detection

---

## Real-World Scenarios

### Scenario 1: Core Switch Failure
**Situation:** Primary core switch dies
**HA Response:**
1. Spanning tree reconverges (RSTP)
2. HSRP shifts to backup router
3. Link aggregation continues on remaining links
4. Alert sent to on-call engineer

### Scenario 2: ISP Outage
**Situation:** Primary ISP connection drops
**HA Response:**
1. BGP detects route withdrawal
2. Traffic shifts to secondary ISP
3. DNS updates if needed
4. Monitoring alerts triggered

### Scenario 3: Data Center Power Loss
**Situation:** Utility power fails
**HA Response:**
1. UPS takes load immediately
2. Generator starts (30 seconds)
3. ATS switches to generator
4. If extended: Failover to DR site

---

## Lab Summary

### Key Concepts Mastered:
✅ Availability math drives business decisions
✅ SPOFs must be eliminated systematically
✅ FHRP provides gateway redundancy (HSRP/VRRP/GLBP)
✅ Load balancing distributes traffic efficiently
✅ Link aggregation increases bandwidth and redundancy
✅ Power redundancy requires multiple layers
✅ Geographic redundancy protects against regional failures

### Time-Saving Tips:
- Use HSRP/VRRP templates
- Automate failover testing
- Monitor redundant path utilization
- Script configuration backups
- Document normal vs failed state

### Going Further:
- Lab HSRP/VRRP in virtual environment
- Test link aggregation at home
- Calculate your employer's downtime costs
- Design redundancy for home lab
- Study BGP for ISP redundancy

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for high availability exam questions!

**Next Lab:** Lesson 20 - Physical and Environmental Security

### Final Tip:
"Two is one, one is none!" Always have a backup for critical components. The cost of redundancy is nothing compared to the cost of downtime.

---