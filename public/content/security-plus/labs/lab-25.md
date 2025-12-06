# Lab 25: Incident Response Process

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 4.8 - Explain appropriate incident response activities

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the six phases of incident response in order?**

2. **What is the difference between an event, alert, and incident?**

3. **Why is containment performed before eradication?**

4. **What is the purpose of the "lessons learned" phase?**

5. **What is chain of custody, and why is it important?**

---

## Section 2: Hands-On Activities

### Activity A: Incident Response Phases

**Goal:** Understand the IR lifecycle.

**Six phases of incident response:**

| Phase | Purpose | Key Activities |
|-------|---------|----------------|
| 1. Preparation | | |
| 2. Detection & Analysis | | |
| 3. Containment | | |
| 4. Eradication | | |
| 5. Recovery | | |
| 6. Lessons Learned | | |

**Phase flow diagram:**

```
┌──────────────┐
│  Preparation │ ←───────────────────────────┐
└──────┬───────┘                             │
       ↓                                     │
┌──────────────────────┐                     │
│ Detection & Analysis │                     │
└──────┬───────────────┘                     │
       ↓                                     │
┌──────────────┐                             │
│ Containment  │                             │
└──────┬───────┘                             │
       ↓                                     │
┌──────────────┐                             │
│ Eradication  │                             │
└──────┬───────┘                             │
       ↓                                     │
┌──────────────┐                             │
│   Recovery   │                             │
└──────┬───────┘                             │
       ↓                                     │
┌────────────────┐                           │
│ Lessons Learned│ ──────────────────────────┘
└────────────────┘
```

Why does "Lessons Learned" feed back to "Preparation"?

_________________________________________________________________

---

### Activity B: Preparation Phase

**Goal:** Build IR readiness.

**Preparation checklist:**

| Element | Purpose | Status (Y/N) |
|---------|---------|--------------|
| IR plan documented | | |
| IR team identified | | |
| Contact lists current | | |
| Tools ready | | |
| Training completed | | |
| Communication plan | | |
| Legal/HR contacts | | |
| Forensic capabilities | | |
| Backup verification | | |
| Insurance reviewed | | |

**IR team roles:**

| Role | Responsibilities |
|------|------------------|
| IR Manager | |
| Technical Lead | |
| Communications | |
| Legal Counsel | |
| HR Representative | |
| Executive Sponsor | |

**IR toolkit contents:**

| Category | Tools/Items |
|----------|-------------|
| Documentation | |
| Forensic hardware | |
| Forensic software | |
| Network tools | |
| Communication | |
| Storage | |

**Communication templates to prepare:**

| Template | Audience | When Used |
|----------|----------|-----------|
| | | |
| | | |
| | | |
| | | |

---

### Activity C: Detection and Analysis

**Goal:** Identify and validate incidents.

**Event vs Alert vs Incident:**

| Term | Definition | Example |
|------|------------|---------|
| Event | | |
| Alert | | |
| Incident | | |

**Detection sources:**

| Source | What It Detects | Priority |
|--------|-----------------|----------|
| SIEM | | |
| IDS/IPS | | |
| Antivirus/EDR | | |
| User reports | | |
| Firewall logs | | |
| Threat intelligence | | |
| External notification | | |

**Incident classification:**

| Category | Description | Examples |
|----------|-------------|----------|
| Malware | | |
| Unauthorized access | | |
| Data breach | | |
| DoS/DDoS | | |
| Insider threat | | |
| Phishing | | |
| Web attack | | |

**Severity classification:**

| Severity | Criteria | Response Time |
|----------|----------|---------------|
| Critical | | |
| High | | |
| Medium | | |
| Low | | |

**Initial analysis questions:**

| Question | Purpose |
|----------|---------|
| What happened? | |
| When did it happen? | |
| How was it detected? | |
| What systems are affected? | |
| What data is at risk? | |
| Is the attack ongoing? | |
| Who might be responsible? | |

---

### Activity D: Containment Strategies

**Goal:** Stop the spread and limit damage.

**Containment types:**

| Type | Description | When to Use |
|------|-------------|-------------|
| Short-term | | |
| Long-term | | |

**Containment actions by incident type:**

| Incident Type | Containment Actions |
|---------------|---------------------|
| Malware infection | |
| Compromised account | |
| Data exfiltration | |
| DDoS attack | |
| Ransomware | |
| Insider threat | |

**Containment decision factors:**

| Factor | Consideration |
|--------|---------------|
| Business impact | |
| Evidence preservation | |
| Attack scope | |
| Resource availability | |
| Legal requirements | |

**Isolation methods:**

| Method | Description | Impact |
|--------|-------------|--------|
| Network isolation | | |
| Account disable | | |
| System shutdown | | |
| VLAN quarantine | | |
| Firewall block | | |

**Containment trade-offs:**

