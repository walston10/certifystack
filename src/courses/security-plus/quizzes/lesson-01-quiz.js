export const lesson1Quiz = [
  {
    id: 1,
    question: "A hospital's electronic health records system went offline for 6 hours due to a ransomware attack, preventing doctors from accessing patient information. Which element of the CIA triad was PRIMARILY compromised?",
    options: [
      "Confidentiality - patient data was exposed to unauthorized users",
      "Integrity - patient records were modified by attackers",
      "Availability - authorized users could not access the system when needed",
      "Non-repudiation - actions could not be traced to users"
    ],
    correct: 2,
    explanation: "Availability ensures that systems and data are accessible to authorized users when needed. The 6-hour outage prevented doctors (authorized users) from accessing patient records, directly impacting availability. While ransomware CAN compromise confidentiality (data exfiltration) or integrity (data encryption/modification), the scenario specifically describes the inability to access the system - a classic availability impact. Healthcare systems require high availability due to life-critical nature. Mitigation: redundant systems, offline backups, incident response plans, and business continuity planning."
  },
  {
    id: 2,
    question: "A company discovers that an attacker modified financial transaction records in their database to hide embezzlement. Which CIA triad element was violated?",
    options: [
      "Confidentiality - the data was accessed without authorization",
      "Integrity - data was altered from its original, accurate state",
      "Availability - the database was taken offline",
      "Authentication - the attacker bypassed login controls"
    ],
    correct: 1,
    explanation: "Integrity ensures data remains accurate, complete, and unmodified except by authorized processes. Modifying financial records to hide embezzlement directly violates integrity - the data no longer reflects the true state of transactions. Integrity controls include: hashing (detect changes), digital signatures (verify source and integrity), access controls (prevent unauthorized modification), audit logs (track changes), and database constraints (enforce data rules). While confidentiality may also have been breached (unauthorized access), the PRIMARY impact described is the modification of data."
  },
  {
    id: 3,
    question: "An organization implements a security camera system at all entry points. What type and category of security control is this?",
    options: [
      "Technical control, Detective type",
      "Physical control, Detective type",
      "Operational control, Preventive type",
      "Physical control, Preventive type"
    ],
    correct: 1,
    explanation: "Security cameras are PHYSICAL controls (tangible, real-world security measures) and DETECTIVE in type (they detect and record security events but don't prevent them). Control categories: (1) Technical/Logical - implemented through technology (firewalls, encryption), (2) Physical - tangible barriers (locks, cameras, fences), (3) Managerial/Administrative - policies and procedures, (4) Operational - day-to-day procedures performed by people. Cameras primarily detect - they record incidents for review. While visible cameras may deter some attackers (secondary deterrent effect), their primary function is detection and evidence collection. True preventive physical controls would be locks, mantraps, or barriers that physically stop access."
  },
  {
    id: 4,
    question: "A user claims they never sent an email authorizing a $50,000 wire transfer, but the IT team shows the email was sent from their authenticated account with their digital signature. What security concept proves the user sent the email?",
    options: [
      "Confidentiality - the email was encrypted",
      "Integrity - the email wasn't modified",
      "Non-repudiation - the user cannot deny sending the email due to digital signature evidence",
      "Availability - the email system was operational"
    ],
    correct: 2,
    explanation: "Non-repudiation prevents someone from denying they performed an action. Digital signatures provide non-repudiation because: (1) Only the private key holder can create that specific signature, (2) The signature is mathematically tied to both the sender's identity and the message content, (3) This creates undeniable proof of origin. Non-repudiation methods include: digital signatures, audit logs, timestamps, biometric authentication records, and video surveillance. In legal/financial contexts, non-repudiation is critical for accountability. The user cannot credibly deny sending the email because only their private key could have created that signature."
  },
  {
    id: 5,
    question: "After a data breach, a company implements mandatory security awareness training for all employees. What type and category of control is this?",
    options: [
      "Technical control, Corrective type",
      "Administrative control, Corrective type",
      "Operational control, Detective type",
      "Physical control, Preventive type"
    ],
    correct: 1,
    explanation: "Security awareness training is an ADMINISTRATIVE/MANAGERIAL control (policy-based, involves people and procedures) and CORRECTIVE type (implemented after an incident to address the problem and prevent recurrence). Control types: (1) Preventive - stops incidents before they occur, (2) Detective - identifies incidents during or after, (3) Corrective - fixes issues after incidents, (4) Deterrent - discourages attacks, (5) Compensating - alternative when primary control isn't feasible, (6) Directive - guides behavior through policy. Training implemented AFTER a breach is corrective - it addresses the human factor that likely contributed to the breach. If training existed before, it would be preventive."
  },
  {
    id: 6,
    question: "A firewall administrator configures rules to block all traffic except specifically permitted connections. What security principle does this implement?",
    options: [
      "Defense in depth",
      "Implicit deny / Deny by default",
      "Least privilege",
      "Separation of duties"
    ],
    correct: 1,
    explanation: "Implicit deny (also called 'deny by default' or 'default deny') means all traffic is blocked unless explicitly permitted by a rule. This is a fundamental security principle: (1) Start with everything blocked, (2) Only allow what's necessary, (3) Unknown traffic is automatically rejected. Contrast with 'allow by default' which permits everything except what's explicitly blocked (less secure). Implicit deny appears in: firewall rules (deny all at bottom), access control lists, application whitelisting, and zero trust architectures. This principle reduces attack surface by ensuring only known-good traffic flows. Most enterprise firewalls use implicit deny - the final rule is always 'deny any any' even if not visible."
  },
  {
    id: 7,
    question: "A bank requires two employees to be present when opening the vault - neither can open it alone. What security principle does this demonstrate?",
    options: [
      "Least privilege - employees only have minimal access",
      "Separation of duties - critical functions require multiple people to prevent fraud",
      "Defense in depth - multiple layers of security",
      "Non-repudiation - actions can be traced"
    ],
    correct: 1,
    explanation: "Separation of duties (also called segregation of duties) requires multiple people to complete a critical task, preventing any single person from committing fraud or making critical errors undetected. Examples: (1) Two-person vault access (banks), (2) Developer can't deploy their own code to production, (3) Person requesting purchase can't approve it, (4) Different people handle accounts payable vs receivable. Benefits: prevents fraud, reduces errors, ensures oversight. This principle is required by many compliance frameworks (SOX, PCI DSS). The dual-control vault scenario ensures no single employee can steal contents or be coerced into opening the vault alone."
  },
  {
    id: 8,
    question: "A company's primary data center has redundant power, cooling, and network connections, plus a secondary site for failover. Which CIA triad element do these measures primarily support?",
    options: [
      "Confidentiality - data is protected from unauthorized access",
      "Integrity - data accuracy is maintained",
      "Availability - systems remain accessible despite failures",
      "Authentication - users are properly verified"
    ],
    correct: 2,
    explanation: "Redundancy measures (backup power, cooling, network, failover sites) primarily support AVAILABILITY - ensuring systems remain accessible even when components fail. Availability controls include: redundant hardware (RAID, clustering), backup power (UPS, generators), multiple network paths, geographic redundancy (hot/warm/cold sites), load balancing, and disaster recovery planning. High availability targets: 99.9% (8.76 hours downtime/year), 99.99% (52.6 minutes/year), 99.999% (5.26 minutes/year). Critical systems require multiple layers of redundancy. While these measures indirectly support integrity (preventing corruption from power loss) and confidentiality (maintaining security controls), their PRIMARY purpose is availability."
  },
  {
    id: 9,
    question: "An organization implements biometric fingerprint scanners at server room entrances. What category and type of control is this?",
    options: [
      "Technical control, Preventive type",
      "Physical control, Preventive type",
      "Administrative control, Detective type",
      "Operational control, Corrective type"
    ],
    correct: 1,
    explanation: "Biometric scanners at physical entrances are PHYSICAL controls (tangible, real-world access control) and PREVENTIVE type (they prevent unauthorized access before it occurs). Why physical not technical? While biometrics use technology, their PRIMARY purpose is controlling physical access to a space. Technical controls protect digital/logical access (firewalls, encryption, software access controls). The scanner prevents unauthorized entry - you cannot enter without valid biometric authentication. Compare to: security cameras (physical/detective - they detect but don't prevent), access policies (administrative/directive), and encryption (technical/preventive). Physical + preventive = stops people from physically entering restricted areas."
  },
  {
    id: 10,
    question: "A company cannot afford to implement its preferred encryption solution, so it implements a less expensive alternative that still meets minimum security requirements. What type of control is the alternative solution?",
    options: [
      "Corrective control",
      "Detective control",
      "Compensating control",
      "Deterrent control"
    ],
    correct: 2,
    explanation: "A COMPENSATING control is an alternative measure implemented when the primary or preferred control is not feasible due to cost, technical limitations, or business constraints. Key characteristics: (1) Addresses the same risk as the original control, (2) Provides equivalent or acceptable protection level, (3) Must be documented with justification, (4) Common in compliance frameworks (PCI DSS explicitly allows compensating controls). Examples: if you can't patch a legacy system, you might implement network segmentation and additional monitoring instead. The compensating control must: meet intent of original requirement, provide similar defense, be above and beyond other requirements, and be commensurate with additional risk. This is NOT the same as simply accepting risk - it's implementing an alternative protection."
  },
  {
    id: 11,
    question: "An employee's login credentials are verified against a central directory, they're granted access to specific applications based on their job role, and their file access is logged for review. Which AAA components are demonstrated?",
    options: [
      "Authentication only",
      "Authentication and Authorization only",
      "Authorization and Accounting only",
      "Authentication, Authorization, and Accounting - all three AAA components"
    ],
    correct: 3,
    explanation: "All three AAA components are demonstrated: (1) AUTHENTICATION - 'credentials verified against central directory' confirms the user's identity (who are you?), (2) AUTHORIZATION - 'granted access to specific applications based on job role' determines what the user can do (what are you allowed to do?), (3) ACCOUNTING - 'file access is logged for review' tracks user activities (what did you do?). AAA is fundamental to access control: Authentication verifies identity (passwords, biometrics, tokens), Authorization grants appropriate permissions (RBAC, ACLs), Accounting logs activities for audit and forensics. Common AAA protocols: RADIUS (network access), TACACS+ (device administration). All three working together provide complete access control lifecycle."
  },
  {
    id: 12,
    question: "A 'Warning: Unauthorized access prohibited. Violators will be prosecuted' sign is posted at a facility entrance. What type of security control is this?",
    options: [
      "Preventive - it stops attacks before they occur",
      "Detective - it identifies when attacks occur",
      "Deterrent - it discourages potential attackers through fear of consequences",
      "Corrective - it fixes problems after attacks"
    ],
    correct: 2,
    explanation: "Warning signs are DETERRENT controls - they discourage potential attackers by communicating consequences but don't physically prevent access or detect intrusions. Deterrent controls work through psychology: (1) Fear of legal consequences, (2) Perception of being watched, (3) Awareness that security measures exist. Examples: warning signs, visible security cameras (even fake ones), security guard presence, login banners stating monitoring occurs. Deterrent vs Preventive: a sign doesn't STOP someone from entering (preventive would be a locked door), it just makes them think twice. Legal importance: warning signs establish that unauthorized access is prohibited, supporting prosecution. Deterrent controls are often low-cost but only work against attackers who consider consequences - they won't stop determined adversaries."
  },
  {
    id: 13,
    question: "During an incident, a security team isolates an infected workstation from the network to prevent malware spread, then restores it from a clean backup. What types of controls are the isolation and restoration?",
    options: [
      "Both are preventive controls",
      "Isolation is detective, restoration is corrective",
      "Isolation is corrective, restoration is corrective - both address the incident after it occurred",
      "Both are compensating controls"
    ],
    correct: 2,
    explanation: "Both actions are CORRECTIVE controls - they address and remediate a security incident after it has occurred. Corrective control characteristics: (1) Implemented during/after an incident, (2) Limits damage (isolation prevents spread), (3) Restores normal operations (backup restoration), (4) Fixes the problem. The incident already happened - these aren't preventing initial infection (that would be preventive) or detecting the infection (that's detective - something else detected it). Corrective actions include: patching after exploitation, restoring from backup, reimaging systems, revoking compromised credentials, blocking malicious IPs post-attack. The goal is: contain damage, eradicate threat, recover systems, return to normal operations."
  },
  {
    id: 14,
    question: "A healthcare organization encrypts all patient data both in storage and during transmission. Which CIA triad element does encryption PRIMARILY protect?",
    options: [
      "Availability - ensures data is accessible when needed",
      "Integrity - prevents unauthorized modification",
      "Confidentiality - prevents unauthorized access to data contents",
      "Non-repudiation - proves who accessed the data"
    ],
    correct: 2,
    explanation: "Encryption PRIMARILY protects CONFIDENTIALITY - it ensures data is unreadable to unauthorized parties even if they gain access to it. Encryption at rest: protects stored data (databases, files, backups) if storage is stolen or accessed. Encryption in transit: protects data moving across networks (HTTPS, TLS, VPNs) from interception. While some encryption methods (authenticated encryption like AES-GCM) also provide integrity checking, the PRIMARY purpose of encryption is confidentiality. For healthcare (HIPAA), encryption is a key control for protecting PHI (Protected Health Information). Without the decryption key, encrypted data appears as meaningless random characters - maintaining confidentiality even if breached."
  },
  {
    id: 15,
    question: "A security policy requires all users to complete annual cybersecurity training, and managers must review and sign off on their team's completion. What type of control is this policy?",
    options: [
      "Technical control - implemented through technology",
      "Physical control - tangible security measure",
      "Administrative/Managerial control - implemented through policies and procedures",
      "Operational control - implemented through daily operations"
    ],
    correct: 2,
    explanation: "Security policies, procedures, and training requirements are ADMINISTRATIVE/MANAGERIAL controls - they guide behavior through written rules, standards, and management oversight. Administrative control characteristics: (1) Documented policies and procedures, (2) Management directives and oversight, (3) Training and awareness programs, (4) Risk assessments and security planning, (5) Hiring practices and background checks. The policy described involves: written requirement (policy), training completion (procedure), and management sign-off (oversight). Administrative controls tell people WHAT to do and WHY, while technical controls ENFORCE rules through technology. Effective security requires all control categories working together: administrative (policy), technical (enforcement), physical (barriers), and operational (daily execution)."
  }
];