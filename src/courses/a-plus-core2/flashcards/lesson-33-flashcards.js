export const lesson33Flashcards = [
  {
    id: 1,
    front: "What is Internet Options in Control Panel used for?",
    back: "Configure web browser settings - security zones, privacy settings, certificates, proxy settings, homepage, temporary files. Primarily affects Internet Explorer/Edge (legacy). Access from Control Panel or browser settings."
  },
  {
    id: 2,
    front: "What are security zones in Internet Options?",
    back: "Internet (untrusted sites), Local intranet (company network), Trusted sites (manually added safe sites), Restricted sites (blocked sites). Each zone has different security levels - controls ActiveX, downloads, scripts."
  },
  {
    id: 3,
    front: "What privacy settings are in Internet Options?",
    back: "Cookie handling, pop-up blocker, tracking prevention, InPrivate browsing. Control how websites track you, store data. Block third-party cookies, adjust privacy level (low to high)."
  },
  {
    id: 4,
    front: "What certificates are managed in Internet Options?",
    back: "Digital certificates for secure websites (SSL/TLS), personal certificates, trusted root authorities. View/import/export certificates. Used for HTTPS connections, code signing, email encryption (S/MIME)."
  },
  {
    id: 5,
    front: "What is Devices and Printers used for?",
    back: "View all connected devices (printers, scanners, phones, cameras, mice, keyboards). Add/remove devices, set default printer, access device properties, troubleshoot device issues. Central device management location."
  },
  {
    id: 6,
    front: "What is Programs and Features used for?",
    back: "Uninstall programs, view installed software with size and install date, turn Windows features on/off. Access from Control Panel. Shows traditional desktop programs, not Microsoft Store apps."
  },
  {
    id: 7,
    front: "How do you turn Windows features on or off?",
    back: "Control Panel → Programs and Features → Turn Windows features on or off. Enable/disable features like Hyper-V, Telnet Client, Windows Subsystem for Linux, Internet Explorer, Print services. Requires restart."
  },
  {
    id: 8,
    front: "What is Network and Sharing Center used for?",
    back: "View network status, change adapter settings, create connections, troubleshoot network issues, set network location (Public/Private). Central network management - configure IP, DNS, sharing settings."
  },
  {
    id: 9,
    front: "What is the System applet in Control Panel?",
    back: "View computer name, domain/workgroup, Windows edition, processor, RAM, activation status. Change computer name, join domain, configure remote settings, system protection, environment variables."
  },
  {
    id: 10,
    front: "How do you change the computer name?",
    back: "Control Panel → System → Advanced system settings → Computer Name tab → Change. Or Settings → System → About → Rename this PC. Requires restart. Important for network identification."
  },
  {
    id: 11,
    front: "What are Remote Desktop settings in System Properties?",
    back: "Enable/disable Remote Desktop, select users who can connect remotely. System Properties → Remote tab. Pro/Enterprise can be RDP hosts. Must enable firewall exception, configure user access."
  },
  {
    id: 12,
    front: "What is Windows Defender Firewall in Control Panel?",
    back: "Configure firewall rules, allow apps through firewall, turn firewall on/off per network profile. Three profiles: Domain, Private, Public. Create inbound/outbound rules, advanced settings."
  },
  {
    id: 13,
    front: "What are the three firewall profiles?",
    back: "Domain (connected to domain network), Private (home/work trusted networks), Public (untrusted networks like coffee shop). Different security levels - Public most restrictive, Domain least restrictive."
  },
  {
    id: 14,
    front: "What is Mail (Microsoft Outlook) applet used for?",
    back: "Configure Outlook email profiles, add/remove email accounts, data files, manage send/receive settings. Not for configuring Mail app - only Outlook desktop application."
  },
  {
    id: 15,
    front: "What is Sound applet used for?",
    back: "Configure playback devices (speakers, headphones), recording devices (microphones), system sounds (startup, notifications). Set default devices, adjust levels, test audio, configure enhancements."
  },
  {
    id: 16,
    front: "What is User Accounts in Control Panel?",
    back: "Manage user accounts, change account type (Standard/Administrator), change password, manage credentials, configure UAC settings. Create/delete accounts, modify user settings."
  },
  {
    id: 17,
    front: "What is Device Manager used for?",
    back: "View all hardware devices, update/rollback drivers, disable devices, view resource usage (IRQ, DMA, I/O), troubleshoot hardware problems. Yellow triangle indicates problem, red X indicates disabled."
  },
  {
    id: 18,
    front: "What do the symbols in Device Manager indicate?",
    back: "Yellow triangle with exclamation mark = driver problem/device not working. Red X = device disabled. Blue question mark = unknown device. Down arrow = device disabled by user."
  },
  {
    id: 19,
    front: "What is Indexing Options used for?",
    back: "Configure Windows Search indexing - what locations are indexed for fast searching. Modify indexed locations, rebuild index if search not working. Advanced settings for file types, troubleshooting."
  },
  {
    id: 20,
    front: "What are Administrative Tools?",
    back: "Folder containing advanced system tools - Computer Management, Event Viewer, Services, Task Scheduler, Performance Monitor, Disk Cleanup, System Configuration. For IT professionals, advanced troubleshooting."
  },
  {
    id: 21,
    front: "What is File Explorer Options (Folder Options)?",
    back: "Configure File Explorer behavior - show hidden files, show file extensions, single/double-click to open, Quick Access settings, search options, view settings. Customize file browsing experience."
  },
  {
    id: 22,
    front: "What Power Options are available in Control Panel?",
    back: "Choose power plan (Balanced, Power saver, High performance), configure sleep/hibernate settings, screen timeout, hard disk timeout, USB suspend. Create custom power plans, advanced settings."
  },
  {
    id: 23,
    front: "What is Ease of Access Center?",
    back: "Accessibility features - Narrator (screen reader), Magnifier, High Contrast, On-Screen Keyboard, Speech Recognition. Make computer easier to use for vision, hearing, mobility impairments."
  },
  {
    id: 24,
    front: "How do you access Control Panel?",
    back: "Windows+X → Control Panel (Windows 10). Windows+R → type 'control' → Enter. Search 'Control Panel' in Start menu. Many features moved to Settings app in Windows 11."
  },
  {
    id: 25,
    front: "What's the relationship between Settings and Control Panel?",
    back: "Settings: modern interface, touch-friendly, common tasks. Control Panel: legacy, advanced options, some features only here. Microsoft gradually moving features to Settings. Both coexist in current Windows."
  },
  {
    id: 26,
    front: "What categories appear in Control Panel Category view?",
    back: "System and Security, Network and Internet, Hardware and Sound, Programs, User Accounts, Appearance and Personalization, Clock and Region, Ease of Access. Can switch to icon view for direct access."
  },
  {
    id: 27,
    front: "What does 'Allow an app through Windows Firewall' do?",
    back: "Creates exception allowing specific program to communicate through firewall. Select app, choose which network types (Domain, Private, Public) to allow. Needed for programs requiring incoming connections."
  },
  {
    id: 28,
    front: "How do you configure proxy settings in Internet Options?",
    back: "Internet Options → Connections tab → LAN settings. Check 'Use a proxy server', enter IP and port. Or 'Use automatic configuration script'. Needed for corporate networks routing internet through proxy."
  }
];