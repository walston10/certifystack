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