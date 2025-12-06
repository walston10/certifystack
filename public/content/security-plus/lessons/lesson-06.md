# Lesson 6: PKI and Certificates

**Estimated Time:** 30-35 minutes  
**Domain:** 1.0 General Security Concepts (12% of exam)  
**Exam Objectives Covered:** 1.4 - Explain the importance of using appropriate cryptographic solutions

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain the purpose of Public Key Infrastructure (PKI) and its components
- Describe the roles of Certificate Authorities (CA), Registration Authorities (RA), and other PKI entities
- Differentiate between certificate types (DV, OV, EV, wildcard, SAN, self-signed)
- Explain the certificate lifecycle from request through revocation
- Interpret X.509 certificate contents and fields
- Compare certificate revocation methods (CRL vs. OCSP)
- Identify common certificate formats (PEM, DER, PFX, P7B)
- Explain certificate trust models and chains of trust
- Describe certificate pinning and its security benefits

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - PKI Concepts" (16 min)
- **PowerCert:** "SSL/TLS Certificates Explained" (13 min)
- **Sunny Classroom:** "Certificate Authorities and Trust" (11 min)

---

## Introduction

It's 2011, and security researchers notice something strange. A certificate for *.google.com—valid, trusted, raising no browser warnings—was issued by DigiNotar, a Dutch Certificate Authority. The problem? Google never requested it.

Investigation revealed DigiNotar had been thoroughly compromised. Attackers had issued over 500 fraudulent certificates for major domains including Google, Microsoft, Facebook, Twitter, and intelligence agencies. For weeks, Iranian users accessing Gmail were subjected to man-in-the-middle attacks—their "secure" connections intercepted by attackers using fake but browser-trusted certificates.

The damage was catastrophic. DigiNotar's certificates were revoked by every major browser. The company declared bankruptcy within a month. The incident exposed a fundamental truth about internet security: the entire system depends on trusting Certificate Authorities to verify identity correctly. When that trust is violated, encryption becomes theater.

This incident—and others like it involving Comodo, WoSign, and Symantec—drove major improvements in certificate transparency, validation practices, and trust management. But the fundamental architecture remains: your browser trusts certain authorities, those authorities vouch for website identities, and that chain of trust enables secure communication with sites you've never visited before.

Understanding PKI—Public Key Infrastructure—means understanding how trust works on the internet. Why does your browser show a padlock for your bank but warn about self-signed certificates? How do Certificate Authorities verify identity? What happens when certificates expire or get compromised? These questions have practical answers that every security professional must understand.

Let's explore the infrastructure that makes digital trust possible.

---

## Public Key Infrastructure: Building Trust at Scale

PKI is a framework of policies, procedures, hardware, software, and people that manages digital certificates and public-key encryption. It solves a fundamental problem: how do you trust a public key actually belongs to who it claims?

### The Problem PKI Solves

Asymmetric encryption requires public keys. When you connect to your bank, you need their public key to encrypt your session. But how do you know the public key you received is actually your bank's and not an attacker's?

**Without PKI:**
1. You request bank's public key
2. Attacker intercepts, sends their own public key claiming to be the bank
3. You encrypt data with attacker's key (thinking it's bank's)
4. Attacker decrypts everything, re-encrypts with real bank key, forwards
5. Perfect man-in-the-middle—you never know

**With PKI:**
1. Bank's public key is embedded in a certificate signed by a trusted CA
2. Your browser trusts certain CAs (pre-installed)
3. Browser verifies CA's signature on bank's certificate
4. If valid, the public key genuinely belongs to the bank
5. Attacker can't forge CA signature without CA's private key

PKI binds identities to public keys through trusted third parties.

### PKI Components

#### Certificate Authority (CA)

The CA is the trusted entity that issues digital certificates. When a CA signs a certificate, it vouches that the public key belongs to the named entity.

