# Lab 40: Windows Upgrade and Migration

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 1.10 - Given a scenario, identify common features and tools of macOS/Linux, and perform OS installations and upgrades

---

## Section 1: Concept Check (5 min)

1. What is the difference between a feature update and a quality update in Windows? How often does each occur?

2. A user upgraded from Windows 10 to Windows 11 yesterday. Today they hate the new interface. Can they go back, and if so, for how long?

3. What happens to applications during an in-place upgrade from Windows 10 Pro to Windows 11 Pro?

4. A computer running Windows 10 Home needs to be upgraded to Windows 10 Pro (not Windows 11). What are two ways to accomplish this?

5. Before migrating a user to a new computer, what data and settings should you plan to transfer?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Windows Update Status

**Goal:** Understand your current update state.

**Step 1:** Check update status

Open Settings → Windows Update

| Property | Your Value |
|----------|------------|
| Windows version | |
| Last checked for updates | |
| Pending updates | |
| Active hours configured | |
| Pause updates available? | |

**Step 2:** View update history

Click "Update history"

| Update Type | Count | Most Recent |
|-------------|-------|-------------|
| Feature updates | | |
| Quality updates | | |
| Driver updates | | |
| Definition updates | | |
| Other updates | | |

**Step 3:** Installed updates detail

List the 3 most recent quality updates:

| KB Number | Install Date | Status |
|-----------|--------------|--------|
| | | |
| | | |
| | | |

---

#### Activity B: Upgrade Paths Understanding

**Goal:** Know which upgrade paths are valid.

**Complete the upgrade path table:**

| From | To | Valid? | Notes |
|------|-----|--------|-------|
| Windows 10 Home | Windows 10 Pro | | |
| Windows 10 Home | Windows 11 Home | | |
| Windows 10 Pro | Windows 11 Home | | |
| Windows 10 Pro | Windows 11 Pro | | |
| Windows 10 32-bit | Windows 11 | | |
| Windows 11 Home | Windows 11 Pro | | |
| Windows 7 | Windows 10 | | |
| Windows 8.1 | Windows 11 | | |

---

#### Activity C: Pre-Upgrade Checklist

**Goal:** Create a proper upgrade preparation checklist.

**Hardware verification:**

| Check | Command/Location | Your Result |
|-------|------------------|-------------|
| CPU meets requirements | `msinfo32` | |
| RAM sufficient | `systeminfo` | |
| Storage free space | `diskmgmt.msc` | |
| TPM version (Win 11) | `tpm.msc` | |
| UEFI mode | `msinfo32` | |
| Secure Boot | `msinfo32` | |

**Software preparation:**

| Task | Status | Notes |
|------|--------|-------|
| Backup important files | | |
| Note installed applications | | |
| Export browser bookmarks | | |
| Save product keys/licenses | | |
| Check application compatibility | | |
| Update current Windows | | |
| Update drivers | | |
| Disable antivirus temporarily | | |

---

#### Activity D: Recovery Options After Upgrade

**Goal:** Know your rollback options.

**Check current recovery options:**

Settings → System → Recovery

| Option | Available? | Time Limit |
|--------|------------|------------|
| Go back to Windows 10 | | |
| Reset this PC | | |
| Advanced startup | | |

**Windows.old folder:**

Check if it exists: `C:\Windows.old`

| Property | Value |
|----------|-------|
| Folder exists? | |
| Size (if exists) | |
| Contents include | |

**Extending rollback period (documentation only):**

```cmd
DISM /Online /Set-OSUninstallWindow /Value:60
```

What does this command do? _______________

---

#### Activity E: User Data Migration Planning

**Goal:** Plan a complete user migration.

**Standard user data locations:**

| Data Type | Default Location | Include in Migration? |
|-----------|------------------|----------------------|
| Documents | | |
| Desktop | | |
| Downloads | | |
| Pictures | | |
| Music | | |
| Videos | | |
| AppData | | |
| Browser profiles | | |
| Email data | | |
| Favorites/Bookmarks | | |

**Application data to consider:**

| Application Type | Data Location | Migration Method |
|------------------|---------------|------------------|
| Microsoft Office | | |
| Web browsers | | |
| Email clients | | |
| Games (saves) | | |
| Creative software | | |

---

#### Activity F: Migration Tools

**Goal:** Understand available migration tools.

**Windows built-in tools:**

| Tool | Purpose | Limitations |
|------|---------|-------------|
| File History | | |
| Backup and Restore | | |
| OneDrive sync | | |
| Manual copy | | |

**Third-party/enterprise tools:**

| Tool | Best For | Features |
|------|----------|----------|
| User State Migration Tool (USMT) | | |
| PCmover | | |
| Zinstall | | |
| Transwiz | | |

**USMT components:**

| Component | Purpose |
|-----------|---------|
| ScanState | |
| LoadState | |
| MigApp.xml | |
| MigDocs.xml | |
| MigUser.xml | |

---

#### Activity G: Post-Upgrade Tasks

**Goal:** Create a post-upgrade verification checklist.

**Immediate verification:**

| Task | Check Method | Status |
|------|--------------|--------|
| Windows activated | Settings → Activation | |
| Windows Update working | Check for updates | |
| All drives visible | File Explorer | |
| Network connectivity | ping test | |
| Display resolution correct | Display settings | |
| Audio working | Play sound | |

**Driver verification:**

Open Device Manager: `devmgmt.msc`

| Device Category | Any Issues (⚠️)? |
|-----------------|-----------------|
| Display adapters | |
| Network adapters | |
| Sound devices | |
| USB controllers | |
| Bluetooth | |

**Application verification:**

| Application | Works? | Needed Reinstall? |
|-------------|--------|-------------------|
| | | |
| | | |
| | | |
| | | |
| | | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A company is upgrading 50 computers from Windows 10 to Windows 11 over a weekend. Some computers have important applications that may not be compatible with Windows 11. What's your recommended approach?

**Scenario 2:** A user's Windows 10 machine is being replaced with a new Windows 11 machine. They have 10 years of emails in Outlook, thousands of photos, and several specialized applications with custom settings. Plan the migration.

**Scenario 3:** After upgrading from Windows 10 to Windows 11, a user's critical business application doesn't work. The vendor says a Windows 11 compatible version won't be ready for 3 months. What are the options?

**Scenario 4:** A Windows Update seems to have caused problems, and several users report issues after the latest quality update (KB5001234). How do you handle this across the organization?

---

## What You Learned Today

- ✅ Feature updates vs quality updates
- ✅ Valid upgrade paths between Windows versions
- ✅ Pre-upgrade preparation checklist
- ✅ Recovery and rollback options (Windows.old, Go Back)
- ✅ User data migration planning
- ✅ Migration tools (built-in and third-party)
- ✅ Post-upgrade verification procedures
- ✅ Edition upgrades (Home to Pro)

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