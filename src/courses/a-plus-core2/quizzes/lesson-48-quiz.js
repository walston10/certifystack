export const lesson48Quiz = [
  {
    id: 1,
    question: "A company is disposing of old hard drives that contained customer financial records. Simply deleting files and formatting the drives is not sufficient. Which method provides the MOST secure data destruction for magnetic hard drives?",
    options: [
      "Empty the Recycle Bin thoroughly",
      "Degaussing followed by physical destruction (shredding or crushing)",
      "Quick format of the drive",
      "Rename all files before deleting"
    ],
    correct: 1,
    explanation: "Degaussing uses powerful magnetic fields to destroy data on magnetic media (HDDs), making recovery impossible. Following degaussing with physical destruction (shredding, crushing, drilling) provides defense-in-depth. Deleting files or formatting only removes pointers - data remains recoverable with forensic tools. Quick format is even less secure. Renaming files doesn't erase data. For highly sensitive data on HDDs, combine degaussing + physical destruction. Note: Degaussing doesn't work on SSDs - they require different methods."
  },
  {
    id: 2,
    question: "An organization needs to dispose of solid-state drives (SSDs) containing classified information. They attempt to use degaussing but discover it's ineffective. Why doesn't degaussing work on SSDs?",
    options: [
      "SSDs are too small for degaussing equipment",
      "SSDs use flash memory (not magnetic storage), so magnetic degaussing has no effect",
      "SSDs are already encrypted by default",
      "Degaussing only works on Tuesdays"
    ],
    correct: 1,
    explanation: "SSDs use NAND flash memory, not magnetic platters, so degaussing (which disrupts magnetic fields) is completely ineffective. SSD destruction requires: encryption before disposal (crypto-erase), specialized SSD sanitization tools (ATA Secure Erase), or physical destruction (shredding into small pieces). HDDs use magnetic storage (degaussing works). SSDs require different approaches. Never assume HDD destruction methods work on SSDs. Physical shredding/pulverizing is the most reliable SSD destruction method for classified data."
  },
  {
    id: 3,
    question: "A medical office is disposing of paper records containing patient information (HIPAA-protected data). What is the minimum acceptable destruction method?",
    options: [
      "Tear papers in half and throw in regular trash",
      "Cross-cut shredding or pulverization to make reconstruction impossible",
      "Burn documents in the parking lot",
      "Donate to recycling center intact"
    ],
    correct: 1,
    explanation: "HIPAA and other privacy regulations require secure document destruction. Cross-cut shredding (cuts in two directions creating confetti) or micro-cut shredding makes reconstruction virtually impossible. Strip-cut shredders (one direction) are less secure. Professional destruction services provide certificates of destruction for compliance. Tearing by hand is inadequate. Burning may violate environmental regulations and isn't reliable. Never donate/recycle sensitive documents intact. Shredding level depends on sensitivity: P-4 (cross-cut) minimum for sensitive data, P-7 (micro-cut) for classified."
  },
  {
    id: 4,
    question: "A technician performs a 'quick format' on a hard drive before donating the computer to charity. What is the problem with this approach?",
    options: [
      "Quick format is the most secure method available",
      "Quick format only removes file pointers - actual data remains and is easily recoverable",
      "Quick format permanently destroys the hard drive",
      "There is no problem - this is best practice"
    ],
    correct: 1,
    explanation: "Quick format only removes the file system structure (file allocation table/directory) but doesn't overwrite actual data. Recovery software can easily retrieve 'deleted' files. Full format is better but still may not overwrite all data. For secure disposal: use drive wiping software (multiple overwrite passes), encrypt drive before wiping, or physically destroy. Quick format provides zero security. Data recovery from quick-formatted drives is trivial. Never donate/sell drives with only quick format - use proper sanitization."
  },
  {
    id: 5,
    question: "An IT department uses data wiping software that overwrites all sectors of a hard drive with random data multiple times. How many overwrite passes are generally considered sufficient for non-classified data?",
    options: [
      "1 pass is sufficient for modern drives",
      "3 passes minimum",
      "100 passes required",
      "Overwriting doesn't work - only physical destruction is secure"
    ],
    correct: 0,
    explanation: "For modern high-density hard drives, a single overwrite pass with zeros or random data is generally sufficient - the DoD 5220.22-M (7 passes) and Gutmann method (35 passes) were designed for older, lower-density drives. Modern drives make data recovery after even one pass extremely difficult. NIST SP 800-88 recommends one pass for purging. Multiple passes don't hurt but add time. For SSDs, use ATA Secure Erase or crypto-erase. Physical destruction is most secure but wiping is acceptable for most scenarios. 3-7 passes is common for extra assurance."
  },
  {
    id: 6,
    question: "A company sells used computers to employees. Before sale, IT must ensure all corporate data is unrecoverable. Which approach provides adequate security while allowing drive reuse?",
    options: [
      "Delete all files and empty Recycle Bin",
      "Use certified drive wiping software (DBAN, Eraser) with verification",
      "Just reinstall Windows - that erases everything",
      "Change all file extensions to .txt"
    ],
    correct: 1,
    explanation: "Certified wiping software (DBAN, Eraser, Blancco) overwrites entire drives, including 'empty' space containing deleted files, and provides verification reports. This allows drive reuse while ensuring data is unrecoverable. Reinstalling Windows doesn't securely erase old data. Deleting files is completely inadequate. Changing extensions doesn't erase data. For compliance, use tools that provide certificates/logs proving sanitization. Wiping preserves drive utility for resale. Physical destruction is overkill if drives are being reused."
  },
  {
    id: 7,
    question: "A data center is decommissioning hard drives. They use a drill to create holes through the platters. What is the purpose of this destruction method?",
    options: [
      "To improve ventilation in the drives",
      "Physical destruction of platters makes data unreadable and drive inoperable",
      "Drilling is required before degaussing",
      "This allows drives to be reformatted"
    ],
    correct: 1,
    explanation: "Drilling holes through hard drive platters physically destroys data storage surfaces, making the drive inoperable and data unrecoverable. Multiple holes ensure destruction spans all platters. This is a physical destruction method like shredding, crushing, or pulverizing. The drive cannot be reused after drilling. Drilling doesn't improve ventilation or enable reformatting. It's not necessary before degaussing but can be used in combination. Physical destruction is most secure for highly sensitive data - ensures no possibility of data recovery."
  },
  {
    id: 8,
    question: "An organization outsources drive destruction to a third-party vendor. What documentation should they require to prove compliance with data disposal policies?",
    options: [
      "No documentation needed - trust the vendor",
      "Certificate of Destruction with serial numbers, destruction method, and date",
      "A receipt for payment",
      "An email confirmation"
    ],
    correct: 1,
    explanation: "Certificates of Destruction provide legal proof that data was destroyed according to regulations (HIPAA, SOX, GDPR). They should include: date of destruction, destruction method, serial numbers of destroyed media, witness signatures, chain of custody documentation. This protects against liability - proves due diligence if data breaches occur. Verbal assurances aren't sufficient. Payment receipts don't prove destruction. Reputable vendors provide detailed certificates. For compliance, proper documentation is mandatory - 'trust' isn't acceptable for regulated data."
  },
  {
    id: 9,
    question: "A law firm needs to dispose of backup tapes containing client information from 10 years ago. The tapes use magnetic tape technology. Which destruction method is appropriate?",
    options: [
      "Degaussing or physical shredding/incineration",
      "Erasing files from the tape using backup software",
      "Painting the tapes black",
      "Storing tapes in a box labeled 'destroyed'"
    ],
    correct: 0,
    explanation: "Magnetic backup tapes require degaussing (magnetic destruction) or physical destruction (shredding, incineration). Degaussing demagnetizes tapes, making data unrecoverable. Shredding physically destroys media. Backup software 'erase' may leave recoverable data. Painting doesn't destroy data. Labeling tapes 'destroyed' without actually destroying them is negligent and creates liability. Retention policies often require keeping data for years, but after retention periods expire, secure destruction is mandatory. For legal/financial data, physical destruction plus certificates of destruction ensure compliance."
  },
  {
    id: 10,
    question: "A company has old smartphones containing employee emails and contacts. Before recycling, what is the BEST practice for data sanitization?",
    options: [
      "Just remove the SIM card",
      "Perform factory reset/wipe, remove accounts, and verify data is erased",
      "Delete visible apps only",
      "Give phones away without any preparation"
    ],
    correct: 1,
    explanation: "Mobile device sanitization requires: factory reset (Settings > Reset), remove Google/Apple accounts (prevents Activation Lock), remove SIM and SD cards, verify data erasure. Factory reset should overwrite data, but for corporate devices consider MDM remote wipe before reset. Removing SIM doesn't erase device storage. Deleting apps leaves data. Never dispose of devices without wiping. For high-security needs, physically destroy devices. Most recyclers accept wiped devices. Always remove accounts first - prevents unauthorized device activation."
  },
  {
    id: 11,
    question: "An organization follows the '3-2-1' backup rule but also has a data retention policy requiring destruction after 7 years. What must they do to comply?",
    options: [
      "Keep all backups forever - retention policies don't apply to backups",
      "Securely destroy all backup copies (including offsite) after the retention period expires",
      "Only destroy the primary copy, keep backups indefinitely",
      "Email backups don't need to be destroyed"
    ],
    correct: 1,
    explanation: "Data retention policies apply to ALL copies of data including backups (onsite, offsite, cloud). After retention periods expire, organizations must securely destroy ALL instances to comply with regulations and reduce liability. Simply destroying primary copies while keeping backups violates retention policies. This includes: tapes, disk backups, cloud backups, archives. Track backup locations carefully. Failure to destroy expired data creates legal/regulatory risk. Implement automated destruction schedules. All backup media types must be properly sanitized or destroyed."
  },
  {
    id: 12,
    question: "A technician finds old CRT monitors in storage. These contain hazardous materials (lead, mercury). What is the proper disposal method?",
    options: [
      "Throw in regular trash",
      "Take to certified e-waste recycling facility that handles hazardous materials",
      "Break apart and sell components",
      "Bury in the backyard"
    ],
    correct: 1,
    explanation: "CRT monitors contain hazardous materials (lead in glass, phosphors) and CANNOT go in regular trash - violates environmental regulations. Use certified e-waste recyclers who properly handle hazardous components. Never break apart (releases toxins). Burial is illegal and environmentally harmful. Same applies to: batteries, mercury-containing devices, certain plastics. Many jurisdictions have laws requiring proper electronics recycling. Recyclers may charge fees for CRTs due to disposal costs. Check local regulations. Improper disposal creates environmental damage and legal liability."
  },
  {
    id: 13,
    question: "A company uses full-disk encryption (BitLocker) on all laptops. They're disposing of old encrypted drives. Does encryption eliminate the need for physical destruction or wiping?",
    options: [
      "Yes - encrypted drives can be disposed of without further action",
      "No - best practice is crypto-erase (destroy encryption keys) AND physical destruction or wiping for highly sensitive data",
      "Encryption makes drives indestructible",
      "Only delete the encryption password"
    ],
    correct: 1,
    explanation: "While strong encryption protects data, best practices for disposal include crypto-erase (destroying encryption keys, making data unrecoverable) AND physical destruction or wiping, especially for highly sensitive data. Defense-in-depth approach: assume future decryption methods might break current encryption. Crypto-erase is quick and effective if keys are properly managed. For maximum security, combine crypto-erase with physical destruction. Simply deleting passwords isn't sufficient. Encryption reduces but doesn't eliminate disposal requirements. NIST SP 800-88 recommends this layered approach."
  },
  {
    id: 14,
    question: "An organization must dispose of optical media (CDs/DVDs) containing backup data. What destruction method is appropriate?",
    options: [
      "Scratch the label side lightly",
      "Physical shredding, incineration, or pulverization",
      "Microwave for 10 seconds",
      "Snap in half and dispose"
    ],
    correct: 1,
    explanation: "Optical media (CDs, DVDs, Blu-rays) require physical destruction: shredding (special shredders for media), pulverization, or incineration. Scratching the label doesn't destroy data. Microwaving creates fire/toxic fumes and doesn't reliably destroy data. Snapping in half leaves recoverable fragments. Data layer can survive partial damage. Professional shredders reduce media to small particles. For small quantities, scissors can cross-cut discs into tiny pieces. Degaussing doesn't work on optical media (not magnetic). Secure destruction is mandatory for sensitive data on any media type."
  },
  {
    id: 15,
    question: "A healthcare provider is disposing of a printer that has an internal hard drive containing cached patient records. What should they do?",
    options: [
      "Just unplug and dispose - printers don't store data",
      "Remove and securely wipe or destroy the printer's hard drive before disposal",
      "Only remove the paper tray",
      "Clear the printer's print queue"
    ],
    correct: 1,
    explanation: "Modern multifunction printers often contain hard drives that cache print jobs, scans, and copies - potentially storing sensitive data. Before disposal: remove hard drive and wipe/destroy using same methods as computer drives, or use manufacturer's secure erase function. Clearing print queue only removes active jobs, not cached data. HIPAA and other regulations require securing ALL devices that store PHI/PII. Overlooking printer hard drives is a common compliance failure. Always inventory all data-storage devices for proper sanitization. Some organizations lease printers to avoid disposal liability."
  }
];