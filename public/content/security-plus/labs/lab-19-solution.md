# Lab 19: Identity and Access Management - Solution Guide

**Note to Students:** Review this AFTER completing your own work. IAM is foundational to security.

---

## Section 1: Concept Check - Answers

**1. Three authentication factors with examples:**

**Answer:**

| Factor | Description | Examples |
|--------|-------------|----------|
| **Something you know** | Knowledge-based | Password, PIN, security questions |
| **Something you have** | Possession-based | Smart card, token, phone |
| **Something you are** | Biometric | Fingerprint, face, iris |

Additional factors:
- **Somewhere you are** - GPS location, IP address
- **Something you do** - Typing pattern, gait analysis

---

**2. Why MFA is more secure:**

**Answer:**

MFA requires compromising **multiple independent factors**. Even if an attacker steals a password (something you know), they still need the phone (something you have) or fingerprint (something you are).

**Key principle:** Factors must be from different categories—password + PIN is NOT MFA (both are "something you know").

---

**3. Authentication vs Authorization:**

**Answer:**

| Concept | Definition | Question Answered |
|---------|------------|-------------------|
| **Authentication** | Verifying identity | "Who are you?" |
| **Authorization** | Granting permissions | "What can you do?" |

Authentication always comes first; you must know WHO before deciding WHAT they can access.

---

**4. Single Sign-On (SSO):**

**Answer:**

**SSO** allows users to authenticate once and access multiple applications without re-authenticating.

| Benefits | Risks |
|----------|-------|
| Better user experience | Single point of failure |
| Fewer passwords to remember | Compromise = access to everything |
| Reduced help desk calls | Requires strong MFA |
| Centralized access control | Complex implementation |

---

**5. Federation:**

**Answer:**

**Federation** enables identity sharing between organizations with trust relationships.

**Why organizations use it:**
- Partner access without creating accounts
- "Login with Google" functionality
- Mergers and acquisitions
- Cloud service access
- Reduced account management overhead

---

## Section 2: Activity Solutions

### Activity A: Authentication Factors - Answers

| Method | Factor Type |
|--------|-------------|
| Password | Something you know |
| Fingerprint scan | Something you are |
| Smart card | Something you have |
| PIN | Something you know |
| Retina scan | Something you are |
| Hardware token | Something you have |
| Security question | Something you know |
| Mobile push | Something you have |
| Voice recognition | Something you are |
| GPS verification | Somewhere you are |
| Typing pattern | Something you do |
| YubiKey | Something you have |

**True MFA analysis:**

| Combination | True MFA? | Why |
|-------------|-----------|-----|
| Password + PIN | No | Both "something you know" |
| Password + fingerprint | Yes | Know + are |
| Smart card + PIN | Yes | Have + know |
| Password + security question | No | Both "something you know" |
| Fingerprint + facial | No | Both "something you are" |
| Password + SMS code | Yes | Know + have (phone) |
| Password + authenticator app | Yes | Know + have |

---

### Activity B: Password Security - Answers

| Element | Purpose | Recommended |
|---------|---------|-------------|
| Minimum length | Increase entropy | 14+ characters |
| Complexity | Harder to guess | Upper, lower, numbers, symbols |
| History | Prevent reuse | Remember 24 passwords |
| Maximum age | Force rotation | 90 days (or never with MFA) |
| Minimum age | Prevent rapid cycling | 1 day |
| Lockout threshold | Stop brute force | 5 attempts |
| Lockout duration | Slow attacks | 15-30 minutes |

**Password attacks:**

| Attack | Description | Countermeasure |
|--------|-------------|----------------|
| Brute force | Try all combinations | Length, lockout |
| Dictionary | Common word lists | Complexity, length |
| Rainbow table | Precomputed hashes | Salting |
| Spraying | Few passwords, many accounts | Lockout across accounts |
| Credential stuffing | Reused credentials | Unique passwords |
| Phishing | Trick user to reveal | Training, MFA |
| Shoulder surfing | Watch user type | Awareness, privacy screens |
| Keylogging | Record keystrokes | Endpoint protection |

**Passphrase strength:** `correct horse battery staple` is stronger—more entropy (length) and easier to remember.

---

### Activity C: Biometrics - Answers

| Type | Measures | Pros | Cons |
|------|----------|------|------|
| Fingerprint | Ridge patterns | Cheap, fast, common | Can be lifted, dirty fingers |
| Facial | Face geometry | Convenient | Lighting, twins, photos |
| Iris | Iris pattern | Very accurate | Expensive, user resistance |
| Retina | Blood vessel pattern | Extremely accurate | Intrusive, expensive |
| Voice | Voice patterns | Convenient | Background noise, illness |
| Palm vein | Vein patterns | Hard to spoof | Less common |
| Gait | Walking pattern | Continuous | Injury affects it |

**Metrics:**

