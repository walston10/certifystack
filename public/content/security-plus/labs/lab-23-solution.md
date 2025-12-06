# Lab 23: Vulnerability and Penetration Testing - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Vulnerability management is critical for proactive security.

---

## Section 1: Concept Check - Answers

**1. Vulnerability scan vs Penetration test:**

**Answer:**

| Aspect | Vulnerability Scan | Penetration Test |
|--------|-------------------|------------------|
| **Purpose** | Find vulnerabilities | Exploit vulnerabilities |
| **Depth** | Broad, automated | Deep, manual |
| **Exploitation** | No | Yes |
| **Output** | List of vulnerabilities | Proof of compromise |

Scans identify; pentests prove exploitability.

---

**2. Credentialed vs Non-credentialed:**

**Answer:**

| Type | Description |
|------|-------------|
| **Credentialed** | Scanner logs in with valid credentials, sees internal details |
| **Non-credentialed** | Scanner sees only what's externally visible |

Credentialed finds more vulnerabilities (patches, configs, software versions) but requires credential management.

---

**3. Black/White/Gray box:**

**Answer:**

| Type | Tester Knowledge |
|------|------------------|
| **Black box** | No prior knowledge (external attacker) |
| **White box** | Full knowledge (source code, architecture) |
| **Gray box** | Partial knowledge (some credentials/info) |

---

**4. Rules of engagement:**

**Answer:**

**Purpose:** Define scope, boundaries, and authorization for penetration testing.

**Includes:**
- What can be tested
- What's off-limits
- Timing restrictions
- Communication procedures
- Legal authorization
- Emergency contacts

**Critical because:** Testing without authorization is illegal (Computer Fraud and Abuse Act).

---

**5. CVSS:**

**Answer:**

**CVSS (Common Vulnerability Scoring System)** provides standardized severity ratings (0-10).

**Used to prioritize by:**
- Score indicates severity
- Higher scores = more urgent remediation
- Helps allocate limited resources
- Enables consistent communication

---

## Section 2: Activity Solutions

### Activity A: VA vs Pentest - Answers

| Aspect | Vulnerability Assessment | Penetration Test |
|--------|-------------------------|------------------|
| Purpose | Identify vulnerabilities | Prove exploitability |
| Scope | Broad | Focused |
| Depth | Surface-level | Deep |
| Exploitation | No | Yes |
| Risk level | Low | Higher |
| Frequency | Regular (weekly/monthly) | Periodic (annual) |
| Output | Vulnerability list | Attack narrative |
| Skills | Tool operation | Advanced hacking |

**When to use:**

| Scenario | Type | Why |
|----------|------|-----|
| Quarterly compliance | VA | Regular check |
| New app launch | Pentest | Prove security |
| Post-breach | Pentest | Validate fixes |
| Continuous monitoring | VA | Ongoing visibility |
| Red team exercise | Pentest | Adversary simulation |
| Merger due diligence | Both | Full picture |

---

### Activity B: Scan Types - Answers

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| Credentialed | Uses valid login | More findings | Credential management |
| Non-credentialed | External view only | Simple | Misses internal issues |
| Internal | From inside network | Finds internal vulns | Requires access |
| External | From internet | Attacker view | Limited scope |
| Active | Sends probes | Accurate | May disrupt |
| Passive | Listens only | No disruption | Less detail |
| Agent-based | Software on endpoint | Deep visibility | Deployment overhead |
| Agentless | Network-based | Easy deploy | Less detail |

**Credentialed vs Non-credentialed:**

| Aspect | Credentialed | Non-credentialed |
|--------|--------------|------------------|
| Access | Authenticated | Unauthenticated |
| Accuracy | Higher | Lower |
| Coverage | Comprehensive | Surface only |
| False positives | Fewer | More |
| Risk | Low | Very low |
| Setup | Complex | Simple |
| Best for | Internal assessment | External view |

**Credential requirements:**

| Finding | Needs Creds? |
|---------|--------------|
| Open ports | No |
| Missing OS patches | Yes |
| Software versions | Yes |
| Config weaknesses | Yes |
| Banner info | No |
| Registry settings | Yes |
| File permissions | Yes |
| Local accounts | Yes |

---

### Activity C: Pentest Methodology - Answers

| Phase | Activities | Deliverables |
|-------|------------|--------------|
| Planning | Scope, RoE, authorization | Signed agreement |
| Reconnaissance | OSINT, passive info gathering | Target profile |
| Scanning | Port/vuln scanning | Vulnerability list |
| Exploitation | Attempt exploits | Access proof |
| Post-exploitation | Pivot, escalate, persist | Impact assessment |
| Reporting | Document findings | Final report |

**Reconnaissance:**

| Type | Description | Examples |
|------|-------------|----------|
| Passive | No direct contact | WHOIS, social media |
| Active | Direct interaction | Port scans, queries |

**OSINT sources:**

