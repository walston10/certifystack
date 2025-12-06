# Lab 6: PKI and Certificates - Solution Guide

**Note to Students:** Review this AFTER completing your own work. PKI is complex but foundational—understanding it unlocks HTTPS, digital signatures, authentication, and more.

---

## Section 1: Concept Check - Answers

**1. What is a Certificate Authority (CA), and why do we need them?**

**Answer:**

A **Certificate Authority (CA)** is a trusted organization that issues digital certificates, binding public keys to identities.

**Why we need CAs:**
- **Trust anchor** - Browsers/systems trust a small set of CAs
- **Identity verification** - CAs verify you own the domain/organization before issuing certs
- **Scalability** - Users trust CAs, CAs vouch for websites (transitive trust)
- **Revocation management** - CAs can revoke compromised certificates

**Without CAs:** Everyone would need to manually verify every public key they encounter—impractical at internet scale.

---

**2. Explain root CA vs intermediate CA. Why use intermediate CAs?**

**Answer:**

| Type | Description |
|------|-------------|
| **Root CA** | Top of trust hierarchy, self-signed, stored in trust stores |
| **Intermediate CA** | Signed by root (or another intermediate), signs end-entity certs |

**Why intermediate CAs:**

1. **Security** - Root CA private key stays offline/air-gapped; intermediate handles daily operations
2. **Damage control** - If intermediate is compromised, revoke it; root remains trusted
3. **Flexibility** - Different intermediates for different purposes (DV, OV, EV, code signing)
4. **Compliance** - Meets industry requirements for key protection

**Rule:** Root CAs should NEVER directly sign end-entity certificates in production.

---

**3. What information is in an X.509 certificate?**

**Answer:**

| Field | Purpose |
|-------|---------|
| **Version** | X.509 version (usually v3) |
| **Serial Number** | Unique identifier from CA |
| **Signature Algorithm** | How CA signed the cert (e.g., SHA256withRSA) |
| **Issuer** | Who issued it (CA name) |
| **Validity Period** | Not Before / Not After dates |
| **Subject** | Who the cert is for (CN, O, OU, etc.) |
| **Public Key** | Subject's public key |
| **Extensions** | Key Usage, SANs, CRL/OCSP URLs, etc. |
| **Signature** | CA's signature over the certificate |

---

**4. Difference between DV, OV, and EV certificates?**

**Answer:**

| Type | Validation | Time | Trust Level | Visual Indicator |
|------|------------|------|-------------|------------------|
| **DV** | Domain ownership only (email, DNS, HTTP) | Minutes | Basic | Padlock only |
| **OV** | Domain + organization verification | Days | Medium | Padlock, org in cert details |
| **EV** | Extensive org verification, legal docs | Weeks | Highest | Padlock, org name visible (historically green bar) |

**Key insight:** All three provide the same encryption strength—the difference is identity assurance.

---

**5. How does certificate revocation work (CRL vs OCSP)?**

**Answer:**

| Method | How It Works |
|--------|--------------|
| **CRL (Certificate Revocation List)** | CA publishes a list of revoked cert serial numbers; clients download and cache it |
| **OCSP (Online Certificate Status Protocol)** | Client asks OCSP responder "Is this cert valid?" and gets real-time answer |

| Aspect | CRL | OCSP |
|--------|-----|------|
| Real-time | No (periodic updates) | Yes |
| Bandwidth | High (download entire list) | Low (single query) |
| Privacy | Good (client downloads locally) | Poor (CA sees what you visit) |
| Latency | Low (after cached) | Higher (network request) |

**OCSP Stapling** solves privacy: Server fetches its own OCSP response and "staples" it to the TLS handshake.

---

## Section 2: Activity Solutions

### Activity A: PKI Components - Answers

