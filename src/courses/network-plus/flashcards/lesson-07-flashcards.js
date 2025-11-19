// Flashcards for Lesson 7: IPv6 Addressing and Configuration

export const lesson7Flashcards = [
  {
    id: 1,
    front: "IPv6 address: bits and format?",
    back: "128 bits, hexadecimal, eight groups of four hex digits with colons. Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334"
  },
  {
    id: 2,
    front: "Two IPv6 shortening rules?",
    back: "1) Remove leading zeros (keep at least one). 2) Compress consecutive zeros with :: (only once per address)."
  },
  {
    id: 3,
    front: "Shorten: 2001:0db8:0000:0000:0000:ff00:0042:8329",
    back: "2001:db8::ff00:42:8329. Remove leading zeros, then compress consecutive zeros with ::."
  },
  {
    id: 4,
    front: "What starts with fe80::/10?",
    back: "Link-local address. Auto-assigned to every interface, not routable, used for NDP and local communication."
  },
  {
    id: 5,
    front: "What starts with 2000::/3?",
    back: "Global unicast address. Routable on internet (like IPv4 public). First hextet starts with 2 or 3."
  },
  {
    id: 6,
    front: "IPv6 loopback address?",
    back: "::1 (0000:0000:0000:0000:0000:0000:0000:0001). IPv6 equivalent of 127.0.0.1."
  },
  {
    id: 7,
    front: "What starts with ff00::/8?",
    back: "Multicast address. IPv6 has no broadcast - uses multicast. Example: ff02::1 (all nodes)."
  },
  {
    id: 8,
    front: "Standard IPv6 subnet size?",
    back: "/64. First 64 bits = network prefix, last 64 = interface ID. Required for SLAAC and EUI-64."
  },
  {
    id: 9,
    front: "/48 prefix creates how many /64 subnets?",
    back: "65,536 subnets (2^16). 16 bits for subnetting (64-48=16)."
  },
  {
    id: 10,
    front: "What is SLAAC?",
    back: "Stateless Address Autoconfiguration. Devices auto-configure IPv6 without DHCP. Router advertises prefix, device creates address with interface ID."
  },
  {
    id: 11,
    front: "SLAAC process steps?",
    back: "1) Device assigns link-local (fe80::), 2) Router sends RA with prefix, 3) Device combines prefix+interface ID, 4) DAD check, 5) Working address."
  },
  {
    id: 12,
    front: "What is EUI-64?",
    back: "Creates 64-bit interface ID from 48-bit MAC. Split MAC, insert ff:fe, flip 7th bit. Example: 00:0c:29:ab:cd:ef → 020c:29ff:feab:cdef."
  },
  {
    id: 13,
    front: "Stateful vs stateless DHCPv6?",
    back: "Stateful: server assigns full address, tracks it (like DHCPv4). Stateless: SLAAC for address, DHCPv6 only for DNS/options. Stateless most common."
  },
  {
    id: 14,
    front: "M and O flags in Router Advertisements?",
    back: "M (Managed): use stateful DHCPv6 for address. O (Other): use DHCPv6 for options. M=0,O=1: SLAAC for address, DHCPv6 for DNS."
  },
  {
    id: 15,
    front: "What replaces ARP in IPv6?",
    back: "NDP (Neighbor Discovery Protocol). Uses ICMPv6 and multicast. Handles address resolution, router/prefix discovery, DAD."
  },
  {
    id: 16,
    front: "Five NDP message types?",
    back: "1) Router Solicitation (RS), 2) Router Advertisement (RA), 3) Neighbor Solicitation (NS), 4) Neighbor Advertisement (NA), 5) Redirect."
  },
  {
    id: 17,
    front: "What is fc00::/7?",
    back: "Unique Local Address (ULA). Private IPv6 (like 10.x, 172.16.x, 192.168.x). Use fd00::/8 locally. Not routable on internet."
  },
  {
    id: 18,
    front: "Why was IPv6 created?",
    back: "IPv4 exhaustion. IPv4: 4.3 billion addresses. IPv6: 340 undecillion. Needed for billions of devices and IoT."
  },
  {
    id: 19,
    front: "What is dual-stack?",
    back: "Running IPv4 and IPv6 simultaneously. Every interface has both addresses. Most common transition mechanism."
  },
  {
    id: 20,
    front: "Three IPv6 transition mechanisms?",
    back: "1) Dual-stack (both protocols), 2) Tunneling (IPv6 in IPv4 - 6to4, Teredo), 3) Translation (NAT64/DNS64). Dual-stack most common."
  },
  {
    id: 21,
    front: "What is NAT64?",
    back: "Translates between IPv6 and IPv4 at boundary. IPv6-only clients reach IPv4 servers. DNS64 provides synthesized IPv6 for IPv4 destinations."
  },
  {
    id: 22,
    front: "'All nodes' multicast address?",
    back: "ff02::1 (all nodes on local link). IPv6 equivalent of IPv4 broadcast. Also: ff02::2 (all routers)."
  },
  {
    id: 23,
    front: "2001:db8:1234::/48 gets what /64 subnets?",
    back: "2001:db8:1234:0::/64 through 2001:db8:1234:ffff::/64. 16 subnet bits = 65,536 subnets."
  },
  {
    id: 24,
    front: "What does :: mean in IPv6?",
    back: "One or more consecutive zero groups. Example: 2001:db8::1 = 2001:db8:0:0:0:0:0:1. Only once per address."
  },
  {
    id: 25,
    front: "How to ping IPv6?",
    back: "ping6 (Linux/Mac) or ping -6 (Windows). Example: ping6 2001:4860:4860::8888. Link-local needs interface: ping6 fe80::1%eth0"
  },
  {
    id: 26,
    front: "Purpose of DAD?",
    back: "Duplicate Address Detection. Verifies address not in use before using it. Sends NS for own address. If reply, duplicate found."
  },
  {
    id: 27,
    front: "Does IPv6 have broadcast?",
    back: "No broadcast. Uses multicast (ff00::/8) instead. More efficient - only interested devices listen vs interrupting all."
  },
  {
    id: 28,
    front: "What is anycast in IPv6?",
    back: "Address assigned to multiple interfaces. Traffic routes to nearest. No special prefix. Used for load balancing (DNS roots)."
  },
  {
    id: 29,
    front: "Router Advertisement contains?",
    back: "Network prefix (SLAAC), router link-local (gateway), prefix lifetime, M/O flags (DHCPv6), MTU, hop limit."
  },
  {
    id: 30,
    front: "Why EUI-64 flip 7th bit?",
    back: "7th bit = Universal/Local. 0=globally unique, 1=locally administered. Flip indicates modified MAC for IPv6 interface ID."
  }
];

export default lesson7Flashcards;