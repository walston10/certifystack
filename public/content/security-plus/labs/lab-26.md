# Lab 26: Digital Forensics

**Tier:** 1 (Universal) + Tier 2 (Bonus)
**Time:** 30-35 minutes
**Exam Objectives:** 4.8 - Explain appropriate incident response activities

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What is the order of volatility, and why does it matter in forensics?**

2. **What is the difference between a forensic image and a regular backup?**

3. **Why must you use a write blocker when acquiring evidence?**

4. **What is the purpose of hashing evidence files?**

5. **What is the difference between legal hold and chain of custody?**

---

## Section 2: Hands-On Activities

### Activity A: Order of Volatility

**Goal:** Understand evidence collection priority.

**Order of volatility (most to least):**

| Priority | Data Type | Volatility | Collection Method |
|----------|-----------|------------|-------------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |
| 6 | | | |
| 7 | | | |

**Why order matters:**

| Scenario | What's Lost If You Wait |
|----------|-------------------------|
| Reboot before RAM capture | |
| Disconnect network first | |
| Power off before imaging | |
| Wait 24 hours to collect | |

**Collection decision tree:**

```
Is the system powered on?
    │
    ├── YES → Capture volatile data first
    │         │
    │         ├── RAM dump
    │         ├── Running processes
    │         ├── Network connections
    │         └── Then power off safely
    │
    └── NO → Do NOT power on
              │
              └── Image storage directly
```

**What volatile data reveals:**

| Data Type | Forensic Value |
|-----------|----------------|
| RAM | |
| Running processes | |
| Network connections | |
| Logged-in users | |
| Clipboard contents | |
| Encryption keys | |

---

### Activity B: Evidence Acquisition

**Goal:** Understand forensic imaging.

**Acquisition types:**

| Type | Description | When to Use |
|------|-------------|-------------|
| Physical | | |
| Logical | | |
| Live | | |
| Targeted | | |

**Forensic image vs Backup:**

| Aspect | Forensic Image | Backup |
|--------|----------------|--------|
| Contents | | |
| Includes deleted files | | |
| Includes slack space | | |
| Bit-for-bit copy | | |
| Compression | | |
| Purpose | | |
| Verification | | |

**Write blocker purpose:**

What does a write blocker do?

_________________________________________________________________

What happens without a write blocker?

_________________________________________________________________

**Acquisition process:**

| Step | Action | Why |
|------|--------|-----|
| 1 | Document original state | |
| 2 | Connect write blocker | |
| 3 | Hash original media | |
| 4 | Create forensic image | |
| 5 | Hash the image | |
| 6 | Verify hashes match | |
| 7 | Store original securely | |
| 8 | Work from image copy | |

---

### Activity C: Hashing and Integrity

**Goal:** Verify evidence integrity.

**Hash algorithm comparison:**

| Algorithm | Output Size | Status | Use |
|-----------|-------------|--------|-----|
| MD5 | | | |
| SHA-1 | | | |
| SHA-256 | | | |
| SHA-512 | | | |

**When to hash:**

| Point in Time | Purpose |
|---------------|---------|
| Before acquisition | |
| After acquisition | |
| Before analysis | |
| After analysis | |
| At each transfer | |

**Hash verification scenario:**

| Hash Point | MD5 Value | Match? |
|------------|-----------|--------|
| Original drive | a1b2c3d4e5f6... | - |
| After imaging | a1b2c3d4e5f6... | |
| Working copy | a1b2c3d4e5f6... | |
| After analysis | a1b2c3d4e5f6... | |

If hashes don't match, what does it indicate?

_________________________________________________________________

**Hash documentation:**

| Field | Value |
|-------|-------|
| Evidence ID | |
| Description | |
| MD5 | |
| SHA-256 | |
| Date/Time | |
| Collected By | |

---

### Activity D: Chain of Custody

**Goal:** Document evidence handling.

**Chain of custody form:**

