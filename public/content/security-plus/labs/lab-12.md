# Lab 12: Vulnerability Management

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 2.3 - Vulnerability management

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between a vulnerability scan and a penetration test?**

2. **Explain the difference between credentialed and non-credentialed vulnerability scans. When would you use each?**

3. **What is CVSS, and how is it used in vulnerability management?**

4. **What is a false positive in vulnerability scanning? Why are they problematic?**

5. **Describe the vulnerability management lifecycle.**

---

## Section 2: Hands-On Activities

### Activity A: Vulnerability Management Lifecycle

**Goal:** Understand the phases of vulnerability management.

**Complete the lifecycle phases:**

| Phase | Activities | Output |
|-------|------------|--------|
| 1. Discovery/Inventory | | |
| 2. Vulnerability Scanning | | |
| 3. Analysis/Prioritization | | |
| 4. Remediation Planning | | |
| 5. Remediation | | |
| 6. Verification | | |
| 7. Reporting | | |

**Put these activities in the correct phase:**

| Activity | Phase |
|----------|-------|
| Apply security patches | |
| Determine asset criticality | |
| Run Nessus scan | |
| Generate executive dashboard | |
| Identify all network devices | |
| Rescan to confirm fix | |
| Create patching schedule | |
| Review CVSS scores | |
| Document exceptions | |
| Assign remediation owners | |

---

### Activity B: Vulnerability Scanning Concepts

**Goal:** Understand scanner types and methods.

**Scanner types:**

| Scanner Type | What It Scans | Examples |
|--------------|---------------|----------|
| Network vulnerability scanner | | |
| Web application scanner | | |
| Database scanner | | |
| Cloud configuration scanner | | |
| Container scanner | | |
| Code scanner (SAST) | | |

**Scan types comparison:**

| Aspect | Credentialed Scan | Non-Credentialed Scan |
|--------|-------------------|----------------------|
| Access level | | |
| Accuracy | | |
| False positives | | |
| Vulnerability depth | | |
| Performance impact | | |
| Use case | | |

**Active vs Passive scanning:**

| Aspect | Active Scanning | Passive Scanning |
|--------|-----------------|------------------|
| How it works | | |
| Impact on network | | |
| Detection coverage | | |
| Stealth | | |
| Examples | | |

---

### Activity C: CVSS Scoring Deep Dive

**Goal:** Understand how CVSS scores are calculated and used.

**CVSS v3.1 Score Ranges:**

| Score Range | Severity | Example Response |
|-------------|----------|------------------|
| 0.0 | | |
| 0.1 - 3.9 | | |
| 4.0 - 6.9 | | |
| 7.0 - 8.9 | | |
| 9.0 - 10.0 | | |

**CVSS Base Score Metrics:**

| Metric Group | Metrics | What It Measures |
|--------------|---------|------------------|
| Exploitability | Attack Vector (AV) | |
| | Attack Complexity (AC) | |
| | Privileges Required (PR) | |
| | User Interaction (UI) | |
| Impact | Confidentiality (C) | |
| | Integrity (I) | |
| | Availability (A) | |
| Scope | Scope (S) | |

**Attack Vector values:**

| Value | Meaning | Example |
|-------|---------|---------|
| Network (N) | | |
| Adjacent (A) | | |
| Local (L) | | |
| Physical (P) | | |

**Practice CVSS interpretation:**

Analyze this CVSS string: `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`

| Metric | Value | Meaning |
|--------|-------|---------|
| Attack Vector | N | |
| Attack Complexity | L | |
| Privileges Required | N | |
| User Interaction | N | |
| Scope | U | |
| Confidentiality | H | |
| Integrity | H | |
| Availability | H | |

**What is the likely score?** _______

**Is this vulnerability critical? Why?**

_________________________________________________________________

---

### Activity D: CVE and Vulnerability Databases

**Goal:** Navigate vulnerability information sources.

**Research a real CVE:**

Visit: nvd.nist.gov or cve.mitre.org

Search for a recent high-profile vulnerability (e.g., Log4Shell, ProxyLogon, or search recent CVEs)

**CVE Analysis:**

| Field | Information |
|-------|-------------|
| CVE ID | |
| Description | |
| CVSS Score | |
| Attack Vector | |
| Affected Products | |
| Published Date | |
| Patch Available? | |
| Exploited in Wild? | |

**Vulnerability databases and resources:**

| Resource | What It Provides | URL |
|----------|------------------|-----|
| NVD (National Vulnerability Database) | | |
| CVE (Common Vulnerabilities and Exposures) | | |
| CISA KEV (Known Exploited Vulnerabilities) | | |
| Exploit-DB | | |
| Vendor Security Advisories | | |

**Check CISA KEV:**

Visit: cisa.gov/known-exploited-vulnerabilities-catalog