| Component | Function |
|-----------|----------|
| Certificate Authority (CA) | A) Issues and signs certificates |
| Registration Authority (RA) | B) Validates identity before certificate issuance |
| Certificate Revocation List (CRL) | E) List of revoked certificates published periodically |
| OCSP Responder | D) Provides real-time certificate status checks |
| Certificate Repository | C) Stores issued certificates for public access |
| Key Recovery Agent | F) Recovers encryption keys when needed (key escrow) |

**PKI trust flow - correct order:**

| Step | Order |
|------|-------|
| User generates key pair | 1 |
| User submits CSR to RA/CA | 2 |
| RA validates user's identity | 3 |
| CA signs the certificate | 4 |
| Certificate is installed and used | 5 |

---

### Activity B: Certificate Fields - Key Points

**Common certificate fields:**

| Field | What to Look For |
|-------|------------------|
| Subject CN | Domain name (e.g., www.google.com) |
| Subject O | Organization name (e.g., Google LLC) |
| Issuer | CA that signed it (e.g., DigiCert, Let's Encrypt) |
| Valid From/To | Typically 1 year for public certs |
| Key Size | 2048-bit RSA or 256-bit ECC minimum |
| SANs | Additional domain names covered |
| Key Usage | Digital Signature, Key Encipherment |
| Extended Key Usage | Server Authentication, Client Authentication |

**How to identify certificate type:**

| Type | Identification |
|------|----------------|
| DV | No organization info, just domain; issued quickly |
| OV | Organization name present in Subject; verified org |
| EV | Extensive org info, often serial number, jurisdiction; historically green bar |

---

### Activity C: Windows Certificate Stores - Answers

| Store | Purpose |
|-------|---------|
| Personal | Your certificates (user or computer) |
| Trusted Root CAs | CAs you trust to issue certificates |
| Intermediate CAs | CAs that chain up to root CAs |
| Trusted Publishers | Software publishers you trust |
| Untrusted Certificates | Explicitly blocked certificates |

**If attacker adds malicious root CA:**
1. Can issue certificates for any domain that your system will trust
2. Can perform man-in-the-middle attacks on any HTTPS connection
3. Complete compromise of all TLS security

---

### Activity D: Certificate Validation - Answers

| Check | What It Verifies | Failure Result |
|-------|------------------|----------------|
| Signature verification | CA's signature is valid | Certificate rejected |
| Date/time validity | Current date within validity period | "Expired" error |
| Revocation status | Certificate not on CRL/OCSP | "Revoked" error |
| Domain name match | CN/SAN matches requested domain | "Name mismatch" error |
| Trust chain | Chain leads to trusted root CA | "Untrusted" error |
| Key usage | Certificate allowed for TLS | May be rejected |

**badssl.com errors:**

| Error Type | Typical Code |
|------------|--------------|
| Expired | NET::ERR_CERT_DATE_INVALID |
| Wrong host | NET::ERR_CERT_COMMON_NAME_INVALID |
| Self-signed | NET::ERR_CERT_AUTHORITY_INVALID |
| Revoked | NET::ERR_CERT_REVOKED |

**When to click "Proceed anyway":**
- **Acceptable:** Internal development servers, test environments you control
- **Dangerous:** Any public website, especially banking, email, shopping

---

### Activity E: Certificate Types - Answers

**Validation levels:**

| Type | Validation | Visual Indicator | Time | Cost |
|------|------------|------------------|------|------|
| DV | Prove domain ownership | Padlock | Minutes | Free-$100 |
| OV | Domain + verify org exists | Padlock, org in details | 1-3 days | $100-500 |
| EV | Extensive legal/org verification | Padlock, org name shown | 1-2 weeks | $500-2000 |

**Certificate types:**

| Type | Secures | Example |
|------|---------|---------|
| Single domain | One FQDN | www.example.com |
| Wildcard | Domain + all subdomains | *.example.com |
| Multi-domain (SAN) | Multiple specific domains | example.com, example.net |
| Code signing | Software executables | .exe, .dll files |
| Email (S/MIME) | Email encryption/signing | user@example.com |
| Client certificate | User authentication | VPN, mutual TLS |

**Scenario matching:**

| Scenario | Certificate Type |
|----------|------------------|
| www.example.com only | Single domain |
| *.example.com | Wildcard |
| example.com + .net + .org | Multi-domain (SAN) |
| Sign software | Code signing |
| User VPN auth | Client certificate |
| Encrypt emails | S/MIME |
| E-commerce max trust | EV |
| Internal dev server | Self-signed or internal CA |
| API with multiple hostnames | Multi-domain (SAN) |

---

### Activity F: Certificate Lifecycle - Answers

| Stage | Actions | Who Performs |
|-------|---------|--------------|
| Key Generation | Create public/private key pair | Requestor |
| CSR | Create and submit CSR | Requestor |
| Validation | Verify identity/domain ownership | RA/CA |
| Issuance | Sign and issue certificate | CA |
| Installation | Install cert and key on server | Admin |
| Monitoring | Track expiration, security | Admin |
| Renewal | Request new cert before expiry | Admin/CA |
| Revocation | Invalidate compromised cert | Admin/CA |

**CSR contents:**
- Common Name, Organization, OU, Location, State, Country
- **Public key** (critical!)

**NOT in CSR:** Private key (never leaves your system)

---

### Activity G: CRL vs OCSP - Answers

| Aspect | CRL | OCSP |
|--------|-----|------|
| Full name | Certificate Revocation List | Online Certificate Status Protocol |
| How it works | Download list, check locally | Query server for specific cert |
| Update frequency | Periodic (hours/days) | Real-time |
| Bandwidth | High (full list) | Low (single query) |
| Privacy | Good | Poor (CA sees queries) |
| Real-time? | No | Yes |
| SPOF | CRL distribution point | OCSP responder |

**OCSP Stapling:**
Server pre-fetches its own OCSP response (signed by CA) and includes it in TLS handshake. Client gets revocation status without contacting CA directly, solving privacy and latency issues.

**Revocation failure scenarios:**

| Scenario | Impact |
|----------|--------|
| CRL server down | Can't get updated list, may accept revoked certs |
| OCSP slow | Connection delays, possible timeout |
| Network blocks revocation | No status check, may fail-open |
| CRL not updated | Recent revocations missed |

---

### Activity H: Trust Models - Answers

| Model | How Trust Works | Example |
|-------|-----------------|---------|
| Single CA | One CA issues all certs | Small organization |
| Hierarchical | Root → Intermediate → End-entity | Public internet PKI |
| Mesh | CAs cross-certify each other | Government bridges |
| Web of Trust | Users sign each other's keys | PGP/GPG |

**Why use intermediate CAs:**
1. **Security:** Root stays offline, protected; if intermediate compromised, revoke it without losing root
2. **Operations:** Intermediate handles daily operations; root only signs intermediates

**Root CA compromised:** Catastrophic—all certificates issued by entire hierarchy become untrusted. Must replace root in all trust stores worldwide.

**Intermediate CA compromised:** Serious but contained—revoke the intermediate, issue new one from root, reissue affected certificates.

---

### Activity I: Certificate Pinning - Answers

**Certificate pinning:** Hardcoding expected certificate or public key into application, rejecting any other cert even if CA-signed.

| Type | What's Pinned | Pros | Cons |
|------|---------------|------|------|
| Certificate | Exact certificate | Simple, precise | Must update app for renewal |
| Public key | Public key only | Survives cert renewal | Key compromise requires update |
| CA | Specific CA | Flexible | Compromised CA still trusted |

**Where pinning is used:**

| Application | Why |
|-------------|-----|
| Mobile banking | Prevent MITM even on compromised devices |
| Password managers | Protect master credentials |
| Critical infrastructure | Extra assurance for sensitive systems |

**Pinning risks:**

| Risk | Consequence |
|------|-------------|
| Pinned cert expires | App stops working |
| CA changes | App breaks if CA pinned |
| Key compromise | Must push emergency app update |
| Disaster recovery | Backup pins essential |

---

### Activity J: Certificate Formats - Answers

| Format | Extension | Encoding | Contains | Use |
|--------|-----------|----------|----------|-----|
| PEM | .pem, .crt, .cer | Base64 text | Cert or key | Linux/Unix, OpenSSL |
| DER | .der, .cer | Binary | Cert only | Java, Windows |
| PKCS#7 | .p7b, .p7c | Base64 or binary | Cert chain (no key) | Certificate chains |
| PKCS#12 | .pfx, .p12 | Binary | Cert + private key | Windows, import/export |

**Identify format:**

| Content | Format |
|---------|--------|
| "-----BEGIN CERTIFICATE-----" | PEM |
| Binary, not readable | DER |
| Cert AND key, password-protected | PKCS#12 (PFX) |
| Chain only, no key | PKCS#7 |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: SSL certificate expires over weekend**

**Process failures:**
- No monitoring/alerting for certificate expiration
- No calendar reminders for renewal
- Manual renewal process with no automation
- Single person responsible (single point of failure)

**Prevention:**
- Implement certificate monitoring tools
- Automate renewal (Let's Encrypt, ACME)
- Set alerts at 90, 60, 30, 14, 7 days before expiry
- Document renewal process, assign backup personnel
- Consider longer validity certificates where appropriate

---

**Scenario 2: CA compromise discovered**

**Immediate actions:**
1. **Identify affected certificates** - Check all your certs issued by that CA
2. **Replace certificates** - Get new certs from different CA
3. **Remove CA from trust stores** - Block the compromised CA
4. **Monitor for abuse** - Watch for certificates you didn't request
5. **Communicate** - Inform stakeholders, customers
6. **Review logs** - Check for certificate-based attacks

---

**Scenario 3: Developer wants self-signed for public site**

**Explain:**
1. **Browsers don't trust it** - Users see scary warning, most won't proceed
2. **No identity verification** - Anyone can create a self-signed cert claiming to be your site
3. **No revocation** - Can't invalidate if compromised
4. **Customer trust** - Screams "unprofessional" or "phishing"
5. **SEO impact** - Search engines may penalize
6. **Free alternatives exist** - Let's Encrypt provides free DV certs

**Self-signed is fine for:** Internal testing, development environments, private networks

---

## Key Exam Tips

1. **PKI components:**
   - CA = issues certs
   - RA = validates identity
   - CRL = revocation list
   - OCSP = real-time revocation

2. **Certificate chain:** Root → Intermediate → End-entity

3. **DV/OV/EV:** Same encryption, different identity verification levels

4. **Root CA:** Self-signed, offline, in trust stores

5. **CRL vs OCSP:**
   - CRL = download list periodically
   - OCSP = query per certificate, real-time

6. **OCSP Stapling:** Server provides OCSP response to solve privacy

7. **Certificate formats:**
   - PEM = text, "-----BEGIN..."
   - PFX/P12 = binary, contains private key

8. **CSR contains:** Public key + identity info (NEVER private key)

9. **Pinning:** Hardcode expected cert/key for extra security

---

## Common Mistakes to Avoid

❌ Thinking EV is "more encrypted" (it's just more validated)

❌ Confusing root CA with intermediate CA

❌ Putting private key in CSR (CSR has PUBLIC key only)

❌ Ignoring certificate expiration monitoring

❌ Thinking self-signed = insecure encryption (encryption is fine, trust is the problem)

❌ Clicking through certificate warnings on real sites

---

**Congratulations on completing Lab 6!**

You now understand PKI—the infrastructure that makes HTTPS, code signing, and secure authentication possible.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 6: PKI and Certificates - Solution Guide*