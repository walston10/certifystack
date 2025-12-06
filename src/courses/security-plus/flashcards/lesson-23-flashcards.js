// Lesson 23: Vulnerability and Penetration Testing
// Security+ (SY0-701) - Domain 4.0: Security Operations

export const lesson23Flashcards = [
  {
    id: 1,
    front: "What is Vulnerability Scanning?",
    back: "Automated process identifying known vulnerabilities in systems. Compares configurations against vulnerability databases. Non-exploitative - identifies but doesn't exploit."
  },
  {
    id: 2,
    front: "What is a Network Vulnerability Scanner?",
    back: "Scans network hosts for vulnerabilities. Checks open ports, services, missing patches, misconfigurations. Examples: Nessus, Qualys, OpenVAS."
  },
  {
    id: 3,
    front: "What is a Web Application Scanner?",
    back: "Specialized scanner for web application vulnerabilities. Tests for OWASP Top 10 - SQL injection, XSS, etc. Examples: Burp Suite, OWASP ZAP, Nikto."
  },
  {
    id: 4,
    front: "What is a Database Scanner?",
    back: "Scans databases for security issues. Checks default accounts, weak passwords, missing patches, excessive permissions. Database-specific vulnerabilities."
  },
  {
    id: 5,
    front: "Credentialed vs Non-credentialed scanning?",
    back: "Credentialed: uses login credentials, sees internal vulnerabilities, more thorough. Non-credentialed: external view only, what attacker sees, faster."
  },
  {
    id: 6,
    front: "Internal vs External scanning?",
    back: "Internal: from inside network, finds insider-visible vulnerabilities. External: from internet, tests perimeter defenses. Both perspectives needed."
  },
  {
    id: 7,
    front: "Active vs Passive scanning?",
    back: "Active: sends probes, more thorough, may impact systems. Passive: monitors traffic only, no impact, limited visibility. Active finds more but riskier."
  },
  {
    id: 8,
    front: "What is Penetration Testing?",
    back: "Authorized simulated attack to evaluate security. Actually exploits vulnerabilities. Tests defenses under real conditions. Goes beyond scanning."
  },
  {
    id: 9,
    front: "Vulnerability Scan vs Penetration Test?",
    back: "Scan: automated, identifies vulnerabilities, no exploitation. Pen test: manual, exploits vulnerabilities, simulates real attack. Pen test proves exploitability."
  },
  {
    id: 10,
    front: "What must you have before penetration testing?",
    back: "Written authorization. Scope and rules of engagement. Without it, you're committing a crime. Get it signed by appropriate authority."
  },
  {
    id: 11,
    front: "What is a Black Box test?",
    back: "Tester has no prior knowledge of target. Simulates external attacker. Most realistic but time-consuming. Also called unknown environment."
  },
  {
    id: 12,
    front: "What is a White Box test?",
    back: "Tester has full knowledge - source code, network diagrams, credentials. Most thorough. Finds more vulnerabilities faster. Also called known environment."
  },
  {
    id: 13,
    front: "What is a Gray Box test?",
    back: "Tester has partial knowledge. Some documentation, limited credentials. Simulates insider or compromised user. Balance of realism and efficiency."
  },
  {
    id: 14,
    front: "Black vs White vs Gray Box?",
    back: "Black: no knowledge, realistic, slow. White: full knowledge, thorough, fast. Gray: partial knowledge, balanced approach. Choose based on testing goals."
  },
  {
    id: 15,
    front: "What is Reconnaissance in pen testing?",
    back: "First phase - gathering information about target. Passive (OSINT, no direct contact) or Active (direct probing). Foundation for attack planning."
  },
  {
    id: 16,
    front: "What is Passive Reconnaissance?",
    back: "Gathering info without touching target. WHOIS, DNS lookups, social media, job postings, Google dorking. Target doesn't know you're looking."
  },
  {
    id: 17,
    front: "What is Active Reconnaissance?",
    back: "Directly interacting with target. Port scanning, banner grabbing, vulnerability scanning. Target may detect activity. More info but higher risk."
  },
  {
    id: 18,
    front: "What is Enumeration in pen testing?",
    back: "Extracting detailed information from target. Usernames, shares, services, OS versions. Builds on reconnaissance. Identifies specific attack vectors."
  },
  {
    id: 19,
    front: "What is Exploitation in pen testing?",
    back: "Actually exploiting discovered vulnerabilities. Gaining unauthorized access. Core of penetration test. Proves vulnerabilities are real and exploitable."
  },
  {
    id: 20,
    front: "What is Post-exploitation?",
    back: "Actions after initial access. Privilege escalation, lateral movement, persistence, data exfiltration. Shows full impact of successful attack."
  },
  {
    id: 21,
    front: "What are the pen test phases in order?",
    back: "Reconnaissance → Scanning/Enumeration → Vulnerability Assessment → Exploitation → Post-exploitation → Reporting. Each builds on previous."
  },
  {
    id: 22,
    front: "What is a Red Team?",
    back: "Offensive security team simulating real attackers. Uses full range of tactics - technical, physical, social engineering. Tests overall security posture."
  },
  {
    id: 23,
    front: "What is a Blue Team?",
    back: "Defensive security team protecting organization. Monitors, detects, responds to attacks. SOC analysts, incident responders. Defends against red team."
  },
  {
    id: 24,
    front: "What is a Purple Team?",
    back: "Collaboration between red and blue teams. Red attacks, blue defends, both share knowledge. Improves both offense and defense. Maximum learning."
  },
  {
    id: 25,
    front: "Red vs Blue vs Purple Team?",
    back: "Red: attack/offense. Blue: defend/detection. Purple: collaborative improvement. Purple combines red's attack knowledge with blue's defensive capability."
  },
  {
    id: 26,
    front: "What is a Bug Bounty Program?",
    back: "Organization pays external researchers for finding vulnerabilities. Crowdsourced security testing. Rewards based on severity. Responsible disclosure required."
  },
  {
    id: 27,
    front: "What is Responsible Disclosure?",
    back: "Reporting vulnerabilities to vendor privately before public disclosure. Give time to patch (typically 90 days). Balances transparency with safety."
  },
  {
    id: 28,
    front: "What is Rules of Engagement in pen testing?",
    back: "Document defining what testers can/cannot do. Scope, timing, allowed techniques, off-limits systems, emergency contacts. Prevents misunderstandings."
  },
  {
    id: 29,
    front: "What should a penetration test report include?",
    back: "Executive summary, methodology, findings with severity, evidence/screenshots, remediation recommendations, risk ratings. Both technical and business-friendly."
  },
  {
    id: 30,
    front: "What is Lateral Movement?",
    back: "Moving from initially compromised system to other systems in network. Using stolen credentials, exploiting trust relationships. Expanding access post-exploitation."
  }
];