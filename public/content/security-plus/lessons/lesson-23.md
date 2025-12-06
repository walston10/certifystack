# Lesson 23: Vulnerability and Penetration Testing

**Estimated Time:** 30-35 minutes  
**Domain:** 4.0 Security Operations (28% of exam)  
**Exam Objectives Covered:** 4.3 - Explain various activities associated with vulnerability management

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Differentiate between vulnerability scanning and penetration testing
- Compare scan types: credentialed vs non-credentialed, internal vs external, active vs passive
- Explain the importance of scope definition and rules of engagement
- Distinguish between black box, white box, and gray box testing approaches
- Describe the phases of a penetration test from reconnaissance through reporting
- Compare red team, blue team, and purple team exercises
- Explain bug bounty programs and responsible disclosure processes
- Identify when each assessment type is most appropriate

---

## Video Resources

- **Professor Messer:** "CompTIA Security+ SY0-701 - Penetration Testing" (13 min)
- **NetworkChuck:** "What is Penetration Testing? (Ethical Hacking)" (15 min)
- **Cybrary:** "Vulnerability Assessment vs Penetration Testing" (10 min)

---

## Introduction

The email landed in Jennifer's inbox at 9:47 AM on a Tuesday: "URGENT: Security Assessment Results - Executive Summary Attached."

As CISO of a regional healthcare network, Jennifer had commissioned a penetration test three weeks earlier. The security team was confident—they'd passed their last compliance audit with flying colors, their vulnerability scanner showed only low-severity findings, and they'd invested heavily in next-generation firewalls and endpoint protection.

She opened the report expecting validation. Instead, the executive summary read:

*"Within 4 hours of beginning the assessment, our team achieved domain administrator access to the Active Directory environment. Within 8 hours, we accessed the electronic health records database containing 2.3 million patient records. Within 12 hours, we demonstrated the ability to deploy ransomware to 94% of endpoints simultaneously. Total alerts generated in your SIEM: zero."*

Jennifer's confidence evaporated. How was this possible? They'd checked all the compliance boxes. The vulnerability scanner was green. The auditors said they were fine.

The penetration testers explained: Compliance audits verify you have controls. Vulnerability scanners find known technical weaknesses. Neither answers the question that actually matters: *Can a motivated attacker compromise your organization?*

The testers had exploited a chain of seemingly minor issues that no scanner would flag as critical:
1. A marketing employee clicked a phishing link in a test email (human vulnerability—no scanner detects this)
2. Their workstation had an outdated browser plugin (low severity according to the scanner)
3. That plugin vulnerability allowed code execution, giving attackers a foothold
4. From that workstation, they found cached credentials for a service account (misconfiguration, not a "vulnerability")
5. The service account had excessive permissions (design flaw, not patchable)
6. Those permissions allowed access to a backup server containing domain admin credentials
7. Game over

Each individual finding was "low" or "medium" severity. Together, they formed an attack path leading to total compromise. The vulnerability scanner saw individual trees. The penetration testers saw the forest.

This is why organizations need both vulnerability assessments AND penetration testing. Scanners find known weaknesses efficiently and at scale. Penetration testers think like attackers—chaining vulnerabilities, exploiting human factors, and discovering paths that automated tools miss.

In this lesson, you'll learn how organizations proactively discover weaknesses through vulnerability scanning and penetration testing, understand the different approaches and methodologies, and recognize when each type of assessment is appropriate.

---

## Vulnerability Scanning: Finding Known Weaknesses

Vulnerability scanning uses automated tools to identify known security weaknesses in systems, applications, and configurations.

### How Vulnerability Scanners Work

Scanners maintain databases of known vulnerabilities—thousands of checks for missing patches, misconfigurations, default credentials, and insecure settings. They probe target systems, compare findings against their database, and generate reports.

**Scanning process:**
1. **Discovery:** Identify live hosts and open ports
2. **Service identification:** Determine what's running on each port
3. **Vulnerability checks:** Test for known weaknesses
4. **Reporting:** Document findings with severity ratings

