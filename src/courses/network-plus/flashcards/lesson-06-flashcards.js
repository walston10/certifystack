// Flashcards for Lesson 6: Advanced Subnetting & VLSM

export const lesson6Flashcards = [
  {
    id: 1,
    front: "What is VLSM?",
    back: "Variable Length Subnet Masking. Different subnet mask lengths within same network, creating different sizes to match needs and reduce waste."
  },
  {
    id: 2,
    front: "Three steps of VLSM?",
    back: "1) List requirements, sort largest to smallest. 2) Calculate size (next power of 2 ≥ hosts+2). 3) Assign sequentially from base address."
  },
  {
    id: 3,
    front: "Why start with largest subnet in VLSM?",
    back: "Prevents running out of space. Small subnets first fragment address space, may leave no contiguous block for largest subnet."
  },
  {
    id: 4,
    front: "WAN point-to-point link subnet mask?",
    back: "/30 (255.255.255.252). Exactly 2 usable hosts. Most efficient for connecting two routers."
  },
  {
    id: 5,
    front: "Need 50 hosts, what subnet size?",
    back: "52 total (50+2 for network/broadcast), use /26 (64 addresses, 62 usable). Always add 2 for network and broadcast addresses."
  },
  {
    id: 6,
    front: "What is supernetting?",
    back: "Combines multiple contiguous networks into one summary route. Reduces routing table size, improves performance, simplifies management."
  },
  {
    id: 7,
    front: "How to calculate summary route?",
    back: "Convert to binary, find common bits (left to right until differ), count common bits = prefix length."
  },
  {
    id: 8,
    front: "Three RFC 1918 private ranges?",
    back: "10.0.0.0/8 (16.7M addresses), 172.16.0.0/12 (1M), 192.168.0.0/16 (65K). Use for internal networks."
  },
  {
    id: 9,
    front: "What is APIPA range?",
    back: "169.254.0.0/16. Device configured for DHCP but couldn't contact server, auto-assigned link-local address."
  },
  {
    id: 10,
    front: "Wrong subnet mask symptoms?",
    back: "Can ping some local devices but not others. Device thinks it's on different subnet, routes through gateway for local hosts."
  },
  {
    id: 11,
    front: "How identify IP conflict?",
    back: "Intermittent connectivity, 'IP conflict' errors, dropping connection. Use 'arp -a' for duplicate MACs or ping for multiple MAC replies."
  },
  {
    id: 12,
    front: "Can ping local but not internet—what's wrong?",
    back: "Misconfigured default gateway. Check gateway IP correct, ping gateway, use tracert to see where packets stop."
  },
  {
    id: 13,
    front: "Overlapping subnets problem?",
    back: "Routers don't know which route to use. Example: 10.5.0.0/24 (.0-.255) and 10.5.0.128/25 (.128-.255) overlap at .128-.255. Redesign without overlap."
  },
  {
    id: 14,
    front: "Five IP addressing best practices?",
    back: "1) Plan 20-50% growth. 2) Logical sequential addressing. 3) Reserve ranges (.1 gateway, .2-.10 infrastructure). 4) Document in IPAM. 5) Standardize subnet sizes."
  },
  {
    id: 15,
    front: "Renew DHCP lease on Windows?",
    back: "ipconfig /release then ipconfig /renew. Use for APIPA or when scope reconfigured."
  },
  {
    id: 16,
    front: "VLSM 192.168.10.0/24 for: 100, 50, 10, 2 hosts?",
    back: "100→/25 (.0/25), 50→/26 (.128/26), 10→/28 (.192/28), 2→/30 (.208/30). Largest first, sequential."
  },
  {
    id: 17,
    front: "Summary route for 172.16.0-3.0/24?",
    back: "172.16.0.0/22. First 22 bits common across all four networks."
  },
  {
    id: 18,
    front: "Why separate DHCP and static ranges?",
    back: "Prevents conflicts. Example: DHCP .100-.250, static .1-.99. DHCP never assigns statically configured IPs."
  },
  {
    id: 19,
    front: "What's wrong with 192.168.10.0/25 then 192.168.10.100/26?",
    back: "Overlapping! /25 covers .0-.127, /26 at .100 covers .64-.127. Overlap at .100-.127. Next subnet must start at .128."
  },
  {
    id: 20,
    front: "What does 'classless routing' mean?",
    back: "Ignores Class A/B/C boundaries, uses subnet mask to determine size. Can use any prefix (/23, /27, /29) not limited to /8, /16, /24."
  },
  {
    id: 21,
    front: "How many /30 from /28?",
    back: "Four /30 subnets. /28 = 16 addresses, /30 = 4 addresses. 16÷4 = 4. Each /30 has 2 usable hosts."
  },
  {
    id: 22,
    front: "Benefit of aligning VLAN IDs with subnets?",
    back: "Easier troubleshooting. Example: VLAN 10 = 10.50.10.0/24, VLAN 20 = 10.50.20.0/24. See IP, know VLAN immediately."
  },
  {
    id: 23,
    front: "192.168.1.100/25, gateway 192.168.1.1—can reach gateway?",
    back: "Yes! /25 network is .0-.127. Device (.100) and gateway (.1) both in same subnet."
  },
  {
    id: 24,
    front: "What document in IPAM?",
    back: "Network address, mask, gateway, DHCP range, purpose/location, VLAN ID, date allocated, static reservations."
  },
  {
    id: 25,
    front: "Subnets from 10.1.0.0/23 for 200, 100, 50 hosts?",
    back: "10.1.0.0/24 (200 hosts, 254 usable), 10.1.1.0/25 (100 hosts, 126), 10.1.1.128/26 (50 hosts, 62)."
  },
  {
    id: 26,
    front: "Why .1 for gateway?",
    back: "Convention, easy to remember, first usable IP, consistent. Example: 192.168.1.1, 10.50.10.1. Some use .254 (last usable)."
  },
  {
    id: 27,
    front: "What causes APIPA instead of DHCP?",
    back: "DHCP server down, connectivity issue, scope exhausted, VLAN mismatch, firewall blocking ports 67/68."
  },
  {
    id: 28,
    front: "Can ping IP but not hostname—troubleshoot?",
    back: "DNS issue. Check DNS config (ipconfig /all), ping DNS server, try nslookup, flush cache (ipconfig /flushdns), verify records, check port 53."
  },
  {
    id: 29,
    front: "Most efficient: connect 4 branch offices to HQ?",
    back: "Four /30 subnets (one per WAN link). Each /30 = 2 usable IPs for router interfaces. Total 16 IPs vs 248 if using /24s."
  },
  {
    id: 30,
    front: "Subnet overlap vs route summarization?",
    back: "Overlap: mistake, two subnets share space (bad, causes routing problems). Summarization: intentional, combines non-overlapping networks (good, efficient)."
  }
];

export default lesson6Flashcards;