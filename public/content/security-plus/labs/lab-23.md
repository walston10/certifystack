# Lab 23: Vulnerability and Penetration Testing

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 4.3 - Explain various activities associated with vulnerability management

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between a vulnerability scan and a penetration test?**

2. **Explain the difference between credentialed and non-credentialed scans.**

3. **What are the three types of penetration testing (black box, white box, gray box)?**

4. **What is the purpose of rules of engagement in penetration testing?**

5. **What is CVSS, and how is it used to prioritize vulnerabilities?**

---

## Section 2: Hands-On Activities

### Activity A: Vulnerability Assessment vs Penetration Testing

**Goal:** Understand the differences between assessment types.

**Comparison table:**

| Aspect | Vulnerability Assessment | Penetration Test |
|--------|-------------------------|------------------|
| Purpose | | |
| Scope | | |
| Depth | | |
| Exploitation | | |
| Risk level | | |
| Frequency | | |
| Output | | |
| Skills required | | |

**When to use each:**

| Scenario | VA or Pentest? | Why |
|----------|----------------|-----|
| Quarterly compliance check | | |
| New application before launch | | |
| Post-breach security validation | | |
| Continuous monitoring | | |
| Red team exercise | | |
| Merger due diligence | | |

---

### Activity B: Vulnerability Scanning Types

**Goal:** Understand different scan types.

**Scan type comparison:**

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| Credentialed | | | |
| Non-credentialed | | | |
| Internal | | | |
| External | | | |
| Active | | | |
| Passive | | | |
| Agent-based | | | |
| Agentless | | | |

**Credentialed vs Non-credentialed:**

| Aspect | Credentialed | Non-credentialed |
|--------|--------------|------------------|
| Access level | | |
| Accuracy | | |
| Coverage | | |
| False positives | | |
| Risk to systems | | |
| Setup complexity | | |
| Best for | | |

**What can credentialed scans find that non-credentialed cannot?**

| Finding Type | Requires Credentials? |
|--------------|----------------------|
| Open ports | |
| Missing OS patches | |
| Installed software versions | |
| Configuration weaknesses | |
| Banner information | |
| Registry settings | |
| File permissions | |
| Local user accounts | |

---

### Activity C: Penetration Testing Methodology

**Goal:** Understand pentest phases.

**Penetration testing phases:**

| Phase | Activities | Deliverables |
|-------|------------|--------------|
| 1. Planning | | |
| 2. Reconnaissance | | |
| 3. Scanning | | |
| 4. Exploitation | | |
| 5. Post-exploitation | | |
| 6. Reporting | | |

**Reconnaissance types:**

| Type | Description | Examples |
|------|-------------|----------|
| Passive | | |
| Active | | |

**OSINT sources:**

| Source | Information Available |
|--------|----------------------|
| WHOIS | |
| DNS records | |
| Social media | |
| Job postings | |
| Company website | |
| Shodan | |
| Google dorks | |
| Public records | |

---

### Activity D: Testing Environments

**Goal:** Understand test knowledge levels.

**Testing types by knowledge:**

| Type | Tester Knowledge | Simulates | Pros | Cons |
|------|------------------|-----------|------|------|
| Black box | | | | |
| White box | | | | |
| Gray box | | | | |

**Match scenario to test type:**

| Scenario | Test Type | Reasoning |
|----------|-----------|-----------|
| External attacker simulation | | |
| Developer security review | | |
| Authorized insider threat | | |
| Compliance audit requirement | | |
| Red team engagement | | |
| Code review + testing | | |

**Known vs Unknown environment:**

| Term | Meaning | Old Term |
|------|---------|----------|
| Known environment | | |
| Unknown environment | | |
| Partially known | | |

---

### Activity E: Rules of Engagement

**Goal:** Define scope and boundaries.

**Rules of engagement components:**

| Component | Purpose | Example |
|-----------|---------|---------|
| Scope | | |
| Timeline | | |
| Authorized targets | | |
| Prohibited actions | | |
| Communication | | |
| Emergency contacts | | |
| Legal authorization | | |
| Data handling | | |

**Scope definition exercise:**

Define scope for a pentest of "Company XYZ's e-commerce platform":

| Element | In Scope | Out of Scope |
|---------|----------|--------------|
| IP ranges | | |
| Applications | | |
| Testing methods | | |
| Time windows | | |
| Social engineering | | |
| Physical access | | |

**Why is written authorization critical?**

_________________________________________________________________

**What could happen without proper authorization?**

| Risk | Consequence |
|------|-------------|
| | |
| | |
| | |

---

### Activity F: Vulnerability Scoring (CVSS)

**Goal:** Understand vulnerability prioritization.

**CVSS score ranges:**

| Score | Severity | Priority |
|-------|----------|----------|
| 0.0 | | |
| 0.1 - 3.9 | | |
| 4.0 - 6.9 | | |
| 7.0 - 8.9 | | |
| 9.0 - 10.0 | | |

