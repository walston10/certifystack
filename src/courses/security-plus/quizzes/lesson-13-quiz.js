export const lesson13Quiz = [
  {
    id: 1,
    question: "An organization divides their network into separate segments for finance, HR, production, and guest access, with firewalls controlling traffic between segments. What security technique is this?",
    options: [
      "Defense in depth",
      "Network segmentation - dividing networks to limit breach impact and lateral movement",
      "Encryption",
      "Authentication"
    ],
    correct: 1,
    explanation: "NETWORK SEGMENTATION divides networks into isolated segments to limit breach impact and control data flow. Segmentation benefits: (1) Contains breaches - attacker in one segment can't easily reach others, (2) Limits lateral movement, (3) Enforces access control between areas, (4) Meets compliance requirements (PCI DSS, HIPAA), (5) Improves network performance. Segmentation types: (1) Physical - separate hardware/cabling, (2) VLANs - logical separation on same hardware, (3) Subnets - IP-based separation, (4) Microsegmentation - granular, workload-level. Common segments: DMZ (public-facing), production, development, management, guest, IoT, PCI/cardholder data. Implementation: firewalls, ACLs, VLANs, SDN. Best practice: default deny between segments, allow only required traffic. Segmentation is fundamental security control - assumed in most compliance frameworks."
  },
  {
    id: 2,
    question: "A database only accepts connections from specific application servers, users have access only to data required for their job, and sensitive fields are encrypted. What security principle is demonstrated across these controls?",
    options: [
      "Defense in depth with least privilege - multiple layers plus minimum access",
      "Single sign-on",
      "Open access policy",
      "Implicit trust"
    ],
    correct: 0,
    explanation: "This demonstrates DEFENSE IN DEPTH combined with LEAST PRIVILEGE - multiple security layers with minimal access. Controls shown: (1) Network restriction - database only accepts specific connections (network control), (2) User access limitation - only required data (least privilege), (3) Field-level encryption - protects sensitive data (data protection). Defense in depth: no single control protects everything; multiple layers ensure breach of one doesn't mean total compromise. Least privilege: users/systems get minimum access needed - limits damage from compromised accounts or insider threats. Combined effect: attacker must bypass multiple controls, and even with access, damage is limited. This approach is security best practice - never rely on single control. Example layers: network (segmentation), application (access control), data (encryption), monitoring (detection)."
  },
  {
    id: 3,
    question: "A web application rejects any user input containing SQL keywords and special characters, converting remaining input to safe formats. What mitigation technique is this?",
    options: [
      "Encryption",
      "Input validation and sanitization - checking and cleaning user input",
      "Network segmentation",
      "Access control"
    ],
    correct: 1,
    explanation: "INPUT VALIDATION AND SANITIZATION checks and cleans user input to prevent injection attacks. Validation types: (1) WHITELIST (preferred) - accept only known-good patterns, (2) BLACKLIST - block known-bad patterns (less secure, can be bypassed), (3) FORMAT VALIDATION - check type, length, format. Sanitization: clean/transform input to remove dangerous elements. Protection against: (1) SQL injection, (2) XSS (Cross-site scripting), (3) Command injection, (4) Path traversal, (5) XML injection. Best practices: (1) Validate on server-side (client-side can be bypassed), (2) Whitelist when possible, (3) Use parameterized queries for SQL, (4) Output encoding for XSS, (5) Validate at every trust boundary. Input validation is first line of defense for application security - assume all user input is potentially malicious."
  },
  {
    id: 4,
    question: "After discovering malware on several systems, the security team updates endpoint protection signatures, pushes emergency OS patches, and applies firmware updates to network devices. What mitigation category do these actions represent?",
    options: [
      "Network segmentation",
      "Patching and updates - applying fixes to address vulnerabilities",
      "Encryption",
      "Physical security"
    ],
    correct: 1,
    explanation: "PATCHING AND UPDATES apply vendor-provided fixes to address known vulnerabilities. Update types: (1) OPERATING SYSTEM - Windows Update, Linux packages, (2) APPLICATION - software patches, (3) FIRMWARE - device embedded software, (4) SIGNATURES - antivirus/IDS definitions. Patch management process: (1) Inventory systems, (2) Identify missing patches, (3) Test patches, (4) Deploy to production, (5) Verify installation, (6) Document. Prioritization: critical/actively exploited first, then high severity, then medium/low. Challenges: (1) Breaking changes from patches, (2) Downtime requirements, (3) Legacy system compatibility, (4) Testing burden. Best practices: (1) Automated patch management, (2) Defined patch windows, (3) Compensating controls for delays, (4) Rollback plans. Regular patching is fundamental security hygiene - most breaches exploit known vulnerabilities with available patches."
  },
  {
    id: 5,
    question: "A company encrypts all data stored in databases (at rest), uses TLS for all network communication (in transit), and implements memory encryption for processing sensitive data (in use). What data protection strategy is this?",
    options: [
      "Partial encryption",
      "Comprehensive data encryption - protecting data in all three states",
      "Key management",
      "Tokenization"
    ],
    correct: 1,
    explanation: "COMPREHENSIVE DATA ENCRYPTION protects data in all three states: at rest, in transit, and in use. Data states and protection: (1) AT REST - stored data (databases, files, backups). Solutions: full disk encryption, database encryption, file-level encryption. (2) IN TRANSIT - moving across networks. Solutions: TLS/SSL, VPN, SSH, HTTPS. (3) IN USE - being processed in memory. Solutions: memory encryption, secure enclaves, confidential computing. Why all three matter: (1) At rest - protects if storage stolen, (2) In transit - protects against eavesdropping, (3) In use - protects against memory attacks. Implementation: (1) AES-256 for symmetric encryption, (2) TLS 1.2+ for transport, (3) Hardware-based for high security. Encryption is essential but must be paired with proper key management - encryption without key control provides false security."
  },
  {
    id: 6,
    question: "A web server is configured with only TLS 1.3 enabled, weak ciphers disabled, unnecessary services removed, and default accounts disabled. What security process was applied?",
    options: [
      "Vulnerability scanning",
      "System hardening - reducing attack surface by securing configuration",
      "Penetration testing",
      "Incident response"
    ],
    correct: 1,
    explanation: "SYSTEM HARDENING reduces attack surface by securing configuration and removing unnecessary functionality. Hardening activities: (1) Remove unnecessary services/software, (2) Disable unused accounts (especially defaults), (3) Configure strong encryption only, (4) Apply security patches, (5) Implement least privilege, (6) Configure logging and monitoring, (7) Disable insecure protocols. Hardening guides: (1) CIS Benchmarks - detailed secure configurations, (2) DISA STIGs - DoD security guidelines, (3) Vendor hardening guides. Hardening scope: (1) Operating systems, (2) Applications, (3) Network devices, (4) Databases, (5) Cloud configurations. Process: (1) Baseline standard configuration, (2) Apply to systems (ideally automated), (3) Verify compliance, (4) Monitor for drift. Hardening is proactive - reduces vulnerabilities before attackers can exploit them."
  },
  {
    id: 7,
    question: "Before decommissioning old hard drives, a company uses software that writes random data across the entire drive multiple times, making previous data unrecoverable. What is this process called?",
    options: [
      "Formatting",
      "Secure wiping/Sanitization - making data unrecoverable before disposal",
      "Backup",
      "Archiving"
    ],
    correct: 1,
    explanation: "SECURE WIPING (Sanitization) ensures data cannot be recovered from storage media before disposal or reuse. Sanitization methods: (1) CLEARING - overwrite with zeros/ones, sufficient for most reuse, (2) PURGING - multiple overwrite passes, cryptographic erase, (3) DESTRUCTION - physical destruction (shredding, degaussing, incineration). Standards: NIST SP 800-88 defines sanitization requirements. Method by media type: (1) HDDs - overwrite or degauss, (2) SSDs - cryptographic erase or destroy (overwriting less reliable), (3) Tapes - degauss or destroy, (4) Optical - shred. Why simple deletion isn't enough: delete only removes file system reference, data remains until overwritten. Certificates of destruction: document sanitization for compliance. Risk-based approach: higher sensitivity data requires more thorough sanitization (destruction vs. wiping)."
  },
  {
    id: 8,
    question: "A legacy Windows XP system cannot be patched but must remain operational. The security team places it on an isolated network segment with strict firewall rules and implements enhanced monitoring. What approach is this?",
    options: [
      "Risk avoidance",
      "Compensating controls - alternative security for unpatchable systems",
      "Risk acceptance without mitigation",
      "System upgrade"
    ],
    correct: 1,
    explanation: "COMPENSATING CONTROLS provide alternative protection when primary controls (patching) aren't feasible. Legacy system mitigations: (1) NETWORK ISOLATION - strict segmentation limiting connectivity, (2) ENHANCED MONITORING - detect anomalies quickly, (3) APPLICATION WHITELISTING - only approved software runs, (4) VIRTUAL PATCHING - IPS rules blocking known exploits, (5) STRICT ACCESS CONTROL - minimum necessary access. Documentation requirements: (1) Business justification for legacy system, (2) Risk assessment, (3) Compensating controls implemented, (4) Residual risk acknowledgment, (5) Review timeline, (6) Migration plan. This is NOT risk acceptance without mitigation - compensating controls actively reduce risk. Common in: industrial control systems, medical devices, specialized applications with OS dependencies. Goal: maintain security while business/technical constraints are addressed."
  },
  {
    id: 9,
    question: "A company implements a policy where new code must be reviewed by a second developer, tested in a staging environment, and approved by a change board before deployment to production. What process is this?",
    options: [
      "Incident response",
      "Change management - controlled process for implementing changes",
      "Vulnerability management",
      "Asset management"
    ],
    correct: 1,
    explanation: "CHANGE MANAGEMENT controls how modifications are made to systems to prevent security issues and outages. Change management elements: (1) Request submission with justification, (2) Risk/impact assessment, (3) Testing in non-production, (4) Peer review/approval, (5) Scheduled implementation window, (6) Rollback plan, (7) Documentation, (8) Post-change verification. Security benefits: (1) Prevents unauthorized changes, (2) Ensures testing catches issues, (3) Creates audit trail, (4) Enables rollback if problems occur, (5) Reduces configuration drift. Change types: (1) Standard - pre-approved routine changes, (2) Normal - requires review process, (3) Emergency - expedited for urgent issues. Code review catches: security vulnerabilities, bugs, misconfigurations before production. Many breaches result from rushed or unauthorized changes bypassing normal process."
  },
  {
    id: 10,
    question: "A security team implements rules on firewalls and IPS that block traffic matching known exploit patterns for vulnerabilities that can't be immediately patched. What technique is this?",
    options: [
      "Encryption",
      "Virtual patching - blocking exploit traffic without modifying vulnerable systems",
      "Physical segmentation",
      "Data masking"
    ],
    correct: 1,
    explanation: "VIRTUAL PATCHING blocks exploitation attempts at network level without modifying the vulnerable application. Virtual patching methods: (1) IPS signatures matching exploit patterns, (2) WAF rules blocking attack payloads, (3) Firewall rules restricting vulnerable services. When used: (1) Patch not yet available, (2) Patch can't be applied (legacy systems), (3) Bridge until patch deployment, (4) Zero-day mitigation. Benefits: (1) Immediate protection, (2) No application changes, (3) Centralized deployment, (4) Protection for multiple systems. Limitations: (1) Only protects traffic through security device, (2) Must maintain signatures, (3) Evasion possible, (4) Not a permanent solution. Virtual patching is COMPENSATING control - provides protection while proper patching is planned. Common with WAFs for web application vulnerabilities and IPS for network exploits."
  },
  {
    id: 11,
    question: "An organization replaces password-only authentication with passwords plus a code from an authenticator app for all external access. What security control improvement is this?",
    options: [
      "Single-factor authentication",
      "Multi-factor authentication (MFA) - requiring multiple authentication factors",
      "Single sign-on",
      "Biometric-only authentication"
    ],
    correct: 1,
    explanation: "MULTI-FACTOR AUTHENTICATION (MFA) requires two or more different authentication factors. Authentication factors: (1) Something you KNOW - password, PIN, (2) Something you HAVE - phone, token, smart card, (3) Something you ARE - fingerprint, face, iris. This scenario: password (know) + authenticator code (have) = 2 factors. MFA benefits: (1) Password compromise alone doesn't grant access, (2) Significantly reduces account takeover, (3) Protects against phishing (usually), (4) Required by many compliance frameworks. Implementation: (1) SMS codes (weakest - SIM swapping risk), (2) Authenticator apps (TOTP - better), (3) Hardware tokens (strongest), (4) Push notifications, (5) Biometrics. Where to implement MFA: (1) All external/remote access, (2) Privileged accounts, (3) Sensitive applications, (4) Ideally everywhere. MFA is one of the most effective security controls - dramatically reduces successful attacks."
  },
  {
    id: 12,
    question: "A company scans all email attachments in a sandbox, blocks known malicious URLs, and strips potentially dangerous file types before delivery. What security control is this?",
    options: [
      "Data loss prevention",
      "Email security gateway - filtering malicious content from email",
      "Network segmentation",
      "Endpoint protection"
    ],
    correct: 1,
    explanation: "EMAIL SECURITY GATEWAY filters email for malicious content before reaching users. Gateway capabilities: (1) Attachment scanning - check files for malware, (2) Sandbox detonation - execute suspicious files safely, (3) URL filtering - check/rewrite malicious links, (4) Spam filtering, (5) Phishing detection, (6) Dangerous file type blocking, (7) SPF/DKIM/DMARC enforcement. Why email security matters: phishing and malicious attachments are primary attack vectors. Email protection layers: (1) Gateway filtering (perimeter), (2) Endpoint protection (if something gets through), (3) User awareness training (human firewall). Modern threats: (1) Sophisticated phishing, (2) Business email compromise, (3) Fileless malware via macros, (4) Credential harvesting links. Email security is critical control - most successful attacks start with email. Defense in depth: gateway + endpoint + user training."
  },
  {
    id: 13,
    question: "A security engineer configures systems to allow only explicitly approved applications to execute, blocking all other software including unknown malware. What control is this?",
    options: [
      "Blacklisting",
      "Application whitelisting/allowlisting - permit only approved applications",
      "Antivirus only",
      "Sandboxing"
    ],
    correct: 1,
    explanation: "APPLICATION WHITELISTING (Allowlisting) permits only explicitly approved applications to run, blocking everything else. Whitelist vs Blacklist: (1) WHITELIST - default deny, only approved runs (more secure, more management), (2) BLACKLIST - default allow, block known-bad (easier, less protection). Whitelist advantages: (1) Blocks unknown malware (no signature needed), (2) Prevents unauthorized software, (3) Strong protection against zero-days, (4) Limits shadow IT. Whitelist challenges: (1) Initial effort to identify legitimate software, (2) Managing updates/changes, (3) User frustration if legitimate software blocked, (4) Needs exception process. Implementation: (1) Build baseline of approved applications, (2) Hash or certificate-based verification, (3) Monitor for blocks, (4) Managed exception process. Solutions: Windows AppLocker, Software Restriction Policies, third-party tools. Highly effective but requires operational investment."
  },
  {
    id: 14,
    question: "After a vulnerability is announced, the security team immediately implements firewall rules to block the exploit traffic, buying time until the vendor patch can be tested and deployed. What is this time period called?",
    options: [
      "Patch window",
      "Risk window/exposure window - time between vulnerability and remediation",
      "Maintenance window",
      "Detection window"
    ],
    correct: 1,
    explanation: "RISK WINDOW (Exposure Window) is the time between vulnerability disclosure and remediation during which systems are vulnerable. Risk window timeline: (1) Vulnerability exists (unknown), (2) Vulnerability discovered, (3) Disclosed/announced, (4) Patch released, (5) Patch tested, (6) Patch deployed - window closes. Why risk windows matter: attackers race to exploit before patches deploy. Weaponization often happens within hours/days of disclosure. Reducing risk window: (1) Rapid patch testing and deployment, (2) Virtual patching as bridge, (3) Network controls to limit exposure, (4) Enhanced monitoring during window. Emergency response: critical vulnerabilities actively exploited may justify emergency patching without full testing. Metrics: time-to-patch (how quickly patches deploy after release) measures risk window management. Goal: minimize exposure window through combination of speed and compensating controls."
  },
  {
    id: 15,
    question: "A database administrator implements field-level encryption, access logging, activity monitoring, and row-level security based on user roles. What protection approach does this represent?",
    options: [
      "Network-only security",
      "Data-centric security - protecting data directly regardless of location",
      "Perimeter security only",
      "Physical security"
    ],
    correct: 1,
    explanation: "DATA-CENTRIC SECURITY protects data directly through encryption, access controls, and monitoring regardless of where data resides. Data-centric controls: (1) ENCRYPTION - field/column/row level, (2) ACCESS CONTROL - row-level security, data masking, (3) MONITORING - activity logging, anomaly detection, (4) CLASSIFICATION - identify sensitive data, (5) DLP - prevent unauthorized data movement. Why data-centric matters: (1) Data is the ultimate target, (2) Perimeter doesn't protect insider threats, (3) Data moves across systems/cloud, (4) Compliance requires data protection. Data-centric vs perimeter: (1) Perimeter - protect network boundary, (2) Data-centric - protect data wherever it goes. Modern approach: both. Data travels to cloud, devices, partners - must be protected at data level. Field-level encryption: sensitive columns encrypted with different keys, database admin sees encrypted data unless authorized. This defense-in-depth at data layer."
  }
];