# Lab 23: VPNs and Remote Access
**Time:** 30-35 minutes  
**Difficulty:** Intermediate-Advanced  
**Domain:** Network Security (4.0)

## Lab Objectives
- Configure site-to-site and remote access VPNs
- Compare VPN protocols and their security levels
- Implement split tunneling vs full tunneling
- Design secure remote access solutions
- Configure remote desktop protocols
- Apply VPN security best practices

---

## Section 1: Concept Check (5 minutes)

### Quick Knowledge Review
Answer these questions before starting hands-on work:

1. **What's the difference between site-to-site and remote access VPN?**
   Site-to-site: ________________________________________
   Remote access: ______________________________________

2. **List the two IPSec protocols and their purposes:**
   Protocol 1: _________________________________________
   Protocol 2: _________________________________________

3. **What ports do these remote access methods use?**
   SSL/TLS VPN: ________________________________________
   RDP: ________________________________________________
   SSH: ________________________________________________
   L2TP: _______________________________________________

4. **What's the difference between transport and tunnel mode?**
   Transport: __________________________________________
   Tunnel: _____________________________________________

5. **Define split tunneling vs full tunneling:**
   Split: ______________________________________________
   Full: _______________________________________________

---

## Section 2: Hands-On Activities (25-30 minutes)

### Activity A: VPN Protocol Comparison 🔐
**Time:** 3 minutes

Complete the VPN protocol comparison:

| Protocol | Security Level | Speed | Port(s) | Best Use Case | Avoid When |
|----------|---------------|-------|---------|---------------|------------|
| IPSec | | | | | |
| SSL/TLS | | | | | |
| PPTP | | | | | |
| L2TP/IPSec | | | | | |
| OpenVPN | | | | | |
| WireGuard | | | | | |

---

### Activity B: Site-to-Site VPN Design 🏢
**Time:** 3 minutes

Design a site-to-site VPN between offices:

**Main Office:** New York
- Network: 10.1.0.0/16
- Public IP: 203.0.113.1
- Firewall: _________________________________________

**Branch Office:** Chicago
- Network: 10.2.0.0/16
- Public IP: 198.51.100.1
- Firewall: _________________________________________

**VPN Configuration:**
- Protocol: _________________________________________
- Encryption: ________________________________________
- Authentication: ____________________________________
- Pre-shared key or Certificates: ___________________
- Interesting traffic ACL: __________________________

---

### Activity C: IPSec Configuration Planning 🛡️
**Time:** 3 minutes

Design IPSec implementation:

**Phase 1 (IKE/ISAKMP):**
- Encryption: ________________________________________
- Hash: ______________________________________________
- DH Group: __________________________________________
- Lifetime: __________________________________________

**Phase 2 (IPSec):**
- Protocol: □ AH □ ESP □ Both
- Mode: □ Transport □ Tunnel
- Encryption: ________________________________________
- Authentication: ____________________________________
- PFS: □ Yes □ No

**Security Association:**
- Direction: □ Unidirectional □ Bidirectional
- Lifetime: __________________________________________

---

### Activity D: Remote Access VPN Solution 💻
**Time:** 3 minutes

Choose VPN solutions for different scenarios:

| User Type | VPN Type | Protocol | Client | MFA? | Reasoning |
|-----------|----------|----------|--------|------|-----------|
| Mobile sales | | | | | |
| IT admin | | | | | |
| Contractor | | | | | |
| Executive | | | | | |
| Branch office | | | | | |

---

### Activity E: Split Tunneling Configuration 🚦
**Time:** 3 minutes

Design split tunneling policies:

| Traffic Type | VPN Tunnel | Direct Internet | Security Impact |
|--------------|------------|-----------------|-----------------|
| Corporate email | | | |
| File servers | | | |
| Web browsing | | | |
| Cloud apps (O365) | | | |
| Streaming video | | | |
| Software updates | | | |

**Risks of split tunneling:**
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________

**When to use full tunneling:** ______________________

---

### Activity F: VPN Concentrator Sizing 📊
**Time:** 3 minutes

Calculate VPN concentrator requirements:

**Scenario:**
- Total users: 500
- Concurrent connections: 30% typical, 60% peak
- Bandwidth per user: 2 Mbps average
- Encryption overhead: 20%

**Calculate:**
- Typical concurrent: ________________________________
- Peak concurrent: ___________________________________
- Bandwidth required: ________________________________
- With overhead: _____________________________________
- Concentrator model: ________________________________

**High Availability:**
□ Active/Passive failover
□ Active/Active load balance
□ Geographic distribution

---

### Activity G: Remote Desktop Security 🖥️
**Time:** 3 minutes

Secure remote desktop implementations:

| Method | Default Port | Secure Port | Security Measures | Use Case |
|--------|--------------|-------------|-------------------|----------|
| RDP | | | | |
| VNC | | | | |
| SSH | | | | |
| TeamViewer | | | | |
| Chrome Remote | | | | |

