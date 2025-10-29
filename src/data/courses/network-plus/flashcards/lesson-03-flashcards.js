// Flashcards for Lesson 3: IP Addressing Fundamentals

export const lesson3Flashcards = [
  {
    id: 1,
    front: "What is an IPv4 address?",
    back: "A 32-bit number that uniquely identifies a device on a network. It's displayed in dotted decimal notation (four octets separated by periods), like 192.168.1.10. Each octet represents 8 bits and ranges from 0-255."
  },
  {
    id: 2,
    front: "What are the powers of 2 for an 8-bit octet?",
    back: "128, 64, 32, 16, 8, 4, 2, 1 (from left to right). These represent the value of each bit position. When a bit is 'on' (1), you count its value. When 'off' (0), you don't."
  },
  {
    id: 3,
    front: "Convert 192 to binary",
    back: "11000000. Using powers of 2: 128 + 64 = 192, so we place 1s in the 128 and 64 positions, and 0s in all other positions (32, 16, 8, 4, 2, 1)."
  },
  {
    id: 4,
    front: "Convert 11111111 to decimal",
    back: "255. All bits are on, so we add all powers of 2: 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255. This is the maximum value for any octet."
  },
  {
    id: 5,
    front: "What is the range for Class A addresses?",
    back: "1.0.0.0 to 126.255.255.255 with a default mask of 255.0.0.0 (/8). The first octet identifies the network, and the last three octets identify hosts. Designed for huge networks with 16.7 million hosts."
  },
  {
    id: 6,
    front: "What is the range for Class B addresses?",
    back: "128.0.0.0 to 191.255.255.255 with a default mask of 255.255.0.0 (/16). The first two octets identify the network, and the last two identify hosts. Designed for medium-large networks with 65,534 hosts."
  },
  {
    id: 7,
    front: "What is the range for Class C addresses?",
    back: "192.0.0.0 to 223.255.255.255 with a default mask of 255.255.255.0 (/24). The first three octets identify the network, and the last octet identifies hosts. Designed for small networks with 254 hosts."
  },
  {
    id: 8,
    front: "What is Class D used for?",
    back: "Multicast addressing (224.0.0.0 to 239.255.255.255). Used for one-to-many communication, like streaming video or routing protocol updates. Not used for regular host addressing."
  },
  {
    id: 9,
    front: "What is Class E?",
    back: "Experimental addresses (240.0.0.0 to 255.255.255.255). Reserved for research and future use. Never used on production networks or the public internet."
  },
  {
    id: 10,
    front: "What are the three private IP address ranges (RFC 1918)?",
    back: "1) 10.0.0.0/8 (Class A), 2) 172.16.0.0/12 (Class B), 3) 192.168.0.0/16 (Class C). These addresses cannot route on the public internet and can be reused infinitely inside private networks."
  },
  {
    id: 11,
    front: "What is the loopback address?",
    back: "127.0.0.1 (or any address in 127.0.0.0/8). Used for testing and diagnostics. When you ping 127.0.0.1, packets never leave your computer—they loop back within the network stack. Tests if TCP/IP is working."
  },
  {
    id: 12,
    front: "What is APIPA and what's its range?",
    back: "Automatic Private IP Addressing (169.254.0.0/16). When a device is configured for DHCP but can't reach a DHCP server, it assigns itself an APIPA address for local communication only. Seeing 169.254.x.x indicates DHCP failure."
  },
  {
    id: 13,
    front: "What does 0.0.0.0 represent?",
    back: "The default route, meaning 'any network' or 'all networks.' In routing tables, 0.0.0.0/0 means 'send traffic here if you don't have a more specific route.' Also used for listening on all interfaces."
  },
  {
    id: 14,
    front: "Is 10.50.100.20 a public or private IP?",
    back: "Private. It falls within the 10.0.0.0/8 range, which is one of the three RFC 1918 private address ranges. This address cannot route on the public internet."
  },
  {
    id: 15,
    front: "Is 172.32.1.5 a public or private IP?",
    back: "Public. While it starts with 172, the private Class B range is only 172.16.0.0 through 172.31.255.255. Since 172.32 is outside this range, it's a public address."
  },
  {
    id: 16,
    front: "Is 192.168.50.100 a public or private IP?",
    back: "Private. It falls within the 192.168.0.0/16 range, which is the Class C private address range defined in RFC 1918."
  },
  {
    id: 17,
    front: "What class is the IP address 150.100.50.25?",
    back: "Class B. The first octet is 150, which falls in the range 128-191 (Class B). Class B addresses use the pattern N.N.H.H (two network octets, two host octets)."
  },
  {
    id: 18,
    front: "What is dotted decimal notation?",
    back: "The format used to display IP addresses in a human-readable way. Instead of showing 32 binary bits, we divide them into four 8-bit octets and display each octet as a decimal number (0-255), separated by periods. Example: 192.168.1.10"
  },
  {
    id: 19,
    front: "What is the network address in a subnet?",
    back: "The first IP address in a subnet where all host bits are 0. It identifies the network itself and cannot be assigned to a device. Example: In 192.168.1.0/24, the network address is 192.168.1.0."
  },
  {
    id: 20,
    front: "What is the broadcast address in a subnet?",
    back: "The last IP address in a subnet where all host bits are 1. Used to send data to all devices on the network simultaneously. Cannot be assigned to a device. Example: In 192.168.1.0/24, the broadcast is 192.168.1.255."
  },
  {
    id: 21,
    front: "Convert 248 to binary",
    back: "11111000. Using powers of 2: 128 + 64 + 32 + 16 + 8 = 248. The first five bits are on (1), and the last three are off (0)."
  },
  {
    id: 22,
    front: "Convert 10101000 to decimal",
    back: "168. Add the values where you see a 1: 128 + 32 + 8 = 168. This is commonly seen in private IP addresses like 192.168.x.x."
  },
  {
    id: 23,
    front: "What does N.H.H.H mean?",
    back: "Class A network/host pattern. 'N' is the network portion (first octet), and 'H.H.H' represents the host portion (last three octets). Example: In 10.50.100.20, '10' is the network, '50.100.20' identifies the host."
  },
  {
    id: 24,
    front: "Why do we need private IP addresses?",
    back: "Because IPv4 addresses are limited (4.3 billion total), and we'd run out if every device needed a public IP. Private addresses (RFC 1918) can be reused infinitely inside organizations. NAT converts private IPs to public IPs for internet access."
  },
  {
    id: 25,
    front: "Quick identification: First octet is 200. What class?",
    back: "Class C. The range 192-223 is Class C. This network would use N.N.N.H format with a default /24 mask, supporting 254 usable hosts."
  },
  {
    id: 26,
    front: "A user has IP 169.254.100.50. What should you check?",
    back: "Check DHCP connectivity. The 169.254.x.x range indicates APIPA, meaning the device couldn't reach the DHCP server. Troubleshoot: Is DHCP server running? Is the network cable connected? Is there connectivity to the DHCP server?"
  },
  {
    id: 27,
    front: "What is the difference between network portion and host portion?",
    back: "Network portion identifies which network the device is on (like an area code). Host portion identifies the specific device on that network (like the last digits of a phone number). The subnet mask determines where one ends and the other begins."
  },
  {
    id: 28,
    front: "How many usable hosts in a Class C network?",
    back: "254 usable hosts. A Class C /24 network has 256 total addresses (2^8), but we subtract 2: the network address (first IP) and broadcast address (last IP), leaving 254 addresses for devices."
  },
  {
    id: 29,
    front: "Can private IP addresses route on the public internet?",
    back: "No. Private IP addresses (10.x.x.x, 172.16-31.x.x, 192.168.x.x) are non-routable on the internet. Routers use NAT (Network Address Translation) to convert private IPs to public IPs when accessing internet resources."
  },
  {
    id: 30,
    front: "What does it mean to 'ping 127.0.0.1'?",
    back: "You're testing your computer's TCP/IP stack by sending packets to yourself (loopback). If this works, your networking software is functioning. If it fails, you have a driver or software problem, not a network connectivity issue."
  }
];