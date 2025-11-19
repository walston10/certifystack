// Flashcards for Lesson 14: Network Devices (Routers, Firewalls, Load Balancers)

export const lesson14Flashcards = [
  {
    id: 1,
    front: "What is a hub and why is it obsolete?",
    back: "Layer 1 device broadcasting to all ports. One collision domain, half-duplex, security risk. Replaced by switches in 1990s."
  },
  {
    id: 2,
    front: "What is a repeater?",
    back: "Layer 1 device that regenerates/amplifies signals to extend cable distance. No intelligence, just boosts signal."
  },
  {
    id: 3,
    front: "What is a media converter?",
    back: "Layer 1 device converting between media types, typically copper to fiber. Allows connecting different cable types."
  },
  {
    id: 4,
    front: "What is a bridge?",
    back: "Layer 2 device connecting two segments, filtering by MAC. Like a 2-port switch. Wireless bridges connect networks wirelessly."
  },
  {
    id: 5,
    front: "What is a switch?",
    back: "Layer 2 device forwarding frames by MAC. Each port = own collision domain. Features: MAC table, VLANs, full-duplex."
  },
  {
    id: 6,
    front: "What is a wireless access point (WAP)?",
    back: "Layer 2 device providing wireless to wired connectivity. Converts WiFi to Ethernet. Can be autonomous or controller-managed."
  },
  {
    id: 7,
    front: "What is a router?",
    back: "Layer 3 device forwarding packets between networks by IP. Separates broadcast domains, performs routing, connects subnets."
  },
  {
    id: 8,
    front: "What is a Layer 3 switch?",
    back: "Combines switching (L2) and routing (L3). Routes in hardware (fast). Wire-speed switching + hardware-accelerated routing."
  },
  {
    id: 9,
    front: "Stateless vs stateful firewall?",
    back: "Stateless: examines each packet independently, no tracking. Stateful: tracks connections, allows return traffic. Modern firewalls are stateful."
  },
  {
    id: 10,
    front: "What is a Next-Generation Firewall (NGFW)?",
    back: "Beyond stateful inspection: application awareness, deep packet inspection, IPS, user awareness, SSL inspection. Examples: Palo Alto, Fortinet."
  },
  {
    id: 11,
    front: "IDS vs IPS?",
    back: "IDS: detects and alerts (passive, out-of-band). IPS: detects and blocks (active, inline). IPS preferred for critical networks."
  },
  {
    id: 12,
    front: "What is a UTM device?",
    back: "All-in-one security: firewall, IPS, antivirus, content filtering, VPN. Popular for SMBs. Examples: Fortinet, SonicWall."
  },
  {
    id: 13,
    front: "What is a load balancer?",
    back: "Distributes traffic across servers. Layer 4: balances by IP/port. Layer 7: by URL/headers/cookies. Provides redundancy and performance."
  },
  {
    id: 14,
    front: "Common load balancing algorithms?",
    back: "Round-robin (equal rotation), least connections (fewest sessions), source IP hash (same client → same server), weighted (by capacity)."
  },
  {
    id: 15,
    front: "Layer 4 vs Layer 7 load balancing?",
    back: "Layer 4: balances by IP/port (fast). Layer 7: by content/URL (smart but slower). L7 can route /images and /api differently."
  },
  {
    id: 16,
    front: "What is a forward proxy?",
    back: "Sits between clients and internet. Acts on behalf of clients. Used for content filtering, caching, policy enforcement."
  },
  {
    id: 17,
    front: "What is a reverse proxy?",
    back: "Sits in front of servers. Acts on behalf of servers. Used for load balancing, SSL offloading, caching. Clients unaware."
  },
  {
    id: 18,
    front: "What is a content filter?",
    back: "Blocks websites/content based on policies. Methods: URL filtering, keywords, categories. Common in schools/businesses."
  },
  {
    id: 19,
    front: "What is a VPN concentrator?",
    back: "Dedicated device managing hundreds/thousands of VPN connections. Handles encryption, authentication, tunnels. Enterprise feature."
  },
  {
    id: 20,
    front: "What is a modem?",
    back: "Converts digital to analog (modulation) and back (demodulation). Required for cable, DSL. Connects network to ISP."
  },
  {
    id: 21,
    front: "VoIP network requirements?",
    back: "QoS, low latency (<150ms), low jitter (<30ms), PoE, separate voice VLAN. Voice is intolerant of delays/loss."
  },
  {
    id: 22,
    front: "What is NAS?",
    back: "File-level storage via Ethernet. Uses SMB/NFS. Appears as network drive. Easy, cost-effective file sharing."
  },
  {
    id: 23,
    front: "What is SAN?",
    back: "Block-level storage via dedicated network (Fibre Channel, iSCSI). Accessed as local disk. Fast, expensive, enterprise."
  },
  {
    id: 24,
    front: "NAS vs SAN?",
    back: "NAS: file-level, Ethernet, shared files, easier/cheaper. SAN: block-level, dedicated network, raw disk, faster/expensive. NAS for files, SAN for performance."
  },
  {
    id: 25,
    front: "What is an SDN controller?",
    back: "Centralized 'brain' programming network devices. Separates control from data plane. Examples: Cisco DNA Center, VMware NSX."
  },
  {
    id: 26,
    front: "Wireless controller vs autonomous APs?",
    back: "Autonomous: standalone, all config local. Controller: centralized management of lightweight APs. Enterprise standard for 10+ APs."
  },
  {
    id: 27,
    front: "Typical network placement: firewall, switch, router?",
    back: "Internet → Router → Firewall (edge) → Core Switch → Access Switches → Devices. Firewall at perimeter for security."
  },
  {
    id: 28,
    front: "What is a DMZ design?",
    back: "Isolated segment for public servers. Design: Internet → External Firewall → DMZ → Internal Firewall → Internal Network."
  },
  {
    id: 29,
    front: "What is session persistence?",
    back: "Client requests always go to same server. Methods: source IP, cookie, SSL session ID. Needed for apps with local session data."
  },
  {
    id: 30,
    front: "Match device to layer: Hub, Switch, Router, Firewall, Load Balancer, WAP",
    back: "Hub: L1. Switch: L2. Router: L3. Firewall: L3-7. Load Balancer: L4 or L7. WAP: L2."
  }
];