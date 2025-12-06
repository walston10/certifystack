# Lab 11: Vulnerability Types

**Tier:** 1 (Universal)
**Time:** 25-30 minutes
**Exam Objectives:** 2.3 - Explain various types of vulnerabilities

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between a vulnerability, a threat, and a risk?**

2. **What is a zero-day vulnerability, and why is it particularly dangerous?**

3. **Explain the difference between a misconfiguration vulnerability and a software vulnerability.**

4. **What is a race condition vulnerability? Give an example of how it could be exploited.**

5. **Why are end-of-life (EOL) systems considered vulnerable even if no known exploits exist?**

---

## Section 2: Hands-On Activities

### Activity A: Vulnerability Categories

**Goal:** Classify vulnerabilities by type and source.

**Complete the vulnerability taxonomy:**

| Category | Description | Examples |
|----------|-------------|----------|
| Software/Code | | |
| Configuration | | |
| Architecture/Design | | |
| Human/Process | | |
| Hardware | | |
| Cryptographic | | |
| Physical | | |

**Map vulnerabilities to categories:**

| Vulnerability | Primary Category |
|---------------|------------------|
| Unpatched operating system | |
| Default administrator password | |
| No input validation in code | |
| Single point of failure in network design | |
| Weak encryption algorithm (DES) | |
| USB ports accessible in lobby kiosk | |
| Employee shares password with coworker | |
| Buffer overflow in application | |
| Firewall allows all outbound traffic | |
| No backup generator for data center | |
| Race condition in file handling | |
| Open wireless network | |

---

### Activity B: Application Vulnerabilities

**Goal:** Understand common software vulnerabilities.

**Application vulnerability types:**

| Vulnerability | What Causes It | What Attacker Gains |
|---------------|----------------|---------------------|
| Buffer overflow | | |
| Integer overflow | | |
| Memory leak | | |
| Pointer dereference | | |
| Race condition | | |
| Improper error handling | | |
| Improper input handling | | |
| Resource exhaustion | | |
| Use after free | | |

**Race condition example:**

Time-of-Check to Time-of-Use (TOCTOU):

| Step | Normal Operation | Attack Scenario |
|------|------------------|-----------------|
| 1 | Check if user can access file X | Check if user can access file X |
| 2 | | Attacker swaps file X with file Y (symlink) |
| 3 | Access file X | Access file Y (unauthorized) |

**Why do race conditions occur?**

_________________________________________________________________

**Improper error handling - what information might leak?**

| Error Message | Information Leaked |
|---------------|-------------------|
| "Login failed: User 'admin' not found" | |
| "Database error: MySQL syntax error near 'SELECT'" | |
| Stack trace with file paths | |
| "Error connecting to 192.168.1.50:3306" | |

---

### Activity C: Operating System Vulnerabilities

**Goal:** Identify OS-level vulnerabilities.

**Check your Windows system:**

**System information:**

Open Command Prompt:
```
systeminfo | findstr /B /C:"OS Name" /C:"OS Version" /C:"System Type"
```

| Property | Your System |
|----------|-------------|
| OS Name | |
| OS Version | |
| System Type | |

**Check for pending updates:**

Settings → Windows Update

| Question | Your Answer |
|----------|-------------|
| Updates pending? | [ ] Yes [ ] No |
| Last check date | |
| Any failed updates? | [ ] Yes [ ] No |

**Common OS vulnerabilities:**

| Vulnerability Type | Description | Example |
|-------------------|-------------|---------|
| Unpatched systems | | |
| Default configurations | | |
| Unnecessary services | | |
| Overly permissive permissions | | |
| Legacy protocols enabled | | |
| Missing security features | | |

**Check running services:**

```
sc query state= all | findstr "RUNNING"
```

Or use `services.msc`

**Questions to consider:**

| Service Question | Security Implication |
|------------------|---------------------|
| Do you recognize all running services? | |
| Are there services you don't need? | |
| Are any services running as SYSTEM that shouldn't be? | |

---

### Activity D: Web Application Vulnerabilities

**Goal:** Categorize web-specific vulnerabilities.

**Web vulnerability checklist:**

| Vulnerability | OWASP Category | Impact | Common Cause |
|---------------|----------------|--------|--------------|
| SQL Injection | | | |
| Cross-Site Scripting | | | |
| CSRF | | | |
| Insecure Direct Object Reference | | | |
| Security Misconfiguration | | | |
| Sensitive Data Exposure | | | |
| Broken Authentication | | | |
| XML External Entity (XXE) | | | |
| Broken Access Control | | | |
| Insecure Deserialization | | | |

**API vulnerabilities:**

| Vulnerability | Description | Prevention |
|---------------|-------------|------------|
| Broken object-level authorization | | |
| Broken authentication | | |
| Excessive data exposure | | |
| Lack of rate limiting | | |
| Broken function-level authorization | | |
| Mass assignment | | |

