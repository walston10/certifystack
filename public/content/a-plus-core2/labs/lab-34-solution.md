# Lab 34: Windows Administrative Tools - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: MMC and Snap-ins

**Microsoft Management Console (MMC):**
A framework/container that hosts administrative tools. MMC by itself is an empty shell—you add "snap-ins" to give it functionality.

**Snap-in:** A component that adds specific administrative capability to MMC.

**Examples of snap-ins:**
1. **Device Manager** - Hardware management
2. **Disk Management** - Storage management
3. **Local Users and Groups** - Account management
4. **Certificates** - Digital certificate management
5. **Event Viewer** - Log viewing

You can create custom MMC consoles combining multiple snap-ins: `mmc` → File → Add/Remove Snap-in

---

### Question 2: Task Manager for Slow Computer

| Tab | What to Look For |
|-----|------------------|
| **Performance** | CPU constantly at 100%? RAM maxed out? Disk at 100% (common issue)? High network usage indicating malware? |
| **Processes** | Which process is consuming the most resources? Sort by CPU, Memory, Disk to find the culprit. |
| **Startup** | Too many startup programs? High-impact items enabled? This affects boot time and ongoing resource usage. |

**Additional diagnostic steps:**
- Details tab: Check for suspicious processes
- Services tab: Look for hung or crashing services
- Resource Monitor (from Performance tab): Deeper analysis

---

### Question 3: Event Viewer Logs

| Log | Contents | Examples |
|-----|----------|----------|
| **Application** | Events from installed applications | Software crashes, application errors, .NET errors |
| **Security** | Authentication and authorization events | Login successes/failures, file access auditing, privilege use |
| **System** | Windows core components | Driver failures, service start/stop, hardware errors, Windows Update |

**Key difference:** Security log requires proper auditing configured and shows WHO did WHAT. Application and System logs show WHAT happened to software and Windows.

---

### Question 4: Basic vs Dynamic Disks

| Feature | Basic Disk | Dynamic Disk |
|---------|------------|--------------|
| Partition types | Primary, Extended, Logical | Volumes (Simple, Spanned, Striped, Mirrored, RAID-5) |
| Maximum partitions | 4 primary (or 3 primary + 1 extended) | 2000 volumes |
| Multi-disk volumes | No | Yes (span across multiple physical disks) |
| Common usage | Home users, most workstations | Servers, advanced configurations |
| Conversion | Easy to convert to Dynamic | Risky to convert back to Basic |

**Which is more common for home users?** Basic disk. Dynamic disks are typically used in server environments requiring features like disk spanning or software RAID.

---

### Question 5: Automatic vs Automatic (Delayed Start)

| Startup Type | Behavior |
|--------------|----------|
| **Automatic** | Service starts immediately when Windows boots, before user login |
| **Automatic (Delayed Start)** | Service waits approximately 2 minutes after boot, starts after core services are running |

**Why use Delayed Start:**
- Reduces login time (less competition for resources during boot)
- Not critical for immediate system operation
- Allows core services to start first
- Common for services like Windows Update, Windows Search

---

## Section 2: Activities - Answers

### Activity A: Task Manager

**Task Manager column options (right-click header):**
- PID, Process name, Type, Status
- Publisher, Command line, CPU time
- GPU, GPU engine, Power usage
- Power usage trend

**Performance tab details:**

| Resource | What It Shows |
|----------|---------------|
| CPU | Usage %, speed, processes, threads, handles, up time |
| Memory | In use/Available, committed, cached, paged pool |
| Disk | Active time %, average response time, read/write speed |
| Network | Send/receive speed, adapter info, IP addresses |
| GPU | 3D/Video usage, memory, driver version |

**Startup recommendations to disable:**
- Third-party updaters (Adobe, Java updaters)
- Chat applications (unless needed immediately)
- Cloud sync apps (can start manually)
- Game launchers (Steam, Epic)
- Printer software (HP, Epson utilities)

**Keep enabled:** Antivirus, essential drivers, accessibility tools

---

### Activity B: Event Viewer

**Event types:**

| Icon/Level | Name | Meaning |
|------------|------|---------|
| Blue i | Information | Normal operation, informational messages |
| Yellow ! | Warning | Potential problem, non-critical issue |
| Red circle | Error | Significant problem, may need attention |
| Key icon | Success/Failure Audit | Security event (login, resource access) |

**Export formats available:**
- .evtx (Windows Event Log format) - native, complete
- .xml (XML format) - structured data
- .csv (Comma-separated) - for spreadsheet analysis
- .txt (Tab-delimited text)

**Default administrative shares:**

