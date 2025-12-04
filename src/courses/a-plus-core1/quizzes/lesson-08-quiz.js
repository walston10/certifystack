export const lesson8Quiz = [
  {
    id: 1,
    question: "A small office needs to connect 12 computers to the internet through a single ISP connection. What network device is required to allow multiple devices to share one public IP address?",
    options: [
      "Hub",
      "Router with NAT (Network Address Translation) capability",
      "Unmanaged switch",
      "Repeater"
    ],
    correct: 1,
    explanation: "A router with NAT (Network Address Translation) allows multiple devices on a private network to share a single public IP address from the ISP. The router assigns private IP addresses (192.168.x.x, 10.x.x.x) to internal devices and translates them to the public IP for internet communication. Switches operate at Layer 2 and don't perform IP routing or NAT. Hubs and repeaters simply extend signals without any intelligence. Most home and small office routers include NAT, DHCP, and basic firewall features."
  },
  {
    id: 2,
    question: "A network administrator needs to connect 24 computers in an office. They want devices to communicate at full duplex Gigabit speeds without collisions. What device should they use?",
    options: [
      "24-port hub",
      "24-port switch",
      "Router only",
      "Wireless access point only"
    ],
    correct: 1,
    explanation: "A switch provides dedicated bandwidth to each port and operates in full-duplex mode, eliminating collisions. Each port on a Gigabit switch provides 1 Gbps in both directions simultaneously. Hubs operate in half-duplex, share bandwidth among all ports, and suffer from collisions - they're obsolete. A router connects different networks but isn't designed for connecting many workstations. Switches create separate collision domains for each port while maintaining one broadcast domain, making them ideal for connecting multiple computers in a LAN."
  },
  {
    id: 3,
    question: "A company is installing IP security cameras throughout their building. The cameras need network connectivity and power, but there are no electrical outlets near the camera locations. What feature should their network switch have?",
    options: [
      "Fiber optic ports",
      "PoE (Power over Ethernet) support",
      "Wireless connectivity",
      "Multiple USB ports"
    ],
    correct: 1,
    explanation: "PoE (Power over Ethernet) allows network switches to deliver both data and electrical power over standard Ethernet cables. This eliminates the need for separate power outlets and adapters at each device location. PoE switches can power IP cameras, wireless access points, VoIP phones, and other devices. PoE standards include 802.3af (15.4W), 802.3at/PoE+ (30W), and 802.3bt/PoE++ (60-90W). The switch budget (total PoE wattage available) must support all connected powered devices simultaneously."
  },
  {
    id: 4,
    question: "A home user has a cable modem provided by their ISP. The modem has only one Ethernet port, but they need to connect multiple devices. What's the most cost-effective solution?",
    options: [
      "Buy multiple cable modems",
      "Connect the cable modem to a router, then connect devices to the router's switch ports",
      "Devices cannot share an internet connection",
      "Replace the modem with a hub"
    ],
    correct: 1,
    explanation: "Connect the cable modem to a router's WAN port, then connect computers to the router's LAN/switch ports. The router performs NAT to share the single ISP connection, provides DHCP for automatic IP addressing, and usually includes a built-in 4-port switch. Many users purchase combination modem/router devices for simplicity. Buying multiple modems is expensive and most ISPs charge per modem. Hubs don't provide routing or NAT functionality. This setup allows wired and wireless devices to share one internet connection."
  },
  {
    id: 5,
    question: "What is the primary difference between a managed switch and an unmanaged switch?",
    options: [
      "Managed switches are wireless, unmanaged are wired",
      "Managed switches allow configuration of VLANs, QoS, port mirroring, and other advanced features via management interface",
      "Unmanaged switches are faster",
      "There is no difference"
    ],
    correct: 1,
    explanation: "Managed switches provide configuration capabilities through web interface, CLI, or management software. Features include: VLAN configuration, QoS (Quality of Service), port mirroring (SPAN), SNMP monitoring, link aggregation, spanning tree protocol settings, and access control. Unmanaged switches are plug-and-play with no configuration options - they simply forward traffic. Managed switches cost more but are essential for enterprise networks requiring traffic control, segmentation, and monitoring. Unmanaged switches are suitable for simple home/small office use."
  },
  {
    id: 6,
    question: "A network technician is troubleshooting slow network performance. They discover all devices are connected to a 24-port hub instead of a switch. What problem does this cause?",
    options: [
      "Hubs provide the fastest possible speeds",
      "All devices share the total bandwidth and operate in half-duplex mode with collision detection, creating a single collision domain",
      "Hubs are more expensive but provide better security",
      "No problems - hubs and switches are identical"
    ],
    correct: 1,
    explanation: "Hubs operate at Layer 1 (physical layer) and simply repeat signals to all ports. All connected devices share the total bandwidth and operate in half-duplex mode (can't send and receive simultaneously). This creates collisions when multiple devices transmit at once, requiring CSMA/CD (Carrier Sense Multiple Access with Collision Detection). Network performance degrades as more devices are added. Switches replaced hubs because they provide dedicated bandwidth per port, full-duplex operation, and eliminate collisions. Hubs are obsolete technology."
  },
  {
    id: 7,
    question: "A business wants to provide guest Wi-Fi access in their lobby while keeping guest traffic completely separated from the corporate network. What network device provides this security functionality?",
    options: [
      "Hub",
      "Basic unmanaged switch",
      "Router or firewall that can create separate VLANs or network segments",
      "Repeater"
    ],
    correct: 2,
    explanation: "A router or firewall can create separate network segments or VLANs to isolate guest traffic from the corporate network. The guest network operates on a separate subnet with its own IP range, and firewall rules prevent guests from accessing corporate resources while still providing internet access. Managed switches can also implement VLANs. This network segmentation is critical for security - you don't want guests potentially accessing company servers, printers, or workstations. Many wireless routers have built-in guest network functionality."
  },
  {
    id: 8,
    question: "A fiber optic cable needs to connect to a switch that only has copper RJ-45 Ethernet ports. What device is needed?",
    options: [
      "Cable tester",
      "Media converter or SFP/SFP+ transceiver module",
      "Crimping tool",
      "No solution exists"
    ],
    correct: 1,
    explanation: "Media converters translate between fiber optic and copper Ethernet. Standalone media converters are external boxes with fiber and copper ports. Alternatively, if the switch has SFP (Small Form-factor Pluggable) or SFP+ slots, you can insert a fiber transceiver module directly into the switch. Media converters maintain the same speed and protocol while changing the physical medium. They're essential when connecting fiber infrastructure to copper equipment, or extending network distances beyond copper's 100-meter limitation using fiber."
  },
  {
    id: 9,
    question: "A network has three switches connected in a triangle topology (each switch connected to the other two). What protocol prevents switching loops in this configuration?",
    options: [
      "DHCP",
      "DNS",
      "STP (Spanning Tree Protocol)",
      "NAT"
    ],
    correct: 2,
    explanation: "STP (Spanning Tree Protocol) prevents Layer 2 loops by automatically disabling redundant paths while maintaining backup paths for failover. Without STP, loops cause broadcast storms where frames circulate endlessly, consuming all bandwidth and crashing the network within seconds. STP elects a root bridge and calculates loop-free paths, blocking ports that would create loops. RSTP (Rapid Spanning Tree) converges faster. While loops are dangerous, redundant connections provide fault tolerance - STP enables this redundancy safely."
  },
  {
    id: 10,
    question: "A small office router has four LAN ports labeled 1-4 and one WAN/Internet port. What should be connected to the WAN port?",
    options: [
      "All computers in the office",
      "The cable modem or DSL modem from the ISP",
      "Printers and other peripherals",
      "The power adapter"
    ],
    correct: 1,
    explanation: "The WAN (Wide Area Network) port connects to your ISP's equipment - cable modem, DSL modem, or fiber ONT (Optical Network Terminal). This port receives the public IP address and internet connection. The LAN (Local Area Network) ports connect to internal devices like computers, printers, and switches. The router performs NAT between the WAN and LAN, translating private internal IPs to the public WAN IP. Connecting devices to the wrong ports prevents internet access or exposes devices directly to the internet without firewall protection."
  },
  {
    id: 11,
    question: "A network administrator needs to monitor all traffic passing through a specific switch port for security analysis. What switch feature allows copying traffic from one port to a monitoring port?",
    options: [
      "PoE (Power over Ethernet)",
      "Port mirroring (SPAN - Switched Port Analyzer)",
      "VLAN tagging",
      "Link aggregation"
    ],
    correct: 1,
    explanation: "Port mirroring or SPAN (Switched Port Analyzer) copies all traffic from one or more source ports to a destination monitoring port. This allows connecting packet analyzers (like Wireshark), intrusion detection systems (IDS), or network monitoring tools to capture and analyze traffic without interrupting normal operations. The monitored port receives duplicates of frames sent/received on the source ports. This is essential for troubleshooting, security monitoring, and network analysis. It's a feature only available on managed switches."
  },
  {
    id: 12,
    question: "A company receives internet service from two different ISPs for redundancy. What network device can automatically failover to the backup connection if the primary ISP fails?",
    options: [
      "Unmanaged switch",
      "Router with dual WAN capability and failover support",
      "Hub",
      "Wireless access point"
    ],
    correct: 1,
    explanation: "A router with dual WAN ports and failover capability monitors both ISP connections and automatically switches to the backup if the primary fails. Advanced routers can also load-balance traffic across both connections when both are active. This provides business continuity and redundancy. The router uses techniques like ping tests or BGP routing to detect connection failures. Some routers support different connection types on each WAN (cable + DSL, or fiber + cellular). This is essential for businesses that can't tolerate internet downtime."
  },
  {
    id: 13,
    question: "An office has a 24-port switch that's running out of ports. What's the best way to expand capacity?",
    options: [
      "Replace all computers",
      "Connect another switch to an available port on the existing switch (daisy-chaining/uplink)",
      "Nothing can be done - switches cannot be expanded",
      "Install a second network card in every computer"
    ],
    correct: 1,
    explanation: "Switches can be daisy-chained (cascaded) by connecting them together using regular Ethernet cables on standard ports or dedicated uplink ports. Connect a port on Switch 1 to a port on Switch 2, and all devices on Switch 2 can communicate with devices on Switch 1. For best performance, use Gigabit uplink connections and avoid creating more than 3-4 levels of switches. Some switches support stacking (using special cables/modules to make multiple switches act as one unit). This is standard practice for network expansion."
  },
  {
    id: 14,
    question: "A wireless access point (WAP) will be installed in a conference room to provide Wi-Fi coverage. Where should the WAP be connected?",
    options: [
      "Directly to each computer using USB",
      "To a network switch or router's LAN port using an Ethernet cable",
      "To the ISP's modem only",
      "Access points don't need any connections"
    ],
    correct: 1,
    explanation: "Wireless access points connect to the wired network via Ethernet cable (usually to a switch or router's LAN port). The WAP bridges wireless clients to the wired LAN. Many WAPs support PoE, allowing a single Ethernet cable to provide both network connectivity and power. Enterprise environments use multiple WAPs connected to switches throughout the building for comprehensive coverage. The WAPs receive IP addresses from the network's DHCP server and provide wireless clients access to network resources and the internet."
  },
  {
    id: 15,
    question: "A home network uses a wireless router that includes a 4-port switch. What layers of the OSI model does this combination device operate at?",
    options: [
      "Only Layer 1 (Physical)",
      "Layers 1 (Physical), 2 (Data Link), and 3 (Network) - the switch operates at Layers 1-2, while the router operates at Layer 3",
      "Only Layer 7 (Application)",
      "Wireless routers don't use the OSI model"
    ],
    correct: 1,
    explanation: "A wireless router with built-in switch is a multifunction device operating at multiple layers. The switch portion operates at Layer 2 (Data Link), forwarding frames based on MAC addresses. The router portion operates at Layer 3 (Network), routing packets between networks based on IP addresses and performing NAT. The wireless component also operates at Layer 2. All network devices operate at Layer 1 (Physical) for signal transmission. Understanding these layers helps troubleshoot - switch problems affect local network communication, while router issues affect internet connectivity."
  }
];