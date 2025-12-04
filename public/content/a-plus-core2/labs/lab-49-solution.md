# Lab 49: Troubleshooting Windows OS Problems - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Safe Mode

**What it is:** Diagnostic startup mode that loads Windows with only essential drivers and services.

**When to use:**
- Windows won't boot normally
- Need to uninstall problematic driver/software
- Malware removal
- Troubleshooting crashes
- Graphics driver issues (low resolution in Safe Mode)

---

### Question 2: System Restore vs Reset

| Feature | System Restore | Reset this PC |
|---------|---------------|---------------|
| Keeps personal files | Yes | Yes (if selected) |
| Keeps installed apps | Yes | No |
| Reverts system changes | Yes (to restore point) | Fresh Windows install |
| Time to complete | Minutes | 30-60 minutes |
| Undo possible | Yes | No |
| Use case | Recent problems after change | Severe issues, slow system |

---

### Question 3: CRITICAL_PROCESS_DIED

**Category:** Critical system failure

**Indicates:**
- Essential Windows process crashed or was terminated
- System file corruption
- Driver conflict
- Malware affecting system processes
- Hardware failure (less common)

**First steps:** Safe Mode, SFC /scannow, driver rollback

---

### Question 4: Windows Recovery Environment (WinRE)

**What it is:** Recovery tools environment that runs outside of Windows, used to diagnose and repair startup problems.

**Access methods:**
1. Settings → Recovery → Advanced startup
2. Hold Shift while clicking Restart
3. Boot fails 3 times (automatic WinRE)
4. Boot from Windows installation media

**Tools included:** Startup Repair, Safe Mode, Command Prompt, System Restore, Reset

---

### Question 5: Black Screen with Cursor

**Troubleshooting steps:**

1. **Wait 2-3 minutes** - May be loading slowly
2. **Ctrl+Alt+Delete** - See if Task Manager opens
3. **Ctrl+Shift+Esc** - Direct Task Manager access
4. **If Task Manager opens:**
   - File → Run new task → explorer.exe
   - May indicate Explorer crash
5. **Safe Mode** - Boot to Safe Mode, check startup programs
6. **Disconnect external displays** - Graphics driver issue
7. **Check recent changes** - New software, driver, update?
8. **Last Known Good Configuration** or System Restore

---

## Section 2: Activities - Answers

### Activity A: Boot Options

**Top-level options:**

| Option | Purpose |
|--------|---------|
| Continue | Boot to Windows normally |
| Troubleshoot | Access recovery options |
| Turn off | Shut down |

**Troubleshoot → Advanced options:**

| Option | What It Does |
|--------|--------------|
| Startup Repair | Attempts automatic boot fix |
| Startup Settings | Access Safe Mode and other boot options |
| Command Prompt | Manual recovery commands |
| Uninstall Updates | Remove recent quality/feature updates |
| UEFI Firmware Settings | Access BIOS/UEFI settings |
| System Restore | Revert to previous restore point |

---

### Activity B: Safe Mode Options

| Key | Mode | What It Loads |
|-----|------|---------------|
| 4 | Safe Mode | Basic drivers, no network |
| 5 | Safe Mode + Networking | Basic drivers + network |
| 6 | Safe Mode + Command Prompt | No GUI, command line only |

**When to use:**

| Mode | Use Case |
|------|----------|
| Safe Mode | General troubleshooting, malware removal |
| + Networking | Download drivers/tools, remote support |
| + Command Prompt | Severe corruption, advanced repair |

**Access methods:**

| Method | How |
|--------|-----|
| Settings | Recovery → Advanced startup → Restart |
| Login screen | Hold Shift + Restart |
| Interrupt boot | Force off 3 times during boot |
| msconfig | Boot tab → Safe boot checkbox |

---

### Activity C: System Restore

**What's affected:**

| Item | Restored? |
|------|-----------|
| System files | Yes |
| Installed programs | Yes (reverted) |
| Windows updates | Yes (reverted) |
| Drivers | Yes (reverted) |
| Personal files | No (unchanged) |
| Documents | No (unchanged) |

**Note:** System Restore doesn't back up or restore personal files.

---

### Activity D: Event Viewer

**Log purposes:**

| Log | Purpose |
|-----|---------|
| Application | App crashes, errors, warnings |
| Security | Login attempts, audit events |
| System | Driver, service, Windows errors |

**Event levels:**

| Level | Meaning |
|-------|---------|
| Information | Normal operation, status |
| Warning | Potential issue, not critical |
| Error | Significant problem occurred |
| Critical | System failure, crash |

---

### Activity E: Blue Screen Analysis

| Error Code | Likely Cause | First Steps |
|------------|--------------|-------------|
| CRITICAL_PROCESS_DIED | System file corruption | SFC, Safe Mode |
| SYSTEM_SERVICE_EXCEPTION | Driver or system code error | Update/rollback drivers |
| IRQL_NOT_LESS_OR_EQUAL | Driver accessing wrong memory | Check recent driver installs |
| PAGE_FAULT_IN_NONPAGED_AREA | Memory or driver issue | Memory diagnostic |
| KERNEL_SECURITY_CHECK_FAILURE | Kernel corruption | SFC, DISM |
| DRIVER_IRQL_NOT_LESS_OR_EQUAL | Bad driver | Identify and update driver |
| BAD_SYSTEM_CONFIG_INFO | Registry or BCD corruption | Startup Repair |
| INACCESSIBLE_BOOT_DEVICE | Can't access boot drive | Check connections, Startup Repair |

