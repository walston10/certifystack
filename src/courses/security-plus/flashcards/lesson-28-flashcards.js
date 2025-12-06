// Lesson 28: Data Protection and Privacy
// Security+ (SY0-701) - Domain 4.0: Security Operations

export const lesson28Flashcards = [
  {
    id: 1,
    front: "What is Data Classification?",
    back: "Categorizing data by sensitivity level. Determines protection requirements. Common levels: Public, Internal, Confidential, Restricted. Foundation for data security."
  },
  {
    id: 2,
    front: "What is Public data classification?",
    back: "Information freely available to anyone. No harm if disclosed. Examples: marketing materials, press releases, public website content. Minimal protection needed."
  },
  {
    id: 3,
    front: "What is Internal/Private data classification?",
    back: "For internal use only, not public. Minor harm if disclosed. Examples: internal policies, org charts, non-sensitive emails. Basic protection required."
  },
  {
    id: 4,
    front: "What is Confidential data classification?",
    back: "Sensitive business information. Significant harm if disclosed. Examples: financial data, customer lists, business plans. Strong protection required. Need-to-know access."
  },
  {
    id: 5,
    front: "What is Restricted/Top Secret data classification?",
    back: "Most sensitive data. Severe harm if disclosed. Examples: trade secrets, PII, health records, classified government info. Maximum protection. Strictly controlled access."
  },
  {
    id: 6,
    front: "What are the three Data States?",
    back: "Data at Rest (stored), Data in Transit (moving over network), Data in Use (being processed). Each state requires different protection methods."
  },
  {
    id: 7,
    front: "What is Data at Rest?",
    back: "Data stored on media - hard drives, databases, backups, USB drives. Protected by encryption, access controls, physical security. Not actively moving."
  },
  {
    id: 8,
    front: "How do you protect Data at Rest?",
    back: "Full disk encryption (BitLocker, FileVault), database encryption, file-level encryption, access controls, physical security. Encrypt sensitive stored data."
  },
  {
    id: 9,
    front: "What is Data in Transit?",
    back: "Data moving across networks. Email, web traffic, file transfers, API calls. Vulnerable to interception. Protected by encryption protocols."
  },
  {
    id: 10,
    front: "How do you protect Data in Transit?",
    back: "TLS/HTTPS, VPNs, SSH, encrypted email (S/MIME), SFTP. Encrypt data moving across any network, especially untrusted networks."
  },
  {
    id: 11,
    front: "What is Data in Use?",
    back: "Data being actively processed in memory. Most challenging to protect. Visible in RAM, CPU cache. Emerging technologies: secure enclaves, homomorphic encryption."
  },
  {
    id: 12,
    front: "How do you protect Data in Use?",
    back: "Secure enclaves (Intel SGX), memory encryption, trusted execution environments. Emerging area. Limit who can access running systems."
  },
  {
    id: 13,
    front: "What is Encryption for data protection?",
    back: "Converting data to unreadable form without key. Protects confidentiality. Apply to all states - rest (disk encryption), transit (TLS), use (memory encryption)."
  },
  {
    id: 14,
    front: "What is Tokenization?",
    back: "Replacing sensitive data with non-sensitive placeholder (token). Token maps to real data in secure vault. Used for credit cards, SSNs. Data never exposed."
  },
  {
    id: 15,
    front: "What is Data Masking?",
    back: "Obscuring data while maintaining format. Shows partial data: XXX-XX-1234 for SSN. Used in testing, display. Original data not recoverable from mask."
  },
  {
    id: 16,
    front: "Tokenization vs Masking vs Encryption?",
    back: "Encryption: reversible with key. Tokenization: swaps for token, original in vault. Masking: irreversible obscuring. Choose based on whether original data needed."
  },
  {
    id: 17,
    front: "What is Hashing for data protection?",
    back: "One-way transformation for integrity verification. Cannot recover original. Used for passwords, file integrity. Not encryption - cannot decrypt."
  },
  {
    id: 18,
    front: "What is Anonymization?",
    back: "Removing all identifying information permanently. Cannot re-identify individuals. Used for research, analytics. Irreversible process."
  },
  {
    id: 19,
    front: "What is Pseudonymization?",
    back: "Replacing identifiers with artificial identifiers. Can be reversed with key/mapping. Less protection than anonymization but allows re-identification when needed."
  },
  {
    id: 20,
    front: "Anonymization vs Pseudonymization?",
    back: "Anonymization: irreversible, cannot re-identify. Pseudonymization: reversible with key, can re-identify. GDPR treats them differently."
  },
  {
    id: 21,
    front: "What is DLP (Data Loss Prevention)?",
    back: "Technology preventing unauthorized data transfers. Monitors and blocks sensitive data leaving organization. Inspects email, web, USB, cloud uploads."
  },
  {
    id: 22,
    front: "What are the types of DLP?",
    back: "Network DLP (monitors network traffic), Endpoint DLP (monitors endpoints), Cloud DLP (monitors cloud services). Deploy multiple for complete coverage."
  },
  {
    id: 23,
    front: "How does DLP identify sensitive data?",
    back: "Pattern matching (SSN, credit card formats), keywords, document fingerprinting, classification labels, machine learning. Multiple methods combined."
  },
  {
    id: 24,
    front: "What is Data Sovereignty?",
    back: "Data subject to laws of country where stored. Determines where data can reside. Affects cloud provider selection. GDPR, data localization laws."
  },
  {
    id: 25,
    front: "What is a Data Retention Policy?",
    back: "Rules for how long data kept before deletion. Based on legal requirements, business needs. Too long = increased risk. Too short = compliance issues."
  },
  {
    id: 26,
    front: "What is Data Disposal?",
    back: "Securely destroying data when no longer needed. Methods depend on media type. Must be irreversible for sensitive data. Document destruction."
  },
  {
    id: 27,
    front: "What is PII (Personally Identifiable Information)?",
    back: "Data that can identify individual. Name, SSN, address, email, phone, biometrics. Subject to privacy regulations. Requires strong protection."
  },
  {
    id: 28,
    front: "What is PHI (Protected Health Information)?",
    back: "Health information linked to individual. Medical records, diagnoses, treatments. Protected by HIPAA in US. Very sensitive - high protection required."
  },
  {
    id: 29,
    front: "What is a Privacy Impact Assessment (PIA)?",
    back: "Analysis of how project affects individual privacy. Identifies privacy risks, ensures compliance. Required before processing personal data in many regulations."
  },
  {
    id: 30,
    front: "What is the Data Owner's responsibility?",
    back: "Accountable for data classification, protection requirements, access decisions. Usually business unit leader. Sets policies for their data. Different from data custodian."
  }
];