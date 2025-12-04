export const lesson40Quiz = [
  {
    id: 1,
    question: "A user with Windows 10 Home wants to upgrade to Windows 11 Pro to join their company's domain. What is the MOST direct upgrade path?",
    options: [
      "Clean install Windows 11 Pro, losing all data and applications",
      "Upgrade to Windows 10 Pro first, then upgrade to Windows 11 Pro",
      "Purchase a Windows 11 Pro license and perform an in-place edition upgrade",
      "Windows 10 Home cannot upgrade to Windows 11 Pro"
    ],
    correct: 2,
    explanation: "You can perform an in-place edition upgrade directly from Windows 10 Home to Windows 11 Pro by purchasing a Pro license key and entering it in Settings > System > Activation. Windows will upgrade the edition while preserving files and apps. You don't need to upgrade to Windows 10 Pro first. Clean install would lose data unnecessarily. Direct Home-to-Pro upgrades are supported and preserve everything."
  },
  {
    id: 2,
    question: "An organization is planning to upgrade 200 computers from Windows 10 to Windows 11. Before beginning, what should they do FIRST to ensure compatibility?",
    options: [
      "Start upgrading computers and address issues as they arise",
      "Run the PC Health Check app on sample computers to verify hardware compatibility",
      "Order new computers - Windows 11 won't run on Windows 10 hardware",
      "Upgrade one computer and see if it works"
    ],
    correct: 1,
    explanation: "Before mass deployment, verify hardware compatibility using Microsoft's PC Health Check app or similar tools to identify which computers meet Windows 11 requirements (TPM 2.0, UEFI, CPU compatibility, RAM, storage). This prevents failed upgrades and identifies computers needing hardware updates or replacement. Many Windows 10 computers don't meet Windows 11 requirements. Random upgrades waste time. Systematic testing prevents problems."
  },
  {
    id: 3,
    question: "A user upgrades from Windows 10 to Windows 11 but finds some applications incompatible. They want to rollback to Windows 10. How many days after upgrading can they use the built-in rollback feature?",
    options: [
      "7 days",
      "10 days",
      "30 days",
      "90 days"
    ],
    correct: 1,
    explanation: "Windows 11 allows rollback to Windows 10 for 10 days after upgrade via Settings > System > Recovery > Go back. After 10 days, the Windows.old folder is automatically deleted to free space. To extend this window, you can use DISM commands before the 10-day period expires, but the default is 10 days. After this period, you must perform a clean install of Windows 10."
  },
  {
    id: 4,
    question: "A small business wants to migrate user data from old Windows 10 computers to new Windows 11 computers. Users have files in Documents, Desktop, and custom folders. What's the BEST approach for migrating this data?",
    options: [
      "Manually copy files using USB drives for each user",
      "Use cloud storage (OneDrive, Google Drive) to sync and transfer data",
      "Email files to users to download on new computers",
      "Forget old files - start fresh on new computers"
    ],
    correct: 1,
    explanation: "Cloud storage (OneDrive, Google Drive, Dropbox) provides the most reliable and complete migration. Users sync their data to the cloud from old computers, then sign in on new computers to sync down. This captures all files, is reliable, and provides ongoing backup. Manual USB copying is error-prone and time-consuming. Email has size limits. Starting fresh loses important data. For enterprise, USMT (User State Migration Tool) is another option."
  },
  {
    id: 5,
    question: "After upgrading to Windows 11, a user notices their printer no longer works. The printer worked fine on Windows 10. What is the MOST likely cause?",
    options: [
      "The printer is defective",
      "Windows 11 doesn't support printers",
      "The Windows 10 printer driver is incompatible with Windows 11",
      "The USB port is damaged"
    ],
    correct: 2,
    explanation: "Driver incompatibility is the most common issue after OS upgrades. Windows 10 drivers may not work with Windows 11. Solution: Visit the printer manufacturer's website and download Windows 11-compatible drivers. If unavailable, try Windows 10 drivers in compatibility mode or use generic Windows 11 print drivers. The printer itself isn't defective. Windows 11 supports printers. USB ports would affect other devices too."
  },
  {
    id: 6,
    question: "An IT administrator needs to upgrade 50 computers to Windows 11 simultaneously with minimal user disruption. Which deployment method is MOST appropriate?",
    options: [
      "Visit each computer and manually run Windows Update",
      "Use Windows Update for Business or deployment tools like WSUS/SCCM",
      "Mail USB drives to each user with upgrade instructions",
      "Have users download and install Windows 11 themselves"
    ],
    correct: 1,
    explanation: "Windows Update for Business, WSUS (Windows Server Update Services), or SCCM (System Center Configuration Manager) allow centralized management of feature updates including Windows 11 upgrades. Administrators can control timing, target specific groups, and monitor progress. Manual visits don't scale. USB drives are inefficient. User-initiated upgrades lead to inconsistency and support nightmares. Enterprise tools enable controlled, systematic deployment."
  },
  {
    id: 7,
    question: "A user's computer meets all Windows 11 requirements except the CPU is not on Microsoft's official supported list. What will happen if they try to upgrade?",
    options: [
      "The upgrade will proceed normally with no issues",
      "Windows Update will block the upgrade; manual installation may work but is unsupported",
      "The computer will be damaged by the upgrade attempt",
      "Windows 11 will install but stop working after 30 days"
    ],
    correct: 1,
    explanation: "Windows Update blocks upgrades on unsupported CPUs. However, users can manually install Windows 11 using installation media and registry tweaks to bypass CPU checks. Microsoft warns these installations are unsupported - they may not receive updates, may have stability issues, and aren't guaranteed to work. The computer won't be damaged. Windows won't stop after 30 days but may not receive security updates. Official support requires a compatible CPU."
  },
  {
    id: 8,
    question: "After upgrading to Windows 11, a user wants to free up disk space by removing old Windows 10 files. Which folder contains the previous Windows installation?",
    options: [
      "C:\\Windows.bak",
      "C:\\Windows.old",
      "C:\\Previous_Windows",
      "C:\\Backup"
    ],
    correct: 1,
    explanation: "Windows.old contains the previous Windows installation and is created during upgrades. It allows rollback for 10 days. To delete it and free space: Settings > System > Storage > Temporary files > Previous version of Windows > Remove files. Or use Disk Cleanup > Clean up system files > Previous Windows installation(s). Don't manually delete Windows.old - use proper tools to avoid issues."
  },
  {
    id: 9,
    question: "A user upgrades from Windows 10 Pro to Windows 11 Pro. After the upgrade, they notice Microsoft Office is missing. What most likely happened?",
    options: [
      "Windows 11 is incompatible with Microsoft Office",
      "The upgrade process failed to migrate installed applications properly",
      "Office licenses expire during upgrades",
      "This is normal - all applications must be reinstalled after upgrading"
    ],
    correct: 1,
    explanation: "In-place upgrades should preserve installed applications, but occasionally applications don't migrate properly due to compatibility issues, corrupted installers, or upgrade errors. Solution: Reinstall Microsoft Office. Check if it's available through Microsoft 365 account or use installation media. Windows 11 is compatible with Office. Licenses don't expire from upgrades. Most applications survive upgrades, but some may need reinstallation."
  },
  {
    id: 10,
    question: "A company wants to ensure user settings, profiles, and application data are preserved when upgrading to Windows 11. What should they back up BEFORE upgrading?",
    options: [
      "Only the C:\\Windows folder",
      "User profiles (C:\\Users), application data, and custom settings",
      "Just create a system restore point - that's sufficient",
      "Backups aren't needed for in-place upgrades"
    ],
    correct: 1,
    explanation: "Always back up user profiles (C:\\Users\\username), application data (AppData folders), documents, and custom settings before major upgrades. While in-place upgrades should preserve data, failures can occur. Use Windows Backup, cloud storage, or file copy to external drives. System Restore doesn't back up user files. The Windows folder contains system files, not user data. Never trust that upgrades will work perfectly - always have backups."
  },
  {
    id: 11,
    question: "An organization has computers running Windows 10 Home, Pro, and Enterprise. They want to upgrade all to Windows 11. Which editions can directly upgrade to Windows 11 Pro?",
    options: [
      "Only Windows 10 Pro can upgrade to Windows 11 Pro",
      "Windows 10 Pro and Enterprise can upgrade to Windows 11 Pro",
      "Windows 10 Home, Pro, and Enterprise can all upgrade to Windows 11 Pro with proper licensing",
      "None - all require clean installs"
    ],
    correct: 2,
    explanation: "Any Windows 10 edition can upgrade to Windows 11 Pro with the appropriate license key. Home can upgrade to Pro (requires purchasing Pro license). Pro upgrades to Pro directly. Enterprise can downgrade to Pro but this is unusual (typically Enterprise stays Enterprise). The upgrade path depends on licensing, not technical limitations. Edition changes can happen during or after OS upgrade."
  },
  {
    id: 12,
    question: "A user begins a Windows 11 upgrade but it fails midway through. The computer automatically rolls back to Windows 10. What should the technician check FIRST?",
    options: [
      "Check available disk space - insufficient space causes upgrade failures",
      "Replace the hard drive immediately",
      "Reinstall Windows 10 from scratch",
      "The computer is incompatible and can never run Windows 11"
    ],
    correct: 0,
    explanation: "Insufficient disk space is one of the most common causes of upgrade failure. Windows 11 requires 64GB minimum storage, but upgrades need additional temporary space (20GB+ recommended free space). Also check compatibility (TPM, CPU, RAM), driver conflicts, and Windows Update errors. The automatic rollback is a safety feature. Don't assume hardware failure. Review upgrade logs before drastic actions. Many failed upgrades can be resolved and retried."
  },
  {
    id: 13,
    question: "A business wants to control when Windows 11 feature updates are installed on their computers. Which Windows 11 edition provides the most control over update deferral?",
    options: [
      "Windows 11 Home - users can defer updates indefinitely",
      "Windows 11 Pro - can defer feature updates for several months",
      "All editions have identical update control",
      "Updates cannot be controlled in any edition"
    ],
    correct: 1,
    explanation: "Windows 11 Pro, Pro for Workstations, and Enterprise offer the most update control via Group Policy and Windows Update for Business. Pro can defer feature updates up to 365 days and quality updates up to 30 days. Home edition has very limited deferral options (just a few weeks). Enterprise has the most granular control. This is a key difference between Home and Pro editions."
  },
  {
    id: 14,
    question: "After upgrading to Windows 11, a user finds their custom desktop wallpaper, pinned taskbar apps, and browser bookmarks are all missing. What likely happened?",
    options: [
      "The user profile didn't migrate correctly during upgrade",
      "Windows 11 automatically resets all personalization",
      "This is normal - users must reconfigure everything after upgrading",
      "The hard drive is failing"
    ],
    correct: 0,
    explanation: "When the user profile doesn't migrate correctly, personalization settings (wallpaper, taskbar pins) and application data (bookmarks) may be lost. This can happen if the profile was corrupted or if Windows created a temporary profile. Check if a Windows.old folder exists - user data might be recoverable from C:\\Windows.old\\Users\\username. Windows 11 should preserve settings. This isn't normal behavior. A failing drive would cause broader issues."
  },
  {
    id: 15,
    question: "A user successfully upgraded to Windows 11 three weeks ago. Now they want to go back to Windows 10 because of application compatibility issues. What are their options?",
    options: [
      "Use Settings > Recovery > Go back to roll back automatically",
      "Restore from a pre-upgrade backup or perform a clean install of Windows 10",
      "Windows Update can downgrade automatically",
      "Call Microsoft support for a free downgrade"
    ],
    correct: 1,
    explanation: "After the 10-day rollback window expires, the Windows.old folder is deleted. The user must either restore from a backup created before the upgrade or perform a clean install of Windows 10 (losing data/apps unless separately backed up). The built-in rollback feature is no longer available. Windows Update doesn't downgrade. Microsoft doesn't provide downgrades - users must reinstall. This is why testing and backups are crucial before upgrading."
  }
];