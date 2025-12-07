/**
 * Performance-Based Questions (PBQs) for CompTIA Security+ (SY0-701) Practice Exams
 *
 * PBQ Types:
 * - drag-drop: Drag items to correct zones
 * - configuration: Fill in configuration fields
 * - matching: Match items from left to right
 * - ordering: Put items in correct sequence
 */

export const pbqQuestions = [
  // PBQ 1: Security Control Categories (Drag-Drop)
  {
    id: 'pbq-001',
    type: 'drag-drop',
    domain: '1.0',
    title: 'Security Control Classification',
    points: 9,
    scenario: 'As a security analyst, you are documenting your organization\'s security controls for an upcoming audit. You need to categorize each control by its type (what it does) to demonstrate defense in depth. Proper classification helps identify gaps in the security program.',
    instructions: 'Drag each security control to its correct control type category.',
    items: [
      { id: 'item1', label: 'Firewall blocking unauthorized traffic' },
      { id: 'item2', label: 'Security camera recording entry points' },
      { id: 'item3', label: 'Intrusion Detection System (IDS) alerting on suspicious activity' },
      { id: 'item4', label: 'Backup system for data recovery' },
      { id: 'item5', label: 'Warning signs stating "Authorized Personnel Only"' },
      { id: 'item6', label: 'Antivirus quarantining detected malware' },
      { id: 'item7', label: 'Multi-factor authentication requirement' },
      { id: 'item8', label: 'SIEM correlating log events' },
      { id: 'item9', label: 'Security awareness training program' }
    ],
    dropZones: [
      { id: 'preventive', label: 'Preventive Controls' },
      { id: 'detective', label: 'Detective Controls' },
      { id: 'corrective', label: 'Corrective Controls' },
      { id: 'deterrent', label: 'Deterrent Controls' }
    ],
    correctAnswers: {
      'preventive': ['item1', 'item7', 'item9'],
      'detective': ['item2', 'item3', 'item8'],
      'corrective': ['item4', 'item6'],
      'deterrent': ['item5']
    },
    explanation: 'PREVENTIVE controls stop attacks before they occur: Firewalls block unauthorized access, MFA prevents unauthorized logins, and security training prevents human errors. DETECTIVE controls identify attacks during or after: Security cameras record for review, IDS alerts on suspicious patterns, and SIEM correlates events to detect incidents. CORRECTIVE controls fix damage after an incident: Backups restore lost data, and antivirus quarantine removes active threats. DETERRENT controls discourage attacks: Warning signs make potential intruders aware of monitoring and consequences.'
  },

  // PBQ 2: Attack Types to Mitigation (Drag-Drop)
  {
    id: 'pbq-002',
    type: 'drag-drop',
    domain: '2.0',
    title: 'Attack Mitigation Strategies',
    points: 8,
    scenario: 'Your organization experienced several security incidents last quarter. The CISO wants you to document the appropriate mitigation strategies for each attack type to improve defenses. Match each mitigation to the attack it prevents.',
    instructions: 'Drag each mitigation technique to the attack type it primarily defends against.',
    items: [
      { id: 'item1', label: 'Input validation and parameterized queries' },
      { id: 'item2', label: 'Security awareness training and email filtering' },
      { id: 'item3', label: 'Rate limiting and CAPTCHA' },
      { id: 'item4', label: 'Output encoding and Content Security Policy' },
      { id: 'item5', label: 'Encrypted protocols (HTTPS) and certificate validation' },
      { id: 'item6', label: 'Network segmentation and access control lists' },
      { id: 'item7', label: 'Anti-CSRF tokens and SameSite cookies' },
      { id: 'item8', label: 'DDoS protection services and load balancing' }
    ],
    dropZones: [
      { id: 'sqli', label: 'SQL Injection' },
      { id: 'phishing', label: 'Phishing Attacks' },
      { id: 'bruteforce', label: 'Brute Force Attacks' },
      { id: 'xss', label: 'Cross-Site Scripting (XSS)' },
      { id: 'mitm', label: 'Man-in-the-Middle Attacks' },
      { id: 'lateral', label: 'Lateral Movement' },
      { id: 'csrf', label: 'Cross-Site Request Forgery' },
      { id: 'ddos', label: 'DDoS Attacks' }
    ],
    correctAnswers: {
      'sqli': ['item1'],
      'phishing': ['item2'],
      'bruteforce': ['item3'],
      'xss': ['item4'],
      'mitm': ['item5'],
      'lateral': ['item6'],
      'csrf': ['item7'],
      'ddos': ['item8']
    },
    explanation: 'SQL INJECTION is prevented by input validation and parameterized queries that separate code from data. PHISHING is mitigated through security awareness training and email filtering. BRUTE FORCE attacks are slowed by rate limiting and CAPTCHA challenges. XSS is prevented by output encoding and Content Security Policy headers. MAN-IN-THE-MIDDLE attacks are defeated by HTTPS encryption and certificate validation. LATERAL MOVEMENT is contained through network segmentation and ACLs. CSRF is prevented by anti-CSRF tokens and SameSite cookie attributes. DDOS is mitigated by DDoS protection services and load balancing to absorb/distribute traffic.'
  },

  // PBQ 3: Firewall Rule Configuration (Configuration)
  {
    id: 'pbq-003',
    type: 'configuration',
    domain: '3.0',
    title: 'Firewall Access Control List Configuration',
    points: 6,
    scenario: 'You need to configure a firewall rule to allow the web server in the DMZ (10.10.20.50) to communicate with the database server in the internal network (192.168.1.100) on the MySQL port. The rule should follow the principle of least privilege.',
    instructions: 'Configure the firewall rule with the appropriate settings.',
    fields: [
      {
        id: 'source-ip',
        label: 'Source IP Address',
        placeholder: 'xxx.xxx.xxx.xxx',
        correctAnswer: '10.10.20.50',
        validation: 'ip',
        partialCredit: ['10.10.20.50/32']
      },
      {
        id: 'dest-ip',
        label: 'Destination IP Address',
        placeholder: 'xxx.xxx.xxx.xxx',
        correctAnswer: '192.168.1.100',
        validation: 'ip',
        partialCredit: ['192.168.1.100/32']
      },
      {
        id: 'protocol',
        label: 'Protocol',
        placeholder: 'TCP or UDP',
        correctAnswer: 'TCP',
        validation: 'text',
        partialCredit: ['tcp']
      },
      {
        id: 'dest-port',
        label: 'Destination Port',
        placeholder: 'Port number',
        correctAnswer: '3306',
        validation: 'number',
        partialCredit: []
      },
      {
        id: 'action',
        label: 'Action',
        placeholder: 'Allow or Deny',
        correctAnswer: 'Allow',
        validation: 'text',
        partialCredit: ['allow', 'ALLOW', 'Permit', 'permit']
      },
      {
        id: 'direction',
        label: 'Direction',
        placeholder: 'Inbound or Outbound',
        correctAnswer: 'Inbound',
        validation: 'text',
        partialCredit: ['inbound', 'INBOUND', 'In', 'IN']
      }
    ],
    explanation: 'Source IP is 10.10.20.50 (the web server initiating the connection). Destination IP is 192.168.1.100 (the database server receiving the connection). Protocol is TCP because MySQL uses TCP for reliable database connections. Destination Port is 3306 (the default MySQL port). Action is Allow since we need to permit this traffic. Direction is Inbound from the perspective of the internal network firewall - traffic is coming INTO the internal network from the DMZ. Following least privilege, we specify exact IPs rather than ranges or "any".'
  },

  // PBQ 4: Certificate Configuration (Configuration)
  {
    id: 'pbq-004',
    type: 'configuration',
    domain: '3.0',
    title: 'SSL/TLS Certificate Request Configuration',
    points: 5,
    scenario: 'You are generating a Certificate Signing Request (CSR) for your organization\'s new e-commerce website. The website will be accessible at shop.example.com and www.shop.example.com. Configure the CSR fields according to best practices.',
    instructions: 'Fill in the certificate request fields appropriately.',
    fields: [
      {
        id: 'common-name',
        label: 'Common Name (CN)',
        placeholder: 'Primary domain name',
        correctAnswer: 'shop.example.com',
        validation: 'text',
        partialCredit: ['www.shop.example.com']
      },
      {
        id: 'san',
        label: 'Subject Alternative Name (SAN)',
        placeholder: 'Additional domain(s)',
        correctAnswer: 'www.shop.example.com',
        validation: 'text',
        partialCredit: ['shop.example.com', 'DNS:www.shop.example.com']
      },
      {
        id: 'key-size',
        label: 'Key Size (bits)',
        placeholder: 'Minimum recommended size',
        correctAnswer: '2048',
        validation: 'number',
        partialCredit: ['4096']
      },
      {
        id: 'signature-algorithm',
        label: 'Signature Algorithm',
        placeholder: 'Algorithm name',
        correctAnswer: 'SHA-256',
        validation: 'text',
        partialCredit: ['SHA256', 'sha256', 'SHA-384', 'SHA-512']
      },
      {
        id: 'cert-type',
        label: 'Certificate Type for E-commerce',
        placeholder: 'DV, OV, or EV',
        correctAnswer: 'EV',
        validation: 'text',
        partialCredit: ['OV', 'Extended Validation', 'Organization Validation']
      }
    ],
    explanation: 'Common Name should be the primary domain (shop.example.com). Subject Alternative Name includes additional names the cert should cover (www.shop.example.com). Key Size should be at least 2048 bits (4096 is more secure but 2048 is the current minimum standard). Signature Algorithm should be SHA-256 or higher (SHA-1 is deprecated and insecure). Certificate Type should be EV (Extended Validation) for e-commerce because it provides the highest level of identity verification and builds customer trust - though OV is also acceptable for business sites.'
  },

  // PBQ 5: Ports and Protocols (Matching)
  {
    id: 'pbq-005',
    type: 'matching',
    domain: '3.0',
    title: 'Secure Protocol Port Identification',
    points: 7,
    scenario: 'You are reviewing firewall rules and need to verify that secure protocols are being used instead of their insecure counterparts. Match each secure protocol to its correct port number.',
    instructions: 'Match each secure protocol to its correct port number.',
    leftItems: [
      { id: 'left1', label: 'HTTPS (Secure Web)' },
      { id: 'left2', label: 'SSH (Secure Shell)' },
      { id: 'left3', label: 'LDAPS (Secure LDAP)' },
      { id: 'left4', label: 'FTPS (FTP over TLS - Implicit)' },
      { id: 'left5', label: 'SMTPS (Secure SMTP)' },
      { id: 'left6', label: 'IMAPS (Secure IMAP)' },
      { id: 'left7', label: 'SNMP v3 (Secure SNMP)' }
    ],
    rightItems: [
      { id: 'right1', label: 'Port 22' },
      { id: 'right2', label: 'Port 161' },
      { id: 'right3', label: 'Port 443' },
      { id: 'right4', label: 'Port 465' },
      { id: 'right5', label: 'Port 636' },
      { id: 'right6', label: 'Port 990' },
      { id: 'right7', label: 'Port 993' }
    ],
    correctMatches: {
      'left1': 'right3',
      'left2': 'right1',
      'left3': 'right5',
      'left4': 'right6',
      'left5': 'right4',
      'left6': 'right7',
      'left7': 'right2'
    },
    explanation: 'HTTPS uses port 443 (secure version of HTTP port 80). SSH uses port 22 (secure replacement for Telnet port 23). LDAPS uses port 636 (secure version of LDAP port 389). FTPS Implicit uses port 990 (secure FTP, implicit TLS). SMTPS uses port 465 (secure SMTP, though 587 with STARTTLS is also common). IMAPS uses port 993 (secure version of IMAP port 143). SNMPv3 still uses port 161 but adds encryption and authentication within the protocol itself, unlike other protocols that use different ports for secure versions.'
  },

  // PBQ 6: Threat Actors and Characteristics (Matching)
  {
    id: 'pbq-006',
    type: 'matching',
    domain: '2.0',
    title: 'Threat Actor Identification',
    points: 6,
    scenario: 'Your threat intelligence team has identified several recent attacks against your industry. You need to match each attack characteristic to the most likely threat actor type to help prioritize defensive measures.',
    instructions: 'Match each attack characteristic to the most likely threat actor type.',
    leftItems: [
      { id: 'left1', label: 'Uses sophisticated custom malware, targets government/defense' },
      { id: 'left2', label: 'Defaces websites with political messages, uses DDoS' },
      { id: 'left3', label: 'Runs ransomware operations, demands cryptocurrency' },
      { id: 'left4', label: 'Uses pre-made tools, targets easy vulnerabilities' },
      { id: 'left5', label: 'Has legitimate access, motivated by grievance or money' },
      { id: 'left6', label: 'Targets specific company, hired for corporate espionage' }
    ],
    rightItems: [
      { id: 'right1', label: 'Nation-State Actor (APT)' },
      { id: 'right2', label: 'Hacktivist' },
      { id: 'right3', label: 'Organized Crime' },
      { id: 'right4', label: 'Script Kiddie' },
      { id: 'right5', label: 'Insider Threat' },
      { id: 'right6', label: 'Competitor/Corporate Spy' }
    ],
    correctMatches: {
      'left1': 'right1',
      'left2': 'right2',
      'left3': 'right3',
      'left4': 'right4',
      'left5': 'right5',
      'left6': 'right6'
    },
    explanation: 'NATION-STATE ACTORS (APTs) have extensive resources, use custom malware, and target government/defense/critical infrastructure for espionage. HACKTIVISTS are motivated by ideology, commonly use website defacement and DDoS to make political statements. ORGANIZED CRIME is financially motivated, running ransomware and other profit-generating schemes. SCRIPT KIDDIES have low skill, use pre-made tools, and attack easy targets for notoriety. INSIDER THREATS have legitimate access and are motivated by grievance, financial gain, or coercion. COMPETITORS hire attackers or conduct their own corporate espionage to steal trade secrets.'
  },

  // PBQ 7: Incident Response Process (Ordering)
  {
    id: 'pbq-007',
    type: 'ordering',
    domain: '4.0',
    title: 'Incident Response Procedure',
    points: 6,
    scenario: 'Your SOC has detected a potential data breach. As the incident response lead, you need to ensure your team follows the proper incident response process to effectively contain and remediate the threat while preserving evidence.',
    instructions: 'Put the incident response phases in the correct order.',
    items: [
      { id: 'step1', label: 'Preparation - establish IR team, tools, and procedures' },
      { id: 'step2', label: 'Detection and Analysis - identify and validate the incident' },
      { id: 'step3', label: 'Containment - isolate affected systems to prevent spread' },
      { id: 'step4', label: 'Eradication - remove malware and close vulnerabilities' },
      { id: 'step5', label: 'Recovery - restore systems and return to normal operations' },
      { id: 'step6', label: 'Lessons Learned - document incident and improve processes' }
    ],
    correctOrder: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6'],
    explanation: 'The NIST incident response process has 6 phases: 1) PREPARATION happens before incidents - building the team, creating procedures, and deploying tools. 2) DETECTION AND ANALYSIS identifies potential incidents and validates them through analysis. 3) CONTAINMENT isolates affected systems to prevent the threat from spreading (short-term and long-term containment). 4) ERADICATION removes the threat - deleting malware, removing backdoors, and patching vulnerabilities that were exploited. 5) RECOVERY restores systems to normal operations, with monitoring for recurrence. 6) LESSONS LEARNED documents what happened and improves processes to prevent similar incidents.'
  },

  // PBQ 8: Risk Assessment Process (Ordering)
  {
    id: 'pbq-008',
    type: 'ordering',
    domain: '5.0',
    title: 'Risk Assessment Methodology',
    points: 6,
    scenario: 'Your organization is conducting an annual risk assessment as part of the security program. You need to ensure the risk assessment follows the proper methodology to accurately identify and prioritize risks.',
    instructions: 'Put the risk assessment steps in the correct order.',
    items: [
      { id: 'step1', label: 'Identify and value assets (what are we protecting?)' },
      { id: 'step2', label: 'Identify threats (what could harm the assets?)' },
      { id: 'step3', label: 'Identify vulnerabilities (what weaknesses exist?)' },
      { id: 'step4', label: 'Analyze likelihood and impact (how probable and severe?)' },
      { id: 'step5', label: 'Calculate and prioritize risks (Risk = Likelihood × Impact)' },
      { id: 'step6', label: 'Recommend controls and document findings' },
      { id: 'step7', label: 'Management review and risk response decision' }
    ],
    correctOrder: ['step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7'],
    explanation: 'Risk assessment follows this methodology: 1) IDENTIFY AND VALUE ASSETS - you must know what you\'re protecting and its value before assessing risks. 2) IDENTIFY THREATS - determine what could potentially harm those assets. 3) IDENTIFY VULNERABILITIES - find weaknesses that threats could exploit. 4) ANALYZE LIKELIHOOD AND IMPACT - estimate probability of occurrence and severity of consequences. 5) CALCULATE AND PRIORITIZE - Risk = Likelihood × Impact; rank risks to focus on the most critical. 6) RECOMMEND CONTROLS - propose mitigations and document everything. 7) MANAGEMENT REVIEW - leadership decides whether to accept, mitigate, transfer, or avoid each risk.'
  }
];

