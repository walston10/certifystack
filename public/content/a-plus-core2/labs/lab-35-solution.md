# Lab 35: Windows Command Line Tools - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Command Prompt vs PowerShell

| Aspect | Command Prompt | PowerShell |
|--------|----------------|------------|
| Origins | DOS legacy, Windows NT | Built on .NET Framework |
| Output | Text strings | Objects with properties |
| Scripting | Batch files (.bat, .cmd) | PowerShell scripts (.ps1) |
| Power | Basic commands | Full automation, remote management |
| Syntax | command /switch | Verb-Noun cmdlets |

**When to use Command Prompt:**
- Quick, simple tasks (ping, ipconfig)
- Running legacy batch files
- User familiarity/comfort

**When to use PowerShell:**
- Complex automation tasks
- Managing Active Directory
- Remote administration
- Working with data (filtering, sorting, exporting)
- Any task requiring object manipulation

---

### Question 2: Repair System Files

**Command:** `sfc /scannow`

**Full process:**
1. Open Command Prompt as Administrator
2. Run: `sfc /scannow`
3. Wait for completion (10-20 minutes)
4. If issues found but not repaired, run:
   ```
   DISM /Online /Cleanup-Image /RestoreHealth
   sfc /scannow
   ```

---

### Question 3: ipconfig /flushdns

**What it does:** Clears the local DNS resolver cache.

**When to use:**
- After changing DNS server settings
- When websites aren't resolving correctly
- After DNS record changes on a server
- When getting "DNS_PROBE" errors
- After malware removal (may have poisoned DNS cache)

**What happens:**
- All cached DNS name-to-IP mappings are deleted
- Next DNS lookup will query DNS server fresh
- Can resolve issues where old/incorrect IP is cached

---

### Question 4: xcopy vs robocopy

| Feature | xcopy | robocopy |
|---------|-------|----------|
| Included since | DOS days | Windows Vista+ |
| Resume interrupted copies | No | Yes |
| Mirror directories | No | Yes (/mir) |
| Multi-threaded | No | Yes (/mt) |
| Retry failed copies | Limited | Yes (/r:N /w:N) |
| Preserve timestamps | /d for newer | Full control |
| Network resilience | Poor | Excellent |
| Logging | Basic | Comprehensive |

**Which for large jobs:** **robocopy**

**Example:** `robocopy source dest /e /r:3 /w:5 /mt:8 /log:copy.log`
- /e = include empty subdirectories
- /r:3 = retry 3 times on failure
- /w:5 = wait 5 seconds between retries
- /mt:8 = use 8 threads
- /log = create log file

---

### Question 5: Can Ping IP but Not Hostname

**What this tells you:** DNS resolution is failing, but network connectivity is working.

**Troubleshooting commands:**

1. **Check DNS configuration:**
   ```
   ipconfig /all
   ```
   Look at "DNS Servers" - are they correct?

2. **Test DNS resolution:**
   ```
   nslookup google.com
   ```
   Does it fail? What error?

3. **Test with different DNS:**
   ```
   nslookup google.com 8.8.8.8
   ```
   If this works, local DNS is the problem.

4. **Clear DNS cache:**
   ```
   ipconfig /flushdns
   ```

5. **Restart DNS client:**
   ```
   net stop dnscache
   net start dnscache
   ```

**Common causes:**
- DNS server is down
- Wrong DNS server configured
- Corrupted DNS cache
- Firewall blocking DNS (port 53)
- HOSTS file issues

---

## Section 2: Activities - Answers

### Activity A: Navigation and File Commands

**Directory commands:**

| Command | What It Does |
|---------|--------------|
| `md Folder1` | Creates directory named "Folder1" |
| `mkdir Folder2\SubFolder` | Creates nested directories |
| `dir` | Lists visible files and folders |
| `dir /a` | Lists ALL items including hidden |
| `rd Folder1` | Removes empty directory |
| `rmdir Folder2 /s /q` | Removes directory and contents (/s=subdirs, /q=quiet) |

**File operations:**

