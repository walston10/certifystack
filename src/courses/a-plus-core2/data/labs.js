// ============================================
// A+ CORE 2 (220-1102) LABS DATA
// ============================================
// Hands-on lab exercises for practical skills

export const aPlusCore2Labs = [
  {
    id: 31,
    lessonId: 31,
    title: "Windows 10 and Windows 11 Features",
    difficulty: "Beginner",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-31.md",
    solutionPath: "/content/a-plus-core2/labs/lab-31-solution.md",
    objectives: [
      "Identify Windows edition features",
      "Compare Windows 10 and 11",
      "Understand edition differences",
      "Navigate Windows interfaces"
    ],
    prerequisites: [],
    skillsGained: ["Windows editions", "Feature comparison", "Windows navigation"],
    completed: false
  },
  {
    id: 32,
    lessonId: 32,
    title: "Windows File Systems and Management",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-32.md",
    solutionPath: "/content/a-plus-core2/labs/lab-32-solution.md",
    objectives: [
      "Compare NTFS and FAT32",
      "Manage file permissions",
      "Configure disk management",
      "Troubleshoot file system issues"
    ],
    prerequisites: [31],
    skillsGained: ["File systems", "Disk management", "NTFS permissions"],
    completed: false
  },
  {
    id: 33,
    lessonId: 33,
    title: "Windows Control Panel and Settings",
    difficulty: "Intermediate",
    estimatedTime: "35-45 min",
    labPath: "/content/a-plus-core2/labs/lab-33.md",
    solutionPath: "/content/a-plus-core2/labs/lab-33-solution.md",
    objectives: [
      "Navigate Control Panel utilities",
      "Configure Windows Settings",
      "Manage system properties",
      "Apply user preferences"
    ],
    prerequisites: [32],
    skillsGained: ["Control Panel", "Windows Settings", "System configuration"],
    completed: false
  },
  {
    id: 34,
    lessonId: 34,
    title: "Windows Administrative Tools",
    difficulty: "Intermediate",
    estimatedTime: "35-45 min",
    labPath: "/content/a-plus-core2/labs/lab-34.md",
    solutionPath: "/content/a-plus-core2/labs/lab-34-solution.md",
    objectives: [
      "Use Computer Management",
      "Navigate Event Viewer",
      "Configure services",
      "Manage user accounts"
    ],
    prerequisites: [33],
    skillsGained: ["Administrative tools", "Event management", "Service configuration"],
    completed: false
  },
  {
    id: 35,
    lessonId: 35,
    title: "Windows Command Line Tools",
    difficulty: "Intermediate",
    estimatedTime: "40-50 min",
    labPath: "/content/a-plus-core2/labs/lab-35.md",
    solutionPath: "/content/a-plus-core2/labs/lab-35-solution.md",
    objectives: [
      "Use CMD commands",
      "Execute PowerShell commands",
      "Navigate file system via CLI",
      "Automate tasks with scripts"
    ],
    prerequisites: [34],
    skillsGained: ["Command line", "PowerShell", "CLI navigation"],
    completed: false
  },
  {
    id: 36,
    lessonId: 36,
    title: "Windows Networking",
    difficulty: "Intermediate",
    estimatedTime: "35-45 min",
    labPath: "/content/a-plus-core2/labs/lab-36.md",
    solutionPath: "/content/a-plus-core2/labs/lab-36-solution.md",
    objectives: [
      "Configure network adapters",
      "Set up network sharing",
      "Configure firewall settings",
      "Troubleshoot connectivity"
    ],
    prerequisites: [35],
    skillsGained: ["Windows networking", "Network sharing", "Firewall configuration"],
    completed: false
  },
  {
    id: 37,
    lessonId: 37,
    title: "Windows Application Management",
    difficulty: "Beginner",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-37.md",
    solutionPath: "/content/a-plus-core2/labs/lab-37-solution.md",
    objectives: [
      "Install applications",
      "Manage installed programs",
      "Configure app settings",
      "Troubleshoot app issues"
    ],
    prerequisites: [36],
    skillsGained: ["Application management", "Software installation", "App troubleshooting"],
    completed: false
  },
  {
    id: 38,
    lessonId: 38,
    title: "macOS and Linux Basics",
    difficulty: "Intermediate",
    estimatedTime: "35-45 min",
    labPath: "/content/a-plus-core2/labs/lab-38.md",
    solutionPath: "/content/a-plus-core2/labs/lab-38-solution.md",
    objectives: [
      "Navigate macOS interface",
      "Use Linux command line",
      "Compare OS features",
      "Manage files in both systems"
    ],
    prerequisites: [37],
    skillsGained: ["macOS basics", "Linux CLI", "Cross-platform skills"],
    completed: false
  },
  {
    id: 39,
    lessonId: 39,
    title: "Windows Installation Methods",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-39.md",
    solutionPath: "/content/a-plus-core2/labs/lab-39-solution.md",
    objectives: [
      "Prepare installation media",
      "Perform clean installations",
      "Configure installation options",
      "Troubleshoot installation issues"
    ],
    prerequisites: [38],
    skillsGained: ["OS installation", "Installation media", "Deployment methods"],
    completed: false
  },
  {
    id: 40,
    lessonId: 40,
    title: "Windows Upgrade and Migration",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-40.md",
    solutionPath: "/content/a-plus-core2/labs/lab-40-solution.md",
    objectives: [
      "Plan upgrade paths",
      "Perform in-place upgrades",
      "Migrate user data",
      "Troubleshoot upgrade issues"
    ],
    prerequisites: [39],
    skillsGained: ["Windows upgrades", "Data migration", "Upgrade planning"],
    completed: false
  },
  {
    id: 41,
    lessonId: 41,
    title: "Physical Security Controls",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-41.md",
    solutionPath: "/content/a-plus-core2/labs/lab-41-solution.md",
    objectives: [
      "Identify physical security threats",
      "Implement access controls",
      "Secure physical environments",
      "Apply security best practices"
    ],
    prerequisites: [40],
    skillsGained: ["Physical security", "Access control", "Environmental security"],
    completed: false
  },
  {
    id: 42,
    lessonId: 42,
    title: "Logical Security Concepts",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-42.md",
    solutionPath: "/content/a-plus-core2/labs/lab-42-solution.md",
    objectives: [
      "Implement password policies",
      "Configure user authentication",
      "Apply access controls",
      "Secure user accounts"
    ],
    prerequisites: [41],
    skillsGained: ["Logical security", "Authentication", "Access management"],
    completed: false
  },
  {
    id: 43,
    lessonId: 43,
    title: "Wireless Security",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-43.md",
    solutionPath: "/content/a-plus-core2/labs/lab-43-solution.md",
    objectives: [
      "Configure wireless security",
      "Compare security protocols",
      "Implement WPA3",
      "Secure wireless networks"
    ],
    prerequisites: [42],
    skillsGained: ["Wireless security", "WPA configuration", "Network hardening"],
    completed: false
  },
  {
    id: 44,
    lessonId: 44,
    title: "Malware Types and Prevention",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-44.md",
    solutionPath: "/content/a-plus-core2/labs/lab-44-solution.md",
    objectives: [
      "Identify malware types",
      "Use anti-malware tools",
      "Remove malware infections",
      "Prevent future infections"
    ],
    prerequisites: [43],
    skillsGained: ["Malware identification", "Malware removal", "Prevention strategies"],
    completed: false
  },
  {
    id: 45,
    lessonId: 45,
    title: "Social Engineering Attacks",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-45.md",
    solutionPath: "/content/a-plus-core2/labs/lab-45-solution.md",
    objectives: [
      "Identify social engineering tactics",
      "Recognize phishing attempts",
      "Implement awareness training",
      "Prevent social attacks"
    ],
    prerequisites: [44],
    skillsGained: ["Social engineering awareness", "Phishing detection", "Security awareness"],
    completed: false
  },
  {
    id: 46,
    lessonId: 46,
    title: "Windows Security Features",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-46.md",
    solutionPath: "/content/a-plus-core2/labs/lab-46-solution.md",
    objectives: [
      "Configure Windows Defender",
      "Set up Windows Firewall",
      "Implement BitLocker",
      "Use security policies"
    ],
    prerequisites: [45],
    skillsGained: ["Windows Defender", "BitLocker", "Security policies"],
    completed: false
  },
  {
    id: 47,
    lessonId: 47,
    title: "Mobile Device Security",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-47.md",
    solutionPath: "/content/a-plus-core2/labs/lab-47-solution.md",
    objectives: [
      "Secure mobile devices",
      "Configure MDM settings",
      "Implement BYOD policies",
      "Protect mobile data"
    ],
    prerequisites: [46],
    skillsGained: ["Mobile security", "MDM configuration", "BYOD management"],
    completed: false
  },
  {
    id: 48,
    lessonId: 48,
    title: "Data Destruction and Disposal",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-48.md",
    solutionPath: "/content/a-plus-core2/labs/lab-48-solution.md",
    objectives: [
      "Understand data destruction methods",
      "Perform secure wiping",
      "Dispose of hardware properly",
      "Comply with regulations"
    ],
    prerequisites: [47],
    skillsGained: ["Data destruction", "Secure disposal", "Compliance"],
    completed: false
  },
  {
    id: 49,
    lessonId: 49,
    title: "Troubleshooting Windows OS Problems",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-49.md",
    solutionPath: "/content/a-plus-core2/labs/lab-49-solution.md",
    objectives: [
      "Diagnose boot issues",
      "Troubleshoot BSOD errors",
      "Fix performance problems",
      "Resolve system crashes"
    ],
    prerequisites: [48],
    skillsGained: ["OS troubleshooting", "BSOD analysis", "Performance tuning"],
    completed: false
  },
  {
    id: 50,
    lessonId: 50,
    title: "PC Troubleshooting Tools",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-50.md",
    solutionPath: "/content/a-plus-core2/labs/lab-50-solution.md",
    objectives: [
      "Use diagnostic utilities",
      "Apply troubleshooting methodology",
      "Interpret error messages",
      "Document solutions"
    ],
    prerequisites: [49],
    skillsGained: ["Diagnostic tools", "Troubleshooting methodology", "Problem documentation"],
    completed: false
  },
  {
    id: 51,
    lessonId: 51,
    title: "Troubleshooting Common PC Issues",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-51.md",
    solutionPath: "/content/a-plus-core2/labs/lab-51-solution.md",
    objectives: [
      "Troubleshoot hardware issues",
      "Resolve software conflicts",
      "Fix network connectivity",
      "Address peripheral problems"
    ],
    prerequisites: [50],
    skillsGained: ["Hardware troubleshooting", "Software debugging", "Issue resolution"],
    completed: false
  },
  {
    id: 52,
    lessonId: 52,
    title: "Troubleshooting Mobile OS Issues",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-52.md",
    solutionPath: "/content/a-plus-core2/labs/lab-52-solution.md",
    objectives: [
      "Troubleshoot iOS issues",
      "Fix Android problems",
      "Resolve app crashes",
      "Address sync issues"
    ],
    prerequisites: [51],
    skillsGained: ["Mobile troubleshooting", "iOS support", "Android support"],
    completed: false
  },
  {
    id: 53,
    lessonId: 53,
    title: "Safety Procedures",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-53.md",
    solutionPath: "/content/a-plus-core2/labs/lab-53-solution.md",
    objectives: [
      "Apply ESD precautions",
      "Handle hazardous materials",
      "Follow safety protocols",
      "Maintain safe workspaces"
    ],
    prerequisites: [52],
    skillsGained: ["ESD safety", "Workplace safety", "Material handling"],
    completed: false
  },
  {
    id: 54,
    lessonId: 54,
    title: "Environmental Controls",
    difficulty: "Beginner",
    estimatedTime: "20-30 min",
    labPath: "/content/a-plus-core2/labs/lab-54.md",
    solutionPath: "/content/a-plus-core2/labs/lab-54-solution.md",
    objectives: [
      "Monitor environmental conditions",
      "Implement cooling solutions",
      "Manage power systems",
      "Maintain optimal conditions"
    ],
    prerequisites: [53],
    skillsGained: ["Environmental monitoring", "Cooling management", "Power management"],
    completed: false
  },
  {
    id: 55,
    lessonId: 55,
    title: "Professionalism and Communication",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-55.md",
    solutionPath: "/content/a-plus-core2/labs/lab-55-solution.md",
    objectives: [
      "Practice professional communication",
      "Handle difficult customers",
      "Document interactions",
      "Maintain professionalism"
    ],
    prerequisites: [54],
    skillsGained: ["Communication skills", "Customer service", "Professional conduct"],
    completed: false
  },
  {
    id: 56,
    lessonId: 56,
    title: "Incident Response and Prohibited Content",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-56.md",
    solutionPath: "/content/a-plus-core2/labs/lab-56-solution.md",
    objectives: [
      "Respond to security incidents",
      "Handle prohibited content",
      "Follow proper procedures",
      "Document incidents"
    ],
    prerequisites: [55],
    skillsGained: ["Incident response", "Content handling", "Procedure compliance"],
    completed: false
  },
  {
    id: 57,
    lessonId: 57,
    title: "Software Licensing and EULA",
    difficulty: "Beginner",
    estimatedTime: "20-30 min",
    labPath: "/content/a-plus-core2/labs/lab-57.md",
    solutionPath: "/content/a-plus-core2/labs/lab-57-solution.md",
    objectives: [
      "Understand license types",
      "Comply with EULAs",
      "Manage software licenses",
      "Avoid licensing violations"
    ],
    prerequisites: [56],
    skillsGained: ["Software licensing", "EULA compliance", "License management"],
    completed: false
  },
  {
    id: 58,
    lessonId: 58,
    title: "Change Management and Documentation",
    difficulty: "Beginner",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-58.md",
    solutionPath: "/content/a-plus-core2/labs/lab-58-solution.md",
    objectives: [
      "Follow change management processes",
      "Document changes properly",
      "Maintain configuration records",
      "Track system modifications"
    ],
    prerequisites: [57],
    skillsGained: ["Change management", "Documentation", "Configuration tracking"],
    completed: false
  },
  {
    id: 59,
    lessonId: 59,
    title: "Backup and Recovery Procedures",
    difficulty: "Intermediate",
    estimatedTime: "25-35 min",
    labPath: "/content/a-plus-core2/labs/lab-59.md",
    solutionPath: "/content/a-plus-core2/labs/lab-59-solution.md",
    objectives: [
      "Implement backup strategies",
      "Perform data recovery",
      "Test recovery procedures",
      "Plan disaster recovery"
    ],
    prerequisites: [58],
    skillsGained: ["Backup procedures", "Data recovery", "Disaster planning"],
    completed: false
  },
  {
    id: 60,
    lessonId: 60,
    title: "Scripting and Automation Basics",
    difficulty: "Intermediate",
    estimatedTime: "30-40 min",
    labPath: "/content/a-plus-core2/labs/lab-60.md",
    solutionPath: "/content/a-plus-core2/labs/lab-60-solution.md",
    objectives: [
      "Understand scripting basics",
      "Write simple scripts",
      "Automate routine tasks",
      "Debug script errors"
    ],
    prerequisites: [59],
    skillsGained: ["Scripting basics", "Automation", "Script debugging"],
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
  return aPlusCore2Labs.find(lab => lab.id === parseInt(id));
}

/**
 * Get lab by lesson ID
 */
export function getLabByLessonId(lessonId) {
  return aPlusCore2Labs.find(lab => lab.lessonId === parseInt(lessonId));
}

/**
 * Get labs by difficulty
 */
export function getLabsByDifficulty(difficulty) {
  return aPlusCore2Labs.filter(lab => lab.difficulty === difficulty);
}

/**
 * Get completion statistics
 */
export function getLabCompletionStats() {
  const completed = aPlusCore2Labs.filter(l => l.completed).length;
  const total = aPlusCore2Labs.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
}

export default aPlusCore2Labs;
