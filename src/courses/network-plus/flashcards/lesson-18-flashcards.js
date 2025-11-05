// Flashcards for Lesson 18: Backup and Disaster Recovery

export const lesson18Flashcards = [
  {
    id: 1,
    front: "What is a full backup?",
    back: "Full backup copies ALL data every time. Pros: complete copy, fast restore (single backup set), simple. Cons: takes longest time, uses most storage, high bandwidth usage. Best for: small data sets, weekly/monthly schedules. Baseline for incremental/differential. Always start with full backup."
  },
  {
    id: 2,
    front: "What is an incremental backup?",
    back: "Incremental backs up only data CHANGED since last backup (full or incremental). Pros: fastest backup, least storage. Cons: slowest restore (need full + all incrementals in order). Archive bit: cleared after backup. Typical schedule: full Sunday, incremental Mon-Sat. Good for: large data sets, daily backups."
  },
  {
    id: 3,
    front: "What is a differential backup?",
    back: "Differential backs up data CHANGED since last FULL backup. Each differential grows larger daily. Pros: faster restore than incremental (only need full + latest differential). Cons: slower backup than incremental, more storage. Archive bit: not cleared. Schedule: full Sunday, differential Mon-Sat. Balanced approach."
  },
  {
    id: 4,
    front: "Compare restore times: Full, Incremental, Differential",
    back: "Full: fastest restore (one backup set). Differential: medium restore (full + one differential). Incremental: slowest restore (full + ALL incrementals in sequence). Trade-off: faster backups = slower restores. Choose based on: RTO requirements, backup window, storage available. Test restore times!"
  },
  {
    id: 5,
    front: "What is a snapshot backup?",
    back: "Snapshot captures point-in-time state of system (VM, filesystem, database). Instant creation, space-efficient (only changed blocks). Features: quick backup/restore, minimal downtime, stored on same system. NOT a true backup (no offsite copy). Use for: rapid recovery, before changes. Supplement with real backups."
  },
  {
    id: 6,
    front: "What is the 3-2-1 backup rule?",
    back: "3 copies of data: 1 primary + 2 backups. 2 different media types: disk + tape, disk + cloud, tape + cloud. 1 copy offsite: protects against site disaster (fire, flood, theft). Industry best practice. Example: production data + backup to disk + backup to cloud. Ensures recovery from any disaster."
  },
  {
    id: 7,
    front: "What is the Grandfather-Father-Son (GFS) backup rotation?",
    back: "GFS: hierarchical backup schedule. Son: daily backups (Monday-Friday), kept 1 week. Father: weekly backups (end of week), kept 1 month. Grandfather: monthly backups (end of month), kept 1 year. Balances: retention, storage costs, recovery points. Example: 5 daily + 4 weekly + 12 monthly = 21 backup sets."
  },
  {
    id: 8,
    front: "What factors determine backup frequency?",
    back: "RPO (how much data loss acceptable?), data change rate (how often changes?), backup window (time available for backup?), business requirements, compliance/regulations. Daily minimum for most businesses. Critical data: hourly or continuous. Low-change data: weekly. Balance: frequency vs storage/performance cost."
  },
  {
    id: 9,
    front: "What is a backup retention policy?",
    back: "Retention policy defines how long backups are kept. Considerations: compliance requirements (legal, regulatory), storage costs, recovery needs. Example: daily for 1 week, weekly for 1 month, monthly for 1 year, yearly for 7 years. Automated deletion after retention period. Document policy. Balance retention vs storage costs."
  },
  {
    id: 10,
    front: "What is on-site backup?",
    back: "On-site: backups stored at same physical location as source data. Pros: fast restore, low cost, easy access. Cons: vulnerable to site disasters (fire, flood, theft), single point of failure. Best practice: combine with offsite. Use for: quick daily restores. Examples: NAS, backup server, external drives."
  },
  {
    id: 11,
    front: "What is off-site backup?",
    back: "Off-site: backups stored at different physical location. Methods: tape rotation to vault, cloud backup, replication to remote site. Pros: disaster protection, geographic redundancy. Cons: slower restore, higher cost, bandwidth requirements. CRITICAL for disaster recovery. Test restore from offsite regularly. Don't skip this!"
  },
  {
    id: 12,
    front: "What is cloud backup?",
    back: "Cloud backup stores data in cloud provider's infrastructure (AWS S3, Azure, Backblaze). Pros: offsite automatically, scalable, no tape management, accessible anywhere. Cons: ongoing costs, internet dependency, large restores slow/expensive. Security: encryption in-transit and at-rest. Popular for: SMBs, hybrid with on-site."
  },
  {
    id: 13,
    front: "What is a Business Continuity Plan (BCP)?",
    back: "BCP is comprehensive plan to maintain business operations during/after disruption. Broader than DR (which focuses on IT). Includes: risk assessment, business impact analysis, continuity strategies, communication plans, alternate work arrangements. Covers: people, processes, technology. Updated annually. Executive-level document."
  },
  {
    id: 14,
    front: "What is a Disaster Recovery Plan (DRP)?",
    back: "DRP is IT-focused plan to restore technology operations after disaster. Part of BCP. Includes: recovery procedures, team roles/responsibilities, contact lists, system priorities, restore sequences, alternate sites. Test regularly (tabletop exercises, full tests). Update after changes. Lives in secure offsite location."
  },
  {
    id: 15,
    front: "What is RTO (Recovery Time Objective)?",
    back: "RTO: maximum acceptable downtime for a system/service. How long can business tolerate being down? Examples: email RTO=4 hours, e-commerce RTO=30 minutes. Drives: backup strategy, redundancy, staffing. Lower RTO = higher cost. Defined by business, not IT. Measured from disaster to full restoration."
  },
  {
    id: 16,
    front: "What is RPO (Recovery Point Objective)?",
    back: "RPO: maximum acceptable data loss measured in time. How far back can you restore from? Examples: database RPO=1 hour (tolerate 1 hour of lost transactions), file server RPO=24 hours. Drives: backup frequency. Lower RPO = more frequent backups. Example: RPO 1 hour = backup every hour or less."
  },
  {
    id: 17,
    front: "What's the relationship between RTO, RPO, and cost?",
    back: "Lower RTO/RPO = higher cost. RTO/RPO near zero requires: real-time replication, redundant systems, hot sites, expensive infrastructure. Business must balance: recovery speed/data loss vs cost. Not every system needs same RTO/RPO. Tier systems by criticality. Mission-critical: low RTO/RPO. Non-critical: higher RTO/RPO."
  },
  {
    id: 18,
    front: "What is MTTR (Mean Time To Repair)?",
    back: "MTTR: average time to repair/restore a system after failure. Measures: response effectiveness, recovery speed. Calculate: total downtime / number of incidents. Example: 3 incidents totaling 6 hours = MTTR of 2 hours. Goal: minimize MTTR through: good documentation, spare parts, trained staff, automation. Track trend over time."
  },
  {
    id: 19,
    front: "What is MTBF (Mean Time Between Failures)?",
    back: "MTBF: average time between system failures. Measures: reliability, predicted lifespan. Calculate: total uptime / number of failures. Example: 8760 hours (1 year) with 2 failures = MTBF 4380 hours. Higher MTBF = more reliable. Vendor-provided for hardware. Use for: lifecycle planning, redundancy decisions, warranty comparison."
  },
  {
    id: 20,
    front: "Why backup network device configurations?",
    back: "Device configs (routers, switches, firewalls) are critical. Backup enables: quick recovery from failure, rollback after bad change, disaster recovery, consistency. Backup: startup-config (saved) and running-config (current). Methods: manual copy, automated scripts, config management tools. Schedule: after every change, nightly automated. Store offsite."
  },
  {
    id: 21,
    front: "What's the difference between startup-config and running-config?",
    back: "Running-config: current active configuration in RAM, lost on reboot, modified by 'configure' commands. Startup-config: saved configuration in NVRAM, loads on boot, persists through reboot. Important: changes to running-config NOT saved until 'copy running-config startup-config' or 'write memory'. Always backup both!"
  },
  {
    id: 22,
    front: "What is a cold site?",
    back: "Cold site: empty facility with power, cooling, network connectivity but NO equipment. Cheapest option. Activation time: days to weeks (must install hardware, restore data). Use for: non-critical systems, very low budget, long acceptable RTO. Provides: physical space only. Rarely adequate for modern business needs."
  },
  {
    id: 23,
    front: "What is a warm site?",
    back: "Warm site: facility with power, cooling, network, AND some equipment (servers, network gear) but NOT current. Requires: installing backups, configuring systems. Activation time: hours to days. Cost: moderate. Balance between cold and hot. Equipment may be older/slower than production. Common choice for medium RTO requirements."
  },
  {
    id: 24,
    front: "What is a hot site?",
    back: "Hot site: fully operational duplicate of production environment with current data replication. Activation time: minutes to hours (immediate failover possible). Most expensive option. Equipment: matching production, already configured. Use for: mission-critical systems, low RTO requirements. Can be: owned, leased, cloud-based. Enterprise standard."
  },
  {
    id: 25,
    front: "Compare cold, warm, and hot sites",
    back: "Cold: cheapest, slowest (days-weeks), empty facility. Warm: moderate cost/speed (hours-days), partial equipment. Hot: most expensive, fastest (minutes-hours), fully equipped/current. Choose based on: RTO requirements, budget, criticality. Most orgs use: hot for critical, warm for important, cold (or none) for non-critical. Trend: cloud DR replaces physical sites."
  },
  {
    id: 26,
    front: "Why test backups and DR plans regularly?",
    back: "Testing reveals: corrupt backups, missing components, outdated procedures, skill gaps, realistic RTOs. Untested backup = no backup (might not work when needed). Test types: restore tests (can you actually restore?), tabletop exercises (walk through plan), full DR test (activate alternate site). Schedule: quarterly minimum. Many disasters happen during first restore attempt!"
  },
  {
    id: 27,
    front: "What should be included in configuration backup documentation?",
    back: "Document: backup schedule/frequency, backup locations, retention policy, restore procedures (step-by-step), responsible personnel, vendor support contacts, software versions, credentials (encrypted!), change log. Test documentation: can someone else follow it? Update after every process change. Store with configs (offsite)."
  },
  {
    id: 28,
    front: "Quick scenario: Database server fails. RPO=1 hour, RTO=4 hours. What backup strategy?",
    back: "RPO 1 hour: backup at least hourly (maybe transaction log backups every 15 min). RTO 4 hours: need fast restore (full+differential or continuous replication). Solutions: 1) Hourly incrementals + tested restore procedures, 2) Database replication to standby, 3) Snapshot + transaction logs. Test restore time to ensure <4 hours!"
  },
  {
    id: 29,
    front: "What are common backup mistakes?",
    back: "1) Never testing restores (backups might be corrupt), 2) No offsite copy (site disaster = data loss), 3) Storing backups with production (destroyed together), 4) No documentation (can't restore), 5) Insufficient retention (can't go back far enough), 6) No encryption (data theft), 7) Forgetting configs/documentation (can't rebuild)."
  },
  {
    id: 30,
    front: "Speed drill: Match to scenario - Full, Incremental, Differential, Snapshot, 3-2-1",
    back: "Full: weekly baseline. Incremental: daily, fastest backup, slowest restore. Differential: daily, medium speed both ways. Snapshot: before changes, instant recovery. 3-2-1: overall strategy (3 copies, 2 media, 1 offsite). Know which backup type for which situation!"
  }
];