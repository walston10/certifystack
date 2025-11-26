# Lesson 40: Windows Upgrade and Migration

**Estimated Time:** 25-30 minutes  
**Domain:** Operating Systems (Domain 1.0 - 31% of exam)  
**Exam Objectives Covered:** 1.10 - Identify common features and tools of the Microsoft Windows OS (Upgrade paths and considerations)

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Identify valid Windows upgrade paths and which versions can upgrade to which
- Perform edition upgrades (Home to Pro, Pro to Enterprise)
- Execute in-place upgrades while preserving user data and applications
- Verify upgrade compatibility using tools like PC Health Check
- Understand Windows Update types (feature updates vs. quality updates)
- Configure Windows Update for Business for controlled deployments
- Migrate user data between computers safely
- Use Windows Easy Transfer alternatives (cloud storage, file copying, third-party tools)
- Perform post-upgrade verification and testing
- Roll back failed upgrades to previous Windows version
- Troubleshoot common upgrade failures and compatibility issues
- Manage driver updates during and after upgrades

---

## Video Resources

Before diving in, check out these excellent video tutorials:

1. **Professor Messer - "Windows Upgrades"** (CompTIA A+ 220-1102)  
   [https://www.professormesser.com](https://www.professormesser.com) - Upgrade paths and procedures

2. **PowerCert Animated Videos - "Upgrading to Windows 11"**  
   [https://www.youtube.com/c/PowerCertAnimatedVideos](https://www.youtube.com/c/PowerCertAnimatedVideos) - Visual upgrade guide

3. **Britec09 - "Windows 11 Upgrade Troubleshooting"**  
   [https://www.youtube.com/user/Britec09](https://www.youtube.com/user/Britec09) - Fixing upgrade problems

4. **Chris Titus Tech - "Data Migration Best Practices"**  
   [https://www.youtube.com/c/ChrisTitusTech](https://www.youtube.com/c/ChrisTitusTech) - User data transfer methods

---

## Introduction

The email lands in Maria's inbox at 8 AM: "Corporate mandate: All 500 workstations must upgrade from Windows 10 to Windows 11 by end of quarter. Minimize disruption to business operations."

Her mind races. Five hundred computers. Hundreds of critical applications. Years of user data. Different hardware configurations—some probably don't even meet Windows 11 requirements. Users who panic at the slightest desktop wallpaper change, let alone an entirely new operating system.

She could do clean installations—wipe everything, start fresh. But that means backing up and restoring 500 computers' worth of data. Reinstalling hundreds of applications. Reconfiguring settings. Testing everything. Users losing productivity for days. The thought is exhausting.

Or... she could do in-place upgrades. Preserve everything—files, applications, settings. Test compatibility first. Deploy in phases. Roll back if problems occur. Users wake up with Windows 11 but their files and programs exactly where they left them.

Three months later, all 500 computers run Windows 11. Only 12 needed clean installations due to hardware issues. The rest upgraded seamlessly. Users barely noticed the transition. Zero data loss. Minimal downtime.

**The difference?** Understanding upgrade paths, compatibility checking, migration strategies, and when to upgrade versus when to clean install.

Upgrades aren't just "clicking the update button and hoping for the best." Professional upgrades require planning, testing, compatibility verification, rollback strategies, and systematic deployment. Whether upgrading one home computer or an entire enterprise, the principles remain the same: minimize risk, preserve data, ensure compatibility, and have a backup plan.

In this lesson, you'll master Windows upgrades and migrations—from determining valid upgrade paths to executing in-place upgrades, migrating user data, managing Windows Update, rolling back failed upgrades, and troubleshooting common problems. You'll learn to upgrade systems efficiently while protecting data and maintaining productivity.

Let's transform upgrade anxiety into upgrade confidence.

---

## Windows Upgrade Paths: What Can Upgrade to What?

Not all Windows versions can upgrade to all other versions. Microsoft defines **supported upgrade paths**—combinations that preserve files and applications without requiring clean installation.

### Windows 10 to Windows 11 Upgrade Paths

**Supported in-place upgrades (preserve files and apps):**

| From Windows 10 | To Windows 11 |
|----------------|---------------|
| Home | Home |
| Pro | Pro |
| Pro for Workstations | Pro for Workstations |
| Enterprise | Enterprise |
| Education | Education |

**Key rules:**
- Home can only upgrade to Home (not to Pro)
- Pro can only upgrade to Pro (not to Enterprise)
- Enterprise to Enterprise only
- **Cannot upgrade editions during version upgrade** (must upgrade edition first in Windows 10, then upgrade to Windows 11)

**Architecture requirements:**
- Only 64-bit Windows 10 → Windows 11 (no 32-bit Windows 11 exists)
- 32-bit Windows 10 users must clean install 64-bit Windows 11 (cannot upgrade in-place)

### Windows 7/8.1 to Windows 10/11

**Windows 7 → Windows 10:**
- Supported upgrade paths existed until Windows 7 end-of-life (January 2020)
- In-place upgrade preserved files but NOT applications
- Now requires clean installation (Windows 7 too old)

**Windows 8.1 → Windows 10:**
- Supported in-place upgrade
- Preserves files and applications
- Still technically possible but uncommon (Windows 8.1 reached end-of-life October 2023)

**Windows 7/8.1 → Windows 11:**
- **No direct upgrade path**
- Must upgrade to Windows 10 first, then Windows 11
- Or perform clean installation of Windows 11

**Practical reality:** For computers running Windows 7/8.1, clean installation is recommended rather than attempting multi-step upgrades. Too much has changed—driver compatibility issues, application incompatibilities, and potential performance problems make clean installation safer.

### Cross-Edition Limitations

**Cannot upgrade between fundamentally different editions:**
- Home ≠ Pro ≠ Enterprise
- Must match edition (or upgrade edition separately first)

**Example invalid path:**
- Windows 10 Home → Windows 11 Pro = **NOT SUPPORTED as in-place upgrade**
- Must: Upgrade Windows 10 Home → Windows 10 Pro, THEN upgrade to Windows 11 Pro
- Or: Clean install Windows 11 Pro

🎯 **Exam Tip:** Know that in-place upgrades must match editions (Home→Home, Pro→Pro). Cannot change editions during version upgrade. 32-bit cannot upgrade to 64-bit.

---

## Edition Upgrades: Home to Pro, Pro to Enterprise

**Edition upgrades** change Windows edition (Home → Pro, Pro → Enterprise) within the same Windows version (Windows 10 or Windows 11).

### Why Upgrade Editions?

**Windows 10/11 Home limitations:**
- No domain join (cannot join Active Directory)
- No Group Policy management
- No Remote Desktop host (can only connect out, not accept connections)
- No BitLocker (full disk encryption)
- No Hyper-V (virtualization)
- Limited Windows Update control

**Windows 10/11 Pro adds:**
- Domain join capability
- Group Policy
- Remote Desktop host
- BitLocker encryption
- Hyper-V virtualization
- Windows Update for Business
- Assigned Access (kiosk mode)

**Windows 10/11 Enterprise adds (over Pro):**
- Advanced threat protection
- Credential Guard
- Device Guard
- AppLocker (application whitelisting)
- BranchCache
- DirectAccess
- Windows To Go (discontinued in 20H1)

### Performing Edition Upgrade

**Method 1: Activation Key (Digital License)**
1. Purchase Windows Pro upgrade license
2. Settings → Update & Security → Activation
3. "Change product key"
4. Enter Pro key
5. Click "Next"
6. Windows downloads necessary files
7. Upgrade completes (no reinstallation needed)
8. Computer restarts
9. Now running Pro edition with all files/apps preserved

**Method 2: Microsoft Store**
1. Open Microsoft Store
2. Search "Windows 10/11 Pro"
3. Purchase upgrade
4. Digital license activates automatically
5. Settings → Update → "Upgrade to Windows Pro"
6. Restart completes upgrade

**Method 3: Command Line (with valid key)**
```
DISM /online /Set-Edition:Professional /ProductKey:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX /AcceptEula
```

**Time required:** 10-30 minutes depending on computer speed. All files, applications, and settings preserved.

**No data loss** during edition upgrades—it's essentially activating features already present in Windows but locked until proper license applied.

🎯 **Exam Tip:** Edition upgrades (Home to Pro) preserve all data and only require product key. No reinstallation needed. Happens within same Windows version.

---

## In-Place Upgrade Process: Step by Step

**In-place upgrade** installs newer Windows over existing installation while preserving files, applications, and settings.

### Pre-Upgrade Preparation

**1. Verify Hardware Compatibility**

Run **PC Health Check** (for Windows 11):
- Download from Microsoft
- Checks TPM 2.0, UEFI, Secure Boot, CPU compatibility
- Identifies specific blockers
- Fix issues before attempting upgrade

Common blockers:
- TPM disabled (enable in UEFI)
- Secure Boot disabled (enable in UEFI)
- CPU not on supported list (no workaround except clean install or stay on Windows 10)
- Insufficient storage (need 64 GB free)

**2. Backup Critical Data**

Even though in-place upgrades preserve data, **always backup first**:
- User files (Documents, Desktop, Pictures, etc.)
- Application data (browser bookmarks, email, saved games)
- Custom configurations

Backup methods:
- External hard drive
- Cloud storage (OneDrive, Google Drive, Dropbox)
- Network share
- System image (full backup)

**3. Update Everything**

Before upgrading:
- Install all Windows Updates (Settings → Windows Update)
- Update drivers (especially graphics, chipset, network)
- Update BIOS/UEFI firmware (check manufacturer website)
- Update major applications

Reduces compatibility issues during upgrade.

**4. Disconnect Unnecessary Peripherals**

Remove:
- USB drives (except installation media if using)
- External hard drives
- Printers
- Webcams
- Card readers
- Secondary monitors (optional, but reduces problems)

Keep only keyboard, mouse, network connection, and display.

**5. Disable Security Software Temporarily**

Third-party antivirus can interfere with upgrade:
- Temporarily disable antivirus
- Don't uninstall (can re-enable after)
- Windows Defender takes over automatically

**6. Free Up Disk Space**

Windows 11 upgrade requires:
- 64 GB available space minimum
- More recommended (20+ GB for working room)

Free space:
- Disk Cleanup → Previous Windows installations, Temporary files
- Uninstall unused applications
- Move large files to external drive
- Empty Recycle Bin

### Upgrade Execution

**Method 1: Windows Update (Recommended for most users)**

1. Settings → Windows Update
2. "Check for updates"
3. If computer eligible, "Download and install" Windows 11 appears
4. Click to begin download
5. Windows downloads upgrade files (6-8 GB)
6. "Ready to install" appears
7. Click "Install"
8. Computer restarts multiple times
9. Upgrade completes (30-60 minutes typical)

**Method 2: Installation Assistant (If Windows Update doesn't offer upgrade)**

1. Download "Windows 11 Installation Assistant" from Microsoft
2. Run as administrator
3. Tool checks compatibility
4. Click "Accept and Install"
5. Downloads Windows 11
6. Upgrade begins automatically
7. Multiple restarts
8. Completes upgrade

**Method 3: Media Creation Tool (Most control)**

1. Download Windows 11 Media Creation Tool
2. Create USB installation media OR download ISO
3. If ISO: Mount ISO (double-click in Windows 10)
4. Run setup.exe from mounted ISO
5. Choose "Upgrade this PC now"
6. "Keep personal files and apps"
7. Upgrade proceeds

**During Upgrade:**
- Computer restarts 3-5 times (normal)
- Progress shown on screen
- Don't force shutdown (can corrupt installation)
- Process takes 30-90 minutes depending on hardware

### Post-Upgrade Verification

**Immediately after upgrade:**

1. **Check for updates**
   - Settings → Windows Update
   - Install any pending updates
   - Restart if required

2. **Verify applications**
   - Launch critical applications
   - Confirm they work properly
   - Check for application updates

3. **Test hardware**
   - Printers
   - Scanners
   - Webcam
   - Audio devices
   - External drives

4. **Update drivers**
   - Device Manager → check for driver issues (yellow exclamation marks)
   - Update outdated drivers
   - Visit manufacturer websites for latest drivers

5. **Verify data integrity**
   - Check Documents, Desktop, Pictures folders
   - Confirm files accessible
   - Test opening various file types

6. **Check activation**
   - Settings → Update & Security → Activation
   - Should show "Windows is activated with a digital license"

7. **Review settings**
   - Privacy settings may reset to defaults
   - Default programs may change
   - Review and reconfigure as needed

**Keep Windows.old folder** for 10 days minimum as safety net. If problems arise, can roll back.

---

## Windows Update: Types and Management

Windows delivers two types of updates with different purposes and frequencies.

### Quality Updates (Monthly)

**Also called:** Security updates, cumulative updates

**Purpose:**
- Security patches
- Bug fixes
- Performance improvements
- Driver updates

**Frequency:** Monthly (Patch Tuesday - second Tuesday of each month)

**Size:** Typically 100-500 MB

**Installation:**
- Usually quick (5-15 minutes)
- Single restart required
- Should install promptly (security-critical)

**Naming:** KB followed by number (e.g., KB5012345)

### Feature Updates (Twice Yearly)

**Also called:** Version updates, major updates

**Purpose:**
- New features and capabilities
- UI changes
- Major improvements
- Significant system changes

**Frequency:** Twice per year (typically spring and fall)

**Size:** 3-6 GB

**Installation:**
- Lengthy (30-90 minutes)
- Multiple restarts
- Essentially mini-upgrade
- Can defer if stability preferred

**Naming:** Year + H1/H2 (e.g., Windows 10 21H2, Windows 11 22H2)

**Support lifecycle:**
- Home/Pro: 18-24 months support per version
- Enterprise: 30-36 months support per version
- Must upgrade to newer feature update before support ends

🎯 **Exam Tip:** Quality updates = monthly security/bug fixes (install immediately). Feature updates = twice yearly major updates (can defer for stability).

### Windows Update for Business

**Windows Update for Business** provides IT control over update deployment in organizations:

**Deferral policies:**
- Defer quality updates up to 30 days
- Defer feature updates up to 365 days
- Allows testing before wide deployment

**Deployment rings:**
- **Preview ring:** IT/test users get updates first (immediate)
- **Broad ring:** General deployment after testing (7-14 days later)
- **Targeted ring:** Critical systems last (30+ days later)

**Configuration:**
- Group Policy (domain environments)
- Settings → Windows Update → Advanced options (standalone)
- Intune/MDM (cloud management)

**Pause updates:**
- Temporarily stop updates (up to 35 days)
- Useful during critical business periods
- Updates resume automatically after pause period

**Active Hours:**
- Tell Windows when you typically work (e.g., 8 AM - 6 PM)
- Windows won't restart for updates during active hours
- Prevents disruption during business hours

**Real-world scenario:** Company deploys feature update to 10 IT staff first (preview ring). After 1 week of testing, no major issues found. Deploy to 100 early adopters (broad ring). After 2 more weeks, deploy to remaining 400 users (targeted ring). Staged deployment minimizes risk.

---

## User Data Migration: Moving to New Computer

When replacing computers, users need their files, settings, and configurations on the new system.

### Migration Planning

**What to migrate:**
- User files (Documents, Desktop, Pictures, Videos, Music, Downloads)
- Browser bookmarks and saved passwords
- Email (local PST/OST files if using Outlook)
- Application settings and data
- Desktop backgrounds and personalization
- Network drive mappings
- Printer configurations
- Custom fonts

**What NOT to migrate:**
- Applications themselves (must reinstall on new computer)
- System files (incompatible between computers)
- Temporary files
- Cache files
- Corrupted or infected files

### Migration Methods

**Method 1: Cloud Storage (Easiest)**

**OneDrive, Google Drive, Dropbox:**
1. Old computer: Sync files to cloud
2. Wait for complete upload
3. New computer: Install sync client
4. Sign in with same account
5. Files download automatically

**Advantages:**
- No physical transfer needed
- Works across any distance
- Automatic sync keeps files updated
- Accessible from anywhere

**Disadvantages:**
- Requires internet connection
- Limited by cloud storage capacity (free tiers: 5-15 GB)
- Slow for large amounts of data

**Method 2: External Hard Drive (Most Common)**

1. Connect external drive to old computer
2. Copy user folders to drive:
   - Documents
   - Desktop
   - Pictures
   - Downloads
   - Videos
   - Music
3. Export browser bookmarks (Bookmarks → Export)
4. Export email if using local storage
5. Disconnect drive
6. Connect to new computer
7. Copy folders to new computer's user directory
8. Import bookmarks
9. Configure email

**Advantages:**
- Fast (USB 3.0 very quick)
- No internet required
- Works with large data amounts
- Complete control

**Disadvantages:**
- Requires physical drive
- Manual process (must remember everything)
- Drive could fail during transfer

**Method 3: Network Transfer**

1. Share folder on old computer:
   - Right-click folder → Give access to → Specific people → Everyone
2. From new computer:
   - Open File Explorer
   - Enter: `\\OLD-COMPUTER-NAME\SharedFolder`
3. Copy files across network
4. Alternatively: Use network drive/NAS as intermediate storage

**Advantages:**
- No external drive needed
- Both computers can remain in place

**Disadvantages:**
- Requires both computers on same network
- Slow on Wi-Fi (use Ethernet if possible)
- Network issues can interrupt transfer

**Method 4: Windows Easy Transfer (Legacy - Windows 7/8 only)**

Built-in Windows tool for migration:
- Wizard-based
- Created transfer file or direct network transfer
- **Discontinued in Windows 10** (no longer available)

**Modern alternatives:**
- PCmover (commercial, paid)
- Laplink
- Zinstall
- Manual methods above

**Method 5: System Image for Identical Hardware**

If replacing with identical computer model:
- Create system image of old computer
- Restore to new computer
- Everything transfers (OS, apps, files, settings)

**Requirements:**
- New computer must have identical or very similar hardware
- Ideally same model
- Not practical for different computer models (driver issues)

### Browser Migration

**Bookmarks:**
- Chrome/Edge: Settings → Bookmarks → Export (creates HTML file)
- Firefox: Bookmarks → Show All Bookmarks → Import and Backup → Export
- Import on new computer: Same location → Import

**Passwords:**
- Chrome/Edge: Synced with Google/Microsoft account (sign in on new computer, sync automatically)
- Firefox: Firefox Sync account
- Or export with password manager (LastPass, 1Password, Bitwarden)

**Extensions:**
- Usually tied to browser account (reinstall automatically)
- Or manually reinstall from extension store

### Email Migration

**Web-based email (Gmail, Outlook.com):**
- Sign in on new computer
- Nothing to migrate (all in cloud)

**Outlook with local storage:**
- Old computer: Export PST file (File → Open & Export → Import/Export → Export to file → Personal Folders)
- Copy PST to new computer
- New computer: Import PST (File → Open & Export → Import/Export → Import from file)

**Thunderbird:**
- Copy profile folder (contains all email, settings, accounts)
- Windows: `%APPDATA%\Thunderbird\Profiles\`
- Paste to same location on new computer

🎯 **Exam Tip:** Cloud storage and external drives are most common migration methods. Know that Windows Easy Transfer no longer exists (legacy). Applications must be reinstalled, not migrated.

---

## Rollback: Undoing Failed Upgrades

If upgrade causes serious problems, Windows allows **rolling back** to previous version.

### Rollback Timeframe

**Windows keeps old installation in Windows.old folder:**
- **10 days by default** (can extend to 30 days)
- After this period, Windows.old automatically deleted
- Cannot roll back once Windows.old is removed

**Extending rollback window:**
```
DISM /Online /Set-OSUninstallPeriod /Value:30
```
Run in Command Prompt as administrator before 10 days expire.

### Performing Rollback

**Method 1: Settings**
1. Settings → System → Recovery
2. "Go back" to previous Windows version (only appears if Windows.old exists)
3. Select reason for rolling back (helps Microsoft improve)
4. Choose whether to check for updates first
5. "No, thanks" → continue rollback
6. Click "Go back to [previous Windows]"
7. Computer restarts
8. Rollback completes (10-30 minutes)
9. Boots into previous Windows version
10. All files, apps, and settings restored

**Method 2: Advanced Startup (if Windows won't boot)**
1. Boot into Windows Recovery Environment:
   - Force shutdown 3 times during Windows startup
   - Or boot from Windows installation USB → Repair your computer
2. Troubleshoot → Advanced options → Uninstall Updates
3. "Uninstall latest feature update"
4. Follow prompts
5. System rolls back

**Method 3: System Restore Point (if created before upgrade)**
1. Boot into Safe Mode or Recovery Environment
2. Advanced options → System Restore
3. Select restore point from before upgrade
4. Complete restore process

### What Rollback Preserves vs. Loses

**Preserved during rollback:**
- User files created before upgrade
- Applications installed before upgrade
- Most settings from before upgrade

**Lost during rollback:**
- Applications installed after upgrade (must reinstall)
- Settings changed after upgrade (revert to pre-upgrade state)
- Files created after upgrade remain (usually in Documents, Desktop)

**Best practice:** After upgrade, wait 2-3 days before making major changes. If problems arise, easier to roll back without losing much work.

### When Rollback Isn't Available

**Windows.old folder deleted:**
- Manually deleted
- Disk Cleanup removed it
- 10+ days passed
- Storage Sense automatically cleaned it

**Solution if cannot roll back:**
- Restore from system image backup (if created before upgrade)
- Clean install previous Windows version (lose everything, must restore from backup)
- Troubleshoot and fix upgrade issues (often easier than reinstalling)

🎯 **Exam Tip:** Rollback available for 10 days via Windows.old folder. After 10 days or if Windows.old deleted, cannot roll back through normal means. Rollback preserves data but removes changes made after upgrade.

---

## Troubleshooting Common Upgrade Failures

### "This PC Can't Run Windows 11"

**Error appears during upgrade attempt.**

**Causes:**
- TPM 2.0 disabled or absent
- Secure Boot disabled
- CPU not on supported list
- BIOS mode (Legacy) instead of UEFI
- Insufficient storage

**Solutions:**
1. **Run PC Health Check** to identify specific blocker
2. **Enable TPM:** UEFI settings → Security → TPM/PTT/fTPM → Enable
3. **Enable Secure Boot:** UEFI settings → Boot → Secure Boot → Enable (requires GPT partition and UEFI mode)
4. **Update BIOS/UEFI:** Visit manufacturer website, download latest firmware
5. **Free disk space:** Need 64 GB available (run Disk Cleanup)
6. **CPU unsupported:** No workaround for official upgrade (stay on Windows 10 or clean install with bypass methods)

### Upgrade Gets Stuck at Percentage

**Common stuck points:** 0%, 35%, 62%, 99%

**Causes:**
- Windows Update service issues
- Corrupted download
- Antivirus interference
- Driver incompatibility
- Insufficient RAM/storage

**Solutions:**
1. **Wait:** Sometimes appears stuck but is progressing (especially at 99%)—wait 2-3 hours
2. **Force restart:** If truly stuck for 4+ hours, hold power button 10 seconds, restart, Windows attempts to recover
3. **Disconnect peripherals:** Unplug all USB devices except keyboard/mouse
4. **Disable antivirus:** Temporarily disable third-party security software
5. **Run Windows Update Troubleshooter:** Settings → Troubleshoot → Windows Update
6. **Clear Windows Update cache:**
   ```
   net stop wuauserv
   net stop bits
   rd /s /q C:\Windows\SoftwareDistribution
   net start wuauserv
   net start bits
   ```
7. **Attempt upgrade again:** Often succeeds on second try after cleanup

### Blue Screen (BSOD) During Upgrade

**STOP code appears during upgrade installation.**

**Common codes:**
- DRIVER_IRQL_NOT_LESS_OR_EQUAL
- PAGE_FAULT_IN_NONPAGED_AREA
- SYSTEM_SERVICE_EXCEPTION
- KMODE_EXCEPTION_NOT_HANDLED

**Causes:**
- Incompatible drivers (especially graphics, chipset, storage)
- Hardware failure (RAM, storage drive)
- Corrupted system files

**Solutions:**
1. **Update all drivers** before attempting upgrade (graphics, chipset, storage controller)
2. **Remove discrete graphics card** temporarily, use integrated graphics for upgrade
3. **Test RAM:** Windows Memory Diagnostic or Memtest86
4. **Test storage drive:** chkdsk /f /r or manufacturer diagnostic tool
5. **Boot Safe Mode:** Attempt upgrade from Safe Mode
6. **Perform clean boot:** Disable all startup programs and services, retry upgrade

### Upgrade Succeeds but Computer Slow

**Windows 11 installed but performance degraded.**

**Causes:**
- Outdated drivers (especially graphics)
- Background processes from Windows 10
- Incompatible applications
- Windows Search indexing (temporary after upgrade)
- Antivirus full scan running
- Windows Update downloading additional updates

**Solutions:**
1. **Wait 24-48 hours:** Initial indexing and optimization processes complete
2. **Update all drivers:** Device Manager → Update drivers, visit manufacturer websites
3. **Check Task Manager:** Identify processes consuming resources (Ctrl+Shift+Esc → Processes tab)
4. **Disable startup programs:** Task Manager → Startup → Disable unnecessary items
5. **Run Disk Cleanup:** Delete temporary files, previous Windows installation (Windows.old)
6. **Check for updates:** Settings → Windows Update → Install pending updates
7. **Reset Windows Update cache:** Clear and rebuild (commands above)

### Applications Don't Work After Upgrade

**Programs crash, won't launch, or behave incorrectly.**

**Causes:**
- Application incompatible with Windows 11
- Application requires specific drivers no longer installed
- Permissions changed during upgrade
- Application needs update

**Solutions:**
1. **Check for application updates:** Many developers released Windows 11 compatibility updates
2. **Run in compatibility mode:** Right-click .exe → Properties → Compatibility → Run in compatibility mode → Windows 10
3. **Run as administrator:** Right-click → Run as administrator
4. **Reinstall application:** Uninstall completely, reinstall latest version
5. **Contact vendor:** Check if Windows 11 version available
6. **Use alternative software:** If application truly incompatible, find replacement

### Files or Settings Missing After Upgrade

**User reports missing files, settings, or configurations.**

**Causes:**
- Upgrade didn't preserve everything (unusual but possible)
- User looking in wrong location
- Files moved to Windows.old folder
- Profile corruption
- OneDrive Files On-Demand (files appear missing but are in cloud)

**Solutions:**
1. **Check Windows.old folder:** Files might be in `C:\Windows.old\Users\[Username]\`
2. **Copy from Windows.old:**
   - Navigate to old profile location
   - Copy files back to current user profile
3. **Check OneDrive:** Files might be cloud-only (download as needed)
4. **Search computer:** Windows Search → full computer search for file names
5. **Restore from backup:** If created before upgrade
6. **Check other user profiles:** Old profile might exist separately

---

## Best Practices for Successful Upgrades

### Pre-Upgrade Checklist

- ☑ Verify hardware compatibility (PC Health Check)
- ☑ Backup all important data (external drive + cloud)
- ☑ Update BIOS/UEFI firmware
- ☑ Install all Windows Updates
- ☑ Update drivers (graphics, chipset, network, storage)
- ☑ Ensure 64 GB+ free disk space
- ☑ Disconnect unnecessary peripherals
- ☑ Disable third-party antivirus temporarily
- ☑ Create system restore point (if available)
- ☑ Document current settings (screenshot network settings, etc.)

### During Upgrade

- ☑ Plug laptop into power (don't rely on battery)
- ☑ Ensure stable internet connection
- ☑ Don't interrupt process (even if appears stuck - wait 4+ hours before intervening)
- ☑ Allow multiple automatic restarts
- ☑ Don't use computer during upgrade

### Post-Upgrade Checklist

- ☑ Install all Windows Updates immediately
- ☑ Update drivers through Device Manager and manufacturer websites
- ☑ Test all critical applications
- ☑ Test all hardware (printers, scanners, cameras)
- ☑ Verify internet connectivity and network resources
- ☑ Check activation status
- ☑ Review privacy settings
- ☑ Confirm default programs set correctly
- ☑ Test external devices (USB drives, external monitors)
- ☑ Monitor performance for 2-3 days
- ☑ Keep Windows.old for 10+ days as safety net
- ☑ Document any issues encountered (for future upgrades)

### Rollout Strategy for Enterprises

**Phase 1: Pilot (Week 1)**
- 5-10 users from IT department
- Test critical applications and workflows
- Document issues and solutions

**Phase 2: Early Adopters (Weeks 2-3)**
- 50-100 technically-savvy users
- Variety of departments
- Gather feedback
- Refine deployment process

**Phase 3: Broad Deployment (Weeks 4-8)**
- Deploy to all compatible computers
- Schedule in waves (50-100 per week)
- Provide user support and training
- Monitor helpdesk tickets for issues

**Phase 4: Stragglers (Weeks 9-12)**
- Users who were out of office
- Computers requiring hardware upgrades
- Systems with special requirements
- Clean installations for incompatible computers

---

## Key Exam Tips

🎯 **Upgrade Paths:** Windows 10 Home → Windows 11 Home, Pro → Pro. Cannot change editions during upgrade. No 32-bit Windows 11.

🎯 **Edition Upgrades:** Home to Pro requires product key only—no reinstallation. Activates locked features already present.

🎯 **In-Place Upgrade:** Preserves files and applications. Preferable to clean install when possible (saves time and data).

🎯 **Quality vs. Feature Updates:** Quality = monthly security patches (install immediately). Feature = twice yearly major updates (can defer).

🎯 **Windows Update for Business:** Allows deferrals (quality: 30 days, feature: 365 days), deployment rings, active hours.

🎯 **User Data Migration:** Cloud storage (easiest), external drive (most common), network transfer. Applications must be reinstalled, not migrated.

🎯 **Windows Easy Transfer:** Legacy tool discontinued in Windows 10. No longer available—use manual methods or third-party tools.

🎯 **Rollback:** Available for 10 days via Windows.old folder. Preserves data but removes post-upgrade changes. Cannot roll back after Windows.old deleted.

🎯 **Windows.old:** Contains previous Windows installation. Allows rollback. Takes 10-20 GB space. Auto-deleted after 10 days or manually via Disk Cleanup.

🎯 **Common Issues:** TPM/Secure Boot disabled, insufficient storage, incompatible drivers, antivirus interference, stuck at percentage.

🎯 **Windows 11 Requirements:** TPM 2.0, UEFI, Secure Boot, 64-bit, approved CPU. PC Health Check identifies blockers.

🎯 **Post-Upgrade:** Update drivers immediately, install Windows Updates, verify applications work, keep Windows.old for 10 days minimum.

---

## Key Takeaways

✅ Valid upgrade paths must match editions—Home to Home, Pro to Pro, cannot cross editions during version upgrade

✅ Edition upgrades (Home → Pro) require only product key and preserve all data—no reinstallation needed

✅ In-place upgrades preserve files and applications, making them preferable to clean installations when possible

✅ Always backup data before upgrading—even in-place upgrades can fail catastrophically

✅ Windows 11 has strict requirements: TPM 2.0, UEFI, Secure Boot, 64-bit—verify with PC Health Check before attempting

✅ Quality updates (monthly security patches) should install immediately; feature updates (twice yearly) can be deferred for stability

✅ Windows Update for Business provides enterprise control over update deployment with deferrals and deployment rings

✅ User data migration uses cloud storage, external drives, or network transfers—applications must be reinstalled, not migrated

✅ Windows Easy Transfer is discontinued—no longer available in Windows 10/11, use manual or third-party migration methods

✅ Rollback to previous Windows available for 10 days via Windows.old folder, preserving user data but removing post-upgrade changes

✅ Windows.old folder enables rollback but consumes 10-20 GB—auto-deleted after 10 days unless extended

✅ Common upgrade failures include missing TPM/Secure Boot, insufficient storage, incompatible drivers, and antivirus interference

✅ Post-upgrade verification includes updating drivers, testing applications, checking activation, and monitoring performance

✅ Enterprise rollout strategy uses phased deployment: pilot (IT), early adopters (tech-savvy), broad deployment (all users)

✅ Update all drivers, BIOS/UEFI, and Windows Updates before attempting upgrade to maximize success rate

---

## Check Your Understanding

Test your knowledge with these scenario-based questions:

**1. A user wants to upgrade from Windows 10 Home to Windows 11 Pro in one step. What's the correct procedure?**

<details>
<summary>Show Answer</summary>
<strong>Cannot upgrade directly—must perform edition upgrade FIRST (Windows 10 Home → Pro), THEN version upgrade (Windows 10 Pro → Windows 11 Pro).</strong> Procedure: 1) Purchase Windows 10 Pro license/product key, 2) Settings → Update & Security → Activation → Change product key → Enter Pro key, 3) Edition upgrades automatically (10-30 minutes, all data preserved), 4) Verify Windows 10 Pro activated, 5) Run PC Health Check to verify Windows 11 compatibility, 6) Settings → Windows Update → Check for updates, 7) Windows 11 upgrade appears if eligible, 8) Download and install Windows 11 Pro. Attempting to jump directly from Windows 10 Home to Windows 11 Pro is unsupported—Windows Update won't offer Windows 11 Pro to Home edition users. The upgrade path must match editions: Home→Home or Pro→Pro. This two-step process ensures proper licensing and compatibility.
</details>

**2. Three days after upgrading to Windows 11, a user experiences critical application incompatibility. How can they revert to Windows 10?**

<details>
<summary>Show Answer</summary>
<strong>Use built-in rollback feature via Settings → System → Recovery → "Go back to Windows 10."</strong> This option appears for 10 days after upgrade (assuming Windows.old folder hasn't been deleted). Process: 1) Settings → System → Recovery, 2) Click "Go back" under Recovery options, 3) Select reason for rollback (feedback for Microsoft), 4) Choose whether to check for updates first (select "No, thanks"), 5) Review what to expect (lose post-upgrade changes), 6) Click "Go back to Windows 10", 7) Computer restarts and begins rollback (10-30 minutes), 8) System restored to Windows 10 with all files and applications from before upgrade intact. Important: Applications installed AFTER upgrade must be reinstalled. Settings changed AFTER upgrade revert to pre-upgrade state. Files created after upgrade remain but might be in unexpected locations. After rollback, disable automatic Windows 11 upgrade temporarily while investigating application compatibility solutions.
</details>

**3. An organization needs to defer Windows 11 feature updates for 6 months to allow extensive testing. Quality updates should install within 7 days. How do they configure this?**

<details>
<summary>Show Answer</summary>
<strong>Use Windows Update for Business settings: defer feature updates 180 days, defer quality updates 7 days.</strong> Configuration (domain environment via Group Policy): 1) Group Policy Management → Computer Configuration → Administrative Templates → Windows Components → Windows Update → Windows Update for Business, 2) "Select when Preview Builds and Feature Updates are received" → Enable → Defer period: 180 days, 3) "Select when Quality Updates are received" → Enable → Defer period: 7 days, 4) Apply policy to appropriate OUs. For standalone computers (Windows Pro): Settings → Windows Update → Advanced options → Feature update deferral: 365 days maximum (set to 180), Quality update deferral: 30 days maximum (set to 7). This strategy allows security patches (quality updates) to deploy quickly while giving six months for application compatibility testing before deploying major feature updates. Enterprise editions can defer feature updates up to 365 days; quality updates up to 30 days maximum. Staged rollout recommended: pilot group gets updates immediately, broad deployment after deferral period.
</details>

**4. A user upgraded to Windows 11 two weeks ago. They now want to roll back but the "Go back" option is grayed out. Why, and what are their options?**

<details>
<summary>Show Answer</summary>
<strong>Windows.old folder was deleted (automatically after 10 days or manually via Disk Cleanup), making built-in rollback impossible.</strong> The rollback window expired or user/Storage Sense deleted Windows.old to free space. Options now: 1) **System Image Restore** (if system image backup was created before upgrade): Boot from Windows installation media → Repair → System Image Recovery → Restore from backup. Reverts entire system to pre-upgrade state, 2) **Clean Install Windows 10**: Download Windows 10 ISO from Microsoft, create installation media, perform clean installation (loses all data—restore from backup afterward), 3) **Troubleshoot and fix Windows 11 issues**: Often easier than reinstalling—identify specific problem (incompatible application, driver issue, setting), resolve individually rather than complete rollback. Prevention: Extend rollback window BEFORE it expires: `DISM /Online /Set-OSUninstallPeriod /Value:30` (extends to 30 days maximum). Don't use Disk Cleanup or Storage Sense to clean system immediately after upgrade—wait until certain upgrade is stable.
</details>

**5. After upgrading to Windows 11, a user's printer doesn't work. Device Manager shows driver with yellow exclamation mark. What's the solution?**

<details>
<summary>Show Answer</summary>
<strong>Update printer driver to Windows 11-compatible version from manufacturer's website.</strong> Steps: 1) Identify exact printer model, 2) Visit printer manufacturer's website (HP, Canon, Epson, Brother, etc.), 3) Navigate to support/drivers section, 4) Select printer model, 5) Download Windows 11 driver (if available), 6) Run driver installer, 7) Restart computer if prompted, 8) Test printer functionality. If Windows 11-specific driver unavailable: Try Windows 10 driver (often compatible), use "Update driver" in Device Manager → Search automatically (Windows Update may have driver), use Windows 11's built-in drivers (often work for common printers). Alternative: Remove printer completely (Settings → Printers), restart, re-add printer → Windows automatically finds and installs best available driver. For network printers: Verify printer is online and accessible, check network connection. Many printer manufacturers delayed Windows 11 driver releases—if no driver available, consider: using Windows 10 compatibility mode, waiting for manufacturer driver release, or replacing very old printer (manufacturers often don't support 10+ year old models on new OS).
</details>

**6. You're migrating a user from old computer to new computer. They need all their files, browser bookmarks, and email. What's the most efficient method?**

<details>
<summary>Show Answer</summary>
<strong>Use OneDrive or external hard drive depending on data size; browsers sync via account; email depends on type.</strong> Recommended workflow: **For files**: If user has Office 365/Microsoft 365 with 1TB+ OneDrive storage AND reasonable internet speed: 1) Old PC: Move all files to OneDrive, wait for sync completion, 2) New PC: Sign into OneDrive, files download automatically. OR External drive method: 1) Connect external USB drive to old PC, 2) Copy Documents, Desktop, Pictures, Downloads folders to drive, 3) Disconnect, connect to new PC, 4) Copy to new PC's user folders. **For browser**: Chrome/Edge: Sign into Google/Microsoft account → bookmarks sync automatically. Firefox: Firefox Sync. Or export bookmarks as HTML, import on new computer. **For email**: Gmail/Outlook.com: Sign into web-based email (nothing to migrate). Outlook with local PST files: Export PST from old computer, copy to external drive, import on new computer. Combination approach often best: Cloud sync for documents (convenient), external drive for large media files (faster), browser account sync for bookmarks (automatic), email reconfiguration on new computer. Total migration time: 1-2 hours depending on data volume.
</details>

**7. During Windows 11 upgrade, the process gets stuck at 35% for 3 hours. What should you do?**

<details>
<summary>Show Answer</summary>
<strong>Wait an additional 1-2 hours (total 4-5 hours) as upgrades sometimes appear frozen but are progressing. If still stuck, force restart.</strong> Upgrade can genuinely take 4-6 hours on slower hardware or with large data volumes. Hard drive activity light (if present) blinking indicates progress. However, if truly stuck after 4-5 total hours: 1) Force shutdown: Press and hold power button 10 seconds until computer powers off, 2) Wait 30 seconds, 3) Power on normally, 4) Windows attempts automatic repair, may roll back upgrade automatically, may resume upgrade. After restart: If Windows 11 boots successfully: Upgrade completed despite appearing stuck. If Windows 10 boots: Upgrade failed, rolled back automatically—retry after: a) Disconnecting ALL peripherals except keyboard/mouse, b) Disabling antivirus, c) Running Windows Update Troubleshooter, d) Clearing Windows Update cache (commands provided earlier), e) Freeing additional disk space, f) Attempting upgrade again—often succeeds on second attempt. Prevention: Before upgrade, disconnect peripherals, disable antivirus, ensure 100+ GB free space (not just minimum 64 GB).
</details>

**8. A computer passes PC Health Check except for "Secure Boot is not enabled." How do you enable Secure Boot?**

<details>
<summary>Show Answer</summary>
<strong>Enable Secure Boot in UEFI settings, but first verify system uses UEFI mode and GPT partitions (prerequisites).</strong> Prerequisites check: 1) Run `msinfo32` → Check "BIOS Mode"—must show "UEFI" not "Legacy", 2) Disk Management → Right-click disk → Properties → Volumes → "Partition style" must show "GPT" not "MBR". If prerequisites met: 1) Restart computer, 2) Press BIOS/UEFI key during startup (Del, F2, F10—varies by manufacturer), 3) Navigate to "Security" or "Boot" tab (varies), 4) Find "Secure Boot" option, 5) Change from "Disabled" to "Enabled", 6) Save and exit (F10 typically), 7) Computer restarts. If prerequisites NOT met (Legacy BIOS or MBR): Must convert: a) Backup all data (conversion can fail), b) Convert MBR to GPT using MBR2GPT tool: `mbr2gpt /convert /allowFullOS`, c) Restart into UEFI settings, d) Change boot mode from Legacy to UEFI, e) Enable Secure Boot, f) Boot Windows (will start in UEFI mode). Some older computers don't support UEFI/Secure Boot—incompatible with Windows 11, must stay on Windows 10.
</details>

**9. A company has 200 computers on Windows 10 Pro. 50 need to stay on Windows 10 for application compatibility. How do you prevent automatic Windows 11 upgrade on those 50?**

<details>
<summary>Show Answer</summary>
<strong>Use Group Policy or Windows Update for Business to block Windows 11 upgrade on specific computers while allowing Windows 10 feature/quality updates.</strong> Domain environment (recommended): 1) Create OU (Organizational Unit) containing 50 computers, 2) Group Policy Management → Create new GPO → Link to OU, 3) Computer Configuration → Administrative Templates → Windows Components → Windows Update → Windows Update for Business, 4) "Select the target Feature Update version" → Enable → Target version: Windows 10, Target version: 22H2 (or current Windows 10 version), 5) Apply policy. Computers receive Windows 10 updates but won't be offered Windows 11. For standalone computers: Settings → Windows Update → Advanced options → Feature update deferral → Maximum 365 days (delays but doesn't permanently block). Registry method (more permanent): Create registry key blocking upgrades to Windows 11. Microsoft periodically releases updates to prevent organizations from staying on unsupported Windows versions indefinitely, so policies may need adjustment when Windows 10 reaches end-of-support (October 2025).
</details>

**10. After upgrading to Windows 11, the computer is significantly slower than before. Task Manager shows high disk usage (95-100%) constantly. What's likely cause and solution?**

<details>
<summary>Show Answer</summary>
<strong>Windows Search indexing or Windows Update likely running in background after upgrade—normal for 24-48 hours post-upgrade.</strong> Immediately after major upgrades, Windows performs: 1) Search indexing of all files (builds searchable database), 2) Windows Update downloading/installing additional updates, 3) Antivirus full system scan, 4) Windows Defender optimization, 5) App compatibility telemetry. These processes cause high disk usage temporarily. Solutions: **If less than 48 hours post-upgrade**: Wait and allow processes to complete—typically resolves within 24-48 hours. Monitor Task Manager to see which process consuming disk. **If persists beyond 48 hours**: 1) Identify culprit in Task Manager → Performance tab → Disk → Check which process at top, 2) Common causes: Windows Search (disable temporarily), Windows Update (pause updates), Antivirus (check scan schedule), SuperFetch/SysMain service (disable if using SSD). 3) Update all drivers especially storage controller and chipset. 4) Check drive health: Run manufacturer diagnostic tool—failing drive causes constant high usage. 5) If using HDD: Defragment drive (defrag /C /U /V), If using SSD: Run TRIM optimization. Long-term high disk usage post-upgrade often indicates driver incompatibility or failing hardware rather than Windows 11 issue itself.
</details>

---

## Before Moving to Lesson 41

Make sure you can confidently:

✅ Identify valid Windows upgrade paths between versions and editions  
✅ Perform edition upgrades (Home to Pro) using product keys  
✅ Execute in-place upgrades while preserving files and applications  
✅ Verify hardware compatibility before attempting Windows 11 upgrade  
✅ Differentiate quality updates (monthly security) from feature updates (twice yearly major)  
✅ Configure Windows Update for Business with deferrals and deployment rings  
✅ Migrate user data using cloud storage, external drives, or network transfers  
✅ Understand Windows Easy Transfer is discontinued and use modern alternatives  
✅ Perform rollback to previous Windows version within 10-day window  
✅ Troubleshoot common upgrade failures (TPM, Secure Boot, stuck upgrade, driver issues)  
✅ Complete post-upgrade verification checklist  
✅ Extend rollback window beyond default 10 days if needed  

**Study Strategy:**

1. **Virtual machine practice:** Install Windows 10 in VM, upgrade to Windows 11, experience the process firsthand. Test rollback.
2. **Check your computer:** What edition? Can it upgrade to Windows 11? Run PC Health Check.
3. **Flashcards:** Create cards for upgrade paths, differences (quality vs feature updates), rollback procedures.
4. **Professor Messer videos:** Watch upgrade sections, note common exam scenarios.
5. **Review update settings:** Explore Windows Update options on your computer—familiarize with interface.
6. **Practice migration:** Transfer files between two computers (or computer and external drive) to understand the process.

Understanding upgrades and migrations is critical for minimizing downtime and preserving productivity. Whether upgrading one home computer or 500 enterprise workstations, these principles ensure smooth transitions with minimal disruption.

---

## Coming Up in Lesson 41

**Lesson 41: Physical Security Controls**

Shifting from software to hardware security, we'll explore physical security measures protecting IT assets: badge readers and access cards, biometric authentication (fingerprint, facial recognition, retina), key fobs and smart cards, security guards and video surveillance, physical barriers (locks, mantraps, bollards, fencing), asset tracking with RFID, environmental controls (HVAC, temperature monitoring, fire suppression), data center physical security, proper asset disposal, and why physical security is the foundation of all other security measures. You'll learn that the most sophisticated cyber defenses mean nothing if someone can physically walk in and steal servers. Get ready to understand how physical security protects digital assets!

---

*"Software upgrades are the easy part—it's the planning, testing, compatibility checking, and rollback strategies that separate successful upgrades from disasters."*

---

# ✅ LESSON 40 COMPLETE!

**Progress:** 40 of 60 lessons complete (66.7%) 🎯

Outstanding work! You've mastered Windows upgrades and migrations—from understanding valid upgrade paths to executing in-place upgrades, managing Windows Update, migrating user data, and rolling back failed upgrades. These skills minimize downtime and protect user productivity during transitions. Whether upgrading one computer or deploying across an entire organization, you now have the knowledge to plan, execute, and troubleshoot successfully. Next up: physical security controls that protect all these carefully maintained systems from physical threats!