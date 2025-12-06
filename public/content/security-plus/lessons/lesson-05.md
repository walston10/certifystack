# Lesson 5: Hashing and Digital Signatures

**Estimated Time:** 25-30 minutes  
**Domain:** 1.0 General Security Concepts (12% of exam)  
**Exam Objectives Covered:** 1.4 - Explain the importance of using appropriate cryptographic solutions

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Explain how hashing algorithms produce fixed-length outputs from variable inputs
- Describe the properties that make hashing useful for security (one-way, collision-resistant)
- Compare hashing algorithms (MD5, SHA-1, SHA-2, SHA-3) and identify which are secure
- Explain HMAC and how it adds authentication to hashing
- Describe how digital signatures work using hash + asymmetric encryption
- Identify the security properties digital signatures provide (integrity, authentication, non-repudiation)
- Apply hashing and digital signatures to appropriate use cases
- Recognize attacks against weak hashing algorithms

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Hashing and Digital Signatures" (14 min)
- **Computerphile:** "Hashing Algorithms and Security" (11 min)
- **PowerCert:** "Digital Signatures Explained" (9 min)

---

## Introduction

February 2017: Google announces a breakthrough that shocks the cryptography world. Their researchers, collaborating with CWI Amsterdam, have created two different PDF files with identical SHA-1 hashes. The attack, called "SHAttered," required 9 quintillion SHA-1 computations—equivalent to 6,500 years of single-CPU time—but proved SHA-1 was broken.

The implications rippled across the internet. Git, the version control system used by millions of developers, relied on SHA-1 to identify every commit. Digital certificates, code signing, and countless security systems used SHA-1 for integrity verification. If attackers could create two documents with the same hash, they could potentially substitute malicious files for legitimate ones without detection.

The writing had been on the wall for years. Theoretical attacks against SHA-1 emerged in 2005. NIST recommended transitioning away by 2010. But deprecating a widely-deployed algorithm takes time, and many systems dragged their feet—until Google's practical demonstration made the threat undeniable.

This story illustrates why understanding hashing matters. Hashes are digital fingerprints—compact representations that should uniquely identify data. When you download software and verify its hash matches the publisher's listed value, you're trusting that no other file could produce that same hash. When a certificate authority signs a certificate, the hash ensures the certificate can't be modified. When Git tracks your code, hashes identify every version.

But not all hashing algorithms are equal. Some are broken. Some are deprecated. Some remain secure. Knowing the difference—and understanding why—is essential for security professionals.

This lesson explores how hashing works, which algorithms to use, and how digital signatures build on hashing to provide authentication and non-repudiation.

---

## Hashing Fundamentals: Digital Fingerprints

A hash function takes input of any size and produces a fixed-size output called a hash, digest, or fingerprint. The same input always produces the same output, but the output reveals nothing about the input.

### How Hashing Works

```
Input: "Hello, World!" 
SHA-256 → 315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3

Input: "Hello, World!!" (one extra character)
SHA-256 → c4dc143c0dc85faeda1de74fec7e0c3de76e28ae1b23435e4c5e4e3b3e4a8e16
```

Notice: Adding one character completely changes the hash. This is the "avalanche effect"—small input changes cause dramatic output changes.

### Essential Hashing Properties

**One-way function (preimage resistance)**
Given a hash, you cannot determine the original input. There's no "un-hash" function. The only way to find what produced a hash is to guess inputs and check if they match.

**Deterministic**
Same input always produces same output. Hash "password123" today, tomorrow, on any computer—identical result every time. This consistency enables verification.

**Fixed-length output**
Regardless of input size, output length is constant. SHA-256 produces 256-bit output whether you hash a single character or an entire database. This predictability simplifies storage and comparison.

**Avalanche effect**
Tiny input changes cause massive output changes. Changing one bit of input changes roughly half the output bits. This prevents attackers from making small modifications that maintain similar hashes.

