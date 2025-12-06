# Lab 6: PKI and Certificates

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 1.4 - PKI concepts

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is a Certificate Authority (CA), and why do we need them?**

2. **Explain the difference between a root CA and an intermediate CA. Why do we use intermediate CAs?**

3. **What information is contained in an X.509 digital certificate?**

4. **What is the difference between DV, OV, and EV certificates?**

5. **How does certificate revocation work? Explain both CRL and OCSP.**

---

## Section 2: Hands-On Activities

### Activity A: PKI Components Mapping

**Goal:** Understand the roles of each PKI component.

**Match each component to its function:**

| Component | Function |
|-----------|----------|
| Certificate Authority (CA) | |
| Registration Authority (RA) | |
| Certificate Revocation List (CRL) | |
| OCSP Responder | |
| Certificate Repository | |
| Key Recovery Agent | |

**Functions:**
- A) Issues and signs certificates
- B) Validates identity before certificate issuance
- C) Stores issued certificates for public access
- D) Provides real-time certificate status checks
- E) List of revoked certificates published periodically
- F) Recovers encryption keys when needed (key escrow)

**PKI trust flow:**

Put these steps in order for obtaining a certificate:

| Step | Order |
|------|-------|
| CA signs the certificate with its private key | |
| User generates key pair | |
| RA validates user's identity | |
| Certificate is installed and used | |
| User submits CSR to RA/CA | |

---

### Activity B: Examining Website Certificates

**Goal:** Analyze real SSL/TLS certificates in detail.

**Examine three websites:**

**Website 1: Major Bank (your choice)**

Click the padlock → View certificate details

| Field | Value |
|-------|-------|
| Website URL | |
| **Subject** | |
| Common Name (CN) | |
| Organization (O) | |
| **Issuer** | |
| Issuer CN | |
| Issuer O | |
| **Validity** | |
| Valid From | |
| Valid To | |
| **Key Info** | |
| Public Key Algorithm | |
| Key Size | |
| **Signature** | |
| Signature Algorithm | |
| **Extensions** | |
| Subject Alternative Names (SANs) | |
| Key Usage | |
| Extended Key Usage | |

**Certificate chain (trust path):**

| Level | Certificate Name | Type |
|-------|------------------|------|
| Root (top) | | Root CA |
| Intermediate | | Intermediate CA |
| Leaf (bottom) | | End-entity |

**Website 2: Google.com**

| Field | Value |
|-------|-------|
| Subject CN | |
| Issuer | |
| Valid From/To | |
| Key Algorithm/Size | |
| SANs (list a few) | |
| Chain depth | |

**Website 3: Government site (.gov)**

| Field | Value |
|-------|-------|
| Subject CN | |
| Organization | |
| Issuer | |
| Certificate type (DV/OV/EV) | |
| Key Algorithm/Size | |

**How to identify certificate type:**

| Type | How to Identify |
|------|-----------------|
| DV (Domain Validation) | |
| OV (Organization Validation) | |
| EV (Extended Validation) | |

---

### Activity C: Windows Certificate Stores

**Goal:** Explore certificates installed on your Windows system.

**Open Certificate Manager:**

Run `certmgr.msc` (user certificates) or `certlm.msc` (computer certificates, requires admin)

**User Certificate Stores (`certmgr.msc`):**

| Store | Purpose | Count of Certs |
|-------|---------|----------------|
| Personal | | |
| Trusted Root Certification Authorities | | |
| Intermediate Certification Authorities | | |
| Trusted Publishers | | |
| Untrusted Certificates | | |

**Examine a Root CA certificate:**

Navigate to: Trusted Root Certification Authorities → Certificates

