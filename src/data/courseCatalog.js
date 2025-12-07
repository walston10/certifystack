/**
 * Course Catalog - Master list of all courses available on CertifyStack
 *
 * Each course has:
 * - Metadata (title, exam code, pricing)
 * - Content info (lessons, labs, duration)
 * - Access control (prerequisites, bundles)
 * - Branding (color, thumbnail)
 */

export const courseCatalog = {
  'network-plus': {
    id: 'network-plus',
    title: 'CompTIA Network+',
    fullTitle: 'CompTIA Network+ (N10-009)',
    exam: 'N10-009',
    price: 79,
    stripeProductId: 'prod_network_plus',
    stripePriceId: 'price_network_plus',
    status: 'active', // 'active', 'coming-soon', 'draft'
    difficulty: 'Intermediate',
    duration: '30 days',
    estimatedHours: 40,
    totalLessons: 30,
    totalLabs: 10,
    totalQuizzes: 30,
    totalFlashcards: 900,
    description: 'Master networking fundamentals and prepare for the CompTIA Network+ certification',
    longDescription: 'The CompTIA Network+ certification validates the essential skills needed to confidently design, configure, manage and troubleshoot wired and wireless networks.',
    thumbnail: '/images/network-plus.jpg',
    color: '#00d9ff', // Cyan - brand color for this course
    gradient: 'linear-gradient(135deg, #00d9ff, #00b8d4)',
    prerequisites: [],
    nextCert: 'security-plus',
    domains: [
      'Networking Concepts',
      'Network Implementation',
      'Network Operations',
      'Network Security',
      'Network Troubleshooting'
    ]
  },

  'a-plus-core1': {
    id: 'a-plus-core1',
    title: 'CompTIA A+ Core 1',
    fullTitle: 'CompTIA A+ Core 1 (220-1101)',
    exam: '220-1101',
    price: 79,
    bundleWith: 'a-plus-core2', // Can be bundled with Core 2
    bundlePrice: 129, // Bundle discount price ($79 + $79 = $158, save $29)
    bundleStripePriceId: 'price_aplus_bundle',
    status: 'active',
    difficulty: 'Beginner',
    duration: '30 days',
    estimatedHours: 45,
    totalLessons: 30,
    totalLabs: 30,
    totalQuizzes: 30,
    totalFlashcards: 1200,
    description: 'Hardware, mobile devices, networking, and troubleshooting fundamentals',
    longDescription: 'CompTIA A+ Core 1 covers mobile devices, networking technology, hardware, virtualization and cloud computing. This is the first part of the A+ certification.',
    thumbnail: '/images/a-plus-core1.jpg',
    color: '#667eea', // Purple - brand color for this course
    gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
    prerequisites: [],
    nextCert: 'a-plus-core2',
    domains: [
      'Mobile Devices',
      'Networking',
      'Hardware',
      'Virtualization and Cloud Computing',
      'Hardware and Network Troubleshooting'
    ]
  },

  'a-plus-core2': {
    id: 'a-plus-core2',
    title: 'CompTIA A+ Core 2',
    fullTitle: 'CompTIA A+ Core 2 (220-1102)',
    exam: '220-1102',
    price: 79,
    bundleWith: 'a-plus-core1', // Can be bundled with Core 1
    bundlePrice: 129,
    bundleStripePriceId: 'price_aplus_bundle',
    status: 'active',
    difficulty: 'Beginner',
    duration: '30 days',
    estimatedHours: 45,
    totalLessons: 30,
    totalLabs: 30,
    totalQuizzes: 30,
    totalFlashcards: 1200,
    description: 'Operating systems, security, software troubleshooting, and operational procedures',
    longDescription: 'CompTIA A+ Core 2 covers installing and configuring operating systems, expanded security, software troubleshooting, and operational procedures. This is the second part of the A+ certification.',
    thumbnail: '/images/a-plus-core2.jpg',
    color: '#9f7aea', // Light purple - brand color for this course
    gradient: 'linear-gradient(135deg, #9f7aea, #805ad5)',
    prerequisites: ['a-plus-core1'], // Recommended to take Core 1 first
    nextCert: 'network-plus',
    domains: [
      'Operating Systems',
      'Security',
      'Software Troubleshooting',
      'Operational Procedures'
    ]
  },

  'security-plus': {
    id: 'security-plus',
    title: 'CompTIA Security+',
    fullTitle: 'CompTIA Security+ (SY0-701)',
    exam: 'SY0-701',
    price: 79,
    stripeProductId: 'prod_security_plus',
    stripePriceId: 'price_security_plus',
    status: 'active',
    difficulty: 'Intermediate',
    duration: '30 days',
    estimatedHours: 45,
    totalLessons: 30,
    totalLabs: 30,
    totalQuizzes: 30,
    totalFlashcards: 900,
    description: 'Cybersecurity fundamentals, threats, cryptography, and security operations',
    longDescription: 'CompTIA Security+ validates the baseline skills necessary to perform core security functions and pursue an IT security career. Covers threats, attacks, vulnerabilities, architecture, operations, and governance.',
    thumbnail: '/images/security-plus.jpg',
    color: '#ef4444', // Red - brand color for security
    gradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    prerequisites: ['network-plus'], // Recommended to take Network+ first
    nextCert: 'cysa-plus',
    domains: [
      'General Security Concepts',
      'Threats, Vulnerabilities, and Mitigations',
      'Security Architecture',
      'Security Operations',
      'Security Program Management and Oversight'
    ]
  }
};

