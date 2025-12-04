# Lab 59: Backup and Recovery Procedures

**Tier:** 1  
**Time:** 25-35 minutes  
**Exam Objectives:** 4.3 - Given a scenario, implement basic disaster prevention and recovery methods

---

## Section 1: Concept Check (5 min)

1. What is the difference between a full backup and an incremental backup?

2. Explain the 3-2-1 backup rule.

3. What is RTO (Recovery Time Objective) and why is it important?

4. What is RPO (Recovery Point Objective) and how does it affect backup frequency?

5. Why is it important to test backup restores regularly?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your Windows PC** - Explore built-in backup features.

#### Activity A: Backup Types Comparison

**Goal:** Understand different backup methods.

**Complete the backup comparison:**

| Backup Type | What It Backs Up | Storage Space | Restore Speed | Backup Speed |
|-------------|------------------|---------------|---------------|--------------|
| Full | | | | |
| Incremental | | | | |
| Differential | | | | |
| Synthetic full | | | | |

**Backup chain example (Full on Sunday):**

| Day | Backup Type | Contains | To Restore Friday's Data |
|----|-------------|----------|--------------------------|
| Sunday | Full | | |
| Monday | Incremental | | |
| Tuesday | Incremental | | |
| Wednesday | Incremental | | |
| Thursday | Incremental | | |
| Friday | Incremental | | |

**Same week with Differential:**

| Day | Backup Type | Contains | To Restore Friday's Data |
|----|-------------|----------|--------------------------|
| Sunday | Full | | |
| Monday | Differential | | |
| Friday | Differential | | |

---

#### Activity B: Windows Backup Exploration

**Goal:** Explore Windows backup options.

**Open Settings → System → Storage → Advanced storage settings → Backup options**

(Or search "Backup settings")

**Document current backup status:**

| Setting | Current Value |
|---------|---------------|
| Backup destination | |
| Last backup date | |
| Backup schedule | |
| Files included | |

**Windows backup methods:**

| Method | Purpose | Location |
|--------|---------|----------|
| File History | | |
| System Image | | |
| OneDrive sync | | |
| Windows Backup app | | |

---

#### Activity C: 3-2-1 Backup Planning

**Goal:** Design a 3-2-1 backup strategy.

**Scenario:** Small business with critical customer data, 500GB total.

**3-2-1 Requirements:**

| Requirement | Your Plan |
|-------------|-----------|
| 3 copies | |
| 2 different media | |
| 1 off-site | |

**Implementation:**

| Copy | Media Type | Location | Frequency |
|------|------------|----------|-----------|
| 1 (Primary) | | | |
| 2 (Local backup) | | | |
| 3 (Off-site) | | | |

**Cost estimate:**

| Item | Monthly Cost |
|------|--------------|
| | |
| | |
| Total | |

---

#### Activity D: RTO and RPO Analysis

**Goal:** Determine appropriate RTO/RPO.

**Define for each system:**

| System | RTO | RPO | Justification |
|--------|-----|-----|---------------|
| Email server | | | |
| E-commerce website | | | |
| Development server | | | |
| File server | | | |
| Payroll system | | | |

**RTO/RPO guide:**

| Value | Meaning | Typical Systems |
|-------|---------|-----------------|
| Minutes | | |
| Hours | | |
| Days | | |

**How RPO affects backup schedule:**

| RPO | Minimum Backup Frequency |
|-----|--------------------------|
| 24 hours | |
| 4 hours | |
| 1 hour | |
| 15 minutes | |

---

#### Activity E: Backup Testing Plan

**Goal:** Create a backup testing procedure.

**Testing checklist:**

| ☐ | Test Item | Frequency |
|---|-----------|-----------|
| | Verify backup completed | |
| | Test file restore | |
| | Test system restore | |
| | Verify backup integrity | |
| | Test off-site restore | |
| | Document restore time | |

**Restore test procedure:**

| Step | Action | Expected Result |
|------|--------|-----------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

**Common backup failures:**

| Failure | Cause | Prevention |
|---------|-------|------------|
| Backup didn't run | | |
| Backup incomplete | | |
| Can't restore | | |
| Corrupted backup | | |

---

#### Activity F: Grandfather-Father-Son Rotation

**Goal:** Understand backup rotation schemes.

**GFS Schedule:**

| Generation | Retention | Example |
|------------|-----------|---------|
| Son (Daily) | | |
| Father (Weekly) | | |
| Grandfather (Monthly) | | |

**Design a GFS schedule:**

For a company requiring 1 year of backup history:

| Backup | Day | Kept For | Label |
|--------|-----|----------|-------|
| Daily | | | |
| Weekly | | | |
| Monthly | | | |
| Yearly | | | |

**Total media required:** _______

---

#### Activity G: Disaster Recovery Scenarios

**Goal:** Apply backup knowledge to recovery scenarios.

**Scenario 1:** User accidentally deletes important file from yesterday.

| Question | Answer |
|----------|--------|
| Which backup do you restore from? | |
| What's the maximum data loss? | |
| Estimated recovery time? | |

**Scenario 2:** Server hard drive completely fails.

| Question | Answer |
|----------|--------|
| Recovery steps in order | |
| What backups are needed? | |
| Estimated recovery time? | |

**Scenario 3:** Ransomware encrypts all files on file server.

| Question | Answer |
|----------|--------|
| Immediate actions | |
| Which backup to use? | |
| How to verify backup is clean? | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A company backs up data every night, but has never tested a restore. The server fails. What problems might they encounter?

**Scenario 2:** After a server crash, you discover the backup drive was connected to the server and also failed. How could this have been prevented?

**Scenario 3:** A user needs to recover a file they deleted 3 months ago. Your backup retention is only 30 days. What's the business impact and how do you prevent this?

**Scenario 4:** Recovery from backup is taking 12 hours, but the business expected 2 hours (RTO was 2 hours). What went wrong?

---

## What You Learned Today

- ✅ Backup types (full, incremental, differential)
- ✅ Windows backup options
- ✅ 3-2-1 backup strategy
- ✅ RTO and RPO concepts
- ✅ Backup testing procedures
- ✅ GFS rotation scheme
- ✅ Disaster recovery application

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                  BACKUP & RECOVERY QUICK REFERENCE                         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BACKUP TYPES                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Full         → Everything, slow backup, fast restore                     ║
║  Incremental  → Changes since LAST backup, fast, needs chain              ║
║  Differential → Changes since last FULL, medium, needs 2 backups          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  3-2-1 RULE                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  3 copies of data                                                         ║
║  2 different media types                                                  ║
║  1 copy off-site                                                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  RTO vs RPO                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  RTO (Recovery Time) = How fast you must recover                          ║
║  RPO (Recovery Point) = How much data loss is acceptable                  ║
║  RPO 4 hours → Backup at least every 4 hours                              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  GFS ROTATION                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Son (Daily)       → Keep 1 week                                          ║
║  Father (Weekly)   → Keep 1 month                                         ║
║  Grandfather (Monthly) → Keep 1 year                                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  CRITICAL REMINDERS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  • Untested backups are not backups                                       ║
║  • Off-site protects against site disasters                               ║
║  • Ransomware can encrypt connected backup drives                         ║
║  • Document your restore procedures                                       ║
╚═══════════════════════════════════════════════════════════════════════════╝
```