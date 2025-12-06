// Lesson 1: Security Fundamentals and the CIA Triad
// Security+ (SY0-701) - Domain 1.0: General Security Concepts

export const lesson1Flashcards = [
  {
    id: 1,
    front: "What is the CIA Triad?",
    back: "The three core principles of information security: Confidentiality, Integrity, and Availability. Every security control aims to protect one or more of these."
  },
  {
    id: 2,
    front: "What is Confidentiality in security?",
    back: "Ensuring data is only accessible to authorized users. Achieved through encryption, access controls, and data classification."
  },
  {
    id: 3,
    front: "What is Integrity in security?",
    back: "Ensuring data hasn't been modified or tampered with. Achieved through hashing, digital signatures, and change detection."
  },
  {
    id: 4,
    front: "What is Availability in security?",
    back: "Ensuring systems and data are accessible when needed. Achieved through redundancy, backups, and fault tolerance."
  },
  {
    id: 5,
    front: "What is Non-repudiation?",
    back: "The inability to deny having performed an action. Digital signatures provide non-repudiation - you can't claim you didn't sign something."
  },
  {
    id: 6,
    front: "What does AAA stand for in security?",
    back: "Authentication, Authorization, and Accounting. Authentication = who are you? Authorization = what can you access? Accounting = what did you do?"
  },
  {
    id: 7,
    front: "What is Authentication?",
    back: "Verifying the identity of a user, device, or system. Proves you are who you claim to be (username/password, biometrics, certificates)."
  },
  {
    id: 8,
    front: "What is Authorization?",
    back: "Determining what an authenticated user is allowed to do. Defines permissions and access levels after identity is verified."
  },
  {
    id: 9,
    front: "What is Accounting in AAA?",
    back: "Tracking and logging user activities. Creates audit trails showing who did what, when, and from where."
  },
  {
    id: 10,
    front: "What are the four categories of security controls?",
    back: "Technical (technology-based), Managerial/Administrative (policies), Operational (day-to-day procedures), Physical (tangible barriers)."
  },
  {
    id: 11,
    front: "What are Technical controls?",
    back: "Security measures implemented through technology. Examples: firewalls, encryption, IDS/IPS, antivirus, access control lists."
  },
  {
    id: 12,
    front: "What are Managerial/Administrative controls?",
    back: "Security through policies, procedures, and governance. Examples: security policies, risk assessments, training programs, background checks."
  },
  {
    id: 13,
    front: "What are Operational controls?",
    back: "Day-to-day security procedures performed by people. Examples: security guards, incident response procedures, change management."
  },
  {
    id: 14,
    front: "What are Physical controls?",
    back: "Tangible security measures protecting facilities. Examples: locks, fences, cameras, mantraps, bollards, lighting."
  },
  {
    id: 15,
    front: "What is a Preventive control?",
    back: "A control that stops attacks before they happen. Examples: firewalls blocking traffic, door locks, security training."
  },
  {
    id: 16,
    front: "What is a Detective control?",
    back: "A control that identifies attacks in progress or after they occur. Examples: IDS, security cameras, log monitoring, audits."
  },
  {
    id: 17,
    front: "What is a Corrective control?",
    back: "A control that fixes damage after an attack. Examples: restoring from backups, patching vulnerabilities, incident response."
  },
  {
    id: 18,
    front: "What is a Deterrent control?",
    back: "A control that discourages attacks through perceived risk. Examples: warning signs, security cameras (visible), login banners."
  },
  {
    id: 19,
    front: "What is a Compensating control?",
    back: "An alternative control used when the primary control isn't feasible. Example: using encryption when you can't physically secure a laptop."
  },
  {
    id: 20,
    front: "What is a Directive control?",
    back: "A control that guides behavior through policy or instruction. Examples: acceptable use policies, security procedures, compliance requirements."
  },
  {
    id: 21,
    front: "A firewall blocking malicious traffic is what type of control?",
    back: "Technical (category) and Preventive (type). It uses technology to stop attacks before they succeed."
  },
  {
    id: 22,
    front: "Security awareness training is what type of control?",
    back: "Managerial/Administrative (category) and Preventive (type). It's policy-based and aims to prevent security incidents."
  },
  {
    id: 23,
    front: "An IDS alerting on suspicious activity is what type of control?",
    back: "Technical (category) and Detective (type). It uses technology to identify attacks in progress."
  },
  {
    id: 24,
    front: "Restoring from backup after ransomware is what type of control?",
    back: "Corrective control. It fixes damage after an attack has occurred."
  },
  {
    id: 25,
    front: "A 'Premises Under Video Surveillance' sign is what type of control?",
    back: "Deterrent control. It discourages attacks by making potential attackers think twice."
  },
  {
    id: 26,
    front: "Which CIA principle does encryption primarily protect?",
    back: "Confidentiality. Encryption ensures only authorized parties can read the data."
  },
  {
    id: 27,
    front: "Which CIA principle does hashing primarily protect?",
    back: "Integrity. Hashing detects if data has been modified or tampered with."
  },
  {
    id: 28,
    front: "Which CIA principle does a backup system primarily protect?",
    back: "Availability. Backups ensure data can be restored and accessed after a failure or attack."
  },
  {
    id: 29,
    front: "What's the difference between Authentication and Authorization?",
    back: "Authentication verifies WHO you are (identity). Authorization determines WHAT you can do (permissions). Authentication always comes first."
  },
  {
    id: 30,
    front: "A security guard checking IDs at the entrance is what type of control?",
    back: "Physical (category), Operational (also valid), and Preventive (type). It's a human-performed control preventing unauthorized access."
  }
];