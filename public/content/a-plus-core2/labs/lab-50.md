# Lab 50: PC Troubleshooting Tools

**Tier:** 1  
**Time:** 30-40 minutes  
**Exam Objectives:** 3.2 - Given a scenario, troubleshoot common personal computer (PC) problems

---

## Section 1: Concept Check (5 min)

1. What is the difference between Task Manager and Resource Monitor?

2. What information does the System Information tool (msinfo32) provide that other tools don't?

3. When would you use the Reliability Monitor instead of Event Viewer?

4. What does msconfig allow you to do that Task Manager cannot?

5. What is the purpose of the Windows Memory Diagnostic tool?

---

## Section 2: Hands-On Activities

### Tier 1 Activities (Required)
> ✅ **Uses your own Windows PC** - Works on any Windows 10 or 11 system.

#### Activity A: Task Manager Deep Dive

**Goal:** Explore all Task Manager tabs.

**Step 1:** Open Task Manager

Press Ctrl+Shift+Esc (make sure it's in "More details" view)

**Processes tab:**

| Column | What It Shows |
|--------|---------------|
| CPU | |
| Memory | |
| Disk | |
| Network | |
| GPU | |

Document top 3 resource-consuming processes:

| Process | CPU % | Memory |
|---------|-------|--------|
| | | |
| | | |
| | | |

**Performance tab:**

| Resource | Current Usage |
|----------|---------------|
| CPU | |
| Memory | |
| Disk 0 | |
| GPU | |
| Wi-Fi/Ethernet | |

**Startup tab:**

| App Name | Publisher | Status | Impact |
|----------|-----------|--------|--------|
| | | | |
| | | | |
| | | | |

**Users tab - What does it show?** _______________

**Details tab - What additional info vs Processes?** _______________

**Services tab - Difference from services.msc?** _______________

---

#### Activity B: Resource Monitor Analysis

**Goal:** Use Resource Monitor for detailed analysis.

**Open Resource Monitor:** `resmon` or Task Manager → Performance → Open Resource Monitor

**CPU tab:**

| Column | Purpose |
|--------|---------|
| Image | |
| PID | |
| Average CPU | |
| Threads | |

**Memory tab:**

| Metric | Your Value | Meaning |
|--------|------------|---------|
| In Use | | |
| Available | | |
| Hardware Reserved | | |
| Modified | | |
| Standby | | |
| Free | | |

**Disk tab - identify what's reading/writing:**

| Process | Read (B/sec) | Write (B/sec) |
|---------|--------------|---------------|
| | | |
| | | |

**Network tab - identify network activity:**

| Process | Send | Receive | Address |
|---------|------|---------|---------|
| | | | |
| | | | |

---

#### Activity C: System Information (msinfo32)

**Goal:** Explore system details.

**Open:** `msinfo32`

**System Summary:**

| Property | Value |
|----------|-------|
| OS Name | |
| Version | |
| System Type | |
| Processor | |
| BIOS Mode | |
| Secure Boot State | |
| Installed RAM | |

**Hardware Resources → Conflicts/Sharing:**

Any conflicts? _______________

**Components → Storage → Drives:**

| Drive | Size | Free Space |
|-------|------|------------|
| | | |
| | | |

**Software Environment → Startup Programs:**

Count of startup programs: _______________

---

#### Activity D: Event Viewer Navigation

**Goal:** Find useful troubleshooting information.

**Open:** `eventvwr.msc`

**Create a custom view for errors:**

1. Right-click Custom Views → Create Custom View
2. Logged: Last 24 hours
3. Event level: Critical, Error
4. Logs: Windows Logs (all)
5. Name it "Recent Errors"

**How many errors in last 24 hours?** _______________

**Document one error:**

| Property | Value |
|----------|-------|
| Log | |
| Source | |
| Event ID | |
| Level | |
| Description | |

**Find a specific event:**
- Search for Event ID 6005 (Windows startup)

| Last occurrence | Date/Time |
|-----------------|-----------|
| Event 6005 | |

---

#### Activity E: Reliability Monitor

**Goal:** View system stability over time.

**Open:** Search "Reliability history" or `perfmon /rel`

**Examine the timeline:**

| Date | Stability Index | Issues? |
|------|-----------------|---------|
| Today | | |
| Yesterday | | |
| Last week | | |

**Types of events tracked:**

| Icon | Meaning |
|------|---------|
| Red X | |
| Yellow ! | |
| Blue i | |

**Find the most recent problem:**

| Event | Date | Description |
|-------|------|-------------|
| | | |

---

#### Activity F: System Configuration (msconfig)

**Goal:** Understand msconfig capabilities.

**Open:** `msconfig`

**General tab:**

| Startup Selection | Description |
|-------------------|-------------|
| Normal startup | |
| Diagnostic startup | |
| Selective startup | |

**Boot tab:**

| Option | Purpose |
|--------|---------|
| Safe boot (Minimal) | |
| Safe boot (Network) | |
| No GUI boot | |
| Boot log | |
| Timeout | |

**Services tab:**

What does "Hide all Microsoft services" help with? _______________

**Tools tab:**

List 5 tools available:

| Tool | Purpose |
|------|---------|
| | |
| | |
| | |
| | |
| | |

---

#### Activity G: Performance Monitor Basics

**Goal:** Understand performance monitoring.

**Open:** `perfmon`

**System Summary:**

| Metric | Value |
|--------|-------|
| Memory - Pages/sec | |
| PhysicalDisk - % Disk Time | |
| Processor - % Processor Time | |

**Add a counter:**

1. Right-click graph → Add Counters
2. Add: Memory → Available MBytes
3. Add: Processor → % Processor Time

**What do high values indicate?**

| Counter | High Value Means |
|---------|------------------|
| Pages/sec | |
| % Disk Time | |
| % Processor Time | |
| Available MBytes (low) | |

---

## Section 3: Reflection (5 min)

**Scenario 1:** A user complains their computer is slow. You open Task Manager and see CPU at 100%, but no single process is using more than 10%. What's happening, and how would you investigate further?

**Scenario 2:** A computer randomly freezes for 30 seconds, then resumes normally. This happens a few times a day. How would you use the tools covered today to diagnose this?

**Scenario 3:** An application crashes every time a user tries to print. Event Viewer shows an error from the app but no details. What other tools might help, and what would you check?

**Scenario 4:** After a Windows Update, the computer is noticeably slower. How would you identify if the update is the cause, and what options do you have?

---

## What You Learned Today

- ✅ Task Manager tabs and capabilities
- ✅ Resource Monitor for detailed analysis
- ✅ System Information (msinfo32)
- ✅ Event Viewer custom views and navigation
- ✅ Reliability Monitor for stability tracking
- ✅ System Configuration (msconfig)
- ✅ Performance Monitor basics

---

## Quick Reference Card

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                 TROUBLESHOOTING TOOLS QUICK REFERENCE                      ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  TOOL                  COMMAND         PURPOSE                             ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Task Manager          Ctrl+Shift+Esc  Running processes, performance     ║
║  Resource Monitor      resmon          Detailed CPU/memory/disk/network   ║
║  System Information    msinfo32        Hardware/software inventory        ║
║  Event Viewer          eventvwr.msc    Logs, errors, warnings             ║
║  Reliability Monitor   perfmon /rel    Stability history, problem events  ║
║  System Configuration  msconfig        Boot options, services, startup    ║
║  Performance Monitor   perfmon         Detailed counters, logging         ║
║  Device Manager        devmgmt.msc     Hardware, drivers, conflicts       ║
║  Disk Management       diskmgmt.msc    Partitions, volumes                ║
║  Services              services.msc    Windows services management        ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  QUICK DIAGNOSTICS                                                         ║
║  ─────────────────────────────────────────────────────────────────────────║
║  Slow computer?   → Task Manager (what's using resources)                 ║
║  Crashes?         → Event Viewer (errors around crash time)               ║
║  Stability?       → Reliability Monitor (pattern over time)               ║
║  Hardware info?   → msinfo32 (complete inventory)                         ║
║  Boot issues?     → msconfig (Safe Mode, diagnostic boot)                 ║
║  Memory issues?   → Resource Monitor (Memory tab breakdown)               ║
║  Disk activity?   → Resource Monitor (Disk tab - what's reading/writing)  ║
╠═══════════════════════════════════════════════════════════════════════════╣
║  KEY PERFORMANCE COUNTERS                                                  ║
║  ─────────────────────────────────────────────────────────────────────────║
║  % Processor Time > 80% sustained = CPU bottleneck                        ║
║  % Disk Time > 80% sustained = Disk bottleneck                            ║
║  Available MBytes < 500 MB = Memory pressure                              ║
║  Pages/sec > 20 sustained = Memory paging (need more RAM)                 ║
╚═══════════════════════════════════════════════════════════════════════════╝
```