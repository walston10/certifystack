# Lab 4: Cryptography Fundamentals

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 1.4 - Explain the importance of using appropriate cryptographic solutions

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the fundamental difference between symmetric and asymmetric encryption? When would you use each?**

2. **Explain the "key distribution problem" with symmetric encryption. How does asymmetric encryption solve it?**

3. **Why is AES-256 considered the gold standard for symmetric encryption today?**

4. **What is key stretching, and why is it used for password storage?**

5. **Explain what a salt is and how it prevents rainbow table attacks.**

---

## Section 2: Hands-On Activities

### Activity A: Symmetric vs Asymmetric Comparison

**Goal:** Understand the differences and use cases for each encryption type.

**Complete the comparison table:**

| Characteristic | Symmetric Encryption | Asymmetric Encryption |
|----------------|---------------------|----------------------|
| Number of keys | | |
| Key relationship | | |
| Speed | | |
| Key length (typical) | | |
| Primary use case | | |
| Key distribution | | |
| Examples of algorithms | | |
| Scalability for many users | | |

**Scenario matching - which encryption type?**

| Scenario | Symmetric or Asymmetric? | Why? |
|----------|--------------------------|------|
| Encrypting a 10GB database backup | | |
| Securely exchanging keys with a new partner | | |
| HTTPS connection to a website | | |
| Encrypting your laptop's hard drive | | |
| Digital signature on a document | | |
| VPN tunnel carrying bulk data | | |
| Email encryption (initial setup) | | |
| File encryption on a USB drive | | |

**The hybrid approach:**

Most real-world encryption uses BOTH types. Explain how HTTPS uses hybrid encryption:

1. **Asymmetric phase:** _________________________________________________

2. **Symmetric phase:** _________________________________________________

**Why not use asymmetric for everything?**

_________________________________________________________________

---

### Activity B: Encryption Algorithm Reference Card

**Goal:** Build a quick reference for common algorithms.

**Symmetric algorithms:**

| Algorithm | Key Sizes | Block Size | Status | Notes |
|-----------|-----------|------------|--------|-------|
| AES | | | | |
| 3DES (Triple DES) | | | | |
| DES | | | | |
| Blowfish | | | | |
| Twofish | | | | |
| ChaCha20 | | | | |

**Asymmetric algorithms:**

| Algorithm | Common Key Sizes | Use Case | Notes |
|-----------|------------------|----------|-------|
| RSA | | | |
| ECC (Elliptic Curve) | | | |
| Diffie-Hellman | | | |
| DSA | | | |

**Which should you NEVER use in production?**

1. _______________________ - Why: _______________________

2. _______________________ - Why: _______________________

**Current best practices:**

| Purpose | Recommended Algorithm | Minimum Key Size |
|---------|----------------------|------------------|
| Symmetric encryption | | |
| Asymmetric encryption (RSA) | | |
| Asymmetric encryption (ECC) | | |
| Key exchange | | |

---

### Activity C: Exploring Encryption in Windows

**Goal:** See encryption in action on your system.

**BitLocker status (if available):**

Open Command Prompt as Administrator and run:
```
manage-bde -status
```

| Drive | Encryption Status | Encryption Method | Key Protectors |
|-------|-------------------|-------------------|----------------|
| C: | | | |
| D: (if exists) | | | |

*If BitLocker isn't available, document why (Windows Home edition, TPM missing, etc.)*

**Encrypting File System (EFS) exploration:**

1. Create a test folder on your desktop called "EFS_Test"
2. Right-click → Properties → Advanced → Check "Encrypt contents to secure data"
3. Apply changes

| Observation | Your Finding |
|-------------|--------------|
| Did the folder name change color? | |
| What color indicates encryption? | |
| Can you open files in the encrypted folder? | |
| What happens if you copy an encrypted file to a USB drive? | |

**Certificate check:**

Run `certmgr.msc` and navigate to Personal → Certificates

| Question | Your Finding |
|----------|--------------|
| Do you have an EFS certificate? | [ ] Yes [ ] No |
| If yes, what is the "Intended Purposes"? | |
| When does it expire? | |

**Clean up:** Delete the EFS_Test folder when done.

---

### Activity D: Browser Encryption Analysis

**Goal:** Examine real-world encryption in HTTPS connections.

**Analyze three websites' encryption:**

Visit each site, click the padlock icon, and view certificate/connection details:

**Site 1: Your bank or financial institution**

| Detail | Value |
|--------|-------|
| Website URL | |
| Certificate issued to | |
| Certificate issued by (CA) | |
| Encryption protocol | |
| Key exchange mechanism | |
| Cipher suite | |
| Certificate expiration | |

**Site 2: Google.com**

| Detail | Value |
|--------|-------|
| Certificate issued to | |
| Certificate issued by | |
| Encryption protocol | |
| Key exchange mechanism | |
| Cipher suite | |

