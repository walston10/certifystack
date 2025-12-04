export const lesson50Quiz = [
  {
    id: 1,
    question: "A user reports their computer is running extremely slowly. A technician opens Task Manager to investigate. Which tab provides real-time graphs showing CPU, Memory, Disk, and Network usage?",
    options: [
      "Processes tab",
      "Performance tab",
      "Startup tab",
      "Details tab"
    ],
    correct: 1,
    explanation: "The Performance tab in Task Manager displays real-time graphs and statistics for CPU, Memory (RAM), Disk, Network, and GPU usage. This helps identify resource bottlenecks - if disk is at 100%, slow performance is likely disk-related. The Processes tab shows which programs are running and their resource consumption, but not overall system graphs. Startup tab manages startup programs. Details tab shows all processes with PIDs and technical details. Use Performance for overall system health visualization."
  },
  {
    id: 2,
    question: "A technician needs to view detailed hardware and software information including BIOS version, installed RAM, processor model, and Windows version. Which built-in Windows tool provides this comprehensive system information?",
    options: [
      "Task Manager",
      "Device Manager",
      "System Information (msinfo32.exe)",
      "Control Panel > System"
    ],
    correct: 2,
    explanation: "System Information (msinfo32.exe) provides comprehensive hardware and software details: BIOS version, processor, RAM (total and available), motherboard, storage devices, network adapters, software environment, hardware resources, conflicts. It's essential for inventory and troubleshooting. Access via: Run > msinfo32, or search 'System Information.' Task Manager shows current resource usage. Device Manager manages hardware drivers. Control Panel > System shows basic info only. System Information is the most detailed built-in inventory tool."
  },
  {
    id: 3,
    question: "A technician suspects a recently installed driver is causing system crashes. They open Event Viewer to investigate. Which log category is MOST likely to contain error information about driver failures?",
    options: [
      "Application log",
      "Security log",
      "System log",
      "Setup log"
    ],
    correct: 2,
    explanation: "The System log in Event Viewer records events from Windows components including drivers, services, and hardware. Driver crashes, hardware failures, and service errors appear here. Look for Error (red) and Warning (yellow) events. Application log records application-specific events. Security log tracks authentication and access events. Setup log records installation events. For driver and hardware troubleshooting, System log is primary. Event IDs help identify specific issues - search Microsoft documentation for solutions based on Event IDs."
  },
  {
    id: 4,
    question: "A user wants to prevent a specific program from starting automatically when Windows boots. Which tool allows managing startup programs and shows their impact on boot time?",
    options: [
      "Services console",
      "Task Manager > Startup tab",
      "Registry Editor",
      "Event Viewer"
    ],
    correct: 1,
    explanation: "Task Manager > Startup tab lists all programs configured to run at startup and shows their 'Startup impact' (High, Medium, Low, None). Right-click programs to Enable or Disable them. This doesn't uninstall programs - just prevents automatic startup. Services console manages background services (different from startup programs). Registry Editor can modify startup but Task Manager is safer and easier. Event Viewer logs events but doesn't manage startup. Disabling high-impact startup programs significantly improves boot time."
  },
  {
    id: 5,
    question: "A technician needs to modify boot configuration to enable Safe Mode for the next restart. Which tool allows modifying boot options and startup settings?",
    options: [
      "Task Manager",
      "System Configuration (msconfig.exe)",
      "Disk Management",
      "Performance Monitor"
    ],
    correct: 1,
    explanation: "System Configuration (msconfig.exe) manages boot options, services, startup programs, and tools. The Boot tab allows: selecting Safe Boot options (Minimal, Network, etc.), setting timeout values, making boot changes. Services tab can disable services for troubleshooting. Startup tab (in older Windows versions) managed startup programs. Access via: Run > msconfig. Task Manager shows running processes. Disk Management handles partitions. Performance Monitor tracks metrics. Msconfig is the primary boot configuration tool."
  },
  {
    id: 6,
    question: "A new device isn't working properly. The technician opens Device Manager and sees a yellow exclamation mark next to the device. What does this indicate?",
    options: [
      "The device is working perfectly",
      "The device has a driver problem or configuration error",
      "The device is disabled",
      "The device needs to be unplugged"
    ],
    correct: 1,
    explanation: "Yellow exclamation mark indicates a driver problem: missing driver, incorrect driver, driver conflict, or hardware not functioning properly. Right-click the device > Properties > General tab for error details. Common solutions: Update Driver, Uninstall device and scan for hardware changes, check Windows Update for drivers. Red X means device is disabled. No icon means working correctly. Black down arrow means disabled. Yellow triangle is the primary troubleshooting indicator in Device Manager."
  },
  {
    id: 7,
    question: "A computer has a 500GB hard drive but only shows 450GB available in File Explorer. The technician wants to see all partitions and their sizes. Which tool displays partition information?",
    options: [
      "Task Manager",
      "Disk Management (diskmgmt.msc)",
      "File Explorer alone is sufficient",
      "Device Manager"
    ],
    correct: 1,
    explanation: "Disk Management (diskmgmt.msc) shows all drives, partitions (including hidden recovery partitions), unallocated space, drive letters, file systems, and partition health. It explains 'missing' space - recovery partitions, EFI system partitions, and manufacturer partitions consume space. File Explorer only shows visible partitions. Task Manager doesn't show partition details. Device Manager shows hardware but not partition information. Disk Management is essential for understanding drive layout and managing partitions."
  },
  {
    id: 8,
    question: "A technician wants to see detailed information about ALL running processes, including their Process IDs (PIDs) and user accounts. Which Task Manager tab provides this view?",
    options: [
      "Processes tab",
      "Details tab",
      "Services tab",
      "Performance tab"
    ],
    correct: 1,
    explanation: "The Details tab shows all running processes with technical details: Process ID (PID), user account, CPU/memory usage, process description, status. This is the 'classic' Task Manager view (similar to older Windows versions). Processes tab groups applications and background processes in a user-friendly view. Services tab shows Windows services. Performance tab displays resource graphs. Use Details tab when you need PID numbers (for troubleshooting, ending processes with taskkill command, or identifying suspicious processes)."
  },
  {
    id: 9,
    question: "A service crucial for networking keeps stopping randomly. The technician wants to configure it to restart automatically if it fails. Where is this configured?",
    options: [
      "Task Manager > Services tab > Restart",
      "Services console (services.msc) > Service Properties > Recovery tab",
      "Event Viewer > Auto-restart settings",
      "Control Panel > Network settings"
    ],
    correct: 1,
    explanation: "Services console (services.msc) > right-click service > Properties > Recovery tab configures automatic recovery actions for service failures. Options: Take no action, Restart the service, Run a program, Restart the computer. Set different actions for first, second, and subsequent failures. Reset fail count after specified days. This prevents manual intervention when services crash. Task Manager can manually restart but not configure automatic recovery. Event Viewer logs failures but doesn't configure recovery. Recovery tab is essential for critical service reliability."
  },
  {
    id: 10,
    question: "A technician suspects registry corruption is causing application crashes. They need to edit the Windows Registry. What tool is used to manually edit registry keys?",
    options: [
      "Task Manager",
      "Registry Editor (regedit.exe)",
      "Control Panel",
      "Device Manager"
    ],
    correct: 1,
    explanation: "Registry Editor (regedit.exe) allows manual viewing and editing of the Windows Registry (system configuration database). Access via: Run > regedit. CRITICAL: Always back up the registry before editing - incorrect changes can prevent Windows from booting. Navigate through hives: HKEY_LOCAL_MACHINE (system settings), HKEY_CURRENT_USER (user settings), etc. Use for: removing malware registry entries, fixing registration errors, advanced troubleshooting. Task Manager doesn't access registry. Control Panel provides safe settings interfaces. Registry editing is powerful but dangerous - only for advanced troubleshooting."
  },
  {
    id: 11,
    question: "A computer is low on disk space. Which built-in tool removes temporary files, system cache, and previous Windows installations to free up space?",
    options: [
      "Disk Cleanup (cleanmgr.exe)",
      "Task Manager",
      "Device Manager",
      "Services console"
    ],
    correct: 0,
    explanation: "Disk Cleanup (cleanmgr.exe) removes: temporary files, download folder contents, recycle bin, Windows Update cache, previous Windows installations (Windows.old), thumbnails, system error memory dumps. Access via: search 'Disk Cleanup' or right-click drive > Properties > Disk Cleanup. Click 'Clean up system files' for additional options (previous Windows versions, update files). This can recover 10-50GB. Task Manager doesn't clean files. Device Manager manages hardware. Disk Cleanup is the safe, built-in space recovery tool."
  },
  {
    id: 12,
    question: "A technician needs to monitor CPU, memory, and disk usage over time to identify performance patterns. Which tool creates detailed performance logs and graphs?",
    options: [
      "Event Viewer",
      "Performance Monitor (perfmon.exe)",
      "Task Manager (real-time only)",
      "System Information"
    ],
    correct: 1,
    explanation: "Performance Monitor (perfmon.exe) tracks hundreds of performance counters over time: CPU usage by core, memory pages/sec, disk queue length, network throughput. Create custom data collector sets to log performance, view historical data, identify trends (memory leaks, disk bottlenecks). Task Manager shows real-time only. Event Viewer logs events not performance metrics. System Information shows static configuration. Performance Monitor is for advanced performance analysis, capacity planning, and baseline establishment. Essential for diagnosing intermittent performance issues."
  },
  {
    id: 13,
    question: "A user reports slow network performance. The technician wants to see which applications are using network bandwidth in real-time. Which tool provides this information?",
    options: [
      "Event Viewer",
      "Resource Monitor (resmon.exe)",
      "System Configuration",
      "Disk Management"
    ],
    correct: 1,
    explanation: "Resource Monitor (resmon.exe) provides detailed real-time monitoring: CPU (which processes use CPU), Memory (physical memory usage), Disk (which processes read/write and where), Network (which processes send/receive data, addresses, ports). More detailed than Task Manager. Access via: search 'Resource Monitor' or Performance tab > Open Resource Monitor. Filter by specific processes to see their resource usage. Event Viewer logs events. System Configuration manages boot. Disk Management handles partitions. Resource Monitor is essential for identifying specific programs consuming resources."
  },
  {
    id: 14,
    question: "A service won't start and displays 'Error 1068: The dependency service or group failed to start.' What should the technician check?",
    options: [
      "The service has no dependencies - this error is impossible",
      "Check Service Properties > Dependencies tab to identify and start required services",
      "Immediately reinstall Windows",
      "Replace the hard drive"
    ],
    correct: 1,
    explanation: "Services often depend on other services to function. Services console > Properties > Dependencies tab shows: services this service depends on (must be running first), services that depend on this service. Error 1068 means a dependency isn't running. Solution: identify dependencies, start them manually or set to automatic startup, then start the original service. Common dependency chains: networking services depend on various core services. Reinstalling Windows is extreme. Hardware replacement isn't relevant. Understanding service dependencies is crucial for troubleshooting service startup failures."
  },
  {
    id: 15,
    question: "A technician wants to defragment a traditional hard drive to improve performance. They right-click the drive, select Properties > Tools > Optimize. What happens when they click 'Optimize' on an SSD?",
    options: [
      "The SSD is defragmented like a hard drive",
      "Windows performs TRIM operation instead of defragmentation (SSDs shouldn't be defragmented)",
      "The SSD is immediately damaged",
      "Nothing happens - the button is disabled"
    ],
    correct: 1,
    explanation: "Windows automatically detects SSDs and performs TRIM instead of defragmentation. TRIM tells the SSD which blocks are no longer in use (after file deletion), allowing efficient reuse. Defragmentation harms SSDs: unnecessary (SSDs have no seek time), wastes limited write cycles, reduces lifespan. Windows never defragments SSDs. The Optimize button triggers the appropriate optimization: defragmentation for HDDs, TRIM for SSDs. Modern Windows schedules optimization automatically. Never use third-party defragmenters on SSDs."
  }
];