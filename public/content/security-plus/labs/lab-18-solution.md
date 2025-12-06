# Lab 18: Wireless Security Architecture - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Wireless security is heavily tested on Security+.

---

## Section 1: Concept Check - Answers

**1. Why is WEP broken?**

**Answer:**

WEP vulnerabilities:
- **24-bit IV (Initialization Vector):** Too short, IVs repeat frequently
- **IV transmitted in plaintext:** Attacker can collect IVs
- **Static keys:** Same key used by all clients indefinitely
- **RC4 cipher weaknesses:** Known vulnerabilities when IVs are reused
- **No mutual authentication:** Client doesn't verify AP
- **Weak key scheduling:** Related-key attacks possible

**Result:** Can be cracked in minutes with freely available tools.

---

**2. WPA2-Personal vs WPA2-Enterprise:**

**Answer:**

| Aspect | Personal (PSK) | Enterprise (802.1X) |
|--------|----------------|---------------------|
| **Authentication** | Pre-shared key (password) | Individual credentials via RADIUS |
| **Key management** | Single key for everyone | Unique keys per user/session |
| **Scalability** | Poor (must change PSK for all) | Excellent (disable individual accounts) |
| **Accountability** | None (all share key) | Full (tied to user identity) |

---

**3. WPA3 improvements over WPA2:**

**Answer:**

- **SAE (Simultaneous Authentication of Equals):** Replaces PSK 4-way handshake, prevents offline dictionary attacks
- **Forward secrecy:** Captured traffic can't be decrypted later even if password obtained
- **192-bit security (Enterprise):** Stronger cryptographic suite
- **Enhanced Open (OWE):** Encryption on open networks without password
- **Protected Management Frames:** Mandatory (prevents deauth attacks)

---

**4. 802.1X in wireless networks:**

**Answer:**

**802.1X** is port-based network access control that authenticates users before granting network access.

**How it works:**
1. Client (supplicant) connects to AP
2. AP (authenticator) blocks all traffic except authentication
3. Credentials sent to RADIUS server (authentication server)
4. RADIUS validates and responds accept/reject
5. If accepted, AP opens port and assigns VLAN/keys

---

**5. Evil twin attack and protection:**

**Answer:**

**Evil twin:** Attacker creates fake AP with same SSID as legitimate network. Victims connect to attacker's AP, allowing traffic interception.

**Protection:**
- Use WPA2/WPA3-Enterprise (certificate validation)
- VPN for all traffic
- Verify AP before connecting (BSSID)
- WIPS detection
- User awareness training

---

## Section 2: Activity Solutions

### Activity A: Protocol Evolution - Answers

| Protocol | Year | Encryption | Key Size | Status |
|----------|------|------------|----------|--------|
| WEP | 1997 | RC4 | 40/104-bit | Broken |
| WPA | 2003 | TKIP/RC4 | 128-bit | Deprecated |
| WPA2 | 2004 | AES-CCMP | 128-bit | Current standard |
| WPA3 | 2018 | AES-GCMP | 128/192-bit | Recommended |

**Vulnerabilities:**

| Protocol | Vulnerabilities | Attacks |
|----------|-----------------|---------|
| WEP | IV reuse, static keys, RC4 | Aircrack, Wep0ff |
| WPA | TKIP weaknesses | Beck-Tews, Ohigashi-Morii |
| WPA2 | 4-way handshake capture | KRACK, dictionary attacks |
| WPA3 | Implementation flaws | Dragonblood (specific implementations) |

---

### Activity B: WPA2 vs WPA3 - Answers

| Feature | WPA2 | WPA3 |
|---------|------|------|
| Key exchange | 4-way handshake (PSK) | SAE (Dragonfly) |
| Encryption | AES-CCMP | AES-GCMP |
| Forward secrecy | No | Yes |
| Offline dictionary protection | No | Yes |
| Public network | Open (no encryption) | Enhanced Open (OWE) |
| Enterprise | 128-bit | 192-bit mode available |

**SAE solves:** Offline dictionary attacks. Even with captured handshake, attacker cannot brute-force password offline.

**Different from PSK:** SAE uses zero-knowledge proof—password never transmitted, even encrypted. Each session has unique keys.

**Forward secrecy:**

| Protocol | Decrypt Old Traffic? | Why |
|----------|---------------------|-----|
| WPA2-PSK | Yes | Same PMK derived from password |
| WPA3-SAE | No | Each session has unique keys |

---

### Activity C: Personal vs Enterprise - Answers

| Aspect | Personal | Enterprise |
|--------|----------|------------|
| Authentication | Shared password | Individual credentials |
| Key management | One key for all | Per-user keys |
| Scalability | Poor | Excellent |
| Accountability | None | Full audit trail |
| Complexity | Simple | Requires RADIUS, certificates |
| Best for | Home, small office | Organizations |

**When to use:**

| Scenario | Mode | Reason |
|----------|------|--------|
| Home | Personal | Simple, few users |
| Coffee shop | Personal + captive portal | Guest access |
| Corporate (500) | Enterprise | User accountability, scalability |
| Hospital | Enterprise | HIPAA, user tracking |
| Hotel guest | Personal + captive portal | Transient users |
| University | Enterprise | Many users, accountability |