| Command | What It Does |
|---------|--------------|
| `type testfile.txt` | Displays file contents |
| `copy testfile.txt backup.txt` | Creates duplicate |
| `ren backup.txt renamed.txt` | Changes filename |
| `move renamed.txt Folder1\` | Moves file to folder |
| `del testfile.txt` | Deletes file |

---

### Activity B: Network Diagnostic Commands

**ipconfig variations:**

| Command | Information Shown |
|---------|-------------------|
| `ipconfig` | IP, subnet, gateway for each adapter |
| `ipconfig /all` | + MAC, DHCP server, DNS, lease times |
| `ipconfig /release` | Releases DHCP lease, loses IP |
| `ipconfig /renew` | Requests new IP from DHCP |
| `ipconfig /flushdns` | "Successfully flushed the DNS Resolver Cache" |
| `ipconfig /displaydns` | All cached DNS entries |

**netstat variations:**

| Command | Shows |
|---------|-------|
| `netstat` | Active connections only |
| `netstat -a` | All connections AND listening ports |
| `netstat -n` | Numeric addresses (no DNS resolution) |
| `netstat -b` | Which program created each connection |
| `netstat -r` | Routing table (same as `route print`) |

---

### Activity C: System Maintenance Commands

**sfc /scannow results:**

| Result | Meaning |
|--------|---------|
| "Windows Resource Protection did not find any integrity violations" | All system files OK |
| "...found corrupt files and successfully repaired them" | Issues fixed |
| "...found corrupt files but was unable to fix some of them" | Need DISM first |
| CBS.log location | `C:\Windows\Logs\CBS\CBS.log` |

**DISM commands:**

| Command | Purpose | Duration |
|---------|---------|----------|
| CheckHealth | Quick corruption check | Seconds |
| ScanHealth | Full scan for corruption | 5-15 minutes |
| RestoreHealth | Downloads and repairs from Windows Update | 15-30 minutes |

**chkdsk switches:**

| Switch | Meaning |
|--------|---------|
| /f | Fix errors on disk |
| /r | Locate bad sectors and recover readable data (includes /f) |
| /x | Force dismount first |
| /b | Re-evaluate bad clusters (NTFS only) |

---

### Activity D: Advanced File Operations

**xcopy switches:**

| Switch | Meaning |
|--------|---------|
| /s | Copy subdirectories (except empty ones) |
| /e | Copy subdirectories (including empty ones) |
| /y | Suppress overwrite prompts |
| /d | Copy only newer files |
| /h | Copy hidden and system files |
| /k | Copy attributes |

**robocopy switches:**

| Switch | Meaning |
|--------|---------|
| /mir | Mirror - exact copy including deletions |
| /e | Copy all subdirectories including empty |
| /r:N | Number of retries on failed copies |
| /w:N | Wait time between retries (seconds) |
| /mt:N | Multi-threaded copy (N threads, default 8) |
| /log:file | Log output to file |
| /copyall | Copy all file info (data, attributes, timestamps, security) |

**Comparison summary:**

| Feature | xcopy | robocopy |
|---------|-------|----------|
| Copy subdirectories | /s or /e | /e |
| Resume interrupted | ❌ | ✅ |
| Mirror | ❌ | /mir |
| Multi-threaded | ❌ | /mt |
| Retry on failure | ❌ | /r:N /w:N |
| Network resilient | Poor | Excellent |

---

### Activity E: Disk Management via diskpart

**Common diskpart commands:**

| Command | Purpose |
|---------|---------|
| list disk | Show all disks |
| list volume | Show all volumes |
| select disk N | Choose disk to work with |
| select volume N | Choose volume to work with |
| detail disk | Show selected disk info |
| detail volume | Show selected volume info |
| clean | **DANGEROUS** - Wipes partition table |
| create partition primary | Create new partition |
| format fs=ntfs quick | Quick format as NTFS |
| assign letter=X | Assign drive letter |
| active | Mark partition as active (bootable) |

---

### Activity F: PowerShell Basics

**Cmdlet structure:** Verb-Noun

Common verbs: Get, Set, New, Remove, Start, Stop, Restart

**Pipeline (|) examples:**

```powershell
# Get processes sorted by memory, show top 10
Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 10

# Get running services
Get-Service | Where-Object {$_.Status -eq "Running"}

