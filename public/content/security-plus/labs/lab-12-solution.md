# Lab 12: Vulnerability Management - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Vulnerability management is a critical operational security function tested heavily on Security+.

---

## Section 1: Concept Check - Answers

**1. Vulnerability scan vs Penetration test:**

**Answer:**

| Aspect | Vulnerability Scan | Penetration Test |
|--------|-------------------|------------------|
| **Purpose** | Identify known vulnerabilities | Prove exploitability, test defenses |
| **Method** | Automated scanning | Manual, skilled testing |
| **Depth** | Surface-level detection | Deep exploitation attempts |
| **Risk** | Low, non-invasive | Higher, may impact systems |
| **Output** | List of potential vulnerabilities | Proof of compromise, attack narrative |
| **Frequency** | Regular (weekly/monthly) | Periodic (annual/semi-annual) |

---

**2. Credentialed vs Non-credentialed scans:**

**Answer:**

| Type | Description | Use Case |
|------|-------------|----------|
| **Credentialed** | Scanner logs in with valid credentials | Complete assessment, patch auditing |
| **Non-credentialed** | Scanner has no system access | External perspective, discovery |

**Credentialed advantages:** More accurate, finds more vulnerabilities, fewer false positives, can check configurations, patch levels, local vulnerabilities

**Non-credentialed use:** When credentials aren't available, simulating external attacker view, quick reconnaissance

---

**3. What is CVSS?**

**Answer:**

**CVSS (Common Vulnerability Scoring System)** is a standardized framework for rating vulnerability severity on a 0-10 scale.

**How it's used:**
- Prioritize remediation efforts
- Compare vulnerability severity
- Meet compliance requirements
- Communicate risk to stakeholders
- Set remediation SLAs

---

**4. What is a false positive?**

**Answer:**

A **false positive** is when the scanner reports a vulnerability that doesn't actually exist.

**Why problematic:**
- Wastes time investigating non-issues
- Creates "alert fatigue"
- Reduces trust in scanning tools
- Diverts resources from real vulnerabilities
- May cause unnecessary system changes

---

**5. Vulnerability management lifecycle:**

**Answer:**

1. **Discovery/Inventory** - Know what you have
2. **Vulnerability Scanning** - Find weaknesses
3. **Analysis/Prioritization** - Determine what matters
4. **Remediation Planning** - Plan the fix
5. **Remediation** - Apply the fix
6. **Verification** - Confirm it worked
7. **Reporting** - Communicate status

---

## Section 2: Activity Solutions

### Activity A: Lifecycle Phases - Answers

| Phase | Activities | Output |
|-------|------------|--------|
| Discovery | Asset discovery, inventory updates | Complete asset list |
| Scanning | Run vulnerability scans | Raw vulnerability data |
| Analysis | Review results, prioritize | Prioritized vuln list |
| Planning | Create remediation plans, assign owners | Remediation schedule |
| Remediation | Patch, configure, mitigate | Applied fixes |
| Verification | Rescan, confirm fixes | Validation results |
| Reporting | Metrics, dashboards, reports | Status reports |

**Activity mapping:**

| Activity | Phase |
|----------|-------|
| Apply security patches | Remediation |
| Determine asset criticality | Analysis |
| Run Nessus scan | Scanning |
| Generate executive dashboard | Reporting |
| Identify all network devices | Discovery |
| Rescan to confirm fix | Verification |
| Create patching schedule | Planning |
| Review CVSS scores | Analysis |
| Document exceptions | Reporting |
| Assign remediation owners | Planning |

---

### Activity B: Scanning Concepts - Answers

**Scanner types:**

| Type | What It Scans | Examples |
|------|---------------|----------|
| Network vulnerability | Hosts, services, known CVEs | Nessus, Qualys, OpenVAS |
| Web application | Web apps for OWASP vulnerabilities | Burp Suite, OWASP ZAP, Acunetix |
| Database | Database configurations, vulnerabilities | DbProtect, AppDetectivePro |
| Cloud configuration | Cloud misconfigurations | Prisma Cloud, AWS Inspector |
| Container | Container images, runtime | Trivy, Aqua, Twistlock |
| SAST | Source code for vulnerabilities | SonarQube, Checkmarx, Fortify |

**Credentialed vs Non-credentialed:**

