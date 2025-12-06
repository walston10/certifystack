export const lesson19Quiz = [
  {
    id: 1,
    question: "A user logs into their corporate portal once and gains access to email, HR system, and file shares without additional authentication. What is this called?",
    options: [
      "Multi-factor authentication",
      "SSO (Single Sign-On) - one authentication for multiple applications",
      "Federation",
      "RADIUS"
    ],
    correct: 1,
    explanation: "SSO (Single Sign-On) allows users to authenticate once and access multiple applications. SSO benefits: (1) User convenience (fewer passwords), (2) Reduced password fatigue, (3) Fewer help desk calls, (4) Consistent authentication experience, (5) Centralized access management. SSO risks: (1) Single point of failure, (2) One compromised credential = access to everything, (3) Must be combined with strong MFA. SSO technologies: (1) SAML (web-based enterprise), (2) OAuth/OIDC (modern apps), (3) Kerberos (Windows domain). How it works: (1) User authenticates to identity provider, (2) Receives token/assertion, (3) Token presented to other apps, (4) Apps trust identity provider. SSO should always be paired with MFA - SSO makes authentication more valuable (access to more), MFA protects it."
  },
  {
    id: 2,
    question: "A company uses SAML to allow employees to access a third-party SaaS application using their corporate credentials. What role does the corporate identity system play?",
    options: [
      "Service Provider",
      "Identity Provider (IdP) - asserting user identity to other services",
      "Relying Party",
      "Authorization Server"
    ],
    correct: 1,
    explanation: "IDENTITY PROVIDER (IdP) authenticates users and asserts their identity to service providers. SAML roles: (1) IDENTITY PROVIDER (IdP) - authenticates user, creates assertion, (2) SERVICE PROVIDER (SP) - application receiving assertion, trusts IdP, (3) USER - subject being authenticated. SAML flow: (1) User tries to access SaaS app (SP), (2) SP redirects to corporate IdP, (3) User authenticates to IdP, (4) IdP sends SAML assertion to SP, (5) SP grants access based on assertion. SAML assertion contains: user identity, attributes, authentication method, validity period. Enterprise identity providers: Azure AD, Okta, Ping, ADFS. SAML is primary protocol for enterprise SSO to SaaS applications."
  },
  {
    id: 3,
    question: "An application allows users to 'Login with Google' to create an account without creating a new password. What protocol typically enables this?",
    options: [
      "SAML",
      "OAuth 2.0/OpenID Connect - delegated authorization and authentication",
      "Kerberos",
      "RADIUS"
    ],
    correct: 1,
    explanation: "OAuth 2.0 and OpenID Connect enable 'Login with Google/Facebook/etc.' functionality. OAuth vs OIDC: (1) OAUTH 2.0 - authorization (access to resources), (2) OPENID CONNECT (OIDC) - authentication layer on OAuth (proves identity). OAuth/OIDC flow (simplified): (1) App redirects to Google, (2) User authenticates to Google, (3) User consents to share info, (4) Google returns token to app, (5) App uses token to get user info. Benefits: (1) No new password for user, (2) Leverage strong Google security, (3) Reduce password fatigue, (4) Quick registration. Considerations: (1) Dependency on external provider, (2) Privacy (provider knows where you log in), (3) Not appropriate for all applications. OAuth/OIDC common for consumer apps, SAML common for enterprise."
  },
  {
    id: 4,
    question: "A user provides their password and then must enter a code from an authenticator app on their phone. How many authentication factors are being used?",
    options: [
      "One factor",
      "Two factors - something you know (password) plus something you have (phone)",
      "Three factors",
      "Zero factors"
    ],
    correct: 1,
    explanation: "This is TWO-FACTOR AUTHENTICATION: something you know (password) + something you have (phone with authenticator). Authentication factors: (1) SOMETHING YOU KNOW - password, PIN, security questions, (2) SOMETHING YOU HAVE - phone, token, smart card, (3) SOMETHING YOU ARE - fingerprint, face, iris, (4) SOMEWHERE YOU ARE - location, (5) SOMETHING YOU DO - behavior, typing pattern. MFA rules: (1) Must be DIFFERENT factor types, (2) Two passwords = still one factor, (3) Password + security question = still one factor (both 'know'). This example: password (know) + TOTP app (have) = two factors. MFA dramatically reduces account compromise - even if password stolen, attacker needs second factor. TOTP apps (Google Authenticator, Microsoft Authenticator) are stronger than SMS (SIM swapping risk)."
  },
  {
    id: 5,
    question: "A biometric system incorrectly allows an unauthorized person to authenticate. What is this error called?",
    options: [
      "False Rejection Rate (FRR)",
      "False Acceptance Rate (FAR) - incorrectly accepting unauthorized user",
      "Crossover Error Rate (CER)",
      "True positive"
    ],
    correct: 1,
    explanation: "FALSE ACCEPTANCE RATE (FAR) measures how often unauthorized users are incorrectly accepted. Biometric error rates: (1) FAR - unauthorized accepted (security failure), (2) FRR - authorized rejected (convenience failure), (3) CER - where FAR and FRR cross (used to compare systems). Trade-off: (1) Stricter settings = lower FAR, higher FRR, (2) Looser settings = higher FAR, lower FRR. Balancing: (1) High-security = prioritize low FAR (fewer false accepts), (2) High-throughput = prioritize low FRR (fewer false rejects). CER comparison: lower CER = more accurate biometric system. Example: (1) FAR 0.001% = 1 in 100,000 false accepts, (2) FRR 0.1% = 1 in 1,000 false rejects. Fingerprints, facial recognition, iris scans all have different accuracy profiles."
  },
  {
    id: 6,
    question: "An organization uses a PAM (Privileged Access Management) solution that requires administrators to 'check out' privileged credentials from a vault for temporary use. What security benefit does this provide?",
    options: [
      "Faster access",
      "Controlled, audited, and time-limited access to privileged credentials",
      "No passwords needed",
      "Reduced number of admins"
    ],
    correct: 1,
    explanation: "PAM provides CONTROLLED, AUDITED, TIME-LIMITED access to privileged credentials. PAM capabilities: (1) PASSWORD VAULT - secure storage of privileged credentials, (2) CHECK-OUT - request access, approved, time-limited, (3) SESSION RECORDING - record what admins do, (4) ROTATION - automatic password changes after use, (5) AUDIT - complete log of privileged access. Benefits: (1) Admins don't know permanent passwords, (2) Access is traceable and reviewable, (3) Automatic rotation reduces exposure, (4) Separation of duties enforcement. PAM addresses: (1) Credential theft, (2) Insider threats, (3) Compliance requirements, (4) Standing privileges elimination. Just-in-time access: (1) No standing admin access, (2) Request when needed, (3) Approved for limited time, (4) Revoked automatically. PAM is critical for protecting high-value admin accounts."
  },
  {
    id: 7,
    question: "A company's password policy requires 12+ characters, complexity, 90-day expiration, and prevents reuse of last 10 passwords. Users complain about password fatigue. What might be a better approach?",
    options: [
      "Remove all requirements",
      "Longer passwords without forced expiration, plus MFA",
      "Shorter passwords",
      "Share passwords"
    ],
    correct: 1,
    explanation: "Modern guidance: LONGER PASSWORDS (passphrases), NO FORCED EXPIRATION, plus MFA is more secure. Why password expiration is reconsidered: (1) Forces users to pick weaker passwords, (2) Creates predictable patterns (Winter2024!), (3) Increases helpdesk burden, (4) NIST recommends against regular expiration. Modern approach: (1) Long passphrases (16+ characters), (2) Check against breach databases, (3) No arbitrary expiration, (4) Change only when compromised, (5) MFA for all accounts. NIST 800-63B guidance: (1) Length over complexity, (2) No composition rules forcing special chars, (3) No expiration without reason, (4) Screen against known-bad passwords. MFA is better protection than complex password rules. Users choose better passwords when not forced into frequent changes."
  },
  {
    id: 8,
    question: "An organization federates identity with a business partner, allowing partner employees to access certain applications using their own corporate credentials. What is this?",
    options: [
      "Local authentication",
      "Identity federation - trusting external identity providers",
      "Anonymous access",
      "Guest accounts"
    ],
    correct: 1,
    explanation: "IDENTITY FEDERATION establishes trust between organizations, allowing cross-domain authentication. Federation concept: (1) Organization A trusts Organization B's identity provider, (2) B's users authenticate at B, (3) A accepts B's assertions, (4) No need for separate accounts at A. Federation benefits: (1) Partners use existing credentials, (2) No account management for external users, (3) Reduce credential sprawl, (4) Partner manages their user lifecycle. Federation technologies: (1) SAML, (2) OAuth/OIDC, (3) WS-Federation. Trust establishment: (1) Exchange certificates/metadata, (2) Define what's shared, (3) Test and validate. Use cases: (1) B2B access, (2) Contractors, (3) Academic institutions, (4) Government agencies. Federation requires trust - you're accepting another organization's authentication decisions."
  },
  {
    id: 9,
    question: "A hardware token generates a new six-digit code every 30 seconds that must be entered along with a password. What type of one-time password is this?",
    options: [
      "Static password",
      "TOTP (Time-based One-Time Password)",
      "HOTP (HMAC-based One-Time Password)",
      "SMS code"
    ],
    correct: 1,
    explanation: "TOTP (Time-based One-Time Password) generates codes that change every 30 seconds based on time. TOTP vs HOTP: (1) TOTP - time-based, new code every interval (usually 30 sec), (2) HOTP - counter-based, new code after each use. TOTP operation: (1) Shared secret stored in token and server, (2) Current time divided into intervals, (3) HMAC combines secret + time, (4) Truncated to 6-8 digits. TOTP implementations: (1) Hardware tokens (RSA, YubiKey TOTP), (2) Software apps (Google Authenticator, Microsoft Authenticator), (3) Built into services. Security: (1) Codes are short-lived, (2) Can't be reused, (3) Requires synchronized time, (4) Better than SMS (no SIM swapping). TOTP is standard for authenticator apps and hardware tokens."
  },
  {
    id: 10,
    question: "When a new employee is hired, their user account is automatically created with appropriate group memberships based on their job role and department. What is this process called?",
    options: [
      "Deprovisioning",
      "Provisioning - creating and configuring user accounts",
      "Authorization",
      "Federation"
    ],
    correct: 1,
    explanation: "PROVISIONING is the process of creating user accounts and assigning appropriate access. Identity lifecycle: (1) PROVISIONING - account creation, group assignment, (2) MODIFICATION - role changes, access updates, (3) DEPROVISIONING - account removal/disable. Automated provisioning: (1) HR system triggers account creation, (2) Role determines access (RBAC), (3) Consistent, error-free, (4) Faster onboarding. Provisioning includes: (1) Account creation, (2) Email setup, (3) Group memberships, (4) Application access, (5) Hardware assignment. Manual vs Automated: (1) Manual - slow, error-prone, (2) Automated - consistent, auditable, faster. Deprovisioning is equally critical: immediate disable when employee leaves prevents unauthorized access. Identity governance tools automate entire lifecycle."
  },
  {
    id: 11,
    question: "A security team discovers former employees still have active accounts months after leaving the company. What identity management process failed?",
    options: [
      "Provisioning",
      "Deprovisioning - failing to remove access when users leave",
      "Authentication",
      "Authorization"
    ],
    correct: 1,
    explanation: "DEPROVISIONING failure - accounts not disabled/removed when employees leave. Deprovisioning risks: (1) Former employees retain access, (2) Malicious access possible, (3) Compliance violations, (4) Audit failures. Proper deprovisioning: (1) HR termination triggers IT process, (2) Immediate account disable, (3) Access to sensitive systems revoked, (4) Shared accounts password rotated, (5) Physical access removed. Timeline: (1) Voluntary departure - end of last day, (2) Involuntary - immediate, (3) Contractor end - contract end date. Common failures: (1) Manual process gaps, (2) Applications not integrated, (3) Shared accounts not rotated, (4) No offboarding checklist. Solution: automated deprovisioning triggered by HR system, regular access reviews to catch orphaned accounts."
  },
  {
    id: 12,
    question: "An application requests authorization from a user to access their calendar on their behalf. The user grants permission, and the app receives a token to access only calendar data. What is this called?",
    options: [
      "Authentication",
      "Delegated authorization - granting limited access to resources on user's behalf",
      "Federation",
      "SSO"
    ],
    correct: 1,
    explanation: "DELEGATED AUTHORIZATION grants third-party applications limited access to user resources without sharing credentials. OAuth 2.0 provides: (1) User authorizes app for specific access, (2) App receives token with limited scope, (3) App never sees user's password, (4) Access can be revoked. Scopes: (1) Define what app can access, (2) Calendar.Read, Files.Read, etc., (3) Principle of least privilege, (4) User sees what they're granting. Example: (1) Scheduling app requests calendar access, (2) User logs into Google, sees request, (3) User approves calendar scope only, (4) App gets token for calendar only. Benefits: (1) No password sharing, (2) Limited access, (3) Revocable, (4) User control. Always review scopes before granting access - apps sometimes request more than needed."
  },
  {
    id: 13,
    question: "A Windows domain user logs in and receives a ticket that's used to authenticate to other domain resources without re-entering credentials. What protocol provides this?",
    options: [
      "SAML",
      "Kerberos - ticket-based authentication for Windows domains",
      "OAuth",
      "RADIUS"
    ],
    correct: 1,
    explanation: "KERBEROS is the authentication protocol for Windows Active Directory domains, using tickets. Kerberos components: (1) KDC (Key Distribution Center) - issues tickets, (2) TGT (Ticket-Granting Ticket) - proves identity, (3) Service Ticket - grants access to specific service. Kerberos flow: (1) User logs in, (2) KDC issues TGT, (3) User presents TGT for service ticket, (4) Service ticket presented to access resource, (5) No password sent over network after initial auth. Benefits: (1) SSO within domain, (2) Mutual authentication, (3) Password never transmitted, (4) Tickets expire. Attacks: (1) Pass-the-ticket, (2) Golden ticket (forged TGT), (3) Kerberoasting. Kerberos port: 88. Foundational to Windows AD authentication and SSO."
  },
  {
    id: 14,
    question: "During an access review, a manager is asked to verify that their team members still need the access they currently have. What governance process is this?",
    options: [
      "Provisioning",
      "Access certification/recertification - periodic review of access rights",
      "Password reset",
      "Account creation"
    ],
    correct: 1,
    explanation: "ACCESS CERTIFICATION (Recertification) is periodic review of user access to ensure appropriateness. Certification purpose: (1) Verify access still needed, (2) Detect privilege creep, (3) Compliance requirement, (4) Least privilege enforcement. Process: (1) Generate list of user access, (2) Send to manager/owner, (3) Manager approves or revokes, (4) Revocations processed, (5) Documented for audit. Certification types: (1) Manager-based - manager reviews team, (2) Application-based - app owner reviews all users, (3) Role-based - role owner reviews role members. Frequency: quarterly, semi-annual, or annual depending on risk. Common finding: users with access from previous roles (privilege accumulation). Identity governance tools automate certification campaigns."
  },
  {
    id: 15,
    question: "A company implements passwordless authentication using FIDO2 security keys. Users authenticate with a physical key and PIN. What security benefit does this provide over passwords?",
    options: [
      "Easier to share",
      "Phishing-resistant - credentials can't be phished or replayed",
      "Faster typing",
      "No security benefit"
    ],
    correct: 1,
    explanation: "FIDO2/WebAuthn is PHISHING-RESISTANT because credentials are cryptographically bound to specific sites. Why FIDO2 is phishing-resistant: (1) Credential is bound to domain (won't work on fake site), (2) No password to type into phishing page, (3) Public key cryptography (private key never leaves device), (4) Can't be replayed. FIDO2 authentication: (1) User inserts key or uses platform authenticator, (2) Key signs challenge with private key, (3) Site verifies with stored public key, (4) No password transmitted or stored. FIDO2 options: (1) Hardware keys (YubiKey, Titan), (2) Platform authenticators (Windows Hello, Face ID). Benefits: (1) Phishing-resistant, (2) No passwords to manage/forget, (3) Stronger than any password, (4) User convenience. Passwordless is the future - FIDO2 provides security without password problems."
  }
];