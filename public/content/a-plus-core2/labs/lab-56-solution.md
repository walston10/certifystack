# Lab 56: Incident Response and Prohibited Content - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Illegal Content Discovery

**What to do:**
1. **Stop immediately** - Don't view further
2. **Don't touch anything** - No deleting, copying, or moving
3. **Document briefly** - What you saw, when, where
4. **Report immediately** - Supervisor, security, HR
5. **Secure the device** - Don't power off unless instructed
6. **Don't discuss** - Confidentiality is critical
7. **Let authorities handle** - They have proper procedures

---

### Question 2: Chain of Custody

**What it is:** Documentation tracking who had possession of evidence, when, and what was done with it

**Why important:**
- Ensures evidence integrity
- Required for legal proceedings
- Proves evidence wasn't tampered with
- Creates accountability
- May be required by law/regulation

---

### Question 3: PII Examples

**PII (Personally Identifiable Information):** Data that can identify an individual

**Examples:**
- Social Security Number
- Driver's license number
- Date of birth
- Home address
- Financial account numbers
- Medical records
- Biometric data
- Full name + other identifier

---

### Question 4: Law Enforcement Involvement

**Involve law enforcement when:**
- Illegal activity discovered (child exploitation, fraud)
- Threats of violence
- Theft over certain value
- Data breach with legal requirements
- Required by regulation (HIPAA, PCI)
- Company policy mandates it

---

### Question 5: First Step - Security Breach

**First thing:** **Contain the breach** - Prevent further damage/spread

This might mean:
- Disconnect affected system from network
- Disable compromised accounts
- Block malicious IPs
- Isolate affected segments

Then document and report.

---

## Section 2: Activities - Answers

### Activity A: Incident Classification

| Incident | Type | Severity | First Response |
|----------|------|----------|----------------|
| Phishing email reported | Security | Low | Thank user, report to security |
| Ransomware detected | Malware | Critical | Isolate system immediately |
| Inappropriate websites | Policy Violation | Medium | Document, report to HR |
| Lost laptop | Data Loss/Security | High | Report, remote wipe if possible |
| Child exploitation material | Legal/Criminal | Critical | Stop, don't touch, report immediately |
| Password sharing | Policy Violation | Medium | Document, report to supervisor |
| Malware spreading | Malware | Critical | Isolate network segment |
| Data theft | Legal/Criminal | Critical | Preserve evidence, report |
| Accidental deletion | Data Loss | Medium | Attempt recovery, document |
| Unauthorized software | Policy Violation | Low-Medium | Document, report, may remove |

---

### Activity B: First Response Procedures

**General incident response:**

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Identify | Recognize something is wrong |
| 2 | Contain | Stop spread/further damage |
| 3 | Document | Record everything observed |
| 4 | Report | Notify appropriate parties |
| 5 | Preserve | Protect evidence |
| 6 | Remediate | Fix the problem |
| 7 | Review | Post-incident analysis |

**First actions:**

| Scenario | First Action | Why |
|----------|--------------|-----|
| Malware spreading | Disconnect from network | Stop spread to other systems |
| Illegal content | Stop, don't touch, report | Preserve evidence, legal requirement |
| Data breach suspected | Contain (disable access) | Prevent further data loss |
| Policy violation | Document what you observed | Create record before confrontation |
| Physical theft | Report to security/police | Time-sensitive, may recover |

---

### Activity C: Chain of Custody

**Elements:**

| Element | Purpose |
|---------|---------|
| Date/time collected | Establishes timeline |
| Who collected | Accountability |
| Description | Identifies exactly what |
| Storage location | Proves secure handling |
| Access log | Shows who touched it |
| Transfer records | Documents every handoff |

**Rules:**

| Do | Don't |
|----|-------|
| Document every transfer | Handle more than necessary |
| Use tamper-evident bags | Leave evidence unattended |
| Store in secure location | Let unauthorized people access |
| Photograph evidence | Alter or modify evidence |
| Get signatures for transfers | Make copies without authorization |

**USB drive entry:**

| Field | Entry |
|-------|-------|
| Date/Time | [Current date/time] |
| Location | Break room, on counter near microwave |
| Description | Black USB drive, 32GB Kingston, label "Backup" |
| Condition | Good, no visible damage |
| Collected by | [Your name], IT Support |
| Stored at | IT secure evidence locker, drawer 3 |
| Witnesses | [Coworker name] present during collection |

---

### Activity D: PII Identification

| Data Item | PII? | Why |
|-----------|------|-----|
| Full name | Yes* | Can identify (*alone may not, with other data yes) |
| Email address | Yes | Often unique identifier |
| SSN | Yes | Directly identifies individual |
| IP address | Yes* | Can be traced to individual |
| Job title | No | Not unique identifier |
| Date of birth | Yes | Combined with name = identification |
| Medical records | Yes | HIPAA protected |
| Employee ID | Yes* | Internal identifier |
| Home address | Yes | Identifies location |
| Work phone | No | Generally public/organizational |

