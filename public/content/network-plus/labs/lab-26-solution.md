# Lab 26 Answer Key: Wireless Security (WPA3, EAP)
**Lab Duration:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain Coverage:** Network Security (4.0)

---

## Section 1: Concept Check Answers

### Question 1: Why Never Use WEP
**Answer:**
WEP is fundamentally broken - can be cracked in minutes using freely available tools. Uses weak RC4 encryption with reused initialization vectors (IVs). No longer provides any real security.

### Question 2: WPA2 vs WPA3 Difference
**Answer:**
- **WPA2:** Uses PSK (pre-shared key) vulnerable to offline dictionary attacks, AES-CCMP encryption
- **WPA3:** Uses SAE (Simultaneous Authentication of Equals) resistant to offline attacks, forward secrecy, stronger encryption

### Question 3: Two WPA Modes
**Answer:**
- **Personal (PSK/SAE):** Single password for all users, home/small office use
- **Enterprise (802.1X):** Individual credentials per user, corporate/large networks

### Question 4: Most Secure EAP Method
**Answer:**
**EAP-TLS** - Requires certificates on both client and server (mutual authentication). No passwords that can be compromised. Strongest authentication available.

### Question 5: SAE Definition
**Answer:**
**Simultaneous Authentication of Equals** - WPA3's key exchange protocol that provides forward secrecy and protection against offline dictionary attacks by using Diffie-Hellman key exchange.

---

## Section 2: Hands-On Activities - Answers

### Activity A: Wireless Security Protocol Comparison ✅

| Protocol | Encryption | Key Management | Crack Time | Use Case |
|----------|------------|----------------|------------|----------|
| WEP | RC4 | Static keys | Minutes | Never use |
| WPA | TKIP | PSK | Hours | Legacy only |
| WPA2-Personal | AES-CCMP | PSK | Days-Years | Home/small office |
| WPA2-Enterprise | AES-CCMP | 802.1X | Very difficult | Corporate |
| WPA3-Personal | AES-CCMP-128 | SAE | Extremely difficult | Modern home |
| WPA3-Enterprise | AES-CCMP-128/256 | 802.1X | Nearly impossible | Modern corporate |

**Security ranking:** WEP(1) < WPA(2) < WPA2-Personal(3) < WPA2-Enterprise(4) < WPA3-Personal(5) < WPA3-Enterprise(6)

### Activity B: Home Network Security Audit ✅

**Perfect score requires:**
- ✅ WPA3 enabled (or WPA2 minimum)
- ✅ WPA2 fallback for compatibility
- ✅ Password 15+ characters, complex
- ✅ WPS completely disabled
- ✅ SSID changed from default
- ✅ Guest network isolated
- ✅ Firmware updated within 3 months

**Common recommendations:**
1. Upgrade to WPA3 if hardware supports
2. Disable WPS immediately
3. Use password manager for complex WiFi password

### Activity C: EAP Method Selection ✅

| Scenario | EAP Method | Certificate Needs | Security Level | Reasoning |
|----------|------------|-------------------|----------------|-----------|
| Corporate WiFi | EAP-TLS | Client & server | Highest | Maximum security |
| University network | PEAP | Server only | High | Easier deployment |
| Guest hotspot | None/Portal | None | Low | Simple access |
| Government facility | EAP-TLS | Client & server | Highest | Compliance required |
| BYOD environment | PEAP/EAP-TTLS | Server only | High | No client certs |

**EAP requirements:**
- **EAP-TLS:** PKI infrastructure, certificates for all
- **PEAP:** Server certificate, AD/LDAP for passwords
- **EAP-TTLS:** Server certificate, flexible inner auth
- **EAP-FAST:** PACs instead of certificates (Cisco)

### Activity D: WPA3 Implementation Planning ✅

| Phase | Action | Timeline | Compatibility |
|-------|--------|----------|---------------|
| 1 | Inventory devices | Week 1-2 | Check WPA3 support |
| 2 | Update firmware/drivers | Week 3-4 | Enable WPA3 capability |
| 3 | Enable transition mode | Week 5-6 | WPA2/WPA3 mixed |
| 4 | Full WPA3 migration | Month 3 | WPA3 only |

All WPA3 features should be checked for maximum security.

### Activity E: Enterprise Wireless Design ✅

**Configuration:**
- Authentication: **802.1X with EAP-TLS**
- RADIUS IP: **10.0.100.10**
- RADIUS secret: **Complex shared secret**
- EAP method: **EAP-TLS (certificates)**
- Certificate authority: **Internal Microsoft CA**