| Question | Finding |
|----------|---------|
| How many vulnerabilities in the catalog? | |
| Most recent addition? | |
| Any affecting software you use? | |

---

### Activity E: Prioritization Factors

**Goal:** Develop a vulnerability prioritization framework.

**Prioritization matrix:**

| Factor | Weight (1-5) | How to Assess |
|--------|--------------|---------------|
| CVSS Score | | |
| Asset Criticality | | |
| Exploit Availability | | |
| Network Exposure | | |
| Data Sensitivity | | |
| Compensating Controls | | |
| Business Impact | | |
| Regulatory Requirements | | |

**Prioritization scenarios:**

Rank these vulnerabilities (1=fix first, 5=fix last):

| Vulnerability | CVSS | System | Exposure | Rank |
|---------------|------|--------|----------|------|
| CVE-A | 9.8 | Development server | Internal only | |
| CVE-B | 7.5 | Payment processing | Internet-facing | |
| CVE-C | 4.3 | CEO laptop | VPN required | |
| CVE-D | 6.1 | Public web server | Internet-facing | |
| CVE-E | 9.0 | Isolated test lab | Air-gapped | |

**Justify your top priority:**

_________________________________________________________________

**Risk acceptance criteria:**

When might you accept a vulnerability rather than remediate?

| Scenario | Accept? | Justification Required |
|----------|---------|----------------------|
| CVSS 2.0, internal system, no exploit | | |
| CVSS 8.0, legacy system, compensating controls | | |
| CVSS 9.5, production database | | |
| CVSS 5.0, system being decommissioned in 30 days | | |

---

### Activity F: Remediation Options

**Goal:** Understand different approaches to addressing vulnerabilities.

**Remediation hierarchy:**

| Option | Description | When to Use |
|--------|-------------|-------------|
| Patch | | |
| Upgrade | | |
| Workaround/Mitigation | | |
| Compensating Control | | |
| Accept Risk | | |
| Decommission | | |

**Match the scenario to remediation:**

| Scenario | Best Remediation |
|----------|------------------|
| Vendor released security update yesterday | |
| Vulnerability in legacy app with no patches | |
| Bug in feature you don't use | |
| Old server being replaced next month | |
| Critical system can't be patched during business hours | |
| Vulnerability requires network access you can block | |

**Compensating controls examples:**

| Vulnerability | Compensating Control |
|---------------|---------------------|
| Can't patch web server | |
| Weak authentication on legacy app | |
| Unencrypted protocol required | |
| Can't disable vulnerable service | |

---

### Activity G: Scanning Tools Overview

**Goal:** Familiarize with common vulnerability scanning tools.

**Commercial scanners:**

| Tool | Primary Use | Key Features |
|------|-------------|--------------|
| Nessus | | |
| Qualys | | |
| Rapid7 InsightVM/Nexpose | | |
| Tenable.io | | |
| Microsoft Defender Vulnerability Management | | |

**Open source/free scanners:**

| Tool | Primary Use | Limitations |
|------|-------------|-------------|
| OpenVAS | | |
| Nikto | | |
| OWASP ZAP | | |
| Nmap + NSE scripts | | |
| Trivy | | |

**Built-in Windows tools:**

Check Microsoft Defender for vulnerabilities:

Windows Security → Device security → Core isolation details

| Feature | Status |
|---------|--------|
| Memory integrity | |
| Kernel DMA Protection | |

Settings → Privacy & Security → Windows Security → Device performance & health

| Area | Status |
|------|--------|
| Storage capacity | |
| Apps and software | |
| Windows Time service | |

---

### Activity H: Scan Configuration Best Practices

**Goal:** Understand how to configure effective scans.

**Pre-scan checklist:**

| Item | Purpose | Consideration |
|------|---------|---------------|
| Scope definition | | |
| Credentials | | |
| Scan window | | |
| Notification | | |
| Exclusions | | |
| Scan policy | | |

**Scan scheduling considerations:**

| Factor | Impact on Scheduling |
|--------|---------------------|
| Network bandwidth | |
| System performance | |
| Business hours | |
| Maintenance windows | |
| Change freeze periods | |
| Compliance requirements | |

**Scan frequency recommendations:**

| Asset Type | Recommended Frequency | Rationale |
|------------|----------------------|-----------|
| Internet-facing systems | | |
| Internal servers | | |
| Workstations | | |
| Development systems | | |
| Cloud infrastructure | | |
| After major changes | | |

---

### Activity I: Vulnerability Reporting

**Goal:** Understand effective vulnerability reporting.

**Report components:**

| Section | Content | Audience |
|---------|---------|----------|
| Executive Summary | | |
| Vulnerability Statistics | | |
| Critical Findings | | |
| Trending Analysis | | |
| Remediation Status | | |
| Risk Exceptions | | |
| Recommendations | | |

