# Lab 7: Malware Types and Indicators

**Tier:** 1 (Universal)
**Time:** 30-35 minutes
**Exam Objectives:** 2.1 - Compare and contrast common threat vectors and attack surfaces

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the key difference between a virus and a worm? Why does this distinction matter?**

2. **Explain how ransomware works. What makes it particularly devastating for organizations?**

3. **What is a rootkit, and why is it especially difficult to detect and remove?**

4. **What is fileless malware, and why is it challenging for traditional antivirus to detect?**

5. **List three common indicators that a system may be infected with malware.**

---

## Section 2: Hands-On Activities

### Activity A: Malware Classification Reference

**Goal:** Build a comprehensive reference for malware types.

**Complete the malware classification table:**

| Malware Type | How It Spreads | Primary Purpose | Requires User Action? | Example |
|--------------|----------------|-----------------|----------------------|---------|
| Virus | | | | |
| Worm | | | | |
| Trojan | | | | |
| Ransomware | | | | |
| Spyware | | | | |
| Keylogger | | | | |
| Rootkit | | | | |
| Backdoor | | | | |
| RAT | | | | |
| Logic Bomb | | | | |
| Botnet (bot) | | | | |
| Cryptominer | | | | |

**Malware combinations:**

Many malware samples combine multiple types. Match these combinations:

| Scenario | Malware Types Combined |
|----------|----------------------|
| Malware spreads via email attachment, installs hidden remote access | |
| Worm spreads automatically, installs cryptominer on each victim | |
| Trojan installs keylogger to steal banking credentials | |
| Ransomware spreads like worm, encrypts entire networks | |

---

### Activity B: Malware Infection Indicators

**Goal:** Recognize signs of malware infection.

**System behavior indicators:**

| Indicator | What It Might Mean | Malware Types |
|-----------|-------------------|---------------|
| System running slowly | | |
| High CPU usage when idle | | |
| High network traffic when idle | | |
| Programs crashing frequently | | |
| New programs you didn't install | | |
| Browser homepage changed | | |
| Pop-up ads appearing | | |
| Antivirus disabled/won't start | | |
| Files encrypted with ransom note | | |
| Webcam light on unexpectedly | | |
| Unknown processes in Task Manager | | |
| Friends receive messages you didn't send | | |

**Check your own system (safely):**

Open Task Manager (Ctrl+Shift+Esc) → Details tab

| Question | Your Finding |
|----------|--------------|
| Any processes using high CPU unexpectedly? | |
| Any process names you don't recognize? | |
| Any processes running from unusual locations? | |

**How to check process location:**
Right-click process → Open file location

**Note:** Don't delete anything—just observe. Unknown ≠ malicious.

---

### Activity C: Windows Security Center Exploration

**Goal:** Examine your system's malware protection.

**Open Windows Security (search "Windows Security"):**

**Virus & threat protection:**

| Setting | Your Status |
|---------|-------------|
| Real-time protection | [ ] On [ ] Off |
| Cloud-delivered protection | [ ] On [ ] Off |
| Automatic sample submission | [ ] On [ ] Off |
| Tamper protection | [ ] On [ ] Off |
| Last scan date | |
| Last scan type | |
| Threats found (if any) | |

**Protection history:**

Navigate to Virus & threat protection → Protection history

| Question | Your Finding |
|----------|--------------|
| Any recent detections? | [ ] Yes [ ] No |
| What actions were taken? | |
| Any quarantined items? | |

**Exclusions (be cautious):**

Check Virus & threat protection → Manage settings → Exclusions

| Exclusions Configured | Risk Level |
|----------------------|------------|
| None | Low (good) |
| Specific files/folders | Medium |
| File types (.exe, .dll) | High (dangerous) |
| Processes | High |

---

### Activity D: Analyze Suspicious Files with VirusTotal

**Goal:** Learn to use VirusTotal for malware analysis.

**Visit virustotal.com**

> ⚠️ **Important:** Do NOT upload sensitive/confidential files—they become public!

**Option 1: Search a known-safe hash**

Search for this SHA-256 hash (Windows Calculator):
```
5A7C0D6B6A6C0D0A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2E3F4A5
```

*(Note: Use an actual known file hash from your system for real results)*

**Option 2: Check a URL**

