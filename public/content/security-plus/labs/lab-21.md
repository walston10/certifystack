# Lab 21: Resilience and Recovery

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 3.4 - Explain the importance of resilience and recovery in security architecture

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between RTO and RPO? Why are both important?**

2. **Explain the difference between a hot site, warm site, and cold site.**

3. **What is the difference between full, incremental, and differential backups?**

4. **What does MTTR measure, and why is it important for resilience planning?**

5. **Explain the concept of redundancy and give three examples.**

---

## Section 2: Hands-On Activities

### Activity A: Recovery Objectives

**Goal:** Understand key recovery metrics.

**Recovery objective definitions:**

| Metric | Full Name | Definition | Measured In |
|--------|-----------|------------|-------------|
| RTO | | | |
| RPO | | | |
| MTTR | | | |
| MTBF | | | |

**RTO vs RPO visualization:**

```
                     Disaster
                        ↓
Data Loss ←── RPO ──────┼────── RTO ──→ Recovery Complete
              │                           │
    Last good backup              Systems operational
```

**Scenario analysis:**

| System | Acceptable Downtime | Acceptable Data Loss | RTO | RPO |
|--------|--------------------|--------------------|-----|-----|
| Email server | 4 hours | 1 hour of email | | |
| E-commerce website | 15 minutes | 0 transactions | | |
| File server | 24 hours | 1 day of files | | |
| Database (financial) | 1 hour | 0 records | | |
| Development server | 3 days | 1 week | | |

**Calculate the cost of downtime:**

| System | Revenue/Hour | Downtime | Lost Revenue |
|--------|--------------|----------|--------------|
| E-commerce | $10,000 | 2 hours | |
| Manufacturing | $50,000 | 8 hours | |
| SaaS platform | $5,000 | 4 hours | |

Why do organizations calculate this?

_________________________________________________________________

---

### Activity B: Backup Types

**Goal:** Understand backup strategies.

**Backup type comparison:**

| Type | What It Backs Up | Speed | Restore Time | Storage |
|------|------------------|-------|--------------|---------|
| Full | | | | |
| Incremental | | | | |
| Differential | | | | |
| Snapshot | | | | |

**Backup scenario:**

Full backup on Sunday. Changes occur daily.

| Day | Data Changed | Full | Incremental | Differential |
|-----|--------------|------|-------------|--------------|
| Sunday | Initial 100 GB | 100 GB | 100 GB | 100 GB |
| Monday | 5 GB new | - | | |
| Tuesday | 3 GB new | - | | |
| Wednesday | 7 GB new | - | | |
| Thursday | 4 GB new | - | | |
| Friday | 6 GB new | - | | |

**Total storage used by Friday:**

| Strategy | Total Storage |
|----------|---------------|
| Daily Full | |
| Incremental | |
| Differential | |

**Restore time analysis:**

System fails on Friday. What must be restored?

| Strategy | Backups Needed |
|----------|----------------|
| Full | |
| Incremental | |
| Differential | |

Which is fastest to restore? _______________
Which uses least storage? _______________

---

### Activity C: Backup Best Practices

**Goal:** Implement backup strategy.

**3-2-1 Backup Rule:**

| Component | Meaning | Example |
|-----------|---------|---------|
| 3 | | |
| 2 | | |
| 1 | | |

**Backup considerations:**

| Consideration | Best Practice |
|---------------|---------------|
| Frequency | |
| Retention | |
| Encryption | |
| Testing | |
| Documentation | |
| Offsite storage | |
| Air gap | |

**Backup verification:**

| Test Type | What It Verifies | Frequency |
|-----------|------------------|-----------|
| Backup completion | | |
| Data integrity | | |
| Restore test | | |
| Full DR test | | |

**Why test backups?**

| Risk Without Testing | Consequence |
|---------------------|-------------|
| Corrupted backups | |
| Missing data | |
| Restore process unknown | |
| Outdated procedures | |

---

### Activity D: High Availability Concepts

**Goal:** Understand uptime and availability.

**Availability percentages:**

| Availability | Downtime/Year | Downtime/Month | Downtime/Week |
|--------------|---------------|----------------|---------------|
| 99% (two 9s) | | | |
| 99.9% (three 9s) | | | |
| 99.99% (four 9s) | | | |
| 99.999% (five 9s) | | | |

**Calculate availability:**

Formula: Availability = (Uptime / Total Time) × 100

| Scenario | Uptime | Total Time | Availability % |
|----------|--------|------------|----------------|
| 8,700 hours up in a year | 8,700 | 8,760 | |
| 720 hours up in 30 days | 720 | 720 | |
| 167 hours up in a week | 167 | 168 | |

**Single Point of Failure (SPOF):**

What is a SPOF?

_________________________________________________________________

Identify SPOFs in this architecture:

```
Internet
    │
[Firewall] ← SPOF?
    │
[Switch] ← SPOF?
    │
[Web Server] ← SPOF?
    │
[Database Server] ← SPOF?
    │
[Power Supply] ← SPOF?
```

