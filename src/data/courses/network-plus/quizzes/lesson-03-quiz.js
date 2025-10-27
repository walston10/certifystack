// Quiz for Lesson 3: IP Addressing Fundamentals

export const lesson3Quiz = [
  {
    id: 1,
    question: "What is the binary representation of the decimal number 192?",
    options: [
      "11000000",
      "10101010",
      "11110000",
      "10100000"
    ],
    correct: 0,
    explanation: "192 in binary is 11000000. Using powers of 2, we calculate: 128 + 64 = 192. So we place 1s in the 128 and 64 bit positions, and 0s in all remaining positions (32, 16, 8, 4, 2, 1). This is a critical value to memorize for subnetting, as you'll see it frequently in subnet masks."
  },
  {
    id: 2,
    question: "An IP address begins with 172.25. Which class does this address belong to?",
    options: [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    correct: 1,
    explanation: "This is Class B. The first octet (172) falls in the Class B range of 128-191. Class B addresses use the network pattern N.N.H.H (two network octets, two host octets) with a default /16 mask. Additionally, 172.25 falls within the private Class B range (172.16.0.0 to 172.31.255.255), so this is a private IP address."
  },
  {
    id: 3,
    question: "Which of the following is a private IP address?",
    options: [
      "11.0.0.1",
      "172.32.1.5",
      "192.168.50.100",
      "8.8.8.8"
    ],
    correct: 2,
    explanation: "192.168.50.100 is the only private address. The three RFC 1918 private ranges are: 10.0.0.0/8, 172.16.0.0/12 (only 172.16-172.31!), and 192.168.0.0/16. Option A (11.x.x.x) is outside the 10.x.x.x range. Option B (172.32.x.x) exceeds the private Class B limit of 172.31. Option D (8.8.8.8) is Google's public DNS server."
  },
  {
    id: 4,
    question: "A computer has automatically assigned itself the IP address 169.254.100.50. What does this indicate?",
    options: [
      "The computer successfully obtained an IP address from the DHCP server",
      "The computer failed to contact the DHCP server and assigned itself an APIPA address",
      "This is a valid public IP address assigned by the ISP",
      "The computer is using a static IP configuration"
    ],
    correct: 1,
    explanation: "This is an APIPA (Automatic Private IP Addressing) address. When a device is configured for DHCP but cannot reach a DHCP server, Windows and modern Linux systems automatically assign themselves an address in the 169.254.0.0/16 range. This allows basic local communication but indicates a problem: the DHCP server is down, unreachable, or the network connection is faulty. This is a common troubleshooting scenario on the Network+ exam."
  },
  {
    id: 5,
    question: "What is the purpose of the IP address 127.0.0.1?",
    options: [
      "It's the default gateway for all networks",
      "It's the broadcast address for the local network",
      "It's a reserved address for DHCP servers",
      "It's the loopback address used for testing the local TCP/IP stack"
    ],
    correct: 3,
    explanation: "127.0.0.1 is the loopback address (also called 'localhost'). It's used for testing and diagnostics—when you ping 127.0.0.1, the packets never leave your computer; they loop back within the network stack. If this ping succeeds, your TCP/IP software is working correctly. If it fails, you have a software or driver issue. The entire 127.0.0.0/8 range is reserved for loopback purposes."
  },
  {
    id: 6,
    question: "How many total octets make up an IPv4 address?",
    options: [
      "2 octets (16 bits)",
      "4 octets (32 bits)",
      "6 octets (48 bits)",
      "8 octets (64 bits)"
    ],
    correct: 1,
    explanation: "An IPv4 address consists of 4 octets, totaling 32 bits. Each octet is 8 bits and ranges from 0-255 in decimal notation. The address is displayed in dotted decimal format (e.g., 192.168.1.10). IPv6, by contrast, uses 128 bits (sixteen 8-bit segments displayed in hexadecimal), which we'll cover in a later lesson."
  },
  {
    id: 7,
    question: "Which IP address class has the range 1.0.0.0 to 126.255.255.255?",
    options: [
      "Class A",
      "Class B",
      "Class C",
      "Class D"
    ],
    correct: 0,
    explanation: "This is Class A. Class A addresses use the first octet (1-126) for the network and the last three octets for hosts (N.H.H.H pattern). They have a default /8 mask (255.0.0.0) and can support up to 16.7 million hosts per network. Note that 127.x.x.x is reserved for loopback and is not part of the usable Class A range. Class A networks were designed for the largest organizations."
  },
  {
    id: 8,
    question: "Convert the binary number 11111111 to decimal.",
    options: [
      "127",
      "254",
      "255",
      "256"
    ],
    correct: 2,
    explanation: "11111111 equals 255 in decimal. When all 8 bits are on (set to 1), you add all the powers of 2: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255. This is the maximum value for any octet and is the highest number you can represent with 8 bits. You'll see 255 frequently in subnet masks (e.g., 255.255.255.0)."
  },
  {
    id: 9,
    question: "What is the network/host pattern for Class B addresses?",
    options: [
      "N.H.H.H (1 network octet, 3 host octets)",
      "N.N.N.N (all network, no hosts) ",
      "N.N.N.H (3 network octets, 1 host octet)",
      "N.N.H.H (2 network octets, 2 host octets)"
    ],
    correct: 3,
    explanation: "Class B uses N.N.H.H (two network octets, two host octets). For example, in the address 172.16.50.10, '172.16' identifies the network, and '50.10' identifies the specific host. Class B addresses range from 128.0.0.0 to 191.255.255.255 and use a default /16 mask (255.255.0.0), allowing for 65,534 usable hosts per network."
  },
  {
    id: 10,
    question: "Which of the following statements about Class D addresses is correct?",
    options: [
      "Class D addresses are used for multicast communication",
      "Class D addresses are used for small networks with fewer than 254 hosts",
      "Class D addresses are reserved for private network use",
      "Class D addresses range from 192.0.0.0 to 223.255.255.255"
    ],
    correct: 0,
    explanation: "Class D (224.0.0.0 to 239.255.255.255) is reserved for multicast addressing. Multicast allows one-to-many communication, where a single packet is sent to multiple recipients simultaneously. This is used for applications like streaming video, audio, or routing protocol updates (OSPF, EIGRP). Class D addresses are not used for regular host addressing and don't have a network/host structure like Classes A, B, and C."
  },
  {
    id: 11,
    question: "What is the primary difference between public and private IP addresses?",
    options: [
      "Public IPs can only be used on the internet, private IPs can only be used locally",
      "Private IPs are free to use and can be reused in different organizations; public IPs are unique and routable on the internet",
      "Public IPs are faster than private IPs",
      "Private IPs are newer technology than public IPs"
    ],
    correct: 1,
    explanation: "Private IP addresses (defined in RFC 1918) can be reused infinitely across different organizations because they don't route on the public internet. The three private ranges are: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. Public IP addresses must be globally unique and are routable on the internet. Organizations use NAT (Network Address Translation) to convert private IPs to public IPs when accessing internet resources. This conserves the limited IPv4 address space."
  },
  {
    id: 12,
    question: "In an IPv4 address, what do we call the first and last addresses in a subnet?",
    options: [
      "Gateway address and router address",
      "Start address and end address",
      "Network address and broadcast address",
      "Primary address and secondary address"
    ],
    correct: 2,
    explanation: "The first IP in a subnet (all host bits = 0) is the network address, which identifies the network itself. The last IP (all host bits = 1) is the broadcast address, used to send data to all devices on that network. Neither can be assigned to actual devices. For example, in 192.168.1.0/24, the network address is 192.168.1.0 and the broadcast is 192.168.1.255, leaving .1 through .254 (254 addresses) for hosts."
  },
  {
    id: 13,
    question: "A technician needs to determine if an IP address is private. Which starting octet value indicates a private Class A address?",
    options: [
      "1",
      "10",
      "127",
      "192"
    ],
    correct: 1,
    explanation: "Private Class A addresses all start with 10 (10.0.0.0/8). Any address beginning with 10.x.x.x is a private address. Option A (1) is a public Class A address. Option C (127) is the loopback range. Option D (192) is part of Class C, and while 192.168.x.x is private, addresses like 192.0.x.x through 192.167.x.x and 192.169.x.x+ are public. The three private ranges you must memorize are: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16."
  },
  {
    id: 14,
    question: "What does 0.0.0.0 represent in a routing context?",
    options: [
      "An invalid or unassigned address",
      "The localhost loopback address",
      "The default route (any network)",
      "The broadcast address for all networks"
    ],
    correct: 2,
    explanation: "0.0.0.0 (or 0.0.0.0/0) represents the default route, meaning 'any network' or 'all networks.' In a routing table, it's the catch-all entry: if a router doesn't have a specific route to a destination, it uses the default route. For example, your home router has a default route pointing to your ISP—any traffic not destined for your local network goes there. Servers also use 0.0.0.0 to listen on all available network interfaces."
  },
  {
    id: 15,
    question: "Which binary pattern indicates a Class B address in the first octet?",
    options: [
      "Starts with 0",
      "Starts with 1110",
      "Starts with 110",
      "Starts with 10"
    ],
    correct: 3,
    explanation: "Class B addresses always start with the binary pattern '10' in the first octet. This corresponds to decimal values 128-191 (when the first two bits are 10, the minimum value is 128 and the maximum is 191). Class A starts with '0' (1-126), Class C starts with '110' (192-223), Class D starts with '1110' (224-239), and Class E starts with '1111' (240-255). Understanding these binary patterns helps you quickly identify address classes."
  }
];
