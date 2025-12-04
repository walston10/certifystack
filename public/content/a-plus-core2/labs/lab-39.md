# Lab 39: Windows Installation Methods

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 1.9 - Given a scenario, perform OS installations and upgrades

---

## Section 1: Concept Check (5 min)

1. What is the difference between a clean install and an in-place upgrade? When would you choose each?

2. What are the two partition styles (MBR vs GPT), and which is required for UEFI systems?

3. A computer has Legacy BIOS but you want to install Windows 11. What's the problem, and can it be solved?

4. What is PXE boot, and why would an organization use it instead of USB drives?

5. During installation, Windows asks if you want to "Upgrade" or "Custom." What happens if you choose Custom on a computer with an existing Windows installation?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Research and system exploration.

#### Activity A: Current System Analysis

**Goal:** Understand your system's installation configuration.

**Step 1:** Check BIOS mode

Open System Information: `msinfo32`

| Property | Your Value |
|----------|------------|
| BIOS Mode | UEFI / Legacy |
| Secure Boot State | On / Off / Unsupported |

**Step 2:** Check partition style

Open Disk Management: `diskmgmt.msc`

Right-click on "Disk 0" (left side) → Properties → Volumes tab

| Property | Your Value |
|----------|------------|
| Partition style | MBR / GPT |
| Disk type | Basic / Dynamic |

**Step 3:** Check Windows installation type

Open Command Prompt as Administrator:

```cmd
reagentc /info
```

| Property | Your Value |
|----------|------------|
| Windows RE status | Enabled / Disabled |
| Windows RE location | |
| BCD identifier | |

---

#### Activity B: Installation Methods Comparison

**Goal:** Understand different installation scenarios.

**Complete this comparison:**

| Method | Best For | Pros | Cons |
|--------|----------|------|------|
| Clean Install (USB) | | | |
| In-Place Upgrade | | | |
| Reset this PC | | | |
| Windows PE/Image | | | |
| PXE/Network Boot | | | |
| Repair Install | | | |

---

#### Activity C: MBR vs GPT Deep Dive

**Goal:** Understand partition table differences.

**Complete this table:**

| Feature | MBR | GPT |
|---------|-----|-----|
| Maximum disk size | | |
| Maximum partitions | | |
| Boot mode supported | | |
| Partition table backup | | |
| Required for Windows 11 | | |
| Data integrity checking | | |

**Conversion considerations:**

| Scenario | Can Convert? | Data Loss? |
|----------|--------------|------------|
| MBR to GPT (empty disk) | | |
| MBR to GPT (with data, Windows 10+) | | |
| GPT to MBR (with data) | | |

**Command for conversion (documentation only):**
```cmd
mbr2gpt /validate /disk:0
mbr2gpt /convert /disk:0
```

---

#### Activity D: Windows 11 Requirements Check

**Goal:** Verify hardware requirements for Windows 11.

**Run the PC Health Check or manual verification:**

| Requirement | Minimum | Your System | Pass? |
|-------------|---------|-------------|-------|
| Processor | 1 GHz, 2+ cores, 64-bit | | |
| RAM | 4 GB | | |
| Storage | 64 GB | | |
| TPM | Version 2.0 | | |
| Secure Boot | Capable | | |
| UEFI | Required | | |
| Display | 720p, 9" | | |
| DirectX | 12 with WDDM 2.0 | | |
| Internet | Required for setup | | |

**Check TPM:** `tpm.msc`

| TPM Property | Value |
|--------------|-------|
| TPM Present | |
| Manufacturer | |
| Version | |
| Status | |

---

#### Activity E: Recovery Options

**Goal:** Understand Windows recovery and reset options.

**Step 1:** Access Recovery settings

Settings → System → Recovery (Win 11) or Update & Security → Recovery (Win 10)

**Document available options:**

| Option | What It Does | Keeps Files? |
|--------|--------------|--------------|
| Reset this PC - Keep my files | | |
| Reset this PC - Remove everything | | |
| Advanced startup | | |
| Go back (if available) | | |

**Step 2:** Advanced Startup options

What can you access from Advanced Startup?

| Option | Purpose |
|--------|---------|
| Startup Repair | |
| Startup Settings | |
| Command Prompt | |
| Uninstall Updates | |
| System Restore | |
| System Image Recovery | |
| UEFI Firmware Settings | |

---

#### Activity F: Unattended Installation Concepts

**Goal:** Understand automated installation methods.

**Answer file (autounattend.xml) can configure:**

| Setting | Purpose |
|---------|---------|
| Product key | |
| Language and locale | |
| Disk partitioning | |
| User account creation | |
| Computer name | |
| Domain join | |
| Installed features | |

**Deployment methods:**

| Method | Scale | Tools Required |
|--------|-------|----------------|
| USB with answer file | | |
| Windows Deployment Services | | |
| Microsoft Deployment Toolkit | | |
| SCCM/Endpoint Manager | | |
| Autopilot | | |

---

#### Activity G: Boot Configuration

**Goal:** Understand boot configuration data.

**View boot configuration:**

Open Command Prompt as Administrator:
```cmd
bcdedit
```

Document the boot manager entries:

| Identifier | Description | Device |
|------------|-------------|--------|
| {bootmgr} | | |
| {current} | | |
| {default} | | |

**Boot order check:**

If you have multiple OS entries, how would you change the default?

```cmd
bcdedit /default {identifier}
bcdedit /timeout 30
```

---

## Section 3: Reflection (5 min)

**Scenario 1:** A client has a computer running Windows 10 Pro with an MBR partition and Legacy BIOS. They want to upgrade to Windows 11. What steps are required, and is data loss inevitable?

**Scenario 2:** An IT department needs to deploy Windows 11 to 100 new computers. The computers arrive with no OS. What installation method would be most efficient, and what would they need to set up?

**Scenario 3:** A user's Windows 10 machine is having serious problems, but they have important files in their Documents folder and on their Desktop. They ask you to "reinstall Windows." What options can you offer that would preserve their files?

**Scenario 4:** After a failed Windows Update, a computer won't boot. It shows the Windows logo then restarts in a loop. What recovery options would you try, and in what order?

---

## What You Learned Today

- ✅ Clean install vs in-place upgrade vs repair install
- ✅ MBR vs GPT partition styles and their requirements
- ✅ BIOS/Legacy vs UEFI boot modes
- ✅ Windows 11 specific hardware requirements
- ✅ Recovery options (Reset, Advanced Startup)
- ✅ Unattended installation concepts
- ✅ Boot configuration (bcdedit)
- ✅ Enterprise deployment methods (PXE, WDS, MDT)

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