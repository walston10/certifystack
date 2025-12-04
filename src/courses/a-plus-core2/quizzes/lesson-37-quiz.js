export const lesson37Quiz = [
  {
    id: 1,
    question: "A user downloads a program installer from a trusted website, but when they double-click the .exe file, nothing happens. They right-click and see 'Run as administrator' option. What should they do?",
    options: [
      "Download the installer again - it must be corrupted",
      "Right-click the installer and select 'Run as administrator'",
      "Disable User Account Control (UAC) completely",
      "Change their user account to Administrator type"
    ],
    correct: 1,
    explanation: "Many installers require administrator privileges to install software. Running the installer as administrator provides the necessary elevation. UAC prompts should appear, but sometimes won't if the installer isn't properly signed. Re-downloading won't help if privileges are the issue. Disabling UAC is a security risk. The user doesn't need to be an Administrator permanently - just elevation for this task."
  },
  {
    id: 2,
    question: "A user installs a new application from the Microsoft Store. Where does Windows 11 install Microsoft Store apps by default?",
    options: [
      "C:\\Program Files\\",
      "C:\\Program Files (x86)\\",
      "C:\\Program Files\\WindowsApps\\ (hidden system folder)",
      "The user's Documents folder"
    ],
    correct: 2,
    explanation: "Microsoft Store apps install to C:\\Program Files\\WindowsApps\\, which is a hidden, protected system folder. Users don't need to access this location directly - apps are managed through the Start menu and Settings. Traditional desktop programs install to Program Files or Program Files (x86). Microsoft Store apps use a different installation model with better security and sandboxing."
  },
  {
    id: 3,
    question: "A company is deploying software to 50 computers and wants to install it without any user interaction or prompts. The installer is an .msi file. What type of installation should they configure?",
    options: [
      "Interactive installation",
      "Silent/unattended installation",
      "Compatibility mode installation",
      "Repair installation"
    ],
    correct: 1,
    explanation: "Silent or unattended installations run without user interaction, perfect for mass deployments. For .msi files, use 'msiexec /i installer.msi /quiet' or /qn (quiet, no interface). This allows IT to deploy software remotely or via scripts. Interactive installations require user input. Compatibility mode is for old programs. Repair installations fix existing installations."
  },
  {
    id: 4,
    question: "A user wants to prevent a program from automatically starting every time they log in to Windows. The program doesn't appear in Settings > Apps > Startup. Where else should they check?",
    options: [
      "Programs and Features in Control Panel",
      "Task Manager > Startup tab",
      "Device Manager > Startup Devices",
      "Windows Defender Firewall settings"
    ],
    correct: 1,
    explanation: "Task Manager's Startup tab shows all programs configured to start automatically, including those not visible in Settings. You can enable/disable startup items and see their impact on boot time. Programs and Features uninstalls programs but doesn't manage startup. Device Manager manages hardware drivers. Windows Defender Firewall doesn't control program startup."
  },
  {
    id: 5,
    question: "An old accounting program from 2010 won't run on Windows 11. The program worked fine on Windows 7. What Windows feature might help run this legacy application?",
    options: [
      "Windows Update",
      "Compatibility Mode",
      "Windows Defender Application Guard",
      "BitLocker"
    ],
    correct: 1,
    explanation: "Compatibility Mode allows programs to run as if they're on older Windows versions (Windows 7, Vista, XP, etc.). Right-click the program, Properties > Compatibility tab, and select the appropriate Windows version. Windows Update won't help old software. Application Guard is for security isolation. BitLocker is disk encryption. Compatibility mode tricks the program into thinking it's on an older OS."
  },
  {
    id: 6,
    question: "A user double-clicks a .pdf file and it opens in Microsoft Edge, but they want it to always open in Adobe Acrobat Reader. What's the BEST way to permanently change this?",
    options: [
      "Uninstall Microsoft Edge",
      "Right-click .pdf file > Open with > Choose another app > Always use this app",
      "Reinstall Adobe Acrobat Reader",
      "Change the file extension to .adobe"
    ],
    correct: 1,
    explanation: "The correct method is right-clicking a .pdf file, selecting 'Open with,' choosing Adobe Acrobat Reader, and checking 'Always use this app to open .pdf files.' This sets the default file association. Uninstalling Edge isn't recommended or necessary. Reinstalling Adobe won't change the association. Changing extensions breaks the file and doesn't solve the problem."
  },
  {
    id: 7,
    question: "After installing a program, a user wants to remove it completely but can't find an uninstaller in the Start menu. Where should they go to properly uninstall the program?",
    options: [
      "Delete the program folder from Program Files",
      "Settings > Apps > Installed apps or Programs and Features in Control Panel",
      "Task Manager > End the program's process",
      "Device Manager > Uninstall device"
    ],
    correct: 1,
    explanation: "Always use Settings > Apps > Installed apps or Control Panel > Programs and Features to uninstall programs. These tools properly remove the program, registry entries, and associated files. Simply deleting the folder leaves registry entries and files scattered across the system. Task Manager only ends processes. Device Manager manages hardware, not software."
  },
  {
    id: 8,
    question: "An administrator is installing software on a 64-bit Windows 11 computer. The installer offers both 32-bit and 64-bit versions. Which should they choose and why?",
    options: [
      "32-bit version - it's more compatible",
      "64-bit version - it can utilize more RAM and better performance",
      "Either one - they perform identically on 64-bit Windows",
      "32-bit version - it's more stable"
    ],
    correct: 1,
    explanation: "On 64-bit Windows, choose 64-bit applications when available. 64-bit programs can address more than 4GB of RAM, offer better performance, and utilize modern processor features. 32-bit programs work via WOW64 (Windows-on-Windows 64-bit) but have limitations. Only choose 32-bit if a 64-bit version isn't available or for legacy compatibility reasons."
  },
  {
    id: 9,
    question: "A user installs multiple programs and notices their C: drive is running low on space. They want to install future programs on their D: drive. During installation, what should they do?",
    options: [
      "All programs must install to C: drive - it's not changeable",
      "During installation, browse and change the destination folder to D:\\",
      "After installation, cut and paste the program folder to D:\\",
      "Reinstall Windows to D: drive first"
    ],
    correct: 1,
    explanation: "Most installers allow you to choose the installation directory. Click 'Browse' or 'Change' during installation and select a folder on D: drive (like D:\\Program Files\\). The installer handles shortcuts and registry entries. Installing to C: is NOT required. Moving installed programs by cut/paste breaks them - they must be uninstalled and reinstalled. Reinstalling Windows isn't necessary."
  },
  {
    id: 10,
    question: "A legacy program requires administrative rights to run every time, but the user is a standard user. The IT department doesn't want to make the user an administrator. What's the BEST solution?",
    options: [
      "Configure the program's shortcut to always run as administrator",
      "Give the user the administrator password to use when needed",
      "Disable User Account Control on that computer",
      "The user must become an administrator - no other option"
    ],
    correct: 0,
    explanation: "Right-click the program's shortcut, Properties > Compatibility tab > check 'Run this program as administrator.' The user will be prompted for admin credentials when launching. Alternatively, IT can use Group Policy to configure this. Sharing admin passwords violates security best practices. Disabling UAC creates security vulnerabilities. Making users admins violates the principle of least privilege."
  },
  {
    id: 11,
    question: "After installing a new application, a user notices it added a toolbar to their web browser and changed their default search engine without permission. What type of software is this MOST likely?",
    options: [
      "Legitimate software with proper installation practices",
      "Potentially Unwanted Program (PUP) or bundled adware",
      "A Windows system update",
      "Required browser security software"
    ],
    correct: 1,
    explanation: "Software that makes unauthorized changes (toolbars, search engines, homepage) is typically a PUP (Potentially Unwanted Program) or bundled adware. Many free programs bundle additional software in the installer. Users should always choose 'Custom installation' and uncheck unwanted additions. Legitimate software asks permission. This isn't a Windows update. It's not security software - it's unwanted modifications."
  },
  {
    id: 12,
    question: "A user needs to install software from a USB drive provided by a vendor, but Windows SmartScreen blocks the installation saying 'This app might harm your device.' The software is legitimate. What should they do?",
    options: [
      "Never bypass SmartScreen warnings - don't install the software",
      "Click 'More info' and then 'Run anyway' if they're certain it's legitimate",
      "Disable Windows Defender completely",
      "Format the USB drive and download from the internet instead"
    ],
    correct: 1,
    explanation: "Windows SmartScreen warns about unrecognized applications (no digital signature or reputation). If you're certain the software is legitimate (verified source), click 'More info' then 'Run anyway.' SmartScreen isn't infallible - small vendors may not have reputation scores. Never disable Windows Defender entirely. Downloading may have the same issue. Always verify legitimacy before bypassing warnings."
  },
  {
    id: 13,
    question: "An organization wants to ensure all workstations have the same software versions and configurations. Which installation method is BEST for deploying software across many computers simultaneously?",
    options: [
      "Visit each computer and install manually using the GUI installer",
      "Email users the installer and ask them to install it themselves",
      "Use deployment tools with .msi packages and Group Policy or SCCM",
      "Ship installation DVDs to each location"
    ],
    correct: 2,
    explanation: "Enterprise deployment uses tools like Group Policy, SCCM (System Center Configuration Manager), Intune, or PDQ Deploy with .msi packages for silent installation across many computers. This ensures consistency, saves time, and allows centralized management. Manual installation doesn't scale. User installation leads to inconsistency and errors. Physical media is outdated and inefficient."
  },
  {
    id: 14,
    question: "A program was working yesterday but crashes immediately today. The user didn't change any settings. What's the FIRST troubleshooting step?",
    options: [
      "Uninstall and reinstall the program",
      "Check Windows Update history for recent updates that might conflict",
      "Perform a System Restore to yesterday",
      "Run a full antivirus scan"
    ],
    correct: 1,
    explanation: "When software suddenly stops working, check Windows Update history first. Recent updates (Windows updates, driver updates, or automatic application updates) frequently cause conflicts. Review and potentially uninstall recent updates. Uninstalling/reinstalling takes time and may not help. System Restore works but is more drastic. Antivirus scans are important but unlikely if the program just worked yesterday."
  },
  {
    id: 15,
    question: "A user receives an error: 'The program can't start because MSVCR120.dll is missing from your computer.' What does this indicate and what's the solution?",
    options: [
      "The program is corrupted - reinstall it",
      "Windows is corrupted - run System File Checker",
      "The program requires Microsoft Visual C++ Redistributable - install it",
      "The hard drive is failing - replace it immediately"
    ],
    correct: 2,
    explanation: "Missing .dll errors like MSVCR120.dll indicate the program needs the Microsoft Visual C++ Redistributable package (in this case, 2013 version - 120 indicates the version). Download and install the appropriate redistributable from Microsoft. The program itself isn't corrupted. This isn't a Windows system file. The hard drive isn't the issue - it's a missing dependency."
  }
];