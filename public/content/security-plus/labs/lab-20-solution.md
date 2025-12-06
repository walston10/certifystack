# Lab 20: Access Control Models - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Access control is fundamental to security architecture.

---

## Section 1: Concept Check - Answers

**1. DAC vs MAC:**

**Answer:**

| Aspect | DAC | MAC |
|--------|-----|-----|
| **Full name** | Discretionary Access Control | Mandatory Access Control |
| **Who controls** | Resource owner | System/policy |
| **Flexibility** | High (owner decides) | Low (system enforces) |
| **Example** | NTFS file permissions | Military classifications |

**DAC:** Owner decides who gets access
**MAC:** System enforces access based on labels/classifications

---

**2. RBAC explanation:**

**Answer:**

**RBAC (Role-Based Access Control)** assigns permissions to roles, then assigns users to roles.

**Why popular in enterprises:**
- Simplified administration (manage roles, not individuals)
- Aligns with job functions
- Easier auditing
- Supports least privilege
- Scales well (add user to role vs. setting individual permissions)

---

**3. ABAC vs RBAC:**

**Answer:**

**ABAC (Attribute-Based Access Control)** makes access decisions based on attributes of subject, object, and environment.

**Use over RBAC when:**
- Need dynamic, context-aware decisions
- Access depends on time, location, or conditions
- Fine-grained control beyond roles needed
- Roles would result in "role explosion"

---

**4. Implicit deny:**

**Answer:**

**Implicit deny:** If no rule explicitly allows access, access is denied by default.

**Security best practice because:**
- Fail-secure principle
- Unknown or forgotten resources are protected
- Forces explicit permission grants
- Reduces accidental exposure

---

**5. Least privilege:**

**Answer:**

**Least privilege:** Users receive only the minimum permissions needed to perform their job.

**Risk reduction:**
- Limits damage from compromised accounts
- Reduces insider threat impact
- Contains lateral movement
- Minimizes accidental data exposure

---

## Section 2: Activity Solutions

### Activity A: Model Comparison - Answers

| Model | Full Name | Control Basis | Who Decides |
|-------|-----------|---------------|-------------|
| DAC | Discretionary Access Control | Owner discretion | Resource owner |
| MAC | Mandatory Access Control | Labels/classifications | System/policy |
| RBAC | Role-Based Access Control | Job roles | Administrator |
| ABAC | Attribute-Based Access Control | Attributes/conditions | Policy engine |

**Detailed comparison:**

| Aspect | DAC | MAC | RBAC | ABAC |
|--------|-----|-----|------|------|
| Flexibility | High | Low | Medium | High |
| Scalability | Low | Medium | High | High |
| Complexity | Low | High | Medium | High |
| Security | Lower | Highest | High | High |
| Use case | Small/personal | Military/gov | Enterprise | Dynamic/context |

**Scenario matching:**

| Scenario | Model | Why |
|----------|-------|-----|
| Military documents | MAC | Classification labels required |
| Small business files | DAC | Owner control, simple |
| Hospital 5,000 employees | RBAC | Role-based (Doctor, Nurse, etc.) |
| Time/location based | ABAC | Dynamic attributes |
| User shares with coworkers | DAC | Owner discretion |
| "All managers can approve" | RBAC | Role-based permission |
| "Building A during hours" | ABAC | Location + time attributes |

---

### Activity B: DAC - Answers

| Characteristic | Description |
|----------------|-------------|
| Owner control | Resource owner sets permissions |
| Flexibility | Can share freely |
| Delegation | Owner can grant others permission to share |
| Implementation | NTFS, Unix permissions, ACLs |

**Strengths and weaknesses:**

| Strengths | Weaknesses |
|-----------|------------|
| Flexible | Difficult to manage at scale |
| User-friendly | Security depends on owners |
| No central admin needed | Trojan horse vulnerability |
| Simple to understand | No enforced policy |

**Trojan horse vulnerability:** Bob can share Alice's file with Charlie, violating Alice's intent. Data can propagate beyond owner's control.

---

### Activity C: MAC - Answers

| Level | Description | Example |
|-------|-------------|---------|
| Unclassified | Public information | Press releases |
| Confidential | Minor damage if disclosed | Internal memos |
| Secret | Serious damage | Military plans |
| Top Secret | Grave damage | Nuclear codes |

**MAC rules:**

| Rule | Description |
|------|-------------|
| No read up | Can't read above your clearance |
| No write down | Can't write to lower classification |

**SECRET user, TOP SECRET document:**

| Action | Allowed? | Why |
|--------|----------|-----|
| Read | No | No read up (above clearance) |
| Write | Yes | Can write up (or same level) |

**TOP SECRET user, SECRET document:**

| Action | Allowed? | Why |
|--------|----------|-----|
| Read | Yes | Can read down |
| Write | No | No write down (prevents leakage) |

**Bell-LaPadula (Confidentiality):**

