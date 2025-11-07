# Lab 18: Backup and Disaster Recovery
**Time:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain:** Network Operations (3.0)

## Lab Objectives
- Understand and differentiate backup types
- Design backup strategies using 3-2-1 rule
- Calculate RTO and RPO for business scenarios
- Create disaster recovery documentation
- Practice configuration backup procedures

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What's the difference between incremental and differential backups?**
   Incremental: ________________________________________
   Differential: _______________________________________

2. **What does the 3-2-1 backup rule mean?**
   3: _________________________________________________
   2: _________________________________________________
   1: _________________________________________________

3. **Define these DR metrics:**
   RTO: _______________________________________________
   RPO: _______________________________________________
   MTTR: ______________________________________________
   MTBF: ______________________________________________

4. **Rank these DR sites from least to most expensive:**
   ___ Hot site
   ___ Warm site
   ___ Cold site

5. **What's the difference between running-config and startup-config?**
   _________________________________________________
   _________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Backup Type Comparison 💾
**Time:** 3 minutes

Complete this backup comparison table:

| Backup Type | What's Backed Up | Archive Bit Reset | Restore Complexity | Storage Required |
|------------|------------------|-------------------|-------------------|------------------|
| Full | | | | |
| Incremental | | | | |
| Differential | | | | |
| Snapshot | | | | |

---

### Activity B: Backup Schedule Design 📅
**Time:** 3 minutes

Design a GFS (Grandfather-Father-Son) rotation:

**Daily (Son):** Keep for _______ days
**Weekly (Father):** Keep for _______ weeks  
**Monthly (Grandfather):** Keep for _______ months

Create a backup schedule for a small business:
```
Sunday: ____________________
Monday: ____________________
Tuesday: ___________________
Wednesday: _________________
Thursday: __________________
Friday: ____________________
Saturday: __________________
```

---

### Activity C: Storage Calculation 🧮
**Time:** 3 minutes

Calculate backup storage requirements:

**Scenario:** 
- Data size: 500GB
- Full backup: Weekly
- Incremental: Daily
- Daily change rate: 5%
- Retention: 4 weeks

Week 1 storage: _______________ GB
Week 2 storage: _______________ GB
Week 3 storage: _______________ GB
Week 4 storage: _______________ GB
**Total required:** ___________ GB

---

### Activity D: RTO/RPO Analysis ⏱️
**Time:** 3 minutes

Match appropriate RTO/RPO to business scenarios:

| Scenario | RTO | RPO | Justification |
|----------|-----|-----|---------------|
| E-commerce website | | | |
| Email server | | | |
| HR database | | | |
| Development server | | | |
| Financial trading system | | | |

Options: 5 min, 1 hour, 4 hours, 24 hours, 1 week

---

### Activity E: Router Configuration Backup 🔧
**Time:** 3 minutes

Document the commands to backup a Cisco router:

1. Show running configuration:
```
________________________________
```

2. Copy running to startup:
```
________________________________
```

3. Backup to TFTP server:
```
________________________________
```

4. Verify backup:
```
________________________________
```

---

### Activity F: Disaster Recovery Site Planning 🏢
**Time:** 3 minutes

Design appropriate DR sites for these organizations:

| Organization | Site Type | Justification | Activation Time |
|--------------|-----------|---------------|-----------------|
| Online bank | | | |
| Local dentist office | | | |
| Manufacturing plant | | | |
| Law firm | | | |
| Hospital | | | |

---

### Activity G: 3-2-1 Implementation 📦
**Time:** 3 minutes

Create a 3-2-1 backup strategy for your home network:

**Copy 1 (Primary):**
Location: ___________________________________________
Media type: _________________________________________

**Copy 2 (Local backup):**
Location: ___________________________________________
Media type: _________________________________________

**Copy 3 (Offsite):**
Location: ___________________________________________
Media type: _________________________________________

Sync frequency: _____________________________________

---

### Activity H: Business Impact Analysis 📊
**Time:** 3 minutes

Assess impact of system failures:

| System | Maximum Tolerable Downtime | Financial Impact/Hour | Priority |
|--------|---------------------------|----------------------|----------|
| Core router | | | |
| DNS server | | | |
| File server | | | |
| VoIP system | | | |
| Guest WiFi | | | |

