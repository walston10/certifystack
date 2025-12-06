# Lesson 22: Security Monitoring and SIEM

**Estimated Time:** 30-35 minutes  
**Domain:** 4.0 Security Operations (28% of exam)  
**Exam Objectives Covered:** 4.1 - Given a scenario, apply common security techniques to computing resources

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain the core functions of SIEM systems (aggregation, correlation, alerting, reporting)
- Identify common log sources and the security insights each provides
- Differentiate between anomaly detection, trend analysis, and baseline comparison
- Describe SOAR capabilities including playbooks and automated response
- Define threat intelligence concepts including IoCs, OSINT, and STIX/TAXII
- Explain SOC tier structure and analyst responsibilities
- Recognize security events that warrant investigation versus routine activity
- Apply log analysis techniques to identify potential security incidents

---

## Video Resources

- **Professor Messer:** "CompTIA Security+ SY0-701 - Security Monitoring" (15 min)
- **PowerCert:** "SIEM Explained - Security Information and Event Management" (11 min)
- **Cybrary:** "Introduction to Security Operations Centers" (14 min)

---

## Introduction

Sarah stares at her screen in the Security Operations Center at 2:14 AM, fighting to stay alert during the quiet hours of the night shift. The SIEM dashboard shows the usual activity—thousands of events per minute flowing in from firewalls, servers, and endpoints across the enterprise.

Then something catches her eye. A single alert, easily lost among hundreds of others: "Multiple failed authentication attempts followed by successful login - User: admin_backup - Source: 185.234.xx.xx."

Most analysts would dismiss it. Failed logins happen constantly—users mistype passwords, forget they changed them, or fat-finger their credentials on mobile devices. But Sarah notices three things that trigger her training:

First, the source IP is from Eastern Europe, but admin_backup is a service account used exclusively by the backup server in the data center—it should never authenticate from external IPs.

Second, the pattern: 47 failed attempts over 12 minutes, then sudden success. That's not a user forgetting their password. That's a brute force attack that just succeeded.

Third, and most concerning: within 90 seconds of the successful login, the SIEM shows the account accessing the domain controller and querying Active Directory for privileged group membership.

Sarah's pulse quickens. She's watching an attack unfold in real-time.

She immediately escalates to the Tier 2 analyst on call. Within 5 minutes, they've disabled the compromised account, isolated the source IP at the firewall, and triggered the incident response playbook. The SOAR platform automatically collects forensic data from affected systems, creates tickets, and pages the incident response team.

By morning, the investigation reveals the attack vector: the admin_backup password was exposed in a third-party breach six months ago. The attackers had been patient, waiting for the right moment. They got 47 minutes of access before Sarah spotted them—47 minutes that could have been catastrophic without monitoring.

The CISO later estimates the prevented damage: the attackers were positioning for ransomware deployment. Similar attacks at other companies resulted in weeks of downtime and millions in losses. The cost of the SOC and SIEM infrastructure? A fraction of one prevented incident.

This is why security monitoring exists. Not because it prevents attacks—firewalls and access controls do that. Monitoring exists because prevention eventually fails. Attackers are persistent, creative, and patient. Some will get through. The question is whether anyone notices before the damage is done.

In this lesson, you'll learn how organizations achieve visibility into their security posture through SIEM systems, log analysis, threat intelligence, and Security Operations Centers. These capabilities transform security from "hoping nothing bad happens" to "detecting and responding when it does."

---

## SIEM: The Security Nerve Center

Security Information and Event Management (SIEM) systems collect, aggregate, correlate, and analyze security data from across the enterprise. Think of SIEM as the central nervous system of security operations—gathering signals from every part of the organization and making sense of them.

### Core SIEM Functions

**Log Aggregation**

Organizations generate massive volumes of log data. A mid-sized company might produce millions of log entries daily from firewalls, servers, applications, endpoints, and network devices. Without centralization, this data exists in silos—firewall logs on the firewall, Windows events on individual servers, application logs scattered across systems.

SIEM aggregates all these logs into a single searchable repository. When an analyst investigates an incident, they query one system rather than logging into dozens of devices. Aggregation also enables correlation—connecting events from different sources to reveal attack patterns invisible when viewing logs in isolation.

**Normalization**

Different systems log events in different formats. Windows uses Event IDs and XML. Linux uses syslog with varying formats. Firewalls have proprietary log structures. Normalizing this data transforms it into a consistent format for analysis.

