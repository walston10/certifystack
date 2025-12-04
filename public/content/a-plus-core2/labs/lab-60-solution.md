# Lab 60: Scripting and Automation Basics - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Script Benefits

**Main benefits:**
- **Automation** - Repetitive tasks run without human intervention
- **Consistency** - Same steps every time, no human error
- **Speed** - Complete tasks faster than manual work
- **Scalability** - Do to 1000 systems what you'd do to 1
- **Documentation** - Script itself documents the process

---

### Question 2: Batch vs PowerShell

| Batch (.bat) | PowerShell (.ps1) |
|--------------|-------------------|
| Legacy, simple | Modern, powerful |
| Limited features | Object-oriented |
| Text-based output | Object pipeline |
| Built into Windows since DOS | Built into modern Windows |
| Good for simple tasks | Good for complex automation |
| No .NET access | Full .NET integration |

---

### Question 3: Variables

**What it is:** Named container that stores data (text, numbers, etc.)

**Why useful:**
- Store values for reuse
- Make scripts flexible (change value in one place)
- Hold user input
- Store command output
- Make scripts readable

**Example:** `$username = "John"` - Now use `$username` anywhere

---

### Question 4: Elevated Privileges

**What it means:** Running with administrator rights

**When needed:**
- Modifying system files
- Installing software
- Changing system settings
- Managing services
- Accessing protected folders

**How:** Right-click → "Run as administrator"

---

### Question 5: Comments

**Why important:**
- Explain what script does
- Document why decisions were made
- Help others (and future you) understand
- Make maintenance easier
- Required for team collaboration

**Syntax:**
- Batch: `REM comment` or `:: comment`
- PowerShell: `# comment`
- Python: `# comment`

---

## Section 2: Activities - Answers

### Activity A: Script Types

| Extension | Type | Platform | Use Case |
|-----------|------|----------|----------|
| .bat | Batch | Windows | Simple automation |
| .ps1 | PowerShell | Windows/Cross | System administration |
| .sh | Shell/Bash | Linux/Mac | System automation |
| .py | Python | Cross-platform | General programming |
| .vbs | VBScript | Windows | Legacy automation |
| .js | JavaScript | Cross-platform | Web/Node automation |

**Interpreters:**

| Type | Interpreter | Run Command |
|------|-------------|-------------|
| Batch | cmd.exe | `script.bat` or `cmd /c script.bat` |
| PowerShell | powershell.exe | `powershell ./script.ps1` |
| Python | python.exe | `python script.py` |
| Bash | bash | `bash script.sh` or `./script.sh` |

---

### Activity B: Batch Script

**Line explanations:**

| Line | Purpose |
|------|---------|
| @echo off | Hides command text, shows only output |
| echo | Displays text or blank line |
| %COMPUTERNAME% | Environment variable - computer name |
| ipconfig \| findstr | Runs ipconfig, filters for "IPv4" lines |
| pause | Waits for user to press a key |

---

### Activity C: PowerShell

**Command structure:**

| Component | Example | Purpose |
|-----------|---------|---------|
| Verb-Noun | Get-Process | Standard command naming |
| Pipeline | Get-Process \| Sort | Send output to next command |
| Parameters | -Name "notepad" | Modify command behavior |
| Where-Object | {$_.Status -eq "Running"} | Filter results |

---

### Activity D: Environment Variables

| Variable | Value | Purpose |
|----------|-------|---------|
| %USERPROFILE% | C:\Users\[name] | User's home folder |
| %TEMP% | C:\Users\[name]\AppData\Local\Temp | Temporary files |
| %PATH% | [Multiple directories] | Where to find executables |
| %SYSTEMROOT% | C:\Windows | Windows installation |
| %HOMEDRIVE% | C: | Drive with user profile |

---

### Activity E: Script Logic

| Element | Purpose |
|---------|---------|
| IF/ELSE | Make decisions based on conditions |
| FOR loop | Repeat actions for multiple items |
| Variables | Store and reuse values |
| Comparison operators | Compare values (eq, gt, lt, etc.) |

---

### Activity F: Automation Use Cases

| Task | Script Benefit |
|------|----------------|
| Create 50 users | Hours → Minutes, no typos |
| Daily backup verification | Runs automatically, consistent |
| Check 100 servers | Impossible manually, easy with script |
| Install software | Consistent setup, no missed steps |
| Weekly reports | Automatic, on-time, consistent format |

