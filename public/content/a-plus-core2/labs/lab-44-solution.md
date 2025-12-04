# Lab 44: Malware Types and Prevention - SOLUTION

---

## Section 1: Concept Check - Answers

### Question 1: Virus vs Worm

| Aspect | Virus | Worm |
|--------|-------|------|
| Spreads how | Attaches to files, requires user to run infected file | Self-replicates automatically |
| User action | Required | Not required |
| Spreads via | Infected files, email attachments, USB drives | Network connections, vulnerabilities |
| Speed | Slower (depends on user) | Very fast (automatic) |

**More dangerous in network:** Worms - they spread automatically across networks without user action, can infect hundreds of machines in minutes.

---

### Question 2: Ransomware

**What it is:** Malware that encrypts victim's files and demands payment (usually cryptocurrency) for the decryption key.

**Why financially damaging:**
- Stops business operations completely
- Ransom demands can be millions of dollars
- Recovery costs even without paying (IT time, data loss)
- Data may be stolen AND encrypted (double extortion)
- Reputation damage
- May affect backups too
- Regulatory fines if data exposed

---

### Question 3: Pop-ups and Slow Computer

**Likely malware:** Adware and/or PUPs (Potentially Unwanted Programs)

May also include:
- **Spyware** (monitoring browsing)
- **Browser hijacker** (changing settings)
- **Bloatware** (bundled with free software)

**Symptoms match:** Constant ads, performance impact, intrusive behavior

---

### Question 4: Rootkit

**What it is:** Malware that embeds itself deep in the operating system (kernel level or boot sector) to hide its presence and other malware.

**Why hard to detect:**
- Runs at same or higher privilege level than security software
- Intercepts and modifies OS functions
- Can hide files, processes, and network connections
- Normal antivirus runs INSIDE the compromised OS
- May infect boot sector (runs before OS/antivirus)

**Detection methods:**
- Offline scanning (boot from clean media)
- Behavioral analysis
- Comparison to known-good system
- Specialized rootkit scanners

---

### Question 5: Trojan Horse

**How it works:**
1. Appears to be legitimate software (game, utility, cracked software)
2. User voluntarily downloads and runs it
3. Malicious payload executes alongside or instead of expected function
4. Trojan may install backdoors, steal data, or download more malware

**Requires user action because:** It disguises itself as something desirable. Unlike worms, it can't spread automatically.

**Named after:** Greek mythology - soldiers hiding inside a wooden horse gifted to Troy.

---

## Section 2: Activities - Answers

### Activity A: Windows Security Status

**All protections should be ON:**

| Setting | Recommended |
|---------|-------------|
| Real-time protection | ON |
| Cloud-delivered protection | ON |
| Automatic sample submission | ON (or Ask me) |
| Tamper Protection | ON |

**Tamper Protection prevents:** Malware from disabling Windows Security

---

### Activity B: Malware Type Identification

| Behavior | Malware Type |
|----------|--------------|
| Attaches to executable files, spreads when file is run | **Virus** |
| Self-replicates across networks without user action | **Worm** |
| Encrypts files and demands payment | **Ransomware** |
| Disguises as legitimate software | **Trojan** |
| Records keystrokes to steal credentials | **Keylogger** |
| Hides deep in OS to conceal other malware | **Rootkit** |
| Turns computer into zombie for attacks | **Bot/Botnet** |
| Displays unwanted advertisements | **Adware** |
| Monitors user activity and reports back | **Spyware** |
| Triggers based on specific date or action | **Logic Bomb** |

---

### Activity C: Scan Types

| Scan Type | What It Does | Time | When to Use |
|-----------|--------------|------|-------------|
| Quick scan | Scans memory, common malware locations | Minutes | Daily/regular use |
| Full scan | Scans entire system, all files | Hours | Suspected infection |
| Custom scan | User selects specific folders | Varies | Target specific area |
| Offline scan | Reboots, scans before Windows loads | 15+ min | Rootkits, persistent malware |

---

### Activity D: Threat Actions

| Action | What It Does |
|--------|--------------|
| Remove | Deletes the malicious file |
| Quarantine | Moves to isolated location, disables but preserves |
| Allow on device | Marks as false positive, won't block again |
| Restore | Moves from quarantine back to original location |

**Best practice:** Quarantine first, remove after confirming it's not a false positive

---

### Activity E: Task Manager Investigation

**Suspicious indicators:**

| Indicator | Why Suspicious |
|-----------|----------------|
| High CPU/memory with unknown name | Malware often uses resources for mining, spam, etc. |
| Multiple instances of same process | Malware may spawn multiple copies |
| Process from TEMP folder | Legitimate software rarely runs from TEMP |
| Random string names | Malware often uses generated names |
| Misspelled system names | Trying to look legitimate (scvhost vs svchost) |

**Legitimate high-usage processes:**
- System (Windows kernel)
- antimalware service executable (Windows Defender)
- Web browsers
- Development tools (if used)

---

### Activity F: Startup Audit

**Red flags in startup:**

| Red Flag | Example |
|----------|---------|
| Unknown publisher | Publisher: (blank) or unknown company |
| Generic name | "Windows Service" or "System Process" |
| Unusual location | Running from %TEMP% or user Downloads |
| Misspelled names | "Micorsoft Update" or "Googel Chrome" |

**Safe to disable (usually):**
- Update checkers
- Cloud sync (can start manually)
- Chat applications
- Game launchers

**Never disable:**
- Antivirus/security software
- Hardware drivers (audio, graphics control panels)

---

### Activity G: Browser Security

**Suspicious extension signs:**
- Vague permissions ("read all website data")
- Low/no reviews
- Unknown publisher
- Appeared without your knowledge
- Name doesn't match function

