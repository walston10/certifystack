export const lesson60Flashcards = [
  {
    id: 1,
    front: "What is scripting and why use it in IT?",
    back: "Writing small programs (scripts) to automate tasks. Benefits: saves time, consistency (no human error), repeatable, documents process, scales to many systems. Common uses: user account creation, software deployment, backups, log analysis, system monitoring."
  },
  {
    id: 2,
    front: "What scripting languages should you know for A+?",
    back: "Batch files (.bat, .cmd - Windows), PowerShell (.ps1 - Windows), Shell scripts (.sh - Linux/Mac), Python (.py - cross-platform), JavaScript (.js - web/Node.js), VBScript (.vbs - legacy Windows). Choose based on platform and task."
  },
  {
    id: 3,
    front: "What is a batch file and when would you use it?",
    back: "Simple Windows script using CMD commands. Extension: .bat or .cmd. Use for: basic automation, simple tasks, legacy systems. Advantages: easy to learn, no installation needed, runs on any Windows. Disadvantages: limited functionality, not as powerful as PowerShell."
  },
  {
    id: 4,
    front: "What is PowerShell?",
    back: "Advanced Windows scripting/automation framework. Uses cmdlets (Verb-Noun format like Get-Process). Advantages: powerful, object-oriented, .NET access, remote management. File extension: .ps1. Modern Windows administration tool. More capable than batch files."
  },
  {
    id: 5,
    front: "What are shell scripts in Linux?",
    back: "Scripts written in bash or other Linux shells. Extension: .sh. Use for: system administration, automation, cron jobs. Start with shebang (#!/bin/bash). Similar to batch files but more powerful. Standard for Linux/Mac automation."
  },
  {
    id: 6,
    front: "What is Python and why is it popular for scripting?",
    back: "High-level, cross-platform programming language. Advantages: easy to learn, readable syntax, extensive libraries, works on Windows/Linux/Mac, great for automation, data processing, web scraping. Extension: .py. Popular for: automation, DevOps, system admin tasks."
  },
  {
    id: 7,
    front: "What is JavaScript used for in scripting?",
    back: "Originally web browser language, now used everywhere via Node.js. Use for: web automation, server-side tasks, API interactions, cross-platform scripts. Extension: .js. Advantage: familiar to web developers. JSON data handling excellent."
  },
  {
    id: 8,
    front: "What is VBScript and is it still used?",
    back: "Visual Basic Scripting - legacy Windows scripting language. Extension: .vbs. Deprecated, replaced by PowerShell. Still found in: older systems, logon scripts, legacy automation. Learning not recommended for new projects - use PowerShell instead."
  },
  {
    id: 9,
    front: "What are variables in scripting?",
    back: "Named storage for data that can change. Examples: username='John', count=5, filepath='C:\\temp'. Use for: storing user input, calculations, file names, counters. Declaration varies by language. Makes scripts flexible and reusable."
  },
  {
    id: 10,
    front: "What are loops in scripting?",
    back: "Repeat actions multiple times. Types: for loop (specific number of times), while loop (while condition true), foreach loop (for each item in collection). Use for: processing multiple files, creating many users, repetitive tasks. Saves writing same code repeatedly."
  },
  {
    id: 11,
    front: "What are conditional statements (if/then/else)?",
    back: "Execute code based on conditions. Format: if (condition) then (action) else (alternative action). Examples: if file exists then copy, if user not found then create. Makes scripts intelligent - different actions for different situations."
  },
  {
    id: 12,
    front: "What are comments in scripts and why use them?",
    back: "Notes explaining code, ignored during execution. Syntax varies: # (Python, bash), REM or :: (batch), // (JavaScript). Use for: explaining purpose, documenting changes, notes to future readers. Critical for maintaining scripts. Always comment complex code."
  },
  {
    id: 13,
    front: "What are environment variables?",
    back: "System-wide variables storing configuration. Examples: %USERNAME%, %TEMP%, %PATH% (Windows), $HOME, $USER (Linux). Access in scripts to get: user info, system paths, configuration. Consistent across sessions. View: echo %VARNAME% (Windows), echo $VARNAME (Linux)."
  },
  {
    id: 14,
    front: "What is script execution policy in PowerShell?",
    back: "Security feature controlling script execution. Policies: Restricted (default - no scripts), RemoteSigned (downloaded scripts must be signed), Unrestricted (all scripts run). Check: Get-ExecutionPolicy. Set: Set-ExecutionPolicy RemoteSigned. Prevents accidental malicious script execution."
  },
  {
    id: 15,
    front: "What automation use cases should you know?",
    back: "User account management (create/disable accounts), software deployment, backup automation, log analysis, system monitoring, file management (organize, rename, cleanup), network configuration, report generation, scheduled tasks, health checks."
  },
  {
    id: 16,
    front: "How would you use scripting for user account management?",
    back: "Create new accounts from CSV file, disable terminated employees, reset passwords in bulk, add users to groups, set permissions, create home directories. PowerShell examples: New-ADUser, Set-ADUser, Disable-ADAccount. Saves hours for HR onboarding/offboarding."
  },
  {
    id: 17,
    front: "How would you use scripting for file management?",
    back: "Batch rename files, organize by date/type, delete old files (cleanup temp folders), copy files to backup, search for specific content, compress files, generate file lists, check disk space. Example: delete files older than 30 days."
  },
  {
    id: 18,
    front: "How would you use scripting for software deployment?",
    back: "Silent software installation (no user interaction), install updates, configure settings, license activation, verify installation success, deploy to multiple computers, rollback if failure. Example: deploy Office to 100 computers overnight."
  },
  {
    id: 19,
    front: "How would you use scripting for system monitoring?",
    back: "Check CPU/memory usage, monitor disk space, verify services running, check for failed backups, alert if thresholds exceeded, log system state, check website availability. Schedule to run regularly, email alerts if problems."
  },
  {
    id: 20,
    front: "How would you use scripting for backup automation?",
    back: "Copy files to backup location, compress backups, verify backup success, delete old backups, send completion notification, log results. Schedule daily via Task Scheduler (Windows) or cron (Linux). Consistent, reliable backups without human intervention."
  },
  {
    id: 21,
    front: "What is Task Scheduler and how does it work with scripts?",
    back: "Windows tool for scheduling automated tasks. Can run: scripts, programs, batch files at specific times or events. Configure: trigger (when), action (what script), conditions (only if conditions met). Use for: backups, maintenance, monitoring. Access: taskschd.msc."
  },
  {
    id: 22,
    front: "What is cron and how does it work with scripts?",
    back: "Linux/Mac scheduling system. Cron jobs run scripts at specified times. Edit: crontab -e. Format: minute hour day month weekday command. Example: 0 2 * * * /scripts/backup.sh runs backup daily at 2 AM. Similar purpose to Windows Task Scheduler."
  },
  {
    id: 23,
    front: "What are basic scripting best practices?",
    back: "Comment code thoroughly, use meaningful variable names, test before production, handle errors (error checking), log results, keep scripts simple, one purpose per script, document usage, version control, security review (don't hardcode passwords)."
  },
  {
    id: 24,
    front: "How do you handle errors in scripts?",
    back: "Check command success before continuing, provide meaningful error messages, log errors, exit gracefully (don't corrupt data), try/catch blocks (PowerShell, Python), conditional checks (if command failed then...). Example: if backup fails, send alert, don't delete source."
  },
  {
    id: 25,
    front: "Why should you never hardcode passwords in scripts?",
    back: "Security risk - anyone reading script sees password, version control exposes password, sharing script shares password. Solutions: prompt for password, use credential manager, encrypted config file, certificate authentication, service accounts with limited permissions."
  },
  {
    id: 26,
    front: "What is the difference between scripting and programming?",
    back: "Scripting: interpreted (runs directly), automates tasks, shorter code, specific use case, examples: batch, PowerShell, bash. Programming: compiled (converted to executable), builds applications, larger projects, general purpose, examples: C++, Java. Boundary blurry (Python does both)."
  },
  {
    id: 27,
    front: "What is a shebang in shell scripts?",
    back: "First line specifying interpreter: #!/bin/bash or #!/usr/bin/python. Tells system which program runs script. Linux/Mac only (Windows doesn't use). Required for executable scripts. Example: #!/bin/bash means run with bash shell."
  },
  {
    id: 28,
    front: "How do you make a script executable in Linux?",
    back: "Use chmod command: chmod +x script.sh adds execute permission. Then run: ./script.sh. Without execute permission, must run: bash script.sh. Check permissions: ls -l. Scripts need read and execute permissions to run."
  },
  {
    id: 29,
    front: "What security considerations exist for scripts?",
    back: "Don't hardcode credentials, validate user input (prevent injection), least privilege execution, code review, digital signatures (trusted scripts), secure storage (permissions), audit logging, version control, test in sandbox, scan for malware patterns."
  },
  {
    id: 30,
    front: "What are the benefits of using scripts vs manual processes?",
    back: "Consistency (same every time), speed (much faster), scalability (1 computer or 1000), documentation (script IS documentation), error reduction (no human mistakes), repeatable, auditable, can run unattended (overnight, weekends), frees IT staff for complex tasks."
  }
];