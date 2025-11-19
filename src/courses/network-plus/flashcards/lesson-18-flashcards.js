// Flashcards for Lesson 18: Backup and Disaster Recovery

export const lesson18Flashcards = [
  {
    id: 1,
    front: "What is a full backup?",
    back: "Copies ALL data every time. Fastest restore but slowest backup and uses most storage."
  },
  {
    id: 2,
    front: "What is an incremental backup?",
    back: "Only backs up changes since last backup (any type). Fastest backup, slowest restore (need full + all incrementals)."
  },
  {
    id: 3,
    front: "What is a differential backup?",
    back: "Backs up changes since last FULL backup. Grows larger each day. Faster restore than incremental (full + one differential)."
  },
  {
    id: 4,
    front: "Compare restore times: Full, Incremental, Differential",
    back: "Full: fastest (one set). Differential: medium (full + one). Incremental: slowest (full + all incrementals in order)."
  },
  {
    id: 5,
    front: "What is a snapshot backup?",
    back: "Point-in-time state capture. Instant creation, space-efficient. NOT a true backup (stays on same system)."
  },
  {
    id: 6,
    front: "What is the 3-2-1 backup rule?",
    back: "3 copies of data, 2 different media types, 1 offsite. Industry best practice for disaster protection."
  },
  {
    id: 7,
    front: "What is Grandfather-Father-Son (GFS) backup rotation?",
    back: "Hierarchical schedule: daily (Son, 1 week), weekly (Father, 1 month), monthly (Grandfather, 1 year)."
  },
  {
    id: 8,
    front: "What factors determine backup frequency?",
    back: "RPO (data loss tolerance), data change rate, backup window, business requirements, compliance."
  },
  {
    id: 9,
    front: "What is a backup retention policy?",
    back: "Defines how long backups are kept. Based on compliance, storage costs, and recovery needs."
  },
  {
    id: 10,
    front: "What is on-site backup?",
    back: "Stored at same location as source. Fast restore but vulnerable to site disasters."
  },
  {
    id: 11,
    front: "What is off-site backup?",
    back: "Stored at different location. Protects against disasters. Slower restore but critical for DR."
  },
  {
    id: 12,
    front: "What is cloud backup?",
    back: "Data stored with cloud provider. Automatic offsite, scalable, no tape management. Internet-dependent."
  },
  {
    id: 13,
    front: "What is a Business Continuity Plan (BCP)?",
    back: "Comprehensive plan to maintain operations during disruption. Broader than DR, covers people/processes/technology."
  },
  {
    id: 14,
    front: "What is a Disaster Recovery Plan (DRP)?",
    back: "IT-focused plan to restore technology after disaster. Includes procedures, roles, priorities, alternate sites."
  },
  {
    id: 15,
    front: "What is RTO (Recovery Time Objective)?",
    back: "Maximum acceptable downtime. How long can business be down? Drives backup strategy and redundancy."
  },
  {
    id: 16,
    front: "What is RPO (Recovery Point Objective)?",
    back: "Maximum acceptable data loss in time. How far back can you restore? Drives backup frequency."
  },
  {
    id: 17,
    front: "Relationship between RTO, RPO, and cost?",
    back: "Lower RTO/RPO = higher cost. Requires real-time replication, redundancy, hot sites. Tier systems by criticality."
  },
  {
    id: 18,
    front: "What is MTTR (Mean Time To Repair)?",
    back: "Average time to restore after failure. Total downtime ÷ number of incidents. Goal: minimize through prep."
  },
  {
    id: 19,
    front: "What is MTBF (Mean Time Between Failures)?",
    back: "Average time between failures. Total uptime ÷ failures. Higher MTBF = more reliable."
  },
  {
    id: 20,
    front: "Why backup network device configurations?",
    back: "Enables quick recovery, rollback after bad changes, disaster recovery. Backup after every change."
  },
  {
    id: 21,
    front: "Startup-config vs running-config?",
    back: "Running: current active (RAM, lost on reboot). Startup: saved (NVRAM, loads on boot). Must save running to startup."
  },
  {
    id: 22,
    front: "What is a cold site?",
    back: "Empty facility with power/cooling/network but no equipment. Cheapest, slowest (days-weeks activation)."
  },
  {
    id: 23,
    front: "What is a warm site?",
    back: "Has some equipment but not current. Moderate cost/speed (hours-days activation)."
  },
  {
    id: 24,
    front: "What is a hot site?",
    back: "Fully operational duplicate with current data. Most expensive, fastest (minutes-hours activation)."
  },
  {
    id: 25,
    front: "Compare cold, warm, and hot sites",
    back: "Cold: cheapest/slowest/empty. Warm: moderate/partial equipment. Hot: expensive/fast/fully equipped. Choose by RTO."
  },
  {
    id: 26,
    front: "Why test backups and DR plans regularly?",
    back: "Reveals corrupt backups, missing components, outdated procedures. Untested backup = no backup. Test quarterly minimum."
  },
  {
    id: 27,
    front: "What's in configuration backup documentation?",
    back: "Schedule, locations, retention, restore procedures, personnel, contacts, versions, credentials. Store offsite."
  },
  {
    id: 28,
    front: "Scenario: DB fails. RPO=1hr, RTO=4hrs. Strategy?",
    back: "RPO 1hr: backup hourly. RTO 4hrs: need fast restore (replication or frequent backups). Test restore time!"
  },
  {
    id: 29,
    front: "Common backup mistakes?",
    back: "Never testing, no offsite copy, storing with production, no documentation, no encryption, forgetting configs."
  },
  {
    id: 30,
    front: "Match: Full, Incremental, Differential, Snapshot, 3-2-1",
    back: "Full: baseline. Incremental: fastest backup/slowest restore. Differential: medium both. Snapshot: instant recovery. 3-2-1: strategy."
  }
];