**CVSS metric groups:**

| Group | What It Measures | Examples |
|-------|------------------|----------|
| Base | | |
| Temporal | | |
| Environmental | | |

**Base metrics:**

| Metric | Description | Values |
|--------|-------------|--------|
| Attack Vector (AV) | | N/A/L/P |
| Attack Complexity (AC) | | L/H |
| Privileges Required (PR) | | N/L/H |
| User Interaction (UI) | | N/R |
| Scope (S) | | U/C |
| Confidentiality (C) | | N/L/H |
| Integrity (I) | | N/L/H |
| Availability (A) | | N/L/H |

**Score these vulnerabilities:**

| Vulnerability | AV | AC | PR | UI | Severity Estimate |
|---------------|----|----|----|----|-------------------|
| Remote code execution, no auth | | | | | |
| Local privilege escalation | | | | | |
| XSS requiring user click | | | | | |
| DoS from adjacent network | | | | | |

---

### Activity G: Vulnerability Report Analysis

**Goal:** Interpret scan results.

**Sample vulnerability report entry:**

```
Vulnerability: Apache Struts Remote Code Execution (CVE-2017-5638)
Severity: Critical (CVSS 10.0)
Host: 192.168.1.100
Port: 8080/tcp
Description: The Jakarta Multipart parser in Apache Struts 2 
allows remote attackers to execute arbitrary commands.
Solution: Upgrade to Struts 2.3.32 or 2.5.10.1
References: CVE-2017-5638, CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:H
```

| Question | Answer |
|----------|--------|
| What is the vulnerability? | |
| How severe is it? | |
| Can it be exploited remotely? | |
| Does it require authentication? | |
| What is the fix? | |
| Priority for remediation? | |

**Prioritize these findings:**

| Finding | CVSS | Asset | Priority | Reasoning |
|---------|------|-------|----------|-----------|
| RCE on public web server | 10.0 | Critical | | |
| Missing patch on dev server | 7.5 | Low | | |
| SQL injection on internal app | 8.5 | High | | |
| Weak password on test system | 5.0 | Low | | |
| XSS on customer portal | 6.1 | Critical | | |

---

### Activity H: False Positives and Validation

**Goal:** Handle scan accuracy issues.

**False positive vs False negative:**

| Type | Definition | Impact |
|------|------------|--------|
| False positive | | |
| False negative | | |

**Which is worse for:**

| Context | Worse Type | Why |
|---------|------------|-----|
| Compliance audit | | |
| Active defense | | |
| Resource planning | | |
| Risk assessment | | |

**Common false positive causes:**

| Cause | Example | Validation Method |
|-------|---------|-------------------|
| Version detection error | | |
| Compensating control | | |
| Configuration difference | | |
| Outdated signatures | | |

**Validation techniques:**

| Technique | Description | When to Use |
|-----------|-------------|-------------|
| Manual verification | | |
| Exploit attempt | | |
| Configuration review | | |
| Vendor confirmation | | |
| Credentialed rescan | | |

---

### Activity I: Penetration Testing Tools

**Goal:** Understand common pentest tools.

**Tool categories:**

| Category | Purpose | Example Tools |
|----------|---------|---------------|
| Reconnaissance | | |
| Scanning | | |
| Exploitation | | |
| Post-exploitation | | |
| Password attacks | | |
| Web application | | |
| Wireless | | |
| Social engineering | | |

**Match tool to purpose:**

| Tool | Primary Purpose |
|------|-----------------|
| Nmap | |
| Metasploit | |
| Burp Suite | |
| Wireshark | |
| John the Ripper | |
| Nessus | |
| SQLmap | |
| Aircrack-ng | |
| Nikto | |
| Hashcat | |

**Nmap scan types:**

| Scan Type | Flag | Purpose |
|-----------|------|---------|
| SYN scan | | |
| Connect scan | | |
| UDP scan | | |
| Version detection | | |
| OS detection | | |
| Script scan | | |

---

### Activity J: Bug Bounty and Responsible Disclosure

**Goal:** Understand ethical vulnerability disclosure.

**Bug bounty program components:**

| Component | Description |
|-----------|-------------|
| Scope | |
| Rewards | |
| Rules | |
| Safe harbor | |
| Disclosure timeline | |

**Responsible disclosure process:**

| Step | Action | Timeline |
|------|--------|----------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

**Disclosure types:**

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| Full disclosure | | | |
| Responsible disclosure | | | |
| Non-disclosure | | | |

**Ethical considerations:**

| Scenario | Ethical Action |
|----------|----------------|
| Found vuln in company without bounty program | |
| Vendor ignores your report for 90 days | |
| Vuln is actively being exploited | |
| Vuln affects critical infrastructure | |

---

### Activity K: Remediation Prioritization

**Goal:** Prioritize vulnerability remediation.

**Prioritization factors:**