Enter a URL you want to verify (e.g., a download link you're unsure about)

| URL Checked | |
|-------------|---|
| Detection ratio | |
| Any vendors flagging it? | |
| Categories assigned | |

**Option 3: Hash a file and search**

Using PowerShell:
```powershell
Get-FileHash -Path "C:\Windows\System32\notepad.exe" -Algorithm SHA256
```

Search that hash on VirusTotal:

| File | Hash | Detection Ratio |
|------|------|-----------------|
| notepad.exe | | |

**Understanding VirusTotal results:**

| Detection Ratio | Interpretation |
|-----------------|----------------|
| 0/70 | |
| 1-2/70 | |
| 5-10/70 | |
| 20+/70 | |

---

### Activity E: Malware Delivery Mechanisms

**Goal:** Understand how malware reaches systems.

**Delivery methods:**

| Delivery Method | How It Works | Example Scenario |
|-----------------|--------------|------------------|
| Email attachment | | |
| Drive-by download | | |
| Malicious link | | |
| Software bundling | | |
| USB/removable media | | |
| Watering hole | | |
| Malvertising | | |
| Supply chain | | |
| Social engineering | | |

**File types commonly used for malware delivery:**

| File Extension | Risk Level | Why Dangerous |
|----------------|------------|---------------|
| .exe | | |
| .dll | | |
| .scr | | |
| .bat / .cmd | | |
| .ps1 | | |
| .vbs / .js | | |
| .docm / .xlsm | | |
| .zip / .rar | | |
| .iso / .img | | |
| .lnk | | |

**Which email attachments should you NEVER open from unknown senders?**

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

---

### Activity F: Ransomware Deep Dive

**Goal:** Understand ransomware operations and defenses.

**Ransomware attack stages:**

| Stage | What Happens | Detection Opportunity |
|-------|--------------|----------------------|
| Initial access | | |
| Reconnaissance | | |
| Privilege escalation | | |
| Lateral movement | | |
| Data exfiltration | | |
| Encryption | | |
| Ransom demand | | |

**Ransomware variants research:**

Research and document two ransomware families:

**Ransomware 1:**

| Attribute | Details |
|-----------|---------|
| Name | |
| Active years | |
| Delivery method | |
| Encryption used | |
| Notable victims | |
| Ransom amounts | |
| Decryptor available? | |

**Ransomware 2:**

| Attribute | Details |
|-----------|---------|
| Name | |
| Active years | |
| Delivery method | |
| Encryption used | |
| Notable victims | |
| Ransom amounts | |
| Decryptor available? | |

**Research resources:**
- nomoreransom.org (legitimate project with free decryptors)
- CISA alerts
- Security vendor blogs

**Ransomware defenses:**

| Defense | How It Helps |
|---------|--------------|
| Regular backups (3-2-1 rule) | |
| Offline/air-gapped backups | |
| Email filtering | |
| User training | |
| Patch management | |
| Network segmentation | |
| Least privilege | |
| EDR/XDR | |

---

### Activity G: Rootkit Concepts

**Goal:** Understand how rootkits hide and persist.

**Rootkit types:**

| Type | Where It Hides | Difficulty to Detect | Difficulty to Remove |
|------|----------------|---------------------|---------------------|
| User-mode rootkit | | | |
| Kernel-mode rootkit | | | |
| Bootkit | | | |
| Firmware rootkit | | | |
| Hypervisor rootkit | | | |

**Rootkit hiding techniques:**

| Technique | What It Hides | How |
|-----------|---------------|-----|
| API hooking | | |
| Direct kernel object manipulation | | |
| File system filtering | | |
| Registry hiding | | |
| Process hiding | | |

**Why are rootkits hard to remove?**

1. _________________________________________________________________

2. _________________________________________________________________

3. _________________________________________________________________

**Rootkit detection approaches:**

| Approach | How It Works | Limitations |
|----------|--------------|-------------|
| Signature-based | | |
| Behavior-based | | |
| Integrity checking | | |
| Boot from clean media | | |
| Memory forensics | | |

---

### Activity H: Fileless Malware Analysis

**Goal:** Understand fileless malware techniques.

**Fileless malware characteristics:**

| Characteristic | Explanation |
|----------------|-------------|
| No files on disk | |
| Lives in memory | |
| Uses legitimate tools | |
| Difficult to detect | |
| Leaves fewer artifacts | |

**Living-off-the-land binaries (LOLBins):**

These legitimate Windows tools are often abused:

| Tool | Legitimate Purpose | Malicious Use |
|------|-------------------|---------------|
| PowerShell | | |
| WMI (wmic.exe) | | |
| certutil.exe | | |
| mshta.exe | | |
| regsvr32.exe | | |
| rundll32.exe | | |

**Check PowerShell execution policy:**

```powershell
Get-ExecutionPolicy
Get-ExecutionPolicy -List
```

| Scope | Policy |
|-------|--------|
| MachinePolicy | |
| UserPolicy | |
| Process | |
| CurrentUser | |
| LocalMachine | |

**What execution policy provides the best security?**

_________________________________________________________________

**Why isn't execution policy a security boundary?**

_________________________________________________________________

---

### Activity I: Malware Persistence Mechanisms

**Goal:** Understand how malware survives reboots.

**Common persistence locations (Windows):**

| Location | How to Check | Purpose |
|----------|--------------|---------|
| Run/RunOnce registry keys | | |
| Scheduled Tasks | | |
| Startup folder | | |
| Services | | |
| WMI subscriptions | | |
| DLL search order hijacking | | |
| Browser extensions | | |

**Check your startup items:**

**Task Manager → Startup tab:**

| Application | Publisher | Status | Suspicious? |
|-------------|-----------|--------|-------------|
| | | | |
| | | | |
| | | | |

**Autoruns (if you want to explore further):**

Microsoft Sysinternals Autoruns shows ALL autostart locations.

Download from: docs.microsoft.com/en-us/sysinternals/downloads/autoruns

---

### Activity J: Indicators of Compromise (IoCs)

**Goal:** Understand IoCs and how they're used.

**Types of IoCs:**

| IoC Type | Example | How It's Used |
|----------|---------|---------------|
| File hash (MD5, SHA256) | | |
| IP address | | |
| Domain name | | |
| URL | | |
| Email address | | |
| File name | | |
| Registry key | | |
| Mutex name | | |
| User-agent string | | |

**Where to find IoCs:**

| Source | Type of Information |
|--------|---------------------|
| CISA Alerts | |
| Threat intelligence feeds | |
| Security vendor blogs | |
| MITRE ATT&CK | |
| VirusTotal | |
| AbuseIPDB | |

**MITRE ATT&CK Framework:**

Visit attack.mitre.org and find:

| Tactic | Description | Example Technique |
|--------|-------------|-------------------|
| Initial Access | | |
| Execution | | |
| Persistence | | |
| Privilege Escalation | | |
| Defense Evasion | | |
| Credential Access | | |
| Discovery | | |
| Lateral Movement | | |
| Collection | | |
| Exfiltration | | |
| Impact | | |

---

### Activity K: Malware Scenario Analysis

**Goal:** Practice identifying malware types from descriptions.

**Identify the malware type(s):**

| Scenario | Malware Type(s) | Why? |
|----------|-----------------|------|
| User downloads "free_game.exe" from suspicious site. After running, their antivirus is disabled and webcam activates randomly. | | |
| All files on network shares encrypted overnight with .locked extension. Text file demands Bitcoin payment. | | |
| Employee's computer sending spam emails to contacts without their knowledge. Part of a larger campaign. | | |
| Malware only activates on April 1st, then deletes all files | | |
| Browser homepage changed, excessive pop-ups, new toolbars installed | | |
| System running slowly, CPU at 100% when idle, process mining cryptocurrency | | |
| Attacker has persistent remote access, stealing keystrokes and screenshots | | |
| Malware hides in MBR, invisible to OS and antivirus, survives reinstall | | |
| Infected Word document spreads via email, executes PowerShell in memory | | |

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** An employee reports their computer is running slowly, pop-ups keep appearing, and their homepage was changed. What type of malware is likely, and what steps would you take to investigate and remediate?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** Your organization was hit by ransomware. The attackers want $500,000 in Bitcoin. You have backups from 48 hours ago. What factors would you consider in deciding whether to pay? What's your recovery plan?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Security tools detect PowerShell executing encoded commands and connecting to an external IP. No malicious files are found on disk. What's happening, and how would you investigate?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] Differentiate between virus, worm, trojan, and other malware types
- [ ] Explain how ransomware operates and defenses against it
- [ ] Describe rootkit hiding techniques and detection challenges
- [ ] Understand fileless malware and living-off-the-land techniques
- [ ] Recognize common malware infection indicators
- [ ] Identify malware delivery mechanisms
- [ ] List common persistence mechanisms
- [ ] Explain what Indicators of Compromise (IoCs) are
- [ ] Use VirusTotal for basic file/URL analysis

---

## What You Learned Today

- ✅ Classified malware by type and behavior
- ✅ Identified infection indicators
- ✅ Explored Windows Security settings
- ✅ Used VirusTotal for malware analysis
- ✅ Mapped malware delivery mechanisms
- ✅ Researched ransomware families
- ✅ Understood rootkit and fileless malware
- ✅ Examined persistence mechanisms
- ✅ Explored IoCs and MITRE ATT&CK

**Next Lab:** Social Engineering Attacks - phishing, pretexting, and human-layer security.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 7: Malware Types and Indicators*