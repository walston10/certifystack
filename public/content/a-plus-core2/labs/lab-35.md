# Lab 35: Windows Command Line Tools

**Tier:** 1  
**Time:** 40-50 minutes  
**Exam Objectives:** 1.4 - Given a scenario, use the appropriate Microsoft command-line tool

---

## Section 1: Concept Check (5 min)

Answer these questions based on your current knowledge:

1. What is the difference between Command Prompt and PowerShell? When would you use each?

2. You suspect a system file is corrupted. What command would you run to scan and repair Windows system files?

3. Explain what the following command does: `ipconfig /flushdns`

4. What's the difference between `xcopy` and `robocopy`? Which is more powerful for large copy jobs?

5. A user can ping 8.8.8.8 but cannot ping google.com. What does this tell you, and which commands would help troubleshoot?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Run these commands in Command Prompt or PowerShell.

#### Activity A: Navigation and File Commands

**Goal:** Master basic file system navigation.

Open Command Prompt (`cmd`)

**Step 1: Navigation**

| Command | Purpose | Result |
|---------|---------|--------|
| `cd %userprofile%` | Go to user folder | Current path now: |
| `cd Desktop` | Go to Desktop | Current path now: |
| `cd ..` | Go up one level | Current path now: |
| `cd \` | Go to root | Current path now: |
| `D:` (if you have D:) | Switch drives | Current drive now: |
| `C:` | Switch back | Current drive now: |

**Step 2: Create a test environment**

```cmd
cd %userprofile%
mkdir CommandLabTest
cd CommandLabTest
```

**Step 3: Directory commands**

| Command | What Happened |
|---------|---------------|
| `md Folder1` | |
| `mkdir Folder2\SubFolder` | |
| `dir` | |
| `dir /a` | |
| `rd Folder1` | |
| `rmdir Folder2 /s /q` | |

**Step 4: File operations**

```cmd
echo "Test content" > testfile.txt
```

| Command | What Happened |
|---------|---------------|
| `type testfile.txt` | |
| `copy testfile.txt backup.txt` | |
| `ren backup.txt renamed.txt` | |
| `move renamed.txt Folder1\` | |
| `del testfile.txt` | |

---

#### Activity B: Network Diagnostic Commands

**Goal:** Master essential networking commands.

**Step 1: ipconfig variations**

Run each command and document key output:

| Command | Key Information Shown |
|---------|----------------------|
| `ipconfig` | |
| `ipconfig /all` | |
| `ipconfig /release` (careful!) | |
| `ipconfig /renew` | |
| `ipconfig /flushdns` | |
| `ipconfig /displaydns` | |

**Note:** Don't run release if you're on Wi-Fi and need to stay connected!

**Step 2: Connectivity testing**

| Command | Result | Response Time |
|---------|--------|---------------|
| `ping 127.0.0.1` | | |
| `ping localhost` | | |
| `ping 8.8.8.8` | | |
| `ping google.com` | | |
| `ping -t 8.8.8.8` (Ctrl+C to stop) | | |
| `ping -n 10 8.8.8.8` | | |

**Step 3: Path tracing**

```cmd
tracert google.com
```

Document the first 5 hops:

| Hop # | IP Address | Hostname (if shown) | Avg Time |
|-------|------------|---------------------|----------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

**Step 4: DNS troubleshooting**

| Command | Output |
|---------|--------|
| `nslookup google.com` | Server: _____ Address: _____ |
| `nslookup google.com 8.8.8.8` | Using Google DNS - Result: |
| `nslookup -type=mx gmail.com` | Mail servers: |

**Step 5: Connection status**

| Command | Number of Results | What It Shows |
|---------|-------------------|---------------|
| `netstat` | | |
| `netstat -a` | | |
| `netstat -n` | | |
| `netstat -b` (Admin required) | | |
| `netstat -r` | | |

---

#### Activity C: System Maintenance Commands

**Goal:** Learn system repair and maintenance commands.

**Run Command Prompt as Administrator** (Right-click → Run as Administrator)

**Step 1: System File Checker**

```cmd
sfc /scannow
```

| Scan Result | Your Output |
|-------------|-------------|
| Status | |
| Duration (approximate) | |
| Files repaired? | |

**Step 2: DISM (if sfc finds issues)**

```cmd
DISM /Online /Cleanup-Image /CheckHealth
DISM /Online /Cleanup-Image /ScanHealth
```

| Command | Result |
|---------|--------|
| CheckHealth | |
| ScanHealth | |

**Note:** If issues found, you would run:
`DISM /Online /Cleanup-Image /RestoreHealth`

**Step 3: Disk checking**

```cmd
chkdsk C:
```

| Information | Value |
|-------------|-------|
| Total disk space | |
| Files checked | |
| Bad sectors found | |

**Note:** To fix errors, you would run `chkdsk C: /f /r` (requires reboot for C:)

**Step 4: Disk cleanup via command line**

```cmd
cleanmgr /d C:
```

What opens? _______________

---

#### Activity D: Advanced File Operations

**Goal:** Master xcopy and robocopy for file copying.

**Create test environment:**

```cmd
cd %userprofile%
mkdir CopySource
mkdir CopyDest
echo "File 1" > CopySource\file1.txt
echo "File 2" > CopySource\file2.txt
mkdir CopySource\SubDir
echo "Sub File" > CopySource\SubDir\subfile.txt
```

**Step 1: xcopy examples**

| Command | Result |
|---------|--------|
| `xcopy CopySource CopyDest` | Files copied: |
| `xcopy CopySource CopyDest /s` | Difference: |
| `xcopy CopySource CopyDest /e` | Difference from /s: |

**Step 2: robocopy examples**

| Command | Result |
|---------|--------|
| `robocopy CopySource CopyDest` | |
| `robocopy CopySource CopyDest /mir` | What does /mir do? |
| `robocopy CopySource CopyDest /e /r:2 /w:5` | What do /r and /w do? |

**Step 3: Compare xcopy vs robocopy**

| Feature | xcopy | robocopy |
|---------|-------|----------|
| Copy subdirectories | | |
| Resume interrupted copies | | |
| Mirror (delete extras at dest) | | |
| Multi-threaded copy | | |
| Retry on failure | | |
| Network resilient | | |

**Cleanup:**
```cmd
rd /s /q CopySource
rd /s /q CopyDest
```

---

#### Activity E: Disk Management via diskpart

**Goal:** Understand diskpart for disk operations.

**Run Command Prompt as Administrator**

```cmd
diskpart
```

**Within diskpart:**

| Command | Output/Information |
|---------|-------------------|
| `list disk` | |
| `list volume` | |
| `select disk 0` | |
| `detail disk` | |
| `select volume C` | |
| `detail volume` | |

**Exit diskpart:**
```cmd
exit
```

**⚠️ Warning:** Do NOT run clean, format, or delete commands on your system disk!

**Diskpart capabilities (knowledge only):**
- `clean` - Wipes disk partition table
- `create partition primary` - Creates partition
- `format fs=ntfs quick` - Formats volume
- `assign letter=X` - Assigns drive letter

---

#### Activity F: PowerShell Basics

**Goal:** Introduction to PowerShell cmdlets.

Open PowerShell (`powershell` or Windows PowerShell)

**Step 1: Basic cmdlets**

| Command | Output |
|---------|--------|
| `Get-Date` | |
| `Get-Location` | |
| `Get-ChildItem` | |
| `Get-Process` | |
| `Get-Service` | |

**Step 2: Getting help**

| Command | What It Shows |
|---------|---------------|
| `Get-Command *process*` | |
| `Get-Help Get-Process` | |
| `Get-Help Get-Process -Examples` | |

**Step 3: Filtering and piping**

| Command | Result |
|---------|--------|
| `Get-Process | Sort-Object CPU -Descending` | Top process by CPU: |
| `Get-Service | Where-Object Status -eq "Running"` | Running services count: |
| `Get-ChildItem C:\Windows\*.exe | Measure-Object` | Number of .exe files: |

**Step 4: System information**

| Command | Key Info |
|---------|----------|
| `Get-ComputerInfo | Select-Object WindowsProductName, OsArchitecture` | |
| `Get-NetAdapter` | |
| `Get-NetIPAddress` | |

---

#### Activity G: Group Policy and User Commands

**Goal:** Manage policies and users from command line.

**Run as Administrator**

**Step 1: Group Policy**

| Command | Result |
|---------|--------|
| `gpupdate` | What happened? |
| `gpupdate /force` | What's different? |
| `gpresult /r` | User settings from: |

**Step 2: User management (net commands)**

| Command | Output |
|---------|--------|
| `net user` | |
| `net user %username%` | |
| `net localgroup` | |
| `net localgroup Administrators` | |

**Step 3: Network shares**

| Command | Output |
|---------|--------|
| `net share` | |
| `net view` | |
| `net use` | |

---

## Section 3: Reflection (5 min)

Consider these real-world scenarios:

**Scenario 1:** A user reports "DNS_PROBE_FINISHED_NXDOMAIN" errors in their browser but can access sites by IP address. What sequence of commands would you run to diagnose and fix this?

**Scenario 2:** You need to copy 500GB of files from one server to another over a network that sometimes drops connections. Which command would you use and what options?

**Scenario 3:** A computer is blue-screening randomly. You suspect corrupted system files. What commands would you run in what order to diagnose and repair?

**Scenario 4:** A user accidentally deleted their Downloads folder. Before restoring from backup, you want to make sure the backup is complete. How would you compare the contents of the backup folder with what should be there?

---

## What You Learned Today

- ✅ Navigation commands: cd, dir, mkdir, rmdir
- ✅ File commands: copy, move, del, ren, type
- ✅ Network commands: ipconfig, ping, tracert, netstat, nslookup
- ✅ System repair: sfc /scannow, DISM, chkdsk
- ✅ Advanced copy: xcopy vs robocopy
- ✅ Disk management: diskpart basics
- ✅ PowerShell fundamentals and cmdlets
- ✅ Group Policy and user management commands

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    COMMAND LINE QUICK REFERENCE                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  NETWORK COMMANDS                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ipconfig                → View IP configuration                          ║
║  ipconfig /all           → Detailed config (MAC, DHCP, DNS)              ║
║  ipconfig /release       → Release DHCP lease                             ║
║  ipconfig /renew         → Renew DHCP lease                               ║
║  ipconfig /flushdns      → Clear DNS cache                                ║
║  ping <host>             → Test connectivity                              ║
║  tracert <host>          → Trace route path                               ║
║  nslookup <host>         → DNS lookup                                     ║
║  netstat -an             → All connections, numeric                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SYSTEM REPAIR                                                             ║
║  ─────────────────────────────────────────────────────────────────────────║
║  sfc /scannow                           → Scan/repair system files        ║
║  DISM /Online /Cleanup-Image /CheckHealth  → Quick health check          ║
║  DISM /Online /Cleanup-Image /ScanHealth   → Full scan                    ║
║  DISM /Online /Cleanup-Image /RestoreHealth → Repair image               ║
║  chkdsk C: /f /r                        → Check/repair disk (reboot)     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FILE OPERATIONS                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  cd <path>        → Change directory      md <name>      → Make directory ║
║  dir              → List contents         rd <name>      → Remove dir     ║
║  copy src dest    → Copy file             del <file>     → Delete file    ║
║  move src dest    → Move file             ren old new    → Rename file    ║
║  xcopy /s /e      → Extended copy         robocopy /mir  → Mirror copy    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  USER/POLICY COMMANDS                                                      ║
║  ─────────────────────────────────────────────────────────────────────────║
║  gpupdate /force  → Force Group Policy refresh                            ║
║  gpresult /r      → View applied policies                                 ║
║  net user         → List users           net user <name> → User details   ║
║  net localgroup   → List groups          net share       → List shares    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  POWERSHELL BASICS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Get-Command      → List available commands                               ║
║  Get-Help <cmd>   → Help for command                                      ║
║  Get-Process      → List processes       Get-Service    → List services   ║
║  Get-ChildItem    → List items (like dir)                                 ║
║  | Where-Object   → Filter results       | Sort-Object  → Sort results   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  XCOPY vs ROBOCOPY                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  xcopy: /s (subdirs) /e (empty dirs) /y (no prompt) /d (newer only)      ║
║  robocopy: /mir (mirror) /e (all subdirs) /r:N (retries) /mt:N (threads) ║
║  Robocopy is preferred for network copies and large jobs                  ║
╚═══════════════════════════════════════════════════════════════════════════╝
```