# Lab 31: Windows 10 and Windows 11 Features - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Windows Editions

The four main Windows editions for the A+ exam:

| Edition | Target User | Key Characteristics |
|---------|-------------|---------------------|
| **Home** | Consumers, home users | Basic features, no domain join, Microsoft account focused |
| **Pro** | Small businesses, power users | Domain join, BitLocker, Remote Desktop host, Group Policy |
| **Pro for Workstations** | Engineers, data scientists, content creators | Extreme hardware support (6 TB RAM, 4 CPUs), ReFS |
| **Enterprise** | Large organizations | Volume licensing only, advanced security (AppLocker, DirectAccess) |

---

### Question 2: Why Pro Over Home (Business Benefits)

Three Pro-exclusive features that benefit businesses:

1. **Active Directory Domain Join** - Allows centralized management of all computers, user accounts, and security policies from a single server. Essential for any business with more than a few computers.

2. **BitLocker Drive Encryption** - Full disk encryption protects sensitive business data if a laptop is lost or stolen. Required for many compliance standards (HIPAA, PCI-DSS).

3. **Remote Desktop Host** - Allows IT support to remotely access and troubleshoot employee computers without physically visiting each workstation. Home edition can only connect TO other computers, not accept incoming connections.

Other notable Pro features: Group Policy Editor, Hyper-V virtualization, Windows Sandbox, Assigned Access (kiosk mode).

---

### Question 3: Pro vs Pro for Workstations

**Key differences:**

| Feature | Pro | Pro for Workstations |
|---------|-----|---------------------|
| Maximum RAM | 2 TB | 6 TB |
| Maximum CPUs | 2 | 4 |
| ReFS File System | No | Yes |
| Persistent Memory (NVDIMM) | No | Yes |
| SMB Direct (RDMA) | Limited | Full support |

**When to use Pro for Workstations:**
- Video editors working with 8K/12K footage needing massive RAM
- Data scientists running large machine learning models
- CAD/CAM engineers with complex 3D modeling
- Scientific computing requiring extreme memory capacity
- Workloads requiring ReFS for data integrity

---

### Question 4: Windows 11 Hardware Requirement

The controversial requirement is **TPM 2.0** (Trusted Platform Module version 2.0).

**Why it's controversial:**
- Many perfectly functional computers (especially those from before 2016) have TPM 1.2 or no TPM
- Some systems have TPM 2.0 disabled in BIOS by default
- TPM is a security chip, not a performance requirement
- Microsoft argues it's necessary for security features like Windows Hello, BitLocker, and Secure Boot

**Additional requirements that block upgrades:**
- 8th generation Intel or newer (or AMD Zen 2+)
- UEFI firmware (not Legacy BIOS)
- Secure Boot capability
- 64-bit processor only (no 32-bit support in Windows 11)

---

### Question 5: Windows 10 vs 11 Visual Differences

| Element | Windows 10 | Windows 11 |
|---------|------------|------------|
| **Start Menu** | Left corner, live tiles, full-width app list | Centered, simplified grid, no live tiles, pinned apps + recommended |
| **Taskbar** | Icons left-aligned, can be positioned on any edge | Icons centered (can be left-aligned), bottom only |
| **Window corners** | Sharp, square corners | Rounded corners throughout |
| **Context menus** | Full menu with all options | Simplified menu with "Show more options" for legacy items |
| **Settings** | Functional design | More visual, reorganized categories |
| **Widgets** | Not present (Cortana instead) | Dedicated Widgets panel on left side |

---

## Section 2: Activities - Answers

### Activity A: Identify Your Windows Edition

**Example completed table:**

| Information | Example System |
|-------------|----------------|
| Windows Edition | Windows 11 Pro |
| Version Number | 23H2 |
| OS Build Number | 22631.3007 |

**Settings → About example:**

| Information | Example System |
|-------------|----------------|
| Device name | DESKTOP-ABC123 |
| Processor | Intel Core i7-12700K |
| Installed RAM | 32.0 GB |
| System type | 64-bit operating system, x64-based processor |
| Edition | Windows 11 Pro |
| Version | 23H2 |
| Experience | Windows Feature Experience Pack 1000.22681.1000.0 |

**Command Prompt output:**
```
OS Name:                   Microsoft Windows 11 Pro
OS Version:                10.0.22631 N/A Build 22631
OS Manufacturer:           Microsoft Corporation
OS Configuration:          Standalone Workstation
OS Build Type:             Multiprocessor Free
```

---

### Activity B: Edition Feature Comparison

