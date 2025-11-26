# Lesson 35: Windows Command Line Tools

**Estimated Time:** 30-35 minutes  
**Domain:** Operating Systems (Domain 1.0 - 31% of exam)  
**Exam Objectives Covered:** 1.4 - Given a scenario, use the appropriate Microsoft Windows 10 command-line tool

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Navigate the Windows file system using command-line tools
- Execute essential file management commands (copy, move, delete, rename)
- Perform network diagnostics using ipconfig, ping, tracert, and netstat
- Troubleshoot disk issues with chkdsk, diskpart, and format commands
- Repair Windows system files using sfc and dism
- Manage processes and services using command-line utilities
- Understand PowerShell basics and cmdlet structure
- Apply Group Policy updates and view results from the command line

---

## Video Resources

Before diving in, check out these excellent video tutorials:

1. **Professor Messer - "Windows Command Line Tools"** (CompTIA A+ 220-1102)  
   [https://www.professormesser.com](https://www.professormesser.com) - Comprehensive overview of essential commands

2. **PowerCert Animated Videos - "Command Prompt Basics"**  
   [https://www.youtube.com/c/PowerCertAnimatedVideos](https://www.youtube.com/c/PowerCertAnimatedVideos) - Visual guide to command-line fundamentals

3. **NetworkChuck - "You NEED to learn this! Command Line Tutorial"**  
   [https://www.youtube.com/c/NetworkChuck](https://www.youtube.com/c/NetworkChuck) - Practical, hands-on command-line skills

4. **Eli the Computer Guy - "Windows Command Line Tutorial"**  
   [https://www.youtube.com/user/elithecomputerguy](https://www.youtube.com/user/elithecomputerguy) - In-depth command-line training

---

## Introduction

It's 2:47 AM. You're on call, and your phone buzzes. A critical file server has stopped responding. Users can't access their files. The server room is 45 minutes away, but you need to fix this NOW.

You remote into the server, and your heart sinks—the graphical interface is frozen. Your mouse cursor won't move. Windows Explorer isn't responding. Every click does nothing.

But then you remember: **you don't need a mouse**. You press `Windows + R`, type `cmd`, and hit Enter. A black window appears with a blinking cursor. Your fingers start flying across the keyboard. Within minutes, you've identified the problem (a full disk), cleared temporary files, restarted the stuck service, and verified connectivity—all without touching the mouse once.

Welcome to the command line. It's not just a relic from the 1980s—it's your superpower as an IT professional. When graphical interfaces fail, when you need to automate repetitive tasks, when you're supporting a user over the phone who can't describe where to click, or when you need to work faster than any mouse can move, the command line is your secret weapon.

In this lesson, we'll transform you from someone who fears the black screen into someone who reaches for it first. The command line isn't complicated—it's just direct. No menus to navigate. No searching for the right button. Just you, the computer, and exactly what you want to accomplish.

Let's master the tools that separate support technicians from system administrators.

---

## The Command Line Mindset: Direct Conversation with Your Computer

Before we dive into specific commands, let's understand what the command line really is. When you use Windows Explorer to copy a file, you're asking Windows to copy the file through a translator—the graphical interface. You click "Copy," then "Paste," and Windows figures out what you want and executes the command.

The command line removes the middleman. You're speaking directly to Windows in its native language. Instead of clicking through menus, you type: `copy file.txt D:\backup\`. Windows immediately understands and acts.

Think of it like ordering at a restaurant. The GUI is like pointing at pictures on a menu and the waiter translating your gesture to the kitchen. The command line is walking into the kitchen and telling the chef exactly what you want: "Pan-seared salmon, medium, with roasted asparagus, hold the butter."

### Opening the Command Prompt

There are multiple ways to summon your command-line interface:

**Method 1: Run Dialog** - Press `Windows + R`, type `cmd`, and press Enter. Fast and universal across all Windows versions.

**Method 2: Search** - Click the Start menu, type "cmd" or "Command Prompt," and press Enter.

**Method 3: File Explorer** - Navigate to any folder, click in the address bar, type `cmd`, and press Enter. The command prompt opens already positioned in that folder—incredibly useful.

**Method 4: Power User Menu** - Right-click the Start button (or press `Windows + X`) and select "Command Prompt" or "Windows PowerShell."

🎯 **Exam Tip:** Know multiple ways to open the command prompt. The A+ exam loves asking about alternative methods for accomplishing tasks.

### Administrator vs. Standard Command Prompt

Here's something crucial: some commands require administrative privileges. When you see "Access is denied" or a command fails mysteriously, you probably need to run Command Prompt as administrator.

Right-click "Command Prompt" and select "Run as administrator." The window title will show "Administrator: Command Prompt," and you'll notice the default starting location changes from `C:\Users\YourName` to `C:\Windows\System32`.

**Rule of thumb:** Network diagnostics and file operations? Standard prompt. System repairs, disk management, service control? Administrator required.

---

## Navigation Commands: Finding Your Way Around

Imagine you're in a massive library with thousands of rooms. Each room contains shelves (folders) filled with books (files). The command prompt is your current location in this library, and you need to know how to move around.

### Where Am I? The Current Directory

When you open a command prompt, you see something like:

```
C:\Users\YourName>
```

This is your **prompt**. It tells you your current location. The `>` symbol is waiting for your command. Everything in Windows is organized in a tree structure starting at the root drive (usually `C:\`).

### cd (Change Directory): Moving Between Folders

The `cd` command is your teleportation device. It moves you from one folder to another.

**Go to a specific folder:**
```
cd C:\Users\Public\Documents
```

**Go up one level (to the parent folder):**
```
cd ..
```

If you're in `C:\Users\YourName\Documents`, typing `cd ..` takes you to `C:\Users\YourName`.

**Go up two levels:**
```
cd ..\..
```

**Go to the root of the current drive:**
```
cd \
```

**Switch drives entirely:**
```
D:
```

Note that `cd D:\` doesn't switch your working drive—it only changes the current directory *on* drive D. To actually switch to drive D, just type the drive letter with a colon.

💡 **Memory Trick:** Think of `..` as "parent folder" and `.` as "current folder." These work across most operating systems, including Linux and macOS.

### dir (Directory): Listing Files and Folders

Once you're in a folder, you want to see what's inside. The `dir` command is your x-ray vision.

**Basic listing:**
```
dir
```

This shows all files and folders in your current location, along with their sizes, dates, and times.

**Useful variations:**
```
dir /p          - Pause after each screen (useful for long lists)
dir /w          - Wide format (just names, multiple columns)
dir *.txt       - Show only .txt files
dir /s          - Search subdirectories too
dir /a:h        - Show hidden files
dir /o:s        - Order by size
dir /o:d        - Order by date
```

**Real-world scenario:** You're looking for a configuration file but don't remember its exact name. You know it's a `.conf` file somewhere in the folder structure:

```
dir *.conf /s
```

This searches the current folder and all subfolders for any file ending in `.conf`. Windows shows you every match with its full path.

### md (Make Directory): Creating Folders

Need to create a new folder? `md` (or `mkdir`) is your construction tool.

```
md NewFolder
md C:\Projects\Website\Images
```

The second example creates the entire path—even if `Projects` and `Website` don't exist yet, Windows creates them all in one go.

### rd (Remove Directory): Deleting Folders

To delete an empty folder:
```
rd OldFolder
```

To delete a folder and everything inside it:
```
rd /s FolderName
```

The `/s` flag means "remove all subdirectories and files." Windows will ask for confirmation unless you add `/q` for quiet mode:

```
rd /s /q TempFolder
```

⚠️ **Warning:** `rd /s /q` is dangerous. It permanently deletes without asking. Use with caution.

---

## File Management Commands: Your Digital Filing Cabinet

Now that you can navigate, let's manipulate files. These commands are faster than drag-and-drop, work remotely, and can be automated.

### copy: Duplicating Files

The `copy` command creates a duplicate of a file.

**Basic syntax:**
```
copy source destination
```

**Examples:**
```
copy report.docx D:\backup\
copy C:\Data\*.txt C:\Archive\
copy file.txt file_backup.txt
```

The first copies a specific file. The second copies all `.txt` files. The third creates a backup in the same folder with a new name.

**Common options:**
```
copy /y   - Don't ask for confirmation when overwriting
copy /v   - Verify that files are written correctly
```

### xcopy: Advanced Copying

`xcopy` is `copy` on steroids. It can copy entire directory trees, preserve attributes, and handle complex scenarios.

```
xcopy C:\Source D:\Destination /s /e /h /i
```

**Key flags:**
- `/s` - Copy subdirectories (except empty ones)
- `/e` - Copy subdirectories (including empty ones)
- `/h` - Copy hidden and system files
- `/i` - If destination doesn't exist, assume it's a folder
- `/y` - Don't prompt for overwrite confirmation

**Real-world scenario:** You're migrating user data to a new server. You need to copy 50GB of files including hidden system files and empty folders:

```
xcopy C:\Users\JohnDoe D:\Backup\JohnDoe /e /h /i /y
```

This copies everything, preserving structure and attributes, without asking 500 confirmation questions.

### robocopy: The Professional's Choice

`robocopy` (Robust File Copy) is the ultimate file-copying tool. It's what IT professionals use for serious data migration and backup tasks.

```
robocopy C:\Source D:\Destination /mir /r:3 /w:5
```

**Key flags:**
- `/mir` - Mirror the source to destination (deletes files in destination that don't exist in source)
- `/e` - Include subdirectories, including empty ones
- `/r:n` - Number of retries on failed copies
- `/w:n` - Wait time between retries (seconds)
- `/log:file.txt` - Log operations to a file
- `/mt:16` - Use multithreading (up to 128 threads)

**Why robocopy matters:** Unlike `copy` or `xcopy`, robocopy can resume interrupted copies, handle long paths (over 260 characters), preserve all file attributes and permissions, and copy files in use.

🎯 **Exam Tip:** Know the difference: `copy` for simple file duplication, `xcopy` for folder structures, `robocopy` for professional backup/migration tasks.

### move: Relocating Files

`move` cuts and pastes files (or renames them if source and destination are the same location).

```
move oldname.txt newname.txt
move C:\Temp\*.log C:\Archive\Logs\
```

### del (Delete): Removing Files

Delete files with `del` or `erase` (they're identical).

```
del filename.txt
del *.tmp
del /f /q C:\Temp\*.*
```

**Flags:**
- `/f` - Force delete read-only files
- `/q` - Quiet mode (no confirmation)
- `/s` - Delete from subdirectories too

⚠️ **Warning:** Deleted files don't go to Recycle Bin—they're immediately gone.

### ren (Rename): Changing File Names

```
ren oldname.txt newname.txt
ren *.txt *.bak
```

The second example renames all `.txt` files to `.bak` files—powerful for batch renaming.

### attrib: File Attributes

Windows files have hidden properties: Read-only, Hidden, System, Archive. The `attrib` command controls these.

```
attrib +h file.txt    - Make hidden
attrib -h file.txt    - Remove hidden
attrib +r file.txt    - Make read-only
attrib -r file.txt    - Remove read-only
attrib +s +h file.txt - Make system and hidden
```

**Real-world scenario:** A virus has hidden all files on a USB drive and replaced them with malicious shortcuts. You need to unhide the real files:

```
attrib -h -s /s /d E:\*.*
```

This removes hidden and system attributes from all files and directories on drive E.

---

## Network Commands: Diagnosing Connectivity

Your computer says "No internet connection." Users report slow network speeds. A website isn't loading. These network commands are your diagnostic toolkit.

### ipconfig: Your Network Identity Card

`ipconfig` displays your network configuration—IP address, subnet mask, default gateway, and more.

```
ipconfig
```

Shows basic information for all network adapters.

```
ipconfig /all
```

Shows detailed information: MAC addresses, DHCP server, DNS servers, lease times—everything.

**Common troubleshooting commands:**

```
ipconfig /release    - Release your current IP address
ipconfig /renew      - Request a new IP address from DHCP
ipconfig /flushdns   - Clear the DNS resolver cache
ipconfig /registerdns - Register DNS records for this computer
ipconfig /displaydns - Show cached DNS records
```

**Troubleshooting scenario:** A user can't access network resources after moving to a different office. You suspect they have an old IP configuration:

```
ipconfig /release
ipconfig /renew
```

This forces the computer to get fresh network settings from the DHCP server in the new location.

💡 **Memory Trick:** Having network issues? "Release, renew, flush" is your go-to routine: release IP, renew IP, flush DNS.

### ping: Is Anyone Home?

`ping` sends test packets to a destination and waits for a reply. It's your basic connectivity test—like knocking on a door to see if anyone answers.

```
ping google.com
ping 8.8.8.8
ping 192.168.1.1
```

**Reading ping results:**

```
Reply from 8.8.8.8: bytes=32 time=15ms TTL=117
```

- **Reply** - Success! The destination responded
- **Time** - How long the round trip took (latency)
- **TTL** - Time To Live (hops remaining before packet expires)

**Common responses:**
- **"Request timed out"** - No response (firewall blocking, device down, or no route)
- **"Destination host unreachable"** - Your router can't find a path to that address
- **"Ping request could not find host"** - DNS can't resolve the name

**Useful flags:**
```
ping -t google.com    - Continuous ping (Ctrl+C to stop)
ping -n 100 8.8.8.8   - Send exactly 100 packets
ping -l 1500 8.8.8.8  - Send larger packets (1500 bytes)
```

**Systematic troubleshooting approach:**

1. `ping 127.0.0.1` - Test your own network stack (always works if TCP/IP is functioning)
2. `ping 192.168.1.1` - Test your default gateway (can you reach your router?)
3. `ping 8.8.8.8` - Test external connectivity by IP (can you reach the internet?)
4. `ping google.com` - Test DNS resolution (can you resolve names?)

This progression isolates exactly where connectivity breaks down.

### tracert (Trace Route): The Packet's Journey

While `ping` tells you IF you can reach a destination, `tracert` shows you the PATH your packets take to get there—every router hop along the way.

```
tracert google.com
```

**Sample output:**
```
  1    <1 ms    <1 ms    <1 ms  192.168.1.1
  2    15 ms    14 ms    15 ms  10.0.0.1
  3    20 ms    19 ms    21 ms  isp-gateway.example.com [203.0.113.1]
  4    25 ms    24 ms    26 ms  google-peer.example.net [142.250.4.5]
  5    26 ms    25 ms    26 ms  google.com [172.217.164.110]
```

Each line is a router (hop) your packet passes through. The three times show latency for three test packets.

**What tracert reveals:**
- Where packets are being delayed (high latency at a specific hop)
- Where connections fail (timeouts at a specific hop)
- The network path your ISP uses

**Troubleshooting scenario:** Users report slow access to a cloud application. You run tracert and see normal latency for the first 8 hops, then sudden 200ms delays at hop 9. This suggests the problem is at your ISP's connection to that cloud provider—information you can share with support.

### netstat: Active Connection Monitor

`netstat` shows all active network connections on your computer—what's talking to what, right now.

```
netstat
```

**Useful variations:**
```
netstat -a    - Show all connections and listening ports
netstat -n    - Show addresses as numbers (faster, no DNS lookups)
netstat -o    - Show process ID (PID) owning each connection
netstat -b    - Show executable creating each connection (requires admin)
netstat -r    - Show routing table
netstat -s    - Show statistics by protocol
```

**The power combo:**
```
netstat -ano
```

Shows all connections with addresses as numbers and process IDs. You can then use Task Manager or `tasklist` to identify which program is making each connection.

**Troubleshooting scenario:** Your computer is slow, and you suspect malware is communicating with the internet. Run `netstat -ano | findstr ESTABLISHED` to see active connections, then cross-reference suspicious IPs with threat databases.

### nslookup: DNS Detective

`nslookup` queries DNS servers to resolve names to IP addresses (and vice versa).

**Basic lookup:**
```
nslookup google.com
```

**Reverse lookup (IP to name):**
```
nslookup 8.8.8.8
```

**Query specific DNS server:**
```
nslookup google.com 8.8.8.8
```

This tests if Google's DNS server (8.8.8.8) can resolve google.com—useful for comparing results from different DNS servers.

**Troubleshooting scenario:** A user can't access internal company resources by name, but can access them by IP. You suspect DNS issues:

```
nslookup intranet.company.local
```

If this fails but `nslookup intranet.company.local 192.168.1.10` (your internal DNS server) succeeds, the user's computer isn't configured to use the correct DNS server.

### net: Network Resource Management

The `net` command is actually a suite of network management commands. Here are the most useful:

**Manage mapped drives:**
```
net use            - Show all mapped network drives
net use Z: \\server\share - Map drive Z to a network share
net use Z: /delete - Disconnect mapped drive
```

**Manage users (local computer):**
```
net user           - List all user accounts
net user JohnDoe   - Show details for user JohnDoe
net user JohnDoe * - Change JohnDoe's password (prompts for new password)
net user JohnDoe Pa$$w0rd /add - Create new user account
```

**View network computers:**
```
net view           - List computers in your workgroup
net view \\servername - List shared resources on a specific computer
```

**Manage services:**
```
net start servicename  - Start a service
net stop servicename   - Stop a service
```

🎯 **Exam Tip:** The `net` command suite is huge. Focus on `net use` for drive mapping and `net user` for account management—these are the most commonly tested.

---

## Disk Commands: Storage Management and Repair

When hard drives misbehave, these commands are your rescue tools. They check health, repair errors, format drives, and manage partitions.

### chkdsk (Check Disk): The Disk Doctor

`chkdsk` scans your hard drive for errors and attempts repairs. It's like running diagnostics on your car's engine.

```
chkdsk
```

Basic scan (read-only, no repairs).

```
chkdsk C: /f
```

Scan drive C and fix errors. Requires admin rights. If the drive is in use (like your system drive), Windows schedules the check for next reboot.

```
chkdsk C: /r
```

More thorough: `/r` includes `/f` plus it locates bad sectors and recovers readable data. This takes much longer but is more comprehensive.

```
chkdsk C: /f /r /x
```

Maximum repair: `/x` forces the volume to dismount first (closes all open files).

**When to use chkdsk:**
- Computer crashed and won't boot properly
- Files are corrupted or missing
- Getting "file is corrupt" errors
- Slow disk performance
- Before upgrading or migrating data

**Real-world scenario:** After a power outage, a server won't boot. You boot from recovery media and run:

```
chkdsk C: /f /r
```

After 30 minutes, chkdsk repairs file system errors and recovers data from bad sectors. The server boots successfully.

⚠️ **Warning:** `chkdsk /r` can take hours on large drives. Plan for downtime.

### diskpart: Advanced Disk Management

`diskpart` is the command-line version of Disk Management—but more powerful. It's the surgeon's scalpel for disk operations.

```
diskpart
```

This opens an interactive console with its own prompt: `DISKPART>`

**Essential diskpart commands:**

```
list disk          - Show all disks
list volume        - Show all volumes (partitions)
select disk 1      - Select disk 1 for operations
select volume C    - Select volume C for operations
clean              - Wipe all data from selected disk
create partition primary - Create a new primary partition
format fs=ntfs quick    - Quick format as NTFS
assign letter=E    - Assign drive letter E
extend             - Expand partition to fill available space
```

**Complete workflow to prepare a new disk:**

```
diskpart
list disk
select disk 2         (assuming the new disk is disk 2)
clean
create partition primary
format fs=ntfs quick label="Data Drive"
assign letter=E
exit
```

This sequence wipes the disk, creates a partition, formats it as NTFS, labels it "Data Drive," and assigns letter E.

⚠️ **CRITICAL WARNING:** `diskpart clean` permanently erases ALL data on the selected disk with no undo. Double-check you've selected the correct disk with `list disk` before running `clean`.

🎯 **Exam Tip:** Know the sequence: select → clean → create partition → format → assign. The exam may ask about preparing a new hard drive.

### format: Preparing Drives

`format` prepares a drive for use by creating a file system.

```
format D: /fs:ntfs /q
```

Quick format (`/q`) drive D as NTFS. Quick format only erases the file table—it doesn't actually wipe data, making it much faster.

```
format D: /fs:fat32 /v:BACKUP
```

Format as FAT32 (for USB drives needing compatibility) with volume label "BACKUP."

**Full format vs. Quick format:**
- **Quick format:** Erases file table only (takes seconds)
- **Full format:** Writes zeros to entire drive and checks for bad sectors (takes hours)

Use full format when: you suspect disk problems, you're selling/disposing of a drive, or you want maximum confidence in drive integrity.

### sfc (System File Checker): Windows Integrity Verification

`sfc` scans all protected Windows system files and replaces corrupted versions with correct copies from a backup store.

```
sfc /scannow
```

Scans all protected system files immediately. This is your first-line defense when Windows behaves strangely, programs crash, or features stop working.

**What sfc does:**
1. Scans every system file
2. Compares against known-good versions
3. Replaces corrupted files automatically
4. Logs all actions

Results are saved to: `C:\Windows\Logs\CBS\CBS.log`

**Troubleshooting scenario:** After a failed Windows Update, the Start menu won't open and Settings crashes. You run:

```
sfc /scannow
```

After 15 minutes, sfc reports: "Windows Resource Protection found corrupt files and successfully repaired them." After a reboot, everything works.

🎯 **Exam Tip:** For system corruption or missing DLL errors, always try `sfc /scannow` first before reinstalling Windows.

### dism (Deployment Image Servicing and Management): Deep System Repair

When `sfc` can't fix corruption because its backup store is damaged, `dism` repairs the repair tool itself.

```
dism /online /cleanup-image /restorehealth
```

This connects to Windows Update, downloads fresh system files, and repairs the component store that `sfc` relies on.

**The proper repair sequence:**
1. Run `dism /online /cleanup-image /restorehealth` (repairs the backup store)
2. Then run `sfc /scannow` (uses the now-healthy backup store to fix system files)

**Other useful dism commands:**

```
dism /online /cleanup-image /checkhealth    - Quick check (seconds)
dism /online /cleanup-image /scanhealth     - Deeper scan (minutes)
dism /cleanup-image /analyzecomponentstore  - Check disk space used by update files
```

**Real-world scenario:** A computer has mysterious crashes and errors. `sfc /scannow` fails with "Windows Resource Protection could not perform the requested operation." This means sfc's backup store is corrupted. You run:

```
dism /online /cleanup-image /restorehealth
sfc /scannow
```

After 30 minutes (dism is slow), both tools complete successfully and the crashes stop.

---

## System Commands: Process and Configuration Management

These commands control running programs, manage Windows services, and handle system configuration.

### shutdown: Remote and Scheduled Shutdowns

The `shutdown` command offers far more control than clicking the Start menu.

```
shutdown /s       - Shutdown
shutdown /r       - Restart
shutdown /l       - Log off
shutdown /h       - Hibernate
shutdown /a       - Abort a shutdown in progress
```

**Time delays and messages:**
```
shutdown /s /t 300 /c "System maintenance in 5 minutes. Save your work!"
```

Shuts down in 300 seconds (5 minutes) with a custom message.

**Shutdown remote computers:**
```
shutdown /r /m \\computername /t 60 /c "Mandatory updates. Please save work."
```

Restarts a remote computer named "computername" in 60 seconds with a warning message.

**Force close applications:**
```
shutdown /s /f /t 0
```

Shutdown immediately (`/t 0`) and force close all applications without saving (`/f`).

**Real-world scenario:** You need to restart 20 workstations for updates during the lunch hour:

```
shutdown /r /m \\computer01 /t 600 /c "Restart for updates at 1 PM"
shutdown /r /m \\computer02 /t 600 /c "Restart for updates at 1 PM"
```

Or better yet, write a script to loop through all computers.

### tasklist: Process Inspector

`tasklist` shows all running processes—like Task Manager's "Details" tab, but in the command line.

```
tasklist
```

Basic list showing process name, PID (Process ID), and memory usage.

**Useful filters:**
```
tasklist /fi "status eq running"           - Show only running tasks
tasklist /fi "memusage gt 100000"          - Show processes using >100 MB
tasklist /svc                               - Show services hosted by each process
tasklist /m                                 - Show DLL modules loaded by each process
```

**Find specific processes:**
```
tasklist | findstr chrome
```

Shows all Chrome-related processes.

### taskkill: Process Terminator

When a program freezes and won't close, `taskkill` forces it to terminate.

```
taskkill /im notepad.exe
```

Kills all instances of notepad.exe.

```
taskkill /pid 1234 /f
```

Force kills the process with PID 1234. The `/f` flag means "force"—no mercy, immediate termination.

**Troubleshooting scenario:** A user's computer is frozen. Task Manager won't open. You remote in via command line:

```
tasklist | findstr "not responding"
taskkill /im unresponsive_app.exe /f
```

The frozen application terminates immediately, and the desktop becomes responsive again.

💡 **Memory Trick:** Use `tasklist` to find, `taskkill` to terminate. First identify the PID or image name, then kill it.

### gpupdate: Force Group Policy Updates

In domain environments, Group Policies control computer and user settings. Changes don't apply instantly—computers check for updates periodically. `gpupdate` forces an immediate check.

```
gpupdate /force
```

Forces an immediate update of both computer and user policies.

```
gpupdate /target:computer
gpupdate /target:user
```

Update only computer policies or only user policies.

**Real-world scenario:** You've deployed a new security policy that disables USB drives. You need it to take effect immediately on all computers:

```
gpupdate /force
```

Instead of waiting 90-120 minutes for automatic refresh, the policy applies in seconds.

🎯 **Exam Tip:** After making Group Policy changes, always run `gpupdate /force` to test immediately rather than waiting for automatic refresh.

### gpresult: View Applied Policies

`gpresult` shows which Group Policies are currently applied to a computer or user—essential for troubleshooting policy issues.

```
gpresult /r
```

Summary report showing applied policies.

```
gpresult /r /scope:computer
gpresult /r /scope:user
```

Show only computer policies or only user policies.

**Detailed HTML report:**
```
gpresult /h report.html
```

Creates a detailed, formatted HTML report you can open in a browser—much easier to read than command-line output.

**Troubleshooting scenario:** A user reports they can't access a network share that their security group should allow. You check applied policies:

```
gpresult /r /scope:user
```

You discover their computer is in the wrong Organizational Unit (OU), so security policies aren't applying. You move the computer to the correct OU and run `gpupdate /force`.

---

## PowerShell Basics: The Next Evolution

PowerShell is the modern successor to Command Prompt. It's more powerful, more consistent, and uses an object-oriented approach. While this lesson focuses on cmd.exe commands (which the A+ exam emphasizes), understanding PowerShell basics is valuable.

### Opening PowerShell

- Press `Windows + X` and select "Windows PowerShell"
- Or type `powershell` in the Run dialog
- Or type `powershell` in Command Prompt to launch it from cmd

### Cmdlet Structure: Verb-Noun

PowerShell commands (called "cmdlets") follow a consistent pattern: **Verb-Noun**

- `Get-Process` (like tasklist)
- `Stop-Process` (like taskkill)
- `Get-Service`
- `Restart-Service`
- `Get-ChildItem` (like dir)
- `Copy-Item` (like copy)

This structure makes PowerShell predictable. If you want to do something with a service, you can guess: `Get-Service`, `Start-Service`, `Stop-Service`, `Restart-Service`.

### Essential PowerShell Commands

**Get help:**
```powershell
Get-Help Get-Process
Get-Help Get-Service -Examples
```

**List all available commands:**
```powershell
Get-Command
Get-Command -Noun Service    # Show all commands dealing with services
Get-Command -Verb Get        # Show all commands that "get" information
```

**Get system information:**
```powershell
Get-ComputerInfo
Get-EventLog -LogName System -Newest 20
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
```

The last command shows the top 5 processes by CPU usage—something that requires multiple steps in Command Prompt but is one elegant line in PowerShell.

**File operations:**
```powershell
Get-ChildItem C:\Windows\*.log -Recurse
Copy-Item C:\Source\*.txt C:\Destination\ -Recurse
Remove-Item C:\Temp\* -Recurse -Force
```

### Why PowerShell Matters

1. **More powerful:** Can do everything cmd.exe can do, plus much more
2. **Object-oriented:** Works with rich data objects, not just text
3. **Consistent syntax:** Verb-Noun structure makes it predictable
4. **Scripting capability:** Full programming language built in
5. **Remote management:** Built-in remote execution capabilities

🎯 **Exam Tip:** The A+ exam focuses on traditional cmd.exe commands, but knowing PowerShell exists and understanding cmdlet structure (Verb-Noun) can earn you points.

---

## Practical Command-Line Scenarios

Let's put everything together with real-world troubleshooting workflows.

### Scenario 1: "I Can't Access the Network"

**Problem:** User reports no network access. All websites fail to load.

**Your command-line diagnosis:**

```
Step 1: Check IP configuration
ipconfig /all

Look for:
- Valid IP address (not 169.254.x.x)
- Correct subnet mask
- Default gateway present
- DNS servers configured

Step 2: Test local connectivity
ping 127.0.0.1    (Test your own NIC)
ping 192.168.1.1  (Test default gateway)

Step 3: Test external connectivity
ping 8.8.8.8      (Google DNS by IP)

Step 4: Test DNS resolution
ping google.com   (Test DNS)
nslookup google.com

Step 5: If DHCP issue detected
ipconfig /release
ipconfig /renew
ipconfig /flushdns
```

This systematic approach isolates the problem in under 2 minutes.

### Scenario 2: "The Computer is Really Slow"

**Problem:** Everything takes forever to load. Programs hang.

**Your command-line diagnosis:**

```
Step 1: Check running processes
tasklist

Look for:
- Multiple instances of the same program
- Unknown/suspicious processes
- High memory usage

Step 2: Check disk health
chkdsk C: /f /r

Schedule for next reboot if needed.

Step 3: Check system file integrity
sfc /scannow

If corruption found, also run:
dism /online /cleanup-image /restorehealth

Step 4: Check for malware indicators
netstat -ano | findstr ESTABLISHED

Look for:
- Suspicious connections to foreign IPs
- Unknown processes with network activity
```

### Scenario 3: "I Accidentally Deleted Important Files"

**Problem:** User emptied Recycle Bin and needs files back.

**Your command-line approach:**

```
Step 1: STOP using the computer
(Every new file written might overwrite deleted data)

Step 2: Check for Volume Shadow Copies
vssadmin list shadows

Step 3: Restore from shadow copy if available
(Use Previous Versions in File Explorer)

Step 4: If no shadow copies, run file recovery tool
(Third-party tools like Recuva work from command line)

Step 5: For future protection
robocopy C:\ImportantFiles D:\Backup /mir /r:3 /w:5 /log:backup.log

Set up regular automated backups.
```

### Scenario 4: "Windows Won't Boot"

**Problem:** Computer shows "Operating System Not Found" or stops at a black screen.

**Your command-line recovery (from recovery environment):**

```
Step 1: Boot from Windows installation media
Select "Repair your computer" → Command Prompt

Step 2: Check disk for errors
chkdsk C: /f /r

Step 3: Repair boot configuration
bootrec /fixmbr
bootrec /fixboot
bootrec /rebuildbcd

Step 4: If system files corrupted
dism /image:C:\ /cleanup-image /restorehealth
sfc /scannow /offbootdir=C:\ /offwindir=C:\Windows

Step 5: Verify disk is visible
diskpart
list volume
(Ensure Windows partition is present and has a drive letter)
```

---

## Key Exam Tips

🎯 **Command Syntax Matters:** The exam tests exact syntax. Know when to use slashes (`/`) vs. dashes (`-`). Command Prompt uses `/`, PowerShell uses `-`.

🎯 **Case Doesn't Matter:** Commands are case-insensitive. `IPCONFIG`, `ipconfig`, and `IpConfig` all work the same.

🎯 **Administrator Rights:** Many commands require admin privileges: `chkdsk`, `diskpart`, `format`, `sfc`, `dism`, `shutdown` (remote), `netstat -b`, and `taskkill /f`.

🎯 **Common Command Confusions:**
- `cd` changes directory, `md` makes directory, `rd` removes directory
- `copy` copies files, `xcopy` copies trees, `robocopy` is professional-grade
- `del` deletes files, `rd` deletes folders
- `ipconfig /release` then `/renew` (always in that order)
- `sfc /scannow` before reinstalling Windows
- Run `dism` first if `sfc` fails

🎯 **Wildcards Work:** Use `*` (matches anything) and `?` (matches single character):
- `del *.tmp` - Delete all .tmp files
- `copy ?.txt D:\` - Copy all single-character .txt files

🎯 **Redirection and Piping:**
- `>` redirects output to file (overwrites): `ipconfig > network.txt`
- `>>` redirects output to file (appends): `ipconfig >> network.txt`
- `|` pipes output to another command: `tasklist | findstr chrome`

🎯 **Help is Built In:**
- `command /?` shows help for any command
- Example: `ipconfig /?` shows all ipconfig options

---

## Key Takeaways

✅ The command line provides direct, powerful control over Windows when GUIs fail or are inefficient

✅ Navigation commands (`cd`, `dir`, `md`, `rd`) let you move through the file system

✅ File commands (`copy`, `xcopy`, `robocopy`, `move`, `del`, `ren`, `attrib`) manipulate files and folders

✅ Network commands (`ipconfig`, `ping`, `tracert`, `netstat`, `nslookup`, `net`) diagnose connectivity issues

✅ Disk commands (`chkdsk`, `diskpart`, `format`) manage storage and repair errors

✅ System repair commands (`sfc`, `dism`) fix corrupted Windows installations

✅ Process commands (`tasklist`, `taskkill`) manage running programs

✅ Group Policy commands (`gpupdate`, `gpresult`) force policy updates and view applied policies

✅ PowerShell uses Verb-Noun cmdlet structure and is more powerful than Command Prompt

✅ Systematic troubleshooting with command-line tools isolates problems faster than GUI clicking

✅ Many commands require administrator privileges—right-click and "Run as administrator"

✅ Commands don't go to Recycle Bin—deleted items are permanent

✅ Help is always available with `command /?`

✅ The proper repair sequence: `dism` first, then `sfc /scannow`, then check for improvement

---

## Check Your Understanding

Test your knowledge with these scenario-based questions:

**1. A user reports they can't access any websites. You run `ipconfig` and see their IP address is 169.254.45.123. What does this indicate, and what commands should you run?**

<details>
<summary>Show Answer</summary>
<strong>The 169.254.x.x address is an APIPA (Automatic Private IP Addressing) address, indicating the computer couldn't reach a DHCP server.</strong> This means either the DHCP server is down, the network cable is unplugged, or there's a network connectivity issue. Run `ipconfig /release` followed by `ipconfig /renew` to attempt getting a proper IP address from DHCP. If this fails, verify physical connectivity (check cable, link lights) and confirm the DHCP server is running. The APIPA address allows local network communication but no internet access since there's no default gateway.
</details>

**2. You need to copy an entire folder structure including all subfolders and hidden files from C:\Projects to a backup drive. Which command is most appropriate?**

<details>
<summary>Show Answer</summary>
<strong>Use `xcopy C:\Projects D:\Backup\Projects /e /h /i` or `robocopy C:\Projects D:\Backup\Projects /e /h`.</strong> The `xcopy` command with `/e` includes all subdirectories (even empty ones), `/h` copies hidden files, and `/i` assumes the destination is a folder if it doesn't exist. The `robocopy` command is even better for backup operations as it can resume interrupted copies and preserve all file attributes. Regular `copy` command only works with individual files, not entire directory structures. For automated backups, `robocopy` with `/mir` creates an exact mirror of the source.
</details>

**3. After running `sfc /scannow`, you get the message "Windows Resource Protection found corrupt files but was unable to fix some of them." What should you do next?**

<details>
<summary>Show Answer</summary>
<strong>Run `dism /online /cleanup-image /restorehealth` first, then run `sfc /scannow` again.</strong> This error means the component store that SFC uses for replacements is itself corrupted. DISM repairs the component store by downloading fresh files from Windows Update, which then allows SFC to successfully replace corrupted system files. After DISM completes (which can take 15-30 minutes), running SFC again should successfully repair the files. This two-step process (DISM then SFC) is the standard approach for deep system corruption that SFC alone cannot fix.
</details>

**4. You want to see all active network connections along with which programs are making those connections. What command would you use?**

<details>
<summary>Show Answer</summary>
<strong>Use `netstat -ano` or `netstat -b` (administrator required).</strong> The `-a` flag shows all connections and listening ports, `-n` displays addresses numerically (faster than DNS resolution), and `-o` shows the Process ID (PID) for each connection. You can then match the PID to a program name using Task Manager or `tasklist`. Alternatively, `netstat -b` directly shows the executable name but requires administrator privileges. This is essential for identifying which programs are communicating over the network, particularly useful for detecting malware or unauthorized network activity.
</details>

**5. A user accidentally deleted 50GB of files from their Documents folder. They did NOT empty the Recycle Bin yet. What's your immediate advice, and what command-line tools might help if recovery is needed?**

<details>
<summary>Show Answer</summary>
<strong>First: Tell them to restore from Recycle Bin immediately before anything else.</strong> If they've already emptied it, tell them to STOP using the computer to prevent overwriting deleted data. Command-line options include checking for Volume Shadow Copies with `vssadmin list shadows` and restoring from Previous Versions if available. For future protection, set up automated backups using `robocopy C:\Users\Username\Documents D:\Backup\Documents /mir /r:3 /w:5` scheduled through Task Scheduler. The `/mir` flag creates an exact mirror, making it perfect for backup scenarios. Prevention is always better than recovery—regular automated backups are essential.
</details>

**6. You need to create a new partition on a completely blank hard drive, format it as NTFS, and assign it drive letter E. What sequence of diskpart commands accomplishes this?**

<details>
<summary>Show Answer</summary>
<strong>Sequence: `diskpart` → `list disk` → `select disk #` → `clean` → `create partition primary` → `format fs=ntfs quick` → `assign letter=E` → `exit`.</strong> This workflow first identifies which physical disk you're working with (`list disk`), selects it (`select disk`), wipes any existing data (`clean`), creates a primary partition, formats it with NTFS file system using a quick format, assigns the drive letter E, and exits diskpart. The `clean` command is critical—it removes all existing partitions and data. Always verify you've selected the correct disk with `list disk` before running `clean`, as this operation is immediate and irreversible. For the A+ exam, know this exact sequence for preparing new storage.
</details>

**7. Remote computers in your domain aren't receiving a new security policy you deployed 30 minutes ago. What command forces immediate Group Policy update?**

<details>
<summary>Show Answer</summary>
<strong>Run `gpupdate /force` on each computer, or remotely execute it using PsExec or PowerShell remoting.</strong> Group Policies normally refresh every 90-120 minutes, but `gpupdate /force` triggers an immediate refresh of both computer and user policies. For remote execution, you can use: `psexec \\computername gpupdate /force` or through PowerShell: `Invoke-Command -ComputerName computername -ScriptBlock {gpupdate /force}`. After running gpupdate, verify policy application with `gpresult /r` to confirm the new security policy is listed under applied policies. In enterprise environments, you might also push this command through Group Policy itself or configuration management tools.
</details>

**8. You can ping 8.8.8.8 successfully, but `ping google.com` fails with "Ping request could not find host google.com." What's the problem, and how do you fix it?**

<details>
<summary>Show Answer</summary>
<strong>This is a DNS resolution problem—your computer can reach the internet but can't convert names to IP addresses.</strong> First, check DNS configuration with `ipconfig /all` and verify DNS servers are listed. Try `nslookup google.com` to test DNS directly. Flush the DNS cache with `ipconfig /flushdns` to clear any corrupted entries. If problems persist, manually configure reliable DNS servers: right-click network adapter → Properties → IPv4 Properties → Use the following DNS servers → Enter 8.8.8.8 (Google) and 8.8.4.4 (backup). The ability to ping by IP but not by name is the classic symptom of DNS failure. Always test both IP-based and name-based connectivity to isolate whether issues are DNS or connectivity-related.
</details>

**9. A server's system drive is nearly full. What command-line tools can you use to identify what's consuming space and free up storage?**

<details>
<summary>Show Answer</summary>
<strong>Use `dir /s /a` to list all files recursively and identify large directories, or use `forfiles /s /m *.log /d -30 /c "cmd /c del @path"` to find and delete old log files.</strong> For built-in cleanup, run Disk Cleanup from command line: `cleanmgr /d C:`. Check Windows Update cache with `dism /cleanup-image /analyzecomponentstore` and clean it with `/startcomponentcleanup`. For detailed analysis, tools like `windirstat` (GUI) or `du` (Windows Sysinternals command-line) provide visual space usage breakdown. Common space hogs include: Windows Update cache (`C:\Windows\SoftwareDistribution`), temp files (`C:\Windows\Temp` and `%TEMP%`), old system restore points, and hibernation file. Always investigate before deleting to avoid removing critical files.
</details>

**10. A program is frozen and won't respond to Close or End Task in Task Manager. What command-line approach terminates it?**

<details>
<summary>Show Answer</summary>
<strong>First identify the process: `tasklist | findstr program_name`, note the PID, then force-kill it: `taskkill /pid #### /f`.</strong> The `/f` flag forces immediate termination without waiting for graceful shutdown—use this when the program is completely unresponsive. Alternatively, if you know the executable name: `taskkill /im program.exe /f`. The force flag is critical for frozen applications that won't respond to normal termination requests. In Task Manager, this is equivalent to "End Process" (which force-kills) rather than "End Task" (which requests graceful closure). For stubborn processes, you might need to terminate the parent process if it's spawning multiple child processes that immediately restart.
</details>

---

## Before Moving to Lesson 36

Make sure you can confidently:

✅ Navigate the file system using `cd`, `dir`, `md`, and `rd`  
✅ Copy, move, and delete files with appropriate tools (`copy`, `xcopy`, `robocopy`)  
✅ Diagnose network issues using `ipconfig`, `ping`, `tracert`, `netstat`, and `nslookup`  
✅ Check and repair disks with `chkdsk` and manage partitions with `diskpart`  
✅ Repair Windows system files using `sfc /scannow` and `dism`  
✅ Manage processes with `tasklist` and `taskkill`  
✅ Force Group Policy updates with `gpupdate /force` and view results with `gpresult`  
✅ Explain PowerShell's Verb-Noun cmdlet structure  
✅ Troubleshoot systematically using command-line tools in real-world scenarios  

**Study Strategy:**

1. **Practice, practice, practice:** Open Command Prompt right now and try each command. Type `command /?` to see all options.
2. **Flashcards:** Create cards for each command with syntax on one side, purpose on the other.
3. **Build troubleshooting workflows:** Write down your step-by-step approach for common problems (no network, slow computer, boot failure).
4. **Use them daily:** Replace GUI actions with command-line equivalents to build muscle memory.
5. **Professor Messer's videos:** Watch his command-line tools video and take notes on exam-specific tips.

The command line is not just for the exam—it's your primary tool as an IT professional. Master these commands, and you'll troubleshoot faster, automate better, and stand out from technicians who rely only on clicking.

---

## Coming Up in Lesson 36

**Lesson 36: Windows Networking**

Now that you can diagnose and repair systems from the command line, we'll dive into configuring Windows networking: setting IP addresses, configuring DNS and gateways, managing network profiles (Public vs. Private vs. Domain), setting up file and printer sharing, configuring VPN connections, and managing Windows Firewall rules. You'll learn how to make computers communicate on networks—both local LANs and across the internet. Get ready to become the network configuration expert your organization needs.

---

*"The command line is a conversation with your computer in its native language—direct, powerful, and without translation errors."*

---

# ✅ LESSON 35 COMPLETE!

**Progress:** 35 of 60 lessons complete (58.3%) 🎯

Excellent work! You've mastered the command-line tools that separate basic users from IT professionals. These commands are your toolkit for every troubleshooting scenario you'll encounter. Practice them daily, use them constantly, and they'll become second nature. The more comfortable you are in the command line, the faster and more effective you'll be at solving problems. Next up: configuring Windows networking to keep users connected and productive!