| Field | Purpose | Example |
|-------|---------|---------|
| Case number | | |
| Evidence description | | |
| Serial number | | |
| Date/time collected | | |
| Location found | | |
| Collected by | | |
| Hash values | | |
| Storage location | | |

**Transfer log:**

| Date/Time | Released By | Received By | Purpose | Signature |
|-----------|-------------|-------------|---------|-----------|
| | | | | |
| | | | | |
| | | | | |

**Complete a chain of custody:**

Scenario: Laptop seized from employee suspected of data theft

| Field | Your Entry |
|-------|------------|
| Case # | |
| Description | |
| Serial # | |
| Collected date | |
| Location | |
| Collected by | |
| MD5 hash | |
| Storage | |

**What breaks chain of custody?**

| Action | Why It Breaks Chain |
|--------|---------------------|
| | |
| | |
| | |
| | |

---

### Activity E: Data Sources

**Goal:** Identify forensic data sources.

**Computer forensics sources:**

| Source | Data Found | Collection Method |
|--------|------------|-------------------|
| Hard drive | | |
| RAM | | |
| Registry (Windows) | | |
| Event logs | | |
| Browser history | | |
| Email | | |
| Swap/page file | | |

**Network forensics sources:**

| Source | Data Found | Tools |
|--------|------------|-------|
| Firewall logs | | |
| IDS/IPS logs | | |
| Packet captures | | |
| NetFlow data | | |
| Proxy logs | | |
| DNS logs | | |

**Mobile forensics sources:**

| Source | Data Found | Challenges |
|--------|------------|------------|
| Call logs | | |
| SMS/Messages | | |
| GPS/Location | | |
| Photos | | |
| Apps | | |
| Cloud sync | | |

**Cloud forensics sources:**

| Source | Data Found | Challenges |
|--------|------------|------------|
| Activity logs | | |
| Storage | | |
| Email | | |
| Metadata | | |

---

### Activity F: Windows Forensics Artifacts

**Goal:** Identify key Windows evidence.

**Windows registry hives:**

| Hive | Location | Contains |
|------|----------|----------|
| SAM | | |
| SYSTEM | | |
| SOFTWARE | | |
| SECURITY | | |
| NTUSER.DAT | | |

**Key registry locations:**

| Location | Forensic Value |
|----------|----------------|
| Run/RunOnce | |
| MRU lists | |
| USB history | |
| Network history | |
| User accounts | |

**Windows event logs:**

| Log | Events | Forensic Value |
|-----|--------|----------------|
| Security | | |
| System | | |
| Application | | |
| PowerShell | | |

**Important Event IDs:**

| Event ID | Meaning |
|----------|---------|
| 4624 | |
| 4625 | |
| 4634 | |
| 4648 | |
| 4672 | |
| 4688 | |
| 4720 | |
| 1102 | |

**File system artifacts:**

| Artifact | Information |
|----------|-------------|
| $MFT | |
| $LogFile | |
| Prefetch | |
| Recent files | |
| Recycle Bin | |
| Thumbnail cache | |

---

### Activity G: Timeline Analysis

**Goal:** Reconstruct events chronologically.

**Timeline sources:**

| Source | Timestamp Type |
|--------|----------------|
| File system (MACB) | |
| Event logs | |
| Browser history | |
| Registry | |
| Email headers | |

**MACB timestamps:**

| Letter | Meaning | When Updated |
|--------|---------|--------------|
| M | | |
| A | | |
| C | | |
| B | | |

**Build a timeline:**

Incident: Suspected data exfiltration

| Time | Source | Event | Significance |
|------|--------|-------|--------------|
| 09:00 | Event log | User login | |
| 09:15 | File system | Accessed HR folder | |
| 09:30 | File system | Large file copied to USB | |
| 09:45 | Event log | User logoff | |
| 10:00 | Badge system | User left building | |

What does this timeline suggest?

_________________________________________________________________

---

### Activity H: Anti-Forensics Awareness

