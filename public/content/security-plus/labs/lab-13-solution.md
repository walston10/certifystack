# Lab 13: Mitigation Techniques - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Understanding mitigation techniques is essential for implementing effective security controls.

---

## Section 1: Concept Check - Answers

**1. Preventive vs Detective controls:**

**Answer:**

| Type | Purpose | Example |
|------|---------|---------|
| **Preventive** | Stop attacks before they happen | Firewall blocking malicious traffic |
| **Detective** | Identify attacks in progress or after | IDS alerting on suspicious activity |

**Key difference:** Preventive = stops the attack; Detective = identifies the attack

---

**2. Defense in depth:**

**Answer:**

**Defense in depth** is implementing multiple layers of security controls so that if one layer fails, others remain to protect assets.

**Why important:**
- No single control is perfect
- Different controls catch different threats
- Forces attackers to bypass multiple barriers
- Provides time for detection and response
- Reduces single points of failure

---

**3. Network segmentation:**

**Answer:**

**Network segmentation** divides a network into smaller, isolated segments with controlled access between them.

**Risk reduction:**
- Limits lateral movement after breach
- Contains malware spread
- Reduces attack surface per segment
- Enables targeted security controls
- Supports compliance (isolate regulated data)

---

**4. Principle of least privilege:**

**Answer:**

**Least privilege** means granting users/systems only the minimum access needed to perform their function.

**Threat mitigation:**
- Limits damage from compromised accounts
- Reduces insider threat impact
- Prevents accidental damage
- Shrinks attack surface
- Makes privilege escalation harder

---

**5. What is hardening?**

**Answer:**

**Hardening** is the process of securing a system by reducing its attack surface through configuration changes.

**Common activities:**
- Remove unnecessary software/services
- Apply security patches
- Configure host firewall
- Disable default accounts
- Change default passwords
- Enable logging and auditing
- Apply security baselines
- Encrypt sensitive data

---

## Section 2: Activity Solutions

### Activity A: Control Classification - Answers

**Control types:**

| Type | Purpose | Example |
|------|---------|---------|
| Preventive | Stop attacks before they occur | Firewall, encryption, MFA |
| Detective | Identify attacks in progress/after | IDS, SIEM, audit logs |
| Corrective | Fix damage after attack | Backup restoration, patching |
| Deterrent | Discourage attacks | Warning signs, cameras |
| Compensating | Alternative when primary isn't possible | Increased monitoring when can't patch |
| Directive | Guide behavior through policy | Security policy, AUP |

**Control categories:**

| Category | Description | Example |
|----------|-------------|---------|
| Technical | Technology-based controls | Firewalls, encryption |
| Administrative | Policies and procedures | Security policy, training |
| Operational | Day-to-day procedures | Change management, guards |
| Physical | Tangible protection | Locks, fences, cameras |

**Control classification:**

| Control | Type | Category |
|---------|------|----------|
| Firewall blocking traffic | Preventive | Technical |
| Security awareness training | Preventive | Administrative |
| SIEM alerting | Detective | Technical |
| Backup restoration | Corrective | Technical |
| "No tailgating" signs | Deterrent | Physical |
| Security guard | Detective/Deterrent | Operational/Physical |
| AV quarantine | Corrective | Technical |
| Security policy | Directive | Administrative |
| IDS | Detective | Technical |
| MFA | Preventive | Technical |
| Badge reader | Preventive | Physical |
| Encryption | Preventive | Technical |

---

### Activity B: Defense in Depth - Answers

| Layer | Controls | Threats Mitigated |
|-------|----------|-------------------|
| Perimeter | Firewall, WAF, DDoS protection | External attacks, unauthorized access |
| Network | IDS/IPS, segmentation, NAC | Lateral movement, network attacks |
| Host | Antivirus, EDR, host firewall, patching | Malware, exploits |
| Application | Input validation, WAF, code review | Injection, XSS, app attacks |
| Data | Encryption, DLP, access controls | Data theft, unauthorized access |
| User | Training, MFA, strong passwords | Social engineering, credential theft |
| Physical | Locks, cameras, guards | Physical theft, unauthorized access |

