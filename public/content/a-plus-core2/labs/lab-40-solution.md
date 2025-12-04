# Lab 40: Windows Upgrade and Migration - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Feature vs Quality Updates

| Type | Purpose | Frequency | Examples |
|------|---------|-----------|----------|
| **Feature Update** | New features, major changes | Annually (Win 11), was bi-annual (Win 10) | 21H2, 22H2, 23H2 |
| **Quality Update** | Security fixes, bug fixes | Monthly (Patch Tuesday - 2nd Tuesday) | KB5001234 |

**Additional types:**
- Driver updates: Hardware driver updates
- Definition updates: Antivirus signatures (daily)

---

### Question 2: Rollback After Upgrade

**Yes, they can go back.**

**Time limit:** 10 days by default

**Requirements:**
- Windows.old folder must exist
- Haven't run Disk Cleanup on previous installation
- Haven't deleted Windows.old manually

**Location:** Settings → System → Recovery → "Go back"

**Extending the period (before upgrade):**
```cmd
DISM /Online /Set-OSUninstallWindow /Value:60
```
Maximum is 60 days.

---

### Question 3: Applications During In-Place Upgrade

**What happens to applications:**
- Most applications are preserved
- Desktop apps typically continue working
- Drivers may need updating
- Some applications may need repair/reinstall
- Incompatible applications may be removed automatically
- List of removed apps shown post-upgrade

**Not preserved:**
- Applications flagged as incompatible
- Some system utilities
- Certain antivirus software

---

### Question 4: Windows 10 Home to Pro Upgrade

**Two methods:**

1. **Microsoft Store / Settings**
   - Settings → Update & Security → Activation
   - "Go to Microsoft Store" or "Change product key"
   - Purchase Pro upgrade
   - Enter Pro product key

2. **Product Key**
   - Obtain Windows 10 Pro product key (retail purchase, volume license)
   - Settings → Update & Security → Activation → Change product key
   - Enter Pro key
   - Windows upgrades edition

**Note:** This is an edition change, not a version upgrade. No reinstall needed.

---

### Question 5: Migration Planning Data

**User data to transfer:**
- Documents, Desktop, Downloads, Pictures, Music, Videos
- Browser bookmarks and passwords
- Email data (PST/OST files, email settings)
- Application settings (AppData folder)
- Saved passwords and credentials

**Settings to transfer:**
- Network connections (Wi-Fi passwords)
- Printer configurations
- Accessibility settings
- Regional preferences
- Desktop customizations

**Consider also:**
- Application licenses/product keys
- Fonts
- Certificate stores
- Local database files
- Game saves

---

## Section 2: Activities - Answers

### Activity A: Windows Update Status

**Update types explained:**

| Type | Purpose | Frequency |
|------|---------|-----------|
| Feature updates | Major Windows upgrades | Annual |
| Quality updates | Security and bug fixes | Monthly |
| Driver updates | Hardware driver updates | As needed |
| Definition updates | Defender signatures | Multiple daily |
| Other updates | .NET, Office, etc. | As needed |

---

### Activity B: Upgrade Paths

| From | To | Valid? | Notes |
|------|-----|--------|-------|
| Windows 10 Home | Windows 10 Pro | ✅ Yes | Product key or Store purchase |
| Windows 10 Home | Windows 11 Home | ✅ Yes | If hardware compatible |
| Windows 10 Pro | Windows 11 Home | ❌ No | Downgrade not allowed |
| Windows 10 Pro | Windows 11 Pro | ✅ Yes | If hardware compatible |
| Windows 10 32-bit | Windows 11 | ❌ No | Windows 11 is 64-bit only |
| Windows 11 Home | Windows 11 Pro | ✅ Yes | Product key or Store |
| Windows 7 | Windows 10 | ✅ Yes | Free upgrade ended, clean install works |
| Windows 8.1 | Windows 11 | ⚠️ | Clean install only, not in-place |

---

### Activity C: Pre-Upgrade Checklist

**Hardware commands:**

