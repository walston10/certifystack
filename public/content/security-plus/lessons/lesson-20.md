# Lesson 20: Access Control Models

**Estimated Time:** 25-30 minutes  
**Domain:** 3.0 Security Architecture (18% of exam)  
**Exam Objectives Covered:** 3.3 - Compare and contrast concepts and strategies to protect data

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Compare and contrast access control models (DAC, MAC, RBAC, ABAC, Rule-based)
- Explain how permissions are assigned and enforced in each model
- Identify appropriate use cases for each access control model
- Describe permission concepts including inheritance and effective permissions
- Explain implicit vs. explicit permissions and default deny
- Apply access control principles to real-world scenarios
- Describe physical access control systems and methods

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Access Control Models" (12 min)
- **PowerCert:** "Access Control Explained" (10 min)
- **Cybrary:** "DAC, MAC, RBAC Comparison" (8 min)

---

## Introduction

In 2010, Army Private Chelsea Manning downloaded hundreds of thousands of classified military documents and diplomatic cables, passing them to WikiLeaks. Manning had a Top Secret clearance and legitimate system access. The failure wasn't authentication—Manning was who she claimed to be. The failure was authorization—the access control model allowed anyone with clearance to access far more data than their job required.

Access control answers the question: "Now that I know who you are, what can you do?" Authentication proves identity. Authorization determines permissions. Get authorization wrong, and authenticated users become insider threats.

Different environments need different access control approaches. A military system handling classified data needs strict, centrally-enforced controls where users can't modify permissions. A small business file server might work fine with owners controlling their own files. A cloud application serving millions of users needs flexible, attribute-based decisions.

This lesson covers the major access control models—DAC, MAC, RBAC, ABAC, and rule-based—explaining how each works, their strengths and weaknesses, and when to use them. Understanding these models helps you design authorization systems that balance security with usability.

---

## Discretionary Access Control (DAC)

Owner controls access to their resources.

### How DAC Works

**Core concept:** Resource owner decides who can access.

**Key characteristics:**
- Owner has full control
- Owner grants permissions to others
- Permissions can be delegated
- Flexible and user-managed

**Example:** Windows NTFS permissions
```
File: Q3_Report.docx
Owner: jsmith

jsmith sets permissions:
- jsmith: Full Control
- Finance Group: Read
- Manager: Modify
- Everyone: No Access
```

### DAC Implementation

**Access Control List (ACL):**
```
Resource: /data/reports/Q3_Report.docx
┌────────────────┬─────────────────┐
│ Identity       │ Permissions     │
├────────────────┼─────────────────┤
│ jsmith         │ Full Control    │
│ Finance        │ Read            │
│ Manager        │ Read, Write     │
│ Everyone       │ (none)          │
└────────────────┴─────────────────┘
```

**Common DAC systems:**
- Windows NTFS file permissions
- Linux file permissions (rwx)
- Most file sharing systems
- Database object permissions

### DAC Strengths

**Flexibility:**
- Users manage their own resources
- Quick permission changes
- No admin bottleneck

**Simplicity:**
- Easy to understand
- Intuitive for users
- Low administrative overhead

**Appropriate for:**
- Collaborative environments
- User-created content
- Low-sensitivity data

### DAC Weaknesses

**Security concerns:**

**1. Trojan horse vulnerability:**
```
1. Malicious program runs as user
2. Program inherits user's permissions
3. Program can access/copy user's files
4. Program can grant permissions to attacker
```

**2. Permission sprawl:**
- Users grant access liberally
- Difficult to track who has access
- Permissions accumulate over time

**3. No central control:**
- Admins can't enforce policies
- Inconsistent security
- Hard to audit

**4. Data leakage:**
- Users can share sensitive data inappropriately
- Copy to personal storage
- Email to external parties

### DAC Best Practices

- Regular permission audits
- User training on data classification
- Monitoring for unusual access patterns
- Combine with other controls (DLP)

---

## Mandatory Access Control (MAC)

System enforces access based on labels.

### How MAC Works

**Core concept:** Central authority defines access rules. Users cannot change them.

**Key characteristics:**
- Labels assigned to subjects (users) and objects (data)
- System enforces access based on labels
- Users cannot modify permissions
- Hierarchical security levels

**Example:**
```
User: Analyst_Jones
Clearance: SECRET

Data: Battle_Plans.doc
Classification: TOP SECRET

Access decision: DENIED
(User clearance < Data classification)
```

### Security Labels

**Classification levels (hierarchical):**
```
TOP SECRET (highest)
     ↑
  SECRET
     ↑
CONFIDENTIAL
     ↑
UNCLASSIFIED (lowest)
```

**Compartments (non-hierarchical):**
```
Projects: ALPHA, BRAVO, CHARLIE

User may have SECRET clearance
But only for ALPHA and BRAVO compartments
```

**Access requires:**
1. Clearance ≥ Classification (dominance)
2. Need-to-know for compartment

### Bell-LaPadula Model

Focuses on **confidentiality** (no unauthorized reading).

**Rules:**

**Simple Security Property (No Read Up):**
- Subject cannot read object at higher classification
- SECRET user cannot read TOP SECRET document