| Source | Information |
|--------|-------------|
| WHOIS | Domain registration |
| DNS | Mail servers, subdomains |
| Social media | Employee names, tech stack |
| Job postings | Technologies used |
| Company website | Org structure, contacts |
| Shodan | Exposed services |
| Google dorks | Indexed sensitive files |
| Public records | Corporate filings |

---

### Activity D: Testing Environments - Answers

| Type | Knowledge | Simulates | Pros | Cons |
|------|-----------|-----------|------|------|
| Black box | None | External attacker | Realistic | Time-consuming |
| White box | Full | Insider/code review | Thorough | Less realistic |
| Gray box | Partial | Insider threat | Balanced | May miss external view |

**Scenario matching:**

| Scenario | Type | Reason |
|----------|------|--------|
| External attacker | Black box | No insider knowledge |
| Developer review | White box | Full code access |
| Insider threat | Gray box | Some access |
| Compliance audit | Gray box | Defined scope |
| Red team | Black box | Adversary simulation |
| Code review + test | White box | Need source |

**Terminology:**

| Term | Meaning | Old Term |
|------|---------|----------|
| Known environment | Full knowledge | White box |
| Unknown environment | No knowledge | Black box |
| Partially known | Some knowledge | Gray box |

---

### Activity E: Rules of Engagement - Answers

| Component | Purpose | Example |
|-----------|---------|---------|
| Scope | Define targets | 192.168.1.0/24 |
| Timeline | When testing occurs | Jan 15-30, business hours |
| Authorized | What can be tested | Web apps, network |
| Prohibited | Off-limits | Production DB, DoS |
| Communication | How to report | Daily email updates |
| Emergency | Who to call if issues | SOC: 555-1234 |
| Authorization | Legal permission | Signed contract |
| Data handling | How to protect findings | Encrypted storage |

**Why authorization critical:** Testing without authorization is illegal. Written permission protects both tester and organization.

**Without authorization:**

| Risk | Consequence |
|------|-------------|
| Criminal charges | Jail time, fines |
| Civil liability | Lawsuits |
| Career damage | Loss of job/certs |

---

### Activity F: CVSS - Answers

| Score | Severity | Priority |
|-------|----------|----------|
| 0.0 | None | N/A |
| 0.1-3.9 | Low | Low |
| 4.0-6.9 | Medium | Medium |
| 7.0-8.9 | High | High |
| 9.0-10.0 | Critical | Immediate |

**Metric groups:**

| Group | Measures | Examples |
|-------|----------|----------|
| Base | Intrinsic severity | Attack vector, complexity |
| Temporal | Time-dependent | Exploit available, patch status |
| Environmental | Organization-specific | Asset criticality |

**Score vulnerabilities:**

| Vulnerability | AV | AC | PR | UI | Estimate |
|---------------|----|----|----|----|----------|
| RCE, no auth | N | L | N | N | Critical |
| Local priv esc | L | L | L | N | High |
| XSS, user click | N | L | N | R | Medium |
| DoS adjacent | A | L | N | N | Medium |

---

### Activity G: Report Analysis - Answers

| Question | Answer |
|----------|--------|
| Vulnerability | Remote code execution in Apache Struts |
| Severity | Critical (10.0) |
| Remote? | Yes (AV:N) |
| Auth required? | No (PR:N) |
| Fix | Upgrade Struts |
| Priority | Immediate |

**Prioritization:**

| Finding | CVSS | Asset | Priority | Reason |
|---------|------|-------|----------|--------|
| RCE public web | 10.0 | Critical | 1 | Highest risk |
| SQL injection internal | 8.5 | High | 2 | Critical asset |
| XSS customer portal | 6.1 | Critical | 3 | Customer facing |
| Missing patch dev | 7.5 | Low | 4 | Low asset value |
| Weak password test | 5.0 | Low | 5 | Isolated system |

---

### Activity H: False Positives - Answers

| Type | Definition | Impact |
|------|------------|--------|
| False positive | Alert on non-issue | Wasted resources |
| False negative | Missed real issue | Unaddressed risk |

**Which is worse:**

| Context | Worse | Why |
|---------|-------|-----|
| Compliance | FP | Wasted effort |
| Active defense | FN | Missed attack |
| Resource planning | FP | Wasted resources |
| Risk assessment | FN | Unknown exposure |

---

### Activity I: Tools - Answers

| Tool | Purpose |
|------|---------|
| Nmap | Port scanning, discovery |
| Metasploit | Exploitation framework |
| Burp Suite | Web app testing |
| Wireshark | Packet capture |
| John the Ripper | Password cracking |
| Nessus | Vulnerability scanning |
| SQLmap | SQL injection |
| Aircrack-ng | Wireless attacks |
| Nikto | Web server scanning |
| Hashcat | Password cracking (GPU) |

**Nmap scans:**

| Type | Flag | Purpose |
|------|------|---------|
| SYN | -sS | Stealthy, default |
| Connect | -sT | Full connection |
| UDP | -sU | UDP services |
| Version | -sV | Service versions |
| OS | -O | Operating system |
| Script | -sC | NSE scripts |

---

### Activity J: Disclosure - Answers

