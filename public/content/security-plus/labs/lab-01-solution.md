# Lab 1: Security Fundamentals and the CIA Triad - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Learning happens through struggle—check your answers, but understand the reasoning.

---

## Section 1: Concept Check - Answers

**1. Explain the CIA Triad. Give a real-world example of each component being compromised.**

**Answer:**

The **CIA Triad** represents the three core principles of information security:

| Component | Definition | Compromise Example |
|-----------|------------|-------------------|
| **Confidentiality** | Keeping data private; only authorized people can access it | 2017 Equifax breach - 147 million people's SSNs, birth dates, addresses exposed |
| **Integrity** | Ensuring data hasn't been modified without authorization | Attacker changes wire transfer amount from $1,000 to $100,000 before it's processed |
| **Availability** | Systems and data are accessible when needed | 2016 Dyn DDoS attack took down Twitter, Netflix, Reddit for hours |

**Key insight:** Security isn't just about keeping hackers out (confidentiality). A ransomware attack that encrypts all your files violates availability. A hacker changing your grades violates integrity.

---

**2. What is the difference between authentication and authorization? Provide an example that demonstrates both.**

**Answer:**

| Concept | Definition | Question It Answers |
|---------|------------|---------------------|
| **Authentication** | Proving who you are | "Who are you?" |
| **Authorization** | Determining what you can do | "What are you allowed to access?" |

**Example demonstrating both:**

You badge into your office building:
1. **Authentication:** You swipe your badge → system verifies you're John Smith, Employee #12345
2. **Authorization:** System checks John's permissions → he can access floors 1-3, but not the server room on floor 4

Another example (banking app):
1. **Authentication:** Enter password + fingerprint → bank confirms you're the account holder
2. **Authorization:** You can view balances and transfer up to $5,000/day, but can't approve loans or access other accounts

**Exam tip:** Authentication ALWAYS comes before authorization. You must prove who you are before the system decides what you can do.

---

**3. A company installs security cameras at all entrances. What category AND type of control is this?**

**Answer:**