**Protection requirements:**

| Requirement | Implementation |
|-------------|----------------|
| Encryption | Encrypt at rest and in transit |
| Access control | Role-based, need-to-know |
| Data minimization | Collect only what's needed |
| Secure disposal | Shred, wipe, destroy properly |
| Breach notification | Notify affected within required time |

---

### Activity E: Prohibited Content

**Categories:**

| Category | Examples | Response |
|----------|----------|----------|
| Illegal material | Child exploitation, illegal drugs | Stop, report, preserve, law enforcement |
| Policy violations | Pirated software, inappropriate sites | Document, report to HR/management |
| Copyright infringement | Pirated media, unlicensed software | Document, report, may require removal |
| Harassment/threats | Threatening emails, hostile content | Document, report to HR, possibly legal |

**If you discover illegal content:**

| Step | Action | Notes |
|------|--------|-------|
| 1 | Stop viewing immediately | Don't investigate further |
| 2 | Don't touch device | No power off, no clicking |
| 3 | Document briefly | What, when, where (not details) |
| 4 | Report to supervisor/security | Immediately, in person |
| 5 | Secure the area | Prevent others from accessing |

**What NOT to do:**
1. Don't view more content
2. Don't delete or modify anything
3. Don't tell coworkers/gossip
4. Don't confront the user yourself

---

### Activity F: Incident Documentation

| Field | Entry |
|-------|-------|
| Date/Time | [Current date] 2:30 PM |
| Location | Building A, Room 205 |
| Device/Asset ID | PC-2024-0847 |
| User assigned | John Smith, Accounting |
| Observed | Multiple pirated software: Adobe CS6 (cracked), Microsoft Office (unlicensed key), WinRAR (keygen) |
| Actions taken | Stopped work, documented findings, did not modify device |
| Notified | Supervisor (Jane Doe), IT Security (Bob Wilson) |
| Evidence preserved | Screenshots taken, device left powered on, placed out of service |
| Follow-up | Security to handle, HR notified, await further instructions |
| Signature | [Your name], IT Support Technician |

---

### Activity G: Escalation Procedures

**Escalation matrix:**

| Incident | Escalate To | Timeframe |
|----------|-------------|-----------|
| Malware | IT Security | Immediate |
| Policy violation | Supervisor → HR | Same day |
| Data breach | Security → Legal → Management | Immediate |
| Illegal content | Supervisor → Security → Legal | Immediate |
| Physical security | Security → Facilities | Immediate |
| Legal threat | Legal department | Immediate |

**Law enforcement involvement:**

| Always | Sometimes | Never |
|--------|-----------|-------|
| Child exploitation | Large theft | Minor policy violations |
| Threats of violence | Fraud | Internal HR matters |
| Terrorism indicators | Repeated harassment | First-time software piracy |
| Required by regulation | Significant data breach | Accidental damage |

---

## Section 3: Reflection - Answers

### Scenario 1: Confidential HR Documents

1. **Stop** - Don't read further
2. **Don't delete** - May be needed for audit
3. **Report to HR** - They own this data
4. **Document** - That you found them, not contents
5. **Secure the drive** - Until HR decides disposal
6. **Maintain confidentiality** - Don't tell others

**Not illegal, but sensitive** - HR handles disposition.

---

### Scenario 2: Ransomware

**Immediate steps:**
1. **Disconnect from network** - Unplug cable, disable WiFi (prevents spread)
2. **Don't pay** - Tell user not to interact
3. **Don't turn off** - May lose decryption possibility
4. **Report to security** - Immediate escalation
5. **Document** - Ransomware name, message, time noticed
6. **Identify scope** - Any mapped drives? Other systems affected?
7. **Begin recovery** - From backups (security leads this)

---

### Scenario 3: Side Business on Company Resources

**How to handle:**
1. **Document** - What you observed (objectively)
2. **Report to supervisor** - Not your call to confront
3. **Don't tell the user** - Management handles it
4. **Maintain confidentiality** - Don't gossip
5. **Continue your work** - Unless told otherwise

**This is HR/management issue** - Your job is to report, not enforce.

---

### Scenario 4: Forensic Image for Legal

**Precautions:**
1. **Verify authorization** - Written request from legal/HR
2. **Use write-blocker** - Prevents any changes to original
3. **Document chain of custody** - Every step
4. **Create verified copy** - Hash values to prove integrity
5. **Secure original** - Store properly
6. **Work from copy** - Never original
7. **Maintain confidentiality** - Need-to-know only
8. **Get signature** - When transferring to legal

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                INCIDENT RESPONSE QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  RESPONSE ORDER: Identify → Contain → Document → Report → Preserve        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ILLEGAL CONTENT: Stop → Don't touch → Document → Report → Secure         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  CHAIN OF CUSTODY: Who, What, When, Where for every transfer              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PII: SSN, DOB, Address, Medical, Financial, Biometrics                   ║
╚═══════════════════════════════════════════════════════════════════════════╝
```