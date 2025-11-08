// Domain 1: Networking Concepts (21 questions)
const domain1Questions = [
  {
    id: "d1-q001",
    domain: "1.0",
    objective: "1.1",
    question: "Which layer of the OSI model is responsible for end-to-end communication and includes protocols like TCP and UDP?",
    options: [
      "Layer 4 - Transport",
      "Layer 3 - Network",
      "Layer 5 - Session",
      "Layer 7 - Application"
    ],
    correct: 0,
    explanation: "The Transport layer (Layer 4) handles end-to-end communication between hosts. TCP provides reliable, connection-oriented delivery while UDP provides faster, connectionless delivery. Layer 3 handles routing, Layer 5 manages sessions, and Layer 7 deals with application protocols."
  },
  {
    id: "d1-q002",
    domain: "1.0",
    objective: "1.1",
    question: "A network administrator is troubleshooting connectivity issues. Users can access local network resources but cannot reach the internet. The administrator uses the OSI model to isolate the problem. At which layer should the administrator focus their troubleshooting efforts?",
    options: [
      "Layer 2 - Data Link",
      "Layer 3 - Network",
      "Layer 4 - Transport",
      "Layer 7 - Application"
    ],
    correct: 1,
    explanation: "Since users can access local resources but not the internet, the issue is likely at Layer 3 (Network layer), which handles routing between different networks. This could indicate a problem with the default gateway, routing configuration, or ISP connection. Layer 2 handles local switching, Layer 4 manages end-to-end connections, and Layer 7 deals with application protocols."
  },
  {
    id: "d1-q003",
    domain: "1.0",
    objective: "1.1",
    question: "What is the primary difference between TCP and UDP?",
    options: [
      "TCP is faster than UDP",
      "UDP provides error checking, TCP does not",
      "TCP is connection-oriented and reliable, UDP is connectionless and faster",
      "UDP operates at Layer 2, TCP at Layer 4"
    ],
    correct: 2,
    explanation: "TCP establishes a connection before data transfer (three-way handshake) and guarantees delivery through acknowledgments, making it reliable but slower. UDP sends data without establishing a connection and doesn't guarantee delivery, making it faster and suitable for streaming/VoIP. Both operate at Layer 4."
  },
  {
    id: "d1-q004",
    domain: "1.0",
    objective: "1.4",
    question: "A company is setting up a new office and needs to assign IP addresses to 50 devices on the same subnet. The network administrator has been allocated the 192.168.10.0/24 network. Which subnet mask should be used to accommodate all devices while minimizing wasted IP addresses?",
    options: [
      "255.255.255.0 (/24)",
      "255.255.255.128 (/25)",
      "255.255.255.192 (/26)",
      "255.255.255.224 (/27)"
    ],
    correct: 2,
    explanation: "A /26 subnet mask (255.255.255.192) provides 62 usable host addresses (2^6 - 2 = 62), which accommodates 50 devices with minimal waste. /24 would waste 204 addresses, /25 wastes 76 addresses, and /27 only provides 30 usable addresses (not enough)."
  },
  {
    id: "d1-q005",
    domain: "1.0",
    objective: "1.4",
    question: "What is the network address for the IP 192.168.15.67/26?",
    options: [
      "192.168.15.64",
      "192.168.15.0",
      "192.168.15.32",
      "192.168.15.128"
    ],
    correct: 0,
    explanation: "A /26 subnet mask is 255.255.255.192. The increment is 256-192=64. The network addresses are 0, 64, 128, 192. Since 67 falls between 64 and 128, the network address is 192.168.15.64."
  },
  {
    id: "d1-q006",
    domain: "1.0",
    objective: "1.4",
    question: "A network technician notices that a user's workstation has automatically assigned itself an IP address of 169.254.100.45. What does this indicate?",
    options: [
      "The DHCP server successfully assigned an address",
      "The workstation cannot reach the DHCP server",
      "The workstation is configured with a static IP",
      "The DNS server is offline"
    ],
    correct: 1,
    explanation: "169.254.0.0/16 is the APIPA (Automatic Private IP Addressing) range. When a DHCP client cannot reach a DHCP server, it assigns itself an address in this range. This indicates a DHCP problem - the server may be down, unreachable, or out of addresses. Check physical connectivity, VLAN configuration, and DHCP server status."
  },
  {
    id: "d1-q007",
    domain: "1.0",
    objective: "1.1",
    question: "Which PDU (Protocol Data Unit) is used at the Transport layer?",
    options: [
      "Frame",
      "Segment",
      "Packet",
      "Bit"
    ],
    correct: 1,
    explanation: "The Transport layer (Layer 4) uses segments as its PDU. The Data Link layer uses frames, the Network layer uses packets, and the Physical layer transmits bits. Remember: Application/Presentation/Session use data, Transport uses segments, Network uses packets, Data Link uses frames, and Physical uses bits."
  },
  {
    id: "d1-q008",
    domain: "1.0",
    objective: "1.4",
    question: "An IT manager needs to create a point-to-point WAN link between two routers. Which subnet mask provides exactly the number of usable IP addresses needed?",
    options: [
      "255.255.255.248 (/29)",
      "255.255.255.252 (/30)",
      "255.255.255.254 (/31)",
      "255.255.255.255 (/32)"
    ],
    correct: 1,
    explanation: "255.255.255.252 is a /30 subnet mask with only 2 host bits, providing 2 usable hosts (2^2 - 2 = 2). This is perfect for point-to-point WAN links between two routers. /29 gives 6 hosts (wasteful), /31 is a special case for point-to-point links (RFC 3021), and /32 is a host route."
  },
  {
    id: "d1-q009",
    domain: "1.0",
    objective: "1.4",
    question: "How many usable host addresses are available in a /28 subnet?",
    options: [
      "16",
      "14",
      "30",
      "62"
    ],
    correct: 1,
    explanation: "A /28 subnet has 4 host bits (32-28=4). The formula is 2^n - 2 where n is the number of host bits. So 2^4 - 2 = 16 - 2 = 14 usable hosts. We subtract 2 for the network address and broadcast address."
  },
  {
    id: "d1-q010",
    domain: "1.0",
    objective: "1.4",
    question: "A system administrator is configuring a development lab that requires complete isolation from the production network. Which IP address range should be used?",
    options: [
      "192.168.1.0/24",
      "172.16.0.0/12",
      "10.0.0.0/8",
      "Any of the above"
    ],
    correct: 3,
    explanation: "All three options are valid private IP ranges defined by RFC 1918: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. Any of these can be used for the isolated development lab. Private addresses are not routable on the public internet, providing natural isolation. Choose based on the size needed: /8 for very large networks, /12 for medium, /16 for small."
  },
  {
    id: "d1-q011",
    domain: "1.0",
    objective: "1.6",
    question: "A user calls the help desk reporting they cannot access any websites by name, but can access them using IP addresses. What is the most likely cause?",
    options: [
      "Default gateway is misconfigured",
      "DNS server is not responding",
      "DHCP server is offline",
      "Subnet mask is incorrect"
    ],
    correct: 1,
    explanation: "If websites work by IP address but not by name, DNS resolution is failing. The DNS server may be down, unreachable, or the client's DNS settings are incorrect. The default gateway, DHCP, and subnet mask are working correctly since IP-based access succeeds."
  },
  {
    id: "d1-q012",
    domain: "1.0",
    objective: "1.1",
    question: "At which OSI layer do switches primarily operate?",
    options: [
      "Layer 1 - Physical",
      "Layer 3 - Network",
      "Layer 2 - Data Link",
      "Layer 4 - Transport"
    ],
    correct: 2,
    explanation: "Switches are Layer 2 devices that forward frames based on MAC addresses. They maintain a MAC address table to make forwarding decisions within a single broadcast domain. Hubs operate at Layer 1, routers at Layer 3, and load balancers can operate at Layer 4 or 7."
  },
  {
    id: "d1-q013",
    domain: "1.0",
    objective: "1.4",
    question: "A network engineer is designing an IP addressing scheme for a new building with 4 departments that need network isolation. The allocated network is 192.168.1.0/24. If each department requires 50 usable IP addresses, which subnetting approach will work?",
    options: [
      "Create 4 subnets using /26 mask (62 hosts each)",
      "Create 4 subnets using /27 mask (30 hosts each)",
      "Create 4 subnets using /28 mask (14 hosts each)",
      "Keep the /24 and use VLANs without subnetting"
    ],
    correct: 0,
    explanation: "A /26 mask (255.255.255.192) creates 4 subnets from a /24 network, each providing 62 usable hosts - enough for 50 devices per department. The subnets would be: 192.168.1.0/26 (0-63), 192.168.1.64/26 (64-127), 192.168.1.128/26 (128-191), and 192.168.1.192/26 (192-255). /27 only gives 30 hosts (not enough), /28 gives 14 hosts (insufficient), and VLANs alone don't provide IP isolation."
  },
  {
    id: "d1-q014",
    domain: "1.0",
    objective: "1.6",
    question: "What does the DORA process describe in networking?",
    options: [
      "The four-step DHCP process: Discover, Offer, Request, Acknowledge",
      "The DNS resolution stages",
      "The routing protocol convergence steps",
      "The data encapsulation order in the OSI model"
    ],
    correct: 0,
    explanation: "DORA describes the DHCP process: 1) Client sends Discover broadcast, 2) Server sends Offer with IP, 3) Client sends Request accepting the offer, 4) Server sends Acknowledge confirming the lease. This is how devices obtain IP addresses automatically."
  },
  {
    id: "d1-q015",
    domain: "1.0",
    objective: "1.5",
    question: "Which port does HTTPS use by default?",
    options: [
      "Port 80",
      "Port 22",
      "Port 443",
      "Port 8080"
    ],
    correct: 2,
    explanation: "HTTPS (HTTP Secure) uses port 443 by default for encrypted web traffic using TLS/SSL. Regular HTTP uses port 80, SSH uses port 22, and port 8080 is commonly used as an alternate HTTP port for web proxies or development servers."
  },
  {
    id: "d1-q016",
    domain: "1.0",
    objective: "1.6",
    question: "A company's video conferencing system is experiencing poor quality with choppy audio and frozen video. Network monitoring shows adequate bandwidth is available. Which protocol should the administrator check to ensure time synchronization across all devices?",
    options: [
      "SNMP",
      "Syslog",
      "NTP",
      "TFTP"
    ],
    correct: 2,
    explanation: "NTP (Network Time Protocol) synchronizes clocks across network devices using port 123. Accurate time is critical for video conferencing, VoIP quality, logs correlation, and security certificates. Time drift can cause poor real-time application performance even with adequate bandwidth. SNMP monitors devices, Syslog collects logs, and TFTP transfers files."
  },
  {
    id: "d1-q017",
    domain: "1.0",
    objective: "1.1",
    question: "Which layer of the OSI model is responsible for establishing, maintaining, and terminating sessions between applications?",
    options: [
      "Layer 4 - Transport",
      "Layer 6 - Presentation",
      "Layer 7 - Application",
      "Layer 5 - Session"
    ],
    correct: 3,
    explanation: "The Session layer (Layer 5) manages communication sessions between applications. It establishes, maintains, and terminates connections. Examples include RPC and NetBIOS. Layer 4 handles segments, Layer 6 translates/encrypts data, and Layer 7 provides network services to applications."
  },
  {
    id: "d1-q018",
    domain: "1.0",
    objective: "1.4",
    question: "What is the broadcast address for the network 10.50.100.0/22?",
    options: [
      "10.50.100.255",
      "10.50.101.255",
      "10.50.102.255",
      "10.50.103.255"
    ],
    correct: 3,
    explanation: "A /22 mask is 255.255.252.0. The increment in the third octet is 256-252=4. Starting at 100, the network range is 10.50.100.0 to 10.50.103.255. The broadcast address is the last address in the range: 10.50.103.255."
  },
  {
    id: "d1-q019",
    domain: "1.0",
    objective: "1.4",
    question: "A multinational corporation is transitioning to IPv6. Which IPv6 address type should be used for servers that need to be accessible from the internet?",
    options: [
      "Link-local addresses (fe80::/10)",
      "Unique local addresses (fc00::/7)",
      "Multicast addresses (ff00::/8)",
      "Global unicast addresses (2000::/3)"
    ],
    correct: 3,
    explanation: "Global unicast addresses (starting with 2000::/3) are used for internet-routable IPv6 addresses, similar to public IPv4 addresses. Link-local (fe80::/10) is only for local network communication, unique local (fc00::/7) is like private IPv4 addresses, and multicast (ff00::/8) is for one-to-many communication."
  },
  {
    id: "d1-q020",
    domain: "1.0",
    objective: "1.5",
    question: "A network administrator needs to provide secure remote command-line access to network switches and routers. Which protocol and port should be used?",
    options: [
      "Telnet on port 23",
      "FTP on port 21",
      "HTTP on port 80",
      "SSH on port 22"
    ],
    correct: 3,
    explanation: "SSH (Secure Shell) on port 22 provides encrypted remote access to network devices. It replaced Telnet (port 23), which transmits credentials in plain text. SSH encrypts the entire session, protecting against eavesdropping and man-in-the-middle attacks."
  },
  {
    id: "d1-q021",
    domain: "1.0",
    objective: "1.5",
    question: "Which protocol is used to automatically assign IP addresses to clients on a network?",
    options: [
      "DNS",
      "ARP",
      "NAT",
      "DHCP"
    ],
    correct: 3,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses, subnet masks, default gateways, and DNS servers to clients. It uses ports 67 (server) and 68 (client). DNS resolves names, ARP maps IP to MAC addresses, and NAT translates private to public IPs."
  }
];