**Web application protection:**

| Layer | Controls |
|-------|----------|
| Perimeter | WAF, DDoS protection, firewall |
| Network | IPS, segmentation from internal network |
| Host | Hardened OS, patching, host firewall |
| Application | Input validation, secure coding, authentication |
| Data | Encryption at rest and in transit, access controls |
| User | Admin MFA, session management |

**Why multiple layers:**
- Firewall bypassed → IPS and segmentation limit movement
- AV evaded → EDR behavioral detection, network monitoring can catch it

---

### Activity C: Network Segmentation - Answers

**Segmentation benefits:**

| Benefit | How It Helps |
|---------|--------------|
| Limit breach scope | Attacker can't reach other segments |
| Reduce attack surface | Fewer systems exposed to each segment |
| Compliance isolation | PCI data separate from general network |
| Performance | Less broadcast traffic per segment |
| Access control | Enforce who can access what |

**Common segments:**

| Segment | Purpose | What Belongs |
|---------|---------|--------------|
| DMZ | Public-facing services | Web servers, email gateways |
| Internal | Employee resources | Workstations, internal apps |
| Guest | Visitor access | Guest Wi-Fi, no internal access |
| Management | Administration | Network management, security tools |
| IoT/OT | Connected devices | Cameras, HVAC, manufacturing |
| PCI | Payment processing | POS systems, card data |
| Development | Testing/dev | Dev servers, test systems |

**Segmented network design:**

| Segment | Systems | Access Rules |
|---------|---------|--------------|
| DMZ | Web servers | Internet → DMZ allowed; DMZ → Internal restricted |
| Internal | File servers, workstations | No direct internet; DMZ access limited |
| Guest | Guest Wi-Fi | Internet only; no internal access |
| IoT | Security cameras | Isolated; management access only |
| PCI | Payment systems | Highly restricted; logged access |

**Microsegmentation:**

| Aspect | Traditional | Microsegmentation |
|--------|-------------|-------------------|
| Granularity | Subnet/VLAN level | Individual workload/app |
| Implementation | Physical/VLAN | Software-defined |
| Use case | Zone separation | Zero trust, cloud |
| East-west | Limited control | Full control between workloads |

---

### Activity D: Access Control - Answers

**Least privilege analysis:**

| Role | Current | Least Privilege | Risk Reduced |
|------|---------|-----------------|--------------|
| Help desk | Full admin | Password reset, basic troubleshooting | Lateral movement, data access |
| Developer | Production DB write | Read-only prod, write to dev | Accidental/malicious data changes |
| Marketing | All shared drives | Marketing folders only | Data exposure |
| Contractor | Same as employees | Project-specific access, time-limited | Persistent access after project |
| Application | Runs as root | Dedicated service account, minimal perms | Privilege escalation from app compromise |

**Separation of duties:**

| Process | Separate | Why |
|---------|----------|-----|
| Financial | Requester ≠ approver ≠ processor | Prevent fraud |
| System changes | Developer ≠ deployer | Prevent unauthorized code |
| User accounts | Requester ≠ provisioner | Prevent fake accounts |
| Code deployment | Developer ≠ deployer ≠ approver | Prevent backdoors |
| Security monitoring | Ops ≠ security review | Independent oversight |

---

### Activity E: System Hardening - Answers

| Action | Purpose | Windows Implementation |
|--------|---------|----------------------|
| Remove software | Reduce attack surface | Programs and Features |
| Disable services | Reduce attack surface | services.msc |
| Apply patches | Fix vulnerabilities | Windows Update |
| Host firewall | Block unauthorized connections | Windows Defender Firewall |
| Audit logging | Detect security events | Local Security Policy |
| Disable autorun | Prevent USB malware | Group Policy |
| Password policy | Prevent weak passwords | Local Security Policy |
| BitLocker | Protect data at rest | BitLocker Drive Encryption |
| Disable SMBv1 | Remove vulnerable protocol | Windows Features |
| Secure boot | Prevent boot-level malware | UEFI settings |