**Star Property (No Write Down):**
- Subject cannot write to object at lower classification
- TOP SECRET user cannot write to SECRET file
- Prevents information leakage

```
TOP SECRET ──── Can read TS, write TS
                Cannot read: (nothing above)
                Cannot write: S, C, U
     │
  SECRET ────── Can read S, C, U, write S
                Cannot read: TS
                Cannot write: C, U
     │
CONFIDENTIAL ── Can read C, U, write C
                Cannot read: TS, S
                Cannot write: U
     │
UNCLASSIFIED ── Can read U, write U
                Cannot read: TS, S, C
                Cannot write: (nothing below)
```

### Biba Model

Focuses on **integrity** (no unauthorized modification).

**Rules (opposite of Bell-LaPadula):**

**Simple Integrity Axiom (No Read Down):**
- Subject cannot read object at lower integrity
- Prevents corruption from untrusted data

**Star Integrity Axiom (No Write Up):**
- Subject cannot write to object at higher integrity
- Prevents untrusted subject from corrupting trusted data

### MAC Characteristics

**Strengths:**
- Strong central control
- Prevents data leakage
- Consistent enforcement
- Required for classified data

**Weaknesses:**
- Rigid, inflexible
- High administrative overhead
- Labels must be maintained
- Complex to implement

**Common implementations:**
- SELinux
- Trusted Solaris
- Windows MIC (Mandatory Integrity Control)
- Government/military systems

### DAC vs. MAC Comparison

| Aspect | DAC | MAC |
|--------|-----|-----|
| Control | Owner | System/Admin |
| Flexibility | High | Low |
| User can modify | Yes | No |
| Central policy | No | Yes |
| Complexity | Low | High |
| Use case | Commercial | Government/Military |

---

## Role-Based Access Control (RBAC)

Permissions assigned to roles, users assigned to roles.

### How RBAC Works

**Core concept:** Users don't get permissions directly. Users get roles. Roles have permissions.

```
┌─────────┐     ┌─────────┐     ┌─────────────┐
│  Users  │ ──► │  Roles  │ ──► │ Permissions │
└─────────┘     └─────────┘     └─────────────┘

User: jsmith
  └── Role: Accountant
        └── Permissions: 
            - Read financial reports
            - Create invoices
            - Access accounting system
```

### RBAC Implementation

**Define roles based on job functions:**
```
Role: Help Desk Technician
Permissions:
  - Reset passwords
  - Unlock accounts
  - View user properties
  - Create tickets

Role: System Administrator
Permissions:
  - All Help Desk permissions
  - Create/delete accounts
  - Modify group membership
  - Server access

Role: Security Administrator
Permissions:
  - View security logs
  - Manage security policies
  - Incident response access
  - No user account creation
```

**Assign users to roles:**
```
jsmith → Help Desk Technician
mjones → System Administrator
klee → Security Administrator, Help Desk Technician
```

### RBAC Concepts

**Role hierarchy:**
```
        Senior Admin
             │
      ┌──────┴──────┐
      │             │
  Sys Admin    Security Admin
      │
  Help Desk
```
Higher roles inherit lower role permissions.

**Separation of duties:**
- Some roles mutually exclusive
- Can't have both "Requester" and "Approver"
- Prevents fraud

**Least privilege:**
- Assign minimum roles needed
- Roles have minimum permissions needed

### RBAC Strengths

**Simplified administration:**
- Change role = affects all users in role
- New employee: just assign role(s)
- Leaving employee: remove from roles

**Alignment with business:**
- Roles match job functions
- Easy to understand
- Auditable

**Scalability:**
- Works for thousands of users
- Consistent permissions

**Compliance:**
- Clear documentation of who can do what
- Easier audits
- Separation of duties enforcement

### RBAC Weaknesses

**Role explosion:**
- Many variations = many roles
- "Accountant", "Senior Accountant", "Accountant-NYC", "Accountant-Remote"
- Administrative burden

**Not context-aware:**
- No time-based decisions
- No location-based decisions
- Binary: have role or don't

**Initial setup:**
- Significant effort to define roles
- Must understand all job functions

### RBAC Best Practices

- Define roles based on job functions, not individuals
- Regular role reviews (remove unused)
- Limit role hierarchy depth
- Document role purposes
- Combine with other controls when needed

---

## Attribute-Based Access Control (ABAC)

Decisions based on attributes of subject, object, and environment.

### How ABAC Works

**Core concept:** Access decisions evaluate multiple attributes against policies.

**Attributes considered:**
- **Subject attributes:** Role, department, clearance, location, device
- **Object attributes:** Classification, owner, type, sensitivity
- **Environment attributes:** Time, location, threat level, network

**Example policy:**
```
IF subject.role = "Doctor"
AND subject.department = object.department
AND object.type = "PatientRecord"
AND environment.time BETWEEN 06:00 AND 22:00
AND environment.location = "Hospital"
THEN ALLOW READ
```

### ABAC Architecture

