# Lab 37: Windows Application Management - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: .exe vs .msi

| Aspect | .exe | .msi |
|--------|------|------|
| Format | Any executable installer | Windows Installer database |
| Logging | Varies | Built-in logging |
| Silent install | Varies by installer | Standard /quiet switch |
| Group Policy | No | Yes - can deploy via GPO |
| Rollback | Usually no | Built-in rollback support |
| Repair | Usually no | Supports repair |

**Group Policy deployable:** .msi

---

### Question 2: Legacy Game Won't Run

**Feature:** Compatibility Mode

**Location:** Right-click the game's .exe → Properties → Compatibility tab

**Options to try:**
1. Run in compatibility mode for Windows 7/8/XP
2. Disable fullscreen optimizations
3. Run as administrator
4. Reduced color mode (for very old games)
5. Run compatibility troubleshooter

---

### Question 3: Prevent Startup Applications

**Two methods:**

1. **Task Manager** → Startup tab → Right-click app → Disable

2. **Settings** → Apps → Startup → Toggle OFF

**Other methods:**
- Delete from `shell:startup` folder
- Uncheck in msconfig (redirects to Task Manager)
- Disable in app's own settings
- Registry: Remove from HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run

---

### Question 4: Always Run as Administrator

**Option 1: Compatibility settings**
- Right-click .exe → Properties → Compatibility
- Check "Run this program as an administrator"
- Apply

**Option 2: Shortcut properties**
- Right-click shortcut → Properties → Shortcut tab
- Click "Advanced" → Check "Run as administrator"

---

### Question 5: Sideloading

**Definition:** Installing apps from sources outside the Microsoft Store (e.g., .appx or .msix files directly).

**When needed:**
- Installing internally-developed company apps
- Testing apps before Store submission
- Installing apps not available in the Store
- Developer testing

**Enable:** Settings → Apps → Advanced app settings → "Choose where to get apps" → Anywhere (or Developer mode)

---

## Section 2: Activities - Answers

### Activity A: Application Sources

| Source Type | Example | Installation Method |
|-------------|---------|---------------------|
| Microsoft Store | Spotify, Netflix, Calculator | Store automatic |
| Downloaded .exe | Chrome, Discord | Double-click installer |
| Downloaded .msi | Office, Adobe Reader | Double-click or msiexec |
| Came with Windows | Notepad, Paint | Pre-installed |
| Browser extension | uBlock Origin | Browser's extension store |

---

### Activity B: Installing and Uninstalling

**Uninstall comparison:**

| Method | Desktop Apps | Store Apps | System Apps |
|--------|--------------|------------|-------------|
| Settings | ✅ Yes | ✅ Yes | ❌ No |
| Control Panel | ✅ Yes | ❌ No | ❌ No |
| winget | ✅ Yes | ✅ Some | ❌ No |

**winget typically shows fewer apps** than Settings because it only tracks apps from known sources (winget repository, Store).

---

### Activity C: Compatibility Mode

**Available Windows versions to emulate:**
1. Windows Vista (Service Pack 2)
2. Windows 7
3. Windows 8
4. Windows 10
5. Windows XP (Service Pack 2 or 3)
6. Windows 95/98/ME (older versions)

**Compatibility Troubleshooter options:**
- Try recommended settings
- Troubleshoot program
- Tests different compatibility combinations
- Reports back what worked

---

### Activity D: Startup Application Management

**Startup Impact levels:**

| Impact | Meaning |
|--------|---------|
| High | Significantly delays startup |
| Medium | Moderate delay |
| Low | Minimal impact |
| Not measured | New or rarely used |

**Safe to disable (generally):**
- Update checkers (Adobe, Java)
- Chat apps (unless needed immediately)
- Cloud sync (can start manually)
- Game launchers
- Printer utilities

**Keep enabled:**
- Antivirus/security software
- Cloud backup (if critical)
- Accessibility tools
- Hardware drivers (audio, graphics)

**msconfig message:** "To manage startup items, use Task Manager"

---

### Activity E: Default Applications

**Reset all defaults:** Settings → Apps → Default apps → "Reset" button at bottom (resets to Microsoft defaults)

