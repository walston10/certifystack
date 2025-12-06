# Lab 26: Digital Forensics - Solution Guide

**Note to Students:** Review this AFTER completing your own work. Digital forensics is critical for incident investigation and legal proceedings.

---

## Section 1: Concept Check - Answers

**1. Order of volatility:**

**Answer:**

Order of volatility lists evidence from most volatile (disappears fastest) to least volatile:

1. CPU registers/cache
2. RAM
3. Swap/page file
4. Hard drive
5. Remote logs
6. Physical configuration
7. Archival media

**Why it matters:** Collect most volatile first—RAM disappears on power off, but hard drive data persists.

---

**2. Forensic image vs Backup:**

**Answer:**

| Aspect | Forensic Image | Backup |
|--------|----------------|--------|
| **Content** | Bit-for-bit exact copy | Selected files |
| **Deleted files** | Included | Not included |
| **Slack space** | Included | Not included |
| **Purpose** | Investigation/evidence | Recovery |
| **Verification** | Hash verified | Usually not |

---

**3. Write blocker:**

**Answer:**

Write blocker prevents any writes to original evidence media during acquisition.

**Why:** Writing to evidence changes it—even mounting a drive updates timestamps. Modified evidence may be inadmissible in court.

---

**4. Hashing evidence:**

**Answer:**

Hashing creates a unique "fingerprint" of evidence.

**Purpose:**
- Proves evidence wasn't modified
- Same hash = same content
- Changed hash = tampered evidence
- Required for court admissibility

---

**5. Legal hold vs Chain of custody:**

**Answer:**

| Concept | Definition |
|---------|------------|
| **Legal hold** | Order to preserve all relevant data for potential litigation |
| **Chain of custody** | Documentation of who handled evidence and when |

Legal hold = what to keep; Chain of custody = how it was handled.

---

## Section 2: Activity Solutions

### Activity A: Order of Volatility - Answers

| Priority | Data Type | Volatility | Collection |
|----------|-----------|------------|------------|
| 1 | CPU registers/cache | Seconds | Specialized tools |
| 2 | RAM | Power off = gone | Memory dump |
| 3 | Swap/page file | Survives reboot | Disk image |
| 4 | Hard drive | Persistent | Disk image |
| 5 | Remote logs | Depends on retention | Copy logs |
| 6 | Physical config | Static | Photos/docs |
| 7 | Archival media | Years | Image tape/optical |

**What's lost if you wait:**

| Scenario | Lost Data |
|----------|-----------|
| Reboot before RAM | Running malware, encryption keys, passwords |
| Disconnect network | Active connections, C2 communication |
| Power off | All RAM contents |
| Wait 24 hours | Log rotation, cache clearing |

**What volatile data reveals:**

| Data | Value |
|------|-------|
| RAM | Running malware, decrypted data, passwords |
| Processes | What was executing, malicious programs |
| Connections | C2 servers, data exfil destinations |
| Logged-in users | Who was active |
| Clipboard | Recently copied data |
| Encryption keys | Access to encrypted data |

---

### Activity B: Evidence Acquisition - Answers

| Type | Description | When |
|------|-------------|------|
| Physical | Bit-for-bit entire drive | Full investigation |
| Logical | File system only | Time-limited |
| Live | Running system | Can't power off |
| Targeted | Specific files/folders | Known evidence location |

**Image vs Backup:**

| Aspect | Image | Backup |
|--------|-------|--------|
| Contents | Everything including empty space | Selected files |
| Deleted files | Yes | No |
| Slack space | Yes | No |
| Bit-for-bit | Yes | No |
| Compression | Optional | Common |
| Purpose | Evidence | Recovery |
| Verification | Hash required | Optional |

**Write blocker:** Prevents any modification to original media, ensuring evidence integrity.

**Without write blocker:** OS may update timestamps, change file metadata, or modify system files—contaminating evidence.

---

### Activity C: Hashing - Answers

| Algorithm | Size | Status | Use |
|-----------|------|--------|-----|
| MD5 | 128-bit | Weak but common | Legacy, speed |
| SHA-1 | 160-bit | Deprecated | Legacy |
| SHA-256 | 256-bit | Current standard | Evidence |
| SHA-512 | 512-bit | Strong | High security |

**When to hash:**

| Point | Purpose |
|-------|---------|
| Before acquisition | Establish original state |
| After acquisition | Verify copy is exact |
| Before analysis | Confirm working copy |
| After analysis | Prove no modification |
| Each transfer | Document integrity |

