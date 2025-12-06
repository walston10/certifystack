# Lab 27: Security Automation and Scripting - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Automation is essential for scaling security operations.

---

## Section 1: Concept Check - Answers

**1. Three benefits of automating security tasks:**

**Answer:**
1. **Speed** - Respond to threats in seconds vs hours
2. **Consistency** - Same response every time, no human variation
3. **Scale** - Handle thousands of events that humans cannot

Other benefits: 24/7 operation, reduced human error, documentation/audit trail, cost savings.

---

**2. Script vs Program:**

**Answer:**

| Aspect | Script | Program |
|--------|--------|---------|
| **Complexity** | Simple, single-purpose | Complex, multi-function |
| **Compilation** | Interpreted at runtime | Usually compiled |
| **Development** | Quick to write | Longer development |
| **Use** | Automation, admin tasks | Full applications |

---

**3. Guard rails:**

**Answer:**

**Guard rails** are safety mechanisms that prevent automation from causing unintended harm.

**Important because:**
- Automation can cause damage at machine speed
- Bugs can affect thousands of systems instantly
- Prevent blocking legitimate users
- Stop runaway processes
- Allow human oversight for critical decisions

---

**4. Three tasks good for automation:**

**Answer:**
1. User account provisioning/deprovisioning
2. Log analysis and alerting
3. Vulnerability scanning and reporting
4. Patch deployment
5. Certificate renewal
6. Backup verification
7. Compliance checks

---

**5. Automation risks:**

**Answer:**
- Bugs can cause widespread damage quickly
- False positives trigger wrong responses
- Credential exposure in scripts
- Lack of human judgment for edge cases
- Over-reliance on automation
- Difficult to maintain/update
- Security of automation infrastructure itself

---

## Section 2: Activity Solutions

### Activity A: Automation Benefits - Answers

| Benefit | Description | Example |
|---------|-------------|---------|
| Speed | Instant response | Block attacker in seconds |
| Consistency | Same every time | Identical user setup |
| Scale | Handle volume | Process 10,000 alerts |
| Accuracy | No human error | Correct permissions every time |
| Documentation | Auto-logged | Audit trail built-in |
| Cost reduction | Less manual work | Fewer analyst hours |
| 24/7 operation | No sleep needed | Night/weekend coverage |

**Good candidates:**

| Task | Why |
|------|-----|
| User provisioning | Repetitive, well-defined |
| Log analysis | High volume, pattern-based |
| Vuln scanning | Scheduled, consistent |
| Patch deployment | Regular, testable |
| Backup verification | Routine, checkable |
| Cert renewal | Time-based, predictable |
| Threat intel | API-driven, continuous |
| Compliance reporting | Periodic, data gathering |

**Poor candidates:**

| Task | Why |
|------|-----|
| Incident investigation | Requires judgment |
| Security architecture | Complex decisions |
| Vendor negotiations | Human interaction |
| Policy creation | Strategic thinking |

---

### Activity B: Scripting Languages - Answers

| Language | Platform | Strengths | Use |
|----------|----------|-----------|-----|
| PowerShell | Windows | Windows admin, AD, Azure | Windows automation |
| Bash | Linux/Mac | System admin, text processing | Linux/Unix automation |
| Python | Cross-platform | Libraries, readability | Security tools, APIs |
| JavaScript | Web/Node | Web automation, APIs | Web security |
| VBScript | Windows | Legacy Windows | Legacy scripts |

**Match task:**

| Task | Language | Why |
|------|----------|-----|
| Windows users | PowerShell | Native AD integration |
| Linux logs | Bash | Built-in text tools |
| Cross-platform tool | Python | Works everywhere |
| Web automation | JavaScript | Browser native |
| Legacy Windows | VBScript | Existing infrastructure |

**Extensions:**

| Extension | Language |
|-----------|----------|
| .ps1 | PowerShell |
| .sh | Bash |
| .py | Python |
| .js | JavaScript |
| .bat/.cmd | Batch |
| .vbs | VBScript |

---

### Activity C: Basic Concepts - Answers

| Concept | Description | Use |
|---------|-------------|-----|
| Variables | Store data | Hold usernames, paths |
| Loops | Repeat actions | Process each user |
| Conditionals | Make decisions | If locked, unlock |
| Functions | Reusable code | Login check function |
| Input/Output | Read/write data | Read file, write log |
| Error handling | Manage failures | Catch exceptions |

**Pseudocode:**

```
GET user_account
IF user_account.is_locked THEN
    UNLOCK user_account
    LOG "Unlocked account: " + user_account.name
    LOG timestamp + " by automation"
    SEND notification to admin
ELSE
    LOG "Account not locked: " + user_account.name
END IF
```

---

### Activity D: Scenarios - Answers

**User Offboarding:**