**What scanners detect:**
- Missing security patches (OS, applications, firmware)
- Misconfigured services (weak SSL/TLS, unnecessary services)
- Default or weak credentials
- Known software vulnerabilities (CVE database)
- Compliance violations (benchmarks, standards)
- Insecure protocols (Telnet, FTP, SSLv3)

**What scanners DON'T detect:**
- Zero-day vulnerabilities (not in database yet)
- Business logic flaws (application-specific)
- Chained attack paths (human analysis required)
- Social engineering susceptibility
- Physical security weaknesses
- Novel attack techniques

### Credentialed vs Non-Credentialed Scans

**Non-credentialed (unauthenticated) scans:**

Scanner probes systems externally without logging in. Sees what an unauthenticated attacker sees.

*Advantages:*
- No credentials to manage or protect
- Shows external attack surface
- Lower risk of disrupting systems
- Faster to configure

*Disadvantages:*
- Limited visibility (can't see inside systems)
- More false negatives (misses internal vulnerabilities)
- Can't assess patch levels accurately
- May trigger security alerts

**Credentialed (authenticated) scans:**

Scanner logs into systems with provided credentials. Examines internal configuration, installed software, and patch levels.

*Advantages:*
- Comprehensive visibility
- Accurate patch assessment
- Fewer false negatives
- Detailed configuration analysis

*Disadvantages:*
- Credentials must be secured (scanner compromise = credential theft)
- More complex to configure
- Credential rotation challenges
- Higher system impact

**Best practice:** Use credentialed scans for thorough internal assessment, non-credentialed for external attack surface validation. Many organizations run both.

### Internal vs External Scans

**External scans:**

Scan from outside the network perimeter—simulating internet-based attacker perspective.

*Focus areas:*
- Internet-facing systems
- Firewall effectiveness
- DMZ security
- Public-facing applications
- Perimeter device configurations

**Internal scans:**

Scan from inside the network—simulating insider or attacker who breached perimeter.

*Focus areas:*
- Internal server security
- Workstation patch levels
- Internal application vulnerabilities
- Network segmentation effectiveness
- Lateral movement opportunities

**Compliance requirements:** PCI DSS specifically requires both quarterly external scans (by Approved Scanning Vendor) AND internal scans. Other frameworks have similar dual requirements.

### Active vs Passive Scanning

**Active scanning:**

Scanner sends probes to targets, analyzes responses. Most vulnerability scanning is active.

*Characteristics:*
- Generates network traffic
- May impact system performance
- Could trigger security alerts
- Could crash vulnerable systems (rare but possible)
- Provides comprehensive results

**Passive scanning:**

Monitors network traffic without sending probes. Identifies vulnerabilities by observing normal communications.

*Characteristics:*
- No additional network traffic
- Zero risk of system impact
- Stealthier (harder to detect)
- Limited to observable traffic
- May miss inactive systems/services

**Use cases:** Active scanning for scheduled assessments. Passive scanning for continuous monitoring or sensitive environments where active probing is risky (industrial control systems, medical devices).

### Agent-Based vs Agentless Scanning

**Agentless scanning:**

Scanner connects remotely to targets (via network protocols, SSH, WMI). No software installed on targets.

*Advantages:*
- No deployment overhead
- Works with any accessible system
- Easier to manage centrally

*Disadvantages:*
- Requires network access to all targets
- Authentication complexity
- May miss offline systems

**Agent-based scanning:**

Small software agent installed on each target. Agent performs local checks, reports to central console.

*Advantages:*
- Works even when network unavailable
- More thorough local checks
- Real-time or continuous scanning possible
- Works through firewalls

*Disadvantages:*
- Deployment and maintenance overhead
- Agent compatibility issues
- Additional software to secure

🎯 **Exam Tip:** Know the tradeoffs between scan types. Credentialed = more thorough but requires credential management. Internal = sees more but assumes perimeter breach. Agent-based = more thorough but deployment overhead.

---

## Penetration Testing: Thinking Like an Attacker

Penetration testing goes beyond scanning—skilled testers actively attempt to exploit vulnerabilities and demonstrate real-world attack impact.

### Vulnerability Assessment vs Penetration Testing

| Aspect | Vulnerability Assessment | Penetration Testing |
|--------|-------------------------|---------------------|
| Approach | Automated scanning | Manual + automated |
| Goal | Find vulnerabilities | Prove exploitability |
| Depth | Broad, shallow | Narrow, deep |
| Output | List of vulnerabilities | Demonstrated compromise |
| Skill required | Tool operation | Attacker expertise |
| Time | Hours | Days to weeks |
| Frequency | Regular (weekly/monthly) | Periodic (annual/biannual) |
| Cost | Lower | Higher |

**Vulnerability assessment** answers: "What weaknesses exist?"

**Penetration testing** answers: "Can an attacker actually compromise us, and what's the impact?"

Both are valuable. Assessments provide breadth—comprehensive coverage of known issues. Penetration tests provide depth—demonstrating real-world risk that assessments miss.

### Scope and Rules of Engagement

Before any penetration test, clear documentation defines boundaries and expectations.

**Scope definition:**

What's included:
- Target systems (IP ranges, domains, applications)
- Target data (can testers access production data?)
- Target users (is social engineering permitted?)
- Timeframe (testing window)
- Methods allowed (which techniques permitted)

What's excluded:
- Production systems that can't tolerate testing
- Third-party systems without authorization
- Specific attack types (DoS attacks often excluded)
- Physical intrusion (usually separate engagement)

**Rules of engagement:**

*Authorization:* Written permission from system owners. Testing without authorization is illegal—even with good intentions.

*Communication:* 
- Primary contacts (who to notify of findings)
- Emergency contacts (who to call if something breaks)
- Escalation procedures (critical findings)
- Status reporting frequency

*Boundaries:*
- Stop conditions (when to halt testing)
- Off-limits actions (no data destruction)
- Data handling (how to protect discovered sensitive data)
- Evidence preservation (what to document)

*Timing:*
- Testing windows (business hours, after hours, weekends)
- Notification requirements (announce vs. unannounced)
- Duration limits

**Why this matters:** A penetration test without clear scope and authorization is indistinguishable from an actual attack. Documentation protects both the tester and the organization.

### Testing Approaches: Knowledge Levels

The amount of information provided to testers significantly affects what the test measures.

**Black Box Testing (Unknown Environment)**

Testers receive no information about the target—just like a real external attacker.

*What testers know:*
- Organization name
- Perhaps target domain/IP range
- Nothing else

*What they don't know:*
- Internal architecture
- Technology stack
- User accounts
- Source code
- Network diagrams

*Advantages:*
- Most realistic external attack simulation
- Tests reconnaissance effectiveness
- Reveals information disclosure issues

*Disadvantages:*
- Time spent on reconnaissance vs. testing
- May miss internal vulnerabilities
- More expensive (more time required)
- Less comprehensive coverage

*Best for:* Testing external attack surface, validating perimeter security, realistic threat simulation.

**White Box Testing (Known Environment)**

Testers receive full information about the target—insider-level knowledge.

*What testers know:*
- Network diagrams
- Source code
- Configuration files
- User accounts
- Architecture documentation

*Advantages:*
- Maximum coverage
- Efficient use of testing time
- Finds deep vulnerabilities
- Tests "what if attacker had insider access"

*Disadvantages:*
- Doesn't test reconnaissance defenses
- Less realistic for external threat simulation
- Requires significant documentation sharing

*Best for:* Application security testing, code review, comprehensive internal assessment, maximum vulnerability discovery.

**Gray Box Testing (Partially Known Environment)**

Testers receive some information—simulating attacker with partial access.

*What testers know:*
- User-level account credentials
- Basic network information
- Application documentation
- Limited architecture details

*What they don't know:*
- Admin credentials
- Full source code
- Complete network maps
- All system configurations

*Advantages:*
- Balances realism with efficiency
- Simulates compromised user scenario
- Good coverage without full disclosure

*Disadvantages:*
- Requires decisions about what to share
- Neither fully realistic nor fully comprehensive

*Best for:* Most penetration tests—provides reasonable starting point while testing real attack paths.

---

## Penetration Testing Phases

Professional penetration tests follow structured methodology ensuring comprehensive, repeatable assessments.

### Phase 1: Reconnaissance

Gathering information about the target before active testing.

**Passive reconnaissance:**
- OSINT research (public records, social media, job postings)
- DNS enumeration (subdomains, mail servers)
- WHOIS lookups (registration details, contacts)
- Google dorking (exposed files, login pages)
- Shodan searches (exposed devices, services)
- Social media analysis (employee names, technologies used)
- Job postings analysis (reveals technology stack)

**Active reconnaissance:**
- Port scanning (what services are running)
- Service enumeration (versions, configurations)
- Web crawling (application mapping)
- DNS zone transfers (if permitted)

**Output:** Target profile including IP ranges, domain names, employee information, technology stack, potential entry points.

### Phase 2: Scanning and Enumeration

Deeper technical analysis of identified targets.

**Activities:**
- Detailed port scanning (all 65,535 ports)
- Service version identification
- Operating system fingerprinting
- Vulnerability scanning against discovered services
- Web application scanning (OWASP checks)
- Network mapping
- User enumeration (valid usernames)
- Share enumeration (accessible resources)

**Output:** Detailed technical inventory with identified vulnerabilities and misconfigurations.

### Phase 3: Vulnerability Assessment

Analyzing discovered information to identify exploitable weaknesses.

**Activities:**
- Correlating scan results with known exploits
- Identifying vulnerability chains
- Prioritizing attack paths
- Assessing exploitability
- Researching target-specific vulnerabilities

**Output:** Prioritized list of vulnerabilities with assessed exploitability.

### Phase 4: Exploitation

Actively attempting to exploit identified vulnerabilities.

**Activities:**
- Exploiting vulnerabilities to gain access
- Credential attacks (brute force, password spraying)
- Social engineering (if in scope)
- Web application attacks (SQL injection, XSS)
- Network attacks (man-in-the-middle, relay)
- Malware deployment (controlled test malware)

**Important principles:**
- Exploit only what's necessary to demonstrate risk
- Avoid destructive actions
- Document everything
- Stop if unexpected damage occurs
- Maintain control of any access gained

**Output:** Demonstrated access (screenshots, evidence of compromise).

### Phase 5: Post-Exploitation

After initial access, demonstrating what an attacker could accomplish.

**Activities:**
- Privilege escalation (user to admin)
- Lateral movement (compromised system to others)
- Data access (demonstrating sensitive data exposure)
- Persistence mechanisms (how attacker would maintain access)
- Credential harvesting (passwords, tokens, certificates)
- Network pivoting (using compromised host to reach other networks)

**Goal:** Demonstrate business impact—not just "we got in" but "here's what an attacker could steal/destroy/ransom."

**Output:** Evidence of escalated access, sensitive data accessed, attack path documentation.

### Phase 6: Reporting

Comprehensive documentation of findings and recommendations.

**Report components:**

*Executive summary:*
- Business risk assessment
- Key findings overview
- Prioritized recommendations
- Non-technical language for leadership

*Technical findings:*
- Detailed vulnerability descriptions
- Exploitation steps (reproducible)
- Evidence (screenshots, logs)
- CVSS scores or risk ratings
- Affected systems

*Recommendations:*
- Remediation steps for each finding
- Prioritization guidance
- Quick wins vs. long-term improvements
- Strategic recommendations

*Appendices:*
- Testing methodology
- Tools used
- Raw scan data
- Timeline of activities

**Debriefing:** Present findings to technical team and leadership. Answer questions. Discuss remediation priorities.

💡 **Memory Trick:** Penetration testing phases follow **"RSVER"**: **R**econnaissance, **S**canning, **V**ulnerability assessment, **E**xploitation, **R**eporting. (Post-exploitation is part of exploitation phase.)

---

## Team-Based Security Exercises

Organizations use structured team exercises to test and improve security capabilities.

### Red Team

Offensive security team simulating real attackers.

**Characteristics:**
- Goal-oriented (capture the flag, access specific data)
- Uses any means necessary (within rules of engagement)
- Mimics real threat actor TTPs
- Often longer engagements (weeks to months)
- May include physical and social engineering
- Operates covertly (defenders don't know timing)

**Focus:** Can we achieve objective X despite all defenses?

**Output:** Demonstrated attack paths, gaps in detection capabilities, realistic threat assessment.

### Blue Team

Defensive security team protecting the organization.

**Characteristics:**
- Monitors for and responds to attacks
- Operates security tools (SIEM, EDR, IDS)
- Investigates alerts and incidents
- Improves detection capabilities
- Develops defensive procedures

**Focus:** Can we detect and stop attacks?

**During exercises:** Blue team doesn't know when red team is operating—tests real detection and response capabilities.

### Purple Team

Collaborative approach combining red and blue team activities.

**Characteristics:**
- Red and blue work together, not adversarially
- Real-time knowledge sharing
- Red explains techniques as they execute
- Blue tunes detections immediately
- Iterative improvement cycle

**Focus:** How can we improve detection of specific techniques?

**Process:**
1. Red team executes technique
2. Blue team attempts detection
3. If detected: document and move to next technique
4. If missed: red explains technique, blue improves detection
5. Re-test until detected
6. Repeat with next technique

**Value:** More educational than adversarial exercises. Faster improvement cycle. Better ROI for limited testing budget.

### Comparison

| Aspect | Red Team | Blue Team | Purple Team |
|--------|----------|-----------|-------------|
| Approach | Adversarial | Defensive | Collaborative |
| Knowledge sharing | After engagement | N/A | Real-time |
| Goal | Demonstrate risk | Detect/respond | Improve detection |
| Duration | Weeks-months | Ongoing | Days-weeks |
| Outcome | Attack report | Defense metrics | Tuned detections |

---

## Bug Bounty Programs

Crowdsourced security testing where external researchers report vulnerabilities for rewards.

### How Bug Bounties Work

**Program structure:**
1. Organization defines scope (what can be tested)
2. Rules of engagement published
3. Researchers test within scope
4. Vulnerabilities reported through platform
5. Organization validates and triages
6. Valid findings receive rewards
7. Researcher credited (if desired)

**Platforms:** HackerOne, Bugcrowd, Synack, and others facilitate programs, handling payments, communications, and dispute resolution.

### Reward Structures

**Severity-based payouts:**
- Critical: $10,000 - $100,000+
- High: $2,000 - $20,000
- Medium: $500 - $2,000
- Low: $50 - $500

**Factors affecting rewards:**
- Vulnerability severity
- Exploit complexity
- Business impact
- Quality of report
- First to report (duplicates may receive reduced/no payment)

### Advantages and Challenges

**Advantages:**
- Diverse perspectives (thousands of researchers)
- Continuous testing (always active)
- Pay for results (no payment without valid findings)
- Access to specialized skills
- Scales beyond internal resources

**Challenges:**
- Managing volume of reports
- Handling duplicates and invalid reports
- Researcher coordination
- Scope creep (testing outside boundaries)
- Disclosure timeline negotiations
- Potential for abuse

### Responsible Disclosure

The ethical framework for reporting vulnerabilities.

**Responsible disclosure process:**
1. Researcher discovers vulnerability
2. Reports privately to organization
3. Organization acknowledges receipt
4. Organization investigates and develops fix
5. Fix deployed
6. Researcher may publish details (after agreed timeline)

**Disclosure timelines:**
- Standard: 90 days (Google Project Zero standard)
- Negotiable based on complexity
- Extensions for active exploitation
- Immediate if vendor unresponsive

**Coordinated disclosure:** Multiple parties (vendor, researcher, CERT) coordinate timing of disclosure and patches.

**Full disclosure:** Publishing vulnerability details immediately, without waiting for patch. Controversial—pressures vendors but exposes users to risk.

🎯 **Exam Tip:** Understand the difference between responsible disclosure (coordinated with vendor) and full disclosure (immediate publication). Bug bounty programs incentivize responsible disclosure through rewards.

---

## Key Exam Tips

🎯 **Credentialed vs non-credentialed** - Credentialed scans provide more thorough results (can see inside systems) but require credential management. Non-credentialed shows external attacker perspective.

🎯 **Internal vs external** - External scans test perimeter from internet perspective. Internal scans test from inside network (assume perimeter breached).

🎯 **Black/white/gray box** - Black box = no information (realistic). White box = full information (comprehensive). Gray box = partial information (balanced).

🎯 **Penetration test phases** - Reconnaissance → Scanning → Vulnerability Assessment → Exploitation → Post-exploitation → Reporting.

🎯 **Rules of engagement** - Written authorization is mandatory. Defines scope, boundaries, timing, and communication. Testing without authorization is illegal.

🎯 **Red vs blue vs purple** - Red attacks (offensive), blue defends (defensive), purple collaborates (both working together for improvement).

🎯 **Bug bounty** - Crowdsourced testing with rewards. Responsible disclosure means reporting privately and allowing time to fix before publication.

🎯 **Vulnerability assessment vs penetration test** - Assessment finds vulnerabilities (automated, broad). Penetration test proves exploitation (manual, deep).

💡 **Scenario recognition** - Questions may describe a testing situation and ask which approach is appropriate, or describe findings and ask which phase discovered them.

---

## Key Takeaways

- [ ] Vulnerability scanning uses automated tools to find known weaknesses; penetration testing manually proves exploitability
- [ ] Credentialed scans see inside systems (thorough); non-credentialed scans show external attacker perspective
- [ ] Internal scans test from inside network; external scans test from internet perspective
- [ ] Active scanning sends probes; passive scanning monitors traffic without generating additional traffic
- [ ] Agent-based scanning installs software on targets; agentless connects remotely
- [ ] Scope and rules of engagement must be documented before any penetration test—testing without authorization is illegal
- [ ] Black box testing provides no information (realistic); white box provides full information (comprehensive)
- [ ] Gray box provides partial information—most common approach balancing realism and efficiency
- [ ] Penetration test phases: reconnaissance, scanning, vulnerability assessment, exploitation, post-exploitation, reporting
- [ ] Post-exploitation demonstrates business impact through privilege escalation, lateral movement, and data access
- [ ] Red team simulates attackers; blue team defends; purple team collaborates for rapid improvement
- [ ] Bug bounty programs crowdsource security testing with rewards for valid findings
- [ ] Responsible disclosure reports vulnerabilities privately, allowing time for fixes before publication
- [ ] Vulnerability assessments should run frequently (weekly/monthly); penetration tests periodically (annually)

---

## Check Your Understanding

**1. An organization's vulnerability scanner reports zero critical vulnerabilities, but a penetration tester gains domain admin access in 6 hours. How is this possible?**

<details>
<summary>Show Answer</summary>
<strong>Scanners find individual vulnerabilities; penetration testers chain low-severity issues into attack paths.</strong> The scanner might correctly report no single critical vulnerability. But the tester might chain: 1) Phishing email to get initial access (human factor—not a technical vulnerability), 2) Outdated software allowing code execution (medium severity alone), 3) Cached credentials on compromised workstation (misconfiguration), 4) Overprivileged service account (design flaw), 5) Credential reuse allowing domain admin access. Each individual finding might be rated low or medium—none triggering scanner's "critical" threshold. Together, they create a critical attack path. This is why organizations need both: scanners for breadth (find all known issues), penetration tests for depth (prove real-world risk from combined issues).
</details>

