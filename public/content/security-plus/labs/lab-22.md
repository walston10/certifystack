# Lab 22: Security Monitoring and SIEM

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 4.1 - Given a scenario, apply common security techniques to computing resources

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is a SIEM, and what are its primary functions?**

2. **What is the difference between a log and an event? Give an example of each.**

3. **Explain the difference between signature-based and anomaly-based detection in security monitoring.**

4. **What is SOAR, and how does it complement SIEM?**

5. **Why is log correlation important for security monitoring?**

---

## Section 2: Hands-On Activities

### Activity A: SIEM Core Functions

**Goal:** Understand SIEM capabilities.

**SIEM primary functions:**

| Function | Description | Example |
|----------|-------------|---------|
| Log aggregation | | |
| Normalization | | |
| Correlation | | |
| Alerting | | |
| Dashboards | | |
| Reporting | | |
| Retention | | |
| Forensics | | |

**SIEM data flow:**

```
[Log Sources] → [Collection] → [Normalization] → [Storage] → [Analysis] → [Alerts/Reports]
```

Describe what happens at each stage:

| Stage | What Happens |
|-------|--------------|
| Log Sources | |
| Collection | |
| Normalization | |
| Storage | |
| Analysis | |
| Alerts/Reports | |

---

### Activity B: Log Sources

**Goal:** Identify critical log sources.

**Common log sources:**

| Source | What It Logs | Security Value |
|--------|--------------|----------------|
| Firewalls | | |
| IDS/IPS | | |
| Routers/Switches | | |
| Servers (OS) | | |
| Domain Controllers | | |
| Web servers | | |
| Database servers | | |
| Email servers | | |
| VPN concentrators | | |
| Endpoint protection | | |
| Cloud services | | |
| Applications | | |

**Log priority for security:**

| Priority | Log Source | Why Critical |
|----------|------------|--------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

**What should each source log?**

| Source | Critical Events to Log |
|--------|----------------------|
| Firewall | |
| Windows Server | |
| Web Server | |
| Database | |

---

### Activity C: Syslog and Log Formats

**Goal:** Understand log standards.

**Syslog severity levels:**

| Level | Name | Description | Example |
|-------|------|-------------|---------|
| 0 | | | |
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |

**Syslog facility codes:**

| Code | Facility | Description |
|------|----------|-------------|
| 0 | kern | |
| 1 | user | |
| 4 | auth | |
| 10 | authpriv | |
| 13 | security | |

**Syslog message format:**

```
<PRI>TIMESTAMP HOSTNAME TAG: MESSAGE
```

Parse this syslog message:

```
<38>Nov 15 10:30:45 firewall01 kernel: Dropped packet from 192.168.1.100 to 10.0.0.5 port 22
```

| Component | Value | Meaning |
|-----------|-------|---------|
| PRI | | |
| Timestamp | | |
| Hostname | | |
| Tag | | |
| Message | | |

**Calculate priority (PRI):**

Formula: PRI = (Facility × 8) + Severity

| Facility | Severity | PRI |
|----------|----------|-----|
| 4 (auth) | 3 (error) | |
| 1 (user) | 6 (info) | |
| 0 (kern) | 2 (critical) | |

---

### Activity D: Windows Event Logs

**Goal:** Understand Windows logging.

**Windows Event Log categories:**

| Log | What It Contains | Security Relevance |
|-----|------------------|-------------------|
| Security | | |
| System | | |
| Application | | |
| Setup | | |
| Forwarded Events | | |

**Critical Security Event IDs:**

| Event ID | Description | Why Important |
|----------|-------------|---------------|
| 4624 | | |
| 4625 | | |
| 4634 | | |
| 4648 | | |
| 4672 | | |
| 4688 | | |
| 4720 | | |
| 4722 | | |
| 4724 | | |
| 4728 | | |
| 4732 | | |
| 4756 | | |
| 1102 | | |

**Logon types:**

| Type | Name | Description |
|------|------|-------------|
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 7 | | |
| 10 | | |
| 11 | | |

**Analyze this event:**

```
Event ID: 4625
Logon Type: 3
Account Name: administrator
Source Network Address: 10.0.0.50
Failure Reason: Unknown user name or bad password
```

| Question | Answer |
|----------|--------|
| What happened? | |
| Logon type meaning? | |
| Suspicious indicators? | |
| Possible attack? | |

---

### Activity E: Log Correlation

**Goal:** Understand correlation for threat detection.

**Why correlate logs?**

| Reason | Explanation |
|--------|-------------|
| Single event insufficient | |
| Reduce false positives | |
| Detect attack patterns | |
| Provide context | |

**Correlation scenarios:**

**Scenario 1: Brute Force Attack**

| Time | Source | Event |
|------|--------|-------|
| 10:00:01 | DC | 4625 - Failed login (admin) |
| 10:00:02 | DC | 4625 - Failed login (admin) |
| 10:00:03 | DC | 4625 - Failed login (admin) |
| 10:00:04 | DC | 4625 - Failed login (admin) |
| 10:00:05 | DC | 4624 - Successful login (admin) |

