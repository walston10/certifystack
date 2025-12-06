# Lab 3: Security Concepts and Frameworks - Solution Guide

**Note to Students:** Review this AFTER completing your own work. These concepts form the foundation of enterprise security architecture.

---

## Section 1: Concept Check - Answers

**1. Explain Zero Trust in one sentence. What is its core principle?**

**Answer:**

**Zero Trust:** "Never trust, always verify" - every access request must be authenticated and authorized regardless of where it originates.

**Core principle:** No user, device, or system is inherently trusted, even if they're inside the network perimeter. Every request is verified as if it came from an untrusted network.

---

**2. What is the difference between the control plane and data plane in Zero Trust?**

**Answer:**

| Plane | Purpose | Components |
|-------|---------|------------|
| **Control Plane** | Makes access decisions | Policy Engine, Policy Administrator, Policy Decision Point (PDP) |
| **Data Plane** | Enforces access decisions | Policy Enforcement Point (PEP), the actual connection/session |

**Analogy:** 
- Control plane = Air traffic control (decides who can fly where)
- Data plane = The actual airspace and runways (where planes fly)

The control plane decides "should this user access this resource?" The data plane implements that decision by allowing or blocking the connection.

---

**3. Why is separation of duties important? Give an example where it prevents fraud.**

**Answer:**

**Separation of duties** ensures no single person has complete control over a critical process, preventing fraud and reducing errors.

**Example:** Check processing
- Person A writes the check
- Person B approves the check
- Person C mails the check
- Person D reconciles the bank statement

If one person did all four, they could write checks to themselves and hide the fraud. With separation, fraud requires collusion between multiple people.

**Other examples:**
- Developers can't push code to production without approval
- DBAs can't create their own accounts
- Requestor can't approve their own access requests

---

**4. What is a honeypot, and how does it differ from a honeynet?**

**Answer:**

| Technology | Definition |
|------------|------------|
| **Honeypot** | A single decoy system designed to attract attackers and detect unauthorized access |
| **Honeynet** | A network of multiple honeypots simulating an entire environment |

**Key differences:**

| Aspect | Honeypot | Honeynet |
|--------|----------|----------|
| Scale | Single system | Multiple systems |
| Complexity | Simple | Complex |
| Data collected | Basic access attempts | Full attack patterns, lateral movement |
| Resources needed | Low | High |
| Use case | Early warning | Full attacker analysis |

---

**5. Explain least privilege. Why is it harder to implement than it sounds?**

**Answer:**

**Least privilege:** Users and systems should have only the minimum permissions necessary to perform their job functions—nothing more.

**Why it's hard to implement:**

1. **Dynamic needs** - Job requirements change, but permissions often don't get removed
2. **Permission creep** - Access accumulates over time as roles change
3. **Convenience pressure** - Users request "just in case" access; approvers rubber-stamp
4. **Complex systems** - Modern apps have granular permissions that are hard to map to job roles
5. **Break-glass needs** - Some access IS needed occasionally, but granting permanent access is easier
6. **Audit burden** - Regular reviews take time and resources
7. **Default configurations** - Many systems default to overly permissive settings

---

## Section 2: Activity Solutions

### Activity A: Zero Trust Principle Analysis - Answers

**Traditional vs Zero Trust:**

| Aspect | Traditional Security | Zero Trust |
|--------|---------------------|------------|
| Trust model | Trust but verify - inside = trusted | Never trust, always verify |
| Network location | Inside firewall = safe | Location doesn't equal trust |
| Authentication | Once at perimeter | Continuous, every request |
| Access decisions | Based on network segment | Based on identity, device, context |
| Lateral movement | Easy once inside | Blocked, microsegmented |
| Default stance | Allow unless blocked | Deny unless explicitly allowed |

**Three principles explained:**

1. **Verify explicitly:** Authenticate and authorize every request using all available data points (identity, device health, location, data classification, anomalies).

2. **Least privilege access:** Limit access with just-in-time (JIT) and just-enough-access (JEA). Grant minimum permissions for minimum time.

3. **Assume breach:** Design security assuming attackers are already inside. Segment networks, encrypt everything, detect anomalies, minimize blast radius.

**Component matching:**

| Component | Function |
|-----------|----------|
| Policy Decision Point (PDP) | A) Makes access decisions based on policy |
| Policy Enforcement Point (PEP) | B) Establishes/terminates connections based on PDP decisions |
| Policy Engine | C) Evaluates requests against policies |
| Policy Administrator | D) Manages policy and communicates decisions to PEP |

---

### Activity C: Separation of Duties Design - Answers

**What could go wrong with one person controlling payroll?**

