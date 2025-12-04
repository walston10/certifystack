# Lab 49: Troubleshooting Windows OS Problems

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 3.1 - Given a scenario, troubleshoot common Windows OS problems

---

## Section 1: Concept Check (5 min)

1. What is Safe Mode, and when would you use it?

2. What is the difference between System Restore and Reset this PC?

3. A computer shows a blue screen with "CRITICAL_PROCESS_DIED." What category of problem does this indicate?

4. What is the Windows Recovery Environment (WinRE), and how do you access it?

5. A computer boots to a black screen with just a cursor. What troubleshooting steps would you try?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Boot Options Exploration

**Goal:** Understand Windows boot options.

**Step 1:** Access Advanced Startup Options

Settings → System → Recovery → Advanced startup → Restart now

**Document the options available:**

| Option | Purpose |
|--------|---------|
| Continue | |
| Troubleshoot | |
| Turn off your PC | |

**Under Troubleshoot → Advanced options:**

| Option | What It Does |
|--------|--------------|
| Startup Repair | |
| Startup Settings | |
| Command Prompt | |
| Uninstall Updates | |
| UEFI Firmware Settings | |
| System Restore | |

---

#### Activity B: Safe Mode Options

**Goal:** Understand Safe Mode variations.

**Access Startup Settings (from Advanced Startup):**

Troubleshoot → Advanced options → Startup Settings → Restart

| Key | Mode | What It Loads |
|-----|------|---------------|
| 4 | Safe Mode | |
| 5 | Safe Mode with Networking | |
| 6 | Safe Mode with Command Prompt | |

**When to use each:**

| Mode | Use Case |
|------|----------|
| Safe Mode | |
| Safe Mode with Networking | |
| Safe Mode with Command Prompt | |

**Alternative access methods:**

| Method | How To |
|--------|--------|
| From Settings | |
| From login screen | |
| Interrupt boot 3 times | |
| msconfig | |

---

#### Activity C: System Restore Exploration

**Goal:** Understand System Restore capabilities.

**Step 1:** Check System Restore status

Open System Properties: `sysdm.cpl` → System Protection tab

| Drive | Protection Status |
|-------|-------------------|
| C: | On / Off |
| Other drives | |

**Step 2:** View restore points

Click "System Restore..." (or create one to test)

| Restore Point | Date | Type |
|---------------|------|------|
| | | |
| | | |

**What System Restore affects:**

| Item | Restored? |
|------|-----------|
| System files | |
| Installed programs | |
| Windows updates | |
| Drivers | |
| Personal files | |
| Desktop documents | |

---

#### Activity D: Event Viewer Analysis

**Goal:** Find error information for troubleshooting.

**Step 1:** Open Event Viewer

Run: `eventvwr.msc`

**Navigate to Windows Logs:**

| Log | Purpose | Recent Errors? |
|-----|---------|----------------|
| Application | | |
| Security | | |
| System | | |

**Step 2:** Find a Warning or Error

In System log, find any Warning or Error:

| Property | Value |
|----------|-------|
| Level | |
| Date/Time | |
| Source | |
| Event ID | |
| Description | |

**Event levels:**

| Level | Meaning |
|-------|---------|
| Information | |
| Warning | |
| Error | |
| Critical | |

---

#### Activity E: Blue Screen Analysis

**Goal:** Understand BSOD troubleshooting.

**Common BSOD error codes:**

| Error Code | Likely Cause | First Steps |
|------------|--------------|-------------|
| CRITICAL_PROCESS_DIED | | |
| SYSTEM_SERVICE_EXCEPTION | | |
| IRQL_NOT_LESS_OR_EQUAL | | |
| PAGE_FAULT_IN_NONPAGED_AREA | | |
| KERNEL_SECURITY_CHECK_FAILURE | | |
| DRIVER_IRQL_NOT_LESS_OR_EQUAL | | |
| BAD_SYSTEM_CONFIG_INFO | | |
| INACCESSIBLE_BOOT_DEVICE | | |

