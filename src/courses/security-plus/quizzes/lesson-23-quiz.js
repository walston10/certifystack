export const lesson23Quiz = [
  {
    id: 1,
    question: "A security team receives approval to attempt to exploit vulnerabilities in a production system to demonstrate actual risk. They will try to gain unauthorized access using the same techniques as real attackers. What type of assessment is this?",
    options: [
      "Vulnerability scan - automated tool checking for vulnerabilities",
      "Penetration test - actively attempting to exploit vulnerabilities",
      "Risk assessment - identifying and evaluating risks",
      "Compliance audit - verifying regulatory compliance"
    ],
    correct: 1,
    explanation: "PENETRATION TESTING actively attempts to exploit vulnerabilities to demonstrate real-world risk. Pen test vs Vulnerability scan: (1) VULN SCAN - automated tools find potential vulnerabilities, no exploitation, (2) PEN TEST - human testers attempt actual exploitation, demonstrate impact. Pen test benefits: (1) Proves vulnerabilities are exploitable, (2) Shows attack chains (multiple vulns combined), (3) Tests detection/response capabilities, (4) Provides realistic risk picture, (5) Satisfies compliance requirements. Key requirement: WRITTEN AUTHORIZATION - pen testing without permission is illegal. Scope definition: (1) What systems included, (2) What techniques allowed, (3) Timeframe, (4) Notification requirements. Pen tests should include: vulnerability discovery, exploitation attempts, post-exploitation (if in scope), detailed reporting with remediation guidance."
  },
  {
    id: 2,
    question: "A penetration tester is given network diagrams, system documentation, and credentials before beginning their test. What type of penetration test is this?",
    options: [
      "Black box - no prior knowledge",
      "White box/Known environment - full knowledge of target systems",
      "Gray box - partial knowledge",
      "Blind test"
    ],
    correct: 1,
    explanation: "WHITE BOX (Known Environment) testing provides testers with complete information about target systems. Test knowledge levels: (1) WHITE BOX - full documentation, credentials, source code, network diagrams, (2) BLACK BOX - no prior knowledge, simulates external attacker, (3) GRAY BOX - partial information, simulates insider or compromised user. White box advantages: (1) More thorough testing - knows where to look, (2) Tests defense in depth, (3) Efficient use of time, (4) Can include code review. When to use: (1) White - comprehensive assessment, code review, (2) Black - realistic external attack simulation, (3) Gray - insider threat, compromised account scenario. White box isn't 'easier' - same exploitation required, just more directed. All types have value - choose based on objectives."
  },
  {
    id: 3,
    question: "During a penetration test, the tester successfully exploits a web application vulnerability, then uses that access to move to a database server containing customer data. What phase is the database access part of?",
    options: [
      "Reconnaissance",
      "Post-exploitation - actions after initial compromise including lateral movement",
      "Initial access",
      "Scanning"
    ],
    correct: 1,
    explanation: "POST-EXPLOITATION includes all activities after gaining initial access, including lateral movement and data access. Penetration test phases: (1) RECONNAISSANCE - gather information about target, (2) SCANNING - identify hosts, ports, vulnerabilities, (3) EXPLOITATION - attempt to compromise vulnerabilities, (4) POST-EXPLOITATION - pivot, escalate, access data, (5) REPORTING - document findings and recommendations. Post-exploitation activities: (1) Privilege escalation, (2) Lateral movement to other systems, (3) Data discovery and access, (4) Credential harvesting, (5) Persistence (if in scope). Why post-exploitation matters: (1) Shows true impact - not just 'vulnerable' but 'attacker can reach customer data', (2) Tests internal segmentation, (3) Reveals attack paths, (4) More realistic threat scenario. Post-exploitation demonstrates business impact that resonates with leadership."
  },
  {
    id: 4,
    question: "An organization conducts an assessment where the 'attackers' (red team) attempt to breach systems while 'defenders' (blue team) work together with them to improve detection and response in real-time. What is this collaborative approach called?",
    options: [
      "Red team only",
      "Purple team - collaborative red and blue team exercise",
      "Blue team only",
      "Vulnerability scan"
    ],
    correct: 1,
    explanation: "PURPLE TEAM combines red team attacks with blue team defense in a collaborative exercise to improve security. Team definitions: (1) RED TEAM - offensive, simulates attackers, (2) BLUE TEAM - defensive, detects and responds, (3) PURPLE TEAM - collaborative, improves both. Purple team approach: (1) Red team executes attack technique, (2) Blue team attempts to detect, (3) If detection fails, work together to improve, (4) Iterate through attack techniques, (5) Document gaps and improvements. Benefits: (1) Immediate feedback on detection gaps, (2) Blue team learns attack techniques, (3) Red team understands defense perspective, (4) Faster security improvement, (5) Knowledge transfer. Traditional red vs blue: adversarial, may miss learning opportunities. Purple team: collaborative, focused on improvement. Many organizations now prefer purple team exercises for maximum value."
  },
  {
    id: 5,
    question: "Before beginning a penetration test, the security team documents specific systems in scope, prohibited actions, emergency contacts, and legal authorization. What is this document called?",
    options: [
      "Vulnerability report",
      "Rules of engagement (ROE) - defines pen test boundaries and constraints",
      "Final report",
      "Risk assessment"
    ],
    correct: 1,
    explanation: "RULES OF ENGAGEMENT (ROE) define the boundaries, constraints, and requirements for a penetration test. ROE contents: (1) SCOPE - systems included and excluded, (2) TIMING - when testing can occur, (3) TECHNIQUES - what's allowed (social engineering? DoS?), (4) AUTHORIZATION - legal permission documentation, (5) CONTACTS - emergency and escalation contacts, (6) NOTIFICATION - who knows about test, (7) DATA HANDLING - sensitive data encountered, (8) STOP CONDITIONS - when to halt testing. Why ROE matters: (1) Legal protection for testers, (2) Prevents unintended impact, (3) Sets expectations, (4) Provides documentation for compliance. Must be signed before testing begins. Example restrictions: no production system DoS, no social engineering of executives, testing only during business hours, stop if critical system affected."
  },
  {
    id: 6,
    question: "A vulnerability scanner runs against systems using an administrator account to check installed software, patches, and configurations from inside the system. What type of scan is this?",
    options: [
      "Non-credentialed scan - external view only",
      "Credentialed/Authenticated scan - uses login for deeper inspection",
      "Passive scan",
      "Port scan only"
    ],
    correct: 1,
    explanation: "CREDENTIALED (Authenticated) SCANS log into systems to perform deeper vulnerability assessment. Credentialed vs Non-credentialed: (1) CREDENTIALED - authenticates, checks patches/configs from inside, more accurate, (2) NON-CREDENTIALED - external perspective, what attacker sees, more false positives. Credentialed scan finds: (1) Missing patches accurately, (2) Installed software vulnerabilities, (3) Configuration issues, (4) Local security settings, (5) User account issues. Requirements: (1) Service account with appropriate rights, (2) Secure credential storage in scanner, (3) May need domain admin or local admin depending on scope. Best practice: (1) Use credentialed scans for internal assessment, (2) Use non-credentialed for external attack surface, (3) Compare results - non-cred may find things cred misses and vice versa. Credentialed scans significantly reduce false positives and provide complete picture."
  },
  {
    id: 7,
    question: "A penetration tester spends days researching the target organization using LinkedIn, company website, public records, and social media to gather information about employees and systems. What phase is this?",
    options: [
      "Exploitation",
      "Reconnaissance/Information gathering - collecting target intelligence",
      "Post-exploitation",
      "Reporting"
    ],
    correct: 1,
    explanation: "RECONNAISSANCE (Information Gathering) collects intelligence about the target before active testing. Reconnaissance types: (1) PASSIVE - no direct interaction with target (OSINT, public sources), (2) ACTIVE - direct interaction (scanning, enumeration). Passive reconnaissance sources: (1) Company website, (2) LinkedIn employees, (3) Job postings (reveals technology), (4) Public records, (5) WHOIS data, (6) DNS records, (7) Social media, (8) Data breaches (HaveIBeenPwned), (9) GitHub (may contain secrets), (10) Shodan/Censys. What to gather: (1) Employee names and titles, (2) Email format, (3) Technologies used, (4) IP ranges, (5) Physical locations, (6) Organizational structure. Reconnaissance enables: targeted phishing, password guessing, identifying attack surface. Quality reconnaissance often determines pen test success - more intel = better attacks."
  },
  {
    id: 8,
    question: "A security team uses an automated tool that connects to each system and compares installed software versions against a database of known vulnerabilities, generating a report of findings. What is this?",
    options: [
      "Penetration test",
      "Vulnerability scan - automated tool checking for known vulnerabilities",
      "Red team exercise",
      "Code review"
    ],
    correct: 1,
    explanation: "VULNERABILITY SCANNING uses automated tools to identify known vulnerabilities in systems. Vulnerability scanner functions: (1) Discover hosts and services, (2) Identify software versions, (3) Compare against vulnerability database (CVE), (4) Check for misconfigurations, (5) Generate reports with severity ratings. Scanner types: (1) Network scanners (Nessus, Qualys, OpenVAS), (2) Web application scanners (Burp, OWASP ZAP), (3) Database scanners, (4) Cloud configuration scanners. Scan vs Pen test: (1) SCAN - automated, finds potential vulnerabilities, (2) PEN TEST - human, attempts exploitation, proves impact. Scanning frequency: (1) After changes, (2) Regular schedule (weekly/monthly), (3) After new CVE announcements. Limitations: (1) False positives, (2) May miss complex vulnerabilities, (3) Doesn't prove exploitability, (4) Point-in-time only. Scanning is foundation of vulnerability management program."
  },
  {
    id: 9,
    question: "A penetration tester discovers a SQL injection vulnerability, successfully extracts the database, but the scan report marked the vulnerability as 'informational' with low severity. What should the tester report?",
    options: [
      "Report as informational per scanner",
      "Report actual risk based on demonstrated exploitation and impact",
      "Don't report if scanner said low",
      "Report without context"
    ],
    correct: 1,
    explanation: "Penetration testers should report ACTUAL DEMONSTRATED RISK, not just scanner severity ratings. Why scanner ratings may be wrong: (1) Scanner can't test exploitation, (2) Business context unknown to scanner, (3) Attack chains not considered, (4) Environmental factors ignored. Pen test advantage: (1) Proves exploitability, (2) Demonstrates actual impact, (3) Shows attack paths (multiple vulns combined), (4) Provides business context. Reporting should include: (1) Vulnerability description, (2) Proof of exploitation, (3) Actual impact demonstrated, (4) Risk rating based on findings, (5) Remediation recommendations. SQL injection with database access is CRITICAL regardless of scanner output - data breach demonstrated. Quality pen test reports: technical details for IT team, executive summary showing business impact for leadership."
  },
  {
    id: 10,
    question: "An organization invites security researchers to test their public-facing applications and pays rewards for valid vulnerabilities found. What is this program called?",
    options: [
      "Internal audit",
      "Bug bounty program - crowdsourced vulnerability discovery with rewards",
      "Compliance assessment",
      "Red team"
    ],
    correct: 1,
    explanation: "BUG BOUNTY programs pay external researchers for discovering and responsibly disclosing vulnerabilities. Bug bounty characteristics: (1) Public or private invitation, (2) Defined scope, (3) Tiered rewards by severity, (4) Rules of engagement, (5) Safe harbor for researchers. Benefits: (1) Continuous testing, (2) Diverse researcher perspectives, (3) Pay only for results, (4) Find issues internal teams miss, (5) Researcher community goodwill. Platforms: HackerOne, Bugcrowd, Synack. Typical rewards: Critical $10K+, High $5K, Medium $1K, Low $100-500. Scope usually: web apps, APIs, mobile apps. Usually excludes: social engineering, DoS, physical. Bug bounty vs pen test: (1) Bounty - ongoing, many researchers, variable depth, (2) Pen test - time-bound, dedicated team, consistent methodology. Major companies run bug bounties: Google, Microsoft, Apple, Facebook."
  },
  {
    id: 11,
    question: "A vulnerability scan identifies 5,000 findings. The security team needs to prioritize remediation. They use CVSS scores, asset criticality, and exploitability to rank issues. What process is this?",
    options: [
      "Ignoring findings",
      "Risk-based prioritization - ranking vulnerabilities by actual risk factors",
      "Alphabetical sorting",
      "Random selection"
    ],
    correct: 1,
    explanation: "RISK-BASED PRIORITIZATION ranks vulnerabilities using multiple factors to focus on highest-risk issues first. Prioritization factors: (1) CVSS SEVERITY - base vulnerability severity, (2) EXPLOITABILITY - is exploit available/easy, (3) ASSET CRITICALITY - importance of affected system, (4) EXPOSURE - internet-facing vs internal, (5) COMPENSATING CONTROLS - existing mitigations, (6) BUSINESS IMPACT - effect if exploited. Why not just CVSS: (1) Critical on test system vs production server - different risk, (2) Exploit available vs theoretical - different urgency, (3) Segmented network vs flat - different exposure. Practical approach: (1) Critical CVSS + exploit available + critical asset = immediate, (2) High CVSS + internal only + compensating controls = scheduled, (3) Low CVSS + non-critical = backlog. Document decisions - risk acceptance requires approval and documentation."
  },
  {
    id: 12,
    question: "A penetration tester finds that after compromising a web server, they can pivot to internal systems because the web server has unrestricted network access internally. What does this demonstrate?",
    options: [
      "Strong security",
      "Lack of network segmentation - compromised system enables lateral movement",
      "Good authentication",
      "Proper monitoring"
    ],
    correct: 1,
    explanation: "Unrestricted internal network access from DMZ demonstrates LACK OF NETWORK SEGMENTATION, enabling lateral movement. Expected architecture: (1) DMZ server should have LIMITED access to internal network, (2) Only specific ports to specific servers (DB on port 3306 to DB server only), (3) Default deny for other internal access. What pen test revealed: (1) DMZ compromise = internal network access, (2) Lateral movement trivial, (3) Segmentation controls missing or misconfigured. Proper segmentation: (1) Web server → only application tier on required ports, (2) Application tier → only database tier, (3) No direct DMZ to sensitive internal systems. Pen tests effectively reveal segmentation gaps - automated scans can't test this. This finding should be HIGH/CRITICAL - enables attack escalation from external to internal compromise."
  },
  {
    id: 13,
    question: "After completing a penetration test, the tester provides a detailed report including executive summary, methodology, findings with severity ratings, evidence, and remediation recommendations. What should happen next?",
    options: [
      "File report and forget",
      "Remediation and retesting - fix issues and verify fixes worked",
      "Delete report",
      "Test again immediately"
    ],
    correct: 1,
    explanation: "After pen test reporting, organizations should REMEDIATE findings and RETEST to verify fixes. Post-report process: (1) Review findings with stakeholders, (2) Create remediation plan with owners and deadlines, (3) Prioritize by risk, (4) Implement fixes, (5) RETEST to confirm remediation, (6) Update risk register. Why retesting matters: (1) Verify fix actually works, (2) Check for regression (fix broke something else), (3) Confirm no new vulnerabilities introduced, (4) Provide evidence of remediation for compliance. Retest scope: (1) Specific vulnerabilities remediated, (2) May be targeted retest (cheaper), (3) Annual full retest recommended. Documentation: (1) Original findings, (2) Remediation actions, (3) Retest results, (4) Residual risk. Pen test without remediation is wasted effort - value comes from improved security."
  },
  {
    id: 14,
    question: "A security team schedules weekly automated vulnerability scans, monthly authenticated scans, quarterly external penetration tests, and annual red team exercises. What does this represent?",
    options: [
      "Wasteful over-testing",
      "Comprehensive security testing program with layered assessment types",
      "Insufficient testing",
      "Compliance-only testing"
    ],
    correct: 1,
    explanation: "LAYERED SECURITY TESTING uses multiple assessment types at appropriate frequencies for comprehensive coverage. Testing hierarchy: (1) AUTOMATED SCANS (weekly+) - continuous vulnerability identification, (2) AUTHENTICATED SCANS (monthly) - deeper internal view, (3) PENETRATION TESTS (quarterly) - prove exploitability, (4) RED TEAM (annual) - realistic attack simulation. Why multiple types: (1) Each finds different things, (2) Automation catches known issues quickly, (3) Human testing finds complex issues, (4) Red team tests overall security posture. Frequency rationale: (1) Scans - changes occur constantly, need frequent checking, (2) Pen tests - time-consuming, meaningful interval for changes, (3) Red team - significant effort, annual typically sufficient. Additional triggers: (1) After major changes, (2) After incidents, (3) New critical CVEs, (4) Compliance requirements. Mature security programs layer these assessments throughout the year."
  },
  {
    id: 15,
    question: "During a penetration test, the tester accidentally causes a production system to crash, affecting business operations. What should happen according to the rules of engagement?",
    options: [
      "Continue testing",
      "Follow incident/escalation procedures defined in ROE, notify emergency contacts",
      "Hide the incident",
      "Leave immediately"
    ],
    correct: 1,
    explanation: "Production impact during pen test requires following PRE-DEFINED ESCALATION PROCEDURES from the Rules of Engagement. ROE should define: (1) STOP CONDITIONS - when to halt testing, (2) EMERGENCY CONTACTS - who to call immediately, (3) NOTIFICATION PROCESS - how to report incidents, (4) INCIDENT HANDLING - roles and responsibilities. When production impact occurs: (1) Stop testing immediately, (2) Document what happened, (3) Contact emergency number from ROE, (4) Assist with recovery if requested, (5) Full incident report. Prevention: (1) Clear scope definition, (2) Production vs non-production clarity, (3) Testing during maintenance windows for risky tests, (4) Careful technique selection. This is why ROE exists - accidents happen, and clear procedures minimize impact and blame. Professional testers follow ROE precisely and communicate transparently."
  }
];