Example of normalization:
- Windows: "Event 4625: An account failed to log on"
- Linux: "sshd[12345]: Failed password for admin from 192.168.1.100"
- Firewall: "DENY TCP 192.168.1.100:54321 -> 10.0.0.5:22"

After normalization, all become: "Authentication failure | Source: 192.168.1.100 | Target: 10.0.0.5 | Protocol: SSH | Time: 2024-01-15 14:32:17"

**Correlation**

Individual events often appear benign. Correlation connects related events to reveal malicious patterns.

Scenario: These five events occur within 10 minutes:
1. VPN login from unusual location (user traveling—probably fine)
2. File server access outside business hours (user catching up on work—probably fine)
3. Large data transfer to external IP (user uploading to cloud storage—probably fine)
4. New admin account created (IT provisioning new admin—probably fine)
5. Security software disabled (admin performing maintenance—probably fine)

Individually, each event has innocent explanations. But the SIEM correlates them: same user, same timeframe, escalating privileges, data exfiltration, covering tracks. The correlation rule triggers: "Possible insider threat or compromised account."

**Alerting**

SIEM generates alerts when events match predefined rules or anomaly thresholds. Effective alerting balances sensitivity (catching real threats) against noise (avoiding alert fatigue from false positives).

Alert categories:
- **Critical:** Immediate response required (confirmed malware, active intrusion)
- **High:** Urgent investigation needed (successful brute force, privilege escalation)
- **Medium:** Review within hours (policy violations, suspicious patterns)
- **Low/Informational:** Review when time permits (configuration changes, routine anomalies)

Alert tuning is crucial. A SIEM generating 10,000 alerts daily with 99% false positives teaches analysts to ignore alerts. Better: 100 alerts daily with 20% true positives gets appropriate attention.

**Dashboards and Reporting**

Dashboards provide real-time visibility into security status. Common dashboard elements:

- Alert volume and severity trends
- Geographic visualization of traffic sources
- Top blocked threats and attack types
- Authentication failure hotspots
- Bandwidth utilization anomalies
- Compliance status indicators

Reports serve different audiences:
- **Operational reports:** Daily/weekly summaries for SOC teams
- **Executive reports:** High-level risk posture for leadership
- **Compliance reports:** Evidence for auditors (PCI DSS, HIPAA, SOX)
- **Incident reports:** Detailed analysis of specific events

**Long-term Storage and Retention**

Regulations and forensic needs require retaining log data for extended periods. HIPAA may require 6 years, PCI DSS requires 1 year, and legal holds may extend indefinitely.

Storage strategies:
- **Hot storage:** Recent data (30-90 days) for active analysis, fast queries
- **Warm storage:** Older data (90 days - 1 year) for investigations, slower access
- **Cold storage:** Archive data (1+ years) for compliance, retrieval takes hours/days

🎯 **Exam Tip:** SIEM core functions frequently appear on exams. Remember the sequence: **Aggregate** (collect logs) → **Normalize** (standardize format) → **Correlate** (connect events) → **Alert** (notify analysts) → **Report** (document findings).

---

## Log Sources: Where Security Data Originates

SIEM is only as valuable as the data it receives. Understanding log sources—what each provides and what it reveals—is essential for effective monitoring.

### Firewall Logs

Firewalls log allowed and blocked traffic at network boundaries.

