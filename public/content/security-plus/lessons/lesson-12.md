# Lesson 12: Vulnerability Management

**Estimated Time:** 25-30 minutes  
**Domain:** 2.0 Threats, Vulnerabilities, and Mitigations (22% of exam)  
**Exam Objectives Covered:** 2.3 - Explain various types of vulnerabilities

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Describe the vulnerability management lifecycle from identification to remediation
- Differentiate between vulnerability scanning and penetration testing
- Explain credentialed vs. non-credentialed scanning and when to use each
- Interpret CVSS scores and understand base, temporal, and environmental metrics
- Identify CVE entries and explain their purpose in vulnerability tracking
- Prioritize remediation based on risk, exploitability, and business impact
- Describe vulnerability response options including patching, compensating controls, and risk acceptance
- Explain false positives, false negatives, and their implications
- Apply appropriate scanning frequency and scheduling strategies

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Vulnerability Management" (11 min)
- **Cybrary:** "Understanding CVSS Scores" (8 min)
- **SANS:** "Vulnerability Management Best Practices" (15 min)

---

## Introduction

In 2017, Equifax suffered one of the largest data breaches in history—147 million people affected. The root cause? A vulnerability in Apache Struts that had been publicly disclosed and patched two months before the breach. Equifax knew about it. They had a vulnerability management program. But somewhere between identification and remediation, the process failed.

The vulnerability was CVE-2017-5638, with a CVSS score of 10.0—the maximum severity. It allowed remote code execution with no authentication required. The patch was available. The vulnerability was in their vulnerability scanner's findings. But it wasn't remediated.

This illustrates why vulnerability management isn't just about finding vulnerabilities—it's about the entire lifecycle: identification, analysis, prioritization, remediation, and verification. Organizations discover thousands of vulnerabilities annually. Without systematic management, critical ones fall through the cracks.

Vulnerability management is a continuous process, not a one-time scan. New vulnerabilities emerge daily. Systems change. Risk evolves. Effective vulnerability management requires tools, processes, and most importantly, organizational commitment to acting on findings.

---

## Vulnerability Management Lifecycle

Vulnerability management follows a continuous cycle.

```
┌─────────────┐
│  Identify   │ ← Discover vulnerabilities
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Analyze   │ ← Assess severity and context
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Prioritize │ ← Rank by risk and business impact
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Remediate  │ ← Fix, mitigate, or accept
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Verify    │ ← Confirm remediation worked
└──────┬──────┘
       │
       └──────→ Return to Identify (continuous)
```

### Why Continuous?

- New vulnerabilities discovered daily (50+ CVEs per day average)
- Systems change (new software, configurations, patches)
- Threat landscape evolves (new exploits, attack techniques)
- Business context changes (criticality, exposure)

---

## Vulnerability Identification

Finding vulnerabilities before attackers do.

### Vulnerability Scanning

Automated tools that probe systems for known vulnerabilities.

**How it works:**
1. Scanner probes target systems
2. Identifies software versions, configurations, open ports
3. Compares against vulnerability database
4. Reports findings with severity ratings

**Common vulnerability scanners:**
- Nessus
- Qualys
- Rapid7 InsightVM/Nexpose
- OpenVAS (open source)
- Microsoft Defender Vulnerability Management

### Scan Types

**Credentialed vs. Non-Credentialed**

| Aspect | Credentialed | Non-Credentialed |
|--------|--------------|------------------|
| Access | Logs into systems | External probing only |
| Depth | Deep inspection | Surface-level |
| Accuracy | Higher (sees installed software) | Lower (infers from banners) |
| False positives | Fewer | More |
| Requirements | Credentials for all systems | None |
| View | What's actually installed | What's externally visible |

**When to use each:**
- Credentialed: Internal vulnerability assessment, compliance scanning
- Non-credentialed: External attack surface assessment, quick reconnaissance

**Active vs. Passive**

| Aspect | Active | Passive |
|--------|--------|---------|
| Method | Sends probes to targets | Monitors network traffic |
| Detection | May be detected/logged | Invisible to targets |
| Impact | Can affect system performance | No impact on systems |
| Coverage | Comprehensive | Limited to observed traffic |

