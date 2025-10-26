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
    labPath: "/content/network-plus/labs/lab-01-osi-layers.md",
    solutionPath: "/content/network-plus/solutions/lab-01-solution.md",
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
    labPath: "/content/network-plus/labs/lab-02-topology-design.md",
    solutionPath: "/content/network-plus/solutions/lab-02-solution.md",
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
    id: 6,
    lessonId: 6,
    title: "VLSM Network Design Challenge",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/network-plus/labs/lab-06-vlsm-design.md",
    solutionPath: "/content/network-plus/solutions/lab-06-solution.md",
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
    id: 11,
    lessonId: 11,
    title: "VLAN Configuration and Trunking",
    difficulty: "Intermediate",
    estimatedTime: "35-45 min",
    labPath: "/content/network-plus/labs/lab-11-vlan-config.md",
    solutionPath: "/content/network-plus/solutions/lab-11-solution.md",
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
    labPath: "/content/network-plus/labs/lab-28-troubleshooting.md",
    solutionPath: "/content/network-plus/solutions/lab-28-solution.md",
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
