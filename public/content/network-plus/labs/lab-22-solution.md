# Lab 22 Answer Key: Authentication Methods
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate  
**Domain Coverage:** Network Security (4.0)

---

## Section 1: Concept Check Answers

### Question 1: Three Authentication Factors
**Answer:**
- **Something you know:** Password, PIN, security question, passphrase
- **Something you have:** Smart card, token, key fob, phone
- **Something you are:** Fingerprint, iris, face, voice (biometrics)

💡 **Bonus factors:** Something you do (behavior), Somewhere you are (location)

### Question 2: AAA Definition
**Answer:**
- **Authentication:** Verifying identity (Who are you?)
- **Authorization:** Determining permissions (What can you do?)
- **Accounting:** Tracking actions (What did you do?)

### Question 3: Protocol Port Numbers
**Answer:**
- **RADIUS:** UDP 1812 (authentication), 1813 (accounting)
- **TACACS+:** TCP 49
- **Kerberos:** TCP/UDP 88
- **LDAP/LDAPS:** TCP 389 (LDAP), TCP 636 (LDAPS/secure)

### Question 4: 802.1X Components
**Answer:**
- **Supplicant:** Client device requesting access
- **Authenticator:** Switch or wireless access point
- **Authentication Server:** RADIUS server

### Question 5: Authentication vs Authorization
**Answer:**
- **Authentication:** Proves who you are (identity verification)
- **Authorization:** Defines what you can access (permissions/rights)

---

## Section 2: Hands-On Activities - Answers

### Activity A: MFA Implementation Design ✅

| Scenario | Factor 1 | Factor 2 | Factor 3? | Reasoning |
|----------|----------|----------|-----------|-----------|
| Banking app | Password | SMS/App token | Biometric | High value target |
| Corporate VPN | Password | Certificate | - | Remote access security |
| Server room | Badge | PIN | Biometric | Physical + logical |
| Email access | Password | App token | - | Standard MFA |
| Admin console | Password | Hardware token | Biometric | Highest privilege |

### Activity B: RADIUS vs TACACS+ Comparison ✅

| Feature | RADIUS | TACACS+ |
|---------|---------|---------|
| Developer | IETF standard | Cisco proprietary |
| Transport protocol | UDP | TCP |
| Port(s) | 1812, 1813 | 49 |
| Encryption | Password only | Full packet |
| AAA handling | Combined | Separated |
| Device support | Wide/universal | Cisco-focused |
| Best use case | WiFi, VPN | Network devices |
| Packet types | Access-Request/Accept/Reject | START, REPLY, CONTINUE |

### Activity C: Kerberos Authentication Flow ✅

**Correct order:**
1. Client authenticates to KDC
2. Client receives TGT
3. Client requests service ticket from TGS
4. Client receives service ticket
5. Client presents service ticket to server
6. Server validates ticket and grants access

**Component diagram:**
```
[Client] <---> [AS] <---> [TGS] <---> [Server]
                ↑           ↑
              [KDC Components]
```

**Key terms:**
- KDC: **Key Distribution Center** (contains AS and TGS)
- TGT: **Ticket Granting Ticket** (initial authentication proof)
- TGS: **Ticket Granting Service** (issues service tickets)

### Activity D: 802.1X Configuration Planning ✅

**Components:**
- Supplicant: **User laptop/device with 802.1X client**
- Authenticator: **Network switch or wireless AP**
- Authentication server: **RADIUS server (e.g., FreeRADIUS, NPS)**

**EAP Methods:**

| Method | Use Case | Certificate Required? | Security Level |
|--------|----------|----------------------|----------------|
| EAP-TLS | High security networks | Both sides | Highest |
| PEAP | Corporate WiFi/LAN | Server only | High |
| EAP-TTLS | Similar to PEAP | Server only | High |
| EAP-FAST | Cisco environments | PAC instead | Medium-High |

**Switch configuration:**
```
Port setting: 802.1X auto/force-authorized
VLAN assignment: Dynamic based on RADIUS response
Guest VLAN: VLAN 999 for failed auth
```

### Activity E: SSO Solution Design ✅

| Application Type | SSO Method | Protocol | Justification |
|-----------------|------------|----------|---------------|
| Cloud services | SAML | SAML 2.0 | Industry standard for cloud |
| Internal web apps | Kerberos | Kerberos | AD integration |
| Mobile apps | OAuth | OAuth 2.0 | Mobile-friendly |
| Legacy apps | LDAP | LDAP | Simple integration |
| Partner portal | SAML | SAML 2.0 | Federation support |

