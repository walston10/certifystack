# Lab 4: Cryptography Fundamentals - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Cryptography is foundational—understanding these concepts is essential for the exam and real-world security.

---

## Section 1: Concept Check - Answers

**1. What is the fundamental difference between symmetric and asymmetric encryption?**

**Answer:**

| Aspect | Symmetric | Asymmetric |
|--------|-----------|------------|
| **Keys** | One shared key for encrypt/decrypt | Key pair: public encrypts, private decrypts |
| **Speed** | Fast (100-1000x faster) | Slow |
| **Use case** | Bulk data encryption | Key exchange, digital signatures |

**When to use each:**
- **Symmetric:** Encrypting large files, database encryption, VPN tunnels, disk encryption
- **Asymmetric:** Sharing keys securely, digital signatures, initial authentication, certificates

---

**2. Explain the "key distribution problem." How does asymmetric encryption solve it?**

**Answer:**

**The problem:** With symmetric encryption, both parties need the same secret key. But how do you securely share that key initially? If you send it over an insecure channel, an attacker could intercept it. If you had a secure channel, you wouldn't need encryption!

**Asymmetric solution:**
1. Each party generates a key pair (public + private)
2. They share public keys openly (no secrecy needed)
3. To send a secret, encrypt with recipient's PUBLIC key
4. Only the recipient's PRIVATE key can decrypt it
5. The secret (often a symmetric key) is now securely shared

**Result:** You can establish secure communication with someone you've never met, without pre-sharing any secrets.

---

**3. Why is AES-256 considered the gold standard?**

**Answer:**

- **Proven security:** Extensively analyzed since 2001, no practical attacks found
- **Speed:** Efficient in hardware and software
- **Key sizes:** 128, 192, or 256-bit options (256 is future-proof)
- **Standardized:** NIST approved, globally accepted
- **Hardware acceleration:** Modern CPUs have AES-NI instructions for speed
- **Widely implemented:** Vetted libraries available in all languages
- **Resistance:** 256-bit key is resistant even to quantum computing threats

---

**4. What is key stretching, and why is it used for password storage?**

**Answer:**

**Key stretching** transforms a weak password into a stronger key by running it through a computationally expensive function many times.

**Why it's needed:**
- Passwords are typically weak (short, predictable)
- Fast hashes (SHA-256) can be brute-forced at billions/second
- Key stretching makes each guess slow (e.g., 100ms per attempt)
- Attackers can't try millions of passwords per second

**How it works (simplified):**
```
result = hash(password)
for i in 1 to 100000:
    result = hash(result)
return result
```

**Common algorithms:** PBKDF2, bcrypt, scrypt, Argon2

---

**5. Explain what a salt is and how it prevents rainbow table attacks.**

**Answer:**

A **salt** is a random value added to a password before hashing, making each hash unique even for identical passwords.

**Without salt:**
```
hash("password123") → 5f4dcc3b...  (same for everyone)
```
Attacker pre-computes hashes for common passwords (rainbow table), then just looks up your hash.

**With salt:**
```
hash("a8x9k2" + "password123") → 7b2e91f4...
hash("m3p7q1" + "password123") → 9c4a82d1...
```
Same password, different hashes! Rainbow tables are useless because they'd need to pre-compute for every possible salt.

---

## Section 2: Activity Solutions

### Activity A: Symmetric vs Asymmetric - Answers

| Characteristic | Symmetric | Asymmetric |
|----------------|-----------|------------|
| Number of keys | 1 (shared) | 2 (key pair) |
| Key relationship | Same key encrypts/decrypts | Public encrypts, private decrypts |
| Speed | Fast | Slow (100-1000x slower) |
| Key length (typical) | 128-256 bits | 2048-4096 bits (RSA), 256-384 (ECC) |
| Primary use case | Bulk data encryption | Key exchange, signatures |
| Key distribution | Challenging (must share secretly) | Easy (public key is public) |
| Examples | AES, 3DES, ChaCha20 | RSA, ECC, Diffie-Hellman |
| Scalability | Poor (n users = n(n-1)/2 keys) | Good (n users = 2n keys) |

**Scenario matching:**

| Scenario | Type | Why |
|----------|------|-----|
| 10GB database backup | Symmetric | Large data, speed matters |
| Exchanging keys with new partner | Asymmetric | Secure key distribution |
| HTTPS connection | Both (hybrid) | Asymmetric for key exchange, symmetric for data |
| Laptop hard drive | Symmetric | Bulk data encryption |
| Digital signature | Asymmetric | Requires private key uniqueness |
| VPN tunnel data | Symmetric | High throughput needed |
| Email encryption setup | Asymmetric | Initial key exchange |
| USB drive file encryption | Symmetric | Local encryption, you have the key |

**Hybrid encryption (HTTPS):**

1. **Asymmetric phase:** Client and server use asymmetric cryptography (RSA/ECDHE) to securely exchange a symmetric session key

2. **Symmetric phase:** All subsequent data is encrypted with the symmetric key (AES) for speed