**Metrics to track:**

| Metric | What It Measures | Target Direction |
|--------|------------------|------------------|
| Mean Time to Remediate (MTTR) | | |
| Vulnerability density | | |
| Patch compliance rate | | |
| Critical vulnerability count | | |
| Overdue remediation | | |
| Scan coverage | | |
| False positive rate | | |

**Create a mock executive summary:**

Your recent scan found:
- 15 Critical vulnerabilities
- 45 High vulnerabilities
- 120 Medium vulnerabilities
- 300 Low vulnerabilities

Write a 3-sentence executive summary:

_________________________________________________________________

_________________________________________________________________

_________________________________________________________________

---

### Activity J: False Positives and Validation

**Goal:** Understand how to handle scan inaccuracies.

**False positive vs False negative:**

| Type | Definition | Risk |
|------|------------|------|
| False Positive | | |
| False Negative | | |

**Which is more dangerous and why?**

_________________________________________________________________

**Common causes of false positives:**

| Cause | Example | How to Reduce |
|-------|---------|---------------|
| Version detection errors | | |
| Signature too broad | | |
| Compensating control not detected | | |
| Configuration not visible | | |

**Validation methods:**

| Method | How It Works | When to Use |
|--------|--------------|-------------|
| Manual verification | | |
| Exploit attempt (authorized) | | |
| Configuration review | | |
| Vendor confirmation | | |
| Credentialed rescan | | |

**False positive workflow:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

---

### Activity K: Vulnerability Management Program Maturity

**Goal:** Assess and improve vulnerability management maturity.

**Maturity levels:**

| Level | Characteristics | Typical Practices |
|-------|-----------------|-------------------|
| 1 - Initial | | |
| 2 - Developing | | |
| 3 - Defined | | |
| 4 - Managed | | |
| 5 - Optimizing | | |

**Self-assessment (if you have access to an organization's practices):**

| Capability | Current State | Target State |
|------------|---------------|--------------|
| Asset inventory | | |
| Scan coverage | | |
| Scan frequency | | |
| Prioritization process | | |
| Remediation SLAs | | |
| Metrics and reporting | | |
| Exception management | | |
| Integration with ITSM | | |

**Program improvement priorities:**

If starting a vulnerability management program, what are the first 3 things to establish?

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

---

### Activity L: Compliance and Regulatory Requirements

**Goal:** Understand vulnerability management compliance obligations.

**Regulatory scanning requirements:**

| Regulation | Vulnerability Management Requirement |
|------------|-------------------------------------|
| PCI DSS | |
| HIPAA | |
| SOX | |
| NIST 800-53 | |
| CIS Controls | |

**PCI DSS specifics:**

| Requirement | Details |
|-------------|---------|
| Scan frequency | |
| Who can scan | |
| Passing score | |
| Remediation timeline | |

**Compliance vs Security:**

| Aspect | Compliance-Driven | Security-Driven |
|--------|-------------------|-----------------|
| Goal | | |
| Scope | | |
| Frequency | | |
| Prioritization | | |
| Reporting | | |

**Why compliance alone isn't enough:**

_________________________________________________________________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your vulnerability scan completed and shows 2,500 vulnerabilities. Management asks why there are so many and whether the security team is doing their job. How do you respond and what context do you provide?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A critical vulnerability (CVSS 9.8) is discovered in your production database server. The patch requires a reboot, but the business says they can't have any downtime for the next 2 weeks due to a major project. What do you do?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Your scanning tool reports a critical vulnerability, but the system owner insists it's a false positive because "the system is working fine." How do you resolve this disagreement?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain the vulnerability management lifecycle phases
- [ ] Differentiate credentialed vs non-credentialed scans
- [ ] Interpret CVSS scores and metrics
- [ ] Navigate CVE databases (NVD, MITRE, CISA KEV)
- [ ] Apply prioritization factors beyond just CVSS
- [ ] Identify appropriate remediation options
- [ ] Describe common scanning tools
- [ ] Explain scan configuration best practices
- [ ] Understand vulnerability reporting and metrics
- [ ] Handle false positives appropriately
- [ ] Know compliance scanning requirements

---

## What You Learned Today

- ✅ Mapped the vulnerability management lifecycle
- ✅ Compared scan types and methods
- ✅ Interpreted CVSS scores and metrics
- ✅ Researched real CVEs in vulnerability databases
- ✅ Developed prioritization criteria
- ✅ Matched scenarios to remediation options
- ✅ Reviewed scanning tools landscape
- ✅ Understood scan configuration practices
- ✅ Designed vulnerability reports
- ✅ Handled false positives
- ✅ Assessed program maturity
- ✅ Connected to compliance requirements

**Next Lab:** Mitigation Techniques - implementing controls to reduce vulnerability risk.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 12: Vulnerability Management*