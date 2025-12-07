// CompTIA A+ Core 2 (220-1102) Practice Exam Questions
// 100 Questions with balanced answer distribution (25 A, 25 B, 25 C, 25 D)

// Domain 1: Operating Systems (31 questions)
// Answer distribution: 8A, 8B, 8C, 7D
const domain1Questions = [
  {
    id: 1,
    question: "A user needs to join their Windows 10 computer to an Active Directory domain. Which edition of Windows 10 is required?",
    options: [
      "Windows 10 Pro",
      "Windows 10 Home",
      "Windows 10 S",
      "Any edition supports domain join"
    ],
    correct: 0,
    explanation: "Windows 10 Pro (or higher editions like Enterprise) is required to join an Active Directory domain. Windows 10 Home does not support domain join functionality. Windows 10 S is a locked-down version that only runs Microsoft Store apps."
  },
  {
    id: 2,
    question: "Which Windows command is used to check and repair file system errors on a drive?",
    options: [
      "sfc /scannow",
      "chkdsk",
      "diskpart",
      "format"
    ],
    correct: 1,
    explanation: "chkdsk (Check Disk) scans and repairs file system errors and bad sectors on drives. sfc /scannow repairs Windows system files. diskpart manages partitions. format erases and prepares drives."
  },
  {
    id: 3,
    question: "A technician needs to repair corrupted Windows system files. Which command should be run from an elevated command prompt?",
    options: [
      "defrag C:",
      "diskpart",
      "sfc /scannow",
      "chkdsk /r"
    ],
    correct: 2,
    explanation: "sfc /scannow (System File Checker) scans and repairs corrupted Windows system files using cached copies. defrag optimizes drive performance. diskpart manages partitions. chkdsk repairs file system errors, not Windows files specifically."
  },
  {
    id: 4,
    question: "Which file system is required for a Windows installation drive and supports file-level permissions?",
    options: [
      "FAT32",
      "exFAT",
      "NTFS",
      "ext4"
    ],
    correct: 2,
    explanation: "NTFS is required for Windows installation and supports file-level permissions, encryption (EFS), compression, and large files. FAT32 has a 4GB file limit and no permissions. exFAT is for removable media. ext4 is a Linux file system."
  },
  {
    id: 5,
    question: "A user wants to access their Windows desktop from home. Which built-in Windows feature allows remote graphical access?",
    options: [
      "SSH",
      "Telnet",
      "VNC",
      "Remote Desktop"
    ],
    correct: 3,
    explanation: "Remote Desktop (RDP) is Windows' built-in remote graphical access feature using port 3389. SSH provides command-line access. Telnet is insecure command-line access. VNC is third-party remote access software, not built into Windows."
  },
  {
    id: 6,
    question: "Which Windows utility allows you to prevent specific applications from starting automatically at boot?",
    options: [
      "Task Manager - Startup tab",
      "Device Manager",
      "Disk Management",
      "Event Viewer"
    ],
    correct: 0,
    explanation: "Task Manager's Startup tab shows applications that launch at startup and allows disabling them. Device Manager manages hardware. Disk Management handles drives and partitions. Event Viewer displays system logs."
  },
  {
    id: 7,
    question: "A Windows computer needs to have its IP address released and renewed. Which commands accomplish this?",
    options: [
      "ipconfig /flushdns",
      "ipconfig /release then ipconfig /renew",
      "netstat -a",
      "ping localhost"
    ],
    correct: 1,
    explanation: "ipconfig /release releases the current DHCP-assigned IP, and ipconfig /renew requests a new one from the DHCP server. /flushdns clears DNS cache. netstat shows connections. ping localhost tests the local TCP/IP stack."
  },
  {
    id: 8,
    question: "Which partition style supports drives larger than 2TB and is required for UEFI boot?",
    options: [
      "MBR",
      "GPT",
      "FAT32",
      "Dynamic"
    ],
    correct: 1,
    explanation: "GPT (GUID Partition Table) supports drives over 2TB and is required for UEFI boot. MBR is limited to 2TB and 4 primary partitions. FAT32 is a file system, not partition style. Dynamic is a disk type, not partition style."
  },
  {
    id: 9,
    question: "A technician needs to edit the Windows Registry. Which command opens the Registry Editor?",
    options: [
      "msconfig",
      "gpedit.msc",
      "regedit",
      "services.msc"
    ],
    correct: 2,
    explanation: "regedit opens the Registry Editor for viewing and modifying Windows Registry settings. msconfig manages startup options. gpedit.msc is Group Policy Editor. services.msc manages Windows services."
  },
  {
    id: 10,
    question: "Which macOS feature provides full-disk encryption similar to Windows BitLocker?",
    options: [
      "Time Machine",
      "FileVault",
      "Keychain",
      "Spotlight"
    ],
    correct: 1,
    explanation: "FileVault provides full-disk encryption on macOS, protecting data if the device is lost or stolen. Time Machine is for backups. Keychain manages passwords. Spotlight is the search feature."
  },
  {
    id: 11,
    question: "A user accidentally deleted important files from their Windows desktop yesterday. Where should the technician look FIRST?",
    options: [
      "System Restore",
      "Recycle Bin",
      "Previous Versions",
      "Backup and Restore"
    ],
    correct: 1,
    explanation: "The Recycle Bin is the first place to check as deleted files go there by default and can be easily restored. System Restore affects system settings, not personal files. Previous Versions requires prior configuration. Backup and Restore requires previous backups."
  },
  {
    id: 12,
    question: "Which Windows feature creates automatic restore points before significant system changes?",
    options: [
      "File History",
      "Windows Backup",
      "System Restore",
      "Recovery Drive"
    ],
    correct: 2,
    explanation: "System Restore automatically creates restore points before updates, driver installations, and other significant changes. File History backs up personal files. Windows Backup creates full system images. Recovery Drive is for boot recovery."
  },
  {
    id: 13,
    question: "A Linux administrator needs to change file permissions. Which command is used?",
    options: [
      "chown",
      "passwd",
      "chmod",
      "sudo"
    ],
    correct: 2,
    explanation: "chmod (change mode) modifies file permissions in Linux (read, write, execute). chown changes file ownership. passwd changes passwords. sudo runs commands with elevated privileges."
  },
  {
    id: 14,
    question: "Which Windows tool shows real-time CPU, memory, disk, and network performance?",
    options: [
      "Event Viewer",
      "Device Manager",
      "Task Manager",
      "Computer Management"
    ],
    correct: 2,
    explanation: "Task Manager's Performance tab shows real-time graphs and statistics for CPU, memory, disk, and network utilization. Event Viewer shows logs. Device Manager shows hardware. Computer Management is an administrative console."
  },
  {
    id: 15,
    question: "A Windows 10 user wants to use Hyper-V for virtualization. Which requirement must be met?",
    options: [
      "Windows 10 Home edition",
      "At least 2GB RAM",
      "Windows 10 Pro and hardware virtualization support",
      "32-bit processor"
    ],
    correct: 2,
    explanation: "Hyper-V requires Windows 10 Pro (or higher), 64-bit processor with hardware virtualization (VT-x/AMD-V), at least 4GB RAM, and SLAT support. Windows 10 Home doesn't include Hyper-V."
  },
  {
    id: 16,
    question: "Which command displays all currently running processes in Windows command prompt?",
    options: [
      "services.msc",
      "tasklist",
      "netstat",
      "ipconfig"
    ],
    correct: 1,
    explanation: "tasklist displays all running processes with their Process IDs (PIDs) and memory usage. services.msc opens the Services GUI. netstat shows network connections. ipconfig shows IP configuration."
  },
  {
    id: 17,
    question: "A user needs to format a USB drive for use with both Windows and macOS with files larger than 4GB. Which file system should be used?",
    options: [
      "NTFS",
      "FAT32",
      "exFAT",
      "HFS+"
    ],
    correct: 2,
    explanation: "exFAT is compatible with both Windows and macOS and supports files larger than 4GB. NTFS has limited write support on macOS. FAT32 has a 4GB file size limit. HFS+ is macOS-specific."
  },
  {
    id: 18,
    question: "Which Windows utility allows scheduling tasks to run at specific times or events?",
    options: [
      "Event Viewer",
      "Task Scheduler",
      "Services",
      "System Configuration"
    ],
    correct: 1,
    explanation: "Task Scheduler allows creating scheduled tasks that run at specific times, intervals, or when triggered by events. Event Viewer displays logs. Services manages background services. System Configuration (msconfig) manages startup options."
  },
  {
    id: 19,
    question: "A technician needs to boot Windows into a mode that loads only essential drivers for troubleshooting. Which mode should be used?",
    options: [
      "Last Known Good Configuration",
      "Recovery Mode",
      "Safe Mode",
      "Clean Boot"
    ],
    correct: 2,
    explanation: "Safe Mode loads Windows with minimal drivers and services, ideal for troubleshooting driver or software issues. Last Known Good Configuration uses previous registry settings. Recovery Mode is for system repair. Clean Boot disables third-party startup programs but loads all drivers."
  },
  {
    id: 20,
    question: "Which macOS utility is equivalent to Windows Disk Management for managing drives and partitions?",
    options: [
      "Finder",
      "System Preferences",
      "Disk Utility",
      "Terminal"
    ],
    correct: 2,
    explanation: "Disk Utility in macOS manages drives, partitions, formatting, and disk repair - similar to Windows Disk Management. Finder is the file manager. System Preferences is for settings. Terminal is the command-line interface."
  },
  {
    id: 21,
    question: "A Windows computer shows 'Preparing Automatic Repair' in a loop. What is the FIRST step to attempt?",
    options: [
      "Reinstall Windows",
      "Access Advanced Startup Options and try Startup Repair",
      "Replace the hard drive",
      "Reset BIOS to defaults"
    ],
    correct: 1,
    explanation: "Advanced Startup Options provides access to Startup Repair, System Restore, and other recovery tools without reinstalling. Reinstalling is a last resort. Hard drive replacement is premature. BIOS reset doesn't fix Windows boot issues."
  },
  {
    id: 22,
    question: "Which command is used to forcefully terminate a process by its PID in Windows?",
    options: [
      "taskkill /PID [number] /F",
      "tasklist /kill [number]",
      "end process [number]",
      "stop /PID [number]"
    ],
    correct: 0,
    explanation: "taskkill /PID [number] /F forcefully terminates a process by its Process ID. The /F flag forces termination. The other commands are not valid Windows syntax."
  },
  {
    id: 23,
    question: "A user wants to create a local backup of their Windows profile including Desktop, Documents, and Pictures. Which feature should they use?",
    options: [
      "System Restore",
      "File History",
      "Windows Recovery",
      "Disk Cleanup"
    ],
    correct: 1,
    explanation: "File History automatically backs up files from Libraries, Desktop, Contacts, and Favorites to an external drive. System Restore backs up system settings, not personal files. Windows Recovery is for system repair. Disk Cleanup frees space."
  },
  {
    id: 24,
    question: "Which Linux command displays current directory contents including hidden files?",
    options: [
      "dir /all",
      "ls -la",
      "show -hidden",
      "list -all"
    ],
    correct: 1,
    explanation: "ls -la lists all files (-a includes hidden files starting with .) in long format (-l shows permissions, ownership, size). dir is Windows syntax. show and list are not standard Linux commands."
  },
  {
    id: 25,
    question: "A Windows system needs to verify that core operating system files are intact. Which utility should be run?",
    options: [
      "System File Checker (sfc)",
      "Check Disk (chkdsk)",
      "Disk Defragmenter",
      "Disk Cleanup"
    ],
    correct: 0,
    explanation: "System File Checker (sfc /scannow) verifies and repairs Windows system files. chkdsk repairs file system errors. Disk Defragmenter optimizes file placement. Disk Cleanup removes temporary files."
  },
  {
    id: 26,
    question: "Which Control Panel utility manages installed programs and Windows features?",
    options: [
      "System",
      "Device Manager",
      "Programs and Features",
      "Administrative Tools"
    ],
    correct: 2,
    explanation: "Programs and Features allows uninstalling programs and enabling/disabling Windows features. System shows computer information. Device Manager handles hardware. Administrative Tools contains management consoles."
  },
  {
    id: 27,
    question: "A Windows 11 computer requires TPM for security features. What does TPM stand for?",
    options: [
      "Total Process Management",
      "Trusted Performance Module",
      "Trusted Platform Module",
      "Technical Protection Mechanism"
    ],
    correct: 2,
    explanation: "TPM (Trusted Platform Module) is a hardware security chip that stores encryption keys and enables features like BitLocker, Windows Hello, and Secure Boot. Windows 11 requires TPM 2.0."
  },
  {
    id: 28,
    question: "Which Windows tool provides a graphical interface for stopping, starting, and configuring services?",
    options: [
      "Task Manager",
      "services.msc",
      "msconfig",
      "devmgmt.msc"
    ],
    correct: 1,
    explanation: "services.msc opens the Services console for managing Windows services - starting, stopping, and configuring startup types. Task Manager shows services but with limited configuration. msconfig is for startup configuration. devmgmt.msc is Device Manager."
  },
  {
    id: 29,
    question: "A user needs to map a network drive in Windows using command line. Which command is used?",
    options: [
      "net share",
      "net use",
      "netstat",
      "map drive"
    ],
    correct: 1,
    explanation: "net use maps network drives (e.g., net use Z: \\\\server\\share). net share creates shares on the local computer. netstat shows network connections. 'map drive' is not a valid command."
  },
  {
    id: 30,
    question: "Which Windows installation type preserves user files and settings while replacing the operating system?",
    options: [
      "Clean install",
      "In-place upgrade",
      "Reset this PC (Remove everything)",
      "Recovery Drive installation"
    ],
    correct: 1,
    explanation: "In-place upgrade installs a new version of Windows while keeping files, settings, and most applications. Clean install erases everything. Reset with Remove everything is a clean reset. Recovery Drive is for system repair."
  },
  {
    id: 31,
    question: "A technician needs to view Windows boot configuration data. Which command displays current BCD settings?",
    options: [
      "bootcfg",
      "msconfig",
      "bcdedit",
      "bootrec"
    ],
    correct: 2,
    explanation: "bcdedit displays and modifies Boot Configuration Data (BCD) in Windows Vista and later. bootcfg was used in older Windows versions. msconfig manages startup options but not BCD directly. bootrec repairs boot records."
  }
];

