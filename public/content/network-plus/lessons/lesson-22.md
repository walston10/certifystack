# Lesson 22: Authentication Methods

**Estimated Time:** 25-30 minutes  
**Domain:** Network Security (Domain 4.0)  
**Exam Objectives Covered:** 4.1 - Authentication and authorization

---

## Learning Objectives

By the end of this lesson, you will be able to:

- **Identify** the three authentication factors (something you know/have/are)
- **Explain** why multi-factor authentication (MFA) is critical for security
- **Compare** RADIUS and TACACS+ authentication protocols
- **Describe** how Kerberos uses tickets for authentication
- **Understand** LDAP's role in directory services
- **Differentiate** between authentication and authorization
- **Configure** 802.1X port-based network access control concepts

---

## Video Resources

**Watch these videos to reinforce the concepts:**

1. **Professor Messer - Authentication Methods** (14 min)  
   https://www.youtube.com/watch?v=aOhT_PPZDLA
   
2. **NetworkChuck - Multi-Factor Authentication Explained** (12 min)  
   https://www.youtube.com/watch?v=0mvCeNsTa1g

3. **PowerCert - RADIUS vs TACACS+** (8 min)  
   https://www.youtube.com/watch?v=aW8oWF20rMw

4. **Sunny Classroom - Kerberos Authentication** (10 min)  
   https://www.youtube.com/watch?v=5N242XcKAsM

5. **Professor Messer - 802.1X** (11 min)  
   https://www.youtube.com/watch?v=kmygPqozlyc

---

## Introduction

Imagine you're entering a top-secret government facility. At the first checkpoint, you provide a password (something you know). At the second, you scan your ID badge (something you have). At the third, you place your hand on a biometric scanner (something you are). **Only after passing all three checkpoints can you enter.**

**This is multi-factor authentication in action.**

Authentication is the foundation of security. Before you can protect resources, you need to know **who** is trying to access them. A weak authentication system is like a bank vault with a cardboard door - all your other security measures become worthless.

**The stakes are high:** 81% of data breaches involve stolen or weak passwords. Multi-factor authentication blocks 99.9% of automated attacks. Understanding authentication isn't just exam knowledge - it's essential for protecting modern networks.

**Why this matters for Network+ exam:** Authentication questions appear throughout Domain 4.0 (27% of exam). You'll see scenarios about RADIUS configurations, 802.1X setups, and authentication troubleshooting. Know the protocols, ports, and use cases cold.

---

## Authentication vs Authorization

**Before we dive in, let's clarify two terms that students constantly confuse:**

**Authentication** - Proving **who you are**  
*"Are you really John Smith?"*

**Authorization** - Determining **what you can access**  
*"What is John Smith allowed to do?"*

**Example:**
1. You enter username/password → **Authentication** (proving identity)
2. System checks: "John is allowed to access Sales folder but not HR folder" → **Authorization** (determining permissions)

**Think of it like airport security:**
- Showing your ID = Authentication (proving who you are)
- Your boarding pass determines which flight you can board = Authorization (what you can access)

**Authentication always comes first.** You can't authorize someone until you know who they are.

🎯 **Exam Tip:** Exam questions often mix these up intentionally. If a question asks about "verifying identity" - that's authentication. If it asks about "access permissions" - that's authorization.

---

## Authentication Factors

Authentication factors are the types of credentials used to prove identity. There are **three main categories:**

### Something You Know

**Examples:**
- Password
- PIN (Personal Identification Number)
- Passphrase
- Security questions ("What's your mother's maiden name?")

**Strengths:**
- Easy to implement
- No special hardware needed
- Easy to change if compromised

**Weaknesses:**
- Can be forgotten
- Can be guessed or cracked
- Can be shared or stolen
- Vulnerable to phishing and social engineering

