# Lab 25: Incident Response Process - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Incident response is critical for minimizing damage from security events.

---

## Section 1: Concept Check - Answers

**1. Six phases of incident response:**

**Answer:**
1. **Preparation** - Get ready before incidents occur
2. **Detection & Analysis** - Identify and validate incidents
3. **Containment** - Stop the spread, limit damage
4. **Eradication** - Remove the threat completely
5. **Recovery** - Restore normal operations
6. **Lessons Learned** - Improve for next time

---

**2. Event vs Alert vs Incident:**

**Answer:**

| Term | Definition |
|------|------------|
| **Event** | Any observable occurrence (login, file access) |
| **Alert** | Event flagged as potentially significant |
| **Incident** | Confirmed security violation requiring response |

Not all events become alerts; not all alerts become incidents.

---

**3. Why containment before eradication:**

**Answer:**

Containment first because:
- Stop ongoing damage immediately
- Prevent lateral movement
- Preserve evidence for analysis
- Allow time for proper eradication planning
- Eradication without containment = threat spreads during cleanup

---

**4. Lessons learned purpose:**

**Answer:**

- Identify what worked and what didn't
- Improve IR processes and plans
- Update tools and training
- Prevent similar incidents
- Document for compliance
- Feed improvements back to preparation phase

---

**5. Chain of custody:**

**Answer:**

**Chain of custody** documents who handled evidence, when, and what was done with it.

**Important because:**
- Proves evidence integrity
- Required for legal proceedings
- Ensures evidence admissibility
- Demonstrates proper handling
- Protects against tampering claims

---

## Section 2: Activity Solutions

### Activity A: IR Phases - Answers

| Phase | Purpose | Key Activities |
|-------|---------|----------------|
| Preparation | Get ready | Plans, tools, training, team |
| Detection & Analysis | Find incidents | Monitor, triage, classify |
| Containment | Stop spread | Isolate, limit damage |
| Eradication | Remove threat | Clean systems, patch, remove malware |
| Recovery | Restore ops | Rebuild, restore, validate |
| Lessons Learned | Improve | Review, document, update |

**Why lessons learned feeds preparation:** Improvements discovered during incidents should be implemented before the next incident—better tools, updated plans, additional training.

---

### Activity B: Preparation - Answers

**IR team roles:**

| Role | Responsibilities |
|------|------------------|
| IR Manager | Overall coordination, decisions |
| Technical Lead | Technical analysis, containment |
| Communications | Internal/external messaging |
| Legal Counsel | Legal advice, notifications |
| HR Representative | Employee-related issues |
| Executive Sponsor | Authority, resources, escalation |

**IR toolkit:**

| Category | Items |
|----------|-------|
| Documentation | Forms, checklists, contact lists |
| Forensic hardware | Write blockers, cables, drives |
| Forensic software | Imaging tools, analysis tools |
| Network tools | Packet capture, scanners |
| Communication | Secure phones, out-of-band comm |
| Storage | Encrypted drives, evidence bags |

---

### Activity C: Detection and Analysis - Answers

| Term | Definition | Example |
|------|------------|---------|
| Event | Observable occurrence | User login |
| Alert | Flagged event | Multiple failed logins |
| Incident | Confirmed violation | Successful brute force attack |

**Severity classification:**

| Severity | Criteria | Response |
|----------|----------|----------|
| Critical | Business-critical systems, active breach | Immediate |
| High | Significant systems, data at risk | 1 hour |
| Medium | Limited impact, contained | 4 hours |
| Low | Minor issue, no data at risk | 24 hours |

---

### Activity D: Containment - Answers

| Type | Description | When |
|------|-------------|------|
| Short-term | Quick action to stop spread | Immediately |
| Long-term | Sustainable while investigating | After short-term |

**Containment by incident:**

| Type | Actions |
|------|---------|
| Malware | Isolate system, block C2, disable accounts |
| Compromised account | Disable account, reset password, revoke tokens |
| Data exfiltration | Block destination, isolate source, preserve logs |
| DDoS | Rate limit, null route, engage ISP/CDN |
| Ransomware | Isolate network segment, preserve evidence |
| Insider threat | Disable access, preserve evidence, involve HR |

**Containment trade-offs:**

| Action | Benefit | Risk |
|--------|---------|------|
| Immediate shutdown | Stops attack | Loses volatile evidence |
| Monitor silently | Gather intelligence | Attack continues |
| Isolate segment | Limits spread | Business disruption |

