// ============================================
// A+ CORE 2 (220-1102) LESSONS DATA
// ============================================
// Complete 30-lesson curriculum for A+ Core 2 exam

export const aPlusCore2Lessons = [
  // ==========================================
  // DOMAIN 1: OPERATING SYSTEMS (Lessons 31-40)
  // Domain 1.0 - 31% of exam
  // ==========================================
  {
    id: 31,
    title: "Windows 10 and Windows 11 Features",
    domain: "Operating Systems",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.1",
    path: "/content/a-plus-core2/lessons/lesson-31.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 31,
    prerequisites: [],
    nextLesson: 32
  },
  {
    id: 32,
    title: "Windows File Systems and Management",
    domain: "Operating Systems",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.2",
    path: "/content/a-plus-core2/lessons/lesson-32.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 32,
    prerequisites: [31],
    nextLesson: 33
  },
  {
    id: 33,
    title: "Windows Control Panel and Settings",
    domain: "Operating Systems",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "1.3",
    path: "/content/a-plus-core2/lessons/lesson-33.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 33,
    prerequisites: [32],
    nextLesson: 34
  },
  {
    id: 34,
    title: "Windows Administrative Tools",
    domain: "Operating Systems",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "1.3",
    path: "/content/a-plus-core2/lessons/lesson-34.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 34,
    prerequisites: [33],
    nextLesson: 35
  },
  {
    id: 35,
    title: "Windows Command Line Tools",
    domain: "Operating Systems",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "1.4",
    path: "/content/a-plus-core2/lessons/lesson-35.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 35,
    prerequisites: [34],
    nextLesson: 36
  },
  {
    id: 36,
    title: "Windows Networking",
    domain: "Operating Systems",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.6",
    path: "/content/a-plus-core2/lessons/lesson-36.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 36,
    prerequisites: [35],
    nextLesson: 37
  },
  {
    id: 37,
    title: "Windows Application Management",
    domain: "Operating Systems",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "1.7",
    path: "/content/a-plus-core2/lessons/lesson-37.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 37,
    prerequisites: [36],
    nextLesson: 38
  },
  {
    id: 38,
    title: "macOS and Linux Basics",
    domain: "Operating Systems",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.8",
    path: "/content/a-plus-core2/lessons/lesson-38.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 38,
    prerequisites: [37],
    nextLesson: 39
  },
  {
    id: 39,
    title: "Windows Installation Methods",
    domain: "Operating Systems",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.9",
    path: "/content/a-plus-core2/lessons/lesson-39.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 39,
    prerequisites: [38],
    nextLesson: 40
  },
  {
    id: 40,
    title: "Windows Upgrade and Migration",
    domain: "Operating Systems",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.10",
    path: "/content/a-plus-core2/lessons/lesson-40.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 40,
    prerequisites: [39],
    nextLesson: 41
  },

  // ==========================================
  // DOMAIN 2: SECURITY (Lessons 41-48)
  // Domain 2.0 - 25% of exam
  // ==========================================
  {
    id: 41,
    title: "Physical Security Controls",
    domain: "Security",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "2.1",
    path: "/content/a-plus-core2/lessons/lesson-41.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 41,
    prerequisites: [40],
    nextLesson: 42
  },
  {
    id: 42,
    title: "Logical Security Concepts",
    domain: "Security",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.2",
    path: "/content/a-plus-core2/lessons/lesson-42.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 42,
    prerequisites: [41],
    nextLesson: 43
  },
  {
    id: 43,
    title: "Wireless Security",
    domain: "Security",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.3",
    path: "/content/a-plus-core2/lessons/lesson-43.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 43,
    prerequisites: [42],
    nextLesson: 44
  },
  {
    id: 44,
    title: "Malware Types and Prevention",
    domain: "Security",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "2.4",
    path: "/content/a-plus-core2/lessons/lesson-44.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 44,
    prerequisites: [43],
    nextLesson: 45
  },
  {
    id: 45,
    title: "Social Engineering Attacks",
    domain: "Security",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "2.5",
    path: "/content/a-plus-core2/lessons/lesson-45.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 45,
    prerequisites: [44],
    nextLesson: 46
  },
  {
    id: 46,
    title: "Windows Security Features",
    domain: "Security",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "2.6",
    path: "/content/a-plus-core2/lessons/lesson-46.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 46,
    prerequisites: [45],
    nextLesson: 47
  },
  {
    id: 47,
    title: "Mobile Device Security",
    domain: "Security",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.7",
    path: "/content/a-plus-core2/lessons/lesson-47.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 47,
    prerequisites: [46],
    nextLesson: 48
  },
  {
    id: 48,
    title: "Data Destruction and Disposal",
    domain: "Security",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "2.8",
    path: "/content/a-plus-core2/lessons/lesson-48.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 48,
    prerequisites: [47],
    nextLesson: 49
  },

  // ==========================================
  // DOMAIN 3: SOFTWARE TROUBLESHOOTING (Lessons 49-52)
  // Domain 3.0 - 22% of exam
  // ==========================================
  {
    id: 49,
    title: "Troubleshooting Windows OS Problems",
    domain: "Software Troubleshooting",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "3.1",
    path: "/content/a-plus-core2/lessons/lesson-49.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 49,
    prerequisites: [48],
    nextLesson: 50
  },
  {
    id: 50,
    title: "PC Troubleshooting Tools",
    domain: "Software Troubleshooting",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.2",
    path: "/content/a-plus-core2/lessons/lesson-50.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 50,
    prerequisites: [49],
    nextLesson: 51
  },
  {
    id: 51,
    title: "Troubleshooting Common PC Issues",
    domain: "Software Troubleshooting",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "3.1",
    path: "/content/a-plus-core2/lessons/lesson-51.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 51,
    prerequisites: [50],
    nextLesson: 52
  },
  {
    id: 52,
    title: "Troubleshooting Mobile OS Issues",
    domain: "Software Troubleshooting",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.4",
    path: "/content/a-plus-core2/lessons/lesson-52.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 52,
    prerequisites: [51],
    nextLesson: 53
  },

  // ==========================================
  // DOMAIN 4: OPERATIONAL PROCEDURES (Lessons 53-60)
  // Domain 4.0 - 22% of exam
  // ==========================================
  {
    id: 53,
    title: "Safety Procedures",
    domain: "Operational Procedures",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.1",
    path: "/content/a-plus-core2/lessons/lesson-53.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 53,
    prerequisites: [52],
    nextLesson: 54
  },
  {
    id: 54,
    title: "Environmental Controls",
    domain: "Operational Procedures",
    time: "15-20 min",
    completed: false,
    locked: false,
    examObjective: "4.1",
    path: "/content/a-plus-core2/lessons/lesson-54.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 54,
    prerequisites: [53],
    nextLesson: 55
  },
  {
    id: 55,
    title: "Professionalism and Communication",
    domain: "Operational Procedures",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.7",
    path: "/content/a-plus-core2/lessons/lesson-55.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 55,
    prerequisites: [54],
    nextLesson: 56
  },
  {
    id: 56,
    title: "Prohibited Content and Incident Response",
    domain: "Operational Procedures",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.6",
    path: "/content/a-plus-core2/lessons/lesson-56.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 56,
    prerequisites: [55],
    nextLesson: 57
  },
  {
    id: 57,
    title: "Licensing and EULA",
    domain: "Operational Procedures",
    time: "15-20 min",
    completed: false,
    locked: false,
    examObjective: "4.6",
    path: "/content/a-plus-core2/lessons/lesson-57.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 57,
    prerequisites: [56],
    nextLesson: 58
  },
  {
    id: 58,
    title: "Change Management and Documentation",
    domain: "Operational Procedures",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.2",
    path: "/content/a-plus-core2/lessons/lesson-58.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 58,
    prerequisites: [57],
    nextLesson: 59
  },
  {
    id: 59,
    title: "Backup and Recovery Procedures",
    domain: "Operational Procedures",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.3",
    path: "/content/a-plus-core2/lessons/lesson-59.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 59,
    prerequisites: [58],
    nextLesson: 60
  },
  {
    id: 60,
    title: "Scripting and Automation Basics",
    domain: "Operational Procedures",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.8",
    path: "/content/a-plus-core2/lessons/lesson-60.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 60,
    prerequisites: [59],
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
  return aPlusCore2Lessons.find(lesson => lesson.id === parseInt(id));
}

/**
 * Get lessons by domain
 */
export function getLessonsByDomain(domain) {
  return aPlusCore2Lessons.filter(lesson => lesson.domain === domain);
}

/**
 * Get all unique domains
 */
export function getDomains() {
  return [...new Set(aPlusCore2Lessons.map(lesson => lesson.domain))];
}

/**
 * Get lesson completion statistics
 */
export function getLessonCompletionStats(completedLessons = []) {
  const total = aPlusCore2Lessons.length;
  const completed = completedLessons.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    remaining: total - completed,
    percentage
  };
}

export default aPlusCore2Lessons;