| Step | Action | System |
|------|--------|--------|
| 1 | Disable AD account | Active Directory |
| 2 | Remove from groups | AD |
| 3 | Revoke VPN access | VPN server |
| 4 | Disable email | Exchange/M365 |
| 5 | Revoke app access | SSO/SAML |
| 6 | Archive mailbox | Email system |

**Failed Login Response:**

| Trigger | Condition | Action |
|---------|-----------|--------|
| 4625 event | 5+ in 5 minutes | Lock account |
| 4625 event | 10+ in 1 minute | Block source IP |
| 4625 event | Any on service account | Alert SOC immediately |

**Vulnerability Remediation:**

| Step | Action | Safeguard |
|------|--------|-----------|
| 1 | Scan | Credentialed scan for accuracy |
| 2 | Prioritize | CVSS + asset criticality |
| 3 | Test patch | Staging environment first |
| 4 | Deploy | Phased rollout |
| 5 | Verify | Rescan to confirm |

---

### Activity E: Guard Rails - Answers

**Guard rails:** Safety mechanisms preventing automation from causing unintended harm.

| Type | Description | Example |
|------|-------------|---------|
| Approval gates | Human approval required | Manager approves terminations |
| Rate limiting | Max actions per time | 10 accounts/hour max |
| Scope restrictions | Limited targets | Only non-admin accounts |
| Rollback | Undo capability | Restore previous state |
| Logging | Track all actions | Full audit trail |
| Testing | Validate before prod | Staging environment |

**Dangerous without guard rails:**

| Automation | Risk |
|------------|------|
| Auto-block IPs | Block legitimate users/CDNs |
| Auto-disable accounts | Lock out executives |
| Auto-quarantine | Isolate production servers |
| Auto-deploy patches | Break critical systems |
| Auto-delete | Destroy important data |

**Solutions:**

| Risk | Guard Rail |
|------|------------|
| Block legitimate | Whitelist, max blocks/hour |
| Disable critical | Exclude list, approval |
| Quarantine prod | Never auto-quarantine critical assets |
| Bad patch | Staged rollout, testing |
| Delete data | No auto-delete, approval required |

---

### Activity F: SOAR - Answers

| Component | Function | Example |
|-----------|----------|---------|
| Security | Security focus | Threat response |
| Orchestration | Coordinate tools | Connect SIEM to firewall |
| Automation | Execute without humans | Auto-block IP |
| Response | Take action | Contain threats |

**SOAR vs Scripts:**

| Aspect | Scripts | SOAR |
|--------|---------|------|
| Complexity | Single task | Multi-tool workflows |
| Integration | Manual coding | Built-in connectors |
| Visualization | None | Workflow designer |
| Collaboration | Difficult | Team features |
| Audit trail | Basic logging | Full history |
| Maintenance | Code updates | GUI updates |

**Phishing playbook:**

| Step | Action | Auto/Manual |
|------|--------|-------------|
| 1 | Alert received | Auto |
| 2 | Extract IOCs (URLs, hashes) | Auto |
| 3 | Check threat intel | Auto |
| 4 | Search for similar emails | Auto |
| 5 | Quarantine emails | Auto |
| 6 | Analyst review | Manual |
| 7 | Block sender/domain | Auto (after approval) |

---

### Activity G: API Security - Answers

| Method | Description | Security |
|--------|-------------|----------|
| API key | Simple token | Low (if exposed) |
| Basic auth | Username:password | Low |
| OAuth 2.0 | Token-based, scoped | High |
| JWT | Signed tokens | High |
| Certificate | Mutual TLS | Highest |

**Best practices:**

| Practice | Why |
|----------|-----|
| Use HTTPS | Encrypt in transit |
| Rotate keys | Limit exposure time |
| Limit permissions | Least privilege |
| Rate limiting | Prevent abuse |
| Input validation | Prevent injection |
| Logging | Audit trail |

**API key management:**

| Do | Don't |
|----|-------|
| Use environment variables | Hardcode in scripts |
| Rotate regularly | Share keys |
| Use secrets manager | Commit to Git |
| Limit scope | Use admin keys everywhere |

**Why environment variables:** Keeps secrets out of code, prevents accidental commits, allows different values per environment.

---

### Activity H: IaC - Answers

| Benefit | Description |
|---------|-------------|
| Version control | Track all changes |
| Consistency | Same config everywhere |
| Documentation | Code IS documentation |
| Repeatability | Rebuild identically |
| Disaster recovery | Recreate infrastructure |

**Tools:**

| Tool | Platform | Language |
|------|----------|----------|
| Terraform | Multi-cloud | HCL |
| Ansible | Multi-platform | YAML |
| CloudFormation | AWS | JSON/YAML |
| Puppet | Multi-platform | Puppet DSL |
| Chef | Multi-platform | Ruby |