/**
 * Get all courses with optional filtering
 */
export const getActiveCourses = () => {
  return Object.values(courseCatalog).filter(course => course.status === 'active');
};

export const getComingSoonCourses = () => {
  return Object.values(courseCatalog).filter(course => course.status === 'coming-soon');
};

export const getAllCourses = () => {
  return Object.values(courseCatalog);
};

/**
 * Get course by ID
 */
export const getCourse = (courseId) => {
  return courseCatalog[courseId] || null;
};

/**
 * Get bundle information for a course
 */
export const getBundleInfo = (courseId) => {
  const course = courseCatalog[courseId];
  if (!course || !course.bundleWith) return null;

  const bundleCourse = courseCatalog[course.bundleWith];
  if (!bundleCourse) return null;

  return {
    mainCourse: course,
    bundleCourse: bundleCourse,
    bundlePrice: course.bundlePrice,
    savings: (course.price + bundleCourse.price) - course.bundlePrice,
    stripePriceId: course.bundleStripePriceId
  };
};

/**
 * Check if two courses can be bundled
 */
export const canBundle = (courseId1, courseId2) => {
  const course1 = courseCatalog[courseId1];
  const course2 = courseCatalog[courseId2];

  if (!course1 || !course2) return false;

  return course1.bundleWith === courseId2 || course2.bundleWith === courseId1;
};

/**
 * Get recommended next course
 */
export const getNextCourse = (courseId) => {
  const course = courseCatalog[courseId];
  if (!course || !course.nextCert) return null;

  return courseCatalog[course.nextCert] || null;
};

/**
 * Get course path (for backward compatibility)
 */
export const getCoursePath = (courseId) => {
  return `/course/${courseId}`;
};

export const getLessonPath = (courseId, lessonId) => {
  return `/course/${courseId}/lesson/${lessonId}`;
};

export const getLabPath = (courseId, labId) => {
  return `/course/${courseId}/lab/${labId}`;
};

export const getQuizPath = (courseId, lessonId) => {
  return `/course/${courseId}/quiz/${lessonId}`;
};

export const getFlashcardsPath = (courseId, lessonId) => {
  return `/course/${courseId}/flashcards/${lessonId}`;
};

/**
 * Course ordering for display
 */
export const getCourseOrder = () => {
  return [
    'a-plus-core1',
    'a-plus-core2',
    'network-plus',
    'security-plus',
    'ccna'
  ];
};

export default courseCatalog;
