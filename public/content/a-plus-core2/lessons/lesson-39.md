# Lesson 39: Windows Installation Methods

**Estimated Time:** 25-30 minutes  
**Domain:** Operating Systems (Domain 1.0 - 31% of exam)  
**Exam Objectives Covered:** 1.9 - Given a scenario, perform OS installations and upgrades in a diverse OS environment

---

## Learning Objectives

By the end of this lesson, you will be able to:

- Identify different Windows installation types and when to use each
- Perform clean installations versus in-place upgrades
- Create bootable USB installation media
- Deploy Windows using image-based deployment methods
- Configure unattended installations with answer files
- Verify system requirements before installation (CPU, RAM, TPM, storage)
- Understand partition schemes (MBR vs. GPT) and their limitations
- Distinguish between BIOS and UEFI boot modes
- Configure Secure Boot for enhanced security
- Use PXE boot for network-based installations
- Troubleshoot common installation failures
- Perform repair installations without data loss

---

## Video Resources

Before diving in, check out these excellent video tutorials:

1. **Professor Messer - "Installing Windows"** (CompTIA A+ 220-1102)  
   [https://www.professormesser.com](https://www.professormesser.com) - Complete Windows installation guide

2. **PowerCert Animated Videos - "Windows Installation Types"**  
   [https://www.youtube.com/c/PowerCertAnimatedVideos](https://www.youtube.com/c/PowerCertAnimatedVideos) - Visual guide to installation methods

3. **Carey Holzman - "Clean Windows Installation"**  
   [https://www.youtube.com/user/CareyHolzman](https://www.youtube.com/user/CareyHolzman) - Step-by-step installation walkthrough

4. **Chris Titus Tech - "Windows Deployment Methods"**  
   [https://www.youtube.com/c/ChrisTitusTech](https://www.youtube.com/c/ChrisTitusTech) - Advanced deployment techniques

---

## Introduction

It's Monday morning at a growing startup. The IT manager stands in the server room, looking at 50 brand-new computers still in boxes. "We need all of these configured with Windows 11, joined to the domain, with our standard software suite installed by Friday," the CEO says. "Can you do it?"

Five days. Fifty computers. If he installs Windows manually on each one—clicking through setup wizards, entering product keys, configuring settings, installing software—he'll spend about 2 hours per computer. That's 100 hours of work. He'd need to work 20-hour days every day, assuming nothing goes wrong.

But he doesn't panic. He doesn't start clicking "Next" through installation wizards. Instead, he spends Monday creating one perfect Windows image with all drivers, software, and settings pre-configured. Tuesday, he sets up PXE network boot. By Wednesday afternoon, he's simultaneously deploying Windows to all 50 computers over the network. They install themselves overnight while he sleeps. Thursday morning: 50 computers, fully configured, identical, ready to use. He spends Thursday and Friday testing and troubleshooting minor issues.

**The difference?** Understanding Windows deployment methods.

Whether you're setting up a single home computer or deploying hundreds in an enterprise environment, knowing your installation options transforms a tedious manual process into an efficient, repeatable, automated workflow.

In this lesson, you'll learn every method for getting Windows onto computers: clean installations from scratch, in-place upgrades preserving files, image-based deployments for mass rollouts, unattended installations that configure themselves, and network-based PXE booting. You'll understand system requirements, partition schemes, boot modes, and how to troubleshoot when installations fail.

By the end, you'll be able to install Windows efficiently in any scenario—from grandma's laptop to a corporate datacenter.

Let's master Windows deployment.

---

## Installation Types: Choosing Your Approach

Windows can be installed in several ways, each serving different needs.

### Clean Install: Starting Fresh

A **clean install** wipes the drive completely and installs Windows from scratch—like demolishing a house and building new from the foundation.

**When to use clean install:**
- New computer with no operating system
- Computer so corrupted/infected that repair isn't practical
- Upgrading from very old Windows (e.g., Windows 7 to Windows 11)
- Selling computer (wipe personal data completely)
- Major performance problems that can't be fixed
- Switching from one OS to another (Linux to Windows, macOS Boot Camp)

**Advantages:**
- No leftover junk from previous installation
- Clean slate—no old drivers, settings, or corrupted files
- Best performance (nothing slowing system down)
- Guaranteed compatibility with new hardware

**Disadvantages:**
- **Loses ALL data** (must backup first)
- Must reinstall all applications
- Must reconfigure all settings
- Most time-consuming method
- Requires installation media

**Process overview:**
1. Backup important data
2. Boot from installation media (USB/DVD)
3. Delete all partitions (or format drive)
4. Install Windows fresh
5. Install drivers
6. Install applications
7. Restore user data from backup

**Real-world scenario:** Customer brings infected computer. Malware keeps returning despite repeated removal attempts. Registry is corrupted. System is slow. Best solution: Back up their documents, perform clean install, restore just the documents. Clean slate eliminates all problems.

### In-Place Upgrade: Preserving Everything

An **in-place upgrade** installs newer Windows version while keeping files, applications, and settings—like renovating a house room by room while living in it.

**When to use in-place upgrade:**
- Upgrading Windows 10 to Windows 11
- Installing major Windows 10 feature updates
- Computer meets new Windows requirements
- Want to keep all programs and files
- Don't want to reconfigure everything

**Advantages:**
- Keeps files, applications, settings intact
- No data backup/restore needed (but still backup as precaution)
- Faster than clean install + restoration
- Less disruptive to users

**Disadvantages:**
- Carries forward problems from old installation
- Larger installation (old Windows moves to Windows.old folder)
- Potential compatibility issues with old drivers/software
- May not resolve existing performance problems
- Requires significant free disk space (20+ GB)

**Process overview:**
1. Verify hardware compatibility (Windows 11: TPM 2.0, Secure Boot, etc.)
2. Backup data (precautionary)
3. Run Windows Setup from within current Windows
4. Choose "Keep personal files and apps"
5. Setup handles upgrade automatically
6. Old Windows saved to Windows.old folder (can delete after verifying)

**Windows.old folder:**
After upgrade, old Windows installation moves to `C:\Windows.old`. This allows:
- Rolling back if upgrade causes problems
- Recovering files if something went wrong
- Takes significant space (10-20 GB typically)
- Delete after confirming upgrade successful: Disk Cleanup → "Previous Windows installations"

🎯 **Exam Tip:** In-place upgrade preserves files and apps. Clean install does not. Know which to recommend for different scenarios.

### Repair Installation: Fixing Without Losing Data

A **repair installation** (also called **in-place repair**) reinstalls Windows over existing installation, replacing system files while keeping user data and applications.

**When to use repair installation:**
- Windows won't boot properly
- System files corrupted
- Persistent errors that sfc /scannow can't fix
- Want clean Windows without losing data
- Severe performance problems

**Think of it as:** Replacing a car's engine while keeping the body, seats, and everything else.

**Process overview:**
1. Boot from Windows installation media
2. Choose "Upgrade" not "Custom"
3. Select "Keep personal files and apps"
4. Windows reinstalls over itself
5. System files replaced, data preserved

**Difference from in-place upgrade:**
- Repair: Same version Windows (Windows 11 → Windows 11)
- Upgrade: Different version (Windows 10 → Windows 11)

Both preserve data, but repair focuses on fixing corruption, not version upgrade.

### Multiboot: Multiple Operating Systems

**Multiboot** configuration allows multiple operating systems on one computer, choosing which to boot at startup.

**Common multiboot scenarios:**
- Windows 11 + Windows 10 (testing)
- Windows + Linux (development)
- Windows + macOS (Hackintosh, or Boot Camp on Mac)

**Requirements:**
- Separate partitions for each OS
- Bootloader managing selection (GRUB, Windows Boot Manager)
- Sufficient storage for both systems

**Not covered deeply on A+ exam**, but know the concept exists.

---

## Installation Media: How Windows Gets to the Computer

Windows installation files must reach the computer somehow. Multiple media types exist for different situations.

### USB Flash Drive: Modern Standard

**USB installation media** is the most common method—fast, reusable, and doesn't require optical drive.

**Creating Windows USB installer:**

**Method 1: Windows Media Creation Tool (Official)**
1. Download from Microsoft: "Windows 11 Media Creation Tool"
2. Run tool
3. "Create installation media (USB flash drive, DVD, or ISO file)"
4. Select language, edition, architecture (64-bit)
5. Choose "USB flash drive"
6. Select USB drive (min 8 GB, will be erased)
7. Tool downloads Windows and creates bootable USB

**Method 2: Rufus (Third-party, more options)**
1. Download Windows ISO from Microsoft
2. Download Rufus (free tool)
3. Insert USB drive (8+ GB)
4. Open Rufus
5. Select USB drive
6. Select Windows ISO
7. Partition scheme: GPT (UEFI) or MBR (BIOS)
8. Start—creates bootable USB in minutes

**Advantages of USB:**
- Fast installation (USB 3.0 much faster than DVD)
- Reusable (update with new Windows versions)
- Most computers have USB ports
- Portable, durable

**Minimum USB size:**
- Windows 10: 8 GB
- Windows 11: 8 GB (but 16 GB recommended)

### Optical Media: DVD Installation

**DVD installation** is legacy method—slower than USB but still functional.

**Creating Windows DVD:**
1. Download Windows ISO
2. Burn ISO to DVD using:
   - Windows built-in: Right-click ISO → "Burn disc image"
   - ImgBurn, CDBurnerXP (third-party tools)
3. Insert DVD in optical drive
4. Boot from DVD

**Limitations:**
- Single-use (unless using rewritable DVD-RW)
- Slower than USB
- Many modern computers lack optical drives
- Scratches/damage render DVD unusable

**When to use DVD:**
- Computer has no USB boot capability (very old)
- USB ports are broken
- Creating permanent installation disc for archival

### Network Boot (PXE): Enterprise Deployment

**PXE (Preboot Execution Environment)** allows computers to boot and install Windows over the network—no local media needed.

**How PXE works:**
1. Computer's network card has PXE firmware
2. Computer broadcasts: "I need to boot from network"
3. DHCP server responds with IP configuration + PXE boot server location
4. PXE boot server sends boot files to computer
5. Computer loads Windows installation environment over network
6. Installation proceeds from network share

**Requirements:**
- PXE-capable network adapter (most modern NICs)
- PXE boot server (Windows Deployment Services, FOG, SCCM)
- DHCP server configured for PXE
- Fast network (Gigabit Ethernet recommended)

**Advantages:**
- No physical media needed (no USB/DVD to manage)
- Deploy to multiple computers simultaneously
- Centralized control (IT manages one server, not hundreds of USB drives)
- Ideal for imaging 50+ computers

**Disadvantages:**
- Complex initial setup
- Requires server infrastructure
- Network-dependent (slow network = slow installation)
- Only practical in enterprise environments

**Real-world scenario:** IT department sets up 200 new workstations. Instead of creating 200 USB drives or walking around with one USB, they configure PXE boot. Technicians turn on all computers, PXE boots them simultaneously, Windows installs overnight on all 200. One server deployment replaces 200 manual installations.

🎯 **Exam Tip:** Know that PXE boots from network, requires PXE server and DHCP, and is used for mass deployments in enterprises.

### External/Hot-Swappable Drives

**External hard drives** or **eSATA/USB drives** can store Windows installation, particularly useful for:
- Multiple Windows images
- Portable installation kits for field technicians
- Larger image files that don't fit on USB flash drives

Function similarly to USB flash drives but with more storage capacity.

---

## Image Deployment: Clone Once, Deploy Many

**Image-based deployment** involves creating one perfect Windows installation (the "golden image" or "master image"), capturing it as a single file, then deploying that image to multiple computers.

### Why Use Image Deployment?

**Scenario without imaging:**
1. Install Windows (30 min)
2. Install all drivers (15 min)
3. Install Office (10 min)
4. Install Acrobat, Chrome, VPN, antivirus (20 min)
5. Configure settings, domain join (15 min)
6. Windows Updates (30 min)

Total: **2 hours per computer**

For 50 computers: **100 hours of clicking "Next"**

**Scenario with imaging:**
1. Perform steps above ONCE on reference computer (2 hours)
2. Capture image (30 minutes)
3. Deploy image to all 50 computers simultaneously (1 hour)

Total: **3.5 hours for 50 computers**

**You just saved 96.5 hours.**

### Image Deployment Process

**Phase 1: Build Reference Computer**
- Install Windows on one computer
- Install all drivers
- Install all software (Office, Adobe, Chrome, etc.)
- Configure settings (wallpaper, default programs, policies)
- Join domain (if applicable)
- Run Windows Update (fully patched)
- **Sysprep** - Prepare for imaging (removes computer-specific info)

**Phase 2: Capture Image**
- Boot reference computer into Windows PE (Preinstallation Environment)
- Use imaging tool (DISM, Ghost, Clonezilla, MDT, SCCM)
- Capture entire hard drive as single .wim or .img file
- Store image on network share or USB drive

**Phase 3: Deploy Image**
- Boot target computers (USB, PXE, or network)
- Run imaging tool
- Select image to deploy
- Image applies to computer (10-30 minutes depending on size and speed)
- Computer reboots with fully configured Windows

**Phase 4: Post-Deployment**
- Computer runs through mini-setup (creates unique computer name, SID, etc.)
- Apply computer-specific settings (hostname, IP if static)
- Verify everything works

### Sysprep: Generalizing the Image

**Sysprep** (System Preparation Tool) prepares Windows for imaging by removing computer-specific information:

**What Sysprep removes:**
- Computer name
- Security Identifier (SID) - Unique ID for each Windows installation
- Hardware-specific drivers (some)
- User profiles (optional)
- Activation status (can preserve with volume license)

**Running Sysprep:**
```
C:\Windows\System32\Sysprep\sysprep.exe
```

**Options:**
- **Generalize** - Remove unique computer info (required for imaging)
- **OOBE** (Out-of-Box Experience) - Present setup screens on first boot
- **Shutdown** - Power off after Sysprep (ready to capture image)

**Command-line Sysprep:**
```
sysprep /generalize /oobe /shutdown
```

After Sysprep, **do not boot the computer**. Immediately capture the image. Booting re-specializes it (assigns new SID, computer name), defeating the purpose.

**Why Sysprep matters:** Without Sysprep, all deployed computers have identical SIDs—catastrophic in domain environments where SID must be unique. Windows refuses to join domain if SID conflict exists.

### Common Imaging Tools

**DISM (Deployment Image Servicing and Management):**
- Built into Windows
- Command-line tool
- Capture and apply .wim images
- Free, powerful, but complex

**Windows Deployment Services (WDS):**
- Microsoft server-based imaging
- PXE boot capable
- Integrates with Active Directory
- Free (included with Windows Server)

**Microsoft Deployment Toolkit (MDT):**
- Free from Microsoft
- Automates image deployment
- Task sequences, driver management
- Answer file integration

**System Center Configuration Manager (SCCM / MECM):**
- Enterprise-grade (expensive)
- Full lifecycle management (deploy, update, patch, inventory)
- Most powerful Microsoft deployment solution

**Clonezilla:**
- Free, open-source
- Works with any OS
- Bootable USB/CD-based
- Great for small businesses on budget

**Norton Ghost / Symantec Ghost:**
- Commercial imaging solution (legacy, less common now)
- Simple interface
- Slower, older technology

🎯 **Exam Tip:** Know that imaging involves creating master image with Sysprep, capturing with tools like DISM or WDS, and deploying to multiple computers. Understand Sysprep removes unique identifiers.

---

## Unattended Installation: Hands-Free Deployment

**Unattended installation** uses an **answer file** that automatically responds to all setup questions—no human interaction required.

### Answer Files

An **answer file** (usually named `autounattend.xml` or `unattend.xml`) contains predefined answers to all Windows setup prompts:

**Information answer file can provide:**
- Product key
- Language and region
- Partition configuration (delete existing, create new, format)
- Computer name
- Administrator password
- User accounts to create
- Network settings (IP, DNS, gateway)
- Domain join credentials
- Windows features to enable/disable
- Applications to install post-setup
- Scripts to run after installation

**How answer files work:**
1. Windows Setup looks for `autounattend.xml` on:
   - Root of installation media (USB/DVD)
   - Root of any attached USB drive
   - Network location (if specified)
2. If found, Setup reads answers from file
3. Setup proceeds automatically without prompts
4. Computer reboots as needed
5. Finishes with fully configured Windows

### Creating Answer Files

**Windows System Image Manager (Windows SIM):**
- Part of Windows ADK (Assessment and Deployment Kit)
- GUI tool for creating answer files
- Validates XML syntax
- Shows all available configuration options

**Basic unattend.xml structure:**
```xml
<?xml version="1.0" encoding="utf-8"?>
<unattend xmlns="urn:schemas-microsoft-com:unattend">
    <settings pass="windowsPE">
        <!-- Partition configuration, product key, language -->
    </settings>
    <settings pass="specialize">
        <!-- Computer name, network settings, join domain -->
    </settings>
    <settings pass="oobeSystem">
        <!-- User accounts, auto-login, skip OOBE screens -->
    </settings>
</unattend>
```

**Configuration passes** (stages of setup):
1. **windowsPE** - Preinstallation (partition, language, product key)
2. **offlineServicing** - Offline image servicing
3. **generalize** - Sysprep generalization
4. **specialize** - Computer-specific settings (name, join domain)
5. **auditSystem / auditUser** - Audit mode (for further customization)
6. **oobeSystem** - Out-of-box experience (user creation, final settings)

**Real-world scenario:** IT needs to deploy 100 computers with specific configuration: Static IP range, join to domain "COMPANY.LOCAL", install Office, create two local accounts. Create answer file with these settings, place on USB with Windows installer, boot 100 computers from USB. They install and configure themselves overnight. No technician input needed.

💡 **Pro Tip:** Test answer files on virtual machine first. One syntax error = installation fails. VM testing prevents wasting time on physical hardware.

---

## System Requirements: Can This Computer Run Windows?

Before installing, verify hardware meets requirements. Installing on incompatible hardware leads to failures or poor performance.

### Windows 11 Requirements (Strict)

Microsoft significantly increased requirements for Windows 11:

**Minimum requirements:**
- **Processor:** 1 GHz or faster, 2+ cores, 64-bit compatible from approved list
- **RAM:** 4 GB minimum
- **Storage:** 64 GB minimum
- **System firmware:** UEFI, Secure Boot capable
- **TPM:** TPM 2.0 (Trusted Platform Module)
- **Graphics:** DirectX 12 compatible, WDDM 2.0 driver
- **Display:** 720p (1280x720), 9" or larger diagonal, 8-bit color

**Critical differences from Windows 10:**
- **TPM 2.0** - Hardware security chip (not required for Win10)
- **UEFI** - No legacy BIOS support
- **Secure Boot** - Must be enabled
- **64-bit only** - No 32-bit version of Windows 11 exists

Many computers from 2018 or earlier don't meet requirements, particularly TPM and Secure Boot.

### Windows 10 Requirements (Lenient)

**Minimum requirements:**
- **Processor:** 1 GHz or faster, 32-bit or 64-bit
- **RAM:** 1 GB (32-bit) or 2 GB (64-bit)
- **Storage:** 16 GB (32-bit) or 32 GB (64-bit)
- **Graphics:** DirectX 9 with WDDM 1.0 driver
- **Display:** 800x600 resolution

**Much less strict** than Windows 11. Most computers from 2010+ can run Windows 10.

### Checking System Compatibility

**Microsoft PC Health Check Tool:**
- Free download from Microsoft
- Runs on Windows 10
- Reports Windows 11 compatibility
- Identifies specific blockers (TPM missing, CPU not approved, etc.)

**Manual checks:**

**TPM version:**
```
1. Press Windows + R
2. Type: tpm.msc
3. Press Enter
4. Shows TPM status and version
```

If "Compatible TPM cannot be found," computer lacks TPM or it's disabled in BIOS/UEFI.

**UEFI vs BIOS:**
```
1. Press Windows + R
2. Type: msinfo32
3. Press Enter
4. Look for "BIOS Mode"
   - UEFI = Good for Windows 11
   - Legacy = Must convert to UEFI
```

**Secure Boot status:**
```
1. msinfo32 (System Information)
2. Look for "Secure Boot State"
   - On = Enabled
   - Off = Disabled (must enable in UEFI)
```

**CPU compatibility:**
- Visit Microsoft's supported processor list
- Match your CPU model against list
- Older CPUs (pre-8th gen Intel, pre-Ryzen 2000 AMD) typically unsupported

🎯 **Exam Tip:** Windows 11 requires TPM 2.0, UEFI, Secure Boot, and specific CPU models. Windows 10 is much more lenient. Know these requirement differences.

---

## Partition Schemes: MBR vs. GPT

Hard drives must be **partitioned** before installing Windows. Two partition schemes exist: MBR (old) and GPT (new).

### MBR (Master Boot Record)

**Legacy partitioning scheme** from 1983.

**Limitations:**
- Maximum 4 primary partitions (or 3 primary + 1 extended with unlimited logical)
- Maximum 2 TB drive size (larger drives waste space)
- Boot data stored in one location (corruption = unbootable)
- No redundancy or checksums
- Works with BIOS firmware

**When to use MBR:**
- Old computer with BIOS (not UEFI)
- 32-bit Windows
- Dual-booting with old operating systems
- Drive smaller than 2 TB
- Maximum compatibility

### GPT (GUID Partition Table)

**Modern partitioning scheme** replacing MBR.

**Advantages:**
- Virtually unlimited partitions (128 in Windows)
- Supports drives larger than 2 TB (up to 9.4 ZB)
- Stores partition data in multiple locations (redundancy)
- CRC checksums detect corruption
- Required for UEFI Secure Boot
- Better data integrity

**Requirements:**
- UEFI firmware (not BIOS)
- 64-bit Windows
- Modern computer (post-2010 typically)

**When to use GPT:**
- New computer with UEFI
- Drive larger than 2 TB
- Windows 11 (requires GPT)
- Maximum security (Secure Boot requires GPT)

### Converting Between MBR and GPT

**During Windows installation:**
- When selecting drive, delete all partitions
- Windows Setup asks to convert if needed
- **WARNING: Deletes all data**

**Using MBR2GPT (Windows 10/11):**
- Converts without data loss (usually)
- Command: `mbr2gpt /convert /disk:0`
- Run from Windows PE or booted Windows
- Backup data first (conversion can fail)

**Using Diskpart:**
```
diskpart
list disk
select disk 0
clean                # DELETES ALL DATA
convert gpt          # Convert to GPT
```

Or `convert mbr` to convert to MBR.

🎯 **Exam Tip:** MBR = old, BIOS, max 2TB, 4 partitions. GPT = new, UEFI, larger drives, unlimited partitions. Windows 11 requires GPT.

---

## Boot Modes: BIOS vs. UEFI

Computers use **firmware** to initialize hardware and boot the operating system. Two types exist: BIOS (legacy) and UEFI (modern).

### BIOS (Basic Input/Output System)

**Legacy firmware** from 1970s-80s.

**Characteristics:**
- 16-bit mode
- Text-based setup interface
- Boots from MBR partition scheme
- Limited security features
- Slower boot process
- Supports drives up to 2 TB

**BIOS boot process:**
1. Computer powers on
2. BIOS initializes hardware (POST - Power-On Self-Test)
3. BIOS reads MBR (first 512 bytes of drive)
4. MBR contains bootloader code
5. Bootloader loads operating system

### UEFI (Unified Extensible Firmware Interface)

**Modern firmware** replacing BIOS.

**Characteristics:**
- 32-bit or 64-bit mode
- Graphical setup interface (often with mouse support)
- Boots from GPT partition scheme
- Secure Boot capability
- Faster boot process
- Supports drives larger than 2 TB
- Network boot (PXE) improvements
- Extensible (supports drivers, applications)

**UEFI boot process:**
1. Computer powers on
2. UEFI initializes hardware
3. UEFI reads ESP (EFI System Partition on GPT drive)
4. ESP contains bootloader files (.efi files)
5. Bootloader loads operating system

**Secure Boot:**
- UEFI feature preventing unsigned bootloaders from running
- Only allows digitally signed bootloaders (Microsoft-signed)
- Prevents boot-level malware (rootkits)
- Required for Windows 11
- Can be disabled in UEFI settings (for Linux, etc.)

### Legacy Boot vs. UEFI Boot

Many modern motherboards support **both modes**:
- UEFI mode (preferred)
- Legacy/CSM mode (Compatibility Support Module - emulates BIOS)

**Installation consideration:** Boot mode during installation determines partition scheme:
- Boot USB in UEFI mode → Creates GPT partitions
- Boot USB in Legacy mode → Creates MBR partitions

**Symptom of mode mismatch:** Installed Windows won't boot because firmware looks for wrong bootloader type.

**Accessing UEFI/BIOS settings:**
- Press key during startup: Del, F2, F10, F12, Esc (varies by manufacturer)
- Windows 10/11: Settings → Update & Security → Recovery → Advanced Startup → Restart Now → Troubleshoot → UEFI Firmware Settings

🎯 **Exam Tip:** UEFI is modern replacement for BIOS. UEFI uses GPT, supports Secure Boot, and is required for Windows 11. Know the differences.

---

## Installation Process Walkthrough

### Clean Installation Steps

**Preparation:**
1. Backup all important data
2. Obtain product key (if required)
3. Download/create installation media
4. Verify system requirements

**Installation:**
1. Insert USB/DVD or configure PXE boot
2. Boot computer from installation media
   - UEFI: Boot menu (F12, F11, Esc - varies)
   - Or change boot order in UEFI/BIOS settings
3. "Press any key to boot from CD/DVD" (if prompted)
4. Windows Setup loads

**Setup screens:**

**Language and Region:**
- Language to install
- Time and currency format
- Keyboard layout
- Click "Next"

**Install Now:**
- Click "Install now"
- Or "Repair your computer" (for troubleshooting)

**Product Key:**
- Enter product key (or "I don't have a product key" to activate later)
- Key embedded in BIOS/UEFI activates automatically on compatible hardware

**Select Operating System:**
- Choose edition (Home, Pro, Education, Enterprise)
- Must match product key

**License Terms:**
- Accept terms (required to continue)

**Installation Type:**
- **Upgrade:** Keep files and apps (only if running from within Windows)
- **Custom:** Clean install (recommended)

**Where to Install:**
- Shows all drives and partitions
- Select drive
- Delete old partitions (if desired - **DELETES DATA**)
- Click "New" to create partition (Windows creates system partitions automatically)
- Format if needed
- Select partition → "Next"

**Installing:**
- Copies files
- Installs features
- Installs updates
- Completes installation
- Reboots several times automatically
- Takes 15-45 minutes

**Out-of-Box Experience (OOBE):**
- Region selection
- Keyboard layout
- Network connection (Wi-Fi or Ethernet)
- Microsoft account sign-in (or create local account)
- Privacy settings (location, diagnostic data, speech recognition, etc.)
- Cortana setup (can skip)
- Desktop appears

**Post-Installation:**
1. Install device drivers (graphics, network, chipset)
2. Windows Update (install all updates)
3. Install applications
4. Configure settings
5. Join domain (if applicable)
6. Test functionality

---

## Troubleshooting Installation Failures

### "This PC can't run Windows 11"

**Cause:** Hardware doesn't meet requirements (TPM, Secure Boot, CPU, UEFI)

**Solutions:**
1. Run PC Health Check tool to identify specific blocker
2. Enable TPM in UEFI/BIOS (may be called "PTT" or "AMD fTPM")
3. Enable Secure Boot in UEFI/BIOS
4. Update BIOS/UEFI firmware (may add TPM support)
5. If CPU unsupported: Install Windows 10 or upgrade hardware
6. **Bypass checks** (not recommended, unsupported):
   - Edit registry during install
   - Use modified ISO
   - Microsoft may block future updates

### "Windows Cannot Be Installed to This Disk"

**Full error:** "Windows cannot be installed to this disk. The selected disk has an MBR partition table. On EFI systems, Windows can only be installed to GPT disks."

**Cause:** Booted in UEFI mode but drive is MBR (or vice versa - booted BIOS but drive is GPT)

**Solutions:**
1. **Match boot mode to partition scheme:**
   - MBR drive → Boot USB in Legacy/BIOS mode
   - GPT drive → Boot USB in UEFI mode
2. **Convert partition scheme:**
   - Backup data
   - Delete all partitions during setup
   - Let Windows create new partitions (matches boot mode automatically)
3. **Use MBR2GPT** (if upgrading existing installation)

### "Setup Cannot Continue Due to Corrupted Installation Files"

**Cause:** Installation media is corrupted, USB drive defective, or download incomplete

**Solutions:**
1. Re-download Windows ISO from Microsoft (use official tool)
2. Verify checksum (SHA-256 hash) of downloaded ISO
3. Try different USB drive
4. Use different tool to create bootable USB (Rufus vs. Media Creation Tool)
5. Burn to DVD instead of USB
6. Test USB on another computer (ensure it boots)

### "No Device Drivers Were Found"

**Cause:** Windows Setup can't detect storage controller (often with NVMe SSDs or RAID)

**Solutions:**
1. Download storage controller drivers from motherboard/computer manufacturer
2. Copy drivers to USB flash drive
3. During setup, click "Load driver"
4. Browse to USB drive with drivers
5. Select appropriate driver
6. Installation continues

For NVMe SSDs in particular, may need to enable AHCI mode in BIOS/UEFI (if set to IDE/Legacy mode).

### Installation Stuck at Logo / Spinning Dots

**Cause:** Hardware incompatibility, driver issue, or corrupted installation media

**Solutions:**
1. Disconnect all unnecessary peripherals (USB devices, external drives)
2. Try different installation media (different USB, DVD)
3. Check RAM (one stick at a time - identify faulty RAM)
4. Update BIOS/UEFI firmware
5. Change SATA mode in BIOS (AHCI vs. RAID)
6. Try Legacy boot mode instead of UEFI (or vice versa)

### Blue Screen During Installation

**Cause:** Hardware issue (RAM, drive), incompatible driver, or corrupted installation files

**Solutions:**
1. Note STOP code (e.g., "DRIVER_IRQL_NOT_LESS_OR_EQUAL")
2. Test RAM (remove all but one stick, test each individually)
3. Test storage drive (run manufacturer diagnostic tool)
4. Update BIOS/UEFI firmware
5. Remove discrete graphics card, use integrated graphics
6. Check for overheating (ensure fans working)

---

## Key Exam Tips

🎯 **Installation Types:** Clean install (wipes data), in-place upgrade (keeps files/apps), repair install (fixes Windows, keeps data).

🎯 **Installation Media:** USB (most common, fastest), DVD (legacy), PXE (network boot for enterprises), external drives.

🎯 **Image Deployment:** Create master image, Sysprep to generalize, capture with DISM/WDS, deploy to multiple computers.

🎯 **Sysprep:** Removes computer-specific information (name, SID) before capturing image. Required for imaging.

🎯 **Unattended Installation:** Answer file (autounattend.xml) automatically responds to setup prompts—no user interaction.

🎯 **Windows 11 Requirements:** TPM 2.0, UEFI, Secure Boot, approved CPU, 4 GB RAM, 64 GB storage, GPT partition.

🎯 **Windows 10 Requirements:** Much more lenient—1 GB RAM (32-bit), 2 GB RAM (64-bit), 16/32 GB storage, DirectX 9.

🎯 **MBR vs. GPT:** MBR (old, BIOS, 4 partitions, 2 TB max), GPT (new, UEFI, unlimited partitions, >2 TB drives).

🎯 **BIOS vs. UEFI:** BIOS (legacy, MBR), UEFI (modern, GPT, Secure Boot, faster, required for Windows 11).

🎯 **Secure Boot:** UEFI feature preventing unsigned bootloaders, required for Windows 11, prevents boot malware.

🎯 **Boot Mode Mismatch:** If boot USB in UEFI mode, creates GPT. If boot in Legacy mode, creates MBR. Must match.

🎯 **TPM (Trusted Platform Module):** Hardware security chip, required for Windows 11, stores encryption keys, enables BitLocker/device encryption.

---

## Key Takeaways

✅ Clean install wipes everything and starts fresh; in-place upgrade preserves files and applications

✅ USB flash drives are the modern standard for Windows installation—faster than DVD, reusable

✅ PXE network boot enables mass deployment in enterprises without physical media

✅ Image deployment captures configured system once, deploys to many computers—massive time savings

✅ Sysprep generalizes Windows image by removing computer-specific identifiers like SID and computer name

✅ Unattended installations use answer files (autounattend.xml) to automatically configure Windows without user input

✅ Windows 11 has strict requirements: TPM 2.0, UEFI, Secure Boot, specific CPUs, 64-bit only

✅ Windows 10 has lenient requirements and runs on most computers from 2010 onward

✅ MBR is legacy partition scheme for BIOS systems with 2 TB limit and 4 primary partitions

✅ GPT is modern partition scheme for UEFI systems supporting drives >2 TB and unlimited partitions

✅ UEFI is modern firmware replacing BIOS, supporting Secure Boot, faster booting, and GPT partitions

✅ Secure Boot prevents unsigned bootloaders from running, protecting against boot-level malware

✅ Boot mode (UEFI vs. Legacy) during installation determines partition scheme (GPT vs. MBR)

✅ Common installation issues include TPM/Secure Boot disabled, boot mode mismatch, corrupted media, missing drivers

✅ Always backup data before any installation or upgrade—even in-place upgrades can fail catastrophically

---

## Check Your Understanding

Test your knowledge with these scenario-based questions:

**1. A user wants to upgrade from Windows 10 to Windows 11 while keeping all their files and applications. What installation type should they use?**

<details>
<summary>Show Answer</summary>
<strong>In-place upgrade.</strong> This installation type preserves files, applications, and settings while upgrading to the new Windows version. Process: Run Windows 11 Setup from within Windows 10, choose "Keep personal files and apps," Setup handles everything automatically. The old Windows 10 installation moves to Windows.old folder (can delete after confirming upgrade successful). Critical: Verify hardware meets Windows 11 requirements BEFORE starting (TPM 2.0, UEFI, Secure Boot, approved CPU). If hardware doesn't meet requirements, upgrade will fail partway through—potentially leaving system in broken state. Run PC Health Check tool first to confirm compatibility. Note: In-place upgrade carries forward any existing problems from Windows 10, so if system has performance issues, clean install may be better long-term despite requiring reinstallation of applications.
</details>

**2. An IT department needs to deploy Windows 11 to 100 identical computers. What's the most efficient deployment method?**

<details>
<summary>Show Answer</summary>
<strong>Image-based deployment using Sysprep, DISM/WDS, and PXE boot.</strong> Workflow: 1) Configure one reference computer perfectly (install Windows, drivers, Office, all software, configure settings), 2) Run Sysprep to generalize image (removes computer-specific identifiers), 3) Capture image using DISM or Windows Deployment Services, 4) Configure PXE boot server with captured image, 5) Boot all 100 computers from network simultaneously, 6) Image deploys to all computers overnight while technician sleeps. This approach takes ~4 hours total work time versus 200+ hours for manual installations (2 hours × 100 computers). Additional benefits: Guaranteed identical configuration across all computers, centralized management, easy to update image and redeploy. Alternative for smaller deployments (5-20 computers): Create bootable USB with image, use Clonezilla to deploy from USB to each computer. Still much faster than manual installation but requires physical USB connection to each computer.
</details>

