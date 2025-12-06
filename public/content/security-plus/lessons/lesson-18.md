# Lesson 18: Wireless Security Architecture

**Estimated Time:** 30-35 minutes  
**Domain:** 3.0 Security Architecture (18% of exam)  
**Exam Objectives Covered:** 3.2 - Given a scenario, apply security principles to secure enterprise infrastructure

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Compare wireless encryption protocols (WEP, WPA, WPA2, WPA3)
- Explain the differences between WPA2-Personal and WPA2-Enterprise
- Describe 802.1X authentication and EAP methods
- Identify common wireless attacks and their countermeasures
- Explain wireless security best practices for enterprise deployment
- Configure appropriate wireless security for different scenarios
- Describe wireless intrusion prevention systems (WIPS)
- Apply defense-in-depth principles to wireless networks

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Wireless Security" (14 min)
- **PowerCert:** "WPA2 vs WPA3 Explained" (10 min)
- **Sunny Classroom:** "802.1X and EAP Authentication" (12 min)

---

## Introduction

In 2007, retailer TJX disclosed that attackers had stolen 45.7 million credit card numbers—at the time, the largest data breach in history. The attack vector? A poorly secured wireless network at a Marshalls store in Minnesota. Attackers parked outside, cracked the weak WEP encryption, and gained access to the corporate network. From there, they moved laterally to payment systems and exfiltrated data for over 18 months.

The TJX breach demonstrated what security professionals already knew: wireless networks extend your attack surface beyond physical walls. Anyone within radio range—parking lots, neighboring buildings, public streets—can potentially access your network. The convenience of wireless comes with inherent risk.

Since TJX, wireless security has evolved dramatically. WEP is dead. WPA2 became the standard. WPA3 addresses WPA2's weaknesses. Enterprise authentication replaced shared passwords. But wireless remains a prime attack vector because many organizations still make basic mistakes: weak passwords, outdated protocols, rogue access points, and poor segmentation.

This lesson covers wireless security from encryption protocols to enterprise authentication to attack countermeasures. You'll learn not just what the protocols are, but why they exist and how to deploy them securely.

---

## Wireless Encryption Evolution

Understanding how we got here and why older protocols fail.

### WEP (Wired Equivalent Privacy)

**Released:** 1997 (original 802.11 standard)

**Encryption:** RC4 stream cipher with 40-bit or 104-bit keys

**Status:** BROKEN - Never use

**Why WEP failed:**

1. **Weak IV (Initialization Vector):**
   - Only 24 bits
   - Repeats frequently on busy networks
   - IV sent in cleartext
   - Allows statistical attacks

2. **Key management:**
   - Same key for all users
   - Rarely changed
   - Key in cleartext during association

3. **No replay protection:**
   - Captured packets can be replayed

4. **Integrity weakness:**
   - CRC-32 is not cryptographically secure
   - Packets can be modified undetected

**Attack time:** Minutes with tools like Aircrack-ng

**Exam note:** If you see WEP on the exam, it's always the wrong answer for security.

---

### WPA (Wi-Fi Protected Access)

**Released:** 2003 (interim solution)

**Encryption:** TKIP (Temporal Key Integrity Protocol) with RC4

**Status:** DEPRECATED - Avoid

**Improvements over WEP:**
- Per-packet keys (key mixing)
- Longer IV (48 bits)
- Message Integrity Check (MIC)
- Replay protection

**Why WPA is deprecated:**
- Still uses RC4 (weak cipher)
- TKIP has known vulnerabilities
- Can be cracked in under an hour
- WPA2 available since 2004

**Exam note:** WPA was a stopgap. WPA2 is the minimum acceptable standard.

---

### WPA2 (802.11i)

**Released:** 2004

**Encryption:** AES-CCMP (Counter Mode CBC-MAC Protocol)

**Status:** Current standard (minimum acceptable)

**Key improvements:**
- AES encryption (strong, modern cipher)
- CCMP provides confidentiality and integrity
- Mandatory for Wi-Fi certification since 2006

**Modes:**
- **WPA2-Personal (PSK):** Pre-shared key
- **WPA2-Enterprise:** 802.1X authentication

**Known vulnerability:** KRACK (Key Reinstallation Attack) - 2017
- Exploits 4-way handshake
- Mitigated by patches
- Still more secure than WPA/WEP

---

### WPA3

**Released:** 2018

**Encryption:** AES-GCMP-256 (Enterprise), AES-CCMP-128 (Personal)

**Status:** Latest standard - Recommended

**Key improvements:**

**1. SAE (Simultaneous Authentication of Equals):**
- Replaces PSK 4-way handshake
- Dragonfly key exchange
- Resistant to offline dictionary attacks
- Forward secrecy

**2. Forward secrecy:**
- Past sessions can't be decrypted if key compromised
- Each session has unique encryption keys

**3. Protected Management Frames (PMF):**
- Required (optional in WPA2)
- Prevents deauthentication attacks

**4. Enhanced Open (OWE):**
- Encryption for open networks
- No password, but traffic encrypted
- Protects against passive eavesdropping

**Modes:**
- **WPA3-Personal:** SAE authentication
- **WPA3-Enterprise:** 192-bit security suite

---