**If hashes don't match:** Evidence was modified—may be inadmissible, investigation compromised, need to explain discrepancy.

---

### Activity D: Chain of Custody - Answers

**What breaks chain:**

| Action | Why |
|--------|-----|
| Undocumented access | Unknown what happened |
| Missing signatures | Can't prove who had it |
| Gaps in timeline | Unaccounted time |
| Improper storage | Could have been tampered |

---

### Activity E: Data Sources - Answers

**Computer sources:**

| Source | Data | Collection |
|--------|------|------------|
| Hard drive | Files, deleted data, OS artifacts | Imaging |
| RAM | Running processes, passwords | Memory dump |
| Registry | Config, history, user activity | Registry export |
| Event logs | Security events, logins | Log export |
| Browser | History, downloads, cookies | Browser artifacts |
| Email | Communications, attachments | PST/mailbox export |
| Swap | Paged memory | Disk image |

**Network sources:**

| Source | Data | Tools |
|--------|------|-------|
| Firewall | Allowed/denied connections | Log export |
| IDS/IPS | Attack signatures, alerts | SIEM |
| Packets | Full network content | Wireshark, tcpdump |
| NetFlow | Connection metadata | Flow analyzers |
| Proxy | Web requests, filtering | Proxy logs |
| DNS | Name lookups | DNS logs |

**Mobile challenges:**

| Source | Challenges |
|--------|------------|
| Call logs | Encryption, cloud sync |
| Messages | End-to-end encryption |
| GPS | Privacy, accuracy |
| Photos | Cloud storage, metadata |
| Apps | Sandboxing, encryption |
| Cloud | Jurisdiction, access |

---

### Activity F: Windows Artifacts - Answers

**Registry hives:**

| Hive | Location | Contains |
|------|----------|----------|
| SAM | C:\Windows\System32\config | User accounts |
| SYSTEM | C:\Windows\System32\config | Hardware, services |
| SOFTWARE | C:\Windows\System32\config | Installed programs |
| SECURITY | C:\Windows\System32\config | Security policies |
| NTUSER.DAT | User profile | User settings |

**Event IDs:**

| ID | Meaning |
|----|---------|
| 4624 | Successful login |
| 4625 | Failed login |
| 4634 | Logoff |
| 4648 | Explicit credential logon |
| 4672 | Special privileges assigned |
| 4688 | Process created |
| 4720 | User account created |
| 1102 | Audit log cleared |

**File artifacts:**

| Artifact | Information |
|----------|-------------|
| $MFT | Master File Table—all files |
| $LogFile | File system journal |
| Prefetch | Program execution history |
| Recent | Recently accessed files |
| Recycle Bin | Deleted files |
| Thumbcache | Image thumbnails |

---

### Activity G: Timeline - Answers

**MACB timestamps:**

| Letter | Meaning | Updated When |
|--------|---------|--------------|
| M | Modified | Content changed |
| A | Accessed | File opened/read |
| C | Changed | Metadata changed |
| B | Birth (created) | File created |

**Timeline analysis:**

The timeline suggests intentional data theft: User logged in, accessed sensitive HR files, copied to USB, logged off, and left building—all within 1 hour during a suspicious time pattern.

---

### Activity H: Anti-Forensics - Answers

| Technique | Description | Detection |
|-----------|-------------|-----------|
| Data wiping | Overwrite data | Wiping tool artifacts |
| Encryption | Prevent reading | Encrypted containers |
| Steganography | Hide in images | Statistical analysis |
| Log deletion | Remove evidence | Log gaps, event 1102 |
| Timestamp | Change file dates | Inconsistencies |
| Obfuscation | Hide file names | Extension mismatch |
| Rootkits | Hide processes | Memory analysis |

**Countermeasures:**

| Anti-Forensic | Counter |
|---------------|---------|
| Wiped files | File carving, slack space |
| Encrypted | Legal compulsion, key recovery |
| Deleted logs | Remote log servers |
| Modified timestamps | Multiple timestamp sources |

---

### Activity I: Legal - Answers

**Evidence requirements:**

| Requirement | Description |
|-------------|-------------|
| Relevant | Related to case |
| Authentic | Is what it claims to be |
| Complete | Not selectively edited |
| Reliable | Collected properly |
| Believable | Jury can understand |

**Legal hold:** Order to preserve all data that might be relevant to anticipated or actual litigation.

- Initiated by: Legal counsel
- Preserve: All potentially relevant data including backups

---

### Activity J: Tools - Answers

**Acquisition tools:**

