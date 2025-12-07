# Lab 27: Printer Configuration and Troubleshooting

**Tier:** 1 & 2 (Universal + Hands-On)
**Time:** 30-35 minutes
**Exam Objectives:** 3.6 - Deploy and configure multifunction devices/printers and settings

---

## Section 1: Concept Check (5 min)

Answer these questions in your own words:

1. **What's the difference between a PCL driver and a PostScript driver? When would you choose one over the other?**

2. **A user can print from their computer but the documents sit in the queue showing "Error - Printing." Other users on the network can print fine. Where is the problem likely located?**

3. **Explain the purpose of a printer's spooler service. What happens to print jobs if the spooler crashes?**

4. **A network printer suddenly stops accepting print jobs from all computers. Ping to the printer's IP address fails. List your troubleshooting steps in order.**

5. **What is "secure print" or "pull printing" and why do businesses use it?**

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)

> ✅ **Uses conceptual knowledge and research** - Master printer configuration without physical equipment.

---

#### Activity A: Printer Driver Types

**Goal:** Understand different printer driver technologies.

**Driver types comparison:**

| Driver Type | Full Name | Characteristics | Best For |
|-------------|-----------|-----------------|----------|
| PCL | | | |
| PostScript (PS) | | | |
| XPS | | | |
| Universal (UPD) | | | |

**PCL versions:**

| Version | Features | Era |
|---------|----------|-----|
| PCL 3 | | |
| PCL 5 | | |
| PCL 5e | | |
| PCL 6 / PCL XL | | |

**PostScript versions:**

| Version | Year | Key Features |
|---------|------|--------------|
| PostScript Level 1 | | |
| PostScript Level 2 | | |
| PostScript 3 | | |

**When to use each driver:**

| Scenario | Best Driver | Why |
|----------|-------------|-----|
| General office documents | | |
| Graphic design/publishing | | |
| Mixed environment (many printer models) | | |
| CAD drawings | | |
| Photo printing | | |

**Driver sources (in order of preference):**

| Source | Pros | Cons |
|--------|------|------|
| Manufacturer website | | |
| Windows Update | | |
| Included CD | | |
| Universal/generic | | |

---

#### Activity B: Windows Printer Installation

**Goal:** Understand printer installation methods in Windows.

**Installation methods:**

| Method | When to Use | Steps Overview |
|--------|-------------|----------------|
| USB (Plug and Play) | | |
| Network (auto-discovery) | | |
| Network (manual IP) | | |
| Shared printer | | |
| Wireless Direct | | |

**USB printer installation steps:**

| Step | Action | What Happens |
|------|--------|--------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |

**Network printer installation (manual):**

| Step | Action | Details |
|------|--------|---------|
| 1 | Get printer IP address | |
| 2 | Open Settings → Printers | |
| 3 | Add a printer | |
| 4 | Select "Add manually" | |
| 5 | Enter IP/hostname | |
| 6 | Select/install driver | |
| 7 | Name the printer | |
| 8 | Set sharing options | |
| 9 | Print test page | |

**Shared printer connection:**

| Method | Path Format | Example |
|--------|-------------|---------|
| UNC path | | |
| Browse network | | |
| Add by name | | |

**Required information for network setup:**

| Information | Where to Find It | Example |
|-------------|------------------|---------|
| IP address | | |
| Subnet mask | | |
| Default gateway | | |
| Hostname | | |
| Port number | | |

---

#### Activity C: Printer Configuration Settings

**Goal:** Master common printer settings and options.

**Print preferences (per-document settings):**

| Setting | Options | Use Case |
|---------|---------|----------|
| Paper size | | |
| Orientation | | |
| Quality/Resolution | | |
| Color mode | | |
| Duplex | | |
| Copies | | |
| Collation | | |
| Pages per sheet | | |
| Scaling | | |

**Printer properties (device settings):**

| Tab | Settings Available |
|-----|-------------------|
| General | |
| Sharing | |
| Ports | |
| Advanced | |
| Security | |
| Device Settings | |

**Advanced settings:**

| Setting | Purpose | Options |
|---------|---------|---------|
| Availability | | |
| Priority | | |
| Spooling | | |
| Print processor | | |
| Separator page | | |

**Duplex printing options:**

| Option | Description |
|--------|-------------|
| None (simplex) | |
| Long edge | |
| Short edge | |

When to use long edge vs short edge:

_________________________________________________________________

---

#### Activity D: Print Queue and Spooler Management

**Goal:** Understand print job management.

**Print queue status indicators:**