**Why not asymmetric for everything?** Too slow. RSA is ~1000x slower than AES. A video stream encrypted with RSA would be unwatchable.

---

### Activity B: Algorithm Reference - Answers

**Symmetric algorithms:**

| Algorithm | Key Sizes | Block Size | Status | Notes |
|-----------|-----------|------------|--------|-------|
| AES | 128, 192, 256 | 128-bit | Current standard | Use this |
| 3DES | 168-bit (112 effective) | 64-bit | Deprecated | Phasing out |
| DES | 56-bit | 64-bit | Broken | Never use |
| Blowfish | 32-448 bits | 64-bit | Legacy | Replaced by Twofish |
| Twofish | 128, 192, 256 | 128-bit | Secure | AES finalist |
| ChaCha20 | 256-bit | Stream cipher | Current | Mobile/low-power friendly |

**Asymmetric algorithms:**

| Algorithm | Key Sizes | Use Case | Notes |
|-----------|-----------|----------|-------|
| RSA | 2048, 3072, 4096 | Encryption, signatures | Most common, larger keys |
| ECC | 256, 384, 521 | Encryption, signatures | Smaller keys, same security |
| Diffie-Hellman | 2048+ | Key exchange only | Doesn't encrypt, establishes shared secret |
| DSA | 2048+ | Signatures only | Being phased out for ECDSA |

**Never use in production:**

1. **DES** - 56-bit key can be brute-forced in hours
2. **MD5/SHA-1 for security** - Collision attacks demonstrated

**Current best practices:**

| Purpose | Algorithm | Minimum Key Size |
|---------|-----------|------------------|
| Symmetric encryption | AES | 128-bit (256 preferred) |
| Asymmetric (RSA) | RSA | 2048-bit (3072+ preferred) |
| Asymmetric (ECC) | ECDSA/ECDH | 256-bit (P-256 curve) |
| Key exchange | ECDHE or DH | 2048-bit DH or P-256 ECC |

---

### Activity D: Cipher Suite Breakdown - Example

**Example cipher suite:** `TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384`

| Component | Meaning |
|-----------|---------|
| TLS | Protocol (Transport Layer Security) |
| ECDHE | Key exchange (Elliptic Curve Diffie-Hellman Ephemeral) |
| RSA | Authentication method (server certificate) |
| AES_256 | Symmetric cipher (256-bit key) |
| GCM | Mode of operation (Galois/Counter Mode - authenticated) |
| SHA384 | Hash for integrity/PRF |

**Strong cipher suite characteristics:**

1. Modern key exchange (ECDHE provides forward secrecy)
2. Strong symmetric cipher (AES-128 or AES-256)
3. Authenticated mode (GCM, CCM)
4. Strong hash (SHA-256 or SHA-384)

**Weak/deprecated:**

1. RSA key exchange (no forward secrecy)
2. CBC mode (vulnerable to padding oracle attacks)
3. RC4 (biases discovered)
4. SHA-1 or MD5 in signature/MAC
5. 3DES (slow, 64-bit block size issues)

---

### Activity E: Key Length - Answers

| Key Length | Possible Combinations | Time to Brute Force |
|------------|----------------------|---------------------|
| 56-bit (DES) | 2^56 = ~72 quadrillion | Hours with specialized hardware |
| 128-bit (AES) | 2^128 = ~340 undecillion | Billions of years |
| 256-bit (AES) | 2^256 = ~10^77 | Heat death of universe |
| 2048-bit (RSA) | N/A (not brute-forced the same way) | Secure until ~2030 |
| 4096-bit (RSA) | N/A | Secure for foreseeable future |

**Why 256-bit AES ≠ 256-bit RSA:**

Symmetric and asymmetric algorithms work differently:
- **AES:** Attacker must try every possible key (brute force)
- **RSA:** Attacker factors a large number (math problem)

Factoring is easier than brute-forcing all combinations, so RSA needs much larger numbers to achieve the same security level. A 256-bit RSA key would be trivially broken.

**Why ECC is becoming popular:**

- Same security with much smaller keys (256-bit ECC ≈ 3072-bit RSA)
- Faster operations, less computational overhead
- Better for mobile and IoT devices
- Lower bandwidth for key exchange

---

### Activity F: Password Storage - Answers

| Storage Method | Risk Level | Why |
|----------------|------------|-----|
| Plain text | Critical | Anyone with DB access sees all passwords |
| Simple hash (MD5/SHA1) | High | Rainbow tables, fast brute force |
| Salted hash | Medium | Still fast to compute, GPU attacks |
| Key-stretched hash | Low | Slow by design, expensive to attack |

**Key stretching algorithms:**

| Algorithm | How It Works | Where Used |
|-----------|--------------|------------|
| PBKDF2 | Runs hash function thousands of times | Windows, Wi-Fi WPA2 |
| bcrypt | CPU-intensive with configurable work factor | Many web applications |
| scrypt | Memory-hard (defeats GPU/ASIC attacks) | Cryptocurrency, sensitive apps |
| Argon2 | Winner of Password Hashing Competition (2015) | Modern best practice |

**Salt requirements:**

