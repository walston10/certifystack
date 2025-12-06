# Lab 16: Secure Network Design - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Secure protocols are fundamental to network security.

---

## Section 1: Concept Check - Answers

**1. SSH vs Telnet:**

**Answer:**

| Aspect | Telnet | SSH |
|--------|--------|-----|
| Encryption | None (plaintext) | Full encryption |
| Authentication | Basic (plaintext password) | Multiple methods (keys, passwords, certificates) |
| Integrity | None | HMAC verification |
| Port | 23 | 22 |

**SSH improvements:** Encrypts all traffic including credentials, provides host authentication (prevents MITM), supports public key authentication.

---

**2. DNSSEC:**

**Answer:**

**DNSSEC (DNS Security Extensions)** digitally signs DNS records to verify their authenticity.

**Prevents:** DNS spoofing and cache poisoning attacks by allowing recipients to verify responses came from authoritative sources and weren't modified.

---

**3. SPF, DKIM, and DMARC:**

**Answer:**

| Protocol | Purpose |
|----------|---------|
| **SPF** | Lists authorized mail servers for a domain |
| **DKIM** | Digitally signs emails to prove they haven't been modified |
| **DMARC** | Policy that tells receivers what to do when SPF/DKIM fail |

**Together:** SPF verifies sender, DKIM verifies content, DMARC enforces policy.

---

**4. SNMPv2 vs SNMPv3:**

**Answer:**

| Aspect | SNMPv2 | SNMPv3 |
|--------|--------|--------|
| Authentication | Community strings (plaintext) | Username/password with hashing |
| Encryption | None | DES/AES encryption |
| Security | Weak | Strong |

**Why it matters:** SNMPv2 community strings are transmitted in plaintext—anyone sniffing the network can capture them and gain management access to devices.

---

**5. 802.1X:**

**Answer:**

**802.1X** is port-based network access control that authenticates devices before granting network access.

**Components:**
- Supplicant (client device)
- Authenticator (switch/AP)
- Authentication server (RADIUS)

**How it works:** Device must authenticate (via RADIUS) before the switch port allows traffic.

---

## Section 2: Activity Solutions

### Activity A: Secure Protocol Selection - Answers

| Insecure | Port | Secure Alternative | Port | Improvement |
|----------|------|-------------------|------|-------------|
| Telnet | 23 | SSH | 22 | Encryption, key auth |
| FTP | 20,21 | SFTP/FTPS | 22/990 | Encrypted transfers |
| HTTP | 80 | HTTPS | 443 | TLS encryption |
| SNMPv1/v2 | 161 | SNMPv3 | 161 | Auth + encryption |
| LDAP | 389 | LDAPS | 636 | TLS encryption |
| IMAP | 143 | IMAPS | 993 | TLS encryption |
| POP3 | 110 | POP3S | 995 | TLS encryption |
| SMTP | 25 | SMTPS/STARTTLS | 465/587 | TLS encryption |
| DNS | 53 | DoH/DoT | 443/853 | Encrypted queries |
| RDP | 3389 | RDP over VPN/Gateway | - | Tunnel + auth |

**Why legacy protocols persist:**

| Reason | Risk | Mitigation |
|--------|------|------------|
| Legacy systems | Can't update | Isolate, compensating controls |
| Compatibility | Breaks integration | Test secure alternatives |
| Lack of awareness | Unknown exposure | Training, auditing |
| "It works" | Ignored until breach | Risk assessment, policy |

---

### Activity B: SSH Security - Answers

**SSH features:**

| Feature | Purpose |
|---------|---------|
| Encryption | Protects data in transit |
| Host key verification | Prevents MITM attacks |
| Public key auth | Stronger than passwords |
| Key exchange | Secure session key negotiation |
| Port forwarding | Encrypted tunnels |

**SSH hardening:**

