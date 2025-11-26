# Lesson 50: PC Troubleshooting Tools

**Estimated Time:** 25-30 minutes  
**Domain:** Software Troubleshooting (Domain 3.0 - 22% of exam)  
**Exam Objectives Covered:** 3.2 - Given a scenario, troubleshoot common PC security issues; use appropriate tools

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Navigate and interpret Event Viewer logs to diagnose system problems
- Use Task Manager effectively for performance analysis and process management
- Configure System Configuration (msconfig) for clean boot troubleshooting
- Understand Registry Editor structure and make safe modifications
- Utilize System Information (msinfo32) for hardware and software inventory
- Apply Resource Monitor for detailed resource usage analysis
- Use Performance Monitor for tracking system metrics over time
- Implement Disk Management for storage troubleshooting

---

## Video Resources

- [Professor Messer: Windows Troubleshooting Tools](https://www.youtube.com/watch?v=yN3y9-FvyKM) (12:38)
- [PowerCert: Event Viewer Explained](https://www.youtube.com/watch?v=8S-OK5GKBFQ) (9:15)
- [NetworkChuck: Windows Task Manager Deep Dive](https://www.youtube.com/watch?v=QV5yz-uYFnA) (14:22)

---

## Introduction

Detective work isn't about hunches—it's about evidence. When Sherlock Holmes solves a case, he doesn't guess randomly. He examines footprints, analyzes fibers, interviews witnesses, and follows logical chains of evidence until the truth emerges. Windows troubleshooting works the same way.

Your computer constantly generates evidence about what's happening inside. Every error is logged. Every process is tracked. Every resource consumption is measured. The challenge isn't finding evidence—it's knowing where to look and how to interpret what you find.

Imagine a user complaining their computer is "acting weird." That's unhelpfully vague. But open Event Viewer and you might discover 47 disk errors in the last hour—now you know the hard drive is failing. Check Task Manager and find a process consuming 95% CPU—now you know what's slowing everything down. Look at Resource Monitor and see a program making thousands of network connections—now you suspect malware.

Windows includes powerful diagnostic tools, but most users—and many IT professionals—barely scratch the surface. They know Task Manager shows "stuff running" and Event Viewer has "lots of confusing messages." That's like a detective knowing the police station has "some files somewhere."

In this lesson, you'll master these tools. You'll learn to read Event Viewer like a system diary, use Task Manager as a real-time health monitor, configure msconfig for surgical troubleshooting, and even navigate the Registry (carefully!) when other options fail. Each tool reveals different aspects of system behavior, and knowing which tool to use when separates effective troubleshooters from frustrated guessers.

By the end, you'll approach troubleshooting like a detective with a complete forensic lab at your disposal. The evidence is always there. You'll know exactly where to find it.

---

## Event Viewer: The System Diary

Every significant event in Windows gets recorded. Application crashes, service failures, security events, hardware errors, driver issues—all logged in **Event Viewer**, Windows' comprehensive logging system.

### Accessing Event Viewer

- Search "Event Viewer" in Start menu
- Run `eventvwr.msc`
- Right-click Start → Event Viewer
- Computer Management → System Tools → Event Viewer

### Log Categories

**Windows Logs** contains the most commonly used logs:

**Application** - Events from applications and programs. Application crashes, installation events, errors from software. When a program crashes, check here first.

**Security** - Audit events: successful/failed logins, file access (if auditing enabled), security policy changes. Essential for investigating potential security breaches or unauthorized access attempts.

**System** - Windows operating system events: driver loading, service start/stop, system errors, hardware problems. When Windows itself misbehaves, System log holds the clues.

**Setup** - Events related to Windows installation and updates. Useful for troubleshooting update failures.

**Applications and Services Logs** contains detailed logs from specific components—hundreds of specialized logs for everything from DNS Client to PowerShell to individual applications.

### Event Types (Severity Levels)

**Information** (blue "i" icon) - Normal operational events. Service started successfully, user logged in, backup completed. Not problems—just records of normal activity.

**Warning** (yellow triangle) - Something unusual but not necessarily problematic. Disk space getting low, service taking longer than expected, potential issue that hasn't caused failure yet. Warnings deserve attention before they become errors.

**Error** (red circle) - Something failed. Application crashed, service couldn't start, disk error occurred. Errors indicate actual problems requiring investigation.

**Critical** (red circle with X) - Severe failure affecting system stability. BSOD events, unexpected shutdowns, critical service failures. Critical events demand immediate attention.

**Audit Success/Failure** (key icons, Security log only) - Security-related events. Login succeeded (Audit Success), login failed (Audit Failure). Used for security monitoring and investigating unauthorized access.

### Reading Event Details

Click any event to see details in the bottom pane, or double-click for full details window:

**Date and Time** - When the event occurred. Essential for correlating events with user-reported problem times.

**Source** - Which component generated the event (application name, driver, service). Identifies what's having problems.

**Event ID** - Numeric identifier for this specific event type. Searching "Event ID 41" or "Event ID 7" online reveals what that specific error means and common solutions.

**Level** - Severity (Information, Warning, Error, Critical).

**User** - Which user account was active when event occurred.

**Computer** - Which computer (relevant in multi-computer environments).

**Description** - Human-readable explanation of what happened. Sometimes helpful, sometimes cryptic Microsoft-speak.

**Details** - Technical details in XML format. Contains specific error codes, memory addresses, and technical information for deep troubleshooting.

### Using Event Viewer Effectively

**Correlate timing:** When did the user report the problem? Filter events to that timeframe. Look for Errors and Warnings around that time.

**Look for patterns:** One error might be a fluke. The same error appearing 50 times in an hour indicates a persistent problem.

**Search Event IDs:** When you find a relevant error, search the Event ID online. Microsoft's documentation and community forums often explain exactly what causes specific Event IDs and how to fix them.

**Filter views:** Right-click a log → Filter Current Log → Select specific levels (Errors only), sources, or Event IDs. Reduces noise when searching for specific problems.

**Create custom views:** Saved filters for common troubleshooting scenarios. Create a view showing only Errors and Critical events from the last 24 hours across all logs.

### Common Event IDs to Know

**Event ID 41 (System)** - "Kernel-Power" - System restarted without clean shutdown. Indicates crash, power loss, or forced restart. Investigate hardware (power supply, overheating) or software (driver) causes.

**Event ID 6008 (System)** - Previous shutdown was unexpected. Similar to 41, indicates system didn't shut down properly.

**Event ID 7 (System)** - Disk bad block. Hard drive has physical damage. Back up data immediately, replace drive soon.

**Event ID 11 (System)** - "The driver detected a controller error" - Disk communication problem. Can indicate failing drive, loose cable, or controller issue.

**Event ID 1000 (Application)** - Application error. Program crashed. Details show which application and what type of crash.

**Event ID 1001 (Application)** - Windows Error Reporting. Contains crash details that can be analyzed for cause.

**Event ID 4624 (Security)** - Successful login. Records who logged in and how (console, network, etc.).

**Event ID 4625 (Security)** - Failed login. Records failed login attempts. Many failures for one account may indicate brute-force attack or forgotten password.

🎯 **Exam Tip:** Know that **Event Viewer contains Application, Security, and System logs** as primary troubleshooting resources. Understand that **Error and Critical events indicate problems requiring attention**, while **Information events are normal operational records**. Remember that **Event IDs can be searched online** for specific troubleshooting guidance.

---

## Task Manager: Real-Time System Monitor

Task Manager is the window into what your computer is doing right now. It shows running processes, resource usage, startup programs, and more.

### Accessing Task Manager

- Ctrl+Shift+Esc (direct access)
- Ctrl+Alt+Delete → Task Manager
- Right-click taskbar → Task Manager
- Search "Task Manager" in Start menu

### Task Manager Tabs

**Processes** - Shows all running applications and background processes with real-time resource usage. The most commonly used tab.

Columns show:
- **CPU** - Processor usage percentage
- **Memory** - RAM usage
- **Disk** - Storage read/write activity
- **Network** - Network bandwidth usage
- **GPU** - Graphics processor usage

Click column headers to sort. Finding the resource hog is usually as simple as sorting by the bottlenecked resource.

**Expanding application groups** (arrow next to app names) shows individual windows/tabs within that application. Useful for identifying which browser tab is consuming resources.

**Performance** - Graphs showing resource usage over time. Click each resource (CPU, Memory, Disk, Network, GPU) for detailed view including:
- Usage graphs (history and real-time)
- Speed/frequency information
- Hardware specifications
- Uptime

**Open Resource Monitor** link at bottom provides even more detail.

**App history** - Resource usage history for Store apps. Shows which apps consumed the most CPU, network, and other resources over time.

**Startup** - Programs that launch when Windows starts. Shows:
- **Status** - Enabled or Disabled
- **Startup impact** - High, Medium, Low, or Not measured

Right-click to Enable/Disable startup programs. Disabling unnecessary startup programs speeds boot time and reduces resource consumption.

**Users** - Shows logged-in users and their resource usage. Can disconnect or sign out other users (with appropriate permissions).

**Details** - Advanced view showing all processes with process IDs (PIDs), status, CPU, memory usage. More technical than Processes tab. Right-click for additional options like setting priority or ending process tree.

**Services** - Windows services status. Can start, stop, or restart services. Link to full Services console for detailed management.

### Using Task Manager for Troubleshooting

**High CPU usage:** Sort Processes by CPU. Identify what's consuming processor. Could be legitimate heavy workload (video encoding), stuck process (looping), or malware (cryptominer).

**High memory usage:** Sort by Memory. Check if specific application is consuming excessive RAM (memory leak) or if too many applications are running for available RAM.

**High disk usage:** Sort by Disk. Often caused by Windows Search indexing, Windows Update, antivirus scans, or failing hardware. Constant 100% disk on HDD is common bottleneck.

**Unresponsive application:** Find application in Processes → Right-click → End task. Forces application to close. Use when application is frozen and won't close normally.

**Identify unknown processes:** Right-click process → Search online. Opens browser search for that process name. Helps identify whether process is legitimate or potential malware.

**Performance baseline:** Use Performance tab to understand normal resource usage. When troubleshooting, compare current state to baseline to identify anomalies.

### Ending Processes Safely

**End task** (on Processes tab) - Closes the application. Usually safe, similar to closing the program normally.

**End process tree** (on Details tab) - Terminates the process and all child processes it spawned. More forceful, use when End task doesn't work.

**Caution:** Don't end system processes (svchost.exe, csrss.exe, winlogon.exe, etc.) unless you know exactly what you're doing. Ending critical system processes crashes Windows.

💡 **Pro Tip:** If you're unsure whether a process is safe to end, search for it online first. Legitimate Windows processes are well-documented. Unknown processes with random names might be malware.

---

## System Configuration (msconfig): Clean Boot Troubleshooting

**System Configuration** (msconfig) controls Windows startup behavior, allowing you to disable services and startup programs to isolate problems.

### Accessing msconfig

- Search "System Configuration" in Start menu
- Run `msconfig`

### msconfig Tabs

**General** - Startup selection:
- **Normal startup** - Loads all device drivers and services (default)
- **Diagnostic startup** - Loads basic devices and services only (like Safe Mode but in normal environment)
- **Selective startup** - Choose which categories to load

**Boot** - Boot options:
- **Safe boot** - Forces Safe Mode on next restart (options: Minimal, Alternate shell, Network, Active Directory repair)
- **No GUI boot** - Skips Windows logo animation (minor speedup)
- **Boot log** - Creates log file of drivers loaded during boot (ntbtlog.txt)
- **Base video** - Uses standard VGA driver (for graphics issues)
- **Timeout** - How long boot menu displays before default selection

**Services** - List of all Windows services with ability to enable/disable:
- **Hide all Microsoft services** - Critical checkbox! Shows only third-party services, letting you disable non-Microsoft services without risking Windows stability
- Individual checkboxes to enable/disable each service

**Startup** - Links to Task Manager's Startup tab (in modern Windows versions)

**Tools** - Quick access to various Windows administrative tools (Event Viewer, System Information, Registry Editor, etc.)

### Performing a Clean Boot

Clean boot starts Windows with minimal services and startup programs, helping isolate whether problems are caused by third-party software.

**Steps:**

1. Run `msconfig`
2. **Services tab** → Check "Hide all Microsoft services" → Click "Disable all"
3. **Startup tab** → Open Task Manager → Disable all startup items
4. Restart computer

If problem disappears in clean boot, a disabled service or startup program was the cause. Re-enable items in groups (half at a time) to identify the specific culprit through binary search—enable half, test, if problem returns it's in that half, if not it's in the other half. Repeat until you find the specific problematic item.

**After troubleshooting:** Return msconfig to Normal startup to restore all services and startup programs.

🎯 **Exam Tip:** Know that **clean boot disables third-party services and startup programs** to isolate software conflicts. Remember to **"Hide all Microsoft services" before disabling** to avoid affecting Windows functionality. Clean boot is different from Safe Mode—it runs normal Windows with third-party software disabled rather than minimal Windows.

---

## Registry Editor: The Danger Zone

The **Windows Registry** is a hierarchical database storing configuration settings for Windows, applications, hardware, and users. **Registry Editor** (regedit) allows direct modification of these settings.

### Accessing Registry Editor

- Search "Registry Editor" in Start menu
- Run `regedit`
- Requires administrator privileges

### Registry Structure

The Registry is organized into five main sections called "hives":

**HKEY_CLASSES_ROOT (HKCR)** - File associations and COM object registrations. Determines which program opens which file types.

**HKEY_CURRENT_USER (HKCU)** - Settings for the currently logged-in user. Preferences, desktop configuration, application settings specific to this user.

**HKEY_LOCAL_MACHINE (HKLM)** - System-wide settings affecting all users. Hardware configuration, installed software, Windows settings.

**HKEY_USERS (HKU)** - Settings for all user profiles on the system. HKCU is actually a pointer to the current user's section within HKU.

**HKEY_CURRENT_CONFIG (HKCC)** - Current hardware profile settings. Rarely modified directly.

Within each hive, settings are organized in **keys** (like folders) containing **values** (like files). Values have names, types, and data.

### Value Types

**String (REG_SZ)** - Text data. File paths, names, simple text settings.

**Binary (REG_BINARY)** - Binary data. Usually not human-readable.

**DWORD (REG_DWORD)** - 32-bit number. Often used for on/off settings (0 or 1) or numeric configurations.

**QWORD (REG_QWORD)** - 64-bit number. Similar to DWORD but larger values.

**Multi-String (REG_MULTI_SZ)** - Multiple text strings.

**Expandable String (REG_EXPAND_SZ)** - Text string with environment variables (like %SystemRoot%).

### When to Use Registry Editor

**Applying specific fixes:** Many troubleshooting guides provide registry modifications for specific problems. Example: "Navigate to HKLM\SOFTWARE\Policies\Microsoft\Windows and create DWORD value..."

**Removing malware remnants:** After malware removal, leftover registry entries might cause issues. Registry cleaners are generally unnecessary and risky, but manually removing specific known malware entries is sometimes needed.

**Customizing Windows behavior:** Some settings aren't exposed in the GUI but can be changed through Registry. Power user tweaks, enterprise configurations.

**Troubleshooting application issues:** Application settings stored in Registry might become corrupted. Deleting and recreating them can resolve issues.

### Registry Safety Rules

**ALWAYS back up before editing:**
- Export the key you're modifying: Right-click key → Export → Save as .reg file
- If something breaks, double-click the .reg file to restore

**Never edit randomly:** Only modify registry based on specific, trusted instructions. Random changes can make Windows unbootable.

**Know what you're changing:** Understand what a registry modification does before making it. Search online for the specific key/value to understand its purpose.

**Create a System Restore point first:** Before significant registry changes, create restore point allowing rollback if things go wrong.

**Be extremely careful with HKLM:** Changes to HKEY_LOCAL_MACHINE affect all users and system operation. Mistakes here can prevent Windows from starting.

### Common Registry Locations

**Startup programs:**
- `HKCU\Software\Microsoft\Windows\CurrentVersion\Run` - Current user startup
- `HKLM\Software\Microsoft\Windows\CurrentVersion\Run` - All users startup

**Uninstall information:**
- `HKLM\Software\Microsoft\Windows\CurrentVersion\Uninstall` - Installed programs

**File associations:**
- `HKCR\.ext` - File extension associations

⚠️ **Warning:** Registry Editor has no "undo" function. Changes take effect immediately. Incorrect modifications can make Windows unbootable or cause application failures. Always back up, always be certain, always be cautious.

---

## System Information (msinfo32): Hardware and Software Inventory

**System Information** provides comprehensive details about hardware, software, and system configuration without requiring you to open the computer or dig through multiple settings screens.

### Accessing System Information

- Search "System Information" in Start menu
- Run `msinfo32`

### Information Categories

**System Summary** - Overview including:
- OS name and version
- System manufacturer and model
- Processor type and speed
- BIOS version and date
- Total physical memory
- Available physical memory
- Virtual memory settings
- Page file location

**Hardware Resources:**
- **Conflicts/Sharing** - Hardware resource conflicts (rare on modern systems)
- **DMA** - Direct Memory Access channels
- **Forced Hardware** - Manually configured hardware
- **I/O** - Input/Output port addresses
- **IRQs** - Interrupt Request assignments
- **Memory** - Memory address ranges used by hardware

**Components** - Detailed hardware information:
- Display (graphics adapter details)
- Sound device
- Network adapters
- Storage (drives, controllers)
- USB devices
- And many more categories

**Software Environment:**
- System drivers
- Environment variables
- Network connections
- Running tasks
- Loaded modules
- Services
- Startup programs
- And more

### Using System Information

**Quick system overview:** System Summary provides at-a-glance system specifications without opening the case or installing third-party tools.

**Verify hardware:** Confirm what hardware is installed, what drivers are loaded, what resources are assigned.

**Export reports:** File → Export creates text file with all system information. Useful for documentation, remote troubleshooting, or comparing configurations.

**Search function:** Edit → Find searches across all categories. Useful for locating specific drivers, services, or components.

**Troubleshooting driver issues:** Components → Problem Devices shows hardware with driver issues or resource conflicts.

---

## Resource Monitor: Deep Resource Analysis

**Resource Monitor** provides more detailed resource usage information than Task Manager, showing exactly which processes are using which resources and how.

### Accessing Resource Monitor

- Search "Resource Monitor" in Start menu
- Run `resmon`
- Task Manager → Performance tab → Open Resource Monitor

### Resource Monitor Tabs

**Overview** - Summary showing CPU, Disk, Network, and Memory with top processes for each. Good starting point for identifying resource bottlenecks.

**CPU** - Detailed CPU usage per process, including:
- Average CPU percentage
- Number of threads
- Associated handles
- Associated modules (DLLs loaded by process)

**Memory** - Memory usage details:
- Working set (physical RAM currently used)
- Private memory (memory not shared with other processes)
- Shareable memory (memory that could be shared)
- Commit (virtual memory committed)
- Hard faults/sec (page file access frequency—high values indicate insufficient RAM)

**Disk** - Disk I/O details:
- Read/Write bytes per second per process
- Which files each process is accessing
- Response time (slow response indicates disk problems)
- Disk queue length (waiting I/O operations)

**Network** - Network usage per process:
- Bytes sent/received per process
- Which addresses each process communicates with
- TCP connections with state (listening, established, etc.)
- Listening ports

### Using Resource Monitor for Troubleshooting

**Identify disk bottlenecks:** Disk tab shows exactly which processes are reading/writing, to which files, at what speed. When disk is at 100% in Task Manager, Resource Monitor identifies the culprit.

**Find network connections:** Network tab shows all active connections per process. Useful for identifying:
- Which programs are using bandwidth
- Unexpected network connections (potential malware)
- Listening ports and what's using them

**Memory pressure diagnosis:** Memory tab's "Hard Faults/sec" indicates how often Windows accesses the page file because RAM is full. High hard faults = need more RAM or close programs.

**Process investigation:** Select any process to filter all tabs to that process, showing only its CPU, memory, disk, and network activity.

💡 **Key Insight:** Task Manager shows what's happening at a high level. Resource Monitor shows exactly what's happening at a detailed level. When Task Manager shows a resource is constrained but doesn't clearly identify why, Resource Monitor provides the detailed view needed to identify the specific cause.

---

## Performance Monitor: Metrics Over Time

**Performance Monitor** (perfmon) tracks system metrics over time, allowing you to identify patterns, establish baselines, and diagnose intermittent problems.

### Accessing Performance Monitor

- Search "Performance Monitor" in Start menu
- Run `perfmon`

### Performance Monitor Components

**Monitoring Tools → Performance Monitor** - Real-time graph of selected counters. By default shows Processor % Processor Time. Add counters for any metrics you want to track.

**Adding Counters:**
1. Click green + button
2. Select counter category (Processor, Memory, PhysicalDisk, etc.)
3. Select specific counter (% Processor Time, Available MBytes, etc.)
4. Select instance (which CPU, which disk, etc.)
5. Click Add, then OK

**Common Useful Counters:**

- **Processor → % Processor Time** - CPU usage
- **Memory → Available MBytes** - Free RAM
- **Memory → Pages/sec** - Page file activity (high = memory pressure)
- **PhysicalDisk → % Disk Time** - Disk utilization
- **PhysicalDisk → Avg. Disk Queue Length** - I/O waiting (>2 indicates bottleneck)
- **Network Interface → Bytes Total/sec** - Network throughput

**Data Collector Sets** - Configure automated data collection over time. Creates logs that can be analyzed later. Useful for:
- Monitoring systems overnight when problems occur sporadically
- Establishing performance baselines
- Long-term trend analysis

**Reports** - View collected data from Data Collector Sets. Analyze patterns in historical data.

### Using Performance Monitor

**Establishing baselines:** Record normal system performance. When problems occur, compare current performance to baseline to identify what changed.

**Diagnosing intermittent problems:** When problems occur unpredictably, configure Data Collector Set to run continuously. When problem occurs, analyze the data around that time.

**Capacity planning:** Track resource usage trends over weeks/months to predict when upgrades will be needed.

**Detailed analysis:** When Task Manager and Resource Monitor don't provide enough detail, Performance Monitor offers access to hundreds of specific metrics.

---

## Disk Management: Storage Troubleshooting

**Disk Management** handles disk partitioning, drive letters, volume management, and basic disk troubleshooting.

### Accessing Disk Management

- Search "Disk Management" in Start menu
- Run `diskmgmt.msc`
- Right-click Start → Disk Management

### Disk Management Views

**Upper pane** - List of all volumes with:
- Drive letter
- Label (name)
- File system (NTFS, FAT32, etc.)
- Status (Healthy, Unhealthy, etc.)
- Capacity and free space

**Lower pane** - Graphical view of physical disks and their partitions showing relative sizes and partition layout.

### Common Disk Management Tasks

**Assign/Change Drive Letter:**
Right-click volume → Change Drive Letter and Paths → Change → Select new letter. Useful when external drives get unexpected letters or when you want to reorganize.

**Format Volume:**
Right-click volume → Format. Options for file system (NTFS, exFAT, FAT32), allocation unit size, and quick vs. full format. Use for preparing new drives or completely erasing existing drives.

**Create Partition:**
Right-click unallocated space → New Simple Volume. Wizard guides through size, drive letter, file system, and label. Use when setting up new drives.

**Extend Volume:**
Right-click volume → Extend Volume. Adds adjacent unallocated space to existing volume. Useful when drive is full and you have spare space.

**Shrink Volume:**
Right-click volume → Shrink Volume. Reduces volume size, creating unallocated space. Use before extending another volume or creating new partition.

**Initialize Disk:**
New disks appear as "Not Initialized." Right-click → Initialize Disk → Choose MBR or GPT partition style. Required before creating partitions on new disks.

### Disk Status Indicators

**Healthy** - Normal operation.

**Healthy (At Risk)** - Disk is working but experiencing errors. Back up data and investigate.

**Failed** - Disk or volume has failed. Data may be lost. Attempt data recovery if possible.

**Unknown** - Windows can't read the disk. Could be hardware failure, unrecognized file system, or damaged partition table.

**Not Initialized** - New disk without partition table. Initialize before use.

**Unallocated** - Space not assigned to any partition. Create new volume to use.

**Offline** - Disk is detected but not accessible. Right-click → Online to bring it back (if hardware is functional).

---

## Key Exam Tips

🎯 **Event Viewer contains** Application, Security, and System logs. Error and Critical events indicate problems. Event IDs can be searched online for specific guidance.

🎯 **Task Manager shows** real-time resource usage (CPU, Memory, Disk, Network), running processes, startup programs, and services.

🎯 **msconfig enables clean boot** by disabling third-party services ("Hide all Microsoft services" first) and startup programs to isolate software conflicts.

🎯 **Registry Editor (regedit)** provides direct access to Windows configuration database. Always back up before editing. HKLM affects all users, HKCU affects current user only.

🎯 **System Information (msinfo32)** provides comprehensive hardware and software inventory including system summary, components, and software environment.

🎯 **Resource Monitor (resmon)** provides detailed resource usage per process—more detail than Task Manager for CPU, Memory, Disk, and Network.

🎯 **Performance Monitor (perfmon)** tracks metrics over time using counters and data collector sets. Used for baseline establishment and intermittent problem diagnosis.

🎯 **Disk Management (diskmgmt.msc)** handles partitions, drive letters, volume creation, and basic disk troubleshooting.

🎯 **Clean boot differs from Safe Mode:** Clean boot runs normal Windows with third-party software disabled; Safe Mode runs minimal Windows.

🎯 **Event ID 41** indicates unexpected shutdown (crash/power loss). **Event ID 7** indicates disk bad blocks.

⚠️ **Warning:** Registry Editor changes take effect immediately with no undo. Always export keys before modifying. Incorrect changes can make Windows unbootable.

💡 **Memory Trick for Tools:**
- **Event Viewer** = What happened (logs)
- **Task Manager** = What's happening now (processes)
- **msconfig** = What starts (startup control)
- **regedit** = How it's configured (settings database)
- **msinfo32** = What's installed (inventory)
- **resmon** = Who's using what (detailed resource usage)
- **perfmon** = How it performs over time (metrics)
- **diskmgmt** = How storage is organized (partitions)

---

## Key Takeaways

- [ ] **Event Viewer logs system events** in Application (program events), Security (logins, audits), and System (Windows events) logs
- [ ] **Event severity levels indicate importance:** Information (normal), Warning (potential issue), Error (failure), Critical (severe failure)
- [ ] **Event IDs identify specific event types** and can be searched online for troubleshooting guidance
- [ ] **Task Manager shows real-time resource usage** and allows ending unresponsive processes, managing startup programs, and monitoring performance
- [ ] **High resource usage in Task Manager** (100% CPU, Memory, or Disk) indicates that resource is the system bottleneck
- [ ] **msconfig enables clean boot** by disabling third-party services and startup programs to isolate software conflicts
- [ ] **Always "Hide all Microsoft services"** in msconfig before disabling services to avoid affecting Windows functionality
- [ ] **Registry Editor provides direct access** to Windows configuration database—powerful but dangerous without proper precautions
- [ ] **Always back up registry keys** (Export) before modifying, and create System Restore points before significant changes
- [ ] **System Information (msinfo32)** provides comprehensive system inventory without requiring third-party tools
- [ ] **Resource Monitor provides detailed resource usage** per process—use when Task Manager doesn't show enough detail
- [ ] **Performance Monitor tracks metrics over time** using counters and data collector sets for baseline and trend analysis
- [ ] **Disk Management handles partition operations** including creating, formatting, extending, shrinking volumes, and assigning drive letters
- [ ] **Disk status indicators** (Healthy, At Risk, Failed, Unknown) reveal disk and partition health
- [ ] **Each tool serves different purposes**—match the tool to the troubleshooting need for efficient problem resolution

---

## Check Your Understanding

**1. A user reports their computer randomly restarts without warning several times per day. There's no BSOD visible—the screen just goes black and the computer reboots. Which tool would you use first to investigate, and what would you look for?**

<details>
<summary>Show Answer</summary>
<strong>Use Event Viewer and look for Event ID 41 (Kernel-Power) or Event ID 6008 in the System log, which indicate unexpected shutdowns.</strong> Investigation process: (1) **Open Event Viewer**—navigate to Windows Logs → System. (2) **Filter for critical events**—Right-click System → Filter Current Log → Select "Critical" and "Error" levels. (3) **Look for Event ID 41**—"Kernel-Power" events indicate the system restarted without clean shutdown. The event details show the "BugcheckCode"—if it's 0, the system powered off unexpectedly (power issue); other codes indicate crash types. (4) **Look for Event ID 6008**—records that "The previous system shutdown was unexpected." (5) **Check surrounding events**—look at errors immediately before the restart. Hardware errors (Event ID 7 for disk, WHEA events for hardware), driver errors, or other system errors might reveal the cause. Common causes of random restarts: failing power supply (inadequate or failing), overheating (CPU thermal shutdown), RAM problems (test with Windows Memory Diagnostic), disk issues (check for disk-related errors), driver problems (especially graphics drivers), or Windows Update issues. The Event Viewer won't tell you the reason directly, but the pattern and type of events guide further investigation. If Event ID 41 shows BugcheckCode 0 consistently, focus on power supply and thermal issues. If bugcheck codes vary, focus on hardware diagnostics (RAM, disk) and driver investigation.
</details>

**2. A computer is extremely slow. Task Manager shows CPU at 15%, Memory at 70%, and Disk at 100% constantly. The computer has an HDD (not SSD). Based on these readings, what's the bottleneck and what are potential solutions?**

<details>
<summary>Show Answer</summary>
<strong>The disk is the bottleneck—100% disk usage with low CPU and moderate memory indicates storage can't keep up with demands. The most effective solution is upgrading to an SSD.</strong> Analysis: (1) **CPU at 15%**—processor is mostly idle, not the bottleneck. (2) **Memory at 70%**—RAM has headroom, not the primary issue (though more RAM never hurts). (3) **Disk at 100%**—storage is completely saturated, everything waits for disk access. This is the classic HDD bottleneck on Windows 10/11. Modern Windows was designed with SSD performance in mind, and traditional HDDs simply can't keep up with the constant read/write operations from Windows Search, Superfetch, antivirus, Windows Update, and normal application use. Investigation: Open Resource Monitor → Disk tab to see exactly what's consuming disk I/O. Common culprits: Windows Search indexing, Windows Update, antivirus scans, System (kernel operations), svchost.exe (various services). Solutions (in order of effectiveness): (1) **Upgrade to SSD**—single most impactful performance improvement possible. SSDs are 10-100x faster than HDDs for random access. A 10-year-old computer with SSD often feels faster than new computer with HDD. (2) **Disable/limit Windows Search indexing**—reduces background disk activity but impacts search speed. (3) **Disable Superfetch/SysMain service**—reduces disk thrashing but slightly impacts application launch times. (4) **Schedule antivirus scans for off-hours**—prevents AV from competing with user activity. (5) **Check for failing drive**—constant 100% can indicate drive struggling with bad sectors. Run chkdsk /f /r. The honest answer: With modern Windows on HDD, 100% disk usage is often unavoidable during normal operation. The real fix is SSD upgrade. Everything else is working around the fundamental limitation that HDDs can't handle modern Windows workloads efficiently.
</details>

**3. An application that worked yesterday now crashes immediately when launched. You check Event Viewer and find Event ID 1000 in Application log with "Faulting module: msvcr120.dll" in the details. What does this indicate and how do you fix it?**

<details>
<summary>Show Answer</summary>
<strong>The crash is caused by a problem with msvcr120.dll, which is part of the Visual C++ 2013 Redistributable. Fix by reinstalling the Visual C++ Redistributables.</strong> Understanding the error: Event ID 1000 is an application error. The "Faulting module" identifies which component caused the crash. "msvcr120.dll" is the Microsoft Visual C++ Runtime Library from Visual Studio 2013. Many applications require these runtime libraries to function. The DLL might be corrupted, missing, or incompatible. Solution: (1) **Download Visual C++ Redistributable packages** from Microsoft's official website—get both x86 and x64 versions of the 2013 Redistributable (and ideally 2015-2022 as well, since applications might need various versions). (2) **Install the redistributables**—this replaces/repairs the DLL files. (3) **Restart and test the application.** If still failing: (1) **Uninstall and reinstall the specific application**—might have corrupted files beyond just the runtime. (2) **Run System File Checker**—`sfc /scannow` repairs corrupted system files that might include these DLLs. (3) **Check for conflicting software**—sometimes security software or other applications interfere. Broader context: Many Windows applications depend on Visual C++ Redistributables. If you see crashes mentioning msvcr*.dll or msvcp*.dll (where * is a version number like 100, 110, 120, 140), the corresponding Visual C++ Redistributable needs repair/reinstallation. Common versions: 2005, 2008, 2010, 2012, 2013, 2015-2022 (these are cumulative). Having all versions installed is normal—different applications require different versions.
</details>

**4. After installing new software, a computer has problems—applications crash randomly, system feels unstable. You want to determine if the new software is causing issues. How would you use msconfig to troubleshoot this?**

<details>
<summary>Show Answer</summary>
<strong>Perform a clean boot using msconfig to disable third-party services and startup programs, then test stability. If stable in clean boot, use binary search to identify the problematic software.</strong> Clean boot process: (1) **Run msconfig** (search or Win+R → msconfig). (2) **Services tab**—Check "Hide all Microsoft services" (critical step!), then click "Disable all." This disables all third-party services while preserving Windows functionality. (3) **Startup tab**—Click "Open Task Manager," then disable all startup items. (4) **Restart computer.** (5) **Test for stability**—use the computer normally. If problems disappear, a disabled service or startup item was the cause. Identifying the culprit (binary search method): (1) **Enable half the services**—In msconfig Services tab, enable approximately half the disabled items. (2) **Restart and test**—If problems return, the culprit is in the enabled half. If stable, it's in the still-disabled half. (3) **Repeat**—Enable/disable half of the suspect group. Continue until you identify the specific service causing issues. (4) **Repeat for startup items** if services weren't the cause. Once identified: (1) **Uninstall the problematic software** if you don't need it. (2) **Contact vendor** for updates or known issues if you need the software. (3) **Look for alternatives** if the software is fundamentally incompatible with your system. After troubleshooting: Return msconfig to "Normal startup" to restore all services (unless you've identified and want to keep specific items disabled). Important distinction: Clean boot ≠ Safe Mode. Clean boot runs normal Windows with third-party software disabled. Safe Mode runs minimal Windows. Clean boot is better for isolating third-party conflicts because you're testing in your normal environment.
</details>

**5. You need to change a specific Registry setting based on a troubleshooting guide. The guide says to navigate to HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System and change a DWORD value. Before making the change, what safety precautions should you take?**

<details>
<summary>Show Answer</summary>
<strong>Create a backup of the specific registry key by exporting it, create a System Restore point, verify the instructions are from a trusted source, and understand what the change does before proceeding.</strong> Safety precautions in order: (1) **Verify the source**—Is this from Microsoft documentation, reputable tech support, or random internet post? Registry modifications from untrusted sources could be malware instructions or incorrect advice that breaks your system. (2) **Understand the change**—Research what the specific DWORD value controls. If you're changing "EnableLUA" to 0, understand that disables User Account Control—is that really what you want? Don't blindly follow instructions without understanding consequences. (3) **Create System Restore point**—Before registry changes, create restore point (System Properties → System Protection → Create). This allows complete rollback if something goes wrong. (4) **Export the specific key**—In Registry Editor, navigate to the key mentioned (HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System), right-click it → Export → Save as .reg file in a known location. If the change causes problems, double-clicking this .reg file restores original values. (5) **Document current value**—Before changing, note the current value of the DWORD. Screenshot or write it down. Enables manual restoration if needed. (6) **Make the change**—Navigate to the key, find the DWORD, double-click to edit, enter new value. (7) **Test immediately**—Check if the change achieved desired effect. If problems occur, restore from exported .reg file or System Restore. Additional considerations: Changes to HKLM affect all users and system operation—be especially careful here. Some changes require restart to take effect. Some security software monitors registry changes and might alert or block modifications. If troubleshooting guide seems suspicious (wants you to disable security features, add unknown entries, etc.), don't follow it blindly.
</details>

**6. A user complains about slow performance, but when you check Task Manager, nothing shows high usage—CPU is 20%, Memory is 50%, Disk is 15%. Task Manager doesn't reveal an obvious problem. What tool would you use next, and why?**

<details>
<summary>Show Answer</summary>
<strong>Use Resource Monitor (resmon) for more detailed analysis, or Performance Monitor (perfmon) to track metrics over time if the slowness is intermittent.</strong> Why Task Manager might not show the problem: Task Manager provides high-level overview. Some performance issues aren't visible there: specific process I/O patterns, memory hard faults, disk queue depths, network latency, or intermittent spikes between Task Manager's refresh intervals. Resource Monitor investigation: (1) **Open Resource Monitor**—resmon or from Task Manager's Performance tab. (2) **Check Memory tab → Hard Faults/sec**—High hard faults indicate memory pressure even if total memory usage looks okay. System is constantly accessing page file, which is slow. (3) **Check Disk tab → Response Time**—Slow response times indicate disk performance issues even if overall usage percentage is low. Failing drives often show high response times. (4) **Check Disk tab → Disk Queue Length**—Values consistently above 2 indicate I/O bottleneck. (5) **Check Network tab for unexpected connections**—Malware or misbehaving software might cause perceived slowness through network activity not visible in Task Manager's simplified view. Performance Monitor for intermittent issues: If slowness is sporadic (not happening when you check): (1) **Open Performance Monitor**—perfmon. (2) **Add relevant counters**—Processor % Processor Time, Memory Pages/sec, PhysicalDisk % Disk Time, etc. (3) **Let it run during normal use**—Graph will show spikes when slowness occurs. (4) **Alternatively, create Data Collector Set**—Logs data continuously. Review logs when user reports slowness to see what was happening at that moment. Other considerations: (1) **Startup time vs. running performance**—If boot is slow but running is fine, focus on startup programs in Task Manager's Startup tab. (2) **Network-dependent applications**—Slow internet or DNS issues can make computer feel slow even though local resources are fine. Test network speed separately. (3) **Visual perception**—Sometimes users perceive slowness that isn't measurable. A computer with SSD feels faster than one with HDD doing the same work due to responsiveness differences. The key insight: When obvious indicators look normal, dig deeper with more detailed tools. Resource Monitor shows what Task Manager summarizes, and Performance Monitor reveals patterns over time that point-in-time checks miss.
</details>

**7. You're troubleshooting a computer where a specific network-dependent application isn't working. You want to see what network connections the application is making. Which tool would you use and how?**

<details>
<summary>Show Answer</summary>
<strong>Use Resource Monitor's Network tab to see all network connections for the specific process, including addresses, ports, and connection states.</strong> Process: (1) **Open Resource Monitor**—resmon.exe or through Task Manager → Performance → Open Resource Monitor. (2) **Go to Network tab.** (3) **Find the application process**—In "Processes with Network Activity" section, check the box next to the problematic application's process name. This filters all network information to show only that application's connections. (4) **Examine "TCP Connections"**—Shows all active connections including: Remote Address (where it's connecting), Remote Port (which service), Local Port, and Status (Listening, Established, TimeWait, etc.). (5) **Examine "Network Activity"**—Shows bytes sent/received per connection. (6) **Look for issues:** - **No connections shown**—Application isn't making network connections. Check if service/process is actually running, firewall blocking, or application configuration error. - **Connections to unexpected addresses**—Could indicate misconfiguration or, if suspicious addresses, malware. - **Connections stuck in SYN_SENT**—Can't establish connection. Firewall blocking, server down, or network issue. - **Connections to localhost (127.0.0.1)**—Application might be trying to reach local service that isn't running. Additional network troubleshooting: (1) **Check "Listening Ports"**—If application should be accepting connections, verify it's actually listening on expected port. (2) **Command line alternative**—`netstat -ano` shows all connections with process IDs. Find application's PID in Task Manager → Details, then search netstat output. (3) **Firewall check**—Windows Defender Firewall → Allow an app through firewall. Verify application is allowed for appropriate network profiles (Domain/Private/Public). This approach reveals exactly what the application is doing on the network level, helping identify whether the problem is application configuration, network connectivity, firewall rules, or server-side issues.
</details>

**8. A computer has an unrecognized disk showing in Disk Management as "Unknown" and "Not Initialized." The disk is a 1TB drive that contained important data. What might have happened and what are the risks of initializing it?**

<details>
<summary>Show Answer</summary>
<strong>The disk's partition table is likely corrupted or unreadable. DO NOT initialize it if you need the existing data—initialization writes a new partition table, making data recovery more difficult.</strong> What "Unknown" and "Not Initialized" means: Windows can detect the physical disk but cannot read its partition table (MBR or GPT). This could happen due to: (1) Partition table corruption (file system errors, improper shutdown, malware), (2) Disk encryption (BitLocker on disk that wasn't properly unlocked), (3) Disk from different operating system using incompatible partitioning, (4) Physical disk damage affecting partition table area, (5) Cable/connection issues causing communication problems. Risks of initializing: Initializing writes a new, blank partition table to the disk. This doesn't immediately overwrite data, but it removes the map telling Windows where partitions and files are located. Data recovery becomes harder (though not impossible with professional tools). NEVER initialize if data recovery is needed. Safe investigation steps: (1) **Check connections**—reseat SATA/power cables, try different ports. Connection issues can cause detection problems. (2) **Try different computer**—if disk works elsewhere, issue might be with this computer's controller. (3) **Check BIOS**—ensure disk is detected at BIOS level with correct capacity. If BIOS shows wrong size or not at all, hardware problem. (4) **Use data recovery software first**—tools like TestDisk can scan for and recover lost partitions without initialization. Run TestDisk's "Analyse" function to search for partition structures. (5) **Professional recovery**—if data is critical, consult data recovery service before any further action. They have tools and clean room facilities for physically damaged disks. When it's safe to initialize: (1) Brand new disk (never had data), (2) You've already recovered all needed data, (3) You don't care about existing data. Then: Right-click → Initialize Disk → Choose MBR (for drives ≤2TB, older compatibility) or GPT (for drives >2TB, modern systems), → Then create new volume. The key principle: For unknown disks with potentially important data, prioritize data recovery before any writes to the disk. Initialization should be last resort when data isn't needed.
</details>

