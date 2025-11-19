// Flashcards for Lesson 12: Routing Fundamentals and Protocols

export const lesson12Flashcards = [
  {
    id: 1,
    front: "Routing vs switching?",
    back: "Routing: Layer 3, between networks, uses IP addresses. Switching: Layer 2, within network, uses MAC addresses."
  },
  {
    id: 2,
    front: "What is a routing table?",
    back: "Database of known routes. Each entry: destination network, mask, next-hop, metric, routing source."
  },
  {
    id: 3,
    front: "What is a default gateway?",
    back: "Router IP address devices use to reach other networks. The 'exit door' for non-local traffic."
  },
  {
    id: 4,
    front: "Static vs dynamic routing?",
    back: "Static: manually configured, never changes, secure, no overhead. Dynamic: automatically learns routes, adapts to changes, uses bandwidth/CPU."
  },
  {
    id: 5,
    front: "What is administrative distance (AD)?",
    back: "Trustworthiness rating (0-255, lower = better). Connected 0, Static 1, EIGRP 90, OSPF 110, RIP 120."
  },
  {
    id: 6,
    front: "Common routing metrics?",
    back: "Hop count (RIP), bandwidth (OSPF), delay (EIGRP), cost (calculated), load (utilization), reliability (error rates)."
  },
  {
    id: 7,
    front: "Three routing protocol types?",
    back: "1) Distance vector: shares table, hop count (RIP). 2) Link state: builds map, calculates path (OSPF). 3) Hybrid: combines both (EIGRP)."
  },
  {
    id: 8,
    front: "IGP vs EGP?",
    back: "IGP: routes within one organization (RIP, OSPF, EIGRP). EGP: routes between organizations (BGP on internet)."
  },
  {
    id: 9,
    front: "What is RIP?",
    back: "Distance vector protocol, hop count metric (max 15). Updates every 30 sec. Simple but slow convergence. Rarely used today."
  },
  {
    id: 10,
    front: "Why 15-hop RIP limit?",
    back: "Prevents routing loops (counting to infinity). 16 hops = unreachable. Makes RIP unsuitable for large networks."
  },
  {
    id: 11,
    front: "What is OSPF?",
    back: "Link state protocol using cost (bandwidth). Builds complete topology, fast convergence, scalable. Industry standard for enterprise."
  },
  {
    id: 12,
    front: "What are OSPF areas?",
    back: "Divides network for scalability. Area 0 (backbone) mandatory. Reduces routing table size, limits LSA flooding, faster convergence."
  },
  {
    id: 13,
    front: "OSPF cost calculation?",
    back: "Cost = Reference bandwidth / Interface bandwidth. Default reference 100 Mbps. Lower cost = better path."
  },
  {
    id: 14,
    front: "What are DR and BDR?",
    back: "Designated Router and Backup reduce OSPF overhead on Ethernet. Routers exchange LSAs with DR/BDR, not each other. Elected by priority/Router ID."
  },
  {
    id: 15,
    front: "What is EIGRP?",
    back: "Cisco's advanced distance vector (hybrid). Composite metric (bandwidth, delay). Fast convergence, unequal cost load balancing."
  },
  {
    id: 16,
    front: "What makes EIGRP 'enhanced'?",
    back: "Maintains backup routes, sends only incremental updates, reliable multicast, DUAL algorithm, fast convergence. Best of distance vector and link state."
  },
  {
    id: 17,
    front: "What is BGP?",
    back: "Only EGP protocol, routes between ISPs on internet. Path vector using AS path. Extremely scalable (800k+ routes), policy-based."
  },
  {
    id: 18,
    front: "What is an Autonomous System (AS)?",
    back: "Networks under one admin control with unique AS number. Examples: ISPs, large enterprises. BGP routes between ASs."
  },
  {
    id: 19,
    front: "What is route summarization?",
    back: "Combines multiple networks into one summary route. Smaller routing tables, less memory/CPU, faster convergence."
  },
  {
    id: 20,
    front: "How does router choose between multiple routes?",
    back: "1) Longest prefix match (most specific). 2) Lowest AD if prefix equal. 3) Lowest metric if AD equal."
  },
  {
    id: 21,
    front: "What causes routing loops?",
    back: "Inconsistent routing info, packets circle endlessly. Causes: slow convergence, incorrect static routes. Prevention: split horizon, route poisoning."
  },
  {
    id: 22,
    front: "What is split horizon?",
    back: "Router won't advertise a route back out the interface it learned it from. Prevents simple two-node loops."
  },
  {
    id: 23,
    front: "Routes to 10.0.0.0/8 (OSPF) and 10.0.5.0/24 (static). Which for 10.0.5.50?",
    back: "10.0.5.0/24 static route. Longest prefix match wins first (/24 more specific than /8)."
  },
  {
    id: 24,
    front: "What is convergence?",
    back: "All routers have consistent routing tables after change. RIP: slow (30-90s). OSPF/EIGRP: fast (<1s). BGP: slowest (minutes)."
  },
  {
    id: 25,
    front: "What is a floating static route?",
    back: "Backup static route with higher AD than primary. Only active if primary fails. Used for redundancy."
  },
  {
    id: 26,
    front: "Directly connected vs static routes?",
    back: "Connected (AD 0): networks on router interfaces, automatic. Static (AD 1): manually configured, permanent until removed."
  },
  {
    id: 27,
    front: "OSPF won't form adjacency—what to check?",
    back: "Same subnet/mask? Hello/Dead timers match? Same Area ID? Authentication match? Network type? MTU? ACL blocking multicast?"
  },
  {
    id: 28,
    front: "What is asymmetric routing?",
    back: "Forward and return paths differ. Issues: breaks stateful firewalls, complicates troubleshooting. Common in multi-homed networks."
  },
  {
    id: 29,
    front: "Why use RIP despite being outdated?",
    back: "Extremely simple, minimal resources. Valid for: very small networks, legacy compatibility, labs. Modern networks use OSPF/EIGRP."
  },
  {
    id: 30,
    front: "Match: RIP, OSPF, EIGRP, BGP",
    back: "RIP: hop count, 15 max, slow. OSPF: cost/bandwidth, areas, fast. EIGRP: composite metric, Cisco, hybrid. BGP: AS path, internet routing."
  }
];