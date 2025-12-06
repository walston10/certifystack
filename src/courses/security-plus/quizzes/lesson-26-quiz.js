export const lesson26Quiz = [
  {
    id: 1,
    question: "A forensic investigator creates a bit-for-bit copy of a suspect's hard drive, calculates hashes before and after to verify integrity, and stores the original in a secure location. What forensic principle is being followed?",
    options: [
      "Quick analysis",
      "Evidence preservation - maintaining integrity for legal proceedings",
      "Data destruction",
      "Random sampling"
    ],
    correct: 1,
    explanation: "EVIDENCE PRESERVATION maintains the integrity of digital evidence for potential legal proceedings. Preservation principles: (1) Never modify original evidence, (2) Work from forensic copies, (3) Hash verification (prove no changes), (4) Secure storage of originals, (5) Document everything. Forensic imaging: (1) Bit-for-bit copy (includes deleted files, slack space), (2) Write blocker prevents modifications, (3) Hash before and after must match, (4) Multiple copies recommended. Why integrity matters: (1) Evidence admissibility in court, (2) Defense can challenge modified evidence, (3) Proves investigation didn't alter data. Hash algorithms: SHA-256 preferred, MD5 alone no longer sufficient. Evidence that's been modified or can't prove integrity may be inadmissible - entire investigation compromised."
  },
  {
    id: 2,
    question: "A forensic examiner documents who had possession of evidence, when it was transferred, and where it was stored from collection to analysis. What is this documentation called?",
    options: [
      "Incident report",
      "Chain of custody - tracking evidence handling from collection to court",
      "System log",
      "Backup record"
    ],
    correct: 1,
    explanation: "CHAIN OF CUSTODY documents evidence handling to prove integrity from collection to court presentation. Chain of custody records: (1) Who collected evidence, (2) When collected, (3) Each transfer (who, when, why), (4) Storage location, (5) Who accessed and when, (6) Current custodian. Why critical: (1) Proves evidence wasn't tampered, (2) Required for admissibility, (3) Defense challenges gaps, (4) Demonstrates professional handling. Chain of custody documentation: (1) Evidence logs, (2) Transfer forms, (3) Access records, (4) Storage security. Breaks in chain: (1) Unaccounted time periods, (2) Undocumented access, (3) Improper storage, (4) Missing signatures. Digital evidence challenges: easy to modify, must prove bit-for-bit integrity maintained."
  },
  {
    id: 3,
    question: "When collecting volatile evidence during a live investigation, a forensic analyst collects RAM contents before disk data. Why this order?",
    options: [
      "RAM is more important",
      "Order of volatility - collect most volatile (easily lost) evidence first",
      "Disk is harder to access",
      "Random preference"
    ],
    correct: 1,
    explanation: "ORDER OF VOLATILITY prioritizes evidence collection based on how quickly it disappears. Order (most to least volatile): (1) CPU registers, cache, (2) RAM (memory), (3) Swap/page files, (4) Hard drive, (5) Remote logging, (6) Physical configuration, (7) Archival media. Why RAM first: (1) Lost on power off, (2) Contains running processes, (3) Encryption keys may be in memory, (4) Network connections, (5) Malware that doesn't touch disk. What's in RAM: (1) Running malware, (2) Decryption keys, (3) User activity, (4) Network connections, (5) Passwords in memory. Practical application: (1) Don't power off before RAM capture, (2) Use tools like FTK Imager, Volatility, (3) Document process and time. Understanding volatility prevents evidence loss - can't recover RAM after shutdown."
  },
  {
    id: 4,
    question: "An investigator uses a hardware device that allows reading from a drive but physically prevents any write operations to ensure the evidence is not modified. What is this device?",
    options: [
      "Network tap",
      "Write blocker - prevents writes to evidence during acquisition",
      "USB hub",
      "Encryption device"
    ],
    correct: 1,
    explanation: "WRITE BLOCKER prevents any modifications to evidence media during forensic acquisition. Write blocker types: (1) HARDWARE - physical device, most reliable, (2) SOFTWARE - driver-based blocking. How hardware write blockers work: (1) Connects between evidence and forensic workstation, (2) Allows read commands, (3) Blocks all write commands, (4) Even prevents accidental OS writes. Why necessary: (1) OS may modify drive on connection (timestamps, logs), (2) Proves evidence wasn't altered, (3) Industry standard requirement. Usage: (1) Connect write blocker to evidence drive, (2) Connect write blocker to forensic workstation, (3) Perform imaging, (4) Verify hashes match. Without write blocker: timestamps change, files may be modified, evidence integrity questionable. Hardware blockers preferred over software due to reliability."
  },
  {
    id: 5,
    question: "A forensic report includes a hash value of the original drive image calculated at acquisition time. During court proceedings, recalculating the hash produces the same value. What does this prove?",
    options: [
      "Nothing significant",
      "Evidence integrity - proves evidence has not been modified since acquisition",
      "Data was encrypted",
      "Drive is functioning"
    ],
    correct: 1,
    explanation: "HASH MATCHING proves evidence has not been modified since acquisition - critical for integrity verification. Hash verification: (1) Calculate hash immediately after imaging, (2) Document hash value, (3) Recalculate at any point to verify no changes, (4) Any modification produces different hash. Algorithms used: (1) SHA-256 (current standard), (2) SHA-1 (acceptable with SHA-256), (3) MD5 (alone no longer sufficient due to collisions). Hash in forensics: (1) Image hash proves copy integrity, (2) File hashes identify known files (NSRL database), (3) Hash matching finds duplicate files. Documentation: (1) Hash algorithm used, (2) Hash value, (3) When calculated, (4) Tool used. Matching hashes prove: evidence examiner analyzed is identical to what was collected - no tampering possible."
  },
  {
    id: 6,
    question: "An investigation reveals that a deleted file was recovered from disk because the data blocks hadn't been overwritten yet. What forensic concept allowed this recovery?",
    options: [
      "Encryption bypass",
      "File carving/Data recovery - recovering data from unallocated space",
      "Network capture",
      "Memory analysis"
    ],
    correct: 1,
    explanation: "FILE CARVING recovers deleted files from unallocated disk space where data still exists. Why deleted files remain: (1) Delete removes file system pointer, not data, (2) Data remains until blocks reused, (3) May recover partially overwritten files. File carving techniques: (1) Search for file headers/footers (signatures), (2) Reconstruct files from fragments, (3) Examine unallocated space. What can be recovered: (1) Recently deleted files, (2) Formatted drives (quick format), (3) Corrupted file systems, (4) Fragments of overwritten files. Limitations: (1) Overwritten data gone, (2) SSDs with TRIM harder to recover, (3) Encrypted data recovered but unusable, (4) Fragmented files may be incomplete. Forensic tools: Autopsy, FTK, EnCase, PhotoRec. This is why secure deletion requires overwriting - simple delete doesn't destroy data."
  },
  {
    id: 7,
    question: "A forensic analyst examines memory dumps to find running processes, network connections, and potential malware that only exists in RAM. What type of forensics is this?",
    options: [
      "Network forensics",
      "Memory/Volatile data forensics - analyzing RAM contents",
      "Mobile forensics",
      "Log analysis"
    ],
    correct: 1,
    explanation: "MEMORY FORENSICS analyzes RAM contents to find evidence not available on disk. Memory forensics reveals: (1) Running processes, (2) Open network connections, (3) Loaded DLLs, (4) Registry hives, (5) Encryption keys, (6) Passwords in memory, (7) Fileless malware. Memory capture: (1) FTK Imager, (2) Magnet RAM Capture, (3) WinPmem, (4) Must capture before shutdown. Analysis tools: (1) Volatility Framework, (2) Rekall. Memory analysis techniques: (1) Process listing, (2) DLL analysis, (3) Network connection review, (4) Rootkit detection, (5) Timeline creation. Why critical: (1) Fileless malware lives only in memory, (2) Encryption keys present during use, (3) Evidence of user activity, (4) Shows system state at capture time. Memory forensics is increasingly important as attackers avoid touching disk."
  },
  {
    id: 8,
    question: "During an investigation, network traffic captures show data being transmitted to a suspicious external IP address at the time of the breach. What type of forensic evidence is this?",
    options: [
      "Physical evidence",
      "Network forensics - analysis of captured network traffic",
      "Memory evidence",
      "Registry evidence"
    ],
    correct: 1,
    explanation: "NETWORK FORENSICS analyzes captured network traffic to understand attacker communications and data exfiltration. Network forensic data: (1) Packet captures (PCAP files), (2) NetFlow/sFlow records, (3) Firewall logs, (4) Proxy logs, (5) DNS logs. What network forensics reveals: (1) Attack vectors (how they got in), (2) Command and control communication, (3) Data exfiltration (what was stolen), (4) Lateral movement, (5) Timeline of activity. Collection methods: (1) Full packet capture (complete but storage-intensive), (2) Flow data (metadata only, less storage), (3) Log aggregation. Analysis tools: Wireshark, NetworkMiner, Zeek (Bro), tcpdump. Challenges: (1) Encrypted traffic (can see connections, not content), (2) Storage for full capture, (3) Volume of data to analyze. Network forensics is essential for understanding how attackers operated."
  },
  {
    id: 9,
    question: "An investigation timeline shows when files were created, modified, accessed, and deleted based on file system timestamps. What forensic technique created this timeline?",
    options: [
      "Network analysis",
      "Timeline analysis - reconstructing sequence of events from timestamps",
      "Password cracking",
      "Encryption analysis"
    ],
    correct: 1,
    explanation: "TIMELINE ANALYSIS reconstructs the sequence of events using timestamps from multiple sources. Timestamp sources: (1) FILE SYSTEM - created, modified, accessed (MAC times), (2) LOGS - system, application, security, (3) REGISTRY - program execution, USB connections, (4) BROWSER HISTORY - web activity, (5) EMAIL - sent/received times. Timeline creation: (1) Extract timestamps from all sources, (2) Normalize to single timezone, (3) Correlate events, (4) Identify suspicious patterns. What timeline reveals: (1) When attack occurred, (2) Attacker's actions in sequence, (3) What was accessed/modified, (4) Dwell time (how long attacker present). Challenges: (1) Timestamp manipulation by attackers, (2) Timezone confusion, (3) Clock skew between systems, (4) Missing data. Tools: log2timeline/Plaso, Autopsy timeline. Timeline is story of the incident in chronological order."
  },
  {
    id: 10,
    question: "A forensic investigation requires extracting data from a smartphone, including messages, photos, app data, and deleted content. What specialized forensic area is this?",
    options: [
      "Desktop forensics",
      "Mobile device forensics - extracting and analyzing mobile device data",
      "Network forensics",
      "Cloud forensics"
    ],
    correct: 1,
    explanation: "MOBILE FORENSICS extracts and analyzes data from smartphones, tablets, and other mobile devices. Mobile forensic data: (1) Call logs and SMS, (2) Contacts, (3) Photos and videos, (4) App data (messaging, social media), (5) Location data (GPS), (6) Browsing history, (7) Deleted content. Extraction types: (1) LOGICAL - what's accessible to user, (2) FILE SYSTEM - deeper access including databases, (3) PHYSICAL - bit-for-bit including deleted, (4) CHIP-OFF - direct memory chip reading. Mobile challenges: (1) Encryption (FDE on modern devices), (2) Many device types/OS versions, (3) Locked devices, (4) Remote wipe capability, (5) Cloud sync vs local data. Tools: Cellebrite, GrayKey, Oxygen Forensic, Magnet AXIOM. First response: airplane mode to prevent remote wipe, don't let battery die. Mobile forensics requires specialized tools and training."
  },
  {
    id: 11,
    question: "During incident response, the security team must decide whether to immediately isolate systems or continue monitoring to gather more intelligence about the attacker. What forensic consideration influences this?",
    options: [
      "Random choice",
      "Evidence collection vs containment balance - gathering intel vs stopping damage",
      "Cost consideration only",
      "Time of day"
    ],
    correct: 1,
    explanation: "EVIDENCE vs CONTAINMENT balance is critical decision - whether to stop attacker or learn more about their operations. Arguments for continued monitoring: (1) Understand full scope, (2) Identify all compromised systems, (3) Gather attribution information, (4) Understand attacker objectives. Arguments for immediate containment: (1) Stop ongoing damage/exfiltration, (2) Prevent further spread, (3) Legal obligation to minimize harm, (4) Evidence already sufficient. Decision factors: (1) Severity of ongoing damage, (2) Evidence needed for case, (3) Ability to contain without detection, (4) Resources for monitoring, (5) Legal requirements. Compromise approaches: (1) Isolate while continuing network monitoring, (2) Block exfiltration but watch lateral movement, (3) Set traps for additional intelligence. This decision should be pre-planned - made under pressure during incident is difficult."
  },
  {
    id: 12,
    question: "A forensic examiner must testify in court about their analysis methods, findings, and conclusions. What role are they serving?",
    options: [
      "Witness only",
      "Expert witness - providing specialized knowledge and opinions to the court",
      "Defendant",
      "Jury member"
    ],
    correct: 1,
    explanation: "EXPERT WITNESS provides specialized technical knowledge and opinions to help the court understand complex evidence. Expert witness requirements: (1) Demonstrated expertise (education, experience, certifications), (2) Accepted forensic methodologies used, (3) Documented chain of custody, (4) Verifiable and reproducible findings. Expert witness responsibilities: (1) Explain technical concepts clearly, (2) Present findings objectively, (3) Withstand cross-examination, (4) Defend methodology, (5) Remain neutral (not advocate). Preparation: (1) Clear documentation, (2) Practice testimony, (3) Understand legal process, (4) Review all evidence. Challenges: (1) Explaining technical concepts to non-technical jury, (2) Defense attacks on methodology, (3) Time since investigation, (4) Maintaining composure under pressure. Certifications (GCFE, EnCE, CCE) demonstrate competence but testimony quality matters most."
  },
  {
    id: 13,
    question: "An attacker used anti-forensic techniques including timestomping (modifying timestamps), secure deletion tools, and log clearing to cover their tracks. What challenge does this present?",
    options: [
      "No challenge",
      "Anti-forensics - deliberate efforts to obstruct investigation",
      "Normal activity",
      "System optimization"
    ],
    correct: 1,
    explanation: "ANTI-FORENSICS are deliberate techniques to obstruct, mislead, or prevent forensic investigation. Anti-forensic techniques: (1) ARTIFACT WIPING - secure deletion, log clearing, (2) TRAIL OBFUSCATION - timestomping, log manipulation, (3) DATA HIDING - steganography, encryption, (4) ATTACKING TOOLS - exploiting forensic tool vulnerabilities. Timestomping: (1) Modifies file timestamps, (2) Can make malware appear old, (3) Confuses timeline analysis, (4) Detection: compare multiple timestamp sources. Countering anti-forensics: (1) Multiple evidence sources (correlate), (2) Look for signs of manipulation, (3) Artifact residue analysis, (4) Timeline anomalies, (5) Memory analysis. Investigation approach: (1) Assume anti-forensics may be present, (2) Don't rely on single source, (3) Look for gaps and inconsistencies. Sophisticated attackers use anti-forensics - investigators must recognize and work around them."
  },
  {
    id: 14,
    question: "A company experiences a data breach and needs to determine exactly what customer data was accessed. This determination will affect breach notification requirements. What type of forensic question is this?",
    options: [
      "Attribution question",
      "Scoping question - determining extent of compromise for legal/regulatory requirements",
      "Technical curiosity",
      "Academic research"
    ],
    correct: 1,
    explanation: "SCOPING determines the extent of compromise, critical for legal, regulatory, and business decisions. Scoping questions: (1) What systems were compromised?, (2) What data was accessed/exfiltrated?, (3) How many records affected?, (4) What time period?, (5) Are attackers still present? Why scoping matters: (1) Breach notification triggered by specific data types/quantities, (2) Regulatory fines based on scope, (3) Customer notification scope, (4) Remediation planning, (5) Insurance claims. Scoping techniques: (1) Log analysis for accessed data, (2) Network captures for exfiltration, (3) Database query logs, (4) File access timestamps. Scoping challenges: (1) Incomplete logging, (2) Attacker covered tracks, (3) Time pressure for notification, (4) Assumption of worst case. Conservative approach: if can't prove data wasn't accessed, assume it was for notification purposes."
  },
  {
    id: 15,
    question: "A forensic investigation reveals the attack originated from an IP address, but the attacker likely used VPNs and proxies to hide their true location. Why is attribution difficult?",
    options: [
      "Attribution is always easy",
      "Attackers use anonymization techniques making true source identification challenging",
      "IP addresses never lie",
      "Technical limitations don't exist"
    ],
    correct: 1,
    explanation: "ATTRIBUTION (identifying who conducted attack) is extremely difficult due to anonymization and misdirection. Attribution challenges: (1) VPNs/proxies hide true IP, (2) Tor network anonymization, (3) Compromised systems as launch points, (4) False flags (making it look like others), (5) International jurisdictions. Attribution layers: (1) TECHNICAL - IP, malware, infrastructure, (2) OPERATIONAL - tactics, techniques, patterns, (3) STRATEGIC - motive, capability, timing. Attribution confidence levels: (1) High - multiple indicators point to same actor, (2) Medium - some indicators but not conclusive, (3) Low - limited or conflicting evidence. Nation-state attribution: governments may have intelligence sources beyond forensics. For most organizations: attribution is nice but not essential - focus on remediation and prevention. Legal proceedings often require high-confidence attribution."
  }
];