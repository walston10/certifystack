export const lesson1Quiz = [
  {
    id: 1,
    question: "At which OSI layer do routers operate?",
    options: [
      "Layer 2 - Data Link",
      "Layer 3 - Network",
      "Layer 4 - Transport",
      "Layer 7 - Application"
    ],
    correct: 1,
    explanation: "Routers operate at Layer 3 (Network Layer) because they make forwarding decisions based on IP addresses and route packets between different networks."
  },
  {
    id: 2,
    question: "Which protocol is connectionless and does NOT guarantee delivery?",
    options: [
      "TCP",
      "UDP",
      "HTTP",
      "FTP"
    ],
    correct: 1,
    explanation: "UDP (User Datagram Protocol) is connectionless and doesn't guarantee delivery. It's fast and used for streaming, gaming, and voice calls. TCP is connection-oriented and guarantees reliable delivery."
  },
  {
    id: 3,
    question: "What is the primary function of the Data Link Layer (Layer 2)?",
    options: [
      "Routing packets between networks using IP addresses",
      "Establishing sessions between applications",
      "Providing node-to-node data transfer using MAC addresses",
      "Converting data into electrical signals"
    ],
    correct: 2,
    explanation: "Layer 2 (Data Link) provides node-to-node data transfer on the same local network using MAC addresses. It packages data into frames and switches operate at this layer."
  },
  {
    id: 4,
    question: "Which device operates at Layer 1 (Physical Layer)?",
    options: [
      "Router",
      "Switch",
      "Hub",
      "Firewall"
    ],
    correct: 2,
    explanation: "Hubs operate at Layer 1 (Physical) and simply repeat electrical signals to all connected ports. Switches operate at Layer 2, routers at Layer 3, and firewalls at Layer 4+."
  },
  {
    id: 5,
    question: "What is encapsulation in the OSI model?",
    options: [
      "Adding headers as data travels down the stack from Layer 7 to Layer 1",
      "Removing headers as data travels up the stack",
      "Encrypting data at the Presentation Layer",
      "Compressing data to make it smaller"
    ],
    correct: 0,
    explanation: "Encapsulation is the process of each OSI layer adding its own header to data as it travels DOWN the stack (Layer 7 → Layer 1). De-encapsulation removes headers as data travels back UP at the destination."
  },
  {
    id: 6,
    question: "What type of address is used at Layer 3 (Network Layer)?",
    options: [
      "MAC address",
      "Port number",
      "Physical address",
      "IP address"
    ],
    correct: 3,
    explanation: "Layer 3 (Network Layer) uses IP addresses for logical addressing and routing between different networks. MAC addresses are used at Layer 2 (Data Link), and port numbers are used at Layer 4 (Transport)."
  },
  {
    id: 7,
    question: "Which layer is responsible for encryption and data formatting?",
    options: [
      "Application Layer",
      "Transport Layer",
      "Presentation Layer",
      "Network Layer"
    ],
    correct: 2,
    explanation: "Layer 6 (Presentation Layer) handles encryption/decryption, compression, and data formatting. This is where SSL/TLS encryption happens for secure web browsing (HTTPS)."
  },
  {
    id: 8,
    question: "What does Layer 1 (Physical Layer) transmit?",
    options: [
      "Frames with MAC addresses",
      "Packets with IP addresses",
      "Encrypted data",
      "Raw bits (1s and 0s) as electrical signals"
    ],
    correct: 3,
    explanation: "Layer 1 (Physical Layer) transmits raw bits (1s and 0s) as electrical signals over cables, light pulses through fiber, or radio waves for wireless. It's the actual hardware and physical transmission."
  },
  {
    id: 9,
    question: "Which device operates at Layer 2 and uses MAC addresses to forward frames?",
    options: [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    correct: 0,
    explanation: "Switches operate at Layer 2 (Data Link) and use MAC addresses to intelligently forward frames only to the correct destination port on the local network. This is more efficient than a hub which broadcasts to all ports."
  },
  {
    id: 10,
    question: "Which layer manages and maintains connections between applications?",
    options: [
      "Network Layer",
      "Transport Layer",
      "Session Layer",
      "Presentation Layer"
    ],
    correct: 2,
    explanation: "Layer 5 (Session Layer) establishes, maintains, and terminates communication sessions between applications. It's like a receptionist managing meeting rooms - setting up connections, keeping them active, and closing them when done."
  },
  {
    id: 11,
    question: "What is the main difference between TCP and UDP?",
    options: [
      "TCP is faster than UDP",
      "TCP guarantees delivery and is reliable; UDP is faster but unreliable",
      "UDP is used for web browsing; TCP is used for streaming",
      "TCP uses IP addresses; UDP uses MAC addresses"
    ],
    correct: 1,
    explanation: "TCP is connection-oriented and guarantees reliable delivery with error checking (used for web, email, files). UDP is connectionless and faster but doesn't guarantee delivery (used for streaming, gaming, voice calls)."
  },
  {
    id: 12,
    question: "When troubleshooting using the OSI model, which layer should you typically check first?",
    options: [
      "Layer 1 - Physical (cables, connections)",
      "Layer 3 - Network (IP addresses)",
      "Layer 7 - Application (software settings)",
      "Layer 4 - Transport (TCP/UDP)"
    ],
    correct: 0,
    explanation: "Bottom-up troubleshooting starts at Layer 1 (Physical). Always check cables, power, and physical connections first before investigating higher layers. Many network issues are simply unplugged cables or bad connections."
  },
  {
    id: 13,
    question: "Which mnemonic helps remember the OSI layers from bottom to top?",
    options: [
      "All People Seem To Need Data Processing",
      "Please Do Not Throw Sausage Pizza Away",
      "People Don't Need Those Stupid Packets Anyway",
      "Always Postpone Studying Till Night Prior Afternoon"
    ],
    correct: 1,
    explanation: "'Please Do Not Throw Sausage Pizza Away' represents Physical, Data Link, Network, Transport, Session, Presentation, Application (Layers 1-7). This bottom-up approach matches how data is built as it travels through the network."
  },
  {
    id: 14,
    question: "At which layer do protocols like HTTP, FTP, and DNS operate?",
    options: [
      "Layer 4 - Transport",
      "Layer 5 - Session",
      "Layer 6 - Presentation",
      "Layer 7 - Application"
    ],
    correct: 3,
    explanation: "HTTP, FTP, DNS, SMTP, and similar protocols operate at Layer 7 (Application Layer). These are the protocols that applications use to communicate over the network - not the applications themselves."
  },
  {
    id: 15,
    question: "How many layers does the TCP/IP model have compared to the OSI model?",
    options: [
      "TCP/IP has 4 layers; OSI has 7 layers",
      "TCP/IP has 3 layers; OSI has 7 layers ",
      "TCP/IP has 5 layers; OSI has 7 layers",
      "Both have 7 layers"
    ],
    correct: 0,
    explanation: "The TCP/IP model has 4 layers (Network Access, Internet, Transport, Application) while the OSI model has 7 layers. OSI is the theoretical teaching framework; TCP/IP is the practical real-world implementation used on the internet."
  }
];