**Password best practices:**
- **Minimum 12+ characters** (longer is stronger)
- **Mix of uppercase, lowercase, numbers, symbols**
- **No dictionary words** (use passphrases instead)
- **Unique per account** (don't reuse)
- **Password manager** to generate and store

### Something You Have

**Examples:**
- Smart card
- Security token (RSA SecurID)
- Key fob
- Mobile phone (for SMS codes or authenticator apps)
- Hardware security key (YubiKey)
- CAC (Common Access Card)

**Strengths:**
- Physical possession required
- Can't be guessed remotely
- More secure than passwords alone

**Weaknesses:**
- Can be lost or stolen
- Costs money to deploy
- May need battery or connectivity

**Common token types:**
- **Soft token** - App on phone (Google Authenticator, Microsoft Authenticator)
- **Hard token** - Physical device that generates codes
- **Push notification** - Approve login on phone

### Something You Are (Biometrics)

**Examples:**
- Fingerprint scan
- Facial recognition
- Retina/iris scan
- Voice recognition
- Hand geometry
- Behavioral biometrics (typing patterns, gait)

**Strengths:**
- Can't be forgotten or lost
- Difficult to fake (with modern systems)
- Convenient for users

**Weaknesses:**
- **False acceptance** (system accepts wrong person) - security risk
- **False rejection** (system rejects right person) - usability issue
- Can't change if compromised (you can't get new fingerprints!)
- Privacy concerns
- Expensive to implement

**Biometric error rates:**
- **FAR (False Acceptance Rate)** - How often system accepts impostor
- **FRR (False Rejection Rate)** - How often system rejects legitimate user
- **CER (Crossover Error Rate)** - Where FAR = FRR (lower is better)

---

## Multi-Factor Authentication (MFA)

**Definition:** Using **two or more** authentication factors from **different categories**.

**Also called:** Two-Factor Authentication (2FA) when using exactly two factors.

### Why MFA Matters

**Single-factor authentication (password only):**
- Attacker steals password → full access
- Attacker phishes password → full access
- Weak password → easy brute force

**Multi-factor authentication:**
- Attacker steals password → still needs second factor
- Blocks 99.9% of automated attacks
- Even weak passwords become much stronger

### What Counts as MFA?

**✅ This is MFA:**
- Password + SMS code (know + have)
- Smart card + PIN (have + know)
- Fingerprint + password (are + know)