| Check | Command | What to Look For |
|-------|---------|------------------|
| CPU | `wmic cpu get name` | 1 GHz+, 2 cores, 64-bit |
| RAM | `systeminfo | findstr Memory` | 4 GB minimum |
| Storage | `wmic logicaldisk get size,freespace` | 64 GB total, 20+ GB free |
| TPM | `tpm.msc` | Version 2.0 |
| BIOS mode | `msinfo32` | UEFI |
| Secure Boot | `msinfo32` | On or Capable |

---

### Activity D: Recovery Options

**Rollback window extension:**

```cmd
DISM /Online /Set-OSUninstallWindow /Value:60
```

**What it does:** Extends the "Go back to Windows 10" option from 10 days to 60 days. Must be run BEFORE upgrading.

**Windows.old contents:**
- Previous Windows installation
- Program Files
- Users folder
- Windows folder

**Size:** Typically 15-30 GB depending on previous installation

---

### Activity E: User Data Migration

**Standard locations:**

| Data Type | Location | Include? |
|-----------|----------|----------|
| Documents | %userprofile%\Documents | Yes |
| Desktop | %userprofile%\Desktop | Yes |
| Downloads | %userprofile%\Downloads | Selective |
| Pictures | %userprofile%\Pictures | Yes |
| AppData | %userprofile%\AppData | Yes (Roaming especially) |
| Browser | %localappdata%\Google\Chrome or similar | Yes |
| Email | %localappdata%\Microsoft\Outlook | Yes |

**Application data locations:**

| Application | Data Location | Migration |
|-------------|---------------|-----------|
| Microsoft Office | %appdata%\Microsoft | Copy or Office repair |
| Chrome | %localappdata%\Google\Chrome | Sign in syncs |
| Firefox | %appdata%\Mozilla\Firefox | Profile copy |
| Outlook | %localappdata%\Microsoft\Outlook | PST export/import |

---

### Activity F: Migration Tools

**Windows built-in:**

| Tool | Purpose | Limitations |
|------|---------|-------------|
| File History | Backup files | Files only, no settings |
| Backup and Restore | System image | Old computers only |
| OneDrive | Cloud sync | Limited to known folders |
| Manual copy | Direct transfer | Time-consuming |

**USMT components:**

| Component | Purpose |
|-----------|---------|
| ScanState | Collects user data and settings from source |
| LoadState | Applies collected data to destination |
| MigApp.xml | Application settings migration rules |
| MigDocs.xml | Document migration rules |
| MigUser.xml | User profile migration rules |

---

## Section 3: Reflection - Answers

### Scenario 1: 50 Computer Weekend Upgrade

**Recommended approach:**

1. **Pre-weekend preparation:**
   - Inventory all computers and applications
   - Check Windows 11 compatibility for each
   - Test critical applications on pilot Windows 11 machine
   - Create backup images of all computers

2. **Create compatibility groups:**
   - Group A: Fully compatible (hardware + software)
   - Group B: Hardware compatible, software concerns
   - Group C: Not compatible

3. **Upgrade strategy:**
   - Group A: Proceed with upgrade
   - Group B: Upgrade but have rollback plan
   - Group C: Keep on Windows 10 (still supported until 2025)

4. **Implementation:**
   - Use SCCM/MDT for automated deployment
   - Have IT staff available for troubleshooting
   - Document any issues
   - Test critical applications immediately after upgrade

5. **Rollback plan:**
   - Keep backup images for 30 days
   - Have process to quickly restore
   - Extend Windows.old retention before upgrade

---

### Scenario 2: 10-Year Email + Photos Migration

**Migration plan:**

**Phase 1: Assessment**
- Document exact email configuration (server settings, account types)
- Calculate total data size
- Identify specialized applications and their data locations

**Phase 2: Backup everything**
- Full backup of old computer
- Export Outlook PST file: File → Open & Export → Export
- Copy all user folders to external drive
- Export browser bookmarks/passwords
- Screenshot application settings if needed

**Phase 3: Set up new computer**
- Install Windows 11
- Install Microsoft 365/Office
- Install specialized applications

**Phase 4: Data transfer**
- Copy user folders from external drive
- Import Outlook PST: File → Open & Export → Import
- Import browser data (sign in may auto-sync)
- Configure specialized applications
- Restore any saved settings

**Phase 5: Verification**
- Test email send/receive
- Verify all photos accessible
- Test specialized applications
- Confirm settings match

