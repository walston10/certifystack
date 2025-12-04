export const lesson31Quiz = [
  {
    id: 1,
    question: "A small business owner wants to join their new computer to the company's Active Directory domain. They currently have Windows 11 Home installed. What is the MOST cost-effective solution?",
    options: [
      "Purchase Windows 11 Pro and perform an in-place upgrade",
      "Reinstall Windows 11 Home and configure a workgroup instead",
      "Download domain join software from Microsoft Store",
      "Use Remote Desktop to connect to a domain-joined computer"
    ],
    correct: 0,
    explanation: "Windows 11 Home does not support domain join - this feature requires Windows 11 Pro or higher. The most cost-effective solution is to upgrade to Windows 11 Pro, which can be done in-place without reinstalling the OS. Workgroups are not the same as domains, and domain join is not available as a separate download or through Remote Desktop."
  },
  {
    id: 2,
    question: "Your manager asks you to enable full-disk encryption on all company laptops to protect sensitive data. The laptops are currently running Windows 11 Home. What should you do FIRST?",
    options: [
      "Enable BitLocker in the Settings app",
      "Upgrade the laptops to Windows 11 Pro or Enterprise",
      "Install third-party encryption software",
      "Enable Encrypting File System (EFS) on all drives"
    ],
    correct: 1,
    explanation: "BitLocker drive encryption is only available in Windows 11 Pro, Pro for Workstations, and Enterprise editions - it is NOT included in Windows 11 Home. Before enabling BitLocker, you must first upgrade to a supported edition. While third-party encryption exists, the question asks about using built-in features. EFS encrypts individual files/folders, not entire drives."
  },
  {
    id: 3,
    question: "A graphic designer with Windows 11 Pro wants to run Linux virtual machines for testing. They have 32GB RAM and an Intel processor with virtualization support enabled. What should you configure?",
    options: [
      "Download VirtualBox from the internet",
      "Enable Hyper-V through Windows Features",
      "Upgrade to Windows 11 Enterprise first",
      "Use Windows Subsystem for Linux (WSL) instead"
    ],
    correct: 1,
    explanation: "Hyper-V is Microsoft's built-in virtualization platform available in Windows 11 Pro, Pro for Workstations, and Enterprise (but NOT Home). Since they already have Pro with adequate hardware, enabling Hyper-V through 'Turn Windows features on or off' is the correct approach. While VirtualBox works, the question implies using built-in features. WSL is for running Linux environments, not full VMs."
  },
  {
    id: 4,
    question: "A user calls saying they can't find the Control Panel on their new Windows 11 computer. They need to configure advanced system settings. What should you tell them?",
    options: [
      "Control Panel has been removed from Windows 11",
      "Right-click the Start button and select 'Control Panel' from the menu",
      "Search for 'Control Panel' in the Start menu search box",
      "Open Settings app instead - Control Panel is deprecated"
    ],
    correct: 2,
    explanation: "In Windows 11, the Control Panel still exists but is less prominently featured. The easiest way to access it is by typing 'Control Panel' in the Start menu search box. While Microsoft is gradually moving settings to the Settings app, Control Panel still exists and is needed for many advanced configurations. Right-clicking the Start button shows the 'Quick Link' menu, which doesn't include Control Panel by default in Windows 11."
  },
  {
    id: 5,
    question: "An office worker wants to view their email on one side of the screen while taking notes in Word on the other side. They keep manually resizing windows but it's time-consuming. What Windows 11 feature should you show them?",
    options: [
      "Task View for switching between apps",
      "Virtual Desktops to separate work",
      "Snap Assist to arrange windows side-by-side",
      "Multiple monitors setup"
    ],
    correct: 2,
    explanation: "Snap Assist (also called Snap Layouts in Windows 11) allows users to quickly arrange windows in predefined layouts by hovering over the maximize button or using Win+Z. This is perfect for side-by-side arrangement. Task View shows all open windows/desktops but doesn't arrange them. Virtual Desktops organize different workspaces but don't split a single screen. Multiple monitors work but aren't necessary for this scenario."
  },
  {
    id: 6,
    question: "A company needs to deploy 50 identical Windows 11 configurations to new computers and wants centralized management of security policies. Which edition should they purchase?",
    options: [
      "Windows 11 Home - it's the most cost-effective",
      "Windows 11 Pro - it supports Group Policy",
      "Windows 11 Pro for Workstations - it has better performance",
      "Windows 11 Enterprise - it's designed for large organizations"
    ],
    correct: 3,
    explanation: "Windows 11 Enterprise is specifically designed for large organizations with 50+ computers, offering advanced deployment tools, centralized management, and enterprise-grade security features. While Pro does support Group Policy and domain join, Enterprise adds features like DirectAccess, AppLocker, Credential Guard, and better deployment options for large-scale rollouts. Pro for Workstations is for high-performance computing, not management."
  },
  {
    id: 7,
    question: "A user upgraded from Windows 10 to Windows 11 and complains the Start menu is now centered instead of left-aligned. What should you do?",
    options: [
      "Tell them this cannot be changed in Windows 11",
      "Reinstall Windows 10 since they prefer it",
      "Go to Settings > Personalization > Taskbar and change the alignment",
      "Edit the Registry to restore the old Start menu"
    ],
    correct: 2,
    explanation: "Windows 11 allows users to change the Start menu and taskbar alignment between centered (default) and left-aligned. This is easily done in Settings > Personalization > Taskbar > Taskbar behaviors > Taskbar alignment. No need to reinstall Windows 10 or edit the Registry for this simple preference change."
  },
  {
    id: 8,
    question: "A data analyst needs to run resource-intensive simulations and wants the best Windows 11 performance for their workstation with dual Xeon processors and 128GB RAM. Which edition is BEST suited for their needs?",
    options: [
      "Windows 11 Home",
      "Windows 11 Pro",
      "Windows 11 Pro for Workstations",
      "Windows 11 Enterprise"
    ],
    correct: 2,
    explanation: "Windows 11 Pro for Workstations is specifically designed for high-end hardware and demanding workloads. It supports up to 4 CPUs, 6TB of RAM, ReFS (Resilient File System), and persistent memory. Regular Pro supports up to 2 CPUs and 2TB RAM, which while sufficient for most users, doesn't optimize the dual Xeon setup. Enterprise is for organizational management, not performance optimization."
  },
  {
    id: 9,
    question: "A remote worker needs to access their office desktop computer from home. Their office PC runs Windows 11 Home. What is the issue?",
    options: [
      "Windows 11 Home cannot host Remote Desktop connections",
      "They need to upgrade their home computer, not the office one",
      "Remote Desktop only works on the same network",
      "They need to install third-party remote access software first"
    ],
    correct: 0,
    explanation: "Windows 11 Home can act as a Remote Desktop CLIENT (connecting to other computers) but cannot be a Remote Desktop HOST (being connected to remotely). To allow remote connections to the office PC, it must run Windows 11 Pro or higher. This is a key feature difference between Home and Pro editions. While third-party solutions exist, the built-in Remote Desktop won't work with Home as the host."
  },
  {
    id: 10,
    question: "You're setting up a new Windows 11 Pro computer for an employee. They want to keep personal projects separate from work files by using different desktops. Which feature should you show them?",
    options: [
      "Create separate user accounts for work and personal use",
      "Use Virtual Desktops (Task View) to organize workspaces",
      "Set up different browser profiles",
      "Install virtualization software for isolation"
    ],
    correct: 1,
    explanation: "Virtual Desktops in Windows 11 (accessed via Task View button or Win+Tab) allow users to create multiple desktop workspaces on a single account. Each desktop can have different open applications and windows, making it easy to separate work and personal tasks. While separate user accounts work, Virtual Desktops provide quick switching without logging out. Browser profiles only separate browsing, and virtualization is overkill for simple organization."
  },
  {
    id: 11,
    question: "A user asks why they can't find Cortana on their new Windows 11 computer. What is the MOST accurate explanation?",
    options: [
      "Cortana was completely removed from Windows 11",
      "Cortana is now a separate app that needs to be downloaded from Microsoft Store",
      "Cortana is only available in Windows 11 Pro and higher",
      "Cortana requires an internet connection to appear"
    ],
    correct: 1,
    explanation: "In Windows 11, Cortana is no longer integrated into the taskbar by default like in Windows 10. It's now a separate app available in the Microsoft Store. Microsoft has de-emphasized Cortana in favor of improved search functionality. Cortana is available in all Windows 11 editions (not just Pro), but users must download it if they want to use it."
  },
  {
    id: 12,
    question: "An IT administrator needs to configure power settings, view system information, and manage devices on a Windows 11 computer. They ask whether to use Settings or Control Panel. What's the BEST advice?",
    options: [
      "Always use Settings app - Control Panel is obsolete",
      "Always use Control Panel - Settings app is incomplete",
      "Use Settings for most tasks, but some advanced options still require Control Panel",
      "They are identical - either one works for all tasks"
    ],
    correct: 2,
    explanation: "While Microsoft is gradually moving functionality to the Settings app, many advanced configurations still require Control Panel in Windows 11. For example, advanced system settings, device manager detailed views, and some network configurations are easier or only available through Control Panel. The best practice is to use Settings for common tasks but know that Control Panel is still necessary for advanced administration."
  },
  {
    id: 13,
    question: "A small medical office is purchasing new computers and needs to comply with HIPAA regulations requiring full-disk encryption. They want the most affordable Windows 11 edition that meets this requirement. Which should they choose?",
    options: [
      "Windows 11 Home with third-party encryption",
      "Windows 11 Pro for BitLocker support",
      "Windows 11 Pro for Workstations for better security",
      "Windows 11 Enterprise for healthcare compliance"
    ],
    correct: 1,
    explanation: "Windows 11 Pro is the most affordable edition that includes BitLocker full-disk encryption, which can help meet HIPAA requirements for protecting patient data. While Enterprise has additional features, Pro provides the essential BitLocker encryption needed at a lower cost for a small office. Home edition doesn't include BitLocker, and Pro for Workstations adds performance features, not additional security for this use case."
  },
  {
    id: 14,
    question: "A user complains that after upgrading to Windows 11, they can no longer drag files to the taskbar to open them in pinned applications. What should you tell them?",
    options: [
      "This is a known limitation in Windows 11 - the feature was removed",
      "Enable this in Settings > Personalization > Taskbar",
      "Right-click the taskbar and select 'Allow file dragging'",
      "Update to the latest Windows 11 version to restore this feature"
    ],
    correct: 0,
    explanation: "Windows 11 removed several taskbar features that existed in Windows 10, including the ability to drag and drop files onto taskbar icons. This was a deliberate design change in the new taskbar implementation. Users must adapt to opening the application first and then opening files, or use other methods like right-clicking files and selecting 'Open with.' This feature has not been restored in updates as of the current version."
  },
  {
    id: 15,
    question: "A company wants to standardize on Windows 11 but has a mix of older computers. Some computers don't have TPM 2.0 chips. What is the BEST recommendation?",
    options: [
      "Install Windows 11 anyway by bypassing the TPM requirement",
      "Keep Windows 10 on those machines until hardware is upgraded",
      "Install Windows 11 Home which doesn't require TPM",
      "Enable TPM 1.2 instead of 2.0 in BIOS"
    ],
    correct: 1,
    explanation: "While it's technically possible to bypass Windows 11's TPM 2.0 requirement, Microsoft explicitly states that unsupported devices won't receive updates and may have stability issues. The BEST practice is to keep Windows 10 on incompatible hardware until it can be replaced or upgraded, as Windows 10 support continues until October 2025. Windows 11 Home has the same TPM 2.0 requirement as other editions. TPM 1.2 is not officially supported for Windows 11."
  }
];