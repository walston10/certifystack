# Lab 1: Security Fundamentals and the CIA Triad

**Tier:** 1 (Universal)
**Time:** 25-30 minutes
**Exam Objectives:** 1.1 - Compare and contrast various types of security controls

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **Explain the CIA Triad. Give a real-world example of each component being compromised.**

2. **What is the difference between authentication and authorization? Provide an example that demonstrates both.**

3. **A company installs security cameras at all entrances. What category AND type of control is this? (Category: Technical/Managerial/Operational/Physical | Type: Preventive/Detective/Corrective/Deterrent/Compensating/Directive)**

4. **Why is non-repudiation important in security? What technologies help achieve it?**

5. **Explain the difference between a preventive control and a detective control. Why do organizations need both?**

---

## Section 2: Hands-On Activities

### Activity A: CIA Triad Analysis in Your Environment

**Goal:** Identify how the CIA Triad applies to systems you use daily.

**Analyze three systems/services you use:**

| System/Service | Confidentiality Measure | Integrity Measure | Availability Measure |
|----------------|------------------------|-------------------|---------------------|
| Example: Gmail | Password + 2FA, encryption in transit | Digital signatures on emails, checksums | Google's redundant data centers, 99.9% uptime SLA |
| 1. | | | |
| 2. | | | |
| 3. | | | |

**For each system, identify what would happen if each CIA component failed:**

**System 1: _______________________**

| CIA Component | What Could Go Wrong | Real-World Impact |
|---------------|--------------------|--------------------|
| Confidentiality breach | | |
| Integrity breach | | |
| Availability breach | | |

**System 2: _______________________**

| CIA Component | What Could Go Wrong | Real-World Impact |
|---------------|--------------------|--------------------|
| Confidentiality breach | | |
| Integrity breach | | |
| Availability breach | | |

---

### Activity B: Security Control Classification Exercise

**Goal:** Practice categorizing security controls by category and type.

**Classify each control below:**

| Security Control | Category (Technical/Managerial/Operational/Physical) | Type (Preventive/Detective/Corrective/Deterrent/Compensating/Directive) |
|------------------|------------------------------------------------------|-------------------------------------------------------------------------|
| Firewall blocking unauthorized traffic | | |
| "Authorized Personnel Only" sign | | |
| Security awareness training | | |
| Antivirus quarantining malware | | |
| Security guard at entrance | | |
| Acceptable Use Policy | | |
| Motion-sensor lights | | |
| Backup restoration after ransomware | | |
| Door locks | | |
| SIEM alerting on suspicious activity | | |
| Requiring manager approval for access | | |
| Fence around data center | | |
| Badge reader logging entry/exit | | |
| Encryption of sensitive data | | |
| Background checks for employees | | |

**Challenge:** Some controls fit multiple types. For these three, explain why they could be classified differently:

1. **Security cameras:**
   - Could be _____________ because _______________________
   - Could be _____________ because _______________________

2. **Firewall:**
   - Could be _____________ because _______________________
   - Could be _____________ because _______________________

3. **Security awareness training:**
   - Could be _____________ because _______________________
   - Could be _____________ because _______________________

---

### Activity C: AAA Framework Analysis

**Goal:** Understand Authentication, Authorization, and Accounting in practice.

**Examine a system you have access to (work, school, personal):**

**System chosen:** _______________________

**Authentication (Who are you?):**

| Question | Your Answer |
|----------|-------------|
| What credentials are required to log in? | |
| Is multi-factor authentication available? | [ ] Yes [ ] No |
| If yes, what factors are used? | |
| What happens after failed login attempts? | |
| Is there a password policy? What are the requirements? | |

**Authorization (What can you do?):**

| Question | Your Answer |
|----------|-------------|
| What resources can you access after login? | |
| Are there resources you CANNOT access? | |
| How are permissions assigned? (roles, groups, individual) | |
| Can you access other users' data? | |
| Who can change your permissions? | |

**Accounting (What did you do?):**

| Question | Your Answer |
|----------|-------------|
| Are your logins recorded? | [ ] Yes [ ] No [ ] Unknown |
| Can you see your login history? | [ ] Yes [ ] No |
| Are your actions/changes logged? | [ ] Yes [ ] No [ ] Unknown |
| Who can view these logs? | |
| How long are logs retained? | |

---

### Activity D: Windows Security Controls Exploration

**Goal:** Identify security controls on your Windows system.

**Open these Windows features and document what you find:**

**1. Windows Security (search "Windows Security"):**

| Protection Area | Status | What It Does |
|-----------------|--------|--------------|
| Virus & threat protection | [ ] On [ ] Off | |
| Account protection | [ ] On [ ] Off | |
| Firewall & network protection | [ ] On [ ] Off | |
| App & browser control | [ ] On [ ] Off | |
| Device security | [ ] On [ ] Off | |

**2. User Account Control (UAC):**

Search "UAC" or "Change User Account Control settings"

| Setting | Your Current Level |
|---------|-------------------|
| UAC Level (1-4 or description) | |
| What triggers a UAC prompt? | |

**What CIA component does UAC primarily protect?** _______________________

**3. Local Security Policy (if available - run `secpol.msc`):**

*Note: Not available on Windows Home editions*

| Policy Area | Example Setting You Found |
|-------------|--------------------------|
| Account Policies | |
| Local Policies | |
| Windows Firewall | |

**4. Event Viewer (run `eventvwr.msc`):**

Navigate to Windows Logs > Security

