export const lesson07Quiz = [
  {
    id: 1,
    question: "A user opens an email attachment and their files become encrypted with a ransom demand displayed. The malware threatens to delete files if payment isn't made within 72 hours. What type of malware is this?",
    options: [
      "Spyware - monitors user activity",
      "Ransomware - encrypts files and demands payment for decryption",
      "Adware - displays advertisements",
      "Rootkit - hides system access"
    ],
    correct: 1,
    explanation: "Ransomware encrypts victim's files and demands payment (usually cryptocurrency) for the decryption key. Ransomware characteristics: (1) Encrypts files with strong encryption, (2) Displays ransom demand with payment instructions, (3) Often includes countdown timer/threats, (4) May exfiltrate data before encrypting (double extortion). Famous examples: WannaCry, NotPetya, REvil, LockBit. Prevention: regular backups (offline/immutable), email filtering, endpoint protection, user training, patch management. Response: isolate infected systems, don't pay ransom (no guarantee of decryption, funds criminal activity), restore from backups, report to authorities. Ransomware-as-a-Service (RaaS) has made these attacks more common - criminals can 'rent' ransomware infrastructure."
  },
  {
    id: 2,
    question: "A security analyst discovers malware that spreads automatically across the network without any user interaction, exploiting a vulnerability in the SMB protocol. What type of malware is this?",
    options: [
      "Virus - requires user action to spread",
      "Worm - self-replicating malware that spreads automatically without user interaction",
      "Trojan - disguised as legitimate software",
      "Spyware - monitors activity"
    ],
    correct: 1,
    explanation: "A WORM is self-replicating malware that spreads automatically across networks without requiring user action. Worm characteristics: (1) Self-replicating - copies itself, (2) Spreads via network - exploits vulnerabilities, (3) No host file needed - standalone malware, (4) Can spread extremely fast - automated. Famous worms: Code Red, Nimda, Conficker, WannaCry (ransomware + worm). Worm vs Virus: worms spread automatically; viruses require user action (opening file, running program). WannaCry combined both: worm spreading via SMB vulnerability (EternalBlue) + ransomware payload. Worm defense: patch management (critical!), network segmentation, IDS/IPS, disable unnecessary services. The SMB vulnerability reference points to EternalBlue - patching would have prevented spread."
  },
  {
    id: 3,
    question: "An employee downloads what appears to be a legitimate PDF reader from an unofficial website. After installation, the software works normally but secretly installs a backdoor allowing remote access. What type of malware is this?",
    options: [
      "Worm - spreads automatically",
      "Trojan - malware disguised as legitimate software",
      "Virus - attaches to files",
      "Rootkit - hides in OS kernel"
    ],
    correct: 1,
    explanation: "A TROJAN (Trojan Horse) is malware disguised as legitimate or desirable software. Trojan characteristics: (1) Appears useful/legitimate, (2) Requires user to install/execute, (3) Performs malicious actions secretly, (4) Doesn't self-replicate (unlike worms). Common Trojan types: (1) RAT (Remote Access Trojan) - gives attacker remote control, (2) Banking Trojan - steals financial credentials, (3) Downloader - downloads additional malware, (4) Backdoor - provides persistent access. Distribution: fake software downloads, email attachments, malicious ads, bundled with pirated software. Defense: download from official sources only, verify software signatures, use application whitelisting, endpoint protection. The scenario describes a classic Trojan - legitimate-looking software with hidden malicious functionality."
  },
  {
    id: 4,
    question: "A forensic investigator discovers malware that has replaced core operating system files and hides its presence from standard detection tools. Even task manager doesn't show the malicious processes. What type of malware is this?",
    options: [
      "Adware - displays ads",
      "Rootkit - deeply embedded malware that hides its presence by modifying the OS",
      "Spyware - monitors activity",
      "Logic bomb - triggers on condition"
    ],
    correct: 1,
    explanation: "A ROOTKIT is malware designed to hide deep within the operating system and conceal its presence. Rootkit characteristics: (1) Operates at low level (kernel, boot sector, firmware), (2) Hides processes, files, network connections from detection, (3) Modifies OS to lie about system state, (4) Extremely difficult to detect and remove. Rootkit types: (1) User-mode - hooks application-level functions, (2) Kernel-mode - modifies OS kernel, (3) Bootkit - infects boot process, loads before OS, (4) Firmware rootkit - infects BIOS/UEFI. Detection challenges: rootkit controls what security tools see. Detection methods: boot from clean media, compare system from outside, behavioral analysis, specialized rootkit scanners. Removal often requires: complete OS reinstall, sometimes firmware reflash. Famous: Sony BMG rootkit (2005), TDL/TDSS, LoJax (first UEFI rootkit in wild)."
  },
  {
    id: 5,
    question: "A company discovers that malware has been recording all employee keystrokes, capturing passwords and sensitive information typed into applications. What type of malware is this?",
    options: [
      "Ransomware - encrypts files",
      "Keylogger - records keystrokes to capture sensitive information",
      "Worm - spreads automatically",
      "Rootkit - hides in OS"
    ],
    correct: 1,
    explanation: "A KEYLOGGER records keystrokes to capture passwords, credit cards, messages, and other typed information. Keylogger types: (1) Software keyloggers - programs capturing keyboard input, (2) Hardware keyloggers - physical devices between keyboard and computer, (3) Memory-injection keyloggers - capture from memory. What keyloggers capture: passwords, credit card numbers, private messages, search queries, documents. Often part of: spyware bundles, banking Trojans, RATs, corporate espionage tools. Detection: endpoint protection, behavioral analysis, checking for unknown processes, physical inspection (hardware keyloggers). Defense: use password managers (autofill doesn't use keyboard), virtual keyboards for sensitive input, two-factor authentication (password alone isn't enough), endpoint detection and response (EDR). Keyloggers are often combined with screen capture and clipboard monitoring for comprehensive surveillance."
  },
  {
    id: 6,
    question: "A terminated employee's code contains hidden functionality that will delete all database records exactly 30 days after their account is disabled. What type of malware is this?",
    options: [
      "Worm - spreads automatically",
      "Logic bomb - malicious code that triggers when specific conditions are met",
      "Ransomware - demands payment",
      "Adware - displays ads"
    ],
    correct: 1,
    explanation: "A LOGIC BOMB is malicious code that executes when specific conditions are met (date, event, action). Logic bomb characteristics: (1) Lies dormant until trigger condition, (2) Often planted by insiders, (3) Trigger can be: date/time, user action, account status, system event, (4) Payload activates all at once. Common triggers: specific date, employee termination, failed login, file access, system reboot. This scenario: employee creates bomb triggered by account disable + 30 days = revenge after termination. Famous case: UBS PaineWebber - admin planted logic bomb, caused millions in damage. Defense: code review, separation of duties, change monitoring, insider threat programs, proper offboarding procedures. Detection: monitor for scheduled tasks, hidden scripts, time-based triggers in code. Logic bombs are particularly dangerous because they're planted by trusted insiders with system access."
  },
  {
    id: 7,
    question: "Security monitoring shows thousands of company computers simultaneously attacking a target website, but users are unaware their systems are participating. The computers were infected months ago. What has the company's network become part of?",
    options: [
      "Virtual private network",
      "Botnet - network of compromised computers controlled remotely for coordinated attacks",
      "Honeypot network",
      "Load balancer cluster"
    ],
    correct: 1,
    explanation: "A BOTNET is a network of compromised computers (bots/zombies) controlled by an attacker (botmaster). Botnet characteristics: (1) Thousands to millions of infected systems, (2) Central command and control (C2/C&C), (3) Victims often unaware of infection, (4) Used for coordinated attacks. Botnet uses: (1) DDoS attacks (this scenario), (2) Spam distribution, (3) Cryptocurrency mining, (4) Credential stuffing, (5) Click fraud, (6) Ransomware distribution. Famous botnets: Mirai (IoT devices), Emotet, Zeus, Necurs. Infection methods: malware downloads, drive-by downloads, email attachments, worms. Detection signs: unusual network traffic, slow performance, connections to known C2 servers. Defense: endpoint protection, network monitoring, DNS filtering, patch management. The scenario describes classic botnet DDoS - coordinated attack from many infected systems."
  },
  {
    id: 8,
    question: "An investigation reveals malware that exists only in system memory, uses PowerShell for execution, leaves no files on disk, and disappears after reboot. What type of malware is this?",
    options: [
      "Traditional virus with file infection",
      "Fileless malware - operates entirely in memory using legitimate system tools",
      "Boot sector virus",
      "Macro virus"
    ],
    correct: 1,
    explanation: "FILELESS MALWARE operates entirely in memory without writing files to disk, evading traditional file-based detection. Fileless malware characteristics: (1) Lives in RAM only, (2) Uses legitimate system tools (PowerShell, WMI, .NET), (3) No malicious files to scan, (4) Often disappears on reboot (but may have persistence mechanisms). Techniques: (1) Living-off-the-land binaries (LOLBins), (2) Memory injection into legitimate processes, (3) Registry-based persistence, (4) Malicious scripts. Why effective: (1) Antivirus typically scans files - nothing to scan, (2) Uses trusted system tools - harder to block, (3) Leaves minimal forensic evidence. Detection: behavioral analysis, memory forensics, script logging (PowerShell transcription), EDR solutions. Defense: application whitelisting, PowerShell constrained language mode, script block logging, memory protection. Increasingly common: ~40% of attacks use fileless techniques."
  },
  {
    id: 9,
    question: "A user notices their computer is running slowly. Investigation reveals hidden cryptocurrency mining software consuming CPU resources. The user never installed this software. What is this malware called?",
    options: [
      "Ransomware",
      "Cryptominer/Cryptojacker - uses victim's resources to mine cryptocurrency",
      "Keylogger",
      "Rootkit"
    ],
    correct: 1,
    explanation: "CRYPTOMINER (Cryptojacker) is malware that hijacks computing resources to mine cryptocurrency for the attacker. Cryptominer characteristics: (1) High CPU/GPU usage, (2) Increased electricity costs, (3) System slowdown, (4) Excessive heat/fan noise, (5) Attacker profits from your resources. Types: (1) Malware-based - installed programs mining 24/7, (2) Browser-based - JavaScript miners on websites, (3) Cloud cryptojacking - compromised cloud instances. Why attractive to attackers: (1) Steady passive income, (2) Less risky than ransomware (often goes unnoticed), (3) Doesn't destroy data (victims may not report). Indicators: unexplained high CPU usage, slow performance, high electricity bills, overheating. Defense: endpoint protection, browser extensions blocking miners, monitor resource usage, cloud cost monitoring. Often delivered via: malvertising, compromised websites, Trojans, exploited vulnerabilities."
  },
  {
    id: 10,
    question: "A macro-enabled Word document, when opened, downloads and executes additional malware from the internet. What is this document functioning as?",
    options: [
      "Rootkit",
      "Dropper/Downloader - initial malware that retrieves and installs additional payloads",
      "Logic bomb",
      "Keylogger"
    ],
    correct: 1,
    explanation: "A DROPPER or DOWNLOADER is malware whose primary purpose is to install other malware. Dropper vs Downloader: (1) Dropper - contains payload within itself, extracts and installs, (2) Downloader - retrieves payload from internet, then installs. Why use them: (1) Small initial payload evades detection, (2) Can download different malware based on target, (3) Payload can be updated without redistributing dropper, (4) Two-stage attack - dropper might succeed even if payload is detected. Common delivery: email attachments (this scenario), malicious websites, exploit kits. The macro document: executes when opened (if macros enabled), connects to attacker's server, downloads main payload (RAT, ransomware, etc.). Defense: disable macros by default, email filtering, endpoint protection, user training ('Enable Content' = danger). Macro malware has resurged - it's a very effective initial access technique."
  },
  {
    id: 11,
    question: "A system exhibits these symptoms: disabled Windows Defender, browser redirecting to strange sites, sluggish performance, and unknown programs in startup. What do these collectively indicate?",
    options: [
      "Normal Windows behavior",
      "Malware infection - multiple indicators of compromise present",
      "Hardware failure",
      "Network congestion"
    ],
    correct: 1,
    explanation: "These are classic INDICATORS OF MALWARE INFECTION. Common malware symptoms: (1) Disabled security software - malware protecting itself, (2) Browser hijacking/redirects - adware, PUPs, or worse, (3) Slow performance - malware consuming resources, (4) Unknown startup programs - persistence mechanisms, (5) Pop-ups and ads, (6) High network activity, (7) Crashing applications, (8) Missing/encrypted files, (9) Ransom messages, (10) Unusual account activity. Response steps: (1) Isolate system from network, (2) Run offline antivirus scan, (3) Check startup items, scheduled tasks, (4) Review installed programs, (5) Check browser extensions, (6) Consider reimaging if severe. Multiple symptoms together strongly indicate infection. Single symptom might have innocent explanation; multiple symptoms warrant investigation. Document everything for incident response."
  },
  {
    id: 12,
    question: "A virus attaches itself to executable files and spreads when those infected files are shared and executed on other computers. What is the PRIMARY characteristic that distinguishes a virus from a worm?",
    options: [
      "Viruses are more dangerous than worms",
      "Viruses require a host file and user action to spread; worms spread automatically",
      "Worms require user interaction",
      "Viruses only affect Mac computers"
    ],
    correct: 1,
    explanation: "The key distinction: VIRUSES need host files and user action; WORMS spread automatically. Virus characteristics: (1) Attaches to host file (executable, document, boot sector), (2) Spreads when infected file is shared/executed, (3) Requires user action to propagate, (4) Can be file infector, macro virus, boot sector virus. Worm characteristics: (1) Standalone - no host file needed, (2) Self-replicating across networks, (3) Spreads automatically via vulnerabilities, (4) No user interaction required. Practical difference: virus spreads when you email infected file and recipient opens it; worm spreads by itself by exploiting network vulnerabilities. Some malware combines both: WannaCry was ransomware with worm propagation. Understanding this distinction helps predict spread patterns and implement appropriate controls."
  },
  {
    id: 13,
    question: "Software bundled with a free application displays unwanted advertisements and changes browser settings without clear consent. While annoying, it doesn't steal data or cause direct harm. How should this be classified?",
    options: [
      "Ransomware",
      "PUP (Potentially Unwanted Program) or Adware - unwanted but not clearly malicious",
      "Rootkit",
      "Worm"
    ],
    correct: 1,
    explanation: "PUPs (Potentially Unwanted Programs) and ADWARE occupy a gray area - unwanted but not overtly malicious. PUP/Adware characteristics: (1) Often bundled with free software, (2) May have 'consent' buried in EULA, (3) Displays ads, changes settings, (4) Collects data for advertising, (5) Difficult to remove, (6) Degrades user experience. Why 'potentially' unwanted: (1) Technically user agreed (even unknowingly), (2) Some argue it's business model not malware, (3) Doesn't destroy data or steal credentials, (4) Legal status unclear. Security implications: (1) Can be gateway for worse malware, (2) Privacy concerns with data collection, (3) System instability, (4) Opens attack surface. Defense: careful installation (uncheck bundled software), use reputable sources, read prompts carefully, use PUP detection in antimalware. Modern endpoint protection typically flags PUPs but may not block by default."
  },
  {
    id: 14,
    question: "A RAT (Remote Access Trojan) has been discovered on an executive's laptop, allowing attackers to control the system remotely, access files, and activate the webcam. What type of threat does this represent?",
    options: [
      "Denial of service tool",
      "Complete system compromise - RAT provides full remote control of the infected system",
      "Simple adware infection",
      "Hardware malfunction"
    ],
    correct: 1,
    explanation: "A RAT (Remote Access Trojan) provides attackers with comprehensive remote control of infected systems. RAT capabilities: (1) Full remote desktop access, (2) File access/theft, (3) Keylogging, (4) Webcam/microphone activation, (5) Screenshot capture, (6) Download/upload files, (7) Execute commands, (8) Install additional malware. Famous RATs: DarkComet, njRAT, Poison Ivy, Remcos. Why particularly dangerous: (1) Complete compromise - attacker has same access as user (or more), (2) Persistent access, (3) Stealth operation, (4) Corporate espionage capability. On executive laptop: access to sensitive communications, strategic documents, board materials, M&A information. Response: immediate isolation, forensic imaging, credential reset for all accessed accounts, full investigation of accessed data. RAT on executive system is critical incident requiring immediate response and potential breach notification evaluation."
  },
  {
    id: 15,
    question: "An organization's endpoint protection flagged a file as malicious, but security analysts determine it's actually a legitimate system administration tool. What is this detection called?",
    options: [
      "True positive - correctly identified threat",
      "False positive - legitimate file incorrectly flagged as malicious",
      "False negative - malware not detected",
      "True negative - clean file correctly identified"
    ],
    correct: 1,
    explanation: "A FALSE POSITIVE occurs when security tools incorrectly identify legitimate software as malicious. Detection outcomes: (1) TRUE POSITIVE - malware correctly detected (good), (2) FALSE POSITIVE - legitimate file flagged as malware (annoying, wastes time), (3) TRUE NEGATIVE - clean file correctly identified as clean (good), (4) FALSE NEGATIVE - malware not detected (dangerous). False positive causes: (1) Heuristic detection too aggressive, (2) Behavioral analysis triggered by legitimate activity, (3) File similarity to known malware, (4) Outdated signatures. False positive impacts: (1) Alert fatigue, (2) Blocking legitimate business tools, (3) Wasted analyst time, (4) User frustration leading to security workarounds. Management: create exceptions/whitelists for verified legitimate tools, tune detection sensitivity, report false positives to vendor. Balance: too sensitive = many false positives; not sensitive enough = false negatives (missed malware)."
  }
];