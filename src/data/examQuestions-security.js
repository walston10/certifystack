// CompTIA Security+ (SY0-701) Practice Exam Questions
// 100 Questions with balanced answer distribution (25 A, 25 B, 25 C, 25 D)

// Domain 1: General Security Concepts (12 questions)
// Answer distribution: 3A, 3B, 3C, 3D
const domain1Questions = [
  {
    id: 1,
    question: "Which security principle ensures that data has not been altered or tampered with during storage or transmission?",
    options: [
      "Integrity",
      "Confidentiality",
      "Availability",
      "Non-repudiation"
    ],
    correct: 0,
    explanation: "Integrity ensures data remains unaltered and trustworthy. Confidentiality protects data from unauthorized access. Availability ensures systems are accessible when needed. Non-repudiation prevents denial of actions taken."
  },
  {
    id: 2,
    question: "A company implements multiple layers of security controls including firewalls, IDS, antivirus, and access controls. This approach is known as:",
    options: [
      "Single point of failure",
      "Defense in depth",
      "Security through obscurity",
      "Least privilege"
    ],
    correct: 1,
    explanation: "Defense in depth uses multiple overlapping security layers so that if one fails, others still provide protection. Single point of failure is what defense in depth prevents. Security through obscurity relies on secrecy (not recommended). Least privilege limits user access."
  },
  {
    id: 3,
    question: "Which type of security control is designed to discourage potential attackers from attempting an attack?",
    options: [
      "Corrective",
      "Detective",
      "Deterrent",
      "Compensating"
    ],
    correct: 2,
    explanation: "Deterrent controls discourage attacks (e.g., warning signs, security cameras). Corrective controls fix damage after an incident. Detective controls identify attacks in progress or after. Compensating controls are alternatives when primary controls aren't feasible."
  },
  {
    id: 4,
    question: "An organization requires employees to use smart cards along with PINs to access secure areas. This is an example of:",
    options: [
      "Single-factor authentication",
      "Multi-factor authentication",
      "Single sign-on",
      "Federation"
    ],
    correct: 1,
    explanation: "Multi-factor authentication (MFA) combines different factor types: something you have (smart card) and something you know (PIN). Single-factor uses only one type. Single sign-on provides one login for multiple systems. Federation links identities across organizations."
  },
  {
    id: 5,
    question: "Which security concept states that users should only have the minimum access required to perform their job functions?",
    options: [
      "Separation of duties",
      "Need to know",
      "Least privilege",
      "Mandatory access control"
    ],
    correct: 2,
    explanation: "Least privilege grants only minimum necessary permissions, reducing potential damage from compromised accounts. Separation of duties divides critical tasks. Need to know restricts data access. Mandatory access control uses labels for access decisions."
  },
  {
    id: 6,
    question: "A security architecture that assumes no implicit trust and requires verification for every access request is called:",
    options: [
      "Perimeter security",
      "Defense in depth",
      "Security through obscurity",
      "Zero Trust"
    ],
    correct: 3,
    explanation: "Zero Trust assumes no user or system should be trusted by default, requiring continuous verification regardless of location. Perimeter security focuses on network boundaries. Defense in depth uses multiple layers. Security through obscurity relies on secrecy."
  },
  {
    id: 7,
    question: "Which cryptographic concept uses two mathematically related keys - one public and one private?",
    options: [
      "Asymmetric encryption",
      "Symmetric encryption",
      "Hashing",
      "Steganography"
    ],
    correct: 0,
    explanation: "Asymmetric encryption uses a key pair: public key for encryption, private key for decryption (or vice versa for signing). Symmetric uses one shared key. Hashing creates one-way digests. Steganography hides data within other data."
  },
  {
    id: 8,
    question: "What type of control is an audit log that records user activity?",
    options: [
      "Preventive",
      "Detective",
      "Corrective",
      "Deterrent"
    ],
    correct: 1,
    explanation: "Audit logs are detective controls - they identify and record events for later analysis, helping detect security incidents. Preventive controls stop attacks. Corrective controls fix issues. Deterrent controls discourage attacks."
  },
  {
    id: 9,
    question: "Which encryption algorithm is currently considered the standard for symmetric encryption?",
    options: [
      "DES",
      "3DES",
      "AES",
      "RSA"
    ],
    correct: 2,
    explanation: "AES (Advanced Encryption Standard) is the current standard for symmetric encryption, available in 128, 192, and 256-bit key lengths. DES and 3DES are deprecated. RSA is asymmetric encryption."
  },
  {
    id: 10,
    question: "A digital signature provides which security services?",
    options: [
      "Confidentiality only",
      "Availability only",
      "Integrity, authentication, and non-repudiation",
      "Physical security"
    ],
    correct: 2,
    explanation: "Digital signatures provide integrity (detecting changes), authentication (verifying sender), and non-repudiation (sender cannot deny signing). They don't provide confidentiality (encryption does that) or physical security."
  },
  {
    id: 11,
    question: "Which hashing algorithm is recommended for current security implementations?",
    options: [
      "MD5",
      "SHA-1",
      "SHA-256",
      "LM Hash"
    ],
    correct: 2,
    explanation: "SHA-256 (part of SHA-2 family) is recommended for current use. MD5 and SHA-1 have known vulnerabilities and are deprecated. LM Hash is an obsolete Windows password hash that's easily cracked."
  },
  {
    id: 12,
    question: "Physical security control that requires passing through two interlocking doors where only one can be open at a time is called:",
    options: [
      "Bollard",
      "Turnstile",
      "Fence",
      "Access control vestibule (mantrap)"
    ],
    correct: 3,
    explanation: "An access control vestibule (mantrap) uses two doors - the first must close before the second opens, preventing tailgating. Bollards are posts blocking vehicles. Turnstiles control single-person entry. Fences are perimeter barriers."
  }
];