```
┌─────────────────────────────────────────────────────┐
│                 Access Request                       │
│  Subject: Dr. Smith                                 │
│  Action: Read                                       │
│  Object: Patient Record #12345                      │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│            Policy Decision Point (PDP)               │
│                                                      │
│  Evaluate attributes against policies                │
│                                                      │
│  Subject attributes:                                 │
│    - Role: Doctor                                   │
│    - Department: Cardiology                         │
│    - Device: Hospital workstation                   │
│                                                      │
│  Object attributes:                                  │
│    - Type: Patient Record                           │
│    - Department: Cardiology                         │
│    - Sensitivity: PHI                               │
│                                                      │
│  Environment attributes:                             │
│    - Time: 14:30                                    │
│    - Location: Hospital network                     │
│                                                      │
│  Policy result: PERMIT                              │
└─────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────┐
│           Policy Enforcement Point (PEP)             │
│                                                      │
│           Access GRANTED                             │
└─────────────────────────────────────────────────────┘
```

### ABAC Policy Examples

**Time-based access:**
```
Contractors can access system
ONLY IF environment.time BETWEEN 09:00 AND 17:00
AND environment.day IN [Monday, Tuesday, Wednesday, Thursday, Friday]
```

**Location-based access:**
```
Financial data access
ONLY IF subject.location = "Office"
OR (subject.location = "Remote" AND subject.device.managed = true)
```

**Risk-based access:**
```
IF environment.risk_score > 80
THEN require additional authentication
```

### ABAC Strengths

**Fine-grained control:**
- Very specific policies possible
- Context-aware decisions
- Dynamic access control

**Flexibility:**
- New attributes easily added
- Policies can be complex
- Adapts to changing needs

**No role explosion:**
- Attributes instead of hundreds of roles
- Scales better for complex environments

**Real-time decisions:**
- Current context evaluated
- Time, location, risk level

### ABAC Weaknesses

**Complexity:**
- Policies can be hard to write
- Debugging difficult
- Requires attribute infrastructure

**Performance:**
- Multiple attribute lookups
- Policy evaluation overhead
- May need caching

**Attribute management:**
- Attributes must be accurate
- Attribute sources must be reliable
- Stale attributes = wrong decisions

### RBAC vs. ABAC

| Aspect | RBAC | ABAC |
|--------|------|------|
| Granularity | Coarse (roles) | Fine (attributes) |
| Complexity | Lower | Higher |
| Context-aware | No | Yes |
| Setup effort | Moderate | High |
| Scalability | Role explosion risk | Scales well |
| Use case | Most enterprises | Complex requirements |

**Many organizations use both:** RBAC for basic structure, ABAC for fine-tuning.

---

## Rule-Based Access Control

Decisions based on predefined rules.

### How Rule-Based Works

**Core concept:** If-then rules determine access. Not based on identity.

**Examples:**

**Firewall rules:**
```
Rule 1: IF source_ip IN 10.0.0.0/8 AND dest_port = 443 THEN ALLOW
Rule 2: IF source_ip = ANY AND dest_port = 22 THEN DENY
Rule 3: DEFAULT DENY
```

**Time-based rules:**
```
IF time BETWEEN 08:00 AND 18:00 THEN allow access
IF time BETWEEN 18:00 AND 08:00 THEN deny access
```

### Rule-Based Characteristics

**Applied uniformly:**
- Same rules for everyone
- No user-specific decisions
- Based on conditions, not identity

**Common uses:**
- Firewalls
- Router ACLs
- Physical access (door schedules)
- Network access control

**Different from RBAC:**
- Rule-based: conditions (time, IP, port)
- RBAC: identity (user roles)

---

## Permission Concepts

How permissions are evaluated and applied.

### Implicit vs. Explicit Permissions

**Explicit permission:**
- Directly assigned
- Clearly documented
- "User X has Read access to File Y"

**Implicit permission:**
- Derived from other permissions
- Through group membership
- Through inheritance
- Through role assignment

**Example:**
```
Explicit: jsmith → Read → File.txt
Implicit: jsmith → Member of Finance → Finance has Read → File.txt
```

### Permission Inheritance

Permissions flow from parent to child.

**Folder structure:**
```
/Company
  └── /Finance (Finance group: Read/Write)
        └── /Reports (inherits from Finance)
              └── Q3.xlsx (inherits: Finance Read/Write)
```

**Inheritance can be:**
- Enabled (permissions flow down)
- Disabled (break inheritance)
- Overridden (explicit > inherited)

### Effective Permissions

What user can actually do after all permissions evaluated.

**Calculation:**
```
User: jsmith
Direct permissions: Read
Group 1 (Finance): Read, Write
Group 2 (AllEmployees): Read

Effective permissions: Read, Write
(Union of all permissions)
```

**With deny:**
```
User: jsmith
Direct permissions: Full Control
Group (Restricted): DENY Write

Effective permissions: Read only
(Deny overrides allow)
```

### Default Deny (Implicit Deny)

If not explicitly permitted, access is denied.

**Secure default:**
```
No permissions assigned → No access
Must explicitly grant access
```

**Why important:**
- Least privilege by default
- New resources start secure
- Must intentionally open access

---

## Physical Access Control

Controlling physical access to facilities.

### Physical Access Methods