| Share Name | Path | Purpose |
|------------|------|---------|
| ADMIN$ | C:\Windows | Remote administration |
| C$ | C:\ | Root of C: drive (administrative access) |
| D$ (if exists) | D:\ | Root of D: drive |
| IPC$ | N/A | Inter-process communication, named pipes |
| print$ | C:\Windows\System32\spool\drivers | Printer driver distribution |

**$ at end of share name:** Hidden administrative share. Doesn't appear when browsing network but can be accessed directly by administrators using `\\computername\share$`

---

### Activity C: Disk Management

**Partition styles:**

| Style | Firmware | Max Disk Size | Max Partitions |
|-------|----------|---------------|----------------|
| MBR (Master Boot Record) | Legacy BIOS | 2 TB | 4 primary (or 3 primary + extended) |
| GPT (GUID Partition Table) | UEFI | 18 EB | 128 (Windows) |

**Special partitions:**

| Partition | Size | Purpose |
|-----------|------|---------|
| EFI System Partition (ESP) | 100-550 MB | Boot loader, UEFI boot files |
| System Reserved (MBR) | 100-500 MB | Boot Manager, BCD |
| Recovery | 450-1000 MB | Windows Recovery Environment |
| MSR (Microsoft Reserved) | 16-128 MB | Reserved for Windows (GPT only) |

**Right-click options explained:**

| Option | When Available | Purpose |
|--------|----------------|---------|
| Extend Volume | Unallocated space exists AFTER the volume | Make partition larger |
| Shrink Volume | Free space exists within volume | Make partition smaller |
| Change Drive Letter | Any volume except system | Reassign letter |
| Format | Not the system volume | Erase and prepare volume |
| Delete Volume | Not the system volume | Remove partition entirely |

---

### Activity D: Services Console

**Common service statuses:**

| Service | Typical Status | Typical Startup | Purpose |
|---------|----------------|-----------------|---------|
| Windows Update | Running or Stopped | Manual (triggered) | Downloads/installs updates |
| Print Spooler | Running | Automatic | Manages print jobs |
| Windows Firewall | Running | Automatic | Network protection |
| DHCP Client | Running | Automatic | Obtains IP address automatically |
| DNS Client | Running | Automatic | Caches DNS lookups |
| Remote Desktop | Stopped/Running | Manual or Disabled | Remote access |
| Windows Search | Running | Automatic (Delayed) | Indexes files for search |

**Startup types explained:**

| Type | When Service Starts |
|------|---------------------|
| Automatic | Immediately when Windows starts |
| Automatic (Delayed Start) | ~2 minutes after Windows starts |
| Manual | Only when triggered by another service/application |
| Disabled | Never (must be enabled first) |

**Print Spooler dependencies:**
- **Depends on:** HTTP Service, Remote Procedure Call (RPC)
- **Required by:** Fax, Internet Printing Client (if installed)

---

### Activity E: Computer Management

**Shared Folders content:**

| Section | Information Provided |
|---------|---------------------|
| Shares | All shared folders, paths, # of connections |
| Sessions | Users currently connected to shares |
| Open Files | Files currently open via network |

**Task Scheduler examples under Microsoft → Windows:**
1. Disk Cleanup (SilentCleanup)
2. Windows Defender scheduled scan
3. Software Protection Platform (license check)
4. Windows Error Reporting
5. Offline Files synchronization
6. SystemSoundsService

---

### Activity F: Performance Monitor

**Performance counters explained:**

| Counter | What It Measures | Healthy Range |
|---------|------------------|---------------|
| % Processor Time | CPU utilization | <80% sustained |
| Available MBytes | RAM not in use | >10% of total RAM |
| % Disk Time | Storage activity | <80% sustained |
| Bytes Total/sec | Network throughput | Depends on connection speed |

**Data Collector Sets:**

| Set | What It Monitors |
|-----|------------------|
| System Diagnostics | Comprehensive system health, hardware, drivers, and more |
| System Performance | CPU, memory, disk, network for performance analysis |

---

## Section 3: Reflection - Answers

### Scenario 1: Random Restarts

**Log to check:** System log

**What to search for:**
1. **Event ID 41** - "Kernel-Power" - Indicates unexpected shutdown (no graceful shutdown process)
2. **Event ID 1001** - "BugCheck" - Blue screen crash dump information
3. **Critical and Error events** around the restart time
4. **Warning events** from hardware-related sources (disk, WHEA, etc.)

**Common causes indicated by events:**
- Driver crashes (specific driver mentioned in BugCheck)
- Overheating (thermal events)
- Power issues (Kernel-Power without preceding events)
- Disk failures (WHEA, disk errors before restart)

---

### Scenario 2: Server at 95% RAM

