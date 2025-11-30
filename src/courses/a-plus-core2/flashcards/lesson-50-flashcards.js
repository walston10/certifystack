export const lesson50Flashcards = [
  {
    id: 1,
    front: "What is Event Viewer and how do you access it?",
    back: "Windows tool recording system events, errors, warnings. Access: eventvwr.msc, or Computer Management → Event Viewer. Logs: Application, Security, System. Filter by severity: Critical, Error, Warning, Information. Essential for troubleshooting."
  },
  {
    id: 2,
    front: "What are the main Event Viewer logs?",
    back: "Application (program events, crashes), Security (login attempts, audit events), System (Windows components, drivers, services). Setup and Forwarded Events also available. Check System for hardware/driver issues, Application for software problems."
  },
  {
    id: 3,
    front: "What do Event Viewer severity levels mean?",
    back: "Critical (system failure, data loss imminent), Error (significant problem occurred), Warning (potential future problem), Information (successful operation), Audit Success/Failure (security events). Focus on Critical and Error for troubleshooting."
  },
  {
    id: 4,
    front: "What is Task Manager and what tabs are most important?",
    back: "System monitoring and process management tool. Key tabs: Processes (resource usage by app), Performance (real-time CPU/RAM/Disk/Network graphs), Startup (auto-start programs), Services (view/start/stop). Access: Ctrl+Shift+Esc or Ctrl+Alt+Del."
  },
  {
    id: 5,
    front: "How do you identify performance bottlenecks in Task Manager?",
    back: "Performance tab shows real-time graphs. CPU 100% = need faster CPU or close programs. Memory high = need more RAM. Disk 100% = slow drive or issue. Network high = bandwidth usage. Check which process consuming resources in Processes tab."
  },
  {
    id: 6,
    front: "What is System Information (msinfo32)?",
    back: "Displays detailed hardware and software configuration. Run: msinfo32. Shows: OS version, processor, RAM, motherboard, BIOS version, drivers, components. Export for documentation. Useful for compatibility checks, system inventory."
  },
  {
    id: 7,
    front: "What is System Configuration (msconfig)?",
    back: "Configure boot options, startup items, services. Access: msconfig. Tabs: General (boot selection), Boot (Safe Mode options, timeout), Services (enable/disable), Startup (moved to Task Manager in Win10+), Tools (launch other utilities)."
  },
  {
    id: 8,
    front: "What is Registry Editor (regedit) and when should you use it?",
    back: "Edit Windows registry - database of configuration settings. Access: regedit. Hives: HKLM (local machine), HKCU (current user), HKCR (classes). CRITICAL: backup before editing, incorrect changes break Windows. Use only when necessary, follow exact instructions."
  },
  {
    id: 9,
    front: "What are the main registry hives?",
    back: "HKEY_LOCAL_MACHINE (system settings, all users), HKEY_CURRENT_USER (current user settings), HKEY_CLASSES_ROOT (file associations), HKEY_USERS (all user profiles), HKEY_CURRENT_CONFIG (hardware profile). Most changes in HKLM or HKCU."
  },
  {
    id: 10,
    front: "What is Disk Cleanup and what does it remove?",
    back: "Free disk space by removing temporary files. Access: cleanmgr or search Disk Cleanup. Removes: temp files, downloads folder (optional), recycle bin, Windows Update cleanup, thumbnails, system error reports. Run regularly, especially before updates."
  },
  {
    id: 11,
    front: "What is Disk Defragmenter and when should you use it?",
    back: "Reorganizes fragmented files on HDD for faster access. Access: defrag or Optimize Drives. Schedule automatic weekly defrag. HDDs only - DO NOT defrag SSDs (unnecessary, reduces lifespan). SSDs use TRIM instead (automatic)."
  },
  {
    id: 12,
    front: "What is Performance Monitor (perfmon)?",
    back: "Advanced monitoring tool tracking hundreds of performance counters. Real-time graphs, data logging, baseline creation. Monitor: CPU, memory, disk, network, process-specific metrics. Create custom counter sets. For advanced troubleshooting and capacity planning."
  },
  {
    id: 13,
    front: "What is Resource Monitor and how is it different from Task Manager?",
    back: "More detailed real-time monitoring than Task Manager. Shows: per-process CPU/memory/disk/network usage, TCP connections, file handles, disk activity. Access: resmon or Task Manager → Performance → Open Resource Monitor. Deeper troubleshooting."
  },
  {
    id: 14,
    front: "What is Component Services (comexp.msc)?",
    back: "Manage COM+ applications, DCOM configuration, event subscriptions. Advanced tool for application services. Most users don't need this. Used for distributed applications, enterprise environments. Access: dcomcnfg or comexp.msc."
  },
  {
    id: 15,
    front: "What is Windows Memory Diagnostic?",
    back: "Test RAM for errors. Access: Windows Memory Diagnostic or mdsched. Requires restart, runs before Windows loads. Standard test (quick) or extended test (thorough). Results in Event Viewer after restart. Use when: random crashes, BSOD, system instability."
  },
  {
    id: 16,
    front: "What does 'This PC' show and how is it useful?",
    back: "File Explorer view of drives and main folders (Desktop, Documents, Downloads, Pictures, Videos, Music). Shows: drive letters, available space, device storage. Right-click drive → Properties for detailed space usage. Quick access to storage locations."
  },
  {
    id: 17,
    front: "How do you check disk space and why is it important?",
    back: "File Explorer → This PC (shows all drives). Right-click drive → Properties for details. Need 10-20% free for good performance, temp files, updates, virtual memory. Low disk space causes: slow performance, update failures, system errors."
  },
  {
    id: 18,
    front: "What is the Reliability Monitor?",
    back: "Timeline view of system stability. Access: perfmon /rel or Reliability Monitor. Shows: application failures, Windows failures, warnings, informational events. Graph of stability index over time. Useful for identifying when problems started."
  },
  {
    id: 19,
    front: "What is DirectX Diagnostic Tool (dxdiag)?",
    back: "Display DirectX information - graphics, sound, input devices. Run: dxdiag. Shows: DirectX version, display adapter, drivers, audio devices. Test sound and display. Save report. Troubleshoot gaming/graphics issues."
  },
  {
    id: 20,
    front: "What common issues cause high CPU usage?",
    back: "Malware/virus, Windows Update downloading, antivirus scanning, too many startup programs, runaway process, driver issues, hardware failure. Check Task Manager → Processes → sort by CPU. End suspicious processes, scan for malware."
  },
  {
    id: 21,
    front: "What common issues cause high memory usage?",
    back: "Insufficient RAM for workload, too many programs/tabs open, memory leak (program doesn't release RAM), malware. Check Task Manager → Processes → sort by Memory. Close unnecessary programs, add RAM if consistently high."
  },
  {
    id: 22,
    front: "What causes 100% disk usage constantly?",
    back: "Windows Search indexing, Windows Update, antivirus scan, superfetch/prefetch, failing hard drive, insufficient RAM (excessive paging). Check Task Manager → Processes → Disk column. Disable search indexing temporarily, check drive health, add RAM."
  },
  {
    id: 23,
    front: "How do you check drive health?",
    back: "Command Prompt (admin): wmic diskdrive get status (should say 'OK'). Or third-party tools: CrystalDiskInfo, manufacturer utilities. Check SMART status. Symptoms of failure: slow performance, errors, clicking sounds, disk usage spikes."
  },
  {
    id: 24,
    front: "What is Print Spooler service and common issues?",
    back: "Manages print queue. Service name: Spooler. If stopped, can't print. Common issue: stuck jobs, service crashes. Fix: services.msc → restart Print Spooler, clear C:\\Windows\\System32\\spool\\PRINTERS folder, reinstall printer drivers."
  },
  {
    id: 25,
    front: "How do you clear print spooler to fix stuck print jobs?",
    back: "1) Open Services (services.msc), 2) Stop Print Spooler service, 3) Navigate to C:\\Windows\\System32\\spool\\PRINTERS, 4) Delete all files, 5) Start Print Spooler service. May need admin rights. Clears stuck jobs."
  },
  {
    id: 26,
    front: "What is Windows Search indexing and should you disable it?",
    back: "Indexes files for fast search results. Can cause high disk/CPU usage, especially on HDDs. Useful for finding files quickly. Disable if: causing performance issues, using SSD with fast search anyway. Control Panel → Indexing Options."
  },
  {
    id: 27,
    front: "What is Superfetch/SysMain and should you disable it?",
    back: "Pre-loads frequently used apps into RAM for faster launch. Can cause disk usage on HDDs. Helpful with sufficient RAM, problematic with limited RAM or SSD. Windows 10: Superfetch, Windows 11: SysMain. Disable if causing disk thrashing."
  },
  {
    id: 28,
    front: "How do you identify malware using Task Manager?",
    back: "Look for: unfamiliar process names, high CPU/memory from unknown process, multiple instances of same process, processes with random names. Right-click → Open file location (should be in System32/Program Files). Search process name online."
  },
  {
    id: 29,
    front: "What is ReadyBoost and is it still useful?",
    back: "Use USB drive as cache for slower HDDs. Not beneficial on SSDs. USB 2.0+ required, 256MB+ space. Windows automatically detects compatible drives. Largely obsolete with modern SSDs and higher RAM. Consider RAM upgrade instead."
  },
  {
    id: 30,
    front: "How do you use Task Manager to improve boot time?",
    back: "Startup tab shows programs running at boot with impact rating (High, Medium, Low, None). Right-click high-impact programs not needed at startup → Disable. Doesn't uninstall, just prevents auto-start. Can start manually when needed."
  }
];