export const lesson34Flashcards = [
  {
    id: 1,
    front: "What is Computer Management and how do you access it?",
    back: "Consolidated console containing multiple administrative tools. Access: right-click Start (Windows+X) → Computer Management. Contains Task Scheduler, Event Viewer, Shared Folders, Users/Groups, Performance, Device Manager, Disk Management, Services."
  },
  {
    id: 2,
    front: "What is Task Scheduler used for?",
    back: "Automate programs/scripts to run at specific times or events. Schedule backups, maintenance tasks, updates. Create triggers (time, login, event), actions (run program, send email), conditions (power, network)."
  },
  {
    id: 3,
    front: "What is Event Viewer and what logs does it contain?",
    back: "Records system events, errors, warnings, information. Main logs: Application (program events), Security (login attempts, access), System (Windows components, drivers). Filter by severity: Error, Warning, Information, Critical."
  },
  {
    id: 4,
    front: "What do Event Viewer severity levels mean?",
    back: "Critical (system unstable, crashes), Error (significant problem, data loss), Warning (potential future problem), Information (successful operation), Audit Success/Failure (security events). Focus on Critical and Errors for troubleshooting."
  },
  {
    id: 5,
    front: "What is Shared Folders in Computer Management?",
    back: "View/manage network shares on local computer. See active shares, current sessions (connected users), open files. Create new shares, set permissions, monitor who's accessing what. Under System Tools."
  },
  {
    id: 6,
    front: "What is Local Users and Groups?",
    back: "Manage local user accounts and groups on computer (not domain). Create/delete users, reset passwords, disable accounts, manage group memberships. Available in Pro/Enterprise, NOT Home edition."
  },
  {
    id: 7,
    front: "What is Performance Monitor (perfmon)?",
    back: "Real-time and logged performance monitoring. Track CPU, memory, disk, network usage. Create custom counters, set alerts, generate reports. Diagnose performance bottlenecks, baseline system performance."
  },
  {
    id: 8,
    front: "What is Disk Management used for?",
    back: "Create/delete/format partitions, assign drive letters, extend/shrink volumes, initialize disks, convert MBR/GPT. Graphical view of all drives and partitions. Access: Computer Management or diskmgmt.msc."
  },
  {
    id: 9,
    front: "What operations can you perform in Disk Management?",
    back: "Create/delete volumes, format drives, assign/change drive letters, extend/shrink partitions, mark partition active, initialize new disks, convert basic/dynamic, convert MBR/GPT. Cannot resize if files in way."
  },
  {
    id: 10,
    front: "What is the Services console (services.msc)?",
    back: "Manage Windows services (background processes). Start/stop/restart services, set startup type (Automatic, Manual, Disabled), configure recovery actions, view dependencies. Critical for troubleshooting service failures."
  },
  {
    id: 11,
    front: "What are service startup types?",
    back: "Automatic (starts at boot), Automatic (Delayed Start) (starts after boot completes), Manual (start when needed), Disabled (cannot start). Set based on whether service always needed or only sometimes."
  },
  {
    id: 12,
    front: "What is Microsoft Management Console (MMC)?",
    back: "Framework for creating custom administrative consoles. Add snap-ins (Device Manager, Event Viewer, etc.) to build personalized management tool. Save custom consoles (.msc files). Run mmc.exe to create."
  },
  {
    id: 13,
    front: "What is Task Manager and how do you open it?",
    back: "Monitor system resources and running processes. Open: Ctrl+Shift+Esc, Ctrl+Alt+Del → Task Manager, right-click taskbar. Shows processes, performance, startup apps, users, services, details."
  },
  {
    id: 14,
    front: "What does the Processes tab in Task Manager show?",
    back: "All running programs and background processes. Shows CPU, Memory, Disk, Network usage per process. End unresponsive tasks, identify resource hogs. Grouped by Apps, Background processes, Windows processes."
  },
  {
    id: 15,
    front: "What does the Performance tab in Task Manager show?",
    back: "Real-time graphs of CPU, Memory, Disk, Ethernet/Wi-Fi usage. Current usage percentages, speed, capacity. Click each for detailed view. Quick way to identify performance bottlenecks."
  },
  {
    id: 16,
    front: "What does the Startup tab in Task Manager control?",
    back: "Programs that run at Windows startup. Enable/disable startup items to improve boot time. Shows impact (High, Medium, Low, None). Right-click to disable - doesn't uninstall, just prevents auto-start."
  },
  {
    id: 17,
    front: "What does the Users tab in Task Manager show?",
    back: "All logged-in users and their resource usage. Disconnect or sign out other users (if admin). Useful for multi-user systems, Remote Desktop servers. See what each user is running."
  },
  {
    id: 18,
    front: "What does the Details tab in Task Manager show?",
    back: "All running processes with PID (Process ID), status, user, CPU, memory. More technical than Processes tab. End process tree, set priority, set affinity (which CPU cores). For advanced troubleshooting."
  },
  {
    id: 19,
    front: "What does the Services tab in Task Manager do?",
    back: "Quick view of all Windows services and status (Running, Stopped). Start/stop services directly. Link to full Services console for more options. Simpler than services.msc for quick service management."
  },
  {
    id: 20,
    front: "What is Resource Monitor?",
    back: "Detailed real-time resource monitoring - CPU, Memory, Disk, Network. More detailed than Task Manager Performance tab. See which processes using specific resources, TCP connections, disk activity. Access from Performance tab."
  },
  {
    id: 21,
    front: "How do you extend a volume in Disk Management?",
    back: "Right-click partition → Extend Volume. Requires unallocated space immediately after partition. Cannot extend if files/partitions in way. Increases partition size using adjacent free space. NTFS/ReFS only."
  },
  {
    id: 22,
    front: "How do you shrink a volume in Disk Management?",
    back: "Right-click partition → Shrink Volume. Calculates how much can be shrunk based on file locations. Creates unallocated space. May need to defragment first for maximum shrink. Useful before creating new partition."
  },
  {
    id: 23,
    front: "What is Event Viewer's Custom Views?",
    back: "Saved filtered views of events. Create custom filter for specific events, applications, time ranges. Easier than searching through thousands of events. Right-click Custom Views → Create Custom View."
  },
  {
    id: 24,
    front: "What is the Print Spooler service and why is it important?",
    back: "Service managing print queue and print jobs. If stopped, cannot print. Common troubleshooting: restart Print Spooler service (services.msc or net stop/start spooler). Clear spooler folder if stuck jobs."
  },
  {
    id: 25,
    front: "How do you identify a performance bottleneck using Task Manager?",
    back: "Performance tab → check CPU, Memory, Disk, Network usage. Consistent 100% usage = bottleneck. CPU 100% = need faster CPU or close programs. Memory high = need more RAM. Disk 100% = slow drive or disk issue."
  },
  {
    id: 26,
    front: "What is process priority and how do you change it?",
    back: "Task Manager Details tab → right-click process → Set priority. Realtime (highest, risky), High, Above Normal, Normal, Below Normal, Low. Higher priority gets more CPU time. Default is Normal - only change for specific needs."
  },
  {
    id: 27,
    front: "What is CPU affinity?",
    back: "Task Manager Details tab → right-click process → Set affinity. Assign process to specific CPU cores. Restrict process to certain cores, can help with specific application issues. Most programs should use all cores."
  },
  {
    id: 28,
    front: "How do you find what's causing high disk usage?",
    back: "Task Manager → Performance → Disk (check overall usage). Processes tab → sort by Disk column to find culprit. Resource Monitor → Disk tab for more details. Common causes: Windows Search indexing, antivirus scans, Windows Update."
  },
  {
    id: 29,
    front: "What Windows services should generally always be running?",
    back: "DHCP Client (automatic IP), DNS Client (name resolution), Windows Defender, Windows Update, Remote Procedure Call (RPC), Windows Audio, Plug and Play. Disabling critical services can break Windows functionality."
  },
  {
    id: 30,
    front: "How do you create a custom MMC console?",
    back: "Run mmc.exe → File → Add/Remove Snap-ins → select tools (Event Viewer, Device Manager, etc.) → Add → OK. Arrange as desired → File → Save. Creates .msc file for quick access to preferred tools."
  }
];