- Create fake "ghost" employees and collect their pay
- Inflate their own salary without detection
- Redirect payments to personal accounts
- Approve fraudulent overtime or bonuses
- Delete audit trails of fraud

**Separation of duties design:**

| Task | Role 1: HR Admin | Role 2: Payroll Processor | Role 3: Finance Approver |
|------|------------------|---------------------------|--------------------------|
| Add new employees | ✓ | | |
| Set salary amounts | ✓ | | |
| Approve payroll runs | | | ✓ |
| Issue payments | | ✓ | |
| Modify bank accounts | ✓ (with approval) | | ✓ (approves) |
| Audit payroll records | | | ✓ (or separate auditor) |

**Fraud prevention:**

| Fraud Type | How Separation Prevents It |
|------------|---------------------------|
| Ghost employee | HR adds employee, but Finance would question unknown person at approval |
| Salary inflation | HR sets salary, but Finance reviews and approves unusual amounts |
| Payment redirection | HR changes bank details, but Finance must approve; auditor reviews |

---

### Activity D: Least Privilege - Key Points

**Common violations:**

- Running as Administrator daily → Should use standard account, elevate only when needed
- Apps with excessive permissions → Review and revoke unnecessary access
- Browser extensions with "access all sites" → Only grant access to sites they need

**Best practice:** Default deny, grant access only when specifically needed, revoke when no longer required.

---

### Activity E: Defense in Depth - Healthcare Clinic Answers

| Layer | Controls |
|-------|----------|
| **Physical** | Locked doors, badge access, cameras, visitor logs, locked file cabinets, shredder |
| **Perimeter** | Firewall, IDS/IPS, email filtering, web filtering |
| **Network** | VLANs for clinical vs admin, encrypted connections, network monitoring |
| **Endpoint** | EDR/antivirus, encryption, MDM for mobile, patch management |
| **Application** | Access controls in EHR, input validation, audit logging |
| **Data** | Encryption at rest, DLP, access controls, database monitoring |
| **User** | Security awareness training, phishing simulations, strong passwords + MFA |

**Single layer failure consequences:**

| Failure | Attacker Capability |
|---------|---------------------|
| Firewall bypassed | Can reach internal network, but still faces endpoint, app, data controls |
| Employee clicks phishing | Attacker has foothold, but segmentation limits lateral movement |
| Laptop stolen | Disk encryption prevents data access without credentials |
| SQL injection | Application layer fails, but database permissions limit damage |

---

### Activity F: Gap Analysis - Prioritized Gaps

**Recommended priority (may vary based on reasoning):**

| Priority | Gap | Why |
|----------|-----|-----|
| 1 | MFA on critical systems | Single biggest defense against credential attacks, relatively easy |
| 2 | Remove local admin rights | Prevents malware installation, privilege escalation |
| 3 | EDR on all endpoints | Current partial AV leaves blind spots |
| 4 | Automated backups (3-2-1) | Ransomware protection, business continuity |
| 5 | Security awareness training | Human layer is often weakest link |

**Reasoning considerations:**
- Risk reduction vs implementation effort
- Compliance requirements
- Budget constraints
- Quick wins vs long-term projects

---

### Activity G: Deception Technology - Answers

**Deception types:**

| Technology | What It Is | Purpose |
|------------|-----------|---------|
| Honeypot | Fake system that appears valuable | Detect unauthorized access, study attacker behavior |
| Honeynet | Network of honeypots | Full attacker simulation, detailed analysis |
| Honeyfile | Fake file with alert trigger | Detect data access/exfiltration |
| Honeytoken | Fake credential or data | Detect if credentials/data are stolen and used |

**Honeytoken examples:**

| Scenario | Honeytoken Idea |
|----------|-----------------|
| Database breach | Fake customer record that triggers alert if queried |
| File server access | Decoy document named "passwords.xlsx" that alerts on open |
| Credential theft | Fake admin account that alerts on any login attempt |
| Email compromise | Fake "wire transfer instructions" email that tracks if opened/forwarded |

**Why deception works:**

Legitimate users **never** access honeypots/honeytokens.

Any access = **definite** indication of compromise.

This gives **low false positive** alerts compared to other detection methods.

---

### Activity H: Physical Security - Answers

**Control classifications:**

| Control | Preventive | Detective | Deterrent |
|---------|------------|-----------|-----------|
| Fence | ✓ | | ✓ |
| Camera | | ✓ | ✓ |
| Motion lights | | ✓ | ✓ |
| Security guard | ✓ | ✓ | ✓ |
| Mantrap | ✓ | | |
| "Beware of Dog" sign | | | ✓ |
| Door lock | ✓ | | ✓ |
| Alarm system | | ✓ | ✓ |

**Note:** Many controls serve multiple purposes. Security guards are particularly versatile.

