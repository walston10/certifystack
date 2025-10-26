export const lesson1Flashcards = [
  {
    id: 1,
    front: "What does OSI stand for?",
    back: "Open Systems Interconnection - A 7-layer model standardizing network communication."
  },
  {
    id: 2,
    front: "What is Layer 7 of the OSI model?",
    back: "Application Layer - Where user-facing protocols operate (HTTP, FTP, DNS, SMTP)."
  },
  {
    id: 3,
    front: "What is Layer 3 of the OSI model?",
    back: "Network Layer - Handles IP addresses and routing between networks."
  },
  {
    id: 4,
    front: "What device operates at Layer 2?",
    back: "Switch - Uses MAC addresses to forward frames on the same network."
  },
  {
    id: 5,
    front: "What device operates at Layer 3?",
    back: "Router - Uses IP addresses to route packets between different networks."
  },
  {
    id: 6,
    front: "What's the difference between TCP and UDP?",
    back: "TCP is reliable, connection-oriented, slower (web/email). UDP is fast, connectionless, unreliable (streaming/gaming)."
  },
  {
    id: 7,
    front: "What is a MAC address?",
    back: "Physical address (Layer 2) burned into network hardware. Example: 00:1A:2B:3C:4D:5E"
  },
  {
    id: 8,
    front: "What is encapsulation?",
    back: "Process of each OSI layer adding its header to data as it travels down the stack."
  },
  {
    id: 9,
    front: "What layer handles encryption?",
    back: "Layer 6 - Presentation Layer (SSL/TLS, data formatting, compression)."
  },
  {
    id: 10,
    front: "What protocol does Layer 3 use?",
    back: "IP (Internet Protocol) - Both IPv4 and IPv6 for logical addressing."
  },
  {
    id: 11,
    front: "What is Layer 1?",
    back: "Physical Layer - Cables, signals, bits, voltage levels, physical hardware."
  },
  {
    id: 12,
    front: "What is Layer 4 responsible for?",
    back: "Transport Layer - Reliable delivery, segmentation, flow control (TCP/UDP)."
  },
  {
    id: 13,
    front: "What is Layer 5?",
    back: "Session Layer - Establishes, maintains, and terminates communication sessions."
  },
  {
    id: 14,
    front: "What port does HTTP use?",
    back: "Port 80 (HTTPS uses port 443)."
  },
  {
    id: 15,
    front: "What's the mnemonic for OSI layers?",
    back: "All People Seem To Need Data Processing (Application to Physical, 7 to 1)."
  },
  {
    id: 16,
    front: "What is de-encapsulation?",
    back: "Process of removing headers as data travels UP the OSI stack at the destination."
  },
  {
    id: 17,
    front: "Which OSI layer do hubs operate at?",
    back: "Layer 1 - Physical (they just repeat signals to all ports)."
  },
  {
    id: 18,
    front: "What does Layer 2 package data into?",
    back: "Frames - with source and destination MAC addresses."
  },
  {
    id: 19,
    front: "What does Layer 3 package data into?",
    back: "Packets - with source and destination IP addresses."
  },
  {
    id: 20,
    front: "When troubleshooting, which layer should you check first?",
    back: "Layer 1 (Physical) - Check cables, connections, power. Use bottom-up approach."
  },
];

