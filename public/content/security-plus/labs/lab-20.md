# Lab 20: Access Control Models

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 3.3 - Compare and contrast concepts and strategies to protect data

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the difference between DAC and MAC? Who controls access in each model?**

2. **Explain Role-Based Access Control (RBAC). Why is it popular in enterprises?**

3. **What is Attribute-Based Access Control (ABAC), and when would you use it over RBAC?**

4. **What does "implicit deny" mean, and why is it a security best practice?**

5. **Explain the principle of least privilege. How does it reduce risk?**

---

## Section 2: Hands-On Activities

### Activity A: Access Control Model Comparison

**Goal:** Understand the four main access control models.

**Model overview:**

| Model | Full Name | Control Basis | Who Decides |
|-------|-----------|---------------|-------------|
| DAC | | | |
| MAC | | | |
| RBAC | | | |
| ABAC | | | |

**Detailed comparison:**

| Aspect | DAC | MAC | RBAC | ABAC |
|--------|-----|-----|------|------|
| Flexibility | | | | |
| Scalability | | | | |
| Complexity | | | | |
| Security level | | | | |
| Common use case | | | | |

**Match the scenario to the model:**

| Scenario | Best Model | Why |
|----------|------------|-----|
| Military classified documents | | |
| Small business file sharing | | |
| Hospital with 5,000 employees | | |
| Access based on time of day and location | | |
| User shares files with coworkers | | |
| "All managers can approve expenses" | | |
| "Only users in Building A during business hours" | | |

---

### Activity B: Discretionary Access Control (DAC)

**Goal:** Understand owner-controlled access.

**DAC characteristics:**

| Characteristic | Description |
|----------------|-------------|
| Owner control | |
| Flexibility | |
| Delegation | |
| Common implementation | |

**DAC example - File permissions:**

| User | File | Permission | Who Granted |
|------|------|------------|-------------|
| Alice | report.docx | Full control | Alice (owner) |
| Bob | report.docx | Read | Alice |
| Charlie | report.docx | None | - |

**DAC strengths and weaknesses:**

| Strengths | Weaknesses |
|-----------|------------|
| | |
| | |
| | |

**DAC security concern:**