**Collision resistance**
It should be computationally infeasible to find two different inputs producing the same hash. When this property fails, the algorithm is "broken."

### What Hashing Is Used For

**Integrity verification**
Verify data hasn't changed. Hash a file before transmission, send the hash separately, recipient hashes received file and compares. Matching hashes = unchanged data.

**Password storage**
Store hashes instead of passwords. When user logs in, hash their input and compare to stored hash. Even if database is stolen, passwords aren't exposed (assuming strong hashing with salt).

**Digital signatures**
Hash documents before signing. Sign the hash (small, fixed-size) rather than entire document (variable, potentially large). Signature verifies both authenticity and integrity.

**Data deduplication**
Identify identical files by comparing hashes rather than full file contents. If two files have the same hash, they're (almost certainly) identical.

**Blockchain/cryptocurrency**
Every block contains hash of previous block, creating tamper-evident chain. Modifying any historical block changes its hash, breaking the chain.

💡 **Key Concept:** Hashing is NOT encryption. Encryption is reversible with the correct key. Hashing is one-way—you cannot recover the original input from the hash.

---

## Hashing Algorithms: The Good, The Bad, The Broken

Not all hashing algorithms provide equal security. Some have been broken; others remain secure. Knowing which is which is critical.

### MD5 (Message Digest 5)

**Output size:** 128 bits (32 hex characters)
**Status:** ❌ BROKEN - Do not use for security

MD5 was widely used in the 1990s and early 2000s. Collision attacks were demonstrated in 2004, and practical attacks followed. Today, collisions can be generated in seconds on ordinary computers.

**Vulnerabilities:**
- Collision attacks are trivial
- Preimage attacks are becoming feasible
- Should never be used for security purposes