**Responsible disclosure:**

| Step | Action | Timeline |
|------|--------|----------|
| 1 | Discover vulnerability | - |
| 2 | Report to vendor | Immediately |
| 3 | Allow time to patch | 90 days typical |
| 4 | Coordinate disclosure | After patch |
| 5 | Public disclosure | After fix available |

**Disclosure types:**

| Type | Description | Pros | Cons |
|------|-------------|------|------|
| Full | Immediate public | Pressure to fix | Users at risk |
| Responsible | Coordinated | Balanced | Vendor may delay |
| Non-disclosure | Never public | Vendor relationship | Users never know |

---

### Activity K: Remediation - Answers

**Timeline:**

| Severity | Time |
|----------|------|
| Critical | 24-48 hours |
| High | 7 days |
| Medium | 30 days |
| Low | 90 days |

**Compensating controls:**

| Control | Description |
|---------|-------------|
| Network segmentation | Isolate vulnerable systems |
| WAF rules | Block exploit patterns |
| Disable service | Turn off vulnerable component |
| Enhanced monitoring | Detect exploitation attempts |

---

### Activity L: Report - Answers

| Section | Content | Audience |
|---------|---------|----------|
| Executive summary | Business impact | Executives |
| Scope/methodology | What was tested | Technical/management |
| Findings | Vulnerabilities | Technical |
| Risk ratings | Severity rankings | All |
| Recommendations | Fixes | Technical |
| Technical details | Exploit details | Technical |
| Appendices | Raw data | Reference |

---

### Activity M: Teams - Answers

| Team | Role | Activities |
|------|------|------------|
| Red | Attackers | Simulate adversaries |
| Blue | Defenders | Detect and respond |
| Purple | Collaboration | Red+Blue together |
| White | Referees | Oversee exercise |

**Red vs Pentest:**

| Aspect | Pentest | Red Team |
|--------|---------|----------|
| Scope | Defined systems | Organization-wide |
| Duration | Days/weeks | Weeks/months |
| Objective | Find vulns | Achieve goal (data, access) |
| Methods | Technical | Technical + social + physical |
| Stealth | Optional | Required |
| Blue awareness | Often aware | Usually unaware |

**Purple team value:** Improves both teams—red shares techniques, blue improves detection, accelerates security improvement.

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: 500 vulns, fix by next week**

**Approach:**
1. Filter by CVSS (critical/high first)
2. Consider asset criticality
3. Check exploitability (public exploits?)
4. Focus on internet-facing systems
5. Group similar vulns (one patch fixes many)
6. Set realistic timeline by severity
7. Communicate risk of unfixed items
8. Document accepted risk for delays

**Message to management:** "We'll fix all critical/high on internet-facing systems this week. Remaining items prioritized over 30-90 days based on risk."

---

**Scenario 2: Tester crashed production DB**

**What went wrong:**
- Scope may have been unclear
- Production should have been excluded
- No test environment available
- Inadequate communication

**Prevention:**
- Clear RoE specifying allowed systems
- Separate test/production environments
- Written approval for any production testing
- Testing during maintenance windows
- Backup verification before testing
- Emergency rollback procedures

---

**Scenario 3: Vendor won't patch for 6 months**

**Options:**
1. Implement compensating controls (WAF, segmentation)
2. Disable vulnerable feature if possible
3. Enhanced monitoring for exploitation
4. Consider alternative vendor/product
5. Document risk and get management acceptance
6. Escalate through vendor account team
7. Check if third-party patch available
8. Consider responsible disclosure timeline pressure

---

## Key Exam Tips

1. **VA:** Finds vulnerabilities (automated)
   **Pentest:** Proves exploitability (manual)

2. **Credentialed scan:** More accurate, sees internal details
   **Non-credentialed:** External view only

3. **Black box:** No knowledge (external)
   **White box:** Full knowledge (internal)
   **Gray box:** Partial knowledge

4. **CVSS ranges:**
   - 0.1-3.9 = Low
   - 4.0-6.9 = Medium
   - 7.0-8.9 = High
   - 9.0-10.0 = Critical

5. **Rules of engagement:** Legal authorization required

6. **Red team:** Adversary simulation
   **Blue team:** Defense
   **Purple team:** Collaboration

7. **False positive:** Alert on non-issue
   **False negative:** Missed real issue (worse for security)

8. **Responsible disclosure:** Report → vendor time → public

9. **Pentest phases:** Recon → Scan → Exploit → Post-exploit → Report

10. **Known environment = White box**

---

## Common Mistakes to Avoid

❌ Testing without written authorization

❌ Confusing vulnerability scan with penetration test

❌ Thinking black box is more thorough (it's not)

❌ Ignoring asset criticality in prioritization

❌ Assuming higher CVSS always means higher priority

❌ Forgetting compensating controls when patches unavailable

---

**Congratulations on completing Lab 23!**

Vulnerability and penetration testing skills are essential for identifying and proving security weaknesses.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 23: Vulnerability and Penetration Testing - Solution Guide*