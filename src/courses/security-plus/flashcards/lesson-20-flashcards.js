// Lesson 20: Access Control Models
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson20Flashcards = [
  {
    id: 1,
    front: "What is Access Control?",
    back: "Methods to regulate who can access resources and what they can do. Ensures only authorized users access authorized resources. Foundation of security."
  },
  {
    id: 2,
    front: "What is DAC (Discretionary Access Control)?",
    back: "Resource owner controls access permissions. Owner decides who can access their resources. Flexible but less secure. Used in Windows NTFS, Linux file permissions."
  },
  {
    id: 3,
    front: "What is the main weakness of DAC?",
    back: "Owners may grant excessive permissions. No central control. Users can share access inappropriately. Relies on user judgment."
  },
  {
    id: 4,
    front: "What is MAC (Mandatory Access Control)?",
    back: "System-enforced access based on labels and clearances. Users cannot change permissions. Highly secure, used in government/military. Rigid and complex."
  },
  {
    id: 5,
    front: "How does MAC use labels?",
    back: "Resources have classification labels (Secret, Top Secret). Users have clearance levels. System compares clearance to classification. Access only if clearance >= classification."
  },
  {
    id: 6,
    front: "What are MAC's main characteristics?",
    back: "Centrally controlled, system-enforced, uses labels/clearances, users can't override. No discretion - system makes all access decisions."
  },
  {
    id: 7,
    front: "DAC vs MAC?",
    back: "DAC: owner controls, flexible, less secure. MAC: system controls, rigid, highly secure. DAC for business, MAC for classified environments."
  },
  {
    id: 8,
    front: "What is RBAC (Role-Based Access Control)?",
    back: "Access based on job role, not individual identity. Users assigned to roles, roles have permissions. Most common enterprise model. Simplifies administration."
  },
  {
    id: 9,
    front: "How does RBAC work?",
    back: "Define roles (HR Manager, Developer). Assign permissions to roles. Assign users to roles. User gets role's permissions. Change role = change all permissions."
  },
  {
    id: 10,
    front: "What are RBAC's advantages?",
    back: "Easier administration, scales well, aligns with job functions, simplifies auditing, reduces errors. Change one role affects all assigned users."
  },
  {
    id: 11,
    front: "What is ABAC (Attribute-Based Access Control)?",
    back: "Access decisions based on attributes of user, resource, environment, and action. Very granular. Uses policies like 'if user.department=HR and time=business_hours then allow.'"
  },
  {
    id: 12,
    front: "What attributes can ABAC evaluate?",
    back: "User attributes (department, clearance, role), Resource attributes (classification, owner), Environment (time, location, device), Action (read, write, delete)."
  },
  {
    id: 13,
    front: "RBAC vs ABAC?",
    back: "RBAC: role-based, simpler, good for static organizations. ABAC: attribute-based, more granular, handles complex scenarios. ABAC can include role as one attribute."
  },
  {
    id: 14,
    front: "What is Rule-based Access Control?",
    back: "Access determined by predefined rules/conditions. If-then logic. Not user-specific. Example: firewall rules. 'If source=10.0.0.0/8 and port=80 then allow.'"
  },
  {
    id: 15,
    front: "Rule-based vs Role-based?",
    back: "Rule-based: conditions/logic determine access, not user-specific. Role-based: user's role determines access. Firewall uses rules, HR system uses roles."
  },
  {
    id: 16,
    front: "What is Implicit Deny?",
    back: "If no rule explicitly permits access, access is denied. Default deny. Fundamental security principle. Applied in firewalls, ACLs, access control systems."
  },
  {
    id: 17,
    front: "What is Explicit Allow/Deny?",
    back: "Specifically stated permission or denial. Takes precedence in rule evaluation. Explicit deny usually overrides explicit allow. Clear, documented access decision."
  },
  {
    id: 18,
    front: "What is Permission Inheritance?",
    back: "Child objects inherit permissions from parent. Folder permissions flow to files inside. Simplifies administration. Can be blocked or overridden when needed."
  },
  {
    id: 19,
    front: "What are Effective Permissions?",
    back: "Actual permissions after combining all sources - direct, inherited, group memberships. What user can actually do. May differ from individual permission entries."
  },
  {
    id: 20,
    front: "What is a User Account?",
    back: "Individual identity for a person. Unique credentials, personal permissions. Accountable to specific human. Should not be shared."
  },
  {
    id: 21,
    front: "What is a Service Account?",
    back: "Account used by applications or services, not humans. Runs background processes. Should have minimal privileges. Requires special management and monitoring."
  },
  {
    id: 22,
    front: "Why are Shared/Generic accounts bad?",
    back: "No individual accountability. Can't track who did what. Password sharing issues. Violates security best practices. Avoid whenever possible."
  },
  {
    id: 23,
    front: "What is a Guest Account?",
    back: "Limited access account for temporary/anonymous users. Minimal permissions. Should be disabled if not needed. Security risk if enabled unnecessarily."
  },
  {
    id: 24,
    front: "What is a Privileged Account?",
    back: "Account with elevated permissions (admin, root). High-risk target. Requires extra protection - MFA, monitoring, PAM. Separate from daily-use accounts."
  },
  {
    id: 25,
    front: "What is Password Complexity?",
    back: "Requirements for password strength. Minimum length, character types (upper, lower, number, special). Increases difficulty of guessing/cracking."
  },
  {
    id: 26,
    front: "What is Password History?",
    back: "Prevents reusing recent passwords. System remembers N previous passwords. Forces users to create new passwords. Typical: remember 10-24 passwords."
  },
  {
    id: 27,
    front: "What is Account Lockout?",
    back: "Disabling account after failed login attempts. Prevents brute force attacks. Typical: lockout after 3-5 failures. Risk of DoS through intentional lockouts."
  },
  {
    id: 28,
    front: "What is Password Expiration?",
    back: "Requiring password changes at intervals. Traditional: 90 days. Modern guidance: don't expire unless compromised. Forced changes lead to weaker passwords."
  },
  {
    id: 29,
    front: "What are Time-based Restrictions?",
    back: "Limiting when accounts can authenticate. Example: only during business hours. Prevents after-hours access. Adds context to access control."
  },
  {
    id: 30,
    front: "What are Geolocation Restrictions?",
    back: "Limiting where accounts can authenticate from. Block logins from unexpected countries. Allow only from office locations. Adds location context to access control."
  }
];