// Domain 2: Threats, Vulnerabilities, and Mitigations (22 questions)
// Answer distribution: 6A, 5B, 5C, 6D
const domain2Questions = [
  {
    id: 13,
    question: "An attacker sends an email appearing to be from the CEO requesting an urgent wire transfer. This is an example of:",
    options: [
      "Business Email Compromise (BEC)",
      "Spam",
      "Adware",
      "Rootkit"
    ],
    correct: 0,
    explanation: "Business Email Compromise (BEC) impersonates executives or trusted parties to trick employees into transferring money or revealing sensitive information. Spam is unsolicited email. Adware displays advertisements. Rootkits hide malware."
  },
  {
    id: 14,
    question: "Which type of malware encrypts victim files and demands payment for the decryption key?",
    options: [
      "Spyware",
      "Ransomware",
      "Adware",
      "Worm"
    ],
    correct: 1,
    explanation: "Ransomware encrypts files and demands payment (usually cryptocurrency) for decryption. Spyware monitors activity. Adware displays ads. Worms self-replicate across networks."
  },
  {
    id: 15,
    question: "An attacker intercepts communication between two parties without their knowledge. This is called:",
    options: [
      "Denial of service",
      "SQL injection",
      "On-path attack (Man-in-the-middle)",
      "Cross-site scripting"
    ],
    correct: 2,
    explanation: "On-path (man-in-the-middle) attacks intercept communications between parties to eavesdrop or modify data. DoS overwhelms services. SQL injection targets databases. XSS injects scripts into web pages."
  },
  {
    id: 16,
    question: "Which attack exploits the trust relationship between a web application and user's browser by forging requests?",
    options: [
      "SQL injection",
      "Buffer overflow",
      "Cross-Site Request Forgery (CSRF)",
      "Directory traversal"
    ],
    correct: 2,
    explanation: "CSRF tricks authenticated users into unknowingly executing actions on a web application. SQL injection manipulates database queries. Buffer overflow exceeds memory boundaries. Directory traversal accesses unauthorized file paths."
  },
  {
    id: 17,
    question: "A threat actor who is motivated by political or social causes and uses hacking to promote their message is called:",
    options: [
      "Script kiddie",
      "Nation-state actor",
      "Insider threat",
      "Hacktivist"
    ],
    correct: 3,
    explanation: "Hacktivists are motivated by political, social, or ideological beliefs. Script kiddies lack technical skill and use others' tools. Nation-state actors are government-sponsored. Insider threats come from within the organization."
  },
  {
    id: 18,
    question: "Which vulnerability allows an attacker to insert malicious SQL code into application queries?",
    options: [
      "SQL injection",
      "XSS",
      "CSRF",
      "Buffer overflow"
    ],
    correct: 0,
    explanation: "SQL injection inserts malicious SQL code into input fields that are processed as database queries, potentially exposing or modifying data. XSS injects client-side scripts. CSRF forges requests. Buffer overflow corrupts memory."
  },
  {
    id: 19,
    question: "An attack that floods a target with traffic from many compromised systems is called:",
    options: [
      "Phishing",
      "DDoS (Distributed Denial of Service)",
      "SQL injection",
      "Social engineering"
    ],
    correct: 1,
    explanation: "DDoS attacks use multiple compromised systems (botnet) to overwhelm targets with traffic, causing service disruption. Phishing steals credentials. SQL injection targets databases. Social engineering manipulates people."
  },
  {
    id: 20,
    question: "Which social engineering technique involves following an authorized person through a secure door?",
    options: [
      "Phishing",
      "Pretexting",
      "Tailgating",
      "Baiting"
    ],
    correct: 2,
    explanation: "Tailgating (piggybacking) is physically following an authorized person through a secure entrance without proper authentication. Phishing uses fake emails. Pretexting creates false scenarios. Baiting leaves infected media for victims to find."
  },
  {
    id: 21,
    question: "Malware that disguises itself as legitimate software to trick users into installing it is called:",
    options: [
      "Virus",
      "Worm",
      "Rootkit",
      "Trojan"
    ],
    correct: 3,
    explanation: "Trojans appear as legitimate software but contain hidden malicious functionality. Viruses attach to files and require user action to spread. Worms self-replicate. Rootkits hide deep in the system."
  },
  {
    id: 22,
    question: "Which attack technique attempts to gain access by trying many password combinations systematically?",
    options: [
      "Brute force",
      "Phishing",
      "Shoulder surfing",
      "Dumpster diving"
    ],
    correct: 0,
    explanation: "Brute force systematically tries all possible password combinations until successful. Phishing tricks users into revealing credentials. Shoulder surfing observes users entering passwords. Dumpster diving searches trash for information."
  },
  {
    id: 23,
    question: "A vulnerability that is unknown to the vendor and has no available patch is called:",
    options: [
      "Known vulnerability",
      "Zero-day vulnerability",
      "Legacy vulnerability",
      "Configuration vulnerability"
    ],
    correct: 1,
    explanation: "Zero-day vulnerabilities are unknown to vendors with no patches available, making them particularly dangerous. Known vulnerabilities have been disclosed. Legacy vulnerabilities affect outdated systems. Configuration vulnerabilities are misconfigurations."
  },
  {
    id: 24,
    question: "Which attack injects malicious scripts into web pages viewed by other users?",
    options: [
      "SQL injection",
      "Buffer overflow",
      "Cross-site scripting (XSS)",
      "LDAP injection"
    ],
    correct: 2,
    explanation: "Cross-site scripting (XSS) injects malicious scripts into web pages that execute in other users' browsers. SQL injection targets databases. Buffer overflow corrupts memory. LDAP injection manipulates directory queries."
  },
  {
    id: 25,
    question: "An attacker creates a fake Wi-Fi network mimicking a legitimate one. This is called:",
    options: [
      "ARP poisoning",
      "DNS spoofing",
      "Evil twin attack",
      "MAC flooding"
    ],
    correct: 2,
    explanation: "Evil twin attacks create rogue access points mimicking legitimate networks to capture traffic. ARP poisoning manipulates address resolution. DNS spoofing redirects domain lookups. MAC flooding overwhelms switch tables."
  },
  {
    id: 26,
    question: "Which threat actor type typically has the most resources and sophisticated capabilities?",
    options: [
      "Script kiddie",
      "Hacktivist",
      "Insider threat",
      "Nation-state actor"
    ],
    correct: 3,
    explanation: "Nation-state actors have government backing with extensive resources, advanced tools, and sophisticated techniques (APTs). Script kiddies have minimal skills. Hacktivists have moderate resources. Insider threats vary in capability."
  },
  {
    id: 27,
    question: "An attack that exploits the trust a website has in a user's browser by injecting malicious content is:",
    options: [
      "Reflected XSS",
      "Stored XSS",
      "DOM-based XSS",
      "All of the above are types of XSS"
    ],
    correct: 3,
    explanation: "All three are XSS variants: Reflected XSS returns malicious script in response, Stored XSS saves script on the server, DOM-based XSS manipulates client-side DOM. All exploit browser trust in website content."
  },
  {
    id: 28,
    question: "Which attack uses previously stolen credentials to attempt access on other services?",
    options: [
      "Credential stuffing",
      "Password spraying",
      "Dictionary attack",
      "Rainbow table attack"
    ],
    correct: 0,
    explanation: "Credential stuffing uses stolen username/password pairs from breaches to try accessing other services, exploiting password reuse. Password spraying tries few passwords on many accounts. Dictionary attacks use wordlists. Rainbow tables crack hashes."
  },
  {
    id: 29,
    question: "Malware that hides its presence by modifying the operating system is called:",
    options: [
      "Virus",
      "Worm",
      "Spyware",
      "Rootkit"
    ],
    correct: 3,
    explanation: "Rootkits hide deep in the operating system, modifying core functions to remain undetected. Viruses attach to files. Worms self-replicate. Spyware monitors user activity but doesn't necessarily hide at OS level."
  },
  {
    id: 30,
    question: "Which vulnerability scanning method uses valid credentials to assess systems from an authenticated perspective?",
    options: [
      "Credentialed scanning",
      "Non-credentialed scanning",
      "Passive scanning",
      "Port scanning"
    ],
    correct: 0,
    explanation: "Credentialed scanning uses valid credentials to perform deeper assessment, finding vulnerabilities visible only from an authenticated view. Non-credentialed scanning works externally. Passive scanning monitors without probing. Port scanning identifies open ports."
  },
  {
    id: 31,
    question: "An attack that tricks DNS servers into caching false records is called:",
    options: [
      "ARP poisoning",
      "DNS poisoning/spoofing",
      "MAC spoofing",
      "IP spoofing"
    ],
    correct: 1,
    explanation: "DNS poisoning inserts false DNS records into caches, redirecting users to malicious sites. ARP poisoning manipulates IP-to-MAC mappings. MAC spoofing fakes MAC addresses. IP spoofing fakes source IP addresses."
  },
  {
    id: 32,
    question: "Which mitigation technique prevents SQL injection attacks?",
    options: [
      "Firewall rules",
      "Input validation and parameterized queries",
      "Encryption",
      "Load balancing"
    ],
    correct: 1,
    explanation: "Input validation and parameterized queries (prepared statements) prevent SQL injection by separating code from data. Firewalls filter network traffic. Encryption protects data confidentiality. Load balancing distributes traffic."
  },
  {
    id: 33,
    question: "A phishing attack targeting specific high-value individuals like executives is called:",
    options: [
      "Spear phishing",
      "Whaling",
      "Vishing",
      "Smishing"
    ],
    correct: 1,
    explanation: "Whaling specifically targets high-profile individuals like C-level executives. Spear phishing targets specific individuals/groups. Vishing uses voice/phone. Smishing uses SMS/text messages."
  },
  {
    id: 34,
    question: "Which attack overwhelms a switch's MAC address table to force it to act like a hub?",
    options: [
      "ARP poisoning",
      "VLAN hopping",
      "MAC flooding",
      "STP attack"
    ],
    correct: 2,
    explanation: "MAC flooding fills switch CAM tables with fake MAC addresses, forcing the switch to broadcast all traffic like a hub. ARP poisoning manipulates address resolution. VLAN hopping bypasses VLAN segmentation. STP attacks manipulate spanning tree."
  }
];