**Timeline:** Allocate 4-6 hours for a migration this size

---

### Scenario 3: Critical App Doesn't Work Post-Upgrade

**Options in order of preference:**

1. **Roll back to Windows 10 (if within 10 days)**
   - Settings → System → Recovery → "Go back"
   - Immediate solution
   - Buys time for application update

2. **Compatibility mode**
   - Right-click application → Properties → Compatibility
   - Try Windows 10 compatibility mode
   - May or may not work

3. **Virtual machine**
   - Install Hyper-V or VirtualBox
   - Create Windows 10 VM
   - Run application in VM
   - Requires Pro edition for Hyper-V

4. **Reinstall Windows 10 (if past rollback window)**
   - Clean install Windows 10
   - Restore from backup
   - Stay on Windows 10 until app is compatible

5. **Dual boot**
   - Shrink Windows 11 partition
   - Install Windows 10 alongside
   - Boot to Windows 10 when needed
   - Temporary solution

**Recommended:** If within rollback window and app is critical, roll back immediately. Plan proper upgrade for when app is ready.

---

### Scenario 4: Problematic Quality Update

**Handling across organization:**

1. **Assess impact:**
   - How many users affected?
   - What are the symptoms?
   - Is it consistent or intermittent?

2. **Confirm the update is the cause:**
   - Check Update History on affected machines
   - Compare to unaffected machines
   - Search Microsoft known issues

3. **Immediate response:**
   - Pause Windows Updates on unaffected machines
   - Uninstall update on affected machines:
     - Settings → Windows Update → Update history → Uninstall updates
     - Or: `wusa /uninstall /kb:5001234 /quiet`

4. **Prevent re-installation:**
   - Use "Show or hide updates" tool from Microsoft
   - WSUS: Decline the update
   - Group Policy: Pause updates

5. **Monitor for fix:**
   - Watch for Microsoft acknowledgment
   - Watch for updated version of the patch
   - Subscribe to Windows release health dashboard

6. **Document:**
   - Record affected KB number
   - Document symptoms
   - Note workaround applied
   - Track when Microsoft releases fix

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 WINDOWS UPGRADE/MIGRATION QUICK REFERENCE                  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  UPDATE TYPES                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Quality Updates  → Security/bug fixes, monthly (Patch Tuesday)           ║
║  Feature Updates  → New features, annually (Windows 10: bi-annual)        ║
║  Driver Updates   → Hardware drivers via Windows Update                   ║
║  Definition       → Antivirus signatures, daily                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  UPGRADE PATHS (VALID)                                                     ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Windows 10 Home → Windows 10 Pro (product key or Store)                  ║
║  Windows 10 Home → Windows 11 Home (if hardware compatible)               ║
║  Windows 10 Pro  → Windows 11 Pro (if hardware compatible)                ║
║  Windows 11 Home → Windows 11 Pro (product key or Store)                  ║
║  NOT VALID: 32-bit → Windows 11, Downgrade editions                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  ROLLBACK OPTIONS                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  "Go back to Windows 10" → 10 days by default (extendable to 60)          ║
║  Windows.old folder      → Contains previous Windows installation         ║
║  Reset this PC           → Reinstall current version                      ║
║  System Restore          → If restore point exists pre-upgrade            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  USER DATA LOCATIONS                                                       ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Documents: %userprofile%\Documents                                        ║
║  Desktop:   %userprofile%\Desktop                                          ║
║  AppData:   %userprofile%\AppData (Roaming, Local, LocalLow)              ║
║  Outlook:   %localappdata%\Microsoft\Outlook                               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  MIGRATION TOOLS                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Built-in: File History, OneDrive, manual copy                            ║
║  Microsoft: USMT (ScanState/LoadState) - enterprise                       ║
║  Third-party: PCmover, Zinstall, Transwiz                                 ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PRE-UPGRADE CHECKLIST                                                     ║
║  ─────────────────────────────────────────────────────────────────────────║
║  □ Verify hardware compatibility     □ Backup important files             ║
║  □ Note installed applications       □ Export browser data                ║
║  □ Save product keys                 □ Update current Windows             ║
║  □ Check application compatibility   □ Have recovery media ready          ║
╚═══════════════════════════════════════════════════════════════════════════╝
```