**Something you have:**
- Key cards / badges
- Key fobs
- Smart cards
- Mobile credentials

**Something you know:**
- PIN codes
- Combinations

**Something you are:**
- Fingerprint scanners
- Facial recognition
- Iris scanners

**Multi-factor:**
- Badge + PIN
- Badge + biometric

### Physical Access Systems

**Card readers:**
- Proximity (RFID)
- Smart card (contact/contactless)
- Magnetic stripe (legacy, insecure)

**Access control panels:**
- Manage multiple doors
- Store access rules
- Log access events

**Integration:**
- Link to HR systems
- Automatic provisioning/deprovisioning
- Visitor management

### Physical Security Zones

```
┌─────────────────────────────────────────────────────────────┐
│                    PUBLIC AREA                               │
│                  (No badge needed)                          │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              RECEPTION / LOBBY                       │   │
│  │            (Badge needed beyond)                     │   │
│  │  ┌───────────────────────────────────────────────┐  │   │
│  │  │           GENERAL OFFICE                       │  │   │
│  │  │          (Employee badge)                      │  │   │
│  │  │  ┌─────────────────────────────────────────┐  │  │   │
│  │  │  │         RESTRICTED AREA                  │  │  │   │
│  │  │  │        (Special access)                  │  │  │   │
│  │  │  │  ┌─────────────────────────────────┐   │  │  │   │
│  │  │  │  │       DATA CENTER               │   │  │  │   │
│  │  │  │  │    (Badge + Biometric)          │   │  │  │   │
│  │  │  │  └─────────────────────────────────┘   │  │  │   │
│  │  │  └─────────────────────────────────────────┘  │  │   │
│  │  └───────────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Access Control Vestibule (Mantrap)

Prevents tailgating/piggybacking.

**How it works:**
```
┌─────┐     ┌─────────────┐     ┌─────┐
│     │     │             │     │     │
│  A  │ ──► │  Vestibule  │ ──► │  B  │
│     │     │             │     │     │
└─────┘     └─────────────┘     └─────┘

1. Person enters from A, door A closes
2. Person authenticates
3. System verifies only one person
4. Door B opens
5. Person enters B, door B closes
```

**Controls:**
- Only one door open at a time
- Weight sensors (detect multiple people)
- Camera verification
- Guard monitoring

---

## Key Exam Tips

🎯 **DAC:** Owner controls access. Flexible but can't enforce central policy. NTFS permissions are DAC.

🎯 **MAC:** System enforces labels. Users can't change. Bell-LaPadula (confidentiality), Biba (integrity). Military/government.

🎯 **RBAC:** Permissions to roles, users to roles. Most common enterprise model. Job-function based.

🎯 **ABAC:** Attributes evaluated against policies. Most flexible. Context-aware (time, location, risk).

🎯 **Rule-based:** If-then rules, not identity-based. Firewalls use rule-based.

🎯 **Bell-LaPadula:** No read up, no write down. Protects confidentiality.

🎯 **Biba:** No read down, no write up. Protects integrity.

🎯 **Implicit deny:** If not explicitly permitted, denied. Secure default.

🎯 **Deny overrides allow:** Explicit deny beats any allow permission.

🎯 **Effective permissions:** Cumulative of all permissions from all sources.

---

## Key Takeaways

- [ ] DAC lets resource owners control access; flexible but no central policy enforcement
- [ ] MAC uses labels enforced by system; users cannot modify permissions
- [ ] Bell-LaPadula model protects confidentiality (no read up, no write down)
- [ ] Biba model protects integrity (no read down, no write up)
- [ ] RBAC assigns permissions to roles, then users to roles; most common enterprise model
- [ ] ABAC evaluates attributes (subject, object, environment) against policies for fine-grained control
- [ ] Rule-based access control uses if-then rules not based on identity (firewalls)
- [ ] Implicit deny means access is denied unless explicitly permitted
- [ ] Explicit deny overrides any allow permissions
- [ ] Effective permissions are the cumulative result of all permission sources
- [ ] Physical access control uses badges, PINs, and biometrics
- [ ] Access control vestibules (mantraps) prevent tailgating

---

## Check Your Understanding

**1. A company allows employees to create shared folders and set permissions for who can access them. Users frequently share sensitive data with people who shouldn't have access. What access control model is this, and what are the limitations?**

<details>
<summary>Show Answer</summary>
<strong>Access Control Model: DAC (Discretionary Access Control)</strong>

**How it works in this scenario:**
- Employees create folders (become owners)
- Owners set permissions (who can read/write)
- IT has no central control over permissions

---

<strong>Limitations of DAC:</strong>

**1. No central policy enforcement:**
- Users decide who gets access
- Can't prevent sharing sensitive data
- Inconsistent security

**2. Over-sharing:**
- Users grant access too liberally
- "Everyone" access common
- Hard to revoke

**3. No classification enforcement:**
- System doesn't know data sensitivity
- Can't block sharing of classified data
- User judgment only

**4. Audit challenges:**
- Difficult to track permissions
- No central view
- Compliance issues

**5. Trojan horse vulnerability:**
- Malware runs as user
- Has user's permissions
- Can exfiltrate accessible data

---

<strong>Solutions:</strong>

**Technical:**
- DLP (Data Loss Prevention) to detect sensitive data sharing
- Monitor access patterns
- Periodic permission audits
- Classify sensitive locations with restricted access

**Administrative:**
- Training on data handling
- Clear policies on what can be shared
- Regular access reviews
- Consequences for policy violations

**Consider different model:**
- RBAC for role-based restrictions
- MAC for highly sensitive data
- ABAC for context-aware decisions
</details>

**2. A military system requires that users can only access documents at or below their clearance level, and cannot save highly classified information to lower-classified systems. What access control model and specific implementation addresses this?**

<details>
<summary>Show Answer</summary>
<strong>Access Control Model: MAC (Mandatory Access Control)</strong>

<strong>Specific Implementation: Bell-LaPadula Model</strong>

---

**Bell-LaPadula Rules:**

**Simple Security Property (No Read Up):**
```
User clearance: SECRET
Document classification: TOP SECRET
Result: ACCESS DENIED