**Recommended browser settings:**
- Pop-up blocker: Enabled
- Download scanning: Enabled
- Safe browsing/SmartScreen: Enabled
- Homepage: Your choice, not modified unexpectedly
- Default search: Not mysteriously changed

---

## Section 3: Reflection - Answers

### Scenario 1: Ransomware Infection

**What happened:**
- User opened "Invoice.pdf.exe" (double extension trick)
- The .exe ran ransomware payload
- Files encrypted with strong encryption
- Ransom note displayed

**Malware type:** Ransomware

**Recovery options:**

1. **Do NOT pay** (no guarantee of recovery, funds criminal activity)
2. **Disconnect from network** (prevent spread)
3. **Check for backups:**
   - Offline/cloud backups not connected during infection?
   - Shadow copies (usually deleted by ransomware)
4. **Check No More Ransom project** (nomoreransom.org) for free decryptors
5. **Report to authorities** (FBI IC3, local police)
6. **If no backup:** May have to accept data loss and rebuild
7. **Rebuild system** from known-good image

**Prevention:** User training, email filtering, backup strategy, application whitelisting

---

### Scenario 2: Unknown Data Exfiltration

**Likely malware types:**
- **Bot/Botnet** - machine compromised, part of criminal network
- **RAT (Remote Access Trojan)** - attacker has remote control
- **Spyware** - collecting and sending data

**Investigation steps:**

1. **Capture traffic:** Network logs, packet capture
2. **Identify destination IPs:** Threat intelligence lookup
3. **Check running processes:** Task Manager, Process Explorer
4. **Check scheduled tasks:** May have persistence mechanism
5. **Check for remote access tools:** Look for known RAT signatures
6. **Examine startup programs:** New entries
7. **Full malware scan:** Multiple tools
8. **Consider forensic investigation:** Preserve evidence

**Response:** Isolate machine, full investigation, likely rebuild

---

### Scenario 3: Free Video Player Installation

**Malware types involved:**
- **Adware** - causing pop-up ads
- **Browser hijacker** - changing homepage, adding toolbars
- **PUP (Potentially Unwanted Program)** - bundled software

**Remediation process:**

1. **Uninstall the video player:**
   - Programs and Features → Uninstall
   - Look for related programs to remove

2. **Remove browser extensions:**
   - Remove unknown toolbars and add-ons

3. **Reset browser settings:**
   - Homepage, search engine, new tab page

4. **Run malware scan:**
   - Windows Defender
   - Malwarebytes (AdwCleaner specifically for adware)

5. **Check startup programs:**
   - Disable unwanted entries

6. **Clear temporary files:**
   - Disk Cleanup

---

### Scenario 4: Antivirus Evasion

**Likely malware:** Rootkit

**Why evading normal antivirus:**
- Operating at kernel level (same as antivirus)
- Intercepting system calls
- Hiding its files/processes from OS APIs
- May have disabled security software

**Specialized tools:**

1. **Microsoft Defender Offline Scan:**
   - Boots before Windows
   - Scans without rootkit running

2. **Bootable antivirus (Kaspersky Rescue Disk, etc.):**
   - Boot from USB/CD
   - Scan from clean environment

3. **Rootkit-specific tools:**
   - GMER
   - TDSSKiller (Kaspersky)
   - RootkitRevealer (Sysinternals)

4. **Behavioral analysis:**
   - Compare against known-good baseline

5. **Nuclear option:**
   - Full wipe and reinstall from known-good media
   - Restore data from clean backup only

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                        MALWARE QUICK REFERENCE                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  MALWARE TYPES                                                             ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Virus      → Attaches to files, needs user action to spread              ║
║  Worm       → Self-replicates across networks automatically               ║
║  Trojan     → Disguised as legitimate software                            ║
║  Ransomware → Encrypts files, demands payment                             ║
║  Spyware    → Monitors activity, steals information                       ║
║  Keylogger  → Records keystrokes                                          ║
║  Rootkit    → Hides deep in OS, very hard to detect                       ║
║  Botnet     → Zombie network for DDoS, spam                               ║
║  Adware     → Displays unwanted advertisements                            ║
║  Logic Bomb → Triggers on specific event/date                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  INFECTION SYMPTOMS                                                        ║
║  ─────────────────────────────────────────────────────────────────────────║
║  • Slow performance           • Pop-ups and redirects                     ║
║  • Unexpected crashes         • New toolbars/homepage changes             ║
║  • Files encrypted/missing    • Antivirus disabled                        ║
║  • Unusual network traffic    • Unknown processes running                 ║
║  • Security warnings          • Browser hijacking                         ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  SCAN TYPES                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Quick     → Common locations, fast (minutes)                             ║
║  Full      → Entire system, slow (hours)                                  ║
║  Custom    → User-selected folders                                        ║
║  Offline   → Boot-time scan, catches rootkits                             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  REMOVAL PROCESS                                                           ║
║  ─────────────────────────────────────────────────────────────────────────║
║  1. Disconnect from network (prevent spread)                              ║
║  2. Boot to Safe Mode                                                     ║
║  3. Run updated antivirus scan                                            ║
║  4. Use secondary tool (Malwarebytes, etc.)                               ║
║  5. Check startup programs                                                 ║
║  6. Check browser extensions                                               ║
║  7. If severe: Windows Offline Scan or rebuild                            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  PREVENTION                                                                ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ✓ Keep antivirus updated       ✓ Don't open unexpected attachments      ║
║  ✓ Update OS and software       ✓ Download from trusted sources          ║
║  ✓ Enable firewall              ✓ Use strong, unique passwords           ║
║  ✓ Enable MFA                   ✓ Regular backups (offline/cloud)        ║
╚═══════════════════════════════════════════════════════════════════════════╝
```