| Metric | Definition | Ideal |
|--------|------------|-------|
| FAR | Accepts wrong person | Low |
| FRR | Rejects right person | Low |
| CER | Where FAR = FRR | Lower = better |

**Trade-off:**
- More sensitive: FAR ↓, FRR ↑
- Less sensitive: FAR ↑, FRR ↓

**Which is worse:**

| Scenario | Worse | Why |
|----------|-------|-----|
| Nuclear facility | High FAR | Can't let wrong people in |
| Time clock | High FRR | Productivity loss, frustration |
| Phone unlock | High FRR | User frustration |
| Data center | High FAR | Security critical |

---

### Activity D: OTP - Answers

| Type | How It Works | Pros | Cons |
|------|--------------|------|------|
| HOTP | Counter-based | No time sync needed | Counter drift |
| TOTP | Time-based (30 sec) | Self-expiring | Time sync required |
| SMS | Texted code | Universal | SIM swap, intercept |
| Email | Emailed code | Universal | Email compromise |

**TOTP components:**

| Component | Purpose |
|-----------|---------|
| Shared secret | Base for code generation |
| Time interval | 30-second windows |
| Hash algorithm | Generate code from secret + time |
| 6-digit code | Human-readable output |

**SMS OTP weaknesses:**

| Vulnerability | Description |
|---------------|-------------|
| SIM swapping | Attacker ports number to their SIM |
| SS7 attacks | Intercept via telecom vulnerabilities |
| Interception | Malware reads SMS |
| Social engineering | Trick carrier into transferring |

**Recommended OTP methods:**

| Rank | Method | Reason |
|------|--------|--------|
| 1 | Hardware key (FIDO2) | Phishing-resistant |
| 2 | Authenticator app | Not vulnerable to SIM swap |
| 3 | Push notification | Convenient, reasonably secure |
| 4 | SMS | Better than nothing, but vulnerable |

---

### Activity E: SSO - Answers

| Benefits | Risks |
|----------|-------|
| Single login for all apps | Compromise = all apps compromised |
| Better user experience | Single point of failure |
| Fewer passwords | Must protect SSO credential strongly |
| Centralized control | Complex to implement securely |

**SSO protocols:**

| Protocol | Description | Use Case |
|----------|-------------|----------|
| SAML | XML-based, enterprise SSO | Enterprise web apps |
| OAuth 2.0 | Authorization delegation | API access, "Login with..." |
| OpenID Connect | Identity layer on OAuth | Modern authentication |
| Kerberos | Ticket-based, Windows | On-premises Windows |

**SAML flow:**

| Step | Action |
|------|--------|
| 1 | User tries to access SP |
| 2 | SP redirects to IdP |
| 3 | User authenticates to IdP |
| 4 | IdP creates assertion (token) |
| 5 | User redirected back to SP with assertion |

**OAuth vs OIDC:**

| Aspect | OAuth 2.0 | OpenID Connect |
|--------|-----------|----------------|
| Purpose | Authorization | Authentication |
| Provides | Access token | ID token + access token |
| Use case | "App can access your data" | "Login with Google" |

---

### Activity F: Federation - Answers

| Term | Definition |
|------|------------|
| Federation | Trust relationship for identity sharing |
| Trust relationship | Agreement to accept each other's authentication |
| IdP | Issues and vouches for identities |
| Relying Party | Accepts federated identities |
| Claims | Attributes about user (name, email, groups) |

**Use cases:**

| Scenario | How Federation Helps |
|----------|---------------------|
| Acquisition | Use existing IdP for both companies |
| Partner access | Partners use their own IdP |
| Cloud services | Corporate IdP for SaaS apps |
| "Login with..." | Social IdP for consumer apps |

---

### Activity G: Authentication Protocols - Answers

| Protocol | Port | Transport | Use Case |
|----------|------|-----------|----------|
| RADIUS | 1812/1813 | UDP | VPN, wireless |
| TACACS+ | 49 | TCP | Network devices |
| Kerberos | 88 | TCP/UDP | Windows domains |
| LDAP | 389 | TCP | Directory queries |
| LDAPS | 636 | TCP | Secure directory |

**RADIUS vs TACACS+:**

| Aspect | RADIUS | TACACS+ |
|--------|--------|---------|
| Protocol | UDP | TCP |
| Encryption | Password only | Full packet |
| AAA separation | Combined | Separated |
| Primary use | Network access | Device admin |
| Vendor | Open standard | Cisco |

**Kerberos flow:**

| Step | Action |
|------|--------|
| 1 | User authenticates, gets TGT |
| 2 | User presents TGT to get service ticket |
| 3 | User presents service ticket to access resource |
| 4 | Resource validates ticket, grants access |

---

### Activity H: PAM - Answers

| Account Type | Examples | Risk |
|--------------|----------|------|
| Local admin | .\Administrator | High |
| Domain admin | Domain Admins group | Critical |
| Service accounts | SQL service, backup | High |
| Root | Unix root | Critical |
| Database admin | DBA accounts | High |
| Cloud admin | AWS root, Azure Global Admin | Critical |

