export const lesson44Flashcards = [
  {
    id: 1,
    front: "What is a virus?",
    back: "Malicious code that attaches to files/programs and replicates when executed. Requires host file to spread, needs user action (opening infected file). Can damage files, steal data, spread to other files. Traditional malware type."
  },
  {
    id: 2,
    front: "What is a worm?",
    back: "Self-replicating malware that spreads automatically across networks without user action. No host file needed, exploits vulnerabilities, consumes bandwidth, can spread rapidly. More dangerous than virus - autonomous propagation. Example: WannaCry, Conficker."
  },
  {
    id: 3,
    front: "What is the difference between a virus and a worm?",
    back: "Virus: needs host file, requires user action to spread, slower propagation. Worm: standalone, self-replicating, spreads automatically via network, no user action needed, rapid spread. Both are malware but different infection methods."
  },
  {
    id: 4,
    front: "What is a Trojan horse?",
    back: "Malware disguised as legitimate software. User voluntarily installs thinking it's useful program. Doesn't self-replicate like virus/worm. Opens backdoor, steals data, downloads more malware. Named after Greek mythology. Example: fake antivirus."
  },
  {
    id: 5,
    front: "What is ransomware?",
    back: "Malware that encrypts user files and demands payment for decryption key. Bitcoin payment common. Encrypts documents, photos, databases. Spreads via phishing, exploit kits, RDP. Prevention: backups (offline), patches, user training. Major threat to businesses."
  },
  {
    id: 6,
    front: "What should you do if infected with ransomware?",
    back: "Do NOT pay ransom (no guarantee of decryption), isolate infected system immediately, report to authorities, restore from backup, wipe and reinstall system. Never connect backup drives during infection. Prevention better than cure - offline backups critical."
  },
  {
    id: 7,
    front: "What is spyware?",
    back: "Software that secretly monitors user activity and sends data to attacker. Tracks browsing, keystrokes, screenshots, credentials. Adware variant shows unwanted ads. Slows system, privacy violation. Often bundled with free software. Use anti-malware to remove."
  },
  {
    id: 8,
    front: "What is a rootkit?",
    back: "Malware that hides deep in operating system with admin/root privileges. Conceals its presence and other malware. Modifies kernel, drivers, firmware. Very difficult to detect and remove. Often requires reinstallation.Bootkit variant infects boot process."
  },
  {
    id: 9,
    front: "What is a keylogger?",
    back: "Records keystrokes to steal passwords, credit cards, sensitive data. Hardware (USB device) or software-based. Captures everything typed. Spyware category. Prevention: anti-malware, on-screen keyboards for passwords, MFA."
  },
  {
    id: 10,
    front: "What is a botnet?",
    back: "Network of infected computers (bots/zombies) controlled remotely by attacker. Used for DDoS attacks, spam, cryptocurrency mining, credential stuffing. Infected systems often don't know they're compromised. C&C (Command and Control) server coordinates."
  },
  {
    id: 11,
    front: "What is a logic bomb?",
    back: "Malicious code that triggers on specific condition - date, event, action. Lies dormant until trigger activated. Example: disgruntled employee sets code to delete files on termination date. Insider threat. Difficult to detect before activation."
  },
  {
    id: 12,
    front: "What are common malware symptoms?",
    back: "Slow performance, excessive pop-ups, browser redirects, unexpected crashes, high CPU/network usage, disabled antivirus, missing/changed files, new toolbars, strange emails sent from your account, cryptocurrency miner CPU spikes."
  },
  {
    id: 13,
    front: "What is a browser redirect/hijacker?",
    back: "Malware that changes browser settings - homepage, search engine, new tab page. Redirects searches to malicious sites, shows ads. Often bundled with free software. Remove via anti-malware, reset browser settings, check extensions/add-ons."
  },
  {
    id: 14,
    front: "What prevention methods protect against malware?",
    back: "Antivirus/anti-malware software (keep updated), firewall enabled, software patches current, user education/awareness, email filtering, pop-up blockers, disable autorun, strong passwords, MFA, regular backups, least privilege accounts."
  },
  {
    id: 15,
    front: "What is antivirus/anti-malware software?",
    back: "Detects and removes malicious software. Signature-based detection (known malware), heuristic analysis (suspicious behavior), real-time scanning, scheduled scans, quarantine. Keep definitions updated daily. Examples: Windows Defender, Malwarebytes, Norton, McAfee."
  },
  {
    id: 16,
    front: "What is signature-based detection?",
    back: "Antivirus method comparing files to database of known malware signatures (patterns). Fast, accurate for known threats. Cannot detect new/zero-day malware until signature added. Requires regular definition updates. Complement with heuristic/behavior analysis."
  },
  {
    id: 17,
    front: "What is heuristic analysis?",
    back: "Antivirus method detecting unknown malware by analyzing behavior and code patterns. Identifies suspicious actions - file encryption, registry modification, network connections. Detects new threats before signatures available. Higher false positives than signature-based."
  },
  {
    id: 18,
    front: "Why should you keep software updated?",
    back: "Security patches fix vulnerabilities that malware exploits. Zero-day exploits target unpatched systems. Operating system, applications, firmware all need updates. Enable automatic updates when possible. Windows Update, application auto-updates. Patch Tuesday (second Tuesday monthly)."
  },
  {
    id: 19,
    front: "What is a zero-day vulnerability?",
    back: "Security flaw unknown to vendor, no patch available. 'Zero days' to fix before exploitation. Highly valuable to attackers. Exploited before discovery/patch. Defense: behavior monitoring, network security, least privilege. Patches released when discovered."
  },
  {
    id: 20,
    front: "Why disable autorun/autoplay?",
    back: "Prevents automatic execution when USB/media inserted. Malware can spread via infected USB drives using autorun. Disable in Control Panel or Group Policy. Require manual approval before running files from removable media."
  },
  {
    id: 21,
    front: "What is user education for malware prevention?",
    back: "Training users to recognize threats - phishing emails, suspicious links, unknown attachments, social engineering. Don't click suspicious links, verify sender, report suspicious emails, don't download from untrusted sources. Humans often weakest link."
  },
  {
    id: 22,
    front: "What are vulnerabilities that lead to malware infections?",
    back: "Unpatched systems/applications, default credentials, open ports/services, weak passwords, missing antivirus, disabled firewall, outdated software, misconfigurations, unnecessary services running, lack of user training."
  },
  {
    id: 23,
    front: "What is cryptojacking/cryptocurrency mining malware?",
    back: "Malware using victim's CPU/GPU to mine cryptocurrency (Bitcoin, Monero) for attacker. High CPU usage, slow performance, overheating, increased electricity. Browser-based (JavaScript) or installed malware. Becoming more common than ransomware."
  },
  {
    id: 24,
    front: "What is adware?",
    back: "Software displaying unwanted advertisements - pop-ups, banners, fake alerts. Revenue from clicks. Often bundled with legitimate software. Annoying but less dangerous than other malware. May track browsing. Remove with anti-malware, be careful during software installation."
  },
  {
    id: 25,
    front: "What is a fileless malware attack?",
    back: "Malware that operates in memory without writing files to disk. Uses legitimate tools (PowerShell, WMI) for malicious purposes. Harder to detect - no file signatures. Prevention: disable/restrict PowerShell, behavior monitoring, application whitelisting."
  },
  {
    id: 26,
    front: "What security principles help prevent malware?",
    back: "Least privilege (limit user permissions), defense in depth (multiple layers), principle of fail secure, separation of duties, user awareness training, regular backups, patch management, network segmentation."
  },
  {
    id: 27,
    front: "What is the principle of least privilege?",
    back: "Users/programs get minimum permissions needed for tasks. Standard user accounts for daily work, admin only when necessary. Limits malware damage - can't install system-wide if user lacks permissions. Essential security practice."
  },
  {
    id: 28,
    front: "What is defense in depth for malware protection?",
    back: "Multiple security layers working together. Firewall, antivirus, email filtering, user training, patches, backups, EDR, network segmentation. If one layer fails, others protect. No single point of failure. Comprehensive security strategy."
  },
  {
    id: 29,
    front: "Why are offline backups critical for ransomware protection?",
    back: "Ransomware encrypts accessible drives including network/USB backups. Offline/air-gapped backups can't be encrypted by malware. 3-2-1 rule: 3 copies, 2 media types, 1 offsite/offline. Rotate backup drives, don't leave connected. Only recovery option if infected."
  },
  {
    id: 30,
    front: "What is the difference between antivirus and anti-malware?",
    back: "Antivirus: traditionally focuses on viruses, worms, Trojans. Anti-malware: broader scope includes adware, spyware, PUPs (Potentially Unwanted Programs). Terms often used interchangeably now. Modern solutions protect against all threats. Use comprehensive security suite."
  }
];