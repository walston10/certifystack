# Lab 21: Resilience and Recovery - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Resilience and recovery are critical for business continuity.

---

## Section 1: Concept Check - Answers

**1. RTO vs RPO:**

**Answer:**

| Metric | Definition | Example |
|--------|------------|---------|
| **RTO (Recovery Time Objective)** | Maximum acceptable downtime | 4 hours to restore email |
| **RPO (Recovery Point Objective)** | Maximum acceptable data loss | 1 hour of transactions |

**Both important because:**
- RTO determines how fast you need to recover (affects DR site type)
- RPO determines backup frequency (affects data loss tolerance)

---

**2. Hot, warm, and cold sites:**

**Answer:**

| Site | Infrastructure | Data | Activation | Cost |
|------|----------------|------|------------|------|
| **Hot** | Fully operational | Real-time sync | Minutes | Highest |
| **Warm** | Partial, needs config | Periodic sync | Hours | Medium |
| **Cold** | Empty space only | No data | Days/weeks | Lowest |

---

**3. Full, incremental, and differential backups:**

**Answer:**

| Type | Backs Up | Restore Needs | Storage |
|------|----------|---------------|---------|
| **Full** | Everything | Full only | High |
| **Incremental** | Changes since last backup | Full + all incrementals | Low |
| **Differential** | Changes since last full | Full + latest differential | Medium |

---

**4. MTTR:**

**Answer:**

**MTTR (Mean Time to Repair)** = Average time to fix a failed component.

**Important for resilience because:**
- Helps calculate expected downtime
- Identifies components needing faster repair processes
- Informs SLA commitments
- Guides spare parts inventory decisions

---

**5. Redundancy with examples:**

**Answer:**

**Redundancy:** Duplicate components to eliminate single points of failure.

**Examples:**
1. **Server redundancy:** Multiple web servers behind load balancer
2. **Power redundancy:** Dual power supplies, UPS, generator
3. **Network redundancy:** Multiple ISPs, redundant switches
4. **Storage redundancy:** RAID, replicated storage
5. **Geographic redundancy:** Multiple data centers

---

## Section 2: Activity Solutions

### Activity A: Recovery Objectives - Answers

| Metric | Full Name | Definition | Measured In |
|--------|-----------|------------|-------------|
| RTO | Recovery Time Objective | Max acceptable downtime | Hours/minutes |
| RPO | Recovery Point Objective | Max acceptable data loss | Hours/minutes |
| MTTR | Mean Time to Repair | Avg time to fix failure | Hours/minutes |
| MTBF | Mean Time Between Failures | Avg time between failures | Hours/days |

**Scenario analysis:**

| System | Downtime | Data Loss | RTO | RPO |
|--------|----------|-----------|-----|-----|
| Email | 4 hours | 1 hour | 4 hours | 1 hour |
| E-commerce | 15 minutes | 0 transactions | 15 min | 0 (real-time) |
| File server | 24 hours | 1 day | 24 hours | 24 hours |
| Financial DB | 1 hour | 0 records | 1 hour | 0 (real-time) |
| Dev server | 3 days | 1 week | 72 hours | 168 hours |

**Cost calculation:**

| System | Revenue/Hour | Downtime | Lost Revenue |
|--------|--------------|----------|--------------|
| E-commerce | $10,000 | 2 hours | $20,000 |
| Manufacturing | $50,000 | 8 hours | $400,000 |
| SaaS | $5,000 | 4 hours | $20,000 |

**Why calculate:** Justifies DR investment—if 2 hours costs $20K, spending $50K on HA makes sense.

---

### Activity B: Backup Types - Answers

| Type | Backs Up | Speed | Restore | Storage |
|------|----------|-------|---------|---------|
| Full | Everything | Slow | Fast | High |
| Incremental | Since last backup | Fast | Slow | Low |
| Differential | Since last full | Medium | Medium | Medium |
| Snapshot | Point-in-time image | Fast | Fast | Varies |

**Weekly backup scenario:**

| Day | Changed | Incremental | Differential |
|-----|---------|-------------|--------------|
| Sun | 100 GB | 100 GB | 100 GB |
| Mon | 5 GB | 5 GB | 5 GB |
| Tue | 3 GB | 3 GB | 8 GB |
| Wed | 7 GB | 7 GB | 15 GB |
| Thu | 4 GB | 4 GB | 19 GB |
| Fri | 6 GB | 6 GB | 25 GB |

**Total storage:**

| Strategy | Total |
|----------|-------|
| Daily Full | 600 GB (100 × 6) |
| Incremental | 125 GB |
| Differential | 172 GB |

**Restore on Friday:**

| Strategy | Backups Needed |
|----------|----------------|
| Full | Friday full only |
| Incremental | Sunday full + Mon + Tue + Wed + Thu + Fri |
| Differential | Sunday full + Friday differential |

**Fastest restore:** Full
**Least storage:** Incremental

---

### Activity C: Backup Best Practices - Answers

