# Lab 43: Wireless Security - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Why WEP is Broken

**Reasons WEP is completely insecure:**

1. **Weak IVs (Initialization Vectors):** Only 24 bits, too short, leads to key recovery
2. **RC4 key scheduling flaw:** Algorithm vulnerability allows key derivation
3. **No integrity protection:** Packets can be modified undetected
4. **Key reuse:** Same key for all users, never changes
5. **Crackable in minutes:** Tools like aircrack-ng can break WEP in under 5 minutes

**Never use because:** Any data transmitted is essentially plaintext to attackers.

---

### Question 2: WPA2-Personal vs Enterprise

| Aspect | WPA2-Personal | WPA2-Enterprise |
|--------|---------------|-----------------|
| Authentication | Pre-Shared Key (PSK) | Individual credentials (802.1X) |
| Password sharing | Everyone knows same password | Each user has unique login |
| User tracking | Can't identify who's connected | Full user identification |
| Revocation | Must change password for all | Disable individual account |
| Infrastructure | Router only | RADIUS server required |
| Security level | Good | Better |

**More secure:** WPA2-Enterprise (individual accountability, no shared secrets)

---

### Question 3: WPA3 Improvement

**WPA3 uses SAE (Simultaneous Authentication of Equals)** instead of the 4-way handshake.

**Protection against offline dictionary attacks:**
- WPA2: Attacker captures handshake → brute-force offline with wordlists
- WPA3: Each password guess requires network interaction → can't crack offline
- Even if password is weak, attacker can't capture and crack at leisure

