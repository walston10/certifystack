// Lesson 5: Hashing and Digital Signatures
// Security+ (SY0-701) - Domain 1.0: General Security Concepts

export const lesson5Flashcards = [
  {
    id: 1,
    front: "What is Hashing?",
    back: "A one-way function that converts data of any size into a fixed-length output (hash/digest). Cannot be reversed to reveal original data."
  },
  {
    id: 2,
    front: "What are the key properties of a cryptographic hash?",
    back: "One-way (irreversible), fixed-length output, deterministic (same input = same hash), avalanche effect (small change = completely different hash)."
  },
  {
    id: 3,
    front: "What is the Avalanche Effect in hashing?",
    back: "Even a tiny change to input produces a completely different hash. Changing one character creates an entirely new hash value."
  },
  {
    id: 4,
    front: "What is a Hash Collision?",
    back: "When two different inputs produce the same hash output. Good algorithms make collisions extremely unlikely. MD5 and SHA-1 have known collision vulnerabilities."
  },
  {
    id: 5,
    front: "What is MD5?",
    back: "128-bit hash algorithm. Broken - collision vulnerabilities discovered. Never use for security purposes. Still seen for non-security checksums."
  },
  {
    id: 6,
    front: "What is SHA-1?",
    back: "160-bit hash algorithm. Deprecated due to collision vulnerabilities. Being phased out of security applications. Don't use for new implementations."
  },
  {
    id: 7,
    front: "What is SHA-2?",
    back: "Current standard hash family including SHA-256 and SHA-512. No known practical vulnerabilities. Use SHA-256 minimum for security applications."
  },
  {
    id: 8,
    front: "What's the difference between SHA-256 and SHA-512?",
    back: "SHA-256 produces 256-bit hash, SHA-512 produces 512-bit hash. Both are part of SHA-2 family. SHA-512 is more secure but larger output."
  },
  {
    id: 9,
    front: "What is SHA-3?",
    back: "Newest hash standard, designed as backup to SHA-2. Uses different internal structure (Keccak). Not a replacement - SHA-2 is still secure."
  },
  {
    id: 10,
    front: "Which hashing algorithms are considered secure today?",
    back: "SHA-2 (SHA-256, SHA-512) and SHA-3. MD5 and SHA-1 are broken and should not be used for security purposes."
  },
  {
    id: 11,
    front: "What does hashing provide in terms of CIA?",
    back: "Integrity. Hashing verifies data hasn't been modified. Compare hash before and after - if they match, data is unchanged."
  },
  {
    id: 12,
    front: "What is HMAC (Hash-based Message Authentication Code)?",
    back: "Hash combined with a secret key. Provides both integrity AND authentication. Verifies data wasn't modified and came from someone with the key."
  },
  {
    id: 13,
    front: "How does HMAC differ from a regular hash?",
    back: "Regular hash: anyone can compute, only proves integrity. HMAC: requires secret key, proves integrity AND authenticity (sender knew the key)."
  },
  {
    id: 14,
    front: "What is a Digital Signature?",
    back: "Hash encrypted with sender's private key. Provides integrity, authentication, and non-repudiation. Anyone can verify with sender's public key."
  },
  {
    id: 15,
    front: "How is a Digital Signature created?",
    back: "1) Hash the message. 2) Encrypt the hash with sender's private key. 3) Attach encrypted hash (signature) to message."
  },
  {
    id: 16,
    front: "How is a Digital Signature verified?",
    back: "1) Decrypt signature with sender's public key to get original hash. 2) Hash the received message. 3) Compare hashes - if they match, signature is valid."
  },
  {
    id: 17,
    front: "What three things does a Digital Signature provide?",
    back: "Integrity (data not modified), Authentication (confirms sender identity), Non-repudiation (sender cannot deny signing)."
  },
  {
    id: 18,
    front: "What is Non-repudiation?",
    back: "The inability to deny having performed an action. Digital signatures provide this - only the private key holder could have created the signature."
  },
  {
    id: 19,
    front: "Why can't the sender deny a digital signature?",
    back: "Only their private key could create a signature that verifies with their public key. If the signature verifies, they must have signed it."
  },
  {
    id: 20,
    front: "What is the primary use of hashing for passwords?",
    back: "Storing passwords securely. Store the hash, not the password. When user logs in, hash their input and compare to stored hash."
  },
  {
    id: 21,
    front: "Why should passwords be hashed, not encrypted?",
    back: "Encryption is reversible - if key is stolen, all passwords exposed. Hashing is one-way - even if hashes are stolen, passwords aren't directly revealed."
  },
  {
    id: 22,
    front: "What is File Integrity Checking?",
    back: "Using hashes to verify files haven't been modified. Compare current hash to known-good hash. Used for downloads, forensics, and change detection."
  },
  {
    id: 23,
    front: "What is Code Signing?",
    back: "Using digital signatures to verify software authenticity and integrity. Proves code came from the claimed developer and hasn't been tampered with."
  },
  {
    id: 24,
    front: "What is S/MIME?",
    back: "Secure/Multipurpose Internet Mail Extensions. Standard for email encryption and digital signatures. Provides confidentiality, integrity, and authentication for email."
  },
  {
    id: 25,
    front: "You download a file and the website shows 'SHA-256: abc123...' - what should you do?",
    back: "Hash the downloaded file with SHA-256 and compare to the published hash. If they match, the file wasn't corrupted or tampered with during download."
  },
  {
    id: 26,
    front: "A document is signed with a digital signature. What can you verify?",
    back: "The document hasn't been modified (integrity), it came from the claimed signer (authentication), and the signer cannot deny signing it (non-repudiation)."
  },
  {
    id: 27,
    front: "Why is MD5 still sometimes used despite being broken?",
    back: "For non-security purposes like quick checksums or deduplication where collision attacks aren't a threat. Never for passwords, signatures, or security verification."
  },
  {
    id: 28,
    front: "What happens if you hash 'Password123' vs 'Password124'?",
    back: "Completely different hashes due to avalanche effect. Even though only one character changed, the outputs will be entirely different."
  },
  {
    id: 29,
    front: "HMAC-SHA256 means what?",
    back: "HMAC using SHA-256 as the underlying hash algorithm. Combines the security of SHA-256 with a secret key for authentication."
  },
  {
    id: 30,
    front: "What's the difference between a hash and a digital signature?",
    back: "Hash: one-way function, proves integrity only, anyone can compute. Digital signature: hash encrypted with private key, proves integrity + authentication + non-repudiation."
  }
];