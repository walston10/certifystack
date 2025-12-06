export const lesson22Quiz = [
  {
    id: 1,
    question: "A security team uses a platform that aggregates logs from firewalls, servers, and endpoints, correlates events, and generates alerts for suspicious patterns. What is this platform?",
    options: [
      "Firewall",
      "SIEM (Security Information and Event Management) - centralized security monitoring",
      "Antivirus",
      "VPN"
    ],
    correct: 1,
    explanation: "SIEM aggregates logs, correlates events, and provides centralized security monitoring and alerting. SIEM capabilities: (1) LOG AGGREGATION - collect from many sources, (2) NORMALIZATION - common format, (3) CORRELATION - identify patterns across events, (4) ALERTING - notify on suspicious activity, (5) DASHBOARDS - visibility, (6) RETENTION - long-term storage for investigation. Log sources: firewalls, IDS/IPS, servers, endpoints, applications, cloud, authentication. Use cases: (1) Threat detection, (2) Incident investigation, (3) Compliance reporting, (4) Forensics. Popular SIEMs: Splunk, Microsoft Sentinel, IBM QRadar, Elastic. SIEM is core of security operations - provides visibility across environment."
  },
  {
    id: 2,
    question: "A SIEM rule triggers when it detects five failed logins from different usernames to the same server within 60 seconds from a single source IP. What type of attack might this detect?",
    options: [
      "Phishing",
      "Password spraying or brute force attack",
      "SQL injection",
      "DDoS"
    ],
    correct: 1,
    explanation: "Multiple failed logins to different accounts from one source indicates PASSWORD SPRAYING or brute force. Attack patterns detected: (1) PASSWORD SPRAY - few passwords, many accounts, (2) BRUTE FORCE - many passwords, one account, (3) CREDENTIAL STUFFING - breached credentials. SIEM correlation: (1) Aggregate login events, (2) Match pattern (failures, same source, multiple users), (3) Alert when threshold exceeded. Detection rules: (1) Failed logins > threshold, (2) Time window (60 seconds), (3) Source correlation (same IP), (4) Target correlation (same server). Response: investigate source IP, potentially block, check if any succeeded. SIEM value: single login failure not suspicious, pattern of failures is actionable intelligence."
  },
  {
    id: 3,
    question: "A syslog message shows severity level 0 (Emergency). What does this indicate about the message priority?",
    options: [
      "Informational message",
      "Most critical severity - system is unusable",
      "Debug message",
      "Warning only"
    ],
    correct: 1,
    explanation: "Syslog SEVERITY 0 (Emergency) is the MOST CRITICAL level - system unusable. Syslog severity levels (0-7): (0) Emergency - system unusable, (1) Alert - immediate action needed, (2) Critical - critical conditions, (3) Error - error conditions, (4) Warning - warning conditions, (5) Notice - normal but significant, (6) Informational - informational, (7) Debug - debug messages. Lower number = higher priority. Severity in SIEM: (1) Filter high-severity for immediate attention, (2) Use severity in alert prioritization, (3) Different retention by severity. Syslog also has facility codes (source type). Centralized syslog: send all logs to SIEM/syslog server for analysis."
  },
  {
    id: 4,
    question: "Network flow data (NetFlow/sFlow) shows a workstation sending 50GB of data to an external IP overnight. Normal behavior for this system is under 100MB. What should this trigger?",
    options: [
      "Normal activity",
      "Data exfiltration alert - unusual outbound data volume",
      "System update",
      "Backup"
    ],
    correct: 1,
    explanation: "Unusual large OUTBOUND data transfer can indicate DATA EXFILTRATION. NetFlow/sFlow provides: (1) Source and destination, (2) Ports/protocols, (3) Bytes transferred, (4) Duration. Exfiltration indicators: (1) Large outbound volume, (2) To unusual destination, (3) At unusual time, (4) Deviation from baseline. Baseline comparison: normal is 100MB, observed is 50GB = 500x normal - significant anomaly. Other flow analytics: (1) Beaconing patterns, (2) Connections to known-bad IPs, (3) Protocol anomalies. Response: (1) Investigate the workstation, (2) Check destination reputation, (3) Determine if legitimate, (4) Contain if suspicious. Flow data valuable for network visibility where full packet capture isn't feasible."
  },
  {
    id: 5,
    question: "A SOC uses playbooks that define step-by-step procedures for responding to specific alert types, with some steps automated. What technology enables this automation?",
    options: [
      "Firewall",
      "SOAR (Security Orchestration, Automation, and Response)",
      "Antivirus",
      "VPN"
    ],
    correct: 1,
    explanation: "SOAR (Security Orchestration, Automation, and Response) automates and standardizes security operations. SOAR capabilities: (1) ORCHESTRATION - coordinate across security tools, (2) AUTOMATION - automated response actions, (3) PLAYBOOKS - defined procedures, (4) CASE MANAGEMENT - track incidents. Automation examples: (1) Enrich alert with threat intel, (2) Query multiple systems for context, (3) Block IP on firewall, (4) Isolate endpoint, (5) Create ticket. Benefits: (1) Faster response, (2) Consistent procedures, (3) Reduced analyst burden, (4) Scale without adding staff. SIEM + SOAR: SIEM detects, SOAR responds. Common SOAR: Splunk SOAR, Palo Alto XSOAR, IBM Resilient. SOAR is force multiplier for security teams."
  },
  {
    id: 6,
    question: "The SOC subscribes to threat intelligence feeds that provide IP addresses, domains, and file hashes associated with known malware campaigns. What are these indicators called?",
    options: [
      "Vulnerabilities",
      "IOCs (Indicators of Compromise) - evidence of malicious activity",
      "Patches",
      "Policies"
    ],
    correct: 1,
    explanation: "IOCs (Indicators of Compromise) are artifacts indicating potential malicious activity. IOC types: (1) Network - IP addresses, domains, URLs, (2) Host - file hashes, registry keys, file paths, (3) Behavioral - patterns, sequences of events. Threat intelligence provides: (1) Known malicious IPs/domains, (2) Malware hashes, (3) Attack patterns (TTPs), (4) Context about threats. Using IOCs: (1) Import to SIEM for detection, (2) Block at firewall/proxy, (3) Search historical logs (were we hit?), (4) Enrich alerts. STIX/TAXII: standards for sharing threat intel. IOC sources: commercial feeds, ISACs, open source (AlienVault OTX, abuse.ch). IOC matching finds KNOWN threats; behavioral detection finds UNKNOWN."
  },
  {
    id: 7,
    question: "A SOC analyst observes that a server is making DNS queries for domains with random-looking, very long subdomains to an unusual DNS server. What might this indicate?",
    options: [
      "Normal DNS activity",
      "DNS tunneling - covert channel using DNS for data exfiltration or C2",
      "Website browsing",
      "Email traffic"
    ],
    correct: 1,
    explanation: "Random/long subdomains to unusual DNS servers may indicate DNS TUNNELING for covert data transfer. DNS tunneling signs: (1) Long, random subdomain names, (2) High volume of DNS queries, (3) Queries to non-standard DNS server, (4) Large TXT record responses. How DNS tunneling works: (1) Data encoded in DNS query (subdomain), (2) Attacker's DNS server receives, (3) Can tunnel data out or receive commands. Why DNS: (1) Usually allowed through firewalls, (2) Often not inspected deeply, (3) Encrypted DNS (DoH) makes harder to detect. Detection: (1) DNS analytics/monitoring, (2) Query length analysis, (3) Entropy analysis, (4) Baseline comparison. Response: (1) Block suspicious domains, (2) Investigate source system, (3) Force internal DNS resolvers."
  },
  {
    id: 8,
    question: "Security monitoring shows Windows Event ID 4625 (failed logon) occurring hundreds of times per minute for the Administrator account. What does this likely indicate?",
    options: [
      "User forgot password",
      "Brute force password attack against Administrator account",
      "System update",
      "Normal login activity"
    ],
    correct: 1,
    explanation: "High volume of Event ID 4625 (failed logon) against one account indicates BRUTE FORCE attack. Important Windows Security Events: (1) 4624 - successful logon, (2) 4625 - failed logon, (3) 4648 - explicit credential logon, (4) 4672 - special privileges assigned, (5) 4688 - process creation. 4625 details: (1) Account name, (2) Source workstation/IP, (3) Logon type, (4) Failure reason. Detection: (1) Volume of failures, (2) Targeting privileged accounts, (3) Source patterns, (4) Time patterns. Response: (1) Consider blocking source, (2) Enable account lockout, (3) Check if any succeeded (4624), (4) Investigate source. Windows events are primary source for Windows endpoint monitoring in SIEM."
  },
  {
    id: 9,
    question: "A SIEM is configured to store all logs for 90 days, with security-relevant logs kept for 1 year. Why is log retention important?",
    options: [
      "Only for storage management",
      "For incident investigation, compliance, and detecting long-dwell-time threats",
      "To slow down systems",
      "No importance"
    ],
    correct: 1,
    explanation: "LOG RETENTION enables incident investigation, compliance, and detection of threats with long dwell time. Retention needs: (1) INCIDENT INVESTIGATION - reconstruct what happened, (2) COMPLIANCE - regulations require retention periods, (3) THREAT HUNTING - find historical compromises, (4) APT DETECTION - advanced threats may be present for months. Dwell time: average time attacker is in network before detection (~200+ days historically). Compliance examples: (1) PCI DSS - 1 year, (2) HIPAA - 6 years, (3) SOX - 7 years. Retention strategy: (1) Hot storage (fast, expensive) for recent, (2) Cold storage (slow, cheap) for older, (3) Summarized data for very long term. Insufficient retention: can't investigate incidents that happened before retention window."
  },
  {
    id: 10,
    question: "An analyst uses SIEM to search for all instances where the process 'mimikatz.exe' was executed across the organization in the past 30 days. What security activity is this?",
    options: [
      "Compliance audit",
      "Threat hunting - proactively searching for threats",
      "Vulnerability scanning",
      "Penetration testing"
    ],
    correct: 1,
    explanation: "THREAT HUNTING is proactively searching for threats that may have evaded automated detection. Threat hunting: (1) Hypothesis-driven (what if X happened?), (2) IOC searching (known bad indicators), (3) Anomaly hunting (unusual patterns), (4) TTP hunting (attack techniques). Hunting vs Detection: (1) Detection = automated alerts, (2) Hunting = human-driven search. Mimikatz: (1) Credential dumping tool, (2) Common in attacks, (3) Presence indicates compromise. Hunt process: (1) Form hypothesis, (2) Search SIEM/EDR, (3) Investigate findings, (4) Improve detection if gaps found. Requirements: (1) Sufficient log data, (2) Skilled analysts, (3) Time to investigate. Threat hunting finds what automated detection misses."
  },
  {
    id: 11,
    question: "A SOC has Tier 1 analysts who handle initial alert triage, Tier 2 analysts who investigate escalated incidents, and Tier 3 analysts who perform advanced analysis and threat hunting. What is this structure called?",
    options: [
      "Flat organization",
      "Tiered SOC model - levels based on expertise and complexity",
      "Random assignment",
      "Single analyst model"
    ],
    correct: 1,
    explanation: "TIERED SOC MODEL organizes analysts by skill level and incident complexity. SOC tiers: (1) TIER 1 - initial triage, known procedures, escalate complex, (2) TIER 2 - deeper investigation, complex incidents, (3) TIER 3 - advanced analysis, threat hunting, tool development. Benefits: (1) Efficient use of expertise, (2) Career progression path, (3) Scalable model, (4) Consistent handling. Tier responsibilities: (1) T1 - first response, basic triage, playbook execution, (2) T2 - root cause analysis, containment, remediation, (3) T3 - APT investigation, detection engineering, R&D. Escalation: if T1 can't resolve quickly or complexity increases, escalate to T2. 24/7 SOC typically needs multiple T1 analysts per shift."
  },
  {
    id: 12,
    question: "The SIEM dashboard shows alerts but the overwhelming majority are false positives. Analysts are overwhelmed and missing real threats. What problem is this?",
    options: [
      "Too few alerts",
      "Alert fatigue - too many false positives degrading effectiveness",
      "System working correctly",
      "No problem"
    ],
    correct: 1,
    explanation: "ALERT FATIGUE occurs when excessive false positives cause analysts to miss or ignore real threats. Alert fatigue consequences: (1) Analysts ignore/dismiss alerts, (2) Real threats missed, (3) Analyst burnout, (4) Delayed response. Causes: (1) Overly sensitive rules, (2) Poor tuning, (3) Too many alert sources, (4) No prioritization. Solutions: (1) TUNE rules to reduce false positives, (2) PRIORITIZE by severity and confidence, (3) ENRICH with context before alerting, (4) AUTOMATE initial triage, (5) CONSOLIDATE related alerts. Metrics: (1) False positive rate, (2) Alert-to-incident ratio, (3) Mean time to triage. Fewer, higher-quality alerts are better than many low-quality. Continuous tuning required."
  },
  {
    id: 13,
    question: "Environmental sensors in the data center detect rising temperature and trigger alerts in the monitoring system. What type of monitoring is this?",
    options: [
      "Security monitoring only",
      "Environmental monitoring - physical conditions affecting IT systems",
      "Network monitoring only",
      "Application monitoring"
    ],
    correct: 1,
    explanation: "ENVIRONMENTAL MONITORING tracks physical conditions that can affect IT system availability. Environmental factors: (1) TEMPERATURE - overheating damages equipment, (2) HUMIDITY - too low = static, too high = condensation, (3) WATER - leaks damage equipment, (4) POWER - fluctuations, outages, (5) SMOKE/FIRE. Monitoring integration: (1) Environmental sensors report to DCIM or SIEM, (2) Alerts trigger response, (3) May trigger automatic shutdown. Temperature impact: (1) Equipment has operating range, (2) High temp = failure/reduced life, (3) HVAC failure is critical. Related: (1) Physical security sensors, (2) UPS monitoring, (3) Generator status. Environmental threats can be as damaging as cyber threats - comprehensive monitoring includes physical."
  },
  {
    id: 14,
    question: "A user behavior analytics (UBA) system alerts that an employee who normally works 9-5 from the office is accessing sensitive files at 3 AM from another country. What type of detection is this?",
    options: [
      "Signature-based",
      "Anomaly/Behavioral detection - deviation from normal user behavior",
      "Rule-based only",
      "Manual detection"
    ],
    correct: 1,
    explanation: "UBA/UEBA (User and Entity Behavior Analytics) detects ANOMALIES in user behavior patterns. UEBA builds: (1) Baseline of normal behavior per user, (2) Normal times, locations, systems, data access, (3) Alerts on significant deviations. This scenario: (1) Normal = 9-5, office location, (2) Observed = 3 AM, different country, (3) Anomaly score = high. UEBA detects: (1) Compromised accounts (attacker behaves differently), (2) Insider threats (unusual data access), (3) Privilege abuse. Not signature-based: no predefined 'bad' pattern, learned normal. Benefits: (1) Detect unknown threats, (2) Personalized to each user, (3) Reduces false positives (accounts for individual patterns). UEBA often uses machine learning for baseline and detection."
  },
  {
    id: 15,
    question: "Logs show PowerShell execution with encoded commands on a workstation. The SIEM enriches this alert with EDR data showing the parent process was a Word document. What does this correlation reveal?",
    options: [
      "Normal document opening",
      "Likely malicious document with macro executing encoded PowerShell - common attack chain",
      "System update",
      "User script"
    ],
    correct: 1,
    explanation: "Word → PowerShell (encoded) is CLASSIC ATTACK CHAIN - malicious document macro running hidden commands. Attack chain: (1) User opens malicious document, (2) Macro executes, (3) Launches PowerShell, (4) Encoded command hides payload. Indicators: (1) Document spawning PowerShell = suspicious, (2) Encoded PowerShell = hiding something, (3) Parent process analysis reveals source. SIEM + EDR correlation: (1) SIEM sees PowerShell event, (2) EDR provides parent process context, (3) Combined picture reveals attack. Detection opportunity at multiple points: (1) Email attachment, (2) Macro execution, (3) PowerShell launch, (4) Encoded command, (5) Network callback. Defense in depth: block at any point to stop attack."
  }
];