Correlation rule: _______________________________________________

Alert: _________________________________________________________

**Scenario 2: Lateral Movement**

| Time | Source | Event |
|------|--------|-------|
| 11:00:00 | Workstation | 4624 - Login from external IP |
| 11:05:00 | Workstation | 4688 - PowerShell launched |
| 11:10:00 | Server01 | 4624 - Login from Workstation |
| 11:15:00 | Server02 | 4624 - Login from Server01 |
| 11:20:00 | DC | 4624 - Login from Server02 |

What pattern indicates lateral movement?

_________________________________________________________________

**Scenario 3: Data Exfiltration**

| Time | Source | Event |
|------|--------|-------|
| 14:00 | File Server | Large file access by user |
| 14:05 | Email Server | Large attachment sent externally |
| 14:10 | Firewall | Large outbound transfer to unknown IP |

Correlation rule to detect:

_________________________________________________________________

---

### Activity F: Alert Management

**Goal:** Handle security alerts effectively.

**Alert severity levels:**

| Level | Response Time | Example |
|-------|---------------|---------|
| Critical | | |
| High | | |
| Medium | | |
| Low | | |
| Informational | | |

**Alert triage process:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**Alert fatigue:**

What is alert fatigue?

_________________________________________________________________

Causes:

| Cause | Solution |
|-------|----------|
| Too many alerts | |
| False positives | |
| Unclear priorities | |
| No context | |

**Tuning alerts:**

| Technique | Description |
|-----------|-------------|
| Whitelisting | |
| Threshold adjustment | |
| Correlation rules | |
| Suppression | |
| Enrichment | |

---

### Activity G: Threat Intelligence

**Goal:** Integrate threat intelligence with monitoring.

**Threat intelligence types:**

| Type | Description | Example |
|------|-------------|---------|
| Strategic | | |
| Tactical | | |
| Operational | | |
| Technical | | |

**Indicators of Compromise (IoC):**

| IoC Type | Example | Use |
|----------|---------|-----|
| IP addresses | | |
| Domain names | | |
| File hashes | | |
| URLs | | |
| Email addresses | | |
| Registry keys | | |

**Threat intelligence feeds:**

| Source Type | Examples |
|-------------|----------|
| Commercial | |
| Open source | |
| Government | |
| Industry sharing | |

**STIX and TAXII:**

| Standard | Purpose |
|----------|---------|
| STIX | |
| TAXII | |

---

### Activity H: SOAR Concepts

**Goal:** Understand security automation.

**SOAR components:**

| Component | Description |
|-----------|-------------|
| Security Orchestration | |
| Automation | |
| Response | |

**SOAR use cases:**

| Use Case | Manual Process | Automated Process |
|----------|----------------|-------------------|
| Phishing email | | |
| Malware alert | | |
| Account lockout | | |
| Threat intel match | | |

**Playbook example - Phishing:**

| Step | Automated Action |
|------|------------------|
| 1 | Alert received from email security |
| 2 | |
| 3 | |
| 4 | |
| 5 | |
| 6 | |

**SOAR benefits:**

| Benefit | Explanation |
|---------|-------------|
| Speed | |
| Consistency | |
| Scale | |
| Documentation | |
| Analyst focus | |

---

### Activity I: Security Metrics and KPIs

**Goal:** Measure security operations effectiveness.

**Key security metrics:**

| Metric | What It Measures | Target |
|--------|------------------|--------|
| MTTD (Mean Time to Detect) | | |
| MTTR (Mean Time to Respond) | | |
| Alert volume | | |
| False positive rate | | |
| Incidents per period | | |
| Time to containment | | |

**Calculate metrics:**

| Scenario | Calculation | Result |
|----------|-------------|--------|
| 100 alerts, 30 false positives | FP rate = | |
| Detected at 10:00, attack started 9:00 | MTTD = | |
| Detected at 10:00, contained at 11:30 | MTTR = | |

**Dashboard elements:**

| Widget | Purpose |
|--------|---------|
| Alert trend | |
| Top attackers | |
| Geographic map | |
| Severity breakdown | |
| Open incidents | |
| Compliance status | |

---

### Activity J: Log Retention and Compliance

**Goal:** Understand retention requirements.

**Retention requirements by regulation:**

| Regulation | Retention Period | Log Types |
|------------|------------------|-----------|
| PCI DSS | | |
| HIPAA | | |
| SOX | | |
| GDPR | | |
| General best practice | | |

**Retention considerations:**

| Factor | Impact on Retention |
|--------|---------------------|
| Storage costs | |
| Compliance | |
| Investigation needs | |
| Performance | |
| Legal holds | |

**Log storage tiers:**

| Tier | Description | Retention | Access Speed |
|------|-------------|-----------|--------------|
| Hot | | | |
| Warm | | | |
| Cold | | | |
| Archive | | | |

---

### Activity K: Security Operations Center (SOC)

**Goal:** Understand SOC structure and operations.

**SOC tiers:**

| Tier | Role | Responsibilities |
|------|------|------------------|
| Tier 1 | | |
| Tier 2 | | |
| Tier 3 | | |

