# Lab 5: Hashing and Digital Signatures - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Hashing and signatures are critical exam topics—make sure you understand the why, not just the what.

---

## Section 1: Concept Check - Answers

**1. What are the key properties of a cryptographic hash function?**

**Answer:**

| Property | Description |
|----------|-------------|
| **Deterministic** | Same input always produces same output |
| **One-way (preimage resistant)** | Cannot reverse hash to get original input |
| **Fixed output length** | Any size input produces same length hash |
| **Avalanche effect** | Tiny input change = completely different hash |
| **Collision resistant** | Extremely difficult to find two inputs with same hash |
| **Fast computation** | Quick to calculate (but not too fast for passwords) |

---

**2. Explain collision vs preimage attack. Which is more dangerous?**

**Answer:**

| Attack | Definition | Difficulty |
|--------|------------|------------|
| **Collision** | Find ANY two inputs that hash to same value | Easier (birthday paradox) |
| **Preimage** | Find an input that produces a SPECIFIC hash | Harder |
| **Second preimage** | Given input A, find different input B with same hash | Harder |

**Which is more dangerous?** It depends on context:
- **Collisions** are more dangerous for **digital signatures** (attacker creates two docs with same hash, gets innocent one signed, swaps in malicious one)
- **Preimage** attacks are more dangerous for **password cracking** (attacker has hash, wants to find password)

Collision attacks are easier to perform, so algorithms vulnerable to collisions (MD5, SHA-1) are deprecated for signatures first.

---

**3. What does HMAC add to a regular hash?**

**Answer:**

HMAC adds a **secret key** to the hashing process, providing:

| Feature | Plain Hash | HMAC |
|---------|-----------|------|
| Integrity | ✓ | ✓ |
| Authentication | ✗ | ✓ |

**Why it matters:** Anyone can calculate a plain hash. Only someone with the secret key can create a valid HMAC. This proves the message came from someone who knows the key.

**Formula:** HMAC(key, message) = Hash((key ⊕ opad) || Hash((key ⊕ ipad) || message))

The double-hashing with padded keys prevents length extension attacks that would affect simple hash(key + message).

---

**4. How does a digital signature provide non-repudiation?**

**Answer:**

**The process:**
1. Sender hashes the document
2. Sender encrypts hash with their **private key** (only they have it)
3. Recipient decrypts with sender's **public key**
4. If decryption works, it MUST have been encrypted by the matching private key

**Non-repudiation:** The sender cannot deny signing because:
- Only their private key could create a signature that decrypts with their public key
- They're the only one who possesses their private key
- The signature is mathematically bound to that specific key pair

This is legally binding in many jurisdictions—equivalent to a handwritten signature.

---

**5. Why can't encryption replace hashing for integrity?**

**Answer:**

| Issue | Explanation |
|-------|-------------|
| **Reversible** | Encryption can be decrypted; hashes cannot be reversed |
| **Key management** | Encryption requires key distribution; hashing doesn't need keys |
| **Fixed output** | Hashes are always same length; encrypted data varies with input |
| **Speed** | Hashing is faster than encryption |
| **Purpose** | Encryption hides data; hashing creates fingerprint |

**Key point:** If you encrypt a document and it decrypts correctly, you only know you have the key—not that the ciphertext wasn't modified. Hashing specifically detects ANY change.

---

## Section 2: Activity Solutions

### Activity A: Hash Properties - Answers

**Expected observations:**

| Input | SHA256 (first 16 chars) |
|-------|-------------------------|
| test | 9f86d081884c7d65... |
| Test | 532eaabd9574880d... |
| test1 | 1b4f0e9851971998... |
| test2 | 60303ae22b998861... |
| Long sentence | Different each time |

**Observations:**

| Property | Observation |
|----------|-------------|
| One character change | Completely different hash (avalanche effect) |
| Same length regardless of input | Yes - always 64 hex characters (256 bits) |
| Case sensitivity | Yes - "test" ≠ "Test" |
| Predictability | No - cannot predict hash from input |

**Same input twice:** Identical hashes (demonstrates **deterministic** property)

---

### Activity B: Hash Algorithm Comparison - Answers

| Algorithm | Output (chars) | Output (bits) | Status |
|-----------|----------------|---------------|--------|
| MD5 | 32 | 128 | Broken - collisions demonstrated |
| SHA-1 | 40 | 160 | Deprecated - collisions demonstrated |
| SHA-256 | 64 | 256 | Current standard |
| SHA-512 | 128 | 512 | Current standard |

**Algorithm reference completed:**