---

### Activity E: Hardware Vulnerabilities

**Goal:** Understand hardware-level security issues.

**Hardware vulnerability types:**

| Vulnerability | Description | Example |
|---------------|-------------|---------|
| Firmware vulnerabilities | | |
| Side-channel attacks | | |
| Hardware backdoors | | |
| Physical tampering | | |
| End-of-life hardware | | |

**Notable hardware vulnerabilities:**

| Vulnerability | Affected Hardware | Impact |
|---------------|-------------------|--------|
| Spectre | | |
| Meltdown | | |
| Rowhammer | | |
| JTAG exploitation | | |

**Spectre/Meltdown - why significant?**

| Aspect | Details |
|--------|---------|
| What's vulnerable | |
| What can be stolen | |
| Why hard to fix | |
| Mitigation approach | |

**Check your processor vulnerabilities (Windows):**

PowerShell (Admin):
```powershell
Get-SpeculationControlSettings
```

Or check Windows Security → Device Security → Core isolation

| Protection | Your Status |
|------------|-------------|
| Memory integrity | [ ] On [ ] Off |
| Kernel DMA Protection | [ ] On [ ] Off [ ] N/A |

---

### Activity F: Cryptographic Vulnerabilities

**Goal:** Identify weak cryptography.

**Deprecated/weak algorithms:**

| Algorithm | Type | Status | Replacement |
|-----------|------|--------|-------------|
| MD5 | | | |
| SHA-1 | | | |
| DES | | | |
| 3DES | | | |
| RC4 | | | |
| RSA-1024 | | | |
| TLS 1.0 | | | |
| TLS 1.1 | | | |
| WEP | | | |
| WPA (TKIP) | | | |

**Cryptographic vulnerability types:**

| Vulnerability | Description | Impact |
|---------------|-------------|--------|
| Weak algorithms | | |
| Short key lengths | | |
| Poor random number generation | | |
| Improper key management | | |
| Implementation flaws | | |
| Downgrade attacks | | |
| Certificate issues | | |

**Check TLS on a website:**

Visit: ssllabs.com/ssltest

Test a website of your choice:

| Property | Result |
|----------|--------|
| Website tested | |
| SSL Labs grade | |
| TLS versions supported | |
| Any weak ciphers? | |
| Certificate valid? | |
| PFS supported? | |

---

### Activity G: Configuration Vulnerabilities

**Goal:** Identify common misconfigurations.

**Configuration vulnerability types:**

| Misconfiguration | Risk | Example |
|------------------|------|---------|
| Default credentials | | |
| Unnecessary services | | |
| Open permissions | | |
| Debug mode enabled | | |
| Verbose error messages | | |
| Missing security headers | | |
| Unrestricted file uploads | | |
| Directory listing enabled | | |
| CORS misconfiguration | | |

**Default credential awareness:**

| Device/Software | Common Defaults | Risk |
|-----------------|-----------------|------|
| Consumer routers | | |
| Network switches | | |
| Databases | | |
| IoT devices | | |
| Web applications | | |

**Check a website for security headers:**

Use browser Developer Tools (F12) → Network → Select request → Headers

Or use: securityheaders.com

| Header | Purpose | Present? |
|--------|---------|----------|
| Content-Security-Policy | | |
| X-Content-Type-Options | | |
| X-Frame-Options | | |
| Strict-Transport-Security | | |
| X-XSS-Protection | | |
| Referrer-Policy | | |
| Permissions-Policy | | |

---

### Activity H: Cloud and Virtualization Vulnerabilities

**Goal:** Understand cloud-specific vulnerabilities.

**Cloud vulnerability types:**

| Vulnerability | Description | Risk |
|---------------|-------------|------|
| Misconfigured storage | | |
| Insecure APIs | | |
| Shared tenancy issues | | |
| IAM misconfigurations | | |
| Insufficient logging | | |
| Data residency issues | | |

**Virtualization vulnerabilities:**

| Vulnerability | Description | Impact |
|---------------|-------------|--------|
| VM escape | | |
| Hypervisor vulnerabilities | | |
| Side-channel attacks | | |
| Resource exhaustion | | |
| Snapshot exposure | | |

**VM escape - why is it critical?**

_________________________________________________________________

**Cloud shared responsibility:**

| Layer | IaaS Responsibility | PaaS | SaaS |
|-------|---------------------|------|------|
| Data | | | |
| Applications | | | |
| Runtime | | | |
| OS | | | |
| Virtualization | | | |
| Hardware | | | |
| Network | | | |

(Mark: C = Customer, P = Provider, S = Shared)

---

### Activity I: Human and Process Vulnerabilities

**Goal:** Recognize non-technical vulnerabilities.

**Human vulnerabilities:**