**3-2-1 Rule:**

| Component | Meaning | Example |
|-----------|---------|---------|
| 3 | 3 copies of data | Original + 2 backups |
| 2 | 2 different media | Disk + tape/cloud |
| 1 | 1 offsite | Cloud or remote location |

**Backup considerations:**

| Consideration | Best Practice |
|---------------|---------------|
| Frequency | Based on RPO |
| Retention | Based on compliance/business |
| Encryption | Always encrypt backups |
| Testing | Monthly restore tests |
| Documentation | Procedures documented |
| Offsite | Copy outside primary location |
| Air gap | Offline copy for ransomware protection |

---

### Activity D: High Availability - Answers

| Availability | Year | Month | Week |
|--------------|------|-------|------|
| 99% | 3.65 days | 7.3 hours | 1.68 hours |
| 99.9% | 8.76 hours | 43.8 min | 10.1 min |
| 99.99% | 52.6 min | 4.38 min | 1.01 min |
| 99.999% | 5.26 min | 26.3 sec | 6.05 sec |

**Calculations:**

| Scenario | Calculation | Availability |
|----------|-------------|--------------|
| 8,700/8,760 | 99.32% | |
| 720/720 | 100% | |
| 167/168 | 99.4% | |

**SPOF:** Single point of failure—component whose failure brings down entire system.

**Eliminating SPOFs:**

| Component | Solution |
|-----------|----------|
| Firewall | HA pair, failover cluster |
| Switch | Stacked switches, redundant |
| Web Server | Load balanced cluster |
| Database | Replication, clustering |
| Power | Dual supplies, UPS, generator |

---

### Activity E: Redundancy - Answers

| Type | Description | Example |
|------|-------------|---------|
| Server | Multiple servers same role | Web server farm |
| Network | Multiple paths | Dual ISPs |
| Power | Backup power sources | UPS + generator |
| Storage | Data copies | RAID, replication |
| Geographic | Multiple locations | DR site |
| Data | Multiple data copies | Backup, replication |

**RAID levels:**

| RAID | Description | Min | Tolerance | Use |
|------|-------------|-----|-----------|-----|
| 0 | Striping | 2 | None | Performance |
| 1 | Mirroring | 2 | 1 disk | OS, simple |
| 5 | Striping + parity | 3 | 1 disk | General |
| 6 | Striping + dual parity | 4 | 2 disks | Critical |
| 10 | Mirrored stripes | 4 | 1 per mirror | High performance |

**RAID selection:**

| Requirement | RAID | Why |
|-------------|------|-----|
| Max performance | 0 | No overhead |
| Simple mirroring | 1 | Easy, reliable |
| Balance | 5 | Good mix |
| Survive 2 failures | 6 | Dual parity |
| Performance + redundancy | 10 | Best of both |

---

### Activity F: Load Balancing - Answers

| Concept | Description |
|---------|-------------|
| Load balancer | Distributes traffic across servers |
| Backend pool | Group of servers handling requests |
| Health check | Verifies server is working |
| Session persistence | Keeps user on same server |

**Algorithms:**

| Algorithm | How | Best For |
|-----------|-----|----------|
| Round robin | Sequential rotation | Equal servers |
| Least connections | To least busy | Varying loads |
| Weighted | Based on capacity | Different server specs |
| IP hash | Based on client IP | Session persistence |
| Geographic | Based on location | Global distribution |

**Active-Active vs Active-Passive:**

| Aspect | Active-Active | Active-Passive |
|--------|---------------|----------------|
| All handle traffic | Yes | No (standby idle) |
| Failover time | Immediate | Seconds/minutes |
| Utilization | Higher | Lower |
| Complexity | Higher | Lower |
| Use case | High traffic | Cost-sensitive |

---

### Activity G: DR Sites - Answers

| Aspect | Hot | Warm | Cold |
|--------|-----|------|------|
| Infrastructure | Full, running | Partial, ready | Empty |
| Data | Real-time | Periodic | None |
| Activation | Minutes | Hours | Days |
| Cost | Highest | Medium | Lowest |
| Maintenance | High | Medium | Low |

**Scenario matching:**

| Organization | Site | Reason |
|--------------|------|--------|
| Hospital | Hot | Life-critical, immediate RTO |
| Small business | Cold | 24-hour RTO acceptable |
| Bank trading | Hot | 15-minute RTO requires instant |
| Archive | Cold | Week RTO, cost-sensitive |

---

### Activity H: DR Planning - Answers

**Disaster types:**

| Category | Examples | Likelihood | Impact |
|----------|----------|------------|--------|
| Natural | Flood, fire, earthquake | Low-Medium | High |
| Technical | Hardware fail, power | Medium | Medium |
| Human | Error, sabotage | Medium | Medium |
| Security | Ransomware, breach | Medium-High | High |

**Recovery priorities:**