**Still seen in:**
- Legacy systems (check your organization!)
- Non-security uses (checksums for download verification where security isn't the goal)
- File identification (not security, just matching)

**Example MD5 hash:**
```
"password" → 5f4dcc3b5aa765d61d8327deb882cf99
```

🎯 **Exam Tip:** MD5 is broken. If a question mentions MD5 for security purposes (password storage, digital signatures, integrity verification for security), it's wrong.

### SHA-1 (Secure Hash Algorithm 1)

**Output size:** 160 bits (40 hex characters)
**Status:** ❌ DEPRECATED - Avoid for new implementations

SHA-1 was the standard for years, used in SSL certificates, Git, and countless applications. Theoretical attacks emerged in 2005, and Google's SHAttered demonstrated practical collision in 2017.

**Vulnerabilities:**
- Collision attacks are practical (demonstrated)
- More expensive than MD5 attacks but feasible for well-funded attackers
- Deprecation ongoing but some legacy use remains

**Still seen in:**
- Git (transitioning to SHA-256)
- Some legacy certificates
- Older systems being phased out

**Example SHA-1 hash:**
```
"password" → 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8
```

### SHA-2 (Secure Hash Algorithm 2)

**Output sizes:** 224, 256, 384, or 512 bits
**Status:** ✅ CURRENT STANDARD - Use this

SHA-2 is actually a family of algorithms with different output sizes. SHA-256 and SHA-512 are most common.

**Variants:**
- **SHA-224:** 224-bit output (rare)
- **SHA-256:** 256-bit output (most common)
- **SHA-384:** 384-bit output
- **SHA-512:** 512-bit output (highest security)

**Characteristics:**
- No known practical attacks
- Widely supported
- Current industry standard
- Used in TLS, Bitcoin, certificate signing, password hashing

**Example SHA-256 hash:**
```
"password" → 5e884898da28047d9d7d2d34d9a7e66d5e7c2d0a2b7c4f8c6e5d3c2b1a0f9e8d
```

🎯 **Exam Tip:** SHA-256 is the go-to answer for "which hashing algorithm should be used?" questions. It's secure, widely supported, and the current standard.

### SHA-3 (Secure Hash Algorithm 3)

**Output sizes:** 224, 256, 384, or 512 bits
**Status:** ✅ SECURE - Backup/alternative to SHA-2

SHA-3 was selected through NIST competition in 2012, finalized in 2015. It uses completely different internal structure (Keccak sponge construction) than SHA-2.

**Purpose:**
- Backup if SHA-2 vulnerabilities are discovered
- Different mathematical foundation than SHA-2
- Not meant to replace SHA-2, but to complement it

**Characteristics:**
- Secure with no known attacks
- Different design from SHA-2 (diversity is good)
- Less widely deployed than SHA-2
- Growing adoption

**When to use SHA-3:**
- New applications where SHA-2 alternative is desired
- High-security applications wanting algorithm diversity
- Specific compliance requirements

### Algorithm Comparison

| Algorithm | Output Size | Status | Use Case |
|-----------|-------------|--------|----------|
| MD5 | 128 bits | ❌ Broken | None for security |
| SHA-1 | 160 bits | ❌ Deprecated | Legacy only |
| SHA-256 | 256 bits | ✅ Secure | Standard choice |
| SHA-512 | 512 bits | ✅ Secure | Higher security needs |
| SHA-3-256 | 256 bits | ✅ Secure | SHA-2 alternative |

---

## HMAC: Adding Authentication to Hashing

Standard hashing verifies integrity but not authenticity. Anyone can hash data—there's no secret involved. HMAC (Hash-based Message Authentication Code) adds a secret key, proving both integrity AND that someone with the key produced the hash.

### The Problem HMAC Solves

**Standard hash scenario:**
1. Alice sends message and hash to Bob
2. Bob verifies hash matches message
3. Problem: Attacker intercepts, modifies message, creates new valid hash
4. Bob can't detect the attack—modified hash still matches modified message

**HMAC scenario:**
1. Alice and Bob share secret key
2. Alice sends message and HMAC (hash computed with secret key)
3. Bob computes HMAC using same key and message
4. If HMACs match: message unchanged AND came from someone with the key
5. Attacker can't create valid HMAC without the secret key

### How HMAC Works

HMAC combines a hash function with a secret key:

```
HMAC = Hash(Key + Hash(Key + Message))
```

(Simplified—actual HMAC uses specific padding and structure)

The key is mixed into the hashing process. Without the key, you can't produce a valid HMAC even if you know the message.

### HMAC Characteristics

**Requires shared secret:** Both parties must have the same key
**Provides integrity:** Message hasn't been modified
**Provides authentication:** Message came from someone with the key
**Does NOT provide non-repudiation:** Can't prove WHICH key-holder sent it (both parties have the key)

### HMAC Naming

HMACs are named by their underlying hash function:
- **HMAC-SHA256:** HMAC using SHA-256
- **HMAC-SHA512:** HMAC using SHA-512
- **HMAC-MD5:** HMAC using MD5 (avoid—underlying hash is weak)

### HMAC Use Cases

**API authentication:** Client includes HMAC of request; server verifies with shared API key

**Message integrity with authentication:** Verify message hasn't changed AND came from legitimate source

**Session tokens:** Generate tokens that server can verify without database lookup

**Challenge-response authentication:** Prove possession of shared secret

---

## Digital Signatures: Proving Identity and Integrity

Digital signatures combine hashing with asymmetric encryption to provide integrity, authentication, AND non-repudiation. Unlike HMAC (shared key), digital signatures use private keys—only one party can create the signature.

### How Digital Signatures Work

**Signing process (sender):**
1. Hash the document (creates small, fixed-size fingerprint)
2. Encrypt the hash with sender's PRIVATE key
3. Attach encrypted hash (signature) to document

```
Document → [Hash] → Hash Value → [Encrypt with Private Key] → Digital Signature
```

**Verification process (recipient):**
1. Decrypt the signature with sender's PUBLIC key (recovers original hash)
2. Hash the received document independently
3. Compare: decrypted hash vs. computed hash
4. If they match: document is unchanged AND was signed by private key holder

```
Signature → [Decrypt with Public Key] → Original Hash
Document → [Hash] → Computed Hash
Compare: Original Hash == Computed Hash? → Valid signature
```

### Why Hash First?

Why not encrypt the entire document with the private key?

1. **Speed:** Asymmetric encryption is slow. Encrypting large documents would be impractical. Hashing produces small, fixed-size output that encrypts quickly.

2. **Efficiency:** Signature size is constant regardless of document size. A 10MB document has same signature size as a 10KB document.

3. **Integrity:** Hash captures entire document's integrity in compact form. Any change to document changes the hash.

### What Digital Signatures Provide

**Integrity**
Any modification to the signed document changes its hash. The computed hash won't match the original hash recovered from the signature. Tampering is detected.

**Authentication**
Only the private key holder could create that signature. If Alice's public key verifies the signature, Alice's private key created it. This proves Alice signed it.

**Non-repudiation**
Alice cannot deny signing the document. Only she has her private key. Unlike HMAC (where both parties have the key), digital signatures uniquely identify the signer. This holds up legally.

### Digital Signature Use Cases

**Code signing**
Software publishers sign code with their private key. Operating systems verify signatures before running code. Prevents malware from impersonating legitimate software.

**Document signing**
Legal documents, contracts, PDFs signed digitally. Proves who signed and that document hasn't changed. Legally binding in most jurisdictions.

**Email signing (S/MIME)**
Email messages signed to prove sender identity and message integrity. Recipient knows email really came from claimed sender and wasn't modified.

**Certificate signing**
Certificate Authorities sign certificates. Browsers verify CA signature to trust certificates. Chain of trust depends on signature verification.

**Software updates**
Updates signed by vendor. Systems verify signature before applying. Prevents attackers from distributing malicious updates.

### Digital Signature Algorithms

**RSA signatures**
- Most widely used
- RSA key pair for signing
- Larger signatures than DSA/ECDSA
- Well-understood and widely supported

**DSA (Digital Signature Algorithm)**
- Designed specifically for signatures (not encryption)
- Government standard (FIPS 186)
- Less common than RSA today

**ECDSA (Elliptic Curve DSA)**
- DSA using elliptic curve cryptography
- Smaller signatures than RSA for equivalent security
- Growing adoption (Bitcoin uses ECDSA)
- Efficient for constrained devices

| Algorithm | Key Size | Signature Size | Notes |
|-----------|----------|----------------|-------|
| RSA | 2048+ bits | Large | Most common |
| DSA | 2048+ bits | Medium | Government standard |
| ECDSA | 256+ bits | Small | Efficient, growing use |

---

## Common Attacks on Hashing

Understanding attacks helps you appreciate why certain algorithms are deprecated.

### Collision Attack

Find two different inputs that produce the same hash.

```
Hash(Input_A) = Hash(Input_B), where Input_A ≠ Input_B
```

**Impact:** Attacker creates two documents with same hash—one legitimate, one malicious. Gets legitimate one signed, substitutes malicious one. Signature still verifies because hash matches.

**Affected algorithms:** MD5 (trivial), SHA-1 (demonstrated)

### Birthday Attack

Mathematical principle making collision attacks easier than expected. For a hash with N possible outputs, you can likely find a collision after checking roughly √N inputs, not N inputs.

**Example:** SHA-1 has 2^160 possible outputs. Brute force collision would require ~2^160 attempts. Birthday attack requires only ~2^80 attempts. Still huge, but 2^80 times more feasible than 2^160.

### Preimage Attack

Given a hash, find ANY input that produces it.

```
Given: Hash_X
Find: Input where Hash(Input) = Hash_X
```

**Impact:** More dangerous than collision. Could potentially forge specific documents to match existing hashes.

**Status:** No practical preimage attacks against SHA-1 or SHA-2 yet.

### Rainbow Table Attack

Precomputed tables mapping common inputs to their hashes. Look up hash to find original input instantly.

**Impact:** Devastating for password hashes without salt.

**Defense:** Salting makes rainbow tables useless (covered in Lesson 4).

### Length Extension Attack

Some hash algorithms allow extending a hash without knowing original input. Given Hash(message), compute Hash(message + attacker_data) without knowing message.

**Affected:** MD5, SHA-1, SHA-256 (when used improperly)

**Defense:** HMAC construction prevents this. SHA-3 is also immune.

---

## Best Practices for Hashing

### Password Hashing

**DO:**
- Use password-specific algorithms (bcrypt, Argon2, scrypt)
- Apply unique random salt per password
- Use sufficient work factor (increases computation time)

**DON'T:**
- Use general-purpose hashes (MD5, SHA-256 alone) for passwords
- Use same salt for all passwords
- Use fast hashing (makes brute force easy)

### Integrity Verification

**DO:**
- Use SHA-256 or SHA-512
- Transmit hash through separate channel when possible
- Consider HMAC when authentication is also needed

**DON'T:**
- Use MD5 or SHA-1 for security purposes
- Assume hash alone proves who created data (use signatures for that)

### Digital Signatures

**DO:**
- Use SHA-256+ as the hash algorithm in signatures
- Verify signatures before trusting signed content
- Check certificate validity and revocation

**DON'T:**
- Accept signatures using MD5 or SHA-1
- Ignore certificate warnings
- Assume signed = safe (signature proves source, not intent)

---

## Key Exam Tips

🎯 **MD5 and SHA-1 are broken/deprecated** - Never the right answer for security applications.

🎯 **SHA-256 is the standard** - Default correct answer for "which hash algorithm?"

🎯 **Hashing is one-way** - Cannot recover input from hash. Not encryption.

🎯 **HMAC adds authentication** - Hash + secret key. Proves integrity AND who computed it. Requires shared secret.

🎯 **Digital signatures provide three things** - Integrity (unchanged), Authentication (who signed), Non-repudiation (can't deny signing).

🎯 **Digital signatures use private key** - Sign with private, verify with public. Only signer can create.

🎯 **Hash first, then sign** - Sign the hash (small, fixed-size), not the whole document.

🎯 **Collision resistance** - When an algorithm's collision resistance fails, it's "broken."

---

## Key Takeaways

- [ ] Hashing produces fixed-length output from any input—one-way, deterministic, collision-resistant
- [ ] MD5 (128-bit) is broken—trivial collisions, never use for security
- [ ] SHA-1 (160-bit) is deprecated—practical collisions demonstrated, avoid for new systems
- [ ] SHA-256/SHA-512 are current standards—secure, widely supported, use these
- [ ] SHA-3 is secure alternative to SHA-2—different design, growing adoption
- [ ] HMAC combines hash with secret key—provides integrity AND authentication
- [ ] HMAC requires shared secret—both parties have same key
- [ ] Digital signatures hash document, then encrypt hash with private key
- [ ] Digital signatures provide integrity, authentication, AND non-repudiation
- [ ] Only private key holder can create signature—public key verifies
- [ ] Collision attacks find two inputs with same hash—breaks integrity assurance
- [ ] Birthday attacks make collisions easier to find than brute force
- [ ] Password hashing needs salt + stretching—not plain SHA-256

---

## Check Your Understanding

**1. A system stores user passwords as SHA-256 hashes without salt. Two users who chose "Welcome1!" have identical hashes in the database. What problem does this create, and how would salting help?**

<details>
<summary>Show Answer</summary>
<strong>Problem: Identical passwords produce identical hashes.</strong> An attacker can: (1) Identify users with same passwords (crack one, compromise all), (2) Use precomputed rainbow tables for instant lookup. <strong>Salting solution:</strong> Add unique random salt per user before hashing. User A: hash("salt_A" + "Welcome1!") = hash_X. User B: hash("salt_B" + "Welcome1!") = hash_Y. Different salts → different hashes even for identical passwords. Rainbow tables useless (would need separate table for each possible salt). Attacker can't identify password reuse across users.
</details>

**2. An organization uses MD5 to hash documents before signing with RSA. Why is this problematic despite RSA being secure?**

<details>
<summary>Show Answer</summary>
<strong>MD5's collision vulnerability undermines the entire signature.</strong> RSA signature security depends on the hash being collision-resistant. With MD5, an attacker can create two documents with the same hash—one legitimate, one malicious. If the legitimate document gets signed, that signature also validates the malicious document (same hash → same signature validation). The RSA signature is mathematically correct but signs a broken hash. Solution: Use SHA-256 or stronger for the hash component. Digital signature security is only as strong as its weakest component.
</details>

**3. What is the difference between HMAC and a digital signature in terms of who can create and verify them?**

<details>
<summary>Show Answer</summary>
<strong>HMAC (symmetric):</strong> Both parties share the same secret key. Either party can create AND verify the HMAC. Cannot prove which party created it—both could have. No non-repudiation. <strong>Digital signature (asymmetric):</strong> Only private key holder can create signature. Anyone with public key can verify. Uniquely identifies the signer—only they have the private key. Provides non-repudiation (signer can't deny creating it). Key difference: HMAC proves "someone with the key" while digital signature proves "specifically this person."
</details>

**4. Explain the digital signature process: Alice wants to sign a contract so Bob can verify Alice signed it and the contract hasn't changed.**

<details>
<summary>Show Answer</summary>
<strong>Alice signing:</strong> (1) Alice hashes the contract using SHA-256, producing fixed-size digest. (2) Alice encrypts the hash with her PRIVATE key, creating the digital signature. (3) Alice sends contract + signature to Bob. <strong>Bob verifying:</strong> (1) Bob decrypts the signature using Alice's PUBLIC key, recovering the original hash. (2) Bob independently hashes the received contract. (3) Bob compares: decrypted hash vs. computed hash. (4) If they match: contract unchanged (integrity) AND Alice signed it (authentication + non-repudiation). Only Alice's private key could create a signature that Alice's public key decrypts correctly.
</details>

**5. Why is SHA-3 described as a "backup" to SHA-2 rather than a replacement?**

<details>
<summary>Show Answer</summary>
<strong>SHA-2 isn't broken—SHA-3 provides algorithm diversity.</strong> SHA-2 remains secure with no practical attacks. SHA-3 was developed as insurance: if mathematical weaknesses are ever discovered in SHA-2's design, SHA-3 uses completely different internal structure (Keccak sponge vs. Merkle-Damgård). Having two unrelated secure algorithms means a breakthrough against one doesn't break everything. SHA-3 complements rather than replaces SHA-2. Organizations can choose based on requirements, and critical applications can use both for defense in depth. It's cryptographic diversity, not obsolescence.
</details>

**6. A file download page lists: "SHA256: 4a7b2c... Click here to verify." You download the file and compute its SHA-256 hash. It matches. What have you verified, and what have you NOT verified?**

<details>
<summary>Show Answer</summary>
<strong>Verified:</strong> The file you downloaded matches what created that hash. The file wasn't corrupted in transit or accidentally modified. <strong>NOT verified:</strong> That the hash on the website is legitimate. If an attacker compromised the website, they could replace both the file AND the hash. You've verified integrity against the published hash, not authenticity of the source. For authenticity, you'd need: (1) Hash delivered through separate trusted channel, (2) Digital signature from publisher that you verify with their known public key, or (3) HTTPS with valid certificate proving you're on the real website. Hash alone proves consistency, not trustworthiness.
</details>

**7. What properties make SHA-256 suitable for digital signatures while making it unsuitable (alone) for password storage?**

<details>
<summary>Show Answer</summary>
<strong>For digital signatures, SHA-256 is excellent:</strong> Fast (sign/verify large documents quickly), deterministic (same document → same hash → consistent signatures), collision-resistant (can't create two documents with same signature), fixed output (signature size independent of document size). <strong>For password storage, these same properties are problematic:</strong> Fast means attackers can try billions of guesses per second. No built-in salt means identical passwords → identical hashes (rainbow tables work). Password storage needs: deliberate slowness (key stretching), unique salt per password, memory-hard functions. SHA-256 is a building block (used inside bcrypt/PBKDF2) but shouldn't be used alone for passwords.
</details>

**8. An email is signed with S/MIME using the sender's digital certificate. What does successful signature verification prove about the email?**

<details>
<summary>Show Answer</summary>
<strong>Successful verification proves:</strong> (1) <strong>Integrity:</strong> The email content hasn't been modified since signing—any change would invalidate the signature. (2) <strong>Authentication:</strong> The email was signed by the holder of the private key corresponding to the certificate's public key. (3) <strong>Non-repudiation:</strong> The sender cannot credibly deny sending the email (only their private key could create that signature). <strong>Important caveat:</strong> This assumes the certificate itself is valid and trusted. You must also verify: certificate not expired, certificate not revoked, certificate issued by trusted CA, certificate belongs to claimed sender. A valid signature on an untrusted/fake certificate proves nothing useful.
</details>

**9. What is the birthday attack, and how does it affect the practical security of hash functions?**

<details>
<summary>Show Answer</summary>
<strong>Birthday attack exploits mathematical principle:</strong> In a group of just 23 people, there's >50% chance two share a birthday. You don't need 365 people—collisions occur much sooner than intuition suggests. <strong>Applied to hashing:</strong> For hash with N possible outputs, finding a collision requires approximately √N attempts, not N attempts. For SHA-1 (160-bit, 2^160 possible hashes): brute force collision = 2^160 attempts; birthday attack = 2^80 attempts. 2^80 is still huge but 2^80 times more feasible than 2^160. <strong>Practical impact:</strong> Hash algorithms need larger output sizes to resist birthday attacks. 128-bit hash has only 64-bit security against collisions. This is why SHA-256 (256-bit → 128-bit collision security) is preferred over shorter hashes.
</details>

**10. Classify each use case with the appropriate solution: (a) Verify downloaded ISO unchanged, (b) Prove who approved a purchase order, (c) Authenticate API requests between partners, (d) Store user passwords.**

<details>
<summary>Show Answer</summary>
<strong>(a) Verify downloaded ISO unchanged:</strong> SHA-256 hash. Publisher provides hash; you compute hash of download and compare. Verifies integrity. For authenticity, need signed hash or HTTPS delivery.

<strong>(b) Prove who approved purchase order:</strong> Digital signature. Approver signs with their private key. Provides integrity (unchanged), authentication (specifically who signed), and non-repudiation (can't deny). Legally binding.

<strong>(c) Authenticate API requests between partners:</strong> HMAC (e.g., HMAC-SHA256). Partners share API secret key. Requester includes HMAC of request; recipient verifies with same key. Proves request from partner (authentication) and unmodified (integrity).

<strong>(d) Store user passwords:</strong> Password hashing algorithm with salt (bcrypt, Argon2, scrypt). NOT plain SHA-256. Requires: unique salt per password, intentional slowness (key stretching), resistance to GPU/hardware attacks. One-way storage so compromised database doesn't reveal passwords.
</details>

---

## Next Lesson Preview

In **Lesson 6: PKI and Certificates**, we'll explore the infrastructure that makes digital signatures trustworthy at scale. You'll learn how Certificate Authorities establish trust, how the certificate lifecycle works from request through revocation, and why your browser trusts some certificates but warns about others. We'll cover certificate types (DV, OV, EV), formats, and the chain of trust that secures billions of daily web connections.

---

✅ **Lesson 5 Complete**

**Progress:** 5 of 30 lessons complete (16.7%)

---

*Next up: Lesson 6 - PKI and Certificates*