**Goal:** Recognize evidence tampering.

**Anti-forensics techniques:**

| Technique | Description | Detection Method |
|-----------|-------------|------------------|
| Data wiping | | |
| Encryption | | |
| Steganography | | |
| Log deletion | | |
| Timestamp manipulation | | |
| File name obfuscation | | |
| Rootkits | | |

**Signs of anti-forensics:**

| Indicator | What It May Mean |
|-----------|------------------|
| Gaps in logs | |
| Wiping tool artifacts | |
| Encrypted containers | |
| Timestamps out of sequence | |
| Missing event logs | |
| Tor/VPN usage | |

**How to address:**

| Anti-Forensic | Countermeasure |
|---------------|----------------|
| Wiped files | |
| Encrypted data | |
| Deleted logs | |
| Modified timestamps | |

---

### Activity I: Legal Considerations

**Goal:** Understand forensic legal requirements.

**Evidence admissibility requirements:**

| Requirement | Description |
|-------------|-------------|
| Relevant | |
| Authentic | |
| Complete | |
| Reliable | |
| Believable | |

**Legal authorization:**

| Scenario | Authorization Needed |
|----------|---------------------|
| Corporate investigation (company device) | |
| Criminal investigation | |
| Civil litigation | |
| Employee suspected of crime | |

**Legal hold:**

What is a legal hold?

_________________________________________________________________

Who can initiate it?

_________________________________________________________________

What must be preserved?

_________________________________________________________________

**Privacy considerations:**

| Consideration | Action |
|---------------|--------|
| Personal data on work device | |
| Email communications | |
| Cloud accounts | |
| Third-party data | |

---

### Activity J: Forensic Tools

**Goal:** Understand forensic tool categories.

**Acquisition tools:**

| Tool | Purpose | Type |
|------|---------|------|
| FTK Imager | | Free |
| dd | | Free |
| EnCase | | Commercial |
| Cellebrite | | Commercial |

**Analysis tools:**

| Tool | Purpose | Type |
|------|---------|------|
| Autopsy | | Free |
| FTK | | Commercial |
| EnCase | | Commercial |
| Volatility | | Free |
| Wireshark | | Free |

**Specialized tools:**

| Category | Tools |
|----------|-------|
| Memory analysis | |
| Mobile forensics | |
| Network forensics | |
| Malware analysis | |
| Password recovery | |

**Tool validation:**

Why must forensic tools be validated?

_________________________________________________________________

How do you validate a tool?

_________________________________________________________________

---

### Activity K: Forensic Report Writing

**Goal:** Document findings professionally.

**Report sections:**

| Section | Content |
|---------|---------|
| Executive summary | |
| Background | |
| Objectives | |
| Evidence | |
| Analysis | |
| Findings | |
| Conclusions | |
| Appendices | |

**Writing guidelines:**

| Guideline | Reason |
|-----------|--------|
| Objective language | |
| Avoid speculation | |
| Document everything | |
| Include methodology | |
| Cite evidence | |

**Sample finding format:**

| Element | Content |
|---------|---------|
| Finding # | |
| Description | |
| Evidence source | |
| Analysis | |
| Significance | |

**Write a finding:**

Evidence: Browser history shows visits to file sharing sites followed by large file upload

| Element | Your Entry |
|---------|------------|
| Finding # | 1 |
| Description | |
| Evidence source | |
| Analysis | |
| Significance | |

---

### Activity L: Forensic Scenarios

**Goal:** Apply forensics to real situations.

**Scenario 1: Malware Investigation**

A system is suspected of being infected with malware.

| Task | Action | Tools |
|------|--------|-------|
| Preserve evidence | | |
| Capture memory | | |
| Image disk | | |
| Analyze processes | | |
| Find persistence | | |
| Identify C2 | | |

**Scenario 2: Insider Data Theft**

HR reports an employee may have stolen customer data before resigning.

