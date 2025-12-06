// Lesson 25: Incident Response Process
// Security+ (SY0-701) - Domain 4.0: Security Operations

export const lesson25Flashcards = [
  {
    id: 1,
    front: "What is Incident Response?",
    back: "Organized approach to addressing and managing security incidents. Minimizes damage, reduces recovery time and costs. Follows structured phases."
  },
  {
    id: 2,
    front: "What is a Security Incident?",
    back: "Event that threatens confidentiality, integrity, or availability. Violation of security policy. Ranges from malware infection to data breach. Requires response."
  },
  {
    id: 3,
    front: "What are the six Incident Response phases?",
    back: "Preparation, Detection and Analysis, Containment, Eradication, Recovery, Lessons Learned. Sequential process, may cycle back through phases."
  },
  {
    id: 4,
    front: "What is the Preparation phase?",
    back: "Getting ready before incidents occur. Develop IR plan, train team, gather tools, establish communication plans, create playbooks. Foundation for effective response."
  },
  {
    id: 5,
    front: "What should Preparation include?",
    back: "IR plan and procedures, trained team, communication templates, forensic tools, contact lists, management support, regular exercises and drills."
  },
  {
    id: 6,
    front: "What is the Detection and Analysis phase?",
    back: "Identifying that an incident occurred and understanding it. Analyze alerts, determine scope, assess impact, document findings. Confirm it's real incident."
  },
  {
    id: 7,
    front: "What activities occur in Detection and Analysis?",
    back: "Monitor alerts/logs, triage events, validate incidents, determine scope and impact, collect initial evidence, document everything, assign severity."
  },
  {
    id: 8,
    front: "What is Incident Triage?",
    back: "Initial assessment to prioritize incidents. Determines severity and urgency. Allocates resources appropriately. Not all incidents equal - prioritize by impact."
  },
  {
    id: 9,
    front: "What is the Containment phase?",
    back: "Limiting the damage and preventing spread. Stop the bleeding. May be short-term (immediate) or long-term (sustained). Balance speed with evidence preservation."
  },
  {
    id: 10,
    front: "What is Short-term Containment?",
    back: "Immediate actions to stop damage. Isolate affected systems, block malicious IPs, disable compromised accounts. Quick but temporary. Preserve evidence."
  },
  {
    id: 11,
    front: "What is Long-term Containment?",
    back: "Sustained containment while preparing for eradication. Keep systems running but contained. May involve temporary fixes. Allows continued business operations."
  },
  {
    id: 12,
    front: "Why preserve evidence during Containment?",
    back: "Needed for investigation, legal proceedings, understanding attack. Don't wipe systems immediately. Image drives before cleanup. Chain of custody matters."
  },
  {
    id: 13,
    front: "What is the Eradication phase?",
    back: "Removing the threat completely. Delete malware, close vulnerabilities, remove backdoors, patch systems. Ensure attacker can't return through same method."
  },
  {
    id: 14,
    front: "What activities occur in Eradication?",
    back: "Remove malware, delete attacker tools, patch vulnerabilities exploited, reset compromised credentials, rebuild severely compromised systems."
  },
  {
    id: 15,
    front: "What is the Recovery phase?",
    back: "Restoring systems to normal operations. Bring systems back online, restore from backups, verify functionality, monitor for recurrence."
  },
  {
    id: 16,
    front: "What should happen during Recovery?",
    back: "Restore from clean backups, rebuild systems if needed, verify integrity, implement additional monitoring, gradual return to production, confirm no reinfection."
  },
  {
    id: 17,
    front: "What is the Lessons Learned phase?",
    back: "Post-incident review to improve. What happened? What worked? What didn't? Document findings, update procedures, improve defenses. Also called post-mortem."
  },
  {
    id: 18,
    front: "What should Lessons Learned include?",
    back: "Timeline of events, what was done well, what could improve, root cause analysis, updated procedures/playbooks, training needs, control improvements."
  },
  {
    id: 19,
    front: "When should Lessons Learned occur?",
    back: "Shortly after incident closure while details fresh. Include all involved parties. Blame-free discussion focused on improvement. Document and share findings."
  },
  {
    id: 20,
    front: "What is an Incident Response Team (IRT)?",
    back: "Group responsible for handling incidents. Mix of skills and roles. May be dedicated or virtual team. Activated when incidents occur."
  },
  {
    id: 21,
    front: "Who is on an Incident Response Team?",
    back: "IR manager/lead, technical analysts, forensics specialist, legal counsel, communications/PR, HR representative, management. Varies by organization."
  },
  {
    id: 22,
    front: "What is the IR Manager's role?",
    back: "Leads incident response effort. Coordinates team activities, makes decisions, communicates with management, ensures process followed. Single point of authority."
  },
  {
    id: 23,
    front: "Why include Legal on IR team?",
    back: "Advises on legal obligations, evidence handling, regulatory notifications, law enforcement contact, liability issues. Critical for breach incidents."
  },
  {
    id: 24,
    front: "Why include HR on IR team?",
    back: "Handles insider threat situations, employee interviews, disciplinary actions, terminations related to incidents. Ensures proper handling of personnel issues."
  },
  {
    id: 25,
    front: "What is Incident Classification?",
    back: "Categorizing incidents by type and severity. Determines response priority and resources. Common levels: Critical, High, Medium, Low."
  },
  {
    id: 26,
    front: "How is incident severity determined?",
    back: "Impact on operations, data sensitivity involved, number of systems affected, regulatory implications, reputational damage. Higher impact = higher severity."
  },
  {
    id: 27,
    front: "Who should be notified during an incident?",
    back: "Internal: management, legal, PR, affected departments. External: regulators (if required), law enforcement (if appropriate), customers (if data breached)."
  },
  {
    id: 28,
    front: "When must you notify regulators of a breach?",
    back: "Depends on regulation. GDPR: 72 hours. HIPAA: 60 days. Many state laws have requirements. Know your notification obligations before incident occurs."
  },
  {
    id: 29,
    front: "What is an Incident Response Plan?",
    back: "Documented procedures for handling incidents. Defines roles, processes, communication plans. Created during Preparation phase. Tested and updated regularly."
  },
  {
    id: 30,
    front: "What is a Playbook/Runbook?",
    back: "Step-by-step procedures for specific incident types. Ransomware playbook, phishing playbook, etc. Ensures consistent response. Part of IR plan."
  }
];