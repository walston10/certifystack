# Lab 46: Windows Security Features - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: BitLocker and TPM

**BitLocker:** Full disk encryption feature in Windows Pro/Enterprise that encrypts the entire drive, protecting data if the device is lost or stolen.

**TPM (Trusted Platform Module):** Hardware security chip (version 1.2 or higher) that:
- Stores encryption keys securely
- Verifies system integrity at boot
- Prevents offline attacks on encryption keys
- Can detect if hardware has been tampered with

Without TPM, BitLocker can use a USB key or password at boot (less secure).

---

### Question 2: Defender Firewall vs Antivirus

| Feature | Windows Defender Firewall | Windows Defender Antivirus |
|---------|---------------------------|----------------------------|
| Purpose | Controls network traffic in/out | Detects and removes malware |
| Protects against | Unauthorized network access | Viruses, malware, spyware |
| How it works | Rules for ports/programs | Signatures and behavior analysis |
| Location | Network layer | File and process level |

Both are part of Windows Security but serve different functions.

---

### Question 3: User Account Control (UAC)

**Protects against:**
- Unauthorized system changes
- Malware installing without user knowledge
- Accidental changes to critical settings
- Privilege escalation attacks

**Prompts when:**
- Installing software
- Changing system settings
- Modifying protected folders (Program Files, Windows)
- Making changes that affect other users
- Running programs as administrator

---

### Question 4: EFS vs BitLocker

| Feature | EFS | BitLocker |
|---------|-----|-----------|
| Encrypts | Individual files/folders | Entire drive |
| Tied to | User account | Device/TPM |
| Available in | All Windows editions | Pro/Enterprise |
| Protects against | Other users on same PC | Physical theft |
| Recovery | Certificate backup | 48-digit recovery key |
| Performance | Per-file overhead | Transparent |

**Use EFS for:** Protecting specific files from other users on shared computer

**Use BitLocker for:** Protecting all data if device is stolen

---

### Question 5: Windows Update Importance

**Why important:**
- Security patches close vulnerabilities
- Exploits often target unpatched systems
- Ransomware frequently uses known vulnerabilities
- Compliance requirements often mandate patching

**Update types:**

| Type | Frequency | Purpose |
|------|-----------|---------|
| Quality updates | Monthly (Patch Tuesday) | Security fixes, bug fixes |
| Feature updates | Annually | New features, major version |
| Definition updates | Daily | Antivirus signatures |
| Driver updates | As needed | Hardware compatibility |

---

## Section 2: Activities - Answers

### Activity A: Windows Defender Antivirus

**Recommended settings:**

| Setting | Recommended | Why |
|---------|-------------|-----|
| Real-time protection | On | Catches threats immediately |
| Cloud-delivered protection | On | Uses latest threat intelligence |
| Automatic sample submission | On or Ask | Helps improve detection |
| Tamper Protection | On | Prevents malware from disabling |

**When to add exclusions:**
- Development folders (compilation triggers false positives)
- Trusted applications that are incorrectly flagged
- Performance-critical applications
- Legacy business applications

**Risk of too many exclusions:**
- Creates blind spots for malware
- Attackers may target excluded locations
- Reduces overall protection
- Could miss actual threats

---

### Activity B: Windows Defender Firewall

**Firewall profiles:**

| Profile | When Applied | Security Level |
|---------|--------------|----------------|
| Domain | Connected to AD domain | Least restrictive |
| Private | Home/work networks | Moderate |
| Public | Public Wi-Fi, unknown | Most restrictive |

**Rule components:**

| Component | Purpose |
|-----------|---------|
| Program | Which executable the rule applies to |
| Port | Which port numbers (e.g., 80, 443) |
| Protocol | TCP or UDP |
| Scope | Which IP addresses (local/remote) |
| Action | Allow or Block |
| Profile | Which network types apply |

---

### Activity C: BitLocker

**BitLocker requirements:**

| Requirement | Purpose |
|-------------|---------|
| TPM 1.2+ | Secure key storage |
| UEFI firmware | Secure Boot support |
| Secure Boot | Prevents boot tampering |
| Windows Pro/Enterprise | Feature availability |

**Recovery key importance:**
- Only way to access data if TPM fails
- Required after hardware changes
- Needed if password forgotten
- Should be stored in: Microsoft account, Active Directory, printed copy in safe location

**manage-bde commands:**

| Command | Purpose |
|---------|---------|
| manage-bde -status | Check encryption status |
| manage-bde -on C: | Enable BitLocker on C: |
| manage-bde -off C: | Disable (decrypt) drive |
| manage-bde -protectors -get C: | View recovery key |

