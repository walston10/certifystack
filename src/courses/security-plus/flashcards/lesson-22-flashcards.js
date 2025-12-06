// Lesson 22: Security Monitoring and SIEM
// Security+ (SY0-701) - Domain 4.0: Security Operations

export const lesson22Flashcards = [
  {
    id: 1,
    front: "What is SIEM (Security Information and Event Management)?",
    back: "Platform that collects, correlates, and analyzes security logs from multiple sources. Provides real-time alerting, dashboards, and reporting. Central nervous system of security operations."
  },
  {
    id: 2,
    front: "What are the core functions of a SIEM?",
    back: "Log aggregation, event correlation, alerting, dashboards/visualization, long-term storage, reporting, compliance support. Turns raw logs into actionable intelligence."
  },
  {
    id: 3,
    front: "What is Log Aggregation?",
    back: "Collecting logs from multiple sources into centralized location. Enables correlation across systems. SIEM pulls logs from firewalls, servers, endpoints, applications."
  },
  {
    id: 4,
    front: "What is Event Correlation?",
    back: "Analyzing multiple events to identify patterns indicating attacks. Single event may be benign; pattern reveals threat. Example: failed logins across many systems = attack."
  },
  {
    id: 5,
    front: "What log sources feed into a SIEM?",
    back: "Firewall logs, IDS/IPS logs, system logs (Windows Event, syslog), application logs, authentication logs, proxy logs, DNS logs, endpoint protection logs."
  },
  {
    id: 6,
    front: "What are Windows Event Logs?",
    back: "Windows logging system. Key logs: Security (authentication, access), System (OS events), Application (app events). Forwarded to SIEM for analysis."
  },
  {
    id: 7,
    front: "What is Syslog?",
    back: "Standard protocol for sending log messages. Used by Linux, network devices, applications. Sends to centralized syslog server or SIEM. UDP 514 (or TCP/TLS for secure)."
  },
  {
    id: 8,
    front: "What are Firewall Logs valuable for?",
    back: "Blocked connection attempts, allowed traffic, NAT translations, rule hits. Shows what's trying to enter/leave network. Perimeter visibility."
  },
  {
    id: 9,
    front: "What do Authentication Logs reveal?",
    back: "Successful and failed logins, account lockouts, privilege use, password changes. Critical for detecting brute force, credential theft, unauthorized access."
  },
  {
    id: 10,
    front: "What is Anomaly Detection in log analysis?",
    back: "Identifying deviations from normal baseline behavior. Unusual login times, abnormal data transfers, new processes. Requires established baseline."
  },
  {
    id: 11,
    front: "What is Trend Analysis?",
    back: "Examining patterns over time. Gradual increase in failed logins, growing bandwidth usage. Identifies slow-developing threats or capacity issues."
  },
  {
    id: 12,
    front: "What is Baseline Comparison?",
    back: "Comparing current activity against known-good baseline. Deviations trigger alerts. Must establish and maintain accurate baseline. Foundation for anomaly detection."
  },
  {
    id: 13,
    front: "What is SOAR (Security Orchestration, Automation, and Response)?",
    back: "Platform automating security operations. Integrates tools, automates workflows, enables rapid response. Reduces manual effort and response time."
  },
  {
    id: 14,
    front: "What are SOAR Playbooks?",
    back: "Predefined automated response procedures. Triggered by specific alerts. Example: phishing playbook extracts URLs, checks reputation, blocks malicious, notifies user."
  },
  {
    id: 15,
    front: "What does SOAR automate?",
    back: "Alert enrichment, threat intelligence lookups, ticket creation, containment actions, notification workflows. Handles repetitive tasks so analysts focus on complex issues."
  },
  {
    id: 16,
    front: "SIEM vs SOAR?",
    back: "SIEM: collects, correlates, alerts on security data. SOAR: automates response to those alerts. SOAR extends SIEM with automation and orchestration."
  },
  {
    id: 17,
    front: "What is Threat Intelligence?",
    back: "Information about threats, threat actors, and attack methods. Enables proactive defense. Sources: commercial feeds, open source, government sharing, industry groups."
  },
  {
    id: 18,
    front: "What is OSINT (Open Source Intelligence)?",
    back: "Threat intelligence from publicly available sources. Includes security blogs, vulnerability databases, social media, paste sites. Free but requires analysis."
  },
  {
    id: 19,
    front: "What are Threat Feeds?",
    back: "Streams of threat data - malicious IPs, domains, file hashes. Integrated into security tools for automated blocking/detection. Can be commercial or open source."
  },
  {
    id: 20,
    front: "What is an IoC (Indicator of Compromise)?",
    back: "Evidence that an attack has occurred. Includes malicious IPs, domains, file hashes, registry keys, unusual processes. Used to detect compromised systems."
  },
  {
    id: 21,
    front: "What are examples of IoCs?",
    back: "Malicious IP addresses, C2 domain names, malware file hashes (MD5, SHA256), suspicious registry entries, unusual network connections, known-bad email addresses."
  },
  {
    id: 22,
    front: "What is STIX (Structured Threat Information eXpression)?",
    back: "Standardized language for describing threat intelligence. JSON format. Describes indicators, threat actors, TTPs, campaigns. Enables sharing between organizations."
  },
  {
    id: 23,
    front: "What is TAXII (Trusted Automated eXchange of Intelligence Information)?",
    back: "Protocol for exchanging STIX-formatted threat intelligence. Enables automated sharing between systems. Client-server or hub-and-spoke models."
  },
  {
    id: 24,
    front: "STIX vs TAXII?",
    back: "STIX: the language/format for threat intelligence. TAXII: the transport protocol for sharing STIX data. STIX is what you share, TAXII is how you share it."
  },
  {
    id: 25,
    front: "What is a SOC (Security Operations Center)?",
    back: "Team and facility responsible for monitoring, detecting, and responding to security incidents. 24/7 operations. Uses SIEM, SOAR, and other tools."
  },
  {
    id: 26,
    front: "What is a Tier 1 SOC Analyst?",
    back: "Entry-level analyst handling initial alert triage. Reviews alerts, filters false positives, escalates real incidents. First line of defense. Highest volume work."
  },
  {
    id: 27,
    front: "What is a Tier 2 SOC Analyst?",
    back: "Handles escalated incidents from Tier 1. Deeper investigation, determines scope and impact. More experienced. Performs detailed analysis."
  },
  {
    id: 28,
    front: "What is a Tier 3 SOC Analyst?",
    back: "Senior analyst/threat hunter. Handles complex incidents, proactive threat hunting, develops detection rules. Most experienced. May include forensics."
  },
  {
    id: 29,
    front: "What is Alert Fatigue?",
    back: "Analysts overwhelmed by too many alerts, leading to missed real threats. Caused by poor tuning, false positives. Combat with tuning, automation, prioritization."
  },
  {
    id: 30,
    front: "How do you reduce false positives in SIEM?",
    back: "Tune detection rules, whitelist known-good activity, correlate multiple events before alerting, use threat intelligence for context, regular rule review."
  }
];