### Encryption Comparison

| Feature | WEP | WPA | WPA2 | WPA3 |
|---------|-----|-----|------|------|
| Encryption | RC4 | RC4/TKIP | AES-CCMP | AES-GCMP |
| Key length | 40/104-bit | 128-bit | 128-bit | 128/192-bit |
| IV length | 24-bit | 48-bit | 48-bit | 48-bit |
| Integrity | CRC-32 | MIC | CCMP | GCMP |
| Status | Broken | Deprecated | Standard | Recommended |
| Offline attack | Minutes | Hours | Possible | Resistant |
| Forward secrecy | No | No | No | Yes |

---

## WPA2/WPA3 Modes

Personal vs. Enterprise authentication.

### Personal Mode (PSK)

**How it works:**
- Single pre-shared key (password)
- All users share same password
- Password used to derive encryption keys

**4-way handshake (WPA2-Personal):**
```
1. AP → Client: ANonce (AP random number)
2. Client → AP: SNonce + MIC (Client random, proof of PSK)
3. AP → Client: GTK + MIC (Group key, encrypted)
4. Client → AP: Acknowledgment
```

Both sides derive PTK (Pairwise Transient Key) from:
- PSK (password)
- ANonce + SNonce
- MAC addresses

**Weaknesses:**
- Password shared with everyone
- Offline dictionary attacks possible (capture handshake, crack offline)
- No individual accountability
- Password change = tell everyone

**Appropriate for:**
- Home networks
- Small offices with trusted users
- Guest networks (with isolation)

---

### Enterprise Mode (802.1X)

**How it works:**
- Individual user credentials
- Centralized authentication server (RADIUS)
- Each user gets unique encryption keys

**Components:**
```
┌──────────┐      ┌─────────────┐      ┌──────────┐
│ Supplicant│ ←→  │ Authenticator│ ←→  │   Auth   │
│ (Client)  │      │    (AP)      │      │  Server  │
│           │      │              │      │ (RADIUS) │
└──────────┘      └─────────────┘      └──────────┘
```

- **Supplicant:** Client device requesting access
- **Authenticator:** Access point (enforces access)
- **Authentication Server:** RADIUS server (validates credentials)

**Benefits:**
- Individual credentials
- Unique keys per user/session
- Centralized management
- User accountability
- Credential revocation without changing everyone's password

**Appropriate for:**
- Enterprise networks
- Any environment requiring accountability
- Compliance requirements

---

### Personal vs. Enterprise

| Aspect | Personal (PSK) | Enterprise (802.1X) |
|--------|----------------|---------------------|
| Credentials | Shared password | Individual accounts |
| Key derivation | From PSK | From authentication |
| Accountability | None | Per-user logging |
| Revocation | Change password (all affected) | Disable single account |
| Infrastructure | Simple | Requires RADIUS |
| Best for | Home, small office | Enterprise |

---

## 802.1X and EAP

Enterprise wireless authentication in depth.

### 802.1X Port-Based Access Control

**Concept:** Don't allow network access until authenticated.

**Process:**
1. Client associates with AP
2. AP blocks all traffic except authentication
3. Client authenticates via EAP
4. RADIUS validates credentials
5. On success, AP allows traffic
6. Encryption keys derived from authentication

**Port states:**
- **Unauthorized:** Only EAP traffic allowed
- **Authorized:** Full network access

### EAP (Extensible Authentication Protocol)

Framework for authentication methods. EAP defines the message format; specific EAP types define HOW to authenticate.

**Common EAP Types:**

---

**EAP-TLS (EAP-Transport Layer Security)**

**Authentication:** Mutual certificate authentication

**How it works:**
- Both client AND server have certificates
- Client verifies server certificate
- Server verifies client certificate
- Mutual authentication

**Security:** Highest (considered gold standard)

**Challenges:**
- PKI infrastructure required
- Certificate on every client device
- Certificate management overhead
- Lost device = revoke certificate

**Best for:** High-security environments with PKI capability

---

**EAP-TTLS (EAP-Tunneled TLS)**

**Authentication:** Server certificate + inner authentication

**How it works:**
1. Server presents certificate
2. Client verifies server
3. TLS tunnel established
4. User credentials sent through tunnel
5. Inner method (PAP, CHAP, MS-CHAPv2)

**Security:** Good (server authenticated, credentials protected)

**Advantages:**
- No client certificates needed
- Existing credentials (AD username/password)
- Simpler deployment than EAP-TLS

**Best for:** Organizations without PKI but wanting enterprise security

---

**PEAP (Protected EAP)**

**Authentication:** Server certificate + inner EAP method

**How it works:**
1. Server presents certificate
2. Client verifies server
3. TLS tunnel established
4. Inner EAP method (usually EAP-MSCHAPv2)

**Very similar to EAP-TTLS** but:
- Microsoft developed
- Inner method is EAP (not legacy protocols)
- Common in Windows environments

**Security:** Good (widely deployed, well-tested)

**Best for:** Windows/Active Directory environments

---

**EAP-FAST (Flexible Authentication via Secure Tunneling)**

**Authentication:** PAC (Protected Access Credential) or server certificate

**How it works:**
- Cisco developed
- Uses PAC for faster reconnection
- Can work without certificates