| Status | Meaning | Action Needed |
|--------|---------|---------------|
| Printing | | |
| Paused | | |
| Error | | |
| Deleting | | |
| Spooling | | |
| Sent to printer | | |
| Offline | | |

**Print queue management tasks:**

| Task | How to Perform | When Needed |
|------|----------------|-------------|
| Pause all printing | | |
| Resume printing | | |
| Cancel one job | | |
| Cancel all jobs | | |
| Restart a job | | |
| Change job priority | | |

**Print spooler service:**

| Aspect | Details |
|--------|---------|
| Service name | |
| Function | |
| Spool folder location | |
| File types created | |

**Spooler troubleshooting commands:**

| Command | Purpose |
|---------|---------|
| `net stop spooler` | |
| `net start spooler` | |
| `services.msc` | |

**Clearing stuck print jobs:**

| Step | Action |
|------|--------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

---

#### Activity E: Network Printer Troubleshooting

**Goal:** Diagnose network printing issues.

**Network printing components:**

```
[Computer] → [Network] → [Print Server/Printer] → [Paper Output]
     ↓           ↓              ↓
  Driver      Switch/       IP Address
  Spooler     Router        Port 9100
  Queue       Cables        Protocol
```

**Troubleshooting decision tree:**

| Question | If Yes → | If No → |
|----------|----------|---------|
| Can you ping the printer? | | |
| Does printer show on network? | | |
| Can others print? | | |
| Can you print test page locally? | | |
| Is printer showing errors? | | |

**Common network printing issues:**

| Symptom | Possible Causes | Solutions |
|---------|-----------------|-----------|
| Printer offline | | |
| Jobs stuck in queue | | |
| Slow printing | | |
| Garbled output | | |
| Cannot find printer | | |
| Access denied | | |

**Network troubleshooting commands:**

| Command | Purpose | Example |
|---------|---------|---------|
| ping | | |
| nslookup | | |
| tracert | | |
| netstat | | |
| telnet | | |

**Testing printer port connectivity:**

How to test if port 9100 is open:

_________________________________________________________________

---

#### Activity F: Print Quality Issues

**Goal:** Diagnose and resolve print quality problems.

**Laser printer quality issues:**

| Symptom | Possible Causes | Component to Check | Solution |
|---------|-----------------|-------------------|----------|
| Blank pages | | | |
| All black pages | | | |
| Faded print | | | |
| Smearing/rubbing off | | | |
| Vertical lines | | | |
| Horizontal lines | | | |
| Repeating marks | | | |
| Ghosting | | | |
| Speckling | | | |
| Paper jams | | | |

**Inkjet printer quality issues:**

| Symptom | Possible Causes | Solution |
|---------|-----------------|----------|
| Missing lines/streaks | | |
| Wrong colors | | |
| Blurry print | | |
| Smearing | | |
| Banding | | |
| Ink not drying | | |

**Calculating repeating defect source:**

| Component | Typical Circumference | Repeat Distance |
|-----------|----------------------|-----------------|
| OPC drum | | |
| Fuser roller | | |
| Transfer roller | | |
| Developer roller | | |

How to identify which component causes repeating defect:

_________________________________________________________________

**Print quality checklist:**

| Check | Action |
|-------|--------|
| Paper type | |
| Paper condition | |
| Toner/ink level | |
| Drum condition | |
| Print settings | |
| Driver version | |

---

#### Activity G: Printer Maintenance

**Goal:** Understand preventive maintenance procedures.

**Laser printer maintenance schedule:**

| Task | Frequency | Why |
|------|-----------|-----|
| Clean exterior | | |
| Clean paper path | | |
| Replace toner | | |
| Replace drum | | |
| Replace fuser | | |
| Replace maintenance kit | | |
| Calibrate colors | | |
| Update firmware | | |

**Inkjet printer maintenance:**

| Task | Frequency | Why |
|------|-----------|-----|
| Run head cleaning | | |
| Align print heads | | |
| Clean exterior | | |
| Check for dried ink | | |
| Replace cartridges | | |
| Clean paper rollers | | |

**Thermal printer maintenance:**

| Task | Frequency | Why |
|------|-----------|-----|
| Clean print head | | |
| Clean platen roller | | |
| Clean sensors | | |
| Check for debris | | |
| Calibrate | | |

**Impact printer maintenance:**

| Task | Frequency | Why |
|------|-----------|-----|
| Replace ribbon | | |
| Clean print head | | |
| Clean platen | | |
| Adjust paper guides | | |
| Lubricate (if required) | | |

**Maintenance kit contents (laser):**

| Component | Purpose |
|-----------|---------|
| | |
| | |
| | |
| | |

---

#### Activity H: Printer Security

