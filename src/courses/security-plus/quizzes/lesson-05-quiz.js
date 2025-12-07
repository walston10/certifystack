export const lesson5Quiz = [
  {
    id: 1,
    question: "A security analyst downloads a software package and compares its SHA-256 hash to the hash published on the vendor's website. They match. What security property has been verified?",
    options: [
      "Confidentiality - the file contents are private",
      "Integrity - the file has not been modified or corrupted since the vendor created it",
      "Availability - the file is accessible",
      "Authentication - the vendor's identity is verified"
    ],
    correct: 1,
    explanation: "Hash comparison verifies INTEGRITY - ensuring data hasn't been modified. How it works: (1) Vendor publishes hash of original file, (2) You download file and compute its hash, (3) If hashes match: file is identical to original (unchanged), (4) If hashes differ: file was modified (corruption or tampering). Hash properties enabling this: (1) Deterministic - same input always produces same hash, (2) Collision-resistant - virtually impossible to create different file with same hash, (3) Avalanche effect - tiny change completely changes hash. Limitations: hash comparison only verifies integrity, NOT authenticity. If attacker compromises website and changes both file AND published hash, you'd verify the malicious file. For authenticity: need digital signature or secure hash distribution channel."
  },
  {
    id: 2,
    question: "A company wants to store user passwords securely. They need a method where even database administrators cannot reverse the stored values to obtain original passwords. What cryptographic function should be used?",
    options: [
      "Symmetric encryption - reversible with key",
      "Asymmetric encryption - reversible with private key",
      "Hashing - one-way function that cannot be reversed",
      "Encoding - easily decoded"
    ],
    correct: 2,
    explanation: "Hashing is a ONE-WAY function - you cannot reverse a hash to get the original input. Password storage flow: (1) User creates password, (2) System hashes password (with salt), (3) Store hash (not password), (4) Login: hash submitted password, compare to stored hash. Why hashing for passwords: (1) Irreversible - admins/attackers can't read passwords, (2) Verification possible - can check if password matches without knowing it, (3) Breach impact limited - attackers get hashes, not passwords. Encryption is reversible with the key - inappropriate for password storage because someone could decrypt. Best practices: (1) Use password-specific algorithms (bcrypt, Argon2), (2) Add unique salt per user, (3) Use key stretching. NEVER store plaintext passwords. NEVER use fast hashes (MD5, SHA) alone for passwords - use purpose-built password hashing functions."
  },
  {
    id: 3,
    question: "Two different files produce the same MD5 hash value. What is this situation called, and why is it a security concern?",
    options: [
      "Normal operation - hashes should be the same for different files",
      "Hash collision - two inputs producing identical output undermines integrity verification",
      "Key exchange - hashes are sharing keys",
      "Encoding error - the files are corrupted"
    ],
    correct: 1,
    explanation: "A COLLISION occurs when two different inputs produce the same hash output. Security implications: (1) Attackers could create malicious file with same hash as legitimate file, (2) Integrity verification becomes unreliable, (3) Digital signatures could be fooled. MD5 collision status: (1) Theoretical collisions demonstrated in 2004, (2) Practical collision attacks now possible (minutes on laptop), (3) MD5 is BROKEN for security purposes, (4) Still seen in legacy systems (should be replaced). Why collisions are mathematically inevitable: infinite possible inputs, finite hash outputs. Good hash algorithms make collisions computationally infeasible to find. Current recommendations: (1) SHA-256 or SHA-3 for integrity, (2) bcrypt/Argon2 for passwords, (3) Never use MD5 for security (acceptable only for non-security checksums). Algorithm strength: how hard is it to FIND a collision, not whether collisions exist."
  },
  {
    id: 4,
    question: "A software vendor signs their application updates with a digital signature. When a customer's system verifies the signature, what THREE security properties are validated?",
    options: [
      "Confidentiality, availability, and encryption",
      "Integrity, authentication, and non-repudiation",
      "Compression, encoding, and speed",
      "Confidentiality, integrity, and availability"
    ],
    correct: 1,
    explanation: "Digital signatures provide three security properties: (1) INTEGRITY - hash ensures content hasn't been modified (any change breaks signature), (2) AUTHENTICATION - signature created with signer's private key proves origin (only vendor has that key), (3) NON-REPUDIATION - vendor cannot deny signing (private key proof). How digital signatures work: (1) Sender hashes document, (2) Encrypts hash with private key (this is the signature), (3) Recipient decrypts signature with sender's public key, (4) Recipient hashes document independently, (5) Compare hashes - match confirms all three properties. Code signing example: Microsoft signs Windows updates. Your system: verifies Microsoft's signature → confirms update is genuinely from Microsoft (authentication), unchanged (integrity), and Microsoft can't deny releasing it (non-repudiation). Digital signatures are the foundation of PKI, code signing, secure email, and document signing."
  },
  {
    id: 5,
    question: "A security auditor notices the organization is using SHA-1 for digital signatures on new documents. What should the auditor recommend?",
    options: [
      "Continue using SHA-1 - it's the most secure option",
      "Upgrade to SHA-256 or SHA-3 - SHA-1 is deprecated with known collision vulnerabilities",
      "Switch to MD5 for better performance",
      "Hashing isn't needed for digital signatures"
    ],
    correct: 1,
    explanation: "SHA-1 is DEPRECATED and should not be used for security purposes. SHA-1 status: (1) 160-bit output, (2) First collision demonstrated in 2017 (SHAttered attack), (3) Deprecated by NIST, browsers, CAs, (4) Still used in legacy systems (git, some checksums) but being phased out. Recommendations: (1) SHA-256 (SHA-2 family) - current standard, 256-bit output, (2) SHA-512 - 512-bit output, same family, (3) SHA-3 - newest standard, different algorithm design, backup to SHA-2. Migration priority: digital signatures (highest risk), certificate generation, integrity verification. SHA-1 collision impact on signatures: attacker could create two documents with same hash, get one signed, apply signature to other. For audit findings: recommend timeline to migrate away from SHA-1, prioritize based on risk."
  },
  {
    id: 6,
    question: "An application uses HMAC-SHA256 to verify messages between two servers. What does HMAC provide that a plain SHA-256 hash does not?",
    options: [
      "Faster computation",
      "Authentication - HMAC incorporates a secret key, verifying the message came from someone who knows the key",
      "Larger output size",
      "Better compression"
    ],
    correct: 1,
    explanation: "HMAC (Hash-based Message Authentication Code) combines hashing with a secret key to provide BOTH integrity AND authentication. Plain hash vs HMAC: (1) Plain hash - anyone can compute, only verifies integrity, (2) HMAC - requires secret key, verifies integrity AND that sender knows the key (authentication). HMAC construction: HMAC(key, message) = Hash((key XOR opad) || Hash((key XOR ipad) || message)). Use cases: (1) API authentication - servers share secret key, include HMAC with requests, (2) Message verification - ensure message wasn't modified AND came from trusted party, (3) Session token integrity - verify tokens weren't tampered with. HMAC benefits: (1) More secure than hash(key + message), (2) Resistant to length extension attacks, (3) Provides authentication without encryption. Common: HMAC-SHA256, HMAC-SHA512. HMAC is NOT encryption - message is still readable, but modification or forgery is detectable."
  },
  {
    id: 7,
    question: "A hash function always produces a 256-bit output regardless of whether the input is 1 byte or 1 gigabyte. What is this property called?",
    options: [
      "Variable-length output",
      "Fixed-length output - hashes produce consistent output size regardless of input size",
      "Compression ratio",
      "Encryption strength"
    ],
    correct: 1,
    explanation: "Hashes produce FIXED-LENGTH output regardless of input size. SHA-256 examples: (1) Hash of 'A' = 256 bits, (2) Hash of entire Wikipedia = 256 bits, (3) Hash of empty string = 256 bits. Common hash output sizes: (1) MD5 - 128 bits (32 hex characters), (2) SHA-1 - 160 bits (40 hex characters), (3) SHA-256 - 256 bits (64 hex characters), (4) SHA-512 - 512 bits (128 hex characters). Why this matters: (1) Predictable storage requirements, (2) Efficient comparisons, (3) Database design (known column width). This property also means: infinite possible inputs map to finite outputs (collisions theoretically possible but computationally hard to find). Fixed output enables: digital signatures on large documents, password verification, file integrity checks, data structures (hash tables). The hash is a 'fingerprint' - a fixed-size representation of variable-size data."
  },
  {
    id: 8,
    question: "An employee receives an email claiming to be from the CEO requesting an urgent wire transfer. The email lacks a digital signature. What security concern does this raise?",
    options: [
      "The email might be encrypted",
      "No authentication or non-repudiation - cannot verify the sender is actually the CEO",
      "The email will be too large",
      "No concerns - email is inherently secure"
    ],
    correct: 1,
    explanation: "Without digital signatures, email provides NO authentication or non-repudiation. Standard email vulnerabilities: (1) Sender address easily spoofed, (2) No proof of origin, (3) Content can be modified in transit, (4) CEO impersonation (BEC - Business Email Compromise) is common attack. Digital signatures would provide: (1) Authentication - cryptographic proof email is from CEO's private key, (2) Integrity - any modification breaks signature, (3) Non-repudiation - CEO cannot deny sending. Email security solutions: S/MIME (certificates for signing/encrypting), PGP/GPG (web of trust model). Even without user-level signatures, organizations should implement: SPF, DKIM, DMARC (domain-level email authentication). This scenario describes classic BEC attack - always verify unusual requests through separate channel (phone call) regardless of apparent sender."
  },
  {
    id: 9,
    question: "A developer creates a digital signature by encrypting a document's hash with their private key. A colleague verifies the signature using the developer's public key. What happens if the document was modified after signing?",
    options: [
      "The signature still verifies",
      "Verification fails - the hash of modified document won't match the decrypted signature hash",
      "A new signature is automatically created",
      "The public key changes"
    ],
    correct: 1,
    explanation: "Any modification to a signed document causes verification to FAIL. Verification process: (1) Recipient hashes the received document (Hash A), (2) Recipient decrypts signature with sender's public key (Hash B - original hash), (3) Compare Hash A and Hash B. If document modified: Hash A (new hash) ≠ Hash B (original hash) → verification FAILS. This is the INTEGRITY property of digital signatures. Even tiny changes (one character, one bit) completely change the hash (avalanche effect). This ensures: (1) Document is exactly as sender signed it, (2) No tampering occurred in transit, (3) No accidental corruption. Combined with authentication (private key proves identity) and non-repudiation (sender can't deny signing), digital signatures provide comprehensive document assurance. This is why signed legal documents, code, and certificates are trustworthy."
  },
  {
    id: 10,
    question: "A forensic analyst needs to prove that digital evidence has not been altered since collection. They compute and document SHA-256 hashes at time of collection. What process is this?",
    options: [
      "Encryption",
      "Creating a hash chain of custody - documenting hashes proves evidence integrity",
      "Deleting evidence",
      "Compressing files"
    ],
    correct: 1,
    explanation: "Hashing is fundamental to DIGITAL FORENSICS for maintaining evidence integrity. Forensic hash use: (1) Calculate hash immediately upon evidence collection, (2) Document hash in chain of custody, (3) Recalculate hash when evidence is accessed, (4) Match confirms evidence is unchanged. Legal importance: (1) Proves evidence wasn't modified after collection, (2) Demonstrates proper handling, (3) Can be independently verified by defense, court, experts. Forensic best practice: (1) Hash original evidence immediately, (2) Create forensic copy, (3) Hash the copy, (4) Work only with copy (preserve original), (5) Document all hashes and timestamps. Multiple algorithms recommended: compute both SHA-256 AND SHA-1 (defense against algorithm-specific attacks). Hash mismatch: evidence integrity compromised - may be inadmissible. This is why forensic tools (FTK, EnCase) automatically compute and verify hashes throughout investigation."
  },
  {
    id: 11,
    question: "A web application stores password hashes using SHA-256 without any additional measures. A security review finds this inadequate. What critical security measure is missing?",
    options: [
      "Encryption instead of hashing",
      "Salting - unique random data per password to prevent rainbow table attacks",
      "Using a faster hash algorithm",
      "Storing passwords in plaintext"
    ],
    correct: 1,
    explanation: "Plain SHA-256 for passwords is INSUFFICIENT - salting is essential. Why plain hashing fails: (1) Rainbow tables - precomputed hash lookups for common passwords, (2) Same password = same hash - attackers identify users with identical passwords, (3) Fast hash computation - GPU can try billions of hashes per second. Salting solves this: (1) Add unique random salt to each password before hashing, (2) Store salt alongside hash (salt isn't secret), (3) Same password with different salts = different hashes, (4) Rainbow tables become useless. Additional measures needed: (1) Key stretching - use bcrypt, scrypt, or Argon2 instead of plain SHA, (2) These algorithms include salting AND intentional slowness, (3) Configurable difficulty factor. Best practice: Use Argon2id (modern standard), bcrypt (widely supported), or PBKDF2. NEVER use plain fast hashes (MD5, SHA) for passwords - they're designed to be FAST, which helps attackers."
  },
  {
    id: 12,
    question: "Two security researchers claim they can create two different PDF documents that produce the same SHA-1 hash. If true, what attack have they demonstrated?",
    options: [
      "Brute force attack",
      "Collision attack - finding two inputs that hash to the same output",
      "Replay attack",
      "Man-in-the-middle attack"
    ],
    correct: 1,
    explanation: "This describes a COLLISION ATTACK - finding two different inputs with identical hash outputs. This actually happened: Google's SHAttered attack (2017) created two different PDFs with identical SHA-1 hashes. Attack types on hash functions: (1) COLLISION ATTACK - find ANY two inputs with same hash (breaks signatures - attacker could substitute documents), (2) PREIMAGE ATTACK - given hash, find input that produces it (would crack password hashes), (3) SECOND PREIMAGE - given input, find different input with same hash. SHA-1 collision impact: (1) Attacker creates legitimate and malicious documents with same hash, (2) Gets legitimate one signed, (3) Swaps in malicious document, (4) Signature still verifies! This is why SHA-1 is deprecated for digital signatures and certificates. Collision attacks don't directly affect password hashing (different attack model), but demonstrate algorithm weakness. SHA-256 and SHA-3 remain collision-resistant with current computing power."
  },
  {
    id: 13,
    question: "A system administrator runs 'sha256sum' on a downloaded ISO file and compares the result to the publisher's website. The hashes match. What can the administrator conclude?",
    options: [
      "The file is from a trusted source",
      "The file matches what the publisher hashed - integrity verified, but NOT authentication of the publisher",
      "The file is encrypted",
      "The file contains no malware"
    ],
    correct: 1,
    explanation: "Hash matching verifies INTEGRITY but NOT AUTHENTICATION. What's confirmed: file you downloaded is identical to file the publisher hashed (same bits, no corruption, no modification). What's NOT confirmed: (1) Publisher's identity isn't verified (website could be fake), (2) Publisher isn't malicious (malware could be in original), (3) Hash was published by legitimate publisher (compromised website could show attacker's hash). Better verification: (1) Digital signature (GPG signed hash file) - proves publisher identity, (2) HTTPS on download site - harder to tamper with published hash, (3) Multiple independent sources publishing same hash. This is why software projects often provide: file + hash + GPG signature. Verify signature to authenticate, then hash to verify file matches what was signed. Hash alone only catches accidental corruption or third-party modification, not sophisticated supply chain attacks."
  },
  {
    id: 14,
    question: "A cryptographic hash function must have what property to ensure that an attacker cannot reconstruct the original data from the hash output?",
    options: [
      "Reversibility",
      "Preimage resistance - computationally infeasible to find input that produces given hash",
      "Large file support",
      "Speed"
    ],
    correct: 1,
    explanation: "PREIMAGE RESISTANCE means given a hash output, it's computationally infeasible to find ANY input that produces that hash. Hash function security properties: (1) PREIMAGE RESISTANCE (first preimage) - can't reverse hash to find input, (2) SECOND PREIMAGE RESISTANCE - given input, can't find different input with same hash, (3) COLLISION RESISTANCE - can't find ANY two inputs with same hash. Why preimage resistance matters: (1) Password hashes - attackers have hash, need to find password, (2) Commitment schemes - reveal hash first, prove content later, (3) One-way function property. If preimage resistance fails: attacker with hash could find valid input. For passwords: would recover actual password (or equivalent). Brute force isn't breaking preimage resistance - it's trying all possible inputs. True preimage attack: mathematical shortcut to find input faster than brute force. Currently secure hashes (SHA-256, SHA-3) maintain preimage resistance - no shortcuts discovered."
  },
  {
    id: 15,
    question: "A legal document is digitally signed and timestamped by a trusted third party. Years later, the signer claims they never signed it. What concept allows proving they did sign it?",
    options: [
      "Encryption",
      "Non-repudiation - digital signatures provide undeniable proof of signing",
      "Compression",
      "Availability"
    ],
    correct: 1,
    explanation: "NON-REPUDIATION prevents someone from denying an action they performed. Digital signature provides non-repudiation because: (1) Private key is (should be) known only to owner, (2) Only private key can create that signature, (3) Mathematical proof ties signature to that specific key, (4) Timestamp proves WHEN it was signed. Evidence chain: (1) Document hash embedded in signature, (2) Signature created with signer's private key, (3) Timestamp from trusted authority (proves signature existed at that time), (4) Signer cannot claim someone else signed or signature was backdated. Requirements for non-repudiation: (1) Proper key management (signer must protect private key), (2) Trusted timestamp (prevents backdating claims), (3) Certificate validity at time of signing, (4) Audit trail. Legal applications: contracts, financial transactions, regulatory filings. Non-repudiation requires the signer properly secured their private key - if key was stolen, they can repudiate (but that's a different security failure)."
  }
];