**Additional WPA3 improvements:**
- Forward secrecy (past traffic can't be decrypted even if password compromised later)
- Protected Management Frames (mandatory)
- 192-bit security mode for Enterprise

---

### Question 4: Evil Twin Attack

**What it is:** Attacker creates fake access point with identical SSID to legitimate network. Victims connect to the fake AP, and attacker can intercept all traffic.

**How it works:**
1. Attacker sets up AP with same name as target (e.g., "CoffeeShop_WiFi")
2. May use deauth attack to disconnect users from real AP
3. Victims auto-connect to stronger signal (evil twin)
4. All traffic goes through attacker

**Protection:**
- Use VPN on public Wi-Fi
- Verify network before connecting
- Don't auto-connect to known networks
- Use HTTPS websites
- Look for certificate warnings
- Be suspicious of duplicate networks

---

### Question 5: Guest Network Isolation

**Why important:**

1. **Protects internal resources:** Guests can't access file shares, printers, servers
2. **Limits attack surface:** If guest device is infected, can't spread to corporate
3. **Regulatory compliance:** Separates customer data from guest access
4. **Bandwidth management:** Can limit guest bandwidth
5. **Legal protection:** Guests can't access confidential data

**Implementation:**
- Separate VLAN
- Separate SSID
- Firewall rules blocking internal access
- Internet access only

---

## Section 2: Activities - Answers

### Activity A: Wireless Connection Analysis

**Typical output values:**

| Property | Example Value |
|----------|---------------|
| Authentication | WPA2-Personal |
| Cipher | CCMP (AES) |
| Radio type | 802.11ac or 802.11ax |
| Channel | 36 (5 GHz) or 6 (2.4 GHz) |

**Profile security levels:**
- Open = No security
- WPA2-Personal = PSK
- WPA2-Enterprise = 802.1X

---

### Activity B: Protocol Timeline

| Protocol | Year | Encryption | Key Size | Status |
|----------|------|------------|----------|--------|
| WEP | 1999 | RC4 | 40/104-bit | Broken, deprecated |
| WPA | 2003 | TKIP (RC4) | 128-bit | Deprecated |
| WPA2 | 2004 | AES-CCMP | 128-bit | Current standard |
| WPA3 | 2018 | AES-GCMP | 128/192-bit | Latest standard |

**Vulnerabilities:**

| Protocol | Main Weakness |
|----------|---------------|
| WEP | Weak IVs, RC4 flaws, crackable in minutes |
| WPA (TKIP) | Temporal workaround, still uses RC4 base |
| WPA2 (AES) | Offline dictionary attack on PSK, KRACK attack |
| WPA3 | Some early implementation bugs (Dragonblood) |

---

### Activity C: WPA2 Personal vs Enterprise

| Feature | WPA2-Personal (PSK) | WPA2-Enterprise |
|---------|---------------------|-----------------|
| Authentication | Shared password | Username/password or certificate |
| Who knows password | All users | Only the user knows their own |
| User tracking | No | Yes, logged per user |
| Scalability | Poor (one password for all) | Excellent |
| Server required | No | Yes (RADIUS) |
| Typical use | Home, small office | Corporate, education |
| Security level | Good | High |

**802.1X Components:**

| Component | Role |
|-----------|------|
| Supplicant | Client requesting access (laptop, phone) |
| Authenticator | AP or switch controlling access |
| Authentication Server | RADIUS server checking credentials |

---

### Activity D: Wireless Security Audit

**Best practice settings:**

| Setting | Recommended | Why |
|---------|-------------|-----|
| Security protocol | WPA2 or WPA3 | Strong encryption |
| WPS | Disabled | PIN brute-force vulnerability |
| Admin password | Changed | Default passwords are public knowledge |
| SSID | Changed | Identifies router brand/model |
| SSID broadcast | Personal preference | Hiding provides minimal security |
| Guest network | Isolated if used | Protects main network |
| Firmware | Up to date | Security patches |
| MAC filtering | Low value | Easily spoofed |

---

### Activity E: SSID and Hidden Networks

**Hidden SSID analysis:**

| Aspect | Hidden | Visible |
|--------|--------|---------|
| Basic scan visible | No | Yes |
| Detectable with tools | Yes | Yes |
| Stops determined attacker | No | No |
| Client probe behavior | Client broadcasts SSID to find network | No broadcast |
| Security benefit | Minimal ("security through obscurity") | None (but honest) |

**Hidden SSID actually REDUCES security:**
- Client devices constantly probe for hidden networks
- Probes can be captured and reveal network name
- Attacker can set up evil twin based on probes

---

### Activity F: WPS

**WPS methods:**

| Method | How It Works | Security Risk |
|--------|--------------|---------------|
| Push Button | Press button on router and client | Brief window of vulnerability |
| PIN Entry | 8-digit PIN (printed on router) | Brute-forceable (11,000 tries max) |
| NFC | Touch phone to router | Requires physical access |

**Why disable WPS:**

1. **PIN is crackable:** Only 11,000 effective combinations due to checksum
2. **Offline attack:** Some implementations allow offline brute force
3. **Tools available:** Reaver, Bully automate the attack
4. **Default enabled:** Many routers ship with WPS on
5. **No lockout:** Some routers don't lock out after failed attempts

---

### Activity G: Wireless Attack Identification

| Attack | Description |
|--------|-------------|
| Evil Twin | C - Fake AP mimicking legitimate network |
| Rogue Access Point | D - Unauthorized AP connected to corporate network |
| Deauthentication | B - Forcing clients to disconnect from legitimate AP |
| Wardriving | E - Driving around to find wireless networks |
| Packet Sniffing | A - Capturing wireless traffic to analyze data |
| WPS Brute Force | F - Attempting all WPS PINs |
| KRACK | G - Key Reinstallation Attack against WPA2 |

---

## Section 3: Reflection - Answers

### Scenario 1: Coffee Shop Banking Attack

**What happened:** Evil twin attack. Attacker set up fake "CoffeeShop_WiFi_Free" (or similar). User connected to attacker's AP. Attacker performed man-in-the-middle attack, capturing credentials.

**Protection measures:**
1. Use VPN on public Wi-Fi
2. Verify network with staff before connecting
3. Check for HTTPS and valid certificates
4. Don't do banking on public Wi-Fi
5. Use mobile data for sensitive transactions
6. Enable MFA on banking
7. Look for duplicate/similar network names

---

### Scenario 2: WPA2-Personal with 200 Users

**Risk:** Departed employee still knows the password and can:
- Connect from parking lot
- Share password with others
- Access network resources
- Launch attacks appearing as internal user

**Proper solution:**
1. **Immediate:** Change the Wi-Fi password
2. **Long-term:** Migrate to WPA2-Enterprise
   - Each user gets individual credentials
   - When employee leaves, disable their account
   - No need to change everyone's password
   - Full audit trail of who's connected

---

### Scenario 3: Unauthorized AP with Corporate SSID

**What it is:** Rogue Access Point (potentially evil twin if intentional)

**Why dangerous:**
- Could be attacker's evil twin capturing credentials
- Could be employee's personal router (accidental security hole)
- Bypasses corporate security controls
- Could provide network access to unauthorized users

**Immediate steps:**
1. **Locate physically:** Use signal strength to find it
2. **Disconnect from network:** Remove from switch port
3. **Preserve evidence:** Document MAC address, settings
4. **Investigate:** Determine if malicious or accidental
5. **Communicate:** Alert security team, potentially users
6. **Remediate:** Reset compromised credentials if malicious
7. **Prevent:** Implement 802.1X, NAC, wireless IDS

---

### Scenario 4: WPS PIN Attack

**How it happened:**
1. Neighbor used tool like Reaver or Bully
2. Attacked WPS PIN (only ~11,000 combinations)
3. Once PIN cracked, obtained WPA2 password
4. Connected to network

**What user should do:**
1. **Immediately:** Disable WPS on router
2. **Change Wi-Fi password:** Attacker has current one
3. **Check router admin password:** Change if default
4. **Review connected devices:** Disconnect unknown devices
5. **Update firmware:** May have WPS fixes
6. **Enable logging:** Monitor for further access
7. **Consider MAC filtering:** Additional (weak) layer

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    WIRELESS SECURITY QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SECURITY PROTOCOLS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  WEP      → Broken, never use (RC4 encryption, weak IVs)                  ║
║  WPA      → Deprecated (TKIP - temporary fix for WEP)                     ║
║  WPA2     → Current standard (AES-CCMP encryption)                        ║
║  WPA3     → Latest (SAE handshake, forward secrecy)                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WPA2 MODES                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Personal (PSK)  → Shared password, home/small office                     ║
║  Enterprise      → Individual credentials, RADIUS server, 802.1X          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  802.1X COMPONENTS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Supplicant     → Client device requesting access                         ║
║  Authenticator  → Access point / switch                                   ║
║  Auth Server    → RADIUS server verifying credentials                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMMON ATTACKS                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Evil Twin      → Fake AP mimicking legitimate network                    ║
║  Rogue AP       → Unauthorized AP on corporate network                    ║
║  Deauth         → Force disconnect clients                                ║
║  KRACK          → Key reinstallation attack on WPA2                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BEST PRACTICES                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ✓ Use WPA2/WPA3 with AES          ✗ Don't use WEP or WPA-TKIP           ║
║  ✓ Disable WPS                      ✗ Don't trust open networks           ║
║  ✓ Change default passwords         ✗ Don't use default SSIDs             ║
║  ✓ Use VPN on public Wi-Fi         ✓ Isolate guest networks              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  netsh wlan show interfaces     → Current connection details              ║
║  netsh wlan show profiles       → Saved networks                          ║
║  netsh wlan show networks       → Available networks                      ║
╚═══════════════════════════════════════════════════════════════════════════╝
```