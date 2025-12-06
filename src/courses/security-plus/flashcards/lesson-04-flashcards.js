// Lesson 4: Cryptography Fundamentals
// Security+ (SY0-701) - Domain 1.0: General Security Concepts

export const lesson4Flashcards = [
  {
    id: 1,
    front: "What is Encryption?",
    back: "Transforming readable data (plaintext) into unreadable data (ciphertext) using an algorithm and key. Reversible with the correct key."
  },
  {
    id: 2,
    front: "What is the difference between Encryption, Encoding, and Hashing?",
    back: "Encryption: reversible with key, provides confidentiality. Encoding: reversible without key (Base64), no security. Hashing: one-way, not reversible, provides integrity."
  },
  {
    id: 3,
    front: "What is Plaintext?",
    back: "The original, readable data before encryption. Also called cleartext. What you're trying to protect."
  },
  {
    id: 4,
    front: "What is Ciphertext?",
    back: "The encrypted, unreadable output after encryption. Appears as random data and requires the key to decrypt back to plaintext."
  },
  {
    id: 5,
    front: "What is a Cryptographic Key?",
    back: "A piece of data used with an algorithm to encrypt or decrypt information. Key secrecy and length determine encryption strength."
  },
  {
    id: 6,
    front: "What is Symmetric Encryption?",
    back: "Encryption where the same key encrypts and decrypts data. Fast and efficient for large data, but key distribution is a challenge."
  },
  {
    id: 7,
    front: "What is the main advantage of Symmetric Encryption?",
    back: "Speed. Symmetric algorithms are much faster than asymmetric, making them ideal for encrypting large amounts of data."
  },
  {
    id: 8,
    front: "What is the Key Distribution Problem?",
    back: "The challenge of securely sharing symmetric keys. If the key is intercepted during transmission, the encryption is compromised."
  },
  {
    id: 9,
    front: "What is AES (Advanced Encryption Standard)?",
    back: "The current standard symmetric encryption algorithm. Supports 128, 192, and 256-bit keys. Replaced DES/3DES as the standard."
  },
  {
    id: 10,
    front: "What are the key sizes for AES?",
    back: "128-bit, 192-bit, and 256-bit. Longer keys = stronger encryption but slightly slower performance. AES-256 is most secure."
  },
  {
    id: 11,
    front: "What is 3DES (Triple DES)?",
    back: "Legacy symmetric algorithm that applies DES three times. 168-bit effective key length. Being phased out in favor of AES."
  },
  {
    id: 12,
    front: "What are Blowfish and Twofish?",
    back: "Symmetric encryption algorithms. Blowfish uses 32-448 bit keys. Twofish was a finalist for AES selection. Both are alternatives to AES."
  },
  {
    id: 13,
    front: "What is Asymmetric Encryption?",
    back: "Encryption using a key pair: public key (shared) and private key (secret). What one key encrypts, only the other can decrypt."
  },
  {
    id: 14,
    front: "How do Public and Private keys work together?",
    back: "Encrypt with public key → only private key can decrypt (confidentiality). Encrypt with private key → public key decrypts (digital signatures)."
  },
  {
    id: 15,
    front: "What is the main advantage of Asymmetric Encryption?",
    back: "Solves the key distribution problem. Public keys can be freely shared; only the private key must be kept secret."
  },
  {
    id: 16,
    front: "What is the main disadvantage of Asymmetric Encryption?",
    back: "Speed. Asymmetric encryption is much slower than symmetric, making it impractical for large data volumes."
  },
  {
    id: 17,
    front: "What is RSA?",
    back: "The most common asymmetric algorithm. Based on factoring large prime numbers. Typical key sizes: 2048 or 4096 bits."
  },
  {
    id: 18,
    front: "What is ECC (Elliptic Curve Cryptography)?",
    back: "Asymmetric encryption using elliptic curves. Smaller keys provide equivalent security to larger RSA keys. More efficient for mobile devices."
  },
  {
    id: 19,
    front: "How does ECC compare to RSA in key size?",
    back: "ECC 256-bit ≈ RSA 3072-bit security. Smaller keys mean less processing power and bandwidth, ideal for constrained devices."
  },
  {
    id: 20,
    front: "What is Diffie-Hellman?",
    back: "An asymmetric algorithm for secure key exchange. Allows two parties to establish a shared secret over an insecure channel. Used to exchange symmetric keys."
  },
  {
    id: 21,
    front: "How does Asymmetric encryption solve the Key Distribution Problem?",
    back: "Use asymmetric encryption to securely exchange a symmetric key, then use the faster symmetric key for bulk data encryption. Best of both worlds."
  },
  {
    id: 22,
    front: "What is Hybrid Encryption?",
    back: "Combining asymmetric and symmetric encryption. Asymmetric encrypts the symmetric key; symmetric encrypts the data. Used in TLS/SSL."
  },
  {
    id: 23,
    front: "How does key length affect encryption strength?",
    back: "Longer keys = more possible combinations = harder to brute force. But longer keys also mean slower encryption/decryption."
  },
  {
    id: 24,
    front: "What is Key Stretching?",
    back: "Making weak keys stronger by running them through algorithms multiple times. Slows down brute-force attacks on passwords."
  },
  {
    id: 25,
    front: "What are PBKDF2, bcrypt, and scrypt?",
    back: "Key stretching algorithms for password storage. They intentionally slow down hashing to make brute-force attacks impractical."
  },
  {
    id: 26,
    front: "What is a Salt in cryptography?",
    back: "Random data added to a password before hashing. Ensures identical passwords produce different hashes. Defeats rainbow table attacks."
  },
  {
    id: 27,
    front: "What is a Rainbow Table attack?",
    back: "Using precomputed hash tables to crack passwords. Attacker looks up hash to find original password. Salting defeats this attack."
  },
  {
    id: 28,
    front: "Why does Salting defeat Rainbow Tables?",
    back: "Each password has a unique salt, producing unique hashes. Attackers would need separate rainbow tables for every possible salt - computationally infeasible."
  },
  {
    id: 29,
    front: "Which encryption type would you use for encrypting a large database?",
    back: "Symmetric (AES). Its speed makes it practical for large data volumes. The symmetric key itself could be protected with asymmetric encryption."
  },
  {
    id: 30,
    front: "Which encryption type would you use for secure email to someone you've never met?",
    back: "Asymmetric. You can encrypt with their public key (freely available) without needing to securely exchange a shared secret first."
  }
];