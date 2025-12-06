# Lab 16: Secure Network Design

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 3.2 - Given a scenario, apply security principles to secure enterprise infrastructure

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **Why should you use SSH instead of Telnet? What makes SSH more secure?**

2. **What is DNSSEC, and what attack does it prevent?**

3. **Explain the purpose of SPF, DKIM, and DMARC in email security.**

4. **What is the difference between SNMPv2 and SNMPv3? Why does it matter?**

5. **What is 802.1X, and how does it provide network access control?**

---

## Section 2: Hands-On Activities

### Activity A: Secure Protocol Selection

**Goal:** Choose secure alternatives to insecure protocols.

**Protocol comparison:**

| Insecure Protocol | Port | Secure Alternative | Port | What's Improved |
|-------------------|------|-------------------|------|-----------------|
| Telnet | 23 | | | |
| FTP | 20, 21 | | | |
| HTTP | 80 | | | |
| SNMP v1/v2 | 161 | | | |
| LDAP | 389 | | | |
| IMAP | 143 | | | |
| POP3 | 110 | | | |
| SMTP | 25 | | | |
| DNS | 53 | | | |
| RDP (unencrypted) | 3389 | | | |

**Why are legacy protocols still in use?**

| Reason | Risk | Mitigation |
|--------|------|------------|
| Legacy systems | | |
| Compatibility | | |
| Lack of awareness | | |
| "It works" mentality | | |

---

### Activity B: SSH Configuration Security

**Goal:** Understand SSH hardening.

**SSH security features:**

| Feature | Purpose |
|---------|---------|
| Encryption | |
| Host key verification | |
| Public key authentication | |
| Key exchange | |
| Port forwarding | |

**SSH hardening best practices:**

| Setting | Insecure Default | Secure Setting | Why |
|---------|------------------|----------------|-----|
| Protocol version | SSH 1 & 2 | | |
| Root login | Permitted | | |
| Password auth | Enabled | | |
| Empty passwords | May be allowed | | |
| Port | 22 | | |
| Idle timeout | None | | |
| Max auth attempts | High | | |
| Allowed users | All | | |

**SSH authentication methods:**

| Method | Security Level | Use Case |
|--------|----------------|----------|
| Password | | |
| Public key | | |
| Certificate-based | | |
| Two-factor | | |

**Generate SSH key pair (conceptual):**

```bash
ssh-keygen -t ed25519 -C "user@example.com"
```

| Question | Answer |
|----------|--------|
| What does `-t ed25519` specify? | |
| Where are keys stored? | |
| What's the public key for? | |
| What's the private key for? | |
| Should you set a passphrase? | |

---

### Activity C: TLS/SSL Implementation

**Goal:** Understand TLS configuration best practices.

**TLS version comparison:**

| Version | Status | Notes |
|---------|--------|-------|
| SSL 2.0 | | |
| SSL 3.0 | | |
| TLS 1.0 | | |
| TLS 1.1 | | |
| TLS 1.2 | | |
| TLS 1.3 | | |

**TLS handshake overview:**

| Step | What Happens |
|------|--------------|
| 1 | Client sends ClientHello (supported versions, ciphers) |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**TLS 1.3 improvements:**

| Improvement | Benefit |
|-------------|---------|
| Fewer round trips | |
| Removed weak ciphers | |
| Forward secrecy required | |
| Encrypted handshake | |

**Cipher suite selection:**

What makes a cipher suite secure?

| Component | Secure Choice | Avoid |
|-----------|---------------|-------|
| Key exchange | | |
| Authentication | | |
| Encryption | | |
| Hash/MAC | | |

**Test a website's TLS configuration:**

Use: ssllabs.com/ssltest or browser developer tools

| Property | Finding |
|----------|---------|
| Site tested | |
| TLS versions supported | |
| Grade (if SSL Labs) | |
| Forward secrecy | |
| HSTS enabled | |

---

### Activity D: DNS Security

**Goal:** Secure DNS infrastructure and queries.

**DNS attack types:**

| Attack | Description | Impact |
|--------|-------------|--------|
| DNS spoofing | | |
| DNS cache poisoning | | |
| DNS hijacking | | |
| DNS tunneling | | |
| DNS amplification | | |

**DNS security solutions:**

| Solution | What It Does | Protects Against |
|----------|--------------|------------------|
| DNSSEC | | |
| DNS over HTTPS (DoH) | | |
| DNS over TLS (DoT) | | |
| Response Rate Limiting | | |
| DNS filtering | | |

**DNSSEC explained:**

| Concept | Purpose |
|---------|---------|
| Digital signatures | |
| Chain of trust | |
| DNSKEY record | |
| RRSIG record | |
| DS record | |

**Check if a domain uses DNSSEC:**

Use: dnsviz.net or `dig +dnssec domain.com`

| Domain Tested | DNSSEC Enabled? |
|---------------|-----------------|
| google.com | |
| cloudflare.com | |

**DoH vs DoT:**

