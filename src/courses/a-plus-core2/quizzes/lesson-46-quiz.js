export const lesson46Quiz = [
  {
    id: 1,
    question: "A user's Windows 11 computer displays a UAC (User Account Control) prompt when they try to install software. They're logged in as a Standard User. What happens when they click 'Yes' on the UAC prompt?",
    options: [
      "The software installs immediately without further authentication",
      "They must enter administrator credentials to proceed with the installation",
      "The installation is blocked completely",
      "Windows automatically grants them temporary administrator rights"
    ],
    correct: 1,
    explanation: "When Standard Users trigger UAC prompts, they must provide administrator credentials to proceed. This implements the principle of least privilege - users operate with standard rights until elevation is needed. Administrator accounts only need to click 'Yes' (consent) while Standard Users must authenticate. UAC prevents unauthorized system changes and malware from making changes without user awareness. This is a critical Windows security feature."
  },
  {
    id: 2,
    question: "A company wants to encrypt all data on employee laptops to protect against theft. Which Windows feature provides full-disk encryption for the entire drive?",
    options: [
      "EFS (Encrypting File System)",
      "Windows Defender Firewall",
      "BitLocker Drive Encryption",
      "User Account Control (UAC)"
    ],
    correct: 2,
    explanation: "BitLocker provides full-disk encryption, encrypting the entire drive including system files, hibernation files, and page files. It requires TPM 2.0 (or can use password/USB key without TPM) and is available in Windows 11 Pro, Enterprise, and Education editions (not Home). BitLocker protects data if a device is lost or stolen. EFS encrypts individual files/folders. Windows Defender Firewall filters network traffic. UAC controls privilege elevation. For complete data protection, use BitLocker."
  },
  {
    id: 3,
    question: "After enabling BitLocker on a laptop, the system prompts for a recovery key during boot. The user doesn't have the recovery key. What should they have done when initially setting up BitLocker?",
    options: [
      "Disabled TPM to avoid this situation",
      "Saved or printed the recovery key and stored it securely (separate from the device)",
      "Used a shorter password",
      "Recovery keys aren't necessary with BitLocker"
    ],
    correct: 1,
    explanation: "When enabling BitLocker, Windows generates a recovery key that must be saved securely (print, save to USB, save to Microsoft account, save to file - but NOT on the encrypted drive). Recovery keys are needed if: TPM issues occur, hardware changes happen, password is forgotten. Without the recovery key, data is permanently inaccessible. Never disable TPM for convenience. Password length doesn't affect recovery key need. ALWAYS save recovery keys - data recovery is impossible without them."
  },
  {
    id: 4,
    question: "A user wants to encrypt individual files containing sensitive financial data on their Windows 11 Pro computer. The files need to remain encrypted when copied to other locations on the same drive. Which feature should they use?",
    options: [
      "BitLocker Drive Encryption",
      "EFS (Encrypting File System)",
      "Windows Defender Firewall",
      "Folder compression"
    ],
    correct: 1,
    explanation: "EFS (Encrypting File System) encrypts individual files and folders on NTFS volumes. Files remain encrypted when moved/copied to other NTFS locations on the same computer and are tied to the user's account. EFS uses the user's certificate and is transparent (files decrypt automatically for the owner). BitLocker encrypts entire drives, not individual files. Firewalls filter network traffic. Compression saves space but doesn't encrypt. For file-level encryption on NTFS, use EFS."
  },
  {
    id: 5,
    question: "Windows Defender Antivirus detects a suspicious file and moves it to Quarantine. What does quarantining a file do?",
    options: [
      "Deletes the file permanently",
      "Isolates the file in a secure location where it cannot execute or harm the system",
      "Sends the file to Microsoft for analysis",
      "Encrypts the file with a password"
    ],
    correct: 1,
    explanation: "Quarantine isolates suspicious files in a secure, encrypted location where they cannot execute or cause harm. This allows review before permanent deletion - if the file is a false positive, it can be restored. Quarantine doesn't delete files immediately (recovery option exists). Files aren't automatically sent to Microsoft (but can be submitted manually). Quarantine is different from encryption. It's a safety measure balancing security (removing threats) with caution (allowing verification of false positives)."
  },
  {
    id: 6,
    question: "An administrator wants to configure Windows Defender Firewall to block all incoming connections except Remote Desktop. Where should they configure this rule?",
    options: [
      "Windows Defender Antivirus settings",
      "Windows Defender Firewall > Allow an app or feature through Windows Defender Firewall",
      "BitLocker settings",
      "User Account Control settings"
    ],
    correct: 1,
    explanation: "Windows Defender Firewall settings allow creating inbound and outbound rules. Go to 'Allow an app or feature through Windows Defender Firewall' to enable specific applications (like Remote Desktop) while blocking others. You can also create custom rules in 'Advanced Settings' for specific ports/programs. Antivirus detects malware, not network traffic. BitLocker encrypts drives. UAC controls privilege elevation. The firewall controls what network traffic is allowed based on rules you configure."
  },
  {
    id: 7,
    question: "A user connects to a public Wi-Fi network at a coffee shop. Windows asks them to choose a network profile. Which profile should they select for maximum security?",
    options: [
      "Private network",
      "Public network",
      "Domain network",
      "All profiles provide equal security"
    ],
    correct: 1,
    explanation: "Public network profile applies the most restrictive firewall settings: blocks incoming connections, disables network discovery, disables file/printer sharing. This protects against attacks on untrusted networks. Private network allows discovery/sharing for trusted home/office networks. Domain network is for domain-joined computers. Profiles have different security levels. Always choose Public for untrusted networks (airports, hotels, coffee shops). You can change profiles later in Settings > Network & Internet."
  },
  {
    id: 8,
    question: "A company uses Group Policy to enforce security settings across all domain computers. An employee on a domain-joined computer tries to change their password requirements, but the settings are grayed out. Why?",
    options: [
      "The computer is malfunctioning",
      "Group Policy configured by the domain administrator overrides local settings",
      "Windows Defender is blocking the change",
      "The user needs to restart their computer first"
    ],
    correct: 1,
    explanation: "Group Policy (GPO) configured by domain administrators takes precedence over local settings and prevents users from changing managed settings (grayed out in the interface). This ensures consistent security policies across the organization: password requirements, account lockout policies, software restrictions, firewall rules. Local policies only apply when no domain policy exists. This is a key feature of domain management - centralized control of security settings that users cannot override."
  },
  {
    id: 9,
    question: "Windows Defender Antivirus is set to perform automatic scans, but a user wants to run a scan immediately because they suspect malware. Which type of scan should they run for a balance of speed and thoroughness?",
    options: [
      "Quick scan - checks common infection locations",
      "Full scan - checks all files and running programs",
      "Custom scan - select specific folders",
      "Offline scan - boots to Windows Defender Offline"
    ],
    correct: 0,
    explanation: "Quick scan checks the most common malware locations: startup folders, registry keys, system files, running processes. It completes in minutes and catches most infections. Full scan examines every file (hours for large drives) but is most thorough. Custom scan checks user-selected locations. Offline scan (Windows Defender Offline) boots outside Windows to remove persistent malware - use when regular scans fail. For suspected infection with time constraints, start with Quick scan, escalate to Full if needed."
  },
  {
    id: 10,
    question: "A technician notices Windows Defender Antivirus is turned off and cannot be re-enabled. What is the MOST likely cause?",
    options: [
      "Windows Defender needs to be reinstalled",
      "Another antivirus product is installed and has disabled Windows Defender",
      "The computer needs more RAM",
      "Windows Defender is permanently broken"
    ],
    correct: 1,
    explanation: "Windows Defender Antivirus automatically disables when third-party antivirus software is installed to prevent conflicts (two active antivirus programs cause problems). If you uninstall the third-party antivirus, Windows Defender re-enables automatically. This is normal behavior. Windows Defender is built into Windows and can't be traditionally 'reinstalled.' RAM doesn't affect antivirus enablement. If no third-party antivirus is present but Defender won't enable, check for malware disabling security or Group Policy restrictions."
  },
  {
    id: 11,
    question: "An organization wants to ensure all Windows 11 computers receive the latest security patches automatically. Which feature should they enable or configure?",
    options: [
      "Windows Defender Firewall",
      "BitLocker Drive Encryption",
      "Windows Update with automatic installation of updates",
      "User Account Control (UAC)"
    ],
    correct: 2,
    explanation: "Windows Update delivers security patches, feature updates, and driver updates. Configure it to automatically download and install updates (Settings > Windows Update > Advanced options). For organizations, use Windows Update for Business or WSUS to control timing while ensuring security updates deploy. Firewalls filter traffic. BitLocker encrypts drives. UAC controls elevation. Regular patching is critical security - most breaches exploit known vulnerabilities that patches fix. Never disable Windows Update on production systems."
  },
  {
    id: 12,
    question: "A user enables BitLocker on their laptop but forgets the PIN they set. They have the recovery key saved. What can they do?",
    options: [
      "The data is permanently lost",
      "Boot the computer and enter the recovery key when prompted",
      "Reset the laptop to factory settings without losing data",
      "Call Microsoft to decrypt the drive"
    ],
    correct: 1,
    explanation: "The BitLocker recovery key unlocks the drive when the normal unlock method (PIN, password, TPM) fails. Boot the computer, and when BitLocker prompts for the PIN, select recovery key option and enter the 48-digit recovery key. After unlocking, you can change/remove the PIN. This is why saving recovery keys is critical. Data isn't lost if you have the recovery key. Factory reset erases data. Microsoft doesn't have your recovery key - only you should have it."
  },
  {
    id: 13,
    question: "An administrator wants to use Local Security Policy to require all passwords to be at least 14 characters. On which Windows 11 edition is Local Security Policy (secpol.msc) available?",
    options: [
      "Windows 11 Home only",
      "Windows 11 Pro, Enterprise, and Education (not Home)",
      "All Windows 11 editions",
      "Only Windows Server editions"
    ],
    correct: 1,
    explanation: "Local Security Policy (secpol.msc) is available in Windows 11 Pro, Enterprise, and Education editions but NOT in Home edition. It configures password policies, account lockout policies, user rights assignments, and security options locally. Home edition users must use Group Policy editor workarounds or upgrade to Pro. This is a key difference between Home and Pro - Pro has enterprise management tools. Domain Group Policy is even more powerful than local policy."
  },
  {
    id: 14,
    question: "A computer is configured with an account lockout policy: lock account after 5 failed login attempts for 30 minutes. A user enters their password incorrectly 6 times. What happens?",
    options: [
      "The account is permanently deleted",
      "The account is locked for 30 minutes (or until an administrator unlocks it)",
      "Windows allows unlimited additional attempts",
      "The computer shuts down automatically"
    ],
    correct: 1,
    explanation: "Account lockout policies automatically lock accounts after a specified threshold of failed attempts, preventing brute-force password attacks. The account remains locked for the lockout duration (30 minutes in this case) or until an administrator manually unlocks it. The user cannot log in during this time. Accounts aren't deleted. After lockout expires, attempts reset. This protects against automated password guessing. Typical settings: 5-10 attempt threshold, 15-30 minute duration. Administrators can unlock early via User Management."
  },
  {
    id: 15,
    question: "A technician wants to check the Windows Security dashboard to verify all protection areas are active. Where do they access this centralized security overview?",
    options: [
      "Control Panel > Windows Defender",
      "Settings > Privacy & security > Windows Security",
      "Task Manager > Security tab",
      "Device Manager > Security Devices"
    ],
    correct: 1,
    explanation: "Windows Security (formerly Windows Defender Security Center) provides a centralized dashboard at Settings > Privacy & security > Windows Security (or click the shield icon in system tray). It shows status of: Virus & threat protection, Account protection, Firewall & network protection, App & browser control, Device security. All protection areas should show green checkmarks. Yellow/red indicators require attention. Control Panel has limited security options. Task Manager doesn't have a Security tab. Device Manager manages hardware. Windows Security is the central hub."
  }
];