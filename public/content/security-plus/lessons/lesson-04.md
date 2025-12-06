# Lesson 4: Cryptography Fundamentals

**Estimated Time:** 30-35 minutes  
**Domain:** 1.0 General Security Concepts (12% of exam)  
**Exam Objectives Covered:** 1.4 - Explain the importance of using appropriate cryptographic solutions

---

## Learning Objectives

By the end of this lesson, you will be able to:
- Distinguish between encryption, encoding, and hashing
- Explain symmetric encryption and identify common algorithms (AES, 3DES, Blowfish)
- Explain asymmetric encryption and identify common algorithms (RSA, ECC, Diffie-Hellman)
- Describe the key distribution problem and how asymmetric encryption solves it
- Compare key lengths and their security implications
- Explain key stretching techniques (PBKDF2, bcrypt, scrypt)
- Describe salting and its role in preventing rainbow table attacks
- Select appropriate cryptographic solutions for given scenarios

---

## Video Resources

- **Professor Messer:** "Security+ SY0-701 - Cryptographic Concepts" (15 min)
- **PowerCert:** "Symmetric vs Asymmetric Encryption" (12 min)
- **Computerphile:** "AES Explained" (10 min)

---

## Introduction

1976: Two researchers at Stanford publish a paper that changes everything. Whitfield Diffie and Martin Hellman describe a way for two people who have never met to establish a secret key over a completely public channel—with eavesdroppers watching every message.

Before this breakthrough, encryption had an unsolvable problem: to communicate secretly, you first needed to share a secret key. But how do you share a secret with someone you've never met? Send a messenger? The messenger could be intercepted. Use a phone? The line could be tapped. Mail it? Envelopes can be opened.

For thousands of years, secure communication required secure key exchange first. Militaries used couriers with locked briefcases. Diplomats used diplomatic pouches. Banks used armored cars. All of it expensive, slow, and still potentially compromised.

Diffie-Hellman key exchange—and the asymmetric cryptography that followed—eliminated this problem entirely. Today, when you connect to your bank's website, your browser and their server establish a shared secret instantly, securely, over the open internet, with millions of potential eavesdroppers watching. This happens billions of times daily, invisibly, making modern e-commerce, online banking, and private communication possible.

Cryptography is the foundation of digital security. Without it, there's no confidentiality (anyone can read your data), no integrity (anyone can modify your data undetected), no authentication (anyone can impersonate anyone), and no non-repudiation (anyone can deny their actions).

Every secure protocol, every protected database, every private message relies on cryptographic principles. Understanding these fundamentals isn't optional for security professionals—it's foundational.

---

## Cryptography Basics: The Foundation

Before diving into specific techniques, establish core terminology and concepts.

### Encryption vs. Encoding vs. Hashing

These three transformations are often confused but serve completely different purposes.

**Encryption** - Transforms data to keep it confidential. Designed to be reversible only with the correct key. Purpose: secrecy.

```
Plaintext: "Attack at dawn"
Encryption with key → Ciphertext: "Xk9#mP2$vL..."
Decryption with key → Plaintext: "Attack at dawn"
```

**Encoding** - Transforms data for compatibility or transport. Not secret—designed to be easily reversible by anyone. Purpose: format conversion.

```
Text: "Hello"
Base64 encoding → "SGVsbG8="
Base64 decoding → "Hello"
```

Encoding is NOT security. Base64, URL encoding, and ASCII conversions are trivially reversible. Never use encoding to "hide" sensitive data.

**Hashing** - Transforms data into fixed-length fingerprint. One-way—cannot be reversed to recover original. Purpose: integrity verification.

```
Input: "password123"
SHA-256 hash → "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f"
Cannot reverse to get "password123"
```

| Property | Encryption | Encoding | Hashing |
|----------|------------|----------|---------|
| Reversible | Yes (with key) | Yes (by anyone) | No |
| Purpose | Confidentiality | Compatibility | Integrity |
| Key required | Yes | No | No |
| Security function | Yes | No | Yes |

### Plaintext and Ciphertext

**Plaintext** - Original, readable data before encryption. Also called "cleartext."

**Ciphertext** - Encrypted, unreadable result after encryption.

The encryption process transforms plaintext to ciphertext. Decryption reverses it.