**2. A hospital wants to assess their patient records system security. The system cannot tolerate any downtime and false positives have previously caused nurses to ignore security alerts. Which scanning approach is most appropriate?**

<details>
<summary>Show Answer</summary>
<strong>Credentialed, passive or low-intensity scanning during maintenance windows with careful alert tuning.</strong> Analysis: 1) System criticality demands caution—aggressive active scanning could cause disruption. 2) Credentialed scanning provides accuracy (fewer false positives since scanner can verify actual configuration). 3) Passive scanning or very low-intensity active scanning reduces disruption risk. 4) Schedule during lowest-activity periods if any active scanning required. 5) Pre-scan communication with clinical staff. 6) Agent-based scanning might work if agents can be deployed during maintenance—provides thorough scanning without network-based probe risks. Additional recommendations: Test scanning approach in non-production environment first. Have rollback plan if scanning causes issues. False positive reduction is critical in healthcare—alert fatigue in clinical settings is dangerous. Consider compensating controls (network segmentation, enhanced monitoring) for systems that can't be fully scanned.
</details>

**3. A company hires penetration testers who successfully access the CEO's email using a phishing attack. The CEO is furious that testers "attacked" her. What went wrong?**

<details>
<summary>Show Answer</summary>
<strong>Scope and rules of engagement weren't properly communicated or didn't clearly include social engineering.</strong> Issues: 1) If social engineering was in scope, CEO should have been informed (at least that testing was occurring, if not specific methods). 2) If social engineering wasn't in scope, testers violated rules of engagement. 3) Executive communication gap—leadership should understand and approve testing methods before engagement begins. 4) Written scope document should explicitly state "social engineering including phishing targeting all employees including executives" if permitted. Prevention: Before engagement, review scope with legal and executive leadership. Explicitly discuss whether executives are in scope. Some organizations exclude C-suite from social engineering tests; others specifically include them. Document the decision. Get signature from appropriate authority level. Post-test, findings should be presented constructively—the goal is improvement, not embarrassment.
</details>

