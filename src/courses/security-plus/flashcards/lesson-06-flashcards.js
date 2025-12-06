// Lesson 6: PKI and Certificates
// Security+ (SY0-701) - Domain 1.0: General Security Concepts

export const lesson6Flashcards = [
  {
    id: 1,
    front: "What is PKI (Public Key Infrastructure)?",
    back: "A framework of policies, procedures, and technology for managing digital certificates and public/private key pairs. Enables secure communications and identity verification."
  },
  {
    id: 2,
    front: "What is a Certificate Authority (CA)?",
    back: "A trusted entity that issues, signs, and manages digital certificates. Vouches for the identity of certificate holders. Examples: DigiCert, Let's Encrypt, Verisign."
  },
  {
    id: 3,
    front: "What is a Registration Authority (RA)?",
    back: "Verifies the identity of certificate requesters before the CA issues a certificate. Handles the verification process but doesn't issue certificates directly."
  },
  {
    id: 4,
    front: "What is a CRL (Certificate Revocation List)?",
    back: "A list of certificates that have been revoked before their expiration date. Published by the CA. Clients should check CRL before trusting a certificate."
  },
  {
    id: 5,
    front: "What is OCSP (Online Certificate Status Protocol)?",
    back: "Real-time protocol to check if a certificate is revoked. Faster than downloading entire CRL. Client queries OCSP responder for specific certificate status."
  },
  {
    id: 6,
    front: "CRL vs OCSP - what's the difference?",
    back: "CRL: download entire revocation list, can be large/outdated. OCSP: real-time query for single certificate, faster and more current."
  },
  {
    id: 7,
    front: "What is an X.509 certificate?",
    back: "The standard format for digital certificates. Contains subject name, issuer, validity dates, public key, serial number, and digital signature."
  },
  {
    id: 8,
    front: "What information is contained in a digital certificate?",
    back: "Subject (owner), Issuer (CA), Validity period (start/end dates), Public key, Serial number, Signature algorithm, and CA's digital signature."
  },
  {
    id: 9,
    front: "What is a Domain Validation (DV) certificate?",
    back: "Basic certificate that only verifies domain ownership. Quickest and cheapest to obtain. Provides encryption but minimal identity assurance."
  },
  {
    id: 10,
    front: "What is an Organization Validation (OV) certificate?",
    back: "Certificate that verifies domain ownership AND organization identity. CA confirms the organization exists and owns the domain. More trust than DV."
  },
  {
    id: 11,
    front: "What is an Extended Validation (EV) certificate?",
    back: "Highest level of certificate validation. Extensive verification of organization's legal identity, physical address, and domain ownership. Most expensive and time-consuming."
  },
  {
    id: 12,
    front: "What is a Wildcard certificate?",
    back: "Certificate valid for a domain and all its subdomains. Uses asterisk: *.example.com covers www.example.com, mail.example.com, etc. Does not cover example.com itself."
  },
  {
    id: 13,
    front: "What is a SAN (Subject Alternative Name) certificate?",
    back: "Certificate that covers multiple specific domain names. Lists each domain explicitly. Can include different domains: example.com, example.org, example.net."
  },
  {
    id: 14,
    front: "What is a Self-signed certificate?",
    back: "Certificate signed by its own private key, not a trusted CA. Free but not trusted by browsers/systems by default. Used for testing or internal systems."
  },
  {
    id: 15,
    front: "Why don't browsers trust self-signed certificates?",
    back: "No third-party verification of identity. Anyone can create one claiming to be any organization. No chain of trust to a trusted root CA."
  },
  {
    id: 16,
    front: "What is PEM format?",
    back: "Base64-encoded certificate format. Text-based, starts with '-----BEGIN CERTIFICATE-----'. Most common format on Linux/Unix. File extensions: .pem, .crt, .cer"
  },
  {
    id: 17,
    front: "What is DER format?",
    back: "Binary-encoded certificate format. Not human-readable. Common on Windows and Java platforms. File extensions: .der, .cer"
  },
  {
    id: 18,
    front: "What is PFX/P12 format?",
    back: "Binary format containing certificate AND private key (password-protected). Used to transfer complete key pairs. File extensions: .pfx, .p12"
  },
  {
    id: 19,
    front: "What is P7B format?",
    back: "Base64 format containing certificates only (no private key). Often used for certificate chains. File extensions: .p7b, .p7c"
  },
  {
    id: 20,
    front: "What is a CSR (Certificate Signing Request)?",
    back: "Request sent to CA to obtain a certificate. Contains public key and identifying information. CA signs this to create the certificate."
  },
  {
    id: 21,
    front: "What is the certificate lifecycle?",
    back: "Request (CSR) → Issuance (CA signs) → Usage (deploy and use) → Renewal (before expiration) → Revocation (if compromised)."
  },
  {
    id: 22,
    front: "When should a certificate be revoked?",
    back: "When private key is compromised, employee leaves organization, certificate info changes, or certificate was issued in error."
  },
  {
    id: 23,
    front: "What is a Root CA?",
    back: "The top-level CA in a trust hierarchy. Self-signed certificate trusted by default. Issues certificates to intermediate CAs. Kept offline for security."
  },
  {
    id: 24,
    front: "What is an Intermediate CA?",
    back: "A CA between root CA and end certificates. Signed by root CA. Issues certificates to users/servers. Protects root CA from direct exposure."
  },
  {
    id: 25,
    front: "What is a Certificate Chain (Chain of Trust)?",
    back: "The path from end certificate to trusted root CA through intermediate CAs. Each certificate is signed by the one above it. Browsers verify the entire chain."
  },
  {
    id: 26,
    front: "What is the Hierarchical Trust Model?",
    back: "Tree structure with root CA at top, intermediate CAs in middle, end certificates at bottom. Most common PKI model. Used by public CAs."
  },
  {
    id: 27,
    front: "What is Web of Trust?",
    back: "Decentralized trust model where users vouch for each other. No central CA. Used in PGP/GPG. Trust based on personal verification."
  },
  {
    id: 28,
    front: "What is Certificate Pinning?",
    back: "Hardcoding expected certificate or public key in an application. Prevents MITM attacks even if attacker has valid CA-signed certificate. Used in mobile apps."
  },
  {
    id: 29,
    front: "What is Key Escrow?",
    back: "Storing copies of encryption keys with a trusted third party. Enables key recovery if original is lost. Controversial - creates potential backdoor."
  },
  {
    id: 30,
    front: "What is Key Recovery?",
    back: "The process of retrieving encryption keys from escrow when original keys are lost or unavailable. Balances security with business continuity needs."
  }
];