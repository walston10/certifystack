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
      "IP",
      "ICMP",
      "UDP"
    ],
    correct: 3,
    explanation: "UDP (User Datagram Protocol) is connectionless and doesn't guarantee delivery. TCP is connection-oriented and reliable, while IP and ICMP serve different purposes at Layer 3."
  },
  {
    id: 3,
    question: "What is the primary function of the Data Link Layer (Layer 2)?",
    options: [
      "Routing packets between networks",
      "Establishing sessions between applications",
      "Providing node-to-node data transfer using MAC addresses",
      "Encrypting data for secure transmission"
    ],
    correct: 2,
    explanation: "Layer 2 (Data Link) provides node-to-node data transfer on the same network using MAC addresses. It packages data into frames and uses switches for forwarding."
  },
  {
    id: 4,
    question: "Which device operates at Layer 1 and simply repeats signals to all ports?",
    options: [
      "Router",
      "Switch",
      "Firewall",
      "Hub"
    ],
    correct: 3,
    explanation: "Hubs operate at Layer 1 (Physical) and simply repeat electrical signals to all connected ports without any intelligence. Switches (Layer 2) and routers (Layer 3) are more intelligent devices."
  },
  {
    id: 5,
    question: "What is encapsulation in the OSI model?",
    options: [
      "Adding headers as data travels down the stack",
      "Removing headers as data travels up the stack",
      "Encrypting data at the Presentation Layer",
      "Converting analog signals to digital"
    ],
    correct: 0,
    explanation: "Encapsulation is the process of each OSI layer adding its own header to data as it travels DOWN the stack (Application → Physical). De-encapsulation is the reverse process going UP."
  },
  {
    id: 6,
    question: "Which port number does HTTP use by default?",
    options: [
      "22",
      "25",
      "443",
      "80"
    ],
    correct: 3,
    explanation: "HTTP uses port 80 by default. HTTPS uses port 443, SSH uses port 22, and SMTP uses port 25."
  },
  {
    id: 7,
    question: "What type of address is used at Layer 3?",
    options: [
      "MAC address",
      "IP address",
      "Port number",
      "Physical address"
    ],
    correct: 1,
    explanation: "Layer 3 (Network Layer) uses IP addresses for logical addressing and routing between networks. MAC addresses are used at Layer 2, and port numbers are used at Layer 4."
  },
  {
    id: 8,
    question: "Which OSI layer is responsible for encryption and compression?",
    options: [
      "Application",
      "Transport",
      "Network",
      "Presentation"
    ],
    correct: 3,
    explanation: "Layer 6 (Presentation Layer) handles encryption/decryption, compression, and data formatting. SSL/TLS encryption happens at this layer."
  },
  {
    id: 9,
    question: "What is the function of Layer 1 (Physical Layer)?",
    options: [
      "Transmitting raw bits over physical media",
      "Routing packets using IP addresses",
      "Managing MAC addresses and frames",
      "Establishing communication sessions"
    ],
    correct: 0,
    explanation: "Layer 1 (Physical Layer) transmits raw bits (1s and 0s) over physical media like cables, fiber optics, or radio waves. It deals with voltage levels, cables, and physical hardware."
  },
  {
    id: 10,
    question: "Which protocol provides reliable, connection-oriented data delivery?",
    options: [
      "UDP",
      "ICMP",
      "ARP",
      "TCP"
    ],
    correct: 3,
    explanation: "TCP (Transmission Control Protocol) is connection-oriented and guarantees reliable delivery with error checking, sequencing, and acknowledgments. UDP is connectionless and doesn't guarantee delivery."
  },
  {
    id: 11,
    question: "Which device operates at Layer 2 and uses MAC addresses?",
    options: [
      "Switch",
      "Router",
      "Hub",
      "Repeater"
    ],
    correct: 0,
    explanation: "Switches operate at Layer 2 (Data Link) and use MAC addresses to forward frames to the correct port on the same network. Routers work at Layer 3, while hubs and repeaters work at Layer 1."
  },
  {
    id: 12,
    question: "Which layer establishes, maintains, and terminates communication sessions?",
    options: [
      "Network",
      "Transport",
      "Presentation",
      "Session"
    ],
    correct: 3,
    explanation: "Layer 5 (Session Layer) manages communication sessions between applications. It establishes connections, maintains them during communication, and terminates them when done."
  },
  {
    id: 13,
    question: "What does TCP guarantee that UDP does not?",
    options: [
      "Faster transmission",
      "Delivery and correct order of packets",
      "Lower bandwidth usage",
      "Better for streaming video"
    ],
    correct: 1,
    explanation: "TCP guarantees delivery and ensures packets arrive in the correct order through sequencing and acknowledgments. UDP is faster but doesn't provide these guarantees."
  },
  {
    id: 14,
    question: "At which layer do firewalls typically operate?",
    options: [
      "Layer 1",
      "Layer 2",
      "Layer 3",
      "Layer 4 and above"
    ],
    correct: 3,
    explanation: "Most firewalls operate at Layer 4 (Transport) and above, examining port numbers, protocols, and application data. Some advanced firewalls (Next-Gen) can inspect up to Layer 7."
  },
  {
    id: 15,
    question: "When troubleshooting network issues, which layer should you typically check first?",
    options: [
      "Layer 1 (Physical)",
      "Layer 3 (Network)",
      "Layer 7 (Application)",
      "Layer 4 (Transport)"
    ],
    correct: 0,
    explanation: "Bottom-up troubleshooting starts at Layer 1 (Physical). Check cables, power, and physical connections first before investigating higher layers. Many issues are simply unplugged cables or powered-off devices."
  }
];