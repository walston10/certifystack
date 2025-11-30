export const lesson40Flashcards = [
  {
    id: 1,
    front: "What upgrade paths exist from Windows 10 to Windows 11?",
    back: "Windows 10 Home → Windows 11 Home. Windows 10 Pro → Windows 11 Pro. Must meet Windows 11 hardware requirements (TPM 2.0, UEFI, Secure Boot, compatible CPU). In-place upgrade preserves files/apps."
  },
  {
    id: 2,
    front: "Can you upgrade Windows Home to Pro?",
    back: "Yes - Settings → System → Activation → Change product key → enter Pro key → upgrade starts. Or Settings → Update & Security → Activation → Go to Store → purchase upgrade. Keeps all files, apps, settings."
  },
  {
    id: 3,
    front: "What are Windows feature updates?",
    back: "Major Windows versions released twice yearly (e.g., 21H2, 22H2). Add new features, UI changes, improvements. Larger downloads (3-4GB), longer install time. Can defer in Pro/Enterprise. Automatic via Windows Update."
  },
  {
    id: 4,
    front: "What are Windows quality updates?",
    back: "Monthly security patches and bug fixes. Released on 'Patch Tuesday' (second Tuesday of month). Smaller size, quick install, automatic. Critical for security. Include cumulative previous updates."
  },
  {
    id: 5,
    front: "How do you defer Windows updates in Pro/Enterprise?",
    back: "Settings → Windows Update → Advanced options → set days to pause or defer. Feature updates: defer up to 365 days. Quality updates: defer up to 30 days. Not available in Home edition."
  },
  {
    id: 6,
    front: "What is Windows Update for Business?",
    back: "Enterprise/Pro feature for managing update deployment. Create deployment rings (groups receiving updates at different times), control deferral periods, approve/test updates before wide deployment. Uses Group Policy or Intune."
  },
  {
    id: 7,
    front: "What is WSUS (Windows Server Update Services)?",
    back: "Server role distributing Microsoft updates to network computers. Centralized update management, download once/distribute many, approve updates before deployment, bandwidth savings, reporting. Enterprise environments."
  },
  {
    id: 8,
    front: "What checks should you perform before upgrading Windows?",
    back: "Verify hardware compatibility (CPU, TPM, RAM, storage), backup all data, check application compatibility, ensure sufficient disk space (20GB+), verify stable power, note current settings, disable antivirus temporarily."
  },
  {
    id: 9,
    front: "What is the Windows.old folder?",
    back: "Backup of previous Windows installation after upgrade. Located at C:\\Windows.old. Allows rollback within 10 days. Contains old user files, program files, Windows folder. Deleted automatically after 10 days or manually via Disk Cleanup."
  },
  {
    id: 10,
    front: "How do you rollback a Windows upgrade?",
    back: "Within 10 days: Settings → System → Recovery → Go back. Returns to previous Windows version with files/apps intact. After 10 days: clean install required. Reasons: compatibility issues, performance problems, preference."
  },
  {
    id: 11,
    front: "What upgrade considerations exist for applications?",
    back: "Check application compatibility with new Windows version, visit vendor websites for compatibility lists, test critical apps in VM first, have installation media/licenses ready, plan for reinstalling incompatible apps, backup app data."
  },
  {
    id: 12,
    front: "What upgrade considerations exist for hardware/drivers?",
    back: "Download latest drivers from manufacturer before upgrading, verify all peripherals supported in new Windows, check chipset/graphics/network driver availability, test hardware compatibility (especially older devices), have driver backup."
  },
  {
    id: 13,
    front: "What is user data migration?",
    back: "Moving user files, settings, preferences to new Windows installation. Methods: Windows Easy Transfer (legacy), manual copy to external drive/cloud, User State Migration Tool (USMT - enterprise), built-in upgrade keeps files."
  },
  {
    id: 14,
    front: "What user data should be backed up before upgrade?",
    back: "Documents, pictures, videos, music, desktop files, browser bookmarks/passwords, email data, application settings, license keys, custom profiles. User folders: C:\\Users\\[username]\\Documents, Downloads, Desktop, AppData."
  },
  {
    id: 15,
    front: "How do you backup user data before upgrading?",
    back: "Copy to external drive, upload to cloud storage (OneDrive, Google Drive), use File History, create system image, use third-party backup software. Verify backup successful before proceeding with upgrade."
  },
  {
    id: 16,
    front: "What is Windows Easy Transfer and is it still available?",
    back: "Legacy tool for migrating files/settings between Windows PCs. Transferred via network, USB cable, or external drive. Discontinued - not available in Windows 10/11. Use manual methods or OneDrive sync instead."
  },
  {
    id: 17,
    front: "What post-upgrade tasks should be performed?",
    back: "Run Windows Update for latest patches, install/update drivers, reinstall incompatible applications, verify all hardware working, restore backed-up data if needed, reconfigure settings, test critical applications, activate Windows if required."
  },
  {
    id: 18,
    front: "What is a clean install after backup?",
    back: "Backup data → perform clean Windows installation → restore data after. More thorough than in-place upgrade, removes accumulated junk, better performance. Requires reinstalling all applications. Time-consuming but cleanest approach."
  },
  {
    id: 19,
    front: "How do you verify Windows update success?",
    back: "Check Windows Update history (Settings → Windows Update → Update history), verify no pending restarts, check Event Viewer for errors, test critical applications, verify drivers working, check system stability for few days."
  },
  {
    id: 20,
    front: "What are common Windows upgrade problems?",
    back: "Insufficient disk space, incompatible drivers, application conflicts, activation issues, hardware incompatibility, interrupted installation, corrupted update files, TPM/Secure Boot not enabled (Windows 11)."
  },
  {
    id: 21,
    front: "What does 'Windows 11 installation has failed' indicate?",
    back: "Check specific error code, common causes: TPM disabled, Secure Boot off, incompatible CPU, insufficient storage, corrupted installation media, BIOS needs update, RAM issues. Run PC Health Check app for specifics."
  },
  {
    id: 22,
    front: "How do you troubleshoot Windows Update failures?",
    back: "Run Windows Update Troubleshooter (Settings → Troubleshoot), restart Windows Update service, clear Software Distribution folder, check disk space, disable antivirus temporarily, try manual update download, check internet connection, run sfc /scannow."
  },
  {
    id: 23,
    front: "What is compatibility mode for applications after upgrade?",
    back: "Run older programs designed for previous Windows versions. Right-click app → Properties → Compatibility → select previous Windows version. Try if app won't run after upgrade. Also try 'Run as administrator'."
  },
  {
    id: 24,
    front: "What edition upgrades are possible within Windows 10?",
    back: "Home → Pro (add features like domain join, BitLocker). Pro → Enterprise (volume licensing only). Cannot downgrade without clean install. Pro → Pro for Workstations (high-end hardware support)."
  },
  {
    id: 25,
    front: "How long are Windows versions supported?",
    back: "Windows 10: Home/Pro - 18-30 months per version. Enterprise/Education - up to 30 months. Windows 11: similar support timeline. Extended Security Updates available for Enterprise. Must upgrade to stay supported."
  },
  {
    id: 26,
    front: "What is an in-place repair installation?",
    back: "Reinstall Windows using installation media while keeping files/apps. Boot to desktop → run setup.exe from installation media → choose 'Upgrade' → keeps everything. Repairs corrupted system files without data loss."
  },
  {
    id: 27,
    front: "What network bandwidth considerations exist for updates?",
    back: "Feature updates 3-4GB download, quality updates 100-500MB. Multiple computers = high bandwidth usage. Use WSUS for centralized distribution, schedule updates for off-hours, consider metered connections on limited bandwidth."
  },
  {
    id: 28,
    front: "What is Windows Insider Program?",
    back: "Beta testing program for upcoming Windows features. Preview builds before public release, provide feedback. Channels: Dev (earliest, unstable), Beta (more stable), Release Preview (final testing). Not for production systems."
  },
  {
    id: 29,
    front: "How do you check current Windows version?",
    back: "Settings → System → About (shows edition, version, build). Or winver command (Windows+R → winver). Or systeminfo command. Important for determining update/upgrade paths and support status."
  },
  {
    id: 30,
    front: "What happens if power fails during Windows upgrade?",
    back: "Windows Automatic Repair attempts recovery on next boot. May rollback to previous version, continue upgrade, or require manual intervention. May enter recovery environment. Always use UPS or ensure stable power during upgrades."
  }
];