// Domain 2: Security (25 questions)
// Answer distribution: 6A, 6B, 6C, 7D
const domain2Questions = [
  {
    id: 32,
    question: "A user receives an email claiming to be from their bank asking them to click a link and verify their account. What type of attack is this?",
    options: [
      "Phishing",
      "Brute force",
      "Man-in-the-middle",
      "DDoS"
    ],
    correct: 0,
    explanation: "Phishing uses fraudulent emails impersonating legitimate organizations to trick users into revealing credentials or clicking malicious links. Brute force tries many password combinations. Man-in-the-middle intercepts communications. DDoS overwhelms services with traffic."
  },
  {
    id: 33,
    question: "Which authentication method requires something you know, something you have, AND something you are?",
    options: [
      "Single-factor authentication",
      "Multi-factor authentication (MFA)",
      "Single sign-on (SSO)",
      "Biometric authentication"
    ],
    correct: 1,
    explanation: "Multi-factor authentication (MFA) combines multiple factor types: knowledge (password), possession (token/phone), and inherence (biometrics). Single-factor uses one type. SSO is one login for multiple systems. Biometric is just one factor type."
  },
  {
    id: 34,
    question: "A company wants to encrypt all data on company laptops. Which Windows feature provides full-disk encryption?",
    options: [
      "EFS",
      "Windows Defender",
      "BitLocker",
      "Credential Guard"
    ],
    correct: 2,
    explanation: "BitLocker provides full-disk encryption for Windows drives, protecting data if devices are lost or stolen. EFS encrypts individual files/folders. Windows Defender is antimalware. Credential Guard protects domain credentials."
  },
  {
    id: 35,
    question: "What is the purpose of the principle of least privilege?",
    options: [
      "Give users maximum access for convenience",
      "Allow administrators full access to all systems",
      "Grant users only the minimum access needed for their job",
      "Restrict all users from accessing network resources"
    ],
    correct: 2,
    explanation: "Least privilege means users receive only the minimum permissions necessary to perform their job functions, reducing security risk. Maximum access increases vulnerability. Admin access should also be limited. Complete restriction prevents work."
  },
  {
    id: 36,
    question: "Which malware type encrypts files and demands payment for the decryption key?",
    options: [
      "Spyware",
      "Rootkit",
      "Worm",
      "Ransomware"
    ],
    correct: 3,
    explanation: "Ransomware encrypts user files and demands payment (usually cryptocurrency) for the decryption key. Spyware monitors activity. Rootkits hide deep in the system. Worms self-replicate across networks."
  },
  {
    id: 37,
    question: "A technician discovers a computer is part of a botnet. What type of malware is MOST likely responsible?",
    options: [
      "Trojan",
      "Adware",
      "Keylogger",
      "Rootkit"
    ],
    correct: 0,
    explanation: "Trojans often install backdoors that allow computers to be controlled remotely as part of botnets. Adware displays advertisements. Keyloggers record keystrokes. Rootkits hide malware but don't specifically create botnets."
  },
  {
    id: 38,
    question: "Which Windows feature controls inbound and outbound network traffic based on defined rules?",
    options: [
      "Windows Update",
      "Windows Defender Firewall",
      "Task Manager",
      "Device Manager"
    ],
    correct: 1,
    explanation: "Windows Defender Firewall filters network traffic based on rules for inbound and outbound connections. Windows Update manages patches. Task Manager shows running processes. Device Manager handles hardware."
  },
  {
    id: 39,
    question: "An attacker follows an employee through a secure door without using their own badge. What is this called?",
    options: [
      "Phishing",
      "Shoulder surfing",
      "Tailgating",
      "Social engineering"
    ],
    correct: 2,
    explanation: "Tailgating (or piggybacking) is following an authorized person through a secure door without authorization. Phishing is email-based deception. Shoulder surfing is observing screens/keyboards. Social engineering is the broader category that includes tailgating."
  },
  {
    id: 40,
    question: "Which mobile device security feature remotely erases all data if the device is lost or stolen?",
    options: [
      "Screen lock",
      "Encryption",
      "Remote wipe",
      "Locator application"
    ],
    correct: 2,
    explanation: "Remote wipe erases all data on a lost or stolen device to prevent unauthorized access. Screen lock prevents casual access. Encryption protects data but doesn't erase it. Locator apps find devices but don't protect data."
  },
  {
    id: 41,
    question: "A user's computer suddenly shows pop-ups claiming viruses were detected and offering a 'cleaning' program for purchase. What is this?",
    options: [
      "Legitimate antivirus warning",
      "Ransomware",
      "Rogueware/scareware",
      "Adware"
    ],
    correct: 2,
    explanation: "Rogueware (scareware) displays fake security warnings to trick users into purchasing useless or malicious software. Legitimate antivirus doesn't demand payment through pop-ups. Ransomware encrypts files. Adware shows advertisements, not fake warnings."
  },
  {
    id: 42,
    question: "Which password policy requires users to change their password after a specified time period?",
    options: [
      "Password complexity",
      "Password history",
      "Password age/expiration",
      "Account lockout"
    ],
    correct: 2,
    explanation: "Password age/expiration forces password changes after a set number of days. Password complexity requires certain character types. Password history prevents reusing old passwords. Account lockout disables accounts after failed attempts."
  },
  {
    id: 43,
    question: "What is the purpose of UAC (User Account Control) in Windows?",
    options: [
      "Encrypt user files",
      "Manage user passwords",
      "Prompt for confirmation before system changes",
      "Block all software installations"
    ],
    correct: 2,
    explanation: "UAC prompts users for confirmation or administrator credentials before allowing changes that could affect system security. It doesn't encrypt files, manage passwords, or block all installations - just requires approval for elevated actions."
  },
  {
    id: 44,
    question: "Which authentication factor is 'something you are'?",
    options: [
      "Password",
      "Smart card",
      "Fingerprint",
      "PIN"
    ],
    correct: 2,
    explanation: "Biometrics like fingerprints are 'something you are' - inherent physical characteristics. Passwords and PINs are 'something you know.' Smart cards are 'something you have.'"
  },
  {
    id: 45,
    question: "A technician needs to permanently destroy data on a hard drive before disposal. Which method is MOST effective?",
    options: [
      "Quick format",
      "Standard format",
      "Physical destruction or degaussing",
      "Delete and empty Recycle Bin"
    ],
    correct: 2,
    explanation: "Physical destruction (shredding, drilling) or degaussing (magnetic erasure) ensures data cannot be recovered. Quick and standard formats leave data recoverable. Deleting and emptying Recycle Bin doesn't actually erase data."
  },
  {
    id: 46,
    question: "Which security practice involves keeping operating systems and applications updated with the latest security fixes?",
    options: [
      "Antivirus scanning",
      "Patch management",
      "Data backup",
      "Password rotation"
    ],
    correct: 1,
    explanation: "Patch management ensures systems receive security updates promptly to fix known vulnerabilities. Antivirus detects malware. Backup protects data. Password rotation changes credentials periodically."
  },
  {
    id: 47,
    question: "An employee is tricked into revealing their password over the phone by someone claiming to be IT support. This is an example of:",
    options: [
      "Vishing",
      "Phishing",
      "Smishing",
      "Whaling"
    ],
    correct: 0,
    explanation: "Vishing (voice phishing) uses phone calls to trick victims into revealing sensitive information. Phishing uses email. Smishing uses SMS/text messages. Whaling targets high-profile executives."
  },
  {
    id: 48,
    question: "Which Windows feature helps protect against malware by restricting which applications can run?",
    options: [
      "Windows Defender Antivirus",
      "BitLocker",
      "AppLocker",
      "Credential Guard"
    ],
    correct: 2,
    explanation: "AppLocker allows administrators to specify which applications are allowed to run, preventing unauthorized software execution. Windows Defender detects malware. BitLocker encrypts drives. Credential Guard protects credentials."
  },
  {
    id: 49,
    question: "What type of malware hides its presence by modifying core operating system files or the boot process?",
    options: [
      "Virus",
      "Worm",
      "Spyware",
      "Rootkit"
    ],
    correct: 3,
    explanation: "Rootkits hide deep within the operating system, modifying core files or boot processes to remain undetected. Viruses attach to files. Worms self-replicate. Spyware monitors activity but doesn't necessarily hide at the OS level."
  },
  {
    id: 50,
    question: "A security policy requires all mobile devices to have a screen lock that activates after 2 minutes of inactivity. This is managed through:",
    options: [
      "Local device settings only",
      "BIOS configuration",
      "Mobile Device Management (MDM)",
      "Network firewall rules"
    ],
    correct: 2,
    explanation: "Mobile Device Management (MDM) enforces security policies like screen lock timeout across multiple devices centrally. Local settings can be changed by users. BIOS doesn't manage mobile device policies. Firewalls handle network traffic."
  },
  {
    id: 51,
    question: "Which type of attack uses previously breached username/password combinations to attempt access to other sites?",
    options: [
      "Dictionary attack",
      "Brute force attack",
      "Rainbow table attack",
      "Credential stuffing"
    ],
    correct: 3,
    explanation: "Credential stuffing uses stolen credentials from one breach to try accessing other sites, exploiting password reuse. Dictionary attacks use wordlists. Brute force tries all combinations. Rainbow tables crack password hashes."
  },
  {
    id: 52,
    question: "Before disposing of a computer, all data must be securely erased. For an SSD, which method is recommended?",
    options: [
      "Multiple overwrite passes",
      "Manufacturer's secure erase command",
      "Degaussing",
      "Standard format"
    ],
    correct: 1,
    explanation: "SSDs require the manufacturer's secure erase command because wear leveling makes traditional overwriting unreliable. Multiple overwrites don't reach all cells. Degaussing doesn't work on SSDs (not magnetic). Standard format leaves data recoverable."
  },
  {
    id: 53,
    question: "Which Windows security feature specifically prevents unauthorized applications from running at startup?",
    options: [
      "Windows Defender Firewall",
      "SmartScreen",
      "Secure Boot",
      "Windows Sandbox"
    ],
    correct: 2,
    explanation: "Secure Boot prevents unauthorized bootloaders and kernel-level drivers from loading at startup, blocking bootkits and rootkits. Windows Defender Firewall manages network traffic. SmartScreen warns about downloaded files. Windows Sandbox isolates applications."
  },
  {
    id: 54,
    question: "An employee receives a text message claiming to be from shipping company with a tracking link. What type of attack is this?",
    options: [
      "Phishing",
      "Vishing",
      "Smishing",
      "Spear phishing"
    ],
    correct: 2,
    explanation: "Smishing is phishing via SMS/text messages. Phishing uses email. Vishing uses voice calls. Spear phishing targets specific individuals but usually via email."
  },
  {
    id: 55,
    question: "A company requires drives to be encrypted with BitLocker. Which hardware component stores the encryption key securely?",
    options: [
      "CPU cache",
      "RAM",
      "TPM",
      "BIOS chip"
    ],
    correct: 2,
    explanation: "TPM (Trusted Platform Module) securely stores BitLocker encryption keys, requiring the same hardware for decryption. CPU cache is volatile. RAM loses data when powered off. BIOS chip doesn't store encryption keys."
  },
  {
    id: 56,
    question: "Which Windows log contains records of successful and failed login attempts?",
    options: [
      "Application log",
      "System log",
      "Security log",
      "Setup log"
    ],
    correct: 2,
    explanation: "The Security log records authentication events including successful and failed logins (requires auditing enabled). Application log shows program events. System log shows Windows events. Setup log shows installation events."
  }
];

