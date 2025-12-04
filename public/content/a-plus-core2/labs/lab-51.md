# Lab 51: Troubleshooting Common PC Issues

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 3.1 - Given a scenario, troubleshoot common Windows OS problems

---

## Section 1: Concept Check (5 min)

1. A user can ping a website by IP address but not by name. What's the most likely problem?

2. What does it indicate when a computer gets a 169.254.x.x IP address?

3. A computer shows "Limited connectivity" in the network icon. What are three possible causes?

4. An application worked yesterday but crashes today with "missing DLL" error. What likely happened?

5. A computer takes 15 minutes to boot but runs fine afterward. Where would you start troubleshooting?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Network Connectivity Troubleshooting

**Goal:** Practice network diagnostic sequence.

**Run these commands and document results:**

```cmd
ipconfig /all
```

| Property | Your Value |
|----------|------------|
| IPv4 Address | |
| Subnet Mask | |
| Default Gateway | |
| DNS Servers | |
| DHCP Enabled | |

**Test connectivity sequence:**

```cmd
ping 127.0.0.1
```
Result: _______________

```cmd
ping [your gateway IP]
```
Result: _______________

```cmd
ping 8.8.8.8
```
Result: _______________

```cmd
ping google.com
```
Result: _______________

**Troubleshooting logic:**

| Test Result | What It Means | Likely Problem |
|-------------|---------------|----------------|
| 127.0.0.1 fails | | |
| Gateway fails | | |
| 8.8.8.8 fails | | |
| google.com fails (IP works) | | |
| All succeed | | |

---

#### Activity B: Symptom-to-Cause Matching

**Goal:** Connect symptoms to probable causes.

**Match each symptom to the most likely cause:**

| Symptom | Cause |
|---------|-------|
| BSOD with IRQL_NOT_LESS_OR_EQUAL | |
| Computer freezes, then works after 30 sec | |
| "No boot device found" | |
| Extremely slow boot, fast once loaded | |
| Application shows "side-by-side configuration" error | |
| USB device not recognized | |
| Grinding noise from computer | |
| Computer turns off randomly during heavy use | |
| Clock resets to wrong date after shutdown | |
| Programs run slowly, disk light constantly on | |

**Causes to match:**
- A. Failing hard drive
- B. Driver issue
- C. Too many startup programs
- D. Overheating
- E. CMOS battery dead
- F. Disk I/O bottleneck (possibly failing drive)
- G. Missing Visual C++ runtime
- H. Boot order changed or drive disconnected
- I. Bad USB port or driver
- J. Insufficient RAM, excessive paging

---

#### Activity C: Startup Program Analysis

**Goal:** Identify startup impact.

**Open Task Manager → Startup tab**

**Document ALL startup items:**

| Name | Publisher | Status | Impact | Keep? (Y/N/?) |
|------|-----------|--------|--------|---------------|
| | | | | |
| | | | | |
| | | | | |
| | | | | |
| | | | | |

**Impact levels meaning:**

| Impact | What It Means |
|--------|---------------|
| High | |
| Medium | |
| Low | |
| Not measured | |

**Safe to disable (generally):**

| Category | Examples |
|----------|----------|
| Usually safe | |
| Usually keep | |
| Research first | |

---

#### Activity D: Service Troubleshooting

**Goal:** Understand Windows services.

**Open Services:** `services.msc`

**Find and document these services:**

| Service | Status | Startup Type | Purpose |
|---------|--------|--------------|---------|
| Windows Update | | | |
| Print Spooler | | | |
| DHCP Client | | | |
| DNS Client | | | |
| Windows Audio | | | |

**Service startup types:**

| Type | Meaning |
|------|---------|
| Automatic | |
| Automatic (Delayed) | |
| Manual | |
| Disabled | |

**Common service issues:**

| Problem | Service to Check |
|---------|------------------|
| Can't print | |
| No sound | |
| Can't get IP address | |
| Windows Update fails | |
| Can't resolve DNS names | |

---

#### Activity E: Disk Health Check

**Goal:** Check disk for errors.

**Method 1: Properties**

1. Open File Explorer
2. Right-click C: drive → Properties
3. Tools tab → Check (Error checking)