**BSOD troubleshooting methodology:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |
| 5 | |

---

#### Activity F: System File Checker

**Goal:** Use SFC to check system file integrity.

**Open Command Prompt as Administrator**

Run System File Checker:
```cmd
sfc /scannow
```

| Result | Meaning |
|--------|---------|
| "did not find any integrity violations" | |
| "found corrupt files and successfully repaired them" | |
| "found corrupt files but was unable to fix" | |

**If SFC fails, run DISM first:**
```cmd
DISM /Online /Cleanup-Image /RestoreHealth
```

Then run SFC again.

**Document your results:**

| Command | Result |
|---------|--------|
| sfc /scannow | |

---

#### Activity G: Recovery Options Comparison

**Goal:** Understand when to use each recovery option.

**Complete the comparison:**

| Option | Data Kept? | Apps Kept? | Time | Use When |
|--------|------------|------------|------|----------|
| System Restore | | | | |
| Reset (Keep files) | | | | |
| Reset (Remove everything) | | | | |
| Fresh Start | | | | |
| Clean Install | | | | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A computer that was working yesterday now won't boot past the Windows logo. It just keeps restarting. What's your troubleshooting approach?

**Scenario 2:** After installing a new graphics driver, Windows boots to Safe Mode automatically. The user can't get to normal Windows. What happened and how do you fix it?

**Scenario 3:** A user reports their computer is extremely slow, taking 10 minutes to reach the desktop. Once loaded, everything works fine. What would you investigate?

**Scenario 4:** A computer shows "Your PC ran into a problem and needs to restart" every few hours. It happens randomly during use. How would you diagnose this intermittent BSOD?

---

## What You Learned Today

- ✅ Windows boot options and Advanced Startup
- ✅ Safe Mode variations and access methods
- ✅ System Restore capabilities
- ✅ Event Viewer for troubleshooting
- ✅ Blue screen error analysis
- ✅ System File Checker (SFC) and DISM
- ✅ Recovery options comparison

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║              WINDOWS TROUBLESHOOTING QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BOOT OPTIONS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Safe Mode               → Minimal drivers, troubleshoot issues           ║
║  Safe Mode + Networking  → Safe Mode with network access                  ║
║  Safe Mode + Cmd         → Command Prompt only                            ║
║  Startup Repair          → Fix boot problems automatically                ║
║  System Restore          → Revert to previous working state               ║
║  Command Prompt          → Manual repairs (sfc, bootrec, etc.)            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ACCESS RECOVERY                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Settings → Recovery → Advanced startup → Restart now                     ║
║  Hold Shift + Click Restart                                               ║
║  Interrupt boot 3 times (force recovery)                                  ║
║  Boot from installation media                                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY REPAIR COMMANDS                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  sfc /scannow           → Scan and repair system files                    ║
║  DISM /Online /Cleanup-Image /RestoreHealth → Repair Windows image        ║
║  chkdsk /f /r           → Check and repair disk errors                    ║
║  bootrec /fixmbr        → Repair Master Boot Record                       ║
║  bootrec /fixboot       → Repair boot sector                              ║
║  bootrec /rebuildbcd    → Rebuild boot configuration                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMMON BSOD CODES                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  CRITICAL_PROCESS_DIED       → System file or driver corruption           ║
║  IRQL_NOT_LESS_OR_EQUAL      → Driver accessing wrong memory              ║
║  DRIVER_IRQL_NOT_LESS...     → Bad driver                                 ║
║  PAGE_FAULT_IN_NONPAGED_AREA → Memory issue or driver problem             ║
║  INACCESSIBLE_BOOT_DEVICE    → Can't access boot drive                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  RECOVERY OPTIONS                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  System Restore  → Keeps files, reverts system changes                    ║
║  Reset (Keep)    → Keeps files, removes apps, reinstalls Windows          ║
║  Reset (Remove)  → Wipes everything, fresh Windows                        ║
║  Clean Install   → Complete reinstall from media                          ║
╚═══════════════════════════════════════════════════════════════════════════╝
```