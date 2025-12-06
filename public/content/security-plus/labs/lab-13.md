# Lab 13: Mitigation Techniques

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 2.5 - Explain the purpose of mitigation techniques used to secure the enterprise

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between a preventive control and a detective control? Give an example of each.**

2. **Explain the concept of defense in depth. Why is it important?**

3. **What is network segmentation, and how does it reduce risk?**

4. **What is the principle of least privilege, and how does it mitigate threats?**

5. **What is hardening, and what are common hardening activities?**

---

## Section 2: Hands-On Activities

### Activity A: Security Control Categories

**Goal:** Classify security controls by type and function.

**Control type matrix:**

| Control Type | Purpose | Example |
|--------------|---------|---------|
| Preventive | | |
| Detective | | |
| Corrective | | |
| Deterrent | | |
| Compensating | | |
| Directive | | |

**Control category matrix:**

| Category | Description | Example |
|----------|-------------|---------|
| Technical | | |
| Administrative/Managerial | | |
| Operational | | |
| Physical | | |

**Classify these controls:**

| Control | Type | Category |
|---------|------|----------|
| Firewall blocking malicious traffic | | |
| Security awareness training | | |
| SIEM alerting on suspicious activity | | |
| Backup restoration after ransomware | | |
| "No tailgating" signs | | |
| Security guard at entrance | | |
| Antivirus quarantining malware | | |
| Security policy document | | |
| Intrusion detection system | | |
| MFA for remote access | | |
| Badge reader on server room | | |
| Encryption of sensitive data | | |

---

### Activity B: Defense in Depth Mapping

**Goal:** Apply layered security to a network.

**Defense in depth layers:**

| Layer | Controls at This Layer | Example Threats Mitigated |
|-------|----------------------|---------------------------|
| Perimeter | | |
| Network | | |
| Host/Endpoint | | |
| Application | | |
| Data | | |
| User | | |
| Physical | | |

**Scenario: Protecting a web application**

Map controls at each layer:

| Layer | Specific Controls |
|-------|-------------------|
| Perimeter | |
| Network | |
| Host | |
| Application | |
| Data | |
| User | |

**Why multiple layers?**

If an attacker bypasses the firewall, what stops them?

_________________________________________________________________

If malware evades antivirus, what stops it?

_________________________________________________________________

---

### Activity C: Network Segmentation

**Goal:** Design network segments to reduce risk.

**Segmentation benefits:**

| Benefit | How It Helps |
|---------|--------------|
| Limit breach scope | |
| Reduce attack surface | |
| Compliance isolation | |
| Performance improvement | |
| Access control | |

**Common network segments:**

| Segment | Purpose | What Belongs Here |
|---------|---------|-------------------|
| DMZ | | |
| Internal/Corporate | | |
| Guest | | |
| Management | | |
| IoT/OT | | |
| PCI/Cardholder | | |
| Development | | |

**Design a segmented network:**

Your organization has:
- Public web servers
- Internal file servers
- Employee workstations
- Guest Wi-Fi users
- Security cameras (IoT)
- Payment processing systems

Draw or describe how you would segment these:

| Segment Name | Systems Included | Access Rules |
|--------------|------------------|--------------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Microsegmentation:**

| Aspect | Traditional Segmentation | Microsegmentation |
|--------|-------------------------|-------------------|
| Granularity | | |
| Implementation | | |
| Use case | | |
| East-west traffic | | |

---

### Activity D: Access Control Implementation

**Goal:** Apply access control principles.

**Least privilege analysis:**

| Role | Current Access | Least Privilege Access | Risk Reduced |
|------|----------------|----------------------|--------------|
| Help desk | Full admin on all workstations | | |
| Developer | Production database write | | |
| Marketing | All shared drives | | |
| Contractor | Same as employees | | |
| Application | Runs as root/SYSTEM | | |

**Separation of duties examples:**

| Process | Duties to Separate | Why |
|---------|-------------------|-----|
| Financial transactions | | |
| System changes | | |
| User account management | | |
| Code deployment | | |
| Security monitoring | | |

**Account management best practices:**

| Practice | Purpose |
|----------|---------|
| Disable default accounts | |
| Rename administrator account | |
| Remove unnecessary accounts | |
| Regular access reviews | |
| Automatic account lockout | |
| Session timeout | |
| Just-in-time access | |

**Check your own system:**

Open Command Prompt:
```
net user
```

| Question | Your Finding |
|----------|--------------|
| How many user accounts exist? | |
| Is the Guest account enabled? | |
| Any accounts you don't recognize? | |

---

### Activity E: System Hardening

**Goal:** Understand and apply system hardening techniques.

**Hardening checklist - Operating System:**