# Count files in Windows folder
Get-ChildItem C:\Windows\*.exe | Measure-Object
```

**Useful cmdlets:**

| Cmdlet | Equivalent cmd | Purpose |
|--------|---------------|---------|
| Get-ChildItem | dir | List items |
| Copy-Item | copy | Copy files |
| Move-Item | move | Move files |
| Remove-Item | del | Delete files |
| Get-Content | type | Read file |
| Set-Location | cd | Change directory |
| Clear-Host | cls | Clear screen |

---

### Activity G: Group Policy and User Commands

**gpupdate:**

| Command | Behavior |
|---------|----------|
| `gpupdate` | Applies only changed policies |
| `gpupdate /force` | Reapplies ALL policies (even unchanged) |
| `gpupdate /boot` | Restarts computer for policies requiring it |
| `gpupdate /logoff` | Logs off for user policies requiring it |

**gpresult:**

| Switch | Output |
|--------|--------|
| /r | Summary view - applied GPOs |
| /v | Verbose - all details |
| /z | Super verbose |
| /h file.html | HTML report |
| /user:name | Results for specific user |

**net commands:**

| Command | Purpose |
|---------|---------|
| `net user` | List local users |
| `net user username *` | Reset password |
| `net user username /add` | Create user |
| `net user username /delete` | Delete user |
| `net localgroup` | List local groups |
| `net localgroup groupname username /add` | Add user to group |
| `net share` | List shared folders |
| `net use X: \\server\share` | Map network drive |
| `net use X: /delete` | Disconnect network drive |

---

## Section 3: Reflection - Answers

### Scenario 1: DNS_PROBE_FINISHED_NXDOMAIN

**Command sequence:**

```cmd
:: 1. Check current DNS configuration
ipconfig /all

:: 2. Test if DNS is working
nslookup google.com

:: 3. Try alternate DNS
nslookup google.com 8.8.8.8

:: 4. If alternate works, flush local cache
ipconfig /flushdns

:: 5. Restart DNS client service
net stop dnscache
net start dnscache

:: 6. If still failing, try releasing/renewing
ipconfig /release
ipconfig /renew

:: 7. Check hosts file for issues
notepad C:\Windows\System32\drivers\etc\hosts
```

**If alternate DNS works:** Change DNS settings in Network Adapter properties to 8.8.8.8 / 8.8.4.4

---

### Scenario 2: 500GB Network Copy with Unstable Connection

**Command:** robocopy

```cmd
robocopy \\source\share \\dest\share /e /z /r:5 /w:10 /mt:8 /log:C:\copylog.txt /tee
```

| Switch | Purpose |
|--------|---------|
| /e | Include subdirectories including empty |
| /z | Restartable mode (resume if interrupted) |
| /r:5 | Retry 5 times on failure |
| /w:10 | Wait 10 seconds between retries |
| /mt:8 | Use 8 threads for speed |
| /log: | Save log file |
| /tee | Output to console AND log file |

**Why robocopy:**
- Resume capability (/z) - critical for large network jobs
- Built-in retry logic
- Multi-threaded for speed
- Comprehensive logging
- Can run overnight unattended

---

### Scenario 3: Blue Screens and System File Repair

**Command order:**

```cmd
:: 1. First, run System File Checker
sfc /scannow

:: 2. If SFC reports unfixable issues, repair the Windows image
DISM /Online /Cleanup-Image /RestoreHealth

:: 3. Run SFC again after DISM
sfc /scannow

:: 4. Check disk for file system errors
chkdsk C: /f /r

:: 5. If disk check finds issues, schedule it
:: (Requires reboot for C: drive)
:: Answer Y when prompted

:: 6. After reboot, verify repairs
sfc /verifyonly
```

**Order rationale:**
1. sfc tries to repair with local copies
2. DISM downloads fresh files from Windows Update
3. sfc can now use those fresh files
4. chkdsk checks physical disk and file system
5. Reboot allows chkdsk to run on locked files

---

### Scenario 4: Compare Backup Contents

**Using robocopy in list mode:**

```cmd
robocopy "C:\Backup\Downloads" "%userprofile%\Downloads" /e /l /fp /ns /ndl /njh /njs > compare_results.txt
```

| Switch | Purpose |
|--------|---------|
| /l | List only (don't copy) |
| /fp | Full pathnames |
| /ns | No file sizes |
| /ndl | No directory list |
| /njh | No job header |
| /njs | No job summary |

**Output shows:**
- Files that exist in backup but not destination (would be copied)
- Files that are different (would be overwritten)
- Files missing from backup

**Alternative using PowerShell:**

```powershell
Compare-Object (Get-ChildItem "C:\Backup\Downloads" -Recurse) `
               (Get-ChildItem "$env:userprofile\Downloads" -Recurse) `
               -Property Name, Length
```

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