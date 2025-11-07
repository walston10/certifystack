# Lab 22: Authentication Methods
**Time:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain:** Network Security (4.0)

## Lab Objectives
- Understand authentication factors and multi-factor authentication
- Configure and compare AAA protocols (RADIUS, TACACS+)
- Implement 802.1X port-based authentication
- Design Single Sign-On solutions
- Analyze authentication protocols and their use cases
- Apply centralized vs local authentication strategies

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **List the three authentication factors with examples:**
   Factor 1: ___________________________________________
   Factor 2: ___________________________________________
   Factor 3: ___________________________________________

2. **What does AAA stand for in network security?**
   A: _________________________________________________
   A: _________________________________________________
   A: _________________________________________________

3. **What are the port numbers for these protocols?**
   RADIUS: ____________________________________________
   TACACS+: ___________________________________________
   Kerberos: __________________________________________
   LDAP/LDAPS: ________________________________________

4. **What are the three components of 802.1X?**
   • _________________________________________________
   • _________________________________________________
   • _________________________________________________

5. **What's the difference between authentication and authorization?**
   _________________________________________________
   _________________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: MFA Implementation Design 🔐
**Time:** 3 minutes

Design MFA for different scenarios:

| Scenario | Factor 1 | Factor 2 | Factor 3? | Reasoning |
|----------|----------|----------|-----------|-----------|
| Banking app | | | | |
| Corporate VPN | | | | |
| Server room | | | | |
| Email access | | | | |
| Admin console | | | | |

---

### Activity B: RADIUS vs TACACS+ Comparison 📊
**Time:** 3 minutes

Complete the comparison table:

| Feature | RADIUS | TACACS+ |
|---------|---------|---------|
| Developer | | |
| Transport protocol | | |
| Port(s) | | |
| Encryption | | |
| AAA handling | | |
| Device support | | |
| Best use case | | |
| Packet types | | |

---

### Activity C: Kerberos Authentication Flow 🎫
**Time:** 3 minutes

Arrange Kerberos authentication steps in order:

___ Client receives service ticket
___ Client authenticates to KDC
___ Client requests service ticket from TGS
___ Client receives TGT
___ Client presents service ticket to server
___ Server validates ticket and grants access

Draw the Kerberos components:
```
[Client] <---> [    ] <---> [    ] <---> [Server]
                 ↑            ↑
               [KDC]       [TGS]
```

Key terms:
- KDC: ______________________________________________
- TGT: ______________________________________________
- TGS: ______________________________________________

---

### Activity D: 802.1X Configuration Planning 🔌
**Time:** 3 minutes

Design 802.1X for network access:

**Components:**
- Supplicant device: _________________________________
- Authenticator: _____________________________________
- Authentication server: _____________________________

**EAP Method Selection:**
| Method | Use Case | Certificate Required? | Security Level |
|--------|----------|----------------------|----------------|
| EAP-TLS | | | |
| PEAP | | | |
| EAP-TTLS | | | |
| EAP-FAST | | | |

**Switch configuration needed:**
```
Port setting: _______________________________________
VLAN assignment: _____________________________________
Guest VLAN: _________________________________________
```

---

### Activity E: SSO Solution Design 🎯
**Time:** 3 minutes

Choose SSO method for each scenario:

| Application Type | SSO Method | Protocol | Justification |
|-----------------|------------|----------|---------------|
| Cloud services (Google, Office365) | | | |
| Internal web apps | | | |
| Mobile apps | | | |
| Legacy applications | | | |
| Partner portal | | | |

Options: SAML, OAuth 2.0, OpenID Connect, Kerberos, LDAP

---

### Activity F: Password Policy Configuration 🔑
**Time:** 3 minutes

Create password policies for different security levels:

| Security Level | Length | Complexity | Expiration | History | Lockout |
|---------------|---------|------------|------------|---------|---------|
| Standard user | | | | | |
| Privileged user | | | | | |
| Service account | | | | | |
| Admin account | | | | | |

**Additional controls:**
□ Password manager required
□ Passwordless option available
□ Biometric alternative
□ Recovery questions banned

---

### Activity G: Authentication Protocol Selection 🛠️
**Time:** 3 minutes

Match authentication needs to protocols:

| Requirement | Best Protocol | Port(s) | Why? |
|------------|---------------|---------|------|
| Wireless network auth | | | |
| Network device management | | | |
| Windows domain login | | | |
| VPN authentication | | | |
| Web app SSO | | | |
| Linux central auth | | | |

---

### Activity H: Local vs Centralized Authentication 🏢
**Time:** 2 minutes

Determine best approach:

| Scenario | Local | Centralized | Hybrid | Reasoning |
|----------|-------|-------------|---------|-----------|
| 5-person office | | | | |
| 500-person company | | | | |
| Home router | | | | |
| Branch offices | | | | |
| Cloud services | | | | |
| IoT devices | | | | |

---

### Activity I: Authentication Attack Prevention 🛡️
**Time:** 3 minutes

Identify defenses against authentication attacks:

| Attack Type | Detection Method | Prevention | Response |
|------------|------------------|------------|----------|
| Password spray | | | |
| Credential stuffing | | | |
| Pass-the-hash | | | |
| Golden ticket | | | |
| Brute force | | | |
| Session hijacking | | | |

---

### Activity J: Biometric Authentication Analysis 👁️
**Time:** 3 minutes

Evaluate biometric methods:

| Method | FAR | FRR | CER | Cost | Best Use |
|--------|-----|-----|-----|------|----------|
| Fingerprint | | | | | |
| Facial recognition | | | | | |
| Iris scan | | | | | |
| Voice recognition | | | | | |
| Vein pattern | | | | | |

Terms:
- FAR: ______________________________________________
- FRR: ______________________________________________
- CER: ______________________________________________

---

### Activity K: Token-Based Authentication 🎟️
**Time:** 2 minutes

Design token authentication system:

**Hardware tokens:**
- Type: □ HOTP □ TOTP □ Challenge-response
- Delivery: □ Key fob □ Card □ USB □ Mobile app
- Backup method: _____________________________________

**Software tokens:**
- App choice: _______________________________________
- Backup codes: _____________________________________
- Recovery process: _________________________________

**Session tokens:**
- Storage: □ Cookie □ Local storage □ Session storage
- Expiration: _______________________________________
- Refresh strategy: _________________________________

---

### Activity L: Authentication Troubleshooting 🔧
**Time:** 3 minutes

Diagnose authentication failures:

| Symptom | Possible Cause | Check | Fix |
|---------|---------------|--------|-----|
| Can't login to domain | | | |
| 802.1X timeout | | | |
| RADIUS not responding | | | |
| SSO loop | | | |
| Token out of sync | | | |
| Locked out repeatedly | | | |

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Design authentication for a new branch office:

1. **Requirements gathering:**
   • Number of users: __________________________________
   • Device types: _____________________________________
   • Security level: ___________________________________

2. **Authentication design:**
   • Primary method: ___________________________________
   • MFA implementation: _______________________________
   • Backup authentication: ____________________________

3. **Implementation plan:**
   • Phase 1: __________________________________________
   • Phase 2: __________________________________________
   • Phase 3: __________________________________________

### Best Practices Checklist
Check off authentication practices you'll implement:

□ Enforce MFA for all privileged accounts
□ Use centralized authentication where possible
□ Implement account lockout policies
□ Regular password/credential audits
□ Monitor for authentication anomalies
□ Implement SSO to reduce password fatigue
□ Use certificate-based auth for devices
□ Deploy 802.1X for network access
□ Separate admin and user accounts
□ Document authentication procedures

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Implement multi-factor authentication
□ Configure RADIUS and TACACS+
□ Design 802.1X network authentication
□ Select appropriate EAP methods
□ Implement SSO solutions
□ Compare authentication protocols
□ Design password policies
□ Choose biometric methods
□ Prevent authentication attacks
□ Troubleshoot authentication issues

### Exam Preparation
⚠️ **Know for the exam:**
- **RADIUS ports:** UDP 1812 (auth), 1813 (accounting)
- **TACACS+ port:** TCP 49
- **Kerberos port:** 88
- **LDAP ports:** 389 (LDAP), 636 (LDAPS)
- **802.1X components:** Supplicant, Authenticator, Auth Server
- **Authentication factors:** Know, Have, Are
- **AAA:** Authentication, Authorization, Accounting

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐☆☆

**Ready for:** Lesson 23 - VPNs and Remote Access

### Remember
"Authentication is the front door to your network. Make it strong, make it smart, but don't make it so complex that users write passwords on sticky notes!"

---