**Clear temp files planning:**

| Item | Answer |
|------|--------|
| Inputs | Path to temp folder, age threshold (7 days) |
| Actions | Find files older than 7 days, delete them |
| Output | Count of deleted files, space recovered |
| Error handling | Skip files in use, log errors |
| Logging | Log what was deleted, when, space freed |

---

### Activity G: Safety Practices

**Best practices explained:**

| Practice | Why Important |
|----------|---------------|
| Add comments | Others can understand/maintain |
| Meaningful names | `$userCount` vs `$x` |
| Error handling | Script doesn't crash unexpectedly |
| Test first | Catch problems before production |
| Version control | Track changes, rollback if needed |
| Log actions | Audit trail, troubleshooting |

**Dangerous commands:**

| Command | Risk |
|---------|------|
| del /s /q | Recursively delete without confirmation |
| rm -rf | Linux: delete everything, no undo |
| Format-Volume | Erase entire drive |
| Remove-Item -Recurse | Delete folder and all contents |

---

## Section 3: Reflection - Answers

### Scenario 1: Disable 200 Accounts

**How scripting helps:**

```powershell
# Read list of terminated employees
$terminated = Import-Csv "terminated.csv"

# Disable each account
foreach ($user in $terminated) {
    Disable-ADAccount -Identity $user.Username
    Write-Host "Disabled: $($user.Username)"
}
```

**Benefits:**
- Complete in minutes vs hours
- No typos or missed accounts
- Log of what was done
- Can be reviewed before running
- Reusable for future terminations

---

### Scenario 2: Unknown Script from Internet

**Precautions:**
1. **Read the entire script** - Understand every line
2. **Research unknown commands** - Google anything unfamiliar
3. **Check source reputation** - Who posted it? Reviews?
4. **Look for red flags** - Encoded commands, downloads, registry changes
5. **Test in VM first** - Isolated environment
6. **Run without admin rights first** - If possible
7. **Have system restore point** - Before running

**Never run scripts you don't understand**

---

### Scenario 3: Works in Test, Fails in Production

**Troubleshooting steps:**
1. **Compare environments** - What's different? OS version, permissions?
2. **Check error messages** - What exactly failed?
3. **Add logging** - More output to see where it fails
4. **Check permissions** - Run as same user/privileges?
5. **Check paths** - Hardcoded paths that don't exist?
6. **Check dependencies** - Missing software, modules?
7. **Test specific sections** - Isolate the failure

**Common causes:**
- Different user permissions
- Missing prerequisites
- Network/path differences
- Hardcoded values

---

### Scenario 4: Schedule Nightly Script

**Windows tool:** Task Scheduler

**Setup:**
1. Open Task Scheduler
2. Create Basic Task
3. Set trigger: Daily at 2:00 AM
4. Set action: Start a program
5. Program: `powershell.exe`
6. Arguments: `-ExecutionPolicy Bypass -File "C:\Scripts\healthcheck.ps1"`
7. Configure: Run whether user is logged on or not
8. Use highest privileges if needed

**PowerShell alternative:**
```powershell
$action = New-ScheduledTaskAction -Execute "PowerShell.exe" -Argument "-File C:\Scripts\healthcheck.ps1"
$trigger = New-ScheduledTaskTrigger -Daily -At 2am
Register-ScheduledTask -TaskName "ServerHealthCheck" -Action $action -Trigger $trigger
```

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 SCRIPTING BASICS QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FILE TYPES                                                                ║
║  .bat/.cmd = Batch | .ps1 = PowerShell | .sh = Bash | .py = Python        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BATCH: @echo off, echo, %VAR%, set, if, for, pause                       ║
║  POWERSHELL: Verb-Noun, |, $var, Get-Help, Get-Command                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ENV VARS: %USERPROFILE%, %TEMP%, %COMPUTERNAME%, %USERNAME%              ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SAFETY: Read first, test in VM, minimum privileges, have rollback plan   ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SCHEDULE: Task Scheduler for automated execution                         ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

# 🎉 Congratulations!

You've completed all 30 A+ Core 2 Labs!

**Modules Completed:**
- ✅ Operating Systems (Labs 31-40)
- ✅ Security (Labs 41-48)
- ✅ Software Troubleshooting (Labs 49-52)
- ✅ Operational Procedures (Labs 53-60)

**You're ready for the CompTIA A+ 220-1102 exam!**