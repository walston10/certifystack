// Quiz for Lesson 14: Network Devices (Routers, Firewalls, Load Balancers)

export const lesson14Quiz = [
  {
    id: 1,
    question: "A small business network uses a consumer-grade router that performs NAT and also includes basic firewall capabilities. Users report that internal devices can initiate connections to the internet successfully, but inbound connections to an internal web server fail. What type of firewall is most likely implemented?",
    options: [
      "Next-generation firewall with deep packet inspection",
      "Stateless firewall blocking all inbound traffic",
      "Stateful firewall tracking established connections and allowing related return traffic",
      "Web application firewall protecting the web server"
    ],
    correct: 2,
    explanation: "Consumer routers typically run stateful firewalls that track connection states. Outbound connections (internal to internet) work because the firewall creates a state entry and allows return packets. Inbound connections (internet to internal server) fail because no state exists—the firewall has no record of an outbound request. Solution: configure port forwarding (DNAT) to allow specific inbound connections to the web server."
  },
  {
    id: 2,
    question: "An enterprise is experiencing network congestion during peak hours. Multiple application servers are hosted in the data center. The network architect proposes deploying a device that distributes incoming requests across multiple servers using round-robin and health checks. Which device should be deployed?",
    options: [
      "Layer 3 switch to route traffic more efficiently",
      "Proxy server to cache frequently accessed content",
      "Load balancer to distribute traffic across multiple backend servers",
      "Content filter to block unnecessary traffic"
    ],
    correct: 2,
    explanation: "Load balancers distribute traffic across multiple servers based on algorithms (round-robin, least connections, weighted, etc.) and perform health checks to remove failed servers from the pool. This provides both performance improvement (distributing load) and high availability (automatic failover). Layer 4 load balancers operate on transport layer (TCP/UDP), while Layer 7 balancers can make decisions based on application content (HTTP headers, URLs)."
  },
  {
    id: 3,
    question: "A network administrator needs to place publicly accessible servers (web, email, DNS) in a network segment that is isolated from both the internal corporate network and the untrusted internet. What network design should be implemented?",
    options: [
      "Place servers directly on the internal network with host-based firewalls",
      "Create a screened subnet (DMZ) between two firewalls, with strict rules controlling traffic flow",
      "Connect servers directly to the internet with public IP addresses",
      "Use a single firewall with all servers on the internal network"
    ],
    correct: 1,
    explanation: "A DMZ (demilitarized zone) or screened subnet is a network segment isolated from both the internal network and the internet. Typically implemented with two firewalls: the external firewall filters traffic from the internet to the DMZ, and the internal firewall filters traffic from the DMZ to the internal network. This architecture limits the damage if a public-facing server is compromised—attackers gain access to the DMZ but not the internal network."
  },
  {
    id: 4,
    question: "A company's security team identifies unusual traffic patterns suggesting a potential attack. They want to deploy a device that can detect AND automatically block malicious traffic in real-time. Which device meets this requirement?",
    options: [
      "IDS (Intrusion Detection System) - monitors and alerts on suspicious traffic",
      "IPS (Intrusion Prevention System) - detects and actively blocks malicious traffic inline",
      "Syslog server - collects logs for analysis",
      "Proxy server - filters web traffic based on URLs"
    ],
    correct: 1,
    explanation: "IDS passively monitors traffic and generates alerts when suspicious activity is detected—it sits out-of-band and doesn't block traffic. IPS sits inline in the traffic path and can actively block malicious traffic in real-time based on signatures, anomaly detection, or behavioral analysis. IPS = IDS + prevention capability. Modern NGFWs often include integrated IPS functionality."
  },
  {
    id: 5,
    question: "A remote branch office connects to headquarters via the internet. The company needs a device that terminates multiple VPN connections from remote users and site-to-site VPNs, handling encryption/decryption and authentication at scale. What device is purpose-built for this role?",
    options: [
      "Standard router with VPN capability",
      "Layer 3 switch with routing enabled",
      "VPN concentrator designed for high-volume VPN aggregation",
      "Wireless controller for managing remote APs"
    ],
    correct: 2,
    explanation: "VPN concentrators are purpose-built devices optimized for handling large numbers of simultaneous VPN connections. They include hardware acceleration for encryption/decryption (reducing CPU load), support multiple VPN protocols (IPSec, SSL VPN), integrate with authentication systems (RADIUS, LDAP), and can handle hundreds or thousands of concurrent tunnels. While routers can handle VPN, concentrators are designed specifically for this high-volume use case."
  },
  {
    id: 6,
    question: "A network uses a traditional stateless firewall with ACLs. The security team notices that the firewall allows return traffic from external web servers to internal clients, but they want this to work automatically without creating hundreds of ACL entries. What should they do?",
    options: [
      "Manually create ACL entries for every possible return connection",
      "Replace the stateless firewall with a stateful firewall that tracks connection states",
      "Disable the firewall entirely to allow all traffic",
      "Use NAT to hide internal addresses"
    ],
    correct: 1,
    explanation: "Stateless firewalls examine each packet independently without context of the conversation. To allow return traffic, you'd need ACL entries for every possible source port (ephemeral ports 1024-65535), which is impractical. Stateful firewalls maintain a connection state table—when an internal client initiates a connection outbound, the firewall automatically permits related return traffic without explicit ACL entries. This is why modern firewalls are stateful by default."
  },
  {
    id: 7,
    question: "An organization wants to inspect encrypted HTTPS traffic for malware and data exfiltration. Their next-generation firewall supports this capability. What must be configured for the firewall to inspect encrypted traffic?",
    options: [
      "Enable port forwarding for HTTPS (port 443)",
      "Configure SSL/TLS decryption with the firewall acting as a man-in-the-middle, using trusted certificates",
      "Install a content filter to block suspicious websites",
      "Enable deep packet inspection at Layer 3"
    ],
    correct: 1,
    explanation: "To inspect encrypted HTTPS traffic, the firewall must decrypt it. This requires SSL/TLS decryption (SSL inspection): the firewall terminates the SSL connection from the client, inspects the plaintext, then re-encrypts to forward to the destination. The firewall presents its own certificate to clients (signed by a trusted CA installed on client devices). This is controversial because it breaks end-to-end encryption, but it's necessary to detect threats in encrypted traffic (70%+ of internet traffic is now HTTPS)."
  },
  {
    id: 8,
    question: "A company has four web servers behind a load balancer. The load balancer is configured for 'least connections' algorithm. Server A has 45 active connections, Server B has 38, Server C has 52, and Server D has 41. A new client connection arrives. Which server receives the connection?",
    options: [
      "Server A because it was started first",
      "Server B because it has the fewest active connections (38)",
      "Server C to balance the load since it has the most connections",
      "All four servers using round-robin distribution"
    ],
    correct: 1,
    explanation: "The 'least connections' algorithm directs new connections to the server with the fewest active connections. This is more intelligent than round-robin when connections have varying duration/complexity. Server B (38 connections) is least loaded, so it receives the new connection. Other algorithms: round-robin (equal distribution), weighted (based on server capacity), least response time (fastest server), IP hash (same client always goes to same server)."
  },
  {
    id: 9,
    question: "A network includes both Layer 2 switches and Layer 3 switches. What capability distinguishes a Layer 3 switch from a Layer 2 switch?",
    options: [
      "Layer 3 switches can forward frames based on MAC addresses",
      "Layer 3 switches can perform inter-VLAN routing using SVIs and route packets based on IP addresses",
      "Layer 3 switches support higher speeds than Layer 2 switches",
      "Layer 3 switches can only operate in trunk mode"
    ],
    correct: 1,
    explanation: "Layer 2 switches forward based on MAC addresses (Data Link layer). Layer 3 switches (also called multilayer switches) perform routing functions at wire speed using ASICs—they can route between VLANs using Switch Virtual Interfaces (SVIs) without requiring an external router. They maintain routing tables, run routing protocols (OSPF, EIGRP), and make forwarding decisions based on IP addresses. This provides inter-VLAN routing at much higher speeds than router-on-a-stick."
  },
  {
    id: 10,
    question: "A company deploys a reverse proxy in front of their web application servers. What primary benefit does a reverse proxy provide compared to clients connecting directly to the web servers?",
    options: [
      "Reverse proxy allows internal users to access external websites anonymously",
      "Reverse proxy sits in front of web servers, providing SSL offloading, caching, and hiding the actual server infrastructure",
      "Reverse proxy provides DNS resolution for internal hostnames",
      "Reverse proxy encrypts traffic between internal users and the internet"
    ],
    correct: 1,
    explanation: "Forward proxy serves client requests to external resources (client → proxy → internet). Reverse proxy sits in front of servers, receiving client requests and forwarding to backend servers (client → reverse proxy → servers). Benefits: SSL termination/offloading (proxy handles encryption), caching (reduces backend load), load distribution, security (hides real server IPs/architecture), WAF capabilities, and compression. Common reverse proxies: Nginx, HAProxy, F5."
  },
  {
    id: 11,
    question: "A school wants to prevent students from accessing social media and gaming sites during school hours. What device should be deployed to filter web traffic based on URL categories?",
    options: [
      "Standard router with ACLs blocking specific IP addresses",
      "Content filter (web filter) that inspects HTTP/HTTPS traffic and blocks based on categories and URLs",
      "Load balancer to distribute web traffic",
      "IDS to detect inappropriate access attempts"
    ],
    correct: 1,
    explanation: "Content filters (web filters) inspect web traffic and block/allow based on: URL categories (social media, gaming, adult content), specific URLs/domains, keywords, file types, and time of day. They maintain constantly updated databases of categorized websites. Modern content filters integrate with proxy servers or NGFWs and can inspect HTTPS traffic. Blocking by IP is ineffective because sites use CDNs and change IPs frequently."
  },
  {
    id: 12,
    question: "A data center hosts multiple virtual machines on physical servers. The VMs need network connectivity but creating physical connections for each VM is impractical. What virtualization component provides network connectivity to VMs?",
    options: [
      "Virtual router to route between VM subnets",
      "Virtual switch (vSwitch) that connects VMs and bridges to physical NICs",
      "Virtual firewall to secure VM traffic",
      "Hypervisor that manages VM resources"
    ],
    correct: 1,
    explanation: "Virtual switches (vSwitches) operate within the hypervisor, providing Layer 2 switching for VMs. VMs connect to virtual switch ports, and the vSwitch connects to physical NICs (uplinks) on the host. vSwitches support VLANs, port groups, and advanced features like port mirroring. Examples: VMware vSwitch/Distributed vSwitch, Hyper-V Virtual Switch, Open vSwitch. Virtual routers, firewalls, and load balancers can run as VMs/containers, but the vSwitch provides fundamental connectivity."
  },
  {
    id: 13,
    question: "An organization wants to consolidate multiple physical network appliances (firewalls, load balancers, WAN optimizers) into virtual instances running on standard servers. What technology enables this consolidation?",
    options: [
      "Software-Defined Networking (SDN) separating control and data planes",
      "Network Function Virtualization (NFV) running network services as virtual instances",
      "Quality of Service (QoS) prioritizing network traffic",
      "Link aggregation combining multiple physical links"
    ],
    correct: 1,
    explanation: "NFV (Network Function Virtualization) virtualizes network functions traditionally performed by dedicated hardware appliances. Instead of physical boxes, network services run as VMs or containers on standard x86 servers. Benefits: reduced CAPEX (no proprietary hardware), faster deployment (spin up VMs vs rack hardware), flexibility (scale up/down dynamically), and easier management. SDN is related but focuses on control plane separation; NFV virtualizes the network functions themselves."
  },
  {
    id: 14,
    question: "A company's NGFW (Next-Generation Firewall) is configured to inspect traffic and make decisions based on the application layer, regardless of port number. A user tries to run SSH on port 8080 instead of port 22 to bypass firewall rules. What NGFW capability will detect this?",
    options: [
      "Port-based filtering that blocks non-standard ports",
      "Deep packet inspection (DPI) and application awareness to identify traffic by behavior and signatures, not just port numbers",
      "MAC address filtering to identify the user's device",
      "NAT to translate internal addresses"
    ],
    correct: 1,
    explanation: "NGFWs use application awareness and deep packet inspection (DPI) to identify traffic based on behavior, patterns, and protocol signatures—not just port numbers. Even if SSH runs on port 8080 (not standard port 22), the NGFW analyzes packet contents and recognizes SSH protocol characteristics. This prevents users from bypassing policies by using non-standard ports. Traditional firewalls only look at ports/IPs (easily bypassed); NGFWs inspect Layer 7 application data."
  },
  {
    id: 15,
    question: "A network diagram shows a device labeled 'UTM' sitting at the network perimeter between the internal network and the internet. What distinguishes a UTM (Unified Threat Management) device from a traditional firewall?",
    options: [
      "UTM only performs basic packet filtering",
      "UTM integrates multiple security functions (firewall, IPS, antivirus, content filtering, VPN) into a single device",
      "UTM is only used for small networks, not enterprises",
      "UTM operates exclusively at Layer 2"
    ],
    correct: 1,
    explanation: "UTM devices consolidate multiple security functions into one appliance: firewall, IPS/IDS, antivirus/antimalware, content/URL filtering, anti-spam, VPN, and sometimes DLP (Data Loss Prevention) and application control. Benefits: simplified management (single interface/vendor), reduced complexity, lower cost for SMBs. Tradeoffs: single point of failure, performance bottleneck if undersized, potentially less feature-rich than best-of-breed individual appliances. Common UTM vendors: Fortinet, SonicWall, Sophos, WatchGuard."
  }
];

// Export for use in quiz component
export default lesson14Quiz;