// Flashcards for Lesson 19: High Availability and Redundancy

export const lesson19Flashcards = [
  {
    id: 1,
    front: "What is high availability (HA)?",
    back: "Systems designed to stay operational with minimal downtime through redundancy and automatic failover. Eliminates single points of failure."
  },
  {
    id: 2,
    front: "What do the 'nines' mean? 99%, 99.9%, 99.99%, 99.999%?",
    back: "99% = 3.65 days down/year. 99.9% = 8.76 hours/year. 99.99% = 52 minutes/year. 99.999% = 5 minutes/year. Each nine = 10x better but much more expensive."
  },
  {
    id: 3,
    front: "What is a Single Point of Failure (SPOF)?",
    back: "Any component whose failure causes the entire system to fail. Examples: single router, one power supply, one internet connection."
  },
  {
    id: 4,
    front: "What is device redundancy?",
    back: "Using multiple identical devices so if one fails, others continue. Can be active-active (all working) or active-passive (standby ready)."
  },
  {
    id: 5,
    front: "What is link redundancy?",
    back: "Multiple network paths between locations. If primary fails, backup takes over. Prevents single cable failure from causing outage."
  },
  {
    id: 6,
    front: "What is power redundancy?",
    back: "Dual power supplies, multiple circuits, UPS, and generators ensure continuous power. Most common data center SPOF."
  },
  {
    id: 7,
    front: "What is site redundancy?",
    back: "Multiple physical locations maintain operations. Protects against disasters, power outages, facility failures."
  },
  {
    id: 8,
    front: "What is FHRP (First Hop Redundancy Protocol)?",
    back: "Multiple routers act as one virtual gateway. If active fails, standby takes over automatically. Types: HSRP, VRRP, GLBP."
  },
  {
    id: 9,
    front: "What is HSRP?",
    back: "Cisco proprietary FHRP. One active router, one standby, others listen. Uses virtual IP and MAC address."
  },
  {
    id: 10,
    front: "What is VRRP?",
    back: "Open standard FHRP. One master, others backup. Vendor-neutral, faster hellos than HSRP."
  },
  {
    id: 11,
    front: "What is GLBP?",
    back: "Cisco FHRP that also load balances. Distributes traffic across all routers instead of active-standby."
  },
  {
    id: 12,
    front: "Compare HSRP, VRRP, and GLBP",
    back: "HSRP: Cisco, active-standby. VRRP: standard, faster. GLBP: Cisco, load balances. All provide virtual IP and automatic failover."
  },
  {
    id: 13,
    front: "What is virtual IP addressing in FHRP?",
    back: "Shared IP representing multiple routers. Hosts use it as default gateway. Active router responds to traffic."
  },
  {
    id: 14,
    front: "What is load balancing?",
    back: "Distributes traffic across multiple servers. Benefits: increased capacity, redundancy, better performance."
  },
  {
    id: 15,
    front: "Active-active vs active-passive?",
    back: "Active-active: all resources working (load sharing). Active-passive: one works, others standby (failover only)."
  },
  {
    id: 16,
    front: "Name 4 load balancing algorithms",
    back: "Round-robin (rotate), least connections (fewest sessions), source IP hash (same client → same server), weighted (by capacity)."
  },
  {
    id: 17,
    front: "Layer 4 vs Layer 7 load balancing?",
    back: "Layer 4: IP/port based, fast, any protocol. Layer 7: content based (URLs, cookies), slower but smarter."
  },
  {
    id: 18,
    front: "What is link aggregation?",
    back: "Combines multiple physical links into one logical link. Increases bandwidth and provides redundancy."
  },
  {
    id: 19,
    front: "What is LACP?",
    back: "IEEE 802.3ad standard for link aggregation. Dynamically negotiates bundled links and removes failed ones."
  },
  {
    id: 20,
    front: "What is EtherChannel?",
    back: "Cisco's link aggregation (up to 8 links). Uses PAgP (Cisco) or LACP (standard)."
  },
  {
    id: 21,
    front: "What is NIC teaming?",
    back: "Bonds multiple server network adapters into one logical interface. Provides bandwidth and redundancy."
  },
  {
    id: 22,
    front: "What is multipathing?",
    back: "Multiple physical paths between server and SAN storage. Load balances and fails over automatically."
  },
  {
    id: 23,
    front: "What is clustering?",
    back: "Multiple servers working as one system. Provides failover, load balancing, or parallel processing."
  },
  {
    id: 24,
    front: "What is geographic redundancy?",
    back: "Resources distributed across multiple locations. Protects against regional disasters but complex and expensive."
  },
  {
    id: 25,
    front: "Design HA for critical web app - what redundancy needed?",
    back: "Multiple web servers + load balancers, database replication, redundant switches, dual ISPs, redundant power, offsite DR."
  },
  {
    id: 26,
    front: "What are health checks in load balancing?",
    back: "Monitor backend servers and remove failed ones. Types: ping, TCP connect, HTTP response."
  },
  {
    id: 27,
    front: "What is session persistence (sticky sessions)?",
    back: "Client requests always go to same backend server. Needed for apps with local session storage."
  },
  {
    id: 28,
    front: "What is split-brain scenario?",
    back: "Both HA nodes think they're active due to lost communication. Causes data corruption. Prevent with quorum/witness."
  },
  {
    id: 29,
    front: "Cost vs availability trade-off?",
    back: "Each additional nine = 10x reliability but exponentially higher cost. Not everything needs five nines."
  },
  {
    id: 30,
    front: "Match: HSRP, LACP, NIC teaming, clustering, split-brain",
    back: "HSRP: gateway redundancy. LACP: link aggregation. NIC teaming: server NIC redundancy. Clustering: multiple servers as one. Split-brain: HA failure mode."
  }
];