**4. A penetration tester discovers an SQL injection vulnerability that provides access to customer credit card numbers. What should they do?**

<details>
<summary>Show Answer</summary>
<strong>Document the vulnerability with proof of concept, stop exploitation, report immediately, avoid accessing actual sensitive data.</strong> Proper handling: 1) Prove the vulnerability exists (show injection works with harmless query like SELECT 1). 2) Document that credit card table is accessible (show table exists, column names). 3) DO NOT extract actual credit card numbers—unnecessary for demonstrating risk. 4) Report immediately to primary contact (may warrant emergency notification depending on rules of engagement). 5) Recommend immediate remediation given severity. 6) Handle any incidentally accessed data according to rules of engagement (typically secure deletion). Why limit access? Ethical testers prove vulnerabilities with minimum necessary access. Extracting actual credit cards provides no additional proof of risk, creates liability concerns, and may violate regulations (PCI DSS) even in testing context. The finding "attacker could access all 500,000 credit cards" is equally impactful whether you accessed 0, 1, or all of them.
</details>

**5. What's the difference between a red team engagement and a standard penetration test?**

<details>
<summary>Show Answer</summary>
<strong>Red team engagements are goal-oriented, covert, and longer-term; penetration tests are comprehensive vulnerability assessments.</strong> Key differences: **Penetration test:** Finds as many vulnerabilities as possible within timeframe. Known testing window. Often announced to blue team. Days to weeks duration. Output: comprehensive vulnerability list with exploitation proof. **Red team:** Achieves specific objective (access CEO email, exfiltrate customer data, deploy ransomware simulation). Operates covertly—defenders don't know timing. Uses any technique necessary (technical, social, physical). Weeks to months duration. May stop after achieving objective. Output: attack narrative demonstrating realistic threat scenario, plus detection gaps. Analogy: Penetration test is like a building inspector checking everything. Red team is like a burglar trying to steal specific valuables—they don't check every window, they find ONE way in and accomplish their mission.
</details>

