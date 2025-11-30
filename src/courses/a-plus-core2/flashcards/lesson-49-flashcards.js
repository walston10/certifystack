export const lesson49Flashcards = [
  {
    id: 1,
    front: "What is a Blue Screen of Death (BSOD)?",
    back: "Critical system error causing Windows to crash and display blue screen with error code. Indicates hardware failure, driver issue, or corrupted system files. Record STOP code for troubleshooting. System restarts automatically unless configured otherwise."
  },
  {
    id: 2,
    front: "What common causes lead to BSOD errors?",
    back: "Bad drivers (recently installed/updated), hardware failure (RAM, hard drive), overheating, corrupted system files, malware, incompatible software, BIOS/firmware issues. Check: recent changes, event viewer, run hardware diagnostics."
  },
  {
    id: 3,
    front: "What is a black screen on startup?",
    back: "Display remains black with no Windows logo or login screen. Causes: display/graphics card failure, corrupted display drivers, power issues, failed Windows update, disconnected monitor. Try: check connections, boot to Safe Mode, external monitor."
  },
  {
    id: 4,
    front: "What is a boot loop and what causes it?",
    back: "Computer continuously restarts, never reaches Windows desktop. Causes: corrupted boot files, failed Windows update, hardware failure, driver issues, registry corruption. Try: Safe Mode, Startup Repair, System Restore, check hardware."
  },
  {
    id: 5,
    front: "What does 'No bootable device' or 'Operating system not found' mean?",
    back: "BIOS/UEFI can't find bootable drive. Causes: failed hard drive, incorrect boot order, loose cables, corrupted boot sector. Check: BIOS boot order, drive connections, listen for drive sounds, run diagnostics."
  },
  {
    id: 6,
    front: "What is Windows Startup Repair and when should you use it?",
    back: "Automated tool fixing common boot problems - corrupted boot files, missing bootloader, registry issues. Access: boot from installation media or recovery partition → Troubleshoot → Startup Repair. Use when Windows won't boot normally."
  },
  {
    id: 7,
    front: "What is Safe Mode and how do you access it?",
    back: "Windows loads with minimal drivers and services. For troubleshooting - uninstall bad drivers, remove malware, fix boot issues. Access: Settings → Recovery → Restart now → Troubleshoot → Advanced → Startup Settings → Restart → F4 (Safe Mode)."
  },
  {
    id: 8,
    front: "What are the different Safe Mode options?",
    back: "Safe Mode (minimal drivers, no network), Safe Mode with Networking (includes network drivers), Safe Mode with Command Prompt (command line instead of GUI). Use networking for downloading drivers/updates, command prompt for advanced repairs."
  },
  {
    id: 9,
    front: "What is System Restore and when should you use it?",
    back: "Reverts system files, registry, drivers to previous restore point. Doesn't affect personal files. Use when: new driver causes problems, software installation breaks Windows, Windows Update issues. Control Panel → Recovery → Open System Restore."
  },
  {
    id: 10,
    front: "How do restore points work in Windows?",
    back: "Snapshots of system state created automatically (before updates, driver installs) or manually. Includes: system files, registry, installed programs. Doesn't include: user files, emails. Limited disk space allocated. Enable System Protection to create."
  },
  {
    id: 11,
    front: "What does SFC /scannow do and when should you use it?",
    back: "System File Checker scans and repairs corrupted Windows system files. Replaces bad files from cache. Run as administrator in Command Prompt: sfc /scannow. Use when: system instability, errors after malware removal, corrupted files suspected."
  },
  {
    id: 12,
    front: "What is the Windows Recovery Environment (WinRE)?",
    back: "Recovery tools for troubleshooting boot problems. Includes: Startup Repair, System Restore, Command Prompt, System Image Recovery, UEFI settings. Access: boot from installation media or hold Shift during restart → Troubleshoot."
  },
  {
    id: 13,
    front: "What is Automatic Repair in Windows?",
    back: "Windows automatically attempts repair after failed boots (2-3 consecutive failures). Runs Startup Repair automatically. If fails, enters WinRE. Can disable in Command Prompt: bcdedit /set {default} recoveryenabled No (not recommended)."
  },
  {
    id: 14,
    front: "What is the Startup Settings menu?",
    back: "Advanced boot options menu. Access via WinRE → Troubleshoot → Advanced → Startup Settings → Restart. Options: Safe Mode variants, Enable boot logging, Disable driver signature enforcement, Disable early launch anti-malware, Low-resolution video."
  },
  {
    id: 15,
    front: "What causes slow Windows performance?",
    back: "Insufficient RAM, slow/full hard drive, too many startup programs, malware, fragmented HDD, background updates, outdated drivers, overheating, too many browser tabs. Check: Task Manager (CPU, Memory, Disk usage), free disk space."
  },
  {
    id: 16,
    front: "How do you troubleshoot slow performance?",
    back: "Check Task Manager for resource hogs, disable unnecessary startup programs, run antivirus scan, free up disk space (20%+ free needed), defragment HDD (not SSD), update drivers, check for Windows Updates, clean temp files, add RAM."
  },
  {
    id: 17,
    front: "What causes application crashes in Windows?",
    back: "Corrupted application files, insufficient resources (RAM), conflicting software, outdated application, .NET Framework issues, missing DLL files, incompatible Windows version, malware. Try: reinstall app, update app, compatibility mode, check Event Viewer."
  },
  {
    id: 18,
    front: "What causes 'This app can't run on your PC' error?",
    back: "32-bit app on 64-bit Windows (should work), 64-bit app on 32-bit Windows (won't work), incompatible Windows version, corrupted download. Check: system type (Settings → System → About), download correct version, run compatibility troubleshooter."
  },
  {
    id: 19,
    front: "What causes services not starting?",
    back: "Service disabled, dependency services not running, corrupted service files, permissions issues, malware. Check: services.msc → service properties → startup type, dependencies tab, Event Viewer for errors. Set to Automatic, check dependencies running."
  },
  {
    id: 20,
    front: "What are improper shutdown symptoms and causes?",
    back: "Windows didn't shut down properly - displays 'Windows didn't shut down correctly' on next boot. Causes: power failure, forced shutdown (holding power button), driver crash, Windows Update installation. Can trigger Automatic Repair. Usually not harmful unless frequent."
  },
  {
    id: 21,
    front: "What is spinning wheel/endless loading screen?",
    back: "Windows stuck at loading screen with spinning dots. Causes: Windows Update installing, driver issue, corrupted system files, hard drive failure. Wait 30+ minutes first (updates can be slow), then force restart, boot to Safe Mode, run Startup Repair."
  },
  {
    id: 22,
    front: "What troubleshooting steps for black screen with cursor?",
    back: "Explorer.exe not loading. Try: Ctrl+Shift+Esc → File → Run → explorer.exe. Or boot Safe Mode, check Event Viewer, run SFC, System Restore. Could be corrupted user profile, malware, or recent update issue."
  },
  {
    id: 23,
    front: "What is 'Missing operating system' error?",
    back: "Boot sector corrupted or boot configuration damaged. Causes: failed Windows update, disk errors, malware, improper shutdown. Fix: boot to WinRE → Command Prompt → bootrec /fixmbr, bootrec /fixboot, bootrec /rebuildbcd. May need to check boot order."
  },
  {
    id: 24,
    front: "What is 'Invalid boot disk' error?",
    back: "BIOS trying to boot from non-bootable device (USB, DVD, non-system drive). Remove all removable media, check BIOS boot order - Windows drive should be first. If persists, boot sector or drive issue."
  },
  {
    id: 25,
    front: "How do you use Event Viewer for troubleshooting?",
    back: "eventvwr.msc → Windows Logs → System/Application. Check for Errors and Critical events around time of problem. Note: Event ID, Source, Description. Search online for Event ID + description. Focus on red (Error) and red circle-X (Critical)."
  },
  {
    id: 26,
    front: "What is the CompTIA troubleshooting methodology for OS problems?",
    back: "1) Identify problem (gather info, question user), 2) Establish theory (recent changes?), 3) Test theory, 4) Establish plan, 5) Implement solution/escalate, 6) Verify functionality, 7) Document. Always try simplest solutions first."
  },
  {
    id: 27,
    front: "What should you check first when troubleshooting boot issues?",
    back: "Recent changes (new hardware, software, updates), error messages/codes, BIOS/boot order, physical connections (power, SATA), drive LED activity, beep codes, external devices disconnected. Start simple before assuming hardware failure."
  },
  {
    id: 28,
    front: "What is 'Windows Update failed to install' issue?",
    back: "Update downloads but fails during installation. Causes: insufficient disk space, corrupted update files, driver conflicts, antivirus interference. Try: free disk space, run Windows Update Troubleshooter, reset Windows Update components, manually download/install update."
  },
  {
    id: 29,
    front: "How do you reset Windows Update components?",
    back: "Stop Windows Update service, rename SoftwareDistribution and Catroot2 folders, restart service. Command Prompt (admin): net stop wuauserv, net stop bits, ren C:\\Windows\\SoftwareDistribution SD.old, net start wuauserv, net start bits. Forces fresh download."
  },
  {
    id: 30,
    front: "What causes high resource usage (CPU/Memory/Disk)?",
    back: "CPU: malware, Windows Update, antivirus scan, too many programs. Memory: insufficient RAM, memory leak, too many tabs/programs. Disk: Windows Search indexing, antivirus, failing drive, insufficient RAM (paging). Check Task Manager, identify process, research if safe."
  }
];