| Priority | RTO | Example |
|----------|-----|---------|
| Critical | <1 hour | Core business systems |
| High | 4-8 hours | Important applications |
| Medium | 24-48 hours | Support systems |
| Low | 72+ hours | Non-essential |

---

### Activity I: BCP vs DRP - Answers

| Aspect | BCP | DRP |
|--------|-----|-----|
| Focus | Business operations | IT recovery |
| Scope | Entire organization | Technology systems |
| Timeframe | During and after crisis | After disaster |
| Goal | Continue operations | Restore IT |

---

### Activity J: Testing - Answers

| Type | Description | Disruption | Realism |
|------|-------------|------------|---------|
| Tabletop | Discussion-based review | None | Low |
| Walkthrough | Step through procedures | None | Medium |
| Simulation | Role-play scenario | Minimal | Medium |
| Parallel | DR site activated alongside | Minimal | High |
| Full | Complete failover | High | Highest |

**Frequency:**

| Type | Frequency |
|------|-----------|
| Tabletop | Quarterly |
| Walkthrough | Semi-annually |
| Simulation | Annually |
| Parallel | Annually |
| Full | Every 2-3 years |

---

### Activity K: FHRP - Answers

| Protocol | Name | Vendor |
|----------|------|--------|
| HSRP | Hot Standby Router Protocol | Cisco |
| VRRP | Virtual Router Redundancy Protocol | Open standard |
| GLBP | Gateway Load Balancing Protocol | Cisco |

**If Router A fails:** Router B detects failure, takes over virtual IP (192.168.1.1), becomes active. PCs continue using same gateway.

**Failover time:** Typically 3-10 seconds depending on configuration.

---

### Activity L: Scenarios - Answers

**E-commerce (99.99%):**

| Component | Solution |
|-----------|----------|
| Web | Load balanced, multiple servers |
| Database | Synchronous replication |
| Backup | Continuous/real-time |
| DR site | Hot site |
| Replication | Synchronous (0 data loss) |

**Healthcare:**

| Component | Solution |
|-----------|----------|
| Storage | RAID 6 or 10, replicated |
| Backup | Daily full, frequent incremental, 7-year retention |
| DR site | Hot site (15-min RTO) |
| Testing | Quarterly, documented |

**Small Business:**

| Component | Solution |
|-----------|----------|
| Backup | Cloud backup (cheap) |
| Type | Weekly full, daily incremental |
| DR site | Cold (cloud VM on demand) |
| Plan | Documented manual recovery |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Corrupted backup during ransomware**

**Prevention:**
- Test backups regularly
- Multiple backup copies (3-2-1)
- Air-gapped/offline backups
- Immutable backups

**Recovery now:**
- Check previous backup tapes
- Check cloud backups
- Contact backup vendor
- Consider paying ransom (last resort, not recommended)
- Rebuild from scratch if necessary

---

**Scenario 2: "Backups = DR plan"**

**Explanation:**
- Backups = data copies
- DRP = complete recovery process

**DRP includes:**
- WHO does what
- HOW to restore (procedures)
- WHERE to restore to (site)
- WHEN to declare disaster
- Communication plan
- Testing schedule

Backups without DRP = data but no way to use it quickly.

---

**Scenario 3: Prevent 3-day outage**

**Key elements:**
- Geographic redundancy (second site)
- Automated failover
- Regular DR testing
- Defined RTO/RPO
- Communication plan
- Documented procedures
- Regular backups with offsite copy
- Insurance
- Vendor SLAs

---

## Key Exam Tips

1. **RTO:** How long to recover (time)
   **RPO:** How much data loss acceptable

2. **Full backup:** Everything, fast restore, high storage
   **Incremental:** Since last backup, slow restore, low storage
   **Differential:** Since last full, balanced

3. **3-2-1 rule:** 3 copies, 2 media types, 1 offsite

4. **Hot site:** Minutes (real-time sync)
   **Warm site:** Hours (periodic sync)
   **Cold site:** Days (empty space)

5. **MTTR:** Time to repair
   **MTBF:** Time between failures

6. **Five 9s (99.999%):** ~5 minutes downtime/year

7. **RAID 0:** No redundancy (striping)
   **RAID 1:** Mirroring
   **RAID 5:** Parity, survives 1 disk
   **RAID 6:** Dual parity, survives 2 disks

8. **HSRP/VRRP:** Gateway redundancy, virtual IP

9. **BCP:** Business continuity (overall)
   **DRP:** Disaster recovery (IT specific)

10. **Test backups:** Untested backup is unreliable

---

## Common Mistakes to Avoid

❌ Confusing RTO (time) with RPO (data)

❌ Thinking backups = disaster recovery plan

❌ Not testing backups regularly

❌ Forgetting geographic redundancy

❌ Confusing RAID levels (especially 5 vs 6)

❌ Thinking hot site is cheap (it's the most expensive)

---

**Congratulations on completing Lab 21!**

Resilience and recovery planning are essential—every organization needs these skills.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 21: Resilience and Recovery - Solution Guide*