Priority: Critical, High, Medium, Low

---

### Activity I: Backup Testing Plan ✅
**Time:** 2 minutes

Create a backup verification checklist:

**Monthly tests:**
□ Restore random file from backup
□ Verify backup logs for errors
□ Check backup storage capacity
□ Test backup notification alerts
□ Document restoration time

**Quarterly tests:**
□ Full restore to test system
□ Verify offsite backup accessibility
□ Test backup encryption
□ Review retention policies
□ Update DR contact list

**Annual tests:**
□ Complete DR drill
□ Review and update procedures
□ Test failover to DR site
□ Audit backup compliance
□ Train new staff

---

### Activity J: Cloud Backup Strategy ☁️
**Time:** 3 minutes

Evaluate cloud backup for these scenarios:

| Data Type | Local Only | Hybrid | Cloud Only | Reason |
|-----------|------------|---------|------------|---------|
| Customer database | | | | |
| Security footage | | | | |
| Config files | | | | |
| Development code | | | | |
| Compliance docs | | | | |

Consider: Cost, bandwidth, security, compliance, recovery speed

---

### Activity K: MTBF/MTTR Calculation 🔢
**Time:** 2 minutes

Calculate availability metrics:

**Scenario 1:** Server with 3 failures in 1 year
- Total downtime: 12 hours
- Operating hours: 8,760 (24/7)
- MTBF: _________________ hours
- MTTR: _________________ hours
- Availability: ___________%

**Scenario 2:** Network device
- MTBF: 50,000 hours
- MTTR: 4 hours
- Expected availability: ___________%
- Downtime per year: _____________ hours

---

### Activity L: DR Documentation Template 📝
**Time:** 3 minutes

Create a DR plan outline:

```
DISASTER RECOVERY PLAN
Company: _________________

1. Emergency Contacts
   Primary: _______________ Phone: ___________
   Secondary: _____________ Phone: ___________
   
2. Critical Systems (in priority order)
   1. _______________________________________
   2. _______________________________________
   3. _______________________________________
   
3. Recovery Procedures
   Step 1: __________________________________
   Step 2: __________________________________
   Step 3: __________________________________
   
4. Backup Locations
   Primary: _________________________________
   Secondary: _______________________________
   
5. Success Criteria
   □ _______________________________________
   □ _______________________________________
   □ _______________________________________
```

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your company's main office flooded. Design the recovery:

1. **Immediate actions:** (First 4 hours)
   • _____________________________________________
   • _____________________________________________
   • _____________________________________________

2. **Recovery sequence:** (Systems to restore in order)
   1st: __________________________________________
   2nd: __________________________________________
   3rd: __________________________________________

3. **Communication plan:**
   Internal: _____________________________________
   External: _____________________________________

### Best Practices Checklist
Check off DR practices you'll implement:

□ Document all backup procedures
□ Test restores regularly (not just backups)
□ Keep offsite copies secure
□ Encrypt sensitive backups
□ Maintain updated contact lists
□ Version configuration files
□ Monitor backup job success
□ Calculate and document RTO/RPO
□ Automate where possible
□ Train multiple team members

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Differentiate backup types (full, incremental, differential)
□ Implement 3-2-1 backup rule
□ Calculate storage requirements
□ Define and measure RTO/RPO
□ Design GFS rotation schemes
□ Select appropriate DR sites
□ Backup network configurations
□ Create business impact analysis
□ Calculate MTBF/MTTR
□ Document DR procedures

### Exam Preparation
⚠️ **Know for the exam:**
- **3-2-1 rule:** 3 copies, 2 media types, 1 offsite
- **RTO:** Time to restore after disaster
- **RPO:** Maximum acceptable data loss
- **Backup types:** Full, Incremental, Differential
- **DR sites:** Cold (empty), Warm (partial), Hot (ready)
- **GFS:** Grandfather-Father-Son rotation
- Archive bit behavior with each backup type

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐☆☆

**Ready for:** Lesson 19 - High Availability and Redundancy

### Remember
"It's not IF a disaster will happen, but WHEN!" Regular backups and tested DR plans are your insurance policy. The time to find out your backups don't work is NOT during a disaster!

---