What happens if Alice shares the file with Bob, and Bob shares it with Charlie (even though Alice didn't want that)?

_________________________________________________________________

What is this vulnerability called?

_________________________________________________________________

---

### Activity C: Mandatory Access Control (MAC)

**Goal:** Understand label-based access control.

**MAC characteristics:**

| Characteristic | Description |
|----------------|-------------|
| System-enforced | |
| Labels/classifications | |
| No user discretion | |
| Clearance levels | |

**Classification levels (US Government example):**

| Level | Description | Example |
|-------|-------------|---------|
| Unclassified | | |
| Confidential | | |
| Secret | | |
| Top Secret | | |

**MAC rules:**

| Rule | Description |
|------|-------------|
| No read up | |
| No write down | |

**MAC scenario:**

User clearance: SECRET
Document classification: TOP SECRET

| Action | Allowed? | Why? |
|--------|----------|------|
| User reads document | | |
| User writes to document | | |

User clearance: TOP SECRET
Document classification: SECRET

| Action | Allowed? | Why? |
|--------|----------|------|
| User reads document | | |
| User writes to document | | |

**Bell-LaPadula model:**

| Rule | Formal Name | Purpose |
|------|-------------|---------|
| No read up | | |
| No write down | | |

**Biba model (integrity focus):**

| Rule | Formal Name | Purpose |
|------|-------------|---------|
| No read down | | |
| No write up | | |

---

### Activity D: Role-Based Access Control (RBAC)

**Goal:** Understand role-based permissions.

**RBAC concepts:**

| Concept | Definition |
|---------|------------|
| Role | |
| Permission | |
| User-role assignment | |
| Role-permission assignment | |
| Role hierarchy | |

**RBAC example - Hospital:**

**Roles:**

| Role | Members | Permissions |
|------|---------|-------------|
| Doctor | | |
| Nurse | | |
| Receptionist | | |
| Administrator | | |
| Billing | | |

**Design RBAC for a company:**

Departments: Sales, Engineering, HR, Finance

| Role | Permissions |
|------|-------------|
| Sales Rep | |
| Sales Manager | |
| Engineer | |
| Engineering Lead | |
| HR Specialist | |
| HR Manager | |
| Accountant | |
| CFO | |

**RBAC benefits:**

| Benefit | Explanation |
|---------|-------------|
| Simplified administration | |
| Separation of duties | |
| Least privilege | |
| Audit capability | |
| Scalability | |

**RBAC challenge:**

What happens when someone needs access that doesn't fit any existing role?

_________________________________________________________________

How do you handle this without creating "role explosion"?

_________________________________________________________________

---

### Activity E: Attribute-Based Access Control (ABAC)

**Goal:** Understand policy-based dynamic access.

**ABAC components:**

| Component | Description | Examples |
|-----------|-------------|----------|
| Subject attributes | | |
| Object attributes | | |
| Environment attributes | | |
| Action | | |

**ABAC policy examples:**

| Policy Statement | Subject Attr | Object Attr | Environment | Action |
|------------------|--------------|-------------|-------------|--------|
| "Managers can approve expenses under $5000" | | | | |
| "HR can view employee records in their department" | | | | |
| "Users can access files during business hours from office" | | | | |
| "Doctors can view patient records they're treating" | | | | |

**Write ABAC policies for:**

**Scenario 1:** Only employees in the Finance department can access financial reports, and only during business hours (9 AM - 5 PM)

```
IF subject.department = __________ 
AND environment.time >= __________
AND environment.time <= __________
THEN allow __________
```

**Scenario 2:** Users can only access files with classification equal to or below their clearance level

```
IF subject.clearance >= __________
THEN allow __________
```

**Scenario 3:** Contractors can only access systems from approved locations and only for the duration of their contract

```
IF subject.type = __________
AND environment.location IN __________
AND environment.date <= __________
THEN allow __________
```

**ABAC vs RBAC:**

| Aspect | RBAC | ABAC |
|--------|------|------|
| Basis for decision | | |
| Granularity | | |
| Flexibility | | |
| Complexity | | |
| Dynamic decisions | | |
| Best for | | |

---

### Activity F: Rule-Based Access Control

**Goal:** Understand condition-based access rules.

**Rule-based characteristics:**

| Characteristic | Description |
|----------------|-------------|
| Predetermined rules | |
| Automatic enforcement | |
| No user discretion | |
| Common examples | |

**Firewall rules as rule-based access:**

| Rule | Source | Destination | Port | Action |
|------|--------|-------------|------|--------|
| 1 | 10.0.0.0/24 | Any | 80 | Allow |
| 2 | Any | 10.0.1.5 | 22 | Deny |
| 3 | Any | Any | Any | Deny |

**Time-based rules:**

| Rule | Condition | Access |
|------|-----------|--------|
| 1 | Business hours (9-5) | Full access |
| 2 | After hours | Read only |
| 3 | Weekends | No access |

**Rule-based vs ABAC:**

How are they different?

_________________________________________________________________

---

### Activity G: Permission Concepts

**Goal:** Understand how permissions work.

**Permission types:**

| Permission | Description | Example |
|------------|-------------|---------|
| Read | | |
| Write | | |
| Execute | | |
| Delete | | |
| Modify | | |
| Full control | | |

**Explicit vs Implicit permissions:**

| Type | Definition | Example |
|------|------------|---------|
| Explicit allow | | |
| Explicit deny | | |
| Implicit deny | | |

**Permission inheritance:**

Folder structure:
```
/Company
├── /Sales
│   ├── /Reports
│   └── /Contracts
└── /Engineering
    └── /Projects
```

If user has Read on /Company, what access do they have to:

| Folder | Access | Why |
|--------|--------|-----|
| /Sales | | |
| /Sales/Reports | | |
| /Engineering | | |

**Permission precedence:**

| Scenario | Result | Rule |
|----------|--------|------|
| Explicit Allow + Explicit Deny | | |
| Explicit Allow + Implicit Deny | | |
| No permission specified | | |

---

### Activity H: Account Types and Policies

**Goal:** Understand different account types.

**Account types:**

| Type | Purpose | Risk Level | Controls |
|------|---------|------------|----------|
| Standard user | | | |
| Administrator | | | |
| Guest | | | |
| Service account | | | |
| Shared account | | | |
| Privileged account | | | |

**Why are shared accounts problematic?**

| Issue | Explanation |
|-------|-------------|
| Accountability | |
| Password management | |
| Audit trail | |
| Separation of duties | |

**Service account best practices:**

| Practice | Reason |
|----------|--------|
| Unique per service | |
| Minimal privileges | |
| No interactive login | |
| Managed passwords | |
| Monitor activity | |

**Account policy elements:**

| Policy | Purpose | Recommended Setting |
|--------|---------|---------------------|
| Password length | | |
| Password complexity | | |
| Password history | | |
| Account lockout | | |
| Session timeout | | |
| Logon hours | | |
| Logon workstations | | |

---

### Activity I: Least Privilege Implementation

**Goal:** Apply least privilege principle.

**Least privilege definition:**

_________________________________________________________________

**Least privilege examples:**

| Role | Needs | Should NOT Have |
|------|-------|-----------------|
| Help desk | Reset passwords | Create admin accounts |
| Developer | Access dev environment | Access production |
| Accountant | View financial records | Modify audit logs |
| Receptionist | | |
| Database admin | | |

**Privilege creep scenario:**

Employee started as intern, became full-time, promoted to team lead, then manager over 5 years.

| Problem | Description |
|---------|-------------|
| Privilege creep | |
| Accumulated permissions | |
| No longer needed access | |

**How to prevent privilege creep:**

| Method | Description |
|--------|-------------|
| | |
| | |
| | |

**Just-in-Time (JIT) access:**

| Aspect | Description |
|--------|-------------|
| What is it | |
| How it works | |
| Benefits | |
| Example | |

---

### Activity J: Separation of Duties

**Goal:** Implement separation of duties.

**Separation of duties concept:**

_________________________________________________________________

**Classic examples:**

| Process | Role 1 | Role 2 | Why Separate |
|---------|--------|--------|--------------|
| Financial transactions | | | |
| Software deployment | | | |
| Access provisioning | | | |
| Audit | | | |

**Two-person integrity (dual control):**

| Scenario | Person 1 | Person 2 |
|----------|----------|----------|
| Nuclear launch | | |
| Bank vault | | |
| Certificate authority | | |
| Emergency access | | |

**Conflict of interest detection:**

| Role Combination | Conflict? | Why |
|------------------|-----------|-----|
| Developer + Production deployer | | |
| Auditor + System admin | | |
| HR + Payroll | | |
| Purchaser + Accounts payable | | |

---

### Activity K: Access Review and Certification

**Goal:** Understand ongoing access management.

**Access review types:**

| Type | Frequency | Scope |
|------|-----------|-------|
| User access review | | |
| Privileged access review | | |
| Service account review | | |
| Role review | | |

**Access certification process:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

**Common access review findings:**

| Finding | Risk | Action |
|---------|------|--------|
| Orphaned accounts | | |
| Excessive permissions | | |
| Dormant accounts | | |
| Terminated employees with access | | |
| Role creep | | |

**How often should reviews occur?**

| Account Type | Review Frequency | Reason |
|--------------|------------------|--------|
| Privileged | | |
| Standard | | |
| Service | | |
| Contractor | | |

---

### Activity L: Access Control Scenarios

**Goal:** Apply access control concepts to real scenarios.

**Scenario 1: Healthcare System**

Requirements:
- Doctors can only see patients they're treating
- Nurses can see patients on their floor
- Billing can see financial data but not medical records
- Researchers can see anonymized data only

Design access control:

| Role | Access | Model Used |
|------|--------|------------|
| Doctor | | |
| Nurse | | |
| Billing | | |
| Researcher | | |

**Scenario 2: Financial Institution**

Requirements:
- Tellers can process transactions under $10,000
- Managers must approve transactions over $10,000
- No one can process their own transactions
- Auditors can view but not modify

Design access control:

| Control | Implementation |
|---------|----------------|
| Transaction limits | |
| Approval workflow | |
| Self-transaction prevention | |
| Auditor access | |

**Scenario 3: Software Company**

Requirements:
- Developers access dev/test only
- DevOps accesses all environments
- No one deploys their own code to production
- Contractors only access during contract period

| Requirement | Solution |
|-------------|----------|
| Environment separation | |
| DevOps elevated access | |
| Separation of duties | |
| Contractor time-bound | |

---

### Tier 2 Bonus: Windows Permissions Analysis

> ⚠️ **Requires:** Command line access

---

### Activity M: View File Permissions

**Check permissions on a folder:**

```cmd
icacls C:\Users
```

| Principal | Permissions |
|-----------|-------------|
| | |
| | |
| | |

**Permission notation:**

| Code | Meaning |
|------|---------|
| F | |
| M | |
| RX | |
| R | |
| W | |

**Check your user's group memberships:**

```cmd
whoami /groups
```

List 5 groups you belong to:

| Group | Purpose |
|-------|---------|
| | |
| | |
| | |
| | |
| | |

**View effective permissions:**

PowerShell:
```powershell
Get-Acl C:\Users\Public | Format-List
```

What access control model does Windows NTFS use?

_________________________________________________________________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company has grown from 50 to 500 employees. The current approach of setting individual file permissions is becoming unmanageable. What access control model do you recommend, and how would you implement it?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A contractor needs temporary access to a production system for a 2-week project. They should only be able to access the system during business hours from the office network. Which access control model best fits this requirement?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** An audit reveals that a former employee still has active access to critical systems 6 months after leaving. What access control processes failed, and how do you prevent this?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Compare DAC, MAC, RBAC, and ABAC models
- [ ] Explain who controls access in each model
- [ ] Describe Bell-LaPadula (confidentiality) and Biba (integrity) models
- [ ] Design RBAC for an organization
- [ ] Write ABAC policy statements
- [ ] Explain implicit deny vs explicit allow/deny
- [ ] Describe permission inheritance
- [ ] Apply least privilege principle
- [ ] Implement separation of duties
- [ ] Conduct access reviews

---

## What You Learned Today

- ✅ Compared access control models
- ✅ Analyzed DAC characteristics
- ✅ Understood MAC and security labels
- ✅ Designed RBAC implementations
- ✅ Created ABAC policies
- ✅ Explored rule-based access
- ✅ Understood permission concepts
- ✅ Reviewed account types
- ✅ Applied least privilege
- ✅ Implemented separation of duties
- ✅ Conducted access reviews
- ✅ Solved access control scenarios
- ✅ (Tier 2) Analyzed Windows permissions

**Next Lab:** Resilience and Recovery - backup, disaster recovery, and high availability.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 20: Access Control Models*