// Domain 2: Network Infrastructure (18 questions)
const domain2Questions = [
  {
    id: "d2-q001",
    domain: "2.0",
    objective: "2.1",
    question: "A data center is being upgraded to support 10 Gbps connections over copper cabling. The cable runs are 85 meters long. Which cable type is most appropriate?",
    options: [
      "Cat6 (can do 10 Gbps up to 55m)",
      "Cat6a (can do 10 Gbps up to 100m)",
      "Cat5e (limited to 1 Gbps)",
      "Cat7 (overkill but would work)"
    ],
    correct: 1,
    explanation: "Cat6a can achieve 10 Gbps speeds up to 100 meters, making it perfect for 85-meter runs. Cat6 can only do 10 Gbps up to 55 meters. Cat5e is limited to 1 Gbps. While Cat7 would work, it's more expensive and typically unnecessary. This is a critical specification to remember for the exam."
  },
  {
    id: "d2-q002",
    domain: "2.0",
    objective: "2.1",
    question: "Which cable standard uses all eight wires for data transmission?",
    options: [
      "1000BASE-T (Gigabit Ethernet)",
      "100BASE-TX (Fast Ethernet)",
      "10BASE-T (Ethernet)",
      "100BASE-FX (Fiber)"
    ],
    correct: 0,
    explanation: "Gigabit Ethernet (1000BASE-T) uses all eight wires (four pairs) for simultaneous bidirectional transmission. 10BASE-T and 100BASE-TX only use four wires (two pairs). This is why gigabit requires properly terminated cables with all pairs functional."
  },
  {
    id: "d2-q003",
    domain: "2.0",
    objective: "2.3",
    question: "A growing company has 250 employees across 5 departments. The IT manager wants to improve security by preventing broadcast traffic from one department from reaching others, while using a single switch. What should be implemented?",
    options: [
      "Purchase 5 separate switches",
      "Implement VLANs to logically segment the network",
      "Use different subnet masks for each department",
      "Install a firewall between departments"
    ],
    correct: 1,
    explanation: "VLANs (Virtual LANs) logically segment a physical network into separate broadcast domains using a single switch. This improves security, performance, and organization without requiring separate physical switches. Devices in different VLANs cannot communicate without a router or Layer 3 switch, even on the same physical switch."
  },
  {
    id: "d2-q004",
    domain: "2.0",
    objective: "2.2",
    question: "A network engineer is configuring OSPF on a new router. The company has multiple office locations. In OSPF, what is the purpose of Area 0?",
    options: [
      "It serves as the backbone area that all other areas must connect to",
      "It designates the default area for all new routes",
      "It identifies the highest priority router in the network",
      "It represents the area with the fastest links"
    ],
    correct: 0,
    explanation: "Area 0 is the OSPF backbone area. All other OSPF areas must connect to Area 0, either directly or through a virtual link. This hierarchical design improves scalability and reduces routing overhead by preventing routing loops and limiting LSA flooding."
  },
  {
    id: "d2-q005",
    domain: "2.0",
    objective: "2.4",
    question: "A coffee shop is upgrading its public Wi-Fi to support more customers with newer devices. The owner wants the latest standard with the best performance. Which wireless standard should be deployed?",
    options: [
      "802.11ax (Wi-Fi 6E) with 6 GHz support",
      "802.11ac (Wi-Fi 5)",
      "802.11n (Wi-Fi 4)",
      "802.11g"
    ],
    correct: 0,
    explanation: "802.11ax (Wi-Fi 6E) is the latest standard with operation in the 6 GHz band, providing more channels and less interference. OFDMA improves efficiency by allowing multiple clients to share channels simultaneously. Wi-Fi 6E also supports 2.4 GHz and 5 GHz for backward compatibility."
  },
  {
    id: "d2-q006",
    domain: "2.0",
    objective: "2.1",
    question: "A company needs to connect two buildings 5 kilometers apart with a high-speed network connection. Which cable type is most appropriate?",
    options: [
      "Multi-mode fiber",
      "Single-mode fiber",
      "Cat6a twisted pair",
      "Coaxial cable"
    ],
    correct: 1,
    explanation: "Single-mode fiber uses a single light ray and can transmit data over long distances (40+ km). Multi-mode fiber is limited to shorter distances (up to 2 km). Cat6a is limited to 100 meters. SMF has a smaller core diameter (9 microns vs 50-62.5 microns) and uses laser light sources, making it ideal for long-distance connections."
  },
  {
    id: "d2-q007",
    domain: "2.0",
    objective: "2.3",
    question: "A network administrator notices intermittent connectivity issues. After investigation, they discover a switching loop is causing broadcast storms. Which protocol should be enabled to prevent this?",
    options: [
      "VTP (VLAN Trunking Protocol)",
      "STP (Spanning Tree Protocol)",
      "HSRP (Hot Standby Router Protocol)",
      "LACP (Link Aggregation Control Protocol)"
    ],
    correct: 1,
    explanation: "STP (Spanning Tree Protocol) prevents Layer 2 loops by blocking redundant paths and activating them only if the primary path fails. It elects a root bridge and places ports in blocking, listening, learning, or forwarding states. RSTP is the faster modern version that converges more quickly."
  },
  {
    id: "d2-q008",
    domain: "2.0",
    objective: "2.3",
    question: "A company has multiple VLANs and needs to carry traffic for all VLANs between two switches. What type of port configuration is required on the inter-switch connection?",
    options: [
      "Access port",
      "Trunk port with 802.1Q tagging",
      "Hybrid port",
      "Routed port"
    ],
    correct: 1,
    explanation: "802.1Q trunk ports carry traffic for multiple VLANs between switches by adding a 4-byte VLAN tag to Ethernet frames. Access ports carry traffic for only one VLAN (untagged). Trunk ports allow VLANs to span across multiple switches while keeping broadcast domains separate."
  },
  {
    id: "d2-q009",
    domain: "2.0",
    objective: "2.2",
    question: "A small business is implementing its first dynamic routing protocol. The network has 3 routers in a simple topology. Which routing protocol would be easiest to configure but has limitations for larger networks?",
    options: [
      "OSPF (link-state)",
      "RIP (distance-vector)",
      "EIGRP (hybrid)",
      "BGP (path-vector)"
    ],
    correct: 1,
    explanation: "RIP (Routing Information Protocol) is a distance-vector protocol that's simple to configure but has limitations: maximum 15 hop count, slow convergence, and uses hop count as the only metric (doesn't consider bandwidth). It's suitable for small, simple networks. OSPF is more complex but scales better. EIGRP is Cisco proprietary. BGP is for internet routing."
  },
  {
    id: "d2-q010",
    domain: "2.0",
    objective: "2.4",
    question: "A warehouse with heavy machinery is experiencing Wi-Fi interference on the 2.4 GHz band. The network administrator wants to minimize interference between three access points. Which channels should be used?",
    options: [
      "Channels 1, 2, and 3",
      "Channels 1, 6, and 11",
      "Channels 3, 6, and 9",
      "Channels 2, 7, and 12"
    ],
    correct: 1,
    explanation: "Channels 1, 6, and 11 are the only non-overlapping channels in the 2.4 GHz band in North America. Each channel is 22 MHz wide but only 5 MHz apart, causing overlap. Using non-overlapping channels minimizes interference between nearby access points. The 5 GHz band has many more non-overlapping channels available."
  },
  {
    id: "d2-q011",
    domain: "2.0",
    objective: "2.1",
    question: "A data center technician needs to install fiber optic patch cables in high-density racks where space is limited. Which connector type is most appropriate due to its small form factor?",
    options: [
      "ST (Straight Tip) connector",
      "SC (Subscriber Connector)",
      "LC (Lucent Connector)",
      "MTRJ (Mechanical Transfer Registered Jack)"
    ],
    correct: 2,
    explanation: "LC connectors are the most common for modern fiber installations due to their small form factor - about half the size of SC connectors. They use a push-pull locking mechanism and are ideal for high-density environments. ST connectors use a bayonet twist-lock and are older. MTRJ combines two fibers in one connector but is less common."
  },
  {
    id: "d2-q012",
    domain: "2.0",
    objective: "2.1",
    question: "A company needs to route traffic between different IP subnets. Which network device should be used?",
    options: [
      "Switch",
      "Bridge",
      "Router",
      "Hub"
    ],
    correct: 2,
    explanation: "Routers operate at Layer 3 (Network layer) and forward packets between different networks based on IP addresses. They maintain routing tables and make intelligent path decisions. Switches operate at Layer 2 using MAC addresses, bridges also at Layer 2, and hubs at Layer 1 (simply repeat signals)."
  },
  {
    id: "d2-q013",
    domain: "2.0",
    objective: "2.3",
    question: "During network troubleshooting, a technician discovers that untagged frames arriving on a trunk port are being placed in the wrong VLAN. Which VLAN configuration needs to be verified?",
    options: [
      "Management VLAN",
      "Voice VLAN",
      "Native VLAN",
      "Data VLAN"
    ],
    correct: 2,
    explanation: "The native VLAN (usually VLAN 1 by default) carries untagged frames on a trunk port. Any frame without an 802.1Q tag is placed in the native VLAN. For security, it's best practice to change the native VLAN from the default and not use it for data traffic. Mismatched native VLANs between switches can cause connectivity issues."
  },
  {
    id: "d2-q014",
    domain: "2.0",
    objective: "2.2",
    question: "A company is migrating from RIP to OSPF for better scalability. Which metric does OSPF use to determine the best path?",
    options: [
      "Hop count",
      "Bandwidth",
      "Cost based on bandwidth",
      "Delay"
    ],
    correct: 2,
    explanation: "OSPF uses cost as its metric, calculated based on bandwidth (cost = reference bandwidth / interface bandwidth). Lower cost = better path. This allows OSPF to make intelligent routing decisions based on link speed. RIP only uses hop count, EIGRP uses a composite metric including bandwidth and delay, and BGP uses path attributes."
  },
  {
    id: "d2-q015",
    domain: "2.0",
    objective: "2.1",
    question: "An e-commerce website is experiencing slow response times during peak traffic. The infrastructure team wants to distribute incoming web traffic across multiple servers. What device should be implemented?",
    options: [
      "Firewall",
      "Proxy server",
      "Load balancer",
      "Content filter"
    ],
    correct: 2,
    explanation: "Load balancers distribute incoming traffic across multiple servers to improve performance, prevent overload, and provide high availability. They can operate at Layer 4 (transport) or Layer 7 (application). If one server fails, the load balancer redirects traffic to healthy servers. Methods include round-robin, least connections, and weighted distribution."
  },
  {
    id: "d2-q016",
    domain: "2.0",
    objective: "2.1",
    question: "A startup is launching a new web application and wants to avoid purchasing physical servers. They need virtual machines they can configure and manage themselves. Which cloud service model should they use?",
    options: [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "DaaS (Desktop as a Service)",
      "IaaS (Infrastructure as a Service)"
    ],
    correct: 3,
    explanation: "IaaS (Infrastructure as a Service) provides virtual machines, storage, and networking that customers manage. Examples include AWS EC2 and Azure VMs. PaaS provides a platform for development without managing VMs (Heroku), SaaS provides ready-to-use applications (Office 365), and DaaS provides virtual desktops."
  },
  {
    id: "d2-q017",
    domain: "2.0",
    objective: "2.4",
    question: "A hotel chain wants to provide seamless Wi-Fi coverage across their large property using multiple access points with the same network name. What wireless technology should be implemented?",
    options: [
      "WPA3 encryption",
      "Channel bonding",
      "Beamforming",
      "Extended Service Set (ESS)"
    ],
    correct: 3,
    explanation: "An ESS (Extended Service Set) uses multiple access points with the same SSID to create a larger coverage area. Clients can roam between APs seamlessly. Each AP is identified by a unique BSSID (MAC address). This contrasts with a BSS (Basic Service Set), which is a single AP."
  },
  {
    id: "d2-q018",
    domain: "2.0",
    objective: "2.1",
    question: "A security team wants to detect AND actively block malicious traffic in real-time before it reaches internal servers. Which device should be deployed?",
    options: [
      "IDS (Intrusion Detection System)",
      "Proxy server",
      "Packet sniffer",
      "IPS (Intrusion Prevention System)"
    ],
    correct: 3,
    explanation: "An IPS (Intrusion Prevention System) actively blocks malicious traffic inline by sitting in the data path. It can drop packets or terminate sessions in real-time. An IDS only detects and alerts but doesn't block (passive monitoring). Proxies forward traffic, and sniffers only capture packets for analysis."
  }
];

