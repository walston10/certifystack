export const lesson25Quiz = [
  {
    id: 1,
    question: "A security analyst discovers malware on a server. They immediately disconnect it from the network to prevent spread while preserving the system for investigation. What incident response phase is this?",
    options: [
      "Preparation",
      "Containment - isolating affected systems to prevent further damage",
      "Eradication",
      "Recovery"
    ],
    correct: 1,
    explanation: "CONTAINMENT isolates affected systems to prevent incident spread while preserving evidence for investigation. Containment strategies: (1) SHORT-TERM - immediate isolation (network disconnect), (2) LONG-TERM - temporary fixes allowing limited operation. Containment actions: (1) Network isolation/segmentation, (2) Disable compromised accounts, (3) Block malicious IPs/domains, (4) Firewall rule changes, (5) System shutdown (if necessary). Containment balance: (1) Stop the spread, (2) Preserve evidence, (3) Minimize business disruption. Evidence preservation during containment: (1) Don't wipe or reboot unnecessarily, (2) Document actions taken, (3) Capture volatile data if possible, (4) Maintain chain of custody. Containment comes AFTER detection/analysis confirms incident, BEFORE eradication. Premature containment may destroy evidence; delayed containment allows spread."
  },
  {
    id: 2,
    question: "After containing a ransomware attack, the security team identifies and removes all traces of the malware, patches the vulnerabilities used for entry, and ensures no backdoors remain. What phase is this?",
    options: [
      "Containment",
      "Eradication - removing the threat and closing attack vectors",
      "Recovery",
      "Lessons learned"
    ],
    correct: 1,
    explanation: "ERADICATION removes the threat completely and closes the vulnerabilities that enabled the attack. Eradication activities: (1) Remove malware from all affected systems, (2) Patch exploited vulnerabilities, (3) Close attack vectors, (4) Reset compromised credentials, (5) Remove attacker persistence mechanisms, (6) Verify clean state. Eradication challenges: (1) Finding ALL affected systems, (2) Ensuring complete removal, (3) Identifying all backdoors, (4) Not missing secondary infections. Verification: (1) Re-scan systems, (2) Review logs for remaining indicators, (3) Monitor for recurrence, (4) Check backup systems for infection. Eradication must be thorough - incomplete removal leads to reinfection. Sometimes requires rebuilding systems from clean images rather than cleaning."
  },
  {
    id: 3,
    question: "Following eradication of a threat, systems are restored from clean backups, brought back online in a controlled manner, and closely monitored for any signs of reinfection. What phase is this?",
    options: [
      "Containment",
      "Recovery - restoring systems to normal operations",
      "Preparation",
      "Detection"
    ],
    correct: 1,
    explanation: "RECOVERY restores systems to normal operations while monitoring for incident recurrence. Recovery activities: (1) Restore from clean backups, (2) Rebuild compromised systems, (3) Restore services in priority order, (4) Validate system functionality, (5) Enhanced monitoring for recurrence, (6) User communication. Recovery considerations: (1) Confirm backups are clean (pre-date infection), (2) Staged restoration (not all at once), (3) Verify patches/fixes in place before restoration, (4) Watch for attacker return, (5) Business continuity coordination. Recovery validation: (1) Functional testing, (2) Security verification, (3) Performance baseline, (4) User acceptance. Recovery isn't instant - may take days or weeks for complex incidents. Premature recovery risks reinfection if eradication incomplete."
  },
  {
    id: 4,
    question: "After an incident is resolved, the team meets to discuss what happened, what worked well, what didn't, and how to improve for future incidents. What phase is this?",
    options: [
      "Containment",
      "Lessons learned/Post-incident review - improving from incident experience",
      "Detection",
      "Preparation"
    ],
    correct: 1,
    explanation: "LESSONS LEARNED (Post-Incident Review) analyzes the incident to improve future prevention and response. Review should cover: (1) What happened (timeline), (2) How was it detected, (3) What worked well, (4) What didn't work, (5) What could have prevented it, (6) What improvements needed. Documentation: (1) Incident timeline, (2) Actions taken, (3) Gaps identified, (4) Recommendations, (5) Action items with owners. Improvements may include: (1) New detection capabilities, (2) Updated playbooks, (3) Additional training, (4) Control gaps addressed, (5) Process improvements. Who participates: (1) Incident responders, (2) Affected system owners, (3) Management, (4) Legal/compliance if involved. Lessons learned often skipped due to fatigue after incident - but critical for improvement. No-blame culture encourages honest assessment."
  },
  {
    id: 5,
    question: "An organization maintains incident response playbooks, trains their team regularly, and has forensic tools ready before any incident occurs. What incident response phase does this represent?",
    options: [
      "Detection",
      "Preparation - establishing capabilities before incidents occur",
      "Containment",
      "Recovery"
    ],
    correct: 1,
    explanation: "PREPARATION establishes incident response capabilities before incidents occur. Preparation activities: (1) Develop IR plan and playbooks, (2) Build IR team with defined roles, (3) Acquire and configure tools, (4) Establish communication plans, (5) Train team members, (6) Conduct exercises/tabletops. Preparation components: (1) IR PLAN - overall approach, (2) PLAYBOOKS - specific procedures per incident type, (3) TOOLS - SIEM, forensics, communications, (4) CONTACTS - legal, management, law enforcement, (5) DOCUMENTATION - templates, forms. Why preparation critical: (1) Incidents are stressful - prepared teams perform better, (2) Reduces response time, (3) Ensures consistent approach, (4) Meets compliance requirements. Preparation is ongoing - review after incidents, update for new threats, regular training. Organizations without preparation scramble during incidents."
  },
  {
    id: 6,
    question: "During a suspected breach, the incident response team must decide whether to immediately shut down affected systems or keep them running to gather more evidence. What is this decision called?",
    options: [
      "Risk avoidance",
      "Containment strategy decision - balancing business needs with evidence preservation",
      "Risk transfer",
      "Recovery planning"
    ],
    correct: 1,
    explanation: "CONTAINMENT STRATEGY balances stopping damage, preserving evidence, and maintaining business operations. Containment options: (1) IMMEDIATE SHUTDOWN - stops damage but loses volatile evidence, (2) NETWORK ISOLATION - contains but preserves evidence, (3) MONITORING - gather intelligence but risks spread, (4) PARTIAL CONTAINMENT - limit but maintain some operations. Decision factors: (1) Severity and spread rate, (2) Evidence requirements (legal case?), (3) Business impact of shutdown, (4) Available forensic capabilities, (5) Attacker awareness. Example decisions: (1) Ransomware spreading rapidly → isolate immediately, (2) Suspected espionage → monitor to understand scope, (3) Data exfiltration → block egress but preserve. Decision should be documented - rationale for chosen approach. Pre-defined criteria in playbooks help make faster decisions under pressure."
  },
  {
    id: 7,
    question: "An incident response team includes representatives from IT, security, legal, communications, HR, and executive leadership. Why is this cross-functional composition important?",
    options: [
      "Unnecessary overhead",
      "Different expertise needed - incidents have technical, legal, and business implications",
      "Compliance only",
      "Slower response"
    ],
    correct: 1,
    explanation: "CROSS-FUNCTIONAL IR TEAM addresses the multiple dimensions of incident response. Team roles: (1) SECURITY/IR - technical investigation and containment, (2) IT - system recovery, (3) LEGAL - regulatory, liability, law enforcement, (4) COMMUNICATIONS - internal/external messaging, (5) HR - employee-related issues, (6) EXECUTIVE - major decisions, resources. Why each matters: (1) Legal - breach notification requirements, evidence preservation, (2) Communications - customer notification, media response, (3) HR - insider threat, employee impact, (4) Executives - resource allocation, business decisions. Example: data breach requires: (1) Technical containment, (2) Legal breach notification timing, (3) Customer communication, (4) Regulatory reporting. Without cross-functional team, critical aspects may be missed or delayed."
  },
  {
    id: 8,
    question: "A company has a documented procedure that if malware is detected, the first responder should isolate the system, capture a memory dump, and notify the security team within 15 minutes. What is this document?",
    options: [
      "Annual report",
      "Incident response playbook - specific procedures for incident types",
      "General policy",
      "Business plan"
    ],
    correct: 1,
    explanation: "INCIDENT RESPONSE PLAYBOOK provides specific step-by-step procedures for handling particular incident types. Playbook elements: (1) Incident type covered, (2) Detection indicators, (3) Initial response steps, (4) Escalation criteria, (5) Containment procedures, (6) Evidence collection, (7) Communication requirements. Common playbooks: (1) Malware detection, (2) Phishing, (3) Data breach, (4) Ransomware, (5) Insider threat, (6) DDoS. Playbook benefits: (1) Consistent response, (2) Faster response (no decisions needed), (3) Nothing forgotten under stress, (4) Junior staff can respond, (5) Training reference. Playbook maintenance: update after incidents, new threats, lessons learned. Playbooks are tactical - what to do. IR Plan is strategic - how IR program works overall."
  },
  {
    id: 9,
    question: "An organization practices incident response through tabletop exercises where the team discusses their response to hypothetical scenarios without actually touching systems. What is the purpose of this activity?",
    options: [
      "Wasting time",
      "Testing IR capabilities and identifying gaps without operational risk",
      "Compliance checkbox",
      "Technical training only"
    ],
    correct: 1,
    explanation: "TABLETOP EXERCISES test incident response capabilities through scenario discussion without system impact. Tabletop benefits: (1) Test plans and playbooks, (2) Identify gaps in process, (3) Train team members, (4) Practice decision-making, (5) No operational risk. Tabletop format: (1) Present scenario, (2) Team discusses response, (3) Facilitator introduces complications ('injects'), (4) Debrief on what worked and gaps. What tabletops reveal: (1) Missing playbooks, (2) Unclear roles, (3) Communication gaps, (4) Resource shortages, (5) Outdated contacts. Exercise types (increasing complexity): (1) TABLETOP - discussion only, (2) WALKTHROUGH - step through procedures, (3) SIMULATION - simulated incident, (4) FULL EXERCISE - actual systems. Regular exercises (annual+) ensure team is prepared. Many regulations require IR testing."
  },
  {
    id: 10,
    question: "During a ransomware incident, the security team determines they need to notify the FBI, affected customers, and state regulators. What drives these notification requirements?",
    options: [
      "Voluntary choice only",
      "Legal and regulatory requirements - breach notification laws and regulations",
      "Marketing decision",
      "No requirement exists"
    ],
    correct: 1,
    explanation: "BREACH NOTIFICATION is driven by legal requirements, regulatory mandates, and contractual obligations. Notification requirements: (1) STATE LAWS - most US states require breach notification, (2) FEDERAL - HIPAA, GLBA, specific sectors, (3) INTERNATIONAL - GDPR (72 hours), other countries, (4) CONTRACTS - customer agreements may require. Notification considerations: (1) What triggers notification (data types, quantities), (2) Timeline (24-72 hours common), (3) Who to notify (affected individuals, regulators, law enforcement), (4) Content requirements. Why FBI notification: (1) Ransomware is crime, (2) May have intelligence, (3) Some regulations require law enforcement notification. Notification timing: (1) Too early - incomplete information, (2) Too late - regulatory violation, reputation damage. Legal counsel involvement critical - notification has legal implications."
  },
  {
    id: 11,
    question: "A security analyst monitoring the SIEM notices unusual outbound traffic patterns from a server at 3 AM. They investigate and confirm data exfiltration is occurring. What incident response phase enabled this discovery?",
    options: [
      "Recovery",
      "Detection and Analysis - identifying and confirming security incidents",
      "Containment",
      "Preparation"
    ],
    correct: 1,
    explanation: "DETECTION AND ANALYSIS identifies potential incidents and confirms whether they're actual security events. Detection sources: (1) SIEM alerts, (2) IDS/IPS alerts, (3) User reports, (4) Endpoint detection, (5) Network monitoring, (6) Threat intelligence. Analysis confirms: (1) Is this a real incident? (vs false positive), (2) What is the scope?, (3) What systems affected?, (4) What's the severity?, (5) Is it ongoing? Analysis activities: (1) Log review, (2) Alert correlation, (3) System examination, (4) Network traffic analysis, (5) Malware analysis. Documentation during analysis: (1) Timeline of events, (2) Affected systems, (3) Indicators of compromise, (4) Evidence collected. Analysis output feeds containment - must understand incident before containing effectively."
  },
  {
    id: 12,
    question: "An incident responder documents the exact time they received an alert, each action they took, and who they communicated with throughout the incident. Why is this documentation critical?",
    options: [
      "Bureaucracy",
      "Evidence and accountability - supports legal action and demonstrates due diligence",
      "Performance review",
      "Unnecessary overhead"
    ],
    correct: 1,
    explanation: "INCIDENT DOCUMENTATION supports legal proceedings, compliance, and improvement. Documentation purposes: (1) LEGAL - evidence for prosecution or litigation, (2) COMPLIANCE - demonstrate appropriate response, (3) LESSONS LEARNED - accurate review requires records, (4) ACCOUNTABILITY - who did what and when. What to document: (1) Timeline (when things happened), (2) Actions taken (what was done), (3) Decisions and rationale, (4) Evidence collected, (5) Communications, (6) People involved. Documentation best practices: (1) Document in real-time (not after), (2) Be specific (times, systems, actions), (3) Include screenshots/logs, (4) Avoid speculation, (5) Protect sensitive details. Chain of custody: for evidence that may be used legally, document who had it when. Poor documentation can invalidate evidence or expose organization to liability."
  },
  {
    id: 13,
    question: "After a security incident, the organization determines that their endpoint detection tool would have caught the malware if signature updates had been current. What category of improvement is this?",
    options: [
      "Recovery improvement",
      "Prevention improvement - changes to prevent similar incidents",
      "Detection was adequate",
      "No action needed"
    ],
    correct: 1,
    explanation: "PREVENTION IMPROVEMENT addresses root causes to prevent similar incidents in the future. Improvement categories: (1) PREVENTION - stop incident from occurring (this scenario), (2) DETECTION - catch incidents faster, (3) RESPONSE - respond more effectively. Prevention improvements: (1) Patch/update management, (2) Configuration hardening, (3) Access control changes, (4) Security tool updates, (5) User training. This scenario: signature updates would have prevented infection - process improvement needed for timely updates. Lessons learned should identify: (1) What could have prevented this?, (2) How could we have detected faster?, (3) How could we have responded better? Improvements require: (1) Specific action items, (2) Assigned owners, (3) Deadlines, (4) Follow-up verification. Without addressing root causes, similar incidents will recur."
  },
  {
    id: 14,
    question: "During a significant security incident, the CEO asks the CISO for hourly status updates, customers are asking about impact, and the media is requesting statements. What aspect of IR does this highlight?",
    options: [
      "Technical response only",
      "Communication management - coordinating information flow during incidents",
      "Containment",
      "Forensics"
    ],
    correct: 1,
    explanation: "COMMUNICATION MANAGEMENT coordinates information flow to all stakeholders during incidents. Communication audiences: (1) INTERNAL - executives, employees, board, (2) EXTERNAL - customers, media, regulators, (3) PARTNERS - vendors, service providers. Communication considerations: (1) What can be shared at each stage, (2) Who approves external communication, (3) Consistent messaging, (4) Legal review before external statements, (5) Timing coordination. Communication plan should define: (1) Spokespersons, (2) Approval workflows, (3) Templates, (4) Escalation thresholds, (5) Contact lists. Risks of poor communication: (1) Inconsistent messages, (2) Premature disclosure, (3) Legal exposure, (4) Reputation damage, (5) Regulatory violations. Communications should be planned in advance - during incident is too late to figure out who talks to media."
  },
  {
    id: 15,
    question: "A company experiences a breach and must decide whether to pay the ransom. The incident response team escalates this decision to executive leadership for approval. Why?",
    options: [
      "Technical team should decide",
      "Major business decision requiring executive authority and accountability",
      "Delay tactic",
      "Random escalation"
    ],
    correct: 1,
    explanation: "EXECUTIVE ESCALATION is required for major decisions with significant business, legal, or financial implications. Decisions requiring escalation: (1) Ransom payment (legal, ethical, financial), (2) Major system shutdown (business impact), (3) Public disclosure timing, (4) Law enforcement involvement, (5) Significant spending for response. Why executives decide: (1) Authority for financial decisions, (2) Accountability for outcomes, (3) Broader business context, (4) Legal/regulatory implications, (5) Board/stakeholder communication. Ransom decision factors: (1) No guarantee of recovery, (2) May be illegal (OFAC sanctions), (3) Funds criminal enterprise, (4) May encourage future attacks, (5) Insurance implications. IR plan should define: (1) What decisions escalate, (2) To whom, (3) How quickly, (4) Required information for decision. Technical team advises; business leadership decides."
  }
];