| Vulnerability | Example | Mitigation |
|---------------|---------|------------|
| Lack of awareness | | |
| Social engineering susceptibility | | |
| Insider threat | | |
| Poor password practices | | |
| Shadow IT | | |
| Policy violations | | |
| Negligence | | |

**Process vulnerabilities:**

| Vulnerability | Description | Impact |
|---------------|-------------|--------|
| No change management | | |
| Inadequate access reviews | | |
| Missing backup verification | | |
| No incident response plan | | |
| Insufficient logging | | |
| Lack of separation of duties | | |

**Identify the vulnerability type:**

| Scenario | Vulnerability Category |
|----------|----------------------|
| Developer deploys code directly to production | |
| Admin account shared among 5 people | |
| Backups not tested for 2 years | |
| User installs personal cloud storage app | |
| No review when employee changes departments | |
| Single person handles all financial transactions | |

---

### Activity J: Zero-Day and Legacy Vulnerabilities

**Goal:** Understand special vulnerability categories.

**Zero-day timeline:**

| Stage | Description | Who Knows |
|-------|-------------|-----------|
| Vulnerability exists | | |
| Discovered by researcher/attacker | | |
| Exploit developed | | |
| Zero-day attack occurs | | |
| Vendor notified | | |
| Patch developed | | |
| Patch released | | |
| Patch deployed | | |

**Why zero-days are dangerous:**

| Aspect | Challenge |
|--------|-----------|
| Detection | |
| Prevention | |
| Response | |
| Attribution | |

**Legacy/EOL systems:**

| System State | Vendor Support | Security Implication |
|--------------|----------------|---------------------|
| Current | Full support | |
| Legacy | Limited support | |
| End of Life | No support | |
| End of Support | No patches | |

**Check Windows EOL status:**

What is the end-of-support date for your Windows version?

| Your Windows Version | End of Support Date | Status |
|---------------------|---------------------|--------|
| | | |

(Check: docs.microsoft.com/lifecycle)

**Why organizations keep EOL systems:**

| Reason | Risk | Alternative |
|--------|------|-------------|
| Cost of upgrade | | |
| Application compatibility | | |
| "If it ain't broke..." | | |
| Embedded systems | | |

---

### Activity K: Vulnerability Scenario Analysis

**Goal:** Apply vulnerability knowledge to real scenarios.

**Identify all vulnerabilities in each scenario:**

**Scenario 1: Small Business Network**
- Windows Server 2012 R2 running Active Directory
- No firewall between internal network and internet
- All users have local admin on their workstations
- Backup runs to USB drive stored next to server
- Wi-Fi uses WPA2-Personal with "CompanyName123"

| Vulnerability | Category | Severity |
|---------------|----------|----------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Scenario 2: Web Application**
- User input directly concatenated into SQL queries
- Error messages display full stack traces
- Session tokens don't expire
- No rate limiting on login attempts
- Admin interface accessible via /admin (no IP restriction)

| Vulnerability | Category | Severity |
|---------------|----------|----------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Scenario 3: Cloud Deployment**
- S3 bucket set to public
- API keys hardcoded in application
- No MFA for cloud console access
- Logging disabled to reduce costs
- Single region deployment

| Vulnerability | Category | Severity |
|---------------|----------|----------|
| | | |
| | | |
| | | |
| | | |
| | | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your vulnerability scan reveals 500+ vulnerabilities across your network. Management wants to know which ones to fix first. What factors would you use to prioritize, and how would you communicate this to non-technical stakeholders?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A critical business application runs on Windows Server 2012, which is now end-of-life. The vendor says their application won't work on newer Windows versions. What options do you have, and what would you recommend?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A developer argues that fixing a vulnerability is unnecessary because "no one would ever find it." How would you respond to this security-by-obscurity argument?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Differentiate between vulnerability, threat, and risk
- [ ] Classify vulnerabilities by category (software, config, hardware, etc.)
- [ ] Explain race conditions and TOCTOU vulnerabilities
- [ ] Identify deprecated cryptographic algorithms
- [ ] Recognize common misconfigurations
- [ ] Understand cloud and virtualization vulnerabilities
- [ ] Explain why zero-days are particularly dangerous
- [ ] Describe risks of end-of-life systems
- [ ] Identify human and process vulnerabilities

---

## What You Learned Today

- ✅ Built a vulnerability taxonomy
- ✅ Explored application-level vulnerabilities
- ✅ Checked OS security status
- ✅ Mapped web vulnerabilities to OWASP
- ✅ Understood hardware vulnerabilities (Spectre/Meltdown)
- ✅ Identified weak cryptographic algorithms
- ✅ Analyzed configuration vulnerabilities
- ✅ Explored cloud/virtualization risks
- ✅ Recognized human/process vulnerabilities
- ✅ Understood zero-day and legacy risks
- ✅ Applied knowledge to real scenarios

**Next Lab:** Vulnerability Management - scanning, assessment, and remediation processes.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 11: Vulnerability Types*