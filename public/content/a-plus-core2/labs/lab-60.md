# Lab 60: Scripting and Automation Basics

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 4.8 - Identify the basics of scripting

---

## Section 1: Concept Check (5 min)

1. What is the main benefit of using scripts in IT administration?

2. What is the difference between a batch file (.bat) and a PowerShell script (.ps1)?

3. What is a variable in scripting, and why is it useful?

4. What does it mean to "run a script with elevated privileges"?

5. Why is it important to comment your scripts?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your Windows PC** - Create and run basic scripts.

#### Activity A: Script Type Identification

**Goal:** Recognize different script types.

**Match file extensions to script types:**

| Extension | Script Type | Platform | Use Case |
|-----------|-------------|----------|----------|
| .bat | | | |
| .ps1 | | | |
| .sh | | | |
| .py | | | |
| .vbs | | | |
| .js | | | |

**Common script interpreters:**

| Script Type | Interpreter | Command to Run |
|-------------|-------------|----------------|
| Batch | | |
| PowerShell | | |
| Python | | |
| Bash | | |

---

#### Activity B: Basic Batch Script

**Goal:** Create and run a batch script.

**Create this script in Notepad and save as `systeminfo.bat`:**

```batch
@echo off
echo ==========================================
echo System Information Report
echo ==========================================
echo.
echo Computer Name: %COMPUTERNAME%
echo Username: %USERNAME%
echo.
echo Date: %DATE%
echo Time: %TIME%
echo.
echo ==========================================
echo Network Configuration
echo ==========================================
ipconfig | findstr "IPv4"
echo.
pause
```

**Run the script (double-click or cmd: `systeminfo.bat`)**

**Document results:**

| Variable | Output |
|----------|--------|
| %COMPUTERNAME% | |
| %USERNAME% | |
| %DATE% | |
| IPv4 Address | |

**What each line does:**

| Line | Purpose |
|------|---------|
| @echo off | |
| echo | |
| %COMPUTERNAME% | |
| ipconfig \| findstr | |
| pause | |

---

#### Activity C: PowerShell Basics

**Goal:** Run PowerShell commands.

**Open PowerShell and run these commands:**

```powershell
Get-ComputerInfo | Select-Object WindowsProductName, WindowsVersion
```
Result: ________________

```powershell
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5 Name, CPU
```
Result (top 5 processes): ________________

```powershell
Get-Service | Where-Object {$_.Status -eq "Running"} | Measure-Object
```
Number of running services: ________________

**PowerShell command structure:**

| Component | Example | Purpose |
|-----------|---------|---------|
| Verb-Noun | Get-Process | |
| Pipeline (\|) | Get-Process \| Sort | |
| Parameters | -Name "notepad" | |
| Where-Object | {$_.Status -eq "Running"} | |

---

#### Activity D: Environment Variables

**Goal:** Understand and use environment variables.

**View environment variables:**

**In CMD:**
```cmd
set
```

**In PowerShell:**
```powershell
Get-ChildItem Env:
```

**Document common variables:**

| Variable | Value | Purpose |
|----------|-------|---------|
| %USERPROFILE% | | |
| %TEMP% | | |
| %PATH% | | |
| %SYSTEMROOT% | | |
| %HOMEDRIVE% | | |

**Using variables in scripts:**

```batch
echo Your profile is at: %USERPROFILE%
echo Temp folder is: %TEMP%
```

---

#### Activity E: Basic Script Logic

**Goal:** Understand control structures.

**Batch IF statement:**

```batch
@echo off
set /p answer="Is this a laptop? (Y/N): "
if /i "%answer%"=="Y" (
    echo Running laptop-specific tasks...
) else (
    echo Running desktop tasks...
)
pause
```

**Batch FOR loop:**

```batch
@echo off
echo Listing text files:
for %%f in (*.txt) do echo Found: %%f
pause
```

**PowerShell IF:**

