# Lab 27: Security Automation and Scripting

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 4.1, 4.4 - Apply common security techniques; automation and scripting

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are three benefits of automating security tasks?**

2. **What is the difference between a script and a program?**

3. **What are guard rails in security automation, and why are they important?**

4. **Name three security tasks that are good candidates for automation.**

5. **What risks should you consider when implementing security automation?**

---

## Section 2: Hands-On Activities

### Activity A: Automation Benefits and Use Cases

**Goal:** Understand when and why to automate.

**Benefits of automation:**

| Benefit | Description | Example |
|---------|-------------|---------|
| Speed | | |
| Consistency | | |
| Scale | | |
| Accuracy | | |
| Documentation | | |
| Cost reduction | | |
| 24/7 operation | | |

**Good automation candidates:**

| Task | Why Good for Automation |
|------|-------------------------|
| User provisioning | |
| Log analysis | |
| Vulnerability scanning | |
| Patch deployment | |
| Backup verification | |
| Certificate renewal | |
| Threat intel updates | |
| Compliance reporting | |

**Poor automation candidates:**

| Task | Why Not Good |
|------|--------------|
| | |
| | |
| | |

**Automation decision criteria:**

| Criterion | Question to Ask |
|-----------|-----------------|
| Frequency | |
| Complexity | |
| Risk | |
| Consistency | |
| Volume | |

---

### Activity B: Scripting Languages Overview

**Goal:** Understand common scripting languages.

**Language comparison:**

| Language | Platform | Strengths | Common Use |
|----------|----------|-----------|------------|
| PowerShell | | | |
| Bash | | | |
| Python | | | |
| JavaScript | | | |
| VBScript | | | |

**Match task to language:**

| Task | Best Language | Why |
|------|---------------|-----|
| Windows user management | | |
| Linux log parsing | | |
| Cross-platform security tool | | |
| Web automation | | |
| Legacy Windows scripts | | |

**Script file extensions:**

| Extension | Language |
|-----------|----------|
| .ps1 | |
| .sh | |
| .py | |
| .js | |
| .bat / .cmd | |
| .vbs | |

---

### Activity C: Basic Scripting Concepts

**Goal:** Understand fundamental scripting elements.

**Core programming concepts:**

| Concept | Description | Example Use |
|---------|-------------|-------------|
| Variables | | |
| Loops | | |
| Conditionals | | |
| Functions | | |
| Input/Output | | |
| Error handling | | |

**Variable examples:**

| Language | Variable Declaration |
|----------|---------------------|
| PowerShell | $username = "admin" |
| Bash | username="admin" |
| Python | username = "admin" |

**Loop examples:**

| Language | Loop Syntax |
|----------|-------------|
| PowerShell | foreach ($item in $list) { } |
| Bash | for item in $list; do ... done |
| Python | for item in list: |

**Conditional examples:**

| Language | If Statement |
|----------|--------------|
| PowerShell | if ($x -eq 5) { } |
| Bash | if [ $x -eq 5 ]; then ... fi |
| Python | if x == 5: |

**Pseudocode exercise:**

Write pseudocode for: "Check if user account is locked, if so unlock it and log the action"

```
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________
_________________________________________________
```

---

### Activity D: Security Automation Scenarios

**Goal:** Design automation for security tasks.

**Scenario 1: User Offboarding**

When employee leaves, automate:

| Step | Action | System |
|------|--------|--------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

**Scenario 2: Failed Login Response**

Automate response to multiple failed logins:

| Trigger | Condition | Action |
|---------|-----------|--------|
| | | |
| | | |
| | | |

**Scenario 3: Vulnerability Remediation**

Automate patch deployment workflow:

| Step | Action | Safeguard |
|------|--------|-----------|
| 1 | Scan for vulnerabilities | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

---

### Activity E: Guard Rails and Safety

**Goal:** Implement safe automation practices.

**What are guard rails?**

_________________________________________________________________

**Guard rail types:**

| Type | Description | Example |
|------|-------------|---------|
| Approval gates | | |
| Rate limiting | | |
| Scope restrictions | | |
| Rollback capability | | |
| Logging/audit | | |
| Testing requirements | | |

**Dangerous automation without guard rails:**

| Automation | Risk Without Guard Rails |
|------------|-------------------------|
| Auto-block IPs | |
| Auto-disable accounts | |
| Auto-quarantine systems | |
| Auto-deploy patches | |
| Auto-delete files | |

**Guard rail implementation:**

| Risk | Guard Rail Solution |
|------|---------------------|
| Block legitimate users | |
| Disable critical accounts | |
| Quarantine production server | |
| Bad patch breaks systems | |
| Delete important data | |

---

### Activity F: SOAR Concepts

