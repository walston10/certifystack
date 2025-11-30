export const lesson42Flashcards = [
  {
    id: 1,
    front: "What are the three authentication factors?",
    back: "Something you know (password, PIN), something you have (smart card, token, phone), something you are (biometrics - fingerprint, face, retina). Combining multiple factors = multi-factor authentication (MFA)."
  },
  {
    id: 2,
    front: "What is multi-factor authentication (MFA)?",
    back: "Requiring two or more authentication factors to verify identity. Example: password (know) + code from phone (have). More secure than single factor. Also called two-factor authentication (2FA) when using exactly two factors."
  },
  {
    id: 3,
    front: "What are examples of 'something you know' authentication?",
    back: "Password, PIN (Personal Identification Number), passphrase, security questions, patterns. Most common but weakest alone - can be guessed, stolen, shared. Should be combined with other factors."
  },
  {
    id: 4,
    front: "What are examples of 'something you have' authentication?",
    back: "Smart card, hardware token (RSA SecurID), phone (SMS/app codes), key fob, security key (YubiKey), email access (verification codes). Physical possession required - harder to steal remotely."
  },
  {
    id: 5,
    front: "What are examples of 'something you are' authentication?",
    back: "Fingerprint, facial recognition, iris scan, retinal scan, voice recognition, palm vein patterns, gait analysis. Biometrics - unique to individual, can't be shared/forgotten. Most secure but expensive."
  },
  {
    id: 6,
    front: "What is Single Sign-On (SSO)?",
    back: "Log in once, access multiple applications without re-authenticating. User convenience, reduced password fatigue. Example: Microsoft account for Office, OneDrive, Teams. Uses protocols like SAML, OAuth. Risk: one compromise affects all."
  },
  {
    id: 7,
    front: "What is RADIUS and what is it used for?",
    back: "Remote Authentication Dial-In User Service - centralized AAA (Authentication, Authorization, Accounting) server. Ports: UDP 1812 (auth), 1813 (accounting). Common for Wi-Fi (WPA2/3 Enterprise), VPN authentication. Client-server protocol."
  },
  {
    id: 8,
    front: "What does AAA stand for in RADIUS/TACACS+?",
    back: "Authentication (verify identity), Authorization (what they can access), Accounting (track usage/activity). Three security functions managed centrally. Logging who did what, when, where. Essential for auditing and compliance."
  },
  {
    id: 9,
    front: "What is TACACS+ and how does it differ from RADIUS?",
    back: "Terminal Access Controller Access-Control System Plus - Cisco proprietary. Uses TCP port 49, separates AAA functions (RADIUS combines auth/authorization), encrypts entire packet (RADIUS only password). Better security, mainly network device management."
  },
  {
    id: 10,
    front: "What are the key differences between RADIUS and TACACS+?",
    back: "RADIUS: UDP 1812/1813, encrypts password only, combines auth/authorization, open standard, Wi-Fi/VPN. TACACS+: TCP 49, encrypts entire packet, separates AAA, Cisco proprietary, network device admin. Both centralize authentication."
  },
  {
    id: 11,
    front: "What is Kerberos authentication?",
    back: "Ticket-based authentication protocol using Key Distribution Center (KDC). Port 88. Mutual authentication (client and server verify each other). Uses tickets (TGT - Ticket Granting Ticket). Active Directory default. Time-sensitive (requires clock sync)."
  },
  {
    id: 12,
    front: "How does Kerberos work?",
    back: "User authenticates to KDC → receives TGT (Ticket Granting Ticket) → presents TGT to access services → receives service ticket → accesses resource. Tickets time-limited, encrypted. Prevents password transmission over network."
  },
  {
    id: 13,
    front: "What is LDAP and LDAPS?",
    back: "Lightweight Directory Access Protocol - queries/modifies directory services (Active Directory). LDAP port 389 (unencrypted). LDAPS port 636 (SSL/TLS encrypted). Used for centralized user management, authentication. Hierarchical directory structure."
  },
  {
    id: 14,
    front: "What is the difference between LDAP and LDAPS?",
    back: "LDAP: port 389, unencrypted, credentials sent in clear text, security risk. LDAPS: port 636, SSL/TLS encryption, credentials protected. Always use LDAPS for security. Both query Active Directory/directory services."
  },
  {
    id: 15,
    front: "What is SAML?",
    back: "Security Assertion Markup Language - XML-based standard for SSO. Exchanges authentication/authorization data between identity provider (IdP) and service provider (SP). Common for web applications, cloud services. Enterprise SSO solution."
  },
  {
    id: 16,
    front: "What is OAuth?",
    back: "Open Authorization - delegated authorization framework. Allows third-party apps limited access without sharing passwords. Example: 'Sign in with Google/Facebook'. Grants tokens for specific permissions/time. NOT authentication protocol (that's OpenID Connect)."
  },
  {
    id: 17,
    front: "What is OpenID Connect?",
    back: "Authentication layer on top of OAuth 2.0. Verifies user identity for applications. Example: 'Sign in with Google' - Google authenticates, app gets identity token. Combines authentication (OpenID) with authorization (OAuth)."
  },
  {
    id: 18,
    front: "What is the difference between local and centralized authentication?",
    back: "Local: credentials stored on individual computer, separate accounts per system, workgroup model. Centralized: credentials on central server (Active Directory), single account for all resources, domain model. Centralized better for enterprises."
  },
  {
    id: 19,
    front: "What is 802.1X and when is it used?",
    back: "Port-based network access control. Three components: supplicant (client), authenticator (switch/AP), authentication server (RADIUS). Common for WPA2/3 Enterprise Wi-Fi, wired network security. Requires authentication before network access."
  },
  {
    id: 20,
    front: "What are the three components of 802.1X?",
    back: "Supplicant (client device requesting access), Authenticator (switch or wireless AP controlling port), Authentication Server (RADIUS server verifying credentials). Client authenticates through authenticator to server."
  },
  {
    id: 21,
    front: "What is EAP (Extensible Authentication Protocol)?",
    back: "Framework for authentication methods used with 802.1X. Not an authentication method itself - provides framework. Variants: EAP-TLS, EAP-TTLS, PEAP, EAP-FAST. Used with Wi-Fi Enterprise, wired 802.1X."
  },
  {
    id: 22,
    front: "What is the principle of least privilege?",
    back: "Users given minimum permissions needed for their job, nothing more. Reduces damage from compromised accounts, accidents, insider threats. Example: accountant gets accounting system access, not server admin rights."
  },
  {
    id: 23,
    front: "What are standard user accounts?",
    back: "Limited permissions - install approved software, change own settings, access own files. Cannot modify system settings, install drivers, access other users' files. Default account type for security. Most users should be standard."
  },
  {
    id: 24,
    front: "What are administrator accounts?",
    back: "Full system control - install software/drivers, modify system settings, access all files, create/delete users, change security settings. Use only when necessary. Don't browse/email as admin. Separate admin account for IT tasks."
  },
  {
    id: 25,
    front: "What are guest accounts?",
    back: "Temporary access for visitors, limited permissions, no password required (can set one). Disabled by default in modern Windows. Use for public computers, temporary access. Minimal privileges - can't install software or change settings."
  },
  {
    id: 26,
    front: "What are power user accounts?",
    back: "Legacy Windows concept - between standard and administrator. More privileges than standard, less than admin. Largely obsolete in modern Windows. Use administrator or standard instead. Still exists but deprecated."
  },
  {
    id: 27,
    front: "What are Access Control Lists (ACLs)?",
    back: "Permissions attached to resources (files, folders, printers) specifying who can access and what they can do. Each entry: user/group and permission level (Read, Write, Modify, Full Control). Most restrictive permission applies."
  },
  {
    id: 28,
    front: "What is Active Directory?",
    back: "Microsoft's directory service for domain networks. Centralized user/computer management, Group Policy, authentication. Stores objects (users, computers, groups) in hierarchical structure. Domain controller hosts AD database. Enterprise authentication."
  },
  {
    id: 29,
    front: "What are domain policies in Active Directory?",
    back: "Group Policy settings applied to domain users/computers. Control: password requirements, software installation, desktop settings, security configurations. Centrally managed, automatically applied. Override local policies. Require Pro/Enterprise Windows."
  },
  {
    id: 30,
    front: "What is an authenticator app and how does it work?",
    back: "Mobile app generating time-based one-time passwords (TOTP) for MFA. Examples: Microsoft Authenticator, Google Authenticator, Authy. Generates 6-digit codes every 30 seconds. More secure than SMS. Works offline after setup."
  }
];