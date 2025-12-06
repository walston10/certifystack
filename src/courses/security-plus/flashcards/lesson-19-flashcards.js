// Lesson 19: Identity and Access Management
// Security+ (SY0-701) - Domain 3.0: Security Architecture

export const lesson19Flashcards = [
  {
    id: 1,
    front: "What is Identity Management?",
    back: "Process of managing digital identities throughout their lifecycle. Includes provisioning, authentication, authorization, and deprovisioning. Ensures right people have right access."
  },
  {
    id: 2,
    front: "What is Provisioning?",
    back: "Creating user accounts and granting initial access. Part of onboarding process. Should follow least privilege. May be manual or automated."
  },
  {
    id: 3,
    front: "What is Deprovisioning?",
    back: "Removing user access when no longer needed. Critical when employees leave. Prevents orphaned accounts. Should be timely to reduce risk."
  },
  {
    id: 4,
    front: "What is Just-in-Time Provisioning?",
    back: "Creating accounts automatically when first needed. User authenticated by IdP, account created on-demand in application. Reduces pre-provisioning overhead."
  },
  {
    id: 5,
    front: "What are the five Authentication Factors?",
    back: "Something you know (password), Something you have (token), Something you are (biometric), Somewhere you are (location), Something you do (behavior)."
  },
  {
    id: 6,
    front: "What is 'Something you know' factor?",
    back: "Knowledge-based authentication. Passwords, PINs, security questions. Most common but weakest factor. Can be guessed, stolen, or shared."
  },
  {
    id: 7,
    front: "What is 'Something you have' factor?",
    back: "Possession-based authentication. Smart cards, tokens, phones, security keys. Must physically possess the item. Can be lost or stolen."
  },
  {
    id: 8,
    front: "What is 'Something you are' factor?",
    back: "Biometric authentication. Fingerprint, facial recognition, iris scan, voice. Unique to individual. Cannot be forgotten but can't be changed if compromised."
  },
  {
    id: 9,
    front: "What is 'Somewhere you are' factor?",
    back: "Location-based authentication. GPS, IP geolocation, network location. Adds context to authentication. Can restrict access by location."
  },
  {
    id: 10,
    front: "What is 'Something you do' factor?",
    back: "Behavioral authentication. Typing patterns, mouse movements, gait analysis. How you perform actions. Continuous authentication possibility."
  },
  {
    id: 11,
    front: "What is MFA (Multi-Factor Authentication)?",
    back: "Requiring two or more different authentication factors. Must be different factor types - two passwords is NOT MFA. Significantly improves security."
  },
  {
    id: 12,
    front: "Is password + security question MFA?",
    back: "No. Both are 'something you know.' True MFA requires different factor categories. Example of MFA: password + authenticator app (know + have)."
  },
  {
    id: 13,
    front: "What is OTP (One-Time Password)?",
    back: "Password valid for single use or short time period. Cannot be reused. Examples: SMS codes, authenticator apps. Defeats replay attacks."
  },
  {
    id: 14,
    front: "What is TOTP (Time-based OTP)?",
    back: "OTP generated using current time and shared secret. Changes every 30-60 seconds. Used by authenticator apps (Google Authenticator, Authy). No network needed to generate."
  },
  {
    id: 15,
    front: "What is HOTP (HMAC-based OTP)?",
    back: "OTP generated using counter and shared secret. Each code used increments counter. Doesn't expire until used. Less common than TOTP."
  },
  {
    id: 16,
    front: "What are biometric error rates?",
    back: "FAR (False Acceptance Rate): accepts unauthorized. FRR (False Rejection Rate): rejects authorized. CER (Crossover Error Rate): where FAR=FRR, measures overall accuracy."
  },
  {
    id: 17,
    front: "What is FAR (False Acceptance Rate)?",
    back: "Rate at which unauthorized users are incorrectly accepted. Type II error. Security concern - letting wrong people in. Lower is better."
  },
  {
    id: 18,
    front: "What is FRR (False Rejection Rate)?",
    back: "Rate at which authorized users are incorrectly rejected. Type I error. Usability concern - blocking legitimate users. Lower is better."
  },
  {
    id: 19,
    front: "What is CER (Crossover Error Rate)?",
    back: "Point where FAR equals FRR. Used to compare biometric systems. Lower CER = more accurate system. Also called Equal Error Rate (EER)."
  },
  {
    id: 20,
    front: "What is SSO (Single Sign-On)?",
    back: "One authentication grants access to multiple applications. User logs in once, accesses many systems. Improves user experience. Risk: one compromise affects all."
  },
  {
    id: 21,
    front: "What is SAML (Security Assertion Markup Language)?",
    back: "XML-based standard for exchanging authentication data. Used for SSO, especially web applications. Exchanges assertions between Identity Provider and Service Provider."
  },
  {
    id: 22,
    front: "What is an Identity Provider (IdP)?",
    back: "System that authenticates users and provides identity information. Issues security tokens/assertions. Examples: Active Directory, Okta, Azure AD."
  },
  {
    id: 23,
    front: "What is a Service Provider (SP)?",
    back: "Application that relies on IdP for authentication. Trusts assertions from IdP. Doesn't manage user credentials directly. Receives authenticated identity."
  },
  {
    id: 24,
    front: "What is OAuth 2.0?",
    back: "Authorization framework (not authentication). Allows third-party access to resources without sharing credentials. Issues access tokens. 'Login with Google' uses OAuth."
  },
  {
    id: 25,
    front: "What is OpenID Connect (OIDC)?",
    back: "Authentication layer built on OAuth 2.0. Adds identity verification to OAuth's authorization. Returns ID token with user identity. Modern SSO standard."
  },
  {
    id: 26,
    front: "OAuth vs OpenID Connect?",
    back: "OAuth: authorization only ('what can you access'). OpenID Connect: adds authentication ('who are you'). OIDC = OAuth + identity layer."
  },
  {
    id: 27,
    front: "What is Federation?",
    back: "Trust relationship between organizations for identity. Users from one org access resources in another. IdP in home org authenticates for partner services."
  },
  {
    id: 28,
    front: "What is PAM (Privileged Access Management)?",
    back: "Securing and managing privileged accounts. Password vaulting, session monitoring, just-in-time access, audit logging. Critical for admin accounts."
  },
  {
    id: 29,
    front: "What is Password Vaulting?",
    back: "Securely storing privileged credentials in encrypted vault. Users check out passwords when needed. Automatic rotation. Audit trail of access."
  },
  {
    id: 30,
    front: "What is Just-in-Time Access?",
    back: "Granting privileged access only when needed, for limited time. Reduces standing privileges. User requests access, approved, auto-revoked after task."
  }
];