// Domain 3: Network Operations (18 questions)
const domain3Questions = [
  {
    id: "d3-q001",
    domain: "3.0",
    objective: "3.1",
    question: "A new network administrator joins a company and needs to understand the current network infrastructure. Which document should contain detailed network diagrams showing both physical cable layouts and logical IP addressing schemes?",
    options: [
      "Network documentation",
      "Service level agreement (SLA)",
      "Change management log",
      "Incident response plan"
    ],
    correct: 0,
    explanation: "Network documentation should include comprehensive diagrams showing physical layouts (rack elevations, cable runs, patch panel mappings) and logical topologies (IP schemes, VLANs, routing). This documentation is critical for troubleshooting, planning changes, and disaster recovery. SLAs define service expectations, change logs track modifications, and incident plans detail security response procedures."
  },
  {
    id: "d3-q002",
    domain: "3.0",
    objective: "3.1",
    question: "A company wants to centrally collect log messages from routers, switches, and firewalls for security monitoring and troubleshooting. Which protocol should be configured on all network devices?",
    options: [
      "Syslog",
      "SNMP",
      "NetFlow",
      "NTP"
    ],
    correct: 0,
    explanation: "Syslog is the standard protocol for forwarding log messages to a central logging server. It uses severity levels 0-7 (Emergency to Debug) and typically uses UDP port 514. Centralized logging enables easier troubleshooting, security analysis, and compliance reporting. SNMP monitors device status, NetFlow analyzes traffic patterns, and NTP synchronizes time."
  },
  {
    id: "d3-q003",
    domain: "3.0",
    objective: "3.2",
    question: "An IT manager is implementing a backup strategy. Full backups are performed weekly, and they want daily backups that only copy data changed since the last full backup. Which backup type should be used daily?",
    options: [
      "Differential backup",
      "Incremental backup",
      "Full backup",
      "Synthetic backup"
    ],
    correct: 0,
    explanation: "Differential backups copy all data changed since the last full backup. The differential grows larger each day until the next full backup. To restore, you need the last full backup plus the latest differential. Incremental only backs up changes since the last backup of any type (faster but requires full + all incrementals to restore)."
  },
  {
    id: "d3-q004",
    domain: "3.0",
    objective: "3.3",
    question: "A critical application requires the network gateway to remain available even if the primary router fails. Two routers are available. What protocol should be configured to provide automatic failover using a shared virtual IP address?",
    options: [
      "HSRP (Hot Standby Router Protocol)",
      "LACP (Link Aggregation)",
      "STP (Spanning Tree Protocol)",
      "BGP (Border Gateway Protocol)"
    ],
    correct: 0,
    explanation: "HSRP (Hot Standby Router Protocol) is Cisco's first hop redundancy protocol. It creates a virtual IP address shared by multiple routers. One router is active, others are standby. If the active fails, a standby takes over automatically within seconds. VRRP is the standard protocol that does the same thing. GLBP provides both redundancy and load balancing."
  },
  {
    id: "d3-q005",
    domain: "3.0",
    objective: "4.1",
    question: "A data center manager wants to restrict physical access to the server room to authorized personnel only. Which security controls should be implemented? (Choose the BEST combination)",
    options: [
      "Posted signs and security awareness training",
      "Badge readers and biometric scanners",
      "Firewalls and intrusion detection",
      "Antivirus software and encryption"
    ],
    correct: 1,
    explanation: "Physical access controls protect physical access to facilities and equipment. Badge readers with RFID cards and biometric scanners (fingerprint, retina) provide strong authentication. Additional controls include mantraps, security guards, cameras, and locks. The other options are logical controls (software/network-based) or administrative controls (policies/training)."
  },
  {
    id: "d3-q006",
    domain: "3.0",
    objective: "3.1",
    question: "A network engineer notices unusual traffic patterns and wants devices to send automatic alerts when specific events occur, rather than constantly polling every device. Which SNMP feature should be configured?",
    options: [
      "SNMP polling",
      "SNMP traps",
      "SNMP queries",
      "SNMP walks"
    ],
    correct: 1,
    explanation: "SNMP traps are event-driven notifications sent by devices to the management station when specific events occur (interface down, high CPU, threshold exceeded). Unlike polling where the manager constantly asks devices for updates, traps are unsolicited alerts sent only when needed. This is more efficient for critical events and reduces network overhead."
  },
  {
    id: "d3-q007",
    domain: "3.0",
    objective: "3.2",
    question: "A company's disaster recovery plan requires that after a major outage, critical systems must be restored within 4 hours. Which recovery metric does this represent?",
    options: [
      "RPO (Recovery Point Objective)",
      "RTO (Recovery Time Objective)",
      "MTBF (Mean Time Between Failures)",
      "MTTR (Mean Time To Repair)"
    ],
    correct: 1,
    explanation: "RTO (Recovery Time Objective) defines how quickly systems must be restored after a disaster - in this case, 4 hours. RPO (Recovery Point Objective) defines acceptable data loss measured in time (e.g., 1 hour = lose up to 1 hour of data). RTO drives infrastructure investment decisions (hot site vs warm site vs cold site)."
  },
  {
    id: "d3-q008",
    domain: "3.0",
    objective: "3.2",
    question: "An organization wants to ensure their backup strategy protects against ransomware, hardware failure, and site disasters. Which backup rule should they follow?",
    options: [
      "Grandfather-Father-Son rotation",
      "3-2-1 backup rule",
      "Differential backup scheme",
      "Continuous data protection"
    ],
    correct: 1,
    explanation: "The 3-2-1 rule is a backup best practice: maintain 3 copies of data (production + 2 backups), store on 2 different media types (disk and tape/cloud), keep 1 copy offsite (remote location or cloud). This protects against hardware failure (multiple copies), media failure (different types), and site disasters (offsite copy). It also helps prevent ransomware from encrypting all copies."
  },
  {
    id: "d3-q009",
    domain: "3.0",
    objective: "3.3",
    question: "A network administrator wants to increase bandwidth and provide redundancy between two switches by combining four physical network links into a single logical link. Which protocol should be used?",
    options: [
      "STP (Spanning Tree Protocol)",
      "LACP (Link Aggregation Control Protocol)",
      "LLDP (Link Layer Discovery Protocol)",
      "HSRP (Hot Standby Router Protocol)"
    ],
    correct: 1,
    explanation: "LACP (Link Aggregation Control Protocol) defined in 802.3ad combines multiple physical links into a single logical link for increased bandwidth and redundancy. If one link fails, traffic continues on remaining links. Cisco's proprietary version is PAgP. This can aggregate up to 8 links, providing both load balancing and failover."
  },
  {
    id: "d3-q010",
    domain: "3.0",
    objective: "3.1",
    question: "A network security analyst needs to analyze bandwidth usage patterns and identify which applications are consuming the most bandwidth. Which monitoring technology provides detailed traffic flow information?",
    options: [
      "Syslog",
      "NetFlow/sFlow",
      "SNMP polling",
      "Packet capture (PCAP)"
    ],
    correct: 1,
    explanation: "NetFlow (Cisco) and sFlow (industry standard) collect traffic flow data showing source/destination IPs, protocols, ports, and bytes transferred. This enables bandwidth analysis, capacity planning, and security monitoring without capturing full packets. SNMP monitors device health, Syslog collects logs, and PCAP captures full packets (too much data for long-term trending)."
  },
  {
    id: "d3-q011",
    domain: "3.0",
    objective: "3.1",
    question: "A technician is installing cables in a new office. To ensure future administrators can easily identify cable purposes and destinations, what information should be included on cable labels?",
    options: [
      "Only the cable manufacturer and date installed",
      "Just the source and destination room numbers",
      "Source, destination, circuit ID, and cable type",
      "Only the technician's initials who installed it"
    ],
    correct: 2,
    explanation: "Proper cable labeling should identify the source location, destination location, circuit identifier, cable type/category, and installation date. Example: 'IDF2-A12 to MDF-B05, Cat6a, Circuit#1234, 10/2024'. This documentation is critical for troubleshooting, moves/adds/changes, and understanding the physical infrastructure without tracing cables."
  },
  {
    id: "d3-q012",
    domain: "3.0",
    objective: "3.2",
    question: "A company performs full backups on Sundays and wants fast daily backups that only copy files changed since the previous day's backup. Which backup type should be used Monday through Saturday?",
    options: [
      "Full backup",
      "Differential backup",
      "Incremental backup",
      "Mirror backup"
    ],
    correct: 2,
    explanation: "Incremental backups only copy data changed since the last backup of any type (full or incremental). They're fast and use less storage. Restoration requires the full backup plus all incremental backups in sequence. Differential backs up everything since the last full (grows larger daily but only needs full + latest differential to restore)."
  },
  {
    id: "d3-q013",
    domain: "3.0",
    objective: "3.2",
    question: "A financial services company needs a disaster recovery site that can be operational within hours. The site should have equipment installed and configured, with recent data backups ready to restore. Which site type meets these requirements?",
    options: [
      "Hot site - fully operational",
      "Cold site - empty facility",
      "Warm site - partially equipped",
      "Mobile site - trailer-based"
    ],
    correct: 2,
    explanation: "A warm site has power, cooling, and equipment installed and configured, but requires data restoration to become operational (hours to days). It's a compromise between expensive hot sites (fully operational, ready in minutes) and cheap cold sites (empty buildings requiring days/weeks). Hot sites maintain synchronized data and can fail over almost immediately."
  },
  {
    id: "d3-q014",
    domain: "3.0",
    objective: "3.3",
    question: "A network has two redundant internet connections from different ISPs. The administrator wants both connections to be actively used for load balancing, with automatic failover if one fails. What configuration should be implemented?",
    options: [
      "Active-passive failover",
      "Active-active load balancing",
      "Spanning Tree Protocol",
      "Port mirroring"
    ],
    correct: 1,
    explanation: "Active-active configuration uses all connections simultaneously for both increased bandwidth and redundancy. Traffic is distributed across links using methods like round-robin or weighted distribution. If one link fails, traffic continues on remaining links. Active-passive keeps backup connections idle until the primary fails (provides redundancy but not load balancing)."
  },
  {
    id: "d3-q015",
    domain: "3.0",
    objective: "4.1",
    question: "A company wants to prevent unauthorized individuals from following authorized employees through security doors. Which physical security control forces people to pass through one at a time?",
    options: [
      "Badge reader with PIN pad",
      "Security cameras and motion sensors",
      "Mantrap (double-door system)",
      "Biometric fingerprint scanner"
    ],
    correct: 2,
    explanation: "A mantrap uses two interlocking doors where only one can be open at a time, forcing people through one at a time. This prevents tailgating (unauthorized person following authorized person). Person enters first door, it closes and locks, authentication occurs, then second door opens. Often combined with weight sensors to detect multiple people."
  },
  {
    id: "d3-q016",
    domain: "3.0",
    objective: "3.1",
    question: "A security-conscious organization wants to encrypt SNMP traffic to prevent credential exposure. Which SNMP version provides encryption and authentication?",
    options: [
      "SNMPv1",
      "SNMPv2",
      "SNMPv2c",
      "SNMPv3"
    ],
    correct: 3,
    explanation: "SNMPv3 is the only version that provides encryption (DES/AES) and strong authentication for secure device management. SNMPv1 and v2c use community strings sent in clear text, making them vulnerable to sniffing. SNMPv3 uses username/password authentication and can encrypt the entire SNMP payload, protecting sensitive configuration data."
  },
  {
    id: "d3-q017",
    domain: "3.0",
    objective: "3.2",
    question: "After a database corruption incident, a company determines they can afford to lose no more than 30 minutes of transaction data. Which recovery metric should be set to 30 minutes?",
    options: [
      "RTO (Recovery Time Objective)",
      "RPO (Recovery Point Objective)",
      "MTBF (Mean Time Between Failures)",
      "SLA (Service Level Agreement)"
    ],
    correct: 1,
    explanation: "RPO (Recovery Point Objective) defines the maximum acceptable data loss measured in time. An RPO of 30 minutes means you must back up at least every 30 minutes and can tolerate losing up to 30 minutes of data. This drives backup frequency. RTO defines restoration time. Lower RPO requires more frequent backups or real-time replication."
  },
  {
    id: "d3-q018",
    domain: "3.0",
    objective: "3.3",
    question: "A server has two network interface cards. The administrator wants to configure them so one NIC actively handles all traffic while the other remains on standby for failover. What type of NIC teaming configuration is this?",
    options: [
      "Active-active with load balancing",
      "Round-robin distribution",
      "LACP aggregation",
      "Active-passive failover"
    ],
    correct: 3,
    explanation: "Active-passive NIC teaming provides redundancy but not increased bandwidth. One NIC handles all traffic while the other remains on standby. If the active NIC fails, the standby immediately takes over. Active-active mode (like LACP) uses all NICs simultaneously for both bandwidth increase and redundancy, distributing traffic across all available links."
  }
];