### Activity F: Password Policy Configuration ✅

| Security Level | Length | Complexity | Expiration | History | Lockout |
|---------------|---------|------------|------------|---------|---------|
| Standard user | 12+ | 3 of 4 types | 90 days | 12 | 5 attempts |
| Privileged user | 16+ | 4 of 4 types | 60 days | 24 | 3 attempts |
| Service account | 25+ | Random | Never | N/A | Disabled |
| Admin account | 20+ | 4 of 4 + MFA | 30 days | 24 | 3 attempts |

All additional controls should be checked for maximum security.

### Activity G: Authentication Protocol Selection ✅

| Requirement | Best Protocol | Port(s) | Why? |
|------------|---------------|---------|------|
| Wireless network auth | RADIUS | 1812/1813 | 802.1X standard |
| Network device mgmt | TACACS+ | 49 | Cisco, full encryption |
| Windows domain login | Kerberos | 88 | Native AD protocol |
| VPN authentication | RADIUS | 1812/1813 | Wide support |
| Web app SSO | SAML | 443 | Web standard |
| Linux central auth | LDAP | 389/636 | Cross-platform |

### Activity H: Local vs Centralized Authentication ✅

| Scenario | Local | Centralized | Hybrid | Reasoning |
|----------|-------|-------------|---------|-----------|
| 5-person office | ✓ | | | Too small for central |
| 500-person company | | ✓ | | Needs central control |
| Home router | ✓ | | | No central server |
| Branch offices | | | ✓ | Central + local cache |
| Cloud services | | ✓ | | Federation/SAML |
| IoT devices | ✓ | | | Limited capability |

### Activity I: Authentication Attack Prevention ✅

| Attack Type | Detection Method | Prevention | Response |
|------------|------------------|------------|----------|
| Password spray | Failed login patterns | Account lockout | Alert SOC |
| Credential stuffing | Multiple IPs | Unique passwords | Force MFA |
| Pass-the-hash | Unusual access | Disable NTLM | Reset passwords |
| Golden ticket | Long TGT lifetime | Limit TGT life | Reset krbtgt |
| Brute force | Rapid attempts | Rate limiting | Block IP |
| Session hijacking | IP changes | Secure cookies | Invalidate session |

### Activity J: Biometric Authentication Analysis ✅

| Method | FAR | FRR | CER | Cost | Best Use |
|--------|-----|-----|-----|------|----------|
| Fingerprint | 0.001% | 0.1% | 0.05% | Low | Phones, laptops |
| Facial recognition | 0.1% | 1% | 0.5% | Medium | Access control |
| Iris scan | 0.0001% | 0.01% | 0.005% | High | High security |
| Voice recognition | 1% | 5% | 3% | Low | Phone systems |
| Vein pattern | 0.0001% | 0.01% | 0.005% | High | Banking |

**Terms:**
- FAR: **False Accept Rate** (incorrectly grants access)
- FRR: **False Reject Rate** (incorrectly denies access)
- CER: **Crossover Error Rate** (where FAR = FRR)

### Activity K: Token-Based Authentication ✅

**Hardware tokens:**
- Type: **TOTP** (Time-based One-Time Password)
- Delivery: **Mobile app** (cost-effective) or **Key fob**
- Backup: **Printed backup codes**

**Software tokens:**
- App: **Google Authenticator, Microsoft Authenticator, Authy**
- Backup codes: **10 one-time use codes**
- Recovery: **Admin reset with identity verification**

**Session tokens:**
- Storage: **Cookie** (with HttpOnly, Secure flags)
- Expiration: **15-30 minutes with refresh**
- Refresh: **Sliding expiration or refresh tokens**

### Activity L: Authentication Troubleshooting ✅

| Symptom | Possible Cause | Check | Fix |
|---------|---------------|--------|-----|
| Can't login to domain | Time sync issue | Time difference | Sync with DC |
| 802.1X timeout | Wrong EAP method | Switch config | Match client/server |
| RADIUS not responding | Firewall blocking | UDP 1812/1813 | Open ports |
| SSO loop | Cookie issues | Browser settings | Clear cookies |
| Token out of sync | Time drift | Device time | Resync time |
| Locked repeatedly | Password spray | Logs for pattern | Block attacker IP |

