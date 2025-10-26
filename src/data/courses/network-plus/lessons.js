// ============================================
// NETWORK+ N10-009 LESSONS DATA
// ============================================
// Complete 30-lesson curriculum matching curriculum-outline.md

export const networkPlusLessons = [
  // ==========================================
  // MODULE 1: NETWORKING CONCEPTS (Lessons 1-9)
  // Domain 1.0 - 23% of exam
  // ==========================================
  {
    id: 1,
    title: "OSI Model & TCP/IP",
    domain: "Networking Concepts",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.1",
    path: "/content/network-plus/lessons/lesson-01.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 1,
    prerequisites: [],
    nextLesson: 2
  },
  {
    id: 2,
    title: "Network Topologies & Types",
    domain: "Networking Concepts",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "1.2",
    path: "/content/network-plus/lessons/lesson-02.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 2,
    prerequisites: [1],
    nextLesson: 3
  },
  {
    id: 3,
    title: "IP Addressing Fundamentals",
    domain: "Networking Concepts",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "1.4",
    path: "/content/network-plus/lessons/lesson-03.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: false,
    prerequisites: [2],
    nextLesson: 4
  },
  {
    id: 4,
    title: "Subnet Masks and CIDR Notation",
    domain: "Networking Concepts",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "1.4",
    path: "/content/network-plus/lessons/lesson-04.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: false,
    prerequisites: [3],
    nextLesson: 5
  },
  {
    id: 5,
    title: "Subnetting Fundamentals",
    domain: "Networking Concepts",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.4",
    path: "/content/network-plus/lessons/lesson-05.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: false,
    prerequisites: [4],
    nextLesson: 6
  },
  {
    id: 6,
    title: "Advanced Subnetting & VLSM",
    domain: "Networking Concepts",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.4",
    path: "/content/network-plus/lessons/lesson-06.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 6,
    prerequisites: [3, 4, 5],
    nextLesson: 7
  },
  {
    id: 7,
    title: "IPv6 Addressing and Configuration",
    domain: "Networking Concepts",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.4",
    path: "/content/network-plus/lessons/lesson-07.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [6],
    nextLesson: 8
  },
  {
    id: 8,
    title: "Network Protocols and Services",
    domain: "Networking Concepts",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.1, 1.6",
    path: "/content/network-plus/lessons/lesson-08.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [7],
    nextLesson: 9
  },
  {
    id: 9,
    title: "Port Numbers and Common Protocols",
    domain: "Networking Concepts",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "1.1, 1.5",
    path: "/content/network-plus/lessons/lesson-09.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [8],
    nextLesson: 10
  },

  // ==========================================
  // MODULE 2: NETWORK INFRASTRUCTURE (Lessons 10-15)
  // Domain 2.0 - 20% of exam
  // ==========================================
  {
    id: 10,
    title: "Ethernet Standards and Cabling",
    domain: "Network Infrastructure",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.1, 2.2",
    path: "/content/network-plus/lessons/lesson-10.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [9],
    nextLesson: 11
  },
  {
    id: 11,
    title: "Switches, VLANs, and Trunking",
    domain: "Network Infrastructure",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "2.1, 2.3",
    path: "/content/network-plus/lessons/lesson-11.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: true,
    labId: 11,
    prerequisites: [10],
    nextLesson: 12
  },
  {
    id: 12,
    title: "Routing Fundamentals and Protocols",
    domain: "Network Infrastructure",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "2.1, 2.2",
    path: "/content/network-plus/lessons/lesson-12.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [11],
    nextLesson: 13
  },
  {
    id: 13,
    title: "Wireless Networking (Wi-Fi 6/6E, 802.11)",
    domain: "Network Infrastructure",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "2.4",
    path: "/content/network-plus/lessons/lesson-13.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [12],
    nextLesson: 14
  },
  {
    id: 14,
    title: "Network Devices (Routers, Firewalls, Load Balancers)",
    domain: "Network Infrastructure",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.1",
    path: "/content/network-plus/lessons/lesson-14.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [13],
    nextLesson: 15
  },
  {
    id: 15,
    title: "Cloud Concepts and Virtualization",
    domain: "Network Infrastructure",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.2, 1.8",
    path: "/content/network-plus/lessons/lesson-15.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [14],
    nextLesson: 16
  },

  // ==========================================
  // MODULE 3: NETWORK OPERATIONS (Lessons 16-20)
  // Domain 3.0 - 20% of exam
  // ==========================================
  {
    id: 16,
    title: "Network Documentation and Diagrams",
    domain: "Network Operations",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "3.1",
    path: "/content/network-plus/lessons/lesson-16.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [15],
    nextLesson: 17
  },
  {
    id: 17,
    title: "Monitoring Tools and SNMP",
    domain: "Network Operations",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.1, 5.3",
    path: "/content/network-plus/lessons/lesson-17.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [16],
    nextLesson: 18
  },
  {
    id: 18,
    title: "Backup and Disaster Recovery",
    domain: "Network Operations",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "3.2",
    path: "/content/network-plus/lessons/lesson-18.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [17],
    nextLesson: 19
  },
  {
    id: 19,
    title: "High Availability and Redundancy",
    domain: "Network Operations",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.2, 3.3",
    path: "/content/network-plus/lessons/lesson-19.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [18],
    nextLesson: 20
  },
  {
    id: 20,
    title: "Physical and Environmental Security",
    domain: "Network Operations",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.1",
    path: "/content/network-plus/lessons/lesson-20.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [19],
    nextLesson: 21
  },

  // ==========================================
  // MODULE 4: NETWORK SECURITY (Lessons 21-26)
  // Domain 4.0 - 27% of exam
  // ==========================================
  {
    id: 21,
    title: "Network Threats and Vulnerabilities",
    domain: "Network Security",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "4.1, 4.4",
    path: "/content/network-plus/lessons/lesson-21.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [20],
    nextLesson: 22
  },
  {
    id: 22,
    title: "Authentication Methods",
    domain: "Network Security",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "4.1",
    path: "/content/network-plus/lessons/lesson-22.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [21],
    nextLesson: 23
  },
  {
    id: 23,
    title: "VPNs and Remote Access",
    domain: "Network Security",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "4.4",
    path: "/content/network-plus/lessons/lesson-23.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [22],
    nextLesson: 24
  },
  {
    id: 24,
    title: "Firewalls and Access Control Lists",
    domain: "Network Security",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "4.1, 4.3",
    path: "/content/network-plus/lessons/lesson-24.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [23],
    nextLesson: 25
  },
  {
    id: 25,
    title: "Network Segmentation and Zero Trust",
    domain: "Network Security",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "4.1, 4.3",
    path: "/content/network-plus/lessons/lesson-25.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [24],
    nextLesson: 26
  },
  {
    id: 26,
    title: "Wireless Security (WPA3, EAP)",
    domain: "Network Security",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "4.4",
    path: "/content/network-plus/lessons/lesson-26.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [25],
    nextLesson: 27
  },

  // ==========================================
  // MODULE 5: NETWORK TROUBLESHOOTING (Lessons 27-30)
  // Domain 5.0 - 22% of exam
  // ==========================================
  {
    id: 27,
    title: "Troubleshooting Methodology",
    domain: "Network Troubleshooting",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "5.1",
    path: "/content/network-plus/lessons/lesson-27.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [26],
    nextLesson: 28
  },
  {
    id: 28,
    title: "Command-Line Tools",
    domain: "Network Troubleshooting",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "5.3",
    path: "/content/network-plus/lessons/lesson-28.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: true,
    labId: 28,
    prerequisites: [27],
    nextLesson: 29
  },
  {
    id: 29,
    title: "Cable Testing and Physical Layer Issues",
    domain: "Network Troubleshooting",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "5.2, 5.3",
    path: "/content/network-plus/lessons/lesson-29.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [28],
    nextLesson: 30
  },
  {
    id: 30,
    title: "Common Network Issues and Solutions",
    domain: "Network Troubleshooting",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "5.2, 5.4, 5.5",
    path: "/content/network-plus/lessons/lesson-30.md",
    hasFlashcards: false,
    hasQuiz: false,
    hasLab: false,
    prerequisites: [29],
    nextLesson: null
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get lesson by ID
 */
export function getLessonById(id) {
  return networkPlusLessons.find(lesson => lesson.id === parseInt(id));
}

/**
 * Get lessons by domain
 */
export function getLessonsByDomain(domain) {
  return networkPlusLessons.filter(lesson => lesson.domain === domain);
}

/**
 * Get all domain names (unique)
 */
export function getAllDomains() {
  return [...new Set(networkPlusLessons.map(lesson => lesson.domain))];
}

/**
 * Get completion statistics
 */
export function getCompletionStats() {
  const completed = networkPlusLessons.filter(l => l.completed).length;
  const total = networkPlusLessons.length;
  const percentage = Math.round((completed / total) * 100);
  
  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
}

export default networkPlusLessons;