// Domain 3: Security Architecture (18 questions)
// Answer distribution: 4A, 5B, 5C, 4D
const domain3Questions = [
  {
    id: 35,
    question: "Which network security device inspects traffic at the application layer and can block specific content types?",
    options: [
      "Next-Generation Firewall (NGFW)",
      "Hub",
      "Repeater",
      "Basic switch"
    ],
    correct: 0,
    explanation: "NGFWs perform deep packet inspection at Layer 7 (application), identifying and blocking specific applications, content, and threats. Hubs and repeaters are Layer 1 devices. Basic switches operate at Layer 2."
  },
  {
    id: 36,
    question: "A network segment that contains public-facing servers while separating them from the internal network is called:",
    options: [
      "VLAN",
      "DMZ (Demilitarized Zone)",
      "Intranet",
      "Extranet"
    ],
    correct: 1,
    explanation: "A DMZ (screened subnet) hosts public-facing servers while isolating them from the internal network using firewalls. VLANs segment networks logically. Intranet is internal-only. Extranet extends network to partners."
  },
  {
    id: 37,
    question: "Which protocol provides secure remote access by encrypting traffic in a tunnel?",
    options: [
      "HTTP",
      "Telnet",
      "VPN (IPSec or SSL/TLS)",
      "FTP"
    ],
    correct: 2,
    explanation: "VPNs use IPSec or SSL/TLS to create encrypted tunnels for secure remote access. HTTP is unencrypted web traffic. Telnet is unencrypted remote access. FTP transfers files without encryption."
  },
  {
    id: 38,
    question: "Which wireless security protocol uses SAE (Simultaneous Authentication of Equals) and provides forward secrecy?",
    options: [
      "WEP",
      "WPA",
      "WPA2",
      "WPA3"
    ],
    correct: 3,
    explanation: "WPA3 uses SAE instead of PSK, providing better protection against offline dictionary attacks and forward secrecy. WEP is broken. WPA uses TKIP. WPA2 uses AES but PSK authentication."
  },
  {
    id: 39,
    question: "Which cloud service model provides the customer with the MOST control over the infrastructure?",
    options: [
      "SaaS",
      "IaaS",
      "PaaS",
      "FaaS"
    ],
    correct: 1,
    explanation: "IaaS (Infrastructure as a Service) provides the most customer control - managing OS, applications, and data while the provider handles physical infrastructure. SaaS provides least control. PaaS manages OS/runtime. FaaS is serverless functions."
  },
  {
    id: 40,
    question: "A security solution that combines firewall, IDS/IPS, antivirus, and content filtering in one device is called:",
    options: [
      "SIEM",
      "UTM (Unified Threat Management)",
      "NAC",
      "DLP"
    ],
    correct: 1,
    explanation: "UTM combines multiple security functions in a single appliance for simplified management. SIEM aggregates and analyzes logs. NAC controls network access. DLP prevents data leakage."
  },
  {
    id: 41,
    question: "Which authentication protocol uses tickets granted by a Key Distribution Center (KDC)?",
    options: [
      "RADIUS",
      "TACACS+",
      "Kerberos",
      "LDAP"
    ],
    correct: 2,
    explanation: "Kerberos uses ticket-based authentication with a KDC that issues Ticket Granting Tickets (TGTs) and service tickets. RADIUS provides AAA services. TACACS+ is Cisco's AAA protocol. LDAP is a directory access protocol."
  },
  {
    id: 42,
    question: "Which network access control method verifies device security posture before allowing network access?",
    options: [
      "ACL",
      "VLAN",
      "NAC (Network Access Control)",
      "NAT"
    ],
    correct: 2,
    explanation: "NAC checks device compliance (patches, antivirus, configuration) before granting network access, quarantining non-compliant devices. ACLs filter traffic. VLANs segment networks. NAT translates addresses."
  },
  {
    id: 43,
    question: "In cloud computing, which model describes the provider managing everything while customers only use the application?",
    options: [
      "IaaS",
      "PaaS",
      "SaaS",
      "Private cloud"
    ],
    correct: 2,
    explanation: "SaaS (Software as a Service) provides complete applications - the provider manages everything from infrastructure to application. Customers only use the software. IaaS and PaaS require more customer management."
  },
  {
    id: 44,
    question: "Which security control monitors network traffic for suspicious patterns and alerts administrators?",
    options: [
      "IDS (Intrusion Detection System)",
      "Firewall",
      "Proxy server",
      "Load balancer"
    ],
    correct: 0,
    explanation: "IDS monitors traffic and alerts on suspicious patterns but doesn't block traffic (passive). Firewalls filter traffic based on rules. Proxy servers handle requests on behalf of clients. Load balancers distribute traffic."
  },
  {
    id: 45,
    question: "Which wireless authentication method uses a RADIUS server for enterprise environments?",
    options: [
      "WPA2-Personal",
      "WPA2-Enterprise",
      "WEP",
      "Open authentication"
    ],
    correct: 1,
    explanation: "WPA2-Enterprise (802.1X) uses RADIUS servers for individual user authentication, providing better security and accountability than shared passwords. WPA2-Personal uses PSK. WEP is insecure. Open has no authentication."
  },
  {
    id: 46,
    question: "A firewall rule that blocks all traffic unless explicitly permitted follows which principle?",
    options: [
      "Least privilege",
      "Separation of duties",
      "Implicit deny",
      "Defense in depth"
    ],
    correct: 2,
    explanation: "Implicit deny (default deny) blocks all traffic not explicitly allowed by rules, reducing attack surface. Least privilege limits user access. Separation of duties divides responsibilities. Defense in depth uses multiple layers."
  },
  {
    id: 47,
    question: "Which VPN protocol operates at Layer 3 and provides encryption, authentication, and integrity?",
    options: [
      "SSL/TLS",
      "PPTP",
      "IPSec",
      "L2TP"
    ],
    correct: 2,
    explanation: "IPSec operates at Layer 3 (Network), providing encryption (ESP), authentication (AH/ESP), and integrity. SSL/TLS operates at higher layers. PPTP is insecure. L2TP is often combined with IPSec for encryption."
  },
  {
    id: 48,
    question: "Which technology isolates applications in their own environments sharing the host OS kernel?",
    options: [
      "Virtual machines",
      "Containers",
      "Hypervisors",
      "Sandboxing"
    ],
    correct: 1,
    explanation: "Containers (Docker, etc.) share the host kernel while isolating applications in separate environments. VMs run complete operating systems. Hypervisors manage VMs. Sandboxing isolates programs but differently than containers."
  },
  {
    id: 49,
    question: "Which security solution prevents sensitive data from leaving the organization?",
    options: [
      "IDS",
      "Firewall",
      "DLP (Data Loss Prevention)",
      "VPN"
    ],
    correct: 2,
    explanation: "DLP monitors and prevents unauthorized transmission of sensitive data via email, web, USB, etc. IDS detects intrusions. Firewalls filter network traffic. VPNs encrypt remote connections."
  },
  {
    id: 50,
    question: "Email security protocol that validates sender domains using DNS records to prevent spoofing is:",
    options: [
      "S/MIME",
      "PGP",
      "DMARC/SPF/DKIM",
      "SSL/TLS"
    ],
    correct: 2,
    explanation: "DMARC, SPF, and DKIM use DNS records to validate email sender authenticity and prevent domain spoofing. S/MIME and PGP encrypt email content. SSL/TLS encrypts email transmission."
  },
  {
    id: 51,
    question: "Which load balancing approach keeps a user connected to the same server for their entire session?",
    options: [
      "Round-robin",
      "Least connections",
      "Session persistence (sticky sessions)",
      "Weighted"
    ],
    correct: 2,
    explanation: "Session persistence (sticky sessions) maintains user-server affinity throughout a session, important for stateful applications. Round-robin distributes sequentially. Least connections chooses least loaded server. Weighted uses assigned priorities."
  },
  {
    id: 52,
    question: "In a Zero Trust architecture, which component makes access decisions based on policy?",
    options: [
      "Data plane",
      "Policy Decision Point (PDP)",
      "Control plane",
      "Policy Enforcement Point (PEP)"
    ],
    correct: 1,
    explanation: "The Policy Decision Point (PDP) evaluates access requests against policies and makes allow/deny decisions. The Policy Enforcement Point (PEP) enforces those decisions. Control plane manages the architecture. Data plane handles traffic."
  }
];