// Domain 4: Network Security (24 questions)
const domain4Questions = [
  {
    id: "d4-q001",
    domain: "4.0",
    objective: "4.1",
    question: "A web server is experiencing performance degradation. Analysis shows thousands of SYN requests from multiple sources but no corresponding ACK responses. Which type of attack is occurring?",
    options: [
      "SYN flood attack",
      "Smurf attack",
      "DNS amplification attack",
      "ARP poisoning"
    ],
    correct: 0,
    explanation: "A SYN flood attack exploits the TCP three-way handshake by sending many SYN requests but never responding with ACK, leaving half-open connections. The server's connection table fills up, preventing legitimate connections. Mitigation includes SYN cookies, rate limiting, and timeout adjustments. This is a common DoS attack vector."
  },
  {
    id: "d4-q002",
    domain: "4.0",
    objective: "4.1",
    question: "Users at a coffee shop connect to what they believe is the legitimate Wi-Fi network, but their traffic is being intercepted by an attacker who is relaying communications between users and the real network. What type of attack is this?",
    options: [
      "On-path attack (Man-in-the-middle)",
      "Denial of service attack",
      "Phishing attack",
      "Brute force attack"
    ],
    correct: 0,
    explanation: "An on-path attack (formerly man-in-the-middle) positions the attacker between two communicating parties, allowing them to intercept, read, and modify messages without their knowledge. Common on unsecured public Wi-Fi. Prevented by encryption (HTTPS, VPN), certificate validation, and avoiding untrusted networks. The attacker may set up a rogue AP with a similar SSID (evil twin)."
  },
  {
    id: "d4-q003",
    domain: "4.0",
    objective: "4.4",
    question: "A company is upgrading their office wireless network and wants the strongest protection against password cracking attempts, even if an attacker captures the handshake. Which wireless security protocol should be implemented?",
    options: [
      "WPA3 with SAE",
      "WPA2 with AES",
      "WPA with TKIP",
      "WEP with 128-bit keys"
    ],
    correct: 0,
    explanation: "WPA3 introduced SAE (Simultaneous Authentication of Equals), also called Dragonfly, which provides forward secrecy and protects against offline dictionary attacks even if the handshake is captured. WPA3 also mandates stronger encryption (192-bit in Enterprise mode) and offers Enhanced Open for public networks. WPA2 is still secure but vulnerable to offline attacks if weak passwords are used."
  },
  {
    id: "d4-q004",
    domain: "4.0",
    objective: "4.4",
    question: "A company needs to provide secure remote access for traveling employees. The VPN solution must work through corporate firewalls and appear as regular HTTPS traffic. Which VPN protocol is most suitable?",
    options: [
      "L2TP/IPSec",
      "PPTP",
      "SSL/TLS VPN on port 443",
      "GRE tunnel"
    ],
    correct: 2,
    explanation: "SSL/TLS VPN running on port 443 appears as HTTPS traffic and easily traverses firewalls. It can be browser-based (clientless) or use a client. L2TP/IPSec can have NAT traversal issues. PPTP is outdated and insecure. OpenVPN using SSL/TLS on 443 is a popular choice for bypassing restrictive firewalls."
  },
  {
    id: "d4-q005",
    domain: "4.0",
    objective: "4.1",
    question: "A firewall administrator needs to configure rules that track the state of connections and automatically allow return traffic for established sessions. What type of firewall should be used?",
    options: [
      "Stateful firewall",
      "Stateless firewall",
      "Packet filtering firewall",
      "Circuit-level gateway"
    ],
    correct: 0,
    explanation: "Stateful firewalls track connection state (NEW, ESTABLISHED, RELATED) and automatically allow return traffic for established connections. This is more secure and convenient than stateless firewalls, which examine each packet independently without context. Most modern firewalls are stateful, maintaining a state table of active connections."
  },
  {
    id: "d4-q006",
    domain: "4.0",
    objective: "4.3",
    question: "An organization wants to place their public-facing web and email servers in a network segment that is accessible from the internet but isolated from the internal corporate network. What network design should be implemented?",
    options: [
      "DMZ (Demilitarized Zone/Screened subnet)",
      "Internal network (trusted zone)",
      "Guest network",
      "Management VLAN"
    ],
    correct: 0,
    explanation: "A DMZ (Demilitarized Zone), also called screened subnet, is a network segment that isolates public-facing servers from the internal network. It typically sits between two firewalls - external users can access DMZ services, but DMZ servers have very limited access to internal resources. This limits damage if a public server is compromised."
  },
  {
    id: "d4-q007",
    domain: "4.0",
    objective: "4.1",
    question: "A university network uses Windows Active Directory for user authentication. When users log in, they receive a ticket that allows them to access multiple resources without re-authenticating. Which protocol provides this functionality?",
    options: [
      "Kerberos",
      "RADIUS",
      "TACACS+",
      "LDAP"
    ],
    correct: 0,
    explanation: "Kerberos is the default authentication protocol in Windows Active Directory. It uses tickets from a Key Distribution Center (KDC) for mutual authentication between clients and servers. The TGT (Ticket Granting Ticket) allows single sign-on to access multiple services without re-authenticating. It uses port 88 and provides strong authentication with timestamp-based tickets."
  },
  {
    id: "d4-q008",
    domain: "4.0",
    objective: "4.1",
    question: "An attacker sends ICMP echo requests to a network's broadcast address with the source IP spoofed as the victim's address. All hosts on the network respond to the victim, overwhelming it with traffic. What attack is this?",
    options: [
      "SYN flood",
      "Smurf attack",
      "DNS poisoning",
      "ARP spoofing"
    ],
    correct: 1,
    explanation: "A Smurf attack sends ICMP echo requests to a broadcast address with a spoofed source IP (the victim). All hosts on that network respond to the victim, amplifying the attack traffic significantly. Prevented by disabling IP-directed broadcasts on routers (no ip directed-broadcast) and configuring hosts not to respond to broadcast pings."
  },
  {
    id: "d4-q009",
    domain: "4.0",
    objective: "4.1",
    question: "A growing company wants to implement centralized authentication for wireless access, VPN, and network device management. The solution should log all access attempts for compliance. Which framework should be deployed?",
    options: [
      "Local authentication on each device",
      "AAA using RADIUS or TACACS+",
      "Social media OAuth",
      "Kerberos tickets"
    ],
    correct: 1,
    explanation: "AAA (Authentication, Authorization, Accounting) using RADIUS or TACACS+ provides centralized authentication, access control, and logging. RADIUS is standard and uses UDP ports 1812/1813 (encrypts only passwords). TACACS+ is Cisco proprietary, uses TCP port 49, and encrypts the entire payload. Both provide centralized credential management and detailed audit logs."
  },
  {
    id: "d4-q010",
    domain: "4.0",
    objective: "4.4",
    question: "A hospital needs to implement wireless authentication that requires both server and client certificates for maximum security to protect patient data. Which EAP method provides mutual certificate-based authentication?",
    options: [
      "PEAP (Protected EAP)",
      "EAP-TLS (EAP-Transport Layer Security)",
      "EAP-TTLS (EAP-Tunneled TLS)",
      "EAP-FAST"
    ],
    correct: 1,
    explanation: "EAP-TLS is the most secure EAP method because it requires certificates on both the client and server (mutual authentication). It requires a PKI infrastructure to issue and manage certificates. PEAP and EAP-TTLS only require server certificates and use passwords for client authentication. EAP-FAST uses PACs instead of certificates."
  },
  {
    id: "d4-q011",
    domain: "4.0",
    objective: "4.4",
    question: "A company wants to implement IPSec VPN tunnels that provide data integrity verification but NOT encryption, to minimize processing overhead. Which IPSec component should be used?",
    options: [
      "ESP (Encapsulating Security Payload)",
      "AH (Authentication Header)",
      "IKE (Internet Key Exchange)",
      "GRE (Generic Routing Encapsulation)"
    ],
    correct: 1,
    explanation: "AH (Authentication Header) provides authentication and integrity verification but doesn't encrypt data. ESP (Encapsulating Security Payload) provides encryption, authentication, and integrity. IKE negotiates security associations. Most implementations use ESP for both encryption and authentication, but AH can be used when encryption isn't needed or is handled at another layer."
  },
  {
    id: "d4-q012",
    domain: "4.0",
    objective: "4.1",
    question: "An organization wants to simplify permissions management by assigning access rights based on job functions rather than individual users. Users inherit permissions when assigned to their job role. What access control model is this?",
    options: [
      "DAC (Discretionary Access Control)",
      "RBAC (Role-Based Access Control)",
      "MAC (Mandatory Access Control)",
      "Rule-based access control"
    ],
    correct: 1,
    explanation: "RBAC (Role-Based Access Control) assigns permissions based on job roles (e.g., Administrator, Manager, Employee). Users inherit permissions from their roles, simplifying management. This is easier than assigning permissions individually. DAC lets resource owners set permissions, MAC uses security labels/classifications, and rule-based uses conditions/rules."
  },
  {
    id: "d4-q013",
    domain: "4.0",
    objective: "4.3",
    question: "A financial services company wants to implement network segmentation that creates very granular security zones down to individual application workloads, controlling traffic between applications. What segmentation approach is this?",
    options: [
      "VLAN segmentation",
      "Microsegmentation",
      "Subnet segmentation",
      "Physical segmentation"
    ],
    correct: 1,
    explanation: "Microsegmentation creates very granular security zones down to individual workloads or applications. It's common in data centers using software-defined networking to control east-west traffic between applications. This is more granular than VLANs or subnets. Zero Trust architectures often use microsegmentation to enforce least-privilege access policies."
  },
  {
    id: "d4-q014",
    domain: "4.0",
    objective: "4.1",
    question: "A web application requires users to provide a password and a code from their smartphone app to log in. What type of authentication is being used?",
    options: [
      "Single-factor authentication",
      "Multi-factor authentication (MFA)",
      "Biometric authentication only",
      "Token-based authentication"
    ],
    correct: 1,
    explanation: "This is multi-factor authentication (MFA) combining something you know (password) with something you have (smartphone generating codes). MFA significantly increases security by requiring multiple factors from different categories: knowledge (password/PIN), possession (token/phone/smart card), inherence (biometrics), or location. Two-factor authentication (2FA) is a specific type of MFA using exactly two factors."
  },
  {
    id: "d4-q015",
    domain: "4.0",
    objective: "4.1",
    question: "A network is experiencing a broadcast storm where the same broadcast frames are being continuously forwarded, consuming all bandwidth. What is the most likely cause?",
    options: [
      "Too many devices on the network",
      "Duplicate IP addresses",
      "Layer 2 switching loop",
      "DNS server failure"
    ],
    correct: 2,
    explanation: "Broadcast storms occur when Layer 2 loops exist in a switched network. Switches forward broadcasts out all ports, creating a feedback loop that exponentially multiplies traffic. Spanning Tree Protocol (STP) prevents loops by blocking redundant paths. Symptoms include network slowness, high CPU on switches, and eventual network failure. Enable STP/RSTP on all switches to prevent this."
  },
  {
    id: "d4-q016",
    domain: "4.0",
    objective: "4.1",
    question: "An attacker sends gratuitous ARP replies to network devices, associating their MAC address with the IP address of the network gateway. Traffic intended for the gateway is now being sent to the attacker's machine. What attack is occurring?",
    options: [
      "DNS spoofing",
      "VLAN hopping",
      "ARP poisoning/spoofing",
      "MAC flooding"
    ],
    correct: 2,
    explanation: "ARP poisoning sends fake ARP responses to associate the attacker's MAC address with another device's IP (often the gateway), causing traffic to be sent to the attacker. This enables on-path attacks. Mitigations include Dynamic ARP Inspection (DAI), static ARP entries for critical devices, and port security. ARP poisoning only works on the local network segment."
  },
  {
    id: "d4-q017",
    domain: "4.0",
    objective: "4.4",
    question: "A company needs a VPN solution that is highly configurable, open source, works on all platforms, and can use any TCP or UDP port. Which VPN protocol best fits these requirements?",
    options: [
      "IPSec",
      "L2TP",
      "OpenVPN",
      "PPTP"
    ],
    correct: 2,
    explanation: "OpenVPN is highly flexible, open source, operates over any TCP or UDP port (commonly 443 to bypass firewalls), and supports all major platforms. It uses SSL/TLS for encryption and can traverse NAT easily. IPSec can have NAT traversal issues. PPTP is outdated and insecure. L2TP requires IPSec and has limited port flexibility."
  },
  {
    id: "d4-q018",
    domain: "4.0",
    objective: "4.1",
    question: "An organization wants to implement centralized authentication for their Cisco network devices using a protocol that encrypts the entire authentication payload. Which protocol should be used?",
    options: [
      "LDAP",
      "Kerberos",
      "RADIUS",
      "TACACS+"
    ],
    correct: 3,
    explanation: "TACACS+ is Cisco's AAA protocol that encrypts the entire payload (not just passwords) and uses TCP port 49. It separates authentication, authorization, and accounting functions. RADIUS only encrypts passwords and uses UDP. TACACS+ is preferred for network device administration. LDAP is for directory services, and Kerberos is for domain authentication."
  },
  {
    id: "d4-q019",
    domain: "4.0",
    objective: "4.3",
    question: "A security administrator needs to create a firewall ACL that permits HTTP traffic from the internal network (10.10.10.0/24) to any destination and blocks all other traffic. Which type of ACL provides this granularity?",
    options: [
      "Standard ACL (source IP only)",
      "Time-based ACL",
      "Extended ACL (source, destination, protocol, port)",
      "Reflexive ACL"
    ],
    correct: 2,
    explanation: "Extended ACLs can filter based on source IP, destination IP, protocol (TCP/UDP/ICMP), and port numbers, providing granular control. This ACL would permit: source 10.10.10.0/24, destination any, protocol TCP, port 80. Standard ACLs only filter by source IP address. Extended ACLs should be placed close to the source, standard ACLs close to the destination."
  },
  {
    id: "d4-q020",
    domain: "4.0",
    objective: "4.3",
    question: "A small business has 50 internal devices using private IP addresses but only one public IP address from their ISP. How can all internal devices access the internet simultaneously using a single public IP?",
    options: [
      "Static NAT (one-to-one mapping)",
      "Dynamic NAT (pool of public IPs)",
      "PAT (Port Address Translation/NAT overload)",
      "NAT64 (IPv6 to IPv4 translation)"
    ],
    correct: 2,
    explanation: "PAT (Port Address Translation), also called NAT overload, maps many private IPs to one public IP by using different port numbers. This is how home routers and small businesses work with a single public IP. Static NAT is one-to-one, dynamic NAT uses a pool of public IPs, and NAT64 translates between IPv6 and IPv4."
  },
  {
    id: "d4-q021",
    domain: "4.0",
    objective: "4.1",
    question: "A company implements a security policy where database administrators can read financial data but cannot modify it, while financial analysts can modify data but cannot delete it. What security principle is being applied?",
    options: [
      "Defense in depth",
      "Zero trust",
      "Least privilege",
      "Separation of duties"
    ],
    correct: 2,
    explanation: "Least privilege means granting users only the minimum permissions needed to perform their jobs. DBAs get read-only, analysts get read-write but not delete. This limits damage from compromised accounts or insider threats. Defense in depth uses multiple security layers. Zero trust assumes no implicit trust. Separation of duties divides critical tasks among multiple people."
  },
  {
    id: "d4-q022",
    domain: "4.0",
    objective: "4.4",
    question: "A penetration tester demonstrates that a company's legacy wireless network can be compromised in under 60 seconds using freely available tools. Which wireless security protocol is the company still using?",
    options: [
      "WPA3",
      "WPA2",
      "WPA",
      "WEP"
    ],
    correct: 3,
    explanation: "WEP (Wired Equivalent Privacy) is completely broken and can be cracked in minutes (sometimes seconds) using tools like Aircrack-ng. It uses weak RC4 encryption and has fundamental design flaws. WPA was a temporary fix. WPA2 using AES is still secure. WPA3 is the latest standard with enhanced security. Any network still using WEP must be upgraded immediately."
  },
  {
    id: "d4-q023",
    domain: "4.0",
    objective: "4.1",
    question: "An organization implements a security model where all users and devices are treated as potential threats, requiring continuous verification regardless of network location. What security model is this?",
    options: [
      "Perimeter-based security",
      "Castle-and-moat security",
      "Defense in depth",
      "Zero Trust"
    ],
    correct: 3,
    explanation: "Zero Trust assumes no implicit trust for any user or device, regardless of location (inside or outside the network). It requires continuous verification, uses microsegmentation, and follows 'never trust, always verify.' This contrasts with traditional perimeter security (castle-and-moat) that trusts everything inside the network. Zero Trust principles: verify explicitly, least privilege access, assume breach."
  },
  {
    id: "d4-q024",
    domain: "4.0",
    objective: "4.4",
    question: "A law firm needs to securely transfer confidential documents to clients. The solution must use encryption and work over the internet without requiring a VPN. Which protocol should be used?",
    options: [
      "FTP (File Transfer Protocol)",
      "TFTP (Trivial FTP)",
      "FTPS (FTP over SSL/TLS)",
      "SFTP (SSH File Transfer Protocol)"
    ],
    correct: 3,
    explanation: "SFTP (SSH File Transfer Protocol) runs over SSH (port 22) and encrypts both commands and data. It's widely supported and secure. FTP (ports 20/21) sends credentials in clear text. FTPS uses SSL/TLS but is more complex to configure through firewalls. TFTP (port 69) is unencrypted and used for simple transfers like router configs. Note: SFTP and FTPS are different protocols."
  }
];

