export const lesson20Quiz = [
  {
    id: 1,
    question: "A file owner grants read access to specific users and groups of their choosing. The owner has full discretion over who can access the file. What access control model is this?",
    options: [
      "Mandatory Access Control",
      "DAC (Discretionary Access Control) - owner controls access at their discretion",
      "Role-Based Access Control",
      "Rule-Based Access Control"
    ],
    correct: 1,
    explanation: "DAC (Discretionary Access Control) allows resource owners to control access at their discretion. DAC characteristics: (1) Owner determines who can access, (2) Flexible and user-controlled, (3) Common in operating systems (NTFS, Unix), (4) Access can be granted/delegated by owners. DAC examples: (1) Windows file permissions, (2) Unix chmod/chown, (3) Shared folder access. DAC advantages: (1) Flexibility for users, (2) Easy to understand, (3) Decentralized management. DAC disadvantages: (1) Less secure (users make decisions), (2) Trojans can abuse owner's access, (3) Inconsistent policies, (4) Hard to enforce organization-wide policy. Compared to MAC: DAC = user decides, MAC = system decides. Most consumer and business systems use DAC."
  },
  {
    id: 2,
    question: "A military system classifies documents as 'Top Secret' and users must have 'Top Secret' clearance AND need-to-know to access them. The system enforces this regardless of ownership. What model is this?",
    options: [
      "Discretionary Access Control",
      "MAC (Mandatory Access Control) - system-enforced labels and clearances",
      "Role-Based Access Control",
      "Attribute-Based Access Control"
    ],
    correct: 1,
    explanation: "MAC (Mandatory Access Control) uses system-enforced labels and clearances - users/owners cannot override. MAC characteristics: (1) Labels assigned to objects (classifications), (2) Clearances assigned to subjects (users), (3) System enforces access rules, (4) Owners cannot grant access beyond their clearance. MAC levels example: (1) Top Secret, (2) Secret, (3) Confidential, (4) Unclassified. Access rules: (1) User clearance must >= object classification, (2) Need-to-know still required, (3) No write-up (prevent leaking to higher), (4) No read-down typically enforced. MAC environments: (1) Military/government classified systems, (2) SELinux, (3) High-security environments. MAC is most restrictive model - prevents information flow violations that DAC allows."
  },
  {
    id: 3,
    question: "An organization grants access based on job function. All 'HR Managers' have the same access rights, and when someone changes roles, their access changes accordingly. What model is this?",
    options: [
      "DAC",
      "RBAC (Role-Based Access Control) - access based on job roles",
      "MAC",
      "Rule-Based"
    ],
    correct: 1,
    explanation: "RBAC (Role-Based Access Control) assigns permissions to roles, then assigns users to roles. RBAC characteristics: (1) Roles defined by job function, (2) Permissions assigned to roles, (3) Users assigned to roles, (4) Access changes with role assignment. RBAC components: (1) Users - people, (2) Roles - job functions, (3) Permissions - access rights. RBAC advantages: (1) Easier administration (change role, not individual), (2) Aligns with organizational structure, (3) Supports least privilege, (4) Simplifies auditing, (5) Role changes automatic with job change. RBAC examples: (1) All 'Sales' can access CRM, (2) All 'Finance' can access accounting, (3) 'Manager' inherits 'Employee' permissions. RBAC is most common enterprise model - manageable at scale, maps to org structure."
  },
  {
    id: 4,
    question: "An access decision considers user department, data sensitivity, time of day, and location - granting access only if all conditions are met. What model provides this flexibility?",
    options: [
      "DAC",
      "ABAC (Attribute-Based Access Control) - decisions based on multiple attributes",
      "MAC",
      "Simple RBAC"
    ],
    correct: 1,
    explanation: "ABAC (Attribute-Based Access Control) makes decisions based on multiple attributes of users, resources, and environment. ABAC attributes: (1) SUBJECT - user role, department, clearance, (2) RESOURCE - classification, type, owner, (3) ACTION - read, write, delete, (4) ENVIRONMENT - time, location, device. ABAC example policy: 'Allow read if user.department = 'Finance' AND resource.classification = 'Confidential' AND environment.location = 'Office' AND environment.time = 'BusinessHours'. ABAC advantages: (1) Very granular control, (2) Complex policies possible, (3) Dynamic decisions, (4) Context-aware. ABAC challenges: (1) Complex to implement, (2) Policy management, (3) Performance considerations. ABAC vs RBAC: ABAC is more flexible but more complex. Often RBAC used with ABAC-like extensions for context."
  },
  {
    id: 5,
    question: "A firewall permits or denies traffic based on predetermined rules matching source IP, destination, and port. What type of access control is this?",
    options: [
      "Role-Based",
      "Rule-Based Access Control - access based on predefined rules",
      "Discretionary",
      "Attribute-Based"
    ],
    correct: 1,
    explanation: "RULE-BASED ACCESS CONTROL uses predetermined rules to make access decisions - common in network devices. Rule-based characteristics: (1) Rules defined by administrator, (2) Rules evaluated in order, (3) First match determines action, (4) No discretion - rules are absolute. Firewall rule example: (1) IF source=10.1.1.0/24 AND dest=web_server AND port=443 THEN ALLOW, (2) ELSE DENY. Rule-based vs RBAC: (1) Rule-based - matches conditions, takes action, (2) RBAC - based on user's role. Rule-based examples: (1) Firewall ACLs, (2) Router ACLs, (3) Time-based access rules, (4) URL filtering rules. Rule-based is deterministic - same conditions always produce same result. Often combined with other models (RBAC for users, rule-based for network)."
  },
  {
    id: 6,
    question: "An organization's policy states that any access not explicitly permitted is denied by default. What security principle does this implement?",
    options: [
      "Default allow",
      "Implicit deny - denying access unless explicitly permitted",
      "Open access",
      "Trust all"
    ],
    correct: 1,
    explanation: "IMPLICIT DENY (default deny) denies access unless explicitly permitted - fundamental security principle. Implicit deny operation: (1) Define what IS allowed, (2) Everything else is automatically denied, (3) Fail-secure default. Examples: (1) Firewall with implicit deny at end, (2) Application permissions (no permission = no access), (3) Physical access (no badge = no entry). Opposite (implicit allow): allow unless explicitly denied - requires knowing everything to block. Why implicit deny is preferred: (1) Safer default (new things blocked), (2) Limits attack surface, (3) Enforces least privilege, (4) Easier to audit (list what's allowed vs everything blocked). Challenge: must identify and permit all legitimate access. Implicit deny is foundation of least privilege and zero trust."
  },
  {
    id: 7,
    question: "A system enforces that no single person can both create a purchase order and approve payment for it. What security principle is this?",
    options: [
      "Least privilege",
      "Separation of duties - requiring multiple people for critical functions",
      "Defense in depth",
      "Need to know"
    ],
    correct: 1,
    explanation: "SEPARATION OF DUTIES requires multiple people to complete critical or sensitive functions, preventing fraud. Separation of duties examples: (1) Can't create and approve own PO, (2) Developer can't deploy to production, (3) Admin can't approve own access, (4) Key parts held by different people. Benefits: (1) Prevents fraud by single person, (2) Reduces errors (second review), (3) Creates accountability, (4) Deters collusion (harder with multiple people). Conflict with efficiency: (1) Slower processes, (2) More people involved, (3) Balance risk vs convenience. Implementation: (1) Role design preventing conflicts, (2) Workflow requiring approvals, (3) Technical controls enforcing separation, (4) Audit to detect violations. Separation of duties is critical control for financial systems, security administration, and privileged operations."
  },
  {
    id: 8,
    question: "A database administrator can manage database structure but cannot view the actual data contents. What principle is being applied?",
    options: [
      "Full access",
      "Least privilege - minimum access needed for job function",
      "Maximum privilege",
      "Root access"
    ],
    correct: 1,
    explanation: "LEAST PRIVILEGE grants only the minimum access necessary to perform required job functions. Least privilege examples: (1) DBA manages structure not data, (2) Developer has dev access not prod, (3) Help desk resets passwords not creates admins, (4) Read-only unless write needed. Least privilege benefits: (1) Limits damage from compromise, (2) Reduces insider threat risk, (3) Minimizes accidental damage, (4) Supports compliance. Implementation: (1) Define job requirements, (2) Grant minimum needed, (3) Review and remove excess, (4) Deny by default. Challenge: users want more access 'just in case'. Proper approach: grant on documented need, review regularly, remove when not needed. Privilege creep: gradual accumulation of access - regular reviews needed."
  },
  {
    id: 9,
    question: "After 5 failed login attempts, an account is locked for 30 minutes. What type of security control is this?",
    options: [
      "Encryption",
      "Account lockout policy - preventing brute force attacks",
      "Biometric control",
      "Physical security"
    ],
    correct: 1,
    explanation: "ACCOUNT LOCKOUT POLICY temporarily or permanently locks accounts after failed attempts, preventing brute force. Lockout parameters: (1) Threshold (failed attempts before lock), (2) Duration (how long locked), (3) Reset counter (when attempts reset). Typical settings: (1) 5-10 failed attempts, (2) 15-30 minute lockout, (3) Counter resets after successful login. Balance: (1) Too strict = user lockouts (DoS on self), (2) Too loose = brute force possible. Considerations: (1) Attackers can intentionally lock accounts (DoS), (2) Service accounts may need different policy, (3) MFA reduces brute force risk. Alternatives/additions: (1) Increasing delays between attempts, (2) CAPTCHA after failures, (3) Alert on failures, (4) MFA eliminates brute force concern. Lockout is basic password attack protection."
  },
  {
    id: 10,
    question: "A user's account is configured so they can only log in Monday through Friday between 8 AM and 6 PM. What type of restriction is this?",
    options: [
      "Geographic restriction",
      "Time-based access restriction - limiting when access is permitted",
      "Role restriction",
      "Biometric restriction"
    ],
    correct: 1,
    explanation: "TIME-BASED ACCESS RESTRICTION limits when users can authenticate or access resources. Time-based restrictions: (1) Login hours (business hours only), (2) Session limits (auto-logout after hours), (3) Scheduled access (contractors for specific project). Use cases: (1) Employees shouldn't need access at 3 AM, (2) Contractors limited to project hours, (3) Shared accounts for specific shifts, (4) Detect anomalies (login at unusual time). Combined with: (1) Location restrictions, (2) Role restrictions, (3) Device restrictions. ABAC example: access if time=businessHours AND location=office. Benefits: (1) Reduces off-hours attack window, (2) Anomaly detection, (3) Contractor control. Challenges: legitimate off-hours needs (traveling, emergencies) require exception process."
  },
  {
    id: 11,
    question: "An organization allows personal devices to access email but prevents them from accessing financial systems. Different access levels are based on device type and ownership. What enables this?",
    options: [
      "Simple passwords",
      "Conditional access policies - access based on device and context",
      "No restrictions",
      "Physical tokens only"
    ],
    correct: 1,
    explanation: "CONDITIONAL ACCESS evaluates multiple factors (device, location, risk) to determine access level. Conditional access factors: (1) Device compliance (patched, managed), (2) Device ownership (corporate vs personal), (3) Location (office vs remote), (4) User risk (unusual behavior), (5) Application sensitivity. Policy examples: (1) Personal device = email only, (2) Unpatched device = limited access, (3) Unknown location = require MFA, (4) High-risk sign-in = block or step-up auth. Implementation: Azure AD Conditional Access, Okta, other identity providers. Benefits: (1) Risk-based access, (2) BYOD support with control, (3) Zero-trust enablement, (4) User convenience with security. Conditional access enables nuanced decisions beyond simple allow/deny."
  },
  {
    id: 12,
    question: "A highly classified project requires that users have BOTH appropriate security clearance AND direct assignment to the project to access materials. What concept is the project assignment representing?",
    options: [
      "Clearance only",
      "Need-to-know - additional restriction beyond general clearance",
      "Public access",
      "Open access"
    ],
    correct: 1,
    explanation: "NEED-TO-KNOW restricts access beyond clearance level - must have specific need to access information. Need-to-know components: (1) Clearance = general eligibility, (2) Need-to-know = specific access for role. Example: (1) Two people with Top Secret clearance, (2) Only one is on Project X, (3) Only project member can access Project X data, (4) Clearance alone insufficient. Why important: (1) Limits insider threat, (2) Compartmentalizes information, (3) Breach affects less, (4) Compliance requirement. Implementation: (1) Formal access approvals, (2) Documented need, (3) Regular review, (4) Removed when need ends. Often combined with MAC - clearance AND need-to-know both required. Even in non-classified environments, apply need-to-know: does this person need this access for their job?"
  },
  {
    id: 13,
    question: "A user has individual permissions plus permissions inherited from group memberships. When calculating actual access, which typically takes precedence?",
    options: [
      "Group permissions always",
      "Deny typically takes precedence - most restrictive usually wins",
      "Individual permissions always",
      "Random selection"
    ],
    correct: 1,
    explanation: "DENY typically takes precedence over allow - most restrictive permission usually wins. Permission inheritance: (1) User gets permissions from all group memberships, (2) Plus any individual permissions, (3) Permissions combine (cumulative), (4) DENY overrides ALLOW. Example (NTFS): (1) User in Group A (Allow Read), (2) User in Group B (Deny Read), (3) Effective = Deny (explicit deny wins). Why deny wins: (1) Fail-secure, (2) Explicit restriction honored, (3) Prevents accidental permission. Best practice: (1) Avoid explicit deny when possible (confusing), (2) Use group permissions not individual, (3) Document permission structure, (4) Regularly audit effective permissions. Effective permissions tools show actual access after inheritance."
  },
  {
    id: 14,
    question: "An organization implements just-in-time (JIT) access where administrators request elevated privileges, receive them for a limited time, and privileges are automatically revoked after. What does this eliminate?",
    options: [
      "All access",
      "Standing privileges - permanent admin access eliminated",
      "User accounts",
      "Passwords"
    ],
    correct: 1,
    explanation: "JIT ACCESS eliminates STANDING PRIVILEGES - no permanent admin access, only when needed. Standing privilege problem: (1) Admin always has access, (2) Credential theft = immediate admin access, (3) Lateral movement easy, (4) Insider threat window is always. JIT access: (1) No standing admin rights, (2) Request access when needed, (3) Approval (automated or manual), (4) Time-limited grant, (5) Automatic revocation. Benefits: (1) Reduced attack surface, (2) Credential theft less valuable, (3) Audit trail of privilege use, (4) Aligns with least privilege. Implementation: PAM solutions, Azure AD PIM, cloud provider JIT. Zero standing privilege (ZSP) is goal - all privileged access is JIT. Significantly reduces risk from compromised admin credentials."
  },
  {
    id: 15,
    question: "A system uses permission inheritance where subfolders automatically receive parent folder permissions unless explicitly overridden. What should an administrator be careful about?",
    options: [
      "Inheritance is always safe",
      "Broken inheritance and orphaned permissions causing access issues",
      "Inheritance improves security always",
      "No concerns with inheritance"
    ],
    correct: 1,
    explanation: "Permission INHERITANCE issues include broken inheritance, orphaned permissions, and unexpected access. Inheritance concepts: (1) Child objects inherit parent permissions, (2) Inheritance can be blocked, (3) Explicit permissions can override inherited. Problems: (1) BROKEN INHERITANCE - inconsistent permissions, hard to audit, (2) ORPHANED PERMISSIONS - changed parent doesn't affect children, (3) UNEXPECTED ACCESS - inheriting grants unintended access. Best practices: (1) Use inheritance when possible (simpler), (2) Minimize explicit/overridden permissions, (3) Document where inheritance broken, (4) Regular permission audits, (5) Test effective permissions. Troubleshooting: if access unexpected, check inheritance chain and explicit permissions. Tools exist to audit and visualize permission inheritance."
  }
];