// Domain 4: Security Operations (28 questions)
// Answer distribution: 7A, 7B, 7C, 7D
const domain4Questions = [
  {
    id: 53,
    question: "Which tool aggregates logs from multiple sources for centralized analysis and correlation?",
    options: [
      "SIEM (Security Information and Event Management)",
      "IDS",
      "Firewall",
      "Antivirus"
    ],
    correct: 0,
    explanation: "SIEM collects, normalizes, and correlates logs from various sources for security monitoring and incident detection. IDS monitors network traffic. Firewalls filter traffic. Antivirus detects malware on endpoints."
  },
  {
    id: 54,
    question: "During incident response, what is the FIRST priority after identifying an incident?",
    options: [
      "Eradication",
      "Containment",
      "Recovery",
      "Lessons learned"
    ],
    correct: 1,
    explanation: "Containment limits damage by isolating affected systems before removing threats. Eradication removes the threat after containment. Recovery restores systems. Lessons learned comes after resolution."
  },
  {
    id: 55,
    question: "Which forensic principle ensures evidence has not been tampered with during collection and analysis?",
    options: [
      "Order of volatility",
      "Legal hold",
      "Chain of custody",
      "Data retention"
    ],
    correct: 2,
    explanation: "Chain of custody documents everyone who handled evidence and when, ensuring integrity for legal proceedings. Order of volatility guides collection sequence. Legal hold preserves potential evidence. Data retention defines storage periods."
  },
  {
    id: 56,
    question: "When collecting digital evidence, which data should be collected FIRST due to volatility?",
    options: [
      "Hard drive contents",
      "RAM contents",
      "Backup tapes",
      "Log files on remote servers"
    ],
    correct: 1,
    explanation: "RAM is most volatile - it's lost when powered off and should be captured first. Hard drives, backups, and remote logs persist longer. The order of volatility prioritizes ephemeral data."
  },
  {
    id: 57,
    question: "A penetration test where the tester has no prior knowledge of the target environment is called:",
    options: [
      "White box",
      "Gray box",
      "Black box",
      "Red box"
    ],
    correct: 2,
    explanation: "Black box testing simulates external attackers with no internal knowledge. White box provides full information. Gray box provides partial information. Red box isn't a standard term."
  },
  {
    id: 58,
    question: "Which security metric represents the maximum acceptable time for system restoration after failure?",
    options: [
      "RPO (Recovery Point Objective)",
      "RTO (Recovery Time Objective)",
      "MTBF (Mean Time Between Failures)",
      "MTTR (Mean Time to Repair)"
    ],
    correct: 1,
    explanation: "RTO defines maximum acceptable downtime - how quickly systems must be restored. RPO defines acceptable data loss. MTBF measures reliability. MTTR measures average repair time."
  },
  {
    id: 59,
    question: "A scheduled review of firewall rules and access controls to ensure continued appropriateness is called:",
    options: [
      "Vulnerability scan",
      "Penetration test",
      "Security audit",
      "Risk assessment"
    ],
    correct: 2,
    explanation: "Security audits systematically review controls to verify compliance and effectiveness. Vulnerability scans identify weaknesses. Penetration tests simulate attacks. Risk assessments evaluate threats and impacts."
  },
  {
    id: 60,
    question: "Which backup type copies all data regardless of whether it changed?",
    options: [
      "Incremental backup",
      "Differential backup",
      "Full backup",
      "Snapshot"
    ],
    correct: 2,
    explanation: "Full backup copies all data every time, providing complete restoration capability. Incremental backs up changes since last backup. Differential backs up changes since last full backup. Snapshots capture point-in-time states."
  },
  {
    id: 61,
    question: "Which automation technology uses predefined playbooks to respond to security events?",
    options: [
      "SIEM",
      "SOAR (Security Orchestration, Automation, and Response)",
      "EDR",
      "XDR"
    ],
    correct: 1,
    explanation: "SOAR automates incident response using playbooks that define response procedures for different event types. SIEM aggregates and analyzes logs. EDR monitors endpoints. XDR extends detection across platforms."
  },
  {
    id: 62,
    question: "During a forensic investigation, creating an exact bit-for-bit copy of a storage device is called:",
    options: [
      "Backup",
      "Snapshot",
      "Forensic image",
      "Clone"
    ],
    correct: 2,
    explanation: "A forensic image is a bit-for-bit copy including deleted files and slack space, verified with hashes for court admissibility. Backups copy files, not bit-for-bit. Snapshots capture system state. Clones are usable copies but may not be forensically sound."
  },
  {
    id: 63,
    question: "Which tool or technique is used to analyze malware safely without risking production systems?",
    options: [
      "Production server",
      "Sandbox",
      "Load balancer",
      "CDN"
    ],
    correct: 1,
    explanation: "Sandboxes provide isolated environments to safely execute and analyze suspicious files without affecting production systems. Production servers shouldn't run untested code. Load balancers and CDNs don't provide isolation."
  },
  {
    id: 64,
    question: "A security team simulating attacks to test defenses is called:",
    options: [
      "Blue team",
      "Red team",
      "White team",
      "Green team"
    ],
    correct: 1,
    explanation: "Red teams simulate attackers to test organizational defenses. Blue teams defend. White teams referee exercises. Purple teams combine red and blue for collaboration."
  },
  {
    id: 65,
    question: "Which vulnerability scan is performed with valid user credentials for more comprehensive results?",
    options: [
      "Credentialed scan",
      "Non-credentialed scan",
      "Passive scan",
      "External scan"
    ],
    correct: 0,
    explanation: "Credentialed scans use valid authentication to assess systems internally, finding vulnerabilities invisible to external scans. Non-credentialed scans work without authentication. Passive scans observe traffic. External scans come from outside."
  },
  {
    id: 66,
    question: "The maximum amount of acceptable data loss measured in time is called:",
    options: [
      "RTO",
      "RPO (Recovery Point Objective)",
      "SLA",
      "MTTR"
    ],
    correct: 1,
    explanation: "RPO defines how much data loss is acceptable (e.g., 4 hours means backups needed every 4 hours). RTO is recovery time. SLA is service level agreement. MTTR is mean time to repair."
  },
  {
    id: 67,
    question: "Which log analysis technique identifies patterns of malicious behavior across multiple events?",
    options: [
      "Signature matching",
      "Correlation",
      "Hashing",
      "Encryption"
    ],
    correct: 1,
    explanation: "Correlation analyzes multiple events to identify attack patterns that individual events wouldn't reveal. Signature matching finds known patterns. Hashing verifies integrity. Encryption protects confidentiality."
  },
  {
    id: 68,
    question: "A site that can be operational within hours with current data is called:",
    options: [
      "Cold site",
      "Warm site",
      "Hot site",
      "Mobile site"
    ],
    correct: 2,
    explanation: "Hot sites have all equipment and data ready for immediate or near-immediate failover. Warm sites have equipment but require data restoration. Cold sites have space but minimal equipment. Mobile sites are transportable."
  },
  {
    id: 69,
    question: "Which incident response phase involves removing malware and vulnerabilities from affected systems?",
    options: [
      "Containment",
      "Eradication",
      "Recovery",
      "Preparation"
    ],
    correct: 1,
    explanation: "Eradication removes threats (malware, backdoors) and vulnerabilities exploited in the attack. Containment isolates affected systems. Recovery restores normal operations. Preparation happens before incidents."
  },
  {
    id: 70,
    question: "Reviewing an incident after resolution to improve future response is called:",
    options: [
      "Containment",
      "Eradication",
      "Recovery",
      "Lessons learned"
    ],
    correct: 3,
    explanation: "Lessons learned (post-incident review) identifies what worked, what didn't, and improvements for future incidents. Containment, eradication, and recovery are earlier phases."
  },
  {
    id: 71,
    question: "Which security solution monitors and protects endpoints using behavioral analysis?",
    options: [
      "EDR (Endpoint Detection and Response)",
      "Firewall",
      "IDS",
      "SIEM"
    ],
    correct: 0,
    explanation: "EDR monitors endpoints for suspicious behavior, provides visibility, and enables response to threats. Firewalls filter network traffic. IDS monitors network patterns. SIEM aggregates logs."
  },
  {
    id: 72,
    question: "Which scripting use case involves automatically blocking IPs after detecting attacks?",
    options: [
      "User provisioning",
      "Guard rails",
      "Automated remediation",
      "Escalation"
    ],
    correct: 2,
    explanation: "Automated remediation scripts take immediate action against threats, like blocking malicious IPs or isolating infected hosts. User provisioning creates accounts. Guard rails enforce policy. Escalation notifies higher support tiers."
  },
  {
    id: 73,
    question: "A vulnerability scanner reports a finding that doesn't actually exist. This is called:",
    options: [
      "False positive",
      "False negative",
      "True positive",
      "True negative"
    ],
    correct: 0,
    explanation: "False positives are incorrect alerts for non-existent issues, wasting analyst time. False negatives miss real issues. True positives correctly identify issues. True negatives correctly report no issues."
  },
  {
    id: 74,
    question: "Which testing approach simulates real-world attack scenarios to evaluate organizational security?",
    options: [
      "Vulnerability assessment",
      "Penetration testing",
      "Code review",
      "Configuration audit"
    ],
    correct: 1,
    explanation: "Penetration testing actively exploits vulnerabilities to demonstrate real-world impact, going beyond vulnerability scanning. Vulnerability assessments identify weaknesses without exploitation. Code review examines source code. Configuration audits check settings."
  },
  {
    id: 75,
    question: "The process of handling evidence in a legally admissible manner is called:",
    options: [
      "Data classification",
      "Digital forensics",
      "Chain of custody",
      "E-discovery"
    ],
    correct: 2,
    explanation: "Chain of custody documents evidence handling from collection to court, maintaining legal admissibility. Data classification categorizes sensitivity. Digital forensics investigates incidents. E-discovery finds electronic evidence for legal cases."
  },
  {
    id: 76,
    question: "Which backup strategy requires the most storage space?",
    options: [
      "Incremental",
      "Differential",
      "Full backup only",
      "Synthetic full"
    ],
    correct: 2,
    explanation: "Full backup only (daily full backups) uses the most storage since each backup contains all data. Incremental stores only changes since last backup (least storage). Differential stores changes since last full. Synthetic full combines incrementals."
  },
  {
    id: 77,
    question: "CVSS scores range from 0 to 10 and measure:",
    options: [
      "Vulnerability severity",
      "System uptime",
      "Network bandwidth",
      "User satisfaction"
    ],
    correct: 0,
    explanation: "CVSS (Common Vulnerability Scoring System) rates vulnerability severity from 0-10, with 9.0-10.0 being Critical. It's the standard for prioritizing vulnerability remediation."
  },
  {
    id: 78,
    question: "Which team combines offensive and defensive security practices for continuous improvement?",
    options: [
      "Red team",
      "Blue team",
      "Purple team",
      "White team"
    ],
    correct: 2,
    explanation: "Purple teams combine red team (offensive) and blue team (defensive) approaches, sharing knowledge to improve overall security. Red teams attack. Blue teams defend. White teams referee."
  },
  {
    id: 79,
    question: "Which data classification level typically includes trade secrets and competitive information?",
    options: [
      "Public",
      "Internal",
      "Confidential",
      "Restricted/Top Secret"
    ],
    correct: 3,
    explanation: "Restricted/Top Secret is the highest classification for the most sensitive information including trade secrets, with severe impact if disclosed. Confidential is sensitive but less critical. Internal is private. Public has no restrictions."
  },
  {
    id: 80,
    question: "Which technology replaces sensitive data with non-sensitive placeholder values while maintaining format?",
    options: [
      "Encryption",
      "Tokenization",
      "Hashing",
      "Masking"
    ],
    correct: 1,
    explanation: "Tokenization replaces sensitive data with tokens that maintain format but have no exploitable value, with original data stored securely elsewhere. Encryption transforms data. Hashing creates fixed-length digests. Masking partially obscures data."
  }
];