**❌ This is NOT MFA:**
- Password + security question (both "something you know")
- Two different passwords (both same factor)
- Username + password (username isn't authentication)

**The factors must be from different categories to count as MFA.**

### Common MFA Methods

**1. SMS/Text Message**
- Code sent to phone number
- Easy to implement
- ⚠️ Vulnerable to SIM swapping attacks
- Being phased out for more secure methods

**2. Authenticator App**
- TOTP (Time-based One-Time Password)
- Generates codes on phone (Google Authenticator, Microsoft Authenticator)
- More secure than SMS
- Works offline

**3. Push Notification**
- App asks "Is this you trying to login?"
- Tap "Approve" or "Deny"
- Very user-friendly
- Vulnerable to "push fatigue" (attacker spams until user approves)

**4. Hardware Token**
- Physical device (YubiKey, RSA token)
- Most secure option
- Can't be phished
- Extra cost and management

🎯 **Exam Tip:** Know the three authentication factors cold. Exam loves to ask "Which of these is true MFA?" with tricky options like password + security question.

---

## Authentication Protocols

### RADIUS (Remote Authentication Dial-In User Service)

**Purpose:** Centralized authentication, authorization, and accounting (AAA) for network access.

**How it works:**
1. User tries to connect to network (VPN, wireless, etc.)
2. Network device (NAS - Network Access Server) forwards credentials to RADIUS server
3. RADIUS server checks credentials against database
4. RADIUS responds: Accept or Reject
5. If accepted, RADIUS sends back authorization info (VLAN assignment, time limits, etc.)

```
User → Wireless AP (NAS) → RADIUS Server → User Database
                                          (Active Directory, LDAP, etc.)
```

**Key characteristics:**
- **Protocol:** UDP (connectionless)
- **Ports:** 
  - 1812 (authentication and authorization)
  - 1813 (accounting)
  - Legacy: 1645 (auth), 1646 (acct) - still seen on exam
- **Encryption:** Encrypts only the **password**, not entire packet
- **Industry standard** (open protocol, not proprietary)

**Common use cases:**
- Wireless authentication (WPA2/WPA3 Enterprise)
- VPN authentication
- ISP dial-up (historically)
- Network device management

**AAA Functions:**
- **Authentication** - Who are you?
- **Authorization** - What can you access?
- **Accounting** - What did you do? (logging)

**Advantages:**
- Industry standard (works with all vendors)
- Centralized user management
- Detailed logging for compliance

**Limitations:**
- Only password encrypted (rest of packet in clear)
- UDP = less reliable
- Combines authentication and authorization in single process

### TACACS+ (Terminal Access Controller Access-Control System Plus)

**Purpose:** AAA protocol, primarily for network device administration.

**Key characteristics:**
- **Vendor:** Cisco proprietary (but widely supported)
- **Protocol:** TCP port 49 (connection-oriented, more reliable)
- **Encryption:** Encrypts **entire packet** (more secure than RADIUS)
- **AAA separation:** Authentication, authorization, and accounting are **separate processes**

**Why TCP matters:**
- Reliable delivery (packet loss detected and retransmitted)
- Better for interactive sessions (SSH to router)
- Connection-oriented feedback

**Why full packet encryption matters:**
- Username protected (RADIUS sends username in clear)
- Commands protected (useful for device administration)
- More secure overall

**Common use cases:**
- **Router and switch administration** (SSH/Telnet login)
- Network device configuration
- Privilege level assignment (which commands user can run)

### RADIUS vs TACACS+ Comparison

| Feature | RADIUS | TACACS+ |
|---------|--------|---------|
| **Protocol** | UDP | TCP |
| **Ports** | 1812, 1813 | 49 |
| **Encryption** | Password only | Full packet |
| **AAA** | Combined auth/authz | Separate AAA |
| **Vendor** | Open standard | Cisco proprietary |
| **Best for** | User access (wireless, VPN) | Device administration |
| **Accounting** | Extensive | Moderate |

**When to use what:**
- **User authentication (wireless, VPN)** → RADIUS
- **Network device management (router CLI)** → TACACS+
- **Need detailed logging** → RADIUS
- **Need granular command authorization** → TACACS+

🎯 **Exam Tip:** RADIUS = UDP, TACACS+ = TCP. RADIUS = partial encryption, TACACS+ = full encryption. Know the ports (1812/1813 for RADIUS, 49 for TACACS+).

---

## Kerberos

**Purpose:** Ticket-based authentication protocol for secure authentication in untrusted networks.

**Used by:** Windows Active Directory, MIT, many enterprise systems

**The problem Kerberos solves:**
- Passwords shouldn't be sent over network (even encrypted)
- Users shouldn't authenticate separately to each service
- Need mutual authentication (both parties verify each other)

**How Kerberos works (simplified):**

```
User wants to access File Server

1. User → KDC: "I'm John, here's my password"
2. KDC validates, sends back TGT (Ticket Granting Ticket)
3. User → KDC: "I want to access File Server" (shows TGT)
4. KDC sends Service Ticket for File Server
5. User → File Server: Here's my Service Ticket
6. File Server validates ticket, grants access

User never sends password across network after initial login!
```

**Key components:**

**KDC (Key Distribution Center)**
- Trusted third party that issues tickets
- Contains two services:
  - **AS (Authentication Server)** - Issues TGT
  - **TGS (Ticket Granting Service)** - Issues service tickets

**TGT (Ticket Granting Ticket)**
- Proof that user authenticated successfully
- Used to request service tickets
- Valid for ~10 hours typically
- Encrypted so only KDC can read it

**Service Ticket**
- Grants access to specific service (file server, email, etc.)
- Contains user identity and permissions
- Time-limited (prevents replay attacks)

**Key benefits:**
- **Single Sign-On (SSO)** - Log in once, access multiple services
- **Mutual authentication** - Server verifies user, user verifies server
- **No password on network** - Uses tickets instead
- **Time-based** - Tickets expire (prevents old ticket reuse)

**Kerberos details:**
- **Port:** 88 (TCP and UDP)
- **Default ticket lifetime:** 10 hours
- **Requires:** Time synchronization (within 5 minutes) - uses NTP
- **Encryption:** Various (AES, DES - AES preferred)

**Real-world example:**
You log into your Windows domain computer in the morning (authenticate to KDC). Throughout the day, you access file shares, email, intranet sites - all without re-entering password. Each access uses a different service ticket, all granted based on your initial TGT.

⚠️ **Critical requirement:** Kerberos requires all systems have synchronized time (within 5 minutes). If time is off, tickets will be rejected. This is why AD environments use NTP religiously.

🎯 **Exam Tip:** Know that Kerberos uses port 88 and requires time synchronization. Understand the basic flow: authenticate → get TGT → use TGT to get service tickets → access services.

---

## LDAP/LDAPS (Lightweight Directory Access Protocol)

**Purpose:** Access and manage directory services (databases of users, groups, devices, etc.)

**Most common implementation:** Microsoft Active Directory

**What is a directory service?**
Think of it like a phone book for network resources:
- Users (John Smith, email: john@company.com, department: Sales)
- Groups (Sales Team, IT Admins)
- Computers (DESKTOP-01, laptop-sales-05)
- Printers, shares, policies, etc.

**LDAP is the protocol used to query and update this directory.**

**LDAP vs LDAPS:**
- **LDAP** - Unencrypted, port 389
- **LDAPS** - Encrypted with SSL/TLS, port 636 (the "S" = Secure)

**Always use LDAPS** when possible - LDAP sends credentials in clear text!

**How LDAP is used:**
- User logs into workstation → System queries LDAP for user info
- Application needs to authenticate user → Checks against LDAP
- Admin needs list of all users → Queries LDAP directory

**LDAP structure:**
- Hierarchical tree structure
- **DN (Distinguished Name)** - Unique identifier

**Example DN:**
```
CN=John Smith,OU=Sales,DC=company,DC=com

CN = Common Name (John Smith)
OU = Organizational Unit (Sales department)
DC = Domain Component (company.com)
```

**Common LDAP operations:**
- **Bind** - Authenticate to directory
- **Search** - Query for entries
- **Add** - Create new entry
- **Modify** - Update existing entry
- **Delete** - Remove entry

**LDAP in authentication flow:**
1. User enters username/password
2. Application sends LDAP bind request to directory
3. Directory verifies credentials
4. If valid, returns user attributes (groups, permissions)
5. Application grants appropriate access

🎯 **Exam Tip:** Know ports - LDAP = 389, LDAPS = 636. Understand that LDAP is used to access directory services like Active Directory, not as a standalone authentication protocol.

---

## Single Sign-On (SSO)

**Definition:** Log in once, access multiple applications without re-authenticating.

**Examples:**
- Log into Windows → Automatically access email, file shares, intranet
- Log into Google → Access Gmail, Drive, Calendar without separate logins
- Corporate SSO → One login for 50+ different applications

**Benefits:**
- **User convenience** - Fewer passwords to remember
- **Security** - Users less likely to write down passwords
- **Productivity** - Less time spent logging in
- **Centralized management** - Disable one account, lose access to everything

**How SSO works:**
1. User authenticates to identity provider (IdP)
2. IdP creates authentication token/assertion
3. User presents token to applications
4. Applications trust IdP and grant access

**SSO Technologies:**

**SAML (Security Assertion Markup Language)**
- XML-based standard
- Common in enterprise SSO
- Used between different organizations (federated identity)

**OAuth 2.0**
- Authorization framework (not authentication!)
- "Login with Google" buttons
- Grants delegated access without sharing passwords

**OpenID Connect**
- Built on top of OAuth 2.0
- Adds authentication layer
- Modern standard for SSO

**Example scenario:**
Company uses Okta for SSO. Employee logs into Okta once in morning. Okta provides access to Office 365, Salesforce, Slack, Workday - all without additional logins. If employee leaves, admin disables Okta account and they lose access to everything instantly.

⚠️ **SSO risk:** If the SSO account is compromised, attacker gains access to all connected applications. This is why SSO accounts absolutely require MFA.

---

## 802.1X Port-Based Network Access Control

**Purpose:** Control network access at the port level - don't allow network access until authentication succeeds.

**Problem 802.1X solves:**
Without 802.1X, anyone who plugs into Ethernet port gets network access. With 802.1X, the port is blocked until user/device authenticates.

**802.1X Components:**

**1. Supplicant**
- The client trying to connect
- Software on user's device requesting access
- Built into Windows, macOS, Linux

**2. Authenticator**
- Network device controlling access (switch or wireless AP)
- Acts as gatekeeper for the port
- Passes authentication to server but doesn't make decision

**3. Authentication Server**
- Usually RADIUS server
- Makes the authentication decision (allow or deny)
- Stores credentials and policies

```
802.1X Flow:
Device (Supplicant) → Switch (Authenticator) → RADIUS (Auth Server)
                                                      ↓
                                              User Database
```

**Authentication process:**

1. Device connects to switch port
2. Port is in **unauthorized state** (no network access)
3. Supplicant sends identity to switch
4. Switch forwards to RADIUS server using RADIUS protocol
5. RADIUS challenges for credentials
6. Supplicant provides credentials (via EAP method)
7. RADIUS validates credentials
8. If valid, RADIUS tells switch to allow access
9. Port moves to **authorized state** (network access granted)
10. RADIUS can send VLAN assignment, ACLs, time limits

**EAP (Extensible Authentication Protocol)**
- Framework for authentication methods
- Carries authentication data between supplicant and server
- Multiple EAP types for different credential types

**Common EAP methods:**
- **EAP-TLS** - Certificate-based (most secure)
- **EAP-TTLS** - Tunneled TLS (server cert only)
- **PEAP** - Protected EAP (Microsoft's version)
- **EAP-FAST** - Cisco proprietary

**Use cases:**
- **Wired networks** - Authenticate users before granting switch port access
- **Wireless networks** - WPA2/WPA3 Enterprise uses 802.1X
- **NAC (Network Access Control)** - Check device compliance before access

**Benefits:**
- Port-level security (can't just plug in and access network)
- Centralized authentication (RADIUS)
- Dynamic VLAN assignment
- Can enforce device compliance

**Example scenario:**
Employee plugs laptop into conference room Ethernet jack. 802.1X prompts for credentials. Employee enters username/password. RADIUS verifies, assigns laptop to Employee VLAN, grants access. Visitor plugs in without credentials - port stays blocked.

🎯 **Exam Tip:** Remember the three components: Supplicant (client), Authenticator (switch/AP), Authentication Server (RADIUS). 802.1X is commonly used for WPA2/WPA3 Enterprise wireless security.

---

## Local vs Centralized Authentication

**Local Authentication:**
- Credentials stored on individual device
- Each device maintains its own user database
- User accounts must be created on each device

**Example:** Router with local username/password configured on the router itself.

**Advantages:**
- Simple for small environments
- Works even if network is down
- No additional infrastructure needed

**Disadvantages:**
- Doesn't scale (100 routers = 100 places to manage users)
- Password changes must be done on each device
- Difficult to audit
- No consistency across devices

**Centralized Authentication:**
- Credentials stored in central database (RADIUS, TACACS+, LDAP)
- All devices query central server
- Single source of truth for credentials

**Advantages:**
- **Scalability** - Add user once, works everywhere
- **Consistency** - Same credentials across all devices
- **Easy management** - Disable one account, loses access everywhere
- **Auditing** - Central logging
- **Security** - Better password policies, MFA possible

**Disadvantages:**
- Single point of failure (if authentication server down, nobody can login)
- Requires network connectivity
- More complex to set up

**Best practice:** Use centralized authentication with local fallback. If RADIUS server unreachable, device falls back to local credentials for emergency access.

---

## Key Exam Tips

**Authentication factors - must memorize:**
- **Something you know:** Password, PIN
- **Something you have:** Token, smart card
- **Something you are:** Biometrics

**Protocol comparison for exam:**

| Protocol | Port(s) | Transport | Encryption | Use Case |
|----------|---------|-----------|------------|----------|
| RADIUS | 1812, 1813 | UDP | Password only | Wireless, VPN, user access |
| TACACS+ | 49 | TCP | Full packet | Device administration |
| Kerberos | 88 | TCP/UDP | Full | Windows AD, SSO |
| LDAP | 389 | TCP | None | Directory queries |
| LDAPS | 636 | TCP | SSL/TLS | Secure directory queries |

**Common exam scenarios:**

1. "Company needs centralized authentication for wireless" → **RADIUS**
2. "Need to control which commands network admin can run on router" → **TACACS+**
3. "Users complain about entering password for each application" → **SSO / Kerberos**
4. "Switch port should block access until user authenticates" → **802.1X**
5. "Application needs to query user information from Active Directory" → **LDAP/LDAPS**

**Memorize these ports:**
- RADIUS: 1812 (auth), 1813 (accounting)
- TACACS+: 49
- Kerberos: 88
- LDAP: 389, LDAPS: 636

**802.1X components:**
- **Supplicant** = client device
- **Authenticator** = switch or AP
- **Authentication server** = RADIUS

**MFA requirements:**
- Must use factors from **different categories**
- Password + security question = NOT MFA (both "something you know")
- Password + SMS code = MFA (know + have)

---

## Key Takeaways

- [ ] **Three authentication factors:** Something you know (password), something you have (token), something you are (biometrics)
- [ ] **MFA requires factors from different categories** to be effective
- [ ] **RADIUS** uses UDP ports 1812/1813, encrypts only password, best for user access (wireless, VPN)
- [ ] **TACACS+** uses TCP port 49, encrypts full packet, best for device administration
- [ ] **Kerberos** uses port 88, ticket-based authentication, requires time synchronization
- [ ] **TGT (Ticket Granting Ticket)** is proof of authentication, used to request service tickets
- [ ] **LDAP** (port 389) and **LDAPS** (port 636) access directory services like Active Directory
- [ ] **SSO (Single Sign-On)** allows one login to access multiple applications
- [ ] **802.1X** provides port-based network access control with three components: supplicant, authenticator, authentication server
- [ ] **EAP** is the framework that carries authentication data in 802.1X
- [ ] **Centralized authentication** scales better than local authentication
- [ ] **RADIUS server** is commonly used as the authentication server in 802.1X deployments
- [ ] **Authentication** = proving identity, **Authorization** = determining permissions
- [ ] **SAML, OAuth, OpenID Connect** are common SSO technologies
- [ ] **WPA2/WPA3 Enterprise** uses 802.1X with RADIUS for wireless authentication

---

## Check Your Understanding

**1. A user logs in with a password and then enters a code from an SMS text message. What type of authentication is this?**

<details>
<summary>Show Answer</summary>
<strong>Multi-factor authentication (MFA) or Two-factor authentication (2FA).</strong> This uses two different authentication factors: something you know (password) and something you have (phone receiving SMS). The factors are from different categories, which is what makes it true MFA. SMS-based 2FA is one of the most common implementations, though it's being replaced by more secure methods like authenticator apps due to SIM swapping vulnerabilities.
</details>

**2. Which of the following is NOT considered multi-factor authentication?**
- A) Password + fingerprint scan
- B) Smart card + PIN
- C) Password + security question
- D) Retina scan + token