**Mantrap prevention:**

- **Tailgating:** Only one person can be in the mantrap at a time; door won't open until first door closes and person authenticates
- **Piggybacking:** Same mechanism—inner door requires individual authentication; presence of unauthorized person triggers lockdown

---

### Activity I: Security Frameworks - Answers

| Framework | Full Name | Who Uses It | Key Focus |
|-----------|-----------|-------------|-----------|
| NIST CSF | National Institute of Standards and Technology Cybersecurity Framework | Any organization (voluntary) | Risk-based approach, 5 functions |
| NIST RMF | NIST Risk Management Framework | US federal agencies, contractors | Formal risk management lifecycle |
| ISO 27001 | International Organization for Standardization 27001 | Global organizations | Information Security Management System (ISMS) certification |
| CIS Controls | Center for Internet Security Controls | Any organization | Prioritized, actionable security controls |
| SOC 2 | Service Organization Control 2 | Cloud/SaaS providers | Trust service criteria (security, availability, etc.) |
| COBIT | Control Objectives for Information and Related Technologies | IT governance | IT management and governance framework |

**NIST CSF Functions:**

| Function | Purpose |
|----------|---------|
| Identify | Understand assets, risks, and business context |
| Protect | Implement safeguards to ensure service delivery |
| Detect | Identify security events and anomalies |
| Respond | Take action when incidents occur |
| Recover | Restore normal operations after incidents |

**Framework/regulation matching:**

| Industry/Situation | Framework/Regulation |
|-------------------|---------------------|
| US government contractors | NIST RMF, CMMC |
| Healthcare (US) | HIPAA |
| Payment card processing | PCI DSS |
| Publicly traded company (US) | SOX |
| Cloud service provider proving security | SOC 2 |

---

## Section 3: Reflection Scenarios - Discussion Points

**Scenario 1: "We have a firewall, so we're secure"**

Response approach:

"A firewall is important, but it's just one layer. Defense in depth means we need multiple layers because:
- Phishing bypasses the firewall entirely (email comes through allowed ports)
- Insider threats are already past the firewall
- If malware gets in, nothing stops lateral movement
- Zero-day exploits can bypass firewall rules

We need endpoint protection, user training, network segmentation, data encryption, and monitoring. Each layer catches what others miss."

**Scenario 2: Copying another employee's access**

Problems with this approach:
- Likely grants more access than needed (least privilege violation)
- The other employee may have accumulated extra permissions over time
- Different roles need different access
- No intentional review of what's actually needed
- Creates access sprawl that's hard to audit

Better approach: Start from job requirements, grant only what's specifically needed for the project, set an expiration date.

**Scenario 3: Budget-friendly Zero Trust steps**

High-impact, lower-cost starting points:

1. **Enable MFA everywhere** - Often free with existing systems (Azure AD, Google, etc.)
2. **Implement least privilege** - Review and reduce admin rights (costs time, not money)
3. **Segment critical assets** - VLANs are a configuration, not a purchase
4. **Improve logging and monitoring** - Use existing tools better before buying new ones
5. **Conditional access policies** - Block risky sign-ins based on location/device (often included in existing licenses)

---

## Key Exam Tips

1. **Zero Trust mantra:** "Never trust, always verify" - memorize this

2. **Control plane vs data plane:**
   - Control = decision making (PDP, Policy Engine)
   - Data = enforcement (PEP, actual traffic)

3. **Separation of duties** prevents fraud by requiring collusion

4. **Least privilege:**
   - JIT = Just-in-time access (temporary)
   - JEA = Just-enough-access (minimum needed)

5. **Defense in depth layers:** Physical → Perimeter → Network → Endpoint → Application → Data → User

6. **Deception technologies:**
   - Honeypot = single system
   - Honeynet = network of honeypots
   - Any access = confirmed malicious (very low false positives)

7. **NIST CSF functions:** Identify, Protect, Detect, Respond, Recover (in order)

8. **Gap analysis:** Current state vs desired state → gaps → prioritized remediation

---

## Common Mistakes to Avoid

❌ Thinking Zero Trust means "trust nothing" (it means "verify everything")

❌ Confusing separation of duties with least privilege (they're related but different)

❌ Forgetting that defense in depth includes the human layer (training)

❌ Thinking honeypots/honeynets are illegal (they're your decoys on your network)

❌ Mixing up frameworks (NIST CSF vs RMF, ISO 27001 vs SOC 2)

❌ Assuming Zero Trust requires replacing everything (it's a journey, not a product)

---

**Congratulations on completing Lab 3!**

You now understand the conceptual frameworks that guide enterprise security architecture. These principles will appear throughout the remaining Security+ material.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 3: Security Concepts and Frameworks - Solution Guide*