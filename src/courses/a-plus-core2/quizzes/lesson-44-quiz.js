export const lesson44Quiz = [
  {
    id: 1,
    question: "A user clicks on an email attachment that appears to be an invoice. The file encrypts all documents on their computer and displays a message demanding Bitcoin payment to decrypt the files. What type of malware is this?",
    options: [
      "Virus",
      "Worm",
      "Ransomware",
      "Spyware"
    ],
    correct: 2,
    explanation: "Ransomware encrypts user files and demands payment (usually cryptocurrency) for the decryption key. It's one of the most damaging malware types. Prevention: maintain offline backups, keep software updated, use antivirus, train users to avoid suspicious emails. Never pay the ransom - there's no guarantee of file recovery. A virus spreads by attaching to files. A worm self-replicates. Spyware monitors activity. Ransomware's signature is encryption plus ransom demand."
  },
  {
    id: 2,
    question: "A company's computers are infected with malware that self-replicates and spreads across the network without any user action, consuming network bandwidth and slowing systems. What type of malware is this MOST likely?",
    options: [
      "Virus - it requires user action to spread",
      "Worm - it self-replicates and spreads automatically",
      "Trojan - it disguises itself as legitimate software",
      "Keylogger - it records keystrokes"
    ],
    correct: 1,
    explanation: "Worms are self-replicating malware that spread automatically across networks without user intervention. They exploit network vulnerabilities to propagate, consuming bandwidth and system resources. Famous examples: WannaCry, Conficker. Viruses require user action (opening files, running programs). Trojans masquerade as legitimate software but don't self-replicate. Keyloggers record input but don't spread. Worms' defining characteristic is autonomous spreading - no clicks required."
  },
  {
    id: 3,
    question: "A user downloads what appears to be a free game from an untrusted website. After installation, the software opens a backdoor allowing an attacker remote access to the computer. What type of malware is this?",
    options: [
      "Virus",
      "Trojan",
      "Worm",
      "Adware"
    ],
    correct: 1,
    explanation: "Trojans (Trojan horses) disguise themselves as legitimate or desirable software but contain malicious payloads like backdoors, keyloggers, or data theft tools. They don't self-replicate (unlike viruses/worms). Prevention: download software only from trusted sources, use antivirus, avoid pirated software. Named after the Greek myth - they appear harmless but hide threats. Viruses attach to files. Worms self-replicate. Adware displays unwanted ads."
  },
  {
    id: 4,
    question: "A computer exhibits these symptoms: extremely slow performance, frequent pop-up advertisements appearing even when browsers are closed, browser homepage changed without permission, and new toolbars installed. What is MOST likely installed?",
    options: [
      "Legitimate software updates",
      "Adware or potentially unwanted programs (PUPs)",
      "Firmware updates",
      "Operating system patches"
    ],
    correct: 1,
    explanation: "These symptoms indicate adware or PUPs (Potentially Unwanted Programs) - software that displays excessive ads, changes browser settings, and degrades performance. Often bundled with free software downloads. Removal: use anti-malware tools (Malwarebytes), uninstall suspicious programs, reset browser settings, run antivirus scans. Prevention: always choose 'Custom' installation to decline bundled software. Legitimate updates don't hijack browsers or install toolbars without permission."
  },
  {
    id: 5,
    question: "A technician investigates a compromised system and discovers malware that has modified system files and registry entries to hide its presence, making it extremely difficult to detect and remove. What type of malware is this?",
    options: [
      "Adware",
      "Keylogger",
      "Rootkit",
      "Spam bot"
    ],
    correct: 2,
    explanation: "Rootkits hide deep in the operating system (kernel level, boot sector, firmware), modifying system components to conceal themselves and other malware. They're extremely difficult to detect and remove. Detection requires specialized tools or booting from clean media. Some rootkits survive OS reinstallation. Prevention: keep systems patched, use UEFI Secure Boot, use rootkit scanners. Adware shows ads. Keyloggers record input. Spam bots send emails. Rootkits' defining trait is deep-level hiding."
  },
  {
    id: 6,
    question: "A user's computer is part of a large network of infected computers being remotely controlled by an attacker to send spam emails and launch DDoS attacks. What is this network of compromised computers called?",
    options: [
      "Virus network",
      "Botnet",
      "Worm farm",
      "Trojan army"
    ],
    correct: 1,
    explanation: "A botnet is a network of compromised computers (bots/zombies) remotely controlled by an attacker (botmaster) to perform coordinated attacks: DDoS, spam distribution, cryptocurrency mining, or credential theft. Individual users often don't know their computer is part of a botnet. Prevention: antivirus, firewalls, software updates, monitoring unusual network activity. Famous botnets: Mirai, Zeus. Detecting participation: unexplained network traffic, slow performance, high CPU usage."
  },
  {
    id: 7,
    question: "An employee notices their passwords are being stolen even though they only enter them on legitimate websites. Investigation reveals software secretly recording every keystroke. What type of malware is this?",
    options: [
      "Adware",
      "Ransomware",
      "Keylogger",
      "Worm"
    ],
    correct: 2,
    explanation: "Keyloggers record keystrokes to capture passwords, credit card numbers, and sensitive information. They can be software-based (malware) or hardware-based (physical devices). Software keyloggers often arrive via trojans or phishing. Prevention: antivirus, avoid suspicious downloads, use virtual keyboards for sensitive data, enable multi-factor authentication (reduces password value). Detection: anti-malware scans, monitor for suspicious processes. Adware shows ads. Ransomware encrypts files. Worms self-replicate."
  },
  {
    id: 8,
    question: "A computer is running extremely slowly. Task Manager shows 100% CPU usage by an unknown process. Research reveals the computer is infected with malware that uses system resources to generate cryptocurrency for the attacker. What type of malware activity is this?",
    options: [
      "Cryptojacking/cryptocurrency miner",
      "Ransomware",
      "Spyware",
      "Logic bomb"
    ],
    correct: 0,
    explanation: "Cryptojacking or cryptocurrency mining malware uses victim computers' CPU/GPU resources to mine cryptocurrency for attackers. Symptoms: extreme slowdown, high CPU usage, overheating, increased electricity bills. Found on both computers and websites (browser-based miners). Prevention: antivirus, ad blockers, browser extensions that block miners, monitor system resources. Ransomware encrypts files. Spyware monitors activity. Logic bombs trigger on events. Cryptominers' signature is sustained high resource usage."
  },
  {
    id: 9,
    question: "A user receives an email warning that their bank account has been compromised and includes a link to 'verify account information.' The link leads to a fake website that looks identical to their real bank. What type of attack is this email part of?",
    options: [
      "This is legitimate bank communication",
      "Phishing attack delivering or enabling malware/credential theft",
      "Software update notification",
      "Spam advertising"
    ],
    correct: 1,
    explanation: "This is a phishing attack - fraudulent emails/messages designed to steal credentials or deliver malware through fake websites or malicious attachments. The fake site captures login credentials or installs malware. Prevention: verify sender addresses, never click links in unexpected emails, manually navigate to sites, enable MFA. Banks never request credentials via email. Look for red flags: urgency, threats, spelling errors, suspicious links. Phishing is a primary malware delivery method."
  },
  {
    id: 10,
    question: "A programmer creates malware designed to remain dormant until a specific date and time, at which point it will delete critical system files. What type of malware is this?",
    options: [
      "Virus",
      "Worm",
      "Logic bomb",
      "Rootkit"
    ],
    correct: 2,
    explanation: "Logic bombs are malicious code that remains dormant until triggered by a specific event: date/time, user action, or system condition. Often used by disgruntled employees for sabotage (trigger after termination). They're difficult to detect before activation. Prevention: code reviews, access controls, monitoring file changes, audit logs. Famous example: UBS banker's logic bomb. Viruses/worms spread actively. Rootkits hide continuously. Logic bombs wait for triggers."
  },
  {
    id: 11,
    question: "A user's antivirus software is disabled and cannot be restarted. When they try to visit antivirus vendor websites, the browser is redirected to random sites. What malware symptom is this?",
    options: [
      "Normal browser behavior",
      "Malware protecting itself by disabling security software and blocking security websites",
      "Internet service provider maintenance",
      "Browser update in progress"
    ],
    correct: 1,
    explanation: "Many malware variants protect themselves by disabling antivirus, blocking security websites, and preventing removal tools from downloading. This is a strong infection indicator. Solution: boot into Safe Mode with Networking, use offline scanners (bootable antivirus USB), or use a clean computer to download removal tools. Never assume disabled antivirus is coincidence. Redirect to random sites prevents security software downloads. This indicates active, sophisticated malware."
  },
  {
    id: 12,
    question: "An organization wants to prevent malware from USB drives. Which security practice is MOST effective?",
    options: [
      "Allow all USB devices - blocking them inconveniences users",
      "Disable AutoRun/AutoPlay and implement USB device policies",
      "Only use USB 2.0 devices",
      "Paint USB ports red as a warning"
    ],
    correct: 1,
    explanation: "Disable AutoRun/AutoPlay (prevents automatic malware execution from USB/optical media) and implement USB device policies (allow only approved devices, disable USB storage via Group Policy, use endpoint protection). Educate users about USB risks. Malware spreads via infected USBs (Stuxnet used this). USB version doesn't affect malware risk. Physical port marking doesn't prevent malware. Balance security with usability through policy and technology controls."
  },
  {
    id: 13,
    question: "A company wants to protect against zero-day malware that signature-based antivirus might miss. What additional security layer should they implement?",
    options: [
      "Install more antivirus products",
      "Disable all internet access",
      "Implement behavior-based detection, application whitelisting, and sandbox analysis",
      "Only use Windows Defender"
    ],
    correct: 2,
    explanation: "Signature-based antivirus misses zero-day threats (unknown malware). Add layers: behavior-based detection (monitors suspicious actions), application whitelisting (only approved apps run), sandbox analysis (test unknown files in isolated environments), HIPS (Host Intrusion Prevention). Multiple antivirus products conflict. Disabling internet isn't practical. No single antivirus catches everything. Defense-in-depth with multiple detection methods provides best protection against new threats."
  },
  {
    id: 14,
    question: "After removing malware from a computer, what should a technician do to prevent reinfection?",
    options: [
      "Immediately return the computer to the user - the malware is gone",
      "Update OS and software, change passwords, enable security features, educate user on safe practices",
      "Reinstall the antivirus that failed to prevent the infection",
      "Disable Windows Update to prevent new malware"
    ],
    correct: 1,
    explanation: "Post-infection tasks: update OS and all software (patch vulnerabilities exploited), change all passwords (assume credentials compromised), verify security software is active and updated, scan again from clean boot media, educate user (how infection occurred, prevention), monitor for reinfection signs. Simply removing malware isn't enough - must fix the entry point and secure the system. Enable Windows Update (security patches critical). Consider how infection occurred and prevent recurrence."
  },
  {
    id: 15,
    question: "A user reports random browser pop-ups, homepage changes, and new browser toolbars. What should the technician do FIRST to address this PUP/adware infection?",
    options: [
      "Immediately reinstall Windows",
      "Run anti-malware software and reset browser settings",
      "Replace the hard drive",
      "Ignore it - pop-ups are normal"
    ],
    correct: 1,
    explanation: "For PUPs/adware (less severe than rootkits/ransomware): Run anti-malware tools (Malwarebytes, AdwCleaner), uninstall suspicious programs via Programs and Features, reset browsers to default settings, clear cache/cookies, check browser extensions. OS reinstallation is overkill for adware. Hard drive replacement unnecessary. Pop-ups/toolbars aren't normal. Start with least invasive remediation. Escalate to more drastic measures only if needed. Most adware/PUPs can be removed with proper tools."
  }
];