<details>
<summary>Show Answer</summary>
<strong>C) Password + security question is NOT MFA.</strong> Both password and security question are "something you know" - they're from the same authentication factor category. For MFA, you need factors from different categories. All other options combine factors from different categories: A) know + are, B) have + know, D) are + have. This is a common exam trap - security questions feel like additional security but don't count as a separate factor.
</details>

**3. What protocol does RADIUS use and what are its port numbers?**

<details>
<summary>Show Answer</summary>
<strong>RADIUS uses UDP (User Datagram Protocol) on ports 1812 (authentication/authorization) and 1813 (accounting).</strong> RADIUS uses UDP because it's designed for quick authentication decisions and can tolerate packet loss - if a request fails, the client simply retries. Legacy implementations used ports 1645 and 1646, which you might still see on the exam. The connectionless nature of UDP makes RADIUS fast but less reliable than TCP-based protocols like TACACS+.
</details>

**4. What are the main differences between RADIUS and TACACS+?**

<details>
<summary>Show Answer</summary>
<strong>Key differences: RADIUS uses UDP while TACACS+ uses TCP; RADIUS encrypts only the password while TACACS+ encrypts the entire packet; RADIUS combines authentication and authorization while TACACS+ separates AAA functions; RADIUS is an open standard while TACACS+ is Cisco proprietary.</strong> These differences make RADIUS better suited for user authentication (wireless, VPN) because it's widely supported and has extensive accounting capabilities. TACACS+ is better for network device administration because TCP is more reliable for interactive sessions, full packet encryption protects sensitive commands, and separated AAA allows granular control over which commands administrators can execute on routers and switches.
</details>

