# Lab 46: Windows Security Features

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 2.6 - Given a scenario, configure Windows security settings

---

## Section 1: Concept Check (5 min)

1. What is BitLocker, and what hardware component does it typically require to store encryption keys?

2. What is the difference between Windows Defender Firewall and Windows Defender Antivirus?

3. What does User Account Control (UAC) protect against, and when does it prompt the user?

4. What is the difference between EFS (Encrypting File System) and BitLocker?

5. Why is it important to keep Windows Update enabled, and what types of updates does it provide?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Windows Defender Antivirus Configuration

**Goal:** Explore antivirus settings and options.

**Step 1:** Access Virus & threat protection

Windows Security → Virus & threat protection → Manage settings

| Setting | Current Value | Recommended |
|---------|---------------|-------------|
| Real-time protection | | On |
| Cloud-delivered protection | | On |
| Automatic sample submission | | On or Ask |
| Tamper Protection | | On |

**Step 2:** Exclusions

Click "Add or remove exclusions"

| Exclusion Type | Purpose |
|----------------|---------|
| File | |
| Folder | |
| File type | |
| Process | |

**When would you add exclusions?** _______________

**Risk of too many exclusions?** _______________

---

#### Activity B: Windows Defender Firewall

**Goal:** Explore firewall configuration.

**Step 1:** Access firewall settings

Open `firewall.cpl` or Windows Security → Firewall & network protection

| Profile | Status |
|---------|--------|
| Domain network | |
| Private network | |
| Public network | |

**Step 2:** Advanced settings

Open `wf.msc` (Windows Defender Firewall with Advanced Security)

**Inbound Rules - Document 5 enabled rules:**

| Rule Name | Program/Port | Action |
|-----------|--------------|--------|
| | | |
| | | |
| | | |
| | | |
| | | |

**Outbound Rules - Document 3 enabled rules:**

| Rule Name | Program/Port | Action |
|-----------|--------------|--------|
| | | |
| | | |
| | | |

**Step 3:** Rule components

| Component | Purpose |
|-----------|---------|
| Program | |
| Port | |
| Protocol | |
| Scope | |
| Action | |
| Profile | |

---

#### Activity C: BitLocker Status Check

**Goal:** Understand BitLocker drive encryption.

**Step 1:** Check BitLocker status

Open `manage-bde -status` in Command Prompt (Admin)

Or: Control Panel → BitLocker Drive Encryption

| Drive | Protection Status | Encryption Method |
|-------|-------------------|-------------------|
| C: | | |
| Other drives | | |

**Step 2:** TPM status

Open `tpm.msc`

| Property | Value |
|----------|-------|
| TPM Ready | |
| TPM Version | |
| Status | |

**Step 3:** BitLocker requirements

| Requirement | Your System |
|-------------|-------------|
| TPM 1.2 or higher | |
| UEFI firmware | |
| Secure Boot capable | |
| Windows Pro/Enterprise | |

**Recovery key importance:** _______________

---

#### Activity D: User Account Control Settings

**Goal:** Understand UAC configuration.

**Step 1:** Access UAC settings

Control Panel → User Accounts → Change User Account Control settings

**Document your current level:**

