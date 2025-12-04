# Lab 39: Windows Installation Methods - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Clean Install vs In-Place Upgrade

| Aspect | Clean Install | In-Place Upgrade |
|--------|---------------|------------------|
| Definition | Fresh Windows installation | Upgrade existing Windows |
| Files | All deleted | Preserved |
| Applications | Must reinstall all | Most preserved |
| Settings | Fresh defaults | Preserved |
| Issues | None carried over | May inherit problems |

**When to choose Clean Install:**
- Severe malware infection
- Major system corruption
- Want fresh start
- Switching Windows editions significantly
- Selling/giving away computer

**When to choose In-Place Upgrade:**
- Upgrading Windows version (10 to 11)
- Want to keep applications and settings
- Limited time to reconfigure
- User data must be preserved

---

### Question 2: MBR vs GPT

| Feature | MBR | GPT |
|---------|-----|-----|
| Max disk size | 2 TB | 18 EB (exabytes) |
| Max partitions | 4 primary | 128 |
| Boot mode | Legacy BIOS | UEFI |
| Required for | Windows 7 (Legacy) | Windows 11 boot disk |

**UEFI requirement:** GPT partition style required for boot disk

---

### Question 3: Legacy BIOS + Windows 11

**Problem:** Windows 11 requires UEFI, not Legacy BIOS. It also requires TPM 2.0 and Secure Boot.

**Can it be solved?**

- **If hardware supports UEFI:** Switch from Legacy to UEFI in firmware settings, convert MBR to GPT
- **If hardware is truly Legacy-only:** Cannot officially install Windows 11. The hardware is too old.

**Workarounds (not recommended for production):**
- Registry hacks to bypass checks during installation
- Modified installation ISOs
- These may cause update and support issues

---

### Question 4: PXE Boot

**What it is:** Pre-boot eXecution Environment - boots computer from network and downloads installation image from a server.

**Why organizations use it:**
- **Scale:** Deploy to hundreds of computers simultaneously
- **No physical media:** No USB drives to manage
- **Consistency:** All computers get identical image
- **Automation:** Combined with answer files for zero-touch install
- **Central management:** Update image once, all new deployments get it

**Requirements:**
- DHCP server (with PXE options or IP Helper)
- Windows Deployment Services (WDS) or similar
- Network infrastructure
- Client computers with PXE-capable network cards

---

### Question 5: Custom Installation Option

**What happens with "Custom" on existing Windows:**
- Shows all partitions
- Can delete, format, or select partition
- Does NOT merge with existing Windows
- If you install on same partition, old Windows moved to Windows.old
- Old Windows files accessible for 30 days
- NOT an upgrade - it's a clean install that preserves old files temporarily

**Difference from Upgrade:**
- Upgrade: Windows.old created, then apps/settings migrated
- Custom: Clean Windows, old files in Windows.old, no migration

---

## Section 2: Activities - Answers

### Activity A: Current System Analysis

**Typical modern system values:**

| Property | Typical Modern Value |
|----------|---------------------|
| BIOS Mode | UEFI |
| Secure Boot State | On |
| Partition style | GPT |

**reagentc output example:**
```
Windows RE status:         Enabled
Windows RE location:       \\?\GLOBALROOT\device\harddisk0\partition4\Recovery\WindowsRE
Boot Configuration Data (BCD) identifier: {current}
```

---

### Activity B: Installation Methods Comparison

| Method | Best For | Pros | Cons |
|--------|----------|------|------|
| Clean Install (USB) | Single PC fresh start | No inherited issues, fastest | Lose all data, reinstall apps |
| In-Place Upgrade | Version upgrades | Keeps files/apps/settings | May inherit problems |
| Reset this PC | Troubleshooting | Built-in, easy | Limited options |
| Windows PE/Image | Multiple identical PCs | Fast deployment, consistent | Requires image creation |
| PXE/Network Boot | Enterprise large-scale | No physical media, automated | Requires infrastructure |
| Repair Install | Fix without data loss | Keeps everything | May not fix all issues |

---

### Activity C: MBR vs GPT

