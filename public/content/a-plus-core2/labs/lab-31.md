# Lab 31: Windows 10 and Windows 11 Features

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 1.1 - Identify basic features of Microsoft Windows editions

---

## Section 1: Concept Check (5 min)

Answer these questions based on your current knowledge:

1. What are the four main Windows editions you need to know for the A+ exam, and who is each edition designed for?

2. A small business owner asks you: "Why should I pay more for Windows Pro instead of Home?" What are THREE features exclusive to Pro that would benefit a business?

3. What is the difference between Windows Pro and Windows Pro for Workstations? When would someone need the Workstations edition?

4. Your client wants to upgrade from Windows 10 to Windows 11. What is the controversial hardware requirement that prevents many older PCs from upgrading?

5. A user is confused about why their Windows 11 Start menu looks different from their Windows 10 computer at work. Explain the key visual differences between Windows 10 and Windows 11.

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on Windows 10 or 11.

#### Activity A: Identify Your Windows Edition

**Goal:** Determine exactly which Windows edition and version you're running.

**Step 1:** Open System Information

Press `Windows + R`, type `winver`, and press Enter.

Document what you find:

| Information | Your System |
|-------------|-------------|
| Windows Edition (Home/Pro/etc.) | |
| Version Number (e.g., 22H2) | |
| OS Build Number | |

**Step 2:** Get detailed system info

Press `Windows + I` to open Settings, then navigate to **System → About**.

| Information | Your System |
|-------------|-------------|
| Device name | |
| Processor | |
| Installed RAM | |
| System type (32-bit or 64-bit) | |
| Edition | |
| Version | |
| Experience (Windows 11 only) | |

**Step 3:** Check via Command Prompt

Open Command Prompt and run: `systeminfo | findstr /B /C:"OS"`

What additional information does this command reveal?

---

#### Activity B: Edition Feature Comparison

**Goal:** Understand which features are available in which editions.

Complete this feature availability table:

| Feature | Home | Pro | Pro for Workstations | Enterprise |
|---------|------|-----|---------------------|------------|
| Join Active Directory Domain | | | | |
| BitLocker Drive Encryption | | | | |
| Remote Desktop (as HOST) | | | | |
| Group Policy Editor (gpedit.msc) | | | | |
| Hyper-V Virtualization | | | | |
| Windows Sandbox | | | | |
| Maximum RAM Supported | | | | |
| ReFS File System Support | | | | |
| Assigned Access (Kiosk Mode) | | | | |
| Windows Update for Business | | | | |

**Research Challenge:** For features marked "No" on Home edition, can you find any workarounds or third-party alternatives that provide similar functionality?

---

#### Activity C: Explore Windows Features

**Goal:** See which optional Windows features are available on your system.

**Step 1:** Open Windows Features

Press `Windows + R`, type `optionalfeatures`, and press Enter.

Document which features are currently enabled on your system:

| Feature | Enabled? | Purpose |
|---------|----------|---------|
| .NET Framework 3.5 | | |
| Hyper-V (if visible) | | |
| Internet Explorer 11 | | |
| Microsoft Print to PDF | | |
| Telnet Client | | |
| TFTP Client | | |
| Windows Sandbox (if visible) | | |
| Windows Subsystem for Linux | | |
| SMB 1.0/CIFS File Sharing Support | | |

**Question:** Which features are NOT visible on your system? What does their absence tell you about your Windows edition?

---

#### Activity D: Windows 10 vs Windows 11 Interface Comparison

**Goal:** Identify the key UI differences between Windows versions.

If you have Windows 11, document these interface elements. If you have Windows 10, research what Windows 11 looks like and note the differences:

| Interface Element | Windows 10 | Windows 11 |
|-------------------|------------|------------|
| Start Menu position | | |
| Start Menu layout | | |
| Taskbar icon alignment | | |
| Right-click context menus | | |
| Settings app design | | |
| File Explorer tabs | | |
| Snap layouts access | | |
| Widgets location | | |
| Default window corners | | |

**Your Windows Version:** _______________

---

#### Activity E: Windows 11 Hardware Requirements Check

**Goal:** Verify if a system meets Windows 11 requirements.

**Step 1:** Check TPM Status

Press `Windows + R`, type `tpm.msc`, and press Enter.

| TPM Information | Your System |
|-----------------|-------------|
| TPM Present? | Yes / No |
| TPM Version | |
| TPM Status | |

**Step 2:** Check Secure Boot Status

Open Command Prompt as Administrator and run: `msinfo32`

Look for "Secure Boot State" under System Summary.

| Secure Boot Info | Your System |
|------------------|-------------|
| BIOS Mode (Legacy/UEFI) | |
| Secure Boot State | |

**Step 3:** Windows 11 Compatibility Summary

Based on your findings, complete this checklist:

| Requirement | Windows 11 Minimum | Your System | Pass? |
|-------------|-------------------|-------------|-------|
| Processor | 1 GHz, 2+ cores, 64-bit | | |
| RAM | 4 GB | | |
| Storage | 64 GB | | |
| TPM | Version 2.0 | | |
| UEFI with Secure Boot | Required | | |
| DirectX | 12 with WDDM 2.0 | | |

**Would your system qualify for Windows 11?** _______________

---

#### Activity F: Group Policy Availability Test

**Goal:** Determine if Group Policy Editor is available on your system.

Press `Windows + R`, type `gpedit.msc`, and press Enter.

**Result:**

☐ Group Policy Editor opened successfully (You have Pro/Enterprise)

☐ "Windows cannot find 'gpedit.msc'" error (You have Home edition)

If Group Policy is available, navigate to:
**Computer Configuration → Administrative Templates → System**

List three policies you find interesting:

1. _______________
2. _______________
3. _______________

---

## Section 3: Reflection (5 min)

Consider these real-world scenarios:

**Scenario 1:** A dental office with 15 computers needs to join them to a domain, encrypt patient data with BitLocker, and allow the IT admin to remote into any machine for support. The office manager wants to save money by buying Windows Home. What do you tell them?

**Scenario 2:** A video editor complains that their Windows 10 Pro system only recognizes 128 GB of their 256 GB RAM. They're rendering 8K footage and need all available memory. What Windows edition would solve this problem, and what's the key difference?

**Scenario 3:** A client's 5-year-old laptop running Windows 10 perfectly fine shows "This PC doesn't meet Windows 11 requirements" when checking for updates. After investigation, you find it has a 6th generation Intel processor and TPM 1.2. What are their options?

**Scenario 4:** An employee working from home needs to connect to their office computer using Remote Desktop. Their office PC has Windows 10 Pro, but their home PC has Windows 10 Home. Can they complete this connection? Explain the difference between Remote Desktop HOST and CLIENT.

---

## What You Learned Today

- ✅ How to identify your Windows edition and version
- ✅ The key differences between Home, Pro, Pro for Workstations, and Enterprise
- ✅ Which features require Pro edition (Domain join, BitLocker, Remote Desktop Host, Group Policy, Hyper-V)
- ✅ Windows 11 hardware requirements (TPM 2.0, UEFI, Secure Boot)
- ✅ How to check TPM and Secure Boot status
- ✅ Visual differences between Windows 10 and Windows 11
- ✅ How to access Windows Features and Group Policy Editor
- ✅ Real-world scenarios for choosing the right Windows edition

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