**Goal:** Understand security orchestration.

**SOAR components:**

| Component | Function | Example |
|-----------|----------|---------|
| Security | | |
| Orchestration | | |
| Automation | | |
| Response | | |

**SOAR vs Scripts:**

| Aspect | Scripts | SOAR Platform |
|--------|---------|---------------|
| Complexity | | |
| Integration | | |
| Visualization | | |
| Collaboration | | |
| Audit trail | | |
| Maintenance | | |

**Playbook components:**

| Component | Purpose |
|-----------|---------|
| Trigger | |
| Conditions | |
| Actions | |
| Decisions | |
| Notifications | |
| Documentation | |

**Design a playbook: Phishing Response**

| Step | Action | Automated/Manual |
|------|--------|------------------|
| 1 | Alert received | Automated |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |

---

### Activity G: API Security

**Goal:** Understand API integration security.

**API authentication methods:**

| Method | Description | Security Level |
|--------|-------------|----------------|
| API key | | |
| Basic auth | | |
| OAuth 2.0 | | |
| JWT | | |
| Certificate | | |

**API security best practices:**

| Practice | Why Important |
|----------|---------------|
| Use HTTPS | |
| Rotate keys | |
| Limit permissions | |
| Rate limiting | |
| Input validation | |
| Logging | |

**API key management:**

| Do | Don't |
|----|-------|
| | |
| | |
| | |
| | |

**Environment variables for secrets:**

Why use environment variables instead of hardcoding?

_________________________________________________________________

| Language | Access Env Variable |
|----------|---------------------|
| PowerShell | $env:API_KEY |
| Bash | $API_KEY |
| Python | os.environ['API_KEY'] |

---

### Activity H: Infrastructure as Code (IaC)

**Goal:** Understand automated infrastructure.

**IaC benefits:**

| Benefit | Description |
|---------|-------------|
| Version control | |
| Consistency | |
| Documentation | |
| Repeatability | |
| Disaster recovery | |

**IaC tools:**

| Tool | Platform | Language |
|------|----------|----------|
| Terraform | | |
| Ansible | | |
| CloudFormation | | |
| Puppet | | |
| Chef | | |

**IaC security considerations:**

| Consideration | Best Practice |
|---------------|---------------|
| Secrets in code | |
| Code review | |
| Testing | |
| Access control | |
| Drift detection | |

**Configuration drift:**

What is configuration drift?

_________________________________________________________________

Why is it a security concern?

_________________________________________________________________

---

### Activity I: Continuous Integration/Deployment (CI/CD)

**Goal:** Understand DevSecOps automation.

**CI/CD pipeline stages:**

| Stage | Activities | Security Check |
|-------|------------|----------------|
| Code | | |
| Build | | |
| Test | | |
| Deploy (staging) | | |
| Deploy (production) | | |

**Security in CI/CD:**

| Integration Point | Security Tool/Check |
|-------------------|---------------------|
| Pre-commit | |
| Build | |
| Test | |
| Pre-deploy | |
| Post-deploy | |

**DevSecOps practices:**

| Practice | Description |
|----------|-------------|
| Shift left | |
| Automated testing | |
| Security gates | |
| Continuous monitoring | |

---

### Activity J: Automation Testing

**Goal:** Test automation safely.

**Testing environments:**

| Environment | Purpose | Data |
|-------------|---------|------|
| Development | | |
| Testing | | |
| Staging | | |
| Production | | |

**Testing checklist:**

| Test Type | What to Verify |
|-----------|----------------|
| Syntax | |
| Logic | |
| Error handling | |
| Edge cases | |
| Performance | |
| Security | |
| Rollback | |

**Safe testing practices:**

| Practice | Why Important |
|----------|---------------|
| Use test data | |
| Isolated environment | |
| Incremental testing | |
| Peer review | |
| Document results | |

**Rollback planning:**

| Question | Answer |
|----------|--------|
| What could go wrong? | |
| How to detect failure? | |
| How to rollback? | |
| Who approves rollback? | |
| Communication plan? | |

---

### Activity K: Common Automation Tasks

**Goal:** Identify automatable security tasks.

**User lifecycle automation:**

| Event | Automated Actions |
|-------|-------------------|
| New hire | |
| Role change | |
| Termination | |
| Leave of absence | |

**Security monitoring automation:**

| Trigger | Automated Response |
|---------|-------------------|
| High CPU on server | |
| Failed logins > 5 | |
| Malware detected | |
| Certificate expiring | |
| Unusual network traffic | |

**Compliance automation:**

| Task | Automation Approach |
|------|---------------------|
| Access review | |
| Policy compliance check | |
| Vulnerability reporting | |
| Audit evidence collection | |

---

### Activity L: Automation Documentation