**3. During Windows 11 installation, you get error "Windows cannot be installed to this disk. The selected disk has an MBR partition table. On EFI systems, Windows can only be installed to GPT disks." What's the problem and solution?**

<details>
<summary>Show Answer</summary>
<strong>You booted the installation USB in UEFI mode, but the hard drive has MBR partitions (UEFI requires GPT).</strong> Solutions: 1) **Easiest:** During installation, delete all partitions on the drive. Windows Setup automatically creates GPT partitions (matches UEFI boot mode). WARNING: This deletes all data—backup first! 2) **Preserve data:** Convert MBR to GPT using MBR2GPT tool from Windows PE or booted Windows: `mbr2gpt /convert /disk:0`. Backup data first as conversion can fail. 3) **Alternative:** Reboot USB in Legacy/BIOS mode instead of UEFI mode. MBR partitions work with Legacy boot. However, this won't work for Windows 11 (requires UEFI and GPT). This error demonstrates importance of understanding boot modes—UEFI creates GPT, Legacy creates MBR. Mismatches prevent installation.
</details>

**4. You're preparing a Windows image for deployment. What command removes computer-specific information before capturing the image?**

<details>
<summary>Show Answer</summary>
<strong>Sysprep /generalize /oobe /shutdown</strong> This prepares Windows for imaging by removing: Computer name, Security Identifier (SID), hardware-specific drivers (some), user profiles (optional), activation status (unless volume license). Breakdown: `/generalize` removes unique identifiers, `/oobe` presents Out-of-Box Experience on first boot (user creates account, selects region, etc.), `/shutdown` powers off computer (ready to boot into Windows PE for image capture). Critical: After running Sysprep, DO NOT boot the computer back into Windows. Immediately boot into Windows PE and capture the image. If you boot Windows normally, it re-specializes (assigns new SID, computer name) and you must Sysprep again. Without Sysprep, all deployed computers have identical SIDs—catastrophic in domains where SID must be unique for authentication. Windows refuses domain join with duplicate SIDs.
</details>