| Setting | Insecure | Secure | Why |
|---------|----------|--------|-----|
| Protocol version | SSH 1 & 2 | SSH 2 only | v1 has vulnerabilities |
| Root login | Permitted | PermitRootLogin no | Force sudo, audit trail |
| Password auth | Enabled | Disabled (keys only) | Prevents brute force |
| Empty passwords | Allowed | PermitEmptyPasswords no | Obvious |
| Port | 22 | Non-standard (optional) | Reduces automated scans |
| Idle timeout | None | ClientAliveInterval | Prevent hijacking |
| Max auth attempts | 6 | 3 | Slow brute force |
| Allowed users | All | AllowUsers specific | Limit access |

**SSH authentication:**

| Method | Security | Use Case |
|--------|----------|----------|
| Password | Low | Temporary/legacy |
| Public key | High | Standard best practice |
| Certificate | Highest | Enterprise, scale |
| Two-factor | Highest | Critical systems |

**SSH key generation:**

| Question | Answer |
|----------|--------|
| `-t ed25519` | Algorithm type (modern, secure) |
| Storage | ~/.ssh/id_ed25519 (private), .pub (public) |
| Public key | Placed on servers to allow access |
| Private key | Kept secret on client |
| Passphrase | Yes—protects key if stolen |

---

### Activity C: TLS/SSL - Answers

| Version | Status | Notes |
|---------|--------|-------|
| SSL 2.0 | Deprecated | Broken, never use |
| SSL 3.0 | Deprecated | POODLE vulnerability |
| TLS 1.0 | Deprecated | Weak, PCI non-compliant |
| TLS 1.1 | Deprecated | Weak |
| TLS 1.2 | Current standard | Widely supported, secure |
| TLS 1.3 | Recommended | Latest, most secure |

**TLS handshake:**

| Step | What Happens |
|------|--------------|
| 1 | ClientHello (versions, ciphers) |
| 2 | ServerHello (selected cipher), Certificate |
| 3 | Key exchange |
| 4 | Client verifies certificate |
| 5 | Encrypted session established |

**TLS 1.3 improvements:**

| Improvement | Benefit |
|-------------|---------|
| Fewer round trips | Faster connections (1-RTT, 0-RTT) |
| Removed weak ciphers | No RC4, DES, SHA-1 |
| Forward secrecy | Ephemeral keys mandatory |
| Encrypted handshake | Hides more metadata |

**Secure cipher suite:**

| Component | Secure | Avoid |
|-----------|--------|-------|
| Key exchange | ECDHE, DHE | RSA (no FS) |
| Authentication | RSA, ECDSA | None |
| Encryption | AES-GCM, ChaCha20 | RC4, DES, 3DES |
| Hash | SHA-256, SHA-384 | MD5, SHA-1 |

---

### Activity D: DNS Security - Answers

**DNS attacks:**

| Attack | Description | Impact |
|--------|-------------|--------|
| Spoofing | Fake response to specific query | Single user misdirected |
| Cache poisoning | Inject false record into cache | All users of that resolver |
| Hijacking | Take over domain registration | Full domain control |
| Tunneling | Encode data in DNS queries | Data exfiltration |
| Amplification | Use DNS for DDoS | DDoS attack |

**DNS security solutions:**

| Solution | What It Does | Protects Against |
|----------|--------------|------------------|
| DNSSEC | Signs records cryptographically | Spoofing, poisoning |
| DoH | DNS over HTTPS (port 443) | Eavesdropping |
| DoT | DNS over TLS (port 853) | Eavesdropping |
| RRL | Limits response rate | Amplification |
| DNS filtering | Blocks malicious domains | Malware, phishing |

**DoH vs DoT:**

| Aspect | DoH | DoT |
|--------|-----|-----|
| Port | 443 | 853 |
| Encryption | HTTPS | TLS |
| Visibility | Looks like web traffic | Identifiable as DNS |
| Blocking | Hard to block | Easier to block |

---

### Activity E: Email Security - Answers

| Protocol | Full Name | Purpose |
|----------|-----------|---------|
| SPF | Sender Policy Framework | Lists authorized mail servers |
| DKIM | DomainKeys Identified Mail | Signs messages for integrity |
| DMARC | Domain-based Message Auth | Policy enforcement |