User cannot read documents above their clearance.
```

**Star Property (No Write Down):**
```
User clearance: TOP SECRET
Target system: SECRET
Result: WRITE DENIED

User cannot write TOP SECRET data to SECRET system.
Prevents information leakage to lower classifications.
```

---

**Why Bell-LaPadula:**

**Addresses requirements:**
- "Only access at or below clearance" = No Read Up
- "Cannot save to lower systems" = No Write Down

**System enforced:**
- Users cannot override
- Central policy
- Consistent enforcement

**Prevents:**
- Reading classified info without clearance
- Leaking classified info to lower systems
- Unauthorized information flow

---

**Example scenario:**

```
User: Analyst_Brown
Clearance: SECRET

Can read:
✓ UNCLASSIFIED documents
✓ CONFIDENTIAL documents  
✓ SECRET documents

Cannot read:
✗ TOP SECRET documents

Can write to:
✓ SECRET systems
✓ TOP SECRET systems (write up allowed)

Cannot write to:
✗ CONFIDENTIAL systems
✗ UNCLASSIFIED systems
```

**Note:** Writing up is allowed because it doesn't leak secrets down. Analysts can submit reports to higher classified systems.
</details>

**3. Compare RBAC and ABAC. A healthcare organization needs to control access to patient records where doctors should only access their own patients, during work hours, from hospital devices. Which model is better suited?**

<details>
<summary>Show Answer</summary>
<strong>ABAC is better suited for this scenario.</strong>

---

**Why RBAC struggles here:**

**Requirements:**
1. Doctors only access their own patients
2. During work hours
3. From hospital devices

**RBAC approach:**
```
Role: Doctor

Problem 1: "Own patients"
- Need role per doctor-patient relationship?
- Dr_Smith_Patient_123_Access?
- Doesn't scale

Problem 2: "Work hours"
- RBAC has no time concept
- Can't say "Doctor role only works 8am-6pm"

Problem 3: "Hospital devices"
- RBAC has no device concept
- Can't restrict to certain computers
```

**Result:** Would need thousands of roles, still can't do time/location.

---

**ABAC approach:**

```
Policy:
IF subject.role = "Doctor"
AND subject.id = object.treating_physician
AND environment.time BETWEEN 06:00 AND 22:00
AND environment.device.type = "Hospital_Workstation"
AND environment.location = "Hospital_Network"
THEN ALLOW access to object.patient_record
```

**Handles all requirements:**

| Requirement | ABAC Attribute |
|-------------|----------------|
| Own patients | subject.id = object.treating_physician |
| Work hours | environment.time BETWEEN 06:00 AND 22:00 |
| Hospital devices | environment.device.type = "Hospital_Workstation" |

---

**Additional ABAC benefits for healthcare:**

**Emergency access:**
```
IF subject.role = "Doctor"
AND environment.emergency_flag = true
THEN ALLOW access (with audit)
```

**Specialist consultation:**
```
IF subject.role = "Specialist"
AND object.consultation_request EXISTS
AND subject.id = object.consultation_request.specialist
THEN ALLOW access
```

**Break-the-glass:**
```
IF subject.role IN ["Doctor", "Nurse"]
AND subject.break_glass_acknowledged = true
THEN ALLOW access (with alert)
```

---

<strong>Recommendation:</strong>

Use ABAC for patient record access with policies covering:
- Role verification
- Patient relationship
- Time restrictions
- Location/device requirements
- Emergency exceptions
- Full audit logging
</details>

**4. What is the difference between Bell-LaPadula and Biba models? When would you use each?**

<details>
<summary>Show Answer</summary>
<strong>Bell-LaPadula Model:</strong>

**Focus:** Confidentiality (prevent unauthorized disclosure)

**Rules:**
- No Read Up: Can't read above your level
- No Write Down: Can't write below your level

**Goal:** Prevent secrets from leaking to lower classifications

**Analogy:** Military secrets - don't want classified info leaking to unclassified systems

```
TOP SECRET user:
  Can read: TS, S, C, U
  Can write: TS only (not down to S, C, U)