| Rule | Name | Purpose |
|------|------|---------|
| No read up | Simple Security Property | Protect confidentiality |
| No write down | *-Property (Star) | Prevent leakage |

**Biba (Integrity):**

| Rule | Name | Purpose |
|------|------|---------|
| No read down | Simple Integrity | Prevent contamination |
| No write up | Integrity *-Property | Protect high integrity |

---

### Activity D: RBAC - Answers

| Concept | Definition |
|---------|------------|
| Role | Job function or responsibility |
| Permission | Allowed action on resource |
| User-role assignment | Linking users to roles |
| Role-permission assignment | Linking roles to permissions |
| Role hierarchy | Roles inherit from parent roles |

**Hospital example:**

| Role | Permissions |
|------|-------------|
| Doctor | View/modify patient records, order tests, prescribe |
| Nurse | View patient records, administer medications, update vitals |
| Receptionist | Schedule appointments, view contact info |
| Administrator | Manage users, system settings |
| Billing | View financial records, process claims |

**RBAC benefits:**

| Benefit | Explanation |
|---------|-------------|
| Simplified admin | Add user to role, not individual permissions |
| Separation of duties | Different roles for different functions |
| Least privilege | Role grants only needed permissions |
| Audit | Know who has what access by role |
| Scalability | Manage roles not individuals |

**Role explosion challenge:** Create exception roles sparingly, use ABAC for edge cases, or implement role hierarchies.

---

### Activity E: ABAC - Answers

| Component | Description | Examples |
|-----------|-------------|----------|
| Subject attributes | User properties | Department, clearance, role |
| Object attributes | Resource properties | Classification, owner, type |
| Environment | Context | Time, location, device |
| Action | Operation requested | Read, write, delete |

**Policy writing:**

**Scenario 1:**
```
IF subject.department = "Finance"
AND environment.time >= 09:00
AND environment.time <= 17:00
THEN allow read financial_reports
```

**Scenario 2:**
```
IF subject.clearance >= object.classification
THEN allow read
```

**Scenario 3:**
```
IF subject.type = "Contractor"
AND environment.location IN approved_locations
AND environment.date <= subject.contract_end
THEN allow access
```

**ABAC vs RBAC:**

| Aspect | RBAC | ABAC |
|--------|------|------|
| Basis | Role membership | Attribute evaluation |
| Granularity | Role-level | Fine-grained |
| Flexibility | Medium | High |
| Complexity | Medium | High |
| Dynamic | No | Yes |
| Best for | Stable roles | Context-aware |

---

### Activity F: Rule-Based - Answers

| Characteristic | Description |
|----------------|-------------|
| Predetermined rules | Set in advance, automatically applied |
| Automatic enforcement | No user discretion |
| No user discretion | System applies rules consistently |
| Examples | Firewalls, time-based access |

**Rule-based vs ABAC:** Rule-based uses simple if-then conditions; ABAC uses complex attribute evaluation with policy engine. ABAC is more sophisticated and dynamic.

---

### Activity G: Permissions - Answers

| Type | Definition | Example |
|------|------------|---------|
| Explicit allow | Permission directly granted | "Allow Read" on file |
| Explicit deny | Permission directly denied | "Deny Write" on folder |
| Implicit deny | No permission = denied | Default state |

**Permission inheritance:**

| Folder | Access | Why |
|--------|--------|-----|
| /Sales | Read | Inherits from /Company |
| /Sales/Reports | Read | Inherits through hierarchy |
| /Engineering | Read | Inherits from /Company |

**Precedence:**

| Scenario | Result | Rule |
|----------|--------|------|
| Allow + Deny | Deny | Explicit deny wins |
| Allow + Implicit Deny | Allow | Explicit wins over implicit |
| No permission | Deny | Implicit deny |

---

### Activity H: Account Types - Answers

| Type | Purpose | Risk | Controls |
|------|---------|------|----------|
| Standard | Normal operations | Low | Basic MFA |
| Administrator | System management | High | Strong MFA, PAM |
| Guest | Temporary access | Medium | Limited, monitored |
| Service | Application use | High | No interactive, managed |
| Shared | Multiple users | High | Avoid if possible |
| Privileged | Elevated access | Critical | PAM, monitoring |

**Shared account problems:**

| Issue | Explanation |
|-------|-------------|
| Accountability | Can't identify who did what |
| Password management | Change affects everyone |
| Audit trail | No individual tracking |
| Separation | Can't separate duties |

---

### Activity I: Least Privilege - Answers

**Least privilege:** Grant only the minimum access required to perform job functions.

**Examples:**

| Role | Needs | Should NOT Have |
|------|-------|-----------------|
| Receptionist | View calendar, basic contact info | Personnel files, financial data |
| Database admin | Database access | Application source code |

**Preventing privilege creep:**

| Method | Description |
|--------|-------------|
| Regular access reviews | Quarterly verification |
| Role changes trigger review | Reassess on promotion |
| Time-bound access | Expire elevated permissions |

**JIT access:**

