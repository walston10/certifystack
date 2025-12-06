# Lab 3: Security Concepts and Frameworks

**Tier:** 1 (Universal)
**Time:** 25-30 minutes
**Exam Objectives:** 1.2 - Fundamental security concepts

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **Explain Zero Trust in one sentence. What is its core principle?**

2. **What is the difference between the control plane and data plane in Zero Trust architecture?**

3. **Why is separation of duties important? Give an example where it prevents fraud.**

4. **What is a honeypot, and how does it differ from a honeynet?**

5. **Explain the concept of "least privilege." Why is it harder to implement than it sounds?**

---

## Section 2: Hands-On Activities

### Activity A: Zero Trust Principle Analysis

**Goal:** Understand Zero Trust by examining how it differs from traditional security.

**Traditional (Perimeter) Security vs Zero Trust:**

| Aspect | Traditional Security | Zero Trust |
|--------|---------------------|------------|
| Trust model | "Trust but verify" - inside network = trusted | |
| Network location | Inside firewall = safe | |
| Authentication | Once at perimeter | |
| Access decisions | Based on network segment | |
| Lateral movement | Easy once inside | |
| Default stance | Allow unless blocked | |

**Complete the Zero Trust column above, then answer:**

**The three core principles of Zero Trust are:**

1. **Verify explicitly** - What does this mean in practice?

   _________________________________________________________________

2. **Least privilege access** - How is this enforced?

   _________________________________________________________________

3. **Assume breach** - How does this change security design?

   _________________________________________________________________

**Zero Trust components - match each to its function:**

| Component | Function (choose from below) |
|-----------|------------------------------|
| Policy Decision Point (PDP) | |
| Policy Enforcement Point (PEP) | |
| Policy Engine | |
| Policy Administrator | |

**Functions:**
- A) Makes access decisions based on policy
- B) Establishes/terminates connections based on PDP decisions
- C) Evaluates requests against policies
- D) Manages policy and communicates decisions to PEP

---

### Activity B: Zero Trust in Your Environment

**Goal:** Identify Zero Trust principles (or their absence) in systems you use.

**Evaluate a system you access regularly (work, school, banking, etc.):**

**System:** _______________________

| Zero Trust Principle | Present? | How It's Implemented (or what's missing) |
|---------------------|----------|------------------------------------------|
| MFA required | [ ] Yes [ ] No [ ] Partial | |
| Session timeouts | [ ] Yes [ ] No | |
| Device health check | [ ] Yes [ ] No | |
| Location-based access | [ ] Yes [ ] No | |
| Continuous validation | [ ] Yes [ ] No | |
| Microsegmentation | [ ] Yes [ ] No [ ] Unknown | |
| Encrypted connections | [ ] Yes [ ] No | |
| Just-in-time access | [ ] Yes [ ] No | |

**Zero Trust maturity assessment:**

Based on your evaluation, rate this system:

- [ ] Traditional (perimeter-based, trust once authenticated)
- [ ] Partial Zero Trust (some principles applied)
- [ ] Strong Zero Trust (most principles applied)

**What would improve this system's Zero Trust posture?**

1. _________________________________________________________________

2. _________________________________________________________________

---

### Activity C: Separation of Duties Design

**Goal:** Apply separation of duties to prevent fraud and errors.

**Scenario:** A company processes payroll for 500 employees. Currently, one payroll administrator can:
- Add new employees to payroll
- Set salary amounts
- Approve payroll runs
- Issue payments
- Modify bank account details

**Problem:** What could go wrong with this setup?

_________________________________________________________________

**Design separation of duties:**

Divide the responsibilities among at least 3 roles:

| Task | Role 1: _______ | Role 2: _______ | Role 3: _______ |
|------|-----------------|-----------------|-----------------|
| Add new employees | [ ] | [ ] | [ ] |
| Set salary amounts | [ ] | [ ] | [ ] |
| Approve payroll runs | [ ] | [ ] | [ ] |
| Issue payments | [ ] | [ ] | [ ] |
| Modify bank accounts | [ ] | [ ] | [ ] |
| Audit payroll records | [ ] | [ ] | [ ] |

**What fraud does this prevent?**

| Fraud Type | How Separation Prevents It |
|------------|---------------------------|
| Ghost employee (fake employee getting paid) | |
| Salary inflation (increasing own pay) | |
| Payment redirection (stealing payments) | |

---

