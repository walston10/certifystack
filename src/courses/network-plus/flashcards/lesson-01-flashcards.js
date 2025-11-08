export const lesson1Flashcards = [
  {
    id: 1,
    front: "What does OSI stand for?",
    back: "Open Systems Interconnection - A 7-layer model standardizing network communication so different manufacturers' equipment can communicate."
  },
  {
    id: 2,
    front: "What is Layer 7 of the OSI model?",
    back: "Application Layer - Where network protocols that applications use operate (HTTP, FTP, DNS, SMTP). Not the applications themselves!"
  },
  {
    id: 3,
    front: "What is Layer 3 of the OSI model?",
    back: "Network Layer - Handles IP addresses and routing packets between different networks. Routers operate here."
  },
  {
    id: 4,
    front: "What device operates at Layer 2?",
    back: "Switch - Uses MAC addresses to intelligently forward frames only to the correct port on the same local network."
  },
  {
    id: 5,
    front: "What device operates at Layer 3?",
    back: "Router - Uses IP addresses to route packets between different networks and determine the best path."
  },
  {
    id: 6,
    front: "What's the difference between TCP and UDP?",
    back: "TCP is reliable, connection-oriented, guarantees delivery (web/email/files). UDP is fast, connectionless, no guarantees (streaming/gaming/voice calls)."
  },
  {
    id: 7,
    front: "What is a MAC address?",
    back: "Physical hardware address at Layer 2, permanently burned into network cards. 48-bit hexadecimal like 00:1A:2B:3C:4D:5E. Used for local network communication."
  },
  {
    id: 8,
    front: "What is encapsulation?",
    back: "Process of each OSI layer adding its own header to data as it travels DOWN the stack (Layer 7→1). Like wrapping a gift in multiple layers."
  },
  {
    id: 9,
    front: "What layer handles encryption and compression?",
    back: "Layer 6 - Presentation Layer. Handles SSL/TLS encryption, data formatting, and compression."
  },
  {
    id: 10,
    front: "What is Layer 1?",
    back: "Physical Layer - The actual hardware: cables, electrical signals, light pulses, radio waves. Transmits raw bits (1s and 0s)."
  },
  {
    id: 11,
    front: "What is Layer 2?",
    back: "Data Link Layer - Uses MAC addresses for node-to-node communication on the same network. Packages data into frames. Switches operate here."
  },
  {
    id: 12,
    front: "What is Layer 4 responsible for?",
    back: "Transport Layer - Reliable delivery, breaking data into segments, error checking, flow control. TCP and UDP operate here."
  },
  {
    id: 13,
    front: "What is Layer 5?",
    back: "Session Layer - Establishes, maintains, and terminates communication sessions between applications. Like a receptionist managing meetings."
  },
  {
    id: 14,
    front: "What is Layer 6?",
    back: "Presentation Layer - Data formatting, encryption/decryption, compression. Acts as a translator between application and network."
  },
  {
    id: 15,
    front: "What's the mnemonic for OSI layers (bottom to top)?",
    back: "Please Do Not Throw Sausage Pizza Away - Physical, Data Link, Network, Transport, Session, Presentation, Application (Layers 1-7)."
  },
  {
    id: 16,
    front: "What is de-encapsulation?",
    back: "Process of removing headers as data travels UP the OSI stack (Layer 1→7) at the destination. Each layer strips off its header."
  },
  {
    id: 17,
    front: "Which OSI layer do hubs operate at?",
    back: "Layer 1 - Physical. Hubs just repeat electrical signals to all connected ports without any intelligence. Mostly obsolete now."
  },
  {
    id: 18,
    front: "What does Layer 2 package data into?",
    back: "Frames - with source and destination MAC addresses added. Used for local network delivery."
  },
  {
    id: 19,
    front: "What does Layer 3 package data into?",
    back: "Packets - with source and destination IP addresses added. Used for routing between networks."
  },
  {
    id: 20,
    front: "When troubleshooting network issues, which layer should you check first?",
    back: "Layer 1 (Physical) - Always start bottom-up. Check cables, connections, link lights, and power before investigating higher layers."
  },
  {
    id: 21,
    front: "What does TCP guarantee that UDP doesn't?",
    back: "TCP guarantees delivery, correct order, and error checking. UDP has no guarantees - it just sends data as fast as possible."
  },
  {
    id: 22,
    front: "What type of address does Layer 3 use?",
    back: "IP addresses - logical addresses that can change and identify both the device and which network it's on (like 192.168.1.100)."
  },
  {
    id: 23,
    front: "How many layers does the TCP/IP model have?",
    back: "4 layers - Network Access, Internet, Transport, Application. OSI has 7 layers. TCP/IP is the real-world implementation; OSI is the teaching framework."
  },
  {
    id: 24,
    front: "When would you use UDP instead of TCP?",
    back: "When speed matters more than reliability - live video streaming, online gaming, VoIP calls. A few dropped frames are better than delays."
  },
  {
    id: 25,
    front: "What Layer are routers found in the OSI model",
    back: "Layer 3 - Networking."
  }
];