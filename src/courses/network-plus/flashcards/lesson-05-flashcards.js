// Flashcards for Lesson 5: Subnetting Fundamentals

export const lesson5Flashcards = [
  {
    id: 1,
    front: "Four reasons to subnet?",
    back: "1) Security/isolation, 2) Performance (reduce broadcasts), 3) Organization (logical structure), 4) Efficient IP usage."
  },
  {
    id: 2,
    front: "Magic Number formula?",
    back: "256 - (interesting octet value). Interesting octet = last mask octet that isn't 255 or 0. Example: 255.255.255.192 → 256-192 = 64."
  },
  {
    id: 3,
    front: "What does Magic Number tell you?",
    back: "Subnet increment—spacing between network addresses. Count by magic number. Example: 64 means networks at .0, .64, .128, .192."
  },
  {
    id: 4,
    front: "Borrow how many bits for 4 subnets?",
    back: "2 bits. 2^2 = 4. From /24 → /26. 6 host bits remain = 62 usable hosts per subnet."
  },
  {
    id: 5,
    front: "Borrow how many bits for 8 subnets?",
    back: "3 bits. 2^3 = 8. From /24 → /27 (255.255.255.224). 5 host bits = 30 usable hosts per subnet."
  },
  {
    id: 6,
    front: "192.168.1.0/24 into 2 subnets—network addresses?",
    back: "192.168.1.0 and 192.168.1.128. Borrow 1 bit → /25 (255.255.255.128). Magic number 128. Each has 126 usable hosts."
  },
  {
    id: 7,
    front: "Magic number for /26?",
    back: "64. (256-192=64). Networks at .0, .64, .128, .192. Each subnet = 64 total IPs (62 usable)."
  },
  {
    id: 8,
    front: "Magic number for /27?",
    back: "32. (256-224=32). Networks at .0, .32, .64, .96, .128, .160, .192, .224. Each = 32 IPs (30 usable)."
  },
  {
    id: 9,
    front: "How calculate broadcast address?",
    back: "Next network address - 1. Example: network .64, next .128, broadcast = 127."
  },
  {
    id: 10,
    front: "First usable host?",
    back: "Network address + 1. Example: network 192.168.1.0, first usable 192.168.1.1 (typically gateway)."
  },
  {
    id: 11,
    front: "Last usable host?",
    back: "Broadcast address - 1. Example: broadcast 192.168.1.255, last usable 192.168.1.254."
  },
  {
    id: 12,
    front: "What is 'borrowing bits'?",
    back: "Taking bits from host portion, adding to network portion to create more subnets. Example: /24 borrow 2 → /26."
  },
  {
    id: 13,
    front: "Borrow 1 bit from /24?",
    back: "/25, 2 subnets, 255.255.255.128, magic 128. Networks: .0, .128. 126 usable hosts each."
  },
  {
    id: 14,
    front: "Borrow 2 bits from /24?",
    back: "/26, 4 subnets, 255.255.255.192, magic 64. Networks: .0, .64, .128, .192. 62 usable each."
  },
  {
    id: 15,
    front: "Borrow 3 bits from /24?",
    back: "/27, 8 subnets, 255.255.255.224, magic 32. Networks: .0, .32, .64, .96, .128, .160, .192, .224. 30 usable each."
  },
  {
    id: 16,
    front: "Need 12 subnets—borrow how many bits?",
    back: "4 bits. 2^3=8 (not enough), 2^4=16 (enough). Always round up to next power of 2. Create 16, use 12."
  },
  {
    id: 17,
    front: "10.0.5.0/24 into 4 subnets—third network?",
    back: "10.0.5.128. /26, magic 64. Networks: .0, .64, .128 (third), .192."
  },
  {
    id: 18,
    front: "192.168.10.0/26 broadcast address?",
    back: "192.168.10.63. Magic 64, next network .64, broadcast = 64-1 = .63."
  },
  {
    id: 19,
    front: "172.16.50.64/26 usable range?",
    back: "172.16.50.65 to 172.16.50.126. Network .64, next .128, broadcast .127. Usable: .65-.126."
  },
  {
    id: 20,
    front: "192.168.1.100 on /26—which subnet?",
    back: "192.168.1.64/26. Magic 64. Count: .0, .64, .128, .192. IP .100 falls in .64-.127 range."
  },
  {
    id: 21,
    front: "Can assign 192.168.1.0 to host in 192.168.1.0/26?",
    back: "No! Network address (all host bits=0) is reserved. First usable is .1. Using it causes conflicts."
  },
  {
    id: 22,
    front: "Can assign 192.168.1.255 to host in 192.168.1.192/26?",
    back: "No! Broadcast address (all host bits=1) is reserved. Last usable is .254. Using it causes issues."
  },
  {
    id: 23,
    front: "Borrowed bits vs subnets relationship?",
    back: "Subnets = 2^(borrowed bits). 1 bit=2, 2 bits=4, 3 bits=8, 4 bits=16. Each bit doubles subnets."
  },
  {
    id: 24,
    front: "Trade-off borrowing more bits?",
    back: "More subnets = fewer hosts per subnet. /24=254 hosts. /25=2 subnets, 126 each. /26=4 subnets, 62 each."
  },
  {
    id: 25,
    front: "/24 to 2 subnets?",
    back: "Borrow 1 → /25. 255.255.255.128. Magic 128. Networks: .0, .128. 126 hosts each."
  },
  {
    id: 26,
    front: "/24 to 4 subnets?",
    back: "Borrow 2 → /26. 255.255.255.192. Magic 64. Networks: .0, .64, .128, .192. 62 hosts each."
  },
  {
    id: 27,
    front: "/24 to 8 subnets?",
    back: "Borrow 3 → /27. 255.255.255.224. Magic 32. Networks: .0, .32, .64, .96, .128, .160, .192, .224. 30 hosts each."
  },
  {
    id: 28,
    front: "Why broadcasts affect performance?",
    back: "Every device receives and processes broadcasts (ARP, DHCP). 254 devices = heavy traffic. Subnetting creates smaller broadcast domains."
  },
  {
    id: 29,
    front: "How subnetting improves security?",
    back: "Creates isolated segments. Place firewalls between subnets. Example: Finance separated from Guest WiFi. Different subnets need router to communicate."
  },
  {
    id: 30,
    front: "Magic numbers for: .128, .192, .224, .240, .248, .252?",
    back: "128, 64, 32, 16, 8, 4. Each is half the previous. Memorize for instant calculations!"
  }
];

export default lesson5Flashcards;