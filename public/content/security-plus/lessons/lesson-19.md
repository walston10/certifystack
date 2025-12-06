# Lesson 19: Identity and Access Management

**Estimated Time:** 30-35 minutes  
**Domain:** 3.0 Security Architecture (18% of exam)  
**Exam Objectives Covered:** 3.3 - Compare and contrast concepts and strategies to protect data

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain authentication factors and multi-factor authentication (MFA)
- Compare authentication methods including passwords, tokens, and biometrics
- Describe Single Sign-On (SSO) and its security implications
- Explain federation and identity providers
- Compare authentication protocols (RADIUS, TACACS+, Kerberos, LDAP, SAML, OAuth, OIDC)
- Describe Privileged Access Management (PAM) concepts
- Explain account policies and lifecycle management
- Apply least privilege and separation of duties principles

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Identity and Access Management" (15 min)
- **PowerCert:** "Authentication Protocols Explained" (12 min)
- **Sunny Classroom:** "Kerberos Authentication" (10 min)

---

## Introduction

In 2020, Twitter suffered an embarrassing breach when attackers gained access to internal admin tools and hijacked high-profile accounts including Barack Obama, Elon Musk, and Apple. The attackers didn't exploit a technical vulnerability—they socially engineered Twitter employees to hand over credentials. Once inside, weak internal access controls allowed access to powerful admin functions.

The Twitter breach exposed a fundamental truth: identity is the new perimeter. In a world of cloud services, remote work, and interconnected systems, controlling who can access what has become the central security challenge. Traditional network perimeters matter less when users access resources from anywhere on any device.

Identity and Access Management (IAM) answers three critical questions: Who are you (authentication)? What can you access (authorization)? What did you do (accounting)? Get these wrong, and attackers walk through the front door with legitimate credentials.

This lesson covers the mechanisms that verify identity, the protocols that communicate identity across systems, and the controls that ensure appropriate access. From passwords to biometrics, from RADIUS to OAuth, you'll understand how modern identity systems work and how to implement them securely.

---

## Authentication Factors

Proving identity through different types of evidence.

### The Three Classic Factors

**Something You Know**
- Passwords, passphrases
- PINs
- Security questions
- Pattern locks

**Something You Have**
- Smart cards
- Hardware tokens (RSA, YubiKey)
- Mobile phone (SMS, authenticator app)
- ID badge

**Something You Are**
- Fingerprint
- Facial recognition
- Iris/retina scan
- Voice recognition

### Additional Factors

**Somewhere You Are (Location)**
- GPS location
- IP address geolocation
- Network location (internal vs. external)
- Known/trusted device

**Something You Do (Behavior)**
- Typing patterns (keystroke dynamics)
- Mouse movement patterns
- Walking gait
- Usage patterns

### Factor Comparison

| Factor | Example | Pros | Cons |
|--------|---------|------|------|
| Knowledge | Password | Familiar, no hardware | Can be shared, stolen, forgotten |
| Possession | Token | Harder to steal remotely | Can be lost, stolen physically |
| Inherence | Fingerprint | Can't forget, hard to share | False accept/reject, privacy |
| Location | GPS | Contextual security | Can be spoofed, privacy |
| Behavior | Typing pattern | Continuous, invisible | Accuracy varies, learning curve |

---

## Multi-Factor Authentication (MFA)

Combining multiple factors for stronger authentication.

### What Qualifies as MFA

**MFA requires:** Two or more DIFFERENT factor types

**Valid MFA examples:**
- Password (knowledge) + authenticator app (possession)
- Fingerprint (inherence) + PIN (knowledge)
- Smart card (possession) + PIN (knowledge)

**NOT MFA:**
- Password + security question (both knowledge)
- Fingerprint + facial recognition (both inherence)
- Two passwords (both knowledge)

### Common MFA Methods

**SMS/Voice OTP:**
- Code sent via text or call
- Something you have (phone)
- Weaknesses: SIM swapping, interception
- Better than nothing, but not recommended for high-value

**Authenticator Apps (TOTP):**
- Time-based One-Time Password
- Apps: Google Authenticator, Microsoft Authenticator, Authy
- 6-digit code changes every 30 seconds
- More secure than SMS

**Push Notifications:**
- Approve/deny prompt on mobile device
- Easier than entering codes
- Risk: push fatigue (auto-approving)

**Hardware Tokens:**
- Physical device generating codes
- RSA SecurID, YubiKey
- Most secure possession factor
- Higher cost, can be lost

**FIDO2/WebAuthn:**
- Passwordless authentication
- Hardware key or platform authenticator
- Phishing-resistant
- Modern standard

### MFA Bypass Attacks

**SIM Swapping:**
- Attacker convinces carrier to transfer number
- Receives SMS codes
- Targets SMS-based MFA

**Push Fatigue:**
- Flood victim with push requests
- Victim approves to stop notifications
- Targets push-based MFA

**Real-Time Phishing:**
- Attacker proxies login page
- Captures and uses MFA code immediately
- Targets TOTP

**Mitigation:**
- Use phishing-resistant MFA (FIDO2)
- Number matching for push (user enters code from login screen)
- Hardware tokens for high-value accounts

---

## Authentication Methods

Specific technologies for proving identity.

### Passwords and Passphrases

