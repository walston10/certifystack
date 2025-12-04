# Lab 59: Backup and Recovery Procedures - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Full vs Incremental

| Full Backup | Incremental Backup |
|-------------|-------------------|
| Backs up everything | Backs up changes since LAST backup |
| Takes longest | Takes shortest |
| Uses most storage | Uses least storage |
| Single backup to restore | Need full + all incrementals |
| Self-contained | Dependent on chain |

---

### Question 2: 3-2-1 Rule

**3** = Three copies of your data (original + 2 backups)
**2** = Two different media types (e.g., local disk + cloud)
**1** = One copy off-site (protects against fire, flood, theft)

**Example:** Data on server + NAS backup + cloud backup

---

### Question 3: RTO

**RTO (Recovery Time Objective):** Maximum acceptable time to restore service after disaster

**Why important:**
- Defines how fast recovery must be
- Determines backup strategy and resources needed
- Sets user expectations
- Affects business continuity planning
- Influences budget (faster = more expensive)

---

### Question 4: RPO

**RPO (Recovery Point Objective):** Maximum acceptable data loss measured in time

**Effect on backup frequency:**
- RPO of 24 hours → Daily backup acceptable
- RPO of 4 hours → Backup every 4 hours minimum
- RPO of 0 → Real-time replication needed

**Example:** RPO of 1 hour means if disaster hits at 3:00 PM and last backup was 2:30 PM, losing 30 minutes of data is acceptable.

---

### Question 5: Testing Restores

**Why important:**
- Backups may be corrupted without knowing
- Restore process may have changed
- Staff needs practice before emergency
- Validates RTO is achievable
- Identifies missing data or configurations

**"A backup that hasn't been tested is not a backup."**

---

## Section 2: Activities - Answers

### Activity A: Backup Types

| Type | What It Backs Up | Storage | Restore Speed | Backup Speed |
|------|------------------|---------|---------------|--------------|
| Full | Everything | Largest | Fastest | Slowest |
| Incremental | Since last backup | Smallest | Slowest (need chain) | Fastest |
| Differential | Since last full | Medium | Medium (need 2) | Medium |
| Synthetic | Creates full from incrementals | Large | Fast | Backend process |

**Incremental chain (Full Sunday):**

| Day | Type | Contains | To Restore Friday |
|----|------|----------|-------------------|
| Sun | Full | All data | Need Sun |
| Mon | Incr | Mon changes | + Mon |
| Tue | Incr | Tue changes | + Tue |
| Wed | Incr | Wed changes | + Wed |
| Thu | Incr | Thu changes | + Thu |
| Fri | Incr | Fri changes | + Fri = 6 backups |

**Differential:**

| Day | Type | Contains | To Restore Friday |
|----|------|----------|-------------------|
| Sun | Full | All data | Need Sun |
| Mon | Diff | All since Sun | |
| Fri | Diff | All since Sun | + Fri = 2 backups |

---

### Activity B: Windows Backup

**Windows backup methods:**

| Method | Purpose | Location |
|--------|---------|----------|
| File History | Continuous file backup, version history | Settings → Backup |
| System Image | Complete system snapshot | Control Panel → Backup and Restore |
| OneDrive sync | Cloud sync for Documents, Desktop | OneDrive settings |
| Windows Backup | New unified backup (Win 11) | Settings → Accounts → Windows Backup |

---

### Activity C: 3-2-1 Planning

**Example plan for 500GB business data:**

| Requirement | Implementation |
|-------------|----------------|
| 3 copies | Server (original), NAS (local), Cloud (off-site) |
| 2 media types | Local disk (NAS) + Cloud storage |
| 1 off-site | Cloud backup (Backblaze/AWS/Azure) |

**Implementation:**

| Copy | Media | Location | Frequency |
|------|-------|----------|-----------|
| 1 (Primary) | Server SSD | On-premises | Live data |
| 2 (Local) | NAS (RAID) | Same building | Daily incremental |
| 3 (Off-site) | Cloud | Data center | Daily sync |

**Cost estimate:**

| Item | Monthly Cost |
|------|--------------|
| NAS (amortized) | $50 |
| Cloud (500GB) | $25 |
| **Total** | **$75** |

---

### Activity D: RTO/RPO

| System | RTO | RPO | Justification |
|--------|-----|-----|---------------|
| Email server | 4 hours | 1 hour | Critical communication |
| E-commerce | 1 hour | 15 min | Revenue loss per minute |
| Dev server | 24 hours | 24 hours | Can recreate, not urgent |
| File server | 4 hours | 4 hours | Important but not critical |
| Payroll | 8 hours | 24 hours | Critical at month-end only |

**RTO/RPO guide:**

| Value | Meaning | Systems |
|-------|---------|---------|
| Minutes | Mission critical | E-commerce, trading |
| Hours | Business critical | Email, file servers |
| Days | Important | Dev, archives |

**RPO → Backup frequency:**

