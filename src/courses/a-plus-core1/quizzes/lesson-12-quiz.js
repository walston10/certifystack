export const lesson12Quiz = [
  {
    id: 1,
    question: "A computer has the IP address 192.168.15.47 with subnet mask 255.255.255.0. What is the network address (network ID) for this computer?",
    options: [
      "192.168.15.0",
      "192.168.15.255",
      "192.168.0.0",
      "255.255.255.0"
    ],
    correct: 0,
    explanation: "The network address is found by performing a logical AND operation between the IP address and subnet mask. With a /24 subnet (255.255.255.0), the first three octets identify the network and the last octet identifies the host. For 192.168.15.47/24, the network address is 192.168.15.0. This represents the network itself and cannot be assigned to a device. The broadcast address for this network is 192.168.15.255. Usable host addresses range from 192.168.15.1 to 192.168.15.254."
  },
  {
    id: 2,
    question: "A small office network uses the private IP range 10.0.0.0/8. Devices need to access the internet. What technology allows private IP addresses to communicate with the public internet?",
    options: [
      "DHCP",
      "DNS",
      "NAT (Network Address Translation)",
      "VPN"
    ],
    correct: 2,
    explanation: "NAT (Network Address Translation) translates private IP addresses to public IP addresses for internet communication. The router maintains a NAT table mapping internal private IPs to the single public IP assigned by the ISP. When a device sends internet traffic, the router replaces the source IP with its public IP. Return traffic is translated back to the correct internal IP. This allows many devices to share one public IP and provides security by hiding internal network structure. PAT (Port Address Translation) or NAT overload uses port numbers to track multiple connections."
  },
  {
    id: 3,
    question: "A technician needs to assign a static IP to a server. The network is 172.16.50.0/24 with the router at 172.16.50.1. DHCP assigns 172.16.50.10 through 172.16.50.200. What IP address would be appropriate for the static server?",
    options: [
      "172.16.50.0 - it's available",
      "172.16.50.150 - within the DHCP range",
      "172.16.50.250 - outside the DHCP range but within the subnet",
      "192.168.1.100 - different network"
    ],
    correct: 2,
    explanation: "Static IPs should be outside the DHCP scope to avoid conflicts. The network 172.16.50.0/24 has usable addresses from .1 to .254 (.0 is network, .255 is broadcast). The router uses .1, DHCP uses .10-.200. Addresses .2-.9 and .201-.254 are available for static assignment. 172.16.50.250 is perfect - it's within the subnet, outside DHCP range, and properly documented. Never assign .0 (network address) or .255 (broadcast). Never use addresses within the DHCP range. Using a different network (192.168.1.x) wouldn't work without routing. Always document static IP assignments."
  },
  {
    id: 4,
    question: "What is the primary difference between a public IP address and a private IP address?",
    options: [
      "Public IPs are faster",
      "Public IPs are routable on the internet, while private IPs (RFC 1918) are only used within local networks and require NAT for internet access",
      "Private IPs cost more",
      "There is no difference"
    ],
    correct: 1,
    explanation: "Public IP addresses are globally unique and routable on the internet - assigned by ISPs and managed by IANA/regional registries. Private IP addresses (RFC 1918) are reserved for internal networks and not routable on the internet. Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Multiple organizations can use the same private IPs internally without conflict because they're not directly connected. NAT enables private addresses to access the internet by translating to public IPs. This solves IPv4 address exhaustion and provides security through network hiding."
  },
  {
    id: 5,
    question: "A user's computer shows IP address 169.254.100.50 with subnet mask 255.255.0.0. They cannot access network resources or the internet. What does this IP address indicate?",
    options: [
      "The computer has a valid static IP",
      "The computer failed to obtain a DHCP address and assigned itself an APIPA (Automatic Private IP Addressing) address",
      "The computer has the fastest possible connection",
      "This is a normal public IP address"
    ],
    correct: 1,
    explanation: "169.254.0.0/16 is the APIPA range. When a Windows computer is configured for DHCP but cannot contact a DHCP server, it assigns itself an address in this range. APIPA allows communication only with other APIPA devices on the same local network segment - no internet, no gateway, no cross-subnet communication. This indicates: DHCP server offline, network cable unplugged, wrong VLAN, or DHCP exhausted. Troubleshoot: verify network connectivity, check DHCP server status, ensure DHCP scope has available addresses. Manually releasing/renewing may help: ipconfig /release, ipconfig /renew."
  },
  {
    id: 6,
    question: "A network administrator needs to subnet the 192.168.1.0/24 network into 4 equal subnets. What subnet mask should be used?",
    options: [
      "255.255.255.0 (/24)",
      "255.255.255.128 (/25)",
      "255.255.255.192 (/26)",
      "255.255.255.224 (/27)"
    ],
    correct: 2,
    explanation: "To create 4 subnets, you need 2 bits (2^2 = 4). Original /24 has 8 host bits. Borrowing 2 bits leaves 6 host bits, creating /26. Subnet mask: 255.255.255.192. The four subnets are: 192.168.1.0/26 (.0-.63), 192.168.1.64/26 (.64-.127), 192.168.1.128/26 (.128-.191), 192.168.1.192/26 (.192-.255). Each subnet has 62 usable hosts (2^6 - 2 = 64 - 2). Formula: needed subnets ≤ 2^borrowed_bits. /25 creates 2 subnets, /27 creates 8 subnets. Understanding CIDR notation and subnet masks is critical for network design."
  },
  {
    id: 7,
    question: "What is the broadcast address for the network 10.20.30.0/24?",
    options: [
      "10.20.30.0",
      "10.20.30.1",
      "10.20.30.254",
      "10.20.30.255"
    ],
    correct: 3,
    explanation: "The broadcast address is the last address in a subnet - all host bits set to 1. For 10.20.30.0/24 (255.255.255.0), the network is 10.20.30.0 and the broadcast is 10.20.30.255. Broadcast packets sent to this address reach all devices in the subnet. The network address (.0) and broadcast address (.255) cannot be assigned to hosts. Usable host range: 10.20.30.1 to 10.20.30.254 (254 addresses). Understanding network and broadcast addresses is essential for subnetting and troubleshooting. The gateway is typically .1 or .254."
  },
  {
    id: 8,
    question: "A company uses the 172.16.0.0/16 network. They need to create separate subnets for 5 departments with approximately 500 computers each. What subnet mask would provide enough hosts per subnet?",
    options: [
      "255.255.255.0 (/24) - only 254 hosts per subnet",
      "255.255.254.0 (/23) - 510 usable hosts per subnet",
      "255.255.252.0 (/22) - 1,022 usable hosts per subnet",
      "255.255.255.128 (/25) - only 126 hosts per subnet"
    ],
    correct: 1,
    explanation: "/23 (255.255.254.0) provides 2^9 - 2 = 510 usable hosts per subnet - adequate for 500 computers with room to grow. /24 only provides 254 hosts (insufficient). /22 provides 1,022 hosts (more than needed, wastes addresses). From 172.16.0.0/16, you can create many /23 subnets. Five subnets would be: 172.16.0.0/23, 172.16.2.0/23, 172.16.4.0/23, 172.16.6.0/23, 172.16.8.0/23. Formula: usable hosts = 2^(host bits) - 2. Always account for growth when designing subnets. VLSM allows using different subnet sizes for different departments based on their specific needs."
  },
  {
    id: 9,
    question: "What is the default gateway in a network configuration?",
    options: [
      "The first computer in the network",
      "The router's IP address that forwards traffic to other networks and the internet",
      "The broadcast address",
      "The DHCP server"
    ],
    correct: 1,
    explanation: "The default gateway is the router's IP address on the local subnet that forwards traffic destined for other networks (including the internet). When a computer sends traffic to an IP outside its subnet, it sends to the default gateway. The gateway then routes the traffic appropriately. Without a correct gateway, devices can communicate locally but not access external networks. Typically configured via DHCP or manual IP settings. Common gateway addresses: .1 or .254 in the subnet. Verify with 'ipconfig' (Windows) or 'ip route' (Linux). Incorrect gateway is a common cause of 'no internet' issues."
  },
  {
    id: 10,
    question: "A device has IP address 192.168.10.50/28. How many usable host addresses are in this subnet?",
    options: [
      "14 usable hosts",
      "16 usable hosts",
      "30 usable hosts",
      "254 usable hosts"
    ],
    correct: 0,
    explanation: "/28 means 28 network bits and 4 host bits. 2^4 = 16 total addresses. Subtract 2 (network and broadcast) = 14 usable hosts. The /28 subnet 192.168.10.48/28 spans 192.168.10.48 to 192.168.10.63. Network: .48, Broadcast: .63, Usable: .49 to .62. Formula: 2^(32 - CIDR) - 2 = usable hosts. Common subnets: /30 = 2 hosts (point-to-point links), /29 = 6 hosts, /28 = 14 hosts, /27 = 30 hosts, /26 = 62 hosts, /25 = 126 hosts, /24 = 254 hosts. Understanding host calculations is essential for proper network design."
  },
  {
    id: 11,
    question: "What is the purpose of a subnet mask?",
    options: [
      "To hide the network from hackers",
      "To determine which portion of an IP address represents the network and which portion represents the host",
      "To speed up internet connections",
      "To assign IP addresses automatically"
    ],
    correct: 1,
    explanation: "The subnet mask defines the boundary between network and host portions of an IP address. It uses binary: 1s indicate network bits, 0s indicate host bits. For example, 255.255.255.0 (binary: 11111111.11111111.11111111.00000000) means the first 24 bits are network, last 8 bits are host. Devices use the subnet mask to determine if a destination IP is local (same subnet - send directly) or remote (different subnet - send to gateway). Common masks: 255.255.255.0 (/24), 255.255.0.0 (/16), 255.0.0.0 (/8). CIDR notation is shorthand for subnet masks."
  },
  {
    id: 12,
    question: "A computer with IP 192.168.5.10/24 needs to communicate with 192.168.5.20. Will it send traffic directly or through the default gateway?",
    options: [
      "Through the default gateway",
      "Directly - both are on the same subnet (192.168.5.0/24)",
      "Communication is impossible",
      "It depends on the time of day"
    ],
    correct: 1,
    explanation: "Both IPs are in the 192.168.5.0/24 subnet (range .1 to .254), so the computer sends traffic directly using ARP to discover the destination MAC address, then sends frames at Layer 2. The default gateway is only used for traffic destined outside the local subnet. The computer determines this by performing a logical AND operation between the destination IP and its subnet mask. Same network result = direct communication. Different network result = send to gateway. This is fundamental IP routing behavior at the host level."
  },
  {
    id: 13,
    question: "Which of the following is a valid private IP address range according to RFC 1918?",
    options: [
      "11.0.0.0 to 11.255.255.255",
      "172.16.0.0 to 172.31.255.255",
      "192.167.0.0 to 192.167.255.255",
      "169.254.0.0 to 169.254.255.255"
    ],
    correct: 1,
    explanation: "RFC 1918 defines three private IP ranges: (1) 10.0.0.0 to 10.255.255.255 (10.0.0.0/8 - Class A), (2) 172.16.0.0 to 172.31.255.255 (172.16.0.0/12 - Class B), (3) 192.168.0.0 to 192.168.255.255 (192.168.0.0/16 - Class C). These addresses are reserved for private networks and not routable on the internet. 169.254.0.0/16 is APIPA (link-local), not RFC 1918 private. Any organization can use these ranges internally. NAT translates them to public IPs for internet access. Memorize these ranges for the exam."
  },
  {
    id: 14,
    question: "A network administrator is troubleshooting connectivity. Two devices on the same physical network cannot communicate: Device A (192.168.1.50/24) and Device B (192.168.2.50/24). What is the problem?",
    options: [
      "The IP addresses are too similar",
      "The devices are on different subnets (192.168.1.0/24 vs 192.168.2.0/24) and need a router to communicate",
      "Both devices are working perfectly",
      "The subnet masks are wrong"
    ],
    correct: 1,
    explanation: "Device A is on subnet 192.168.1.0/24 and Device B is on subnet 192.168.2.0/24 - different networks. Even on the same physical switch, devices on different IP subnets cannot communicate directly without a router (Layer 3 device). Each device thinks the other is on a remote network and tries to send traffic to its default gateway. Solutions: (1) Change one device to match the other's subnet, (2) Configure a router with interfaces in both subnets, or (3) Use a Layer 3 switch with SVIs. This is a common misconfiguration - IP addressing must match the subnet design."
  },
  {
    id: 15,
    question: "What is CIDR notation, and what does /25 mean?",
    options: [
      "CIDR is a type of cable, /25 means 25 feet long",
      "Classless Inter-Domain Routing notation - /25 means 25 network bits, leaving 7 host bits (subnet mask 255.255.255.128)",
      "CIDR is a wireless protocol",
      "/25 means 25 megabits per second"
    ],
    correct: 1,
    explanation: "CIDR (Classless Inter-Domain Routing) notation uses a slash followed by the number of network bits. /25 means 25 bits are network, leaving 7 bits for hosts (32 total bits in IPv4). Subnet mask: 255.255.255.128 (binary: 11111111.11111111.11111111.10000000). This provides 2^7 - 2 = 126 usable hosts. CIDR replaced the old classful system (Class A, B, C) allowing more flexible network design. Common notations: /24 = 255.255.255.0, /16 = 255.255.0.0, /8 = 255.0.0.0. CIDR is the modern standard for expressing subnet masks and is essential knowledge for networking."
  }
];