SECRET user:
  Can read: S, C, U
  Can write: S, TS (not down to C, U)
```

---

<strong>Biba Model:</strong>

**Focus:** Integrity (prevent unauthorized modification)

**Rules:**
- No Read Down: Can't read below your level
- No Write Up: Can't write above your level

**Goal:** Prevent untrusted data from corrupting trusted systems

**Analogy:** Software development - don't want untested code in production

```
HIGH integrity user:
  Can read: HIGH only (not Medium, Low)
  Can write: HIGH, Medium, Low

LOW integrity user:
  Can read: LOW, Medium, HIGH
  Can write: LOW only (not up to Medium, HIGH)
```

---

<strong>Comparison:</strong>

| Aspect | Bell-LaPadula | Biba |
|--------|---------------|------|
| Protects | Confidentiality | Integrity |
| No Read | Up (higher) | Down (lower) |
| No Write | Down (lower) | Up (higher) |
| Concern | Info leakage | Data corruption |
| Use case | Classified data | Data integrity |

---

<strong>When to use each:</strong>

**Bell-LaPadula:**
- Military/government classified systems
- Protecting trade secrets
- Healthcare PHI
- Any time preventing data disclosure is priority

**Biba:**
- Financial systems (prevent fraud)
- Software integrity (prevent corruption)
- Database integrity
- Any time data accuracy is priority

**Both together:**
- Some systems implement both
- Called "Chinese Wall" or combined model
- Protect both confidentiality AND integrity
</details>

**5. An organization has 5,000 employees across 50 job functions. They currently manage permissions individually per user. Why should they implement RBAC, and what are the benefits?**

<details>
<summary>Show Answer</summary>
<strong>Current State Problems:</strong>

**Individual permission management:**
- 5,000 users × multiple systems = tens of thousands of permission assignments
- Each user managed separately
- Inconsistent permissions for same job function
- Massive administrative overhead

**Issues:**
- New hire: manually determine and assign all permissions
- Role change: manually modify permissions
- Termination: find and remove all permissions
- Audit: check each user individually

---

<strong>RBAC Solution:</strong>

**Structure:**
```
50 job functions → 50 roles (approximately)

Role: Accountant
Permissions:
  - Financial system: Read/Write
  - Expense system: Approve
  - Reporting: Read
  - Email: Full

Users: 100 accountants → Accountant role
```

---

<strong>Benefits:</strong>

**1. Simplified administration:**

| Task | Individual | RBAC |
|------|------------|------|
| New hire | Set 20 permissions | Assign 1-2 roles |
| Role change | Modify 20 permissions | Change role assignment |
| Termination | Find/remove 20 permissions | Remove from roles |
| Audit | Check 5,000 users | Check 50 roles |

**2. Consistency:**
- All accountants have same permissions
- No forgotten permissions
- No extra permissions

**3. Least privilege:**
- Roles defined with minimum needed
- No ad-hoc "just add this"
- Easier to enforce

**4. Compliance:**
- Clear documentation
- "Who can access what" = role definitions
- Easy audit: show role → show members

**5. Scalability:**
- Add 500 employees: just assign roles
- New job function: create one new role
- Works for any organization size

**6. Separation of duties:**
- Define mutually exclusive roles
- System enforces
- Prevent fraud

---

<strong>Implementation approach:</strong>

1. Inventory current permissions
2. Group by job function
3. Define roles
4. Assign users to roles
5. Remove direct permissions
6. Regular role reviews
</details>

**6. Explain effective permissions. A user is directly denied Write access to a folder, but their group has Write access. What is the effective permission?**

<details>
<summary>Show Answer</summary>
<strong>Effective Permission: NO WRITE ACCESS (Denied)</strong>

---

**Rule: Explicit Deny overrides Allow**

**Permission evaluation:**
```
User: jsmith
  Direct permission: DENY Write ← Explicit deny
  Group (Finance): ALLOW Write ← Allow via group

Evaluation:
  DENY always wins over ALLOW
  
Result: Write DENIED
```

---

**Why Deny wins:**

**Security principle:**
- Deny is intentional restriction
- Takes precedence over any allow
- Prevents unintended access

**Example reasoning:**
```
Scenario:
- Finance group needs Write access to folder
- But jsmith (in Finance) should not have Write
- Add explicit Deny for jsmith

Without "Deny wins":
- jsmith would get Write via group
- Can't restrict specific users
- Can't enforce exceptions
```

---

**Permission precedence:**

```
Priority (highest to lowest):
1. Explicit Deny
2. Explicit Allow
3. Inherited Deny
4. Inherited Allow
5. Implicit Deny (no permission = denied)
```

---

**Effective permission calculation:**

```
For each permission (Read, Write, Execute, etc.):

1. Check for Explicit Deny → if found, DENIED
2. Check for Explicit Allow → if found, ALLOWED
3. Check inherited permissions (same logic)
4. If no permission found → DENIED (implicit deny)
```

---

**Practical example:**

```
Folder: /Finance/Reports

Group permissions:
- Finance: Read, Write
- Auditors: Read

User jsmith:
- Member of: Finance, Auditors
- Direct: Deny Write