**Next steps using administrative tools:**

1. **Task Manager → Processes**
   - Sort by Memory
   - Identify which process(es) are consuming most RAM
   - Is it expected? (Database, cache, etc.)

2. **Resource Monitor → Memory tab**
   - View "Working Set" for each process
   - Check "Hard Faults/sec" (indicates paging)
   - Identify memory leaks (growing usage over time)

3. **Performance Monitor**
   - Add counter: Memory → Pages/sec (high = swapping)
   - Add counter: Memory → Pool Nonpaged Bytes
   - Monitor over time to identify trends

4. **Event Viewer → System**
   - Look for "Resource-Exhaustion-Detector" events
   - Check for application crash events from memory issues

5. **Actions:**
   - If legitimate: Add more RAM or adjust application settings
   - If memory leak: Identify culprit, update/restart application
   - If malware: Investigate suspicious processes

---

### Scenario 3: Slow Login (5 Minutes)

**Diagnostic approach:**

1. **Task Manager → Startup tab**
   - Check impact levels (High = problem)
   - Count number of startup items
   - Disable non-essential items

2. **Event Viewer → Applications and Services → Microsoft → Windows → Diagnostics-Performance**
   - Look for Event IDs 100-199 (boot performance)
   - Identify slow-starting applications

3. **msconfig → Startup (redirects to Task Manager)**
   - Disable items one by one to identify culprit

4. **Services.msc**
   - Check if any services are hanging during startup
   - Look for services stuck on "Starting"

5. **Additional checks:**
   - Check disk health (Disk at 100% during boot)
   - Check for pending Windows Updates
   - Verify antivirus isn't doing full scan at startup
   - Check Group Policy processing (gpresult)

---

### Scenario 4: Print Spooler Crashing

**Troubleshooting steps:**

1. **Clear the print queue:**
   ```cmd
   net stop spooler
   del /Q /F /S %systemroot%\System32\spool\PRINTERS\*.*
   net start spooler
   ```

2. **Check Event Viewer:**
   - Application log for spooler errors
   - System log for driver issues
   - Note the error message and Event ID

3. **Update/reinstall printer drivers:**
   - Device Manager → Printers → Uninstall driver
   - Download fresh driver from manufacturer

4. **Set recovery options:**
   - Services.msc → Print Spooler → Properties → Recovery
   - First failure: Restart the Service
   - Second failure: Restart the Service
   - Subsequent: Restart the Computer

5. **Check dependencies:**
   - Ensure RPC service is running
   - Ensure HTTP service is running

6. **If persistent:**
   - Run `sfc /scannow` to check system files
   - Remove recently added printers
   - Check for corrupted printer profiles

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 ADMINISTRATIVE TOOLS QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  RUN COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  compmgmt.msc   → Computer Management     services.msc  → Services        ║
║  eventvwr.msc   → Event Viewer            diskmgmt.msc  → Disk Mgmt       ║
║  devmgmt.msc    → Device Manager          perfmon.msc   → Performance Mon ║
║  taskschd.msc   → Task Scheduler          lusrmgr.msc   → Local Users     ║
║  mmc            → Empty MMC Console       msconfig      → System Config   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  TASK MANAGER TABS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Processes   → Running apps and background processes (resource usage)     ║
║  Performance → CPU, RAM, Disk, Network, GPU graphs and details            ║
║  App history → Resource usage over time (Store apps primarily)            ║
║  Startup     → Programs that run at login (enable/disable here)           ║
║  Users       → Logged-in users and their resource usage                   ║
║  Details     → All processes with PIDs and detailed info                  ║
║  Services    → Quick view of Windows services (start/stop)                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  EVENT VIEWER LOGS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Application  → Software crashes, app errors                              ║
║  Security     → Login attempts, audit events (success/failure)            ║
║  System       → Driver failures, hardware issues, Windows events          ║
║  Setup        → Windows Update and installation events                    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Event Levels: Information (blue i) | Warning (yellow !) | Error (red)    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SERVICE STARTUP TYPES                                                     ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Automatic           → Starts with Windows                                ║
║  Automatic (Delayed) → Starts after core services (reduces boot time)    ║
║  Manual              → Starts only when triggered                         ║
║  Disabled            → Cannot start at all                                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DISK TYPES                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Basic Disk → Standard partitions, primary/extended (most common)         ║
║  Dynamic Disk → Spanned, striped, mirrored volumes (server scenarios)    ║
║  ─────────────────────────────────────────────────────────────────────────║
║  MBR → Legacy BIOS, 2TB max, 4 primary partitions                         ║
║  GPT → UEFI, no practical limit, 128 partitions                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```