**Methods to change defaults:**
1. Settings → Apps → Default apps → Choose by file type/protocol
2. Right-click file → Open with → Choose another app → "Always use"
3. Open program → Make it default in its settings

---

### Activity F: Windows Features

**Feature purposes:**

| Feature | Purpose |
|---------|---------|
| .NET Framework 3.5 | Run older .NET applications |
| Hyper-V | Virtual machine hypervisor |
| Internet Explorer 11 | Legacy browser compatibility |
| Telnet Client | Test network connections (insecure) |
| TFTP Client | Simple file transfer |
| Windows Sandbox | Isolated testing environment |
| WSL | Run Linux distributions on Windows |

---

### Activity G: winget

**winget upgrade --all:** Updates all installed packages that have available updates in the winget repository.

**Useful winget commands:**

```powershell
winget search <term>           # Find packages
winget install <id>            # Install
winget install -e --id <id>    # Exact match install
winget uninstall <id>          # Remove
winget upgrade                 # Show available updates
winget upgrade --all           # Update everything
winget export -o apps.json     # Export installed apps
winget import apps.json        # Import/install from list
```

---

## Section 3: Reflection - Answers

### Scenario 1: Legacy Accounting Application

**Troubleshooting steps:**

1. **Right-click .exe → Properties → Compatibility**

2. **Try compatibility mode:**
   - Start with Windows 7 (most likely)
   - If fails, try Windows XP SP3
   - Try Windows Vista SP2

3. **Additional settings to try:**
   - Check "Run as administrator"
   - Check "Disable fullscreen optimizations"
   - Check "Disable display scaling on high DPI"

4. **Run Compatibility Troubleshooter:**
   - Click "Run compatibility troubleshooter"
   - Select "Try recommended settings" first
   - If fails, select "Troubleshoot program"

5. **If still failing:**
   - Check for application updates
   - Look for known issues online
   - Consider running in a Windows 7 VM (Hyper-V)
   - Contact vendor for Windows 11 compatible version

---

### Scenario 2: 25 Startup Applications

**How to determine safe-to-disable:**

1. **Research unknown items:**
   - Google the publisher name
   - Check if it's essential system component

2. **Categories usually safe to disable:**
   - Update services (AdobeUpdater, JavaUpdate)
   - Cloud storage sync (OneDrive, Dropbox - can start manually)
   - Chat apps (Slack, Discord, Teams - unless needed immediately)
   - Game launchers (Steam, Epic)
   - Printer/scanner utilities
   - Hardware manufacturer bloatware

3. **NEVER disable:**
   - Antivirus/security software
   - Audio drivers (Realtek, etc.)
   - Critical hardware drivers

4. **Method:**
   - Disable one at a time
   - Reboot and verify system works
   - Document what was disabled
   - Re-enable if problems occur

---

### Scenario 3: Deploy 7-Zip to 200 Computers

**Two deployment methods:**

1. **Group Policy Software Installation:**
   - Requires .msi installer (7-Zip provides this)
   - Create GPO → Computer Config → Software Installation
   - Assign the .msi package
   - Computers install at next reboot

2. **Scripted deployment (SCCM, Intune, PDQ):**
   - Can use .exe or .msi
   - Push command: `msiexec /i 7z2301-x64.msi /quiet`
   - More control over timing
   - Better reporting

**Preferred installer:** .msi because:
- Standard silent install switches
- Group Policy compatible
- Built-in logging
- Supports repair and uninstall

---

### Scenario 4: Wrong Default PDF Viewer

**Walk-through:**

1. **Open Settings** (Windows + I)

2. **Navigate:** Apps → Default apps

3. **Search for .pdf:**
   - In Windows 11: Scroll down or type ".pdf" in search
   - In Windows 10: Click "Choose default apps by file type"

4. **Click current default** next to .pdf

5. **Select correct app:**
   - Choose Adobe Acrobat, Edge, or preferred viewer
   - Click to confirm

6. **Alternatively:**
   - Find any PDF file
   - Right-click → Open with → Choose another app
   - Select correct program
   - Check "Always use this app to open .pdf files"
   - Click OK

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