| Feature | MBR | GPT |
|---------|-----|-----|
| Maximum disk size | 2 TB | 18 EB |
| Maximum partitions | 4 primary (or 3+extended) | 128 |
| Boot mode supported | Legacy BIOS | UEFI |
| Partition table backup | No | Yes (at end of disk) |
| Required for Windows 11 | No | Yes (boot disk) |
| Data integrity checking | No | CRC32 checksums |

**Conversion:**

| Scenario | Can Convert? | Data Loss? |
|----------|--------------|------------|
| MBR to GPT (empty) | Yes | N/A |
| MBR to GPT (with data) | Yes (Win 10 1703+) | No |
| GPT to MBR (with data) | Limited/risky | Usually yes |

---

### Activity D: Windows 11 Requirements

**Key requirements:**

| Requirement | Why Required |
|-------------|--------------|
| TPM 2.0 | Secure boot, BitLocker, Windows Hello |
| UEFI | Modern boot, Secure Boot |
| Secure Boot | Protects against bootkits/rootkits |
| 64-bit CPU | No 32-bit Windows 11 |
| 4 GB RAM | Minimum for performance |
| 64 GB storage | Room for OS + updates |

---

### Activity E: Recovery Options

**Reset this PC:**

| Option | What It Does | Keeps Files? |
|--------|--------------|--------------|
| Keep my files | Reinstalls Windows, removes apps | Yes |
| Remove everything | Factory reset | No |

**Advanced Startup options:**

| Option | Purpose |
|--------|---------|
| Startup Repair | Automatic fix for boot problems |
| Startup Settings | Safe Mode, disable driver signing |
| Command Prompt | Manual troubleshooting |
| Uninstall Updates | Remove problematic updates |
| System Restore | Return to restore point |
| System Image Recovery | Restore from backup image |
| UEFI Firmware Settings | Access BIOS/UEFI setup |

---

### Activity F: Unattended Installation

**Answer file settings:**

| Setting | Purpose |
|---------|---------|
| Product key | Activate Windows |
| Language/locale | Regional settings |
| Disk partitioning | Automatic partition creation |
| User account | Create admin/user accounts |
| Computer name | Set hostname |
| Domain join | Join AD domain |
| Features | Install specific roles/features |

**Deployment methods:**

| Method | Scale | Tools |
|--------|-------|-------|
| USB with answer file | Small | USB drive, answer file |
| WDS | Medium | Windows Server, DHCP |
| MDT | Medium-Large | Free toolkit, task sequences |
| SCCM/Intune | Enterprise | Licensed, full management |
| Autopilot | Enterprise (cloud) | Azure AD, Intune |

---

## Section 3: Reflection - Answers

### Scenario 1: Windows 10 MBR/Legacy to Windows 11

**Steps required:**

1. **Verify hardware supports UEFI**
   - Restart, enter BIOS/UEFI setup
   - Check if UEFI mode is available

2. **Convert MBR to GPT**
   - Boot from Windows 10 installation media
   - Shift + F10 for command prompt
   - `mbr2gpt /validate /disk:0`
   - `mbr2gpt /convert /disk:0`
   - OR use Windows built-in conversion in Settings

3. **Switch firmware to UEFI**
   - Enter BIOS setup
   - Change from Legacy to UEFI
   - Enable Secure Boot

4. **Verify TPM 2.0**
   - Check `tpm.msc`
   - May need to enable in BIOS

5. **Run Windows 11 upgrade**
   - Use Windows Update or Installation Assistant

**Data loss?** Not inevitable if using mbr2gpt conversion tool. However, ALWAYS backup first!

---

### Scenario 2: Deploy Windows 11 to 100 New Computers

**Most efficient method:** PXE boot with Windows Deployment Services (WDS) or Microsoft Deployment Toolkit (MDT)

**Setup required:**

1. **Windows Server with WDS role**
   - Add WDS role via Server Manager
   - Configure DHCP for PXE boot options

2. **Create reference image**
   - Install Windows 11 on one PC
   - Configure settings, install apps
   - Sysprep and capture image

3. **Import image to WDS**
   - Add boot image (boot.wim)
   - Add install image (captured image)

