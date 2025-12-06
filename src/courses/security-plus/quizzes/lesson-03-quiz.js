export const lesson03Quiz = [
  {
    id: 1,
    question: "An organization requires all users, whether on the corporate network or remote, to authenticate and verify device compliance before accessing any resource. Users must re-authenticate when accessing different applications. What security model is this?",
    options: [
      "Traditional perimeter security",
      "Zero Trust architecture - never trust, always verify regardless of location",
      "Defense in depth only",
      "Implicit trust based on network location"
    ],
    correct: 1,
    explanation: "Zero Trust architecture operates on the principle 'never trust, always verify'. Key characteristics in this scenario: (1) Location doesn't matter - same requirements for internal and remote users (no implicit trust from being 'inside'), (2) Continuous verification - re-authentication for different resources, (3) Device compliance checking - verifying endpoint security posture. Zero Trust principles: verify explicitly (authenticate/authorize every request), use least privilege access, assume breach (design as if attackers are already inside). Contrast with traditional perimeter security: once inside the network, users were implicitly trusted. Zero Trust eliminates this implicit trust, treating every access request as potentially hostile regardless of source."
  },
  {
    id: 2,
    question: "A company implements firewalls at the network edge, host-based firewalls on servers, network segmentation, and endpoint protection on workstations. What security principle does this architecture demonstrate?",
    options: [
      "Single point of security",
      "Defense in depth - multiple security layers so compromise of one doesn't mean total breach",
      "Zero Trust only",
      "Implicit trust model"
    ],
    correct: 1,
    explanation: "Defense in depth (layered security) implements multiple security controls so that if one layer fails, others still protect the asset. Layers in scenario: (1) Perimeter firewalls - filter network edge traffic, (2) Network segmentation - limits lateral movement, (3) Host-based firewalls - server-level protection, (4) Endpoint protection - workstation security. Why effective: attackers must bypass MULTIPLE controls, not just one. Each layer addresses different attack vectors. Even if perimeter is breached, internal controls slow/stop attackers. Other defense in depth examples: authentication + authorization + encryption, physical + logical + administrative controls. Not about redundant controls at same layer, but DIFFERENT controls at DIFFERENT layers. Often visualized as concentric circles or onion layers around protected assets."
  },
  {
    id: 3,
    question: "In a Zero Trust architecture, what is the function of a Policy Enforcement Point (PEP)?",
    options: [
      "Creates security policies for the organization",
      "Enforces access decisions by allowing or blocking resource requests based on policy",
      "Stores user credentials",
      "Monitors network traffic for anomalies"
    ],
    correct: 1,
    explanation: "In Zero Trust, the Policy Enforcement Point (PEP) is the component that ENFORCES access decisions. Zero Trust components: (1) POLICY ENFORCEMENT POINT (PEP) - the gatekeeper that allows/blocks access based on decisions, (2) POLICY DECISION POINT (PDP) - evaluates requests against policies and makes allow/deny decisions, (3) Policy engine - processes policies and context to inform decisions. Workflow: User requests resource → PEP intercepts → PDP evaluates (identity, device health, resource sensitivity, context) → decision sent to PEP → PEP allows or blocks. PEP examples: next-gen firewalls, identity-aware proxies, API gateways, microsegmentation enforcement points. The PEP is where security decisions become security ACTIONS - it's the enforcement mechanism."
  },
  {
    id: 4,
    question: "A financial services company ensures that the person who creates a wire transfer cannot also approve it. What security principle is being implemented?",
    options: [
      "Least privilege",
      "Separation of duties - dividing critical functions to prevent fraud",
      "Need to know",
      "Defense in depth"
    ],
    correct: 1,
    explanation: "Separation of duties (segregation of duties) divides critical functions among multiple people so no single individual can complete a sensitive transaction alone. Purpose: (1) Prevents fraud - requires collusion between multiple people, (2) Reduces errors - second person catches mistakes, (3) Provides oversight - creates natural checks and balances. Common examples: wire transfer creation vs approval, code development vs deployment, access request vs approval, financial recording vs reconciliation. Regulatory requirements: SOX (financial controls), PCI DSS (cardholder data), banking regulations. In this scenario: if one person could both create AND approve transfers, they could steal money. Requiring different people for each step means fraud requires conspiracy. Also called: dual control, two-person integrity, split knowledge."
  },
  {
    id: 5,
    question: "A new employee is given access only to the specific files and systems required for their job, nothing more. As their role expands, additional access is granted. What principle is this?",
    options: [
      "Implicit trust",
      "Least privilege - users receive minimum access necessary for their job function",
      "Maximum access",
      "Open access policy"
    ],
    correct: 1,
    explanation: "Least privilege grants users the MINIMUM permissions necessary to perform their job functions. Key aspects: (1) Start with no access, grant only what's needed, (2) Access tied to specific job requirements, (3) Regular review and removal of unnecessary access, (4) Escalate temporarily for special tasks, then revoke. Benefits: limits damage from compromised accounts (attacker only gets that user's limited access), reduces insider threat risk, supports compliance requirements, enables better auditing. Implementation: role-based access control (RBAC), just-in-time access provisioning, regular access reviews (certifications), automated deprovisioning. The phrase 'as role expands, additional access granted' shows proper implementation - access grows with legitimate need, not granted preemptively."
  },
  {
    id: 6,
    question: "A security team deploys decoy systems that appear to be vulnerable production servers with fake sensitive data. When attackers interact with these systems, alerts are generated. What are these decoy systems called?",
    options: [
      "Load balancers",
      "Honeypots - decoy systems designed to detect and study attackers",
      "Proxy servers",
      "Backup servers"
    ],
    correct: 1,
    explanation: "Honeypots are decoy systems designed to attract and detect attackers. Characteristics: (1) Appear valuable/vulnerable to attackers, (2) No legitimate business purpose - ANY interaction is suspicious, (3) Generate alerts on access, (4) Can gather intelligence on attacker techniques. Types: (1) Production honeypots - detect attacks in real environments, (2) Research honeypots - study attacker behavior and techniques. Related concepts: (1) Honeynet - network of honeypots simulating entire network, (2) Honeytoken - fake data (credentials, files) that triggers alerts if accessed, (3) Honeyfile - fake sensitive document that alerts when opened. Benefits: early attack detection (before real systems compromised), low false positives (no legitimate use), intelligence on attacker TTPs. Placement: internal network (detect lateral movement), DMZ (detect external threats), as fake credentials in documents."
  },
  {
    id: 7,
    question: "An office building entrance has two sets of doors where visitors must be verified before the inner door unlocks, and only one door can be open at a time. What is this physical security control called?",
    options: [
      "Bollard",
      "Access control vestibule (mantrap) - prevents tailgating and unauthorized entry",
      "Fence",
      "Security camera"
    ],
    correct: 1,
    explanation: "Access control vestibule (formerly called mantrap) is a physical access control with two doors where one must close and lock before the other opens. Purpose: (1) Prevents tailgating/piggybacking (following authorized person through), (2) Allows verification before granting full access, (3) Can trap unauthorized individuals between doors. How it works: Person enters outer door → outer door closes and locks → authentication required (badge, biometric, guard verification) → inner door unlocks if authorized → person proceeds. Variations: guard-controlled, automated with biometrics, weight sensors (detect multiple people), camera verification. Common in: data centers, high-security facilities, banks, government buildings. Forces individual authentication - even if someone tailgates through outer door, they can't proceed without their own credentials."
  },
  {
    id: 8,
    question: "A company performs an assessment to identify gaps between their current security posture and the requirements of a compliance framework they need to meet. What is this assessment called?",
    options: [
      "Penetration test",
      "Gap analysis - identifies differences between current state and desired state",
      "Vulnerability scan",
      "Risk assessment"
    ],
    correct: 1,
    explanation: "Gap analysis compares current security posture against a target state (compliance framework, security standard, best practices) to identify deficiencies. Process: (1) Define target state (compliance requirements, framework controls), (2) Assess current state (existing controls, processes), (3) Identify gaps (what's missing or insufficient), (4) Prioritize remediation, (5) Create roadmap to close gaps. Common uses: compliance preparation (PCI DSS, HIPAA, SOX), framework adoption (NIST CSF, ISO 27001), security program maturation. Output: list of gaps, severity ratings, remediation recommendations, timeline/budget estimates. Gap analysis differs from: penetration testing (active exploitation), vulnerability scanning (technical vulnerabilities), risk assessment (likelihood/impact analysis). It's a strategic planning tool for security program development."
  },
  {
    id: 9,
    question: "Concrete posts are installed around a building entrance to prevent vehicles from driving into the lobby. What physical security control is this?",
    options: [
      "Mantrap",
      "Bollards - vehicle barriers protecting buildings from ramming attacks",
      "Fencing",
      "Access badge system"
    ],
    correct: 1,
    explanation: "Bollards are sturdy vertical posts designed to prevent vehicle access while allowing pedestrian traffic. Types: (1) Fixed bollards - permanent installation, (2) Removable bollards - can be removed for authorized vehicle access, (3) Retractable bollards - lower into ground when not needed, (4) Decorative bollards - look like planters or architectural elements. Protection against: vehicle ramming attacks, accidental vehicle intrusion, theft by vehicle. Placement: building entrances, pedestrian areas, perimeter protection, loading dock control. Can be rated for different impact levels (vehicle speed/weight). Part of broader vehicle mitigation: combined with barriers, planters, berms, reinforced walls. Post-9/11, bollards became standard at government buildings, financial institutions, and crowded public spaces. Balance security with accessibility and aesthetics."
  },
  {
    id: 10,
    question: "A security analyst discovers unusual database queries that shouldn't occur in normal operations. The queries match a pattern distributed through a threat intelligence feed. What detected the activity?",
    options: [
      "Standard antivirus",
      "Honeytokens or monitoring using threat intelligence indicators",
      "Physical security cameras",
      "Employee reporting"
    ],
    correct: 1,
    explanation: "This scenario shows detection using threat intelligence - known patterns/signatures shared across organizations. Key elements: (1) Unusual queries - anomaly from baseline, (2) Pattern matching to threat feed - using shared indicators of compromise (IoCs), (3) Active monitoring of database activity. Threat intelligence provides: (1) Indicators of Compromise (IoCs) - file hashes, IP addresses, URLs, query patterns, (2) Tactics, Techniques, and Procedures (TTPs) - how attackers operate, (3) Early warning of emerging threats. Sources: commercial feeds, ISACs (Information Sharing and Analysis Centers), government (CISA), open source (OSINT). Value: detect attacks using known malicious patterns, stay current on emerging threats, learn from others' incidents. Monitoring + threat intelligence = detecting known-bad activity matching community-shared patterns."
  },
  {
    id: 11,
    question: "In Zero Trust architecture, what happens to 'implicit trust zones' like automatically trusting users because they're on the corporate network?",
    options: [
      "They remain unchanged",
      "They are eliminated - no implicit trust based on network location",
      "They are expanded to include remote users",
      "They only apply to administrators"
    ],
    correct: 1,
    explanation: "Zero Trust ELIMINATES implicit trust zones. Traditional model: 'inside the network = trusted, outside = untrusted'. Zero Trust model: 'nothing is trusted regardless of location - verify everything'. Why eliminate implicit trust: (1) Attackers who breach perimeter have free movement in trusted zones, (2) Insider threats operate within trusted zones, (3) Remote work blurs network boundaries, (4) Cloud resources exist outside traditional perimeter. Zero Trust replacement: (1) Verify every access request explicitly, (2) Authenticate and authorize continuously, (3) Use least privilege access, (4) Inspect and log all traffic, (5) Assume breach has already occurred. Location (on-network, VPN, remote) becomes ONE factor among many (identity, device health, behavior, resource sensitivity) rather than automatic trust."
  },
  {
    id: 12,
    question: "A data center requires BOTH a badge swipe AND a fingerprint scan to enter the server room. What does this combination provide?",
    options: [
      "Single-factor authentication",
      "Multi-factor authentication - something you have (badge) plus something you are (biometric)",
      "Single sign-on",
      "Password authentication"
    ],
    correct: 1,
    explanation: "Multi-factor authentication (MFA) requires two or more DIFFERENT authentication factors. The factors: (1) Something you KNOW - password, PIN, (2) Something you HAVE - badge, token, phone, smart card, (3) Something you ARE - biometrics (fingerprint, face, iris). This scenario: badge (something you HAVE) + fingerprint (something you ARE) = two different factors = MFA. Why MFA is stronger: attacker must compromise multiple different factors. Stolen badge alone won't work without fingerprint; faked fingerprint won't work without badge. NOT MFA: password + PIN (both something you know = same factor). Physical access often uses MFA for high-security areas because physical tokens can be lost/stolen and biometrics alone can have false acceptances. Combining them significantly increases security."
  },
  {
    id: 13,
    question: "An organization's policy states employees should only access information required for their specific job tasks. A marketing employee cannot access HR records even though they work in the same building. What security principle is enforced?",
    options: [
      "Maximum privilege",
      "Need to know - access limited to information necessary for job function",
      "Open access",
      "Implicit trust"
    ],
    correct: 1,
    explanation: "Need to know restricts information access to only those who require it for their job duties, regardless of clearance level or organizational position. Related to but distinct from least privilege: (1) Least privilege - minimum PERMISSIONS (what can you do), (2) Need to know - minimum INFORMATION (what can you see). Example: two employees might have same clearance level, but different information access based on job needs. Marketing needs marketing data; HR needs HR data. Neither needs the other's information. Benefits: reduces data exposure, limits breach impact, supports compliance, enforces data classification. Implementation: role-based data access, data classification labels, access approval workflows, regular access reviews. Even CEO shouldn't have access to everything - only what they need to know for their role."
  },
  {
    id: 14,
    question: "A company conducts background checks on new employees and requires all staff to sign confidentiality agreements before accessing sensitive systems. What type of security measure is this?",
    options: [
      "Technical control",
      "Administrative/Managerial control - policies and procedures managing people",
      "Physical control",
      "Compensating control"
    ],
    correct: 1,
    explanation: "Administrative (managerial) controls govern people through policies, procedures, and management oversight. Examples in scenario: (1) Background checks - vetting personnel before granting access, (2) Confidentiality agreements - legal/policy requirement. Other administrative controls: security policies, acceptable use policies, security awareness training, incident response procedures, change management processes, access review procedures, hiring/termination procedures. Characteristics: documented, management-approved, defines expected behavior, establishes consequences, requires human compliance. Administrative controls tell people WHAT to do; technical controls ENFORCE rules through technology; physical controls protect physical assets. Effective security requires all three categories working together. Background checks and agreements reduce insider threat risk through careful personnel selection and clear expectations."
  },
  {
    id: 15,
    question: "Before making changes to production systems, a company requires: documented change request, risk assessment, management approval, rollback plan, and scheduled maintenance window. What governance process is this?",
    options: [
      "Incident response",
      "Change management - formal process for controlling changes to reduce risk",
      "Vulnerability management",
      "Disaster recovery"
    ],
    correct: 1,
    explanation: "Change management is a formal process for requesting, reviewing, approving, implementing, and documenting changes to systems. Elements in scenario: (1) Documented change request - formal request with details, (2) Risk assessment - what could go wrong, (3) Management approval - authorized stakeholder sign-off, (4) Rollback plan - how to undo if problems occur, (5) Scheduled window - planned timing to minimize impact. Purpose: prevent unauthorized changes, reduce outage risk, maintain documentation, ensure proper testing, enable rollback. Many security incidents result from unauthorized or poorly planned changes. Change management categories: standard (pre-approved routine changes), normal (requires review), emergency (expedited for critical issues). Required by compliance frameworks: PCI DSS, SOX, ITIL. Audit trail shows who changed what, when, and why - critical for troubleshooting and accountability."
  }
];