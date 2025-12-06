# Lab 22: Security Monitoring and SIEM - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Security monitoring is essential for detection and response.

---

## Section 1: Concept Check - Answers

**1. SIEM and primary functions:**

**Answer:**

**SIEM (Security Information and Event Management)** collects, correlates, and analyzes security data from across the enterprise.

**Primary functions:**
- Log aggregation from multiple sources
- Normalization (common format)
- Correlation (relate events)
- Alerting on threats
- Dashboards and reporting
- Long-term storage for forensics

---

**2. Log vs Event:**

**Answer:**

| Term | Definition | Example |
|------|------------|---------|
| **Log** | Record of activity | Server access log file |
| **Event** | Specific occurrence within a log | Failed login attempt at 10:00 AM |

Logs contain many events; events are individual entries within logs.

---

**3. Signature-based vs Anomaly-based:**

**Answer:**

| Type | How It Works | Pros | Cons |
|------|--------------|------|------|
| **Signature** | Matches known patterns | Accurate for known threats | Misses new attacks |
| **Anomaly** | Detects deviation from baseline | Catches unknown threats | High false positives |

---

**4. SOAR:**

**Answer:**

**SOAR (Security Orchestration, Automation, and Response)** automates security workflows and incident response.

**Complements SIEM by:**
- Automating response to SIEM alerts
- Orchestrating actions across tools
- Executing playbooks automatically
- Reducing manual analyst work
- Ensuring consistent response

---

**5. Log correlation importance:**

**Answer:**

Correlation combines events from multiple sources to:
- Identify attack patterns invisible in single logs
- Reduce false positives (multiple indicators = higher confidence)
- Provide attack context and timeline
- Detect sophisticated multi-stage attacks
- Enable faster, more accurate detection

---

## Section 2: Activity Solutions

### Activity A: SIEM Functions - Answers

| Function | Description | Example |
|----------|-------------|---------|
| Log aggregation | Collect from all sources | Firewall, servers, apps |
| Normalization | Convert to common format | Different timestamps unified |
| Correlation | Relate events across sources | Failed logins + firewall block |
| Alerting | Notify on threats | Email/SMS on critical events |
| Dashboards | Visual monitoring | Real-time threat map |
| Reporting | Compliance/summary reports | Monthly security report |
| Retention | Long-term storage | 1-year log archive |
| Forensics | Investigation support | Search historical logs |

**Data flow:**

| Stage | What Happens |
|-------|--------------|
| Log Sources | Devices/apps generate logs |
| Collection | Agents/syslog forward to SIEM |
| Normalization | Convert to common schema |
| Storage | Index and store in database |
| Analysis | Rules/ML detect threats |
| Alerts/Reports | Notify analysts, generate reports |

---

### Activity B: Log Sources - Answers

| Source | What It Logs | Security Value |
|--------|--------------|----------------|
| Firewalls | Allow/deny, connections | Perimeter visibility |
| IDS/IPS | Attacks, threats | Threat detection |
| Routers/Switches | Traffic, port changes | Network visibility |
| Servers (OS) | Logins, processes | Host activity |
| Domain Controllers | Auth, group changes | Identity events |
| Web servers | Requests, errors | App attacks |
| Database | Queries, access | Data access |
| Email | Send/receive, spam | Phishing, exfil |
| VPN | Connections, auth | Remote access |
| Endpoint protection | Malware, blocks | Endpoint threats |
| Cloud | API calls, access | Cloud activity |
| Applications | App-specific events | Business logic |

**Log priority:**

| Priority | Source | Why |
|----------|--------|-----|
| 1 | Domain Controllers | All authentication |
| 2 | Firewalls | Perimeter visibility |
| 3 | Endpoint protection | Malware detection |
| 4 | Servers | Host compromise |
| 5 | Web/App servers | Attack surface |

---

### Activity C: Syslog - Answers

**Severity levels:**

| Level | Name | Description | Example |
|-------|------|-------------|---------|
| 0 | Emergency | System unusable | Kernel panic |
| 1 | Alert | Immediate action needed | Database corrupt |
| 2 | Critical | Critical condition | Disk failure |
| 3 | Error | Error condition | App crash |
| 4 | Warning | Warning condition | Disk 90% full |
| 5 | Notice | Normal but significant | Service restart |
| 6 | Informational | Information | User login |
| 7 | Debug | Debug messages | Developer info |

**Parse syslog:**

| Component | Value | Meaning |
|-----------|-------|---------|
| PRI | 38 | Facility 4, Severity 6 |
| Timestamp | Nov 15 10:30:45 | When it occurred |
| Hostname | firewall01 | Source device |
| Tag | kernel | Subsystem |
| Message | Dropped packet... | What happened |

**Calculate PRI:**

