export const lesson51Flashcards = [
  {
    id: 1,
    front: "What are common symptoms that an application won't install?",
    back: "Error messages during installation, installer crashes, 'insufficient permissions' errors, 'not enough disk space', missing prerequisites. Check: admin rights, disk space (20%+ free), .NET Framework, Visual C++ redistributables, antivirus interference."
  },
  {
    id: 2,
    front: "What should you check if an application won't install?",
    back: "Run installer as administrator, verify sufficient disk space, check system requirements (CPU, RAM, OS version), install prerequisites (.NET, VC++ redist), disable antivirus temporarily, download fresh installer (corruption), check installer log files."
  },
  {
    id: 3,
    front: "What causes 'application won't start' or crashes on launch?",
    back: "Missing DLL files, corrupted installation, incompatible Windows version, insufficient permissions, conflicts with other software, outdated application, graphics driver issues. Try: reinstall app, run as admin, compatibility mode, update app/Windows."
  },
  {
    id: 4,
    front: "How do you use compatibility mode to run older applications?",
    back: "Right-click .exe → Properties → Compatibility tab → check 'Run this program in compatibility mode for' → select Windows version (7, 8, XP). Also try: 'Run as administrator', 'Disable display scaling'. Test each setting."
  },
  {
    id: 5,
    front: "What is a missing DLL error and how do you fix it?",
    back: "Application needs specific DLL (Dynamic Link Library) file not found. Error shows DLL name. Fix: reinstall application (includes DLLs), install Visual C++ redistributables, download DLL from reputable source (last resort), run SFC /scannow for system DLLs."
  },
  {
    id: 6,
    front: "What causes time and date issues in Windows?",
    back: "Dead CMOS battery (clock resets), incorrect time zone, disabled Windows Time service, internet time server unreachable, malware. Symptoms: certificates fail, file timestamps wrong, authentication issues. Replace CMOS battery if resets on every boot."
  },
  {
    id: 7,
    front: "How do you fix incorrect time/date in Windows?",
    back: "Right-click clock → Adjust date/time → sync now. Check: correct time zone, automatic time sync enabled, Windows Time service running (services.msc). If persists: replace CMOS battery (desktop), check BIOS time, manually set time."
  },
  {
    id: 8,
    front: "What indicates a failing CMOS battery?",
    back: "Time/date resets to default on every boot, BIOS settings reset, 'CMOS checksum error' message, boot order changes. Desktop uses CR2032 coin battery (easy replacement). Laptop CMOS battery harder to access. Battery lasts 3-10 years typically."
  },
  {
    id: 9,
    front: "What causes print spooler errors?",
    back: "Stuck print jobs, corrupted spooler files, printer driver issues, insufficient disk space, service crashes. Symptoms: can't print, jobs stuck in queue, spooler service stops repeatedly. Fix: restart service, clear spooler folder, reinstall drivers."
  },
  {
    id: 10,
    front: "How do you troubleshoot print spooler crashes?",
    back: "Services.msc → restart Print Spooler service. If fails: stop service → delete C:\\Windows\\System32\\spool\\PRINTERS contents → restart service. Check Event Viewer for errors. Reinstall printer driver. Verify printer connection."
  },
  {
    id: 11,
    front: "What causes Windows Update failures?",
    back: "Insufficient disk space (need 20GB+), corrupted update files, driver conflicts, third-party antivirus interference, Windows Update service stopped, network issues. Symptoms: updates download but fail to install, error codes, repeated download attempts."
  },
  {
    id: 12,
    front: "How do you fix Windows Update errors?",
    back: "Run Windows Update Troubleshooter (Settings → Troubleshoot), free disk space (20GB+ needed), restart Windows Update service, reset update components (rename SoftwareDistribution folder), run DISM and SFC, check internet connection."
  },
  {
    id: 13,
    front: "What is the Windows Update Troubleshooter?",
    back: "Automated tool fixing common update issues. Settings → Update & Security → Troubleshoot → Windows Update. Checks: update service status, corrupted files, pending restarts, disk space. Attempts automatic fixes. Run before manual troubleshooting."
  },
  {
    id: 14,
    front: "What causes slow profile loading in Windows?",
    back: "Corrupted user profile, too many files in profile, roaming profile sync issues (domain), insufficient resources, malware, profile redirection problems. Symptoms: long login time, temporary profile message, desktop items missing. May need new profile."
  },
  {
    id: 15,
    front: "How do you fix a corrupted user profile?",
    back: "Create new user account, copy data from old profile (C:\\Users\\OldUser to C:\\Users\\NewUser). Or registry fix: regedit → HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList → find SID with .bak → rename. Backup data first."
  },
  {
    id: 16,
    front: "What is 'USB controller resource warning' error?",
    back: "Too many USB devices or power draw exceeds limit. USB hub power issues, faulty device, driver issues. Symptoms: device not recognized, intermittent disconnections. Fix: disconnect devices, use powered hub, update USB drivers, check Device Manager."
  },
  {
    id: 17,
    front: "What causes system lockups or freezes?",
    back: "Overheating (CPU/GPU), failing hardware (RAM, HDD), driver conflicts, malware, software conflicts, insufficient RAM, power supply issues. Check: temperatures, Event Viewer, run hardware diagnostics, Safe Mode behavior, recent changes."
  },
  {
    id: 18,
    front: "How do you troubleshoot random system freezes?",
    back: "Check temperatures (CPU-Z, HWMonitor), test RAM (Windows Memory Diagnostic), check drive health (CHKDSK, SMART), update all drivers, scan for malware, check Event Viewer for errors before freeze, boot Safe Mode (if stable = software issue)."
  },
  {
    id: 19,
    front: "What causes automatic restart issues?",
    back: "Windows Update installing, power settings, system failure (BSOD with auto-restart enabled), scheduled tasks, overheating triggering safety shutdown/restart. Check: Windows Update history, Power Options, disable automatic restart on system failure."
  },
  {
    id: 20,
    front: "How do you disable automatic restart on system failure?",
    back: "See BSOD error codes instead of instant restart. System Properties → Advanced → Startup and Recovery → Settings → uncheck 'Automatically restart'. Or Advanced system settings → Advanced tab → Startup and Recovery. Helps troubleshooting."
  },
  {
    id: 21,
    front: "What causes 'Limited connectivity' network issues?",
    back: "DHCP failure (APIPA address 169.254.x.x), incorrect network settings, DNS issues, gateway unreachable, IP conflict. Connected to network but no internet. Fix: ipconfig /release and /renew, check gateway/DNS settings, restart router, network troubleshooter."
  },
  {
    id: 22,
    front: "How do you fix limited or no connectivity?",
    back: "Network troubleshooter (right-click network icon), ipconfig /release then /renew, restart network adapter, check gateway IP (should not be 169.254.x.x), verify DNS settings (8.8.8.8), restart router/modem, check DHCP server."
  },
  {
    id: 23,
    front: "What causes 'Can't access network resources' errors?",
    back: "Network discovery disabled, firewall blocking, incorrect permissions, wrong workgroup/domain, credential issues, SMB version mismatch, master browser issues. Check: network discovery on, same workgroup, correct credentials, ping successful."
  },
  {
    id: 24,
    front: "What is Internet Explorer script error?",
    back: "JavaScript errors on websites. Legacy browser issue. Symptoms: error popups, pages not loading correctly. Fix: clear cache/cookies, disable script debugging (Internet Options → Advanced), reset IE settings, use modern browser (Edge, Chrome)."
  },
  {
    id: 25,
    front: "What causes 'low virtual memory' warnings?",
    back: "Insufficient RAM for workload, small page file, memory-intensive applications, memory leak. Windows uses hard drive as virtual memory when RAM full. Fix: close programs, increase page file size, add more RAM (best solution)."
  },
  {
    id: 26,
    front: "How do you adjust virtual memory (page file)?",
    back: "System Properties → Advanced → Performance Settings → Advanced → Virtual Memory → Change. Uncheck 'Automatically manage', select drive, Custom size. Recommended: 1.5x RAM (initial) to 3x RAM (maximum). Or let Windows manage automatically."
  },
  {
    id: 27,
    front: "What causes applications to crash frequently?",
    back: "Corrupted installation, incompatible software, driver issues, insufficient resources, .NET Framework problems, malware, Windows corruption. Check: Event Viewer Application log, reinstall app, update Windows/drivers, compatibility mode, SFC scan."
  },
  {
    id: 28,
    front: "What is Application Event Log and how do you use it?",
    back: "Event Viewer → Windows Logs → Application. Shows program crashes, errors, warnings. Look for: red Error icons near crash time, Event ID, Faulting application name. Search 'Event ID + application name' online for solutions."
  },
  {
    id: 29,
    front: "What causes 'Windows license will expire soon' message?",
    back: "Activation issue - usually after hardware change, using generic key, or evaluation version. Windows not properly activated. Symptoms: watermark, reminder messages, limited personalization. Fix: reactivate Windows, enter valid product key, contact Microsoft support."
  },
  {
    id: 30,
    front: "How do you reactivate Windows after hardware changes?",
    back: "Settings → Update & Security → Activation → Troubleshoot. Select 'I changed hardware on this device recently'. Sign in with Microsoft account linked to license. Digital license should reactivate. May need to contact support for major changes."
  }
];