**Additional security measures:**
□ Change default ports
□ Use VPN first
□ Certificate authentication
□ MFA required
□ Session recording
□ Clipboard disabled

---

### Activity H: VPN Authentication Methods 🔑
**Time:** 2 minutes

Match authentication to appropriate use:

| Method | Security | Complexity | Best For | Implementation |
|--------|----------|------------|----------|----------------|
| Pre-shared key | | | | |
| Username/password | | | | |
| Certificates | | | | |
| RADIUS/LDAP | | | | |
| Smart cards | | | | |
| Biometrics | | | | |

---

### Activity I: VPN Troubleshooting Guide 🔧
**Time:** 3 minutes

Diagnose common VPN issues:

| Symptom | Possible Cause | Check | Solution |
|---------|---------------|-------|----------|
| Can't connect | | | |
| Connects but no traffic | | | |
| Slow performance | | | |
| Random disconnects | | | |
| Phase 1 fails | | | |
| Phase 2 fails | | | |

---

### Activity J: SSL VPN vs IPSec VPN ⚖️
**Time:** 3 minutes

Compare deployment scenarios:

| Factor | SSL VPN | IPSec VPN | Winner | Why? |
|--------|---------|-----------|--------|------|
| Ease of deployment | | | | |
| Client requirements | | | | |
| Firewall friendly | | | | |
| Performance | | | | |
| Security | | | | |
| Cost | | | | |

**When to use SSL VPN:**
_____________________________________________________

**When to use IPSec:**
_____________________________________________________

---

### Activity K: VPN Security Hardening 🔒
**Time:** 2 minutes

Apply security best practices:

**Encryption standards:**
□ AES-256 minimum
□ SHA-256 or higher
□ DH Group 14 or higher
□ Perfect Forward Secrecy

**Access control:**
□ Principle of least privilege
□ Time-based access
□ IP restrictions
□ Device certificates

**Monitoring:**
□ Connection logs
□ Failed attempts
□ Unusual locations
□ Bandwidth anomalies

**Policy settings:**
- Session timeout: ___________________________________
- Idle timeout: ______________________________________
- Max connections per user: __________________________

---

### Activity L: Remote Access Architecture 🏗️
**Time:** 3 minutes

Design complete remote access solution:

```
Internet → [________] → [________] → [________] → Internal Network
              ↓             ↓            ↓
          [________]   [________]   [________]
```

Components needed:
1. _________________________________________________
2. _________________________________________________
3. _________________________________________________
4. _________________________________________________
5. _________________________________________________

**Access flow:**
1. User connects to: _________________________________
2. Authentication via: _______________________________
3. VPN establishes to: _______________________________
4. User accesses: ____________________________________

---

## Section 3: Reflection & Real-World Application (5 minutes)

### Scenario Analysis
Your company needs secure work-from-home solution for 200 users:

1. **VPN selection:**
   • Protocol: ________________________________________
   • Justification: ____________________________________

2. **Infrastructure needs:**
   • Concentrator sizing: ______________________________
   • Bandwidth required: _______________________________

3. **Security requirements:**
   • Authentication: ___________________________________
   • Policies: _________________________________________

### Best Practices Checklist
Check off VPN/remote access practices you'll implement:

□ Use strong encryption (AES-256)
□ Implement MFA for VPN access
□ Regular security updates
□ Monitor VPN logs
□ Document VPN policies
□ Test failover regularly
□ Use certificates when possible
□ Implement session timeouts
□ Disable split tunneling for high security
□ Regular security audits

---

## What You Learned Today ✅

### Key Takeaways
Check off what you can now do:

□ Compare VPN protocols and security levels
□ Design site-to-site VPN connections
□ Configure IPSec phases
□ Implement remote access VPNs
□ Configure split vs full tunneling
□ Size VPN concentrators
□ Secure remote desktop access
□ Select appropriate authentication
□ Troubleshoot VPN issues
□ Harden VPN security

### Exam Preparation
⚠️ **Know for the exam:**
- **SSL/TLS VPN:** Port 443
- **IPSec:** AH (authentication), ESP (encryption)
- **RDP:** Port 3389
- **SSH:** Port 22
- **L2TP:** Port 1701, usually with IPSec
- **PPTP:** Port 1723 (deprecated, insecure)
- **Split tunneling:** Some traffic direct, some through VPN
- **Full tunneling:** All traffic through VPN

---

## Lab Complete! 🎉

**Time to Complete:** _______ minutes

**Difficulty Rating:** ⭐⭐⭐⭐☆

**Ready for:** Lesson 24 - Firewalls and Access Control Lists

### Remember
"A VPN is like a secure tunnel through the dangerous internet. Build it strong, monitor who uses it, and never use PPTP!"

---