# Lab 5: Hashing and Digital Signatures

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 1.4 - Explain the importance of using appropriate cryptographic solutions

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What are the key properties of a cryptographic hash function? Name at least four.**

2. **Explain the difference between a hash collision and a preimage attack. Which is more dangerous?**

3. **What does HMAC add to a regular hash, and why is it important?**

4. **How does a digital signature provide non-repudiation? Walk through the process.**

5. **Why can't you use encryption for integrity verification the same way you use hashing?**

---

## Section 2: Hands-On Activities

### Activity A: Hash Properties Demonstration

**Goal:** Understand hash behavior through observation.

**Using Windows PowerShell, hash these strings:**

Open PowerShell and use this command format:
```powershell
"YourTextHere" | Get-FileHash -Algorithm SHA256 -InputStream ([System.IO.MemoryStream]::new([System.Text.Encoding]::UTF8.GetBytes($_)))
```

Or simpler method - create a text file and hash it:
```powershell
"test" | Out-File -FilePath test.txt -NoNewline
Get-FileHash test.txt -Algorithm SHA256
```

**Hash these inputs:**

| Input | SHA256 Hash (first 16 characters) |
|-------|-----------------------------------|
| test | |
| Test | |
| test1 | |
| test2 | |
| A very long sentence that contains many words and characters | |

**Observations:**

| Property | What You Observed |
|----------|-------------------|
| Does changing one character change the entire hash? | |
| Are the hashes the same length regardless of input? | |
| Does uppercase vs lowercase produce different hashes? | |
| Can you predict what the hash will be? | |

**Hash the same input twice:**

| Input | First Hash | Second Hash | Identical? |
|-------|-----------|-------------|------------|
| "Security+" | | | |

**Key insight:** This demonstrates which hash property? _______________________

---

### Activity B: Hash Algorithm Comparison

**Goal:** Compare different hash algorithms.

**Hash the same file with different algorithms:**

Create a test file:
```powershell
"This is test content for hashing" | Out-File -FilePath hashtest.txt -NoNewline
```

Hash with multiple algorithms:
```powershell
Get-FileHash hashtest.txt -Algorithm MD5
Get-FileHash hashtest.txt -Algorithm SHA1
Get-FileHash hashtest.txt -Algorithm SHA256
Get-FileHash hashtest.txt -Algorithm SHA512
```

| Algorithm | Output Length (characters) | Output Length (bits) | Status |
|-----------|---------------------------|---------------------|--------|
| MD5 | | | |
| SHA-1 | | | |
| SHA-256 | | | |
| SHA-512 | | | |

**Algorithm reference:**

| Algorithm | Bit Length | Security Status | Acceptable Use Cases |
|-----------|------------|-----------------|---------------------|
| MD5 | 128-bit | | |
| SHA-1 | 160-bit | | |
| SHA-256 | 256-bit | | |
| SHA-384 | 384-bit | | |
| SHA-512 | 512-bit | | |
| SHA-3 | Variable | | |

**When would you still see MD5 used legitimately?**

_________________________________________________________________

---

### Activity C: File Integrity Verification

**Goal:** Use hashing to verify file integrity.

**Scenario:** You're downloading software and want to verify it hasn't been tampered with.

**Exercise 1: Verify a real download**

1. Go to a software download page that provides checksums (examples):
   - Notepad++ (notepad-plus-plus.org/downloads/)
   - 7-Zip (7-zip.org/download.html)
   - Python (python.org/downloads/)

2. Download the file AND note the published hash

| Detail | Your Finding |
|--------|--------------|
| Software downloaded | |
| Published hash algorithm | |
| Published hash value | |
| File location on your system | |

3. Calculate the hash yourself:
```powershell
Get-FileHash "C:\path\to\downloaded\file" -Algorithm SHA256
```

| Comparison | Value |
|------------|-------|
| Published hash | |
| Your calculated hash | |
| Do they match? | [ ] Yes [ ] No |

**What does a matching hash prove?**

_________________________________________________________________

**What does a matching hash NOT prove?**

_________________________________________________________________

**Exercise 2: Detect tampering**

1. Create a document:
```powershell
"Important contract terms: Payment of $1000 due on delivery" | Out-File contract.txt -NoNewline
```

2. Hash it:
```powershell
Get-FileHash contract.txt -Algorithm SHA256
```

Original hash: _______________________

3. Modify the file slightly (change $1000 to $9000):
```powershell
"Important contract terms: Payment of $9000 due on delivery" | Out-File contract.txt -NoNewline
```

4. Hash again:

Modified hash: _______________________

**Do the hashes match?** [ ] Yes [ ] No

**What security principle does this demonstrate?**

_________________________________________________________________

---

### Activity D: HMAC Concepts

**Goal:** Understand how HMAC differs from plain hashing.

**Plain hash vs HMAC:**

| Aspect | Plain Hash | HMAC |
|--------|-----------|------|
| Input | Message only | Message + Secret key |
| Output | Hash digest | Authenticated hash |
| Provides integrity? | | |
| Provides authentication? | | |
| Protects against tampering by anyone? | | |
| Protects against tampering without key? | | |

