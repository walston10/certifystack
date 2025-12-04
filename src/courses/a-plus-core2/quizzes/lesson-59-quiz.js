export const lesson59Quiz = [
  {
    id: 1,
    question: "A company performs a full backup every Sunday and incremental backups Monday through Saturday. On Friday, the server crashes. Which backups are needed to restore all data?",
    options: [
      "Only Friday's incremental backup",
      "Sunday's full backup plus incremental backups from Monday through Friday",
      "Only Sunday's full backup",
      "Only the most recent incremental backup"
    ],
    correct: 1,
    explanation: "Incremental backups only back up files changed since the last backup (of any type). To restore: you need the last full backup PLUS all subsequent incremental backups in sequence. Example: Sunday full + Mon + Tue + Wed + Thu + Fri incremental backups. Advantage: fast backups (only changed files). Disadvantage: slower restore (multiple backup sets needed). If any incremental backup in the chain is corrupted or missing, you lose data. This is why testing backups is critical. Compare to differential (only needs full + last differential)."
  },
  {
    id: 2,
    question: "What is the primary difference between incremental and differential backups?",
    options: [
      "There is no difference - they are the same",
      "Incremental backs up changes since last backup (any type); Differential backs up changes since last full backup",
      "Differential is faster to restore than incremental",
      "Incremental requires more storage than differential"
    ],
    correct: 1,
    explanation: "Incremental: backs up files changed since LAST backup (full or incremental), smallest/fastest backups, slowest restore (needs full + all incrementals). Differential: backs up files changed since LAST FULL backup, larger/slower backups than incremental (grows until next full), faster restore (only need full + last differential). Restore comparison: Incremental needs full + all incrementals; Differential needs full + one differential. Storage: Differential uses more (cumulative changes). Choice depends on backup window size and restore time priority. Both are valid strategies with different tradeoffs."
  },
  {
    id: 3,
    question: "A company follows the 3-2-1 backup rule. Their building burns down, destroying all on-site equipment. What backup principle saves them from total data loss?",
    options: [
      "Having 3 copies (all destroyed in fire)",
      "Having 2 different media types (both on-site, both destroyed)",
      "Having 1 copy stored offsite (survives building disaster)",
      "Nothing can save them"
    ],
    correct: 2,
    explanation: "The '1' in 3-2-1 (one copy offsite) protects against site disasters: fire, flood, theft, natural disasters. Offsite locations include: different building, data center, cloud storage, bank safe deposit box. Multiple on-site copies don't protect against building disasters. Different media types don't help if both are on-site. Offsite backup is insurance against catastrophic site loss. Strategies: daily/weekly offsite rotation, cloud backup, tape storage offsite. Geographic separation critical for disaster recovery. Test offsite retrieval periodically. Offsite backup turns potential total loss into recoverable incident."
  },
  {
    id: 4,
    question: "What is the difference between Recovery Time Objective (RTO) and Recovery Point Objective (RPO)?",
    options: [
      "They mean exactly the same thing",
      "RTO is how quickly systems must be restored; RPO is how much data loss is acceptable",
      "RTO measures data loss; RPO measures time",
      "Neither term has any meaning"
    ],
    correct: 1,
    explanation: "RTO (Recovery Time Objective): maximum acceptable downtime - how quickly must systems be back online? Example: 4 hours RTO means systems must be restored within 4 hours. RPO (Recovery Point Objective): maximum acceptable data loss - how old can restored data be? Example: 1 hour RPO means losing up to 1 hour of data is acceptable. RTO drives: infrastructure redundancy, hot/cold sites, failover systems. RPO drives: backup frequency (1 hour RPO = hourly backups or replication). Both are business requirements that determine backup/DR strategy. Lower RTO/RPO = more expensive solutions. Define based on business criticality."
  },
  {
    id: 5,
    question: "A technician successfully backs up data every night, but has never tested restoring from those backups. One day, they attempt a restore and discover the backups are corrupted. What is the problem?",
    options: [
      "Backups work fine - no problem exists",
      "Untested backups are worthless - regular restore testing is essential to verify backup integrity",
      "Testing restores is unnecessary",
      "Corruption only happens during testing"
    ],
    correct: 1,
    explanation: "Untested backups = unknown if backups actually work. Backup testing includes: regular restore tests (monthly/quarterly), verify file integrity, confirm complete restoration, test different scenarios, document restore procedures, train staff on restoration. Common backup failures: media degradation, software bugs, incomplete backups, configuration errors, encryption key loss. Discovery during actual emergency is too late. 'Untested backup' is essentially 'no backup.' Build testing into backup strategy: test random files, full system restores annually, document restore time. Backup success = ability to restore, not just ability to backup. Test, verify, document."
  },
  {
    id: 6,
    question: "A company needs to minimize backup storage space. They keep full backups from every Sunday for the past year, plus daily incrementals. What backup rotation scheme might better manage storage?",
    options: [
      "Keep every backup forever - storage is infinite",
      "Grandfather-Father-Son (GFS) rotation with daily, weekly, and monthly retention schedules",
      "Delete all backups daily",
      "Never rotate - just buy more storage"
    ],
    correct: 1,
    explanation: "Grandfather-Father-Son (GFS) rotation manages storage through retention tiers: Daily backups (Son) - keep 6 days, Weekly backups (Father) - keep 4-5 weeks, Monthly backups (Grandfather) - keep 12 months or longer. Older backups are rotated out systematically. Benefits: controlled storage growth, longer retention of monthly backups, balanced recovery options. Alternative: Tower of Hanoi, First In First Out (FIFO). Retention policies based on: business requirements, compliance regulations, storage capacity, recovery needs. Keeping everything forever is impractical. Deleting all backups is data suicide. Strategic rotation balances storage costs with recovery capabilities."
  },
  {
    id: 7,
    question: "What is the main advantage of using cloud backup services compared to local tape backups?",
    options: [
      "Cloud backups are always free",
      "Automatic offsite storage, accessibility from anywhere, no media management, and vendor-managed infrastructure",
      "Cloud backups are always faster than tape",
      "Tape backups are superior in every way"
    ],
    correct: 1,
    explanation: "Cloud backup advantages: automatic offsite (3-2-1 compliance), accessible from anywhere (disaster recovery), no tape handling/rotation, scalable storage, vendor maintains infrastructure, encrypted transmission/storage, versioning built-in. Disadvantages: ongoing costs, internet dependency, restore time for large datasets, vendor lock-in. Tape advantages: no recurring costs, air-gapped security, long-term archival. Tape disadvantages: media management, offsite rotation effort, degradation. Modern trend: cloud for operational backups, tape for long-term archives. Neither is universally superior - choose based on: budget, data volume, recovery requirements, compliance needs. Hybrid approaches common."
  },
  {
    id: 8,
    question: "A ransomware attack encrypts a company's production data and backups on the same network. What backup strategy would have protected against this?",
    options: [
      "No backup strategy protects against ransomware",
      "Air-gapped or immutable backups that cannot be encrypted or deleted by malware",
      "More frequent backups on the same network",
      "Backing up to the same server"
    ],
    correct: 1,
    explanation: "Ransomware protection requires: Air-gapped backups (physically disconnected after backup, no network access), Immutable backups (write-once-read-many, cannot be modified/deleted), Offline backups (tape, removable drives stored offline), Cloud backups with version history (restore pre-encryption versions). Network-connected backups are vulnerable - ransomware targets them specifically. More frequent backups on same network don't help if all encrypted. Same-server backup offers zero protection. Modern ransomware hunts for: network shares, backup software, Volume Shadow Copies. Protection requires backups that malware cannot reach or modify. Test ransomware recovery scenarios."
  },
  {
    id: 9,
    question: "How often should backup procedures be tested and verified?",
    options: [
      "Never - if backups run successfully, they work",
      "Regularly scheduled testing (monthly or quarterly) with documented restore procedures",
      "Only test when backups fail",
      "Once per decade"
    ],
    correct: 1,
    explanation: "Backup testing schedule: Regular restore tests (monthly for critical systems, quarterly for others), Full system restores (annually), Random file verification (weekly/monthly), Disaster recovery drills (annually), Document all test results. Test scenarios: individual file restore, full system restore, bare-metal recovery, disaster recovery site failover. Backup success isn't determined by backup completion - it's determined by restore success. Testing reveals: corruption, configuration issues, media failures, incomplete backups, inadequate documentation. Scheduled testing prevents emergency surprises. Document: procedures, timing, success/failures, improvements needed. Untested backup = hope, not strategy."
  },
  {
    id: 10,
    question: "What is a 'bare-metal restore' and when is it needed?",
    options: [
      "Restoring data to brand new/formatted hardware without existing OS",
      "Polishing computer cases",
      "Installing only the operating system",
      "Bare-metal has no technical meaning"
    ],
    correct: 0,
    explanation: "Bare-metal restore: rebuilding complete system (OS + applications + data + settings) on blank/new hardware with no pre-existing OS. Needed when: complete hardware failure, replacing failed server, migrating to new hardware, disaster recovery to different equipment. Requires: bootable recovery media, complete system image, hardware drivers, proper backup of entire system. Different from file restore (restores specific files to existing OS). Bare-metal capability critical for disaster recovery. Test bare-metal restore periodically - ensures: backups include everything needed, recovery media works, procedures are documented. Most backup solutions offer bare-metal capability - verify yours does."
  },
  {
    id: 11,
    question: "A company's backup window is only 4 hours nightly, but full backups take 8 hours. What backup strategy should they implement?",
    options: [
      "Give up on backups entirely",
      "Perform weekly full backups with daily incremental or differential backups",
      "Run full backups during business hours",
      "Delete half the data to make backups faster"
    ],
    correct: 1,
    explanation: "When full backups exceed backup window: Full backups weekly (during longer weekend windows), Daily incremental backups (fast, within window), OR daily differential backups. Alternative solutions: backup acceleration (deduplication, compression), incremental forever with synthetic fulls, increase backup window, add backup infrastructure. Never skip backups due to time constraints. Business hour backups impact performance. Deleting data to fit backups is backwards. Modern backup solutions: changed block tracking, forever incremental with periodic synthetic fulls (creates full backup from incrementals without reading source data). Architect backup strategy around: data volume, available window, recovery requirements. Technology should serve business needs, not limit them."
  },
  {
    id: 12,
    question: "What information should be included in disaster recovery documentation?",
    options: [
      "Just technician phone numbers",
      "Recovery procedures, contact information, system configurations, offsite backup locations, RTO/RPO, escalation procedures",
      "Only passwords",
      "Disaster recovery doesn't need documentation"
    ],
    correct: 1,
    explanation: "Comprehensive DR documentation includes: Recovery procedures (step-by-step), Contact information (staff, vendors, emergency services), System configurations and dependencies, Network diagrams, Offsite backup locations and access procedures, RTO/RPO requirements by system, Escalation and decision-making authority, Alternative site information, Hardware/software inventory, Vendor support contracts. Store documentation: offsite (accessible during site disaster), in multiple formats (print + digital), with key personnel. Update regularly as systems change. DR plan without documentation is no plan. Documentation enables: non-expert execution, consistent recovery, quick decision-making. Test DR procedures using documentation - identifies gaps and ambiguities."
  },
  {
    id: 13,
    question: "A company discovers their backups have been failing silently for 3 months. What backup best practice would have caught this earlier?",
    options: [
      "Hoping backups work",
      "Monitoring backup job completion, receiving alerts for failures, and reviewing backup logs regularly",
      "Never checking backups",
      "Assuming silence means success"
    ],
    correct: 1,
    explanation: "Backup monitoring requirements: Automated alerts for failed backups, Daily verification of backup completion, Regular log review (weekly minimum), Capacity monitoring (storage space), Backup software health checks, Test restores (find corruption). Silent failures occur due to: notification failures, log monitoring gaps, assuming success without verification. 3-month gaps are catastrophic - likely unrecoverable. Implement: email/SMS alerts for failures, dashboard monitoring, escalation for repeated failures, regular reporting to management. 'Silent success' assumption is dangerous. Backup verification is as critical as backup execution. Monitoring prevents surprise discoveries during emergencies."
  },
  {
    id: 14,
    question: "What is the purpose of keeping multiple generations or versions of backups rather than just the most recent backup?",
    options: [
      "Wastes storage space unnecessarily",
      "Protects against corrupted files not noticed immediately, allows point-in-time recovery, and guards against backup corruption",
      "Multiple versions serve no purpose",
      "Only one backup is ever needed"
    ],
    correct: 1,
    explanation: "Multiple backup versions protect against: Corruption discovered late (file corrupted a week ago, yesterday's backup has corrupted version), Accidental deletions (file deleted days ago, need older backup), Ransomware (restore pre-infection version), Backup media failure (if latest backup corrupted, have previous versions). Versioning enables point-in-time recovery. Example: keep 7 daily, 4 weekly, 12 monthly backups. This isn't waste - it's insurance. Single-backup strategy means: corruption in backup = permanent loss, no recovery from past states. Most backup systems include versioning. Configure retention based on: recovery requirements, compliance regulations, storage capacity. Balance: adequate history vs. storage costs."
  },
  {
    id: 15,
    question: "When planning backup strategy, which types of data should be prioritized for most frequent backups?",
    options: [
      "Static data that never changes",
      "Critical business data that changes frequently (databases, active documents, configurations)",
      "Operating system files (easily reinstalled)",
      "All data backed up at same frequency regardless of importance"
    ],
    correct: 1,
    explanation: "Backup frequency prioritization: Critical/frequently changing data (hourly/real-time): databases, email, active documents, financial records. Important/moderate change (daily): user home directories, configurations. Static/replaceable data (weekly/monthly): applications (reinstallable), OS (rebuildable). Different data = different requirements. Strategies: database transaction logs (continuous), file servers (daily), system images (weekly). Not all data equal importance/change rate. Tiered approach optimizes: backup window usage, storage costs, recovery capabilities. Document data classification and backup schedules. Align frequency with: business criticality, change rate, RPO requirements. Over-backing up static data wastes resources; under-backing up critical data risks loss."
  }
];