**PSK weakness when employee leaves:** All remaining employees share the compromised password. Must change password and redistribute to everyone.

**Enterprise solves this:** Disable the departing employee's account—no impact on others.

---

### Activity D: 802.1X and EAP - Answers

| Component | Role | Example |
|-----------|------|---------|
| Supplicant | Client requesting access | Laptop, phone |
| Authenticator | Controls access | Wireless AP, switch |
| Auth Server | Validates credentials | RADIUS server |

**802.1X process:**

| Step | Action |
|------|--------|
| 1 | Client associates with AP |
| 2 | AP sends EAP-Request/Identity |
| 3 | Client responds with identity |
| 4 | AP forwards to RADIUS |
| 5 | RADIUS authenticates (EAP method) |
| 6 | RADIUS sends Accept/Reject, AP grants/denies access |

**EAP methods:**

| Method | Authentication | Certs | Security |
|--------|----------------|-------|----------|
| EAP-TLS | Mutual certificates | Both | Highest |
| EAP-TTLS | Server cert + various inner | Server | High |
| PEAP | Server cert + MSCHAPv2 | Server | High |
| EAP-FAST | PAC (no cert option) | Optional | Medium-High |

**Certificate requirements:**

| Method | Server Cert | Client Cert |
|--------|-------------|-------------|
| EAP-TLS | Required | Required |
| EAP-TTLS | Required | No |
| PEAP | Required | No |
| EAP-FAST | Optional | No |

**Most secure:** EAP-TLS—mutual authentication with certificates eliminates password-based attacks.

---

### Activity E: Wireless Attacks - Answers

| Attack | Description | Target |
|--------|-------------|--------|
| Evil twin | Fake AP mimicking legitimate SSID | Users |
| Rogue AP | Unauthorized AP on network | Network |
| Deauthentication | Force disconnect clients | Availability, enable other attacks |
| KRACK | Key reinstallation attack on WPA2 | WPA2 handshake |
| Dragonblood | Attacks on WPA3 SAE | WPA3 implementations |
| Wardriving | Scanning for wireless networks | Reconnaissance |
| WPS attack | Brute force WPS PIN | WPS-enabled routers |
| Jamming | RF interference | Availability (DoS) |

**Evil twin flow:**

| Step | Action |
|------|--------|
| 1 | Set up AP with victim's SSID |
| 2 | Broadcast stronger signal |
| 3 | Victim connects to evil twin |
| 4 | Intercept/modify traffic |

**Evil twin detection:**

| Method | Implementation |
|--------|----------------|
| WIPS | Monitors for duplicate SSIDs |
| Certificate validation | Enterprise auth verifies AP |
| BSSID verification | Compare MAC addresses |

**Deauthentication:**
- Sends disconnect frames to clients
- Can enable handshake capture for cracking
- Mitigated by 802.11w (Protected Management Frames)

---

### Activity F: Best Practices - Answers

| Setting | Recommended | Why |
|---------|-------------|-----|
| Encryption | WPA3 (or WPA2 minimum) | Strong encryption |
| WPS | Disabled | Brute-force vulnerable |
| Default SSID | Change | Don't reveal AP vendor |
| Admin password | Strong, unique | Prevent config changes |
| Firmware | Current | Security patches |
| SSID broadcast | Enabled (hiding provides minimal security) | Hidden SSIDs still detectable |
| MAC filtering | Optional (easily bypassed) | Defense in depth only |
| Guest network | Isolated VLAN | Separate untrusted devices |
| Management interface | HTTPS, restricted access | Protect configuration |

**Security value rating:**

| Control | Value | Why |
|---------|-------|-----|
| WPA3 encryption | High | Core protection |
| Hidden SSID | Low | Trivially discovered |
| MAC filtering | Low | Easily spoofed |
| Strong passphrase | High | Prevents cracking |
| Disable WPS | High | Eliminates major vulnerability |
| Guest isolation | High | Limits breach impact |
| Firmware updates | High | Fixes known vulnerabilities |

---

### Activity G: Segmentation - Answers

| Network | Purpose | Isolation |
|---------|---------|-----------|
| Corporate | Employees, sensitive data | High (separate VLAN, firewall) |
| Guest | Visitors, internet only | High (isolated, no internal access) |
| IoT | Smart devices, sensors | High (no access to corporate) |
| Management | AP management, IT | Highest (restricted access) |

**Guest network controls:**

| Control | Implementation |
|---------|----------------|
| Captive portal | Accept terms, optional auth |
| Bandwidth limiting | QoS policies |
| Client isolation | Clients can't see each other |
| Separate VLAN | No route to internal |
| Time limits | Session timeout |
| AUP | Display before access |

**IoT isolation:** Devices often have poor security, can't be updated, potential entry point for attackers.

---

### Activity H: Site Survey - Answers

| Purpose | Description |
|---------|-------------|
| Coverage | Ensure adequate signal |
| Interference | Identify sources of interference |
| Capacity | Plan for user density |
| Security | Detect rogues, signal leakage |