---

## Real-World Context & Best Practices

### Why This Matters
- **Security breaches:** 81% involve compromised credentials
- **Compliance:** PCI, HIPAA require strong authentication
- **User experience:** SSO reduces password fatigue
- **Zero trust:** Authentication is fundamental

### Common Mistakes to Avoid
❌ Using SMS for MFA (SIM swapping risk)
❌ Shared service accounts
❌ Never rotating passwords
❌ Same password everywhere
❌ Storing passwords in plaintext

### Industry Best Practices
✅ **MFA everywhere** for privileged accounts
✅ **Passwordless** where possible (certificates, biometrics)
✅ **Risk-based authentication** (adaptive)
✅ **Regular audits** of authentication logs
✅ **Separate accounts** for admin tasks

---

## Exam Tips 📝

### Must Memorize:
1. **Port Numbers:**
   - RADIUS: UDP 1812, 1813
   - TACACS+: TCP 49
   - Kerberos: 88
   - LDAP: 389, LDAPS: 636
2. **802.1X Components:**
   - Supplicant (client)
   - Authenticator (switch/AP)
   - Authentication Server (RADIUS)
3. **Authentication Factors:**
   - Know (password)
   - Have (token)
   - Are (biometric)
4. **AAA:**
   - Authentication (who)
   - Authorization (what)
   - Accounting (tracking)

### Common Exam Questions:
- "Which uses TCP 49?" → **TACACS+**
- "Ticket-based authentication?" → **Kerberos**
- "802.1X authentication server?" → **RADIUS**
- "Encrypts entire packet?" → **TACACS+**
- "Port 1812?" → **RADIUS authentication**

### Exam Strategy:
- RADIUS = UDP, widespread use
- TACACS+ = TCP, Cisco devices
- Kerberos = Windows domains
- LDAP = Directory services
- Know all port numbers!

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Designed appropriate MFA solutions
□ Compared RADIUS and TACACS+ correctly
□ Understood Kerberos authentication flow
□ Configured 802.1X components
□ Selected proper EAP methods
□ Chose correct SSO protocols
□ Created strong password policies
□ Identified authentication attacks
□ Evaluated biometric methods
□ Troubleshot auth issues

### Troubleshooting Common Issues

**Problem:** Users can't authenticate
**Solution:** Check time sync, network connectivity, credentials

**Problem:** MFA tokens not working
**Solution:** Verify time sync, check token serial, resync

**Problem:** 802.1X not working
**Solution:** Verify EAP type match, RADIUS connectivity, certificates

**Problem:** SSO failing
**Solution:** Check trust relationships, certificates, redirects

---

## Real-World Scenarios

### Scenario 1: RADIUS Server Down
**Situation:** WiFi authentication failing
**Response:**
1. Check RADIUS service status
2. Verify network connectivity
3. Check firewall rules (UDP 1812/1813)
4. Review RADIUS logs
5. Failover to backup RADIUS

### Scenario 2: Kerberos Authentication Failure
**Situation:** Domain login issues
**Response:**
1. Check time synchronization (5-minute tolerance)
2. Verify DNS resolution
3. Check KDC availability
4. Review event logs
5. Reset computer account if needed

### Scenario 3: MFA Bypass Attempt
**Situation:** User claims MFA broken, wants exception
**Response:**
1. Never bypass without approval
2. Verify user identity separately
3. Use backup authentication method
4. Document exception
5. Re-enable MFA ASAP

---

## Lab Summary

### Key Concepts Mastered:
✅ MFA significantly improves security
✅ RADIUS vs TACACS+ serve different purposes
✅ Kerberos enables secure domain authentication
✅ 802.1X provides port-based access control
✅ SSO improves user experience and security
✅ Biometrics offer convenience with tradeoffs
✅ Centralized auth scales better than local

### Time-Saving Tips:
- Use authentication templates
- Automate account provisioning
- Implement self-service password reset
- Deploy password managers
- Monitor authentication logs with SIEM

### Going Further:
- Set up FreeRADIUS server
- Configure 802.1X on home network
- Implement TOTP with Python
- Test biometric spoofing
- Study SAML assertions

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for authentication method exam questions!

**Next Lab:** Lesson 23 - VPNs and Remote Access

### Final Tip:
"Good authentication is like a good bouncer - strict enough to keep the bad guys out, but smart enough not to annoy the regulars!"

---