**6. An organization runs monthly vulnerability scans that consistently show 200+ findings. Leadership complains nothing ever improves. What's likely happening?**

<details>
<summary>Show Answer</summary>
<strong>Scanning without remediation creates a vulnerability report, not a vulnerability management program.</strong> Common causes: 1) Findings not assigned to owners for remediation, 2) No remediation SLAs or accountability, 3) Same systems rescanned without fixes applied, 4) Report goes to security team but not to system owners who can actually fix issues, 5) Findings not prioritized—everything treated equally so nothing fixed, 6) False positives eroding trust in results. Solutions: 1) Assign each finding to a responsible owner with deadline, 2) Track remediation progress in dashboards visible to leadership, 3) Prioritize critical/high findings—don't overwhelm teams with everything, 4) Verify fixes before next scan (rescan specific systems), 5) Remove false positives from counts (tuning), 6) Report trending metrics (vulnerabilities closed vs. opened) not just current count, 7) Tie remediation metrics to performance goals. Vulnerability management is a continuous process, not a monthly report.
</details>

**7. During a purple team exercise, the red team executes a PowerShell-based attack that blue team completely misses. What happens next?**

<details>
<summary>Show Answer</summary>
<strong>Red team explains the technique, blue team develops detection, they re-test until detected.</strong> Purple team process for this scenario: 1) Red team explains exactly what they did (PowerShell commands, delivery method, network traffic generated, artifacts created). 2) Blue team analyzes why they missed it (no PowerShell logging? SIEM rule gap? EDR not deployed?). 3) Blue team implements detection (enable PowerShell script block logging, create SIEM alert for suspicious cmdlets, tune EDR rules). 4) Red team re-executes the same technique. 5) Verify detection works (alert fires, analysts notified). 6) Document the detection rule for future reference. 7) Move to next technique. This is purple team's value—immediate knowledge transfer and detection improvement versus red team waiting weeks to deliver a report. One exercise might cover dozens of techniques with detections validated for each.
</details>

