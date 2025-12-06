export const lesson11Quiz = [
  {
    id: 1,
    question: "A security scan reveals a web server running software with a known vulnerability that was patched 18 months ago. What type of vulnerability is this?",
    options: [
      "Zero-day vulnerability",
      "Unpatched/known vulnerability - patch available but not applied",
      "Configuration vulnerability",
      "Design flaw"
    ],
    correct: 1,
    explanation: "UNPATCHED VULNERABILITIES are known issues with available fixes that haven't been applied. Why systems remain unpatched: (1) Lack of patch management process, (2) Fear of breaking applications, (3) Legacy systems with no patches, (4) Compliance with change windows, (5) Resource constraints. Risk: known vulnerabilities have public exploits - attackers actively scan for them. Statistics: most breaches exploit vulnerabilities patched months/years earlier. Patch timeline: vulnerability disclosed → patch released → exploit developed → unpatched systems attacked. Defense: (1) Automated patch management, (2) Regular vulnerability scanning, (3) Defined patch timelines by severity, (4) Test patches before deployment, (5) Compensating controls for unpatchable systems. 18 months is unacceptably long for a known vulnerability - should be patched within weeks for critical issues."
  },
  {
    id: 2,
    question: "A newly discovered vulnerability in widely-used software is being actively exploited in attacks, but no patch exists yet from the vendor. What type of vulnerability is this?",
    options: [
      "Unpatched vulnerability",
      "Zero-day vulnerability - no patch available because it's newly discovered",
      "Misconfiguration",
      "Design flaw"
    ],
    correct: 1,
    explanation: "ZERO-DAY vulnerabilities are flaws exploited before vendor is aware or has released a patch ('zero days' of protection available). Zero-day timeline: (1) Vulnerability discovered (by researcher or attacker), (2) If attacker finds first: exploited in secret, (3) Eventually detected in attacks or disclosed, (4) Vendor creates patch, (5) Patch released - no longer zero-day. Zero-day characteristics: (1) No patch available yet, (2) Signature-based detection fails, (3) Very valuable to attackers (and on exploit markets), (4) May be used in targeted attacks before going public. Defense (limited): (1) Defense in depth, (2) Behavioral detection, (3) Network segmentation, (4) Least privilege, (5) EDR/XDR, (6) Rapid patching when fix arrives. Zero-days are rare but dangerous - most attacks use known vulnerabilities, but APTs often use zero-days for initial access."
  },
  {
    id: 3,
    question: "An administrator discovers the default 'admin/admin' credentials still work on a newly installed network device. What type of vulnerability is this?",
    options: [
      "Zero-day",
      "Default credential vulnerability - factory default settings not changed",
      "Buffer overflow",
      "Zero-day exploit"
    ],
    correct: 1,
    explanation: "DEFAULT CREDENTIALS are factory-set passwords that aren't changed during deployment - a critical misconfiguration. Why dangerous: (1) Default passwords are publicly known, (2) Attackers try defaults first (Mirai botnet), (3) Easy to discover and exploit, (4) No technical skill required. Common defaults: admin/admin, admin/password, root/root, administrator/blank. Vulnerable systems: (1) Network devices (routers, switches), (2) IoT devices, (3) Databases, (4) Applications, (5) Management interfaces. Defense: (1) Force password change on first login, (2) Security baseline configurations, (3) Automated scanning for defaults, (4) Device hardening procedures, (5) Documentation of changed credentials. Mirai botnet compromised millions of IoT devices using default credentials. This is configuration vulnerability, not software flaw - the system works as designed but is deployed insecurely."
  },
  {
    id: 4,
    question: "A printer server has unnecessary services running, including FTP and Telnet, which provide potential attack vectors. What category of vulnerability is this?",
    options: [
      "Zero-day vulnerability",
      "Misconfiguration - unnecessary services increasing attack surface",
      "Buffer overflow",
      "SQL injection"
    ],
    correct: 1,
    explanation: "MISCONFIGURATION vulnerabilities result from insecure settings rather than software flaws. Types of misconfigurations: (1) Unnecessary services enabled (this scenario), (2) Default credentials, (3) Excessive permissions, (4) Exposed management interfaces, (5) Missing encryption, (6) Debug mode enabled in production, (7) Directory listing enabled, (8) Verbose error messages. Impact: (1) Increased attack surface (more entry points), (2) Easier lateral movement, (3) Data exposure, (4) Privilege escalation opportunities. Defense: (1) Hardening baselines (CIS Benchmarks), (2) Principle of least functionality, (3) Regular configuration audits, (4) Infrastructure as Code (consistent configs), (5) Disable unused services. Configuration vulnerabilities are among most common - OWASP ranks 'Security Misconfiguration' in Top 10. FTP and Telnet are especially risky due to cleartext transmission."
  },
  {
    id: 5,
    question: "A web server is configured to show detailed error messages including database queries and stack traces to users. What security issue does this create?",
    options: [
      "Buffer overflow",
      "Improper error handling - exposing sensitive information in error messages",
      "Race condition",
      "Integer overflow"
    ],
    correct: 1,
    explanation: "IMPROPER ERROR HANDLING exposes sensitive information that helps attackers understand and exploit systems. Information leaked in verbose errors: (1) Database query structure (aids SQL injection), (2) File paths (aids path traversal), (3) Stack traces (reveals code structure), (4) Software versions (find known vulnerabilities), (5) Internal IP addresses, (6) Configuration details. How attackers use this: (1) Intentionally trigger errors, (2) Analyze error details, (3) Craft targeted exploits, (4) Map internal structure. Defense: (1) Generic user-facing error messages, (2) Detailed errors to logs only, (3) Custom error pages, (4) Don't reveal stack traces in production, (5) Log errors for admin review without exposing to users. Example: 'An error occurred' (good) vs 'MySQL syntax error near SELECT * FROM users WHERE id=' (bad - reveals database and query structure)."
  },
  {
    id: 6,
    question: "A legacy industrial control system runs Windows XP, which Microsoft no longer supports or patches. What vulnerability category applies?",
    options: [
      "Zero-day",
      "End-of-life/Legacy system vulnerability - no security updates available",
      "Misconfiguration",
      "Design flaw"
    ],
    correct: 1,
    explanation: "END-OF-LIFE (EOL) systems no longer receive security updates, accumulating vulnerabilities over time. EOL risks: (1) No patches for new vulnerabilities, (2) Known exploits remain unfixed forever, (3) Increasingly targeted by attackers, (4) May lack modern security features. Why EOL systems persist: (1) Legacy applications require old OS, (2) Embedded systems (SCADA, medical devices), (3) Upgrade costs, (4) 'If it works, don't fix it' mentality. Mitigation strategies: (1) Network isolation/segmentation, (2) Additional monitoring, (3) Application whitelisting, (4) Virtual patching (IPS/WAF rules), (5) Plan migration to supported systems. Windows XP ended support in 2014 - still running in some industrial/healthcare environments. Compliance frameworks typically require compensating controls for EOL systems or mandate replacement."
  },
  {
    id: 7,
    question: "A security researcher discovers a flaw in a cryptographic protocol that allows attackers to downgrade connections to use weak encryption. What type of vulnerability is this?",
    options: [
      "Buffer overflow",
      "Cryptographic/Protocol vulnerability - weakness in encryption implementation or design",
      "SQL injection",
      "Configuration error"
    ],
    correct: 1,
    explanation: "CRYPTOGRAPHIC VULNERABILITIES are weaknesses in encryption algorithms, protocols, or implementations. Cryptographic vulnerability types: (1) Weak algorithms (DES, MD5, SHA-1), (2) Short key lengths, (3) Poor random number generation, (4) Protocol flaws (downgrade attacks), (5) Implementation errors (Heartbleed), (6) Side-channel attacks. Downgrade attacks: (1) POODLE - forced SSL 3.0 downgrade, (2) FREAK - forced export cipher use, (3) Logjam - weak Diffie-Hellman. Impact: (1) Data confidentiality loss, (2) Man-in-the-middle attacks, (3) Credential theft, (4) Session hijacking. Defense: (1) Use current algorithms (AES, SHA-256), (2) Adequate key lengths, (3) Disable legacy protocols/ciphers, (4) Proper implementation (use libraries, don't roll your own), (5) Regular cryptographic configuration review. Protocol vulnerabilities are serious because they affect all users of that protocol."
  },
  {
    id: 8,
    question: "An attacker exploits a flaw in a hypervisor that allows them to break out of a virtual machine and access the host system or other VMs. What is this called?",
    options: [
      "Container escape",
      "VM escape - breaking out of virtual machine isolation to access host",
      "Buffer overflow",
      "Privilege escalation"
    ],
    correct: 1,
    explanation: "VM ESCAPE is breaking out of virtual machine isolation to access the host or other VMs. VM escape impact: (1) Access hypervisor (controls all VMs), (2) Access other VMs on same host, (3) Complete compromise of physical server, (4) In cloud: potential access to other customers' VMs. Attack vectors: (1) Hypervisor vulnerabilities, (2) Virtual hardware device bugs, (3) Shared resources exploitation, (4) Guest additions/tools vulnerabilities. Why critical: (1) Cloud environments rely on VM isolation, (2) Multi-tenant environments at risk, (3) Breaks fundamental security assumption. Defense: (1) Patch hypervisors promptly, (2) Minimize hypervisor attack surface, (3) Monitor for anomalies, (4) Don't run untrusted VMs on sensitive hosts, (5) Use hardware-assisted virtualization security. VM escapes are rare but high-impact - major hypervisors have had vulnerabilities (Venom, CVE-2018-3646)."
  },
  {
    id: 9,
    question: "A company discovers that their cloud storage bucket was publicly accessible due to incorrect permissions, exposing customer data to anyone on the internet. What vulnerability type is this?",
    options: [
      "Zero-day",
      "Cloud misconfiguration - incorrect cloud service settings exposing resources",
      "Buffer overflow",
      "Protocol vulnerability"
    ],
    correct: 1,
    explanation: "CLOUD MISCONFIGURATION is incorrectly setting cloud service permissions, exposing resources or data. Common cloud misconfigurations: (1) Public storage buckets (S3, Azure Blob), (2) Exposed databases, (3) Overly permissive IAM roles, (4) Missing encryption, (5) Open security groups, (6) Publicly accessible management interfaces. Why so common: (1) Complex permission models, (2) Default settings may be insecure, (3) Rapid deployment without security review, (4) Shadow IT bypassing security. Major breaches: Capital One, Twitch, multiple healthcare/government data exposures - all from misconfigured cloud storage. Defense: (1) Cloud Security Posture Management (CSPM), (2) Default-deny policies, (3) Infrastructure as Code with security checks, (4) Regular cloud configuration audits, (5) Block public access by default. Cloud misconfiguration is leading cause of cloud breaches - #1 on cloud security concerns."
  },
  {
    id: 10,
    question: "A legitimate software library used by many applications is found to contain malicious code inserted by a compromised contributor. What type of attack/vulnerability is this?",
    options: [
      "Zero-day",
      "Supply chain vulnerability - malicious code in trusted third-party components",
      "Misconfiguration",
      "Buffer overflow"
    ],
    correct: 1,
    explanation: "SUPPLY CHAIN VULNERABILITIES involve compromised components in the software/hardware supply chain. Supply chain attack vectors: (1) Compromised open-source libraries (this scenario), (2) Malicious updates from vendors (SolarWinds), (3) Compromised development tools, (4) Hardware implants, (5) Compromised build systems. Why dangerous: (1) Trusted source - bypasses security checks, (2) Wide distribution - many victims, (3) Hard to detect - appears legitimate, (4) Can persist long-term. Examples: SolarWinds, Codecov, event-stream npm package, Kaseya. Defense: (1) Software composition analysis, (2) Vendor security assessments, (3) Code signing verification, (4) SBOM (Software Bill of Materials), (5) Dependency scanning, (6) Build process security. Supply chain attacks are increasing - attackers target the supply chain to compromise many downstream organizations at once."
  },
  {
    id: 11,
    question: "An application allocates a signed integer for a user-provided value. An attacker provides a value that causes the integer to wrap around from maximum to minimum, bypassing security checks. What vulnerability is this?",
    options: [
      "Buffer overflow",
      "Integer overflow - arithmetic overflow causing unexpected behavior",
      "Race condition",
      "SQL injection"
    ],
    correct: 1,
    explanation: "INTEGER OVERFLOW occurs when arithmetic operations exceed the maximum value an integer can hold, wrapping to unexpected values. How it works: (1) Signed 32-bit int max: 2,147,483,647, (2) Add 1: wraps to -2,147,483,648, (3) Security check (if value > 0) passes with negative, (4) Later use of wrapped value causes issues. Attack scenarios: (1) Bypass length checks, (2) Cause buffer overflows, (3) Bypass security validations, (4) Manipulate financial calculations. Example: (1) Check: if (size < buffer_limit), (2) Attacker provides size that overflows, (3) Overflowed size is negative, passes check, (4) Memory allocation uses original large value. Defense: (1) Input validation before arithmetic, (2) Safe integer libraries, (3) Compiler overflow detection, (4) Use appropriate data types, (5) Runtime overflow checking. Integer overflows caused famous bugs including iPhone jailbreaks and game exploits."
  },
  {
    id: 12,
    question: "A hardware processor is found to have a vulnerability that allows attackers to read sensitive data from memory through timing measurements of CPU cache behavior. What type of vulnerability is this?",
    options: [
      "Buffer overflow",
      "Side-channel attack vulnerability - exploiting physical implementation characteristics",
      "SQL injection",
      "Misconfiguration"
    ],
    correct: 1,
    explanation: "SIDE-CHANNEL ATTACKS exploit physical characteristics of a system rather than software flaws. Side-channel types: (1) Timing attacks - measure operation duration, (2) Power analysis - monitor power consumption, (3) Cache attacks - observe cache behavior (Spectre, Meltdown), (4) Acoustic - listen to sounds, (5) Electromagnetic - measure EM emissions. Spectre/Meltdown: CPU speculative execution leaks data through cache timing. Impact: (1) Reading protected memory, (2) Extracting encryption keys, (3) Cross-VM data leakage, (4) Bypassing memory isolation. Hardware vulnerabilities are serious: (1) Difficult to patch (may need microcode/firmware), (2) Performance impact of mitigations, (3) Affects many systems (same CPU architecture). Defense: (1) Microcode updates, (2) OS patches, (3) Compiler mitigations, (4) Hardware refresh for persistent issues. Side-channel attacks are sophisticated but increasingly relevant as software security improves."
  },
  {
    id: 13,
    question: "An API endpoint doesn't implement rate limiting, allowing attackers to make unlimited requests to brute force authentication or scrape all data. What type of vulnerability is this?",
    options: [
      "SQL injection",
      "API security vulnerability - lack of proper controls on API access",
      "XSS",
      "Buffer overflow"
    ],
    correct: 1,
    explanation: "API VULNERABILITIES are security weaknesses in application programming interfaces. Common API vulnerabilities: (1) No rate limiting (this scenario), (2) Broken authentication, (3) Excessive data exposure, (4) Lack of input validation, (5) Missing authorization (IDOR), (6) No encryption. No rate limiting enables: (1) Brute force attacks on auth, (2) Data scraping (steal entire database), (3) Denial of service, (4) Enumeration attacks. OWASP API Security Top 10 highlights API-specific risks. Defense: (1) Rate limiting per user/IP/token, (2) Input validation, (3) Proper authentication (OAuth, API keys), (4) Authorization on every endpoint, (5) Encrypt in transit, (6) API gateway with security controls, (7) Monitor for anomalies. APIs are increasingly targeted as more applications expose them - 'OWASP API Security' is essential reference."
  },
  {
    id: 14,
    question: "A mobile application stores user passwords in plaintext in a local file accessible to other apps. What type of vulnerability is this?",
    options: [
      "Network vulnerability",
      "Insecure data storage - sensitive data stored without protection",
      "Buffer overflow",
      "API vulnerability"
    ],
    correct: 1,
    explanation: "INSECURE DATA STORAGE is storing sensitive data without adequate protection, risking exposure. Mobile storage risks: (1) Plaintext credentials (this scenario), (2) Sensitive data in logs, (3) Unencrypted databases, (4) Data in world-readable locations, (5) Backup exposure, (6) Clipboard data persistence. Impact: (1) Credential theft, (2) PII exposure, (3) Financial data compromise, (4) Compliance violations. Where data leaks: (1) Local storage/preferences, (2) Logs, (3) Backups, (4) Screenshots (state preservation), (5) Clipboard. Defense: (1) Encrypt sensitive data at rest, (2) Use secure storage APIs (Keychain, Keystore), (3) Minimize sensitive data storage, (4) Proper file permissions, (5) Clear clipboard after sensitive use, (6) Exclude from backups. OWASP Mobile Top 10 ranks insecure data storage as critical - many apps store data insecurely."
  },
  {
    id: 15,
    question: "An application uses a third-party library with a known CVE that could allow remote code execution. The development team wasn't aware of this vulnerability. What does this highlight?",
    options: [
      "Zero-day vulnerability",
      "Third-party/dependency vulnerability - risks from vulnerable external components",
      "Misconfiguration",
      "Design flaw"
    ],
    correct: 1,
    explanation: "THIRD-PARTY/DEPENDENCY VULNERABILITIES are security flaws in external libraries and components used by applications. Why problematic: (1) Inherited vulnerabilities - your app inherits library's flaws, (2) Invisible risk - may not know all dependencies (transitive), (3) Update challenges - may break compatibility, (4) Widespread impact - popular libraries affect many apps. Statistics: average application has 200+ dependencies; 80%+ have at least one vulnerable dependency. Famous examples: Log4j (Log4Shell), Struts (Equifax breach), OpenSSL (Heartbleed). Defense: (1) Software Composition Analysis (SCA), (2) Dependency scanning (Snyk, Dependabot), (3) SBOM (Software Bill of Materials), (4) Regular dependency updates, (5) Monitor CVE databases, (6) Pin versions and review updates. This is why 'using vulnerable components' is in OWASP Top 10 - modern apps heavily rely on third-party code."
  }
];