**Application hardening:**

| Application | Hardening Actions |
|-------------|-------------------|
| Web server | Disable directory listing, remove default pages, TLS only, WAF |
| Database | Disable remote root, encrypt connections, minimal privileges |
| Email server | TLS required, DMARC/SPF/DKIM, antispam |
| DNS server | Disable recursion for external, DNSSEC, rate limiting |

---

### Activity F: Patch Management - Answers

| Phase | Activities |
|-------|------------|
| Inventory | Know what systems/software you have |
| Assessment | Identify applicable patches, prioritize |
| Acquisition | Download patches from trusted sources |
| Testing | Test in non-production environment |
| Deployment | Roll out with change management |
| Verification | Confirm patches applied, no issues |
| Documentation | Record what was patched, when |

**Patch deployment timeline:**

| Type | Timeline | Rationale |
|------|----------|-----------|
| Critical (exploited) | 24-48 hours | Active threat |
| Critical (no exploit) | 7-14 days | High risk, test first |
| High | 30 days | Significant risk |
| Medium | 60 days | Moderate risk |
| Low | 90 days | Low priority |

---

### Activity G: Encryption - Answers

| State | Methods | Technologies |
|-------|---------|--------------|
| At rest | Full disk, file/folder, database | BitLocker, VeraCrypt, TDE |
| In transit | TLS, VPN, encrypted protocols | HTTPS, IPSec, SSH |
| In use | Homomorphic encryption, enclaves | Intel SGX, AWS Nitro |

**Encryption use cases:**

| Scenario | Solution |
|----------|----------|
| Laptop drive | BitLocker, FileVault |
| Database columns | TDE, column-level encryption |
| Website traffic | TLS/HTTPS |
| Email content | S/MIME, PGP |
| VPN tunnel | IPSec, OpenVPN |
| Backup tapes | Hardware encryption, backup software encryption |
| USB drive | BitLocker To Go, VeraCrypt |
| Sensitive folder | EFS, third-party encryption |

---

### Activity H: Endpoint Protection - Answers

| Component | Purpose | Examples |
|-----------|---------|----------|
| AV/Anti-malware | Detect/block malware | Windows Defender, Norton |
| EDR | Advanced detection, response, visibility | CrowdStrike, Carbon Black |
| Host firewall | Control network connections | Windows Firewall, iptables |
| DLP | Prevent data exfiltration | Symantec DLP, Microsoft Purview |
| Application control | Allow only approved apps | AppLocker, Carbon Black |
| Disk encryption | Protect data if device lost | BitLocker, FileVault |
| Patch agent | Keep systems updated | WSUS, SCCM |

**EDR vs Traditional AV:**

| Aspect | Traditional AV | EDR |
|--------|----------------|-----|
| Detection | Signature-based primarily | Behavioral, ML, signatures |
| Response | Quarantine/delete | Automated response, isolation |
| Visibility | Limited | Full endpoint telemetry |
| Investigation | Basic logs | Timeline, process trees |
| Threat hunting | Not supported | Active hunting capability |

---

### Activity I: Configuration Management - Answers

| Principle | Description |
|-----------|-------------|
| Baseline | Standard secure configuration to apply |
| Drift detection | Identify when systems deviate from baseline |
| Version control | Track configuration changes over time |
| Change management | Control and approve configuration changes |
| Documentation | Record current and intended configurations |

**Secure baseline sources:**

| Source | Provides |
|--------|----------|
| CIS Benchmarks | Detailed secure configs for many platforms |
| DISA STIGs | DoD security configurations |
| Vendor guidelines | Product-specific hardening |
| NIST guidelines | Framework for configuration management |

---

### Activity J: Decommissioning - Answers

**Data sanitization methods:**

| Method | Description | When to Use |
|--------|-------------|-------------|
| Clear | Logical deletion, overwrite | Reuse within organization |
| Purge | Multiple overwrites, cryptographic erase | Reuse outside organization |
| Destroy | Physical destruction | Highly sensitive data |

