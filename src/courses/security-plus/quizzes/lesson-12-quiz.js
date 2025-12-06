export const lesson12Quiz = [
  {
    id: 1,
    question: "A security team runs an automated tool that connects to systems using administrator credentials to check for missing patches, misconfigurations, and known vulnerabilities. What type of scan is this?",
    options: [
      "Non-credentialed scan - external perspective only",
      "Credentialed/Authenticated scan - uses credentials for deeper inspection",
      "Penetration test",
      "Passive scan"
    ],
    correct: 1,
    explanation: "CREDENTIALED (AUTHENTICATED) SCANS use login credentials to perform deeper vulnerability assessment. Credentialed vs Non-credentialed: (1) Credentialed - logs into systems, checks installed software, configs, patches from inside, (2) Non-credentialed - external perspective only, what attacker sees from outside. Credentialed scan advantages: (1) More accurate results, (2) Finds more vulnerabilities, (3) Fewer false positives, (4) Can check configurations, (5) Identifies missing patches accurately. When to use each: (1) Credentialed - internal assessment, compliance checking, (2) Non-credentialed - external attack surface, what attackers see. Requirements: service accounts with appropriate permissions, credentials securely stored in scanner. Credentialed scans provide much more complete vulnerability picture but require credential management."
  },
  {
    id: 2,
    question: "A vulnerability scan identifies 500 findings, but the security team has limited resources. They use a scoring system that considers exploitability, impact, and remediation complexity. What system provides this standardized scoring?",
    options: [
      "CVE - vulnerability identifiers",
      "CVSS (Common Vulnerability Scoring System) - standardized severity scoring",
      "CWE - weakness classification",
      "OVAL - vulnerability detection language"
    ],
    correct: 1,
    explanation: "CVSS (Common Vulnerability Scoring System) provides standardized vulnerability severity scores from 0-10. CVSS score components: (1) BASE SCORE (0-10) - intrinsic vulnerability characteristics: Attack vector (Network/Adjacent/Local/Physical), Attack complexity (Low/High), Privileges required, User interaction, Scope, Impact (C/I/A). (2) TEMPORAL SCORE - current state: Exploit maturity, Remediation level, Report confidence. (3) ENVIRONMENTAL SCORE - organization-specific: Importance of affected assets, Security controls in place. CVSS ranges: Critical (9.0-10.0), High (7.0-8.9), Medium (4.0-6.9), Low (0.1-3.9). Use for prioritization: patch Critical/High first, consider environmental factors. CVSS provides consistent language for severity - enables comparison and prioritization."
  },
  {
    id: 3,
    question: "A penetration tester is given network diagrams, system documentation, and admin credentials before testing. What type of penetration test is this?",
    options: [
      "Black box - no prior knowledge",
      "White box - full knowledge of target environment",
      "Gray box - partial knowledge",
      "Red team - adversary simulation"
    ],
    correct: 1,
    explanation: "WHITE BOX (known environment) penetration testing provides testers with complete information about the target. Test types by knowledge: (1) WHITE BOX - full documentation, credentials, source code, network diagrams, (2) BLACK BOX - no prior knowledge, simulates external attacker, (3) GRAY BOX - partial knowledge, simulates insider or compromised user. White box advantages: (1) More thorough testing - can review source code, (2) Efficient - no time wasted on reconnaissance, (3) Tests defense in depth - assumes attacker already inside. When to use each: (1) White box - code review, comprehensive assessment, (2) Black box - realistic external attack simulation, (3) Gray box - insider threat, compromised account scenarios. White box isn't 'easier' - it's DIFFERENT, focused on comprehensive testing rather than simulating specific attack scenario."
  },
  {
    id: 4,
    question: "An organization hires ethical hackers to simulate real attacks against their infrastructure without the security team's knowledge, testing both technical controls and incident response. What is this called?",
    options: [
      "Vulnerability scanning",
      "Red team engagement - adversary simulation testing overall security",
      "Compliance audit",
      "Penetration test"
    ],
    correct: 1,
    explanation: "RED TEAM engagements simulate real adversaries to test overall security posture, including detection and response. Red team characteristics: (1) Simulates realistic attacks, (2) May not inform defenders (tests detection), (3) Tests people, process, AND technology, (4) Uses any means to achieve objectives, (5) Extended timeframe (weeks/months). Red team vs Pen test: (1) Pen test - find vulnerabilities in defined scope, (2) Red team - achieve objectives (access CEO email, exfiltrate data) using any method. Blue team vs Red team vs Purple team: (1) RED - attackers, (2) BLUE - defenders, (3) PURPLE - collaborative red+blue to improve defenses. Red team tests: (1) Security controls effectiveness, (2) Detection capabilities, (3) Incident response readiness, (4) Staff security awareness. More realistic than pen tests but also more resource-intensive."
  },
  {
    id: 5,
    question: "A vulnerability scan reports that a web server is vulnerable to a specific CVE. Upon manual verification, the security team confirms the reported vulnerable software version isn't actually installed. What is this scan result?",
    options: [
      "True positive - correctly identified vulnerability",
      "False positive - incorrectly flagged as vulnerable when not",
      "True negative - correctly identified as not vulnerable",
      "False negative - missed actual vulnerability"
    ],
    correct: 1,
    explanation: "FALSE POSITIVE occurs when a scanner incorrectly identifies something as vulnerable when it's actually not. Scan result types: (1) TRUE POSITIVE - correctly found real vulnerability, (2) FALSE POSITIVE - flagged but not actually vulnerable (this scenario), (3) TRUE NEGATIVE - correctly identified as not vulnerable, (4) FALSE NEGATIVE - missed real vulnerability (dangerous). False positive causes: (1) Version detection issues, (2) Banner grabbing inaccuracies, (3) Similar but not matching signatures, (4) Remediated but scanner not updated. Impact of false positives: (1) Wastes analyst time investigating, (2) Alert fatigue, (3) Diverts resources from real issues. Management: (1) Verify findings manually, (2) Tune scanner sensitivity, (3) Update scanner signatures, (4) Use credentialed scans for accuracy. Balance: too many false positives is wasteful; too many false negatives is dangerous."
  },
  {
    id: 6,
    question: "A vulnerability scanner identified 1,000 findings. The security team notices that CVE-2024-1234 appears on 500 systems but only requires one patch applied to the domain controller. How should remediation be prioritized?",
    options: [
      "Patch all 500 systems individually",
      "Prioritize by remediation efficiency - one patch fixes 500 systems",
      "Ignore findings with many occurrences",
      "Only patch critical CVEs"
    ],
    correct: 1,
    explanation: "REMEDIATION PRIORITIZATION considers multiple factors including efficiency and impact of fixes. Prioritization factors: (1) CVSS severity - critical/high first, (2) Exploitability - actively exploited in wild, (3) Asset criticality - important systems first, (4) Remediation efficiency - one fix affecting many systems, (5) Compensating controls - existing mitigations, (6) Business impact of remediation. This scenario: one patch on DC fixes vulnerability on 500 systems = high efficiency. Prioritization strategies: (1) Risk-based - severity × likelihood × asset value, (2) Efficiency-based - maximum reduction with minimum effort, (3) Compliance-driven - regulatory deadlines, (4) Combined approach. Not all vulnerabilities need immediate patching - risk acceptance may be appropriate for low-severity issues on non-critical systems. Document decisions and rationale."
  },
  {
    id: 7,
    question: "The security team cannot patch a critical legacy system because no vendor patch exists. They implement additional firewall rules and enhanced monitoring instead. What is this approach called?",
    options: [
      "Risk acceptance",
      "Compensating controls - alternative measures when primary fix isn't possible",
      "Risk avoidance",
      "Risk transfer"
    ],
    correct: 1,
    explanation: "COMPENSATING CONTROLS are alternative security measures implemented when the primary/preferred control isn't feasible. When compensating controls are used: (1) No patch available (legacy, EOL systems), (2) Patch breaks critical functionality, (3) Operational constraints prevent immediate patching, (4) Compliance requirement can't be met directly. Requirements for compensating controls: (1) Address same risk as original control, (2) Provide equivalent protection, (3) Above and beyond existing controls, (4) Documented with justification, (5) Approved by management. Examples: (1) Network segmentation for unpatchable systems, (2) Additional monitoring and alerting, (3) Enhanced access controls, (4) Virtual patching via WAF/IPS, (5) Application whitelisting. This is different from risk acceptance - compensating controls actively mitigate risk; acceptance acknowledges risk without mitigation. PCI DSS explicitly allows compensating controls with documentation."
  },
  {
    id: 8,
    question: "A company invites external researchers to test their public systems and pays bounties for valid vulnerabilities discovered. What is this program called?",
    options: [
      "Penetration test",
      "Bug bounty program - crowdsourced vulnerability discovery",
      "Red team engagement",
      "Vulnerability scan"
    ],
    correct: 1,
    explanation: "BUG BOUNTY programs pay external researchers for discovering and responsibly disclosing vulnerabilities. Bug bounty characteristics: (1) Public or private invitation, (2) Defined scope (which systems), (3) Payment tiers based on severity, (4) Rules of engagement, (5) Safe harbor for researchers. Benefits: (1) Continuous testing by diverse researchers, (2) Only pay for results, (3) Access to specialized skills, (4) Community goodwill, (5) Find issues internal teams miss. Platforms: HackerOne, Bugcrowd, Synack. Scope typically includes: web applications, mobile apps, APIs. Usually excludes: DDoS, social engineering, physical attacks. Bug bounty vs pen test: (1) Bounty - ongoing, many researchers, variable depth, (2) Pen test - time-bound, dedicated team, consistent methodology. Many major companies run bug bounties: Google, Microsoft, Apple, Facebook."
  },
  {
    id: 9,
    question: "A researcher discovers a critical vulnerability and contacts the vendor, giving them 90 days to release a patch before publishing details. What practice is this?",
    options: [
      "Full disclosure",
      "Responsible/Coordinated disclosure - private notification with timeline",
      "Non-disclosure",
      "Bug bounty"
    ],
    correct: 1,
    explanation: "RESPONSIBLE (COORDINATED) DISCLOSURE gives vendors time to fix vulnerabilities before public release. Disclosure approaches: (1) RESPONSIBLE/COORDINATED - notify vendor, set timeline (90 days common), publish after patch or deadline, (2) FULL DISCLOSURE - publish immediately (controversial, pressures vendors), (3) NON-DISCLOSURE - never publish (may sell to brokers instead). Responsible disclosure process: (1) Discover vulnerability, (2) Contact vendor privately, (3) Provide technical details, (4) Give reasonable timeline (30-90 days), (5) Work with vendor on fix/advisory, (6) Publish after patch or deadline. Why 90 days is common: Google Project Zero established this standard. Benefits: (1) Vendor can fix before exploitation, (2) Users protected once patch available, (3) Research gets credit and publication, (4) Maintains trust in process. Some vulnerabilities may justify shorter timelines if actively exploited."
  },
  {
    id: 10,
    question: "During a vulnerability scan, the scanner sends packets to enumerate services and check for vulnerabilities. Some legacy systems crash due to the scan traffic. What type of scan was this?",
    options: [
      "Passive scan - only observes traffic",
      "Active scan - sends probes that may impact systems",
      "Credentialed scan",
      "External scan"
    ],
    correct: 1,
    explanation: "ACTIVE SCANNING sends probes/packets to targets, which may impact system availability. Active vs Passive scanning: (1) ACTIVE - sends packets, enumerates services, tests vulnerabilities, can affect systems, (2) PASSIVE - observes existing traffic only, no impact on systems, less comprehensive. Active scan risks: (1) Service crashes (especially legacy/embedded systems), (2) Log flooding/alerts, (3) Network congestion, (4) Potential exploit triggers. Mitigation strategies: (1) Schedule during maintenance windows, (2) Notify stakeholders, (3) Use 'safe checks' mode, (4) Test on non-production first, (5) Have rollback plans. Passive scan uses: (1) Network traffic analysis, (2) Asset discovery, (3) Protocol analysis, (4) Continuous monitoring. For comprehensive assessment, active scanning is necessary but must be carefully planned. Fragile systems may need special handling or exclusion."
  },
  {
    id: 11,
    question: "A vulnerability is assigned CVE-2024-12345. What does this identifier provide?",
    options: [
      "Severity score",
      "Unique identifier for specific vulnerability enabling consistent reference",
      "Remediation instructions",
      "Exploit code"
    ],
    correct: 1,
    explanation: "CVE (Common Vulnerabilities and Exposures) provides unique identifiers for publicly known vulnerabilities. CVE format: CVE-YEAR-NUMBER (e.g., CVE-2024-12345). CVE provides: (1) Unique identifier - same vulnerability, same number everywhere, (2) Brief description, (3) References to advisories/patches, (4) Enables consistent communication. CVE does NOT provide: severity scores (that's CVSS), detailed exploitation (that's elsewhere), patches (vendor provides). How CVEs are assigned: (1) CVE Numbering Authorities (CNAs) - vendors, researchers, coordinators, (2) MITRE maintains master list, (3) NVD (National Vulnerability Database) adds CVSS scores and details. CVE importance: (1) Standardized vulnerability identification, (2) Enables tracking across tools, (3) Common reference for communication, (4) Supports patch management. When discussing vulnerabilities, use CVE numbers for clarity - 'the Exchange vulnerability' is ambiguous; 'CVE-2021-34473' is specific."
  },
  {
    id: 12,
    question: "A security team schedules monthly vulnerability scans but runs additional scans immediately after major changes or new threat disclosures. What does this represent?",
    options: [
      "Poor planning",
      "Risk-based scanning approach - regular plus event-driven scans",
      "Over-scanning causing problems",
      "Compliance only scanning"
    ],
    correct: 1,
    explanation: "RISK-BASED SCANNING combines scheduled scans with event-triggered scans for optimal coverage. Scan triggers: (1) SCHEDULED - regular intervals (weekly, monthly, quarterly), (2) CHANGE-BASED - after deployments, configurations changes, new systems, (3) THREAT-BASED - new critical CVE disclosed, active exploitation reported. Frequency considerations: (1) Critical systems - more frequent, (2) Public-facing - more frequent, (3) Stable internal systems - less frequent, (4) Compliance requirements - may mandate minimums. Event triggers for additional scans: (1) New vulnerability announcement (Log4j = immediate scan), (2) System deployment, (3) Major configuration changes, (4) Incident investigation, (5) Compliance audit preparation. Best practice: baseline scheduled scanning PLUS responsive scanning based on risk. Scanning only for compliance misses emerging threats between scheduled assessments."
  },
  {
    id: 13,
    question: "A penetration test report shows the tester was able to exploit a vulnerability, move laterally across the network, and access sensitive data. What phase of testing is the lateral movement part of?",
    options: [
      "Reconnaissance",
      "Post-exploitation - actions taken after initial compromise",
      "Initial access",
      "Scanning"
    ],
    correct: 1,
    explanation: "POST-EXPLOITATION encompasses activities after successfully compromising a system. Penetration testing phases: (1) RECONNAISSANCE - gather target information, (2) SCANNING/ENUMERATION - identify services, vulnerabilities, (3) GAINING ACCESS - exploit vulnerabilities, (4) MAINTAINING ACCESS - persistence (if in scope), (5) POST-EXPLOITATION - lateral movement, privilege escalation, data access, (6) REPORTING - findings and recommendations. Post-exploitation activities: (1) Privilege escalation, (2) Lateral movement to other systems, (3) Data discovery and exfiltration, (4) Credential harvesting, (5) Establishing persistence. Why post-exploitation matters: (1) Shows actual impact - not just 'vulnerable' but 'entire network compromised', (2) Tests detection/response, (3) Identifies blast radius, (4) Realistic attack simulation. Some pen tests stop at initial access; thorough tests continue through post-exploitation."
  },
  {
    id: 14,
    question: "After a vulnerability assessment, the security team documents all findings in a formal report and tracks remediation status over time. What is this tracking document typically called?",
    options: [
      "Incident report",
      "Vulnerability register/tracking log - documented findings and remediation status",
      "Compliance certificate",
      "Audit log"
    ],
    correct: 1,
    explanation: "VULNERABILITY REGISTER (tracking log/database) documents identified vulnerabilities and tracks remediation. Register contents: (1) CVE/identifier, (2) Description, (3) Affected systems, (4) Severity (CVSS), (5) Discovery date, (6) Status (open, in progress, remediated, accepted), (7) Owner, (8) Due date, (9) Remediation notes. Purposes: (1) Track progress over time, (2) Ensure accountability, (3) Report to management, (4) Compliance evidence, (5) Trend analysis, (6) Risk visibility. Status tracking: (1) Identified - newly discovered, (2) Assigned - owner responsible, (3) In remediation - being fixed, (4) Verified - fix confirmed, (5) Closed - resolved, (6) Exception/Accepted - risk accepted with documentation. Regular reporting from register shows: vulnerability counts over time, remediation velocity, aging vulnerabilities, compliance status. Essential for mature vulnerability management program."
  },
  {
    id: 15,
    question: "A vulnerability scan of an internal network reveals a critical vulnerability on 200 servers. The security team determines the vulnerability is only exploitable from the internet, but these servers are not internet-accessible. How should this affect prioritization?",
    options: [
      "Still treat as critical - CVSS says so",
      "Lower effective risk - environmental factors reduce exploitability",
      "Ignore completely",
      "Wait for vendor guidance"
    ],
    correct: 1,
    explanation: "ENVIRONMENTAL CONTEXT affects actual risk - not all vulnerabilities are equally dangerous in every environment. CVSS Environmental Score adjusts base score for: (1) Exploitability modifiers - is the attack vector accessible? (2) Impact modifiers - how important are affected systems? (3) Security controls - existing mitigations. This scenario: (1) Base CVSS may be critical (network-exploitable), (2) But network attack vector requires internet access, (3) Servers are internal only, (4) EFFECTIVE risk is lower (though still patch eventually). Contextual factors: (1) Network segmentation, (2) Existing security controls, (3) Asset criticality, (4) Data sensitivity, (5) Compensating controls. Still remediate: lower priority ≠ ignore. Network changes could expose servers later. Best practice: (1) Document risk assessment, (2) Adjust priority based on context, (3) Include in remediation plan, (4) Re-evaluate if environment changes."
  }
];