---

### Activity E: Eradication and Recovery - Answers

**Eradication activities:**

| Activity | Description |
|----------|-------------|
| Malware removal | Delete malicious files, clean registry |
| Patch vulnerabilities | Fix exploited weakness |
| Reset credentials | Change compromised passwords |
| Remove backdoors | Find and eliminate persistence |
| Clean systems | Remove artifacts, verify clean |
| Update controls | Improve defenses |

**Recovery steps:**

| Step | Actions | Verification |
|------|---------|--------------|
| Restore | From clean backup | Hash verification |
| Validate | Test functionality | User acceptance |
| Monitor | Watch for recurrence | Enhanced logging |
| Production | Return to service | Gradual rollout |
| Document | Record actions | Lessons learned |

---

### Activity F: Lessons Learned - Answers

**Meeting elements:**

| Element | Description |
|---------|-------------|
| Timing | Within 2 weeks of incident |
| Attendees | All involved parties |
| Facilitator | Neutral party |
| Documentation | Formal report |

**Key questions:**

| Question | Purpose |
|----------|---------|
| What happened? | Establish facts |
| What worked? | Identify successes |
| What didn't work? | Identify failures |
| What to improve? | Define changes |
| Training needed? | Skill gaps |
| Tools needed? | Capability gaps |
| Policies followed? | Compliance check |
| Policy changes? | Process improvement |

---

### Activity G: Documentation - Answers

**Why documentation matters:**

| Reason | Explanation |
|--------|-------------|
| Legal | Evidence for prosecution |
| Lessons learned | Improve future response |
| Insurance | Support claims |
| Compliance | Demonstrate due diligence |
| Prosecution | Criminal proceedings |

---

### Activity H: Chain of Custody - Answers

**Definition:** Documented record of evidence handling from collection through analysis and storage, proving integrity was maintained.

**Evidence handling rules:**

| Rule | Why Important |
|------|---------------|
| Document everything | Creates audit trail |
| Minimize handling | Reduces contamination risk |
| Use write blockers | Prevents modification |
| Hash before/after | Proves integrity |
| Secure storage | Prevents tampering |
| Limit access | Controls exposure |

---

### Activity I: Communication - Answers

**Stakeholders:**

| Stakeholder | Needs | When |
|-------------|-------|------|
| Executives | Impact, status, decisions | Immediately, updates |
| IT staff | Technical details, tasks | Throughout |
| Legal | Risk, liability, notification | Early |
| HR | Employee involvement | If insider |
| Users | What to do, status | When safe |
| Customers | Impact, protection | Per requirements |
| Regulators | Breach details | Per law |
| Media | Official statement | If public |
| Law enforcement | Evidence, details | If criminal |

**What NOT to share:**

| Don't Share | Why |
|-------------|-----|
| Attack details publicly | Helps attackers |
| Speculation | Creates liability |
| Victim blaming | Damages relationships |
| Unverified info | May be wrong |

**Breach notification:**

| Regulation | Timeline | Who |
|------------|----------|-----|
| GDPR | 72 hours | DPA, affected individuals |
| HIPAA | 60 days | HHS, affected individuals |
| State laws | 30-90 days | Affected individuals, AG |
| PCI DSS | Immediately | Card brands, acquirer |

---

### Activity J: Scenarios - Answers

**Scenario 1: Ransomware**

| Phase | Actions |
|-------|---------|
| Detection | Identify scope, affected systems, ransomware variant |
| Containment | Isolate network, disable shares, block C2 |
| Eradication | Remove malware, patch entry point, scan all systems |
| Recovery | Restore from backup, validate, monitor |
| Lessons Learned | How it got in, what to prevent |

- Pay ransom? Generally no—no guarantee, funds criminals
- Law enforcement? Yes—report to FBI/CISA
- Notify customers? If data affected

**Scenario 2: Data Breach**

| Phase | Actions |
|-------|---------|
| Detection | Determine what data, how much, how long |
| Containment | Block exfil destination, isolate source |
| Eradication | Close access method, patch vulnerability |
| Recovery | Verify no ongoing exfil, restore controls |
| Lessons Learned | Detection gap, prevention |

Notification timeline:
- Discovered: Day 0
- Executives: Within hours
- Legal: Same day
- Customers: Per regulation (typically 30-72 hours)
- Regulators: Per law (72 hours GDPR)