**What they reveal:**
- Connection attempts (source, destination, port, protocol)
- Blocked malicious traffic (attack attempts that failed)
- Allowed traffic patterns (what's normal vs. suspicious)
- Policy violations (traffic that shouldn't exist)

**Security insights:**
- Reconnaissance scanning (port scans from external IPs)
- Command-and-control communications (outbound to known bad IPs)
- Data exfiltration attempts (unusual outbound data volumes)
- Lateral movement (internal traffic to unexpected destinations)

**Example log entry:**
```
Jan 15 14:23:17 fw01 DENY TCP 203.0.113.50:45123 -> 10.0.1.25:3389 (RDP)
```
Translation: External IP attempted RDP connection to internal server—blocked. Likely reconnaissance or attack attempt.

### IDS/IPS Logs

Intrusion Detection/Prevention Systems analyze traffic content for malicious patterns.

**What they reveal:**
- Attack signatures detected (known exploit patterns)
- Anomalous behavior (traffic matching attack heuristics)
- Malware communications (known C2 patterns)
- Policy violations (prohibited applications or protocols)

**Security insights:**
- Active exploitation attempts
- Malware infection indicators
- Zero-day attack patterns (anomaly-based detection)
- Insider threat behaviors

**Example log entry:**
```
[**] [1:2024217:2] ET EXPLOIT MS17-010 EternalBlue Attempt [**]
Classification: Attempted Administrator Privilege Gain
Priority: 1
{TCP} 10.0.1.50:49152 -> 10.0.1.100:445
```
Translation: Internal host attempting EternalBlue exploit against another internal host—likely compromised system spreading laterally.

### System Logs

Operating systems log events about system operations, security, and applications.

**Windows Event Logs:**
- **Security log:** Authentication, access control, policy changes
- **System log:** Service states, driver issues, hardware events
- **Application log:** Application errors and warnings

**Key Windows Security Events:**
| Event ID | Meaning |
|----------|---------|
| 4624 | Successful logon |
| 4625 | Failed logon |
| 4648 | Explicit credential logon (RunAs) |
| 4672 | Special privileges assigned (admin logon) |
| 4720 | User account created |
| 4732 | Member added to security group |
| 4688 | New process created |

**Linux Syslog:**
- Authentication events (/var/log/auth.log or /var/log/secure)
- System messages (/var/log/syslog or /var/log/messages)
- Application-specific logs (/var/log/apache2/, /var/log/mysql/)

**Example Windows event:**
```
Event ID: 4625
Account Name: administrator
Source Network Address: 185.234.72.15
Failure Reason: Unknown user name or bad password
```
Translation: Someone attempted to log in as administrator from an external IP with wrong credentials—possible brute force attack.

### Authentication Logs

Dedicated logs from authentication systems (Active Directory, LDAP, RADIUS, identity providers).

**What they reveal:**
- Who authenticated, when, from where
- Failed authentication patterns
- Account lockouts
- Password changes
- Group membership modifications

**Security insights:**
- Brute force attacks (many failures then success)
- Credential stuffing (failures across many accounts)
- Pass-the-hash attacks (unusual authentication patterns)
- Privilege escalation (unexpected group additions)
- Account compromise (logins from impossible locations)

### Proxy Logs

Web proxies log all HTTP/HTTPS traffic passing through them.

**What they reveal:**
- URLs accessed by users
- Categories of websites visited
- Blocked content attempts
- Data upload volumes
- User-agent strings

**Security insights:**
- Malware callbacks (connections to malicious URLs)
- Data exfiltration (large uploads to file sharing sites)
- Policy violations (access to prohibited categories)
- Compromised accounts (access patterns unlike normal user behavior)
- Phishing clicks (access to newly-registered domains)

### DNS Logs

DNS servers log name resolution queries.

**What they reveal:**
- What domains systems are resolving
- Query volumes and patterns
- Resolution failures
- Query sources

**Security insights:**
- Command-and-control communications (queries to DGA domains)
- DNS tunneling (unusually long subdomains, high query volumes)
- Malware beaconing (periodic queries to suspicious domains)
- Data exfiltration (encoded data in DNS queries)
- Phishing infrastructure (queries to typosquatting domains)

**Example suspicious pattern:**
```
Query: aGVsbG8gd29ybGQ.data.evil-domain.com
Query: dGhpcyBpcyBh.data.evil-domain.com
Query: c2VjcmV0IG1l.data.evil-domain.com
```
Translation: Those subdomain strings are base64-encoded data. This is DNS tunneling—someone is exfiltrating data through DNS queries.

### Application Logs

Custom applications log business-specific events.

**What they reveal:**
- User actions within applications
- Business transaction details
- Application errors and exceptions
- Access to sensitive data

**Security insights:**
- Unauthorized data access (user viewing records they shouldn't)
- Business logic abuse (exploiting application workflows)
- Fraud patterns (unusual transaction sequences)
- Data theft (bulk record access or export)

💡 **Memory Trick:** For log sources, remember **"FISPAD"**: **F**irewall, **I**DS/IPS, **S**ystem, **P**roxy, **A**uthentication, **D**NS. Each provides different visibility into security events.

---

## Log Analysis Techniques

Raw logs are overwhelming. Analysis techniques transform data into actionable intelligence.

### Anomaly Detection

Identifies events that deviate from established normal patterns.

**How it works:**
1. Establish baseline of normal behavior (learning period)
2. Monitor for deviations from baseline
3. Alert when deviation exceeds threshold

**Examples:**
- User who normally logs in 9 AM-5 PM suddenly active at 3 AM
- Server that transfers 10 MB daily suddenly transferring 10 GB
- Account that accesses 5 files daily suddenly accessing 500
- Workstation that never connects to servers in the DMZ suddenly scanning them

**Advantages:** Can detect novel attacks with no known signature—the attack is detected because behavior is unusual, not because a specific pattern is recognized.

**Challenges:** Requires accurate baselines. Legitimate behavior changes (new project, traveling user) generate false positives. Sophisticated attackers operate within normal parameters to avoid detection.

### Trend Analysis

Examines patterns over time to identify gradual changes or developing situations.

**Examples:**
- Authentication failures increasing 20% weekly (possible ongoing attack)
- Outbound data transfer growing steadily (possible slow exfiltration)
- New domains appearing in DNS logs (possible staging for attack)
- Firewall blocks from specific country increasing (regional threat actor activity)

**Value:** Catches slow-moving threats that don't trigger anomaly thresholds. An attacker exfiltrating 1 MB daily flies under anomaly detection but trend analysis shows cumulative data loss over months.

### Baseline Comparison

Compares current state against a known-good reference point.

**Establishing baselines:**
- Document normal traffic patterns
- Record typical authentication volumes
- Capture standard process lists
- Map expected network connections

**Detecting deviations:**
- New processes running that aren't in baseline
- Network connections to hosts not in baseline
- Traffic volumes exceeding baseline by X%
- New user accounts not in baseline

**Example:** Baseline shows web server connects to database server on port 3306 and nowhere else. New connection to external IP on port 443 detected—investigate immediately.

### Correlation Rules

Predefined logic connecting multiple events to identify attack patterns.

**Example correlation rules:**

**Brute Force Detection:**
```
IF (failed_auth_count > 10 FROM same_source IN 5_minutes)
AND (successful_auth FROM same_source IN next 10_minutes)
THEN ALERT "Possible brute force success" PRIORITY HIGH
```

**Lateral Movement Detection:**
```
IF (login FROM internal_host TO server_A)
AND (login FROM server_A TO server_B IN 30_minutes)
AND (login FROM server_B TO server_C IN 30_minutes)
THEN ALERT "Possible lateral movement chain" PRIORITY CRITICAL
```

**Data Exfiltration Detection:**
```
IF (user accesses > 100 files IN 1_hour)
AND (outbound_data > 100MB TO external_ip IN same_hour)
THEN ALERT "Possible data exfiltration" PRIORITY HIGH
```

---

## SOAR: Automating Security Response

Security Orchestration, Automation, and Response (SOAR) platforms extend SIEM capabilities by automating response actions and coordinating workflows.

### Playbooks

Playbooks are documented, automated procedures for handling specific security scenarios.

**Example: Phishing Email Playbook**
1. **Trigger:** User reports suspicious email
2. **Automatic actions:**
   - Extract email headers, sender, URLs, attachments
   - Check sender against threat intelligence
   - Detonate attachments in sandbox
   - Check URLs against blocklists
   - Query SIEM for other recipients of same email
3. **If malicious confirmed:**
   - Delete email from all recipient mailboxes
   - Block sender domain at email gateway
   - Add URLs to proxy blocklist
   - Create IOCs for future detection
   - Notify affected users
4. **Documentation:** Log all actions, create incident ticket

**Benefits:**
- Consistent response (same steps every time)
- Faster response (automated execution in seconds vs. minutes manually)
- Scalable (handles volume humans can't)
- Documented (full audit trail)

### Automated Response

SOAR can take immediate action without waiting for human approval.

**Examples of automated responses:**
- Disable user account after confirmed compromise
- Isolate infected endpoint from network
- Block malicious IP at firewall
- Quarantine email attachments
- Kill malicious processes on endpoints
- Revoke access tokens

**Considerations:**
- Automation requires confidence—false positives trigger damaging actions
- Some actions require human approval (disabling executive accounts)
- Rollback procedures must exist for automated actions
- Testing in non-production environments first

### Case Management

SOAR platforms track incidents from detection through resolution.

**Case management features:**
- Incident tickets with full event history
- Assignment and escalation workflows
- Evidence collection and preservation
- Timeline reconstruction
- Collaboration features for analyst teams
- Metrics and SLA tracking
- Integration with ticketing systems

**Investigation workflow:**
1. Alert triggers case creation
2. Tier 1 analyst performs initial triage
3. Evidence automatically collected and attached
4. Escalation to Tier 2 if needed
5. Investigation documented in case
6. Resolution and lessons learned recorded
7. Case closed with full audit trail

🎯 **Exam Tip:** SOAR extends SIEM with three key capabilities: **Orchestration** (coordinating tools and workflows), **Automation** (executing responses without human action), and **Response** (taking action on threats). Know examples of each.

---

## Threat Intelligence: Knowing Your Enemy

Threat intelligence is information about threats, threat actors, and their methods that helps organizations anticipate and defend against attacks.

### Types of Threat Intelligence

**Strategic intelligence:** High-level information for executives about threat landscape, industry targeting, geopolitical factors. Answers: "What threats should we worry about?"

**Tactical intelligence:** Information about attacker techniques, tactics, and procedures (TTPs). Answers: "How do attackers operate?"

**Operational intelligence:** Details about specific campaigns or attacks. Answers: "What is this particular threat actor doing?"

**Technical intelligence:** Specific indicators like malicious IPs, domains, file hashes. Answers: "What should we block or detect?"

### Indicators of Compromise (IoCs)

IoCs are observable artifacts indicating potential or actual compromise.

**Common IoC types:**

| IoC Type | Example | Use |
|----------|---------|-----|
| IP addresses | 185.234.72.15 | Firewall blocks, SIEM alerts |
| Domain names | evil-domain.com | DNS blocks, proxy blocks |
| URLs | http://evil.com/malware.exe | Proxy blocks, email filtering |
| File hashes | a1b2c3d4e5f6... (MD5/SHA256) | Endpoint detection, email scanning |
| Email addresses | attacker@evil.com | Email filtering |
| Registry keys | HKLM\Software\Malware | Endpoint detection |
| Mutex names | Global\MalwareMutex | Process monitoring |

**IoC lifecycle:**
1. Discovered during incident or from threat feed
2. Validated (is this actually malicious?)
3. Deployed to security tools
4. Monitored for matches
5. Retired when no longer relevant (attacker changed infrastructure)

### OSINT (Open Source Intelligence)

Intelligence gathered from publicly available sources.

**OSINT sources:**
- Security vendor blogs and reports
- Government advisories (CISA, FBI)
- Security researcher Twitter/social media
- Paste sites (where credentials get dumped)
- Dark web monitoring (leaked data, attack planning)
- VirusTotal and similar services
- Shodan (exposed devices)
- Certificate transparency logs

**OSINT value:** Free, current, broad coverage. Attackers often announce targets, leak data, or discuss techniques publicly before or during attacks.

### Threat Feeds

Automated streams of threat intelligence from external providers.

**Commercial feeds:** Paid services providing curated, high-confidence indicators with context. Examples: Recorded Future, Mandiant, CrowdStrike.

**Open source feeds:** Free community-shared intelligence. Examples: AlienVault OTX, Abuse.ch, Emerging Threats.

**Industry-specific feeds:** ISACs (Information Sharing and Analysis Centers) share threat data within industries. Financial services ISAC, Health ISAC, Energy ISAC.

**Feed integration:** Threat feeds import into SIEM, firewall, proxy, and endpoint tools for automatic detection and blocking.

### STIX and TAXII

Standards for sharing threat intelligence.

**STIX (Structured Threat Information eXpression):** Format for describing threat intelligence. Includes indicators, TTPs, threat actors, campaigns, and relationships between them.

**TAXII (Trusted Automated eXchange of Indicator Information):** Protocol for sharing STIX data. Enables automated exchange between organizations and vendors.

**Why standards matter:** Without standards, every vendor uses proprietary formats. STIX/TAXII enable interoperability—threat intelligence flows automatically between tools regardless of vendor.

**Example STIX data:**
```
Indicator: File hash a1b2c3d4...
Related to: Malware "EvilRAT"
Used by: Threat Actor "APT-XYZ"
Targets: Financial sector
First seen: 2024-01-10
```

---

## Security Operations Center (SOC)

The SOC is a centralized team responsible for monitoring, detecting, and responding to security incidents.

### SOC Structure

**Tier 1 Analysts (Alert Triage)**
- Monitor SIEM alerts and dashboards
- Initial alert triage (true positive vs. false positive)
- Follow standard operating procedures
- Escalate to Tier 2 when needed
- Handle routine incidents

**Skills:** Basic security knowledge, ability to follow procedures, pattern recognition, attention to detail.

**Tier 2 Analysts (Incident Response)**
- Investigate escalated incidents
- Perform deep-dive analysis
- Develop new detection rules
- Handle complex incidents
- Mentor Tier 1 analysts

**Skills:** Strong security expertise, forensic analysis, threat hunting, scripting, tool proficiency.

**Tier 3 Analysts (Threat Hunting / Engineering)**
- Proactive threat hunting
- Develop detection content
- Reverse engineer malware
- Handle advanced persistent threats
- Security tool administration

**Skills:** Expert-level security knowledge, programming, reverse engineering, research capabilities.

### SOC Workflows

**Alert handling:**
1. Alert appears in queue
2. Tier 1 analyst claims alert
3. Initial investigation using runbook
4. Determination: false positive (close), true positive (escalate), needs more info (investigate)
5. If true positive: contain, eradicate, recover
6. Document and close

**Escalation triggers:**
- Confirmed compromise
- Advanced attack techniques observed
- Critical systems affected
- Unusual attacker behavior
- Incident exceeds Tier 1 skill/authority

**Metrics tracked:**
- Mean time to detect (MTTD)
- Mean time to respond (MTTR)
- Alert volume and trends
- True positive vs. false positive ratio
- Incidents by severity and type
- Analyst productivity

### 24/7 Operations

Critical environments require continuous monitoring.

**Shift models:**
- 8-hour shifts (3 shifts/day)
- 12-hour shifts (2 shifts/day)
- Follow-the-sun (geographically distributed teams)

**Handoff procedures:**
- Shift briefings (ongoing incidents, notable events)
- Shared documentation (shift logs)
- Ticket assignments (no orphaned incidents)
- Escalation paths (after-hours contacts)

💡 **Memory Trick:** SOC tiers follow the **"TIR"** pattern: Tier 1 = **T**riage (sort alerts), Tier 2 = **I**nvestigate (analyze incidents), Tier 3 = **R**esearch (hunt threats and engineer solutions).

---

## Key Exam Tips

🎯 **SIEM functions** - Know the core capabilities: aggregate logs, normalize data, correlate events, generate alerts, create reports, retain data long-term.

🎯 **Log sources and insights** - Firewall logs show connections blocked/allowed, IDS/IPS shows attack signatures, system logs show authentication and processes, proxy logs show web activity, DNS logs show domain queries.

🎯 **Key Windows Event IDs** - 4624 (successful logon), 4625 (failed logon), 4672 (admin logon), 4720 (account created), 4732 (group membership change).

🎯 **Analysis techniques** - Anomaly detection compares to baseline, trend analysis tracks changes over time, correlation connects multiple events into attack patterns.

🎯 **SOAR capabilities** - Playbooks automate response procedures, automated response takes action without human intervention, case management tracks incidents.

🎯 **IoC types** - IP addresses, domains, URLs, file hashes, email addresses are common indicator types used for detection and blocking.

🎯 **STIX/TAXII** - STIX is the format for threat intelligence, TAXII is the protocol for exchanging it. Both are industry standards for interoperability.

🎯 **SOC tiers** - Tier 1 triages alerts, Tier 2 investigates incidents, Tier 3 hunts threats and engineers solutions.

💡 **Scenario recognition** - Questions may describe security events and ask what log source would reveal them, or describe an attack pattern and ask which detection technique would identify it.

---

## Key Takeaways

- [ ] SIEM aggregates, normalizes, correlates, and alerts on security data from across the enterprise
- [ ] Log aggregation centralizes data; normalization standardizes formats; correlation connects related events
- [ ] Effective alerting balances sensitivity (catching threats) against noise (avoiding alert fatigue)
- [ ] Firewall logs show network traffic; IDS/IPS logs show attack patterns; system logs show authentication
- [ ] Proxy logs reveal web activity; DNS logs expose domain queries; authentication logs track access
- [ ] Anomaly detection identifies deviations from normal behavior; requires accurate baselines
- [ ] Trend analysis tracks patterns over time; catches slow-moving threats
- [ ] Correlation rules connect multiple events to reveal attack patterns invisible in individual logs
- [ ] SOAR extends SIEM with playbooks, automated response, and case management
- [ ] Playbooks are documented, automated procedures for handling specific security scenarios
- [ ] Threat intelligence includes IoCs (IPs, domains, hashes), TTPs, and contextual information
- [ ] STIX is the format for threat intelligence; TAXII is the protocol for exchanging it
- [ ] OSINT leverages publicly available sources for security intelligence
- [ ] SOC Tier 1 triages alerts, Tier 2 investigates incidents, Tier 3 hunts threats
- [ ] 24/7 SOC operations require shift structures, handoff procedures, and documentation
- [ ] Untested detection rules and untuned alerts reduce SOC effectiveness

---

## Check Your Understanding

**1. A SIEM generates 5,000 alerts daily. After investigation, analysts determine 4,900 are false positives. What should the security team prioritize?**

<details>
<summary>Show Answer</summary>
<strong>Alert tuning to reduce false positive rate.</strong> A 98% false positive rate creates alert fatigue—analysts stop trusting alerts and may miss real threats buried in noise. Tuning approaches: 1) Adjust detection thresholds (reduce sensitivity for noisy rules), 2) Add exclusions for known-benign activity (internal vulnerability scanners, legitimate admin tools), 3) Correlate with context (user location, time, role) before alerting, 4) Suppress repeat alerts (alert once per unique event, not continuously), 5) Prioritize rules by true positive history—disable consistently false-positive rules. Goal: Fewer, higher-quality alerts that analysts trust and investigate thoroughly. A SIEM with 100 alerts daily at 20% true positive rate is more effective than 5,000 alerts at 2%.
</details>

