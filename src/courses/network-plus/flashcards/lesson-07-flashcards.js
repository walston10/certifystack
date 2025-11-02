// Flashcards for Lesson 7: IPv6 Addressing and Configuration

export const lesson7Flashcards = [
  {
    id: 1,
    front: "How many bits is an IPv6 address, and how is it written?",
    back: "128 bits, written in hexadecimal as eight groups of four hex digits separated by colons. Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334"
  },
  {
    id: 2,
    front: "What are the two IPv6 shortening rules?",
    back: "Rule 1: Remove leading zeros from any group (but keep at least one digit). Rule 2: Compress one continuous string of zeros with :: (double colon). You can only use :: ONCE per address."
  },
  {
    id: 3,
    front: "Shorten this IPv6 address: 2001:0db8:0000:0000:0000:ff00:0042:8329",
    back: "2001:db8::ff00:42:8329. First remove leading zeros (2001:db8:0:0:0:ff00:42:8329), then compress consecutive zeros with :: (2001:db8::ff00:42:8329)."
  },
  {
    id: 4,
    front: "What IPv6 address type starts with fe80::/10?",
    back: "Link-local address. These are automatically assigned to every IPv6 interface, only valid on the local link (not routable), and used for NDP and local communication."
  },
  {
    id: 5,
    front: "What IPv6 address type starts with 2000::/3?",
    back: "Global unicast address. These are routable on the internet (like IPv4 public addresses). They start with 2 or 3 in the first hextet."
  },
  {
    id: 6,
    front: "What is the IPv6 loopback address?",
    back: "::1 (fully expanded: 0000:0000:0000:0000:0000:0000:0000:0001). It's equivalent to 127.0.0.1 in IPv4 and used for testing the local IPv6 stack."
  },
  {
    id: 7,
    front: "What IPv6 address type starts with ff00::/8?",
    back: "Multicast address. IPv6 has no broadcast - everything uses multicast instead. Example: ff02::1 (all nodes) replaces IPv4 broadcast."
  },
  {
    id: 8,
    front: "What is the standard IPv6 subnet size and why?",
    back: "/64. The first 64 bits are the network prefix, the last 64 bits are the interface ID. This allows SLAAC and EUI-64 to work properly. Don't use anything smaller than /64 for subnets."
  },
  {
    id: 9,
    front: "How many /64 subnets can you create from a /48 prefix?",
    back: "65,536 subnets (2^16). You have 16 bits available for subnetting (64 - 48 = 16), and 2^16 = 65,536. This is why even a 'small' IPv6 allocation is huge!"
  },
  {
    id: 10,
    front: "What does SLAAC stand for and what does it do?",
    back: "Stateless Address Autoconfiguration. It lets devices automatically configure their own IPv6 addresses without a DHCP server. The router advertises a prefix, and the device creates its address by combining the prefix with its interface ID."
  },
  {
    id: 11,
    front: "What are the steps in the SLAAC process?",
    back: "1) Device assigns itself a link-local address (fe80::), 2) Router sends Router Advertisement with network prefix, 3) Device combines prefix + interface ID, 4) Device performs Duplicate Address Detection (DAD), 5) Device has working global address."
  },
  {
    id: 12,
    front: "What is EUI-64 and how does it work?",
    back: "Extended Unique Identifier-64 creates a 64-bit interface ID from a 48-bit MAC address. Process: Split MAC in half, insert ff:fe in middle, flip 7th bit. Example: 00:0c:29:ab:cd:ef becomes 020c:29ff:feab:cdef."
  },
  {
    id: 13,
    front: "What's the difference between stateful and stateless DHCPv6?",
    back: "Stateful: Server assigns the complete address and tracks it (like DHCPv4). Stateless: Device uses SLAAC for address, DHCPv6 only provides DNS/options. Stateless is most common - combines SLAAC benefits with centralized options."
  },
  {
    id: 14,
    front: "What are the M and O flags in IPv6 Router Advertisements?",
    back: "M flag (Managed): If set, use stateful DHCPv6 for address. O flag (Other): If set, use DHCPv6 for options like DNS. M=0,O=1 means 'use SLAAC for address, DHCPv6 for DNS.'"
  },
  {
    id: 15,
    front: "What protocol replaces ARP in IPv6?",
    back: "NDP (Neighbor Discovery Protocol). NDP uses ICMPv6 and multicast instead of broadcast. It handles address resolution, router discovery, prefix discovery, and duplicate address detection."
  },
  {
    id: 16,
    front: "What are the five main NDP message types?",
    back: "1) Router Solicitation (RS) - 'Any routers here?', 2) Router Advertisement (RA) - 'I'm here, here's your prefix', 3) Neighbor Solicitation (NS) - 'Who has this address?', 4) Neighbor Advertisement (NA) - 'I do!', 5) Redirect - 'Use this router instead.'"
  },
  {
    id: 17,
    front: "What IPv6 address type is fc00::/7 and what is it used for?",
    back: "Unique Local Address (ULA). These are private IPv6 addresses (like 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 in IPv4). Use fd00::/8 for locally assigned. Not routable on the internet."
  },
  {
    id: 18,
    front: "Why was IPv6 created?",
    back: "IPv4 address exhaustion. IPv4 has only 4.3 billion addresses, which isn't enough for billions of people and tens of billions of IoT devices. IPv6 has 340 undecillion addresses - we won't run out."
  },
  {
    id: 19,
    front: "What is dual-stack networking?",
    back: "Running both IPv4 and IPv6 simultaneously on all devices and infrastructure. Every interface has both an IPv4 and IPv6 address. Most common transition mechanism. Allows gradual migration to IPv6."
  },
  {
    id: 20,
    front: "What are the three IPv6 transition mechanisms?",
    back: "1) Dual-stack: Run both protocols simultaneously. 2) Tunneling: Encapsulate IPv6 packets inside IPv4 (6to4, Teredo). 3) Translation: Convert between protocols at boundary (NAT64/DNS64). Dual-stack is most common."
  },
  {
    id: 21,
    front: "What is NAT64 used for?",
    back: "NAT64 translates between IPv6 and IPv4 at the network boundary. Used when IPv6-only clients need to reach IPv4 servers (common in mobile networks). DNS64 provides synthesized IPv6 addresses for IPv4 destinations."
  },
  {
    id: 22,
    front: "What multicast address means 'all nodes' in IPv6?",
    back: "ff02::1 (all nodes on local link). This is the IPv6 equivalent of IPv4 broadcast. Other common ones: ff02::2 (all routers), ff02::1:ff00:0/104 (solicited-node multicast for NDP)."
  },
  {
    id: 23,
    front: "If an organization gets 2001:db8:1234::/48, what are valid /64 subnets?",
    back: "2001:db8:1234:0::/64, 2001:db8:1234:1::/64, 2001:db8:1234:2::/64... through 2001:db8:1234:ffff::/64. They have 16 subnet bits (hextet between /48 and /64) giving 65,536 possible subnets."
  },
  {
    id: 24,
    front: "What does :: (double colon) represent in IPv6?",
    back: "One or more groups of consecutive zeros. Example: 2001:db8::1 expands to 2001:db8:0:0:0:0:0:1. Can only be used ONCE per address (otherwise it's ambiguous how many zero groups were compressed)."
  },
  {
    id: 25,
    front: "How do you ping an IPv6 address?",
    back: "Use ping6 (Linux/Mac) or ping -6 (Windows). Example: ping6 2001:4860:4860::8888 (Google's public DNS). For link-local addresses, specify interface: ping6 fe80::1%eth0"
  },
  {
    id: 26,
    front: "What's the purpose of Duplicate Address Detection (DAD) in IPv6?",
    back: "DAD verifies that an IPv6 address isn't already in use before a device starts using it. The device sends Neighbor Solicitation for its own address. If someone replies, there's a duplicate and the device won't use that address."
  },
  {
    id: 27,
    front: "Does IPv6 have broadcast? If not, what does it use instead?",
    back: "No, IPv6 has NO broadcast. It uses multicast instead (ff00::/8). This is more efficient because only interested devices listen to multicast groups, whereas broadcast interrupts all devices on the network."
  },
  {
    id: 28,
    front: "What is an anycast address in IPv6?",
    back: "An address assigned to multiple interfaces (usually on different devices). Traffic is routed to the nearest instance. Has no special prefix - looks like a regular unicast address. Used for load balancing (e.g., DNS root servers)."
  },
  {
    id: 29,
    front: "What information does a Router Advertisement (RA) contain?",
    back: "Network prefix (for SLAAC), router's link-local address (default gateway), prefix lifetime, M and O flags (DHCPv6 instructions), MTU, hop limit. Sent periodically by routers or in response to Router Solicitations."
  },
  {
    id: 30,
    front: "Why does EUI-64 flip the 7th bit of the MAC address?",
    back: "The 7th bit is the Universal/Local bit. When 0, the MAC is globally unique (manufacturer-assigned). When 1, it's locally administered. EUI-64 flips it to indicate this is a modified MAC address used for IPv6 interface ID generation."
  }
];

// Export for use in the FlashcardActivity component
export default lesson7Flashcards;