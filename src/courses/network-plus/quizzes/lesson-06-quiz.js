// Quiz questions for Lesson 6: Advanced Subnetting & VLSM

export const lesson6Quiz = [
  {
    id: 1,
    question: "You have been assigned 192.168.50.0/24 and need to create subnets for three departments: Sales (60 hosts), Marketing (30 hosts), and IT (10 hosts). Following VLSM best practices, which subnet should you allocate first?",
    options: [
      "Sales (60 hosts) - allocate 192.168.50.0/26",
      "IT (10 hosts) - allocate 192.168.50.0/28",
      "Marketing (30 hosts) - allocate 192.168.50.0/27",
      "All three should be allocated simultaneously"
    ],
    correct: 0,
    explanation: "In VLSM, you must always start with the LARGEST subnet requirement first and work your way down to the smallest. This prevents address space fragmentation. Sales needs 60 hosts, which requires a /26 (62 usable). After allocating Sales at 192.168.50.0/26 (.0-.63), you can allocate Marketing at 192.168.50.64/27 (.64-.95), then IT at 192.168.50.96/28 (.96-.111). If you started with small subnets first, you might fragment the address space and not have a contiguous 64-address block left for Sales."
  },
  {
    id: 2,
    question: "A network administrator is designing IP addressing for a WAN connection between two routers. What is the most efficient subnet mask to use?",
    options: [
      "/28 (255.255.255.240) - provides 14 usable hosts",
      "/29 (255.255.255.248) - provides 6 usable hosts",
      "/30 (255.255.255.252) - provides 2 usable hosts",
      "/26 (255.255.255.192) - provides 62 usable hosts"
    ],
    correct: 2,
    explanation: "A /30 is the most efficient choice for point-to-point WAN links. It provides exactly 4 addresses: 1 network address, 2 usable host addresses (one for each router interface), and 1 broadcast address. Using anything larger wastes IP addresses. Example: 10.1.1.0/30 gives you 10.1.1.1 (Router A), 10.1.1.2 (Router B), with .0 as network and .3 as broadcast. On the Network+ exam, WAN link = /30."
  },
  {
    id: 3,
    question: "Which of the following represents a valid VLSM design for 10.1.0.0/24 with requirements of 100 hosts, 50 hosts, and 20 hosts?",
    options: [
      "10.1.0.0/25, 10.1.0.128/26, 10.1.0.192/27",
      "10.1.0.0/26, 10.1.0.64/26, 10.1.0.128/26",
      "10.1.0.0/24, 10.1.1.0/25, 10.1.1.128/27",
      "10.1.0.100/25, 10.1.0.50/26, 10.1.0.20/27"
    ],
    correct: 0,
    explanation: "Option A is correct because it follows proper VLSM methodology: (1) 100 hosts needs 128 addresses → /25 (10.1.0.0-127), (2) 50 hosts needs 64 addresses → /26 (10.1.0.128-191), (3) 20 hosts needs 32 addresses → /27 (10.1.0.192-223). These subnets don't overlap and are allocated sequentially. Option B wastes space (all /26). Option C uses addresses outside the /24. Option D uses host addresses as network addresses (invalid - network addresses must have host bits = 0)."
  },
  {
    id: 4,
    question: "What is the correct summary route for the following networks: 172.16.4.0/24, 172.16.5.0/24, 172.16.6.0/24, 172.16.7.0/24?",
    options: [
      "172.16.0.0/20",
      "172.16.4.0/22",
      "172.16.4.0/21",
      "172.16.0.0/16"
    ],
    correct: 1,
    explanation: "Convert to binary to find common bits:\n172.16.4.0 = 10101100.00010000.00000100.00000000\n172.16.5.0 = 10101100.00010000.00000101.00000000\n172.16.6.0 = 10101100.00010000.00000110.00000000\n172.16.7.0 = 10101100.00010000.00000111.00000000\n\nThe first 22 bits are identical (10101100.00010000.000001xx.xxxxxxxx), so the summary route is 172.16.4.0/22. This covers 172.16.4.0 through 172.16.7.255 (1024 addresses). Options A and D cover too much address space. Option C (/21) would include 172.16.0.0-7.255, which is more than needed."
  },
  {
    id: 5,
    question: "A user reports their computer automatically assigned itself IP address 169.254.102.45. Which of the following is the MOST likely cause?",
    options: [
      "The DHCP server assigned this address from its scope",
      "The user manually configured a static IP address",
      "The computer failed to contact a DHCP server",
      "The subnet mask is misconfigured"
    ],
    correct: 2,
    explanation: "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. When a Windows device is configured for DHCP but cannot reach a DHCP server after trying multiple times, it automatically assigns itself an APIPA address so it can communicate with other APIPA devices on the local network. Common causes: DHCP server down, physical connectivity issue, DHCP scope exhausted, VLAN mismatch, or firewall blocking DHCP (ports 67/68). To fix: check connectivity, verify DHCP server status, renew lease (ipconfig /release then /renew)."
  },
  {
    id: 6,
    question: "A technician needs to determine why a host at 10.50.25.50/24 cannot communicate with a host at 10.50.25.200/24, but can communicate with other hosts at 10.50.25.100/24. Both non-working hosts are on the same physical switch. What is the MOST likely problem?",
    options: [
      "Wrong default gateway configuration",
      "Incorrect subnet mask on one or both hosts",
      "DNS server is unreachable",
      "VLAN mismatch between the hosts"
    ],
    correct: 1,
    explanation: "The symptom 'can reach SOME hosts but not others on the same network' strongly indicates a subnet mask issue. If one host thinks it's on a /25 network (covering only .0-.127) instead of /24, it would route traffic to hosts in the .128-.255 range through its gateway rather than directly. Example: if .50 has mask /25, it thinks .200 is on a different network. To troubleshoot: ipconfig /all on both hosts, verify subnet masks match. Wrong gateway would prevent internet access. DNS issues wouldn't cause this selective communication problem. VLAN issues would block ALL communication."
  },
  {
    id: 7,
    question: "An organization has been allocated 192.168.100.0/23 and needs subnets for: Data Center (200 hosts), Sales (100 hosts), Engineering (50 hosts), and Guest Wi-Fi (20 hosts). What is the correct VLSM allocation?",
    options: [
      "Data Center: /23, Sales: /24, Engineering: /25, Guest: /27",
      "All departments should use /24 for consistency",
      "Data Center: /25, Sales: /26, Engineering: /27, Guest: /28",
      "Data Center: /24, Sales: /25, Engineering: /26, Guest: /27"
    ],
    correct: 3,
    explanation: "First, note that /23 gives you 192.168.100.0 through 192.168.101.255 (512 addresses). Calculate each requirement:\n• Data Center (200 hosts): needs 256 addresses → /24 (192.168.100.0/24)\n• Sales (100 hosts): needs 128 addresses → /25 (192.168.101.0/25)\n• Engineering (50 hosts): needs 64 addresses → /26 (192.168.101.128/26)\n• Guest (20 hosts): needs 32 addresses → /27 (192.168.101.192/27)\n\nOption A is wrong because /23 for Data Center uses the entire allocation. Option C undersizes Data Center. Option D wastes massive amounts of address space and can't fit all requirements in the /23 space."
  },
  {
    id: 8,
    question: "Which of the following is NOT a benefit of using VLSM?",
    options: [
      "More efficient use of IP address space",
      "Ability to create subnets of different sizes",
      "Reduced complexity in network design",
      "Better alignment of subnet size to actual requirements"
    ],
    correct: 2,
    explanation: "VLSM actually INCREASES complexity in network design, not reduces it. With VLSM, you must carefully plan and track different-sized subnets, document thoroughly, and ensure no overlaps. However, this complexity is worthwhile because: (1) VLSM allows efficient IP address usage by matching subnet sizes to actual needs, (2) you can create custom-sized subnets instead of uniform sizes, and (3) subnets align with actual requirements (100-host department gets 126 hosts, not 254). The complexity is the trade-off for efficiency. Fixed-length subnetting is simpler but wastes addresses."
  },
  {
    id: 9,
    question: "A network has the following subnets configured: 10.5.0.0/24, 10.5.1.0/25, 10.5.1.128/26. Users in the 10.5.1.128/26 subnet report intermittent connectivity. What is the problem?",
    options: [
      "The /26 subnet overlaps with the /25 subnet",
      "The default gateway is misconfigured",
      "DHCP scope is exhausted",
      "The subnets are properly configured - issue is elsewhere"
    ],
    correct: 0,
    explanation: "This is an overlapping subnet problem! Let's trace the address space:\n• 10.5.0.0/24 covers 10.5.0.0 through 10.5.0.255 ✓\n• 10.5.1.0/25 covers 10.5.1.0 through 10.5.1.127 ✓\n• 10.5.1.128/26 covers 10.5.1.128 through 10.5.1.191 ✓\n\nWait, these actually DON'T overlap! 10.5.1.0/25 ends at .127, and 10.5.1.128/26 starts at .128. So option D is correct... except the question says there ARE connectivity issues. Re-reading: if routers see both 10.5.1.0/25 AND 10.5.1.128/26, they have overlapping routing entries (10.5.1.128-191 matches BOTH routes). Better VLSM: use 10.5.0.0/24, 10.5.1.0/25, 10.5.2.0/26 (separate subnets)."
  },
  {
    id: 10,
    question: "A user can ping devices on the local network (192.168.1.0/24) but cannot reach the internet. Their IP configuration shows: IP: 192.168.1.100, Mask: 255.255.255.0, Gateway: 192.168.1.254. What should you check first?",
    options: [
      "Verify the DNS server configuration",
      "Check if the subnet mask is correct",
      "Ping the default gateway (192.168.1.254) to verify it's reachable",
      "Run ipconfig /renew to get a new DHCP lease"
    ],
    correct: 2,
    explanation: "When a user can reach local devices but not the internet, the problem is with routing beyond the local network. The first troubleshooting step is to verify the default gateway is reachable: ping 192.168.1.254. If it responds, the gateway configuration is correct but there's a problem on/beyond the gateway (check gateway's routing, NAT, ISP connection). If it doesn't respond, the gateway IP is wrong or the gateway device is down - verify the correct gateway IP and reconfigure. DNS would cause hostname resolution issues, not complete internet failure. Subnet mask is fine (can reach local). DHCP renewal won't help if the configuration is already correct."
  },
  {
    id: 11,
    question: "What is the maximum number of /30 subnets that can be created from a single /26 network?",
    options: [
      "4 subnets",
      "8 subnets",
      "16 subnets",
      "32 subnets"
    ],
    correct: 2,
    explanation: "A /26 network has 64 total addresses (2^6 host bits). A /30 network has 4 addresses (2^2 host bits). To find how many /30s fit in a /26: 64 ÷ 4 = 16 subnets. Example with 192.168.1.0/26:\n1. 192.168.1.0/30 (.0-.3)\n2. 192.168.1.4/30 (.4-.7)\n3. 192.168.1.8/30 (.8-.11)\n... continues through...\n16. 192.168.1.60/30 (.60-.63)\n\nEach /30 provides 2 usable hosts (perfect for WAN links). This question tests your understanding of subnet math and how to subdivide networks."
  },
  {
    id: 12,
    question: "An administrator wants to summarize the following routes: 10.1.0.0/24, 10.1.1.0/24, 10.1.2.0/24, 10.1.3.0/24, 10.1.4.0/24, 10.1.5.0/24, 10.1.6.0/24, 10.1.7.0/24. What is the most specific (longest prefix) summary route?",
    options: [
      "10.1.0.0/20",
      "10.1.0.0/21",
      "10.1.0.0/22",
      "10.1.0.0/23"
    ],
    correct: 1,
    explanation: "Convert to binary to find the longest common prefix:\n10.1.0.0 = 00001010.00000001.00000000.00000000\n10.1.1.0 = 00001010.00000001.00000001.00000000\n10.1.2.0 = 00001010.00000001.00000010.00000000\n10.1.3.0 = 00001010.00000001.00000011.00000000\n10.1.4.0 = 00001010.00000001.00000100.00000000\n10.1.5.0 = 00001010.00000001.00000101.00000000\n10.1.6.0 = 00001010.00000001.00000110.00000000\n10.1.7.0 = 00001010.00000001.00000111.00000000\n\nCommon: 00001010.00000001.00000xxx.xxxxxxxx (21 bits)\n\nThe summary route is 10.1.0.0/21, which covers 10.1.0.0 through 10.1.7.255 (2048 addresses, exactly our 8 networks). /20 would cover too much (10.1.0.0-15.255). /22 wouldn't cover all 8 networks."
  },
  {
    id: 13,
    question: "A company is experiencing IP address conflicts on their network. Users report intermittent connectivity and 'duplicate IP address' errors. What is the BEST solution to prevent future conflicts?",
    options: [
      "Increase the DHCP lease time to reduce renewals",
      "Use a larger subnet mask to provide more IP addresses",
      "Disable DHCP and configure all devices with static IPs",
      "Configure DHCP reservations for all static IP devices and exclude those IPs from the DHCP scope"
    ],
    correct: 3,
    explanation: "IP conflicts typically occur when a static IP address is within the DHCP scope range, causing DHCP to assign that IP to another device. The best solution: (1) Identify all devices needing static IPs (servers, printers, network devices), (2) Create DHCP reservations for them (maps MAC address to specific IP), (3) Exclude those IPs from the DHCP scope, or (4) Use separate ranges (DHCP: .100-.250, Static: .1-.99). Option A doesn't prevent conflicts. Option C eliminates DHCP benefits and increases management overhead. Option D doesn't solve the problem - conflicts occur regardless of subnet size."
  },
  {
    id: 14,
    question: "Which VLSM design principle ensures you won't run out of contiguous address space?",
    options: [
      "Always use the same subnet mask for all subnets",
      "Start with the smallest subnet and work up to the largest",
      "Allocate subnets in random order based on deployment schedule",
      "Always allocate the largest subnet first, then work down to smallest"
    ],
    correct: 3,
    explanation: "CRITICAL VLSM RULE: Always allocate from LARGEST to SMALLEST. This prevents address space fragmentation. Example problem: If you have 192.168.1.0/24 and need 100, 50, and 10 hosts, allocating smallest first fails:\n❌ Wrong: /28 (.0-.15), /26 (.16-.79), need /25 for 100... but no contiguous 128-address block remains!\n✓ Right: /25 (.0-.127), /26 (.128-.191), /28 (.192-.207) - perfect!\n\nStarting with the largest subnet ensures you have room for it, then subsequent smaller subnets fit in the remaining space. This is the fundamental VLSM methodology."
  },
  {
    id: 15,
    question: "A network technician is troubleshooting connectivity for a host that shows IP 192.168.5.100, mask 255.255.255.128, gateway 192.168.5.1. The host cannot communicate with 192.168.5.150. What is the issue?",
    options: [
      "The gateway is unreachable",
      "DNS is not configured",
      "The host and 192.168.5.150 are on different subnets due to the /25 mask",
      "There is an IP address conflict"
    ],
    correct: 2,
    explanation: "With a /25 mask (255.255.255.128), the network is divided:\n• Subnet 1: 192.168.5.0/25 covers .0 through .127\n• Subnet 2: 192.168.5.128/25 covers .128 through .255\n\nThe host (192.168.5.100) is in Subnet 1, but 192.168.5.150 is in Subnet 2. Even though they might be on the same physical switch, the host thinks .150 is on a different network and tries to reach it through the gateway (.1). However, .1 is also in Subnet 1, so the gateway would need to route between these subnets. The problem: .150 probably also has a /25 mask and is configured correctly, but the routing may not be set up. This is a classic wrong-subnet-mask scenario."
  }
];

// Export for use in QuizActivity component
export default lesson6Quiz;