| Facility | Severity | PRI |
|----------|----------|-----|
| 4 (auth) | 3 (error) | 35 |
| 1 (user) | 6 (info) | 14 |
| 0 (kern) | 2 (critical) | 2 |

---

### Activity D: Windows Events - Answers

| Log | Contains | Security Use |
|-----|----------|--------------|
| Security | Auth, audit events | Primary security log |
| System | OS events | System issues |
| Application | App events | App issues |
| Setup | Installation | Unauthorized installs |
| Forwarded | Remote logs | Centralized monitoring |

**Critical Event IDs:**

| ID | Description | Why Important |
|----|-------------|---------------|
| 4624 | Successful login | Track access |
| 4625 | Failed login | Brute force detection |
| 4634 | Logoff | Session tracking |
| 4648 | Explicit credential use | Pass-the-hash |
| 4672 | Special privileges assigned | Admin activity |
| 4688 | Process created | Malware execution |
| 4720 | User created | Unauthorized accounts |
| 4722 | User enabled | Account activation |
| 4724 | Password reset | Credential compromise |
| 4728 | User added to global group | Privilege escalation |
| 4732 | User added to local group | Local admin |
| 4756 | User added to universal group | Domain changes |
| 1102 | Audit log cleared | Evidence destruction |

**Logon types:**

| Type | Name | Description |
|------|------|-------------|
| 2 | Interactive | Console login |
| 3 | Network | SMB, mapped drive |
| 4 | Batch | Scheduled task |
| 5 | Service | Service startup |
| 7 | Unlock | Workstation unlock |
| 10 | RemoteInteractive | RDP |
| 11 | CachedInteractive | Cached credentials |

**Event analysis:**

| Question | Answer |
|----------|--------|
| What happened | Failed network login attempt |
| Logon type | 3 = Network (SMB, RDP, etc.) |
| Suspicious | Administrator account, network source |
| Possible attack | Brute force, password spraying |

---

### Activity E: Correlation - Answers

**Scenario 1 (Brute Force):**

Correlation rule: IF 4625 count > 4 within 60 seconds THEN alert "Brute force attempt"

Alert: Successful login after multiple failures = potential compromise

**Scenario 2 (Lateral Movement):**

Pattern: Login → PowerShell → Login to another server → Login to another → DC access

This shows systematic movement through network, escalating toward domain controller.

**Scenario 3 (Exfiltration):**

Rule: IF (large file access) AND (large email attachment OR large outbound transfer) within 1 hour THEN alert "Potential exfiltration"

---

### Activity F: Alert Management - Answers

| Level | Response | Example |
|-------|----------|---------|
| Critical | Immediate (<15 min) | Active breach |
| High | 1 hour | Malware detected |
| Medium | 4 hours | Policy violation |
| Low | 24 hours | Suspicious activity |
| Informational | Review weekly | Audit events |

**Alert fatigue:** Overwhelming number of alerts causing analysts to miss real threats.

**Solutions:**

| Cause | Solution |
|-------|----------|
| Too many alerts | Tune thresholds, prioritize |
| False positives | Whitelist, better rules |
| Unclear priorities | Severity classification |
| No context | Enrich with asset/user info |

---

### Activity G: Threat Intelligence - Answers

| Type | Description | Example |
|------|-------------|---------|
| Strategic | High-level trends | Nation-state threats |
| Tactical | TTPs | Attack techniques |
| Operational | Campaign details | Specific APT activity |
| Technical | IoCs | IPs, hashes, domains |

**STIX/TAXII:**

| Standard | Purpose |
|----------|---------|
| STIX | Format for threat info (what) |
| TAXII | Protocol to share (how) |

---

### Activity H: SOAR - Answers

| Component | Description |
|-----------|-------------|
| Orchestration | Coordinate tools/workflows |
| Automation | Execute without humans |
| Response | Take action on threats |

**Phishing playbook:**

| Step | Action |
|------|--------|
| 1 | Alert from email security |
| 2 | Extract sender, URLs, attachments |
| 3 | Check URLs/hashes against threat intel |
| 4 | Quarantine email from all mailboxes |
| 5 | Check if any user clicked |
| 6 | Create ticket, notify analyst |

---

### Activity I: Metrics - Answers

| Metric | Measures | Target |
|--------|----------|--------|
| MTTD | Time from attack to detection | Lower = better |
| MTTR | Time from detection to resolution | Lower = better |
| Alert volume | Number of alerts | Manageable level |
| FP rate | Percentage false positives | <10% |
| Incidents | Confirmed security events | Trend downward |
| Containment | Time to stop attack | Minutes/hours |

**Calculations:**

| Scenario | Calculation | Result |
|----------|-------------|--------|
| 30/100 false positives | 30/100 × 100 | 30% FP rate |
| Detected 10:00, started 9:00 | 10:00 - 9:00 | 1 hour MTTD |
| Detected 10:00, contained 11:30 | 11:30 - 10:00 | 1.5 hours MTTR |

