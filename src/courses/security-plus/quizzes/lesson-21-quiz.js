export const lesson21Quiz = [
  {
    id: 1,
    question: "A business requires 99.99% uptime for their e-commerce platform, meaning only about 52 minutes of downtime per year is acceptable. What is this requirement called?",
    options: [
      "RTO",
      "High availability requirement - specified uptime percentage",
      "RPO",
      "MTTR"
    ],
    correct: 1,
    explanation: "HIGH AVAILABILITY requirements specify acceptable uptime, often expressed as 'nines'. Availability levels: (1) 99% = 3.65 days downtime/year, (2) 99.9% = 8.76 hours/year, (3) 99.99% = 52.6 minutes/year, (4) 99.999% = 5.26 minutes/year. More nines = more expensive: (1) Redundant components, (2) Geographic distribution, (3) Complex failover, (4) 24/7 support. Calculating availability: uptime/(uptime + downtime) × 100. HA requirements drive architecture: (1) Redundant servers, (2) Load balancers, (3) Multiple data centers, (4) Automated failover. SLA (Service Level Agreement) often defines availability requirements. Each additional 9 significantly increases cost and complexity."
  },
  {
    id: 2,
    question: "A company's DR plan specifies that after a disaster, critical systems must be operational within 4 hours. What metric is this?",
    options: [
      "RPO - Recovery Point Objective",
      "RTO (Recovery Time Objective) - maximum acceptable downtime",
      "MTBF",
      "MTTR"
    ],
    correct: 1,
    explanation: "RTO (Recovery Time Objective) is the maximum acceptable time to restore systems after a disruption. RTO considerations: (1) How long can business survive without system?, (2) Financial impact of downtime, (3) Customer/regulatory requirements. RTO examples: (1) E-commerce = 1 hour, (2) Email = 4 hours, (3) Development = 24 hours. RTO determines: (1) Recovery strategy (hot/warm/cold site), (2) Backup technology, (3) Staff and resources needed, (4) Testing requirements. RTO vs RPO: (1) RTO = how fast to recover, (2) RPO = how much data loss acceptable. Shorter RTO = more expensive (hot sites, automated failover). RTO should be based on business impact analysis."
  },
  {
    id: 3,
    question: "An organization backs up data every hour. In a worst-case disaster, they could lose up to one hour of data. What metric does this represent?",
    options: [
      "RTO",
      "RPO (Recovery Point Objective) - maximum acceptable data loss",
      "MTBF",
      "MTTR"
    ],
    correct: 1,
    explanation: "RPO (Recovery Point Objective) is the maximum acceptable amount of data loss measured in time. RPO examples: (1) Financial transactions = minutes (near-zero), (2) Business applications = 1-4 hours, (3) Development = 24 hours. RPO determines backup strategy: (1) RPO = 0 → synchronous replication, (2) RPO = minutes → frequent snapshots, (3) RPO = hours → hourly backups, (4) RPO = 24 hours → daily backups. RPO vs RTO relationship: (1) Both from business impact analysis, (2) Both drive recovery strategy, (3) More aggressive = more expensive. Calculation: last backup to disaster point = potential data loss. Actual loss may be less if disaster occurs just after backup."
  },
  {
    id: 4,
    question: "A company maintains a fully equipped alternate site with servers running and data synchronized. They can switch operations within minutes. What type of site is this?",
    options: [
      "Cold site",
      "Hot site - fully operational alternate site ready for immediate failover",
      "Warm site",
      "Mobile site"
    ],
    correct: 1,
    explanation: "HOT SITE is a fully operational alternate site that can assume operations immediately or within minutes. Site types: (1) HOT - fully equipped, data synced, immediate failover, (2) WARM - equipment present, needs data restoration, hours to activate, (3) COLD - empty facility, equipment needed, days to activate. Hot site characteristics: (1) Duplicate infrastructure, (2) Real-time or near-real-time data replication, (3) Staff can operate immediately, (4) Highest cost. When to use hot site: (1) Critical systems with low RTO, (2) Financial services, (3) Healthcare, (4) E-commerce. Cost vs recovery time trade-off: hot is most expensive but fastest recovery. Many organizations use hot for critical systems, warm/cold for less critical."
  },
  {
    id: 5,
    question: "Backup policy requires full backups every Sunday and incremental backups Monday through Saturday. What is the advantage of incremental over differential?",
    options: [
      "Faster restore",
      "Faster backup and less storage - only changes since last backup",
      "No advantage",
      "Better encryption"
    ],
    correct: 1,
    explanation: "INCREMENTAL backups only capture changes since the LAST backup (full or incremental) - faster and less storage. Backup types: (1) FULL - everything, largest, slowest, standalone restore, (2) INCREMENTAL - changes since last backup, smallest, requires chain for restore, (3) DIFFERENTIAL - changes since last full, grows daily, needs full + latest diff. Incremental advantage: (1) Fastest backup, (2) Least storage per backup, (3) Minimal bandwidth. Incremental disadvantage: (1) Restore requires full + all incrementals, (2) Any broken backup breaks chain, (3) Longer restore time. Differential advantage: (1) Only needs full + latest diff to restore, (2) Faster restore than incremental chain. Strategy depends on: backup window, storage costs, restore time requirements."
  },
  {
    id: 6,
    question: "An organization follows the 3-2-1 backup rule. What does this rule specify?",
    options: [
      "3 backups, 2 locations, 1 format",
      "3 copies, 2 different media types, 1 offsite copy",
      "3 hours, 2 days, 1 week retention",
      "3 servers, 2 networks, 1 site"
    ],
    correct: 1,
    explanation: "The 3-2-1 RULE specifies: 3 copies of data, on 2 different media types, with 1 copy offsite. 3-2-1 breakdown: (1) 3 COPIES - production + 2 backups (survives multiple failures), (2) 2 MEDIA TYPES - disk + tape, or disk + cloud (different failure modes), (3) 1 OFFSITE - protected from site-wide disaster. Why each matters: (1) Single backup can fail, (2) Same media has correlated failures, (3) Site disaster affects local copies. Modern variations: (1) 3-2-1-1 - add one air-gapped/immutable copy (ransomware protection), (2) Cloud-native approaches. Ransomware consideration: if backups are connected, ransomware can encrypt them. Air-gapped or immutable storage critical. 3-2-1 is minimum - adjust based on data criticality."
  },
  {
    id: 7,
    question: "A load balancer distributes traffic across three web servers. If one fails, the other two continue serving traffic. What availability concept does this demonstrate?",
    options: [
      "Cold standby",
      "Active-active redundancy - multiple systems actively serving traffic",
      "Failover only",
      "Backup"
    ],
    correct: 1,
    explanation: "ACTIVE-ACTIVE means multiple systems are simultaneously serving traffic, providing seamless failover. Active-active vs Active-passive: (1) ACTIVE-ACTIVE - all systems handling load, failure = reduced capacity, (2) ACTIVE-PASSIVE - standby waits, failure = failover to standby. Active-active benefits: (1) Better resource utilization, (2) No failover delay, (3) Scales with additional nodes. Load balancer role: (1) Distributes traffic, (2) Health checks, (3) Removes failed nodes from rotation. Redundancy concepts: (1) N+1 - one spare for N active, (2) 2N - fully duplicate, (3) 2N+1 - duplicate plus spare. Active-active is preferred when workload allows - better utilization and resilience."
  },
  {
    id: 8,
    question: "Two routers are configured with HSRP. If the primary fails, the secondary automatically becomes active, and clients don't need reconfiguration. What is HSRP?",
    options: [
      "Encryption protocol",
      "FHRP (First Hop Redundancy Protocol) - providing gateway redundancy",
      "Routing protocol",
      "Monitoring protocol"
    ],
    correct: 1,
    explanation: "HSRP (Hot Standby Router Protocol) is an FHRP providing automatic gateway failover. FHRP protocols: (1) HSRP - Cisco proprietary, (2) VRRP - open standard, (3) GLBP - Cisco, adds load balancing. How it works: (1) Virtual IP shared between routers, (2) Clients use virtual IP as gateway, (3) Active router responds, standby monitors, (4) Standby takes over if active fails, (5) Clients unaware of failover. Benefits: (1) Automatic failover, (2) No client reconfiguration, (3) Fast failover (seconds). Use case: default gateway redundancy - if router fails, network access continues. Eliminates single point of failure at first hop. Essential for high-availability network design."
  },
  {
    id: 9,
    question: "Multiple physical network links between switches are combined into a single logical link for increased bandwidth and redundancy. What is this called?",
    options: [
      "Spanning Tree",
      "Link aggregation/LACP - combining links for bandwidth and redundancy",
      "Port mirroring",
      "VLANs"
    ],
    correct: 1,
    explanation: "LINK AGGREGATION (LACP) combines multiple physical links into one logical link for bandwidth and failover. Benefits: (1) Increased bandwidth (aggregate throughput), (2) Redundancy (failure of one link doesn't break connection), (3) Load distribution. LACP (Link Aggregation Control Protocol): (1) Standard protocol (802.3ad/802.1AX), (2) Dynamically negotiates aggregation, (3) Detects link failures, (4) Auto-adjusts to available links. Also called: EtherChannel (Cisco), port channel, bonding. Example: 4 x 1Gbps = 4Gbps logical link with redundancy. Considerations: (1) Both ends must support and be configured, (2) Traffic distribution may not be perfectly even, (3) STP sees as single link. Common between switches and between servers and switches."
  },
  {
    id: 10,
    question: "A server has two power supplies connected to different power circuits. If one power source fails, the server continues operating. What concept is this?",
    options: [
      "Load balancing",
      "Power redundancy - multiple power supplies/sources for fault tolerance",
      "Network redundancy",
      "Data redundancy"
    ],
    correct: 1,
    explanation: "POWER REDUNDANCY uses multiple power supplies and circuits to prevent power-related failures. Power redundancy levels: (1) Dual power supplies in server, (2) Separate circuits (different breakers), (3) Separate power sources (different utility feeds), (4) UPS for each circuit, (5) Generator backup. Data center power: (1) A+B power feeds (separate paths), (2) Dual-corded servers, (3) PDUs (Power Distribution Units) redundancy. UPS (Uninterruptible Power Supply): (1) Battery backup during outage, (2) Power conditioning, (3) Bridge to generator. Generator: (1) Extended outage protection, (2) Automatic transfer switch (ATS), (3) Fuel supply planning. Power is critical dependency - all other redundancy useless without power."
  },
  {
    id: 11,
    question: "A storage array uses RAID 5 with three drives. One drive fails, but the array continues operating and can rebuild when the drive is replaced. What provides this capability?",
    options: [
      "Backup",
      "RAID (Redundant Array of Independent Disks) - storage redundancy with parity",
      "Replication",
      "Clustering"
    ],
    correct: 1,
    explanation: "RAID provides storage redundancy through various configurations of disk arrays. RAID levels: (1) RAID 0 - striping, no redundancy (don't use for critical), (2) RAID 1 - mirroring, 50% capacity, (3) RAID 5 - striping with parity, one drive failure tolerance, (4) RAID 6 - double parity, two drive failures, (5) RAID 10 - mirrored stripes, performance + redundancy. RAID 5 operation: (1) Data and parity distributed, (2) One drive fails = degraded mode, (3) Replace drive = rebuild from parity, (4) Second failure before rebuild = data loss. RAID is NOT backup: (1) Protects against drive failure, (2) Doesn't protect against deletion, corruption, ransomware, (3) Needs backup for complete protection. Hot spare: pre-installed drive that automatically rebuilds on failure."
  },
  {
    id: 12,
    question: "MTBF for a component is rated at 100,000 hours. What does this metric indicate?",
    options: [
      "Time to repair",
      "MTBF (Mean Time Between Failures) - average time before failure occurs",
      "Recovery time",
      "Backup frequency"
    ],
    correct: 1,
    explanation: "MTBF (Mean Time Between Failures) is the average time a component operates before failing - reliability metric. MTBF meaning: (1) Statistical average, not guarantee, (2) Higher MTBF = more reliable, (3) Used for planning and comparison. Related metrics: (1) MTTF (Mean Time To Failure) - non-repairable items, (2) MTTR (Mean Time To Repair) - how long to fix, (3) Availability = MTBF / (MTBF + MTTR). Example: MTBF 100,000 hours = average component failure every 11+ years (but could fail anytime). Using MTBF: (1) Compare component reliability, (2) Plan maintenance/replacement, (3) Calculate expected failures at scale, (4) Justify redundancy. At scale: 1000 components with 100,000 hr MTBF = expect ~1 failure per month."
  },
  {
    id: 13,
    question: "After a server failure, the average time to diagnose and restore service is 2 hours. What metric is this?",
    options: [
      "MTBF",
      "MTTR (Mean Time To Repair) - average time to restore service after failure",
      "RTO",
      "RPO"
    ],
    correct: 1,
    explanation: "MTTR (Mean Time To Repair/Restore) is the average time to restore service after a failure. MTTR includes: (1) Detection time, (2) Diagnosis time, (3) Repair time, (4) Testing/verification. Reducing MTTR: (1) Monitoring and alerting, (2) Runbooks and procedures, (3) Spare parts availability, (4) Skilled staff, (5) Automation. MTTR vs RTO: (1) MTTR = average actual recovery, (2) RTO = maximum acceptable (target), (3) MTTR should be less than RTO. Availability calculation: MTBF / (MTBF + MTTR). To improve availability: increase MTBF (more reliable) OR decrease MTTR (faster recovery). Hot-swap components reduce MTTR. Good documentation and training reduce MTTR."
  },
  {
    id: 14,
    question: "A disaster recovery plan is tested by walking through the procedures verbally with the team, discussing what would happen at each step. What type of test is this?",
    options: [
      "Full failover test",
      "Tabletop exercise - discussion-based walkthrough of DR procedures",
      "Parallel test",
      "Production test"
    ],
    correct: 1,
    explanation: "TABLETOP EXERCISE is a discussion-based DR test walking through scenarios without actual system changes. DR test types (increasing complexity): (1) CHECKLIST - verify documentation completeness, (2) TABLETOP - discuss scenarios, identify gaps, (3) WALKTHROUGH - detailed step-by-step review, (4) SIMULATION - practice responses without affecting production, (5) PARALLEL - run recovery alongside production, (6) FULL INTERRUPTION - actual failover (highest risk). Tabletop benefits: (1) Low cost, (2) No production risk, (3) Team education, (4) Identifies procedure gaps, (5) Tests communication. Tabletop limitations: (1) Doesn't prove technical recovery, (2) May miss practical issues, (3) Not actual test of RTO. Best practice: regular tabletops plus periodic technical tests. Start with tabletop, build to full test over time."
  },
  {
    id: 15,
    question: "A ransomware attack encrypts production data. The organization's most recent backup was also encrypted because it was connected to the network. What backup feature should they have implemented?",
    options: [
      "More frequent backups",
      "Air-gapped or immutable backups - protected from ransomware encryption",
      "Larger storage",
      "Faster network"
    ],
    correct: 1,
    explanation: "AIR-GAPPED or IMMUTABLE backups protect against ransomware encrypting backup data. Ransomware backup challenge: (1) Ransomware targets accessible backups, (2) Network-connected backups vulnerable, (3) Encryption of backups = no recovery option. Protection options: (1) AIR-GAP - physically disconnect backups (tape offsite), (2) IMMUTABLE - write-once storage (can't be modified/deleted), (3) OFFLINE - disconnected except during backup windows, (4) Different credentials - backup systems use separate credentials. Immutable storage: (1) Cloud providers offer immutable/WORM storage, (2) Object lock (S3), immutable blob (Azure), (3) Defined retention period. 3-2-1-1 rule: add one immutable or air-gapped copy to 3-2-1. Ransomware has made backup protection critical - test that backups are actually recoverable."
  }
];