**8. A security researcher discovers a critical vulnerability in a popular web application. The vendor acknowledges the report but hasn't released a patch after 90 days. What are the researcher's options?**

<details>
<summary>Show Answer</summary>
<strong>Options include extending timeline, publishing limited details, full disclosure, or coordinating with CERT.</strong> Standard practice: 90-day disclosure deadline (Google Project Zero standard) provides reasonable time for patches. After 90 days with no patch, options: 1) **Extend timeline:** Grant additional time if vendor is actively working on fix and provides specific date. Appropriate for complex vulnerabilities requiring significant changes. 2) **Publish limited details:** Describe vulnerability class and impact without exploitation details. Pressures vendor while limiting attacker utility. 3) **Full disclosure:** Publish complete details including proof-of-concept. Most pressure on vendor but also enables attackers. Controversial but may be warranted if vendor is unresponsive. 4) **Coordinate with CERT:** Report to CERT/CC who can pressure vendor through official channels and coordinate disclosure across affected parties. 5) **Embargo lift:** If agreed embargo period passed, researcher has ethical right to publish. Considerations: Is vendor acting in good faith? Is vulnerability being actively exploited (accelerates disclosure need)? What's the potential user impact? Responsible disclosure balances vendor time-to-fix against user exposure to risk.
</details>

---

## Next Lesson Preview

**Lesson 24: Security Assessments** explores how organizations evaluate their overall security posture through various assessment types beyond technical testing. You'll learn about security audits (internal and external), compliance assessments, framework-based evaluations (NIST, ISO 27001), attestation processes, and gap analysis—understanding how organizations measure and demonstrate their security program effectiveness.

---

✅ **LESSON 23 COMPLETE!**

You now understand how organizations proactively discover weaknesses through vulnerability scanning and penetration testing. These offensive security capabilities reveal gaps that defensive tools miss—transforming security from "we think we're protected" to "we've proven we can detect and stop attacks."

**Key concepts mastered:**
- Vulnerability scanning types and tradeoffs
- Penetration testing methodology and phases
- Black, white, and gray box testing approaches
- Red, blue, and purple team exercises
- Bug bounty and responsible disclosure

---