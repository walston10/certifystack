// Quiz for Lesson 18: Backup and Disaster Recovery

export const lesson18Quiz = [
  {
    id: 1,
    question: "A company performs full backups every Sunday night and incremental backups Monday through Saturday. On Friday morning, the primary file server crashes. To restore all data, which backup sets must be restored?",
    options: [
      "Only Friday morning's incremental backup",
      "Sunday's full backup plus Monday through Thursday's incremental backups",
      "Sunday's full backup plus only Thursday's incremental backup",
      "All incremental backups from Monday through Friday, without the full backup"
    ],
    correct: 1,
    explanation: "Incremental backups only capture changes since the last backup (full or incremental). To restore: 1) Start with last full backup (Sunday), 2) Apply each incremental in order (Monday, Tuesday, Wednesday, Thursday). Each incremental builds on the previous. Pro: fast backups, less storage. Con: slow restore (multiple sets). If Friday's backup hadn't run yet, you restore through Thursday. Always restore incrementals in chronological order."
  },
  {
    id: 2,
    question: "An organization's backup strategy uses full backups on Sunday and differential backups Monday through Saturday. On Thursday, the backup system fails. How many backup sets are needed to restore to Wednesday night's state?",
    options: [
      "Sunday's full backup plus Wednesday's differential backup only (2 sets total)",
      "Sunday's full backup plus Monday, Tuesday, and Wednesday differentials (4 sets)",
      "Only Wednesday's differential backup",
      "All daily backups from Sunday through Wednesday"
    ],
    correct: 0,
    explanation: "Differential backups capture all changes since the last full backup—each differential is cumulative. To restore: 1) Last full backup (Sunday), 2) Most recent differential (Wednesday). Wednesday's differential includes Monday and Tuesday's changes. Pro: faster restore than incremental (only 2 sets). Con: differential backups grow larger each day, slower backups than incremental. Differential = cumulative changes; Incremental = only new changes."
  },
  {
    id: 3,
    question: "A financial services company must comply with regulations requiring that they can restore systems within 2 hours of a disaster and lose no more than 15 minutes of data. What do these requirements represent?",
    options: [
      "MTTR (Mean Time To Repair) and MTBF (Mean Time Between Failures)",
      "RTO (Recovery Time Objective) of 2 hours and RPO (Recovery Point Objective) of 15 minutes",
      "Backup window of 2 hours and retention period of 15 minutes",
      "SLA uptime guarantee of 2 hours downtime per 15-minute interval"
    ],
    correct: 1,
    explanation: "RTO (Recovery Time Objective) = maximum acceptable downtime (2 hours means restore within 2 hours). RPO (Recovery Point Objective) = maximum acceptable data loss (15 minutes means backups every 15 minutes or continuous replication). These drive backup frequency and DR architecture: 15-minute RPO requires snapshots/replication every 15 minutes; 2-hour RTO requires hot/warm site with tested procedures. Aggressive RTO/RPO = higher cost but less impact."
  },
  {
    id: 4,
    question: "A company follows the 3-2-1 backup rule. They currently have backups on the primary backup server and a second copy on tape. What is missing from their implementation of the 3-2-1 rule?",
    options: [
      "Three copies total is already too many backups",
      "The third copy stored off-site (cloud storage, secondary data center, or off-site tape vault)",
      "They need two more backup servers on-site",
      "Backups should all be on the same media type"
    ],
    correct: 1,
    explanation: "3-2-1 rule: 3 copies of data (1 primary + 2 backups), 2 different media types (disk + tape, disk + cloud), 1 copy off-site (protects against site disasters: fire, flood, theft). This scenario has 3 copies (primary + backup server + tape) on 2 media types, but all on-site. Solution: store tapes off-site or add cloud backup. Off-site protects against facility-wide disasters. Modern variation: 3-2-1-1-0 (3 copies, 2 media, 1 off-site, 1 offline/air-gapped, 0 errors verified)."
  },
  {
    id: 5,
    question: "A network administrator backs up all router and switch configurations nightly using a script that connects via SSH, runs 'show running-config', and saves output to a file server. After a router failure, they discover the startup-config on the replacement doesn't match because it wasn't saved. What should the backup script include?",
    options: [
      "Only backing up the running-config is sufficient for all scenarios",
      "Back up both running-config and startup-config, and verify configurations are saved to NVRAM before backup",
      "Only back up the startup-config since that's what loads on boot",
      "Backup scripts are unnecessary for network devices"
    ],
    correct: 1,
    explanation: "Running-config (active configuration in RAM) vs Startup-config (saved in NVRAM, loads on boot). If changes aren't saved ('copy run start' or 'write memory'), they're lost on reboot. Best practice: 1) Back up both running-config and startup-config, 2) Compare them (differences indicate unsaved changes), 3) Include in backups: VLAN database, ACLs, crypto keys (if exportable), 4) Automate with tools (Rancid, Oxidized, Ansible), 5) Version control (Git) for change tracking."
  },
  {
    id: 6,
    question: "A disaster recovery plan specifies a cold site for recovery. The primary data center experiences a catastrophic failure. How long should the organization expect before operations can resume at the cold site?",
    options: [
      "Immediately - cold sites are pre-configured and ready",
      "Several days to weeks - cold sites require equipment installation, configuration, and data restoration",
      "Within hours - cold sites have standby equipment powered on",
      "Within minutes - cold sites maintain real-time data replication"
    ],
    correct: 1,
    explanation: "DR site types: Cold site = empty facility with power/cooling/network but no equipment (cheapest, slowest recovery: days/weeks). Warm site = facility with hardware but not current data (moderate cost/speed: hours/days). Hot site = duplicate environment with current/near-current data (expensive, fastest: minutes/hours). Mobile site = trailer with equipment (temporary DR). Cold sites require: procure/ship equipment, install/cable, configure, restore from backups, test. Only suitable for non-critical systems with lenient RTO."
  },
  {
    id: 7,
    question: "A backup administrator notices that backup jobs are failing to complete within their 8-hour overnight window. The backups start at 11 PM but don't finish until 10 AM, impacting business operations. What strategy could help resolve this issue?",
    options: [
      "Cancel all backups to avoid impacting operations",
      "Implement incremental or differential backups instead of nightly full backups, or use backup deduplication to reduce data volume",
      "Only backup half the data each night",
      "Extend the backup window to 24 hours"
    ],
    correct: 1,
    explanation: "Backup window challenges: data volume grows, backup time increases. Solutions: 1) Incremental/differential (only changed data - faster), 2) Deduplication (eliminate redundant data blocks), 3) Faster backup infrastructure (10GbE, NVMe), 4) Parallel backups (multiple streams), 5) Forever incremental (one full, then continuous incrementals), 6) Synthetic full (construct full backups from incrementals without re-reading source), 7) Schedule non-critical systems for off-peak. Balance: backup speed vs restore complexity."
  },
  {
    id: 8,
    question: "An organization stores backup tapes in a fireproof safe in the server room. During a fire, the building's sprinkler system activates and water damages all equipment including the safe. What backup principle was violated?",
    options: [
      "Backups should be encrypted for security",
      "Backups must be stored off-site to protect against site-wide disasters",
      "Backups should be tested more frequently",
      "Backup retention period was too short"
    ],
    correct: 1,
    explanation: "On-site-only backups are vulnerable to site disasters: fire, flood, earthquake, theft, ransomware (if connected). Off-site storage protects against facility-wide events. Options: 1) Off-site tape vault (Iron Mountain, etc.), 2) Secondary data center (>100 miles away), 3) Cloud storage (geographic redundancy). Fireproof safes protect against heat but not water, structural collapse, or theft. Even with on-site protection, always maintain off-site copies. Ransomware consideration: ensure off-site backups are immutable/air-gapped."
  },
  {
    id: 9,
    question: "A company uses Grandfather-Father-Son (GFS) backup rotation. They keep daily backups for 2 weeks (son), weekly backups for 2 months (father), and monthly backups for 1 year (grandfather). On December 15th, they need to restore a file deleted on October 8th. Which backup should they use?",
    options: [
      "October 8th daily backup (son)",
      "First weekly backup after October 8th that's still retained (father)",
      "October monthly backup (grandfather) from October 1st or end of October",
      "Most recent daily backup from December"
    ],
    correct: 2,
    explanation: "GFS retention: Daily (son) = 2 weeks (October 8 daily is long gone by December), Weekly (father) = 2 months (October weeklies expired by December), Monthly (grandfather) = 1 year (October monthly still exists). They can only restore from October's monthly backup—won't be exact date (October 1 or 31), but closest available. This illustrates retention planning trade-offs: longer retention = more storage cost but better recovery options. Adjust retention based on: compliance, business needs, storage costs."
  },
  {
    id: 10,
    question: "A backup system uses VM snapshots for quick recovery. The administrator takes snapshots every hour throughout the day. After several weeks, VM performance degrades significantly. What is the likely cause?",
    options: [
      "Snapshots don't affect performance and aren't the issue",
      "Excessive snapshot chain depth causes performance degradation as writes traverse multiple snapshot files",
      "Hourly snapshots are too infrequent",
      "VMs need more RAM to handle snapshots"
    ],
    correct: 1,
    explanation: "Snapshots (VMware, Hyper-V) capture point-in-time state by creating delta files for changes. Problems: 1) Performance degradation (each write/read traverses snapshot chain), 2) Storage bloat (snapshots can grow to VM size), 3) Snapshot consolidation failures, 4) Long chain increases corruption risk. Best practices: Snapshots are NOT backups (same storage as VM), limit chain depth (<3-5 snapshots), consolidate/delete old snapshots promptly, use proper backup tools (Veeam, Commvault) that remove snapshots after backup. Hourly snapshots without cleanup create deep chains."
  },
  {
    id: 11,
    question: "An organization's DR plan lists key personnel and their contact information. During a DR test on Saturday, they cannot reach the backup administrator because the phone number on file is disconnected. What aspect of DR planning was neglected?",
    options: [
      "The DR plan hardware specifications are outdated",
      "DR plan documentation should be reviewed and updated regularly, including contact information verification",
      "DR tests should only be conducted on weekdays",
      "Backup administrators shouldn't be included in DR plans"
    ],
    correct: 1,
    explanation: "DR plans require regular maintenance: 1) Review quarterly/semi-annually, 2) Update contact information (people change roles/numbers), 3) Update procedures (new systems, changed processes), 4) Verify vendor contracts are current, 5) Test regularly (at least annually), 6) Update after infrastructure changes, 7) Train new staff. Outdated DR plans fail during real disasters. Include: primary contacts, secondary contacts, escalation paths, after-hours contacts. Store DR plan off-site and offline (accessible during disasters)."
  },
  {
    id: 12,
    question: "A backup verification test reveals that several backup files are corrupted and cannot be restored. The backups appeared to complete successfully with no errors reported. What should be implemented to catch this issue proactively?",
    options: [
      "Increase backup frequency to compensate for failures",
      "Implement regular restore testing and backup verification to validate backup integrity",
      "Switch to a different backup media type",
      "Disable backup verification to improve performance"
    ],
    correct: 1,
    explanation: "Backup verification is critical: backups that can't restore are worthless. Methods: 1) Automated restore testing (restore to isolated environment, verify integrity), 2) Backup software verification (checksum validation), 3) Test restores (quarterly/semi-annually), 4) Monitor backup logs for warnings, 5) Verify backup chain integrity. 'Successful backup' doesn't guarantee restorable data—media errors, software bugs, corruption can occur. Statistics show 30-40% of organizations discover backup failures only when attempting restoration during disasters."
  },
  {
    id: 13,
    question: "After a ransomware attack encrypts production systems, the IT team discovers their backup server was also encrypted because it was continuously connected to the network with mapped drives. What backup strategy would have prevented this?",
    options: [
      "Using faster backup software",
      "Implementing air-gapped or immutable backups that are disconnected from the network or write-once storage",
      "Increasing backup frequency",
      "Only backing up during business hours"
    ],
    correct: 1,
    explanation: "Ransomware-proof backup strategies: 1) Air-gapped backups (physically disconnected from network), 2) Immutable storage (write-once-read-many, cannot be modified/deleted), 3) Offline tape backups, 4) Cloud backup with versioning/immutability, 5) Separate security domain (different credentials, no domain trust), 6) Network isolation for backup infrastructure. Modern ransomware targets backups. Never: keep backups on mapped drives, use same credentials as production, allow delete permissions on backup storage. 3-2-1-1-0: that extra '1' = offline/air-gapped."
  },
  {
    id: 14,
    question: "A cloud-based company needs to calculate their annual downtime budget based on their 99.95% uptime SLA. Approximately how much downtime is acceptable per year?",
    options: [
      "4.38 hours per year (99.95% = 0.05% downtime)",
      "43.8 hours per year (99.5% uptime)",
      "8.76 hours per year (99.90% uptime)",
      "Less than 1 hour per year (99.99% uptime)"
    ],
    correct: 0,
    explanation: "Uptime calculations: 99.9% ('three nines') = 8.76 hours/year downtime, 99.95% = 4.38 hours/year, 99.99% ('four nines') = 52.56 minutes/year, 99.999% ('five nines') = 5.26 minutes/year. Formula: (1 - uptime%) × 365.25 days × 24 hours. Higher uptime = exponentially higher cost (redundancy, failover, monitoring). Choose SLA based on: business impact, user tolerance, budget. Not all systems need five nines—email can tolerate 99.9%, but trading systems might need 99.999%."
  },
  {
    id: 15,
    question: "A company's disaster recovery plan includes documentation, contact lists, and procedures stored on their internal wiki server. During a disaster that takes down their data center, the DR team cannot access the plan. What mistake was made?",
    options: [
      "DR plans should be longer and more detailed",
      "DR plans must be accessible during disasters - store copies off-site, offline, and in cloud locations independent of primary infrastructure",
      "DR plans should only exist in electronic format",
      "DR teams should memorize all procedures"
    ],
    correct: 1,
    explanation: "DR plan storage requirements: 1) Off-site copies (cloud, secondary site), 2) Offline copies (printed, USB drive in safe), 3) Independent infrastructure (not on systems being recovered), 4) Multiple locations (don't rely on single point), 5) Accessible to all DR team members, 6) Include: system documentation, network diagrams, vendor contacts, procedures. Common mistake: storing DR plan only on systems it's meant to recover. During disasters, assume primary infrastructure is completely unavailable. Some organizations keep printed DR binders at team members' homes."
  }
];

// Export for use in quiz component
export default lesson18Quiz;