**Goal:** Document automation properly.

**Script documentation elements:**

| Element | Purpose |
|---------|---------|
| Purpose/description | |
| Author/date | |
| Parameters | |
| Dependencies | |
| Examples | |
| Error handling | |
| Change history | |

**Documentation template:**

```
#############################################
# Script Name: 
# Purpose: 
# Author: 
# Date: 
# Version: 
# 
# Parameters:
#   - 
#   - 
#
# Dependencies:
#   - 
#
# Usage:
#   
#
# Change History:
#   v1.0 - Initial version
#############################################
```

**Runbook documentation:**

| Section | Content |
|---------|---------|
| Overview | |
| Prerequisites | |
| Steps | |
| Verification | |
| Troubleshooting | |
| Rollback | |
| Contacts | |

---

### Tier 2 Bonus: Basic Security Scripts

> ⚠️ **Requires:** Command line access

---

### Activity M: PowerShell Security Tasks

**List local users:**

```powershell
Get-LocalUser | Select-Object Name, Enabled, LastLogon
```

| User | Enabled | Last Logon |
|------|---------|------------|
| | | |
| | | |
| | | |

**Check for disabled accounts:**

```powershell
Get-LocalUser | Where-Object {$_.Enabled -eq $false}
```

Disabled accounts found: _______________

**List running services:**

```powershell
Get-Service | Where-Object {$_.Status -eq 'Running'} | Select-Object Name, DisplayName | Sort-Object Name
```

Count of running services: _______________

**Check Windows Firewall status:**

```powershell
Get-NetFirewallProfile | Select-Object Name, Enabled
```

| Profile | Enabled |
|---------|---------|
| Domain | |
| Private | |
| Public | |

---

### Activity N: Bash Security Tasks

> For Linux/Mac users or WSL

**List users with login shell:**

```bash
cat /etc/passwd | grep -v nologin | grep -v false
```

**Check listening ports:**

```bash
netstat -tuln 2>/dev/null || ss -tuln
```

| Port | Service |
|------|---------|
| | |
| | |
| | |

**Find files modified in last 24 hours:**

```bash
find /home -mtime -1 -type f 2>/dev/null | head -10
```

Recently modified files: _______________

**Check for world-writable files:**

```bash
find /tmp -perm -002 -type f 2>/dev/null | head -5
```

Why are world-writable files a security concern?

_________________________________________________________________

---

### Activity O: Simple Automation Script

**Create a basic security check script:**

PowerShell example:
```powershell
# Security Quick Check Script
Write-Host "=== Security Quick Check ===" -ForegroundColor Cyan

# Check 1: Firewall Status
Write-Host "`n[Firewall Status]"
Get-NetFirewallProfile | Select-Object Name, Enabled

# Check 2: Local Admins
Write-Host "`n[Local Administrators]"
Get-LocalGroupMember -Group "Administrators" | Select-Object Name

# Check 3: Recent Failed Logins
Write-Host "`n[Recent Failed Logins]"
Get-WinEvent -FilterHashtable @{LogName='Security';ID=4625} -MaxEvents 5 -ErrorAction SilentlyContinue | Select-Object TimeCreated, Message

Write-Host "`n=== Check Complete ===" -ForegroundColor Green
```

What additional checks would you add?

| Check | Purpose |
|-------|---------|
| | |
| | |
| | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your automated script accidentally disabled 500 user accounts because of a bug in the logic. How do you prevent this in the future, and what guard rails should have been in place?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Management wants to automate the blocking of any IP address that triggers an IDS alert. What concerns do you raise, and what safeguards do you recommend?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A junior analyst wrote a script that hardcodes the admin password to connect to systems. How do you address this, and what's the proper way to handle credentials in scripts?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain benefits of security automation
- [ ] Identify good candidates for automation
- [ ] Understand basic scripting concepts
- [ ] Describe guard rails and safety measures
- [ ] Explain SOAR components
- [ ] Understand API security for automation
- [ ] Describe Infrastructure as Code
- [ ] Explain CI/CD security integration
- [ ] Document automation properly
- [ ] Test automation safely

---

## What You Learned Today

- ✅ Evaluated automation benefits
- ✅ Compared scripting languages
- ✅ Understood scripting concepts
- ✅ Designed security automation
- ✅ Implemented guard rails
- ✅ Explored SOAR concepts
- ✅ Secured API integrations
- ✅ Understood IaC security
- ✅ Integrated security in CI/CD
- ✅ Tested automation safely
- ✅ Identified common automation tasks
- ✅ Documented automation
- ✅ (Tier 2) Ran security scripts

**Next Lab:** Data Protection and Privacy - classification, encryption, and data lifecycle.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 27: Security Automation and Scripting*