**RADIUS attributes:**
| Attribute | Value | Purpose |
|-----------|-------|---------|
| VLAN ID | 10, 20, 30 | Dynamic VLAN assignment |
| Session timeout | 8 hours | Re-authentication |
| Data rate limit | 100 Mbps | Bandwidth control |
| ACL | Employee-ACL | Access restrictions |

### Activity F: Wireless Attack Detection ✅

| Attack Type | Indicators | Detection Method | Prevention |
|------------|------------|------------------|------------|
| Evil twin | Same SSID, different MAC | WIDS, client reports | Certificate validation |
| Deauth attack | Mass disconnections | Monitor deauth frames | 802.11w (PMF) |
| WPS brute force | WPS attempts | Log analysis | Disable WPS |
| KRACK attack | Key reinstallation | Patch detection | Update firmware |
| Rogue AP | Unknown MAC/SSID | Regular scans | NAC, monitoring |
| Packet injection | Unusual traffic | IDS alerts | WPA3, monitoring |

All monitoring items should be checked.

### Activity G: Guest Network Configuration ✅

| Setting | Value | Security Impact |
|---------|-------|-----------------|
| SSID | CompanyGuest | Clear identification |
| Authentication | Open + Portal | Easy access, terms |
| Encryption | WPA3 Enhanced Open | Privacy without password |
| VLAN | 99 | Complete isolation |
| Client isolation | Enabled | Prevent peer access |
| Bandwidth limit | 10 Mbps | Preserve resources |
| Time restrictions | 8am-6pm | Business hours only |
| Captive portal | Required | Terms acceptance |

**AUP elements:**
1. No illegal activities
2. No excessive bandwidth use
3. Company monitoring rights

### Activity H: Password vs Certificate Authentication ✅

| Factor | PSK | Username/Password | Certificates |
|--------|-----|-------------------|--------------|
| Deployment complexity | Low | Medium | High |
| User experience | Simple | Moderate | Seamless |
| Security level | Low-Medium | Medium | High |
| Management overhead | Low | Medium | High |
| Scalability | Poor | Good | Excellent |
| Cost | Low | Medium | High |

**When to use:**
- PSK: **Home, small office, guest networks**
- Username/Password: **Medium businesses, BYOD**
- Certificates: **Enterprise, high security, compliance**

### Activity I: Wireless Security Best Practices ✅

All hardening checkboxes should be marked.

**SSID configuration:**
- Naming: **Location-based, no company info**
- Hidden SSID: **No (minimal security benefit)**
- Multiple SSIDs: **Separate by use (Corp, Guest, IoT)**

**Signal control:**
- Power levels: **Minimum needed for coverage**
- Directional antennas: **Contain signal to building**
- Physical boundaries: **Survey and adjust**

### Activity J: WPA3 SAE Configuration ✅

**SAE settings:**
- Password requirements: **15+ characters minimum**
- Password length: **20-63 characters ideal**
- Iterations: **40+ (increases with attempts)**
- Anti-clogging: **Enabled (prevents DoS)**

**Client compatibility:**
| Device Type | WPA2 | WPA3 | Action Needed |
|------------|------|------|---------------|
| Windows 10/11 | ✓ | ✓ (1903+) | Update Windows |
| macOS 10.15+ | ✓ | ✓ | None |
| iOS 13+ | ✓ | ✓ | None |
| Android 10+ | ✓ | ✓ | None |
| IoT devices | ✓ | ✗ | Use transition mode |

### Activity K: Wireless Compliance Requirements ✅

| Compliance | Requirement | Implementation | Verification |
|------------|-------------|----------------|--------------|
| PCI DSS | Strong encryption | WPA2/WPA3 Enterprise | Quarterly scans |
| HIPAA | Access control | 802.1X, logging | Annual audit |
| GDPR | Data protection | Encryption, consent | Privacy assessment |
| Industry | Varies | Per standard | Regular review |

All audit checkboxes should be marked.

### Activity L: Wireless Troubleshooting ✅

| Symptom | Possible Cause | Test Method | Solution |
|---------|---------------|-------------|----------|
| Can't connect | Wrong password/protocol | Check security settings | Verify credentials |
| Frequent disconnects | Weak signal/interference | Signal strength test | Adjust power/channel |
| Slow speeds | Congestion/interference | Speed test, spectrum | Change channel/width |
| Auth timeout | RADIUS issue | Check RADIUS logs | Fix RADIUS/network |
| Certificate error | Expired/untrusted | Check cert date/chain | Renew/trust cert |
| Wrong VLAN | RADIUS attribute | Check RADIUS response | Fix RADIUS config |