| Question | Your Finding |
|----------|--------------|
| Are security events being logged? | [ ] Yes [ ] No |
| Find a recent login event (Event ID 4624). When was it? | |
| Find a failed login event (Event ID 4625) if any. | |
| What other security events do you see? | |

**Classify each Windows feature by control type:**

| Windows Feature | Control Category | Control Type |
|-----------------|------------------|--------------|
| Windows Defender Antivirus | | |
| Windows Firewall | | |
| User Account Control | | |
| Event Viewer/Security Logs | | |
| BitLocker (if enabled) | | |

---

### Activity E: Non-Repudiation in Action

**Goal:** Understand how non-repudiation works in real systems.

**Email digital signatures (if you use Outlook or have access):**

| Question | Your Finding |
|----------|--------------|
| Can you digitally sign emails in your email client? | [ ] Yes [ ] No [ ] Unknown |
| Have you received a digitally signed email? | [ ] Yes [ ] No |
| What does the signature indicator look like? | |

**Website certificates (HTTPS):**

Visit a banking or financial website and click the padlock icon:

| Certificate Detail | Value |
|-------------------|-------|
| Website visited | |
| Certificate issued to | |
| Certificate issued by | |
| Valid from / to | |
| Encryption type | |

**How does this certificate provide non-repudiation?**

_________________________________________________________________

**Code signing example:**

Right-click any .exe file on your system > Properties > Digital Signatures tab (if present)

| Detail | Value |
|--------|-------|
| File examined | |
| Signer name | |
| Timestamp | |
| Is signature valid? | |

**Why do software vendors digitally sign their programs?**

_________________________________________________________________

---

### Activity F: Security Control Gap Analysis

**Goal:** Identify missing or weak security controls in a scenario.

**Scenario:** A small medical clinic has the following setup:
- 10 computers running Windows 10
- Patient records stored in a shared folder on one computer
- Wi-Fi network with password "clinic123"
- Front desk computer faces the waiting room
- Paper patient files in unlocked filing cabinet
- No written security policies
- Staff share one login account
- No backup system
- Antivirus installed but not updated in 6 months

**Identify the problems and recommend controls:**

| Problem Identified | CIA Impact | Recommended Control | Control Category | Control Type |
|-------------------|------------|---------------------|------------------|--------------|
| Weak Wi-Fi password | C, I, A | Strong WPA3 password or 802.1X | Technical | Preventive |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

**Prioritize your top 3 recommendations and explain why:**

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

---

### Activity G: Defense in Depth Mapping

**Goal:** Understand layered security through defense in depth.

**Map security controls at each layer for a typical organization:**

| Layer | Example Controls | Your Home/Personal Equivalent |
|-------|------------------|------------------------------|
| **Perimeter** (network edge) | Firewall, IDS/IPS, DMZ | |
| **Network** (internal) | Segmentation, VLANs, NAC | |
| **Endpoint** (devices) | Antivirus, EDR, encryption | |
| **Application** | Input validation, WAF | |
| **Data** | Encryption, DLP, access controls | |
| **User** (human layer) | Training, policies, MFA | |
| **Physical** | Locks, cameras, guards | |

**Why is defense in depth important?**

What happens if you rely on only ONE layer of security?

_________________________________________________________________

**Real-world example:**

Describe how defense in depth would protect against a phishing attack:

| Layer | How It Helps Stop the Attack |
|-------|------------------------------|
| User | |
| Email/Application | |
| Endpoint | |
| Network | |
| Data | |

---

## Section 3: Reflection Scenarios (5 min)

**Think through these real-world situations:**

**Scenario 1:** A hospital's electronic health records system goes offline for 4 hours due to a server crash. Doctors cannot access patient histories or medication lists.

- Which CIA component was primarily affected? _______________________
- What type of control failed or was missing? _______________________
- What controls could prevent this in the future? _______________________

**Scenario 2:** An employee discovers that someone modified their expense report after they submitted it, increasing the reimbursement amount.

- Which CIA component was primarily affected? _______________________
- What control would detect this? _______________________
- What control would prevent this? _______________________

**Scenario 3:** A company's customer database is stolen and posted online by hackers.

- Which CIA component was primarily affected? _______________________
- List three controls (different categories) that might have prevented this:
  1. _______________________
  2. _______________________
  3. _______________________

**Scenario 4:** Your organization needs to prove that a specific employee sent an email authorizing a $50,000 wire transfer, but the employee denies sending it.

- What security concept addresses this? _______________________
- What technologies would provide proof? _______________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Define and give examples of Confidentiality, Integrity, and Availability
- [ ] Explain non-repudiation and how it's achieved
- [ ] Differentiate between Authentication, Authorization, and Accounting
- [ ] Categorize controls as Technical, Managerial, Operational, or Physical
- [ ] Classify controls as Preventive, Detective, Corrective, Deterrent, Compensating, or Directive
- [ ] Identify security controls on a Windows system
- [ ] Explain defense in depth and why it matters
- [ ] Analyze a scenario and recommend appropriate controls

---

## What You Learned Today

- ✅ Applied the CIA Triad to real systems
- ✅ Classified security controls by category and type
- ✅ Explored the AAA framework in practice
- ✅ Identified security controls in Windows
- ✅ Examined non-repudiation mechanisms
- ✅ Performed a basic security gap analysis
- ✅ Mapped defense in depth layers

**Next Lab:** Threat Actors and Motivations - profiling attackers and understanding their methods.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 1: Security Fundamentals and the CIA Triad*