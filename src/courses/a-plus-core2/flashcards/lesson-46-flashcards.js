export const lesson46Flashcards = [
  {
    id: 1,
    front: "What is Windows Defender Antivirus?",
    back: "Built-in antivirus for Windows 10/11. Real-time protection against malware, viruses, spyware. Cloud-delivered protection, automatic sample submission. Free, enabled by default. Good baseline protection. Settings → Privacy & security → Windows Security."
  },
  {
    id: 2,
    front: "What types of scans does Windows Defender offer?",
    back: "Quick scan (common locations, running processes - minutes), Full scan (entire system - hours), Custom scan (specific folders/drives), Offline scan (boots to special environment for rootkits). Schedule scans or run on-demand."
  },
  {
    id: 3,
    front: "What are virus and threat protection definitions?",
    back: "Database of known malware signatures. Updated automatically via Windows Update. Check last update time in Windows Security. Manual update: Windows Security → Virus & threat protection → Check for updates. Keep current for protection."
  },
  {
    id: 4,
    front: "What is the Windows Defender quarantine?",
    back: "Isolated storage for detected threats. Files encrypted and can't execute. Review quarantined items, restore false positives, or permanently remove. Windows Security → Virus & threat protection → Protection history. Can restore if legitimate."
  },
  {
    id: 5,
    front: "What is Windows Defender Firewall?",
    back: "Built-in firewall filtering network traffic. Inbound/outbound rules, three profiles (Domain, Private, Public). Enabled by default. Control Panel → Windows Defender Firewall. Blocks unauthorized access, configurable per application/port."
  },
  {
    id: 6,
    front: "What are the three Windows Firewall profiles?",
    back: "Domain (connected to domain network - least restrictive), Private (home/work trusted networks - moderate), Public (untrusted networks - most restrictive). Different rules per profile. Automatically switches based on network type."
  },
  {
    id: 7,
    front: "How do you allow an app through Windows Firewall?",
    back: "Windows Defender Firewall → Allow an app through firewall → Change settings → check app and select network types (Domain/Private/Public) → OK. Or create custom rule in Advanced settings for specific ports/protocols."
  },
  {
    id: 8,
    front: "What is Windows Defender Firewall with Advanced Security?",
    back: "MMC snap-in for detailed firewall configuration. Create inbound/outbound rules, connection security rules, monitor active connections. Access: wf.msc or Windows Defender Firewall → Advanced settings. For IT professionals, granular control."
  },
  {
    id: 9,
    front: "What is Windows Security Center?",
    back: "Central hub for Windows security features. Monitors: antivirus, firewall, app & browser control, device security, account protection. Color-coded status (green good, yellow warning, red action needed). Settings → Privacy & security → Windows Security."
  },
  {
    id: 10,
    front: "What is User Account Control (UAC)?",
    back: "Security feature prompting for administrator permission before system changes. Prevents unauthorized changes, malware installation. Dims screen (secure desktop). Standard users enter admin password. Slider adjusts sensitivity. Don't disable - essential protection."
  },
  {
    id: 11,
    front: "What triggers UAC prompts?",
    back: "Installing software, making system changes, modifying Windows settings, changing other user accounts, running programs as administrator, adding/removing hardware drivers, changing UAC settings itself. Protects against unauthorized modifications."
  },
  {
    id: 12,
    front: "What are UAC elevation levels?",
    back: "Always notify (highest - prompts for all changes), Notify only when programs try to make changes (default), Same as above but no secure desktop (less secure), Never notify (disabled - not recommended). Configure in UAC settings."
  },
  {
    id: 13,
    front: "What is BitLocker Drive Encryption?",
    back: "Full disk encryption protecting data if device stolen/lost. Encrypts entire drive, requires authentication to boot. Uses TPM chip or password/USB key. Available in Pro, Enterprise, Education - NOT Home. Transparent to users after setup."
  },
  {
    id: 14,
    front: "What is required to use BitLocker?",
    back: "Windows Pro or higher, TPM 1.2+ chip (or USB key for systems without TPM), UEFI firmware, administrator rights. Enable: Control Panel → BitLocker Drive Encryption → Turn on BitLocker. Save recovery key securely."
  },
  {
    id: 15,
    front: "What is a BitLocker recovery key?",
    back: "48-digit password to unlock drive if forgot PIN or TPM fails. CRITICAL to save - without it, data permanently inaccessible. Save to: Microsoft account, USB drive, print, file. Store securely separate from device."
  },
  {
    id: 16,
    front: "What is EFS (Encrypting File System)?",
    back: "NTFS feature encrypting individual files/folders (not whole drive). Transparent to user - automatic encrypt/decrypt. Green filename in Explorer. User's certificate required. Available in Pro/Enterprise. Files encrypted at rest, decrypted when accessed."
  },
  {
    id: 17,
    front: "What's the difference between BitLocker and EFS?",
    back: "BitLocker: full disk encryption, protects entire drive, requires TPM, all users locked out without key. EFS: file-level encryption, selective files/folders, certificate-based, per-user. Use BitLocker for device theft, EFS for shared computers."
  },
  {
    id: 18,
    front: "What is Windows Update?",
    back: "Automatic updates for Windows OS, drivers, Microsoft software. Security patches, bug fixes, feature updates. Critical for security. Settings → Windows Update. Schedule restarts, pause updates (Pro/Enterprise), check for updates manually."
  },
  {
    id: 19,
    front: "What types of Windows Updates exist?",
    back: "Quality updates (monthly security patches - Patch Tuesday), Feature updates (major versions - twice yearly), Driver updates, Definition updates (Windows Defender), Optional updates (non-security). Critical patches install automatically."
  },
  {
    id: 20,
    front: "How do you configure Windows Update settings?",
    back: "Settings → Windows Update → Advanced options. Active hours (prevent restarts during work), pause updates (up to 35 days), download over metered connections, receive updates for other Microsoft products. Pro/Enterprise can defer updates."
  },
  {
    id: 21,
    front: "What is Group Policy (GPO)?",
    back: "Centralized configuration management for domain-joined computers. Controls security settings, software deployment, user restrictions, password policies. Domain controller manages policies, computers download/apply. Requires Pro/Enterprise, Active Directory domain."
  },
  {
    id: 22,
    front: "How do you access Local Group Policy?",
    back: "Run gpedit.msc (not available in Home edition). Computer Configuration (applies to computer), User Configuration (applies to user). Configure password policies, security settings, software restrictions. Changes affect all users on that computer."
  },
  {
    id: 23,
    front: "What security policies can Group Policy control?",
    back: "Password complexity, account lockout, user rights, audit policies, firewall rules, Windows Update settings, software installation, USB access, BitLocker enforcement, AppLocker rules. Centralized enforcement across organization."
  },
  {
    id: 24,
    front: "What is Local Security Policy?",
    back: "Configure security settings on local computer (not domain). Access: secpol.msc (Pro/Enterprise only). Set password policies, account lockout, user rights, audit policies, security options. Subset of Group Policy focused on security."
  },
  {
    id: 25,
    front: "What password policies can be set?",
    back: "Password minimum length, complexity requirements (upper/lower/numbers/symbols), password age (maximum/minimum days), password history (prevent reuse), account lockout threshold, lockout duration. Configure in Local Security Policy or Group Policy."
  },
  {
    id: 26,
    front: "What is account lockout policy?",
    back: "Locks account after failed login attempts. Account lockout threshold (number of attempts), lockout duration (minutes), reset counter after (minutes). Prevents brute force attacks. Example: 5 attempts, 30 minute lockout. Configure in Security Policy."
  },
  {
    id: 27,
    front: "What are audit policies in Windows?",
    back: "Track security events - logins, file access, privilege use, policy changes. Configure in Local Security Policy → Audit Policy. Events logged to Security log in Event Viewer. Success/failure auditing. Essential for compliance, incident investigation."
  },
  {
    id: 28,
    front: "What is Credential Guard?",
    back: "Enterprise feature using virtualization to protect credentials from theft. Isolates secrets in secure container. Prevents pass-the-hash attacks. Requires: Windows 10/11 Enterprise, UEFI, Secure Boot, TPM 2.0, virtualization support. Advanced security for privileged accounts."
  },
  {
    id: 29,
    front: "What is AppLocker?",
    back: "Application whitelisting - specify which apps can run. Enterprise/Education only. Create rules by publisher, path, file hash. Prevents unauthorized software, malware execution. More restrictive than standard user accounts. Configure via Group Policy."
  },
  {
    id: 30,
    front: "What is Windows Defender Application Control?",
    back: "Enterprise code integrity policy enforcement. Successor to AppLocker. Controls kernel-mode drivers and user-mode applications. More granular than AppLocker. Requires Windows 10/11 Enterprise. Protects against malware, unauthorized software."
  }
];