**Configuration drift:** When actual configuration differs from defined configuration.

**Security concern:** Undocumented changes may introduce vulnerabilities, compliance violations, or backdoors.

---

### Activity I: CI/CD - Answers

| Stage | Activities | Security |
|-------|------------|----------|
| Code | Write, commit | SAST, secrets scanning |
| Build | Compile, package | Dependency check |
| Test | Unit, integration | DAST, security tests |
| Staging | Deploy to test | Penetration testing |
| Production | Deploy live | Final scan, monitoring |

**DevSecOps:**

| Practice | Description |
|----------|-------------|
| Shift left | Security early in development |
| Automated testing | Security tests in pipeline |
| Security gates | Must pass to proceed |
| Continuous monitoring | Post-deploy scanning |

---

### Activity J: Testing - Answers

| Environment | Purpose | Data |
|-------------|---------|------|
| Development | Write code | Fake data |
| Testing | Verify function | Test data |
| Staging | Pre-production | Sanitized prod data |
| Production | Live | Real data |

**Rollback planning:**

| Question | Answer |
|----------|--------|
| What could go wrong | Service outage, data corruption |
| Detect failure | Monitoring, alerts, health checks |
| Rollback | Restore previous version/config |
| Approval | On-call manager |
| Communication | Status page, Slack |

---

### Activity K: Common Tasks - Answers

**User lifecycle:**

| Event | Actions |
|-------|---------|
| New hire | Create account, assign groups, setup email |
| Role change | Update groups, adjust permissions |
| Termination | Disable, remove access, archive |
| Leave | Disable temporarily, preserve data |

**Monitoring automation:**

| Trigger | Response |
|---------|----------|
| High CPU | Alert, gather diagnostics |
| Failed logins | Lock after threshold, alert |
| Malware | Isolate, alert SOC |
| Cert expiring | Renew, alert if fails |
| Unusual traffic | Alert, capture traffic |

---

### Activity L: Documentation - Answers

| Element | Purpose |
|---------|---------|
| Purpose | What script does |
| Author/date | Accountability |
| Parameters | How to use |
| Dependencies | Required modules |
| Examples | Usage guidance |
| Error handling | What can go wrong |
| History | Track changes |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: 500 accounts disabled**

**Prevention:**
- Test in non-production first
- Rate limiting (max accounts per run)
- Dry-run mode (show what would happen)
- Exclude critical accounts list
- Require approval for bulk changes
- Staged rollout (10, then 100, then all)

**Guard rails needed:**
- Max 50 accounts per execution
- Exclude list for admins/executives
- Alert if count exceeds threshold
- Automatic rollback on error

---

**Scenario 2: Auto-block IDS alerts**

**Concerns:**
- False positives block legitimate traffic
- Attackers could trigger blocks on good IPs
- CDN/cloud IPs might be blocked
- No human judgment on context

**Safeguards:**
- Whitelist for known-good IPs
- Threshold (multiple alerts before block)
- Temporary blocks (auto-expire)
- Alert human for review
- Never block critical infrastructure IPs
- Rate limit blocks per hour

---

**Scenario 3: Hardcoded password**

**Address:**
1. Remove script from production immediately
2. Change the compromised password
3. Review where script was stored (Git history?)
4. Coach analyst on secure practices
5. Implement code review requirements

**Proper credential handling:**
- Environment variables
- Secrets manager (HashiCorp Vault, AWS Secrets Manager)
- Encrypted credential stores
- Service accounts with limited permissions
- Certificate-based authentication
- Never commit credentials to version control

---

## Key Exam Tips

1. **Automation benefits:** Speed, consistency, scale, accuracy

2. **Guard rails:** Safety mechanisms (rate limits, approvals, scope limits)

3. **SOAR:** Security Orchestration, Automation, and Response

4. **Good automation candidates:** Repetitive, high-volume, well-defined tasks

5. **Bad candidates:** Tasks requiring judgment, complex decisions

6. **API security:** Use OAuth/JWT, rotate keys, don't hardcode

7. **IaC:** Infrastructure as Code - version-controlled configurations

8. **Configuration drift:** When actual differs from defined (security risk)

9. **CI/CD security:** Shift left, security gates, automated testing

10. **Credential management:** Environment variables or secrets managers, never hardcode

---

## Common Mistakes to Avoid

❌ Hardcoding credentials in scripts

❌ No testing before production

❌ Automating without guard rails

❌ No rollback capability

❌ Insufficient logging

❌ Overly broad permissions for automation accounts

❌ Not documenting automation

---

**Congratulations on completing Lab 27!**

Security automation is essential for scaling operations—but always implement with proper safeguards.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 27: Security Automation and Scripting - Solution Guide*