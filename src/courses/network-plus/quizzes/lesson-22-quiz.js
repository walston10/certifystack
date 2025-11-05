// Quiz for Lesson 22: Authentication Methods

export const lesson22Quiz = [
  {
    id: 1,
    question: "A company implements multi-factor authentication requiring employees to provide a password and a code from their smartphone app. What authentication factors are being used?",
    options: [
      "Two instances of 'something you know' (single factor)",
      "Something you know (password) and something you have (smartphone/token), providing true multi-factor authentication",
      "Something you are (biometric) and something you know",
      "Only one factor since both are digital"
    ],
    correct: 1,
    explanation: "Authentication factors: 1) Something you know (password, PIN, security question), 2) Something you have (phone, token, smart card, key), 3) Something you are (biometric - fingerprint, face, iris). Multi-factor authentication (MFA) requires factors from different categories. Password + token code = true MFA (two different factor types). Password + security question = single factor (both 'something you know'). MFA significantly increases security—attacker needs to compromise multiple independent factors."
  },
  {
    id: 2,
    question: "An enterprise wireless network uses 802.1X authentication with a RADIUS server. When a user connects, their device must authenticate before gaining network access. What is the role of the wireless access point in this authentication process?",
    options: [
      "The AP makes the authentication decision and grants/denies access",
      "The AP acts as the authenticator, forwarding authentication requests between the supplicant (client) and authentication server (RADIUS)",
      "The AP stores all usernames and passwords locally",
      "The AP is not involved in 802.1X authentication"
    ],
    correct: 1,
    explanation: "802.1X components: 1) Supplicant (client device requesting access), 2) Authenticator (network access device - AP, switch - enforces authentication), 3) Authentication server (RADIUS/TACACS+ - makes authentication decision). Process: client sends credentials → AP forwards to RADIUS → RADIUS validates → AP grants/denies port access based on RADIUS response. AP doesn't make authentication decisions or store credentials—it's a pass-through enforcement point. This centralizes authentication (single RADIUS server for all APs/switches) and provides consistent policy enforcement."
  },
  {
    id: 3,
    question: "A company's RADIUS server authenticates wireless users and also tracks connection duration and bandwidth usage for billing purposes. What AAA function is being used for the tracking?",
    options: [
      "Authentication - verifying user identity",
      "Authorization - granting permissions",
      "Accounting - logging user activity for auditing and billing",
      "Administration - managing user accounts"
    ],
    correct: 2,
    explanation: "AAA framework: 1) Authentication (who are you? - verify identity), 2) Authorization (what can you do? - grant permissions/access levels), 3) Accounting (what did you do? - log activity, session duration, resources used). RADIUS provides all three. Accounting records: login/logout times, data transferred, session duration, commands executed. Uses: billing (ISPs), security auditing (compliance), troubleshooting (who accessed what when), capacity planning. Accounting data sent as RADIUS accounting packets (separate from authentication). TACACS+ separates AAA functions; RADIUS combines authentication/authorization."
  },
  {
    id: 4,
    question: "A network engineer needs to configure centralized authentication for Cisco routers and switches with separate control over authentication, authorization, and accounting. The solution must encrypt the entire packet payload. Which protocol should be implemented?",
    options: [
      "RADIUS - encrypts only passwords, not full packet",
      "TACACS+ - encrypts entire packet payload and separates AAA functions",
      "Kerberos - ticket-based authentication",
      "LDAP - directory service protocol"
    ],
    correct: 1,
    explanation: "TACACS+ vs RADIUS: TACACS+ (TCP 49, Cisco proprietary): 1) Encrypts entire packet, 2) Separates authentication/authorization/accounting (granular control), 3) Better for device administration (routers, switches), 4) Per-command authorization possible. RADIUS (UDP 1812/1813, open standard): 1) Encrypts only password field, 2) Combines authentication/authorization, 3) Better for network access (VPN, wireless, 802.1X), 4) Widely supported. Choice: TACACS+ for network device administration with full encryption; RADIUS for user network access. Both provide centralized AAA, but TACACS+ offers stronger encryption and more granular control."
  },
  {
    id: 5,
    question: "A Windows Active Directory domain uses Kerberos for authentication. When a user logs in, they receive a Ticket Granting Ticket (TGT) from the Key Distribution Center (KDC). What is the purpose of the TGT?",
    options: [
      "Direct access to all network resources immediately",
      "The TGT allows the user to request service tickets for specific resources without re-entering credentials each time",
      "The TGT is the user's encrypted password",
      "The TGT grants administrative privileges"
    ],
    correct: 1,
    explanation: "Kerberos authentication process: 1) User logs in → KDC issues TGT (valid for session, typically 10 hours), 2) User accesses resource (file server) → presents TGT to KDC, 3) KDC issues service ticket for that resource, 4) User presents service ticket to resource → access granted. Benefits: Single Sign-On (SSO) - authenticate once, access many resources; no password transmission after initial login; mutual authentication (client and server verify each other); tickets have expiration (time-limited access). Port 88. TGT is like a 'master ticket' for obtaining specific service tickets without re-authenticating."
  },
  {
    id: 6,
    question: "An organization implements Single Sign-On (SSO) using SAML for cloud applications. Users authenticate once to their identity provider and can access multiple SaaS applications without re-entering credentials. What is the primary security concern with SSO?",
    options: [
      "SSO is more secure than individual passwords for each application",
      "If the SSO identity provider or user's credentials are compromised, an attacker gains access to all connected applications",
      "SSO eliminates the need for any security measures",
      "SSO is too complex for attackers to exploit"
    ],
    correct: 1,
    explanation: "SSO benefits: convenience (one login), reduced password fatigue (fewer passwords to remember/manage), centralized control, better password policies (users maintain fewer passwords). SSO risks: single point of failure—compromised SSO credentials = access to everything. Mitigation: 1) Strong MFA on SSO (critical - protects all apps), 2) Session timeouts, 3) Continuous authentication (behavior monitoring), 4) Privileged access management, 5) Zero Trust principles. SSO protocols: SAML (XML-based, enterprise), OAuth 2.0 (authorization delegation), OpenID Connect (authentication layer on OAuth). SSO reduces password sprawl but increases compromise impact—must protect SSO credentials rigorously."
  },
  {
    id: 7,
    question: "A company deploys LDAP (Lightweight Directory Access Protocol) for centralized user directory services. Network security monitoring detects LDAP queries and responses transmitted in clear text over port 389. What security risk does this create?",
    options: [
      "No risk since LDAP is inherently secure",
      "Credentials and directory information could be intercepted via network sniffing since LDAP traffic is unencrypted",
      "LDAP always uses encryption by default",
      "Port 389 is automatically secure"
    ],
    correct: 1,
    explanation: "LDAP (port 389) transmits in clear text by default—credentials, user information, group memberships visible to network sniffers. LDAPS (LDAP over SSL, port 636) encrypts traffic using SSL/TLS. StartTLS can upgrade LDAP connection to encrypted. LDAP uses: Active Directory queries, authentication backend, directory services (user/group management), address books. Security measures: 1) Use LDAPS (port 636) always, 2) Certificate validation, 3) Restrict LDAP access (firewall), 4) Bind authentication (not anonymous), 5) Monitor LDAP queries. Similar issue: older protocols (Telnet, FTP, HTTP) transmit clear text—always use encrypted versions (SSH, SFTP, HTTPS, LDAPS)."
  },
  {
    id: 8,
    question: "An 802.1X deployment uses EAP-TLS for wireless authentication. What makes EAP-TLS the most secure EAP method?",
    options: [
      "EAP-TLS uses only passwords for authentication",
      "EAP-TLS requires digital certificates on both client and server, providing mutual authentication without transmitting passwords",
      "EAP-TLS is the fastest authentication method",
      "EAP-TLS doesn't require any configuration"
    ],
    correct: 1,
    explanation: "EAP methods for 802.1X: 1) EAP-TLS (most secure): requires certificates on both client and server, mutual authentication, no password transmission, PKI overhead. 2) EAP-TTLS: server certificate, client uses password in encrypted tunnel, easier deployment. 3) PEAP: similar to EAP-TTLS, Microsoft support (PEAP-MSCHAPv2), server certificate only. 4) EAP-FAST: Cisco, uses PACs instead of certificates. EAP-TLS advantages: strongest security (certificate-based), resistant to password attacks, mutual authentication. Disadvantages: complex deployment (certificate management), PKI required. Enterprise wireless typically uses PEAP (balance security/ease) or EAP-TLS (maximum security)."
  },
  {
    id: 9,
    question: "A cloud application uses OAuth 2.0 to allow users to grant a mobile app access to their Google Drive files without sharing their Google password with the app. What does OAuth 2.0 provide?",
    options: [
      "OAuth provides authentication to verify user identity",
      "OAuth provides authorization - delegated access allowing third-party applications limited access to resources without sharing credentials",
      "OAuth encrypts all data transfers",
      "OAuth replaces passwords entirely"
    ],
    correct: 1,
    explanation: "OAuth 2.0 is authorization framework (not authentication): allows applications to obtain limited access to user resources without sharing passwords. Example: mobile app accesses Google Drive via OAuth token, not password. Flow: 1) User grants app permission, 2) Authorization server issues access token, 3) App uses token to access resources, 4) Token has scope (limited permissions) and expiration. Benefits: no password sharing, revocable access, limited scope. OAuth vs OpenID Connect: OAuth = authorization ('what can you access'), OIDC = authentication layer on OAuth ('who are you'). Common use: 'Sign in with Google/Facebook'—that's OIDC, not pure OAuth."
  },
  {
    id: 10,
    question: "A security audit reveals that network administrators share a single 'admin' account with the password written on a sticky note. What security principles are being violated?",
    options: [
      "Principle of least privilege only",
      "Multiple principles: unique credentials (accountability), secure credential storage, least privilege, and separation of duties",
      "No violations if the password is complex",
      "Only violates the password complexity requirement"
    ],
    correct: 1,
    explanation: "Shared account violations: 1) No accountability (can't determine who performed action), 2) No audit trail (actions attributed to generic account), 3) Difficult to revoke access (departing employee knows password—must change for everyone), 4) Password sharing culture (weak security posture), 5) Written password (physical security failure). Best practices: 1) Unique accounts per person, 2) Strong authentication (MFA), 3) Password managers (no sticky notes), 4) Role-based access (not shared admin), 5) Logging/auditing (who did what), 6) Principle of least privilege, 7) Regular access reviews. Shared accounts are compliance violations in most frameworks (PCI-DSS, HIPAA, SOX)."
  },
  {
    id: 11,
    question: "An organization implements RADIUS authentication for VPN access. The RADIUS server queries Active Directory via LDAP to verify user credentials. If the RADIUS server fails, what happens to VPN authentication?",
    options: [
      "VPN automatically allows all connections",
      "VPN authentication fails - RADIUS server is a single point of failure unless redundancy is implemented",
      "VPN switches to local authentication automatically",
      "Active Directory handles VPN authentication directly"
    ],
    correct: 1,
    explanation: "Centralized authentication single point of failure: if RADIUS server fails, authentication stops (unless failover configured). High availability solutions: 1) Multiple RADIUS servers (primary/secondary configuration), 2) Load balancing across RADIUS servers, 3) RADIUS server clustering, 4) Fallback to local authentication (risk - different credentials, emergency only). RADIUS typically queries backend (Active Directory, LDAP) for actual credential verification—RADIUS acts as AAA proxy. Complete failure scenario: RADIUS server down AND backend (AD) down = no authentication possible. Redundancy is critical for authentication infrastructure—affects all services depending on it (VPN, wireless, network access)."
  },
  {
    id: 12,
    question: "A company requires biometric authentication combined with a PIN for access to secure data centers. An attacker steals an employee's fingerprint data from the biometric system database. Why doesn't the stolen fingerprint alone grant access?",
    options: [
      "Fingerprints cannot be stolen from databases",
      "The system requires both biometric (something you are) and PIN (something you know) - multi-factor authentication prevents single-factor compromise",
      "Stolen fingerprints automatically expire",
      "The attacker would need the employee's username"
    ],
    correct: 1,
    explanation: "Multi-factor authentication defense in depth: even if one factor is compromised, others protect access. Example: stolen fingerprint + unknown PIN = no access. Stolen password + no token = no access. MFA dramatically increases security—attacker must compromise multiple independent factors. Important: factors must be truly independent (password + security question = both 'something you know', weak). Biometric concerns: 1) Cannot be changed if compromised (unlike passwords), 2) Requires secure storage (encrypted templates), 3) Liveness detection (prevent fake fingerprints). MFA implementations: password + SMS code, password + authenticator app, smart card + PIN, biometric + password."
  },
  {
    id: 13,
    question: "An organization uses TACACS+ for device administration. Network administrators can log into switches and routers, but TACACS+ controls which commands they can execute based on their role. What AAA function enables this granular control?",
    options: [
      "Authentication - verifying identity",
      "Accounting - logging commands executed",
      "Authorization - determining permitted actions and commands per user role",
      "Administration - creating user accounts"
    ],
    correct: 2,
    explanation: "Authorization in TACACS+: after authentication, determines what user can do—which commands, privilege levels, access to specific devices. TACACS+ command authorization: each command checked against authorization policy before execution. Example: junior admin can run 'show' commands but not 'configure'. Benefits: 1) Granular control (per-command authorization), 2) Separation of duties (different admins, different permissions), 3) Least privilege (minimum necessary access), 4) Audit trail (what was attempted/executed). RADIUS combines authentication/authorization (less granular). TACACS+ separation of AAA functions enables: authenticate with one source, authorize from another, account to third location—flexibility for complex environments."
  },
  {
    id: 14,
    question: "A web application implements certificate-based authentication for API access. Clients must present a valid X.509 certificate to authenticate. What authentication factor does certificate-based authentication represent?",
    options: [
      "Something you know (password)",
      "Something you are (biometric)",
      "Something you have (the private key/certificate), often combined with 'something you know' if certificate is password-protected",
      "Location-based authentication"
    ],
    correct: 2,
    explanation: "Certificate-based authentication uses public key cryptography: client has certificate with private key, server has public key or trusts CA. Authentication: client proves possession of private key (can decrypt/sign). Factor: 'something you have' (private key/certificate). Often combined: certificate file + password protecting private key = two-factor. Use cases: 1) Client VPN authentication, 2) API authentication, 3) Wireless (EAP-TLS), 4) SSH key authentication, 5) Smart cards. Benefits: strong authentication (cryptographic), no password transmission, mutual authentication possible. Challenges: certificate management (issuance, renewal, revocation), PKI infrastructure required, key protection critical."
  },
  {
    id: 15,
    question: "A company implements local authentication on network devices as a backup to their primary TACACS+ server. During a network outage that isolates devices from the TACACS+ server, administrators successfully log in using local credentials. What is the security risk of this fallback configuration?",
    options: [
      "No risk since it provides necessary backup access",
      "Local credentials may differ from centralized credentials, potentially using weaker passwords, and lack centralized logging/auditing",
      "Local authentication is always more secure than TACACS+",
      "Local credentials automatically sync with TACACS+"
    ],
    correct: 1,
    explanation: "Local authentication as fallback: pros: works during network/server failure, emergency access, independence from authentication infrastructure. Cons: 1) Credential drift (local passwords differ from centralized), 2) Weak passwords (less policy enforcement), 3) Shared accounts common, 4) No centralized logging (actions not audited), 5) Difficult to revoke (must change on each device), 6) Scaling challenges (password changes require device-by-device updates). Best practices: 1) Strong local passwords, 2) Different from centralized (prevent same credential compromise), 3) Emergency use only, 4) Regular audits, 5) Document local credentials securely, 6) Consider: no fallback (stricter security) vs fallback (availability). Trade-off between security and availability."
  }
];

// Export for use in quiz component
export default lesson22Quiz;