---

## Real-World Context & Best Practices

### Why This Matters
- **Data breaches:** Many start with weak wireless
- **Compliance:** PCI/HIPAA require strong wireless security
- **Performance:** Proper config prevents issues
- **User experience:** Balance security and usability

### Common Mistakes to Avoid
❌ Still using WEP or WPA
❌ WPS enabled (even if not used)
❌ Same password for years
❌ No network segmentation
❌ Ignoring rogue APs

### Industry Best Practices
✅ **WPA3 deployment** where possible
✅ **802.1X for corporate** networks
✅ **Regular security audits** quarterly
✅ **Firmware updates** monthly check
✅ **Guest isolation** always

---

## Exam Tips 📝

### Must Memorize:
1. **Security Order:** WEP < WPA < WPA2 < WPA3
2. **Encryption:**
   - WEP: RC4 (broken)
   - WPA: TKIP (deprecated)
   - WPA2: AES-CCMP
   - WPA3: AES-CCMP + SAE
3. **EAP Methods:**
   - EAP-TLS: Certificates (most secure)
   - PEAP: Server cert + password
   - EAP-TTLS: Similar to PEAP
4. **Modes:**
   - Personal: PSK/SAE
   - Enterprise: 802.1X
5. **WPA3 Features:**
   - SAE replacing PSK
   - Forward secrecy
   - Enhanced Open

### Common Exam Questions:
- "Most secure wireless?" → **WPA3-Enterprise**
- "Certificate-based EAP?" → **EAP-TLS**
- "WPA3 key exchange?" → **SAE**
- "Deprecated protocols?" → **WEP and WPA**
- "Enterprise auth?" → **802.1X with RADIUS**

### Exam Strategy:
- WEP is always wrong answer
- WPA3 > WPA2 > WPA
- EAP-TLS most secure
- Enterprise = 802.1X
- Personal = home/small office

---

## Did It Work? ✅

### Success Checklist
Your lab was successful if you:

□ Compared all wireless protocols
□ Audited home network security
□ Selected appropriate EAP methods
□ Planned WPA3 migration
□ Designed enterprise wireless
□ Identified attack indicators
□ Configured guest networks
□ Applied best practices
□ Understood compliance needs
□ Troubleshot wireless issues

### Troubleshooting Common Issues

**Problem:** Clients can't connect to WPA3
**Solution:** Enable transition mode (WPA2/WPA3), update client drivers

**Problem:** EAP-TLS certificate errors
**Solution:** Check certificate chain, validity dates, trust store

**Problem:** Guest isolation not working
**Solution:** Enable client isolation, check VLAN config

**Problem:** WPA2 vulnerable to KRACK
**Solution:** Apply firmware updates, enable 802.11w

---

## Real-World Scenarios

### Scenario 1: WPA2 PSK Compromise
**Situation:** Password shared too widely
**Response:**
1. Change password immediately
2. Migrate to WPA3-SAE
3. Implement 802.1X for employees
4. Create separate guest network
5. Audit all connections

### Scenario 2: Rogue AP Detected
**Situation:** Unknown AP broadcasting company SSID
**Response:**
1. Locate physically (signal strength)
2. Disconnect immediately
3. Check for data breach
4. Implement WIDS/WIPS
5. Regular wireless audits

### Scenario 3: Certificate Expiration
**Situation:** Mass disconnections from wireless
**Response:**
1. Check RADIUS certificate
2. Renew certificate urgently
3. Push new cert to clients
4. Implement monitoring
5. Set renewal reminders

---

## Lab Summary

### Key Concepts Mastered:
✅ WPA3 provides significant security improvements
✅ SAE prevents offline dictionary attacks
✅ EAP-TLS offers strongest authentication
✅ Enterprise mode uses 802.1X with RADIUS
✅ WPS should always be disabled
✅ Guest networks need isolation
✅ Regular updates critical for security

### Time-Saving Tips:
- Use wireless profiles for deployment
- Automate certificate enrollment
- Template RADIUS configurations
- Script security audits
- Monitor with WIDS/WIPS

### Going Further:
- Set up home lab with FreeRADIUS
- Practice WPA3 configuration
- Try packet capture with Wireshark
- Test different EAP methods
- Conduct wireless penetration test

---

## Answer Key Complete! 🎉

**Preparation Level:** Ready for wireless security exam questions!

**Next Lab:** Lesson 27 - Troubleshooting Methodology

### Final Tip:
"Treat your wireless like your front door - you wouldn't use a broken lock (WEP), and you'd want to know who has copies of your keys (PSK management)!"

---