// ============================================
// SECURITY+ SY0-701 LABS DATA
// ============================================
// Hands-on lab exercises for practical skills

export const securityPlusLabs = [
  {
    id: 1,
    lessonId: 1,
    title: "Security Fundamentals and the CIA Triad",
    difficulty: "Beginner",
    estimatedTime: "25-30 min",
    labPath: "/content/security-plus/labs/lab-01.md",
    solutionPath: "/content/security-plus/labs/lab-01-solution.md",
    objectives: [
      "Apply the CIA Triad to real systems",
      "Classify security controls by category and type",
      "Explore the AAA framework in practice",
      "Identify security controls in Windows"
    ],
    prerequisites: [],
    skillsGained: ["CIA Triad application", "Security control classification", "AAA framework", "Windows security"],
    completed: false
  },
  {
    id: 2,
    lessonId: 2,
    title: "Threat Actors and Motivations",
    difficulty: "Beginner",
    estimatedTime: "25-30 min",
    labPath: "/content/security-plus/labs/lab-02.md",
    solutionPath: "/content/security-plus/labs/lab-02-solution.md",
    objectives: [
      "Identify different threat actor types",
      "Understand attacker motivations",
      "Analyze attack attribution",
      "Assess threat intelligence"
    ],
    prerequisites: [1],
    skillsGained: ["Threat actor profiling", "Attack attribution", "Threat intelligence analysis"],
    completed: false
  },
  {
    id: 3,
    lessonId: 3,
    title: "Security Concepts and Frameworks",
    difficulty: "Beginner",
    estimatedTime: "25-30 min",
    labPath: "/content/security-plus/labs/lab-03.md",
    solutionPath: "/content/security-plus/labs/lab-03-solution.md",
    objectives: [
      "Understand Zero Trust principles",
      "Differentiate control plane and data plane",
      "Apply security frameworks",
      "Implement defense in depth"
    ],
    prerequisites: [2],
    skillsGained: ["Zero Trust architecture", "Security frameworks", "Defense in depth"],
    completed: false
  },
  {
    id: 4,
    lessonId: 4,
    title: "Cryptography Fundamentals",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-04.md",
    solutionPath: "/content/security-plus/labs/lab-04-solution.md",
    objectives: [
      "Compare symmetric and asymmetric encryption",
      "Understand the key distribution problem",
      "Apply encryption algorithms appropriately",
      "Implement cryptographic solutions"
    ],
    prerequisites: [3],
    skillsGained: ["Encryption concepts", "Key management", "Cryptographic solutions"],
    completed: false
  },
  {
    id: 5,
    lessonId: 5,
    title: "Hashing and Digital Signatures",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-05.md",
    solutionPath: "/content/security-plus/labs/lab-05-solution.md",
    objectives: [
      "Understand cryptographic hash properties",
      "Differentiate collision and preimage attacks",
      "Implement digital signatures",
      "Verify data integrity"
    ],
    prerequisites: [4],
    skillsGained: ["Hash functions", "Digital signatures", "Integrity verification"],
    completed: false
  },
  {
    id: 6,
    lessonId: 6,
    title: "PKI and Certificates",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-06.md",
    solutionPath: "/content/security-plus/labs/lab-06-solution.md",
    objectives: [
      "Understand Certificate Authority roles",
      "Differentiate root and intermediate CAs",
      "Manage certificate lifecycle",
      "Troubleshoot certificate issues"
    ],
    prerequisites: [5],
    skillsGained: ["PKI concepts", "Certificate management", "Trust hierarchies"],
    completed: false
  },
  {
    id: 7,
    lessonId: 7,
    title: "Malware Types and Indicators",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-07.md",
    solutionPath: "/content/security-plus/labs/lab-07-solution.md",
    objectives: [
      "Differentiate virus and worm behavior",
      "Understand ransomware operations",
      "Identify malware indicators of compromise",
      "Analyze malware characteristics"
    ],
    prerequisites: [6],
    skillsGained: ["Malware identification", "IoC analysis", "Threat classification"],
    completed: false
  },
  {
    id: 8,
    lessonId: 8,
    title: "Social Engineering Attacks",
    difficulty: "Beginner",
    estimatedTime: "25-30 min",
    labPath: "/content/security-plus/labs/lab-08.md",
    solutionPath: "/content/security-plus/labs/lab-08-solution.md",
    objectives: [
      "Understand social engineering techniques",
      "Differentiate phishing attack types",
      "Identify social engineering indicators",
      "Implement awareness training"
    ],
    prerequisites: [7],
    skillsGained: ["Social engineering recognition", "Phishing identification", "Security awareness"],
    completed: false
  },
  {
    id: 9,
    lessonId: 9,
    title: "Network-Based Attacks",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-09.md",
    solutionPath: "/content/security-plus/labs/lab-09-solution.md",
    objectives: [
      "Differentiate DoS and DDoS attacks",
      "Understand on-path attacks",
      "Analyze network attack vectors",
      "Implement network defenses"
    ],
    prerequisites: [8],
    skillsGained: ["Network attack analysis", "DDoS mitigation", "Network security"],
    completed: false
  },
  {
    id: 10,
    lessonId: 10,
    title: "Application and Password Attacks",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-10.md",
    solutionPath: "/content/security-plus/labs/lab-10-solution.md",
    objectives: [
      "Understand SQL injection vulnerabilities",
      "Differentiate XSS attack types",
      "Analyze password attack methods",
      "Implement application security"
    ],
    prerequisites: [9],
    skillsGained: ["Application security", "Injection prevention", "Password security"],
    completed: false
  },
  {
    id: 11,
    lessonId: 11,
    title: "Vulnerability Types",
    difficulty: "Beginner",
    estimatedTime: "25-30 min",
    labPath: "/content/security-plus/labs/lab-11.md",
    solutionPath: "/content/security-plus/labs/lab-11-solution.md",
    objectives: [
      "Differentiate vulnerability, threat, and risk",
      "Understand zero-day vulnerabilities",
      "Classify vulnerability types",
      "Assess vulnerability severity"
    ],
    prerequisites: [10],
    skillsGained: ["Vulnerability classification", "Risk assessment", "Zero-day awareness"],
    completed: false
  },
  {
    id: 12,
    lessonId: 12,
    title: "Vulnerability Management",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-12.md",
    solutionPath: "/content/security-plus/labs/lab-12-solution.md",
    objectives: [
      "Differentiate vulnerability scans and penetration tests",
      "Understand credentialed vs non-credentialed scans",
      "Implement vulnerability management lifecycle",
      "Prioritize remediation efforts"
    ],
    prerequisites: [11],
    skillsGained: ["Vulnerability scanning", "Penetration testing concepts", "Remediation prioritization"],
    completed: false
  },
  {
    id: 13,
    lessonId: 13,
    title: "Mitigation Techniques",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-13.md",
    solutionPath: "/content/security-plus/labs/lab-13-solution.md",
    objectives: [
      "Differentiate preventive and detective controls",
      "Implement defense in depth",
      "Apply mitigation strategies",
      "Design layered security"
    ],
    prerequisites: [12],
    skillsGained: ["Mitigation strategies", "Control implementation", "Layered defense"],
    completed: false
  },
  {
    id: 14,
    lessonId: 14,
    title: "Network Security Architecture",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-14.md",
    solutionPath: "/content/security-plus/labs/lab-14-solution.md",
    objectives: [
      "Design DMZ architectures",
      "Implement firewall rules",
      "Understand implicit deny",
      "Configure network segmentation"
    ],
    prerequisites: [13],
    skillsGained: ["Network architecture", "DMZ design", "Firewall configuration"],
    completed: false
  },
  {
    id: 15,
    lessonId: 15,
    title: "Cloud Security",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-15.md",
    solutionPath: "/content/security-plus/labs/lab-15-solution.md",
    objectives: [
      "Understand shared responsibility model",
      "Implement cloud access security broker",
      "Address multi-tenancy concerns",
      "Configure cloud IAM"
    ],
    prerequisites: [14],
    skillsGained: ["Cloud security", "Shared responsibility", "CASB implementation"],
    completed: false
  },
  {
    id: 16,
    lessonId: 16,
    title: "Secure Network Design",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-16.md",
    solutionPath: "/content/security-plus/labs/lab-16-solution.md",
    objectives: [
      "Implement secure protocols (SSH vs Telnet)",
      "Configure DNSSEC",
      "Design secure network topologies",
      "Apply email security"
    ],
    prerequisites: [15],
    skillsGained: ["Secure protocols", "DNSSEC", "Email security"],
    completed: false
  },
  {
    id: 17,
    lessonId: 17,
    title: "Firewalls and Intrusion Prevention",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-17.md",
    solutionPath: "/content/security-plus/labs/lab-17-solution.md",
    objectives: [
      "Differentiate stateless and stateful firewalls",
      "Compare IDS and IPS",
      "Configure firewall rules",
      "Implement intrusion prevention"
    ],
    prerequisites: [16],
    skillsGained: ["Firewall management", "IDS/IPS configuration", "Network monitoring"],
    completed: false
  },
  {
    id: 18,
    lessonId: 18,
    title: "Wireless Security Architecture",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-18.md",
    solutionPath: "/content/security-plus/labs/lab-18-solution.md",
    objectives: [
      "Understand WEP vulnerabilities",
      "Differentiate WPA2-Personal and Enterprise",
      "Implement wireless security",
      "Configure 802.1X authentication"
    ],
    prerequisites: [17],
    skillsGained: ["Wireless security", "WPA configuration", "802.1X implementation"],
    completed: false
  },
  {
    id: 19,
    lessonId: 19,
    title: "Identity and Access Management",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-19.md",
    solutionPath: "/content/security-plus/labs/lab-19-solution.md",
    objectives: [
      "Understand authentication factors",
      "Implement multi-factor authentication",
      "Configure identity management",
      "Apply access control principles"
    ],
    prerequisites: [18],
    skillsGained: ["IAM concepts", "MFA implementation", "Authentication methods"],
    completed: false
  },
  {
    id: 20,
    lessonId: 20,
    title: "Access Control Models",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-20.md",
    solutionPath: "/content/security-plus/labs/lab-20-solution.md",
    objectives: [
      "Differentiate DAC and MAC",
      "Implement Role-Based Access Control",
      "Apply least privilege principle",
      "Design access control policies"
    ],
    prerequisites: [19],
    skillsGained: ["Access control models", "RBAC implementation", "Privilege management"],
    completed: false
  },
  {
    id: 21,
    lessonId: 21,
    title: "Resilience and Recovery",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-21.md",
    solutionPath: "/content/security-plus/labs/lab-21-solution.md",
    objectives: [
      "Understand RTO and RPO",
      "Differentiate hot, warm, and cold sites",
      "Implement backup strategies",
      "Design disaster recovery plans"
    ],
    prerequisites: [20],
    skillsGained: ["Business continuity", "Disaster recovery", "Backup strategies"],
    completed: false
  },
  {
    id: 22,
    lessonId: 22,
    title: "Security Monitoring and SIEM",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-22.md",
    solutionPath: "/content/security-plus/labs/lab-22-solution.md",
    objectives: [
      "Understand SIEM functionality",
      "Differentiate logs and events",
      "Configure security monitoring",
      "Analyze security data"
    ],
    prerequisites: [21],
    skillsGained: ["SIEM operations", "Log analysis", "Security monitoring"],
    completed: false
  },
  {
    id: 23,
    lessonId: 23,
    title: "Vulnerability and Penetration Testing",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-23.md",
    solutionPath: "/content/security-plus/labs/lab-23-solution.md",
    objectives: [
      "Differentiate vulnerability scans and penetration tests",
      "Understand credentialed scanning",
      "Apply penetration testing methodology",
      "Report security findings"
    ],
    prerequisites: [22],
    skillsGained: ["Penetration testing", "Vulnerability assessment", "Security reporting"],
    completed: false
  },
  {
    id: 24,
    lessonId: 24,
    title: "Security Assessments",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-24.md",
    solutionPath: "/content/security-plus/labs/lab-24-solution.md",
    objectives: [
      "Differentiate internal and external audits",
      "Apply security frameworks",
      "Conduct security assessments",
      "Document findings"
    ],
    prerequisites: [23],
    skillsGained: ["Security auditing", "Framework application", "Assessment methodology"],
    completed: false
  },
  {
    id: 25,
    lessonId: 25,
    title: "Incident Response Process",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-25.md",
    solutionPath: "/content/security-plus/labs/lab-25-solution.md",
    objectives: [
      "Understand the six IR phases",
      "Differentiate events, alerts, and incidents",
      "Implement incident response procedures",
      "Document incident handling"
    ],
    prerequisites: [24],
    skillsGained: ["Incident response", "IR procedures", "Incident documentation"],
    completed: false
  },
  {
    id: 26,
    lessonId: 26,
    title: "Digital Forensics",
    difficulty: "Advanced",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-26.md",
    solutionPath: "/content/security-plus/labs/lab-26-solution.md",
    objectives: [
      "Understand order of volatility",
      "Differentiate forensic images and backups",
      "Maintain chain of custody",
      "Perform evidence collection"
    ],
    prerequisites: [25],
    skillsGained: ["Digital forensics", "Evidence handling", "Chain of custody"],
    completed: false
  },
  {
    id: 27,
    lessonId: 27,
    title: "Security Automation and Scripting",
    difficulty: "Advanced",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-27.md",
    solutionPath: "/content/security-plus/labs/lab-27-solution.md",
    objectives: [
      "Understand automation benefits",
      "Differentiate scripts and programs",
      "Implement security automation",
      "Create security scripts"
    ],
    prerequisites: [26],
    skillsGained: ["Security automation", "Scripting basics", "SOAR concepts"],
    completed: false
  },
  {
    id: 28,
    lessonId: 28,
    title: "Data Protection and Privacy",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-28.md",
    solutionPath: "/content/security-plus/labs/lab-28-solution.md",
    objectives: [
      "Understand three states of data",
      "Differentiate classification and categorization",
      "Implement data protection controls",
      "Apply privacy regulations"
    ],
    prerequisites: [27],
    skillsGained: ["Data protection", "Data classification", "Privacy compliance"],
    completed: false
  },
  {
    id: 29,
    lessonId: 29,
    title: "Risk Management",
    difficulty: "Intermediate",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-29.md",
    solutionPath: "/content/security-plus/labs/lab-29-solution.md",
    objectives: [
      "Understand threat, vulnerability, and risk relationship",
      "Differentiate qualitative and quantitative assessment",
      "Conduct risk assessments",
      "Implement risk treatment strategies"
    ],
    prerequisites: [28],
    skillsGained: ["Risk management", "Risk assessment", "Risk treatment"],
    completed: false
  },
  {
    id: 30,
    lessonId: 30,
    title: "Governance and Compliance",
    difficulty: "Advanced",
    estimatedTime: "30-35 min",
    labPath: "/content/security-plus/labs/lab-30.md",
    solutionPath: "/content/security-plus/labs/lab-30-solution.md",
    objectives: [
      "Differentiate policy, standard, procedure, guideline",
      "Understand regulatory compliance",
      "Implement security governance",
      "Conduct compliance audits"
    ],
    prerequisites: [29],
    skillsGained: ["Security governance", "Compliance frameworks", "Policy development"],
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
  return securityPlusLabs.find(lab => lab.id === parseInt(id));
}

/**
 * Get lab by lesson ID
 */
export function getLabByLessonId(lessonId) {
  return securityPlusLabs.find(lab => lab.lessonId === parseInt(lessonId));
}

/**
 * Get labs by difficulty
 */
export function getLabsByDifficulty(difficulty) {
  return securityPlusLabs.filter(lab => lab.difficulty === difficulty);
}

/**
 * Get completion statistics
 */
export function getLabCompletionStats() {
  const completed = securityPlusLabs.filter(l => l.completed).length;
  const total = securityPlusLabs.length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return {
    completed,
    total,
    percentage,
    remaining: total - completed
  };
}

export default securityPlusLabs;