---

### Activity D: User Account Control

**UAC levels explained:**

| Level | Behavior | Use Case |
|-------|----------|----------|
| 4 - Always | Prompts for everything | High security needs |
| 3 - Default | Apps only, dims desktop | Normal use |
| 2 - Don't dim | Apps only, no secure desktop | Accessibility needs |
| 1 - Never | No prompts | NOT recommended (security risk) |

**What triggers UAC:**

| Action | UAC Prompt? |
|--------|-------------|
| Installing software | Yes |
| Changing system settings | Yes |
| Opening regular apps | No |
| Modifying Program Files | Yes |
| Changing firewall | Yes |
| Creating new user | Yes |
| Opening downloaded .exe | Sometimes (SmartScreen) |

---

### Activity E: Windows Update

**Update types:**

| Type | Frequency | Contains |
|------|-----------|----------|
| Quality updates | Monthly | Security patches, fixes |
| Feature updates | Annual | New OS features |
| Driver updates | As needed | Hardware drivers |
| Definition updates | Multiple daily | Antivirus signatures |

**Key settings:**

| Setting | Recommended |
|---------|-------------|
| Receive updates for other products | On |
| Metered connection downloads | Depends on data plan |
| Active hours | Set to your work hours |
| Restart ASAP | Personal preference |

---

### Activity F: Local Security Policy

**Recommended password policy:**

| Policy | Recommended Value |
|--------|-------------------|
| Enforce password history | 24 passwords |
| Maximum password age | 60-90 days |
| Minimum password age | 1 day |
| Minimum password length | 12+ characters |
| Complexity requirements | Enabled |

**Recommended lockout policy:**

| Policy | Recommended Value |
|--------|-------------------|
| Lockout threshold | 5 invalid attempts |
| Lockout duration | 30 minutes |
| Reset counter after | 30 minutes |

**Audit policy basics:**

| Policy | Enable For |
|--------|------------|
| Account logon | Success and Failure |
| Object access | Failure (at minimum) |
| Policy change | Success and Failure |
| System events | Success and Failure |

---

## Section 3: Reflection - Answers

### Scenario 1: User Wants to Disable Defender

**Advice:**

1. **Don't disable without alternative** - Strongly advise against
2. **Investigate performance claims:**
   - Check if exclusions could help
   - Verify it's actually Defender causing slowness
   - Check for other issues (malware, disk problems)
3. **If they insist on alternative:**
   - Must install another reputable AV first
   - Windows Defender auto-disables when another AV installs
4. **Explain risks:**
   - Zero protection against threats
   - Modern malware can infect in seconds
   - Recovery cost far exceeds any performance gain

---

### Scenario 2: Stolen Unencrypted Laptop

**What happened:**
- Thief has physical access to all data
- Can boot from USB and access files directly
- Windows password provides zero protection
- All files, documents, credentials exposed

**What should have been done:**
1. **BitLocker encryption** (but requires Pro/Enterprise)
2. **Third-party encryption** (VeraCrypt for Home edition)
3. **Cloud-only sensitive data** (no local storage)
4. **Remote wipe capability** (Microsoft 365/Intune)

**Exposure assessment:**
- All local files accessible
- Saved browser passwords extractable
- Cached credentials usable
- Must assume complete compromise
- Change all passwords, notify if customer data

---

### Scenario 3: 6 Months Without Updates

**Security risks:**
- Known vulnerabilities unpatched
- Actively exploited by attackers
- Ransomware targets outdated systems
- Zero-day becomes "180-day" (known and unpatched)
- Potential compliance violations

**Organizational solutions:**

| Control | How It Helps |
|---------|--------------|
| WSUS/SCCM/Intune | Centralized update management |
| Mandatory updates | Policy enforcement |
| Deadline enforcement | Auto-install after X days |
| Compliance reporting | Identify unpatched systems |
| Network segmentation | Quarantine non-compliant |
| User education | Explain why updates matter |

---

### Scenario 4: Control USB Execution

**Windows security features:**

| Feature | How It Helps |
|---------|--------------|
| AppLocker | Whitelist allowed executables (Enterprise) |
| Software Restriction Policies | Block executables from USB path |
| Windows Defender Application Control | Block unsigned/untrusted code |
| USB device policies (Group Policy) | Restrict USB device types |
| Controlled folder access | Prevent unauthorized writes |

**Implementation approach:**
1. Block executables from removable media paths
2. Allow only signed applications
3. Use read-only access for USB if possible
4. Monitor/alert on USB executable runs

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