**PAM capabilities:**

| Capability | Description |
|------------|-------------|
| Password vaulting | Secure storage, auto-rotation |
| Session recording | Video of admin sessions |
| Just-in-time | Temporary elevated access |
| Rotation | Automatic password changes |
| Approval workflows | Require authorization |
| Break-glass | Emergency access procedures |

**2 AM scenario:**

| Step | Action |
|------|--------|
| 1 | Admin requests emergency access in PAM |
| 2 | PAM checks out credentials or provides JIT access |
| 3 | Session is recorded |
| 4 | Access auto-expires after time limit |

---

### Activity I: Account Lifecycle - Answers

**Why timely deprovisioning is critical:** Delayed deprovisioning allows former employees to access systems, steal data, or cause damage after termination.

---

### Activity J: Identity Governance - Answers

**Separation of duties:**

| Role 1 | Role 2 | Why Separate |
|--------|--------|--------------|
| Developer | Deployer | Prevent unauthorized code changes |
| Requester | Approver | Prevent self-approval |
| Accountant | Auditor | Prevent fraud concealment |
| Security admin | System admin | Checks and balances |

---

### Activity K: Directory Services - Answers

**LDAP DN:**

| Component | Meaning | Value |
|-----------|---------|-------|
| CN | Common Name | John Smith |
| OU | Organizational Unit | Sales, Users |
| DC | Domain Component | company, com |

---

### Activity L: Identity Attacks - Answers

| Attack | Target | Indicator | Prevention |
|--------|--------|-----------|------------|
| Credential stuffing | Accounts with reused passwords | Many failures, varied usernames | Unique passwords, MFA |
| Password spraying | Avoid lockout | Few failures per account, many accounts | Detect pattern, MFA |
| Golden ticket | Kerberos TGT | Unlimited access, long validity | Protect KRBTGT, monitor |
| Pass-the-hash | NTLM hashes | Lateral movement | Credential Guard, MFA |
| Kerberoasting | Service account passwords | SPN requests | Strong service passwords |
| LDAP injection | Directory queries | Unusual queries | Input validation |

**Scenario 1 (50 lockouts):** Password spraying attack—attacker trying common passwords across many accounts.

**Scenario 2 (one IP, same password):** Password spraying—testing one password against many accounts to avoid lockout thresholds.

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Implementing MFA**

**Recommended factors:**
- Authenticator app (TOTP) for most users
- Hardware keys (FIDO2) for admins
- Push notifications for convenience

**Rollout strategy:**
1. Start with IT and executives (pilot)
2. Communicate benefits (security + SSO convenience)
3. Provide clear instructions and support
4. Phase by department
5. Set deadline with grace period
6. Offer hardware tokens for users without smartphones

---

**Scenario 2: Terminated employee accessed email**

**What went wrong:**
- Account not disabled immediately
- No revocation of active sessions
- Remote access not terminated

**Process fix:**
- Immediate account disable upon HR notification
- Terminate all active sessions
- Disable VPN/remote access
- Change shared passwords
- Automate with HR system integration

---

**Scenario 3: 15 different application passwords**

**Solution:** Implement SSO with SAML or OIDC

**Security considerations:**
- Strong MFA on SSO credential
- Monitor for anomalous access
- Session timeout policies
- SSO becomes single point of failure—protect it
- Not all apps may support SSO (legacy)

---

## Key Exam Tips

1. **Authentication factors:** Know, Have, Are (plus location, behavior)

2. **True MFA:** Must be different factor TYPES (password + PIN = NOT MFA)

3. **FAR:** False acceptance (lets wrong person in)
   **FRR:** False rejection (blocks right person)

4. **TOTP:** Time-based, 30-second codes
   **HOTP:** Counter-based, event-driven

5. **SAML:** Enterprise SSO, XML, assertion-based
   **OAuth:** Authorization, access tokens
   **OIDC:** Authentication layer on OAuth

6. **RADIUS:** UDP, password encrypted, AAA combined
   **TACACS+:** TCP, full encryption, AAA separated

7. **Kerberos:** Ticket-based, TGT from KDC, port 88

8. **PAM:** Privileged accounts, vaulting, JIT access, session recording

9. **Account lifecycle:** Provision → Use → Modify → Deprovision

10. **Federation:** Trust between organizations, IdP vouches for identity

---

## Common Mistakes to Avoid

❌ Thinking password + PIN is MFA (both are "something you know")

❌ Confusing authentication (who) with authorization (what)

❌ Thinking RADIUS encrypts everything (only password)

❌ Confusing OAuth (authorization) with authentication

❌ Forgetting to revoke sessions when disabling accounts

❌ Not understanding that lower CER = better biometric system

---

**Congratulations on completing Lab 19!**

Identity and Access Management is foundational—every security role deals with IAM.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 19: Identity and Access Management - Solution Guide*