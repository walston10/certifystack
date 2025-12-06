# Lab 19: Identity and Access Management

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 3.3 - Compare and contrast concepts and strategies to protect data

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the three common authentication factors? Give an example of each.**

2. **Why is multi-factor authentication (MFA) more secure than single-factor?**

3. **What is the difference between authentication and authorization?**

4. **Explain Single Sign-On (SSO) and its security trade-offs.**

5. **What is federation, and why would organizations use it?**

---

## Section 2: Hands-On Activities

### Activity A: Authentication Factors

**Goal:** Understand authentication factor categories.

**Authentication factor types:**

| Factor Type | Description | Examples |
|-------------|-------------|----------|
| Something you know | | |
| Something you have | | |
| Something you are | | |
| Somewhere you are | | |
| Something you do | | |

**Classify these authentication methods:**

| Method | Factor Type |
|--------|-------------|
| Password | |
| Fingerprint scan | |
| Smart card | |
| PIN | |
| Retina scan | |
| Hardware token (RSA SecurID) | |
| Security question answer | |
| Mobile push notification | |
| Voice recognition | |
| GPS location verification | |
| Typing pattern analysis | |
| USB security key (YubiKey) | |

**True MFA vs False MFA:**

| Combination | True MFA? | Why? |
|-------------|-----------|------|
| Password + PIN | | |
| Password + fingerprint | | |
| Smart card + PIN | | |
| Password + security question | | |
| Fingerprint + facial recognition | | |
| Password + SMS code | | |
| Password + authenticator app | | |

---

### Activity B: Password Security

**Goal:** Understand password policies and attacks.

**Password policy elements:**

| Element | Purpose | Recommended Value |
|---------|---------|-------------------|
| Minimum length | | |
| Complexity requirements | | |
| Password history | | |
| Maximum age | | |
| Minimum age | | |
| Account lockout threshold | | |
| Lockout duration | | |

**Password attacks:**

| Attack | Description | Countermeasure |
|--------|-------------|----------------|
| Brute force | | |
| Dictionary | | |
| Rainbow table | | |
| Password spraying | | |
| Credential stuffing | | |
| Phishing | | |
| Shoulder surfing | | |
| Keylogging | | |

**Password vs Passphrase:**

| Aspect | Password | Passphrase |
|--------|----------|------------|
| Length | | |
| Memorability | | |
| Entropy | | |
| Example | | |

Which is stronger: `P@ssw0rd!` or `correct horse battery staple`?

_________________________________________________________________

---

### Activity C: Biometric Authentication

**Goal:** Understand biometric security concepts.

**Biometric types:**

| Type | What It Measures | Pros | Cons |
|------|------------------|------|------|
| Fingerprint | | | |
| Facial recognition | | | |
| Iris scan | | | |
| Retina scan | | | |
| Voice recognition | | | |
| Palm vein | | | |
| Gait analysis | | | |

**Biometric accuracy metrics:**

| Metric | Definition | Ideal Value |
|--------|------------|-------------|
| FAR (False Acceptance Rate) | | |
| FRR (False Rejection Rate) | | |
| CER (Crossover Error Rate) | | |

**FAR vs FRR trade-off:**

If you make a biometric system more sensitive (harder to match):
- FAR goes: _______________
- FRR goes: _______________

If you make it less sensitive (easier to match):
- FAR goes: _______________
- FRR goes: _______________

**Which is worse for:**

| Scenario | Worse: High FAR or High FRR? | Why? |
|----------|------------------------------|------|
| Nuclear facility access | | |
| Employee time clock | | |
| Phone unlock | | |
| Data center entry | | |

---

### Activity D: One-Time Passwords (OTP)

**Goal:** Understand OTP mechanisms.

**OTP types:**

| Type | How It Works | Pros | Cons |
|------|--------------|------|------|
| HOTP (HMAC-based) | | | |
| TOTP (Time-based) | | | |
| SMS OTP | | | |
| Email OTP | | | |

**TOTP explained:**

| Component | Purpose |
|-----------|---------|
| Shared secret | |
| Time interval (usually 30 sec) | |
| Hash algorithm (SHA-1/256) | |
| 6-digit code | |

**Why is SMS OTP less secure?**

| Vulnerability | Description |
|---------------|-------------|
| SIM swapping | |
| SS7 attacks | |
| Interception | |
| Social engineering | |

**Recommended OTP methods (ranked):**

| Rank | Method | Reason |
|------|--------|--------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

---

### Activity E: Single Sign-On (SSO)

**Goal:** Understand SSO concepts and protocols.

**SSO benefits and risks:**

| Benefits | Risks |
|----------|-------|
| | |
| | |
| | |
| | |

**SSO protocols:**

| Protocol | Description | Use Case |
|----------|-------------|----------|
| SAML | | |
| OAuth 2.0 | | |
| OpenID Connect | | |
| Kerberos | | |