How would you eliminate each SPOF?

| Component | Redundancy Solution |
|-----------|---------------------|
| Firewall | |
| Switch | |
| Web Server | |
| Database | |
| Power | |

---

### Activity E: Redundancy Strategies

**Goal:** Implement redundancy at multiple levels.

**Redundancy types:**

| Type | Description | Example |
|------|-------------|---------|
| Server redundancy | | |
| Network redundancy | | |
| Power redundancy | | |
| Storage redundancy | | |
| Geographic redundancy | | |
| Data redundancy | | |

**RAID levels:**

| RAID | Description | Min Disks | Fault Tolerance | Use Case |
|------|-------------|-----------|-----------------|----------|
| RAID 0 | | | | |
| RAID 1 | | | | |
| RAID 5 | | | | |
| RAID 6 | | | | |
| RAID 10 | | | | |

**Which RAID for:**

| Requirement | RAID Level | Why |
|-------------|------------|-----|
| Maximum performance, no redundancy | | |
| Simple mirroring for OS drive | | |
| Balance of performance and redundancy | | |
| Survive two disk failures | | |
| High performance AND redundancy | | |

---

### Activity F: Load Balancing

**Goal:** Understand load balancing for availability.

**Load balancing concepts:**

| Concept | Description |
|---------|-------------|
| Load balancer | |
| Backend pool | |
| Health check | |
| Session persistence | |

**Load balancing algorithms:**

| Algorithm | How It Works | Best For |
|-----------|--------------|----------|
| Round robin | | |
| Least connections | | |
| Weighted | | |
| IP hash | | |
| Geographic | | |

**Active-Active vs Active-Passive:**

| Aspect | Active-Active | Active-Passive |
|--------|---------------|----------------|
| All servers handle traffic | | |
| Failover time | | |
| Resource utilization | | |
| Complexity | | |
| Use case | | |

**Health check configuration:**

| Setting | Purpose | Example Value |
|---------|---------|---------------|
| Protocol | | HTTP/HTTPS/TCP |
| Port | | |
| Path | | |
| Interval | | |
| Timeout | | |
| Unhealthy threshold | | |

---

### Activity G: Disaster Recovery Sites

**Goal:** Compare recovery site options.

**Recovery site comparison:**

| Aspect | Hot Site | Warm Site | Cold Site |
|--------|----------|-----------|-----------|
| Infrastructure | | | |
| Data replication | | | |
| Activation time | | | |
| Cost | | | |
| Maintenance | | | |

**Site selection factors:**

| Factor | Consideration |
|--------|---------------|
| RTO requirements | |
| Budget | |
| Data criticality | |
| Geographic distance | |
| Compliance requirements | |

**Match the scenario:**

| Organization | Site Type | Reasoning |
|--------------|-----------|-----------|
| Hospital (life-critical systems) | | |
| Small business (24-hour RTO acceptable) | | |
| Bank (trading systems, 15-min RTO) | | |
| Archive storage (week RTO acceptable) | | |

**Cloud-based DR:**

| Advantage | Description |
|-----------|-------------|
| | |
| | |
| | |

| Disadvantage | Description |
|--------------|-------------|
| | |
| | |

---

### Activity H: Disaster Recovery Planning

**Goal:** Create a disaster recovery plan.

**DRP components:**

| Component | Purpose |
|-----------|---------|
| Scope | |
| Roles and responsibilities | |
| Communication plan | |
| Recovery procedures | |
| Testing schedule | |
| Maintenance | |

**Disaster types to plan for:**

| Category | Examples | Likelihood | Impact |
|----------|----------|------------|--------|
| Natural | | | |
| Technical | | | |
| Human | | | |
| Security | | | |

**Recovery priority classification:**

| Priority | Systems | RTO | Example |
|----------|---------|-----|---------|
| Critical | | | |
| High | | | |
| Medium | | | |
| Low | | | |

**Communication plan:**

| Stakeholder | Contact Method | Information Needed |
|-------------|----------------|-------------------|
| Executive team | | |
| IT staff | | |
| Employees | | |
| Customers | | |
| Vendors | | |
| Media | | |

---

### Activity I: Business Continuity

**Goal:** Understand BCP vs DRP.

**BCP vs DRP:**

| Aspect | BCP | DRP |
|--------|-----|-----|
| Focus | | |
| Scope | | |
| Timeframe | | |
| Goal | | |

**Business Impact Analysis (BIA):**

| BIA Element | Purpose |
|-------------|---------|
| Critical functions | |
| Dependencies | |
| Impact assessment | |
| Recovery priorities | |
| Resource requirements | |

**Conduct a mini-BIA:**

| Business Function | Impact if Down 1 Hour | Impact if Down 1 Day | Priority |
|-------------------|----------------------|---------------------|----------|
| Customer orders | | | |
| Employee email | | | |
| Payroll system | | | |
| Website | | | |
| Manufacturing | | | |

---

### Activity J: Testing and Exercises

**Goal:** Understand DR testing methods.