**5. A computer won't boot after installing Windows 11. You discover TPM is disabled in UEFI settings. What happens when you enable TPM and reboot?**

<details>
<summary>Show Answer</summary>
<strong>Windows 11 should boot successfully once TPM is enabled.</strong> Windows 11 requires TPM 2.0 for installation AND booting. The installation likely succeeded but Windows won't boot without TPM available. Steps: 1) Enter UEFI/BIOS settings (press Del, F2, or appropriate key during startup), 2) Find TPM/Security Device settings (location varies—may be under "Advanced," "Security," or "Trusted Computing"), 3) Enable TPM (may be called "PTT" on Intel or "fTPM" on AMD systems), 4) Save and exit UEFI, 5) Windows 11 should boot normally. If TPM setting isn't present in UEFI, motherboard may not have TPM chip—you'd need to install discrete TPM module (if motherboard has TPM header) or the computer simply can't run Windows 11. Some older motherboards can add TPM support via BIOS update—check manufacturer website. This scenario emphasizes verifying all Windows 11 requirements BEFORE installation.
</details>

**6. You're installing Windows via PXE boot but computers aren't finding the PXE server. What are likely causes?**

<details>
<summary>Show Answer</summary>
<strong>Common causes: PXE boot disabled in UEFI/BIOS, network cable unplugged, DHCP server not configured for PXE, PXE server offline, or network boot not prioritized in boot order.</strong> Troubleshooting steps: 1) **Check UEFI/BIOS:** Enter settings, verify "Network Boot" or "PXE Boot" is enabled, ensure network boot is first in boot priority (before hard drive), 2) **Physical connection:** Verify Ethernet cable connected (Wi-Fi doesn't support PXE), check link lights on network port, 3) **DHCP configuration:** DHCP server must provide PXE boot server IP and boot file location (DHCP options 66 and 67), 4) **PXE server:** Verify Windows Deployment Services or alternative PXE server is running and accessible, 5) **Network connectivity:** Ping PXE server from another computer to verify it's online. PXE boot sequence: Computer broadcasts DHCP request → DHCP responds with IP + PXE server info → Computer contacts PXE server → Downloads boot files → Loads Windows PE. Failure at any step prevents PXE boot.
</details>

**7. After upgrading to Windows 11, the C: drive is nearly full. There's a 20 GB "Windows.old" folder. Is it safe to delete?**

<details>
<summary>Show Answer</summary>
<strong>Yes, AFTER verifying the upgrade was successful and you don't need to roll back.</strong> Windows.old contains previous Windows installation, allowing rollback if upgrade causes problems. Keep it for 10-14 days post-upgrade as safety net. If everything works fine (applications run, files intact, no major issues), delete it to reclaim space: Method 1 - Disk Cleanup: Right-click C: → Properties → Disk Cleanup → "Clean up system files" → Check "Previous Windows installation(s)" → OK → Delete Files. Method 2 - Settings: Settings → System → Storage → Temporary files → Check "Previous Windows installation" → Remove files. Method 3 - Command: `rd /s /q C:\Windows.old` (Command Prompt as admin). After deletion, you CANNOT roll back to previous Windows version—you'd need clean installation. Never delete Windows.old if experiencing post-upgrade problems until resolving them. Space reclaimed typically 10-25 GB depending on previous installation size.
</details>

**8. You need to create a bootable Windows 11 USB drive. The USB is 8 GB, formatted as FAT32. Will this work?**

<details>
<summary>Show Answer</summary>
<strong>Maybe not—Windows 11 install.wim file often exceeds 4 GB, and FAT32 has 4 GB file size limit.</strong> Problem: FAT32 cannot store files larger than 4 GB. Windows 11's install.wim (contains Windows files) is frequently >4 GB. UEFI requires FAT32 for boot partition, creating conflict. Solutions: 1) **Split method:** Use tool that splits install.wim into smaller files fitting FAT32, 2) **NTFS USB:** Format USB as NTFS (supports large files), but some UEFI systems won't boot from NTFS USB, 3) **Use Rufus:** Rufus tool automatically handles this—creates FAT32 boot partition + NTFS data partition on same USB, 4) **Use official Media Creation Tool:** Microsoft's tool creates properly formatted USB automatically. Recommended approach: Use Rufus or Media Creation Tool—both handle complexity automatically. For exam: Know FAT32 has 4 GB file limit, NTFS doesn't. Modern Windows ISOs may not fit FAT32 constraints, requiring workarounds.
</details>