**2. An analyst notices a workstation querying thousands of unique random-looking domains like "xk4m2.evil.com", "j8n3p.evil.com" over several hours. What might this indicate, and which log source revealed it?**

<details>
<summary>Show Answer</summary>
<strong>Possible DNS tunneling or DGA (Domain Generation Algorithm) malware, revealed by DNS logs.</strong> Normal user activity involves querying recognizable domains (google.com, company.com). Thousands of queries to random subdomains indicates: 1) **DGA malware:** Malware generates random domain names to contact command-and-control servers. Only one domain is actually registered by the attacker; the rest fail. But the real C2 domain is hidden among failures. 2) **DNS tunneling:** Data encoded in subdomain strings (like base64) for exfiltration. Each query carries a small payload; thousands of queries transfer significant data. Investigation steps: Query threat intelligence for the parent domain (evil.com), examine timing patterns (periodic = beaconing), check for data encoded in subdomains, isolate the workstation pending investigation.
</details>

**3. Windows Security log shows Event ID 4625 (failed logon) occurring 200 times in 3 minutes for the "administrator" account from an external IP, followed by Event ID 4624 (successful logon) for the same account from the same IP. What happened?**

<details>
<summary>Show Answer</summary>
<strong>Successful brute force attack against the administrator account.</strong> The pattern: 200 failed attempts (guessing passwords) followed by success (correct password found) from external source is textbook brute force. Immediate actions: 1) Disable the compromised administrator account, 2) Block the source IP at the firewall, 3) Check what actions the account performed after successful logon (Event 4672 for special privileges, 4688 for processes created), 4) Trigger incident response. Investigation: How did they know the account existed? Was the password weak? Was account lockout policy not configured? (200 attempts should have triggered lockout). Remediation: Strong passwords, account lockout policies, MFA for administrative accounts, limit administrative account exposure to internet.
</details>