```
Plaintext → [Encryption + Key] → Ciphertext
Ciphertext → [Decryption + Key] → Plaintext
```

### Keys and Key Management

A **key** is secret data used by cryptographic algorithms to encrypt and decrypt. Without the correct key, ciphertext should be practically impossible to decrypt.

**Key management** encompasses:
- **Generation** - Creating strong, random keys
- **Distribution** - Securely sharing keys with authorized parties
- **Storage** - Protecting keys from unauthorized access
- **Rotation** - Periodically replacing keys
- **Revocation** - Invalidating compromised keys
- **Destruction** - Securely deleting keys when no longer needed

Cryptographic algorithms are public—their security relies entirely on key secrecy. A perfectly implemented AES encryption is worthless if the key is stored in plaintext on a shared drive.

💡 **Exam Tip:** The exam tests understanding that encoding is NOT encryption and provides no security. Questions may present scenarios where someone "secured" data using Base64 encoding—recognize this as ineffective.

---

## Symmetric Encryption: One Key Does Everything

Symmetric encryption uses the same key for both encryption and decryption. If you encrypted data with Key X, you decrypt it with Key X.

### How Symmetric Encryption Works

```
Sender:
Plaintext + Key → [Encryption Algorithm] → Ciphertext

Receiver:
Ciphertext + Key → [Decryption Algorithm] → Plaintext
```

Both parties must possess the identical key. The algorithm is public; the key is secret.

**Analogy:** A lockbox with a single key. You lock the box with your key, mail it, and the recipient unlocks it with a copy of the same key. Anyone without that key cannot open the box.

### Symmetric Encryption Characteristics

**Advantages:**
- **Fast** - Hundreds of times faster than asymmetric encryption
- **Efficient** - Low computational overhead
- **Scalable** - Handles large data volumes easily
- **Proven** - Well-tested algorithms (AES) with no practical attacks

**Disadvantages:**
- **Key distribution problem** - How do you securely share the key initially?
- **Key management complexity** - Every pair of communicating parties needs a unique key
- **No inherent authentication** - Proves you have the key, not who you are

### The Key Distribution Problem

Symmetric encryption's fundamental challenge: before communicating securely, both parties need the same key. But how do you share a key securely if you don't yet have secure communication?

**Scenario:** Alice wants to send Bob an encrypted message. They've never met. Any communication channel Alice uses to send Bob the key could be monitored by Eve (the eavesdropper).

- Email the key? Eve reads it.
- Call and read the key? Eve listens.
- Mail the key? Eve intercepts.

For symmetric encryption alone, there's no perfect solution. Historically, keys were exchanged through trusted couriers, secure physical meetings, or pre-positioned key materials.

Asymmetric encryption solves this problem (covered below).

### Common Symmetric Algorithms

**AES (Advanced Encryption Standard)** - Current standard
- Key sizes: 128, 192, or 256 bits
- Block cipher (encrypts fixed-size blocks)
- Selected by NIST in 2001 after public competition
- No known practical attacks
- Used everywhere: TLS, disk encryption, file encryption, VPNs
- **This is THE symmetric algorithm to know for the exam**

**3DES (Triple DES)** - Legacy, being phased out
- Applies DES algorithm three times
- Effective key length: 112 bits
- Much slower than AES
- Still found in legacy systems, especially financial
- Being deprecated—don't use for new implementations

