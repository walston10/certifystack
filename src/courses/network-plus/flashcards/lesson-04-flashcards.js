// Flashcards for Lesson 4: Subnet Masks and CIDR Notation

export const lesson4Flashcards = [
  {
    id: 1,
    front: "What is a subnet mask?",
    back: "32-bit number dividing IP into network and host portions. Binary: 1s = network, 0s = host."
  },
  {
    id: 2,
    front: "Convert /24 to dotted decimal",
    back: "255.255.255.0. 24 network bits (three full octets of 1s), 8 host bits. 254 usable hosts."
  },
  {
    id: 3,
    front: "Convert /26 to dotted decimal",
    back: "255.255.255.192. 26 network bits. Last octet: 11000000 = 128+64 = 192. 62 usable hosts."
  },
  {
    id: 4,
    front: "Convert /30 to dotted decimal",
    back: "255.255.255.252. 30 network bits. Last octet: 11111100 = 252. 2 usable hosts (point-to-point links)."
  },
  {
    id: 5,
    front: "What is CIDR notation?",
    back: "Classless Inter-Domain Routing - slash + number of network bits. Example: /24. Allows flexible subnetting beyond Class A/B/C."
  },
  {
    id: 6,
    front: "Formula for usable hosts?",
    back: "2^(host bits) - 2. Subtract 2 for network and broadcast addresses."
  },
  {
    id: 7,
    front: "/24 usable hosts?",
    back: "254. 8 host bits. 2^8 - 2 = 256 - 2 = 254. Standard Class C size."
  },
  {
    id: 8,
    front: "/27 usable hosts?",
    back: "30. 5 host bits. 2^5 - 2 = 32 - 2 = 30. Mask: 255.255.255.224."
  },
  {
    id: 9,
    front: "/30 usable hosts?",
    back: "2. 2 host bits. 2^2 - 2 = 4 - 2 = 2. Perfect for router-to-router WAN links. Mask: 255.255.255.252."
  },
  {
    id: 10,
    front: "Convert 255.255.255.240 to CIDR",
    back: "/28. Binary: 11111111.11111111.11111111.11110000. Count 1s: 28. 14 usable hosts."
  },
  {
    id: 11,
    front: "What is the network address?",
    back: "First IP where all host bits = 0. Identifies network, can't be assigned. Example: 192.168.1.0 in /24. Used in routing tables."
  },
  {
    id: 12,
    front: "What is the broadcast address?",
    back: "Last IP where all host bits = 1. Sends to ALL devices, can't be assigned. Example: 192.168.1.255 in /24."
  },
  {
    id: 13,
    front: "First usable host address?",
    back: "Network address + 1. First assignable IP, commonly the gateway. Example: 192.168.1.1 in /24."
  },
  {
    id: 14,
    front: "Last usable host address?",
    back: "Broadcast address - 1. Last assignable IP. Example: 192.168.1.254 in /24 (broadcast .255)."
  },
  {
    id: 15,
    front: "192.168.10.0/24 - identify all four addresses",
    back: "Network: .0, First usable: .1, Last usable: .254, Broadcast: .255. Total 256 IPs, 254 usable."
  },
  {
    id: 16,
    front: "What is binary ANDing?",
    back: "Logical operation to find network address. AND returns 1 only when BOTH bits are 1. Computer ANDs IP with mask to determine if device is local or remote."
  },
  {
    id: 17,
    front: "What does 'contiguous' mean in masks?",
    back: "All 1s grouped left, all 0s grouped right. Can't mix. Valid: 11111111.11110000... Invalid: 11110011.11000111..."
  },
  {
    id: 18,
    front: "/26 network vs host bits?",
    back: "26 network bits, 6 host bits. Network + host = 32 total. 62 usable hosts (2^6 - 2)."
  },
  {
    id: 19,
    front: "Class A default mask?",
    back: "255.0.0.0 (/8). First octet = network (N.H.H.H). 16+ million usable hosts. Example: 10.0.0.0/8."
  },
  {
    id: 20,
    front: "Class B default mask?",
    back: "255.255.0.0 (/16). First two octets = network (N.N.H.H). 65,534 usable hosts. Example: 172.16.0.0/16."
  },
  {
    id: 21,
    front: "Class C default mask?",
    back: "255.255.255.0 (/24). First three octets = network (N.N.N.H). 254 usable hosts. Example: 192.168.1.0/24."
  },
  {
    id: 22,
    front: "/28 usable hosts?",
    back: "14. 4 host bits. 2^4 - 2 = 16 - 2 = 14. Mask: 255.255.255.240."
  },
  {
    id: 23,
    front: "/26 usable hosts?",
    back: "62. 6 host bits. 2^6 - 2 = 64 - 2 = 62. Mask: 255.255.255.192."
  },
  {
    id: 24,
    front: "Why was CIDR created?",
    back: "Pre-CIDR: only /8, /16, /24 (wasteful). CIDR allows any prefix (/1-/32) for efficient allocation. Example: need 500 hosts? Use /23 instead of wasteful /16."
  },
  {
    id: 25,
    front: "Point-to-point router link subnet?",
    back: "/30 (255.255.255.252). Exactly 2 usable hosts. Network .0, Router A .1, Router B .2, Broadcast .3. Most efficient for WAN."
  },
  {
    id: 26,
    front: "Convert 255.255.255.224 to CIDR",
    back: "/27. Binary: 11111111.11111111.11111111.11100000. Count 1s: 27. Last octet: 224 (128+64+32). 30 usable hosts."
  },
  {
    id: 27,
    front: "/24 = ?",
    back: "255.255.255.0 (last octet 0). 254 usable. Most common—home/small office networks."
  },
  {
    id: 28,
    front: "/27 = ?",
    back: "255.255.255.224 (last octet 224). 30 usable. Binary: 11100000 = 128+64+32."
  },
  {
    id: 29,
    front: "/29 = ?",
    back: "255.255.255.248 (last octet 248). 6 usable. Binary: 11111000 = 128+64+32+16+8."
  },
  {
    id: 30,
    front: "Speed trick: halve usable hosts?",
    back: "Add 1 to CIDR. /24 (254) → /25 (126) → /26 (62) → /27 (30) → /28 (14) → /29 (6) → /30 (2)."
  }
];

export default lesson4Flashcards;