# Lab 7: Malware Types and Indicators - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Understanding malware is essential for threat detection and incident response.

---

## Section 1: Concept Check - Answers

**1. What is the key difference between a virus and a worm?**

**Answer:**

| Aspect | Virus | Worm |
|--------|-------|------|
| **Spreading** | Requires user action (run infected file) | Self-propagating, spreads automatically |
| **Host required** | Yes, attaches to files/programs | No, standalone executable |
| **Speed of spread** | Slow (depends on user activity) | Fast (exploits vulnerabilities) |

**Why it matters:**
- Viruses can be contained by user awareness training
- Worms require technical controls (patching, network segmentation)
- Worms can spread across entire networks in minutes

---

**2. How does ransomware work? Why is it devastating?**

**Answer:**

**How it works:**
1. Gains access (phishing, RDP, vulnerability)
2. Escalates privileges
3. Spreads laterally across network
4. Exfiltrates sensitive data (double extortion)
5. Encrypts files with strong encryption
6. Displays ransom demand (usually cryptocurrency)

**Why it's devastating:**
- Operations halt immediately (availability)
- Backups may also be encrypted
- Double extortion: Pay OR data gets leaked
- Decryption often fails even after payment
- Recovery takes weeks/months
- Reputational damage
- Regulatory penalties (HIPAA, GDPR)

---

**3. What is a rootkit, and why is it hard to detect/remove?**

**Answer:**

A **rootkit** is malware that hides deep in the operating system, concealing itself and other malware from detection.