**5. In Kerberos, what is a TGT and why is it important?**

<details>
<summary>Show Answer</summary>
<strong>TGT (Ticket Granting Ticket) is proof that the user successfully authenticated to the KDC.</strong> After initial authentication, the KDC issues a TGT to the user. The user then presents this TGT to request service tickets for specific resources (file servers, email, etc.) without re-entering their password. This is what enables Single Sign-On - you authenticate once in the morning and the TGT allows you to access multiple services throughout the day without re-authenticating. The TGT is encrypted so only the KDC can read it, preventing forgery. TGTs typically expire after 10 hours, requiring re-authentication.
</details>

**6. Why does Kerberos require time synchronization between all systems?**

<details>
<summary>Show Answer</summary>
<strong>Kerberos tickets are time-stamped and have expiration times to prevent replay attacks.</strong> If an attacker captures a ticket, they could potentially reuse it. Time-stamping prevents this - old tickets are rejected. For this to work, all systems must agree on what time it is. If the time difference between client and server exceeds 5 minutes (default), authentication fails. This is why Kerberos environments (like Windows Active Directory) require NTP (Network Time Protocol) to keep all system clocks synchronized. Without time sync, legitimate users would be unable to authenticate even with correct credentials.
</details>

**7. What is the difference between LDAP and LDAPS?**