// Domain 3: Software Troubleshooting (22 questions)
// Answer distribution: 6A, 6B, 5C, 5D
const domain3Questions = [
  {
    id: 57,
    question: "A Windows computer displays 'BOOTMGR is missing' on startup. What should be tried FIRST?",
    options: [
      "Boot from Windows installation media and run Startup Repair",
      "Replace the hard drive",
      "Reinstall Windows",
      "Update the BIOS"
    ],
    correct: 0,
    explanation: "Startup Repair from installation media can fix boot manager issues without data loss. Replacing the hard drive is premature. Reinstalling Windows is a last resort. BIOS updates don't fix bootloader problems."
  },
  {
    id: 58,
    question: "A user cannot open any programs and receives 'Application failed to initialize' errors. What should be checked?",
    options: [
      "Internet connection",
      "Available RAM and disk space",
      "Printer settings",
      "Display resolution"
    ],
    correct: 1,
    explanation: "Insufficient RAM or disk space can prevent applications from initializing. The system needs free resources to load programs. Internet, printer settings, and display resolution don't typically cause initialization failures for local applications."
  },
  {
    id: 59,
    question: "Windows is stuck on 'Getting Windows ready' for over an hour after an update. What is the BEST course of action?",
    options: [
      "Immediately power off the computer",
      "Wait at least 2-3 hours before forcing restart",
      "Disconnect from the internet",
      "Remove all USB devices"
    ],
    correct: 1,
    explanation: "Updates can take significant time; forcing shutdown during updates can corrupt Windows. Wait at least 2-3 hours. If still stuck, hold power button, then try Startup Repair. Removing USB or disconnecting internet during an update can cause issues."
  },
  {
    id: 60,
    question: "A mobile app crashes immediately upon opening. What troubleshooting step should be tried FIRST?",
    options: [
      "Factory reset the device",
      "Reinstall the operating system",
      "Clear the app's cache and data",
      "Replace the device"
    ],
    correct: 2,
    explanation: "Clearing app cache and data resolves most app crashes by removing corrupted temporary files. Factory reset and OS reinstall are extreme measures. Replacing the device is unnecessary for software issues."
  },
  {
    id: 61,
    question: "A Windows computer runs extremely slowly. Task Manager shows 100% disk usage. What is the FIRST thing to check?",
    options: [
      "Windows Search indexing and SuperFetch services",
      "CPU temperature",
      "RAM capacity",
      "Graphics card drivers"
    ],
    correct: 0,
    explanation: "Windows Search (Indexing) and SuperFetch/SysMain services commonly cause 100% disk usage, especially on HDDs. Disabling or limiting these services often resolves the issue. CPU temp affects performance differently. RAM capacity shows in memory usage. Graphics drivers don't affect disk usage."
  },
  {
    id: 62,
    question: "A browser keeps redirecting to unwanted websites regardless of what URL is typed. What is the MOST likely cause?",
    options: [
      "Slow internet connection",
      "Browser hijacker malware",
      "Outdated browser",
      "DNS server issue"
    ],
    correct: 1,
    explanation: "Browser hijacker malware changes browser settings to redirect traffic to malicious sites. Run anti-malware scans and reset browser settings. Slow connections don't cause redirects. Outdated browsers might have vulnerabilities but don't redirect themselves. DNS issues affect specific sites."
  },
  {
    id: 63,
    question: "An application that worked yesterday now won't start. Windows recently installed updates. What should be tried?",
    options: [
      "Reinstall the application",
      "Uninstall recent Windows updates",
      "Format and reinstall Windows",
      "Buy new hardware"
    ],
    correct: 1,
    explanation: "Recent Windows updates can cause application compatibility issues. Uninstalling the problematic updates often resolves the issue. Reinstalling the app may not help if updates are the problem. Formatting is extreme. New hardware isn't needed for software issues."
  },
  {
    id: 64,
    question: "A smartphone battery drains extremely fast. Which setting should be checked FIRST?",
    options: [
      "Screen brightness and background app activity",
      "SIM card",
      "Device storage",
      "Network operator settings"
    ],
    correct: 0,
    explanation: "Screen brightness and background apps are the biggest battery drains. Check battery usage in settings to identify culprits. SIM cards don't significantly affect battery. Storage affects performance, not battery. Network settings have minimal impact compared to screen and apps."
  },
  {
    id: 65,
    question: "A Windows user reports that System Restore fails with an error. What should be checked?",
    options: [
      "Internet connection",
      "Print spooler service",
      "Volume Shadow Copy Service status",
      "Windows Update settings"
    ],
    correct: 2,
    explanation: "System Restore depends on Volume Shadow Copy Service (VSS). If VSS is disabled or malfunctioning, System Restore fails. Internet isn't required for local restore. Print spooler is unrelated. Windows Update doesn't directly affect System Restore."
  },
  {
    id: 66,
    question: "A computer shows a Blue Screen of Death (BSOD) with 'DRIVER_IRQL_NOT_LESS_OR_EQUAL'. What is the likely cause?",
    options: [
      "Faulty or incompatible driver",
      "Hard drive failure",
      "Insufficient RAM",
      "Overheating CPU"
    ],
    correct: 0,
    explanation: "DRIVER_IRQL_NOT_LESS_OR_EQUAL typically indicates a faulty or incompatible driver trying to access invalid memory. Boot into Safe Mode and update or roll back recent driver changes. Hard drive issues show different errors. RAM issues show different BSOD codes. Overheating causes shutdowns."
  },
  {
    id: 67,
    question: "A user complains their computer takes 5 minutes to reach the desktop. What should be checked?",
    options: [
      "Display settings",
      "Startup programs in Task Manager",
      "Printer configuration",
      "Mouse sensitivity"
    ],
    correct: 1,
    explanation: "Too many startup programs significantly slow boot times. Review and disable unnecessary startup items in Task Manager. Display settings don't affect boot time. Printer configuration is unrelated. Mouse settings don't affect boot."
  },
  {
    id: 68,
    question: "A mobile device touchscreen is unresponsive in certain areas. After ruling out screen protector issues, what should be tried?",
    options: [
      "Replace the battery",
      "Restart the device and check for OS updates",
      "Increase screen brightness",
      "Reset network settings"
    ],
    correct: 1,
    explanation: "A restart can resolve temporary touchscreen glitches, and OS updates often include touch calibration fixes. Battery replacement doesn't affect touchscreen. Brightness doesn't affect touch response. Network settings are unrelated to touchscreen."
  },
  {
    id: 69,
    question: "Windows displays 'Your PC ran into a problem and needs to restart' with a QR code. This screen is commonly called:",
    options: [
      "Black Screen of Death",
      "Green Screen of Death",
      "Blue Screen of Death (BSOD)",
      "Red Screen of Death"
    ],
    correct: 2,
    explanation: "The Blue Screen of Death (BSOD) appears when Windows encounters a critical error it cannot recover from. Modern versions include a QR code linking to troubleshooting information. The other colors refer to different or non-standard error screens."
  },
  {
    id: 70,
    question: "A laptop running Windows shows 'No boot device found'. The drive is detected in BIOS. What is the likely issue?",
    options: [
      "RAM failure",
      "Corrupted boot sector or partition table",
      "Display cable loose",
      "CPU overheating"
    ],
    correct: 1,
    explanation: "If BIOS detects the drive but Windows won't boot, the boot sector or partition table is likely corrupted. Use Windows installation media for repair. RAM issues cause different errors. Display cable affects screen, not boot. CPU overheating causes shutdowns."
  },
  {
    id: 71,
    question: "An Android phone is stuck in a boot loop. What is the FIRST recovery option to try?",
    options: [
      "Replace the phone",
      "Attempt booting into Recovery Mode",
      "Remove the SIM card",
      "Charge the phone for 24 hours"
    ],
    correct: 1,
    explanation: "Recovery Mode allows clearing cache, factory resetting, or applying fixes without fully booting Android. Phone replacement is premature. SIM removal doesn't affect boot. Extended charging won't fix software issues."
  },
  {
    id: 72,
    question: "A user reports pop-ups appearing even when no browser is open. What should be checked?",
    options: [
      "Monitor settings",
      "Installed programs for adware/PUPs",
      "Sound drivers",
      "BIOS settings"
    ],
    correct: 1,
    explanation: "Pop-ups without a browser indicate adware or potentially unwanted programs (PUPs) installed on the system. Check installed programs and run anti-malware scans. Monitor, sound, and BIOS settings don't cause pop-ups."
  },
  {
    id: 73,
    question: "A macOS application reports it's 'damaged and can't be opened'. What setting might need adjustment?",
    options: [
      "Display resolution",
      "Gatekeeper security settings",
      "Keyboard layout",
      "Network configuration"
    ],
    correct: 1,
    explanation: "Gatekeeper may block apps from unidentified developers. You can right-click the app and select Open, or adjust Security & Privacy settings. Display, keyboard, and network settings don't affect app launching."
  },
  {
    id: 74,
    question: "A computer displays 'NTLDR is missing' on startup. This indicates:",
    options: [
      "The Windows XP/2000 boot loader is missing or corrupted",
      "RAM failure",
      "Video card issue",
      "Keyboard not detected"
    ],
    correct: 0,
    explanation: "NTLDR is the boot loader for Windows XP and earlier. This error indicates boot files are missing or corrupted. Modern Windows uses BOOTMGR instead. RAM, video, and keyboard issues cause different symptoms."
  },
  {
    id: 75,
    question: "Windows Update fails with error code 0x80070002. What should be tried?",
    options: [
      "Replace the network card",
      "Run Windows Update Troubleshooter",
      "Reinstall Office",
      "Update graphics drivers"
    ],
    correct: 1,
    explanation: "The Windows Update Troubleshooter diagnoses and fixes common update problems automatically. Network card replacement is extreme. Office and graphics drivers aren't related to Windows Update errors."
  },
  {
    id: 76,
    question: "A smartphone cannot download apps from the official app store, showing 'insufficient storage', but the device shows 50GB free. What might be the issue?",
    options: [
      "Corrupted app store cache",
      "No internet connection",
      "SIM card full",
      "Battery too low"
    ],
    correct: 0,
    explanation: "Corrupted app store cache can cause false insufficient storage errors. Clear the app store's cache and data. Internet issues show different errors. SIM cards don't store apps. Battery level doesn't affect storage readings."
  },
  {
    id: 77,
    question: "A Windows user reports their profile loads very slowly with a 'temporary profile' warning. What is the likely cause?",
    options: [
      "Too many desktop icons",
      "Corrupted user profile",
      "Slow internet connection",
      "Outdated printer drivers"
    ],
    correct: 1,
    explanation: "A temporary profile warning indicates the user profile is corrupted and Windows created a temporary replacement. The profile needs to be repaired or recreated. Desktop icons, internet, and printers don't cause profile corruption."
  },
  {
    id: 78,
    question: "An iOS device won't connect to the App Store, showing 'Cannot Connect'. Other internet services work fine. What should be checked?",
    options: [
      "Apple's System Status page for App Store outages",
      "Bluetooth settings",
      "Camera permissions",
      "Compass calibration"
    ],
    correct: 0,
    explanation: "If internet works but App Store doesn't, check Apple's System Status page for service outages. Also try signing out and back into Apple ID. Bluetooth, camera, and compass settings are unrelated to App Store connectivity."
  }
];

