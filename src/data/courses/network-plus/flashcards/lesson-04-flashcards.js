// Flashcards for Lesson 4: Subnet Masks and CIDR Notation

export const lesson4Flashcards = [
  {
    id: 1,
    front: "What is a subnet mask?",
    back: "A 32-bit number that divides an IP address into network and host portions. It tells a computer where the network portion ends and the host portion begins. In binary, 1s represent the network portion and 0s represent the host portion."
  },
  {
    id: 2,
    front: "Convert /24 to dotted decimal notation",
    back: "255.255.255.0. The /24 means 24 network bits (three full octets of 1s), leaving 8 host bits (one octet of 0s). This is the most common subnet mask and provides 254 usable hosts."
  },
  {
    id: 3,
    front: "Convert /26 to dotted decimal notation",
    back: "255.255.255.192. The /26 means 26 network bits. In binary: 11111111.11111111.11111111.11000000. The last octet (11000000) equals 128 + 64 = 192. Provides 62 usable hosts."
  },
  {
    id: 4,
    front: "Convert /30 to dotted decimal notation",
    back: "255.255.255.252. The /30 means 30 network bits. In binary: 11111111.11111111.11111111.11111100. The last octet (11111100) equals 128 + 64 + 32 + 16 + 8 + 4 = 252. Provides only 2 usable hosts, perfect for point-to-point links."
  },
  {
    id: 5,
    front: "What is CIDR notation?",
    back: "Classless Inter-Domain Routing notation - a shorthand way to write subnet masks using a slash followed by the number of network bits. Example: /24 means 24 network bits. Allows flexible subnet sizing beyond traditional Class A/B/C boundaries."
  },
  {
    id: 6,
    front: "What is the formula for calculating usable hosts?",
    back: "Usable Hosts = 2^(host bits) - 2. We use 2^(host bits) because each bit can be 0 or 1. We subtract 2 because the first IP (network address) and last IP (broadcast address) are reserved and cannot be assigned to devices."
  },
  {
    id: 7,
    front: "How many usable hosts in a /24 network?",
    back: "254 usable hosts. /24 has 8 host bits (32 - 24 = 8). Calculation: 2^8 - 2 = 256 - 2 = 254. This is the standard Class C network size, with 256 total IPs minus network and broadcast addresses."
  },
  {
    id: 8,
    front: "How many usable hosts in a /27 network?",
    back: "30 usable hosts. /27 has 5 host bits (32 - 27 = 5). Calculation: 2^5 - 2 = 32 - 2 = 30. The subnet mask is 255.255.255.224. Good for medium-sized departments."
  },
  {
    id: 9,
    front: "How many usable hosts in a /30 network?",
    back: "2 usable hosts. /30 has 2 host bits (32 - 30 = 2). Calculation: 2^2 - 2 = 4 - 2 = 2. Perfect for point-to-point WAN links between two routers. The subnet mask is 255.255.255.252."
  },
  {
    id: 10,
    front: "Convert 255.255.255.240 to CIDR notation",
    back: "/28. Convert to binary: 11111111.11111111.11111111.11110000. Count the 1s: 8 + 8 + 8 + 4 = 28 network bits. This provides 14 usable hosts (16 total IPs - 2)."
  },
  {
    id: 11,
    front: "What is the network address?",
    back: "The first IP address in a subnet where all host bits are 0. It identifies the network itself and cannot be assigned to a device. Example: In 192.168.1.0/24, the network address is 192.168.1.0. Used in routing tables."
  },
  {
    id: 12,
    front: "What is the broadcast address?",
    back: "The last IP address in a subnet where all host bits are 1. Used to send data to ALL devices on the network simultaneously. Cannot be assigned to a device. Example: In 192.168.1.0/24, broadcast is 192.168.1.255."
  },
  {
    id: 13,
    front: "What is the first usable host address?",
    back: "The network address + 1. This is the first IP that can be assigned to an actual device. It's commonly given to the default gateway (router). Example: In 192.168.1.0/24, the first usable is 192.168.1.1."
  },
  {
    id: 14,
    front: "What is the last usable host address?",
    back: "The broadcast address - 1. This is the last IP that can be assigned to a device. Example: In 192.168.1.0/24, the last usable is 192.168.1.254 (broadcast is .255, so last usable is .254)."
  },
  {
    id: 15,
    front: "In network 192.168.10.0/24, identify all four key addresses",
    back: "Network: 192.168.10.0, First usable: 192.168.10.1, Last usable: 192.168.10.254, Broadcast: 192.168.10.255. Total IPs = 256, Usable hosts = 254."
  },
  {
    id: 16,
    front: "What is binary ANDing?",
    back: "A logical operation used by computers to determine the network address. Binary AND returns 1 only when BOTH bits are 1, otherwise 0. The computer ANDs the IP address with the subnet mask to extract the network portion and determine if another device is local or remote."
  },
  {
    id: 17,
    front: "What does 'contiguous' mean in subnet masks?",
    back: "All the 1s in a subnet mask must be grouped together on the left, and all the 0s must be grouped on the right. You cannot mix them. Valid: 11111111.11110000.00000000.00000000. Invalid: 11110011.11000111.00000000.00000000."
  },
  {
    id: 18,
    front: "How many network bits vs host bits in /26?",
    back: "26 network bits, 6 host bits. Network bits + host bits always equals 32 (total IPv4 address bits). Calculation: 32 - 26 = 6 host bits. This gives 62 usable hosts (2^6 - 2)."
  },
  {
    id: 19,
    front: "What's the default subnet mask for Class A?",
    back: "255.0.0.0 (/8). This uses only the first octet for the network (N.H.H.H pattern). Provides over 16 million usable hosts per network. Example: 10.0.0.0/8 is the entire 10.x.x.x private range."
  },
  {
    id: 20,
    front: "What's the default subnet mask for Class B?",
    back: "255.255.0.0 (/16). This uses the first two octets for network (N.N.H.H pattern). Provides 65,534 usable hosts per network. Example: 172.16.0.0/16 uses all of 172.16.x.x address space."
  },
  {
    id: 21,
    front: "What's the default subnet mask for Class C?",
    back: "255.255.255.0 (/24). This uses the first three octets for network (N.N.N.H pattern). Provides 254 usable hosts. Example: 192.168.1.0/24 is a standard home/small office network."
  },
  {
    id: 22,
    front: "Quick! How many usable hosts in /28?",
    back: "14 usable hosts. /28 has 4 host bits (32 - 28). Formula: 2^4 - 2 = 16 - 2 = 14. Subnet mask is 255.255.255.240. Good for small departments or VLANs."
  },
  {
    id: 23,
    front: "Quick! How many usable hosts in /26?",
    back: "62 usable hosts. /26 has 6 host bits (32 - 26). Formula: 2^6 - 2 = 64 - 2 = 62. Subnet mask is 255.255.255.192. Good for larger departments or networks."
  },
  {
    id: 24,
    front: "Why was CIDR created?",
    back: "Before CIDR (early 1990s), we could only use /8 (Class A), /16 (Class B), or /24 (Class C). This was wasteful - if you needed 500 hosts, you had to use a /16 with 65,534 hosts. CIDR allows any prefix length (/1 to /32) for efficient address allocation."
  },
  {
    id: 25,
    front: "What subnet mask is used for point-to-point router links?",
    back: "/30 (255.255.255.252). This provides exactly 2 usable hosts, perfect for connecting two routers. Example: Network .0, Router A = .1, Router B = .2, Broadcast = .3. Most efficient for WAN links."
  },
  {
    id: 26,
    front: "Convert 255.255.255.224 to CIDR",
    back: "/27. In binary: 11111111.11111111.11111111.11100000. Count the 1s: 8 + 8 + 8 + 3 = 27 network bits. Last octet: 11100000 = 128 + 64 + 32 = 224. Provides 30 usable hosts."
  },
  {
    id: 27,
    front: "Memorization drill: /24 = ?",
    back: "255.255.255.0 (last octet = 0). 254 usable hosts. This is the most common subnet you'll encounter - standard for home networks and small offices."
  },
  {
    id: 28,
    front: "Memorization drill: /27 = ?",
    back: "255.255.255.224 (last octet = 224). 30 usable hosts. Binary pattern: 11100000 = 128 + 64 + 32. Good for medium departments."
  },
  {
    id: 29,
    front: "Memorization drill: /29 = ?",
    back: "255.255.255.248 (last octet = 248). 6 usable hosts. Binary pattern: 11111000 = 128 + 64 + 32 + 16 + 8. Used for tiny networks or VLANs with few devices."
  },
  {
    id: 30,
    front: "Speed trick: How to halve usable hosts?",
    back: "Add 1 to the CIDR prefix. Example: /24 = 254 hosts → /25 = 126 hosts (half). Each additional bit cuts hosts in half: /26 = 62, /27 = 30, /28 = 14, /29 = 6, /30 = 2."
  }
];