| Algorithm | Bit Length | Security Status | Acceptable Use Cases |
|-----------|------------|-----------------|---------------------|
| MD5 | 128-bit | Broken | Non-security checksums only |
| SHA-1 | 160-bit | Deprecated | Legacy systems (migrate away) |
| SHA-256 | 256-bit | Secure | All security applications |
| SHA-384 | 384-bit | Secure | High-security applications |
| SHA-512 | 512-bit | Secure | High-security applications |
| SHA-3 | Variable | Secure | Backup to SHA-2, specialized uses |

**Legitimate MD5 uses:** 
- Quick file checksums for non-security purposes (detecting accidental corruption)
- Legacy system compatibility
- Deduplication (not security-critical)
- **Never** for passwords, signatures, or security verification

---

### Activity C: File Integrity - Key Points

**What a matching hash PROVES:**
- The file you have is bit-for-bit identical to what was hashed
- No accidental corruption during download/transfer

**What a matching hash does NOT prove:**
- The original file was safe/legitimate
- The hash itself wasn't tampered with
- The source is trustworthy
- No malware was present before hashing

**Security principle demonstrated:** Integrity verification

---

### Activity D: HMAC - Answers

| Aspect | Plain Hash | HMAC |
|--------|-----------|------|
| Provides integrity? | Yes | Yes |
| Provides authentication? | No | Yes |
| Protects against tampering by anyone? | No (anyone can recalculate) | Yes |
| Protects against tampering without key? | No | Yes |

**HMAC uses:**

| Application | How HMAC is Used |
|-------------|------------------|
| API authentication | Client signs requests; server verifies with shared secret |
| Cookie/session tokens | Server creates HMAC; validates on each request |
| JWT | Signature portion is HMAC (HS256) or RSA |
| IPsec | Authenticates packets (AH protocol) |
| TLS | PRF and finished messages |

**Why HMAC is complex:** Simple hash(key + message) is vulnerable to length extension attacks where attackers can append data and compute valid hash without knowing key.

---

### Activity E: Digital Signature Process - Answers

**Signing:**
```
Step 1: Start with [original document]
Step 2: Create [hash] of the document
Step 3: Encrypt the hash with sender's [private] key
Step 4: Result is the [digital signature]
Step 5: Send document + signature to recipient
```

**Verification:**
```
Step 1: Receive document + [signature]
Step 2: Decrypt signature using sender's [public] key
        Result: [original hash]
Step 3: Calculate [new hash] of received document
Step 4: Compare decrypted hash with calculated hash
Step 5: If match: Signature is [valid]
        If different: Document was [tampered with] or wrong key
```

**What each step proves:**

| Verification | What It Proves | How |
|--------------|----------------|-----|
| Decrypts with public key | Sender's private key was used | Asymmetric math |
| Hashes match | Document unchanged since signing | Hash integrity |
| Combined | Authentic, unmodified, non-repudiable | Full verification |

**Three guarantees:**

| Guarantee | How Provided |
|-----------|--------------|
| Integrity | Hash changes if document changes |
| Authentication | Only private key holder could sign |
| Non-repudiation | Can't deny—only they have private key |

---

### Activity F: Code Signing - Answers

**Why vendors sign code:**

1. **Trust/reputation** - Users can verify software is from claimed publisher
2. **Tamper detection** - Any modification invalidates signature
3. **Avoid warnings** - Unsigned software triggers SmartScreen/Gatekeeper warnings
4. **Enterprise deployment** - Many organizations only allow signed software
5. **Legal liability** - Establishes chain of accountability

---

### Activity G: S/MIME - Answers

| Feature | Signing | Encrypting |
|---------|---------|------------|
| Purpose | Prove identity, integrity | Hide content |
| Uses which key? | Sender's private key | Recipient's public key |
| Recipient needs your... | Public key/certificate | Nothing |
| You need recipient's... | Nothing | Public key/certificate |
| Provides confidentiality? | No | Yes |
| Provides integrity? | Yes | No (alone) |
| Provides non-repudiation? | Yes | No |

**Why email signing isn't common:**

1. **Certificate complexity** - Users must obtain, install, manage certificates
2. **Recipient compatibility** - Both parties need S/MIME support
3. **Cost** - Certificates cost money (though free options exist)
4. **User experience** - Extra steps, confusing for non-technical users

---

### Activity H: Password Hashing - Answers

**System does NOT store:** The actual password (plain text)

**Login result:**
- If match: Grant access
- If different: Deny access

**Security benefits:**

| Threat | How Hashing Protects |
|--------|---------------------|
| Database breach | Attacker gets hashes, not passwords |
| Insider | Even DBAs can't see passwords |
| Password reuse | Can't tell if users have same password (with salt) |
| Brute force | Key stretching makes each guess slow |

