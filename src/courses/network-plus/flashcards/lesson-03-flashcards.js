// Flashcards for Lesson 3: IP Addressing Fundamentals

export const lesson3Flashcards = [
  {
    id: 1,
    front: "What is an IPv4 address?",
    back: "32-bit number identifying a device. Dotted decimal: four octets (0-255) separated by periods. Example: 192.168.1.10. Each octet = 8 bits."
  },
  {
    id: 2,
    front: "Powers of 2 for 8-bit octet?",
    back: "128, 64, 32, 16, 8, 4, 2, 1 (left to right). Bit on (1) = count value, off (0) = don't count."
  },
  {
    id: 3,
    front: "Convert 192 to binary",
    back: "11000000. 128+64=192. 1s in 128 and 64 positions, 0s elsewhere."
  },
  {
    id: 4,
    front: "Convert 11111111 to decimal",
    back: "255. All bits on. 128+64+32+16+8+4+2+1=255. Maximum octet value."
  },
  {
    id: 5,
    front: "Class A range?",
    back: "1.0.0.0 to 126.255.255.255, mask 255.0.0.0 (/8). First octet = network, last three = hosts. 16.7M hosts."
  },
  {
    id: 6,
    front: "Class B range?",
    back: "128.0.0.0 to 191.255.255.255, mask 255.255.0.0 (/16). First two octets = network, last two = hosts. 65,534 hosts."
  },
  {
    id: 7,
    front: "Class C range?",
    back: "192.0.0.0 to 223.255.255.255, mask 255.255.255.0 (/24). First three octets = network, last = hosts. 254 hosts."
  },
  {
    id: 8,
    front: "Class D used for?",
    back: "Multicast (224.0.0.0 to 239.255.255.255). One-to-many communication. Not for regular host addressing."
  },
  {
    id: 9,
    front: "What is Class E?",
    back: "Experimental (240.0.0.0 to 255.255.255.255). Reserved for research. Never used in production."
  },
  {
    id: 10,
    front: "Three private IP ranges (RFC 1918)?",
    back: "10.0.0.0/8 (Class A), 172.16.0.0/12 (Class B), 192.168.0.0/16 (Class C). Non-routable on internet, reusable in private networks."
  },
  {
    id: 11,
    front: "Loopback address?",
    back: "127.0.0.1 (or 127.0.0.0/8). Testing/diagnostics. Ping loops back within computer, tests TCP/IP stack."
  },
  {
    id: 12,
    front: "What is APIPA?",
    back: "Automatic Private IP Addressing (169.254.0.0/16). Self-assigned when DHCP fails. Seeing 169.254.x.x indicates DHCP problem."
  },
  {
    id: 13,
    front: "What does 0.0.0.0 mean?",
    back: "Default route, 'any network.' In routing: 0.0.0.0/0 = send here if no specific route. Also: listen on all interfaces."
  },
  {
    id: 14,
    front: "10.50.100.20 - public or private?",
    back: "Private. Falls in 10.0.0.0/8 (RFC 1918). Cannot route on public internet."
  },
  {
    id: 15,
    front: "172.32.1.5 - public or private?",
    back: "Public. Private range is only 172.16.0.0-172.31.255.255. 172.32 is outside, so public."
  },
  {
    id: 16,
    front: "192.168.50.100 - public or private?",
    back: "Private. Falls in 192.168.0.0/16 (RFC 1918 Class C range)."
  },
  {
    id: 17,
    front: "What class is 150.100.50.25?",
    back: "Class B. First octet 150 falls in 128-191. Pattern: N.N.H.H."
  },
  {
    id: 18,
    front: "What is dotted decimal notation?",
    back: "Human-readable IP format. Four 8-bit octets as decimal (0-255), separated by periods. Example: 192.168.1.10."
  },
  {
    id: 19,
    front: "What is network address?",
    back: "First IP where all host bits = 0. Identifies network, can't be assigned. Example: 192.168.1.0 in /24."
  },
  {
    id: 20,
    front: "What is broadcast address?",
    back: "Last IP where all host bits = 1. Sends to all devices, can't be assigned. Example: 192.168.1.255 in /24."
  },
  {
    id: 21,
    front: "Convert 248 to binary",
    back: "11111000. 128+64+32+16+8=248. First five bits on, last three off."
  },
  {
    id: 22,
    front: "Convert 10101000 to decimal",
    back: "168. Add where 1 appears: 128+32+8=168. Common in 192.168.x.x."
  },
  {
    id: 23,
    front: "What does N.H.H.H mean?",
    back: "Class A pattern. N = network (first octet), H.H.H = host (last three). Example: 10.50.100.20 → network 10, host 50.100.20."
  },
  {
    id: 24,
    front: "Why need private IPs?",
    back: "IPv4 limited (4.3B total). Private IPs (RFC 1918) reusable infinitely inside orgs. NAT converts private to public for internet."
  },
  {
    id: 25,
    front: "First octet 200 - what class?",
    back: "Class C (192-223 range). N.N.N.H format, default /24 mask, 254 usable hosts."
  },
  {
    id: 26,
    front: "User has 169.254.100.50 - what check?",
    back: "Check DHCP. 169.254.x.x = APIPA (DHCP failed). Troubleshoot: DHCP server running? Cable connected? Network connectivity?"
  },
  {
    id: 27,
    front: "Network vs host portion?",
    back: "Network = which network (like area code). Host = specific device (like phone number). Subnet mask determines division."
  },
  {
    id: 28,
    front: "Class C usable hosts?",
    back: "254. /24 = 256 total (2^8) - 2 (network + broadcast) = 254 usable."
  },
  {
    id: 29,
    front: "Can private IPs route on internet?",
    back: "No. 10.x.x.x, 172.16-31.x.x, 192.168.x.x non-routable. Routers use NAT to convert private to public for internet access."
  },
  {
    id: 30,
    front: "What does 'ping 127.0.0.1' mean?",
    back: "Test TCP/IP stack (loopback). Packets to yourself. Works = networking software OK. Fails = driver/software problem, not network."
  }
];

export default lesson3Flashcards;