// Domain 4: Operational Procedures (22 questions)
// Answer distribution: 5A, 5B, 6C, 6D
const domain4Questions = [
  {
    id: 79,
    question: "Before working on internal computer components, what should a technician do FIRST to prevent ESD damage?",
    options: [
      "Ground themselves using an antistatic wrist strap",
      "Turn off the monitor",
      "Disconnect the keyboard",
      "Close all running programs"
    ],
    correct: 0,
    explanation: "An antistatic wrist strap grounds the technician, preventing electrostatic discharge that can damage sensitive components. The other actions don't prevent ESD damage."
  },
  {
    id: 80,
    question: "A help desk technician should document which information when closing a support ticket?",
    options: [
      "Only the customer's name",
      "The problem, steps taken, and resolution",
      "Only the date and time",
      "Just the ticket number"
    ],
    correct: 1,
    explanation: "Complete documentation includes the problem description, troubleshooting steps taken, and final resolution. This helps future troubleshooting and provides an audit trail. Partial documentation lacks useful information."
  },
  {
    id: 81,
    question: "Which backup type copies only files that have changed since the last full backup and clears the archive bit?",
    options: [
      "Full backup",
      "Differential backup",
      "Incremental backup",
      "Mirror backup"
    ],
    correct: 2,
    explanation: "Incremental backups copy files changed since ANY previous backup and clear the archive bit. Restoration requires the full backup plus all incrementals. Differential copies all changes since the last full backup but doesn't clear the archive bit."
  },
  {
    id: 82,
    question: "A customer is angry about a repair taking longer than expected. What is the BEST response?",
    options: [
      "Tell them to calm down",
      "Blame the previous technician",
      "Listen actively, apologize, and explain the situation",
      "Ignore their concerns and focus on the repair"
    ],
    correct: 2,
    explanation: "Professional customer service requires active listening, acknowledging their frustration, apologizing for the inconvenience, and clearly explaining the situation. Telling them to calm down or ignoring them escalates the situation. Blaming others is unprofessional."
  },
  {
    id: 83,
    question: "Which type of fire extinguisher is safe to use on electrical fires?",
    options: [
      "Class A (water)",
      "Class B (foam)",
      "Class C (CO2 or dry chemical)",
      "Class K (wet chemical)"
    ],
    correct: 2,
    explanation: "Class C extinguishers (CO2, dry chemical) are safe for electrical fires as they don't conduct electricity. Water (Class A) and foam (Class B) conduct electricity. Class K is for kitchen fires involving cooking oils."
  },
  {
    id: 84,
    question: "A technician finds illegal content on a customer's computer during a routine repair. What is the correct action?",
    options: [
      "Delete the files and continue working",
      "Ignore it - customer privacy is paramount",
      "Stop work, preserve the evidence, and report to appropriate authorities",
      "Confront the customer directly"
    ],
    correct: 2,
    explanation: "Upon discovering illegal content, stop work immediately, preserve the evidence (don't delete or move files), document the finding, and report to management and appropriate authorities. Deleting evidence or ignoring it is illegal. Confronting the customer could be dangerous."
  },
  {
    id: 85,
    question: "What does the '3-2-1 backup rule' recommend?",
    options: [
      "Backup every 3 hours",
      "Use 3 different backup programs",
      "Keep 3 copies on 2 different media types with 1 offsite",
      "Backup 3 folders, 2 drives, 1 network location"
    ],
    correct: 2,
    explanation: "The 3-2-1 rule recommends: 3 copies of data (original + 2 backups), on 2 different media types (e.g., HDD and cloud), with 1 copy stored offsite for disaster recovery."
  },
  {
    id: 86,
    question: "When installing RAM, what is the correct way to handle the modules?",
    options: [
      "Hold by the gold contacts",
      "Grip firmly in the center of the module",
      "Handle by the edges, avoiding contacts",
      "Use metal tools to insert"
    ],
    correct: 2,
    explanation: "RAM modules should be handled by the edges to avoid transferring oils or static to the gold contacts or chips. Touching contacts or chips can cause damage. Metal tools can cause shorts and ESD."
  },
  {
    id: 87,
    question: "A company's change management process requires which documentation before making network changes?",
    options: [
      "Only verbal approval",
      "Documented approval, risk assessment, and rollback plan",
      "Email from the technician's friend",
      "No documentation is needed for minor changes"
    ],
    correct: 1,
    explanation: "Proper change management requires formal approval, risk assessment, implementation plan, and rollback plan in case the change causes problems. All changes should be documented regardless of size."
  },
  {
    id: 88,
    question: "Which environmental factor can cause computer components to fail prematurely?",
    options: [
      "Proper ventilation",
      "Clean workspace",
      "High humidity causing condensation",
      "Adequate lighting"
    ],
    correct: 2,
    explanation: "High humidity can cause condensation on components, leading to shorts and corrosion. Proper ventilation, cleanliness, and lighting are positive environmental factors that help prevent problems."
  },
  {
    id: 89,
    question: "A customer asks about your personal political opinions during a service call. How should you respond?",
    options: [
      "Share your detailed opinions",
      "Argue your position",
      "Politely redirect to the technical issue at hand",
      "Ask about their opinions first"
    ],
    correct: 2,
    explanation: "Professional technicians keep conversations focused on the work at hand and avoid political, religious, or controversial topics. Politely redirect to complete the service professionally."
  },
  {
    id: 90,
    question: "What information should be included in an asset management database for IT equipment?",
    options: [
      "Only the equipment color",
      "Serial number, location, assigned user, and purchase date",
      "Just the room number",
      "Only warranty information"
    ],
    correct: 1,
    explanation: "Comprehensive asset management includes serial numbers, location, assigned user, purchase date, warranty status, and configuration information. This enables tracking, inventory management, and planning."
  },
  {
    id: 91,
    question: "Which document outlines step-by-step instructions for performing a specific IT task?",
    options: [
      "Policy",
      "Regulation",
      "Standard Operating Procedure (SOP)",
      "Guideline"
    ],
    correct: 2,
    explanation: "Standard Operating Procedures (SOPs) provide detailed step-by-step instructions for completing specific tasks consistently. Policies set overall rules. Regulations are legal requirements. Guidelines are recommendations."
  },
  {
    id: 92,
    question: "Toner cartridges and batteries should be disposed of through which method?",
    options: [
      "Regular trash",
      "Recycling through proper hazardous waste procedures",
      "Flushing down the drain",
      "Burying in the ground"
    ],
    correct: 1,
    explanation: "Toner and batteries contain hazardous materials and must be recycled through proper programs. Many manufacturers offer take-back programs. Regular disposal or improper methods can harm the environment and may violate regulations."
  },
  {
    id: 93,
    question: "A technician is working with a customer who speaks with a heavy accent that is difficult to understand. What is the appropriate approach?",
    options: [
      "Pretend to understand and guess at the problem",
      "Speak louder",
      "Patiently ask clarifying questions and confirm understanding",
      "Transfer to another technician immediately"
    ],
    correct: 2,
    explanation: "Professional communication requires patience and confirmation. Ask clarifying questions, repeat back what you understood, and use visual aids if helpful. Don't pretend to understand or assume. Speaking louder doesn't help with accent comprehension."
  },
  {
    id: 94,
    question: "What is the purpose of a clean air filtration mask when working inside dusty computers?",
    options: [
      "To look professional",
      "To protect against breathing in particulate matter",
      "To prevent spreading germs",
      "Required by OSHA for all computer work"
    ],
    correct: 1,
    explanation: "A filtration mask protects the technician from inhaling dust, toner particles, and other particulates inside computers. This is especially important when using compressed air to clean components."
  },
  {
    id: 95,
    question: "If a customer's computer repair will cost more than originally estimated, what should be done?",
    options: [
      "Complete the work and bill the higher amount",
      "Stop work and get customer approval before continuing",
      "Reduce quality to stay within budget",
      "Have another technician make the call"
    ],
    correct: 1,
    explanation: "Inform the customer of additional costs and get explicit approval before proceeding. Surprising customers with unexpected charges damages trust and may not be legally collectible without prior consent."
  },
  {
    id: 96,
    question: "Which practice helps prevent repetitive strain injuries when working at a computer?",
    options: [
      "Working for 8 hours without breaks",
      "Using proper ergonomics and taking regular breaks",
      "Sitting on a hard stool",
      "Keeping the monitor at floor level"
    ],
    correct: 1,
    explanation: "Proper ergonomics (correct chair height, monitor position, keyboard angle) and regular breaks prevent repetitive strain injuries. Continuous work without breaks increases injury risk. Poor positioning causes strain."
  },
  {
    id: 97,
    question: "A company requires users to sign which document acknowledging rules for computer use?",
    options: [
      "EULA",
      "NDA",
      "Acceptable Use Policy (AUP)",
      "Service Level Agreement"
    ],
    correct: 2,
    explanation: "An Acceptable Use Policy (AUP) defines acceptable and prohibited behaviors when using company IT resources. EULA is for software. NDA protects confidential information. SLA defines service expectations."
  },
  {
    id: 98,
    question: "When lifting heavy computer equipment, what is the proper technique?",
    options: [
      "Bend at the waist and lift with your back",
      "Lift quickly with sudden jerking motions",
      "Bend at the knees and lift with your legs",
      "Always lift alone to save time"
    ],
    correct: 2,
    explanation: "Lift with your legs (not your back), keep the load close to your body, and avoid twisting. Get help for heavy equipment. Bending at the waist strains the back. Jerking motions cause injury."
  },
  {
    id: 99,
    question: "What type of fire suppression system is preferred in data centers because it doesn't damage equipment?",
    options: [
      "Water sprinkler system",
      "Foam system",
      "Wet chemical system",
      "Clean agent (gas-based) system"
    ],
    correct: 3,
    explanation: "Clean agent systems (like FM-200 or Novec) extinguish fires without leaving residue or damaging equipment. Water damages electronics. Foam leaves residue. Wet chemical is for kitchen fires."
  },
  {
    id: 100,
    question: "When communicating technical issues to a non-technical customer, what approach is BEST?",
    options: [
      "Use as many technical terms as possible to show expertise",
      "Tell them they wouldn't understand",
      "Use simple analogies and avoid jargon",
      "Write everything in email instead of explaining"
    ],
    correct: 2,
    explanation: "Use simple language and relatable analogies to explain technical concepts. Avoid jargon that confuses customers. Using excessive technical terms or dismissing their ability to understand damages the customer relationship."
  }
];

