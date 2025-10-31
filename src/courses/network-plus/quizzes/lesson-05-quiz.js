// Quiz for Lesson 5: Subnetting Fundamentals

export const lesson5Quiz = [
  {
    id: 1,
    question: "You need to divide 192.168.10.0/24 into 8 equal subnets. How many bits must you borrow?",
    options: [
      "2 bits",
      "3 bits",
      "4 bits",
      "8 bits"
    ],
    correct: 1,
    explanation: "You need to borrow 3 bits. Using the formula 2^N = number of subnets: 2^3 = 8 subnets exactly. Borrowing 3 bits from /24 gives you /27 (24 + 3 = 27). The new subnet mask is 255.255.255.224, with a magic number of 32. Each subnet will have 5 host bits remaining, providing 30 usable hosts per subnet (2^5 - 2 = 32 - 2 = 30)."
  },
  {
    id: 2,
    question: "What is the magic number for subnet mask 255.255.255.224?",
    options: [
      "16",
      "24",
      "32",
      "64"
    ],
    correct: 2,
    explanation: "The magic number is 32. Formula: Magic Number = 256 - (interesting octet). The interesting octet is 224, so 256 - 224 = 32. This means network addresses will be spaced 32 apart: .0, .32, .64, .96, .128, .160, .192, .224. This is a /27 subnet mask that creates 8 subnets from a /24 network."
  },
  {
    id: 3,
    question: "If you divide 10.50.100.0/24 into 4 subnets, what is the network address of the second subnet?",
    options: [
      "10.50.100.32",
      "10.50.100.64",
      "10.50.100.128",
      "10.50.100.192"
    ],
    correct: 1,
    explanation: "The second subnet's network address is 10.50.100.64. To create 4 subnets, borrow 2 bits (2^2 = 4), giving /26 with mask 255.255.255.192. Magic number = 256 - 192 = 64. Network addresses are: First = .0, Second = .64, Third = .128, Fourth = .192. Each subnet has 62 usable hosts."
  },
  {
    id: 4,
    question: "In subnet 172.16.20.64/26, what is the broadcast address?",
    options: [
      "172.16.20.63",
      "172.16.20.127",
      "172.16.20.128",
      "172.16.20.255"
    ],
    correct: 1,
    explanation: "The broadcast address is 172.16.20.127. For /26, the magic number is 64. The network starts at .64, so the next network starts at .128. The broadcast is always one less than the next network: 128 - 1 = 127. Complete subnet details: Network .64, First usable .65, Last usable .126, Broadcast .127, with 62 usable hosts."
  },
  {
    id: 5,
    question: "You need to create 20 subnets from a /24 network. How many bits should you borrow?",
    options: [
      "3 bits (creates 8 subnets)",
      "4 bits (creates 16 subnets)",
      "5 bits (creates 32 subnets)",
      "6 bits (creates 64 subnets)"
    ],
    correct: 2,
    explanation: "You should borrow 5 bits, which creates 32 subnets. Check the options: 2^3 = 8 (not enough), 2^4 = 16 (not enough), 2^5 = 32 (enough!). You always round UP to the next power of 2. Borrowing 5 bits from /24 gives /29, which creates 32 subnets with 6 usable hosts each. Yes, you'll have 12 unused subnets, but that's how equal-sized subnetting works."
  },
  {
    id: 6,
    question: "What is the first usable host address in subnet 192.168.5.0/26?",
    options: [
      "192.168.5.0",
      "192.168.5.63",
      "192.168.5.2",
      "192.168.5.1"
    ],
    correct: 3,
    explanation: "The first usable host is 192.168.5.1. The network address (.0) is reserved and cannot be assigned to a device. The first usable host is always network address + 1. This address is typically assigned to the default gateway (router). For this /26 subnet, the range is: Network .0, First usable .1, Last usable .62, Broadcast .63."
  },
  {
    id: 7,
    question: "IP address 192.168.1.150 is on a /26 network. Which subnet does it belong to?",
    options: [
      "192.168.1.0/26",
      "192.168.1.64/26",
      "192.168.1.128/26",
      "192.168.1.192/26"
    ],
    correct: 2,
    explanation: "The IP belongs to subnet 192.168.1.128/26. For /26, the magic number is 64. Count by 64: .0, .64, .128, .192. The IP .150 falls between .128 and .192, so it belongs to the subnet starting at .128. This subnet's range is: Network .128, First usable .129, Last usable .190, Broadcast .191."
  },
  {
    id: 8,
    question: "Which of the following is NOT a reason to subnet networks?",
    options: [
      "Security and isolation between departments",
      "Improved performance by reducing broadcast domains",
      "Better organization and IP address management",
      "Increased total number of available IP addresses"
    ],
    correct: 3,
    explanation: "Subnetting does NOT increase the total number of available IP addresses. It divides the existing address space into smaller segments. The other options are valid reasons: subnetting improves security (isolate departments), performance (smaller broadcast domains), and organization (logical IP structure). Subnetting actually slightly reduces usable addresses due to network and broadcast addresses in each subnet."
  },
  {
    id: 9,
    question: "If you borrow 2 bits from a /24 network, how many usable hosts will each subnet have?",
    options: [
      "30 usable hosts",
      "62 usable hosts",
      "126 usable hosts",
      "254 usable hosts"
    ],
    correct: 1,
    explanation: "Each subnet will have 62 usable hosts. Borrowing 2 bits from /24 gives /26. Host bits remaining: 32 - 26 = 6 host bits. Formula: 2^6 - 2 = 64 - 2 = 62 usable hosts per subnet. You created 4 subnets (2^2 = 4), each with 62 hosts, for a total of 248 usable addresses across all subnets (plus 8 reserved for network/broadcast)."
  },
  {
    id: 10,
    question: "What does 'borrowing bits' mean in the context of subnetting?",
    options: [
      "Taking bits from the network portion and adding them to the host portion",
      "Taking bits from the host portion and adding them to the network portion",
      "Temporarily using IP addresses from another subnet",
      "Converting decimal subnet masks to binary"
    ],
    correct: 1,
    explanation: "Borrowing bits means taking bits from the host portion and adding them to the network portion. This creates more network bits (allowing more subnets) but reduces host bits (fewer hosts per subnet). Example: /24 has 24 network bits and 8 host bits. Borrow 2 host bits → /26 with 26 network bits and 6 host bits. This creates 4 subnets instead of 1, but each subnet only has 62 hosts instead of 254."
  },
  {
    id: 11,
    question: "In network 10.0.5.192/27, what is the last usable host address?",
    options: [
      "10.0.5.222",
      "10.0.5.220",
      "10.0.5.223",
      "10.0.5.254"
    ],
    correct: 0,
    explanation: "The last usable host is 10.0.5.222. For /27, magic number = 32. Network is .192, next network is .224. Broadcast = 224 - 1 = .223. Last usable = broadcast - 1 = 223 - 1 = .222. Complete subnet: Network .192, First usable .193, Last usable .222, Broadcast .223, with 30 usable hosts."
  },
  {
    id: 12,
    question: "A technician configures a workstation with IP 192.168.10.0 on network 192.168.10.0/26. What's the problem?",
    options: [
      "The IP is valid and will work correctly",
      "The IP is the broadcast address and cannot be assigned to a host",
      "The IP is the network address and cannot be assigned to a host",
      "The IP is outside the usable range for this subnet"
    ],
    correct: 2,
    explanation: "The IP 192.168.10.0 is the network address (all host bits = 0) and cannot be assigned to a device. Network addresses are reserved and used in routing tables to identify the subnet itself. The first usable host in this subnet is .1, typically assigned to the gateway. Assigning the network address to a host will cause addressing conflicts and connectivity issues."
  },
  {
    id: 13,
    question: "If you divide 172.16.50.0/24 into 2 subnets, what is the subnet mask for each?",
    options: [
      "255.255.255.0",
      "255.255.255.128",
      "255.255.255.192",
      "255.255.255.224"
    ],
    correct: 1,
    explanation: "The subnet mask is 255.255.255.128 (/25). To create 2 subnets, borrow 1 bit (2^1 = 2). /24 + 1 bit = /25. In binary: 11111111.11111111.11111111.10000000 = 255.255.255.128. Magic number = 256 - 128 = 128. The two networks are .0 and .128, each with 126 usable hosts."
  },
  {
    id: 14,
    question: "What is the relationship between the magic number and network addresses?",
    options: [
      "The magic number is added to the subnet mask to find network addresses",
      "The magic number is always the same as the CIDR prefix",
      "The magic number equals the number of usable hosts",
      "The magic number is the spacing between network addresses"
    ],
    correct: 3,
    explanation: "The magic number is the spacing (increment) between network addresses. You count by the magic number to find each subnet's starting address. Example: If magic number = 64, networks are .0, .64, .128, .192 (spaced 64 apart). This makes finding all subnets quick and systematic. The magic number also equals the total number of IP addresses (not usable hosts) in each subnet."
  },
  {
    id: 15,
    question: "You have network 192.168.100.0/24 and need to create subnets for 4 departments with 50 devices each. What subnet mask should you use?",
    options: [
      "/26 (255.255.255.192) - 4 subnets of 62 hosts",
      "/25 (255.255.255.128) - 2 subnets of 126 hosts",
      "/27 (255.255.255.224) - 8 subnets of 30 hosts",
      "/28 (255.255.255.240) - 16 subnets of 14 hosts"
    ],
    correct: 0,
    explanation: "/26 is the best choice. You need 4 subnets (borrow 2 bits) and at least 50 hosts per subnet. /26 creates exactly 4 subnets with 62 usable hosts each, meeting both requirements. /25 only creates 2 subnets (not enough). /27 creates 8 subnets but only 30 hosts each (not enough for 50 devices). /26 provides room for growth beyond 50 devices per department."
  }
];