export const lesson2Flashcards = [
  {
    id: 1,
    front: "What is Star Topology?",
    back: "A topology where all devices connect to a central hub or switch. Most common in modern LANs."
  },
  {
    id: 2,
    front: "What is the main disadvantage of Star Topology?",
    back: "Single point of failure - if the central switch fails, the entire network goes down."
  },
  {
    id: 3,
    front: "What happens if one device fails in Star Topology?",
    back: "Only that device loses connectivity. The rest of the network continues working normally."
  },
  {
    id: 4,
    front: "What is Mesh Topology?",
    back: "Devices have multiple connections creating redundant paths. Provides maximum fault tolerance."
  },
  {
    id: 5,
    front: "What is the formula for Full Mesh connections?",
    back: "n(n-1)/2 where n = number of devices. Example: 5 devices = 10 connections."
  },
  {
    id: 6,
    front: "What's the difference between Full Mesh and Partial Mesh?",
    back: "Full Mesh: EVERY device connects to EVERY other. Partial Mesh: Only critical devices have multiple connections."
  },
  {
    id: 7,
    front: "What is Bus Topology?",
    back: "All devices connect to a single backbone cable with terminators at both ends. OBSOLETE - used in 1980s-90s."
  },
  {
    id: 8,
    front: "Why is Bus Topology obsolete?",
    back: "Single point of failure (break anywhere kills entire network) and very difficult to troubleshoot."
  },
  {
    id: 9,
    front: "What is Ring Topology?",
    back: "Devices connect in a circular loop. Data travels in one direction using Token Ring protocol. Mostly obsolete."
  },
  {
    id: 10,
    front: "What is Token Ring?",
    back: "A protocol where a token passes around the ring - only the device with the token can transmit."
  },
  {
    id: 11,
    front: "What is Hybrid Topology?",
    back: "Combination of two or more topologies. Most real-world networks are hybrid (e.g., star-mesh-ring)."
  },
  {
    id: 12,
    front: "What is Point-to-Point Topology?",
    back: "Direct connection between exactly TWO devices. Used for WAN links, building-to-building connections."
  },
  {
    id: 13,
    front: "Which topology is easiest to troubleshoot?",
    back: "Star Topology - check the central switch first, then individual connections."
  },
  {
    id: 14,
    front: "Which topology provides the most redundancy?",
    back: "Mesh Topology - multiple paths between devices means no single point of failure."
  },
  {
    id: 15,
    front: "What's the difference between Physical and Logical Topology?",
    back: "Physical = actual cable layout. Logical = how data flows through the network (can be different!)."
  },
  {
    id: 16,
    front: "Where is Star Topology commonly used?",
    back: "Modern office networks, home networks, LANs - anywhere ease of management matters."
  },
  {
    id: 17,
    front: "Where is Mesh Topology commonly used?",
    back: "WAN connections between offices, internet backbone, military/critical infrastructure, wireless mesh networks."
  },
  {
    id: 18,
    front: "Where is Point-to-Point commonly used?",
    back: "Connecting two buildings, WAN links (leased lines, T1/T3), VPN tunnels, wireless bridges."
  },
  {
    id: 19,
    front: "What topology would you use for a 100-person office?",
    back: "Star Topology - employees connect to switches, switches connect to core switch. Easy to manage and troubleshoot."
  },
  {
    id: 20,
    front: "Why doesn't Full Mesh scale well?",
    back: "Too many connections! 20 devices = 190 connections. 100 devices = 4,950 connections. Expensive and complex!"
  },
  {
    id: 21,
    front: "What was Bus Topology commonly used with?",
    back: "10BASE2 and 10BASE5 Ethernet with coaxial cable in the 1980s-90s."
  },
  {
    id: 22,
    front: "What advantages does Star Topology have?",
    back: "Easy to install, easy to troubleshoot, one device failure doesn't affect others, easy to add/remove devices."
  },
  {
    id: 23,
    front: "What advantages does Mesh Topology have?",
    back: "Maximum redundancy, high fault tolerance, no single point of failure, can handle high traffic loads."
  },
  {
    id: 24,
    front: "What are the disadvantages of Mesh Topology?",
    back: "Expensive (lots of cables/interfaces), complex to configure and maintain, difficult to troubleshoot."
  },
  {
    id: 25,
    front: "How many connections in a full mesh with 10 devices?",
    back: "45 connections. Formula: 10(9)/2 = 45."
  },
  {
    id: 26,
    front: "What replaced Bus and Ring topologies?",
    back: "Star topology with switches - more reliable, easier to troubleshoot, no single point of failure for individual devices."
  },
  {
    id: 27,
    front: "What is a Dual-Ring topology?",
    back: "Two rings for redundancy - if one fails, traffic flows on backup ring. Used in FDDI and SONET telecommunications."
  },
  {
    id: 28,
    front: "Give an example of Hybrid Topology.",
    back: "University campus: Star in each building, Ring fiber between buildings, Mesh for critical connections = Star-Ring-Mesh hybrid."
  },
  {
    id: 29,
    front: "What topology has the MOST fault tolerance?",
    back: "Full Mesh - every device connects to every other device, so multiple paths exist for all communications."
  },
  {
    id: 30,
    front: "What topology has the LEAST fault tolerance?",
    back: "Bus Topology - a break anywhere in the cable kills the entire network."
  }
];