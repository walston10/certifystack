// Flashcards for Lesson 22: Authentication Methods

export const lesson22Flashcards = [
  {
    id: 1,
    front: "What are the three authentication factors?",
    back: "Something you KNOW: password, PIN, passphrase, security questions. Something you HAVE: token, smart card, phone, certificate. Something you ARE: biometrics (fingerprint, retina, face, voice). Single factor: one type only. Multi-factor: combines 2+ types. Two passwords = NOT multi-factor (both 'something you know'). MFA significantly more secure than single factor."
  },
  {
    id: 2,
    front: "What is Multi-Factor Authentication (MFA/2FA)?",
    back: "MFA requires two or more authentication factors from different categories. 2FA: two factors (most common). Common combinations: password + token, password + fingerprint, card + PIN. Why: compromising one factor doesn't grant access. Significantly reduces: password breaches, phishing, credential theft. Industry best practice. Example: ATM card (have) + PIN (know)."
  },
  {
    id: 3,
    front: "What is Single Sign-On (SSO)?",
    back: "SSO allows users to authenticate once and access multiple applications without re-entering credentials. Benefits: better user experience, fewer passwords to remember, centralized access control, reduced help desk calls. Risks: single compromise grants access to everything. Implementations: Kerberos, SAML, OAuth/OIDC. Enterprise feature. Often combined with MFA for security."
  },
  {
    id: 4,
    front: "What is RADIUS (Remote Authentication Dial-In User Service)?",
    back: "RADIUS is centralized AAA protocol (Authentication, Authorization, Accounting). Uses: UDP ports 1812 (auth), 1813 (accounting). Client-server model: network device (client) forwards credentials to RADIUS server. Common use: wireless (802.1X), VPN, network access. Open standard (RFC 2865). Password encrypted but not entire packet. Widely deployed."
  },
  {
    id: 5,
    front: "What are the three A's in AAA?",
    back: "Authentication: verify identity (who are you?). Authorization: determine permissions (what can you do?). Accounting: track usage (what did you do?). AAA servers (RADIUS, TACACS+) provide all three. Authentication first, then authorization, accounting continuous. Centralized control vs local device configs. Critical for: audit trails, compliance, security, billing."
  },
  {
    id: 6,
    front: "What is TACACS+ (Terminal Access Controller Access-Control System Plus)?",
    back: "TACACS+ is Cisco proprietary AAA protocol. Uses: TCP port 49. Key difference from RADIUS: separates AAA functions (can auth without accounting), encrypts entire packet (more secure). Best for: device administration (switches, routers), command authorization (per-command control). Enterprise Cisco networks. TACACS+ replaces older TACACS and XTACACS."
  },
  {
    id: 7,
    front: "Compare RADIUS vs TACACS+",
    back: "RADIUS: open standard, UDP, encrypts password only, combines auth+authorization, common for network access (WiFi, VPN). TACACS+: Cisco proprietary, TCP, encrypts entire packet, separates AAA, better for device admin. Choose: RADIUS for multi-vendor/user access, TACACS+ for Cisco device management. Both are AAA protocols but different use cases. Modern networks often use both."
  },
  {
    id: 8,
    front: "What is Kerberos?",
    back: "Kerberos is ticket-based authentication protocol using symmetric encryption. Port: 88 (TCP/UDP). Components: KDC (Key Distribution Center - has AS + TGS), client, service. Process: get TGT from AS, use TGT to get service ticket from TGS, present service ticket to access service. Benefits: mutual authentication, SSO, no password sent over network. Used by: Active Directory, MIT. Named after three-headed dog."
  },
  {
    id: 9,
    front: "What is the Kerberos authentication process?",
    back: "1) User logs in, client requests TGT from AS (Authentication Server). 2) AS verifies credentials, issues TGT (Ticket Granting Ticket) encrypted with user's password hash. 3) Client uses TGT to request service ticket from TGS (Ticket Granting Server). 4) TGS issues service ticket. 5) Client presents service ticket to access service. Tickets are time-limited. No passwords transmitted after initial auth."
  },
  {
    id: 10,
    front: "What is KDC (Key Distribution Center) in Kerberos?",
    back: "KDC is central authority in Kerberos containing two services: AS (Authentication Server - issues TGTs) and TGS (Ticket Granting Server - issues service tickets). Holds all secret keys (password hashes). Must be: highly available, secured, time-synchronized. Single point of failure if no redundancy. In Active Directory: domain controllers are KDCs. Critical component - if KDC down, no authentication."
  },
  {
    id: 11,
    front: "What is TGT (Ticket Granting Ticket) in Kerberos?",
    back: "TGT is credential proving user authenticated to KDC. Obtained at login, used to request service tickets. Encrypted with KDC's secret key (user can't read/modify it). Contains: username, timestamp, expiration (typically 10 hours), IP address. User presents TGT to TGS to get service tickets. Enables SSO: authenticate once, access multiple services. Cached locally until expiration."
  },
  {
    id: 12,
    front: "What is mutual authentication and why does Kerberos provide it?",
    back: "Mutual authentication verifies BOTH parties: client verifies server identity, server verifies client identity. Prevents: server impersonation, man-in-the-middle attacks. Kerberos provides this: service proves it has valid ticket from KDC, client proves it has valid ticket. Example: user knows they're connecting to real server, server knows user is legitimate. Both directions authenticated, not just one-way."
  },
  {
    id: 13,
    front: "What is LDAP (Lightweight Directory Access Protocol)?",
    back: "LDAP accesses and maintains directory services (hierarchical database of users/resources). Port: 389 (TCP/UDP). Used by: Active Directory, OpenLDAP. Operations: search, add, delete, modify. Structure: tree (root → OUs → objects). Attributes: CN (Common Name), OU (Organizational Unit), DC (Domain Component). Not encryption - sends passwords in clear text. Use LDAPS for security."
  },
  {
    id: 14,
    front: "What is LDAPS and why use it?",
    back: "LDAPS is LDAP over SSL/TLS providing encryption. Port: 636 (TCP). Protects: credentials in transit, data confidentiality, authentication integrity. Standard LDAP (389) sends passwords in clear text (vulnerable). LDAPS encrypts entire session. Always use LDAPS instead of LDAP in production. Modern alternative: LDAP with STARTTLS (upgrades connection to TLS on port 389). Security requirement for directory access."
  },
  {
    id: 15,
    front: "What is Active Directory and its relationship to LDAP?",
    back: "Active Directory (AD) is Microsoft's directory service for Windows domains. Uses LDAP protocol for queries. Contains: users, computers, groups, policies. Services: authentication (Kerberos), authorization, group policy. Domain controllers: store AD database, replicate changes. Clients query AD via LDAP. AD is implementation, LDAP is protocol. Industry standard for Windows environments. Centralized management."
  },
  {
    id: 16,
    front: "What is SAML (Security Assertion Markup Language)?",
    back: "SAML is XML-based standard for SSO across different domains/organizations. Exchange authentication/authorization data between: IdP (Identity Provider - authenticates users) and SP (Service Provider - provides service). Use case: corporate login accesses cloud services (Google, Salesforce). Benefits: federated identity, SSO across organizations, no password sharing. Web-based. SAML 2.0 current version."
  },
  {
    id: 17,
    front: "What are IdP and SP in SAML?",
    back: "IdP (Identity Provider): authenticates users, issues SAML assertions (statements about user). Example: corporate AD, Okta, Azure AD. SP (Service Provider): relies on IdP for authentication, provides actual service. Example: Salesforce, AWS, Office 365. Flow: user requests SP → redirected to IdP → authenticates → SAML assertion → SP grants access. Federated authentication model. Trust relationship between IdP and SP."
  },
  {
    id: 18,
    front: "What is OAuth?",
    back: "OAuth is authorization framework (not authentication) for delegated access. Allows apps to access resources on behalf of user without sharing credentials. Example: 'Login with Google' - app gets limited access to Google account. Components: resource owner (user), client (app), authorization server, resource server. Issues: access tokens (short-lived), refresh tokens. OAuth 2.0 current version. Mobile/web apps standard."
  },
  {
    id: 19,
    front: "What is OpenID Connect (OIDC)?",
    back: "OpenID Connect is authentication layer built on OAuth 2.0. OAuth handles authorization, OIDC adds authentication (identity). Returns: ID token (who user is) + access token (what they can do). Provides: SSO, user profile info, standard claims. Simpler than SAML. Modern SSO solution. Example: 'Sign in with Google' - OIDC authenticates, OAuth authorizes app access."
  },
  {
    id: 20,
    front: "What's the difference between authentication and authorization?",
    back: "Authentication: verify identity (who are you?). Prove you are who you claim. Methods: password, biometrics, certificate. Authorization: determine permissions (what can you access?). Happens AFTER authentication. Methods: ACLs, roles, groups. Example: badge authenticates you (proves identity), authorization determines which doors you can open (permissions). Auth-N then Auth-Z. Can't authorize without authentication."
  },
  {
    id: 21,
    front: "What is 802.1X (port-based network access control)?",
    back: "802.1X authenticates devices before granting network access. Three components: supplicant (client software), authenticator (switch/AP - enforces), authentication server (RADIUS). Process: client connects, authenticator blocks until authentication succeeds, RADIUS verifies credentials, port opens if successful. Uses: EAP (Extensible Authentication Protocol). Enterprise WiFi and wired networks. Prevents: rogue devices, unauthorized access."
  },
  {
    id: 22,
    front: "What are the three roles in 802.1X?",
    back: "Supplicant: client device requesting access (laptop, phone). Runs 802.1X client software. Authenticator: network device enforcing access control (switch, wireless AP). Blocks traffic until authenticated, acts as proxy. Authentication Server: verifies credentials (RADIUS server). Makes accept/reject decision. Flow: supplicant ↔ authenticator ↔ auth server. Authenticator doesn't make decision, just enforces."
  },
  {
    id: 23,
    front: "What is EAP (Extensible Authentication Protocol)?",
    back: "EAP is authentication framework used in 802.1X. Not specific method but framework for authentication methods. EAP types: EAP-TLS (certificates), EAP-TTLS (tunneled), PEAP (protected), EAP-FAST (Cisco). Flexible: new methods can be added. Encapsulated in: EAPOL (over LAN), RADIUS (to auth server). Each type has different: security level, complexity, requirements. Choose based on: security needs, infrastructure."
  },
  {
    id: 24,
    front: "Compare EAP-TLS, PEAP, and EAP-TTLS",
    back: "EAP-TLS: certificate-based (client + server certs), most secure, requires PKI (complex/expensive), mutual authentication. PEAP: server cert only, creates tunnel, MSCHAPv2 inside tunnel, username/password, easier deployment. EAP-TTLS: similar to PEAP, more flexible inner auth, supports legacy methods. Choose: EAP-TLS for highest security, PEAP for ease of deployment, EAP-TTLS for flexibility. All better than pre-shared keys (WPA2-PSK)."
  },
  {
    id: 25,
    front: "What is local authentication vs centralized authentication?",
    back: "Local: credentials stored on each device (local database), simple for small networks, hard to manage at scale, inconsistent, no audit trail. Centralized: credentials on central server (RADIUS, AD), single source of truth, consistent policies, easier management, full audit trail, SSO possible. Enterprise networks require centralized. Use local only for: emergency access, small networks, initial setup."
  },
  {
    id: 26,
    front: "What is a captive portal?",
    back: "Captive portal intercepts web access requiring authentication before allowing internet. Redirects HTTP to login page. Common in: guest WiFi, hotels, airports, coffee shops. Methods: username/password, accept terms, SMS verification, social login, vouchers. Implementation: controller or gateway. After auth: traffic allowed. Limitations: doesn't encrypt traffic (use VPN), not true security (can be bypassed). User experience vs security trade-off."
  },
  {
    id: 27,
    front: "Quick scenario: Design authentication for enterprise WiFi. What do you recommend?",
    back: "Use 802.1X (port-based NAC) with: 1) WPA3-Enterprise (or WPA2-Enterprise minimum), 2) RADIUS server for centralized auth, 3) EAP-TLS (if PKI available) or PEAP-MSCHAPv2, 4) Integrate with Active Directory, 5) Separate SSIDs for employees vs guests (guest uses captive portal), 6) Certificate validation to prevent evil twin. Provides: strong security, individual accountability, centralized management."
  },
  {
    id: 28,
    front: "What is the difference between RADIUS and Diameter?",
    back: "Diameter is next-generation AAA protocol replacing RADIUS. Improvements: TCP/SCTP (reliable), better security (mandatory IPsec/TLS), larger address space (32-bit vs 8-bit), better roaming support, extensible. Backward compatible with RADIUS. Used in: 4G/5G networks, IMS (IP Multimedia Subsystem). Enterprise still mostly RADIUS. Diameter more complex but more capable. Named as 'twice RADIUS' (Diameter = 2 × Radius)."
  },
  {
    id: 29,
    front: "What are common authentication mistakes?",
    back: "Using single factor only (no MFA), weak passwords (short, common), storing passwords in plain text, sending passwords unencrypted (HTTP, Telnet, LDAP), reusing passwords across systems, no account lockout (allows brute force), sharing accounts (no accountability), never expiring passwords, default credentials unchanged, no logging/monitoring. Each mistake creates vulnerability. Defense: MFA, strong policies, encryption, monitoring."
  },
  {
    id: 30,
    front: "Speed drill: Match protocol to purpose - RADIUS, TACACS+, Kerberos, LDAP, SAML, OAuth, 802.1X",
    back: "RADIUS: network access AAA (WiFi, VPN). TACACS+: device admin AAA (Cisco). Kerberos: ticket-based SSO (AD). LDAP: directory queries. SAML: federated SSO (XML). OAuth: delegated authorization. 802.1X: port-based NAC. Know which protocol for which scenario!"
  }
];