**Security:** Good (designed to address LEAP weaknesses)

**Best for:** Cisco environments, where certificate deployment difficult

---

### EAP Comparison

| EAP Type | Client Cert | Server Cert | Security | Complexity |
|----------|-------------|-------------|----------|------------|
| EAP-TLS | Required | Required | Highest | Highest |
| EAP-TTLS | Not required | Required | High | Medium |
| PEAP | Not required | Required | High | Medium |
| EAP-FAST | Not required | Optional | High | Medium |

**Exam tip:** EAP-TLS = most secure but requires client certificates. PEAP/EAP-TTLS = good security without client certs.

---

## Wireless Attacks

Understanding threats to wireless networks.

### Rogue Access Points

**What it is:** Unauthorized AP connected to network

**Attack scenarios:**
- Employee plugs in personal AP for convenience
- Attacker plants AP for network access
- Misconfigured AP with weak security

**Risks:**
- Bypasses network security
- No authentication/encryption
- Backdoor into network
- Often on wrong VLAN

**Detection:**
- Wireless IPS (WIPS)
- Regular wireless scans
- 802.1X on wired ports (rogue can't authenticate)

---

### Evil Twin

**What it is:** Attacker's AP mimicking legitimate network

**How it works:**
1. Attacker sets up AP with same SSID
2. Broadcasts stronger signal
3. Clients auto-connect to stronger signal
4. Attacker intercepts all traffic

**Attack enhancements:**
- Deauth legitimate AP's clients (force reconnection)
- Captive portal for credential harvesting
- SSL stripping

**Countermeasures:**
- 802.1X Enterprise (server certificate validation)
- Client certificate validation
- User education (recognize certificate warnings)
- WIPS detection

---

### Deauthentication Attack

**What it is:** Forcing clients to disconnect

**How it works:**
- 802.11 management frames unencrypted (pre-WPA3)
- Attacker sends forged deauth frames
- Client disconnects from AP
- May reconnect to evil twin

**Uses:**
- Disrupt service (DoS)
- Force reconnection to evil twin
- Capture WPA handshake for cracking

**Countermeasures:**
- **WPA3:** Protected Management Frames (PMF) required
- **WPA2:** Enable PMF (802.11w) if supported
- WIPS detection

---

### WPA/WPA2 Cracking

**Target:** Capture 4-way handshake, crack offline

**Process:**
1. Monitor network (capture handshake)
2. Deauth client (force reconnection/new handshake)
3. Capture handshake
4. Offline dictionary/brute force attack

**Cracking speed:**
- Depends on password complexity
- GPU-accelerated tools (Hashcat)
- Weak passwords cracked quickly

**Countermeasures:**
- Strong passwords (12+ characters, random)
- WPA3 (resistant to offline attacks)
- Enterprise mode (no PSK to crack)

---

### Bluetooth Attacks

**Bluejacking:**
- Sending unsolicited messages
- Annoying but low security impact

**Bluesnarfing:**
- Unauthorized data access
- Stealing contacts, messages, files
- Exploits Bluetooth vulnerabilities

**Bluebugging:**
- Taking control of device
- Making calls, sending messages
- Full device compromise

**Countermeasures:**
- Disable Bluetooth when not needed
- Non-discoverable mode
- Reject unknown pairings
- Keep devices updated

---

### Wireless Attack Summary

| Attack | Target | Impact | Primary Defense |
|--------|--------|--------|-----------------|
| Rogue AP | Network | Unauthorized access | WIPS, 802.1X wired |
| Evil Twin | Clients | MITM, credential theft | 802.1X, cert validation |
| Deauth | Clients/AP | DoS, force reconnect | WPA3/PMF |
| WPA Cracking | PSK | Network compromise | Strong passwords, WPA3 |
| Bluejacking | Bluetooth | Annoyance | Disable Bluetooth |
| Bluesnarfing | Bluetooth | Data theft | Updates, disable |

---

## Wireless Security Best Practices

Enterprise deployment recommendations.

### Authentication

**Use WPA3 where supported:**
- Newest, most secure
- Required for new devices
- Transition mode for compatibility

**WPA2-Enterprise minimum for corporate:**
- Individual accountability
- Centralized management
- No shared passwords

**EAP method selection:**
- EAP-TLS for highest security
- PEAP/EAP-TTLS for practical deployment
- Validate server certificates

### Encryption

**Disable legacy protocols:**
- No WEP (ever)
- No WPA/TKIP
- WPA2-AES minimum

**Enable PMF (802.11w):**
- Protects management frames
- Prevents deauth attacks
- Required in WPA3

### Access Point Configuration

**Change defaults:**
- Admin passwords
- SSID (don't reveal organization)
- Management interface settings

**Disable unnecessary features:**
- WPS (Wi-Fi Protected Setup) - vulnerable
- Remote management if not needed
- Unused radio bands

**Secure management:**
- HTTPS for web interface
- SSH instead of Telnet
- Strong admin credentials
- Limit management access

### Network Design

**Segmentation:**
- Guest network isolated
- IoT on separate VLAN
- Corporate wireless separate from guest

**Placement:**
- APs positioned to minimize external coverage
- Reduce signal leakage outside building
- Use directional antennas where appropriate

**Coverage:**
- Adequate coverage reduces client roaming issues
- Prevents clients from connecting to rogue APs
- Site surveys for proper planning

### Monitoring

**Wireless IPS (WIPS):**
- Detect rogue APs
- Detect attack attempts
- Automatic containment

**Regular audits:**
- Scan for unauthorized APs
- Verify configuration compliance
- Test from attacker perspective

---

## Wireless Intrusion Prevention

Detecting and responding to wireless threats.

### WIPS Capabilities

**Detection:**
- Rogue access points
- Evil twin attacks
- Deauthentication attacks
- Unauthorized clients
- Policy violations

**Prevention:**
- Containment (deauth rogue AP's clients)
- Alert security team
- Automatic response

### WIPS Deployment

**Dedicated sensors:**
- Full-time monitoring
- Best coverage and detection
- Additional hardware cost

**AP-based:**
- APs also function as sensors
- Share time between serving and monitoring
- Lower cost, reduced detection capability

**Hybrid:**
- Some dedicated sensors
- APs assist with monitoring
- Balance of coverage and cost

### WIPS Considerations

**Legal:**
- Containment may affect neighboring networks
- Jamming regulations
- Document authorization

**False positives:**
- Neighboring legitimate APs
- Tuning required
- Whitelisting known APs

---

## Special Wireless Scenarios

### Guest Networks

**Requirements:**
- Isolated from corporate
- Internet access only
- No access to internal resources

**Implementation:**
- Separate SSID
- Separate VLAN
- Firewall between guest and corporate
- Captive portal (terms acceptance)
- Bandwidth limiting

**Security:**
- WPA2/WPA3 with simple password (rotated)
- Or open with captive portal
- WPA3 Enhanced Open preferred

### IoT Wireless

**Challenges:**
- Many devices don't support WPA2-Enterprise
- Limited security capabilities
- Infrequent updates

**Best practices:**
- Separate VLAN/SSID for IoT
- Firewall IoT from corporate
- Monitor IoT traffic
- Regular firmware updates
- Inventory all devices

### BYOD (Bring Your Own Device)

**Challenges:**
- Personal devices on corporate network
- Varying security postures
- Data leakage risk

**Controls:**
- 802.1X with device certificates
- MDM (Mobile Device Management) enrollment
- Separate BYOD VLAN
- Limited resource access
- NAC posture checking

---

## Key Exam Tips

🎯 **WEP:** Broken, cracked in minutes. Never acceptable answer.

🎯 **WPA:** Deprecated, uses TKIP/RC4. Avoid.

🎯 **WPA2:** Current standard. AES-CCMP encryption. Minimum acceptable.

🎯 **WPA3:** Latest standard. SAE authentication, forward secrecy, required PMF.

🎯 **Personal vs Enterprise:** Personal = shared password (PSK). Enterprise = individual credentials (802.1X/RADIUS).

🎯 **EAP-TLS:** Most secure, requires client AND server certificates.

🎯 **PEAP/EAP-TTLS:** Server certificate only, client uses username/password. Good for most enterprises.

🎯 **Evil twin:** Fake AP mimicking legitimate. Defense = certificate validation, 802.1X.

🎯 **Rogue AP:** Unauthorized AP on network. Defense = WIPS, 802.1X on wired ports.

🎯 **Deauth attack:** Forged disconnect frames. Defense = WPA3 or PMF (802.11w).

🎯 **WPS:** Vulnerable, should be disabled.

🎯 **SAE (WPA3):** Replaces PSK handshake, resistant to offline dictionary attacks.

---

## Key Takeaways

- [ ] WEP is completely broken and should never be used
- [ ] WPA (TKIP) is deprecated; WPA2 (AES-CCMP) is minimum standard
- [ ] WPA3 adds SAE, forward secrecy, and mandatory PMF
- [ ] WPA2/WPA3-Personal uses shared password; Enterprise uses individual credentials
- [ ] 802.1X uses supplicant, authenticator (AP), and authentication server (RADIUS)
- [ ] EAP-TLS provides highest security with mutual certificate authentication
- [ ] PEAP and EAP-TTLS use server certificate with username/password in tunnel
- [ ] Evil twin attacks mimic legitimate APs; defense includes certificate validation
- [ ] Rogue APs provide unauthorized network access; WIPS and 802.1X help detect/prevent
- [ ] Deauthentication attacks are mitigated by WPA3's required PMF
- [ ] WPS should be disabled due to known vulnerabilities
- [ ] Guest networks should be isolated on separate VLANs with no internal access
- [ ] IoT devices need separate segmented networks due to limited security capabilities

---

## Check Your Understanding

**1. A company currently uses WPA2-Personal with a complex 20-character password. The security team wants to improve wireless security. What should they recommend and why?**

<details>
<summary>Show Answer</summary>
<strong>Recommendation: Upgrade to WPA2-Enterprise (802.1X) or WPA3</strong>

**Why WPA2-Personal is insufficient for enterprise:**

1. **Shared password:**
   - Everyone knows the same password
   - Former employees retain access until password changed
   - Password change affects all users

2. **No accountability:**
   - Can't track who connected
   - No individual logging
   - Compliance issues

3. **Offline attacks:**
   - Captured handshake can be cracked offline
   - Even 20 characters can be attacked with resources

---

**WPA2-Enterprise benefits:**

- Individual credentials (username/password or certificates)
- Unique encryption keys per user/session
- User accountability and logging
- Revoke single user without affecting others
- Integration with Active Directory

**WPA3 benefits (if supported):**

- SAE prevents offline dictionary attacks
- Forward secrecy protects past sessions
- Required PMF prevents deauth attacks

---

**Implementation path:**

1. Deploy RADIUS server (or use existing AD with NPS)
2. Configure APs for WPA2-Enterprise
3. Choose EAP method (PEAP for Windows environments)
4. Deploy server certificate
5. Configure clients (GPO for domain, MDM for mobile)
6. Run both SSIDs during transition
7. Migrate users to Enterprise SSID
8. Disable Personal SSID

**If WPA3:**
- Enable WPA3-Enterprise where supported
- WPA3 transition mode for older clients
</details>

**2. An organization is deploying 802.1X for wireless. They need to choose an EAP method. Compare EAP-TLS and PEAP for this deployment.**

<details>
<summary>Show Answer</summary>
<strong>EAP-TLS:</strong>

**How it works:**
- Client has certificate
- Server has certificate
- Mutual certificate authentication
- No passwords transmitted

**Pros:**
- Highest security
- Phishing-resistant (no password to steal)
- No dictionary attacks possible
- Mutual authentication

**Cons:**
- Requires PKI infrastructure
- Certificate on every client device
- Certificate management overhead
- Lost device = revoke certificate
- BYOD complexity

**Best for:**
- High-security environments
- Organizations with mature PKI
- Managed devices only

---

<strong>PEAP (Protected EAP):</strong>

**How it works:**
- Server has certificate
- Client validates server
- TLS tunnel established
- Username/password sent through tunnel

**Pros:**
- No client certificates needed
- Works with existing AD credentials
- Simpler deployment
- BYOD-friendly

**Cons:**
- Passwords can be phished (user enters)
- Subject to password attacks
- Less secure than EAP-TLS

**Best for:**
- Most enterprises
- Windows/AD environments
- BYOD support needed
- Organizations without PKI

---

<strong>Recommendation for typical enterprise:</strong>

**Start with PEAP:**
- Faster deployment
- Works with existing AD
- Acceptable security for most

**Consider EAP-TLS for:**
- High-security segments
- Privileged users
- Managed corporate devices

**Hybrid approach:**
- PEAP for general users
- EAP-TLS for sensitive access
- Certificate-based for devices (MDM-managed)
</details>

**3. Explain how an evil twin attack works and what defenses are effective against it.**

<details>
<summary>Show Answer</summary>
<strong>Evil Twin Attack Process:</strong>

**Setup:**
1. Attacker identifies target network (SSID)
2. Sets up AP with identical SSID
3. Positions near target location
4. Broadcasts stronger signal than legitimate AP

**Execution:**
1. Clients see two APs with same name
2. Clients connect to stronger signal (attacker)
3. Attacker's AP provides internet access (via mobile hotspot)
4. All client traffic passes through attacker

**Enhanced attack:**
1. Send deauth frames to legitimate AP's clients
2. Clients forced to reconnect
3. Connect to evil twin (stronger signal)
4. Attacker captures credentials, traffic

**Attack goals:**
- Credential harvesting (fake login portal)
- Traffic interception (MITM)
- Session hijacking
- Malware delivery

---

<strong>Defenses:</strong>

**1. WPA2/WPA3-Enterprise with certificate validation:**
- Server presents certificate during authentication
- Client validates certificate
- Evil twin can't present valid certificate
- Authentication fails on evil twin

**Critical:** Client MUST be configured to validate server certificate

**2. User education:**
- Don't ignore certificate warnings
- Verify network before connecting
- Report suspicious behavior

**3. Protected Management Frames (PMF/802.11w):**
- Prevents deauth attacks
- Clients stay connected to legitimate AP
- WPA3 requires PMF

**4. WIPS (Wireless IPS):**
- Detects duplicate SSIDs
- Alerts on evil twin
- Can contain (deauth evil twin's clients)

**5. VPN:**
- Encrypts traffic even on evil twin
- Attacker sees encrypted tunnel
- Reduces exposure (not prevention)

---

<strong>Most effective:</strong>

802.1X Enterprise with proper certificate validation. Evil twin cannot authenticate as legitimate RADIUS server.
</details>

**4. What is SAE in WPA3, and why is it more secure than the WPA2 PSK handshake?**

<details>
<summary>Show Answer</summary>
<strong>SAE (Simultaneous Authentication of Equals):</strong>

**What it is:**
- New authentication protocol in WPA3-Personal
- Replaces WPA2's 4-way handshake
- Also called "Dragonfly" key exchange

---

<strong>WPA2 PSK Vulnerability:</strong>

**4-way handshake capture:**
1. Attacker captures handshake (passive or force with deauth)
2. Handshake contains enough info to verify password guesses
3. Attacker tries passwords offline
4. No interaction with AP needed
5. Unlimited guesses at full CPU/GPU speed

**Result:** Weak passwords cracked in hours/days

---

<strong>How SAE Works:</strong>

**Key exchange:**
1. Both sides prove knowledge of password
2. Neither transmits the password or hash
3. Zero-knowledge proof
4. Generate session key together

**Properties:**
- Password-Authenticated Key Exchange (PAKE)
- Resistant to offline dictionary attacks
- Forward secrecy

---

<strong>Why SAE is More Secure:</strong>

**1. No offline attacks:**
- Can't capture handshake and crack offline
- Must interact with AP for each guess
- Rate limiting prevents brute force

**2. Forward secrecy:**
- Each session has unique keys
- Compromise of password doesn't expose past sessions
- Even recorded traffic can't be decrypted

**3. Equal authentication:**
- Client and AP authenticate simultaneously
- Neither can impersonate without password

---

<strong>Practical impact:</strong>

| Scenario | WPA2-PSK | WPA3-SAE |
|----------|----------|----------|
| 8-character password | Crackable in hours | Resistant |
| Captured handshake | Offline attack | Useless |
| Password later exposed | Past traffic decryptable | Past traffic safe |
| Brute force | Unlimited offline | Rate-limited online |
</details>

**5. A security audit finds employees have connected personal wireless routers to the corporate network for "better coverage." What's the security risk and how should this be addressed?**

<details>
<summary>Show Answer</summary>
<strong>Security Risks:</strong>

**1. Bypasses corporate security:**
- Personal APs likely use WPA2-Personal
- Weak or default passwords
- No enterprise authentication
- No logging/monitoring

**2. Creates unauthorized access:**
- Anyone with password accesses corporate network
- May extend signal outside building
- No NAC/posture checking

**3. Network segmentation bypass:**
- Rogue AP on internal VLAN
- Wireless clients get internal access
- May bypass firewall controls

**4. Shadow IT:**
- Unknown devices on network
- No inventory or management
- Security posture unknown

**5. Compliance violations:**
- PCI, HIPAA require controlled access
- Audit findings
- Potential fines

---

<strong>Technical Remediation:</strong>

**1. 802.1X on wired ports:**
```
interface fa0/1
 switchport mode access
 authentication port-control auto
 dot1x pae authenticator
```
Rogue APs can't authenticate, won't get network access.

**2. WIPS deployment:**
- Detects rogue APs
- Alerts security team
- Can contain rogues

**3. NAC (Network Access Control):**
- Profile connected devices
- Block unauthorized device types
- Quarantine unknown devices

**4. DHCP snooping:**
- Detect rogue DHCP servers
- Personal APs often run DHCP

---

<strong>Administrative Remediation:</strong>

**1. Policy:**
- Clear policy against unauthorized APs
- Communicated to all employees
- Consequences defined

**2. Education:**
- Explain risks
- Security awareness training
- Provide approved alternatives

**3. Improve corporate wireless:**
- Address coverage gaps
- Conduct site survey
- Deploy additional APs where needed

**4. Periodic scanning:**
- Regular wireless audits
- War walking with scanning tools
- Verify no rogue APs

---

<strong>Response to discovered APs:</strong>

1. Locate and remove immediately
2. Investigate what was connected
3. Check for unauthorized access
4. Document incident
5. Follow policy (disciplinary if applicable)
</details>

**6. Compare WPA2-Personal and WPA3-Personal. What improvements does WPA3 provide?**

<details>
<summary>Show Answer</summary>
<strong>WPA2-Personal:</strong>

**Authentication:** PSK (Pre-Shared Key) with 4-way handshake

**Encryption:** AES-CCMP (128-bit)

**Key exchange:** Based on password, ANonce, SNonce

**Vulnerabilities:**
- Offline dictionary attacks (capture handshake)
- KRACK attack (mitigated by patches)
- Deauthentication attacks (no PMF required)

---

<strong>WPA3-Personal:</strong>

**Authentication:** SAE (Simultaneous Authentication of Equals)

**Encryption:** AES-CCMP (128-bit minimum)

**Key exchange:** Dragonfly PAKE

**Improvements:**

| Feature | WPA2-Personal | WPA3-Personal |
|---------|---------------|---------------|
| Key exchange | 4-way handshake | SAE (Dragonfly) |
| Offline attacks | Vulnerable | Resistant |
| Forward secrecy | No | Yes |
| Management frames | PMF optional | PMF required |
| Deauth protection | Optional | Required |
| Minimum password | 8 chars | 8 chars |

---

<strong>Key WPA3 Improvements Explained:</strong>

**1. SAE replaces PSK handshake:**
- Password proven without transmitting
- Can't capture and crack offline
- Online attacks rate-limited

**2. Forward secrecy:**
- Session keys not derived from password alone
- Each session unique
- Past sessions can't be decrypted

**3. Required PMF (802.11w):**
- Management frames protected
- Deauth attacks blocked
- Forced in WPA3

**4. Natural password protection:**
- Even weaker passwords more secure
- Offline attack not feasible

---

<strong>Practical impact:</strong>

**WPA2 scenario:**
- Attacker captures handshake
- 8-character password cracked in hours
- Network compromised

**WPA3 scenario:**
- Attacker can't use captured data
- Must guess online (rate-limited)
- 8-character password takes years online
</details>

**7. What is PMF (Protected Management Frames), and why is it important for wireless security?**

<details>
<summary>Show Answer</summary>
<strong>PMF (Protected Management Frames) - 802.11w:</strong>

**What it protects:**
- Management frames (not data frames)
- Deauthentication frames
- Disassociation frames
- Action frames

**How it works:**
- Management frames encrypted/authenticated
- MIC (Message Integrity Check) on frames
- Replay protection
- Only legitimate AP can send valid management frames

---

<strong>Why It's Needed:</strong>

**Without PMF:**
- Management frames sent unencrypted
- No authentication of sender
- Anyone can forge management frames

**Attacks prevented by PMF:**

**1. Deauthentication attacks:**
```
Without PMF:
Attacker → [Fake Deauth] → Client
Client disconnects
```
With PMF: Fake deauth has no valid MIC, ignored

**2. Disassociation attacks:**
- Similar to deauth
- Forces client to reconnect
- Used with evil twin attacks

**3. DoS attacks:**
- Continuous deauth flood
- Clients can't stay connected
- PMF blocks forged frames

---

<strong>PMF Modes:</strong>

**Optional (WPA2):**
- Not required
- Client and AP negotiate
- Many devices don't support

**Required (WPA3):**
- Must support PMF
- Mandatory for certification
- All WPA3 devices support

---

<strong>Deployment:</strong>

| Setting | Meaning |
|---------|---------|
| Disabled | No PMF (vulnerable) |
| Optional | Use if both support |
| Required | Must support or can't connect |

**Best practice:**
- WPA3: Automatic (required)
- WPA2: Enable "optional" at minimum
- Enable "required" if all clients support

---

<strong>Exam note:</strong>

PMF is THE answer for deauthentication attack mitigation. WPA3 requires it; WPA2 should enable it.
</details>

**8. Design wireless security for a medium-sized company with: corporate employees, contractors, guests, and IoT devices. Show network architecture and security controls.**

<details>
<summary>Show Answer</summary>
<strong>Network Architecture:</strong>

```
                         INTERNET
                             │
                       ┌─────▼─────┐
                       │  Firewall │
                       └─────┬─────┘
                             │
           ┌─────────────────┼─────────────────┐
           │                 │                 │
     ┌─────▼─────┐     ┌─────▼─────┐     ┌─────▼─────┐
     │   Core    │     │  RADIUS   │     │   WIPS    │
     │  Switch   │     │  Server   │     │Controller │
     └─────┬─────┘     └───────────┘     └───────────┘
           │
    ┌──────┼──────────────┬──────────────┐
    │      │              │              │
┌───▼───┐ ┌▼─────┐    ┌───▼───┐    ┌─────▼─────┐
│VLAN 10│ │VLAN 20│    │VLAN 30│    │  VLAN 40  │
│Corp   │ │Contrctr│   │ Guest │    │    IoT    │
└───┬───┘ └───┬───┘    └───┬───┘    └─────┬─────┘
    │         │            │              │
  ┌─▼─┐     ┌─▼─┐        ┌─▼─┐          ┌─▼─┐
  │AP1│     │AP2│        │AP3│          │AP4│
  └───┘     └───┘        └───┘          └───┘
```

---

<strong>SSIDs and Security Settings:</strong>

| SSID | VLAN | Authentication | Encryption | Purpose |
|------|------|----------------|------------|---------|
| CorpSecure | 10 | WPA3-Enterprise | AES-256 | Employees |
| Contractor | 20 | WPA2-Enterprise | AES-128 | Contractors |
| Guest | 30 | Captive Portal | WPA3-OWE | Visitors |
| IoT-Internal | 40 | WPA2-PSK | AES-128 | IoT devices |

---

<strong>Corporate (VLAN 10):</strong>

**Security:**
- WPA3-Enterprise (802.1X)
- EAP-TLS for managed devices
- PEAP for BYOD with MDM
- Certificate validation required
- Full network access

**Controls:**
- Device certificates via MDM
- NAC posture checking
- Full internal access
- Egress filtering

---

<strong>Contractor (VLAN 20):</strong>

**Security:**
- WPA2-Enterprise (compatibility)
- PEAP with sponsored accounts
- Time-limited credentials
- Certificate validation

**Controls:**
- Limited network access
- Specific resources only
- Firewall between VLAN 20 and internal
- Contractor account expiration

---

<strong>Guest (VLAN 30):</strong>

**Security:**
- WPA3 Enhanced Open (OWE) or captive portal
- Terms of service acceptance
- No password required

**Controls:**
- Internet only
- No internal access
- Bandwidth limiting
- Client isolation
- Content filtering

**Firewall rules:**
```
Allow: VLAN 30 → Internet (HTTP, HTTPS, DNS)
Deny: VLAN 30 → Internal networks
Deny: VLAN 30 clients → each other
```

---

<strong>IoT (VLAN 40):</strong>

**Security:**
- WPA2-PSK (many devices don't support Enterprise)
- Strong, rotated password
- Hidden SSID (slight obscurity)

**Controls:**
- Isolated network
- Firewall to specific internal resources only
- No internet (if not required)
- Device inventory mandatory
- MAC filtering (additional layer)

**Firewall rules:**
```
Allow: VLAN 40 → Specific management server
Allow: VLAN 40 → Vendor cloud (if required)
Deny: VLAN 40 → All internal networks
Deny: VLAN 40 → Guest network
```

---

<strong>Additional Controls:</strong>

**WIPS:**
- Detect rogue APs
- Detect evil twin attempts
- Alert on unauthorized clients

**Monitoring:**
- Central logging
- Authentication logs
- Traffic analysis
- Anomaly detection

**Physical:**
- APs in secure locations
- Wired ports disabled in public areas
- 802.1X on wired connections
</details>

**9. What is WPS (Wi-Fi Protected Setup) and why should it be disabled?**

<details>
<summary>Show Answer</summary>
<strong>WPS (Wi-Fi Protected Setup):</strong>

**Purpose:** Simplify wireless connection for home users

**Methods:**
1. **PIN method:** Enter 8-digit PIN from router
2. **Push button:** Press button on router and client
3. **NFC:** Touch devices together
4. **USB:** Transfer credentials via USB

---

<strong>PIN Vulnerability:</strong>

**Design flaw:**
- 8-digit PIN checked in two halves
- First 4 digits: 10,000 combinations
- Last 4 digits: 1,000 combinations (last digit is checksum)
- Total: 11,000 combinations (not 100 million)

**Attack:**
```
Step 1: Brute force first 4 digits
        AP confirms correct/incorrect
        Max 10,000 attempts

Step 2: Brute force last 3 digits (checksum known)
        Max 1,000 attempts

Total: 11,000 max attempts
Time: 4-10 hours
```

**Tools:** Reaver, Bully

**Result:** WPA2 password recovered regardless of password strength

---

<strong>Why Disable WPS:</strong>

1. **Bypasses strong password:**
   - 30-character WPA2 password doesn't help
   - WPS reveals the password
   - Complete bypass of wireless security

2. **No rate limiting on many routers:**
   - Unlimited attempts
   - Fast brute force

3. **Lockout bypass:**
   - Some routers lock out, then reset
   - Patient attacker succeeds

4. **Push button less vulnerable but:**
   - Requires physical access
   - Window of vulnerability while active

---

<strong>Remediation:</strong>

**Disable WPS entirely:**
- Router admin interface
- Verify actually disabled (some "disable" doesn't work)
- Test with Reaver to confirm

**If can't disable:**
- Use router without WPS
- Enable lockout (better than nothing)
- Monitor for attacks

---

<strong>Exam note:</strong>

WPS = security vulnerability. Always disable. Strong WPA2 password means nothing if WPS enabled.
</details>

**10. A user reports they received a certificate warning when connecting to the corporate wireless network. What could cause this and how should they respond?**

<details>
<summary>Show Answer</summary>
<strong>Potential Causes:</strong>

**1. Evil twin attack (CRITICAL):**
- Attacker's AP presenting fake certificate
- Certificate doesn't match corporate CA
- Client correctly warning of impersonation
- **Do NOT proceed**

**2. Expired server certificate:**
- Corporate RADIUS cert expired
- Legitimate but needs renewal
- IT should fix immediately

**3. Wrong CA on client:**
- Client not configured with corporate CA
- Can't validate legitimate certificate
- Configuration issue

**4. Server certificate renewed:**
- New cert not from expected CA
- Or different subject name
- IT should communicate changes

**5. Clock/date issue:**
- Client time very wrong
- Cert appears expired or not yet valid

---

<strong>User Response:</strong>

**DO NOT:**
- Click "Continue anyway"
- Accept invalid certificate
- Enter credentials on untrusted network

**DO:**
1. Stop connection attempt
2. Try different location (evil twin may be localized)
3. Contact IT/Help Desk immediately
4. Report location where warning occurred
5. Do not use wireless until resolved

---

<strong>IT Investigation:</strong>

**Check for attack:**
- WIPS alerts for that location?
- Other users reporting same?
- Physical inspection for rogue APs

**Check for configuration:**
- RADIUS certificate status
- Certificate expiration date
- Certificate chain valid

**Check client:**
- Correct CA configured?
- Certificate not revoked?
- System time correct?

---

<strong>Resolution by Cause:</strong>

| Cause | Resolution |
|-------|------------|
| Evil twin | Locate and remove, alert security |
| Expired cert | Renew RADIUS certificate |
| Wrong CA | Deploy correct CA to clients |
| New cert | Update client configuration |
| Time issue | Correct client clock |

---

<strong>Prevention:</strong>

**Client configuration:**
- Pre-configure certificate validation
- Deploy CA via GPO/MDM
- Specify exact server name to expect

**User education:**
- Never ignore cert warnings
- Report immediately
- Understand evil twin risk

**Monitoring:**
- WIPS for rogue detection
- Certificate expiration monitoring
- User feedback mechanism
</details>

---

## Next Lesson Preview

In **Lesson 19: Identity and Access Management**, we'll dive deep into how users and systems are authenticated and authorized. You'll learn about authentication factors, MFA, SSO, federation, and privileged access management.

---

✅ **Lesson 18 Complete**

**Progress:** 18 of 30 lessons complete (60%)

---

*Next up: Lesson 19 - Identity and Access Management*