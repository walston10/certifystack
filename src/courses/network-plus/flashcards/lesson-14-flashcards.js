// Flashcards for Lesson 14: Network Devices (Routers, Firewalls, Load Balancers)

export const lesson14Flashcards = [
  {
    id: 1,
    front: "What is a hub and why is it obsolete?",
    back: "Hub is a Layer 1 device that broadcasts all traffic to all ports. Creates ONE collision domain (all devices compete). Half-duplex only, no intelligence, massive security risk (everyone sees everyone's traffic). Speed limited to slowest device. Replaced by switches in the 1990s. Never use hubs."
  },
  {
    id: 2,
    front: "What is a repeater and when would you use one?",
    back: "Repeater is a Layer 1 device that regenerates/amplifies signals to extend cable distance beyond normal limits. Example: extend Ethernet beyond 100m. No intelligence, just boosts signal. Modern alternative: media converters or fiber. Still used for extending wireless coverage."
  },
  {
    id: 3,
    front: "What is a media converter?",
    back: "Media converter is a Layer 1 device that converts between media types, typically copper to fiber or vice versa. Example: convert 1000BASE-T (copper RJ45) to 1000BASE-SX (fiber). Allows connecting different cable types. Essential when transitioning between copper and fiber infrastructure."
  },
  {
    id: 4,
    front: "What is a bridge and how does it differ from a switch?",
    back: "Bridge is a Layer 2 device that connects two network segments, filtering traffic based on MAC addresses. Like a 2-port switch. Separates collision domains, reduces traffic. Historic: bridges were hardware, now switches (which are multi-port bridges). Wireless bridges connect networks wirelessly."
  },
  {
    id: 5,
    front: "What is a switch and what layer does it operate at?",
    back: "Switch is a Layer 2 device that forwards frames based on MAC addresses. Each port is its own collision domain. Features: MAC address table, VLANs, full-duplex, wire speed forwarding. Connects devices within same network/subnet. Layer 3 switches add routing capability (multilayer switch)."
  },
  {
    id: 6,
    front: "What is a wireless access point (WAP)?",
    back: "WAP is a Layer 2 device that provides wireless connectivity to a wired network. Converts between WiFi (802.11) and Ethernet. Operates as a bridge. Can be: autonomous (standalone) or lightweight (controller-managed). Key settings: SSID, channel, encryption, power levels."
  },
  {
    id: 7,
    front: "What is a router and what layer does it operate at?",
    back: "Router is a Layer 3 device that forwards packets between different networks based on IP addresses. Connects subnets, separates broadcast domains, performs routing (static/dynamic). Features: routing table, NAT, ACLs, default gateway for devices. Critical for internet connectivity and inter-VLAN routing."
  },
  {
    id: 8,
    front: "What is a Layer 3 switch (multilayer switch)?",
    back: "Layer 3 switch combines switching (Layer 2) and routing (Layer 3) in one device. Performs routing in hardware (ASIC) = much faster than traditional router. Uses SVIs for inter-VLAN routing. Best of both worlds: wire-speed switching within VLANs, hardware-accelerated routing between VLANs."
  },
  {
    id: 9,
    front: "What's the difference between a stateless and stateful firewall?",
    back: "Stateless: examines each packet independently against ACL rules (source/dest IP, port, protocol). No connection tracking. Fast but limited. Stateful: tracks connection state (TCP handshake), allows return traffic automatically, understands sessions. More secure, more resource-intensive. Modern firewalls are stateful."
  },
  {
    id: 10,
    front: "What is a Next-Generation Firewall (NGFW)?",
    back: "NGFW goes beyond stateful inspection with: 1) Application awareness (identifies apps regardless of port), 2) Deep packet inspection (DPI - examines payload), 3) Integrated IPS, 4) User/identity awareness, 5) SSL decryption/inspection, 6) Threat intelligence. Examples: Palo Alto, Cisco Firepower, Fortinet. Modern standard."
  },
  {
    id: 11,
    front: "What's the difference between IDS and IPS?",
    back: "IDS (Intrusion Detection System): monitors traffic, detects threats, sends alerts. PASSIVE - no blocking, only notifies. Out-of-band (copies traffic). IPS (Intrusion Prevention System): detects AND blocks threats automatically. ACTIVE - inline, can drop malicious packets. Preferred for critical networks."
  },
  {
    id: 12,
    front: "What is a Unified Threat Management (UTM) device?",
    back: "UTM combines multiple security functions in one device: firewall, IPS, antivirus, content filtering, VPN, anti-spam, DLP. 'All-in-one' security appliance. Pros: simplified management, lower cost. Cons: single point of failure, performance bottleneck. Popular for SMBs. Examples: Fortinet FortiGate, SonicWall."
  },
  {
    id: 13,
    front: "What is a load balancer and what layers can it operate at?",
    back: "Load balancer distributes traffic across multiple servers for high availability and performance. Layer 4 (transport): balances based on IP/port. Layer 7 (application): balances based on URL, headers, cookies, content type. Provides: redundancy, scalability, session persistence, health checks."
  },
  {
    id: 14,
    front: "What are common load balancing algorithms?",
    back: "Round-robin: equal distribution in rotation. Least connections: send to server with fewest active sessions. Source IP hash: same client always goes to same server (session persistence). Weighted: assign priority/capacity to servers. Least response time: send to fastest responding server."
  },
  {
    id: 15,
    front: "What's the difference between Layer 4 and Layer 7 load balancing?",
    back: "Layer 4: balances based on IP address and port (fast, no content inspection). Example: all HTTPS traffic to server pool. Layer 7: balances based on content (URL paths, cookies, headers). Example: /images to static server, /api to app server. Layer 7 = smarter but more resource-intensive."
  },
  {
    id: 16,
    front: "What is a forward proxy?",
    back: "Forward proxy sits between clients and internet, acting on behalf of clients. Clients connect TO proxy, proxy fetches content. Use cases: content filtering, caching, anonymity, policy enforcement. Corporate example: employees' web traffic goes through proxy before reaching internet. Client must be configured to use it."
  },
  {
    id: 17,
    front: "What is a reverse proxy?",
    back: "Reverse proxy sits in front of web servers, acting on behalf of servers. Clients think they're connecting to server but actually connect to proxy. Use cases: load balancing, SSL offloading, caching, security (hides backend servers), compression. Example: Nginx, HAProxy. Clients unaware of proxy."
  },
  {
    id: 18,
    front: "What is a content filter?",
    back: "Content filter blocks access to specific websites/content based on policies. Methods: URL filtering (blacklist/whitelist), keyword filtering, category filtering (social media, gambling). Can be: standalone appliance, feature in UTM/proxy, cloud-based service. Common in schools, businesses for acceptable use policies."
  },
  {
    id: 19,
    front: "What is a VPN concentrator?",
    back: "VPN concentrator is a dedicated device managing multiple VPN connections (hundreds to thousands of remote users). Handles: encryption/decryption, authentication, tunnel management. More powerful than router-based VPN. Enterprise feature for large remote workforce. Examples: Cisco ASA, Palo Alto GlobalProtect."
  },
  {
    id: 20,
    front: "What is a modem and what does it do?",
    back: "Modem (modulator-demodulator) converts digital signals to analog (modulation) and vice versa (demodulation). Required for: cable internet (DOCSIS), DSL, dial-up (obsolete). Your ISP provides the modem. Often combined with router in home 'gateway' devices. Connects your network to ISP."
  },
  {
    id: 21,
    front: "What are VoIP devices and what network considerations do they require?",
    back: "VoIP devices: IP phones, VoIP gateways (convert traditional phones to IP), session border controllers. Network requirements: QoS (prioritize voice traffic), low latency (<150ms), low jitter (<30ms), sufficient bandwidth, Power over Ethernet (PoE), separate voice VLAN recommended. Voice is intolerant of delays/packet loss."
  },
  {
    id: 22,
    front: "What is NAS (Network Attached Storage)?",
    back: "NAS is file-level storage connected to network via Ethernet. Accessed using file protocols (SMB/CIFS, NFS, AFP). Appears as network drive. Use cases: file sharing, backups, media streaming. Pros: easy setup, cost-effective. Cons: limited performance vs SAN. Examples: Synology, QNAP, Western Digital."
  },
  {
    id: 23,
    front: "What is SAN (Storage Area Network)?",
    back: "SAN is block-level storage network using dedicated high-speed protocols (Fibre Channel, iSCSI, FCoE). Separate from main LAN. Accessed as local disk by servers. Use cases: databases, virtualization, high-performance apps. Pros: very fast, scalable. Cons: expensive, complex. Enterprise data centers."
  },
  {
    id: 24,
    front: "What's the difference between NAS and SAN?",
    back: "NAS: file-level, Ethernet network, accessed via file shares (SMB/NFS), easier/cheaper, shared files. SAN: block-level, dedicated network (FC/iSCSI), accessed as raw disk, faster/expensive, dedicated storage. Analogy: NAS = shared folder, SAN = dedicated hard drive. NAS for files, SAN for performance."
  },
  {
    id: 25,
    front: "What is an SDN controller?",
    back: "SDN (Software-Defined Networking) controller is centralized 'brain' that programs network devices. Separates control plane (decisions) from data plane (forwarding). Benefits: centralized management, automation, programmability via APIs. Examples: Cisco DNA Center, VMware NSX. Uses OpenFlow protocol to communicate with switches."
  },
  {
    id: 26,
    front: "What is the difference between a wireless controller and autonomous APs?",
    back: "Autonomous AP: fully functional standalone, all config local, harder to manage at scale. Wireless controller: centralized management of multiple 'lightweight' APs. Controller handles: config, security, client roaming, load balancing. APs just provide radio, minimal local config. Enterprise standard for 10+ APs."
  },
  {
    id: 27,
    front: "Quick scenario: Where would you place a firewall, a switch, and a router in a typical network?",
    back: "Internet → Router (or modem) → Firewall (edge security) → Core Switch → Distribution/Access Switches → End Devices. Firewall at network perimeter protects from internet threats. Router connects to ISP and routes between networks. Switches connect devices within network. Can also place firewall between internal segments."
  },
  {
    id: 28,
    front: "What is a DMZ and how is it typically designed?",
    back: "DMZ (Demilitarized Zone/screened subnet) is isolated network segment for public-facing servers (web, email, DNS). Typical design: Internet → External Firewall → DMZ → Internal Firewall → Internal Network. If DMZ server compromised, attacker can't easily reach internal network. Also called 'three-legged firewall' design."
  },
  {
    id: 29,
    front: "What is session persistence (sticky sessions) in load balancing?",
    back: "Session persistence ensures a client's requests always go to the same backend server during a session. Methods: source IP, cookie-based, SSL session ID. Needed when: application stores session data locally, shopping carts, login sessions. Without it, user might hit different server and lose session state."
  },
  {
    id: 30,
    front: "Speed drill: Match device to OSI layer - Hub, Switch, Router, Firewall, Load Balancer, WAP",
    back: "Hub: Layer 1 (Physical). Switch: Layer 2 (Data Link). Router: Layer 3 (Network). Firewall: Layers 3-7 (depends on type). Load Balancer: Layer 4 or 7. WAP: Layer 2. Know device layers for exam troubleshooting questions!"
  }
];