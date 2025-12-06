// Lesson 21: Resilience and Recovery
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson21Flashcards = [
  {
    id: 1,
    front: "What is High Availability (HA)?",
    back: "Systems designed to operate continuously with minimal downtime. Measured in 'nines' of uptime. Achieved through redundancy, failover, and fault tolerance."
  },
  {
    id: 2,
    front: "What does 99.9% uptime (three nines) allow?",
    back: "About 8.76 hours of downtime per year. Common SLA target. May not be sufficient for critical systems."
  },
  {
    id: 3,
    front: "What does 99.99% uptime (four nines) allow?",
    back: "About 52.6 minutes of downtime per year. High availability target. Requires significant redundancy investment."
  },
  {
    id: 4,
    front: "What does 99.999% uptime (five nines) allow?",
    back: "About 5.26 minutes of downtime per year. Extreme availability. Very expensive to achieve. Critical infrastructure standard."
  },
  {
    id: 5,
    front: "What is a Single Point of Failure (SPOF)?",
    back: "Component whose failure causes entire system failure. Must be eliminated for high availability. Identified through risk assessment. Add redundancy to eliminate."
  },
  {
    id: 6,
    front: "What is Redundancy?",
    back: "Duplicate components or systems that take over if primary fails. Eliminates single points of failure. Key to high availability. Costs more but increases uptime."
  },
  {
    id: 7,
    front: "What is Server Redundancy/Clustering?",
    back: "Multiple servers working together. If one fails, others continue operating. Can be active-active or active-passive. Provides both availability and scalability."
  },
  {
    id: 8,
    front: "What is Network Redundancy?",
    back: "Multiple network paths between points. If one link fails, traffic routes through another. Includes redundant switches, routers, ISP connections."
  },
  {
    id: 9,
    front: "What is Power Redundancy?",
    back: "Backup power systems. UPS for short outages, generators for extended. Redundant power supplies in servers. Multiple utility feeds for data centers."
  },
  {
    id: 10,
    front: "What is Geographic Redundancy?",
    back: "Duplicate systems in different locations. Protects against site-level disasters. Data replicated between sites. Enables disaster recovery."
  },
  {
    id: 11,
    front: "What is a UPS (Uninterruptible Power Supply)?",
    back: "Battery backup providing power during outages. Bridges gap until generator starts or clean shutdown. Protects against power spikes and sags."
  },
  {
    id: 12,
    front: "What is Load Balancing?",
    back: "Distributing traffic across multiple servers. Improves performance and availability. If one server fails, others handle traffic. Can be active-active."
  },
  {
    id: 13,
    front: "What is Active-Active configuration?",
    back: "All systems actively handling traffic simultaneously. Load shared across systems. Maximum resource utilization. If one fails, others absorb load."
  },
  {
    id: 14,
    front: "What is Active-Passive configuration?",
    back: "Primary system handles traffic, standby waits idle. Standby activates only when primary fails. Resources underutilized but simpler. Also called hot standby."
  },
  {
    id: 15,
    front: "Active-Active vs Active-Passive?",
    back: "Active-Active: all systems working, better utilization, more complex. Active-Passive: standby idle, simpler, wastes resources. Choose based on needs and complexity tolerance."
  },
  {
    id: 16,
    front: "What is a Full Backup?",
    back: "Complete copy of all data. Longest backup time, fastest restore. Foundation for other backup types. Typically done weekly. Clears archive bit."
  },
  {
    id: 17,
    front: "What is an Incremental Backup?",
    back: "Backs up only data changed since last backup (any type). Fastest backup, slowest restore. Requires full + all incrementals to restore. Clears archive bit."
  },
  {
    id: 18,
    front: "What is a Differential Backup?",
    back: "Backs up data changed since last full backup. Faster backup than full, faster restore than incremental. Requires only full + latest differential. Doesn't clear archive bit."
  },
  {
    id: 19,
    front: "Incremental vs Differential backup?",
    back: "Incremental: since last any backup, fastest backup, slowest restore. Differential: since last full, larger backups over time, faster restore than incremental."
  },
  {
    id: 20,
    front: "What is a Snapshot?",
    back: "Point-in-time copy of system state. Near-instant creation. Used in VMs and storage systems. Good for quick recovery and testing. Not replacement for traditional backup."
  },
  {
    id: 21,
    front: "What is the 3-2-1 Backup Rule?",
    back: "3 copies of data, on 2 different media types, with 1 copy offsite. Best practice for backup strategy. Protects against multiple failure scenarios."
  },
  {
    id: 22,
    front: "What is RTO (Recovery Time Objective)?",
    back: "Maximum acceptable time to restore system after disaster. How long can you be down? Drives recovery strategy and investment. Business defines acceptable RTO."
  },
  {
    id: 23,
    front: "What is RPO (Recovery Point Objective)?",
    back: "Maximum acceptable data loss measured in time. How much data can you lose? Determines backup frequency. RPO of 1 hour = backups at least hourly."
  },
  {
    id: 24,
    front: "RTO vs RPO?",
    back: "RTO: how long to recover (downtime tolerance). RPO: how much data loss acceptable (backup frequency). Both drive disaster recovery planning and costs."
  },
  {
    id: 25,
    front: "What is MTTR (Mean Time to Repair)?",
    back: "Average time to repair failed component and restore service. Measures repair efficiency. Lower MTTR = faster recovery. Factor in RTO calculations."
  },
  {
    id: 26,
    front: "What is MTBF (Mean Time Between Failures)?",
    back: "Average time between system failures. Measures reliability. Higher MTBF = more reliable. Used to predict failure rates and plan maintenance."
  },
  {
    id: 27,
    front: "What is a Hot Site?",
    back: "Fully equipped backup facility ready for immediate use. Duplicate hardware, data, connectivity. Most expensive. Shortest recovery time (hours)."
  },
  {
    id: 28,
    front: "What is a Warm Site?",
    back: "Partially equipped backup facility. Has some hardware and connectivity. Requires data restoration and setup. Moderate cost. Recovery in days."
  },
  {
    id: 29,
    front: "What is a Cold Site?",
    back: "Empty facility with power and cooling only. All equipment must be procured and installed. Cheapest option. Longest recovery time (weeks)."
  },
  {
    id: 30,
    front: "Hot vs Warm vs Cold Site?",
    back: "Hot: ready now, most expensive, hours to recover. Warm: partially ready, moderate cost, days to recover. Cold: empty shell, cheapest, weeks to recover."
  }
];