---

## Before Moving to Lesson 51

Make sure you're comfortable with:

- [ ] Event Viewer log locations (Application, Security, System) and event severity levels (Information, Warning, Error, Critical)
- [ ] Common Event IDs: 41 (unexpected restart), 6008 (unexpected shutdown), 7 (disk bad block), 1000 (application crash)
- [ ] Task Manager tabs and their purposes: Processes, Performance, Startup, Services
- [ ] How to identify resource bottlenecks using Task Manager (100% on CPU, Memory, or Disk)
- [ ] msconfig clean boot process: Hide Microsoft services → Disable all → Disable startup items → Restart
- [ ] Registry Editor structure (HKLM vs HKCU) and safety precautions (always export, create restore point)
- [ ] System Information (msinfo32) for comprehensive system inventory
- [ ] Resource Monitor for detailed per-process resource usage
- [ ] Performance Monitor for tracking metrics over time
- [ ] Disk Management for partition operations and disk status interpretation

**Study Strategy:**
Practice using each tool on your own computer (or test VM). Open Event Viewer and find recent errors—what do they mean? Open Resource Monitor during normal use—observe patterns. Make test registry changes (create test key, modify, export, delete, restore from export) to build comfort with the interface while taking no risks. Hands-on experience makes these tools intuitive.

---

## Coming Up in Lesson 51: Troubleshooting Common PC Issues

You've learned the individual troubleshooting tools. Now we'll apply them to common real-world problems: connectivity issues, time synchronization problems, print spooler failures, profile corruption, USB problems, and more. You'll develop a toolkit of solutions for the problems you'll encounter most frequently as an IT professional.

---

*"Give me six hours to chop down a tree and I will spend the first four sharpening the axe." - Abraham Lincoln (and a good analogy for learning your troubleshooting tools before facing problems)*

---

# ✅ LESSON 50 COMPLETE!

**Progress:** 50 of 60 lessons complete (83.3%) 🎯

You've mastered the detective's toolkit—Event Viewer for reading the system's diary, Task Manager for real-time monitoring, msconfig for surgical isolation testing, Registry Editor for direct configuration access (carefully!), and the supporting cast of System Information, Resource Monitor, Performance Monitor, and Disk Management.

Remember: troubleshooting isn't about random clicking and hoping. It's about methodically gathering evidence, forming hypotheses, and testing them. These tools provide the evidence. Your methodology guides the investigation. Together, they transform mysterious computer problems into solvable puzzles.

Next: applying these tools to common PC issues. Time to solve real problems with your new toolkit.