| Aspect | Credentialed | Non-Credentialed |
|--------|--------------|------------------|
| Access level | Admin/root login | External only |
| Accuracy | High | Lower |
| False positives | Fewer | More |
| Depth | Local vulns, configs, patches | Remote vulns only |
| Performance impact | Higher | Lower |
| Use case | Internal assessment | External perspective |

**Active vs Passive:**

| Aspect | Active | Passive |
|--------|--------|---------|
| How it works | Sends probes, requests | Monitors traffic |
| Network impact | Noticeable | None |
| Coverage | Comprehensive | Limited to observed traffic |
| Stealth | Detectable | Undetectable |
| Examples | Nessus, Nmap | Network monitoring, flow analysis |

---

### Activity C: CVSS Scoring - Answers

| Score Range | Severity | Response |
|-------------|----------|----------|
| 0.0 | None | No action needed |
| 0.1 - 3.9 | Low | Schedule remediation |
| 4.0 - 6.9 | Medium | Remediate within defined SLA |
| 7.0 - 8.9 | High | Prioritize remediation |
| 9.0 - 10.0 | Critical | Immediate action required |

**CVSS Base Metrics:**

| Metric | What It Measures |
|--------|------------------|
| Attack Vector | How attacker reaches vulnerable component |
| Attack Complexity | Conditions beyond attacker control |
| Privileges Required | Auth level needed |
| User Interaction | Requires victim action? |
| Confidentiality | Impact on data secrecy |
| Integrity | Impact on data trustworthiness |
| Availability | Impact on system availability |
| Scope | Can impact extend beyond vulnerable component? |

**Attack Vector values:**

| Value | Meaning | Example |
|-------|---------|---------|
| Network (N) | Remotely exploitable via network | Web vulnerability |
| Adjacent (A) | Same network segment required | ARP spoofing |
| Local (L) | Local access required | Privilege escalation |
| Physical (P) | Physical access required | USB attack |

