export const lesson59Flashcards = [
  {
    id: 1,
    front: "What are the three main types of backups?",
    back: "Full backup (complete copy of all data), Incremental backup (changes since last backup of any type), Differential backup (changes since last full backup). Each has trade-offs between backup time, storage space, and restoration time."
  },
  {
    id: 2,
    front: "What is a full backup?",
    back: "Complete copy of all selected data. Advantages: fastest restore (single backup set), simplest. Disadvantages: longest backup time, most storage space, daily full backups impractical for large datasets. Typically done weekly, with incrementals/differentials daily."
  },
  {
    id: 3,
    front: "What is an incremental backup?",
    back: "Backs up only changes since last backup (any type - full or incremental). Advantages: fastest backup, least storage. Disadvantages: slowest restore (need full + all incrementals), missing one backup breaks chain. Archive bit cleared after backup."
  },
  {
    id: 4,
    front: "What is a differential backup?",
    back: "Backs up changes since last full backup. Advantages: faster backup than full, faster restore than incremental (only need full + latest differential). Disadvantages: grows each day until next full, more storage than incremental. Archive bit NOT cleared."
  },
  {
    id: 5,
    front: "What is the 3-2-1 backup rule?",
    back: "3 copies of data (production + 2 backups), 2 different media types (external drive + cloud, or tape + disk), 1 copy offsite (cloud, different building). Protects against: hardware failure, site disaster, ransomware. Industry best practice."
  },
  {
    id: 6,
    front: "What is an on-site backup?",
    back: "Backup stored in same location as original data. Examples: external drive, NAS in office, tape library in building. Advantages: fast restore, no internet needed, full control. Disadvantages: vulnerable to fire/flood/theft affecting entire site."
  },
  {
    id: 7,
    front: "What is an off-site backup?",
    back: "Backup stored in different physical location. Examples: cloud storage, tape vault, second office. Advantages: disaster protection, ransomware protection (if air-gapped). Disadvantages: slower restore, internet dependency (cloud), transport time (tape)."
  },
  {
    id: 8,
    front: "What is cloud backup?",
    back: "Backing up to internet-based storage. Examples: Backblaze, Carbonite, AWS S3, Azure Backup. Advantages: automatic off-site, scalable, no hardware maintenance. Disadvantages: ongoing cost, internet dependency, slower restore for large datasets, privacy concerns."
  },
  {
    id: 9,
    front: "What backup strategies should you know?",
    back: "Grandfather-Father-Son (GFS) - daily, weekly, monthly retention. Tower of Hanoi (complex rotation). 3-2-1 rule (3 copies, 2 media, 1 offsite). Continuous/real-time backup. Choose based on: data criticality, RTO/RPO, budget, compliance."
  },
  {
    id: 10,
    front: "What is Grandfather-Father-Son (GFS) backup rotation?",
    back: "Hierarchical backup scheme. Son (daily backups - kept 1 week), Father (weekly backups - kept 1 month), Grandfather (monthly backups - kept 1 year). Balances: retention requirements, storage costs, recovery options. Common in business environments."
  },
  {
    id: 11,
    front: "What is backup frequency and how do you determine it?",
    back: "How often backups run. Depends on: data change rate, RPO (acceptable data loss), criticality. Examples: critical databases (hourly/continuous), file servers (daily), workstations (weekly). More frequent = less data loss but more resources needed."
  },
  {
    id: 12,
    front: "What is a retention policy?",
    back: "How long to keep backups before deletion. Factors: legal requirements (7 years for financial), compliance (HIPAA, SOX), business needs, storage costs. Example: daily 7 days, weekly 4 weeks, monthly 12 months. Document and enforce."
  },
  {
    id: 13,
    front: "What is RTO (Recovery Time Objective)?",
    back: "Maximum acceptable downtime - how quickly must system be restored. Example: email RTO = 4 hours means must restore email within 4 hours. Determines: backup method, restoration speed needs, redundancy requirements, budget. Critical systems have lower RTO."
  },
  {
    id: 14,
    front: "What is RPO (Recovery Point Objective)?",
    back: "Maximum acceptable data loss - how much data can you afford to lose. Example: RPO = 1 hour means maximum 1 hour of data loss acceptable, so backup hourly minimum. Determines backup frequency. Critical data has lower RPO (minutes)."
  },
  {
    id: 15,
    front: "What is MTTR (Mean Time to Repair)?",
    back: "Average time to fix failed component and restore service. Includes: detection, diagnosis, repair, testing, restoration. Lower MTTR = faster recovery. Improved by: spare parts, documentation, training, automation. Metric for measuring IT effectiveness."
  },
  {
    id: 16,
    front: "What is MTBF (Mean Time Between Failures)?",
    back: "Average time device operates before failing. Higher MTBF = more reliable. Example: hard drive MTBF 1 million hours. Predicts: when to replace, how many spares needed. Manufacturer specification. Helps: capacity planning, budgeting."
  },
  {
    id: 17,
    front: "What are configuration backups and why are they important?",
    back: "Backing up device configurations (routers, switches, firewalls, servers). Includes: settings, firmware, rules, accounts. Critical because: hardware replacement, disaster recovery, auditing, rollback after bad changes. Often overlooked. Export regularly, store securely."
  },
  {
    id: 18,
    front: "What is the difference between startup-config and running-config?",
    back: "Network device terminology. Running-config: current active configuration in memory (lost on power loss). Startup-config: configuration saved to NVRAM (persists after reboot). Must 'copy running-config startup-config' to save changes. Backup both."
  },
  {
    id: 19,
    front: "What is the importance of testing backups?",
    back: "Verify backups actually work before disaster. Test: restore process, data integrity, backup completeness, documentation accuracy, time to restore. Schedule regular test restores (quarterly). Untested backup = no backup. Many companies discover backup failures during disaster."
  },
  {
    id: 20,
    front: "What is disaster recovery planning?",
    back: "Documented procedures for recovering IT systems after disaster (fire, flood, cyberattack, hardware failure). Includes: recovery priorities, contact information, step-by-step procedures, backup locations, alternate sites. Test regularly. Part of Business Continuity Plan (BCP)."
  },
  {
    id: 21,
    front: "What is a Business Continuity Plan (BCP)?",
    back: "Overall plan for maintaining business operations during/after disruption. Broader than disaster recovery (includes all business functions, not just IT). Includes: emergency procedures, communication plans, alternative work locations, critical functions priority. Executive level responsibility."
  },
  {
    id: 22,
    front: "What is a Disaster Recovery Plan (DRP)?",
    back: "IT-focused subset of BCP. Details: how to restore IT systems, data recovery procedures, backup procedures, alternate processing sites, roles/responsibilities, RTO/RPO for each system. Test annually minimum. Update when infrastructure changes."
  },
  {
    id: 23,
    front: "What is a cold site?",
    back: "Backup facility with power, cooling, network - NO equipment. Cheapest option. Longest recovery time (days/weeks - must install/configure equipment). Use for: non-critical systems, tight budgets. Equipment shipped/purchased after disaster."
  },
  {
    id: 24,
    front: "What is a warm site?",
    back: "Backup facility with power, cooling, network, AND some equipment. Medium cost, medium recovery time (hours/days - need to restore data, final configurations). Equipment partially installed. Balance between cost and recovery time."
  },
  {
    id: 25,
    front: "What is a hot site?",
    back: "Fully equipped backup facility, data continuously replicated, ready to take over immediately. Most expensive, fastest recovery (minutes/hours). Near-identical to production. For: critical systems, high-availability requirements. May run active-active (both sites process)."
  },
  {
    id: 26,
    front: "What should you verify after completing a backup?",
    back: "Backup completed successfully (no errors in logs), all expected files included, backup size reasonable, test file restoration, verify backup media not corrupted, check available storage space, document backup completion. Automated monitoring ideal."
  },
  {
    id: 27,
    front: "What is snapshot backup?",
    back: "Point-in-time copy of data, often used in virtualization. Fast creation (seconds), minimal storage initially (only stores changes), multiple snapshots possible. Use for: pre-change backups, testing, quick rollback. NOT replacement for full backup (same storage = single point of failure)."
  },
  {
    id: 28,
    front: "What is continuous data protection (CDP)?",
    back: "Real-time or near-real-time backup (every change saved immediately). Advantages: minimal data loss (RPO near zero), granular recovery points. Disadvantages: high storage requirements, performance impact, expensive. For: critical databases, financial systems."
  },
  {
    id: 29,
    front: "What backup media types should you know?",
    back: "External hard drives (USB, eSATA - fast, rewritable), Tape (LTO - large capacity, long-term, slower), Cloud storage (offsite, scalable), NAS (network storage), Optical (DVD/Blu-ray - limited capacity, archival), SAN (enterprise). Choose based on: capacity, speed, budget, retention."
  },
  {
    id: 30,
    front: "What is the importance of backup security?",
    back: "Encrypt backups (protect sensitive data), secure storage location (prevent theft), access controls (limit who can restore), offsite/air-gapped (ransomware protection), test encryption/decryption. Backup often contains ALL company data - high-value target."
  }
];