/**
 * Get all PBQ questions
 */
export function getAllPBQQuestions() {
  return pbqQuestions;
}

/**
 * Get PBQ questions by domain
 */
export function getPBQQuestionsByDomain(domain) {
  return pbqQuestions.filter(q => q.domain === domain);
}

/**
 * Get random PBQ questions
 */
export function getRandomPBQs(count = 3) {
  const shuffled = [...pbqQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// Alias for exam generator compatibility
export const getRandomSecurityPBQs = getRandomPBQs;

/**
 * Get PBQ question by ID
 */
export function getPBQById(id) {
  return pbqQuestions.find(q => q.id === id);
}

/**
 * Get PBQ questions by type
 */
export function getPBQsByType(type) {
  return pbqQuestions.filter(q => q.type === type);
}

/*
PBQ SUMMARY:
============
ID        | Type          | Domain | Title                              | Points
----------|---------------|--------|------------------------------------|---------
pbq-001   | drag-drop     | 1.0    | Security Control Classification    | 9
pbq-002   | drag-drop     | 2.0    | Attack Mitigation Strategies       | 8
pbq-003   | configuration | 3.0    | Firewall ACL Configuration         | 6
pbq-004   | configuration | 3.0    | SSL/TLS Certificate Request        | 5
pbq-005   | matching      | 3.0    | Secure Protocol Port Identification| 7
pbq-006   | matching      | 2.0    | Threat Actor Identification        | 6
pbq-007   | ordering      | 4.0    | Incident Response Procedure        | 6
pbq-008   | ordering      | 5.0    | Risk Assessment Methodology        | 6

Total Points: 53
Types: 2 drag-drop, 2 configuration, 2 matching, 2 ordering ✓
Domain Coverage: 1.0 (1), 2.0 (2), 3.0 (3), 4.0 (1), 5.0 (1) ✓
*/