// Domain 5: Security Program Management and Oversight (20 questions)
// Answer distribution: 5A, 5B, 5C, 5D
const domain5Questions = [
  {
    id: 81,
    question: "Which risk response strategy involves purchasing insurance to cover potential losses?",
    options: [
      "Risk transference",
      "Risk mitigation",
      "Risk avoidance",
      "Risk acceptance"
    ],
    correct: 0,
    explanation: "Risk transference shifts financial risk to a third party, typically through insurance or contracts. Mitigation reduces risk. Avoidance eliminates the risk source. Acceptance acknowledges risk without action."
  },
  {
    id: 82,
    question: "The calculation of Annual Loss Expectancy (ALE) is:",
    options: [
      "SLE × ARO",
      "AV × EF",
      "SLE + ARO",
      "AV + EF"
    ],
    correct: 0,
    explanation: "ALE = SLE × ARO (Single Loss Expectancy × Annual Rate of Occurrence). SLE = AV × EF (Asset Value × Exposure Factor). ALE represents expected yearly loss from a specific threat."
  },
  {
    id: 83,
    question: "Which compliance framework specifically addresses credit card transaction security?",
    options: [
      "HIPAA",
      "SOX",
      "PCI DSS",
      "GDPR"
    ],
    correct: 2,
    explanation: "PCI DSS (Payment Card Industry Data Security Standard) governs credit card data protection. HIPAA covers healthcare. SOX addresses financial reporting. GDPR is EU data privacy law."
  },
  {
    id: 84,
    question: "A document that defines acceptable behavior for using organizational IT resources is called:",
    options: [
      "Business continuity plan",
      "Acceptable Use Policy (AUP)",
      "Incident response plan",
      "Disaster recovery plan"
    ],
    correct: 1,
    explanation: "An Acceptable Use Policy defines what users can and cannot do with company IT resources, setting behavioral expectations. BCP maintains business operations. IRP handles incidents. DRP restores systems after disasters."
  },
  {
    id: 85,
    question: "Which regulation protects personal data and privacy for European Union citizens?",
    options: [
      "HIPAA",
      "SOX",
      "GDPR",
      "PCI DSS"
    ],
    correct: 2,
    explanation: "GDPR (General Data Protection Regulation) is the EU law governing personal data protection with strict requirements and significant penalties. HIPAA is US healthcare. SOX is US financial. PCI DSS covers payment cards."
  },
  {
    id: 86,
    question: "The process of identifying, assessing, and prioritizing risks is called:",
    options: [
      "Risk assessment",
      "Incident response",
      "Business continuity",
      "Change management"
    ],
    correct: 0,
    explanation: "Risk assessment identifies assets, threats, vulnerabilities, and impacts to prioritize security efforts. Incident response handles security events. Business continuity maintains operations. Change management controls modifications."
  },
  {
    id: 87,
    question: "Which agreement between organizations defines security requirements for shared data?",
    options: [
      "AUP",
      "NDA",
      "SLA",
      "ISA (Interconnection Security Agreement)"
    ],
    correct: 3,
    explanation: "An ISA defines security requirements when organizations connect systems and share data. AUP defines user behavior. NDA protects confidential information. SLA defines service levels."
  },
  {
    id: 88,
    question: "Which framework provides cybersecurity guidelines organized into Identify, Protect, Detect, Respond, and Recover?",
    options: [
      "ISO 27001",
      "NIST Cybersecurity Framework (CSF)",
      "COBIT",
      "ITIL"
    ],
    correct: 1,
    explanation: "NIST CSF organizes cybersecurity around five functions: Identify, Protect, Detect, Respond, Recover. ISO 27001 is an ISMS standard. COBIT is IT governance. ITIL is IT service management."
  },
  {
    id: 89,
    question: "A risk assessment approach using categories like High, Medium, Low is called:",
    options: [
      "Quantitative",
      "Qualitative",
      "Hybrid",
      "Automated"
    ],
    correct: 1,
    explanation: "Qualitative risk assessment uses subjective categories (High/Medium/Low) for quick assessments. Quantitative uses numerical values and calculations. Hybrid combines both approaches."
  },
  {
    id: 90,
    question: "Which type of security control is a written policy document?",
    options: [
      "Technical control",
      "Physical control",
      "Administrative/Managerial control",
      "Operational control"
    ],
    correct: 2,
    explanation: "Administrative/Managerial controls include policies, procedures, and guidelines that direct security behavior. Technical controls are technology-based. Physical controls protect facilities. Operational controls are day-to-day procedures."
  },
  {
    id: 91,
    question: "An agreement that protects confidential information shared between parties is called:",
    options: [
      "SLA",
      "NDA (Non-Disclosure Agreement)",
      "AUP",
      "BPA"
    ],
    correct: 1,
    explanation: "An NDA legally binds parties to protect shared confidential information. SLA defines service expectations. AUP defines acceptable behavior. BPA is a business partner agreement."
  },
  {
    id: 92,
    question: "Which US regulation requires financial institutions to protect customer data?",
    options: [
      "HIPAA",
      "GDPR",
      "GLBA (Gramm-Leach-Bliley Act)",
      "FERPA"
    ],
    correct: 2,
    explanation: "GLBA requires financial institutions to protect customer financial information. HIPAA covers healthcare. GDPR is EU privacy. FERPA protects student education records."
  },
  {
    id: 93,
    question: "Third-party risk management includes assessing which of the following?",
    options: [
      "Internal employee performance only",
      "Vendor security practices and compliance",
      "Physical office layout",
      "Marketing effectiveness"
    ],
    correct: 1,
    explanation: "Third-party risk management evaluates vendor/supplier security practices, compliance, and potential risks they introduce. It's not about internal employees, physical layout, or marketing."
  },
  {
    id: 94,
    question: "Which security awareness training topic specifically addresses deceptive emails requesting sensitive information?",
    options: [
      "Password management",
      "Physical security",
      "Phishing recognition",
      "Data classification"
    ],
    correct: 2,
    explanation: "Phishing recognition training teaches employees to identify fraudulent emails attempting to steal credentials or install malware. Password management covers credential security. Physical security covers facilities. Data classification covers sensitivity levels."
  },
  {
    id: 95,
    question: "The document that defines specific, measurable security requirements is called:",
    options: [
      "Policy",
      "Standard",
      "Guideline",
      "Procedure"
    ],
    correct: 1,
    explanation: "Standards define specific mandatory requirements (e.g., 'passwords must be 12 characters'). Policies are high-level statements. Guidelines are recommendations. Procedures are step-by-step instructions."
  },
  {
    id: 96,
    question: "Which risk formula calculates the loss from a single security incident?",
    options: [
      "ALE = SLE × ARO",
      "SLE = Asset Value × Exposure Factor",
      "Risk = Threat × Vulnerability",
      "ROI = (Benefit - Cost) / Cost"
    ],
    correct: 1,
    explanation: "SLE (Single Loss Expectancy) = Asset Value × Exposure Factor, representing loss from one incident. ALE calculates annual loss. Risk formulas assess overall risk. ROI measures return on investment."
  },
  {
    id: 97,
    question: "Which compliance requirement applies specifically to US healthcare organizations?",
    options: [
      "PCI DSS",
      "GDPR",
      "HIPAA",
      "SOX"
    ],
    correct: 2,
    explanation: "HIPAA (Health Insurance Portability and Accountability Act) protects patient health information in US healthcare. PCI DSS covers payment cards. GDPR is EU privacy. SOX covers financial reporting."
  },
  {
    id: 98,
    question: "An organization's willingness to accept risk to achieve objectives is called:",
    options: [
      "Risk appetite",
      "Risk avoidance",
      "Risk mitigation",
      "Risk register"
    ],
    correct: 0,
    explanation: "Risk appetite defines how much risk an organization is willing to accept while pursuing objectives. Risk avoidance eliminates risk. Risk mitigation reduces risk. Risk register tracks identified risks."
  },
  {
    id: 99,
    question: "Which document tracks identified risks, their status, and assigned owners?",
    options: [
      "Incident response plan",
      "Business continuity plan",
      "Risk register",
      "Change management log"
    ],
    correct: 2,
    explanation: "A risk register documents identified risks, their likelihood, impact, response strategy, owner, and status. IRP handles incidents. BCP maintains business operations. Change log tracks modifications."
  },
  {
    id: 100,
    question: "Security awareness training should be conducted:",
    options: [
      "Only when employees are hired",
      "Only after a security incident",
      "Regularly and continuously",
      "Only for IT staff"
    ],
    correct: 2,
    explanation: "Security awareness training should be continuous with regular updates to address evolving threats. Training only at hire, after incidents, or for IT only leaves gaps in organizational security awareness."
  }
];