| Action | Benefit | Risk |
|--------|---------|------|
| Immediate shutdown | | |
| Monitor silently | | |
| Isolate network segment | | |

---

### Activity E: Eradication and Recovery

**Goal:** Remove threats and restore operations.

**Eradication activities:**

| Activity | Description |
|----------|-------------|
| Malware removal | |
| Patch vulnerabilities | |
| Reset credentials | |
| Remove backdoors | |
| Clean affected systems | |
| Update security controls | |

**Recovery steps:**

| Step | Actions | Verification |
|------|---------|--------------|
| 1. Restore systems | | |
| 2. Validate functionality | | |
| 3. Monitor closely | | |
| 4. Return to production | | |
| 5. Document | | |

**Recovery considerations:**

| Factor | Questions to Ask |
|--------|------------------|
| Backup integrity | |
| System rebuild vs clean | |
| Timing | |
| Testing | |
| Monitoring | |

**Post-recovery monitoring:**

| What to Monitor | Why | Duration |
|-----------------|-----|----------|
| | | |
| | | |
| | | |
| | | |

---

### Activity F: Lessons Learned

**Goal:** Improve future response.

**Lessons learned meeting:**

| Element | Description |
|---------|-------------|
| Timing | |
| Attendees | |
| Facilitator | |
| Documentation | |

**Questions to address:**

| Question | Purpose |
|----------|---------|
| What happened? | |
| What worked well? | |
| What didn't work? | |
| What could be improved? | |
| What training is needed? | |
| What tools are needed? | |
| Were policies followed? | |
| Should policies change? | |

**Lessons learned report sections:**

| Section | Content |
|---------|---------|
| Executive summary | |
| Incident timeline | |
| What worked | |
| What didn't work | |
| Recommendations | |
| Action items | |

**Action item tracking:**

| Action | Owner | Deadline | Status |
|--------|-------|----------|--------|
| | | | |
| | | | |
| | | | |

---

### Activity G: Documentation Requirements

**Goal:** Maintain proper incident records.

**Documentation during incident:**

| Document | Contents | When |
|----------|----------|------|
| Incident ticket | | |
| Timeline | | |
| Evidence log | | |
| Communication log | | |
| Decision log | | |

**Timeline documentation:**

| Time | Event | Source | Action Taken | By Whom |
|------|-------|--------|--------------|---------|
| | | | | |
| | | | | |
| | | | | |

**Evidence documentation:**

| Item | Description | Location | Hash | Collected By |
|------|-------------|----------|------|--------------|
| | | | | |
| | | | | |

**Why documentation matters:**

| Reason | Explanation |
|--------|-------------|
| Legal | |
| Lessons learned | |
| Insurance | |
| Compliance | |
| Prosecution | |

---

### Activity H: Chain of Custody

**Goal:** Maintain evidence integrity.

**Chain of custody definition:**

_________________________________________________________________

**Chain of custody form elements:**

| Field | Purpose |
|-------|---------|
| Evidence description | |
| Date/time collected | |
| Collected by | |
| Location found | |
| Hash value | |
| Transfer log | |
| Storage location | |

**Evidence handling rules:**

| Rule | Why Important |
|------|---------------|
| Document everything | |
| Minimize handling | |
| Use write blockers | |
| Hash before and after | |
| Secure storage | |
| Limit access | |

**Sample chain of custody:**

| Date/Time | Action | From | To | Signature |
|-----------|--------|------|-----|-----------|
| 2024-01-15 10:00 | Collected | Server Room | | |
| 2024-01-15 10:30 | | | | |
| 2024-01-15 14:00 | | | | |

Complete the chain for a seized hard drive.

---

### Activity I: Communication During Incidents

**Goal:** Manage stakeholder communication.

**Communication stakeholders:**

| Stakeholder | What They Need | When |
|-------------|----------------|------|
| Executive management | | |
| IT staff | | |
| Legal | | |
| HR | | |
| Affected users | | |
| Customers | | |
| Regulators | | |
| Media | | |
| Law enforcement | | |

**Communication principles:**

| Principle | Description |
|-----------|-------------|
| Timeliness | |
| Accuracy | |
| Consistency | |
| Appropriate detail | |
| Single source | |

**What NOT to communicate:**

| Don't Share | Why |
|-------------|-----|
| | |
| | |
| | |

**Breach notification requirements:**

| Regulation | Notification Timeline | Who to Notify |
|------------|----------------------|---------------|
| GDPR | | |
| HIPAA | | |
| State laws | | |
| PCI DSS | | |

---

### Activity J: Incident Scenarios

**Goal:** Apply IR process to real situations.

**Scenario 1: Ransomware Attack**

Monday 8:00 AM: Users report they can't access files. IT discovers ransomware encrypted the file server.

| Phase | Actions to Take |
|-------|-----------------|
| Detection/Analysis | |
| Containment | |
| Eradication | |
| Recovery | |
| Lessons Learned | |

