# Lab 50: PC Troubleshooting Tools - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Task Manager vs Resource Monitor

| Feature | Task Manager | Resource Monitor |
|---------|--------------|------------------|
| Detail level | Overview | Granular detail |
| Per-process disk I/O | Basic | Specific files accessed |
| Network connections | Total bandwidth | Individual TCP connections |
| Memory breakdown | Total per process | Working set, shareable, private |
| Associated handles | No | Yes |
| Best for | Quick overview | Deep analysis |

**Resource Monitor** is accessed from Task Manager → Performance → Open Resource Monitor

---

### Question 2: System Information (msinfo32)

**Unique information:**
- Complete hardware inventory
- BIOS version and mode (UEFI/Legacy)
- Secure Boot state
- Hardware conflicts and sharing
- Complete driver list with versions
- Environment variables
- Network configuration details
- Print jobs
- Running tasks with full paths
- Exportable report format

---

### Question 3: Reliability Monitor vs Event Viewer

| Use Case | Best Tool |
|----------|-----------|
| See stability trend over days/weeks | Reliability Monitor |
| Detailed technical error info | Event Viewer |
| Quick visual of problems | Reliability Monitor |
| Search by specific Event ID | Event Viewer |
| Identify when problems started | Reliability Monitor |
| Correlate with software installs | Reliability Monitor |

**Reliability Monitor** is better for seeing patterns and correlating problems with changes (installs, updates).

---

### Question 4: msconfig Unique Capabilities

**msconfig can:**
- Set Safe Boot for next restart (persistent until changed)
- Choose diagnostic or selective startup
- Enable boot log (ntbtlog.txt)
- Set boot timeout
- Access advanced boot options (processors, memory)
- Quick access to many system tools

**Task Manager cannot:**
- Change boot configuration
- Enable diagnostic startup mode
- Create boot logs
- Change boot timeout

---

### Question 5: Windows Memory Diagnostic

**Purpose:** Test RAM for errors

**What it does:**
- Runs tests on physical memory
- Detects failing memory modules
- Runs outside of Windows for accurate testing
- Requires reboot to run

**When to use:**
- Random BSODs (especially memory-related codes)
- Application crashes without clear cause
- System freezes
- After adding new RAM
- General stability issues

**Command:** `mdsched.exe`

---

## Section 2: Activities - Answers

### Activity A: Task Manager

**Processes columns:**

| Column | What It Shows |
|--------|---------------|
| CPU | Processor usage percentage |
| Memory | RAM usage (MB or percentage) |
| Disk | Read/write activity |
| Network | Bandwidth usage |
| GPU | Graphics processor usage |

**Tab purposes:**

| Tab | Purpose |
|-----|---------|
| Users | Logged-in users and their resource usage |
| Details | Full process list with PID, more columns |
| Services | Running services (quick start/stop) |

**Details vs Processes:** Details shows actual executable names, PIDs, more technical columns, all processes (not grouped).

---

### Activity B: Resource Monitor

**Memory breakdown:**

| Metric | Meaning |
|--------|---------|
| In Use | Currently used by processes |
| Available | Ready for immediate use |
| Hardware Reserved | Reserved by hardware (not usable) |
| Modified | Changed, waiting to be written to disk |
| Standby | Cached, quickly available |
| Free | Completely unused |

**Available = Standby + Free** (what Windows can use immediately)

---

### Activity C: System Information

**Key locations:**
- System Summary: OS, hardware overview
- Hardware Resources → Conflicts: IRQ/resource conflicts
- Components: Detailed hardware by category
- Software Environment: Startup, services, drivers

**Useful for:**
- Identifying hardware configuration
- Finding driver versions
- Checking BIOS mode (UEFI vs Legacy)
- Exporting reports for support

---

### Activity D: Event Viewer

**Important Event IDs:**

| Event ID | Source | Meaning |
|----------|--------|---------|
| 6005 | EventLog | Windows started |
| 6006 | EventLog | Windows shut down |
| 6008 | EventLog | Unexpected shutdown |
| 41 | Kernel-Power | Unexpected restart |
| 1001 | Windows Error Reporting | Application crash |
| 7 | Disk | Bad block on disk |

**Custom views help:** Filter thousands of events to show only what matters.

---

### Activity E: Reliability Monitor

**Event icons:**

| Icon | Meaning |
|------|---------|
| Red X | Application or Windows failure |
| Yellow ! | Warning (update, driver issue) |
| Blue i | Informational (successful install) |

**Stability Index:** 1-10 scale, 10 = most stable

**Useful for:**
- Correlating problems with software changes
- Identifying when stability decreased
- Quick view of recent failures

---

### Activity F: System Configuration (msconfig)

**Startup selections:**

| Option | Description |
|--------|-------------|
| Normal | Load all drivers and services |
| Diagnostic | Minimal drivers/services (like Safe Mode) |
| Selective | Choose what to load |

**Boot options:**