**SPF record components:**

| Component | Meaning |
|-----------|---------|
| v=spf1 | Version identifier |
| include: | Trust another domain's SPF |
| -all | Hard fail (reject others) |
| ~all | Soft fail (mark suspicious) |

**DKIM process:**

| Step | Action |
|------|--------|
| 1 | Sending server signs with private key |
| 2 | Public key published in DNS |
| 3 | Receiving server verifies signature |

**DMARC policies:**

| Policy | Action |
|--------|--------|
| p=none | Monitor only, no action |
| p=quarantine | Send failures to spam |
| p=reject | Reject failures completely |

---

### Activity F: SNMP Security - Answers

| Feature | v1 | v2c | v3 |
|---------|----|----|-----|
| Authentication | Community string | Community string | Username + hash |
| Encryption | None | None | DES/AES |
| Community strings | Yes (plaintext) | Yes (plaintext) | No |
| Integrity | None | None | HMAC |
| Security | Poor | Poor | Good |

**SNMPv3 security levels:**

| Level | Auth | Encryption | Use Case |
|-------|------|------------|----------|
| noAuthNoPriv | No | No | Don't use |
| authNoPriv | Yes | No | Basic auth needed |
| authPriv | Yes | Yes | Recommended |

---

### Activity G: 802.1X - Answers

| Component | Role | Example |
|-----------|------|---------|
| Supplicant | Client requesting access | Laptop, phone |
| Authenticator | Network device controlling access | Switch, AP |
| Auth Server | Validates credentials | RADIUS server |

**802.1X process:**

| Step | Action |
|------|--------|
| 1 | Supplicant connects (port blocked) |
| 2 | Authenticator requests identity |
| 3 | Supplicant provides credentials |
| 4 | Authenticator forwards to RADIUS |
| 5 | RADIUS validates, sends accept/reject |

**EAP methods:**

| Method | Description | Cert Required |
|--------|-------------|---------------|
| EAP-TLS | Client + server certificates | Both sides |
| EAP-TTLS | Server cert, various inner auth | Server only |
| PEAP | Server cert, MSCHAPv2 inside | Server only |
| EAP-FAST | Cisco, uses PAC | Server only |

**With/Without 802.1X:**

| Scenario | Without | With |
|----------|---------|------|
| Unknown device | Gets network access | Blocked or guest VLAN |
| Employee device | Same access as above | Authenticated, proper VLAN |
| Guest | Full access | Guest VLAN, limited |
| Compromised | Full access | Posture check may fail |

---

### Activity H: Network Device Hardening - Answers

**Management plane security:**

| Control | Purpose |
|---------|---------|
| Out-of-band management | Separate management from production |
| Management VLAN | Isolate management traffic |
| ACLs on VTY | Limit management source IPs |
| SSH only | Encrypted management |
| Strong auth | MFA, TACACS+ |
| Session timeout | Prevent abandoned sessions |

**Data plane security:**

| Control | Purpose |
|---------|---------|
| Port security | Limit MACs per port |
| DHCP snooping | Prevent rogue DHCP |
| DAI | Prevent ARP spoofing |
| IP Source Guard | Prevent IP spoofing |
| Storm control | Prevent broadcast storms |
| Private VLANs | Isolate within VLAN |

---

### Activity I: Secure Remote Access - Answers

| Method | Use Case | Security |
|--------|----------|----------|
| IPSec VPN | Site-to-site, remote access | High |
| SSL VPN | Remote access | High |
| SSH | CLI access | High |
| RDP direct | Never | Low |
| RDP via gateway | Remote desktop | Medium-High |
| Bastion | Admin access | High |
| Zero trust | Modern access | Highest |

**Never expose directly:**

| Service | Secure Method |
|---------|---------------|
| RDP | VPN or RD Gateway |
| SSH | VPN or bastion |
| Database | VPN, never public |
| Management | Out-of-band or VPN |

---