| Hardening Action | Purpose | Windows Implementation |
|------------------|---------|----------------------|
| Remove unnecessary software | | |
| Disable unnecessary services | | |
| Apply security patches | | |
| Configure host firewall | | |
| Enable audit logging | | |
| Disable USB autorun | | |
| Configure password policy | | |
| Enable BitLocker | | |
| Disable SMBv1 | | |
| Enable secure boot | | |

**Check Windows Firewall status:**

```
netsh advfirewall show allprofiles state
```

| Profile | Status |
|---------|--------|
| Domain | |
| Private | |
| Public | |

**Check SMBv1 status (PowerShell as admin):**

```powershell
Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol
```

| Question | Status |
|----------|--------|
| Is SMBv1 enabled? | [ ] Yes [ ] No |
| Should it be? | [ ] Yes [ ] No |

**Application hardening:**

| Application Type | Hardening Actions |
|------------------|-------------------|
| Web server | |
| Database | |
| Email server | |
| DNS server | |

---

### Activity F: Patch Management

**Goal:** Understand patch management processes.

**Patch management lifecycle:**

| Phase | Activities |
|-------|------------|
| 1. Inventory | |
| 2. Assessment | |
| 3. Acquisition | |
| 4. Testing | |
| 5. Deployment | |
| 6. Verification | |
| 7. Documentation | |

**Patch prioritization factors:**

| Factor | Consideration |
|--------|---------------|
| Severity (CVSS) | |
| Exploitability | |
| System criticality | |
| Business impact | |
| Patch availability | |
| Testing requirements | |

**Patch deployment timeline:**

| Patch Type | Timeline | Rationale |
|------------|----------|-----------|
| Critical (actively exploited) | | |
| Critical (no known exploit) | | |
| High severity | | |
| Medium severity | | |
| Low severity | | |

**Check Windows Update status:**

Settings → Windows Update

| Question | Your System |
|----------|-------------|
| Last checked | |
| Updates available | |
| Last installed update | |
| Update history - any failures? | |

---

### Activity G: Encryption Implementation

**Goal:** Apply encryption for data protection.

**Encryption at different states:**

| Data State | Encryption Methods | Tools/Technologies |
|------------|-------------------|-------------------|
| At rest | | |
| In transit | | |
| In use | | |

**Encryption use cases:**

| Scenario | Encryption Solution |
|----------|---------------------|
| Laptop hard drive | |
| Database sensitive columns | |
| Website traffic | |
| Email content | |
| VPN tunnel | |
| Backup tapes | |
| USB drive | |
| File share sensitive folder | |

**Check BitLocker status (if available):**

Command Prompt (admin):
```
manage-bde -status
```

Or: Control Panel → BitLocker Drive Encryption

| Drive | BitLocker Status |
|-------|------------------|
| C: | |
| Other drives | |

**TLS implementation checklist:**

| Item | Best Practice |
|------|---------------|
| Minimum TLS version | |
| Cipher suites | |
| Certificate validity | |
| HSTS enabled | |
| Certificate transparency | |

---

### Activity H: Endpoint Protection

**Goal:** Implement comprehensive endpoint security.

**Endpoint protection components:**

| Component | Purpose | Example Products |
|-----------|---------|------------------|
| Antivirus/Anti-malware | | |
| EDR (Endpoint Detection & Response) | | |
| Host-based firewall | | |
| DLP (Data Loss Prevention) | | |
| Application control | | |
| Disk encryption | | |
| Patch management agent | | |

**EDR vs Traditional AV:**

| Aspect | Traditional AV | EDR |
|--------|----------------|-----|
| Detection method | | |
| Response capability | | |
| Visibility | | |
| Investigation | | |
| Threat hunting | | |

**Application control methods:**

| Method | Description | Use Case |
|--------|-------------|----------|
| Allowlisting | | |
| Blocklisting | | |
| Sandboxing | | |

**Check Windows Security status:**

Open Windows Security app:

| Protection | Status |
|------------|--------|
| Virus & threat protection | |
| Firewall & network protection | |
| App & browser control | |
| Device security | |

---

### Activity I: Configuration Management

**Goal:** Maintain secure configurations.

**Configuration management principles:**

| Principle | Description |
|-----------|-------------|
| Baseline | |
| Drift detection | |
| Version control | |
| Change management | |
| Documentation | |

**Secure baseline sources:**

| Source | What It Provides |
|--------|------------------|
| CIS Benchmarks | |
| DISA STIGs | |
| Vendor guidelines | |
| NIST guidelines | |

**Configuration items to control:**

| System | Key Configuration Items |
|--------|------------------------|
| Windows Server | |
| Linux Server | |
| Network devices | |
| Databases | |
| Web servers | |

