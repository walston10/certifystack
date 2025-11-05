// Flashcards for Lesson 19: High Availability and Redundancy

export const lesson19Flashcards = [
  {
    id: 1,
    front: "What is high availability (HA)?",
    back: "HA ensures systems remain operational with minimal downtime through redundancy and failover. Goal: eliminate single points of failure (SPOFs). Measured in uptime percentage ('nines'). Achieved through: redundant hardware, automatic failover, load balancing, clustering. Business requirement drives HA investment. More nines = more cost."
  },
  {
    id: 2,
    front: "What do the 'nines' mean in uptime? 99%, 99.9%, 99.99%, 99.999%?",
    back: "99% (two nines): 3.65 days downtime/year. 99.9% (three nines): 8.76 hours/year. 99.99% (four nines): 52.6 minutes/year. 99.999% (five nines): 5.26 minutes/year. Each additional nine: 10x more availability, significantly more cost. Most enterprises target 99.9-99.99%. Telcos target 99.999%."
  },
  {
    id: 3,
    front: "What is a Single Point of Failure (SPOF)?",
    back: "SPOF is any component whose failure causes entire system/service to fail. Examples: single router, one power supply, one internet connection, one switch, one administrator with all knowledge. Identify SPOFs through: failure analysis, asking 'what if this fails?'. Eliminate with redundancy. Every SPOF is disaster waiting to happen."
  },
  {
    id: 4,
    front: "What is device redundancy?",
    back: "Device redundancy uses multiple identical devices so if one fails, others continue operating. Examples: dual routers, stacked switches, clustered firewalls, redundant power supplies, multiple APs. Methods: active-active (all devices working), active-passive (standby ready). Requires: failover mechanism, synchronized configs. Critical for eliminating SPOFs."
  },
  {
    id: 5,
    front: "What is link redundancy?",
    back: "Link redundancy provides multiple network paths between locations. If primary path fails, backup path takes over. Methods: dual ISP connections, multiple fiber paths, link aggregation (LACP), redundant switch connections. Prevents: single cable failure from causing outage. Use with: STP (prevent loops), routing protocols (automatic failover)."
  },
  {
    id: 6,
    front: "What is power redundancy?",
    back: "Power redundancy ensures continuous power through: redundant power supplies (dual in each device), multiple power circuits (different breakers), UPS (uninterruptible power supply), backup generators. Design: separate power feeds, different utility transformers ideally. Data center standard: A+B power (two independent power sources). Most common SPOF in data centers."
  },
  {
    id: 7,
    front: "What is site redundancy?",
    back: "Site redundancy maintains operations across multiple physical locations. Types: disaster recovery site (cold/warm/hot), active-active sites (both operational), geographically distributed. Protects against: natural disasters, power outages, facility failures. Requirements: data replication, DNS failover, global load balancing. Enterprise feature. Cloud makes this easier/cheaper."
  },
  {
    id: 8,
    front: "What is FHRP (First Hop Redundancy Protocol)?",
    back: "FHRP provides redundant default gateways for end devices. Multiple routers appear as single virtual gateway (VIP). If active router fails, standby takes over automatically. Why needed: hosts configured with one default gateway (can't use backup without FHRP). Types: HSRP, VRRP, GLBP. Transparent failover to end users."
  },
  {
    id: 9,
    front: "What is HSRP (Hot Standby Router Protocol)?",
    back: "HSRP is Cisco proprietary FHRP. Creates virtual router with virtual IP (VIP) and virtual MAC. One active router (forwards traffic), one standby (ready for failover), others listen. Uses: hello messages (3 sec), hold timer (10 sec). Priority: highest is active (default 100). Preemption: higher priority takes over. Version 2 improves on version 1."
  },
  {
    id: 10,
    front: "What is VRRP (Virtual Router Redundancy Protocol)?",
    back: "VRRP is open standard FHRP (IEEE). Similar to HSRP but vendor-neutral. One master router, others backup. Uses: multicast advertisements. Priority: 1-254 (255 reserved for IP owner). Faster hello timer than HSRP (default 1 sec). Preemption enabled by default. Industry standard. Use when: multi-vendor environment, standardization required."
  },
  {
    id: 11,
    front: "What is GLBP (Gateway Load Balancing Protocol)?",
    back: "GLBP is Cisco proprietary FHRP that also load balances. One AVG (Active Virtual Gateway) assigns different virtual MAC to each router. Traffic distributed across all routers (not just active/standby). Methods: round-robin, weighted, host-dependent. Pros: uses all bandwidth, no idle standby. Cons: Cisco only, more complex. Best utilization of redundant routers."
  },
  {
    id: 12,
    front: "Compare HSRP, VRRP, and GLBP",
    back: "HSRP: Cisco, active-standby, hello 3sec. VRRP: standard, master-backup, advert 1sec. GLBP: Cisco, load balancing across all routers. Choose: VRRP for multi-vendor, HSRP for Cisco legacy, GLBP for load balancing. All provide: VIP, automatic failover, transparent to hosts. All solve same problem different ways."
  },
  {
    id: 13,
    front: "What is virtual IP addressing in FHRP?",
    back: "Virtual IP (VIP) is shared IP address representing multiple physical routers. Hosts use VIP as default gateway. Doesn't belong to any physical interface. Active router responds to traffic sent to VIP. Example: Router1 (192.168.1.2), Router2 (192.168.1.3), VIP (192.168.1.1). Hosts configured with .1 gateway. Transparent failover."
  },
  {
    id: 14,
    front: "What is load balancing and why use it?",
    back: "Load balancing distributes traffic/workload across multiple servers/resources. Benefits: increased capacity, improved performance, redundancy/failover, scalability, maintenance without downtime. Types: Layer 4 (transport), Layer 7 (application). Methods: round-robin, least connections, source IP hash. Critical for: high-traffic websites, applications, services."
  },
  {
    id: 15,
    front: "What is active-active vs active-passive?",
    back: "Active-active: all resources actively processing traffic simultaneously (load sharing). Full utilization, no idle resources. Example: all servers handling requests. Active-passive: one resource active, others standby (idle until failover). Simpler, waste of resources. Example: one router forwarding, backup waiting. Active-active preferred when possible for efficiency."
  },
  {
    id: 16,
    front: "What load balancing algorithms exist?",
    back: "Round-robin: equal distribution in rotation (simple, fair). Least connections: send to server with fewest active sessions (dynamic). Source IP hash: same client always goes to same server (session persistence). Weighted: assign capacity/priority to servers (better hardware gets more). Least response time: send to fastest server. Choose based on application needs."
  },
  {
    id: 17,
    front: "What's the difference between Layer 4 and Layer 7 load balancing?",
    back: "Layer 4 (transport): balances based on IP and port, fast, no content inspection, works with any protocol. Layer 7 (application): balances based on content (URLs, cookies, headers), intelligent routing, SSL offloading, application-aware. Layer 4: faster, simpler. Layer 7: more features, more CPU. Modern load balancers do both."
  },
  {
    id: 18,
    front: "What is link aggregation?",
    back: "Link aggregation combines multiple physical links into one logical link. Benefits: increased bandwidth (sum of links), redundancy (link failure doesn't break connection), load balancing across links. Standard: IEEE 802.3ad (LACP). Cisco: EtherChannel. Example: 4x1Gbps = 4Gbps logical link. Both ends must support. Better than single fat pipe for redundancy."
  },
  {
    id: 19,
    front: "What is LACP (Link Aggregation Control Protocol)?",
    back: "LACP is IEEE 802.3ad standard for link aggregation. Dynamically negotiates and maintains bundled links. Monitors: link status, removes failed links, adds restored links. Modes: active (initiates LACP), passive (responds to LACP). Both ends must use LACP. Pros: vendor-neutral, automatic failover, load balancing. Standard method for link aggregation."
  },
  {
    id: 20,
    front: "What is EtherChannel?",
    back: "EtherChannel is Cisco's link aggregation technology. Bundles up to 8 links (1-8 Gbps). Protocols: PAgP (Cisco proprietary), LACP (standard). Modes: on (forced, no negotiation), desirable/auto (PAgP), active/passive (LACP). Appears as single interface to STP. Use LACP mode for standards-based deployment. Legacy term but still used."
  },
  {
    id: 21,
    front: "What is NIC teaming?",
    back: "NIC teaming bonds multiple network adapters in a server into one logical interface. Benefits: increased bandwidth, redundancy (NIC failure), load balancing. OS-level feature (Windows, Linux). Modes: active-active (load balance), active-passive (failover only). Switch-dependent or switch-independent. Different from link aggregation (which is switch-to-switch). Protects against NIC failures."
  },
  {
    id: 22,
    front: "What is multipathing?",
    back: "Multipathing provides multiple physical paths between server and storage (SAN). Software manages multiple paths, load balances, automatic failover if path fails. Benefits: redundancy, increased throughput, no SPOF. Used in: Fibre Channel, iSCSI SANs. Software: MPIO (Windows), DM-Multipath (Linux). Critical for high-availability storage. Protects against: HBA failure, switch failure, cable failure."
  },
  {
    id: 23,
    front: "What is clustering?",
    back: "Clustering groups multiple servers working together as single system. Types: high-availability (failover), load-balancing (distribute work), high-performance (parallel processing). Shared storage or replicated data. Benefits: no single point of failure, scalability, increased capacity. Examples: database clusters, web server clusters, virtualization clusters (VMware HA). Enterprise feature for critical apps."
  },
  {
    id: 24,
    front: "What is geographic redundancy?",
    back: "Geographic redundancy distributes resources across multiple locations (cities, regions, continents). Protects against: regional disasters, natural disasters, ISP outages, political issues. Requirements: data replication, DNS failover, global load balancing. Methods: active-active sites, active-passive DR. Cloud makes easier: multi-region deployments. Ultimate protection but complex/expensive."
  },
  {
    id: 25,
    front: "Quick scenario: Design HA for critical web application. What redundancy do you need?",
    back: "Need: 1) Multiple web servers + load balancer (Layer 7), 2) Redundant load balancers (VRRP), 3) Database replication (master-slave or cluster), 4) Link aggregation/redundant switches, 5) Dual ISP connections, 6) Redundant power (UPS/generators), 7) Offsite backup/DR site. Eliminate every SPOF. Test failover scenarios!"
  },
  {
    id: 26,
    front: "What is health checking in load balancing?",
    back: "Health checks monitor backend server availability and remove failed servers from rotation. Types: ICMP ping (basic), TCP connect (port open?), HTTP/HTTPS (response code), application-specific (query database). Frequency: every few seconds. Failed servers: automatically removed, restored when healthy. Prevents: sending traffic to dead servers. Critical feature of load balancers."
  },
  {
    id: 27,
    front: "What is session persistence (sticky sessions) in HA?",
    back: "Session persistence ensures client requests go to same backend server during session. Methods: source IP, cookie insertion, SSL session ID. Needed when: application stores session data locally (not shared). Problem: complicates load balancing and failover. Better solution: stateless apps with shared session storage (Redis, database). If must use: cookie-based preferred."
  },
  {
    id: 28,
    front: "What is split-brain scenario in HA and how to prevent it?",
    back: "Split-brain: two nodes both think they're active (loss of communication between them). Result: both writing to storage, IP conflicts, data corruption. Causes: network partition, failed heartbeat link. Prevention: 3+ nodes (quorum), witness/arbitrator, fencing (shut down uncertain node), shared storage locks. Use heartbeat AND storage checks. Serious HA problem."
  },
  {
    id: 29,
    front: "What is the cost vs availability trade-off?",
    back: "Higher availability = exponentially higher cost. Each additional 'nine': 10x more reliability, much more cost. 99.9%: reasonable cost. 99.99%: expensive (full redundancy). 99.999%: very expensive (geo-redundancy, no SPOFs). Business must decide: what's downtime cost vs HA investment? Not everything needs five nines. Tier by criticality."
  },
  {
    id: 30,
    front: "Speed drill: Match to purpose - HSRP, LACP, NIC teaming, clustering, split-brain",
    back: "HSRP: redundant default gateway. LACP: link aggregation. NIC teaming: redundant server NICs. Clustering: multiple servers as one. Split-brain: HA problem (both nodes active). Know redundancy technologies for exam!"
  }
];