| Factor | Weight | Description |
|--------|--------|-------------|
| CVSS score | | |
| Asset criticality | | |
| Exploitability | | |
| Exposure | | |
| Business impact | | |

**Risk calculation:**

Risk = Threat × Vulnerability × Impact

| Vulnerability | Threat | Vuln Score | Impact | Risk Level |
|---------------|--------|------------|--------|------------|
| RCE on internet-facing server | High | High | High | |
| Local exploit on isolated system | Low | High | Low | |
| DoS on internal test server | Low | Medium | Low | |
| SQL injection on payment system | High | High | Critical | |

**Remediation timeline:**

| Severity | Maximum Time to Remediate |
|----------|---------------------------|
| Critical | |
| High | |
| Medium | |
| Low | |

**What if you can't patch immediately?**

| Compensating Control | Description |
|---------------------|-------------|
| | |
| | |
| | |
| | |

---

### Activity L: Penetration Test Report

**Goal:** Understand pentest deliverables.

**Report sections:**

| Section | Content | Audience |
|---------|---------|----------|
| Executive summary | | |
| Scope and methodology | | |
| Findings | | |
| Risk ratings | | |
| Recommendations | | |
| Technical details | | |
| Appendices | | |

**Finding format:**

| Element | Purpose |
|---------|---------|
| Title | |
| Severity | |
| Description | |
| Impact | |
| Affected systems | |
| Evidence | |
| Recommendation | |
| References | |

**Write a finding:**

Vulnerability: SQL Injection on login page

| Element | Content |
|---------|---------|
| Title | |
| Severity | |
| Description | |
| Impact | |
| Affected | |
| Evidence | |
| Recommendation | |

---

### Activity M: Team Types

**Goal:** Understand security team roles.

**Team definitions:**

| Team | Role | Activities |
|------|------|------------|
| Red team | | |
| Blue team | | |
| Purple team | | |
| White team | | |

**Red vs Pentest:**

| Aspect | Penetration Test | Red Team |
|--------|------------------|----------|
| Scope | | |
| Duration | | |
| Objective | | |
| Methods | | |
| Stealth | | |
| Blue team awareness | | |

**Purple team value:**

How does purple team improve security?

_________________________________________________________________

---

### Tier 2 Bonus: Basic Reconnaissance

> ⚠️ **Only perform on systems you own or have authorization**

---

### Activity N: Passive Reconnaissance

**WHOIS lookup:**

Use: whois.domaintools.com or command line

```bash
whois example.com
```

| Field | Information Found |
|-------|-------------------|
| Registrar | |
| Creation date | |
| Expiration | |
| Name servers | |

**DNS enumeration:**

```bash
nslookup -type=any example.com
```

Or use: dnsdumpster.com

| Record Type | Value |
|-------------|-------|
| A | |
| MX | |
| NS | |
| TXT | |

**Why is this information security-relevant?**

_________________________________________________________________

---

### Activity O: Check Your Own Exposure

**Have I Been Pwned:**

Visit: haveibeenpwned.com

Check an email address you own:

| Question | Answer |
|----------|--------|
| Any breaches found? | |
| Which breaches? | |
| What data exposed? | |
| Actions to take? | |

**Shodan (search only):**

Visit: shodan.io

Search for your organization's name (if permitted):

| Finding | Security Implication |
|---------|---------------------|
| | |
| | |

⚠️ **Never scan systems without authorization**

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** A vulnerability scan found 500 vulnerabilities across your network. Management wants them all fixed by next week. How do you approach prioritization and set realistic expectations?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your penetration tester accidentally crashed a production database during testing. What went wrong, and how do you prevent this in future engagements?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** You discover a critical vulnerability in software your company uses, but the vendor says they won't patch it for 6 months. What are your options?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Differentiate vulnerability assessment and penetration testing
- [ ] Compare credentialed vs non-credentialed scans
- [ ] Explain black box, white box, and gray box testing
- [ ] Describe penetration testing phases
- [ ] Understand rules of engagement importance
- [ ] Interpret CVSS scores and metrics
- [ ] Prioritize vulnerability remediation
- [ ] Identify common pentest tools
- [ ] Explain responsible disclosure
- [ ] Differentiate red, blue, and purple teams

---

## What You Learned Today

- ✅ Compared VA and pentesting
- ✅ Analyzed scan types
- ✅ Reviewed pentest methodology
- ✅ Understood testing environments
- ✅ Created rules of engagement
- ✅ Interpreted CVSS scores
- ✅ Analyzed vulnerability reports
- ✅ Handled false positives
- ✅ Identified pentest tools
- ✅ Explored bug bounties
- ✅ Prioritized remediation
- ✅ Reviewed report formats
- ✅ Understood team types
- ✅ (Tier 2) Performed basic recon

**Next Lab:** Security Assessments - audits, compliance, and frameworks.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 23: Vulnerability and Penetration Testing*