| Aspect | DoH | DoT |
|--------|-----|-----|
| Port | | |
| Encryption | | |
| Visibility | | |
| Blocking | | |

---

### Activity E: Email Security Protocols

**Goal:** Implement email authentication and security.

**Email security threats:**

| Threat | Description | Impact |
|--------|-------------|--------|
| Spoofing | | |
| Phishing | | |
| Business Email Compromise | | |
| Spam | | |
| Malware delivery | | |

**Email authentication protocols:**

| Protocol | Full Name | Purpose |
|----------|-----------|---------|
| SPF | | |
| DKIM | | |
| DMARC | | |

**How they work together:**

```
                    ┌─────────────┐
                    │   DMARC     │  ← Policy: what to do if SPF/DKIM fail
                    └──────┬──────┘
                           │
              ┌────────────┴────────────┐
              │                         │
        ┌─────┴─────┐             ┌─────┴─────┐
        │    SPF    │             │   DKIM    │
        └───────────┘             └───────────┘
        Authorized                 Message
        senders                    integrity
```

**SPF record example:**

```
v=spf1 include:_spf.google.com -all
```

| Component | Meaning |
|-----------|---------|
| v=spf1 | |
| include: | |
| -all | |
| ~all | |

**DKIM explained:**

| Step | What Happens |
|------|--------------|
| 1 | Sending server signs email with private key |
| 2 | |
| 3 | |

**DMARC policy options:**

| Policy | Action |
|--------|--------|
| p=none | |
| p=quarantine | |
| p=reject | |

**Check a domain's email security:**

Use: mxtoolbox.com or `dig txt domain.com`

| Domain | SPF Record? | DMARC Record? |
|--------|-------------|---------------|
| google.com | | |
| Your company (if applicable) | | |

---

### Activity F: SNMP Security

**Goal:** Secure network management protocols.

**SNMP version comparison:**

| Feature | SNMPv1 | SNMPv2c | SNMPv3 |
|---------|--------|---------|--------|
| Authentication | | | |
| Encryption | | | |
| Community strings | | | |
| Message integrity | | | |
| Security | | | |

**SNMPv3 security levels:**

| Level | Authentication | Encryption | Use Case |
|-------|----------------|------------|----------|
| noAuthNoPriv | | | |
| authNoPriv | | | |
| authPriv | | | |

**SNMP hardening:**

| Practice | Implementation |
|----------|----------------|
| Use SNMPv3 | |
| Strong community strings | |
| Restrict SNMP access | |
| Use ACLs | |
| Disable SNMP if not needed | |
| Monitor SNMP traffic | |

**Check for SNMP on your network (if authorized):**

```
netstat -an | findstr "161"
```

Is anything listening on UDP 161? _______________

---

### Activity G: 802.1X Network Access Control

**Goal:** Understand port-based authentication.

**802.1X components:**

| Component | Role | Example |
|-----------|------|---------|
| Supplicant | | |
| Authenticator | | |
| Authentication Server | | |

**802.1X process:**

| Step | Action |
|------|--------|
| 1 | Supplicant connects to network port |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**EAP methods:**

| Method | Description | Certificate Required |
|--------|-------------|---------------------|
| EAP-TLS | | |
| EAP-TTLS | | |
| PEAP | | |
| EAP-FAST | | |

**802.1X benefits:**

| Benefit | Description |
|---------|-------------|
| User authentication | |
| Device authentication | |
| Dynamic VLAN assignment | |
| Posture assessment | |
| Guest access control | |

**Without 802.1X vs With 802.1X:**

| Scenario | Without | With 802.1X |
|----------|---------|-------------|
| Unknown device plugs in | | |
| Employee device | | |
| Guest device | | |
| Compromised device | | |

---

### Activity H: Network Device Hardening

**Goal:** Secure network infrastructure devices.

**Router/Switch hardening checklist:**

| Item | Action | Completed |
|------|--------|-----------|
| Default credentials | Change immediately | [ ] |
| Firmware | Update to latest | [ ] |
| Unused ports | Disable | [ ] |
| Management access | Restrict to management VLAN | [ ] |
| SSH | Enable, disable Telnet | [ ] |
| SNMP | v3 only or disable | [ ] |
| Logging | Enable and forward to SIEM | [ ] |
| NTP | Configure for time sync | [ ] |
| Banners | Add warning banners | [ ] |
| CDP/LLDP | Disable or restrict | [ ] |

**Management plane security:**

| Control | Purpose |
|---------|---------|
| Out-of-band management | |
| Management VLAN | |
| ACLs on VTY lines | |
| SSH only (no Telnet) | |
| Strong authentication | |
| Session timeout | |

**Data plane security:**

| Control | Purpose |
|---------|---------|
| Port security | |
| DHCP snooping | |
| Dynamic ARP Inspection | |
| IP Source Guard | |
| Storm control | |
| Private VLANs | |

---

### Activity I: Secure Remote Access

**Goal:** Design secure remote access solutions.

**Remote access methods:**