Pick a well-known CA (DigiCert, GlobalSign, Let's Encrypt, etc.):

| Field | Value |
|-------|-------|
| Certificate name | |
| Issued To | |
| Issued By | |
| Valid From | |
| Expiration Date | |
| Signature Algorithm | |
| Intended Purposes | |

**Why is this important?**

If an attacker adds a malicious root CA to your trusted store, they can:

1. _________________________________________________________________

2. _________________________________________________________________

**Check for suspicious root CAs:**

Look through your Trusted Root CAs. Any you don't recognize?

| Suspicious/Unknown CA | Notes |
|----------------------|-------|
| | |
| | |

---

### Activity D: Certificate Validation Process

**Goal:** Understand how browsers validate certificates.

**Certificate validation checks:**

| Check | What It Verifies | Failure Result |
|-------|------------------|----------------|
| Signature verification | | |
| Date/time validity | | |
| Revocation status | | |
| Domain name match | | |
| Trust chain | | |
| Key usage | | |

**Simulate validation failures:**

Try visiting these sites (safely - just observe the error):

| Site | Error Type | Browser Warning Message |
|------|------------|------------------------|
| expired.badssl.com | Expired certificate | |
| wrong.host.badssl.com | Name mismatch | |
| self-signed.badssl.com | Self-signed (untrusted) | |
| revoked.badssl.com | Revoked certificate | |

**Note:** These are intentionally misconfigured test sites from badssl.com

**What error code did you see?**

| Error Type | Error Code (e.g., NET::ERR_...) |
|------------|--------------------------------|
| Expired | |
| Wrong host | |
| Self-signed | |
| Revoked | |

**Should you ever click "Proceed anyway"?**

When is it acceptable? _________________________________________________

When is it dangerous? _________________________________________________

---

### Activity E: Certificate Types and Use Cases

**Goal:** Match certificate types to appropriate scenarios.

**Certificate validation levels:**

| Type | Validation Process | Visual Indicator | Time to Issue | Cost |
|------|-------------------|------------------|---------------|------|
| DV | | | | |
| OV | | | | |
| EV | | | | |

**Certificate types by use:**

| Certificate Type | What It Secures | Example |
|------------------|-----------------|---------|
| Single domain | | |
| Wildcard | | |
| Multi-domain (SAN) | | |
| Code signing | | |
| Email (S/MIME) | | |
| Client certificate | | |

**Scenario matching:**

| Scenario | Best Certificate Type |
|----------|----------------------|
| Secure www.example.com only | |
| Secure *.example.com (all subdomains) | |
| Secure example.com, example.net, example.org | |
| Sign software executables | |
| Authenticate users to VPN | |
| Encrypt and sign emails | |
| E-commerce site needing maximum trust | |
| Internal development server | |
| API server with multiple hostnames | |

---

### Activity F: Certificate Lifecycle

**Goal:** Understand certificate management from creation to revocation.

**Certificate lifecycle stages:**

| Stage | Actions Involved | Who Performs |
|-------|------------------|--------------|
| Key Generation | | |
| Certificate Request (CSR) | | |
| Validation | | |
| Issuance | | |
| Installation | | |
| Monitoring | | |
| Renewal | | |
| Revocation | | |

**CSR (Certificate Signing Request) contents:**

What information is included in a CSR?

| Field | Purpose | Example |
|-------|---------|---------|
| Common Name (CN) | | |
| Organization (O) | | |
| Organizational Unit (OU) | | |
| City/Locality (L) | | |
| State/Province (ST) | | |
| Country (C) | | |
| Public Key | | |

**What is NOT in a CSR?**

_________________________________________________________________

---

### Activity G: Revocation Mechanisms

**Goal:** Compare CRL and OCSP for certificate revocation checking.

**CRL vs OCSP comparison:**

| Aspect | CRL | OCSP |
|--------|-----|------|
| Full name | | |
| How it works | | |
| Update frequency | | |
| Bandwidth usage | | |
| Privacy | | |
| Real-time? | | |
| Single point of failure | | |

**OCSP Stapling:**

What is OCSP stapling, and what problem does it solve?

_________________________________________________________________

_________________________________________________________________

**Check revocation settings in your browser:**

**Chrome:** Settings → Privacy and security → Security → Advanced

| Setting | Your Configuration |
|---------|-------------------|
| Check for server certificate revocation | [ ] Enabled [ ] Disabled |

**Why might revocation checking fail?**

| Scenario | Impact |
|----------|--------|
| CRL server is down | |
| OCSP responder is slow | |
| Network blocks revocation traffic | |
| CRL hasn't been updated yet | |

---

### Activity H: Trust Models

**Goal:** Compare different PKI trust models.

**Trust model comparison:**

| Model | How Trust Works | Example |
|-------|-----------------|---------|
| Single CA | | |
| Hierarchical | | |
| Mesh/Cross-certification | | |
| Web of Trust | | |

**Hierarchical trust (most common):**

Draw or describe the trust chain:

```
[_________________]  ← Root CA (self-signed, offline)
         |
[_________________]  ← Intermediate CA (signs end certs)
         |
[_________________]  ← End-entity certificate (website, user)
```

**Why use intermediate CAs instead of root CA directly?**

1. _________________________________________________________________

2. _________________________________________________________________

**What happens if a root CA is compromised?**

_________________________________________________________________

**What happens if an intermediate CA is compromised?**

_________________________________________________________________

---

### Activity I: Certificate Pinning

**Goal:** Understand certificate pinning for enhanced security.

**What is certificate pinning?**

_________________________________________________________________

**Types of pinning:**

| Type | What's Pinned | Pros | Cons |
|------|---------------|------|------|
| Certificate pinning | | | |
| Public key pinning | | | |
| CA pinning | | | |

**Where is pinning used?**

| Application | Why Pinning Matters |
|-------------|---------------------|
| Mobile banking apps | |
| Password managers | |
| Critical infrastructure | |

**Risks of pinning:**

| Risk | Consequence |
|------|-------------|
| Pinned cert expires | |
| CA changes | |
| Key compromise | |
| Disaster recovery | |

---

### Activity J: Certificate Formats

**Goal:** Recognize common certificate file formats.

**Certificate format comparison:**

| Format | Extension(s) | Encoding | Contains | Common Use |
|--------|--------------|----------|----------|------------|
| PEM | | | | |
| DER | | | | |
| PKCS#7 | | | | |
| PKCS#12 | | | | |

**Identify the format:**

| File Content/Description | Format |
|-------------------------|--------|
| Starts with "-----BEGIN CERTIFICATE-----" | |
| Binary file, not human-readable | |
| Contains certificate AND private key, password-protected | |
| Chain of certificates, no private key | |

**Conversion scenarios:**

| From | To | Why Needed |
|------|----|------------|
| PEM | DER | |
| PFX | PEM (separate cert and key) | |
| Multiple PEM certs | PKCS#7 bundle | |

---

### Tier 2 Bonus: OpenSSL Certificate Operations

> ⚠️ **Requires:** OpenSSL (Git Bash on Windows, native on Mac/Linux)

---

### Activity K: Create a Self-Signed Certificate

**Goal:** Generate a certificate for testing purposes.

**Generate private key and self-signed certificate:**

```bash
openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365 -nodes
```

You'll be prompted for certificate details:

| Prompt | What to Enter |
|--------|---------------|
| Country | |
| State | |
| Locality | |
| Organization | |
| Org Unit | |
| Common Name | |
| Email | |

**Examine the certificate:**

```bash
openssl x509 -in cert.pem -text -noout
```

| Field | Value from Your Cert |
|-------|---------------------|
| Subject | |
| Issuer | |
| Validity (Not Before) | |
| Validity (Not After) | |
| Public Key Algorithm | |
| Signature Algorithm | |

**Note:** Subject = Issuer because it's self-signed!

---

### Activity L: Generate a CSR

**Goal:** Create a Certificate Signing Request.

**Generate key and CSR:**

```bash
openssl req -new -newkey rsa:2048 -keyout mykey.pem -out myrequest.csr -nodes
```

**Examine the CSR:**

```bash
openssl req -in myrequest.csr -text -noout
```

| CSR Field | Value |
|-----------|-------|
| Subject | |
| Public Key Algorithm | |
| Signature Algorithm | |

**What's in the CSR file?**

```bash
cat myrequest.csr
```

Does it start with `-----BEGIN CERTIFICATE REQUEST-----`? [ ] Yes [ ] No

**Could this CSR be used to get a real certificate?**

What would need to happen? _________________________________________________

---

### Activity M: Examine a Website Certificate with OpenSSL

**Goal:** Retrieve and analyze a certificate from a live website.

**Connect to a website and get its certificate:**

```bash
openssl s_client -connect google.com:443 -servername google.com </dev/null 2>/dev/null | openssl x509 -text -noout
```

| Field | Value |
|-------|-------|
| Subject CN | |
| Issuer CN | |
| Valid From | |
| Valid To | |
| SANs (Subject Alternative Names) | |

**Get the full certificate chain:**

```bash
openssl s_client -connect google.com:443 -servername google.com -showcerts </dev/null
```

How many certificates in the chain? _______

| Position | Certificate CN |
|----------|----------------|
| 1 (end-entity) | |
| 2 (intermediate) | |
| 3 (root, if shown) | |

**Clean up:** Delete key.pem, cert.pem, mykey.pem, myrequest.csr

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** Your company's SSL certificate expires over the weekend, and customers see security warnings. What process failures allowed this to happen, and how would you prevent it?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** A security researcher discovers that a CA was compromised and issued fraudulent certificates. As a security administrator, what immediate actions should you take?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A developer asks why they can't just use self-signed certificates for a public-facing website. What would you explain to them?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain the role of each PKI component (CA, RA, CRL, OCSP)
- [ ] Identify certificate fields and their purposes
- [ ] Trace a certificate chain from end-entity to root CA
- [ ] Differentiate between DV, OV, and EV certificates
- [ ] Explain certificate validation process
- [ ] Compare CRL vs OCSP revocation checking
- [ ] Describe the certificate lifecycle
- [ ] Recognize common certificate formats (PEM, DER, PFX)
- [ ] Explain why intermediate CAs are used
- [ ] Understand certificate pinning concepts

---

## What You Learned Today

- ✅ Mapped PKI components to their functions
- ✅ Examined real website certificates in detail
- ✅ Explored Windows certificate stores
- ✅ Tested certificate validation failures
- ✅ Matched certificate types to use cases
- ✅ Traced the certificate lifecycle
- ✅ Compared CRL and OCSP revocation
- ✅ Analyzed trust models
- ✅ Understood certificate pinning
- ✅ Recognized certificate formats
- ✅ (Tier 2) Created self-signed certificates and CSRs with OpenSSL

**Next Lab:** Malware Types and Indicators - understanding malware categories and detection.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 6: PKI and Certificates*