```powershell
$freeSpace = (Get-PSDrive C).Free / 1GB
if ($freeSpace -lt 10) {
    Write-Host "Warning: Low disk space!" -ForegroundColor Red
} else {
    Write-Host "Disk space OK: $([math]::Round($freeSpace, 2)) GB free"
}
```

**Identify the logic:**

| Script Element | Purpose |
|----------------|---------|
| IF/ELSE | |
| FOR loop | |
| Variables | |
| Comparison operators | |

---

#### Activity F: Automation Use Cases

**Goal:** Identify automation opportunities.

**Match task to script benefit:**

| Task | Script Benefit |
|------|----------------|
| Create 50 user accounts | |
| Daily backup verification | |
| Check disk space on 100 servers | |
| Install software on new computers | |
| Generate weekly reports | |

**Script planning template:**

For task: **Clear temp files older than 7 days**

| Planning Item | Your Answer |
|---------------|-------------|
| What inputs are needed? | |
| What actions does it perform? | |
| What output/result? | |
| Error handling needed? | |
| Should it log actions? | |

---

#### Activity G: Script Safety and Best Practices

**Goal:** Understand safe scripting practices.

**Before running any script:**

| ☐ | Check Item |
|---|------------|
| | Read and understand what it does |
| | Check the source (trusted?) |
| | Test in non-production first |
| | Run with minimum required privileges |
| | Have a way to undo changes |

**Script best practices:**

| Practice | Why Important |
|----------|---------------|
| Add comments | |
| Use meaningful variable names | |
| Include error handling | |
| Test before deploying | |
| Version control | |
| Log actions | |

**Dangerous commands to be careful with:**

| Command | Risk |
|---------|------|
| del /s /q | |
| rm -rf | |
| Format-Volume | |
| Remove-Item -Recurse | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** Your manager asks you to disable the accounts of 200 terminated employees by end of day. Doing it manually would take hours. How would scripting help?

**Scenario 2:** You find a script online that claims to "optimize Windows." What precautions should you take before running it?

**Scenario 3:** A script you wrote worked in testing but fails in production. What troubleshooting steps would you take?

**Scenario 4:** You need to create a script that runs every night at 2 AM to check server health. What Windows tool would you use to schedule it?

---

## What You Learned Today

- ✅ Script types and file extensions
- ✅ Basic batch scripting
- ✅ PowerShell fundamentals
- ✅ Environment variables
- ✅ Script logic (IF, FOR)
- ✅ Automation use cases
- ✅ Script safety practices

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 SCRIPTING BASICS QUICK REFERENCE                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SCRIPT TYPES                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  .bat / .cmd   → Windows batch (cmd.exe)                                  ║
║  .ps1          → PowerShell (powershell.exe)                              ║
║  .sh           → Linux/Mac Bash shell                                     ║
║  .py           → Python (cross-platform)                                  ║
║  .vbs          → VBScript (legacy Windows)                                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BATCH BASICS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  @echo off          → Hide command output                                 ║
║  echo message       → Display text                                        ║
║  %VARIABLE%         → Use environment variable                            ║
║  set VAR=value      → Set variable                                        ║
║  pause              → Wait for keypress                                   ║
║  if/else            → Conditional logic                                   ║
║  for                → Loop through items                                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  POWERSHELL BASICS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Verb-Noun          → Command structure (Get-Process)                     ║
║  |                  → Pipeline (send output to next command)              ║
║  $variable          → Variable syntax                                     ║
║  Get-Help cmdlet    → Get help for command                                ║
║  Get-Command *name* → Find commands                                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMMON ENVIRONMENT VARIABLES                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  %USERPROFILE%  → C:\Users\username                                       ║
║  %TEMP%         → Temp folder                                             ║
║  %COMPUTERNAME% → Computer name                                           ║
║  %USERNAME%     → Current user                                            ║
║  %SYSTEMROOT%   → Windows folder                                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SAFETY: Read before running, test first, use minimum privileges          ║
╚═══════════════════════════════════════════════════════════════════════════╝
```