**4. A threat feed provides an IoC: IP address 203.0.113.50 associated with ransomware command-and-control. How should the SOC operationalize this intelligence?**

<details>
<summary>Show Answer</summary>
<strong>Deploy the IoC across detection and prevention tools.</strong> Operationalization steps: 1) **Block at firewall:** Add to blocklist for both inbound and outbound traffic, 2) **Add to SIEM:** Create alert for any connection attempts to this IP (past or future), 3) **Search historical logs:** Query SIEM for past connections to this IP—if found, those systems may be compromised, 4) **Add to proxy:** Block if URL-based variations exist, 5) **Add to EDR:** Alert if endpoints communicate with this IP, 6) **Document:** Record the IoC, source, confidence level, and deployment date. Important: IoCs have a shelf life. Attackers rotate infrastructure. This IP should be reviewed in 30-90 days—if no longer in active use by threat actors, consider removing to reduce processing overhead on security tools.
</details>

**5. An organization wants automated response to disable user accounts immediately upon confirmed credential theft. What concerns should they address before implementing this?**

<details>
<summary>Show Answer</summary>
<strong>Several concerns must be addressed before automated account disabling.</strong> 1) **Detection confidence:** How certain is "confirmed"? False positives disabling legitimate users is disruptive. Define specific, high-confidence triggers. 2) **Executive exceptions:** Automatically disabling the CEO's account has business impact. Create approval workflows for privileged accounts. 3) **Rollback procedures:** When false positive occurs, how quickly can the account be re-enabled? Who has authority? 4) **Documentation:** Automated actions need audit trails—what triggered it, when, what actions taken. 5) **Notification:** Users and their managers should be notified immediately when accounts are disabled. 6) **Testing:** Test in non-production first. Simulate scenarios to verify triggers work correctly. 7) **Scope limitations:** Start with subset of accounts (non-privileged users), expand after proving reliability. 8) **Service accounts:** Disabling service accounts can cause application outages—different handling required.
</details>

