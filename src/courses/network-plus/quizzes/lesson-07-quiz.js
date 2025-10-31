// Quiz questions for Lesson 7: IPv6 Addressing and Configuration

export const lesson7Quiz = [
  {
    id: 1,
    question: "During an audit, you find the address 2001:0db8:0000:0042:0000:0000:0000:0001 configured on a lab router. The change-control note says, “Shorten this address using proper IPv6 rules.” Which of the following is the correctly compressed notation you should document?",
    options: [
      "2001:db8:0:42::1",
      "2001:0db8::42::1",
      "2001:db8:0:42:0:0:0:1",
      "2001:db8::42:0:0:0:1"
    ],
    correct: 0,
    explanation: "Shortening steps: (1) Remove leading zeros in each hextet → 2001:db8:0:42:0:0:0:1. (2) Compress the single longest run of consecutive all-zero hextets with :: → the run of four zeros at the end becomes ::, yielding 2001:db8:0:42::1. Using :: twice (Option B) is invalid. Option C doesn’t compress zeros. Option D compresses a shorter three-hextet run instead of the longer four-hextet run."
  },
  {
    id: 2,
    question: "While tracing a neighbor discovery issue, you see a host using fe80::a00:27ff:fe4e:66a1 as its source. Based on the prefix, how should you classify this address?",
    options: [
      "Global unicast address",
      "Link-local address",
      "Unique local address",
      "Multicast address"
    ],
    correct: 1,
    explanation: "fe80::/10 (commonly written as fe80::/64 in practice) denotes a link-local address. Link-local addresses are automatically assigned, are not routable off the local link, and are used for local functions such as NDP and default-gateway adjacency. Global unicast typically starts with 2xxx/3xxx, unique local with fc00::/7 (fc/fd), and multicast with ff00::/8."
  },
  {
    id: 3,
    question: "Your ISP assigns 2001:db8:cafe::/48 to your company. The network team plans standard /64 LANs throughout the campus. For capacity planning, how many /64 subnets can you derive from this /48?",
    options: [
      "256 subnets",
      "4,096 subnets",
      "16,384 subnets",
      "65,536 subnets"
    ],
    correct: 3,
    explanation: "From /48 to /64 leaves 16 bits for subnetting (64 − 48 = 16). 2^16 = 65,536 distinct /64s (e.g., 2001:db8:cafe:0000::/64 through 2001:db8:cafe:ffff::/64)."
  },
  {
    id: 4,
    question: "A new VLAN relies on SLAAC. Clients come online and immediately build their own IPv6 addresses without contacting a DHCPv6 server. From the router, what information is conveyed that enables this process?",
    options: [
      "Complete IPv6 address and subnet mask",
      "Network prefix and default gateway link-local address",
      "DHCP server address and lease time",
      "DNS server addresses and domain name"
    ],
    correct: 1,
    explanation: "Router Advertisements (RAs) advertise the prefix (e.g., 2001:db8:1::/64) and—by virtue of the RA source—establish the router’s link-local address as the default gateway (router lifetime > 0). Hosts then form their own interface IDs (EUI-64 or random). DNS info can be provided via stateless DHCPv6 (O flag) or RDNSS options, but not by default in basic SLAAC."
  },
  {
    id: 5,
    question: "You are validating an SLAAC-derived address and must compute the EUI-64 interface ID from the NIC’s MAC 00:1a:2b:3c:4d:5e. Which result is correct after inserting FF:FE and flipping the U/L bit?",
    options: [
      "001a:2bff:fe3c:4d5e",
      "021a:2bff:fe3c:4d5e",
      "001a:2b3c:4d5e:ffff",
      "00:1a:2b:ff:fe:3c:4d:5e"
    ],
    correct: 1,
    explanation: "Split MAC → 00:1a:2b and 3c:4d:5e; insert ff:fe → 00:1a:2b:ff:fe:3c:4d:5e; flip the 7th bit (U/L bit) of the first byte 00 → 02 → 02:1a:2b:ff:fe:3c:4d:5e → 021a:2bff:fe3c:4d5e in IPv6 hextet form."
  },
  {
    id: 6,
    question: "A site wants hosts to self-form addresses via SLAAC, but obtain DNS and NTP from a central server. Which DHCPv6 mode fits this design?",
    options: [
      "Stateful uses TCP; stateless uses UDP",
      "Stateful assigns addresses and tracks them; stateless only provides options like DNS",
      "Stateful is for servers; stateless is for clients",
      "Stateful requires authentication; stateless does not"
    ],
    correct: 1,
    explanation: "Stateful DHCPv6 assigns and tracks addresses (like DHCPv4). Stateless DHCPv6 leaves addressing to SLAAC and supplies “other” options (e.g., DNS, domain, NTP). This is controlled by RA flags: M=0, O=1."
  },
  {
    id: 7,
    question: "Packet captures show no ARP in an IPv6-only segment, yet hosts still learn neighbors and gateways. Which protocol provides this function and over what mechanism?",
    options: [
      "ICMP using broadcast",
      "NDP using ICMPv6 and multicast",
      "DHCP using UDP",
      "RARP using Ethernet frames"
    ],
    correct: 1,
    explanation: "Neighbor Discovery Protocol (NDP) replaces ARP in IPv6 using ICMPv6 messages and multicast (solicited-node groups). IPv6 has no broadcast."
  },
  {
    id: 8,
    question: "A mobile division is IPv6-only, but must access an internal ticketing system that is IPv4-only. Which approach enables seamless name resolution and traffic flow without upgrading the legacy app?",
    options: [
      "Dual-stack (run both IPv4 and IPv6)",
      "6to4 tunneling",
      "NAT64 with DNS64",
      "Teredo tunneling"
    ],
    correct: 2,
    explanation: "NAT64 translates IPv6↔IPv4 traffic; DNS64 synthesizes AAAA records from A records so IPv6-only clients can reach IPv4-only servers. 6to4/Teredo encapsulate IPv6 over IPv4 (opposite direction). Dual-stack would require IPv4 on clients."
  },
  {
    id: 9,
    question: "During local stack testing, you ping an address that never egresses the NIC yet returns replies instantly. Which IPv6 address are you using for this test?",
    options: [
      "All nodes multicast address",
      "Unspecified address (no address assigned)",
      "Loopback address",
      "Default route"
    ],
    correct: 2,
    explanation: "::1 is the IPv6 loopback (IPv4 equivalent 127.0.0.1). Traffic to ::1 never leaves the host. :: is the unspecified address; ff02::1 is all-nodes multicast; ::/0 is the default route."
  },
  {
    id: 10,
    question: "You set M=0 and O=1 in Router Advertisements for a user VLAN. How should hosts on that VLAN obtain addressing and configuration?",
    options: [
      "Manual configuration only",
      "Stateful DHCPv6 for both address and options",
      "SLAAC for address, DHCPv6 for options like DNS",
      "SLAAC only, no DHCPv6"
    ],
    correct: 2,
    explanation: "M=0 directs hosts to use SLAAC for addressing; O=1 signals that additional configuration is available via stateless DHCPv6 (e.g., DNS)."
  },
  {
    id: 11,
    question: "A security review includes filtering by IPv6 address type. Which prefix identifies multicast traffic you may need to treat specially in ACLs?",
    options: [
      "Global unicast",
      "Link-local",
      "Multicast",
      "Anycast"
    ],
    correct: 2,
    explanation: "IPv6 multicast uses ff00::/8. Common groups include ff02::1 (all nodes), ff02::2 (all routers), and solicited-node multicast ff02::1:ffXX:XXXX."
  },
  {
    id: 12,
    question: "The network architect mandates /64s on every user and server VLAN. What technical requirement drives this standard sizing choice?",
    options: [
      "It matches IPv4's /24 standard",
      "It allows for SLAAC and EUI-64 which require 64 bits for interface ID",
      "It's the minimum size that routers can handle",
      "It provides the optimal number of hosts per subnet"
    ],
    correct: 1,
    explanation: "SLAAC expects a 64-bit interface ID. Using /64 preserves 64 bits for host/interface ID generation (EUI-64, privacy addresses) and ensures interoperability."
  },
  {
    id: 13,
    question: "A host can ping its default gateway but cannot reach any remote subnets. ipconfig shows only fe80::1234:5678:90ab:cdef assigned. What’s the most likely cause?",
    options: [
      "The address is invalid and needs to be reconfigured",
      "The device only has a link-local address and needs a global unicast address",
      "The interface ID is too short",
      "DHCPv6 server is assigning duplicate addresses"
    ],
    correct: 1,
    explanation: "A sole link-local (fe80::/10) indicates the host never acquired a global unicast address (e.g., no RA prefix, SLAAC blocked, or stateful DHCPv6 unavailable). Link-local cannot be routed off-link."
  },
  {
    id: 14,
    question: "After bringing a new interface online, the host sends a Neighbor Solicitation for an address it hasn’t used yet. What IPv6 safeguard is being performed?",
    options: [
      "Detect rogue DHCPv6 servers",
      "Verify an address isn't already in use before assigning it",
      "Find duplicate MAC addresses on the network",
      "Detect when two routers advertise the same prefix"
    ],
    correct: 1,
    explanation: "Duplicate Address Detection (DAD) checks that an address is unique before use. The host probes its own tentative address via NDP/ICMPv6; no response implies it’s safe to assign."
  },
  {
    id: 15,
    question: "Your migration plan requires maximum compatibility during a long transition: some apps speak only IPv4 while others are IPv6-ready. Which mechanism lets endpoints run both simultaneously without translation?",
    options: [
      "NAT64",
      "6to4 tunneling",
      "Dual-stack",
      "Teredo"
    ],
    correct: 2,
    explanation: "Dual-stack enables interfaces, routing, and applications to use both IPv4 and IPv6 natively. NAT64 translates between protocols; 6to4/Teredo tunnel IPv6 over IPv4."
  }
];

// Export for use in QuizActivity component
export default lesson7Quiz;
