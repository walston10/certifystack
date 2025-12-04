export const lesson49Quiz = [
  {
    id: 1,
    question: "A user's Windows 11 computer displays a Blue Screen of Death (BSOD) with a STOP error during startup. The system automatically restarts but crashes again. What should a technician do FIRST to troubleshoot?",
    options: [
      "Immediately reinstall Windows",
      "Boot into Safe Mode to isolate the problem",
      "Replace the motherboard",
      "Perform a clean install of all drivers"
    ],
    correct: 1,
    explanation: "Safe Mode loads Windows with minimal drivers and services, allowing troubleshooting of software/driver conflicts causing BSODs. If the system boots successfully in Safe Mode, the issue is likely a recently installed driver, update, or software. From Safe Mode, you can: uninstall problematic drivers/updates, run System Restore, check Event Viewer for error details. Reinstalling Windows is premature. Hardware replacement should be considered only after software issues are ruled out. Always start with least invasive troubleshooting."
  },
  {
    id: 2,
    question: "After a Windows update, a user's computer enters a continuous boot loop - it starts loading Windows, crashes, restarts, and repeats indefinitely. What Windows recovery option can automatically attempt to fix boot problems?",
    options: [
      "Disk Cleanup",
      "Startup Repair (Automatic Repair)",
      "Disk Defragmenter",
      "Windows Update"
    ],
    correct: 1,
    explanation: "Startup Repair (Automatic Repair) in the Windows Recovery Environment (WinRE) automatically diagnoses and fixes common boot problems: corrupted boot configuration data (BCD), missing system files, registry issues. Access it through Advanced Startup Options (interrupt boot 3 times or use installation media). It attempts repairs without data loss. Disk Cleanup removes temporary files. Defragmenter optimizes file placement. Windows Update can't run if the system won't boot. Startup Repair is the first automated tool for boot loops."
  },
  {
    id: 3,
    question: "A technician successfully boots a problematic computer into Safe Mode with Networking. What advantage does 'with Networking' provide over regular Safe Mode?",
    options: [
      "Faster boot time",
      "Ability to access the internet for downloading drivers/updates and remote troubleshooting",
      "Loads all installed programs",
      "Automatically fixes all problems"
    ],
    correct: 1,
    explanation: "Safe Mode with Networking loads basic networking drivers, enabling: internet access for driver downloads, Windows Update, remote assistance, web research for error codes. This is crucial when you need to download updated drivers or patches to fix issues. Regular Safe Mode has no network connectivity. Safe Mode with Networking still loads minimal drivers (not faster than regular Safe Mode). It doesn't load all programs or automatically fix problems - it provides network access during troubleshooting."
  },
  {
    id: 4,
    question: "A user reports their computer is extremely slow, taking 10 minutes to boot. Opening Task Manager shows CPU at 100% with multiple unknown processes running. What is the MOST likely cause?",
    options: [
      "Too many browser tabs open",
      "Malware infection consuming system resources",
      "Normal Windows operation",
      "Low screen brightness"
    ],
    correct: 1,
    explanation: "Sustained 100% CPU usage with unknown processes strongly indicates malware infection (cryptominers, botnets, spyware). Symptoms: extreme slowdown, high resource usage, unknown processes, unresponsiveness. Troubleshooting: boot Safe Mode, run anti-malware scans (Malwarebytes, Windows Defender Offline), check Startup programs, review Event Viewer. Browser tabs cause memory usage, not CPU. This isn't normal operation. Screen brightness doesn't affect performance. Always investigate unknown processes consuming high resources - they're red flags for malware or system issues."
  },
  {
    id: 5,
    question: "A computer won't boot and displays 'Operating System Not Found' or 'No Boot Device.' What should the technician check FIRST?",
    options: [
      "Check BIOS/UEFI boot order and verify hard drive is detected",
      "Reinstall Windows immediately",
      "Replace the CPU",
      "Update graphics drivers"
    ],
    correct: 0,
    explanation: "Check BIOS/UEFI settings to verify: (1) hard drive is detected (if not, hardware failure or connection issue), (2) boot order is correct (hard drive should be first, not USB/optical). Other causes: disconnected cables, failed hard drive, corrupted boot sector. Reinstalling Windows is premature - the drive might not even be detected. CPU failure has different symptoms. Graphics drivers don't affect boot. Always verify BIOS detects the drive and boot order is correct before assuming drive failure or OS corruption."
  },
  {
    id: 6,
    question: "A user installs new graphics drivers and now Windows won't boot past the login screen - it freezes or crashes. What Safe Mode option allows uninstalling problematic drivers?",
    options: [
      "Safe Mode (regular)",
      "Safe Mode with Networking",
      "Safe Mode with Command Prompt",
      "All Safe Mode variants allow driver uninstallation"
    ],
    correct: 3,
    explanation: "All Safe Mode variants allow accessing Device Manager to uninstall/roll back problematic drivers. Safe Mode loads minimal drivers, bypassing the bad graphics driver. Once in Safe Mode, open Device Manager, find the graphics adapter, and either roll back driver (if update caused issue) or uninstall it (Windows loads generic VGA driver). Regular Safe Mode works if no internet needed. With Networking allows downloading different drivers. With Command Prompt provides CLI access. All variants support driver troubleshooting."
  },
  {
    id: 7,
    question: "A computer was working fine yesterday but won't boot today. No hardware changes occurred. Which recovery option restores Windows to a previous working state without affecting personal files?",
    options: [
      "Fresh Start (clean installation)",
      "System Restore",
      "Reset this PC (remove everything)",
      "Disk Cleanup"
    ],
    correct: 1,
    explanation: "System Restore rolls Windows back to a previous restore point (created automatically before updates/driver installations or manually). It reverses system changes, registry modifications, and driver updates WITHOUT affecting personal files (documents, photos). Useful for 'it worked yesterday' problems. Access from: Recovery > Advanced Startup > System Restore, or Safe Mode. Fresh Start reinstalls Windows. Reset this PC can remove files. Disk Cleanup deletes temporary files. System Restore is the ideal undo button for recent system changes."
  },
  {
    id: 8,
    question: "After running System File Checker (sfc /scannow), the tool reports 'Windows Resource Protection found corrupt files but was unable to fix some of them.' What should the technician run next?",
    options: [
      "Run sfc /scannow again immediately",
      "Run DISM /Online /Cleanup-Image /RestoreHealth to repair the Windows image, then run SFC again",
      "Reinstall Windows",
      "Delete the corrupted files manually"
    ],
    correct: 1,
    explanation: "When SFC can't repair files, the component store (Windows image) itself may be corrupted. DISM (Deployment Image Servicing and Management) /RestoreHealth repairs the Windows image using Windows Update. After DISM completes, run SFC again - it can now use the repaired image to fix files. Order: DISM first (fixes image), then SFC (fixes system files using that image). Running SFC again immediately won't help. Don't manually delete system files. Reinstallation is a last resort after DISM and SFC fail."
  },
  {
    id: 9,
    question: "A user sees a black screen with a cursor after entering their Windows password. The desktop never appears. What is a likely cause and solution?",
    options: [
      "Monitor failure - replace the monitor",
      "explorer.exe (Windows shell) has crashed - restart it via Task Manager (Ctrl+Shift+Esc)",
      "Keyboard failure - replace keyboard",
      "This is normal Windows behavior"
    ],
    correct: 1,
    explanation: "Black screen with cursor indicates explorer.exe (the Windows shell/desktop) has crashed or failed to start. Solution: press Ctrl+Shift+Esc to open Task Manager (if it opens), go to File > Run new task, type 'explorer.exe' and press Enter. If Task Manager won't open, restart in Safe Mode and troubleshoot (check startup programs, scan for malware, run SFC). Monitor works (cursor visible). Keyboard works (login succeeded). This isn't normal. Explorer.exe crashes are common after bad updates or malware infections."
  },
  {
    id: 10,
    question: "A Windows 11 computer displays 'Automatic Repair couldn't repair your PC' after multiple boot failures. What advanced troubleshooting options are available from this screen?",
    options: [
      "No options - must reinstall Windows",
      "System Restore, Startup Repair, Command Prompt, System Image Recovery, and Startup Settings",
      "Only the power button works",
      "Can only access BIOS"
    ],
    correct: 1,
    explanation: "The 'Automatic Repair couldn't repair your PC' screen provides access to Advanced Options in WinRE (Windows Recovery Environment): System Restore (restore points), Startup Repair (retry repair), Uninstall Updates (remove recent updates), System Image Recovery (restore from backup), Startup Settings (Safe Mode options), Command Prompt (manual repairs), UEFI Firmware Settings. Multiple recovery tools available. Reinstallation is the last resort. These options provide comprehensive troubleshooting before data loss. Access manually: interrupt boot 3 times or use installation media."
  },
  {
    id: 11,
    question: "A user's computer takes 10 minutes to reach the login screen. Task Manager shows dozens of programs configured to start automatically. What should the technician do?",
    options: [
      "Nothing - this is normal",
      "Disable unnecessary startup programs via Task Manager > Startup tab",
      "Uninstall Windows",
      "Buy more RAM"
    ],
    correct: 1,
    explanation: "Excessive startup programs dramatically slow boot times. Solution: Task Manager > Startup tab, review programs, disable unnecessary ones (keep antivirus, cloud sync services you use; disable: chat apps, updaters, toolbars). The 'Startup impact' column shows each program's boot time effect. Disabling doesn't uninstall - programs can still be launched manually. This isn't normal operation. RAM might help but won't solve the root cause. Startup optimization is a fundamental performance troubleshooting step. Re-enable programs individually if issues arise."
  },
  {
    id: 12,
    question: "A computer powers on but displays 'No bootable device' and won't start Windows. The hard drive is detected in BIOS. What might have been corrupted?",
    options: [
      "The display driver",
      "The Master Boot Record (MBR) or Boot Configuration Data (BCD)",
      "The sound card driver",
      "The printer driver"
    ],
    correct: 1,
    explanation: "If BIOS detects the drive but Windows won't boot, the MBR (Master Boot Record) or BCD (Boot Configuration Data) may be corrupted. These contain boot information. Repair using: bootrec /fixmbr, bootrec /fixboot, bootrec /rebuildbcd from Command Prompt in WinRE. This rebuilds boot configuration without affecting data. Display/sound/printer drivers don't prevent boot - they load after Windows starts. Physical drive detection rules out hardware failure. Boot sector corruption is common after improper shutdowns, malware, or disk errors."
  },
  {
    id: 13,
    question: "A user reports Windows is constantly updating and restarting without permission, interrupting work. How can they configure Windows Update to notify before restarting?",
    options: [
      "Windows Update cannot be configured - it always restarts immediately",
      "Settings > Windows Update > Advanced options > Schedule/configure restart times and active hours",
      "Disable Windows Update completely in Services",
      "Uninstall Windows Update"
    ],
    correct: 1,
    explanation: "Configure Windows Update restart behavior: Settings > Windows Update > Advanced options. Set 'Active hours' (times you use the PC - no automatic restarts during these hours) or 'Schedule the restart' (choose specific time). Can also pause updates temporarily. Never disable Windows Update completely - security patches are critical. Can't uninstall Windows Update. Windows Update is necessary but controllable. Proper configuration balances security (getting updates) with productivity (controlling restart timing)."
  },
  {
    id: 14,
    question: "A computer displays the spinning loading wheel indefinitely during boot but never reaches the login screen. What troubleshooting step can help identify the stuck process?",
    options: [
      "Wait indefinitely - it will eventually load",
      "Boot to Safe Mode or check Event Viewer logs for errors indicating what's failing",
      "Throw the computer away",
      "Install more cooling fans"
    ],
    correct: 1,
    explanation: "Infinite loading indicates a service or driver hanging during boot. Boot Safe Mode (loads minimal services) to isolate the issue. Check Event Viewer > Windows Logs > System for errors during boot. Look for services timing out or drivers failing. Common causes: failing hard drive, corrupted updates, driver conflicts. Safe Mode helps identify if it's software (boots successfully) or hardware (fails even in Safe Mode). Don't wait indefinitely. Cooling isn't relevant. Event Viewer provides crucial diagnostic information for boot hangs."
  },
  {
    id: 15,
    question: "A user's Windows installation is severely corrupted with multiple system file errors that SFC and DISM cannot repair. They have important files but no recent backup. What is the BEST option?",
    options: [
      "Reset this PC > Keep my files (reinstalls Windows while preserving personal files)",
      "Reset this PC > Remove everything (complete wipe)",
      "Continue using the corrupted system indefinitely",
      "Throw the hard drive away"
    ],
    correct: 0,
    explanation: "Reset this PC > 'Keep my files' reinstalls Windows while preserving personal files in the Users folder (Documents, Pictures, Desktop). Apps must be reinstalled. This is ideal when the OS is corrupted but data is intact. 'Remove everything' erases all data (use only with backups). Continuing with corrupted system risks data loss and security vulnerabilities. Don't discard drives - data might be recoverable. Before resetting, try: booting from installation media and running DISM/SFC, System Restore. Reset is the last software-based repair before clean installation."
  }
];