| RPO | Minimum Frequency |
|-----|-------------------|
| 24 hours | Daily |
| 4 hours | Every 4 hours |
| 1 hour | Hourly |
| 15 minutes | Continuous/real-time |

---

### Activity E: Backup Testing

**Testing checklist:**

| ☐ | Test | Frequency |
|---|------|-----------|
| ☐ | Verify backup completed | Daily (automated) |
| ☐ | Test file restore | Weekly |
| ☐ | Test system restore | Monthly |
| ☐ | Verify backup integrity | Weekly |
| ☐ | Test off-site restore | Quarterly |
| ☐ | Document restore time | Each test |

**Restore test procedure:**

| Step | Action | Expected |
|------|--------|----------|
| 1 | Select random file from backup | File listed |
| 2 | Restore to test location | Restore completes |
| 3 | Compare to original | Files match |
| 4 | Document time taken | Within RTO |

**Common failures:**

| Failure | Cause | Prevention |
|---------|-------|------------|
| Didn't run | Schedule error, drive full | Monitoring, alerts |
| Incomplete | Network issue, timeout | Retry logic, verification |
| Can't restore | Corrupted, wrong version | Regular test restores |
| Corrupted | Media failure, interrupted | Checksum verification |

---

### Activity F: GFS Rotation

**GFS structure:**

| Generation | Retention | Example |
|------------|-----------|---------|
| Son (Daily) | 1 week | Mon-Sat |
| Father (Weekly) | 4 weeks | Every Sunday |
| Grandfather (Monthly) | 12 months | First Sunday of month |

**1-year retention schedule:**

| Backup | Day | Kept For | Labels |
|--------|-----|----------|--------|
| Daily | Mon-Sat | 1 week | D1-D6 |
| Weekly | Sunday | 4 weeks | W1-W4 |
| Monthly | 1st Sunday | 12 months | M1-M12 |
| Yearly | Jan 1st | As needed | Y2024 |

**Media required:** 6 (daily) + 4 (weekly) + 12 (monthly) = **22 media sets**

---

### Activity G: Disaster Recovery

**Scenario 1: Deleted file from yesterday**

| Question | Answer |
|----------|--------|
| Which backup? | Last night's incremental |
| Maximum data loss? | Up to 24 hours of changes to that file |
| Recovery time? | 15-30 minutes |

**Scenario 2: Server drive fails**

| Question | Answer |
|----------|--------|
| Recovery steps | 1. Replace drive 2. Install OS 3. Restore system image 4. Restore data 5. Verify |
| Backups needed | System image + most recent data backup |
| Recovery time | 2-8 hours depending on data size |

**Scenario 3: Ransomware**

| Question | Answer |
|----------|--------|
| Immediate actions | Isolate server, don't pay, identify scope |
| Which backup? | Last known clean backup (before infection) |
| Verify clean? | Scan backup with updated AV, restore to isolated VM first |

---

## Section 3: Reflection - Answers

### Scenario 1: Untested Backups

**Possible problems:**
- Backup files may be corrupted
- Backup may be incomplete (missing files/folders)
- Restore process unknown - takes longer than expected
- Credentials may have changed
- Software version mismatch
- Recovery exceeds RTO because nobody practiced

**Reality:** They discover problems during the worst possible moment.

---

### Scenario 2: Backup Drive Failed with Server

**Prevention:**
- **Off-site backup** - 3-2-1 rule
- **Separate hardware** - Backup to NAS, not attached drive
- **Air-gapped backups** - Disconnect between backups
- **Cloud backup** - Physically separate location
- **Different failure domain** - Not same power/rack

**Key lesson:** Backup should never fail for same reason as primary.

---

### Scenario 3: File Deleted 3 Months Ago

**Business impact:**
- Data permanently lost
- May need to recreate (time/cost)
- Potential compliance violation
- Customer impact if their data

**Prevention:**
- Longer retention for important data
- Archive tier for old backups (cheaper storage)
- Classify data by retention requirements
- User education on importance of quick reporting

---

### Scenario 4: RTO Missed (12 hours vs 2)

**What went wrong (possibilities):**
- RTO was set without testing
- Full restore never practiced
- Backup size grew beyond estimates
- Network bandwidth insufficient
- Wrong backup type (incremental chain too long)
- Missing documentation slowed process
- Key personnel unavailable

**Fix:** Regular restore testing that measures actual time, not just "did it work."

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                  BACKUP & RECOVERY QUICK REFERENCE                         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BACKUP TYPES                                                              ║
║  Full = Everything | Incremental = Since last any | Differential = Since full
╠═══════════════════════════════════════════════════════════════════════════╣
║  3-2-1 RULE: 3 copies, 2 media types, 1 off-site                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  RTO = How fast to recover | RPO = How much data loss acceptable          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  TEST YOUR BACKUPS - Untested backups are not backups                     ║
╚═══════════════════════════════════════════════════════════════════════════╝
```