**CA responsibilities:**
- Verify requester identity before issuing certificates
- Sign certificates with CA's private key
- Maintain security of CA private key (compromise = disaster)
- Publish revoked certificates (CRL) or support OCSP
- Follow industry standards and undergo audits

**CA types:**
- **Public CAs:** Issue certificates trusted by browsers globally (DigiCert, Let's Encrypt, Sectigo)
- **Private/Enterprise CAs:** Issue certificates for internal use (company intranet, internal applications)

**Root CA vs. Intermediate CA:**
- **Root CA:** Top of trust hierarchy. Root private key extremely protected (often offline). Signs intermediate CA certificates.
- **Intermediate CA:** Issued by root CA. Actually signs end-entity certificates. If compromised, only intermediate is revoked, not root.

This hierarchy limits damage—compromised intermediate affects only its certificates, not entire PKI.

#### Registration Authority (RA)

The RA handles identity verification before the CA issues certificates. The RA doesn't sign certificates—it verifies requests and forwards approved ones to the CA.

**RA functions:**
- Receive certificate requests
- Verify requester identity (domain ownership, organization details)
- Approve or reject requests
- Forward approved requests to CA for signing

In some deployments, CA and RA functions are combined. In large PKIs, separation provides security and scalability.

#### Certificate Repository

Centralized location where certificates are stored and published. May include:
- Issued certificates (for retrieval)
- Certificate Revocation Lists (CRLs)
- CA certificates and policies

#### Key Escrow and Recovery

Some PKIs support key escrow—storing copies of private keys with trusted third parties for recovery purposes.

**Use cases:**
- Decrypt data if employee leaves or loses key
- Legal/compliance requirements for data access
- Disaster recovery for encryption keys

**Controversy:** Key escrow creates additional attack surface. Escrowed keys can be stolen or compelled by authorities. Generally avoided for authentication keys; sometimes used for encryption keys.

---

## Digital Certificates: Identity Documents for the Digital World

A digital certificate is an electronic document that binds a public key to an identity. Certificates follow the X.509 standard.

### X.509 Certificate Contents

| Field | Description |
|-------|-------------|
| **Version** | X.509 version (usually v3) |
| **Serial Number** | Unique identifier assigned by CA |
| **Signature Algorithm** | Algorithm CA used to sign (e.g., SHA256withRSA) |
| **Issuer** | CA that issued the certificate |
| **Validity Period** | Not Before and Not After dates |
| **Subject** | Entity the certificate identifies |
| **Subject Public Key** | The public key being certified |
| **Extensions** | Additional information (key usage, SAN, etc.) |
| **Signature** | CA's digital signature over all above fields |

### Key Certificate Fields Explained

**Subject and Issuer**
Distinguished Names (DN) identifying the certificate owner and issuing CA:
```
Subject: CN=www.example.com, O=Example Corp, L=New York, ST=NY, C=US
Issuer: CN=DigiCert TLS RSA SHA256 2020 CA1, O=DigiCert Inc, C=US
```

- CN = Common Name (domain name for web certificates)
- O = Organization
- L = Locality (city)
- ST = State
- C = Country

**Validity Period**
Certificates have defined lifespans:
```
Not Before: Jan 1, 2024 00:00:00 UTC
Not After: Jan 1, 2025 23:59:59 UTC
```

Expired certificates should not be trusted—they may have been compromised after expiration when owner stopped protecting them.

**Key Usage and Extended Key Usage**
Defines what the key can be used for:
- Digital Signature
- Key Encipherment
- Server Authentication (TLS server)
- Client Authentication (TLS client)
- Code Signing
- Email Protection (S/MIME)

A certificate for web server authentication shouldn't be used for code signing—different trust requirements.

**Subject Alternative Name (SAN)**
Lists additional identities the certificate covers:
```
DNS:www.example.com
DNS:example.com
DNS:mail.example.com
IP:192.168.1.100
```

Modern certificates use SAN rather than CN for domain names.

---

## Certificate Types: Different Validation Levels

Certificates vary by how thoroughly the CA verified the requester's identity.

### Domain Validation (DV)

**Validation:** CA verifies requester controls the domain (email to admin@domain, DNS record, or HTTP file)

**Time:** Minutes to hours (often automated)

**Trust indicator:** Padlock, HTTPS

**Use case:** Basic encryption for blogs, small sites, any site needing encryption without identity verification

**Cost:** Free (Let's Encrypt) to low cost

**What it proves:** The certificate holder controls the domain. Nothing about who they are.

### Organization Validation (OV)

**Validation:** CA verifies domain ownership AND organization existence (business registration, phone verification)

**Time:** Days

**Trust indicator:** Padlock, HTTPS (same as DV in most browsers)

**Use case:** Business websites wanting to display verified organization name

**Cost:** Moderate

**What it proves:** Organization exists and controls the domain. More trustworthy than DV.

### Extended Validation (EV)

**Validation:** Rigorous verification including legal existence, operational existence, physical address, domain ownership, and authorization of requester

**Time:** Days to weeks

**Trust indicator:** Previously showed green bar with organization name; now just padlock (browsers removed visual distinction)

**Use case:** Financial institutions, major e-commerce, high-security applications

**Cost:** High

**What it proves:** Extensively verified legal entity controls the domain. Highest assurance level.

### Comparison

| Type | Validates | Time | Cost | Assurance |
|------|-----------|------|------|-----------|
| DV | Domain control | Minutes | Free/Low | Basic |
| OV | Domain + Organization | Days | Moderate | Medium |
| EV | Extensive legal verification | Weeks | High | Highest |

🎯 **Exam Tip:** Know that DV only verifies domain control, OV adds organization verification, and EV provides the highest assurance with extensive verification.

---

## Special Certificate Types

### Wildcard Certificates

Cover a domain and all its single-level subdomains.

**Example:** `*.example.com` covers:
- www.example.com ✓
- mail.example.com ✓
- shop.example.com ✓
- sub.sub.example.com ✗ (multiple levels not covered)

**Advantages:**
- Single certificate for many subdomains
- Easier management
- Cost effective

**Disadvantages:**
- Compromise affects all subdomains
- Can't cover multiple domain levels
- Some compliance requirements prohibit wildcards

### SAN Certificates (Multi-Domain)

Subject Alternative Name certificates cover multiple specific domains.

**Example:** Single certificate covering:
- www.example.com
- example.com
- www.example.org
- app.different-domain.com

**Advantages:**
- Cover completely different domains
- More specific than wildcards
- Required for many modern applications

**Use case:** Organization with multiple brands/domains wanting unified certificate management.

### Self-Signed Certificates

Certificates where the issuer and subject are the same—signed by the entity itself, not a CA.

```
Issuer: CN=My Server
Subject: CN=My Server
(Same entity)
```

**Advantages:**
- Free
- Instant creation
- No external dependency

**Disadvantages:**
- Not trusted by browsers (no CA vouching)
- Users see scary warnings
- No identity verification
- Vulnerable to man-in-the-middle (attacker can also self-sign)

**Appropriate uses:**
- Development and testing environments
- Internal applications where trust is established through other means
- Lab environments

**Inappropriate uses:**
- Public-facing websites
- Production environments requiring user trust
- Anything where security warnings would concern users

### Code Signing Certificates

Used to sign software, proving publisher identity and code integrity.

**What they verify:**
- Publisher identity (who signed the code)
- Code hasn't been modified since signing

**Used by:**
- Software developers distributing applications
- Driver publishers
- Mobile app developers

### Email Certificates (S/MIME)

Used to sign and encrypt email messages.

**Capabilities:**
- Sign emails (prove sender identity, ensure integrity)
- Encrypt emails (confidentiality)

**Issued to:** Individual email addresses, not domains

---

## Certificate Lifecycle

Certificates have defined lifespans and require active management.

### 1. Certificate Signing Request (CSR)

The process begins with generating a key pair and creating a CSR.

**CSR contains:**
- Public key to be certified
- Identifying information (domain, organization)
- Proof requester has corresponding private key (CSR is signed with it)

**CSR does NOT contain:** The private key (never shared)

```
-----BEGIN CERTIFICATE REQUEST-----
MIICVjCCAT4CAQAwETEPMA0GA1UEAwwGYWJjLmNvbTCCASIwDQYJKoZIhvcNAQEB
...
-----END CERTIFICATE REQUEST-----
```

### 2. Validation and Issuance

CA receives CSR, performs validation based on certificate type (DV/OV/EV), and if approved, signs the certificate.

**Validation methods:**
- **Email:** CA sends email to admin@domain or registered contact
- **DNS:** Requester creates specific DNS record proving domain control
- **HTTP:** Requester places specific file at well-known URL

### 3. Installation and Usage

Certificate installed on server/device. Server presents certificate to clients during TLS handshake. Clients verify certificate before trusting connection.

### 4. Renewal

Before expiration, certificate must be renewed. Renewal may require revalidation depending on certificate type and CA policy.

**Best practice:** Renew well before expiration to avoid outages from expired certificates.

### 5. Revocation

If a certificate must be invalidated before expiration (private key compromised, employee left, domain sold), it's revoked.

---

## Certificate Revocation: Invalidating Compromised Certificates

Revocation is critical—a compromised certificate that remains trusted enables attacks until expiration.

### Certificate Revocation List (CRL)

CA publishes a list of revoked certificate serial numbers. Clients download and check the list.

**How CRL works:**
1. CA maintains list of revoked certificates
2. List published at URL (specified in certificate)
3. Clients periodically download CRL
4. When verifying certificate, client checks if serial number is on CRL
5. If on CRL, certificate rejected

**Advantages:**
- Simple concept
- Well-established

**Disadvantages:**
- CRLs can grow large (many revocations)
- Clients must download entire list
- Updates not real-time (client may have stale CRL)
- Privacy concern (CA knows nothing about which sites you verify)

### Online Certificate Status Protocol (OCSP)

Real-time certificate status checking. Client asks CA "is this specific certificate still valid?"

**How OCSP works:**
1. Client connects to website, receives certificate
2. Client sends OCSP request to CA's OCSP responder
3. OCSP responder returns status: good, revoked, or unknown
4. Client proceeds or rejects based on response

**Advantages:**
- Real-time status
- Small requests (single certificate, not entire list)
- Always current information

**Disadvantages:**
- Adds latency (extra network request)
- Privacy concern (CA knows which sites you visit)
- Availability dependency (OCSP server down = problems)

### OCSP Stapling

Server fetches its own OCSP response and "staples" it to the certificate during TLS handshake.

**How OCSP stapling works:**
1. Server periodically requests OCSP response for its own certificate
2. OCSP response is cached (valid for a period)
3. During TLS handshake, server sends certificate + OCSP response
4. Client verifies OCSP response (signed by CA)
5. No client-to-CA communication needed

**Advantages:**
- No client latency for OCSP check
- Client privacy preserved (CA doesn't see client requests)
- Reduced CA infrastructure load

**Best practice:** Enable OCSP stapling on servers.

| Method | Real-time | Privacy | Performance |
|--------|-----------|---------|-------------|
| CRL | No (cached list) | Good | Large downloads |
| OCSP | Yes | Poor (CA sees requests) | Per-certificate latency |
| OCSP Stapling | Yes | Good | Best—server handles it |

---

## Certificate Formats

Certificates are stored in various formats depending on platform and use case.

### PEM (Privacy Enhanced Mail)

**Characteristics:**
- Base64 encoded
- Text format (readable in text editor)
- Begins with `-----BEGIN CERTIFICATE-----`
- Most common format on Linux/Unix
- File extensions: .pem, .crt, .cer

**Example:**
```
-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAJC1HiIAZAiUMA0GCSqGSIb3Qa0LBBAYTEkFV
...
-----END CERTIFICATE-----
```

### DER (Distinguished Encoding Rules)

**Characteristics:**
- Binary format
- Not human-readable
- Commonly used on Windows and Java
- File extensions: .der, .cer

### PFX/P12 (PKCS#12)

**Characteristics:**
- Binary format
- Contains certificate AND private key (bundled)
- Password protected
- Used for certificate export/import with private key
- File extensions: .pfx, .p12

**Use case:** Moving certificate and private key between systems.

### P7B (PKCS#7)

**Characteristics:**
- Contains certificates only (no private key)
- Can contain certificate chain
- Base64 encoded
- File extensions: .p7b, .p7c

**Use case:** Distributing certificate chains without private keys.

### Format Summary

| Format | Encoding | Contains | Use |
|--------|----------|----------|-----|
| PEM | Base64 text | Cert or key (separate) | Linux/Unix, Apache |
| DER | Binary | Certificate | Windows, Java |
| PFX/P12 | Binary | Cert + private key | Export/import bundles |
| P7B | Base64 | Cert chain only | Chain distribution |

---

## Trust Models and Certificate Chains

How do clients determine which certificates to trust?

### Chain of Trust

Certificates form hierarchical chains from end-entity up to root CA.

```
Root CA (trusted by browser)
    ↓ signs
Intermediate CA
    ↓ signs
End-entity certificate (your website)
```

**Verification process:**
1. Server presents its certificate + intermediate certificates
2. Client verifies each signature up the chain
3. Chain must end at a root CA the client trusts
4. If chain validates to trusted root, certificate is trusted

**Why intermediates?**
- Root CA private key stays offline (maximum protection)
- If intermediate is compromised, only revoke intermediate
- Root remains trusted; issue new intermediate
- Limits blast radius of compromise

### Root Certificate Stores

Operating systems and browsers maintain lists of trusted root CAs.

**Who maintains:**
- Microsoft (Windows)
- Apple (macOS, iOS)
- Mozilla (Firefox)
- Google (Chrome, Android)

**How CAs get included:**
- Apply to root programs
- Pass audits (WebTrust, ETSI)
- Demonstrate secure operations
- Follow CA/Browser Forum requirements

**Removal:** CAs can be removed for security failures (DigiNotar, WoSign, Symantec subordinates were removed).

### Trust Hierarchies

**Single CA:**
```
Root CA → End certificates
```
Simple but single point of failure.

**Hierarchical (most common):**
```
Root CA → Intermediate CA(s) → End certificates
```
Root protection, limited compromise impact.

**Web of Trust (PGP model):**
No central authority. Users sign each other's keys. Trust flows through personal connections. Not used for web PKI.

---

## Certificate Pinning

Certificate pinning adds additional trust verification beyond normal certificate chain validation.

### The Problem Pinning Solves

Standard trust model: any trusted CA can issue certificate for any domain. If any CA is compromised, attacker can get fraudulent certificate for any site.

**Example:** Your browser trusts 100+ root CAs. If any one is compromised, attacker can impersonate your bank—even though your bank's real certificate is from a different CA.

### How Pinning Works

Application remembers ("pins") expected certificate or public key for specific sites. If presented certificate doesn't match pin, connection rejected—even if certificate is otherwise valid.

**Pinning options:**
- **Pin certificate:** Must match exact certificate (requires update when certificate renews)
- **Pin public key:** Must match public key (survives certificate renewal if same key used)
- **Pin intermediate/root:** More flexible; any certificate from that CA accepted

### Pinning Implementation

**HTTP Public Key Pinning (HPKP):** (Deprecated)
- Browser-based pinning via HTTP header
- Removed from browsers due to risks (pin wrong key = permanent lockout)

**Application-level pinning:**
- Mobile apps pin expected certificates for their servers
- Embedded in application code
- Provides strong protection against fraudulent certificates

### Pinning Tradeoffs

**Advantages:**
- Protection against CA compromise
- Stops man-in-the-middle with fraudulent certificates
- Strong security for sensitive applications

**Disadvantages:**
- Operational complexity (must update pins for certificate changes)
- Risk of self-denial-of-service (wrong pin = app stops working)
- Difficult to change certificates without breaking pinning

---

## Key Exam Tips

🎯 **CA hierarchy:** Root CA signs intermediates; intermediates sign end-entity certificates. Root stays offline/protected.

🎯 **DV vs. OV vs. EV:** DV = domain only; OV = domain + organization; EV = extensive verification. Know the differences.

🎯 **Wildcard certificates:** `*.domain.com` covers single-level subdomains only.

🎯 **Self-signed:** Not trusted by browsers. Fine for testing, not production.

🎯 **CSR:** Contains public key and identity info. Never contains private key.

🎯 **CRL vs. OCSP:** CRL is a list (downloaded periodically); OCSP is real-time query. OCSP stapling is best practice.

🎯 **Certificate formats:** PEM is text/Base64; DER is binary; PFX/P12 includes private key.

🎯 **Revocation is critical:** Compromised certificates must be revoked immediately.

🎯 **Trust chains:** Verify from end-entity up to trusted root.

---

## Key Takeaways

- [ ] PKI binds public keys to identities through trusted Certificate Authorities
- [ ] CA hierarchy: Root CA (protected) → Intermediate CA → End-entity certificates
- [ ] Registration Authority (RA) verifies identity; CA signs certificates
- [ ] X.509 certificates contain subject, issuer, public key, validity period, and CA signature
- [ ] DV validates domain control only; OV adds organization; EV requires extensive verification
- [ ] Wildcard certificates (*.domain.com) cover single-level subdomains
- [ ] Self-signed certificates aren't trusted by browsers—appropriate only for testing/internal use
- [ ] CSR (Certificate Signing Request) contains public key and identity—never the private key
- [ ] Certificate lifecycle: CSR → Validation → Issuance → Usage → Renewal/Revocation
- [ ] CRL is a periodically downloaded list of revoked certificates
- [ ] OCSP provides real-time certificate status checking
- [ ] OCSP stapling lets servers include OCSP response, improving performance and privacy
- [ ] PEM is Base64 text format; DER is binary; PFX/P12 bundles certificate with private key
- [ ] Trust chains validate from end-entity certificate up to trusted root CA
- [ ] Certificate pinning adds extra verification beyond standard chain validation

---

## Check Your Understanding

**1. A user receives a browser warning: "This certificate is not trusted because it is self-signed." Explain what this means and why browsers display this warning.**

<details>
<summary>Show Answer</summary>
<strong>Self-signed means the certificate was signed by the entity itself, not a trusted CA.</strong> The certificate's issuer and subject are the same—no independent third party verified the identity. Browsers warn because: (1) No CA verified domain ownership, (2) Anyone can create self-signed certificate claiming to be any domain, (3) Man-in-the-middle attacker could present their own self-signed certificate. Without CA verification, there's no assurance the public key belongs to the claimed entity. Self-signed certificates are appropriate for testing/development but not production public-facing sites.
</details>

**2. A company's web server certificate expires over a holiday weekend. On Monday, users report they can't access the site securely. What happened and how should this be prevented?**

<details>
<summary>Show Answer</summary>
<strong>Expired certificates are not trusted.</strong> Browsers reject expired certificates because: (1) Organization may have stopped maintaining security after expiration, (2) Private key may have been compromised without detection, (3) Identity verification may no longer be valid. <strong>Prevention:</strong> (1) Monitor certificate expiration dates, (2) Set up alerts well before expiration (30-60 days), (3) Use automated certificate management (Let's Encrypt + certbot), (4) Include certificate renewal in operational procedures, (5) Document certificate inventory with expiration dates. Many outages are caused by forgotten certificate renewals—proactive monitoring is essential.
</details>

**3. Explain the difference between CRL and OCSP for certificate revocation checking. What are the advantages of OCSP stapling?**

<details>
<summary>Show Answer</summary>
<strong>CRL (Certificate Revocation List):</strong> CA publishes list of all revoked certificates. Clients download entire list periodically. Disadvantages: large lists, stale data between updates, download overhead.

<strong>OCSP (Online Certificate Status Protocol):</strong> Client queries CA about specific certificate in real-time. Advantages: current status, small requests. Disadvantages: latency (extra network request), privacy (CA sees what sites you visit), availability dependency.

<strong>OCSP Stapling advantages:</strong> Server pre-fetches its own OCSP response and includes it in TLS handshake. (1) No client latency—response already included, (2) Client privacy preserved—CA doesn't see client requests, (3) Reduced CA infrastructure load, (4) Still real-time validity (server refreshes periodically). OCSP stapling is best practice for certificate status checking.
</details>

**4. What is the purpose of intermediate CAs in the certificate hierarchy? Why not have root CAs sign all certificates directly?**

<details>
<summary>Show Answer</summary>
<strong>Intermediate CAs protect the root and limit compromise damage.</strong>

<strong>Root CA protection:</strong> Root CA private key is extremely valuable—if compromised, entire PKI collapses. Root keys are kept offline in hardware security modules, used only to sign intermediate CA certificates (rare operation). If root signed every certificate, it would need to be online constantly, increasing risk.

<strong>Limiting compromise:</strong> If intermediate CA is compromised, only that intermediate's certificates are affected. Revoke the intermediate, issue new one from root—most certificates continue working. If root were compromised, every certificate would be untrustworthy.

<strong>Operational flexibility:</strong> Different intermediates for different purposes (DV certificates, EV certificates, code signing). Separate risk profiles and policies.
</details>

**5. A certificate for www.example.com is presented during a TLS connection. Describe the chain validation process a browser performs.**

<details>
<summary>Show Answer</summary>
<strong>Chain validation verifies each link from end-entity to trusted root:</strong>

1. Browser receives certificate chain from server (end-entity + intermediates)
2. Verify end-entity certificate: (a) Check signature using intermediate CA's public key, (b) Verify validity period (not expired, not yet valid), (c) Verify subject/SAN matches requested domain (www.example.com), (d) Check key usage permits server authentication
3. Verify intermediate certificate: (a) Check signature using next level's public key, (b) Verify validity period, (c) Verify CA extension permits signing
4. Continue up chain until reaching certificate signed by known root CA
5. Verify root CA is in browser's trusted root store
6. Check revocation status (CRL or OCSP) for each certificate
7. If all checks pass, certificate is trusted; otherwise, display warning/error

Chain must be unbroken from end-entity to trusted root with all signatures valid.
</details>

**6. Compare DV, OV, and EV certificates. When would you recommend each type?**

<details>
<summary>Show Answer</summary>
<strong>DV (Domain Validation):</strong> Verifies domain control only. Fast (minutes), cheap/free. Recommend for: blogs, personal sites, any site needing encryption without identity verification. Not appropriate when proving organizational identity matters.

<strong>OV (Organization Validation):</strong> Verifies domain + organization exists. Days to issue, moderate cost. Recommend for: business websites, applications where organization name in certificate adds value. Provides more assurance than DV.

<strong>EV (Extended Validation):</strong> Extensive legal and operational verification. Weeks to issue, expensive. Recommend for: financial institutions, major e-commerce, government, any site where maximum identity assurance is required. Note: browsers no longer show visual distinction (green bar removed), but EV still provides highest verification level.

<strong>Selection criteria:</strong> Consider what you're proving—if users need assurance about who operates the site, choose higher validation. If just encrypting traffic (no identity claims), DV is sufficient.
</details>

**7. What information is contained in a Certificate Signing Request (CSR), and what is explicitly NOT included?**

<details>
<summary>Show Answer</summary>
<strong>CSR contains:</strong>
- Subject information (CN/domain name, organization, location, country)
- Requested public key
- Signature algorithm preference
- Requested extensions (SAN, key usage)
- Signature (CSR is signed with requester's private key, proving possession)

<strong>CSR does NOT contain:</strong>
- Private key (NEVER—this would defeat all security)
- CA signature (CA adds this when issuing certificate)
- Validity dates (CA determines these)
- Serial number (CA assigns this)

The private key stays with the requester at all times. CSR proves the requester has the private key corresponding to the public key (because they signed the CSR) without ever revealing the private key itself.
</details>

**8. An organization uses a wildcard certificate *.example.com. Which of these domains are covered: www.example.com, example.com, mail.example.com, dev.app.example.com, different.org?**

<details>
<summary>Show Answer</summary>
<strong>Covered:</strong>
- www.example.com ✓ (single-level subdomain)
- mail.example.com ✓ (single-level subdomain)

<strong>NOT covered:</strong>
- example.com ✗ (apex/root domain—no subdomain)
- dev.app.example.com ✗ (two-level subdomain—wildcard only covers one level)
- different.org ✗ (different domain entirely)

Wildcard `*.example.com` matches exactly one label before example.com. For apex domain coverage, include both `*.example.com` and `example.com` in SAN. For multi-level subdomains, either use separate certificates or include them specifically in SAN.
</details>

**9. What is certificate pinning, and what security problem does it address?**

<details>
<summary>Show Answer</summary>
<strong>Certificate pinning:</strong> Application remembers ("pins") expected certificate or public key for specific sites. Connection rejected if presented certificate doesn't match pin—even if otherwise valid.

<strong>Problem addressed:</strong> Standard PKI trusts any CA to issue certificates for any domain. If any trusted CA is compromised or malicious, attacker can obtain valid certificate for any site. Example: Browser trusts 100+ root CAs. Compromised CA issues fraudulent certificate for your bank. Without pinning, browser trusts it (valid chain to trusted root).

<strong>With pinning:</strong> App knows bank's real certificate/key. Fraudulent certificate doesn't match pin → connection rejected, even though fraudulent cert has valid CA chain.

<strong>Tradeoff:</strong> Pinning requires updating pins when legitimate certificates change. Wrong pins cause self-denial-of-service. Most valuable for high-security applications (banking apps, sensitive mobile apps).
</details>

**10. Convert this scenario to appropriate certificate type: A mobile banking app needs to verify it's connecting to the real bank server, even if a CA is compromised.**

<details>
<summary>Show Answer</summary>
<strong>Solution: EV certificate + certificate pinning in the mobile app.</strong>

<strong>EV certificate:</strong> Provides highest identity assurance through extensive verification. Confirms the certificate was issued to a legally verified entity.

<strong>Certificate pinning:</strong> Critical protection against CA compromise. The mobile app is hardcoded with the bank's expected public key or certificate hash. Even if an attacker obtains a fraudulent certificate from a compromised CA, the app rejects it because it doesn't match the pinned value. Only certificates matching the pin are accepted.

<strong>Implementation:</strong> App pins the bank's public key (survives certificate renewal if key unchanged) or intermediate CA certificate (allows certificate changes within same CA). Include backup pins for rotation. Have process to update app when pins must change.

This defense-in-depth approach protects against both fraudulent certificates and CA compromise—critical for high-value financial applications.
</details>

---

## Next Lesson Preview

In **Lesson 7: Malware Types and Indicators**, we shift from cryptography to threats. You'll learn to identify different malware categories—viruses, worms, trojans, ransomware, rootkits, and more—understand how each operates, and recognize the indicators of compromise that reveal malware infections. This knowledge is essential for threat detection, incident response, and security operations.

---

✅ **Lesson 6 Complete**

**Progress:** 6 of 30 lessons complete (20%)

---

*Next up: Lesson 7 - Malware Types and Indicators*