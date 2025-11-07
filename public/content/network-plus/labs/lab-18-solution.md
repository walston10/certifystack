# Lab 18 Answer Key: Backup and Disaster Recovery
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain Coverage:** Network Operations (3.0)

---

## Section 1: Concept Check Answers

### Question 1: Incremental vs Differential
**Answer:**
- **Incremental:** Backs up only data changed since last backup (any type). Resets archive bit. Fastest backup, slowest restore.
- **Differential:** Backs up all data changed since last FULL backup. Doesn't reset archive bit. Grows larger over time.

### Question 2: 3-2-1 Rule
**Answer:**
- **3:** Three total copies of your data
- **2:** Two different media types (disk, tape, cloud)
- **1:** One copy stored offsite

### Question 3: DR Metrics
**Answer:**
- **RTO (Recovery Time Objective):** Maximum acceptable time to restore service after disaster
- **RPO (Recovery Point Objective):** Maximum acceptable data loss measured in time
- **MTTR (Mean Time To Repair):** Average time to fix a failure
- **MTBF (Mean Time Between Failures):** Average time between system failures

### Question 4: DR Site Ranking (Least to Most Expensive)
**Answer:**
1. Cold site (cheapest - empty facility)
2. Warm site (moderate - partial equipment)
3. Hot site (most expensive - fully ready)

### Question 5: Running vs Startup Config
**Answer:**
**Running-config:** Current configuration in RAM, lost on reboot
**Startup-config:** Saved configuration in NVRAM, loaded at boot

---

## Section 2: Hands-On Activities - Answers

### Activity A: Backup Type Comparison ✅

| Backup Type | What's Backed Up | Archive Bit Reset | Restore Complexity | Storage Required |
|------------|------------------|-------------------|-------------------|------------------|
| Full | Everything | Yes | Simple (1 restore) | Highest |
| Incremental | Changes since last backup | Yes | Complex (multiple restores) | Lowest |
| Differential | Changes since last full | No | Moderate (2 restores) | Moderate |
| Snapshot | Point-in-time copy | N/A | Simple | Variable |

### Activity B: Backup Schedule Design ✅

**GFS Rotation:**
- Daily (Son): Keep for **7 days**
- Weekly (Father): Keep for **4 weeks**
- Monthly (Grandfather): Keep for **12 months**

**Schedule Example:**
```
Sunday: Full backup (weekly)
Monday: Incremental
Tuesday: Incremental
Wednesday: Incremental
Thursday: Incremental
Friday: Incremental
Saturday: Incremental
```

**First Friday of month:** Monthly full backup

### Activity C: Storage Calculation ✅

**Calculation:**
- Week 1: 500GB (full) + 6×25GB (incremental) = **650GB**
- Week 2: 500GB (full) + 6×25GB = **650GB**
- Week 3: 500GB (full) + 6×25GB = **650GB**
- Week 4: 500GB (full) + 6×25GB = **650GB**
- **Total required: 2,600GB (2.6TB)**

*Note: 5% of 500GB = 25GB daily change*

### Activity D: RTO/RPO Analysis ✅

| Scenario | RTO | RPO | Justification |
|----------|-----|-----|---------------|
| E-commerce website | 1 hour | 5 min | Revenue loss critical |
| Email server | 4 hours | 1 hour | Important but not instant |
| HR database | 24 hours | 4 hours | Used periodically |
| Development server | 1 week | 24 hours | Non-production |
| Financial trading | 5 min | 5 min | Real-time critical |

### Activity E: Router Configuration Backup ✅

1. Show running configuration:
```
show running-config
```

2. Copy running to startup:
```
copy running-config startup-config
```

3. Backup to TFTP server:
```
copy running-config tftp://192.168.1.100/router-backup.cfg
```

4. Verify backup:
```
show startup-config
dir flash:
```

### Activity F: DR Site Planning ✅

| Organization | Site Type | Justification | Activation Time |
|--------------|-----------|---------------|-----------------|
| Online bank | Hot | Zero downtime tolerance | <1 hour |
| Local dentist | Cold | Can reschedule patients | 1-2 days |
| Manufacturing | Warm | Production critical | 4-8 hours |
| Law firm | Warm | Client data important | 4-12 hours |
| Hospital | Hot | Life critical systems | Immediate |

### Activity G: 3-2-1 Implementation ✅

**Example Home Network Strategy:**

**Copy 1 (Primary):**
- Location: Main computer/NAS
- Media type: Hard drive/SSD

**Copy 2 (Local backup):**
- Location: External USB drive
- Media type: Different HDD

**Copy 3 (Offsite):**
- Location: Cloud service (Google Drive/Backblaze)
- Media type: Cloud storage

Sync frequency: Daily incremental, weekly full

### Activity H: Business Impact Analysis ✅

| System | Maximum Tolerable Downtime | Financial Impact/Hour | Priority |
|--------|---------------------------|----------------------|----------|
| Core router | 5 minutes | $50,000 | Critical |
| DNS server | 30 minutes | $10,000 | Critical |
| File server | 2 hours | $5,000 | High |
| VoIP system | 1 hour | $8,000 | High |
| Guest WiFi | 8 hours | $500 | Low |

### Activity I: Backup Testing Plan ✅

All checkboxes should be marked as this represents a complete testing strategy. Key points:
- **Monthly:** Basic functionality tests
- **Quarterly:** Comprehensive restore tests
- **Annual:** Full DR exercises

### Activity J: Cloud Backup Strategy ✅

| Data Type | Local Only | Hybrid | Cloud Only | Reason |
|-----------|------------|---------|------------|---------|
| Customer database | | ✓ | | Security + accessibility |
| Security footage | ✓ | | | Bandwidth limitations |
| Config files | | | ✓ | Small size, version control |
| Development code | | | ✓ | Collaboration, Git |
| Compliance docs | | ✓ | | Regulatory requirements |