| Level | Description | Your Setting? |
|-------|-------------|---------------|
| 4 (Always notify) | Notifies for all changes | |
| 3 (Default) | Notifies when apps make changes | |
| 2 (Don't dim) | Same as 3 but no secure desktop | |
| 1 (Never notify) | Disabled - NOT recommended | |

**Step 2:** UAC behavior exploration

What triggers a UAC prompt?

| Action | UAC Prompt? |
|--------|-------------|
| Installing software | |
| Changing system settings | |
| Opening regular applications | |
| Modifying Program Files | |
| Changing Windows Firewall | |
| Creating new user | |

---

#### Activity E: Windows Update Configuration

**Goal:** Explore update settings and history.

**Step 1:** Access Windows Update

Settings → Windows Update

| Setting | Current Value |
|---------|---------------|
| Last checked | |
| Update status | |
| Pause updates | |

**Step 2:** Update history

View update history

| Update Type | Recent Example | Date |
|-------------|----------------|------|
| Quality updates | | |
| Feature updates | | |
| Driver updates | | |
| Definition updates | | |

**Step 3:** Advanced options

| Option | Your Setting | Purpose |
|--------|--------------|---------|
| Receive updates for other Microsoft products | | |
| Download over metered connections | | |
| Restart this device ASAP | | |
| Active hours | | |

---

#### Activity F: Local Security Policy Exploration

**Goal:** Explore security policy settings (Pro/Enterprise).

**Step 1:** Access Local Security Policy

Open `secpol.msc`

(If unavailable on Home edition, document what each policy controls)

**Account Policies → Password Policy:**

| Policy | Setting |
|--------|---------|
| Enforce password history | |
| Maximum password age | |
| Minimum password age | |
| Minimum password length | |
| Password complexity requirements | |

**Account Policies → Account Lockout Policy:**

| Policy | Setting |
|--------|---------|
| Account lockout threshold | |
| Account lockout duration | |
| Reset lockout counter after | |

**Local Policies → Audit Policy:**

| What to Audit | Success/Failure |
|---------------|-----------------|
| Account logon events | |
| Object access | |
| Policy change | |
| System events | |

---

#### Activity G: Windows Security at a Glance

**Goal:** Review overall security posture.

**Windows Security → Home**

| Protection Area | Status | Actions Needed? |
|-----------------|--------|-----------------|
| Virus & threat protection | | |
| Account protection | | |
| Firewall & network protection | | |
| App & browser control | | |
| Device security | | |
| Device performance & health | | |
| Family options | | |

**App & browser control:**

| Feature | Setting |
|---------|---------|
| SmartScreen for apps | |
| SmartScreen for Edge | |
| SmartScreen for Store apps | |
| Exploit protection | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A user wants to disable Windows Defender because they think it slows down their computer. They don't plan to install any other antivirus. How would you advise them?

**Scenario 2:** An employee's laptop containing sensitive company data is stolen. The laptop was using Windows Home edition without any encryption. What could have been done differently, and what's the exposure?

**Scenario 3:** A user keeps clicking "Remind me later" on Windows Updates for 6 months. What security risks does this create, and how would you address this organizationally?

**Scenario 4:** A company wants to allow employees to use USB drives but prevent unauthorized software from running from them. What Windows security features could help?

---

## What You Learned Today

- ✅ Windows Defender Antivirus configuration
- ✅ Windows Defender Firewall rules and profiles
- ✅ BitLocker drive encryption
- ✅ User Account Control levels
- ✅ Windows Update management
- ✅ Local Security Policy settings
- ✅ Overall Windows security posture

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                  WINDOWS SECURITY QUICK REFERENCE                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY SECURITY TOOLS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Windows Security    → Central security dashboard                         ║
║  firewall.cpl        → Basic firewall settings                            ║
║  wf.msc              → Advanced firewall rules                            ║
║  secpol.msc          → Local Security Policy (Pro/Ent)                    ║
║  gpedit.msc          → Local Group Policy Editor (Pro/Ent)                ║
║  manage-bde          → BitLocker command-line tool                        ║
║  tpm.msc             → TPM management                                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  BITLOCKER                                                                 ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Purpose     → Full disk encryption                                       ║
║  Requires    → TPM 1.2+, Windows Pro/Enterprise, UEFI                     ║
║  Recovery    → 48-digit key (SAVE THIS!)                                  ║
║  Alternative → BitLocker To Go (USB drives)                               ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  FIREWALL PROFILES                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Domain     → Connected to domain network (most permissive)               ║
║  Private    → Home/work trusted network                                   ║
║  Public     → Coffee shop, airport (most restrictive)                     ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  UAC LEVELS                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Always notify     → Maximum security, most prompts                       ║
║  Default           → Apps changes only (recommended)                      ║
║  Don't dim         → Same but no secure desktop                           ║
║  Never             → Disabled (NOT recommended)                           ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  UPDATE TYPES                                                              ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Quality updates   → Monthly security/bug fixes (Patch Tuesday)           ║
║  Feature updates   → Major version upgrades (annual)                      ║
║  Definition updates → Antivirus signatures (daily)                        ║
║  Driver updates    → Hardware drivers                                     ║
╚═══════════════════════════════════════════════════════════════════════════╝
```