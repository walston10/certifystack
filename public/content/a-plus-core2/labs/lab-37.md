# Lab 37: Windows Application Management

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 1.7 - Given a scenario, apply application installation and configuration concepts

---

## Section 1: Concept Check (5 min)

1. What's the difference between an .exe installer and an .msi installer? Which supports Group Policy deployment?

2. A user installed an old game and it won't run on Windows 11. What feature might help, and where do you find it?

3. What are two ways to prevent an application from starting automatically when Windows boots?

4. A program requires administrator privileges to run properly. What two options can you configure so the user doesn't have to right-click "Run as administrator" every time?

5. What is sideloading in the context of Windows apps, and when would you need to enable it?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Application Sources

**Goal:** Understand different ways applications are installed.

**Document applications on your system by source:**

| Source Type | Example From Your PC | How It Was Installed |
|-------------|---------------------|---------------------|
| Microsoft Store | | |
| Downloaded .exe | | |
| Downloaded .msi | | |
| Came with Windows | | |
| Browser extension | | |

**Microsoft Store Settings:**

Open Settings → Apps → Advanced app settings (or "Apps & features" settings)

| Setting | Current Value |
|---------|---------------|
| Choose where to get apps | |
| App execution aliases enabled? | |

---

#### Activity B: Installing and Uninstalling Applications

**Goal:** Practice application management through multiple interfaces.

**Method 1: Settings App**

Open Settings → Apps → Installed apps

| Statistic | Count |
|-----------|-------|
| Total installed apps | |
| Apps sorted by size - largest | |
| Apps sorted by install date - oldest | |

**Method 2: Control Panel**

Open `appwiz.cpl`

Find an app that appears in BOTH locations:

| App Name | Size in Settings | Size in Control Panel | Same? |
|----------|------------------|----------------------|-------|
| | | | |

**Method 3: Command Line (winget)**

Open PowerShell and run:
```powershell
winget list
```

Does winget show more or fewer apps than Settings? _______________

**Uninstall options comparison:**

| Method | Can Uninstall Desktop Apps? | Can Uninstall Store Apps? | Can Uninstall System Apps? |
|--------|----------------------------|---------------------------|---------------------------|
| Settings → Apps | | | |
| Control Panel | | | |
| winget uninstall | | | |

---

#### Activity C: Compatibility Mode

**Goal:** Configure application compatibility settings.

**Step 1:** Find an older application or any .exe file

Navigate to an application's .exe file (e.g., C:\Program Files\...)

Right-click → Properties → Compatibility tab

**Document available options:**

| Setting | Purpose | Your Setting |
|---------|---------|--------------|
| Run in compatibility mode for: | | |
| Reduced color mode | | |
| Run in 640 x 480 resolution | | |
| Disable fullscreen optimizations | | |
| Run as administrator | | |
| Register for restart | | |

**Step 2:** Compatibility modes available

List the Windows versions you can emulate:

1. _______________
2. _______________
3. _______________
4. _______________
5. _______________

**Step 3:** Run Compatibility Troubleshooter

Click "Run compatibility troubleshooter"

What options does the troubleshooter offer? _______________

---

#### Activity D: Startup Application Management

**Goal:** Control what runs at Windows startup.

**Method 1: Task Manager**

Open Task Manager → Startup tab (or Startup apps)

| Application | Publisher | Status | Startup Impact |
|-------------|-----------|--------|----------------|
| | | | |
| | | | |
| | | | |
| | | | |
| | | | |

**Disable one non-essential startup item:**

| Item Disabled | Original Impact | Expected Result |
|---------------|-----------------|-----------------|
| | | |

**Method 2: Settings**

Open Settings → Apps → Startup

Compare with Task Manager - same apps listed? _______________

**Method 3: msconfig**

Open `msconfig` → Startup tab

What message appears? _______________

**Method 4: Startup Folders**

Navigate to:
- User: `shell:startup`
- All Users: `shell:common startup`

| Folder | Items Found |
|--------|-------------|
| User Startup | |
| Common Startup | |

---

#### Activity E: Default Applications

**Goal:** Configure default program associations.

**Step 1:** View current defaults

Open Settings → Apps → Default apps

| File Type/Protocol | Current Default App |
|--------------------|---------------------|
| .pdf | |
| .txt | |
| .jpg | |
| .html | |
| Email (mailto:) | |
| Web browser (http/https) | |

