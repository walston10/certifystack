// Flashcards for Lesson 22: Authentication Methods (SHORTENED)

export const lesson22Flashcards = [
  {
    id: 1,
    front: "What are the three authentication factors?",
    back: "Something you KNOW (password, PIN), something you HAVE (token, smart card, phone), something you ARE (biometrics). Multi-factor combines 2+ different types. Two passwords ≠ MFA (both same factor)."
  },
  {
    id: 2,
    front: "What is MFA/2FA?",
    back: "Requires two or more factors from different categories. Common: password + token, password + fingerprint, card + PIN. Compromising one factor doesn't grant access. Industry best practice."
  },
  {
    id: 3,
    front: "What is Single Sign-On (SSO)?",
    back: "Authenticate once, access multiple applications without re-entering credentials. Benefits: better UX, fewer passwords, centralized control. Risks: single compromise = access to everything. Often combined with MFA."
  },
  {
    id: 4,
    front: "What is RADIUS?",
    back: "Centralized AAA protocol. UDP ports 1812 (auth), 1813 (accounting). Client-server model. Common for wireless (802.1X), VPN, network access. Password encrypted but not entire packet. Open standard."
  },
  {
    id: 5,
    front: "What are the three A's in AAA?",
    back: "Authentication (who are you?), Authorization (what can you do?), Accounting (what did you do?). AAA servers (RADIUS, TACACS+) provide all three. Critical for audit trails and compliance."
  },
  {
    id: 6,
    front: "What is TACACS+?",
    back: "Cisco proprietary AAA protocol. TCP port 49. Separates AAA functions, encrypts entire packet (more secure than RADIUS). Best for device administration (switches, routers), command authorization."
  },
  {
    id: 7,
    front: "RADIUS vs TACACS+?",
    back: "RADIUS: open standard, UDP, encrypts password only, common for WiFi/VPN. TACACS+: Cisco proprietary, TCP, encrypts entire packet, better for device admin. Modern networks often use both."
  },
  {
    id: 8,
    front: "What is Kerberos?",
    back: "Ticket-based authentication using symmetric encryption. Port 88. Components: KDC, client, service. Process: get TGT, use TGT for service tickets. Benefits: mutual authentication, SSO, no passwords over network. Used by Active Directory."
  },
  {
    id: 9,
    front: "Kerberos authentication process?",
    back: "1) Client requests TGT from AS, 2) AS issues TGT, 3) Client uses TGT to request service ticket from TGS, 4) TGS issues service ticket, 5) Client presents ticket to access service. Time-limited tickets."
  },
  {
    id: 10,
    front: "What is KDC in Kerberos?",
    back: "Key Distribution Center - central authority containing AS (issues TGTs) and TGS (issues service tickets). Holds all secret keys. In Active Directory: domain controllers are KDCs. Single point of failure if no redundancy."
  },
  {
    id: 11,
    front: "What is TGT in Kerberos?",
    back: "Ticket Granting Ticket - credential proving user authenticated. Obtained at login, used to request service tickets. Encrypted with KDC's key. Enables SSO: authenticate once, access multiple services. Typically expires in 10 hours."
  },
  {
    id: 12,
    front: "What is mutual authentication?",
    back: "Verifies BOTH parties: client verifies server, server verifies client. Prevents server impersonation and MITM attacks. Kerberos provides this - both directions authenticated, not just one-way."
  },
  {
    id: 13,
    front: "What is LDAP?",
    back: "Lightweight Directory Access Protocol - accesses directory services (hierarchical database). Port 389. Used by Active Directory, OpenLDAP. Structure: tree with OUs and objects. Sends passwords in clear text - use LDAPS."
  },
  {
    id: 14,
    front: "What is LDAPS?",
    back: "LDAP over SSL/TLS providing encryption. Port 636. Standard LDAP (389) sends passwords in clear text. LDAPS encrypts entire session. Always use LDAPS in production. Security requirement."
  },
  {
    id: 15,
    front: "What is Active Directory's relationship to LDAP?",
    back: "Active Directory is Microsoft's directory service. Uses LDAP protocol for queries. Contains users, computers, groups, policies. Authentication via Kerberos. AD is implementation, LDAP is protocol. Windows domain standard."
  },
  {
    id: 16,
    front: "What is SAML?",
    back: "XML-based standard for SSO across organizations. Exchanges auth/authorization between IdP (Identity Provider) and SP (Service Provider). Use: corporate login accesses cloud services. Federated identity. SAML 2.0 current."
  },
  {
    id: 17,
    front: "What are IdP and SP in SAML?",
    back: "IdP (Identity Provider): authenticates users, issues SAML assertions. Example: corporate AD, Okta. SP (Service Provider): relies on IdP, provides service. Example: Salesforce, AWS. Trust relationship between them."
  },
  {
    id: 18,
    front: "What is OAuth?",
    back: "Authorization framework (not authentication) for delegated access. Apps access resources without sharing credentials. Example: 'Login with Google'. Issues access tokens (short-lived) and refresh tokens. OAuth 2.0 current."
  },
  {
    id: 19,
    front: "What is OpenID Connect (OIDC)?",
    back: "Authentication layer built on OAuth 2.0. OAuth handles authorization, OIDC adds authentication. Returns ID token (who) + access token (what). Modern SSO solution. Simpler than SAML."
  },
  {
    id: 20,
    front: "Authentication vs authorization?",
    back: "Authentication: verify identity (who are you?). Authorization: determine permissions (what can you access?). Happens AFTER authentication. Example: badge authenticates, authorization determines which doors open. Auth-N then Auth-Z."
  },
  {
    id: 21,
    front: "What is 802.1X?",
    back: "Port-based network access control. Three components: supplicant (client), authenticator (switch/AP), authentication server (RADIUS). Blocks access until authentication succeeds. Uses EAP. Enterprise WiFi and wired standard."
  },
  {
    id: 22,
    front: "Three roles in 802.1X?",
    back: "Supplicant: client device requesting access. Authenticator: network device enforcing control (switch/AP). Authentication Server: verifies credentials (RADIUS). Flow: supplicant ↔ authenticator ↔ auth server."
  },
  {
    id: 23,
    front: "What is EAP?",
    back: "Extensible Authentication Protocol - framework for authentication methods in 802.1X. Types: EAP-TLS (certificates), PEAP (protected), EAP-TTLS (tunneled), EAP-FAST (Cisco). Choose based on security needs and infrastructure."
  },
  {
    id: 24,
    front: "Compare EAP-TLS, PEAP, EAP-TTLS?",
    back: "EAP-TLS: certificate-based (client + server), most secure, requires PKI. PEAP: server cert only, username/password, easier. EAP-TTLS: similar to PEAP, more flexible. Choose based on security vs ease."
  },
  {
    id: 25,
    front: "Local vs centralized authentication?",
    back: "Local: credentials on each device, simple but hard to manage, inconsistent. Centralized: credentials on central server (RADIUS, AD), single source, consistent policies, audit trail, SSO. Enterprise requires centralized."
  },
  {
    id: 26,
    front: "What is a captive portal?",
    back: "Intercepts web access requiring authentication before internet. Redirects to login page. Common for guest WiFi (hotels, airports). Methods: password, accept terms, SMS. Doesn't encrypt traffic - use VPN."
  },
  {
    id: 27,
    front: "Design authentication for enterprise WiFi?",
    back: "802.1X with WPA3-Enterprise, RADIUS server, EAP-TLS or PEAP, Active Directory integration. Separate SSIDs (employees vs guests - captive portal). Certificate validation. Provides strong security and accountability."
  },
  {
    id: 28,
    front: "RADIUS vs Diameter?",
    back: "Diameter is next-gen AAA replacing RADIUS. Improvements: TCP (reliable), better security (mandatory IPsec/TLS), extensible. Used in 4G/5G networks. Enterprise still mostly RADIUS. Named as 'twice RADIUS'."
  },
  {
    id: 29,
    front: "Common authentication mistakes?",
    back: "Single factor only (no MFA), weak passwords, storing passwords in plain text, sending unencrypted (HTTP, Telnet, LDAP), reusing passwords, no account lockout, sharing accounts, default credentials unchanged."
  },
  {
    id: 30,
    front: "Match: RADIUS / TACACS+ / Kerberos / LDAP / SAML / OAuth / 802.1X",
    back: "RADIUS = network access AAA. TACACS+ = device admin AAA. Kerberos = ticket-based SSO. LDAP = directory queries. SAML = federated SSO. OAuth = delegated authorization. 802.1X = port-based NAC."
  }
];