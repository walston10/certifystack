export const lesson35Flashcards = [
  {
    id: 1,
    front: "What are basic Command Prompt navigation commands?",
    back: "cd (change directory), cd\\ (root), cd.. (up one level), dir (list files), md or mkdir (make directory), rd or rmdir (remove directory). Case-insensitive. Use quotes for paths with spaces."
  },
  {
    id: 2,
    front: "What does the DIR command do and its common switches?",
    back: "Lists files and folders. dir /p (pause per page), dir /w (wide format), dir /s (include subdirectories), dir /a (show hidden/system files), dir *.txt (filter by extension)."
  },
  {
    id: 3,
    front: "What does the CD command do?",
    back: "Change directory. cd foldername (enter folder), cd.. (go up one level), cd\\ (go to root), cd \\path\\to\\folder (absolute path). Shows current directory if typed alone."
  },
  {
    id: 4,
    front: "What file manipulation commands should you know?",
    back: "copy (copy files), xcopy (copy with subdirectories), robocopy (robust copy, advanced), del (delete files), ren (rename), move (move files), attrib (change attributes)."
  },
  {
    id: 5,
    front: "What's the difference between COPY, XCOPY, and ROBOCOPY?",
    back: "COPY: basic file copy, one file at a time. XCOPY: copies directories/subdirectories, more options. ROBOCOPY: most powerful, resumes interrupted copies, mirrors directories, better for large jobs. Use robocopy for backups."
  },
  {
    id: 6,
    front: "What does IPCONFIG do and its important switches?",
    back: "Shows IP configuration. ipconfig (basic info), ipconfig /all (detailed info - MAC, DNS, DHCP), ipconfig /release (release DHCP IP), ipconfig /renew (get new DHCP IP), ipconfig /flushdns (clear DNS cache)."
  },
  {
    id: 7,
    front: "When would you use IPCONFIG /RELEASE and /RENEW?",
    back: "Troubleshooting DHCP issues. Release drops current IP address, renew requests new one from DHCP server. Use together (release then renew) to get fresh IP configuration. Fixes APIPA addresses (169.254.x.x)."
  },
  {
    id: 8,
    front: "What does IPCONFIG /FLUSHDNS do?",
    back: "Clears DNS resolver cache. Fixes issues where old/incorrect DNS entries cached. Use when: website moved servers, DNS changes made, getting wrong IP for domain name. Forces fresh DNS lookup."
  },
  {
    id: 9,
    front: "What does the PING command do?",
    back: "Tests connectivity using ICMP echo requests. ping [IP or hostname] sends 4 packets by default. Shows response time (latency) and packet loss. ping -t (continuous), ping -n [count] (specific number)."
  },
  {
    id: 10,
    front: "What does TRACERT (traceroute) do?",
    back: "Shows path packets take to destination. Lists every router hop with response times. Identifies where connection fails. Uses ICMP with incrementing TTL values. Useful for finding network bottlenecks or failures."
  },
  {
    id: 11,
    front: "What does NETSTAT show?",
    back: "Network statistics and active connections. netstat (active connections), netstat -a (all connections and listening ports), netstat -n (numerical addresses), netstat -b (show executable), netstat -ano (show PIDs)."
  },
  {
    id: 12,
    front: "What does NSLOOKUP do?",
    back: "DNS lookup tool - queries DNS servers. nslookup [domain] (find IP address), nslookup [IP] (reverse lookup), nslookup [domain] [DNS server] (query specific DNS server). Troubleshoots DNS resolution issues."
  },
  {
    id: 13,
    front: "What NET commands should you know?",
    back: "net user (manage users), net use (map drives), net view (view network computers), net share (manage shares). net user [username] /add (create user), net use * /delete (disconnect all drives)."
  },
  {
    id: 14,
    front: "How do you map a network drive with NET USE?",
    back: "net use [drive letter]: \\\\server\\share - Example: net use Z: \\\\fileserver\\documents. net use * /delete (disconnect all). net use [drive] /delete (disconnect specific). Persists after reboot unless /persistent:no."
  },
  {
    id: 15,
    front: "What does CHKDSK do and its switches?",
    back: "Check Disk - scans for file system errors and bad sectors. chkdsk [drive] (scan only), chkdsk /f (fix errors - requires exclusive access), chkdsk /r (locate bad sectors, implies /f). Schedule reboot for system drive."
  },
  {
    id: 16,
    front: "What does DISKPART do?",
    back: "Command-line disk partitioning tool. More powerful than Disk Management GUI. List disks, create/delete partitions, format, assign letters, convert MBR/GPT, clean drives. Run diskpart, then use commands (list disk, select disk, etc.)."
  },
  {
    id: 17,
    front: "What does FORMAT command do?",
    back: "Formats drives with specified file system. format [drive]: /fs:NTFS (NTFS format), format /fs:FAT32 (FAT32), format /q (quick format - doesn't check sectors). DESTRUCTIVE - erases all data. Use carefully."
  },
  {
    id: 18,
    front: "What does SFC (System File Checker) do?",
    back: "Scans and repairs Windows system files. sfc /scannow (scan and fix now - most common), requires admin. Replaces corrupted system files from cache. Run when Windows behaving strangely or after malware removal."
  },
  {
    id: 19,
    front: "What does DISM (Deployment Image Servicing and Management) do?",
    back: "Repairs Windows component store and image. dism /online /cleanup-image /restorehealth (repair). Run before SFC if SFC fails. Fixes deeper corruption than SFC. Requires internet connection to download files."
  },
  {
    id: 20,
    front: "What shutdown/restart commands should you know?",
    back: "shutdown /s (shutdown), shutdown /r (restart), shutdown /t [seconds] (delay), shutdown /a (abort), shutdown /r /t 0 (restart immediately). Can shutdown remote computers with /m \\\\computername."
  },
  {
    id: 21,
    front: "What does TASKLIST do?",
    back: "Lists all running processes with PID (Process ID). Similar to Task Manager Details tab but command-line. tasklist /svc (show services), tasklist /m (show DLLs). Use with TASKKILL to end processes."
  },
  {
    id: 22,
    front: "What does TASKKILL do?",
    back: "Terminates processes. taskkill /PID [number] (kill by PID), taskkill /IM [name.exe] (kill by name), taskkill /F (force). Example: taskkill /IM notepad.exe /F forces Notepad to close."
  },
  {
    id: 23,
    front: "What does GPUPDATE do?",
    back: "Forces Group Policy update. gpupdate /force (apply policies immediately without waiting). Used in domain environments after policy changes. Normally policies refresh every 90 minutes - this forces immediate refresh."
  },
  {
    id: 24,
    front: "What does GPRESULT do?",
    back: "Shows applied Group Policy settings. gpresult /r (summary), gpresult /h [filename.html] (detailed HTML report). Troubleshoot which policies applying to user/computer. Verify policies applied correctly."
  },
  {
    id: 25,
    front: "What is PowerShell and how does it differ from Command Prompt?",
    back: "Advanced command-line shell with scripting capabilities. Uses cmdlets (Verb-Noun format like Get-Process), object-oriented (not just text), more powerful than CMD. Can run CMD commands. Better for automation/administration."
  },
  {
    id: 26,
    front: "What PowerShell cmdlets should you know?",
    back: "Get-Command (list cmdlets), Get-Help (help for cmdlets), Get-Process (running processes), Get-Service (services), Set-ExecutionPolicy (script permissions), Get-EventLog (event logs). Verb-Noun naming convention."
  },
  {
    id: 27,
    front: "How do you get help in PowerShell?",
    back: "Get-Help [cmdlet] (basic help), Get-Help [cmdlet] -Full (detailed), Get-Help [cmdlet] -Examples (usage examples), Update-Help (download latest help files). Man and help are aliases for Get-Help."
  },
  {
    id: 28,
    front: "What does the ATTRIB command do?",
    back: "Changes file attributes. attrib +r (set read-only), attrib -r (remove read-only), attrib +h (hidden), attrib +s (system), attrib +a (archive). Combine: attrib +r +h filename (read-only and hidden)."
  },
  {
    id: 29,
    front: "How do you run Command Prompt as administrator?",
    back: "Search 'cmd' → right-click → Run as administrator. Or Windows+X → Command Prompt (Admin) / Windows Terminal (Admin). Needed for commands requiring elevated privileges (SFC, DISM, CHKDSK, system changes)."
  },
  {
    id: 30,
    front: "What wildcards can you use in commands?",
    back: "* (asterisk) = any characters. ? (question mark) = single character. Examples: dir *.txt (all .txt files), del file?.doc (file1.doc, fileA.doc, etc.), copy *.* (all files). Works with dir, del, copy, etc."
  }
];