**Site 3: A government website (.gov)**

| Detail | Value |
|--------|-------|
| Website URL | |
| Certificate issued to | |
| Certificate issued by | |
| Encryption protocol | |
| Key exchange mechanism | |
| Cipher suite | |

**Cipher suite breakdown:**

Take one cipher suite from above (e.g., TLS_AES_256_GCM_SHA384) and break it down:

| Component | What It Means |
|-----------|---------------|
| Protocol (TLS) | |
| Symmetric cipher | |
| Mode of operation | |
| Hash/MAC algorithm | |

**What makes a cipher suite "strong" vs "weak"?**

Strong characteristics:
1. _________________________________________________________________
2. _________________________________________________________________

Weak/deprecated (avoid):
1. _________________________________________________________________
2. _________________________________________________________________

---

### Activity E: Key Length and Security

**Goal:** Understand the relationship between key length and security.

**Key length comparison:**

| Key Length | Possible Combinations | Time to Brute Force (estimate) |
|------------|----------------------|-------------------------------|
| 56-bit (DES) | 2^56 = 72 quadrillion | Hours with modern hardware |
| 128-bit (AES) | | |
| 256-bit (AES) | | |
| 2048-bit (RSA) | | |
| 4096-bit (RSA) | | |

**Why can't we just compare bit lengths directly?**

Explain why a 256-bit AES key is NOT equivalent to a 256-bit RSA key:

_________________________________________________________________

_________________________________________________________________

**Equivalent security levels:**

| Symmetric Key | Equivalent RSA Key | Equivalent ECC Key |
|---------------|-------------------|-------------------|
| 80-bit | 1024-bit | 160-bit |
| 112-bit | 2048-bit | 224-bit |
| 128-bit | 3072-bit | 256-bit |
| 256-bit | 15360-bit | 512-bit |

**Why is ECC becoming more popular than RSA?**

_________________________________________________________________

---

### Activity F: Password Storage and Key Stretching

**Goal:** Understand secure password storage concepts.

**Why NOT to store passwords in plain text:**

| Storage Method | Risk Level | Why |
|----------------|------------|-----|
| Plain text | | |
| Simple hash (MD5/SHA1) | | |
| Salted hash | | |
| Key-stretched hash (bcrypt/PBKDF2) | | |

**Key stretching algorithms:**

| Algorithm | How It Works | Where Used |
|-----------|--------------|------------|
| PBKDF2 | | |
| bcrypt | | |
| scrypt | | |
| Argon2 | | |

**Salt exercise:**

Given password: `password123`

| Scenario | Resulting Hash (conceptual) | Vulnerable to Rainbow Table? |
|----------|----------------------------|------------------------------|
| No salt: SHA256("password123") | Same hash for everyone with this password | |
| Salt "abc": SHA256("abc" + "password123") | Unique hash | |
| Salt "xyz": SHA256("xyz" + "password123") | Different unique hash | |

**Why must salts be:**

- Unique per user: _________________________________________________

- Stored with the hash: _________________________________________________

- Random (not predictable): _________________________________________________

---

### Activity G: Encryption in Everyday Applications

**Goal:** Identify where encryption protects you daily.

**Audit encryption in your digital life:**

| Application/Service | Encryption Used? | Type | What It Protects |
|--------------------|------------------|------|------------------|
| Smartphone lock screen | [ ] Yes [ ] No | | |
| Messaging app (WhatsApp, Signal, iMessage) | [ ] Yes [ ] No | | |
| Email provider | [ ] Yes [ ] No | | |
| Cloud storage (Dropbox, iCloud, OneDrive) | [ ] Yes [ ] No | | |
| Password manager | [ ] Yes [ ] No | | |
| VPN (if used) | [ ] Yes [ ] No | | |
| Home Wi-Fi | [ ] Yes [ ] No | | |
| Online banking | [ ] Yes [ ] No | | |

**End-to-end encryption (E2EE) analysis:**

| Question | WhatsApp/Signal | Regular Email |
|----------|-----------------|---------------|
| Who holds the encryption keys? | | |
| Can the provider read your messages? | | |
| What happens if provider is hacked? | | |
| Can law enforcement compel decryption? | | |

**The key custody question:**

| Encryption Type | Who Holds Keys | Provider Can Access Data? |
|-----------------|---------------|---------------------------|
| Encryption in transit | | |
| Encryption at rest (provider keys) | | |
| End-to-end encryption (E2EE) | | |
| Zero-knowledge encryption | | |

---

### Activity H: Cryptographic Weaknesses

**Goal:** Recognize deprecated and broken cryptography.

**Identify the weakness:**

