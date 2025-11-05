// Flashcards for Lesson 12: Routing Fundamentals and Protocols

export const lesson12Flashcards = [
  {
    id: 1,
    front: "What is routing and how does it differ from switching?",
    back: "Routing forwards packets between different networks (Layer 3) using IP addresses. Switching forwards frames within the same network (Layer 2) using MAC addresses. Routers connect subnets/VLANs, switches connect devices within a subnet."
  },
  {
    id: 2,
    front: "What is a routing table?",
    back: "A routing table is a database stored in a router's memory containing all known routes to destination networks. Each entry includes: destination network, subnet mask, next-hop IP or exit interface, metric (cost), and routing source (how route was learned)."
  },
  {
    id: 3,
    front: "What is a default gateway?",
    back: "The default gateway is the router IP address that devices use to reach networks outside their local subnet. It's the 'exit door' for traffic destined to other networks. Typically the first or last usable IP in a subnet (e.g., 192.168.1.1 for 192.168.1.0/24)."
  },
  {
    id: 4,
    front: "What's the difference between static and dynamic routing?",
    back: "Static routing: manually configured routes that never change unless administrator modifies them. Pros: secure, no overhead. Cons: doesn't adapt to failures. Dynamic routing: protocols automatically learn and share routes. Pros: adapts to changes. Cons: uses bandwidth/CPU, more complex."
  },
  {
    id: 5,
    front: "What is administrative distance (AD)?",
    back: "AD is a trustworthiness rating (0-255) for routing sources. Lower is better. If multiple protocols offer a route to the same destination, router chooses lowest AD. Common values: Connected 0, Static 1, EIGRP 90, OSPF 110, RIP 120, Unknown 255."
  },
  {
    id: 6,
    front: "What routing metrics are commonly used?",
    back: "Hop count (RIP - number of routers to destination), Bandwidth (OSPF - based on link speed), Delay (EIGRP - time to reach destination), Cost (calculated value based on bandwidth or other factors), Load (link utilization), Reliability (error rates)."
  },
  {
    id: 7,
    front: "What are the three types of routing protocols?",
    back: "1) Distance vector: shares entire routing table with neighbors, uses hop count (RIP). 2) Link state: builds complete network map, calculates best path (OSPF). 3) Hybrid/Advanced distance vector: combines both approaches (EIGRP). Each has different convergence speeds and overhead."
  },
  {
    id: 8,
    front: "What's the difference between IGP and EGP?",
    back: "IGP (Interior Gateway Protocol): routes within a single organization/autonomous system (AS). Examples: RIP, OSPF, EIGRP. Used inside your network. EGP (Exterior Gateway Protocol): routes between different organizations/ASs. Example: BGP. Used between ISPs on the internet."
  },
  {
    id: 9,
    front: "What is RIP (Routing Information Protocol)?",
    back: "RIP is a distance vector protocol using hop count as metric (max 15 hops, 16 = unreachable). Updates every 30 seconds. RIPv1: classful, no auth. RIPv2: classless, supports VLSM, authentication. Pros: simple. Cons: slow convergence, inefficient, limited scalability. Rarely used today."
  },
  {
    id: 10,
    front: "Why is RIP limited to 15 hops?",
    back: "The 15-hop limit prevents routing loops (counting to infinity problem). If a route reaches 16 hops, it's considered unreachable and removed. This limitation makes RIP unsuitable for large networks but prevents infinite loops in distance vector routing."
  },
  {
    id: 11,
    front: "What is OSPF (Open Shortest Path First)?",
    back: "OSPF is a link state protocol using cost (based on bandwidth) as metric. Builds complete network topology using LSAs (Link State Advertisements). Fast convergence, scalable, supports VLSM, uses multicast. Industry standard for enterprise networks. Uses Dijkstra's SPF algorithm."
  },
  {
    id: 12,
    front: "What are OSPF areas and why use them?",
    back: "OSPF divides networks into areas to improve scalability. Area 0 (backbone) is mandatory - all other areas must connect to it. Benefits: reduces routing table size, limits LSA flooding, faster convergence. Each router only needs detailed info about its own area."
  },
  {
    id: 13,
    front: "What is the OSPF cost metric and how is it calculated?",
    back: "OSPF cost = Reference bandwidth / Interface bandwidth. Default reference is 100 Mbps. Examples: 10 Mbps = cost 10, 100 Mbps = cost 1, 1 Gbps = cost 1 (should increase reference to 1000 for modern networks). Lower cost = better path."
  },
  {
    id: 14,
    front: "What are DR and BDR in OSPF?",
    back: "DR (Designated Router) and BDR (Backup DR) reduce OSPF overhead on multi-access networks (Ethernet). Instead of all routers exchanging LSAs with each other (n² adjacencies), they only exchange with DR/BDR. Election based on: 1) highest priority (default 1), 2) highest Router ID."
  },
  {
    id: 15,
    front: "What is EIGRP (Enhanced Interior Gateway Routing Protocol)?",
    back: "EIGRP is Cisco's advanced distance vector (hybrid) protocol. Uses composite metric (bandwidth, delay, load, reliability). Fast convergence with DUAL algorithm, supports unequal cost load balancing. Originally proprietary, now open standard. Less overhead than OSPF, easier to configure."
  },
  {
    id: 16,
    front: "What makes EIGRP 'enhanced' compared to regular distance vector protocols?",
    back: "EIGRP maintains backup routes (feasible successors) for instant failover, sends only incremental updates (not entire table), uses reliable multicast, calculates loop-free paths with DUAL algorithm, supports VLSM, converges faster than RIP, and scales better. Best of both distance vector and link state."
  },
  {
    id: 17,
    front: "What is BGP (Border Gateway Protocol)?",
    back: "BGP is the only EGP protocol, routing traffic between autonomous systems (ISPs) on the internet. Path vector protocol using AS path as metric. Extremely scalable (handles 800,000+ routes), policy-based routing, very stable. BGP routers called 'edge routers' or 'border routers'."
  },
  {
    id: 18,
    front: "What is an Autonomous System (AS) in BGP?",
    back: "An AS is a collection of networks under one administrative control with a unique AS number (ASN). Examples: your ISP, large enterprises, cloud providers. ASNs are 16-bit (1-65535) or 32-bit values. BGP routes between ASs using AS path to prevent loops."
  },
  {
    id: 19,
    front: "What is route summarization/aggregation?",
    back: "Route summarization combines multiple contiguous networks into one summary route. Benefits: smaller routing tables, less memory/CPU, faster convergence, reduced update traffic. Example: 192.168.0.0/24, .1.0/24, .2.0/24, .3.0/24 summarize to 192.168.0.0/22. Requires CIDR/VLSM support."
  },
  {
    id: 20,
    front: "How does a router decide which route to use when multiple routes exist to the same destination?",
    back: "Three-step process: 1) Longest prefix match (most specific route wins - /28 beats /24). 2) If prefix lengths equal, lowest administrative distance wins (EIGRP 90 beats OSPF 110). 3) If AD equal, lowest metric wins (cost 10 beats cost 20)."
  },
  {
    id: 21,
    front: "What causes a routing loop?",
    back: "Routing loops occur when routers have inconsistent routing info and packets circle endlessly. Causes: slow convergence, incorrect static routes, lack of loop prevention (split horizon disabled). Symptoms: high CPU, network slowdown, increasing TTL decrements. Prevention: split horizon, route poisoning, hold-down timers."
  },
  {
    id: 22,
    front: "What is split horizon and how does it prevent loops?",
    back: "Split horizon prevents a router from advertising a route back out the interface it learned it from. If Router A learns about network X from Router B, Router A won't advertise X back to Router B. This prevents simple two-node routing loops in distance vector protocols."
  },
  {
    id: 23,
    front: "Quick scenario: You have routes to 10.0.0.0/8 via OSPF and 10.0.5.0/24 via static route. Which is used for 10.0.5.50?",
    back: "10.0.5.0/24 static route. Longest prefix match wins! /24 is more specific than /8. Even though OSPF has lower AD (110) than static (1) - wait, static is actually LOWER (1). But prefix match is checked FIRST, so /24 wins regardless."
  },
  {
    id: 24,
    front: "What is convergence in routing?",
    back: "Convergence is when all routers in the network have consistent, accurate routing tables after a topology change. Fast convergence = less downtime. Speeds: RIP (slow, 30-90 sec), OSPF (fast, <1 sec), EIGRP (fastest, <1 sec with feasible successors), BGP (slowest, can take minutes)."
  },
  {
    id: 25,
    front: "What is a floating static route?",
    back: "A floating static route is a backup static route with higher AD than the primary route. It only becomes active if the primary route fails. Example: Primary via OSPF (AD 110), floating static with AD 120. Used for redundancy without interfering with dynamic routing."
  },
  {
    id: 26,
    front: "What's the difference between directly connected and static routes?",
    back: "Directly connected (AD 0): networks physically connected to router interfaces, automatically added when interface comes up. Static (AD 1): manually configured by admin, remains until removed. Both are preferred over dynamic routes due to lower AD."
  },
  {
    id: 27,
    front: "Exam scenario: OSPF router won't form adjacency with neighbor. What could be wrong?",
    back: "Check: 1) Interfaces in same subnet/mask?, 2) Hello/Dead timer mismatch?, 3) Area ID mismatch?, 4) Authentication mismatch?, 5) Network type mismatch?, 6) MTU mismatch?, 7) Different OSPF router IDs?, 8) ACL blocking multicast 224.0.0.5/6?. Use 'show ip ospf neighbor'."
  },
  {
    id: 28,
    front: "What is asymmetric routing and why does it matter?",
    back: "Asymmetric routing occurs when forward and return paths differ. Example: traffic goes out Router A but returns via Router B. Issues: breaks stateful firewall inspection, complicates troubleshooting, can cause packet drops. Common in multi-homed networks or with BGP."
  },
  {
    id: 29,
    front: "Why might RIP be used despite being outdated?",
    back: "RIP is extremely simple to configure and uses minimal resources. Valid use cases: very small networks (<15 hops), legacy device compatibility, lab/testing environments, devices that don't support modern protocols. But modern networks should use OSPF or EIGRP instead."
  },
  {
    id: 30,
    front: "Speed drill: Match protocols to characteristics - RIP, OSPF, EIGRP, BGP",
    back: "RIP: hop count, 15 max, slow, distance vector. OSPF: cost/bandwidth, areas, LSA, link state, fast. EIGRP: composite metric, DUAL, Cisco, hybrid. BGP: AS path, internet routing, path vector, policy-based. Know these cold for the exam!"
  }
];