export const lesson48Flashcards = [
  {
    id: 1,
    front: "What is the difference between physical and logical data destruction?",
    back: "Physical: destroys storage media (shredding, drilling, degaussing, crushing) - data unrecoverable, drive unusable. Logical: software-based erasure (formatting, wiping) - data overwritten, drive reusable. Physical more secure, logical allows reuse/resale."
  },
  {
    id: 2,
    front: "What is standard formatting and why isn't it secure?",
    back: "Quick format marks space as available but doesn't erase data. Data still on disk, recoverable with forensic tools. Not secure for disposal. Use secure wipe instead. Standard format acceptable only if keeping drive for personal use."
  },
  {
    id: 3,
    front: "What is low-level formatting?",
    back: "Writes zeros to entire drive surface, reinitializes sectors. More thorough than standard format but still one-pass - potentially recoverable with advanced tools. Time-consuming. Modern drives don't support true low-level format (factory process only)."
  },
  {
    id: 4,
    front: "What is secure erase/wiping?",
    back: "Overwrites entire drive multiple times with random data. DoD 5220.22-M standard (7 passes), Gutmann method (35 passes). Data unrecoverable. Software: DBAN, Eraser, built-in tools. Allows drive reuse. Takes hours depending on size."
  },
  {
    id: 5,
    front: "What is the DoD 5220.22-M standard?",
    back: "Department of Defense data sanitization standard. 7-pass overwrite: pass 1 (character), pass 2 (complement), pass 3 (random), repeat, verify. Industry standard for secure wiping. Sufficient for most non-classified data. Takes significant time."
  },
  {
    id: 6,
    front: "What is drive wiping software?",
    back: "Programs that securely erase drives. DBAN (Darik's Boot and Nuke) - bootable, free, HDD focus. Eraser - Windows software. CCleaner - includes drive wiper. Vendor tools (Samsung Magician, etc.). Multiple overwrite passes, verification."
  },
  {
    id: 7,
    front: "What is SSD secure erase and why is it different?",
    back: "SSDs wear-level, spread data across chips - traditional wiping ineffective or damages drive. Use built-in Secure Erase command (ATA standard). Instant, complete erasure via firmware. Or encrypt drive from start, then delete encryption key (crypto erase)."
  },
  {
    id: 8,
    front: "Why doesn't traditional wiping work well on SSDs?",
    back: "Wear leveling spreads writes across cells, overwrites may not hit actual data locations. Spare area not accessible to OS. Multiple passes cause unnecessary wear. Use manufacturer secure erase command or crypto erase instead."
  },
  {
    id: 9,
    front: "What is physical destruction of drives?",
    back: "Rendering storage media physically unusable. Methods: shredding, drilling holes through platters/chips, crushing/pulverizing, incineration, degaussing (magnetic media). Most secure - data absolutely unrecoverable. Drive cannot be reused."
  },
  {
    id: 10,
    front: "What is shredding for data destruction?",
    back: "Industrial shredder cuts drives into small pieces (paper documents also). Platters/chips destroyed. Most secure physical method. Commercial services available. Creates waste requiring proper disposal. For highly sensitive data or compliance requirements."
  },
  {
    id: 11,
    front: "What is drilling for drive destruction?",
    back: "Drilling multiple holes through drive platters/circuit boards. Damages storage medium, makes recovery extremely difficult/expensive. Quick, simple method. Not as thorough as shredding. Multiple holes needed. Safety concern - protective equipment required."
  },
  {
    id: 12,
    front: "What is degaussing?",
    back: "Using powerful magnetic field to erase magnetic storage media (HDDs, tapes). Destroys data and drive firmware - drive unusable after. Not effective on SSDs (not magnetic storage). Specialized equipment required. Certified degaussers for compliance."
  },
  {
    id: 13,
    front: "Why doesn't degaussing work on SSDs?",
    back: "SSDs use flash memory (electrical charge storage), not magnetic media. Magnets don't affect flash memory. Must use secure erase command or physical destruction for SSDs. Common misconception - degaussing only for HDDs/magnetic tapes."
  },
  {
    id: 14,
    front: "What is incineration for data destruction?",
    back: "Complete burning/melting of storage media at high temperatures. Absolutely destroys all data. Environmental concerns, requires proper facility. Used for highest security classifications. Expensive, not practical for most organizations. Creates toxic fumes if improper."
  },
  {
    id: 15,
    front: "What is pulverizing/crushing?",
    back: "Mechanical destruction crushing drives into small fragments. Industrial crushers/compactors. Destroys platters, chips beyond recovery. More thorough than drilling. Commercial destruction services offer. For high-security environments, compliance requirements."
  },
  {
    id: 16,
    front: "What is a certificate of destruction?",
    back: "Official document proving proper data destruction. Issued by destruction service vendor. Lists: serial numbers, destruction method, date, witness signatures. Required for compliance (HIPAA, PCI DSS). Audit trail for legal/regulatory purposes. Keep for records."
  },
  {
    id: 17,
    front: "When is a certificate of destruction required?",
    back: "HIPAA (healthcare data), PCI DSS (payment card data), GDPR (EU personal data), government classified information, corporate compliance policies. Third-party destruction services provide certificates. Proof of compliance, legal protection."
  },
  {
    id: 18,
    front: "What is paper document shredding and what level is secure?",
    back: "Cross-cut shredding minimum (horizontal + vertical cuts). Strip-cut (parallel strips) insecure - can reassemble. Micro-cut/confetti (smallest particles) most secure. P-4 rating minimum for sensitive data. Shred: documents, printouts, sticky notes, old ID badges."
  },
  {
    id: 19,
    front: "What should be shredded before disposal?",
    back: "Documents with: personal information (SSN, DOB), financial data, passwords, customer information, business plans, employee records, medical records, contracts. Also: CDs/DVDs (shred), old credit cards, ID badges. Any printed confidential information."
  },
  {
    id: 20,
    front: "What data retention policies should organizations have?",
    back: "Define how long to keep data before destruction. Legal/regulatory requirements (7 years financial records, etc.), operational needs, litigation holds. Specify: data types, retention periods, destruction methods. Scheduled destruction prevents accumulation of unnecessary risk."
  },
  {
    id: 21,
    front: "What compliance regulations require secure data disposal?",
    back: "HIPAA (healthcare), PCI DSS (payment cards), GDPR (EU privacy), SOX (financial), GLBA (financial privacy), FERPA (education records). Each specifies retention periods and secure disposal. Non-compliance = fines, legal liability. Certificate of destruction often required."
  },
  {
    id: 22,
    front: "What is the 3-2-1 backup rule and why important for disposal?",
    back: "3 copies of data, 2 different media types, 1 offsite. Before disposal, verify all copies destroyed or only dispose of redundant copies. Don't destroy only backup without verifying production data safe. All backup media needs same secure disposal."
  },
  {
    id: 23,
    front: "What disposal method should you use for external hard drives?",
    back: "If reusing: secure wipe (7+ passes) or manufacturer secure erase. If disposing: physical destruction (drill, shred, crush) or degauss then destroy. Never just format - data recoverable. Remove from enclosure before destruction to access drive directly."
  },
  {
    id: 24,
    front: "What disposal method should you use for SSDs?",
    back: "Reuse: ATA Secure Erase command or crypto erase (if encrypted). Disposal: physical destruction (shred, crush) - degaussing ineffective. Drilling may miss some chips. Shredding most thorough. Some SSD controllers prevent secure erase - destruction only option."
  },
  {
    id: 25,
    front: "What disposal method should you use for USB flash drives?",
    back: "Reuse: secure wipe software or format (less secure). Disposal: physical destruction - cut/shred circuit board, destroy memory chips. Small size makes physical destruction quick. Some organizations ban USB drives entirely (security policy)."
  },
  {
    id: 26,
    front: "What disposal method for optical media (CDs/DVDs)?",
    back: "Shredding (cross-cut CD/DVD shredder), physical breaking into pieces, incineration. Scratching surface insufficient - data may be recoverable. Don't just throw away intact - readable. Shredding best for volume. Sensitive data should always be shredded."
  },
  {
    id: 27,
    front: "What recycling considerations exist for electronics?",
    back: "E-waste contains toxic materials (lead, mercury), can't go in regular trash. Use certified recyclers (R2, e-Stewards). Data destruction BEFORE recycling - recycler may not securely wipe. Remove/destroy drives yourself, recycle rest of equipment."
  },
  {
    id: 28,
    front: "What is sanitization in data destruction?",
    back: "Process of removing data so it cannot be recovered by any means. Includes: logical sanitization (secure wipe), physical sanitization (degauss), destruction. Level depends on data sensitivity. Goal: confidentiality protection. Use strongest method feasible."
  },
  {
    id: 29,
    front: "What are the stages of IT asset disposal?",
    back: "1) Inventory assets, 2) Backup needed data, 3) Sanitize/destroy storage, 4) Certificate of destruction, 5) Physical disposal/recycling, 6) Update asset management records. Document chain of custody. Follow compliance requirements. Audit trail essential."
  },
  {
    id: 30,
    front: "What risks exist from improper data disposal?",
    back: "Data breach (confidential information exposed), identity theft, regulatory fines (HIPAA, PCI DSS violations), legal liability, reputation damage, competitive intelligence loss. Used drives sold online often contain recoverable data. Secure disposal critical security control."
  }
];