**6. A Tier 1 SOC analyst receives an alert about a user accessing 500 files in one hour when their baseline is 20 files daily. What should their triage process include?**

<details>
<summary>Show Answer</summary>
<strong>Systematic triage before escalation or closure.</strong> Triage steps: 1) **Identify the user:** Is this a regular employee, administrator, or service account? Role affects context. 2) **Check calendar/context:** Is there a legitimate reason? (New employee onboarding, end of quarter reporting, project deadline) 3) **Examine file types and locations:** Accessing 500 files in their own project folder differs from 500 files across HR, Finance, and Legal. 4) **Check timing:** During business hours from normal location? Or 3 AM from different country? 5) **Look for other indicators:** Failed logins preceding this? VPN from unusual location? New device? 6) **Check recent changes:** Was user just added to new groups granting broader access? If context explains activity (user doing legitimate bulk operation), document and close. If concerning (sensitive files, unusual timing, other indicators), escalate to Tier 2 with findings. Don't spend hours investigating—Tier 1 triages in minutes and escalates when uncertain.
</details>

**7. What distinguishes anomaly detection from signature-based detection, and when is each most effective?**

<details>
<summary>Show Answer</summary>
<strong>Signature detection matches known patterns; anomaly detection identifies deviations from normal.</strong> **Signature-based:** Compares activity against database of known attack patterns. Effective for: known malware, documented exploit techniques, previously-seen attacks. Limitations: Can't detect novel attacks with no signature. Attacker changes one byte and evades detection. **Anomaly-based:** Establishes baseline of "normal" and alerts on deviations. Effective for: zero-day attacks, insider threats, novel techniques never seen before. The attack is detected because behavior is unusual, not because a specific pattern matches. Limitations: Requires accurate baselines (learning period), generates false positives when legitimate behavior changes, sophisticated attackers operate within "normal" parameters. **Optimal approach:** Use both together. Signatures catch known threats efficiently. Anomalies catch novel threats that evade signatures. Example: Signature detects known malware hash. Anomaly detects unknown malware because infected host contacts unusual destination at unusual time—even though the malware itself wasn't recognized.
</details>