Effective permissions for jsmith:
- Read: ALLOWED (via Finance or Auditors)
- Write: DENIED (explicit deny overrides Finance allow)
```
</details>

**7. What is implicit deny (default deny)? Why is it a security best practice?**

<details>
<summary>Show Answer</summary>
<strong>Implicit Deny (Default Deny):</strong>

**Definition:** If no explicit permission is granted, access is denied by default.

**Principle:** Start with no access, add only what's needed.

```
New resource created:
  Permissions: (none defined)
  Access attempt: DENIED
  
Must explicitly grant access for anyone to use resource.
```

---

<strong>Why It's a Best Practice:</strong>

**1. Least privilege by default:**
- New resources are secure automatically
- Must intentionally open access
- Can't forget to deny

**2. Reduces attack surface:**
- Unknown = denied
- New users = no access until granted
- New resources = protected immediately

**3. Prevents accidents:**
```
Without implicit deny:
  New file share created
  Default: Everyone Full Control (!)
  Oops.

With implicit deny:
  New file share created
  Default: No access
  Admin grants specific access
```

**4. Defense in depth:**
- Even if specific deny forgotten
- Access still denied
- Safety net

---

<strong>Contrast with Implicit Allow:</strong>

**Implicit Allow (DANGEROUS):**
```
Default: Allow unless denied

Problem:
  New service on port 8080
  Forgot to add deny rule
  Result: Accessible to everyone
```

**Implicit Deny (SECURE):**
```
Default: Deny unless allowed

New service on port 8080
Forgot to add allow rule
Result: Not accessible (safe fail)
Must add allow rule to enable
```

---

<strong>Examples of Implicit Deny:</strong>

**Firewalls:**
```
Rule 1: Allow TCP 443 to WebServer
Rule 2: Allow TCP 22 from Admin
[Implicit Deny All] ← Everything else blocked
```

**NTFS (kind of):**
- New objects inherit from parent
- But if no inheritance, no access

**AWS IAM:**
```
No policy = no access
Must explicitly grant permissions
```

---

<strong>Best Practice Implementation:</strong>

- Verify systems use default deny
- Make final rule explicit deny (for logging)
- Start with zero access
- Add permissions as needed
- Document all granted permissions
- Regular review to remove unneeded
</details>

**8. A rule-based access control system uses the following rules in order:
1. Allow TCP 443 from any
2. Deny TCP 443 from 10.0.0.0/8
3. Allow all from 10.0.0.0/8

What happens when 10.1.1.5 tries to connect on TCP 443?**

<details>
<summary>Show Answer</summary>
<strong>Result: ACCESS ALLOWED</strong>

---

**Rule processing (top-down, first match):**

```
Source: 10.1.1.5
Destination port: TCP 443

Rule 1: Allow TCP 443 from any
  - Source: 10.1.1.5 matches "any" ✓
  - Port: TCP 443 matches ✓
  - MATCH → ALLOW
  
Rule 2: (never evaluated - Rule 1 matched)
Rule 3: (never evaluated - Rule 1 matched)
```

---

**Why this is a problem:**

**Intent was probably:**
- Allow public access to web server
- But block internal network from web server
- Allow internal network for other traffic

**Actual behavior:**
- Rule 1 is too broad, matches first
- Rule 2 never applies
- Internal users (10.x) get web access

---

**Correct rule order:**

```
Rule 1: Deny TCP 443 from 10.0.0.0/8  ← Specific deny first
Rule 2: Allow TCP 443 from any         ← Then general allow
Rule 3: Allow all from 10.0.0.0/8      ← Internal traffic
Rule 4: Deny all                       ← Implicit/explicit deny
```

Now 10.1.1.5 on TCP 443:
```
Rule 1: Deny TCP 443 from 10.0.0.0/8
  - Source: 10.1.1.5 in 10.0.0.0/8 ✓
  - Port: TCP 443 ✓
  - MATCH → DENY
```

---

**Key principle:**

```
Rule order matters!
- Specific rules before general rules
- Deny exceptions before broad allows
- First match wins
```
</details>

**9. Describe an access control vestibule (mantrap). What attacks does it prevent?**

<details>
<summary>Show Answer</summary>
<strong>Access Control Vestibule (Mantrap):</strong>

**What it is:** Small enclosed space with two doors where only one door can open at a time.

**Physical design:**
```
┌─────────┐      ┌─────────────────┐      ┌─────────────┐
│         │      │                 │      │             │
│  Public │─[A]──│    Vestibule    │──[B]─│   Secure    │
│  Area   │      │                 │      │    Area     │
│         │      │   ┌─────────┐   │      │             │
└─────────┘      │   │ Weight  │   │      └─────────────┘
                 │   │ Sensor  │   │
                 │   └─────────┘   │
                 │    [Camera]     │
                 └─────────────────┘