**Why difficult to detect:**
- Hooks into OS kernel, intercepting system calls
- Hides files, processes, registry entries, network connections
- Antivirus runs ON the compromised OS (can't trust what it sees)
- May modify the tools used to find it

**Why difficult to remove:**
- Often requires clean boot media
- May persist in MBR/boot sector (survives OS reinstall)
- Firmware rootkits survive even drive replacement
- Removal may destabilize system

---

**4. What is fileless malware, and why is it challenging to detect?**

**Answer:**

**Fileless malware** operates entirely in memory, using legitimate system tools (PowerShell, WMI, etc.) instead of dropping malicious files.

**Why challenging:**
- No malicious files to scan
- Uses trusted tools (PowerShell, WMI)
- Lives in memory (gone after reboot, but may re-execute)
- Signature-based AV is ineffective
- Blends with normal admin activity
- Requires behavior-based detection

---

**5. Three common indicators of malware infection:**

**Answer:**

1. **Unexpected system slowness** - Malware consuming CPU/RAM/disk
2. **Unusual network activity** - C2 communication, data exfiltration
3. **Security software disabled** - Many malware strains disable AV first
4. **Unknown processes running** - New entries in Task Manager
5. **Pop-ups and browser changes** - Adware/PUP symptoms
6. **Files encrypted or missing** - Ransomware or wiper

---

## Section 2: Activity Solutions

### Activity A: Malware Classification - Answers

| Malware Type | Spreads Via | Primary Purpose | User Action? | Example |
|--------------|-------------|-----------------|--------------|---------|
| Virus | Infected files | Damage, spread | Yes | ILOVEYOU |
| Worm | Network/vulnerabilities | Spread, payload delivery | No | WannaCry, Conficker |
| Trojan | Disguised as legitimate | Backdoor, theft | Yes | Emotet, Zeus |
| Ransomware | Phishing, RDP, exploits | Extortion | Varies | LockBit, REvil |
| Spyware | Bundled software, exploits | Surveillance | Varies | Pegasus, FinSpy |
| Keylogger | Trojans, physical access | Credential theft | Varies | Olympic Vision |
| Rootkit | Exploits, trojans | Hide malware, persistence | No | TDL-4, ZeroAccess |
| Backdoor | Trojans, exploits | Persistent access | Varies | Poison Ivy |
| RAT | Trojans, phishing | Remote control | Yes | DarkComet, njRAT |
| Logic Bomb | Insider, supply chain | Delayed destruction | No | South Korea 2013 |
| Botnet | Worms, trojans | DDoS, spam, mining | No | Mirai, Necurs |
| Cryptominer | Bundled, exploits | Mine cryptocurrency | Varies | XMRig, Coinhive |

**Malware combinations:**

| Scenario | Types |
|----------|-------|
| Email attachment → hidden remote access | Trojan + RAT + Backdoor |
| Worm → cryptominer on each victim | Worm + Cryptominer |
| Trojan → keylogger for banking | Trojan + Keylogger + Spyware |
| Ransomware spreads like worm | Worm + Ransomware (e.g., WannaCry) |

---

### Activity B: Infection Indicators - Answers

| Indicator | Meaning | Malware Types |
|-----------|---------|---------------|
| Slow system | Resource consumption | Cryptominer, botnet, any active malware |
| High CPU when idle | Background processing | Cryptominer, botnet |
| High network when idle | C2 communication, exfiltration | RAT, botnet, spyware |
| Programs crashing | System instability | Rootkit, virus |
| New unknown programs | Malware installation | Trojan, PUP |
| Homepage changed | Browser hijacking | Adware, PUP |
| Pop-up ads | Adware active | Adware, browser hijacker |
| Antivirus disabled | Defense evasion | Most sophisticated malware |
| Encrypted files + ransom | Active ransomware | Ransomware |
| Webcam light on | Surveillance | RAT, spyware |
| Unknown processes | Malware executing | Any |
| Messages you didn't send | Account compromise | Worm, RAT |

---

### Activity D: VirusTotal Results Interpretation

| Detection Ratio | Interpretation |
|-----------------|----------------|
| 0/70 | Clean (or brand new malware not yet detected) |
| 1-2/70 | Likely false positive, investigate further |
| 5-10/70 | Suspicious, likely malicious |
| 20+/70 | Definitely malicious |

**Important:** 0 detections doesn't guarantee safety—could be new/targeted malware. High detections = definitely bad.

---

### Activity E: Delivery Mechanisms - Answers

| Method | How It Works | Example |
|--------|--------------|---------|
| Email attachment | Malicious file in email | Macro-enabled Word doc |
| Drive-by download | Visiting compromised site triggers download | Malvertising, exploit kits |
| Malicious link | User clicks link to malware | Phishing email links |
| Software bundling | Malware included with legitimate software | PUPs with free software |
| USB/removable | Autorun or user executes infected files | Stuxnet (originally) |
| Watering hole | Compromise sites target frequents | Industry-specific attacks |
| Malvertising | Malicious ads on legitimate sites | Angler exploit kit |
| Supply chain | Compromise vendor/software updates | SolarWinds, NotPetya |
| Social engineering | Trick user into running malware | Tech support scams |

**Dangerous file extensions:**

| Extension | Risk | Why |
|-----------|------|-----|
| .exe | Critical | Direct executable |
| .dll | Critical | Loaded by programs |
| .scr | Critical | Screensaver (actually .exe) |
| .bat/.cmd | High | Command scripts |
| .ps1 | High | PowerShell scripts |
| .vbs/.js | High | Script files |
| .docm/.xlsm | High | Macro-enabled Office |
| .zip/.rar | Medium | May contain any of above |
| .iso/.img | High | Can auto-mount, bypass email filters |
| .lnk | High | Shortcut can run anything |

---

### Activity F: Ransomware - Answers

**Attack stages:**

| Stage | What Happens | Detection Opportunity |
|-------|--------------|----------------------|
| Initial access | Phishing, RDP brute force, exploit | Email filtering, MFA, IDS |
| Reconnaissance | Map network, find valuable data | Unusual queries, scanning |
| Privilege escalation | Gain admin rights | Failed logins, exploit attempts |
| Lateral movement | Spread to other systems | Unusual authentication patterns |
| Exfiltration | Steal data before encrypting | Large outbound transfers |
| Encryption | Encrypt files | Mass file modifications |
| Ransom demand | Display payment instructions | Too late for prevention |

**Ransomware defenses:**

| Defense | How It Helps |
|---------|--------------|
| Backups (3-2-1) | Recover without paying |
| Offline backups | Attackers can't encrypt them |
| Email filtering | Block phishing delivery |
| User training | Reduce successful phishing |
| Patch management | Close exploitation paths |
| Segmentation | Limit lateral movement |
| Least privilege | Reduce encryption scope |
| EDR/XDR | Detect and stop encryption early |

---

### Activity G: Rootkit Types - Answers

| Type | Location | Detect | Remove |
|------|----------|--------|--------|
| User-mode | Application level | Moderate | Moderate |
| Kernel-mode | OS kernel | Difficult | Difficult |
| Bootkit | MBR/VBR/boot process | Very difficult | Very difficult |
| Firmware | BIOS/UEFI/firmware | Extremely difficult | May require hardware replacement |
| Hypervisor | Below OS, virtual layer | Extremely difficult | Extremely difficult |

**Why hard to remove:**
1. Runs at same or higher privilege level than removal tools
2. May persist outside normal storage (firmware, MBR)
3. Removal may require booting from clean media
4. May have multiple persistence mechanisms

---

### Activity H: Fileless Malware - Answers

**LOLBins abuse:**

| Tool | Legitimate Use | Malicious Use |
|------|----------------|---------------|
| PowerShell | System administration | Execute scripts, download payloads |
| WMI | System management | Persistence, lateral movement |
| certutil | Certificate management | Download files from URLs |
| mshta | Run HTML applications | Execute malicious scripts |
| regsvr32 | Register DLLs | Execute code from URLs |
| rundll32 | Run DLL functions | Execute malicious DLLs |

**Execution policy:**
- Best security: **AllSigned** or **Restricted**
- Not a security boundary because: Can be bypassed with -ExecutionPolicy Bypass flag, or by running commands directly rather than scripts

---

### Activity I: Persistence Mechanisms - Answers

| Location | How to Check | Purpose |
|----------|--------------|---------|
| Run/RunOnce keys | regedit → HKLM/HKCU\Software\Microsoft\Windows\CurrentVersion\Run | Execute at every login |
| Scheduled Tasks | Task Scheduler | Execute at specified times/events |
| Startup folder | shell:startup | Execute at user login |
| Services | services.msc | Run as background service |
| WMI subscriptions | PowerShell WMI commands | Event-triggered execution |
| DLL hijacking | Check application directories | Load malicious DLL when app starts |
| Browser extensions | Browser settings | Execute in browser context |

---

### Activity J: Indicators of Compromise - Answers

| IoC Type | Example | Use |
|----------|---------|-----|
| File hash | d41d8cd98f00b204e980... | Identify known malware files |
| IP address | 192.168.1.100 | Block malicious infrastructure |
| Domain | evil-domain.com | Block C2 communication |
| URL | evil.com/payload.exe | Block specific resources |
| Email address | attacker@evil.com | Filter phishing source |
| File name | invoice.exe | Alert on suspicious names |
| Registry key | HKLM\...\Run\Malware | Detect persistence |
| Mutex | Global\Malware_Mutex | Detect running malware |
| User-agent | BadBot/1.0 | Identify malicious traffic |

---

### Activity K: Scenario Analysis - Answers

| Scenario | Malware Type(s) | Why |
|----------|-----------------|-----|
| Free game, AV disabled, webcam active | Trojan + RAT + Rootkit | Disguised, remote access, AV evasion |
| Network files encrypted, ransom | Ransomware (likely worm-like) | Classic ransomware behavior |
| Sending spam without knowledge | Botnet | Part of spam campaign |
| Activates April 1st, deletes files | Logic bomb + Wiper | Time-triggered destruction |
| Homepage, pop-ups, toolbars | Adware + PUP + Browser hijacker | Annoyance for ad revenue |
| CPU 100%, mining process | Cryptominer | Stealing resources to mine |
| Remote access, keylogging, screenshots | RAT + Keylogger + Spyware | Full surveillance suite |
| In MBR, invisible, survives reinstall | Bootkit (rootkit variant) | Boot-level persistence |
| Word doc, email spread, PowerShell | Macro virus + Fileless malware | Document-based, living-off-the-land |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Slow computer, pop-ups, homepage changed**

**Likely malware:** Adware/PUP, possibly browser hijacker

**Investigation steps:**
1. Run full antivirus/anti-malware scan
2. Check installed programs for unknown software
3. Check browser extensions
4. Review startup programs
5. Check for suspicious processes
6. Review recent downloads/installations

**Remediation:**
1. Remove unwanted programs
2. Reset browser settings
3. Remove malicious extensions
4. Run cleanup tools (AdwCleaner, Malwarebytes)
5. Educate user on safe downloading

---

**Scenario 2: Ransomware, $500K demand, 48-hour backups**

**Factors in payment decision:**
- Can backups be restored? (Test them first)
- Is backup data 48 hours old acceptable?
- Are there systems not backed up?
- Is exfiltrated data being threatened?
- Regulatory/legal implications?
- Will payment actually result in decryption?
- Insurance coverage?
- FBI/CISA recommendation: Don't pay

**Recovery plan:**
1. Isolate affected systems
2. Assess scope of encryption
3. Report to law enforcement
4. Verify backup integrity (test restore)
5. Rebuild systems from clean images
6. Restore data from backups
7. Investigate root cause
8. Implement lessons learned

---

**Scenario 3: PowerShell encoded commands, external IP, no files**

**What's happening:** Fileless malware attack—living off the land

**Investigation:**
1. Capture memory for forensics
2. Review PowerShell logs (if enabled)
3. Check parent process of PowerShell
4. Analyze encoded commands (Base64 decode)
5. Investigate the external IP (threat intel)
6. Check for persistence mechanisms
7. Review how initial access occurred

**Key insight:** Enable PowerShell logging (ScriptBlock, Module, Transcription) to catch this in the future.

---

## Key Exam Tips

1. **Virus vs Worm:** Virus needs user action, worm self-propagates

2. **Trojan:** Disguised as legitimate—"Trojan Horse"

3. **Ransomware defense:** Backups are #1 (but test them!)

4. **Rootkit:** Hides at kernel level, requires clean boot to detect

5. **Fileless malware:** Uses PowerShell, WMI, lives in memory

6. **RAT = Remote Access Trojan:** Full remote control

7. **Logic bomb:** Triggers on condition (date, event)

8. **Botnet:** Network of compromised systems (bots/zombies)

9. **Indicators of Compromise:** Hashes, IPs, domains, file names

10. **MITRE ATT&CK:** Framework for adversary tactics/techniques

---

## Common Mistakes to Avoid

❌ Confusing virus (needs host) with worm (standalone)

❌ Thinking "no files = no malware" (fileless exists!)

❌ Assuming AV will catch everything (behavior analysis needed)

❌ Forgetting ransomware now includes data theft (double extortion)

❌ Overlooking persistence mechanisms (malware survives reboot)

❌ Trusting VirusTotal 0/70 completely (could be new malware)

---

**Congratulations on completing Lab 7!**

You now understand the malware landscape—essential for detection, prevention, and incident response.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 7: Malware Types and Indicators - Solution Guide*