**Test types:**

| Type | Description | Disruption | Realism |
|------|-------------|------------|---------|
| Checklist/Tabletop | | | |
| Walkthrough | | | |
| Simulation | | | |
| Parallel | | | |
| Full interruption | | | |

**Testing frequency:**

| Test Type | Recommended Frequency |
|-----------|----------------------|
| Tabletop | |
| Walkthrough | |
| Simulation | |
| Parallel | |
| Full test | |

**Test documentation:**

| Element | Purpose |
|---------|---------|
| Test objectives | |
| Scope | |
| Participants | |
| Scenarios | |
| Results | |
| Lessons learned | |
| Action items | |

**After-action review questions:**

| Question | Purpose |
|----------|---------|
| What worked well? | |
| What didn't work? | |
| What was missing? | |
| What needs updating? | |
| Who needs training? | |

---

### Activity K: First Hop Redundancy Protocols

**Goal:** Understand gateway redundancy.

**FHRP overview:**

| Protocol | Full Name | Vendor | Description |
|----------|-----------|--------|-------------|
| HSRP | | | |
| VRRP | | | |
| GLBP | | | |

**How FHRP works:**

| Component | Purpose |
|-----------|---------|
| Virtual IP | |
| Active router | |
| Standby router | |
| Priority | |
| Preemption | |

**FHRP scenario:**

```
[PC] ──→ Gateway: 192.168.1.1 (Virtual IP)
              │
     ┌────────┴────────┐
     │                 │
[Router A]        [Router B]
192.168.1.2       192.168.1.3
Priority: 110     Priority: 100
(Active)          (Standby)
```

If Router A fails, what happens?

_________________________________________________________________

How quickly does failover occur?

_________________________________________________________________

---

### Activity L: Resilience Scenario Analysis

**Goal:** Apply concepts to real scenarios.

**Scenario 1: E-commerce Platform**

Requirements:
- 99.99% availability
- Maximum 1 hour data loss
- Customer transactions cannot be lost

Design the resilience strategy:

| Component | Solution |
|-----------|----------|
| Web servers | |
| Database | |
| Backup strategy | |
| DR site | |
| Data replication | |

**Scenario 2: Healthcare System**

Requirements:
- Patient data must be available 24/7
- Compliance requires 7-year retention
- 15-minute RTO for critical systems

| Component | Solution |
|-----------|----------|
| Storage | |
| Backup | |
| DR site | |
| Testing | |

**Scenario 3: Small Business**

Budget: Limited
Requirements:
- Daily backup
- Can tolerate 24-hour downtime
- Week of data loss acceptable

| Component | Cost-Effective Solution |
|-----------|------------------------|
| Backup location | |
| Backup type | |
| DR site | |
| Recovery plan | |

---

### Tier 2 Bonus: Windows Backup Analysis

> ⚠️ **Requires:** Command line access

---

### Activity M: Check Windows Backup Status

**View shadow copies (restore points):**

```cmd
vssadmin list shadows
```

| Shadow Copy | Date Created |
|-------------|--------------|
| | |
| | |

**Check disk for previous versions:**

```cmd
vssadmin list shadowstorage
```

| Volume | Used Space | Max Space |
|--------|------------|-----------|
| | | |

**View Windows Backup history (if available):**

PowerShell:
```powershell
Get-WBSummary
```

**Check System Restore status:**

```cmd
systeminfo | findstr /i "System Boot Time"
```

When was the system last booted? _______________

How might this affect recovery planning?

_________________________________________________________________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your organization's backup tape from last night is corrupted, and you discover this during a ransomware attack. What could have prevented this situation, and what's your recovery strategy now?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Management says "We have backups, so we don't need a disaster recovery plan." How do you explain the difference and why both are necessary?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A competitor experienced a 3-day outage due to a data center fire. Your CEO asks you to present a plan to ensure this doesn't happen to your company. What key elements do you include?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Define RTO, RPO, MTTR, and MTBF
- [ ] Compare full, incremental, and differential backups
- [ ] Explain the 3-2-1 backup rule
- [ ] Calculate availability percentages
- [ ] Identify and eliminate single points of failure
- [ ] Compare RAID levels
- [ ] Differentiate hot, warm, and cold sites
- [ ] Explain load balancing algorithms
- [ ] Understand BCP vs DRP
- [ ] Describe DR testing methods

---

## What You Learned Today

- ✅ Calculated recovery objectives
- ✅ Compared backup strategies
- ✅ Applied backup best practices
- ✅ Understood availability metrics
- ✅ Designed redundancy solutions
- ✅ Configured load balancing concepts
- ✅ Selected DR site types
- ✅ Created DR plan elements
- ✅ Differentiated BCP and DRP
- ✅ Planned testing exercises
- ✅ Understood FHRP
- ✅ Solved resilience scenarios
- ✅ (Tier 2) Analyzed Windows backup

**Next Lab:** Security Monitoring and SIEM - logging, monitoring, and security operations.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 21: Resilience and Recovery*