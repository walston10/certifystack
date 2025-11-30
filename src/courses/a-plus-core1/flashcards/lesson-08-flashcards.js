export const lesson8Flashcards = [
  {
    id: 1,
    front: "What is a router and what OSI layer does it operate at?",
    back: "Layer 3 (Network Layer) device that forwards traffic between different networks using IP addresses. Connects LAN to WAN (internet), performs NAT, assigns DHCP addresses, makes routing decisions."
  },
  {
    id: 2,
    front: "What is a switch and what OSI layer does it operate at?",
    back: "Layer 2 (Data Link Layer) device that forwards traffic within a network using MAC addresses. Creates separate collision domains for each port, learns MAC addresses, more intelligent than hubs."
  },
  {
    id: 3,
    front: "What is the difference between managed and unmanaged switches?",
    back: "Managed: Configurable via web/CLI, supports VLANs, QoS, port mirroring, SNMP monitoring, more expensive. Unmanaged: Plug-and-play, no configuration, cheaper, basic switching only. Managed for business, unmanaged for home."
  },
  {
    id: 4,
    front: "What is a hub and why is it obsolete?",
    back: "Layer 1 (Physical Layer) device that broadcasts data to all ports. Creates single collision domain, half-duplex only, slow, inefficient. Replaced by switches which are smarter and full-duplex."
  },
  {
    id: 5,
    front: "What is the difference between a collision domain and a broadcast domain?",
    back: "Collision domain: Network segment where packet collisions can occur. Hubs have one, switches create separate collision domains per port. Broadcast domain: Where broadcast traffic reaches. Routers separate broadcast domains, switches don't."
  },
  {
    id: 6,
    front: "What is a cable modem and how does it work?",
    back: "Converts cable TV coax signal to Ethernet for internet. Uses DOCSIS standard. Shared bandwidth with neighbors on same node. Download faster than upload (asymmetric). Connects via coax (RG-6)."
  },
  {
    id: 7,
    front: "What is DSL and what types exist?",
    back: "Digital Subscriber Line - internet over phone lines. ADSL (Asymmetric): Faster download than upload, common for home. VDSL: Very-high-bit-rate, faster but shorter distances. SDSL (Symmetric): Equal up/down speeds, business use."
  },
  {
    id: 8,
    front: "What is an ONT (Optical Network Terminal)?",
    back: "Device that terminates fiber optic connection (FTTP/FTTH) and converts to Ethernet. Required for fiber internet service. Usually installed by ISP on exterior or interior wall. Provides faster speeds than cable/DSL."
  },
  {
    id: 9,
    front: "What is a wireless access point (WAP)?",
    back: "Device that provides Wi-Fi connectivity to wireless clients. Connects to wired network via Ethernet. Different from wireless router - WAP doesn't route, just provides wireless access. Used to extend wireless coverage."
  },
  {
    id: 10,
    front: "What is the difference between a wireless router and a WAP?",
    back: "Wireless Router: Routes between networks, includes WAP functionality, DHCP server, firewall, NAT - all-in-one device. WAP: Only provides wireless access to existing network, no routing. WAPs used in enterprise to expand coverage."
  },
  {
    id: 11,
    front: "What is a patch panel and where is it used?",
    back: "Centralized panel in network rack with multiple RJ-45 ports. Wall jacks terminate to back of patch panel using punch-down blocks. Front connects to switch with patch cables. Organizes and manages cable runs professionally."
  },
  {
    id: 12,
    front: "What is a firewall and what does it do?",
    back: "Security device that filters network traffic based on rules. Blocks unauthorized access, allows legitimate traffic. Types: hardware (network firewall), software (host-based). Inspects packets, can be stateful or stateless."
  },
  {
    id: 13,
    front: "What is the difference between stateful and stateless firewalls?",
    back: "Stateless: Examines each packet independently, checks against rules, no connection tracking, faster but less secure. Stateful: Tracks connection state, remembers legitimate sessions, allows return traffic automatically, more intelligent and secure."
  },
  {
    id: 14,
    front: "What is PoE (Power over Ethernet) and what devices use it?",
    back: "Delivers power and data over same Ethernet cable. Standards: PoE (15.4W), PoE+ (30W), PoE++ (60-100W). Devices: IP phones, wireless access points, IP cameras, IoT sensors. Eliminates need for separate power cables."
  },
  {
    id: 15,
    front: "What is a PoE injector (midspan)?",
    back: "Device that adds PoE capability to non-PoE switch. Sits between switch and powered device, injects power into Ethernet cable. Alternative to buying expensive PoE switch. Also called PoE midspan."
  },
  {
    id: 16,
    front: "What is NAS (Network Attached Storage)?",
    back: "Dedicated file storage device connected to network. Accessible by multiple users/devices over network. Features: RAID support, multiple drive bays, network protocols (SMB, NFS). Used for centralized storage, backups, media sharing."
  },
  {
    id: 17,
    front: "What is the difference between NAS and SAN?",
    back: "NAS (Network Attached Storage): File-level storage, connects via Ethernet, easier setup, lower cost, for file sharing. SAN (Storage Area Network): Block-level storage, dedicated high-speed network (Fibre Channel), expensive, enterprise databases/applications."
  },
  {
    id: 18,
    front: "What is a Layer 3 switch?",
    back: "Switch that can also perform routing (Layer 3 functions). Combines switching and routing in one device. Faster than router for inter-VLAN routing. More expensive than Layer 2 switch. Common in enterprise networks."
  },
  {
    id: 19,
    front: "What is link aggregation (port bonding)?",
    back: "Combines multiple physical network connections into one logical connection. Increases bandwidth and provides redundancy. Technologies: LACP (standard), EtherChannel (Cisco). Example: Four 1 Gbps links = 4 Gbps total throughput."
  },
  {
    id: 20,
    front: "What is a network bridge?",
    back: "Connects two network segments, forwards traffic between them. Operates at Layer 2 (Data Link). Can connect different media types (Ethernet to Wi-Fi). Largely replaced by switches which are multiport bridges."
  },
  {
    id: 21,
    front: "What is a repeater?",
    back: "Layer 1 device that amplifies/regenerates signal to extend cable distance. Receives signal, cleans it up, retransmits it. No intelligence - just signal boosting. Largely obsolete - modern switches perform this function."
  },
  {
    id: 22,
    front: "What is a media converter?",
    back: "Converts between different cable types, typically fiber to copper Ethernet. Example: Fiber optic to RJ-45. Allows connecting different media types. No routing or switching - just physical conversion."
  },
  {
    id: 23,
    front: "What is VoIP gateway?",
    back: "Converts traditional analog phone signals (PSTN) to digital VoIP. Allows traditional phones to work with VoIP systems. Can also convert between different VoIP protocols. Bridges legacy phone systems and modern IP telephony."
  },
  {
    id: 24,
    front: "What is a proxy server?",
    back: "Intermediary server between clients and internet. Forward proxy: Hides client identity, caches content, filters requests. Reverse proxy: Protects servers, load balances, caches content. Used for security, performance, content filtering."
  },
  {
    id: 25,
    front: "What is load balancing?",
    back: "Distributes network traffic across multiple servers. Prevents single server overload, improves performance and availability. Methods: round-robin, least connections, IP hash. Hardware (dedicated device) or software-based."
  },
  {
    id: 26,
    front: "What is QoS (Quality of Service)?",
    back: "Prioritizes certain network traffic over others. Ensures critical applications (VoIP, video conferencing) get sufficient bandwidth. Can be configured on routers and managed switches. Example: Voice traffic prioritized over file downloads."
  },
  {
    id: 27,
    front: "What is port mirroring (SPAN)?",
    back: "Copies traffic from one or more switch ports to monitoring port. Used for: network analysis, troubleshooting, security monitoring with IDS/IPS. Requires managed switch. Mirror port connects to analyzer/monitoring tool."
  },
  {
    id: 28,
    front: "What is an IDS (Intrusion Detection System)?",
    back: "Monitors network traffic for suspicious activity and known threats. Alerts administrators but doesn't block. Passive monitoring. Can detect: malware, port scans, policy violations. Often uses port mirroring for access to traffic."
  },
  {
    id: 29,
    front: "What is an IPS (Intrusion Prevention System)?",
    back: "Like IDS but actively blocks detected threats. Sits inline with network traffic. Can drop malicious packets automatically. More effective than IDS but can cause false positives blocking legitimate traffic."
  },
  {
    id: 30,
    front: "What is UTM (Unified Threat Management)?",
    back: "All-in-one security appliance combining: firewall, IDS/IPS, antivirus, web filtering, VPN, spam filtering. Single device for comprehensive network security. Common in small to medium businesses. Simplifies security management."
  }
];