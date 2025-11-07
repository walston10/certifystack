# Lab 26: Wireless Security (WPA3, EAP)
**Time:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain:** Network Security (4.0)

## Lab Objectives
- Compare wireless security protocols (WEP, WPA, WPA2, WPA3)
- Configure WPA2/WPA3 Personal and Enterprise modes
- Implement EAP authentication methods
- Apply wireless security best practices
- Detect and prevent wireless attacks
- Design secure wireless architectures

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **Why should WEP never be used?**
   _________________________________________________
   _________________________________________________

2. **What's the main difference between WPA2 and WPA3?**
   WPA2: ______________________________________________
   WPA3: ______________________________________________

3. **List the two WPA2/WPA3 modes and their use cases:**
   Mode 1: _____________________________________________
   Mode 2: _____________________________________________

4. **Which EAP method is most secure and why?**
   _________________________________________________
   _________________________________________________

5. **What does SAE stand for in WPA3?**
   _________________________________________________
   What problem does it solve? _________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: Wireless Security Protocol Comparison 🔐
**Time:** 3 minutes

Complete the comparison table:

| Protocol | Encryption | Key Management | Crack Time | Use Case |
|----------|------------|----------------|------------|----------|
| WEP | | | | |
| WPA | | | | |
| WPA2-Personal | | | | |
| WPA2-Enterprise | | | | |
| WPA3-Personal | | | | |
| WPA3-Enterprise | | | | |

Security ranking (1=worst, 6=best): _________________

---

### Activity B: Home Network Security Audit 🏠
**Time:** 3 minutes

Check your home wireless security:

**Current Settings:**
□ WPA3 enabled? _____________________________________
□ WPA2 fallback? ____________________________________
□ Password strength: ________________________________
□ WPS disabled? _____________________________________
□ Default SSID changed? _____________________________
□ Guest network isolated? ___________________________
□ Firmware updated? __________________________________

**Security score:** ___/7

**Recommended changes:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

### Activity C: EAP Method Selection 📡
**Time:** 3 minutes

Choose appropriate EAP methods:

| Scenario | EAP Method | Certificate Needs | Security Level | Reasoning |
|----------|------------|-------------------|----------------|-----------|
| Corporate WiFi | | | | |
| University network | | | | |
| Guest hotspot | | | | |
| Government facility | | | | |
| BYOD environment | | | | |

**EAP comparison:**
- EAP-TLS requires: __________________________________
- PEAP requires: _____________________________________
- EAP-TTLS requires: _________________________________
- EAP-FAST requires: _________________________________

---

### Activity D: WPA3 Implementation Planning 🆕
**Time:** 3 minutes

Design WPA3 migration:

**Transition strategy:**
| Phase | Action | Timeline | Compatibility |
|-------|--------|----------|---------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |

**WPA3 features to enable:**
□ SAE (Simultaneous Authentication of Equals)
□ PMF (Protected Management Frames)
□ Forward secrecy
□ Enhanced Open
□ 192-bit encryption (Enterprise)
□ Transition mode (WPA2/WPA3)

---

### Activity E: Enterprise Wireless Design 🏢
**Time:** 3 minutes

Configure enterprise wireless:

```
[RADIUS Server]
       ↓
[Wireless Controller]
    ↙     ↓     ↘
[AP1]  [AP2]  [AP3]
```

**Configuration:**
- Authentication: ____________________________________
- RADIUS IP: ________________________________________
- RADIUS secret: ____________________________________
- EAP method: _______________________________________
- Certificate authority: ____________________________

**RADIUS attributes to return:**
| Attribute | Value | Purpose |
|-----------|-------|---------|
| VLAN ID | | |
| Session timeout | | |
| Data rate limit | | |
| ACL | | |

---

### Activity F: Wireless Attack Detection 🚨
**Time:** 3 minutes

Identify wireless attack indicators:

| Attack Type | Indicators | Detection Method | Prevention |
|------------|------------|------------------|------------|
| Evil twin | | | |
| Deauth attack | | | |
| WPS brute force | | | |
| KRACK attack | | | |
| Rogue AP | | | |
| Packet injection | | | |

**Monitoring checklist:**
□ WIDS/WIPS deployed
□ Regular site surveys
□ RF spectrum analysis
□ Log analysis
□ Client complaints tracked

---

### Activity G: Guest Network Configuration 👥
**Time:** 3 minutes

Design secure guest access:

**Guest network settings:**
| Setting | Value | Security Impact |
|---------|-------|-----------------|
| SSID | | |
| Authentication | | |
| Encryption | | |
| VLAN | | |
| Client isolation | | |
| Bandwidth limit | | |
| Time restrictions | | |
| Captive portal | | |

**Acceptable use policy elements:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

---

### Activity H: Password vs Certificate Authentication 🔑
**Time:** 2 minutes

Compare authentication methods:

| Factor | PSK | Username/Password | Certificates |
|--------|-----|-------------------|--------------|
| Deployment complexity | | | |
| User experience | | | |
| Security level | | | |
| Management overhead | | | |
| Scalability | | | |
| Cost | | | |

**When to use each:**
- PSK: ______________________________________________
- Username/Password: _________________________________
- Certificates: _____________________________________

---

### Activity I: Wireless Security Best Practices 📋
**Time:** 3 minutes

Implement security controls:

**Access Point hardening:**
□ Change default admin password
□ Disable unnecessary services
□ Enable secure management (HTTPS/SSH)
□ Configure NTP
□ Enable logging
□ Disable WPS
□ Update firmware
□ Physical security

**SSID configuration:**
- Naming convention: _________________________________
- Hidden SSID? (Yes/No): ____________________________
- Multiple SSIDs strategy: __________________________

**Signal control:**
- Power levels: _____________________________________
- Directional antennas: _____________________________
- Physical boundaries: _______________________________

---

### Activity J: WPA3 SAE Configuration 🔒
**Time:** 3 minutes

Configure WPA3-Personal with SAE:

**SAE settings:**
- Password requirements: _____________________________
- Password length: ___________________________________
- Hunting and pecking iterations: ___________________
- Anti-clogging token: ______________________________

**Transition mode configuration:**
```
SSID: CompanyWiFi
Security: WPA2/WPA3 Mixed Mode
WPA2: AES-CCMP
WPA3: SAE + AES-CCMP-128
PMF: Optional (Required for WPA3)
```

**Client compatibility check:**
| Device Type | WPA2 | WPA3 | Action Needed |
|------------|------|------|---------------|
| Windows 10/11 | | | |
| macOS 10.15+ | | | |
| iOS 13+ | | | |
| Android 10+ | | | |
| IoT devices | | | |

---

### Activity K: Wireless Compliance Requirements 📜
**Time:** 2 minutes

Meet regulatory requirements:

| Compliance | Requirement | Implementation | Verification |
|------------|-------------|----------------|--------------|
| PCI DSS | | | |
| HIPAA | | | |
| GDPR | | | |
| Industry-specific | | | |

**Audit checklist:**
□ Strong encryption (WPA2/WPA3)
□ Regular key rotation
□ Access logging
□ Vulnerability scanning
□ Penetration testing

---

### Activity L: Wireless Troubleshooting 🔧
**Time:** 3 minutes

Diagnose wireless issues:

| Symptom | Possible Cause | Test Method | Solution |
|---------|---------------|-------------|----------|
| Can't connect | | | |
| Frequent disconnects | | | |
| Slow speeds | | | |
| Authentication timeout | | | |
| Certificate error | | | |
| Wrong VLAN | | | |

**Diagnostic commands:**
```bash
# Windows
netsh wlan show profiles
netsh wlan show profile name="SSID" key=clear

# Linux
iwconfig
nmcli device wifi list

# macOS
airport -s
```

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your company still uses WPA2-PSK. Design upgrade to WPA3-Enterprise:

1. **Risk assessment:**
   • Current vulnerabilities: ___________________________
   • Business impact: __________________________________

2. **Migration plan:**
   • Phase 1: __________________________________________
   • Phase 2: __________________________________________
   • Phase 3: __________________________________________

3. **Success metrics:**
   • _________________________________________________
   • _________________________________________________

### Best Practices Checklist
Check off wireless security practices you'll implement:

□ Use WPA3 where supported
□ Implement 802.1X for enterprise
□ Disable WPS completely
□ Regular firmware updates
□ Conduct wireless audits
□ Monitor for rogue APs
□ Implement guest isolation
□ Use strong passwords (15+ chars)
□ Deploy WIDS/WIPS
□ Document all configurations

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Compare all wireless security protocols
□ Configure WPA2/WPA3 properly
□ Select appropriate EAP methods
□ Implement enterprise wireless
□ Detect wireless attacks
□ Design guest networks
□ Apply best practices
□ Troubleshoot wireless security
□ Plan WPA3 migrations
□ Meet compliance requirements

### Exam Preparation
⚠️ **Know for the exam:**
- **WEP:** Never use, crackable in minutes
- **WPA:** TKIP, deprecated
- **WPA2:** AES-CCMP, current standard
- **WPA3:** SAE, forward secrecy, latest
- **EAP-TLS:** Certificate-based, most secure
- **PEAP/EAP-TTLS:** Server cert only
- **Personal:** PSK/SAE for home/small office
- **Enterprise:** 802.1X with RADIUS

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐⭐☆

**Ready for:** Lesson 27 - Troubleshooting Methodology

### Remember
"Wireless security is like a lock on your door - WEP is a broken lock, WPA2 is a decent deadbolt, and WPA3 is a smart lock with biometrics. Never leave your door unlocked (Open/WEP)!"

---