**Security findings:**

| Finding | Implication |
|---------|-------------|
| Signal outside building | Attackers can connect from parking lot |
| Channel overlap | May indicate rogue AP |
| Rogue APs | Unauthorized network access |
| Weak signal areas | Users may connect to stronger evil twin |

**Heat map:** Visual representation of signal strength. Shows where signal is strong (red) and weak (blue).

**Signal leakage concern:** Attackers outside your building can attempt to connect, capture traffic, or set up evil twins.

**Mitigation:**

| Method | Description |
|--------|-------------|
| Reduce AP power | Lower signal doesn't reach outside |
| Directional antennas | Point signal inward |
| Shielding | Window film, wall materials |

---

### Activity I: Captive Portal - Answers

| Use Case | Purpose |
|----------|---------|
| Guest access | Provide controlled internet |
| Terms acceptance | Legal compliance |
| Authentication | Verify identity |
| Paid access | Monetize access |

**Security considerations:**

| Consideration | Best Practice |
|---------------|---------------|
| HTTPS | Always use TLS |
| Credentials | Don't collect if unnecessary |
| Sessions | Timeout, reauthenticate |
| Data collection | Minimal, privacy policy |
| Bandwidth | Limit to prevent abuse |

**Security gap:** Traffic BEFORE captive portal authentication is unencrypted. Initial DNS, DHCP, and probe requests are visible.

---

### Activity J: WIPS/WIDS - Answers

| Capability | Description |
|------------|-------------|
| Rogue AP detection | Find unauthorized APs |
| Evil twin detection | Identify duplicate SSIDs |
| Deauth detection | Alert on attack patterns |
| Unauthorized client | Detect unknown devices |
| Policy enforcement | Ensure compliance |

| Aspect | WIDS | WIPS |
|--------|------|------|
| Detection | Yes | Yes |
| Prevention | No | Yes |
| Response | Alert only | Can block/deauth |

---

### Activity K: Troubleshooting - Answers

| Symptom | Cause | Investigation |
|---------|-------|---------------|
| Can't connect after password change | Client has old password | Update saved profile |
| Intermittent disconnects | Deauth attack, interference | Check for attacks, site survey |
| Connected but no internet | Captive portal, VLAN issue | Check portal, verify VLAN |
| Certificate errors | Expired cert, wrong CA | Verify certificate chain |
| Auth failures | Wrong credentials, RADIUS issue | Check RADIUS logs |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: WPA2-PSK with 200 employees, one terminated**

**Risks:**
- Ex-employee still has password
- Can connect from parking lot
- Can capture traffic of other employees

**Redesign:**
- Implement WPA2/WPA3-Enterprise with RADIUS
- Integrate with Active Directory
- Disable terminated employee's account
- Individual credentials = individual accountability

---

**Scenario 2: Can't access resources at coffee shop "CompanyWiFi"**

**What's happening:** Evil twin attack. Attacker set up fake AP with company SSID at coffee shop.

**Prevention:**
- Use WPA2-Enterprise with certificate validation
- Train users: company WiFi only works at company locations
- VPN for all company resources
- Certificate-based authentication would fail on evil twin

---

**Scenario 3: Disable guest network security**

**Risks explained:**
- Traffic visible to anyone
- Malicious users can intercept guest data
- Legal liability for user data
- No accountability for actions

**Alternative:**
- WPA2 with simple password on captive portal
- WPA3 Enhanced Open (encryption without password)
- Captive portal for terms acceptance
- Client isolation to prevent guest-to-guest attacks

---

## Key Exam Tips

1. **WEP:** Broken, never use. 24-bit IV, RC4 weaknesses

2. **WPA:** TKIP, deprecated. Better than WEP but not secure

3. **WPA2:** AES-CCMP, current standard. Vulnerable to offline dictionary attacks with PSK

4. **WPA3:** SAE, forward secrecy, protects against offline attacks

5. **Personal (PSK):** Shared password, home/small office
   **Enterprise (802.1X):** Individual credentials, RADIUS, organizations

6. **802.1X components:** Supplicant, Authenticator, Authentication Server

7. **EAP-TLS:** Most secure, requires certificates on both sides

8. **Evil twin:** Fake AP with same SSID, intercepts traffic

9. **Deauth attack:** Disconnect clients, mitigated by 802.11w (PMF)

10. **WPS:** Disable it—brute-force vulnerable

---

## Common Mistakes to Avoid

❌ Thinking hidden SSID provides security (it doesn't)

❌ Relying on MAC filtering for security (easily spoofed)

❌ Using WPA2-PSK for large organizations (no accountability)

❌ Leaving WPS enabled (major vulnerability)

❌ Confusing EAP-TLS (certs both sides) with PEAP (server cert only)

❌ Forgetting that WPA3-SAE prevents OFFLINE attacks (online still possible)

---

**Congratulations on completing Lab 18!**

Wireless security is essential knowledge—these concepts apply to every network with wireless access.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 18: Wireless Security Architecture - Solution Guide*