**Blowfish** - Older alternative
- Variable key length (32-448 bits)
- Block cipher
- Created by Bruce Schneier in 1993
- Replaced by Twofish (Schneier's newer design)
- Still used in some applications (bcrypt uses Blowfish)

**Twofish** - AES finalist
- 128, 192, or 256-bit keys
- Block cipher
- AES competition finalist (lost to Rijndael/AES)
- Secure but less common than AES

**RC4** - Stream cipher, deprecated
- Variable key length
- Stream cipher (encrypts bit by bit, not blocks)
- Known vulnerabilities
- **Deprecated—do not use**
- Was used in WEP (broken) and early TLS

| Algorithm | Key Size | Status | Use Case |
|-----------|----------|--------|----------|
| **AES** | 128/192/256-bit | Current standard | Everything |
| 3DES | 112-bit effective | Legacy/deprecated | Legacy systems only |
| Blowfish | 32-448-bit | Older | bcrypt password hashing |
| Twofish | 128/192/256-bit | Secure but rare | Alternative to AES |
| RC4 | Variable | Broken | None—avoid |

🎯 **Exam Tip:** AES is the symmetric encryption standard. Know that it uses 128, 192, or 256-bit keys. Questions about "which algorithm for encrypting large amounts of data quickly" point to AES (symmetric).

---

## Asymmetric Encryption: Key Pairs Change Everything

Asymmetric encryption uses mathematically related key pairs: a public key and a private key. What one key encrypts, only the other can decrypt.

### How Asymmetric Encryption Works

Each user generates a key pair:
- **Public key** - Shared freely with anyone
- **Private key** - Kept secret, never shared

**For confidentiality (encrypting messages):**
```
Sender encrypts with recipient's PUBLIC key
→ Only recipient's PRIVATE key can decrypt
```

Bob wants to receive secret messages:
1. Bob generates key pair (public + private)
2. Bob publishes his public key (anyone can have it)
3. Alice encrypts message with Bob's public key
4. Only Bob's private key can decrypt it
5. Even Alice can't decrypt after encrypting—only Bob can

**For authentication/signatures (proving identity):**
```
Sender signs with their own PRIVATE key
→ Anyone with sender's PUBLIC key can verify
```

Alice wants to prove she sent a message:
1. Alice signs message with her private key
2. Anyone can verify using Alice's public key
3. Only Alice's private key could create that signature
4. Proves Alice sent it (authentication + non-repudiation)

### Asymmetric Encryption Characteristics

**Advantages:**
- **Solves key distribution** - Public keys can be freely distributed
- **Enables digital signatures** - Private key proves identity
- **Scalable** - N users need N key pairs, not N² shared keys
- **Non-repudiation** - Only private key holder could sign

**Disadvantages:**
- **Slow** - Much slower than symmetric (100-1000x)
- **Computationally intensive** - High CPU usage for large data
- **Key size requirements** - Needs larger keys for equivalent security

### How Asymmetric Solves Key Distribution

The key distribution problem vanishes with asymmetric encryption:

1. Alice wants to communicate secretly with Bob (they've never met)
2. Bob publishes his public key openly (website, key server, email)
3. Alice encrypts a symmetric key with Bob's public key
4. Alice sends the encrypted symmetric key to Bob
5. Only Bob can decrypt it (only he has the private key)
6. Now both Alice and Bob have the same symmetric key
7. They use fast symmetric encryption for actual communication

This hybrid approach combines asymmetric's key exchange capability with symmetric's speed. It's how TLS/HTTPS works.

### Common Asymmetric Algorithms

**RSA (Rivest-Shamir-Adleman)** - Most widely used
- Key sizes: 2048, 3072, 4096 bits (2048 minimum recommended)
- Based on factoring large prime numbers
- Used for encryption and digital signatures
- Slower than ECC for equivalent security
- Well-understood, extensively tested
- **Primary asymmetric algorithm to know**

**ECC (Elliptic Curve Cryptography)** - Modern alternative
- Much smaller keys for equivalent security
- ECC-256 ≈ RSA-3072 in security
- Faster than RSA
- Used in mobile devices (lower power consumption)
- Growing adoption, especially for signatures

**Diffie-Hellman (DH)** - Key exchange only
- Not encryption—enables key agreement
- Two parties derive same shared secret over public channel
- Original asymmetric breakthrough (1976)
- Doesn't authenticate parties (vulnerable to man-in-the-middle alone)
- Foundation for many protocols

**ECDH (Elliptic Curve Diffie-Hellman)** - DH using elliptic curves
- Combines DH key exchange with ECC efficiency
- Smaller keys, faster computation
- Widely used in TLS 1.3

| Algorithm | Purpose | Key Size | Notes |
|-----------|---------|----------|-------|
| **RSA** | Encryption + Signatures | 2048+ bits | Most common |
| **ECC** | Encryption + Signatures | 256+ bits | Smaller keys, faster |
| **DH** | Key exchange only | 2048+ bits | Original breakthrough |
| **ECDH** | Key exchange only | 256+ bits | ECC-based DH |

### RSA vs. ECC Key Size Comparison

ECC achieves equivalent security with dramatically smaller keys:

| Security Level | RSA Key Size | ECC Key Size |
|----------------|--------------|--------------|
| 80-bit | 1024 bits | 160 bits |
| 112-bit | 2048 bits | 224 bits |
| 128-bit | 3072 bits | 256 bits |
| 192-bit | 7680 bits | 384 bits |
| 256-bit | 15360 bits | 512 bits |

Smaller keys = faster computation = better for mobile/IoT devices.

---

## Symmetric + Asymmetric: Hybrid Approach

Real-world systems combine both encryption types:

1. **Asymmetric** for key exchange (solve distribution problem)
2. **Symmetric** for bulk data encryption (speed)

### TLS/HTTPS Example

When your browser connects to a secure website:

1. Browser and server perform TLS handshake
2. Server sends its certificate (contains public key)
3. Browser verifies certificate
4. Key exchange occurs (Diffie-Hellman or RSA)
5. Both derive same symmetric session key
6. All subsequent data encrypted with fast symmetric encryption
7. Session key discarded when connection ends

Asymmetric crypto is used for seconds (key exchange). Symmetric crypto handles megabytes of actual data. Best of both worlds.

---

## Key Length and Security

Key length directly affects security—longer keys exponentially increase the work to break encryption.

### How Key Length Works

A key is binary data. An 8-bit key has 2⁸ = 256 possible values. A 256-bit key has 2²⁵⁶ possible values.

Brute force attack tries every possible key. Doubling key length squares the difficulty:
- 64-bit key: 2⁶⁴ possibilities
- 128-bit key: 2¹²⁸ possibilities (2⁶⁴ times harder than 64-bit)
- 256-bit key: 2²⁵⁶ possibilities (2¹²⁸ times harder than 128-bit)

### Current Recommendations

**Symmetric encryption (AES):**
- 128-bit: Secure for most purposes
- 256-bit: Required for top secret (US government), future-proofing

**Asymmetric encryption (RSA):**
- 2048-bit: Current minimum
- 3072-bit: Recommended for longer-term security
- 4096-bit: High security applications

**Asymmetric encryption (ECC):**
- 256-bit: Equivalent to RSA-3072
- 384-bit: High security

### Key Length ≠ Security Level

A 256-bit AES key is not equivalent to 256-bit RSA.

Different algorithms have different mathematical properties. RSA-2048 is approximately equivalent to AES-112 in security. ECC-256 is approximately equivalent to AES-128.

**Don't compare key lengths across algorithm types—compare security levels.**

💡 **Exam Tip:** Know that AES-128, AES-256, RSA-2048+, and ECC-256+ are currently considered secure. RC4 and DES are broken. 3DES is deprecated. Key length questions often test minimum acceptable values.

---

## Key Stretching: Strengthening Weak Keys

Users choose weak passwords. "password123" has far less entropy than a random 128-bit key. Key stretching converts weak passwords into stronger cryptographic keys.

### The Problem

User password: "fluffy" (easily guessed)

If we hash once: SHA-256("fluffy") produces consistent output. Attacker can precompute millions of common password hashes quickly.

### The Solution: Iteration

Key stretching applies the hash function thousands or millions of times:

```
result = hash(password)
for i in range(100000):
    result = hash(result)
```

What took microseconds now takes hundreds of milliseconds. Users hardly notice (logging in takes slightly longer). Attackers trying millions of passwords are dramatically slowed.

### Key Stretching Algorithms

**PBKDF2 (Password-Based Key Derivation Function 2)**
- Applies hash function many iterations
- Configurable iteration count (increase over time as hardware improves)
- Widely supported
- Used by WPA2 for WiFi passwords

**bcrypt**
- Based on Blowfish cipher
- Built-in salt
- Adaptive—can increase work factor
- Deliberately slow, resistant to GPU acceleration
- Popular for password storage

**scrypt**
- Memory-hard function
- Requires significant RAM, not just CPU
- Resistant to ASIC/FPGA attacks (custom hardware)
- Higher resource requirements than bcrypt

**Argon2**
- Winner of Password Hashing Competition (2015)
- Configurable memory, time, and parallelism
- Current recommendation for new applications
- Three variants: Argon2d, Argon2i, Argon2id

| Algorithm | Approach | Strength |
|-----------|----------|----------|
| PBKDF2 | Many iterations | Good, widely supported |
| bcrypt | Blowfish-based, adaptive | Good, GPU-resistant |
| scrypt | Memory-hard | Better against hardware attacks |
| Argon2 | Configurable resources | Current best practice |

---

## Salting: Defeating Precomputation

Salting adds random data to passwords before hashing, making precomputed attacks useless.

### The Rainbow Table Problem

Without salt, same password always produces same hash:

```
User1: password123 → hash: abc123...
User2: password123 → hash: abc123... (identical)
```

Attackers precompute hashes for millions of common passwords (rainbow tables). Finding "abc123..." in the table instantly reveals "password123."

### How Salting Works

A salt is random data added to each password before hashing:

```
User1: password123 + salt "x7Km9" → hash: def456...
User2: password123 + salt "pQ2nR" → hash: uvw789... (different!)
```

Same password, different salts, different hashes. Rainbow tables are useless—attackers would need separate tables for every possible salt.

### Salt Requirements

**Unique per password** - Every password gets its own salt. Reusing salts reduces protection.

**Random** - Generated using cryptographically secure random number generator.

**Stored with hash** - Salt isn't secret. It's stored alongside the hash (attacker needs it to verify, but can't precompute without it).

**Sufficient length** - At least 16 bytes recommended.

### Salting Example

Password storage without salt (vulnerable):
```
user1: hash("password") = abc123
user2: hash("password") = abc123  ← Same hash reveals same password
```

Password storage with salt (secure):
```
user1: salt="x7Km", hash("x7Km" + "password") = def456
user2: salt="p2Qn", hash("p2Qn" + "password") = ghi789  ← Different hashes
```

Even though both users chose "password," their hashes differ. An attacker with the database can't identify users with the same password, and precomputed tables don't help.

---

## Putting It Together: Cryptographic Decisions

Choosing cryptographic solutions requires matching capabilities to requirements.

### When to Use Symmetric Encryption

- Encrypting large amounts of data (files, databases, disk)
- Bulk data transmission after key exchange
- Situations where key distribution is already solved
- Performance-critical applications

**Example:** Full disk encryption uses AES (symmetric) because encrypting gigabytes with asymmetric crypto would be impossibly slow.

### When to Use Asymmetric Encryption

- Key exchange (bootstrapping symmetric encryption)
- Digital signatures (authentication, non-repudiation)
- Situations where parties haven't pre-shared keys
- Certificate-based authentication

**Example:** Email encryption (S/MIME) uses asymmetric to encrypt a symmetric key, then symmetric for the message body.

### When to Use Hashing

- Password storage (never store plaintext passwords)
- Integrity verification (did data change?)
- Digital signatures (hash then sign)
- Deduplication (identifying identical files)

**Example:** Git uses SHA-1 hashes to identify every commit, file, and tree object.

### Selection Framework

| Need | Solution |
|------|----------|
| Encrypt large files quickly | AES (symmetric) |
| Exchange keys securely | RSA, ECDH (asymmetric) |
| Prove message authenticity | Digital signatures (asymmetric) |
| Store passwords | Hash with salt + stretching (bcrypt/Argon2) |
| Verify file integrity | SHA-256 hash |
| Secure web traffic | TLS (hybrid: asymmetric + symmetric) |

---

## Key Exam Tips

🎯 **AES is the symmetric standard** - Know key sizes (128/192/256). It's fast, secure, used everywhere.

🎯 **RSA is the primary asymmetric algorithm** - Minimum 2048-bit keys. Used for encryption and signatures.

🎯 **Asymmetric solves key distribution** - This is its primary advantage over symmetric.

🎯 **Symmetric is fast, asymmetric is slow** - Hybrid systems use asymmetric for key exchange, symmetric for data.

🎯 **Encoding ≠ Encryption** - Base64 and similar encodings provide zero security.

🎯 **Salting defeats rainbow tables** - Random salt per password, stored with hash.

🎯 **Key stretching strengthens passwords** - PBKDF2, bcrypt, scrypt, Argon2 make brute force expensive.

🎯 **ECC uses smaller keys** - ECC-256 ≈ RSA-3072 security with smaller, faster keys.

🎯 **Diffie-Hellman is key exchange only** - Not encryption. Establishes shared secret.

---

## Key Takeaways

- [ ] Encryption transforms data for confidentiality (reversible with key)
- [ ] Encoding transforms data for compatibility (reversible by anyone—not security)
- [ ] Hashing creates one-way fingerprints for integrity (not reversible)
- [ ] Symmetric encryption uses same key for encrypt/decrypt—fast but has key distribution problem
- [ ] AES is the symmetric standard (128/192/256-bit keys)
- [ ] Asymmetric encryption uses public/private key pairs—slower but solves key distribution
- [ ] RSA is the primary asymmetric algorithm (2048+ bit keys)
- [ ] ECC provides equivalent security with smaller keys than RSA
- [ ] Diffie-Hellman enables key exchange over public channels (not encryption itself)
- [ ] Hybrid systems combine asymmetric (key exchange) with symmetric (bulk encryption)
- [ ] Longer keys provide exponentially more security
- [ ] Key stretching (PBKDF2, bcrypt, scrypt, Argon2) strengthens weak passwords
- [ ] Salting adds random data to passwords, defeating precomputed rainbow tables
- [ ] Salt must be unique per password, random, and stored with the hash

---

## Check Your Understanding

**1. A developer stores user passwords by applying Base64 encoding. A security auditor discovers this during a review. What is the problem?**

<details>
<summary>Show Answer</summary>
<strong>Base64 encoding provides no security whatsoever.</strong> Encoding is not encryption—it's designed to be easily reversible by anyone without any key. Any attacker accessing the database can decode every password instantly. Passwords should be stored using a salted hash with key stretching (bcrypt, Argon2, or PBKDF2), making them computationally expensive to crack even if the database is compromised.
</details>

**2. An organization needs to encrypt 500GB of data at rest on a file server. Should they use symmetric or asymmetric encryption, and which algorithm?**

<details>
<summary>Show Answer</summary>
<strong>Symmetric encryption with AES.</strong> Asymmetric encryption is too slow for bulk data—encrypting 500GB with RSA would take impractically long and consume enormous CPU resources. AES (symmetric) is designed for exactly this purpose: fast, efficient encryption of large data volumes. AES-256 provides strong security with excellent performance. The key management challenge (securely storing the AES key) is separate from the encryption choice.
</details>

**3. Alice wants to send Bob a confidential message. They've never met and have no pre-shared secrets. How can asymmetric encryption help?**

<details>
<summary>Show Answer</summary>
<strong>Alice encrypts with Bob's public key; only Bob's private key can decrypt.</strong> Bob publishes his public key (website, key server, etc.). Alice obtains Bob's public key and encrypts her message with it. The resulting ciphertext can only be decrypted by Bob's corresponding private key, which only Bob possesses. Even Alice cannot decrypt the message after encrypting it—only Bob can. This solves the key distribution problem: no pre-shared secret needed because Bob's public key can be freely distributed.
</details>

**4. A website stores passwords as SHA-256 hashes without salt. Two users who chose "Summer2024!" as their password have identical hashes in the database. What attack does this enable?**

<details>
<summary>Show Answer</summary>
<strong>Rainbow table attack and password identification.</strong> Without unique salts, identical passwords produce identical hashes. An attacker can: (1) Use precomputed rainbow tables to look up common password hashes instantly, (2) Identify users with the same password (if one is cracked, all are compromised), (3) Crack one hash and apply it to all matching entries. Proper salting (unique random salt per password) ensures "Summer2024!" produces different hashes for each user, defeating rainbow tables and preventing password correlation.
</details>

**5. What is the key distribution problem, and how does asymmetric encryption solve it?**

<details>
<summary>Show Answer</summary>
<strong>The key distribution problem: symmetric encryption requires both parties to have the same secret key, but there's no secure way to share it initially.</strong> If Alice and Bob want to communicate secretly using symmetric encryption, they need the same key. But any channel Alice uses to send the key (email, phone, mail) could be monitored. Asymmetric encryption solves this: Bob publishes his public key openly. Alice uses it to encrypt a symmetric key and sends it to Bob. Only Bob's private key can decrypt it. Now both have the symmetric key without ever transmitting it in the clear. Eavesdroppers see only the public key (useless for decryption) and encrypted symmetric key (unreadable without private key).
</details>

**6. Why is bcrypt preferred over simple SHA-256 for password hashing?**

<details>
<summary>Show Answer</summary>
<strong>bcrypt includes built-in salting and key stretching; SHA-256 does not.</strong> SHA-256 is fast—great for integrity checking, terrible for passwords. Fast hashing lets attackers try billions of passwords per second. bcrypt is deliberately slow: (1) Built-in salt defeats rainbow tables, (2) Adaptive work factor makes computation expensive, (3) Resistant to GPU acceleration. A bcrypt hash might take 100ms to compute—unnoticeable to users logging in, but devastating to attackers trying millions of passwords. The work factor can be increased over time as hardware improves.
</details>

**7. ECC-256 provides approximately equivalent security to RSA-3072. Why might an organization choose ECC over RSA?**

<details>
<summary>Show Answer</summary>
<strong>Smaller keys = faster computation and less bandwidth.</strong> ECC achieves equivalent security with dramatically smaller keys. Benefits: (1) Faster key generation, encryption, and signing, (2) Less CPU/power consumption (critical for mobile/IoT), (3) Smaller certificates and signatures, (4) Lower bandwidth requirements. RSA-3072 keys are 12x larger than ECC-256 for similar security. For constrained devices (smartphones, smartcards, IoT sensors), ECC's efficiency is significant. RSA remains widely supported and well-understood, but ECC adoption is growing.
</details>

**8. A TLS connection uses ECDHE for key exchange and AES-256 for data encryption. Why use both instead of just one?**

<details>
<summary>Show Answer</summary>
<strong>Hybrid approach: ECDHE for secure key exchange, AES-256 for fast bulk encryption.</strong> ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) establishes a shared secret over an insecure channel—solving key distribution. However, asymmetric operations are slow (100-1000x slower than symmetric). AES-256 encrypts the actual data stream quickly once both parties have the shared key. The hybrid approach combines asymmetric's key distribution capability with symmetric's speed. ECDHE runs once per connection (milliseconds); AES handles megabytes of traffic efficiently. This is how virtually all TLS/HTTPS works.
</details>

**9. An application hashes passwords with SHA-256 and a unique 16-byte random salt per user, but uses only one iteration. What improvement would key stretching provide?**

<details>
<summary>Show Answer</summary>
<strong>Key stretching makes brute force dramatically slower.</strong> Even with proper salting (defeating rainbow tables), SHA-256 is too fast. Modern GPUs compute billions of hashes per second. An attacker can try the entire English dictionary, common passwords, and variations very quickly. Key stretching (PBKDF2 with 100,000+ iterations, bcrypt, scrypt, or Argon2) applies the hash function repeatedly. Each password attempt takes 100ms instead of nanoseconds. A billion-guess attack goes from seconds to years. Users experience imperceptible delay logging in; attackers experience impossible delays cracking passwords.
</details>

**10. Classify each algorithm: AES-256, RSA-4096, SHA-512, bcrypt, Diffie-Hellman.**

<details>
<summary>Show Answer</summary>
<strong>AES-256:</strong> Symmetric encryption algorithm. Same key encrypts and decrypts. Fast, used for bulk data.

<strong>RSA-4096:</strong> Asymmetric encryption algorithm. Public key encrypts, private key decrypts (or vice versa for signatures). Used for key exchange and digital signatures.

<strong>SHA-512:</strong> Hashing algorithm. One-way function producing fixed-length output. Used for integrity verification, digital signatures, password storage (with salt/stretching).

<strong>bcrypt:</strong> Key stretching/password hashing algorithm. Deliberately slow with built-in salt. Used specifically for password storage.

<strong>Diffie-Hellman:</strong> Key exchange protocol (asymmetric). Not encryption itself—allows two parties to derive shared secret over public channel. Used to establish symmetric keys.
</details>

---

## Next Lesson Preview

In **Lesson 5: Hashing and Digital Signatures**, we'll explore how hashing algorithms create unique fingerprints for data integrity, compare MD5, SHA-1, SHA-2, and SHA-3, and learn why some are broken while others remain secure. We'll then see how digital signatures combine hashing with asymmetric encryption to provide authentication, integrity, and non-repudiation—the foundation of code signing, document signing, and secure email.

---

✅ **Lesson 4 Complete**

**Progress:** 4 of 30 lessons complete (13.3%)

---

*Next up: Lesson 5 - Hashing and Digital Signatures*