| Aspect | Description |
|--------|-------------|
| What | Temporary elevated access when needed |
| How | Request, approve, time-limited grant |
| Benefits | Reduces standing privilege exposure |
| Example | Admin access for 2-hour maintenance window |

---

### Activity J: Separation of Duties - Answers

**Concept:** Critical tasks require multiple people, preventing any single person from having complete control.

**Examples:**

| Process | Role 1 | Role 2 | Why |
|---------|--------|--------|-----|
| Transactions | Requester | Approver | Prevent unauthorized |
| Deployment | Developer | Operations | Prevent rogue code |
| Provisioning | Requestor | Administrator | Verification |
| Audit | Auditor | (independent) | Objectivity |

**Conflict detection:**

| Combination | Conflict? | Why |
|-------------|-----------|-----|
| Dev + Deployer | Yes | Could deploy unauthorized code |
| Auditor + Admin | Yes | Could hide issues |
| HR + Payroll | Yes | Could create fake employees |
| Purchaser + AP | Yes | Could pay fake invoices |

---

### Activity K: Access Review - Answers

**Common findings:**

| Finding | Risk | Action |
|---------|------|--------|
| Orphaned accounts | Unauthorized access | Disable immediately |
| Excessive permissions | Over-privileged | Reduce to minimum |
| Dormant accounts | Compromise target | Disable or remove |
| Terminated with access | Major breach risk | Remove immediately |
| Role creep | Accumulated excess | Reset to current role |

**Review frequency:**

| Type | Frequency | Reason |
|------|-----------|--------|
| Privileged | Monthly | High risk |
| Standard | Quarterly | Balance effort/risk |
| Service | Semi-annually | Stable but verify |
| Contractor | Per contract/monthly | Time-bound |

---

### Activity L: Scenarios - Answers

**Healthcare:**

| Role | Access | Model |
|------|--------|-------|
| Doctor | Patients in care (attribute: treating) | ABAC |
| Nurse | Patients on floor (attribute: floor) | ABAC |
| Billing | Financial only (role permission) | RBAC |
| Researcher | Anonymized (attribute: anonymized=true) | ABAC |

**Financial:**

| Control | Implementation |
|---------|----------------|
| Limits | ABAC (if amount < 10000) |
| Approval | Separation of duties + workflow |
| Self-prevention | ABAC (requester ≠ approver) |
| Auditor | RBAC (read-only role) |

**Software Company:**

| Requirement | Solution |
|-------------|----------|
| Environment separation | RBAC (dev/test roles) |
| DevOps access | Role with broader permissions |
| Separation | Can't deploy own code (ABAC) |
| Contractor time-bound | ABAC with date attribute |

---

### Activity M: Windows Permissions - Answers

**Permission codes:**

| Code | Meaning |
|------|---------|
| F | Full control |
| M | Modify |
| RX | Read and execute |
| R | Read |
| W | Write |

**Windows uses DAC** - owners control permissions via ACLs.

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: 50 to 500 employees**

**Recommendation:** Implement RBAC

**Implementation:**
1. Identify job roles
2. Define permissions per role
3. Assign users to roles
4. Create role hierarchy where appropriate
5. Implement access review process
6. Migrate from individual to role-based permissions

---

**Scenario 2: Contractor with conditions**

**Best model:** ABAC

**Reasoning:**
- Time-based (business hours)
- Location-based (office network)
- Time-limited (2-week contract)
- RBAC alone can't handle these dynamic conditions

---

**Scenario 3: Former employee access after 6 months**

**Failed processes:**
- No immediate deprovisioning on termination
- No access review caught it
- HR-IT integration missing
- No automated account lifecycle

**Prevention:**
- Automated provisioning/deprovisioning tied to HR
- Immediate disable on termination
- Regular access reviews
- Orphaned account detection
- Manager certification of direct reports

---

## Key Exam Tips

1. **DAC:** Owner controls, flexible, NTFS
   **MAC:** System enforces, labels, military

2. **RBAC:** Role-based, enterprise standard, scalable

3. **ABAC:** Attributes, dynamic, context-aware

4. **Bell-LaPadula:** Confidentiality (no read up, no write down)
   **Biba:** Integrity (no read down, no write up)

5. **Implicit deny:** No permission = denied

6. **Least privilege:** Minimum access needed

7. **Separation of duties:** Critical tasks need multiple people

8. **Privilege creep:** Accumulated permissions over time

9. **JIT access:** Temporary elevated access

10. **Access reviews:** Regular verification of permissions

---

## Common Mistakes to Avoid

❌ Confusing MAC labels with RBAC roles

❌ Thinking DAC is more secure than MAC (it's not)

❌ Forgetting implicit deny is default

❌ Confusing Bell-LaPadula (confidentiality) with Biba (integrity)

❌ Using RBAC when ABAC is needed for dynamic conditions

❌ Thinking separation of duties is optional

---

**Congratulations on completing Lab 20!**

Access control models are heavily tested—understand when to use each model.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 20: Access Control Models - Solution Guide*