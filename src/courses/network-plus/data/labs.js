// ============================================
// NETWORK+ N10-009 LABS DATA
// ============================================
// Hands-on lab exercises for practical skills

export const networkPlusLabs = [
  {
    id: 1,
    lessonId: 1,
    title: "OSI Model Layer Identification",
    difficulty: "Beginner",
    estimatedTime: "20-30 min",
    labPath: "/content/network-plus/labs/lab-01.md",
    solutionPath: "/content/network-plus/labs/lab-01-solution.md",
    objectives: [
      "Identify which OSI layer handles specific protocols",
      "Trace data flow through all 7 layers",
      "Troubleshoot layer-specific issues"
    ],
    prerequisites: [],
    skillsGained: ["OSI Model mastery", "Protocol identification", "Troubleshooting methodology"],
    xpReward: 50,
    completed: false
  },
  {
    id: 2,
    lessonId: 2,
    title: "Network Topology Design Challenge",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/network-plus/labs/lab-02.md",
    solutionPath: "/content/network-plus/labs/lab-02-solution.md",
    objectives: [
      "Design appropriate network topologies for different scenarios",
      "Identify advantages and disadvantages of each topology type",
      "Document network designs professionally"
    ],
    prerequisites: [1],
    skillsGained: ["Topology design", "Network documentation", "Requirements analysis"],
    xpReward: 50,
    completed: false
  },
  {
    id: 3,
    lessonId: 3,
    title: "IP Address Analysis",
    difficulty: "Beginner",
    estimatedTime: "20-30 min",
    labPath: "/content/network-plus/labs/lab-03.md",
    solutionPath: "/content/network-plus/labs/lab-03-solution.md",
    objectives: [
      "Identify IP address classes",
      "Differentiate between public and private IP addresses",
      "Analyze APIPA and loopback addresses"
    ],
    prerequisites: [2],
    skillsGained: ["IP Address Identification", "Private vs. Public IPs", "Special Address Recognition"],
    xpReward: 50,
    completed: false
  },
  {
    id: 4,
    lessonId: 4,
    title: "Subnet Mask and CIDR Practice",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/network-plus/labs/lab-04.md",
    solutionPath: "/content/network-plus/labs/lab-04-solution.md",
    objectives: [
      "Convert CIDR notation to dotted decimal",
      "Calculate usable hosts for a given subnet mask",
      "Identify network and broadcast addresses"
    ],
    prerequisites: [3],
    skillsGained: ["CIDR Notation", "Subnet Mask Calculation", "Host Calculation"],
    xpReward: 75,
    completed: false
  },
  {
    id: 5,
    lessonId: 5,
    title: "Subnetting a /24 Network",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-05.md",
    solutionPath: "/content/network-plus/labs/lab-05-solution.md",
    objectives: [
      "Divide a Class C network into smaller subnets",
      "Determine the new subnet mask and magic number",
      "Map out the range of each new subnet"
    ],
    prerequisites: [4],
    skillsGained: ["Subnetting", "Address Planning", "Magic Number Method"],
    xpReward: 100,
    completed: false
  },
  {
    id: 6,
    lessonId: 6,
    title: "VLSM Network Design Challenge",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min", // Typo was here in your local file
    labPath: "/content/network-plus/labs/lab-06.md",
    solutionPath: "/content/network-plus/labs/lab-06-solution.md",
    objectives: [
      "Design efficient IP addressing schemes",
      "Allocate subnets using VLSM methodology",
      "Create professional IPAM documentation",
      "Identify and prevent subnet overlaps"
    ],
    prerequisites: [3, 4, 5],
    skillsGained: ["VLSM", "IP planning", "Network documentation", "Subnetting mastery"],
    xpReward: 100,
    completed: false
  },
  {
    id: 7,
    lessonId: 7,
    title: "IPv6 Addressing Practice",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-07.md",
    solutionPath: "/content/network-plus/labs/lab-07-solution.md",
    objectives: [
      "Identify different IPv6 address types",
      "Compress and expand IPv6 addresses",
      "Configure IPv6 addresses on network devices",
      "Understand IPv6 subnetting basics"
    ],
    prerequisites: [6],
    skillsGained: ["IPv6 addressing", "Address compression", "IPv6 configuration"],
    xpReward: 100,
    completed: false
  },
  {
    id: 8,
    lessonId: 8,
    title: "DNS and Network Services Configuration",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-08.md",
    solutionPath: "/content/network-plus/labs/lab-08-solution.md",
    objectives: [
      "Understand DNS record types",
      "Configure DHCP services",
      "Troubleshoot DNS resolution",
      "Implement network time protocols"
    ],
    prerequisites: [7],
    skillsGained: ["DNS configuration", "DHCP setup", "Network services", "Service troubleshooting"],
    xpReward: 100,
    completed: false
  },
  {
    id: 9,
    lessonId: 9,
    title: "Common Port Numbers and Protocol Analysis",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/network-plus/labs/lab-09.md",
    solutionPath: "/content/network-plus/labs/lab-09-solution.md",
    objectives: [
      "Memorize common port numbers",
      "Identify protocols by port number",
      "Understand TCP vs UDP usage",
      "Analyze network traffic by port"
    ],
    prerequisites: [8],
    skillsGained: ["Port number knowledge", "Protocol identification", "Traffic analysis"],
    xpReward: 75,
    completed: false
  },
  {
    id: 10,
    lessonId: 10,
    title: "Ethernet Cabling and Standards",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/network-plus/labs/lab-10.md",
    solutionPath: "/content/network-plus/labs/lab-10-solution.md",
    objectives: [
      "Identify different cable types",
      "Create straight-through and crossover cables",
      "Test cable integrity",
      "Match Ethernet standards to requirements"
    ],
    prerequisites: [9],
    skillsGained: ["Cable identification", "Cable creation", "Ethernet standards", "Cable testing"],
    xpReward: 75,
    completed: false
  },
  {
    id: 11,
    lessonId: 11,
    title: "VLAN Configuration and Trunking",
    difficulty: "Intermediate",
    estimatedTime: "35-45 min",
    labPath: "/content/network-plus/labs/lab-11.md",
    solutionPath: "/content/network-plus/labs/lab-11-solution.md",
    objectives: [
      "Configure VLANs on network switches",
      "Set up trunk links between switches",
      "Implement inter-VLAN routing",
      "Troubleshoot VLAN connectivity issues"
    ],
    prerequisites: [10],
    skillsGained: ["VLAN configuration", "Switch management", "Trunking", "Layer 2 troubleshooting"],
    xpReward: 100,
    completed: false
  },
  {
    id: 12,
    lessonId: 12,
    title: "Routing Fundamentals",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-12.md",
    solutionPath: "/content/network-plus/labs/lab-12-solution.md",
    objectives: ["Configure static routes", "Understand routing tables", "Implement default gateways"],
    prerequisites: [11],
    skillsGained: ["Static routing", "Route configuration", "Routing tables"],
    xpReward: 100,
    completed: false
  },
  {
    id: 13,
    lessonId: 13,
    title: "Wireless Network Configuration",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-13.md",
    solutionPath: "/content/network-plus/labs/lab-13-solution.md",
    objectives: ["Configure wireless access points", "Implement WPA3 security", "Optimize wireless channels"],
    prerequisites: [12],
    skillsGained: ["Wireless configuration", "WiFi security", "Channel optimization"],
    xpReward: 100,
    completed: false
  },
  {
    id: 14,
    lessonId: 14,
    title: "Firewall Rules Configuration",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-14.md",
    solutionPath: "/content/network-plus/labs/lab-14-solution.md",
    objectives: ["Create firewall rules", "Implement ACLs", "Configure port forwarding"],
    prerequisites: [13],
    skillsGained: ["Firewall configuration", "ACL management", "Network security"],
    xpReward: 100,
    completed: false
  },
  {
    id: 15,
    lessonId: 15,
    title: "NAT and PAT Implementation",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-15.md",
    solutionPath: "/content/network-plus/labs/lab-15-solution.md",
    objectives: ["Configure NAT", "Implement PAT", "Understand address translation"],
    prerequisites: [14],
    skillsGained: ["NAT configuration", "PAT setup", "Address translation"],
    xpReward: 100,
    completed: false
  },
  {
    id: 16,
    lessonId: 16,
    title: "Load Balancing and Redundancy",
    difficulty: "Advanced",
    estimatedTime: "35-45 min",
    labPath: "/content/network-plus/labs/lab-16.md",
    solutionPath: "/content/network-plus/labs/lab-16-solution.md",
    objectives: ["Configure load balancers", "Implement VRRP", "Design redundant networks"],
    prerequisites: [15],
    skillsGained: ["Load balancing", "High availability", "Network redundancy"],
    xpReward: 125,
    completed: false
  },
  {
    id: 17,
    lessonId: 17,
    title: "VPN Configuration",
    difficulty: "Advanced",
    estimatedTime: "35-45 min",
    labPath: "/content/network-plus/labs/lab-17.md",
    solutionPath: "/content/network-plus/labs/lab-17-solution.md",
    objectives: ["Configure site-to-site VPN", "Implement remote access VPN", "Secure VPN tunnels"],
    prerequisites: [16],
    skillsGained: ["VPN configuration", "IPsec tunnels", "Remote access security"],
    xpReward: 125,
    completed: false
  },
  {
    id: 18,
    lessonId: 18,
    title: "QoS Implementation",
    difficulty: "Advanced",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-18.md",
    solutionPath: "/content/network-plus/labs/lab-18-solution.md",
    objectives: ["Configure QoS policies", "Implement traffic shaping", "Prioritize critical traffic"],
    prerequisites: [17],
    skillsGained: ["QoS configuration", "Traffic prioritization", "Bandwidth management"],
    xpReward: 125,
    completed: false
  },
  {
    id: 19,
    lessonId: 19,
    title: "Network Monitoring and Analysis",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-19.md",
    solutionPath: "/content/network-plus/labs/lab-19-solution.md",
    objectives: ["Configure SNMP monitoring", "Analyze syslog data", "Set up network alerts"],
    prerequisites: [18],
    skillsGained: ["Network monitoring", "SNMP configuration", "Log analysis"],
    xpReward: 100,
    completed: false
  },
  {
    id: 20,
    lessonId: 20,
    title: "Cloud Networking Basics",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-20.md",
    solutionPath: "/content/network-plus/labs/lab-20-solution.md",
    objectives: ["Configure cloud virtual networks", "Implement cloud security groups", "Connect on-prem to cloud"],
    prerequisites: [19],
    skillsGained: ["Cloud networking", "Virtual networks", "Hybrid connectivity"],
    xpReward: 100,
    completed: false
  },
  {
    id: 21,
    lessonId: 21,
    title: "Network Security Best Practices",
    difficulty: "Advanced",
    estimatedTime: "35-45 min",
    labPath: "/content/network-plus/labs/lab-21.md",
    solutionPath: "/content/network-plus/labs/lab-21-solution.md",
    objectives: ["Implement security hardening", "Configure IDS/IPS", "Perform security audits"],
    prerequisites: [20],
    skillsGained: ["Security hardening", "Intrusion detection", "Security auditing"],
    xpReward: 125,
    completed: false
  },
  {
    id: 22,
    lessonId: 22,
    title: "Network Automation with Python",
    difficulty: "Advanced",
    estimatedTime: "40-50 min",
    labPath: "/content/network-plus/labs/lab-22.md",
    solutionPath: "/content/network-plus/labs/lab-22-solution.md",
    objectives: ["Write network automation scripts", "Use Netmiko for device management", "Automate configuration tasks"],
    prerequisites: [21],
    skillsGained: ["Python automation", "Network scripting", "DevOps practices"],
    xpReward: 150,
    completed: false
  },
  {
    id: 23,
    lessonId: 23,
    title: "Software-Defined Networking (SDN)",
    difficulty: "Advanced",
    estimatedTime: "35-45 min",
    labPath: "/content/network-plus/labs/lab-23.md",
    solutionPath: "/content/network-plus/labs/lab-23-solution.md",
    objectives: ["Understand SDN architecture", "Configure SDN controllers", "Implement network programmability"],
    prerequisites: [22],
    skillsGained: ["SDN concepts", "Controller configuration", "Network programmability"],
    xpReward: 125,
    completed: false
  },
  {
    id: 24,
    lessonId: 24,
    title: "Network Performance Tuning",
    difficulty: "Advanced",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-24.md",
    solutionPath: "/content/network-plus/labs/lab-24-solution.md",
    objectives: ["Analyze network performance", "Optimize bandwidth usage", "Reduce latency and jitter"],
    prerequisites: [23],
    skillsGained: ["Performance analysis", "Network optimization", "Latency reduction"],
    xpReward: 125,
    completed: false
  },
  {
    id: 25,
    lessonId: 25,
    title: "Disaster Recovery Planning",
    difficulty: "Advanced",
    estimatedTime: "35-45 min",
    labPath: "/content/network-plus/labs/lab-25.md",
    solutionPath: "/content/network-plus/labs/lab-25-solution.md",
    objectives: ["Create DR plans", "Implement backup strategies", "Test recovery procedures"],
    prerequisites: [24],
    skillsGained: ["Disaster recovery", "Backup strategies", "Business continuity"],
    xpReward: 125,
    completed: false
  },
  {
    id: 26,
    lessonId: 26,
    title: "Network Documentation",
    difficulty: "Intermediate",
    estimatedTime: "25-35 min",
    labPath: "/content/network-plus/labs/lab-26.md",
    solutionPath: "/content/network-plus/labs/lab-26-solution.md",
    objectives: ["Create network diagrams", "Document configurations", "Maintain inventory"],
    prerequisites: [25],
    skillsGained: ["Network documentation", "Diagram creation", "Configuration management"],
    xpReward: 100,
    completed: false
  },
  {
    id: 27,
    lessonId: 27,
    title: "CompTIA Network+ Exam Simulation",
    difficulty: "Advanced",
    estimatedTime: "45-60 min",
    labPath: "/content/network-plus/labs/lab-27.md",
    solutionPath: "/content/network-plus/labs/lab-27-solution.md",
    objectives: ["Complete exam-style scenarios", "Apply comprehensive networking knowledge", "Practice under exam conditions"],
    prerequisites: [26],
    skillsGained: ["Exam readiness", "Comprehensive networking", "Problem-solving"],
    xpReward: 150,
    completed: false
  },
  {
    id: 28,
    lessonId: 28,
    title: "Network Troubleshooting Tools Lab",
    difficulty: "Advanced",
    estimatedTime: "40-50 min",
    labPath: "/content/network-plus/labs/lab-28.md",
    solutionPath: "/content/network-plus/labs/lab-28-solution.md",
    objectives: [
      "Use ping, traceroute, and pathping to diagnose connectivity",
      "Analyze network traffic with packet captures",
      "Interpret nslookup and dig output",
      "Use netstat and ipconfig for local troubleshooting",
      "Apply troubleshooting methodology to real scenarios"
    ],
    prerequisites: [27],
    skillsGained: ["Command-line tools", "Packet analysis", "Network troubleshooting", "Problem diagnosis"],
    xpReward: 150,
    completed: false
  },
  {
    id: 29,
    lessonId: 29,
    title: "Advanced Network Security Scenarios",
    difficulty: "Advanced",
    estimatedTime: "40-50 min",
    labPath: "/content/network-plus/labs/lab-29.md",
    solutionPath: "/content/network-plus/labs/lab-29-solution.md",
    objectives: ["Detect and mitigate security threats", "Implement zero-trust architecture", "Respond to security incidents"],
    prerequisites: [28],
    skillsGained: ["Threat detection", "Zero-trust security", "Incident response"],
    xpReward: 150,
    completed: false
  },
  {
    id: 30,
    lessonId: 30,
    title: "Enterprise Network Design Capstone",
    difficulty: "Advanced",
    estimatedTime: "60-90 min",
    labPath: "/content/network-plus/labs/lab-30.md",
    solutionPath: "/content/network-plus/labs/lab-30-solution.md",
    objectives: ["Design complete enterprise network", "Implement all networking concepts", "Create comprehensive documentation"],
    prerequisites: [29],
    skillsGained: ["Enterprise architecture", "Network design", "Project management"],
    xpReward: 200,
    completed: false
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get lab by ID
 */
export function getLabById(id) {
  return networkPlusLabs.find(lab => lab.id === parseInt(id));
}

/**
 * Get lab by lesson ID
 */
export function getLabByLessonId(lessonId) {
  return networkPlusLabs.find(lab => lab.lessonId === parseInt(lessonId));
}

/**
 * Get labs by difficulty
 */
export function getLabsByDifficulty(difficulty) {
  return networkPlusLabs.filter(lab => lab.difficulty === difficulty);
}

/**
 * Get completion statistics
 */
export function getLabCompletionStats() {
  const completed = networkPlusLabs.filter(l => l.completed).length;
  const total = networkPlusLabs.length;
  const percentage = Math.round((completed / total) * 100);

  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
}

/**
 * Get total XP available from labs
 */
export function getTotalLabXP() {
  return networkPlusLabs.reduce((total, lab) => total + lab.xpReward, 0);
}

/**
 * Get earned XP from completed labs
 */
export function getEarnedLabXP() {
  return networkPlusLabs
    .filter(lab => lab.completed)
    .reduce((total, lab) => total + lab.xpReward, 0);
}

export default networkPlusLabs;