**CVSS string analysis:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`

| Metric | Value | Meaning |
|--------|-------|---------|
| AV | N | Network exploitable (worst) |
| AC | L | Low complexity (easy to exploit) |
| PR | N | No privileges needed |
| UI | N | No user interaction needed |
| S | U | Unchanged scope |
| C | H | High confidentiality impact |
| I | H | High integrity impact |
| A | H | High availability impact |

**Score:** 9.8 (Critical)
**Critical because:** Remotely exploitable, no authentication needed, no user interaction, full CIA impact

---

### Activity D: CVE Databases - Answers

**Vulnerability databases:**

| Resource | Provides | URL |
|----------|----------|-----|
| NVD | CVSS scores, CPE, references | nvd.nist.gov |
| CVE | Unique identifiers, descriptions | cve.mitre.org |
| CISA KEV | Actively exploited vulnerabilities | cisa.gov/known-exploited-vulnerabilities-catalog |
| Exploit-DB | Proof-of-concept exploits | exploit-db.com |
| Vendor Advisories | Patches, workarounds | Vendor websites |

---

### Activity E: Prioritization - Answers

**Prioritization ranking:**

| Vulnerability | CVSS | System | Exposure | Rank |
|---------------|------|--------|----------|------|
| CVE-B | 7.5 | Payment processing | Internet-facing | 1 |
| CVE-D | 6.1 | Public web server | Internet-facing | 2 |
| CVE-A | 9.8 | Development server | Internal only | 3 |
| CVE-C | 4.3 | CEO laptop | VPN required | 4 |
| CVE-E | 9.0 | Isolated test lab | Air-gapped | 5 |

**Top priority justification:** CVE-B affects payment processing (high business impact, regulatory) and is internet-facing. Even though CVE-A has higher CVSS, it's internal-only and non-production.

**Risk acceptance scenarios:**

| Scenario | Accept? | Justification |
|----------|---------|---------------|
| CVSS 2.0, internal, no exploit | Yes | Low risk, document and monitor |
| CVSS 8.0, legacy, compensating controls | Maybe | Requires detailed justification, senior approval |
| CVSS 9.5, production database | No | Too high risk to accept |
| CVSS 5.0, decommissioning in 30 days | Yes | Short timeframe, monitor closely |

---

### Activity F: Remediation Options - Answers

| Option | Description | When to Use |
|--------|-------------|-------------|
| Patch | Apply vendor security update | Patch available, tested |
| Upgrade | Move to newer version | Current version unsupported |
| Workaround | Disable feature, modify config | No patch, reduce exposure |
| Compensating Control | Implement alternative protection | Can't patch directly |
| Accept Risk | Document and monitor | Low risk, justified exception |
| Decommission | Remove system from service | EOL, replacement available |

**Scenario matching:**

| Scenario | Best Remediation |
|----------|------------------|
| Vendor released update yesterday | Patch (after testing) |
| Vulnerability in legacy app, no patches | Compensating control or workaround |
| Bug in feature you don't use | Workaround (disable feature) |
| Old server being replaced next month | Accept risk (short-term) |
| Critical system, can't patch during business hours | Schedule maintenance window |
| Vulnerability requires network access you can block | Compensating control (firewall) |

**Compensating controls:**

| Vulnerability | Compensating Control |
|---------------|---------------------|
| Can't patch web server | WAF, IPS, network segmentation |
| Weak authentication on legacy app | MFA proxy, network isolation |
| Unencrypted protocol required | VPN, TLS termination proxy |
| Can't disable vulnerable service | Firewall rules, host-based firewall |

---

### Activity G: Scanning Tools - Answers

**Commercial scanners:**

| Tool | Primary Use | Features |
|------|-------------|----------|
| Nessus | Network vulnerability scanning | Large plugin database, compliance checks |
| Qualys | Cloud-based scanning | SaaS, continuous monitoring |
| Rapid7 InsightVM | Vuln management | Live dashboards, integrations |
| Tenable.io | Cloud vuln management | Container scanning, cloud assessment |
| Microsoft Defender VM | Windows ecosystem | Built into E5, integration with Defender |

**Open source scanners:**

| Tool | Primary Use | Limitations |
|------|-------------|-------------|
| OpenVAS | Network scanning | Slower updates, less support |
| Nikto | Web server scanning | Noisy, basic checks |
| OWASP ZAP | Web app testing | Manual effort needed |
| Nmap + NSE | Port/service scanning | Requires scripting knowledge |
| Trivy | Container scanning | Focused on containers only |

---

### Activity H: Scan Configuration - Answers

**Pre-scan checklist:**

| Item | Purpose | Consideration |
|------|---------|---------------|
| Scope | Define what to scan | Avoid out-of-scope systems |
| Credentials | Enable deep scanning | Secure credential storage |
| Scan window | When to scan | Avoid business impact |
| Notification | Alert stakeholders | Prevent incident confusion |
| Exclusions | Skip fragile systems | Document and review regularly |
| Scan policy | What checks to run | Balance thoroughness vs. time |

**Scan frequency:**

| Asset Type | Frequency | Rationale |
|------------|-----------|-----------|
| Internet-facing | Weekly or continuous | Highest exposure |
| Internal servers | Monthly | Balance coverage/resources |
| Workstations | Monthly | User systems, patch Tuesday |
| Development | Before deployment | Shift left, pre-production |
| Cloud | Daily/continuous | Rapid change environment |
| After changes | Immediately | Verify no new vulns introduced |

---

### Activity I: Reporting - Answers

**Report sections:**

| Section | Content | Audience |
|---------|---------|----------|
| Executive Summary | High-level risk, trends, key actions | Leadership |
| Statistics | Counts by severity, trends | All |
| Critical Findings | Details on critical vulns | Technical, management |
| Trending | Improvement/decline over time | Management |
| Remediation Status | What's fixed, what's pending | All |
| Exceptions | Accepted risks | Management, audit |
| Recommendations | Next steps | Technical, management |

**Key metrics:**

| Metric | Measures | Target |
|--------|----------|--------|
| MTTR | Time from detection to fix | Decrease |
| Vulnerability density | Vulns per asset | Decrease |
| Patch compliance | % systems patched | Increase |
| Critical count | Number of critical vulns | Decrease |
| Overdue | Past-SLA vulnerabilities | Decrease |
| Coverage | % assets scanned | Increase |
| False positive rate | % incorrect detections | Decrease |

---

### Activity J: False Positives - Answers

| Type | Definition | Risk |
|------|------------|------|
| False Positive | Reported vulnerability doesn't exist | Wasted effort, alert fatigue |
| False Negative | Real vulnerability not detected | Exposure to unknown risk |

**False negative is more dangerous:** Leaves organization exposed to real vulnerabilities they don't know about.

**False positive causes:**

| Cause | Example | Reduction |
|-------|---------|-----------|
| Version detection | Banner shows old version, actually patched | Credentialed scan |
| Broad signature | Pattern matches non-vulnerable code | Tune scanner |
| Compensating control | WAF blocks vuln, scanner sees as vulnerable | Document exceptions |
| Config not visible | Scanner can't see mitigating config | Credentialed scan |

**False positive workflow:**

1. Review scanner finding and evidence
2. Manually verify on system
3. Document verification method and results
4. Mark as false positive in scanner if confirmed
5. Review periodically (may become valid later)

---

### Activity L: Compliance - Answers

| Regulation | Requirement |
|------------|-------------|
| PCI DSS | Quarterly external scans by ASV, internal after changes |
| HIPAA | Regular vulnerability assessments |
| SOX | Controls to ensure system integrity |
| NIST 800-53 | RA-5: Vulnerability scanning requirements |
| CIS Controls | Control 7: Continuous Vulnerability Management |

**PCI DSS specifics:**

| Requirement | Details |
|-------------|---------|
| Frequency | Quarterly minimum |
| Who scans | Approved Scanning Vendor (ASV) for external |
| Passing | No high-severity vulnerabilities |
| Remediation | Rescan until pass |

**Compliance vs Security:**

| Aspect | Compliance | Security |
|--------|------------|----------|
| Goal | Pass audit | Reduce real risk |
| Scope | What auditor checks | Everything |
| Frequency | Quarterly/annual | Continuous |
| Prioritization | By compliance requirement | By actual risk |

**Why compliance isn't enough:** Compliance is point-in-time minimum bar; security requires continuous, comprehensive risk management.

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: 2,500 vulnerabilities**

**Response:**
- Provide context: "This is normal for an organization our size"
- Show prioritization: "15 are critical and being addressed this week"
- Trend data: "We've reduced critical vulns by 40% over 6 months"
- Benchmark: "Industry average is X per 1000 assets"
- Action plan: Show roadmap for addressing findings

---

**Scenario 2: Critical vuln, 2-week patch delay**

**Actions:**
1. Implement compensating controls immediately (WAF, IPS rules, network isolation)
2. Increase monitoring on the affected system
3. Assess if attacker could currently exploit (external exposure?)
4. Document risk acceptance with business justification
5. Schedule patch for earliest possible maintenance window
6. Escalate to senior leadership if risk is unacceptable
7. Consider emergency change if business impact of breach > downtime

---

**Scenario 3: Owner claims false positive**

**Resolution:**
1. Request specific evidence for why they believe it's false positive
2. Perform manual verification together
3. If system is "working fine," explain that doesn't mean it's secure
4. Run credentialed scan if original was non-credentialed
5. Escalate to change advisory board if disagreement persists
6. Document final determination with evidence
7. If truly false positive, tune scanner to prevent recurrence

---

## Key Exam Tips

1. **Vulnerability scan ≠ penetration test:** Scan finds potential issues; pentest proves exploitability

2. **Credentialed scans:** More accurate, more findings, fewer false positives

3. **CVSS 9.0-10.0 = Critical:** Requires immediate attention

4. **CVSS isn't everything:** Asset criticality, exposure, exploit availability matter too

5. **False positive:** Scanner reports vuln that doesn't exist
   **False negative:** Scanner misses real vulnerability (more dangerous)

6. **Lifecycle:** Discovery → Scan → Analyze → Plan → Remediate → Verify → Report

7. **Compensating controls:** Use when you can't directly remediate

8. **PCI DSS:** Quarterly scans by Approved Scanning Vendor (ASV)

9. **CISA KEV:** Known Exploited Vulnerabilities catalog—prioritize these!

---

## Common Mistakes to Avoid

❌ Treating all vulnerabilities equally (must prioritize)

❌ Relying solely on CVSS score for prioritization

❌ Skipping verification after remediation

❌ Ignoring false positive management (leads to alert fatigue)

❌ Confusing vulnerability scanning with penetration testing

❌ Thinking compliance scanning = comprehensive security

---

**Congratulations on completing Lab 12!**

Vulnerability management is an operational security cornerstone—this knowledge applies directly to real-world security roles.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 12: Vulnerability Management - Solution Guide*