export const lesson31Flashcards = [
  {
    id: 1,
    front: "What are the main Windows 10/11 editions you need to know for A+?",
    back: "Home (basic consumer), Pro (business features), Pro for Workstations (high-end hardware), Enterprise (volume licensing, advanced management). Each tier adds features - Home has fewest, Enterprise has most."
  },
  {
    id: 2,
    front: "What features does Windows Pro have that Home does not?",
    back: "Domain join, Group Policy management, BitLocker encryption, Remote Desktop (host), Hyper-V virtualization, ability to defer updates. Pro is minimum for business environments."
  },
  {
    id: 3,
    front: "What is BitLocker and which editions include it?",
    back: "Full disk encryption protecting data if device stolen. Encrypts entire drive, requires password/PIN/TPM to unlock. Available in Pro, Pro for Workstations, Enterprise - NOT in Home edition."
  },
  {
    id: 4,
    front: "What is domain join and which editions support it?",
    back: "Connecting PC to Active Directory domain for centralized management. Enables network authentication, group policies, centralized updates. Available in Pro and Enterprise - NOT Home."
  },
  {
    id: 5,
    front: "What is Remote Desktop and which editions support it?",
    back: "Feature allowing remote control of computer over network. Pro/Enterprise can be RDP hosts (controlled remotely). All editions can be RDP clients (control other computers). Uses port 3389."
  },
  {
    id: 6,
    front: "What is Group Policy and which editions support it?",
    back: "Centralized configuration management for domain-joined computers. Controls security settings, software deployment, user restrictions. Only available in Pro, Pro for Workstations, Enterprise editions."
  },
  {
    id: 7,
    front: "What is Hyper-V and which editions include it?",
    back: "Microsoft's Type 1 hypervisor for creating virtual machines. Built into Pro, Pro for Workstations, Enterprise (64-bit only). Requires CPU virtualization support (VT-x/AMD-V). NOT in Home edition."
  },
  {
    id: 8,
    front: "What are the key differences between Windows 10 and Windows 11?",
    back: "Windows 11: centered Start menu/taskbar, Snap Layouts, redesigned Settings, Android app support, stricter hardware requirements (TPM 2.0, UEFI, Secure Boot). More modern UI, better performance."
  },
  {
    id: 9,
    front: "What is the Windows 11 TPM requirement?",
    back: "Requires TPM 2.0 (Trusted Platform Module) chip for installation. Hardware security chip for encryption keys, BitLocker. Windows 10 recommended TPM 1.2, Windows 11 requires 2.0."
  },
  {
    id: 10,
    front: "What is the Start menu and how does it differ in Windows 10 vs 11?",
    back: "Windows 10: Start menu in bottom-left, live tiles, list view. Windows 11: centered Start menu, no live tiles, grid of pinned apps, search bar integrated. Both access apps and settings."
  },
  {
    id: 11,
    front: "What is the taskbar used for?",
    back: "Bottom bar showing running applications, system tray (notifications, clock), Start button, search. Click icons to switch apps, right-click for options. Pin frequently used apps for quick access."
  },
  {
    id: 12,
    front: "What is Task View and how do you access it?",
    back: "Feature showing all open windows and virtual desktops. Access via taskbar button (next to Start) or Windows+Tab. Switch between apps, create/manage virtual desktops, see timeline (Windows 10)."
  },
  {
    id: 13,
    front: "What are virtual desktops in Windows?",
    back: "Multiple desktop workspaces on one computer - organize apps by task/project. Create with Task View (Windows+Tab), switch with Ctrl+Windows+Left/Right. Keep work/personal separate."
  },
  {
    id: 14,
    front: "What is Snap Assist?",
    back: "Window management feature - drag window to edge to snap/resize. Windows 10: snap to half/quarter screen. Windows 11: Snap Layouts with hover over maximize - choose from templates."
  },
  {
    id: 15,
    front: "What is the Microsoft Store?",
    back: "Official app marketplace for Windows. Download apps, games, movies, shows. Apps vetted for security, automatic updates. Modern apps (UWP) run sandboxed. Some apps free, others paid."
  },
  {
    id: 16,
    front: "What is Cortana?",
    back: "Microsoft's digital assistant. Voice or text commands for searches, reminders, system settings. Less prominent in Windows 11 - search functionality separate. Can disable if not needed."
  },
  {
    id: 17,
    front: "What is Windows Search and how do you access it?",
    back: "Find files, apps, settings, web results. Access by clicking search icon on taskbar or pressing Windows key and typing. Windows 11 has dedicated search bar, Windows 10 integrated in Start."
  },
  {
    id: 18,
    front: "What's the difference between Settings and Control Panel?",
    back: "Settings: modern interface, touch-friendly, commonly used options. Control Panel: legacy interface, advanced options, some features only here. Windows gradually moving features to Settings."
  },
  {
    id: 19,
    front: "Where would you find system information in Settings?",
    back: "Settings → System → About. Shows Windows edition, version, processor, RAM, device name, Windows activation status, BitLocker status. Quick overview of computer specs."
  },
  {
    id: 20,
    front: "What is Windows Update for Business?",
    back: "Enterprise/Pro feature for managing update deployment. Control when/how updates install, create deployment rings (groups getting updates at different times), defer feature updates. Not in Home edition."
  },
  {
    id: 21,
    front: "What Windows Pro for Workstations features should you know?",
    back: "Support for high-end hardware - up to 4 CPUs, 6TB RAM. ReFS file system support, persistent memory, faster file sharing (SMB Direct). For workstations needing maximum performance."
  },
  {
    id: 22,
    front: "What is the Action Center?",
    back: "Notification panel showing alerts and quick settings. Access from system tray (bottom-right) or Windows+A. Quick access to Wi-Fi, Bluetooth, brightness, volume, Focus Assist, Night Light."
  },
  {
    id: 23,
    front: "How do you quickly access common settings?",
    back: "Windows+I opens Settings app. Windows+X shows Quick Link menu (Power User menu) - access Computer Management, Device Manager, Disk Management, PowerShell, Settings. Right-click Start for same menu."
  },
  {
    id: 24,
    front: "What is Windows 11 Snap Layouts?",
    back: "Hover over maximize button to see window arrangement templates. Choose layout to automatically position multiple windows. More organized than Windows 10 basic snap. Remembers app groups."
  },
  {
    id: 25,
    front: "What minimum hardware does Windows 11 require?",
    back: "64-bit CPU (1GHz+, 2+ cores), 4GB RAM, 64GB storage, TPM 2.0, UEFI firmware, Secure Boot capable, DirectX 12 compatible graphics. More stringent than Windows 10."
  }
];