4. **Configure answer file**
   - Set partition scheme
   - Product key
   - Regional settings
   - Domain join (optional)

5. **Deploy**
   - Set computers to PXE boot in BIOS
   - They boot from network, install automatically

**Alternative:** Windows Autopilot if computers come with Windows preinstalled and you have Intune.

---

### Scenario 3: Preserve Files While Reinstalling

**Options that preserve files:**

1. **Reset this PC - Keep my files**
   - Settings → System → Recovery → Reset this PC
   - Choose "Keep my files"
   - Windows reinstalls, personal files preserved
   - Applications removed

2. **In-Place Upgrade (Repair Install)**
   - Mount Windows ISO or use installation USB
   - Run setup.exe from within Windows
   - Choose "Keep personal files and apps"
   - Repairs Windows without losing anything

3. **Manual backup + Clean install**
   - Copy Documents/Desktop to external drive
   - Clean install
   - Restore files
   - Most work, but cleanest result

**Recommendation:** Start with Reset "Keep my files" - easiest and usually effective.

---

### Scenario 4: Boot Loop After Failed Update

**Recovery order:**

1. **Let Automatic Repair run**
   - Windows should detect boot failure after 2-3 attempts
   - Automatic Repair may fix it

2. **If Automatic Repair fails, access Advanced Options:**
   - Startup Repair (try this first)
   - Uninstall Updates → Uninstall latest quality update
   - If still failing → Uninstall latest feature update

3. **If updates weren't the issue:**
   - System Restore (if restore point exists)
   - Rollback to previous Windows version (if within 10 days)

4. **Command Prompt troubleshooting:**
   ```cmd
   bootrec /fixmbr
   bootrec /fixboot
   bootrec /rebuildbcd
   sfc /scannow /offbootdir=C:\ /offwindir=C:\Windows
   ```

5. **Last resort:**
   - Reset this PC (from Advanced Options)
   - Clean install

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 WINDOWS INSTALLATION QUICK REFERENCE                       ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  INSTALLATION TYPES                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Clean Install    → Fresh Windows, erases everything                      ║
║  In-Place Upgrade → Keeps files, settings, and apps                       ║
║  Reset (Keep)     → Reinstalls Windows, keeps personal files              ║
║  Reset (Remove)   → Reinstalls Windows, erases everything                 ║
║  Repair Install   → Fixes Windows while keeping everything                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  MBR vs GPT                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  MBR: 2 TB max, 4 primary partitions, Legacy BIOS, older systems          ║
║  GPT: 18 EB max, 128 partitions, UEFI required, Windows 11 required       ║
║  Convert: mbr2gpt /convert (Windows 10 1703+, no data loss)               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WINDOWS 11 REQUIREMENTS                                                   ║
║  ─────────────────────────────────────────────────────────────────────────║
║  CPU: 1 GHz, 2 cores, 64-bit  │  RAM: 4 GB  │  Storage: 64 GB             ║
║  TPM: 2.0 required            │  UEFI with Secure Boot                    ║
║  DirectX 12 with WDDM 2.0     │  Display: 720p, 9"                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BOOT MODES                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Legacy BIOS: MBR only, older, no Secure Boot                             ║
║  UEFI:        GPT required for boot disk, faster, Secure Boot             ║
║  CSM:         Compatibility mode (UEFI with Legacy support)               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  DEPLOYMENT METHODS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  USB/DVD         → Manual, small scale                                    ║
║  PXE/WDS         → Network boot, medium scale                             ║
║  MDT             → Task sequences, automated                              ║
║  SCCM/Intune     → Enterprise, managed deployment                         ║
║  Autopilot       → Cloud-based, zero-touch                                ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY COMMANDS                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  msinfo32        → Check BIOS mode and Secure Boot                        ║
║  diskmgmt.msc    → Check partition style (Disk Properties)                ║
║  tpm.msc         → Check TPM status                                       ║
║  bcdedit         → View/modify boot configuration                         ║
║  reagentc /info  → Recovery environment status                            ║
╚═══════════════════════════════════════════════════════════════════════════╝
```