| Method | Use Case | Security Level |
|--------|----------|----------------|
| VPN (IPSec) | | |
| VPN (SSL/TLS) | | |
| SSH | | |
| RDP (direct) | | |
| RDP (via gateway) | | |
| Jump server/Bastion | | |
| Zero trust access | | |

**VPN security considerations:**

| Consideration | Best Practice |
|---------------|---------------|
| Protocol | |
| Authentication | |
| Encryption | |
| Split tunneling | |
| Session management | |
| Logging | |

**Remote Desktop security:**

| Risk | Mitigation |
|------|------------|
| Exposed to internet | |
| Brute force attacks | |
| BlueKeep/vulnerabilities | |
| Credential theft | |

**Never expose directly to internet:**

| Service | Secure Access Method |
|---------|---------------------|
| RDP | |
| SSH | |
| Database | |
| Management interfaces | |

---

### Activity J: Network Monitoring and Logging

**Goal:** Implement security monitoring.

**What to log:**

| Source | Security-Relevant Events |
|--------|-------------------------|
| Firewalls | |
| IDS/IPS | |
| Routers/Switches | |
| Servers | |
| Authentication systems | |
| VPN | |

**Syslog severity levels:**

| Level | Name | Description |
|-------|------|-------------|
| 0 | | |
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |

**Centralized logging architecture:**

| Component | Role |
|-----------|------|
| Log sources | |
| Log collector | |
| SIEM | |
| Long-term storage | |

**Log retention considerations:**

| Factor | Consideration |
|--------|---------------|
| Compliance requirements | |
| Storage costs | |
| Investigation needs | |
| Legal holds | |

---

### Activity K: Secure Protocol Implementation Scenarios

**Goal:** Apply secure protocols to real scenarios.

**Scenario 1: Legacy Application**

A critical application only supports FTP for file transfers. How do you secure it?

| Option | Implementation |
|--------|----------------|
| | |
| | |
| | |

**Scenario 2: Network Management**

You need to monitor 500 network devices. Current setup uses SNMPv2 with "public" community string.

| Risk | |
|------|---|
| Immediate fix | |
| Long-term solution | |

**Scenario 3: Email Security**

Company is experiencing email spoofing attacks. Attackers send emails appearing to come from your CEO.

| Step | Implementation |
|------|----------------|
| 1 | |
| 2 | |
| 3 | |

**Scenario 4: Remote Workers**

100 remote workers need secure access to internal applications. What's your design?

| Component | Purpose |
|-----------|---------|
| | |
| | |
| | |

---

### Tier 2 Bonus: Protocol Analysis

> ⚠️ **Requires:** Command line access

---

### Activity L: Check Your System's Protocol Support

**Test TLS connection:**

PowerShell:
```powershell
[Net.ServicePointManager]::SecurityProtocol
```

| TLS Versions Supported | Your System |
|------------------------|-------------|
| | |

**Check for Telnet client:**

```
telnet
```

| Question | Answer |
|----------|--------|
| Is Telnet client installed? | |
| Should it be on a secure system? | |

**Check SSH client availability:**

```
ssh -V
```

| SSH Client | Version |
|------------|---------|
| | |

**Test if common insecure ports are accessible:**

```
Test-NetConnection -ComputerName localhost -Port 23
Test-NetConnection -ComputerName localhost -Port 21
```

| Port | Service | Listening? |
|------|---------|------------|
| 21 | FTP | |
| 23 | Telnet | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** During a security audit, you discover that network administrators are using Telnet to manage switches because "it's always worked that way." How do you convince them to switch to SSH and what's your implementation plan?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your company's email domain is being spoofed in phishing attacks against your customers. You currently have no email authentication configured. What steps do you take, and in what order?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A security assessment reveals that your organization has devices using SNMPv2 with the default "public" community string. Some of these are critical infrastructure devices. What's your remediation strategy?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Identify secure alternatives for legacy protocols
- [ ] Explain SSH hardening best practices
- [ ] Describe TLS versions and which to use
- [ ] Explain DNSSEC, DoH, and DoT
- [ ] Describe SPF, DKIM, and DMARC and how they work together
- [ ] Compare SNMPv1/v2 with SNMPv3
- [ ] Explain 802.1X components and process
- [ ] List network device hardening steps
- [ ] Design secure remote access solutions
- [ ] Understand logging and monitoring requirements

---

## What You Learned Today

- ✅ Selected secure protocol alternatives
- ✅ Reviewed SSH hardening
- ✅ Analyzed TLS configuration
- ✅ Explored DNS security options
- ✅ Implemented email authentication concepts
- ✅ Compared SNMP versions
- ✅ Understood 802.1X authentication
- ✅ Covered network device hardening
- ✅ Designed secure remote access
- ✅ Reviewed logging and monitoring
- ✅ Applied protocols to scenarios
- ✅ (Tier 2) Checked system protocol support

**Next Lab:** Firewalls and Intrusion Prevention - firewall types, IDS/IPS, and rule configuration.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 16: Secure Network Design*