**8. Explain how STIX and TAXII work together for threat intelligence sharing between organizations.**

<details>
<summary>Show Answer</summary>
<strong>STIX defines what to share; TAXII defines how to share it.</strong> **STIX (Structured Threat Information eXpression):** A standardized format (JSON-based) describing threat intelligence objects: Indicators (observables like IPs, hashes), Threat Actors (who), Malware (what), Attack Patterns (how), Campaigns (coordinated activity), Relationships between objects. STIX allows one organization to describe "File hash ABC is malware called EvilRAT used by APT-XYZ targeting financial sector" in a format any other organization's tools can understand. **TAXII (Trusted Automated eXchange of Indicator Information):** A protocol defining how to transport STIX data. Supports: Collections (repositories of intelligence), Channels (publish/subscribe feeds), Direct requests (API calls for specific data). **Together:** Organization A discovers new threat, creates STIX document describing it, publishes via TAXII server. Organization B's SIEM subscribes to Organization A's TAXII feed, automatically receives the STIX document, imports indicators into detection tools. No manual effort required once established. **Why standards matter:** Before STIX/TAXII, sharing meant emails with attached spreadsheets requiring manual processing. Standards enable automated, real-time sharing across industries and vendors.
</details>

---

## Next Lesson Preview

**Lesson 23: Vulnerability and Penetration Testing** examines how organizations proactively discover weaknesses before attackers do. You'll learn about vulnerability scanning tools and techniques, the different types of penetration tests (black box, white box, gray box), the phases of a penetration test, and the critical differences between red team, blue team, and purple team exercises. Understanding offensive security helps defenders anticipate and prepare for real attacks.

---

✅ **LESSON 22 COMPLETE!**

**Progress:** 22 of 30 lessons complete (73%)

You now understand how organizations achieve security visibility through SIEM, log analysis, threat intelligence, and SOC operations. These capabilities form the foundation of security operations—transforming security from "hoping attacks don't happen" to "detecting and responding when they do."

**Key concepts mastered:**
- SIEM core functions (aggregation, correlation, alerting)
- Critical log sources and what each reveals
- Analysis techniques (anomaly, trend, baseline, correlation)
- SOAR automation with playbooks and automated response
- Threat intelligence including IoCs, OSINT, STIX/TAXII
- SOC structure and tier responsibilities

---