**Change management for configurations:**

| Step | Purpose |
|------|---------|
| 1. Request | |
| 2. Review | |
| 3. Approve | |
| 4. Test | |
| 5. Implement | |
| 6. Verify | |
| 7. Document | |

---

### Activity J: Decommissioning and Data Sanitization

**Goal:** Securely retire systems and data.

**Decommissioning checklist:**

| Step | Actions |
|------|---------|
| 1. Identify dependencies | |
| 2. Backup data | |
| 3. Remove from production | |
| 4. Revoke access | |
| 5. Sanitize data | |
| 6. Document disposal | |
| 7. Update inventory | |

**Data sanitization methods:**

| Method | Description | When to Use |
|--------|-------------|-------------|
| Clear | | |
| Purge | | |
| Destroy | | |

**Physical destruction methods:**

| Method | Media Type | Verification |
|--------|------------|--------------|
| Shredding | | |
| Degaussing | | |
| Incineration | | |
| Disintegration | | |

**Match sanitization to scenario:**

| Scenario | Method |
|----------|--------|
| Reallocating laptop within company | |
| Selling old servers | |
| Retiring drives with classified data | |
| Returning leased equipment | |
| Failed drive under warranty | |

---

### Activity K: Mitigation Scenario Application

**Goal:** Apply mitigation techniques to real scenarios.

**Scenario 1: Ransomware Prevention**

What mitigation techniques would help prevent or limit ransomware?

| Technique | How It Helps |
|-----------|--------------|
| | |
| | |
| | |
| | |
| | |

**Scenario 2: Insider Threat**

What mitigation techniques address insider threat risk?

| Technique | How It Helps |
|-----------|--------------|
| | |
| | |
| | |
| | |
| | |

**Scenario 3: Web Application Attack**

What mitigation techniques protect a web application?

| Technique | How It Helps |
|-----------|--------------|
| | |
| | |
| | |
| | |
| | |

---

### Tier 2 Bonus: Windows Hardening Commands

> ⚠️ **Requires:** Administrator privileges. Some commands may affect system functionality.

---

### Activity L: Windows Hardening Verification

**Goal:** Check hardening settings on Windows.

**Check password policy:**

```
net accounts
```

| Setting | Current Value | Recommended |
|---------|---------------|-------------|
| Minimum password length | | 14+ |
| Maximum password age | | 60-90 days |
| Lockout threshold | | 3-5 attempts |
| Lockout duration | | 15+ minutes |

**Check audit policy:**

```
auditpol /get /category:*
```

| Category | Status |
|----------|--------|
| Account Logon | |
| Logon/Logoff | |
| Object Access | |
| Policy Change | |
| System | |

**Check running services:**

```
sc query state= all | findstr "RUNNING"
```

List any services that might not be needed:

| Service | Purpose Known? | Needed? |
|---------|----------------|---------|
| | | |
| | | |
| | | |

**Check for listening ports:**

```
netstat -an | findstr "LISTENING"
```

| Port | Expected? | Service |
|------|-----------|---------|
| | | |
| | | |
| | | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your organization experienced a breach where an attacker moved laterally from a compromised workstation to the domain controller. What mitigation techniques would have prevented or limited this lateral movement?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A developer argues that security controls slow down their work. They want admin access to everything, exceptions from patching, and disabled endpoint protection on their machine. How do you respond?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** You're tasked with hardening 500 servers. Creating individual configurations is impractical. What approach would you take to efficiently achieve consistent hardening across all servers?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Classify controls by type (preventive, detective, corrective, etc.)
- [ ] Explain defense in depth with examples at each layer
- [ ] Design network segmentation for different scenarios
- [ ] Apply least privilege and separation of duties
- [ ] List system hardening activities
- [ ] Describe patch management lifecycle
- [ ] Identify encryption solutions for data states
- [ ] Differentiate EDR from traditional antivirus
- [ ] Explain configuration management principles
- [ ] Select appropriate data sanitization methods

---

## What You Learned Today

- ✅ Classified security controls by type and category
- ✅ Applied defense in depth layers
- ✅ Designed network segmentation
- ✅ Implemented access control principles
- ✅ Reviewed system hardening techniques
- ✅ Understood patch management lifecycle
- ✅ Mapped encryption to data states
- ✅ Compared endpoint protection solutions
- ✅ Explored configuration management
- ✅ Selected data sanitization methods
- ✅ Applied mitigations to threat scenarios
- ✅ (Tier 2) Verified Windows hardening settings

**Next Lab:** Network Security Architecture - firewalls, DMZ, and network design.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 13: Mitigation Techniques*