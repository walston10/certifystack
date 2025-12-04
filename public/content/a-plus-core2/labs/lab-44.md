# Lab 44: Malware Types and Prevention

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 2.4 - Given a scenario, detect, remove, and prevent malware using the appropriate tools and methods

---

## Section 1: Concept Check (5 min)

1. What is the key difference between a virus and a worm? Which is potentially more dangerous in a network environment?

2. What is ransomware, and why has it become one of the most financially damaging types of malware?

3. A user reports their computer is extremely slow, with pop-up ads appearing constantly, even when the browser is closed. What type of malware is likely involved?

4. What is a rootkit, and why is it particularly difficult to detect and remove?

5. How does a Trojan horse work, and why is user action typically required for infection?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Windows Security Status Check

**Goal:** Verify your system's anti-malware protection.

**Step 1:** Access Windows Security

Open Windows Security (search "Windows Security" or click shield in system tray)

| Protection Area | Status |
|-----------------|--------|
| Virus & threat protection | |
| Account protection | |
| Firewall & network protection | |
| App & browser control | |
| Device security | |

**Step 2:** Virus & threat protection details

Click "Virus & threat protection"

| Setting | Value |
|---------|-------|
| Real-time protection | On / Off |
| Cloud-delivered protection | On / Off |
| Automatic sample submission | On / Off |
| Tamper Protection | On / Off |
| Last scan date | |
| Threats found (current) | |

**Step 3:** Definition updates

| Property | Value |
|----------|-------|
| Security intelligence version | |
| Last update | |

---

#### Activity B: Malware Type Identification

**Goal:** Identify malware types by their characteristics.

**Match malware to behavior:**

| Behavior | Malware Type |
|----------|--------------|
| Attaches to executable files, spreads when file is run | |
| Self-replicates across networks without user action | |
| Encrypts files and demands payment | |
| Disguises as legitimate software | |
| Records keystrokes to steal credentials | |
| Hides deep in OS to conceal other malware | |
| Turns computer into zombie for attacks | |
| Displays unwanted advertisements | |
| Monitors user activity and reports back | |
| Triggers based on specific date or action | |

**Malware types to match:**
Virus, Worm, Ransomware, Trojan, Keylogger, Rootkit, Bot/Botnet, Adware, Spyware, Logic Bomb

---

#### Activity C: Scan Options Comparison

**Goal:** Understand different scan types.

**Access Scan options:**

Windows Security → Virus & threat protection → Scan options

| Scan Type | What It Does | Time Required | When to Use |
|-----------|--------------|---------------|-------------|
| Quick scan | | | |
| Full scan | | | |
| Custom scan | | | |
| Offline scan | | | |

**Run a Quick Scan:**

| Result | Value |
|--------|-------|
| Duration | |
| Files scanned | |
| Threats found | |

---

#### Activity D: Threat History Review

**Goal:** Understand how Windows handles threats.

**Access Protection history:**

Windows Security → Virus & threat protection → Protection history

| Recent Entry (if any) | Details |
|----------------------|---------|
| Threat name | |
| Alert date | |
| Status | |
| Category | |
| Affected item | |

**Threat actions available:**

| Action | What It Does |
|--------|--------------|
| Remove | |
| Quarantine | |
| Allow on device | |
| Restore | |

---

#### Activity E: Task Manager Investigation

**Goal:** Identify suspicious processes.

**Open Task Manager:** Ctrl+Shift+Esc

**Suspicious process indicators:**

| Indicator | Why Suspicious |
|-----------|----------------|
| High CPU/memory with unknown name | |
| Multiple instances of same process | |
| Process from TEMP folder | |
| Random string names (aXy72.exe) | |
| Misspelled system names (scvhost) | |

**Document running processes:**

List 5 processes with highest CPU/Memory usage:

| Process | CPU % | Memory | Publisher (if visible) | Suspicious? |
|---------|-------|--------|------------------------|-------------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

---

#### Activity F: Startup Program Audit

**Goal:** Check for malware persistence mechanisms.

**Task Manager → Startup tab:**

| Program | Publisher | Status | Impact | Legitimate? |
|---------|-----------|--------|--------|-------------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |

**Suspicious startup characteristics:**

| Red Flag | Example |
|----------|---------|
| Unknown publisher | |
| Generic name | |
| Unusual location | |
| Misspelled names | |

---

#### Activity G: Browser Security Check

**Goal:** Identify browser-based threats.

**Check your browser extensions/add-ons:**

(Chrome: chrome://extensions, Edge: edge://extensions, Firefox: about:addons)

| Extension | Publisher | Purpose | Trusted? |
|-----------|-----------|---------|----------|
| | | | |
| | | | |
| | | | |

**Browser settings to check:**

| Setting | Recommended | Your Setting |
|---------|-------------|--------------|
| Pop-up blocker | Enabled | |
| Download warnings | Enabled | |
| Dangerous site warnings | Enabled | |
| Homepage | Set intentionally | |
| Default search engine | Not modified | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A user opens an email attachment called "Invoice.pdf.exe" and now all their documents show as encrypted with a ransom note on their desktop. What happened, what type of malware is this, and what are the recovery options?

**Scenario 2:** An IT tech notices a computer sending large amounts of data to foreign IP addresses at 3 AM, even when no one is using it. What type of malware might be responsible, and how would you investigate?

**Scenario 3:** A user installs a "free video player" from an unknown website. Now their browser homepage is changed, there are new toolbars, and pop-up ads appear constantly. What types of malware are likely involved, and what's the remediation process?

**Scenario 4:** Antivirus scans show "clean" but the computer is still behaving strangely - random crashes, slow performance, and security software keeps disabling itself. What type of malware might evade normal antivirus, and what specialized tools might help?

---

## What You Learned Today

- ✅ Malware types (virus, worm, Trojan, ransomware, spyware, etc.)
- ✅ Windows Security features and configuration
- ✅ Scan types (quick, full, custom, offline)
- ✅ Identifying suspicious processes
- ✅ Startup program auditing
- ✅ Browser security checks
- ✅ Malware infection symptoms

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