| Algorithm/Configuration | Status | Vulnerability |
|------------------------|--------|---------------|
| DES (56-bit) | | |
| MD5 for passwords | | |
| SHA-1 for signatures | | |
| RC4 | | |
| SSL 3.0 | | |
| TLS 1.0/1.1 | | |
| RSA-1024 | | |
| ECB mode (any cipher) | | |
| Hardcoded encryption keys | | |
| Reusing IVs/nonces | | |

**ECB mode visualization:**

ECB (Electronic Codebook) mode encrypts each block independently.

Why is this a problem? (Think about patterns)

_________________________________________________________________

**What should replace each deprecated item?**

| Deprecated | Modern Replacement |
|------------|-------------------|
| DES | |
| MD5 (hashing) | |
| SHA-1 | |
| SSL/TLS 1.0-1.1 | |
| RSA-1024 | |
| ECB mode | |

---

### Tier 2 Bonus: Command-Line Cryptography

> ⚠️ **Requires:** OpenSSL (included in Git Bash on Windows, native on Mac/Linux)

---

### Activity I: OpenSSL Exploration

**Goal:** Use OpenSSL to perform basic cryptographic operations.

**Check OpenSSL version:**

```bash
openssl version
```

Version: _______________________

**Generate a random key:**

```bash
openssl rand -hex 32
```

This generates a 256-bit (32-byte) random key in hexadecimal.

Your random key: _______________________

**Hash a string:**

```bash
echo -n "Security+" | openssl dgst -sha256
```

SHA256 hash of "Security+": _______________________

**Try different hash algorithms:**

| Input | MD5 Hash | SHA1 Hash | SHA256 Hash |
|-------|----------|-----------|-------------|
| "test" | | | |
| "Test" | | | |
| "test " (with space) | | | |

**Observation:** What do you notice about the hash outputs when input changes slightly?

_________________________________________________________________

**Symmetric encryption with AES:**

Create a test file:
```bash
echo "This is secret data" > plaintext.txt
```

Encrypt it:
```bash
openssl enc -aes-256-cbc -salt -in plaintext.txt -out encrypted.bin -pass pass:MySecretPassword
```

Decrypt it:
```bash
openssl enc -aes-256-cbc -d -in encrypted.bin -out decrypted.txt -pass pass:MySecretPassword
```

Verify:
```bash
cat decrypted.txt
```

| Question | Your Finding |
|----------|--------------|
| Can you read encrypted.bin directly? | |
| What happens with wrong password? | |
| Is the encrypted file larger than original? | |

**Clean up:** Delete plaintext.txt, encrypted.bin, decrypted.txt

---

### Activity J: Generate RSA Key Pair

**Goal:** Create and examine an RSA key pair.

**Generate a 2048-bit RSA private key:**

```bash
openssl genrsa -out private.pem 2048
```

**Extract the public key:**

```bash
openssl rsa -in private.pem -pubout -out public.pem
```

**Examine the keys:**

```bash
cat private.pem
cat public.pem
```

| Question | Private Key | Public Key |
|----------|-------------|------------|
| First line says | | |
| Approximate length (lines) | | |
| Would you share this? | | |

**View key details:**

```bash
openssl rsa -in private.pem -text -noout
```

| Key Component | Present? |
|---------------|----------|
| Modulus (n) | [ ] Yes [ ] No |
| Public exponent (e) | [ ] Yes [ ] No |
| Private exponent (d) | [ ] Yes [ ] No |
| Prime factors (p, q) | [ ] Yes [ ] No |

**Clean up:** Delete private.pem and public.pem (unless you want to keep them)

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** A colleague says "We use 256-bit encryption, so we're completely secure." What factors beyond key length affect encryption security?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your company stores user passwords as SHA-256 hashes without salt. An auditor flags this as a vulnerability. Explain why this is a problem and what should be done.

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A developer proposes using RSA to encrypt all data stored in your database. Why is this not a good approach? What would you recommend instead?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Explain symmetric vs asymmetric encryption differences
- [ ] Name common algorithms for each type (AES, RSA, ECC, etc.)
- [ ] Describe the hybrid encryption approach (asymmetric + symmetric)
- [ ] Explain key stretching and why it's used
- [ ] Define salt and its purpose in password hashing
- [ ] Identify deprecated/broken cryptographic algorithms
- [ ] Recognize encryption in everyday applications
- [ ] Understand why key length alone doesn't determine security

---

## What You Learned Today

- ✅ Compared symmetric and asymmetric encryption
- ✅ Built an algorithm reference card
- ✅ Explored Windows encryption features
- ✅ Analyzed real HTTPS connections and cipher suites
- ✅ Understood key length and security relationships
- ✅ Learned password storage best practices
- ✅ Identified encryption in daily applications
- ✅ Recognized deprecated cryptography
- ✅ (Tier 2) Used OpenSSL for hands-on crypto operations

**Next Lab:** Hashing and Digital Signatures - integrity verification, digital signatures, and certificates.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 4: Cryptography Fundamentals*