Key decisions:
- Pay ransom? _______________
- Notify law enforcement? _______________
- Notify customers? _______________

**Scenario 2: Data Breach**

Security team discovers 10,000 customer records were exfiltrated to an external server over the past month.

| Phase | Actions to Take |
|-------|-----------------|
| Detection/Analysis | |
| Containment | |
| Eradication | |
| Recovery | |
| Lessons Learned | |

Notification timeline:
- When discovered: _______________
- Notify executives: _______________
- Notify legal: _______________
- Notify customers: _______________
- Notify regulators: _______________

**Scenario 3: Insider Threat**

HR notifies security that an employee gave two weeks notice. IT discovers the employee has been copying sensitive files to a USB drive.

| Phase | Actions to Take |
|-------|-----------------|
| Detection/Analysis | |
| Containment | |
| Eradication | |
| Recovery | |
| Lessons Learned | |

Coordination needed with:
- HR: _______________
- Legal: _______________
- Management: _______________

---

### Activity K: Incident Response Plan Components

**Goal:** Understand IR plan structure.

**IR plan sections:**

| Section | Contents |
|---------|----------|
| Purpose and scope | |
| Roles and responsibilities | |
| Incident classification | |
| Detection procedures | |
| Response procedures | |
| Communication plan | |
| Escalation procedures | |
| Evidence handling | |
| Recovery procedures | |
| Plan maintenance | |

**IR plan review cycle:**

| Review Type | Frequency | Activities |
|-------------|-----------|------------|
| Document review | | |
| Tabletop exercise | | |
| Functional test | | |
| Full-scale exercise | | |

**Plan distribution:**

| Who Gets Copy | Format | Updates |
|---------------|--------|---------|
| | | |
| | | |
| | | |

---

### Activity L: Metrics and Reporting

**Goal:** Measure IR effectiveness.

**IR metrics:**

| Metric | What It Measures | Target |
|--------|------------------|--------|
| MTTD (Mean Time to Detect) | | |
| MTTR (Mean Time to Respond) | | |
| MTTC (Mean Time to Contain) | | |
| Incidents per month | | |
| Repeat incidents | | |
| Escalation rate | | |

**Calculate metrics:**

| Scenario | Metric | Value |
|----------|--------|-------|
| Attack started 10:00, detected 14:00 | MTTD | |
| Detected 14:00, contained 15:30 | MTTC | |
| Detected 14:00, resolved 20:00 | MTTR | |

**Incident report to management:**

| Section | Content |
|---------|---------|
| Summary | |
| Impact | |
| Timeline | |
| Root cause | |
| Actions taken | |
| Recommendations | |
| Cost | |

---

### Activity M: Legal and Regulatory Considerations

**Goal:** Understand legal aspects of IR.

**When to involve legal:**

| Situation | Why Legal |
|-----------|-----------|
| | |
| | |
| | |
| | |

**When to involve law enforcement:**

| Situation | Considerations |
|-----------|----------------|
| | |
| | |
| | |

**Evidence preservation for legal:**

| Requirement | Action |
|-------------|--------|
| | |
| | |
| | |

**Regulatory notification triggers:**

| Regulation | Trigger | Timeline |
|------------|---------|----------|
| GDPR | Personal data breach | 72 hours |
| HIPAA | PHI breach | 60 days |
| State breach laws | PII breach | Varies (30-90 days) |
| PCI DSS | Card data breach | Immediately |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** During an incident, a well-meaning administrator reboots an infected server before forensic images are taken. What evidence might be lost, and how do you prevent this in future incidents?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your IR plan says to immediately isolate infected systems, but the infected system is a production database serving customers. How do you balance containment with business continuity?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** After an incident, the lessons learned meeting reveals the same type of attack succeeded 6 months ago. Why might the same attack work twice, and what systemic changes would prevent this?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] List the six IR phases in order
- [ ] Differentiate event, alert, and incident
- [ ] Explain preparation phase components
- [ ] Describe containment strategies
- [ ] Understand eradication vs recovery
- [ ] Explain lessons learned importance
- [ ] Document incidents properly
- [ ] Maintain chain of custody
- [ ] Communicate during incidents
- [ ] Apply IR to different scenarios

---

## What You Learned Today

- ✅ Reviewed IR phases
- ✅ Prepared IR readiness
- ✅ Detected and analyzed incidents
- ✅ Applied containment strategies
- ✅ Performed eradication and recovery
- ✅ Conducted lessons learned
- ✅ Documented incidents properly
- ✅ Maintained chain of custody
- ✅ Managed communications
- ✅ Solved incident scenarios
- ✅ Built IR plan components
- ✅ Measured IR metrics
- ✅ Understood legal considerations

**Next Lab:** Digital Forensics - evidence collection, analysis, and investigation techniques.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 25: Incident Response Process*