| Task | Evidence Source | What to Look For |
|------|-----------------|------------------|
| File access | | |
| USB usage | | |
| Email | | |
| Cloud uploads | | |
| Print logs | | |

**Scenario 3: Account Compromise**

User reports their account was used to send phishing emails.

| Task | Evidence Source | What to Look For |
|------|-----------------|------------------|
| Login location | | |
| Login times | | |
| Sent emails | | |
| Account changes | | |
| Forwarding rules | | |

---

### Tier 2 Bonus: Windows Artifact Examination

> ⚠️ **Requires:** Windows command line access

---

### Activity M: View System Information

**Basic system info:**

```cmd
systeminfo
```

Document:

| Field | Value |
|-------|-------|
| OS Name | |
| OS Version | |
| System Boot Time | |
| Original Install Date | |
| System Manufacturer | |

**Network configuration:**

```cmd
ipconfig /all
```

| Field | Value |
|-------|-------|
| Host Name | |
| Primary DNS | |
| DHCP Enabled | |
| IP Address | |

**Recent user activity:**

PowerShell:
```powershell
Get-ChildItem -Path "$env:APPDATA\Microsoft\Windows\Recent" | Select-Object Name, LastWriteTime | Sort-Object LastWriteTime -Descending | Select-Object -First 10
```

| File | Last Accessed |
|------|---------------|
| | |
| | |
| | |

---

### Activity N: Check Event Logs

**View recent security events:**

PowerShell:
```powershell
Get-WinEvent -LogName Security -MaxEvents 10 | Select-Object TimeCreated, Id, Message
```

**Search for specific event:**

```powershell
Get-WinEvent -FilterHashtable @{LogName='Security';ID=4624} -MaxEvents 5
```

| Time | Event ID | Description |
|------|----------|-------------|
| | | |
| | | |

**Check for cleared logs:**

```powershell
Get-WinEvent -FilterHashtable @{LogName='Security';ID=1102} -MaxEvents 5 -ErrorAction SilentlyContinue
```

Any log clearing events found? _______________

Why would this be significant?

_________________________________________________________________

---

## Section 3: Reflection Scenarios (5 min)

**Scenario 1:** You arrive at a crime scene and find a laptop that is powered on with a login screen displayed. The lead investigator wants to immediately unplug it and take it back to the lab. What do you recommend and why?

_________________________________________________________________

_________________________________________________________________

**Scenario 2:** During analysis, you discover evidence that proves the employee is innocent of the suspected data theft. However, you also find evidence of unrelated policy violations. How do you handle this?

_________________________________________________________________

_________________________________________________________________

**Scenario 3:** Your forensic analysis is challenged in court because you used a new forensic tool that hasn't been widely validated. How could you have prevented this situation?

_________________________________________________________________

_________________________________________________________________

---

## Section 4: Key Takeaways Checklist

Before finishing, ensure you can:

- [ ] List order of volatility from most to least
- [ ] Explain difference between forensic image and backup
- [ ] Describe write blocker purpose
- [ ] Explain why hashing is critical
- [ ] Document chain of custody properly
- [ ] Identify key data sources for forensics
- [ ] Recognize Windows forensic artifacts
- [ ] Build event timelines
- [ ] Recognize anti-forensics techniques
- [ ] Understand legal requirements for evidence

---

## What You Learned Today

- ✅ Applied order of volatility
- ✅ Performed evidence acquisition concepts
- ✅ Verified integrity with hashing
- ✅ Documented chain of custody
- ✅ Identified forensic data sources
- ✅ Explored Windows artifacts
- ✅ Built forensic timelines
- ✅ Recognized anti-forensics
- ✅ Understood legal requirements
- ✅ Reviewed forensic tools
- ✅ Wrote forensic reports
- ✅ Solved forensic scenarios
- ✅ (Tier 2) Examined Windows artifacts

**Next Lab:** Security Automation and Scripting - automating security tasks and workflows.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 26: Digital Forensics*