**SAML components:**

| Component | Role |
|-----------|------|
| Identity Provider (IdP) | |
| Service Provider (SP) | |
| Assertion | |
| User/Principal | |

**SAML flow (simplified):**

| Step | Action |
|------|--------|
| 1 | User tries to access SP |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**OAuth vs OpenID Connect:**

| Aspect | OAuth 2.0 | OpenID Connect |
|--------|-----------|----------------|
| Purpose | | |
| Provides | | |
| Use case | | |

---

### Activity F: Federation

**Goal:** Understand federated identity.

**Federation concepts:**

| Term | Definition |
|------|------------|
| Federation | |
| Trust relationship | |
| Identity Provider (IdP) | |
| Relying Party | |
| Claims | |

**Federation use cases:**

| Scenario | How Federation Helps |
|----------|---------------------|
| Company acquires another company | |
| Partner organization access | |
| Cloud service access | |
| "Login with Google/Microsoft" | |

**Federation trust models:**

| Model | Description |
|-------|-------------|
| Direct trust | |
| Brokered trust | |
| Transitive trust | |

**Federation security considerations:**

| Consideration | Best Practice |
|---------------|---------------|
| Token lifetime | |
| Token validation | |
| Attribute mapping | |
| Session management | |
| Audit logging | |

---

### Activity G: Authentication Protocols

**Goal:** Compare authentication protocols.

**Protocol comparison:**

| Protocol | Port | Transport | Use Case |
|----------|------|-----------|----------|
| RADIUS | | | |
| TACACS+ | | | |
| Kerberos | | | |
| LDAP | | | |
| LDAPS | | | |

**RADIUS vs TACACS+:**

| Aspect | RADIUS | TACACS+ |
|--------|--------|---------|
| Protocol | | |
| Encryption | | |
| AAA separation | | |
| Primary use | | |
| Vendor | | |

**Kerberos components:**

| Component | Role |
|-----------|------|
| KDC (Key Distribution Center) | |
| TGT (Ticket Granting Ticket) | |
| TGS (Ticket Granting Service) | |
| Service Ticket | |
| Principal | |

**Kerberos authentication flow:**

| Step | Action |
|------|--------|
| 1 | User authenticates to KDC |
| 2 | |
| 3 | |
| 4 | |

---

### Activity H: Privileged Access Management (PAM)

**Goal:** Understand privileged account security.

**Privileged account types:**

| Account Type | Examples | Risk Level |
|--------------|----------|------------|
| Local admin | | |
| Domain admin | | |
| Service accounts | | |
| Root/superuser | | |
| Database admin | | |
| Cloud admin | | |

**PAM capabilities:**

| Capability | Description |
|------------|-------------|
| Password vaulting | |
| Session recording | |
| Just-in-time access | |
| Credential rotation | |
| Approval workflows | |
| Break-glass procedures | |

**PAM best practices:**

| Practice | Implementation |
|----------|----------------|
| No shared accounts | |
| Rotate passwords | |
| Monitor sessions | |
| Require approval | |
| Time-limited access | |
| Audit everything | |

**Scenario:** An admin needs to fix a production database issue at 2 AM.

How would PAM handle this?

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

---

### Activity I: Account Lifecycle Management

**Goal:** Manage accounts through their lifecycle.

**Account lifecycle stages:**

| Stage | Actions Required |
|-------|------------------|
| Provisioning | |
| Active use | |
| Modification | |
| Suspension | |
| Deprovisioning | |

**Account provisioning checklist:**

| Task | Completed |
|------|-----------|
| Verify identity | [ ] |
| Create account | [ ] |
| Assign appropriate groups | [ ] |
| Apply least privilege | [ ] |
| Set password policy | [ ] |
| Enable MFA | [ ] |
| Document access granted | [ ] |
| Notify user | [ ] |

**Account deprovisioning checklist:**

| Task | Completed |
|------|-----------|
| Disable account immediately | [ ] |
| Revoke active sessions | [ ] |
| Remove group memberships | [ ] |
| Transfer data ownership | [ ] |
| Archive mailbox | [ ] |
| Document deprovisioning | [ ] |
| Reclaim hardware | [ ] |
| Remove from systems | [ ] |

**Why is timely deprovisioning critical?**

_________________________________________________________________

---

### Activity J: Identity Governance

**Goal:** Understand identity governance concepts.

**Identity governance components:**

| Component | Purpose |
|-----------|---------|
| Access reviews | |
| Role management | |
| Separation of duties | |
| Policy enforcement | |
| Compliance reporting | |

**Access review process:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

**Separation of duties examples:**

| Role 1 | Role 2 | Why Separate? |
|--------|--------|---------------|
| Developer | | |
| Requester | | |
| Accountant | | |
| Security admin | | |

