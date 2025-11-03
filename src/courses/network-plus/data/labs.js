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