---

### Activity J: Retention - Answers

| Regulation | Period | Logs |
|------------|--------|------|
| PCI DSS | 1 year | All security-related |
| HIPAA | 6 years | Access to PHI |
| SOX | 7 years | Financial system access |
| GDPR | As needed | Varies |
| Best practice | 1+ years | All security logs |

**Storage tiers:**

| Tier | Description | Retention | Access |
|------|-------------|-----------|--------|
| Hot | Current analysis | Days | Fast |
| Warm | Recent history | Weeks | Moderate |
| Cold | Long-term | Months | Slow |
| Archive | Compliance | Years | Very slow |

---

### Activity K: SOC - Answers

| Tier | Role | Responsibilities |
|------|------|------------------|
| 1 | Analyst | Alert triage, initial review |
| 2 | Senior Analyst | Investigation, escalation |
| 3 | Expert | Advanced forensics, hunting |

**24/7 models:**

| Model | Description | Pros | Cons |
|-------|-------------|------|------|
| Follow sun | Global teams by timezone | No night shifts | Handoff complexity |
| Shift-based | 24/7 shifts at one location | Continuity | Night shift fatigue |
| Hybrid | Mix of above | Flexible | Complex scheduling |
| MSSP | Outsourced | Cost-effective | Less control |

---

### Activity L: Scenarios - Answers

**Scenario 1:**

| Question | Answer |
|----------|--------|
| Attack | Brute force → successful login |
| After login | Accessing admin page, querying users |
| Suspicious | Outbound FTP to external IP |
| Alert | Brute force + admin access + data exfil |

**Scenario 2 (Exfil rule):**

```
IF user accesses files with classification="sensitive"
AND outbound_transfer_size > 100MB
AND destination_IP NOT IN corporate_IPs
WITHIN 1 hour
THEN alert "Potential data exfiltration"
```

**Scenario 3 (Priority):**

| Alert | Priority | Reasoning |
|-------|----------|-----------|
| Malware on CEO laptop | Critical | High-value target |
| Failed login internal | Low | Normal activity |
| Known C2 connection | Critical | Active compromise |
| Port scan from internet | Medium | Reconnaissance |
| Normal file access | Informational | Normal activity |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: 50,000 alerts, can only investigate 500**

**Strategies:**
1. Tune rules to reduce false positives
2. Prioritize by asset criticality
3. Implement SOAR automation
4. Correlate to reduce volume
5. Use threat intelligence to prioritize
6. Whitelist known good activity
7. Focus on critical/high severity first
8. Use ML-based anomaly detection

---

**Scenario 2: Justify 1-year retention**

**Justifications:**
- Compliance requirements (PCI, HIPAA, SOX)
- Advanced threats have long dwell time (avg 200+ days)
- Forensic investigations need historical data
- Trend analysis requires baseline
- Legal/regulatory holds
- Insurance requirements
- Cost of breach far exceeds storage cost

---

**Scenario 3: Detect 3-month-old breach earlier**

**Improvements:**
- Better baseline for anomaly detection
- User behavior analytics (UBA)
- More comprehensive logging
- Regular threat hunting
- Improved correlation rules
- Faster MTTD metrics and monitoring
- External threat intelligence
- Better endpoint visibility (EDR)

---

## Key Exam Tips

1. **SIEM functions:** Aggregate, normalize, correlate, alert, store

2. **Syslog severity 0-7:** 0 = Emergency (worst), 7 = Debug (least)

3. **Windows Event IDs:**
   - 4624 = Successful login
   - 4625 = Failed login
   - 4688 = Process created
   - 1102 = Log cleared

4. **Logon Type 3:** Network (SMB, mapped drive)
   **Logon Type 10:** RDP

5. **SOAR:** Automation + orchestration + response

6. **MTTD:** Time to detect
   **MTTR:** Time to respond/repair

7. **STIX:** Format for threat intelligence
   **TAXII:** Protocol to share it

8. **SOC Tier 1:** Alert triage
   **SOC Tier 2:** Investigation
   **SOC Tier 3:** Advanced/hunting

9. **Correlation:** Combining events to detect patterns

10. **Alert fatigue:** Too many alerts = missed threats

---

## Common Mistakes to Avoid

❌ Confusing syslog severity (0 is worst, not best)

❌ Thinking SIEM automatically stops attacks (it detects, not blocks)

❌ Forgetting log retention compliance requirements

❌ Not understanding correlation value

❌ Thinking more alerts = better (alert fatigue)

❌ Confusing SIEM with SOAR

---

**Congratulations on completing Lab 22!**

Security monitoring is the foundation of detection and response—essential for any SOC role.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 22: Security Monitoring and SIEM - Solution Guide*