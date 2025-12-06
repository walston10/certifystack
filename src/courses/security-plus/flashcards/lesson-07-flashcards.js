// Lesson 7: Malware Types and Indicators
// Security+ (SY0-701) - Domain 2.0: Threats, Vulnerabilities, and Mitigations

export const lesson7Flashcards = [
  {
    id: 1,
    front: "What is Malware?",
    back: "Malicious software designed to damage, disrupt, or gain unauthorized access to systems. Includes viruses, worms, trojans, ransomware, and more."
  },
  {
    id: 2,
    front: "What is a Virus?",
    back: "Malware that attaches to legitimate files and spreads when those files are executed. Requires user action to spread. Infects other files on the system."
  },
  {
    id: 3,
    front: "What is a Worm?",
    back: "Self-replicating malware that spreads automatically without user action. Exploits network vulnerabilities to propagate. Can spread very rapidly across networks."
  },
  {
    id: 4,
    front: "What's the key difference between a virus and a worm?",
    back: "Virus: requires host file and user action to spread. Worm: self-replicating, spreads automatically without user interaction."
  },
  {
    id: 5,
    front: "What is a Trojan (Trojan Horse)?",
    back: "Malware disguised as legitimate software. User installs thinking it's useful, but it contains hidden malicious functions. Doesn't self-replicate."
  },
  {
    id: 6,
    front: "What is Ransomware?",
    back: "Malware that encrypts victim's files and demands payment for decryption key. May also threaten to leak stolen data (double extortion)."
  },
  {
    id: 7,
    front: "What is Spyware?",
    back: "Malware that secretly monitors user activity. Collects browsing habits, credentials, personal information. Often bundled with free software."
  },
  {
    id: 8,
    front: "What is a Keylogger?",
    back: "Malware that records keystrokes to capture passwords, credit cards, and sensitive data. Can be software-based or hardware devices."
  },
  {
    id: 9,
    front: "What is a Rootkit?",
    back: "Malware that hides deep in the OS, often at kernel level. Extremely difficult to detect and remove. May require complete OS reinstall."
  },
  {
    id: 10,
    front: "Why are Rootkits so dangerous?",
    back: "They hide themselves and other malware from detection tools. Can intercept system calls to report false information. Persist through reboots."
  },
  {
    id: 11,
    front: "What is a Backdoor?",
    back: "Hidden access method that bypasses normal authentication. Allows attackers to return to compromised system. May be installed by trojans or left by developers."
  },
  {
    id: 12,
    front: "What is a Logic Bomb?",
    back: "Malicious code that triggers on a specific condition (date, event, user action). Lies dormant until trigger condition is met. Often planted by insiders."
  },
  {
    id: 13,
    front: "What is a RAT (Remote Access Trojan)?",
    back: "Trojan that gives attacker remote control of infected system. Can access files, camera, microphone, and execute commands. Used for surveillance and data theft."
  },
  {
    id: 14,
    front: "What is a Botnet?",
    back: "Network of infected computers (bots/zombies) controlled by attacker. Used for DDoS attacks, spam, cryptocurrency mining. Controlled via command-and-control (C2) server."
  },
  {
    id: 15,
    front: "What is a Bot/Zombie?",
    back: "An individual infected computer that's part of a botnet. Controlled remotely without owner's knowledge. Performs tasks commanded by botnet operator."
  },
  {
    id: 16,
    front: "What is Fileless Malware?",
    back: "Malware that operates entirely in memory without writing files to disk. Uses legitimate system tools (PowerShell, WMI). Harder to detect with traditional antivirus."
  },
  {
    id: 17,
    front: "Why is Fileless Malware difficult to detect?",
    back: "Leaves no files on disk for antivirus to scan. Uses trusted system tools. Disappears on reboot (unless persistence mechanism added). Evades signature-based detection."
  },
  {
    id: 18,
    front: "What tools do Fileless Malware commonly abuse?",
    back: "PowerShell, WMI (Windows Management Instrumentation), .NET framework, macros in Office documents, and other living-off-the-land binaries (LOLBins)."
  },
  {
    id: 19,
    front: "What is a PUP (Potentially Unwanted Program)?",
    back: "Software that isn't strictly malware but is unwanted. Includes adware, browser toolbars, bundled software. Often installed through deceptive practices."
  },
  {
    id: 20,
    front: "What is Bloatware?",
    back: "Pre-installed software on new devices that's unwanted and wastes resources. May include trial software, manufacturer utilities. Can introduce security vulnerabilities."
  },
  {
    id: 21,
    front: "What is Adware?",
    back: "Software that displays unwanted advertisements. May track browsing for targeted ads. Often bundled with free software. Considered a PUP."
  },
  {
    id: 22,
    front: "What are common indicators of malware infection?",
    back: "Slow performance, unexpected pop-ups, browser redirects, disabled security software, unknown processes, unusual network traffic, file changes."
  },
  {
    id: 23,
    front: "What does unusual outbound network traffic indicate?",
    back: "Possible malware communicating with C2 server, exfiltrating data, or participating in botnet activity. Should be investigated immediately."
  },
  {
    id: 24,
    front: "Why might security software become disabled?",
    back: "Malware often disables antivirus/firewall to avoid detection. If security tools unexpectedly turn off or won't run, suspect malware infection."
  },
  {
    id: 25,
    front: "What does finding unknown processes in Task Manager suggest?",
    back: "Possible malware running on system. Research unfamiliar process names. Malware often uses names similar to legitimate processes."
  },
  {
    id: 26,
    front: "What is a drive-by download?",
    back: "Malware downloaded automatically when visiting a compromised website. No user action required beyond visiting the page. Exploits browser vulnerabilities."
  },
  {
    id: 27,
    front: "What is cryptojacking?",
    back: "Unauthorized use of victim's computer to mine cryptocurrency. May be malware or malicious website scripts. Causes high CPU usage and slow performance."
  },
  {
    id: 28,
    front: "How does ransomware typically spread?",
    back: "Phishing emails with malicious attachments, drive-by downloads, exploiting vulnerabilities (like RDP), or through other malware already on the system."
  },
  {
    id: 29,
    front: "What is double extortion ransomware?",
    back: "Ransomware that both encrypts files AND steals data. Threatens to publish stolen data if ransom isn't paid, even if victim has backups."
  },
  {
    id: 30,
    front: "What's the best defense against ransomware?",
    back: "Regular offline backups, security awareness training, patching systems, email filtering, endpoint protection, and network segmentation to limit spread."
  }
];