**Scenario matching:**

| Scenario | Method |
|----------|--------|
| Reallocating laptop internally | Clear (overwrite) |
| Selling old servers | Purge (cryptographic erase) |
| Classified data drives | Destroy (shred/degauss) |
| Returning leased equipment | Purge (cryptographic erase) |
| Failed drive under warranty | Destroy (if can keep) or degauss |

---

### Activity K: Threat Mitigation Scenarios - Answers

**Ransomware Prevention:**

| Technique | How It Helps |
|-----------|--------------|
| Offline backups | Recover without paying |
| Network segmentation | Limit encryption spread |
| Least privilege | Reduce accessible data |
| Email filtering | Block phishing delivery |
| EDR | Detect/stop encryption behavior |
| Patch management | Close exploit paths |

**Insider Threat:**

| Technique | How It Helps |
|-----------|--------------|
| Least privilege | Limit what insider can access |
| DLP | Detect data exfiltration |
| Audit logging | Track user actions |
| Separation of duties | Require collusion |
| Access reviews | Remove unnecessary access |
| Behavioral analytics | Detect anomalous behavior |

**Web Application Attack:**

| Technique | How It Helps |
|-----------|--------------|
| WAF | Block injection, XSS attempts |
| Input validation | Prevent injection at code level |
| Parameterized queries | Prevent SQL injection |
| Output encoding | Prevent XSS |
| TLS | Protect data in transit |
| Patching | Fix known vulnerabilities |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Lateral movement from workstation to DC**

**Mitigations:**
- Network segmentation (workstations can't reach DC directly)
- Privileged Access Workstations (PAWs) for admin tasks
- Credential tiering (DC admin creds never on workstations)
- Least privilege (limit who has DC access)
- EDR for detecting lateral movement
- Network monitoring/IDS for unusual DC connections
- MFA for privileged access

---

**Scenario 2: Developer wanting exceptions**

**Response:**
- Explain risks of each request using specific examples
- Offer alternatives: dev VM, elevated access for specific tasks only
- Implement just-in-time privileged access
- Use developer-focused security tools that don't slow work
- Patch during off-hours or use automated patching
- If exceptions are granted, document and add compensating controls
- Escalate if developer won't accept reasonable security

---

**Scenario 3: Hardening 500 servers efficiently**

**Approach:**
1. Define standard baseline (CIS Benchmarks)
2. Create golden images with hardening applied
3. Use configuration management tools (Ansible, Puppet, SCCM)
4. Automate deployment and drift detection
5. Test on pilot group first
6. Deploy in phases with rollback capability
7. Monitor for configuration drift
8. Include in CI/CD pipeline for new deployments

---

## Key Exam Tips

1. **Control types:** Preventive (stop), Detective (find), Corrective (fix), Deterrent (discourage), Compensating (alternative)

2. **Control categories:** Technical, Administrative, Operational, Physical

3. **Defense in depth:** Multiple layers—perimeter, network, host, application, data

4. **Least privilege:** Minimum access needed for job function

5. **Segmentation:** Isolate networks to limit breach scope

6. **Hardening:** Remove unnecessary software/services, apply patches, secure configs

7. **Data sanitization:** Clear < Purge < Destroy (increasing security)

8. **EDR vs AV:** EDR provides behavioral detection and response capabilities

9. **Configuration baselines:** CIS Benchmarks, DISA STIGs

10. **Patch timeline:** Critical/exploited = ASAP; otherwise based on risk

---

## Common Mistakes to Avoid

❌ Thinking one control is sufficient (defense in depth!)

❌ Confusing preventive (stops) with detective (finds)

❌ Forgetting compensating controls when primary control isn't possible

❌ Overlooking physical and administrative controls

❌ Thinking "clear" deletion is sufficient for sensitive data

❌ Applying hardening without testing first

---

**Congratulations on completing Lab 13!**

Mitigation techniques are the practical application of security principles—this knowledge is essential for any security role.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 13: Mitigation Techniques - Solution Guide*