### Activity J: Logging and Monitoring - Answers

**Syslog levels:**

| Level | Name | Description |
|-------|------|-------------|
| 0 | Emergency | System unusable |
| 1 | Alert | Immediate action needed |
| 2 | Critical | Critical conditions |
| 3 | Error | Error conditions |
| 4 | Warning | Warning conditions |
| 5 | Notice | Normal but significant |
| 6 | Informational | Informational |
| 7 | Debug | Debug-level messages |

---

### Activity K: Scenario Solutions - Answers

**Scenario 1: FTP-only app**

| Option | Implementation |
|--------|----------------|
| SFTP gateway | Put SFTP proxy in front |
| VPN tunnel | Require VPN for FTP access |
| Network isolation | Dedicated VLAN, strict ACLs |

**Scenario 2: SNMPv2 with "public"**

| Risk | Complete credential exposure |
| Immediate | Change community strings |
| Long-term | Migrate to SNMPv3 with authPriv |

**Scenario 3: Email spoofing**

| Step | Implementation |
|------|----------------|
| 1 | Implement SPF record |
| 2 | Deploy DKIM signing |
| 3 | Configure DMARC (start p=none, move to reject) |

**Scenario 4: Remote workers**

| Component | Purpose |
|-----------|---------|
| VPN (SSL or IPSec) | Secure tunnel |
| MFA | Strong authentication |
| Split tunnel (or not) | Based on policy |
| Endpoint protection | Verify device security |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Telnet to SSH migration**

**Convince them:**
- Demonstrate Wireshark capture of Telnet showing plaintext passwords
- Show compliance requirements (PCI, HIPAA)
- Explain MITM risk

**Implementation:**
1. Enable SSH on all devices
2. Test SSH connectivity
3. Update documentation and scripts
4. Disable Telnet
5. Verify with scan

---

**Scenario 2: Email spoofing fix**

**Steps in order:**
1. Implement SPF (quick, immediate benefit)
2. Deploy DKIM (requires mail server changes)
3. DMARC with p=none (monitor first)
4. Review DMARC reports
5. Move to p=quarantine, then p=reject
6. Notify customers of improvements

---

**Scenario 3: SNMPv2 with public string**

**Strategy:**
1. Inventory all SNMP-enabled devices
2. Immediately change community strings (even v2)
3. Prioritize critical infrastructure for v3 migration
4. Update monitoring systems for new credentials
5. Phase v3 deployment by criticality
6. Disable v1/v2 when v3 confirmed working
7. Scan to verify no v2 remains

---

## Key Exam Tips

1. **Protocol alternatives:**
   - Telnet → SSH (22)
   - FTP → SFTP (22) or FTPS (990)
   - HTTP → HTTPS (443)
   - SNMPv1/v2 → SNMPv3

2. **TLS versions:** Only 1.2 and 1.3 are acceptable

3. **SSH hardening:** Disable root login, use key authentication, Protocol 2 only

4. **Email authentication order:** SPF → DKIM → DMARC

5. **SNMPv3:** Only version with encryption (authPriv)

6. **802.1X components:** Supplicant, Authenticator, Authentication Server (RADIUS)

7. **DNSSEC:** Prevents spoofing/poisoning via digital signatures

8. **DoH:** Port 443 (looks like HTTPS)
   **DoT:** Port 853

9. **Never expose directly:** RDP, SSH, databases, management interfaces

10. **Syslog 0:** Emergency (most severe)

---

## Common Mistakes to Avoid

❌ Thinking Telnet is "fine for internal use" (still plaintext)

❌ Confusing SPF, DKIM, and DMARC purposes

❌ Thinking TLS 1.0/1.1 are still acceptable

❌ Using SNMPv2 because "v3 is too complicated"

❌ Exposing RDP directly to internet

❌ Forgetting that 802.1X requires RADIUS

---

**Congratulations on completing Lab 16!**

Secure protocol selection is fundamental—this knowledge applies to every network environment.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 16: Secure Network Design - Solution Guide*