// Lesson 26: Digital Forensics
// Security+ (SY0-701) - Domain 4.0: Security Operations

export const lesson26Flashcards = [
  {
    id: 1,
    front: "What is Digital Forensics?",
    back: "Scientific process of collecting, analyzing, and preserving digital evidence. Must maintain integrity for legal proceedings. Follows strict procedures and chain of custody."
  },
  {
    id: 2,
    front: "What is the primary goal of digital forensics?",
    back: "Collect and preserve evidence that is admissible in court. Maintain integrity, document everything, follow proper procedures. Evidence must be authentic and unaltered."
  },
  {
    id: 3,
    front: "What is Legal Hold?",
    back: "Requirement to preserve all relevant data when litigation is anticipated. Suspends normal data destruction. Failure to comply can result in legal penalties."
  },
  {
    id: 4,
    front: "What is Chain of Custody?",
    back: "Documentation tracking evidence from collection to court. Records who handled evidence, when, and what was done. Unbroken chain proves evidence integrity."
  },
  {
    id: 5,
    front: "What must Chain of Custody document?",
    back: "Who collected evidence, when and where collected, who had access, what was done with it, how it was stored and protected. Every transfer documented."
  },
  {
    id: 6,
    front: "Why is Chain of Custody critical?",
    back: "Proves evidence wasn't tampered with. Required for court admissibility. Broken chain can make evidence inadmissible. Maintains evidence integrity."
  },
  {
    id: 7,
    front: "What are the types of evidence?",
    back: "Real evidence (physical items), Documentary evidence (documents, logs), Testimonial evidence (witness statements). Digital evidence can be any of these."
  },
  {
    id: 8,
    front: "What is Real Evidence?",
    back: "Physical, tangible items. Hard drives, computers, phones, USB drives. The actual objects involved in incident. Can be examined directly."
  },
  {
    id: 9,
    front: "What is Documentary Evidence?",
    back: "Written or recorded information. Log files, emails, contracts, policies. Must be authenticated as genuine. Digital documents are documentary evidence."
  },
  {
    id: 10,
    front: "What is Testimonial Evidence?",
    back: "Statements from witnesses. Expert testimony about technical findings. Must be from competent witness with relevant knowledge. Subject to cross-examination."
  },
  {
    id: 11,
    front: "What is Order of Volatility?",
    back: "Sequence for collecting evidence based on how quickly data disappears. Most volatile first. Ensures critical evidence captured before lost."
  },
  {
    id: 12,
    front: "What is the Order of Volatility sequence?",
    back: "1) CPU registers/cache, 2) RAM, 3) Swap/page files, 4) Hard drive, 5) Remote logging, 6) Physical configuration, 7) Archival media. Most to least volatile."
  },
  {
    id: 13,
    front: "Why collect RAM before hard drive?",
    back: "RAM is volatile - lost when power off. Contains running processes, encryption keys, malware in memory, network connections. Critical evidence that disappears."
  },
  {
    id: 14,
    front: "What is Forensic Acquisition?",
    back: "Process of creating exact copy of evidence. Bit-for-bit imaging. Must not alter original. Use write blockers. Verify with hash values."
  },
  {
    id: 15,
    front: "What is a Forensic Image?",
    back: "Bit-for-bit copy of storage media. Exact duplicate including deleted files, slack space. Created with forensic tools. Working copy for analysis."
  },
  {
    id: 16,
    front: "What is a Write Blocker?",
    back: "Hardware or software preventing writes to evidence drive. Ensures original not modified during imaging. Critical for maintaining integrity."
  },
  {
    id: 17,
    front: "Why hash evidence before and after acquisition?",
    back: "Proves evidence unchanged. Hash original, hash copy - must match. Documents integrity. Common: MD5 and SHA-256 together."
  },
  {
    id: 18,
    front: "What is Evidence Preservation?",
    back: "Protecting evidence from alteration or destruction. Secure storage, access controls, environmental protection. Maintain chain of custody throughout."
  },
  {
    id: 19,
    front: "How should digital evidence be stored?",
    back: "Secure location with limited access, evidence log, proper labeling, protection from environmental damage, tamper-evident packaging. Document all access."
  },
  {
    id: 20,
    front: "What data sources are useful in forensics?",
    back: "Memory dumps, disk images, network captures, log files, mobile devices, cloud data, email, browser history, registry. Depends on incident type."
  },
  {
    id: 21,
    front: "What can Memory Analysis reveal?",
    back: "Running processes, network connections, encryption keys, malware not on disk, user activity, passwords in memory. Critical for fileless malware."
  },
  {
    id: 22,
    front: "What can Disk Analysis reveal?",
    back: "Files (including deleted), file timestamps, user documents, installed programs, registry data, browser history, email. Persistent evidence."
  },
  {
    id: 23,
    front: "What can Network Forensics reveal?",
    back: "Communication patterns, data exfiltration, C2 traffic, malware downloads, attack timeline. Packet captures and flow data."
  },
  {
    id: 24,
    front: "What is Timeline Analysis?",
    back: "Reconstructing sequence of events using timestamps. File creation, modification, access times. Login times, log entries. Establishes what happened when."
  },
  {
    id: 25,
    front: "What is Anti-forensics?",
    back: "Techniques attackers use to hide evidence or hinder investigation. Data hiding, encryption, wiping, timestamp manipulation, log deletion."
  },
  {
    id: 26,
    front: "What are examples of Anti-forensics techniques?",
    back: "Data wiping/secure deletion, encryption, steganography (hiding data in images), timestamp modification, log tampering, using live CDs/USBs."
  },
  {
    id: 27,
    front: "What is Steganography?",
    back: "Hiding data within other files (images, audio, video). Data invisible to casual observation. Anti-forensics technique for covert communication or data hiding."
  },
  {
    id: 28,
    front: "What is Artifact Wiping?",
    back: "Securely deleting evidence. Overwriting files, clearing logs, wiping free space. Makes recovery difficult or impossible. Common anti-forensics technique."
  },
  {
    id: 29,
    front: "What forensic tools should investigators be familiar with?",
    back: "Disk imaging (FTK Imager, dd), memory analysis (Volatility), network analysis (Wireshark), file analysis (Autopsy, EnCase). Tool selection depends on evidence type."
  },
  {
    id: 30,
    front: "When should law enforcement be involved?",
    back: "Criminal activity suspected, legal requirements mandate it, organization wants prosecution, large-scale attacks, critical infrastructure. Consult legal counsel first."
  }
];