**Internal vs. External**

- **Internal scanning:** From inside the network, assesses internal attack surface
- **External scanning:** From outside, simulates external attacker's view

**Agent-Based vs. Agentless**

| Aspect | Agent-Based | Agentless |
|--------|-------------|-----------|
| Deployment | Install agent on each system | No installation required |
| Coverage | Continuous, real-time | Point-in-time scans |
| Offline systems | Can scan when connected | Must be online during scan |
| Maintenance | Agent updates required | Centralized management |
| Network impact | Minimal (local scanning) | Network traffic during scans |

### Penetration Testing

Human-driven security testing that goes beyond automated scanning.

**Vulnerability scanning vs. Penetration testing:**

| Aspect | Vulnerability Scanning | Penetration Testing |
|--------|----------------------|---------------------|
| Automation | Automated | Human-driven |
| Depth | Identifies potential vulnerabilities | Validates and exploits vulnerabilities |
| Scope | Broad coverage | Targeted, deeper |
| Output | List of vulnerabilities | Proof of exploitation, business impact |
| Frequency | Regular (weekly/monthly) | Periodic (annual/quarterly) |
| False positives | Common | Validated findings |

**Penetration testing approaches:**

- **Black box:** No prior knowledge (simulates external attacker)
- **White box:** Full knowledge (architecture, code, credentials)
- **Gray box:** Partial knowledge (some documentation, limited access)

### Bug Bounty Programs

Crowdsourced vulnerability discovery.

**How it works:**
1. Organization defines scope (what can be tested)
2. Security researchers search for vulnerabilities
3. Valid findings reported through platform
4. Researchers paid bounties based on severity

**Benefits:**
- Diverse perspectives and skills
- Continuous testing
- Pay only for valid findings
- Access to global talent pool

**Platforms:** HackerOne, Bugcrowd, Synack

### Responsible Disclosure

Ethical process for reporting vulnerabilities.

**Timeline typically:**
1. Researcher discovers vulnerability
2. Reports to vendor privately
3. Vendor confirms and develops patch
4. Coordinated disclosure (usually 90 days)
5. Public disclosure after patch available

**Why it matters:** Gives vendors time to fix before attackers learn of vulnerability.

---

## Vulnerability Analysis

Understanding what vulnerabilities mean and their potential impact.

### CVE (Common Vulnerabilities and Exposures)

Standardized identifiers for known vulnerabilities.

**Format:** CVE-YEAR-NUMBER

**Examples:**
- CVE-2021-44228 (Log4Shell)
- CVE-2017-5638 (Apache Struts, Equifax breach)
- CVE-2014-0160 (Heartbleed)

**Purpose:**
- Universal reference for vulnerabilities
- Enables correlation across tools and databases
- Facilitates communication about specific issues

**CVE entry contains:**
- Unique identifier
- Description
- References (advisories, patches)
- Affected products

### CVSS (Common Vulnerability Scoring System)

Standardized severity scoring for vulnerabilities.

**Score Range:** 0.0 to 10.0

| Score | Severity | Example |
|-------|----------|---------|
| 0.0 | None | - |
| 0.1 - 3.9 | Low | Information disclosure with limited impact |
| 4.0 - 6.9 | Medium | Requires authentication or user interaction |
| 7.0 - 8.9 | High | Remote code execution requiring some conditions |
| 9.0 - 10.0 | Critical | Unauthenticated remote code execution |

### CVSS Metric Groups

**Base Score**