### Activity D: Least Privilege Audit

**Goal:** Analyze your own access and identify excessive privileges.

**Personal device audit:**

| Question | Your Answer | Is This Least Privilege? |
|----------|-------------|-------------------------|
| Do you run as Administrator/root daily? | [ ] Yes [ ] No | |
| How many apps have location access? | _____ apps | |
| How many apps can access your camera? | _____ apps | |
| How many apps can access your contacts? | _____ apps | |
| Do browser extensions have "access all sites"? | [ ] Yes [ ] No | |

**Check your mobile device permissions:**

Go to Settings > Privacy/Permissions and review:

| Permission | Apps That Have It | Do They All Need It? |
|------------|-------------------|---------------------|
| Camera | | |
| Microphone | | |
| Location (always) | | |
| Contacts | | |
| Photos/Files | | |

**Least privilege cleanup:**

List 3 permissions you can revoke right now:

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

**Work/School account audit (if applicable):**

| Question | Answer |
|----------|--------|
| Do you have admin rights you don't need? | |
| Can you access files outside your job function? | |
| Do you have access to systems you no longer use? | |
| When was your access last reviewed? | |

---

### Activity E: Defense in Depth Mapping

**Goal:** Design layered security for a scenario.

**Scenario:** A healthcare clinic needs to protect patient records (electronic and paper).

**Design controls at each layer:**

| Layer | Threats at This Layer | Controls You'd Implement |
|-------|----------------------|-------------------------|
| **Physical** | Unauthorized building access, theft | |
| **Perimeter** (network edge) | External attackers, malware | |
| **Network** (internal) | Lateral movement, eavesdropping | |
| **Endpoint** (devices) | Malware, unauthorized apps | |
| **Application** | Software vulnerabilities, misuse | |
| **Data** | Unauthorized access, theft | |
| **User** (human) | Phishing, social engineering, errors | |

**Why multiple layers?**

For the clinic scenario, explain what happens if:

| Single Layer Fails | What Attacker Can Do |
|-------------------|---------------------|
| Firewall is bypassed | |
| Employee clicks phishing link | |
| Laptop is stolen | |
| Database has SQL injection vulnerability | |

**Key insight:** Each layer compensates for failures in other layers.

---

### Activity F: Gap Analysis Exercise

**Goal:** Identify security gaps by comparing current state to desired state.

**Scenario:** A small business has:

**Current State:**
- 25 employees with Windows 10 PCs
- Basic router/firewall from ISP
- Antivirus on most (not all) computers
- Shared password for Wi-Fi posted on wall
- No written security policies
- Employees use personal phones for work email
- Data backed up to external drive weekly (manually)
- No security training
- Everyone has local admin rights
- No MFA on any accounts

**Desired State (Industry best practices):**

| Control | Current | Desired | Gap |
|---------|---------|---------|-----|
| Firewall | ISP basic | Enterprise with logging | |
| Endpoint protection | Partial AV | EDR on all systems | |
| Wi-Fi security | Shared password posted | WPA3 + hidden, separate guest | |
| Security policies | None | AUP, incident response, password policy | |
| Mobile devices | Unmanaged BYOD | MDM or separate work phones | |
| Backups | Manual weekly | Automated daily, 3-2-1 rule, tested | |
| Training | None | Annual + phishing simulations | |
| Admin rights | Everyone | Only IT staff | |
| MFA | None | All critical systems | |
| Access reviews | None | Quarterly | |

**Prioritize the gaps:**

Rank the top 5 gaps to fix first (consider risk and effort):

| Priority | Gap to Fix | Why This Priority |
|----------|------------|-------------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

---

### Activity G: Deception Technology Concepts

**Goal:** Understand honeypots, honeynets, and other deception techniques.

**Deception technology types:**

| Technology | What It Is | Purpose |
|------------|-----------|---------|
| Honeypot | | |
| Honeynet | | |
| Honeyfile | | |
| Honeytoken | | |

**Honeypot design exercise:**

You want to detect attackers who breach your network. Design a honeypot:

| Design Element | Your Choice |
|----------------|-------------|
| What will it look like? (fake server type) | |
| What operating system? | |
| What fake services will run? | |
| What fake data will it contain? | |
| Where on the network will it sit? | |
| What alerts when someone accesses it? | |
| Why would an attacker be attracted to it? | |

**Honeytoken examples:**

Create examples of honeytokens for each scenario:

| Scenario | Honeytoken Idea |
|----------|-----------------|
| Detect if database is breached | |
| Detect if file server is accessed | |
| Detect if credentials are stolen | |
| Detect if email is compromised | |

**Why deception works:**

Legitimate users _____________ access honeypots/honeytokens.

Any access = _____________ indication of compromise.

This gives _____________ alerts compared to other detection methods.

---

### Activity H: Physical Security Concepts

**Goal:** Connect physical security controls to the broader security picture.

**Physical security assessment - your environment:**

| Control | Present? | Notes |
|---------|----------|-------|
| Locked exterior doors | [ ] Yes [ ] No | |
| Badge/key access | [ ] Yes [ ] No | |
| Security cameras | [ ] Yes [ ] No | |
| Visitor sign-in | [ ] Yes [ ] No [ ] N/A | |
| Screen privacy (positioning/filters) | [ ] Yes [ ] No | |
| Clean desk policy | [ ] Yes [ ] No | |
| Locked cabinets for sensitive docs | [ ] Yes [ ] No [ ] N/A | |
| Secure disposal (shredder) | [ ] Yes [ ] No | |
| USB port locks/controls | [ ] Yes [ ] No | |
| Server room/closet locked | [ ] Yes [ ] No [ ] N/A | |

**Physical security control types:**

Classify each control:

| Control | Preventive | Detective | Deterrent |
|---------|------------|-----------|-----------|
| Fence around property | [ ] | [ ] | [ ] |
| Security camera | [ ] | [ ] | [ ] |
| Motion-sensor lights | [ ] | [ ] | [ ] |
| Security guard | [ ] | [ ] | [ ] |
| Access control vestibule (mantrap) | [ ] | [ ] | [ ] |
| "Beware of Dog" sign | [ ] | [ ] | [ ] |
| Door lock | [ ] | [ ] | [ ] |
| Alarm system | [ ] | [ ] | [ ] |

**Access control vestibule (mantrap) design:**

Explain how a mantrap prevents:

- Tailgating: _________________________________________________________________

- Piggybacking: _________________________________________________________________

---

### Activity I: Security Framework Overview

**Goal:** Familiarize yourself with common security frameworks.

**Research and complete:**

| Framework | Full Name | Who Uses It | Key Focus |
|-----------|-----------|-------------|-----------|
| NIST CSF | | | |
| NIST RMF | | | |
| ISO 27001 | | | |
| CIS Controls | | | |
| SOC 2 | | | |
| COBIT | | | |

**NIST Cybersecurity Framework functions:**

The NIST CSF has 5 core functions. Match each to its purpose:

| Function | Purpose |
|----------|---------|
| Identify | |
| Protect | |
| Detect | |
| Respond | |
| Recover | |

**When frameworks are required:**

Match the framework/regulation to the industry:

| Industry/Situation | Framework/Regulation |
|-------------------|---------------------|
| US government contractors | |
| Healthcare (US) | |
| Payment card processing | |
| Publicly traded company (US) | |
| Cloud service provider proving security | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company's CEO says "We have a firewall, so we're secure." How would you explain why this isn't enough using defense in depth concepts?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A new employee needs access to complete a project. The fastest approach is to copy another employee's access. Why is this problematic from a least privilege perspective?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Your organization wants to implement Zero Trust but has a tight budget. What are 2-3 high-impact, lower-cost steps they could start with?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain Zero Trust and its three principles
- [ ] Distinguish between control plane and data plane
- [ ] Define and apply separation of duties
- [ ] Explain least privilege and give examples
- [ ] Describe defense in depth layers
- [ ] Conduct a basic gap analysis
- [ ] Explain honeypots, honeynets, honeytokens
- [ ] Identify physical security controls and their types
- [ ] Name major security frameworks and their purposes

---

## What You Learned Today

- ✅ Analyzed Zero Trust principles and components
- ✅ Evaluated systems against Zero Trust criteria
- ✅ Designed separation of duties for fraud prevention
- ✅ Audited your own permissions for least privilege
- ✅ Mapped defense in depth for a real scenario
- ✅ Performed a gap analysis exercise
- ✅ Designed deception technology concepts
- ✅ Assessed physical security controls
- ✅ Explored major security frameworks

**Next Lab:** Cryptography Fundamentals - symmetric encryption, asymmetric encryption, and key management.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 3: Security Concepts and Frameworks*