**9. A user runs PC Health Check and sees "This PC doesn't meet Windows 11 requirements" with message "Secure Boot must be enabled." How do you fix this?**

<details>
<summary>Show Answer</summary>
<strong>Enable Secure Boot in UEFI settings, but first verify prerequisites (UEFI mode and GPT partition).</strong> Secure Boot requirements: 1) Computer must use UEFI firmware (not Legacy BIOS), 2) Hard drive must use GPT partitioning (not MBR). Steps: 1) **Verify UEFI mode:** Run `msinfo32`, check "BIOS Mode"—if says "Legacy," must convert to UEFI before enabling Secure Boot, 2) **Verify GPT:** Run `diskmgmt.msc`, right-click disk → Properties → Volumes tab → Partition style shows "GPT" (if MBR, must convert—requires backup and reinstallation or MBR2GPT tool), 3) **Enable Secure Boot:** Restart computer → Enter UEFI settings → Find Secure Boot option (usually under Security or Boot tab) → Set to Enabled → Save and exit, 4) **Verify:** Run PC Health Check again. If computer is BIOS/MBR, enabling Secure Boot requires: converting MBR to GPT, switching firmware to UEFI mode. Complex process—backup data first. Some older computers can't support Secure Boot due to hardware limitations.
</details>

**10. During unattended installation, Windows still prompts for product key despite key being in answer file. What's likely wrong?**