**Category:** Physical (it's a tangible, real-world device)

**Type:** This is where it gets interesting—cameras can be multiple types:
- **Detective** - Primary purpose is to record and detect incidents
- **Deterrent** - Visible cameras discourage bad behavior

**Best answer for exam:** Detective (primary function is recording evidence)

**Why not preventive?** Cameras don't physically stop someone from entering. They record what happens. A lock is preventive; a camera detects/deters.

---

**4. Why is non-repudiation important in security? What technologies help achieve it?**

**Answer:**

**Non-repudiation** ensures that someone cannot deny having performed an action. It provides proof that a specific person did something.

**Why it matters:**
- Legal evidence in disputes
- Audit trails for compliance
- Accountability for actions
- Contract enforcement

**Technologies that provide non-repudiation:**

| Technology | How It Works |
|------------|--------------|
| **Digital signatures** | Mathematically proves document was signed by specific private key holder |
| **PKI/Certificates** | Binds identity to cryptographic keys |
| **Audit logs** | Records who did what and when (with integrity protection) |
| **Biometrics** | Hard to deny it was you if your fingerprint authorized it |
| **Video surveillance** | Visual proof of actions |
| **Email signing (S/MIME)** | Proves email came from specific sender |

**Real example:** You digitally sign a contract. Later, you can't claim you never agreed—your private key (that only you have) created that signature.

---

**5. Explain the difference between a preventive control and a detective control. Why do organizations need both?**

**Answer:**

| Control Type | Purpose | When It Acts | Examples |
|--------------|---------|--------------|----------|
| **Preventive** | Stop incidents before they happen | Before the attack | Firewall, locks, encryption, training |
| **Detective** | Identify incidents during or after | During/after attack | IDS, logs, cameras, audits |

**Why both are needed:**

1. **No preventive control is 100% effective** - Attackers find ways around them
2. **Detection enables response** - You can't fix what you don't know about
3. **Deterrence requires detection** - Threat of being caught only works if you CAN be caught
4. **Compliance requirements** - Regulations require both prevention and monitoring
5. **Different threat types** - Some attacks bypass preventive controls entirely

**Analogy:** Your house has locks (preventive) AND a security camera (detective). If someone picks the lock, the camera catches them. If you only had locks, you'd never know someone got in.

---

## Section 2: Activity Solutions

### Activity A: CIA Triad Analysis - Example Answers

**System: Online Banking**

| CIA Component | What Could Go Wrong | Real-World Impact |
|---------------|--------------------|--------------------|
| Confidentiality breach | Account credentials stolen, transaction history exposed | Identity theft, financial fraud, privacy violation |
| Integrity breach | Attacker modifies account balance or transaction records | Financial loss, incorrect records, legal issues |
| Availability breach | Banking site down during critical payment deadline | Late fees, missed payments, business disruption |

**System: Hospital Electronic Health Records**

| CIA Component | What Could Go Wrong | Real-World Impact |
|---------------|--------------------|--------------------|
| Confidentiality breach | Patient records exposed to unauthorized staff | HIPAA violation, lawsuits, patient trust lost |
| Integrity breach | Medication dosages changed in records | Patient receives wrong dose, potential death |
| Availability breach | System down during emergency surgery | Doctors can't see allergies/history, patient harm |

---

### Activity B: Security Control Classification - Answers

| Security Control | Category | Type |
|------------------|----------|------|
| Firewall blocking unauthorized traffic | Technical | Preventive |
| "Authorized Personnel Only" sign | Physical | Deterrent (also Directive) |
| Security awareness training | Managerial | Preventive (also Directive) |
| Antivirus quarantining malware | Technical | Corrective |
| Security guard at entrance | Physical (Operational) | Preventive/Detective/Deterrent |
| Acceptable Use Policy | Managerial | Directive |
| Motion-sensor lights | Physical | Deterrent/Detective |
| Backup restoration after ransomware | Technical | Corrective |
| Door locks | Physical | Preventive |
| SIEM alerting on suspicious activity | Technical | Detective |
| Requiring manager approval for access | Managerial | Preventive |
| Fence around data center | Physical | Preventive/Deterrent |
| Badge reader logging entry/exit | Physical | Detective (logging) / Preventive (access control) |
| Encryption of sensitive data | Technical | Preventive |
| Background checks for employees | Managerial | Preventive |

**Challenge Explanations:**

**Security cameras:**
- Could be **Detective** because they record incidents for later review
- Could be **Deterrent** because visible cameras discourage bad behavior

**Firewall:**
- Could be **Preventive** because it blocks unauthorized traffic
- Could be **Detective** because it logs blocked attempts for analysis

**Security awareness training:**
- Could be **Preventive** because it stops users from falling for attacks
- Could be **Directive** because it tells users what they should/shouldn't do

---

### Activity C: AAA Framework Analysis - Example

**System: Corporate Microsoft 365**

**Authentication:**
| Question | Answer |
|----------|--------|
| Credentials required | Username (email) + password |
| MFA available? | Yes |
| Factors used | Password + Microsoft Authenticator app (push notification) |
| Failed login response | Account locks after 10 failed attempts for 30 minutes |
| Password policy | 12+ characters, complexity required, expires every 90 days |

**Authorization:**
| Question | Answer |
|----------|--------|
| Resources accessible | Email, SharePoint, Teams, assigned applications |
| Resources NOT accessible | Admin console, other users' mailboxes, HR SharePoint site |
| Permission assignment | Role-based (job title determines access groups) |
| Access to others' data | No, unless explicitly shared or delegated |
| Who changes permissions | IT department via Azure AD |

**Accounting:**
| Question | Answer |
|----------|--------|
| Logins recorded? | Yes |
| Can see login history? | Yes, in account settings |
| Actions logged? | Yes, file access, email sends, downloads |
| Who views logs? | IT Security team, compliance officers |
| Log retention | 90 days standard, 7 years for compliance data |

---

### Activity D: Windows Security Controls - Answers

**Control Classifications:**

| Windows Feature | Control Category | Control Type |
|-----------------|------------------|--------------|
| Windows Defender Antivirus | Technical | Preventive/Detective/Corrective |
| Windows Firewall | Technical | Preventive |
| User Account Control | Technical | Preventive |
| Event Viewer/Security Logs | Technical | Detective |
| BitLocker | Technical | Preventive |

**UAC primarily protects:** Integrity (prevents unauthorized changes to system)

**Key Event IDs to know:**
- 4624 = Successful login
- 4625 = Failed login
- 4634 = Logoff
- 4648 = Explicit credential logon
- 4672 = Admin login (special privileges)

---

### Activity E: Non-Repudiation - Key Points

**Website certificates provide non-repudiation by:**
1. Proving the website is who they claim to be (certificate issued by trusted CA)
2. Creating an encrypted session that can be traced to that certificate
3. Binding the organization's identity to their public key

**Software vendors sign programs to:**
1. Prove the code came from them (not modified)
2. Build user trust
3. Avoid "unknown publisher" warnings
4. Provide legal accountability if code is malicious
5. Enable enterprise software restriction policies

---

### Activity F: Security Control Gap Analysis - Answers

| Problem Identified | CIA Impact | Recommended Control | Control Category | Control Type |
|-------------------|------------|---------------------|------------------|--------------|
| Weak Wi-Fi password "clinic123" | C, I, A | WPA3 with complex passphrase or 802.1X | Technical | Preventive |
| Patient records in shared folder | C | Access controls, folder permissions, encryption | Technical | Preventive |
| Front desk computer facing waiting room | C | Privacy screen, reposition monitor | Physical | Preventive |
| Unlocked filing cabinet | C | Locking cabinet, secure document storage | Physical | Preventive |
| No written security policies | C, I, A | Create security policy, AUP | Managerial | Directive |
| Staff share one account | C, I (no accountability) | Individual accounts, unique credentials | Technical | Preventive |
| No backup system | A | Implement 3-2-1 backup strategy | Technical | Corrective |
| Outdated antivirus | C, I, A | Enable automatic updates, monitor status | Technical | Preventive/Detective |
| No audit logging | C, I (no accountability) | Enable logging on shared folder | Technical | Detective |
| No HIPAA training | C | Security awareness training | Managerial | Preventive |

**Top 3 Priorities (example reasoning):**

1. **Individual user accounts** - Without this, you have no accountability, no audit trail, and a shared password is easily compromised. This is also a HIPAA requirement.

2. **Backup system** - Medical records are critical. Ransomware or hardware failure with no backup = catastrophic business impact and potential patient harm.

3. **Secure Wi-Fi** - "clinic123" could be guessed in seconds. An attacker on the network could access patient records, intercept data, or launch further attacks.

---

### Activity G: Defense in Depth - Answers

**Home/Personal Equivalents:**

| Layer | Personal Equivalent |
|-------|---------------------|
| Perimeter | Router firewall, ISP protections |
| Network | Guest Wi-Fi separate from main network |
| Endpoint | Windows Defender, Malwarebytes, updates |
| Application | Browser security settings, app permissions |
| Data | Encrypted drives, password managers |
| User | Your own awareness, not clicking phishing links |
| Physical | Door locks, not leaving laptop visible in car |

**Why defense in depth matters:**

If you rely on ONE layer, a single failure = complete compromise. Example: If your only protection is a firewall and an attacker finds a way through (phishing email, zero-day exploit), they have full access to everything.

**Phishing attack defense in depth:**

| Layer | How It Helps |
|-------|--------------|
| User | Trained to recognize phishing, reports suspicious email |
| Email/Application | Email filter blocks obvious phishing, warns on external senders |
| Endpoint | Antivirus blocks malicious attachment, EDR detects suspicious behavior |
| Network | Web filter blocks known malicious URLs, DNS filtering |
| Data | Even if credentials stolen, MFA prevents access, DLP prevents data exfiltration |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Hospital EHR offline for 4 hours**

- **CIA affected:** Availability
- **Control that failed:** Redundancy, failover systems, backup servers
- **Future controls:** Redundant servers, clustering, UPS, generator, cloud failover, SLA with vendor for uptime guarantees

**Scenario 2: Modified expense report**

- **CIA affected:** Integrity
- **Detective control:** Audit logs showing who modified the document and when, version history
- **Preventive control:** Digital signatures, approval workflow locks, role-based access (submitter can't edit after submission)

**Scenario 3: Customer database breach**

- **CIA affected:** Confidentiality
- **Three controls from different categories:**
  1. **Technical:** Encryption at rest (even if stolen, data is unreadable)
  2. **Physical:** Locked server room with badge access
  3. **Managerial:** Background checks, security policies, least privilege access

**Scenario 4: Disputed email authorization**

- **Security concept:** Non-repudiation
- **Technologies:** Digital signatures (S/MIME), email gateway logs, PKI certificates tied to user identity, audit logs with timestamps

---

## Key Exam Tips

1. **CIA Triad** - Know examples of each, know that different attacks target different components

2. **Control categories:**
   - Technical = technology/software
   - Managerial = policies/procedures/admin
   - Operational = day-to-day operations/people
   - Physical = tangible/real-world

3. **Control types** - Many controls are multiple types. On the exam, pick the PRIMARY purpose.

4. **Non-repudiation** requires BOTH:
   - Proof of origin (who)
   - Proof of integrity (message wasn't changed)

5. **AAA order:** Authentication → Authorization → Accounting (always this order)

6. **Defense in depth** - No single control is sufficient. Layers compensate for each other's weaknesses.

---

## Common Mistakes to Avoid

❌ Confusing authentication (who you are) with authorization (what you can do)

❌ Calling a deterrent control "preventive" - signs don't physically prevent, they discourage

❌ Forgetting that detective controls don't stop attacks, they identify them

❌ Thinking confidentiality is the only security concern (integrity and availability matter equally)

❌ Assuming one strong control is enough (defense in depth!)

---

**Congratulations on completing Lab 1!**

You've built the foundation for understanding security. Every future topic builds on CIA, control types, and defense in depth.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 1: Security Fundamentals and the CIA Triad - Solution Guide*