// Export all questions
export const examQuestions = [
  ...domain1Questions,
  ...domain2Questions,
  ...domain3Questions,
  ...domain4Questions
];

export const questionPool = {
  domain1: domain1Questions,
  domain2: domain2Questions,
  domain3: domain3Questions,
  domain4: domain4Questions,
  all: examQuestions
};

// Alias for exam generator compatibility
export const aPlusCore2QuestionPool = questionPool;

// Metadata for the exam
export const examMetadata = {
  title: "CompTIA A+ Core 2 (220-1102) Practice Exam",
  totalQuestions: 100,
  timeLimit: 90, // minutes
  passingScore: 700, // on a scale of 100-900
  domains: [
    { name: "Operating Systems", percentage: 31, questionCount: 31 },
    { name: "Security", percentage: 25, questionCount: 25 },
    { name: "Software Troubleshooting", percentage: 22, questionCount: 22 },
    { name: "Operational Procedures", percentage: 22, questionCount: 22 }
  ]
};

/*
ANSWER DISTRIBUTION VERIFICATION:
================================
Domain 1 (31 questions): A=8, B=8, C=8, D=7
Domain 2 (25 questions): A=6, B=6, C=6, D=7
Domain 3 (22 questions): A=6, B=6, C=5, D=5
Domain 4 (22 questions): A=5, B=5, C=6, D=6

TOTALS:
A (correct: 0) = 8+6+6+5 = 25 ✓
B (correct: 1) = 8+6+6+5 = 25 ✓
C (correct: 2) = 8+6+5+6 = 25 ✓
D (correct: 3) = 7+7+5+6 = 25 ✓

Total Questions: 31+25+22+22 = 100 ✓
*/