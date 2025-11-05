// Quiz for Lesson 12: Routing Fundamentals and Protocols

export const lesson12Quiz = [
  {
    id: 1,
    question: "A network engineer configures a router with a static route to 192.168.50.0/24 via gateway 10.1.1.1 and also enables OSPF, which learns the same network via gateway 10.1.1.2. Both paths are available. Which route will the router use?",
    options: [
      "The OSPF route because dynamic routing protocols always take precedence",
      "The static route because it has a lower administrative distance (1) than OSPF (110)",
      "Both routes will be load-balanced automatically",
      "The route with the lowest hop count metric"
    ],
    correct: 1,
    explanation: "Administrative distance (AD) determines which routing source is trusted when multiple sources provide the same route. Static routes have AD of 1, OSPF has AD of 110. Lower AD wins. The router will use the static route unless it fails, then it will fall back to the OSPF route. This is called a floating static route when used for backup."
  },
  {
    id: 2,
    question: "A small office network uses RIP to route between three routers. After adding a fourth router that's 16 hops away from the main office, devices behind that router cannot reach the corporate network. What is the cause?",
    options: [
      "RIP has a maximum hop count of 15; 16 hops is considered unreachable (infinity)",
      "The new router is not configured for RIPv2",
      "RIP does not support more than three routers in a network",
      "The routing table on the new router is full"
    ],
    correct: 0,
    explanation: "RIP uses hop count as its metric and considers 16 hops as infinity (unreachable). This is a fundamental limitation of RIP that makes it unsuitable for large networks. If a route requires 16 or more hops, RIP will not advertise it. This is one reason OSPF or EIGRP are preferred for larger networks."
  },
  {
    id: 3,
    question: "Two routers running OSPF are connected via a point-to-point link, but OSPF neighborship is not forming. Both routers have interfaces in Area 0, both are on the same subnet, and hello packets are being sent. What should you verify next?",
    options: [
      "Whether both routers are configured as designated routers (DR)",
      "Whether the OSPF hello and dead timers match on both interfaces",
      "Whether both routers have identical router IDs",
      "Whether both routers are using the same routing table size"
    ],
    correct: 1,
    explanation: "OSPF neighbors must agree on several parameters to form adjacencies: area ID, subnet mask, hello/dead timers, authentication, and area type. Hello/dead timer mismatch is a common issue. Default values are 10s hello/40s dead on broadcast networks, 30s/120s on NBMA. If one router is customized and the other uses defaults, the neighborship fails."
  },
  {
    id: 4,
    question: "A network administrator wants to summarize routes 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24, and 172.16.3.0/24 into a single route advertisement to reduce routing table size. What is the most specific summary route that covers all four networks?",
    options: [
      "172.16.0.0/22 (covers 172.16.0.0 through 172.16.3.255)",
      "172.16.0.0/21 (covers 172.16.0.0 through 172.16.7.255)",
      "172.16.0.0/24 (covers only the first network)",
      "172.16.0.0/16 (covers all of 172.16.0.0 space)"
    ],
    correct: 0,
    explanation: "To summarize these four contiguous /24 networks, we need a /22. The networks span 172.16.0.0 to 172.16.3.255, which is 4 × 256 = 1,024 addresses = 2^10 hosts, leaving 22 network bits (32-10=22). A /22 is the most specific (longest match) that covers all four networks without including extra space like a /21 would."
  },
  {
    id: 5,
    question: "An enterprise network consists of OSPF Area 0 (backbone) and several stub areas (Area 1, Area 2). A router in Area 1 needs to reach the internet. Which type of route will it use?",
    options: [
      "An O IA (Inter-Area) route from the ABR",
      "An O E1 or O E2 (External) route redistributed from BGP",
      "A default route (0.0.0.0/0) injected by the Area Border Router",
      "A directly connected route to the internet gateway"
    ],
    correct: 2,
    explanation: "Stub areas don't receive external (E1/E2) routes or inter-area (IA) routes for external destinations. Instead, the Area Border Router (ABR) injects a default route (0.0.0.0/0) into the stub area. All traffic to unknown destinations, including internet traffic, follows this default route to the ABR, which then forwards it appropriately. This reduces routing table size in stub areas."
  },
  {
    id: 6,
    question: "Your company connects to two ISPs for redundancy. Each ISP assigns you a public IP block and an AS number. You need to advertise your network to both ISPs and receive routes from them. Which routing protocol should you implement?",
    options: [
      "OSPF because it's a scalable link-state protocol",
      "EIGRP for fast convergence and cisco compatibility",
      "BGP (Border Gateway Protocol) for inter-AS routing",
      "RIPv2 because it supports multiple paths"
    ],
    correct: 2,
    explanation: "BGP is the only routing protocol designed for inter-AS (Autonomous System) routing on the internet. OSPF, EIGRP, and RIP are Interior Gateway Protocols (IGPs) used within an organization. BGP is an Exterior Gateway Protocol (EGP) that exchanges routes between different organizations. You'd run eBGP with each ISP and potentially iBGP internally."
  },
  {
    id: 7,
    question: "A router running EIGRP has two paths to network 10.50.0.0/16: Path A with feasible distance of 30,720 and Path B with feasible distance of 40,960. Path A fails. How quickly can the router converge to Path B?",
    options: [
      "Immediately, using the pre-calculated feasible successor",
      "After 30 seconds (EIGRP dead timer expires)",
      "After sending queries to all neighbors and receiving replies",
      "After the routing table is rebuilt from scratch"
    ],
    correct: 0,
    explanation: "EIGRP maintains a topology table with feasible successors (backup routes that meet the feasibility condition). If Path B was a feasible successor, convergence is instantaneous—EIGRP simply promotes it to successor without queries. If no feasible successor exists, EIGRP enters Active state and queries neighbors, which takes longer. This is why EIGRP converges faster than OSPF in many scenarios."
  },
  {
    id: 8,
    question: "After configuring OSPF on a multi-access segment (Ethernet LAN) with five routers, you notice that one router was elected as DR (Designated Router) even though it has the lowest router ID. What could cause this unexpected election?",
    options: [
      "That router has the highest OSPF priority on the interface (default is 1; can be set higher)",
      "That router was powered on first and became DR before others joined",
      "The other routers are all configured as backup designated routers",
      "OSPF always elects the router with the lowest ID as DR"
    ],
    correct: 1,
    explanation: "OSPF DR/BDR election is non-preemptive. The election happens once when the network forms. Even if a router with better priority/router ID joins later, it won't become DR unless the current DR fails. The router that boots first (when no DR exists) can win. Priority can override this (highest priority wins, then highest router ID). To force re-election, you must clear OSPF process or shutdown all routers."
  },
  {
    id: 9,
    question: "A branch office router has a default route pointing to the headquarters (0.0.0.0/0 via 192.168.1.1) and several specific static routes to branch resources. Users can reach the internet and HQ resources, but when they try to reach 172.20.0.0/24 at a different branch, traffic goes to HQ instead of the direct branch-to-branch link. What is wrong?",
    options: [
      "The default route is preventing the specific route from being used",
      "There is no specific route configured for 172.20.0.0/24, so it matches the default route",
      "The routing protocol administrative distance is lower than static routes",
      "The router is configured for policy-based routing"
    ],
    correct: 1,
    explanation: "Routers use longest prefix match (most specific route). If no specific route exists for 172.20.0.0/24, the default route (0.0.0.0/0) will match and send traffic to HQ. The solution is to add a static route for 172.20.0.0/24 via the branch-to-branch link. Longest match wins regardless of how the route was learned (static, dynamic, default)."
  },
  {
    id: 10,
    question: "You're troubleshooting routing on a router and see this entry: 'O IA 10.20.0.0/16 [110/65] via 192.168.1.1'. What does this routing entry indicate?",
    options: [
      "O = OSPF, IA = Internal Area, learned from within the same area",
      "O = OSPF, IA = Inter-Area, learned from a different OSPF area via ABR",
      "O = OSPF, IA = Internet Access, learned from an external router",
      "O = Optimal, IA = Immediately Available, route is pre-installed"
    ],
    correct: 1,
    explanation: "OSPF route codes: 'O' = OSPF, 'IA' = Inter-Area (route from different OSPF area crossing an Area Border Router), 'E1/E2' = External routes. [110/65] shows [administrative distance/metric]. This route is from another OSPF area. Routes within the same area would show just 'O'. Inter-area routes have traversed an ABR connecting multiple areas."
  },
  {
    id: 11,
    question: "A company uses EIGRP with a composite metric calculation. A network engineer increases the bandwidth on a link from 100 Mbps to 1 Gbps but notices EIGRP didn't adjust its route selection. What must be done for EIGRP to account for the bandwidth change?",
    options: [
      "Restart all routers in the EIGRP domain",
      "Configure the 'bandwidth' command on the interface to reflect the actual speed",
      "EIGRP automatically detects bandwidth changes through hello packets",
      "Enable EIGRP metric weights to include bandwidth"
    ],
    correct: 1,
    explanation: "EIGRP doesn't automatically detect physical bandwidth changes. It uses the configured bandwidth value on the interface for metric calculation. After physically upgrading a link, you must manually set 'bandwidth 1000000' (in Kbps) on the interface. EIGRP will then recalculate metrics and potentially choose different paths. This is also true for OSPF cost calculations."
  },
  {
    id: 12,
    question: "An organization running OSPF needs to redistribute static routes into OSPF so all routers learn them. However, they want to prevent an OSPF router from advertising these redistributed routes back out to the original source network. What OSPF feature addresses this?",
    options: [
      "Split horizon (prevents routes from being advertised back out the interface they were learned from)",
      "Route filtering using distribute lists or prefix lists",
      "Passive interface (prevents OSPF hellos on specific interfaces)",
      "Area stubbing (prevents external routes in stub areas)"
    ],
    correct: 1,
    explanation: "Split horizon is a distance-vector feature (RIP, EIGRP to some extent), not OSPF. OSPF uses route filtering via distribute lists, prefix lists, or route maps to control what's advertised. You'd apply a filter at redistribution or on specific interfaces. Passive interface stops hellos (making an interface appear as a stub network) but doesn't filter redistributed routes. Proper filtering prevents routing loops and controls route propagation."
  },
  {
    id: 13,
    question: "After enabling RIPv2 on a router, you notice that it's not receiving routes from a neighboring RIPv1 router. Both routers have RIP enabled and are on the same subnet. What is the issue?",
    options: [
      "RIPv2 uses multicast 224.0.0.9 while RIPv1 uses broadcast 255.255.255.255; versions are incompatible by default",
      "RIPv2 requires authentication while RIPv1 does not",
      "RIPv2 uses TCP while RIPv1 uses UDP",
      "RIPv1 uses hop count while RIPv2 uses bandwidth as metric"
    ],
    correct: 0,
    explanation: "RIPv1 broadcasts updates to 255.255.255.255, RIPv2 multicasts to 224.0.0.9. By default, RIPv2 won't accept RIPv1 broadcasts. The solution: configure RIPv2 to accept v1 updates using 'version 1 2' command, or configure the RIPv1 router to multicast. Other differences: RIPv2 supports VLSM/CIDR and authentication; both use hop count and UDP port 520."
  },
  {
    id: 14,
    question: "A network's BGP router receives the same prefix (203.0.113.0/24) from three different peers with the following attributes: Peer A (AS path: 65001, local preference 100), Peer B (AS path: 65001 65002, local preference 200), Peer C (AS path: 65001, local preference 100, lowest router ID). Which path will BGP select?",
    options: [
      "Peer A because it has the shortest AS path",
      "Peer B because it has the highest local preference (200)",
      "Peer C because it has the lowest router ID",
      "All three paths will be load-balanced"
    ],
    correct: 1,
    explanation: "BGP path selection uses a complex algorithm. Local preference is evaluated before AS path length. Higher local preference wins (200 > 100), so Peer B is selected despite having a longer AS path. BGP selection order: Weight > Local Pref > Locally originated > AS path length > Origin > MED > eBGP over iBGP > IGP metric > Router ID. Remember: Higher Local Pref and Weight are better; shorter AS path is better."
  },
  {
    id: 15,
    question: "A router is configured with both OSPF and EIGRP. The same destination network is learned via both protocols: OSPF with a metric of 65 and EIGRP with a metric of 25,600. Which route will appear in the routing table and why?",
    options: [
      "OSPF route because its metric (65) is lower than EIGRP's metric (25,600)",
      "EIGRP route because its administrative distance (90) is lower than OSPF's (110)",
      "Both routes will be installed for load balancing",
      "OSPF route because it's a link-state protocol (more trusted than EIGRP)"
    ],
    correct: 1,
    explanation: "You cannot compare metrics across different routing protocols—they use different metric calculations. Administrative distance determines which protocol is trusted. EIGRP has AD 90, OSPF has AD 110. Lower AD wins, so the EIGRP route is installed regardless of metric values. Metrics are only compared between routes learned from the same protocol. If EIGRP were disabled, then the OSPF route would be used."
  }
];

// Export for use in quiz component
export default lesson12Quiz;