// Lesson 12: Vulnerability Management
// Security+ (SY0-701) - Domain 2.0: Threats, Vulnerabilities, and Mitigations

export const lesson12Flashcards = [
  {
    id: 1,
    front: "What is Vulnerability Management?",
    back: "Ongoing process of identifying, classifying, prioritizing, remediating, and mitigating vulnerabilities. Continuous cycle, not one-time event."
  },
  {
    id: 2,
    front: "What is Vulnerability Scanning?",
    back: "Automated process of probing systems to identify known vulnerabilities. Compares system configurations against vulnerability databases. Non-invasive testing."
  },
  {
    id: 3,
    front: "What is Penetration Testing?",
    back: "Authorized simulated attack to evaluate security. Goes beyond scanning to actually exploit vulnerabilities. Tests defenses under real-world conditions."
  },
  {
    id: 4,
    front: "Vulnerability Scanning vs Penetration Testing?",
    back: "Scanning: automated, identifies potential vulnerabilities, non-invasive. Pen testing: manual, actually exploits vulnerabilities, simulates real attack."
  },
  {
    id: 5,
    front: "What is a Bug Bounty Program?",
    back: "Organization pays external researchers to find and report vulnerabilities. Crowdsourced security testing. Rewards based on severity of findings."
  },
  {
    id: 6,
    front: "What is Responsible Disclosure?",
    back: "Reporting vulnerabilities to vendor privately, giving time to patch before public disclosure. Typically 90-day disclosure deadline. Balances transparency and safety."
  },
  {
    id: 7,
    front: "What is CVSS (Common Vulnerability Scoring System)?",
    back: "Standardized framework for rating vulnerability severity. Scores 0-10. Helps prioritize remediation. Industry-standard scoring method."
  },
  {
    id: 8,
    front: "What are the three CVSS score types?",
    back: "Base score: inherent severity. Temporal score: changes over time (exploits, patches). Environmental score: organization-specific impact."
  },
  {
    id: 9,
    front: "What is a CVSS Base Score?",
    back: "Core severity based on exploitability and impact. Doesn't change over time. Factors: attack vector, complexity, privileges required, user interaction, scope, CIA impact."
  },
  {
    id: 10,
    front: "What CVSS scores are considered Critical?",
    back: "9.0-10.0 = Critical. 7.0-8.9 = High. 4.0-6.9 = Medium. 0.1-3.9 = Low. Critical vulnerabilities need immediate attention."
  },
  {
    id: 11,
    front: "What is CVE (Common Vulnerabilities and Exposures)?",
    back: "Standardized identifiers for known vulnerabilities. Format: CVE-YEAR-NUMBER (CVE-2024-12345). Enables consistent communication about vulnerabilities."
  },
  {
    id: 12,
    front: "How are CVE and CVSS related?",
    back: "CVE identifies the vulnerability (the name). CVSS rates its severity (the score). A CVE will have an associated CVSS score."
  },
  {
    id: 13,
    front: "What is a Credentialed Scan?",
    back: "Vulnerability scan using valid login credentials. Can check inside systems for missing patches, misconfigurations. More thorough than non-credentialed."
  },
  {
    id: 14,
    front: "What is a Non-credentialed Scan?",
    back: "Scan without authentication credentials. Only sees what external attacker would see. Faster but less thorough. Good for external attack surface view."
  },
  {
    id: 15,
    front: "Credentialed vs Non-credentialed scans?",
    back: "Credentialed: more thorough, sees internal vulnerabilities, slower, requires credential management. Non-credentialed: external view only, faster, less thorough."
  },
  {
    id: 16,
    front: "What is Active Scanning?",
    back: "Directly probing systems by sending packets and analyzing responses. Can detect more vulnerabilities but may impact system performance or trigger alerts."
  },
  {
    id: 17,
    front: "What is Passive Scanning?",
    back: "Monitoring network traffic without sending probes. Non-intrusive, no performance impact. Limited to what's visible in traffic. Won't find all vulnerabilities."
  },
  {
    id: 18,
    front: "What is Internal Scanning?",
    back: "Scanning from inside the network. Finds vulnerabilities visible to insiders or lateral movement. Different perspective than external scanning."
  },
  {
    id: 19,
    front: "What is External Scanning?",
    back: "Scanning from outside the network (internet perspective). Shows what attackers see. Tests perimeter defenses. Often required for compliance."
  },
  {
    id: 20,
    front: "What is Agent-based Scanning?",
    back: "Software agent installed on endpoints performs scans. Better for mobile/remote devices. Continuous monitoring. Requires agent deployment and management."
  },
  {
    id: 21,
    front: "What is Agentless Scanning?",
    back: "Scanning without installing software on targets. Uses network protocols and credentials. Easier deployment but may miss offline systems."
  },
  {
    id: 22,
    front: "What is a False Positive?",
    back: "Scanner reports vulnerability that doesn't actually exist. Wastes time investigating non-issues. Common problem requiring validation."
  },
  {
    id: 23,
    front: "What is a False Negative?",
    back: "Scanner fails to detect actual vulnerability. More dangerous than false positive - creates false sense of security. Vulnerability exists but unknown."
  },
  {
    id: 24,
    front: "Which is worse: False Positive or False Negative?",
    back: "False Negative is worse. You think you're secure but you're not. False positives waste time but false negatives leave you exposed."
  },
  {
    id: 25,
    front: "How should scan frequency be determined?",
    back: "Based on risk, compliance requirements, and change rate. Critical systems more often. After major changes. Balance thoroughness with operational impact."
  },
  {
    id: 26,
    front: "What is Remediation in vulnerability management?",
    back: "Fixing the vulnerability - patching, configuration changes, removing vulnerable software. Preferred response when possible."
  },
  {
    id: 27,
    front: "What is a Compensating Control?",
    back: "Alternative security measure when remediation isn't possible. Doesn't fix vulnerability but reduces risk. Example: WAF when can't patch web app."
  },
  {
    id: 28,
    front: "What is Risk Acceptance?",
    back: "Formally acknowledging a vulnerability and choosing not to remediate. Documented decision with justification. Accepted by appropriate authority."
  },
  {
    id: 29,
    front: "How should remediation be prioritized?",
    back: "Consider: CVSS score, exploitability (active exploits?), asset criticality, business impact, exposure level. Critical systems with active exploits first."
  },
  {
    id: 30,
    front: "What is an Exception in vulnerability management?",
    back: "Documented approval to not remediate a vulnerability. Includes justification, risk acceptance, compensating controls, and expiration date for review."
  }
];