**Common access review findings:**

| Finding | Risk | Remediation |
|---------|------|-------------|
| Orphaned accounts | | |
| Excessive permissions | | |
| Dormant accounts | | |
| Shared accounts | | |

---

### Activity K: Directory Services

**Goal:** Understand directory services and LDAP.

**Directory service concepts:**

| Concept | Description |
|---------|-------------|
| Directory | |
| Schema | |
| Distinguished Name (DN) | |
| LDAP | |
| Active Directory | |

**LDAP DN example:**

```
CN=John Smith,OU=Sales,OU=Users,DC=company,DC=com
```

| Component | Meaning | Value |
|-----------|---------|-------|
| CN | | |
| OU | | |
| DC | | |

**Active Directory concepts:**

| Concept | Description |
|---------|-------------|
| Domain | |
| Forest | |
| Tree | |
| Organizational Unit (OU) | |
| Group Policy Object (GPO) | |

**AD security best practices:**

| Practice | Purpose |
|----------|---------|
| Use LDAPS (636) | |
| Implement tiered admin | |
| Protect domain admins | |
| Monitor AD changes | |
| Regular access reviews | |

---

### Activity L: Identity Attack Scenarios

**Goal:** Recognize identity-based attacks.

**Attack analysis:**

| Attack | Target | Indicator | Prevention |
|--------|--------|-----------|------------|
| Credential stuffing | | | |
| Password spraying | | | |
| Golden ticket | | | |
| Pass-the-hash | | | |
| Kerberoasting | | | |
| LDAP injection | | | |

**Scenario analysis:**

**Scenario 1:** Help desk receives 50 calls in one hour from users locked out of their accounts.

| Question | Answer |
|----------|--------|
| What's likely happening? | |
| What attack might this indicate? | |
| Immediate response? | |

**Scenario 2:** Security team notices a single IP attempting to log in to many different accounts with the same password.

| Question | Answer |
|----------|--------|
| What attack is this? | |
| Why this technique? | |
| How to prevent? | |

---

### Tier 2 Bonus: Windows Account Analysis

> ⚠️ **Requires:** Command line access

---

### Activity M: Examine Local Accounts

**View local users:**

```cmd
net user
```

| Username | Description |
|----------|-------------|
| | |
| | |
| | |

**View specific user details:**

```cmd
net user Administrator
```

| Property | Value |
|----------|-------|
| Account active | |
| Password last set | |
| Password expires | |
| Logon hours | |
| Local Group Memberships | |

**View local groups:**

```cmd
net localgroup
```

List 5 security-relevant groups:

| Group | Purpose |
|-------|---------|
| | |
| | |
| | |
| | |
| | |

**Check Administrators group:**

```cmd
net localgroup Administrators
```

Who has local admin rights?

| Member |
|--------|
| |
| |

---

### Activity N: Password Policy Check

**View password policy:**

```cmd
net accounts
```

| Policy | Current Value | Recommended |
|--------|---------------|-------------|
| Minimum password length | | 14+ |
| Maximum password age | | 90 days or less |
| Minimum password age | | 1 day |
| Lockout threshold | | 5 or fewer |
| Lockout duration | | 15+ minutes |

**Are the current settings secure?**

_________________________________________________________________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company currently uses username/password authentication only. Management asks you to implement MFA. What factors would you recommend, and how would you roll it out to minimize user resistance?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** An employee was terminated yesterday. Today, they accessed company email from home and downloaded sensitive files. What went wrong, and how do you fix the process?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Users complain about remembering passwords for 15 different work applications. What solution do you propose, and what security considerations must you address?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Identify authentication factors (know, have, are, somewhere, something you do)
- [ ] Explain what makes true MFA (multiple different factors)
- [ ] Describe biometric metrics (FAR, FRR, CER)
- [ ] Compare HOTP and TOTP
- [ ] Explain SSO benefits and risks
- [ ] Describe SAML, OAuth, and OpenID Connect
- [ ] Compare RADIUS and TACACS+
- [ ] Explain Kerberos authentication flow
- [ ] Describe PAM capabilities
- [ ] Explain account lifecycle management
- [ ] Understand identity governance and access reviews

---

## What You Learned Today

- ✅ Classified authentication factors
- ✅ Analyzed password security
- ✅ Explored biometric authentication
- ✅ Compared OTP methods
- ✅ Understood SSO protocols
- ✅ Explored federation concepts
- ✅ Compared authentication protocols
- ✅ Reviewed PAM capabilities
- ✅ Managed account lifecycle
- ✅ Understood identity governance
- ✅ Explored directory services
- ✅ Analyzed identity attacks
- ✅ (Tier 2) Examined Windows accounts

**Next Lab:** Access Control Models - DAC, MAC, RBAC, ABAC, and permission concepts.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 19: Identity and Access Management*