**Scenario 3: Insider**

| Phase | Actions |
|-------|---------|
| Detection | Verify scope, what was taken |
| Containment | Disable access immediately |
| Eradication | Revoke all credentials, recover data if possible |
| Recovery | Review access controls |
| Lessons Learned | DLP controls, monitoring |

Coordination:
- HR: Employment action, investigation
- Legal: Civil/criminal options
- Management: Business impact, communication

---

### Activity K: IR Plan - Answers

**Review cycle:**

| Type | Frequency | Activities |
|------|-----------|------------|
| Document review | Annually | Update contacts, procedures |
| Tabletop | Semi-annually | Walk through scenarios |
| Functional test | Annually | Test specific capabilities |
| Full-scale | Every 2 years | Complete simulation |

---

### Activity L: Metrics - Answers

| Metric | Measures | Target |
|--------|----------|--------|
| MTTD | Time to find incident | Lower = better |
| MTTR | Time to resolve | Lower = better |
| MTTC | Time to contain | Lower = better |
| Incidents/month | Volume | Trend down |
| Repeat incidents | Same attack twice | Zero |
| Escalation rate | Need for help | Appropriate level |

**Calculations:**

| Scenario | Metric | Value |
|----------|--------|-------|
| Started 10:00, detected 14:00 | MTTD | 4 hours |
| Detected 14:00, contained 15:30 | MTTC | 1.5 hours |
| Detected 14:00, resolved 20:00 | MTTR | 6 hours |

---

### Activity M: Legal - Answers

**When to involve legal:**

| Situation | Why Legal |
|-----------|-----------|
| Data breach | Notification requirements |
| Employee involved | Employment law |
| Criminal activity | Prosecution decisions |
| Third-party impact | Liability |

**When to involve law enforcement:**

| Situation | Considerations |
|-----------|----------------|
| Criminal activity | May help investigation |
| Nation-state | FBI coordination |
| Significant loss | Insurance/prosecution |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Server rebooted before imaging**

**Evidence lost:**
- RAM contents (malware in memory)
- Running processes
- Network connections
- Cached credentials
- Volatile data

**Prevention:**
- Train staff on evidence preservation
- Clear procedures: "Don't reboot"
- Forensic team on-call
- Add to IR plan explicitly
- Tabletop exercises with this scenario

---

**Scenario 2: Production database infected**

**Balance approach:**
1. Assess actual risk of continued operation
2. Implement monitoring to detect spread
3. Prepare backup database for failover
4. Schedule maintenance window if possible
5. Consider read-only mode
6. Document business decision and risk acceptance
7. Prioritize containment that doesn't break business

Key: Business continuity decisions should involve management, not just security.

---

**Scenario 3: Same attack twice**

**Why it might happen:**
- Lessons learned not implemented
- No action items from first incident
- Different team handled second
- No institutional memory
- Recommendations ignored due to cost

**Systemic changes:**
- Track action items to completion
- Require management sign-off on lessons learned
- Regular IR plan reviews
- Metrics tracking repeat incidents
- Accountability for implementing fixes
- Knowledge base of past incidents

---

## Key Exam Tips

1. **IR phases in order:** Preparation → Detection/Analysis → Containment → Eradication → Recovery → Lessons Learned

2. **Event:** Any occurrence
   **Alert:** Flagged event
   **Incident:** Confirmed violation

3. **Containment BEFORE eradication** - Stop spread first

4. **Chain of custody:** Who, what, when, where for evidence

5. **Lessons learned:** Feeds back to preparation

6. **MTTD:** Mean Time to Detect
   **MTTR:** Mean Time to Respond/Recover
   **MTTC:** Mean Time to Contain

7. **GDPR breach notification:** 72 hours

8. **Evidence volatility:** RAM most volatile, collect first

9. **Short-term containment:** Quick, temporary
   **Long-term containment:** Sustainable during investigation

10. **Don't reboot** before forensic imaging

---

## Common Mistakes to Avoid

❌ Eradicating before containing

❌ Skipping lessons learned

❌ Rebooting systems before imaging

❌ Not documenting during incident

❌ Breaking chain of custody

❌ Communicating too early with unverified info

❌ Ignoring legal/HR involvement when needed

---

**Congratulations on completing Lab 25!**

Incident response skills are essential—every security professional needs to know how to handle incidents effectively.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 25: Incident Response Process - Solution Guide*