**HMAC use case scenario:**

You're sending a message to a server. An attacker intercepts it.

| Scenario | Plain Hash | HMAC |
|----------|-----------|------|
| Attacker modifies message | Can recalculate hash | Cannot create valid HMAC |
| Attacker creates new message | Can create hash | Cannot create valid HMAC |
| Server verifies authenticity | Only checks integrity | Verifies sender had key |

**Where is HMAC used?**

| Application | How HMAC is Used |
|-------------|------------------|
| API authentication | |
| Cookie/session tokens | |
| JWT (JSON Web Tokens) | |
| IPsec | |
| TLS | |

**HMAC construction:**

HMAC isn't just hash(key + message). Why is the actual HMAC construction more complex?

_________________________________________________________________

---

### Activity E: Digital Signature Process

**Goal:** Understand how digital signatures work step by step.

**Map the digital signature process:**

**Signing (Sender's side):**

```
Step 1: Start with [____________]

Step 2: Create [____________] of the document

Step 3: Encrypt the hash with sender's [____________] key

Step 4: Result is the [____________]

Step 5: Send document + signature to recipient
```

**Verification (Recipient's side):**

```
Step 1: Receive document + [____________]

Step 2: Decrypt signature using sender's [____________] key
        Result: [____________]

Step 3: Calculate [____________] of received document

Step 4: Compare decrypted hash with calculated hash

Step 5: If they match: Signature is [____________]
        If different: Document was [____________] or wrong key
```

**What each step proves:**

| Verification | What It Proves | How |
|--------------|----------------|-----|
| Signature decrypts with sender's public key | | |
| Hashes match | | |
| Combined | | |

**The three guarantees of digital signatures:**

| Guarantee | How Signature Provides It |
|-----------|--------------------------|
| Integrity | |
| Authentication | |
| Non-repudiation | |

---

### Activity F: Digital Signatures in Windows

**Goal:** Examine digital signatures on real files.

**Check signature on Windows system files:**

1. Navigate to `C:\Windows\System32`
2. Right-click on `notepad.exe` → Properties → Digital Signatures tab

| Detail | Value |
|--------|-------|
| Signer name | |
| Digest algorithm | |
| Timestamp | |
| Counter-signature (if present) | |

3. Click "Details" then "View Certificate"

| Certificate Detail | Value |
|-------------------|-------|
| Issued to | |
| Issued by | |
| Valid from - to | |
| Signature algorithm | |

**Check signature on third-party software:**

Find an installed program (check Program Files) and examine its signature:

| Software | Signer | Valid? | Algorithm |
|----------|--------|--------|-----------|
| | | | |

**What happens with unsigned software?**

Look for an unsigned .exe (perhaps an older utility or self-compiled program):

| Observation | Finding |
|-------------|---------|
| Digital Signatures tab present? | |
| What warning might Windows show? | |

**Why do software vendors sign their code?**

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

---

### Activity G: Email Signatures (S/MIME Concepts)

**Goal:** Understand how email digital signatures work.

**S/MIME (Secure/Multipurpose Internet Mail Extensions):**

| Feature | Signing | Encrypting |
|---------|---------|------------|
| Purpose | | |
| Uses which key? | | |
| Recipient needs your... | | |
| You need recipient's... | | |
| Provides confidentiality? | | |
| Provides integrity? | | |
| Provides non-repudiation? | | |

**Check if your email client supports S/MIME:**

| Email Client | S/MIME Support | Where to Find Settings |
|--------------|----------------|----------------------|
| Outlook (desktop) | | |
| Gmail (web) | | |
| Apple Mail | | |
| Your email client: | | |

**Signed email workflow:**

When you receive a signed email, what can you verify?

| Verification | What It Means |
|--------------|---------------|
| Signature is valid | |
| Certificate is trusted | |
| Certificate matches sender | |
| Email wasn't modified | |

**Why isn't email signing more common?**

1. _________________________________________________________________

2. _________________________________________________________________

---

### Activity H: Hashing for Password Verification

**Goal:** Understand how hashing enables password systems.

**Password verification flow:**

**Account creation:**
```
User enters: [password123]
    ↓
System generates: [random salt]
    ↓
System calculates: hash([salt] + [password123])
    ↓
System stores: [salt] + [hash]
    ↓
System does NOT store: [____________]
```

**Login attempt:**
```
User enters: [password123]
    ↓
System retrieves: [stored salt] and [stored hash]
    ↓
System calculates: hash([stored salt] + [entered password])
    ↓
System compares: [calculated hash] vs [stored hash]
    ↓
If match: [____________]
If different: [____________]
```

**Why this is secure:**

| Threat | How Hashing Protects |
|--------|---------------------|
| Database breach | |
| Insider at company | |
| Password reuse detection | |
| Brute force (with key stretching) | |

**What if two users have the same password?**

With salt: _________________________________________________________________

Without salt: _________________________________________________________________

---

### Activity I: Hash Collision Awareness

**Goal:** Understand collision attacks and their implications.

**Collision vs Preimage:**

| Attack Type | Definition | Difficulty | Impact |
|-------------|------------|------------|--------|
| Collision | Find ANY two inputs with same hash | | |
| Preimage | Find input that produces specific hash | | |
| Second preimage | Find different input matching existing hash | | |

**Real-world collision attacks:**

| Algorithm | Attack | Year | Impact |
|-----------|--------|------|--------|
| MD5 | | 2004 | |
| SHA-1 | SHAttered | 2017 | |

**Research:** What was the SHAttered attack?

_________________________________________________________________

_________________________________________________________________

**Why collisions matter for signatures:**

If an attacker can create two documents with the same hash:

1. Get legitimate document signed (hash = X)
2. Substitute malicious document (also hash = X)
3. Signature still validates!

**Current recommendations:**

| Use Case | Minimum Algorithm |
|----------|-------------------|
| Digital signatures | |
| Code signing | |
| TLS certificates | |
| File integrity (security) | |
| File integrity (non-security) | |
| Password hashing | |

---

### Tier 2 Bonus: Hands-On with OpenSSL

> ⚠️ **Requires:** OpenSSL (Git Bash on Windows, native on Mac/Linux)

---

### Activity J: OpenSSL Hashing and HMAC

**Goal:** Practice hashing and HMAC creation.

**Create test file:**
```bash
echo -n "Message to be authenticated" > message.txt
```

**Hash with different algorithms:**
```bash
openssl dgst -md5 message.txt
openssl dgst -sha1 message.txt
openssl dgst -sha256 message.txt
openssl dgst -sha512 message.txt
```

| Algorithm | Hash Output |
|-----------|-------------|
| MD5 | |
| SHA-1 | |
| SHA-256 | |
| SHA-512 | |

**Create HMAC:**
```bash
openssl dgst -sha256 -hmac "MySecretKey" message.txt
```

HMAC-SHA256: _______________________

**Change the key:**
```bash
openssl dgst -sha256 -hmac "DifferentKey" message.txt
```

HMAC with different key: _______________________

**Do the HMACs match?** [ ] Yes [ ] No

**What does this prove?**

_________________________________________________________________

---

### Activity K: Creating and Verifying Digital Signatures

**Goal:** Sign and verify a file using RSA.

**Generate key pair (if not done in Lab 4):**
```bash
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem
```

**Create a document to sign:**
```bash
echo "I agree to pay $1000 on delivery." > contract.txt
```

**Sign the document:**
```bash
openssl dgst -sha256 -sign private.pem -out signature.bin contract.txt
```

**Verify the signature:**
```bash
openssl dgst -sha256 -verify public.pem -signature signature.bin contract.txt
```

Result: _______________________

**Tamper with the document:**
```bash
echo "I agree to pay $9000 on delivery." > contract.txt
```

**Verify again:**
```bash
openssl dgst -sha256 -verify public.pem -signature signature.bin contract.txt
```

Result: _______________________

**What happened and why?**

_________________________________________________________________

**Try to verify with wrong public key:**

Generate another key pair:
```bash
openssl genrsa -out private2.pem 2048
openssl rsa -in private2.pem -pubout -out public2.pem
```

Restore original contract and verify with wrong key:
```bash
echo "I agree to pay $1000 on delivery." > contract.txt
openssl dgst -sha256 -verify public2.pem -signature signature.bin contract.txt
```

Result: _______________________

**What does this prove about digital signatures?**

_________________________________________________________________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** A vendor sends you software and its MD5 hash. Your security team says not to rely on MD5. The vendor says "we've always used MD5 and never had a problem." How would you explain the risk?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your company's legal team wants proof that a contract was signed by a specific executive and hasn't been modified. What technology would you recommend and why?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** A developer proposes storing passwords as SHA-256 hashes. What's missing from this approach, and what would you recommend instead?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] List the key properties of hash functions (deterministic, one-way, fixed output, avalanche effect)
- [ ] Compare MD5, SHA-1, SHA-256, and SHA-512 (sizes and security status)
- [ ] Explain how hashing verifies file integrity
- [ ] Describe what HMAC adds to plain hashing
- [ ] Walk through the digital signature process (sign and verify)
- [ ] Explain how digital signatures provide non-repudiation
- [ ] Identify where code signing is used
- [ ] Understand collision attacks and their implications
- [ ] Know current recommendations for hash algorithm selection

---

## What You Learned Today

- ✅ Demonstrated hash properties hands-on
- ✅ Compared hash algorithms and their security status
- ✅ Verified file integrity using hashes
- ✅ Understood HMAC vs plain hashing
- ✅ Mapped the digital signature process
- ✅ Examined code signing in Windows
- ✅ Explored email signing concepts
- ✅ Understood password hashing workflows
- ✅ Learned about collision attacks
- ✅ (Tier 2) Created HMACs and digital signatures with OpenSSL

**Next Lab:** PKI and Certificates - certificate authorities, certificate types, and trust models.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 5: Hashing and Digital Signatures*