**Step 2:** Change a default

Choose a file type and change its default:

| Action | Details |
|--------|---------|
| File type changed | |
| Original default | |
| New default | |

**Step 3:** Reset defaults

What option exists to reset ALL defaults? _______________

---

#### Activity F: Windows Features and Optional Features

**Goal:** Manage optional Windows components.

**Step 1:** Traditional Windows Features

Open `optionalfeatures` (or "Turn Windows features on or off")

| Feature | Currently Enabled? | Purpose |
|---------|-------------------|---------|
| .NET Framework 3.5 | | |
| Hyper-V (if visible) | | |
| Internet Explorer 11 | | |
| Telnet Client | | |
| TFTP Client | | |
| Windows Sandbox | | |
| Windows Subsystem for Linux | | |

**Step 2:** Optional Features (modern)

Settings → Apps → Optional features

| Installed Optional Feature | Size |
|---------------------------|------|
| | |
| | |
| | |

List 3 features available to add:

1. _______________
2. _______________
3. _______________

---

#### Activity G: Windows Package Manager (winget)

**Goal:** Learn modern command-line app management.

Open PowerShell or Terminal

**Basic commands:**

| Command | Result |
|---------|--------|
| `winget --version` | |
| `winget search notepad` | |
| `winget show Microsoft.PowerToys` | |
| `winget list --name Microsoft` | |

**Package information:**

Run `winget show Mozilla.Firefox` (or another app)

| Property | Value |
|----------|-------|
| Name | |
| Publisher | |
| Version | |
| License | |

**Installation syntax (don't run unless you want the app):**

```powershell
winget install <package-id>
winget install --id Mozilla.Firefox -e
winget uninstall <package-id>
winget upgrade --all
```

What does `winget upgrade --all` do? _______________

---

## Section 3: Reflection (5 min)

**Scenario 1:** A legacy accounting application from 2010 won't run on Windows 11. It crashes immediately after launch. Walk through the troubleshooting steps you'd take using compatibility features.

**Scenario 2:** A user complains their computer takes forever to start. You check Task Manager and see 25 startup applications, most with "High" impact. How do you determine which ones are safe to disable?

**Scenario 3:** The IT department needs to deploy 7-Zip to 200 computers. What are two methods they could use, and what installer type would be preferable?

**Scenario 4:** A user accidentally set a random program as the default PDF viewer and now can't figure out how to change it back. Walk them through the process.

---

## What You Learned Today

- ✅ Different application sources (Store, .exe, .msi)
- ✅ Multiple ways to uninstall applications
- ✅ Compatibility mode for legacy applications
- ✅ Managing startup applications (Task Manager, Settings, msconfig, folders)
- ✅ Configuring default application associations
- ✅ Windows Features and Optional Features
- ✅ Using winget for command-line app management

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 APPLICATION MANAGEMENT QUICK REFERENCE                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  INSTALLER TYPES                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  .exe → Executable installer, various formats, flexible                   ║
║  .msi → Windows Installer package, Group Policy deployable, logging       ║
║  .msix/.appx → Modern Windows app package (Store apps)                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  STARTUP LOCATIONS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Task Manager        → Startup tab (enable/disable)                       ║
║  Settings            → Apps → Startup                                     ║
║  shell:startup       → User startup folder                                ║
║  shell:common startup → All users startup folder                          ║
║  Registry            → HKCU/HKLM\...\Run                                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMPATIBILITY OPTIONS                                                     ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Right-click .exe → Properties → Compatibility tab                        ║
║  • Run in compatibility mode (Windows 7, 8, XP, etc.)                     ║
║  • Run as administrator                                                    ║
║  • Disable display scaling                                                 ║
║  • Run compatibility troubleshooter                                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WINGET COMMANDS                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  winget search <name>    → Find packages                                  ║
║  winget install <id>     → Install package                                ║
║  winget uninstall <id>   → Remove package                                 ║
║  winget upgrade --all    → Update all packages                            ║
║  winget list             → Show installed packages                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  UNINSTALL METHODS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Settings → Apps → Installed apps → Select → Uninstall                    ║
║  Control Panel → Programs and Features → Select → Uninstall               ║
║  winget uninstall <package-id>                                            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```