<details>
<summary>Show Answer</summary>
<strong>LDAPS is the secure version of LDAP that uses SSL/TLS encryption.</strong> LDAP (port 389) sends all data including credentials in clear text, making it vulnerable to interception. LDAPS (port 636) encrypts the entire LDAP session using SSL/TLS, protecting credentials and query data from eavesdropping. The "S" in LDAPS stands for Secure. Best practice is to always use LDAPS when possible, especially across untrusted networks. This is similar to the HTTP vs HTTPS relationship - always prefer the encrypted version when handling sensitive data like user credentials.
</details>

**8. In 802.1X, what are the three components and their roles?**

<details>
<summary>Show Answer</summary>
<strong>The three components are: (1) Supplicant - the client device requesting access, (2) Authenticator - the network device (switch or AP) controlling port access, (3) Authentication Server - typically a RADIUS server that makes the authentication decision.</strong> Here's the flow: The supplicant (your laptop) requests access from the authenticator (switch port). The authenticator doesn't make the decision itself - it acts as a middleman, forwarding authentication requests to the authentication server via RADIUS. The server checks credentials and tells the authenticator whether to allow or deny access. If allowed, the switch port moves from unauthorized to authorized state, granting network access. This separation allows centralized authentication - one RADIUS server can authenticate for hundreds of switches.
</details>