**Password best practices:**
- Minimum 12+ characters
- Complexity helps but length matters more
- No reuse across sites
- Password manager recommended

**Passphrase:**
- Multiple words strung together
- "correct horse battery staple"
- Easier to remember, harder to crack
- Length provides security

**Password storage (systems):**
- Never store plaintext
- Hash with salt (bcrypt, Argon2, scrypt)
- Salt prevents rainbow table attacks

### One-Time Passwords (OTP)

**HOTP (HMAC-based OTP):**
- Counter-based
- Code valid until used
- Counter increments on each use
- Can get out of sync

**TOTP (Time-based OTP):**
- Time-based (30-second windows)
- More common than HOTP
- Google Authenticator, Microsoft Authenticator
- Requires synchronized clocks

**How TOTP works:**
```
Secret key + Current time → HMAC → 6-digit code
                 │
                 └── 30-second intervals
```

### Hardware Tokens

**RSA SecurID:**
- Displays changing code
- Used with PIN
- Hardware device

**YubiKey:**
- USB/NFC device
- Multiple protocols (FIDO2, OTP, smart card)
- Touch to authenticate
- Phishing-resistant

### Biometrics

**Types:**
- **Fingerprint:** Common, fast, mature
- **Facial recognition:** Convenient, can be fooled by photos
- **Iris scan:** Very accurate, specialized hardware
- **Retina scan:** Even more accurate, invasive
- **Voice recognition:** Works over phone, affected by illness

**Biometric measurements:**

**FAR (False Acceptance Rate):**
- Unauthorized user accepted
- Security concern
- Lower is better

**FRR (False Rejection Rate):**
- Authorized user rejected
- Usability concern
- Lower is better

**CER (Crossover Error Rate):**
- Point where FAR = FRR
- Used to compare biometric systems
- Lower CER = better overall accuracy

```
Error Rate
    │
    │   FRR
    │    \
    │     \    FAR
    │      \  /
    │       \/  ← CER (Crossover Error Rate)
    │       /\
    │      /  \
    │     /    \
    └─────────────── Sensitivity
```

### Smart Cards

**How they work:**
- Embedded microchip
- Contains certificate and private key
- Requires PIN (two-factor)
- Common: PIV, CAC (government)

**Uses:**
- Windows login (certificate-based)
- Physical access (badge)
- Email encryption/signing

---

## Single Sign-On (SSO)

One authentication for multiple applications.

### How SSO Works

**Without SSO:**
```
User → Login → App 1
User → Login → App 2
User → Login → App 3
(Separate credentials for each)
```

**With SSO:**
```
User → Login → Identity Provider
               ↓
        Token/Assertion issued
               ↓
    ┌──────────┼──────────┐
    ↓          ↓          ↓
  App 1      App 2      App 3
(All accept token from IdP)
```

### SSO Benefits

**For users:**
- Single credential to remember
- Seamless access to multiple apps
- Reduced password fatigue

**For organizations:**
- Centralized authentication
- Easier to enforce policies (MFA)
- Faster onboarding/offboarding
- Reduced help desk calls

### SSO Risks

**Single point of failure:**
- IdP down = no access to anything
- Must be highly available

**Single point of compromise:**
- Compromise SSO credential = access to everything
- MFA essential
- Must protect IdP heavily

**Vendor lock-in:**
- Dependent on IdP provider
- Migration can be complex

### SSO Best Practices

- Strong MFA on SSO accounts
- Monitor for suspicious SSO activity
- Limit session duration
- Require re-authentication for sensitive actions
- High availability for IdP

---

## Federation

Trust relationships between identity providers.

### Federation Concepts

**Identity Provider (IdP):**
- Authenticates users
- Issues tokens/assertions
- Maintains user directory

**Service Provider (SP):**
- Relies on IdP for authentication
- Accepts tokens from trusted IdP
- Provides the actual service

**Federation:**
- Trust relationship between IdP and SP
- Cross-organizational authentication
- User authenticated by home organization, accesses remote service

### Federation Example

```
┌────────────────────────────────────────────────────────┐
│                    Company A (IdP)                      │
│                    (Your employer)                      │
│ ┌──────────────────────────────────────────────────┐  │
│ │              Active Directory                      │  │
│ │              + ADFS/Azure AD                       │  │
│ └──────────────────────────────────────────────────┘  │
└────────────────────────┬───────────────────────────────┘
                         │ Trust
                         ↓
┌────────────────────────────────────────────────────────┐
│                    Company B (SP)                       │
│                 (Partner application)                   │
│ ┌──────────────────────────────────────────────────┐  │
│ │           Partner Portal                           │  │
│ │           (Trusts Company A's IdP)                │  │
│ └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘

User logs in at Company A, gets token, accesses Company B
```

### Federation Benefits

- No separate accounts at each organization
- Users use home credentials
- Centralized control remains with home org
- B2B integration without credential sharing

---

## Authentication Protocols

Protocols for communicating identity across systems.

### RADIUS

**Remote Authentication Dial-In User Service**

**Port:** UDP 1812 (authentication), 1813 (accounting)

**Purpose:** Centralized AAA (Authentication, Authorization, Accounting)

**Common uses:**
- Wireless 802.1X authentication
- VPN authentication
- Network device authentication