**BSOD troubleshooting:**

| Step | Action |
|------|--------|
| 1 | Note error code and any file mentioned |
| 2 | Boot to Safe Mode if possible |
| 3 | Check for recent changes (drivers, updates) |
| 4 | Run SFC and DISM |
| 5 | Update or rollback suspect drivers |
| 6 | Check Event Viewer for details |
| 7 | Memory diagnostic if RAM suspected |

---

### Activity F: System File Checker

| Result | Meaning |
|--------|---------|
| "No integrity violations" | System files are intact |
| "Repaired successfully" | Found and fixed corruption |
| "Unable to fix" | Run DISM first, then SFC again |

**Order of operations:**
1. Run SFC /scannow
2. If fails, run DISM /Online /Cleanup-Image /RestoreHealth
3. Reboot
4. Run SFC /scannow again

---

### Activity G: Recovery Options

| Option | Data | Apps | Time | Use When |
|--------|------|------|------|----------|
| System Restore | Yes | Yes | 5-15 min | Recent changes caused issue |
| Reset (Keep) | Yes | No | 30-60 min | Many app issues, slow system |
| Reset (Remove) | No | No | 30-60 min | Selling/repurposing PC |
| Fresh Start | Yes | No | 30-60 min | Same as Reset Keep |
| Clean Install | No | No | 30-60 min | Severe issues, clean slate |

---

## Section 3: Reflection - Answers

### Scenario 1: Boot Loop

**Troubleshooting approach:**

1. **Interrupt boot 3 times** → Forces WinRE
2. **Try Startup Repair** first
3. **Check for bad update:**
   - Troubleshoot → Uninstall Updates
   - Try uninstalling recent quality update
4. **Safe Mode:**
   - If accessible, check what changed
   - Uninstall recent software/drivers
5. **System Restore:**
   - Restore to last known good point
6. **Command Prompt:**
   - sfc /scannow
   - chkdsk /f /r
   - bootrec /fixboot
7. **Reset (Keep files)** if all else fails

---

### Scenario 2: Boots to Safe Mode After Driver

**What happened:**
- Bad graphics driver installed
- Windows detected failure and booted to Safe Mode
- Or driver causes crash, Windows enters recovery

**Fix:**
1. In Safe Mode: Device Manager
2. Expand Display adapters
3. Right-click graphics card
4. Select "Roll Back Driver" (if available)
5. Or Uninstall device (check "Delete driver software")
6. Reboot normally
7. Windows will use basic driver
8. Install correct driver from manufacturer

---

### Scenario 3: 10-Minute Boot, Then Fine

**Investigate:**

| Item | How to Check |
|------|--------------|
| Startup programs | Task Manager → Startup tab (disable high-impact) |
| Services | msconfig → Services tab (check for slow ones) |
| Disk health | CrystalDiskInfo, chkdsk |
| Malware | Full antivirus scan |
| Windows Search indexing | May be rebuilding index |
| Updates pending | Check for pending updates |
| Disk space | Ensure 10-15% free |
| Event Viewer | Look for errors during boot time |

**Common causes:**
- Too many startup programs
- Failing hard drive
- Antivirus full scan at startup
- Network drive timeouts

---

### Scenario 4: Random Intermittent BSOD

**Diagnostic approach:**

1. **Check crash dumps:**
   - C:\Windows\Minidump\
   - Use WinDbg or BlueScreenView to analyze
   
2. **Look for patterns:**
   - Same error each time?
   - During specific activities?
   - After running certain time?

3. **Common causes for random BSODs:**
   - Failing RAM (run Windows Memory Diagnostic)
   - Overheating (check temps)
   - Driver conflicts (update all drivers)
   - Failing hard drive (check S.M.A.R.T.)

4. **Check Event Viewer:**
   - Look for Critical/Error around crash time
   
5. **Recent changes:**
   - New hardware?
   - Driver updates?
   - Windows updates?

6. **Hardware tests:**
   - Memory Diagnostic (mdsched.exe)
   - Crystal DiskInfo for drive health

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║              WINDOWS TROUBLESHOOTING QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BOOT OPTIONS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Safe Mode               → Minimal drivers                                ║
║  Safe Mode + Networking  → + Network access                               ║
║  Startup Repair          → Auto-fix boot issues                           ║
║  System Restore          → Revert to earlier state                        ║
║  Uninstall Updates       → Remove bad updates                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  sfc /scannow                         → Repair system files               ║
║  DISM /Online /Cleanup-Image /RestoreHealth → Fix Windows image          ║
║  chkdsk /f /r                         → Repair disk errors                ║
║  bootrec /fixmbr /fixboot /rebuildbcd → Fix boot issues                   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  RECOVERY ORDER: Startup Repair → System Restore → Reset → Clean Install  ║
╚═══════════════════════════════════════════════════════════════════════════╝
```