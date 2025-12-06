export const lesson27Quiz = [
  {
    id: 1,
    question: "An organization automates their incident response so that when the SIEM detects a specific malware signature, it automatically isolates the affected system, blocks the associated IP, and creates a ticket. What technology enables this?",
    options: [
      "Manual process",
      "SOAR (Security Orchestration, Automation, and Response)",
      "Spreadsheet tracking",
      "Email alerts only"
    ],
    correct: 1,
    explanation: "SOAR (Security Orchestration, Automation, and Response) automates and coordinates security operations. SOAR capabilities: (1) ORCHESTRATION - connects security tools, (2) AUTOMATION - executes tasks without human intervention, (3) RESPONSE - takes action based on triggers. This scenario automates: (1) Detection (SIEM trigger), (2) Containment (isolate system), (3) Blocking (firewall rule), (4) Documentation (ticket creation). SOAR benefits: (1) Faster response (seconds vs hours), (2) Consistent actions, (3) Reduced analyst workload, (4) 24/7 response capability, (5) Documented actions. SOAR components: (1) Playbooks - automated workflows, (2) Integrations - connections to security tools, (3) Case management - ticket tracking. Examples: Splunk SOAR, Palo Alto XSOAR, IBM Resilient. SOAR enables security teams to handle more alerts with same resources."
  },
  {
    id: 2,
    question: "A security team writes scripts to automatically disable user accounts when HR marks an employee as terminated in the HR system. What security benefit does this provide?",
    options: [
      "No benefit",
      "Automated provisioning/deprovisioning - reducing access risk from delayed account disablement",
      "Cost savings only",
      "Compliance checkbox"
    ],
    correct: 1,
    explanation: "AUTOMATED DEPROVISIONING immediately removes access when employees leave, reducing insider threat risk. Manual deprovisioning risks: (1) Delays - IT may not know for hours/days, (2) Forgotten accounts - some systems missed, (3) Inconsistent - depends on who does it, (4) Ex-employee access in gap. Automation benefits: (1) Immediate - triggers on HR system change, (2) Complete - all connected systems updated, (3) Consistent - same process every time, (4) Auditable - logged and documented. What to automate: (1) Disable AD/directory accounts, (2) Revoke cloud service access, (3) Change shared passwords, (4) Remove VPN access, (5) Badge deactivation. Integration: HR system → Identity Management → All connected systems. This addresses real risk - disgruntled former employees with active credentials."
  },
  {
    id: 3,
    question: "A script runs daily to check all systems for a specific security configuration and reports any systems that don't match the baseline. What is this automation called?",
    options: [
      "Manual audit",
      "Configuration compliance checking - automated verification against baselines",
      "Random scanning",
      "Penetration testing"
    ],
    correct: 1,
    explanation: "CONFIGURATION COMPLIANCE CHECKING automates verification that systems match security baselines. Automation value: (1) Consistent checking, (2) Daily/continuous vs periodic manual audits, (3) Immediate detection of drift, (4) Scalable to thousands of systems. What to check: (1) Password policies, (2) Encryption settings, (3) Firewall rules, (4) Installed software, (5) Service configurations, (6) Patch levels. Baseline sources: (1) CIS Benchmarks, (2) DISA STIGs, (3) Custom organizational standards. Automation tools: (1) Configuration management (Ansible, Puppet, Chef), (2) Cloud security tools (AWS Config, Azure Policy), (3) Endpoint management, (4) Custom scripts. Reporting should: (1) Identify non-compliant systems, (2) Track trends, (3) Alert on critical deviations. Automation catches drift that manual audits miss between review periods."
  },
  {
    id: 4,
    question: "A security analyst uses Python to parse firewall logs, identify suspicious patterns, and generate daily reports. What benefit does scripting provide here?",
    options: [
      "No benefit over manual review",
      "Automation of repetitive analysis - faster, consistent, scalable",
      "Security decrease",
      "Compliance requirement"
    ],
    correct: 1,
    explanation: "SCRIPTING AUTOMATES repetitive security tasks, making analysis faster, consistent, and scalable. Scripting benefits: (1) Speed - process millions of logs vs manual review, (2) Consistency - same analysis every time, (3) Scalability - handle growing data volumes, (4) Reproducibility - documented process. Common security scripting tasks: (1) Log parsing and analysis, (2) IOC searching, (3) User activity reports, (4) Vulnerability data processing, (5) Alert enrichment, (6) Report generation. Popular security scripting languages: (1) Python - most common, extensive libraries, (2) PowerShell - Windows administration, (3) Bash - Linux/Unix systems, (4) JavaScript - web-related tasks. Scripting skills enable analysts to: (1) Customize commercial tool output, (2) Fill capability gaps, (3) Automate manual tasks, (4) Handle unique requirements. Basic scripting is increasingly expected skill for security professionals."
  },
  {
    id: 5,
    question: "When a phishing email is reported, an automated workflow extracts URLs from the email, checks them against threat intelligence, and if malicious, blocks the domain organization-wide. What concept does this represent?",
    options: [
      "Manual response",
      "Automated playbook execution - predefined automated response to specific events",
      "Random action",
      "Compliance audit"
    ],
    correct: 1,
    explanation: "AUTOMATED PLAYBOOK executes predefined response steps when specific conditions are met. Playbook elements: (1) TRIGGER - what starts it (phishing report), (2) ACTIONS - what happens (extract, check, block), (3) CONDITIONS - decision points (if malicious), (4) OUTPUTS - results (blocked, logged). This phishing playbook: (1) Trigger: user reports phishing, (2) Extract: pull URLs from email, (3) Enrich: check threat intel, (4) Decide: malicious or not, (5) Act: block domain if malicious, (6) Document: log actions taken. Playbook benefits: (1) Consistent response, (2) Speed - seconds vs hours, (3) Documented - every action logged, (4) Scalable - handles volume. Playbook design: (1) Start with manual process, (2) Identify automatable steps, (3) Build and test, (4) Refine based on results. Not everything should be automated - complex decisions still need humans."
  },
  {
    id: 6,
    question: "An organization uses APIs to automatically pull threat intelligence feeds, enrich security alerts with this data, and update firewall rules to block known malicious IPs. What does this integration enable?",
    options: [
      "Manual only process",
      "Threat intelligence automation - automatically operationalizing threat data",
      "Random blocking",
      "Static security"
    ],
    correct: 1,
    explanation: "THREAT INTELLIGENCE AUTOMATION operationalizes threat data by automatically integrating it into security tools. Automation flow: (1) Ingest - pull from TI feeds via API, (2) Process - normalize and deduplicate, (3) Enrich - add to alerts and incidents, (4) Act - update blocking rules. What can be automated: (1) IOC ingestion (IPs, domains, hashes), (2) Alert enrichment with context, (3) Block lists updates, (4) Detection rule updates. Benefits: (1) Current protection - new threats blocked quickly, (2) Consistent application, (3) Reduced manual work, (4) Better alert context. Considerations: (1) Feed quality - bad data causes problems, (2) False positives - automated blocking risks, (3) Tuning required, (4) Not all TI is actionable. Integration points: (1) SIEM - enrich alerts, (2) Firewall - block rules, (3) EDR - detection signatures, (4) Email security - block domains."
  },
  {
    id: 7,
    question: "A security engineer writes code that automatically spins up isolated virtual environments to analyze suspicious files, captures behavior, and reports findings. What security capability is this automating?",
    options: [
      "Email filtering",
      "Automated malware analysis/Sandboxing",
      "User training",
      "Compliance reporting"
    ],
    correct: 1,
    explanation: "AUTOMATED MALWARE ANALYSIS uses sandboxing to safely examine suspicious files at scale. Automated analysis process: (1) Submit suspicious file, (2) Spin up clean VM, (3) Execute file, (4) Monitor behavior (network, files, registry), (5) Generate report, (6) Destroy VM. What automation captures: (1) Network connections (C2 communication), (2) File system changes, (3) Registry modifications, (4) Process creation, (5) Screenshots. Benefits of automation: (1) Scale - analyze many samples, (2) Speed - results in minutes, (3) Safety - isolated environment, (4) Consistency - same analysis every time. Commercial sandboxes: Cuckoo (open source), Any.Run, Joe Sandbox, VirusTotal. Integration: (1) Email security submits attachments, (2) EDR submits suspicious files, (3) Analysts submit manually. Automation enables analysis that would be impossible to do manually at scale."
  },
  {
    id: 8,
    question: "A CI/CD pipeline automatically scans code for security vulnerabilities before allowing it to be deployed to production. What security practice is this?",
    options: [
      "Post-deployment scanning",
      "DevSecOps/Shift-left security - integrating security into development pipeline",
      "Manual code review only",
      "Production testing"
    ],
    correct: 1,
    explanation: "DEVSECOPS integrates security into the development pipeline, catching issues before production. Shift-left concept: move security earlier ('left') in development lifecycle. Pipeline security automation: (1) SAST - Static Application Security Testing (code analysis), (2) DAST - Dynamic Application Security Testing (running app), (3) SCA - Software Composition Analysis (dependencies), (4) Container scanning, (5) IaC security scanning. CI/CD integration: (1) Developer commits code, (2) Automated security scans run, (3) Build fails if critical issues found, (4) Security gates before deployment. Benefits: (1) Find issues when cheap to fix, (2) Developers get immediate feedback, (3) Consistent security checks, (4) Documented security state. Challenges: (1) False positives slow development, (2) Tuning required, (3) Developer buy-in needed. DevSecOps makes security a shared responsibility, not just security team's job."
  },
  {
    id: 9,
    question: "An automated system monitors for new CVEs, checks if affected software exists in the organization, and creates prioritized patching tickets. What process does this automate?",
    options: [
      "Random patching",
      "Vulnerability management automation - streamlining vuln identification and remediation",
      "Compliance only",
      "Manual tracking"
    ],
    correct: 1,
    explanation: "VULNERABILITY MANAGEMENT AUTOMATION streamlines the process from CVE disclosure to remediation. Automated workflow: (1) Monitor CVE databases and advisories, (2) Match to asset inventory, (3) Determine affected systems, (4) Prioritize by risk, (5) Create tickets, (6) Track remediation. Automation value: (1) Speed - hours vs days to identify exposure, (2) Completeness - check all assets, (3) Prioritization - focus on highest risk, (4) Tracking - ensure remediation happens. Integration points: (1) CVE feeds (NVD, vendor advisories), (2) Asset inventory (CMDB), (3) Ticketing system, (4) Patch management. What to automate: (1) CVE to asset matching, (2) Ticket creation, (3) SLA tracking, (4) Reporting. Human decisions: (1) Patch prioritization exceptions, (2) Compensating controls, (3) Risk acceptance. Automation handles volume - thousands of CVEs per year manually unmanageable."
  },
  {
    id: 10,
    question: "A script automatically pulls user login data from multiple systems, correlates unusual patterns, and alerts when anomalies are detected. What capability does this provide?",
    options: [
      "Manual log review",
      "User behavior analytics automation - detecting anomalous user activity",
      "Basic logging",
      "Compliance reporting only"
    ],
    correct: 1,
    explanation: "USER BEHAVIOR ANALYTICS (UBA) automation detects anomalous user activity that may indicate compromise or insider threat. What automation enables: (1) Baseline normal behavior, (2) Detect deviations, (3) Correlate across systems, (4) Alert on anomalies. Behavioral indicators: (1) Unusual login times, (2) Access from new locations, (3) Large data downloads, (4) Accessing unusual resources, (5) Failed authentication patterns. Why automation needed: (1) Volume - millions of events, (2) Speed - real-time detection, (3) Correlation - across many systems, (4) Baselines - track normal patterns. UBA use cases: (1) Compromised accounts, (2) Insider threats, (3) Privilege abuse, (4) Data exfiltration. Commercial tools: Microsoft Sentinel, Splunk UBA, Exabeam. Automation makes behavioral detection possible - no human could manually review all user activity."
  },
  {
    id: 11,
    question: "Security infrastructure configurations are defined in code files, version-controlled, and automatically deployed. Changes require peer review before implementation. What practice is this?",
    options: [
      "Manual configuration",
      "Infrastructure as Code (IaC) - defining and managing infrastructure through code",
      "Random deployment",
      "Undocumented changes"
    ],
    correct: 1,
    explanation: "INFRASTRUCTURE AS CODE (IaC) manages security infrastructure through version-controlled code files. IaC security benefits: (1) Version control - track all changes, (2) Peer review - security review before deployment, (3) Consistency - same config everywhere, (4) Rollback - revert to previous state, (5) Documentation - code shows intended state. Security configurations in code: (1) Firewall rules, (2) Security groups, (3) IAM policies, (4) Encryption settings, (5) Monitoring config. IaC workflow: (1) Write configuration, (2) Commit to repository, (3) Peer review, (4) Automated testing, (5) Deploy. Tools: Terraform, CloudFormation, Ansible. Security scanning for IaC: check for misconfigurations before deployment (Checkov, tfsec, KICS). IaC enables security automation and prevents configuration drift."
  },
  {
    id: 12,
    question: "An organization implements automatic remediation where specific alerts trigger immediate actions without human approval. What risk must be carefully managed with this approach?",
    options: [
      "Too slow response",
      "False positive impact - automated actions on incorrect detections cause harm",
      "No risk exists",
      "Compliance issues only"
    ],
    correct: 1,
    explanation: "FALSE POSITIVE RISK must be managed when implementing automated remediation without human approval. False positive impact: (1) Blocking legitimate users, (2) Disrupting business operations, (3) System availability issues, (4) Alert fatigue when constantly overridden. Mitigation strategies: (1) High-confidence triggers only - automate when very certain, (2) Graduated response - less impactful actions first, (3) Easy reversal - quick undo capability, (4) Monitoring - track automated actions, (5) Tuning - continuously improve detection. What to automate vs not: (1) Block known-malicious IOC → usually safe, (2) Isolate system on any alert → probably too aggressive, (3) Disable user on single failed login → definitely too aggressive. Best practice: (1) Start with alerting only, (2) Measure false positive rate, (3) Automate when confident, (4) Keep human override available. Balance speed of automation with risk of incorrect actions."
  },
  {
    id: 13,
    question: "A security team uses PowerShell to automate Windows security tasks like checking Group Policy settings, reviewing user permissions, and extracting security logs. Why is PowerShell particularly suited for these tasks?",
    options: [
      "Random language choice",
      "Native Windows integration - built-in access to Windows security features and APIs",
      "Only option available",
      "Compliance requirement"
    ],
    correct: 1,
    explanation: "POWERSHELL provides native integration with Windows security features, making it ideal for Windows security automation. PowerShell advantages: (1) Built into Windows, (2) Access to WMI and CIM, (3) Active Directory cmdlets, (4) Event log access, (5) Registry management, (6) Remote management. Common security tasks: (1) Get-ADUser - query AD users, (2) Get-EventLog - security event analysis, (3) Get-GPO - group policy review, (4) Get-ACL - permission analysis, (5) Test-NetConnection - network checks. PowerShell security considerations: (1) Execution policy, (2) Constrained Language Mode, (3) Script block logging, (4) AMSI integration. Attackers also use PowerShell - understand it for defense and offense. Learning PowerShell enables: (1) Custom security checks, (2) Incident response automation, (3) Compliance verification, (4) Integration with Windows tools."
  },
  {
    id: 14,
    question: "When implementing security automation, an organization starts with simple, low-risk automations and gradually increases complexity as they gain confidence. What approach is this?",
    options: [
      "Big bang implementation",
      "Incremental automation - gradually increasing automation complexity",
      "All or nothing",
      "Random implementation"
    ],
    correct: 1,
    explanation: "INCREMENTAL AUTOMATION gradually increases complexity, reducing risk and building confidence. Incremental approach: (1) Start simple - automate well-understood, low-risk tasks, (2) Measure results, (3) Learn and adjust, (4) Gradually add complexity, (5) Expand scope. Good starting points: (1) Alert enrichment (adds info, doesn't take action), (2) Ticket creation, (3) Notification routing, (4) Report generation. Progress to: (1) Containment actions, (2) Blocking rules, (3) Account disabling. Why incremental works: (1) Builds team confidence, (2) Identifies issues early, (3) Allows tuning, (4) Gains stakeholder trust, (5) Reduces blast radius of mistakes. Anti-pattern: automating everything at once - high risk, hard to troubleshoot. Measure at each step: (1) Time saved, (2) Accuracy, (3) False positive rate, (4) User impact."
  },
  {
    id: 15,
    question: "A security automation platform provides pre-built integrations with common security tools (SIEM, firewall, EDR) allowing them to work together through standardized interfaces. What does this provide?",
    options: [
      "Tool isolation",
      "Security tool orchestration - coordinating multiple tools through centralized platform",
      "Manual integration",
      "Vendor lock-in"
    ],
    correct: 1,
    explanation: "SECURITY TOOL ORCHESTRATION coordinates multiple security tools through a centralized platform. Orchestration value: (1) Tools work together vs silos, (2) Automated workflows across tools, (3) Single pane of glass, (4) Reduced integration effort. Common integrations: (1) SIEM - alert source, (2) Firewall - blocking actions, (3) EDR - endpoint actions, (4) Ticketing - case management, (5) Threat intel - enrichment, (6) Email - notifications. Orchestration enables: (1) SIEM detects → SOAR queries EDR → SOAR updates firewall → SOAR creates ticket, (2) All in seconds, automated. Integration methods: (1) APIs - most common, (2) Webhooks - event triggers, (3) Database queries, (4) File-based. SOAR platforms provide: (1) Pre-built integrations, (2) Workflow builders, (3) Playbook libraries. Without orchestration: manual copying between tools, slow response, inconsistent actions."
  }
];