**9. A company wants employees to access email, file shares, and internal applications without entering credentials multiple times. What authentication solution should they implement?**

<details>
<summary>Show Answer</summary>
<strong>Single Sign-On (SSO), typically implemented with Kerberos in Windows environments or SAML for web applications.</strong> SSO allows users to authenticate once and gain access to multiple applications without re-entering credentials. In a Windows Active Directory environment, this is accomplished with Kerberos - users log in once and receive a TGT, which is then used to access various services. For web-based applications across different organizations, SAML or OpenID Connect provides federated SSO. The user experience is seamless - one login in the morning grants access to everything they need throughout the day. This improves security (users less likely to write down passwords) and productivity (less time spent logging in).
</details>

**10. What authentication method should be used for wireless networks in an enterprise environment?**

<details>
<summary>Show Answer</summary>
<strong>802.1X with RADIUS (WPA2 Enterprise or WPA3 Enterprise).</strong> This provides per-user authentication instead of a shared password, allowing individual accountability and easier credential management. When a device tries to connect to the wireless network, the access point (authenticator) uses 802.1X to forward authentication to a RADIUS server. Users authenticate with their individual credentials (username/password or certificates), and the RADIUS server can assign users to appropriate VLANs based on their role. This is far more secure than WPA2 Personal (PSK) which uses a single shared password - if one person leaves the company, you don't need to change the password on all devices. You simply disable their account in the RADIUS server.
</details>

