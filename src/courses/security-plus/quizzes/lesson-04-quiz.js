export const lesson4Quiz = [
  {
    id: 1,
    question: "A company needs to encrypt large amounts of data quickly for backup storage. The same key will be used by authorized systems to encrypt and decrypt the data. Which type of encryption is BEST suited for this use case?",
    options: [
      "Asymmetric encryption - better for large data volumes",
      "Symmetric encryption - same key encrypts/decrypts, fast performance for large data",
      "Hashing - provides encryption with keys",
      "Encoding - secures data through transformation"
    ],
    correct: 1,
    explanation: "Symmetric encryption uses the SAME key for encryption and decryption, making it ideal for encrypting large data volumes. Advantages: (1) FAST - significantly faster than asymmetric (100-1000x), (2) Efficient for bulk data - suitable for file/disk encryption, database encryption, VPN traffic, (3) Lower computational overhead. The challenge: key distribution (how do you securely share the key?). Common symmetric algorithms: AES (current standard - 128, 192, 256-bit), 3DES (legacy), Blowfish, Twofish. For backups where the same systems encrypt and decrypt, symmetric is perfect - speed matters, and key distribution is manageable (same organization controls both ends). Asymmetric is too slow for bulk encryption but solves key distribution - often used together (asymmetric to exchange symmetric keys)."
  },
  {
    id: 2,
    question: "Two parties who have never communicated before need to establish a secure communication channel over the internet. They cannot safely exchange a shared secret in advance. Which encryption approach solves this problem?",
    options: [
      "Symmetric encryption only",
      "Asymmetric encryption - public/private key pairs enable secure communication without prior secret exchange",
      "Encoding the messages",
      "Using the same password"
    ],
    correct: 1,
    explanation: "Asymmetric (public key) encryption solves the key distribution problem using mathematically linked key pairs. How it works: (1) Each party generates public/private key pair, (2) Public keys are shared openly (no secrecy needed), (3) Data encrypted with public key can ONLY be decrypted with corresponding private key, (4) Private keys never leave owner's control. Example: Alice encrypts message with Bob's public key → only Bob's private key can decrypt. Common algorithms: RSA, ECC (Elliptic Curve), Diffie-Hellman (key exchange). Asymmetric is slower than symmetric, so common pattern: use asymmetric to securely exchange symmetric key, then use symmetric for bulk data (hybrid encryption). TLS/HTTPS uses this exact approach - asymmetric handshake establishes symmetric session key."
  },
  {
    id: 3,
    question: "An organization is selecting an encryption algorithm and must choose between AES-128 and AES-256. What is the PRIMARY difference between these options?",
    options: [
      "AES-128 is asymmetric, AES-256 is symmetric",
      "Key length - AES-256 uses longer keys providing greater security but slightly more processing overhead",
      "AES-256 is faster than AES-128",
      "They use completely different algorithms"
    ],
    correct: 1,
    explanation: "AES-128 and AES-256 are the same algorithm (Advanced Encryption Standard) with DIFFERENT KEY LENGTHS. Key length comparison: (1) AES-128 - 128-bit key (2^128 possible keys) - very secure, faster, (2) AES-256 - 256-bit key (2^256 possible keys) - more secure, slightly slower. Both are considered secure for current threats. AES-256 provides protection against potential future quantum computing attacks. Trade-offs: longer keys = more security but more processing. AES-128: sufficient for most commercial use. AES-256: recommended for classified/highly sensitive data, future-proofing. Key length is ONE factor - algorithm, implementation, and key management matter too. Doubling key length more than doubles effective security (exponential, not linear). AES also supports 192-bit keys. All AES variants share the same block size (128 bits)."
  },
  {
    id: 4,
    question: "A web server administrator is configuring encryption and sees options for 3DES and AES. Security policy requires modern, secure encryption. Which should be selected and why?",
    options: [
      "3DES - it's newer and more secure",
      "AES - it's the current standard with better security and performance than 3DES",
      "Either one provides the same security",
      "Neither - both are deprecated"
    ],
    correct: 1,
    explanation: "AES (Advanced Encryption Standard) is the correct choice over 3DES. Comparison: 3DES (Triple DES): (1) Legacy algorithm from 1998, (2) Applies DES three times (168-bit effective key), (3) Slow performance, (4) Being phased out, deprecated by NIST. AES: (1) Current standard since 2001, (2) Designed for modern hardware (faster), (3) 128, 192, or 256-bit keys, (4) Widely supported and vetted, (5) Required by most compliance frameworks. Why 3DES is deprecated: slow performance, smaller block size (64-bit vs AES's 128-bit) creates vulnerabilities with large data volumes. Modern security: always choose AES over legacy algorithms. Most protocols have removed 3DES support (TLS 1.3 dropped it). When configuring systems, disable legacy ciphers and use only current standards."
  },
  {
    id: 5,
    question: "RSA-2048 and ECC-256 are being compared for a mobile application. Both provide similar security levels, but one requires significantly less processing power. Which algorithm is more efficient for mobile devices?",
    options: [
      "RSA-2048 is more efficient on mobile",
      "ECC-256 - Elliptic Curve Cryptography achieves equivalent security with smaller keys and less computation",
      "They have identical efficiency",
      "Neither is suitable for mobile"
    ],
    correct: 1,
    explanation: "ECC (Elliptic Curve Cryptography) provides equivalent security to RSA with much smaller keys and less computational overhead. Security equivalence: ECC-256 ≈ RSA-3072 in security strength. Advantages of ECC: (1) Smaller key sizes (256-bit vs 2048-bit), (2) Faster operations (less computation), (3) Less battery drain (critical for mobile), (4) Smaller certificates/signatures, (5) Lower bandwidth requirements. Use cases: mobile devices, IoT (limited resources), TLS certificates. RSA advantages: more widely supported (legacy systems), well-understood, easier to implement. Trend: industry moving toward ECC for new implementations. Modern TLS prefers ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) for key exchange. For resource-constrained environments, ECC is clearly superior."
  },
  {
    id: 6,
    question: "During a TLS handshake, a web browser and server use asymmetric encryption to establish communication, then switch to symmetric encryption for the actual data transfer. Why is this hybrid approach used?",
    options: [
      "Asymmetric encryption is more secure, so it should be used more",
      "Asymmetric solves key exchange; symmetric provides fast bulk encryption - combining their strengths",
      "Symmetric encryption doesn't work over networks",
      "It's required by law"
    ],
    correct: 1,
    explanation: "Hybrid encryption combines asymmetric and symmetric encryption to leverage each one's strengths. The process: (1) Asymmetric handshake - securely exchange symmetric session key (solves key distribution), (2) Symmetric encryption - fast encryption of actual data using exchanged key. Why hybrid: (1) Asymmetric is slow (100-1000x slower than symmetric), (2) Asymmetric solves the key exchange problem symmetric has, (3) Symmetric is fast for bulk data. TLS example: (1) Server sends certificate (contains public key), (2) Client generates session key, encrypts with server's public key, (3) Server decrypts with private key - now both have session key, (4) All subsequent traffic encrypted with fast symmetric encryption. This is the foundation of secure web browsing, VPNs, and most encrypted communications."
  },
  {
    id: 7,
    question: "A user sends encrypted data using the recipient's public key. Only the recipient can decrypt it. What property of asymmetric encryption enables this?",
    options: [
      "The keys are identical",
      "Data encrypted with a public key can only be decrypted with the corresponding private key",
      "Anyone with the public key can decrypt",
      "The data remains unencrypted"
    ],
    correct: 1,
    explanation: "Asymmetric encryption's fundamental property: mathematically linked key pairs where one key encrypts and only the OTHER key can decrypt. Public key encryption for CONFIDENTIALITY: (1) Encrypt with recipient's PUBLIC key, (2) Only recipient's PRIVATE key can decrypt, (3) Public key can be freely shared (it's public!), (4) Private key must remain secret. The math: factoring large primes (RSA) or elliptic curve discrete logarithm (ECC) - easy one direction, computationally infeasible to reverse. This enables secure communication without prior shared secrets. Note: you can also encrypt with PRIVATE key (for digital signatures) - then PUBLIC key verifies/decrypts. Key point: the two keys are mathematically related but you cannot derive one from the other."
  },
  {
    id: 8,
    question: "A password management system stores user passwords using a key derivation function that is intentionally slow to compute. What is the purpose of this deliberately slow processing?",
    options: [
      "To frustrate users",
      "Key stretching - makes brute force attacks computationally expensive and time-consuming",
      "To reduce server load",
      "Slow algorithms are more secure by default"
    ],
    correct: 1,
    explanation: "Key stretching deliberately increases computation time for deriving keys from passwords, making brute force attacks impractical. How it works: (1) Normal hash: microseconds to compute, (2) Key stretching: hundreds of milliseconds (thousands of iterations). Impact on attackers: if checking one password takes 0.5 seconds, trying 10 billion passwords takes ~158 years instead of minutes. Key stretching functions: PBKDF2 (Password-Based Key Derivation Function 2), bcrypt (designed for passwords), scrypt (memory-hard, resists GPU attacks), Argon2 (modern, won Password Hashing Competition). Parameters can be adjusted as hardware improves - increase iterations to maintain security. Critical for password storage: passwords are low-entropy (guessable), so time-based defense is essential. Single legitimate login: 0.5 seconds is imperceptible. Attacker trying billions: 0.5 seconds each is devastating."
  },
  {
    id: 9,
    question: "An attacker obtains a database of hashed passwords. Two users who chose the same password have different hash values stored. What technique prevented identical hashes for identical passwords?",
    options: [
      "Encryption",
      "Salting - adding random unique data to each password before hashing",
      "Key stretching",
      "Encoding"
    ],
    correct: 1,
    explanation: "Salting adds random, unique data to each password BEFORE hashing, ensuring identical passwords produce different hashes. How it works: (1) Generate random salt for each user, (2) Combine: password + salt, (3) Hash the combination, (4) Store both salt and hash (salt isn't secret). Why salting matters: (1) Defeats rainbow tables - precomputed hash tables become useless (would need separate table for each salt), (2) Prevents identifying users with same password - hashes are different, (3) Each password must be cracked individually. Without salt: hash('password123') is always the same - one rainbow table cracks all instances. With unique salts: same password produces different hashes for each user. Salt is stored alongside hash (not secret), but forces attackers to compute hashes individually. Best practice: unique salt per password, stored with hash, combined with key stretching (bcrypt, Argon2 include salting)."
  },
  {
    id: 10,
    question: "A company is evaluating encryption algorithms and notices one option uses 64-bit keys while another uses 256-bit keys. The security team insists on the 256-bit option. What is the security concern with shorter keys?",
    options: [
      "Shorter keys are harder to manage",
      "Shorter keys can be brute-forced faster - fewer possible combinations to try",
      "Key length doesn't affect security",
      "256-bit keys are always slower"
    ],
    correct: 1,
    explanation: "Key length directly determines brute force resistance. Math: (1) 64-bit key: 2^64 = ~18 quintillion combinations (modern hardware can crack), (2) 256-bit key: 2^256 = ~10^77 combinations (computationally infeasible to brute force). Each additional bit DOUBLES the keyspace. 64-bit has been cracked (DES broken, RC5-64 cracked). 128-bit is current minimum for symmetric encryption. 256-bit provides margin against future advances including quantum computing. Key length guidelines: (1) Symmetric: minimum 128-bit (AES-128), prefer 256-bit, (2) RSA: minimum 2048-bit, prefer 3072-4096, (3) ECC: minimum 256-bit. Longer keys = more computation, but security benefit outweighs performance cost for sensitive data. Never use algorithms with short keys (DES, RC4, export-grade ciphers) - they're cryptographically broken."
  },
  {
    id: 11,
    question: "A security architect must explain why the company shouldn't develop their own encryption algorithm and should instead use AES. What is the PRIMARY reason for using established algorithms?",
    options: [
      "Custom algorithms are always faster",
      "Established algorithms are publicly vetted by experts; custom algorithms may have unknown vulnerabilities",
      "Creating custom algorithms is illegal",
      "AES is the only algorithm that exists"
    ],
    correct: 1,
    explanation: "Security through obscurity is dangerous - custom/secret algorithms haven't been tested by the security community. Why use established algorithms: (1) PUBLIC SCRUTINY - thousands of experts have tried to break AES for 20+ years, (2) Mathematical proof of security properties, (3) Known strengths and limitations, (4) Proper implementation guidance available. Cryptography is HARD: (1) Subtle flaws can completely break security, (2) Even experts make implementation mistakes, (3) Side-channel attacks exploit implementation, not algorithm. Custom algorithm risks: unknown vulnerabilities, implementation errors, false confidence. Kerckhoffs's principle: system security should depend on key secrecy, not algorithm secrecy. AES is: NIST standard, globally vetted, hardware-accelerated, well-understood, free to use. Invest effort in proper implementation and key management, not custom algorithms."
  },
  {
    id: 12,
    question: "An organization encrypts all backup tapes before sending them to off-site storage. The encryption keys are stored on a key management server. If that server fails, what critical problem occurs?",
    options: [
      "The backups become larger",
      "Data cannot be decrypted - losing encryption keys means permanent data loss",
      "The backups encrypt themselves again",
      "Nothing, keys aren't needed for decryption"
    ],
    correct: 1,
    explanation: "Encryption key management is critical - losing keys means PERMANENT data loss. Key management challenges: (1) Key storage - must be secure AND available, (2) Key backup - keys need their own backup strategy, (3) Key recovery - process for retrieving keys when needed, (4) Key rotation - periodic key changes, (5) Key escrow - secure third-party key storage. If keys are lost: encrypted data becomes unrecoverable random data. Best practices: (1) Multiple key backup locations, (2) Hardware Security Modules (HSMs) for key protection, (3) Key escrow for disaster recovery, (4) Document key management procedures, (5) Regular testing of key recovery. Enterprise key management: centralized key management systems, separation of duties (no single person has all keys), audit logging. The encryption is only as good as the key management - perfectly encrypted data is worthless without the key."
  },
  {
    id: 13,
    question: "A developer needs to encrypt sensitive configuration data. They're considering using DES because they found sample code online. What should the security team advise?",
    options: [
      "DES is fine for all purposes",
      "Do NOT use DES - it's deprecated with 56-bit keys that can be cracked quickly; use AES instead",
      "DES is the newest algorithm",
      "DES and AES are identical"
    ],
    correct: 1,
    explanation: "DES (Data Encryption Standard) is DEPRECATED and INSECURE. DES weaknesses: (1) 56-bit key - can be brute-forced in hours on modern hardware, (2) Created in 1977 - designed for 1970s computing, (3) DES Cracker (1998) broke DES in 56 hours, (4) Modern GPUs crack it in minutes. Historical context: DES was the standard for decades, but computing power grew exponentially. 3DES extended life by applying DES three times, but it's also now deprecated. Current standard: AES (Advanced Encryption Standard) - minimum 128-bit keys, designed for modern computing, hardware-accelerated. Security team guidance: (1) Never use DES or 3DES for new development, (2) Replace legacy DES implementations, (3) Use AES-256 for sensitive data, (4) Keep up with algorithm deprecations. Code samples online may be outdated - always verify cryptographic recommendations against current standards."
  },
  {
    id: 14,
    question: "Diffie-Hellman is being used in a VPN configuration. What is the PRIMARY purpose of Diffie-Hellman in this context?",
    options: [
      "Encrypting the VPN traffic directly",
      "Key exchange - securely establishing a shared secret over an untrusted network",
      "Authenticating users",
      "Hashing passwords"
    ],
    correct: 1,
    explanation: "Diffie-Hellman (DH) is a KEY EXCHANGE protocol that allows two parties to establish a shared secret over an insecure channel. How it works (simplified): (1) Both parties agree on public parameters, (2) Each generates private value, computes public value, (3) Exchange public values, (4) Each computes shared secret using own private + other's public, (5) Both arrive at same shared secret (math magic!). Key point: the shared secret is never transmitted - both parties calculate it. VPN use: establish symmetric encryption key for tunnel. Diffie-Hellman doesn't: (1) Encrypt data (it establishes key for other algorithms), (2) Authenticate parties (vulnerable to man-in-the-middle without authentication), (3) Provide message integrity. Modern variation: ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) - uses ECC for smaller keys, 'Ephemeral' means new keys per session (forward secrecy). DH is foundational to secure communications but must be combined with authentication."
  },
  {
    id: 15,
    question: "A mobile app developer chooses to use Blowfish encryption because it was designed to be a replacement for DES. The security reviewer recommends AES instead. Which statement BEST explains the recommendation?",
    options: [
      "Blowfish is more secure than AES",
      "AES is the industry standard with better hardware support and wider analysis; Blowfish, while not broken, is older and less common",
      "Blowfish is illegal to use",
      "They provide identical security"
    ],
    correct: 1,
    explanation: "While Blowfish isn't broken, AES is preferred for modern applications. Comparison: Blowfish: (1) Created 1993, public domain, (2) Variable key length (32-448 bits), (3) 64-bit block size (smaller than AES), (4) Good algorithm, but older. AES: (1) NIST standard since 2001, (2) 128-bit block size (larger, more secure), (3) Hardware acceleration (AES-NI) in modern processors, (4) More extensively analyzed, (5) Industry standard - required by compliance frameworks. Why AES over Blowfish: (1) Hardware acceleration makes AES faster on modern systems, (2) Larger block size prevents certain attacks on large data, (3) Global standard with wider library support, (4) Continuous security analysis. Bruce Schneier (Blowfish's creator) recommends using Twofish or AES for new designs. When in doubt: use the standard (AES). It's not about Blowfish being bad - it's about AES being the vetted, optimized, supported standard."
  }
];