<details>
<summary>Show Answer</summary>
<strong>Product key is in wrong configuration pass in the answer file, or answer file has XML syntax error preventing it from being read.</strong> Product key must be in **windowsPE** configuration pass (earliest pass during setup), not specialize or oobeSystem. Correct XML structure:
```xml
<settings pass="windowsPE">
    <component name="Microsoft-Windows-Setup">
        <UserData>
            <ProductKey>
                <Key>XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</Key>
            </ProductKey>
        </UserData>
    </component>
</settings>
```
Troubleshooting: 1) **Validate XML:** Open autounattend.xml in Windows System Image Manager (validates syntax automatically). Even one missing bracket breaks entire answer file—Windows ignores it and prompts normally, 2) **Check filename:** Must be exactly `autounattend.xml` (case doesn't matter, but spelling does), 3) **Location:** Must be root of USB drive or in specific Windows PE search paths, 4) **Test in VM:** Validate answer file works in virtual machine before deploying to physical hardware. Common mistakes: Typos in XML tags, incorrect nesting, wrong configuration pass, invalid product key format. Answer files are powerful but fragile—syntax must be perfect.
</details>

---

## Before Moving to Lesson 40

Make sure you can confidently:

✅ Explain differences between clean install, in-place upgrade, and repair installation  
✅ Create bootable USB installation media using Media Creation Tool or Rufus  
✅ Understand image-based deployment workflow (Sysprep, capture, deploy)  
✅ Describe purpose of Sysprep and when to run it  
✅ Explain unattended installations and answer files  
✅ Verify Windows 11 system requirements (TPM 2.0, UEFI, Secure Boot, CPU)  
✅ Differentiate MBR and GPT partition schemes and their limitations  
✅ Distinguish BIOS and UEFI firmware and their boot processes  
✅ Enable Secure Boot and understand its purpose  
✅ Troubleshoot common installation failures (TPM, boot mode mismatch, corrupted media)  
✅ Perform clean Windows installation from start to finish  

**Study Strategy:**

1. **Hands-on practice (essential):** Install Windows in VirtualBox or physical computer. Experience the process firsthand.
2. **Create installation media:** Download Media Creation Tool, create bootable USB, test it.
3. **Test Sysprep:** Install Windows in VM, run Sysprep, see what happens (computer generalizes and shuts down).
4. **Check your computer:** Run msinfo32—are you UEFI or Legacy? GPT or MBR? TPM enabled?
5. **Professor Messer videos:** Watch installation sections, note exam-specific tips.
6. **Flashcards:** Create cards for requirements, differences (MBR vs GPT, BIOS vs UEFI), installation types.

Installation is fundamental IT skill. Whether deploying one computer or one thousand, understanding installation methods, requirements, and troubleshooting makes you invaluable. These concepts directly translate to real-world support scenarios.

---

## Coming Up in Lesson 40

**Lesson 40: Windows Upgrade and Migration**

Building on installation knowledge, we'll dive into upgrading existing Windows installations: supported upgrade paths (which versions can upgrade to which), edition upgrades (Home to Pro), in-place upgrade procedures, feature updates vs. quality updates, Windows Update for Business, compatibility checking, driver management, user data migration strategies, Windows Easy Transfer alternatives, post-upgrade verification, rollback procedures when things go wrong, and troubleshooting common upgrade failures. You'll learn how to safely upgrade hundreds of computers with minimal downtime and maximum success rates. Get ready to master Windows upgrades and migrations!

---

*"Anyone can install Windows by clicking Next repeatedly. Professionals understand the why behind each choice, the consequences of different methods, and how to troubleshoot when things go wrong."*

---

# ✅ LESSON 39 COMPLETE!

**Progress:** 39 of 60 lessons complete (65.0%) 🎯

Excellent work! You've mastered Windows installation methods—from basic clean installs to enterprise image deployment. Understanding installation types, system requirements, partition schemes, boot modes, and troubleshooting separates beginners from professionals. Whether you're setting up one computer for a home user or deploying hundreds in a datacenter, you now have the knowledge to choose the right method, execute efficiently, and fix problems when they arise. Next up: building on this foundation with upgrade and migration strategies!