**11. Which authentication protocol provides the most secure option for network device administration and why?**

<details>
<summary>Show Answer</summary>
<strong>TACACS+ is the most secure option for network device administration.</strong> Unlike RADIUS which only encrypts the password, TACACS+ encrypts the entire packet including the username and commands being executed. This is critical for device administration where you're entering privileged commands to configure routers and switches. TACACS+ also uses TCP (port 49) which provides reliable delivery - important for interactive administrative sessions where dropped packets could cause authentication failures. Additionally, TACACS+ separates authentication, authorization, and accounting, allowing granular control over which commands each administrator can execute. For example, you could allow junior admins to run show commands but not configuration commands.
</details>

**12. A network administrator wants to prevent unauthorized devices from accessing the wired network when plugged into Ethernet jacks in conference rooms. What technology should be implemented?**

<details>
<summary>Show Answer</summary>
<strong>802.1X port-based network access control.</strong> Without 802.1X, anyone who plugs a device into an Ethernet jack immediately gets network access. With 802.1X configured, the switch port remains in an unauthorized state (blocked) until the device authenticates. When someone plugs in, they must provide valid credentials to the RADIUS server before the port is authorized. This prevents visitors, contractors, or unauthorized devices from accessing the network just by plugging into an open Ethernet port. You can also configure 802.1X to assign different VLANs based on who authenticates - employees get full access, guests get restricted internet-only access. Some implementations also support MAC authentication bypass for devices like printers that can't perform 802.1X authentication.
</details>

---

## Before Moving to Lesson 23

**You should be able to:**
- [ ] List and explain the three authentication factors
- [ ] Describe why MFA is critical and what counts as true MFA
- [ ] Compare RADIUS and TACACS+ (protocol, ports, encryption, use cases)
- [ ] Explain Kerberos ticket-based authentication and TGT
- [ ] Understand LDAP's role in directory services
- [ ] Identify the three 802.1X components and their roles
- [ ] Differentiate between authentication and authorization
- [ ] Know when to use centralized vs local authentication

**Study strategy:**
- **Memorize the ports:** RADIUS 1812/1813, TACACS+ 49, Kerberos 88, LDAP 389, LDAPS 636
- **Practice protocol selection:** Given a scenario, choose correct protocol
- **Understand the "why":** Don't just memorize - understand why TACACS+ uses TCP, why Kerberos needs time sync
- **Draw the flows:** Sketch out 802.1X authentication flow, Kerberos TGT flow
- **Connect to Lesson 21:** These authentication methods defend against attacks we learned (brute force, credential theft, MITM)

---

## Coming Up in Lesson 23

**Next: VPNs and Remote Access**

Now that you understand how to authenticate users, Lesson 23 covers securing remote connections:
- VPN types (site-to-site, remote access)
- VPN protocols (IPSec, SSL/TLS, OpenVPN, WireGuard)
- Remote desktop protocols (RDP, VNC, SSH)
- Split tunneling vs full tunneling
- VPN security best practices

**Connection:** Authentication is critical for VPNs - you'll see how RADIUS integrates with VPN concentrators, and how certificate-based authentication provides even stronger security for remote access.

---

*"Authentication is the foundation - everything else in security builds on knowing who's accessing what."*

---

# ✅ LESSON 22 COMPLETE!

**Domain 4.0 Network Security: 2 of 6 lessons complete**

🎯 You now understand authentication - the gateway to every secure system!

**Next up:** Lesson 23 - VPNs and Remote Access (securing connections from anywhere)