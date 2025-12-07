// ============================================
// A+ CORE 1 (220-1101) LESSONS DATA
// ============================================
// Complete 30-lesson curriculum for A+ Core 1 exam

export const aPlusCore1Lessons = [
  // ==========================================
  // DOMAIN 1: MOBILE DEVICES (Lessons 1-6)
  // Domain 1.0 - 15% of exam
  // ==========================================
  {
    id: 1,
    title: "Laptop Hardware Overview",
    domain: "Mobile Devices",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.1",
    path: "/content/a-plus-core1/lessons/lesson-01.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 1,
    prerequisites: [],
    nextLesson: 2
  },
  {
    id: 2,
    title: "Laptop Displays and Video",
    domain: "Mobile Devices",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.1",
    path: "/content/a-plus-core1/lessons/lesson-02.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 2,
    prerequisites: [1],
    nextLesson: 3
  },
  {
    id: 3,
    title: "Laptop Disassembly and Component Replacement",
    domain: "Mobile Devices",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "1.1",
    path: "/content/a-plus-core1/lessons/lesson-03.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 3,
    prerequisites: [2],
    nextLesson: 4
  },
  {
    id: 4,
    title: "Mobile Device Types and Features",
    domain: "Mobile Devices",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "1.2",
    path: "/content/a-plus-core1/lessons/lesson-04.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 4,
    prerequisites: [3],
    nextLesson: 5
  },
  {
    id: 5,
    title: "Mobile Device Accessories and Connectivity",
    domain: "Mobile Devices",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "1.3",
    path: "/content/a-plus-core1/lessons/lesson-05.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 5,
    prerequisites: [4],
    nextLesson: 6
  },
  {
    id: 6,
    title: "Mobile Device Network Connectivity",
    domain: "Mobile Devices",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "1.4",
    path: "/content/a-plus-core1/lessons/lesson-06.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 6,
    prerequisites: [5],
    nextLesson: 7
  },

  // ==========================================
  // DOMAIN 2: NETWORKING (Lessons 7-15)
  // Domain 2.0 - 20% of exam
  // ==========================================
  {
    id: 7,
    title: "Network Cable Types",
    domain: "Networking",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.1",
    path: "/content/a-plus-core1/lessons/lesson-07.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 7,
    prerequisites: [6],
    nextLesson: 8
  },
  {
    id: 8,
    title: "Network Devices and Infrastructure",
    domain: "Networking",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.2",
    path: "/content/a-plus-core1/lessons/lesson-08.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 8,
    prerequisites: [7],
    nextLesson: 9
  },
  {
    id: 9,
    title: "Wireless Networking Standards",
    domain: "Networking",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.3",
    path: "/content/a-plus-core1/lessons/lesson-09.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 9,
    prerequisites: [8],
    nextLesson: 10
  },
  {
    id: 10,
    title: "Network Services and Configuration",
    domain: "Networking",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "2.4",
    path: "/content/a-plus-core1/lessons/lesson-10.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 10,
    prerequisites: [9],
    nextLesson: 11
  },
  {
    id: 11,
    title: "Internet Connection Types",
    domain: "Networking",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "2.5",
    path: "/content/a-plus-core1/lessons/lesson-11.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 11,
    prerequisites: [10],
    nextLesson: 12
  },
  {
    id: 12,
    title: "TCP/IP Addressing and Subnetting",
    domain: "Networking",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "2.6",
    path: "/content/a-plus-core1/lessons/lesson-12.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 12,
    prerequisites: [11],
    nextLesson: 13
  },
  {
    id: 13,
    title: "Common Network Protocols and Ports",
    domain: "Networking",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.1",
    path: "/content/a-plus-core1/lessons/lesson-13.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 13,
    prerequisites: [12],
    nextLesson: 14
  },
  {
    id: 14,
    title: "SOHO Router Configuration",
    domain: "Networking",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.5",
    path: "/content/a-plus-core1/lessons/lesson-14.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 14,
    prerequisites: [13],
    nextLesson: 15
  },
  {
    id: 15,
    title: "Network Troubleshooting Tools",
    domain: "Networking",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "2.8",
    path: "/content/a-plus-core1/lessons/lesson-15.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 15,
    prerequisites: [14],
    nextLesson: 16
  },

  // ==========================================
  // DOMAIN 3: HARDWARE (Lessons 16-28)
  // Domain 3.0 - 25% of exam
  // ==========================================
  {
    id: 16,
    title: "PC Form Factors and Cases",
    domain: "Hardware",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "3.1",
    path: "/content/a-plus-core1/lessons/lesson-16.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 16,
    prerequisites: [15],
    nextLesson: 17
  },
  {
    id: 17,
    title: "Power Supplies and Cooling",
    domain: "Hardware",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.4",
    path: "/content/a-plus-core1/lessons/lesson-17.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 17,
    prerequisites: [16],
    nextLesson: 18
  },
  {
    id: 18,
    title: "Motherboards - Components and Features",
    domain: "Hardware",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "3.4",
    path: "/content/a-plus-core1/lessons/lesson-18.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 18,
    prerequisites: [17],
    nextLesson: 19
  },
  {
    id: 19,
    title: "CPUs and Processors",
    domain: "Hardware",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.4",
    path: "/content/a-plus-core1/lessons/lesson-19.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 19,
    prerequisites: [18],
    nextLesson: 20
  },
  {
    id: 20,
    title: "RAM (Memory)",
    domain: "Hardware",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.2",
    path: "/content/a-plus-core1/lessons/lesson-20.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 20,
    prerequisites: [19],
    nextLesson: 21
  },
  {
    id: 21,
    title: "Storage Devices - HDDs and SSDs",
    domain: "Hardware",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "3.3",
    path: "/content/a-plus-core1/lessons/lesson-21.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 21,
    prerequisites: [20],
    nextLesson: 22
  },
  {
    id: 22,
    title: "Optical Drives and Removable Storage",
    domain: "Hardware",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "3.3",
    path: "/content/a-plus-core1/lessons/lesson-22.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 22,
    prerequisites: [21],
    nextLesson: 23
  },
  {
    id: 23,
    title: "Expansion Cards",
    domain: "Hardware",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.4",
    path: "/content/a-plus-core1/lessons/lesson-23.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 23,
    prerequisites: [22],
    nextLesson: 24
  },
  {
    id: 24,
    title: "Display Technologies",
    domain: "Hardware",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.7",
    path: "/content/a-plus-core1/lessons/lesson-24.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 24,
    prerequisites: [23],
    nextLesson: 25
  },
  {
    id: 25,
    title: "Peripheral Devices",
    domain: "Hardware",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "3.6",
    path: "/content/a-plus-core1/lessons/lesson-25.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 25,
    prerequisites: [24],
    nextLesson: 26
  },
  {
    id: 26,
    title: "Printer Technologies",
    domain: "Hardware",
    time: "30-35 min",
    completed: false,
    locked: false,
    examObjective: "3.6",
    path: "/content/a-plus-core1/lessons/lesson-26.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 26,
    prerequisites: [25],
    nextLesson: 27
  },
  {
    id: 27,
    title: "Printer Configuration and Troubleshooting",
    domain: "Hardware",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.6",
    path: "/content/a-plus-core1/lessons/lesson-27.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 27,
    prerequisites: [26],
    nextLesson: 28
  },
  {
    id: 28,
    title: "Cable Types and Connectors",
    domain: "Hardware",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "3.1",
    path: "/content/a-plus-core1/lessons/lesson-28.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 28,
    prerequisites: [27],
    nextLesson: 29
  },

  // ==========================================
  // DOMAIN 4: VIRTUALIZATION & CLOUD (Lessons 29-30)
  // Domain 4.0 - 11% of exam
  // ==========================================
  {
    id: 29,
    title: "Virtualization Concepts",
    domain: "Virtualization and Cloud",
    time: "25-30 min",
    completed: false,
    locked: false,
    examObjective: "4.1",
    path: "/content/a-plus-core1/lessons/lesson-29.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 29,
    prerequisites: [28],
    nextLesson: 30
  },
  {
    id: 30,
    title: "Cloud Computing Models",
    domain: "Virtualization and Cloud",
    time: "20-25 min",
    completed: false,
    locked: false,
    examObjective: "4.1",
    path: "/content/a-plus-core1/lessons/lesson-30.md",
    hasFlashcards: true,
    hasQuiz: true,
    hasLab: true,
    labId: 30,
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
  return aPlusCore1Lessons.find(lesson => lesson.id === parseInt(id));
}

/**
 * Get lessons by domain
 */
export function getLessonsByDomain(domain) {
  return aPlusCore1Lessons.filter(lesson => lesson.domain === domain);
}

/**
 * Get all unique domains
 */
export function getDomains() {
  return [...new Set(aPlusCore1Lessons.map(lesson => lesson.domain))];
}

/**
 * Get lesson completion statistics
 */
export function getLessonCompletionStats(completedLessons = []) {
  const total = aPlusCore1Lessons.length;
  const completed = completedLessons.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    total,
    completed,
    remaining: total - completed,
    percentage
  };
}

export default aPlusCore1Lessons;
