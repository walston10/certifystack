export const lesson42Quiz = [
  {
    id: 1,
    question: "A company implements a security policy requiring employees to use their password, a security token, and a fingerprint scan to access sensitive systems. What type of authentication is this?",
    options: [
      "Single-factor authentication",
      "Two-factor authentication (2FA)",
      "Multi-factor authentication (MFA) using three factors",
      "Biometric authentication only"
    ],
    correct: 2,
    explanation: "This is multi-factor authentication using all three factor types: something you know (password), something you have (security token), and something you are (fingerprint). MFA with three factors provides stronger security than 2FA. Each factor type adds a layer - compromising one doesn't grant access. Two-factor uses only two types. This exceeds 2FA by using all three authentication factor categories."
  },
  {
    id: 2,
    question: "A new employee needs access to the company file server. Following the principle of least privilege, what level of access should they be granted?",
    options: [
      "Full administrative access to everything - easier to manage",
      "Read-only access to all files - they might need something later",
      "Only the minimum access required to perform their specific job duties",
      "Same access as their manager - they're in the same department"
    ],
    correct: 2,
    explanation: "The principle of least privilege means granting users only the minimum access rights necessary to perform their job functions - nothing more. This limits damage from compromised accounts, accidents, or insider threats. Don't grant excessive permissions 'just in case.' Administrative access should be rare. Department-wide access often exceeds individual needs. Start minimal; increase only when justified. This is a fundamental security principle."
  },
  {
    id: 3,
    question: "A company uses Active Directory for centralized user management. An employee transfers from Sales to Marketing. What should the IT administrator do regarding the user's account?",
    options: [
      "Delete the Sales account and create a new Marketing account",
      "Keep the Sales account and create an additional Marketing account",
      "Modify the existing account by removing Sales group memberships and adding Marketing groups",
      "Give the user administrator rights to manage their own access"
    ],
    correct: 2,
    explanation: "Modify the existing account by changing group memberships, permissions, and attributes. This maintains the user's profile, email history, and audit trail while updating access appropriately. Creating new accounts causes confusion and loses historical data. Multiple accounts violate security policies and complicate management. Users should never manage their own permissions. Active Directory's centralized model makes account updates efficient while maintaining security."
  },
  {
    id: 4,
    question: "A user needs to access multiple company systems: email, CRM, HR portal, and file shares. With Single Sign-On (SSO) implemented, what authentication experience do they have?",
    options: [
      "They must authenticate separately for each system with different passwords",
      "They authenticate once and gain access to all authorized systems without re-authenticating",
      "They must reset their password for each system daily",
      "They can only access one system at a time"
    ],
    correct: 1,
    explanation: "Single Sign-On (SSO) allows users to authenticate once and access multiple systems without re-entering credentials. After initial login, the SSO system provides authentication tokens to other services. This improves user experience (fewer passwords to remember), increases security (fewer passwords to manage/secure), and simplifies administration. Users don't need separate passwords for each system. Systems trust the SSO provider's authentication."
  },
  {
    id: 5,
    question: "An administrator is configuring a RADIUS server for wireless network authentication. What does RADIUS primarily provide?",
    options: [
      "Firewall protection",
      "Centralized Authentication, Authorization, and Accounting (AAA)",
      "Antivirus scanning",
      "Email filtering"
    ],
    correct: 1,
    explanation: "RADIUS (Remote Authentication Dial-In User Service) provides centralized AAA services: Authentication (verifying identity), Authorization (determining access rights), and Accounting (logging access). RADIUS is commonly used for wireless networks, VPNs, and network device management. It uses UDP ports 1812 (authentication) and 1813 (accounting). Firewalls, antivirus, and email filtering are separate security layers. RADIUS specializes in access control and audit logging."
  },
  {
    id: 6,
    question: "A user's account is configured as a Standard User in Windows 11. They try to install software but receive a UAC (User Account Control) prompt asking for administrator credentials. What is happening?",
    options: [
      "The user's account is corrupted",
      "UAC is protecting the system by requiring elevation to administrator privileges for the installation",
      "Windows is malfunctioning",
      "The software is incompatible with Windows 11"
    ],
    correct: 1,
    explanation: "UAC (User Account Control) prompts for elevation when standard users attempt actions requiring administrative privileges, like installing software or changing system settings. This implements least privilege - users operate with standard rights until elevation is needed. Standard users must provide administrator credentials; administrators just click 'Yes.' This prevents malware from making system changes without user awareness. UAC is a critical Windows security feature, not a malfunction."
  },
  {
    id: 7,
    question: "A company implements 802.1X port-based network access control on their switches. When a computer connects to the network, what happens?",
    options: [
      "The computer immediately gets network access without authentication",
      "The switch blocks all traffic until the computer authenticates via 802.1X",
      "The computer can only access the internet, not local resources",
      "The switch assigns a random IP address"
    ],
    correct: 1,
    explanation: "802.1X provides port-based network access control. When a device connects (the supplicant), the switch (the authenticator) blocks all traffic except 802.1X authentication until the device authenticates with the authentication server (typically RADIUS). After successful authentication, the port opens. This prevents unauthorized devices from accessing the network. Components: supplicant (client), authenticator (switch/AP), authentication server (RADIUS). This is enterprise-grade network security."
  },
  {
    id: 8,
    question: "An organization uses Kerberos for authentication in their Windows domain environment. What does a user receive after successfully authenticating that allows access to network resources?",
    options: [
      "A permanent password",
      "A Ticket Granting Ticket (TGT) from the Key Distribution Center",
      "A new user account for each resource",
      "Administrator privileges"
    ],
    correct: 1,
    explanation: "Kerberos uses ticket-based authentication. After successful login, the Key Distribution Center (KDC) issues a Ticket Granting Ticket (TGT). This TGT is then used to request service tickets for accessing resources without re-entering passwords. Kerberos provides mutual authentication (both client and server verify identities) and uses port 88. It's the default authentication protocol for Active Directory. Passwords aren't transmitted. Users don't get new accounts or automatic admin rights."
  },
  {
    id: 9,
    question: "A security administrator configures an Access Control List (ACL) on a router to block traffic from a specific IP address range. What security concept does this implement?",
    options: [
      "Authorization - controlling what the blocked IP range can access",
      "Authentication - verifying the identity of users",
      "Accounting - logging access attempts",
      "Encryption - protecting data in transit"
    ],
    correct: 0,
    explanation: "ACLs implement authorization by controlling what traffic is permitted or denied based on criteria like IP addresses, ports, or protocols. Authentication verifies identity (who you are). Authorization determines permissions (what you can do). Accounting logs actions. Encryption protects data. ACLs make authorization decisions: 'Is this source IP allowed to access this destination?' ACLs are fundamental to network security and appear on routers, firewalls, and file systems."
  },
  {
    id: 10,
    question: "A company wants to use LDAP to query their Active Directory for user information. What port does LDAP use by default?",
    options: [
      "389 for LDAP, 636 for LDAPS (LDAP over SSL)",
      "3389 for LDAP",
      "443 for LDAP",
      "1812 for LDAP"
    ],
    correct: 0,
    explanation: "LDAP (Lightweight Directory Access Protocol) uses port 389 for unencrypted connections. LDAPS (LDAP over SSL/TLS) uses port 636 for encrypted connections. LDAP queries directory services like Active Directory for user/group information. Always use LDAPS for production to protect credentials. Port 3389 is RDP. Port 443 is HTTPS. Port 1812 is RADIUS. LDAP is critical for enterprise identity management."
  },
  {
    id: 11,
    question: "An administrator creates security groups in Active Directory for different departments (Sales, HR, IT) and assigns permissions to the groups rather than individual users. What access control model is this?",
    options: [
      "Mandatory Access Control (MAC)",
      "Discretionary Access Control (DAC)",
      "Role-Based Access Control (RBAC)",
      "Rule-Based Access Control"
    ],
    correct: 2,
    explanation: "Role-Based Access Control (RBAC) assigns permissions to roles (groups) based on job functions, then adds users to appropriate roles. This simplifies management - instead of managing permissions for each user individually, you manage group memberships. Adding a user to 'Sales' group automatically grants appropriate permissions. MAC uses security labels/classifications. DAC allows owners to control access. RBAC is the standard for enterprise environments like Active Directory."
  },
  {
    id: 12,
    question: "A user receives a smartcard from their employer for building access and computer login. The smartcard contains a cryptographic certificate. What authentication factor does this represent?",
    options: [
      "Something you know",
      "Something you have",
      "Something you are",
      "Somewhere you are"
    ],
    correct: 1,
    explanation: "Smartcards represent 'something you have' - a physical object in your possession. Combined with a PIN ('something you know'), smartcards provide two-factor authentication. The card contains cryptographic keys/certificates for secure authentication. 'Something you know' is passwords/PINs. 'Something you are' is biometrics. 'Somewhere you are' is location-based (less common). Smartcards are common in high-security environments for physical and logical access."
  },
  {
    id: 13,
    question: "A company implements TACACS+ for network device management instead of RADIUS. What is a key advantage of TACACS+ over RADIUS?",
    options: [
      "TACACS+ is free while RADIUS requires licensing",
      "TACACS+ separates Authentication, Authorization, and Accounting functions and encrypts entire packets",
      "TACACS+ works over UDP while RADIUS requires TCP",
      "TACACS+ doesn't require passwords"
    ],
    correct: 1,
    explanation: "TACACS+ (Terminal Access Controller Access-Control System Plus) separates AAA functions (allowing more granular control) and encrypts the entire packet (RADIUS only encrypts passwords). TACACS+ uses TCP port 49 (more reliable than RADIUS's UDP). It's Cisco proprietary but free to implement. RADIUS is also free. TACACS+ is preferred for network device administration (routers, switches) while RADIUS is common for user authentication (wireless, VPN). Both require passwords."
  },
  {
    id: 14,
    question: "An organization implements a policy where users must change their passwords every 90 days, passwords must be at least 12 characters with complexity requirements, and users cannot reuse their last 10 passwords. What security concept is being enforced?",
    options: [
      "Password policy (part of account policy)",
      "Encryption policy",
      "Firewall rules",
      "Backup policy"
    ],
    correct: 0,
    explanation: "Password policies define rules for password creation and management: minimum length, complexity requirements (uppercase, lowercase, numbers, symbols), expiration periods, and password history (preventing reuse). These policies are typically enforced via Group Policy in Active Directory or local security policy. Strong password policies are fundamental to account security, reducing successful brute-force and dictionary attacks. They're part of overall account policies including lockout policies."
  },
  {
    id: 15,
    question: "A security administrator notices multiple failed login attempts to a user account from different IP addresses within minutes. The account locks automatically after 5 failed attempts. What security feature prevented further attempts?",
    options: [
      "Password complexity requirements",
      "Account lockout policy",
      "Firewall blocking",
      "Encryption"
    ],
    correct: 1,
    explanation: "Account lockout policies automatically disable accounts after a specified number of failed login attempts (threshold), preventing brute-force password attacks. The account remains locked for a duration (lockout duration) or until an administrator unlocks it. Best practices: 5-10 attempt threshold, 15-30 minute lockout. This protects against automated password guessing. Password complexity makes guessing harder but doesn't stop attempts. Firewalls block network traffic, not authentication. Encryption protects data, not login attempts."
  }
];