| Feature | Home | Pro | Pro for Workstations | Enterprise |
|---------|------|-----|---------------------|------------|
| Join Active Directory Domain | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| BitLocker Drive Encryption | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Remote Desktop (as HOST) | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Group Policy Editor | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Hyper-V Virtualization | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Windows Sandbox | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Maximum RAM Supported | 128 GB | 2 TB | 6 TB | 6 TB |
| ReFS File System Support | ❌ No | ❌ No | ✅ Yes | ✅ Yes |
| Assigned Access (Kiosk Mode) | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |
| Windows Update for Business | ❌ No | ✅ Yes | ✅ Yes | ✅ Yes |

**Workarounds for Home edition:**
- **BitLocker alternative:** VeraCrypt (free, open-source full-disk encryption)
- **Remote Desktop alternative:** TeamViewer, AnyDesk, Chrome Remote Desktop
- **Group Policy alternative:** Registry edits (more complex, less user-friendly)
- **Hyper-V alternative:** VirtualBox, VMware Workstation Player (free)

---

### Activity C: Windows Features

**Common Windows Features and purposes:**

| Feature | Purpose |
|---------|---------|
| .NET Framework 3.5 | Run legacy applications requiring .NET 3.5 or earlier |
| Hyper-V | Microsoft's hypervisor for running virtual machines |
| Internet Explorer 11 | Legacy browser for old web applications |
| Microsoft Print to PDF | Virtual printer that creates PDF files |
| Telnet Client | Command-line tool for testing network connections |
| TFTP Client | Simple file transfer protocol client |
| Windows Sandbox | Isolated environment for testing untrusted software |
| Windows Subsystem for Linux | Run Linux distributions natively in Windows |
| SMB 1.0/CIFS | Legacy file sharing (security risk, disabled by default) |

**Features not visible on Home edition:**
- Hyper-V (requires Pro or higher)
- Windows Sandbox (requires Pro or higher)

This indicates you're running Windows Home if these are missing.

---

### Activity D: Windows 10 vs Windows 11 Interface

| Interface Element | Windows 10 | Windows 11 |
|-------------------|------------|------------|
| Start Menu position | Bottom-left corner | Bottom-center (default) |
| Start Menu layout | Live tiles, alphabetical app list | Pinned apps grid, Recommended section |
| Taskbar icon alignment | Left-aligned | Centered (configurable) |
| Right-click context menus | Full traditional menu | Simplified with "Show more options" |
| Settings app design | Functional, category-based | Modern, visual, reorganized |
| File Explorer tabs | Not available | Tabbed interface (like browser) |
| Snap layouts access | Drag to edges/corners | Hover over maximize button |
| Widgets location | Not present | Left side of taskbar |
| Default window corners | Square | Rounded |

---

### Activity E: Windows 11 Hardware Requirements

**TPM Check example:**
| TPM Information | Example System |
|-----------------|----------------|
| TPM Present? | Yes |
| TPM Version | 2.0 |
| TPM Status | The TPM is ready for use |

**Secure Boot Check example:**
| Secure Boot Info | Example System |
|------------------|----------------|
| BIOS Mode | UEFI |
| Secure Boot State | On |

**Windows 11 Requirements Check:**

| Requirement | Windows 11 Minimum | Example System | Pass? |
|-------------|-------------------|----------------|-------|
| Processor | 1 GHz, 2+ cores, 64-bit | Intel i7-12700K (12 cores) | ✅ |
| RAM | 4 GB | 32 GB | ✅ |
| Storage | 64 GB | 1 TB NVMe | ✅ |
| TPM | Version 2.0 | TPM 2.0 | ✅ |
| UEFI with Secure Boot | Required | UEFI, Secure Boot On | ✅ |
| DirectX | 12 with WDDM 2.0 | DirectX 12 Ultimate | ✅ |

---

### Activity F: Group Policy Test

**If Group Policy opened:** You have Windows Pro, Pro for Workstations, or Enterprise.

**Interesting policies in Computer Configuration → Administrative Templates → System:**

1. **Specify settings for optional component installation** - Controls where Windows gets optional features
2. **Turn off Autoplay** - Disables automatic running of media when inserted
3. **Do not display the lock screen** - Skips lock screen for faster login
4. **Limit local account use of blank passwords** - Prevents passwordless local accounts for network access

---

## Section 3: Reflection - Answers

### Scenario 1: Dental Office Windows Edition

**Response to office manager:**

"I understand the desire to save money, but Windows Home won't work for your needs. Here's why:

1. **Domain Requirement** - With 15 computers, you need Active Directory for centralized management. Windows Home cannot join a domain, so each computer would need separate local accounts, making management nearly impossible.

2. **BitLocker for HIPAA** - As a dental office, you're subject to HIPAA regulations. Patient data must be encrypted. BitLocker is included with Pro; without it, you'd need third-party encryption software anyway.

3. **Remote Support** - When issues arise, your IT person needs Remote Desktop access. Home edition can't receive incoming Remote Desktop connections.

The price difference between Home and Pro is approximately $50-100 per license. For 15 computers, that's $750-1,500 extra. Compare that to the cost of a HIPAA violation (starting at $100 per violation) or the productivity loss from manual management, and Pro is clearly the smart investment."

