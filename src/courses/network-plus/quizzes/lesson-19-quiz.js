// Quiz for Lesson 19: High Availability and Redundancy

export const lesson19Quiz = [
  {
    id: 1,
    question: "A company's network has two routers connecting to the ISP. Both routers are configured with HSRP (Hot Standby Router Protocol) using a virtual IP address of 192.168.1.1 as the default gateway. Router A is the active router and Router B is standby. Router A fails. What happens to client traffic?",
    options: [
      "All client traffic stops until Router A is repaired",
      "Router B automatically becomes active and assumes the virtual IP, maintaining connectivity with minimal disruption",
      "Clients must manually change their default gateway to Router B's IP",
      "Both routers become active and load balance traffic"
    ],
    correct: 1,
    explanation: "HSRP provides first-hop redundancy. Multiple routers share a virtual IP (VIP) that clients use as default gateway. One router is active (forwards traffic), others are standby. Routers exchange hello packets; if active fails, standby detects failure and becomes active, assuming the VIP and virtual MAC. Failover is typically <3 seconds. Clients maintain the same default gateway (VIP)—no reconfiguration needed. HSRP is Cisco proprietary; VRRP is the open standard equivalent."
  },
  {
    id: 2,
    question: "A data center requires 99.999% ('five nines') uptime, allowing only 5.26 minutes of downtime per year. What combination of redundancy is typically necessary to achieve this level of availability?",
    options: [
      "Single redundant power supply and one backup router",
      "N+1 redundancy with single points of failure eliminated",
      "Fully redundant infrastructure with no single points of failure: dual power, dual network paths, redundant cooling, automated failover, and geographic redundancy",
      "Regular backups performed daily"
    ],
    correct: 2,
    explanation: "Five nines requires eliminating all single points of failure (SPOFs): Redundant power (dual supplies, dual circuits, UPS, generators), redundant network paths (dual ISPs, multiple switches/routers), redundant servers (clustering, load balancing), redundant storage (RAID, SAN replication), redundant cooling (N+1 HVAC), automated monitoring/failover, and geographic redundancy (multi-site). Cost increases exponentially with each nine. Five nines typically requires active-active across multiple sites. 99.9% (three nines) is achievable with basic redundancy; 99.999% requires significant investment."
  },
  {
    id: 3,
    question: "A network engineer connects two switches using four 1 Gbps links and configures LACP (Link Aggregation Control Protocol). What are the primary benefits of this configuration?",
    options: [
      "All four links operate independently with separate IP addresses",
      "Increased bandwidth (4 Gbps aggregate) and link redundancy - if one link fails, traffic continues on remaining links",
      "Reduced latency by 75% compared to a single link",
      "Automatic load balancing of individual packets across all links"
    ],
    correct: 1,
    explanation: "Link aggregation (LACP/EtherChannel) bundles multiple physical links into one logical link. Benefits: 1) Increased bandwidth (4×1G = 4G aggregate), 2) Redundancy (link failure doesn't break connectivity), 3) STP sees bundle as single link (no blocking). Load balancing methods: source MAC, destination MAC, src+dst MAC, src+dst IP+port. Note: individual flows follow one link (load balancing is per-flow, not per-packet—packets in a flow must stay in order). LACP (802.3ad) negotiates bundles; static aggregation works but lacks dynamic failure detection."
  },
  {
    id: 4,
    question: "A company deploys a load balancer in front of three web servers. The load balancer is configured for active-passive mode. What does this configuration mean for traffic distribution?",
    options: [
      "All servers actively handle traffic with the load balancer distributing requests across all three",
      "One server actively handles all traffic while others remain on standby, taking over only if the active server fails",
      "Traffic alternates between servers on each request",
      "Passive servers are powered off to save energy"
    ],
    correct: 1,
    explanation: "Active-passive: one server handles all traffic (active), others are standby/passive (ready but not serving). If active fails, passive becomes active. Simple but wastes standby capacity. Active-active: all servers handle traffic simultaneously with load distribution. More efficient resource utilization. Use cases: active-passive for stateful applications requiring session consistency; active-active for stateless web applications. Note: 'active-passive load balancer' refers to backend servers, not the load balancer itself (which is a different HA consideration)."
  },
  {
    id: 5,
    question: "A network has two core switches connected to four distribution switches. Each distribution switch has two links: one to each core switch. What redundancy topology is implemented, and what happens if one core switch fails?",
    options: [
      "Star topology - complete network failure if one core switch fails",
      "Redundant topology with dual-homed distribution switches - traffic automatically routes through the remaining core switch with no disruption",
      "Bus topology requiring manual intervention during failures",
      "Ring topology with single point of failure"
    ],
    correct: 1,
    explanation: "Dual-homing (multi-homing) connects each device to multiple upstream devices, eliminating single points of failure. Each distribution switch has paths to both core switches. If one core fails, all distribution switches still have connectivity via the remaining core (50% capacity reduction but no outage). Requires: proper spanning tree configuration, routing protocol convergence, or active-active design (VSS/vPC/MLAG) for optimal path utilization. This is standard enterprise core/distribution design."
  },
  {
    id: 6,
    question: "A data center uses N+1 redundancy for its cooling systems. They have three HVAC units, each capable of handling 100% of the cooling load. What does N+1 mean in this context?",
    options: [
      "N+1 means you need one unit plus one backup - so only 2 units total are needed",
      "N (number of units needed for full capacity) + 1 extra unit for redundancy - any single unit can fail without impacting operations",
      "N+1 means all units run at 50% capacity for redundancy",
      "Each unit handles 33% of the load for balanced distribution"
    ],
    correct: 1,
    explanation: "N+1 redundancy: N = minimum components needed for 100% capacity, +1 = one extra for failure tolerance. Example: if 2 HVAC units provide full cooling (N=2), N+1 = 3 total units. Any single unit can fail without impacting operations. Variations: N+2 (tolerates 2 failures), 2N (complete duplicate infrastructure), 2N+1 (duplicate plus one). Applies to: power supplies, cooling, network links, servers. Trade-off: cost vs availability. N+1 is common compromise—provides redundancy without full duplication expense (2N)."
  },
  {
    id: 7,
    question: "A server is configured with NIC teaming using two network adapters. The teaming is set to active-active mode with load balancing. One NIC fails. What happens to network connectivity?",
    options: [
      "Server loses all network connectivity until the failed NIC is replaced",
      "Traffic automatically fails over to the remaining NIC with 50% bandwidth reduction but continued connectivity",
      "Server must be rebooted to activate the standby NIC",
      "Both NICs stop working because one failed"
    ],
    correct: 1,
    explanation: "NIC teaming (bonding in Linux) aggregates multiple NICs for bandwidth and redundancy. Active-active: both NICs carry traffic (load balanced). If one fails, remaining NIC handles all traffic—bandwidth reduced but connectivity maintained. Teaming modes: 1) Active-active (load balance), 2) Active-passive (one standby), 3) LACP (switch-aware aggregation). Benefits: redundancy, increased bandwidth, automatic failover. Requirements: proper switch configuration, compatible teaming mode. Important: application performance may degrade with 50% bandwidth, but services remain available."
  },
  {
    id: 8,
    question: "An organization implements VRRP (Virtual Router Redundancy Protocol) with three routers: Router A (priority 200), Router B (priority 100), and Router C (priority 150). All routers are functioning normally. Which router is currently the master?",
    options: [
      "Router B because it has the lowest priority",
      "Router A because it has the highest priority (200)",
      "Router C because it has the middle priority value",
      "All three routers share master duties equally"
    ],
    correct: 1,
    explanation: "VRRP master election: highest priority wins (default priority = 100). Router A (200) is master. If Router A fails, Router C (150) becomes master. If C fails, Router B (100) becomes master. Priority can be adjusted for preferred routing paths. VRRP vs HSRP: VRRP is open standard (RFC 5798), HSRP is Cisco proprietary. VRRP uses multicast 224.0.0.18, HSRP uses 224.0.0.2. Both provide first-hop redundancy. Preemption (optional): if higher-priority router returns, does it reclaim master role?"
  },
  {
    id: 9,
    question: "A company calculates that their critical database server has an MTBF (Mean Time Between Failures) of 50,000 hours and an MTTR (Mean Time To Repair) of 4 hours. What do these metrics indicate about system reliability?",
    options: [
      "The system fails every 50,000 hours and takes 4 hours to fix each time on average",
      "MTBF indicates average operational time between failures (long is good); MTTR indicates average repair time (short is good)",
      "MTTR should always be higher than MTBF",
      "These metrics are unrelated to availability planning"
    ],
    correct: 1,
    explanation: "MTBF (Mean Time Between Failures) = average time system operates before failing. 50,000 hours = ~5.7 years average uptime. Higher MTBF = more reliable. MTTR (Mean Time To Repair) = average time to restore service after failure. 4 hours = repair time. Lower MTTR = faster recovery. Availability = MTBF / (MTBF + MTTR). Example: 50,000 / (50,000 + 4) = 99.992% availability. Improve availability by: increasing MTBF (better hardware, redundancy) or decreasing MTTR (spares, automation, monitoring, documentation)."
  },
  {
    id: 10,
    question: "A network design includes two data centers 50 miles apart with real-time data replication between them. Both sites can handle 100% of production load. If the primary site fails, the secondary immediately takes over. What type of redundancy is this?",
    options: [
      "Cold site - requires equipment installation before operation",
      "Warm site - has equipment but requires data restoration",
      "Hot site (active-active) - both sites operational simultaneously with real-time synchronization",
      "Cloud-only disaster recovery"
    ],
    correct: 2,
    explanation: "Hot site characteristics: fully equipped, current/real-time data, ready to assume operations immediately (minutes/hours). Active-active hot site: both sites handle production load simultaneously (expensive but optimal RTO). Active-passive hot site: secondary site ready but not serving production until failover. Geographic redundancy (geographically dispersed sites) protects against regional disasters (earthquakes, hurricanes, power grid failures). 50 miles is good distance—close enough for low-latency replication, far enough to avoid single disaster affecting both sites."
  },
  {
    id: 11,
    question: "A load balancer distributes traffic across five web servers using 'least connections' algorithm. Server A has 45 connections, Server B has 52, Server C has 38, Server D is down (health check failed), and Server E has 41. A new connection arrives. Which server receives it?",
    options: [
      "Server A because it's listed first",
      "Server C because it has the fewest active connections (38)",
      "Server D to bring it back online",
      "Connections are distributed evenly regardless of current load"
    ],
    correct: 1,
    explanation: "Load balancer algorithms: 1) Round-robin (equal distribution), 2) Least connections (server with fewest active connections—optimal for varying connection duration), 3) Least response time (fastest responding server), 4) IP hash (same client always to same server—session persistence), 5) Weighted (based on server capacity). Health checks detect server failures—failed servers removed from pool automatically. Server C (38 connections, fewest) gets the new connection. Server D is removed from rotation until health checks pass. Least connections works well when session lengths vary significantly."
  },
  {
    id: 12,
    question: "A company implements server clustering with three servers. Applications running on the cluster can fail over to any of the other servers automatically. What is the primary purpose of clustering?",
    options: [
      "To reduce power consumption by sharing workload",
      "To provide high availability through automatic failover and continued service if one server fails",
      "To simplify management by combining servers into one",
      "To increase security through isolation"
    ],
    correct: 1,
    explanation: "Clustering provides high availability by treating multiple servers as a single system. If one node fails, another automatically assumes its workload. Types: 1) Active-passive (one active, others standby), 2) Active-active (all nodes serve traffic), 3) N+1 (N needed for capacity, +1 for redundancy). Requirements: shared storage (SAN), cluster management software (Windows Failover Cluster, Pacemaker), heartbeat network (monitors node health), fencing (prevents split-brain). Use cases: databases, file servers, critical applications. Benefits: reduced downtime, maintenance without outages (migrate VMs to other nodes)."
  },
  {
    id: 13,
    question: "A storage array uses RAID 5 with four 2TB drives. One drive fails. What happens to data availability and what is the usable capacity after reconstruction?",
    options: [
      "All data is lost and the array stops functioning",
      "Data remains available with degraded performance; after replacing failed drive and rebuild, usable capacity is 6TB (n-1 drives × capacity)",
      "Array continues normally with no performance impact",
      "System automatically upgrades to RAID 6"
    ],
    correct: 1,
    explanation: "RAID 5 (striping with parity): requires minimum 3 drives, distributes parity across all drives, tolerates one drive failure, usable capacity = (n-1) × drive size. Four 2TB drives = 6TB usable. When one drive fails: data accessible via parity reconstruction (degraded mode, slower), replace failed drive, rebuild redistributes parity (hours/days depending on size). During rebuild: vulnerable (if another drive fails, data lost). RAID 6 tolerates two failures (n-2 capacity). RAID 10 mirrors then stripes (50% capacity but better performance)."
  },
  {
    id: 14,
    question: "A company's network has dual ISP connections from different providers (ISP A and ISP B) for redundancy. Both connections terminate on the same router. What single point of failure remains in this design?",
    options: [
      "There are no single points of failure with dual ISPs",
      "The router itself - if it fails, both ISP connections are unusable",
      "The ISP connections have too much bandwidth",
      "The office building power supply"
    ],
    correct: 1,
    explanation: "Common SPOF mistakes: Dual ISPs → single router (router failure = total outage). Solution: dual routers, each connected to one ISP, with HSRP/VRRP. Dual power circuits → single UPS (UPS failure = outage). Dual switches → single uplink (uplink failure = outage). Finding SPOFs: trace every component in the path—any single component whose failure causes outage is a SPOF. True redundancy requires: no shared components, diverse paths (different physical paths for network links), different vendors when possible (avoids common software bugs)."
  },
  {
    id: 15,
    question: "An organization implements multipathing for their SAN (Storage Area Network) connections. Each server has two HBAs (Host Bus Adapters) connected to two separate SAN switches. What happens if one HBA or one SAN switch fails?",
    options: [
      "All storage access is lost until repairs are completed",
      "Storage access continues through alternate paths with automatic failover and no disruption to applications",
      "Servers must be rebooted to activate alternate paths",
      "Only 50% of storage volumes remain accessible"
    ],
    correct: 1,
    explanation: "Multipathing provides redundant paths from servers to storage. Configuration: dual HBAs in each server, dual SAN switches, dual storage controllers. Multipathing software (MPIO in Windows, DM-Multipath in Linux) detects path failures and automatically routes I/O through working paths. Benefits: high availability (no single point of failure), load balancing (active-active paths for bandwidth), no service interruption during component failure or maintenance. Without multipathing: single path failure = storage outage. Critical for production storage—all enterprise SANs should use multipathing."
  }
];

// Export for use in quiz component
export default lesson19Quiz;