| Tool | Purpose | Type |
|------|---------|------|
| FTK Imager | Disk/memory imaging | Free |
| dd | Unix imaging | Free |
| EnCase | Enterprise imaging | Commercial |
| Cellebrite | Mobile acquisition | Commercial |

**Analysis tools:**

| Tool | Purpose | Type |
|------|---------|------|
| Autopsy | Disk analysis | Free |
| FTK | Full analysis | Commercial |
| EnCase | Enterprise analysis | Commercial |
| Volatility | Memory analysis | Free |
| Wireshark | Network analysis | Free |

**Tool validation:** Required to ensure reliable, consistent results. Validated through testing against known data, peer review, and court acceptance.

---

### Activity K: Report - Answers

| Section | Content |
|---------|---------|
| Executive summary | High-level findings for non-technical |
| Background | Case context |
| Objectives | What was investigated |
| Evidence | What was collected |
| Analysis | Methods and tools used |
| Findings | What was discovered |
| Conclusions | Interpretation |
| Appendices | Technical details, hashes |

---

### Activity L: Scenarios - Answers

**Scenario 1 (Malware):**

| Task | Action | Tools |
|------|--------|-------|
| Preserve | Don't power off | - |
| Memory | Capture RAM | FTK Imager, WinPMEM |
| Disk | Forensic image | FTK Imager, dd |
| Processes | List running | Volatility |
| Persistence | Check registry, scheduled tasks | Autoruns |
| C2 | Network connections | Volatility, logs |

**Scenario 2 (Insider):**

| Task | Source | Look For |
|------|--------|----------|
| File access | File server logs | Customer data access |
| USB | Registry, event logs | Device connections |
| Email | Email server | Forwarding to personal |
| Cloud | Proxy logs | Upload to Dropbox/Drive |
| Print | Print server | Large print jobs |

**Scenario 3 (Compromise):**

| Task | Source | Look For |
|------|--------|----------|
| Login location | Auth logs | Unusual IPs/countries |
| Login times | Auth logs | Off-hours activity |
| Sent emails | Mail logs | Phishing sent |
| Account changes | Audit logs | Password/setting changes |
| Forwarding | Mail rules | Auto-forward rules |

---

## Section 3: Reflection Scenarios - Answers

**Scenario 1: Powered-on laptop**

**Recommendation:** Do NOT unplug immediately.

**Actions:**
1. Capture RAM first (volatile)
2. Document running processes
3. Document network connections
4. Take photos of screen
5. Then safely power off
6. Image drive at lab

Unplugging loses all volatile evidence—running malware, encryption keys, active connections.

---

**Scenario 2: Innocent but policy violation**

**Approach:**
1. Report findings objectively
2. Document what you found
3. Stay within scope of investigation
4. Inform appropriate parties (HR, legal, management)
5. Let them decide on policy violation
6. Maintain objectivity in report

Forensic examiner reports facts—decisions about actions are for HR/legal/management.

---

**Scenario 3: Challenged tool**

**Prevention:**
1. Use widely-accepted, validated tools
2. Document tool version and validation
3. Test tool against known data first
4. Follow established methodology
5. Use multiple tools for verification
6. Be prepared to explain methodology
7. Keep training and certification current

In court, be able to explain how tool works and that it produces reliable results.

---

## Key Exam Tips

1. **Order of volatility:** CPU cache → RAM → Swap → HDD → Remote logs → Physical → Archive

2. **Collect most volatile first** - RAM before disk

3. **Write blocker:** Prevents evidence modification

4. **Hashing:** Proves integrity (SHA-256 preferred)

5. **Chain of custody:** Who had evidence, when, what was done

6. **Forensic image:** Bit-for-bit copy including deleted files and slack space

7. **Key Windows Event IDs:**
   - 4624: Successful login
   - 4625: Failed login
   - 1102: Log cleared

8. **Legal hold:** Preserve all relevant data

9. **MACB:** Modified, Accessed, Changed, Born (created)

10. **Don't power on** a powered-off system (boot changes evidence)

---

## Common Mistakes to Avoid

❌ Powering off before RAM capture

❌ Forgetting write blocker

❌ Not hashing at every stage

❌ Gaps in chain of custody documentation

❌ Working on original evidence instead of copy

❌ Not documenting methodology

❌ Using unvalidated tools

---

**Congratulations on completing Lab 26!**

Digital forensics skills are essential for investigating security incidents and supporting legal proceedings.

---

*CertifyStack - CompTIA Security+ (SY0-701)*
*Lab 26: Digital Forensics - Solution Guide*