### Activity K: MTBF/MTTR Calculation ✅

**Scenario 1:**
- MTBF: 8,760 ÷ 3 = **2,920 hours**
- MTTR: 12 ÷ 3 = **4 hours**
- Availability: (8,760 - 12) ÷ 8,760 = **99.86%**

**Scenario 2:**
- Expected availability: 50,000 ÷ (50,000 + 4) = **99.992%**
- Downtime per year: 8,760 × 0.00008 = **0.7 hours (42 minutes)**

### Activity L: DR Documentation Template ✅

Example completed template:
```
DISASTER RECOVERY PLAN
Company: ABC Corporation

1. Emergency Contacts
   Primary: IT Manager - John Smith Phone: 555-1234
   Secondary: Network Admin - Jane Doe Phone: 555-5678
   
2. Critical Systems (in priority order)
   1. Core network (routers/switches)
   2. Active Directory / DNS
   3. Email and communications
   
3. Recovery Procedures
   Step 1: Activate DR site / Notify team
   Step 2: Restore network connectivity
   Step 3: Restore critical services per priority
   
4. Backup Locations
   Primary: On-site backup server
   Secondary: AWS S3 bucket / Iron Mountain
   
5. Success Criteria
   □ All critical services operational
   □ User access restored
   □ Data integrity verified
```

---

## Real-World Context & Best Practices

### Why This Matters
- **Data is currency:** Lost data = lost money/reputation
- **Compliance:** Many regulations require backup/DR plans
- **Business survival:** 60% of companies fail within 6 months of major data loss
- **Ransomware:** Good backups are best defense

### Common Mistakes to Avoid
❌ Never testing restore procedures
❌ Storing all backups in same location
❌ Not encrypting sensitive backups
❌ Forgetting to backup configurations
❌ No documentation of procedures

### Industry Best Practices
✅ **Test monthly:** Restore random files
✅ **Full DR test annually:** Complete failover
✅ **Automate backups:** Reduce human error
✅ **Monitor success:** Alert on failures
✅ **Version control:** For configurations

---

## Exam Tips 📝

### Must Memorize:
1. **3-2-1 Rule:** 3 copies, 2 media, 1 offsite
2. **Backup Types:**
   - Full: Everything, resets archive bit
   - Incremental: Since last backup, resets bit
   - Differential: Since last full, doesn't reset
3. **DR Sites:**
   - Cold: Empty room
   - Warm: Partial equipment
   - Hot: Fully operational
4. **Metrics:**
   - RTO: Recovery time
   - RPO: Data loss tolerance
   - MTTR: Repair time
   - MTBF: Time between failures

### Common Exam Questions:
- "Which backup type requires ALL previous backups to restore?" → **Incremental**
- "What site can be operational in minutes?" → **Hot site**
- "What defines maximum acceptable data loss?" → **RPO**
- "Best practice for backup copies?" → **3-2-1 rule**

### Exam Strategy:
- Incremental = Fastest backup, slowest restore
- Differential = Balance of speed and storage
- Lower RTO/RPO = More expensive solution
- GFS = Common rotation scheme

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Understood differences between backup types
□ Calculated storage requirements accurately
□ Applied 3-2-1 rule to real scenario
□ Determined appropriate RTO/RPO values
□ Selected correct DR site types
□ Created backup schedule with GFS
□ Backed up router configuration
□ Calculated MTBF/MTTR correctly
□ Documented DR procedures

### Troubleshooting Common Issues

**Problem:** Backups failing
**Solution:** Check storage space, network connectivity, credentials, backup window

**Problem:** Slow backup performance
**Solution:** Use incremental, schedule off-hours, check bandwidth, deduplicate

**Problem:** Can't restore files
**Solution:** Test restore process, verify backup integrity, check encryption keys

**Problem:** RPO/RTO not met
**Solution:** Increase backup frequency, upgrade DR site, improve procedures

---

## Real-World Scenarios

### Scenario 1: Ransomware Attack
**Situation:** All servers encrypted
**Recovery:**
1. Isolate infected systems
2. Assess backup integrity
3. Restore from clean backups (before infection)
4. Verify no malware in backups
5. Implement additional security

### Scenario 2: Hardware Failure
**Situation:** RAID controller failed
**Recovery:**
1. Activate warm site procedures
2. Restore from last night's backup
3. Accept 1 day RPO data loss
4. Order replacement hardware
5. Plan maintenance window

### Scenario 3: Natural Disaster
**Situation:** Data center flooded
**Recovery:**
1. Activate hot site
2. Redirect DNS/traffic
3. Notify stakeholders
4. Begin insurance claim
5. Plan rebuild

---

## Lab Summary

### Key Concepts Mastered:
✅ Backup strategies protect against data loss
✅ 3-2-1 rule ensures backup resilience
✅ RTO/RPO drive business decisions
✅ Different backup types serve different needs
✅ DR sites range from cold to hot
✅ Regular testing validates procedures
✅ Documentation enables smooth recovery

### Time-Saving Tips:
- Automate backup scheduling
- Use backup software with verification
- Create restore procedure checklists
- Template DR documentation
- Script configuration backups

### Going Further:
- Set up automated home backups
- Practice with free tools (rsync, Veeam Community)
- Create personal DR plan
- Test cloud backup services
- Learn backup scripting

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for backup and DR exam questions!

**Next Lab:** Lesson 19 - High Availability and Redundancy

### Final Tip:
"Backups are like insurance - you hope you never need them, but you'll be grateful when you do!" Test your restores, not just your backups.

---