**How it works:**
```
Client → Access Point → RADIUS Server → User Database
         (authenticator)                 (AD, LDAP)
```

**Characteristics:**
- Encrypts only password (not entire packet)
- UDP (less reliable)
- Widely supported
- Client-server model

---

### TACACS+

**Terminal Access Controller Access-Control System Plus**

**Port:** TCP 49

**Purpose:** AAA for network devices (Cisco-originated)

**Common uses:**
- Router/switch authentication
- Firewall administration
- Network device management

**TACACS+ vs. RADIUS:**

| Feature | RADIUS | TACACS+ |
|---------|--------|---------|
| Transport | UDP | TCP |
| Encryption | Password only | Entire packet |
| AAA separation | Combined | Separate |
| Primary use | User access (VPN, wireless) | Device admin |
| Standard | Open | Cisco proprietary |

**When to use:**
- RADIUS: User authentication (VPN, wireless)
- TACACS+: Network device administration

---

### Kerberos

**Purpose:** Authentication protocol for trusted environments

**Port:** 88

**Used by:** Active Directory (primary authentication)

**Key concepts:**
- **KDC (Key Distribution Center):** Issues tickets
- **TGT (Ticket Granting Ticket):** Proves identity to KDC
- **Service Ticket:** Proves identity to specific service
- **Realm:** Kerberos administrative domain

**How Kerberos works:**
```
1. User authenticates to KDC
   User → [Password] → KDC
                       ↓
2. KDC issues TGT
   User ← [TGT] ← KDC

3. User requests service ticket
   User → [TGT + Service Request] → KDC
                                    ↓
4. KDC issues service ticket
   User ← [Service Ticket] ← KDC

5. User presents service ticket to server
   User → [Service Ticket] → Server
   
6. Server validates and grants access
```

**Benefits:**
- Password never sent over network (after initial auth)
- Tickets have limited lifetime
- Mutual authentication possible
- Single sign-on within realm

**Vulnerabilities:**
- **Pass-the-ticket:** Stolen ticket reused
- **Golden ticket:** Forged TGT with domain admin access
- **Kerberoasting:** Extract service account hashes

---

### LDAP/LDAPS

**Lightweight Directory Access Protocol**

**Ports:** 389 (LDAP), 636 (LDAPS - secure)

**Purpose:** Access and manage directory services

**Common uses:**
- Query Active Directory
- User authentication
- Address book lookups

**LDAP structure:**
```
dc=company,dc=com
    │
    ou=Users
    │   │
    │   cn=John Smith
    │   cn=Jane Doe
    │
    ou=Groups
        │
        cn=Administrators
        cn=Sales
```