| Option | Purpose |
|--------|---------|
| Safe boot (Minimal) | Minimal Safe Mode |
| Safe boot (Network) | Safe Mode with network |
| No GUI boot | Hide Windows logo during boot |
| Boot log | Create ntbtlog.txt |
| Timeout | Seconds before default OS loads |

**"Hide all Microsoft services":** Shows only third-party services, making it easier to identify problematic non-Microsoft services.

---

### Activity G: Performance Monitor

**Counter interpretations:**

| Counter | High Value Indicates |
|---------|---------------------|
| Pages/sec | Memory pressure, paging to disk |
| % Disk Time | Storage bottleneck |
| % Processor Time | CPU bottleneck |
| Available MBytes (low) | Need more RAM |

**Thresholds:**
- CPU > 80% sustained = bottleneck
- Disk > 80% sustained = bottleneck
- Available MBytes < 500 MB = memory pressure
- Pages/sec > 20 sustained = excessive paging

---

## Section 3: Reflection - Answers

### Scenario 1: 100% CPU, No Single High Process

**What's happening:**
- Many processes each using small amounts
- System or background processes distributed
- Possible cryptominer (may hide)
- Could be malware spawning many processes

**Investigation:**
1. **Resource Monitor → CPU tab:**
   - Sort by CPU, look at all processes
   - Check Average CPU column
   
2. **Task Manager → Details:**
   - Look for unfamiliar process names
   - Check user context (SYSTEM vs your user)
   
3. **Check for malware:**
   - Run full antivirus scan
   - Check for unusual process names
   
4. **Process Explorer (Sysinternals):**
   - See process tree (parent-child)
   - Identify hidden processes

---

### Scenario 2: Random 30-Second Freezes

**Diagnostic approach:**

1. **Resource Monitor:**
   - Leave open, watch during freeze
   - Is disk at 100%? Network spike?
   
2. **Event Viewer:**
   - Check for errors around freeze times
   - Look at System log for disk warnings
   
3. **Reliability Monitor:**
   - Any pattern to when freezes occur?
   
4. **Common causes:**
   - Disk I/O: Check disk health (CrystalDiskInfo)
   - Driver issues: Check for driver hangs in Event Viewer
   - Antivirus scanning
   - Windows Search indexing
   - Windows Update background activity

5. **Performance Monitor:**
   - Set up data collector for disk/CPU
   - Review after freeze occurs

---

### Scenario 3: App Crashes When Printing

**Tools and checks:**

1. **Event Viewer:**
   - Application log: Look for app crashes
   - System log: Print spooler errors?
   
2. **Reliability Monitor:**
   - Find crash events, look for pattern
   
3. **Print troubleshooting:**
   - Restart Print Spooler service
   - Try printing from another app
   - Try different printer
   
4. **Application logs:**
   - Check app's own log files if available
   
5. **Driver check:**
   - Update printer drivers
   - Device Manager → Printer status

6. **Test:**
   - Create new user profile, test there
   - Print to PDF (removes printer from equation)

---

### Scenario 4: Slower After Windows Update

**Identify if update is the cause:**

1. **Reliability Monitor:**
   - See when update installed
   - Compare stability before/after
   
2. **Event Viewer:**
   - System log: Errors after update date
   
3. **Check update history:**
   - Settings → Windows Update → Update history
   - Note what was installed

**Options:**

| Option | How |
|--------|-----|
| Uninstall update | Settings → Update history → Uninstall updates |
| System Restore | Revert to before update |
| Wait for fix | Some updates are patched quickly |
| Pause updates | Prevent reinstallation temporarily |

**Uninstall from recovery:**
Settings → Recovery → Advanced startup → Troubleshoot → Uninstall Updates

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 TROUBLESHOOTING TOOLS QUICK REFERENCE                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  TOOL              COMMAND           USE FOR                               ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Task Manager      Ctrl+Shift+Esc    Quick performance overview           ║
║  Resource Monitor  resmon            Detailed resource analysis           ║
║  System Info       msinfo32          Hardware/software inventory          ║
║  Event Viewer      eventvwr.msc      Error logs and history               ║
║  Reliability Mon   perfmon /rel      Stability timeline                   ║
║  msconfig          msconfig          Boot options, services               ║
║  Performance Mon   perfmon           Detailed counters                    ║
║  Memory Diag       mdsched.exe       Test RAM for errors                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMMON PROBLEMS → TOOLS                                                   ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Slow computer    → Task Manager, Resource Monitor                        ║
║  Crashes          → Event Viewer, Reliability Monitor                     ║
║  Freezes          → Resource Monitor (Disk tab), Event Viewer             ║
║  Memory issues    → Resource Monitor (Memory), mdsched.exe                ║
║  After update     → Reliability Monitor, Update history, uninstall        ║
║  Boot problems    → msconfig, Advanced Startup Options                    ║
╚═══════════════════════════════════════════════════════════════════════════╝
```