Result: _______________

**Method 2: Command line**

```cmd
chkdsk C:
```

(Note: Full check requires reboot - just review current status)

| Metric | Value |
|--------|-------|
| Total disk space | |
| Bytes in bad sectors | |
| Indexes verified | |

**Method 3: SMART status (if available)**

```cmd
wmic diskdrive get status
```

Result: _______________

---

#### Activity F: Application Crash Analysis

**Goal:** Find crash information.

**Check Reliability Monitor:** `perfmon /rel`

Find any application failures:

| Application | Date | Problem |
|-------------|------|---------|
| | | |
| | | |

**Check Event Viewer:** `eventvwr.msc`

Windows Logs → Application → Filter for Errors

| Application | Event ID | Description |
|-------------|----------|-------------|
| | | |
| | | |

**Common application issues and fixes:**

| Issue | Possible Fix |
|-------|--------------|
| Missing DLL | |
| Side-by-side configuration | |
| App won't start | |
| App crashes on specific action | |
| "This app can't run on your PC" | |

---

#### Activity G: Performance Baseline

**Goal:** Document normal system performance.

**Task Manager → Performance tab**

**Record current values (with typical usage):**

| Metric | Idle Value | Normal Use |
|--------|------------|------------|
| CPU % | | |
| Memory % | | |
| Disk % | | |
| Network | | |

**What's "normal" vs concerning:**

| Metric | Normal | Concerning |
|--------|--------|------------|
| CPU idle | | |
| Memory usage | | |
| Disk activity | | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A user reports their computer is "running slow." They can't be more specific. Walk through your diagnostic approach - what would you check first, second, third?

**Scenario 2:** An employee's computer shows "Your PC ran into a problem" (BSOD) with error KERNEL_DATA_INPAGE_ERROR. This has happened three times this week. What's the likely cause and what would you do?

**Scenario 3:** A computer can access the internet but cannot reach any internal network resources (file shares, printers). Pinging internal servers by IP works. What's wrong?

**Scenario 4:** After a power outage, a computer won't boot. It beeps once, shows the manufacturer logo, then goes to a black screen. BIOS is accessible. What would you check?

---

## What You Learned Today

- ✅ Network connectivity troubleshooting sequence
- ✅ Symptom-to-cause diagnosis
- ✅ Startup program management
- ✅ Windows services troubleshooting
- ✅ Disk health checking
- ✅ Application crash analysis
- ✅ Performance baselines

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                  COMMON PC ISSUES QUICK REFERENCE                          ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  NETWORK TROUBLESHOOTING SEQUENCE                                          ║
║  ─────────────────────────────────────────────────────────────────────────║
║  1. ping 127.0.0.1      → TCP/IP stack working?                           ║
║  2. ping [gateway]      → Local network working?                          ║
║  3. ping 8.8.8.8        → Internet connectivity?                          ║
║  4. ping google.com     → DNS working?                                    ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  IP ADDRESS ISSUES                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  169.254.x.x (APIPA)  → No DHCP response (check server, cable, NIC)       ║
║  0.0.0.0              → No IP assigned                                    ║
║  Duplicate IP         → IP conflict (check static assignments)            ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  COMMON SYMPTOMS → CAUSES                                                  ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Slow boot, fast after    → Startup programs, services                    ║
║  Slow everything          → RAM, disk, malware                            ║
║  Random shutdowns         → Overheating, PSU, RAM                         ║
║  BSOD (random)            → Driver, RAM, disk                             ║
║  BSOD (specific action)   → Driver for that hardware                      ║
║  "Missing DLL"            → Reinstall app, install runtime                ║
║  Clock resets             → CMOS battery                                  ║
║  Grinding noise           → Failing HDD (backup immediately!)             ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  QUICK FIXES                                                               ║
║  ─────────────────────────────────────────────────────────────────────────║
║  ipconfig /release & /renew  → Refresh DHCP                               ║
║  ipconfig /flushdns          → Clear DNS cache                            ║
║  sfc /scannow                → Repair system files                        ║
║  Restart Print Spooler       → Fix printing                               ║
║  Safe Mode + uninstall       → Remove bad driver                          ║
╚═══════════════════════════════════════════════════════════════════════════╝
```