**Security:**
- LDAP: Cleartext (don't use)
- LDAPS: TLS encrypted (use this)
- StartTLS: Upgrade connection to TLS

---

### SAML

**Security Assertion Markup Language**

**Purpose:** XML-based SSO and federation

**Components:**
- **Identity Provider (IdP):** Authenticates users
- **Service Provider (SP):** Relies on IdP
- **Assertion:** XML document with authentication info

**SAML flow:**
```
1. User accesses SP
   User → SP: "I want access"
   
2. SP redirects to IdP
   SP → User: "Authenticate with IdP"
   
3. User authenticates at IdP
   User → IdP: Credentials
   
4. IdP issues SAML assertion
   IdP → User: SAML Assertion (signed XML)
   
5. User presents assertion to SP
   User → SP: SAML Assertion
   
6. SP validates and grants access
   SP → User: Access granted
```

**Use cases:**
- Enterprise SSO
- Cloud application access
- B2B federation

---

### OAuth 2.0

**Purpose:** Authorization (not authentication)

**Common use:** "Sign in with Google/Facebook"

**What OAuth does:**
- Grants limited access to resources
- Without sharing credentials
- Delegated authorization

**OAuth roles:**
- **Resource Owner:** User who owns data
- **Client:** Application requesting access
- **Authorization Server:** Issues tokens
- **Resource Server:** Hosts protected resources

**OAuth flow (simplified):**
```
1. User wants app to access their data
2. App redirects to authorization server
3. User authenticates and approves
4. Authorization server issues access token
5. App uses token to access resources
6. Resource server validates token, provides data
```

**Important:** OAuth is for AUTHORIZATION, not authentication. It grants access, doesn't prove identity.

---

### OpenID Connect (OIDC)

**Purpose:** Authentication layer on top of OAuth 2.0

**What OIDC adds:**
- ID Token (JWT with user info)
- UserInfo endpoint
- Standardized user claims

**OAuth vs. OIDC:**
- OAuth: "Allow app to access my photos"
- OIDC: "Prove I am who I say I am"

**ID Token contains:**
- Subject (user ID)
- Issuer (IdP)
- Audience (client app)
- Expiration
- Authentication time

**Common use:** "Log in with Google" (authentication, not just authorization)

---

### Protocol Comparison

| Protocol | Purpose | Port | Common Use |
|----------|---------|------|------------|
| RADIUS | AAA | UDP 1812/1813 | VPN, wireless |
| TACACS+ | AAA | TCP 49 | Network devices |
| Kerberos | Authentication | 88 | Active Directory |
| LDAP/LDAPS | Directory access | 389/636 | AD queries |
| SAML | SSO/Federation | N/A (HTTP) | Enterprise SSO |
| OAuth 2.0 | Authorization | N/A (HTTP) | API access |
| OIDC | Authentication | N/A (HTTP) | Web login |

---

## Privileged Access Management (PAM)

Controlling and monitoring privileged accounts.

### Why PAM Matters

**Privileged accounts:**
- Domain administrators
- Root/system accounts
- Service accounts
- Application admins
- Database admins

**Risks:**
- High-value targets for attackers
- Can cause significant damage if compromised
- Often shared, poorly managed
- Difficult to audit

### PAM Components

**Password Vaulting:**
- Secure storage of privileged credentials
- Check-out/check-in process
- Automatic password rotation
- No one knows actual passwords

**Session Management:**
- Monitor privileged sessions
- Record for audit
- Limit session duration
- Real-time intervention

**Just-in-Time (JIT) Access:**
- No standing privileges
- Access granted when needed
- Automatically revoked after
- Reduces attack window

**Privilege Elevation:**
- Request elevated access
- Approval workflow
- Time-limited elevation
- Audit trail

### PAM Best Practices

- Vault all privileged credentials
- Rotate passwords automatically
- Monitor and record sessions
- Implement JIT access
- Require MFA for privileged access
- Separate admin accounts from daily use
- Alert on anomalous privileged activity

---

## Account Management

Lifecycle management of user accounts.

### Account Lifecycle

```
┌─────────────┐
│  Creation   │ (Provisioning)
└──────┬──────┘
       ↓
┌─────────────┐
│   Active    │ (Normal use)
└──────┬──────┘
       ↓
┌─────────────┐
│  Modified   │ (Role changes, transfers)
└──────┬──────┘
       ↓
┌─────────────┐
│  Disabled   │ (Leave of absence, termination)
└──────┬──────┘
       ↓
┌─────────────┐
│  Deleted    │ (After retention period)
└─────────────┘
```

### Account Policies

**Password policies:**
- Minimum length (12+ characters)
- Complexity requirements
- History (prevent reuse)
- Maximum age (if required by compliance)
- Account lockout (after failed attempts)

**Account lockout:**
- Threshold (e.g., 5 failed attempts)
- Duration (e.g., 30 minutes)
- Counter reset (e.g., 15 minutes)
- Balance: security vs. denial of service

**Session policies:**
- Timeout (idle session termination)
- Maximum session duration
- Concurrent session limits

### Account Types

**User accounts:**
- Individual person
- Unique per user
- Subject to all policies

**Service accounts:**
- Used by applications
- Non-interactive
- Strong passwords, no expiration
- Minimal privileges

**Shared accounts:**
- Multiple people use same account
- AVOID—no accountability
- If required, extra monitoring

**Privileged accounts:**
- Administrative access
- Additional controls (PAM)
- MFA required
- Separate from daily account

### Provisioning and Deprovisioning

**Provisioning:**
- Create account
- Assign appropriate groups
- Grant necessary access
- Provide credentials securely
- Training/policy acknowledgment

**Deprovisioning (CRITICAL):**
- Immediate on termination
- Disable account first
- Remove access
- Recover company assets
- Transfer data ownership
- Archive for retention
- Delete after retention period

**Failure to deprovision:** Former employees retain access—major risk.

---

## Access Control Principles

Fundamental concepts for authorization.

### Least Privilege

**Concept:** Grant minimum permissions necessary to perform job function.

**Implementation:**
- Start with no access
- Add only what's needed
- Review and remove unused
- Role-based where possible

**Examples:**
- Accountant: Access to financial system, not HR
- Developer: Access to development environment, not production
- Help desk: Password reset, not domain admin

### Separation of Duties

**Concept:** Divide critical tasks so no single person controls entire process.

**Purpose:**
- Prevent fraud
- Reduce error impact
- Require collusion for abuse

**Examples:**
- Requesting purchase ≠ approving purchase
- Writing code ≠ deploying code
- Creating accounts ≠ assigning privileges

### Need to Know

**Concept:** Access only information necessary for current task.

**Beyond least privilege:**
- Even if you have clearance
- Must have need for specific information
- Just because you CAN doesn't mean you SHOULD

---

## Key Exam Tips

🎯 **Authentication factors:** Knowledge (password), Possession (token), Inherence (biometric). MFA requires different factor TYPES.

🎯 **TOTP vs. HOTP:** TOTP is time-based (30 seconds), HOTP is counter-based.

🎯 **Biometric rates:** FAR (false accept—security), FRR (false reject—usability), CER (crossover—comparison point).

🎯 **SSO risk:** Single point of compromise—protect with MFA.

🎯 **RADIUS vs. TACACS+:** RADIUS for user access (VPN, wireless). TACACS+ for device admin. TACACS+ encrypts entire packet.

🎯 **Kerberos:** Ticket-based. KDC issues TGT, then service tickets. Port 88.

🎯 **LDAP vs. LDAPS:** LDAP cleartext (389), LDAPS encrypted (636). Always use LDAPS.

🎯 **SAML:** XML-based SSO/federation. IdP authenticates, SP relies on assertion.

🎯 **OAuth:** Authorization (not authentication). Grants access without sharing credentials.

🎯 **OIDC:** Authentication on top of OAuth. Adds ID token.

🎯 **PAM:** Password vaulting, session recording, JIT access for privileged accounts.

🎯 **Least privilege:** Minimum necessary access. Default deny.

---

## Key Takeaways

- [ ] MFA requires two or more different factor types (knowledge, possession, inherence)
- [ ] TOTP generates time-based codes; HOTP uses counter-based codes
- [ ] Biometric CER (Crossover Error Rate) is where FAR equals FRR—lower is better
- [ ] SSO provides convenience but creates single point of compromise—MFA essential
- [ ] Federation enables cross-organization authentication through trusted IdPs
- [ ] RADIUS is commonly used for VPN and wireless; TACACS+ for network device administration
- [ ] Kerberos uses tickets (TGT, service tickets) and is core to Active Directory
- [ ] LDAPS (port 636) should always be used instead of cleartext LDAP (port 389)
- [ ] SAML provides XML-based SSO; OAuth handles authorization; OIDC adds authentication to OAuth
- [ ] PAM controls privileged access through vaulting, session management, and JIT access
- [ ] Least privilege grants minimum necessary access; separation of duties prevents single-person control
- [ ] Account deprovisioning must be immediate on termination to prevent unauthorized access

---

## Check Your Understanding

**1. An employee logs in with their password and receives a code via SMS that they must enter. Is this MFA? What if they used a fingerprint instead of the SMS code?**

<details>
<summary>Show Answer</summary>
<strong>Password + SMS Code = Yes, this is MFA</strong>

**Factors involved:**
- Password = Something you know (knowledge)
- SMS code = Something you have (possession - phone)

Two different factor types = valid MFA

---

<strong>Password + Fingerprint = Yes, also MFA</strong>

**Factors involved:**
- Password = Something you know (knowledge)
- Fingerprint = Something you are (inherence)

Two different factor types = valid MFA

---

<strong>What would NOT be MFA:</strong>

- Password + security question = Both knowledge
- Fingerprint + facial recognition = Both inherence
- SMS code + authenticator app = Both possession

**Key principle:** MFA requires DIFFERENT factor types, not just multiple credentials.

---

<strong>SMS code considerations:</strong>

While SMS is technically MFA (possession), it's weaker than other methods:
- SIM swapping attacks
- SS7 interception
- Phone number porting

Better alternatives:
- Authenticator apps (TOTP)
- Hardware tokens (YubiKey)
- Push notifications with number matching
- FIDO2/WebAuthn (phishing-resistant)
</details>

**2. Compare RADIUS and TACACS+. When would you use each?**

<details>
<summary>Show Answer</summary>
<strong>RADIUS (Remote Authentication Dial-In User Service):</strong>

| Attribute | Detail |
|-----------|--------|
| Port | UDP 1812/1813 |
| Encryption | Password only |
| AAA | Combined |
| Standard | Open (RFC) |

**Use for:**
- VPN authentication
- Wireless (802.1X)
- Network access (NAC)
- User authentication

---

<strong>TACACS+ (Terminal Access Controller Access-Control System Plus):</strong>

| Attribute | Detail |
|-----------|--------|
| Port | TCP 49 |
| Encryption | Entire packet |
| AAA | Separate |
| Standard | Cisco proprietary |

**Use for:**
- Router/switch administration
- Firewall management
- Network device access
- Command authorization

---

<strong>Key differences:</strong>

**1. Encryption:**
- RADIUS: Only encrypts password
- TACACS+: Encrypts entire packet (more secure)

**2. Transport:**
- RADIUS: UDP (less reliable)
- TACACS+: TCP (reliable delivery)

**3. AAA separation:**
- RADIUS: Authentication + Authorization combined
- TACACS+: Each A is separate (granular control)

**4. Command authorization:**
- RADIUS: Limited
- TACACS+: Per-command authorization possible

---

<strong>Decision framework:</strong>

```
User needs VPN/Wireless access? → RADIUS
Admin needs device management? → TACACS+
Need command-level authorization? → TACACS+
Using Cisco devices? → TACACS+ (or RADIUS)
Open standard required? → RADIUS
```

**Common deployment:**
- RADIUS: User-facing authentication
- TACACS+: Administrative access to network infrastructure
</details>

**3. Explain how Kerberos authentication works in an Active Directory environment.**

<details>
<summary>Show Answer</summary>
<strong>Kerberos Overview:</strong>

**Port:** 88
**Purpose:** Ticket-based authentication for AD

**Key components:**
- **KDC (Key Distribution Center):** Domain controller
- **TGT (Ticket Granting Ticket):** Proof of identity
- **Service Ticket:** Access to specific service
- **Realm:** AD domain

---

<strong>Authentication Process:</strong>

**Step 1: Initial Authentication (AS Exchange)**
```
User logs in with password
       │
       ▼
User → [Encrypted request] → KDC
       (Proves knows password)
       
KDC validates credentials
       │
       ▼
KDC → [TGT + Session Key] → User
       (Encrypted with user's password)
```

User decrypts with password, obtains TGT.

**Step 2: Request Service Ticket (TGS Exchange)**
```
User wants to access file server
       │
       ▼
User → [TGT + Service Request] → KDC
       (Proves has valid TGT)
       
KDC issues service ticket
       │
       ▼
KDC → [Service Ticket] → User
       (Encrypted for file server)
```

**Step 3: Access Service**
```
User → [Service Ticket] → File Server
       
File Server validates ticket
       │
       ▼
File Server → [Access Granted] → User
```

---

<strong>Key Security Features:</strong>

**1. Password never sent over network:**
- After initial auth, tickets used
- Reduces exposure

**2. Limited ticket lifetime:**
- TGT expires (typically 10 hours)
- Service tickets expire (typically 10 hours)
- Reduces window for theft

**3. Mutual authentication:**
- Server can prove identity too
- Prevents impersonation

---

<strong>Kerberos Attacks:</strong>

| Attack | Description |
|--------|-------------|
| Pass-the-ticket | Steal and reuse ticket |
| Golden ticket | Forge TGT with krbtgt hash |
| Silver ticket | Forge service ticket |
| Kerberoasting | Extract service account hashes |

**Defenses:**
- Protect krbtgt account
- Strong service account passwords
- Monitor for unusual ticket requests
- Limit ticket lifetimes
</details>

**4. A company wants to allow employees to use their corporate credentials to access a partner company's web application. What technology enables this and how does it work?**

<details>
<summary>Show Answer</summary>
<strong>Technology: Federation with SAML</strong>

**Setup:**
- Your company = Identity Provider (IdP)
- Partner company = Service Provider (SP)
- Trust relationship established between them

---

<strong>How Federation Works:</strong>

**Trust establishment (one-time setup):**
1. Exchange metadata between IdP and SP
2. IdP provides certificate for signing assertions
3. SP configures to trust IdP's assertions
4. Map attributes (username, groups, etc.)

---

<strong>Authentication Flow:</strong>

```
┌─────────────────────────────────────────────────────────┐
│ 1. Employee accesses partner application               │
│                                                         │
│    Employee → Partner App                               │
│               "I want access"                           │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 2. Partner app redirects to your IdP                   │
│                                                         │
│    Partner App → Employee                               │
│    "Authenticate with your company"                     │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 3. Employee authenticates at your IdP                  │
│                                                         │
│    Employee → Your IdP                                  │
│    (Corporate credentials + MFA)                        │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 4. IdP issues SAML assertion                           │
│                                                         │
│    Your IdP → Employee                                  │
│    (Signed XML with identity + attributes)              │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 5. Employee presents assertion to partner              │
│                                                         │
│    Employee → Partner App                               │
│    (SAML assertion)                                     │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│ 6. Partner validates and grants access                 │
│                                                         │
│    Partner App validates signature                      │
│    Checks assertion from trusted IdP                    │
│    Grants access based on attributes                    │
└─────────────────────────────────────────────────────────┘
```

---

<strong>Benefits:</strong>

- No separate credentials at partner
- Employees use familiar login
- Your company controls access (disable user = loses partner access)
- Partner doesn't manage your users
- Audit trail at your IdP
</details>

**5. What is the difference between OAuth 2.0 and OpenID Connect? Give an example of when each is used.**

<details>
<summary>Show Answer</summary>
<strong>OAuth 2.0:</strong>

**Purpose:** Authorization (delegated access)

**What it does:**
- Grants application access to resources
- WITHOUT sharing user credentials
- User approves specific permissions

**Example:**
```
Scenario: Photo printing app needs access to your Google Photos

1. You use PhotoPrint app
2. App asks: "Can I access your Google Photos?"
3. You're redirected to Google
4. You log in and approve: "PhotoPrint can view my photos"
5. Google gives PhotoPrint an access token
6. PhotoPrint uses token to get your photos
7. PhotoPrint never sees your Google password
```

**OAuth does NOT prove identity.** PhotoPrint knows it can access photos, but doesn't know WHO you are (could be any Google user who approved).

---

<strong>OpenID Connect (OIDC):</strong>

**Purpose:** Authentication (prove identity)

**What it does:**
- Proves who the user is
- Built on top of OAuth 2.0
- Adds ID token with user info

**Example:**
```
Scenario: Logging into a website with "Sign in with Google"

1. You click "Sign in with Google" on a website
2. Redirected to Google
3. You log in
4. Google returns ID token with:
   - Your user ID
   - Your email
   - Your name
   - When you authenticated
5. Website knows WHO you are
6. Website creates session for you
```

---

<strong>Key Difference:</strong>

| Aspect | OAuth 2.0 | OpenID Connect |
|--------|-----------|----------------|
| Purpose | Authorization | Authentication |
| Question answered | "Can app access resources?" | "Who is this user?" |
| Token | Access token | ID token + Access token |
| Use case | API access | Login/SSO |

---

<strong>Remember:</strong>

- **OAuth:** "Allow app to access my photos" (authorization)
- **OIDC:** "Prove I am john@example.com" (authentication)

OIDC builds on OAuth but adds the identity layer.
</details>

**6. A security audit finds that administrators use the same domain admin account for daily work. What are the risks and how should this be addressed?**

<details>
<summary>Show Answer</summary>
<strong>Risks of Using Admin Account for Daily Work:</strong>

**1. Increased exposure:**
- Admin credentials used constantly
- More opportunities for theft
- Email, browsing, all with admin rights

**2. Malware impact:**
- Malware runs with admin privileges
- Full domain compromise possible
- Ransomware with domain admin = disaster

**3. Accidental damage:**
- Typo affects entire domain
- No safety net
- Easy to make catastrophic mistakes

**4. Audit difficulty:**
- Can't distinguish admin vs. normal work
- Unclear what was intentional
- Compliance issues

**5. Lateral movement:**
- If workstation compromised, attacker has admin
- No need to escalate privileges
- Immediate domain access

---

<strong>Solutions:</strong>

**1. Separate accounts:**
```
Daily work: jsmith (standard user)
Admin work: jsmith-admin (domain admin)
```

Only use admin account for admin tasks.

**2. Privileged Access Workstations (PAW):**
- Dedicated workstation for admin work
- Hardened, no email/browsing
- Used only for administrative tasks

**3. Just-In-Time (JIT) access:**
- No standing admin privileges
- Request elevation when needed
- Automatically revoked after

**4. Privileged Access Management (PAM):**
- Vault admin credentials
- Check-out for use
- Session recording
- Automatic password rotation

**5. Tiered administration:**
```
Tier 0: Domain controllers (most privileged)
Tier 1: Servers
Tier 2: Workstations
```
Admin for one tier can't access others.

---

<strong>Implementation Steps:</strong>

1. Create separate admin accounts
2. Remove admin rights from daily accounts
3. Implement PAM solution
4. Deploy PAWs for Tier 0 access
5. Enable MFA for all admin accounts
6. Monitor privileged account usage
7. Regular access reviews
</details>

**7. Explain the concept of "least privilege" and provide three practical examples of how it would be implemented.**

<details>
<summary>Show Answer</summary>
<strong>Least Privilege Concept:</strong>

**Definition:** Grant only the minimum permissions necessary to perform a specific job function.

**Principle:** Default deny. Start with no access, add only what's required.

**Goal:** Reduce risk by limiting what any user, application, or process can do.

---

<strong>Example 1: Help Desk Technician</strong>

**Without least privilege:**
- Domain Admin rights (can do anything)
- Access to all servers
- Can read executive emails

**With least privilege:**
```
Permissions granted:
✓ Password reset for users
✓ Unlock accounts
✓ Create tickets
✓ View user account properties

Permissions denied:
✗ Domain admin
✗ Server access
✗ Email access
✗ Group membership changes
```

**Implementation:**
- Custom "Help Desk" AD group
- Delegated specific OU permissions
- No local admin on servers

---

<strong>Example 2: Database Application</strong>

**Without least privilege:**
- Service account has db_owner role
- Can modify schema, drop tables
- Access to all databases

**With least privilege:**
```
Permissions granted:
✓ SELECT, INSERT, UPDATE on app tables
✓ EXECUTE on required stored procedures

Permissions denied:
✗ DROP, CREATE, ALTER
✗ Access to other databases
✗ Access to system tables
```

**Implementation:**
- Custom database role
- Only required permissions
- Separate service account per app

---

<strong>Example 3: Cloud IAM Policy</strong>

**Without least privilege:**
```json
{
  "Effect": "Allow",
  "Action": "*",
  "Resource": "*"
}
```
Can do ANYTHING in AWS.

**With least privilege:**
```json
{
  "Effect": "Allow",
  "Action": [
    "s3:GetObject",
    "s3:PutObject"
  ],
  "Resource": "arn:aws:s3:::my-app-bucket/*"
}
```
Can only read/write to specific bucket.

---

<strong>Benefits:</strong>

- Reduces blast radius of compromise
- Limits insider threat damage
- Prevents accidental damage
- Easier audit (clear who can do what)
- Compliance requirement
</details>

**8. What is SSO and what are both its benefits and risks? How should the risks be mitigated?**

<details>
<summary>Show Answer</summary>
<strong>Single Sign-On (SSO):</strong>

**What it is:** One authentication grants access to multiple applications.

**How it works:**
1. User authenticates to Identity Provider (IdP)
2. IdP issues token/assertion
3. Token accepted by all configured applications
4. No re-authentication needed

---

<strong>Benefits:</strong>

**For Users:**
- One password to remember
- Seamless access
- Reduced login fatigue
- Better user experience

**For Organizations:**
- Centralized authentication
- Consistent security policies
- Easier MFA enforcement
- Faster onboarding
- Reduced help desk calls (password resets)
- Single point for offboarding

**For Security:**
- Fewer passwords = fewer to compromise
- Centralized monitoring
- Consistent policy enforcement
- Better visibility

---

<strong>Risks:</strong>

**1. Single point of failure:**
- IdP down = no access to anything
- Business impact is massive

**2. Single point of compromise:**
- One credential = all access
- Attacker gets SSO = gets everything
- High-value target

**3. Session management:**
- Long sessions = extended exposure
- Session hijacking affects all apps

**4. IdP trust:**
- All apps trust IdP
- IdP compromise = total breach

---

<strong>Mitigations:</strong>

**1. Strong MFA on SSO:**
```
Required: Password + Hardware Token/FIDO2
For all SSO-enabled accounts
Especially privileged users
```

**2. High availability IdP:**
- Redundant infrastructure
- Geographic distribution
- Tested failover

**3. Session controls:**
- Short session timeouts
- Re-authentication for sensitive actions
- Continuous validation

**4. Monitoring:**
- Anomaly detection on logins
- Impossible travel alerts
- Privileged access monitoring

**5. Conditional access:**
- Device compliance required
- Location restrictions
- Risk-based authentication

**6. IdP hardening:**
- Treat as crown jewel
- Privileged access controls
- Regular security assessments
</details>

**9. A user's biometric authentication keeps rejecting them despite being a legitimate user. What metric describes this issue, and how do you balance it against security?**

<details>
<summary>Show Answer</summary>
<strong>Metric: False Rejection Rate (FRR)</strong>

**Definition:** Rate at which legitimate users are incorrectly rejected.

**Also called:** Type I error, False Non-Match Rate

---

<strong>Related Metrics:</strong>

**False Acceptance Rate (FAR):**
- Unauthorized user incorrectly accepted
- Type II error
- Security risk

**Crossover Error Rate (CER):**
- Point where FAR = FRR
- Used to compare biometric systems
- Lower CER = better system

---

<strong>The Trade-off:</strong>

```
Sensitivity Setting
        │
        │   ← Higher sensitivity
        │     Lower FAR (more secure)
        │     Higher FRR (more rejections)
        │
        ├─── CER (balanced point)
        │
        │   ← Lower sensitivity  
        │     Higher FAR (less secure)
        │     Lower FRR (fewer rejections)
        │
        ▼
```

---

<strong>Balancing Security vs. Usability:</strong>

**High Security Needed (lower FAR priority):**
- Data center access
- Financial systems
- Accept more false rejections
- Use secondary authentication for rejected

**High Usability Needed (lower FRR priority):**
- General office access
- Frequent authentication
- Accept some security trade-off
- Combine with other factors

---

<strong>Solutions for Frequent False Rejections:</strong>

**1. Re-enroll biometric:**
- Original enrollment may be poor quality
- Multiple samples
- Different conditions (angles, lighting)

**2. Adjust sensitivity:**
- Lower threshold (carefully)
- Combine with second factor

**3. Multiple biometric samples:**
- Multiple fingers enrolled
- Alternative if one fails

**4. Alternative authentication:**
- PIN backup
- Different biometric type
- Help desk override process

**5. Environmental factors:**
- Dirty sensor
- Injured finger
- Dry/wet skin
- Lighting for facial
- Illness affecting voice

---

<strong>Best Practice:</strong>

Don't rely solely on biometrics. Use as one factor with:
- PIN (knowledge)
- Badge (possession)

If biometric fails, other factor(s) still provide security.
</details>

**10. Explain account deprovisioning. Why is it critical, and what should happen when an employee is terminated?**

<details>
<summary>Show Answer</summary>
<strong>Account Deprovisioning:</strong>

**Definition:** Process of removing user access when no longer needed.

**Criticality:** Former employees with active accounts = insider threat without being inside.

---

<strong>Why It's Critical:</strong>

**1. Revenge/malicious actions:**
- Terminated employee angry
- Deletes data
- Steals intellectual property
- Sabotages systems

**2. Accidental access:**
- Former employee logs in out of habit
- Unintentional policy violation
- Data exposure

**3. Compliance:**
- Regulations require timely deprovisioning
- Audit findings for stale accounts
- Potential fines

**4. Resource waste:**
- Paying for unused licenses
- Consuming resources

---

<strong>Termination Deprovisioning Process:</strong>

**Immediate (within minutes):**
```
□ Disable AD account
□ Disable SSO access
□ Revoke VPN access
□ Disable email account
□ Disable remote access
□ Revoke badge/physical access
□ Kill active sessions
```

**Same day:**
```
□ Remove from all groups
□ Revoke cloud service access
□ Disable service accounts owned
□ Forward email (if appropriate)
□ Transfer file ownership
□ Revoke mobile device access
□ Remote wipe company devices
```

**Within week:**
```
□ Collect company assets (laptop, phone)
□ Archive mailbox
□ Archive files for legal hold
□ Document access that was removed
□ Notify relevant teams
```

**After retention period:**
```
□ Delete account
□ Remove from backup systems
□ Remove personal data per privacy requirements
```

---

<strong>Automation:</strong>

**Ideal:** HR system triggers automatic deprovisioning

```
HR marks termination → 
  Automated workflow:
    - Disable accounts
    - Remove access
    - Notify IT
    - Create ticket
    - Archive data
```

**Benefits:**
- No manual steps forgotten
- Immediate upon HR action
- Consistent process
- Audit trail

---

<strong>Common Failures:</strong>

| Failure | Risk |
|---------|------|
| Not disabled immediately | Window for malicious action |
| Forgot cloud accounts | Access remains |
| Didn't revoke VPN | Remote access continues |
| Badge not collected | Physical access |
| Shared account access | Former employee knows password |

**Prevention:** Checklist, automation, regular access reviews.
</details>

---

## Next Lesson Preview

In **Lesson 20: Access Control Models**, we'll explore different models for controlling access to resources including DAC, MAC, RBAC, ABAC, and rule-based access control.

---

✅ **Lesson 19 Complete**

**Progress:** 19 of 30 lessons complete (63.3%)

---

*Next up: Lesson 20 - Access Control Models*