---

### Scenario 2: RAM Not Recognized (256 GB)

**Solution: Windows 10/11 Pro for Workstations**

The issue is that Windows Pro supports a maximum of **2 TB RAM**, but the key difference is that standard Pro editions on some older builds had lower practical limits. More importantly, for extreme workstation use cases like 8K video rendering:

**Pro for Workstations provides:**
- **6 TB maximum RAM** (vs 2 TB for Pro)
- **ReFS file system** for better data integrity with large files
- **Persistent Memory (NVDIMM)** support
- **SMB Direct** for faster network file access

For a video editor working with 8K footage, Pro for Workstations is designed exactly for this use case. The ~$100 premium over standard Pro is minimal compared to the $10,000+ workstation hardware.

---

### Scenario 3: Old Laptop Can't Upgrade to Windows 11

**The situation:**
- 6th generation Intel processor = Not on Microsoft's supported CPU list
- TPM 1.2 = Below the required TPM 2.0

**Options for the client:**

1. **Stay on Windows 10** - Microsoft supports Windows 10 until October 2025. After that, Extended Security Updates (ESU) may be available for a fee.

2. **Workaround installation** - There are unofficial methods to bypass the TPM/CPU checks using registry edits during installation. However:
   - Microsoft doesn't support this
   - May have issues with future updates
   - Could become unstable

3. **Hardware upgrade** - If the laptop has upgradeable TPM (unlikely) or can have a discrete TPM added (rare).

4. **Replace the device** - If the laptop is 5+ years old and needs Windows 11 for business reasons, this may be the most practical solution.

5. **Switch to Linux** - If Windows isn't required, Linux distributions have no such hardware requirements.

**Recommended approach:** Stay on Windows 10 until ESU ends, then evaluate if the laptop's other hardware justifies a workaround or if replacement is more practical.

---

### Scenario 4: Remote Desktop Host vs Client

**Answer:** Yes, they can complete the connection, but only in one direction.

**Explanation:**

| Role | Description | Windows Home | Windows Pro |
|------|-------------|--------------|-------------|
| **CLIENT** | Initiates connection TO another computer | ✅ Yes | ✅ Yes |
| **HOST** | Receives incoming connections | ❌ No | ✅ Yes |

- **Office PC (Pro)** = Can be the HOST (accept incoming connections) ✅
- **Home PC (Home)** = Can only be a CLIENT (initiate connections) ✅

**The connection will work** because:
- The employee's home PC (Windows Home) can RUN the Remote Desktop Client
- The office PC (Windows Pro) can ACCEPT the incoming connection as Host

**The reverse would NOT work:**
- If the employee wanted to let someone RDP into their home PC, Windows Home cannot accept incoming connections
- They would need to upgrade to Pro or use third-party software (TeamViewer, AnyDesk)

**Key exam point:** "Remote Desktop" on Home means CLIENT only. Pro/Enterprise required to HOST connections.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                    WINDOWS EDITIONS QUICK REFERENCE                        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  EDITION FEATURES                                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  HOME:        Basic features, Microsoft account, no domain, no BitLocker  ║
║  PRO:         + Domain join, BitLocker, RDP Host, Group Policy, Hyper-V   ║
║  PRO WS:      + ReFS, Persistent Memory, 6 TB RAM, 4 CPUs                 ║
║  ENTERPRISE:  + AppLocker, DirectAccess, BranchCache (Volume license)     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WINDOWS 11 REQUIREMENTS                                                   ║
║  ─────────────────────────────────────────────────────────────────────────║
║  CPU: 1 GHz, 2+ cores, 64-bit     │  RAM: 4 GB minimum                    ║
║  Storage: 64 GB minimum           │  TPM: Version 2.0 required            ║
║  Firmware: UEFI with Secure Boot  │  Display: 720p, 9" diagonal           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  QUICK COMMANDS                                                            ║
║  ─────────────────────────────────────────────────────────────────────────║
║  winver              → Check Windows version                               ║
║  tpm.msc             → Check TPM status                                    ║
║  msinfo32            → System information (Secure Boot status)            ║
║  gpedit.msc          → Group Policy Editor (Pro/Enterprise only)          ║
║  optionalfeatures    → Windows Features dialog                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  WIN 10 vs WIN 11 UI DIFFERENCES                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Start Menu: Left-aligned (10) → Centered (11)                            ║
║  Corners: Square (10) → Rounded (11)                                       ║
║  Context Menus: Full options (10) → Simplified + "Show more" (11)         ║
║  Taskbar: Top/sides possible (10) → Bottom only (11)                      ║
║  File Explorer: No tabs (10) → Tabbed browsing (11)                       ║
╚═══════════════════════════════════════════════════════════════════════════╝
```