**SOC tools:**

| Tool Category | Purpose | Examples |
|---------------|---------|----------|
| SIEM | | |
| SOAR | | |
| Ticketing | | |
| Threat Intel | | |
| EDR | | |
| Network tools | | |

**SOC workflow:**

| Phase | Activities |
|-------|------------|
| Monitor | |
| Detect | |
| Triage | |
| Investigate | |
| Respond | |
| Document | |

**24/7 coverage models:**

| Model | Description | Pros | Cons |
|-------|-------------|------|------|
| Follow the sun | | | |
| Shift-based | | | |
| Hybrid | | | |
| MSSP | | | |

---

### Activity L: Monitoring Scenarios

**Goal:** Apply monitoring concepts to real situations.

**Scenario 1:** Analyze these logs

```
10:00:00 Firewall - ALLOW 203.0.113.50 -> 192.168.1.10:443
10:00:05 Web Server - POST /login.php 200 - 203.0.113.50
10:00:06 Web Server - POST /login.php 401 - 203.0.113.50
10:00:07 Web Server - POST /login.php 401 - 203.0.113.50
10:00:08 Web Server - POST /login.php 401 - 203.0.113.50
10:00:09 Web Server - POST /login.php 200 - 203.0.113.50
10:00:15 Web Server - GET /admin/users.php 200 - 203.0.113.50
10:00:20 Database - SELECT * FROM users - webserver
10:00:25 Firewall - ALLOW 192.168.1.10 -> 203.0.113.99:21
```

| Question | Answer |
|----------|--------|
| What attack is occurring? | |
| What is the attacker doing after login? | |
| What's suspicious about the last entry? | |
| What alert should trigger? | |

**Scenario 2:** Create correlation rule

Detect potential data exfiltration:
- User accesses sensitive files
- Within 1 hour, large outbound transfer
- Destination is external

Write the rule logic:

```
IF _______________________________________________
AND ______________________________________________
AND ______________________________________________
WITHIN ___________________________________________
THEN _____________________________________________
```

**Scenario 3:** Alert prioritization

| Alert | Source | Priority | Reasoning |
|-------|--------|----------|-----------|
| Malware detected on CEO laptop | EDR | | |
| Failed login from internal IP | DC | | |
| Outbound connection to known C2 | Firewall | | |
| Port scan from internet | IDS | | |
| User accessed file share normally | File server | | |

---

### Tier 2 Bonus: Windows Event Log Analysis

> ⚠️ **Requires:** Command line access (Admin recommended)

---

### Activity M: Query Windows Security Events

**View recent security events:**

PowerShell:
```powershell
Get-WinEvent -LogName Security -MaxEvents 20 | Select-Object TimeCreated, Id, Message | Format-List
```

Document 3 events:

| Time | Event ID | Description |
|------|----------|-------------|
| | | |
| | | |
| | | |

**Search for failed logins (4625):**

```powershell
Get-WinEvent -FilterHashtable @{LogName='Security';ID=4625} -MaxEvents 10 -ErrorAction SilentlyContinue
```

Any failed logins found? _______________

**Search for successful logins (4624):**

```powershell
Get-WinEvent -FilterHashtable @{LogName='Security';ID=4624} -MaxEvents 10 | Select-Object TimeCreated, Message
```

**Check event log size:**

```powershell
Get-WinEvent -ListLog Security | Select-Object LogName, MaximumSizeInBytes, RecordCount, FileSize
```

| Property | Value |
|----------|-------|
| Max Size | |
| Record Count | |
| Current Size | |

Is the log size adequate for investigation? _______________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your SIEM is generating 50,000 alerts per day. The SOC team can only investigate 500. What strategies do you implement to ensure critical threats aren't missed?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Management asks why you need to keep logs for 1 year when "nothing ever happens." How do you justify the storage costs and retention policy?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A breach investigation reveals the attack occurred 3 months ago, but it wasn't detected until now. What monitoring improvements would have enabled earlier detection?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain SIEM core functions
- [ ] Identify critical log sources
- [ ] Understand syslog severity levels (0-7)
- [ ] Recognize important Windows Event IDs
- [ ] Explain log correlation and its importance
- [ ] Describe alert management and tuning
- [ ] Understand threat intelligence integration
- [ ] Explain SOAR and automation benefits
- [ ] Define security metrics (MTTD, MTTR)
- [ ] Understand SOC tiers and operations

---

## What You Learned Today

- ✅ Explored SIEM functions
- ✅ Identified log sources
- ✅ Analyzed syslog format
- ✅ Studied Windows Event IDs
- ✅ Created correlation rules
- ✅ Managed alerts effectively
- ✅ Integrated threat intelligence
- ✅ Understood SOAR automation
- ✅ Calculated security metrics
- ✅ Reviewed log retention
- ✅ Explored SOC operations
- ✅ Solved monitoring scenarios
- ✅ (Tier 2) Queried Windows events

**Next Lab:** Vulnerability and Penetration Testing - scanning, assessment, and testing methodologies.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 22: Security Monitoring and SIEM*