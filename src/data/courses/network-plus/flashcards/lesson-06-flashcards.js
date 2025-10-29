// Flashcards for Lesson 6: Advanced Subnetting & VLSM

export const lesson6Flashcards = [
  {
    id: 1,
    front: "What does VLSM stand for and what does it allow?",
    back: "Variable Length Subnet Masking. VLSM allows you to use different subnet mask lengths within the same major network, creating subnets of different sizes to match actual requirements and reduce IP address waste."
  },
  {
    id: 2,
    front: "What are the three steps of the VLSM methodology?",
    back: "1. List requirements and sort from largest to smallest, 2. Calculate the required subnet size for each (next power of 2 ≥ hosts+2), 3. Assign subnets sequentially starting from the base network address."
  },
  {
    id: 3,
    front: "Why must you start with the largest subnet first in VLSM?",
    back: "Starting with the largest subnet prevents you from running out of address space. If you allocate small subnets first, you may fragment the address space and find there's no contiguous block large enough for your biggest subnet."
  },
  {
    id: 4,
    front: "What subnet mask should you use for a WAN point-to-point link and why?",
    back: "/30 (255.255.255.252). A /30 provides exactly 2 usable host addresses (plus network and broadcast), which is perfect for connecting two routers. It's the most efficient use of IP addresses for point-to-point connections."
  },
  {
    id: 5,
    front: "You need 50 hosts. What's the minimum subnet size, and why do you add 2?",
    back: "You need 52 total addresses (50 hosts + 2), so use a /26 (64 addresses, giving 62 usable). You add 2 because every subnet requires one network address and one broadcast address, which cannot be assigned to hosts."
  },
  {
    id: 6,
    front: "What is supernetting (route aggregation) and why is it used?",
    back: "Supernetting combines multiple contiguous networks into one larger summary route. It's used to reduce routing table size, improve router performance, and simplify network management by advertising one route instead of many."
  },
  {
    id: 7,
    front: "How do you calculate a summary route?",
    back: "Convert network addresses to binary, find the common bits (reading left to right until they differ), count the common bits, and that's your prefix length. Example: if 22 bits are common, the summary route has a /22 mask."
  },
  {
    id: 8,
    front: "What are the three RFC 1918 private IP ranges?",
    back: "10.0.0.0/8 (Class A, 16.7M addresses), 172.16.0.0/12 (Class B, 1M addresses), and 192.168.0.0/16 (Class C, 65K addresses). Always use these for internal networks."
  },
  {
    id: 9,
    front: "What is the APIPA range and what does it indicate?",
    back: "169.254.0.0/16 (169.254.0.0 through 169.254.255.255). When a device shows an APIPA address, it means the device is configured for DHCP but failed to contact a DHCP server, so it auto-assigned a link-local address."
  },
  {
    id: 10,
    front: "What are the symptoms of a wrong subnet mask?",
    back: "You can ping some devices on the local network but not others, with no clear pattern. The device thinks it's on a different subnet and tries to route through the gateway to reach hosts that are actually on the same physical network."
  },
  {
    id: 11,
    front: "How do you identify an IP address conflict?",
    back: "Intermittent connectivity, 'IP address conflict' error messages, and network keeps dropping. Use 'arp -a' to check for duplicate MAC addresses or ping an IP and see if you get replies from two different MAC addresses."
  },
  {
    id: 12,
    front: "User can ping local devices but not the internet. What's likely wrong?",
    back: "Misconfigured default gateway. The device can communicate locally (Layer 2) but can't reach remote networks. Check that the gateway IP is correct (usually .1 of the subnet), ping the gateway to verify it's reachable, and use tracert to see where packets stop."
  },
  {
    id: 13,
    front: "What's the problem with overlapping subnets? Give an example.",
    back: "Routers don't know which route to use, causing unpredictable routing. Example: 10.5.0.0/24 (covers .0-.255) and 10.5.0.128/25 (covers .128-.255) overlap at .128-.255. Fix by redesigning so subnets don't overlap, like 10.5.0.0/24 and 10.5.1.0/25."
  },
  {
    id: 14,
    front: "What are five IP addressing best practices?",
    back: "1. Plan for 20-50% growth, 2. Use logical, sequential addressing (makes troubleshooting easier), 3. Reserve IP ranges (.1 for gateway, .2-.10 for infrastructure), 4. Document everything in IPAM, 5. Standardize on common subnet sizes where possible."
  },
  {
    id: 15,
    front: "What command renews a DHCP lease on Windows?",
    back: "ipconfig /release (releases current lease) followed by ipconfig /renew (requests new lease). Use this to troubleshoot APIPA addresses or when the DHCP scope is reconfigured."
  },
  {
    id: 16,
    front: "You have 192.168.10.0/24. Design VLSM for: 100 hosts, 50 hosts, 10 hosts, 2 hosts (WAN).",
    back: "100 hosts → /25 (192.168.10.0/25), 50 hosts → /26 (192.168.10.128/26), 10 hosts → /28 (192.168.10.192/28), 2 hosts → /30 (192.168.10.208/30). Always allocate largest first and work sequentially."
  },
  {
    id: 17,
    front: "What's the summary route for 172.16.0.0/24, 172.16.1.0/24, 172.16.2.0/24, 172.16.3.0/24?",
    back: "172.16.0.0/22. In binary, the first 22 bits are common across all four networks (10101100.00010000.000000xx.xxxxxxxx). This single /22 route represents all four /24 networks."
  },
  {
    id: 18,
    front: "Why shouldn't DHCP scope overlap with static IP range?",
    back: "To prevent IP conflicts. Best practice: carve out separate ranges. Example: DHCP scope 192.168.1.100-250, static IPs 192.168.1.1-99. This ensures DHCP never assigns an IP that's statically configured on another device."
  },
  {
    id: 19,
    front: "What's wrong with using 192.168.10.0/25 and then 192.168.10.100/26 in VLSM?",
    back: "Overlapping subnets! 192.168.10.0/25 covers .0-.127, while 192.168.10.100/26 covers .64-.127. They overlap at .100-.127. In VLSM, after allocating /25 (.0-.127), the next subnet must start at .128."
  },
  {
    id: 20,
    front: "What does 'classless routing' mean in relation to VLSM?",
    back: "Classless routing ignores traditional Class A/B/C boundaries and uses the subnet mask to determine network size. VLSM is classless because you can use any prefix length (/23, /27, /29, etc.) instead of being limited to /8, /16, or /24."
  },
  {
    id: 21,
    front: "How many /30 subnets can you create from a /28 network?",
    back: "Four /30 subnets. A /28 has 16 addresses, a /30 has 4 addresses. 16 ÷ 4 = 4 subnets. Example: .0/30, .4/30, .8/30, .12/30. Each /30 provides 2 usable hosts (perfect for WAN links)."
  },
  {
    id: 22,
    front: "What's the benefit of aligning VLAN IDs with IP subnets?",
    back: "Makes troubleshooting much easier and reduces errors. Example: VLAN 10 = 10.50.10.0/24, VLAN 20 = 10.50.20.0/24. When you see an IP address, you immediately know which VLAN it's in."
  },
  {
    id: 23,
    front: "A device has IP 192.168.1.100/25, gateway 192.168.1.1. Can it reach the gateway?",
    back: "No! With /25 mask, the network is 192.168.1.0-127. The device (.100) is in this range, but the gateway (.1) is also in this range. However, .1 is actually in the 192.168.1.0/25 subnet... wait, yes it can! They're on the same subnet. (Trick question - both are in the .0-.127 range)"
  },
  {
    id: 24,
    front: "What should you document in an IPAM (IP Address Management) system?",
    back: "Network address, subnet mask, default gateway, DHCP range (start-end), purpose/location, VLAN ID, date allocated, and any static IP reservations. Good documentation is essential for maintaining networks."
  },
  {
    id: 25,
    front: "You need subnets for 200, 100, and 50 hosts from 10.1.0.0/23. What are the allocations?",
    back: "10.1.0.0/24 for 200 hosts (254 usable), 10.1.1.0/25 for 100 hosts (126 usable), 10.1.1.128/26 for 50 hosts (62 usable). The /23 gives you 512 total addresses (.0-.255 on 10.1.0 and 10.1.1), plenty of room."
  },
  {
    id: 26,
    front: "Why is .1 typically used for the default gateway?",
    back: "Convention and ease of troubleshooting. It's the first usable IP in the subnet, easy to remember, and consistent across networks. Example: 192.168.1.1, 10.50.10.1, 172.16.5.1. Some organizations use .254 (last usable) instead."
  },
  {
    id: 27,
    front: "What causes a device to get an APIPA address instead of a DHCP address?",
    back: "DHCP server is down/unreachable, physical connectivity issue (cable/switch), DHCP scope is exhausted (no IPs available), VLAN mismatch, or firewall blocking DHCP traffic (ports 67/68). Check these systematically."
  },
  {
    id: 28,
    front: "How do you troubleshoot 'can ping IP but can't ping hostname'?",
    back: "DNS issue. Check DNS server configuration (ipconfig /all), ping DNS server to verify reachability, try nslookup/dig to query directly, flush DNS cache (ipconfig /flushdns), verify DNS server has correct records, check firewall rules (port 53)."
  },
  {
    id: 29,
    front: "What's the most efficient way to connect 4 branch offices to HQ?",
    back: "Use four /30 subnets (one per point-to-point WAN link). Each /30 provides exactly 2 usable IPs for the two router interfaces. Total: 16 IP addresses for all four links (vs. 248 addresses if you used /24s)."
  },
  {
    id: 30,
    front: "What's the difference between 'subnet overlap' and 'route summarization'?",
    back: "Subnet overlap is a mistake where two subnets share address space (causes routing problems). Route summarization (supernetting) is intentional, combining multiple non-overlapping networks into one summary route for efficient routing. Overlap=bad, summarization=good!"
  }
];

// Export for use in the FlashcardActivity component
export default lesson6Flashcards;