**Same password, two users:**

- **With salt:** Different hashes (can't tell they're the same)
- **Without salt:** Identical hashes (attacker knows they match)

---

### Activity I: Collision Attacks - Answers

| Attack Type | Definition | Difficulty | Impact |
|-------------|------------|------------|--------|
| Collision | Find ANY two inputs with same hash | Easier | Signature attacks |
| Preimage | Find input producing specific hash | Harder | Password cracking |
| Second preimage | Find different input matching existing hash | Harder | Document forgery |

**Real-world attacks:**

| Algorithm | Attack | Year | Impact |
|-----------|--------|------|--------|
| MD5 | Collision attacks | 2004 | Fake CA certificates possible |
| SHA-1 | SHAttered | 2017 | Two PDFs with same hash created |

**SHAttered:** Google/CWI researchers created two different PDF files with identical SHA-1 hashes. This proved SHA-1 collision attacks were practical, leading to its deprecation for certificates and signatures.

**Current recommendations:**

| Use Case | Minimum Algorithm |
|----------|-------------------|
| Digital signatures | SHA-256 |
| Code signing | SHA-256 |
| TLS certificates | SHA-256 |
| File integrity (security) | SHA-256 |
| File integrity (non-security) | MD5 acceptable |
| Password hashing | bcrypt, Argon2, PBKDF2 (not plain SHA) |

---

### Activity J & K: OpenSSL - Key Points

**HMAC demonstration:** Different keys produce different HMACs for same message. This proves that without the key, you cannot forge a valid HMAC.

**Signature verification results:**

| Scenario | Result | Reason |
|----------|--------|--------|
| Valid document, correct key | Verified OK | Everything matches |
| Tampered document | Verification Failure | Hash mismatch |
| Wrong public key | Verification Failure | Signature doesn't decrypt properly |

**What this proves:** Digital signatures verify BOTH the document integrity AND the signer's identity simultaneously.

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: MD5 hash from vendor**

Response: "MD5 has known collision vulnerabilities demonstrated since 2004. An attacker could create malware with the same MD5 hash as legitimate software. While you haven't had a 'problem' yet, that just means you haven't detected one. For security-critical verification, we need SHA-256 at minimum. MD5 is fine for detecting accidental corruption, but not for verifying authenticity against intentional tampering."

**Scenario 2: Contract signing proof**

Recommend: **Digital signatures** with PKI

Why:
- Provides non-repudiation (executive can't deny signing)
- Proves integrity (contract hasn't been modified)
- Timestamp proves when it was signed
- Legally admissible in most jurisdictions
- Specific technologies: Adobe Sign, DocuSign, or S/MIME with archiving

**Scenario 3: SHA-256 for passwords**

What's missing:
- **Salt** - Without it, same passwords have same hashes, rainbow tables work
- **Key stretching** - SHA-256 is too fast, enables rapid brute forcing

Recommend:
- Use **bcrypt**, **Argon2**, or **PBKDF2**
- These include salting and are intentionally slow
- Configure appropriate work factor/iterations
- Never implement password hashing yourself—use established libraries

---

## Key Exam Tips

1. **Hash properties:** Deterministic, one-way, fixed output, avalanche effect, collision resistant

2. **Algorithm status:**
   - MD5: Broken (collisions)
   - SHA-1: Deprecated (collisions)
   - SHA-256/SHA-3: Current standard

3. **HMAC = Hash + Secret Key** → Provides authentication AND integrity

4. **Digital signature process:**
   - Sign: Hash → Encrypt with **private** key
   - Verify: Decrypt with **public** key → Compare hashes

5. **Non-repudiation requires:** Asymmetric cryptography (only one person has private key)

6. **Password hashing needs:**
   - Salt (random, per-user)
   - Key stretching (bcrypt, Argon2)
   - NOT plain SHA-256

7. **Collision attacks** are why MD5/SHA-1 are deprecated for signatures

---

## Common Mistakes to Avoid

❌ Confusing hashing (one-way) with encryption (reversible)

❌ Thinking hash length = security (algorithm matters more)

❌ Using MD5/SHA-1 for security purposes

❌ Forgetting that HMAC requires a shared secret key

❌ Thinking plain SHA-256 is good enough for passwords

❌ Confusing which key signs (private) vs which verifies (public)

❌ Forgetting that matching hashes don't prove the source is trustworthy

---

**Congratulations on completing Lab 5!**

You now understand how hashing provides integrity and how digital signatures provide non-repudiation—two fundamental security concepts tested heavily on the exam.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 5: Hashing and Digital Signatures - Solution Guide*