- **Unique per user:** Same password → different hashes (prevents matching)
- **Stored with hash:** Needed for verification (not secret)
- **Random:** Predictable salts could be pre-computed

---

### Activity G: Encryption Types - Answers

| Encryption Type | Who Holds Keys | Provider Can Read? |
|-----------------|---------------|-------------------|
| In transit only | Provider | Yes (decrypted at endpoints) |
| At rest (provider keys) | Provider | Yes (they have keys) |
| E2EE | Users only | No |
| Zero-knowledge | Users only | No (can't even see metadata) |

---

### Activity H: Cryptographic Weaknesses - Answers

| Algorithm/Config | Status | Vulnerability |
|-----------------|--------|---------------|
| DES (56-bit) | Broken | Key too short, brute-forced easily |
| MD5 for passwords | Broken | Fast, collision attacks, rainbow tables |
| SHA-1 for signatures | Deprecated | Collision attacks demonstrated (SHAttered) |
| RC4 | Broken | Statistical biases in keystream |
| SSL 3.0 | Broken | POODLE attack |
| TLS 1.0/1.1 | Deprecated | BEAST, various weaknesses |
| RSA-1024 | Deprecated | Factorable with resources |
| ECB mode | Weak | Patterns visible in ciphertext |
| Hardcoded keys | Critical | Keys exposed in source code |
| Reusing IVs | Critical | Destroys confidentiality (especially CTR/GCM) |

**ECB problem:** Each identical plaintext block produces identical ciphertext block. Patterns in data remain visible. Famous example: ECB-encrypted image still shows recognizable shapes.

**Replacements:**

| Deprecated | Modern Replacement |
|------------|-------------------|
| DES | AES |
| MD5 (hashing) | SHA-256, SHA-3 |
| SHA-1 | SHA-256, SHA-3 |
| SSL/TLS 1.0-1.1 | TLS 1.2, TLS 1.3 |
| RSA-1024 | RSA-2048+, ECC-256+ |
| ECB mode | CBC, GCM, CTR |

---

### Activity I & J: OpenSSL - Key Points

**Hash observations:**
- Tiny input change → completely different hash (avalanche effect)
- Same input → always same hash (deterministic)
- Different lengths → same output length

**RSA key pair:**
- Private key contains ALL the math (modulus, exponents, primes)
- Public key is derived from private (subset of info)
- Private key: NEVER share
- Public key: Share freely

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: "256-bit encryption = completely secure"**

Factors beyond key length:
- Algorithm choice (DES with any key length is broken)
- Implementation quality (bugs, side-channel leaks)
- Key management (how keys are stored, transmitted, rotated)
- Mode of operation (ECB vs GCM)
- Random number generation (weak RNG = predictable keys)
- Protocol design (vulnerabilities in how crypto is used)
- Human factors (weak passwords, social engineering)

**Scenario 2: SHA-256 without salt**

**Problem:** 
- Same password = same hash for all users
- Attackers can pre-compute hashes (rainbow tables)
- Can identify users with same password
- Fast brute-force with GPUs

**Solution:**
- Add unique, random salt per user
- Use key stretching (bcrypt, Argon2)
- Store: salt + hash + algorithm identifier
- Force password resets after migration

**Scenario 3: RSA for database encryption**

**Why RSA is wrong:**
- Extremely slow for bulk data
- Ciphertext expansion (larger than plaintext)
- Not designed for large data volumes
- Would cripple database performance

**Correct approach:**
- Use AES for data encryption (fast, efficient)
- Use RSA/ECC only for key encryption
- Encrypt symmetric key with asymmetric (envelope encryption)
- This is how AWS KMS, Azure Key Vault, etc. work

---

## Key Exam Tips

1. **Symmetric = one key, fast, bulk data**
   **Asymmetric = key pair, slow, key exchange/signatures**

2. **AES-256** is the answer for symmetric encryption

3. **RSA-2048 or ECC-256** for asymmetric

4. **Hybrid encryption:** Asymmetric exchanges symmetric key, symmetric encrypts data

5. **Key stretching algorithms:** PBKDF2, bcrypt, scrypt, Argon2

6. **Salt:** Random, unique per user, stored with hash, prevents rainbow tables

7. **Deprecated:** DES, MD5, SHA-1, RC4, SSL/TLS 1.0-1.1, RSA-1024

8. **ECB mode:** Never use—patterns remain visible

9. **Forward secrecy:** Use ephemeral keys (ECDHE) so compromised long-term key doesn't decrypt past traffic

---

## Common Mistakes to Avoid

❌ Thinking bigger key = always better (algorithm matters more)

❌ Confusing hashing with encryption (hashing is one-way)

❌ Using MD5/SHA-1 for anything security-related

❌ Forgetting that asymmetric is slow (don't encrypt bulk data)

❌ Storing passwords with just a hash (need salt + stretching)

❌ Thinking encryption alone = security (key management is crucial)

---

**Congratulations on completing Lab 4!**

You now understand the building blocks of cryptography. This knowledge applies to nearly every security topic ahead.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 4: Cryptography Fundamentals - Solution Guide*