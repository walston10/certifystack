# Lesson 18: Backup and Disaster Recovery

**Estimated Time:** 20-25 minutes  
**Domain:** Network Operations  
**Exam Objectives Covered:** 3.2 - Business Continuity

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Differentiate backup types (full, incremental, differential, snapshot)
- Apply the 3-2-1 backup rule
- Understand Grandfather-Father-Son (GFS) backup rotation
- Determine appropriate backup frequency and retention
- Compare backup locations (on-site, off-site, cloud)
- Explain RTO and RPO and their business impact
- Understand MTTR and MTBF metrics
- Backup network device configurations
- Distinguish startup-config from running-config
- Create and test disaster recovery plans
- Compare disaster recovery sites (cold, warm, hot)

---

## Video Resources

🔹 **Backup Types:** [Backup Strategies - Professor Messer](https://www.youtube.com/watch?v=6mYRje5fF0U)  
🔹 **Disaster Recovery:** [DR Planning - PowerCert](https://www.youtube.com/watch?v=1F7D5dRfX7k)  
🔹 **3-2-1 Rule:** [Backup Best Practices - NetworkChuck](https://www.youtube.com/watch?v=vHVvdZoKPC8)  
🔹 **RTO vs RPO:** [Recovery Objectives - Sunny Classroom](https://www.youtube.com/watch?v=UqZKw8b_FyY)

---

## Introduction

Picture this: A fire destroys your datacenter at 3 AM. Servers are gone. Storage arrays are melted. Years of data - customer records, financial data, network configurations - potentially lost forever.

**Do you have backups? Where are they? When were they last tested?**

If you answered "I think so," "not sure," and "never," you're about to learn why that's a career-ending answer.

**Backups are insurance - you don't appreciate them until disaster strikes.**

Hard drives fail. Ransomware encrypts data. Floods destroy buildings. Employees make mistakes. Without backups, these incidents go from "inconvenient" to "company-ending."

**Why does this matter for Network+?**

The exam tests backup types, strategies (3-2-1 rule, GFS), recovery objectives (RTO/RPO), and disaster recovery planning. You need to know how to protect data and ensure business continuity when things go wrong.

**Today's mission:** Master backup strategies from full to incremental, understand the 3-2-1 rule, learn about disaster recovery planning, and ensure you can recover when - not if - disaster strikes.

Let's build a safety net that actually works.

---

## Backup Types

Different backup methods balance speed, storage space, and recovery time.

---

### Full Backup

**Full backup copies everything** - all selected files, regardless of when they were last backed up.

**Characteristics:**
- Backs up all data every time
- Slowest backup (copies everything)
- Largest storage requirement
- Fastest restore (everything in one backup)

**Example:**
```
Monday: Full backup (100 GB)
- Copies: File A, File B, File C, File D
```

**Advantages:**
- Complete backup in one set
- Simplest to restore
- No dependency on other backups

**Disadvantages:**
- Time-consuming (hours for large systems)
- Requires most storage space
- Network intensive (if backing up over network)

**When to use:**
- Weekly baseline
- Before major changes
- Small datasets that backup quickly

**Memory trick:** Full = **F**ull copy of **E**verything, **E**very time

---

### Incremental Backup

**Incremental backup copies only files changed since the last backup (full OR incremental).**

**Characteristics:**
- Backs up only changes since last backup
- Fastest backup
- Least storage space
- Slowest restore (need multiple backups)

**Example:**
```
Monday: Full backup (100 GB)
- Copies: File A, File B, File C, File D

Tuesday: Incremental (5 GB)
- Copies only: File A (modified)

Wednesday: Incremental (3 GB)
- Copies only: File B (modified)

Thursday: Incremental (7 GB)
- Copies only: File C, File D (modified)
```

**To restore from Thursday:** Need Monday full + Tuesday + Wednesday + Thursday incrementals

**Advantages:**
- Fast backup (only changes)
- Minimal storage space
- Efficient use of bandwidth

**Disadvantages:**
- Slow restore (need all backups in chain)
- If one incremental corrupted, chain breaks
- Complex restore process

**When to use:**
- Daily backups (with weekly full)
- Large datasets
- Frequent backups needed

**Memory trick:** Incremental = **I**ncreases incrementally, backup **C**hanges since last backup

---

### Differential Backup

**Differential backup copies all files changed since the last FULL backup.**

**Characteristics:**
- Backs up everything changed since last full
- Slower than incremental (more data each day)
- More storage than incremental
- Faster restore than incremental

**Example:**
```
Monday: Full backup (100 GB)
- Copies: File A, File B, File C, File D

Tuesday: Differential (5 GB)
- Copies: File A (modified since Monday)

Wednesday: Differential (8 GB)
- Copies: File A, File B (both modified since Monday)

Thursday: Differential (15 GB)
- Copies: File A, File B, File C, File D (all modified since Monday)
```

**To restore from Thursday:** Need only Monday full + Thursday differential

**Advantages:**
- Faster restore than incremental (only need full + latest differential)
- More reliable (no chain dependency)
- Still saves space vs. full backups

**Disadvantages:**
- Slower backup than incremental (grows each day)
- More storage than incremental
- Each differential larger than previous

**When to use:**
- Balance between backup speed and restore speed
- When restore time is critical

**Memory trick:** Differential = **D**ifference from full, grows **D**aily

---

### Backup Type Comparison

| Backup Type | Speed | Storage | Restore Speed | Restore Complexity |
|-------------|-------|---------|---------------|-------------------|
| **Full** | Slowest | Most | Fastest | Simple (one set) |
| **Incremental** | Fastest | Least | Slowest | Complex (full + all incrementals) |
| **Differential** | Medium | Medium | Medium | Moderate (full + latest differential) |

**Common strategy:** Full weekly + Incremental daily

**Visual comparison of storage growth:**

```
Full Backup (every day):
Mon: ████████████████████████████ (100 GB)
Tue: ████████████████████████████ (100 GB)
Wed: ████████████████████████████ (100 GB)

Incremental Backup:
Mon: ████████████████████████████ (100 GB full)
Tue: ██ (5 GB)
Wed: █ (3 GB)

Differential Backup:
Mon: ████████████████████████████ (100 GB full)
Tue: ██ (5 GB)
Wed: ████ (8 GB - cumulative)
```

**Memory trick for restore needs:**
- **Full:** Just **F**ull backup (easiest)
- **Incremental:** **I**ncreasingly many backups needed (full + all incrementals)
- **Differential:** **D**uo only (full + one differential)

---

### Snapshot

**A snapshot is a point-in-time copy of data** - captures the state at a specific moment.

**Characteristics:**
- Nearly instantaneous
- Uses copy-on-write technology
- Common in virtual environments
- Not a replacement for backups

**How snapshots work:**
1. Create snapshot (instant)
2. Original data blocks marked as read-only
3. When data changes, original copied to snapshot before modification
4. Snapshot contains point-in-time view

**Use cases:**
- Before patches/updates (quick rollback)
- Before major changes
- Testing (restore to snapshot after test)
- Virtual machine backups

**Important:** Snapshots are NOT backups
- Stored on same storage as original
- If storage fails, snapshots lost too
- Use snapshots WITH backups, not instead of

**Memory trick:** Snapshot = **S**ingle **N**ow moment, **A**lmost instant **P**oint-in-time

---

## Backup Strategies

### The 3-2-1 Backup Rule

**Industry best practice: 3-2-1 rule**

**3** copies of data (1 original + 2 backups)  
**2** different media types  
**1** copy offsite

**Example implementation:**

**3 copies:**
- Original data on production servers
- Backup #1 on local NAS
- Backup #2 on cloud storage

**2 media types:**
- Local backup on disk (NAS)
- Cloud backup on different storage

**1 offsite:**
- Cloud backup is offsite
- Or tape backup stored at different location

**Why this works:**
- Protects against hardware failure (multiple copies)
- Protects against media failure (different types)
- Protects against site disaster (offsite copy)

**What it doesn't protect against:** Ransomware (if backups mounted/online)

**Enhanced rule: 3-2-1-1-0**
- **3** copies
- **2** media types
- **1** offsite
- **1** offline/air-gapped (disconnected - ransomware protection)
- **0** errors (test backups regularly)

**Memory trick:** 3-2-1 = **T**hree copies, **T**wo types, **O**ne offsite

---

### Grandfather-Father-Son (GFS)

**GFS is a backup rotation scheme** providing multiple restore points.

**Three generations of backups:**

**Son (Daily):**
- Daily incremental or differential
- Keep 1 week (Monday-Friday)
- Overwrites each week

**Father (Weekly):**
- Weekly full backup
- Keep 4-5 weeks (one per week)
- Overwrites monthly

**Grandfather (Monthly):**
- Monthly full backup
- Keep 12 months (one per month)
- Keep some yearly

**Example schedule:**

```
Daily (Son): Mon, Tue, Wed, Thu, Fri backups (5 tapes/disks)
Weekly (Father): Week 1, Week 2, Week 3, Week 4 backups (4 tapes)
Monthly (Grandfather): Jan, Feb, Mar... Dec backups (12 tapes)
Yearly: 2023, 2024, 2025... (retained as needed)
```

**Total media needed:** 5 daily + 4 weekly + 12 monthly = 21 tapes/disks (minimum)

**Benefits:**
- Multiple restore points
- Long-term retention
- Balanced between media cost and retention
- Proven strategy

**When to use:**
- Traditional backup approach
- Compliance requirements (long retention)
- Tape-based backups

**Memory trick:** GFS = **G**eneration (daily), **F**ortnight (weekly), **S**eason (monthly)  
*Or: Grandpa's old photos (long-term), Father's recent photos (medium-term), Son's today photos (short-term)*

---

### Backup Frequency

**How often to backup depends on:**
- How much data can you afford to lose? (RPO)
- How quickly data changes
- Compliance requirements
- Available backup window

**Common schedules:**

**Critical systems:**
- Continuous replication or
- Hourly snapshots + daily backups

**Production servers:**
- Full weekly (Sunday night)
- Incremental daily (every night)

**Workstations:**
- Daily or weekly (less critical)

**Network configs:**
- After every change
- Automated nightly backup
- Before maintenance

**Backup window:** Time available for backups (typically nights/weekends)
- If backup takes 6 hours, need 6-hour window
- Incremental backups help fit in smaller windows

---

### Retention Policies

**How long to keep backups?**

**Considerations:**
- Regulatory requirements (HIPAA, SOX, GDPR)
- Business needs
- Storage costs
- Legal holds

**Common retention periods:**

**Daily backups:** 7-30 days  
**Weekly backups:** 4-12 weeks  
**Monthly backups:** 12 months  
**Yearly backups:** 7 years (common for compliance)

**Legal requirements vary:**
- **Healthcare (HIPAA):** 6 years
- **Financial (SOX):** 7 years
- **GDPR:** "As long as necessary" (varies)

**Retention best practice:**
- Document retention policy
- Automate deletion after retention period
- Keep some backups longer for legal/compliance
- Review policy annually

**Memory trick for retention:** Think **7-30-90-365-Forever**
- 7 days (daily backups)
- 30 days (monthly)
- 90 days (quarterly)
- 365 days (yearly)
- Forever (critical yearly archives)

---

## Backup Locations

### On-Site Backup

**Backup stored at same location as original data.**

**Examples:**
- Local NAS or SAN
- Tape library in same building
- Backup server in same datacenter

**Advantages:**
- Fast backup (local network)
- Fast restore (local access)
- Lower cost (no cloud fees)
- Full control

**Disadvantages:**
- Vulnerable to site disasters (fire, flood, theft)
- Single point of failure
- Limited by local resources

**When to use:**
- First backup copy
- Quick restore capability
- Part of 3-2-1 strategy (not only backup)

---

### Off-Site Backup

**Backup stored at different physical location.**

**Examples:**
- Tape backup transported to vault
- Backup datacenter in different city
- Cloud storage

**Advantages:**
- Protected from site disasters
- Meets compliance requirements
- Critical for business continuity

**Disadvantages:**
- Slower restore (must retrieve from off-site)
- More expensive (transportation, storage fees)
- Less control

**How far offsite?**
- Minimum: Different building
- Better: Different city (protects against regional disasters)
- Best: Different region/country (protects against large-scale events)

---

### Cloud Backup

**Backup stored with cloud provider (AWS, Azure, Google Cloud, Backblaze, etc.).**

**Advantages:**
- Inherently off-site
- Scalable (infinite capacity)
- No hardware to maintain
- Geographic redundancy (multiple regions)
- Accessible from anywhere

**Disadvantages:**
- Ongoing costs (monthly fees)
- Restore time depends on internet speed
- Data egress fees (downloading backups)
- Requires trust in provider
- Internet connection required

**Types:**

**Cloud backup services:**
- Backblaze, Carbonite, IDrive
- Simple, consumer-friendly

**Cloud storage for backups:**
- AWS S3, Azure Blob Storage, Google Cloud Storage
- More control, more complex

**Considerations:**
- **Encryption:** Encrypt before uploading (provider doesn't have keys)
- **Bandwidth:** Large datasets take long to upload initially
- **Costs:** Calculate monthly costs (storage + transfer)

**Memory trick:** Cloud = **C**onvenient, **L**imitless, **O**ffsite, **U**nrestricted access, **D**ependent on internet

---

## Disaster Recovery Planning

### Business Continuity Plan (BCP)

**BCP ensures business continues operating during/after disaster.**

**Broader than IT - includes:**
- Personnel safety procedures
- Communication plans
- Alternative work arrangements
- Supply chain continuity
- Financial arrangements

**IT component (Disaster Recovery Plan) is subset of BCP.**

---

### Disaster Recovery Plan (DRP)

**DRP focuses specifically on recovering IT systems and data.**

**Components:**

**1. Risk Assessment**
- Identify potential disasters (fire, flood, cyber attack, hardware failure)
- Assess likelihood and impact
- Prioritize risks

**2. Critical Systems Identification**
- What systems are critical?
- What's the impact if down?
- Priority order for recovery

**3. Recovery Procedures**
- Step-by-step instructions
- Who does what
- Contact information
- Equipment and resource requirements

**4. Backup Strategy**
- What's backed up
- How often
- Where stored
- How to restore

**5. Alternative Site**
- Cold/warm/hot site details
- How to activate
- How to transition

**6. Communication Plan**
- Notification procedures
- Status updates
- Stakeholder communication

**7. Testing Schedule**
- How often to test (quarterly, annually)
- What to test
- How to improve

---

### Recovery Time Objective (RTO)

**RTO = Maximum acceptable downtime**

**The question RTO answers:** "How long can this system be down before it causes unacceptable harm?"

**Examples:**

**Email system:**
- RTO = 4 hours
- Meaning: Email must be restored within 4 hours of failure

**E-commerce website:**
- RTO = 15 minutes
- Meaning: Every minute down loses revenue

**Backup system:**
- RTO = 24 hours
- Meaning: Backups not critical for immediate operations

**RTO drives DR decisions:**
- Low RTO → Need hot site, fast restore, redundancy
- High RTO → Can use cold site, slower restore methods

**RTO affects cost:**
- Lower RTO = more expensive (need redundancy, hot sites)
- Higher RTO = less expensive (can tolerate downtime)

**Memory trick:** RTO = **R**ecovery **T**ime - how long until **O**perational

---

### Recovery Point Objective (RPO)

**RPO = Maximum acceptable data loss**

**The question RPO answers:** "How much data can we afford to lose?"

**Examples:**

**Database:**
- RPO = 1 hour
- Meaning: Can lose up to 1 hour of transactions
- Solution: Backup hourly

**Financial trading system:**
- RPO = 0 (zero data loss)
- Meaning: Cannot lose any transactions
- Solution: Synchronous replication to backup site

**Document server:**
- RPO = 24 hours
- Meaning: Can lose up to 1 day of documents
- Solution: Daily backups

**RPO drives backup frequency:**
- Low RPO → Frequent backups, replication
- High RPO → Less frequent backups

**RPO affects cost:**
- Lower RPO = more expensive (more frequent backups, replication)
- Higher RPO = less expensive (daily backups sufficient)

---

### RTO vs RPO Comparison

| Aspect | RTO | RPO |
|--------|-----|-----|
| **Question** | How long down? | How much data lost? |
| **Measures** | Downtime | Data loss |
| **Drives** | Recovery speed needs | Backup frequency needs |
| **Example** | "Restore in 4 hours" | "Lose max 1 hour data" |

**Visual example:**

```
Timeline:
├─────────┼────────┼────────┼────────┼────────┼
0:00      10:00    11:00    12:00    13:00    14:00
          
          Last     Failure              System
          Backup   Occurs               Restored

          ◄────────►                    ◄────────►
            RPO                           RTO
        (Data lost:                   (Downtime:
         1 hour)                       2 hours)
```

**In this scenario:**
- Last backup: 10:00 AM
- Failure: 11:00 AM
- Recovery complete: 1:00 PM

**RPO = 1 hour** (lost data from 10-11 AM)  
**RTO = 2 hours** (system down from 11 AM - 1 PM)

**Memory trick:** 
- **RTO = R**ecovery **T**ime (how long **O**ffline)
- **RPO = R**ecovery **P**oint (h**O**w much lost)

---

### Mean Time To Repair (MTTR)

**MTTR = Average time to repair failed system and restore service**

**Calculation:**
```
MTTR = Total downtime / Number of failures

Example:
3 failures in one year:
- Failure 1: 2 hours to fix
- Failure 2: 4 hours to fix
- Failure 3: 3 hours to fix

MTTR = (2 + 4 + 3) / 3 = 3 hours
```

**Lower MTTR = better** (faster recovery)

**How to reduce MTTR:**
- Good documentation
- Spare parts on hand
- Trained staff
- Automated monitoring (detect failures fast)
- Proven recovery procedures

---

### Mean Time Between Failures (MTBF)

**MTBF = Average time between system failures**

**Calculation:**
```
MTBF = Total operational time / Number of failures

Example:
System operational for 8,760 hours (1 year)
3 failures occurred

MTBF = 8,760 / 3 = 2,920 hours (about 4 months)
```

**Higher MTBF = better** (less frequent failures)

**How to increase MTBF:**
- Quality components
- Regular maintenance
- Redundancy
- Environmental controls
- Replace aging equipment

---

### MTTR vs MTBF

| Metric | What It Measures | Goal |
|--------|------------------|------|
| **MTTR** | Time to repair | Lower (faster recovery) |
| **MTBF** | Time between failures | Higher (less frequent failures) |

**Combined example:**
- MTBF = 2,000 hours (fails every ~83 days)
- MTTR = 2 hours (takes 2 hours to fix)

**Availability = MTBF / (MTBF + MTTR)**
```
Availability = 2,000 / (2,000 + 2) = 99.9%
```

**Memory trick:** 
- **MTBF = M**ean **T**ime **B**efore it **F**ails again (how long it works)
- **MTTR = M**ean **T**ime **T**o **R**epair (how long to fix)

---

## Configuration Backups

**Network device configurations must be backed up regularly.**

### Running-Config vs Startup-Config

**On Cisco devices (and similar):**

**Running-config:**
- Active configuration currently in use
- Stored in RAM (volatile memory)
- Lost if device reboots without saving
- Changes take effect immediately

**Startup-config:**
- Configuration stored in NVRAM (non-volatile)
- Loaded when device boots
- Survives reboot
- Changes require save + reload

**Critical mistake:** Making changes to running-config but not saving
- Changes work immediately
- Device reboots (power failure, upgrade)
- Configuration reverts to startup-config
- Changes lost!

**Save command:**
```
copy running-config startup-config
(Cisco command to save)

Or shorter: write memory
Or shorter: wr
```

**Memory trick:** 
- **Running = R**AM (volatile, **R**ight now active)
- **Startup = S**tored permanently (**S**urvives reboot)

---

### Configuration Backup Best Practices

**Automated backups:**
- Script nightly config backups
- TFTP server to store configs
- Version control (Git)

**After every change:**
- Backup config immediately
- Document what changed
- Keep old versions (rollback capability)

**Tools:**
- Rancid (Really Awesome New Cisco confIg Differ)
- Oxidized
- SolarWinds Network Configuration Manager
- Custom scripts (Python + Paramiko)

**What to backup:**
- Router configurations
- Switch configurations
- Firewall rulesets
- DHCP server settings
- DNS zone files
- Load balancer configs

---

## Testing Backups and DR Plans

**Untested backups = no backups**

You don't know if backups work until you test restore.

### Testing Methods

**1. File-level restore test**
- Restore individual files
- Verify integrity
- Quick test, but not comprehensive

**2. Full system restore test**
- Restore entire server
- Verify applications work
- Time-consuming but thorough

**3. Tabletop exercise**
- Walk through DR plan on paper
- Identify gaps without actual outage
- Involves key personnel

**4. Partial failover test**
- Fail over non-critical systems
- Test procedures without impacting production
- Verify communications and processes

**5. Full DR test**
- Complete failover to alternate site
- Run business operations from DR site
- Most realistic but most disruptive

---

### Testing Schedule

**Different tests, different frequencies:**

**Monthly:** File-level restore (random sampling)  
**Quarterly:** Tabletop exercise  
**Semi-annually:** Partial failover  
**Annually:** Full DR test

**After every test:**
- Document what worked
- Document what failed
- Update procedures
- Fix identified problems

**If you never test, you'll discover problems during actual disaster** - worst possible time.

---

## Disaster Recovery Sites

**Alternative locations to operate if primary site unavailable.**

---

### Cold Site

**Empty facility with power, cooling, network connectivity - but no equipment.**

**Characteristics:**
- Cheapest option
- Longest recovery time (days to weeks)
- Must install equipment after disaster
- Must restore from backups

**Setup includes:**
- Building with power
- HVAC
- Network connectivity
- Raised floors
- Fire suppression

**Does NOT include:**
- Servers
- Storage
- Network equipment
- Software installations

**Recovery process:**
1. Disaster declared
2. Order/acquire equipment
3. Ship to cold site
4. Install and configure
5. Restore from backups
6. Test and bring online

**When to use:**
- Budget very limited
- Can tolerate days/weeks of downtime
- Non-critical systems

**Cost:** Low monthly fees

**Memory trick:** Cold = **C**heap, **O**nly facility, **L**ong recovery, **D**ays to setup

---

### Warm Site

**Partially equipped facility with some hardware and network infrastructure.**

**Characteristics:**
- Medium cost
- Medium recovery time (hours to days)
- Basic infrastructure present
- Some equipment requires installation
- Data restore from backups

**Setup includes:**
- Building (power, cooling, network)
- Servers (basic)
- Storage (basic)
- Network equipment (routers, switches)
- Maybe older hardware

**Still need to:**
- Restore latest backups
- Configure systems
- Update to match production
- Test before going live

**Recovery process:**
1. Disaster declared
2. Travel to warm site
3. Power on existing equipment
4. Restore latest backups
5. Configure as needed
6. Test and bring online

**When to use:**
- Balance cost and recovery time
- Can tolerate several hours of downtime
- Most common choice

**Cost:** Medium monthly fees (equipment + facility)

**Memory trick:** Warm = **W**aiting ready, **A**lmost complete, **R**easonable time, **M**edium cost

---

### Hot Site

**Fully equipped, operational facility ready to take over immediately.**

**Characteristics:**
- Most expensive
- Fastest recovery (minutes to hours)
- Duplicate of production environment
- Real-time or near-real-time data replication
- Can be activated immediately

**Setup includes:**
- Complete mirror of production
- All servers, storage, network equipment
- Software installed and configured
- Current data (replication)
- Ready to go

**Recovery process:**
1. Disaster declared
2. Activate hot site (flip the switch)
3. Redirect users/traffic to hot site
4. Verify operations
5. Monitor and maintain

**When to use:**
- Mission-critical systems
- Cannot tolerate downtime
- Financial services, healthcare, e-commerce
- High-revenue applications

**Cost:** Very high monthly fees (complete duplicate infrastructure)

**Memory trick:** Hot = **H**ighly prepared, **O**perational now, **T**iny RTO, expensive

---

### DR Site Comparison

| Site Type | Recovery Time | Cost | Equipment | Data Currency |
|-----------|---------------|------|-----------|---------------|
| **Cold** | Days-Weeks | Low | None | Restore from backup |
| **Warm** | Hours-Days | Medium | Partial | Restore from backup |
| **Hot** | Minutes-Hours | High | Complete | Real-time replication |

**Choosing a site:**
- **RTO** drives decision (low RTO = need hot site)
- **Budget** constraints
- **Business criticality**

**Example:**
- Email: Warm site (RTO 4 hours)
- E-commerce: Hot site (RTO 15 minutes)
- File server: Cold site (RTO 3 days)

---

## Key Exam Tips

**Backup types:**
- **Full:** Everything, every time (slowest backup, fastest restore)
- **Incremental:** Changes since last backup (fastest backup, slowest restore - needs all backups)
- **Differential:** Changes since last full (medium speed - needs full + latest differential)

**3-2-1 Rule:**
- **3** copies of data
- **2** different media types
- **1** offsite

**GFS (Grandfather-Father-Son):**
- Daily (Son), Weekly (Father), Monthly (Grandfather)
- Long-term retention strategy

**RTO vs RPO:**
- **RTO:** Recovery Time Objective (max downtime)
- **RPO:** Recovery Point Objective (max data loss)

**MTTR vs MTBF:**
- **MTTR:** Mean Time To Repair (how long to fix)
- **MTBF:** Mean Time Between Failures (how long it works)

**Config backups:**
- **Running-config:** RAM (active, volatile)
- **Startup-config:** NVRAM (saved, survives reboot)

**DR Sites:**
- **Cold:** Empty facility (days to setup)
- **Warm:** Partial equipment (hours to setup)
- **Hot:** Fully ready (minutes to activate)

**Common exam questions:**
- "Which backup type requires full + all previous backups to restore?" → Incremental
- "What's the 3-2-1 rule?" → 3 copies, 2 media, 1 offsite
- "What's the difference between RTO and RPO?" → RTO = downtime, RPO = data loss
- "Which DR site has fastest recovery?" → Hot site

---

## Key Takeaways

- [ ] **Full backup copies everything** (slowest backup, fastest restore)
- [ ] **Incremental backs up changes since last backup** (fastest backup, needs all backups to restore)
- [ ] **Differential backs up changes since last full** (needs full + one differential to restore)
- [ ] **3-2-1 rule:** 3 copies, 2 media types, 1 offsite
- [ ] **GFS rotation:** Daily (Son), Weekly (Father), Monthly (Grandfather)
- [ ] **Backup frequency depends on RPO** (how much data can you lose)
- [ ] **On-site backups are fast** but vulnerable to site disasters
- [ ] **Off-site backups protect against site disasters** (critical for DR)
- [ ] **RTO = maximum acceptable downtime** (drives recovery speed needs)
- [ ] **RPO = maximum acceptable data loss** (drives backup frequency)
- [ ] **MTTR = time to repair**, MTBF = time between failures
- [ ] **Running-config is in RAM** (volatile), startup-config in NVRAM (saved)
- [ ] **Test backups regularly** - untested backups = no backups
- [ ] **Cold site = empty facility** (days), warm = partial (hours), hot = ready (minutes)

---

## Check Your Understanding

**1. What's the difference between full, incremental, and differential backups?**

<details>
<summary>Show Answer</summary>
<strong>Full: copies everything. Incremental: copies changes since last backup (any type). Differential: copies changes since last FULL backup.</strong> Full is slowest backup but fastest restore (one set). Incremental is fastest backup but slowest restore (need full + all incrementals). Differential is medium (need full + latest differential). Memory: Full = everything every time, Incremental = increases incrementally, Differential = difference from full backup.
</details>

**2. What is the 3-2-1 backup rule?**

<details>
<summary>Show Answer</summary>
<strong>3 copies of data, 2 different media types, 1 copy offsite.</strong> Three copies = original + 2 backups (protects against drive failure). Two media = different storage types like disk + cloud (protects against media failure). One offsite = cloud or off-site facility (protects against site disaster like fire/flood). Enhanced rule: 3-2-1-1-0 adds one offline/air-gapped copy (ransomware protection) and zero errors (test backups regularly).
</details>

**3. Explain the Grandfather-Father-Son (GFS) backup rotation.**

<details>
<summary>Show Answer</summary>
<strong>GFS uses three generations: Son (daily), Father (weekly), Grandfather (monthly).</strong> Daily backups kept 1 week, weekly kept 4-5 weeks, monthly kept 12 months, some yearly kept longer. Provides multiple restore points and long-term retention. Example: Monday-Friday daily backups (5 tapes), Week 1-4 weekly backups (4 tapes), Jan-Dec monthly (12 tapes) = 21 tapes minimum. Proven strategy for compliance and multiple recovery options.
</details>

**4. What's the difference between RTO and RPO?**

<details>
<summary>Show Answer</summary>
<strong>RTO (Recovery Time Objective) = max acceptable downtime. RPO (Recovery Point Objective) = max acceptable data loss.</strong> RTO answers "how long can system be down?" and drives recovery speed needs (low RTO needs hot site). RPO answers "how much data can we lose?" and drives backup frequency (low RPO needs frequent backups/replication). Example: email RTO = 4 hours (must restore in 4 hours), RPO = 1 hour (can lose 1 hour of email). Memory: RTO = recovery time offline, RPO = recovery point how much lost.
</details>

**5. A system fails at 11:00 AM. The last backup was at 10:00 AM. The system is restored at 1:00 PM. What are the RTO and RPO?**

<details>
<summary>Show Answer</summary>
<strong>RPO = 1 hour (data from 10-11 AM lost). RTO = 2 hours (system down from 11 AM to 1 PM).</strong> RPO measures data loss (last backup to failure = 1 hour). RTO measures downtime (failure to recovery = 2 hours). These are actual values, not objectives - if RTO objective was 4 hours, they met it (restored in 2). If RPO objective was 30 minutes, they failed (lost 1 hour of data). Drive backup frequency to meet RPO, drive recovery capabilities to meet RTO.
</details>

**6. What's the difference between MTTR and MTBF?**

<details>
<summary>Show Answer</summary>
<strong>MTTR (Mean Time To Repair) = average time to fix. MTBF (Mean Time Between Failures) = average time between failures.</strong> MTTR measures repair speed (lower = better, faster recovery). MTBF measures reliability (higher = better, less frequent failures). Example: MTBF = 2,000 hours (fails every ~83 days), MTTR = 2 hours (takes 2 hours to fix). Combined they calculate availability: MTBF / (MTBF + MTTR) = 2,000 / 2,002 = 99.9% uptime. Memory: MTBF = time before it fails again, MTTR = time to repair.
</details>

**7. What's the difference between running-config and startup-config on a Cisco router?**

<details>
<summary>Show Answer</summary>
<strong>Running-config: active configuration in RAM (volatile, lost on reboot). Startup-config: saved configuration in NVRAM (survives reboot).</strong> Running-config is currently active - changes take effect immediately but lost if device reboots without saving. Startup-config is loaded at boot - changes require save + reload. Critical: after making changes to running-config, must "copy running-config startup-config" (or "write memory") to save permanently. Common mistake: change running-config, device reboots, changes lost because not saved to startup-config.
</details>

**8. Why is testing backups critical?**

<details>
<summary>Show Answer</summary>
<strong>Untested backups = no backups. You don't know if backups work until you test restore.</strong> Common problems found during tests: backup corrupt, wrong files backed up, restore procedure doesn't work, backup software misconfigured, restoration takes longer than RTO allows. Testing methods: file-level restore (quick), full system restore (thorough), tabletop exercise (walk through plan), partial failover (test without production impact), full DR test (complete failover). Test schedule: monthly (file restore), quarterly (tabletop), semi-annually (partial), annually (full DR test). Update procedures based on test results.
</details>

**9. Compare cold, warm, and hot disaster recovery sites.**

<details>
<summary>Show Answer</summary>
<strong>Cold: empty facility (days to recover, cheapest). Warm: partially equipped (hours to recover, medium cost). Hot: fully ready (minutes to recover, most expensive).</strong> Cold site has power/cooling/network but no equipment - must install after disaster (RTO days/weeks). Warm site has some equipment and basic infrastructure - restore backups and configure (RTO hours/days). Hot site is complete duplicate with real-time replication - activate immediately (RTO minutes/hours). Choice driven by RTO requirements and budget. Mission-critical systems need hot site, less critical can use warm/cold.
</details>

**10. A company's e-commerce website generates $10,000 per hour. What type of DR site should they use?**

<details>
<summary>Show Answer</summary>
<strong>Hot site.</strong> Website downtime directly costs $10,000/hour. Cold site (days recovery) could cost hundreds of thousands in lost revenue. Warm site (hours) still very expensive. Hot site (minutes) minimizes revenue loss despite high cost. Hot site cost is insurance against downtime. Calculate: if hot site costs $50,000/month but prevents 10 hours downtime per year, it saves $100,000 - worth it. RTO for revenue-generating systems should be very low (minutes), requiring hot site.
</details>

**11. What should be included in a disaster recovery plan?**

<details>
<summary>Show Answer</summary>
<strong>DRP includes: risk assessment, critical systems list, recovery procedures, backup strategy, alternative site details, communication plan, testing schedule.</strong> Risk assessment identifies potential disasters and prioritizes. Critical systems list shows recovery priority order. Recovery procedures provide step-by-step instructions with contact info. Backup strategy documents what's backed up, frequency, location. Alternative site details (cold/warm/hot) with activation procedures. Communication plan for notifications and updates. Testing schedule (how often, what to test). DRP is subset of Business Continuity Plan (BCP) - focuses specifically on IT recovery.
</details>

**12. How does the 3-2-1 rule protect against ransomware?**

<details>
<summary>Show Answer</summary>
<strong>The basic 3-2-1 rule doesn't fully protect against ransomware - need enhanced 3-2-1-1-0 rule.</strong> Ransomware encrypts mounted/online backups. Standard 3-2-1 provides 3 copies and offsite, but if all are online (mapped network drives, cloud with auto-sync), ransomware encrypts them too. Enhanced rule adds "1 offline/air-gapped" copy - backup physically disconnected or write-once media (tape, immutable cloud storage). This offline copy can't be encrypted by ransomware. Also includes "0 errors" - test backups regularly to ensure they work. Offline backup is recovery point for ransomware attacks.
</details>

---

## Before Moving to Lesson 19

Make sure you can confidently:

- [ ] **Differentiate backup types** (full, incremental, differential)
- [ ] **Explain the 3-2-1 rule** (3 copies, 2 media, 1 offsite)
- [ ] **Understand GFS rotation** (daily/weekly/monthly)
- [ ] **Compare RTO and RPO** (downtime vs data loss)
- [ ] **Explain MTTR and MTBF** (repair time vs failure frequency)
- [ ] **Distinguish running-config from startup-config**
- [ ] **Understand importance of testing backups**
- [ ] **Compare DR sites** (cold/warm/hot)

**Study Strategy:**

**Today:**
- Create comparison chart for backup types
- Practice calculating RTO/RPO from scenarios
- Draw timeline showing backup restoration
- Make flashcards for DR sites

**Tomorrow (Day 19):**
- Review 3-2-1 rule
- Practice RTO vs RPO questions
- Compare cold/warm/hot sites
- Review config backup commands

**Day 20:**
- Continue to Lesson 19 (High Availability)
- Redundancy prevents need for DR
- Backups provide recovery when redundancy fails

Backups are insurance - boring until you need them, priceless when disaster strikes!

---

## Coming Up in Lesson 19: High Availability and Redundancy

You've learned about disaster recovery - what to do when systems fail.

**Next, you'll explore high availability - preventing failures:**

- High availability concepts and uptime requirements
- Redundancy types (device, link, power, site)
- First Hop Redundancy Protocols (HSRP, VRRP, GLBP)
- Load balancing (active-active vs active-passive)
- Link aggregation (LACP, EtherChannel)
- NIC teaming and multipathing
- Eliminating single points of failure

**The connection:**

Lesson 18 covered recovery after failure (backups, DR). Lesson 19 covers preventing failure impact (redundancy, high availability). Backups are plan B - redundancy tries to avoid needing plan B. Together they ensure business continuity: redundancy keeps systems up, backups recover when redundancy isn't enough.

**See you in Lesson 19!**

---

*"Hope is not a backup strategy. Test your backups, maintain offsite copies, and plan for disaster. Because it's not a question of IF disaster strikes - it's WHEN."*

---

# ✅ LESSON 18 COMPLETE!

**What You Just Learned:**
- ✅ Backup types: full (everything), incremental (changes), differential (changes since full)
- ✅ 3-2-1 rule: 3 copies, 2 media types, 1 offsite
- ✅ GFS rotation: daily (Son), weekly (Father), monthly (Grandfather)
- ✅ Backup frequency driven by RPO (data loss tolerance)
- ✅ On-site (fast), off-site (protected), cloud (scalable)
- ✅ RTO = max downtime, RPO = max data loss
- ✅ MTTR = repair time, MTBF = time between failures
- ✅ Running-config (RAM, volatile), startup-config (NVRAM, saved)
- ✅ Test backups regularly - untested = useless
- ✅ DR sites: cold (empty, days), warm (partial, hours), hot (ready, minutes)

**Next up: High availability and redundancy strategies!**