Intrinsic characteristics of vulnerability (doesn't change over time).

*Attack Vector (AV):*
- Network (N) - remotely exploitable
- Adjacent (A) - requires local network access
- Local (L) - requires local access
- Physical (P) - requires physical access

*Attack Complexity (AC):*
- Low (L) - no special conditions
- High (H) - requires specific conditions

*Privileges Required (PR):*
- None (N) - no authentication needed
- Low (L) - basic user privileges
- High (H) - administrative privileges

*User Interaction (UI):*
- None (N) - no user action required
- Required (R) - user must do something

*Scope (S):*
- Unchanged (U) - affects only vulnerable component
- Changed (C) - affects other components

*Impact (CIA):*
- Confidentiality, Integrity, Availability
- None / Low / High for each

**Temporal Score**

Characteristics that change over time.

- Exploit Code Maturity - Is exploit publicly available?
- Remediation Level - Is there a patch?
- Report Confidence - How verified is the vulnerability?

**Environmental Score**

Organization-specific factors.

- Modified Base Metrics - Adjusted for your environment
- Confidentiality/Integrity/Availability Requirements - Business importance

### CVSS Example

**Log4Shell (CVE-2021-44228):**

Base Score: 10.0 (Critical)

- Attack Vector: Network (remotely exploitable)
- Attack Complexity: Low (trivial to exploit)
- Privileges Required: None (no authentication)
- User Interaction: None (no user action)
- Scope: Changed (can affect other systems)
- Impact: High/High/High (complete compromise)

This combination produces the maximum score—worst possible vulnerability.

---

## Vulnerability Prioritization

Not all vulnerabilities deserve equal attention.

### Risk-Based Prioritization

Consider multiple factors beyond just CVSS score.

**Factors to consider:**

| Factor | Question |
|--------|----------|
| CVSS Score | How severe is the vulnerability itself? |
| Exploitability | Is there a known exploit? Is it being actively exploited? |
| Asset Criticality | How important is the affected system? |
| Exposure | Is it internet-facing or internal only? |
| Data Sensitivity | What data could be compromised? |
| Compensating Controls | Are there other protections in place? |
| Remediation Difficulty | How hard is it to fix? |

### Exploitability Context

A vulnerability with a public exploit is more urgent than one without.

**Exploit availability:**
- No known exploit - theoretical risk
- Proof of concept exists - demonstrates exploitability
- Weaponized exploit available - script kiddie usable
- Active exploitation in the wild - immediate threat

**Sources for exploit intelligence:**
- CISA Known Exploited Vulnerabilities (KEV) catalog
- Exploit-DB
- Metasploit modules
- Vendor advisories
- Threat intelligence feeds

### Asset Criticality

**Prioritize by system importance:**

| Tier | Systems | Priority |
|------|---------|----------|
| 1 | Crown jewels (critical data, revenue-generating) | Immediate |
| 2 | Supporting infrastructure (AD, DNS, email) | High |
| 3 | Standard business systems | Medium |
| 4 | Non-critical, isolated systems | Lower |

**Example:** Same vulnerability on:
- Internet-facing payment server → Critical priority
- Isolated test workstation → Lower priority

### Practical Prioritization Framework

```
                    ┌─────────────────┐
                    │ CVSS Critical   │
                    │ (9.0-10.0)      │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌─────────┐    ┌─────────┐    ┌─────────┐
        │ Actively│    │ Exploit │    │ No Known│
        │Exploited│    │ Exists  │    │ Exploit │
        └────┬────┘    └────┬────┘    └────┬────┘
             │              │              │
             ▼              ▼              ▼
      IMMEDIATE        24-48 hours     7-14 days
       (hours)         (critical       (standard
                       systems)        patching)
```

---

## Vulnerability Response

What to do after identifying and prioritizing.

### Remediation Options

**Patching**

Apply vendor-provided fix.

- Most complete solution
- Eliminates vulnerability
- May require testing, downtime
- Not always immediately available

**Configuration Changes**

Modify settings to eliminate or reduce vulnerability.

- Disable vulnerable feature
- Restrict access
- Change default settings
- Example: Disable SMBv1 instead of patching

**Compensating Controls**

Implement alternative controls when patching isn't possible.

Examples:
- WAF rule blocking exploit patterns
- Network segmentation limiting exposure
- Enhanced monitoring for exploitation attempts
- Access restrictions reducing attack surface

**Risk Acceptance**

Acknowledge and accept the risk.

**When appropriate:**
- Cost of remediation exceeds potential impact
- System scheduled for decommission
- No viable remediation exists
- Compensating controls adequately reduce risk

**Requirements:**
- Documented business justification
- Approval from appropriate authority
- Time-limited (not permanent acceptance)
- Regular review

### Exceptions

Formal process for delaying or skipping remediation.

**Exception documentation should include:**
- Vulnerability details
- Affected systems
- Business justification
- Risk assessment
- Compensating controls
- Expiration date
- Approvals

---

## Scanning Operations

Practical aspects of running a vulnerability management program.

### False Positives and False Negatives

**False Positive:** Scanner reports vulnerability that doesn't exist.

*Causes:*
- Banner grabbing inaccuracy
- Version detection errors
- Configuration not fully visible
- Check too generic

*Impact:* Wastes time investigating non-issues.

**False Negative:** Scanner misses real vulnerability.

*Causes:*
- Vulnerability not in database
- System not fully scanned
- Non-credentialed scan missing internal details
- Scanner evasion techniques

*Impact:* False sense of security; real risks unknown.

**Managing both:**
- Use credentialed scans (reduce false positives/negatives)
- Keep scanner updated (latest vulnerability checks)
- Validate high-impact findings manually
- Use multiple scanners/methods
- Don't assume clean scan = no vulnerabilities

### Scan Frequency

**Factors affecting frequency:**
- Regulatory requirements (PCI-DSS: quarterly external, plus after changes)
- Rate of change in environment
- Risk tolerance
- System criticality
- Resource availability

**Typical schedules:**

| Scan Type | Frequency |
|-----------|-----------|
| Critical systems | Weekly or continuous |
| Standard internal | Monthly |
| External perimeter | Weekly to monthly |
| Comprehensive | Quarterly |
| After major changes | Immediately |

### Scan Scheduling Considerations

**Timing:**
- Avoid business-critical hours
- Consider system maintenance windows
- Account for backup schedules
- Time zones for global organizations

**Impact management:**
- Test scan settings in lab first
- Start with less aggressive settings
- Monitor system performance during scans
- Have rollback plan if issues occur

**Coverage:**
- Ensure all assets in scope
- Account for dynamic/cloud assets
- Include temporary/seasonal systems
- Don't forget network devices, IoT

---

## Reporting and Metrics

Communicating vulnerability status effectively.

### Key Metrics

**Vulnerability counts:**
- Total open vulnerabilities
- Breakdown by severity
- New vs. closed this period
- Aging (how long vulnerabilities remain open)

**Process metrics:**
- Mean time to remediate (MTTR) by severity
- Scan coverage (% of assets scanned)
- Exception count and trends
- Patch compliance rate

**Risk metrics:**
- Critical vulnerabilities on critical assets
- Internet-facing vulnerability count
- Vulnerabilities with known exploits

### Reporting to Different Audiences

**Technical teams:**
- Detailed findings with remediation steps
- Asset-specific reports
- Integration with ticketing systems

**Management:**
- Risk trends over time
- Comparison to benchmarks/goals
- Business impact of key findings
- Resource needs

**Executives:**
- High-level risk posture
- Trend direction (improving/worsening)
- Key risks requiring decisions
- Compliance status

---

## Key Exam Tips

🎯 **Credentialed vs. non-credentialed:** Credentialed scans log into systems, provide deeper visibility, fewer false positives. Non-credentialed shows external attacker's view.

🎯 **Active vs. passive scanning:** Active sends probes (may impact systems). Passive monitors traffic (invisible but limited coverage).

🎯 **CVSS components:** Base score (intrinsic severity), Temporal (changes over time—exploits, patches), Environmental (organization-specific context).

🎯 **CVSS 10.0 means:** Network exploitable, no authentication, no user interaction, complete impact—worst case.

🎯 **CVE purpose:** Unique identifier for vulnerabilities. CVE-YEAR-NUMBER format.

🎯 **Prioritization factors:** CVSS score + exploitability + asset criticality + exposure + data sensitivity.

🎯 **False positive:** Scanner reports issue that doesn't exist. False negative: Scanner misses real issue.

🎯 **Compensating controls:** Alternative controls when patching not possible. Document and time-limit.

🎯 **Risk acceptance:** Formal acknowledgment of unmitigated risk. Requires documentation and approval.

🎯 **Penetration testing vs. vulnerability scanning:** Pentest validates/exploits findings with human expertise. Scanning is automated identification.

---

## Key Takeaways

- [ ] Vulnerability management is a continuous lifecycle: identify, analyze, prioritize, remediate, verify
- [ ] Vulnerability scanning automates discovery; penetration testing validates with human expertise
- [ ] Credentialed scans provide deeper visibility than non-credentialed external scans
- [ ] Active scanning sends probes; passive scanning monitors traffic without impact
- [ ] CVE provides unique identifiers for vulnerabilities (CVE-YEAR-NUMBER)
- [ ] CVSS scores range 0-10: Low (0.1-3.9), Medium (4.0-6.9), High (7.0-8.9), Critical (9.0-10.0)
- [ ] CVSS Base score is intrinsic; Temporal changes over time; Environmental is organization-specific
- [ ] Prioritize by CVSS + exploitability + asset criticality + exposure, not CVSS alone
- [ ] False positives waste resources; false negatives create unknown risk
- [ ] Remediation options: patching, configuration changes, compensating controls, risk acceptance
- [ ] Risk acceptance requires documentation, business justification, approval, and time limits
- [ ] Scan frequency depends on criticality, compliance requirements, and rate of change
- [ ] Bug bounty programs crowdsource vulnerability discovery through paid researchers

---

## Check Your Understanding

**1. An organization performs monthly vulnerability scans but only uses non-credentialed scanning. Their scan results show very few vulnerabilities. A penetration test later finds numerous unpatched systems. What likely explains the discrepancy?**

<details>
<summary>Show Answer</summary>
<strong>Non-credentialed scans have limited visibility.</strong>

<strong>Why the discrepancy occurred:</strong>
1. Non-credentialed scans only see external-facing information
2. Scanner infers vulnerabilities from banners, responses
3. Actual installed software versions not visible
4. Internal configurations not accessible
5. Many vulnerabilities only detectable with system access

<strong>What non-credentialed scanning misses:</strong>
- Locally installed software vulnerabilities
- Missing patches not reflected in banners
- Configuration weaknesses
- Internal services not exposed externally

<strong>Solution:</strong>
- Implement credentialed scanning
- Scanner logs into systems
- Queries installed software directly
- Much higher accuracy, fewer false negatives

<strong>Use case for non-credentialed:</strong>
- External attack surface assessment
- What attackers see from outside
- Should complement, not replace, credentialed scans
</details>

**2. A vulnerability scanner reports CVE-2023-XXXX with a CVSS Base Score of 9.8 on an isolated test server that contains no sensitive data and is not connected to production networks. How should this be prioritized compared to a CVSS 6.5 vulnerability on the internet-facing payment gateway?**

<details>
<summary>Show Answer</summary>
<strong>The 6.5 on the payment gateway is likely higher priority.</strong>

<strong>CVSS Base Score alone is insufficient:</strong>

**Isolated test server (CVSS 9.8):**
- No sensitive data at risk
- Not connected to production
- Limited business impact if compromised
- Attacker would gain little value

**Payment gateway (CVSS 6.5):**
- Internet-facing (exposed to attackers)
- Contains/processes payment data
- Regulatory implications (PCI-DSS)
- Business-critical system
- High impact if compromised

<strong>This is why Environmental score exists:</strong>
- Adjust base score for your context
- Asset criticality matters
- Data sensitivity matters
- Exposure matters

<strong>Prioritization should consider:</strong>
1. Base CVSS score
2. Asset criticality (payment gateway >> test server)
3. Data sensitivity (payment data >> test data)
4. Exposure (internet-facing >> isolated)
5. Exploitability (known exploits?)

<strong>Outcome:</strong> Payment gateway vulnerability first, despite lower base score.
</details>

**3. A vulnerability has a CVSS Base Score of 7.5 (High), but there's no known exploit, the vendor has released a patch, and it affects a system behind multiple layers of security. What CVSS score components would adjust the effective risk?**

<details>
<summary>Show Answer</summary>
<strong>Temporal and Environmental scores would reduce effective risk.</strong>

<strong>Temporal Score adjustments:</strong>

*Exploit Code Maturity:* 
- No known exploit = lower score
- Reduces likelihood of exploitation

*Remediation Level:*
- Patch available = lower score
- Official fix exists

*Report Confidence:*
- Confirmed vulnerability = no change

<strong>Environmental Score adjustments:</strong>

*Modified Attack Vector:*
- Multiple security layers may effectively change attack complexity

*Security Requirements:*
- If system has low CIA requirements, impact reduced

<strong>Combined effect:</strong>
- Base: 7.5 (High)
- Temporal: Lower (no exploit, patch available)
- Environmental: Lower (behind security layers, lower requirements)
- Effective risk: Significantly reduced from 7.5

<strong>Practical meaning:</strong>
- Still needs patching
- Not as urgent as actively exploited vulnerability
- Standard patching timeline may be acceptable
- Document the risk factors in prioritization
</details>

**4. CISA adds a vulnerability to their Known Exploited Vulnerabilities (KEV) catalog. It has a CVSS score of 6.8. An organization also has unpatched vulnerabilities with CVSS scores of 8.5 and 9.0 not on the KEV list. Which should be prioritized first?**

<details>
<summary>Show Answer</summary>
<strong>The KEV vulnerability (6.8) should likely be prioritized first.</strong>

<strong>Why KEV matters:</strong>
- "Known Exploited" = active exploitation in the wild
- Real attackers using this vulnerability now
- Theoretical risk vs. actual risk

<strong>The other vulnerabilities (8.5, 9.0):</strong>
- Higher base severity
- But no evidence of active exploitation
- May never be weaponized
- Theoretical worst-case scores

<strong>Risk calculation:</strong>
```
Risk = Likelihood × Impact

KEV (6.8):
- Impact: Medium-High
- Likelihood: HIGH (proven active exploitation)
- Risk: HIGH

Non-KEV (8.5, 9.0):
- Impact: High-Critical
- Likelihood: Unknown (no proven exploitation)
- Risk: Unknown/Lower
```

<strong>Best practice:</strong>
1. KEV vulnerabilities first (proven threat)
2. Then critical CVSS with known exploits
3. Then critical CVSS without exploits
4. Continue down severity/exploitability matrix

<strong>CISA BOD 22-01:</strong> Federal agencies required to remediate KEV vulnerabilities within specified timeframes—recognition of exploitability importance.
</details>

**5. A vulnerability scan produces 5,000 findings. The security team has limited resources. What framework should they use to make remediation manageable?**

<details>
<summary>Show Answer</summary>
<strong>Apply risk-based prioritization framework.</strong>

<strong>Step 1: Categorize by severity</strong>
```
Critical (9.0-10.0): ~200 (immediate attention)
High (7.0-8.9): ~800
Medium (4.0-6.9): ~2,000
Low (0.1-3.9): ~2,000
```

<strong>Step 2: Add exploitability context</strong>
- Cross-reference with KEV catalog
- Check for public exploits (Exploit-DB, Metasploit)
- Known exploited = priority boost

<strong>Step 3: Add asset context</strong>
- Critical assets (tier 1): Internet-facing, crown jewels
- Important assets (tier 2): Supporting infrastructure
- Standard assets (tier 3): Normal business systems
- Low-value assets (tier 4): Test, isolated, decommissioning

<strong>Step 4: Create priority matrix</strong>

| Priority | Criteria | Timeline |
|----------|----------|----------|
| P1 | Critical + Exploited + Tier 1 asset | 24-48 hours |
| P2 | Critical + Tier 1, or High + Exploited | 7 days |
| P3 | High + Tier 1-2, Critical + Tier 3-4 | 30 days |
| P4 | Medium, Low on critical assets | 90 days |
| P5 | Low on non-critical | Risk acceptance or 180 days |

<strong>Step 5: Group for efficiency</strong>
- Same vulnerability across systems = one remediation effort
- Same patch fixes multiple vulnerabilities

<strong>Result:</strong> 5,000 findings become manageable prioritized list.
</details>

**6. During vulnerability scanning, the security team notices their scanner never finds any vulnerabilities on a specific server, while manual inspection shows it's severely outdated. What's happening and how should it be addressed?**

<details>
<summary>Show Answer</summary>
<strong>Likely causes:</strong>

<strong>1. Scanner can't reach the system:</strong>
- Firewall blocking scanner
- Network segmentation
- Host-based firewall

<strong>2. System not in scan scope:</strong>
- Asset inventory incomplete
- IP not in target list
- Dynamic IP not captured

<strong>3. Non-credentialed scan limitations:</strong>
- Server responding but hiding details
- Version information not exposed
- Internal software not visible externally

<strong>4. Scanner evasion (intentional or not):</strong>
- Services configured to hide banners
- Non-standard ports
- Custom configurations

<strong>5. Scanner malfunction:</strong>
- Scan errors not reviewed
- Timeout issues
- Authentication failures

<strong>Resolution steps:</strong>

1. **Verify connectivity:** Can scanner reach the system?
2. **Check scan logs:** Any errors for this target?
3. **Implement credentialed scanning:** Log into the system
4. **Review asset inventory:** Is system properly cataloged?
5. **Manual verification:** Supplement automated scanning
6. **Agent-based scanning:** Install agent for guaranteed coverage

<strong>Key lesson:</strong> Clean scan results don't guarantee no vulnerabilities. Verify coverage before trusting results.
</details>

**7. A critical vulnerability is discovered on production database servers. Patching requires downtime that will impact business operations during end-of-quarter processing. What options exist, and what should be documented?**

<details>
<summary>Show Answer</summary>
<strong>Options:</strong>

<strong>1. Emergency patching (accept downtime):</strong>
- If risk is severe enough, business impact acceptable
- Document business decision and approvals
- Schedule shortest possible maintenance window

<strong>2. Compensating controls while waiting:</strong>
- Network segmentation (limit who can reach servers)
- WAF/IPS rules blocking exploit patterns
- Enhanced monitoring/alerting
- Disable vulnerable feature if possible
- Restrict access to minimum necessary

<strong>3. Staged patching:</strong>
- Patch replicas first, promote
- Patch during lower-risk period
- Rolling updates if architecture supports

<strong>4. Risk acceptance (temporary):</strong>
- Document the risk formally
- Time-limited exception
- Executive approval required
- Compensating controls mandatory

<strong>Required documentation:</strong>

1. **Vulnerability details:** CVE, CVSS, description
2. **Affected systems:** Specific servers, data at risk
3. **Business justification:** Why immediate patching not possible
4. **Risk assessment:** Likelihood and impact during delay
5. **Compensating controls:** What's being done to reduce risk
6. **Approval:** Appropriate authority sign-off
7. **Expiration:** When patching WILL occur
8. **Monitoring plan:** How to detect exploitation attempts

<strong>Key principle:</strong> Never just ignore—formal process even for delays.
</details>

**8. What distinguishes a penetration test from a vulnerability scan, and when would you use each?**

<details>
<summary>Show Answer</summary>
<strong>Key differences:</strong>

| Aspect | Vulnerability Scan | Penetration Test |
|--------|-------------------|------------------|
| Automation | Fully automated | Human-driven |
| Depth | Identifies potential issues | Validates and exploits |
| Output | List of possible vulnerabilities | Proof of exploitation |
| False positives | Common | Validated findings |
| Scope | Broad coverage | Targeted, deep |
| Skills needed | Tool operation | Expert knowledge |
| Frequency | Regular (weekly/monthly) | Periodic (quarterly/annual) |
| Cost | Lower | Higher |
| Duration | Hours | Days to weeks |

<strong>When to use vulnerability scanning:</strong>
- Regular security hygiene
- Compliance requirements
- Continuous monitoring
- Change verification
- Broad coverage needs
- Limited budget/resources

<strong>When to use penetration testing:</strong>
- Validate scanner findings
- Test incident response
- Assess real-world attack resistance
- Before major launches
- Regulatory requirements
- After significant changes
- Prove business risk to stakeholders

<strong>Complementary relationship:</strong>
- Scanning finds potential issues (breadth)
- Pentesting validates and demonstrates impact (depth)
- Scanning: "You might be vulnerable to X"
- Pentesting: "I exploited X and accessed Y data"

<strong>Best practice:</strong> Regular scanning + periodic pentesting
</details>

**9. An organization runs vulnerability scans weekly but finds that remediation teams are overwhelmed with findings. Many vulnerabilities remain unpatched for months. What process improvements would help?**

<details>
<summary>Show Answer</summary>
<strong>Process improvements:</strong>

<strong>1. Improve prioritization:</strong>
- Not all vulnerabilities equal priority
- Focus on critical + exploited + exposed
- Implement tiered SLAs by risk
- Stop treating all findings as equal

<strong>2. Group and batch:**
- Same vulnerability across systems = one effort
- Same patch fixes multiple CVEs
- Coordinate with patch cycles

<strong>3. Automate where possible:</strong>
- Automated patching for standard systems
- Configuration management for common fixes
- Auto-ticketing integrated with workflow

<strong>4. Improve asset ownership:</strong>
- Clear owners for every system
- Findings automatically routed to owners
- Accountability for SLA compliance

<strong>5. Reduce scan noise:</strong>
- Tune out known false positives
- Focus on actionable findings
- Quality over quantity in reporting

<strong>6. Risk acceptance process:</strong>
- Formal process for items that can't be fixed
- Removes from active queue
- Regular review of acceptances

<strong>7. Metrics and accountability:</strong>
- Track remediation SLAs
- Report aging vulnerabilities
- Escalation for overdue items
- Management visibility

<strong>8. Resource alignment:</strong>
- Match resources to actual workload
- Demonstrate backlog to justify staffing
- Consider managed services for volume

<strong>Root cause:</strong> Usually not just volume—it's lack of prioritization, ownership, and process.
</details>

**10. Explain the relationship between CVE, CVSS, and vulnerability scanners.**

<details>
<summary>Show Answer</summary>
<strong>How they work together:</strong>

<strong>CVE (Common Vulnerabilities and Exposures):</strong>
- **What it is:** Unique identifier for vulnerabilities
- **Who maintains:** MITRE, sponsored by CISA
- **Purpose:** Common reference language
- **Format:** CVE-YEAR-NUMBER (CVE-2021-44228)
- **Content:** Description, references, affected products

<strong>CVSS (Common Vulnerability Scoring System):</strong>
- **What it is:** Severity scoring methodology
- **Who maintains:** FIRST (Forum of Incident Response and Security Teams)
- **Purpose:** Standardized severity assessment
- **Format:** Numeric score 0.0-10.0 with vector string
- **Relationship to CVE:** CVEs are assigned CVSS scores

<strong>Vulnerability Scanners:</strong>
- **What they do:** Detect vulnerabilities in systems
- **How they use CVE:** Report findings using CVE identifiers
- **How they use CVSS:** Display severity scores for prioritization
- **Databases:** Maintain mapping of CVE → detection checks

<strong>Flow example:</strong>

1. Vulnerability discovered in Apache
2. Assigned CVE-2023-12345
3. Analyzed and assigned CVSS 8.5 (High)
4. Scanner vendor creates detection check
5. Your scanner runs, detects Apache version
6. Reports: "CVE-2023-12345, CVSS 8.5, Apache server X"
7. You prioritize remediation using CVSS + context

<strong>Ecosystem:</strong>
```
Vulnerability → CVE ID → CVSS Score → Scanner Check → Your Finding → Prioritization
```

All three are essential: CVE provides identity, CVSS provides severity, scanners provide detection.
</details>

---

## Next Lesson Preview

In **Lesson 13: Mitigation Techniques**, we'll explore specific methods for reducing security risks. You'll learn about network segmentation, access controls, application security hardening, encryption implementation, and secure configuration baselines—the practical controls that defend against the vulnerabilities we've been studying.

---

✅ **Lesson 12 Complete**

**Progress:** 12 of 30 lessons complete (40%)

---

*Next up: Lesson 13 - Mitigation Techniques*