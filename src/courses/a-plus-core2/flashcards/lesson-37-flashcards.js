export const lesson37Flashcards = [
  {
    id: 1,
    front: "What are the main sources for installing applications in Windows?",
    back: "Microsoft Store (vetted apps, automatic updates), third-party downloads (vendor websites, download sites), optical media (CDs/DVDs), network shares (corporate deployments), removable media (USB drives)."
  },
  {
    id: 2,
    front: "What file types are used for Windows application installation?",
    back: ".exe (executable installer), .msi (Windows Installer package), .msix (modern app package), .appx (UWP apps). Double-click to run. MSI allows standardized deployment, command-line installation."
  },
  {
    id: 3,
    front: "What is the Microsoft Store and what are its benefits?",
    back: "Official Windows app marketplace. Apps vetted for security, sandboxed execution (limited system access), automatic updates, easy uninstall (no leftover files). Universal apps work across devices. Some free, some paid."
  },
  {
    id: 4,
    front: "What should you verify before installing software?",
    back: "System requirements (CPU, RAM, storage, OS version), compatibility with Windows version, 32-bit vs 64-bit, available disk space, administrator rights needed, antivirus won't block, conflicts with existing software."
  },
  {
    id: 5,
    front: "What is a typical installation wizard flow?",
    back: "Run installer → accept license agreement (EULA) → choose installation location → select components/features → create desktop/Start menu shortcuts → install → finish/restart if needed. Follow prompts, read each screen."
  },
  {
    id: 6,
    front: "What is a silent installation?",
    back: "Automated installation with no user interaction. Uses command-line switches (/silent, /quiet, /s). Pre-configured answers, no prompts. Used for mass deployment, scripting. Example: setup.exe /s /v'/qn'."
  },
  {
    id: 7,
    front: "What is an unattended installation?",
    back: "Installation using answer file for automated responses. Answer file contains all installation choices (path, features, license acceptance). No user interaction needed. Used for OS and application deployment at scale."
  },
  {
    id: 8,
    front: "How do you check system requirements for software?",
    back: "Read software documentation, vendor website, or readme file. Check: OS version/edition, CPU speed/cores, RAM amount, disk space, graphics card, screen resolution, .NET Framework version, additional components (DirectX, Visual C++)."
  },
  {
    id: 9,
    front: "What is the difference between 32-bit and 64-bit applications?",
    back: "32-bit: runs on 32-bit or 64-bit Windows, limited to 4GB RAM, installs to Program Files (x86). 64-bit: only runs on 64-bit Windows, can use more than 4GB RAM, better performance, installs to Program Files."
  },
  {
    id: 10,
    front: "How do you update applications?",
    back: "Microsoft Store apps: automatic or Settings → Apps → check for updates. Desktop apps: built-in updater (Help → Check for updates), download from vendor website, auto-update prompts. Keep software updated for security."
  },
  {
    id: 11,
    front: "How do you uninstall applications properly?",
    back: "Settings → Apps → Apps & features → select app → Uninstall. Or Control Panel → Programs and Features → select → Uninstall. Use app's own uninstaller if available. Avoid just deleting program folder."
  },
  {
    id: 12,
    front: "What are third-party uninstallers and why use them?",
    back: "Tools that remove programs plus leftover files/registry entries. Examples: Revo Uninstaller, IObit Uninstaller. More thorough than Windows built-in uninstaller. Useful for stubborn programs or complete removal."
  },
  {
    id: 13,
    front: "What is application compatibility mode?",
    back: "Run old programs designed for older Windows versions. Right-click .exe → Properties → Compatibility tab → check 'Run this program in compatibility mode' → select Windows version. Fixes compatibility issues."
  },
  {
    id: 14,
    front: "When would you use 'Run as administrator'?",
    back: "Program needs elevated privileges (system changes, hardware access, install drivers). Right-click .exe → Run as administrator. UAC prompt appears. Needed for some installers, admin tools, legacy programs."
  },
  {
    id: 15,
    front: "What are default program associations?",
    back: "Which application opens specific file types. Settings → Apps → Default apps → Choose default apps by file type. Example: .pdf opens in Adobe Reader, .jpg opens in Photos. Change if prefer different program."
  },
  {
    id: 16,
    front: "How do you change default program for a file type?",
    back: "Right-click file → Open with → Choose another app → select program → check 'Always use this app' → OK. Or Settings → Apps → Default apps → Choose default apps by file type."
  },
  {
    id: 17,
    front: "What is startup program management?",
    back: "Control which programs run at Windows startup. Task Manager → Startup tab → right-click → Enable/Disable. Disabling unused startup programs improves boot time. Doesn't uninstall, just prevents auto-start."
  },
  {
    id: 18,
    front: "How do you identify high-impact startup programs?",
    back: "Task Manager → Startup tab → check 'Startup impact' column (High, Medium, Low, None). Disable High impact programs not needed at startup. Improves boot time without affecting functionality when manually started."
  },
  {
    id: 19,
    front: "What is the Startup folder and how is it used?",
    back: "Folder containing shortcuts to programs that run at login. Location: C:\\Users\\[username]\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup. Place shortcut here for auto-start. Shell:startup shortcut."
  },
  {
    id: 20,
    front: "What security precautions should you take when downloading software?",
    back: "Download from official vendor websites only, verify HTTPS connection, check digital signatures, scan with antivirus before running, avoid download aggregator sites, read reviews, watch for bundled software during install."
  },
  {
    id: 21,
    front: "What are bundled/unwanted programs in installers?",
    back: "Additional software included with main program (toolbars, browser extensions, adware). Often pre-checked during installation. Watch for 'Custom/Advanced' install option to deselect. Read each install screen carefully."
  },
  {
    id: 22,
    front: "What is Digital Signature verification?",
    back: "Right-click .exe → Properties → Digital Signatures tab → verify publisher. Confirms software from legitimate source, hasn't been tampered with. Unsigned software may be risky. Windows warns about unsigned drivers/apps."
  },
  {
    id: 23,
    front: "What network installation methods exist?",
    back: "Network share (UNC path \\\\server\\share), mapped drive, software deployment via Group Policy (domain), SCCM/Intune (enterprise). Allows centralized software distribution, version control, standardized deployments."
  },
  {
    id: 24,
    front: "What is software activation/licensing?",
    back: "Verifying legal purchase before full use. Methods: product key entry, online activation, volume licensing, subscription. Some software requires internet connection to activate. Keep license keys secure, maintain proof of purchase."
  },
  {
    id: 25,
    front: "What common installation issues should you know?",
    back: "Insufficient permissions (need admin), insufficient disk space, missing prerequisites (.NET Framework, Visual C++), incompatible Windows version, antivirus blocking, previous version conflict, corrupted installer."
  },
  {
    id: 26,
    front: "What are software prerequisites/dependencies?",
    back: "Required components for software to run. Common: .NET Framework, Visual C++ Redistributables, Java Runtime, DirectX, specific Windows features. Usually installed automatically by main installer or available from Microsoft."
  },
  {
    id: 27,
    front: "How do you troubleshoot installation failures?",
    back: "Check installer log files, verify system requirements, run as administrator, disable antivirus temporarily, install prerequisites manually, check disk space, reboot and retry, download fresh installer, compatibility mode."
  },
  {
    id: 28,
    front: "What is the Windows Apps & features list?",
    back: "Settings → Apps → Apps & features. Shows all installed programs (desktop and Store apps) with size, install date. Uninstall, modify, or move apps. Includes search/filter. Modern replacement for Programs and Features."
  },
  {
    id: 29,
    front: "What happens when you reset an app in Windows?",
    back: "Settings → Apps → Apps & features → select app → Advanced options → Reset. Clears app data, returns to fresh install state. Fixes corrupted app settings. Doesn't uninstall app, just clears preferences/data."
  },
  {
    id: 30,
    front: "What is repair/modify in application installation?",
    back: "Programs and Features → select program → Repair/Modify button. Repair: fixes corrupted files without reinstalling. Modify: change installed components/features. Not all programs support these options - depends on installer type."
  }
];