```

**How it works:**
1. Person enters from public area
2. Door A closes and locks
3. Person authenticates (badge, biometric)
4. System verifies single occupant
5. Door B opens
6. Person enters secure area
7. Door B closes

---

<strong>Attacks Prevented:</strong>

**1. Tailgating:**
- Unauthorized person follows authorized person through door
- Vestibule: Only one person at a time
- Weight sensor detects multiple people

**2. Piggybacking:**
- Authorized person knowingly lets unauthorized person in
- Vestibule: Both must authenticate
- Or detected by sensors

**3. Forced entry:**
- Person rushes through before door closes
- Vestibule: Two doors, can't rush through both
- Trapped between if unauthorized

**4. Social engineering:**
- "Hold the door please"
- Vestibule: Can't hold door
- Must individually authenticate

---

<strong>Vestibule Controls:</strong>

| Control | Purpose |
|---------|---------|
| Weight sensor | Detect multiple people |
| Camera | Visual verification |
| Interlock doors | Only one open at a time |
| Guard station | Monitor and override |
| Anti-passback | Prevent badge sharing |

---

<strong>Anti-passback:</strong>

```
Problem:
  Person A badges in
  Passes badge back to Person B
  Person B badges in with same badge

Anti-passback:
  System tracks: Badge entered at Door A
  Same badge tries to enter again: DENIED
  Must exit before entering again
```

---

<strong>Use cases:</strong>

- Data centers
- Secure government facilities
- Bank vaults
- Research labs
- Server rooms
- Any high-security entrance
</details>

**10. An organization wants to implement context-aware access control where remote workers can access email from any device but can only access financial systems from managed devices during business hours. What access control model should they use and how would the policy be structured?**

<details>
<summary>Show Answer</summary>
<strong>Access Control Model: ABAC (Attribute-Based Access Control)</strong>

**Why ABAC:**
- Context-aware (device, time)
- Different rules for different resources
- Flexible policy expression
- Can't do this with RBAC alone

---

**Attributes needed:**

**Subject attributes:**
- subject.identity (user)
- subject.role (employee, contractor)
- subject.device.managed (true/false)
- subject.device.type (laptop, mobile, unknown)

**Object attributes:**
- object.type (email, financial_system)
- object.sensitivity (low, medium, high)

**Environment attributes:**
- environment.time
- environment.day
- environment.location

---

**Policy: Email Access**

```
Policy: Email_Remote_Access
Description: Allow email from any device

IF subject.role IN ["Employee", "Contractor"]
AND subject.authenticated = true
AND object.type = "Email"
THEN ALLOW

(No device or time restrictions)
```

---

**Policy: Financial System Access**

```
Policy: Financial_System_Access
Description: Financial access from managed devices during business hours

IF subject.role = "Employee"
AND subject.authenticated = true
AND subject.mfa_verified = true
AND object.type = "Financial_System"
AND subject.device.managed = true
AND subject.device.compliant = true
AND environment.time BETWEEN 07:00 AND 19:00
AND environment.day IN [Monday, Tuesday, Wednesday, Thursday, Friday]
THEN ALLOW

ELSE DENY with message "Access requires managed device during business hours"
```

---

**Additional considerations:**

**Exception for finance team:**
```
Policy: Finance_Extended_Access

IF subject.department = "Finance"
AND subject.role = "Finance_Manager"
AND subject.device.managed = true
AND subject.mfa_verified = true
AND object.type = "Financial_System"
THEN ALLOW

(No time restriction for finance managers)
```

**Emergency access:**
```
Policy: Emergency_Financial_Access

IF subject.role = "Employee"
AND subject.mfa_verified = true
AND subject.emergency_approval = true
AND object.type = "Financial_System"
THEN ALLOW (with enhanced logging)
```

---

**Implementation architecture:**

```
┌──────────────────────────────────────────────────────┐
│                  Access Request                       │
│  User: jsmith                                        │
│  Resource: Financial_System                          │
│  Device: Personal laptop                             │
│  Time: 3:00 PM Tuesday                              │
└──────────────────────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────┐
│              Attribute Collection                     │
│                                                      │
│  From Identity Provider:                             │
│    - Role: Employee                                  │
│    - Department: Sales                               │
│    - MFA: Verified                                   │
│                                                      │
│  From MDM/Device Management:                         │
│    - Device: Not managed ✗                          │
│    - Compliant: N/A                                  │
│                                                      │
│  From Context:                                       │
│    - Time: 15:00 ✓                                  │
│    - Day: Tuesday ✓                                 │
└──────────────────────────────────────────────────────┘
                         │
                         ▼
┌──────────────────────────────────────────────────────┐
│              Policy Evaluation                        │
│                                                      │
│  Financial_System_Access:                            │
│    - Role Employee: ✓                               │
│    - Authenticated: ✓                               │
│    - MFA: ✓                                         │
│    - Managed device: ✗ FAIL                         │
│                                                      │
│  Result: DENY                                        │
│  Message: "Requires managed device"                  │
└──────────────────────────────────────────────────────┘
```
</details>

---

## Next Lesson Preview

In **Lesson 21: Resilience and Recovery**, we'll explore high availability, fault tolerance, disaster recovery, and backup strategies to ensure business continuity when systems fail or disasters occur.

---

✅ **Lesson 20 Complete**

**Progress:** 20 of 30 lessons complete (66.7%)

---

*Next up: Lesson 21 - Resilience and Recovery*