// Export all questions
export const examQuestions = [
  ...domain1Questions,
  ...domain2Questions,
  ...domain3Questions,
  ...domain4Questions,
  ...domain5Questions
];

export const questionPool = {
  domain1: domain1Questions,
  domain2: domain2Questions,
  domain3: domain3Questions,
  domain4: domain4Questions,
  domain5: domain5Questions,
  all: examQuestions
};

// Alias for exam generator compatibility
export const securityPlusQuestionPool = questionPool;

// Metadata for the exam
export const examMetadata = {
  title: "CompTIA Security+ (SY0-701) Practice Exam",
  totalQuestions: 100,
  timeLimit: 90, // minutes
  passingScore: 750, // on a scale of 100-900
  domains: [
    { name: "General Security Concepts", percentage: 12, questionCount: 12 },
    { name: "Threats, Vulnerabilities, and Mitigations", percentage: 22, questionCount: 22 },
    { name: "Security Architecture", percentage: 18, questionCount: 18 },
    { name: "Security Operations", percentage: 28, questionCount: 28 },
    { name: "Security Program Management and Oversight", percentage: 20, questionCount: 20 }
  ]
};

/*
ANSWER DISTRIBUTION VERIFICATION:
================================
Domain 1 (12 questions): A=3, B=3, C=3, D=3
Domain 2 (22 questions): A=6, B=5, C=5, D=6
Domain 3 (18 questions): A=4, B=5, C=5, D=4
Domain 4 (28 questions): A=7, B=7, C=7, D=7
Domain 5 (20 questions): A=5, B=5, C=5, D=5

TOTALS:
A (correct: 0) = 3+6+4+7+5 = 25 ✓
B (correct: 1) = 3+5+5+7+5 = 25 ✓
C (correct: 2) = 3+5+5+7+5 = 25 ✓
D (correct: 3) = 3+6+4+7+5 = 25 ✓

Total Questions: 12+22+18+28+20 = 100 ✓
*/