// Domain 5: Network Troubleshooting (20 questions)
const domain5Questions = [
  {
    id: "d5-q001",
    domain: "5.0",
    objective: "5.1",
    question: "A user reports that they cannot connect to the company intranet. Following the CompTIA troubleshooting methodology, what is the first step the technician should take?",
    options: [
      "Identify the problem by gathering information and questioning the user",
      "Establish a theory of probable cause",
      "Test the theory to determine the cause",
      "Implement the solution"
    ],
    correct: 0,
    explanation: "The first step is to identify the problem by gathering information, questioning users, identifying symptoms, and determining if anything changed recently. Ask: What exactly isn't working? When did it start? What changed? Can you access other resources? The CompTIA methodology has 7 steps, and proper identification prevents wasting time on incorrect solutions."
  },
  {
    id: "d5-q002",
    domain: "5.0",
    objective: "5.3",
    question: "A network technician needs to quickly verify a workstation's IP address, subnet mask, and default gateway. Which command should be used?",
    options: [
      "ipconfig (Windows) or ip addr (Linux)",
      "ping",
      "tracert",
      "netstat"
    ],
    correct: 0,
    explanation: "ipconfig (Windows) or ip addr (Linux/Mac) displays network interface configuration including IP address, subnet mask, default gateway, and MAC address. Use 'ipconfig /all' for detailed information including DHCP and DNS settings. 'ipconfig /renew' gets a new DHCP lease. 'ipconfig /flushdns' clears the DNS cache."
  },
  {
    id: "d5-q003",
    domain: "5.0",
    objective: "5.3",
    question: "Users report intermittent connectivity to a remote server. The network administrator wants to test connectivity and measure response time. Which command is most appropriate?",
    options: [
      "ping",
      "traceroute",
      "nslookup",
      "arp"
    ],
    correct: 0,
    explanation: "ping sends ICMP echo requests to test if a host is reachable and measures round-trip time (latency). It's the first tool to use when troubleshooting connectivity. Run multiple pings to identify intermittent issues. No response could mean the host is down, a firewall is blocking ICMP, or there's a routing problem. Use 'ping -t' for continuous pinging on Windows."
  },
  {
    id: "d5-q004",
    domain: "5.0",
    objective: "5.2",
    question: "A network cable installer needs to verify the exact length of a cable run and locate a break in a copper cable. Which tool should be used?",
    options: [
      "TDR (Time Domain Reflectometer)",
      "Multimeter",
      "Tone generator and probe",
      "Cable certifier"
    ],
    correct: 0,
    explanation: "A TDR (Time Domain Reflectometer) sends a signal down a cable and measures reflections to determine cable length and locate breaks, shorts, or impedance mismatches. An OTDR does the same for fiber optic cables. Multimeters test voltage/resistance, tone generators trace cables, and certifiers verify performance meets standards."
  },
  {
    id: "d5-q005",
    domain: "5.0",
    objective: "5.2",
    question: "A help desk technician notices a user's workstation has automatically assigned itself IP address 169.254.45.200 with subnet mask 255.255.0.0. The user cannot access network resources. What is the most likely problem?",
    options: [
      "DHCP server is unavailable or unreachable",
      "DNS server is not responding",
      "Default gateway is misconfigured",
      "Subnet mask is incorrect"
    ],
    correct: 0,
    explanation: "An APIPA address (169.254.x.x) indicates the DHCP client couldn't reach a DHCP server. Possible causes: DHCP server is down, network cable unplugged, wrong VLAN, DHCP relay not configured, or DHCP scope exhausted. Check physical connectivity first, then verify DHCP server status. The system fell back to APIPA to maintain some local network connectivity."
  },
  {
    id: "d5-q006",
    domain: "5.0",
    objective: "5.4",
    question: "A user reports they can successfully ping the default gateway at 192.168.1.1 and external IP addresses like 8.8.8.8, but cannot access any websites by name. What is the most likely issue?",
    options: [
      "Default gateway is misconfigured",
      "DNS resolution is failing",
      "DHCP server is offline",
      "Subnet mask is incorrect"
    ],
    correct: 1,
    explanation: "If IP addresses work but names don't, DNS resolution is failing. The DNS server may be down, unreachable, or the client's DNS settings are incorrect. Try 'nslookup google.com' to test DNS. Try 'ipconfig /flushdns' to clear the cache. The fact that ping to IP addresses works confirms network connectivity, gateway, and routing are functioning."
  },
  {
    id: "d5-q007",
    domain: "5.0",
    objective: "5.3",
    question: "A network administrator suspects packets are being routed through an unexpected path to reach a destination. Which command shows each router hop between the source and destination?",
    options: [
      "ping",
      "tracert (Windows) or traceroute (Linux)",
      "pathping",
      "route print"
    ],
    correct: 1,
    explanation: "tracert (Windows) or traceroute (Linux) shows each router hop between source and destination, revealing where connectivity fails or routing changes. It works by sending packets with incrementing TTL values. Each router decrements TTL and sends ICMP Time Exceeded when TTL reaches 0, revealing itself. This helps identify routing problems, slow links, and network topology."
  },
  {
    id: "d5-q008",
    domain: "5.0",
    objective: "5.3",
    question: "A technician suspects an ARP poisoning attack on the network. Which command displays the current ARP cache showing IP-to-MAC address mappings?",
    options: [
      "ipconfig /all",
      "arp -a",
      "netstat -r",
      "nbtstat -n"
    ],
    correct: 1,
    explanation: "arp -a displays the ARP cache containing IP-to-MAC address mappings for devices on the local network. Use 'arp -d' to clear the cache. Look for duplicate MAC addresses or unexpected MAC addresses for critical IPs like the gateway. ARP poisoning attacks manipulate this cache to redirect traffic through the attacker."
  },
  {
    id: "d5-q009",
    domain: "5.0",
    objective: "5.3",
    question: "A user cannot access the company's internal web server by hostname (intranet.company.com) but can access it by IP address (10.0.1.50). Which tool should the technician use to troubleshoot DNS resolution?",
    options: [
      "ping",
      "nslookup or dig",
      "ipconfig /flushdns",
      "hostname"
    ],
    correct: 1,
    explanation: "nslookup (Windows/Linux) and dig (Linux/Mac) query DNS servers to resolve hostnames and troubleshoot DNS issues. 'nslookup intranet.company.com' tests basic resolution. 'nslookup intranet.company.com 8.8.8.8' tests using a specific DNS server. dig provides more detailed output. These tools help identify if DNS server is reachable, if records exist, and which server responded."
  },
  {
    id: "d5-q010",
    domain: "5.0",
    objective: "5.2",
    question: "A technician needs to identify which cable in a bundle of 50 cables connects to a specific port on a patch panel. Which tool should be used?",
    options: [
      "Cable tester",
      "Toner probe (tone generator and probe)",
      "OTDR",
      "Loopback adapter"
    ],
    correct: 1,
    explanation: "A toner probe (tone generator and probe) traces cables by sending a tone on one end and detecting it with an inductive probe on the other end. Essential for identifying specific cables in bundles, walls, or patch panels. Also called 'fox and hound' or 'toner and wand'. The probe doesn't require direct electrical connection - it detects the electromagnetic field."
  },
  {
    id: "d5-q011",
    domain: "5.0",
    objective: "5.4",
    question: "Multiple users in an office report that their wireless connection keeps dropping intermittently throughout the day. When connected, speeds are normal. What is the most likely cause?",
    options: [
      "Wrong SSID configured",
      "Interference or weak signal strength",
      "Incorrect security type",
      "MAC address filtering enabled"
    ],
    correct: 1,
    explanation: "Intermittent wireless issues are typically caused by interference (from microwaves, cordless phones, neighboring networks on same channel) or weak signal strength (too far from AP, obstacles). Wrong SSID, security type, or MAC filtering would prevent connection entirely, not cause intermittent drops. Solutions: change channels, move closer to AP, use 5GHz instead of 2.4GHz, add more APs, or reduce interference sources."
  },
  {
    id: "d5-q012",
    domain: "5.0",
    objective: "5.5",
    question: "A network administrator notices a switch port's link light is constantly going up and down (flapping) every few seconds. What is the most likely cause?",
    options: [
      "Incorrect VLAN assignment",
      "Bad cable or loose connector",
      "Spanning Tree Protocol recalculation",
      "Port security violation"
    ],
    correct: 1,
    explanation: "Port flapping (link going up/down repeatedly) usually indicates a physical layer problem: bad cable, loose connector, failing transceiver, or duplex mismatch. Check cables and connectors first. Could also be a device with faulty NIC repeatedly trying to connect. Use 'show interface' to check error counters for CRC errors, late collisions, or input errors that indicate physical issues."
  },
  {
    id: "d5-q013",
    domain: "5.0",
    objective: "5.3",
    question: "A security analyst wants to identify which application is using port 443 on a Windows server. Which command displays active connections with process IDs?",
    options: [
      "ping -a",
      "ipconfig /all",
      "netstat -ano",
      "tracert -d"
    ],
    correct: 2,
    explanation: "netstat -ano displays active TCP connections, listening ports, and process IDs (PIDs). The -a shows all connections, -n displays numeric addresses, and -o shows PIDs. Once you have the PID, use Task Manager to identify which program. 'netstat -r' shows the routing table. This is useful for finding unauthorized listeners or identifying what's using specific ports."
  },
  {
    id: "d5-q014",
    domain: "5.0",
    objective: "5.2",
    question: "A network technician is troubleshooting slow network speeds. A cable tester shows high levels of interference between wire pairs in the cable. What problem is indicated?",
    options: [
      "Attenuation",
      "Latency",
      "Crosstalk",
      "Jitter"
    ],
    correct: 2,
    explanation: "Crosstalk occurs when signal from one wire pair interferes with another pair in the same cable. NEXT (Near-End Crosstalk) is measured at the transmitting end, FEXT at the far end. Caused by damaged cables, poor termination, exceeding bend radius, or cable not meeting category specs. Higher category cables (Cat6/6a) have better crosstalk protection through tighter twists and shielding."
  },
  {
    id: "d5-q015",
    domain: "5.0",
    objective: "5.4",
    question: "Users can access the internet and external websites but cannot access internal file servers by name (\\\\fileserver\\share). They can access file servers by IP address (\\\\10.0.2.50\\share). What is the most likely issue?",
    options: [
      "Default gateway is incorrect",
      "Firewall is blocking all traffic",
      "Internal DNS server is not resolving local hostnames",
      "DHCP server is offline"
    ],
    correct: 2,
    explanation: "If users can access by IP but not by name, internal DNS isn't resolving local hostnames. The internal DNS server may be down, unreachable, or missing DNS records for internal hosts. Check: DNS server settings in DHCP/static config, DNS server availability (ping it), and verify DNS records exist. External DNS works (internet works), so the problem is specifically with internal name resolution."
  },
  {
    id: "d5-q016",
    domain: "5.0",
    objective: "5.5",
    question: "A network engineer notices high numbers of CRC errors incrementing on a switch interface. What does this indicate?",
    options: [
      "Congestion due to too much traffic",
      "Incorrect VLAN configuration",
      "Physical layer issue: bad cable, EMI, or duplex mismatch",
      "Broadcast storm"
    ],
    correct: 2,
    explanation: "CRC (Cyclic Redundancy Check) errors indicate corrupted frames at the physical layer, caused by bad cables, electromagnetic interference (EMI), duplex mismatches, or faulty NICs. Check: cable quality and termination, EMI sources nearby (motors, fluorescent lights), verify both ends negotiated same speed/duplex. Replace suspect cables. CRC errors should be 0 in a healthy network."
  },
  {
    id: "d5-q017",
    domain: "5.0",
    objective: "5.4",
    question: "A user receives an error message: 'There is an IP address conflict with another system on the network.' What caused this issue?",
    options: [
      "DHCP server has run out of addresses",
      "DNS server is misconfigured",
      "Another device is using the same IP address",
      "Subnet mask is incorrect"
    ],
    correct: 2,
    explanation: "A duplicate IP address error means another device on the network is already using that IP. Common causes: two devices with same static IP, DHCP scope includes addresses also assigned statically, device with static IP rejoining after DHCP assigned that IP to another host, or rogue DHCP server. Find the duplicate device (check switch MAC table, ARP cache) and reconfigure one device."
  },
  {
    id: "d5-q018",
    domain: "5.0",
    objective: "5.5",
    question: "Users are experiencing slow response times when accessing a cloud-based application. Ping tests show response times of 250ms to the application server. What problem does this indicate?",
    options: [
      "Incorrect subnet mask",
      "Wrong DNS server configured",
      "High latency on the network path",
      "DHCP server misconfiguration"
    ],
    correct: 2,
    explanation: "High latency (delay) of 250ms indicates slow network paths, typically caused by distance, congestion, or slow links. For reference: under 20ms is excellent, 20-50ms good for most uses, 50-100ms acceptable, 100-150ms noticeable delay, over 150ms problematic for real-time apps like VoIP and gaming. Cloud applications in distant regions naturally have higher latency. Check for congestion, routing inefficiencies, or bandwidth saturation."
  },
  {
    id: "d5-q019",
    domain: "5.0",
    objective: "5.2",
    question: "A fiber optic cable has been installed between two buildings. The technician needs to test for breaks, measure signal loss, and verify cable length. Which tool should be used?",
    options: [
      "TDR (Time Domain Reflectometer)",
      "Cable tester",
      "Tone generator",
      "OTDR (Optical Time Domain Reflectometer)"
    ],
    correct: 3,
    explanation: "An OTDR (Optical Time Domain Reflectometer) tests fiber optic cables by sending light pulses and measuring reflections. It determines cable length, locates breaks or excessive bends, measures attenuation (signal loss), and identifies splice points. TDR is for copper cables. Also use an optical power meter to measure signal strength at both ends. Clean fiber connectors before testing."
  },
  {
    id: "d5-q020",
    domain: "5.0",
    objective: "5.5",
    question: "A company's VoIP system experiences choppy audio and frozen video during conference calls. Network monitoring shows adequate bandwidth is available, but packet arrival times are inconsistent. What is causing the poor quality?",
    options: [
      "Packet loss",
      "High latency",
      "Low bandwidth",
      "Jitter (variable delay)"
    ],
    correct: 3,
    explanation: "Jitter is variation in packet delay - packets arrive at irregular intervals instead of a steady stream. Highly disruptive to real-time applications like VoIP and video conferencing, causing choppy audio, frozen video, and out-of-order packets. Caused by network congestion or routing changes. Solved with QoS (Quality of Service) to prioritize real-time traffic and jitter buffers to smooth packet arrival."
  }
];

// Export question pool
export const examQuestionPool = {
  domain1: domain1Questions,
  domain2: domain2Questions,
  domain3: domain3Questions,
  domain4: domain4Questions,
  domain5: domain5Questions
};

// Helper to get all questions
export function getAllQuestions() {
  return [
    ...domain1Questions,
    ...domain2Questions,
    ...domain3Questions,
    ...domain4Questions,
    ...domain5Questions
  ];
}