**Goal:** Understand printer security features and risks.

**Printer security risks:**

| Risk | Description | Mitigation |
|------|-------------|------------|
| Unauthorized access | | |
| Data interception | | |
| Stored documents | | |
| Default credentials | | |
| Firmware vulnerabilities | | |
| Physical access | | |

**Security features:**

| Feature | Description | When to Use |
|---------|-------------|-------------|
| Secure print/PIN release | | |
| Badge/card authentication | | |
| User access controls | | |
| Encryption (in transit) | | |
| Encrypted hard drive | | |
| Audit logging | | |
| Secure erase | | |

**Secure print process:**

| Step | What Happens |
|------|--------------|
| 1 | |
| 2 | |
| 3 | |
| 4 | |

**Network security for printers:**

| Measure | Purpose |
|---------|---------|
| Firewall rules | |
| VLAN segmentation | |
| Disable unused protocols | |
| Change default passwords | |
| Update firmware regularly | |
| Disable SNMP or secure it | |

---

#### Activity I: Printer Sharing and Permissions

**Goal:** Configure printer sharing in Windows.

**Sharing setup steps:**

| Step | Action | Details |
|------|--------|---------|
| 1 | Open printer properties | |
| 2 | Go to Sharing tab | |
| 3 | Check "Share this printer" | |
| 4 | Set share name | |
| 5 | Install additional drivers | |

**Share naming best practices:**

| Good Practice | Bad Practice | Why |
|---------------|--------------|-----|
| | | |
| | | |
| | | |

**Permission levels:**

| Permission | Can Do |
|------------|--------|
| Print | |
| Manage this printer | |
| Manage documents | |

**Default permissions:**

| Group | Default Permission |
|-------|-------------------|
| Everyone | |
| Administrators | |
| Creator Owner | |

**Connecting to shared printer:**

| Method | Command/Steps |
|--------|---------------|
| UNC path in Run | |
| Add printer wizard | |
| Group Policy | |
| Login script | |

---

#### Activity J: Troubleshooting Scenarios

**Goal:** Practice systematic troubleshooting.

**Scenario 1: Nothing prints**

User reports: "I clicked print but nothing happens"

| Step | Check | Result/Action |
|------|-------|---------------|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |

**Scenario 2: Prints are garbled**

Output looks like random symbols and characters

| Possible Cause | How to Verify | Fix |
|----------------|---------------|-----|
| | | |
| | | |
| | | |

**Scenario 3: Only one user can't print**

All other users can print fine to the same network printer

| Check | Why |
|-------|-----|
| | |
| | |
| | |
| | |

**Scenario 4: Paper jams constantly**

Printer jams every few pages

| Check | Issue If... |
|-------|-------------|
| Paper type | |
| Paper condition | |
| Paper tray | |
| Pickup rollers | |
| Paper path | |
| Fuser | |

**Scenario 5: Colors are wrong**

Color prints don't match screen colors

| Check | Issue/Solution |
|-------|----------------|
| | |
| | |
| | |
| | |

---

#### Activity K: Printer Configuration Scenarios

**Goal:** Practice recommending configurations.

**Scenario 1: Department Printer Setup**

| Requirements | |
|--------------|---|
| Users | 20 people in accounting |
| Security | Financial documents, confidential |
| Volume | 2000 pages/month |
| Features needed | Duplex, stapling |

Configuration recommendations:
- Authentication method: _________________
- Print release method: _________________
- Permissions setup: _________________
- Paper/tray config: _________________

**Scenario 2: Public Library**

| Requirements | |
|--------------|---|
| Users | General public |
| Concerns | Cost recovery, abuse prevention |
| Volume | High, variable |
| Management | Minimal staff oversight |

Configuration recommendations:
- User access: _________________
- Cost control: _________________
- Queue management: _________________
- Security: _________________

**Scenario 3: Executive Floor**

| Requirements | |
|--------------|---|
| Users | 5 executives, 3 assistants |
| Security | Highly confidential documents |
| Convenience | Must be fast and reliable |
| Features | Color, finishing options |

Configuration recommendations:
- Printer type: _________________
- Security measures: _________________
- Priority settings: _________________
- Support plan: _________________

---

### Tier 2 Activities (Hands-On)

> ⚠️ **Requires access to Windows PC** - Uses Windows printer settings.

---

#### Activity L: Explore Installed Printers

**Goal:** Examine printer configuration on your system.

**List installed printers:**

1. Settings → Bluetooth & devices → Printers & scanners

| Printer Name | Type | Default? | Status |
|--------------|------|----------|--------|
| | | | |
| | | | |
| | | | |

