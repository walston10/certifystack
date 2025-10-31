// Flashcards for Lesson 5: Subnetting Fundamentals

export const lesson5Flashcards = [
  {
    id: 1,
    front: "What are the four main reasons organizations subnet networks?",
    back: "1) Security and isolation (separate departments/VLANs), 2) Performance (reduce broadcast domains), 3) Organization (logical IP structure by department/floor), 4) Efficient IP usage (right-size networks instead of wasting addresses)."
  },
  {
    id: 2,
    front: "What is the Magic Number formula?",
    back: "Magic Number = 256 - (interesting octet value). The interesting octet is the last subnet mask octet that isn't 255 or 0. Example: For mask 255.255.255.192, the magic number is 256 - 192 = 64."
  },
  {
    id: 3,
    front: "What does the Magic Number tell you?",
    back: "The magic number is your subnet increment—the 'jump' or spacing between network addresses. Count by the magic number to find each network address. Example: Magic number 64 means networks start at .0, .64, .128, .192."
  },
  {
    id: 4,
    front: "How many bits must you borrow to create 4 subnets?",
    back: "2 bits. Use formula 2^N = subnets. 2^2 = 4 subnets exactly. Borrowing 2 bits from /24 gives /26. Each subnet will have 6 host bits remaining, providing 62 usable hosts per subnet."
  },
  {
    id: 5,
    front: "How many bits must you borrow to create 8 subnets?",
    back: "3 bits. Formula: 2^3 = 8 subnets. Borrowing 3 bits from /24 gives /27 (mask 255.255.255.224). Each subnet will have 5 host bits, providing 30 usable hosts per subnet."
  },
  {
    id: 6,
    front: "If you divide 192.168.1.0/24 into 2 subnets, what are the network addresses?",
    back: "192.168.1.0 and 192.168.1.128. Borrow 1 bit to create 2 subnets (/25, mask 255.255.255.128). Magic number = 256 - 128 = 128. Count: .0, .128. Each subnet has 126 usable hosts."
  },
  {
    id: 7,
    front: "What is the magic number for /26 (255.255.255.192)?",
    back: "64. Calculation: 256 - 192 = 64. This means network addresses are spaced 64 apart: .0, .64, .128, .192. Each subnet contains 64 total IPs (62 usable hosts)."
  },
  {
    id: 8,
    front: "What is the magic number for /27 (255.255.255.224)?",
    back: "32. Calculation: 256 - 224 = 32. Network addresses: .0, .32, .64, .96, .128, .160, .192, .224. Each subnet contains 32 total IPs (30 usable hosts)."
  },
  {
    id: 9,
    front: "How do you calculate the broadcast address of a subnet?",
    back: "Broadcast address = Next network address - 1. Example: If your network is .64 and the next network is .128, then broadcast = 128 - 1 = .127. The broadcast is always the last IP in the subnet."
  },
  {
    id: 10,
    front: "How do you find the first usable host address?",
    back: "First usable host = Network address + 1. Example: If network is 192.168.1.0, first usable is 192.168.1.1. This is typically assigned to the default gateway (router). The network address itself cannot be assigned to a device."
  },
  {
    id: 11,
    front: "How do you find the last usable host address?",
    back: "Last usable host = Broadcast address - 1. Example: If broadcast is 192.168.1.255, last usable is 192.168.1.254. The broadcast address itself cannot be assigned to a device—it's reserved for sending to all hosts."
  },
  {
    id: 12,
    front: "What does 'borrowing bits' mean in subnetting?",
    back: "Borrowing bits means taking bits from the host portion and adding them to the network portion to create more subnets. Example: /24 has 8 host bits. Borrow 2 bits → 10 network bits in last octet → /26 with 6 host bits remaining."
  },
  {
    id: 13,
    front: "If you borrow 1 bit from a /24, what do you get?",
    back: "/25 with 2 subnets. New mask: 255.255.255.128. Magic number: 128. Network addresses: .0 and .128. Each subnet has 7 host bits = 126 usable hosts (2^7 - 2)."
  },
  {
    id: 14,
    front: "If you borrow 2 bits from a /24, what do you get?",
    back: "/26 with 4 subnets. New mask: 255.255.255.192. Magic number: 64. Network addresses: .0, .64, .128, .192. Each subnet has 6 host bits = 62 usable hosts (2^6 - 2)."
  },
  {
    id: 15,
    front: "If you borrow 3 bits from a /24, what do you get?",
    back: "/27 with 8 subnets. New mask: 255.255.255.224. Magic number: 32. Network addresses: .0, .32, .64, .96, .128, .160, .192, .224. Each subnet has 5 host bits = 30 usable hosts (2^5 - 2)."
  },
  {
    id: 16,
    front: "You need 12 subnets. How many bits should you borrow?",
    back: "4 bits. Check: 2^3 = 8 (not enough), 2^4 = 16 (enough!). Always round UP to the next power of 2. You'll create 16 subnets and use 12 of them, wasting 4. This is normal for equal-sized subnetting."
  },
  {
    id: 17,
    front: "Quick! Divide 10.0.5.0/24 into 4 subnets. What's the third network address?",
    back: "10.0.5.128. Borrow 2 bits → /26, magic number 64. Networks: .0, .64, .128 (third), .192. The third subnet is 10.0.5.128/26 with range .129-.190, broadcast .191."
  },
  {
    id: 18,
    front: "In subnet 192.168.10.0/26, what is the broadcast address?",
    back: "192.168.10.63. Magic number for /26 is 64. Next network is .64. Broadcast = 64 - 1 = .63. Complete subnet: Network .0, Range .1-.62, Broadcast .63."
  },
  {
    id: 19,
    front: "In subnet 172.16.50.64/26, what is the usable range?",
    back: "172.16.50.65 to 172.16.50.126. Network is .64, next network is .128, so broadcast is .127. First usable = .64 + 1 = .65. Last usable = .127 - 1 = .126."
  },
  {
    id: 20,
    front: "IP address 192.168.1.100 is on a /26 network. Which subnet does it belong to?",
    back: "192.168.1.64/26. Magic number = 64. Count: .0, .64, .128, .192. The IP .100 falls between .64 and .128, so it belongs to the subnet starting at .64 (range .65-.126)."
  },
  {
    id: 21,
    front: "Common mistake: Can you assign 192.168.1.0 to a host in network 192.168.1.0/26?",
    back: "No! 192.168.1.0 is the network address (all host bits = 0) and is reserved. It cannot be assigned to a device. The first usable host is .1. Using the network address will cause addressing conflicts."
  },
  {
    id: 22,
    front: "Common mistake: Can you assign 192.168.1.255 to a host in network 192.168.1.192/26?",
    back: "No! 192.168.1.255 is the broadcast address (all host bits = 1) for this subnet. It's reserved for sending to all devices. The last usable host is .254. Using broadcast will cause network issues."
  },
  {
    id: 23,
    front: "What's the relationship between borrowed bits and number of subnets?",
    back: "Number of subnets = 2^(borrowed bits). Borrow 1 bit = 2 subnets, 2 bits = 4 subnets, 3 bits = 8 subnets, 4 bits = 16 subnets, etc. Each additional borrowed bit doubles the number of subnets."
  },
  {
    id: 24,
    front: "What's the trade-off when you borrow more bits?",
    back: "More subnets = fewer hosts per subnet. Borrowing bits creates more network portions but reduces host bits. Example: /24 has 254 hosts. /25 has 2 subnets with 126 hosts each. /26 has 4 subnets with 62 hosts each."
  },
  {
    id: 25,
    front: "Subnetting quick reference: From /24, how do you get 2 subnets?",
    back: "Borrow 1 bit → /25. Mask: 255.255.255.128. Magic number: 128. Networks: .0, .128. Hosts per subnet: 126."
  },
  {
    id: 26,
    front: "Subnetting quick reference: From /24, how do you get 4 subnets?",
    back: "Borrow 2 bits → /26. Mask: 255.255.255.192. Magic number: 64. Networks: .0, .64, .128, .192. Hosts per subnet: 62."
  },
  {
    id: 27,
    front: "Subnetting quick reference: From /24, how do you get 8 subnets?",
    back: "Borrow 3 bits → /27. Mask: 255.255.255.224. Magic number: 32. Networks: .0, .32, .64, .96, .128, .160, .192, .224. Hosts per subnet: 30."
  },
  {
    id: 28,
    front: "Why do broadcasts affect network performance?",
    back: "Every device on a network receives and must process broadcast traffic (ARP, DHCP, service announcements). With 254 devices on one subnet, that's heavy traffic. Subnetting divides into smaller broadcast domains, reducing unnecessary processing and improving performance."
  },
  {
    id: 29,
    front: "How does subnetting improve security?",
    back: "Subnetting creates isolated network segments. You can place firewalls between subnets to control traffic flow. Example: Separate Finance (sensitive data) from Guest WiFi (untrusted). Devices in different subnets can't communicate directly without going through a router."
  },
  {
    id: 30,
    front: "Speed drill: What's the magic number for these masks? 255.255.255.128, .192, .224, .240, .248, .252",
    back: "128→128, 192→64, 224→32, 240→16, 248→8, 252→4. Pattern: Each is half the previous. Memorize this sequence for instant subnet calculations on the exam!"
  }
];