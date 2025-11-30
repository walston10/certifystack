export const lesson12Flashcards = [
  {
    id: 1,
    front: "What is the structure of an IPv4 address?",
    back: "32-bit address written in dotted decimal notation. Four octets (0-255) separated by dots. Example: 192.168.1.100. Each octet is 8 bits. Total: 4.3 billion possible addresses."
  },
  {
    id: 2,
    front: "What are the IPv4 address classes and their ranges?",
    back: "Class A: 1.0.0.0-126.255.255.255 (/8, 16 million hosts). Class B: 128.0.0.0-191.255.255.255 (/16, 65,534 hosts). Class C: 192.0.0.0-223.255.255.255 (/24, 254 hosts). Class D: 224-239 (multicast). Class E: 240-255 (experimental)."
  },
  {
    id: 3,
    front: "What are the private IP address ranges (RFC 1918)?",
    back: "10.0.0.0 to 10.255.255.255 (10.0.0.0/8) - Class A. 172.16.0.0 to 172.31.255.255 (172.16.0.0/12) - Class B. 192.168.0.0 to 192.168.255.255 (192.168.0.0/16) - Class C. Not routable on internet, used internally."
  },
  {
    id: 4,
    front: "What is the loopback address and what is it used for?",
    back: "127.0.0.1 (entire 127.0.0.0/8 range). Points to local computer (localhost). Used for testing TCP/IP stack without network. Always works if TCP/IP installed correctly. Never leaves the computer."
  },
  {
    id: 5,
    front: "What is APIPA and what range does it use?",
    back: "Automatic Private IP Addressing. 169.254.0.0 to 169.254.255.255 (169.254.0.0/16). Self-assigned when DHCP fails. Allows local network communication only, no internet. Indicates DHCP problem."
  },
  {
    id: 6,
    front: "What is the default route IP address?",
    back: "0.0.0.0 - represents all networks or unknown destination. Used in routing tables to match any address. Default gateway route. Also used to indicate 'any address' when binding services."
  },
  {
    id: 7,
    front: "What is a subnet mask?",
    back: "32-bit number that divides IP address into network and host portions. 1s represent network bits, 0s represent host bits. Example: 255.255.255.0 (/24) - first 24 bits network, last 8 bits host."
  },
  {
    id: 8,
    front: "What does CIDR notation /24 mean?",
    back: "Classless Inter-Domain Routing. /24 means first 24 bits are network portion. Equals subnet mask 255.255.255.0. 8 host bits remaining = 256 addresses (254 usable). Common for small networks."
  },
  {
    id: 9,
    front: "What are the common subnet masks in dotted decimal and CIDR?",
    back: "/8 = 255.0.0.0, /16 = 255.255.0.0, /24 = 255.255.255.0, /25 = 255.255.255.128, /26 = 255.255.255.192, /27 = 255.255.255.224, /28 = 255.255.255.240, /29 = 255.255.255.248, /30 = 255.255.255.252."
  },
  {
    id: 10,
    front: "How do you calculate the number of usable hosts?",
    back: "Formula: 2^(host bits) - 2. Subtract 2 for network address and broadcast address. Example: /24 has 8 host bits. 2^8 = 256. 256 - 2 = 254 usable hosts."
  },
  {
    id: 11,
    front: "What is a network address?",
    back: "First address in subnet, all host bits are 0. Identifies the network itself. Cannot be assigned to devices. Example: 192.168.1.0/24 - network address is 192.168.1.0."
  },
  {
    id: 12,
    front: "What is a broadcast address?",
    back: "Last address in subnet, all host bits are 1. Sends to all devices on network. Cannot be assigned to devices. Example: 192.168.1.0/24 - broadcast is 192.168.1.255."
  },
  {
    id: 13,
    front: "What are the usable host addresses in 192.168.1.0/24?",
    back: "192.168.1.1 (first usable) through 192.168.1.254 (last usable). Total: 254 usable addresses. Network: 192.168.1.0. Broadcast: 192.168.1.255."
  },
  {
    id: 14,
    front: "How many usable hosts in a /30 subnet?",
    back: "2 usable hosts. 32 - 30 = 2 host bits. 2^2 = 4 total - 2 = 2 usable. Commonly used for point-to-point links (router to router). Subnet mask: 255.255.255.252."
  },
  {
    id: 15,
    front: "How many usable hosts in a /26 subnet?",
    back: "62 usable hosts. 32 - 26 = 6 host bits. 2^6 = 64 total - 2 = 62 usable. Subnet mask: 255.255.255.192. Good for medium-sized networks (50-60 devices)."
  },
  {
    id: 16,
    front: "What is IPv6 and why was it created?",
    back: "Next generation IP addressing using 128-bit addresses. Created because IPv4 addresses running out (only 4.3 billion). Provides 340 undecillion addresses. Hexadecimal notation. Built-in security (IPSec). Simplified header."
  },
  {
    id: 17,
    front: "What is the format of an IPv6 address?",
    back: "128 bits written as eight groups of four hexadecimal digits separated by colons. Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Uses hex (0-9, a-f). Much longer than IPv4."
  },
  {
    id: 18,
    front: "What are IPv6 address shortening rules?",
    back: "Rule 1: Remove leading zeros in each group (0db8 becomes db8). Rule 2: Replace consecutive groups of zeros with :: (only once per address). Example: 2001:0db8:0000:0000:0000:0000:0000:0001 becomes 2001:db8::1."
  },
  {
    id: 19,
    front: "What are the types of IPv6 addresses?",
    back: "Unicast: Single interface (global, link-local, unique local). Multicast: Multiple interfaces (replaces broadcast). Anycast: Nearest interface in group. No broadcast in IPv6 - multicast used instead."
  },
  {
    id: 20,
    front: "What is a link-local IPv6 address?",
    back: "Address that starts with fe80::/10. Auto-configured on every IPv6 interface. Only valid on local network segment. Not routable. Used for neighbor discovery and local communication. Similar to APIPA in IPv4."
  },
  {
    id: 21,
    front: "What is the IPv6 loopback address?",
    back: "::1 (0000:0000:0000:0000:0000:0000:0000:0001 shortened). Equivalent to 127.0.0.1 in IPv4. Used for testing local TCP/IP stack. Refers to the local computer."
  },
  {
    id: 22,
    front: "What is a default gateway?",
    back: "Router IP address that forwards traffic to other networks/internet. Required for accessing anything outside local subnet. Configured via DHCP or static. First place packets go when destination not local."
  },
  {
    id: 23,
    front: "What happens if default gateway is incorrect or missing?",
    back: "Can communicate with local subnet only. No internet access. Cannot reach other subnets. Ping to local IPs works, ping to external fails. Common troubleshooting issue."
  },
  {
    id: 24,
    front: "What is the difference between static and DHCP IP configuration?",
    back: "Static: Manually configured, never changes, used for servers/printers/network devices, more management overhead. DHCP: Automatically assigned, can change (lease), used for client devices, centrally managed, easier."
  },
  {
    id: 25,
    front: "What information does a DHCP server provide?",
    back: "IP address - Subnet mask - Default gateway - DNS server(s) - Optional: lease time, domain name, WINS server, NTP server. Complete network configuration in one automatic package."
  },
  {
    id: 26,
    front: "What is DNS configuration and why is it needed?",
    back: "IP addresses of DNS servers that resolve domain names to IP addresses. Primary and secondary DNS servers configured. Without DNS: can ping IP addresses but not domain names. Essential for web browsing."
  },
  {
    id: 27,
    front: "What is the difference between primary and secondary DNS?",
    back: "Primary DNS: First server queried for name resolution. Secondary DNS: Backup if primary fails or is slow. Both configured for redundancy. Common to use ISP DNS or public DNS (8.8.8.8, 1.1.1.1)."
  },
  {
    id: 28,
    front: "How do you determine if an IP is on the same subnet?",
    back: "Apply subnet mask to both IPs using binary AND operation. If network portions match, same subnet. Example: 192.168.1.10/24 and 192.168.1.50/24 - both have network 192.168.1.0, same subnet."
  },
  {
    id: 29,
    front: "What is the valid IP range for 10.0.0.0/8?",
    back: "Network: 10.0.0.0. First usable: 10.0.0.1. Last usable: 10.255.255.254. Broadcast: 10.255.255.255. Total: 16,777,214 usable hosts. Entire 10.x.x.x range."
  },
  {
    id: 30,
    front: "What are common IP configuration errors?",
    back: "Wrong subnet mask - can't reach some hosts. Wrong default gateway - no internet. Wrong DNS - can't resolve names. IP conflict - two devices same IP. Out of range IP - not in valid subnet."
  }
];