export const lesson4Quiz = [
  {
    id: 1,
    question: "What is the dotted decimal equivalent of /27?",
    options: [
      "255.255.255.224",
      "255.255.255.240",
      "255.255.255.192",
      "255.255.255.248"
    ],
    correct: 0,
    explanation: "The answer is 255.255.255.224. /27 means 27 network bits. In binary: 11111111.11111111.11111111.11100000. The last octet (11100000) equals 128 + 64 + 32 = 224. This subnet mask provides 5 host bits, giving 30 usable hosts (2^5 - 2 = 32 - 2 = 30)."
  },
  {
    id: 2,
    question: "How many usable hosts are in a /26 network?",
    options: [
      "30 usable hosts",
      "62 usable hosts",
      "126 usable hosts",
      "254 usable hosts"
    ],
    correct: 1,
    explanation: "/26 has 6 host bits (32 - 26 = 6). Using the formula 2^6 - 2 = 64 - 2 = 62 usable hosts. The subnet mask is 255.255.255.192. Total IPs = 64, but we subtract 2 for the network address and broadcast address, leaving 62 usable IPs for devices."
  },
  {
    id: 3,
    question: "What is the CIDR notation for subnet mask 255.255.255.248?",
    options: [
      "/27",
      "/28",
      "/29",
      "/30"
    ],
    correct: 2,
    explanation: "The answer is /29. Convert to binary: 11111111.11111111.11111111.11111000. Count the 1s: 8 + 8 + 8 + 5 = 29 network bits. The last octet (11111000) = 128 + 64 + 32 + 16 + 8 = 248. This provides 3 host bits and 6 usable hosts (2^3 - 2 = 8 - 2 = 6)."
  },
  {
    id: 4,
    question: "In the network 192.168.5.0/24, what is the broadcast address?",
    options: [
      "192.168.5.0",
      "192.168.5.1",
      "192.168.5.254",
      "192.168.5.255"
    ],
    correct: 3,
    explanation: "The broadcast address is 192.168.5.255. In a /24 network, the first three octets are network bits (192.168.5) and the last octet is for hosts. The broadcast address has all host bits set to 1, which equals 255 in decimal. This address is reserved and used to send packets to all devices on the subnet."
  },
  {
    id: 5,
    question: "Why do we subtract 2 when calculating usable hosts?",
    options: [
      "Because the first IP (network address) and last IP (broadcast address) are reserved",
      "To account for the default gateway and DNS server",
      "To reserve space for DHCP servers",
      "To prevent IP address conflicts"
    ],
    correct: 0,
    explanation: "We subtract 2 because every subnet has two reserved addresses that cannot be assigned to devices. The first IP (all host bits = 0) is the network address, which identifies the subnet itself and appears in routing tables. The last IP (all host bits = 1) is the broadcast address, used to send packets to all devices on the subnet. Only addresses between these two can be assigned to actual hosts."
  },
  {
    id: 6,
    question: "A /30 network has how many total IP addresses and usable hosts?",
    options: [
      "2 total IPs, 0 usable hosts",
      "4 total IPs, 2 usable hosts",
      "4 total IPs, 4 usable hosts",
      "8 total IPs, 6 usable hosts"
    ],
    correct: 1,
    explanation: "/30 has 2 host bits (32 - 30 = 2). Total IPs = 2^2 = 4. Usable hosts = 4 - 2 = 2 (subtracting network and broadcast). For example, in 10.1.1.0/30: .0 = network, .1 = first usable (Router A), .2 = second usable (Router B), .3 = broadcast. This is the most efficient mask for point-to-point WAN links between two routers."
  },
  {
    id: 7,
    question: "What is the first usable host in the network 10.50.20.0/24?",
    options: [
      "10.50.20.0",
      "10.50.20.1",
      "10.50.20.2",
      "10.50.20.255"
    ],
    correct: 1,
    explanation: "The first usable host is 10.50.20.1. The network address (10.50.20.0) is the first IP but is reserved and cannot be assigned to a device. The first usable host is always network address + 1. This IP is commonly assigned to the default gateway (router). The last usable would be 10.50.20.254, and the broadcast is 10.50.20.255."
  },
  {
    id: 8,
    question: "What does the '24' represent in the notation 192.168.1.0/24?",
    options: [
      "The number of usable hosts in the network",
      "The fourth octet value",
      "The number of subnets that can be created",
      "The number of network bits (subnet mask length)"
    ],
    correct: 3,
    explanation: "The /24 represents the number of network bits (prefix length). It means the first 24 bits of the 32-bit IP address are used for the network portion, leaving 8 bits for hosts. This is equivalent to the subnet mask 255.255.255.0. The number of usable hosts would be 254 (2^8 - 2), not 24."
  },
  {
    id: 9,
    question: "Which subnet mask would you use for a point-to-point WAN link between two routers?",
    options: [
      "255.255.255.0 (/24)",
      "255.255.255.240 (/28)",
      "255.255.255.248 (/29)",
      "255.255.255.252 (/30)"
    ],
    correct: 3,
    explanation: "255.255.255.252 (/30) is the correct choice. This mask provides exactly 2 usable hosts, which is perfect for a point-to-point link between two routers—one IP for each router. Using a larger subnet would waste IP addresses. For example: network = .0, Router A = .1, Router B = .2, broadcast = .3."
  },
  {
    id: 10,
    question: "How many host bits are in a /28 network?",
    options: [
      "4 host bits",
      "6 host bits",
      "8 host bits",
      "16 host bits"
    ],
    correct: 0,
    explanation: "4 host bits. Calculate: 32 total bits - 28 network bits = 4 host bits. These 4 host bits provide 14 usable hosts (2^4 - 2 = 16 - 2 = 14). The subnet mask is 255.255.255.240. This is good for small departments or VLANs with limited devices."
  },
  {
    id: 11,
    question: "What is the purpose of binary ANDing in networking?",
    options: [
      "To encrypt IP addresses for security",
      "To determine the network address from an IP and subnet mask",
      "To convert decimal IP addresses to binary",
      "To calculate the number of usable hosts"
    ],
    correct: 1,
    explanation: "Binary ANDing is used to determine the network address. The computer ANDs the IP address with the subnet mask—the result is 1 only when both bits are 1. This operation extracts the network portion of the IP address, which helps the computer determine if another device is on the local network or needs to be reached through a router."
  },
  {
    id: 12,
    question: "Convert the subnet mask 255.255.255.192 to CIDR notation.",
    options: [
      "/24",
      "/25",
      "/26",
      "/27"
    ],
    correct: 2,
    explanation: "The answer is /26. Convert to binary: 11111111.11111111.11111111.11000000. Count all the 1s: 8 + 8 + 8 + 2 = 26 network bits. The last octet (11000000) = 128 + 64 = 192. This provides 6 host bits and 62 usable hosts (2^6 - 2)."
  },
  {
    id: 13,
    question: "In network 172.16.50.0/27, how many usable IP addresses are available for hosts?",
    options: [
      "14",
      "30",
      "62",
      "126"
    ],
    correct: 1,
    explanation: "30 usable hosts. /27 has 5 host bits (32 - 27 = 5). Formula: 2^5 - 2 = 32 - 2 = 30. The subnet mask is 255.255.255.224. Total IPs = 32, minus the network address (.0) and broadcast address (.31), leaving 30 addresses that can be assigned to devices (.1 through .30)."
  },
  {
    id: 14,
    question: "Which statement about subnet masks is TRUE?",
    options: [
      "All 1s must be contiguous on the left, and all 0s must be contiguous on the right",
      "Subnet masks can have 1s and 0s mixed in any order",
      "Subnet masks are 64 bits long in IPv4",
      "Subnet masks only work with Class C addresses"
    ],
    correct: 0,
    explanation: "All 1s must be contiguous (grouped together) on the left, and all 0s must be contiguous on the right. This is the golden rule of subnet masks. You cannot mix 1s and 0s. Valid example: 11111111.11111111.11110000.00000000. Invalid example: 11110011.11000111.00000000.00000000. Subnet masks are 32 bits (not 64) and work with all address classes."
  },
  {
    id: 15,
    question: "What was the primary reason CIDR was created?",
    options: [
      "To make IP addresses easier to remember",
      "To increase network security",
      "To allow more flexible subnet sizing and reduce address waste",
      "To replace IPv4 with IPv6"
    ],
    correct: 2,
    explanation: "CIDR was created to allow more flexible subnet sizing and reduce address waste. Before CIDR (pre-1993), networks were stuck with /8 (Class A), /16 (Class B), or /24 (Class C). If you needed 500 hosts, you had to use a /16 with 65,534 addresses, wasting 65,034 IPs. CIDR allows any prefix length (/1 to /32), so you can use /23 (510 hosts) for much more efficient allocation."
  }
];