**For each printer, document:**

| Property | Printer 1 | Printer 2 |
|----------|-----------|-----------|
| Port | | |
| Driver | | |
| Processor | | |
| Shared? | | |

---

#### Activity M: Print Spooler Examination

**Goal:** Understand spooler operation.

**Check spooler service:**

1. Open Services (services.msc)
2. Find "Print Spooler"

| Property | Value |
|----------|-------|
| Status | |
| Startup type | |
| Log on as | |
| Dependencies | |

**Find spool folder:**

Default location: `C:\Windows\System32\spool\PRINTERS`

| Contents | Description |
|----------|-------------|
| Files present? | |
| File types | |

**Test spooler restart:**

```cmd
net stop spooler
net start spooler
```

Result: _________________________________________________

---

#### Activity N: Printer Troubleshooting Tools

**Goal:** Use built-in troubleshooting tools.

**Windows Printer Troubleshooter:**

1. Settings → System → Troubleshoot → Other troubleshooters
2. Run "Printer" troubleshooter

| Issue Checked | Result |
|---------------|--------|
| | |
| | |
| | |

**Event Viewer (printer events):**

1. Open Event Viewer
2. Navigate to: Applications and Services Logs → Microsoft → Windows → PrintService

| Recent Events | Event ID | Description |
|---------------|----------|-------------|
| | | |
| | | |

**Print Management Console (if available):**

1. Open printmanagement.msc (Windows Pro/Enterprise)

| Section | Information Available |
|---------|----------------------|
| Print Servers | |
| Deployed Printers | |
| Drivers | |
| Forms | |
| Ports | |

---

## Section 3: Reflection (5 min)

**Think about these real-world scenarios:**

1. **Users report that print jobs are taking much longer than usual. The printer itself prints a test page from its control panel instantly. What areas would you investigate?**

2. **A printer was working fine yesterday but today shows as "Offline" in Windows, even though the printer's display shows it's ready. What changed and how would you fix it?**

3. **An office moves a network printer to a different floor. After the move, no one can print. The printer was unplugged and moved, then plugged back in. What likely happened?**

4. **A user prints a document and it comes out as several pages of garbage characters. The same document prints fine to a different printer. What's wrong?**

---

## What You Learned Today

- ✅ Understood printer driver types (PCL, PostScript, XPS)
- ✅ Learned Windows printer installation methods
- ✅ Mastered printer configuration settings
- ✅ Studied print queue and spooler management
- ✅ Practiced network printer troubleshooting
- ✅ Diagnosed print quality issues
- ✅ Understood printer maintenance procedures
- ✅ Learned printer security features
- ✅ Configured printer sharing and permissions
- ✅ Practiced troubleshooting scenarios
- ✅ (Tier 2) Examined real printer settings and tools

**Next Lab:** Cable Types and Connectors - comprehensive review of all cable types for the exam.

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════╗
║         PRINTER CONFIGURATION QUICK REFERENCE                  ║
╠═══════════════════════════════════════════════════════════════╣
║  DRIVER TYPES:                                                 ║
║  PCL: Fast, general purpose, office documents                 ║
║  PostScript: Graphics, design, accurate rendering             ║
║  XPS: Microsoft alternative to PostScript                     ║
║  Universal: One driver for multiple printer models            ║
╠═══════════════════════════════════════════════════════════════╣
║  SPOOLER COMMANDS:                                             ║
║  net stop spooler    - Stop print spooler                     ║
║  net start spooler   - Start print spooler                    ║
║  Spool folder: C:\Windows\System32\spool\PRINTERS             ║
╠═══════════════════════════════════════════════════════════════╣
║  NETWORK PRINTING PORTS:                                       ║
║  RAW: 9100 | LPR/LPD: 515 | IPP: 631 | SMB: 445              ║
╠═══════════════════════════════════════════════════════════════╣
║  TROUBLESHOOTING ORDER:                                        ║
║  1. Check physical (cables, power, paper)                     ║
║  2. Check printer status (errors, offline)                    ║
║  3. Check network (ping, port connectivity)                   ║
║  4. Check queue (stuck jobs, paused)                          ║
║  5. Check driver (correct, updated)                           ║
║  6. Restart spooler                                           ║
╠═══════════════════════════════════════════════════════════════╣
║  QUALITY ISSUES: Repeating defect = drum circumference        ║
║  Smearing = fusing problem | Faded = low toner or transfer    ║
╚═══════════════════════════════════════════════════════════════╝
```

---

*CertifyStack - CompTIA A+ (220-1101)*
*Lab 27: Printer Configuration and Troubleshooting*